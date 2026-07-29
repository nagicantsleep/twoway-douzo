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
| Classics chapter bodies | **Option C** overlay `classics-i18n.ts` (US-031 / backlog #12) | Classical `p.text` stays Chinese; book/chapter chrome (VI) + vernacular/niNote `{ zh, vi }` via `localize*` helpers; nihai corpus deferred |
| City display names | Province + **all** city/prefecture labels in `cities-i18n.ts` (US-029 / backlog #11) | Algorithm keys stay Chinese; UI uses `localizePlaceName` |
| AI prompts | Split `prompts.zh.ts` / `prompts.vi.ts` + `prompts.ts` selector | Matches I02 US-019; locale from `useLocale()` |
| Star trait keywords + nature labels | **Option C** atoms in `terms.ts` + `localizeTerm` (US-030) | `STAR_DESCRIPTIONS.keywords` / `getMingGongSummary` stay Chinese keys; UI chips localize in `StarDetailPanel` / `ChartSummary` |
| High-visibility decorative EN tags | Prefer VI on `/vi` when the tag is a section eyebrow (US-030: `famousCharts.tag`) | Other brand-Latin tags (e.g. `CURRICULUM`) may remain intentional; do not leave raw EN that reads as unfinished copy |

## Teacher naming (canonical VI)

| Form | Use |
| --- | --- |
| **Ni Hà Hạ** | Full personal name in product copy |
| **Ni Sư** | Short honorific (aligns with ZH 倪师) |
| Avoid as primary | “Thầy Nghê” (phonetic nickname; not product voice) |

## Accepted ZH islands (I02 exit)

These surfaces intentionally keep Chinese source text on `/vi` until a
follow-up story ships a coherent translation slice. They are **not**
open hardcode bugs:

1. ~~**Classics chapter bodies**~~ — closed in US-031 for `lib/classics`
   (titles + vernacular + selective niNote; classical `p.text` remains
   Chinese by design). **`lib/nihai/*` (~97KB)** still Chinese — follow-up.
2. ~~**Remaining city display names**~~ — closed in US-029 (full
   `cities-i18n.ts` coverage; keys remain Chinese).

## Consequences
- Callers of famous persons must use `pickLocale(person.field, locale)`.
- Pattern UI uses `localizePatternName` / `localizePatternDescription`.
- Knowledge / StarDetail long-form use `getKnowledge(..., locale)` /
  `getStarDetail(name, locale)` / `starBriefSeo(star, locale)`.
- Library chapter pages use `localizeBookChrome` /
  `localizeChapterChrome` / `localizeParagraphExtras`; classical text
  stays Chinese with a source note explaining the bilingual layout.
- Initiative I02 US-031; harness backlog #12 (classics done; nihai open).
- BirthForm place dropdowns use `localizePlaceName` for all cities.
- Keyword / nature chips must call `localizeTerm(...)` — never render
  raw atoms from `constants.ts` / `patterns.ts` on `/vi`.
- VI long-form referring to the teacher uses **Ni Hà Hạ** / **Ni Sư**.

## Related
- Decision 0003 (zh primary + vi second)
- Initiative I02 US-017 / US-018 / US-019 / US-026 / US-028 / US-029 / US-030 / US-031
- Harness backlog #12 (classics closed in US-031; nihai deferred)
