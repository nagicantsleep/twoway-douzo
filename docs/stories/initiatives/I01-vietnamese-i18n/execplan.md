# Initiative I01 — execplan.md

## Thứ tự thực hiện (theo story)

1. **US-001** (tiny) — Sửa broken imports `app/chart/page.tsx:5-7`. Chặn build, độc lập i18n. Xác minh `TopBar` = component nào (khả năng `TimeNav`).
2. **US-002** (normal) — Cài next-intl, tạo `i18n/{routing,request,navigation}.ts`, `middleware.ts`, `global.d.ts`, bọc `next.config.js`.
3. **US-003** (high-risk) — Tái cấu trúc `app/` → `[locale]`, layout động, `generateStaticParams`, redirect `/`→`/vi`. Decision record 0001.
4. **US-004** (normal) — `lib/ziwei/terms.ts` bảng phiên âm Hán-Việt + `localizeTerm()`. Nền tảng nhất quán.
5. **US-005** (normal) — Tách chuỗi UI → `messages/{vi,zh}/*.json`, thay `t()` trong component. Tạo zh (copy gốc) + vi (dịch).
6. **US-006** (normal) — Áp `localizeTerm()` vào component render bàn cờ.
7. **US-007** (high-risk) — Dịch nội dung chuyên sâu (patterns, nihai, seo, classics). Fan-out + review chuyên môn.
8. **US-008** (normal) — SEO/metadata + sitemap hreflang.
9. **US-009** (tiny) — Tooling lint locale-aware, README, docs.

## Dependency
- US-001 độc lập, làm trước.
- US-002 → US-003 (i18n config trước khi restructure).
- US-004 → US-006, US-007 (bảng thuật ngữ trước khi áp dụng/dịch).
- US-005, US-006 sau US-003.
- US-008 sau US-003.

## Verify mỗi bước
- `npm run build` + `npx tsc --noEmit` sau mỗi story.
- node_modules hiện MISSING → `npm install` ở US-002.

## Gate cần human confirm
- Chuẩn phiên âm Hán-Việt (US-004).
- Cấu trúc lưu nội dung đa ngôn ngữ patterns/nihai (US-007).
