<script lang="ts">
  import { SectionHeading, CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="What automatic (automated) testing is, and how it differs from and complements manual testing."
  />
</svelte:head>

<div class="page-header">
  <h1>What Is Automatic Testing?</h1>
  <p>
    A plain-language introduction to automatic testing, and how it differs from and complements
    manual testing.
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

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/what-is-the-purpose-of-automatic-testing/"
      >Next: what is the purpose of automatic testing? →</CallToAction
    >
  </p>
</section>
