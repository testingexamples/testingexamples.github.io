<script lang="ts">
  import {
    SectionHeading,
    SummaryList,
    SummaryListItem,
    Separator,
    InformationCallout,
    CallToAction,
    CodeBlock
  } from 'lily-design-system-svelte-headless';
  import {
    REPO,
    LICENSE,
    GENERIC_DEMO_REPOS,
    NHS_WALES_DEMO_REPOS,
    DEMO_MATRIX,
    DEMO_MATRIX_COUNT,
    demoRepoUrl
  } from '#lib/site.js';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    whatForHeading: string;
    whatForP: string;
    factsLabel: string;
    factName: string;
    factLicence: string;
    factAuthor: string;
    factRepository: string;
    factFixtureContract: string;
    factFixtureContractSuffix: string;
    matrixHeading: string;
    matrixP1: string;
    matrixP2: string;
    tableCaption: string;
    columnTool: string;
    columnLanguage: string;
    columnThisSite: string;
    notBuilt: string;
    walkthroughsHeading: string;
    workedExampleHeading: string;
    workedExampleSuffix: string;
    builtHeading: string;
    builtP: string;
    designSystemLabel: string;
    designSystemP: string;
    exceptionP: string;
    runLocallyLabel: string;
    repoCta: string;
  };

  const EN_001: Messages = {
    title: 'About',
    metaDescription: `About Testing Examples: what it is, the ${DEMO_MATRIX_COUNT} sibling demo repos it supports, and how this site is built.`,
    heading: 'About',
    intro: 'Testing Examples provides free open source testing examples for browser automation.',
    whatForHeading: 'What this site is for',
    whatForP:
      'The practice page is a deliberately plain page of HTML fixtures — elements with known ids, names, classes, link text, lists, and form inputs — for anyone learning or exercising browser automation tools such as Selenium WebDriver, WebdriverIO, or Playwright. It is meant to be a stable target: the same markup, the same identifiers, the same visible text, every time.',
    factsLabel: 'Project facts',
    factName: 'Name',
    factLicence: 'Licence',
    factAuthor: 'Author',
    factRepository: 'Repository',
    factFixtureContract: 'Fixture contract',
    factFixtureContractSuffix: 'in the repository',
    matrixHeading: `${DEMO_MATRIX_COUNT} demo repos, three tools times up to four languages times up to four targets`,
    matrixP1:
      "Every sibling repo pairs one browser-automation tool (Selenium, WebdriverIO, or Playwright) with one language (JavaScript, Python, Rust, or TypeScript) against one target. Two targets are real, runnable demos: this site's own fixture page (five of these repos — the ones whose exact ids, names, classes, and text this site's AGENTS.md and spec/index.md treat as a contract) and the real, public nhs.wales government site. The other two targets, Google Search and Google Maps, are illustrative only — each such repo's own AGENTS.md states plainly that its code must never be executed against the live site, since Google's Terms of Service restrict automated querying; see",
    matrixP2:
      'for the same pattern shown directly on this site. Two cells are empty on purpose — Selenium TypeScript and WebdriverIO TypeScript have no NHS Wales variant.',
    tableCaption: 'The complete demo repo family, one row per tool and language, one column per target',
    columnTool: 'Tool',
    columnLanguage: 'Language',
    columnThisSite: 'This site',
    notBuilt: 'Not built for this language',
    walkthroughsHeading: 'Locator-strategy walkthroughs (target this site)',
    workedExampleHeading: 'A worked real-world example (targets nhs.wales)',
    workedExampleSuffix: 'The other five NHS Wales repos follow the same pattern in the table above.',
    builtHeading: 'How the site is built',
    builtP:
      'This site is a SvelteKit project using @sveltejs/adapter-static, prerendered to plain HTML and deployed to GitHub Pages by GitHub Actions on every push to main.',
    designSystemLabel: 'Design system',
    designSystemP:
      "The components come from the Lily Design System — Svelte components that render semantic HTML and correct ARIA, carrying one stable class hook each. This site uses Lily's own official themes too: all 45 files under static/assets/themes/, copied verbatim from Lily's repository, each a complete, self-contained stylesheet styling every one of Lily's ~492 components — not just two hand-picked colours. static/assets/style.css therefore no longer styles Lily's own component hooks at all; it holds a small alias layer, this site's own header/nav/footer layout (not Lily components), and a handful of explicitly documented exceptions where a Lily default didn't suit this site's specific layout — see that file's own header comment for exactly what and why. Lily's ThemePicker swaps between the 45 themes live.",
    exceptionP:
      "The one exception is the practice page's fixture section (Id Examples through Input Submit Example): those elements are kept as plain HTML, not Lily components, so their ids, names, classes, and text stay exactly what the sibling demo repos expect.",
    runLocallyLabel: 'Run this site locally',
    repoCta: 'The repository on GitHub'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // prose (LICENSE stays "Licence" the British way even for en-us, since
  // it is this project's own SPDX-style project fact, not free prose — see
  // spec/locales/index.md), so all four English locales share one copy.
  const CY: Messages = {
    title: 'Ynghylch',
    metaDescription: `Ynghylch Testing Examples: beth ydyw, y ${DEMO_MATRIX_COUNT} o ystorfeydd arddangos chwaer y mae'n eu cefnogi, a sut mae'r wefan hon wedi'i hadeiladu.`,
    heading: 'Ynghylch',
    intro: "Mae Testing Examples yn darparu enghreifftiau profi cod agored am ddim ar gyfer awtomatiaeth porwr.",
    whatForHeading: "Diben y wefan hon",
    whatForP:
      "Mae'r dudalen ymarfer yn dudalen blaen yn fwriadol, o gynnwys HTML sefydlog — elfennau ag ids, names, classes, testun dolen, rhestrau a mewnbynnau ffurflen hysbys — ar gyfer unrhyw un sy'n dysgu neu'n ymarfer offer awtomatiaeth porwr fel Selenium WebDriver, WebdriverIO, neu Playwright. Bwriedir iddi fod yn darged sefydlog: yr un marcio, yr un dynodwyr, yr un testun gweladwy, bob tro.",
    factsLabel: "Ffeithiau'r prosiect",
    factName: 'Enw',
    factLicence: 'Trwydded',
    factAuthor: 'Awdur',
    factRepository: 'Ystorfa',
    factFixtureContract: 'Cytundeb y cynnwys sefydlog',
    factFixtureContractSuffix: 'yn yr ystorfa',
    matrixHeading: `${DEMO_MATRIX_COUNT} o ystorfeydd arddangos, tri offeryn wedi'u lluosi â hyd at bedair iaith wedi'u lluosi â hyd at bedwar targed`,
    matrixP1:
      "Mae pob ystorfa chwaer yn paru un offeryn awtomatiaeth porwr (Selenium, WebdriverIO, neu Playwright) ag un iaith (JavaScript, Python, Rust, neu TypeScript) yn erbyn un targed. Mae dau darged yn arddangosiadau go iawn, y gellir eu rhedeg: tudalen cynnwys sefydlog y wefan hon ei hun (pump o'r ystorfeydd hyn — y rhai y mae AGENTS.md a spec/index.md y wefan hon yn trin eu ids, names, classes a'u testun union fel cytundeb) a gwefan gyhoeddus go iawn y llywodraeth, nhs.wales. Mae'r ddau darged arall, Google Search a Google Maps, at ddibenion enghreifftiol yn unig — mae AGENTS.md pob un o'r ystorfeydd hynny'n datgan yn glir na ddylid byth redeg ei god yn erbyn y wefan fyw, gan fod Telerau Gwasanaeth Google yn cyfyngu ar ymholi awtomatig; gweler",
    matrixP2:
      "am yr un patrwm wedi'i ddangos yn uniongyrchol ar y wefan hon. Mae dwy gell yn wag yn fwriadol — nid oes gan Selenium TypeScript na WebdriverIO TypeScript amrywiad NHS Wales.",
    tableCaption: "Y teulu cyflawn o ystorfeydd arddangos, un rhes ar gyfer pob offeryn ac iaith, un golofn ar gyfer pob targed",
    columnTool: 'Offeryn',
    columnLanguage: 'Iaith',
    columnThisSite: 'Y wefan hon',
    notBuilt: "Heb ei adeiladu ar gyfer yr iaith hon",
    walkthroughsHeading: "Arweiniadau cam wrth gam i strategaethau lleoli (targed: y wefan hon)",
    workedExampleHeading: "Enghraifft ymarferol o'r byd go iawn (targed: nhs.wales)",
    workedExampleSuffix: "Mae'r pum ystorfa NHS Wales arall yn dilyn yr un patrwm yn y tabl uchod.",
    builtHeading: "Sut mae'r wefan wedi'i hadeiladu",
    builtP:
      "Mae'r wefan hon yn brosiect SvelteKit sy'n defnyddio @sveltejs/adapter-static, wedi'i ragrendro'n HTML plaen ac wedi'i ddefnyddio ar GitHub Pages gan GitHub Actions ar bob gwthiad i main.",
    designSystemLabel: 'System ddylunio',
    designSystemP:
      "Daw'r cydrannau o'r Lily Design System — cydrannau Svelte sy'n rendro HTML semantig ac ARIA cywir, gan gario un bachyn dosbarth sefydlog yr un. Mae'r wefan hon hefyd yn defnyddio themâu swyddogol Lily ei hun: pob un o'r 45 ffeil o dan static/assets/themes/, wedi'u copïo air am air o ystorfa Lily, pob un yn daflen arddull gyflawn, hunangynhwysol sy'n arddulio pob un o ~492 cydran Lily — nid dim ond dau liw wedi'u dewis â llaw. Nid yw static/assets/style.css felly'n arddulio bachau cydrannau Lily ei hun mwyach o gwbl; mae'n cynnwys haen alias fach, cynllun pennyn/llywio/troedyn y wefan hon ei hun (nid cydrannau Lily), a llond dwrn o eithriadau wedi'u dogfennu'n benodol lle nad oedd rhagosodiad Lily'n gweddu i gynllun penodol y wefan hon — gweler sylw pennyn y ffeil honno ei hun am yn union beth a pham. Mae ThemePicker Lily'n newid rhwng y 45 thema'n fyw.",
    exceptionP:
      "Yr unig eithriad yw adran cynnwys sefydlog y dudalen ymarfer (Id Examples hyd at Input Submit Example): cedwir yr elfennau hynny fel HTML plaen, nid cydrannau Lily, fel bod eu ids, names, classes a'u testun yn aros yn union fel y mae'r ystorfeydd arddangos chwaer yn eu disgwyl.",
    runLocallyLabel: "Rhedeg y wefan hon yn lleol",
    repoCta: "Yr ystorfa ar GitHub"
  };

  const ZH: Messages = {
    title: '关于',
    metaDescription: `关于 Testing Examples：它是什么、它支持的 ${DEMO_MATRIX_COUNT} 个姐妹演示仓库，以及本站是如何构建的。`,
    heading: '关于',
    intro: 'Testing Examples 提供免费、开源的浏览器自动化测试示例。',
    whatForHeading: '本站的用途',
    whatForP:
      '练习页面是一个刻意保持简单的 HTML 测试夹具页面——包含已知 id、name、class、链接文字、列表和表单输入的元素——供任何学习或使用 Selenium WebDriver、WebdriverIO 或 Playwright 等浏览器自动化工具的人使用。它的目的是成为一个稳定的目标：每次都是相同的标记、相同的标识符、相同的可见文字。',
    factsLabel: '项目信息',
    factName: '名称',
    factLicence: '许可证',
    factAuthor: '作者',
    factRepository: '仓库',
    factFixtureContract: '测试夹具约定',
    factFixtureContractSuffix: '，在仓库中',
    matrixHeading: `${DEMO_MATRIX_COUNT} 个演示仓库：三种工具 × 最多四种语言 × 最多四个目标`,
    matrixP1:
      '每个姐妹仓库都将一种浏览器自动化工具（Selenium、WebdriverIO 或 Playwright）与一种语言（JavaScript、Python、Rust 或 TypeScript）搭配，针对一个目标。有两个目标是真实、可运行的演示：本站自己的测试夹具页面（其中五个仓库——本站 AGENTS.md 和 spec/index.md 将它们的确切 id、name、class 和文字视为一种约定）以及真实、公开的 nhs.wales 政府网站。另外两个目标——谷歌搜索和谷歌地图——仅作说明用途：这些仓库各自的 AGENTS.md 都明确声明其代码绝不能针对真实站点运行，因为谷歌的服务条款限制自动化查询；请参阅',
    matrixP2: '，了解本站上直接展示的相同模式。有两个单元格是刻意留空的——Selenium TypeScript 和 WebdriverIO TypeScript 没有 NHS Wales 版本。',
    tableCaption: '完整的演示仓库家族，每行对应一种工具和语言，每列对应一个目标',
    columnTool: '工具',
    columnLanguage: '语言',
    columnThisSite: '本站',
    notBuilt: '尚未为该语言构建',
    walkthroughsHeading: '定位策略演练（目标为本站）',
    workedExampleHeading: '一个完整的真实案例（目标为 nhs.wales）',
    workedExampleSuffix: '其余五个 NHS Wales 仓库遵循上表中相同的模式。',
    builtHeading: '本站是如何构建的',
    builtP:
      '本站是一个 SvelteKit 项目，使用 @sveltejs/adapter-static 预渲染为纯 HTML，并由 GitHub Actions 在每次推送到 main 分支时部署到 GitHub Pages。',
    designSystemLabel: '设计系统',
    designSystemP:
      '这些组件来自 Lily Design System——渲染语义化 HTML 和正确 ARIA 的 Svelte 组件，每个都带有一个稳定的类名钩子。本站也使用 Lily 自己的官方主题：static/assets/themes/ 下的全部 45 个文件，逐字复制自 Lily 的仓库，每一个都是完整、自包含的样式表，为 Lily 约 492 个组件中的每一个设置样式——而不仅仅是两种手选的颜色。因此 static/assets/style.css 已经完全不再为 Lily 自己的组件钩子设置样式；它只保留了一个小的别名层、本站自己的页眉/导航/页脚布局（不是 Lily 组件），以及少数几处明确记录的例外，说明 Lily 的默认样式在何处不适合本站的特定布局——具体是什么以及为什么，请参阅该文件自己的头部注释。Lily 的 ThemePicker 可以在这 45 个主题之间实时切换。',
    exceptionP:
      '唯一的例外是练习页面的测试夹具部分（从 Id Examples 到 Input Submit Example）：这些元素被保留为纯 HTML，而不是 Lily 组件，以确保它们的 id、name、class 和文字与姐妹演示仓库所期望的完全一致。',
    runLocallyLabel: '在本地运行本站',
    repoCta: 'GitHub 上的仓库'
  };

  const AR: Messages = {
    title: 'حول',
    metaDescription: `حول Testing Examples: ما هو، ومستودعات العرض التوضيحي الشقيقة البالغ عددها ${DEMO_MATRIX_COUNT} التي يدعمها، وكيف بُني هذا الموقع.`,
    heading: 'حول',
    intro: 'يقدّم Testing Examples أمثلة اختبار مجانية ومفتوحة المصدر لأتمتة المتصفح.',
    whatForHeading: 'ما الغرض من هذا الموقع',
    whatForP:
      'صفحة التدريب صفحة بسيطة عن قصد من تجهيزات HTML — عناصر ذات معرّفات (ids) وأسماء وفئات ونصوص روابط وقوائم ومدخلات نماذج معروفة — لكل من يتعلم أدوات أتمتة المتصفح أو يتدرب عليها مثل Selenium WebDriver أو WebdriverIO أو Playwright. والمقصود أن تكون هدفًا ثابتًا: العلامات نفسها، والمعرّفات نفسها، والنص المرئي نفسه، في كل مرة.',
    factsLabel: 'حقائق المشروع',
    factName: 'الاسم',
    factLicence: 'الترخيص',
    factAuthor: 'المؤلف',
    factRepository: 'المستودع',
    factFixtureContract: 'عقد التجهيزات',
    factFixtureContractSuffix: 'في المستودع',
    matrixHeading: `${DEMO_MATRIX_COUNT} مستودع عرض توضيحي: ثلاث أدوات × حتى أربع لغات × حتى أربعة أهداف`,
    matrixP1:
      'يجمع كل مستودع شقيق بين أداة أتمتة متصفح واحدة (Selenium أو WebdriverIO أو Playwright) ولغة واحدة (JavaScript أو Python أو Rust أو TypeScript) وهدف واحد. هدفان منها عرضان توضيحيان حقيقيان قابلان للتشغيل: صفحة التجهيزات الخاصة بهذا الموقع (خمسة من هذه المستودعات — تلك التي يعامل ملفا AGENTS.md وspec/index.md في هذا الموقع معرّفاتها وأسماءها وفئاتها ونصوصها بالضبط كعقد) وموقع الحكومة العام الحقيقي nhs.wales. أما الهدفان الآخران، Google Search وGoogle Maps، فتوضيحيان فقط — يذكر ملف AGENTS.md في كل مستودع من هذا النوع بوضوح أنه يجب ألا يُنفَّذ كوده أبدًا على الموقع الحي، لأن شروط خدمة Google تقيّد الاستعلام الآلي؛ انظر',
    matrixP2:
      'للاطلاع على النمط نفسه مباشرةً في هذا الموقع. خليتان فارغتان عن قصد — فلا توجد نسخة NHS Wales من Selenium TypeScript ولا من WebdriverIO TypeScript.',
    tableCaption: 'عائلة مستودعات العرض التوضيحي كاملة، صف لكل أداة ولغة، وعمود لكل هدف',
    columnTool: 'الأداة',
    columnLanguage: 'اللغة',
    columnThisSite: 'هذا الموقع',
    notBuilt: 'لم يُنشأ لهذه اللغة',
    walkthroughsHeading: 'شروحات استراتيجيات تحديد العناصر (تستهدف هذا الموقع)',
    workedExampleHeading: 'مثال عملي واقعي (يستهدف nhs.wales)',
    workedExampleSuffix: 'تتبع مستودعات NHS Wales الخمسة الأخرى النمط نفسه في الجدول أعلاه.',
    builtHeading: 'كيف بُني الموقع',
    builtP:
      'هذا الموقع مشروع SvelteKit يستخدم @sveltejs/adapter-static، ويُولَّد مسبقًا إلى HTML عادي ويُنشر على GitHub Pages عبر GitHub Actions مع كل دفع إلى main.',
    designSystemLabel: 'نظام التصميم',
    designSystemP:
      'تأتي المكونات من Lily Design System — مكونات Svelte تُخرج HTML دلاليًا وARIA صحيحة، ويحمل كل منها خطّاف فئة ثابتًا واحدًا. ويستخدم هذا الموقع كذلك سمات Lily الرسمية نفسها: جميع الملفات الخمسة والأربعين في static/assets/themes/، منسوخة حرفيًا من مستودع Lily، وكل منها ورقة أنماط كاملة قائمة بذاتها تنسّق كل مكونات Lily البالغ عددها نحو 492 — لا مجرد لونين مختارين يدويًا. ولذلك لم يعد static/assets/style.css ينسّق خطّافات مكونات Lily نفسها على الإطلاق؛ بل يحتوي طبقة صغيرة من الأسماء المستعارة، وتخطيط الرأس والتنقل والتذييل الخاص بهذا الموقع (وهي ليست مكونات Lily)، وحفنة من الاستثناءات الموثقة صراحةً حيث لم يناسب افتراضي Lily تخطيط هذا الموقع المحدد — انظر التعليق في رأس ذلك الملف لمعرفة ما هي وما سببها بالضبط. ويبدّل ThemePicker من Lily بين السمات الخمس والأربعين مباشرةً.',
    exceptionP:
      'الاستثناء الوحيد هو قسم التجهيزات في صفحة التدريب (من Id Examples إلى Input Submit Example): تبقى هذه العناصر HTML عاديًا لا مكونات Lily، لتبقى معرّفاتها وأسماؤها وفئاتها ونصوصها كما تتوقعها مستودعات العرض التوضيحي الشقيقة بالضبط.',
    runLocallyLabel: 'شغّل هذا الموقع محليًا',
    repoCta: 'المستودع على GitHub'
  };

  const KO: Messages = {
    title: '소개',
    metaDescription: `Testing Examples 소개: 이것이 무엇인지, 지원하는 ${DEMO_MATRIX_COUNT}개의 자매 데모 저장소, 그리고 이 사이트가 어떻게 만들어졌는지 설명합니다.`,
    heading: '소개',
    intro: 'Testing Examples는 브라우저 자동화를 위한 무료 오픈 소스 테스트 예제를 제공합니다.',
    whatForHeading: '이 사이트의 용도',
    whatForP:
      '연습 페이지는 의도적으로 단순하게 만든 HTML 픽스처 페이지입니다. id, name, class, 링크 텍스트, 목록, 양식 입력이 정해져 있는 요소들로, Selenium WebDriver, WebdriverIO, Playwright 같은 브라우저 자동화 도구를 배우거나 연습하는 모든 사람을 위한 것입니다. 안정적인 대상이 되도록 만들어졌습니다. 언제나 같은 마크업, 같은 식별자, 같은 화면 텍스트입니다.',
    factsLabel: '프로젝트 정보',
    factName: '이름',
    factLicence: '라이선스',
    factAuthor: '저자',
    factRepository: '저장소',
    factFixtureContract: '픽스처 계약',
    factFixtureContractSuffix: '(저장소 내)',
    matrixHeading: `${DEMO_MATRIX_COUNT}개의 데모 저장소: 도구 세 가지 × 최대 네 가지 언어 × 최대 네 가지 대상`,
    matrixP1:
      '모든 자매 저장소는 브라우저 자동화 도구 하나(Selenium, WebdriverIO, Playwright 중 하나)와 언어 하나(JavaScript, Python, Rust, TypeScript 중 하나)를 하나의 대상에 짝지어 놓았습니다. 두 대상은 실제로 실행할 수 있는 데모입니다. 이 사이트 자체의 픽스처 페이지(이 사이트의 AGENTS.md와 spec/index.md가 정확한 id, name, class, 텍스트를 계약으로 다루는 저장소 다섯 개)와 실제 공개 정부 사이트 nhs.wales입니다. 나머지 두 대상인 Google Search와 Google Maps는 설명용일 뿐입니다. 이런 저장소 각각의 AGENTS.md에는 Google의 서비스 약관이 자동화된 쿼리를 제한하므로 그 코드를 실제 사이트를 상대로 절대 실행해서는 안 된다고 분명히 적혀 있습니다. 같은 패턴을 이 사이트에서 직접 보여 주는 것은 다음을 참고하세요:',
    matrixP2:
      '두 칸은 의도적으로 비어 있습니다. Selenium TypeScript와 WebdriverIO TypeScript에는 NHS Wales 버전이 없습니다.',
    tableCaption: '전체 데모 저장소 군: 도구와 언어별로 한 행, 대상별로 한 열',
    columnTool: '도구',
    columnLanguage: '언어',
    columnThisSite: '이 사이트',
    notBuilt: '이 언어용으로는 만들어지지 않음',
    walkthroughsHeading: '로케이터 전략 따라 하기 (이 사이트 대상)',
    workedExampleHeading: '실제 사례 한 가지 (nhs.wales 대상)',
    workedExampleSuffix: '나머지 다섯 개의 NHS Wales 저장소도 위 표에서 같은 패턴을 따릅니다.',
    builtHeading: '사이트가 만들어진 방식',
    builtP:
      '이 사이트는 @sveltejs/adapter-static을 사용하는 SvelteKit 프로젝트로, 일반 HTML로 미리 렌더링되어 main에 푸시될 때마다 GitHub Actions가 GitHub Pages에 배포합니다.',
    designSystemLabel: '디자인 시스템',
    designSystemP:
      '컴포넌트는 Lily Design System에서 가져왔습니다. 의미론적 HTML과 올바른 ARIA를 렌더링하고 각각 하나의 안정적인 클래스 훅을 가진 Svelte 컴포넌트입니다. 이 사이트는 Lily의 공식 테마도 그대로 사용합니다. static/assets/themes/ 아래의 45개 파일 전부를 Lily 저장소에서 그대로 복사했으며, 각각이 두 가지 색상만 손으로 고른 것이 아니라 Lily의 약 492개 컴포넌트를 모두 스타일링하는 완결된 독립 스타일시트입니다. 따라서 static/assets/style.css는 더 이상 Lily 자체의 컴포넌트 훅을 전혀 스타일링하지 않습니다. 작은 별칭 계층, 이 사이트 고유의 헤더/내비게이션/푸터 레이아웃(Lily 컴포넌트가 아님), 그리고 Lily의 기본값이 이 사이트의 특정 레이아웃에 맞지 않아 명시적으로 문서화한 소수의 예외만 담고 있습니다. 정확히 무엇이 왜 그런지는 해당 파일의 머리말 주석을 참고하세요. Lily의 ThemePicker는 45개 테마를 실시간으로 바꿔 줍니다.',
    exceptionP:
      '유일한 예외는 연습 페이지의 픽스처 섹션(Id Examples부터 Input Submit Example까지)입니다. 이 요소들은 Lily 컴포넌트가 아닌 일반 HTML로 유지되어, id, name, class, 텍스트가 자매 데모 저장소가 기대하는 그대로 유지됩니다.',
    runLocallyLabel: '이 사이트를 로컬에서 실행하기',
    repoCta: 'GitHub 저장소'
  };

  const FR: Messages = {
    title: 'À propos',
    metaDescription: `À propos de Testing Examples : ce que c'est, les ${DEMO_MATRIX_COUNT} dépôts de démonstration associés qu'il prend en charge, et comment ce site est construit.`,
    heading: 'À propos',
    intro: "Testing Examples propose des exemples de tests open source et gratuits pour l'automatisation de navigateur.",
    whatForHeading: 'À quoi sert ce site',
    whatForP:
      "La page d'exercices est une page volontairement simple de contenu HTML stable — des éléments dotés d'ids, de names, de classes, de textes de lien, de listes et de champs de formulaire connus — destinée à toute personne qui apprend ou pratique des outils d'automatisation de navigateur comme Selenium WebDriver, WebdriverIO ou Playwright. Elle se veut une cible stable : le même balisage, les mêmes identifiants, le même texte visible, à chaque fois.",
    factsLabel: 'Informations sur le projet',
    factName: 'Nom',
    factLicence: 'Licence',
    factAuthor: 'Auteur',
    factRepository: 'Dépôt',
    factFixtureContract: 'Contrat du contenu stable',
    factFixtureContractSuffix: 'dans le dépôt',
    matrixHeading: `${DEMO_MATRIX_COUNT} dépôts de démonstration : trois outils fois jusqu'à quatre langages fois jusqu'à quatre cibles`,
    matrixP1:
      "Chaque dépôt associé combine un outil d'automatisation de navigateur (Selenium, WebdriverIO ou Playwright) avec un langage (JavaScript, Python, Rust ou TypeScript) face à une cible. Deux cibles sont de vraies démonstrations exécutables : la page de contenu stable de ce site (cinq de ces dépôts — ceux dont les ids, names, classes et textes exacts sont traités comme un contrat par les fichiers AGENTS.md et spec/index.md de ce site) et le vrai site public du gouvernement gallois, nhs.wales. Les deux autres cibles, Google Search et Google Maps, sont purement illustratives — le fichier AGENTS.md de chacun de ces dépôts indique clairement que son code ne doit jamais être exécuté sur le site réel, car les conditions d'utilisation de Google limitent les requêtes automatisées ; voir",
    matrixP2:
      "pour le même schéma présenté directement sur ce site. Deux cases sont vides volontairement — Selenium TypeScript et WebdriverIO TypeScript n'ont pas de variante NHS Wales.",
    tableCaption: "La famille complète des dépôts de démonstration, une ligne par outil et par langage, une colonne par cible",
    columnTool: 'Outil',
    columnLanguage: 'Langage',
    columnThisSite: 'Ce site',
    notBuilt: "Non réalisé pour ce langage",
    walkthroughsHeading: "Parcours pas à pas des stratégies de localisation (cible : ce site)",
    workedExampleHeading: "Un exemple concret du monde réel (cible : nhs.wales)",
    workedExampleSuffix: "Les cinq autres dépôts NHS Wales suivent le même schéma que dans le tableau ci-dessus.",
    builtHeading: 'Comment le site est construit',
    builtP:
      "Ce site est un projet SvelteKit utilisant @sveltejs/adapter-static, prérendu en HTML simple et déployé sur GitHub Pages par GitHub Actions à chaque push sur main.",
    designSystemLabel: 'Système de conception',
    designSystemP:
      "Les composants proviennent du Lily Design System — des composants Svelte qui produisent du HTML sémantique et des attributs ARIA corrects, chacun avec une classe d'accroche stable. Ce site utilise aussi les thèmes officiels de Lily : les 45 fichiers de static/assets/themes/, copiés tels quels depuis le dépôt de Lily, chacun étant une feuille de style complète et autonome qui met en forme chacun des ~492 composants de Lily — et pas seulement deux couleurs choisies à la main. static/assets/style.css ne met donc plus du tout en forme les accroches des composants de Lily ; il contient une petite couche d'alias, la mise en page de l'en-tête, de la navigation et du pied de page propres à ce site (qui ne sont pas des composants Lily), et une poignée d'exceptions explicitement documentées où une valeur par défaut de Lily ne convenait pas à la mise en page de ce site — voir le commentaire d'en-tête de ce fichier pour le détail et les raisons. Le ThemePicker de Lily permet de passer d'un des 45 thèmes à l'autre en direct.",
    exceptionP:
      "La seule exception est la section de contenu stable de la page d'exercices (de Id Examples à Input Submit Example) : ces éléments restent du HTML simple, et non des composants Lily, afin que leurs ids, names, classes et textes restent exactement ce qu'attendent les dépôts de démonstration associés.",
    runLocallyLabel: 'Exécuter ce site en local',
    repoCta: 'Le dépôt sur GitHub'
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

  const TARGET_COLUMNS = $derived([
    { key: 'generic', label: m.columnThisSite },
    { key: 'googleSearch', label: 'Google Search' },
    { key: 'googleMaps', label: 'Google Maps' },
    { key: 'nhsWales', label: 'NHS Wales' }
  ] as const);
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
  <SectionHeading class="section-heading-start" heading={m.whatForHeading} level={2} />

  <p>{m.whatForP}</p>

  <SummaryList label={m.factsLabel}>
    <SummaryListItem term={m.factName}><code>Testing Examples</code></SummaryListItem>
    <SummaryListItem term={m.factLicence}>{LICENSE}</SummaryListItem>
    <SummaryListItem term={m.factAuthor}>Joel Parker Henderson</SummaryListItem>
    <SummaryListItem term={m.factRepository}><a href={REPO}>{REPO}</a></SummaryListItem>
    <SummaryListItem term={m.factFixtureContract}
      ><code>spec/index.md</code> {m.factFixtureContractSuffix}</SummaryListItem
    >
  </SummaryList>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.matrixHeading} level={2} />

  <p>
    {m.matrixP1}
    <a href={localeHref(locale, 'examples-google-search')}>Google Search examples</a> and
    <a href={localeHref(locale, 'examples-google-maps')}>Google Maps examples</a>
    {m.matrixP2}
  </p>

  <div class="table-scroll">
    <table class="demo-matrix">
      <caption class="screen-reader-span">
        {m.tableCaption}
      </caption>
      <thead>
        <tr>
          <th scope="col">{m.columnTool}</th>
          <th scope="col">{m.columnLanguage}</th>
          {#each TARGET_COLUMNS as column (column.key)}
            <th scope="col">{column.label}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each DEMO_MATRIX as family (family.tool + family.language)}
          <tr>
            <th scope="row">{family.tool}</th>
            <td>{family.language}</td>
            {#each TARGET_COLUMNS as column (column.key)}
              {@const entry = family[column.key]}
              <td>
                {#if entry}
                  <a
                    href={demoRepoUrl(entry)}
                    aria-label="{family.tool} {family.language} for {column.label}"
                    >{entry.org}/<wbr /><code>{entry.name}</code></a
                  >
                {:else}
                  <span aria-hidden="true">—</span>
                  <span class="screen-reader-span">{m.notBuilt}</span>
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <h3>{m.walkthroughsHeading}</h3>
  <ul class="repo-list">
    {#each GENERIC_DEMO_REPOS as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}
      </li>
    {/each}
  </ul>

  <h3>{m.workedExampleHeading}</h3>
  <ul class="repo-list">
    {#each NHS_WALES_DEMO_REPOS.slice(0, 1) as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}. {m.workedExampleSuffix}
      </li>
    {/each}
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.builtHeading} level={2} />

  <p>{m.builtP}</p>

  <InformationCallout label={m.designSystemLabel}>
    <p>{m.designSystemP}</p>
  </InformationCallout>

  <p>{m.exceptionP}</p>

  <CodeBlock label={m.runLocallyLabel}>
    <pre><code>{`git clone ${REPO}
cd testingexamples.github.io
pnpm install
pnpm dev`}</code></pre>
  </CodeBlock>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href={REPO}>{m.repoCta}</CallToAction>
  </p>
</section>
