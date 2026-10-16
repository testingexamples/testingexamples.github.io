<script lang="ts">
  import { Separator } from 'lily-design-system-svelte-headless';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Skill = {
    heading: string;
    examples: string;
    goals: string;
  };

  type Phase = {
    heading: string;
    skills: Skill[];
  };

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    examplesLabel: string;
    goalsLabel: string;
    unsure: string;
    phases: Phase[];
  };

  const EN_001: Messages = {
    title: "Formal learning phases",
    metaDescription:
      "Four formal learning phases for automatic testing, each with a success gate: programming language, browser automation framework, and AI assistant; text editor, version control, and manual-to-automatic process; then software, quality, and value metrics; then a book/video/course, a quality standard, and an IT management framework.',\n    heading: 'Formal learning phases",
    heading: "Formal learning phases",
    examplesLabel: "Examples:",
    goalsLabel: "Goals:",
    unsure: "If you're unsure which one, then choose the first.",
    phases: [
      {
        heading: "Phase 1",
        skills: [
        {
          heading: "Learn the basics of a programming language",
          examples: "JavaScript, or Python, or whatever your team uses.",
          goals: "You can create and run a program, that use any choices you want, that asks you to input a word of your choice and a web page URL of your choice, then fetches that URL and prints true or false depending on whether your word of choice is present in the web page URL's web content."
        },
        {
          heading: "Learn the basics of a web browser automation framework",
          examples: "Selenium, or Playwright, or whatever your team uses.",
          goals: "You can create and run an automatic test, that uses any choices you want, that fills out a web page form of your choice with at least three kinds of inputs, then submits the form, then verifies the response contains a word of your choice."
        },
        {
          heading: "Learn the basics of an AI assistant",
          examples: "Google Gemini, or Anthropic Claude, or whatever your team uses.",
          goals: "You can demonstrate that you can provide your web browser automation code to the AI assistant, such as via copy/paste or your editor or command line, then ask your AI to explain the code and suggest areas for improvement."
        }
        ]
      },
      {
        heading: "Phase 2",
        skills: [
        {
          heading: "Learn the basics of a text editor",
          examples: "Visual Studio Code, or vim, or whatever your team uses.",
          goals: "You can create and edit files, search for text in a project's files all at once, use the editor's auto-suggestions as you type, view diffs between two files, and use the editor's AI to make changes."
        },
        {
          heading: "Learn the basics of a version control system",
          examples: "GitHub, or Azure DevOps, or whatever your team uses.",
          goals: "You can use a version control system to browse files, view existing branches and commit messages, create a topic branch and commit a file, create a merge conflict then resolve it."
        },
        {
          heading: "Learn the basics of a manual-to-automatic conversion",
          examples: "Gherkin to Selenium, or User Story to Playwright, or whatever your team uses.",
          goals: "You can transform an existing manual test into a new automatic test on a new topic branch, committing the test, running it, and getting a successful result."
        }
        ]
      },
      {
        heading: "Phase 3",
        skills: [
        {
          heading: "Learn the basics of software stage metrics",
          examples: "Flow metrics, or DORA metrics, or whatever your team uses.",
          goals: "Explain the top three specifics that are relevant to you, in writing. Ask your AI assistant to assess your answer then suggest improvements. Create a topic branch with programming code and automatic test for one of them; commit it and run it."
        },
        {
          heading: "Learn the basics of quality line metrics",
          examples: "Six Sigma, or Value Stream Map, or whatever your team uses.",
          goals: "Explain the top three specifics that are relevant to you, in writing. Ask your AI assistant to assess your answer then suggest improvements. Create a topic branch with programming code and automatic test for one of them; commit it and run it."
        },
        {
          heading: "Learn the basics of true value metrics",
          examples: "Public Value metrics, or Health Economics metrics, or whatever your team uses.",
          goals: "Explain the top three specifics that are relevant to you, in writing. Ask your AI assistant to assess your answer then suggest improvements. Create a topic branch with programming code and automatic test for one of them; commit it and run it."
        }
        ]
      },
      {
        heading: "Phase 4",
        skills: [
        {
          heading: "Learn the basics of a software automation book/video/course",
          examples: "[Automation Full Course](https://www.youtube.com/watch?v=3shZi2Ych4Q), or [Test Automation Guide](https://github.com/SixArm/test-automation-guide/raw/main/test-automation-guide.pdf), or whatever your team uses.",
          goals: "Explain the top three specifics that are relevant to you, in writing. Ask your AI assistant to assess your answer then suggest improvements. Create a topic branch with programming code and automatic test for one of them; commit it and run it."
        },
        {
          heading: "Learn the basics of a sector quality standard",
          examples: "ISO 9000/9001, or IEEE 730/1012/1028/1061, or whatever specific published worldwide standard your team uses.",
          goals: "Explain the top three specifics that are relevant to you, in writing. Ask your AI assistant to assess your answer then suggest improvements. Create a topic branch with programming code and automatic test for one of them; commit it and run it."
        },
        {
          heading: "Learn the basics of an IT management framework",
          examples: "ITIL 5, or COBIT 5, or whatever specific published worldwide framework your team uses.",
          goals: "Explain the top three specifics that are relevant to you, in writing. Ask your AI assistant to assess your answer then suggest improvements. Create a topic branch with programming code and automatic test for one of them; commit it and run it."
        }
        ]
      }
    ]
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: "Cyfnodau dysgu ffurfiol",
    metaDescription:
      "Pedwar cyfnod dysgu ffurfiol ar gyfer profi awtomatig, pob un â phorth llwyddiant: iaith raglennu, fframwaith awtomeiddio porwr a chynorthwyydd deallusrwydd artiffisial; golygydd testun, system rheoli fersiynau a phroses o law i awtomatig; yna metrigau meddalwedd, ansawdd a gwerth; yna llyfr/fideo/cwrs, safon ansawdd a fframwaith rheoli TG.',\n    heading: 'Cyfnodau dysgu ffurfiol",
    heading: "Cyfnodau dysgu ffurfiol",
    examplesLabel: "Enghreifftiau:",
    goalsLabel: "Nodau:",
    unsure: "Os nad ydych yn siŵr pa un, dewiswch y cyntaf.",
    phases: [
      {
        heading: "Cyfnod 1",
        skills: [
        {
          heading: "Dysgu hanfodion iaith raglennu",
          examples: "JavaScript, neu Python, neu beth bynnag y mae eich tîm yn ei ddefnyddio.",
          goals: "Gallwch greu a rhedeg rhaglen, gan ddefnyddio unrhyw ddewisiadau a fynnwch, sy'n gofyn i chi roi gair o'ch dewis a URL tudalen we o'ch dewis, yna'n nôl yr URL hwnnw ac yn argraffu true neu false yn dibynnu a yw eich gair dewisol i'w weld yng nghynnwys gwe URL y dudalen we."
        },
        {
          heading: "Dysgu hanfodion fframwaith awtomeiddio porwr gwe",
          examples: "Selenium, neu Playwright, neu beth bynnag y mae eich tîm yn ei ddefnyddio.",
          goals: "Gallwch greu a rhedeg prawf awtomatig, gan ddefnyddio unrhyw ddewisiadau a fynnwch, sy'n llenwi ffurflen tudalen we o'ch dewis gydag o leiaf tri math o fewnbwn, yna'n cyflwyno'r ffurflen, yna'n gwirio bod yr ymateb yn cynnwys gair o'ch dewis."
        },
        {
          heading: "Dysgu hanfodion cynorthwyydd deallusrwydd artiffisial",
          examples: "Google Gemini, neu Anthropic Claude, neu beth bynnag y mae eich tîm yn ei ddefnyddio.",
          goals: "Gallwch ddangos eich bod yn gallu rhoi eich cod awtomeiddio porwr gwe i'r cynorthwyydd deallusrwydd artiffisial, er enghraifft trwy gopïo a gludo neu trwy eich golygydd neu'r llinell reoli, yna gofyn iddo egluro'r cod ac awgrymu meysydd i'w gwella."
        }
        ]
      },
      {
        heading: "Cyfnod 2",
        skills: [
        {
          heading: "Dysgu hanfodion golygydd testun",
          examples: "Visual Studio Code, neu vim, neu beth bynnag y mae eich tîm yn ei ddefnyddio.",
          goals: "Gallwch greu a golygu ffeiliau, chwilio am destun yn ffeiliau prosiect i gyd ar unwaith, defnyddio awgrymiadau awtomatig y golygydd wrth i chi deipio, gweld gwahaniaethau rhwng dwy ffeil, a defnyddio deallusrwydd artiffisial y golygydd i wneud newidiadau."
        },
        {
          heading: "Dysgu hanfodion system rheoli fersiynau",
          examples: "GitHub, neu Azure DevOps, neu beth bynnag y mae eich tîm yn ei ddefnyddio.",
          goals: "Gallwch ddefnyddio system rheoli fersiynau i bori ffeiliau, gweld canghennau a negeseuon ymrwymo presennol, creu cangen pwnc ac ymrwymo ffeil, creu gwrthdaro uno ac yna ei ddatrys."
        },
        {
          heading: "Dysgu hanfodion trosi o law i awtomatig",
          examples: "Gherkin i Selenium, neu Stori Defnyddiwr i Playwright, neu beth bynnag y mae eich tîm yn ei ddefnyddio.",
          goals: "Gallwch drawsnewid prawf llaw presennol yn brawf awtomatig newydd ar gangen pwnc newydd, gan ymrwymo'r prawf, ei redeg, a chael canlyniad llwyddiannus."
        }
        ]
      },
      {
        heading: "Cyfnod 3",
        skills: [
        {
          heading: "Dysgu hanfodion metrigau cam meddalwedd",
          examples: "metrigau Llif, neu metrigau DORA, neu beth bynnag y mae eich tîm yn ei ddefnyddio.",
          goals: "Eglurwch y tri manylyn uchaf sy'n berthnasol i chi, yn ysgrifenedig. Gofynnwch i'ch cynorthwyydd deallusrwydd artiffisial asesu eich ateb ac awgrymu gwelliannau. Crëwch gangen pwnc gyda chod rhaglennu a phrawf awtomatig ar gyfer un ohonynt; ymrwymwch ef a'i redeg."
        },
        {
          heading: "Dysgu hanfodion metrigau llinell ansawdd",
          examples: "Six Sigma, neu Map Ffrwd Gwerth, neu beth bynnag y mae eich tîm yn ei ddefnyddio.",
          goals: "Eglurwch y tri manylyn uchaf sy'n berthnasol i chi, yn ysgrifenedig. Gofynnwch i'ch cynorthwyydd deallusrwydd artiffisial asesu eich ateb ac awgrymu gwelliannau. Crëwch gangen pwnc gyda chod rhaglennu a phrawf awtomatig ar gyfer un ohonynt; ymrwymwch ef a'i redeg."
        },
        {
          heading: "Dysgu hanfodion metrigau gwir werth",
          examples: "metrigau Gwerth Cyhoeddus, neu metrigau Economeg Iechyd, neu beth bynnag y mae eich tîm yn ei ddefnyddio.",
          goals: "Eglurwch y tri manylyn uchaf sy'n berthnasol i chi, yn ysgrifenedig. Gofynnwch i'ch cynorthwyydd deallusrwydd artiffisial asesu eich ateb ac awgrymu gwelliannau. Crëwch gangen pwnc gyda chod rhaglennu a phrawf awtomatig ar gyfer un ohonynt; ymrwymwch ef a'i redeg."
        }
        ]
      },
      {
        heading: "Cyfnod 4",
        skills: [
        {
          heading: "Dysgu hanfodion llyfr/fideo/cwrs awtomeiddio meddalwedd",
          examples: "[Automation Full Course](https://www.youtube.com/watch?v=3shZi2Ych4Q), neu [Test Automation Guide](https://github.com/SixArm/test-automation-guide/raw/main/test-automation-guide.pdf), neu beth bynnag y mae eich tîm yn ei ddefnyddio.",
          goals: "Eglurwch y tri manylyn uchaf sy'n berthnasol i chi, yn ysgrifenedig. Gofynnwch i'ch cynorthwyydd deallusrwydd artiffisial asesu eich ateb ac awgrymu gwelliannau. Crëwch gangen pwnc gyda chod rhaglennu a phrawf awtomatig ar gyfer un ohonynt; ymrwymwch ef a'i redeg."
        },
        {
          heading: "Dysgu hanfodion safon ansawdd sector",
          examples: "ISO 9000/9001, neu IEEE 730/1012/1028/1061, neu pa bynnag safon benodol a gyhoeddwyd ledled y byd y mae eich tîm yn ei defnyddio.",
          goals: "Eglurwch y tri manylyn uchaf sy'n berthnasol i chi, yn ysgrifenedig. Gofynnwch i'ch cynorthwyydd deallusrwydd artiffisial asesu eich ateb ac awgrymu gwelliannau. Crëwch gangen pwnc gyda chod rhaglennu a phrawf awtomatig ar gyfer un ohonynt; ymrwymwch ef a'i redeg."
        },
        {
          heading: "Dysgu hanfodion fframwaith rheoli TG",
          examples: "ITIL 5, neu COBIT 5, neu pa bynnag fframwaith penodol a gyhoeddwyd ledled y byd y mae eich tîm yn ei ddefnyddio.",
          goals: "Eglurwch y tri manylyn uchaf sy'n berthnasol i chi, yn ysgrifenedig. Gofynnwch i'ch cynorthwyydd deallusrwydd artiffisial asesu eich ateb ac awgrymu gwelliannau. Crëwch gangen pwnc gyda chod rhaglennu a phrawf awtomatig ar gyfer un ohonynt; ymrwymwch ef a'i redeg."
        }
        ]
      }
    ]
  };

  const ZH: Messages = {
    title: "正式学习阶段",
    metaDescription:
      "自动化测试的四个正式学习阶段，每个阶段都有一道成功关卡：编程语言、浏览器自动化框架和 AI 助手；文本编辑器、版本控制系统和从手动到自动的流程；然后是软件度量、质量度量和价值度量；最后是书籍/视频/课程、质量标准和 IT 管理框架。',\n    heading: '正式学习阶段",
    heading: "正式学习阶段",
    examplesLabel: "示例：",
    goalsLabel: "目标：",
    unsure: "如果不确定选哪一个，就选第一个。",
    phases: [
      {
        heading: "第 1 阶段",
        skills: [
        {
          heading: "学习编程语言的基础知识",
          examples: "JavaScript，或 Python，或 你的团队使用的任何一种.",
          goals: "你能够创建并运行一个程序（可以随意选择任何方案），该程序要求你输入一个你选择的单词和一个你选择的网页 URL，然后获取该 URL，并根据你选择的单词是否出现在该网页 URL 的网页内容中，输出 true 或 false。"
        },
        {
          heading: "学习网页浏览器自动化框架的基础知识",
          examples: "Selenium，或 Playwright，或 你的团队使用的任何一种.",
          goals: "你能够创建并运行一个自动化测试（可以随意选择任何方案），该测试用至少三种输入类型填写你选择的网页表单，然后提交表单，再验证响应中包含你选择的单词。"
        },
        {
          heading: "学习 AI 助手的基础知识",
          examples: "Google Gemini，或 Anthropic Claude，或 你的团队使用的任何一种.",
          goals: "你能够演示如何把自己的网页浏览器自动化代码提供给 AI 助手（例如通过复制粘贴、编辑器或命令行），然后请 AI 解释这段代码并提出改进建议。"
        }
        ]
      },
      {
        heading: "第 2 阶段",
        skills: [
        {
          heading: "学习文本编辑器的基础知识",
          examples: "Visual Studio Code，或 vim，或 你的团队使用的任何一种.",
          goals: "你能够创建和编辑文件，一次性在项目的所有文件中搜索文本，在输入时使用编辑器的自动建议，查看两个文件之间的差异，并使用编辑器的 AI 进行修改。"
        },
        {
          heading: "学习版本控制系统的基础知识",
          examples: "GitHub，或 Azure DevOps，或 你的团队使用的任何一种.",
          goals: "你能够使用版本控制系统浏览文件，查看现有分支和提交信息，创建主题分支并提交文件，制造一个合并冲突然后解决它。"
        },
        {
          heading: "学习从手动到自动转换的基础知识",
          examples: "从 Gherkin 到 Selenium，或 从用户故事到 Playwright，或 你的团队使用的任何一种.",
          goals: "你能够在一个新的主题分支上，把一个现有的手动测试转换成一个新的自动化测试，提交该测试、运行它，并得到成功的结果。"
        }
        ]
      },
      {
        heading: "第 3 阶段",
        skills: [
        {
          heading: "学习软件阶段度量的基础知识",
          examples: "流动指标（Flow metrics），或 DORA 指标，或 你的团队使用的任何一种.",
          goals: "用文字解释与你相关的前三个具体要点。请你的 AI 助手评估你的答案并提出改进建议。创建一个主题分支，为其中一个要点编写程序代码和自动化测试；提交并运行它。"
        },
        {
          heading: "学习质量流水线度量的基础知识",
          examples: "六西格玛，或 价值流图，或 你的团队使用的任何一种.",
          goals: "用文字解释与你相关的前三个具体要点。请你的 AI 助手评估你的答案并提出改进建议。创建一个主题分支，为其中一个要点编写程序代码和自动化测试；提交并运行它。"
        },
        {
          heading: "学习真实价值度量的基础知识",
          examples: "公共价值指标，或 卫生经济学指标，或 你的团队使用的任何一种.",
          goals: "用文字解释与你相关的前三个具体要点。请你的 AI 助手评估你的答案并提出改进建议。创建一个主题分支，为其中一个要点编写程序代码和自动化测试；提交并运行它。"
        }
        ]
      },
      {
        heading: "第 4 阶段",
        skills: [
        {
          heading: "学习软件自动化书籍/视频/课程的基础知识",
          examples: "[Automation Full Course](https://www.youtube.com/watch?v=3shZi2Ych4Q)，或 [Test Automation Guide](https://github.com/SixArm/test-automation-guide/raw/main/test-automation-guide.pdf)，或 你的团队使用的任何一种.",
          goals: "用文字解释与你相关的前三个具体要点。请你的 AI 助手评估你的答案并提出改进建议。创建一个主题分支，为其中一个要点编写程序代码和自动化测试；提交并运行它。"
        },
        {
          heading: "学习行业质量标准的基础知识",
          examples: "ISO 9000/9001，或 IEEE 730/1012/1028/1061，或 你的团队使用的任何具体的已发布国际标准.",
          goals: "用文字解释与你相关的前三个具体要点。请你的 AI 助手评估你的答案并提出改进建议。创建一个主题分支，为其中一个要点编写程序代码和自动化测试；提交并运行它。"
        },
        {
          heading: "学习 IT 管理框架的基础知识",
          examples: "ITIL 5，或 COBIT 5，或 你的团队使用的任何具体的已发布国际框架.",
          goals: "用文字解释与你相关的前三个具体要点。请你的 AI 助手评估你的答案并提出改进建议。创建一个主题分支，为其中一个要点编写程序代码和自动化测试；提交并运行它。"
        }
        ]
      }
    ]
  };

  const AR: Messages = {
    title: "مراحل التعلم الرسمية",
    metaDescription:
      "أربع مراحل تعلم رسمية للاختبار الآلي، لكل منها بوابة نجاح: لغة برمجة وإطار أتمتة المتصفح ومساعد ذكاء اصطناعي؛ محرر نصوص ونظام تحكم في الإصدارات وعملية الانتقال من اليدوي إلى الآلي؛ ثم مقاييس البرمجيات والجودة والقيمة؛ ثم كتاب/فيديو/دورة ومعيار جودة وإطار لإدارة تقنية المعلومات.',\n    heading: 'مراحل التعلم الرسمية",
    heading: "مراحل التعلم الرسمية",
    examplesLabel: "أمثلة:",
    goalsLabel: "الأهداف:",
    unsure: "إذا لم تكن متأكدًا من الاختيار، فاختر الأول.",
    phases: [
      {
        heading: "المرحلة 1",
        skills: [
        {
          heading: "تعلّم أساسيات لغة برمجة",
          examples: "JavaScript، أو Python، أو أي شيء يستخدمه فريقك.",
          goals: "يمكنك إنشاء برنامج وتشغيله، بأي خيارات تشاء، يطلب منك إدخال كلمة من اختيارك وعنوان URL لصفحة ويب من اختيارك، ثم يجلب ذلك العنوان ويطبع true أو false بحسب وجود كلمتك في محتوى صفحة الويب."
        },
        {
          heading: "تعلّم أساسيات إطار لأتمتة متصفح الويب",
          examples: "Selenium، أو Playwright، أو أي شيء يستخدمه فريقك.",
          goals: "يمكنك إنشاء اختبار آلي وتشغيله، بأي خيارات تشاء، يملأ نموذج صفحة ويب من اختيارك بثلاثة أنواع على الأقل من المدخلات، ثم يرسل النموذج، ثم يتحقق من أن الاستجابة تحتوي على كلمة من اختيارك."
        },
        {
          heading: "تعلّم أساسيات مساعد ذكاء اصطناعي",
          examples: "Google Gemini، أو Anthropic Claude، أو أي شيء يستخدمه فريقك.",
          goals: "يمكنك أن تُظهر قدرتك على تزويد مساعد الذكاء الاصطناعي بكود أتمتة متصفح الويب الخاص بك، مثلًا بالنسخ واللصق أو عبر محررك أو سطر الأوامر، ثم تطلب منه شرح الكود واقتراح مجالات للتحسين."
        }
        ]
      },
      {
        heading: "المرحلة 2",
        skills: [
        {
          heading: "تعلّم أساسيات محرر نصوص",
          examples: "Visual Studio Code، أو vim، أو أي شيء يستخدمه فريقك.",
          goals: "يمكنك إنشاء الملفات وتعديلها، والبحث عن نص في جميع ملفات المشروع دفعة واحدة، واستخدام الاقتراحات التلقائية للمحرر أثناء الكتابة، وعرض الفروق بين ملفين، واستخدام ذكاء المحرر الاصطناعي لإجراء التغييرات."
        },
        {
          heading: "تعلّم أساسيات نظام تحكم في الإصدارات",
          examples: "GitHub، أو Azure DevOps، أو أي شيء يستخدمه فريقك.",
          goals: "يمكنك استخدام نظام تحكم في الإصدارات لتصفح الملفات، وعرض الفروع الموجودة ورسائل الإيداع، وإنشاء فرع موضوعي وإيداع ملف، وإنشاء تعارض دمج ثم حله."
        },
        {
          heading: "تعلّم أساسيات التحويل من اليدوي إلى الآلي",
          examples: "Gherkin إلى Selenium، أو قصة المستخدم إلى Playwright، أو أي شيء يستخدمه فريقك.",
          goals: "يمكنك تحويل اختبار يدوي موجود إلى اختبار آلي جديد على فرع موضوعي جديد، مع إيداع الاختبار وتشغيله والحصول على نتيجة ناجحة."
        }
        ]
      },
      {
        heading: "المرحلة 3",
        skills: [
        {
          heading: "تعلّم أساسيات مقاييس مراحل البرمجيات",
          examples: "مقاييس التدفق (Flow)، أو مقاييس DORA، أو أي شيء يستخدمه فريقك.",
          goals: "اشرح كتابةً أهم ثلاث تفاصيل ذات صلة بك. اطلب من مساعد الذكاء الاصطناعي تقييم إجابتك ثم اقتراح تحسينات. أنشئ فرعًا موضوعيًا يحتوي على كود برمجي واختبار آلي لأحدها؛ أودعه وشغّله."
        },
        {
          heading: "تعلّم أساسيات مقاييس خط الجودة",
          examples: "Six Sigma، أو خريطة تدفق القيمة، أو أي شيء يستخدمه فريقك.",
          goals: "اشرح كتابةً أهم ثلاث تفاصيل ذات صلة بك. اطلب من مساعد الذكاء الاصطناعي تقييم إجابتك ثم اقتراح تحسينات. أنشئ فرعًا موضوعيًا يحتوي على كود برمجي واختبار آلي لأحدها؛ أودعه وشغّله."
        },
        {
          heading: "تعلّم أساسيات مقاييس القيمة الحقيقية",
          examples: "مقاييس القيمة العامة، أو مقاييس اقتصاديات الصحة، أو أي شيء يستخدمه فريقك.",
          goals: "اشرح كتابةً أهم ثلاث تفاصيل ذات صلة بك. اطلب من مساعد الذكاء الاصطناعي تقييم إجابتك ثم اقتراح تحسينات. أنشئ فرعًا موضوعيًا يحتوي على كود برمجي واختبار آلي لأحدها؛ أودعه وشغّله."
        }
        ]
      },
      {
        heading: "المرحلة 4",
        skills: [
        {
          heading: "تعلّم أساسيات كتاب/فيديو/دورة في أتمتة البرمجيات",
          examples: "[Automation Full Course](https://www.youtube.com/watch?v=3shZi2Ych4Q)، أو [Test Automation Guide](https://github.com/SixArm/test-automation-guide/raw/main/test-automation-guide.pdf)، أو أي شيء يستخدمه فريقك.",
          goals: "اشرح كتابةً أهم ثلاث تفاصيل ذات صلة بك. اطلب من مساعد الذكاء الاصطناعي تقييم إجابتك ثم اقتراح تحسينات. أنشئ فرعًا موضوعيًا يحتوي على كود برمجي واختبار آلي لأحدها؛ أودعه وشغّله."
        },
        {
          heading: "تعلّم أساسيات معيار جودة قطاعي",
          examples: "ISO 9000/9001، أو IEEE 730/1012/1028/1061، أو أي معيار عالمي منشور محدد يستخدمه فريقك.",
          goals: "اشرح كتابةً أهم ثلاث تفاصيل ذات صلة بك. اطلب من مساعد الذكاء الاصطناعي تقييم إجابتك ثم اقتراح تحسينات. أنشئ فرعًا موضوعيًا يحتوي على كود برمجي واختبار آلي لأحدها؛ أودعه وشغّله."
        },
        {
          heading: "تعلّم أساسيات إطار لإدارة تقنية المعلومات",
          examples: "ITIL 5، أو COBIT 5، أو أي إطار عالمي منشور محدد يستخدمه فريقك.",
          goals: "اشرح كتابةً أهم ثلاث تفاصيل ذات صلة بك. اطلب من مساعد الذكاء الاصطناعي تقييم إجابتك ثم اقتراح تحسينات. أنشئ فرعًا موضوعيًا يحتوي على كود برمجي واختبار آلي لأحدها؛ أودعه وشغّله."
        }
        ]
      }
    ]
  };

  const KO: Messages = {
    title: "정식 학습 단계",
    metaDescription:
      "자동화 테스트를 위한 네 가지 정식 학습 단계와 각 단계의 성공 관문: 프로그래밍 언어, 브라우저 자동화 프레임워크, AI 어시스턴트; 텍스트 편집기, 버전 관리 시스템, 수동에서 자동으로의 전환 과정; 소프트웨어, 품질, 가치 지표; 그리고 책/동영상/강좌, 품질 표준, IT 관리 프레임워크.',\n    heading: '정식 학습 단계",
    heading: "정식 학습 단계",
    examplesLabel: "예시:",
    goalsLabel: "목표:",
    unsure: "어느 것을 고를지 모르겠다면 첫 번째를 고르세요.",
    phases: [
      {
        heading: "1단계",
        skills: [
        {
          heading: "프로그래밍 언어의 기초 배우기",
          examples: "JavaScript, 또는 Python, 또는 팀에서 사용하는 것.",
          goals: "원하는 방식을 자유롭게 선택하여, 원하는 단어 하나와 원하는 웹 페이지 URL 하나를 입력받고, 그 URL을 가져와서 선택한 단어가 해당 웹 페이지의 내용에 있는지에 따라 true 또는 false를 출력하는 프로그램을 만들고 실행할 수 있습니다."
        },
        {
          heading: "웹 브라우저 자동화 프레임워크의 기초 배우기",
          examples: "Selenium, 또는 Playwright, 또는 팀에서 사용하는 것.",
          goals: "원하는 방식을 자유롭게 선택하여, 원하는 웹 페이지 폼을 최소 세 가지 종류의 입력으로 채우고, 폼을 제출한 다음, 응답에 원하는 단어가 포함되어 있는지 검증하는 자동화 테스트를 만들고 실행할 수 있습니다."
        },
        {
          heading: "AI 어시스턴트의 기초 배우기",
          examples: "Google Gemini, 또는 Anthropic Claude, 또는 팀에서 사용하는 것.",
          goals: "복사/붙여넣기나 편집기, 명령줄 등을 통해 웹 브라우저 자동화 코드를 AI 어시스턴트에게 제공하고, AI에게 코드를 설명하고 개선할 부분을 제안해 달라고 요청하는 것을 보여줄 수 있습니다."
        }
        ]
      },
      {
        heading: "2단계",
        skills: [
        {
          heading: "텍스트 편집기의 기초 배우기",
          examples: "Visual Studio Code, 또는 vim, 또는 팀에서 사용하는 것.",
          goals: "파일을 만들고 편집하며, 프로젝트의 모든 파일에서 한 번에 텍스트를 검색하고, 입력하는 동안 편집기의 자동 제안을 사용하고, 두 파일의 차이를 보고, 편집기의 AI를 사용해 변경할 수 있습니다."
        },
        {
          heading: "버전 관리 시스템의 기초 배우기",
          examples: "GitHub, 또는 Azure DevOps, 또는 팀에서 사용하는 것.",
          goals: "버전 관리 시스템으로 파일을 둘러보고, 기존 브랜치와 커밋 메시지를 확인하고, 토픽 브랜치를 만들어 파일을 커밋하고, 병합 충돌을 일으킨 뒤 해결할 수 있습니다."
        },
        {
          heading: "수동에서 자동으로의 전환의 기초 배우기",
          examples: "Gherkin에서 Selenium으로, 또는 사용자 스토리에서 Playwright로, 또는 팀에서 사용하는 것.",
          goals: "기존 수동 테스트를 새 토픽 브랜치의 새로운 자동화 테스트로 변환하고, 테스트를 커밋하고, 실행하여 성공 결과를 얻을 수 있습니다."
        }
        ]
      },
      {
        heading: "3단계",
        skills: [
        {
          heading: "소프트웨어 단계 지표의 기초 배우기",
          examples: "플로 지표(Flow metrics), 또는 DORA 지표, 또는 팀에서 사용하는 것.",
          goals: "자신과 관련된 상위 세 가지 구체적인 내용을 글로 설명하세요. AI 어시스턴트에게 답변을 평가하고 개선점을 제안해 달라고 요청하세요. 그중 하나에 대한 프로그래밍 코드와 자동화 테스트가 담긴 토픽 브랜치를 만들고, 커밋한 뒤 실행하세요."
        },
        {
          heading: "품질 라인 지표의 기초 배우기",
          examples: "Six Sigma, 또는 가치 흐름 지도, 또는 팀에서 사용하는 것.",
          goals: "자신과 관련된 상위 세 가지 구체적인 내용을 글로 설명하세요. AI 어시스턴트에게 답변을 평가하고 개선점을 제안해 달라고 요청하세요. 그중 하나에 대한 프로그래밍 코드와 자동화 테스트가 담긴 토픽 브랜치를 만들고, 커밋한 뒤 실행하세요."
        },
        {
          heading: "진정한 가치 지표의 기초 배우기",
          examples: "공공 가치 지표, 또는 보건경제학 지표, 또는 팀에서 사용하는 것.",
          goals: "자신과 관련된 상위 세 가지 구체적인 내용을 글로 설명하세요. AI 어시스턴트에게 답변을 평가하고 개선점을 제안해 달라고 요청하세요. 그중 하나에 대한 프로그래밍 코드와 자동화 테스트가 담긴 토픽 브랜치를 만들고, 커밋한 뒤 실행하세요."
        }
        ]
      },
      {
        heading: "4단계",
        skills: [
        {
          heading: "소프트웨어 자동화 책/동영상/강좌의 기초 배우기",
          examples: "[Automation Full Course](https://www.youtube.com/watch?v=3shZi2Ych4Q), 또는 [Test Automation Guide](https://github.com/SixArm/test-automation-guide/raw/main/test-automation-guide.pdf), 또는 팀에서 사용하는 것.",
          goals: "자신과 관련된 상위 세 가지 구체적인 내용을 글로 설명하세요. AI 어시스턴트에게 답변을 평가하고 개선점을 제안해 달라고 요청하세요. 그중 하나에 대한 프로그래밍 코드와 자동화 테스트가 담긴 토픽 브랜치를 만들고, 커밋한 뒤 실행하세요."
        },
        {
          heading: "산업 분야 품질 표준의 기초 배우기",
          examples: "ISO 9000/9001, 또는 IEEE 730/1012/1028/1061, 또는 팀에서 사용하는 구체적인 공개 국제 표준.",
          goals: "자신과 관련된 상위 세 가지 구체적인 내용을 글로 설명하세요. AI 어시스턴트에게 답변을 평가하고 개선점을 제안해 달라고 요청하세요. 그중 하나에 대한 프로그래밍 코드와 자동화 테스트가 담긴 토픽 브랜치를 만들고, 커밋한 뒤 실행하세요."
        },
        {
          heading: "IT 관리 프레임워크의 기초 배우기",
          examples: "ITIL 5, 또는 COBIT 5, 또는 팀에서 사용하는 구체적인 공개 국제 프레임워크.",
          goals: "자신과 관련된 상위 세 가지 구체적인 내용을 글로 설명하세요. AI 어시스턴트에게 답변을 평가하고 개선점을 제안해 달라고 요청하세요. 그중 하나에 대한 프로그래밍 코드와 자동화 테스트가 담긴 토픽 브랜치를 만들고, 커밋한 뒤 실행하세요."
        }
        ]
      }
    ]
  };

  const FR: Messages = {
    title: "Phases d'apprentissage formelles",
    metaDescription:
      "Quatre phases d'apprentissage formelles pour les tests automatisés, chacune avec un critère de réussite : langage de programmation, framework d'automatisation de navigateur et assistant IA ; éditeur de texte, gestion de versions et processus du manuel à l'automatique ; puis métriques logicielles, de qualité et de valeur ; puis livre/vidéo/cours, norme de qualité et cadre de gestion informatique.\",\n    heading: \"Phases d'apprentissage formelles",
    heading: "Phases d'apprentissage formelles",
    examplesLabel: "Exemples :",
    goalsLabel: "Objectifs :",
    unsure: "Si vous hésitez, choisissez le premier.",
    phases: [
      {
        heading: "Phase 1",
        skills: [
        {
          heading: "Apprendre les bases d'un langage de programmation",
          examples: "JavaScript, ou Python, ou celui que votre équipe utilise.",
          goals: "Vous savez créer et exécuter un programme, avec les choix que vous voulez, qui vous demande de saisir un mot de votre choix et l'URL d'une page web de votre choix, puis récupère cette URL et affiche true ou false selon que votre mot est présent ou non dans le contenu de la page web."
        },
        {
          heading: "Apprendre les bases d'un framework d'automatisation de navigateur web",
          examples: "Selenium, ou Playwright, ou celui que votre équipe utilise.",
          goals: "Vous savez créer et exécuter un test automatisé, avec les choix que vous voulez, qui remplit un formulaire de la page web de votre choix avec au moins trois types de champs, puis soumet le formulaire, puis vérifie que la réponse contient un mot de votre choix."
        },
        {
          heading: "Apprendre les bases d'un assistant IA",
          examples: "Google Gemini, ou Anthropic Claude, ou celui que votre équipe utilise.",
          goals: "Vous savez montrer que vous pouvez fournir votre code d'automatisation de navigateur web à l'assistant IA, par exemple par copier-coller, depuis votre éditeur ou en ligne de commande, puis lui demander d'expliquer le code et de suggérer des pistes d'amélioration."
        }
        ]
      },
      {
        heading: "Phase 2",
        skills: [
        {
          heading: "Apprendre les bases d'un éditeur de texte",
          examples: "Visual Studio Code, ou vim, ou celui que votre équipe utilise.",
          goals: "Vous savez créer et modifier des fichiers, rechercher du texte dans tous les fichiers d'un projet à la fois, utiliser les suggestions automatiques de l'éditeur pendant la saisie, afficher les différences entre deux fichiers et utiliser l'IA de l'éditeur pour effectuer des modifications."
        },
        {
          heading: "Apprendre les bases d'un système de gestion de versions",
          examples: "GitHub, ou Azure DevOps, ou celui que votre équipe utilise.",
          goals: "Vous savez l'utiliser pour parcourir des fichiers, consulter les branches existantes et les messages de commit, créer une branche thématique et y commiter un fichier, créer un conflit de fusion puis le résoudre."
        },
        {
          heading: "Apprendre les bases d'une conversion du manuel à l'automatique",
          examples: "de Gherkin à Selenium, ou de la user story à Playwright, ou celui que votre équipe utilise.",
          goals: "Vous savez transformer un test manuel existant en un nouveau test automatisé sur une nouvelle branche thématique, en commitant le test, en l'exécutant et en obtenant un résultat réussi."
        }
        ]
      },
      {
        heading: "Phase 3",
        skills: [
        {
          heading: "Apprendre les bases des métriques d'étapes logicielles",
          examples: "métriques de flux (Flow), ou métriques DORA, ou celui que votre équipe utilise.",
          goals: "Expliquez par écrit les trois principaux points précis qui vous concernent. Demandez à votre assistant IA d'évaluer votre réponse puis de suggérer des améliorations. Créez une branche thématique avec du code et un test automatisé pour l'un d'eux ; commitez-la et exécutez-la."
        },
        {
          heading: "Apprendre les bases des métriques de ligne de qualité",
          examples: "Six Sigma, ou cartographie de la chaîne de valeur, ou celui que votre équipe utilise.",
          goals: "Expliquez par écrit les trois principaux points précis qui vous concernent. Demandez à votre assistant IA d'évaluer votre réponse puis de suggérer des améliorations. Créez une branche thématique avec du code et un test automatisé pour l'un d'eux ; commitez-la et exécutez-la."
        },
        {
          heading: "Apprendre les bases des métriques de valeur réelle",
          examples: "métriques de valeur publique, ou métriques d'économie de la santé, ou celui que votre équipe utilise.",
          goals: "Expliquez par écrit les trois principaux points précis qui vous concernent. Demandez à votre assistant IA d'évaluer votre réponse puis de suggérer des améliorations. Créez une branche thématique avec du code et un test automatisé pour l'un d'eux ; commitez-la et exécutez-la."
        }
        ]
      },
      {
        heading: "Phase 4",
        skills: [
        {
          heading: "Apprendre les bases d'un livre/d'une vidéo/d'un cours sur l'automatisation logicielle",
          examples: "[Automation Full Course](https://www.youtube.com/watch?v=3shZi2Ych4Q), ou [Test Automation Guide](https://github.com/SixArm/test-automation-guide/raw/main/test-automation-guide.pdf), ou celui que votre équipe utilise.",
          goals: "Expliquez par écrit les trois principaux points précis qui vous concernent. Demandez à votre assistant IA d'évaluer votre réponse puis de suggérer des améliorations. Créez une branche thématique avec du code et un test automatisé pour l'un d'eux ; commitez-la et exécutez-la."
        },
        {
          heading: "Apprendre les bases d'une norme de qualité sectorielle",
          examples: "ISO 9000/9001, ou IEEE 730/1012/1028/1061, ou toute norme mondiale publiée et précise que votre équipe utilise.",
          goals: "Expliquez par écrit les trois principaux points précis qui vous concernent. Demandez à votre assistant IA d'évaluer votre réponse puis de suggérer des améliorations. Créez une branche thématique avec du code et un test automatisé pour l'un d'eux ; commitez-la et exécutez-la."
        },
        {
          heading: "Apprendre les bases d'un cadre de gestion informatique",
          examples: "ITIL 5, ou COBIT 5, ou tout cadre mondial publié et précis que votre équipe utilise.",
          goals: "Expliquez par écrit les trois principaux points précis qui vous concernent. Demandez à votre assistant IA d'évaluer votre réponse puis de suggérer des améliorations. Créez une branche thématique avec du code et un test automatisé pour l'un d'eux ; commitez-la et exécutez-la."
        }
        ]
      }
    ]
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

  // Items may contain Markdown-style links: [text](https://...).
  type Segment = { text: string; href?: string };
  function segments(item: string): Segment[] {
    const out: Segment[] = [];
    let last = 0;
    for (const match of item.matchAll(/\[([^\]]+)\]\((https:\/\/[^)]+)\)/g)) {
      if (match.index > last) out.push({ text: item.slice(last, match.index) });
      out.push({ text: match[1], href: match[2] });
      last = match.index + match[0].length;
    }
    if (last < item.length) out.push({ text: item.slice(last) });
    return out;
  }
</script>

<svelte:head>
  <title>{m.title} — Testing Examples</title>
  <meta name="description" content={m.metaDescription} />
</svelte:head>

<div class="page-header">
  <h1>{m.heading}</h1>
</div>

{#each m.phases as phase, i (phase.heading)}
  {#if i > 0}
    <Separator label="Section break" />
  {/if}
  <section class="section prose">
    <h2>{phase.heading}</h2>
    {#each phase.skills as skill (skill.heading)}
      <h3>{skill.heading}</h3>
      <p>
        <strong>{m.examplesLabel}</strong>
        {#each segments(skill.examples) as seg}{#if seg.href}<a href={seg.href}>{seg.text}</a>{:else}{seg.text}{/if}{/each}
        {m.unsure}
      </p>
      <p><strong>{m.goalsLabel}</strong> {skill.goals}</p>
    {/each}
  </section>
{/each}
