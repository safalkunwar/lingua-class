export const ieltsSpeakingPart1 = {
  moduleTitle: "IELTS Speaking Part 1",
  moduleDescription: "Introduction and interview — 4–5 minutes, 3 topic areas.",
  topics: [
    {
      id: "hometown",
      title: "Hometown",
      icon: "🏠",
      color: "from-amber-400 to-orange-400",
      description: "Talk about where you come from, what it's like, and how it has changed.",
      cefrLevel: "A2",
      estimatedTime: "20 min",
      introduction: {
        whyIELTSAsks: "Examiners use this topic to warm you up and assess your ability to describe places, use past/present tenses, and give extended answers.",
        whatExaminerWants: "Clear descriptions, a range of vocabulary for places, and coherent answers with reasons and examples.",
        commonMistakes: "Giving one-word answers or repeating the same structures without elaboration.",
        bandComparison: {
          band5: "Short answers with limited vocabulary and some repetition.",
          band7: "Fluent description with appropriate tenses and some detail.",
          band9: "Precise, vivid description with idiomatic language and seamless linking.",
        },
        chineseExplanation: "考官通过这个话题热身，考察你对地点的描述能力以及时态的使用。",
      },
      frequentlyAskedQuestions: [
        "Where is your hometown?",
        "Is it a big city or a small town?",
        "What do you like about your hometown?",
        "Has your hometown changed since you were a child?",
        "Do you think it is a good place to live?",
        "What can visitors do there?",
      ],
      speakingStructure: {
        flow: ["Answer directly", "Add a reason", "Give an example", "Add a personal touch"],
        whyItWorks: "Direct + reason + example gives the examiner natural fluency and enough content for Part 1.",
        bandExamples: [
          { band: 5, label: "Band 5", answer: "It's okay. Not too big.", explanation: "Short and repetitive; lacks detail or reasons." },
          { band: 7, label: "Band 7", answer: "It's a medium-sized city. It's convenient because there are good transport links, but it still retains a village-like atmosphere in the old town.", explanation: "Good range of vocabulary and a clear contrast." },
          { band: 9, label: "Band 9", answer: "I come from a mid-sized city that straddles the river. It's got the buzz of urban amenities without losing that charming, almost village-like community feel in the historic quarters.", explanation: "Precise adjectives, idiomatic phrases, and a sophisticated tone." },
        ],
      },
      sentenceStarters: [
        "I'm from...",
        "It's roughly about...",
        "One of the best things is...",
        "Notably,...",
        "If I had to describe it in one word, it would be...",
      ],
      vocabulary: [
        { english: "bustling", ipa: "/ˈbʌslɪŋ/", chinese: "繁华的", meaning: "full of activity and noise", exampleSentence: "The city center is bustling with life.", commonCollocations: ["bustling center", "bustling street"] },
        { english: "scenic", ipa: "/ˈsiːnɪk/", chinese: "风景优美的", meaning: "having attractive natural scenery", exampleSentence: "The coastal road is very scenic.", commonCollocations: ["scenic route", "scenic spot"] },
        { english: "sprawl", ipa: "/sprɔːl/", chinese: "扩张", meaning: "to spread out over a large area", exampleSentence: "Urban sprawl has changed the landscape.", commonCollocations: ["urban sprawl", "sprawl across"] },
        { english: "convenient", ipa: "/kənˈviːniənt/", chinese: "方便的", meaning: "easy to use or get to", exampleSentence: "Public transport is very convenient here.", commonCollocations: ["convenient access", "convenient location"] },
        { english: "tight-knit", ipa: "/ˌtaɪt ˈnɪt/", chinese: "关系紧密的", meaning: "closely connected and supportive", exampleSentence: "It's a tight-knit community.", commonCollocations: ["tight-knit community", "tight-knit family"] },
      ],
      collocations: [
        { phrase: "bustling marketplace", chinese: "热闹的集市", example: "The bustling marketplace sells fresh food." },
        { phrase: "scenic route", chinese: "风景优美的路线", example: "We took the scenic route along the coast." },
        { phrase: "urban sprawl", chinese: "城市扩张", example: "Urban sprawl has changed the skyline." },
        { phrase: "convenient access", chinese: "便利的通道", example: "The station has convenient access to the airport." },
        { phrase: "tight-knit community", chinese: "关系紧密的社区", example: "It's a tight-knit community." },
      ],
      universalPhrases: ["I suppose...", "That depends on...", "To be honest,...", "If I had to choose,..."],
      grammarBox: [
        {
          title: "Present Simple vs Present Continuous",
          titleChinese: "一般现在时 vs 现在进行时",
          visualType: "comparison",
          content: "Use present simple for permanent situations and present continuous for temporary trends.",
          examples: [
            { english: "I live near the beach.", chinese: "我住在海边。" },
            { english: "Right now, the area is becoming more modern.", chinese: "如今，这个地区正变得更加现代化。" },
          ],
          commonMistakes: [
            { mistake: "I am living here since childhood.", correction: "I have lived here since childhood.", chineseExplanation: "since + 时间点 需与完成时连用。" },
          ],
        },
      ],
      visualExplanations: [
        { id: "hometown-map", title: "Describe in 3 Layers", content: "1. Location and size. 2. Landmarks and atmosphere. 3. Personal memory.", visualType: "mindmap" },
      ],
      nativeSpeakerTips: [
        {
          category: "Description Phrases",
          alternatives: [
            { insteadOf: "It is nice", useInstead: "It is remarkably charming" },
            { insteadOf: "It is busy", useInstead: "It is bustling with activity" },
          ],
        },
      ],
      bandUpgrade: [
        {
          question: "Is your hometown a good place to live?",
          bands: [
            { band: 5, label: "Band 5", answer: "Yes, it is good because shops are near.", explanation: "Basic ideas and weak grammar." },
            { band: 7, label: "Band 7", answer: "Yes, I think so. Everything you need — shops, parks, and public transport — is within walking distance.", explanation: "Good use of listing and detail." },
            { band: 9, label: "Band 9", answer: "Absolutely; it combines the convenience of modern services with the warmth of a close-knit neighborhood, which is increasingly rare.", explanation: "Sophisticated vocabulary and evaluative tone." },
          ],
        },
      ],
      pronunciation: [
        {
          feature: "Word stress",
          explanation: "Mark stress on adjectives and nouns to sound clearer.",
          examples: [
            { word: "con-VEN-ient", ipa: "/kənˈviːniənt/", tip: "Stress the second syllable." },
            { word: "SCEN-ic", ipa: "/ˈsiːnɪk/", tip: "Stress the first syllable." },
          ],
          chineseTips: "注意重音落在形容词和名词上，会让表达更清晰。",
        },
      ],
      conversationExpansions: [
        {
          question: "Do you like your hometown?",
          oneWord: "Yes.",
          oneSentence: "Yes, I love my hometown because it is peaceful.",
          threeSentences: "Yes, I do. There is fresh air and plenty of green space. It makes me feel relaxed.",
          band7: "Yes, I really enjoy living there. It's relatively small, but it has the essential amenities I need, and I find the pace of life much more relaxed than in larger cities.",
          band9: "Absolutely. While it's modest in size compared with major cities, it offers an exceptionally high quality of life, abundant greenery, and a real sense of belonging.",
        },
      ],
      dailyDrills: [
        { type: "30-second", title: "30-Second Hometown Pitch", description: "Describe your hometown in 30 seconds.", prompt: "Describe your hometown in 30 seconds.", chineseInstruction: "用30秒介绍你的家乡。" },
      ],
      commonMistakes: [
        { mistake: "Using only present simple for everything.", whyItHappens: "Learners avoid continuous forms.", correction: "Mix present simple for facts and present continuous for changing trends.", chineseExplanation: "用一般现在时陈述事实，用进行时描述变化。" },
      ],
      visualCards: [
        { english: "hometown", icon: "🏠", color: "amber", emoji: "🏠", miniExplanation: "Where you grew up.", exampleSentence: "My hometown is known for its beautiful lakes.", chinese: "家乡", commonCollocations: ["hometown pride", "hometown crowd"] },
      ],
      memorySection: {
        quickFormulas: ["Direct answer + Because + Example + Feeling"],
        mindMapNodes: { central: "Hometown", branches: ["Location", "Features", "Changes", "Feelings"] },
        flashcards: [
          { front: "scenic", back: "having attractive natural scenery; 风景优美的" },
          { front: "bustling", back: "full of activity and noise; 繁华的" },
        ],
        mnemonics: [
          { word: "scenic", trick: "Sounds like 'scene' — relates to views." },
          { word: "bustling", trick: "'Bus' + 'tling' — full of movement." },
        ],
        cheatSheet: [
          "Use a mix of present simple and present continuous.",
          "Add reasons to avoid short answers.",
          "Use descriptive adjectives rather than just 'nice' or 'good'.",
        ],
      },
      mockTests: [
        {
          id: "hometown-mt1",
          title: "Full Part 1 Mock Test — Hometown",
          duration: 240,
          questions: [
            "Where is your hometown?",
            "Do you like your hometown?",
            "What do you like most about your hometown?",
            "Has your hometown changed over the years?",
          ],
          transcript: "Examiner: Where is your hometown?\nStudent: I'm from a mid-sized city in the north of the country.",
          evaluationCriteria: [
            { criterion: "Fluency & Coherence", weight: 25, description: "Can you speak at length without long pauses?" },
            { criterion: "Lexical Resource", weight: 25, description: "Do you use a range of vocabulary appropriate to the topic?" },
            { criterion: "Grammatical Range", weight: 25, description: "Can you mix tenses accurately?" },
            { criterion: "Pronunciation", weight: 25, description: "Is your speech clear and easy to understand?" },
          ],
          sampleAnswer: "I come from a mid-sized city in the north of Vietnam. It's not as big as Hanoi or Ho Chi Minh City, but it has everything I need, including good schools, hospitals, and parks. Over the past decade, it has changed dramatically — new roads, tall buildings, and more cafés have appeared.",
        },
      ],
    },
    {
      id: "food",
      title: "Food & Cooking",
      icon: "🍜",
      color: "from-red-400 to-pink-400",
      description: "Discuss your favorite foods, cooking habits, and dining preferences.",
      cefrLevel: "A2",
      estimatedTime: "25 min",
      introduction: {
        whyIELTSAsks: "This topic tests your ability to describe tastes, preferences, and everyday routines.",
        whatExaminerWants: "Rich food vocabulary, comparisons, and coherent opinions.",
        commonMistakes: "Repetitive use of 'delicious' without nuance.",
        bandComparison: {
          band5: "Basic food vocabulary; short answers.",
          band7: "Good variety of descriptors and reasons.",
          band9: "Precise, nuanced language with idiomatic expressions.",
        },
        chineseExplanation: "此题考察你对食物描述、表达偏好及日常节奏的能力。",
      },
      frequentlyAskedQuestions: [
        "Do you like cooking?",
        "What is your favorite food?",
        "Do you prefer eating at home or in restaurants?",
        "What kind of food did you eat as a child?",
      ],
      speakingStructure: {
        flow: ["Answer", "Describe style/taste", "Compare to another", "Give memory or opinion"],
        whyItWorks: "Descriptive detail + comparison shows wider vocabulary range.",
        bandExamples: [
          { band: 5, label: "Band 5", answer: "I like pho. It is tasty.", explanation: "Very limited vocabulary." },
          { band: 7, label: "Band 7", answer: "I'm a huge fan of pho. The broth is aromatic and the herbs add freshness. It's the ultimate comfort dish for me.", explanation: "Good adjectives and personal feeling." },
          { band: 9, label: "Band 9", answer: "I'm quite passionate about Vietnamese cuisine, particularly pho. The depth of flavor from the simmered bone broth, combined with fresh herbs, makes it the perfect harmony of taste and texture.", explanation: "Sophisticated vocabulary and precise description." },
        ],
      },
      sentenceStarters: ["I'm a big fan of...", "What I love most is...", "It's hard to beat...", "Compared with...", "If I had to pick just one,..."],
      vocabulary: [
        { english: "aromatic", ipa: "/ˌærəˈmætɪk/", chinese: "芳香的", meaning: "having a pleasant, strong smell", exampleSentence: "The broth is aromatic and rich.", commonCollocations: ["aromatic broth", "aromatic herb"] },
        { english: "savory", ipa: "/ˈseɪvəri/", chinese: "咸鲜的", meaning: "salty or spicy rather than sweet", exampleSentence: "The dish has a savory flavor.", commonCollocations: ["savory dish", "savory snack"] },
        { english: "zesty", ipa: "/ˈzesti/", chinese: "味道强烈的", meaning: "having a strong, pleasant, and somewhat sharp flavor", exampleSentence: "The dressing is zesty and fresh.", commonCollocations: ["zesty dressing", "zesty lemon"] },
        { english: "succulent", ipa: "/ˈsʌkjələnt/", chinese: "多汁的", meaning: "tender and juicy", exampleSentence: "The meat was perfectly cooked and succulent.", commonCollocations: ["succulent meat", "succulent fruit"] },
        { english: "palate", ipa: "/ˈpælət/", chinese: "味觉", meaning: "the sense of taste", exampleSentence: "The dish cleanses the palate.", commonCollocations: ["cleanse the palate", "refined palate"] },
      ],
      collocations: [
        { phrase: "aromatic broth", chinese: "香浓的汤底", example: "The aromatic broth takes hours to prepare." },
        { phrase: "home-cooked meal", chinese: "家常饭", example: "There's nothing like a home-cooked meal." },
        { phrase: "local cuisine", chinese: "本地菜肴", example: "I love exploring the local cuisine." },
        { phrase: "dining out", chinese: "外出就餐", example: "We go dining out every Friday." },
        { phrase: "flavor profile", chinese: "风味特征", example: "The dish has a complex flavor profile." },
      ],
      universalPhrases: ["I'm a big fan of...", "If I had to choose,...", "From time to time,..."],
      grammarBox: [
        {
          title: "Prefer vs Would Rather",
          titleChinese: "Prefer vs Would Rather",
          visualType: "comparison",
          content: "Use prefer + gerund or noun, and would rather + base verb.",
          examples: [
            { english: "I prefer eating at home.", chinese: "我更喜欢在家吃。" },
            { english: "I would rather cook than go out.", chinese: "我宁愿做饭也不愿出去吃。" },
          ],
          commonMistakes: [
            { mistake: "I prefer to eat at home than out.", correction: "I prefer eating at home to eating out.", chineseExplanation: "prefer ... to ... 结构更地道。" },
          ],
        },
      ],
      visualExplanations: [
        { id: "food-vocab-tree", title: "Taste Vocabulary Tree", content: "Sweet, savory, spicy, bitter, zesty — each with example items.", visualType: "mindmap" },
      ],
      nativeSpeakerTips: [
        {
          category: "Food Vocabulary",
          alternatives: [
            { insteadOf: "tastes good", useInstead: "is absolutely delicious" },
            { insteadOf: "I like spicy food", useInstead: "I'm really into spicy food" },
          ],
        },
      ],
      bandUpgrade: [
        {
          question: "What kind of food do you like?",
          bands: [
            { band: 5, label: "Band 5", answer: "I like rice and meat.", explanation: "No description beyond naming items." },
            { band: 7, label: "Band 7", answer: "I'm pretty fond of Vietnamese food. I love pho because the broth is aromatic and the herbs make it really fresh.", explanation: "Good adjectives and reason." },
            { band: 9, label: "Band 9", answer: "I'm quite passionate about Vietnamese cuisine. The balance of herbs, textures, and slow-cooked broths is what makes it exceptional for me.", explanation: "Sophisticated register and specific details." },
          ],
        },
      ],
      pronunciation: [
        {
          feature: "Th sound and linking",
          explanation: "Practice 'the broth' and linked phrases like 'would rather'.",
          examples: [
            { word: "aromatic", ipa: "/ˌærəˈmætɪk/", tip: "Stress the fourth syllable." },
            { word: "succulent", ipa: "/ˈsʌkjələnt/", tip: "Stress the first syllable." },
          ],
          chineseTips: "练习浊擦音和连读，例如 'the broth' 和 'would rather'。",
        },
      ],
      conversationExpansions: [
        {
          question: "Do you like cooking?",
          oneWord: "Yes.",
          oneSentence: "Yes, I enjoy cooking because it relaxes me.",
          threeSentences: "Yes, I enjoy cooking. It allows me to be creative, and I find it relaxing after a busy day. I especially love making Vietnamese soups.",
          band7: "I do, especially Vietnamese dishes. Cooking allows me to unwind and share something meaningful with family or friends.",
          band9: "Cooking is one of my favorite pastimes; it's therapeutic and gives me a chance to experiment with flavors and textures.",
        },
      ],
      dailyDrills: [
        { type: "30-second", title: "Describe Your Favorite Dish", description: "Describe your favorite dish in 30 seconds.", prompt: "Describe your favorite dish in 30 seconds.", chineseInstruction: "在30秒内描述你最爱的菜肴。" },
      ],
      commonMistakes: [
        { mistake: "Using only 'delicious' to describe all food.", whyItHappens: "Limited vocabulary range.", correction: "Use rich adjectives like aromatic, succulent, zesty, savory.", chineseExplanation: "积累丰富的食物形容词，而不仅仅是 delicious。" },
      ],
      visualCards: [
        { english: "food", icon: "🍜", color: "red", emoji: "🍜", miniExplanation: "Cuisine and flavors.", exampleSentence: "I prefer healthy, home-cooked food.", chinese: "食物", commonCollocations: ["home-cooked meal", "local cuisine"] },
      ],
      memorySection: {
        quickFormulas: ["Prefer + ing / to + name", "Would rather + verb than + verb"],
        mindMapNodes: { central: "Food", branches: ["Types", "Flavors", "Meals", "Preferences"] },
        flashcards: [
          { front: "aromatic", back: "having a pleasant smell; 芳香的" },
          { front: "succulent", back: "juicy and tender; 多汁的" },
        ],
        mnemonics: [
          { word: "aromatic", trick: "Aroma + tic — relates to smell." },
          { word: "succulent", trick: "Succ (suck) the juice out — juicy." },
        ],
        cheatSheet: [
          "Mix simple and descriptive adjectives.",
          "Compare cuisines rather than listing them.",
          "Use personal memories for emotional connection.",
        ],
      },
      mockTests: [
        {
          id: "food-mt1",
          title: "Full Part 1 Mock Test — Food & Cooking",
          duration: 240,
          questions: [
            "Do you like cooking?",
            "What's your favorite food?",
            "How often do you eat out?",
            "Do you prefer eating at home or in restaurants?",
          ],
          transcript: "Examiner: Do you like cooking?\nStudent: Yes, I find it therapeutic. I mostly cook Vietnamese dishes.",
          evaluationCriteria: [
            { criterion: "Fluency & Coherence", weight: 25, description: "Do you maintain a natural pace and connect ideas?" },
            { criterion: "Lexical Resource", weight: 30, description: "Are food-related vocabulary choices varied?" },
            { criterion: "Grammatical Range", weight: 25, description: "Do you mix tenses accurately?" },
            { criterion: "Pronunciation", weight: 20, description: "Is your intonation clear when describing tastes?" },
          ],
          sampleAnswer: "I really enjoy cooking, especially on weekends. I love making pho because preparing the broth requires patience, but the result is incredibly rewarding. I find the process relaxing after a busy week.",
        },
      ],
    },
    {
      id: "sports",
      title: "Sports & Exercise",
      icon: "⚽",
      color: "from-green-400 to-emerald-400",
      description: "Talk about sports you play or watch, exercise habits, and fitness.",
      cefrLevel: "A2",
      estimatedTime: "20 min",
      introduction: {
        whyIELTSAsks: "This topic tests your ability to talk about activities, routines, and opinions.",
        whatExaminerWants: "Specific sports vocabulary and reasons for preferences.",
        commonMistakes: "Vague answers without concrete examples.",
        bandComparison: {
          band5: "Basic sports nouns; short sentences.",
          band7: "Good description of routines and preferences.",
          band9: "Energetic, vivid language with idiomatic expressions.",
        },
        chineseExplanation: "这个主题考察你谈论活动、日常和观点的能力。",
      },
      frequentlyAskedQuestions: [
        "Do you play any sports?",
        "What sport do you watch on TV?",
        "Do you think exercise is important?",
        "How often do you exercise?",
      ],
      speakingStructure: {
        flow: ["Name the sport", "Describe frequency", "Compare to another", "Give a memory"],
        whyItWorks: "Linking frequency and memory creates natural extended answers.",
        bandExamples: [
          { band: 5, label: "Band 5", answer: "I play football. I play sometimes.", explanation: "Very short and repetitive." },
          { band: 7, label: "Band 7", answer: "I play badminton with friends once or twice a week. It keeps me fit without being too exhausting.", explanation: "Good detail and reasons." },
          { band: 9, label: "Band 9", answer: "I'm a keen badminton player. I try to get to the courts at least a couple of times a week because it offers a brilliant cardiovascular workout without the monotony of a treadmill.", explanation: "Vivid language and idiomatic expression." },
        ],
      },
      sentenceStarters: ["I'm a keen...", "I try to... at least...", "I find it...", "What I enjoy most is..."],
      vocabulary: [
        { english: "workout", ipa: "/ˈwɜːkaʊt/", chinese: "锻炼", meaning: "a session of physical exercise", exampleSentence: "I do a quick workout every morning.", commonCollocations: ["cardio workout", "gym workout"] },
        { english: "cardiovascular", ipa: "/ˌkɑːrdiəʊˈvæskjələr/", chinese: "心血管的", meaning: "relating to the heart and blood vessels", exampleSentence: "Swimming is great cardiovascular exercise.", commonCollocations: ["cardiovascular health", "cardiovascular exercise"] },
        { english: "monotony", ipa: "/məˈnɒtəni/", chinese: "单调乏味", meaning: "lack of variety and interest", exampleSentence: "I avoid the monotony of gym routines.", commonCollocations: ["break the monotony", "relieve monotony"] },
        { english: "competing", ipa: "/kəmˈpiːtɪŋ/", chinese: "竞争性", meaning: "taking part in a competition", exampleSentence: "I love competing in local tournaments.", commonCollocations: ["competing team", "competing in"] },
        { english: "dribble", ipa: "/ˈdrɪbl/", chinese: "运球", meaning: "to move with the ball using small taps or pushes", exampleSentence: "He dribbled past three defenders.", commonCollocations: ["dribble the ball", "dribble past"] },
      ],
      collocations: [
        { phrase: "cardiovascular workout", chinese: "有氧运动", example: "Running is a good cardiovascular workout." },
        { phrase: "local tournament", chinese: "地方比赛", example: "He plays in a local tournament." },
        { phrase: "fitness routine", chinese: "健身计划", example: "She follows a strict fitness routine." },
        { phrase: "team sport", chinese: "团队运动", example: "Football is a popular team sport." },
      ],
      universalPhrases: ["I usually...", "Whenever I can,...", "I find it...", "If I had to choose,..."],
      grammarBox: [
        {
          title: "Present Perfect for Experiences",
          titleChinese: "现在完成时与经历",
          visualType: "flowchart",
          content: "Use present perfect to talk about life experiences and past actions with present relevance.",
          examples: [
            { english: "I've played tennis since I was five.", chinese: "我从五岁开始打网球。" },
            { english: "Have you ever tried rock climbing?", chinese: "你试过攀岩吗？" },
          ],
          commonMistakes: [
            { mistake: "I am playing tennis since childhood.", correction: "I have played tennis since childhood.", chineseExplanation: "since 与完成时连用。" },
          ],
        },
      ],
      visualExplanations: [
        { id: "sports-flow", title: "How to Describe an Exercise Routine", content: "Frequency + Activity + Feeling + Result.", visualType: "flowchart" },
      ],
      nativeSpeakerTips: [
        {
          category: "Sports Colloquialisms",
          alternatives: [
            { insteadOf: "I play regularly", useInstead: "I hit the courts every week" },
            { insteadOf: "It is fun", useInstead: "It is a blast" },
          ],
        },
      ],
      bandUpgrade: [
        {
          question: "What sport do you enjoy?",
          bands: [
            { band: 5, label: "Band 5", answer: "I like football. It is fun.", explanation: "Weak description and minimal vocabulary." },
            { band: 7, label: "Band 7", answer: "I'm a keen footballer. I play in a local league every weekend, and it keeps me fit while providing a great social outlet.", explanation: "Good detail and linking of benefits." },
            { band: 9, label: "Band 9", answer: "I'm an avid badminton player. I love the tactical aspects of the game, as well as the intense physical workout it provides.", explanation: "Sophisticated vocabulary and strong opinion." },
          ],
        },
      ],
      pronunciation: [
        {
          feature: "Consonant clusters",
          explanation: "Practice words like 'strengths' and clear T/D endings.",
          examples: [
            { word: "cardiovascular", ipa: "/ˌkɑːrdiəʊˈvæskjələr/", tip: "Break into smaller chunks when speaking." },
          ],
          chineseTips: "练习辅音连缀和清晰的 T/D 结尾。",
        },
      ],
      conversationExpansions: [
        {
          question: "Do you like sports?",
          oneWord: "Yes.",
          oneSentence: "Yes, I love sports because they keep me fit.",
          threeSentences: "Yes, I love sports. I play football with friends and go running in the park. It makes me feel healthier.",
          band7: "I'm really into team sports, particularly football and badminton. They keep me physically fit and also provide a much-needed social outlet.",
          band9: "I'm an avid fan of dynamic sports that demand both endurance and strategy — football and badminton are my go-to activities.",
        },
      ],
      dailyDrills: [
        { type: "rapid-fire", title: "Rapid-Fire Sports Vocabulary", description: "Name 10 sports, then 10 fitness verbs.", prompt: "Name 10 sports and 10 fitness verbs quickly.", chineseInstruction: "快速说出10项运动和10个健身动词。" },
      ],
      commonMistakes: [
        { mistake: "Using 'make sport' instead of 'play sport'.", whyItHappens: "Direct translation from L1.", correction: "Use 'play sport' or 'do exercise'.", chineseExplanation: "英式英语用 play sport，美式常用 play sports。" },
      ],
      visualCards: [
        { english: "sports", icon: "⚽", color: "green", emoji: "⚽", miniExplanation: "Physical activities.", exampleSentence: "Team sports improve cooperation.", chinese: "运动", commonCollocations: ["team sport", "fitness regime"] },
      ],
      memorySection: {
        quickFormulas: ["Frequency + Activity + Benefit"],
        mindMapNodes: { central: "Sports", branches: ["Types", "Frequency", "Benefits", "Memories"] },
        flashcards: [
          { front: "workout", back: "a session of exercise; 锻炼" },
          { front: "cardiovascular", back: "relating to heart and blood vessels; 心血管的" },
        ],
        mnemonics: [
          { word: "workout", trick: "Work + out — exercise session." },
        ],
        cheatSheet: [
          "Use simple and specific sports nouns.",
          "Add frequency adverbs.",
          "Link activity to health or social benefit.",
        ],
      },
      mockTests: [
        {
          id: "sports-mt1",
          title: "Full Part 1 Mock Test — Sports",
          duration: 240,
          questions: [
            "Do you play any sports?",
            "What do you enjoy most about sports?",
            "Do you watch sports on TV?",
            "Is sport important in your country?",
          ],
          transcript: "Examiner: Do you play any sports?\nStudent: Yes, I play badminton once a week with friends.",
          evaluationCriteria: [
            { criterion: "Fluency & Coherence", weight: 25, description: "Can you speak smoothly about sports routines?" },
            { criterion: "Lexical Resource", weight: 30, description: "Do you use varied sports vocabulary?" },
            { criterion: "Grammatical Range", weight: 25, description: "Do you use present simple and present perfect accurately?" },
            { criterion: "Pronunciation", weight: 20, description: "Is your speech clear during fast sports descriptions?" },
          ],
          sampleAnswer: "I play badminton every weekend with a group of friends. It's fast-paced and great for reflexes. I also enjoy watching football; my favorite team is Barcelona.",
        },
      ],
    },
    {
      id: "family",
      title: "Family",
      icon: "👨‍👩‍👧",
      color: "from-blue-400 to-indigo-400",
      description: "Describe your family members, relationships, and family life.",
      cefrLevel: "A2",
      estimatedTime: "20 min",
      introduction: {
        whyIELTSAsks: "This topic assesses your ability to describe people, relationships, and family routines.",
        whatExaminerWants: "Natural descriptions, family vocabulary, and reasons.",
        commonMistakes: "Using only simple adjectives like 'nice' and 'good'.",
        bandComparison: {
          band5: "Basic family nouns; simple adjectives.",
          band7: "Good description with reasons and some detail.",
          band9: "Rich descriptions, emotional language, and varied structures.",
        },
        chineseExplanation: "考官通过此话题考察你描述人物、关系和家庭生活的能力。",
      },
      frequentlyAskedQuestions: [
        "How many people are in your family?",
        "Do you have any siblings?",
        "What do you do with your family on weekends?",
        "Who is your favorite family member?",
      ],
      speakingStructure: {
        flow: ["Identify person", "Add personality detail", "Give an example", "Share feeling"],
        whyItWorks: "People descriptions need character and examples to sound vivid.",
        bandExamples: [
          { band: 5, label: "Band 5", answer: "My mother is nice. She cooks.", explanation: "Very basic vocabulary and no extension." },
          { band: 7, label: "Band 7", answer: "My mother is incredibly supportive. She runs a small shop but still finds time to cook our favorite meals every Sunday.", explanation: "Good adjectives and detail." },
          { band: 9, label: "Band 9", answer: "My mother is the most resilient person I know — she runs a small business yet always creates warmth and stability for the family.", explanation: "Emotional depth and strong vocabulary." },
        ],
      },
      sentenceStarters: ["My... is...", "What I admire most is...", "We usually...", "I'm really close to..."],
      vocabulary: [
        { english: "resilient", ipa: "/rɪˈzɪliənt/", chinese: "有韧性的", meaning: "strong enough to recover quickly", exampleSentence: "She is remarkably resilient.", commonCollocations: ["resilient person", "resilient community"] },
        { english: "supportive", ipa: "/səˈpɔːtɪv/", chinese: "支持的", meaning: "giving encouragement or help", exampleSentence: "My parents are very supportive.", commonCollocations: ["supportive parent", "supportive environment"] },
        { english: "tight-knit", ipa: "/ˌtaɪt ˈnɪt/", chinese: "关系紧密的", meaning: "closely connected and supportive", exampleSentence: "We are a tight-knit family.", commonCollocations: ["tight-knit family", "tight-knit community"] },
        { english: "sibling", ipa: "/ˈsɪblɪŋ/", chinese: "兄弟姐妹", meaning: "a brother or sister", exampleSentence: "I have three siblings.", commonCollocations: ["older sibling", "sibling rivalry"] },
        { english: "relative", ipa: "/ˈrelətɪv/", chinese: "亲戚", meaning: "a family member", exampleSentence: "We visited some relatives in the countryside.", commonCollocations: ["close relative", "distant relative"] },
      ],
      collocations: [
        { phrase: "close-knit family", chinese: "关系紧密的家庭", example: "They belong to a close-knit family." },
        { phrase: "family gathering", chinese: "家庭聚会", example: "We have a big family gathering every year." },
        { phrase: "spend quality time", chinese: "共度美好时光", example: "We try to spend quality time together." },
        { phrase: "get along with", chinese: "与...相处", example: "We all get along with each other." },
      ],
      universalPhrases: ["I'm really close to...", "We usually...", "I look up to...", "If I had to describe...", "To be honest,..."],
      grammarBox: [
        {
          title: "Present Perfect with 'Since' and 'For'",
          titleChinese: "现在完成时与 since/for",
          visualType: "table",
          content: "Use since + a point in time and for + a duration.",
          examples: [
            { english: "I've known him since 2010.", chinese: "我从2010年就认识他了。" },
            { english: "We've lived here for ten years.", chinese: "我们在这里住了十年了。" },
          ],
          commonMistakes: [
            { mistake: "I know him since 2010.", correction: "I've known him since 2010.", chineseExplanation: "since 需与完成时连用。" },
          ],
        },
      ],
      visualExplanations: [
        { id: "family-roles", title: "Family Roles Map", content: "Identify roles, personalities, and shared activities.", visualType: "mindmap" },
      ],
      nativeSpeakerTips: [
        {
          category: "Describing People",
          alternatives: [
            { insteadOf: "My mom is good", useInstead: "My mom is incredibly patient and hardworking" },
            { insteadOf: "I like my family", useInstead: "I really cherish the time I spend with them" },
          ],
        },
      ],
      bandUpgrade: [
        {
          question: "Describe a family member you admire.",
          bands: [
            { band: 5, label: "Band 5", answer: "My father is good. He works hard.", explanation: "Short and repetitive." },
            { band: 7, label: "Band 7", answer: "My father is hardworking and supportive. He always puts our needs first and never complains.", explanation: "Good descriptors and reasons." },
            { band: 9, label: "Band 9", answer: "My father is an incredibly resilient and generous person. Despite long working hours, he always sets aside time for us without complaint.", explanation: "Rich description and emotional depth." },
          ],
        },
      ],
      pronunciation: [
        {
          feature: "Linking and intonation",
          explanation: "Practice smooth linking in long sentences and rising intonation for questions.",
          examples: [
            { word: "supportive", ipa: "/səˈpɔːtɪv/", tip: "Stress the second syllable." },
          ],
          chineseTips: "练习长句中的连读和提问时的升调。",
        },
      ],
      conversationExpansions: [
        {
          question: "Do you have a big family?",
          oneWord: "Yes.",
          oneSentence: "Yes, I have a big family with five members.",
          threeSentences: "Yes, there are five of us. I have two brothers and a sister. We spend most weekends together.",
          band7: "Yes, it's quite a big family — there are five of us. We get along well and try to spend quality time together whenever possible.",
          band9: "Yes, I come from a sizeable, close-knit family, which means there’s always a lively atmosphere at home.",
        },
      ],
      dailyDrills: [
        { type: "30-second", title: "Describe a Family Member", description: "Describe one family member in 30 seconds.", prompt: "Describe a family member in 30 seconds.", chineseInstruction: "在30秒内描述一位家庭成员。" },
      ],
      commonMistakes: [
        { mistake: "Calling aunts 'aunties' in formal writing.", whyItHappens: "Phonetic spelling confusion.", correction: "Use aunt or uncle in writing.", chineseExplanation: "写作中用 aunt/uncle，口语中用 aunty 更亲切。" },
      ],
      visualCards: [
        { english: "family", icon: "👨‍👩‍👧", color: "blue", emoji: "👨‍👩‍👧", miniExplanation: "People you are related to.", exampleSentence: "They are a close-knit family.", chinese: "家庭", commonCollocations: ["family gathering", "close-knit family"] },
      ],
      memorySection: {
        quickFormulas: ["Person + Why I admire + A story", "Feeling + Example + Result"],
        mindMapNodes: { central: "Family", branches: ["Members", "Activities", "Values", "Memories"] },
        flashcards: [
          { front: "resilient", back: "strong; 有韧性的" },
          { front: "supportive", back: "helpful; 支持的" },
        ],
        mnemonics: [
          { word: "resilient", trick: "Re + silent — bounces back quietly." },
        ],
        cheatSheet: [
          "Use descriptive adjectives beyond 'nice'.",
          "Include specific examples.",
          "Mix tenses naturally when describing memories.",
        ],
      },
      mockTests: [
        {
          id: "family-mt1",
          title: "Full Part 1 Mock Test — Family",
          duration: 240,
          questions: [
            "How many people are in your family?",
            "Do you have any siblings?",
            "What do you do with your family on weekends?",
            "Who is your favorite family member?",
          ],
          transcript: "Examiner: How many people are in your family?\nStudent: There are four of us — my parents, my younger sister, and me.",
          evaluationCriteria: [
            { criterion: "Fluency & Coherence", weight: 25, description: "Can you describe family members and activities smoothly?" },
            { criterion: "Lexical Resource", weight: 30, description: "Do you use varied family and relationship vocabulary?" },
            { criterion: "Grammatical Range", weight: 25, description: "Do you use present simple and present perfect accurately?" },
            { criterion: "Pronunciation", weight: 20, description: "Is your intonation clear when describing personal relationships?" },
          ],
          sampleAnswer: "There are four of us — my parents, my younger sister, and me. My sister and I are quite close; we often cook together or go hiking on weekends.",
        },
      ],
    },
    {
      id: "technology",
      title: "Technology & Internet",
      icon: "💻",
      color: "from-violet-400 to-purple-400",
      description: "Discuss gadgets, apps, social media, and digital habits.",
      cefrLevel: "B1",
      estimatedTime: "25 min",
      introduction: {
        whyIELTSAsks: "This topic tests your ability to discuss modern life, trends, and predictions.",
        whatExaminerWants: "Tech-related vocabulary and balanced opinions.",
        commonMistakes: "Using vocabulary too casually or being overly negative/positive.",
        bandComparison: {
          band5: "Simple tech nouns; very short answers.",
          band7: "Good range of tech terms and examples.",
          band9: "Balanced, forward-looking discussion with sophisticated vocabulary.",
        },
        chineseExplanation: "此题考察你讨论现代生活、趋势和预测的能力。",
      },
      frequentlyAskedQuestions: [
        "What kind of technology do you use most often?",
        "Do you think technology makes life easier?",
        "What is your favorite app or website?",
        "How often do you use social media?",
      ],
      speakingStructure: {
        flow: ["Name the technology", "Explain how you use it", "Compare alternatives", "Give an opinion with reason"],
        whyItWorks: "Linking use-case with opinion makes answers sound analytical.",
        bandExamples: [
          { band: 5, label: "Band 5", answer: "I use my phone. It is good.", explanation: "Very short and lacks detail." },
          { band: 7, label: "Band 7", answer: "I rely on my smartphone for everything — messaging, maps, and studying. It saves me a lot of time.", explanation: "Good range of uses and reasons." },
          { band: 9, label: "Band 9", answer: "My smartphone is essentially my digital hub; it streamlines everything from navigation to productivity, though I try to be mindful of screen time.", explanation: "Sophisticated vocabulary and balanced tone." },
        ],
      },
      sentenceStarters: ["I rely on...", "When it comes to...", "One thing I can't do without is...", "I find it..."],
      vocabulary: [
        { english: "innovative", ipa: "/ˈɪnəveɪtɪv/", chinese: "创新的", meaning: "featuring new methods or ideas", exampleSentence: "They released an innovative app.", commonCollocations: ["innovative design", "innovative approach"] },
        { english: "streamline", ipa: "/ˈstriːmlaɪn/", chinese: "简化，使...更有效率", meaning: "to make a process more efficient", exampleSentence: "The update streamlines the workflow.", commonCollocations: ["streamline operations", "streamline process"] },
        { english: "scroll", ipa: "/skrəʊl/", chinese: "滚动", meaning: "to move text or images on a screen up or down", exampleSentence: "I spent hours scrolling through feeds.", commonCollocations: ["scroll through", "scroll down"] },
        { english: "screen time", ipa: "/skriːn taɪm/", chinese: "屏幕使用时间", meaning: "time spent using a device", exampleSentence: "I need to reduce my screen time.", commonCollocations: ["screen time limits", "excessive screen time"] },
        { english: "mindful", ipa: "/ˈmaɪndfl/", chinese: "正念的，注意的", meaning: "conscious and aware", exampleSentence: "I try to be mindful of my habits.", commonCollocations: ["mindful of", "mindful usage"] },
      ],
      collocations: [
        { phrase: "innovative design", chinese: "创新设计", example: "The phone has an innovative design." },
        { phrase: "streamline workflow", chinese: "简化工作流", example: "The tool streamlines workflow." },
        { phrase: "reduce screen time", chinese: "减少屏幕时间", example: "Doctors recommend reducing screen time." },
        { phrase: "social media feed", chinese: "社交媒体信息流", example: "I scroll through my social media feed daily." },
      ],
      universalPhrases: ["When it comes to...", "One thing I can't do without is...", "I find it..."],
      grammarBox: [
        {
          title: "Future Forms",
          titleChinese: "将来时形式",
          visualType: "comparison",
          content: "Use will for predictions and going to for plans.",
          examples: [
            { english: "AI will transform education.", chinese: "AI将改变教育。" },
            { english: "I'm going to buy a new laptop.", chinese: "我打算买一台新笔记本电脑。" },
          ],
          commonMistakes: [
            { mistake: "I will to buy a laptop.", correction: "I will buy a laptop.", chineseExplanation: "will 后直接接动词原形。" },
          ],
        },
      ],
      visualExplanations: [
        { id: "tech-trends", title: "Tech Trends Mindmap", content: "AI, apps, social media, gadgets — with benefits and risks.", visualType: "mindmap" },
      ],
      nativeSpeakerTips: [
        {
          category: "Tech Vocabulary",
          alternatives: [
            { insteadOf: "I use my phone a lot", useInstead: "I'm glued to my phone" },
            { insteadOf: "It is useful", useInstead: "It's a game-changer" },
          ],
        },
      ],
      bandUpgrade: [
        {
          question: "Do you think technology is important?",
          bands: [
            { band: 5, label: "Band 5", answer: "Yes, it is important. I use phone and laptop.", explanation: "Short and minimal vocabulary." },
            { band: 7, label: "Band 7", answer: "Absolutely. Technology keeps me connected, informed, and productive. I couldn't imagine daily life without my smartphone.", explanation: "Good range of reasons and vocabulary." },
            { band: 9, label: "Band 9", answer: "I believe technology is pivotal; it amplifies our capabilities, though I also advocate mindful usage to preserve real-world interactions.", explanation: "Balanced, sophisticated opinion." },
          ],
        },
      ],
      pronunciation: [
        {
          feature: "Schwa and connected speech",
          explanation: "Practice 'going to' and 'kind of' in natural speech.",
          examples: [
            { word: "innovative", ipa: "/ˈɪnəveɪtɪv/", tip: "Stress first syllable; weak middle syllable." },
          ],
          chineseTips: "练习弱读和连读，例如 going to 和 kind of。",
        },
      ],
      conversationExpansions: [
        {
          question: "Do you use social media?",
          oneWord: "Yes.",
          oneSentence: "Yes, I use social media to stay connected.",
          threeSentences: "Yes, I use Instagram and Telegram. I post occasionally and check stories every morning. It helps me stay connected.",
          band7: "Yes, I do. I mainly use Instagram and Telegram. I find them useful for staying in touch with friends and getting quick news updates.",
          band9: "I do, though I'm trying to be more intentional about it. Social media keeps me connected, but I also set limits to avoid distractions.",
        },
      ],
      dailyDrills: [
        { type: "30-second", title: "Describe Your Favorite App", description: "Describe your favorite app in 30 seconds.", prompt: "Describe your favorite app in 30 seconds.", chineseInstruction: "在30秒内描述你最喜欢的应用。" },
      ],
      commonMistakes: [
        { mistake: "Using 'I am agree' instead of 'I agree'.", whyItHappens: "Direct translation or confusion with adjectives.", correction: "Use 'I agree' or 'I think so'.", chineseExplanation: "agree 是动词，不能与 be 连用。" },
      ],
      visualCards: [
        { english: "technology", icon: "💻", color: "violet", emoji: "💻", miniExplanation: "Gadgets and digital tools.", exampleSentence: "Innovative technology changes how we work.", chinese: "科技", commonCollocations: ["cutting-edge technology", "social media"] },
      ],
      memorySection: {
        quickFormulas: ["App + Purpose + Benefit", "Tech + Opinion + Reason"],
        mindMapNodes: { central: "Technology", branches: ["Apps", "Gadgets", "Benefits", "Concerns"] },
        flashcards: [
          { front: "innovative", back: "new and creative; 创新的" },
          { front: "streamline", back: "make efficient; 简化" },
        ],
        mnemonics: [
          { word: "innovative", trick: "In + nova + tive — new ideas." },
        ],
        cheatSheet: [
          "Mix nouns and verbs for tech actions.",
          "Give balanced opinions rather than extremes.",
          "Use app names naturally in sentences.",
        ],
      },
      mockTests: [
        {
          id: "technology-mt1",
          title: "Full Part 1 Mock Test — Technology",
          duration: 240,
          questions: [
            "What kind of technology do you use most often?",
            "Do you think technology makes life easier?",
            "What is your favorite app or website?",
            "How often do you use social media?",
          ],
          transcript: "Examiner: What kind of technology do you use most often?\nStudent: My smartphone. I use it for messaging, navigation, and studying.",
          evaluationCriteria: [
            { criterion: "Fluency & Coherence", weight: 25, description: "Can you link ideas about technology smoothly?" },
            { criterion: "Lexical Resource", weight: 30, description: "Do you use varied tech vocabulary?" },
            { criterion: "Grammatical Range", weight: 25, description: "Do you use future and present forms accurately?" },
            { criterion: "Pronunciation", weight: 20, description: "Is your speech clear when discussing abstract ideas?" },
          ],
          sampleAnswer: "My smartphone is my most-used device. I rely on it for messaging, navigation, studying, and entertainment. It definitely makes life more convenient, though I try to limit my screen time.",
        },
      ],
    },
    {
      id: "music",
      title: "Music",
      icon: "🎵",
      color: "from-fuchsia-400 to-pink-400",
      description: "Talk about your music preferences, concerts, and musical experiences.",
      cefrLevel: "A2",
      estimatedTime: "20 min",
      introduction: {
        whyIELTSAsks: "This topic tests your ability to discuss preferences, experiences, and emotions.",
        whatExaminerWants: "Music vocabulary, past experiences, and coherent opinions.",
        commonMistakes: "Only naming genres without giving reasons or examples.",
        bandComparison: {
          band5: "Basic genre names; short answers.",
          band7: "Good descriptions of preferences and experiences.",
          band9: "Rich, emotive language with idiomatic expressions and cultural references.",
        },
        chineseExplanation: "此题考察你谈论偏好、经历和情感的能力。",
      },
      frequentlyAskedQuestions: [
        "Do you like music?",
        "What kind of music do you listen to?",
        "Do you play any musical instruments?",
        "Have you ever been to a concert?",
      ],
      speakingStructure: {
        flow: ["State preference", "Describe genre/song", "Share an experience", "Explain feeling"],
        whyItWorks: "Adding emotional or memory detail makes answers memorable.",
        bandExamples: [
          { band: 5, label: "Band 5", answer: "I like pop music. It is nice.", explanation: "Very short and repetitive." },
          { band: 7, label: "Band 7", answer: "I'm into indie and acoustic music. I find it relaxing, especially when I'm studying or winding down.", explanation: "Good adjectives and context." },
          { band: 9, label: "Band 9", answer: "I'm rather partial to acoustic indie. There's something about stripped-back instrumentation and earnest lyrics that I find deeply therapeutic.", explanation: "Sophisticated vocabulary and personal tone." },
        ],
      },
      sentenceStarters: ["I'm into...", "I find it...", "The last time I...", "What stands out is..."],
      vocabulary: [
        { english: "melody", ipa: "/ˈmeliːdi/", chinese: "旋律", meaning: "the main tune of a song", exampleSentence: "The melody is catchy.", commonCollocations: ["catchy melody", "haunting melody"] },
        { english: "lyrics", ipa: "/ˈlɪrɪks/", chinese: "歌词", meaning: "the words of a song", exampleSentence: "I love the lyrics.", commonCollocations: ["song lyrics", "meaningful lyrics"] },
        { english: "acoustic", ipa: "/əˈkuːstɪk/", chinese: "原声的", meaning: "without electronic amplification", exampleSentence: "She performed an acoustic version.", commonCollocations: ["acoustic guitar", "acoustic set"] },
        { english: "beat", ipa: "/biːt/", chinese: "节拍", meaning: "the rhythm of music", exampleSentence: "The beat is infectious.", commonCollocations: ["catchy beat", "fast beat"] },
        { english: "genres", ipa: "/ˈʒɒn.rə/", chinese: "流派", meaning: "categories of music", exampleSentence: "I enjoy multiple genres.", commonCollocations: ["music genres", "different genres"] },
      ],
      collocations: [
        { phrase: "catchy melody", chinese: "朗朗上口的旋律", example: "The song has a catchy melody." },
        { phrase: "acoustic guitar", chinese: "原声吉他", example: "He plays acoustic guitar." },
        { phrase: "live concert", chinese: "现场演唱会", example: "I went to a live concert last month." },
        { phrase: "music festival", chinese: "音乐节", example: "We attended a music festival." },
      ],
      universalPhrases: ["I'm into...", "I find it...", "The last time I...", "What stands out is..."],
      grammarBox: [
        {
          title: "Past Simple vs Present Perfect",
          titleChinese: "一般过去时 vs 现在完成时",
          visualType: "comparison",
          content: "Use past simple for finished times and present perfect for life experiences.",
          examples: [
            { english: "I went to a concert last month.", chinese: "我上个月去了一场演唱会。" },
            { english: "I've never missed a festival.", chinese: "我从不错过任何音乐节。" },
          ],
          commonMistakes: [
            { mistake: "I have gone to a concert last month.", correction: "I went to a concert last month.", chineseExplanation: "last month 是过去时间，用一般过去时。" },
          ],
        },
      ],
      visualExplanations: [
        { id: "music-genres", title: "Music Genres Map", content: "Pop, rock, jazz, classical, indie — with example artists.", visualType: "mindmap" },
      ],
      nativeSpeakerTips: [
        {
          category: "Music Talk",
          alternatives: [
            { insteadOf: "I like this song", useInstead: "I'm really into this track" },
            { insteadOf: "The music is good", useInstead: "The melody is incredibly catchy" },
          ],
        },
      ],
      bandUpgrade: [
        {
          question: "What kind of music do you like?",
          bands: [
            { band: 5, label: "Band 5", answer: "I like pop music. It is nice.", explanation: "Short and repetitive." },
            { band: 7, label: "Band 7", answer: "I'm into acoustic and indie music. I find it relaxing, especially after a long day.", explanation: "Good adjectives and reasons." },
            { band: 9, label: "Band 9", answer: "I'm rather partial to acoustic indie. There's something about stripped-back instrumentation and earnest lyrics that I find deeply therapeutic.", explanation: "Sophisticated vocabulary and personal tone." },
          ],
        },
      ],
      pronunciation: [
        {
          feature: "Word stress in music terms",
          explanation: "Practice stress patterns for genre names and descriptors.",
          examples: [
            { word: "acoustic", ipa: "/əˈkuːstɪk/", tip: "Stress the second syllable." },
            { word: "melody", ipa: "/ˈmeliːdi/", tip: "Stress the first syllable." },
          ],
          chineseTips: "注意音乐术语的重音模式。",
        },
      ],
      conversationExpansions: [
        {
          question: "Do you play any instruments?",
          oneWord: "No.",
          oneSentence: "No, I don't play any instruments, but I enjoy listening.",
          threeSentences: "No, I don't. I used to play the piano when I was young, but I stopped. Now I mostly listen to music.",
          band7: "Unfortunately not, though I did learn piano as a child. These days I mostly enjoy listening to live performances.",
          band9: "I don't play professionally, but I dabble on the guitar for relaxation. It's a nice contrast to my usual routine.",
        },
      ],
      dailyDrills: [
        { type: "30-second", title: "Describe Your Favorite Song", description: "Describe your favorite song in 30 seconds.", prompt: "Describe your favorite song in 30 seconds.", chineseInstruction: "在30秒内描述你最喜欢的歌曲。" },
      ],
      commonMistakes: [
        { mistake: "Using 'musics' as plural.", whyItHappens: "Direct translation from some languages.", correction: "Use 'music' as uncountable; 'genres' for types.", chineseExplanation: "music 不可数，要说 genres 或 types of music。" },
      ],
      visualCards: [
        { english: "music", icon: "🎵", color: "fuchsia", emoji: "🎵", miniExplanation: "Songs and instruments.", exampleSentence: "Music can lift your mood.", chinese: "音乐", commonCollocations: ["catchy melody", "live concert"] },
      ],
      memorySection: {
        quickFormulas: ["Genre + Why I like it + Memory", "Instrument + How long + Feeling"],
        mindMapNodes: { central: "Music", branches: ["Genres", "Instruments", "Concerts", "Feelings"] },
        flashcards: [
          { front: "melody", back: "main tune; 旋律" },
          { front: "acoustic", back: "unplugged/natural sound; 原声的" },
        ],
        mnemonics: [
          { word: "melody", trick: "Mel + ody — musical tune." },
        ],
        cheatSheet: [
          "Use genre names as adjectives.",
          "Share specific memories for emotional impact.",
          "Use music verbs: play, listen, perform, compose.",
        ],
      },
      mockTests: [
        {
          id: "music-mt1",
          title: "Full Part 1 Mock Test — Music",
          duration: 240,
          questions: [
            "Do you like music?",
            "What kind of music do you listen to?",
            "Do you play any musical instruments?",
            "Have you ever been to a concert?",
          ],
          transcript: "Examiner: Do you like music?\nStudent: Yes, I love music. I mainly listen to indie and acoustic.",
          evaluationCriteria: [
            { criterion: "Fluency & Coherence", weight: 25, description: "Can you discuss music preferences smoothly?" },
            { criterion: "Lexical Resource", weight: 30, description: "Do you use varied music vocabulary?" },
            { criterion: "Grammatical Range", weight: 25, description: "Do you mix tenses when talking about experiences?" },
            { criterion: "Pronunciation", weight: 20, description: "Is your intonation expressive when describing feelings?" },
          ],
          sampleAnswer: "Yes, I'm really into indie and acoustic music. I find it relaxing, especially after a long day. I've been to a couple of small gigs, and the atmosphere was amazing.",
        },
      ],
    },
    {
      id: "books",
      title: "Books & Reading",
      icon: "📚",
      color: "from-cyan-400 to-blue-400",
      description: "Discuss reading habits, favorite books, and literary preferences.",
      cefrLevel: "A2",
      estimatedTime: "20 min",
      introduction: {
        whyIELTSAsks: "This topic tests your ability to discuss habits, preferences, and personal experiences.",
        whatExaminerWants: "Book-related vocabulary and reasons for preferences.",
        commonMistakes: "Only mentioning titles without describing content or impact.",
        bandComparison: {
          band5: "Basic book nouns; short answers.",
          band7: "Good descriptions of genres and reasons.",
          band9: "Analytical, fluent discussion with literary vocabulary.",
        },
        chineseExplanation: "此题考察你谈论习惯、偏好和个人经历的能力。",
      },
      frequentlyAskedQuestions: [
        "Do you like reading books?",
        "What kind of books do you like?",
        "Do you prefer e-books or paper books?",
        "What was the last book you read?",
      ],
      speakingStructure: {
        flow: ["State habit", "Mention genre/format", "Describe a favorite", "Explain impact"],
        whyItWorks: "Impact or feeling adds depth beyond simple preference.",
        bandExamples: [
          { band: 5, label: "Band 5", answer: "I read sometimes. I like novels.", explanation: "Short and no detail." },
          { band: 7, label: "Band 7", answer: "I read quite a lot, especially fiction. I find it helps me unwind and improves my imagination.", explanation: "Good reasons and benefits." },
          { band: 9, label: "Band 9", answer: "I'm an avid reader of literary fiction. I find it not only broadening in terms of vocabulary and perspective, but also deeply immersive as an escape from routine.", explanation: "Sophisticated vocabulary and reflection." },
        ],
      },
      sentenceStarters: ["I enjoy reading...", "I prefer... because...", "The last book I read was...", "What I find most interesting is..."],
      vocabulary: [
        { english: "plot", ipa: "/plɒt/", chinese: "情节", meaning: "the sequence of events in a story", exampleSentence: "The plot was gripping.", commonCollocations: ["twisted plot", "plot twist"] },
        { english: "character", ipa: "/ˈkærəktər/", chinese: "人物", meaning: "a person in a story", exampleSentence: "The main character is relatable.", commonCollocations: ["main character", "well-developed character"] },
        { english: "genre", ipa: "/ˈʒɒn.rə/", chinese: "类型", meaning: "a category of art or literature", exampleSentence: "I enjoy the sci-fi genre.", commonCollocations: ["book genre", "different genres"] },
        { english: "narrative", ipa: "/ˈnærətɪv/", chinese: "叙事", meaning: "the way a story is told", exampleSentence: "The narrative structure is complex.", commonCollocations: ["compelling narrative", "narrative voice"] },
        { english: "captivating", ipa: "/kæpˈteɪveɪtɪŋ/", chinese: "迷人的", meaning: "attracting and holding interest", exampleSentence: "The story is captivating.", commonCollocations: ["captivating story", "captivating read"] },
      ],
      collocations: [
        { phrase: "page-turner", chinese: "引人入胜的书", example: "It was a real page-turner." },
        { phrase: "light reading", chinese: "轻松读物", example: "I prefer light reading on holidays." },
        { phrase: "must-read", chinese: "必读书", example: "This book is a must-read." },
        { phrase: "plot twist", chinese: "情节转折", example: "The plot twist was unexpected." },
      ],
      universalPhrases: ["I enjoy reading...", "I prefer... because...", "The last book I read was..."],
      grammarBox: [
        {
          title: "Present Perfect for Experiences",
          titleChinese: "现在完成时与经历",
          visualType: "flowchart",
          content: "Use present perfect to talk about books you have read or experiences.",
          examples: [
            { english: "I've read several books by that author.", chinese: "我读过那位作者的几本书。" },
            { english: "Have you ever read a manga?", chinese: "你读过漫画吗？" },
          ],
          commonMistakes: [
            { mistake: "I read many books last year.", correction: "I have read many books this year.", chineseExplanation: "根据时间状语选择时态。" },
          ],
        },
      ],
      visualExplanations: [
        { id: "book-genres", title: "Book Genres Map", content: "Fiction, non-fiction, sci-fi, poetry — with examples.", visualType: "mindmap" },
      ],
      nativeSpeakerTips: [
        {
          category: "Reading Talk",
          alternatives: [
            { insteadOf: "I read books", useInstead: "I'm a bookworm" },
            { insteadOf: "It is interesting", useInstead: "It's absolutely captivating" },
          ],
        },
      ],
      bandUpgrade: [
        {
          question: "Do you like reading?",
          bands: [
            { band: 5, label: "Band 5", answer: "Yes, I read books. They are good.", explanation: "Short and repetitive." },
            { band: 7, label: "Band 7", answer: "I read pretty much anything, though I lean towards fiction. I find it relaxing and it expands my imagination.", explanation: "Good detail and reasons." },
            { band: 9, label: "Band 9", answer: "I'm an avid reader, particularly of literary fiction. I find it not only broadening in terms of vocabulary and perspective, but also deeply immersive as an escape from routine.", explanation: "Rich vocabulary and reflection." },
          ],
        },
      ],
      pronunciation: [
        {
          feature: "Th and linking",
          explanation: "Practice 'the plot' and 'that theme'.",
          examples: [
            { word: "captivating", ipa: "/kæpˈteɪveɪtɪŋ/", tip: "Stress the third syllable." },
          ],
          chineseTips: "练习浊擦音和连读，例如 'the plot'。",
        },
      ],
      conversationExpansions: [
        {
          question: "Do you prefer e-books or paper books?",
          oneWord: "Paper.",
          oneSentence: "I prefer paper books because they feel more real.",
          threeSentences: "I prefer paper books. The smell and feel are better. I can also write notes easily.",
          band7: "I prefer paper books. There's something about the tactile experience and the lack of screen glare that makes reading more enjoyable for me.",
          band9: "I'm a firm advocate of paper books. The tactile experience, lack of eye strain, and the ability to annotate margins make them irreplaceable for serious reading.",
        },
      ],
      dailyDrills: [
        { type: "30-second", title: "Describe a Favorite Book", description: "Describe your favorite book in 30 seconds.", prompt: "Describe your favorite book in 30 seconds.", chineseInstruction: "在30秒内描述你最爱的书。" },
      ],
      commonMistakes: [
        { mistake: "Using 'informations' as plural.", whyItHappens: "Direct translation from languages with plural information.", correction: "Use 'information' as uncountable.", chineseExplanation: "information 不可数，没有复数形式。" },
      ],
      visualCards: [
        { english: "books", icon: "📚", color: "cyan", emoji: "📚", miniExplanation: "Reading and literature.", exampleSentence: "Reading books broadens your mind.", chinese: "书籍", commonCollocations: ["page-turner", "light reading"] },
      ],
      memorySection: {
        quickFormulas: ["Genre + Why I like it + Example", "Format + Reason + Feeling"],
        mindMapNodes: { central: "Books", branches: ["Genres", "Formats", "Authors", "Impact"] },
        flashcards: [
          { front: "plot", back: "storyline; 情节" },
          { front: "captivating", back: "attractive; 迷人的" },
        ],
        mnemonics: [
          { word: "plot", trick: "Plan of the tale — storyline." },
        ],
        cheatSheet: [
          "Mix fiction and non-fiction references.",
          "Use genre names as adjectives.",
          "Share emotional reactions to stories.",
        ],
      },
      mockTests: [
        {
          id: "books-mt1",
          title: "Full Part 1 Mock Test — Books & Reading",
          duration: 240,
          questions: [
            "Do you like reading books?",
            "What kind of books do you like?",
            "Do you prefer e-books or paper books?",
            "What was the last book you read?",
          ],
          transcript: "Examiner: Do you like reading books?\nStudent: Yes, I love reading. I mostly read fiction before bed.",
          evaluationCriteria: [
            { criterion: "Fluency & Coherence", weight: 25, description: "Can you discuss reading habits smoothly?" },
            { criterion: "Lexical Resource", weight: 30, description: "Do you use varied book-related vocabulary?" },
            { criterion: "Grammatical Range", weight: 25, description: "Do you use present perfect for reading experiences?" },
            { criterion: "Pronunciation", weight: 20, description: "Is your speech clear when discussing abstract topics?" },
          ],
          sampleAnswer: "Yes, I'm an avid reader. I mostly read fiction before bed because it helps me unwind. I prefer paper books over e-books because I find the tactile experience more enjoyable.",
        },
      ],
    },
    {
      id: "weather",
      title: "Weather & Seasons",
      icon: "🌤️",
      color: "from-sky-400 to-teal-400",
      description: "Talk about weather conditions, seasons, and climate preferences.",
      cefrLevel: "A2",
      estimatedTime: "20 min",
      introduction: {
        whyIELTSAsks: "This topic tests your ability to describe environments and express preferences with reasons.",
        whatExaminerWants: "Weather vocabulary, comparisons, and personal anecdotes.",
        commonMistakes: "Using only 'hot' and 'cold' without descriptive nuance.",
        bandComparison: {
          band5: "Basic weather adjectives; short answers.",
          band7: "Good variety of weather descriptors and reasons.",
          band9: "Vivid, precise descriptions with idiomatic weather language.",
        },
        chineseExplanation: "此题考察你描述环境和表达偏好的能力。",
      },
      frequentlyAskedQuestions: [
        "What's your favorite season?",
        "What's the weather like in your hometown?",
        "Do you prefer hot or cold weather?",
        "Does the weather affect your mood?",
      ],
      speakingStructure: {
        flow: ["State season/weather", "Describe feeling/activity", "Compare to another", "Give a memory"],
        whyItWorks: "Memory or feeling makes weather answers personal and extended.",
        bandExamples: [
          { band: 5, label: "Band 5", answer: "I like summer. It is hot.", explanation: "Short and lacks detail." },
          { band: 7, label: "Band 7", answer: "I love autumn because the temperature is mild and the leaves change color. It's the best time for hiking.", explanation: "Good description and reasons." },
          { band: 9, label: "Band 9", answer: "I'm rather partial to autumn. The crisp air, golden foliage, and gentle sunlight create the perfect backdrop for long walks without the intensity of summer heat.", explanation: "Vivid, precise description." },
        ],
      },
      sentenceStarters: ["I'm a big fan of...", "I find it...", "When it's..., I usually...", "What I love most is..."],
      vocabulary: [
        { english: "scorching", ipa: "/ˈskɔːtʃɪŋ/", chinese: "灼热的", meaning: "extremely hot", exampleSentence: "It was a scorching day.", commonCollocations: ["scorching heat", "scorching sun"] },
        { english: "brisk", ipa: "/brɪsk/", chinese: "清新的，轻快的", meaning: "cold and lively", exampleSentence: "A brisk wind blew.", commonCollocations: ["brisk walk", "brisk wind"] },
        { english: "drizzle", ipa: "/ˈdrɪzl/", chinese: "小雨", meaning: "light rain", exampleSentence: "There was a light drizzle.", commonCollocations: ["light drizzle", "gentle drizzle"] },
        { english: "chilly", ipa: "/ˈtʃɪli/", chinese: "寒冷的", meaning: "uncomfortably cold", exampleSentence: "It's a bit chilly today.", commonCollocations: ["chilly morning", "chilly wind"] },
        { english: "overcast", ipa: "/ˌəʊvəˈkɑːst/", chinese: "阴天的", meaning: "covered with clouds", exampleSentence: "It's overcast today.", commonCollocations: ["overcast sky", "overcast day"] },
      ],
      collocations: [
        { phrase: "scorching heat", chinese: "灼热", example: "We avoided the scorching heat." },
        { phrase: "brisk walk", chinese: "轻快的步行", example: "I went for a brisk walk." },
        { phrase: "light drizzle", chinese: "小雨", example: "A light drizzle started." },
        { phrase: "changeable climate", chinese: "多变的天气", example: "The UK has a changeable climate." },
      ],
      universalPhrases: ["I'm a big fan of...", "I find it...", "When it's..., I usually...", "What I love most is..."],
      grammarBox: [
        {
          title: "Zero Conditional vs First Conditional",
          titleChinese: "零条件句 vs 第一条件句",
          visualType: "comparison",
          content: "Use zero conditional for facts, first conditional for future possibilities.",
          examples: [
            { english: "If it rains, I stay home.", chinese: "如果下雨，我就待在家里。" },
            { english: "If it rains tomorrow, I will stay home.", chinese: "如果明天下雨，我将待在家里。" },
          ],
          commonMistakes: [
            { mistake: "If it will rain, I stay home.", correction: "If it rains, I stay home.", chineseExplanation: "条件句主句用 will，从句用一般现在时。" },
          ],
        },
      ],
      visualExplanations: [
        { id: "weather-map", title: "Seasons and Activities", content: "Map activities to seasons and weather conditions.", visualType: "mindmap" },
      ],
      nativeSpeakerTips: [
        {
          category: "Weather Talk",
          alternatives: [
            { insteadOf: "It is very hot", useInstead: "It's scorching" },
            { insteadOf: "It is a little cold", useInstead: "There's a bit of a chill" },
          ],
        },
      ],
      bandUpgrade: [
        {
          question: "What's your favorite season?",
          bands: [
            { band: 5, label: "Band 5", answer: "I like summer. It is hot.", explanation: "Short and lacks description." },
            { band: 7, label: "Band 7", answer: "I love autumn because the temperature is mild and the leaves change color. It's perfect for hiking.", explanation: "Good reasons and detail." },
            { band: 9, label: "Band 9", answer: "I'm rather partial to autumn. The crisp air, golden foliage, and gentle sunlight create the perfect backdrop for long walks without the intensity of summer heat.", explanation: "Vivid, precise language." },
          ],
        },
      ],
      pronunciation: [
        {
          feature: "Consonant clusters and endings",
          explanation: "Practice 'scorching', 'brisk', and clear -ing endings.",
          examples: [
            { word: "scorching", ipa: "/ˈskɔːtʃɪŋ/", tip: "Clear ch + ing ending." },
            { word: "brisk", ipa: "/brɪsk/", tip: "End with clear k sound." },
          ],
          chineseTips: "练习清晰的辅音连缀和 -ing 结尾。",
        },
      ],
      conversationExpansions: [
        {
          question: "Does the weather affect your mood?",
          oneWord: "Yes.",
          oneSentence: "Yes, sunny weather makes me happier.",
          threeSentences: "Yes, it does. When it's sunny, I feel more energetic and positive. Rainy days make me feel sleepy.",
          band7: "Yes, definitely. Sunny days lift my mood and make me more productive, whereas gloomy weather tends to slow me down.",
          band9: "Absolutely. I'm far more energized and motivated on crisp, sunny days; prolonged overcast weather tends to sap my energy and enthusiasm.",
        },
      ],
      dailyDrills: [
        { type: "rapid-fire", title: "Weather Vocabulary Rapid Fire", description: "Name 15 weather adjectives and 10 activities linked to weather.", prompt: "Name 15 weather adjectives and 10 activities linked to weather.", chineseInstruction: "快速说出15个天气形容词和10个天气相关活动。" },
      ],
      commonMistakes: [
        { mistake: "Saying 'weathers' as plural.", whyItHappens: "Direct translation from languages that pluralize weather.", correction: "Use 'weather' as uncountable.", chineseExplanation: "weather 是不可数名词，没有复数形式。" },
      ],
      visualCards: [
        { english: "weather", icon: "🌤️", color: "sky", emoji: "🌤️", miniExplanation: "Climate and conditions.", exampleSentence: "The weather is unpredictable in spring.", chinese: "天气", commonCollocations: ["scorching heat", "brisk walk"] },
      ],
      memorySection: {
        quickFormulas: ["Season + Activity + Feeling", "Weather + Clothing + Plan"],
        mindMapNodes: { central: "Weather", branches: ["Seasons", "Activities", "Clothing", "Feelings"] },
        flashcards: [
          { front: "scorching", back: "extremely hot; 灼热的" },
          { front: "brisk", back: "cold and lively; 清新的" },
        ],
        mnemonics: [
          { word: "scorching", trick: "Scorch + ing — burning hot." },
        ],
        cheatSheet: [
          "Use precise adjectives beyond 'hot' and 'cold'.",
          "Link weather to activities.",
          "Use comparatives: milder, warmer, chillier.",
        ],
      },
      mockTests: [
        {
          id: "weather-mt1",
          title: "Full Part 1 Mock Test — Weather",
          duration: 240,
          questions: [
            "What's your favorite season?",
            "What's the weather like in your hometown?",
            "Do you prefer hot or cold weather?",
            "Does the weather affect your mood?",
          ],
          transcript: "Examiner: What's your favorite season?\nStudent: I love autumn because it's mild and the leaves change color.",
          evaluationCriteria: [
            { criterion: "Fluency & Coherence", weight: 25, description: "Can you describe weather and seasons smoothly?" },
            { criterion: "Lexical Resource", weight: 30, description: "Do you use varied weather vocabulary?" },
            { criterion: "Grammatical Range", weight: 25, description: "Do you use conditionals and comparatives accurately?" },
            { criterion: "Pronunciation", weight: 20, description: "Is your intonation clear when describing feelings?" },
          ],
          sampleAnswer: "I'm rather partial to autumn. The crisp air, golden foliage, and gentle sunlight make it perfect for outdoor walks. It's not too hot or too cold.",
        },
      ],
    },
  ],
};
