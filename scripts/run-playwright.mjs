#!/usr/bin/env node
/**
 * Run Playwright with optional local shared libs (WSL without sudo).
 * Extracts live under .playwright-libs/root (gitignored).
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const libDir = path.join(root, '.playwright-libs', 'root', 'usr', 'lib', 'x86_64-linux-gnu');
const env = { ...process.env };
if (fs.existsSync(libDir)) {
  env.LD_LIBRARY_PATH = [libDir, env.LD_LIBRARY_PATH].filter(Boolean).join(':');
}

const result = spawnSync('npx', ['playwright', 'test', ...process.argv.slice(2)], {
  cwd: root,
  env,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});
process.exit(result.status ?? 1);
