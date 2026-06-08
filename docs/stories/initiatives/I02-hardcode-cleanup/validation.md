# Initiative I02 — validation.md

## Validation ladder

### validate:quick (mỗi US)
- `npx tsc --noEmit` — strict mode, bắt thiếu key qua `AppConfig`
  augmentation.
- `npm run build` — pass, không `MISSING_MESSAGE` warning nào.
- `npx tsx scripts/diff-message-keys.ts` — parity 100% vi↔zh.
- `npx tsx scripts/verify-no-hardcode.mjs` (sau US-018) — không
  phát hiện UI string CJK ngoài whitelist.

### test:e2e (manual, mỗi US)
- `npm run dev`, kiểm:
  - `/vi` render 100% tiếng Việt ở component/page trong scope US đó.
  - `/zh` render 100% tiếng Trung tương ứng.
  - Chuyển locale giữ nguyên route hiện tại (no redirect loop).
  - Click navigation, trigger mọi state machine của component.

### test:platform
- `npx @cloudflare/next-on-pages` build OK (Cloudflare Pages target).
- `npx wrangler pages dev` boot OK, render `/vi` + `/zh` không 500.

### validate:release (cuối epic)
- Full smoke `/vi` ↔ `/zh` mọi route: `/`, `/chart`, `/heming`,
  `/knowledge`, `/knowledge/[star]/[topic]`, `/library`,
  `/library/[book]`, `/library/[book]/[chapter]`, `/library/search`,
  `/preview`, `/terms`, `/privacy`.
- AI prompt vi: build chart → click 3 topic overview/love/career →
  verify response tiếng Việt đầy đủ (câu trúc 5 đoạn như prompt vi
  yêu cầu).

## Validation chuyên môn (bắt buộc high-risk US)

- **US-017 (patterns data)**: review vi bản dịch thuật ngữ Tử Vi
  (`君臣庆会` → `Quần Thần Khánh Hội`...), đối chiếu `lib/ziwei/terms.ts`.
- **US-018 (STAR_DB + STAR_DETAIL vi)**: long-form content, cần
  reviewer hiểu hệ thống Tử Vi kiểm chứng bản dịch không sai lệch
  ý nghĩa gốc.
- **US-019 (AI prompt vi)**: chạy thật với Claude, đánh giá response
  chất lượng tiếng Việt.

## Lint guard (US-018)

`scripts/verify-no-hardcode.mjs`:
- Scan `app/[locale]/**/*.{ts,tsx}` + `components/**/*.{ts,tsx}`.
- Tìm regex `[一-鿿]{2,}` trong JSX text (loại trừ comment,
  `localizeTerm` call, `lib/ziwei/TERMS` keys).
- Exit 1 nếu phát hiện hardcode.
- Wire vào `package.json` `scripts.lint:i18n` + husky pre-commit
  (xem `lint-staged` hiện có — có thể gộp chung với
  `zh-punct-lint.mjs`).

## Test thủ công trước khi merge US

Checklist tối thiểu cho mỗi US:
- [ ] `/vi` route chính của US: mọi chuỗi UI là tiếng Việt.
- [ ] `/zh` route chính của US: mọi chuỗi UI là tiếng Trung.
- [ ] Click qua các state (loading, error, empty, success) — không
      xuất hiện `MISSING_MESSAGE` console warning.
- [ ] Thay đổi locale qua toggle/link — không redirect loop, không
      mất state UI quan trọng.
- [ ] `npm run build` pass.
- [ ] `npx tsc --noEmit` clean.

## Friction đã lường trước

- Data layer (US-017/018) thay đổi type → breaking change caller.
  Mitigation: cập nhật tất cả caller trong cùng PR.
- AI prompt vi có thể bị Claude trả lời tiếng Trung do prompt gốc
  mạnh. Mitigation: prepend preamble + manual test trước merge.
- HomePage (`app/[locale]/page.tsx`) là file lớn nhất (~1200 dòng),
  US-016 sẽ là US lâu nhất. Có thể tách sub-task theo section nếu
  quá tải.
