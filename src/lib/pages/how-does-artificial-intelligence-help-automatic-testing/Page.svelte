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

  const ZH: Messages = {
    title: '人工智能如何帮助自动化测试？',
    metaDescription:
      '一份务实、脚踏实地的介绍：AI 如今在自动化测试中的实际应用——编写和维护测试、CI/CD、以及敏捷探索——以及适用于这三者的一个诚实的提醒。',
    heading: '人工智能如何帮助自动化测试？',
    intro:
      'AI 工具已经成为如今自动化测试、CI/CD 和敏捷探索工作方式中真实的一部分。本页介绍 AI 在这项工作中出现的三种方式，以及适用于这三者的一个诚实的提醒。',

    h1Heading: 'AI 用于编写和维护测试',
    p1: '如今，测试的初稿常常可以直接来自一段对预期行为的简单描述——“打开搜索页面，搜索 X，检查结果中提到了 X”——而不必从一个空白文件开始。目前已有多种工具可以做到这一点，包括 Playwright 自带的代码生成器，它会把真实的点击操作录制成脚本，再结合一层 AI，让你用自然语言描述意图，得到一个可以在此基础上编辑的起点。',
    p2Pre: '有些工具还把 AI 应用到',
    locatorsLabel: '定位器',
    p2Mid:
      '上——也就是测试用来在页面上查找元素的选择器。一个“自我修复”的定位器会在其选择器发生变化时（例如开发者重命名了一个',
    p2Post: '）使用 AI 重新定位该元素，而不是让测试直接失败。',
    calloutWorthKnowingLabel: '值得了解',
    calloutPre:
      '自我修复定位器减少了一种脆弱性，却带来了另一种：一个自我修复的定位器可能会悄无声息地点击',
    wrongLabel: '错误的',
    calloutPost:
      '元素——一个仅仅看起来与测试原本想要的元素相似的元素——而一个仍然运行、仍然通过的测试，并不自动等于一个仍然正确的测试。请把这类工具当作仍需你审查的辅助手段，而不是理解你的测试到底在检查什么的替代品。',

    h2Heading: 'AI 在 CI/CD 和 DevOps 中的应用',
    p3Pre: '一旦测试套件在每次提交时都在',
    p3Post:
      '中运行，就会出现一些只有在规模化之后才会显现的新问题，而基于 AI 的分析已经开始帮助解决其中一些：',
    li1Label: '不稳定测试检测。',
    li1P:
      ' 通过分析历史的通过/失败模式，区分“这个测试有时失败是因为真实存在的间歇性缺陷”和“这个测试只是写得不好”，这样团队就不会把几个小时浪费在追查一个其实并不存在的幽灵问题上。',
    li2Label: '智能测试选择。',
    li2P:
      ' 在一个庞大的测试套件中，只运行真正可能受到某次代码改动影响的那部分测试，从而让 CI/CD 保持快速，而不是每次提交都重新运行全部测试。',
    li3Label: '部署后的日志与异常分析。',
    li3P: ' 自动标记异常的错误率或延迟模式，而不是依赖人工盯着仪表盘、留意有什么地方看起来不对劲。',
    p4Pre: '如果你对这个术语还不熟悉，可以参阅',
    p4LinkText: '自动化测试的相关概念是什么？',
    p4Post: '，了解 CI/CD 究竟是什么。',

    h3Heading: 'AI 在敏捷探索中的应用——把用户想法变成测试',
    p5: '在能够编写测试之前，必须先有人决定什么是值得测试的。AI 可以帮助完成这之前的一步：把一大堆用户访谈、支持工单或反馈，整理成具体的、可测试的验收标准。“作为一名患者，我想在 NHS Wales 上搜索某项服务”是一个模糊的目标；“搜索某项服务，并确认结果页面显示了它”则是测试真正可以检查的东西。AI 可以帮助起草这种转化。',
    p6Pre:
      '本站自己的姐妹仓库正是这种最终成果的真实范例，尽管它们是手工编写的，而不是通过 AI 探索步骤完成的：有人在一个真实的公开网站上识别出真实的用户旅程——找到主页、找到“About Us”、搜索帮助——并把它们变成了具体的、带断言的测试场景。完整列表请参阅',
    aboutLinkText: '关于',
    p6Mid: '，或直接查看',
    p6Post: '。',
    p7: 'AI 可以帮助完成“把模糊的想法变成具体场景”这一步，但仍然需要有人确认 AI 是否正确理解了用户的真实需求。这一步并没有消失——它只是从手工编写验收标准，变成了审查工具起草的验收标准。',

    h4Heading: '一个诚实的提醒',
    calloutReadLabel: '在信任一个测试之前，先读懂它到底在断言什么',
    calloutReadP:
      'AI 辅助的测试工具可能会以一些值得特别指出的方式出错：臆造出一个根本不存在的选择器、误解用户真正的意图，或者写出一个在技术上为真、却没有检查正确内容的断言——一个通过了却没有真正验证任何有意义内容的测试。解决办法和对待任何贡献者（无论人类还是 AI）的拉取请求是一样的：在信任一个测试通过之前，先读懂它到底断言了什么。不要只看到绿色就了事。',
    p8Pre:
      '本站自身就是这种严谨态度被切实践行、而不只是被口头描述的具体例子。本站是在人类维护者的指导下，借助 AI（Claude）的协助构建的，仓库中的',
    p8Post:
      '是对这个过程的诚实记录——哪些是 AI 生成的，哪些是人类决定的，哪些是经过真正验证而不是被想当然接受的。',

    ctaBackToLearn: '返回学习',
    ctaNext: '下一步：自动化测试的相关概念是什么？→'
  };

  const AR: Messages = {
    title: 'كيف يساعد الذكاء الاصطناعي في الاختبار الآلي؟',
    metaDescription:
      'نظرة عملية واقعية على مواضع ظهور الذكاء الاصطناعي في الاختبار الآلي اليوم: كتابة الاختبارات وصيانتها، وCI/CD، والاستكشاف الرشيق — مع التحفظ الصريح الذي ينطبق على الثلاثة.',
    heading: 'كيف يساعد الذكاء الاصطناعي في الاختبار الآلي؟',
    intro:
      'أصبحت أدوات الذكاء الاصطناعي جزءًا حقيقيًا من طريقة عمل الاختبار الآلي وCI/CD والاستكشاف الرشيق اليوم. تتناول هذه الصفحة ثلاث طرق يظهر بها الذكاء الاصطناعي في هذا العمل، وتحفظًا صريحًا واحدًا ينطبق على الثلاثة.',

    h1Heading: 'الذكاء الاصطناعي في كتابة الاختبارات وصيانتها',
    p1: 'يمكن الآن في كثير من الأحيان أن تأتي المسودة الأولى لاختبار ما من وصف بسيط لما ينبغي أن يحدث — «اذهب إلى صفحة البحث، وابحث عن X، وتحقق من أن النتائج تذكر X» — بدلًا من البدء من ملف فارغ. وتفعل ذلك عدة أدوات اليوم، منها أداة codegen في Playwright نفسها التي تسجّل النقرات الحقيقية في سكربت، مقترنةً بطبقة ذكاء اصطناعي تتيح لك وصف القصد بلغة طبيعية والحصول على نقطة بداية تعدّلها.',
    p2Pre: 'وتطبّق بعض الأدوات الذكاء الاصطناعي أيضًا على ',
    locatorsLabel: 'المحدِّدات (locators)',
    p2Mid:
      ' — أي المحدِّدات التي يستخدمها الاختبار للعثور على عنصر في الصفحة. فالمحدِّد «ذاتي الإصلاح» يستخدم الذكاء الاصطناعي لإعادة تحديد موقع العنصر حين يتغير محدِّده، كأن يعيد مطوّر تسمية ',
    p2Post: '، بدلًا من أن ينكسر الاختبار ببساطة.',
    calloutWorthKnowingLabel: 'جدير بالمعرفة',
    calloutPre:
      'تقلل المحدِّدات ذاتية الإصلاح نوعًا من الهشاشة لكنها تُدخل نوعًا آخر: فقد ينقر المحدِّد ذاتي الإصلاح بصمت على العنصر ',
    wrongLabel: 'الخطأ',
    calloutPost:
      ' — عنصر يشبه فحسب ذلك الذي قصده الاختبار — والاختبار الذي لا يزال يعمل ولا يزال ينجح ليس بالضرورة اختبارًا لا يزال صحيحًا. تعامل مع هذا النوع من الأدوات كعون تراجعه، لا كبديل عن فهم ما يفحصه اختبارك فعلًا.',

    h2Heading: 'الذكاء الاصطناعي في CI/CD وDevOps',
    p3Pre: 'بمجرد أن تعمل مجموعة الاختبارات ضمن ',
    p3Post:
      ' مع كل إيداع، تظهر مشكلات جديدة لا توجد إلا على نطاق واسع، وقد بدأ التحليل المعتمد على الذكاء الاصطناعي يساعد في بعضها:',
    li1Label: 'كشف الاختبارات غير المستقرة.',
    li1P:
      ' التمييز بين «يفشل هذا الاختبار أحيانًا بسبب خطأ متقطع حقيقي» و«هذا الاختبار مكتوب بشكل سيئ فحسب» عبر تحليل أنماط النجاح والفشل التاريخية، فلا يضيّع الفريق ساعات في مطاردة شبح غير موجود فعلًا.',
    li2Label: 'الاختيار الذكي للاختبارات.',
    li2P:
      ' في مجموعة اختبارات كبيرة، تشغيل المجموعة الفرعية فقط من الاختبارات المرجّح تأثرها بتغيير معين في الكود، للحفاظ على سرعة CI/CD بدلًا من إعادة تشغيل كل شيء مع كل إيداع.',
    li3Label: 'تحليل السجلات والشذوذ بعد النشر.',
    li3P:
      ' الإشارة تلقائيًا إلى أنماط غير عادية في معدل الأخطاء أو زمن الاستجابة، بدلًا من الاعتماد على شخص يراقب لوحة معلومات ويلاحظ أن شيئًا ما يبدو غير طبيعي.',
    p4Pre: 'انظر ',
    p4LinkText: 'ما هي المفاهيم ذات الصلة بالاختبار الآلي؟',
    p4Post: ' لمعرفة ما هو CI/CD أصلًا، إن كان هذا المصطلح جديدًا عليك.',

    h3Heading: 'الذكاء الاصطناعي في الاستكشاف الرشيق — تحويل أفكار المستخدمين إلى اختبارات',
    p5: 'قبل أن يُكتب اختبار، لا بد أن يقرر أحدهم ما يستحق الاختبار. ويستطيع الذكاء الاصطناعي المساعدة في الخطوة التي تسبق ذلك: تلخيص كومة من مقابلات المستخدمين وتذاكر الدعم والملاحظات في معايير قبول ملموسة قابلة للاختبار. «بصفتي مريضًا، أريد البحث في NHS Wales عن خدمة» هدف غامض؛ أما «ابحث عن خدمة وتحقق من أن صفحة النتائج تعرضها» فهو شيء يستطيع الاختبار فحصه فعلًا. ويمكن للذكاء الاصطناعي المساعدة في صياغة هذه الترجمة.',
    p6Pre:
      'المستودعات الشقيقة لهذا الموقع مثال عملي حقيقي على الوجهة، رغم أنها كُتبت يدويًا لا عبر خطوة استكشاف بالذكاء الاصطناعي: حدّد أحدهم رحلات مستخدم حقيقية على موقع عام حقيقي — العثور على الصفحة الرئيسية، والعثور على «About Us»، والبحث عن مساعدة — وحوّلها إلى سيناريوهات اختبار ملموسة ذات تأكيدات. انظر ',
    aboutLinkText: 'حول',
    p6Mid: ' للاطلاع على القائمة الكاملة، أو راجع ',
    p6Post: ' مباشرةً.',
    p7: 'يستطيع الذكاء الاصطناعي المساعدة في خطوة «تحويل فكرة غامضة إلى سيناريو ملموس»، لكن لا بد أن يتأكد إنسان من أن الذكاء الاصطناعي فهم حاجة المستخدم الفعلية فهمًا صحيحًا. هذه الخطوة لا تختفي — بل تنتقل من كتابة معايير القبول يدويًا إلى مراجعة ما صاغته الأداة.',

    h4Heading: 'التحفظ الصريح',
    calloutReadLabel: 'اقرأ ما يؤكده الاختبار قبل أن تثق به',
    calloutReadP:
      'قد تخطئ أدوات الاختبار المدعومة بالذكاء الاصطناعي بطرق تستحق التسمية تحديدًا: اختلاق محدِّد غير موجود، أو إساءة فهم ما قصده المستخدم فعلًا، أو كتابة تأكيد صحيح تقنيًا لكنه لا يفحص الشيء الصحيح — اختبار ينجح دون أن يتحقق فعلًا من شيء ذي معنى. والعلاج هو نفسه الذي ينطبق على طلب دمج أي مساهم، بشريًا كان أم ذكاءً اصطناعيًا: اقرأ ما يؤكده الاختبار فعلًا قبل أن تثق بنجاحه. لا تكتفِ بالتحقق من اللون الأخضر.',
    p8Pre:
      'وهذا الموقع نفسه مثال ملموس على تطبيق هذا الانضباط لا مجرد وصفه. فقد بُني هذا الموقع بمساعدة الذكاء الاصطناعي (Claude)، بتوجيه من مشرف بشري، و',
    p8Post:
      ' في المستودع هو الحساب الصريح لكيفية ذلك — ما الذي ولّده الذكاء الاصطناعي، وما الذي قرره الإنسان، وما الذي جرى التحقق منه فعلًا بدلًا من افتراضه.',

    ctaBackToLearn: 'العودة إلى تعلّم',
    ctaNext: 'التالي: ما هي المفاهيم ذات الصلة بالاختبار الآلي؟ ←'
  };

  const KO: Messages = {
    title: '인공지능은 자동화 테스트를 어떻게 돕는가?',
    metaDescription:
      '오늘날 자동화 테스트에서 AI가 어디에 등장하는지에 대한 현실적이고 실용적인 고찰: 테스트 작성과 유지보수, CI/CD, 애자일 디스커버리 — 그리고 세 가지 모두에 해당하는 솔직한 유의점.',
    heading: '인공지능은 자동화 테스트를 어떻게 돕는가?',
    intro:
      'AI 도구는 오늘날 자동화 테스트, CI/CD, 애자일 디스커버리가 작동하는 방식의 실질적인 일부가 되었습니다. 이 페이지는 AI가 그 작업에 등장하는 세 가지 방식과, 세 가지 모두에 해당하는 솔직한 유의점 하나를 다룹니다.',

    h1Heading: '테스트 작성과 유지보수를 위한 AI',
    p1: '이제 테스트의 초안은 빈 파일에서 시작하는 대신, 무슨 일이 일어나야 하는지에 대한 평범한 설명 — "검색 페이지로 가서 X를 검색하고 결과에 X가 언급되는지 확인" — 에서 나오는 경우가 많습니다. 오늘날 여러 도구가 이렇게 하며, 실제 클릭을 스크립트로 기록하는 Playwright 자체의 codegen도 그중 하나입니다. 여기에 자연어로 의도를 설명하면 편집할 수 있는 출발점을 얻을 수 있게 해 주는 AI 계층이 결합됩니다.',
    p2Pre: '일부 도구는 AI를 ',
    locatorsLabel: '로케이터',
    p2Mid:
      ' — 테스트가 페이지에서 요소를 찾는 데 쓰는 선택자 — 에도 적용합니다. "자가 치유" 로케이터는 선택자가 바뀌었을 때, 예를 들어 개발자가 ',
    p2Post: '의 이름을 바꿨을 때, 테스트가 그냥 깨지는 대신 AI를 사용해 요소를 다시 찾습니다.',
    calloutWorthKnowingLabel: '알아 둘 점',
    calloutPre:
      '자가 치유 로케이터는 한 종류의 취약함을 줄이지만 다른 종류를 들여옵니다. 자가 치유 로케이터는 테스트가 의도했던 것과 단지 비슷해 보이는 ',
    wrongLabel: '엉뚱한',
    calloutPost:
      ' 요소를 조용히 클릭할 수 있으며, 여전히 실행되고 여전히 통과하는 테스트가 자동으로 여전히 올바른 테스트인 것은 아닙니다. 이런 종류의 도구는 대체물이 아니라 여러분이 검토하는 보조 수단으로 다루고, 테스트가 실제로 무엇을 검사하는지 이해하는 일을 대신하게 하지 마십시오.',

    h2Heading: 'CI/CD와 DevOps에서의 AI',
    p3Pre: '테스트 스위트가 모든 커밋마다 ',
    p3Post:
      '에서 실행되기 시작하면, 규모가 커져야만 나타나는 새로운 문제가 생기며, AI 기반 분석이 그중 몇 가지를 돕기 시작했습니다.',
    li1Label: '불안정한 테스트 탐지.',
    li1P:
      ' 과거 통과/실패 패턴을 분석하여 "이 테스트는 실제 간헐적 버그 때문에 가끔 실패한다"와 "이 테스트는 그냥 잘못 작성되었다"를 구별함으로써, 팀이 실제로는 존재하지 않는 유령을 쫓느라 몇 시간을 낭비하지 않도록 합니다.',
    li2Label: '지능형 테스트 선택.',
    li2P:
      ' 큰 테스트 스위트에서 매 커밋마다 모든 것을 다시 실행하는 대신, 주어진 코드 변경의 영향을 받을 가능성이 높은 테스트의 부분 집합만 실행하여 CI/CD를 빠르게 유지합니다.',
    li3Label: '배포 후 로그 및 이상 징후 분석.',
    li3P:
      ' 사람이 대시보드를 지켜보다가 뭔가 이상하다고 알아채는 데 의존하는 대신, 비정상적인 오류율이나 지연 시간 패턴을 자동으로 표시합니다.',
    p4Pre: 'CI/CD가 애초에 무엇인지 낯설다면 ',
    p4LinkText: '자동화 테스트와 관련된 개념은 무엇인가?',
    p4Post: '를 참고하세요.',

    h3Heading: '애자일 디스커버리에서의 AI — 사용자 아이디어를 테스트로',
    p5: '테스트를 작성하기 전에, 누군가는 무엇을 테스트할 가치가 있는지 결정해야 합니다. AI는 그 이전 단계를 도울 수 있습니다. 사용자 인터뷰, 지원 티켓, 피드백의 더미를 구체적이고 테스트 가능한 인수 조건으로 종합하는 일입니다. "환자로서, 나는 NHS Wales에서 서비스를 검색하고 싶다"는 모호한 목표이고, "서비스를 검색하고 결과 페이지에 그것이 표시되는지 확인한다"는 테스트가 실제로 검사할 수 있는 것입니다. AI는 이런 변환의 초안을 작성하는 데 도움을 줄 수 있습니다.',
    p6Pre:
      '이 사이트의 자매 저장소들은 AI 디스커버리 단계가 아니라 손으로 작성되었음에도 그 도착점의 실제 사례입니다. 누군가 실제 공개 사이트에서 실제 사용자 여정 — 홈페이지 찾기, "About Us" 찾기, 도움말 검색 — 을 파악하고, 이를 구체적이고 단언이 있는 테스트 시나리오로 바꾸었습니다. 전체 목록은 ',
    aboutLinkText: '소개',
    p6Mid: '를 보거나, ',
    p6Post: '를 직접 보세요.',
    p7: 'AI는 "모호한 아이디어를 구체적인 시나리오로 바꾸는" 단계를 도울 수 있지만, AI가 실제 사용자 요구를 올바르게 이해했는지는 여전히 사람이 확인해야 합니다. 그 단계는 사라지지 않고 — 인수 조건을 손으로 작성하는 일에서 도구가 작성한 초안을 검토하는 일로 옮겨 갑니다.',

    h4Heading: '솔직한 유의점',
    calloutReadLabel: '테스트를 신뢰하기 전에 그것이 무엇을 단언하는지 읽으세요',
    calloutReadP:
      'AI 지원 테스트 도구는 특별히 짚어 둘 만한 방식으로 잘못될 수 있습니다. 존재하지 않는 선택자를 지어내거나, 사용자가 실제로 의미한 바를 오해하거나, 기술적으로는 참이지만 올바른 것을 검사하지 않는 단언을 작성하는 것입니다. 즉 의미 있는 것을 실제로는 검증하지 않고 통과하는 테스트입니다. 해법은 사람이든 AI든 모든 기여자의 풀 리퀘스트에 적용되는 것과 같습니다. 테스트가 통과한다고 믿기 전에 그것이 실제로 무엇을 단언하는지 읽으세요. 초록색인지 확인하는 것만으로 끝내지 마십시오.',
    p8Pre:
      '이 사이트 자체가 그 원칙을 단지 설명하는 데 그치지 않고 실제로 적용한 구체적인 사례입니다. 이 사이트는 사람 유지관리자의 지시 아래 AI(Claude)의 도움으로 만들어졌으며, 저장소의 ',
    p8Post:
      '는 그 과정에 대한 솔직한 기록입니다. 무엇이 AI로 생성되었고, 사람이 무엇을 결정했으며, 가정이 아니라 실제로 검증된 것이 무엇인지 담겨 있습니다.',

    ctaBackToLearn: '학습으로 돌아가기',
    ctaNext: '다음: 자동화 테스트와 관련된 개념은 무엇인가? →'
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_001,
    'cy-gb': CY,
    'cy-001': CY,
    'zh-cn': ZH,
    'ar-001': AR,
    'ko-001': KO
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
      style="margin-inline-start: 0.75rem;">{m.ctaNext}</CallToAction
    >
  </p>
</section>
