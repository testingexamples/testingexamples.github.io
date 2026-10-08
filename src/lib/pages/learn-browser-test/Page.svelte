<script lang="ts">
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    toolsHeading: string;
    tools: [string, string][];
    expectHeading: string;
    expectText: string;
    outroPre: string;
    outroPracticeText: string;
    outroMid: string;
    outroCodeText: string;
    outroPost: string;
  };

  const EN_001: Messages = {
    title: "Browser test",
    metaDescription:
      "A browser-based test drives a real web browser the way a person would. Selenium, Playwright, and other tools make this automatic.",
    heading: "Browser test",
    intro:
      "A browser-based test opens a real web browser, then does what a person would do: go to a page, find a button or a field, click and type, and check what appears. A tool does it for you, so the same journey can run on every change, in seconds, without anyone sitting at the keyboard.",
    toolsHeading: "Tools you will meet",
    tools: [
      ["Selenium", "the long-established standard, built on the W3C WebDriver protocol, with official bindings for Java, Python, C#, JavaScript, and more, and a driver for each major browser."],
      ["Playwright", "from Microsoft; drives Chromium, Firefox, and WebKit, waits for elements automatically, and has bindings for JavaScript and TypeScript, Python, Java, and .NET."],
      ["WebdriverIO", "a JavaScript and TypeScript test framework that sits on top of WebDriver and adds a test runner, reporters, and a friendly API."],
      ["Cypress", "a JavaScript and TypeScript tool that runs inside the browser alongside your app, with a visual test runner."],
      ["Puppeteer", "a Node.js library from the Chrome team for controlling Chrome and Firefox, often used for scripting and scraping as well as testing."],
      ["TestCafe", "a Node.js tool that runs tests in the browser without needing separate drivers."]
    ],
    expectHeading: "What to expect",
    expectText:
      "Because they use a real browser, these tests are the most realistic kind — and the slowest and most easily upset by small page changes, so keep them few and focused on the journeys that matter most. Quicker tests lower down the testing pyramid should cover the rest.",
    outroPre: "To try one yourself, start with the ",
    outroPracticeText: "practice page",
    outroMid: ", or browse the runnable demos on the ",
    outroCodeText: "code page",
    outroPost: "."
  };

  const CY: Messages = {
    title: "Prawf porwr",
    metaDescription:
      "Mae prawf sy’n seiliedig ar borwr yn gyrru porwr gwe go iawn fel y byddai person. Mae Selenium, Playwright ac offer eraill yn gwneud hyn yn awtomatig.",
    heading: "Prawf porwr",
    intro:
      "Mae prawf sy’n seiliedig ar borwr yn agor porwr gwe go iawn, yna’n gwneud yr hyn y byddai person yn ei wneud: mynd i dudalen, dod o hyd i fotwm neu faes, clicio a theipio, a gwirio beth sy’n ymddangos. Mae offeryn yn ei wneud i chi, felly gall yr un daith redeg ar bob newid, mewn eiliadau, heb i neb eistedd wrth y bysellfwrdd.",
    toolsHeading: "Offer y byddwch yn eu cyfarfod",
    tools: [
      ["Selenium", "y safon hirsefydlog, wedi’i hadeiladu ar brotocol W3C WebDriver, gyda rhwymiadau swyddogol ar gyfer Java, Python, C#, JavaScript a mwy, a gyrrwr ar gyfer pob prif borwr."],
      ["Playwright", "gan Microsoft; yn gyrru Chromium, Firefox a WebKit, yn aros am elfennau’n awtomatig, ac mae ganddo rwymiadau ar gyfer JavaScript a TypeScript, Python, Java a .NET."],
      ["WebdriverIO", "fframwaith profi JavaScript a TypeScript sy’n eistedd ar ben WebDriver ac yn ychwanegu rhedwr profion, adroddwyr ac API cyfeillgar."],
      ["Cypress", "offeryn JavaScript a TypeScript sy’n rhedeg y tu mewn i’r porwr ochr yn ochr â’ch ap, gyda rhedwr profion gweledol."],
      ["Puppeteer", "llyfrgell Node.js gan dîm Chrome ar gyfer rheoli Chrome a Firefox, a ddefnyddir yn aml ar gyfer sgriptio a chrafu yn ogystal â phrofi."],
      ["TestCafe", "offeryn Node.js sy’n rhedeg profion yn y porwr heb fod angen gyrwyr ar wahân."]
    ],
    expectHeading: "Beth i’w ddisgwyl",
    expectText:
      "Gan eu bod yn defnyddio porwr go iawn, y profion hyn yw’r math mwyaf realistig — a’r arafaf, ac yn hawdd eu cynhyrfu gan newidiadau bach i’r dudalen, felly cadwch nhw’n brin ac yn canolbwyntio ar y teithiau pwysicaf. Dylai profion cyflymach is i lawr y pyramid profi ddarparu ar gyfer y gweddill.",
    outroPre: "I roi cynnig arni eich hun, dechreuwch gyda’r ",
    outroPracticeText: "dudalen ymarfer",
    outroMid: ", neu porwch y demos y gellir eu rhedeg ar y ",
    outroCodeText: "dudalen cod",
    outroPost: "."
  };

  const ZH: Messages = {
    title: "浏览器测试",
    metaDescription:
      "基于浏览器的测试像真人一样驱动真实的网页浏览器。Selenium、Playwright 等工具让这一切自动完成。",
    heading: "浏览器测试",
    intro:
      "基于浏览器的测试会打开一个真实的网页浏览器，然后做真人会做的事：访问页面、找到按钮或输入框、点击和输入，并检查出现的内容。由工具代劳，因此同一流程可以在每次改动时几秒钟内自动运行，无需任何人坐在键盘前。",
    toolsHeading: "你会遇到的工具",
    tools: [
      ["Selenium", "历史悠久的标准，基于 W3C WebDriver 协议，提供 Java、Python、C#、JavaScript 等官方语言绑定，并为每个主流浏览器提供驱动。"],
      ["Playwright", "由 Microsoft 推出；可驱动 Chromium、Firefox 和 WebKit，自动等待元素，并提供 JavaScript 与 TypeScript、Python、Java 和 .NET 绑定。"],
      ["WebdriverIO", "基于 WebDriver 的 JavaScript 和 TypeScript 测试框架，增加了测试运行器、报告器和友好的 API。"],
      ["Cypress", "运行在浏览器内部、与你的应用并排的 JavaScript 和 TypeScript 工具，带有可视化测试运行器。"],
      ["Puppeteer", "由 Chrome 团队推出的 Node.js 库，用于控制 Chrome 和 Firefox，除测试外也常用于脚本和抓取。"],
      ["TestCafe", "在浏览器中运行测试的 Node.js 工具，无需单独的驱动。"]
    ],
    expectHeading: "需要知道的",
    expectText:
      "由于使用真实浏览器，这类测试最贴近真实，但也最慢，并且最容易被页面的小改动影响，所以应保持数量少，并专注于最重要的流程。其余部分应由测试金字塔下层更快的测试来覆盖。",
    outroPre: "想亲自试一试，可以从",
    outroPracticeText: "练习页面",
    outroMid: "开始，或者浏览",
    outroCodeText: "代码页面",
    outroPost: "上可运行的演示。"
  };

  const AR: Messages = {
    title: "اختبار المتصفح",
    metaDescription:
      "الاختبار القائم على المتصفح يقود متصفح ويب حقيقيًا كما يفعل الشخص. وتجعل أدوات مثل Selenium وPlaywright ذلك آليًا.",
    heading: "اختبار المتصفح",
    intro:
      "يفتح الاختبار القائم على المتصفح متصفح ويب حقيقيًا، ثم يفعل ما يفعله الشخص: ينتقل إلى صفحة، ويجد زرًا أو حقلًا، وينقر ويكتب، ويتحقق مما يظهر. وتقوم أداة بذلك نيابةً عنك، فيمكن تشغيل الرحلة نفسها عند كل تغيير خلال ثوانٍ دون أن يجلس أحد أمام لوحة المفاتيح.",
    toolsHeading: "أدوات ستصادفها",
    tools: [
      ["Selenium", "المعيار العريق المبني على بروتوكول W3C WebDriver، مع ارتباطات رسمية لـ Java وPython وC# وJavaScript وغيرها، ومشغّل لكل متصفح رئيسي."],
      ["Playwright", "من Microsoft؛ يقود Chromium وFirefox وWebKit، وينتظر العناصر تلقائيًا، وله ارتباطات لـ JavaScript وTypeScript وPython وJava و.NET."],
      ["WebdriverIO", "إطار اختبار بـ JavaScript وTypeScript يعمل فوق WebDriver ويضيف مشغّل اختبارات ومقرّرين وواجهة سهلة."],
      ["Cypress", "أداة JavaScript وTypeScript تعمل داخل المتصفح بجانب تطبيقك، مع مشغّل اختبارات مرئي."],
      ["Puppeteer", "مكتبة Node.js من فريق Chrome للتحكم في Chrome وFirefox، وتُستخدم غالبًا في البرمجة النصية والكشط إضافةً إلى الاختبار."],
      ["TestCafe", "أداة Node.js تشغّل الاختبارات في المتصفح دون الحاجة إلى مشغّلات منفصلة."]
    ],
    expectHeading: "ما الذي تتوقعه",
    expectText:
      "لأنها تستخدم متصفحًا حقيقيًا، فهذه الاختبارات هي الأكثر واقعية — والأبطأ، والأسهل تأثرًا بالتغييرات الصغيرة في الصفحة، لذا اجعلها قليلة ومركّزة على الرحلات الأهم. وينبغي أن تغطي الاختبارات الأسرع في أسفل هرم الاختبار ما تبقى.",
    outroPre: "لتجربة ذلك بنفسك، ابدأ بـ",
    outroPracticeText: "صفحة التدريب",
    outroMid: "، أو تصفّح العروض التوضيحية القابلة للتشغيل في ",
    outroCodeText: "صفحة الكود",
    outroPost: "."
  };

  const KO: Messages = {
    title: "브라우저 테스트",
    metaDescription:
      "브라우저 기반 테스트는 사람처럼 실제 웹 브라우저를 조작합니다. Selenium, Playwright 같은 도구가 이를 자동으로 해 줍니다.",
    heading: "브라우저 테스트",
    intro:
      "브라우저 기반 테스트는 실제 웹 브라우저를 열고 사람이 하는 일을 합니다. 페이지로 이동하고, 버튼이나 입력란을 찾고, 클릭하고 입력하고, 나타나는 내용을 확인합니다. 도구가 대신 해 주므로 같은 흐름을 변경할 때마다 몇 초 만에, 키보드 앞에 아무도 없어도 실행할 수 있습니다.",
    toolsHeading: "만나게 될 도구",
    tools: [
      ["Selenium", "W3C WebDriver 프로토콜을 기반으로 하는 오래된 표준으로, Java, Python, C#, JavaScript 등의 공식 바인딩과 주요 브라우저별 드라이버가 있습니다."],
      ["Playwright", "Microsoft에서 만들었으며 Chromium, Firefox, WebKit을 조작하고 요소를 자동으로 기다리며 JavaScript와 TypeScript, Python, Java, .NET 바인딩이 있습니다."],
      ["WebdriverIO", "WebDriver 위에서 동작하는 JavaScript·TypeScript 테스트 프레임워크로, 테스트 러너와 리포터, 쓰기 쉬운 API를 더합니다."],
      ["Cypress", "앱과 나란히 브라우저 안에서 실행되는 JavaScript·TypeScript 도구로, 시각적인 테스트 러너가 있습니다."],
      ["Puppeteer", "Chrome 팀이 만든 Node.js 라이브러리로 Chrome과 Firefox를 제어하며, 테스트뿐 아니라 스크립팅과 스크레이핑에도 자주 쓰입니다."],
      ["TestCafe", "별도의 드라이버 없이 브라우저에서 테스트를 실행하는 Node.js 도구입니다."]
    ],
    expectHeading: "알아 둘 점",
    expectText:
      "실제 브라우저를 쓰기 때문에 이런 테스트는 가장 현실적이지만 가장 느리고 페이지의 작은 변경에도 쉽게 깨집니다. 따라서 개수를 적게 두고 가장 중요한 흐름에 집중하세요. 나머지는 테스트 피라미드 아래쪽의 더 빠른 테스트가 맡아야 합니다.",
    outroPre: "직접 해 보려면 ",
    outroPracticeText: "연습 페이지",
    outroMid: "에서 시작하거나, ",
    outroCodeText: "코드 페이지",
    outroPost: "에서 실행 가능한 데모를 둘러보세요."
  };

  const FR: Messages = {
    title: "Test de navigateur",
    metaDescription:
      "Un test basé sur le navigateur pilote un vrai navigateur web comme le ferait une personne. Selenium, Playwright et d'autres outils l'automatisent.",
    heading: "Test de navigateur",
    intro:
      "Un test basé sur le navigateur ouvre un vrai navigateur web, puis fait ce que ferait une personne : aller sur une page, trouver un bouton ou un champ, cliquer et saisir, et vérifier ce qui s'affiche. Un outil le fait à votre place : le même parcours peut donc s'exécuter à chaque modification, en quelques secondes, sans que personne soit devant le clavier.",
    toolsHeading: "Les outils que vous rencontrerez",
    tools: [
      ["Selenium", "le standard établi de longue date, fondé sur le protocole W3C WebDriver, avec des liaisons officielles pour Java, Python, C#, JavaScript et d'autres, et un pilote pour chaque grand navigateur."],
      ["Playwright", "de Microsoft ; pilote Chromium, Firefox et WebKit, attend les éléments automatiquement et propose des liaisons pour JavaScript et TypeScript, Python, Java et .NET."],
      ["WebdriverIO", "un cadre de test JavaScript et TypeScript au-dessus de WebDriver, qui ajoute un lanceur de tests, des rapporteurs et une API conviviale."],
      ["Cypress", "un outil JavaScript et TypeScript qui s'exécute dans le navigateur aux côtés de votre application, avec un lanceur de tests visuel."],
      ["Puppeteer", "une bibliothèque Node.js de l'équipe Chrome pour piloter Chrome et Firefox, souvent utilisée pour les scripts et le scraping autant que pour les tests."],
      ["TestCafe", "un outil Node.js qui exécute les tests dans le navigateur sans pilotes distincts."]
    ],
    expectHeading: "À quoi s'attendre",
    expectText:
      "Comme ils utilisent un vrai navigateur, ces tests sont les plus réalistes — mais aussi les plus lents et les plus sensibles aux petits changements de page. Gardez-les peu nombreux et centrés sur les parcours les plus importants ; des tests plus rapides, plus bas dans la pyramide des tests, doivent couvrir le reste.",
    outroPre: "Pour essayer vous-même, commencez par la ",
    outroPracticeText: "page d'exercices",
    outroMid: ", ou parcourez les démonstrations exécutables sur la ",
    outroCodeText: "page de code",
    outroPost: "."
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
</div>

<section class="section prose">
  <p>{m.intro}</p>

  <h2>{m.toolsHeading}</h2>
  <ul class="repo-list">
    {#each m.tools as [name, description] (name)}
      <li><strong dir="ltr">{name}</strong> — {description}</li>
    {/each}
  </ul>

  <h2>{m.expectHeading}</h2>
  <p>{m.expectText}</p>

  <p>
    {m.outroPre}<a href={localeHref(locale, 'practice')}>{m.outroPracticeText}</a>{m.outroMid}<a
      href={localeHref(locale, 'code')}>{m.outroCodeText}</a
    >{m.outroPost}
  </p>
</section>

<style>
  /* Bullet points instead of the shared .repo-list border-bottom line
     separator (static/assets/style.css), scoped to this component. */
  .repo-list {
    list-style: disc;
    padding-inline-start: 1.5rem;
  }
  .repo-list li {
    padding: 0.2rem 0;
    border-bottom: none;
  }
</style>
