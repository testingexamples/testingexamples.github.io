<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    askAiHeading: string;
    autocompleteLabel: string;
    ctaBackToLearn: string;
    ctaHowToStart: string;
    debuggerLabel: string;
    extensionsLabel: string;
    s1AskAi: string[];
    s1Heading: string;
    s1P1a: string;
    s1P1b: string;
    s1P1c1: string;
    s1P1c2: string;
    s1P1c3: string;
    s1P2a: string;
    s1P2b: string;
    s1P2c: string;
    s1P2d: string;
    s1P2e: string;
    s1P3Post1: string;
    s1P3Post2: string;
    syntaxLabel: string;
    terminalLabel: string;
  };

  const EN_001: Messages = {
    askAiHeading: "Examples you can ask AI",
    autocompleteLabel: "Autocomplete",
    ctaBackToLearn: "Back to Learn",
    ctaHowToStart: "How to start learning →",
    debuggerLabel: "built-in debugger",
    extensionsLabel: "extensions",
    s1AskAi: [
      "I've never used a proper code editor before — what's the real difference between a code editor and something like Notepad, and is Visual Studio Code a reasonable place to start?",
      "I already use VS Code casually — what extensions or features would actually help me write and debug browser automation tests specifically?",
      "How do I set up a shared VS Code configuration — extensions, settings, debugger config — so my whole team gets a consistent test-writing experience, not just me?"
    ],
    s1Heading: "Code editors — e.g. Visual Studio Code",
    s1P1a: "You can write a test script in any plain text editor, but a proper code editor gives you back a surprising amount of help for free. ",
    s1P1b: " colours your code as you type, so a typo like a missing closing bracket jumps out visually instead of hiding until you run the script and get a confusing error. ",
    s1P1c1: " shows you what's actually available as you type — type ",
    s1P1c2: " or ",
    s1P1c3: " in a modern editor and it'll list every method the library offers, which is often faster than searching the docs.",
    s1P2a: "An ",
    s1P2b: " lets you run your test script without leaving the editor window, and a ",
    s1P2c: " lets you pause a failing test mid-run and actually look at what the browser found on the page — the real state of things — rather than guessing from a trail of ",
    s1P2d: " statements. On top of all that, editors support ",
    s1P2e: ": for example, Playwright ships its own official VS Code extension, which can run your tests from a sidebar and even generate new test code by recording your clicks in a real browser.",
    s1P3Post1: " is free, extremely widely used, and a very reasonable default if you don't already have a favourite editor. For a video introduction, watch ",
    s1P3Post2: " (Learn Web Dev with Norbert, 15 min).",
    syntaxLabel: "Syntax highlighting",
    terminalLabel: "integrated terminal"
  };

  const EN_US: Messages = {
    ...EN_001,
    s1P1b: " colors your code as you type, so a typo like a missing closing bracket jumps out visually instead of hiding until you run the script and get a confusing error. ",
    s1P3Post1: " is free, extremely widely used, and a very reasonable default if you don't already have a favorite editor. For a video introduction, watch "
  };

  const CY: Messages = {
    askAiHeading: "Enghreifftiau y gallwch eu gofyn i ddeallusrwydd artiffisial",
    autocompleteLabel: "Awtogwblhau",
    ctaBackToLearn: "Yn ôl i Dysgu",
    ctaHowToStart: "Sut i ddechrau dysgu →",
    debuggerLabel: "dadfygiwr wedi'i adeiladu i mewn",
    extensionsLabel: "estyniadau",
    s1AskAi: [
      "Dydw i erioed wedi defnyddio golygydd cod priodol o'r blaen — beth yw'r gwahaniaeth gwirioneddol rhwng golygydd cod a rhywbeth fel Notepad, ac a yw Visual Studio Code yn fan cychwyn rhesymol?",
      "Rwy'n defnyddio VS Code yn achlysurol yn barod — pa estyniadau neu nodweddion fyddai wir yn fy helpu i ysgrifennu a dadfygio profion awtomatiaeth porwr yn benodol?",
      "Sut ydw i'n sefydlu ffurfweddiad VS Code a rennir — estyniadau, gosodiadau, ffurfweddiad dadfygiwr — fel bod fy nhîm cyfan yn cael profiad cyson o ysgrifennu profion, nid dim ond fi?"
    ],
    s1Heading: "Golygyddion cod — e.e. Visual Studio Code",
    s1P1a: "Gallwch ysgrifennu sgript brawf mewn unrhyw olygydd testun plaen, ond mae golygydd cod priodol yn rhoi cryn dipyn o gymorth i chi am ddim. ",
    s1P1b: " yn lliwio'ch cod wrth i chi deipio, fel bod camgymeriad teipio fel braced cau ar goll yn amlwg yn weledol yn lle cuddio nes i chi redeg y sgript a chael gwall dryslyd. ",
    s1P1c1: " yn dangos i chi beth sydd ar gael mewn gwirionedd wrth i chi deipio — teipiwch ",
    s1P1c2: " neu ",
    s1P1c3: " mewn golygydd modern a bydd yn rhestru pob dull mae'r llyfrgell yn ei gynnig, sy'n aml yn gyflymach na chwilio'r ddogfennaeth.",
    s1P2a: "Mae ",
    s1P2b: " yn gadael i chi redeg eich sgript brawf heb adael ffenestr y golygydd, ac mae ",
    s1P2c: " yn gadael i chi oedi prawf sy'n methu hanner ffordd drwodd ac edrych mewn gwirionedd ar beth ddaeth y porwr o hyd iddo ar y dudalen — gwir gyflwr pethau — yn hytrach na dyfalu o gyfres o ddatganiadau ",
    s1P2d: ". Ar ben hynny i gyd, mae golygyddion yn cefnogi ",
    s1P2e: ": er enghraifft, mae Playwright yn cynhyrchu ei estyniad VS Code swyddogol ei hun, sy'n gallu rhedeg eich profion o far ochr a hyd yn oed gynhyrchu cod prawf newydd drwy recordio'ch cliciau mewn porwr go iawn.",
    s1P3Post1: " yn rhad ac am ddim, yn cael ei ddefnyddio'n eang iawn, ac yn ddewis rhagosodedig rhesymol iawn os nad oes gennych olygydd ffefryn eisoes. Ar gyfer cyflwyniad fideo, gwyliwch ",
    s1P3Post2: " (Learn Web Dev with Norbert, 15 munud).",
    syntaxLabel: "Amlygu cystrawen",
    terminalLabel: "derfynell integredig"
  };

  const ZH: Messages = {
    askAiHeading: "可以向 AI 提问的示例",
    autocompleteLabel: "自动补全",
    ctaBackToLearn: "返回学习",
    ctaHowToStart: "如何开始学习 →",
    debuggerLabel: "内置调试器",
    extensionsLabel: "扩展",
    s1AskAi: [
      "我以前从没用过正经的代码编辑器——代码编辑器和记事本之类的东西实际有什么区别？Visual Studio Code 是一个合理的起点吗？",
      "我已经偶尔在用 VS Code 了——有哪些扩展或功能能真正帮助我专门编写和调试浏览器自动化测试？",
      "我该如何设置一套团队共享的 VS Code 配置——扩展、设置、调试器配置——让我的整个团队都获得一致的测试编写体验，而不只是我一个人？"
    ],
    s1Heading: "代码编辑器——例如 Visual Studio Code",
    s1P1a: "你可以用任何纯文本编辑器写测试脚本，但一个正经的代码编辑器能免费给你意想不到的帮助。",
    s1P1b: "会在你输入代码时为其上色，因此像漏掉一个右括号这样的拼写错误会在视觉上一下子跳出来，而不是一直隐藏，直到你运行脚本得到一个莫名其妙的错误。",
    s1P1c1: "会在你输入时实时显示实际可用的内容——在现代编辑器里输入",
    s1P1c2: "或",
    s1P1c3: "，它就会列出该库提供的每一个方法，这通常比查文档更快。",
    s1P2a: "一个",
    s1P2b: "让你无需离开编辑器窗口就能运行测试脚本，而一个",
    s1P2c: "则让你能在一个失败的测试运行到一半时暂停下来，真正查看浏览器在页面上找到了什么——事物的真实状态——而不是靠一堆",
    s1P2d: "语句去猜测。除此之外，编辑器还支持",
    s1P2e: "：例如，Playwright 自带官方 VS Code 扩展，可以从侧边栏运行你的测试，甚至能通过录制你在真实浏览器中的点击操作来生成新的测试代码。",
    s1P3Post1: "免费、使用极其广泛，如果你还没有喜欢的编辑器，它是一个非常合理的默认选择。想看视频介绍，可以观看",
    s1P3Post2: "（Learn Web Dev with Norbert，15 分钟）。",
    syntaxLabel: "语法高亮",
    terminalLabel: "集成终端"
  };

  const AR: Messages = {
    askAiHeading: "أمثلة يمكنك طرحها على الذكاء الاصطناعي",
    autocompleteLabel: "الإكمال التلقائي",
    ctaBackToLearn: "العودة إلى تعلّم",
    ctaHowToStart: "كيف تبدأ التعلم ←",
    debuggerLabel: "مصحّح الأخطاء المدمج",
    extensionsLabel: "الإضافات",
    s1AskAi: [
      "لم أستخدم محرر كود حقيقيًا من قبل — ما الفرق الفعلي بين محرر الكود وشيء مثل Notepad، وهل Visual Studio Code مكان معقول للبدء؟",
      "أستخدم VS Code بشكل عابر بالفعل — ما الإضافات أو الميزات التي ستفيدني فعلًا في كتابة اختبارات أتمتة المتصفح وتصحيحها تحديدًا؟",
      "كيف أُعدّ تكوينًا مشتركًا لـ VS Code — الإضافات والإعدادات وتكوين المصحّح — ليحصل فريقي كله على تجربة متسقة في كتابة الاختبارات، لا أنا وحدي؟"
    ],
    s1Heading: "محررات الكود — مثل Visual Studio Code",
    s1P1a: "يمكنك كتابة سكربت اختبار في أي محرر نصوص عادي، لكن محرر الكود الحقيقي يعيد إليك قدرًا مفاجئًا من المساعدة مجانًا. ",
    s1P1b: " يلوّن الكود أثناء كتابتك، فيبرز الخطأ المطبعي مثل قوس إغلاق ناقص بصريًا بدلًا من أن يختبئ حتى تشغّل السكربت وتحصل على خطأ محيّر. ",
    s1P1c1: " يريك ما هو متاح فعلًا أثناء الكتابة — اكتب ",
    s1P1c2: " أو ",
    s1P1c3: " في محرر حديث وسيعرض لك كل دالة تقدمها المكتبة، وهذا غالبًا أسرع من البحث في التوثيق.",
    s1P2a: "تتيح لك ",
    s1P2b: " تشغيل سكربت الاختبار دون مغادرة نافذة المحرر، ويتيح لك ",
    s1P2c: " إيقاف اختبار فاشل في منتصف التشغيل والنظر فعلًا في ما وجده المتصفح في الصفحة — الحالة الحقيقية للأمور — بدلًا من التخمين من سلسلة عبارات ",
    s1P2d: ". وفوق ذلك كله تدعم المحررات ",
    s1P2e: ": فعلى سبيل المثال تأتي Playwright بإضافتها الرسمية لـ VS Code، التي تستطيع تشغيل اختباراتك من شريط جانبي وحتى توليد كود اختبار جديد بتسجيل نقراتك في متصفح حقيقي.",
    s1P3Post1: " مجاني وواسع الاستخدام جدًا، وهو افتراضي معقول جدًا إن لم يكن لديك محرر مفضل. وللحصول على مقدمة مرئية، شاهد ",
    s1P3Post2: " (Learn Web Dev with Norbert، 15 دقيقة).",
    syntaxLabel: "تلوين الصياغة",
    terminalLabel: "الطرفية المدمجة"
  };

  const KO: Messages = {
    askAiHeading: "AI에게 물어볼 수 있는 예시",
    autocompleteLabel: "자동 완성",
    ctaBackToLearn: "학습으로 돌아가기",
    ctaHowToStart: "학습 시작하기 →",
    debuggerLabel: "내장 디버거",
    extensionsLabel: "확장 기능",
    s1AskAi: [
      "저는 제대로 된 코드 에디터를 써 본 적이 없습니다. 코드 에디터와 메모장 같은 것의 실제 차이는 무엇이며, Visual Studio Code는 시작하기에 적당한 곳인가요?",
      "저는 이미 VS Code를 가볍게 쓰고 있습니다. 브라우저 자동화 테스트를 작성하고 디버깅하는 데 구체적으로 어떤 확장 기능이나 기능이 도움이 될까요?",
      "확장 기능, 설정, 디버거 구성 같은 공유 VS Code 구성을 어떻게 만들어야 저뿐만 아니라 팀 전체가 일관된 테스트 작성 경험을 얻을 수 있을까요?"
    ],
    s1Heading: "코드 에디터 — 예: Visual Studio Code",
    s1P1a: "테스트 스크립트는 어떤 일반 텍스트 에디터에서도 작성할 수 있지만, 제대로 된 코드 에디터는 놀랄 만큼 많은 도움을 공짜로 돌려줍니다. ",
    s1P1b: "는 입력하는 동안 코드에 색을 입혀, 닫는 괄호가 빠진 것 같은 오타가 스크립트를 실행해 헷갈리는 오류를 받을 때까지 숨어 있지 않고 눈에 확 띄게 해 줍니다. ",
    s1P1c1: "은 입력하는 동안 실제로 사용할 수 있는 것을 보여 줍니다. 최신 에디터에서 ",
    s1P1c2: " 또는 ",
    s1P1c3: "를 입력하면 라이브러리가 제공하는 모든 메서드를 나열해 주는데, 문서를 검색하는 것보다 빠른 경우가 많습니다.",
    s1P2a: "",
    s1P2b: "을 사용하면 에디터 창을 떠나지 않고 테스트 스크립트를 실행할 수 있고, ",
    s1P2c: "를 사용하면 실패하는 테스트를 실행 도중에 일시 중지하고, 줄줄이 이어진 ",
    s1P2d: " 문으로 추측하는 대신 브라우저가 페이지에서 실제로 무엇을 발견했는지 — 사물의 실제 상태 — 를 직접 살펴볼 수 있습니다. 이 모든 것에 더해 에디터는 ",
    s1P2e: "을 지원합니다. 예를 들어 Playwright는 공식 VS Code 확장 기능을 제공하며, 사이드바에서 테스트를 실행하고 실제 브라우저에서 클릭을 기록해 새 테스트 코드를 생성하기까지 할 수 있습니다.",
    s1P3Post1: "는 무료이고 매우 널리 쓰이며, 좋아하는 에디터가 아직 없다면 아주 합리적인 기본 선택입니다. 영상으로 입문하려면 ",
    s1P3Post2: " (Learn Web Dev with Norbert, 15분)을 보세요.",
    syntaxLabel: "구문 강조",
    terminalLabel: "통합 터미널"
  };

  const FR: Messages = {
    askAiHeading: "Exemples à demander à l'IA",
    autocompleteLabel: "L'autocomplétion",
    ctaBackToLearn: "Retour à Apprendre",
    ctaHowToStart: "Comment commencer à apprendre →",
    debuggerLabel: "débogueur intégré",
    extensionsLabel: "extensions",
    s1AskAi: [
      "Je n'ai jamais utilisé de véritable éditeur de code — quelle est la vraie différence entre un éditeur de code et quelque chose comme le Bloc-notes, et Visual Studio Code est-il un point de départ raisonnable ?",
      "J'utilise déjà VS Code de façon occasionnelle — quelles extensions ou fonctionnalités m'aideraient vraiment à écrire et déboguer des tests d'automatisation de navigateur en particulier ?",
      "Comment mettre en place une configuration VS Code partagée — extensions, paramètres, configuration du débogueur — pour que toute mon équipe ait une expérience d'écriture de tests cohérente, et pas seulement moi ?"
    ],
    s1Heading: "Éditeurs de code — par exemple Visual Studio Code",
    s1P1a: "Vous pouvez écrire un script de test dans n'importe quel éditeur de texte brut, mais un véritable éditeur de code vous apporte gratuitement une aide étonnante. ",
    s1P1b: " colore votre code pendant que vous le saisissez, de sorte qu'une faute de frappe comme une parenthèse fermante manquante saute aux yeux au lieu de se cacher jusqu'à ce que vous exécutiez le script et obteniez une erreur déroutante. ",
    s1P1c1: " vous montre ce qui est réellement disponible pendant que vous tapez — tapez ",
    s1P1c2: " ou ",
    s1P1c3: " dans un éditeur moderne et il listera chaque méthode proposée par la bibliothèque, ce qui est souvent plus rapide que de chercher dans la documentation.",
    s1P2a: "Un ",
    s1P2b: " vous permet d'exécuter votre script de test sans quitter la fenêtre de l'éditeur, et un ",
    s1P2c: " vous permet de suspendre un test en échec en cours d'exécution et de regarder réellement ce que le navigateur a trouvé dans la page — l'état réel des choses — plutôt que de deviner à partir d'une série d'instructions ",
    s1P2d: ". En plus de tout cela, les éditeurs prennent en charge les ",
    s1P2e: " : par exemple, Playwright propose sa propre extension officielle pour VS Code, qui peut lancer vos tests depuis une barre latérale et même générer du nouveau code de test en enregistrant vos clics dans un vrai navigateur.",
    s1P3Post1: " est gratuit, extrêmement répandu et un choix par défaut très raisonnable si vous n'avez pas déjà d'éditeur favori. Pour une présentation en vidéo, regardez ",
    s1P3Post2: " (Learn Web Dev with Norbert, 15 min).",
    syntaxLabel: "La coloration syntaxique",
    terminalLabel: "terminal intégré"
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
  <title>{m.s1Heading} — Testing Examples</title>
  <meta name="description" content={m.s1Heading} />
</svelte:head>

<div class="page-header">
  <h1>{m.s1Heading}</h1>
</div>

<section class="section prose">
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

<section class="section prose">
  <p>
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
