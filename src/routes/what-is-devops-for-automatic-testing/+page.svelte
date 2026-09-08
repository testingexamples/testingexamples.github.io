<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="What DevOps is, and why testing in production — canary releases, feature flags, watching real error rates after a deploy — legitimately complements pre-release testing rather than replacing it."
  />
</svelte:head>

<div class="page-header">
  <h1>What is DevOps for automatic testing?</h1>
  <p>
    <strong>DevOps</strong> is the broader practice CI/CD sits inside: breaking down the wall
    between the people who write software and the people who run it in production, so both groups
    share responsibility for whether it actually works once real users touch it.
  </p>
</div>

<section class="section prose">
  <p>
    Here's why that belongs on a testing page: DevOps is why "testing in production" — canary
    releases to a small slice of real traffic, feature flags, watching real error rates right
    after a deploy — is a legitimate complement to pre-release testing, not a replacement for it.
    No test suite can cover every real-world condition in advance; DevOps practices are the second,
    live safety net for the ones it missed.
  </p>

  <p>
    Learn more at AWS's <a href="https://aws.amazon.com/devops/what-is-devops/">introduction to DevOps</a>,
    or watch edureka!'s
    <a href="https://www.youtube.com/watch?v=gc7_f3NmKQU">"DevOps Explained in 10 Minutes"</a> for a
    video introduction.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      "What does 'DevOps' actually mean, in plain terms, and how is it different from just
      testing before release?"
    </li>
    <li>
      "What's a canary release, and how would testing fit alongside one instead of being replaced
      by it?"
    </li>
    <li>
      "How do mature teams decide which safety net — pre-release testing or a DevOps practice
      like feature flags — should catch a given kind of failure?"
    </li>
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/what-are-flow-metrics-for-automatic-testing/"
      >Next: what are flow metrics for automatic testing? →</CallToAction
    >
  </p>
</section>
