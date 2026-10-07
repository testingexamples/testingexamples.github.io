# Locales

This site supports ten locales:

| Locale           | Label (see `LOCALE_META` in `src/lib/i18n/locales.ts`) | Slug group |
| ----------------- | --------------------------------- | ---------- |
| `en-001`           | English — **default** | English    |
| `en-gb`            | English - Great Britain           | English    |
| `en-gb-oxendict`   | English - Great Britain - Oxford  | English    |
| `en-us`            | English - United States           | English    |
| `cy-001`           | Cymraeg                           | Welsh      |
| `cy-gb`            | Cymraeg - Great Britain           | Welsh      |
| `zh-cn`            | 中文                               | Chinese    |
| `ar-001`           | العربية                            | Arabic     |
| `ko-001`           | 한국어                              | Korean     |
| `fr-001`           | Français                          | French     |

**Locale directory names.** Every locale directory, and so every locale code
in `LOCALES`, uses the form `<language>-<region>`, all lowercase:

- `<language>` is a two-letter ISO 639-1 code (`en`, `cy`, `zh`, `ar`, `ko`,
  `fr`).
- `<region>` is a two-letter ISO 3166-1 code (`gb`, `us`, `cn`) or, for a
  language not tied to one country, a UN M.49 code (`001` is "world").
- A bare language (`/en/`, `/cy/`) is never a locale
  directory, and does not exist. It 404s, like any other unknown locale.
- The one existing extra part is `en-gb-oxendict`, whose trailing variant
  subtag (`oxendict`) marks Oxford spelling. A new locale should not add one
  without a reason as strong.

`tests/locales.spec.ts` enforces this.

`src/lib/i18n/locales.ts` also exports `PICKER_LOCALES`: what the header's
LocalePicker actually offers, in display order (`cy-001` first, then the
four English variants, then `zh-cn`, `ar-001`, `ko-001`, and `fr-001`). It omits `cy-gb`, since its content
is identical to `cy-001` — see "Welsh" below — so showing both would just
be two indistinguishable options. `cy-gb` still routes and renders for
anyone who links to it directly; it's a picker-display choice, not a
support decision.

## URL scheme

Every page lives at `https://testingexamples.github.io/<locale>/<slug>/`
— including the default locale, which is still prefixed
(`/en-001/...`), not bare. There is one exception: the site root
`/` (see "The home page fixture contract" below).

There is no `/locales/` segment. Earlier versions served these pages under
`/locales/<locale>/<slug>/`; that prefix was removed, the old URLs are not
redirected and now 404 (`tests/locales.spec.ts` checks this). The
`[locale=locale]` route segment sits at the top level, next to the old flat
redirect routes such as `/about/`, which are static and take precedence.

**Slugs**: the four English locales share one English slug per page
(`what-is-automatic-testing`, etc.). The two Welsh locales share one
Welsh slug per page (`beth-yw-profi-awtomatig`, etc.), and `zh-cn` has its
own Chinese slug per page (`什么是自动化测试`, etc., in native characters,
percent-encoded in the actual URL like any non-ASCII IRI), as do `ar-001`
(`ما-هو-الاختبار-الآلي`) and `ko-001` (`자동화-테스트란-무엇인가`) — and `fr-001`
(`qu-est-ce-que-le-test-automatise`, plain ASCII with the accents and
apostrophes dropped) — translating the URL itself, not just a locale prefix. One exception: `given-when-then`
keeps its English slug (and English heading term) in every locale,
because Given-When-Then/Gherkin is BDD vocabulary, not ordinary prose —
same treatment as any other technical proper noun on this site.

The full slug table lives in `src/lib/i18n/topics.ts`, one entry per page,
each carrying its English slug, its Welsh slug, its Chinese slug, its
Arabic slug, its Korean slug, its French slug, and a lazy import of its Svelte component.

**Old flat URLs** (`/what-is-automatic-testing/`, `/about/`, etc.) still
resolve: each one's route now does nothing but
`redirect(308, '/en-001/<same-slug>/')`, which `adapter-static`
turns into a static meta-refresh HTML page at build time. This keeps
existing links and search-engine results working without duplicating
content.

## The home page fixture contract

`src/routes/+page.svelte` (site root, `/`) is **not** part of the locale
system and is never touched by it. AGENTS.md documents why: its "Id
Examples" through "Form Input Examples" section is a contract nine
external sibling repos' test suites depend on, hardcoded to
`page.goto('/')`. That page, and only that page, keeps its historical
unprefixed URL, unlocalized, byte-for-byte unchanged.

### Language redirect on `/`

The one thing `/` does is send a *person* to the locale that matches their
browser. On mount, `src/routes/+page.svelte` reads `navigator.languages`
(falling back to `navigator.language`) and calls `preferredLocale()` from
`src/lib/i18n/detect.ts`; if that finds a locale it replaces the URL with
`/<locale>/`. The page's markup is untouched.

- Tags are matched case-insensitively and `_` counts as `-`, so `cy_GB`,
  `cy-GB` and `CY-gb` all give `cy-gb`.
- An exact match wins (`en-US` → `en-us`). Otherwise the first locale with the
  same language is used (`fr-CA` → `fr-001`, `en-AU` → `en-001`, `cy` →
  `cy-001`). Traditional Chinese (`zh-TW`, `zh-HK`, `zh-Hant`) gets nothing,
  since `zh-cn` is Simplified.
- Preferences are tried in order, so `['de', 'fr']` gives `fr-001`. If no
  preference matches, the visitor stays on `/`.
- **Never for a browser under automation.** `navigator.webdriver` is true in
  Selenium, WebdriverIO and Playwright, and the sibling repos' tests must keep
  seeing the fixtures at `/`. The redirect is skipped there.
- The locale picker reports its initial value on mount. `+layout.svelte`
  ignores a change to the locale already showing, because following it would
  move `/` to `/en-001/`.

Covered by `tests/detect.spec.ts` (matching rules) and
`tests/locale-redirect.spec.ts` (the redirect, and that automation stays put).

That same fixture section is also rendered — identically, in English, on
every locale including both Welsh ones, `zh-cn`, `ar-001`, `ko-001`, and
`fr-001` — on each locale's Practice page (`/<locale>/<practice slug>/`,
for example `/en-001/practice/`), not on its home page. The Practice
page keeps the short "practise on this page" explanation (translated) above
the fixtures, and each locale's home page links to it from its Examples list.
Practice slugs: `practice`, `ymarfer`, `练习`, `التدريب`, `연습`, `s-exercer`.
The fixture section is never translated anywhere: it is a contract/standard,
not content, the same category as a code sample or a product name. Both the
root page and every locale's Practice page import it
from one shared component, `src/lib/components/SiteFixtures.svelte`, so
the two can never drift apart. **Never edit that component without first
reading AGENTS.md and coordinating with the nine sibling repos it names.**

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
would just be duplication. Terminology follows the Welsh Government's
TermCymru term bank, as recorded in [welsh-glossary.md](welsh-glossary.md),
which is the reference for any Welsh wording change. Still
machine-assisted, native-review-recommended — see the caveat in the
top-level summary this spec accompanies.

Chinese: `zh-cn` gets one Simplified Chinese translation per page, written
directly (not machine-translated word-for-word), with the same proper-noun
and code-sample exclusions as every other locale. Also machine-assisted,
native-review-recommended.

Arabic: `ar-001` is Modern Standard Arabic, one translation per page,
written directly rather than word-for-word, with the same proper-noun and
code-sample exclusions as every other locale. It is the site's only
right-to-left locale, which has four consequences:

- `LOCALE_META['ar-001'].dir` is `'rtl'`, and `src/hooks.server.ts` writes
  `dir="rtl"` onto `<html>` at prerender time, so the page is mirrored from
  first paint.
- `static/assets/style.css` uses logical properties (`padding-inline-start`,
  `text-align: start`, `margin-inline-start`) instead of left/right, so
  layout mirrors automatically. New CSS must do the same.
- Code samples, inline `code`, and the home page's fixture section are
  forced left-to-right in CSS (the last block of `style.css`), not by adding
  a `dir` attribute: the fixture markup must stay byte-for-byte what the
  sibling repos expect, and none of that content is ever translated.
- Arrows in call-to-action labels point the other way (`←`, not `→`).

Korean: `ko-001` gets one Korean translation per page in the polite
formal register (합니다체), written directly, with the same proper-noun and
code-sample exclusions as every other locale. Also machine-assisted,
native-review-recommended.

French: `fr-001` is general (not country-specific) French, one translation per
page, in the formal register (`vous`), written directly rather than word for
word, with the same proper-noun and code-sample exclusions as every other
locale. Typography follows French rules: non-breaking spaces before `:`, `;`,
`?`, `!` and inside « guillemets », which is applied mechanically when a
French block is added. Terminology: `test automatisé` (automatic testing),
`IA` (artificial intelligence), `dépôt` (repository), `pull request`, `CI/CD`
and `DevOps` left as is, `localisateur` (locator), `IHM` (UI). Also
machine-assisted, native-review-recommended.

Slugs for `zh-cn`, `ar-001`, and `ko-001` are native characters, so the
request pathname is percent-encoded while the slug table is not:
`switchLocaleHref` in `src/lib/i18n/paths.ts` decodes the path before
looking the topic up. Without that, switching language from a non-ASCII
page silently falls back to the target locale's home page.

## Implementation shape

- `src/lib/i18n/locales.ts` — the `Locale` type, the locale list, and
  per-locale metadata (endonym label, BCP 47 tag, text direction).
- `src/lib/i18n/topics.ts` — one entry per page: its slug in each of the
  six slug groups (English, Welsh, Chinese, Arabic, Korean, French), and a
  lazy `import()` of its component.
- `src/lib/i18n/detect.ts` — `localeForTag()` and `preferredLocale()`, the
  browser-language matching used only by the redirect on `/`.
- `src/lib/i18n/paths.ts` — `localeHref(locale, topicId)` (build a URL)
  and `switchLocaleHref(pathname, targetLocale)` (same page, new locale)
  — every internal link and the PickerBar's locale switch both go through
  these, never a hand-built path.
- `src/lib/i18n/chrome.ts` — translated header/footer/PickerBar strings,
  consumed by the root `+layout.svelte`, which also ignores a locale-picker
  change to the locale already showing (see "Language redirect on `/`").
- `src/params.ts` — the `locale` param matcher for the `[locale=locale]` route
  segment: any `<language>-<region>` shape (SvelteKit 3 loads it with Node at
  build time, so it cannot import the locale list); the page loader then
  rejects a code that is not in `LOCALES`.
- `src/routes/[locale=locale]/[...slug]/+page.ts` — resolves
  `(locale, slug)` to a `TopicId` via `topicForSlug`, lazy-loads that
  topic's component, and lists every `(locale, slug)` prerender entry via
  `entries()`.
- `src/routes/[locale=locale]/[...slug]/+page.svelte` — renders the
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

## Related topics

- [welsh-glossary.md](welsh-glossary.md) — the Welsh terminology reference
  (TermCymru), with every term decision made so far
- [../index.md](../index.md) — the site spec, including the home page fixture
  contract this document works around
- [../../AGENTS.md](../../AGENTS.md) — agent instructions
- `tests/locales.spec.ts` (locale code format), `tests/detect.spec.ts`
  (browser-language matching) and `tests/locale-redirect.spec.ts` (the
  redirect on `/`)
