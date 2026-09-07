<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Why automatic testing exists: catching regressions early, running the same checks tirelessly, enabling frequent releases, cutting the cost of bugs, and freeing people for the testing machines can't do."
  />
</svelte:head>

<div class="page-header">
  <h1>What Is the Purpose of Automatic Testing?</h1>
  <p>
    Writing automatic tests takes real effort up front. Here's what a team actually gets back for
    that effort.
  </p>
</div>

<section class="section prose">
  <ul>
    <li>
      <strong>Catching regressions before release.</strong> A regression is something that used to
      work and quietly stopped working, usually because of an unrelated change elsewhere in the
      code. Automatic tests run on every change and catch these before they reach real users,
      instead of after.
    </li>
    <li>
      <strong>Running the same check thousands of times, without fatigue.</strong> A person checking
      the same login form for the thousandth time in a row will eventually miss something. A script
      checks it exactly the same way every time, at any hour, as many times as needed.
    </li>
    <li>
      <strong>Confident, frequent releases.</strong> A team with a trustworthy automatic test suite
      can ship changes daily, or many times a day, because the suite tells them quickly whether
      something broke. This is what makes continuous integration and continuous delivery (CI/CD)
      practical: every change is automatically built, tested, and — if the tests pass — deployed.
    </li>
    <li>
      <strong>Bugs are cheaper the earlier they're found.</strong> A bug caught while a developer is
      still writing the code costs a few minutes to fix. The same bug caught in code review costs
      more. Caught by manual testing before release, more still. Caught by a customer in production,
      it can cost hours of investigation, an emergency fix, reputational damage, and sometimes real
      money. Automatic tests push the moment of discovery as early as possible, where fixing is
      cheapest.
    </li>
    <li>
      <strong>Freeing humans for the testing machines can't do.</strong> Every hour a person doesn't
      spend manually re-checking the same known-good paths is an hour they can spend on exploratory
      testing, usability judgement, and the creative, adversarial thinking that finds the bugs no
      one wrote a script for.
    </li>
  </ul>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "In plain terms, what's a 'regression', and why do automatic tests catch it better than a
      person checking by hand?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "My team ships several times a week but still finds bugs in production — what's the actual
      connection between automatic testing and safer, more frequent releases?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "How do I make the business case, with real numbers, for investing more engineering time in
      automatic tests versus manual QA?"
    </li>
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/what-is-the-testing-pyramid/"
      >Next: what is the testing pyramid? →</CallToAction
    >
  </p>
</section>
