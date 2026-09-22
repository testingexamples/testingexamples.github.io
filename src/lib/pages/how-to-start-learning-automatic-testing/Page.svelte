<script lang="ts">
  import { SectionHeading, Separator, InformationCallout, CallToAction } from 'lily-design-system-svelte-headless';
  import { GETTING_STARTED_DEMO_REPOS } from '$lib/site';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    askAiHeading: string;

    s1Heading: string;
    s1Pre: string;
    s1And: string;
    s1Post: string;
    s1Li1Label: string;
    s1Li1P: string;
    s1Li2Label: string;
    s1Li2P: string;
    s1AskAi: string[];

    s2Heading: string;
    s2P: string;
    s2Li1P: string;
    s2Li2P: string;
    s2AskAi: string[];

    s3Heading: string;
    s3P1Pre: string;
    s3HomeLinkText: string;
    s3P1Post: string;
    s3P2Pre: string;
    s3P2Post: string;
    s3AskAi: string[];

    s4Heading: string;
    s4P: string;
    s4WalkthroughsHeading: string;
    s4P2: string;
    googleSearchExamplesLinkText: string;
    googleMapsExamplesLinkText: string;
    s4AskAi: string[];

    s5Heading: string;
    readNotRunLabel: string;
    readNotRunPre: string;
    readNotRunMid: string;
    readNotRunPatternsPre: string;
    patternsLabel: string;
    readNotRunPost: string;
    s5AskAi: string[];

    ctaGoogleSearch: string;
    ctaGoogleMaps: string;
  };

  const EN_001: Messages = {
    title: 'How to start learning automatic testing?',
    metaDescription:
      'A practical, step-by-step path for learning browser automatic testing: pick a language, pick a tool, run your first script, then practice on real examples.',
    heading: 'How to start learning automatic testing?',
    intro:
      'A practical path, not a theory dump. Five steps from "never written a browser test" to reading worked examples in two tools and three languages.',
    askAiHeading: 'Ask AI ideas',

    s1Heading: 'Pick one programming language',
    s1Pre:
      'A programming language is just a precise way of writing down instructions for a computer to follow — a bit like a recipe, except the computer will only do exactly what you wrote, not what you meant, so the wording has to be exact. It\'s necessary for test automation because a browser automation tool isn\'t a standalone app you click around in — it\'s a library you call from inside a programming language, using that language\'s own ordinary building blocks (variables, loops, if-statements) to say things like "open this page," "click this button," "check that this text appeared." Learning browser automation already means learning a new tool ',
    s1And: 'and',
    s1Post:
      " a testing mindset at the same time, so don't also try to learn a brand-new programming language in the same sitting — pick whichever of these you're already somewhat comfortable with:",
    s1Li1Label: 'JavaScript',
    s1Li1P: " — the most common language for web testing; if you've written any web front-end code, start here.",
    s1Li2Label: 'Python',
    s1Li2P: ' — clean, readable syntax; a popular second choice, especially outside web-development teams.',
    s1AskAi: [
      "I've never written a line of code before. Could you explain, in plain terms, what JavaScript and Python are each generally used for, and recommend one to start with for browser testing?",
      "I already know a bit of JavaScript — what would I need to learn differently to write a browser automation script in it, and what's a good small first exercise?",
      "I'm already comfortable in one of these languages — what are the real trade-offs of switching to the other one specifically for a growing browser-test suite, not just for general-purpose programming?"
    ],

    s2Heading: 'Pick one browser automation tool to start',
    s2P: "Browser automation means controlling a real web browser with code instead of a mouse and keyboard — opening a page, clicking a button, filling in a form, reading back what's on the screen, all done programmatically. It's necessary for test automation because it's what makes a check repeatable: instead of a person clicking through your site by hand every time something changes and hoping they remember every step, a script does the exact same clicks in the exact same order every single time, and tells you the moment something doesn't look right. A browser automation tool is the library that gives your programming language the vocabulary to do this — find an element, act on it, wait for it, check it. Start with exactly one of these — you can learn the others later once the core ideas click:",
    s2Li1P:
      ' — the friendliest choice for beginners today. Good documentation, built-in auto-waiting (see step 4), works the same way across Chromium, Firefox, and WebKit, with official bindings in JavaScript, Python, and more.',
    s2Li2P:
      ' — the most established and most widely taught browser automation tool, with the largest ecosystem and the most existing tutorials, courses, and Stack Overflow answers.',
    s2AskAi: [
      "I've never automated a browser before. In plain terms, what do Playwright and Selenium each actually do, and which one is easiest to get running today?",
      'I want to automate a multi-step checkout flow with a loading spinner between steps — which of Playwright or Selenium handles that kind of waiting most simply?',
      'I need a test suite that runs reliably in parallel across Chromium, Firefox, and WebKit — how do Playwright and Selenium actually differ in how they handle that?'
    ],

    s3Heading: 'Install it and run one script against this site',
    s3P1Pre: 'Follow your chosen tool\'s own "getting started" guide to install it, then point your very first script at ',
    s3HomeLinkText: "this site's own home page",
    s3P1Post:
      ". This site was built for exactly that: every element on the home page has a stable id, name, class, or link text you can practice finding — no guesswork about whether the markup will change under you.",
    s3P2Pre: 'A reasonable first script: open the home page, find the element with id ',
    s3P2Post:
      ', and print or assert its text. Then try finding an element by name, by class, and by link text. Small, deliberate wins first.',
    s3AskAi: [
      "I've just installed a browser automation tool for the first time and I'm stuck on an installation error — what are the most common first-run problems and how do I fix them?",
      "My first script found one element fine, but I also want it to click a link and then check the resulting page's title — what's a clean way to write that as a second step?",
      "I want my very first script to also run headless and take a screenshot automatically on failure — what's the minimal setup to add both?"
    ],

    s4Heading: 'Practice on real, deliberately-friendly examples',
    s4P: "Once the basics click, read other people's working code line by line. This project's sibling repos are worked examples built for exactly that:",
    s4WalkthroughsHeading: 'Locator-strategy walkthroughs (target this site)',
    s4P2: "Then read this site's own worked examples, which tour the same handful of interactions across two tools and three languages, including Rust:",
    googleSearchExamplesLinkText: 'Google Search examples',
    googleMapsExamplesLinkText: 'Google Maps examples',
    s4AskAi: [
      "I've read one of these worked examples line by line but I don't understand what a specific line does — what's a good, safe way to ask an AI assistant to explain unfamiliar code like that?",
      "I want to take a worked example written in one language and rewrite it in another to practice — what's a good way to check my rewrite is actually equivalent, not just similar-looking?",
      "I want to turn a walkthrough example that only prints what it found into a real test with proper assertions — what's a reliable way to decide what's actually worth asserting?"
    ],

    s5Heading: 'A note on real third-party sites',
    readNotRunLabel: "Read, don't repeatedly run",
    readNotRunPre:
      "Automating a real third-party site like Google is a step up in difficulty from automating this site: their markup isn't a stable public contract the way this site's fixture page is, and their Terms of Service restrict automated querying of their services. Treat ",
    readNotRunMid: ' and ',
    readNotRunPatternsPre: ' as reading material for the ',
    patternsLabel: 'patterns',
    readNotRunPost: ' — not as scripts to run repeatedly against the live sites.',
    s5AskAi: [
      'Why exactly is it riskier to run an automated script against a real live website like Google than against a page built for practicing on?',
      'I want to practice against a real site respectfully — what guardrails, like rate limiting, robots.txt, and terms of service, should I check before running anything at all, even occasionally?',
      "I want to build my own small, stable practice site instead of relying on someone else's — what's the minimum it needs to be genuinely useful for locator practice?"
    ],

    ctaGoogleSearch: 'See the Google Search examples →',
    ctaGoogleMaps: 'See the Google Maps examples →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Sut i ddechrau dysgu profi awtomatig?',
    metaDescription:
      "Llwybr ymarferol, cam wrth gam ar gyfer dysgu profi awtomatig porwr: dewiswch iaith, dewiswch offeryn, rhedwch eich sgript gyntaf, yna ymarferwch ar enghreifftiau go iawn.",
    heading: 'Sut i ddechrau dysgu profi awtomatig?',
    intro:
      'Llwybr ymarferol, nid llwyth o theori. Pum cam o "erioed wedi ysgrifennu prawf porwr" i ddarllen enghreifftiau wedi\'u gweithio mewn dau offeryn a thair iaith.',
    askAiHeading: 'Syniadau gofyn i AI',

    s1Heading: 'Dewiswch un iaith raglennu',
    s1Pre:
      'Mae iaith raglennu yn ffordd fanwl gywir yn unig o ysgrifennu cyfarwyddiadau i gyfrifiadur eu dilyn — ychydig fel rysáit, ond bydd y cyfrifiadur ond yn gwneud yn union yr hyn a ysgrifennwyd, nid yr hyn a olygwyd, felly rhaid i\'r geiriad fod yn union gywir. Mae\'n angenrheidiol ar gyfer awtomeiddio profi oherwydd nid ap annibynnol y clicoch chi o\'i gwmpas yw offeryn awtomeiddio porwr — mae\'n llyfrgell rydych chi\'n ei galw o fewn iaith raglennu, gan ddefnyddio adeiladwaith cyffredin yr iaith honno ei hun (newidynnau, dolenni, datganiadau if) i ddweud pethau fel "agor y dudalen hon," "clicio\'r botwm hwn," "gwirio bod y testun hwn wedi ymddangos." Mae dysgu awtomeiddio porwr eisoes yn golygu dysgu offeryn newydd ',
    s1And: 'a',
    s1Post:
      " meddylfryd profi ar yr un pryd, felly peidiwch â cheisio dysgu iaith raglennu newydd sbon yr un eisteddiad hefyd — dewiswch pa un o'r rhain rydych chi eisoes yn weddol gyfforddus ynddi:",
    s1Li1Label: 'JavaScript',
    s1Li1P: " — yr iaith fwyaf cyffredin ar gyfer profi gwe; os ydych chi wedi ysgrifennu unrhyw god ffrynt-wynebol gwe, dechreuwch yma.",
    s1Li2Label: 'Python',
    s1Li2P: " — cystrawen lân, hawdd ei darllen; dewis ail poblogaidd, yn enwedig y tu allan i dimau datblygu gwe.",
    s1AskAi: [
      "Dydw i erioed wedi ysgrifennu llinell o god o'r blaen. Allech chi esbonio, mewn termau plaen, at beth mae JavaScript a Python fel arfer yn cael eu defnyddio, ac argymell un i ddechrau arni ar gyfer profi porwr?",
      "Rwy'n gwybod ychydig o JavaScript yn barod — beth fyddai angen i mi ei ddysgu'n wahanol i ysgrifennu sgript awtomeiddio porwr ynddi, a beth yw ymarfer cyntaf bach da?",
      "Rwy'n gyfforddus yn barod mewn un o'r ieithoedd hyn — beth yw manteision ac anfanteision gwirioneddol newid i'r llall yn benodol ar gyfer set profion porwr sy'n tyfu, nid dim ond ar gyfer rhaglennu at ddibenion cyffredinol?"
    ],

    s2Heading: 'Dewiswch un offeryn awtomeiddio porwr i ddechrau',
    s2P: "Mae awtomeiddio porwr yn golygu rheoli porwr gwe go iawn â chod yn lle llygoden a bysellfwrdd — agor tudalen, clicio botwm, llenwi ffurflen, darllen yn ôl beth sydd ar y sgrin, i gyd wedi'i wneud yn rhaglennol. Mae'n angenrheidiol ar gyfer awtomeiddio profi oherwydd dyma'r hyn sy'n gwneud gwiriad yn ailadroddadwy: yn lle person yn clicio drwy'ch safle â llaw bob tro mae rhywbeth yn newid ac yn gobeithio eu bod yn cofio pob cam, mae sgript yn gwneud yr un cliciau union yn yr un drefn union bob tro, ac yn dweud wrthych yr eiliad nad yw rhywbeth yn edrych yn iawn. Mae offeryn awtomeiddio porwr yn llyfrgell sy'n rhoi'r eirfa i'ch iaith raglennu i wneud hyn — dod o hyd i elfen, gweithredu arni, aros amdani, ei gwirio. Dechreuwch ag union un o'r rhain — gallwch ddysgu'r lleill yn ddiweddarach unwaith y bydd y syniadau craidd yn clicio:",
    s2Li1P:
      " — y dewis mwyaf cyfeillgar i ddechreuwyr heddiw. Dogfennaeth dda, arhosiad-awtomatig wedi'i adeiladu i mewn (gweler cam 4), yn gweithio'r un ffordd ar draws Chromium, Firefox, a WebKit, gyda rhwymiadau swyddogol yn JavaScript, Python, a mwy.",
    s2Li2P:
      " — yr offeryn awtomeiddio porwr mwyaf sefydledig a mwyaf eang ei ddysgu, gyda'r ecosystem fwyaf a'r mwyaf o diwtorialau, cyrsiau, ac atebion Stack Overflow presennol.",
    s2AskAi: [
      "Dydw i erioed wedi awtomeiddio porwr o'r blaen. Mewn termau plaen, beth mae Playwright a Selenium yn ei wneud mewn gwirionedd, a pha un sydd hawsaf i'w gael i redeg heddiw?",
      "Rwyf am awtomeiddio llif talu aml-gam gyda throellwr llwytho rhwng camau — pa un o Playwright neu Selenium sy'n trin y math hwnnw o aros symlaf?",
      "Rwyf angen set profion sy'n rhedeg yn ddibynadwy'n gyfochrog ar draws Chromium, Firefox, a WebKit — sut mae Playwright a Selenium wir yn wahanol o ran sut maen nhw'n trin hynny?"
    ],

    s3Heading: 'Ei osod a rhedeg un sgript yn erbyn y safle hwn',
    s3P1Pre:
      "Dilynwch ganllaw \"cychwyn arni\" eich offeryn dewisol ei hun i'w osod, yna anelwch eich sgript gyntaf un at ",
    s3HomeLinkText: "dudalen gartref y safle hwn ei hun",
    s3P1Post:
      ". Cafodd y safle hwn ei adeiladu ar gyfer union hynny: mae gan bob elfen ar y dudalen gartref id, name, class, neu destun dolen sefydlog y gallwch ymarfer dod o hyd iddo — dim dyfalu ynghylch a fydd y marcio'n newid oddi tanoch.",
    s3P2Pre: "Sgript gyntaf resymol: agorwch y dudalen gartref, dewch o hyd i'r elfen ag id ",
    s3P2Post:
      ", ac argraffwch neu gadarnhewch ei thestun. Yna ceisiwch ddod o hyd i elfen wrth ei enw, wrth ei dosbarth, ac wrth destun dolen. Buddugoliaethau bach, bwriadol yn gyntaf.",
    s3AskAi: [
      "Rwyf newydd osod offeryn awtomeiddio porwr am y tro cyntaf ac rwy'n sownd ar wall gosod — beth yw'r problemau rhediad-cyntaf mwyaf cyffredin a sut ydw i'n eu trwsio?",
      "Daeth fy sgript gyntaf o hyd i un elfen yn iawn, ond rwyf hefyd am iddi glicio dolen ac yna wirio teitl y dudalen ganlyniadol — beth yw ffordd lân o ysgrifennu hynny fel ail gam?",
      "Rwyf am i'm sgript gyntaf un hefyd redeg heb ben a chymryd sgrinlun yn awtomatig ar fethiant — beth yw'r gosodiad lleiaf i ychwanegu'r ddau?"
    ],

    s4Heading: "Ymarfer ar enghreifftiau go iawn, cyfeillgar yn fwriadol",
    s4P: "Unwaith y bydd y pethau sylfaenol yn clicio, darllenwch god pobl eraill sy'n gweithio, linell wrth linell. Mae ystorfeydd chwaer y prosiect hwn yn enghreifftiau wedi'u gweithio a adeiladwyd ar gyfer union hynny:",
    s4WalkthroughsHeading: "Teithiau strategaeth-lleolydd (yn targedu'r safle hwn)",
    s4P2: "Yna darllenwch enghreifftiau wedi'u gweithio'r safle hwn ei hun, sy'n teithio drwy'r un llond dwrn o ryngweithiadau ar draws dau offeryn a thair iaith, gan gynnwys Rust:",
    googleSearchExamplesLinkText: 'enghreifftiau Chwilio Google',
    googleMapsExamplesLinkText: 'enghreifftiau Mapiau Google',
    s4AskAi: [
      "Rwyf wedi darllen un o'r enghreifftiau wedi'u gweithio hyn linell wrth linell ond dydw i ddim yn deall beth mae llinell benodol yn ei wneud — beth yw ffordd dda, ddiogel o ofyn i gynorthwyydd AI esbonio god anghyfarwydd fel hyn?",
      "Rwyf am gymryd enghraifft wedi'i gweithio sydd wedi'i hysgrifennu mewn un iaith a'i hailysgrifennu mewn un arall i ymarfer — beth yw ffordd dda o wirio bod fy ailysgrifeniad wir yn gyfatebol, nid dim ond yn edrych yn debyg?",
      "Rwyf am droi enghraifft daith-drwodd sydd ond yn argraffu'r hyn y daeth o hyd iddo yn brawf go iawn gyda chadarnhadau priodol — beth yw ffordd ddibynadwy o benderfynu beth sy'n werth ei gadarnhau mewn gwirionedd?"
    ],

    s5Heading: 'Nodyn ar safleoedd trydydd parti go iawn',
    readNotRunLabel: "Darllenwch, peidiwch â rhedeg dro ar ôl tro",
    readNotRunPre:
      "Mae awtomeiddio safle trydydd parti go iawn fel Google yn gam i fyny mewn anhawster o awtomeiddio'r safle hwn: nid yw eu marcio'n gytundeb cyhoeddus sefydlog fel y mae tudalen ffwythiant y safle hwn, ac mae eu Telerau Gwasanaeth yn cyfyngu ymholi awtomataidd o'u gwasanaethau. Trinwch ",
    readNotRunMid: ' a ',
    readNotRunPatternsPre: " fel deunydd darllen ar gyfer y ",
    patternsLabel: 'patrymau',
    readNotRunPost: " — nid fel sgriptiau i'w rhedeg dro ar ôl tro yn erbyn y safleoedd byw.",
    s5AskAi: [
      "Pam yn union ei bod yn fwy peryglus rhedeg sgript wedi'i hawtomeiddio yn erbyn gwefan fyw go iawn fel Google nag yn erbyn tudalen a adeiladwyd i ymarfer arni?",
      "Rwyf am ymarfer yn erbyn safle go iawn yn barchus — pa amddiffynfeydd, fel cyfyngu cyfradd, robots.txt, a thelerau gwasanaeth, y dylwn eu gwirio cyn rhedeg unrhyw beth o gwbl, hyd yn oed yn achlysurol?",
      "Rwyf am adeiladu fy safle ymarfer bach, sefydlog fy hun yn lle dibynnu ar un rhywun arall — beth yw'r lleiafswm sydd angen iddo fod i fod yn wirioneddol ddefnyddiol ar gyfer ymarfer lleolyddion?"
    ],

    ctaGoogleSearch: 'Gweld yr enghreifftiau Chwilio Google →',
    ctaGoogleMaps: 'Gweld yr enghreifftiau Mapiau Google →'
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
  <SectionHeading class="section-heading-start" heading={m.s1Heading} level={2} />

  <p>{m.s1Pre}<em>{m.s1And}</em>{m.s1Post}</p>
  <ul>
    <li><strong>{m.s1Li1Label}</strong>{m.s1Li1P}</li>
    <li><strong>{m.s1Li2Label}</strong>{m.s1Li2P}</li>
  </ul>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.s1AskAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.s2Heading} level={2} />

  <p>{m.s2P}</p>
  <ul>
    <li><strong><a href="https://playwright.dev/">Playwright</a></strong>{m.s2Li1P}</li>
    <li><strong><a href="https://www.selenium.dev/">Selenium</a></strong>{m.s2Li2P}</li>
  </ul>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.s2AskAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.s3Heading} level={2} />

  <p>
    {m.s3P1Pre}<a href={localeHref(locale, 'home')}>{m.s3HomeLinkText}</a>{m.s3P1Post}
  </p>
  <p>{m.s3P2Pre}<code>id-example-1</code>{m.s3P2Post}</p>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.s3AskAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.s4Heading} level={2} />

  <p>{m.s4P}</p>

  <h3>{m.s4WalkthroughsHeading}</h3>
  <ul class="repo-list">
    {#each GETTING_STARTED_DEMO_REPOS as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}
      </li>
    {/each}
  </ul>

  <p>{m.s4P2}</p>
  <ul>
    <li><a href={localeHref(locale, 'examples-google-search')}>{m.googleSearchExamplesLinkText}</a></li>
    <li><a href={localeHref(locale, 'examples-google-maps')}>{m.googleMapsExamplesLinkText}</a></li>
  </ul>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.s4AskAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.s5Heading} level={2} />

  <InformationCallout label={m.readNotRunLabel}>
    <p>
      {m.readNotRunPre}<a href={localeHref(locale, 'examples-google-search')}
        >{m.googleSearchExamplesLinkText}</a
      >{m.readNotRunMid}<a href={localeHref(locale, 'examples-google-maps')}
        >{m.googleMapsExamplesLinkText}</a
      >{m.readNotRunPatternsPre}<em>{m.patternsLabel}</em>{m.readNotRunPost}
    </p>
  </InformationCallout>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.s5AskAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href={localeHref(locale, 'examples-google-search')}
      >{m.ctaGoogleSearch}</CallToAction
    >
    <CallToAction
      class="button button-secondary"
      href={localeHref(locale, 'examples-google-maps')}
      style="margin-left: 0.75rem;">{m.ctaGoogleMaps}</CallToAction
    >
  </p>
</section>
