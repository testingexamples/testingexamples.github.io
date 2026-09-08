<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="What Lean Six Sigma is, and why a flaky test is literally 'variation' in Six Sigma terms — worth root-causing rather than just re-running until it goes green."
  />
</svelte:head>

<div class="page-header">
  <h1>What is Lean Six Sigma for automatic testing?</h1>
  <p>
    <strong>Lean Six Sigma</strong> combines Lean (eliminate waste) with Six Sigma (reduce defects
    and variation through statistical process control). It started in manufacturing and now gets
    applied to any repeatable process — software delivery included.
  </p>
</div>

<section class="section prose">
  <p>
    Here's why that belongs on a testing page: a flaky test is, literally, variation in Six Sigma
    terms — the same input doesn't reliably produce the same output — and treating that as a
    defect worth root-causing, rather than a nuisance to re-run until it goes green, is a direct
    application of the mindset. Lean's "eliminate waste" lens is useful too: five different tests
    all asserting the same thing five different ways costs real CI time without adding any real
    protection.
  </p>

  <p>
    Learn more at iSixSigma's
    <a href="https://www.isixsigma.com/new-to-six-sigma/getting-started/">getting-started guide</a>, or
    watch Simplilearn's
    <a href="https://www.youtube.com/watch?v=s2HCrhNVfak">"Lean Six Sigma In 8 Minutes"</a> for a video
    introduction.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "What does 'Lean Six Sigma' actually mean, in plain terms, and why would that idea apply to
      software testing at all?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "How would I apply Six Sigma's idea of 'root-causing variation' to one specific flaky test,
      instead of just re-running it until it passes?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "How do I use Lean's 'eliminate waste' idea to identify redundant tests in a large, slow
      test suite?"
    </li>
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/what-is-continuous-integration-testing/"
      >Next: what is continuous integration automatic testing? →</CallToAction
    >
  </p>
</section>
