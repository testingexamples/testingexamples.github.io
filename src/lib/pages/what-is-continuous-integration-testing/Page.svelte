<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    p1: string;
    p2: string;
    askAiHeading: string;
    askAi: string[];
    nextLabel: string;
  };

  const EN_001: Messages = {
    title: 'What is continuous integration automatic testing?',
    metaDescription:
      'What continuous integration (CI) testing is: running your automatic test suite automatically on every change, so broken code is caught before it merges rather than after.',
    heading: 'What is continuous integration automatic testing?',
    intro:
      'Continuous integration (CI) testing is running your automatic test suite automatically every time someone proposes a change, instead of relying on a person to remember to run it by hand.',
    p1: 'A CI server (GitHub Actions, GitLab CI, Jenkins, and similar tools all do this) watches a repository for new commits and pull requests. On every one, it checks out the code, installs dependencies, and runs the test suite from scratch, in a clean environment, the same way every time — unit tests, integration tests, and often the browser automation tests this site is about, all in one run. The result — pass or fail — is reported right on the pull request, before a human reviewer even opens it.',
    p2: 'This is what makes automatic tests actually pay off. A test suite that only runs on one developer\'s laptop, when they remember to run it, catches far less than a suite that runs on every single change, automatically, and blocks the merge if it fails. CI is the mechanism that turns "we have tests" into "broken code cannot reach the main branch" — and it\'s usually the first piece of infrastructure a team adds once their browser automation tests are worth trusting.',
    askAiHeading: 'Ask AI ideas',
    askAi: [
      "What does 'CI' actually mean, in plain terms, and why would a team bother running tests automatically instead of just running them themselves before pushing?",
      "I have a test suite that works locally — what's a simple way to get it running automatically on every pull request?",
      'My CI pipeline has gotten slow because it runs the full browser test suite on every commit — how do I restructure it to stay fast without losing confidence?'
    ],
    nextLabel: 'Next: how to start learning automatic testing? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: "Beth yw profi integreiddio parhaus awtomatig?",
    metaDescription:
      "Beth yw profi integreiddio parhaus (CI): rhedeg eich cyfres profion awtomatig yn awtomatig ar bob newid, fel bod cod wedi torri'n cael ei ddal cyn iddo uno yn hytrach nag wedyn.",
    heading: 'Beth yw profi integreiddio parhaus awtomatig?',
    intro:
      "Mae profi integreiddio parhaus (CI) yn golygu rhedeg eich cyfres profion awtomatig yn awtomatig bob tro y bydd rhywun yn cynnig newid, yn lle dibynnu ar berson i gofio ei redeg â llaw.",
    p1: "Mae gweinydd CI (mae GitHub Actions, GitLab CI, Jenkins, ac offer tebyg i gyd yn gwneud hyn) yn gwylio ystorfa am ymrwymiadau a chaisiadau tynnu newydd. Ar bob un, mae'n gwirio'r cod allan, yn gosod dibyniaethau, ac yn rhedeg y gyfres profion o'r dechrau, mewn amgylchedd glân, yr un ffordd bob tro — profion uned, profion integreiddio, a hefyd yn aml y profion awtomeiddio porwr y mae'r safle hwn yn ymwneud â nhw, i gyd mewn un rhediad. Adroddir y canlyniad — llwyddiant neu fethiant — yn syth ar y cais tynnu, cyn i adolygydd dynol hyd yn oed ei agor.",
    p2: "Dyma beth sy'n gwneud i brofion awtomatig dalu ar eu canfed mewn gwirionedd. Mae cyfres brofion sy'n rhedeg dim ond ar liniadur un datblygwr, pan fyddant yn cofio ei redeg, yn dal llawer llai na chyfres sy'n rhedeg ar bob newid unigol, yn awtomatig, ac yn rhwystro'r uno os yw'n methu. CI yw'r mecanwaith sy'n troi \"mae gennym brofion\" yn \"ni all cod wedi torri gyrraedd y gangen ganolog\" — ac fel arfer dyma'r darn cyntaf o seilwaith y mae tîm yn ei ychwanegu unwaith y mae eu profion awtomeiddio porwr yn werth eu trystio.",
    askAiHeading: 'Syniadau gofyn i AI',
    askAi: [
      "Beth mae 'CI' wir yn ei olygu, mewn termau plaen, a pham byddai tîm yn trafferthu rhedeg profion yn awtomatig yn lle jyst eu rhedeg eu hunain cyn gwthio?",
      "Mae gennyf gyfres brofion sy'n gweithio'n lleol — beth yw ffordd syml o'i chael i redeg yn awtomatig ar bob cais tynnu?",
      "Mae fy nghyflinell CI wedi mynd yn araf oherwydd ei bod yn rhedeg y gyfres brofion porwr gyflawn ar bob ymrwymiad — sut ydw i'n ei hail-strwythuro i aros yn gyflym heb golli hyder?"
    ],
    nextLabel: 'Nesaf: sut i ddechrau dysgu profi awtomatig? →'
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
  <p>{m.p1}</p>

  <p>{m.p2}</p>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.askAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction
      class="button button-primary"
      href={localeHref(locale, 'how-to-start-learning-automatic-testing')}
      >{m.nextLabel}</CallToAction
    >
  </p>
</section>
