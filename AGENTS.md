# AGENTS.md

This repo is `testingexamples.github.io`: a SvelteKit site, built with
`@sveltejs/adapter-static` and prerendered to plain HTML, deployed to GitHub
Pages by `.github/workflows/deploy.yml` on every push to `main`.

## The critical non-negotiable

The home page (`src/routes/+page.svelte`) contains a fixture section — the
markup under the headings "Id Examples" through "Form Input Examples": every
`id`, `name`, `class`, `href`, and visible text in it. This markup is a
**contract** depended on directly by five sibling repos' source code:

- `../demo-playwright-javascript/src/demo.js`
- `../demo-playwright-python/src/demo.py`
- `../demo-selenium-javascript/src/demo.js`
- `../demo-webdriverio-javascript/test/specs/demo.js`
- `../demo-playwright-typescript/src/demo.ts`

If you change any fixture id, name, class, or visible text, **you must
first check every one of those five repos' source for that selector and
coordinate the change** — grep each repo, not just the file paths above, in
case a `spec/index.md` there also names the selector — or you will silently
break their tests. Do not add, remove, or rename a fixture id/name/class
without doing that check first.

`spec/index.md` in this repo is the single source of truth for the exact
fixture contract: every id, name, class, href, and visible text, listed
verbatim. If the page (`src/routes/+page.svelte`) and `spec/index.md` ever
disagree, that is a defect in one of them — fix it before doing anything
else.

`tests/fixtures.spec.ts` is the mechanical enforcement of that contract: a
Playwright test that visits `/` and asserts every selector the five sibling
repos use still resolves. Keep it passing.

The fixture markup itself lives in `src/lib/components/SiteFixtures.svelte`
and is imported, unmodified, by both `src/routes/+page.svelte` (this
contract's real target, at `/`) and every locale's own home page (for
completeness — never as a substitute for `/`, which sibling repos hit
directly). The same "never translate, never change without coordinating"
rule applies to that component regardless of which page imports it.

## Locales

The site is served at `/locales/<locale>/<slug>/` for six locales
(`en-001` default, `en-gb`, `en-gb-oxendict`, `en-us`, `cy-gb`, `cy-001`).
See `spec/locales/index.md` for the full contract — URL scheme, what's
translated vs. kept as-is, and why the home page fixture section is
exempt from all of it. Every page's own content and translations live in
`src/lib/pages/<topicId>/Page.svelte`; `src/routes/<old-slug>/+page.ts` is
now just a redirect to the new URL, kept so old links keep working. Start
any change to a page's content or translations there, not under
`src/routes/`.

## Working rules

- Only the home page's fixture section is kept as plain HTML deliberately;
  everything else on the site should use Lily Design System components
  (`lily-design-system-svelte-headless` and friends) per the pattern in
  `src/routes/+layout.svelte` and `src/lib/pages/about/Page.svelte`.
- `static/llms.txt` and `static/llms.json` use **absolute** URLs
  (`https://testingexamples.github.io/...`, full `https://github.com/...`
  links) because they are read from the live domain, not from the repo.
  Nothing else in this repo needs that — root docs like this file and
  `spec/index.md` use ordinary repo-relative links.

## Run it locally

```
pnpm install
pnpm dev      # start the dev server
pnpm build    # prerender to build/ — also the correctness check: strict
              # prerendering fails the build if any route errors
pnpm test     # run tests/fixtures.spec.ts with Playwright
```

CLAUDE.md is a pointer to this file — it is the single source of truth for
agent instructions.
