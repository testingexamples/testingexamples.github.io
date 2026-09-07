<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Learn what automatic testing is and how to get started with browser automation tools like Selenium, WebdriverIO, and Playwright."
  />
</svelte:head>

<div class="page-header">
  <h1>Learn</h1>
  <p>
    Eight short articles: what automatic testing is and why it's worth doing, the testing pyramid
    and where browser automation fits in it, the trade-offs of browser tests, how continuous
    integration runs those tests automatically, a practical path for getting hands-on with browser
    automation yourself, where AI fits into all of that today, and the everyday tools and practices
    that surround it.
  </p>
</div>

<section class="section prose">
  <p>
    <a href="/learn/what-is-automatic-testing/">What is automatic testing?</a> — what automatic
    testing is, and how it differs from and complements manual testing.
  </p>
  <p>
    <a href="/what-is-the-purpose-of-automatic-testing/">What is the purpose of automatic testing?</a>
    — what a team actually gets back for the effort of writing automatic tests: earlier bugs,
    tireless repetition, and the confidence to release often.
  </p>
  <p>
    <a href="/what-is-the-testing-pyramid/">What is the testing pyramid?</a> — the three layers of
    automatic tests, from fast, cheap unit tests at the base to realistic end-to-end browser tests
    at the top.
  </p>
  <p>
    <a href="/what-is-browser-automation-testing/">What is browser automation testing?</a> — what
    it is, and the trade-offs that come with its realism: slower, more brittle, and harder to
    diagnose than a unit test.
  </p>
  <p>
    <a href="/what-is-continuous-integration-testing/">What is continuous integration testing?</a>
    — running your automatic test suite automatically on every change, so broken code is caught
    before it merges rather than after.
  </p>
  <p>
    <a href="/learn/getting-started/">How to start learning automatic testing?</a> — a step-by-step
    path: pick a language, pick a tool, run your first script against this site, then practice on
    real worked examples.
  </p>
  <p>
    <a href="/learn/artificial-intelligence/">How does artificial intelligence help testing?</a> —
    how and why AI shows up in writing tests, CI/CD, and agile discovery today, and the one caveat
    that applies to all three.
  </p>
  <p>
    <a href="/learn/related-concepts/">What are related concepts, tools, and tactics for automatic testing?</a> — friendly introductions to code
    editors, version control (git and GitHub), CI/CD, and agile discovery.
  </p>
</section>
