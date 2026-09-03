# Specification: testingexamples.github.io

## Summary

This site's home page (`/`) is a stable page of HTML fixtures for practicing
browser automation. Its "Id Examples" through "Form Input Examples" sections
are a contract: five sibling repos' automated tests and walkthroughs locate
elements on this exact page by the ids, names, classes, link text, and XPath
expressions documented below. This document is the single source of truth
for that contract.

## Scope

In scope: every id, name, class, href, and visible text in the fixture
section of `src/routes/+page.svelte` (the elements under the headings Id
Examples, Name Examples, Class Examples, Link Examples, Ordered List
Example, Unordered List Example, and Form Input Examples).

Out of scope: everything else on the site — site chrome (header, nav,
footer, pickers), the About page, and the introductory prose above the
fixture section on the home page. Those can change freely without
coordinating with the sibling repos.

## Principles and rules

1. **The fixture markup is a contract, not a design.** It must never be
   restyled into a different DOM shape, and no id/name/class/text within it
   may be added, removed, or renamed without first checking every sibling
   repo listed below for that selector and coordinating the change.
2. **This document is authoritative.** If `src/routes/+page.svelte` and this
   document ever disagree about the fixture contract, that is a defect in
   one of them — fix it before doing anything else.
3. **One exception, already applied:** the unordered list previously had a
   duplicate id bug (see Sources, below); the current page and this document
   both reflect the fixed version.
4. Everything in the fixture section is plain HTML — not Lily Design System
   components — so the DOM shape stays exactly what the sibling repos parse.

## Detail: the exact fixture contract

### Id Examples

```html
<p id="id-example-1">Id Example 1</p>
<p id="id-example-2">Id Example 2</p>
<p id="id-example-3">Id Example 3</p>
```

### Name Examples

```html
<p name="name-example-1">Name Example 1</p>
<p name="name-example-2">Name Example 2</p>
<p name="name-example-3">Name Example 3</p>
```

### Class Examples

```html
<p class="class-example-1">Class Example 1</p>
<p class="class-example-2">Class Example 2</p>
<p class="class-example-3">Class Example 3</p>
```

### Link Examples

```html
<p><a href="https://1.example.com">Link Example 1</a></p>
<p><a href="https://2.example.com">Link Example 2</a></p>
<p><a href="https://3.example.com">Link Example 3</a></p>
```

### Ordered List Example

```html
<ol id="ol-example-1">
 <li id="ol-example-1-li-1">alfa</li>
 <li id="ol-example-1-li-2">bravo</li>
 <li id="ol-example-1-li-3">charlie</li>
</ol>
```

### Unordered List Example

```html
<ul id="ul-example-1">
 <li id="ul-example-1-li-1">alfa</li>
 <li id="ul-example-1-li-2">bravo</li>
 <li id="ul-example-1-li-3">charlie</li>
</ul>
```

### Form Input Examples

```html
<form id="form-1">

  <h3>Text Example</h3>

  <label for="text-example-1-id">Text Example 1</label>
  <input type="text" id="text-example-1-id" name="text-example-1-name" value="Text Example 1 Value">

  <h3>Checkbox Example</h3>

  <label for="checkbox-example-1-id">Checkbox Example 1</label>
  <input type="checkbox" id="checkbox-example-1-id" name="checkbox-example-1-name" value="1" />

  <h3>Radio Example</h3>

  <input type="radio" id="radio-example-1-option-1-id" name="radio-example-1-name" value="1" />1
  <input type="radio" id="radio-example-1-option-2-id" name="radio-example-1-name" value="2" />2
  <input type="radio" id="radio-example-1-option-3-id" name="radio-example-1-name" value="3" />3

  <h3>Select Example</h3>

  <select id="select-example-1-id" name="select-example-1-name">
    <option id="select-example-1-option-1-id" value="a">alfa</option>
    <option id="select-example-1-option-2-id" value="b">bravo</option>
    <option id="select-example-1-option-3-id" value="c">charlie</option>
  </select>

  <h3>Submit Example</h3>

  <input type="submit" value="Submit">

</form>
```

### Selectors the five sibling repos actually use

For reference, the selectors each sibling repo exercises against this page
(a subset of the full contract above, but the exact set that must never
break):

- `#id-example-1`, `[name="name-example-1"]`, `.class-example-1`
- Link with text `Link Example 1` (href `https://1.example.com`)
- XPath `//input[@type="submit"]` / CSS `input[type="submit"]`
- `#text-example-1-id` (fillable text input)
- `#checkbox-example-1-id` (checkable checkbox)
- `#radio-example-1-option-1-id` (checkable radio, part of the
  `radio-example-1-name` group with `-option-2-id` and `-option-3-id`)
- `#select-example-1-id` (select with option value `a`, text `alfa`, as the
  first/index-0 option)

## Content areas

Besides the home page's fixture contract (above) and the `/about/` page, the
site has two further sections. Neither depends on or affects the fixture
contract; they can change freely.

- `/learn/` — hub page linking to the four articles below.
  - `/learn/what-is-automatic-testing/` — what automated testing is, why it
    matters, and where browser automation fits in the testing pyramid
    alongside unit and integration tests.
  - `/learn/getting-started/` — a step-by-step path for learning browser
    automation: pick a language, pick a tool (Playwright, Selenium, or
    WebdriverIO), run a first script against this site's own home page,
    learn the four core concepts (locating, acting, waiting, asserting),
    then practice on the sibling demo repos and this site's own
    `/examples/` pages.
  - `/learn/related-concepts/` — code editors, version control (git and
    GitHub), CI/CD, and agile discovery: the everyday tools and practices
    that surround automated testing, for a reader who just wrote their
    first script.
  - `/learn/artificial-intelligence/` — how and why AI shows up in writing
    and maintaining tests, in CI/CD and DevOps, and in turning agile
    discovery into concrete test scenarios, plus an explicit caveat about
    trusting AI-written assertions without reading them. Links to
    `AI_STATEMENT.md` (repo root, linked via its GitHub blob URL since only
    `build/` is deployed) as a live example of the disclosure it describes
    — this site itself was built with AI assistance under the maintainer's
    direction.
- `/checklist/` — a short checklist of what's worth learning first: a
  programming language (JavaScript, TypeScript, Python, or Rust), an
  automatic testing tool (Selenium, WebdriverIO, or Playwright), and an AI
  agent helper (Claude, Gemini, or Copilot), each ending with an example
  prompt to ask an AI assistant. Linked from the home page and from
  `/learn/`.
- `/examples/` — hub page linking to the two example pages below.
  - `/examples/google-search/` — the same handful of interactions
    (searching, reading results, following a link) implemented across
    Selenium, WebdriverIO, and Playwright in JavaScript, Python, and Rust.
  - `/examples/google-maps/` — the same handful of interactions (browsing a
    map, searching for a place) implemented across the same three tools and
    three languages.

## Content page conventions

Rules for how `+page.svelte` files under `src/routes/` (everything except
the home page's fixture section, which follows the contract above instead)
use headings:

- **One `<h2>` headline per section.** `SectionHeading` (from
  `lily-design-system-svelte-headless`) takes `heading` and an optional
  `eyebrow`. Do not set `eyebrow` on a page's own section headings — it
  renders as a second, smaller line of text sitting right above the `<h2>`,
  which reads as two competing headlines for one section rather than one
  clear one. **Do not use multiple straggler headlines** (an eyebrow label,
  a numbered prefix like "1. Language", or any other second heading-like
  line) where a single, clear `<h2>` says the same thing on its own. This
  was found and fixed on `/checklist/` and `/learn/related-concepts/` — both
  previously had an `eyebrow` (`"1. Language"`, `"Writing the code"`, and
  similar) on every section heading; both were removed down to a plain
  `<h2>`, once and for all, not just for those two pages.

## Acceptance criteria

- Every id/selector referenced by the five sibling repos (listed in
  AGENTS.md) still resolves on the deployed home page, exactly as specified
  above.
- `pnpm build` succeeds (SvelteKit's `strict: true` static prerendering
  fails the build if any route errors, which doubles as a correctness
  check).
- `pnpm test` passes — `tests/fixtures.spec.ts` mechanically asserts the
  selectors above.

## Related topics

- [../README.md](../README.md) — project overview, install/run/build
- [../AGENTS.md](../AGENTS.md) — agent instructions, including the
  non-negotiable coordination rule for changing this contract
- [../src/routes/+page.svelte](../src/routes/+page.svelte) — where this
  contract is implemented

## Sources

This document supersedes the old `README.md`'s inline HTML: the fixture
markup that used to live directly in `README.md` now lives in
`src/routes/+page.svelte`, and this file is its authoritative specification.

The previous version of the unordered-list fixture had a duplicate-id bug —
both "bravo" and "charlie" `<li>` elements shared the id `ul-example-1-li-2`.
That has been fixed here and in the page: "charlie" now has id
`ul-example-1-li-3`. None of the five sibling repos reference
`ul-example-*` or `ol-example-*` ids in their source (confirmed by grep
across all five repos before making this change), so the fix was safe.
