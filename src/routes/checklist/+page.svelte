<script lang="ts">
  import { SectionHeading } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
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
    Both drive a real browser to click, type, and read a page the way a person would — they
    differ mainly in which languages they support, how much test-framework structure comes built
    in, and how much waiting-for-the-page-to-be-ready they handle for you automatically.
  </p>
  <p>
    <strong>Selenium</strong> is the longest-established of the two: browser automation via the
    W3C WebDriver protocol, with the widest cross-language support of any tool here. This site's
    demos use it in four languages.
  </p>
  <p>
    <strong>Playwright</strong> is Microsoft's newer tool, with auto-waiting built in so tests flake
    less often, and official bindings in JavaScript, Python, .NET, and Java. This site's demos cover
    it in four languages, including a community Rust binding.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "I've never automated a browser before. In plain terms, what do Selenium and Playwright
      each actually do, and which one is easiest to get running today?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "I want to test a login form with a 2FA step — which of Selenium or Playwright handles
      that most simply, and what would a first script look like?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "I need my test suite to run in parallel across multiple browsers, retry only genuinely
      flaky failures, and fail fast on the rest — how would I set that up with Selenium's or
      Playwright's own tooling, without a lot of custom infrastructure?"
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
    (Selenium and Playwright) all run on it. For testing specifically, this is also
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
      <strong>Novice:</strong>
      "I've never written a line of code before. Could you explain, in plain terms, what
      JavaScript and Python are each generally used for, and recommend one to start with?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "I already know JavaScript a little — what are the biggest differences I'd hit learning
      Python, and what's a small real project to try first?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "My JavaScript test suite has grown slow and hard to maintain — what are the concrete
      signs it's time to introduce type-checking or restructure it, and how would I do that
      incrementally instead of rewriting it all at once?"
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
      <strong>Novice:</strong>
      "I don't really understand what an 'AI agent' or 'AI coding assistant' actually does —
      can you explain it simply, in plain terms, and how it's different from just asking a
      chatbot a question?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "I've used an AI assistant to autocomplete a few lines of code before. How could I use
      one to help plan out and write a whole small test script from scratch?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "I want an AI assistant to review a batch of pull requests for missing or weak test
      coverage before a human reviewer looks at them — what's a reliable way to set that up,
      and what should a human still double-check afterward?"
    </li>
  </ul>
</section>
