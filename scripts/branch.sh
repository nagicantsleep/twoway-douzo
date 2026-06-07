#!/usr/bin/env bash
# Branch & PR workflow helper. Chuẩn hóa việc tạo epic/feature branch
# theo docs/BRANCHING.md.
#
# Usage:
#   scripts/branch.sh epic start <i-id> "<title>"
#   scripts/branch.sh feat start <us-id> "<title>"
#   scripts/branch.sh feat finish <us-id>
#   scripts/branch.sh epic finish <i-id>

set -euo pipefail

cmd=${1:-}
type=${2:-}
id=${3:-}
title=${4:-}

slugify() {
  echo "$1" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/[^a-z0-9àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ ]/-/g' \
    | tr -s ' ' '-' \
    | sed -E 's/-+/-/g' \
    | sed -E 's/^-|-$//g' \
    | cut -c1-40
}

current_branch() { git branch --show-current; }
remote_url() { git config --get remote.origin.url 2>/dev/null || echo ""; }
html_url() {
  local url=$(remote_url)
  echo "$url" | sed -E 's#git@github.com:#https://github.com/#; s#\.git$##'
}

require_clean_tree() {
  if ! git diff --quiet HEAD 2>/dev/null || ! git diff --cached --quiet HEAD 2>/dev/null; then
    if [ -n "$(git status --porcelain)" ]; then
      echo "ERROR: working tree not clean. Commit/stash first." >&2
      git status --short >&2
      exit 1
    fi
  fi
}

require_main() {
  local cur=$(current_branch)
  if [ "$cur" != "main" ]; then
    echo "ERROR: must be on main, currently on $cur" >&2
    exit 1
  fi
}

ensure_synced() {
  git fetch origin --prune >/dev/null 2>&1 || true
  if git rev-parse --verify --quiet origin/main >/dev/null; then
    git pull --ff-only origin main 2>/dev/null || true
  fi
}

epic_start() {
  [ -z "$id" ] || [ -z "$title" ] && { echo "usage: scripts/branch.sh epic start <i-id> <title>" >&2; exit 1; }
  require_clean_tree
  require_main
  ensure_synced
  local slug=$(slugify "$title")
  local branch="epic/${id}-${slug}"
  if git rev-parse --verify --quiet "$branch" >/dev/null; then
    echo "ERROR: branch $branch already exists" >&2
    exit 1
  fi
  git checkout -b "$branch"
  git push -u origin "$branch" 2>/dev/null || echo "  (push skipped — no network/auth)"
  echo ""
  echo "Epic branch created: $branch"
  echo "Next: scripts/branch.sh feat start <us-id> \"<title>\""
}

feat_start() {
  [ -z "$id" ] || [ -z "$title" ] && { echo "usage: scripts/branch.sh feat start <us-id> <title>" >&2; exit 1; }
  require_clean_tree
  local cur=$(current_branch)
  case "$cur" in
    epic/*) ;;
    *) echo "ERROR: feat must be created from an epic branch, currently on $cur" >&2; exit 1 ;;
  esac
  ensure_synced
  local slug=$(slugify "$title")
  local branch="feat/${id}-${slug}"
  if git rev-parse --verify --quiet "$branch" >/dev/null; then
    echo "ERROR: branch $branch already exists" >&2
    exit 1
  fi
  git checkout -b "$branch"
  git push -u origin "$branch" 2>/dev/null || echo "  (push skipped — no network/auth)"
  local base_epic=$(current_branch)
  local url=$(html_url)
  echo ""
  echo "Feature branch created: $branch (from $base_epic)"
  echo "PR: $url/compare/$base_epic...$branch?expand=1"
}

feat_finish() {
  [ -z "$id" ] && { echo "usage: scripts/branch.sh feat finish <us-id>" >&2; exit 1; }
  require_clean_tree
  local cur=$(current_branch)
  case "$cur" in
    feat/${id}-*) ;;
    *) echo "ERROR: must be on feat/${id}-*, currently on $cur" >&2; exit 1 ;;
  esac
  local epic=$(echo "$cur" | sed -E 's#^feat/([^/]+)/.*$#epic/\1#')
  if ! git rev-parse --verify --quiet "$epic" >/dev/null; then
    echo "ERROR: epic base $epic not found" >&2
    exit 1
  fi
  git push origin "$cur" 2>/dev/null || echo "  (push skipped)"
  local url=$(html_url)
  echo ""
  echo "Feature $cur ready to merge into $epic"
  echo "PR: $url/compare/$epic...$cur?expand=1"
  echo ""
  echo "After merge (squash recommended):"
  echo "  git checkout $epic && git pull --ff-only"
  echo "  git branch -d $cur && git push origin --delete $cur"
  echo "  scripts/bin/harness-cli story update --id $id --status implemented"
  echo "  scripts/bin/harness-cli story verify $id"
}

epic_finish() {
  [ -z "$id" ] && { echo "usage: scripts/branch.sh epic finish <i-id>" >&2; exit 1; }
  require_clean_tree
  local cur=$(current_branch)
  case "$cur" in
    epic/${id}-*) ;;
    *) echo "ERROR: must be on epic/${id}-*, currently on $cur" >&2; exit 1 ;;
  esac
  ensure_synced
  git push origin "$cur" 2>/dev/null || echo "  (push skipped)"
  local url=$(html_url)
  echo ""
  echo "Epic $cur ready to merge into main"
  echo "PR: $url/compare/main...$cur?expand=1"
  echo ""
  echo "After merge (merge commit, NOT squash):"
  echo "  git checkout main && git pull --ff-only"
  echo "  git branch -d $cur && git push origin --delete $cur"
  echo "  scripts/bin/harness-cli trace \\"
  echo "    --summary \"Epic $id merged: $title\" \\"
  echo "    --story <main-story-id> --outcome completed"
}

case "$cmd" in
  epic)
    case "$type" in
      start) epic_start ;;
      finish) epic_finish ;;
      *) echo "usage: scripts/branch.sh epic {start|finish} <i-id> [title]" >&2; exit 1 ;;
    esac
    ;;
  feat)
    case "$type" in
      start) feat_start ;;
      finish) feat_finish ;;
      *) echo "usage: scripts/branch.sh feat {start|finish} <us-id> [title]" >&2; exit 1 ;;
    esac
    ;;
  *) echo "usage: scripts/branch.sh {epic|feat} {start|finish} ..." >&2; exit 1 ;;
esac
