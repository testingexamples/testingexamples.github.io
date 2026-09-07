<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="What the testing pyramid is: unit tests at the base, integration tests in the middle, and end-to-end browser tests at the top — and why a healthy project has more of the fast layers and fewer of the slow ones."
  />
</svelte:head>

<div class="page-header">
  <h1>What is the testing pyramid?</h1>
  <p>
    Automatic tests come in layers, usually drawn as a pyramid because of how many of each kind a
    healthy project tends to have — many small, fast tests at the bottom, and progressively fewer,
    slower, broader tests toward the top.
  </p>
</div>

<section class="section prose">
  <h3>Unit tests (the base)</h3>
  <p>
    A unit test checks one small piece of code — a single function or class — in isolation, with no
    real database, network, or browser involved. Unit tests are fast (thousands can run in seconds),
    cheap to write, and pinpoint failures precisely. A healthy project has a lot of these.
  </p>

  <h3>Integration tests (the middle)</h3>
  <p>
    An integration test checks that several pieces work correctly together — a function that talks
    to a real database, or two internal services calling each other. These catch problems unit
    tests can't see (the pieces individually work, but not together), at the cost of being slower
    and a bit more involved to set up.
  </p>

  <h3>End-to-end / browser (UI) tests (the top)</h3>
  <p>
    An end-to-end test drives a real browser exactly the way a real user would: it opens a page,
    clicks buttons, fills in forms, and checks that the page responds correctly. This is what
    browser automation tools like Selenium WebDriver, WebdriverIO, and Playwright do — and it's what
    every example on this site demonstrates. These tests sit at the top of the pyramid: there are
    fewer of them, but each one gives high confidence, because it exercises a real user journey
    through the real, assembled application — front end, back end, and everything wired together —
    rather than one isolated piece of it.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "Can you explain the testing pyramid simply — what's the actual difference between a unit
      test, an integration test, and an end-to-end test?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "My project has plenty of end-to-end browser tests but almost no unit tests — is that
      actually a problem, and how would I start fixing the balance?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "How do I decide, for a specific new feature, which layer of the pyramid a new test belongs
      in rather than defaulting to another end-to-end test?"
    </li>
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/what-is-browser-automation-testing/"
      >Next: what is browser automation testing? →</CallToAction
    >
  </p>
</section>
