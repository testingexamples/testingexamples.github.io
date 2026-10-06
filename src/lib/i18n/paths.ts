import type { Locale } from './locales';
import { slugForTopic, topicForSlug, type TopicId } from './topics';

/** Build the canonical, trailing-slash URL for a topic in a given locale. */
export function localeHref(locale: Locale, topicId: TopicId): string {
  const slug = slugForTopic(locale, topicId);
  return slug ? `/locales/${locale}/${slug}/` : `/locales/${locale}/`;
}

/**
 * Given the current `/locales/<locale>/<slug>/` pathname, find the
 * equivalent URL in a different locale (same topic, that locale's own
 * slug). Falls back to that locale's home page if the current path isn't
 * a recognised topic.
 */
export function switchLocaleHref(pathname: string, targetLocale: Locale): string {
  const match = pathname.match(/^\/locales\/([^/]+)\/(.*)$/);
  if (!match) return localeHref(targetLocale, 'home');
  const [, currentLocale, rest] = match;
  // pathname is percent-encoded, but topic slugs for zh-cn and ar-001 are
  // stored as native characters, so decode before looking the slug up.
  let slug = rest;
  try {
    slug = decodeURIComponent(rest);
  } catch {
    // Malformed escape sequence: fall through with the raw segment.
  }
  const topicId = topicForSlug(currentLocale as Locale, slug);
  if (!topicId) return localeHref(targetLocale, 'home');
  return localeHref(targetLocale, topicId);
}
