# US-022 — zh primary defaultLocale

## Goal
Chinese is the default product language. Root `/` lands on `/zh`.

## Contract
- `i18n/routing.ts`: `defaultLocale: 'zh'`, locales include `zh` and `vi`
- `app/page.tsx` redirects to `/zh`
- Root / SEO defaults prefer `zh_CN` when locale unspecified

## Verify
`rg -q "defaultLocale: 'zh'" i18n/routing.ts && rg -q "redirect('/zh')" app/page.tsx`
