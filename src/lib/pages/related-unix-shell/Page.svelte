<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    askAiHeading: string;
    cmdCd: string;
    cmdChmod: string;
    cmdClaude: string;
    cmdCurl: string;
    cmdGrep: string;
    cmdLs: string;
    cmdMore: string;
    cmdMv: string;
    cmdNano: string;
    ctaBackToLearn: string;
    ctaHowToStart: string;
    s4AskAi: string[];
    s4Heading: string;
    s4P1Post: string;
    s4P2a: string;
    s4P2b: string;
    s4P2c: string;
    s4P2d: string;
    s4P2e: string;
    s4P3Mid: string;
    s4P3Post: string;
    s4P3Pre: string;
    unixCommandsLabel: string;
  };

  const EN_001: Messages = {
    askAiHeading: "Examples you can ask AI",
    cmdCd: "change directory",
    cmdChmod: "change mode of file permissions",
    cmdClaude: "AI agent",
    cmdCurl: "call a URL such as an http web address",
    cmdGrep: "find text in files",
    cmdLs: "list files and directories",
    cmdMore: "view a file's text, one page at a time",
    cmdMv: "move a file or directory",
    cmdNano: "edit a file's text, with simple commands",
    ctaBackToLearn: "Back to Learn",
    ctaHowToStart: "How to start learning →",
    s4AskAi: [
      "I've never used a command line before — what are the handful of Unix commands actually worth learning first for someone getting into testing?",
      "How would I use grep to find every failing test in a huge CI log without scrolling through it by hand?",
      "How do I chain a few Unix commands together into a small, reliable script for a CI step, instead of reaching for a full programming language?"
    ],
    s4Heading: "Unix commands such as for file browsing",
    s4P1Post: " are what almost every dev environment, CI runner, and Docker container speaks natively, no GUI required. You don't need to master all of them; a working knowledge of a couple dozen goes a very long way.",
    s4P2a: "Here's why that belongs on a testing page: ",
    s4P2b: " and ",
    s4P2c: " are how you find one specific failure in thousands of lines of test output or a log file, instead of scrolling. ",
    s4P2d: " is how you sanity-check an API by hand — the same endpoint a UI test might also exercise — before writing the real test. ",
    s4P2e: " is how a test script becomes directly runnable. And piping a few commands together is often how a CI step gets built without reaching for a \"real\" programming language just to glue two tools together.",
    s4P3Mid: ", or watch NetworkChuck's ",
    s4P3Post: " for a fast-paced video introduction.",
    s4P3Pre: "Learn more at Software Carpentry's ",
    unixCommandsLabel: "Unix commands"
  };

  const EN_US: Messages = {
    ...EN_001
  };

  const CY: Messages = {
    askAiHeading: "Enghreifftiau y gallwch eu gofyn i ddeallusrwydd artiffisial",
    cmdCd: "newid cyfeiriadur",
    cmdChmod: "newid modd caniatâd ffeil",
    cmdClaude: "asiant DA",
    cmdCurl: "galw URL fel cyfeiriad gwe http",
    cmdGrep: "dod o hyd i destun mewn ffeiliau",
    cmdLs: "rhestru ffeiliau a chyfeiriaduron",
    cmdMore: "gweld testun ffeil, un dudalen ar y tro",
    cmdMv: "symud ffeil neu gyfeiriadur",
    cmdNano: "golygu testun ffeil, gyda gorchmynion syml",
    ctaBackToLearn: "Yn ôl i Dysgu",
    ctaHowToStart: "Sut i ddechrau dysgu →",
    s4AskAi: [
      "Dydw i erioed wedi defnyddio llinell orchymyn o'r blaen — beth yw'r llond dwrn o orchmynion Unix sy'n wirioneddol werth eu dysgu gyntaf i rywun sy'n dechrau ym myd profi?",
      "Sut fyddwn i'n defnyddio grep i ddod o hyd i bob prawf sy'n methu mewn cofnod CI enfawr heb sgrolio drwyddo â llaw?",
      "Sut ydw i'n cysylltu ychydig o orchmynion Unix â'i gilydd mewn piblinell yn sgript fach, ddibynadwy ar gyfer cam CI, yn lle estyn am iaith raglennu lawn?"
    ],
    s4Heading: "Gorchmynion Unix fel rhai ar gyfer pori ffeiliau",
    s4P1Post: " yw'r hyn y mae bron pob amgylchedd datblygu, rhedwr CI, a chynhwysydd Docker yn ei siarad yn naturiol, heb angen GUI. Nid oes angen i chi feistroli pob un ohonynt; mae gwybodaeth weithio o ryw ddau ddwsin yn mynd yn bell iawn.",
    s4P2a: "Dyma pam mae hynny'n perthyn i dudalen am brofi: ",
    s4P2b: " a ",
    s4P2c: " yw sut rydych chi'n dod o hyd i un methiant penodol ymhlith miloedd o linellau o allbwn prawf neu ffeil gofnod, yn lle sgrolio. ",
    s4P2d: " yw sut rydych chi'n gwneud gwiriad cyflym â llaw o API — yr un pwynt terfyn y gallai prawf UI ei ymarfer hefyd — cyn ysgrifennu'r prawf go iawn. ",
    s4P2e: " yw sut mae sgript brawf yn gallu cael ei rhedeg yn uniongyrchol. Ac mae cysylltu ychydig o orchmynion â'i gilydd mewn piblinell yn aml yn sut mae cam CI yn cael ei adeiladu heb estyn am iaith raglennu \"go iawn\" dim ond i gysylltu dau offeryn â'i gilydd.",
    s4P3Mid: ", neu gwyliwch NetworkChuck yn ",
    s4P3Post: " ar gyfer cyflwyniad fideo cyflym.",
    s4P3Pre: "Dysgwch fwy yng ngwers cragen Unix Software Carpentry, ",
    unixCommandsLabel: "Gorchmynion Unix"
  };

  const ZH: Messages = {
    askAiHeading: "可以向 AI 提问的示例",
    cmdCd: "切换目录",
    cmdChmod: "修改文件权限模式",
    cmdClaude: "AI 代理",
    cmdCurl: "调用一个 URL，例如某个 http 网址",
    cmdGrep: "在文件中查找文字",
    cmdLs: "列出文件和目录",
    cmdMore: "逐页查看文件文字内容",
    cmdMv: "移动文件或目录",
    cmdNano: "用简单的命令编辑文件文字内容",
    ctaBackToLearn: "返回学习",
    ctaHowToStart: "如何开始学习 →",
    s4AskAi: [
      "我以前从没用过命令行——对于一个刚接触测试的人来说，最值得先学的几个 Unix 命令是哪些？",
      "我该如何用 grep 在一份庞大的 CI 日志中找到每一个失败的测试，而不用手动一行行滚动查看？",
      "我该如何把几个 Unix 命令串联成一个小巧、可靠的脚本用于 CI 步骤，而不是动用一整套编程语言？"
    ],
    s4Heading: "Unix 命令，例如用于浏览文件的命令",
    s4P1Post: "是几乎每个开发环境、CI 运行器和 Docker 容器都能原生识别的语言，不需要任何图形界面。你不需要精通所有命令；能熟练使用其中二十来个，就已经非常有用了。",
    s4P2a: "这就是为什么它出现在一个测试相关的页面上：",
    s4P2b: "和",
    s4P2c: "是你在成千上万行测试输出或日志文件中找到某一个具体失败的方式，而不用一行行滚动查看。",
    s4P2d: "是你在写真正的测试之前，手动“健全性检查”一个 API——也就是 UI 测试可能会用到的同一个接口——的方式。",
    s4P2e: "是一个测试脚本变得可以直接运行的方式。而把几个命令用管道串在一起，往往就是在不需要动用一门“正经”编程语言来粘合两个工具的情况下，构建出一个 CI 步骤的方式。",
    s4P3Mid: "，或观看 NetworkChuck 的",
    s4P3Post: "，作为一个节奏很快的视频介绍。",
    s4P3Pre: "可以进一步阅读 Software Carpentry 的",
    unixCommandsLabel: "Unix 命令"
  };

  const AR: Messages = {
    askAiHeading: "أمثلة يمكنك طرحها على الذكاء الاصطناعي",
    cmdCd: "تغيير المجلد",
    cmdChmod: "تغيير وضع صلاحيات الملف",
    cmdClaude: "وكيل ذكاء اصطناعي",
    cmdCurl: "استدعاء عنوان URL مثل عنوان ويب http",
    cmdGrep: "البحث عن نص في الملفات",
    cmdLs: "عرض الملفات والمجلدات",
    cmdMore: "عرض نص ملف، صفحة واحدة في كل مرة",
    cmdMv: "نقل ملف أو مجلد",
    cmdNano: "تحرير نص ملف بأوامر بسيطة",
    ctaBackToLearn: "العودة إلى تعلّم",
    ctaHowToStart: "كيف تبدأ التعلم ←",
    s4AskAi: [
      "لم أستخدم سطر أوامر من قبل — ما حفنة أوامر Unix التي تستحق التعلم أولًا فعلًا لمن يدخل عالم الاختبار؟",
      "كيف أستخدم grep للعثور على كل اختبار فاشل في سجل CI ضخم دون تمريره يدويًا؟",
      "كيف أسلسل بضعة أوامر Unix في سكربت صغير موثوق لخطوة CI، بدلًا من اللجوء إلى لغة برمجة كاملة؟"
    ],
    s4Heading: "أوامر Unix مثل أوامر تصفح الملفات",
    s4P1Post: " هي ما تتحدثه تقريبًا كل بيئة تطوير ومشغّل CI وحاوية Docker بشكل أصلي، دون حاجة إلى واجهة رسومية. لا تحتاج إلى إتقانها جميعًا؛ فمعرفة عملية بنحو عشرين أو ثلاثين منها تذهب بك بعيدًا جدًا.",
    s4P2a: "وإليك لماذا ينتمي هذا إلى صفحة عن الاختبار: ",
    s4P2b: " و",
    s4P2c: " هما الطريقة التي تجد بها إخفاقًا محددًا واحدًا بين آلاف الأسطر من مخرجات الاختبار أو ملف السجل، بدلًا من التمرير. ",
    s4P2d: " هو الطريقة التي تتحقق بها يدويًا من سلامة واجهة برمجية — وهي نقطة النهاية نفسها التي قد يختبرها اختبار واجهة أيضًا — قبل كتابة الاختبار الحقيقي. ",
    s4P2e: " هو الطريقة التي يصبح بها سكربت الاختبار قابلًا للتشغيل مباشرةً. كما أن ربط بضعة أوامر معًا هو غالبًا الطريقة التي تُبنى بها خطوة CI دون اللجوء إلى لغة برمجة «حقيقية» لمجرد لصق أداتين.",
    s4P3Mid: " من Software Carpentry، أو شاهد فيديو NetworkChuck ",
    s4P3Post: " كمقدمة مرئية سريعة الإيقاع.",
    s4P3Pre: "اعرف المزيد في ",
    unixCommandsLabel: "أوامر Unix"
  };

  const KO: Messages = {
    askAiHeading: "AI에게 물어볼 수 있는 예시",
    cmdCd: "디렉터리 변경",
    cmdChmod: "파일 권한 모드 변경",
    cmdClaude: "AI 에이전트",
    cmdCurl: "http 웹 주소 같은 URL 호출",
    cmdGrep: "파일에서 텍스트 찾기",
    cmdLs: "파일과 디렉터리 목록 보기",
    cmdMore: "파일의 텍스트를 한 페이지씩 보기",
    cmdMv: "파일이나 디렉터리 이동",
    cmdNano: "간단한 명령으로 파일의 텍스트 편집",
    ctaBackToLearn: "학습으로 돌아가기",
    ctaHowToStart: "학습 시작하기 →",
    s4AskAi: [
      "저는 명령줄을 써 본 적이 없습니다. 테스트에 입문하는 사람이 가장 먼저 배울 만한 Unix 명령어는 실제로 어떤 것들인가요?",
      "엄청나게 큰 CI 로그에서 직접 스크롤하지 않고 grep으로 실패한 모든 테스트를 찾으려면 어떻게 해야 하나요?",
      "완전한 프로그래밍 언어를 쓰는 대신, 몇 개의 Unix 명령어를 엮어 CI 단계를 위한 작고 믿을 만한 스크립트를 만들려면 어떻게 해야 하나요?"
    ],
    s4Heading: "파일 탐색용 명령 같은 Unix 명령어",
    s4P1Post: "는 거의 모든 개발 환경, CI 러너, Docker 컨테이너가 GUI 없이 기본적으로 사용하는 언어입니다. 전부 능숙해질 필요는 없으며, 스무 개에서 서른 개 정도만 실무적으로 알아도 아주 멀리 갈 수 있습니다.",
    s4P2a: "이것이 테스트 페이지에 속하는 이유는 다음과 같습니다. ",
    s4P2b: "과(와) ",
    s4P2c: "는 수천 줄의 테스트 출력이나 로그 파일에서 스크롤하는 대신 특정 실패 하나를 찾는 방법입니다. ",
    s4P2d: "은 실제 테스트를 작성하기 전에 UI 테스트가 다룰 수도 있는 같은 엔드포인트인 API를 손으로 점검하는 방법입니다. ",
    s4P2e: "는 테스트 스크립트를 직접 실행 가능하게 만드는 방법입니다. 그리고 몇 개의 명령을 파이프로 연결하는 것은 두 도구를 이어 붙이기 위해 \"진짜\" 프로그래밍 언어를 꺼내지 않고도 CI 단계를 만드는 방법인 경우가 많습니다.",
    s4P3Mid: "를 보거나, NetworkChuck의 ",
    s4P3Post: " 영상으로 빠른 속도의 입문을 해 보세요.",
    s4P3Pre: "더 알아보려면 Software Carpentry의 ",
    unixCommandsLabel: "Unix 명령어"
  };

  const FR: Messages = {
    askAiHeading: "Exemples à demander à l'IA",
    cmdCd: "changer de répertoire",
    cmdChmod: "modifier le mode des permissions d'un fichier",
    cmdClaude: "agent d'IA",
    cmdCurl: "appeler une URL, comme une adresse web http",
    cmdGrep: "rechercher du texte dans des fichiers",
    cmdLs: "lister les fichiers et les répertoires",
    cmdMore: "afficher le texte d'un fichier, page par page",
    cmdMv: "déplacer un fichier ou un répertoire",
    cmdNano: "modifier le texte d'un fichier, avec des commandes simples",
    ctaBackToLearn: "Retour à Apprendre",
    ctaHowToStart: "Comment commencer à apprendre →",
    s4AskAi: [
      "Je n'ai jamais utilisé de ligne de commande — quelles sont les quelques commandes Unix qui valent vraiment la peine d'être apprises en premier pour quelqu'un qui se lance dans le test ?",
      "Comment utiliser grep pour trouver chaque test en échec dans un énorme journal de CI sans le parcourir à la main ?",
      "Comment enchaîner quelques commandes Unix dans un petit script fiable pour une étape de CI, plutôt que de recourir à un langage de programmation complet ?"
    ],
    s4Heading: "Les commandes Unix comme celles pour parcourir les fichiers",
    s4P1Post: " sont ce que parlent nativement presque tous les environnements de développement, les exécuteurs de CI et les conteneurs Docker, sans interface graphique. Vous n'avez pas besoin de toutes les maîtriser ; une connaissance pratique d'une vingtaine de commandes mène très loin.",
    s4P2a: "Voici pourquoi cela a sa place sur une page consacrée aux tests : ",
    s4P2b: " et ",
    s4P2c: " permettent de trouver un échec précis parmi des milliers de lignes de sortie de test ou de journal, au lieu de faire défiler. ",
    s4P2d: " permet de vérifier rapidement une API à la main — le même point d'accès qu'un test d'IHM pourrait aussi solliciter — avant d'écrire le vrai test. ",
    s4P2e: " est ce qui rend un script de test directement exécutable. Et chaîner quelques commandes avec des pipes est souvent ainsi que se construit une étape de CI sans recourir à un « vrai » langage de programmation juste pour relier deux outils.",
    s4P3Mid: ", ou regardez la vidéo de NetworkChuck ",
    s4P3Post: " pour une présentation en vidéo à un rythme soutenu.",
    s4P3Pre: "Pour en savoir plus, consultez la leçon sur le shell Unix de Software Carpentry, ",
    unixCommandsLabel: "Les commandes Unix"
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

  const UNIX_COMMANDS = $derived([
    { code: 'ls', description: m.cmdLs },
    { code: 'cd', description: m.cmdCd },
    { code: 'mv', description: m.cmdMv },
    { code: 'more', description: m.cmdMore },
    { code: 'nano', description: m.cmdNano },
    { code: 'grep', description: m.cmdGrep },
    { code: 'chmod', description: m.cmdChmod },
    { code: 'curl', description: m.cmdCurl },
    { code: 'claude', description: m.cmdClaude }
  ]);
</script>

<svelte:head>
  <title>{m.s4Heading} — Testing Examples</title>
  <meta name="description" content={m.s4Heading} />
</svelte:head>

<div class="page-header">
  <h1>{m.s4Heading}</h1>
</div>

<section class="section prose">
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
