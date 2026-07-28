# US-017: I18n patterns.ts + famous.ts

**Lane**: normal
**Status**: implemented
**Initiative**: I02

## Scope

- `lib/ziwei/patterns.ts`: tách file `patterns.zh.ts` (giữ gốc) +
  `patterns.vi.ts` (dịch). Khoảng 30 pattern × 6 field.
- `lib/ziwei/famous.ts`: chuyển `category`/`description`/`notable`
  sang `{ vi, zh }` field pair.
- Caller update: `PatternsCard.tsx`, `ChartSummary.tsx`,
  `FamousCharts.tsx`, `FamousPersonCard.tsx`.
- `detectPatterns()` signature thêm `locale` param.

## Dependent on
- Decision 0002-i18n-data-layer-shape.md phải có trước khi code.

## Files
- `lib/ziwei/patterns.ts` (refactor)
- `lib/ziwei/patterns.zh.ts` (new)
- `lib/ziwei/patterns.vi.ts` (new)
- `lib/ziwei/famous.ts` (refactor)
- Các component gọi `detectPatterns`

## Verify
- `npm run build` + `npx tsc --noEmit` pass.
- `/vi`: pattern names/description tiếng Việt.
- `/zh`: pattern names/description tiếng Trung.
