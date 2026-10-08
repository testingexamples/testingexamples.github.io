<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    aboutLinkText: string;
    askAiHeading: string;
    ctaBackToLearn: string;
    ctaHowToStart: string;
    examplesLinkText: string;
    gitLabel: string;
    pullRequestLabel: string;
    s2AskAi: string[];
    s2Heading: string;
    s2P1a: string;
    s2P1b: string;
    s2P2Label: string;
    s2P2a: string;
    s2P2b: string;
    s2P3a: string;
    s2P3b: string;
    s2P3c: string;
    s2P4Mid: string;
    s2P4Mid2: string;
    s2P4Post: string;
    s2P4Pre: string;
  };

  const EN_001: Messages = {
    aboutLinkText: "about",
    askAiHeading: "Examples you can ask AI",
    ctaBackToLearn: "Back to Learn",
    ctaHowToStart: "How to start learning →",
    examplesLinkText: "examples",
    gitLabel: "Git",
    pullRequestLabel: "pull request",
    s2AskAi: [
      "I've never used git before — what does 'committing' and 'pushing' actually mean, in plain terms, and why do I need either one just to write a test script?",
      "I accidentally committed a change I want to undo — what's a safe way to undo it without losing other work?",
      "How should a team structure git branches and pull requests specifically around test code, so a flaky or broken test doesn't block unrelated changes?"
    ],
    s2Heading: "Version control systems such as Git and GitHub",
    s2P1a: "Without version control, \"fixing a test\" usually means overwriting the old file and hoping you don't need the previous version back. ",
    s2P1b: " solves that by keeping every version of every file it tracks: it lets you see exactly what changed, when, and — via a commit message — why, and it lets you undo a bad change safely instead of trying to remember what the code used to look like.",
    s2P2Label: "GitHub",
    s2P2a: " (or a similar host, like GitLab or Bitbucket) adds sharing and collaboration on top of plain git. It gives your code a home other people can find, clone, and read; it lets someone suggest a change via a ",
    s2P2b: " — a proposed diff you can discuss, review, and merge (or not) — rather than just emailing a new copy of a file back and forth.",
    s2P3a: "This isn't abstract for this site: every demo repo linked from this site's ",
    s2P3b: " and ",
    s2P3c: " pages is a real, public git repository. You can clone any of them and read the full history of how that testing code came to look the way it does — that's not incidental, it's how real testing code actually gets managed.",
    s2P4Mid: " and ",
    s2P4Mid2: ", or watch GitHub's own ",
    s2P4Post: " for a video introduction.",
    s2P4Pre: "Learn more at "
  };

  const EN_US: Messages = {
    ...EN_001
  };

  const CY: Messages = {
    aboutLinkText: "ynghylch",
    askAiHeading: "Enghreifftiau y gallwch eu gofyn i ddeallusrwydd artiffisial",
    ctaBackToLearn: "Yn ôl i Dysgu",
    ctaHowToStart: "Sut i ddechrau dysgu →",
    examplesLinkText: "enghreifftiau",
    gitLabel: "Git",
    pullRequestLabel: "cais tynnu",
    s2AskAi: [
      "Dydw i erioed wedi defnyddio git o'r blaen — beth mae 'ymrwymo' a 'gwthio' yn ei olygu mewn gwirionedd, mewn termau plaen, a pham mae angen y naill neu'r llall arnaf dim ond i ysgrifennu sgript brawf?",
      "Fe wnes i ymrwymo newid ar ddamwain rydw i am ei ddadwneud — beth yw ffordd ddiogel o'i ddadwneud heb golli gwaith arall?",
      "Sut dylai tîm strwythuro canghennau git a cheisiadau tynnu yn benodol o amgylch cod profi, fel nad yw prawf ansefydlog neu doredig yn rhwystro newidiadau digyswllt?"
    ],
    s2Heading: "Systemau rheoli fersiynau fel Git a GitHub",
    s2P1a: "Heb reoli fersiynau, mae \"trwsio prawf\" fel arfer yn golygu trosysgrifo'r hen ffeil a gobeithio nad oes angen y fersiwn flaenorol yn ôl arnoch. Mae ",
    s2P1b: " yn datrys hynny drwy gadw pob fersiwn o bob ffeil y mae'n ei olrhain: mae'n gadael i chi weld yn union beth newidiodd, pryd, a — drwy neges ymrwymo — pam, ac mae'n gadael i chi ddadwneud newid gwael yn ddiogel yn lle ceisio cofio sut roedd y cod arfer edrych.",
    s2P2Label: "GitHub",
    s2P2a: " (neu westeiwr tebyg, fel GitLab neu Bitbucket) yn ychwanegu rhannu a chydweithio ar ben git plaen. Mae'n rhoi cartref i'ch cod y gall pobl eraill ddod o hyd iddo, ei glonio, a'i ddarllen; mae'n gadael i rywun awgrymu newid drwy ",
    s2P2b: " — diff arfaethedig y gallwch ei drafod, ei adolygu, a'i uno (neu beidio) — yn lle dim ond e-bostio copi newydd o ffeil yn ôl ac ymlaen.",
    s2P3a: "Nid yw hyn yn haniaethol i'r wefan hon: mae pob ystorfa arddangos y ceir dolen iddi o dudalennau ",
    s2P3b: " ac ",
    s2P3c: " y wefan hon yn ystorfa git go iawn, gyhoeddus. Gallwch glonio unrhyw un ohonynt a darllen hanes llawn sut y daeth y cod profi hwnnw i edrych fel y mae — nid yw hynny'n ddamweiniol, dyna sut mae cod profi go iawn wir yn cael ei reoli.",
    s2P4Mid: " ac yn ",
    s2P4Mid2: ", neu gwyliwch ",
    s2P4Post: " ar gyfer cyflwyniad fideo.",
    s2P4Pre: "Dysgwch fwy yn "
  };

  const ZH: Messages = {
    aboutLinkText: "关于",
    askAiHeading: "可以向 AI 提问的示例",
    ctaBackToLearn: "返回学习",
    ctaHowToStart: "如何开始学习 →",
    examplesLinkText: "示例",
    gitLabel: "Git",
    pullRequestLabel: "pull request（拉取请求）",
    s2AskAi: [
      "我以前从没用过 git——用简单的话说，“commit”和“push”到底是什么意思？为什么我只是想写个测试脚本，也需要用到它们？",
      "我不小心提交了一个想撤销的改动——有什么安全的方法可以撤销它而不丢失其他工作？",
      "团队应该如何专门围绕测试代码来组织 git 分支和 pull request，才能让一个不稳定或损坏的测试不会阻塞其他无关的改动？"
    ],
    s2Heading: "Git 和 GitHub 等版本控制系统",
    s2P1a: "没有版本控制，“修复一个测试”通常意味着覆盖旧文件，然后祈祷自己不需要把之前的版本要回来。",
    s2P1b: "通过保留它所追踪的每个文件的每一个版本来解决这个问题：它让你能确切看到什么发生了改变、何时改变的，以及——通过提交信息——为什么改变，并让你能安全地撤销一次糟糕的改动，而不用去回想代码原来是什么样子的。",
    s2P2Label: "GitHub",
    s2P2a: "（或类似的托管平台，比如 GitLab 或 Bitbucket）在纯 git 之上增加了分享和协作功能。它为你的代码提供了一个别人可以找到、克隆和阅读的地方；它让别人可以通过一个",
    s2P2b: "——一份你可以讨论、审查并合并（或不合并）的改动提案——来提出修改建议，而不用来回发邮件传文件的新版本。",
    s2P3a: "这对本站来说并不是抽象概念：本站",
    s2P3b: "和",
    s2P3c: "页面链接的每一个演示仓库都是一个真实、公开的 git 仓库。你可以克隆其中任何一个，阅读那份测试代码是如何一步步变成现在这个样子的完整历史——这不是偶然的，真实的测试代码就是这样被管理的。",
    s2P4Mid: "和",
    s2P4Mid2: "，或观看 GitHub 自己的",
    s2P4Post: "视频介绍。",
    s2P4Pre: "可以进一步阅读"
  };

  const AR: Messages = {
    aboutLinkText: "حول",
    askAiHeading: "أمثلة يمكنك طرحها على الذكاء الاصطناعي",
    ctaBackToLearn: "العودة إلى تعلّم",
    ctaHowToStart: "كيف تبدأ التعلم ←",
    examplesLinkText: "الأمثلة",
    gitLabel: "Git",
    pullRequestLabel: "طلب دمج (pull request)",
    s2AskAi: [
      "لم أستخدم git من قبل — ماذا تعني «الإيداع» (commit) و«الدفع» (push) فعلًا بعبارات بسيطة، ولماذا أحتاج إلى أي منهما لمجرد كتابة سكربت اختبار؟",
      "أودعتُ عن طريق الخطأ تغييرًا أريد التراجع عنه — ما الطريقة الآمنة للتراجع عنه دون فقدان عمل آخر؟",
      "كيف ينبغي للفريق تنظيم فروع git وطلبات الدمج حول كود الاختبار تحديدًا، بحيث لا يعطّل اختبار غير مستقر أو معطوب تغييرات غير ذات صلة؟"
    ],
    s2Heading: "أنظمة التحكم في الإصدارات مثل Git وGitHub",
    s2P1a: "من دون التحكم في الإصدارات، يعني «إصلاح اختبار» عادةً الكتابة فوق الملف القديم والأمل ألا تحتاج إلى النسخة السابقة. ",
    s2P1b: " يحل ذلك بالاحتفاظ بكل إصدار من كل ملف يتتبعه: فهو يتيح لك رؤية ما تغيّر بالضبط، ومتى، و— عبر رسالة الإيداع — لماذا، ويتيح لك التراجع عن تغيير سيئ بأمان بدلًا من محاولة تذكّر كيف كان الكود.",
    s2P2Label: "GitHub",
    s2P2a: " (أو مضيف مشابه مثل GitLab أو Bitbucket) يضيف المشاركة والتعاون فوق git العادي. فهو يمنح كودك بيتًا يستطيع الآخرون العثور عليه واستنساخه وقراءته؛ ويتيح لشخص ما اقتراح تغيير عبر ",
    s2P2b: " — فرق مقترح يمكنك مناقشته ومراجعته ودمجه (أو لا) — بدلًا من تبادل نسخة جديدة من ملف بالبريد الإلكتروني ذهابًا وإيابًا.",
    s2P3a: "وهذا ليس مجردًا في هذا الموقع: فكل مستودع عرض توضيحي مرتبط من صفحتَي ",
    s2P3b: " و",
    s2P3c: " في هذا الموقع هو مستودع git عام حقيقي. يمكنك استنساخ أي منها وقراءة السجل الكامل لكيف صار كود الاختبار على ما هو عليه — وهذا ليس عرضيًا، بل هو الطريقة التي يُدار بها كود الاختبار الحقيقي فعلًا.",
    s2P4Mid: " و",
    s2P4Mid2: "، أو شاهد فيديو GitHub نفسها ",
    s2P4Post: " كمقدمة مرئية.",
    s2P4Pre: "اعرف المزيد في "
  };

  const KO: Messages = {
    aboutLinkText: "소개",
    askAiHeading: "AI에게 물어볼 수 있는 예시",
    ctaBackToLearn: "학습으로 돌아가기",
    ctaHowToStart: "학습 시작하기 →",
    examplesLinkText: "예제",
    gitLabel: "Git",
    pullRequestLabel: "풀 리퀘스트",
    s2AskAi: [
      "저는 git을 써 본 적이 없습니다. '커밋'과 '푸시'는 실제로 쉬운 말로 무슨 뜻이며, 테스트 스크립트를 작성하는 데 왜 둘 중 하나라도 필요한가요?",
      "실수로 되돌리고 싶은 변경을 커밋했습니다. 다른 작업을 잃지 않고 안전하게 되돌리는 방법은 무엇인가요?",
      "팀이 테스트 코드를 중심으로 git 브랜치와 풀 리퀘스트를 어떻게 구성해야 불안정하거나 깨진 테스트가 관련 없는 변경을 막지 않을까요?"
    ],
    s2Heading: "Git과 GitHub 같은 버전 관리 시스템",
    s2P1a: "버전 관리가 없으면 \"테스트 고치기\"는 보통 이전 파일을 덮어쓰고 이전 버전이 필요 없기를 바라는 것을 뜻합니다. ",
    s2P1b: "은 추적하는 모든 파일의 모든 버전을 보관하여 이를 해결합니다. 무엇이 언제 바뀌었는지, 그리고 커밋 메시지를 통해 왜 바뀌었는지 정확히 볼 수 있고, 코드가 예전에 어땠는지 기억하려고 애쓰는 대신 나쁜 변경을 안전하게 되돌릴 수 있습니다.",
    s2P2Label: "GitHub",
    s2P2a: "(또는 GitLab, Bitbucket 같은 비슷한 호스트)는 일반 git 위에 공유와 협업을 더합니다. 다른 사람들이 찾고, 복제하고, 읽을 수 있는 코드의 집을 제공하며, 파일의 새 사본을 이메일로 주고받는 대신 ",
    s2P2b: "를 통해 누군가 변경을 제안할 수 있게 해 줍니다. 토론하고, 검토하고, 병합할 수 있는(또는 하지 않을 수 있는) 제안된 diff입니다.",
    s2P3a: "이 사이트에서 이것은 추상적인 이야기가 아닙니다. 이 사이트의 ",
    s2P3b: " 및 ",
    s2P3c: " 페이지에서 링크된 모든 데모 저장소는 실제 공개 git 저장소입니다. 그중 아무거나 복제해서 그 테스트 코드가 어떻게 지금의 모습이 되었는지 전체 이력을 읽어 볼 수 있습니다. 이것은 우연이 아니라 실제 테스트 코드가 실제로 관리되는 방식입니다.",
    s2P4Mid: " 및 ",
    s2P4Mid2: "를 보거나, GitHub 자체의 ",
    s2P4Post: " 영상으로 입문하세요.",
    s2P4Pre: "더 알아보려면 "
  };

  const FR: Messages = {
    aboutLinkText: "à propos",
    askAiHeading: "Exemples à demander à l'IA",
    ctaBackToLearn: "Retour à Apprendre",
    ctaHowToStart: "Comment commencer à apprendre →",
    examplesLinkText: "exemples",
    gitLabel: "Git",
    pullRequestLabel: "pull request",
    s2AskAi: [
      "Je n'ai jamais utilisé git — que signifient réellement « commiter » et « pousser », en termes simples, et pourquoi ai-je besoin de l'un ou de l'autre juste pour écrire un script de test ?",
      "J'ai commité une modification par erreur et je veux l'annuler — quelle est une façon sûre de le faire sans perdre d'autre travail ?",
      "Comment une équipe devrait-elle structurer ses branches git et ses pull requests autour du code de test, pour qu'un test instable ou cassé ne bloque pas des modifications sans rapport ?"
    ],
    s2Heading: "Les systèmes de gestion de versions comme Git et GitHub",
    s2P1a: "Sans gestion de versions, « corriger un test » signifie généralement écraser l'ancien fichier en espérant ne pas avoir besoin de la version précédente. ",
    s2P1b: " résout cela en conservant chaque version de chaque fichier qu'il suit : il permet de voir exactement ce qui a changé, quand et — grâce au message de commit — pourquoi, et il permet d'annuler sans risque une mauvaise modification plutôt que d'essayer de se souvenir de ce à quoi ressemblait le code.",
    s2P2Label: "GitHub",
    s2P2a: " (ou un hébergeur similaire, comme GitLab ou Bitbucket) ajoute le partage et la collaboration par-dessus git. Il donne à votre code un foyer que d'autres personnes peuvent trouver, cloner et lire ; il permet à quelqu'un de proposer une modification au moyen d'une ",
    s2P2b: " — un diff proposé que l'on peut discuter, relire et fusionner (ou non) — plutôt que de s'échanger par e-mail une nouvelle copie d'un fichier.",
    s2P3a: "Ce n'est pas abstrait pour ce site : chaque dépôt de démonstration lié depuis les pages ",
    s2P3b: " et ",
    s2P3c: " de ce site est un vrai dépôt git public. Vous pouvez cloner n'importe lequel d'entre eux et lire tout l'historique de la façon dont ce code de test a pris sa forme actuelle — ce n'est pas anecdotique, c'est ainsi que le vrai code de test est réellement géré.",
    s2P4Mid: " et ",
    s2P4Mid2: ", ou regardez la vidéo ",
    s2P4Post: " de GitHub pour une présentation en vidéo.",
    s2P4Pre: "Pour en savoir plus, consultez "
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
  <title>{m.s2Heading} — Testing Examples</title>
  <meta name="description" content={m.s2Heading} />
</svelte:head>

<div class="page-header">
  <h1>{m.s2Heading}</h1>
</div>

<section class="section prose">
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
