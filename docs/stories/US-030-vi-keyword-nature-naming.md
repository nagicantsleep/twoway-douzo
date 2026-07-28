# US-030: VI keyword/nature chips + Ni Hà Hạ naming

## Goal

Close High/Medium leftovers from the 中越 quantity+quality review:

1. `/vi` chart keyword + nature chips never show raw Chinese.
2. Canonical teacher naming: **Ni Hà Hạ** (full) / **Ni Sư** (short).
3. Targeted `verify-no-hardcode` regression guard for keyword consumers.
4. Localize high-visibility `Famous Charts` decorative tag on `/vi`.

## Scope

- Add keyword atoms + nature labels to `lib/ziwei/terms.ts` (`localizeTerm`).
- Wire `StarDetailPanel` + `ChartSummary` to localize keyword chips.
- Replace `Thầy Nghê` → `Ni Sư` in `star-detail.vi.ts`; fix `Ni Hải Hạ` typo in TERMS.
- Document naming + keyword surface in Decision 0002.
- Extend `scripts/verify-no-hardcode.mjs` with structural keyword-consumer checks (keep algorithm-key allowlists).
- `messages/vi/home.json` `famousCharts.tag` → Vietnamese.

## Out of scope

- Classics / nihai chapter body translation (backlog #12)
- Un-allowlisting all of `lib/`
- Full decorative-EN audit beyond Famous Charts

## Naming convention

| Form | Use |
| --- | --- |
| **Ni Hà Hạ** | Full name in product copy |
| **Ni Sư** | Short honorific (matches ZH 倪师) |
| Avoid | “Thầy Nghê” as primary product voice |

## Verify

```bash
npx tsc --noEmit && npm run lint:i18n
```

## Story

US-030
