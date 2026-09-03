<script lang="ts">
  import { SectionHeading } from 'lily-design-system-svelte-headless';
  import { REPO } from '$lib/site';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const aiStatementUrl = `${REPO}/blob/main/AI_STATEMENT.md`;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Not sure what to learn first? Three things worth learning before you go much further with browser automation: a testing tool, a programming language, and an AI agent helper — plus an example prompt for each."
  />
</svelte:head>

<div class="page-header">
  <h1>Checklist</h1>
  <p>
    Not sure what to learn first? Here are three things worth learning before you go much further
    with browser automation — a testing tool, a programming language, and an AI agent helper —
    each with a few honest options and a concrete prompt you can hand to an AI assistant if you'd
    like a starting point.
  </p>
</div>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Learn about an automatic testing tool" level={2} />

  <p>
    All three drive a real browser to click, type, and read a page the way a person would — they
    differ mainly in which languages they support, how much test-framework structure comes built
    in, and how much waiting-for-the-page-to-be-ready they handle for you automatically.
  </p>
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

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>New to browser automation:</strong>
      "I've never automated a browser before. In plain terms, what do Selenium, WebdriverIO,
      and Playwright each actually do, and which one is easiest to get running today?"
    </li>
    <li>
      <strong>Written a script or two:</strong>
      "I want to test a login form with a 2FA step — which of Selenium, WebdriverIO, or
      Playwright handles that most simply, and what would a first script look like?"
    </li>
    <li>
      <strong>Using this site's demos:</strong>
      "Here's <code>testingexamples.github.io</code>'s home page — it has elements with known
      ids, names, classes, and link text under headings like Id Examples and Form Input
      Examples. Can you help me write a Playwright script that finds one element by each of
      those five strategies?"
    </li>
  </ul>
</section>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Learn about a programming language" level={2} />

  <p>
    Either of these two can drive any of the testing tools above — the right one is usually
    whichever you're already a little comfortable with, or whichever this site's own demos already
    show you a working example in.
  </p>
  <p>
    <strong>JavaScript</strong> is the language every browser runs natively, which gives it a huge
    ecosystem and means there's almost always an example to learn from. This site's JavaScript demos
    (Selenium, WebdriverIO, and Playwright) all run on it. For testing specifically, this is also
    why every browser-automation tool gets its newest features in JavaScript first — it's each
    tool's home ecosystem, not a port.
  </p>
  <p>
    <strong>Python</strong> has famously readable syntax and a huge standard library, and it's both a
    very common first programming language and a very common choice for testing, automation, and
    data work specifically. This site's Python demos use it. For testing specifically, pytest's
    fixture system — used by this site's own NHS Wales pytest demos — makes setting up and tearing
    down a browser session for each test explicit and reusable, rather than copy-pasted at the top
    of every test.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>New to programming:</strong>
      "I've never written a line of code before. Could you explain, in plain terms, what
      JavaScript and Python are each generally used for, and recommend one to start with?"
    </li>
    <li>
      <strong>Know a bit already:</strong>
      "I already know JavaScript a little — what are the biggest differences I'd hit learning
      Python, and what's a small real project to try first?"
    </li>
    <li>
      <strong>Using this site's demos:</strong>
      "Here's <code>src/demo.js</code> from testingexamples.github.io's
      <a href="https://github.com/testingexamples/demo-playwright-javascript"
        >demo-playwright-javascript</a
      > repo — can you help me rewrite it in Python so I can compare the two side by side?"
    </li>
  </ul>
</section>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Learn about an AI agent helper" level={2} />

  <p>
    None of these write your tests for you unsupervised — each is a tool that can draft, explain,
    or review code faster than doing it alone, with a human still checking what it actually
    produced.
  </p>
  <p>
    <strong>Google Gemini</strong> is integrated into Google products, such as Google Cloud,
    Drive, Android, etc. For testing, Gemini is especially good for turning work that is already
    living in a Google Workspace or Google Antigravity into a first draft of a script. Gemini
    offers strong creative storytelling and image generation.
  </p>
  <p>
    <strong>Microsoft Copilot</strong> is integrated into Microsoft products, such as Microsoft
    Azure, Office, GitHub, etc. For testing, Copilot is especially good for turning work that
    involves workplace productivity, strict daily tasks inside business applications, and
    reader-ready professional summaries.
  </p>
  <p>
    Each is a general-purpose AI assistant from a major vendor, integrated differently into that
    vendor's own ecosystem — which one fits best often comes down to which ecosystem you're already
    working in.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>New to AI assistants:</strong>
      "I don't really understand what an 'AI agent' or 'AI coding assistant' actually does —
      can you explain it simply, in plain terms, and how it's different from just asking a
      chatbot a question?"
    </li>
    <li>
      <strong>Used one a little:</strong>
      "I've used an AI assistant to autocomplete a few lines of code before. How could I use
      one to help plan out and write a whole small test script from scratch?"
    </li>
    <li>
      <strong>Using this site's demos:</strong>
      "Here's <a href={aiStatementUrl}>AI_STATEMENT.md</a> from testingexamples.github.io — could
      you help me write something similar for my own project, disclosing how AI was used and
      what a human still checked?"
    </li>
  </ul>
</section>
