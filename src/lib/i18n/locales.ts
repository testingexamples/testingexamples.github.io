// Locale support for this site. See spec/locales/index.md for the full
// contract (URL scheme, which content is translated vs. kept as-is, and
// why the home page fixture section never changes).

export type Locale = 'en-001' | 'en-gb' | 'en-gb-oxendict' | 'en-us' | 'cy-gb' | 'cy-001';

export const DEFAULT_LOCALE: Locale = 'en-001';

export const LOCALES: Locale[] = ['en-001', 'en-gb', 'en-gb-oxendict', 'en-us', 'cy-gb', 'cy-001'];

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
  'en-001': { label: 'English (international)', bcp47: 'en-001', dir: 'ltr' },
  'en-gb': { label: 'English (UK)', bcp47: 'en-GB', dir: 'ltr' },
  'en-gb-oxendict': { label: 'English (UK, Oxford spelling)', bcp47: 'en-GB-oxendict', dir: 'ltr' },
  'en-us': { label: 'English (US)', bcp47: 'en-US', dir: 'ltr' },
  'cy-gb': { label: 'Cymraeg (DU)', bcp47: 'cy-GB', dir: 'ltr' },
  'cy-001': { label: 'Cymraeg (rhyngwladol)', bcp47: 'cy-001', dir: 'ltr' }
};

export const LOCALE_LABELS: Record<Locale, string> = Object.fromEntries(
  LOCALES.map((locale) => [locale, LOCALE_META[locale].label])
) as Record<Locale, string>;
