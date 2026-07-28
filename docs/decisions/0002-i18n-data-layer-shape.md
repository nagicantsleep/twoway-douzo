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
| Pattern conditions / sources / dynamic names | Stay Chinese for now; follow-up (backlog #10) | Runtime-built strings; full vi needs larger translation pass |
| `STAR_DB` / `STAR_DETAIL` | **Option A** split `*.zh.ts` / `*.vi.ts` + locale selector | Long-form; shipped in US-018 |
| `STAR_BRIEF_SEO` / `TOPIC_LABEL` | **Option B** `{ zh, vi }` + `pickLocale()` | Short lookup; shipped in US-018 |
| Classics chapter bodies | Deferred (backlog #10) | Library long-form; not US-018 core |
| AI prompts | Split `prompts.zh.ts` / `prompts.vi.ts` + `prompts.ts` selector | Matches I02 US-019; locale from `useLocale()` |

## Consequences
- Callers of famous persons must use `pickLocale(person.field, locale)`.
- Pattern UI uses `localizePatternName` / `localizePatternDescription`.
- Knowledge / StarDetail long-form use `getKnowledge(..., locale)` /
  `getStarDetail(name, locale)` / `starBriefSeo(star, locale)`.

## Related
- Decision 0003 (zh primary + vi second)
- Initiative I02 US-017 / US-018 / US-019
