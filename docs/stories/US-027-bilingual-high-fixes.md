# US-027 — Fix High bilingual bugs (homepage pattern demo + BirthForm)

**Lane:** tiny  
**Intake:** #20  
**Epic:** I02 hardcode cleanup

## Contract

1. Homepage pattern-recognition demo cards use dedicated zh/vi demo strings — do **not** parse bullet text with `：` / `、`.
2. BirthForm summary chip and true-solar label localize shichen via `localizeTerm(SHICHEN_NAMES[branch], locale)`.
3. BirthForm summary chip localizes province/city via `localizePlaceName`.
4. `verify-no-hardcode.mjs` no longer fully allowlists `app/[locale]/page.tsx` for demo UI Chinese (algorithm keys live under `lib/`).

## Verify

```bash
npx tsc --noEmit && npm run lint:i18n && node scripts/verify-no-hardcode.mjs
```
