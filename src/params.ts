import { defineParams } from '@sveltejs/kit/params';

// The `[locale=locale]` route segment matches any `<language>-<region>` code
// (spec/locales/index.md, "Locale directory names"), with an optional variant
// like `en-gb-oxendict`. That keeps `/en-001/` a locale page while flat paths
// such as `/about/` and a bare `/en/` are not locale routes.
//
// This file is loaded by Node at build time, before the `#lib` alias exists,
// so it cannot import the locale list. The page loader checks the code
// against `LOCALES` (and 404s an unknown one); `tests/locales.spec.ts` checks
// that every real locale has this shape.
const LOCALE_SHAPE = /^[a-z]{2}-([a-z]{2}|\d{3})(-[a-z]+)?$/;

export const params = defineParams({
  locale: (param) => (LOCALE_SHAPE.test(param) ? param : undefined)
});
