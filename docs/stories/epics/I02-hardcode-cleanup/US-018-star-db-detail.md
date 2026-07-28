# US-018: I18n STAR_DB + STAR_BRIEF_SEO + STAR_DETAIL

**Lane**: high-risk
**Status**: implemented (squash `1714838` on `epic/i02-hardcode-cleanup`)
**Initiative**: I02

## Scope

- `lib/ziwei/db-analysis.ts`: STAR_DB 14 star × 13 topic × 4 段 →
  tách `db-analysis.zh.ts` + `db-analysis.vi.ts` (Decision 0002 Option A).
- `lib/seo/knowledge.ts`: STAR_BRIEF_SEO 14 entry → field pair `{ zh, vi }`.
- `components/StarDetailPanel.tsx`: STAR_DETAIL inline →
  `lib/ziwei/star-detail.zh.ts` + `star-detail.vi.ts` + `getStarDetail(locale)`.

High-risk vì nội dung dài (~182 paragraph) + thuật ngữ chuyên môn
Tử Vi (phiên âm Hán-Việt) cần review chuyên môn.

## Gate
- Cần human review chuyên môn trước merge epic→main.
- Đối chiếu `lib/ziwei/terms.ts` tra cứu phiên âm.

## Files
- `lib/ziwei/db-analysis.ts` (selector)
- `lib/ziwei/db-analysis.zh.ts` / `db-analysis.vi.ts` (new)
- `lib/seo/knowledge.ts` (locale-aware getKnowledge + STAR_BRIEF_SEO)
- `lib/ziwei/star-detail.ts` / `star-detail.zh.ts` / `star-detail.vi.ts` (new)
- `components/StarDetailPanel.tsx` (consume getStarDetail)
- `app/[locale]/knowledge/**` (locale wiring + SEO messages)
- `scripts/verify-no-hardcode.mjs` (drop knowledge-topic body allowlist)

## Verify
- `npx tsc --noEmit` + `npm run lint:i18n` pass (harness story verify OK).
- Mỗi `/knowledge/[star]/[topic]` vi render content tiếng Việt.
- StarDetailPanel vi render long-form tiếng Việt.
