<script lang="ts">
  import { SectionHeading } from 'lily-design-system-svelte-headless';
  import SiteFixtures from '$lib/components/SiteFixtures.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Free open source HTML fixtures for practicing browser automation: find elements by id, name, class, link text, and XPath, and interact with form inputs."
  />
</svelte:head>

<div class="page-header">
  <h1>Welcome to Testing Examples</h1>
</div>

<section class="section prose">
  <p>
    If you're new to browser automation, you're in the right place. Testing Examples is a small,
    free, open source site built for anyone learning to make a browser do things automatically —
    click, type, search, wait, assert — whether you've never written a line of code or you already
    know the ropes and just want a quick reference or somewhere reliable to try something out.
  </p>

  <h3>Learn</h3>
  <ul class="repo-list">
    <li><a href="/what-is-automatic-testing/">What is automatic testing?</a></li>
    <li><a href="/what-is-the-purpose-of-automatic-testing/">What is the purpose of automatic testing?</a></li>
    <li><a href="/what-is-the-testing-pyramid/">What is the automatic testing pyramid?</a></li>
    <li><a href="/what-is-browser-automation-testing/">What is browser automatic testing?</a></li>
    <li><a href="/how-to-start-learning-automatic-testing/">How to start learning automatic testing?</a></li>
  </ul>

  <h3>Learn More</h3>
  <ul class="repo-list">
    <li><a href="/what-are-related-concepts-for-automatic-testing/">What are related concepts for automatic testing?</a></li>
    <li><a href="/how-does-artificial-intelligence-help-automatic-testing/">How does artificial intelligence help automatic testing?</a></li>
    <li><a href="/what-is-continuous-integration-testing/">What is continuous integration automatic testing?</a></li>
    <li><a href="/what-is-devops-for-automatic-testing/">What is DevOps for automatic testing?</a></li>
    <li><a href="/what-are-flow-metrics-for-automatic-testing/">What metrics help automatic testing?</a></li>
    <li><a href="/what-is-lean-six-sigma-for-automatic-testing/">How does Six Sigma lead manual testing into automatic testing?</a></li>
  </ul>

  <h3>Examples</h3>
  <ul class="repo-list">
    <li><a href="/examples/google-search/">Google Search Examples</a></li>
    <li><a href="/examples/google-maps/">Google Maps Examples</a></li>
    <li><a href="/given-when-then/">Given-When-Then Examples</a></li>
    <li><a href="/app/">Demo App</a> — sign in, nav icons, search, and tabs to practice on</li>
  </ul>
</section>

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    heading="Practice on this page"
    level={2}
  />
  <p>
    Everything below is a stable fixture playground: fixed ids, names, classes, and text that
    automation tools can reliably find every time, which is exactly what makes it useful to
    practice on directly — point your script at it, find an element, interact with it, and see
    what happens. The exact contract this page keeps is documented in this repo's
    <code>spec/index.md</code>.
  </p>
</section>

<hr />

<SiteFixtures />

<style>
  /* Override the shared .repo-list rule (static/assets/style.css) for this
     page only: bullet points instead of the border-bottom line separator
     between items. Scoped to this component, so /about/, /app/, and
     /how-to-start-learning-automatic-testing/ keep the line-separator style. */
  .repo-list {
    list-style: disc;
    padding-left: 1.5rem;
  }
  .repo-list li {
    padding: 0.2rem 0;
    border-bottom: none;
  }
</style>
