# Initiative I02 — Loại bỏ Hardcode Tiếng Trung (中越双语闭环)

Epic kế tiếp sau I01 (Vietnamese i18n), tiếp tục closure gap i18n còn sót
sau I01 đã merge. Mục tiêu: **`/zh` là ngôn ngữ chính**, `/vi` render
**hoàn toàn** tiếng Việt, **không còn chuỗi CJK hardcode** trong
component/page nào làm hỏng trải nghiệm `/vi`.

> Intake #16: cặp song ngữ là **中文 + Tiếng Việt** (không phải tiếng Nhật).

## Tại sao cần epic riêng

I01 đã establish hạ tầng next-intl (routing, request, navigation,
middleware) + localizeTerm bảng 169 thuật ngữ + dịch ~12 namespace JSON
+ backfill 16 components/pages (US-010, US-011) + 14 主星 knowledge DB
(US-007). Tuy nhiên tồn tại 3 lớp hardcode **chưa xử lý** khi I01 close:

1. **UI copy trong client components lớn**: `app/[locale]/page.tsx`
   (HomePage, 1197 dòng, ~80% CJK), `components/BirthForm.tsx`
   (BirthForm, 495 dòng, ~60% CJK), `components/AnnouncementModal.tsx`
   (208 dòng, 100% CJK), `components/TimeNav.tsx` (Tab labels, sihua
   header), `components/ChartSummary.tsx` (~30 `localizeTerm` thay vì
   `t()` cho UI text), `components/PalaceCell.tsx` (siHua
   labels/overlay), `components/StarDetailPanel.tsx` (4-section
   headings).
2. **Data layer**: `lib/ziwei/patterns.ts` (1118 dòng, 100% CJK —
   `君臣庆会`, `description`, `required/bonus/breaking`, `source`),
   `lib/ziwei/famous.ts` (4 category titles + per-person
   `description`/`notable`), `lib/ziwei/db-analysis.ts` (TOPIC_LABEL,
   STAR_DB paragraphs), `lib/seo/knowledge.ts` (STAR_BRIEF_SEO),
   `lib/ziwei/STAR_DETAIL` inline trong `StarDetailPanel.tsx`
   (`niHaixia`/`classical` long-form).
3. **AI prompts** (InsightPanel.tsx, `TOPIC_PROMPTS` 100+ dòng CJK +
   inline `prompt` build từ chart.palaces) — gửi cho Claude AI để
   generate; phải là tiếng Việt khi locale=vi để AI trả lời đúng
   ngôn ngữ user.
4. **Key parity drift**: US-012 phát hiện 144 key thiếu trong vi,
   123 key thiếu trong zh, rải đều 6 namespace (`chart`, `form`,
   `insight`, `knowledge`, `library`, `share`, `star-detail`).

Khối lượng này không vừa một US-010/US-011 tiếp — cần epic riêng với
~6-8 story + decision record về kiến trúc.

## Intake

- Intake: #14 (change request, lane normal — flag multi-domain + existing-behavior + weak-proof)
- Decision: `0002-i18n-data-layer-shape.md` (chốt shape lưu nội dung
  đa ngôn ngữ cho data layer)
- Kế thừa decision 0001 (URL contract) từ I01.

## Affected product surface

### Component/page
- `app/[locale]/page.tsx` — HomePage
- `components/BirthForm.tsx` — form lập lá số
- `components/AnnouncementModal.tsx` — modal thông báo
- `components/TimeNav.tsx` — 本命/大限/流年 tabs
- `components/ChartSummary.tsx` — tóm tắt bàn cờ
- `components/PalaceCell.tsx` — cell trong bàn cờ
- `components/StarDetailPanel.tsx` — 4 section headings
- `components/ChatPanel.tsx` — heading + empty hint (đã có t() rồi,
  cần verify)
- `components/ShareCardCanvas.tsx` — header/footer card share
- `components/ShareModal.tsx` — modal title/buttons (đã có t() rồi)
- `components/PatternsCard.tsx` — đã có t() rồi
- `components/FamousPersonCard.tsx` — heading/disclaimer
- `components/ChartBoard.tsx` — chart title (đã có t())
- `components/ChartSummary.tsx` — section titles

### Data layer
- `lib/ziwei/patterns.ts` — pattern names/descriptions/conditions/sources
- `lib/ziwei/famous.ts` — category titles, person descriptions, notable
- `lib/ziwei/db-analysis.ts` — TOPIC_LABEL, STAR_DB paragraphs
- `lib/seo/knowledge.ts` — STAR_BRIEF_SEO
- `lib/ziwei/StarDetailPanel-inline` — STAR_DETAIL long-form

### Messages
- 6 namespace có drift: chart, form, insight, knowledge, library,
  share, star-detail (US-012 scope)

### AI prompts
- `components/InsightPanel.tsx` — TOPIC_PROMPTS + inline `prompt`
  builders cho palace/siHua

### Tooling
- `scripts/verify-no-hardcode.mjs` (NEW) — guard CI chống hardcode tái
  xâm nhập

## Candidate stories

| ID | Title | Lane | Estimate |
| --- | --- | --- | --- |
| US-013 | Backfill messages vi↔zh key parity (US-012 nối tiếp) | normal | 1 feat |
| US-014 | I18n BirthForm + AnnouncementModal (40 strings) | normal | 1 feat |
| US-015 | I18n TimeNav tabs + sihua overlay labels (12 strings) | normal | 1 feat |
| US-016 | I18n HomePage hero/feature/philosophy (~80 strings) | normal | 1 feat |
| US-017 | I18n patterns.ts + famous.ts (data layer short-form) | normal | 1 feat |
| US-016 | I18n STAR_DB + STAR_BRIEF_SEO + STAR_DETAIL (data layer long-form) | high-risk | 1 feat |
| US-017 | I18n AI prompts (TOPIC_PROMPTS + inline builders) | high-risk | 1 feat |
| US-018 | Tooling: lint guard + zh-punct nâng cấp | tiny | 1 feat |
| US-019 | I18n ShareCardCanvas + StarDetailPanel section labels | normal | 1 feat |

(Cập nhật con số khi viết xong execplan.md.)

## Decision record cần tạo

- `0002-i18n-data-layer-shape.md` — chốt shape lưu nội dung đa ngôn
  ngữ trong data layer:
  - **Option A**: Tách file `patterns.vi.ts`/`patterns.zh.ts`
    (mỗi file export cùng shape). Đơn giản, không ảnh hưởng type.
  - **Option B**: Field `{ vi: string; zh: string }` trong cùng object
    (giống `lib/ziwei/terms.ts`). Dễ lookup, gọn hơn nhưng đổi type
    cũ → breaking change.
  - **Option C**: `i18n/<key>.json` messages + key lookup runtime
    (tương tự I01). Nhất quán với UI namespace, nhưng cần map starName
    → key.
  - **Đề xuất**: A (tách file) cho `patterns.ts` (1118 dòng, đủ lớn
    để tách), B (field pair) cho `famous.ts` (object nhỏ, vừa pair),
    C (messages) cho `TOPIC_LABEL` (đã có namespace `insight.topics`).
  - Final chốt trong US-016 design (đặt trước US-017 khi implement).

## Exit criteria

- `npm run build` pass, `npx tsc --noEmit` sạch.
- `npx tsx scripts/verify-no-hardcode.mjs` (CI guard) exit 0.
- `/vi` UI chrome 100% tiếng Việt, `/zh` 100% tiếng Trung
  (tolerance: algorithm keys trong `TERMS`/constants; **accepted ZH
  islands** — classics/nihai bodies + remaining city proper nouns —
  per Decision 0002; UI phải giải thích nguồn Trung trên `/vi`).
- `next build` không có `MISSING_MESSAGE` warning nào.
- `messages/vi` và `messages/zh` key parity 100% (no drift).
- AI prompt ở locale=vi gửi tiếng Việt cho Claude → response tiếng
  Việt; locale=zh giữ tiếng Trung.

## Status (merged)

Epic merged to `main` via PR #8 (merge commit `6b07000`, tip
`b860284`). Follow-ups: backlog #11 (cities), #12 (classics bodies),
#7 (Playwright locale e2e). US-025 retired (JA superseded).

## Open decisions

- ~~Kiến trúc data layer~~ → Decision 0002 Accepted.
- ~~AI prompt locale split~~ → shipped US-019 (`prompts.{zh,vi}.ts`).

## Trace tier (theo TRACE_SPEC.md)

- Epic close: Detailed (multi-domain, kết hợp 6-9 US, nhiều quyết định)
- Từng US: Standard

## Liên kết

- `docs/BRANCHING.md` — workflow áp dụng
- `docs/stories/initiatives/I01-vietnamese-i18n/{overview,design,execplan}.md`
  — epic trước
- `docs/decisions/0001-i18n-url-contract.md` — URL contract
- `scripts/bin/harness-cli query matrix` — story status hiện tại
