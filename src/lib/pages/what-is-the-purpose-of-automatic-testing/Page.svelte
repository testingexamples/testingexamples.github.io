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
    li1Label: string;
    li1P: string;
    li2Label: string;
    li2P: string;
    li3Label: string;
    li3P: string;
    li4Label: string;
    li4P: string;
    li5Label: string;
    li5P: string;
    askAiHeading: string;
    askAi: string[];
    ctaNext: string;
  };

  const EN_001: Messages = {
    title: 'What is the purpose of automatic testing?',
    metaDescription:
      "Why automatic testing exists: catching regressions early, running the same checks tirelessly, enabling frequent releases, cutting the cost of bugs, and freeing people for the testing machines can't do.",
    heading: 'What is the purpose of automatic testing?',
    intro:
      "Writing automatic tests takes real effort up front. Here's what a team actually gets back for that effort.",
    li1Label: 'Catching regressions before release.',
    li1P:
      ' A regression is something that used to work and quietly stopped working, usually because of an unrelated change elsewhere in the code. Automatic tests run on every change and catch these before they reach real users, instead of after.',
    li2Label: 'Running the same check thousands of times, without fatigue.',
    li2P:
      ' A person checking the same login form for the thousandth time in a row will eventually miss something. A script checks it exactly the same way every time, at any hour, as many times as needed.',
    li3Label: 'Confident, frequent releases.',
    li3P:
      ' A team with a trustworthy automatic test suite can ship changes daily, or many times a day, because the suite tells them quickly whether something broke. This is what makes continuous integration and continuous delivery (CI/CD) practical: every change is automatically built, tested, and — if the tests pass — deployed.',
    li4Label: "Bugs are cheaper the earlier they're found.",
    li4P:
      ' A bug caught while a developer is still writing the code costs a few minutes to fix. The same bug caught in code review costs more. Caught by manual testing before release, more still. Caught by a customer in production, it can cost hours of investigation, an emergency fix, reputational damage, and sometimes real money. Automatic tests push the moment of discovery as early as possible, where fixing is cheapest.',
    li5Label: "Freeing humans for the testing machines can't do.",
    li5P:
      " Every hour a person doesn't spend manually re-checking the same known-good paths is an hour they can spend on exploratory testing, usability judgement, and the creative, adversarial thinking that finds the bugs no one wrote a script for.",
    askAiHeading: 'Ask AI ideas',
    askAi: [
      "In plain terms, what's a 'regression', and why do automatic tests catch it better than a person checking by hand?",
      'My team ships several times a week but still finds bugs in production — what\'s the actual connection between automatic testing and safer, more frequent releases?',
      'How do I make the business case, with real numbers, for investing more engineering time in automatic tests versus manual QA?'
    ],
    ctaNext: 'Next: what is the automatic testing pyramid? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Beth yw diben profi awtomatig?',
    metaDescription:
      "Pam mae profi awtomatig yn bodoli: dal atchweliadau'n gynnar, rhedeg yr un gwiriadau'n ddiflino, galluogi rhyddhau'n aml, torri cost namau, a rhyddhau pobl ar gyfer yr hyn na all peiriannau profi ei wneud.",
    heading: 'Beth yw diben profi awtomatig?',
    intro:
      "Mae ysgrifennu profion awtomatig yn cymryd ymdrech go iawn ymlaen llaw. Dyma beth mae tîm yn ei gael yn ôl mewn gwirionedd am yr ymdrech honno.",
    li1Label: 'Dal atchweliadau cyn rhyddhau.',
    li1P:
      " Mae atchweliad yn rhywbeth a arferai weithio ac a stopiodd weithio'n dawel, fel arfer oherwydd newid heb gysylltiad mewn man arall yn y cod. Mae profion awtomatig yn rhedeg ar bob newid ac yn dal y rhain cyn iddynt gyrraedd defnyddwyr go iawn, yn lle wedyn.",
    li2Label: 'Rhedeg yr un gwiriad filoedd o weithiau, heb flino.',
    li2P:
      " Bydd person sy'n gwirio'r un ffurflen mewngofnodi am y filfed tro yn olynol yn colli rhywbeth yn y pen draw. Mae sgript yn ei wirio yn union yr un ffordd bob tro, ar unrhyw awr, cynifer o weithiau ag sydd angen.",
    li3Label: 'Rhyddhau hyderus, aml.',
    li3P:
      " Gall tîm gyda set brofion awtomatig ddibynadwy anfon newidiadau'n ddyddiol, neu sawl gwaith y dydd, oherwydd mae'r set yn dweud wrthynt yn gyflym a yw rhywbeth wedi torri. Dyma sy'n gwneud integreiddio parhaus a chyflenwi parhaus (CI/CD) yn ymarferol: mae pob newid yn cael ei adeiladu, ei brofi, ac — os yw'r profion yn pasio — ei ddefnyddio'n awtomatig.",
    li4Label: "Mae namau'n rhatach po gynharaf y cânt eu darganfod.",
    li4P:
      " Mae nam a ddelir tra bo datblygwr yn dal i ysgrifennu'r cod yn costio ychydig funudau i'w drwsio. Mae'r un nam wedi'i ddal mewn adolygiad cod yn costio mwy. Wedi'i ddal gan brofi â llaw cyn rhyddhau, mwy fyth. Wedi'i ddal gan gwsmer mewn cynhyrchu, gall gostio oriau o ymchwilio, trwsiad brys, niwed i enw da, ac weithiau arian go iawn. Mae profion awtomatig yn gwthio eiliad y darganfyddiad mor gynnar â phosibl, lle mae trwsio rataf.",
    li5Label: "Rhyddhau pobl ar gyfer yr hyn na all y peiriannau profi ei wneud.",
    li5P:
      " Mae pob awr nad yw person yn ei threulio'n ail-wirio â llaw'r un llwybrau hysbys-dda yn awr y gallant ei threulio ar brofi archwiliadol, barn defnyddioldeb, a'r meddwl creadigol, gwrthwynebus sy'n dod o hyd i'r namau na ysgrifennodd neb sgript ar eu cyfer.",
    askAiHeading: 'Syniadau gofyn i AI',
    askAi: [
      "Mewn termau plaen, beth yw 'atchweliad', a pham mae profion awtomatig yn ei ddal yn well na pherson yn gwirio â llaw?",
      "Mae fy nhîm yn rhyddhau sawl gwaith yr wythnos ond dal yn dod o hyd i namau mewn cynhyrchu — beth yw'r cysylltiad gwirioneddol rhwng profi awtomatig a rhyddhau'n fwy diogel, yn amlach?",
      "Sut ydw i'n gwneud yr achos busnes, gyda rhifau gwirioneddol, dros fuddsoddi mwy o amser peirianneg mewn profion awtomatig yn hytrach na QA â llaw?"
    ],
    ctaNext: 'Nesaf: beth yw pyramid profi awtomatig? →'
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
  <ul>
    <li><strong>{m.li1Label}</strong>{m.li1P}</li>
    <li><strong>{m.li2Label}</strong>{m.li2P}</li>
    <li><strong>{m.li3Label}</strong>{m.li3P}</li>
    <li><strong>{m.li4Label}</strong>{m.li4P}</li>
    <li><strong>{m.li5Label}</strong>{m.li5P}</li>
  </ul>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.askAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href={localeHref(locale, 'what-is-the-testing-pyramid')}
      >{m.ctaNext}</CallToAction
    >
  </p>
</section>
