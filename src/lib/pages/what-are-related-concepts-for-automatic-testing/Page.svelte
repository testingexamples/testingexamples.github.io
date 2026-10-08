<script lang="ts">
  import { CallToAction, Separator } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    introP: string;
    s1Heading: string;
    s2Heading: string;
    s3Heading: string;
    s4Heading: string;
    s5Heading: string;
    closingPre: string;
    closingLinkText: string;
    closingPost: string;
    ctaBackToLearn: string;
    ctaHowToStart: string;
  };

  const EN_001: Messages = {
    title: "What are related concepts for automatic testing?",
    metaDescription: "A beginner-friendly tour of five things that surround automatic testing: code editors, version control, agile discovery, Unix commands, and cloud hosting — and why each one matters once your test script grows up.",
    heading: "What are related concepts for automatic testing?",
    intro: "You've just written your first browser automation script. It works — on your machine, right now. This page is about the handful of everyday tools and practices that turn that one script into something a whole team can rely on, months from now, without you standing over it.",
    introP: "Automatic testing doesn't happen in isolation. Around every reliable test suite sits a small cluster of ordinary software-development habits: a decent editor to write the code in, a way to track how that code changes over time, a way to make sure the tests actually get run, and — easy to forget, but just as real — a way of checking that the tests are protecting something a real person actually cares about. None of these are testing tools specifically. All of them make testing work. Below are five to know about, each explained in plain language, each with a link or two if you want to go deeper.",
    s1Heading: "Code editors — e.g. Visual Studio Code",
    s2Heading: "Version control — git and GitHub",
    s3Heading: "Agile and working with users — discovery",
    s4Heading: "Unix commands — the command line",
    s5Heading: "Cloud hosting for testing",
    closingPre: "None of these five are required to write your first script — see ",
    closingLinkText: "How to start learning automatic testing?",
    closingPost: " for that. But each one is worth picking up as your testing code grows past a single file on your own machine: a shared editor setup, a git history, an honest connection to what users actually need, and — once a whole team depends on your tests — the shared vocabulary for talking about where testing infrastructure, process, and quality actually live. Each is also a large, well-documented subject in its own right — this page is a map, not the territory.",
    ctaBackToLearn: "Back to Learn",
    ctaHowToStart: "How to start learning →"
  };

  const EN_US: Messages = {
    ...EN_001
  };

  const CY: Messages = {
    title: "Beth yw cysyniadau cysylltiedig ar gyfer profi awtomatig?",
    metaDescription: "Taith gyfeillgar i ddechreuwyr o bum peth sy'n amgylchynu profi awtomatig: golygyddion cod, rheoli fersiynau, darganfod ystwyth, gorchmynion Unix, a chynnal ar y cwmwl — a pham mae pob un yn bwysig unwaith y bydd eich sgript brawf yn tyfu i fyny.",
    heading: "Beth yw cysyniadau cysylltiedig ar gyfer profi awtomatig?",
    intro: "Rydych chi newydd ysgrifennu eich sgript awtomatiaeth porwr gyntaf. Mae'n gweithio — ar eich peiriant, ar hyn o bryd. Mae'r dudalen hon yn ymwneud â'r llond dwrn o offer ac arferion bob dydd sy'n troi'r sgript honno'n rhywbeth y gall tîm cyfan ddibynnu arno, misoedd o hyn ymlaen, heb i chi sefyll drosto.",
    introP: "Nid yw profi awtomatig yn digwydd ar ei ben ei hun. O amgylch pob set brofion ddibynadwy mae clwstwr bach o arferion datblygu meddalwedd cyffredin: golygydd gweddus i ysgrifennu'r cod ynddo, ffordd o olrhain sut mae'r cod hwnnw'n newid dros amser, ffordd o wneud yn siŵr bod y profion mewn gwirionedd yn cael eu rhedeg, ac — hawdd ei anghofio, ond yr un mor real — ffordd o wirio bod y profion yn amddiffyn rhywbeth y mae person go iawn wir yn poeni amdano. Nid yw'r un o'r rhain yn offer profi yn benodol. Mae pob un ohonynt yn gwneud i brofi weithio. Isod mae pump i wybod amdanynt, pob un wedi'i esbonio mewn iaith syml, pob un â dolen neu ddwy os ydych am fynd yn ddyfnach.",
    s1Heading: "Golygyddion cod — e.e. Visual Studio Code",
    s2Heading: "Rheoli fersiynau — git a GitHub",
    s3Heading: "Ystwyth a gweithio gyda defnyddwyr — darganfod",
    s4Heading: "Gorchmynion Unix — y llinell orchymyn",
    s5Heading: "Cynnal ar y cwmwl ar gyfer profi",
    closingPre: "Nid oes angen yr un o'r pump hyn i ysgrifennu eich sgript gyntaf — gweler ",
    closingLinkText: "Sut i ddechrau dysgu profi awtomatig?",
    closingPost: " ar gyfer hynny. Ond mae pob un yn werth ei godi wrth i'ch cod profi dyfu y tu hwnt i un ffeil ar eich peiriant eich hun: gosodiad golygydd a rennir, hanes git, cysylltiad gonest â'r hyn y mae defnyddwyr wir ei angen, ac — unwaith y bydd tîm cyfan yn dibynnu ar eich profion — yr eirfa a rennir ar gyfer siarad am ble mae seilwaith, proses, ac ansawdd profi wir yn byw. Mae pob un hefyd yn bwnc mawr, wedi'i ddogfennu'n dda yn ei hawl ei hun — mae'r dudalen hon yn fap, nid y diriogaeth.",
    ctaBackToLearn: "Yn ôl i Dysgu",
    ctaHowToStart: "Sut i ddechrau dysgu →"
  };

  const ZH: Messages = {
    title: "自动化测试的相关概念是什么？",
    metaDescription: "一次对自动化测试周边五件事的新手友好介绍：代码编辑器、版本控制、敏捷探索、Unix 命令和云托管——以及为什么当你的测试脚本“长大”之后，每一件都会变得重要。",
    heading: "自动化测试的相关概念是什么？",
    intro: "你刚刚写出了第一个浏览器自动化脚本。它能运行——就在你的电脑上，现在就能跑。这个页面要讲的，是把那一个脚本变成几个月后整个团队都能依赖、而不需要你时刻盯着的那一小撮日常工具和实践。",
    introP: "自动化测试不是孤立存在的。每一个可靠的测试套件周围，都有一小圈普通的软件开发习惯：一个像样的编辑器来写代码，一种追踪代码随时间变化的方式，一种确保测试真的会被运行的方式，以及——容易被忽略，但同样真实——一种检查这些测试是否真的在保护某个真实用户在意的东西的方式。这些都不是专门的测试工具。但它们全部都让测试真正发挥作用。下面是值得了解的五件事，每一件都用通俗的语言解释，并附上一两个链接供你深入了解。",
    s1Heading: "代码编辑器——例如 Visual Studio Code",
    s2Heading: "版本控制——git 和 GitHub",
    s3Heading: "敏捷与用户协作——探索",
    s4Heading: "Unix 命令——命令行",
    s5Heading: "用于测试的云托管",
    closingPre: "要写出你的第一个脚本，这五件事都不是必须的——想了解那个，请参阅",
    closingLinkText: "如何开始学习自动化测试？",
    closingPost: "。但当你的测试代码在自己电脑上从单个文件慢慢“长大”时，每一件都值得逐步培养：一套共享的编辑器配置、一份 git 历史、一份与用户真实需求之间诚实的联系，以及——一旦整个团队都依赖你的测试之后——用来讨论测试基础设施、流程和质量究竟“住”在哪里的共同语言。每一件也都是一个庞大、有充分文档记录的独立主题——这个页面只是一张地图，不是那片领土本身。",
    ctaBackToLearn: "返回学习",
    ctaHowToStart: "如何开始学习 →"
  };

  const AR: Messages = {
    title: "ما هي المفاهيم ذات الصلة بالاختبار الآلي؟",
    metaDescription: "جولة ودّية للمبتدئين في خمسة أشياء تحيط بالاختبار الآلي: محررات الكود، والتحكم في الإصدارات، والاستكشاف الرشيق، وأوامر Unix، والاستضافة السحابية — ولماذا يهم كل منها حين ينضج سكربت الاختبار لديك.",
    heading: "ما هي المفاهيم ذات الصلة بالاختبار الآلي؟",
    intro: "لقد كتبت للتو أول سكربت أتمتة متصفح لك. إنه يعمل — على جهازك، الآن. تتناول هذه الصفحة حفنة الأدوات والممارسات اليومية التي تحوّل ذلك السكربت الواحد إلى شيء يستطيع فريق كامل الاعتماد عليه، بعد شهور، دون أن تقف فوقه.",
    introP: "لا يحدث الاختبار الآلي بمعزل عن غيره. فحول كل مجموعة اختبارات موثوقة عنقود صغير من عادات تطوير البرمجيات العادية: محرر جيد لكتابة الكود فيه، وطريقة لتتبع كيف يتغير ذلك الكود بمرور الوقت، وطريقة للتأكد من أن الاختبارات تُشغَّل فعلًا، و— من السهل نسيانه لكنه حقيقي بالقدر نفسه — طريقة للتحقق من أن الاختبارات تحمي شيئًا يهم شخصًا حقيقيًا فعلًا. ليس أي من هذه أدوات اختبار تحديدًا. لكنها كلها تجعل الاختبار يعمل. وفي ما يلي خمسة أشياء ينبغي معرفتها، يُشرح كل منها بلغة بسيطة، ومعه رابط أو اثنان إن أردت التعمق.",
    s1Heading: "محررات الكود — مثل Visual Studio Code",
    s2Heading: "التحكم في الإصدارات — git وGitHub",
    s3Heading: "الرشاقة والعمل مع المستخدمين — الاستكشاف",
    s4Heading: "أوامر Unix — سطر الأوامر",
    s5Heading: "الاستضافة السحابية للاختبار",
    closingPre: "لا يُشترط أي من هذه الخمسة لكتابة أول سكربت لك — انظر ",
    closingLinkText: "كيف تبدأ تعلم الاختبار الآلي؟",
    closingPost: " لذلك. لكن كلًّا منها يستحق اكتسابه حين يتجاوز كود الاختبار لديك ملفًا واحدًا على جهازك: إعداد محرر مشترك، وسجل git، وصلة صادقة بما يحتاجه المستخدمون فعلًا، و— حين يعتمد فريق كامل على اختباراتك — المفردات المشتركة للحديث عن أين تقع بنية الاختبار التحتية وعمليته وجودته فعلًا. وكل منها أيضًا موضوع كبير وموثّق جيدًا بحد ذاته — وهذه الصفحة خريطة لا أرض.",
    ctaBackToLearn: "العودة إلى تعلّم",
    ctaHowToStart: "كيف تبدأ التعلم ←"
  };

  const KO: Messages = {
    title: "자동화 테스트와 관련된 개념은 무엇인가?",
    metaDescription: "자동화 테스트를 둘러싼 다섯 가지에 대한 초보자 친화적인 안내: 코드 에디터, 버전 관리, 애자일 디스커버리, Unix 명령어, 클라우드 호스팅 — 그리고 테스트 스크립트가 커졌을 때 각각이 왜 중요한지 설명합니다.",
    heading: "자동화 테스트와 관련된 개념은 무엇인가?",
    intro: "방금 첫 브라우저 자동화 스크립트를 작성했습니다. 지금 이 순간, 여러분의 컴퓨터에서는 동작합니다. 이 페이지는 그 스크립트 하나를, 몇 달 뒤에도 여러분이 지켜보지 않아도 팀 전체가 믿고 쓸 수 있는 무언가로 바꿔 주는 몇 가지 일상적인 도구와 관행에 관한 것입니다.",
    introP: "자동화 테스트는 고립되어 일어나지 않습니다. 신뢰할 수 있는 모든 테스트 스위트의 주위에는 평범한 소프트웨어 개발 습관이 작은 무리를 이루고 있습니다. 코드를 작성할 괜찮은 에디터, 그 코드가 시간에 따라 어떻게 바뀌는지 추적하는 방법, 테스트가 실제로 실행되도록 보장하는 방법, 그리고 — 잊기 쉽지만 똑같이 실재하는 — 테스트가 실제 사람이 정말 신경 쓰는 무언가를 보호하고 있는지 확인하는 방법입니다. 이들 중 어느 것도 특별히 테스트 도구는 아닙니다. 하지만 모두가 테스트가 제대로 작동하게 만듭니다. 아래에 알아 두면 좋은 다섯 가지를 쉬운 말로 설명했으며, 더 깊이 들어가고 싶다면 각각 링크가 한두 개씩 있습니다.",
    s1Heading: "코드 에디터 — 예: Visual Studio Code",
    s2Heading: "버전 관리 — git과 GitHub",
    s3Heading: "애자일과 사용자와 함께 일하기 — 디스커버리",
    s4Heading: "Unix 명령어 — 명령줄",
    s5Heading: "테스트를 위한 클라우드 호스팅",
    closingPre: "이 다섯 가지 중 어느 것도 첫 스크립트를 작성하는 데 필수는 아닙니다. 그에 대해서는 ",
    closingLinkText: "자동화 테스트 학습은 어떻게 시작하나요?",
    closingPost: "를 참고하세요. 하지만 테스트 코드가 내 컴퓨터의 파일 하나를 넘어 커지면 각각을 익혀 둘 가치가 있습니다. 공유 에디터 설정, git 이력, 사용자가 실제로 필요로 하는 것과의 정직한 연결, 그리고 — 팀 전체가 여러분의 테스트에 의존하게 되면 — 테스트 인프라, 프로세스, 품질이 실제로 어디에 있는지 이야기하기 위한 공통 어휘입니다. 각각은 그 자체로 크고 문서화가 잘 된 주제이기도 합니다. 이 페이지는 영토가 아니라 지도입니다.",
    ctaBackToLearn: "학습으로 돌아가기",
    ctaHowToStart: "학습 시작하기 →"
  };

  const FR: Messages = {
    title: "Quels sont les concepts liés aux tests automatisés ?",
    metaDescription: "Un tour d'horizon accessible aux débutants de cinq éléments qui entourent le test automatisé : éditeurs de code, gestion de versions, découverte agile, commandes Unix et hébergement dans le cloud — et pourquoi chacun compte dès que votre script de test grandit.",
    heading: "Quels sont les concepts liés aux tests automatisés ?",
    intro: "Vous venez d'écrire votre premier script d'automatisation de navigateur. Il fonctionne — sur votre machine, maintenant. Cette page porte sur la poignée d'outils et de pratiques du quotidien qui transforment ce script en quelque chose sur lequel toute une équipe peut compter, des mois plus tard, sans que vous ayez à le surveiller.",
    introP: "Le test automatisé ne se produit pas en vase clos. Autour de toute suite de tests fiable se trouve un petit ensemble d'habitudes ordinaires du développement logiciel : un éditeur correct pour écrire le code, un moyen de suivre l'évolution de ce code dans le temps, un moyen de s'assurer que les tests sont réellement exécutés et — facile à oublier, mais tout aussi réel — un moyen de vérifier que les tests protègent quelque chose auquel une vraie personne tient vraiment. Aucun de ces éléments n'est un outil de test à proprement parler. Tous font fonctionner le test. Voici cinq éléments à connaître, chacun expliqué simplement, chacun avec un ou deux liens si vous voulez aller plus loin.",
    s1Heading: "Éditeurs de code — par exemple Visual Studio Code",
    s2Heading: "Gestion de versions — git et GitHub",
    s3Heading: "Agilité et travail avec les utilisateurs — la découverte",
    s4Heading: "Commandes Unix — la ligne de commande",
    s5Heading: "L'hébergement dans le cloud pour les tests",
    closingPre: "Aucun de ces cinq éléments n'est nécessaire pour écrire votre premier script — voir ",
    closingLinkText: "Comment commencer à apprendre les tests automatisés ?",
    closingPost: " pour cela. Mais chacun vaut la peine d'être adopté à mesure que votre code de test dépasse un seul fichier sur votre propre machine : une configuration d'éditeur partagée, l'historique git, un lien honnête avec ce dont les utilisateurs ont réellement besoin et — dès qu'une équipe entière dépend de vos tests — le vocabulaire commun pour parler de l'endroit où se situent réellement l'infrastructure, le processus et la qualité du test. Chacun est aussi un grand sujet, bien documenté en soi — cette page est une carte, pas le territoire.",
    ctaBackToLearn: "Retour à Apprendre",
    ctaHowToStart: "Comment commencer à apprendre →"
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
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
  <p>{m.introP}</p>

  <ul>
    <li><a href={localeHref(locale, 'related-code-editors')}>{m.s1Heading}</a></li>
    <li><a href={localeHref(locale, 'related-version-control')}>{m.s2Heading}</a></li>
    <li><a href={localeHref(locale, 'related-agile-discovery')}>{m.s3Heading}</a></li>
    <li><a href={localeHref(locale, 'related-unix-shell')}>{m.s4Heading}</a></li>
    <li><a href={localeHref(locale, 'related-cloud-hosting')}>{m.s5Heading}</a></li>
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
      style="margin-inline-start: 0.75rem;">{m.ctaHowToStart}</CallToAction
    >
  </p>
</section>
