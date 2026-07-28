# Initiative I02 — execplan.md

Thứ tự thực hiện (theo story, từng story một feat branch):

## Phase 0 — Nền (US-013, US-018)

1. **US-013** *(normal)* — Backfill messages vi↔zh key parity hiện
   có (6 namespace drift từ US-012 scope). Làm đầu để mọi US sau
   đều có parity key trước khi thêm key mới.
   - Files: `messages/{vi,zh}/{chart,form,insight,knowledge,library,share,star-detail}.json`
   - Verify: `npx tsx scripts/diff-message-keys.ts` exit 0.
2. **US-018** *(tiny)* — Tooling lint guard + diff tool.
   - Tạo `scripts/verify-no-hardcode.mjs` (CI guard).
   - Tạo `scripts/diff-message-keys.ts` (tool kiểm parity).
   - Wire vào `package.json` `lint:i18n` + `husky` pre-commit.

## Phase 1 — Component lớn (US-014, US-015, US-016)

3. **US-014** *(normal)* — I18n BirthForm + AnnouncementModal.
   - `components/BirthForm.tsx` (~40 string CJK trong labels, errors,
     summary, hints, button).
   - `components/AnnouncementModal.tsx` (~30 string trong title, body,
     button, dates).
   - Tạo namespace mới: `home.announcementModal` (modal), mở rộng
     `form.fields`/`form.errors`/`form.summary`/`form.birthForm`.
4. **US-015** *(normal)* — I18n TimeNav + TopBar tabs + sihua overlay.
   - `components/TimeNav.tsx`: 本命/大限/流年 tabs, "大限 10–20",
     "大限年四化" header → `useTranslations('chart.timeNav')`.
   - `components/ChartBoard.tsx` legend "化禄/化权/化科/化忌" → đã
     có `localizeTerm` ở branch vi, fix branch zh để hiển thị gốc
     thay vì "化禄" literal.
5. **US-016** *(normal)* — I18n HomePage (lớn nhất).
   - `app/[locale]/page.tsx`: hero, features (4 block), 哲学引言,
     curriculum timeline, 倪海夏介绍, 合盘, footer.
   - Tạo namespace `home.hero`, `home.features`, `home.philosophy`,
     `home.curriculum`, `home.ni`, `home.hemingCTA`, `home.footer`.
   - Approx ~80-100 string.

## Phase 2 — Data layer (US-017, US-018)

6. **US-017** *(normal)* — I18n patterns.ts + famous.ts.
   - `lib/ziwei/patterns.ts` → tách `patterns.zh.ts` (giữ gốc) +
     `patterns.vi.ts` (dịch ~30 pattern × 6 field).
   - `lib/ziwei/famous.ts` → chuyển `category`/`description`/`notable`
     sang `{ vi, zh }` field pair.
   - Caller update: `PatternsCard.tsx`, `ChartSummary.tsx`,
     `FamousCharts.tsx`, `FamousPersonCard.tsx`.
   - Quyết định shape ghi trong `docs/decisions/0002-i18n-data-layer-shape.md`
     trước khi code.
7. **US-018** *(normal)* — I18n STAR_DB + STAR_BRIEF_SEO + STAR_DETAIL.
   - `lib/ziwei/db-analysis.ts` STAR_DB → tách file `db-analysis.vi.ts`.
   - `lib/seo/knowledge.ts` STAR_BRIEF_SEO → field pair.
   - `components/StarDetailPanel.tsx` STAR_DETAIL inline → tách file
     `star-detail.vi.ts`.
   - Long-form nội dung (chuyên môn Tử Vi), cần review chuyên môn
     trước merge.

## Phase 3 — AI prompts + final touches (US-019, US-020)

8. **US-019** *(high-risk)* — I18n AI prompts.
   - `components/InsightPanel.tsx` `TOPIC_PROMPTS` → tách file
     `prompts.vi.ts` + `prompts.zh.ts`.
   - Inline `prompt` builders: dùng `localizeTerm` cho palaceName,
     siHua, view label.
   - Preamble: prepend "Trả lời bằng tiếng Việt" khi locale=vi.
   - Manual test: build chart, click 3 topic overview/love/career,
     verify response tiếng Việt đầy đủ.
9. **US-020** *(normal)* — I18n ShareCardCanvas + StarDetailPanel
   headings + ChartSummary section labels + chat UI copy.
   - ShareCardCanvas: 紫/紫微命盘/倪海夏正宗/ZI WEI header, 紫微为门…
     slogan.
   - StarDetailPanel: 4 section headings (倪师解读/古诀/最佳宫位/…)
     → `star-detail.json`.
   - ChartSummary: section titles (命格总览/本命四化/格局识别/大限运程)
     → dùng `t()` thay vì `localizeTerm`.

## Phase 4 — Epic close

10. Final verification: `npm run build` + `npm run lint:i18n` + manual
    smoke `/vi` ↔ `/zh`.
11. Backlog: thêm follow-up (Playwright e2e locale switch) nếu scope
    cho phép.
12. Trace close epic: Detailed tier.

## Dependency

- US-013 độc lập, làm đầu.
- US-018 (tooling) có thể làm song song với US-013.
- US-014 → US-015 → US-016: mỗi US thêm namespace mới → nên chạy
  US-013 trước/song song để key parity khớp.
- US-017 → US-018 (data layer): US-017 patterns/famous trước (short
  form), US-018 STAR_DB/STAR_DETAIL sau (long form, cần review).
- US-019 (AI prompts) cần data layer (US-017/018) xong vì dùng
  `localizeTerm` cho thuật ngữ.
- US-020 (final touches) cần mọi US trước xong.

## Verify mỗi step

- `npm run build` + `npx tsc --noEmit` + `npx tsx scripts/diff-message-keys.ts`.
- Sau US-018+ (tooling): `npx tsx scripts/verify-no-hardcode.mjs` exit 0.
- Locale switch `/vi` ↔ `/zh` thủ công (1 round Playwright sẽ là
  follow-up backlog).

## Gate cần human confirm

- Decision 0002-i18n-data-layer-shape.md (chốt shape A/B/C cho data
  layer) trước US-017.
- Manual test AI prompt vi sau US-019 (cần user confirm response
  tiếng Việt đạt chất lượng).
- Review chuyên môn nội dung STAR_DB/STAR_DETAIL bản vi (thuật ngữ
  Tử Vi phiên âm Hán-Việt) sau US-018.
