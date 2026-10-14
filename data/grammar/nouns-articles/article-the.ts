import { GrammarLesson } from "@/types/grammar";

export const articleTheLesson: GrammarLesson = {
  id: "article-the-foundation",
  subcategoryId: "article-the",
  categoryId: "nouns-articles",
  title: "Definite Article: the",
  titleZh: "定冠词：the",
  subtitle: "When to use 'the' for specific references",
  level: "A1",
  estimatedMinutes: 40,
  lessonIndex: 1,
  totalLessonsInSubcategory: 8,
  description: "Master 'the' for specific references, unique things, superlatives, and more.",
  descriptionZh: "掌握'the'用于特指、唯一事物、最高级等。",
  objectives: [
    "use 'the' for specific, known references",
    "use 'the' with unique things (sun, moon, internet)",
    "use 'the' with superlatives (the best, the most beautiful)",
    "avoid omitting 'the' with countries that need it (the USA, the Philippines)",
    "understand when NOT to use 'the' (general statements, proper nouns)",
    "use 'the' with ordinal numbers (the first, the third)",
    "use 'the' with musical instruments and inventions",
  ],
  teacherGuide: {
    teachingObjective:
      "Students will learn that 'the' signals shared knowledge between speaker and listener. It's used when both parties know which specific thing is being referred to.",
    whatToExplain: [
      "'the' = specific, known to both speaker and listener",
      "Unique things: the sun, the moon, the earth, the sky, the internet",
      "Superlatives: the best, the most beautiful, the tallest (always 'the')",
      "Ordinal numbers: the first, the second, the third (always 'the')",
      "Countries with 'the': the United States, the Philippines, the Netherlands, the United Kingdom, the Czech Republic",
      "Musical instruments: play the piano, play the guitar",
      "Inventions: the telephone, the light bulb, the internet",
      "Geographical features: the Amazon, the Nile, the Sahara, the Pacific Ocean",
    ],
    questionsToAsk: [
      "Should it be 'the sun' or 'sun'?",
      "Why do we say 'the USA' but not 'the China'?",
      "Is it 'play piano' or 'play the piano'?",
      "What about 'I love music' vs 'I love the music'?",
    ],
    commonConfusion: [
      "Forgetting 'the' with superlatives: 'She is best student' → WRONG",
      "Adding 'the' before proper nouns: 'the Beijing' → WRONG",
      "Omitting 'the' with unique things: 'Sun is hot' → WRONG",
      "Confusing when to use 'the' with countries: 'the USA' vs 'China'",
      "Saying 'I like the music' when meaning music in general (should be 'I like music')",
    ],
    timingSchedule: [
      { phase: "Review: Articles so far", duration: "0–5 min", activity: "Quick review: a/an vs no article" },
      { phase: "When to Use 'the'", duration: "5–15 min", activity: "Specific reference, unique things, superlatives" },
      { phase: "Unique Things & Superlatives", duration: "15–22 min", activity: "the sun, the best, the most beautiful" },
      { phase: "Countries with 'the'", duration: "22–28 min", activity: "the USA, the Philippines, the Netherlands" },
      { phase: "When NOT to Use 'the'", duration: "28–35 min", activity: "General statements, proper nouns, plural general" },
      { phase: "Speaking Practice", duration: "35–40 min", activity: "Students describe their room using 'the' correctly" },
      { phase: "Homework Review", duration: "40–45 min", activity: "Check homework sentences for correct 'the' usage" },
    ],
  },
  homework: {
    title: "Definite Article Homework",
    titleZh: "定冠词作业",
    tasks: [
      {
        type: "writing",
        instruction: "Write 12 sentences using 'the' correctly: 4 with specific references, 3 with unique things, 3 with superlatives, 2 with countries that need 'the'.",
        instructionZh: "写12个句子，正确使用'the'：4个特指，3个唯一事物，3个最高级，2个需要'the'的国家。",
        sampleAnswer: "The sun is hot. She is the best student. The Pacific Ocean is large. I live in the United States. The book on the table is mine. The most beautiful flower is the rose.",
      },
      {
        type: "speaking",
        instruction: "Record 60 seconds describing your favorite place. Use 'the' correctly for specific references and unique features.",
        instructionZh: "录制60秒描述你最喜欢的地方。正确使用'the'来指特定参考和唯一特征。",
        sampleAnswer: "My favorite place is the beach near my house. The sand is soft and the water is clear. The best time to go is in the morning when there are few people. I love watching the sunrise over the Pacific Ocean.",
      },
    ],
  },
  slides: [
    {
      id: "slide-1-welcome",
      slideNumber: 1,
      type: "TITLE",
      sectionTitle: "1. Welcome",
      title: "Definite Article: the",
      titleZh: "定冠词：the",
      content:
        "'the' is the definite article. We use it when both the speaker and listener know exactly which thing we're talking about. It signals shared knowledge.",
      contentZh:
        "'the'是定冠词。当说话者和听者确切知道我们在谈论哪件事时使用它。它表示共享的知识。",
      keyPoints: [
        "'the' = specific reference",
        "Both speaker and listener know which thing",
        "Unique things: the sun, the moon",
        "Superlatives: the best, the most beautiful",
      ],
    },
    {
      id: "slide-2-specific-reference",
      slideNumber: 2,
      type: "RULE",
      sectionTitle: "2. Specific Reference",
      title: "When Both Speaker and Listener Know",
      titleZh: "当说话者和听者都知道时",
      content:
        "Use 'the' when referring to something specific that both speaker and listener can identify:\n\n  Can you pass me the salt? (specific salt on the table)\n  I like the movie we saw yesterday. (specific movie)\n  The book on the table is mine. (specific book)\n\n  NOT: Can you pass me salt? (which salt?)\n  NOT: I like movie we saw yesterday. (missing article)",
      contentZh:
        "当指特定事物且说话者和听者都能识别时使用'the'：\n\n  你能把盐递给我吗？（特定的盐，就在桌子上）\n  我喜欢我们昨天看的那部电影。（特定的电影）\n  桌子上的书是我的。（特定的书）\n\n  不对：你能把盐递给我吗？（哪盐？）\n  不对：我喜欢我们昨天看的电影。（缺少冠词）",
      keyPoints: ["Shared knowledge between speaker and listener", "Specific, identifiable thing", "Not general or non-specific"],
    },
    {
      id: "slide-3-unique-things",
      slideNumber: 3,
      type: "RULE",
      sectionTitle: "3. Unique Things",
      title: "One of a Kind",
      titleZh: "独一无二的事物",
      content:
        "Use 'the' with unique things — there's only one of them in our context:\n\n  The sun (there's only one sun in our solar system)\n  The moon (there's only one moon orbiting Earth)\n  The earth (we only have one earth)\n  The sky (there's only one sky above us)\n  The internet (there's one global internet)\n  The environment (we share one environment)\n\n  NOT: Sun is hot. (missing 'the')\n  NOT: Moon orbits earth. (missing 'the's)",
      contentZh:
        "与独一无二的事物一起使用'the'——在我们的语境中只有一个：\n\n  The sun（我们太阳系只有一个太阳）\n  The moon（地球只有一个月亮）\n  The earth（我们只有一个地球）\n  The sky（我们头顶只有一片天空）\n  The internet（全球只有一个互联网）\n  The environment（我们共享一个环境）\n\n  不对：Sun is hot.（缺少'the'）\n  不对：Moon orbits earth.（缺少两个'the'）",
    },
    {
      id: "slide-4-superlatives",
      slideNumber: 4,
      type: "RULE",
      sectionTitle: "4. Superlatives",
      title: "Always 'the' with Superlatives",
      titleZh: "最高级总是用'the'",
      content:
        "Superlatives (the best, the most beautiful, the tallest) ALWAYS use 'the':\n\n  She is the best student in the class.\n  This is the most beautiful painting I've ever seen.\n  Mount Everest is the tallest mountain in the world.\n\n  NEVER: She is best student. (missing 'the')\n  NEVER: Mount Everest is tallest mountain. (missing 'the')",
      contentZh:
        "最高级（the best, the most beautiful, the tallest）总是用'the'：\n\n  她是班级里最好的学生。\n  这是我见过的最美的画。\n  珠穆朗玛峰是世界最高的山。\n\n  永远不对：她是班级里最好的学生。（缺少'the'）\n  永远不对：珠穆朗玛峰是世界最高的山。（缺少'the'）",
    },
    {
      id: "slide-5-ordinal-numbers",
      slideNumber: 5,
      type: "RULE",
      sectionTitle: "5. Ordinal Numbers",
      title: "Always 'the' with Ordinals",
      titleZh: "序数词总是用'the'",
      content:
        "Ordinal numbers (first, second, third) ALWAYS use 'the':\n\n  He was the first to arrive.\n  She lives on the second floor.\n  This is the third time I've called you.\n\n  NEVER: He was first to arrive.\n  NEVER: She lives on second floor.\n  NEVER: This is third time I've called you.",
      contentZh:
        "序数词（first, second, third）总是用'the'：\n\n  他是第一个到达的。\n  她住在二楼。\n  这是我第三次给你打电话。\n\n  永远不对：他是第一个到达的。\n  永远不对：她住在二楼。\n  永远不对：这是我第三次给你打电话。",
    },
    {
      id: "slide-6-countries-with-the",
      slideNumber: 6,
      type: "RULE",
      sectionTitle: "6. Countries with 'the'",
      title: "Some Countries Need 'the'",
      titleZh: "有些国家需要'the'",
      content:
        "Some country names include 'the' as part of their official name:\n\n  The United States (USA)\n  The Philippines\n  The Netherlands\n  The United Kingdom (UK)\n  The Czech Republic\n\n  NOT: I live in United States. (missing 'the')\n  NOT: She visited Philippines last year. (missing 'the')\n\n  BUT most countries do NOT use 'the':\n  I live in China. ✓\n  She visited Japan last year. ✓",
      contentZh:
        "有些国家名称的官方名称包含'the'：\n\n  The United States（USA）\n  The Philippines\n  The Netherlands\n  The United Kingdom（UK）\n  The Czech Republic\n\n  不对：I live in United States.（缺少'the'）\n  不对：She visited Philippines last year.（缺少'the'）\n\n  但大多数国家不使用'the'：\n  I live in China. ✓\n  She visited Japan last year. ✓",
    },
    {
      id: "slide-7-musical-instruments",
      slideNumber: 7,
      type: "RULE",
      sectionTitle: "7. Musical Instruments",
      title: "Play 'the' Instrument",
      titleZh: "弹奏'the'乐器",
      content:
        "When talking about playing musical instruments, we use 'the':\n\n  She plays the piano.\n  He plays the guitar.\n  They play the violin in the orchestra.\n\n  NOT: She plays piano. (missing 'the')\n  NOT: He plays guitar. (missing 'the')\n\n  BUT when talking about the instrument as an object, no article:\n  I bought a piano yesterday. (a = one piano)\n  The guitar is on the table. (the = specific guitar)",
      contentZh:
        "谈论演奏乐器时，我们使用'the'：\n\n  她弹钢琴。\n  他弹吉他。\n  他们在管弦乐队里拉小提琴。\n\n  不对：她弹钢琴。（缺少'the'）\n  不对：他弹吉他。（缺少'the'）\n\n  但谈论乐器作为对象时，不加冠词：\n  我昨天买了一架钢琴。（a = 一架钢琴）\n  吉他在桌子上。（the = 特定的吉他）",
    },
    {
      id: "slide-8-inventions",
      slideNumber: 8,
      type: "RULE",
      sectionTitle: "8. Inventions",
      title: "Invented Things",
      titleZh: "发明的东西",
      content:
        "We often use 'the' with inventions:\n\n  The telephone was invented by Bell.\n  The light bulb changed the world.\n  The internet revolutionized communication.\n  The airplane made travel faster.\n\n  This treats the invention as a category or concept, not a specific object.",
      contentZh:
        "我们经常用'the'与发明一起使用：\n\n  电话是贝尔发明的。\n  电灯泡改变了世界。\n  互联网彻底改变了通信。\n  飞机让旅行更快捷。\n\n  这把发明视为一个类别或概念，而不是特定对象。",
    },
    {
      id: "slide-9-geographical-features",
      slideNumber: 9,
      type: "RULE",
      sectionTitle: "9. Geographical Features",
      title: "Rivers, Oceans, Deserts",
      titleZh: "河流、海洋、沙漠",
      content:
        "Use 'the' with:\n\n  Rivers: the Nile, the Amazon, the Mississippi, the Yangtze\n  Oceans: the Pacific, the Atlantic, the Indian, the Arctic\n  Deserts: the Sahara, the Gobi, the Kalahari\n  Mountain ranges: the Himalayas, the Alps, the Rockies\n\n  BUT individual mountains usually don't use 'the':\n  Mount Everest (not 'the Mount Everest')\n  Fuji Mountain (not 'the Fuji Mountain')\n\n  And lakes usually don't use 'the':\n  Lake Baikal (not 'the Lake Baikal')\n  Lake Superior (not 'the Lake Superior')",
      contentZh:
        "与以下一起使用'the'：\n\n  河流：the Nile，the Amazon，the Mississippi，the Yangtze\n  海洋：the Pacific，the Atlantic，the Indian，the Arctic\n  沙漠：the Sahara，the Gobi，the Kalahari\n  山脉：the Himalayas，the Alps，the Rockies\n\n  但单个山峰通常不使用'the'：\n  珠穆朗玛峰（不是'the 珠穆朗玛峰'）\n  富士山（不是'the 富士山'）\n\n  而湖泊通常不使用'the'：\n  贝加尔湖（不是'the 贝加尔湖'）\n  上湖（不是'the 上湖'）",
    },
    {
      id: "slide-10-common-mistake",
      slideNumber: 10,
      type: "COMMON_MISTAKE",
      sectionTitle: "10. Common Mistakes",
      title: "Top 5 Errors with 'the'",
      titleZh: "'the'的5个最常见错误",
      mistakes: [
        {
          wrong: "She is best student in class.",
          right: "She is the best student in class.",
          explanation: "Superlatives always need 'the'.",
          explanationZh: "最高级总是需要'the'。",
          why: "Students forget 'the' with superlatives.",
        },
        {
          wrong: "Sun is hot today.",
          right: "The sun is hot today.",
          explanation: "The sun is unique - there's only one.",
          explanationZh: "太阳是唯一的——只有一个。",
          why: "Students treat 'sun' as a common noun.",
        },
        {
          wrong: "I live in United States.",
          right: "I live in the United States.",
          explanation: "USA is one of the countries that requires 'the'.",
          explanationZh: "美国是需要'the'的国家之一。",
          why: "Overgeneralizing rule that most countries don't use 'the'.",
        },
        {
          wrong: "I play piano.",
          right: "I play the piano.",
          explanation: "Musical instruments need 'the' when talking about playing them.",
          explanationZh: "谈论演奏乐器时需要'the'。",
          why: "Students omit 'the' with musical instruments.",
        },
        {
          wrong: "The Beijing is beautiful.",
          right: "Beijing is beautiful.",
          explanation: "Proper nouns don't take 'the'.",
          explanationZh: "专有名词不加'the'。",
          why: "Students overgeneralize 'the' to all nouns.",
        },
      ],
    },
    {
      id: "slide-11-real-life",
      slideNumber: 11,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "11. Real Life Scenario",
      title: "At the Museum",
      titleZh: "在博物馆",
      scenario: {
        context: "A tourist visits a museum and asks about exhibits and facilities.",
        contextZh: "一名游客参观博物馆，询问展览和设施。",
        dialogue: [
          {
            speaker: "Tourist",
            en: "Excuse me, where is the restroom?",
            zh: "对不起，洗手间在哪里？",
            isTargetGrammar: true,
          },
          {
            speaker: "Staff",
            en: "It's down the hall, on the left.",
            zh: "在走廊尽头，左边。",
            isTargetGrammar: true,
          },
          {
            speaker: "Tourist",
            en: "And where can I see the dinosaur exhibit?",
            zh: "还有，恐龙展览在哪里？",
            isTargetGrammar: true,
          },
          {
            speaker: "Staff",
            en: "The dinosaur exhibit is in the east wing, on the second floor.",
            zh: "恐龙展览在东翼，二楼。",
            isTargetGrammar: true,
          },
          {
            speaker: "Tourist",
            en: "Is the audio guide included in the ticket price?",
            zh: "语音导览包括在门票价格里吗？",
            isTargetGrammar: true,
          },
          {
            speaker: "Staff",
            en: "Yes, the audio guide is free with admission.",
            zh: "是的，语音导览免费附带入场券。",
            isTargetGrammar: true,
          },
        ],
        task: "Notice: 'the restroom', 'the hall', 'the left', 'the dinosaur exhibit', 'the east wing', 'the second floor', 'the audio guide', 'the ticket price', 'the admission'.",
        taskZh: "注意：'the restroom'，'the hall'，'the left'，'the dinosaur exhibit'，'the east wing'，'the second floor'，'the audio guide'，'the ticket price'，'the admission'。",
      },
    },
    {
      id: "slide-12-conversation",
      slideNumber: 12,
      type: "CONVERSATION",
      sectionTitle: "12. Pattern Practice",
      title: "Giving Directions",
      titleZh: "给方向",
      scenario: {
        context: "Pattern: Use 'the' for specific locations when giving directions.",
        contextZh: "模式：给方向时使用'the'指特定位置。",
        dialogue: [
          { speaker: "A", en: "Excuse me, how do I get to the train station?", zh: "打扰一下，我怎么去火车站？", isTargetGrammar: true },
          { speaker: "B", en: "Go straight, then turn left at the traffic light.", zh: "直走，然后在红绿灯左转。", isTargetGrammar: true },
          { speaker: "A", en: "Is the station far from here?", zh: "车站离这儿远吗？", isTargetGrammar: true },
          { speaker: "B", en: "No, it's about a 10-minute walk. You'll see the station on your right.", zh: "不远，大概10分钟步行。你会在右边看到车站。", isTargetGrammar: true },
          { speaker: "A", en: "Thank you! Is there a cafe near the station?", zh: "谢谢！车站附近有咖啡馆吗？", isTargetGrammar: true },
          { speaker: "B", en: "Yes, there's a cafe on the corner of Main Street and the station road.", zh: "是的，车站路和主街拐角处有一家咖啡馆。", isTargetGrammar: true },
        ],
        task: "Practice using 'the' for specific locations: the train station, the traffic light, the station, your right, the cafe, the corner.",
        taskZh: "练习使用'the'指特定位置：火车站、红绿灯、车站、你的右边、咖啡馆、拐角处。",
      },
    },
    {
      id: "slide-13-pte",
      slideNumber: 13,
      type: "EXPLANATION",
      sectionTitle: "13. PTE Relevance",
      title: "'the' in PTE Academic",
      titleZh: "PTE Academic中的'the'",
      content:
        "PTE tests 'the' usage constantly:\n\n**READING**: Fill in the blank.\n  '___ sun is hot.' (The)\n  'She is ___ best student.' (the)\n  'I live in ___ United States.' (the)\n\n**WRITING**: Dictation.\n  'Please turn off ___ light.' → 'Please turn off the light.'\n\n**LISTENING**: Choose correct article.\n  'I saw ___ movie yesterday.' (the)\n\n**SPEAKING**: Describe images with specific references.\n  'In this picture, you can see ___ Eiffel Tower.' → 'In this picture, you can see the Eiffel Tower.' (but wait - Eiffel Tower needs 'the'!)",
      contentZh:
        "PTE不断测试'the'用法：\n\n**阅读**：填空。\n  '___ sun is hot.'（The）\n  'She is ___ best student.'（the）\n  'I live in ___ United States.'（the）\n\n**写作**：听写。\n  'Please turn off ___ light.' → 'Please turn off the light.'\n\n**听力**：选择正确冠词。\n  'I saw ___ movie yesterday.'（the）\n\n**口语**：描述图片中的特指。\n  'In this picture, you can see ___ Eiffel Tower.' → 'In this picture, you can see the Eiffel Tower.'（但等等——埃菲尔铁塔需要'the'！）",
    },
    {
      id: "slide-14-drills",
      slideNumber: 14,
      type: "EXPLANATION",
      sectionTitle: "14. Drills",
      title: "Practice Sets",
      titleZh: "练习题",
      content:
        "**Set 1: Choose correct article**\n\n1. ___ sun is hot.\n2. She is ___ best student.\n3. I live in ___ United States.\n4. Please turn off ___ light.\n5. I saw ___ movie yesterday.\n6. The Eiffel Tower is in ___ Paris.\n\n**Set 2: Fix the mistakes**\n\n1. Sun is hot today. → The sun is hot today.\n2. She is best student in class. → She is the best student in class.\n3. I live in United States. → I live in the United States.\n4. I play piano. → I play the piano.",
      contentZh:
        "**练习1：选择正确的冠词**\n\n1. ___ sun is hot.\n2. She is ___ best student.\n3. I live in ___ United States.\n4. Please turn off ___ light.\n5. I saw ___ movie yesterday.\n6. The Eiffel Tower is in ___ Paris.\n\n**练习2：纠正错误**\n\n1. Sun is hot today. → The sun is hot today.\n2. She is best student in class. → She is the best student in class.\n3. I live in United States. → I live in the United States.\n4. I play piano. → I play the piano.",
    },
    {
      id: "slide-15-speaking",
      slideNumber: 15,
      type: "SPEAKING_DRILL",
      sectionTitle: "15. Speaking Practice",
      title: "Describe Your Room",
      titleZh: "描述你的房间",
      speakingDrill: {
        prompt: "Describe your bedroom in 60 seconds. Use 'the' correctly for specific items and features.",
        targetSentence:
          "The bed is against the wall. The desk is near the window. The lamp on the desk gives good light. The floor is wooden and the curtains are blue.",
        targetSentenceZh: "床靠墙放。桌子靠窗。台灯提供好光。地板是木头的，窗帘是蓝色的。",
        tips: "Use 'the' for specific items: the bed, the desk, the lamp, the floor, the curtains. Use 'the' with unique things: the window, the wall.",
      },
    },
    {
      id: "slide-16-quiz",
      slideNumber: 16,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "16. Quick Quiz",
      title: "Choose the Correct Sentence",
      titleZh: "选择正确的句子",
      question: {
        question: "Sun is hot / The sun is hot",
        questionZh: "太阳很热 / 太阳（the sun）很热",
        options: ["a. Sun is hot", "b. The sun is hot", "c. A sun is hot"],
        correctIndex: 1,
        explanation: "The sun is a unique, specific thing - it requires 'the'.",
        explanationZh: "太阳是独一无二的事物——需要'the'。",
        xpReward: 10,
      },
    },
    {
      id: "slide-17-challenge",
      slideNumber: 17,
      type: "CHALLENGE",
      sectionTitle: "17. Week Challenge",
      title: "30-Question Challenge",
      titleZh: "30题挑战",
      content:
        "Complete 30 questions to master 'the':\n\n**Part A: Choose correct usage (20 questions)**\n  '___ sun is hot', 'She is ___ best student', etc.\n\n**Part B: Fix the mistakes (10 questions)**\n  'Sun is hot today' → _____\n  'She is best student in class' → _____\n\n**Scoring**: 1 point per correct answer. Need 75% to pass. Keep practicing!",
      contentZh:
        "完成30题来掌握'the'：\n\n**A部分：选择正确用法（20题）**\n  '___ sun is hot'，'She is ___ best student'，等。\n\n**B部分：纠正错误（10题）**\n  'Sun is hot today' → _____\n  'She is best student in class' → _____\n\n**评分**：每题1分。需要75%才能通过。继续练习！",
    },
  ],
};