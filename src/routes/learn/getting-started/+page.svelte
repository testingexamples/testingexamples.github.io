<script lang="ts">
  import { SectionHeading, Separator, InformationCallout, CallToAction } from 'lily-design-system-svelte-headless';
  import { GETTING_STARTED_DEMO_REPOS } from '$lib/site';
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
    worked examples in two tools and three languages.
  </p>
</div>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Pick one programming language" level={2} />

  <p>
    A programming language is just a precise way of writing down instructions for a computer to
    follow — a bit like a recipe, except the computer will only do exactly what you wrote, not what
    you meant, so the wording has to be exact. It's necessary for test automation because a browser
    automation tool isn't a standalone app you click around in — it's a library you call from inside
    a programming language, using that language's own ordinary building blocks (variables, loops,
    if-statements) to say things like "open this page," "click this button," "check that this text
    appeared." Learning browser automation already means learning a new tool <em>and</em> a testing
    mindset at the same time, so don't also try to learn a brand-new programming language in the same
    sitting — pick whichever of these you're already somewhat comfortable with:
  </p>
  <ul>
    <li><strong>JavaScript</strong> — the most common language for web testing; if you've written any web front-end code, start here.</li>
    <li><strong>Python</strong> — clean, readable syntax; a popular second choice, especially outside web-development teams.</li>
  </ul>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "I've never written a line of code before. Could you explain, in plain terms, what
      JavaScript and Python are each generally used for, and recommend one to start with for
      browser testing?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "I already know a bit of JavaScript — what would I need to learn differently to write a
      browser automation script in it, and what's a good small first exercise?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "I'm already comfortable in one of these languages — what are the real trade-offs of
      switching to the other one specifically for a growing browser-test suite, not just for
      general-purpose programming?"
    </li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Pick one browser automation tool to start" level={2} />

  <p>
    Browser automation means controlling a real web browser with code instead of a mouse and
    keyboard — opening a page, clicking a button, filling in a form, reading back what's on the
    screen, all done programmatically. It's necessary for test automation because it's what makes a
    check repeatable: instead of a person clicking through your site by hand every time something
    changes and hoping they remember every step, a script does the exact same clicks in the exact
    same order every single time, and tells you the moment something doesn't look right. A browser
    automation tool is the library that gives your programming language the vocabulary to do this —
    find an element, act on it, wait for it, check it. Start with exactly one of these — you can
    learn the others later once the core ideas click:
  </p>
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
  </ul>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "I've never automated a browser before. In plain terms, what do Playwright and Selenium
      each actually do, and which one is easiest to get running today?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "I want to automate a multi-step checkout flow with a loading spinner between steps — which
      of Playwright or Selenium handles that kind of waiting most simply?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "I need a test suite that runs reliably in parallel across Chromium, Firefox, and WebKit —
      how do Playwright and Selenium actually differ in how they handle that?"
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

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "I've just installed a browser automation tool for the first time and I'm stuck on an
      installation error — what are the most common first-run problems and how do I fix them?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "My first script found one element fine, but I also want it to click a link and then check
      the resulting page's title — what's a clean way to write that as a second step?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "I want my very first script to also run headless and take a screenshot automatically on
      failure — what's the minimal setup to add both?"
    </li>
  </ul>
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
      there yet. Modern tools like Playwright auto-wait for an element to be ready before acting on
      it, which is a big part of why they're friendlier to learn with than older, manually-waited
      approaches.
    </li>
    <li>
      <strong>Asserting.</strong> Checking that the page actually did what you expected — not just
      finding an element and printing what it found, but comparing the result against a known-correct
      value and failing loudly if it doesn't match. This is the difference between a walkthrough
      script (useful for learning, but silent about problems) and a real test (one that fails and
      tells you exactly what went wrong).
    </li>
  </ul>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "Can you explain, simply, what 'locating', 'acting', 'waiting', and 'asserting' each mean
      in browser testing, with one plain-English example of each?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "My script keeps failing intermittently on the same step — how do I tell whether that's a
      waiting problem or a locator problem, and how would I fix each?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "I want to replace a bunch of fixed <code>sleep()</code> calls in an old test script with
      proper waiting — what's a reliable, general way to do that?"
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
    {#each GETTING_STARTED_DEMO_REPOS as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}
      </li>
    {/each}
  </ul>

  <p>
    Then read this site's own worked examples, which tour the same handful of interactions across
    two tools and three languages, including Rust:
  </p>
  <ul>
    <li><a href="/examples/google-search/">Google Search examples</a></li>
    <li><a href="/examples/google-maps/">Google Maps examples</a></li>
  </ul>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "I've read one of these worked examples line by line but I don't understand what a
      specific line does — what's a good, safe way to ask an AI assistant to explain unfamiliar
      code like that?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "I want to take a worked example written in one language and rewrite it in another to
      practice — what's a good way to check my rewrite is actually equivalent, not just
      similar-looking?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "I want to turn a walkthrough example that only prints what it found into a real test with
      proper assertions — what's a reliable way to decide what's actually worth asserting?"
    </li>
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

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "Why exactly is it riskier to run an automated script against a real live website like
      Google than against a page built for practicing on?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "I want to practice against a real site respectfully — what guardrails, like rate limiting,
      robots.txt, and terms of service, should I check before running anything at all, even
      occasionally?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "I want to build my own small, stable practice site instead of relying on someone else's —
      what's the minimum it needs to be genuinely useful for locator practice?"
    </li>
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/examples/google-search/"
      >See the Google Search examples →</CallToAction
    >
    <CallToAction class="button button-secondary" href="/examples/google-maps/" style="margin-left: 0.75rem;"
      >See the Google Maps examples →</CallToAction
    >
  </p>
</section>
