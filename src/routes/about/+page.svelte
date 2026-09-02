<script lang="ts">
  import {
    SectionHeading,
    SummaryList,
    SummaryListItem,
    Separator,
    InformationCallout,
    CallToAction,
    CodeBlock
  } from 'lily-design-system-svelte-headless';
  import { REPO, LICENSE, GENERIC_DEMO_REPOS, NHS_WALES_DEMO_REPOS } from '$lib/site';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="About Testing Examples: what it is, the eleven sibling demo repos it supports, and how this site is built."
  />
</svelte:head>

<div class="page-header">
  <h1>About</h1>
  <p>Testing Examples provides free open source testing examples for browser automation.</p>
</div>

<section class="section prose">
  <SectionHeading class="section-heading-start" eyebrow="The project" heading="What this site is for" level={2} />

  <p>
    This home page is a deliberately plain page of HTML fixtures — elements with
    known ids, names, classes, link text, lists, and form inputs — for anyone
    learning or exercising browser automation tools such as Selenium WebDriver,
    WebdriverIO, or Playwright. It is meant to be a stable target: the same
    markup, the same identifiers, the same visible text, every time.
  </p>

  <SummaryList label="Project facts">
    <SummaryListItem term="Name"><code>Testing Examples</code></SummaryListItem>
    <SummaryListItem term="Licence">{LICENSE}</SummaryListItem>
    <SummaryListItem term="Author">Joel Parker Henderson</SummaryListItem>
    <SummaryListItem term="Repository"><a href={REPO}>{REPO}</a></SummaryListItem>
    <SummaryListItem term="Fixture contract"
      ><code>spec/index.md</code> in the repository</SummaryListItem
    >
  </SummaryList>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Sibling repos"
    heading="Eleven demo repos target this site (or a real NHS Wales site)"
    level={2}
  />

  <p>
    Five sibling repos are generic, beginner-friendly walkthroughs of locator
    strategies — finding elements by id, name, class, link text, and XPath —
    that drive a real browser against <em>this</em> site's home page. Its
    fixture markup is a contract these five repos depend on directly; see
    <code>AGENTS.md</code> and <code>spec/index.md</code> in this repository
    for the details.
  </p>

  <h3>Locator-strategy walkthroughs (target this site)</h3>
  <ul class="repo-list">
    {#each GENERIC_DEMO_REPOS as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}
      </li>
    {/each}
  </ul>

  <p>
    Six further sibling repos are real-world demos of the same automation
    tools, driven instead against a public, real site,
    <a href="https://www.nhs.wales/">nhs.wales</a>. They do not depend on this
    site's fixture markup at all.
  </p>

  <h3>Real-world demos (target nhs.wales)</h3>
  <ul class="repo-list">
    {#each NHS_WALES_DEMO_REPOS as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}
      </li>
    {/each}
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" eyebrow="This site" heading="How the site is built" level={2} />

  <p>
    This site is a <a href="https://kit.svelte.dev/">SvelteKit</a> project using
    <code>@sveltejs/adapter-static</code>, prerendered to plain HTML and deployed
    to GitHub Pages by GitHub Actions on every push to <code>main</code>.
  </p>

  <InformationCallout label="Design system">
    <p>
      The components come from the
      <a href="https://lilydesignsystem.com/">Lily Design System</a> — headless
      Svelte components that render semantic HTML and correct ARIA, carrying one
      stable class hook each and shipping no CSS at all. Every visual decision on
      this site therefore lives in <code>static/assets/style.css</code>, which
      targets those hooks, plus one colour value per theme in
      <code>static/assets/themes/</code> — light and dark, swapped live by Lily's
      <code>ThemePicker</code>. Replace those files and the markup is unchanged.
    </p>
  </InformationCallout>

  <p>
    The one exception is the home page's fixture section (Id Examples through
    Form Input Examples): those elements are kept as plain HTML, not Lily
    components, so their ids, names, classes, and text stay exactly what the
    sibling demo repos expect.
  </p>

  <CodeBlock label="Run this site locally">
    <pre><code>{`git clone ${REPO}
cd testingexamples.github.io
pnpm install
pnpm dev`}</code></pre>
  </CodeBlock>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href={REPO}>The repository on GitHub</CallToAction>
  </p>
</section>
