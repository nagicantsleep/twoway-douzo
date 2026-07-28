# US-026: Pattern conditions/source + library chapter chrome

**Lane**: normal  
**Status**: planned → implemented  
**Initiative**: I02  
**Intake**: #19  
**Backlog**: #10

## Scope

Close remaining high/medium ZH→VI gaps on `/vi`:

1. **Patterns** — extend `pattern-i18n.ts` (Decision 0002 Option C) so
   name + description + conditions + source localize for `vi`.
   Wire `PatternsCard.tsx` + `ChartSummary.tsx`.
2. **Library chapter chrome** — `library/[book]/[chapter]/page.tsx`
   next-intl (`library.chapter.*`). Classic body text stays Chinese
   with a VI source note.
3. **Homepage demo briefs** — move `SIHUA_BRIEF` / `STAR_BRIEF` to
   `homepage-demo-i18n.ts` `{ zh, vi }`.
4. **Cities** — bilingual province + major city labels via
   `cities-i18n.ts`; remaining cities as ZH proper nouns (follow-up).
5. **Curriculum empty `note` keys** — intentional optional fields
   (only `diji` has content); leave as-is.

## Out of scope

- Full classics / nihai body translation
- Full 335-city VI glossary

## Verify

```bash
npx tsc --noEmit && npm run lint:i18n
```

## Files

- `lib/ziwei/pattern-i18n.ts`
- `lib/ziwei/homepage-demo-i18n.ts`
- `lib/ziwei/cities-i18n.ts`
- `components/PatternsCard.tsx`, `ChartSummary.tsx`, `BirthForm.tsx`
- `app/[locale]/library/[book]/[chapter]/page.tsx`
- `app/[locale]/page.tsx`
- `messages/{zh,vi}/library.json`
- `docs/decisions/0002-i18n-data-layer-shape.md`
- `scripts/verify-no-hardcode.mjs`
