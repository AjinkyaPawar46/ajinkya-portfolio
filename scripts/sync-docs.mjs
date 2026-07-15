import { rmSync, cpSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const docs = resolve(root, 'docs');

if (!existsSync(dist)) {
  console.error('dist/ not found — run `vite build` first.');
  process.exit(1);
}

rmSync(docs, { recursive: true, force: true });
cpSync(dist, docs, { recursive: true });
console.log('Synced dist/ -> docs/');
