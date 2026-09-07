<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="What browser automation testing is, and the trade-offs that come with it: why it's the most realistic layer of the testing pyramid, and when to reach for it instead of a unit or integration test."
  />
</svelte:head>

<div class="page-header">
  <h1>What is browser automation testing?</h1>
  <p>
    Browser automation testing (also called end-to-end or UI testing) drives a real browser
    exactly the way a real user would — opening pages, clicking buttons, filling in forms — using
    tools like Selenium WebDriver, WebdriverIO, and Playwright. It's the most realistic layer of
    <a href="/what-is-the-testing-pyramid/">the testing pyramid</a>, but that realism has a cost.
  </p>
</div>

<section class="section prose">
  <p>
    They are slower than unit tests, sometimes by orders of magnitude, because they involve
    starting a real browser, loading real pages, and waiting for real rendering and network
    activity. They are more brittle: a UI test can break simply because a button's label changed
    or an element moved on the page, even though the underlying feature still works fine. They
    need real browsers available to run, which adds setup and infrastructure that a unit test
    never requires. And when a browser test fails, it can be harder to tell exactly why — was it a
    real bug, a timing issue, or just a cosmetic change to the page? — compared to a unit test's
    precise, one-function failure.
  </p>

  <p>
    The practical answer is not to avoid browser tests, but to use them for what they are uniquely
    good at: verifying that real, critical user journeys — signing up, searching, checking out —
    actually work end to end. Push everything else down the pyramid into faster, cheaper, more
    precise unit and integration tests, and reserve browser automation for the handful of flows
    where only a real browser, doing what a real user does, will tell you the truth.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "Why are browser tests slower and more fragile than other kinds of automatic tests, in
      plain terms?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "My browser test suite has gotten flaky and slow — what are the first things worth checking
      to make it more reliable?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "How do I decide which user journeys genuinely deserve a browser test versus being covered
      lower down the pyramid instead?"
    </li>
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/what-is-continuous-integration-testing/"
      >Next: what is continuous integration testing? →</CallToAction
    >
  </p>
</section>
