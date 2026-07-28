# Initiative I02 — design.md

## Kiến trúc tổng thể

### 1. Lớp UI (component/page) — pattern hiện có từ I01

Vẫn dùng `useTranslations` (client) / `getTranslations` (server) +
`localizeTerm` cho thuật ngữ Tử Vi (xem `lib/ziwei/terms.ts`).

```tsx
// client component
'use client';
import { useTranslations, useLocale } from 'next-intl';
import { localizeTerm } from '@/lib/ziwei/terms';

export default function Example() {
  const t = useTranslations('namespace.subkey');
  const locale = useLocale();
  return (
    <div>
      <h1>{t('title')}</h1>          {/* UI copy */}
      <span>{localizeTerm('命宫', locale)}</span>  {/* thuật ngữ Tử Vi */}
    </div>
  );
}
```

**Quy tắc**:
- UI copy (button, label, error, header, paragraph marketing) → `t()`.
- Tên sao/cung/địa chi/can/tứ hóa/năm tháng → `localizeTerm()` (vì
  key trong `TERMS` đã được I01 chuẩn hóa + review chuyên môn).
- KHÔNG dùng `localizeTerm` cho UI text marketing (vì `TERMS` không
  chứa chuỗi marketing như "立即起盘", "AI 解读").
- KHÔNG thêm key mới vào `TERMS` chỉ để render 1 lần — dùng `t()`.

### 2. Lớp data — 3 shape tùy ngữ cảnh

| File | Kích thước | Đề xuất shape | Lý do |
| --- | --- | --- | --- |
| `lib/ziwei/patterns.ts` | 1118 dòng, ~30 pattern | **A — Tách file** `patterns.vi.ts`/`patterns.zh.ts` | Mỗi pattern object có ~6 field string; tách file tránh object literal phình |
| `lib/ziwei/famous.ts` | 136 dòng, ~14 person + 5 category | **B — Field pair** `{ vi, zh }` | Object nhỏ, gọn, lookup O(1) |
| `lib/ziwei/db-analysis.ts` (`TOPIC_LABEL`) | 13 key | **C — Messages** `insight.topics.{key}` | Đã có namespace sẵn, đồng nhất UI |
| `lib/ziwei/db-analysis.ts` (`STAR_DB`) | 14 × 13 = 182 paragraph (4 段 each) | **A — Tách file** `db-analysis.zh.ts` (giữ gốc) + `db-analysis.vi.ts` (mới dịch) | Long-form content, song ngữ, tách file để dễ review song song |
| `lib/seo/knowledge.ts` (`STAR_BRIEF_SEO`) | 14 entry short | **B — Field pair** | Ngắn, lookup nhanh |
| `components/StarDetailPanel.tsx` (`STAR_DETAIL` inline) | 14 star × 8 field | **A — Tách file** `star-detail.vi.ts`/`star-detail.zh.ts` | Long-form giống STAR_DB |
| `components/InsightPanel.tsx` (`TOPIC_PROMPTS`) | 6 prompt dài | **A — Tách file** `prompts.vi.ts`/`prompts.zh.ts` | AI prompts, tách để dễ test A/B |

#### Chi tiết shape A (tách file)

```ts
// lib/ziwei/patterns.zh.ts (gốc — giữ nguyên text Trung)
export const PATTERNS_ZH: Pattern[] = [
  { id: 'jun-chen', name: '君臣庆会', ... },
  ...
];

// lib/ziwei/patterns.vi.ts (mới — dịch)
export const PATTERNS_VI: Pattern[] = [
  { id: 'jun-chen', name: 'Quần Thần Khánh Hội', ... },
  ...
];

// lib/ziwei/patterns.ts (giữ nguyên interface + re-export hàm detect)
export type { Pattern, PatternLevel } from './patterns.types';
import { PATTERNS_ZH } from './patterns.zh';
import { PATTERNS_VI } from './patterns.vi';
const PATTERNS = { vi: PATTERNS_VI, zh: PATTERNS_ZH } as const;
export function detectPatterns(chart, locale) {
  return PATTERNS[locale].filter(...);
}
```

**Breaking change**: `detectPatterns(chart)` thành `detectPatterns(chart, locale)`. Caller hiện tại: `PatternsCard.tsx`, `ChartSummary.tsx` — sửa 2 chỗ.

#### Chi tiết shape B (field pair)

```ts
// lib/ziwei/famous.ts
export interface FamousPerson {
  name: string;
  category: { vi: string; zh: string };  // thay vì '商业' string
  description: { vi: string; zh: string };
  notable: { vi: string; zh: string };
  // ... other fields unchanged
}
```

**Breaking change**: caller hiện tại (`FamousCharts.tsx` line 30, `FamousPersonCard.tsx` line 33) đọc `person.category` như string → đổi thành `person.category[locale]`.

#### Chi tiết shape C (messages)

`TOPIC_LABEL` hiện là `Record<TopicKey, string>` dùng ở `app/knowledge/page.tsx` (TOPIC_LABEL[t2]) và `app/knowledge/[star]/[topic]/page.tsx` (data.topicLabel) → migrate sang `messages/{vi,zh}/insight.json` key `topics.{topicKey}`.

### 3. Lớp AI prompt — tách file + prepend locale preamble

```ts
// lib/insight/prompts.zh.ts
export const PROMPTS_ZH = { overview: '请生成命格总览…', love: '请深度分析…' } as const;

// lib/insight/prompts.vi.ts
export const PROMPTS_VI = { overview: 'Hãy phân tích tổng quan mệnh bàn…', love: 'Hãy phân tích sâu tình duyên hôn nhân…' } as const;
```

InsightPanel lúc build prompt:
```ts
const PROMPTS = locale === 'vi' ? PROMPTS_VI : PROMPTS_ZH;
const t = useTranslations('insight');
// chèn preamble "Trả lời bằng tiếng Việt." nếu vi
const preamble = locale === 'vi' ? '\n\n[Trả lời bằng tiếng Việt.]\n' : '';
const finalPrompt = preamble + PROMPTS[topicKey];
```

Inline prompt (palace + siHua) trong `InsightPanel.tsx` dùng
`localizeTerm` thay cho string CJK hardcode — đã có sẵn trong TERMS
(`命宫`, `身宫`, `夫妻宫`, `化禄`, etc).

### 4. Key parity (US-013) — strategy

Sau khi backfill data layer (US-016/017) + thêm những namespace mới
(`home.announcementModal`, `home.curriculum`, v.v.), nhiều key sẽ
xuất hiện lệch giữa vi↔zh. Quy trình:

1. Mỗi US implement xong → chạy `npx tsx scripts/diff-message-keys.ts`
   (tool mới trong US-018).
2. Tool sinh diff report: tập key có trong `vi` mà không trong `zh`
   (hoặc ngược lại).
3. Với mỗi missing key: copy từ locale có sẵn làm placeholder, dịch
   trong cùng PR.
4. CI guard (US-018) chặn merge khi drift.

### 5. Tooling guard — `scripts/verify-no-hardcode.mjs`

Logic:
- Đọc danh sách file trong `app/[locale]/**`, `components/**` (trừ
  `lib/ziwei/terms.ts` + data layer đã quy ước + `app/globals.css`).
- Tìm pattern `[一-鿿]+` (chuỗi CJK ≥ 2 ký tự) trong JSX/TSX.
- Cho phép whitelist:
  - Comment (`//`, `/*`, `*`).
  - `localizeTerm('紫微', locale)` — đã qua lớp dịch.
  - `lib/ziwei/TERMS` keys.
  - `data-i18n="..."` attribute (placeholder).
- Exit 1 nếu phát hiện chuỗi UI hardcode ngoài whitelist.
- Wire vào `package.json` `lint:i18n` script + husky pre-commit.

## Trade-offs

- **Tách file (A)** cho long-form: cần sync 2 file khi schema đổi
  (nếu thêm field → cả 2 file). Mitigation: dùng `satisfies Pattern[]`
  TS check.
- **Field pair (B)** cho short-form: thêm 2 chỗ vi/zh ngay cạnh nhau,
  dễ drift khi quên dịch field. Mitigation: thêm test đảm bảo cả 2
  field cùng tồn tại (Zod schema hoặc vi.test.ts đơn giản).
- **Messages (C)**: nhất quán với UI nhưng cần `useTranslations` hook
  trong file đang ở module scope (TOPIC_LABEL hiện dùng trong server
  component `app/knowledge/page.tsx` — OK vì server component có thể
  await getTranslations, nhưng call site phải đổi từ `TOPIC_LABEL[t]`
  thành `t(`topics.${t}`)`).
- AI prompt khi vi: cần test thực tế rằng Claude trả lời tiếng Việt
  đầy đủ khi nhận prompt tiếng Việt — có thể cần prepend "Trả lời
  bằng tiếng Việt" để chắc chắn.

## Risk controls

- Mỗi tầng verify `npm run build` + `npx tsc --noEmit`.
- Locale switch `/vi` ↔ `/zh` thủ công sau mỗi US (Playwright tự
  động hóa sẽ là follow-up backlog).
- AI prompt vi cần manual test 1 round trước khi merge (build sample
  chart, click 3 topic, kiểm response ngôn ngữ).
- Data layer tách file phải giữ export name ổn định để caller không
  vỡ.
