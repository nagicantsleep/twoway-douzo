<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **twoway-douzo** (920 symbols, 1456 relationships, 69 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/twoway-douzo/context` | Codebase overview, check index freshness |
| `gitnexus://repo/twoway-douzo/clusters` | All functional areas |
| `gitnexus://repo/twoway-douzo/processes` | All execution flows |
| `gitnexus://repo/twoway-douzo/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->

---

## Workflow (MANDATORY)

**Quy trình theo Repository Harness protocol (harness core 0.1.10) — tham chiếu chính: `docs/WORKFLOW.md`.**  
Repo này **không dùng GitHub Issues** (`has_issues: false`). Task state sống trong repo: plans (`docs/plans/`), stories (`docs/stories/`), decisions (`docs/decisions/`).

### Workflow Overview

```
User prompt
    |
    v
1. Chọn work shape (docs/WORKFLOW.md): read-only | bounded | multi-session
2. Multi-session/coordinated → tạo plan: docs/plans/active/<plan>.md
   (từ docs/templates/exec-plan.md; progress + decision task-local giữ trong cùng file)
3. Material product ambiguity → DỪNG trước khi sửa, hỏi user quyết định nhỏ nhất
4. Branch theo docs/BRANCHING.md
5. Implement → commit theo Conventional Commits
6. Verify bằng proof thực (tests/e2e/lint) — checklist không phải proof
7. Merge PR theo docs/BRANCHING.md
8. Plan validated xong → chuyển sang docs/plans/completed/
```

### 1. Authority & Judgment Boundary

- Repository là system of record: `docs/product/`, `docs/decisions/`, code, tests, CI, runtime signals.
- **KHÔNG bịa product policy.** Khi request còn mở lựa chọn vật chất (quota, contract, schema, thêm ngôn ngữ mới...): dừng, trình bày lựa chọn + hậu quả, chờ user quyết.
- Cấu hình mặc định không phải authority. Quy tắc cần enforcement tự động → skill `$encode-invariant` (`.agents/skills/encode-invariant/`).

### 2. Task Tracking (No GitHub Issues)

| Thay thế | Bằng |
|---|---|
| Issue để track task | Plan file trong `docs/plans/active/` |
| Issue checklist | Task list + progress ngay trong plan file |
| Auto-close khi merge | Branch cleanup + chuyển plan sang `docs/plans/completed/` |
| PR body "Closes #123" | PR body tham chiếu plan/story file |

Story packets cũ trong `docs/stories/` (US-001…US-032) giữ nguyên làm lịch sử. Story mới chỉ tạo khi công việc vẫn map 1:1 với branch `feat/<us-id>-<slug>`.

### 3. Branch & Commit

Chi tiết tại `docs/BRANCHING.md`.

```
main → epic/<id>-<slug> → feat/<us-id>-<slug>
```

Commit convention:

```
<type>(<scope>): <subject>

- bullet changes...

Story: US-XXX
```

### 4. Implementation & Proof

**Trước khi code:**
- Đọc `docs/BRANCHING.md` để biết branch đích.
- Work multi-session: tạo plan file trước khi sửa code.

**Sau khi code:**
- Chạy proof thực tế và nêu kết quả: `npm run typecheck`, `npm run test`, `npm run lint:i18n`, `npm run test:e2e` (tùy phạm vi thay đổi).
- Plan/checklist/completion message không được tính là proof behavior.

### 5. Merge & Cleanup

Theo `docs/BRANCHING.md`:

| Tầng | Strategy | Khi nào merge |
|---|---|---|
| feat → epic | squash | Sau mỗi story hoàn thành (auto-proceed, không cần hỏi) |
| epic → main | merge commit | Sau khi tất cả feature trong epic xong (cần user approval) |

### 6. Harness Maintenance

```bash
scripts/bin/harness status            # phiên bản đã cài vs target
scripts/bin/harness doctor            # kiểm tra sức khỏe cài đặt
scripts/bin/harness update --dry-run  # xem trước bản cập nhật
scripts/bin/harness update            # conflict → xử lý theo README "Maintain An Installation" (update --continue / --abort)
```

Thiếu sót harness / quy trình mơ hồ → đề xuất qua skill `$improve-harness` (explicit-only) hoặc plan trong `docs/plans/active/`.

### 7. Legacy harness-cli (EOL 2026-08-10)

`scripts/bin/harness-cli.exe`, `harness.db`, và docs legacy (`docs/HARNESS.md`, `docs/FEATURE_INTAKE.md`, `docs/TRACE_SPEC.md`, `docs/TEST_MATRIX.md`, `docs/HARNESS_COMPONENTS.md`, `docs/HARNESS_MATURITY.md`) là **archive của protocol v1 đã khai tử**. KHÔNG chạy lệnh `harness-cli` (EOL; binary chỉ có bản Windows, không chạy trên macOS). Giữ nguyên làm lịch sử trừ khi user yêu cầu dọn dẹp rõ ràng.

### 8. Thứ tự ưu tiên khi đọc docs

Khi bắt đầu task mới, đọc theo thứ tự:

1. `CLAUDE.md` hoặc `AGENTS.md` (workflow này)
2. `docs/WORKFLOW.md` (repository protocol)
3. `docs/BRANCHING.md` (branch & merge rules)
4. `docs/decisions/` (đặc biệt 0001–0003 cho i18n)
5. `docs/plans/active/` (công việc đang dở)
6. `docs/stories/` + `docs/decisions/0002` (bối cảnh data-layer song ngữ)

### 9. Quyịn tắc vận hành process

- **KHÔNG** tự chạy `taskkill` (hay bất kể lệnh kill process nào) để dừng tiến trình `node`/`next`/`next dev` nhằm restart project. Việc kill node đột ngột có thể phá vỡ các tiến trình khác của user (IDE, MCP servers, dev tools khác) và mất state chưa persist.
- Khi cần restart Next.js: ưu tiên hot-reload của Next tự xử lý; nếu thật sự cần kill, **phải hỏi user trước** và chỉ kill đúng PID của tiến trình do chính session này spawn, không kill theo tên image.
- Các thao tác ngoài project (kill process hệ thống, xóa cache ngoài `.next`, thay đổi global config) đều phải có xác nhận của user

<!-- SYNC NOTICE: CLAUDE.md and AGENTS.md share workflow content when both exist. Edit BOTH together when changing repo workflow rules. Tool-managed blocks (<!-- gitnexus:* -->, <!-- HARNESS:* -->) may be regenerated into only one file by their tools. After running those tools, manually re-sync the other file if needed. -->
