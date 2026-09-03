<script lang="ts">
  import { SectionHeading, InformationCallout, Separator, CallToAction } from 'lily-design-system-svelte-headless';
  import { REPO, NHS_WALES_DEMO_REPOS } from '$lib/site';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const aiStatementUrl = `${REPO}/blob/main/AI_STATEMENT.md`;
  const nhsWalesExample = NHS_WALES_DEMO_REPOS[0];
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="A grounded, practical look at where AI shows up in automated testing today: writing and maintaining tests, CI/CD, and agile discovery — plus the honest caveat that applies to all three."
  />
</svelte:head>

<div class="page-header">
  <h1>Artificial Intelligence and Testing</h1>
  <p>
    AI tools have become a real part of how automated testing, CI/CD, and agile discovery work
    today. This page covers three ways AI shows up in that work, and one honest caveat that
    applies to all three.
  </p>
</div>

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Writing tests"
    heading="AI for writing and maintaining tests"
    level={2}
  />

  <p>
    A first draft of a test can now often come from a plain description of what should happen —
    "go to the search page, search for X, check the results mention X" — rather than starting from
    a blank file. Several tools do this today, including Playwright's own codegen, which records
    real clicks into a script, combined with an AI layer that lets you describe intent in natural
    language and get a starting point to edit.
  </p>

  <p>
    Some tools also apply AI to <strong>locators</strong> — the selectors a test uses to find an
    element on the page. A "self-healing" locator uses AI to re-locate an element when its
    selector changes, for example when a developer renames an <code>id</code>, instead of the test
    simply breaking.
  </p>

  <InformationCallout label="Worth knowing">
    <p>
      Self-healing locators reduce one kind of brittleness but introduce another: a self-healing
      locator can silently click the <strong>wrong</strong> element — one that merely looks similar
      to the one the test meant — and a test that still runs and still passes is not automatically
      a test that is still correct. Treat this kind of tool as an aid you still review, not a
      replacement for understanding what your test actually checks.
    </p>
  </InformationCallout>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Running tests at scale"
    heading="AI in CI/CD and DevOps"
    level={2}
  />

  <p>
    Once a test suite is running in <a href="/learn/related-concepts/">CI/CD</a> on every commit,
    new problems show up that only exist at scale, and AI-based analysis has started to help with a
    few of them:
  </p>

  <ul>
    <li>
      <strong>Flaky-test detection.</strong> Distinguishing "this test fails sometimes because of a
      real intermittent bug" from "this test is just badly written" by analyzing historical
      pass/fail patterns, so a team doesn't waste hours chasing a ghost that isn't actually there.
    </li>
    <li>
      <strong>Intelligent test selection.</strong> In a large test suite, running only the subset of
      tests actually likely to be affected by a given code change, to keep CI/CD fast instead of
      re-running everything on every commit.
    </li>
    <li>
      <strong>Log and anomaly analysis after a deploy.</strong> Flagging unusual error-rate or
      latency patterns automatically, rather than relying on a human watching a dashboard and
      noticing something looks off.
    </li>
  </ul>

  <p>
    See <a href="/learn/related-concepts/">Related Concepts</a> for what CI/CD is in the first
    place, if that term is new to you.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Deciding what to test"
    heading="AI in agile discovery — turning user ideas into tests"
    level={2}
  />

  <p>
    Before a test can be written, someone has to decide what's worth testing. AI can help with the
    step before that: synthesizing a pile of user interviews, support tickets, or feedback into
    concrete, testable acceptance criteria. "As a patient, I want to search NHS Wales for a
    service" is a vague goal; "search for a service and confirm the results page shows it" is
    something a test can actually check. AI can help draft that translation.
  </p>

  <p>
    This site's own sibling repos are a real worked example of the destination, even though they
    were written by hand rather than by an AI-discovery step: someone identified real user
    journeys on a real public site — find the home page, find "About Us", search for help — and
    turned them into concrete, asserted test scenarios. See
    <a href="/about/">About</a> for the full list, or
    <a href={nhsWalesExample.url}><code>{nhsWalesExample.name}</code></a> directly.
  </p>

  <p>
    AI can help with the "turn a vague idea into a concrete scenario" step, but a human still has
    to confirm the AI understood the actual user need correctly. That step doesn't disappear — it
    moves, from writing the acceptance criteria by hand to reviewing the ones a tool drafted.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" eyebrow="The catch" heading="The honest caveat" level={2} />

  <InformationCallout label="Read what a test asserts before you trust it">
    <p>
      AI-assisted testing tools can get things wrong in ways worth naming specifically:
      hallucinating a selector that doesn't exist, misunderstanding what a user actually meant, or
      writing an assertion that's technically true but doesn't check the right thing — a test that
      passes without really verifying anything meaningful. The fix is the same one that applies to
      any contributor's pull request, human or AI: read what a test actually asserts before
      trusting that it passes. Don't just check for green.
    </p>
  </InformationCallout>

  <p>
    This site itself is a concrete example of that discipline being applied, not just described.
    This site was built with AI assistance (Claude), under a human maintainer's direction, and
    <a href={aiStatementUrl}><code>AI_STATEMENT.md</code></a> in the repository is the honest account
    of how — what was AI-generated, what the human decided, and what was actually verified rather
    than assumed.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/learn/">Back to Learn</CallToAction>
    <CallToAction
      class="button button-secondary"
      href="/learn/related-concepts/"
      style="margin-left: 0.75rem;">Related Concepts →</CallToAction
    >
  </p>
</section>
