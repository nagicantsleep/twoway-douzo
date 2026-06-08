# US-018: I18n STAR_DB + STAR_BRIEF_SEO + STAR_DETAIL

**Lane**: high-risk
**Status**: planned
**Initiative**: I02

## Scope

- `lib/ziwei/db-analysis.ts`: STAR_DB 14 star × 13 topic × 4 段 →
  tách `db-analysis.vi.ts` (dịch mới).
- `lib/seo/knowledge.ts`: STAR_BRIEF_SEO 14 entry → field pair `{ vi, zh }`.
- `components/StarDetailPanel.tsx`: STAR_DETAIL inline (14 star × 8 field)
  → tách `star-detail.vi.ts` + `star-detail.zh.ts`.

High-risk vì nội dung dài (~182 paragraph) + thuật ngữ chuyên môn
Tử Vi (phiên âm Hán-Việt) cần review chuyên môn.

## Gate
- Cần human review chuyên môn trước merge.
- Đối chiếu `lib/ziwei/terms.ts` tra cứu phiên âm.

## Files
- `lib/ziwei/db-analysis.ts` (refactor)
- `lib/ziwei/db-analysis.vi.ts` (new)
- `lib/seo/knowledge.ts` (refactor)
- `components/StarDetailPanel.tsx` (refactor + tách file)
- `components/StarDetailPanel/star-detail.vi.ts` (new)
- `components/StarDetailPanel/star-detail.zh.ts` (new)

## Verify
- `npm run build` + `npx tsc --noEmit` pass.
- Mỗi `/knowledge/[star]/[topic]` vi render content tiếng Việt.
- StarDetailPanel vi render long-form tiếng Việt.
