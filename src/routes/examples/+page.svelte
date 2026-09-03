<script lang="ts">
  import { SectionHeading, SummaryList, SummaryListItem, InformationCallout } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Real-world browser automation examples: the same handful of interactions, implemented nine ways across Selenium, WebdriverIO, and Playwright in JavaScript, Python, and Rust."
  />
</svelte:head>

<div class="page-header">
  <h1>Examples</h1>
  <p>
    This section shows the same handful of real-world interactions — browsing, searching, clicking,
    scrolling — implemented nine ways: three tools (Selenium, WebdriverIO, Playwright) times three
    languages (JavaScript, Python, Rust), against two well-known real sites.
  </p>
</div>

<section class="section prose">
  <SectionHeading class="section-heading-start" eyebrow="Two example pages" heading="Google Search and Google Maps" level={2} />

  <SummaryList label="Example pages">
    <SummaryListItem term="Google Search">
      <a href="/examples/google-search/">Google Search examples</a> — searching, reading results,
      and following a link, the same walkthrough written nine ways.
    </SummaryListItem>
    <SummaryListItem term="Google Maps">
      <a href="/examples/google-maps/">Google Maps examples</a> — browsing a map, searching for a
      place, and interacting with the page, the same walkthrough written nine ways.
    </SummaryListItem>
  </SummaryList>

  <InformationCallout label="Read, don't repeatedly run">
    <p>
      Google's Terms of Service restrict automated querying of its services. These examples exist to
      teach the syntax and patterns of each testing tool — treat them as reading material, not
      scripts to run repeatedly against the live google.com or Google Maps. Each example page
      elaborates on this further.
    </p>
  </InformationCallout>
</section>
