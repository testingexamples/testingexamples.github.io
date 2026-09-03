# AI Statement

This document discloses how this repository — `testingexamples.github.io` —
was built with AI assistance, what a human did and did not do, and what that
human is accountable for. It exists because the site's own
[Artificial Intelligence and Testing](https://testingexamples.github.io/learn/artificial-intelligence/)
learning page talks about AI tools in testing and CI/CD in the abstract, and
a reader deserves a concrete example rather than a hand-wave. This file is
that example.

## What was AI-generated

Essentially everything in this repository was written by Claude (Anthropic's
AI model), operating as "Claude Code," working turn-by-turn from instructions
given by the repository's maintainer, Joel Parker Henderson, in an
interactive session:

- The SvelteKit site structure itself — routes, layout, build configuration.
- Every page's content and code: the home page fixture markup, `/about/`,
  `/learn/` and its articles, `/examples/` and its worked code samples.
- The CSS and theming, and the integration of the
  [Lily Design System](https://lilydesignsystem.com/) (`lily-design-system-svelte-headless`)
  that the rest of the site is built from.
- The documentation: `AGENTS.md`, `spec/index.md`, `README.md`, `LICENSE.md`,
  and this file.

Commits carry a `Co-Authored-By: Claude Sonnet 5` trailer as disclosure —
naming the tool that touched the commit — not as a grant of authorship. Git's
`Author` field always names the human maintainer.

## What the human did

Joel Parker Henderson directed the scope and content of every addition to
this repository. Concretely, not just in principle:

- This file's own existence was prompted by the maintainer asking for an
  "Artificial Intelligence" learning page, and connecting it to exactly this
  kind of disclosure — the page and this statement were requested together,
  on purpose, so the page would have a real example to point at instead of
  a vague claim.
- Ambiguous calls were made by the maintainer when asked, not decided
  unilaterally by the tool. Two examples from this repository's own history:
  which GitHub organization a given sibling demo repo should live under (the
  five generic locator-strategy repos live under the `testingexamples` org;
  the six NHS Wales repos live under `joelparkerhenderson` — see
  `src/lib/site.ts`), and whether to add a license at all (the repo shipped
  for a time with `AGENTS.md` recording, in plain text, "No `LICENSE` file
  exists in this repo... Flag this to the maintainer — it should be resolved,
  not silently assumed" — a gap that was named rather than papered over,
  until the maintainer decided on the current multi-license terms in
  `LICENSE.md`).
- A real production bug was resolved under the maintainer's direction, not
  guessed at from memory: the header's SharePicker button rendered its icon
  visibly misaligned compared to the other two header pickers. See "What was
  verified rather than assumed" below for how it was actually diagnosed.
- The maintainer reviewed results as they were produced. Nothing here was
  generated once and merged unread; each change was read, and often tested,
  before being accepted.

## What was verified rather than assumed

Specific instances where a claim was checked against a primary source before
being acted on, rather than taken on faith:

- **The home page fixture contract.** The home page's fixture markup — every
  `id`, `name`, `class`, `href`, and visible text under "Id Examples" through
  "Form Input Examples" — is a contract that five sibling repos' automated
  tests depend on byte-for-byte (see `AGENTS.md`). Before any change to that
  markup, those five repos' actual source was cross-checked directly, not
  assumed from memory of what a "typical" fixture page might contain.
- **The Rust code examples.** The Rust snippets on
  [`/examples/google-search/`](https://testingexamples.github.io/examples/google-search/)
  and [`/examples/google-maps/`](https://testingexamples.github.io/examples/google-maps/)
  were written from real, fetched documentation and README examples for
  `thirtyfour`, `fantoccini`, and `playwright-rs`, rather than produced from
  a guess at what those crates' APIs probably look like.
- **The SharePicker bug.** Diagnosing the icon misalignment used actual
  browser automation — Playwright, `getBoundingClientRect`, computed styles,
  and screenshots — to establish that the three header picker buttons were
  pixel-identical boxes and that the visible difference was font-fallback
  behavior on one specific Unicode glyph, not a CSS layout bug. The fix (an
  inline SVG replacing the glyph) was then verified the same way: by
  screenshot, and by confirming the share list still opened and closed
  correctly. See commit `11d86f0`.

## What remains a human responsibility

Joel Parker Henderson is the maintainer of record for this repository and is
accountable for its content, exactly as any maintainer is for any repository,
regardless of what tool produced the bytes. AI assistance here is a tool used
under his direction — it drafts, and sometimes verifies, what it is asked to;
it does not decide what ships, and it is not an independent author who can
disclaim responsibility for what's in this repo. If something here is wrong,
that's on the maintainer to fix, not on the tool to have "known better."

## Where this fits the site's own content

This repository's [Learn](https://testingexamples.github.io/learn/) section
has a page on [Artificial Intelligence and Testing](https://testingexamples.github.io/learn/artificial-intelligence/)
covering AI's role in writing and maintaining tests, in CI/CD, and in agile
discovery — plus the honest caveat that AI-assisted tools can get things
wrong in specific, nameable ways. That page points here as its concrete
example: this file is that disclosure, applied to the very site you're
reading it on.
