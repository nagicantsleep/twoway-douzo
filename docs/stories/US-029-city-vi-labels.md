# US-029: Full city VI display names

## Goal

Close harness backlog #11: BirthForm `/vi` shows Vietnamese labels for
all province/city `name` keys in `cities.ts` (algorithm keys stay Chinese).

## Scope

- Expand `CITY_I18N` in `lib/ziwei/cities-i18n.ts` to cover every city /
  prefecture `name` from `cities.ts` (plus existing provinces).
- Update Decision 0002 note: remaining-city ZH island closed for display
  labels (classics bodies still backlog #12).

## Out of scope

- Classics / nihai body translation (backlog #12)
- Changing form submit values / longitude lookup keys

## Verify

```bash
npx tsc --noEmit && npm run lint:i18n
# coverage check: every cities.ts name resolves via localizePlaceName ≠ raw ZH on vi
node -e "/* see story verify via harness */"
```

## Story

US-029
