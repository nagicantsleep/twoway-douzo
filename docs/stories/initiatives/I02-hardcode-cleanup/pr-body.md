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
| US-013 | Backfill messages vi↔zh key parity | planned | normal |
| US-014 | I18n BirthForm + AnnouncementModal | planned | normal |
| US-015 | I18n TimeNav tabs + sihua overlay | planned | normal |
| US-016 | I18n HomePage hero/feature/philosophy/footer | planned | normal |
| US-017 | I18n patterns.ts + famous.ts (data layer short) | planned | normal |
| US-018 | I18n STAR_DB + STAR_BRIEF_SEO + STAR_DETAIL (data layer long) | planned | high-risk |
| US-019 | I18n AI prompts (TOPIC_PROMPTS + inline) | planned | high-risk |
| US-020 | I18n ShareCardCanvas + StarDetailPanel labels + ChartSummary | planned | normal |
| US-021 | Tooling: verify-no-hardcode + diff-message-keys | planned | tiny |

(Số US cuối cùng sẽ được adjust khi implement; ước tính 9 US.)

## What's in this PR (PR epic close)

- 9 feat branch đã merge squash vào epic.
- `next build` 0 MISSING_MESSAGE warning.
- `npm run lint:i18n` pass.
- Manual smoke `/vi` ↔ `/zh` 11 route.

## What's NOT in this PR

- Playwright e2e locale switch (backlog follow-up).
- Bổ sung locale thứ 3 (en/ja/...) — out of scope.
- Bản dịch Anh cho nội dung cổ văn (classics) — out of scope I02.

## Related

- `docs/stories/initiatives/I02-hardcode-cleanup/{overview,design,execplan,validation}.md`
- `docs/decisions/0002-i18n-data-layer-shape.md` (TBD trước US-017)
- `docs/stories/initiatives/I01-vietnamese-i18n/overview.md` — epic trước
