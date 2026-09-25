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

  const ZH: Messages = {
    title: '自动化测试的相关概念是什么？',
    metaDescription:
      '一次对自动化测试周边五件事的新手友好介绍：代码编辑器、版本控制、敏捷探索、Unix 命令和云托管——以及为什么当你的测试脚本“长大”之后，每一件都会变得重要。',
    heading: '自动化测试的相关概念是什么？',
    intro:
      '你刚刚写出了第一个浏览器自动化脚本。它能运行——就在你的电脑上，现在就能跑。这个页面要讲的，是把那一个脚本变成几个月后整个团队都能依赖、而不需要你时刻盯着的那一小撮日常工具和实践。',
    introP:
      '自动化测试不是孤立存在的。每一个可靠的测试套件周围，都有一小圈普通的软件开发习惯：一个像样的编辑器来写代码，一种追踪代码随时间变化的方式，一种确保测试真的会被运行的方式，以及——容易被忽略，但同样真实——一种检查这些测试是否真的在保护某个真实用户在意的东西的方式。这些都不是专门的测试工具。但它们全部都让测试真正发挥作用。下面是值得了解的五件事，每一件都用通俗的语言解释，并附上一两个链接供你深入了解。',

    s1Heading: '代码编辑器——例如 Visual Studio Code',
    s1P1a: '你可以用任何纯文本编辑器写测试脚本，但一个正经的代码编辑器能免费给你意想不到的帮助。',
    syntaxLabel: '语法高亮',
    s1P1b:
      '会在你输入代码时为其上色，因此像漏掉一个右括号这样的拼写错误会在视觉上一下子跳出来，而不是一直隐藏，直到你运行脚本得到一个莫名其妙的错误。',
    autocompleteLabel: '自动补全',
    s1P1c1: '会在你输入时实时显示实际可用的内容——在现代编辑器里输入',
    s1P1c2: '或',
    s1P1c3: '，它就会列出该库提供的每一个方法，这通常比查文档更快。',
    s1P2a: '一个',
    terminalLabel: '集成终端',
    s1P2b: '让你无需离开编辑器窗口就能运行测试脚本，而一个',
    debuggerLabel: '内置调试器',
    s1P2c:
      '则让你能在一个失败的测试运行到一半时暂停下来，真正查看浏览器在页面上找到了什么——事物的真实状态——而不是靠一堆',
    s1P2d: '语句去猜测。除此之外，编辑器还支持',
    extensionsLabel: '扩展',
    s1P2e:
      '：例如，Playwright 自带官方 VS Code 扩展，可以从侧边栏运行你的测试，甚至能通过录制你在真实浏览器中的点击操作来生成新的测试代码。',
    s1P3Post1: '免费、使用极其广泛，如果你还没有喜欢的编辑器，它是一个非常合理的默认选择。想看视频介绍，可以观看',
    s1P3Post2: '（Learn Web Dev with Norbert，15 分钟）。',
    s1AskAi: [
      '我以前从没用过正经的代码编辑器——代码编辑器和记事本之类的东西实际有什么区别？Visual Studio Code 是一个合理的起点吗？',
      '我已经偶尔在用 VS Code 了——有哪些扩展或功能能真正帮助我专门编写和调试浏览器自动化测试？',
      '我该如何设置一套团队共享的 VS Code 配置——扩展、设置、调试器配置——让我的整个团队都获得一致的测试编写体验，而不只是我一个人？'
    ],

    s2Heading: '版本控制——git 和 GitHub',
    s2P1a: '没有版本控制，“修复一个测试”通常意味着覆盖旧文件，然后祈祷自己不需要把之前的版本要回来。',
    gitLabel: 'Git',
    s2P1b:
      '通过保留它所追踪的每个文件的每一个版本来解决这个问题：它让你能确切看到什么发生了改变、何时改变的，以及——通过提交信息——为什么改变，并让你能安全地撤销一次糟糕的改动，而不用去回想代码原来是什么样子的。',
    s2P2Label: 'GitHub',
    s2P2a:
      '（或类似的托管平台，比如 GitLab 或 Bitbucket）在纯 git 之上增加了分享和协作功能。它为你的代码提供了一个别人可以找到、克隆和阅读的地方；它让别人可以通过一个',
    pullRequestLabel: 'pull request（拉取请求）',
    s2P2b: '——一份你可以讨论、审查并合并（或不合并）的改动提案——来提出修改建议，而不用来回发邮件传文件的新版本。',
    s2P3a: '这对本站来说并不是抽象概念：本站',
    examplesLinkText: '示例',
    s2P3b: '和',
    aboutLinkText: '关于',
    s2P3c:
      '页面链接的每一个演示仓库都是一个真实、公开的 git 仓库。你可以克隆其中任何一个，阅读那份测试代码是如何一步步变成现在这个样子的完整历史——这不是偶然的，真实的测试代码就是这样被管理的。',
    s2P4Pre: '可以进一步阅读',
    s2P4Mid: '和',
    s2P4Mid2: '，或观看 GitHub 自己的',
    s2P4Post: '视频介绍。',
    s2AskAi: [
      '我以前从没用过 git——用简单的话说，“commit”和“push”到底是什么意思？为什么我只是想写个测试脚本，也需要用到它们？',
      '我不小心提交了一个想撤销的改动——有什么安全的方法可以撤销它而不丢失其他工作？',
      '团队应该如何专门围绕测试代码来组织 git 分支和 pull request，才能让一个不稳定或损坏的测试不会阻塞其他无关的改动？'
    ],

    s3Heading: '敏捷与用户协作——探索',
    s3P1a: '用简单的话说，',
    agileLabel: '敏捷（agile）',
    s3P1b:
      '是指以短小、可重复的周期来构建软件，并在过程中不断与真正会使用它的人核对——而不是照着一份固定的规格文档埋头做上几个月，最后才发现规格本身就是错的。',
    discoveryLabel: '探索（Discovery）',
    s3P1c: '则是一种具体的实践：在你动手构建之前和构建过程中，尽早与真实（或足够具有代表性）的用户交流，了解他们真正的需求以及他们真实的行为方式。',
    s3P2a: '这就是为什么它出现在一个测试相关的页面上：测试套件只能检查软件是否做到了你',
    intendedLabel: '打算',
    s3P2b:
      '让它做的事情。它没有办法检查这个“打算”本身是否曾经是正确的。而探索正是让这个“打算”始终指向真实用户真正需要的东西，这样你之后所做的一切细致的自动化检查，才是在检查真正值得检查的东西。',
    s3P3:
      '这在本站上也是具体可见的：主页上的测试夹具示例，以及本站姐妹仓库所演练的 NHS Wales “About Us”和搜索场景，之所以存在，是因为有人识别出了一个值得保护的真实用户旅程——注册、搜索、在一个医疗服务网站上找到信息。判断这段旅程重要到值得为它写一个测试，本身就是一项探索活动，而不仅仅是一项技术活动。',
    s3P4Pre: '可以进一步阅读',
    s3P4Mid: '，以及 Nielsen Norman Group 的',
    s3P4Mid2: '，或观看',
    s3P4Post: '视频介绍。',
    s3AskAi: [
      '在敏捷中，“探索”到底是什么意思？为什么这对一个只负责写测试脚本的人也很重要？',
      '在开始自动化之前，我该如何把一个模糊的用户故事变成一个具体、可测试的场景？',
      '经验丰富的团队是如何让探索和测试编写持续保持联系，而不是让探索只在最初做一次，之后测试就慢慢与它脱节的？'
    ],

    s4Heading: 'Unix 命令——命令行',
    unixCommandsLabel: 'Unix 命令',
    s4P1Post:
      '是几乎每个开发环境、CI 运行器和 Docker 容器都能原生识别的语言，不需要任何图形界面。你不需要精通所有命令；能熟练使用其中二十来个，就已经非常有用了。',
    cmdLs: '列出文件和目录',
    cmdCd: '切换目录',
    cmdMv: '移动文件或目录',
    cmdMore: '逐页查看文件文字内容',
    cmdNano: '用简单的命令编辑文件文字内容',
    cmdGrep: '在文件中查找文字',
    cmdChmod: '修改文件权限模式',
    cmdCurl: '调用一个 URL，例如某个 http 网址',
    cmdClaude: 'AI 代理',
    s4P2a: '这就是为什么它出现在一个测试相关的页面上：',
    s4P2b: '和',
    s4P2c: '是你在成千上万行测试输出或日志文件中找到某一个具体失败的方式，而不用一行行滚动查看。',
    s4P2d: '是你在写真正的测试之前，手动“健全性检查”一个 API——也就是 UI 测试可能会用到的同一个接口——的方式。',
    s4P2e: '是一个测试脚本变得可以直接运行的方式。而把几个命令用管道串在一起，往往就是在不需要动用一门“正经”编程语言来粘合两个工具的情况下，构建出一个 CI 步骤的方式。',
    s4P3Pre: '可以进一步阅读 Software Carpentry 的',
    s4P3Mid: '，或观看 NetworkChuck 的',
    s4P3Post: '，作为一个节奏很快的视频介绍。',
    s4AskAi: [
      '我以前从没用过命令行——对于一个刚接触测试的人来说，最值得先学的几个 Unix 命令是哪些？',
      '我该如何用 grep 在一份庞大的 CI 日志中找到每一个失败的测试，而不用手动一行行滚动查看？',
      '我该如何把几个 Unix 命令串联成一个小巧、可靠的脚本用于 CI 步骤，而不是动用一整套编程语言？'
    ],

    s5Heading: '用于测试的云托管',
    cloudHostingLabel: '云托管',
    s5P1Post:
      '是指在别人的计算机上运行基础设施——服务器、浏览器、CI 运行器——而不是自己拥有的机器上，按实际使用量付费，而不用自己购买和维护硬件。',
    s5P2:
      '这就是为什么它出现在一个测试相关的页面上：云端浏览器集群让测试套件能够针对真实设备和几十种真实的浏览器/操作系统组合运行，而这些组合没有人能合理地在本地全部安装和维护。而云端 CI 提供商（下面提到的 CI/CD 部分中的 GitHub Actions 就是其中之一）会为每一次测试运行提供一台全新的、用完即弃的机器——这样测试就不可能仅仅因为上一次运行碰巧留下的某些状态而悄悄通过，一旦每次运行都从零开始，这类隐蔽的缺陷就更难藏身。',
    s5P3Pre: '可以进一步阅读 AWS 的',
    s5P3Mid: '，或观看',
    s5P3Post: '视频介绍。',
    s5AskAi: [
      '用简单的话说，“云”到底是什么意思？为什么一个测试套件需要用到它，而不是直接在自己的笔记本电脑上运行？',
      '对于一个小团队来说，在自己的机器上运行测试和在云端浏览器集群上运行测试，实际的区别是什么？',
      '我该如何判断一个不断增长的测试套件是否真的到了该迁移到云端 CI 提供商的时候？在做这个切换之前该检查什么？'
    ],

    closingPre: '要写出你的第一个脚本，这五件事都不是必须的——想了解那个，请参阅',
    closingLinkText: '如何开始学习自动化测试？',
    closingPost:
      '。但当你的测试代码在自己电脑上从单个文件慢慢“长大”时，每一件都值得逐步培养：一套共享的编辑器配置、一份 git 历史、一份与用户真实需求之间诚实的联系，以及——一旦整个团队都依赖你的测试之后——用来讨论测试基础设施、流程和质量究竟“住”在哪里的共同语言。每一件也都是一个庞大、有充分文档记录的独立主题——这个页面只是一张地图，不是那片领土本身。',
    ctaBackToLearn: '返回学习',
    ctaHowToStart: '如何开始学习 →',

    askAiHeading: '向 AI 提问的想法'
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_US,
    'cy-gb': CY,
    'cy-001': CY,
    'zh-cn': ZH
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
