#!/usr/bin/env node
/**
 * Flag unexpected CJK UI string literals in components/pages.
 * Strips comments first. Allowlists data/prompt files still mid-migration.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const ALLOWLIST = [
  'lib/',
  'components/InsightPanel.tsx', // PALACE_NAME_TO_ROLE_KEY algorithm keys
  'components/StarDetailPanel.tsx', // STAR_DETAIL body until US-018
  'components/ChartSummary.tsx',
  'components/LocaleSwitcher.tsx',
  'app/[locale]/knowledge/[star]/[topic]/page.tsx',
  'app/[locale]/library/[book]/[chapter]/page.tsx',
  'app/[locale]/page.tsx',
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

let failed = 0;
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
