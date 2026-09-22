<script lang="ts">
  import { SectionHeading, InformationCallout, Separator, CallToAction } from 'lily-design-system-svelte-headless';
  import { REPO, NHS_WALES_DEMO_REPOS } from '$lib/site';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  const aiStatementUrl = `${REPO}/blob/main/AI_STATEMENT.md`;
  const nhsWalesExample = NHS_WALES_DEMO_REPOS[0];

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;

    h1Heading: string;
    p1: string;
    p2Pre: string;
    locatorsLabel: string;
    p2Mid: string;
    p2Post: string;
    calloutWorthKnowingLabel: string;
    calloutPre: string;
    wrongLabel: string;
    calloutPost: string;

    h2Heading: string;
    p3Pre: string;
    p3Post: string;
    li1Label: string;
    li1P: string;
    li2Label: string;
    li2P: string;
    li3Label: string;
    li3P: string;
    p4Pre: string;
    p4LinkText: string;
    p4Post: string;

    h3Heading: string;
    p5: string;
    p6Pre: string;
    aboutLinkText: string;
    p6Mid: string;
    p6Post: string;
    p7: string;

    h4Heading: string;
    calloutReadLabel: string;
    calloutReadP: string;
    p8Pre: string;
    p8Post: string;

    ctaBackToLearn: string;
    ctaNext: string;
  };

  const EN_001: Messages = {
    title: 'How does artificial intelligence help automatic testing?',
    metaDescription:
      'A grounded, practical look at where AI shows up in automatic testing today: writing and maintaining tests, CI/CD, and agile discovery — plus the honest caveat that applies to all three.',
    heading: 'How does artificial intelligence help automatic testing?',
    intro:
      'AI tools have become a real part of how automatic testing, CI/CD, and agile discovery work today. This page covers three ways AI shows up in that work, and one honest caveat that applies to all three.',

    h1Heading: 'AI for writing and maintaining tests',
    p1: "A first draft of a test can now often come from a plain description of what should happen — \"go to the search page, search for X, check the results mention X\" — rather than starting from a blank file. Several tools do this today, including Playwright's own codegen, which records real clicks into a script, combined with an AI layer that lets you describe intent in natural language and get a starting point to edit.",
    p2Pre: 'Some tools also apply AI to ',
    locatorsLabel: 'locators',
    p2Mid:
      ' — the selectors a test uses to find an element on the page. A "self-healing" locator uses AI to re-locate an element when its selector changes, for example when a developer renames an ',
    p2Post: ', instead of the test simply breaking.',
    calloutWorthKnowingLabel: 'Worth knowing',
    calloutPre:
      'Self-healing locators reduce one kind of brittleness but introduce another: a self-healing locator can silently click the ',
    wrongLabel: 'wrong',
    calloutPost:
      ' element — one that merely looks similar to the one the test meant — and a test that still runs and still passes is not automatically a test that is still correct. Treat this kind of tool as an aid you still review, not a replacement for understanding what your test actually checks.',

    h2Heading: 'AI in CI/CD and DevOps',
    p3Pre: 'Once a test suite is running in ',
    p3Post:
      ' on every commit, new problems show up that only exist at scale, and AI-based analysis has started to help with a few of them:',
    li1Label: 'Flaky-test detection.',
    li1P:
      ' Distinguishing "this test fails sometimes because of a real intermittent bug" from "this test is just badly written" by analyzing historical pass/fail patterns, so a team doesn\'t waste hours chasing a ghost that isn\'t actually there.',
    li2Label: 'Intelligent test selection.',
    li2P:
      ' In a large test suite, running only the subset of tests actually likely to be affected by a given code change, to keep CI/CD fast instead of re-running everything on every commit.',
    li3Label: 'Log and anomaly analysis after a deploy.',
    li3P:
      ' Flagging unusual error-rate or latency patterns automatically, rather than relying on a human watching a dashboard and noticing something looks off.',
    p4Pre: 'See ',
    p4LinkText: 'What are related concepts for automatic testing?',
    p4Post: ' for what CI/CD is in the first place, if that term is new to you.',

    h3Heading: 'AI in agile discovery — turning user ideas into tests',
    p5: 'Before a test can be written, someone has to decide what\'s worth testing. AI can help with the step before that: synthesizing a pile of user interviews, support tickets, or feedback into concrete, testable acceptance criteria. "As a patient, I want to search NHS Wales for a service" is a vague goal; "search for a service and confirm the results page shows it" is something a test can actually check. AI can help draft that translation.',
    p6Pre:
      'This site\'s own sibling repos are a real worked example of the destination, even though they were written by hand rather than by an AI-discovery step: someone identified real user journeys on a real public site — find the home page, find "About Us", search for help — and turned them into concrete, asserted test scenarios. See ',
    aboutLinkText: 'About',
    p6Mid: ' for the full list, or ',
    p6Post: ' directly.',
    p7: "AI can help with the \"turn a vague idea into a concrete scenario\" step, but a human still has to confirm the AI understood the actual user need correctly. That step doesn't disappear — it moves, from writing the acceptance criteria by hand to reviewing the ones a tool drafted.",

    h4Heading: 'The honest caveat',
    calloutReadLabel: 'Read what a test asserts before you trust it',
    calloutReadP:
      "AI-assisted testing tools can get things wrong in ways worth naming specifically: hallucinating a selector that doesn't exist, misunderstanding what a user actually meant, or writing an assertion that's technically true but doesn't check the right thing — a test that passes without really verifying anything meaningful. The fix is the same one that applies to any contributor's pull request, human or AI: read what a test actually asserts before trusting that it passes. Don't just check for green.",
    p8Pre:
      "This site itself is a concrete example of that discipline being applied, not just described. This site was built with AI assistance (Claude), under a human maintainer's direction, and ",
    p8Post:
      ' in the repository is the honest account of how — what was AI-generated, what the human decided, and what was actually verified rather than assumed.',

    ctaBackToLearn: 'Back to Learn',
    ctaNext: 'Next: what are related concepts for automatic testing? →'
  };

  // No British/American/Oxford spelling divergence in this page's
  // vocabulary matters for the four English locales (the one candidate,
  // "analyzing", is already spelled the same way in the on-disk source and
  // isn't one of the -ise/-ize pairs Oxford spelling affects), so all four
  // English locales share one copy. See spec/locales/index.md.
  const CY: Messages = {
    title: 'Sut mae deallusrwydd artiffisial yn helpu profi awtomatig?',
    metaDescription:
      "Golwg ymarferol, wedi'i seilio ar ffeithiau, ar ble mae AI yn ymddangos mewn profi awtomatig heddiw: ysgrifennu a chynnal profion, CI/CD, a darganfod ystwyth — ynghyd â'r rhybudd gonest sy'n berthnasol i'r tri.",
    heading: 'Sut mae deallusrwydd artiffisial yn helpu profi awtomatig?',
    intro:
      "Mae offer AI wedi dod yn rhan real o sut mae profi awtomatig, CI/CD, a darganfod ystwyth yn gweithio heddiw. Mae'r dudalen hon yn ymdrin â thair ffordd y mae AI yn ymddangos yn y gwaith hwnnw, ac un rhybudd gonest sy'n berthnasol i'r tri.",

    h1Heading: 'AI ar gyfer ysgrifennu a chynnal profion',
    p1: "Gall drafft cyntaf o brawf ddod yn aml erbyn hyn o ddisgrifiad plaen o'r hyn a ddylai ddigwydd — \"ewch i'r dudalen chwilio, chwiliwch am X, gwiriwch fod y canlyniadau'n crybwyll X\" — yn hytrach na dechrau o ffeil wag. Mae sawl offeryn yn gwneud hyn heddiw, gan gynnwys codegen Playwright ei hun, sy'n recordio cliciau go iawn i sgript, wedi'i gyfuno â haen AI sy'n gadael i chi ddisgrifio bwriad mewn iaith naturiol a chael man cychwyn i'w olygu.",
    p2Pre: 'Mae rhai offer hefyd yn cymhwyso AI at ',
    locatorsLabel: 'leolyddion',
    p2Mid:
      " — y dewiswyr y mae prawf yn eu defnyddio i ddod o hyd i elfen ar y dudalen. Mae lleolydd \"hunan-wella\" yn defnyddio AI i ailleoli elfen pan fydd ei ddewisydd yn newid, er enghraifft pan fydd datblygwr yn ailenwi ",
    p2Post: ", yn lle i'r prawf dorri'n syml.",
    calloutWorthKnowingLabel: "Gwerth ei wybod",
    calloutPre:
      "Mae lleolyddion hunan-wella'n lleihau un math o freuder ond yn cyflwyno un arall: gall lleolydd hunan-wella glicio'n dawel ar yr elfen ",
    wrongLabel: 'anghywir',
    calloutPost:
      " — un sy'n edrych yn debyg yn unig i'r un roedd y prawf yn ei olygu — ac nid yw prawf sy'n dal i redeg ac yn dal i basio o reidrwydd yn brawf sy'n dal yn gywir. Trinwch y math hwn o offeryn fel cymorth rydych chi'n dal i'w adolygu, nid fel rhywbeth i gymryd lle deall beth mae'ch prawf yn ei wirio mewn gwirionedd.",

    h2Heading: 'AI mewn CI/CD a DevOps',
    p3Pre: 'Unwaith y bydd set brofion yn rhedeg mewn ',
    p3Post:
      " ar bob ymrwymiad, mae problemau newydd yn ymddangos nad ydynt yn bodoli ond ar raddfa fawr, ac mae dadansoddi seiliedig ar AI wedi dechrau helpu gyda rhai ohonynt:",
    li1Label: 'Canfod profion pigog.',
    li1P:
      " Gwahaniaethu rhwng \"mae'r prawf hwn yn methu weithiau oherwydd gwall ysbeidiol go iawn\" a \"dim ond wedi'i ysgrifennu'n wael yw'r prawf hwn\" drwy ddadansoddi patrymau pasio/methu hanesyddol, fel nad yw tîm yn gwastraffu oriau'n hela ysbryd nad yw yno mewn gwirionedd.",
    li2Label: 'Dewis profion deallus.',
    li2P:
      " Mewn set brofion fawr, dim ond rhedeg yr is-set o brofion y mae'n debygol iawn eu bod wedi'u heffeithio gan newid cod penodol, i gadw CI/CD yn gyflym yn lle ailredeg popeth ar bob ymrwymiad.",
    li3Label: 'Dadansoddi cofnodion ac anomaleddau ar ôl defnyddio.',
    li3P:
      " Codi baner ar batrymau cyfradd-gwall neu oedi anarferol yn awtomatig, yn hytrach na dibynnu ar berson yn gwylio dangosfwrdd ac yn sylwi bod rhywbeth yn edrych o'i le.",
    p4Pre: 'Gweler ',
    p4LinkText: 'Beth yw cysyniadau cysylltiedig ar gyfer profi awtomatig?',
    p4Post: " am beth yw CI/CD yn y lle cyntaf, os yw'r term hwnnw'n newydd i chi.",

    h3Heading: 'AI mewn darganfod ystwyth — troi syniadau defnyddwyr yn brofion',
    p5: 'Cyn y gellir ysgrifennu prawf, mae\'n rhaid i rywun benderfynu beth sy\'n werth ei brofi. Gall AI helpu gyda\'r cam cyn hynny: cyfosod pentwr o gyfweliadau defnyddwyr, tocynnau cymorth, neu adborth yn feini prawf derbyn pendant y gellir eu profi. Mae "Fel claf, rwyf am chwilio NHS Cymru am wasanaeth" yn nod amwys; mae "chwiliwch am wasanaeth a chadarnhau bod y dudalen ganlyniadau\'n ei ddangos" yn rhywbeth y gall prawf ei wirio mewn gwirionedd. Gall AI helpu i ddrafftio\'r cyfieithiad hwnnw.',
    p6Pre:
      "Mae ystorfeydd chwaer y safle hwn ei hun yn enghraifft wedi'i gweithio go iawn o'r cyrchfan, er iddynt gael eu hysgrifennu â llaw yn hytrach na chan gam darganfod-AI: nododd rhywun deithiau defnyddwyr go iawn ar safle cyhoeddus go iawn — dod o hyd i'r dudalen gartref, dod o hyd i \"About Us\", chwilio am gymorth — a'u troi'n senarios prawf pendant, wedi'u cadarnhau. Gweler ",
    aboutLinkText: 'Ynghylch',
    p6Mid: ' am y rhestr lawn, neu ',
    p6Post: ' yn uniongyrchol.',
    p7: "Gall AI helpu gyda'r cam \"troi syniad amwys yn senario pendant\", ond mae'n rhaid i berson barhau i gadarnhau bod yr AI wedi deall gwir angen y defnyddiwr yn gywir. Nid yw'r cam hwnnw'n diflannu — mae'n symud, o ysgrifennu'r meini prawf derbyn â llaw i adolygu'r rhai a ddrafftiwyd gan offeryn.",

    h4Heading: 'Y rhybudd gonest',
    calloutReadLabel: "Darllenwch beth mae prawf yn ei gadarnhau cyn ymddiried ynddo",
    calloutReadP:
      "Gall offer profi â chymorth AI wneud pethau'n anghywir mewn ffyrdd sy'n werth eu henwi'n benodol: rhithweld dewisydd nad yw'n bodoli, camddeall yr hyn roedd defnyddiwr yn ei olygu mewn gwirionedd, neu ysgrifennu cadarnhad sy'n dechnegol wir ond nad yw'n gwirio'r peth iawn — prawf sy'n pasio heb wirio unrhyw beth ystyrlon mewn gwirionedd. Yr un yw'r ateb sy'n berthnasol i gais tynnu unrhyw gyfranwr, dynol neu AI: darllenwch beth mae prawf yn ei gadarnhau mewn gwirionedd cyn ymddiried ei fod yn pasio. Peidiwch â dim ond gwirio am wyrdd.",
    p8Pre:
      "Mae'r safle hwn ei hun yn enghraifft bendant o'r ddisgyblaeth honno'n cael ei chymhwyso, nid dim ond ei disgrifio. Cafodd y safle hwn ei adeiladu â chymorth AI (Claude), o dan gyfarwyddyd cynhaliwr dynol, ac mae ",
    p8Post:
      " yn yr ystorfa yn gyfrif gonest o sut — beth oedd wedi'i gynhyrchu gan AI, beth benderfynodd y person, a beth gafodd ei wirio mewn gwirionedd yn hytrach na'i gymryd yn ganiataol.",

    ctaBackToLearn: 'Yn ôl i Dysgu',
    ctaNext: 'Nesaf: beth yw cysyniadau cysylltiedig ar gyfer profi awtomatig? →'
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
  <SectionHeading class="section-heading-start" heading={m.h1Heading} level={2} />

  <p>{m.p1}</p>

  <p>
    {m.p2Pre}<strong>{m.locatorsLabel}</strong>{m.p2Mid}<code>id</code>{m.p2Post}
  </p>

  <InformationCallout label={m.calloutWorthKnowingLabel}>
    <p>{m.calloutPre}<strong>{m.wrongLabel}</strong>{m.calloutPost}</p>
  </InformationCallout>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.h2Heading} level={2} />

  <p>
    {m.p3Pre}<a href={localeHref(locale, 'what-are-related-concepts-for-automatic-testing')}>CI/CD</a
    >{m.p3Post}
  </p>

  <ul>
    <li><strong>{m.li1Label}</strong>{m.li1P}</li>
    <li><strong>{m.li2Label}</strong>{m.li2P}</li>
    <li><strong>{m.li3Label}</strong>{m.li3P}</li>
  </ul>

  <p>
    {m.p4Pre}<a href={localeHref(locale, 'what-are-related-concepts-for-automatic-testing')}
      >{m.p4LinkText}</a
    >{m.p4Post}
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.h3Heading} level={2} />

  <p>{m.p5}</p>

  <p>
    {m.p6Pre}<a href={localeHref(locale, 'about')}>{m.aboutLinkText}</a>{m.p6Mid}<a
      href={nhsWalesExample.url}><code>{nhsWalesExample.name}</code></a
    >{m.p6Post}
  </p>

  <p>{m.p7}</p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.h4Heading} level={2} />

  <InformationCallout label={m.calloutReadLabel}>
    <p>{m.calloutReadP}</p>
  </InformationCallout>

  <p>
    {m.p8Pre}<a href={aiStatementUrl}><code>AI_STATEMENT.md</code></a>{m.p8Post}
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href={localeHref(locale, 'learn')}
      >{m.ctaBackToLearn}</CallToAction
    >
    <CallToAction
      class="button button-secondary"
      href={localeHref(locale, 'what-are-related-concepts-for-automatic-testing')}
      style="margin-left: 0.75rem;">{m.ctaNext}</CallToAction
    >
  </p>
</section>
