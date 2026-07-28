# I02 — Loại bỏ Hardcode Tiếng Trung

## Summary

Epic kế tiếp I01: closure gap i18n còn sót. Backfill messages vi↔zh
key parity (US-013), tool guard chống hardcode tái xâm nhập (US-018),
sửa 6-7 component lớn còn UI copy CJK (US-014/015/016/020), migrate
data layer `patterns.ts`/`famous.ts`/`STAR_DB`/`STAR_DETAIL` sang
locale-aware (US-017/018), i18n AI prompts cho Claude (US-019).

## Intake

- Intake: #14 (change request, lane normal, flags: multi-domain,
  existing-behavior, weak-proof)
- Decision: `0002-i18n-data-layer-shape.md` (chốt shape data layer)

## Stories

| ID | Title | Status | Lane |
|---|---|---|---|
| US-013 … US-024 | Key parity, UI hardcode, zh-primary, switcher, data/prompts | implemented | mixed |
| US-025 | OBSOLETE JA cleanup | retired | — |
| US-026 | Pattern conditions + library chapter chrome | implemented | normal |
| US-027 | High bilingual bugs (pattern demo + BirthForm) | implemented | tiny |
| US-028 | Exit docs + Medium decorative / source-note polish | post-merge | tiny |

## What's in this PR (PR epic close)

- Feat branches squash-merged vào epic; epic → main = **merge commit** PR #8.
- Merge SHA: `6b07000` (epic tip `b860284`).
- `npm run lint:i18n` / story verifies on epic tip.
- Accepted ZH islands documented in Decision 0002 (classics bodies,
  remaining cities).

## What's NOT in this PR

- Playwright e2e locale switch (backlog #7).
- Full city VI labels (backlog #11) / classics body VI (backlog #12).
- Third locale (en/ja) — out of scope.

## Related

- `docs/stories/initiatives/I02-hardcode-cleanup/{overview,design,execplan,validation}.md`
- `docs/decisions/0002-i18n-data-layer-shape.md` (TBD trước US-017)
- `docs/stories/initiatives/I01-vietnamese-i18n/overview.md` — epic trước
