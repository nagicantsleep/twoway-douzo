# US-032: Playwright e2e locale switch (backlog #7)

## Goal

Add a minimal Playwright smoke test that verifies zh↔vi locale switching
via `LocaleSwitcher` on the homepage, keeping path continuity.

## Scope

- Install `@playwright/test` + Chromium
- `playwright.config.ts` with webServer (reuse existing dev server when present)
- `e2e/locale-switch.spec.ts`: `/zh` → click Tiếng Việt → `/vi`; reverse
- `npm run test:e2e` script
- Close harness backlog #7

## Out of scope

- Full visual regression / chart flows
- `lib/nihai` VI translation (unused by UI; separate follow-up)
- CI workflow changes beyond local runnable e2e

## Verify

```bash
# Preferred (WSL-friendly: scripts/run-playwright.mjs may set LD_LIBRARY_PATH)
npm run test:e2e

# Linux CI / machines with system libs:
#   npx playwright install-deps chromium
#   npx playwright test
```

## Story

US-032
