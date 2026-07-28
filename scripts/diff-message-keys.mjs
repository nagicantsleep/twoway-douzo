#!/usr/bin/env node
/**
 * Compare flattened message keys between messages/zh and messages/vi.
 * Exit 0 when every namespace has identical key sets; exit 1 on drift.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const zhDir = join(root, 'messages', 'zh');
const viDir = join(root, 'messages', 'vi');

function flatten(obj, prefix = '') {
  const keys = new Set();
  if (obj === null || typeof obj !== 'object') {
    if (prefix) keys.add(prefix);
    return keys;
  }
  if (Array.isArray(obj)) {
    keys.add(prefix);
    return keys;
  }
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
      for (const sk of flatten(v, p)) keys.add(sk);
    } else {
      keys.add(p);
    }
  }
  return keys;
}

const namespaces = new Set([
  ...readdirSync(zhDir).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, '')),
  ...readdirSync(viDir).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, '')),
]);

let drifted = 0;
for (const ns of [...namespaces].sort()) {
  const zhf = join(zhDir, `${ns}.json`);
  const vif = join(viDir, `${ns}.json`);
  if (!existsSync(zhf)) {
    console.error(`[${ns}] missing messages/zh/${ns}.json`);
    drifted++;
    continue;
  }
  if (!existsSync(vif)) {
    console.error(`[${ns}] missing messages/vi/${ns}.json`);
    drifted++;
    continue;
  }
  const zk = flatten(JSON.parse(readFileSync(zhf, 'utf8')));
  const vk = flatten(JSON.parse(readFileSync(vif, 'utf8')));
  const onlyZh = [...zk].filter((k) => !vk.has(k)).sort();
  const onlyVi = [...vk].filter((k) => !zk.has(k)).sort();
  if (onlyZh.length || onlyVi.length) {
    drifted++;
    console.error(`=== ${ns} ===`);
    if (onlyZh.length) console.error(`  only zh (${onlyZh.length}): ${onlyZh.join(', ')}`);
    if (onlyVi.length) console.error(`  only vi (${onlyVi.length}): ${onlyVi.join(', ')}`);
  } else {
    console.log(`${ns}: OK (${zk.size} keys)`);
  }
}

if (drifted) {
  console.error(`\nKey parity FAILED — ${drifted} namespace(s) drifted.`);
  process.exit(1);
}
console.log('\nKey parity OK — all namespaces match.');
