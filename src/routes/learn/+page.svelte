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
    Seven short articles: what automatic testing is and why it matters, the testing pyramid and
    where browser automation fits in it, the trade-offs of browser tests, how continuous
    integration runs those tests automatically, a practical path for getting hands-on with browser
    automation yourself, the everyday tools and practices that surround it, and where AI fits into
    all of that today — plus a checklist if you're not sure what to learn first.
  </p>
</div>

<section class="section prose">
  <p>
    <a href="/learn/what-is-automatic-testing/">What Is Automatic Testing?</a> — what automated
    testing is, why it matters, and what it buys a team over manual testing alone.
  </p>
  <p>
    <a href="/what-is-the-testing-pyramid/">What Is the Testing Pyramid?</a> — the three layers of
    automated tests, from fast, cheap unit tests at the base to realistic end-to-end browser tests
    at the top.
  </p>
  <p>
    <a href="/what-is-browser-automation-testing/">What Is Browser Automation Testing?</a> — what
    it is, and the trade-offs that come with its realism: slower, more brittle, and harder to
    diagnose than a unit test.
  </p>
  <p>
    <a href="/what-is-continuous-integration-testing/">What Is Continuous Integration Testing?</a>
    — running your automated test suite automatically on every change, so broken code is caught
    before it merges rather than after.
  </p>
  <p>
    <a href="/learn/getting-started/">How to Start Learning Automatic Testing?</a> — a step-by-step
    path: pick a language, pick a tool, run your first script against this site, then practice on
    real worked examples.
  </p>
  <p>
    <a href="/learn/artificial-intelligence/">How Does Artificial Intelligence Help Testing?</a> —
    how and why AI shows up in writing tests, CI/CD, and agile discovery today, and the one caveat
    that applies to all three.
  </p>
  <p>
    <a href="/learn/related-concepts/">Related Concepts</a> — friendly introductions to code
    editors, version control (git and GitHub), CI/CD, and agile discovery.
  </p>
  <p>
    <a href="/start-learning/">Start learning</a> — not sure what to learn first? A short checklist of what's
    worth learning first: a programming language, a testing tool, and an AI agent helper, each
    with an example prompt to ask an AI assistant.
  </p>
</section>
