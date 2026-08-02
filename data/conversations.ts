import { ConversationTopic } from "@/types/conversations";

export const conversations: ConversationTopic[] = [
  {
    id: "first-meeting",
    title: "Meeting Someone for the First Time",
    emoji: "🤝",
    description: "Natural introductions, small talk, and making a good first impression.",
    color: "from-blue-400 to-cyan-400",
    level: "A2",
    estimatedTime: "15 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Professional or respectful settings" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard everyday conversation" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "With friends and peers" },
      { level: "slang", label: "Slang", color: "bg-purple-100 text-purple-800 border-purple-200", description: "Informal group language" },
      { level: "very-informal", label: "Very Informal", color: "bg-orange-100 text-orange-800 border-orange-200", description: "Close friends only" },
      { level: "rude", label: "Rude", color: "bg-red-100 text-red-800 border-red-200", description: "Offensive or disrespectful" },
      { level: "vulgar", label: "Vulgar", color: "bg-rose-900 text-rose-100 border-rose-700", description: "Highly offensive, never use" }
    ],
    warmUp: {
      title: "Warm-Up: First Impressions",
      content: "Think about the last time you met someone new. What did you say? How did you feel? In this lesson, you'll learn how native speakers naturally introduce themselves, ask questions, and keep conversations flowing without feeling awkward.",
      contentZh: "想想你最后一次见到新朋友的情景。你是怎么说的？你感觉如何？在本课中，你将学习母语者如何自然地介绍自己、提问并保持对话流畅而不感到尴尬。"
    },
    vocabulary: [
      {
        word: "first impression",
        phonetic: "/fɜːrst ɪmˈpreʃn/",
        chinese: "第一印象",
        pinyin: "dì yī yìn xiàng",
        partOfSpeech: "noun",
        definitionEn: "The opinion you form about someone when you meet them for the first time.",
        definitionZh: "你第一次见到某人时形成的看法。",
        exampleEn: "She made a great first impression with her warm smile.",
        exampleZh: "她温暖的微笑给人留下了很好的第一印象。",
        register: "neutral"
      },
      {
        word: "break the ice",
        phonetic: "/breɪk ðə aɪs/",
        chinese: "打破僵局",
        pinyin: "dǎ pò jiāng jú",
        partOfSpeech: "idiom",
        definitionEn: "To do or say something to relieve tension or get a conversation started.",
        definitionZh: "做或说某事以缓解紧张或开始对话。",
        exampleEn: "I told a joke to break the ice at the meeting.",
        exampleZh: "我在会上讲了个笑话来打破僵局。",
        register: "neutral"
      },
      {
        word: "catch up",
        phonetic: "/kætʃ ʌp/",
        chinese: "叙旧",
        pinyin: "xù jiù",
        partOfSpeech: "phrasal verb",
        definitionEn: "To talk to someone you haven't seen for some time and find out what they have been doing.",
        definitionZh: "与一段时间未见的人交谈并了解他们近况。",
        exampleEn: "Let's grab coffee and catch up.",
        exampleZh: "我们喝杯咖啡叙叙旧吧。",
        register: "neutral"
      },
      {
        word: "swamped",
        phonetic: "/swɒmpt/",
        chinese: "淹没在...中",
        pinyin: "yān mò zài... zhōng",
        partOfSpeech: "adjective",
        definitionEn: "Very busy with too much work or activity.",
        definitionZh: "因太多工作或活动而非常忙碌。",
        exampleEn: "I'm swamped with emails this week.",
        exampleZh: "我这周被邮件淹没了。",
        register: "casual"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-first-meeting-1",
          expression: "You must be...?",
          chinese: "你一定是...？",
          pinyin: "nǐ yī dìng shì...?",
          meaning: "Used to politely guess someone's identity when you think you know them.",
          whenToUse: "When you recognize someone but want to confirm their name. Very common at conferences, parties, or networking events.",
          whenNotToUse: "Never use with strangers if you have no idea who they are — it can feel creepy.",
          nativeFrequency: "Extremely common — you'll hear this almost every week in professional or social settings.",
          commonMistakes: [
            { mistake: "Saying 'Are you...?' directly without softening", correction: "Use 'You must be...?' or 'You're...?' for a warmer tone" }
          ],
          pronunciation: "/ju mʌst bi/",
          funnyExample: "A: You must be the new boss? B: No, I'm the intern who cleans the boss's coffee mugs.",
          memoryTrick: "Think: 'You MUST be the person I'm thinking of.'",
          relatedExpressions: ["We met briefly...", "Nice to officially meet you", "Long time no see"],
          collocations: ["meet someone briefly", "officially meet", "ran into each other"],
          miniQuiz: [
            { question: "When do you say 'You must be...?'", options: ["When guessing identity", "When angry", "When leaving", "When ordering food"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-first-meeting-2",
          expression: "Long time no see",
          chinese: "好久不见",
          pinyin: "hǎo jiǔ bù jiàn",
          meaning: "An informal way to say you haven't seen someone in a long time.",
          whenToUse: "With people you know but haven't seen recently. Works in both casual and neutral settings.",
          whenNotToUse: "Avoid in very formal business settings unless you already have a relationship with the person.",
          nativeFrequency: "Very common — used weekly by most speakers.",
          commonMistakes: [
            { mistake: "Saying 'Long time no see' to someone you just met yesterday", correction: "Use this only when it's actually been a significant time" }
          ],
          pronunciation: "/lɒŋ taɪm nəʊ siː/",
          funnyExample: "A: Long time no see! B: We literally saw each other this morning.",
          memoryTrick: "This is Chinglish that became English — literally means 'long time, no see.'",
          relatedExpressions: ["It's been ages", "How have you been?", "Where have you been hiding?"],
          collocations: ["long time no see", "haven't seen you in ages", "where have you been"],
          miniQuiz: [
            { question: "'Long time no see' is best used when:", options: ["You haven't seen someone for a while", "You see someone every day", "You're angry", "You're ordering food"], correct: 0 }
          ],
          register: "casual"
        }
      ]
    },
    nativeChunks: [
      {
        chunk: "meet someone briefly",
        meaning: "简短地见到某人",
        example: "We met briefly at the conference last week.",
        register: "neutral",
        context: "Describing a short first encounter"
      },
      {
        chunk: "catch up",
        meaning: "叙旧",
        example: "Let's catch up over coffee sometime.",
        register: "neutral",
        context: "Talking to someone you haven't seen recently"
      },
      {
        chunk: "fall into something",
        meaning: "偶然进入某个状态",
        example: "I fell into teaching by accident.",
        register: "neutral",
        context: "Describing how you started your career"
      },
      {
        chunk: "never looked back",
        meaning: "从不回头",
        example: "I switched careers and never looked back.",
        register: "neutral",
        context: "Expressing satisfaction with a past decision"
      },
      {
        chunk: "run into someone",
        meaning: "偶然遇到某人",
        example: "I ran into my old boss downtown.",
        register: "neutral",
        context: "Describing an unexpected meeting"
      }
    ],
    conversation: [
      { speaker: "Alex", line: "Hey, you must be Sarah? I'm Alex — we met briefly at the conference last week?", register: "neutral", note: "Polite guess at identity with softening" },
      { speaker: "Sarah", line: "Oh right! Alex, nice to officially meet you. How have you been?", register: "neutral" },
      { speaker: "Alex", line: "Can't complain, just been swamped with work. How about you?", register: "casual", note: "'Can't complain' = mild positive, not complaining" },
      { speaker: "Sarah", line: "Yeah, still at the marketing agency. Actually, I just got promoted last month!", register: "neutral" },
      { speaker: "Alex", line: "No way, congrats! That's huge. What's your new role?", register: "casual", note: "'No way' = surprised, not literal" },
      { speaker: "Sarah", line: "Thanks! I'm now the senior strategist. It's more responsibility, but I'm loving it.", register: "neutral" },
      { speaker: "Alex", line: "Sounds like you're killing it. What made you get into marketing?", register: "casual", note: "'Killing it' = doing very well" },
      { speaker: "Sarah", line: "Honestly, I fell into it by accident. I was studying communication and took a social media internship — never looked back.", register: "neutral" },
      { speaker: "Alex", line: "That's really cool. I'm in software myself, so completely different world.", register: "neutral" },
      { speaker: "Sarah", line: "Oh nice! What kind of software do you work on?", register: "neutral" },
      { speaker: "Alex", line: "We build apps for small businesses. It's challenging but rewarding, you know?", register: "neutral", note: "'you know' = seeking agreement/connection" },
      { speaker: "Sarah", line: "Totally get that. So, besides work — what do you do for fun?", register: "casual", note: "'Totally get that' = I completely understand" },
      { speaker: "Alex", line: "I try to hike whenever I can. There are some great trails not too far from the city. You into that?", register: "neutral" },
      { speaker: "Sarah", line: "I love hiking! Maybe we should go together sometime?", register: "neutral" },
      { speaker: "Alex", line: "I'd love that. Here — let me give you my number and we can plan something.", register: "neutral" },
      { speaker: "Sarah", line: "Perfect. It was really nice chatting with you, Alex.", register: "neutral" },
      { speaker: "Alex", line: "Same here, Sarah. I'm glad we ran into each other again!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "Alex", line: "嘿，你一定是莎拉吧？我是亚历克斯——我们上周在会议上见过一面？" },
      { speaker: "Sarah", line: "哦对！亚历克斯，很高兴正式认识你。你最近怎么样？" },
      { speaker: "Alex", line: "没什么可抱怨的，就是工作太忙了。你呢？" },
      { speaker: "Sarah", line: "是的，还在营销公司。其实，我上个月刚升职！" },
      { speaker: "Alex", line: "真的吗，恭喜！这太棒了。你的新职位是什么？" },
      { speaker: "Sarah", line: "谢谢！我现在是高级策略师。责任更多了，但我很喜欢。" },
      { speaker: "Alex", line: "听起来你干得很出色。你最初是怎么进入营销行业的？" },
      { speaker: "Sarah", line: "说实话，我是意外进入的。我当时学传播学，然后找了个社交媒体实习——之后就再也离不开了。" },
      { speaker: "Alex", line: "这真的很酷。我从事软件开发，完全是不同的领域。" },
      { speaker: "Sarah", line: "哦真好！你做什么类型的软件？" },
      { speaker: "Alex", line: "我们为小企业开发应用程序。有挑战性但很有意义，你懂的。" },
      { speaker: "Sarah", line: "完全理解。那么，除了工作——你平时玩什么？" },
      { speaker: "Alex", line: "我尽量每周去徒步。离城市不远有一些很棒的步道。你也喜欢吗？" },
      { speaker: "Sarah", line: "我喜欢徒步！也许我们应该找个时间一起去？" },
      { speaker: "Alex", line: "好啊。我给你我的电话号码，我们可以计划一下。" },
      { speaker: "Sarah", line: "太好了。和你聊天真的很愉快，亚历克斯。" },
      { speaker: "Alex", line: "我也是，莎拉。很高兴我们再次相遇！" }
    ],
    grammarInContext: [
      {
        title: "Present Perfect for Life Experience",
        explanation: "Use the present perfect to describe life experiences that connect to the present, or recent actions with present relevance.",
        examples: [
          "I've been swamped with work lately.",
          "I've just gotten promoted.",
          "Have you been to this area before?"
        ]
      },
      {
        title: "Tag Questions for Engagement",
        explanation: "Add '...you know?', '...right?', or '...isn't it?' to statements to invite agreement and keep the conversation flowing.",
        examples: [
          "It's challenging but rewarding, you know?",
          "We should go sometime, right?",
          "It's a beautiful day, isn't it?"
        ]
      }
    ],
    pronunciation: [
      { tip: "Connected speech: 'got to' → 'gotta'", example: "'I gotta run' instead of 'I have got to run'" },
      { tip: "Weak forms: 'to' is often /tə/ or /tu/", example: "'going to' → 'gonna'" },
      { tip: "Tag questions: 'you know' → /ju nəʊ/", example: "Fast, natural speech" }
    ],
    shadowing: [
      { line: "Hey, you must be Sarah? I'm Alex — we met briefly at the conference last week?", emphasis: "must be" },
      { line: "Can't complain, just been swamped with work.", emphasis: "Can't complain" },
      { line: "I fell into it by accident — never looked back.", emphasis: "fell into it by accident" },
      { line: "It's challenging but rewarding, you know?", emphasis: "rewarding, you know" }
    ],
    speakingPractice: {
      instruction: "Tell your partner or record yourself describing how you got into your current job or field of study. Use: 'fell into it by accident', 'never looked back', and 'it's rewarding'.",
      hints: [
        "Start with your background",
        "Mention what made you choose this path",
        "Say what you enjoy most about it now",
        "Use at least 3 collocations from this lesson"
      ],
      followUpQuestions: [
        "What was your first job?",
        "Do you enjoy what you do now?",
        "What would you change about your career path?",
        "What advice would you give someone starting out?"
      ]
    },
    rolePlay: {
      scenario: "You're at a networking event. Approach someone and introduce yourself naturally.",
      prompts: [
        "Introduce yourself and mention where you work",
        "Ask about their work or studies",
        "Find one common interest",
        "Suggest staying in touch"
      ],
      partnerLines: [
        "Oh, I haven't heard of that company before. What do you do there?",
        "That's really interesting! I've always wanted to try that.",
        "We should definitely exchange contact info."
      ]
    },
    homework: {
      task: "Conversation Journal",
      description: "Find a real conversation online (YouTube, podcast, or show) where two people meet for the first time. Write down 5 natural expressions they use. Practice saying them out loud 3 times each.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "What does 'break the ice' mean?",
        questionZh: "'Break the ice'是什么意思？",
        options: [
          { label: "A) To make a situation relaxed", labelZh: "A) 让气氛轻松", correct: true },
          { label: "B) To start a fight", labelZh: "B) 开始打架", correct: false },
          { label: "C) To freeze something", labelZh: "C) 冻住某物", correct: false },
          { label: "D) To break a promise", labelZh: "D) 违背承诺", correct: false }
        ],
        explanation: "'Break the ice' means to do or say something to relieve tension or start a conversation.",
        explanationZh: "'Break the ice'意为做或说某事以缓解紧张或开始对话。"
      },
      {
        id: "q2",
        question: "Which expression means 'I'm very busy'?",
        questionZh: "哪个表达意为'我很忙'？",
        options: [
          { label: "A) I'm swamped", labelZh: "A) 我被淹没了", correct: true },
          { label: "B) I'm free", labelZh: "B) 我有空", correct: false },
          { label: "C) I'm killing time", labelZh: "C) 我在消磨时间", correct: false },
          { label: "D) I'm on cloud nine", labelZh: "D) 我乐不可支", correct: false }
        ],
        explanation: "'Swamped' means very busy with work or activity.",
        explanationZh: "'Swamped'意为因工作或活动而非常忙碌。"
      }
    ],
    review: [
      { key: "break-the-ice", prompt: "What does 'break the ice' mean?", answer: "To make a situation relaxed or start a conversation" },
      { key: "catch-up", prompt: "When do you use 'catch up'?", answer: "When talking to someone you haven't seen recently" },
      { key: "swamped", prompt: "What does 'swamped' mean?", answer: "Very busy with too much work" }
    ],
    humorNotes: [
      {
        context: "When someone asks how you are",
        punchline: "A: How are you? B: Living the dream... with a side of coffee.",
        explanation: "'Living the dream' is often used sarcastically when you're actually tired or busy."
      },
      {
        context: "Talking about bad jobs",
        punchline: "A: Can you cook? B: Absolutely. I can burn water.",
        explanation: "Self-deprecating humor is very common in English conversations."
      }
    ],
    usefulExpressions: [
      { expression: "You must be...?", meaning: "用于确认对方身份", usage: "当你推测某人身份并想知道是否正确时使用" },
      { expression: "Can't complain", meaning: "没什么可抱怨的", usage: "当别人问你好不好时，不想抱怨也不想过度吹嘘" },
      { expression: "Swamped with work", meaning: "被工作淹没", usage: "描述工作非常繁忙" },
      { expression: "Fell into it by accident", meaning: "意外进入某个行业", usage: "描述进入当前领域并非计划之中" },
      { expression: "Never looked back", meaning: "从未回头", usage: "表示做出决定后一直坚持并感到满意" },
      { expression: "Killing it", meaning: "表现得非常出色", usage: "非正式地赞美别人" },
      { expression: "Ran into each other", meaning: "偶然相遇", usage: "描述不期而遇" }
    ],
    collocationsAndChunks: [
      { chunk: "meet someone briefly", meaning: "简短地见到某人", example: "We met briefly at the conference." },
      { chunk: "catch up", meaning: "叙旧", example: "Let's catch up over coffee sometime." },
      { chunk: "fall into something", meaning: "偶然进入某个状态", example: "I fell into teaching by accident." },
      { chunk: "never looked back", meaning: "从不回头", example: "I switched careers and never looked back." },
      { chunk: "run into someone", meaning: "偶然遇到某人", example: "I ran into my old boss downtown." }
    ],
    pronunciationTips: [
      { tip: "Connected speech: 'got to' → 'gotta'", example: "'I gotta run' instead of 'I have got to run'" },
      { tip: "Weak forms: 'to' is often /tə/ or /tu/", example: "'going to' → 'gonna'" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I very like it' instead of 'I really like it'",
        correction: "Use 'really' with verbs, not 'very'",
        explanation: "'Very' modifies adjectives, not verbs."
      },
      {
        mistake: "Overusing 'yes/no' and not expanding responses",
        correction: "Give fuller answers: 'Not bad, thanks. How about you?'",
        explanation: "Native speakers expand beyond one-word answers in social situations."
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You're at a networking event. Approach someone and introduce yourself naturally.",
        prompts: [
          "Introduce yourself and mention where you work",
          "Ask about their work or studies",
          "Find one common interest",
          "Suggest staying in touch"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Promotion",
        synonyms: ["Advancement", "Step up"],
        antonyms: ["Demotion"],
        example: "She got a promotion to manager."
      },
      {
        word: "Strategist",
        synonyms: ["Planner", "Analyst"],
        antonyms: [],
        example: "He works as a business strategist."
      },
      {
        word: "Swamped",
        synonyms: ["Overwhelmed", "Busy"],
        antonyms: ["Free", "Idle"],
        example: "I'm swamped with emails today."
      }
    ],
    shadowingPractice: [
      "Hey, you must be Sarah? I'm Alex — we met briefly at the conference last week?",
      "Can't complain, just been swamped with work.",
      "I fell into it by accident — never looked back.",
      "It's challenging but rewarding, you know?"
    ],
    speakingChallenge: {
      instruction: "Tell your partner or record yourself describing how you got into your current job or field of study. Use: 'fell into it by accident', 'never looked back', and 'it's rewarding'.",
      hints: [
        "Start with your background",
        "Mention what made you choose this path",
        "Say what you enjoy most about it now",
        "Use at least 3 collocations from this lesson"
      ]
    }
  },
  {
    id: "ordering-restaurant",
    title: "Ordering Food at a Restaurant",
    emoji: "🍽️",
    description: "Interacting with waiters, asking questions, and making special requests.",
    color: "from-orange-400 to-red-400",
    level: "A2",
    estimatedTime: "12 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Fine dining or business meals" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard restaurant interaction" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Cafés and casual dining" },
      { level: "very-informal", label: "Very Informal", color: "bg-orange-100 text-orange-800 border-orange-200", description: "Close friends at diners" }
    ],
    warmUp: {
      title: "Warm-Up: Restaurant Anxiety",
      content: "Many learners feel nervous ordering in English. The good news? Native speakers use very predictable, simple phrases. In this lesson, you'll learn the exact phrases waiters use, and how to sound polite but natural when making requests.",
      contentZh: "许多学习者在用英语点餐时会感到紧张。好消息是？母语者使用的短语非常可预测且简单。在本课中，你将学习服务员使用的确切短语，以及如何在提出请求时听起来礼貌而自然。"
    },
    vocabulary: [
      {
        word: "reservation",
        phonetic: "/ˌrezərˈveɪʃn/",
        chinese: "预订",
        pinyin: "yù dìng",
        partOfSpeech: "noun",
        definitionEn: "An arrangement to have a table, room, etc. kept for you at a future time.",
        definitionZh: "安排在未来某个时间为您保留桌子、房间等的预约。",
        exampleEn: "I'd like to make a reservation for 7 PM.",
        exampleZh: "我想预订晚上7点的位置。",
        register: "neutral"
      },
      {
        word: "recommend",
        phonetic: "/ˌrekəˈmend/",
        chinese: "推荐",
        pinyin: "tuī jiàn",
        partOfSpeech: "verb",
        definitionEn: "To suggest something as being good or suitable.",
        definitionZh: "建议某事物好或合适。",
        exampleEn: "Could you recommend something light?",
        exampleZh: "你能推荐点清淡的吗？",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-restaurant-1",
          expression: "I'll have...",
          chinese: "我要...",
          pinyin: "wǒ yào...",
          meaning: "The standard way to order food or drinks politely.",
          whenToUse: "When ordering at a restaurant, café, or bar. Works in almost all settings.",
          whenNotToUse: "Never use 'I want...' instead. 'I want' sounds demanding and rude in service contexts.",
          nativeFrequency: "Extremely common — used multiple times per meal out.",
          commonMistakes: [
            { mistake: "Saying 'I want the salmon'", correction: "Use 'I'll have the salmon' or 'I'd like the salmon'" }
          ],
          pronunciation: "/aɪl hæv/",
          funnyExample: "A: I'll have the special! B: Great. Would you like the side of attitude with that?",
          memoryTrick: "Think: 'I'll have = I will have' — you're DECIDING now.",
          relatedExpressions: ["I'd like...", "I'll go with...", "I'll take..."],
          collocations: ["have the special", "have the steak", "have it to go"],
          miniQuiz: [
            { question: "Which is the most natural way to order?", options: ["I'll have the pasta", "I want pasta", "Give me pasta", "Pasta, now"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-restaurant-2",
          expression: "On the side",
          chinese: "分开装",
          pinyin: "fēn kāi zhuāng",
          meaning: "Requesting that something be served separately from the main dish.",
          whenToUse: "When you want sauce, dressing, or condiments separate from your food.",
          whenNotToUse: "Don't use for main dishes — 'on the side' is only for extras.",
          nativeFrequency: "Very common at restaurants, especially for salads.",
          commonMistakes: [
            { mistake: "Saying 'separate, please'", correction: "'On the side' is the standard phrase" }
          ],
          pronunciation: "/ɒn ðə saɪd/",
          funnyExample: "A: Can I have the dressing on the side? B: Sure, and would you like the fork on the side too?",
          memoryTrick: "Think: 'Put it on the SIDE of the plate, not on my food.'",
          relatedExpressions: ["Dressing on the side", "Sauce on the side", "Extra on the side"],
          collocations: ["dressing on the side", "sauce on the side", "butter on the side"],
          miniQuiz: [
            { question: "What does 'on the side' mean?", options: ["Served separately", "Cheaper", "Bigger portion", "Free"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "do you have any...", meaning: "询问是否有", example: "Do you have any specials tonight?", register: "neutral", context: "Asking about menu items" },
      { chunk: "I'll have...", meaning: "我要...", example: "I'll have the salmon, please.", register: "neutral", context: "Ordering food" },
      { chunk: "on the side", meaning: "分开装", example: "Could I get the dressing on the side?", register: "neutral", context: "Making special requests" },
      { chunk: "check on you", meaning: "查看您的需求", example: "I'll check on you in a few minutes.", register: "neutral", context: "Server checking tables" },
      { chunk: "my pleasure", meaning: "乐意效劳", example: "Thanks for your help! My pleasure.", register: "neutral", context: "Polite response to thanks" }
    ],
    conversation: [
      { speaker: "Waiter", line: "Good evening! Do you have a reservation?", register: "formal", note: "Standard greeting with polite question" },
      { speaker: "Mike", line: "Yes, under the name Turner. Party of two.", register: "neutral" },
      { speaker: "Waiter", line: "Perfect, right this way. Here are your menus — I'll give you a moment.", register: "neutral", note: "'I'll give you a moment' = standard server phrase" },
      { speaker: "Emma", line: "Thanks! Could we get some water while we decide?", register: "neutral" },
      { speaker: "Waiter", line: "Absolutely. Still or sparkling?", register: "neutral" },
      { speaker: "Mike", line: "I'll have still, please. Do you have any specials tonight?", register: "neutral" },
      { speaker: "Waiter", line: "Tonight's special is grilled salmon with roasted vegetables. It's really popular.", register: "neutral" },
      { speaker: "Emma", line: "That sounds nice, but I was eyeing the pasta. Is the truffle sauce good?", register: "casual", note: "'eyeing' = looking at, considering" },
      { speaker: "Waiter", line: "Oh, the truffle sauce is amazing — it's made in-house. Highly recommended.", register: "neutral" },
      { speaker: "Mike", line: "I'll go with the salmon, medium rare please. And the truffle pasta for her.", register: "neutral" },
      { speaker: "Emma", line: "One more thing — could I get my dressing on the side for the salad?", register: "neutral", note: "Polite request with 'One more thing'" },
      { speaker: "Waiter", line: "Of course. Anything else? Allergies I should know about?", register: "neutral" },
      { speaker: "Mike", line: "Nope, we're good. When do you expect our food?", register: "casual" },
      { speaker: "Waiter", line: "About 15–20 minutes. I'll bring your drinks right away.", register: "neutral" },
      { speaker: "Emma", line: "Thanks so much! You've been really helpful.", register: "neutral" },
      { speaker: "Waiter", line: "My pleasure. I'll check on you soon.", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "Waiter", line: "晚上好！您有预订吗？" },
      { speaker: "Mike", line: "有的，在Turner名下。两位。" },
      { speaker: "Waiter", line: "好的，这边请。这是菜单——我先让您看一下。" },
      { speaker: "Emma", line: "谢谢！我们做决定的时候能先给我们上点水吗？" },
      { speaker: "Waiter", line: "当然。要常温水还是气泡水？" },
      { speaker: "Mike", line: "我要常温的。对了，今晚有什么特色菜吗？" },
      { speaker: "Waiter", line: "今晚的特色菜是烤三文鱼配烤蔬菜。很受欢迎。" },
      { speaker: "Emma", line: "听起来不错，不过我其实在看意面。松露酱好吃吗？" },
      { speaker: "Waiter", line: "哦，松露酱非常棒——是店里自制的。强烈推荐。" },
      { speaker: "Mike", line: "我要三文鱼，三分熟。她要松露意面。" },
      { speaker: "Emma", line: "还有一件事——我的沙拉酱能放在旁边吗？" },
      { speaker: "Waiter", line: "没问题。还要别的吗？有什么过敏的吗？" },
      { speaker: "Mike", line: "没有，我们没问题。我们的菜大概要多久？" },
      { speaker: "Waiter", line: "大约15-20分钟。我马上给您送饮料。" },
      { speaker: "Emma", line: "非常感谢！你真的很热心。" },
      { speaker: "Waiter", line: "乐意效劳。我稍后会过来看您。" }
    ],
    grammarInContext: [
      {
        title: "Polite Requests with 'Could' and 'Would'",
        explanation: "In restaurants and service contexts, use 'Could/Can/Would you...?' structures to make polite requests. Adding 'please' makes it even more polite.",
        examples: [
          "Could I get the dressing on the side?",
          "Would you recommend the salmon?",
          "Can we get some water, please?"
        ]
      }
    ],
    pronunciation: [
      { tip: "'Could we' → /kʊd wi/ with linking", example: "Could we → 'Coudwee'" },
      { tip: "'Would you' → /wʊdʒə/ with elision", example: "Would you → 'Woodja'" }
    ],
    shadowing: [
      { line: "Good evening! Do you have a reservation?", emphasis: "Do you have" },
      { line: "I'll give you a moment to look things over.", emphasis: "give you a moment" },
      { line: "Tonight's special is grilled salmon with roasted vegetables.", emphasis: "Tonight's special" },
      { line: "Could I get the dressing on the side, please?", emphasis: "Could I get" }
    ],
    speakingPractice: {
      instruction: "Practice ordering at a restaurant. Change the details: different drink, different dish, different special request. Record yourself.",
      hints: [
        "Try 'a cappuccino with almond milk'",
        "Try 'a cold brew with oat milk and vanilla syrup'",
        "Ask 'Is the muffin fresh today?'",
        "Practice 'Could I get...?'"
      ],
      followUpQuestions: [
        "What did you order?",
        "Did you make any special requests?",
        "How was the service?",
        "Would you go back to that restaurant?"
      ]
    },
    rolePlay: {
      scenario: "You are at a café. Order a drink and a snack. Ask about today's special. Make a special request.",
      prompts: [
        "Greet the server and ask to see the menu",
        "Ask about today's specials",
        "Order your drink and snack",
        "Make one polite request or modification"
      ],
      partnerLines: [
        "Hi there! What can I get for you?",
        "Our special today is lavender latte with oat milk.",
        "Would you like that hot or iced?",
        "Sure, I can do that for you."
      ]
    },
    homework: {
      task: "Real-World Ordering",
      description: "Go to a café or restaurant this week and order in English. Write down exactly what you said and what the server said. Reflect: did you feel more confident?",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "Which is the most polite way to order?",
        questionZh: "哪种点餐方式最有礼貌？",
        options: [
          { label: "A) I'll have the salad, please.", labelZh: "A) 我要沙拉，谢谢。", correct: true },
          { label: "B) Give me the salad.", labelZh: "B) 给我沙拉。", correct: false },
          { label: "C) I want the salad.", labelZh: "C) 我要沙拉。", correct: false },
          { label: "D) Salad. Now.", labelZh: "D) 沙拉。现在。", correct: false }
        ],
        explanation: "'I'll have...' is the standard polite way to order. 'I want' sounds demanding.",
        explanationZh: "'I'll have...'是标准的礼貌点餐方式。'I want'听起来很命令式。"
      },
      {
        id: "q2",
        question: "'On the side' means:",
        questionZh: "'On the side'意思是：",
        options: [
          { label: "A) Served separately", labelZh: "A) 分开装", correct: true },
          { label: "B) Cheaper", labelZh: "B) 更便宜", correct: false },
          { label: "C) Bigger", labelZh: "C) 更大", correct: false },
          { label: "D) Free", labelZh: "D) 免费", correct: false }
        ],
        explanation: "'On the side' means served separately from the main dish.",
        explanationZh: "'On the side'意为与主菜分开装。"
      }
    ],
    review: [
      { key: "reservation", prompt: "How do you ask if someone has a reservation?", answer: "Do you have a reservation?" },
      { key: "order", prompt: "What's the polite way to order food?", answer: "I'll have... or I'd like..." },
      { key: "side", prompt: "What does 'on the side' mean?", answer: "Served separately from the main dish" }
    ],
    humorNotes: [
      {
        context: "When the waiter asks how everything is",
        punchline: "A: How is everything? B: Delicious! I'm also adding a tip for the chef.",
        explanation: "Saying you're adding a tip for the chef is a friendly joke that servers appreciate."
      }
    ],
    usefulExpressions: [
      { expression: "Do you have a reservation?", meaning: "您有预订吗？", usage: "餐厅服务员询问预订情况的标准说法" },
      { expression: "Party of two", meaning: "两位", usage: "告诉服务员用餐人数" },
      { expression: "I'll give you a moment", meaning: "给您一点时间", usage: "服务员让顾客慢慢看菜单" },
      { expression: "Could we get...?", meaning: "我们能要...吗？", usage: "礼貌地提出请求" },
      { expression: "On the side", meaning: "分开装", usage: "要求酱料、配菜等分开" },
      { expression: "Check on you", meaning: "查看您的需求", usage: "服务员表示会再次照顾客人" }
    ],
    collocationsAndChunks: [
      { chunk: "look things over", meaning: "查看", example: "Take your time and look things over." },
      { chunk: "get something", meaning: "要某物", example: "Could we get some water?" },
      { chunk: "eye something", meaning: "看中某物", example: "I was eyeing the chocolate cake." },
      { chunk: "in-house", meaning: "店内的", example: "The sauce is made in-house." }
    ],
    pronunciationTips: [
      { tip: "'Could we' → /kʊd wi/ with linking", example: "Could we → 'Coudwee'" },
      { tip: "'Would you' → /wʊdʒə/ with elision", example: "Would you → 'Woodja'" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I want the salmon' instead of 'I'll have...'",
        correction: "Use 'I'll have...' or 'I'd like...' for politeness",
        explanation: "直接说 'I want' 在餐厅听起来很粗鲁。"
      },
      {
        mistake: "Saying 'Can I get...' without 'please'",
        correction: "Always add 'please' when making requests",
        explanation: "即使是非正式场合，'please' 也是必要的礼貌用语。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are at a café. Order a drink and a snack. Ask about today's special. Make a special request.",
        prompts: [
          "Greet the server and ask to see the menu",
          "Ask about today's specials",
          "Order your drink and snack",
          "Make one polite request or modification"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Reservation",
        synonyms: ["Booking", "Advance notice"],
        antonyms: ["Walk-in"],
        example: "I made a reservation for 7 PM."
      },
      {
        word: "Recommend",
        synonyms: ["Suggest", "Advise"],
        antonyms: ["Discourage"],
        example: "I recommend the pasta."
      }
    ],
    shadowingPractice: [
      "Good evening! Do you have a reservation?",
      "I'll give you a moment to look things over.",
      "Tonight's special is grilled salmon with roasted vegetables.",
      "Could I get the dressing on the side, please?"
    ],
    speakingChallenge: {
      instruction: "Practice ordering at a coffee shop. Change the details: different drink, different milk, different snack. Record yourself.",
      hints: [
        "Try 'a cappuccino with almond milk'",
        "Try 'a cold brew with oat milk and vanilla syrup'",
        "Ask 'Is the muffin fresh today?'",
        "Practice 'Could I get...?'"
      ]
    }
  }
];

export default conversations;
