// Locale support for this site. See spec/locales/index.md for the full
// contract (URL scheme, which content is translated vs. kept as-is, and
// why the home page fixture section never changes).

export type Locale = 'en-001' | 'en-gb' | 'en-gb-oxendict' | 'en-us' | 'cy-001' | 'cy-gb';

export const DEFAULT_LOCALE: Locale = 'en-001';

export const LOCALES: Locale[] = ['en-001', 'en-gb', 'en-gb-oxendict', 'en-us', 'cy-001', 'cy-gb'];

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

export type LocaleMeta = {
  /** The name of this locale, written in itself (endonym). */
  label: string;
  /** BCP 47 tag written with the conventional casing, for the `lang` attribute. */
  bcp47: string;
  dir: 'ltr' | 'rtl';
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  'en-001': { label: 'English', bcp47: 'en-001', dir: 'ltr' },
  'en-gb': { label: 'English - Great Britain', bcp47: 'en-GB', dir: 'ltr' },
  'en-gb-oxendict': { label: 'English - Great Britain - Oxford', bcp47: 'en-GB-oxendict', dir: 'ltr' },
  'en-us': { label: 'English - United States', bcp47: 'en-US', dir: 'ltr' },
  'cy-001': { label: 'Cymraeg', bcp47: 'cy-001', dir: 'ltr' },
  'cy-gb': { label: 'Cymraeg - Great Britain', bcp47: 'cy-GB', dir: 'ltr' }
};

export const LOCALE_LABELS: Record<Locale, string> = Object.fromEntries(
  LOCALES.map((locale) => [locale, LOCALE_META[locale].label])
) as Record<Locale, string>;

/**
 * What the header's LocalePicker offers, in display order. Every locale
 * in {@link LOCALES} still routes and renders (see topics.ts) — this is
 * only the picker's own list.
 *
 * `cy-gb` is omitted: its content is identical to `cy-001` (see
 * spec/locales/index.md — the two Welsh locales share one translation,
 * with no meaningful difference for this site's content), so offering
 * both would just show the visitor two indistinguishable Welsh options.
 * `cy-001` ("Cymraeg") sorts first, ahead of the English variants.
 */
export const PICKER_LOCALES: Locale[] = ['cy-001', 'en-001', 'en-gb', 'en-gb-oxendict', 'en-us'];
