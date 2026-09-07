<script lang="ts">
  import { SectionHeading, Separator } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="What automatic (automated) testing is, why it matters, and what it buys a team over manual testing alone."
  />
</svelte:head>

<div class="page-header">
  <h1>What Is Automatic Testing?</h1>
  <p>
    A plain-language introduction to automated testing, why teams rely on it, and what it buys
    them over manual testing alone.
  </p>
</div>

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    heading="Manual testing vs. automatic testing"
    level={2}
  />

  <p>
    <strong>Manual testing</strong> is a person sitting down at a keyboard, clicking through an
    application, and checking with their own eyes that it behaves correctly: does the login form
    accept valid credentials, does the search box return results, does the checkout button actually
    charge the right amount. It is slow, it does not scale, and it depends on that person's
    attention and memory every single time.
  </p>

  <p>
    <strong>Automatic testing</strong> (also called automated testing) is a program — written once
    by a person — that does the same checks itself: it opens the application (or calls a function,
    or drives a real browser), performs some actions, and asserts that the result matches what was
    expected. Once written, that program can run in seconds, as often as anyone likes, without ever
    getting tired, distracted, or bored of clicking the same button for the thousandth time.
  </p>

  <p>
    The two are not rivals so much as complements. Automatic tests are extremely good at repeating
    exactly the same check, forever, cheaply. Manual testing — in particular <em
      >exploratory testing</em
    >, where a skilled person deliberately pokes at an application looking for the unexpected — is
    good at finding the kinds of problems nobody thought to write a check for. Mature teams use
    both: automation for the checks that must never regress, and human judgement for everything a
    checklist cannot anticipate.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "What's the practical difference between manual testing and automatic testing, and why
      would a team bother writing a script instead of just clicking through the app by hand?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "My team does everything by manual testing right now — how do we decide which checks are
      worth automating first?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "How do experienced teams decide what to deliberately keep as manual, exploratory testing
      even after most of their checks are automated?"
    </li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    heading="What automated tests buy you"
    level={2}
  />

  <ul>
    <li>
      <strong>Catching regressions before release.</strong> A regression is something that used to
      work and quietly stopped working, usually because of an unrelated change elsewhere in the
      code. Automated tests run on every change and catch these before they reach real users,
      instead of after.
    </li>
    <li>
      <strong>Running the same check thousands of times, without fatigue.</strong> A person checking
      the same login form for the thousandth time in a row will eventually miss something. A script
      checks it exactly the same way every time, at any hour, as many times as needed.
    </li>
    <li>
      <strong>Confident, frequent releases.</strong> A team with a trustworthy automated test suite
      can ship changes daily, or many times a day, because the suite tells them quickly whether
      something broke. This is what makes continuous integration and continuous delivery (CI/CD)
      practical: every change is automatically built, tested, and — if the tests pass — deployed.
    </li>
    <li>
      <strong>Bugs are cheaper the earlier they're found.</strong> A bug caught while a developer is
      still writing the code costs a few minutes to fix. The same bug caught in code review costs
      more. Caught by manual testing before release, more still. Caught by a customer in production,
      it can cost hours of investigation, an emergency fix, reputational damage, and sometimes real
      money. Automated tests push the moment of discovery as early as possible, where fixing is
      cheapest.
    </li>
    <li>
      <strong>Freeing humans for the testing machines can't do.</strong> Every hour a person doesn't
      spend manually re-checking the same known-good paths is an hour they can spend on exploratory
      testing, usability judgement, and the creative, adversarial thinking that finds the bugs no
      one wrote a script for.
    </li>
  </ul>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "In plain terms, what's a 'regression', and why do automated tests catch it better than a
      person checking by hand?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "My team ships several times a week but still finds bugs in production — what's the actual
      connection between automated testing and safer, more frequent releases?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "How do I make the business case, with real numbers, for investing more engineering time in
      automated tests versus manual QA?"
    </li>
  </ul>
</section>
