# Initiative I01 — design.md

## Kiến trúc i18n (next-intl)

### Routing
- `i18n/routing.ts`: `defineRouting({ locales: ['vi','zh'], defaultLocale: 'vi', localePrefix: 'always' })`
- `/` redirect → `/vi`. URL: `/vi/...`, `/zh/...`.
- `middleware.ts`: `createMiddleware(routing)` — locale negotiation + alternate links.
- `i18n/request.ts`: `getRequestConfig` load messages theo locale.
- `i18n/navigation.ts`: `createNavigation(routing)` — Link/redirect/router locale-aware.
- `global.d.ts`: augment `AppConfig.Messages = typeof viMessages` (type-safe keys).
- `next.config.js`: bọc `withNextIntl('./i18n/request.ts')`, giữ `transpilePackages: ['lunar-javascript']`.

### App restructure → [locale]
```
app/page.tsx       → app/[locale]/page.tsx
app/chart/...       → app/[locale]/chart/...
app/heming/...      → app/[locale]/heming/...
app/knowledge/...   → app/[locale]/knowledge/...
app/library/...     → app/[locale]/library/...
app/privacy, terms  → app/[locale]/...
app/layout.tsx      → app/[locale]/layout.tsx  (<html lang={locale}>, setRequestLocale, NextIntlClientProvider)
```
- `generateStaticParams()` → `[{locale:'vi'},{locale:'zh'}]`.
- `app/robots.ts`, `app/sitemap.ts` giữ root, thêm hreflang vi/zh.

### Message catalog (namespace, tránh 1 file khổng lồ)
```
messages/{vi,zh}/
  common.json   home.json   form.json   chart.json   insight.json
  heming.json   knowledge.json   library.json   share.json   terms.json   metadata.json
```
- Server component: `await getTranslations('ns')`. Client: `useTranslations('ns')`.
- Nội suy: `${m}月没有${d}日` → ICU `t('invalidDay', {m,d})`.

### Thuật ngữ Tử Vi — lớp hiển thị (KHÔNG đổi key tra cứu)
- ⚠️ Tên sao/cung là KEY trong `SI_HUA_TABLE`, `STAR_BRIGHTNESS`, `STAR_DESCRIPTIONS`... → giá trị gốc tiếng Trung GIỮ NGUYÊN.
- Tạo `lib/ziwei/terms.ts`: `{ '紫微': {vi:'Tử Vi', zh:'紫微'}, ... }` + `localizeTerm(zh, locale)`.
- Phạm vi: 14 chính tinh, 12 cung, tứ hóa, 12 địa chi, 10 thiên can, ngũ hành cục, phụ tinh/sát tinh, thời thần.
- Component render (ChartBoard, PalaceCell, TimeNav, StarDetailPanel, ChartSummary) gọi `localizeTerm()`.

### Nội dung tri thức (~43k ký tự)
- `lib/ziwei/patterns.ts`: field `description`/`conditions`/`source` → theo locale.
- `lib/nihai/{tianji,renji,diji}.ts`: NiModule→chapters content → theo locale.
- `lib/classics/data/*.ts`: GIỮ `text` Hán, điền `translation` (Việt) — field đã có trong type `Paragraph`.
- Quyết định cấu trúc (file `*.vi.ts`/`*.zh.ts` vs field `{vi,zh}`): chốt trong US-007.
- AI prompts trong `InsightPanel.tsx` (6 TOPIC_PROMPTS): dịch theo locale để AI trả lời đúng ngôn ngữ.

## Risk controls
- Không sửa giá trị key tiếng Trung trong các bảng tra cứu thuật toán.
- Mỗi tầng verify build + tsc trước khi sang tầng sau.
- Pass review chuyên môn thuật ngữ Tử Vi (dễ sai: Thất Sát, Phá Quân, Cự Môn...).

## Decision record cần tạo
- `docs/decisions/0001-i18n-url-contract.md` — đổi public URL contract sang locale-prefixed (high-risk gate: public contracts).
