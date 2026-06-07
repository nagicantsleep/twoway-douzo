# Epic I01 — Vietnamese i18n

## Summary

Việt hóa toàn bộ nền tảng Tử Vi Đẩu Số theo hệ thống Nghi Hải Hạ. Bổ sung
hạ tầng i18n (next-intl), routing `/vi` và `/zh`, phiên âm Hán-Việt thuật
ngữ Tử Vi, dịch UI + nội dung tri thức + cổ văn song ngữ.

## Intake

- Intake #1 — new-initiative, lane high-risk
- Decision 0001-i18n-url-contract

## Stories

| ID | Title | Status |
|---|---|---|
| US-001 | Sửa broken imports app/chart/page.tsx | implemented |
| US-002 | Cài + cấu hình next-intl | planned |
| US-003 | Tái cấu trúc app/ sang [locale] | planned |
| US-004 | Bảng phiên âm Hán-Việt lib/ziwei/terms.ts | planned |
| US-005 | Tách + dịch chuỗi UI messages/{vi,zh} | planned |
| US-006 | Áp localizeTerm vào component bàn cờ | planned |
| US-007 | Dịch nội dung tri thức chuyên sâu | planned |
| US-008 | SEO/metadata + sitemap hreflang | planned |
| US-009 | Tooling lint locale-aware + README + docs | planned |

## What's in this PR

- **Backfill US-001**: 3 file mới + sửa 1 file. Unblocks build của trang
  `/chart` (commit release đầu có import paths không tồn tại).

## What's NOT in this PR

- US-002 → US-009 sẽ theo vòng đời chuẩn: mỗi story một feat branch,
  PR vào epic. Epic close = tổng PR vào main.
- i18n runtime chưa cài. Đợi US-002.

## Test Plan

- [ ] Trang `/chart` không còn lỗi import ở compile (sau khi `npm install`)
- [ ] Trang `/chart` hiển thị bàn cờ với TopBar (nút 分享, 打印)
- [ ] Click sao/cung trong bàn cờ → state `selectedPalace` update → InsightPanel nhận prop
- [ ] Click sao hóa → state `selectedSiHua` update → InsightPanel nhận prop
- [ ] `harness story verify US-001` pass

## Related

- `docs/stories/initiatives/I01-vietnamese-i18n/{overview,design,execplan,validation}.md`
- `docs/decisions/0001-i18n-url-contract.md`
- `docs/BRANCHING.md` (workflow áp dụng)
