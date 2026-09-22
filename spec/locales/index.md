# Locales

This site supports six locales:

| Locale           | Meaning                          | Slug group |
| ----------------- | --------------------------------- | ---------- |
| `en-001`           | English (international) — **default** | English    |
| `en-gb`            | English (UK)                      | English    |
| `en-gb-oxendict`   | English (UK, Oxford spelling)     | English    |
| `en-us`            | English (US)                      | English    |
| `cy-gb`            | Welsh (UK)                        | Welsh      |
| `cy-001`           | Welsh (international)             | Welsh      |

## URL scheme

Every page lives at `https://testingexamples.github.io/locales/<locale>/<slug>/`
— including the default locale, which is still prefixed
(`/locales/en-001/...`), not bare. There is one exception: the site root
`/` (see "The home page fixture contract" below).

**Slugs**: the four English locales share one English slug per page
(`what-is-automatic-testing`, etc.). The two Welsh locales share one
Welsh slug per page (`beth-yw-profi-awtomatig`, etc.) — translating the
URL itself, not just a locale prefix. One exception: `given-when-then`
keeps its English slug (and English heading term) in every locale,
because Given-When-Then/Gherkin is BDD vocabulary, not ordinary prose —
same treatment as any other technical proper noun on this site.

The full slug table lives in `src/lib/i18n/topics.ts`, one entry per page,
each carrying its English slug, its Welsh slug, and a lazy import of its
Svelte component.

**Old flat URLs** (`/what-is-automatic-testing/`, `/about/`, etc.) still
resolve: each one's route now does nothing but
`redirect(308, '/locales/en-001/<same-slug>/')`, which `adapter-static`
turns into a static meta-refresh HTML page at build time. This keeps
existing links and search-engine results working without duplicating
content.

## The home page fixture contract

`src/routes/+page.svelte` (site root, `/`) is **not** part of the locale
system and is never touched by it. AGENTS.md documents why: its "Id
Examples" through "Form Input Examples" section is a contract five
external sibling repos' test suites depend on, hardcoded to
`page.goto('/')`. That page, and only that page, keeps its historical
unprefixed URL, unlocalized, byte-for-byte unchanged.

That same fixture section is also rendered — identically, in English, on
every locale including both Welsh ones — as part of each locale's own
home page (`/locales/<locale>/`). It is never translated anywhere: it is
a contract/standard, not content, the same category as a code sample or a
product name. Both the root page and every localized home page import it
from one shared component, `src/lib/components/SiteFixtures.svelte`, so
the two can never drift apart. **Never edit that component without first
reading AGENTS.md and coordinating with the five sibling repos it names.**

## What gets translated, and what doesn't

Translated: headings, body prose, list items, button/link visible text,
meta descriptions, `aria-label`s that are prose, and (per above) the URL
slug itself for the two Welsh locales.

Never translated, in any locale: element `id`/`name`/`class` attributes;
code samples, including comments inside them; proper nouns and product/
methodology names (Selenium, Playwright, GitHub, Google, WebdriverIO,
JavaScript, Python, DevOps, Lean Six Sigma, Given-When-Then, Gherkin,
sibling-repo names); the site's own brand name "Testing Examples"; and
the home page fixture section described above.

English-variant spelling: `en-001`/`en-gb` share the site's baseline
prose (already British-spelled — "behaviour", "favourite", etc.).
`en-gb-oxendict` differs only in `-ise`→`-ize`/`-isation`→`-ization`
spelling. `en-us` uses American spelling throughout (colour→color,
behaviour→behavior, practise(verb)→practice, etc.). Where a page's
vocabulary has no spelling-sensitive words at all, all four English
locales literally share one message object — there's nothing to vary.

Welsh: `cy-gb` and `cy-001` share one Welsh translation per page: there
is no meaningful content difference between them for this site (no
currency, dates, or GB-specific facts in the prose), so splitting them
would just be duplication. Machine-assisted, native-review-recommended —
see the caveat in the top-level summary this spec accompanies.

## Implementation shape

- `src/lib/i18n/locales.ts` — the `Locale` type, the locale list, and
  per-locale metadata (endonym label, BCP 47 tag, text direction).
- `src/lib/i18n/topics.ts` — one entry per page: its slug in each of the
  two slug groups, and a lazy `import()` of its component.
- `src/lib/i18n/paths.ts` — `localeHref(locale, topicId)` (build a URL)
  and `switchLocaleHref(pathname, targetLocale)` (same page, new locale)
  — every internal link and the PickerBar's locale switch both go through
  these, never a hand-built path.
- `src/lib/i18n/chrome.ts` — translated header/footer/PickerBar strings,
  consumed by the root `+layout.svelte`.
- `src/routes/locales/[locale]/[...slug]/+page.ts` — resolves
  `(locale, slug)` to a `TopicId` via `topicForSlug`, lazy-loads that
  topic's component, and lists every `(locale, slug)` prerender entry via
  `entries()`.
- `src/routes/locales/[locale]/[...slug]/+page.svelte` — renders the
  resolved component, passing it `locale`.
- `src/lib/pages/<topicId>/Page.svelte` — one per topic (the old
  `src/routes/<slug>/+page.svelte`, migrated). Each holds its own
  `Record<Locale, Messages>` object inline, right next to the markup that
  uses it — not a separate translation-file layer — since every page's
  content is bespoke enough that co-location beats indirection here.
- `src/hooks.server.ts` — sets `<html lang>`/`dir` from the URL at
  render/prerender time (the LocalePicker component only updates it after
  a client-side choice, which would otherwise flash the wrong `lang` on
  first paint).

## Why per-page inline messages instead of a generic content schema

The pages are structurally heterogeneous — plain prose, a generated data
table (`/about/`), literal code samples (`/given-when-then/`), and
interactive widget state (`/app/`) — so one generic "content schema +
universal renderer" would either flatten that structure or grow escape
hatches until it wasn't generic any more. Keeping each page's own Svelte
component, translating only the strings inside it, was more tractable and
kept every page's existing markup/structure intact.
