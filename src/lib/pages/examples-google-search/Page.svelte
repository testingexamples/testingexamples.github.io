<script lang="ts">
  import {
    SectionHeading,
    Separator,
    InformationCallout,
    CallToAction,
    CodeBlock,
    Details
  } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  // Code samples (including code comments) are never translated, in any
  // locale — see spec/locales/index.md and src/lib/pages/given-when-then/Page.svelte.
  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    section1Heading: string;
    scenarioPre: string;
    strongBrowse: string;
    scenarioMid1: string;
    strongFollow: string;
    scenarioMid2: string;
    strongSearch: string;
    scenarioMid3: string;
    strongClick: string;
    scenarioPost: string;
    calloutLabel: string;
    readBeforePre: string;
    tosLinkText: string;
    readBeforeMid1: string;
    patternsLabel: string;
    readBeforeMid2: string;
    readBeforeMid3: string;
    practicePageLinkText: string;
    readBeforePost: string;
    fourInteractionsHeading: string;
    fourInteractionsIntro: string;
    item1Strong: string;
    item1Pre: string;
    item1Post: string;
    item2Strong: string;
    item2Pre: string;
    item2Post: string;
    item3Strong: string;
    item3Rest: string;
    item4Strong: string;
    item4Rest: string;
    caveatA: string;
    caveatB: string;
    caveatC: string;
    caveatD: string;
    caveatE: string;
    caveatF: string;
    caveatG: string;
    caveatH: string;
    seleniumIntro: string;
    seleniumRustA: string;
    seleniumRustB: string;
    seleniumRustC: string;
    playwrightIntro: string;
    pwRustA: string;
    pwRustB: string;
    pwRustC: string;
    pwRustD: string;
    pwRustE: string;
    backToExamples: string;
    googleMapsExamplesLinkText: string;
  };

  const EN_001: Messages = {
    title: 'Google Search Examples',
    metaDescription:
      'The same browse, search, submit, and follow-link interactions against Google Search, implemented six ways: Selenium and Playwright, each in JavaScript, Python, and Rust.',
    heading: 'Google Search Examples',
    intro:
      'One familiar scenario — browse to a site, use its search box, submit the search, follow a result link — implemented six ways.',
    section1Heading: 'The same four interactions, six implementations',
    scenarioPre: 'This page shows one scenario — ',
    strongBrowse: 'browse to the site',
    scenarioMid1: ', ',
    strongFollow: 'follow a link',
    scenarioMid2: ', ',
    strongSearch: 'use the search box',
    scenarioMid3: ', and ',
    strongClick: 'click a button',
    scenarioPost:
      " — implemented six ways: two browser-automation tools (Selenium and Playwright), each in three languages (JavaScript, Python, Rust). The target for all six is Google Search, because it is a search box and results page that almost every reader already knows how to use, which makes it easy to see what each tool's syntax is doing without having to first learn the page itself.",
    calloutLabel: 'Read before running any of these',
    readBeforePre: "Google's ",
    tosLinkText: 'Terms of Service',
    readBeforeMid1:
      ' restrict automated querying of Google Search. These six examples exist to show the syntax and interaction ',
    patternsLabel: 'patterns',
    readBeforeMid2:
      ' of each tool side by side — they are not meant to be run repeatedly, or at all, against the live ',
    readBeforeMid3: '. If you want to practise these same patterns hands-on, point them at ',
    practicePageLinkText: "this site's own practice page",
    readBeforePost:
      " instead, which was built exactly for that: stable ids, names, classes, and text that don't shift under you.",
    fourInteractionsHeading: 'The four interactions, defined once',
    fourInteractionsIntro: 'Rather than repeat these per example, here is what each of the six scripts below does:',
    item1Strong: 'Browse to the site',
    item1Pre: ' — navigate to ',
    item1Post: '.',
    item2Strong: 'Use the search box',
    item2Pre: ' — locate the search input and type a query, e.g. ',
    item2Post: '.',
    item3Strong: 'Click a button / submit',
    item3Rest: ' — press Enter, or find the submit button and click it.',
    item4Strong: 'Follow a link',
    item4Rest: ' — after results load, find and click the first organic result link.',
    caveatA:
      "A caveat worth stating plainly rather than glossing over: Google's exact markup for the search box has drifted over time, and will likely keep drifting. It has historically been an ",
    caveatB: ' and is currently often a ',
    caveatC: ', but in both cases it has commonly carried ',
    caveatD: ', so the examples below locate it with a selector like ',
    caveatE: ' (or, for tools with a typed-attribute locator, ',
    caveatF:
      '). That is a real illustration of why name/tag selectors are brittle: they can silently stop matching when a site’s markup changes underneath them. Where a tool supports locating by accessible role and name instead (for example a ',
    caveatG:
      ' with a visible "Search" label), that is the more robust choice, and is noted in the relevant example. The submit button has historically carried ',
    caveatH:
      ', but it can be obscured by autocomplete suggestions the moment the search box gains focus, which is one reason pressing Enter after typing is generally more reliable than trying to click it.',
    seleniumIntro:
      "Selenium is the longest-established cross-language browser automation project — its WebDriver protocol is the same one several of the other tools on this page speak underneath.",
    seleniumRustA: "There's no official Rust binding from the Selenium project itself — ",
    seleniumRustB:
      " (whose name nods to selenium's atomic number, 34) is the de facto Selenium/WebDriver client for Rust. It needs a running ",
    seleniumRustC:
      ' (or similar) at the given URL, the same way the two examples above need a local driver/browser too.',
    playwrightIntro:
      'Playwright has official bindings in JavaScript, Python, .NET, and Java; Rust support is community-maintained rather than official.',
    pwRustA: 'Be careful which crate you install. ',
    pwRustB: ' (',
    pwRustC:
      ") is actively maintained but still pre-1.0 and stabilising its API — it's the one used below. The older crate published on crates.io simply as ",
    pwRustD: ' (',
    pwRustE: ") has been abandoned since 2022; don't reach for that one.",
    backToExamples: 'Back to examples',
    googleMapsExamplesLinkText: 'Google Maps examples'
  };

  // en-us: "practise" (verb) → "practice", and the -ise/-ize pair
  // "stabilising" → "stabilizing". en-gb-oxendict: only the -ise/-ize pair
  // differs ("stabilising" → "stabilizing"); "practise" is unaffected by
  // the Oxford -ize preference, since verb/noun practise/practice is a
  // different spelling distinction. See spec/locales/index.md.
  const EN_US: Messages = {
    ...EN_001,
    readBeforeMid3: '. If you want to practice these same patterns hands-on, point them at ',
    pwRustC:
      ") is actively maintained but still pre-1.0 and stabilizing its API — it's the one used below. The older crate published on crates.io simply as "
  };

  const EN_GB_OXENDICT: Messages = {
    ...EN_001,
    pwRustC:
      ") is actively maintained but still pre-1.0 and stabilizing its API — it's the one used below. The older crate published on crates.io simply as "
  };

  const CY: Messages = {
    title: 'Enghreifftiau Chwilio Google',
    metaDescription:
      "Yr un rhyngweithiadau pori, chwilio, cyflwyno, a dilyn-dolen yn erbyn Google Search, wedi'u gweithredu mewn chwe ffordd: Selenium a Playwright, pob un yn JavaScript, Python, a Rust.",
    heading: 'Enghreifftiau Chwilio Google',
    intro:
      "Un senario gyfarwydd — pori i wefan, defnyddio ei blwch chwilio, cyflwyno'r chwiliad, dilyn dolen canlyniad — wedi'i gweithredu mewn chwe ffordd.",
    section1Heading: 'Yr un pedwar rhyngweithiad, chwe gweithrediad',
    scenarioPre: "Mae'r dudalen hon yn dangos un senario — ",
    strongBrowse: "pori i'r wefan",
    scenarioMid1: ', ',
    strongFollow: 'dilyn dolen',
    scenarioMid2: ', ',
    strongSearch: "defnyddio'r blwch chwilio",
    scenarioMid3: ', a ',
    strongClick: 'chlicio botwm',
    scenarioPost:
      " — wedi'u gweithredu mewn chwe ffordd: dau offeryn awtomatiaeth porwr (Selenium a Playwright), pob un mewn tair iaith (JavaScript, Python, Rust). Y targed ar gyfer y chwech yw Google Search, gan ei fod yn flwch chwilio a thudalen canlyniadau y mae bron pob darllenydd eisoes yn gwybod sut i'w defnyddio, sy'n ei gwneud hi'n hawdd gweld beth mae cystrawen pob offeryn yn ei wneud heb orfod dysgu'r dudalen ei hun yn gyntaf.",
    calloutLabel: "Darllenwch cyn rhedeg unrhyw un o'r rhain",
    readBeforePre: 'Mae ',
    tosLinkText: 'Telerau Gwasanaeth',
    readBeforeMid1:
      " Google yn cyfyngu ar ymholi awtomatig ar Google Search. Mae'r chwe enghraifft hyn yn bodoli i ddangos cystrawen a ",
    patternsLabel: 'phatrymau',
    readBeforeMid2:
      " rhyngweithio pob offeryn ochr yn ochr — dydyn nhw ddim wedi'u bwriadu i gael eu rhedeg dro ar ôl tro, nac o gwbl, yn erbyn y ",
    readBeforeMid3: " byw. Os hoffech ymarfer yr un patrymau hyn yn ymarferol, anelwch nhw at ",
    practicePageLinkText: 'dudalen ymarfer y wefan hon ei hun',
    readBeforePost:
      " yn lle hynny, a adeiladwyd yn union ar gyfer hynny: ids, names, classes, a thestun sefydlog nad ydynt yn newid oddi tanoch.",
    fourInteractionsHeading: "Y pedwar rhyngweithiad, wedi'u diffinio unwaith",
    fourInteractionsIntro:
      "Yn hytrach na'u hailadrodd ym mhob enghraifft, dyma beth mae pob un o'r chwe sgript isod yn ei wneud:",
    item1Strong: "Pori i'r wefan",
    item1Pre: ' — llywio i ',
    item1Post: '.',
    item2Strong: "Defnyddio'r blwch chwilio",
    item2Pre: " — lleoli'r mewnbwn chwilio a theipio ymholiad, e.e. ",
    item2Post: '.',
    item3Strong: 'Clicio botwm / cyflwyno',
    item3Rest: " — pwyswch Enter, neu ddod o hyd i'r botwm cyflwyno a'i glicio.",
    item4Strong: 'Dilyn dolen',
    item4Rest: " — ar ôl i'r canlyniadau lwytho, dewch o hyd i ddolen y canlyniad organig cyntaf a'i chlicio.",
    caveatA:
      "Mae'n werth nodi rhybudd yn blaen yn hytrach na'i anwybyddu: mae marcio Google ar gyfer y blwch chwilio wedi newid yn raddol dros amser, ac mae'n debygol o barhau i wneud hynny. Yn hanesyddol, mae wedi bod yn ",
    caveatB: ' ac ar hyn o bryd mae’n aml yn ',
    caveatC: ', ond yn y ddau achos mae wedi cario ',
    caveatD: " yn gyffredin, felly mae'r enghreifftiau isod yn ei leoli â dewisydd fel ",
    caveatE: " (neu, ar gyfer offer sydd â lleolydd priodoledd wedi'i deipio, ",
    caveatF:
      "). Mae hynny'n enghraifft go iawn o'r rheswm pam mae dewiswyr enw/tag yn fregus: gallant stopio cydweddu'n dawel pan fydd marcio gwefan yn newid oddi tanynt. Lle mae offeryn yn cefnogi lleoli yn ôl rôl ac enw hygyrch yn lle hynny (er enghraifft ",
    caveatG:
      ' â label "Search" gweladwy), dyna’r dewis mwy cadarn, ac fe’i nodir yn yr enghraifft berthnasol. Yn hanesyddol, mae’r botwm cyflwyno wedi cario ',
    caveatH:
      ", ond gall gael ei guddio gan awgrymiadau awtogwblhau'r eiliad y bydd y blwch chwilio'n cael ffocws, sy'n un rheswm pam mae pwyso Enter ar ôl teipio fel arfer yn fwy dibynadwy na cheisio'i glicio.",
    seleniumIntro:
      "Selenium yw'r prosiect awtomatiaeth porwr traws-iaith sydd wedi bodoli hiraf — mae ei brotocol WebDriver yr un peth ag y mae sawl un o'r offer eraill ar y dudalen hon yn ei siarad oddi tano.",
    seleniumRustA: "Does dim rhwymiad Rust swyddogol gan brosiect Selenium ei hun — ",
    seleniumRustB:
      " (mae ei enw'n cyfeirio at rif atomig selenium, 34) yw'r cleient Selenium/WebDriver de facto ar gyfer Rust. Mae angen ",
    seleniumRustC:
      " (neu rywbeth tebyg) yn rhedeg ar yr URL a roddwyd, yr un ffordd ag y mae angen gyrrwr/porwr lleol ar y ddwy enghraifft uchod hefyd.",
    playwrightIntro:
      "Mae gan Playwright rwymiadau swyddogol yn JavaScript, Python, .NET, a Java; cynhelir cefnogaeth Rust gan y gymuned yn hytrach nag yn swyddogol.",
    pwRustA: "Byddwch yn ofalus pa grât rydych chi'n ei osod. ",
    pwRustB: ' (',
    pwRustC:
      " sy'n cael ei gynnal yn weithredol ond sy'n dal cyn-1.0 ac yn sefydlogi ei API — dyna'r un a ddefnyddir isod. Mae'r crât hŷn, a gyhoeddwyd ar crates.io yn syml fel ",
    pwRustD: ' (',
    pwRustE: ") wedi'i adael ers 2022; peidiwch â mynd am hwnnw.",
    backToExamples: "Yn ôl i'r enghreifftiau",
    googleMapsExamplesLinkText: 'enghreifftiau Mapiau Google'
  };

  const ZH: Messages = {
    title: '谷歌搜索示例',
    metaDescription:
      '针对谷歌搜索的同样的浏览、搜索、提交和跟踪链接交互，用六种方式实现：Selenium 和 Playwright，各自使用 JavaScript、Python 和 Rust。',
    heading: '谷歌搜索示例',
    intro: '一个熟悉的场景——浏览到一个网站、使用它的搜索框、提交搜索、跟踪一个结果链接——用六种方式实现。',
    section1Heading: '同样的四个交互，六种实现',
    scenarioPre: '这个页面展示一个场景——',
    strongBrowse: '浏览到网站',
    scenarioMid1: '、',
    strongFollow: '跟踪一个链接',
    scenarioMid2: '、',
    strongSearch: '使用搜索框',
    scenarioMid3: '，以及',
    strongClick: '点击一个按钮',
    scenarioPost:
      '——用六种方式实现：两种浏览器自动化工具（Selenium 和 Playwright），各自使用三种语言（JavaScript、Python、Rust）。这六个示例的目标都是谷歌搜索，因为它是一个几乎每位读者都已经知道怎么用的搜索框和结果页面，这样就能更容易看清每种工具的语法在做什么，而不必先去学习这个页面本身。',
    calloutLabel: '运行这些示例之前请先阅读',
    readBeforePre: '谷歌的',
    tosLinkText: '服务条款',
    readBeforeMid1: '限制对谷歌搜索进行自动化查询。这六个示例的存在是为了并排展示每种工具的语法和交互',
    patternsLabel: '模式',
    readBeforeMid2: '——它们不打算被反复运行，甚至根本不应该针对真实的',
    readBeforeMid3: '运行。如果你想亲自动手练习这些同样的模式，请把它们指向',
    practicePageLinkText: '本站自己的练习页面',
    readBeforePost: '，它正是为此而建：稳定的 id、name、class 和文字，不会在你脚下发生变化。',
    fourInteractionsHeading: '四个交互，统一定义一次',
    fourInteractionsIntro: '为了避免在每个示例中重复，下面说明下方六个脚本各自做了什么：',
    item1Strong: '浏览到网站',
    item1Pre: '——导航到',
    item1Post: '。',
    item2Strong: '使用搜索框',
    item2Pre: '——找到搜索输入框并输入查询内容，例如',
    item2Post: '。',
    item3Strong: '点击按钮 / 提交',
    item3Rest: '——按下回车键，或者找到提交按钮并点击它。',
    item4Strong: '跟踪一个链接',
    item4Rest: '——结果加载完成后，找到并点击第一个自然搜索结果的链接。',
    caveatA:
      '有一点需要直白地说明，而不是含糊带过：谷歌搜索框的确切标记会随时间漂移，而且很可能会继续漂移。它在历史上曾经是一个',
    caveatB: '，目前则常常是一个',
    caveatC: '，但无论哪种情况，它通常都带有',
    caveatD: '，因此下面的示例用类似',
    caveatE: '这样的选择器来定位它（或者，对于支持带类型属性定位器的工具，则用',
    caveatF:
      '）。这正好说明了为什么按 name/标签选择器不够可靠：当网站的标记在其下发生变化时，它们可能会悄无声息地不再匹配。如果某个工具支持改用可访问性角色和名称来定位（例如一个带有可见“Search”标签的',
    caveatG: '），那是更稳健的选择，相关示例中也会加以说明。提交按钮在历史上通常带有',
    caveatH:
      '，但它一旦被自动补全建议遮挡（这在搜索框获得焦点的瞬间就可能发生），就很难点击到，这也是为什么输入完成后按回车键通常比尝试点击它更可靠的原因之一。',
    seleniumIntro:
      'Selenium 是历史最悠久的跨语言浏览器自动化项目——它的 WebDriver 协议正是本页其他几个工具在底层所使用的同一套协议。',
    seleniumRustA: 'Selenium 项目本身并没有官方的 Rust 绑定——',
    seleniumRustB: '（其名字致敬了硒的原子序数 34）是事实上的 Rust 版 Selenium/WebDriver 客户端。它需要在指定的 URL 上运行一个',
    seleniumRustC: '（或类似的东西），就像上面两个示例也需要本地驱动/浏览器一样。',
    playwrightIntro: 'Playwright 提供官方的 JavaScript、Python、.NET 和 Java 绑定；Rust 支持则由社区维护，而非官方提供。',
    pwRustA: '请留意你安装的是哪个 crate。',
    pwRustB: '（',
    pwRustC: '）目前正在积极维护，但仍处于 1.0 之前、API 尚在稳定阶段——下面用的就是这一个。旧的那个直接以',
    pwRustD: '（',
    pwRustE: '）发布在 crates.io 上的 crate 自 2022 年以来已被放弃维护；请不要选用那一个。',
    backToExamples: '返回示例',
    googleMapsExamplesLinkText: '谷歌地图示例'
  };

  const AR: Messages = {
    title: 'أمثلة Google Search',
    metaDescription:
      'تفاعلات التصفح والبحث والإرسال واتباع الرابط نفسها على Google Search، منفّذة بست طرق: Selenium وPlaywright، كل منهما بلغات JavaScript وPython وRust.',
    heading: 'أمثلة Google Search',
    intro:
      'سيناريو مألوف واحد — تصفّح موقع، واستخدام مربع البحث فيه، وإرسال البحث، واتباع رابط نتيجة — منفّذًا بست طرق.',
    section1Heading: 'التفاعلات الأربعة نفسها، ست تنفيذات',
    scenarioPre: 'تعرض هذه الصفحة سيناريو واحدًا — ',
    strongBrowse: 'تصفّح الموقع',
    scenarioMid1: '، ',
    strongFollow: 'واتباع رابط',
    scenarioMid2: '، ',
    strongSearch: 'واستخدام مربع البحث',
    scenarioMid3: '، و',
    strongClick: 'النقر على زر',
    scenarioPost:
      ' — منفّذًا بست طرق: أداتان لأتمتة المتصفح (Selenium وPlaywright)، كل منهما بثلاث لغات (JavaScript وPython وRust). والهدف في الست كلها هو Google Search، لأنه مربع بحث وصفحة نتائج يعرف كل قارئ تقريبًا كيف يستخدمهما، مما يسهّل رؤية ما تفعله صياغة كل أداة دون الحاجة إلى تعلّم الصفحة نفسها أولًا.',
    calloutLabel: 'اقرأ قبل تشغيل أي من هذه',
    readBeforePre: 'تقيّد ',
    tosLinkText: 'شروط خدمة Google',
    readBeforeMid1:
      ' الاستعلام الآلي عن Google Search. وُجدت هذه الأمثلة الستة لعرض صياغة كل أداة و',
    patternsLabel: 'أنماط',
    readBeforeMid2:
      ' التفاعل فيها جنبًا إلى جنب — وليس المقصود تشغيلها مرارًا، ولا حتى مرة واحدة، على موقع ',
    readBeforeMid3:
      ' الحي. وإن أردت التدرب على هذه الأنماط نفسها عمليًا فوجّهها إلى ',
    practicePageLinkText: 'صفحة التدريب في هذا الموقع نفسه',
    readBeforePost:
      ' بدلًا من ذلك، فقد بُنيت لهذا الغرض بالضبط: معرّفات وأسماء وفئات ونصوص ثابتة لا تتغير من تحتك.',
    fourInteractionsHeading: 'التفاعلات الأربعة، معرَّفة مرة واحدة',
    fourInteractionsIntro: 'بدلًا من تكرار هذه لكل مثال، إليك ما يفعله كل سكربت من السكربتات الستة أدناه:',
    item1Strong: 'تصفّح الموقع',
    item1Pre: ' — انتقل إلى ',
    item1Post: '.',
    item2Strong: 'استخدام مربع البحث',
    item2Pre: ' — حدّد حقل البحث واكتب استعلامًا، مثل ',
    item2Post: '.',
    item3Strong: 'النقر على زر / الإرسال',
    item3Rest: ' — اضغط Enter، أو اعثر على زر الإرسال وانقر عليه.',
    item4Strong: 'اتباع رابط',
    item4Rest: ' — بعد تحميل النتائج، اعثر على أول رابط نتيجة عضوية وانقر عليه.',
    caveatA:
      'تنبيه يستحق الذكر بوضوح بدلًا من التمويه عليه: تغيّرت علامات Google الدقيقة لمربع البحث مع الزمن، ومن المرجح أن تستمر في التغير. فقد كان تاريخيًا ',
    caveatB: ' وهو حاليًا في الغالب ',
    caveatC: '، لكنه في الحالتين حمل عادةً ',
    caveatD: '، لذا تحدده الأمثلة أدناه بمحدِّد مثل ',
    caveatE: ' (أو، للأدوات التي تدعم محدِّدًا بالسمة المكتوبة، ',
    caveatF:
      '). وهذا توضيح حقيقي لسبب هشاشة محدِّدات الاسم والوسم: فقد تتوقف عن المطابقة بصمت حين تتغير علامات الموقع من تحتها. وحيث تدعم الأداة التحديد بالدور المتاح والاسم بدلًا من ذلك (مثل عنصر ',
    caveatG:
      ' ذي تسمية «Search» مرئية)، فهذا هو الخيار الأكثر متانة، ويُشار إليه في المثال المعني. وقد حمل زر الإرسال تاريخيًا ',
    caveatH:
      '، لكن قد تحجبه اقتراحات الإكمال التلقائي بمجرد حصول مربع البحث على التركيز، وهذا أحد أسباب أن الضغط على Enter بعد الكتابة أكثر موثوقية عمومًا من محاولة النقر عليه.',
    seleniumIntro:
      'Selenium هو أقدم مشاريع أتمتة المتصفح العابرة للغات — وبروتوكول WebDriver فيه هو نفسه الذي تتحدث به عدة أدوات أخرى في هذه الصفحة من تحتها.',
    seleniumRustA: 'لا توجد ارتباطات رسمية لـ Rust من مشروع Selenium نفسه — ',
    seleniumRustB:
      ' (واسمها إيماءة إلى العدد الذري للسيلينيوم، 34) هي عميل Selenium/WebDriver المعتمد فعليًا في Rust. وتحتاج إلى ',
    seleniumRustC:
      ' (أو ما يشابهه) قيد التشغيل على العنوان المعطى، تمامًا كما يحتاج المثالان أعلاه إلى مشغّل/متصفح محلي.',
    playwrightIntro:
      'لدى Playwright ارتباطات رسمية بلغات JavaScript وPython و.NET وJava؛ أما دعم Rust فيصونه المجتمع ولا يخضع لجهة رسمية.',
    pwRustA: 'احذر من الحزمة (crate) التي تثبّتها. ',
    pwRustB: ' (',
    pwRustC:
      ') تُصان بنشاط لكنها لا تزال قبل الإصدار 1.0 وتستقر واجهتها البرمجية — وهي المستخدمة أدناه. أما الحزمة الأقدم المنشورة على crates.io باسم ',
    pwRustD: ' (',
    pwRustE: ') فقد هُجرت منذ عام 2022؛ فلا تلجأ إليها.',
    backToExamples: 'العودة إلى الأمثلة',
    googleMapsExamplesLinkText: 'أمثلة Google Maps'
  };

  const KO: Messages = {
    title: 'Google Search 예제',
    metaDescription:
      'Google Search를 대상으로 한 탐색, 검색, 제출, 링크 따라가기 상호작용을 여섯 가지 방식으로 구현했습니다: Selenium과 Playwright를 각각 JavaScript, Python, Rust로 사용합니다.',
    heading: 'Google Search 예제',
    intro:
      '익숙한 시나리오 하나 — 사이트로 이동하고, 검색창을 사용하고, 검색을 제출하고, 결과 링크를 따라가기 — 를 여섯 가지 방식으로 구현했습니다.',
    section1Heading: '같은 네 가지 상호작용, 여섯 가지 구현',
    scenarioPre: '이 페이지는 하나의 시나리오, 즉 ',
    strongBrowse: '사이트로 이동',
    scenarioMid1: ', ',
    strongFollow: '링크 따라가기',
    scenarioMid2: ', ',
    strongSearch: '검색창 사용',
    scenarioMid3: ', 그리고 ',
    strongClick: '버튼 클릭',
    scenarioPost:
      '을 여섯 가지 방식으로 구현한 것을 보여 줍니다. 두 가지 브라우저 자동화 도구(Selenium과 Playwright)를 각각 세 가지 언어(JavaScript, Python, Rust)로 사용합니다. 여섯 가지 모두의 대상은 Google Search입니다. 거의 모든 독자가 이미 사용법을 아는 검색창과 결과 페이지이므로, 페이지 자체를 먼저 배우지 않고도 각 도구의 문법이 무엇을 하는지 쉽게 볼 수 있기 때문입니다.',
    calloutLabel: '이 중 어느 것이든 실행하기 전에 읽으세요',
    readBeforePre: 'Google의 ',
    tosLinkText: '서비스 약관',
    readBeforeMid1:
      '은 Google Search에 대한 자동화된 쿼리를 제한합니다. 이 여섯 가지 예제는 각 도구의 문법과 상호작용 ',
    patternsLabel: '패턴',
    readBeforeMid2:
      '을 나란히 보여 주기 위해 존재하며, 실제 ',
    readBeforeMid3:
      ' 사이트를 상대로 반복해서, 또는 아예 실행하라고 만든 것이 아닙니다. 이 패턴을 직접 연습해 보고 싶다면 대신 ',
    practicePageLinkText: '이 사이트의 연습 페이지',
    readBeforePost:
      '를 대상으로 삼으세요. 바로 그 목적으로 만들어졌습니다. 발밑에서 바뀌지 않는 안정적인 id, name, class, 텍스트가 있습니다.',
    fourInteractionsHeading: '네 가지 상호작용, 한 번만 정의',
    fourInteractionsIntro: '예제마다 반복하는 대신, 아래 여섯 개의 스크립트가 각각 무엇을 하는지 여기에 정리합니다:',
    item1Strong: '사이트로 이동',
    item1Pre: ' — 다음 주소로 이동합니다: ',
    item1Post: '.',
    item2Strong: '검색창 사용',
    item2Pre: ' — 검색 입력란을 찾아 쿼리를 입력합니다. 예: ',
    item2Post: '.',
    item3Strong: '버튼 클릭 / 제출',
    item3Rest: ' — Enter를 누르거나, 제출 버튼을 찾아 클릭합니다.',
    item4Strong: '링크 따라가기',
    item4Rest: ' — 결과가 로드된 후, 첫 번째 일반(오가닉) 결과 링크를 찾아 클릭합니다.',
    caveatA:
      '얼버무리지 않고 분명하게 말해 두어야 할 주의 사항이 있습니다. Google의 검색창 마크업은 시간이 지나면서 바뀌어 왔고 앞으로도 계속 바뀔 가능성이 큽니다. 역사적으로는 ',
    caveatB: '이었고 현재는 흔히 ',
    caveatC: '이지만, 두 경우 모두 일반적으로 ',
    caveatD: '를 가지고 있었기 때문에, 아래 예제는 ',
    caveatE: ' 같은 선택자(또는 타입이 지정된 속성 로케이터가 있는 도구에서는 ',
    caveatF:
      ')로 그것을 찾습니다. 이는 이름/태그 선택자가 왜 깨지기 쉬운지를 보여 주는 실제 사례입니다. 사이트의 마크업이 밑에서 바뀌면 조용히 일치하지 않게 될 수 있습니다. 도구가 대신 접근성 역할과 이름으로 찾는 것을 지원한다면(예: 눈에 보이는 "Search" 라벨이 있는 ',
    caveatG:
      '), 그것이 더 견고한 선택이며 해당 예제에 표시되어 있습니다. 제출 버튼은 역사적으로 ',
    caveatH:
      '를 가지고 있었지만, 검색창이 포커스를 얻는 순간 자동 완성 제안에 가려질 수 있으며, 이것이 입력 후 버튼을 클릭하려 하기보다 Enter를 누르는 편이 대체로 더 안정적인 이유 중 하나입니다.',
    seleniumIntro:
      'Selenium은 가장 오래된 다중 언어 브라우저 자동화 프로젝트이며, 그 WebDriver 프로토콜은 이 페이지의 다른 여러 도구가 내부적으로 사용하는 것과 같은 프로토콜입니다.',
    seleniumRustA: 'Selenium 프로젝트 자체에서 제공하는 공식 Rust 바인딩은 없습니다. ',
    seleniumRustB:
      '(이름은 셀레늄의 원자 번호 34에서 따온 것)이 Rust용 사실상의 Selenium/WebDriver 클라이언트입니다. 지정된 URL에서 실행 중인 ',
    seleniumRustC:
      '(또는 유사한 것)이 필요하며, 위의 두 예제도 로컬 드라이버/브라우저가 필요한 것과 같습니다.',
    playwrightIntro:
      'Playwright는 JavaScript, Python, .NET, Java에 대한 공식 바인딩을 제공하며, Rust 지원은 공식이 아니라 커뮤니티에서 유지관리합니다.',
    pwRustA: '어떤 크레이트를 설치하는지 주의하세요. ',
    pwRustB: '(',
    pwRustC:
      ')는 활발히 유지관리되고 있지만 아직 1.0 이전이며 API를 안정화하는 중입니다. 아래에서 사용하는 것이 이것입니다. crates.io에 단순히 ',
    pwRustD: '(',
    pwRustE: ')라는 이름으로 게시된 오래된 크레이트는 2022년 이후 방치되었으므로 그것은 선택하지 마세요.',
    backToExamples: '예제로 돌아가기',
    googleMapsExamplesLinkText: 'Google Maps 예제'
  };

  const FR: Messages = {
    title: 'Exemples de Recherche Google',
    metaDescription:
      "Les mêmes interactions — parcourir, rechercher, valider et suivre un lien — sur Google Search, réalisées de six façons : Selenium et Playwright, chacun en JavaScript, Python et Rust.",
    heading: 'Exemples de Recherche Google',
    intro:
      "Un scénario familier — accéder à un site, utiliser sa zone de recherche, valider la recherche, suivre un lien de résultat — réalisé de six façons.",
    section1Heading: 'Les mêmes quatre interactions, six implémentations',
    scenarioPre: "Cette page présente un scénario — ",
    strongBrowse: 'accéder au site',
    scenarioMid1: ', ',
    strongFollow: 'suivre un lien',
    scenarioMid2: ', ',
    strongSearch: 'utiliser la zone de recherche',
    scenarioMid3: ' et ',
    strongClick: 'cliquer sur un bouton',
    scenarioPost:
      " — réalisé de six façons : deux outils d'automatisation de navigateur (Selenium et Playwright), chacun dans trois langages (JavaScript, Python, Rust). La cible des six est Google Search, car c'est une zone de recherche et une page de résultats que presque tous les lecteurs savent déjà utiliser, ce qui permet de voir facilement ce que fait la syntaxe de chaque outil sans avoir d'abord à apprendre la page elle-même.",
    calloutLabel: "À lire avant d'exécuter l'un de ces exemples",
    readBeforePre: "Les ",
    tosLinkText: "conditions d'utilisation",
    readBeforeMid1:
      " de Google limitent les requêtes automatisées sur Google Search. Ces six exemples existent pour montrer côte à côte la syntaxe et les ",
    patternsLabel: 'schémas',
    readBeforeMid2:
      " d'interaction de chaque outil — ils ne sont pas destinés à être exécutés à répétition, ni même une seule fois, sur le ",
    readBeforeMid3: " réel. Si vous voulez vous exercer à ces mêmes schémas en pratique, dirigez-les vers ",
    practicePageLinkText: "la page d'exercices de ce site",
    readBeforePost:
      " à la place, qui a été conçue exactement pour cela : des ids, des names, des classes et des textes stables qui ne bougent pas sous vos pieds.",
    fourInteractionsHeading: 'Les quatre interactions, définies une fois pour toutes',
    fourInteractionsIntro: "Plutôt que de les répéter pour chaque exemple, voici ce que fait chacun des six scripts ci-dessous :",
    item1Strong: 'Accéder au site',
    item1Pre: ' — naviguer vers ',
    item1Post: '.',
    item2Strong: 'Utiliser la zone de recherche',
    item2Pre: ' — localiser le champ de recherche et saisir une requête, par exemple ',
    item2Post: '.',
    item3Strong: 'Cliquer sur un bouton / valider',
    item3Rest: " — appuyer sur Entrée, ou trouver le bouton de validation et cliquer dessus.",
    item4Strong: 'Suivre un lien',
    item4Rest: " — une fois les résultats chargés, trouver le premier lien de résultat organique et cliquer dessus.",
    caveatA:
      "Une réserve qu'il vaut mieux énoncer franchement que passer sous silence : le balisage exact de la zone de recherche de Google a évolué au fil du temps et continuera probablement d'évoluer. Il a historiquement été un ",
    caveatB: " et c'est actuellement souvent un ",
    caveatC: ', mais dans les deux cas il a couramment porté ',
    caveatD: ', si bien que les exemples ci-dessous le localisent avec un sélecteur comme ',
    caveatE: " (ou, pour les outils disposant d'un localisateur d'attribut typé, ",
    caveatF:
      "). C'est une illustration concrète de la raison pour laquelle les sélecteurs par name ou par balise sont fragiles : ils peuvent cesser silencieusement de correspondre quand le balisage d'un site change sous eux. Lorsqu'un outil permet plutôt de localiser par rôle et nom accessibles (par exemple un ",
    caveatG:
      ' avec un libellé « Search » visible), c\'est le choix le plus robuste, et il est signalé dans l\'exemple concerné. Le bouton de validation a historiquement porté ',
    caveatH:
      ", mais il peut être masqué par les suggestions de saisie semi-automatique dès que la zone de recherche prend le focus, ce qui est l'une des raisons pour lesquelles appuyer sur Entrée après la saisie est généralement plus fiable que d'essayer de cliquer dessus.",
    seleniumIntro:
      "Selenium est le plus ancien projet d'automatisation de navigateur multilangage — son protocole WebDriver est le même que celui sur lequel reposent plusieurs des autres outils de cette page.",
    seleniumRustA: "Le projet Selenium ne fournit pas de binding Rust officiel — ",
    seleniumRustB:
      " (dont le nom fait allusion au numéro atomique du sélénium, 34) est le client Selenium/WebDriver de fait pour Rust. Il a besoin d'un ",
    seleniumRustC:
      " (ou équivalent) en cours d'exécution à l'URL donnée, de la même façon que les deux exemples ci-dessus ont aussi besoin d'un pilote/navigateur local.",
    playwrightIntro:
      "Playwright propose des bindings officiels en JavaScript, Python, .NET et Java ; la prise en charge de Rust est assurée par la communauté et non officielle.",
    pwRustA: 'Attention au crate que vous installez. ',
    pwRustB: ' (',
    pwRustC:
      ") est activement maintenu mais reste antérieur à la version 1.0 et stabilise encore son API — c'est celui utilisé ci-dessous. L'ancien crate publié sur crates.io simplement sous le nom ",
    pwRustD: ' (',
    pwRustE: ") est abandonné depuis 2022 ; ne l'utilisez pas.",
    backToExamples: 'Retour aux exemples',
    googleMapsExamplesLinkText: 'Exemples de Google Maps'
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_GB_OXENDICT,
    'en-us': EN_US,
    'cy-gb': CY,
    'cy-001': CY,
    'zh-cn': ZH,
    'ar-001': AR,
    'ko-001': KO,
    'fr-001': FR
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
  <SectionHeading class="section-heading-start" heading={m.section1Heading} level={2} />

  <p>
    {m.scenarioPre}<strong>{m.strongBrowse}</strong>{m.scenarioMid1}<strong>{m.strongFollow}</strong
    >{m.scenarioMid2}<strong>{m.strongSearch}</strong>{m.scenarioMid3}<strong>{m.strongClick}</strong
    >{m.scenarioPost}
  </p>

  <InformationCallout label={m.calloutLabel}>
    <p>
      {m.readBeforePre}<a href="https://www.google.com/policies/terms/">{m.tosLinkText}</a
      >{m.readBeforeMid1}<em>{m.patternsLabel}</em>{m.readBeforeMid2}<code>google.com</code
      >{m.readBeforeMid3}<a href={localeHref(locale, 'practice')}>{m.practicePageLinkText}</a>{m.readBeforePost}
    </p>
  </InformationCallout>

  <h3>{m.fourInteractionsHeading}</h3>
  <p>{m.fourInteractionsIntro}</p>
  <ol>
    <li><strong>{m.item1Strong}</strong>{m.item1Pre}<code>https://www.google.com</code>{m.item1Post}</li>
    <li><strong>{m.item2Strong}</strong>{m.item2Pre}<code>"testing examples"</code>{m.item2Post}</li>
    <li><strong>{m.item3Strong}</strong>{m.item3Rest}</li>
    <li><strong>{m.item4Strong}</strong>{m.item4Rest}</li>
  </ol>

  <p>
    {m.caveatA}<code>&lt;input&gt;</code>{m.caveatB}<code>&lt;textarea&gt;</code>{m.caveatC}<code
      >name="q"</code
    >{m.caveatD}<code>[name="q"]</code>{m.caveatE}<code>By.name("q")</code>{m.caveatF}<code
      >role="combobox"</code
    >{m.caveatG}<code>name="btnK"</code>{m.caveatH}
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Selenium" level={2} />

  <p>{m.seleniumIntro}</p>

  <Details summary="Selenium + JavaScript" open>
    <CodeBlock label="Selenium · JavaScript · selenium-webdriver (npm)">
      <pre><code>{`import { Builder, By, Key } from 'selenium-webdriver';

async function demo() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // 1. Browse to the site.
    await driver.get('https://www.google.com');

    // 2. Use the search box.
    // Google's search input has drifted between <input> and <textarea>
    // over the years, but has commonly carried name="q".
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('testing examples');

    // 3. Click a button / submit.
    // Pressing Enter is generally more reliable than locating the submit
    // button, which autocomplete suggestions can obscure.
    await searchBox.sendKeys(Key.RETURN);

    // 4. Follow a link.
    const firstResult = await driver.findElement(By.css('a'));
    await firstResult.click();
  } finally {
    await driver.quit();
  }
}

demo().catch((err) => console.error(err));
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium + Python">
    <CodeBlock label="Selenium · Python · selenium (PyPI)">
      <pre><code>{`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()

try:
    # 1. Browse to the site.
    driver.get("https://www.google.com")

    # 2. Use the search box.
    # Google's search input has drifted between <input> and <textarea>
    # over the years, but has commonly carried name="q".
    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys("testing examples")

    # 3. Click a button / submit.
    # Pressing Enter is generally more reliable than locating the submit
    # button, which autocomplete suggestions can obscure.
    search_box.send_keys(Keys.RETURN)

    # 4. Follow a link.
    first_result = driver.find_element(By.CSS_SELECTOR, "a")
    first_result.click()
finally:
    driver.quit()
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium + Rust">
    <p>
      {m.seleniumRustA}<code>thirtyfour</code>{m.seleniumRustB}<code>chromedriver</code>{m.seleniumRustC}
    </p>
    <CodeBlock label="Selenium (WebDriver) · Rust · thirtyfour (crates.io)">
      <pre><code>{`use thirtyfour::prelude::*;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let caps = DesiredCapabilities::chrome();
    let driver = WebDriver::new("http://localhost:9515", caps).await?;

    // 1. Browse to the site.
    driver.goto("https://www.google.com").await?;

    // 2. Use the search box.
    // Google's search input has drifted between <input> and <textarea>
    // over the years, but has commonly carried name="q".
    let search_box = driver
        .query(By::Name("q"))
        .desc("Google search box")
        .single()
        .await?;

    // 3. Click a button / submit.
    // \\u{E007} is the WebDriver "Enter" key; sending it is generally more
    // reliable than locating the submit button, which autocomplete
    // suggestions can obscure.
    search_box.send_keys("testing examples\\u{E007}").await?;

    // 4. Follow a link.
    let first_result = driver
        .query(By::Css("a"))
        .desc("First result link")
        .first()
        .await?;
    first_result.click().await?;

    driver.quit().await?;
    Ok(())
}
`}</code></pre>
    </CodeBlock>
  </Details>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Playwright" level={2} />

  <p>{m.playwrightIntro}</p>

  <Details summary="Playwright + JavaScript" open>
    <CodeBlock label="Playwright · JavaScript · playwright (npm)">
      <pre><code>{`import { chromium } from 'playwright';

const browser = await chromium.launch();

try {
  const page = await browser.newPage();

  // 1. Browse to the site.
  await page.goto('https://www.google.com');

  // 2. Use the search box.
  // Google's search input has drifted between <input> and <textarea>
  // over the years, but has commonly carried name="q".
  await page.fill('[name="q"]', 'testing examples');

  // 3. Click a button / submit.
  // Pressing Enter is generally more reliable than locating the submit
  // button, which autocomplete suggestions can obscure.
  await page.keyboard.press('Enter');

  // 4. Follow a link.
  await page.click('a');
} finally {
  await browser.close();
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + Python">
    <CodeBlock label="Playwright · Python · playwright (PyPI)">
      <pre><code>{`from playwright.sync_api import sync_playwright

def demo() -> None:
    """Search Google and follow the first result."""

    with sync_playwright() as p:
        browser = p.chromium.launch()

        try:
            page = browser.new_page()

            # 1. Browse to the site.
            page.goto("https://www.google.com")

            # 2. Use the search box.
            # Google's search input has drifted between <input> and
            # <textarea> over the years, but has commonly carried name="q".
            page.fill('[name="q"]', "testing examples")

            # 3. Click a button / submit.
            # Pressing Enter is generally more reliable than locating the
            # submit button, which autocomplete suggestions can obscure.
            page.keyboard.press("Enter")

            # 4. Follow a link.
            page.click("a")
        finally:
            browser.close()


if __name__ == "__main__":
    demo()
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + Rust">
    <p>
      {m.pwRustA}<code>playwright-rs</code>{m.pwRustB}<code>padamson/playwright-rust</code
      >{m.pwRustC}<code>playwright</code>{m.pwRustD}<code>octaltree/playwright-rust</code>{m.pwRustE}
    </p>
    <CodeBlock label="Playwright · Rust · playwright-rs (crates.io)">
      <pre><code>{`use playwright_rs::Playwright;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let pw = Playwright::launch().await?;
    let browser = pw.chromium().launch().await?;
    let page = browser.new_page().await?;

    // 1. Browse to the site.
    page.goto("https://www.google.com", None).await?;

    // 2. Use the search box.
    // Google's search input has drifted between <input> and <textarea>
    // over the years, but has commonly carried name="q".
    let search_box = page.locator("[name='q']");
    search_box.fill("testing examples", None).await?;

    // 3. Click a button / submit.
    // Pressing Enter is generally more reliable than locating the submit
    // button, which autocomplete suggestions can obscure.
    search_box.press("Enter", None).await?;

    // 4. Follow a link.
    let first_result = page.locator("a").first();
    first_result.click(None).await?;

    browser.close().await?;
    Ok(())
}
`}</code></pre>
    </CodeBlock>
  </Details>
</section>

<Separator label="Section break" />

<section class="section prose">
  <p style="margin-top: 0; display: flex; gap: 1rem; flex-wrap: wrap;">
    <CallToAction class="button button-primary" href={localeHref(locale, 'examples')}>{m.backToExamples}</CallToAction>
    <CallToAction class="button button-secondary" href={localeHref(locale, 'examples-google-maps')}
      >{m.googleMapsExamplesLinkText}</CallToAction
    >
  </p>
</section>
