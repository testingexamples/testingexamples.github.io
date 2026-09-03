<script lang="ts">
  import { SectionHeading, SummaryList, SummaryListItem } from 'lily-design-system-svelte-headless';
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
    Four short articles: what automatic testing is and why it matters, a practical path for
    getting hands-on with browser automation yourself, the everyday tools and practices that
    surround it, and where AI fits into all of that today — plus a checklist if you're not sure
    what to learn first.
  </p>
</div>

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Start here"
    heading="Four articles, and a checklist"
    level={2}
  />

  <SummaryList label="Learn articles">
    <SummaryListItem term="What is automatic testing?">
      <a href="/learn/what-is-automatic-testing/">What Is Automatic Testing?</a> — what automated
      testing is, why it matters, and where browser automation fits in the testing pyramid.
    </SummaryListItem>
    <SummaryListItem term="How do I start?">
      <a href="/learn/getting-started/">How to Start Learning Automatic Testing</a> — a step-by-step
      path: pick a language, pick a tool, run your first script against this site, then practice on
      real worked examples.
    </SummaryListItem>
    <SummaryListItem term="What surrounds it?">
      <a href="/learn/related-concepts/">Related Concepts</a> — friendly introductions to code
      editors, version control (git and GitHub), CI/CD, and agile discovery.
    </SummaryListItem>
    <SummaryListItem term="Where does AI fit in?">
      <a href="/learn/artificial-intelligence/">Artificial Intelligence and Testing</a> — how and
      why AI shows up in writing tests, CI/CD, and agile discovery today, and the one caveat that
      applies to all three.
    </SummaryListItem>
    <SummaryListItem term="Not sure what to learn first?">
      <a href="/checklist/">Checklist</a> — a short checklist of what's worth learning first: a
      programming language, a testing tool, and an AI agent helper, each with an example prompt to
      ask an AI assistant.
    </SummaryListItem>
  </SummaryList>
</section>
