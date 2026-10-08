<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    askAiHeading: string;
    cloudHostingLabel: string;
    ctaBackToLearn: string;
    ctaHowToStart: string;
    s5AskAi: string[];
    s5Heading: string;
    s5P1Post: string;
    s5P2: string;
    s5P3Mid: string;
    s5P3Post: string;
    s5P3Pre: string;
  };

  const EN_001: Messages = {
    askAiHeading: "Examples you can ask AI",
    cloudHostingLabel: "Cloud hosting",
    ctaBackToLearn: "Back to Learn",
    ctaHowToStart: "How to start learning →",
    s5AskAi: [
      "What does 'the cloud' actually mean in plain terms, and why would a test suite need it instead of just running on my own laptop?",
      "What's the practical difference between running my tests on my own machine versus a cloud browser farm, for a small team?",
      "How do I decide whether a growing test suite is genuinely ready to move to a cloud CI provider, and what should I check before making that switch?"
    ],
    s5Heading: "Cloud hosting for testing",
    s5P1Post: " means running infrastructure — servers, browsers, CI runners — on someone else's computers instead of ones you own, paying for what you actually use rather than buying and maintaining hardware yourself.",
    s5P2: "Here's why that belongs on a testing page: cloud browser farms let a test suite run against real devices and dozens of real browser and operating-system combinations that nobody could reasonably install and maintain locally. And cloud CI providers (GitHub Actions, mentioned below under CI/CD, is one) give every test run a fresh, disposable machine — so a test can't quietly pass only because of state a previous run happened to leave behind, a subtle bug class that's much harder to hide once every run starts from nothing.",
    s5P3Mid: ", or watch ",
    s5P3Post: " for a video introduction.",
    s5P3Pre: "Learn more at AWS's "
  };

  const EN_US: Messages = {
    ...EN_001
  };

  const CY: Messages = {
    askAiHeading: "Enghreifftiau y gallwch eu gofyn i ddeallusrwydd artiffisial",
    cloudHostingLabel: "Cynnal ar y cwmwl",
    ctaBackToLearn: "Yn ôl i Dysgu",
    ctaHowToStart: "Sut i ddechrau dysgu →",
    s5AskAi: [
      "Beth mae 'y cwmwl' yn ei olygu mewn gwirionedd mewn termau plaen, a pham fyddai angen set brofion arno yn lle dim ond rhedeg ar fy ngliniadur fy hun?",
      "Beth yw'r gwahaniaeth ymarferol rhwng rhedeg fy mhrofion ar fy mheiriant fy hun o gymharu â fferm porwr cwmwl, ar gyfer tîm bach?",
      "Sut ydw i'n penderfynu a yw set brofion sy'n tyfu wir yn barod i symud i ddarparwr CI cwmwl, a beth ddylwn i ei wirio cyn gwneud y newid hwnnw?"
    ],
    s5Heading: "Cynnal ar y cwmwl ar gyfer profi",
    s5P1Post: " yn golygu rhedeg seilwaith — gweinyddion, porwyr, rhedwyr CI — ar gyfrifiaduron rhywun arall yn lle rhai rydych chi'n berchen arnyn nhw, gan dalu am yr hyn rydych chi'n ei ddefnyddio mewn gwirionedd yn hytrach na phrynu a chynnal caledwedd eich hun.",
    s5P2: "Dyma pam mae hynny'n perthyn i dudalen am brofi: mae ffermydd porwr cwmwl yn gadael i set brofion redeg yn erbyn dyfeisiau go iawn a dwsinau o gyfuniadau porwr a system weithredu go iawn na allai neb yn rhesymol eu gosod a'u cynnal yn lleol. Ac mae darparwyr CI cwmwl (mae GitHub Actions, y soniwyd amdano isod o dan CI/CD, yn un) yn rhoi peiriant ffres, tafladwy i bob rhediad prawf — fel na all prawf basio'n dawel dim ond oherwydd cyflwr y digwyddodd rhediad blaenorol ei adael ar ôl, math cynnil o fyg sy'n llawer anos ei guddio unwaith mae pob rhediad yn dechrau o ddim.",
    s5P3Mid: ", neu gwyliwch ",
    s5P3Post: " ar gyfer cyflwyniad fideo.",
    s5P3Pre: "Dysgwch fwy yng nghyflwyniad AWS i "
  };

  const ZH: Messages = {
    askAiHeading: "可以向 AI 提问的示例",
    cloudHostingLabel: "云托管",
    ctaBackToLearn: "返回学习",
    ctaHowToStart: "如何开始学习 →",
    s5AskAi: [
      "用简单的话说，“云”到底是什么意思？为什么一个测试套件需要用到它，而不是直接在自己的笔记本电脑上运行？",
      "对于一个小团队来说，在自己的机器上运行测试和在云端浏览器集群上运行测试，实际的区别是什么？",
      "我该如何判断一个不断增长的测试套件是否真的到了该迁移到云端 CI 提供商的时候？在做这个切换之前该检查什么？"
    ],
    s5Heading: "用于测试的云托管",
    s5P1Post: "是指在别人的计算机上运行基础设施——服务器、浏览器、CI 运行器——而不是自己拥有的机器上，按实际使用量付费，而不用自己购买和维护硬件。",
    s5P2: "这就是为什么它出现在一个测试相关的页面上：云端浏览器集群让测试套件能够针对真实设备和几十种真实的浏览器/操作系统组合运行，而这些组合没有人能合理地在本地全部安装和维护。而云端 CI 提供商（下面提到的 CI/CD 部分中的 GitHub Actions 就是其中之一）会为每一次测试运行提供一台全新的、用完即弃的机器——这样测试就不可能仅仅因为上一次运行碰巧留下的某些状态而悄悄通过，一旦每次运行都从零开始，这类隐蔽的缺陷就更难藏身。",
    s5P3Mid: "，或观看",
    s5P3Post: "视频介绍。",
    s5P3Pre: "可以进一步阅读 AWS 的"
  };

  const AR: Messages = {
    askAiHeading: "أمثلة يمكنك طرحها على الذكاء الاصطناعي",
    cloudHostingLabel: "الاستضافة السحابية",
    ctaBackToLearn: "العودة إلى تعلّم",
    ctaHowToStart: "كيف تبدأ التعلم ←",
    s5AskAi: [
      "ماذا تعني «السحابة» فعلًا بعبارات بسيطة، ولماذا تحتاج مجموعة اختبارات إليها بدلًا من العمل على حاسوبي المحمول فحسب؟",
      "ما الفرق العملي بين تشغيل اختباراتي على جهازي ومزرعة متصفحات سحابية لفريق صغير؟",
      "كيف أقرر ما إذا كانت مجموعة اختبارات متنامية جاهزة فعلًا للانتقال إلى مزوّد CI سحابي، وما الذي ينبغي فحصه قبل ذلك الانتقال؟"
    ],
    s5Heading: "الاستضافة السحابية للاختبار",
    s5P1Post: " تعني تشغيل البنية التحتية — الخوادم والمتصفحات ومشغّلات CI — على حواسيب شخص آخر بدلًا من حواسيب تملكها، والدفع مقابل ما تستخدمه فعلًا بدلًا من شراء العتاد وصيانته بنفسك.",
    s5P2: "وإليك لماذا ينتمي هذا إلى صفحة عن الاختبار: تتيح مزارع المتصفحات السحابية لمجموعة الاختبارات أن تعمل على أجهزة حقيقية وعشرات التوليفات الحقيقية من المتصفحات وأنظمة التشغيل التي لا يستطيع أحد تثبيتها وصيانتها محليًا بشكل معقول. ويمنح مزودو CI السحابيون (ومنهم GitHub Actions المذكور أدناه في CI/CD) كل تشغيل اختبار جهازًا جديدًا قابلًا للتخلص منه — فلا ينجح الاختبار بصمت بسبب حالة تركها تشغيل سابق فحسب، وهي فئة أخطاء خفية يصعب إخفاؤها كثيرًا حين يبدأ كل تشغيل من الصفر.",
    s5P3Mid: " من AWS، أو شاهد ",
    s5P3Post: " كمقدمة مرئية.",
    s5P3Pre: "اعرف المزيد في "
  };

  const KO: Messages = {
    askAiHeading: "AI에게 물어볼 수 있는 예시",
    cloudHostingLabel: "클라우드 호스팅",
    ctaBackToLearn: "학습으로 돌아가기",
    ctaHowToStart: "학습 시작하기 →",
    s5AskAi: [
      "'클라우드'는 실제로 쉬운 말로 무슨 뜻이며, 테스트 스위트가 제 노트북에서만 실행되는 대신 왜 그것을 필요로 하나요?",
      "작은 팀에게 내 컴퓨터에서 테스트를 실행하는 것과 클라우드 브라우저 팜에서 실행하는 것의 실질적인 차이는 무엇인가요?",
      "커져 가는 테스트 스위트가 클라우드 CI 제공업체로 옮길 준비가 정말 되었는지 어떻게 판단하며, 옮기기 전에 무엇을 확인해야 하나요?"
    ],
    s5Heading: "테스트를 위한 클라우드 호스팅",
    s5P1Post: "은 서버, 브라우저, CI 러너 같은 인프라를 내가 소유한 컴퓨터가 아니라 다른 사람의 컴퓨터에서 실행하고, 하드웨어를 직접 사서 유지하는 대신 실제로 사용한 만큼만 비용을 내는 것을 뜻합니다.",
    s5P2: "이것이 테스트 페이지에 속하는 이유는 다음과 같습니다. 클라우드 브라우저 팜을 이용하면 테스트 스위트를 실제 기기와, 누구도 로컬에 합리적으로 설치하고 유지할 수 없는 수십 가지 실제 브라우저와 운영 체제 조합에서 실행할 수 있습니다. 그리고 클라우드 CI 제공업체(아래 CI/CD에서 언급하는 GitHub Actions도 그중 하나입니다)는 모든 테스트 실행에 새로 만든 일회용 머신을 제공하므로, 이전 실행이 우연히 남겨 둔 상태 덕분에 테스트가 조용히 통과하는 일이 없습니다. 모든 실행이 아무것도 없는 상태에서 시작되면 숨기기가 훨씬 어려워지는, 미묘한 버그 종류입니다.",
    s5P3Mid: "를 보거나, ",
    s5P3Post: " 영상으로 입문하세요.",
    s5P3Pre: "더 알아보려면 AWS의 "
  };

  const FR: Messages = {
    askAiHeading: "Exemples à demander à l'IA",
    cloudHostingLabel: "L'hébergement dans le cloud",
    ctaBackToLearn: "Retour à Apprendre",
    ctaHowToStart: "Comment commencer à apprendre →",
    s5AskAi: [
      "Que signifie réellement « le cloud », en termes simples, et pourquoi une suite de tests en aurait-elle besoin plutôt que de simplement s'exécuter sur mon propre ordinateur portable ?",
      "Quelle est la différence pratique entre exécuter mes tests sur ma propre machine et sur une ferme de navigateurs dans le cloud, pour une petite équipe ?",
      "Comment décider si une suite de tests qui grandit est vraiment prête à passer à un fournisseur de CI dans le cloud, et que vérifier avant de faire ce changement ?"
    ],
    s5Heading: "L'hébergement dans le cloud pour les tests",
    s5P1Post: " consiste à faire tourner de l'infrastructure — serveurs, navigateurs, exécuteurs de CI — sur les ordinateurs de quelqu'un d'autre plutôt que sur les vôtres, en payant ce que vous utilisez réellement au lieu d'acheter et de maintenir du matériel vous-même.",
    s5P2: "Voici pourquoi cela a sa place sur une page consacrée aux tests : les fermes de navigateurs dans le cloud permettent à une suite de tests de s'exécuter sur de vrais appareils et sur des dizaines de combinaisons réelles de navigateurs et de systèmes d'exploitation que personne ne pourrait raisonnablement installer et maintenir en local. Et les fournisseurs de CI dans le cloud (GitHub Actions, mentionné plus bas dans la section CI/CD, en est un) donnent à chaque exécution de test une machine neuve et jetable — de sorte qu'un test ne peut pas passer discrètement uniquement à cause d'un état laissé par une exécution précédente, une classe de bugs subtils bien plus difficile à dissimuler quand chaque exécution repart de zéro.",
    s5P3Mid: ", ou regardez la vidéo ",
    s5P3Post: " pour une présentation en vidéo.",
    s5P3Pre: "Pour en savoir plus, consultez "
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
  <title>{m.s5Heading} — Testing Examples</title>
  <meta name="description" content={m.s5Heading} />
</svelte:head>

<div class="page-header">
  <h1>{m.s5Heading}</h1>
</div>

<section class="section prose">
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
