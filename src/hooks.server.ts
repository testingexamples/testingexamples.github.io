import type { Handle } from '@sveltejs/kit';
import { DEFAULT_LOCALE, LOCALE_META, isLocale } from '$lib/i18n/locales';

// Sets <html lang> (and dir, for future RTL locales) to match the URL, so
// prerendered pages carry the right lang from first paint — the
// LocalePicker component only updates it after a client-side choice.
export const handle: Handle = async ({ event, resolve }) => {
  const match = event.url.pathname.match(/^\/locales\/([^/]+)\//);
  const localeParam = match?.[1];
  const locale = localeParam && isLocale(localeParam) ? localeParam : DEFAULT_LOCALE;
  const meta = LOCALE_META[locale];

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('<html lang="en">', `<html lang="${meta.bcp47}" dir="${meta.dir}">`)
  });
};
