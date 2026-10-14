import { GrammarLesson } from "@/types/grammar";

export const properNounsLesson: GrammarLesson = {
  id: "proper-nouns-foundation",
  subcategoryId: "proper-nouns",
  categoryId: "nouns-articles",
  title: "Proper Nouns & Capitalization",
  titleZh: "专有名词与大小写",
  subtitle: "Names that are capitalized and unique",
  level: "A1",
  estimatedMinutes: 30,
  lessonIndex: 1,
  totalLessonsInSubcategory: 1,
  description: "Learn when to capitalize and how proper nouns differ from common nouns.",
  descriptionZh: "学习何时大写以及专有名词与普通名词的区别。",
  objectives: [
    "identify proper nouns vs common nouns",
    "capitalize proper nouns correctly",
    "know when NOT to use articles with proper nouns",
    "avoid common capitalization mistakes",
    "use proper nouns in sentences naturally",
  ],
  teacherGuide: {
    teachingObjective:
      "Students will recognize proper nouns (people, places, things) that are always capitalized and understand they typically don't need articles before them.",
    whatToExplain: [
      "Proper = specific, unique, always capitalized",
      "Common = general, not specific (cat, dog, book)",
      "Proper nouns: Beijing, Shakespeare, Monday, China, Microsoft",
      "Common nouns: city, actor, day, country, company",
      "Zero article with proper nouns: 'Beijing is great' not 'the Beijing is great'",
    ],
    questionsToAsk: [
      "What's the difference between 'China' and 'a country'?",
      "Should 'shanghai' be capitalized?",
      "Do we say 'the Beijing' or just 'Beijing'?",
      "Is 'President' a proper noun? Why or why not?",
    ],
    commonConfusion: [
      "Capitalizing common nouns: 'I went to the China' → WRONG (should be 'the country of China' or just 'China')",
      "Lowercasing proper nouns: 'i went to beijing' → WRONG",
      "Adding 'the' before proper nouns: 'the New York' → WRONG",
      "Confusing titles: 'President' is common (the president), 'Presidential' can be proper in context",
    ],
    timingSchedule: [
      { phase: "Review: Common vs Proper", duration: "0–5 min", activity: "Quick review: 'cat' vs 'Tom'; 'city' vs 'Paris'" },
      { phase: "Rules of Capitalization", duration: "5–15 min", activity: "Explain rules: always capitalize proper nouns, never capitalize common nouns" },
      { phase: "Zero Article with Proper Nouns", duration: "15–22 min", activity: "Practice: 'I visited China' not 'the China', but 'the United States' (exception: countries with 'the')" },
      { phase: "Common Mistakes Drill", duration: "22–28 min", activity: "Fix sentences: 'I live in the Beijing' → 'I live in Beijing'" },
      { phase: "Mixed Practice", duration: "28–35 min", activity: "Students write 5 sentences with proper nouns, 5 with common nouns, alternating" },
      { phase: "Speaking Homework", duration: "35–40 min", activity: "Describe your city/country using proper nouns; homework: 3-5 sentences" },
    ],
  },
  homework: {
    title: "Proper Nouns Homework",
    titleZh: "专有名词作业",
    tasks: [
      {
        type: "writing",
        instruction: "Write 10 sentences: 5 mentioning specific places/people (proper nouns), 5 about general things (common nouns). Use the correct capitalization.",
        instructionZh: "写10个句子：5个提到具体地点/人名（专有名词），5个关于一般事物（普通名词）。使用正确的大小写。",
        sampleAnswer: "Proper: I live in Beijing. She is my friend Xiao Ming. We went to Shanghai. It was beautiful. My hometown is Guangzhou. Common: I like cats. The city is beautiful. I have many books. People are happy. Cities have parks.",
      },
      {
        type: "speaking",
        instruction: "Record 30 seconds introducing your country/city. Use proper nouns correctly. Example: 'I am from Canada. My city is Vancouver. Vancouver is beautiful.'",
        instructionZh: "录制30秒介绍你的国家/城市。正确使用专有名词。例如：'I am from Canada. My city is Vancouver. Vancouver is beautiful.'",
      },
    ],
  },
  slides: [
    {
      id: "slide-1-welcome",
      slideNumber: 1,
      type: "TITLE",
      sectionTitle: "1. Welcome",
      title: "Proper Nouns & Capitalization",
      titleZh: "专有名词与大小写",
      content:
        "Proper nouns are special words that name specific things — and they're always capitalized! In English, we capitalize names of people, places, organizations, days, months, and more. Today: learn when and how to capitalize them correctly.",
      contentZh:
        "专有名词是指特定事物的名称——它们总是要大写的！在英语中，我们大写人名、地名、组织名、日期、月份等。今天：学习正确地何时和如何大写。",
      keyPoints: ["Always capitalize: Beijing, Shakespeare, Monday, China", "Never capitalize: cat, dog, city, happy", "Zero article: 'Beijing' not 'the Beijing'"],
    },
    {
      id: "slide-2-common-vs-proper",
      slideNumber: 2,
      type: "RULE",
      sectionTitle: "2. Common Nouns vs Proper Nouns",
      title: "Two Types of Nouns",
      titleZh: "两种名词",
      content:
        "**Common Nouns**: General names for things. NOT capitalized unless they start a sentence.\n\n  Examples: cat, dog, city, day, year, company\n\n**Proper Nouns**: Specific names. ALWAYS capitalized.\n\n  Examples: Fluffy (my cat), London, Valentine's Day, 2024, Microsoft, Google\n\nThink: Is this the general category, or a specific name?",
      contentZh:
        "**普通名词**：事物的一般名称。句首之外不大写。\n\n  例子：cat, dog, city, day, year, company\n\n**专有名词**：具体名称。总是大写。\n\n  例子：Fluffy（我的猫），London，情人节，2024年，Microsoft，Google\n\n思考：这是一般类别，还是具体名称？",
      keyPoints: ["Common nouns: uncapitalized (cat, dog)", "Proper nouns: always capitalized (London, Microsoft)", "Ask: specific or general?"],
    },
    {
      id: "slide-3-capitalization-rules",
      slideNumber: 3,
      type: "EXPLANATION",
      sectionTitle: "3. Capitalization Rules for Proper Nouns",
      title: "What Gets Capitalized",
      titleZh: "什么要大写",
      content:
        "**People (Names):**\n  John Smith, President Biden, Dr. Li\n\n**Places:**\n  Cities: Beijing, New York, Sydney\n  Countries: China, Brazil, Canada\n  Countries with 'the': the United States, the Philippines\n\n**Days, Months, Years:**\n  Monday, Tuesday, Christmas Day, 2024, Spring\n\n**Organizations:**\n  Microsoft, Amazon, The Red Cross, Communist Party\n\n**Historical Events:**\n  World War II, the Renaissance, the French Revolution",
      contentZh:
        "**人名：**\n  John Smith, President Biden, Dr. Li\n\n**地点：**\n  城市：Beijing, New York, Sydney\n  国家：China, Brazil, Canada\n  带'the'的国家：the United States, the Philippines\n\n**日期、年份：**\n  Monday, Tuesday, Christmas Day, 2024, Spring\n\n**组织：**\n  Microsoft, Amazon, The Red Cross, Communist Party\n\n**历史事件：**\n  World War II, the Renaissance, the French Revolution",
    },
    {
      id: "slide-4-zero-article",
      slideNumber: 4,
      type: "RULE",
      sectionTitle: "4. Zero Article with Proper Nouns",
      title: "No 'the' Before Proper Nouns",
      titleZh: "专有名词前不用冠词",
      content:
        "When we use a proper noun, we typically DON'T use an article before it:\n\n  ❌ I live in the Beijing. (Wrong)\n  ✅ I live in Beijing. (Correct)\n\n  ❌ She is from the China. (Wrong)\n  ✅ She is from China. (Correct)\n\nBut some countries with 'the' are exceptions:\n\n  the United States, the Philippines, the Netherlands, the United Kingdom\n\nWith these, we keep 'the' because it's part of the official name.",
      contentZh:
        "当我们用专有名词时，通常不在前面加冠词：\n\n  ❌ I live in the Beijing. (Wrong)\n  ✅ I live in Beijing. (Correct)\n\n  ❌ She is from the China. (Wrong)\n  ✅ She is from China. (Correct)\n\n但有些国家带'the'是例外：\n\n  the United States, the Philippines, the Netherlands, the United Kingdom\n\n这些我们保留'the'，因为这是官方名称的一部分。",
    },
    {
      id: "slide-5-common-mistakes",
      slideNumber: 5,
      type: "COMMON_MISTAKE",
      sectionTitle: "5. Common Mistakes to Avoid",
      title: "5 Mistakes with Proper Nouns",
      titleZh: "专有名词常见5个错误",
      mistakes: [
        {
          wrong: "i went to beijing",
          right: "I went to Beijing",
          explanation: "Always capitalize proper nouns and the first word of a sentence.",
          explanationZh: "专有名词和句首单词总是要大写的。",
          why: "Chinese speakers often lowercase all words because Chinese doesn't use capitalization.",
        },
        {
          wrong: "I live in the shanghai",
          right: "I live in Shanghai",
          explanation: "Cities are proper nouns — no article before them.",
          explanationZh: "城市是专有名词——前面不加冠词。",
          why: "Learners overgeneralize 'the' from 'the city'.",
        },
        {
          wrong: "My friend is Dr.Li",
          right: "My friend is Dr. Li",
          explanation: "Always leave a space after periods in titles like Dr.",
          explanationZh: "职称如Dr.后要留空格。",
          why: "Chinese titles don't have spaces.",
        },
        {
          wrong: "I studied at the Harvard",
          right: "I studied at Harvard",
          explanation: "Harvard University is a proper noun — no article.",
          explanationZh: "Harvard University是专有名词——不加冠词。",
          why: "'The' sounds natural for institutions but is incorrect.",
        },
        {
          wrong: "we visited the christmas day",
          right: "We visited Christmas Day",
          explanation: "Christmas Day is a proper noun (holiday + day name).",
          explanationZh: "Christmas Day是专有名词（节日+日期）。",
          why: "Holidays are treated as proper nouns.",
        },
      ],
    },
    {
      id: "slide-6-scenario",
      slideNumber: 6,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "6. Real Life Situation",
      title: "Talking About Your Hometown",
      titleZh: "谈论你的家乡",
      scenario: {
        context: "Two friends meet at a language exchange and discuss where they're from.",
        contextZh: "两个朋友在语言交换会上讨论他们来自哪里。",
        dialogue: [
          {
            speaker: "A",
            en: "Where are you from?",
            zh: "你来自哪里？",
            isTargetGrammar: true,
          },
          {
            speaker: "B",
            en: "I'm from Toronto, Canada.",
            zh: "我来自加拿大 Toronto。",
            isTargetGrammar: true,
          },
          {
            speaker: "A",
            en: "Oh, I've never been there! I'm from Shanghai, China.",
            zh: "哦，我从来没去过那里！我来自中国上海。",
            isTargetGrammar: true,
          },
          {
            speaker: "B",
            en: "Shanghai is a big city. Have you visited Beijing?",
            zh: "上海是个大城市。你去过北京吗？",
            isTargetGrammar: true,
          },
          {
            speaker: "A",
            en: "Yes, I visited Beijing last year. It was amazing!",
            zh: "是的，我去年去过北京。太惊人了！",
            isTargetGrammar: true,
          },
          {
            speaker: "B",
            en: "When is your next trip to Canada?",
            zh: "你下次去加拿大是在哪一天？",
            isTargetGrammar: true,
          },
        ],
        task: "Notice: 'Toronto', 'Canada', 'Shanghai', 'China', 'Beijing' are all proper nouns, capitalized, no articles.",
        taskZh: "注意：Toronto、Canada、Shanghai、China、Beijing都是专有名词，首字母大写，不加冠词。",
      },
    },
    {
      id: "slide-7-conversation",
      slideNumber: 7,
      type: "CONVERSATION",
      sectionTitle: "7. Pattern Practice",
      title: "Meeting Someone New",
      titleZh: "认识新朋友",
      scenario: {
        context: "Pattern: 'Where are you from?' 'I'm from [Proper Noun].' 'I'm from [Proper Noun].'",
        contextZh: "模式：'Where are you from?' 'I'm from [专有名词].' 'I'm from [专有名词].'",
        dialogue: [
          { speaker: "A", en: "Hello! Where are you from?", zh: "Hello！你来自哪里？", isTargetGrammar: true },
          { speaker: "B", en: "I'm from India.", zh: "我来自印度。", isTargetGrammar: true },
          { speaker: "A", en: "Nice! I'm from Australia.", zh: " nice！我来自澳大利亚。", isTargetGrammar: true },
          { speaker: "B", en: "What do you do in Australia?", zh: "澳大利亚有什么好玩的吗？", isTargetGrammar: false },
          { speaker: "A", en: "I study at University of Melbourne.", zh: "我在墨尔本大学学习。", isTargetGrammar: true },
        ],
        task: "Practice the pattern: State your proper noun origin with I'm from + [Proper Noun].",
        taskZh: "练习模式：用 I'm from + [专有名词]说出你的来源。",
      },
    },
    {
      id: "slide-8-pte",
      slideNumber: 8,
      type: "EXPLANATION",
      sectionTitle: "8. PTE Relevance",
      title: "Capitalization in PTE",
      titleZh: "PTE中的大小写",
      content:
        "PTE Academic tests proper noun capitalization constantly:\n\n**READING**: Fill in the blank with correct capitalization.\n  '___ is the capital of Italy.' → 'Rome' (proper noun)\n\n**WRITING**: Dictation test for capitalization.\n  'I visited _____ last summer.' → 'Paris' (capitalized)\n\n**LISTENING**: Identify whether speaker said 'the' or no article.\n  'We're going to _____' — is it 'China' or 'the China'?\n\n**SPEAKING**: Describe images with proper nouns.\n  'This photo shows _____.' → 'The Great Wall of China'",
      contentZh:
        "PTE Academic不断测试专有名词大小写：\n\n**阅读**：填空正确的大小写。\n  '___ is the capital of Italy.' → 'Rome'（专有名词）\n\n**写作**：听写大小写。\n  'I visited _____ last summer.' → 'Paris'（大写）\n\n**听力**：辨认说话者说没有还是加了'the'。\n  'We're going to _____' — 是 'China' 还是 'the China'?\n\n**口语**：描述图片中的专有名词。\n  'This photo shows _____.' → 'The Great Wall of China'",
    },
    {
      id: "slide-9-drills",
      slideNumber: 9,
      type: "EXPLANATION",
      sectionTitle: "9. Drills",
      title: "Practice Sets",
      titleZh: "练习题",
      content:
        "**Set 1: Capitalize the Proper Nouns**\n\n1. I went to ___ (new york) in summer. → I went to New York.\n2. ___ (beijing) is a big city. → Beijing is a big city.\n3. They work at ___ (microsoft). → They work at Microsoft.\n4. ___ (christmas) is in december. → Christmas is in December.\n5. I visited ___ (the eiffel tower). → I visited the Eiffel Tower.\n\n**Set 2: Fix the Mistakes**\n\n1. I live in the paris → I live in Paris\n2. She is from china → She is from China\n3. we went to the disneyland → We went to Disneyland\n4. My teacher is mr. smith → My teacher is Mr. Smith",
      contentZh:
        "**练习1：大写专有名词**\n\n1. I went to ___ (new york) in summer. → I went to New York。\n2. ___ (beijing) is a big city. → Beijing is a big city。\n3. They work at ___ (microsoft). → They work at Microsoft。\n4. ___ (christmas) is in december. → Christmas is in December。\n5. I visited ___ (the eiffel tower). → I visited the Eiffel Tower。\n\n**练习2：纠正错误**\n\n1. I live in the paris → I live in Paris\n2. She is from china → She is from China\n3. we went to the disneyland → We went to Disneyland\n4. My teacher is mr. smith → My teacher is Mr. Smith",
    },
    {
      id: "slide-10-speaking",
      slideNumber: 10,
      type: "SPEAKING_DRILL",
      sectionTitle: "10. Speaking Practice",
      title: "Introduce Your City",
      titleZh: "介绍你的城市",
      speakingDrill: {
        prompt: "Describe your city/country in 60 seconds. Include: location, famous places, and something unique. Use proper nouns correctly!",
        targetSentence:
          "I am from Seattle, Washington. Seattle is a beautiful city on the west coast of the United States. It's famous for the Space Needle and coffee culture. I love my hometown.",
        targetSentenceZh: "我来自美国华盛顿州西雅图。西雅图是美国西海岸一座美丽的城市。它以空间针塔和咖啡文化闻名。我爱我的家乡。",
        tips: "Use 'I am from' + proper noun (Seattle, United States). No article before city name. Capitalize correctly!",
      },
    },
    {
      id: "slide-11-quiz",
      slideNumber: 11,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "11. Quick Quiz",
      title: "Choose the Correct Capitalization",
      titleZh: "选择正确的大小写",
      question: {
        question: "I visited ___",
        questionZh: "我访问了___",
        options: ["a. paris", "b. Paris", "c. paris the"],
        correctIndex: 1,
        explanation: "City names are proper nouns and must be capitalized.",
        explanationZh: "城市名是专有名词，必须大写。",
        xpReward: 10,
      },
    },
    {
      id: "slide-12-challenge",
      slideNumber: 12,
      type: "CHALLENGE",
      sectionTitle: "12. Week Challenge",
      title: "20 Sentences Challenge",
      titleZh: "20句话挑战",
      content:
        "Write 20 sentences about famous places around the world. Make sure you:\n\n1. Capitalize ALL proper nouns correctly\n2. Use zero article with city names (Paris, not the Paris)\n3. Use 'the' when it's part of official names (The Louvre, The Pentagon)\n\nFor example:\n- The Eiffel Tower is in Paris.\n- I love visiting Sydney.\n- The Great Wall of China is amazing.",
      contentZh:
        "写20句话关于世界各地著名景点的句子。确保你：\n\n1. 正确大写所有专有名词\n2. 用零冠词提城市名（Paris, not the Paris)\n3. 在官方名称中使用'the'（The Louvre, The Pentagon）\n\n例如：\n- The Eiffel Tower is in Paris。\n- I love visiting Sydney。\n- The Great Wall of China is amazing。",
    },
  ],
};