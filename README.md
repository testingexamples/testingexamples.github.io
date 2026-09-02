# Testing Examples

Testing Examples provides free open source testing examples.

The project's centerpiece is a small, deliberately stable web page of HTML
fixtures — elements with known ids, names, classes, link text, ordered and
unordered lists, and form inputs — for anyone learning or exercising browser
automation tools such as Selenium WebDriver, WebdriverIO, or Playwright.
Eleven sibling repositories exercise this site (or a real-world site) using
those tools; see [`spec/index.md`](spec/index.md) for the exact contract
five of them depend on.

- Live site: <https://testingexamples.github.io>
- Fixture contract: [`spec/index.md`](spec/index.md) — the authoritative,
  verbatim list of every id, name, class, href, and visible text the home
  page must keep
- Agent instructions: [`AGENTS.md`](AGENTS.md) is the source of truth for
  how AI coding agents should work in this repo (`CLAUDE.md` just points to
  it)

## Install and run

Requires Node (see `.tool-versions`) and pnpm (see `package.json`'s
`packageManager` field).

```sh
git clone https://github.com/testingexamples/testingexamples.github.io
cd testingexamples.github.io
pnpm install
pnpm dev
```

## Build

```sh
pnpm build     # prerenders the site to build/ with @sveltejs/adapter-static
pnpm preview   # serve the built site locally
```

## Test

```sh
pnpm test      # Playwright: tests/fixtures.spec.ts checks the fixture
               # contract every sibling repo depends on
```

## How this site is built

A [SvelteKit](https://kit.svelte.dev/) project using
`@sveltejs/adapter-static`, prerendered to plain HTML, styled with the
[Lily Design System](https://lilydesignsystem.com/), and deployed to GitHub
Pages by GitHub Actions (`.github/workflows/deploy.yml`) on every push to
`main`.

## License

No `LICENSE` file is currently present in this repository (or in any of its
sibling demo repos). Until one is added, the code defaults to all rights
reserved. This is a known gap — see `AGENTS.md`'s "Known gap" note — and
should be resolved by the maintainer rather than assumed.
