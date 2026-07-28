# US-028: I02 exit docs sync + Medium decorative labels

## Goal

After epic I02 → main, sync exit criteria for accepted ZH islands and
ship Medium bilingual polish that does not require full corpus translation.

## Scope

1. **Docs / Decision** — mark accepted ZH islands (classics bodies,
   remaining city proper nouns) in Decision 0002, I02 overview,
   and pr-body.
2. **Decorative EN labels** — localize bare English chrome in
   `library` / `knowledge` message namespaces (CLASSICS, CHAPTERS,
   KNOWLEDGE BASE, ZI WEI · 14 STARS).
3. **Library Chinese-source UX** — clearer `chapter.sourceNote` on `/vi`
   when body/vernacular/niNote remain Chinese sources.

## Out of scope

- Full classics / nihai body VI translation (backlog #12)
- Full remaining city VI map (backlog #11 — follow-up story)

## Verify

```bash
npx tsc --noEmit && npm run lint:i18n
```

## Story

US-028
