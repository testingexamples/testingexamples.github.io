<script lang="ts">
  import { SectionHeading, CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    compareHeading: string;
    manualLabel: string;
    manualP: string;
    automaticLabel: string;
    automaticP: string;
    complementPre: string;
    exploratoryLabel: string;
    complementPost: string;
    askAiHeading: string;
    askAi: string[];
    nextLabel: string;
  };

  const EN_001: Messages = {
    title: 'What is automatic testing?',
    metaDescription:
      'What automatic (automated) testing is, and how it differs from and complements manual testing.',
    heading: 'What is automatic testing?',
    intro:
      'A plain-language introduction to automatic testing, and how it differs from and complements manual testing.',
    compareHeading: 'Manual testing vs. automatic testing',
    manualLabel: 'Manual testing',
    manualP:
      "is a person sitting down at a keyboard, clicking through an application, and checking with their own eyes that it behaves correctly: does the login form accept valid credentials, does the search box return results, does the checkout button actually charge the right amount. It is slow, it does not scale, and it depends on that person's attention and memory every single time.",
    automaticLabel: 'Automatic testing',
    automaticP:
      '(also called automated testing) is a program — written once by a person — that does the same checks itself: it opens the application (or calls a function, or drives a real browser), performs some actions, and asserts that the result matches what was expected. Once written, that program can run in seconds, as often as anyone likes, without ever getting tired, distracted, or bored of clicking the same button for the thousandth time.',
    complementPre:
      'The two are not rivals so much as complements. Automatic tests are extremely good at repeating exactly the same check, forever, cheaply. Manual testing — in particular ',
    exploratoryLabel: 'exploratory testing',
    complementPost:
      ', where a skilled person deliberately pokes at an application looking for the unexpected — is good at finding the kinds of problems nobody thought to write a check for. Mature teams use both: automation for the checks that must never regress, and human judgement for everything a checklist cannot anticipate.',
    askAiHeading: 'Ask AI ideas',
    askAi: [
      "What's the practical difference between manual testing and automatic testing, and why would a team bother writing a script instead of just clicking through the app by hand?",
      'My team does everything by manual testing right now — how do we decide which checks are worth automating first?',
      'How do experienced teams decide what to deliberately keep as manual, exploratory testing even after most of their checks are automated?'
    ],
    nextLabel: 'Next: what is the purpose of automatic testing? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary (no colour/organise/programme-style words), so all four
  // English locales share one copy of the prose. See spec/locales/index.md.
  const CY: Messages = {
    title: 'Beth yw profi awtomatig?',
    metaDescription:
      "Beth yw profi awtomatig (wedi'i awtomeiddio), a sut mae'n wahanol i brofi â llaw ac yn ei ategu.",
    heading: 'Beth yw profi awtomatig?',
    intro:
      "Cyflwyniad iaith blaen i brofi awtomatig, a sut mae'n wahanol i brofi â llaw ac yn ei ategu.",
    compareHeading: 'Profi â llaw yn erbyn profi awtomatig',
    manualLabel: 'Profi â llaw',
    manualP:
      "yw person yn eistedd wrth fysellfwrdd, yn clicio drwy gymhwysiad, ac yn gwirio â'u llygaid eu hunain ei fod yn ymddwyn yn gywir: a yw'r ffurflen mewngofnodi'n derbyn manylion dilys, a yw'r blwch chwilio'n dychwelyd canlyniadau, a yw'r botwm talu wir yn codi'r swm cywir. Mae'n araf, nid yw'n graddadwy, ac mae'n dibynnu ar sylw a chof y person hwnnw bob tro.",
    automaticLabel: 'Profi awtomatig',
    automaticP:
      "(a elwir hefyd yn brofi wedi'i awtomeiddio) yw rhaglen — a ysgrifennwyd unwaith gan berson — sy'n gwneud yr un gwiriadau ei hun: mae'n agor y cymhwysiad (neu'n galw ffwythiant, neu'n gyrru porwr go iawn), yn cyflawni rhai camau, ac yn cadarnhau bod y canlyniad yn cyfateb i'r hyn a ddisgwylid. Unwaith y'i hysgrifennir, gall y rhaglen honno redeg mewn eiliadau, mor aml ag y mynn unrhyw un, heb byth flino, cael ei thynnu sylw, na diflasu ar glicio'r un botwm am y filfed tro.",
    complementPre:
      "Nid yw'r ddau yn wrthwynebwyr gymaint ag y maent yn ategu ei gilydd. Mae profion awtomatig yn arbennig o dda am ailadrodd yr un gwiriad yn union, am byth, yn rhad. Mae profi â llaw — yn enwedig ",
    exploratoryLabel: 'brofi archwiliadol',
    complementPost:
      ", lle mae person medrus yn pwyo cymhwysiad yn fwriadol i chwilio am yr annisgwyl — yn dda am ddod o hyd i'r math o broblemau na feddyliodd neb i ysgrifennu gwiriad ar eu cyfer. Mae timau aeddfed yn defnyddio'r ddau: awtomeiddio ar gyfer y gwiriadau na chaiff byth ddirywio, a barn ddynol ar gyfer popeth na all rhestr wirio ei ragweld.",
    askAiHeading: 'Syniadau gofyn i AI',
    askAi: [
      "Beth yw'r gwahaniaeth ymarferol rhwng profi â llaw a phrofi awtomatig, a pham byddai tîm yn trafferthu ysgrifennu sgript yn lle clicio drwy'r ap â llaw?",
      "Mae fy nhîm yn gwneud popeth drwy brofi â llaw ar hyn o bryd — sut ydyn ni'n penderfynu pa wiriadau sy'n werth eu hawtomeiddio gyntaf?",
      "Sut mae timau profiadol yn penderfynu beth i'w gadw'n fwriadol fel profi â llaw, archwiliadol, hyd yn oed ar ôl i'r rhan fwyaf o'u gwiriadau gael eu hawtomeiddio?"
    ],
    nextLabel: 'Nesaf: beth yw diben profi awtomatig? →'
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_001,
    'cy-gb': CY,
    'cy-001': CY
  };

  const m = $derived(MESSAGES[locale]);
</script>

<svelte:head>
  <title>{m.title} — Testing Examples</title>
  <meta name="description" content={m.metaDescription} />
</svelte:head>

<div class="page-header">
  <h1>{m.heading}</h1>
  <p>{m.intro}</p>
</div>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.compareHeading} level={2} />

  <p><strong>{m.manualLabel}</strong> {m.manualP}</p>

  <p><strong>{m.automaticLabel}</strong> {m.automaticP}</p>

  <p>{m.complementPre}<em>{m.exploratoryLabel}</em>{m.complementPost}</p>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.askAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href={localeHref(locale, 'what-is-the-purpose-of-automatic-testing')}
      >{m.nextLabel}</CallToAction
    >
  </p>
</section>
