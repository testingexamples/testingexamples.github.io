// Writes a `.locale-peer-id` file into every published page directory
// (`/<locale>/<slug>/`), holding the page's topic id. Translations of the
// same page share one id across all locales, so tools can match peers.
//
// The files live under `static/` so they are copied into the build as-is.
// Run after adding, renaming, or removing a topic or a locale:
//
//   pnpm locale-peer-ids
//
// (tests/locale-peer-id.spec.ts fails if they are out of date.)

import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { LOCALES } from '../src/lib/i18n/locales.ts';
import { TOPIC_IDS, slugForTopic } from '../src/lib/i18n/topics.ts';

const STATIC = new URL('../static/', import.meta.url).pathname;

// Remove stale files first, so a deleted topic does not leave one behind.
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
    writeFileSync(join(dir, '.locale-peer-id'), `${topicId}\n`);
    count++;
  }
}
console.log(`wrote ${count} .locale-peer-id files`);
