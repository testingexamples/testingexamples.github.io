<script lang="ts">
  import { SectionHeading, Separator, CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    introP: string;

    s1Heading: string;
    s1P1a: string;
    syntaxLabel: string;
    s1P1b: string;
    autocompleteLabel: string;
    s1P1c1: string;
    s1P1c2: string;
    s1P1c3: string;
    s1P2a: string;
    terminalLabel: string;
    s1P2b: string;
    debuggerLabel: string;
    s1P2c: string;
    s1P2d: string;
    extensionsLabel: string;
    s1P2e: string;
    s1P3Post1: string;
    s1P3Post2: string;
    s1AskAi: string[];

    s2Heading: string;
    s2P1a: string;
    gitLabel: string;
    s2P1b: string;
    s2P2Label: string;
    s2P2a: string;
    pullRequestLabel: string;
    s2P2b: string;
    s2P3a: string;
    examplesLinkText: string;
    s2P3b: string;
    aboutLinkText: string;
    s2P3c: string;
    s2P4Pre: string;
    s2P4Mid: string;
    s2P4Mid2: string;
    s2P4Post: string;
    s2AskAi: string[];

    s3Heading: string;
    s3P1a: string;
    agileLabel: string;
    s3P1b: string;
    discoveryLabel: string;
    s3P1c: string;
    s3P2a: string;
    intendedLabel: string;
    s3P2b: string;
    s3P3: string;
    s3P4Pre: string;
    s3P4Mid: string;
    s3P4Mid2: string;
    s3P4Post: string;
    s3AskAi: string[];

    s4Heading: string;
    unixCommandsLabel: string;
    s4P1Post: string;
    cmdLs: string;
    cmdCd: string;
    cmdMv: string;
    cmdMore: string;
    cmdNano: string;
    cmdGrep: string;
    cmdChmod: string;
    cmdCurl: string;
    cmdClaude: string;
    s4P2a: string;
    s4P2b: string;
    s4P2c: string;
    s4P2d: string;
    s4P2e: string;
    s4P3Pre: string;
    s4P3Mid: string;
    s4P3Post: string;
    s4AskAi: string[];

    s5Heading: string;
    cloudHostingLabel: string;
    s5P1Post: string;
    s5P2: string;
    s5P3Pre: string;
    s5P3Mid: string;
    s5P3Post: string;
    s5AskAi: string[];

    closingPre: string;
    closingLinkText: string;
    closingPost: string;
    ctaBackToLearn: string;
    ctaHowToStart: string;

    askAiHeading: string;
  };

  const EN_001: Messages = {
    title: 'What are related concepts for automatic testing?',
    metaDescription:
      'A beginner-friendly tour of five things that surround automatic testing: code editors, version control, agile discovery, Unix commands, and cloud hosting — and why each one matters once your test script grows up.',
    heading: 'What are related concepts for automatic testing?',
    intro:
      "You've just written your first browser automation script. It works — on your machine, right now. This page is about the handful of everyday tools and practices that turn that one script into something a whole team can rely on, months from now, without you standing over it.",
    introP:
      'Automatic testing doesn\'t happen in isolation. Around every reliable test suite sits a small cluster of ordinary software-development habits: a decent editor to write the code in, a way to track how that code changes over time, a way to make sure the tests actually get run, and — easy to forget, but just as real — a way of checking that the tests are protecting something a real person actually cares about. None of these are testing tools specifically. All of them make testing work. Below are five to know about, each explained in plain language, each with a link or two if you want to go deeper.',

    s1Heading: 'Code editors — e.g. Visual Studio Code',
    s1P1a:
      'You can write a test script in any plain text editor, but a proper code editor gives you back a surprising amount of help for free. ',
    syntaxLabel: 'Syntax highlighting',
    s1P1b:
      ' colours your code as you type, so a typo like a missing closing bracket jumps out visually instead of hiding until you run the script and get a confusing error. ',
    autocompleteLabel: 'Autocomplete',
    s1P1c1: " shows you what's actually available as you type — type ",
    s1P1c2: ' or ',
    s1P1c3:
      " in a modern editor and it'll list every method the library offers, which is often faster than searching the docs.",
    s1P2a: 'An ',
    terminalLabel: 'integrated terminal',
    s1P2b: ' lets you run your test script without leaving the editor window, and a ',
    debuggerLabel: 'built-in debugger',
    s1P2c:
      ' lets you pause a failing test mid-run and actually look at what the browser found on the page — the real state of things — rather than guessing from a trail of ',
    s1P2d: ' statements. On top of all that, editors support ',
    extensionsLabel: 'extensions',
    s1P2e:
      ": for example, Playwright ships its own official VS Code extension, which can run your tests from a sidebar and even generate new test code by recording your clicks in a real browser.",
    s1P3Post1:
      " is free, extremely widely used, and a very reasonable default if you don't already have a favourite editor. For a video introduction, watch ",
    s1P3Post2: ' (Learn Web Dev with Norbert, 15 min).',
    s1AskAi: [
      "I've never used a proper code editor before — what's the real difference between a code editor and something like Notepad, and is Visual Studio Code a reasonable place to start?",
      'I already use VS Code casually — what extensions or features would actually help me write and debug browser automation tests specifically?',
      'How do I set up a shared VS Code configuration — extensions, settings, debugger config — so my whole team gets a consistent test-writing experience, not just me?'
    ],

    s2Heading: 'Version control — git and GitHub',
    s2P1a:
      'Without version control, "fixing a test" usually means overwriting the old file and hoping you don\'t need the previous version back. ',
    gitLabel: 'Git',
    s2P1b:
      ' solves that by keeping every version of every file it tracks: it lets you see exactly what changed, when, and — via a commit message — why, and it lets you undo a bad change safely instead of trying to remember what the code used to look like.',
    s2P2Label: 'GitHub',
    s2P2a:
      ' (or a similar host, like GitLab or Bitbucket) adds sharing and collaboration on top of plain git. It gives your code a home other people can find, clone, and read; it lets someone suggest a change via a ',
    pullRequestLabel: 'pull request',
    s2P2b:
      ' — a proposed diff you can discuss, review, and merge (or not) — rather than just emailing a new copy of a file back and forth.',
    s2P3a: "This isn't abstract for this site: every demo repo linked from this site's ",
    examplesLinkText: 'examples',
    s2P3b: ' and ',
    aboutLinkText: 'about',
    s2P3c:
      " pages is a real, public git repository. You can clone any of them and read the full history of how that testing code came to look the way it does — that's not incidental, it's how real testing code actually gets managed.",
    s2P4Pre: 'Learn more at ',
    s2P4Mid: ' and ',
    s2P4Mid2: ', or watch GitHub\'s own ',
    s2P4Post: ' for a video introduction.',
    s2AskAi: [
      "I've never used git before — what does 'committing' and 'pushing' actually mean, in plain terms, and why do I need either one just to write a test script?",
      "I accidentally committed a change I want to undo — what's a safe way to undo it without losing other work?",
      "How should a team structure git branches and pull requests specifically around test code, so a flaky or broken test doesn't block unrelated changes?"
    ],

    s3Heading: 'Agile and working with users — discovery',
    s3P1a: 'In plain terms, ',
    agileLabel: 'agile',
    s3P1b:
      " means building software in short, repeatable cycles and checking in with the people who'll actually use it along the way — instead of building for months against a fixed spec and only finding out at the end that the spec was wrong. ",
    discoveryLabel: 'Discovery',
    s3P1c:
      ' is the specific practice of talking to real (or realistically representative) users early, to learn what they actually need and how they actually behave, before — and while — you build.',
    s3P2a:
      "Here's why that belongs on a testing page: a test suite can only check that software does what you ",
    intendedLabel: 'intended',
    s3P2b:
      ' it to do. It has no way of checking whether that intention was ever the right one. Discovery is what keeps the intention pointed at something a real person actually needs, so that all the careful automated checking you do afterwards is checking something worth checking.',
    s3P3:
      'It\'s concrete on this very site, too: the fixture examples on the home page, and the NHS Wales "About Us" and search scenarios this site\'s sibling repos exercise, exist because someone identified a real user journey worth protecting — signing up, searching, finding information on a health service site. Deciding that journey mattered enough to write a test for is itself a discovery activity, not a purely technical one.',
    s3P4Pre: 'Learn more at the ',
    s3P4Mid: " and the Nielsen Norman Group's ",
    s3P4Mid2: ', or watch ',
    s3P4Post: ' for a video introduction.',
    s3AskAi: [
      "What does 'discovery' actually mean in agile, and why would that matter to someone who just writes test scripts?",
      'How do I turn a vague user story into a concrete, testable scenario before I start automating it?',
      'How do experienced teams keep discovery and test-writing connected on an ongoing basis, rather than discovery happening once up front and the tests drifting from it later?'
    ],

    s4Heading: 'Unix commands — the command line',
    unixCommandsLabel: 'Unix commands',
    s4P1Post:
      ' are what almost every dev environment, CI runner, and Docker container speaks natively, no GUI required. You don\'t need to master all of them; a working knowledge of a couple dozen goes a very long way.',
    cmdLs: 'list files and directories',
    cmdCd: 'change directory',
    cmdMv: 'move a file or directory',
    cmdMore: "view a file's text, one page at a time",
    cmdNano: "edit a file's text, with simple commands",
    cmdGrep: 'find text in files',
    cmdChmod: 'change mode of file permissions',
    cmdCurl: 'call a URL such as an http web address',
    cmdClaude: 'AI agent',
    s4P2a: "Here's why that belongs on a testing page: ",
    s4P2b: ' and ',
    s4P2c:
      ' are how you find one specific failure in thousands of lines of test output or a log file, instead of scrolling. ',
    s4P2d:
      ' is how you sanity-check an API by hand — the same endpoint a UI test might also exercise — before writing the real test. ',
    s4P2e:
      ' is how a test script becomes directly runnable. And piping a few commands together is often how a CI step gets built without reaching for a "real" programming language just to glue two tools together.',
    s4P3Pre: "Learn more at Software Carpentry's ",
    s4P3Mid: ', or watch NetworkChuck\'s ',
    s4P3Post: ' for a fast-paced video introduction.',
    s4AskAi: [
      "I've never used a command line before — what are the handful of Unix commands actually worth learning first for someone getting into testing?",
      'How would I use grep to find every failing test in a huge CI log without scrolling through it by hand?',
      'How do I chain a few Unix commands together into a small, reliable script for a CI step, instead of reaching for a full programming language?'
    ],

    s5Heading: 'Cloud hosting for testing',
    cloudHostingLabel: 'Cloud hosting',
    s5P1Post:
      " means running infrastructure — servers, browsers, CI runners — on someone else's computers instead of ones you own, paying for what you actually use rather than buying and maintaining hardware yourself.",
    s5P2:
      "Here's why that belongs on a testing page: cloud browser farms let a test suite run against real devices and dozens of real browser and operating-system combinations that nobody could reasonably install and maintain locally. And cloud CI providers (GitHub Actions, mentioned below under CI/CD, is one) give every test run a fresh, disposable machine — so a test can't quietly pass only because of state a previous run happened to leave behind, a subtle bug class that's much harder to hide once every run starts from nothing.",
    s5P3Pre: "Learn more at AWS's ",
    s5P3Mid: ', or watch ',
    s5P3Post: ' for a video introduction.',
    s5AskAi: [
      "What does 'the cloud' actually mean in plain terms, and why would a test suite need it instead of just running on my own laptop?",
      "What's the practical difference between running my tests on my own machine versus a cloud browser farm, for a small team?",
      'How do I decide whether a growing test suite is genuinely ready to move to a cloud CI provider, and what should I check before making that switch?'
    ],

    closingPre: "None of these five are required to write your first script — see ",
    closingLinkText: 'How to start learning automatic testing?',
    closingPost:
      ' for that. But each one is worth picking up as your testing code grows past a single file on your own machine: a shared editor setup, a git history, an honest connection to what users actually need, and — once a whole team depends on your tests — the shared vocabulary for talking about where testing infrastructure, process, and quality actually live. Each is also a large, well-documented subject in its own right — this page is a map, not the territory.',
    ctaBackToLearn: 'Back to Learn',
    ctaHowToStart: 'How to start learning →',

    askAiHeading: 'Ask AI ideas'
  };

  // en-us: this page's prose contains two British-only spellings ("colours",
  // "favourite") that genuinely diverge for American readers — see
  // spec/locales/index.md.
  const EN_US: Messages = {
    ...EN_001,
    s1P1b:
      ' colors your code as you type, so a typo like a missing closing bracket jumps out visually instead of hiding until you run the script and get a confusing error. ',
    s1P3Post1:
      " is free, extremely widely used, and a very reasonable default if you don't already have a favorite editor. For a video introduction, watch "
  };

  // No -ise/-ize divergence occurs in this page's vocabulary, so Oxford
  // spelling reuses EN_001 as-is.
  const CY: Messages = {
    title: 'Beth yw cysyniadau cysylltiedig ar gyfer profi awtomatig?',
    metaDescription:
      "Taith gyfeillgar i ddechreuwyr o bum peth sy'n amgylchynu profi awtomatig: golygyddion cod, rheoli fersiwn, darganfod ystwyth, gorchmynion Unix, a chynnal cwmwl — a pham mae pob un yn bwysig unwaith y bydd eich sgript brawf yn tyfu i fyny.",
    heading: 'Beth yw cysyniadau cysylltiedig ar gyfer profi awtomatig?',
    intro:
      "Rydych chi newydd ysgrifennu eich sgript awtomeiddio porwr gyntaf. Mae'n gweithio — ar eich peiriant, ar hyn o bryd. Mae'r dudalen hon yn ymwneud â'r llond dwrn o offer ac arferion bob dydd sy'n troi'r sgript honno'n rhywbeth y gall tîm cyfan ddibynnu arno, misoedd o hyn ymlaen, heb i chi sefyll drosto.",
    introP:
      "Nid yw profi awtomatig yn digwydd ar ei ben ei hun. O amgylch pob set brofion ddibynadwy mae clwstwr bach o arferion datblygu meddalwedd cyffredin: golygydd gweddus i ysgrifennu'r cod ynddo, ffordd o olrhain sut mae'r cod hwnnw'n newid dros amser, ffordd o wneud yn siŵr bod y profion mewn gwirionedd yn cael eu rhedeg, ac — hawdd ei anghofio, ond yr un mor real — ffordd o wirio bod y profion yn amddiffyn rhywbeth y mae person go iawn wir yn poeni amdano. Nid yw'r un o'r rhain yn offer profi yn benodol. Mae pob un ohonynt yn gwneud i brofi weithio. Isod mae pump i wybod amdanynt, pob un wedi'i esbonio mewn iaith blaen, pob un â dolen neu ddwy os ydych am fynd yn ddyfnach.",

    s1Heading: 'Golygyddion cod — e.e. Visual Studio Code',
    s1P1a:
      "Gallwch ysgrifennu sgript brawf mewn unrhyw olygydd testun plaen, ond mae golygydd cod priodol yn rhoi cryn dipyn o gymorth i chi am ddim. ",
    syntaxLabel: 'Amlygu cystrawen',
    s1P1b:
      " yn lliwio'ch cod wrth i chi deipio, fel bod teipo camgymeriad fel bracer cau ar goll yn neidio allan yn weledol yn lle cuddio nes i chi redeg y sgript a chael gwall dryslyd. ",
    autocompleteLabel: 'Awtogwblhau',
    s1P1c1: " yn dangos i chi beth sydd ar gael mewn gwirionedd wrth i chi deipio — teipiwch ",
    s1P1c2: ' neu ',
    s1P1c3:
      " mewn golygydd modern a bydd yn rhestru pob dull mae'r llyfrgell yn ei gynnig, sy'n aml yn gyflymach na chwilio'r ddogfennaeth.",
    s1P2a: 'Mae ',
    terminalLabel: "derfynell integredig",
    s1P2b: " yn gadael i chi redeg eich sgript brawf heb adael ffenestr y golygydd, ac mae ",
    debuggerLabel: "dadfygiwr wedi'i adeiladu i mewn",
    s1P2c:
      " yn gadael i chi oedi prawf sy'n methu hanner ffordd drwodd ac edrych mewn gwirionedd ar beth ddaeth y porwr o hyd iddo ar y dudalen — gwir gyflwr pethau — yn hytrach na dyfalu o gyfres o ddatganiadau ",
    s1P2d: ". Ar ben hynny i gyd, mae golygyddion yn cefnogi ",
    extensionsLabel: 'estyniadau',
    s1P2e:
      ": er enghraifft, mae Playwright yn cynhyrchu ei estyniad VS Code swyddogol ei hun, sy'n gallu rhedeg eich profion o far ochr a hyd yn oed gynhyrchu cod prawf newydd drwy recordio'ch cliciau mewn porwr go iawn.",
    s1P3Post1:
      " yn rhad ac am ddim, yn cael ei ddefnyddio'n eang iawn, ac yn ddewis rhagosodedig rhesymol iawn os nad oes gennych olygydd ffefryn eisoes. Ar gyfer cyflwyniad fideo, gwyliwch ",
    s1P3Post2: ' (Learn Web Dev with Norbert, 15 munud).',
    s1AskAi: [
      "Dydw i erioed wedi defnyddio golygydd cod priodol o'r blaen — beth yw'r gwahaniaeth gwirioneddol rhwng golygydd cod a rhywbeth fel Notepad, ac a yw Visual Studio Code yn fan cychwyn rhesymol?",
      "Rwy'n defnyddio VS Code yn achlysurol yn barod — pa estyniadau neu nodweddion fyddai wir yn fy helpu i ysgrifennu a dad-fygio profion awtomeiddio porwr yn benodol?",
      "Sut ydw i'n sefydlu ffurfweddiad VS Code a rennir — estyniadau, gosodiadau, ffurfweddiad dadfygiwr — fel bod fy nhîm cyfan yn cael profiad ysgrifennu-prawf cyson, nid dim ond fi?"
    ],

    s2Heading: 'Rheoli fersiwn — git a GitHub',
    s2P1a:
      "Heb reoli fersiwn, mae \"trwsio prawf\" fel arfer yn golygu trosysgrifo'r hen ffeil a gobeithio nad oes angen y fersiwn flaenorol yn ôl arnoch. Mae ",
    gitLabel: 'Git',
    s2P1b:
      " yn datrys hynny drwy gadw pob fersiwn o bob ffeil y mae'n ei olrhain: mae'n gadael i chi weld yn union beth newidiodd, pryd, a — drwy neges ymrwymo — pam, ac mae'n gadael i chi ddadwneud newid gwael yn ddiogel yn lle ceisio cofio sut roedd y cod arfer edrych.",
    s2P2Label: 'GitHub',
    s2P2a:
      " (neu westeiwr tebyg, fel GitLab neu Bitbucket) yn ychwanegu rhannu a chydweithio ar ben git plaen. Mae'n rhoi cartref i'ch cod y gall pobl eraill ddod o hyd iddo, ei glonio, a'i ddarllen; mae'n gadael i rywun awgrymu newid drwy ",
    pullRequestLabel: 'pull request',
    s2P2b:
      " — diff arfaethedig y gallwch ei drafod, ei adolygu, a'i uno (neu beidio) — yn lle dim ond e-bostio copi newydd o ffeil yn ôl ac ymlaen.",
    s2P3a: "Nid yw hyn yn haniaethol i'r safle hwn: mae pob ystorfa arddangos wedi'i chysylltu o dudalennau ",
    examplesLinkText: 'enghreifftiau',
    s2P3b: ' ac ',
    aboutLinkText: 'ynghylch',
    s2P3c:
      " y safle hwn yn ystorfa git go iawn, gyhoeddus. Gallwch glonio unrhyw un ohonynt a darllen hanes llawn sut y daeth y cod profi hwnnw i edrych fel y mae — nid yw hynny'n ddigwyddiadol, dyna sut mae cod profi go iawn wir yn cael ei reoli.",
    s2P4Pre: 'Dysgwch fwy yn ',
    s2P4Mid: ' ac yn ',
    s2P4Mid2: ', neu gwyliwch ',
    s2P4Post: ' ar gyfer cyflwyniad fideo.',
    s2AskAi: [
      "Dydw i erioed wedi defnyddio git o'r blaen — beth mae 'ymrwymo' a 'gwthio' yn ei olygu mewn gwirionedd, mewn termau plaen, a pham mae angen y naill neu'r llall arnaf jyst i ysgrifennu sgript brawf?",
      "Fe wnes i ymrwymo newid ar ddamwain rydw i am ei ddadwneud — beth yw ffordd ddiogel o'i ddadwneud heb golli gwaith arall?",
      "Sut dylai tîm strwythuro canghennau git a pull requests yn benodol o amgylch cod profi, fel nad yw prawf pigog neu wedi torri'n rhwystro newidiadau heb gysylltiad?"
    ],

    s3Heading: 'Ystwyth a gweithio gyda defnyddwyr — darganfod',
    s3P1a: 'Mewn termau plaen, mae ',
    agileLabel: 'agile',
    s3P1b:
      " yn golygu adeiladu meddalwedd mewn cylchoedd byr, ailadroddadwy a chysylltu â'r bobl a fydd wir yn ei ddefnyddio ar hyd y ffordd — yn lle adeiladu am fisoedd yn erbyn sbeswn sefydlog a dim ond dod o hyd ar y diwedd bod y sbeswn yn anghywir. Mae ",
    discoveryLabel: 'Discovery',
    s3P1c:
      " yn arfer penodol o siarad â defnyddwyr go iawn (neu rai cynrychioliadol yn realistig) yn gynnar, i ddysgu beth maen nhw ei angen mewn gwirionedd a sut maen nhw'n ymddwyn mewn gwirionedd, cyn — ac wrth — i chi adeiladu.",
    s3P2a:
      "Dyma pam mae hynny'n perthyn ar dudalen profi: gall set brofion ond wirio bod meddalwedd yn gwneud yr hyn roeddech chi'n ",
    intendedLabel: 'bwriadu',
    s3P2b:
      " iddo'i wneud. Nid oes ganddo unrhyw ffordd o wirio a oedd y bwriad hwnnw byth yn un cywir. Darganfod yw'r hyn sy'n cadw'r bwriad wedi'i anelu at rywbeth y mae person go iawn wir ei angen, fel bod yr holl wirio awtomataidd gofalus rydych chi'n ei wneud wedyn yn gwirio rhywbeth sy'n werth ei wirio.",
    s3P3:
      "Mae'n bendant ar y safle hwn ei hun, hefyd: mae'r enghreifftiau ffwythiant ar y dudalen gartref, a'r senarios \"About Us\" a chwilio NHS Cymru y mae ystorfeydd chwaer y safle hwn yn eu hymarfer, yn bodoli oherwydd i rywun nodi taith defnyddiwr go iawn yn werth ei diogelu — cofrestru, chwilio, dod o hyd i wybodaeth ar safle gwasanaeth iechyd. Mae penderfynu bod y daith honno'n bwysig ddigon i ysgrifennu prawf ar ei chyfer yn weithgaredd darganfod ynddo'i hun, nid un technegol yn unig.",
    s3P4Pre: 'Dysgwch fwy yn y ',
    s3P4Mid: " ac yng nghyflwyniad Nielsen Norman Group i ",
    s3P4Mid2: ', neu gwyliwch ',
    s3P4Post: ' ar gyfer cyflwyniad fideo.',
    s3AskAi: [
      "Beth mae 'darganfod' yn ei olygu mewn gwirionedd mewn agile, a pham byddai hynny'n bwysig i rywun sydd ond yn ysgrifennu sgriptiau prawf?",
      "Sut ydw i'n troi stori defnyddiwr amwys yn senario pendant, y gellir ei brofi, cyn i mi ddechrau ei hawtomeiddio?",
      "Sut mae timau profiadol yn cadw darganfod ac ysgrifennu profion yn gysylltiedig yn barhaus, yn lle i ddarganfod ddigwydd unwaith ymlaen llaw a'r profion yn drifftio oddi wrtho'n ddiweddarach?"
    ],

    s4Heading: 'Gorchmynion Unix — y llinell orchymyn',
    unixCommandsLabel: 'Gorchmynion Unix',
    s4P1Post:
      " yw'r hyn y mae bron pob amgylchedd datblygu, rhedwr CI, a chynhwysydd Docker yn ei siarad yn naturiol, heb angen GUI. Nid oes angen i chi feistroli pob un ohonynt; mae gwybodaeth weithio o ryw ddau ddwsin yn mynd yn bell iawn.",
    cmdLs: 'rhestru ffeiliau a chyfeiriaduron',
    cmdCd: 'newid cyfeiriadur',
    cmdMv: 'symud ffeil neu gyfeiriadur',
    cmdMore: 'gweld testun ffeil, un dudalen ar y tro',
    cmdNano: 'golygu testun ffeil, gyda gorchmynion syml',
    cmdGrep: 'dod o hyd i destun mewn ffeiliau',
    cmdChmod: 'newid modd caniatâd ffeil',
    cmdCurl: 'galw URL fel cyfeiriad gwe http',
    cmdClaude: 'asiant AI',
    s4P2a: "Dyma pam mae hynny'n perthyn ar dudalen profi: ",
    s4P2b: ' a ',
    s4P2c:
      " yw sut rydych chi'n dod o hyd i un methiant penodol ymhlith miloedd o linellau o allbwn prawf neu ffeil gofnod, yn lle sgrolio. ",
    s4P2d:
      " yw sut rydych chi'n gwirio-call API â llaw — yr un pwynt terfyn y gallai prawf UI ei ymarfer hefyd — cyn ysgrifennu'r prawf go iawn. ",
    s4P2e:
      " yw sut mae sgript brawf yn dod yn rhedeg-adwy'n uniongyrchol. Ac mae piben ychydig o orchmynion at ei gilydd yn aml yn sut mae cam CI'n cael ei adeiladu heb estyn am iaith raglennu \"go iawn\" jyst i ludo dau offeryn at ei gilydd.",
    s4P3Pre: "Dysgwch fwy yng ngwers cragen Unix Software Carpentry, ",
    s4P3Mid: ', neu gwyliwch NetworkChuck yn ',
    s4P3Post: ' ar gyfer cyflwyniad fideo cyflym ei gyflymder.',
    s4AskAi: [
      "Dydw i erioed wedi defnyddio llinell orchymyn o'r blaen — beth yw'r llond dwrn o orchmynion Unix sy'n wirioneddol werth eu dysgu gyntaf i rywun sy'n dechrau ym myd profi?",
      "Sut fyddwn i'n defnyddio grep i ddod o hyd i bob prawf sy'n methu mewn cofnod CI enfawr heb sgrolio drwyddo â llaw?",
      "Sut ydw i'n cadwyno ychydig o orchmynion Unix at ei gilydd yn sgript fach, ddibynadwy ar gyfer cam CI, yn lle estyn am iaith raglennu lawn?"
    ],

    s5Heading: 'Cynnal cwmwl ar gyfer profi',
    cloudHostingLabel: 'Cynnal cwmwl',
    s5P1Post:
      " yn golygu rhedeg seilwaith — gweinyddion, porwyr, rhedwyr CI — ar gyfrifiaduron rhywun arall yn lle rhai rydych chi'n berchen arnyn nhw, gan dalu am yr hyn rydych chi'n ei ddefnyddio mewn gwirionedd yn hytrach na phrynu a chynnal caledwedd eich hun.",
    s5P2:
      "Dyma pam mae hynny'n perthyn ar dudalen profi: mae ffermydd porwr cwmwl yn gadael i set brofion redeg yn erbyn dyfeisiau go iawn a dwsinau o gyfuniadau porwr a system-weithredu go iawn na allai neb yn rhesymol eu gosod a'u cynnal yn lleol. Ac mae darparwyr CI cwmwl (mae GitHub Actions, y soniwyd amdano isod o dan CI/CD, yn un) yn rhoi peiriant ffres, tafladwy i bob rhediad prawf — fel na all prawf basio'n dawel dim ond oherwydd cyflwr y digwyddodd rhediad blaenorol ei adael ar ôl, math cynnil o wall sy'n llawer anos ei guddio unwaith mae pob rhediad yn dechrau o ddim.",
    s5P3Pre: 'Dysgwch fwy yng nghyflwyniad AWS i ',
    s5P3Mid: ', neu gwyliwch ',
    s5P3Post: ' ar gyfer cyflwyniad fideo.',
    s5AskAi: [
      "Beth mae 'y cwmwl' yn ei olygu mewn gwirionedd mewn termau plaen, a pham fyddai angen set brofion arno yn lle dim ond rhedeg ar fy liniadur fy hun?",
      "Beth yw'r gwahaniaeth ymarferol rhwng rhedeg fy mhrofion ar fy mheiriant fy hun o gymharu â fferm porwr cwmwl, ar gyfer tîm bach?",
      "Sut ydw i'n penderfynu a yw set brofion sy'n tyfu wir yn barod i symud i ddarparwr CI cwmwl, a beth ddylwn i ei wirio cyn gwneud y newid hwnnw?"
    ],

    closingPre: "Nid oes angen yr un o'r pump hyn i ysgrifennu eich sgript gyntaf — gweler ",
    closingLinkText: 'Sut i ddechrau dysgu profi awtomatig?',
    closingPost:
      " ar gyfer hynny. Ond mae pob un yn werth ei godi wrth i'ch cod profi dyfu y tu hwnt i un ffeil ar eich peiriant eich hun: gosodiad golygydd a rennir, hanes git, cysylltiad gonest â'r hyn y mae defnyddwyr wir ei angen, ac — unwaith y bydd tîm cyfan yn dibynnu ar eich profion — yr eirfa a rennir ar gyfer siarad am ble mae seilwaith, proses, ac ansawdd profi wir yn byw. Mae pob un hefyd yn bwnc mawr, wedi'i ddogfennu'n dda yn ei hawl ei hun — mae'r dudalen hon yn fap, nid y tiriogaeth.",
    ctaBackToLearn: 'Yn ôl i Dysgu',
    ctaHowToStart: 'Sut i ddechrau dysgu →',

    askAiHeading: 'Syniadau gofyn i AI'
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_US,
    'cy-gb': CY,
    'cy-001': CY
  };

  const m = $derived(MESSAGES[locale]);

  const UNIX_COMMANDS = $derived(
    [
      { code: 'ls', description: m.cmdLs },
      { code: 'cd', description: m.cmdCd },
      { code: 'mv', description: m.cmdMv },
      { code: 'more', description: m.cmdMore },
      { code: 'nano', description: m.cmdNano },
      { code: 'grep', description: m.cmdGrep },
      { code: 'chmod', description: m.cmdChmod },
      { code: 'curl', description: m.cmdCurl },
      { code: 'claude', description: m.cmdClaude }
    ]
  );
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
  <p>{m.introP}</p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.s1Heading} level={2} />

  <p>
    {m.s1P1a}<strong>{m.syntaxLabel}</strong>{m.s1P1b}<strong>{m.autocompleteLabel}</strong
    >{m.s1P1c1}<code>page.</code>{m.s1P1c2}<code>driver.</code>{m.s1P1c3}
  </p>

  <p>
    {m.s1P2a}<strong>{m.terminalLabel}</strong>{m.s1P2b}<strong>{m.debuggerLabel}</strong
    >{m.s1P2c}<code>console.log</code>{m.s1P2d}<strong>{m.extensionsLabel}</strong>{m.s1P2e}
  </p>

  <p>
    <a href="https://code.visualstudio.com/">Visual Studio Code</a>{m.s1P3Post1}<a
      href="https://www.youtube.com/watch?v=rPITZvwyoMc"
      >"Master Visual Studio Code Crash Course for beginners in just 15 min"</a
    >{m.s1P3Post2}
  </p>

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

  <p>
    {m.s2P1a}<strong>{m.gitLabel}</strong>{m.s2P1b}
  </p>

  <p>
    <strong>{m.s2P2Label}</strong>{m.s2P2a}<em>{m.pullRequestLabel}</em>{m.s2P2b}
  </p>

  <p>
    {m.s2P3a}<a href={localeHref(locale, 'examples')}>{m.examplesLinkText}</a>{m.s2P3b}<a
      href={localeHref(locale, 'about')}>{m.aboutLinkText}</a
    >{m.s2P3c}
  </p>

  <p>
    {m.s2P4Pre}<a href="https://git-scm.com/">git-scm.com</a>{m.s2P4Mid}<a
      href="https://docs.github.com/get-started">GitHub's own "Get started" docs</a
    >{m.s2P4Mid2}<a href="https://www.youtube.com/watch?v=r8jQ9hVA2qs"
      >"A brief introduction to Git for beginners"</a
    >{m.s2P4Post}
  </p>

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
    {m.s3P1a}<strong>{m.agileLabel}</strong>{m.s3P1b}<strong>{m.discoveryLabel}</strong>{m.s3P1c}
  </p>

  <p>
    {m.s3P2a}<em>{m.intendedLabel}</em>{m.s3P2b}
  </p>

  <p>{m.s3P3}</p>

  <p>
    {m.s3P4Pre}<a href="https://agilemanifesto.org/">Agile Manifesto</a>{m.s3P4Mid}<a
      href="https://www.nngroup.com/articles/user-research/">introduction to user research</a
    >{m.s3P4Mid2}<a href="https://www.youtube.com/watch?v=vLpQg-al2RU"
      >"Agile Methodology Explained in 5 Minutes"</a
    >{m.s3P4Post}
  </p>

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

  <p>
    <strong>{m.unixCommandsLabel}</strong>{m.s4P1Post}
  </p>

  <ul>
    {#each UNIX_COMMANDS as cmd (cmd.code)}
      <li><code>{cmd.code}</code> = {cmd.description}</li>
    {/each}
  </ul>

  <p>
    {m.s4P2a}<code>grep</code>{m.s4P2b}<code>sed</code>{m.s4P2c}<code>curl</code
    >{m.s4P2d}<code>chmod +x</code>{m.s4P2e}
  </p>

  <p>
    {m.s4P3Pre}<a href="https://swcarpentry.github.io/shell-novice/">Unix shell lesson</a
    >{m.s4P3Mid}<a href="https://www.youtube.com/watch?v=gd7BXuUQ91w"
      >"60 Linux Commands you NEED to know (in 10 minutes)"</a
    >{m.s4P3Post}
  </p>

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

  <p>
    <strong>{m.cloudHostingLabel}</strong>{m.s5P1Post}
  </p>

  <p>{m.s5P2}</p>

  <p>
    {m.s5P3Pre}<a href="https://aws.amazon.com/what-is-cloud-computing/">introduction to cloud computing</a
    >{m.s5P3Mid}<a href="https://www.youtube.com/watch?v=8sNAPqJ_c7c"
      >"A Beginner's Guide To Cloud Computing In Under 8 Minutes"</a
    >{m.s5P3Post}
  </p>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.s5AskAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <p>
    {m.closingPre}<a href={localeHref(locale, 'how-to-start-learning-automatic-testing')}
      >{m.closingLinkText}</a
    >{m.closingPost}
  </p>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href={localeHref(locale, 'learn')}
      >{m.ctaBackToLearn}</CallToAction
    >
    <CallToAction
      class="button button-secondary"
      href={localeHref(locale, 'how-to-start-learning-automatic-testing')}
      style="margin-left: 0.75rem;">{m.ctaHowToStart}</CallToAction
    >
  </p>
</section>
