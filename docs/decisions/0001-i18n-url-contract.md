# 0001 — i18n URL Contract (Locale-Prefixed Routing)

## Status
Accepted

## Context
App `ziwei-master` hiện phục vụ toàn bộ tại URL không tiền tố locale (vd `/`, `/chart`, `/knowledge`), hardcode tiếng Trung. Để việt hóa song ngữ, cần đổi cấu trúc URL công khai.

Đây là thay đổi **public contract** (high-risk gate theo `docs/FEATURE_INTAKE.md`): URL client-visible thay đổi, ảnh hưởng SEO, bookmark, link chia sẻ.

## Decision
- Dùng **next-intl** với `localePrefix: 'always'`.
- Locales: `['vi', 'zh']`, `defaultLocale: 'vi'`.
- Mọi route mang tiền tố locale: `/vi/...`, `/zh/...`.
- `/` redirect → `/vi`.
- Tiếng Việt là ngôn ngữ chính; tiếng Trung là bản tham chiếu (giữ nội dung gốc).
- Thêm hreflang alternates trong sitemap cho cả hai locale.

## Consequences
- URL cũ không tiền tố sẽ redirect — cần đảm bảo middleware xử lý đúng, tránh đứt link cũ đã được index.
- `app/` tái cấu trúc sang segment `[locale]`.
- SEO: mỗi trang có alternate hreflang vi/zh; `openGraph.locale` = vi_VN / zh_CN.
- Trang đã index bằng tiếng Trung (domain wdyziweidoushu666.com) sẽ chuyển sang `/zh/*` — cần theo dõi search console sau triển khai.

## Alternatives considered
- `localePrefix: 'as-needed'` (/ = vi, /zh = trung): SEO gọn hơn nhưng người dùng chọn "đối xử bình đẳng /vi và /zh riêng".
- Chỉ tiếng Việt, bỏ tiếng Trung: mất khả năng đối chiếu thuật ngữ — bị loại.

## Related
- Intake #1, Initiative I01.
