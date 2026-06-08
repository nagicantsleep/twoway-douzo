# US-016: I18n HomePage

**Lane**: normal
**Status**: planned
**Initiative**: I02

## Scope

`app/[locale]/page.tsx` (~1200 dòng) — lớn nhất. Từng section:

- Nav (theme toggle "暗色"/"亮色", "合盘", "立即起盘")
- Hero (tagline "紫微斗数·倪海夏体系", h1 "紫微命盘", subtitle, CTA,
  14 star name buttons)
- 哲学引言 (命·运·观 3 dòng + "最终书写属于自己的…")
- Curriculum timeline (4 modules: 紫微/天纪/地纪/人纪, status labels)
- Feature section (4 block titles, subtitles, points)
- 天地人 3-col card (先天命运/地理环境/人心意念)
- 倪海夏介绍 (life milestones, 生平等, 4 teaching cards)
- 合盘 section (title, description, chips, CTA)
- Final CTA + footer
- FamousCharts title + description + category titles
- `FamousPersonCard.tsx` nếu chưa đc i18n

## Files
- `app/[locale]/page.tsx`
- `components/home/FamousCharts.tsx`
- `components/FamousPersonCard.tsx`
- `messages/{vi,zh}/home.json` (mở rộng ~100 key)

## Verify
- Mọi section `/vi` tiếng Việt, `/zh` tiếng Trung.
- Theme toggle label locale-aware.
