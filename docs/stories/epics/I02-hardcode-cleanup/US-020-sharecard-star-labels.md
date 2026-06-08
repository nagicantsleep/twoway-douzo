# US-020: I18n ShareCardCanvas + StarDetailPanel + ChartSummary labels

**Lane**: normal
**Status**: planned
**Initiative**: I02

## Scope

- `components/ShareCardCanvas.tsx`: header "紫微命盘"/"倪海夏正宗"/
  "ZI WEI"/"紫微为门…" → `t('share.card.*')`.
- `components/StarDetailPanel.tsx`: 4 section headings
  (倪师解读/古诀/最佳宫位/…) → `star-detail.json`
- `components/ChartSummary.tsx`: section titles
  (命格总览/本命四化/格局识别/大限运程) → dùng `t()` thay
  `localizeTerm`.
- `components/PalaceCell.tsx`: siHua hover labels (化禄 class name
  hiển thị).

## Files
- `components/ShareCardCanvas.tsx`
- `components/StarDetailPanel.tsx`
- `components/ChartSummary.tsx`
- `components/PalaceCell.tsx`
- `messages/{vi,zh}/star-detail.json`
- `messages/{vi,zh}/share.json`

## Verify
- Share card `/vi` hiển thị tiếng Việt.
- StarDetail headings locale-aware.
- ChartSummary section titles locale-aware.
