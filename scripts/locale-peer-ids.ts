// Writes a `.locale-peer-id` file into every published page directory
// (`/<locale>/<slug>/`). Per the locale spec (../../spec/locales-for-global-
// sharing-with-svelte/index.md) the file is a 32-character lowercase
// hexadecimal number followed by a newline, byte-identical across every
// locale's version of the same topic regardless of its slug, so a page can
// be resolved in any locale.
//
// The ids are RANDOM, not derived from anything. A topic gets its random id
// the first time it appears and keeps it forever, so the id is stored in
// `src/lib/i18n/peer-ids.json` (topic id -> id), which is committed. A topic
// that is removed loses its entry; a topic that is renamed in this registry
// by hand keeps its id.
//
// The files live under `static/` so they are copied into the build as-is.
// Run after adding, renaming, or removing a topic or a locale:
//
//   pnpm locale-peer-ids
//
// (tests/locale-peer-id.spec.ts fails if they are out of date.)

import { randomBytes } from 'node:crypto';
import { mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { LOCALES } from '../src/lib/i18n/locales.ts';
import { TOPIC_IDS, slugForTopic } from '../src/lib/i18n/topics.ts';

const STATIC = new URL('../static/', import.meta.url).pathname;
const REGISTRY = new URL('../src/lib/i18n/peer-ids.json', import.meta.url).pathname;

const HEX32 = /^[0-9a-f]{32}$/;

// Load the registry (it may not exist yet).
let known: Record<string, string> = {};
try {
  known = JSON.parse(readFileSync(REGISTRY, 'utf8'));
} catch {
  // First run: every topic gets a new random id.
}

// Keep only current topics; give any new topic a fresh random id.
const registry: Record<string, string> = {};
let created = 0;
for (const topicId of TOPIC_IDS) {
  const existing = known[topicId];
  if (existing && HEX32.test(existing)) {
    registry[topicId] = existing;
  } else {
    registry[topicId] = randomBytes(16).toString('hex');
    created++;
  }
}
writeFileSync(REGISTRY, JSON.stringify(registry, null, 2) + '\n');

// Remove stale files first, so a deleted or renamed topic does not leave one behind.
function removeStale(dir: string): void {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (entry === '.locale-peer-id') rmSync(path);
    else if (statSync(path).isDirectory()) removeStale(path);
  }
}
for (const locale of LOCALES) {
  try {
    removeStale(join(STATIC, locale));
  } catch {
    // No directory yet for this locale.
  }
}

let count = 0;
for (const locale of LOCALES) {
  for (const topicId of TOPIC_IDS) {
    const dir = join(STATIC, locale, slugForTopic(locale, topicId));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, '.locale-peer-id'), `${registry[topicId]}\n`);
    count++;
  }
}
console.log(`wrote ${count} .locale-peer-id files (${created} new random ids)`);
