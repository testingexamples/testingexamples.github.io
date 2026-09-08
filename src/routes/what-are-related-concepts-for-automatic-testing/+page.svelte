<script lang="ts">
  import { SectionHeading, Separator, CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="A beginner-friendly tour of five things that surround automatic testing: code editors, version control, agile discovery, Unix commands, and cloud hosting — and why each one matters once your test script grows up."
  />
</svelte:head>

<div class="page-header">
  <h1>What are related concepts for automatic testing?</h1>
  <p>
    You've just written your first browser automation script. It works — on your machine, right
    now. This page is about the handful of everyday tools and practices that turn that one script
    into something a whole team can rely on, months from now, without you standing over it.
  </p>
</div>

<section class="section prose">
  <p>
    Automatic testing doesn't happen in isolation. Around every reliable test suite sits a small
    cluster of ordinary software-development habits: a decent editor to write the code in, a way to
    track how that code changes over time, a way to make sure the tests actually get run, and — easy
    to forget, but just as real — a way of checking that the tests are protecting something a real
    person actually cares about. None of these are testing tools specifically. All of them make
    testing work. Below are five to know about, each explained in plain language, each with a link
    or two if you want to go deeper.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
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
    a very reasonable default if you don't already have a favourite editor. For a video introduction,
    watch
    <a href="https://www.youtube.com/watch?v=rPITZvwyoMc"
      >"Master Visual Studio Code Crash Course for beginners in just 15 min"</a
    > (Learn Web Dev with Norbert, 15 min).
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      "I've never used a proper code editor before — what's the real difference between a code
      editor and something like Notepad, and is Visual Studio Code a reasonable place to start?"
    </li>
    <li>
      "I already use VS Code casually — what extensions or features would actually help me write
      and debug browser automation tests specifically?"
    </li>
    <li>
      "How do I set up a shared VS Code configuration — extensions, settings, debugger config —
      so my whole team gets a consistent test-writing experience, not just me?"
    </li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
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
    <a href="https://docs.github.com/get-started">GitHub's own "Get started" docs</a>, or watch
    GitHub's own
    <a href="https://www.youtube.com/watch?v=r8jQ9hVA2qs">"A brief introduction to Git for beginners"</a>
    for a video introduction.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      "I've never used git before — what does 'committing' and 'pushing' actually mean, in plain
      terms, and why do I need either one just to write a test script?"
    </li>
    <li>
      "I accidentally committed a change I want to undo — what's a safe way to undo it without
      losing other work?"
    </li>
    <li>
      "How should a team structure git branches and pull requests specifically around test code,
      so a flaky or broken test doesn't block unrelated changes?"
    </li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
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
    Norman Group's <a href="https://www.nngroup.com/articles/user-research/">introduction to user research</a>,
    or watch
    <a href="https://www.youtube.com/watch?v=vLpQg-al2RU"
      >"Agile Methodology Explained in 5 Minutes"</a
    > for a video introduction.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      "What does 'discovery' actually mean in agile, and why would that matter to someone who
      just writes test scripts?"
    </li>
    <li>
      "How do I turn a vague user story into a concrete, testable scenario before I start
      automating it?"
    </li>
    <li>
      "How do experienced teams keep discovery and test-writing connected on an ongoing basis,
      rather than discovery happening once up front and the tests drifting from it later?"
    </li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    heading="Unix commands — the command line"
    level={2}
  />

  <p>
    <strong>Unix commands</strong> are what almost every dev environment, CI runner, and Docker
    container speaks natively, no GUI required. You don't need to master all of them; a working
    knowledge of a couple dozen goes a very long way.
  </p>

  <ul>
    <li><code>ls</code> = list files and directories</li>
    <li><code>cd</code> = change directory</li>
    <li><code>mv</code> = move a file or directory</li>
    <li><code>more</code> = view a file's text, one page at a time</li>
    <li><code>nano</code> = edit a file's text, with simple commands</li>
    <li><code>grep</code> = find text in files</li>
    <li><code>chmod</code> = change mode of file permissions</li>
    <li><code>curl</code> = call a URL such as an http web address</li>
    <li><code>claude</code> = AI agent</li>
  </ul>

  <p>
    Here's why that belongs on a testing page: <code>grep</code> and <code>sed</code> are how you
    find one specific failure in thousands of lines of test output or a log file, instead of
    scrolling. <code>curl</code> is how you sanity-check an API by hand — the same endpoint a UI
    test might also exercise — before writing the real test. <code>chmod +x</code> is how a test
    script becomes directly runnable. And piping a few commands together is often how a CI step
    gets built without reaching for a "real" programming language just to glue two tools
    together.
  </p>

  <p>
    Learn more at Software Carpentry's
    <a href="https://swcarpentry.github.io/shell-novice/">Unix shell lesson</a>, or watch NetworkChuck's
    <a href="https://www.youtube.com/watch?v=gd7BXuUQ91w"
      >"60 Linux Commands you NEED to know (in 10 minutes)"</a
    > for a fast-paced video introduction.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      "I've never used a command line before — what are the handful of Unix commands actually
      worth learning first for someone getting into testing?"
    </li>
    <li>
      "How would I use grep to find every failing test in a huge CI log without scrolling through
      it by hand?"
    </li>
    <li>
      "How do I chain a few Unix commands together into a small, reliable script for a CI step,
      instead of reaching for a full programming language?"
    </li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Cloud hosting for testing" level={2} />

  <p>
    <strong>Cloud hosting</strong> means running infrastructure — servers, browsers, CI runners —
    on someone else's computers instead of ones you own, paying for what you actually use rather
    than buying and maintaining hardware yourself.
  </p>

  <p>
    Here's why that belongs on a testing page: cloud browser farms let a test suite run against
    real devices and dozens of real browser and operating-system combinations that nobody could
    reasonably install and maintain locally. And cloud CI providers (GitHub Actions, mentioned
    below under CI/CD, is one) give every test run a fresh, disposable machine — so a test can't
    quietly pass only because of state a previous run happened to leave behind, a subtle bug class
    that's much harder to hide once every run starts from nothing.
  </p>

  <p>
    Learn more at AWS's
    <a href="https://aws.amazon.com/what-is-cloud-computing/">introduction to cloud computing</a>, or
    watch
    <a href="https://www.youtube.com/watch?v=8sNAPqJ_c7c"
      >"A Beginner's Guide To Cloud Computing In Under 8 Minutes"</a
    > for a video introduction.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      "What does 'the cloud' actually mean in plain terms, and why would a test suite need it
      instead of just running on my own laptop?"
    </li>
    <li>
      "What's the practical difference between running my tests on my own machine versus a cloud
      browser farm, for a small team?"
    </li>
    <li>
      "How do I decide whether a growing test suite is genuinely ready to move to a cloud CI
      provider, and what should I check before making that switch?"
    </li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <p>
    None of these five are required to write your first script — see
    <a href="/how-to-start-learning-automatic-testing/">How to start learning automatic testing?</a> for that. But each
    one is worth picking up as your testing code grows past a single file on your own machine: a
    shared editor setup, a git history, an honest connection to what users actually
    need, and — once a whole team depends on your tests — the shared vocabulary for talking about
    where testing infrastructure, process, and quality actually live. Each is also a large,
    well-documented subject in its own right — this page is a map, not the territory.
  </p>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/learn/">Back to Learn</CallToAction>
    <CallToAction
      class="button button-secondary"
      href="/how-to-start-learning-automatic-testing/"
      style="margin-left: 0.75rem;">How to start learning →</CallToAction
    >
  </p>
</section>
