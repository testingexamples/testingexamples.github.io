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
  <SectionHeading class="section-heading-start" heading="Learn about a programming language" level={2} />

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
    <p><strong>For ideas ask AI: </strong></p>
    <ul>
      <li>
        <strong>New to programming:</strong>
        <em
          >"I've never written a line of code before. Could you explain, in plain terms, what
          JavaScript, TypeScript, Python, and Rust are each generally used for, and recommend one
          to start with?"</em
        >
      </li>
      <li>
        <strong>Know a bit already:</strong>
        <em
          >"I already know JavaScript a little — what are the biggest differences I'd hit learning
          Rust, and what's a small real project to try first?"</em
        >
      </li>
      <li>
        <strong>Using this site's demos:</strong>
        <em
          >"Here's <code>src/demo.js</code> from testingexamples.github.io's
          <a href="https://github.com/testingexamples/demo-playwright-javascript"
            >demo-playwright-javascript</a
          > repo — can you help me rewrite it in Python so I can compare the two side by
          side?"</em
        >
      </li>
    </ul>
  </InformationCallout>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Learn about an automatic testing tool" level={2} />

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
    <p><strong>For ideas ask AI: </strong></p>
    <ul>
      <li>
        <strong>New to browser automation:</strong>
        <em
          >"I've never automated a browser before. In plain terms, what do Selenium, WebdriverIO,
          and Playwright each actually do, and which one is easiest to get running today?"</em
        >
      </li>
      <li>
        <strong>Written a script or two:</strong>
        <em
          >"I want to test a login form with a 2FA step — which of Selenium, WebdriverIO, or
          Playwright handles that most simply, and what would a first script look like?"</em
        >
      </li>
      <li>
        <strong>Using this site's demos:</strong>
        <em
          >"Here's <code>testingexamples.github.io</code>'s home page — it has elements with known
          ids, names, classes, and link text under headings like Id Examples and Form Input
          Examples. Can you help me write a Playwright script that finds one element by each of
          those five strategies?"</em
        >
      </li>
    </ul>
  </InformationCallout>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Learn about an AI agent helper" level={2} />

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
    <p><strong>For ideas ask AI: </strong></p>
    <ul>
      <li>
        <strong>New to AI assistants:</strong>
        <em
          >"I don't really understand what an 'AI agent' or 'AI coding assistant' actually does —
          can you explain it simply, in plain terms, and how it's different from just asking a
          chatbot a question?"</em
        >
      </li>
      <li>
        <strong>Used one a little:</strong>
        <em
          >"I've used an AI assistant to autocomplete a few lines of code before. How could I use
          one to help plan out and write a whole small test script from scratch?"</em
        >
      </li>
      <li>
        <strong>Using this site's demos:</strong>
        <em
          >"Here's <a href={aiStatementUrl}>AI_STATEMENT.md</a> from testingexamples.github.io — could
          you help me write something similar for my own project, disclosing how AI was used and
          what a human still checked?"</em
        >
      </li>
    </ul>
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
