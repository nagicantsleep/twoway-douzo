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

**Mọi thay đổi code đều phải đi qua intake gate trước.**  
Repo này **không dùng GitHub Issues** (`has_issues: false`). Source-of-truth cho task state là **`harness.db`** (SQLite, local, `.gitignore`d).

### Workflow Overview

```
User prompt
    |
    v
1. Classify input type (docs/FEATURE_INTAKE.md)
2. Record intake: scripts/bin/harness-cli intake ...
3. Identify story(s) from matrix: scripts/bin/harness-cli query matrix
4. Risk lane → determine depth
5. Branch theo docs/BRANCHING.md
6. Implement → commit theo Conventional Commits
7. Verify: story verify + proof booleans
8. Record trace: scripts/bin/harness-cli trace ...
9. Merge PR theo docs/BRANCHING.md
10. Cập nhật harness: story update --status implemented
```

### 1. Intake Gate

Mỗi task bắt đầu bằng intake classification. Xem `docs/FEATURE_INTAKE.md` để xác định input type và risk lane.

```bash
scripts/bin/harness-cli intake --type "<input-type>" --summary "<text>" --lane <tiny|normal|high-risk>
```

Input types: `new spec | spec slice | change request | new initiative | maintenance request | harness improvement`.

Lanes: `tiny` (patch trực tiếp), `normal` (story + validation), `high-risk` (execplan + design + decision records + human confirmation).

### 2. Task Tracking (No GitHub Issues)

Repo không dùng GitHub Issues. Thay thế bằng:

| Thay thế | Bằng |
|---|---|
| Issue để track task | Story row trong harness.db |
| Issue checklist | story contract trong docs/stories/ |
| Auto-close khi merge | Branch cleanup thủ công + harness update |
| PR body "Closes #123" | PR body "Story: US-XXX" + link story file |

**Quy tắc:**

- Mỗi US (user story) có row trong `harness.db` với id như `US-001`, `US-002`, ...
- `scripts/bin/harness-cli query matrix` để xem trạng thái tất cả stories.
- Story workflow: `planned → implemented → verified` (status trong CLI).
- Khi bắt đầu story: kiểm tra `scripts/bin/harness-cli query matrix` để biết story đã planned chưa.
- Khi hoàn thành: update status + chạy verify.

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

### 4. Implementation & Harness Proof

**Trước khi code:**
- Đọc `docs/BRANCHING.md` để biết branch đích.
- Với normal/high-risk: tạo story file từ template nếu chưa có.

**Sau khi code:**
```bash
scripts/bin/harness-cli story update --id US-XXX --status implemented
scripts/bin/harness-cli story update --id US-XXX --unit 1 --integration 0 --e2e 0 --platform 0
scripts/bin/harness-cli story verify US-XXX
```

### 5. Trace

Mọi task phải ghi trace. Mức depth tùy theo lane (xem `docs/TRACE_SPEC.md`):

| Lane | Trace tier |
|---|---|
| Tiny | Minimal |
| Normal | Standard |
| High-risk | Detailed |

```bash
scripts/bin/harness-cli trace \
  --summary "<what was done>" \
  --story US-XXX \
  --outcome completed \
  --actions "..." \
  --changed "file1.ts,file2.ts" \
  --friction "<none or description>"
```

### 6. Merge & Cleanup

Theo `docs/BRANCHING.md`:

| Tầng | Strategy | Khi nào merge |
|---|---|---|
| feat → epic | squash | Sau mỗi story hoàn thành (auto-proceed, không cần hỏi) |
| epic → main | merge commit | Sau khi tất cả feature trong epic xong (cần user approval) |

### 7. Harness Friction

Nếu phát hiện thiếu sót trong harness (docs stale, thiếu template, quy trình mơ hồ):

```bash
scripts/bin/harness-cli backlog add --title "<short name>" --pain "<what was hard>"
```

### 8. Thứ tự ưu tiên khi đọc docs

Khi bắt đầu task mới, đọc theo thứ tự:

1. `CLAUDE.md` hoặc `AGENTS.md` (workflow này)
2. `docs/BRANCHING.md` (branch & merge rules)
3. `docs/HARNESS.md` (harness durable layer)
4. `docs/FEATURE_INTAKE.md` (risk classification)
5. `docs/TRACE_SPEC.md` (trace quality tiers)
6. `scripts/bin/harness-cli query matrix` (trạng thái stories hiện tại)

<!-- SYNC NOTICE: CLAUDE.md and AGENTS.md share workflow content when both exist. Edit BOTH together when changing repo workflow rules. Tool-managed blocks (<!-- gitnexus:* -->, <!-- HARNESS:* -->) may be regenerated into only one file by their tools. After running those tools, manually re-sync the other file if needed. -->