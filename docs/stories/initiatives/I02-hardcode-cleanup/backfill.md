# I02 — Loại bỏ Hardcode Tiếng Trung — Backfill Plan

Epic I02 được đề xuất trong session 2026-06-09. Code chưa viết — chỉ
có kế hoạch + intake + design docs. Backfill vào git theo các bước
sau khi session thực hiện từng story bắt đầu.

## Lệnh backfill (sau khi US đầu tiên ready)

```bash
# Từ main, sạch tree
git checkout main && git pull --ff-only

# 1. Epic branch
scripts/branch.sh epic start i02 "loại bỏ hardcode tiếng Trung"

# 2. Từng US qua feat branch (vd US-013)
scripts/branch.sh feat start us-013 "backfill message key parity"
# ... work, commit, PR feat → epic, squash merge
scripts/branch.sh feat finish us-013

# 3. Sau tất cả US merge
git checkout main && git pull --ff-only
gh pr create --base main --head epic/i02-hardcode-cleanup \
  --title "Epic: Loại bỏ hardcode tiếng Trung (I02)" \
  --body-file docs/stories/initiatives/I02-hardcode-cleanup/pr-body.md

# 4. Cleanup
git branch -d epic/i02-hardcode-cleanup
git push origin --delete epic/i02-hardcode-cleanup
```

## Thứ tự US thực hiện (theo execplan.md)

1. US-013 (key parity) + US-021 (tooling) song song
2. US-014 (BirthForm + AnnouncementModal)
3. US-015 (TimeNav + TopBar)
4. US-016 (HomePage)
5. US-017 (patterns + famous)
6. US-018 (STAR_DB + STAR_BRIEF_SEO + STAR_DETAIL) — high-risk
7. US-019 (AI prompts) — high-risk
8. US-020 (final touches)

## Lưu ý

- Decision 0002-i18n-data-layer-shape.md phải có trước khi US-017 bắt
  đầu code.
- US-018 (data layer long) cần human review chuyên môn trước merge.
- US-019 (AI prompts) cần manual test với Claude trước merge.
