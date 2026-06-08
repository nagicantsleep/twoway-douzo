# US-021: Tooling: verify-no-hardcode + diff-message-keys

**Lane**: tiny
**Status**: planned
**Initiative**: I02

## Scope

- Tạo `scripts/verify-no-hardcode.mjs` — CI guard phát hiện UI string
  CJK mới trong component/page (loại trừ comment, localizeTerm, data
  layer whitelist).
- Tạo `scripts/diff-message-keys.ts` — tool kiểm parity vi↔zh.
- Wire vào `package.json` `scripts.lint:i18n` + husky pre-commit
  (gộp với `lint-staged` hiện có).

## Files
- `scripts/verify-no-hardcode.mjs` (new)
- `scripts/diff-message-keys.ts` (new)
- `package.json`

## Verify
- `npm run lint:i18n` exit 0 trên code hiện tại.
- Thêm string CJK mới vào component → `npm run lint:i18n` exit 1.
- `npx tsx scripts/diff-message-keys.ts` exit 0 khi parity 100%.
