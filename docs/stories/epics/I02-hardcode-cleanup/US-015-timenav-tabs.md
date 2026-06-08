# US-015: I18n TimeNav tabs + sihua overlay labels

**Lane**: normal
**Status**: planned
**Initiative**: I02

## Scope

- `components/TimeNav.tsx`: 本命/大限/流年 tab labels, "大限
  X–Y", "大限年四化：", "禄权科忌" → `useTranslations('chart.timeNav')`.
- `ChartBoard.tsx` legend: "化禄/化权/化科/化忌" → dùng
  `localizeTerm` (đã có trong terms.ts `'禄'/'权'/'科'/'忌'`).
- `TopBar.tsx` action buttons labels "分享"/"打印" → dùng
  `localizeTerm` (đã có).

## Files
- `components/TimeNav.tsx`
- `components/ChartBoard.tsx`
- `components/chart/TopBar.tsx`
- `messages/{vi,zh}/chart.json`

## Verify
- Tab labels locale-aware.
- Legend 四化 ký tự đúng locale.
