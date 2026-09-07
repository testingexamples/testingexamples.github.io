<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="What continuous integration (CI) testing is: running your automatic test suite automatically on every change, so broken code is caught before it merges rather than after."
  />
</svelte:head>

<div class="page-header">
  <h1>What is continuous integration testing?</h1>
  <p>
    Continuous integration (CI) testing is running your automatic test suite automatically every
    time someone proposes a change, instead of relying on a person to remember to run it by hand.
  </p>
</div>

<section class="section prose">
  <p>
    A CI server (GitHub Actions, GitLab CI, Jenkins, and similar tools all do this) watches a
    repository for new commits and pull requests. On every one, it checks out the code, installs
    dependencies, and runs the test suite from scratch, in a clean environment, the same way every
    time — unit tests, integration tests, and often the browser automation tests this site is
    about, all in one run. The result — pass or fail — is reported right on the pull request,
    before a human reviewer even opens it.
  </p>

  <p>
    This is what makes automatic tests actually pay off. A test suite that only runs on one
    developer's laptop, when they remember to run it, catches far less than a suite that runs on
    every single change, automatically, and blocks the merge if it fails. CI is the mechanism that
    turns "we have tests" into "broken code cannot reach the main branch" — and it's usually the
    first piece of infrastructure a team adds once their browser automation tests are worth
    trusting.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "What does 'CI' actually mean, in plain terms, and why would a team bother running tests
      automatically instead of just running them themselves before pushing?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "I have a test suite that works locally — what's a simple way to get it running
      automatically on every pull request?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "My CI pipeline has gotten slow because it runs the full browser test suite on every commit
      — how do I restructure it to stay fast without losing confidence?"
    </li>
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/learn/getting-started/"
      >Next: how to start learning automatic testing? →</CallToAction
    >
  </p>
</section>
