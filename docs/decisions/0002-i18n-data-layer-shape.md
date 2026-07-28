# 0002 — i18n data-layer shape (中越)

## Status
Accepted

## Context
I02 needs bilingual display for short-form data (`patterns.ts`,
`famous.ts`) and long-form content (`STAR_DB`, `STAR_DETAIL`). UI copy
already uses next-intl JSON; algorithm keys stay Chinese.

## Decision

| Surface | Shape | Rationale |
| --- | --- | --- |
| `famous.ts` name / description / notable | **Option B** `{ zh, vi }` fields + `pickLocale()` | Small objects; callers already hold the record |
| `patterns.ts` static names (+ optional description) | **Option C** lookup map `pattern-i18n.ts` keyed by Chinese `name` | Detection algorithm stays Chinese; UI localizes after `detectPatterns()` |
| Pattern conditions / sources / dynamic names | **Option C** maps in `pattern-i18n.ts` (`CONDITION_VI` / `SOURCE_VI` / `DESCRIPTION_VI` + fragment helpers) — shipped US-026 | UI localizes after `detectPatterns()`; algorithm stays Chinese |
| `STAR_DB` / `STAR_DETAIL` | **Option A** split `*.zh.ts` / `*.vi.ts` + locale selector | Long-form; shipped in US-018 |
| `STAR_BRIEF_SEO` / `TOPIC_LABEL` | **Option B** `{ zh, vi }` + `pickLocale()` | Short lookup; shipped in US-018 |
| Homepage demo `STAR_BRIEF` / `SIHUA_BRIEF` | **Option B** `homepage-demo-i18n.ts` | Shipped US-026 |
| Library chapter chrome | next-intl `library.chapter.*` | Shipped US-026; body text stays ZH |
| Classics chapter bodies | **Accepted ZH island** (backlog #12) | Original + vernacular + niNote stay Chinese source until a dedicated translation slice; UI chrome + `/vi` source note explain this (US-026 / US-028) |
| City display names | Province + major cities in `cities-i18n.ts`; **remaining cities accepted as ZH proper nouns** (backlog #11) | Partial US-026; algorithm keys stay Chinese |
| AI prompts | Split `prompts.zh.ts` / `prompts.vi.ts` + `prompts.ts` selector | Matches I02 US-019; locale from `useLocale()` |

## Accepted ZH islands (I02 exit)

These surfaces intentionally keep Chinese source text on `/vi` until a
follow-up story ships a coherent translation slice. They are **not**
open hardcode bugs:

1. **Classics / nihai chapter bodies** — `p.text` / `p.translation` /
   `p.niNote` in `lib/classics` (backlog #12).
2. **Remaining city display names** — unlisted entries in
   `cities-i18n.ts` fall back to Chinese proper nouns (backlog #11).

## Consequences
- Callers of famous persons must use `pickLocale(person.field, locale)`.
- Pattern UI uses `localizePatternName` / `localizePatternDescription`.
- Knowledge / StarDetail long-form use `getKnowledge(..., locale)` /
  `getStarDetail(name, locale)` / `starBriefSeo(star, locale)`.
- Library chapter pages must show a localized source note on `/vi`
  when bodies remain Chinese.

## Related
- Decision 0003 (zh primary + vi second)
- Initiative I02 US-017 / US-018 / US-019 / US-026 / US-028
- Harness backlog #11 (cities), #12 (classics bodies)
