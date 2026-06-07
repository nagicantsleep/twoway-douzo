#!/usr/bin/env bash
# Verify US-001 static checks: imports + state names exist.
# Used as verify_command for story US-001 in harness.db.
# Replace with `npx tsc --noEmit` once node_modules installed (backlog #3).
set -e
cd "$(dirname "$0")/.."
test -f components/chart/TopBar.tsx
test -f components/chart/ChartBoard.tsx
test -f components/insight/InsightPanel.tsx
grep -q "from '@/components/chart/TopBar'" app/chart/page.tsx
grep -q "from '@/components/chart/ChartBoard'" app/chart/page.tsx
grep -q "from '@/components/insight/InsightPanel'" app/chart/page.tsx
grep -q 'selectedPalace' app/chart/page.tsx
grep -q 'selectedSiHua' app/chart/page.tsx
