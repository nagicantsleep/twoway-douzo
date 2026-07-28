# US-013: Backfill message key parity vi↔zh

**Lane**: normal
**Status**: implemented
**Initiative**: I02

## Scope

Backfill 144 keys missing in vi + 123 keys missing in zh across 7
namespaces (chart, form, insight, knowledge, library, share,
star-detail). Nối tiếp US-012 đã phát hiện drift.

## Files

- `messages/vi/chart.json` (23 keys)
- `messages/zh/chart.json` (27 keys)
- `messages/vi/form.json` (35 keys)
- `messages/zh/form.json` (44 keys)
- `messages/vi/insight.json` (21 keys)
- `messages/zh/insight.json` (20 keys)
- `messages/vi/knowledge.json` (33 keys)
- `messages/zh/knowledge.json` (11 keys)
- `messages/vi/library.json` (9 keys)
- `messages/vi/share.json` (10 keys)
- `messages/zh/share.json` (6 keys)
- `messages/vi/star-detail.json` (13 keys)
- `messages/zh/star-detail.json` (15 keys)

## Verify

- `npx tsx scripts/diff-message-keys.ts` exit 0
- `npm run build` pass, 0 MISSING_MESSAGE warning
