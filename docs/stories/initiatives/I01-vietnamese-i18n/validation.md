# Initiative I01 — validation.md

## Validation ladder (theo HARNESS.md Future Validation Ladder)

Chưa có validation script. Khi triển khai, dùng:

### validate:quick
- `npx tsc --noEmit` — strict mode, bắt key dịch thiếu qua next-intl AppConfig augmentation.
- `npm run build` — phải pass sau khi restructure `[locale]`.

### test:e2e (thủ công, chưa có runner)
- `npm run dev`, kiểm:
  - `/` redirect → `/vi`.
  - `/vi` render đầy đủ tiếng Việt; `/zh` render tiếng Trung gốc.
  - `/vi/chart`: form lập lá số, bàn cờ hiển thị tên sao/cung phiên âm Hán-Việt đúng.
  - `/vi/heming`, `/vi/knowledge`, `/vi/library` render Việt.
  - Chuyển locale giữ nguyên route hiện tại.
  - `/vi/library/[book]/[chapter]`: cổ văn Hán + bản dịch Việt song song.

### Kiểm tra chuyên môn (bắt buộc cho high-risk)
- Rà soát thủ công bàn cờ + StarDetailPanel: phiên âm Hán-Việt chính xác.
- Thuật toán lập lá số KHÔNG vỡ: so sánh lá số cùng input giữa trước/sau (key tra cứu giữ tiếng Trung).

### SEO
- `/sitemap.xml` có cả `/vi/*` và `/zh/*` + hreflang.
- metadata mỗi trang đúng ngôn ngữ (`openGraph.locale`: vi_VN / zh_CN).

### Lint
- Commit thử: `zh-punct-lint` không phá file tiếng Việt (chỉ áp `messages/zh/**`).

## Proof status hiện tại
- unit: 0 (chưa có test framework)
- integration: 0
- e2e: 0 (thủ công)
- platform: 0

## Friction đã ghi nhận
- Pre-existing broken imports `app/chart/page.tsx` (không liên quan i18n, từ commit release đầu).
- node_modules MISSING → cần `npm install`.
- Chưa có test framework → proof phụ thuộc thủ công.
