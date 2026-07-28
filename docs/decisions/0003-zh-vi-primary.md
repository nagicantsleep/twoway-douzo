# 0003 — Chinese Primary + Vietnamese Second (zh↔vi)

## Status
Accepted

## Context
Intake #15 briefly pursued Vietnamese–Japanese. The product owner
corrected the direction: bilingual pair is **Chinese–Vietnamese**
（中文 + Tiếng Việt）, not Japanese.

I01 already established next-intl with `locales: ['vi','zh']`. This
decision clarifies **which language is primary** and confirms the
bilingual pair.

## Decision
- Locales remain `['zh', 'vi']` (order may list `zh` first for clarity).
- `defaultLocale: 'zh'` — Chinese is the primary product language.
- `/` redirects to `/zh`.
- Vietnamese (`/vi/...`) is the second language; full UI parity is the
  I02 closure goal (no CJK hardcode leaking onto `/vi`).
- Language switcher toggles **zh ↔ vi** only.
- Do **not** ship Japanese (`ja`) as a product locale for this initiative.
- OpenGraph: `zh_CN` / `vi_VN`. Algorithm keys remain Chinese; display
  uses `localizeTerm` + message JSON.

## Consequences
- Supersedes the second-locale *identity* drift toward Japanese from
  intake #15 (never merged).
- Updates Decision 0001’s “Vietnamese primary” stance: Vietnamese remains
  fully supported, Chinese is default.
- README / marketing copy describe 中越 bilingual.

## Related
- Intake #16 (correction), Initiative I02 hardcode cleanup.
- Decision 0001 (URL prefix contract — still valid for `localePrefix: always`).
