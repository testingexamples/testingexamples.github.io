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
  import {
    REPO,
    LICENSE,
    GENERIC_DEMO_REPOS,
    NHS_WALES_DEMO_REPOS,
    DEMO_MATRIX,
    DEMO_MATRIX_COUNT,
    demoRepoUrl
  } from '$lib/site';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const TARGET_COLUMNS = [
    { key: 'generic', label: 'This site' },
    { key: 'googleSearch', label: 'Google Search' },
    { key: 'googleMaps', label: 'Google Maps' },
    { key: 'nhsWales', label: 'NHS Wales' }
  ] as const;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="About Testing Examples: what it is, the {DEMO_MATRIX_COUNT} sibling demo repos it supports, and how this site is built."
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
    heading="{DEMO_MATRIX_COUNT} demo repos, three tools times up to four languages times up to four targets"
    level={2}
  />

  <p>
    Every sibling repo pairs one browser-automation tool (Selenium, WebdriverIO,
    or Playwright) with one language (JavaScript, Python, Rust, or TypeScript)
    against one target. Two targets are real, runnable demos: <em>this site's</em>
    own fixture page (five of these repos — the ones whose exact ids, names,
    classes, and text this site's <code>AGENTS.md</code> and
    <code>spec/index.md</code> treat as a contract) and the real, public
    <a href="https://www.nhs.wales/">nhs.wales</a> government site. The other
    two targets, Google Search and Google Maps, are illustrative only — each
    such repo's own <code>AGENTS.md</code> states plainly that its code must
    never be executed against the live site, since Google's Terms of Service
    restrict automated querying; see
    <a href="/examples/google-search/">Google Search examples</a> and
    <a href="/examples/google-maps/">Google Maps examples</a> for the same
    pattern shown directly on this site. Two cells are empty on purpose —
    Selenium TypeScript and WebdriverIO TypeScript have no NHS Wales variant.
  </p>

  <div class="table-scroll">
    <table class="demo-matrix">
      <caption class="screen-reader-span">
        The complete demo repo family, one row per tool and language, one column per target
      </caption>
      <thead>
        <tr>
          <th scope="col">Tool</th>
          <th scope="col">Language</th>
          {#each TARGET_COLUMNS as column (column.key)}
            <th scope="col">{column.label}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each DEMO_MATRIX as family (family.tool + family.language)}
          <tr>
            <th scope="row">{family.tool}</th>
            <td>{family.language}</td>
            {#each TARGET_COLUMNS as column (column.key)}
              {@const entry = family[column.key]}
              <td>
                {#if entry}
                  <a
                    href={demoRepoUrl(entry)}
                    aria-label="{family.tool} {family.language} for {column.label}"
                    >{entry.org}/<wbr /><code>{entry.name}</code></a
                  >
                {:else}
                  <span aria-hidden="true">—</span>
                  <span class="screen-reader-span">Not built for this language</span>
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <p>
    The five fixture-contract repos and one worked NHS Wales example — this
    site's original core, before the family grew to its current size — are
    listed again below with a sentence each, since they're the ones this
    site's own <a href="/learn/getting-started/">Getting Started</a> guide
    and <a href="/learn/artificial-intelligence/">Artificial Intelligence</a>
    page point to directly.
  </p>

  <h3>Locator-strategy walkthroughs (target this site)</h3>
  <ul class="repo-list">
    {#each GENERIC_DEMO_REPOS as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}
      </li>
    {/each}
  </ul>

  <h3>A worked real-world example (targets nhs.wales)</h3>
  <ul class="repo-list">
    {#each NHS_WALES_DEMO_REPOS.slice(0, 1) as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}. The
        other five NHS Wales repos follow the same pattern in the table above.
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
      <a href="https://lilydesignsystem.com/">Lily Design System</a> — Svelte
      components that render semantic HTML and correct ARIA, carrying one
      stable class hook each. This site uses Lily's own official themes too:
      all 45 files under <code>static/assets/themes/</code>, copied verbatim
      from Lily's repository, each a complete, self-contained stylesheet
      styling every one of Lily's ~492 components — not just two hand-picked
      colours. <code>static/assets/style.css</code> therefore no longer
      styles Lily's own component hooks at all; it holds a small alias layer,
      this site's own header/nav/footer layout (not Lily components), and a
      handful of explicitly documented exceptions where a Lily default
      didn't suit this site's specific layout — see that file's own header
      comment for exactly what and why. Lily's <code>ThemePicker</code>
      swaps between the 45 themes live.
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
