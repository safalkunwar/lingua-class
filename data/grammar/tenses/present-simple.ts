import { GrammarLesson } from "@/types/grammar";

export const presentSimpleLesson: GrammarLesson = {
  id: "present-simple-foundation",
  subcategoryId: "present-simple",
  categoryId: "tenses",
  title: "Present Simple: Habits & Facts",
  titleZh: "一般现在时：习惯与事实",
  subtitle: "The foundation tense — habits, routines, scheduled events, and permanent truths",
  level: "A1",
  estimatedMinutes: 45,
  lessonIndex: 1,
  totalLessonsInSubcategory: 1,
  description:
    "Master the present simple for expressing habits, routines, facts, and scheduled events. Learn the structure (verb + -s/-es for third-person singular), time markers, and how it differs from the present continuous.",
  descriptionZh:
    "掌握一般现在时，表达习惯、例行公事、事实和定时事件。学习结构（第三人称单数动词加-s/-es）、时间标志词，以及它如何区别于现在进行时。",
  objectives: [
    "understand what the present simple expresses (habits, routines, facts, schedules)",
    "identify present simple in sentences by looking for third-person -s/-es",
    "construct present simple positive, negative, and question forms",
    "distinguish present simple from present continuous",
    "apply time markers (always, usually, often, sometimes, never, every week)",
    "use present simple in real-life conversations, PTE, and academic contexts",
    "eliminate Chinese learner interference (adding '是' before adjectives)",
  ],
  prerequisites: ["action-verbs-foundation", "helping-verbs-do-does-did"],
  teacherGuide: {
    teachingObjective:
      "Establish the present simple as the foundational tense. Emphasize that it expresses habits, facts, and scheduled events — not actions happening right now. Contrast with Chinese where present time requires no specific marker.",
    whatToExplain: [
      "Present simple = habits, routines, general truths, scheduled events (timetables)",
      "Third-person singular adds -s/-es: work → works, go → goes",
      "Negatives: don't/doesn't + base verb (the main verb reverts to base form)",
      "Questions: Do/Does + subject + base verb",
      "Time markers: always, usually, often, sometimes, rarely, never, every day/week/month",
      "Chinese interference: 我早上七点起床 (no verb form change) vs I wake up at 7 AM (same form for 'I')",
    ],
    questionsToAsk: [
      "What time do you usually wake up?",
      "Does she drive to work every day?",
      "Do you always eat breakfast?",
      "When is the train from Beijing to Shanghai?",
    ],
    commonConfusion: [
      "Confusing present simple (habit) with present continuous (now): 'I am eating breakfast' vs 'I eat breakfast every morning'",
      "Dropping the -s: 'She work here' instead of 'She works here'",
      "Double negatives: 'I don't no' instead of 'I don't know'",
      "Using present simple for future scheduled events without recognizing it as a special use",
    ],
    extraExamples: [
      "The sun rises in the east.",
      "Trains depart at 9 AM from the main station.",
      "Water boils at 100 degrees Celsius.",
      "My sister plays tennis every Saturday morning.",
    ],
    timingSchedule: [
      { phase: "Warm-up: Daily Routine", duration: "0–5 min", activity: "Ask students: What time do you wake up? Do you always eat breakfast? What do you do every morning?" },
      { phase: "Core Concept", duration: "5–15 min", activity: "Explain present simple as the 'habit tense' — actions that happen regularly, not right now" },
      { phase: "Form & Agreement", duration: "15–25 min", activity: "Show verb conjugation table; practice adding -s/-es; contrast with present continuous" },
      { phase: "Time Markers", duration: "25–35 min", activity: "Teach frequency adverbs: always → usually → often → sometimes → rarely → never; placement rules" },
      { phase: "Scenarios & Dialogues", duration: "35–50 min", activity: "Roleplay daily routine conversation; airport timetable question; morning routine description" },
      { phase: "Drills & Homework", duration: "50–60 min", activity: "Fill-in-the-blank practice, error correction, speaking challenge; assign homework" },
    ],
  },
  homework: {
    title: "My Daily Routine Portfolio",
    titleZh: "我的日常作息实践作业",
    tasks: [
      {
        type: "writing",
        instruction: "Write 8 sentences describing your typical weekday morning using present simple. Include at least 3 different time markers (e.g., usually, often, every morning).",
        instructionZh: "使用一般现在时写出8个描述你工作日早晨的句子。包含至少3个不同的时间标志词（如 usually, often, every morning）。",
        sampleAnswer: "I usually wake up at 7:00 AM. I always check my phone right after. I often drink a glass of water. I never skip breakfast. I go to work at 8:30. I am rarely late. I always take the subway. I usually arrive before 9:00.",
      },
      {
        type: "speaking",
        instruction: "Record a 45-second audio describing what your family does every weekend. Use present simple throughout.",
        instructionZh: "录制45秒音频，描述你的家人每个周末做什么。全程使用一般现在时。",
        sampleAnswer: "My father usually goes to the gym on Saturdays. My mother often visits her parents on Sundays. My sister rarely cooks at home. We always watch a movie together in the evening. My brother never watches TV on weekends. He plays basketball instead.",
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
      title: "Welcome to Tenses: Present Simple",
      titleZh: "欢迎来到时态学习：一般现在时",
      content:
        "You have just completed the verb unit and now enter the heart of English grammar: TENSES. Tenses tell you WHEN an action happens, HOW it relates to other times, and WHETHER it's complete or ongoing. This first lesson — Present Simple — is the foundation for everything that follows.",
      contentZh:
        "你刚刚完成了动词单元，现在进入英语语法的中心：时态。时态告诉你的动作是什么时候发生的、它与其他时间如何关联、以及它是完成还是进行。这节课——一般现在时——是后续所有时态学习的基础。",
      keyPoints: [
        "Tenses = TIME + ACTION + COMPLETION + DURATION",
        "Present Simple is the foundation — habits, facts, scheduled events",
        "This lesson builds the base you'll use for all 13 tenses",
      ],
    },

    {
      id: "slide-2-what-is-tense",
      slideNumber: 2,
      type: "EXPLANATION",
      sectionTitle: "2. What Is a Tense?",
      badge: "DEFINITION",
      title: "Tense = Time + Action + Completion",
      titleZh: "时态 = 时间 + 动作 + 完成程度",
      content:
        "A tense tells you three things: (1) WHEN did the action happen? (2) Is the action COMPLETE or ONGOING? (3) How long has it been going on? These are TIME, ACTION, COMPLETION, and DURATION.",
      contentZh:
        "时态告诉你三件事：(1) 动作发生在什么时间？(2) 动作是已完成还是正在进行？(3) 动作持续了多久？这就是时间、动作、完成程度和持续时长。",
      keyPoints: [
        "TIME: past, present, or future?",
        "ACTION: what is being done?",
        "COMPLETION: is it finished or in progress?",
        "DURATION: how long has it been going on?",
      ],
      audioText: "A tense tells you when the action happened, whether it's complete, and how long it lasts.",
    },

    {
      id: "slide-3-tense-map",
      slideNumber: 3,
      type: "VISUAL_DIAGRAM",
      sectionTitle: "3. The Tense Map",
      badge: "MAP",
      title: "The 12 English Tenses at a Glance",
      titleZh: "12种英语时态总览",
      content:
        "Here is the big picture. English has 3 time frames (present, past, future) × 4 aspects (simple, continuous, perfect, perfect continuous) = 12 tenses. You are starting at the top-left corner: Present Simple.",
      contentZh:
        "这是全局图。英语有3个时间框架（现在、过去、将来）× 4种体貌（一般、进行、完成、完成进行）= 12种时态。你从左上角开始：一般现在时。",
      diagram: {
        type: "custom",
        title: "Tense Matrix",
        titleZh: "时态矩阵",
        formula: "3 Times × 4 Aspects = 12 Tenses",
        formulaZh: "3个时间 × 4种体貌 = 12种时态",
      },
      keyPoints: [
        "Simple: I work. (fact / habit)",
        "Continuous: I am working. (now / temporary)",
        "Perfect: I have worked. (past → present relevance)",
        "Perfect Continuous: I have been working. (duration up to now)",
      ],
    },

    {
      id: "slide-4-what-present-simple",
      slideNumber: 4,
      type: "EXPLANATION",
      sectionTitle: "4. What Does Present Simple Express?",
      badge: "MEANING",
      title: "4 Uses of Present Simple",
      titleZh: "一般现在时的4种用法",
      content:
        "The present simple is not about 'right now'. It is about PATTERNS and PERSISTENCE. There are four main uses.",
      contentZh:
        "一般现在时不是关于'当下这一刻'。它是关于规律性和持久性。主要有四种用法。",
      keyPoints: [
        "1. Habits & Routines: 'I drink coffee every morning.'",
        "2. General Facts & Truths: 'Water boils at 100°C.'",
        "3. Scheduled/Timetable Events: 'The train leaves at 9:15 AM.'",
        "4. Permanent States: 'She lives in Beijing.'",
      ],
      audioText: "The present simple is for habits, facts, timetables, and permanent states.",
    },

    {
      id: "slide-5-habits",
      slideNumber: 5,
      type: "EXAMPLE",
      sectionTitle: "5. Habit Examples",
      badge: "HABITS",
      title: "Routines & Repeated Actions",
      titleZh: "日常习惯与重复动作",
      content:
        "Habits are actions you do regularly, often at predictable times. Present simple is the natural tense for habits.",
      contentZh:
        "习惯是你经常做的事情，通常发生在可预见的时间。一般现在时是表达习惯的自然时态。",
      examples: [
        { en: "I wake up at 7 AM every day.", zh: "我每天早晨7点起床。", highlight: "wake up", explanation: "Regular daily habit — 'every day' confirms it." },
        { en: "She drinks green tea after lunch.", zh: "她午饭后喝绿茶。", highlight: "drinks", explanation: "Singular third-person: drink + s. 'After lunch' marks the routine." },
        { en: "They play basketball on Fridays.", zh: "他们每周五打篮球。", highlight: "play", explanation: "Plural: no -s. 'On Fridays' marks the weekly pattern." },
        { en: "The children sleep for 10 hours a night.", zh: "孩子们每晚睡10个小时。", highlight: "sleep", explanation: "Regular sleep pattern — 'a night' shows the routine." },
      ],
    },

    {
      id: "slide-6-facts",
      slideNumber: 6,
      type: "EXAMPLE",
      sectionTitle: "6. Fact Examples",
      badge: "FACTS",
      title: "General Truths & Scientific Facts",
      titleZh: "普遍真理与科学事实",
      content:
        "Facts and truths don't change — they are always true. We use present simple for universal facts.",
      contentZh:
        "事实和真理不会改变——它们永远正确。我们用一般现在时表达普遍事实。",
      examples: [
        { en: "The Earth revolves around the Sun.", zh: "地球绕太阳转。", highlight: "revolves", explanation: "Scientific truth — always true." },
        { en: "Ice melts at 0 degrees Celsius.", zh: "冰在0摄氏度融化。", highlight: "melts", explanation: "Natural law — universally true." },
        { en: "Bees make honey.", zh: "蜜蜂酿蜂蜜。", highlight: "make", explanation: "Biological fact — about how bees operate." },
        { en: "Machines need maintenance.", zh: "机器需要维护。", highlight: "need", explanation: "General truth about how machines work." },
      ],
    },

    {
      id: "slide-7-timetables",
      slideNumber: 7,
      type: "EXAMPLE",
      sectionTitle: "7. Timetable Examples",
      badge: "SCHEDULES",
      title: "Scheduled Events & Timetables",
      titleZh: "定时事件与时间表",
      content:
        "Events on a fixed timetable (trains, flights, classes, meetings) use present simple even though they happen in the future. This is a special use.",
      contentZh:
        "固定时间表上的事件（火车、航班、课程、会议）使用一般现在时，即使它们发生在将来。这是一个特殊用法。",
      examples: [
        { en: "The train leaves at 9:15 AM tomorrow.", zh: "火车明天上午9:15发车。", highlight: "leaves", explanation: "Future event on a fixed timetable — present simple is natural." },
        { en: "Your flight arrives at 10:30 PM.", zh: "你的航班晚上10:30到达。", highlight: "arrives", explanation: "Airport schedule — present simple for the timetable." },
        { en: "The meeting starts at 2 PM on Tuesday.", zh: "会议周二下午2点开始。", highlight: "starts", explanation: "Work schedule — present simple for the fixed start time." },
        { en: "Class ends at 4:30 on Friday.", zh: "课程周五4:30结束。", highlight: "ends", explanation: "School timetable — present simple even for Friday (future)." },
      ],
    },

    {
      id: "slide-8-states",
      slideNumber: 8,
      type: "EXAMPLE",
      sectionTitle: "8. State Examples",
      badge: "PERMANENT STATES",
      title: "Permanent Situations & States",
      titleZh: "永久状况与状态",
      content:
        "Permanent situations — where you live, what you own, what your job is — use present simple.",
      contentZh:
        "永久状况——你住在哪里、你拥有什么、你的工作是什么——使用一般现在时。",
      examples: [
        { en: "I live in Shanghai.", zh: "我住在上海。", highlight: "live", explanation: "Permanent residence — not 'I am living in Shanghai' (temporary)." },
        { en: "She owns a house near the river.", zh: "她在河边拥有一栋房子。", highlight: "owns", explanation: "Ownership is a permanent state." },
        { en: "He works as a software engineer.", zh: "他是一名软件工程师。", highlight: "works", explanation: "Job/occupation — permanent role." },
        { en: "The university has 5 campuses.", zh: "这所大学有5个校区。", highlight: "has", explanation: "Permanent fact about the university." },
      ],
    },

    {
      id: "slide-9-form-table",
      slideNumber: 9,
      type: "TABLE",
      sectionTitle: "9. The Form",
      badge: "STRUCTURE",
      title: "Present Simple: Subject + Verb (+ -s/-es)",
      titleZh: "一般现在时：主语 + 动词（+ -s/-es）",
      content:
        "Here is the structure for all 6 persons. Note that only third-person singular gets -s/-es.",
      contentZh:
        "以下是所有6种人称的结构。注意只有第三人称单数加-s/-es。",
      table: {
        headers: ["Person", "Singular", "Plural", "Example"],
        headersZh: ["人称", "单数", "复数", "例句"],
        rows: [
          { cells: ["1st", "I", "we", "I / We work in an office."], highlight: false },
          { cells: ["2nd", "you", "you", "You / You study English."], highlight: false },
          { cells: ["3rd", "he / she / it", "they", "He / She / It works here. They play tennis."], highlight: true },
        ],
      },
      keyPoints: [
        "I, you, we, they + base verb",
        "He, she, it + verb with -s/-es",
        "Add -es after: ch, sh, s, x, z, o, consonant+y (watch→watches, go→goes)",
      ],
    },

    {
      id: "slide-10-negative-form",
      slideNumber: 10,
      type: "RULE",
      sectionTitle: "10. Negative Form",
      badge: "NEGATIVE",
      title: "Don't / Doesn't + Base Verb",
      titleZh: "Don't / Doesn't + 原形动词",
      content:
        "To make present simple negative: don't (I/you/we/they) or doesn't (he/she/it) + BASE VERB. The main verb loses its -s!",
      contentZh:
        "构成一般现在时的否定句：don't（I/you/we/they）或 doesn't（he/she/it）+ 原形动词。主要动词去掉-s！",
      keyPoints: [
        "I don't drink coffee.",
        "She doesn't work on weekends.",
        "They don't play football.",
        "WARNING: She doesn't works → SHE DOESN'T WORK (base form!)",
      ],
    },

    {
      id: "slide-11-question-form",
      slideNumber: 11,
      type: "RULE",
      sectionTitle: "11. Question Form",
      badge: "QUESTIONS",
      title: "Do / Does + Subject + Base Verb?",
      titleZh: "Do / Does + 主语 + 原形动词？",
      content:
        "To make present simple questions: Do (I/you/we/they) or Does (he/she/it) + subject + base verb + ?",
      contentZh:
        "构成一般现在时的疑问句：Do（I/you/we/they）或 Does（he/she/it）+ 主语 + 原形动词 + ?",
      keyPoints: [
        "Do you like pizza?",
        "Does he work in a hospital?",
        "Do they travel in summer?",
        "Short answers: Yes, I do. / No, she doesn't.",
      ],
    },

    {
      id: "slide-12-time-markers",
      slideNumber: 12,
      type: "VOCABULARY",
      sectionTitle: "12. Time Markers",
      badge: "FREQUENCY",
      title: "The 7 Frequency Adverbs",
      titleZh: "7个频率副词",
      content:
        "These words tell you how often something happens. They are your 'signals' for present simple.",
      contentZh:
        "这些词告诉你某事发生的频率。它们是你识别一般现在时的'信号'。",
      vocabulary: [
        { word: "always", wordZh: "总是", partOfSpeech: "adverb (100%)", definition: "Happens every single time, without exception.", exampleSentence: "I always check my email first thing in the morning.", exampleSentenceZh: "我总是在早上第一件事就是查看邮箱。" },
        { word: "usually", wordZh: "通常", partOfSpeech: "adverb (~80%)", definition: "Happens most of the time, with occasional exceptions.", exampleSentence: "We usually eat dinner at home.", exampleSentenceZh: "我们通常在家吃晚餐。" },
        { word: "often", wordZh: "经常", partOfSpeech: "adverb (~60%)", definition: "Happens regularly, several times a week or month.", exampleSentence: "She often reads before bed.", exampleSentenceZh: "她经常在睡前阅读。" },
        { word: "sometimes", wordZh: "有时", partOfSpeech: "adverb (~30-50%)", definition: "Happens occasionally, not a regular pattern.", exampleSentence: "They sometimes travel abroad for holidays.", exampleSentenceZh: "他们有时出国度假。" },
        { word: "rarely", wordZh: "很少", partOfSpeech: "adverb (~5-10%)", definition: "Happens very infrequently, almost never.", exampleSentence: "He rarely watches TV after 10 PM.", exampleSentenceZh: "他很少在晚上10点后看电视。" },
        { word: "never", wordZh: "从不", partOfSpeech: "adverb (0%)", definition: "Happens not at all, under no circumstances.", exampleSentence: "I never skip breakfast on weekdays.", exampleSentenceZh: "工作日我从不跳过早餐。" },
        { word: "every week / day / month", wordZh: "每周/每天/每月", partOfSpeech: "phrase", definition: "Marks a regular time interval.", exampleSentence: "They go swimming every Sunday morning.", exampleSentenceZh: "他们每个星期天早上去游泳。" },
      ],
    },

    {
      id: "slide-13-present-simple-vs-continuous",
      slideNumber: 13,
      type: "COMPARISON",
      sectionTitle: "13. The Big Contrast",
      badge: "KEY CONTRAST",
      title: "Present Simple vs Present Continuous",
      titleZh: "一般现在时 vs 现在进行时",
      content:
        "This is the most important distinction in this unit. Present simple = habit/fact. Present continuous = happening NOW or temporary.",
      contentZh:
        "这是本单元最重要的区别。一般现在时=习惯/事实。现在进行时=此刻正在发生或临时状态。",
      comparisons: [
        {
          conceptA: "Present Simple (Habit)",
          conceptB: "Present Continuous (Now)",
          difference: "Simple: general habit or fact. Continuous: happening at this moment.",
          differenceZh: "一般：一般习惯或事实。进行：此刻正在发生。",
          exampleA: "I drink coffee every morning. (habit)",
          exampleB: "I am drinking coffee right now. (this moment)",
        },
        {
          conceptA: "I work in an office.",
          conceptB: "I am working in an office today.",
          difference: "Permanent situation vs temporary situation.",
          differenceZh: "永久状况 vs 临时状况。",
          exampleA: "Permanent: This is my regular workplace.",
          exampleB: "Temporary: I'm staying at my friend's office today (my usual office is closed).",
        },
        {
          conceptA: "She speaks fluent English.",
          conceptB: "She is speaking on the phone right now.",
          difference: "Ability vs action in progress.",
          differenceZh: "能力 vs 正在进行的动作。",
          exampleA: "General capability: She can communicate in English.",
          exampleB: "Specific action happening NOW: Listen, she's talking!",
        },
      ],
    },

    {
      id: "slide-14-timeline-diagram",
      slideNumber: 14,
      type: "VISUAL_DIAGRAM",
      sectionTitle: "14. Timeline",
      badge: "TIMELINE",
      title: "Present Simple on the Timeline",
      titleZh: "一般现在时时间线",
      content:
        "Present simple actions are habits that repeat across time. They are not pinned to one moment — they span the whole timeline.",
      contentZh:
        "一般现在时的动作是跨越时间反复发生的习惯。它们不固定在某一刻——它们贯穿整条时间线。",
      diagram: {
        type: "timeline",
        title: "Present Simple Timeline",
        titleZh: "一般现在时时间线",
        formula: "PAST ────●────●────●──── NOW ────●────●────●──── FUTURE",
        timeline: {
          past: "habit (repeated)",
          now: "habit (repeated)",
          future: "habit (repeated)",
          highlight: "span",
        },
      },
      keyPoints: [
        "●●●  = repeated, regular actions",
        "Not pinned to one moment — it spans time",
        "'Every day', 'always', 'usually' are the markers",
      ],
    },

    {
      id: "slide-15-chinese-difficulty",
      slideNumber: 15,
      type: "COMMON_MISTAKE",
      sectionTitle: "15. L1 Difficulty",
      badge: "CHINESE INTERFERENCE",
      title: "Chinese Learner Traps",
      titleZh: "中国学习者陷阱",
      content:
        "In Chinese, 我每天早上七点起床 uses the same verb form regardless of subject. But in English, third-person singular must change. Let's fix the top mistakes.",
      contentZh:
        "在中文中，'我每天早上七点起床'无论主语是什么，动词形式不变。但英语中，第三人称单数必须变化。让我们纠正最常见的错误。",
      mistakes: [
        {
          wrong: "She work at a hospital.",
          right: "She works at a hospital.",
          why: "Third-person singular 'She' requires -s on the verb.",
          explanation: "Always: He/She/It + verb + s: He works, She eats, It rains.",
          explanationZh: "永远：He/She/It + 动词 + s：He works, She eats, It rains。",
        },
        {
          wrong: "I don't know what am happen.",
          right: "I don't know what is happening.",
          why: "After 'don't know', the clause 'what is happening' needs continuous (happening right now).",
          explanation: "Mixed up simple and continuous. 'Happen' here = now, not habit.",
          explanationZh: "混淆了进行时和一般时。'Happen'这里是现在正在发生，不是习惯。",
        },
        {
          wrong: "Does she like to sing?",
          right: "Does she like singing?",
          why: "After 'like', the verb can be -ing form (gerund), not infinitive 'to sing' in this context.",
          explanation: "'Like doing' is more natural for habits: 'Does she like singing?'",
          explanationZh: "'like doing'在表达习惯时更自然：'Does she like singing?'",
        },
      ],
      audioText: "She works at a hospital. He goes to school. They don't watch TV at night.",
    },

    {
      id: "slide-16-scenario",
      slideNumber: 16,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "16. Real Life",
      badge: "SCENARIO",
      title: "At the Train Station",
      titleZh: "火车站场景",
      scenario: {
        context: "A traveler asks the information desk about train times.",
        contextZh: "旅客在信息台询问火车时刻。",
        dialogue: [
          { speaker: "Traveler", en: "When does the train to Beijing leave?", zh: "去北京的火车几点发车？", isTargetGrammar: true },
          { speaker: "Staff", en: "The 9:15 train departs from Platform 3.", zh: "9:15的火车从3号站台发车。", isTargetGrammar: true },
          { speaker: "Traveler", en: "Does it stop at Tianjin?", zh: "它停靠天津吗？", isTargetGrammar: true },
          { speaker: "Staff", en: "Yes, it stops at Tianjin at 11:02 AM.", zh: "是的，它上午11:02停靠天津。", isTargetGrammar: true },
          { speaker: "Traveler", en: "How long does the journey take?", zh: "这段旅程需要多长时间？", isTargetGrammar: true },
        ],
        task: "Listen for present simple used for scheduled/timetable events.",
        taskZh: "听出用于定时事件的一般现在时。",
      },
    },

    {
      id: "slide-17-drill-1",
      slideNumber: 17,
      type: "MINI_QUIZ",
      sectionTitle: "17. Very Easy (1-10)",
      badge: "LEVEL 1",
      title: "Identification Drill",
      titleZh: "识别练习",
      content: "Spot the present simple verb in each sentence.",
      question: {
        question: "Which word is the present simple verb in: 'She drinks coffee every morning.'?",
        questionZh: "在'她每天早上喝咖啡'中，哪个是现在进行时的动词？",
        options: ["she", "drinks", "every", "morning"],
        correctIndex: 1,
        explanation: "'Drinks' is the present simple verb (3rd person singular: drink + s).",
        explanationZh: "'Drinks'是现在简单时动词（第三人称单数：drink + s）。",
        xpReward: 10,
      },
    },

    {
      id: "slide-18-drill-2",
      slideNumber: 18,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Verb + -s Agreement",
      titleZh: "动词+-s一致性",
      content: "Choose the correct verb form.",
      question: {
        question: "She _____ in a small apartment downtown.",
        questionZh: "她住在市中心的一套小公寓里。",
        options: ["live", "lives", "living", "is live"],
        correctIndex: 1,
        explanation: "Third-person singular 'She' requires 'lives' (live + s).",
        explanationZh: "第三人称单数'She'需要'lives'（live + s）。",
        xpReward: 10,
      },
    },

    {
      id: "slide-19-drill-3",
      slideNumber: 19,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Question Formation",
      titleZh: "疑问句构成",
      content: "Choose the correct question form.",
      question: {
        question: "_____ you usually drink tea or coffee?",
        questionZh: "你通常喝茶还是咖啡？",
        options: ["Do", "Does", "Are", "Is"],
        correctIndex: 0,
        explanation: "'You' is plural → use 'Do'.",
        explanationZh: "'You'是复数 → 用'Do'。",
        xpReward: 10,
      },
    },

    {
      id: "slide-20-drill-4",
      slideNumber: 20,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Negative Form",
      titleZh: "否定形式",
      content: "Choose the correct negative.",
      question: {
        question: "I _____ eat meat on Mondays.",
        questionZh: "我周一不吃肉。",
        options: ["don't", "doesn't", "am not", "do not eating"],
        correctIndex: 0,
        explanation: "'I' → don't + base verb (eat).",
        explanationZh: "'I' → don't + 原形动词（eat）。",
        xpReward: 10,
      },
    },

    {
      id: "slide-21-drill-5",
      slideNumber: 21,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Habit vs Now",
      titleZh: "习惯 vs 现在",
      content: "Choose the tense that fits the meaning.",
      question: {
        question: "This is something I do every single day: I _____ up at 6 AM.",
        questionZh: "这是我每天做的事情：我6点起床。",
        options: ["am waking", "wake", "have woken", "was waking"],
        correctIndex: 1,
        explanation: "'Every single day' signals a habit → present simple 'wake'.",
        explanationZh: "'每天'表明习惯 → 一般现在时 'wake'。",
        xpReward: 10,
      },
    },

    {
      id: "slide-22-drill-6",
      slideNumber: 22,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Timetable Signal",
      titleZh: "时刻表信号",
      content: "What tense is natural for scheduled events?",
      question: {
        question: "The meeting _____ at 10 AM tomorrow.",
        questionZh: "会议明天上午10点开始。",
        options: ["starts", "is starting", "will start", "started"],
        correctIndex: 0,
        explanation: "Fixed schedule/timetable → present simple 'starts' is natural (even for tomorrow).",
        explanationZh: "固定时刻表 → 一般现在时'starts'很自然（即使是明天）。",
        xpReward: 10,
      },
    },

    {
      id: "slide-23-drill-7",
      slideNumber: 23,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Fact Signal",
      titleZh: "事实信号",
      content: "Choose the tense for a scientific fact.",
      question: {
        question: "Water _____ at 100 degrees Celsius.",
        questionZh: "水在100摄氏度沸腾。",
        options: ["boils", "is boiling", "has boiled", "boiled"],
        correctIndex: 0,
        explanation: "Scientific fact → present simple 'boils'.",
        explanationZh: "科学事实 → 一般现在时 'boils'。",
        xpReward: 10,
      },
    },

    {
      id: "slide-24-drill-8",
      slideNumber: 24,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Easy Review",
      titleZh: "简单复习",
      content: "Quick check on form and usage.",
      question: {
        question: "Which sentence correctly uses present simple?",
        questionZh: "以下哪个句子正确使用一般现在时？",
        options: [
          "She is drink coffee every morning.",
          "She drinks coffee every morning.",
          "She drinked coffee every morning.",
          "She drinking coffee every morning.",
        ],
        correctIndex: 1,
        explanation: "'She drinks' = correct present simple for a habit.",
        explanationZh: "'She drinks' = 表达习惯的正确一般现在时。",
        xpReward: 10,
      },
    },

    {
      id: "slide-25-drill-9",
      slideNumber: 25,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Frequency Adverb",
      titleZh: "频率副词",
      content: "Place the adverb correctly.",
      question: {
        question: "I _____ check my email at 7 AM.",
        questionZh: "我每天早上7点查邮箱。",
        options: ["am always", "always am", "always", "is always"],
        correctIndex: 2,
        explanation: "'Always' is placed before the main verb: I always check.",
        explanationZh: "'Always'放在主要动词前：I always check。",
        xpReward: 10,
      },
    },

    {
      id: "slide-26-drill-10",
      slideNumber: 26,
      type: "MINI_QUIZ",
      sectionTitle: "_placeholder",
      badge: "LEVEL 1",
      title: "Very Easy Review",
      titleZh: "极简单复习",
      content: "Final level-1 check.",
      question: {
        question: "My sister _____ piano on Saturdays.",
        questionZh: "我妹妹周六弹钢琴。",
        options: ["play", "plays", "playing", "is play"],
        correctIndex: 1,
        explanation: "Third-person singular 'My sister' → 'plays'.",
        explanationZh: "第三人称单数'My sister' → 'plays'。",
        xpReward: 10,
      },
    },

    {
      id: "slide-27-conversation",
      slideNumber: 27,
      type: "CONVERSATION",
      sectionTitle: "27. Speaking",
      badge: "CONVERSATION",
      title: "Morning Routine Dialogue",
      titleZh: "晨间作息对话",
      scenario: {
        context: "Two colleagues discuss their morning routines in the break room.",
        contextZh: "两位同事在休息区讨论他们的晨间作息。",
        dialogue: [
          { speaker: "Sarah", en: "What time do you usually wake up?", zh: "你通常几点起床？", isTargetGrammar: true },
          { speaker: "David", en: "I always wake up at 6:15 AM. I never skip breakfast.", zh: "我6:15总是起床。我从不跳过早餐。", isTargetGrammar: true },
          { speaker: "Sarah", en: "Do you drink coffee or tea first?", zh: "你先喝咖啡还是茶？", isTargetGrammar: true },
          { speaker: "David", en: "I usually drink two cups of black coffee. My wife drinks green tea.", zh: "我通常喝两杯黑咖啡。我妻子喝绿茶。", isTargetGrammar: true },
          { speaker: "Sarah", en: "What time does the subway leave from your station?", zh: "地铁几点从你的站发车？", isTargetGrammar: true },
          { speaker: "David", en: "The 7:30 train arrives at 8:12. I work at 9, so I have time.", zh: "7:30的火车8:12到达。我9点上班，所以我有时间。", isTargetGrammar: true },
        ],
        task: "Notice how present simple marks habits (always, never, usually) and schedules (the 7:30 train arrives).",
        taskZh: "注意一般现在时如何标记习惯（always, never, usually）和时间表（7:30的火车到达）。",
      },
    },

    {
      id: "slide-28-pte",
      slideNumber: 28,
      type: "EXPLANATION",
      sectionTitle: "28. PTE Exam",
      badge: "PTE ACADEMIC",
      title: "PTE Academic: Present Simple in Listening & Writing",
      titleZh: "PTE考试：听力和写作中的现在一般时",
      content:
        "In PTE Academic, present simple appears in Reading (fill blanks), Listening (repeat sentence), and Writing (summarize). Errors in -s/-es cost you points.",
      contentZh:
        "在PTE学术考试中，一般现在时出现在阅读（填空）、听力（复述句子）和写作（摘要）中。-s/-es的拼写错误会扣你的分数。",
      keyPoints: [
        "Listen for present simple facts: 'The study found that 80% of participants...' (present simple in research context)",
        "Write: 'Researchers often use surveys to gather data.' (habit/fact in academic writing)",
        "Repeat sentence: 'He usually arrives at the lab before 8 AM.' (present simple)",
      ],
    },

    {
      id: "slide-29-academic",
      slideNumber: 29,
      type: "EXAMPLE",
      sectionTitle: "29. Academic",
      badge: "ACADEMIC ENGLISH",
      title: "Academic & Professional Uses",
      titleZh: "学术与职业用法",
      content:
        "In academic English, present simple is used for established facts, methodologies, and general claims.",
      contentZh:
        "在学术英语中，一般现在时用于已确立的事实、方法论和一般性声明。",
      examples: [
        { en: "The experiment demonstrates that temperature affects reaction speed.", zh: "实验表明温度影响反应速度。", highlight: "demonstrates", explanation: "Present simple for established scientific result — a general truth." },
        { en: "Researchers typically control variables to isolate effects.", zh: "研究者通常控制变量以分离效果。", highlight: "control", explanation: "'Typically' marks a general methodological practice." },
        { en: "This paper argues that the current model has limitations.", zh: "本文认为当前模型存在局限性。", highlight: "argues", explanation: "Present simple for what the paper does/claims (standard academic convention)." },
      ],
    },

    {
      id: "slide-30-speaking",
      slideNumber: 30,
      type: "SPEAKING_DRILL",
      sectionTitle: "30. Speaking Drill",
      badge: "SPEAKING PRACTICE",
      title: "Daily Routine Speaking Challenge",
      titleZh: "日常作息口语挑战",
      content: "Describe your weekday routine using present simple with at least 4 time markers.",
      contentZh: "使用一般现在时和至少4个时间标志词描述你的工作日作息。",
      speakingDrill: {
        prompt: "Describe what you do every weekday from waking up to arriving at work. Use at least 4 frequency adverbs (always, usually, often, sometimes, rarely, never).",
        targetSentence: "I usually wake up at 7 AM. I always check my phone right after. I often drink green tea. I never watch TV in the morning. I go to work at 8:30 by subway.",
        targetSentenceZh: "我通常7点起床。我醒来后总是查看手机。我经常喝绿茶。我早上从不看电视。我8:30坐地铁上班。",
        tips: "Pick your real habits! Use 'usually/often' for habits that aren't 100% consistent. Use 'always' for ironclad habits.",
      },
    },

    {
      id: "slide-31-challenge",
      slideNumber: 31,
      type: "CHALLENGE",
      sectionTitle: "31. Challenge",
      badge: "CHALLENGE",
      title: "Final Challenge: Real-Life Application",
      titleZh: "终极挑战：实际应用",
      content:
        "You are asked at a job interview: 'Describe your typical workday and your team's routine.' Use present simple throughout. Bonus: include at least one scheduled event.",
      contentZh:
        "面试官问你：'描述你典型的工作日和团队例行公事。'全程使用一般现在时。加分：至少包含一个定时事件。",
      question: {
        question: "Which of the following best describes a workday in present simple?",
        questionZh: "以下哪个选项最好地用一般现在时描述了一个工作日？",
        options: [
          "I am working on the project from 9 to 5. The team is meeting at 10.",
          "I work on the project from 9 to 5. The team meets at 10. The lunch break is from 12 to 1.",
          "I worked on the project yesterday. The team met at 10. The lunch break was from 12 to 1.",
          "I will work on the project tomorrow. The team will meet at 10. The lunch break will be from 12 to 1.",
        ],
        correctIndex: 1,
        explanation: "Option 2 uses present simple throughout for the typical/described routine: work, meets, is. Option 1 is continuous (now). Options 3 and 4 are past/future.",
        explanationZh: "选项2对描述的典型/例行作息全程使用一般现在时：work, meets, is。选项1是进行时（现在）。选项3和4分别是过去/将来时。",
        xpReward: 20,
      },
    },
  ],
};













