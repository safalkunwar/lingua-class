import { GrammarLesson } from "@/types/grammar";

export const intransitiveVerbsLesson: GrammarLesson = {
  id: "intransitive-verbs-no-object",
  subcategoryId: "intransitive-verbs",
  categoryId: "verbs",
  title: "Intransitive Verbs: No Objects Needed",
  titleZh: "不及物动词：不需要宾语",
  subtitle: "Identify verbs that complete their action without taking a direct object",
  level: "B1",
  estimatedMinutes: 50,
  lessonIndex: 6,
  totalLessonsInSubcategory: 6,
  description:
    "Master intransitive verbs that do NOT transfer action to a direct object. Learn to identify verbs like 'arrive', 'sleep', 'laugh' that are complete by themselves. Discover why 'He arrived' is perfectly fine, while 'He arrived the station' is wrong — and how to add prepositional phrases instead of objects.",
  descriptionZh:
    "掌握不需要直接宾语的不及物动词。学习识别'到达', '睡觉', '大笑'等不需要宾语就完整的动词。理解为什么'He arrived'完全正确而'He arrived the station'错误——以及如何用介词短语替代宾语。",
  objectives: [
    "identify intransitive verbs by confirming they don't take a direct object",
    "distinguish intransitive from transitive verbs",
    "use intransitive verbs in Subject + Verb sentences",
    "add prepositional phrases to intransitive verbs for detail (no direct object)",
    "understand why intransitive verbs stand alone as complete sentences",
  ],
  prerequisites: ["action-verbs-foundation", "helping-verbs-do-does-did", "transitive-verbs-objects"],
  teacherGuide: {
    teachingObjective:
      "Train learners to recognize that intransitive verbs are complete by themselves — they need NO direct object to make sense. Teach how to add adverbials (time, place, manner) with prepositions instead of objects.",
    whatToExplain: [
      "Intransitive verbs finish their action without transferring it to anything: 'She arrived.'",
      "Add detail with prepositional phrases: 'She arrived at the station.' (NOT 'She arrived the station')",
      "Test: If you can't ask 'What?' after the verb and get a noun answer, it's intransitive.",
      "Many verbs can be both: 'He runs' (intr.) vs 'He runs a business' (trans.).",
    ],
    questionsToAsk: [
      "Why is 'She arrived' complete but 'She arrived the station' is wrong?",
      "How do you add WHERE or WHEN information to an intransitive verb?",
      "Can you think of verbs that work both with and without objects?",
    ],
    commonConfusion: [
      "Trying to force a direct object after every verb (from L1 patterns)",
      "Confusing intransitive verbs with linking verbs",
      "Adding objects to verbs that don't take them: 'I slept my bed' (wrong)",
    ],
    extraExamples: [
      "The sun rose this morning.",
      "They laughed at the joke.",
      "We walked to the park.",
    ],
    timingSchedule: [
      { phase: "Warm-up & Recall", duration: "0–5 min", activity: "Recall transitive verbs: ask for examples of verbs that need objects." },
      { phase: "Introducing Intransitives", duration: "5–15 min", activity: "Explain that intransitive verbs are self-contained actions." },
      { phase: "The 'What?' Test Reverse", duration: "15–25 min", activity: "Teach: ask 'What?' after verb — if no noun answer, it's intransitive." },
      { phase: "Prepositional Phrases", duration: "25–35 min", activity: "Show how to add WHERE/WHEN with 'at', 'in', 'on', 'to' — NOT as objects." },
      { phase: "Real-Life Scenarios", duration: "35–50 min", activity: "Travel and daily routine stories with intransitive verbs." },
      { phase: "Wrap-up & Homework", duration: "50–60 min", activity: "Assign intransitive verb diary homework." },
    ],
  },
  homework: {
    title: "My Morning in Actions",
    titleZh: "我的早晨：动作记录",
    tasks: [
      {
        type: "writing",
        instruction: "Write 10 sentences describing your morning routine using only intransitive verbs. Add time, place, or manner phrases (but NO direct objects!).",
        instructionZh: "用不及物动词写10句描述你早晨的例行公事。可加时间、地点、方式短语（但绝不加直接宾语！）。",
        sampleAnswer: "I woke up at 7. I stretched in bed. I walked to the kitchen. I drank coffee. I left for work at 8:30.",
      },
      {
        type: "speaking",
        instruction: "Record a 1-minute description of how you get to work or school using only intransitive verbs (you can use prepositional phrases for route details).",
        instructionZh: "录制1分钟描述你上班/上学路线，仅用不及物动词（可用介词短语描述路线细节）。",
        sampleAnswer: "I leave home. I walk to the station. I take the train. I arrive at work.",
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
      title: "Intransitive Verbs: No Objects Needed",
      titleZh: "不及物动词：不需要宾语",
      content:
        "You just learned that transitive verbs NEED objects to be complete. But what about verbs that are perfectly happy all by themselves? Verbs like 'arrive', 'sleep', 'go', 'laugh'? These are intransitive verbs — they complete their action without passing it to anything or anyone. No object needed!",
      contentZh:
        "你刚学了及物动词需要宾语才完整。但有些动词自己就很满足？像'到达','睡觉','去','大笑'？这些是不及物动词——它们在不需要把动作传递给任何东西或人的情况下就完成动作了。不需要宾语！",
      keyPoints: [
        "Intransitive verbs are complete by themselves — no object needed",
        "Add detail with adverbials: where, when, how (but NOT direct objects)",
        "Many verbs can be both transitive and intransitive depending on use",
      ],
    },

    {
      id: "slide-2-transitive-vs-intransitive-review",
      slideNumber: 2,
      type: "COMPARISON",
      sectionTitle: "2. Quick Review: Transitive vs Intransitive",
      badge: "REFRESH",
      title: "Object Required vs Object Optional",
      titleZh: "需要宾语 vs 可选宾语",
      content:
        "Transitive verbs transfer action to an object (She read a book). Intransitive verbs keep the action to themselves (She read all night). One needs a receiver; the other does not.",
      contentZh:
        "及物动词把动作用到宾语上（She read a book）。不及物动词保留动作给自己（She read all night）。一个需要接受者；另一个不需要。",
      comparisons: [
        {
          conceptA: "Transitive Verb",
          conceptB: "Intransitive Verb",
          difference: "Transitive: action moves to an object. Intransitive: action stays with the subject.",
          differenceZh: "及物: 动作转移到宾语。不及物: 动作停留在主语。",
          exampleA: "She kicked the ball. (ball receives the kick)",
          exampleB: "She danced all night. (dancing is done by her alone)",
        },
        {
          conceptA: "He ate.",
          conceptB: "He ate lunch.",
          difference: "Transitive verbs feel INCOMPLETE without an object.",
          differenceZh: "及物动词没有宾语时感觉不完整。",
          exampleA: "He ate. (what did he eat? — feels incomplete)",
          exampleB: "He ate lunch. (complete — lunch is the object)",
        },
      ],
    },

    {
      id: "slide-3-intransitive-definition",
      slideNumber: 3,
      type: "EXPLANATION",
      sectionTitle: "3. What Makes a Verb Intransitive?",
      badge: "DEFINITION",
      title: "Self-Contained Actions",
      titleZh: "自洽动作",
      content:
        "An intransitive verb expresses a complete action or state WITHOUT transferring that action to a direct object. The subject does the verb, and that's it — nothing receives the action.",
      contentZh:
        "不及物动词表达一个完整的动作或状态，且不把该动作传递给直接宾语。主语执行该动词，就这样——没有任何事物接收该动作。",
      keyPoints: [
        "The action is contained within the subject: 'The baby cried.'",
        "Ask 'What?' after the verb — if there's no noun answer, it's intransitive.",
        "The verb doesn't need anything to 'complete' its meaning.",
      ],
      audioText: "The baby cried. The sun rose. They laughed. — All complete alone.",
    },

    {
      id: "slide-4-common-intransitive",
      slideNumber: 4,
      type: "VOCABULARY",
      sectionTitle: "4. Common Intransitive Verbs",
      badge: "ESSENTIAL VERBS",
      title: "The Big 10 Intransitive Freedom Verbs",
      titleZh: "十大自由不及物动词",
      content:
        "These verbs are happy flying solo. They don't need objects to feel complete. Add WHERE or WHEN with prepositions, but never a direct object!",
      contentZh:
        "这些动词独自飞翔很自在。它们不需要宾语就能完整。用介词添加WHERE或WHEN，但绝不加直接宾语！",
      vocabulary: [
        { word: "arrive", wordZh: "到达", definition: "To reach a destination.", exampleSentence: "We arrived at noon." },
        { word: "sleep", wordZh: "睡觉", definition: "To rest with eyes closed and reduced consciousness.", exampleSentence: "She sleeps eight hours." },
        { word: "go", wordZh: "去", definition: "To move from one place to another.", exampleSentence: "They go to school." },
        { word: "run", wordZh: "跑步", definition: "To move swiftly on foot.", exampleSentence: "He runs every morning." },
        { word: "laugh", wordZh: "笑", definition: "To express mirth or amusement.", exampleSentence: "They laughed at the joke." },
        { word: "fall", wordZh: "倒下", definition: "To drop or come down under the influence of gravity.", exampleSentence: "The leaves fall in autumn." },
        { word: "rise", wordZh: "升起", definition: "To move upward from a lower position.", exampleSentence: "The sun rises in the east." },
        { word: "come", wordZh: "来", definition: "To move toward the speaker or a specified place.", exampleSentence: "Please come here." },
        { word: "talk", wordZh: "说话", definition: "To communicate by speaking.", exampleSentence: "We talked for hours." },
        { word: "work", wordZh: "工作", definition: "To exert effort to do or make something.", exampleSentence: "I work at a hospital." },
      ],
    },

    {
      id: "slide-5-the-reverse-object-test",
      slideNumber: 5,
      type: "EXPLANATION",
      sectionTitle: "5. The Reverse 'What?' Test",
      badge: "HOW TO IDENTIFY",
      title: "If No Noun Answers 'What?', It's Intransitive",
      titleZh: "若'What?'无名词作答，即为不及物动词",
      content:
        "To test if a verb is intransitive, ask 'What?' after it in a sentence. If you cannot answer with a noun (thing or person), then no direct object exists — the verb is intransitive.",
      contentZh:
        "判断动词是否不及物的方法：在句子中动词后问'What?'。若无法用名词（人或物）回答，则无直接宾语存在——动词为不及物动词。",
      keyPoints: [
        "She laughed. What did she laugh? Nothing. → Intransitive",
        "They arrived. What did they arrive? Nothing. → Intransitive",
        "He runs. What does he run? Nothing (unless: 'He runs a business'). → Usually intransitive",
      ],
      audioText: "Ask 'What?' after the verb. If no noun answer, it's intransitive.",
    },

    {
      id: "slide-6-adding-detail",
      slideNumber: 6,
      type: "EXPLANATION",
      sectionTitle: "6. Adding Detail Without Objects",
      badge: "ADVERBIALS",
      title: "Prepositional Phrases, Not Objects",
      titleZh: "介词短语，而非宾语",
      content:
        "To add WHERE, WHEN, or HOW information to an intransitive verb, use prepositional phrases: 'at the station', 'in the morning', 'with joy'. These are NOT direct objects.",
      contentZh:
        "要为不及物动词添加WHERE、WHEN或HOW信息，使用介词短语：'在车站'、'早上'、'带着喜悦'。这些不是直接宾语。",
      keyPoints: [
        "Where: 'She arrived at the station.' (NOT 'She arrived the station')",
        "When: 'He sleeps during the day.' (NOT 'He sleeps the day')",
        "How: 'They walked slowly.' (adverb, not object) or 'They walked with purpose.' (prepositional phrase)",
      ],
    },

    {
      id: "slide-7-real-life-scenario",
      slideNumber: 7,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "7. At the Train Station",
      badge: "SCENARIO",
      title: "Catching a Train with Intransitive Verbs",
      titleZh: "在火车站：不及物动词赶车",
      scenario: {
        context: "A traveler is navigating the train station to catch their departure.",
        contextZh: "旅客正在火车站里导航以赶上他们的班次。",
        dialogue: [
          { speaker: "Traveler", en: "I arrived at the station early.", zh: "我早到了车站。", isTargetGrammar: true },
          { speaker: "Traveler", en: "I walked to platform 3.", zh: "我走到了3站台。", isTargetGrammar: true },
          { speaker: "Announcement", en: "The train to London has arrived.", zh: "去伦敦的列车已经到达。", isTargetGrammar: true },
          { speaker: "Traveler", en: "Now I need to wait for my connecting train.", zh: "现在我需要等我的联程列车。", isTargetGrammar: true },
          { speaker: "Traveler", en: "I sat on a bench and read a book.", zh: "我坐在长椅上读了一本书。", isTargetGrammar: true },
        ],
        task: "Listen for intransitive verbs that stand alone: arrived, walked, has arrived, need to wait, sat.",
        taskZh: "听出可独立使用的不及物动词：arrived, walked, has arrived, need to wait, sat。",
      },
    },

    {
      id: "slide-8-vocabulary",
      slideNumber: 8,
      type: "VOCABULARY",
      sectionTitle: "8. Travel Vocabulary",
      badge: "VOCABULARY",
      title: "Verbs for Getting Around",
      titleZh: "出行动词词汇",
      vocabulary: [
        { word: "arrive", wordZh: "到达", definition: "To reach a destination.", exampleSentence: "Our flight arrives at 3 PM." },
        { word: "depart", wordZh: "出发", definition: "To leave from a starting point.", exampleSentence: "The bus departs in ten minutes." },
        { word: "travel", wordZh: "旅行", definition: "To go from one place to another, typically over distance.", exampleSentence: "They travel by train." },
        { word: "walk", wordZh: "步行", definition: "To move at a regular pace by lifting and setting down each foot.", exampleSentence: "We walk to the café." },
      ],
    },

    {
      id: "slide-9-common-mistake-1",
      slideNumber: 9,
      type: "COMMON_MISTAKE",
      sectionTitle: "9. The Forced Object Error",
      badge: "L1 INTERFERENCE",
      title: "Never Force a Direct Object Where None Is Needed",
      titleZh: "禁止强行添加不需要的直接宾语",
      content:
        "Some languages allow or require objects after many verbs. In English, forcing an object after an intransitive verb creates nonsense. 'I slept my bed' means you actively slept the bed — which is impossible!",
      contentZh:
        "有些语言允许或要求在许多动词后加宾语。在英语中，强行在不及物动词后加宾语会造成错误。'I slept my bed' 意思是你主动把床睡了——这是不可能的！",
      mistakes: [
        {
          wrong: "I slept my bed all night.",
          right: "I slept in my bed all night. (OR: I slept all night.)",
          why: "'Slept' is intransitive — it does not take a direct object. Add a prepositional phrase for WHERE.",
          explanation: "Use a preposition: 'in my bed', 'on the couch', or no phrase at all.",
          explanationZh: "用介词短语：'in my bed'、'on the couch'，或完全不用短语。",
        },
        {
          wrong: "They arrived the station.",
          right: "They arrived at the station. (OR: They arrived.)",
          why: "'Arrived' is intransitive — it needs a preposition to show WHERE, not a direct object.",
          explanation: "Use 'at', 'in', or 'to' for location: 'arrived at the station'.",
          explanationZh: "用'in'、'at'或'to'表地点：'arrived at the station'。",
        },
      ],
      audioText: "I slept in my bed. They arrived at the station. He walked to work. — No forced objects!",
    },

    {
      id: "slide-10-common-mistake-2",
      slideNumber: 10,
      type: "COMMON_MISTAKE",
      sectionTitle: "10. Confusing Intransitive with Linking Verbs",
      badge: "VERB TYPE ERROR",
      title: "Is It An Action or a State? Intransitive vs Linking",
      titleZh: "它是动作还是状态？不及物 vs 系动词",
      content:
        "Both intransitive and linking verbs can stand alone, but they express different things. Intransitive = action. Linking = state/identity.",
      contentZh:
        "不及物动词和系动词都可以单独使用，但表达不同。不及物=动作。系动词=状态/身份。",
      mistakes: [
        {
          wrong: "She is sleeping.",
          right: "She is sleeping. (BOTH correct, but different meanings!)",
          why: "'Is sleeping' uses 'is' (linking) + 'sleeping' (present participle). This is the progressive tense, showing action in progress.",
          explanation: "Linking verb + -ing = progressive tense (action in progress). Pure linking: 'She is tired.' Pure intransitive: 'She slept.'",
          explanationZh: "系动词+ -ing = 进行时（动作进行中）。纯系动词：'She is tired.'。纯不及物：'She slept.'。",
        },
        {
          wrong: "He became a teacher last year.",
          right: "He became a teacher last year. (BOTH correct!)",
          why: "'Became' is a linking verb here (became + noun). But 'became' can also be intransitive in some contexts: 'The situation became worse'.",
          explanation: "Linking: became + adjective/noun. Intransitive: became + adverb (shows how the change happened).",
          explanationZh: "系动词：became + 形容词/名词。不及物：became + 副词（显示变化如何发生）。",
        },
      ],
      audioText: "She is sleeping (action in progress). She is tired (state). He became a teacher (linking). The weather became worse (intransitive with adverb).",
    },

    {
      id: "slide-11-comparison-slide",
      slideNumber: 11,
      type: "COMPARISON",
      sectionTitle: "11. Intransitive vs Transitive",
      badge: "KEY CONTRAST",
      title: "What? Test: See If an Object Exists",
      titleZh: "What?测试：检查是否存在宾语",
      content:
        "Use the 'What?' test to decide: if you get a noun answer, the verb is transitive. If you get nothing or only adverbs, it's intransitive.",
      contentZh:
        "使用'What?'测试来判断：若得到名词答案，动词是及物动词。若无答案或仅有副词，则为不及物动词。",
      comparisons: [
        {
          conceptA: "kick",
          conceptB: "sleep",
          difference: "Kick usually takes an object (transitive). Sleep does not (intransitive).",
          differenceZh: "Kick通常带宾语（及物）。Sleep不带宾语（不及物）。",
          exampleA: "He kicked the ball. (kick WHAT? → ball)",
          exampleB: "She slept. (sleep WHAT? → nothing)",
        },
        {
          conceptA: "arrive",
          conceptB: "build",
          difference: "Arrive never takes a direct object (intransitive). Build usually does (transitive).",
          differenceZh: "Arrive永不带直接宾语（不及物）。Build通常带（及物）。",
          exampleA: "They arrived. (arrive WHAT? → nothing)",
          exampleB: "He built a house. (build WHAT? → house)",
        },
      ],
    },

    {
      id: "slide-12-ambitransitive-note",
      slideNumber: 12,
      type: "EXPLANATION",
      sectionTitle: "12. Ambitransitive Verbs: Both Worlds",
      badge: "ADVANCED",
      title: "Some Verbs Can Be Either",
      titleZh: "有些动词既可及物也可不及物",
      content:
        "Many common verbs can be used both ways. Context and the presence of an object decide whether they're transitive or intransitive in that sentence.",
      contentZh:
        "许多常见动词可两种方式使用。上下文和是否有宾语决定它们在该句中是及物还是不及物。",
      keyPoints: [
        "Run: 'He runs.' (intransitive: action of running) vs 'He runs a business.' (transitive: object = business)",
        "Read: 'She reads.' (intransitive: habit) vs 'She reads novels.' (transitive: object = novels)",
        "Eat: 'I ate.' (intransitive: completed action) vs 'I ate lunch.' (transitive: object = lunch)",
        "Test: If you can ask 'What?' and get a noun, it's transitive in that use.",
      ],
    },

    {
      id: "slide-13-speaking-drill",
      slideNumber: 13,
      type: "SPEAKING_DRILL",
      sectionTitle: "13. Speaking Drill",
      badge: "SPEAKING PRACTICE",
      title: "Daily Routine Story: Only Intransitive Verbs",
      titleZh: "日常故事：仅用不及物动词",
      content: "Practice telling a story using only intransitive verbs (you can add WHERE/WHEN with prepositions).",
      contentZh: "练习仅用不及物动词讲故事（可用介词短语添加WHERE/WHEN）。",
      speakingDrill: {
        prompt: "Describe your journey from home to work/school using only intransitive verbs. Add time and place with prepositions if needed.",
        targetSentence: "I left home. I walked to the station. I took the train. I arrived at work.",
        targetSentenceZh: "我离开家。我走到车站。我坐火车。我到达公司。",
        tips: "Use: leave, walk, take, arrive, go, come, run, fall, rise, sleep, talk, work. Add prepositional phrases: at, in, on, to, during.",
      },
    },

    {
      id: "slide-14-quiz-1",
      slideNumber: 14,
      type: "MINI_QUIZ",
      sectionTitle: "14. Very Easy Questions (1-10)",
      badge: "LEVEL 1",
      title: "Spot the Intransitive Verb",
      titleZh: "找出不及物动词",
      question: {
        question: "In 'They arrived at noon', what is the intransitive verb?",
        questionZh: "在'They arrived at noon'中，什么是不及物动词？",
        options: ["they", "arrived", "at", "noon"],
        correctIndex: 1,
        explanation: "'Arrived' is intransitive — it does not take a direct object. 'At noon' is a prepositional phrase (when).",
        explanationZh: "'Arrived' 是不及物动词——它不带直接宾语。'At noon' 是介词短语（时间）。",
        xpReward: 10,
      },
    },
    // Additional questions will complete the 35-question requirement
    { id: "slide-15-quiz-2", slideNumber: 15, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Intransitive Test", content: "Use the What test in reverse.", question: { question: "'She laughed.' — What makes this intransitive?", options: ["Laughed", "She", "What test", "No object"], correctIndex: 3, explanation: "No direct object follows 'laughed' — it's intransitive.", xpReward: 10 } },
    { id: "slide-16-quiz-3", slideNumber: 16, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Prepositional Phrase", content: "Adding detail without objects.", question: { question: "How do you correctly add WHERE to 'He arrived'?", options: ["He arrived the station.", "He arrived at the station.", "He arrived station.", "He arrived to the station."], correctIndex: 1, explanation: "Use preposition 'at' for location: arrived at the station.", xpReward: 10 } },
    { id: "slide-17-quiz-4", slideNumber: 17, type: "MULTIPLE_CHOICE", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Sleeping Habits", content: "Intransitive verb in present simple.", question: { question: "Choose the correct sentence:", options: ["I sleep eight hours.", "I sleep my bed.", "I sleeping eight hours.", "I slept my bed."], correctIndex: 0, explanation: "'Sleep' is intransitive — no direct object needed. 'Eight hours' is an adverbial phrase (how long).", xpReward: 10 } },
    { id: "slide-18-quiz-5", slideNumber: 18, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Walking to School", content: "Intransitive verb with place phrase.", question: { question: "'They walked to the park.' — What tells us WHERE?", options: ["They", "walked", "to the park", "the park"], correctIndex: 2, explanation: "'To the park' is a prepositional phrase showing destination (WHERE).", xpReward: 10 } },
    { id: "slide-19-quiz-6", slideNumber: 19, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Laughter Context", content: "Intransitive verb in past tense.", question: { question: "Choose the correct past tense sentence:", options: ["They laughed the joke.", "They laughed at the joke.", "They laughing the joke.", "They did laugh."], correctIndex: 1, explanation: "Intransitive verb 'laughed' + prepositional phrase 'at the joke'.", xpReward: 10 } },
    { id: "slide-20-quiz-7", slideNumber: 20, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "No Forced Objects", content: "Never force objects after intransitive verbs.", question: { question: "Which sentence is WRONG?", options: ["I went home.", "I went to school.", "I went my friend.", "I went to the store."], correctIndex: 2, explanation: "'I went my friend' forces a direct object after the intransitive verb 'went'.", xpReward: 10 } },
    { id: "slide-21-quiz-8", slideNumber: 21, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Arrival Time", content: "Intransitive verb with time phrase.", question: { question: "Choose the correct sentence:", options: ["She arrived 8 AM.", "She arrived at 8 AM.", "She arrived in 8 AM.", "She arrived on 8 AM."], correctIndex: 1, explanation: "Use preposition 'at' for specific times: arrived at 8 AM.", xpReward: 10 } },
    { id: "slide-22-quiz-9", slideNumber: 22, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Work Habit", content: "Intransitive verb for routine.", question: { question: "Choose the correct sentence:", options: ["I work at a hospital.", "I work a hospital.", "I works at a hospital.", "I working at a hospital."], correctIndex: 0, explanation: "'Work' can be intransitive here — no direct object. 'At a hospital' is a prepositional phrase (WHERE).", xpReward: 10 } },
    { id: "slide-23-quiz-10", slideNumber: 23, type: "REVIEW", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Intransitive Summary", content: "Key takeaways from intransitive verbs lesson.", question: { question: "True or False: Intransitive verbs can never have any words after them.", options: ["True", "False"], correctIndex: 1, explanation: "Intransitive verbs can be followed by adverbials (prepositional phrases, adverbs) for time, place, manner — just NOT direct objects.", xpReward: 10 } },
  ],
};







