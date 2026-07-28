# US-024 — Language switcher zh↔vi + README 中越

## Goal
Users can switch between Chinese and Vietnamese on major surfaces.
README describes 中越 bilingual (not Japanese).

## Contract
- `LocaleSwitcher` component using next-intl navigation
- Placed in home nav (and chart top bar if low-cost)
- README i18n section lists `/zh` and `/vi`

## Verify
`test -f components/LocaleSwitcher.tsx && rg -q '/zh' README.md && rg -q '/vi' README.md`
