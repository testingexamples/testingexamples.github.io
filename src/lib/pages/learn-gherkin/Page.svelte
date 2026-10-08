<script lang="ts">
  import { CodeBlock } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    keywordsHeading: string;
    keywords: [string, string][];
    exampleHeading: string;
    exampleLabel: string;
    exampleText: string;
    codePre: string;
    codeLinkText: string;
    codePost: string;
  };

  const EN_001: Messages = {
    title: "What is Gherkin?",
    metaDescription:
      "Gherkin is the plain-language Given-When-Then syntax used to describe how software should behave, and to drive automatic tests.",
    heading: "What is Gherkin?",
    intro:
      "Gherkin is a small, plain-language syntax for writing down how software should behave, as examples anyone on a team can read. Tools such as Cucumber can then run those examples as automatic tests. It is the format behind behaviour-driven development (BDD).",
    keywordsHeading: "The keywords",
    keywords: [
      ["Feature", "names the thing being described, with a short sentence about why it matters."],
      ["Scenario", "one concrete example of the behaviour, written as a short list of steps."],
      ["Given", "the starting situation, before anything happens."],
      ["When", "the action the user (or the test) takes."],
      ["Then", "the outcome you expect to see afterwards."],
      ["And, But", "continue the previous step without repeating its keyword."]
    ],
    exampleHeading: "An example",
    exampleLabel: "Gherkin · Given-When-Then",
    exampleText: "Feature: Search\n  Scenario: Search and see results\n    Given I am on https://google.com\n    When I type \"testing examples\" in the search box and click submit\n    Then I see search results",
    codePre: "Each step is plain text that a test tool maps to a line of code. See the same scenario written as Selenium and Playwright code on the ",
    codeLinkText: "Given-When-Then examples",
    codePost: " page."
  };

  const CY: Messages = {
    title: "Beth yw Gherkin?",
    metaDescription:
      "Gherkin yw'r gystrawen Given-When-Then mewn iaith blaen a ddefnyddir i ddisgrifio sut y dylai meddalwedd ymddwyn, ac i yrru profion awtomatig.",
    heading: "Beth yw Gherkin?",
    intro:
      "Mae Gherkin yn gystrawen fach, mewn iaith blaen, ar gyfer ysgrifennu sut y dylai meddalwedd ymddwyn, fel enghreifftiau y gall unrhyw un yn y tîm eu darllen. Gall offer fel Cucumber redeg yr enghreifftiau hynny fel profion awtomatig. Dyma'r fformat y tu ôl i ddatblygu ar sail ymddygiad (BDD).",
    keywordsHeading: "Yr allweddeiriau",
    keywords: [
      ["Feature", "yn enwi'r peth sy'n cael ei ddisgrifio, gyda brawddeg fer am pam mae'n bwysig."],
      ["Scenario", "un enghraifft bendant o'r ymddygiad, wedi'i hysgrifennu fel rhestr fer o gamau."],
      ["Given", "y sefyllfa gychwynnol, cyn i unrhyw beth ddigwydd."],
      ["When", "y weithred mae'r defnyddiwr (neu'r prawf) yn ei chymryd."],
      ["Then", "y canlyniad rydych yn disgwyl ei weld wedyn."],
      ["And, But", "yn parhau'r cam blaenorol heb ailadrodd ei allweddair."]
    ],
    exampleHeading: "Enghraifft",
    exampleLabel: "Gherkin · Given-When-Then",
    exampleText: "Feature: Search\n  Scenario: Search and see results\n    Given I am on https://google.com\n    When I type \"testing examples\" in the search box and click submit\n    Then I see search results",
    codePre: "Mae pob cam yn destun plaen y mae offeryn profi yn ei fapio i linell o god. Gwelwch yr un senario wedi'i hysgrifennu fel cod Selenium a Playwright ar y dudalen ",
    codeLinkText: "enghreifftiau Given-When-Then",
    codePost: "."
  };

  const ZH: Messages = {
    title: "什么是 Gherkin？",
    metaDescription:
      "Gherkin 是用平实语言书写的 Given-When-Then 语法，用来描述软件应有的行为，并驱动自动化测试。",
    heading: "什么是 Gherkin？",
    intro:
      "Gherkin 是一种小巧的平实语言语法，用来把软件应有的行为写成团队中任何人都能读懂的示例。Cucumber 等工具可以把这些示例当作自动化测试来运行。它是行为驱动开发（BDD）背后的格式。",
    keywordsHeading: "关键字",
    keywords: [
      ["Feature", "为所描述的事物命名，并用一句简短的话说明它的意义。"],
      ["Scenario", "行为的一个具体示例，写成一个简短的步骤列表。"],
      ["Given", "起始状态，即任何事情发生之前。"],
      ["When", "用户（或测试）执行的操作。"],
      ["Then", "随后你期望看到的结果。"],
      ["And, But", "接续上一步，无需重复它的关键字。"]
    ],
    exampleHeading: "示例",
    exampleLabel: "Gherkin · Given-When-Then",
    exampleText: "Feature: Search\n  Scenario: Search and see results\n    Given I am on https://google.com\n    When I type \"testing examples\" in the search box and click submit\n    Then I see search results",
    codePre: "每个步骤都是纯文本，测试工具会把它映射到一行代码。同一场景的 Selenium 和 Playwright 代码见",
    codeLinkText: "Given-When-Then 示例",
    codePost: "页面。"
  };

  const AR: Messages = {
    title: "ما هو Gherkin؟",
    metaDescription:
      "Gherkin هو صيغة Given-When-Then بلغة بسيطة تُستخدم لوصف كيف ينبغي أن يتصرف البرنامج ولتشغيل الاختبارات الآلية.",
    heading: "ما هو Gherkin؟",
    intro:
      "Gherkin صيغة صغيرة بلغة بسيطة لكتابة كيف ينبغي أن يتصرف البرنامج، على شكل أمثلة يستطيع أي فرد في الفريق قراءتها. ويمكن لأدوات مثل Cucumber تشغيل تلك الأمثلة كاختبارات آلية. وهي الصيغة التي يقوم عليها التطوير الموجَّه بالسلوك (BDD).",
    keywordsHeading: "الكلمات المفتاحية",
    keywords: [
      ["Feature", "تسمّي الشيء الموصوف، مع جملة قصيرة عن أهميته."],
      ["Scenario", "مثال واحد محدد على السلوك، مكتوب كقائمة قصيرة من الخطوات."],
      ["Given", "الوضع الابتدائي قبل أن يحدث أي شيء."],
      ["When", "الإجراء الذي يقوم به المستخدم (أو الاختبار)."],
      ["Then", "النتيجة التي تتوقع رؤيتها بعد ذلك."],
      ["And, But", "تواصل الخطوة السابقة دون تكرار كلمتها المفتاحية."]
    ],
    exampleHeading: "مثال",
    exampleLabel: "Gherkin · Given-When-Then",
    exampleText: "Feature: Search\n  Scenario: Search and see results\n    Given I am on https://google.com\n    When I type \"testing examples\" in the search box and click submit\n    Then I see search results",
    codePre: "كل خطوة نص عادي تربطه أداة الاختبار بسطر من الشيفرة. شاهد السيناريو نفسه مكتوبًا بشيفرة Selenium وPlaywright في صفحة ",
    codeLinkText: "أمثلة Given-When-Then",
    codePost: "."
  };

  const KO: Messages = {
    title: "Gherkin이란 무엇인가?",
    metaDescription:
      "Gherkin은 소프트웨어가 어떻게 동작해야 하는지 설명하고 자동화 테스트를 실행하는 데 쓰는 평이한 언어의 Given-When-Then 문법입니다.",
    heading: "Gherkin이란 무엇인가?",
    intro:
      "Gherkin은 소프트웨어가 어떻게 동작해야 하는지를 팀의 누구나 읽을 수 있는 예제로 적는, 작고 평이한 언어의 문법입니다. Cucumber 같은 도구가 이 예제를 자동화 테스트로 실행할 수 있습니다. 행동 주도 개발(BDD)의 바탕이 되는 형식입니다.",
    keywordsHeading: "키워드",
    keywords: [
      ["Feature", "설명하려는 대상에 이름을 붙이고, 왜 중요한지 짧은 문장으로 적습니다."],
      ["Scenario", "동작의 구체적인 예 하나를 짧은 단계 목록으로 적습니다."],
      ["Given", "아무 일도 일어나기 전의 시작 상황입니다."],
      ["When", "사용자(또는 테스트)가 하는 행동입니다."],
      ["Then", "그 뒤에 보게 될 것으로 기대하는 결과입니다."],
      ["And, But", "앞 단계를 이어 가며 키워드를 반복하지 않습니다."]
    ],
    exampleHeading: "예제",
    exampleLabel: "Gherkin · Given-When-Then",
    exampleText: "Feature: Search\n  Scenario: Search and see results\n    Given I am on https://google.com\n    When I type \"testing examples\" in the search box and click submit\n    Then I see search results",
    codePre: "각 단계는 테스트 도구가 코드 한 줄에 연결하는 평문입니다. 같은 시나리오를 Selenium과 Playwright 코드로 작성한 모습은 ",
    codeLinkText: "Given-When-Then 예제",
    codePost: " 페이지에서 볼 수 있습니다."
  };

  const FR: Messages = {
    title: "Qu'est-ce que Gherkin ?",
    metaDescription:
      "Gherkin est la syntaxe Given-When-Then en langage courant qui sert à décrire le comportement attendu d'un logiciel et à piloter des tests automatisés.",
    heading: "Qu'est-ce que Gherkin ?",
    intro:
      "Gherkin est une petite syntaxe en langage courant pour décrire le comportement attendu d'un logiciel sous forme d'exemples que chaque membre de l'équipe peut lire. Des outils comme Cucumber peuvent ensuite exécuter ces exemples comme des tests automatisés. C'est le format qui sous-tend le développement piloté par le comportement (BDD).",
    keywordsHeading: "Les mots-clés",
    keywords: [
      ["Feature", "nomme ce qui est décrit, avec une courte phrase sur son intérêt."],
      ["Scenario", "un exemple concret du comportement, écrit comme une courte liste d'étapes."],
      ["Given", "la situation de départ, avant que quoi que ce soit se produise."],
      ["When", "l'action de l'utilisateur (ou du test)."],
      ["Then", "le résultat que vous vous attendez à voir ensuite."],
      ["And, But", "prolongent l'étape précédente sans répéter son mot-clé."]
    ],
    exampleHeading: "Un exemple",
    exampleLabel: "Gherkin · Given-When-Then",
    exampleText: "Feature: Search\n  Scenario: Search and see results\n    Given I am on https://google.com\n    When I type \"testing examples\" in the search box and click submit\n    Then I see search results",
    codePre: "Chaque étape est du texte simple qu'un outil de test associe à une ligne de code. Voyez le même scénario écrit en code Selenium et Playwright sur la page des ",
    codeLinkText: "exemples Given-When-Then",
    codePost: "."
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

  <h2>{m.keywordsHeading}</h2>
  <ul class="repo-list">
    {#each m.keywords as [keyword, description] (keyword)}
      <li><strong dir="ltr">{keyword}</strong> — {description}</li>
    {/each}
  </ul>

  <h2>{m.exampleHeading}</h2>
  <CodeBlock label={m.exampleLabel}>
    <pre dir="ltr"><code>{m.exampleText}</code></pre>
  </CodeBlock>

  <p>
    {m.codePre}<a href={localeHref(locale, 'given-when-then')}>{m.codeLinkText}</a>{m.codePost}
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
