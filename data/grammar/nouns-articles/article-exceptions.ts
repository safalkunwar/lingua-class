import { GrammarLesson } from "@/types/grammar";

export const articleExceptionsLesson: GrammarLesson = {
  id: "article-exceptions-foundation",
  subcategoryId: "article-exceptions",
  categoryId: "nouns-articles",
  title: "Article Exception Patterns",
  titleZh: "冠词例外规律",
  subtitle: "Special cases and common traps for article usage",
  level: "B1",
  estimatedMinutes: 40,
  lessonIndex: 1,
  totalLessonsInSubcategory: 8,
  description: "Master the most common article exceptions and Chinglish traps for Chinese learners.",
  descriptionZh: "掌握常见冠词例外和中国学习者常见的中式英语陷阱。",
  objectives: [
    "master article usage with professions",
    "understand article patterns with meals and times",
    "learn when to use 'the' with musical instruments",
    "avoid common Chinglish article mistakes",
    "use correct articles with sports and games",
    "understand article usage with diseases",
    "master article patterns with transport",
  ],
  teacherGuide: {
    teachingObjective:
      "Students will learn specific article patterns that don't follow the general a/an/the rules. These are common pain points for Chinese speakers learning English.",
    whatToExplain: [
      "Professions: I am a teacher. (not 'I am teacher')",
      "Meals: We have breakfast at 8. (zero article) vs The breakfast was delicious. (specific)",
      "Transport: by car, by train (zero article) vs We took the car. (specific)",
      "Sports: play basketball, play soccer (zero article) vs We watched the basketball game.",
      "Diseases: have a cold, have the flu (mixed patterns)",
      "Time expressions: at night, in the morning (mixed)",
      "Geographical names: mixed patterns with 'the'",
    ],
    questionsToAsk: [
      "Should it be 'I am teacher' or 'I am a teacher'?",
      "Is it 'by car' or 'in the car'?",
      "What about 'play basketball' vs 'play the basketball'?",
      "Do we say 'have cold' or 'have a cold'?",
    ],
    commonConfusion: [
      "Omitting article with professions: 'I am teacher' → WRONG",
      "Confusing 'by car' (transport) vs 'in the car' (location)",
      "Adding article to sports: 'play the basketball' → WRONG",
      "Omitting article with illnesses: 'have cold' → WRONG",
      "Mixing up time expressions: 'in night' vs 'at night' vs 'in the morning'",
    ],
    timingSchedule: [
      { phase: "Review: Articles so far", duration: "0–5 min", activity: "Quick article review" },
      { phase: "Professions", duration: "5–12 min", activity: "I am a doctor, She is an engineer" },
      { phase: "Meals and Times", duration: "12–18 min", activity: "breakfast/lunch/dinner patterns" },
      { phase: "Transport", duration: "18–22 min", activity: "by car vs in the car" },
      { phase: "Sports and Games", duration: "22–26 min", activity: "play basketball vs watch the game" },
      { phase: "Diseases and Illnesses", duration: "26–30 min", activity: "have a cold vs have the flu" },
      { phase: "Geographical Names", duration: "30–35 min", activity: "mountains, rivers, countries with 'the'" },
      { phase: "Mixed Practice", duration: "35–40 min", activity: "Students identify correct article usage in 15 sentences" },
    ],
  },
  homework: {
    title: "Article Exceptions Homework",
    titleZh: "冠词例外作业",
    tasks: [
      {
        type: "writing",
        instruction: "Write 20 sentences demonstrating article exception patterns: 5 professions, 5 transport, 5 sports/games, 5 illnesses/time expressions.",
        instructionZh: "写20个句子展示冠词例外模式：5个职业，5个交通，5个运动/游戏，5个疾病/时间表达。",
        sampleAnswer: "I am a teacher. She works as an engineer. We go to school by car. They travel by train. I play basketball on weekends. We watched the soccer match yesterday. I have a cold. She has the flu. In the morning, I drink coffee. At night, I read books.",
      },
      {
        type: "speaking",
        instruction: "Record 60 seconds describing your daily routine using article exception patterns correctly.",
        instructionZh: "录制60秒描述你的日常作息，正确使用冠词例外模式。",
        sampleAnswer: "I am a student. I go to university by bus. I play tennis on Tuesdays. I often have a cold in winter. In the morning, I study English. At night, I watch movies.",
      },
    ],
  },
  slides: [
    {
      id: "slide-1-welcome",
      slideNumber: 1,
      type: "TITLE",
      sectionTitle: "1. Welcome",
      title: "Article Exception Patterns",
      titleZh: "冠词例外规律",
      content:
        "Article usage has many exceptions that don't follow the basic a/an/the rules. Today we'll learn the specific patterns for professions, meals, transport, sports, diseases, and more.",
      contentZh:
        "冠词使用有许多例外，不遵循基本的a/an/the规则。今天我们将学习职业、餐食、交通、运动、疾病等的特定模式。",
      keyPoints: [
        "Professions: I am a teacher.",
        "Transport: by car, by train",
        "Sports: play basketball, play soccer",
        "Meals: We have breakfast at 8.",
      ],
    },
    {
      id: "slide-2-professions",
      slideNumber: 2,
      type: "RULE",
      sectionTitle: "2. Professions",
      title: "I am a/an [Profession]",
      titleZh: "我是a/an [职业]",
      content:
        "When stating someone's profession, use 'a' or 'an':\n\n  I am a teacher.\n  She is an engineer.\n  He is a doctor.\n  They are lawyers.\n\n  NOT: I am teacher. (missing article)\n  NOT: She is engineer. (missing article)\n\n  Exception: When using 'as', no article: I work as a teacher.",
      contentZh:
        "陈述某人的职业时，使用'a'或'an'：\n\n  I am a teacher.（我是老师）\n  She is an engineer.（她是工程师）\n  He is a doctor.（他是医生）\n  They are lawyers.（他们是律师）\n\n  错误：I am teacher.（缺少冠词）\n  错误：She is engineer.（缺少冠词）\n\n  例外：使用'as'时，不加冠词：I work as a teacher.（我以老师身份工作）",
    },
    {
      id: "slide-3-meals",
      slideNumber: 3,
      type: "RULE",
      sectionTitle: "3. Meals",
      title: "Meals: Zero Article vs 'the'",
      titleZh: "餐食：零冠词 vs 'the'",
      content:
        "General meals: zero article\n\n  We have breakfast at 8.\n  She eats lunch at noon.\n  They have dinner at 7.\n\n  Specific meal: 'the'\n\n  The breakfast was delicious.\n  The lunch we had yesterday was great.\n  Let's have the dinner in the garden.",
      contentZh:
        "一般餐食：零冠词\n\n  We have breakfast at 8.（我们8点吃早餐）\n  She eats lunch at noon.（她中午吃午餐）\n  They have dinner at 7.（他们7点吃晚餐）\n\n  特定餐食：'the'\n\n  The breakfast was delicious.（那顿早餐很美味）\n  The lunch we had yesterday was great.（我们昨天的午餐很棒）\n  Let's have the dinner in the garden.（我们在花园里吃晚餐吧）",
    },
    {
      id: "slide-4-times",
      slideNumber: 4,
      type: "RULE",
      sectionTitle: "4. Time Expressions",
      title: "Time: Mixed Article Patterns",
      titleZh: "时间：混合冠词模式",
      content:
        "Time expressions have mixed patterns:\n\n  Zero article: at night, at noon, at midnight\n  'the' with specific times: in the morning, in the afternoon, in the evening\n  No article with days: on Monday, on Tuesday\n  'the' with specific dates: on the first of January\n\n  NOT: in night (should be at night)\n  NOT: in morning (should be in the morning)\n  NOT: on the Monday (should be on Monday)",
      contentZh:
        "时间表达有混合模式：\n\n  零冠词：at night, at noon, at midnight\n  'the'与特定时间：in the morning, in the afternoon, in the evening\n  天数前不加冠词：on Monday, on Tuesday\n  'the'与特定日期：on the first of January\n\n  错误：in night（应该是at night）\n  错误：in morning（应该是in the morning）\n  错误：on the Monday（应该是on Monday）",
    },
    {
      id: "slide-5-transport",
      slideNumber: 5,
      type: "RULE",
      sectionTitle: "5. Transport",
      title: "Transport: by car vs in the car",
      titleZh: "交通：by car vs in the car",
      content:
        "Means of transport: zero article with 'by'\n\n  We go to school by car.\n  She travels to work by train.\n  They go on holiday by plane.\n\n  Being inside a vehicle: 'the'\n\n  We are in the car.\n  She is on the train.\n  They are in the plane.\n\n  NOT: We go to school by the car.\n  NOT: She travels to work by the train.\n\n  BUT: We took the car to the supermarket. (specific car)",
      contentZh:
        "交通方式：'by'后不加冠词\n\n  We go to school by car.（我们坐车去学校）\n  She travels to work by train.（她坐火车去上班）\n  They go on holiday by plane.（他们坐飞机去度假）\n\n  在交通工具内部：使用'the'\n\n  We are in the car.（我们在车里）\n  She is on the train.（她在火车上）\n  They are in the plane.（他们在飞机上）\n\n  错误：We go to school by the car.\n  错误：She travels to work by the train.\n\n  但是：We took the car to the supermarket.（我们开车去超市）",
    },
    {
      id: "slide-6-sports",
      slideNumber: 6,
      type: "RULE",
      sectionTitle: "6. Sports and Games",
      title: "Sports: Zero Article for Playing",
      titleZh: "运动：玩运动时零冠词",
      content:
        "Playing sports and games: zero article\n\n  I play basketball.\n  She plays soccer.\n  They play chess.\n  He plays the piano. (musical instrument exception)\n\n  Watching sports: 'the'\n\n  We watched the basketball game.\n  She watched the soccer match.\n  They watched the chess tournament.\n\n  NOT: I play the basketball.\n  NOT: She plays the soccer.\n\n  BUT: I play the piano, I play the guitar (musical instruments)",
      contentZh:
        "进行运动和游戏：零冠词\n\n  I play basketball.（我打篮球）\n  She plays soccer.（她踢足球）\n  They play chess.（他们下棋）\n  He plays the piano.（他弹钢琴）\n\n  观看运动：使用'the'\n\n  We watched the basketball game.（我们看了篮球比赛）\n  She watched the soccer match.（她看了足球比赛）\n  They watched the chess tournament.（他们看了国际象棋赛）\n\n  错误：I play the basketball.\n  错误：She plays the soccer.\n\n  但是：I play the piano，I play the guitar（乐器例外）",
    },
    {
      id: "slide-7-diseases",
      slideNumber: 7,
      type: "RULE",
      sectionTitle: "7. Diseases and Illnesses",
      title: "Illnesses: Mixed Article Patterns",
      titleZh: "疾病：混合冠词模式",
      content:
        "Some illnesses use 'a/an':\n\n  I have a cold.\n  She has a headache.\n  He has a fever.\n\n  Some illnesses use 'the':\n\n  She has the flu.\n  He has the measles.\n  They have the mumps.\n\n  Some illnesses use no article:\n\n  She has diabetes.\n  He has cancer.\n  They have malaria.\n\n  NOT: I have cold. (missing article)\n  NOT: She has flu. (missing 'the')\n  NOT: He has diabetes. (correct - no article)",
      contentZh:
        "一些疾病使用'a/an'：\n\n  I have a cold.（我感冒了）\n  She has a headache.（她头疼）\n  He has a fever.（他发烧）\n\n  一些疾病使用'the'：\n\n  She has the flu.（她得流感了）\n  He has the measles.（他得麻疹了）\n  They have the mumps.（他们得腮腺炎了）\n\n  一些疾病不使用冠词：\n\n  She has diabetes.（她有糖尿病）\n  He has cancer.（他得癌症了）\n  They have malaria.（他们得疟疾了）\n\n  错误：I have cold.（缺少冠词）\n  错误：She has flu.（缺少'the'）\n  正确：He has diabetes.（正确 - 不加冠词）",
    },
    {
      id: "slide-8-geographical",
      slideNumber: 8,
      type: "RULE",
      sectionTitle: "8. Geographical Names",
      title: "Places: Mixed Patterns with 'the'",
      titleZh: "地名：'the'的混合模式",
      content:
        "Use 'the' with:\n\n  Rivers: the Nile, the Amazon, the Mississippi\n  Oceans: the Pacific, the Atlantic, the Indian\n  Seas: the Mediterranean, the Caribbean\n  Mountain ranges: the Himalayas, the Alps, the Rockies\n  Deserts: the Sahara, the Gobi, the Kalahari\n  Countries with 'the': the United States, the Philippines, the Netherlands\n\n  NO 'the' with:\n  Most countries: China, Japan, India, Brazil\n  Cities: Beijing, Shanghai, New York, London\n  Individual mountains: Mount Everest, Fuji Mountain\n  Lakes: Lake Baikal, Lake Superior\n\n  NOT: I live in the China.\n  NOT: The Amazon is long river. (should be 'the Amazon River')",
      contentZh:
        "与以下一起使用'the'：\n\n  河流：the Nile，the Amazon，the Mississippi\n  海洋：the Pacific，the Atlantic，the Indian\n  海：the Mediterranean，the Caribbean\n  山脉：the Himalayas，the Alps，the Rockies\n  沙漠：the Sahara，the Gobi，the Kalahari\n  带'the'的国家：the United States，the Philippines，the Netherlands\n\n  不使用'the'的：\n  大多数国家：China，Japan，India，Brazil\n  城市：Beijing，Shanghai，New York，London\n  单个山峰：Mount Everest，Fuji Mountain\n  湖泊：Lake Baikal，Lake Superior\n\n  错误：I live in the China.\n  错误：The Amazon is long river.（应该是'the Amazon River'）",
    },
    {
      id: "slide-9-common-mistake",
      slideNumber: 9,
      type: "COMMON_MISTAKE",
      sectionTitle: "9. Common Mistakes",
      title: "Top 5 Article Exception Errors",
      titleZh: "冠词例外的5个最常见错误",
      mistakes: [
        {
          wrong: "I am teacher.",
          right: "I am a teacher.",
          explanation: "Professions need 'a' or 'an'.",
          explanationZh: "职业需要'a'或'an'。",
          why: "Chinese doesn't use articles with professions.",
        },
        {
          wrong: "I play the basketball.",
          right: "I play basketball.",
          explanation: "Sports and games use zero article when playing.",
          explanationZh: "运动和游戏进行时使用零冠词。",
          why: "Students overgeneralize 'the' from specific games to general play.",
        },
        {
          wrong: "We go to school by the car.",
          right: "We go to school by car.",
          explanation: "Transport with 'by' uses zero article.",
          explanationZh: "交通方式用'by'时使用零冠词。",
          why: "Students confuse 'by car' (means) with 'in the car' (location).",
        },
        {
          wrong: "I have cold.",
          right: "I have a cold.",
          explanation: "Common illnesses often need 'a/an'.",
          explanationZh: "常见疾病通常需要'a/an'。",
          why: "Chinese expresses illnesses without articles.",
        },
        {
          wrong: "In night, I study.",
          right: "At night, I study.",
          explanation: "Time expression is 'at night', not 'in night'.",
          explanationZh: "时间表达是'at night'，不是'in night'。",
          why: "Direct translation from Chinese '晚上'.",
        },
      ],
    },
    {
      id: "slide-10-real-life",
      slideNumber: 10,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "10. Real Life Scenario",
      title: "At the Doctor's Office",
      titleZh: "在医生办公室",
      scenario: {
        context: "A patient visits the doctor and describes symptoms and daily habits.",
        contextZh: "一名患者看医生，描述症状和日常习惯。",
        dialogue: [
          {
            speaker: "Patient",
            en: "Doctor, I have a cold and a headache.",
            zh: "医生，我感冒了，还有头疼。",
            isTargetGrammar: true,
          },
          {
            speaker: "Doctor",
            en: "How do you usually get to work?",
            zh: "你通常怎么去上班？",
            isTargetGrammar: true,
          },
          {
            speaker: "Patient",
            en: "I go to work by bus. I play basketball on weekends.",
            zh: "我坐公交车去上班。周末我打篮球。",
            isTargetGrammar: true,
          },
          {
            speaker: "Doctor",
            en: "What do you usually have for breakfast?",
            zh: "你通常早餐吃什么？",
            isTargetGrammar: true,
          },
          {
            speaker: "Patient",
            en: "I have breakfast at 8. I usually have a sandwich.",
            zh: "我8点吃早餐。我通常吃一个三明治。",
            isTargetGrammar: true,
          },
          {
            speaker: "Doctor",
            en: "Do you smoke or drink alcohol?",
            zh: "你抽烟或喝酒吗？",
            isTargetGrammar: false,
          },
          {
            speaker: "Patient",
            en: "No, I don't smoke. I rarely have alcohol.",
            zh: "不，我不抽烟。我很少喝酒。",
            isTargetGrammar: false,
          },
        ],
        task: "Notice: 'a cold', 'a headache', 'by bus', 'play basketball', 'breakfast at 8', 'a sandwich' - all follow exception patterns.",
        taskZh: "注意：'a cold'，'a headache'，'by bus'，'play basketball'，'breakfast at 8'，'a sandwich'——全部遵循例外模式。",
      },
    },
    {
      id: "slide-11-conversation",
      slideNumber: 11,
      type: "CONVERSATION",
      sectionTitle: "11. Pattern Practice",
      title: "Weekend Plans",
      titleZh: "周末计划",
      scenario: {
        context: "Pattern: Use article exceptions in conversation about weekend activities.",
        contextZh: "模式：在谈论周末活动时使用冠词例外。",
        dialogue: [
          { speaker: "A", en: "What are you doing this weekend?", zh: "你周末要做什么？", isTargetGrammar: true },
          { speaker: "B", en: "I'm going to play soccer on Saturday.", zh: "我周六要去踢足球。", isTargetGrammar: true },
          { speaker: "A", en: "Do you play soccer often?", zh: "你经常踢足球吗？", isTargetGrammar: true },
          { speaker: "B", en: "Yes, I play soccer every weekend.", zh: "是的，我每周末都踢足球。", isTargetGrammar: true },
          { speaker: "A", en: "How do you get to the soccer field?", zh: "你怎么去足球场？", isTargetGrammar: true },
          { speaker: "B", en: "I go there by bike.", zh: "我骑自行车去那里。", isTargetGrammar: true },
        ],
        task: "Practice: Use 'play soccer' (zero article), 'go there by bike' (zero article with 'by').",
        taskZh: "练习：用'play soccer'（零冠词），'go there by bike'（'by'后零冠词）。",
      },
    },
    {
      id: "slide-12-pte",
      slideNumber: 12,
      type: "EXPLANATION",
      sectionTitle: "12. PTE Relevance",
      title: "Article Exceptions in PTE Tests",
      titleZh: "PTE测试中的冠词例外",
      content:
        "PTE tests article exception patterns:\n\n**READING**: Fill in the blank.\n  'I am ___ teacher.' (a)\n  'We go to work ___ car.' (by)\n  'I play ___ basketball.' (no article)\n  'She has ___ cold.' (a)\n\n**WRITING**: Dictation.\n  'I have ___ headache.' → 'I have a headache.'\n\n**LISTENING**: Choose correct article/no article.\n  'She works ___ engineer.' (as)\n\n**SPEAKING**: Describe routines and habits.\n  'I usually go to work ___ bus.' → 'I usually go to work by bus.'",
      contentZh:
        "PTE测试冠词例外模式：\n\n**阅读**：填空。\n  'I am ___ teacher.'（a）\n  'We go to work ___ car.'（by）\n  'I play ___ basketball.'（零冠词）\n  'She has ___ cold.'（a）\n\n**写作**：听写。\n  'I have ___ headache.' → 'I have a headache.'\n\n**听力**：选择正确冠词/零冠词。\n  'She works ___ engineer.'（as）\n\n**口语**：描述作息和习惯。\n  'I usually go to work ___ bus.' → 'I usually go to work by bus.'",
    },
    {
      id: "slide-13-drills",
      slideNumber: 13,
      type: "EXPLANATION",
      sectionTitle: "13. Drills",
      title: "Practice Sets",
      titleZh: "练习题",
      content:
        "**Set 1: Choose correct article/no article**\n\n1. I am ___ teacher.\n2. We go to work ___ car.\n3. I play ___ basketball.\n4. She has ___ cold.\n5. I work ___ engineer.\n\n**Set 2: Fix the mistakes**\n\n1. I am teacher. → I am a teacher.\n2. We go to work by the car. → We go to work by car.\n3. I play the basketball. → I play basketball.\n4. She has cold. → She has a cold.\n5. I work engineer. → I work as an engineer.",
      contentZh:
        "**练习1：选择正确的冠词/零冠词**\n\n1. I am ___ teacher.\n2. We go to work ___ car.\n3. I play ___ basketball.\n4. She has ___ cold.\n5. I work ___ engineer.\n\n**练习2：纠正错误**\n\n1. I am teacher. → I am a teacher.\n2. We go to work by the car. → We go to work by car.\n3. I play the basketball. → I play basketball.\n4. She has cold. → She has a cold.\n5. I work engineer. → I work as an engineer.",
    },
    {
      id: "slide-14-speaking",
      slideNumber: 14,
      type: "SPEAKING_DRILL",
      sectionTitle: "14. Speaking Practice",
      title: "Weekend Activities",
      titleZh: "周末活动",
      speakingDrill: {
        prompt: "Describe your typical weekend in 60 seconds. Use article exception patterns correctly for professions, transport, sports, and meals.",
        targetSentence:
          "I am a student. I usually go to campus by subway. On weekends, I play tennis with friends. I have breakfast at 9 and lunch at 2.",
        targetSentenceZh: "我是一名学生。我通常坐地铁去学校。周末，我和朋友一起打网球。我9点吃早餐，2点吃午餐。",
        tips: "Use 'a/an' with professions (I am a student), 'by' with transport (by subway), zero article with sports (play tennis), zero article with meals (breakfast at 9).",
      },
    },
    {
      id: "slide-15-quiz",
      slideNumber: 15,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "15. Quick Quiz",
      title: "Choose the Correct Sentence",
      titleZh: "选择正确的句子",
      question: {
        question: "I am teacher / I am a teacher",
        questionZh: "我是老师 / 我是一名老师",
        options: ["a. I am teacher", "b. I am a teacher", "c. I am the teacher"],
        correctIndex: 1,
        explanation: "Professions need 'a' or 'an'.",
        explanationZh: "职业需要'a'或'an'。",
        xpReward: 10,
      },
    },
    {
      id: "slide-16-challenge",
      slideNumber: 16,
      type: "CHALLENGE",
      sectionTitle: "16. Week Challenge",
      title: "30-Question Challenge",
      titleZh: "30题挑战",
      content:
        "Complete 30 questions to master article exceptions:\n\n**Part A: Choose correct usage (20 questions)**\n  'I am ___ teacher', 'We go to work ___ car', etc.\n\n**Part B: Fix the mistakes (10 questions)**\n  'I am teacher' → _____\n  'We go to work by the car' → _____\n\n**Scoring**: 1 point per correct answer. Need 75% to pass. Keep practicing!",
      contentZh:
        "完成30题来掌握冠词例外：\n\n**A部分：选择正确用法（20题）**\n  'I am ___ teacher'，'We go to work ___ car'，等。\n\n**B部分：纠正错误（10题）**\n  'I am teacher' → _____\n  'We go to work by the car' → _____\n\n**评分**：每题1分。需要75%才能通过。继续练习！",
    },
  ],
};