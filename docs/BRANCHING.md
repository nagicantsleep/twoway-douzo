# Branch & PR Workflow

Quy trình Git chuẩn cho mọi thay đổi trong repo. Áp dụng từ epic tiếp theo
(sau khi epic `I01 Vietnamese i18n` đã được backfill theo quy trình này).

## Mental Model

```text
main
  │
  ├── epic/i01-vietnamese-i18n       (long-lived, từ main)
  │     │
  │     ├── feat/us-001-fix-chart-imports
  │     ├── feat/us-002-install-next-intl
  │     ├── feat/us-003-restructure-locale-segment
  │     │     ...
  │     └── feat/us-009-tooling-docs
  │
  ├── epic/i02-...                  (epic mới, song song được nếu khác scope)
```

Ba tầng:

1. **`main`** — production. Bảo vệ, chỉ merge qua PR đã review + CI pass.
2. **`epic/<id>-<slug>`** — long-lived, gom tất cả feature thuộc một initiative
   (mapping 1:1 với `docs/stories/initiatives/I<NN>-*/`).
3. **`feat/<us-id>-<slug>`** — short-lived, một story (mapping 1:1 với story
   row trong `harness.db`).

## Tại sao ba tầng

- **Epic branch**: cho phép tích hợp từng feature nhỏ mà không spam `main`,
  đồng thời giữ toàn bộ initiative ở một nơi để review lớn cuối cùng.
- **Feature branch**: cô lập scope, dễ revert một story mà không kéo theo
  story khác cùng epic.
- **Một PR epic → main** khi tất cả feature xong: review tổng, thấy ngay
  initiative hoàn chỉnh.

## Vì sao không dùng GitHub Issues

Repo này `has_issues: false` (xem `gh api repos/<owner>/<repo>`). "Auto-close
sub-issue khi epic close" của GitHub chỉ hoạt động với issue tracker. Thay
thế bằng:

- **`harness.db`** là source-of-truth cho task state (intake / story / decision
  / backlog / trace). Mỗi story có `verify_command` chạy được, status trong
  matrix phản ánh thực tế.
- **PR body** chứa checklist các feature và link tới story file. Khi epic
  merge, các feature branch đã merge vào epic trước đó — không cần "close"
  gì thêm.
- **Branch cleanup**: sau khi epic merge, xóa epic branch và tất cả feature
  branch con. Lịch sử giữ trong git reflog nếu cần.

## Naming

| Layer | Pattern | Ví dụ |
|---|---|---|
| Epic | `epic/<i-id>-<kebab-slug>` | `epic/i01-vietnamese-i18n` |
| Feature | `feat/<us-id>-<kebab-slug>` | `feat/us-001-fix-chart-imports` |
| Hotfix | `fix/<kebab-slug>` | `fix/share-modal-typo` |
| Spike (không merge) | `spike/<kebab-slug>` | `spike/test-next-intl-bundle` |

Slug lấy từ initiative title / story title, viết thường, nối `-`, tối đa
~40 ký tự, bỏ stop words.

## Commit Convention

Conventional Commits, scope tiếng Anh:

```text
<type>(<scope>): <subject tiếng Việt OK>
```

Type thường gặp:

| Type | Khi nào |
|---|---|
| `feat` | story thêm chức năng mới |
| `fix` | sửa bug hoặc broken import |
| `refactor` | đổi cấu trúc không đổi hành vi |
| `chore` | tooling, deps, config |
| `docs` | chỉ tài liệu |
| `test` | thêm/sửa test |
| `i18n` | thêm/sửa bản dịch |

Subject ≤ 72 ký tự, viết thường sau dấu hai chấm đầu tiên, không kết thúc
bằng dấu chấm. Body tùy chọn, mỗi dòng ≤ 100 ký tự.

Mỗi commit nên tham chiếu story qua footer:

```text
feat(i18n): cài đặt và cấu hình next-intl

- Tạo i18n/{routing,request,navigation}.ts
- Tạo middleware.ts
- Bọc next.config.js với withNextIntl

Story: US-002
```

## Vòng đời một Story

```text
1. Story planned in harness.db (US-XXX)
2. git checkout epic/<id> && git pull
3. git checkout -b feat/<us-id>-<slug>
4. ... work, commits theo convention ...
5. git push -u origin feat/<us-id>-<slug>
6. Mở PR: feat/<us-id>-<slug> → epic/<id>
   - Title: `<type>(<scope>): <subject>`
   - Body: liệt kê thay đổi, "Story: US-XXX", checklist, link tới
     docs/stories/initiatives/I<NN>-*/ (nếu là story đầu epic)
   - Đợi CI + review
7. Merge PR (squash commit, giữ title PR)
8. git branch -d feat/<us-id>-<slug>  (local)
9. Đánh dấu US-XXX trong harness.db → status=implemented, chạy verify
10. Quay lại bước 2 cho story tiếp theo
```

Khi tất cả feature của epic xong:

```text
11. git checkout main && git pull
12. git checkout epic/<id> && git pull --ff-only (hoặc rebase main)
13. Mở PR: epic/<id> → main
    - Title: `Epic: <initiative title>`
    - Body: tóm tắt initiative, liệt kê US-XXX đã merge, link decision,
      link epic overview
    - Review cuối (kiến trúc, perf, security)
14. Merge PR (merge commit, KHÔNG squash — giữ lịch sử epic/feat)
15. git checkout main && git pull --ff-only
16. git branch -d epic/<id> && git push origin --delete epic/<id>
17. Xóa các feat/<us-id>-... đã merge (đã xóa ở bước 8)
18. Trong harness.db: trace cho epic close
```

## Merge Strategy

| Tầng | Strategy | Lý do |
|---|---|---|
| feat → epic | squash | Một commit sạch per story, dễ revert, dễ review epic tổng |
| epic → main | merge commit (no squash) | Giữ lịch sử epic/feat phân cấp; revert epic dễ |

Cấu hình repo hiện cho phép cả ba (`allow_squash_merge: true`,
`allow_merge_commit: true`, `allow_rebase_merge: true`). Mặc định này là
đủ — không cần đổi.

## Bảo vệ main

Khuyến nghị (chưa bật trên repo hiện tại, ghi nhận backlog):

- Branch protection rule trên `main`: yêu cầu 1 approval + CI pass trước
  khi merge.
- Không push trực tiếp vào `main` (GitHub đã mặc định chặn nếu bật
  protection).

## Helper Script

`scripts/branch.sh` cung cấp lệnh chuẩn:

```bash
scripts/branch.sh epic start i01 "Vietnamese i18n"
scripts/branch.sh feat start us-001 "fix chart imports"
scripts/branch.sh feat finish us-001
scripts/branch.sh epic finish i01
```

Script tự động:
- Validate tên branch theo naming convention.
- Checkout từ base đúng (feat từ epic, epic từ main).
- Push và in ra URL mở PR.
- Khi finish: gợi ý merge + cleanup + cập nhật harness.

## Liên kết với Harness

Mỗi commit nên tham chiếu story trong harness qua footer `Story: US-XXX`.
Mỗi PR body nên có `Story: US-XXX` để reviewer đối chiếu story file và
`scripts/bin/harness-cli query matrix` xác nhận status.

Sau khi merge PR feat → epic, cập nhật harness:

```bash
scripts/bin/harness-cli story update --id US-XXX --status implemented \
  --evidence "pr:#NN"
scripts/bin/harness-cli story verify US-XXX
```

Sau khi merge PR epic → main, ghi trace cho epic:

```bash
scripts/bin/harness-cli trace \
  --summary "Epic <id> merged: <title>" \
  --intake <N> \
  --story US-XXX \
  --outcome completed \
  ...
```

## Trường hợp đặc biệt

### Hotfix khẩn cấp vào main

Được phép, nhưng vẫn dùng branch:

```text
1. git checkout main && git pull
2. git checkout -b fix/<slug>
3. ... fix ...
4. PR: fix/<slug> → main (bỏ qua epic)
5. Sau khi merge, retro cherry-pick vào epic branch (nếu epic liên quan
   còn mở) — thường rebase epic trên main là đủ.
```

### Spike (nghiên cứu, không merge)

Branch `spike/<slug>`, tự do commit, có thể không bao giờ mở PR. Khi xong
cần quyết định: giữ, vứt, hoặc chuyển thành feat chính thức.

### Epic đè lên nhau

Tránh. Nếu cần, dùng **Milestone GitHub** để nhóm hoặc **harness initiative**
làm canonical, hai epic chỉ overlap khi đã explicit.

## Backfill Epic I01

Epic `I01 Vietnamese i18n` đã có code từ trước workflow này. Backfill:

```text
1. Tạo epic branch epic/i01-vietnamese-i18n từ main (tại commit 563d078)
2. Cherry-pick hoặc copy code US-001 đã làm vào branch
3. Commit theo convention, mở PR epic/i01 → main
4. Sau khi merge, US-001 trong harness.db đã ở status=implemented sẵn
5. Tiếp US-002 trở đi theo vòng đời chuẩn
```

Lệnh cụ thể xem `docs/stories/initiatives/I01-vietnamese-i18n/backfill.md`.
