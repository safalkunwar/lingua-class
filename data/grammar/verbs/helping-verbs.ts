import { GrammarLesson } from "@/types/grammar";

export const helpingVerbsLesson: GrammarLesson = {
  id: "helping-verbs-do-does-did",
  subcategoryId: "helping-verbs",
  categoryId: "verbs",
  title: "Mastering Do, Does & Did",
  titleZh: "透彻掌握 Do, Does 与 Did 疑问与否定",
  subtitle: "The secret engine that turns statements into questions and positives into negatives",
  level: "A2",
  estimatedMinutes: 40,
  lessonIndex: 2,
  totalLessonsInSubcategory: 6,
  description:
    "Learn how 'do', 'does', and 'did' carry the weight of questions and negatives in English. Stop saying 'He don't like' and start asking 'Do you want'?",
  descriptionZh:
    "掌握 'Do, Does, Did' 如何在疑问句和否定句中发挥助动作用途。告别'He don't like'，准确提问'You want?'.",
  objectives: [
    "identify helping verbs in sentences",
    "distinguish 'do' for I/You/We/They vs 'does' for He/She/It",
    "form yes/no questions with Do and Does",
    "build negative statements using don't and doesn't",
    "use 'did' for past simple questions and negatives",
    "understand why the main verb returns to base form after helping verbs",
  ],
  prerequisites: ["action-verbs-foundation"],
  teacherGuide: {
    teachingObjective:
      "Train learners to deploy do/does/did as auxiliary scaffolding for question and negative formation, with special attention to the third-person singular agreement trap common in Chinese-influenced English.",
    whatToExplain: [
      "Helping verbs (do, does, did) carry tense and polarity — the main verb must revert to base form.",
      "Do ≠ Does: Do follows I, You, We, They. Does follows He, She, It.",
      "Did works for ALL persons in the past (singular verb stays base form).",
      "Never say 'She don't' or 'Did she goes' — these are fatal errors.",
    ],
    questionsToAsk: [
      "Why do we say 'Does she like coffee?' instead of 'She likes coffee?'?",
      "What happens to the main verb after 'did'?",
      "When do we use 'do' versus 'does'?",
    ],
    commonConfusion: [
      "'She don't like' (incorrect) vs 'She doesn't like' (correct)",
      "'Did she go?' (correct) vs 'Did she goes?' (incorrect)",
      "Forgeting to drop the -s/-ed when using do/does/did",
    ],
    extraExamples: [
      "Do they understand the assignment?",
      "Does he work on weekends?",
      "Did you finish the report?",
      "I don't remember where I put my keys.",
    ],
    timingSchedule: [
      { phase: "Warm-up & Recall", duration: "0–5 min", activity: "Recall Action Verbs: ask students to state one action they did yesterday." },
      { phase: "Introducing Helpers", duration: "5–15 min", activity: "Explain the role of do/does/did as 'question-makers' and 'negative-makers'." },
      { phase: "Subject-Verb Agreement Drill", duration: "15–25 min", activity: "Practice Do vs Does agreement using flashcards." },
      { phase: "Pitfall Deconstruction", duration: "25–35 min", activity: "Catch errors: He don't, Did she goes, She don't likes." },
      { phase: "Real-Life Scenarios", duration: "35–50 min", activity: "Interview roleplay: ask friends about their weekend plans." },
      { phase: "Wrap-up & Homework", duration: "50–60 min", activity: "Assign take-home interview homework." },
    ],
  },
  homework: {
    title: "Interview Challenge: 10 Questions to a Friend",
    titleZh: "访谈挑战：向朋友提问 10 个关于过去的事",
    tasks: [
      {
        type: "speaking",
        instruction: "Interview a friend or family member using at least 5 Do/Does questions and 5 Did questions. Record the conversation.",
        instructionZh: "使用至少 5 个 Do/Does 疑问句和 5 个 Did 疑问句采访朋友或家人，录下对话。",
        sampleAnswer: "Did you visit your parents last weekend? Do they live nearby? What did you eat for breakfast?",
      },
      {
        type: "writing",
        instruction: "Convert 10 statements into negative sentences. Use don't, doesn't, or didn't correctly.",
        instructionZh: "将 10 个陈述句转换为否定句，正确使用 don't、doesn't 或 didn't。",
        sampleAnswer: "I don't like coffee → He doesn't like coffee → They didn't arrive on time.",
      },
    ],
  },
  slides: [
    {
      id: "slide-1-welcome",
      slideNumber: 1,
      type: "TITLE",
      sectionTitle: "1. Welcome",
      badge: "ORIENTATION",
      title: "Helping Verbs: Do, Does & Did",
      titleZh: "助动词专场：Do, Does 与 Did",
      content:
        "Last lesson, you learned that action verbs make sentences move. But how do you turn a statement into a question? Or flip a positive into a negative? The answer is a tiny, powerful trio of helper verbs that do all the heavy lifting!",
      contentZh:
        "上一课我们学习了行为动词让句子动起来。但如何把陈述句变成疑问句？如何把肯定翻成否定？答案就在这三个小巧但强大的助动词身上！",
      keyPoints: [
        "Do, Does, and Did are the 'question-makers' and 'negative-makers'",
        "They support the main verb without stealing the spotlight",
        "The main verb returns to base form after these helpers",
      ],
    },

    {
      id: "slide-2-recall",
      slideNumber: 2,
      type: "EXPLANATION",
      sectionTitle: "2. Quick Recall",
      badge: "REVIEW",
      title: "Last Lesson: Action Verbs in One Line",
      titleZh: "快速回顾：行为动词主谓宾公式",
      content:
        "Remember: Subject + Verb (+ Object). I eat breakfast. She plays basketball. These were complete thoughts on their own. Now we add a layer — the helping verb that asks questions and makes negatives.",
      contentZh:
        "回忆：主语 + 动词 (+ 宾语)。I eat breakfast. She plays basketball. 这些独立完整。现在我们再加一层——提问疑问句和否定句的助动词。",
      audioText: "I eat breakfast. She plays basketball. Now, what if I want to ask?",
    },

    {
      id: "slide-3-why-helpers",
      slideNumber: 3,
      type: "EXPLANATION",
      sectionTitle: "3. The Need for Helpers",
      badge: "WHY THIS MATTERS",
      title: "Why Can't We Just Invert?",
      titleZh: "为什么不能直接倒装主语？",
      content:
        "Try saying 'She works here?' with a rising tone. It barely sounds like a question. English uses do/does/did to carry the question load so the main verb stays clean and clear.",
      contentZh:
        "试想 'She works here?' 音调上抬也听不像疑问句。英语用 do/does/did 来承担提问功能，让主要动词保持纯净。",
      keyPoints: [
        "Inverted statements alone are ambiguous ('You coming?' is informal/colloquial only)",
        "do/does/did provide grammatical clarity",
        "They also carry tense and polarity in negatives",
      ],
    },

    {
      id: "slide-4-do-vs-does",
      slideNumber: 4,
      type: "COMPARISON",
      sectionTitle: "4. Do vs Does",
      badge: "CORE RULE",
      title: "Do for Plural, Does for Singular",
      titleZh: "Do 跟 With 复数 / Does 跟 With 单数",
      content:
        "This is the #1 mistake zone. Do and Does are NOT interchangeable. Do follows I, You, We, They. Does follows He, She, It.",
      contentZh:
        "助动词 Do vs Does 是第一大错误区。它们不可交换。Do 用于 I/You/We/They，Does 用于 He/She/It。",
      comparisons: [
        {
          conceptA: "DO",
          conceptB: "DOES",
          difference: "Use 'do' with I, You, We, They. Use 'does' with He, She, It.",
          differenceZh: "Do 用于 I/You/We/They；Does 用于 He/She/It。",
          exampleA: "Do you like pizza? / We don't watch TV.",
          exampleB: "Does he like pizza? / She doesn't watch TV.",
        },
        {
          conceptA: "I / You / We / They",
          conceptB: "He / She / It",
          difference: "Plural subjects use 'do'; singular-third-person subjects use 'does'.",
          differenceZh: "复数主语用 'do'，单数第三人称主语用 'does'。",
          exampleA: "I play guitar. — Do I play guitar?",
          exampleB: "He plays guitar. — Does he play guitar?",
        },
      ],
    },

    {
      id: "slide-5-positive-statements",
      slideNumber: 5,
      type: "TABLE",
      sectionTitle: "5. The Helper Table",
      badge: "REFERENCE",
      title: "Do, Does, Did — Person & Tense Guide",
      titleZh: "助动词用法速查表",
      content:
        "Study this table. The main verb always stays in base form.",
      contentZh:
        "学习下列表格。助动词后面的主要动词始终保持原形。",
      table: {
        headers: ["Subject", "Helper", "Example (Base Form)", "Negative"],
        headersZh: ["主语", "助动词", "例句（原形动词）", "否定句"],
        rows: [
          { cells: ["I", "do", "I do my homework.", "I don't do yoga."], },
          { cells: ["You", "do", "You do well.", "You don't play soccer."], },
          { cells: ["He/She/It", "does", "He does his job.", "She doesn't cook."], },
          { cells: ["We", "do", "We do everything.", "We don't wait."], },
          { cells: ["They", "do", "They do homework.", "They don't sleep early."], },
          { cells: ["(Any)", "did", "They did it.", "I didn't go yesterday."], },
        ],
      },
    },

    {
      id: "slide-6-questions",
      slideNumber: 6,
      type: "EXAMPLE",
      sectionTitle: "6. Turning Statements into Questions",
      badge: "QUESTION FORM",
      title: "The Inversion Formula: Helper + Subject + Verb?",
      titleZh: "提问公式：助动词 + 主语 + 动词原形 = 疑问句",
      content:
        "Step 1: Identify the subject and main verb. Step 2: Place do/does/did before the subject. Step 3: Keep the main verb in base form. Step 4: Add a question mark.",
      contentZh:
        "第 1 步：找到主语和动词。第 2 步：把 do/does/did 放在主语前面。第 3 步：动词还原为原形。第 4 步：加问号。",
      examples: [
        {
          en: "You play the piano. → Do you play the piano?",
          zh: "你可以弹钢琴 → 你会弹钢琴吗？",
          highlight: "Do",
          explanation: "Statement 'play' → Question 'Do ... play'",
        },
        {
          en: "She works here. → Does she work here?",
          zh: "她在这工作 → 她在这工作吗？",
          highlight: "Does",
          explanation: "She takes 'does'; 'work' stays base form (not works).",
        },
      ],
      audioText: "Do you play the piano? Does she work here?",
    },

    {
      id: "slide-7-negatives",
      slideNumber: 7,
      type: "RULE",
      sectionTitle: "7. Building Negatives",
      badge: "NEGATIVES",
      title: "Don't, Doesn't, Didn't — The Three Shields",
      titleZh: "Don't / Doesn't / Didn't — 三面否定盾牌",
      content:
        "Negative sentences are like force fields — they push meaning away. But you must choose the right shield: don't (I/you/we/they), doesn't (he/she/it), didn't (any past action).",
      contentZh:
        "否定句如防护盾 — 一定要选对盾牌：don't（I/you/we/they），doesn't（he/she/it），didn't（任何过去动作）。",
      keyPoints: [
        "I / You / We / They + don't + verb",
        "He / She / It + doesn't + verb",
        "Did is the same for ALL persons in the past: didn't + verb",
      ],
    },

    {
      id: "slide-8-did",
      slideNumber: 8,
      type: "COMPARISON",
      sectionTitle: "8. The Time Traveler: Did",
      badge: "PAST TENSE",
      title: "Did Handles the Past Universally",
      titleZh: "Did 为何是穿越回去的助手？",
      content:
        "Did works for ALL persons in the past. Whether I, you, he, she, we — everyone gets 'did'. The main verb returns to base form.",
      contentZh:
        "Did 适用于所有人称的过去时。无论 I/You/He/She/We，都用 'did'。主要动词恢复为原形。",
      comparisons: [
        {
          conceptA: "Present Do/Does",
          conceptB: "Past Did",
          difference: "Present uses do (plural) / does (singular). Past uses did for everyone.",
          differenceZh: "现在用 do（复数）/ does（单数），过去对所有人都用 did。",
          exampleA: "Do they study? / Does she study?",
          exampleB: "Did they study? / Did she study?",
        },
      ],
    },

    {
      id: "slide-9-real-life-scenario",
      slideNumber: 9,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "9. At the Hotel",
      badge: "SCENARIO",
      title: "Checking In at the Front Desk",
      titleZh: "酒店前台入住问答",
      scenario: {
        context: "A guest arrives at a hotel front desk and needs to ask questions.",
        contextZh: "一位客人来到酒店前台，需要提出各种询问。",
        dialogue: [
          { speaker: "Guest", en: "Do you have any rooms available?", zh: "你们有房间吗？", isTargetGrammar: true },
          { speaker: "Receptionist", en: "Yes, we do. Would you like a non-smoking room?", zh: "有的，你想要非吸烟房吗？", isTargetGrammar: true },
          { speaker: "Guest", en: "Does it have a city view?", zh: "有城市景观吗？", isTargetGrammar: true },
          { speaker: "Receptionist", en: "It does. The rate is $180 per night.", zh: "有的，每晚 180 美元。", isTargetGrammar: true },
          { speaker: "Guest", en: "Did you book this through our website?", zh: "你们是通过网站预订的吗？", isTargetGrammar: true },
        ],
        task: "Listen for the helping verbs that turn statements into questions. Notice how the main verb stays in base form!",
        taskZh: "听出助动词如何把陈述句变成疑问句，并注意主要动词始终保持原形！",
      },
    },

    {
      id: "slide-10-vocabulary",
      slideNumber: 10,
      type: "VOCABULARY",
      sectionTitle: "10. Hotel Check-in Vocabulary",
      badge: "VOCABULARY",
      title: "Key Words for the Scenario",
      titleZh: "酒店入住场景关键词",
      vocabulary: [
        {
          word: "available",
          wordZh: "可用的",
          partOfSpeech: "adjective",
          definition: "Present and ready for use; free to be used.",
          exampleSentence: "We have rooms available for tonight.",
          exampleSentenceZh: "我们有今晚可用的房间。",
        },
        {
          word: "non-smoking",
          wordZh: "非吸烟的",
          partOfSpeech: "adjective",
          definition: "A room where smoking is not allowed.",
          exampleSentence: "I would prefer a non-smoking room.",
          exampleSentenceZh: "我更喜欢非吸烟房。",
        },
        {
          word: "rate",
          wordZh: "费率",
          partOfSpeech: "noun",
          definition: "The price you pay for a room per night.",
          exampleSentence: "The daily rate includes breakfast.",
          exampleSentenceZh: "每日费用含早餐。",
        },
      ],
    },

    {
      id: "slide-11-common-mistake-1",
      slideNumber: 11,
      type: "COMMON_MISTAKE",
      sectionTitle: "11. The #1 Enemy: He Don't",
      badge: "GLOBAL PITFALL",
      title: "Never Say 'He Don't' — The Chinese Interference Trap",
      titleZh: "千万别说'He don't'——中文直译陷阱",
      content:
        "Chinese doesn't distinguish do vs does the way English does. We just use '不' in front. But in English, singular third-person needs 'does', and the verb loses its -s.",
      contentZh:
        "中文中不区分 'do' 与 'does'，只用 '不' 在前面。但英语中单数第三人称必须用 'does'，动词去掉 -s。",
      mistakes: [
        {
          wrong: "He don't like pizza.",
          right: "He doesn't like pizza.",
          why: "Singular third-person 'He' requires 'does', not 'don't'.",
          explanation: "Does takes -s off the next verb: like (not likes).",
          explanationZh: "单数第三人称 'He' 必须用 'doesn't'。",
        },
        {
          wrong: "She don't come here.",
          right: "She doesn't come here.",
          why: "She is singular third-person, so we need 'does', not 'don't'.",
          explanation: "comes → come after doesn't",
          explanationZh: "She 用 doesn't，come 保持原形。",
        },
      ],
      audioText: "He does not like pizza. He does not drink coffee. Not: He don't. Never.",
    },

    {
      id: "slide-12-common-mistake-2",
      slideNumber: 12,
      type: "COMMON_MISTAKE",
      sectionTitle: "12. Double Past: Did She Goes?",
      badge: "PAST TRAP",
      title: "After 'Did', Always Use Base Form",
      titleZh: "Did 之后必还原原形",
      content:
        "Did already carries the past tense. The main verb NEVER adds -ed or -s after 'did'. This is the 'double past' trap.",
      contentZh:
        "Did 已经带有过去时，主要动词绝不能再加 -ed 或 -s，避免双重过去时错误。",
      mistakes: [
        {
          wrong: "Did she goes to school yesterday?",
          right: "Did she go to school yesterday?",
          why: "'Did' already marks past. The verb returns to base form.",
          explanation: "goes → go after did",
          explanationZh: "Did 后动词还原：goes → go。",
        },
        {
          wrong: "Did they walked home?",
          right: "Did they walk home?",
          why: "After 'did', the verb is always clean base form — no past tense markers.",
          explanation: "walked → walk after did",
          explanationZh: "Did 后绝不加过去式 -ed。",
        },
      ],
    },

    {
      id: "slide-13-scenario-office",
      slideNumber: 13,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "13. At the Office",
      badge: "SCENARIO",
      title: "Morning Standup Meeting",
      titleZh: "办公室：晨会问答",
      scenario: {
        context: "Team members asking about yesterday's progress.",
        contextZh: "团队成员询问关于昨天工作进展的情况。",
        dialogue: [
          { speaker: "Manager", en: "Do we have the client ready?", zh: "我们有准备好的客户吗？", isTargetGrammar: true },
          { speaker: "Sarah", en: "I don't have her confirmation yet.", zh: "我还没收到她的确认。", isTargetGrammar: true },
          { speaker: "Manager", en: "Did you send the email?", zh: "你发了邮件吗？", isTargetGrammar: true },
          { speaker: "Sarah", en: "Yes, I did. Did the client reply?", zh: "发了，客户回复了吗？", isTargetGrammar: true },
          { speaker: "Manager", en: "Does he usually respond this quickly?", zh: "他通常这么快回复吗？", isTargetGrammar: true },
        ],
        task: "Note how do/does handle the present and did handles the past.",
        taskZh: "注意 Do/Does 用于现在，Did 用于过去。",
      },
    },

    {
      id: "slide-14-mini-quiz-1",
      slideNumber: 14,
      type: "MINI_QUIZ",
      sectionTitle: "14. Very Easy Questions (1-10)",
      badge: "LEVEL 1",
      title: "Spot the Helping Verb",
      titleZh: "找出助动词",
      question: {
        question: "Which word is the helping verb in: 'Do you like coffee?'",
        questionZh: "在 'Do you like coffee?' 中，哪个是助动词？",
        options: ["you", "do", "like", "coffee"],
        correctIndex: 1,
        explanation: "'Do' is the helping verb here — it makes the question possible!",
        explanationZh: "'Do' 是助动词，使疑问句得以形成！",
        xpReward: 10,
      },
    },

    {
      id: "slide-15-quiz-2",
      slideNumber: 15,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Do or Does?",
      titleZh: "Do 还是 Does？",
      content: "Select the correct helping verb for each subject.",
      question: {
        question: "He _____ likes pizza.",
        questionZh: "他喜欢披萨吗？",
        options: ["do", "does"],
        correctIndex: 1,
        explanation: "'He' is singular third-person, which takes 'does'.",
        explanationZh: "'He' 是单数第三人称，用 'does'。",
        xpReward: 10,
      },
    },

    {
      id: "slide-16-quiz-3",
      slideNumber: 16,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Negative Sentences",
      titleZh: "否定句选择",
      content: "Choose the grammatically correct negative.",
      question: {
        question: "Which is correct?",
        questionZh: "以下哪个句子是正确的？",
        options: [
          "He don't like coffee.",
          "He doesn't like coffee.",
          "He don't likes coffee.",
          "He not like coffee.",
        ],
        correctIndex: 1,
        explanation: "He (singular) + doesn't + like (base form).",
        explanationZh: "He（单数）+ doesn't + like（原形）。",
        xpReward: 10,
      },
    },

    {
      id: "slide-17-quiz-4",
      slideNumber: 17,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Past Questions with Did",
      titleZh: "Did 提问过去",
      content: "Select the correct past question.",
      question: {
        question: "We asked: '_____ you see the movie last night?'",
        questionZh: "询问昨晚是否有看电影，用什么助动词？",
        options: ["Do", "Does", "Did"],
        correctIndex: 2,
        explanation: "'Did' is used for all persons in past questions.",
        explanationZh: "Did 用于所有过去时疑问句。",
        xpReward: 10,
      },
    },

    {
      id: "slide-18-quiz-5",
      slideNumber: 18,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Question Formation",
      titleZh: "正确提问",
      content: "Choose the correctly formed question.",
      question: {
        question: "'She works late' — what is the correct question form?",
        questionZh: "把 'She works late' 变成疑问句正确的形式是？",
        options: [
          "Do she works late?",
          "Does she work late?",
          "She work late?",
          "Is she working late?",
        ],
        correctIndex: 1,
        explanation: "Does + She + base verb (work) + ? → Does she work late?",
        explanationZh: "Does + She + 原形动词(work) + ? = Does she work late?",
        xpReward: 10,
      },
    },

    {
      id: "slide-19-quiz-6",
      slideNumber: 19,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Base Form Rule",
      titleZh: "原形还原法则",
      content: "After which helper does the verb return to base form?",
      question: {
        question: "After which helping verb does the main verb return to base form?",
        questionZh: "在哪个助动词后，主要动词恢复原形？",
        options: ["did", "does", "both did and does", "neither"],
        correctIndex: 2,
        explanation: "After both 'did' and 'does' (and 'do'), the main verb is in base form.",
        explanationZh: "在 did 和 does（以及 do）后，主要动词都保持原形。",
        xpReward: 10,
      },
    },

    {
      id: "slide-20-quiz-7",
      slideNumber: 20,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Choose the Right Person",
      titleZh: "选择正确的人称助动词",
      question: {
        question: "I always eat breakfast at 7 AM. What is true?",
        questionZh: "我总是早上7点吃早餐，哪个选项正确？",
        options: ["do I eat", "I do eat", "I eats", "I am eating"],
        correctIndex: 1,
        explanation: "'I' uses 'do' in questions. In statements: 'I do eat breakfast'.",
        explanationZh: "'I' 在疑问句用 'do'。陈述句：I do eat breakfast.",
        xpReward: 10,
      },
    },

    {
      id: "slide-21-quiz-8",
      slideNumber: 21,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Past Negative",
      titleZh: "过去否定句",
      question: {
        question: "Pick the correct sentence about yesterday:",
        questionZh: "选出关于昨天的正确句子：",
        options: [
          "I not went.",
          "I didn't went.",
          "I didn't go.",
          "I wasn't go.",
        ],
        correctIndex: 2,
        explanation: "didn't + base verb (go) — no -ed, no double past.",
        explanationZh: "didn't + 原形动词(go)，不可加 -ed。",
        xpReward: 10,
      },
    },

    {
      id: "slide-22-quiz-9",
      slideNumber: 22,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Third Person Agreement",
      titleZh: "第三人称一致性",
      question: {
        question: "She _____ her coffee every morning.",
        questionZh: "她每天早晨喝咖啡。",
        options: ["do", "does", "is", "has"],
        correctIndex: 1,
        explanation: "Third-person singular 'She' uses 'does' (with -s on the verb in positive).",
        explanationZh: "第三人称单数 She 用 'does'。",
        xpReward: 10,
      },
    },

    {
      id: "slide-23-quiz-10",
      slideNumber: 23,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Easy Completion",
      titleZh: "简单填空",
      question: {
        question: "_____ they understand the homework?",
        questionZh: "他们理解作业吗？",
        options: ["Do", "Does", "Did"],
        correctIndex: 0,
        explanation: "'They' is plural → use 'Do'.",
        explanationZh: "'They' 为复数，用 'Do'。",
        xpReward: 10,
      },
    },

    {
      id: "slide-24-easy-quiz-1",
      slideNumber: 24,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "24. Easy Questions (11-20)",
      badge: "LEVEL 2",
      title: "Office Scenario Questions",
      titleZh: "办公场景疑问",
      content: "Read the scenario and answer with do/does/did correctly.",
      scenario: {
        context: "Maria just joined a new marketing team. Her colleague asks about her first week.",
        contextZh: "玛丽亚刚加入一个新的营销团队。同事询问她的第一周情况。",
        dialogue: [
          { speaker: "Colleague", en: "Do you like the team?", zh: "你喜欢这个团队吗？", isTargetGrammar: true },
          { speaker: "Maria", en: "Yes, I do! Do they welcome you well?", zh: "喜欢！他们欢迎你吗？", isTargetGrammar: true },
          { speaker: "Colleague", en: "They do.", zh: "他们很欢迎。", isTargetGrammar: true },
        ],
        task: "Complete the sentences using do/does/did.",
        taskZh: "使用 do/does/did 完成句子。",
      },
      question: {
        question: "Which helping verb completes: '_____ your teammates respect you?'",
        questionZh: "'_____ your teammates respect you?' 用哪个助动词？",
        options: ["Do", "Does", "Did"],
        correctIndex: 0,
        explanation: "'You' takes 'Do' regardless of 'teammates'.",
        explanationZh: "'You' 总是用 'Do'。",
        xpReward: 12,
      },
    },

    {
      id: "slide-25-easy-quiz-2",
      slideNumber: 25,
      type: "MULTIPLE_CHOICE",
      badge: "LEVEL 2",
      title: "Travel Booking Dialog",
      titleZh: "旅行预订对话",
      content: "Choose the correct helping verb to complete the conversation.",
      scenario: {
        context: "A customer calls an airline to ask about a flight change.",
        contextZh: "客户打电话询问航班改签事宜。",
        dialogue: [
          { speaker: "Customer", en: "Do you have a seat on tomorrow's flight?", zh: "你们有明天航班的座位吗？", isTargetGrammar: true },
          { speaker: "Agent", en: "Yes, we do. Did you book online or by phone?", zh: "有的，你是在线订还是电话订的？", isTargetGrammar: true },
        ],
        task: "Fill the blank with do/does/did.",
        taskZh: "填入 do/does/did。",
      },
      question: {
        question: "' _____ we need extra baggage fees?'",
        questionZh: "' _____ 我们需要额外行李费吗？'",
        options: ["Do", "Does", "Did"],
        correctIndex: 0,
        explanation: "'We' always uses 'Do' in questions.",
        explanationZh: "'We' 在疑问句中总用 'Do'。",
        xpReward: 12,
      },
    },

    {
      id: "slide-26-easy-quiz-3",
      slideNumber: 26,
      type: "MINI_QUIZ",
      badge: "LEVEL 2",
      title: "Restaurant Ordering",
      titleZh: "餐厅点餐",
      content: "Complete this restaurant interaction.",
      question: {
        question: "Which is grammatically correct at a restaurant?",
        questionZh: "在餐厅对话中，哪个句子语法正确？",
        options: [
          "Do the waiter bring my order?",
          "Does the waiter bring my order?",
          "Does the waiter brings my order?",
          "Waiter brings my order?",
        ],
        correctIndex: 1,
        explanation: "'Waiter' is singular → 'Does the waiter bring'.",
        explanationZh: "'Waiter' 是单数 → 'Does the waiter bring'。",
        xpReward: 12,
      },
    },

    {
      id: "slide-27-easy-quiz-4",
      slideNumber: 27,
      type: "ERROR_CORRECTION",
      badge: "LEVEL 2",
      title: "Fix the Interview Answer",
      titleZh: "纠正面试回答",
      content: "The candidate made a grammar error. Fix it!",
      errorCorrection: {
        sentence: "I don't got any complaints from my last job.",
        errorWord: "got",
        correctWord: "get",
        options: ["got", "get", "gotten", "getting"],
        explanation: "After 'don't', the verb must be in base form: 'don't get' (not 'don't got').",
        explanationZh: "在 don't 之后，动词必须是原形：don't get。",
      },
    },

    {
      id: "slide-28-easy-quiz-5",
      slideNumber: 28,
      type: "MINI_QUIZ",
      badge: "LEVEL 2",
      title: "Family Dinner Plans",
      titleZh: "家庭聚餐计划",
      question: {
        question: "Choose the correct sentence about family dinner plans.",
        questionZh: "选择关于家庭聚餐的正确句子。",
        options: [
          "Does your mom cook dinner every Sunday?",
          "Do your mom cooks dinner every Sunday?",
          "Your mom does cook dinner every Sunday?",
          "Did your mom cook dinner every Sunday?",
        ],
        correctIndex: 0,
        explanation: "'Your mom' is singular → 'Does your mom cook'.",
        explanationZh: "'Your mom' 单数 → 'Does your mom cook'。",
        xpReward: 12,
      },
    },

    {
      id: "slide-29-easy-quiz-6",
      slideNumber: 29,
      type: "MULTIPLE_CHOICE",
      badge: "LEVEL 2",
      title: "Weekend Recap",
      titleZh: "周末回顾",
      content: "Talking about last weekend requires the right helping verb.",
      question: {
        question: "Which sentence correctly asks about last weekend?",
        questionZh: "以下哪句正确询问上周末？",
        options: [
          "Do you went shopping?",
          "Did you go shopping?",
          "Does you go shopping?",
          "Did you went shopping?",
        ],
        correctIndex: 1,
        explanation: "'Did' + base verb: Did you go (not went).",
        explanationZh: "'Did' + 原形动词：Did you go。",
        xpReward: 12,
      },
    },

    {
      id: "slide-30-easy-quiz-7",
      slideNumber: 30,
      type: "MINI_QUIZ",
      badge: "LEVEL 2",
      title: "Correct the Double Verb",
      titleZh: "纠正双动词叠加",
      question: {
        question: "The student said: 'I didn't knows the answer.' What's wrong?",
        questionZh: "学生说：'I didn't knows the answer.' 哪里错了？",
        options: ["should be 'know'", "should be 'known'", "should be 'knew'", "nothing wrong"],
        correctIndex: 0,
        explanation: "After 'didn't', revert to base form: 'didn't know'.",
        explanationZh: "在 didn't 后还原为原形：didn't know。",
        xpReward: 12,
      },
    },

    {
      id: "slide-31-easy-quiz-8",
      slideNumber: 31,
      type: "MULTIPLE_CHOICE",
      badge: "LEVEL 2",
      title: "Workplace Meeting",
      titleZh: "职场会议",
      content: "During a team meeting, someone asks about progress.",
      question: {
        question: "Complete: 'The project manager _____ confirm the deadline?'",
        questionZh: "填空：'The project manager _____ confirm the deadline?'",
        options: ["do", "does", "did"],
        correctIndex: 1,
        explanation: "Project manager (singular) + does + confirm.",
        explanationZh: "项目经理（单数）+ does + confirm。",
        xpReward: 12,
      },
    },

    {
      id: "slide-32-easy-quiz-9",
      slideNumber: 32,
      type: "MINI_QUIZ",
      badge: "LEVEL 2",
      title: "Interview Question",
      titleZh: "面试问答",
      question: {
        question: "Choose the correct way to ask a salary question in an interview:",
        questionZh: "在面试中如何正确询问薪资？",
        options: [
          "What does the position pay?",
          "What do the position pay?",
          "What did the position pay?",
          "Does the position pay?",
        ],
        correctIndex: 0,
        explanation: "'Position' is singular → 'does' + pay; or simply: 'What does the position pay?'",
        explanationZh: "'Position' 单数 → does + pay。",
        xpReward: 12,
      },
    },

    {
      id: "slide-33-easy-quiz-10",
      slideNumber: 33,
      type: "ERROR_CORRECTION",
      badge: "LEVEL 2",
      title: "Fix the Social Media Comment",
      titleZh: "修正社交媒体评论",
      content: "A friend posts: 'I didn't went to the party.' Fix it!",
      errorCorrection: {
        sentence: "I didn't went to the party last night — I was exhausted!",
        errorWord: "went",
        correctWord: "go",
        options: ["went", "go", "gone", "going"],
        explanation: "After 'didn't', use the base form: 'didn't go'.",
        explanationZh: "didn't 后用原形：didn't go。",
      },
    },

    {
      id: "slide-34-intermediate-comparison",
      slideNumber: 34,
      type: "COMPARISON",
      sectionTitle: "34. Deeper Comparison",
      badge: "ACTION VS HELPING",
      title: "Main Verb vs Helping Verb",
      titleZh: "主要动词 vs 助动词",
      content:
        "The difference is subtle but crucial. A statement with a helping verb carries polarity (yes/no meaning) directly. A plain statement with just a main verb cannot easily be negated or questioned.",
      contentZh:
        "区别细微但重要。带助动词的陈述句直接承载否定/肯定含义。单纯的主要动词声明无法直接变成否定或疑问。",
      comparisons: [
        {
          conceptA: "Statement + Main Verb Only",
          conceptB: "Statement + Helping Verb + Main Verb",
          difference: "The helper does the grammatical lifting for question/negative formation.",
          differenceZh: "助动词承担提问/否定的语法重担。",
          exampleA: "She plays guitar. → She does not play guitar.",
          exampleB: "She plays guitar. → Does she play guitar? / She does NOT play guitar.",
        },
      ],
    },

    {
      id: "slide-35-review",
      slideNumber: 35,
      type: "REVIEW",
      sectionTitle: "35. Core Review",
      badge: "REVIEW",
      title: "The 3 Helping Verb Laws",
      titleZh: "助动词三大铁律",
      content: "You have learned the full system. Review the three laws:",
      contentZh: "你已掌握全部体系。回顾助动词的三大法则：",
      reviewPoints: [
        {
          keyTakeaway: "1. Do for I/You/We/They; Does for He/She/It in the present.",
          keyTakeawayZh: "一般现在时：I/You/We/They 用 'do'，He/She/It 用 'does'。",
          ruleSummary: "I do — She does",
        },
        {
          keyTakeaway: "2. Did for ALL subjects in the past (past tense of 'do').",
          keyTakeawayZh: "所有人称过去时统一用 'did' (do 的过去式)。",
          ruleSummary: "I did, you did, he did, she did",
        },
        {
          keyTakeaway: "3. After the helper, the main verb returns to its clean base form.",
          keyTakeawayZh: "助动词之后，主要动词恢复为原形。",
          ruleSummary: "Does she PLAY / Did they GO",
        },
      ],
    },

    {
      id: "slide-36-speaking-challenge",
      slideNumber: 36,
      type: "SPEAKING_DRILL",
      sectionTitle: "36. Speaking Challenge",
      badge: "SPEAKING DRILL",
      title: "Ask 3 Friends: One Question About Yesterday",
      titleZh: "询问 3 位朋友：问一个关于昨天的问题",
      content: "Speaking is the final test. You need to use 'did' correctly.",
      contentZh: "脱口而出是终极考验。你需要正确使用 'did'。",
      speakingDrill: {
        prompt: "Ask a friend: 'Did you ___ (do something) yesterday?' Then report back what they did. Use full sentences!",
        targetSentence: "I asked my friend if they went to the gym yesterday.",
        targetSentenceZh: "我问了我的朋友他们昨天去健身房了吗。",
        tips: "Practice pronunciation: Did you go? Did she work? Did they study?",
      },
    },
  ],
};







