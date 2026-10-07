// Pick one of this site's locales from the browser's language preferences
// (`navigator.languages`). Used only by the site root `/`; see
// spec/locales/index.md ("Language redirect on /").

import { LOCALES, type Locale } from './locales';

/** `cy_GB`, `CY-gb`, `cy-GB` → `cy-gb`. */
function normalize(tag: string): string {
  return tag.trim().replace(/_/g, '-').toLowerCase();
}

/** Traditional Chinese is not served by `zh-cn`, which is Simplified. */
function isTraditionalChinese(parts: string[]): boolean {
  return parts[0] === 'zh' && parts.slice(1).some((p) => ['hant', 'tw', 'hk', 'mo'].includes(p));
}

/**
 * Which locale does one language tag correspond to, if any?
 *
 * 1. An exact match (`cy-GB` → `cy-gb`, `en-US` → `en-us`).
 * 2. Otherwise the first locale with the same primary language
 *    (`fr-CA` → `fr-001`, `en-AU` → `en-001`, `cy` → `cy-001`), except that
 *    Traditional Chinese never maps to Simplified.
 */
export function localeForTag(tag: string): Locale | undefined {
  const normalized = normalize(tag);
  if (!normalized || normalized === '*') return undefined;
  const exact = LOCALES.find((locale) => locale === normalized);
  if (exact) return exact;
  const parts = normalized.split('-');
  if (isTraditionalChinese(parts)) return undefined;
  return LOCALES.find((locale) => locale.split('-')[0] === parts[0]);
}

/**
 * The first of the visitor's preferred languages (most preferred first)
 * that this site has a locale for. A language with no locale is skipped, so
 * `['de', 'fr']` gives `fr-001`.
 */
export function preferredLocale(languages: readonly string[]): Locale | undefined {
  for (const tag of languages) {
    const locale = localeForTag(tag);
    if (locale) return locale;
  }
  return undefined;
}
