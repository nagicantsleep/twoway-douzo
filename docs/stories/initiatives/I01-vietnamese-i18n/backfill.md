# I01 Vietnamese i18n — Backfill

Epic `I01 Vietnamese i18n` đã có code từ trước workflow mới (xem `docs/BRANCHING.md`).
File này mô tả cách backfill vào Git theo đúng quy trình 3 tầng.

## Trạng thái trước backfill

- Tất cả thay đổi US-001 hiện nằm trên working tree (chưa commit).
- Harness: US-001 đã `implemented`.
- 8 story còn lại: `planned` trong harness.db.

## Lệnh backfill

```bash
# Từ main, sạch tree
git checkout main

# 1. Tạo epic branch từ main
scripts/branch.sh epic start i01 "Vietnamese i18n"

# 2. Stage US-001 code đã viết tay vào epic branch
#    (working tree hiện có 4 file: components/chart/TopBar.tsx,
#    components/chart/ChartBoard.tsx, components/insight/InsightPanel.tsx,
#    app/chart/page.tsx đã sửa)
git add components/chart/ components/insight/ app/chart/page.tsx
git commit -m "fix(chart): tạo TopBar, sửa imports và prop mismatches

- Tạo components/chart/TopBar.tsx với 10 props
- Tạo components/chart/ChartBoard.tsx re-export
- Tạo components/insight/InsightPanel.tsx re-export + FocusState type
- Sửa app/chart/page.tsx: thay focus state, đổi prop names

Story: US-001"

# 3. Mở PR epic → main
gh pr create --base main --head epic/i01-vietnamese-i18n \
  --title "Epic: Vietnamese i18n (I01, backfill US-001)" \
  --body-file docs/stories/initiatives/I01-vietnamese-i18n/pr-body.md

# 4. Sau khi merge, cleanup
git checkout main && git pull --ff-only
git branch -d epic/i01-vietnamese-i18n
git push origin --delete epic/i01-vietnamese-i18n

# 5. Từ US-002 trở đi: theo vòng đời chuẩn
scripts/branch.sh feat start us-002 "install next-intl"
```

## Lưu ý

- US-001 được backfill thẳng vào epic, không có feat branch riêng. Từ
  US-002 trở đi sẽ theo workflow mới: feat/US-XXX branch → PR vào epic.
- Backfill này là **một lần**. Epic tiếp theo phải đi đúng từ đầu.
