<script lang="ts">
  import { SectionHeading, InformationCallout, Separator, CallToAction } from 'lily-design-system-svelte-headless';
  import { REPO } from '$lib/site';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const aiStatementUrl = `${REPO}/blob/main/AI_STATEMENT.md`;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Not sure what to learn first? Three things worth learning before you go much further with browser automation: a programming language, a testing tool, and an AI agent helper — plus an example prompt for each."
  />
</svelte:head>

<div class="page-header">
  <h1>Checklist</h1>
  <p>
    Not sure what to learn first? Here are three things worth learning before you go much further
    with browser automation — a programming language, a testing tool, and an AI agent helper —
    each with a few honest options and a concrete prompt you can hand to an AI assistant if you'd
    like a starting point.
  </p>
</div>

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="1. Language"
    heading="Learn about a programming language"
    level={2}
  />

  <p>
    <strong>JavaScript</strong> is the language every browser runs natively, which gives it a huge
    ecosystem and means there's almost always an example to learn from. This site's JavaScript demos
    (Selenium, WebdriverIO, and Playwright) all run on it.
  </p>
  <p>
    <strong>TypeScript</strong> is JavaScript with types checked before you run it — it catches a
    whole class of mistakes (a typo'd property, a function called with the wrong shape of argument)
    at write time instead of at test time. This site's TypeScript demo uses it.
  </p>
  <p>
    <strong>Python</strong> has famously readable syntax and a huge standard library, and it's both a
    very common first programming language and a very common choice for testing, automation, and
    data work specifically. This site's Python demos use it.
  </p>
  <p>
    <strong>Rust</strong> is compiled and has no garbage collector, and its compiler catches whole
    categories of bugs — data races, null dereferences — before the program ever runs. That comes
    with a steeper learning curve, and this site's own Rust demos are honest that the ecosystem for
    browser automation is younger here than in the other three languages above.
  </p>

  <InformationCallout label="For ideas, ask AI">
    <p>
      <strong>For ideas ask AI: </strong>
      <em
        >"I already know JavaScript — what are the biggest differences I'd hit learning Rust, and
        what's a small real project to try first?"</em
      >
    </p>
  </InformationCallout>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="2. Tool"
    heading="Learn about an automatic testing tool"
    level={2}
  />

  <p>
    <strong>Selenium</strong> is the longest-established of the three: browser automation via the
    W3C WebDriver protocol, with the widest cross-language support of any tool here. This site's
    demos use it in four languages.
  </p>
  <p>
    <strong>WebdriverIO</strong> is a JavaScript/Node.js framework built on the WebDriver protocol,
    with a real test runner and assertions baked in rather than left for you to wire up yourself.
    See this site's WebdriverIO demos.
  </p>
  <p>
    <strong>Playwright</strong> is Microsoft's newer tool, with auto-waiting built in so tests flake
    less often, and official bindings in JavaScript, Python, .NET, and Java. This site's demos cover
    it in four languages, including a community Rust binding.
  </p>

  <InformationCallout label="For ideas, ask AI">
    <p>
      <strong>For ideas ask AI: </strong>
      <em
        >"I want to test a login form with a 2FA step — which of Selenium, WebdriverIO, or
        Playwright handles that most simply, and what would a first script look like?"</em
      >
    </p>
  </InformationCallout>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="3. AI helper"
    heading="Learn about an AI agent helper"
    level={2}
  />

  <p>
    <strong>Anthropic Claude</strong> is what this whole site was built with — see
    <a href={aiStatementUrl}><code>AI_STATEMENT.md</code></a> for the honest account of how, under a
    human maintainer's direction.
  </p>
  <p>
    <strong>Google Gemini</strong> is Google's general-purpose AI assistant, integrated into Google's
    own products and Workspace.
  </p>
  <p>
    <strong>Microsoft Copilot</strong> is Microsoft's general-purpose AI assistant, integrated into
    Microsoft's own products and into GitHub.
  </p>
  <p>
    Each is a general-purpose AI assistant from a major vendor, integrated differently into that
    vendor's own ecosystem — which one fits best often comes down to which ecosystem you're already
    working in.
  </p>

  <InformationCallout label="For ideas, ask AI">
    <p>
      <strong>For ideas ask AI: </strong>
      <em
        >"Here's a repetitive part of my testing workflow: writing a new Playwright test for every
        similar form on our site — could an AI assistant help draft, review, or maintain this, and
        what would I still need to check myself?"</em
      >
    </p>
  </InformationCallout>

  <p>
    See <a href="/learn/artificial-intelligence/">Artificial Intelligence and Testing</a> for the
    honest caveat that applies here too: read what a test actually asserts before trusting that it
    passes, rather than trusting AI output blindly.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/learn/">Back to Learn</CallToAction>
    <CallToAction class="button button-secondary" href="/" style="margin-left: 0.75rem;"
      >Practice on the home page →</CallToAction
    >
  </p>
</section>
