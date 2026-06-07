# Initiative: Việt Hóa Toàn Bộ (i18n) — overview.md

## Goal

Việt hóa toàn bộ nền tảng Tử Vi Đẩu Số `ziwei-master`: thêm hạ tầng i18n (next-intl), chạy song ngữ với routing `/vi` (tiếng Việt, chính) và `/zh` (tiếng Trung, tham chiếu). Dịch toàn bộ UI, marketing, thuật ngữ Tử Vi (phiên âm Hán-Việt), nội dung tri thức Nghi Hải Hạ, và cổ văn (song ngữ).

## Why

Hiện tại app hardcode 100% tiếng Trung (zh-CN), không có i18n. Để phục vụ độc giả Việt và mở rộng thị trường, cần việt hóa nhưng vẫn giữ bản tiếng Trung để đối chiếu thuật ngữ.

## Intake

- Intake record: #1
- Input type: new-initiative
- Lane: high-risk
- Risk flags: public-contracts, existing-behavior, multi-domain, weak-proof

## Quyết định đã chốt (với người dùng)

| Hạng mục | Quyết định |
| --- | --- |
| Thuật ngữ Tử Vi | Phiên âm Hán-Việt (命宫→Cung Mệnh, 紫微→Tử Vi, 化禄→Hóa Lộc) |
| Phạm vi | Dịch toàn bộ ngay (UI + ~40 cách cục + ~43k ký tự tri thức + SEO) |
| URL | `/vi/...` và `/zh/...` riêng (localePrefix: 'always') |
| Cổ văn | Giữ nguyên Hán + thêm bản dịch Việt (song ngữ) |
| Thư viện | next-intl |

## Affected product surface

- `app/**` — toàn bộ route chuyển sang segment `[locale]`
- `components/**` — 16 component thay chuỗi hardcode bằng `t()`
- `lib/ziwei/**`, `lib/nihai/**`, `lib/classics/**`, `lib/seo/**` — data layer locale-aware
- `next.config.js`, `middleware.ts` (mới), `i18n/**` (mới), `messages/**` (mới)
- `scripts/zh-punct-lint.mjs`, `README.md`, docs — tooling

## Candidate stories

| ID | Title | Lane |
| --- | --- | --- |
| US-001 | Sửa broken imports app/chart/page.tsx (chặn build) | tiny |
| US-002 | Cài + cấu hình next-intl (routing, request, navigation, middleware) | normal |
| US-003 | Tái cấu trúc app/ sang [locale], layout động | high-risk |
| US-004 | Biên soạn bảng phiên âm Hán-Việt lib/ziwei/terms.ts | normal |
| US-005 | Tách + dịch chuỗi UI sang messages/{vi,zh} + dùng t() | normal |
| US-006 | Áp localizeTerm() vào component render bàn cờ | normal |
| US-007 | Dịch nội dung tri thức chuyên sâu (patterns, nihai, seo) | high-risk |
| US-008 | SEO/metadata + sitemap hreflang | normal |
| US-009 | Tooling: lint locale-aware, README, docs | tiny |

## Exit criteria

- `npm run build` pass, `npx tsc --noEmit` sạch.
- `/vi/*` render đầy đủ tiếng Việt; `/zh/*` render tiếng Trung gốc.
- Thuật toán lập lá số không vỡ (key tra cứu giữ nguyên tiếng Trung).
- Thuật ngữ phiên âm Hán-Việt được review chuyên môn.
- sitemap có hreflang cho cả hai locale.

## Open decisions

- Chuẩn phiên âm Hán-Việt thống nhất (đề xuất theo cộng đồng tuvi.vn) — cần xác nhận.
- patterns/nihai: tách file `*.vi.ts`/`*.zh.ts` hay thêm field `{vi, zh}` — quyết định trong US-007 design.
