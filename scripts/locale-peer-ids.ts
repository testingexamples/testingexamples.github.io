// Writes a `.locale-peer-id` file into every published page directory
// (`/<locale>/<slug>/`). Per the locale spec (../../spec/locales-for-global-
// sharing-with-svelte/index.md) the file is a 32-character lowercase
// hexadecimal number followed by a newline, byte-identical across every
// locale's version of the same topic regardless of its slug, so a page can
// be resolved in any locale.
//
// The ids are RANDOM, not derived from anything, and there is no registry:
// the `.locale-peer-id` files under `static/` are the only record. A topic
// that already has files keeps the id it has (read from any of its locales);
// only a topic with no files yet gets a new random id. Files that no longer
// belong to a current locale and slug (a deleted topic) are removed.
//
// If you change a topic's slug in every locale at once, first `git mv` its
// `.locale-peer-id` files to the new directories, or the topic will get a
// new id.
//
// The files live under `static/` so they are copied into the build as-is.
// Run after adding or removing a topic or a locale:
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
const FILE = '.locale-peer-id';
const ID = /^[0-9a-f]{32}\n$/;

const dirFor = (locale: string, topicId: (typeof TOPIC_IDS)[number]) =>
  join(STATIC, locale, slugForTopic(locale as (typeof LOCALES)[number], topicId));

// Read the id a topic already has, from the first locale that has a valid file.
function existingId(topicId: (typeof TOPIC_IDS)[number]): string | undefined {
  for (const locale of LOCALES) {
    try {
      const text = readFileSync(join(dirFor(locale, topicId), FILE), 'utf8');
      if (ID.test(text)) return text.trim();
    } catch {
      // No file here.
    }
  }
  return undefined;
}

// Decide every topic's id before touching any file.
const ids = new Map<string, string>();
let created = 0;
for (const topicId of TOPIC_IDS) {
  const id = existingId(topicId) ?? randomBytes(16).toString('hex');
  if (!existingId(topicId)) created++;
  ids.set(topicId, id);
}

// The files that should exist after this run.
const wanted = new Set<string>();
for (const locale of LOCALES) {
  for (const topicId of TOPIC_IDS) wanted.add(join(dirFor(locale, topicId), FILE));
}

// Remove files that no longer belong to a current topic or locale.
function removeStale(dir: string): void {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (entry === FILE) {
      if (!wanted.has(path)) rmSync(path);
    } else if (statSync(path).isDirectory()) {
      removeStale(path);
    }
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
    const dir = dirFor(locale, topicId);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, FILE), `${ids.get(topicId)}\n`);
    count++;
  }
}
console.log(`wrote ${count} ${FILE} files (${created} new random ids)`);
