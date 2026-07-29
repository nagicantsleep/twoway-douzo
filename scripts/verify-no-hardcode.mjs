#!/usr/bin/env node
/**
 * Flag unexpected CJK UI string literals in components/pages.
 * Strips comments first. Allowlists data/prompt files still mid-migration.
 *
 * Also asserts keyword consumers wire localizeTerm (US-030 regression guard)
 * and that every localizeTerm('…') literal key exists in TERMS.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const ALLOWLIST = [
  'lib/',
  'components/InsightPanel.tsx', // PALACE_NAME_TO_ROLE_KEY algorithm keys
  // StarDetailPanel: LUCKY/SHA star-name map keys + levelConfig/siHua algorithm keys
  'components/StarDetailPanel.tsx',
  'components/LocaleSwitcher.tsx',
  // homepage algorithm keys + pattern demo copy live in lib/ziwei/homepage-demo-i18n.ts
];

/** Components that must localize keyword chips (data stays Chinese keys). */
const KEYWORD_CONSUMERS = [
  {
    file: 'components/StarDetailPanel.tsx',
    // desc.keywords.split(...).map → localizeTerm(k.trim(), locale)
    mustMatch: /localizeTerm\(\s*k\.trim\(\)\s*,\s*locale\s*\)/,
    hint: 'StarDetailPanel must localize keyword chips via localizeTerm(k.trim(), locale)',
  },
  {
    file: 'components/ChartSummary.tsx',
    // keywords.map → localizeTerm(k, locale)
    mustMatch: /keywords\.map[\s\S]*?localizeTerm\(\s*k\s*,\s*locale\s*\)/,
    hint: 'ChartSummary must localize keyword chips via localizeTerm(k, locale)',
  },
  {
    file: 'components/PalaceCell.tsx',
    mustMatch: /localizeTerm\(\s*name\s*,\s*locale\s*\)/,
    hint: 'PalaceCell must localize palace name via localizeTerm(name, locale)',
  },
  {
    file: 'components/PalaceCell.tsx',
    mustMatch: /localizeTerm\(\s*siHua\s*,\s*locale\s*\)/,
    hint: 'PalaceCell SiHuaBadge must localize siHua via localizeTerm(siHua, locale)',
  },
  {
    file: 'components/FamousPersonCard.tsx',
    mustMatch: /famousCharts\.categories\.\$\{person\.category\}/,
    hint: 'FamousPersonCard must localize category via home.famousCharts.categories',
  },
  {
    file: 'components/ChartBoard.tsx',
    mustMatch: /localizeTerm\(\s*['"]限['"]\s*,\s*locale\s*\)/,
    hint: 'ChartBoard must localize daxian overlay label via localizeTerm(\'限\', locale)',
  },
  {
    file: 'components/ChartBoard.tsx',
    mustMatch: /localizeTerm\(\s*['"]年['"]\s*,\s*locale\s*\)/,
    hint: 'ChartBoard must localize liunian overlay label via localizeTerm(\'年\', locale)',
  },
  {
    file: 'components/ShareCardCanvas.tsx',
    mustMatch: /localizePlaceName\(/,
    hint: 'ShareCardCanvas must localize birth place via localizePlaceName',
  },
  {
    file: 'components/ShareCardCanvas.tsx',
    mustMatch: /localizeTerm\(\s*['"]年['"]\s*,\s*locale\s*\)/,
    hint: 'ShareCardCanvas must localize birth year unit via localizeTerm(\'年\', locale)',
  },
  {
    file: 'components/ChartBoard.tsx',
    mustMatch: /tBoard\(\s*['"]age['"]\s*\)/,
    hint: 'ChartBoard must localize age suffix via tBoard(\'age\') for both locales',
  },
  {
    file: 'components/ChartBoard.tsx',
    mustMatch: /localizeTerm\(\s*['"]身宫['"]\s*,\s*locale\s*\)/,
    hint: 'ChartBoard must localize 身宫 via localizeTerm(\'身宫\', locale)',
  },
  {
    file: 'app/[locale]/page.tsx',
    mustMatch: /localizeTerm\(\s*label\s*,\s*locale\s*\)/,
    hint: 'homepage DEMO_SIHUA chips must localize via localizeTerm(label, locale)',
  },
  {
    file: 'app/[locale]/chart/page.tsx',
    mustMatch: /entry\.form\s*\?\s*formatHistoryLabel\(entry\.form,\s*locale\)\s*:\s*entry\.label/,
    hint: 'chart page must fall back to entry.label when entry.form is missing',
  },
];

const SCAN_ROOTS = ['components', 'app'];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.next') continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(tsx|ts)$/.test(name)) out.push(p);
  }
  return out;
}

function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:])\/\/.*$/gm, '$1');
}

function isAllowlisted(rel) {
  return ALLOWLIST.some((a) => rel === a || rel.startsWith(a));
}

function cjkRatio(s) {
  const cjk = (s.match(/[\u4e00-\u9fff]/g) || []).length;
  return s.length ? cjk / s.length : 0;
}

function loadTermsKeys() {
  const src = readFileSync(join(root, 'lib/ziwei/terms.ts'), 'utf8');
  return new Set([...src.matchAll(/^\s*'([^']+)':\s*\{/gm)].map((m) => m[1]));
}

let failed = 0;

const termsKeys = loadTermsKeys();
const termLiteralRe = /localizeTerm\(\s*(['"])([^'"\\]+)\1/g;
for (const file of SCAN_ROOTS.flatMap((r) => walk(join(root, r)))) {
  const rel = relative(root, file).replace(/\\/g, '/');
  const src = readFileSync(file, 'utf8');
  let m;
  termLiteralRe.lastIndex = 0;
  while ((m = termLiteralRe.exec(src)) !== null) {
    const key = m[2];
    if (!termsKeys.has(key)) {
      console.error(`${rel}: localizeTerm('${key}') missing from TERMS`);
      failed++;
    }
  }
}

for (const { file, mustMatch, hint } of KEYWORD_CONSUMERS) {
  const src = readFileSync(join(root, file), 'utf8');
  if (!mustMatch.test(src)) {
    console.error(`${file}: ${hint}`);
    failed++;
  }
}

for (const file of SCAN_ROOTS.flatMap((r) => walk(join(root, r)))) {
  const rel = relative(root, file).replace(/\\/g, '/');
  if (isAllowlisted(rel)) continue;
  const src = stripComments(readFileSync(file, 'utf8'))
    .replace(/localizeTerm\(\s*(['"`])[\s\S]*?\1/g, 'localizeTerm(OK)');
  const hits = [];
  const re = /(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const s = m[2];
    if (!/[\u4e00-\u9fff]/.test(s)) continue;
    if (s.includes('\n')) continue; // skip template / multi-line
    if (cjkRatio(s) < 0.4) continue;
    if (s.length <= 1) continue;
    // Algorithm / category keys commonly passed through
    if (/^(商业|文艺|科技|体育|历史|子|丑|寅|卯|辰|巳|午|未|申|酉|戌|亥|禄|权|科|忌|宫)$/.test(s)) continue;
    hits.push(s.slice(0, 48));
  }
  if (hits.length) {
    console.error(`${rel}: ${hits.length} CJK literal(s) e.g. "${hits[0]}"`);
    failed++;
  }
}

if (failed) {
  console.error(`\nverify-no-hardcode: ${failed} file(s) need i18n (or allowlist update).`);
  process.exit(1);
}
console.log('verify-no-hardcode: OK');
