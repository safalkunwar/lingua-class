import { GrammarLesson } from "@/types/grammar";

export const zeroArticleLesson: GrammarLesson = {
  id: "zero-article-foundation",
  subcategoryId: "zero-article",
  categoryId: "nouns-articles",
  title: "Zero Article Rules",
  titleZh: "零冠词用法",
  subtitle: "When NOT to use any article",
  level: "B1",
  estimatedMinutes: 35,
  lessonIndex: 1,
  totalLessonsInSubcategory: 8,
  description: "Learn when NOT to use any article — plurals in general, proper nouns, and fixed expressions.",
  descriptionZh: "学习何时不用冠词——复数泛指、专有名词和固定表达。",
  objectives: [
    "use zero article with plural general statements",
    "use zero article with proper nouns",
    "use zero article with uncountable nouns in general",
    "use zero article with meals, times, and fixed expressions",
    "avoid adding articles where they're not needed",
    "distinguish between general and specific references",
    "understand when zero article changes meaning",
  ],
  teacherGuide: {
    teachingObjective:
      "Students will learn that English often uses no article (zero article) for general statements, proper nouns, and certain fixed expressions. This contrasts with Chinese where measure words or context often indicate generality.",
    whatToExplain: [
      "Plural general: Cats like milk. (not 'The cats') - talking about cats in general",
      "Uncountable general: Water is essential. (not 'The water') - water in general",
      "Proper nouns: I live in Beijing. (not 'the Beijing') - names of people/places",
      "Meals: We have breakfast at 8. (not 'the breakfast')",
      "Times: She goes to school at 8. (not 'the school')",
      "Fixed expressions: at night, in prison, go to bed, by car",
      "Difference: I like the milk (specific milk) vs I like milk (milk in general)",
    ],
    questionsToAsk: [
      "Should it be 'Cats like milk' or 'The cats like milk'?",
      "Is it 'I go to school' or 'I go to the school'?",
      "What about 'I like the water' vs 'I like water'?",
      "Do we say 'at night' or 'at the night'?",
    ],
    commonConfusion: [
      "Adding 'the' to general plurals: 'The cats like milk' when meaning cats in general",
      "Adding 'the' to proper nouns: 'the Beijing'",
      "Adding 'the' to meals: 'the breakfast'",
      "Confusing general vs specific: 'I like water' (general) vs 'I like the water' (specific glass/bottle)",
      "Adding articles to fixed expressions: 'in the night' instead of 'at night'",
    ],
    timingSchedule: [
      { phase: "Review: Articles so far", duration: "0–5 min", activity: "Quick review: a/an vs the vs no article" },
      { phase: "Plural General Statements", duration: "5–12 min", activity: "Cats like milk, Dogs bark, Birds fly" },
      { phase: "Uncountable General Statements", duration: "12–18 min", activity: "Water is essential, Information is power" },
      { phase: "Proper Nouns", duration: "18–22 min", activity: "I live in Beijing, She works at Microsoft" },
      { phase: "Meals and Times", duration: "22–26 min", activity: "We have breakfast at 8, She goes to school at 7" },
      { phase: "Fixed Expressions", duration: "26–30 min", activity: "at night, in prison, by car, go to bed" },
      { phase: "Mixed Practice", duration: "30–35 min", activity: "Students identify when to use zero article in 10 sentences" },
    ],
  },
  homework: {
    title: "Zero Article Homework",
    titleZh: "零冠词作业",
    tasks: [
      {
        type: "writing",
        instruction: "Write 15 sentences using zero article correctly: 5 with plural general, 5 with uncountable general, 5 with proper nouns/meals/time expressions.",
        instructionZh: "写15个句子，正确使用零冠词：5个复数泛指，5个不可数泛指，5个专有名词/餐食/时间表达。",
        sampleAnswer: "Cats like milk. Water is essential. I live in Beijing. We have breakfast at 8. She goes to school at 7. Dogs bark at night. Information is power. Gold is expensive. Tokyo is big. We sleep at night.",
      },
      {
        type: "speaking",
        instruction: "Record 45 seconds describing your daily routine. Use zero article correctly for meals, times, and general statements.",
        instructionZh: "录制45秒描述你的日常作息。正确使用零冠词来指餐食、时间和一般陈述。",
        sampleAnswer: "I wake up at 7. I have breakfast at 8. I go to work at 9. I have lunch at 12. I go home at 6. I have dinner at 7. I go to bed at 11.",
      },
    ],
  },
  slides: [
    {
      id: "slide-1-welcome",
      slideNumber: 1,
      type: "TITLE",
      sectionTitle: "1. Welcome",
      title: "Zero Article Rules",
      titleZh: "零冠词用法",
      content:
        "Sometimes in English, we use NO article at all! This is called the 'zero article'. We use it for general statements, proper nouns, meals, times, and certain fixed expressions.",
      contentZh:
        "有时候在英语中，我们根本不使用任何冠词！这被称为'零冠词'。我们用它来表示一般陈述、专有名词、餐食、时间和某些固定表达。",
      keyPoints: [
        "Plural general: Cats like milk. (no article)",
        "Uncountable general: Water is essential. (no article)",
        "Proper nouns: I live in Beijing. (no article)",
        "Fixed expressions: at night, in prison, by car",
      ],
    },
    {
      id: "slide-2-plural-general",
      slideNumber: 2,
      type: "RULE",
      sectionTitle: "2. Plural General Statements",
      title: "Talking About Things in General",
      titleZh: "谈论事物一般情况",
      content:
        "Use zero article with plural nouns when making general statements:\n\n  Cats like milk.\n  Dogs bark at strangers.\n  Birds fly in the sky.\n  Fish live in water.\n\n  NOT: The cats like milk. (this means specific cats)\n  NOT: The dogs bark at strangers. (specific dogs)",
      contentZh:
        "谈论一般情况时，复数名词前不加冠词：\n\n  Cats like milk。（猫喜欢牛奶）\n  Dogs bark at strangers。（狗对陌生人叫）\n  Birds fly in the sky。（鸟在天空中飞）\n  Fish live in water。（鱼生活在水里）\n\n  不对：The cats like milk。（特定的猫喜欢牛奶）\n  不对：The dogs bark at strangers。（特定的狗对陌生人叫）",
      keyPoints: ["Plural noun + no article = general statement", "The + plural = specific group"],
    },
    {
      id: "slide-3-uncountable-general",
      slideNumber: 3,
      type: "RULE",
      sectionTitle: "3. Uncountable General Statements",
      title: "Talking About Things in General",
      titleZh: "谈论事物一般情况",
      content:
        "Use zero article with uncountable nouns when making general statements:\n\n  Water is essential for life.\n  Information is power in the modern world.\n  Gold is expensive.\n  Rice is a staple food in many countries.\n\n  NOT: The water is essential. (specific water, like in this bottle)\n  NOT: The information is power. (specific information)",
      contentZh:
        "谈论一般情况时，不可数名词前不加冠词：\n\n  Water is essential for life.（水对生命至关重要）\n  Information is power in the modern world.（信息就是力量）\n  Gold is expensive.（黄金很贵）\n  Rice is a staple food in many countries。（米是许多国家的主食）\n\n  不对：The water is essential.（特定的水，比如这瓶水）\n  不对：The information is power.（特定的信息）",
      keyPoints: ["Uncountable noun + no article = general statement", "The + uncountable = specific amount/instance"],
    },
    {
      id: "slide-4-proper-nouns",
      slideNumber: 4,
      type: "RULE",
      sectionTitle: "4. Proper Nouns",
      title: "Names of People and Places",
      titleZh: "人名和地名",
      content:
        "Use zero article with proper nouns (names):\n\n  I live in Beijing.\n  She works at Microsoft.\n  He visited Japan last year.\n  They study at Harvard University.\n\n  NOT: I live in the Beijing. (Beijing is a proper noun)\n  NOT: She works at the Microsoft. (Microsoft is a proper noun)\n\n  Exception: Some countries need 'the': the United States, the Philippines, the Netherlands",
      contentZh:
        "专有名词（人名、地名）前不加冠词：\n\n  I live in Beijing.（我住在北京）\n  She works at Microsoft.（她在微软工作）\n  He visited Japan last year.（他去年去了日本）\n  They study at Harvard University.（他们在哈佛大学学习）\n\n  错误：I live in the Beijing.（北京是专有名词）\n  错误：She works at the Microsoft.（微软是专有名词）\n\n  例外：有些国家需要'the'：the United States, the Philippines, the Netherlands",
    },
    {
      id: "slide-5-meals",
      slideNumber: 5,
      type: "RULE",
      sectionTitle: "5. Meals",
      title: "Breakfast, Lunch, Dinner",
      titleZh: "早餐、午餐、晚餐",
      content:
        "Use zero article with meals:\n\n  We have breakfast at 8.\n  She eats lunch at noon.\n  They have dinner at 7.\n  What did you have for breakfast?\n\n  NOT: We have the breakfast at 8.\n  NOT: She eats the lunch at noon.\n  NOT: They have the dinner at 7.\n\n  BUT: The breakfast was delicious. (specific breakfast you just ate)",
      contentZh:
        "餐食前不加冠词：\n\n  We have breakfast at 8.（我们8点吃早餐）\n  She eats lunch at noon.（她中午吃午餐）\n  They have dinner at 7.（他们7点吃晚餐）\n  What did you have for breakfast?（你早餐吃了什么？）\n\n  错误：We have the breakfast at 8.\n  错误：She eats the lunch at noon.\n  错误：They have the dinner at 7.\n\n  但是：The breakfast was delicious.（特定的早餐很美味，刚吃完的）",
    },
    {
      id: "slide-6-times",
      slideNumber: 6,
      type: "RULE",
      sectionTitle: "6. Times and Schedule",
      title: "School, Work, Bed, Home",
      titleZh: "学校、工作、床、家",
      content:
        "Use zero article with these time/schedule words:\n\n  She goes to school at 8.\n  He goes to work at 9.\n  They go to bed at 11.\n  We arrived home at 6.\n\n  NOT: She goes to the school at 8.\n  NOT: He goes to the work at 9.\n  NOT: They go to the bed at 11.\n  NOT: We arrived at the home at 6.\n\n  BUT: The school is big. (specific school building)\n  BUT: I went to the hospital. (specific visit)",
      contentZh:
        "时间/安排词前不加冠词：\n\n  She goes to school at 8.（她8点上学）\n  He goes to work at 9.（她9点上班）\n  They go to bed at 11.（他们11点睡觉）\n  We arrived home at 6.（我们6点到家）\n\n  错误：She goes to the school at 8.\n  错误：He goes to the work at 9.\n  错误：They go to the bed at 11.\n  错误：We arrived at the home at 6.\n\n  但是：The school is big.（特定的学校建筑很大）\n  但是：I went to the hospital.（特定的医院就诊）",
    },
    {
      id: "slide-7-fixed-expressions",
      slideNumber: 7,
      type: "RULE",
      sectionTitle: "7. Fixed Expressions",
      title: "Common Phrases Without Articles",
      titleZh: "常见固定短语",
      content:
        "These common expressions use zero article:\n\n  at night, in the day\n  in prison, in hospital, in school\n  by car, by train, by plane, by boat\n  go to bed, go to sea\n  in love, in war, in peace\n  day and night, rain or shine\n\n  NOT: at the night\n  NOT: in the prison\n  NOT: by the car\n  NOT: go to the bed",
      contentZh:
        "这些常见表达使用零冠词：\n\n  at night, in the day\n  in prison, in hospital, in school\n  by car, by train, by plane, by boat\n  go to bed, go to sea\n  in love, in war, in peace\n  day and night, rain or shine\n\n  错误：at the night\n  错误：in the prison\n  错误：by the car\n  错误：go to the bed",
    },
    {
      id: "slide-8-common-mistake",
      slideNumber: 8,
      type: "COMMON_MISTAKE",
      sectionTitle: "8. Common Mistakes",
      title: "Top 5 Errors with Zero Article",
      titleZh: "零冠词的5个最常见错误",
      mistakes: [
        {
          wrong: "The cats like milk.",
          right: "Cats like milk.",
          explanation: "For general statements about cats, use zero article.",
          explanationZh: "对于关于猫的一般陈述，使用零冠词。",
          why: "Students overgeneralize 'the' from specific to general.",
        },
        {
          wrong: "The water is essential.",
          right: "Water is essential.",
          explanation: "For water in general, use zero article.",
          explanationZh: "对于水的一般情况，使用零冠词。",
          why: "Students treat all uncountable nouns as needing 'the'.",
        },
        {
          wrong: "I live in the Beijing.",
          right: "I live in Beijing.",
          explanation: "Beijing is a proper noun - no article needed.",
          explanationZh: "北京是专有名词 - 不需要冠词。",
          why: "Students add 'the' to all nouns.",
        },
        {
          wrong: "We have the breakfast at 8.",
          right: "We have breakfast at 8.",
          explanation: "Meals in general use zero article.",
          explanationZh: "一般餐食使用零冠词。",
          why: "Students confuse general meals with specific meals.",
        },
        {
          wrong: "She goes to the school at 8.",
          right: "She goes to school at 8.",
          explanation: "School as a general concept uses zero article.",
          explanationZh: "学校作为一般概念使用零冠词。",
          why: "Students don't distinguish between general concept and specific building.",
        },
      ],
    },
    {
      id: "slide-9-real-life",
      slideNumber: 9,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "9. Real Life Scenario",
      title: "Daily Routine",
      titleZh: "日常作息",
      scenario: {
        context: "Someone describes their typical weekday routine.",
        contextZh: "有人描述他们典型的工作日作息。",
        dialogue: [
          {
            speaker: "Person",
            en: "I wake up at 7 and have breakfast at 8.",
            zh: "我7点起床，8点吃早餐。",
            isTargetGrammar: true,
          },
          {
            speaker: "Person",
            en: "I go to work at 9 and have lunch at 12.",
            zh: "我9点上班，12点吃午餐。",
            isTargetGrammar: true,
          },
          {
            speaker: "Person",
            en: "I go home at 6 and have dinner at 7.",
            zh: "我6点回家，7点吃晚餐。",
            isTargetGrammar: true,
          },
          {
            speaker: "Person",
            en: "I go to bed at 11.",
            zh: "我11点睡觉。",
            isTargetGrammar: true,
          },
        ],
        task: "Notice: wake up at 7, have breakfast at 8, go to work at 9, have lunch at 12, go home at 6, have dinner at 7, go to bed at 11 - all use zero article.",
        taskZh: "注意：wake up at 7，have breakfast at 8，go to work at 9，have lunch at 12，go home at 6，have dinner at 7，go to bed at 11——全部使用零冠词。",
      },
    },
    {
      id: "slide-10-conversation",
      slideNumber: 10,
      type: "CONVERSATION",
      sectionTitle: "10. Pattern Practice",
      title: "Talking About Habits",
      titleZh: "谈论习惯",
      scenario: {
        context: "Pattern: Use zero article with meals, times, and general statements.",
        contextZh: "模式：用零冠词指餐食、时间和一般陈述。",
        dialogue: [
          { speaker: "A", en: "What time do you usually have breakfast?", zh: "你通常几点吃早餐？", isTargetGrammar: true },
          { speaker: "B", en: "I usually have breakfast at 8.", zh: "我通常8点吃早餐。", isTargetGrammar: true },
          { speaker: "A", en: "Do you go to school every day?", zh: "你每天上学吗？", isTargetGrammar: true },
          { speaker: "B", en: "Yes, I go to school at 9.", zh: "是的，我9点上学。", isTargetGrammar: true },
          { speaker: "A", en: "What do you do after school?", zh: "放学后你做什么？", isTargetGrammar: true },
          { speaker: "B", en: "I go home and have dinner with my family.", zh: "我回家，和家人一起吃晚餐。", isTargetGrammar: true },
        ],
        task: "Practice: Use zero article with times (at 8, at 9) and meals (breakfast, lunch, dinner).",
        taskZh: "练习：用零冠词指时间（at 8, at 9）和餐食（breakfast, lunch, dinner）。",
      },
    },
    {
      id: "slide-11-pte",
      slideNumber: 11,
      type: "EXPLANATION",
      sectionTitle: "11. PTE Relevance",
      title: "Zero Article in PTE Tests",
      titleZh: "PTE测试中的零冠词",
      content:
        "PTE tests zero article usage:\n\n**READING**: Fill in the blank.\n  '___ cats like milk.' (No article)\n  '___ water is essential.' (No article)\n  'I live in ___ Beijing.' (No article)\n\n**WRITING**: Dictation.\n  'We have ___ breakfast at 8.' → 'We have breakfast at 8.'\n\n**LISTENING**: Choose correct article/no article.\n  'She goes to ___ school at 9.' (no article)\n\n**SPEAKING**: Describe routines and general truths.\n  'I usually have ___ breakfast at ___ 8.' → 'I usually have breakfast at 8.'",
      contentZh:
        "PTE测试零冠词用法：\n\n**阅读**：填空。\n  '___ cats like milk.'（零冠词）\n  '___ water is essential.'（零冠词）\n  'I live in ___ Beijing.'（零冠词）\n\n**写作**：听写。\n  'We have ___ breakfast at 8.' → 'We have breakfast at 8.'\n\n**听力**：选择正确冠词/零冠词。\n  'She goes to ___ school at 9.'（零冠词）\n\n**口语**：描述作息和一般真理。\n  'I usually have ___ breakfast at ___ 8.' → 'I usually have breakfast at 8.'",
    },
    {
      id: "slide-12-drills",
      slideNumber: 12,
      type: "EXPLANATION",
      sectionTitle: "12. Drills",
      title: "Practice Sets",
      titleZh: "练习题",
      content:
        "**Set 1: Choose correct article/no article**\n\n1. ___ cats like milk.\n2. ___ water is essential.\n3. I live in ___ Beijing.\n4. We have ___ breakfast at 8.\n5. She goes to ___ school at 9.\n\n**Set 2: Fix the mistakes**\n\n1. The cats like milk. → Cats like milk.\n2. The water is essential. → Water is essential.\n3. I live in the Beijing. → I live in Beijing.\n4. We have the breakfast at 8. → We have breakfast at 8.\n5. She goes to the school at 9. → She goes to school at 9.",
      contentZh:
        "**练习1：选择正确的冠词/零冠词**\n\n1. ___ cats like milk.\n2. ___ water is essential.\n3. I live in ___ Beijing.\n4. We have ___ breakfast at 8.\n5. She goes to ___ school at 9.\n\n**练习2：纠正错误**\n\n1. The cats like milk. → Cats like milk.\n2. The water is essential. → Water is essential.\n3. I live in the Beijing. → I live in Beijing.\n4. We have the breakfast at 8. → We have breakfast at 8.\n5. She goes to the school at 9. → She goes to school at 9.",
    },
    {
      id: "slide-13-speaking",
      slideNumber: 13,
      type: "SPEAKING_DRILL",
      sectionTitle: "13. Speaking Practice",
      title: "Daily Routine",
      titleZh: "日常作息",
      speakingDrill: {
        prompt: "Describe your typical weekday routine in 45 seconds. Use zero article correctly for meals, times, and activities.",
        targetSentence:
          "I wake up at 7, have breakfast at 8, go to work at 9, have lunch at 12, go home at 6, have dinner at 7, and go to bed at 11.",
        targetSentenceZh: "我7点起床，8点吃早餐，9点上班，12点吃午餐，6点回家，7点吃晚餐，11点睡觉。",
        tips: "Use zero article with times (at 7, at 8, etc.) and meals (breakfast, lunch, dinner). No article with go to work, go home, go to bed.",
      },
    },
    {
      id: "slide-14-quiz",
      slideNumber: 14,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "14. Quick Quiz",
      title: "Choose the Correct Sentence",
      titleZh: "选择正确的句子",
      question: {
        question: "Cats like milk / The cats like milk",
        questionZh: "猫喜欢牛奶 / 那些猫喜欢牛奶",
        options: ["a. Cats like milk", "b. The cats like milk", "c. A cats like milk"],
        correctIndex: 0,
        explanation: "General plural nouns use zero article.",
        explanationZh: "一般复数名词用零冠词。",
        xpReward: 10,
      },
    },
    {
      id: "slide-15-challenge",
      slideNumber: 15,
      type: "CHALLENGE",
      sectionTitle: "15. Week Challenge",
      title: "25-Question Challenge",
      titleZh: "25题挑战",
      content:
        "Complete 25 questions to master zero article:\n\n**Part A: Choose correct usage (15 questions)**\n  '___ cats like milk', '___ water is essential', etc.\n\n**Part B: Fix the mistakes (10 questions)**\n  'The cats like milk' → _____\n  'I live in the Beijing' → _____\n\n**Scoring**: 1 point per correct answer. Need 80% to pass. Keep practicing!",
      contentZh:
        "完成25题来掌握零冠词：\n\n**A部分：选择正确用法（15题）**\n  '___ cats like milk'，'___ water is essential'，等。\n\n**B部分：纠正错误（10题）**\n  'The cats like milk' → _____\n  'I live in the Beijing' → _____\n\n**评分**：每题1分。需要80%才能通过。继续练习！",
    },
  ],
};