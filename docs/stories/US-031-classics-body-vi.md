# US-031: Classics chapter body VI (backlog #12)

## Goal

Ship a coherent Vietnamese reading slice for the classics library on `/vi`:
chapter titles + vernacular (`translation`) + selective `niNote`, while keeping
classical `text` in Chinese (bilingual layout).

## Scope

- Decision 0002 Option C overlay: `lib/classics/classics-i18n.ts` + localize helpers
- All 3 books (`gusuifu`, `quanji`, `quanshu`): book chrome, chapter titles/subtitles, paragraph vernacular ZH+VI
- Selective Ni Sư notes (`niNote`) on pedagogically key paragraphs
- Wire `app/[locale]/library/**` to pick locale
- Update `library.chapter.sourceNote` / vernacular / niNote labels when VI body ships
- Document classics island closure (nihai deferred) in Decision 0002

## Out of scope

- Full `lib/nihai/*` (~97KB) body translation — follow-up inventory
- Replacing classical `p.text` with Vietnamese 古文

## Naming

| Form | Use |
| --- | --- |
| **Ni Hà Hạ** | Full name in product copy / notes |
| **Ni Sư** | Short honorific |
| Avoid | “Thầy Nghê” |

## Verify

```bash
npx tsc --noEmit && npm run lint:i18n
```

## Story

US-031
