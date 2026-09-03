<script lang="ts">
  import { SectionHeading, Separator, CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="A beginner-friendly tour of four things that surround automatic testing: code editors, version control, CI/CD, and agile discovery — and why each one matters once your test script grows up."
  />
</svelte:head>

<div class="page-header">
  <h1>Related Concepts</h1>
  <p>
    You've just written your first browser automation script. It works — on your machine, right
    now. This page is about the handful of everyday tools and practices that turn that one script
    into something a whole team can rely on, months from now, without you standing over it.
  </p>
</div>

<section class="section prose">
  <p>
    Automated testing doesn't happen in isolation. Around every reliable test suite sits a small
    cluster of ordinary software-development habits: a decent editor to write the code in, a way to
    track how that code changes over time, a way to make sure the tests actually get run, and — easy
    to forget, but just as real — a way of checking that the tests are protecting something a real
    person actually cares about. None of these are testing tools specifically. All of them make
    testing work. Below are four to know about, each explained in plain language, each with a link
    or two if you want to go deeper.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Writing the code"
    heading="Code editors — e.g. Visual Studio Code"
    level={2}
  />

  <p>
    You can write a test script in any plain text editor, but a proper code editor gives you back a
    surprising amount of help for free. <strong>Syntax highlighting</strong> colours your code as you
    type, so a typo like a missing closing bracket jumps out visually instead of hiding until you run
    the script and get a confusing error. <strong>Autocomplete</strong> shows you what's actually
    available as you type — type <code>page.</code> or <code>driver.</code> in a modern editor and
    it'll list every method the library offers, which is often faster than searching the docs.
  </p>

  <p>
    An <strong>integrated terminal</strong> lets you run your test script without leaving the editor
    window, and a <strong>built-in debugger</strong> lets you pause a failing test mid-run and actually
    look at what the browser found on the page — the real state of things — rather than guessing from
    a trail of <code>console.log</code> statements. On top of all that, editors support
    <strong>extensions</strong>: for example, Playwright ships its own official VS Code extension,
    which can run your tests from a sidebar and even generate new test code by recording your clicks
    in a real browser.
  </p>

  <p>
    <a href="https://code.visualstudio.com/">Visual Studio Code</a> is free, extremely widely used, and
    a very reasonable default if you don't already have a favourite editor.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Tracking changes"
    heading="Version control — git and GitHub"
    level={2}
  />

  <p>
    Without version control, "fixing a test" usually means overwriting the old file and hoping you
    don't need the previous version back. <strong>Git</strong> solves that by keeping every version of
    every file it tracks: it lets you see exactly what changed, when, and — via a commit message — why,
    and it lets you undo a bad change safely instead of trying to remember what the code used to look
    like.
  </p>

  <p>
    <strong>GitHub</strong> (or a similar host, like GitLab or Bitbucket) adds sharing and
    collaboration on top of plain git. It gives your code a home other people can find, clone, and
    read; it lets someone suggest a change via a <em>pull request</em> — a proposed diff you can
    discuss, review, and merge (or not) — rather than just emailing a new copy of a file back and
    forth.
  </p>

  <p>
    This isn't abstract for this site: every demo repo linked from this site's
    <a href="/examples/">examples</a> and <a href="/about/">about</a> pages is a real, public git
    repository. You can clone any of them and read the full history of how that testing code came to
    look the way it does — that's not incidental, it's how real testing code actually gets managed.
  </p>

  <p>
    Learn more at <a href="https://git-scm.com/">git-scm.com</a> and
    <a href="https://docs.github.com/get-started">GitHub's own "Get started" docs</a>.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Running the tests"
    heading="Continuous integration / continuous delivery — CI/CD"
    level={2}
  />

  <p>
    Go back to why automatic testing matters in the first place (see
    <a href="/learn/what-is-automatic-testing/">What Is Automatic Testing?</a>): a test you have to
    remember to run by hand eventually doesn't get run. Someone's in a hurry, someone forgets, someone
    assumes "it probably still passes" — and the whole point of automating the check quietly
    evaporates.
  </p>

  <p>
    <strong>Continuous integration (CI)</strong> is the practice of having a server automatically run
    your tests every time code changes — on every commit, or every pull request, with no human
    needing to remember to click "run". <strong>Continuous delivery (CD)</strong> takes it one step
    further: when those tests pass, the server automatically prepares or ships the change too, instead
    of waiting for someone to do a manual release.
  </p>

  <p>
    This site is itself a working example: every push to its <code>main</code> branch triggers a
    GitHub Actions workflow that builds the site and republishes it automatically, with no one manually
    uploading files. Exactly the same pattern — a server automatically doing the work on every change —
    applies to running a test suite before code is allowed to merge.
  </p>

  <p>
    Learn more at <a href="https://docs.github.com/actions">GitHub Actions documentation</a> and
    <a href="https://www.atlassian.com/continuous-delivery/continuous-integration"
      >Atlassian's introduction to continuous integration</a
    >.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Testing the right thing"
    heading="Agile and working with users — discovery"
    level={2}
  />

  <p>
    In plain terms, <strong>agile</strong> means building software in short, repeatable cycles and
    checking in with the people who'll actually use it along the way — instead of building for months
    against a fixed spec and only finding out at the end that the spec was wrong.
    <strong>Discovery</strong> is the specific practice of talking to real (or realistically
    representative) users early, to learn what they actually need and how they actually behave,
    before — and while — you build.
  </p>

  <p>
    Here's why that belongs on a testing page: a test suite can only check that software does what
    you <em>intended</em> it to do. It has no way of checking whether that intention was ever the
    right one. Discovery is what keeps the intention pointed at something a real person actually
    needs, so that all the careful automated checking you do afterwards is checking something worth
    checking.
  </p>

  <p>
    It's concrete on this very site, too: the fixture examples on the home page, and the NHS Wales
    "About Us" and search scenarios this site's sibling repos exercise, exist because someone
    identified a real user journey worth protecting — signing up, searching, finding information on
    a health service site. Deciding that journey mattered enough to write a test for is itself a
    discovery activity, not a purely technical one.
  </p>

  <p>
    Learn more at the <a href="https://agilemanifesto.org/">Agile Manifesto</a> and the Nielsen
    Norman Group's <a href="https://www.nngroup.com/articles/user-research/">introduction to user research</a>.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <p>
    None of these four are required to write your first script — see
    <a href="/learn/getting-started/">How to Start Learning Automatic Testing</a> for that. But each
    one is worth picking up as your testing code grows past a single file on your own machine: a
    shared editor setup, a git history, a CI pipeline, and an honest connection to what users actually
    need. Each is also a large, well-documented subject in its own right — this page is a map, not
    the territory.
  </p>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/learn/">Back to Learn</CallToAction>
    <CallToAction
      class="button button-secondary"
      href="/learn/getting-started/"
      style="margin-left: 0.75rem;">How to start learning →</CallToAction
    >
  </p>
</section>
