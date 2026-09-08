# Specification: testingexamples.github.io

## Summary

This site's home page (`/`) is a stable page of HTML fixtures for practicing
browser automation. Its "Id Examples" through "Form Input Examples" sections
are a contract: five sibling repos' automatic tests and walkthroughs locate
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

- `/learn/` — hub page linking to the eight articles below, in this order.
  - `/what-is-automatic-testing/` — what automatic testing is, and how
    it differs from and complements manual testing.
  - `/what-is-the-purpose-of-automatic-testing/` — what a team actually gets
    back for the effort of writing automatic tests (catching regressions
    early, tireless repetition, confident frequent releases, cheaper bugs,
    freeing humans for what tests can't do), extracted from
    `/what-is-automatic-testing/`'s "What automated tests buy you"
    section into its own page. Linked from the home page's Learn list and
    from `/learn/`; `/what-is-automatic-testing/`'s closing call to
    action continues here, and this page's own call to action continues to
    `/what-is-the-testing-pyramid/`.
  - `/what-is-the-testing-pyramid/` — the three layers of automatic tests
    (unit, integration, end-to-end/browser), extracted from
    `/what-is-automatic-testing/` into its own page. Linked from the
    home page's Learn list and from `/learn/`.
  - `/what-is-browser-automation-testing/` — what browser automatic testing
    is and the trade-offs of its realism (slower, more brittle, harder to
    diagnose than a unit test), extracted from
    `/what-is-automatic-testing/` into its own page. Linked from the
    home page's Learn list, from `/learn/`, and from
    `/what-is-the-testing-pyramid/`'s closing call to action; its own call
    to action continues to `/what-is-continuous-integration-testing/`.
  - `/what-is-continuous-integration-testing/` — what CI is (running the
    automatic test suite on every commit/pull request in a clean
    environment) and why it's what makes a test suite actually pay off.
    Linked from the home page's Learn More list, from `/learn/`, and from
    `/what-is-browser-automation-testing/`'s closing call to action; its own
    call to action continues to `/how-to-start-learning-automatic-testing/`.
    Also the closing link in the Learn More chain below, which loops back
    into this page.
  - `/how-to-start-learning-automatic-testing/` — ("How to start learning automatic testing?")
    a step-by-step path for learning browser automation: pick a language
    (JavaScript or Python), pick a tool (Playwright or Selenium), run a
    first script against this site's own home page, then practice on the
    sibling demo repos and this site's own `/examples/` pages.
  - `/how-does-artificial-intelligence-help-automatic-testing/` — ("How does
    artificial intelligence help automatic testing?") how and why AI shows
    up in writing and maintaining tests, in CI/CD and DevOps, and in
    turning agile discovery into concrete test scenarios, plus an explicit
    caveat about trusting AI-written assertions without reading them.
    Links to `AI_STATEMENT.md` (repo root, linked via its GitHub blob URL
    since only `build/` is deployed) as a live example of the disclosure
    it describes — this site itself was built with AI assistance under the
    maintainer's direction.
  - `/what-are-related-concepts-for-automatic-testing/` — ("What are
    related concepts for automatic testing?") code editors, version
    control (git and GitHub), and agile discovery: the everyday tools and
    practices that surround automatic testing, for a reader who just wrote
    their first script. Originally covered eight topics; three (DevOps,
    flow metrics, Lean Six Sigma) were extracted into their own pages,
    listed below.
- The home page's "Learn More" list — bonus topics extracted from
  `/what-are-related-concepts-for-automatic-testing/`, chained together by
  their own closing calls to action, the last of which loops back to
  `/what-is-continuous-integration-testing/` above.
  - `/what-is-devops-for-automatic-testing/` — what DevOps is, and why
    testing in production (canary releases, feature flags, watching real
    error rates after a deploy) legitimately complements pre-release
    testing rather than replacing it. Its call to action continues to
    `/what-are-flow-metrics-for-automatic-testing/`.
  - `/what-are-flow-metrics-for-automatic-testing/` — cycle time, lead
    time, throughput, and work in progress, and why a growing pile of
    flaky or skipped tests is itself a flow-metric signal of piling-up
    testing debt. Its call to action continues to
    `/what-is-lean-six-sigma-for-automatic-testing/`.
  - `/what-is-lean-six-sigma-for-automatic-testing/` — Lean (eliminate
    waste) and Six Sigma (reduce variation), and why a flaky test is
    literally "variation" worth root-causing rather than re-running until
    it goes green. Its call to action loops back to
    `/what-is-continuous-integration-testing/`.
- `/examples/` — hub page linking to the two example pages below.
  - `/examples/google-search/` — the same handful of interactions
    (searching, reading results, following a link) implemented across
    Selenium and Playwright in JavaScript, Python, and Rust. WebdriverIO
    examples were removed from this page (kept as demo repos — see the
    table on `/about/` — but not as illustrative code here).
  - `/examples/google-maps/` — the same handful of interactions (browsing a
    map, searching for a place) implemented across the same two tools and
    three languages.
- `/given-when-then/` — one scenario (search Google, see results) written
  first as a Given-When-Then (Gherkin/BDD) sentence, then as the
  equivalent Selenium and Playwright code in JavaScript and Python.
  Linked from the home page's Examples list.
- `/app/` — a small interactive demo application (a Lily Design System
  Grail layout: simulated sign-in, a post-sign-in nav bar with a search
  box, and a three-tab panel), built as another stable target to practice
  browser automation on — this time a realistic app shell with client-side
  state, rather than a static fixture page. `tests/app.spec.ts` exercises
  its full behaviour (sign-in success/failure, each nav icon, the search
  box, each tab). Linked from the home page's Examples list.

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
  was found and fixed on `/what-are-related-concepts-for-automatic-testing/` and a since-removed page
  — both previously had an `eyebrow` (`"1. Language"`, `"Writing the code"`,
  and similar) on every section heading; both were removed down to a plain
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
