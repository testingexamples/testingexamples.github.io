<script lang="ts">
  import { SectionHeading, Separator, InformationCallout, CallToAction } from 'lily-design-system-svelte-headless';
  import { GENERIC_DEMO_REPOS, NHS_WALES_DEMO_REPOS } from '$lib/site';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="A practical, step-by-step path for learning browser automation testing: pick a language, pick a tool, run your first script, learn the four core concepts, then practice on real examples."
  />
</svelte:head>

<div class="page-header">
  <h1>How to Start Learning Automatic Testing</h1>
  <p>
    A practical path, not a theory dump. Six steps from "never written a browser test" to reading
    worked examples in three tools and three languages.
  </p>
</div>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Pick one language you already know a little of" level={2} />

  <p>
    Learning browser automation means learning a new tool <em>and</em> a testing mindset at the same
    time — don't also try to learn a brand-new programming language in the same sitting. Pick
    whichever of these you're already somewhat comfortable with:
  </p>
  <ul>
    <li><strong>JavaScript</strong> — the most common language for web testing; if you've written any web front-end code, start here.</li>
    <li><strong>Python</strong> — clean, readable syntax; a popular second choice, especially outside web-development teams.</li>
    <li><strong>Rust</strong> — less common for testing, but a legitimate option if it's already your language of choice.</li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Pick one browser automation tool to start" level={2} />

  <p>Start with exactly one of these — you can learn the others later once the core ideas click:</p>
  <ul>
    <li>
      <strong><a href="https://playwright.dev/">Playwright</a></strong> — the friendliest choice for
      beginners today. Good documentation, built-in auto-waiting (see step 4), works the same way
      across Chromium, Firefox, and WebKit, with official bindings in JavaScript, Python, and more.
    </li>
    <li>
      <strong><a href="https://www.selenium.dev/">Selenium</a></strong> — the most established and
      most widely taught browser automation tool, with the largest ecosystem and the most existing
      tutorials, courses, and Stack Overflow answers.
    </li>
    <li>
      <strong><a href="https://webdriver.io/">WebdriverIO</a></strong> — a strong choice if you're
      already working in the Node.js / Mocha ecosystem, with a test-runner-first design.
    </li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Install it and run one script against this site" level={2} />

  <p>
    Follow your chosen tool's own "getting started" guide to install it, then point your very first
    script at <a href="/">this site's own home page</a>. This site was built for exactly that: every
    element on the home page has a stable id, name, class, or link text you can practice finding —
    no guesswork about whether the markup will change under you.
  </p>
  <p>
    A reasonable first script: open the home page, find the element with id
    <code>id-example-1</code>, and print or assert its text. Then try finding an element by name,
    by class, and by link text. Small, deliberate wins first.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Learn the four core concepts" level={2} />

  <ul>
    <li>
      <strong>Locating elements.</strong> Finding the thing you want to interact with — by id, name,
      class, visible text, a CSS selector, or an XPath expression. Every browser automation tool
      offers all of these; picking the most stable one for a given element is half the skill.
    </li>
    <li>
      <strong>Performing actions.</strong> Once you've located an element, doing something to it:
      clicking a button, typing into a text field, selecting an option, checking a checkbox.
    </li>
    <li>
      <strong>Waiting.</strong> Real pages take time to load and update — a naive script that acts
      the instant it starts will "flake" (fail intermittently) because the element it wants isn't
      there yet. Modern tools like Playwright and WebdriverIO auto-wait for an element to be ready
      before acting on it, which is a big part of why they're friendlier to learn with than older,
      manually-waited approaches.
    </li>
    <li>
      <strong>Asserting.</strong> Checking that the page actually did what you expected — not just
      finding an element and printing what it found, but comparing the result against a known-correct
      value and failing loudly if it doesn't match. This is the difference between a walkthrough
      script (useful for learning, but silent about problems) and a real test (one that fails and
      tells you exactly what went wrong).
    </li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Practice on real, deliberately-friendly examples" level={2} />

  <p>
    Once the basics click, read other people's working code line by line. This project's sibling
    repos are worked examples built for exactly that:
  </p>

  <h3>Locator-strategy walkthroughs (target this site)</h3>
  <ul class="repo-list">
    {#each GENERIC_DEMO_REPOS as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}
      </li>
    {/each}
  </ul>

  <h3>Real-world demos with real assertions (target nhs.wales)</h3>
  <p>
    These show the same patterns applied against a real government website — nhs.wales — with real
    pass/fail assertions rather than a walkthrough that only logs what it found.
  </p>
  <ul class="repo-list">
    {#each NHS_WALES_DEMO_REPOS as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}
      </li>
    {/each}
  </ul>

  <p>
    Then read this site's own worked examples, which tour the same handful of interactions across
    three tools and three languages, including Rust:
  </p>
  <ul>
    <li><a href="/examples/google-search/">Google Search examples</a></li>
    <li><a href="/examples/google-maps/">Google Maps examples</a></li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="A note on real third-party sites" level={2} />

  <InformationCallout label="Read, don't repeatedly run">
    <p>
      Automating a real third-party site like Google is a step up in difficulty from automating this
      site: their markup isn't a stable public contract the way this site's fixture page is, and
      their Terms of Service restrict automated querying of their services. Treat
      <a href="/examples/google-search/">/examples/google-search/</a> and
      <a href="/examples/google-maps/">/examples/google-maps/</a> as reading material for the
      <em>patterns</em> — not as scripts to run repeatedly against the live sites.
    </p>
  </InformationCallout>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/examples/google-search/"
      >See the Google Search examples →</CallToAction
    >
    <CallToAction class="button button-secondary" href="/examples/google-maps/" style="margin-left: 0.75rem;"
      >See the Google Maps examples →</CallToAction
    >
  </p>
</section>
