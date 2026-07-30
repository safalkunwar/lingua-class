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
    vocabularyPreview: [
      { word: "first impression", phonetic: "/fɜːrst ɪmˈpreʃn/", chinese: "第一印象", partOfSpeech: "noun" },
      { word: "connect", phonetic: "/kəˈnekt/", chinese: "建立联系", partOfSpeech: "verb" },
      { word: "awkward", phonetic: "/ˈɔːkwərd/", chinese: "尴尬的", partOfSpeech: "adjective" },
      { word: "break the ice", phonetic: "/breɪk ðə aɪs/", chinese: "打破僵局", partOfSpeech: "idiom" },
      { word: "hometown", phonetic: "/ˈhoʊmtaʊn/", chinese: "家乡", partOfSpeech: "noun" },
      { word: "catch up", phonetic: "/kætʃ ʌp/", chinese: "叙旧", partOfSpeech: "phrasal verb" },
      { word: "industry", phonetic: "/ˈɪndəstri/", chinese: "行业", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Alex", line: "Hey, you must be Sarah? I'm Alex — we met briefly at the conference last week?" },
      { speaker: "Sarah", line: "Oh right! Alex, nice to officially meet you. How have you been?" },
      { speaker: "Alex", line: "Can't complain, just been swamped with work. How about you?" },
      { speaker: "Sarah", line: "Yeah, still at the marketing agency. Actually, I just got promoted last month!" },
      { speaker: "Alex", line: "No way, congrats! That's huge. What's your new role?" },
      { speaker: "Sarah", line: "Thanks! I'm now the senior strategist. It's more responsibility, but I'm loving it." },
      { speaker: "Alex", line: "Sounds like you're killing it. What made you get into marketing?" },
      { speaker: "Sarah", line: "Honestly, I fell into it by accident. I was studying communication and took a social media internship — never looked back." },
      { speaker: "Alex", line: "That's really cool. I'm in software myself, so completely different world." },
      { speaker: "Sarah", line: "Oh nice! What kind of software do you work on?" },
      { speaker: "Alex", line: "We build apps for small businesses. It's challenging but rewarding, you know?" },
      { speaker: "Sarah", line: "Totally get that. So, besides work — what do you do for fun?" },
      { speaker: "Alex", line: "I try to hike whenever I can. There are some great trails not too far from the city. You into that?" },
      { speaker: "Sarah", line: "I love hiking! Maybe we should go together sometime?" },
      { speaker: "Alex", line: "I'd love that. Here — let me give you my number and we can plan something." },
      { speaker: "Sarah", line: "Perfect. It was really nice chatting with you, Alex." },
      { speaker: "Alex", line: "Same here, Sarah. I'm glad we ran into each other again!" }
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
    usefulExpressions: [
      { expression: "You must be...?", meaning: "用于确认对方身份", usage: "当你推测某人身份并想知道是否正确时使用" },
      { expression: "Can't complain", meaning: "没什么可抱怨的", usage: "当别人问你好不好时，不想抱怨也不想过度吹嘘" },
      { expression: "Swamped with work", meaning: "被工作淹没", usage: "描述工作非常繁忙" },
      { expression: "Fell into it by accident", meaning: "意外进入某个行业", usage: "描述进入当前领域并非计划之中" },
      { expression: "Never looked back", meaning: "从未回头", usage: "表示做出决定后一直坚持并感到满意" },
      { expression: "Killing it", meaning: "表现得非常出色", usage: "非正式地赞美别人" },
      { expression: "Ran into each other", meaning: "偶然相遇", usage: "描述不期而遇" }
    ],
    grammarFocus: [
      {
        title: "Present Perfect for Life Experience",
        explanation: "用现在完成时描述从过去持续到现在的人生经历，或者刚刚完成的动作。",
        examples: [
          "I've been swamped with work lately.",
          "I've just gotten promoted.",
          "Have you been to this area before?"
        ]
      },
      {
        title: "Past Simple vs. Present Perfect",
        explanation: "具体过去时间用过去时，泛指过去到现在用现在完成时。",
        examples: [
          "I fell into it by accident (specific past moment).",
          "I've been studying communication (ongoing relevance)."
        ]
      }
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
    vocabularyPreview: [
      { word: "reservation", phonetic: "/ˌrezərˈveɪʃn/", chinese: "预订", partOfSpeech: "noun" },
      { word: "recommend", phonetic: "/ˌrekəˈmend/", chinese: "推荐", partOfSpeech: "verb" },
      { word: "allergic", phonetic: "/əˈlɜːrdʒɪk/", chinese: "过敏的", partOfSpeech: "adjective" },
      { word: "customize", phonetic: "/ˈkʌstəmaɪz/", chinese: "定制", partOfSpeech: "verb" }
    ],
    conversation: [
      { speaker: "Waiter", line: "Good evening! Do you have a reservation?" },
      { speaker: "Mike", line: "Yes, under the name Turner. Party of two." },
      { speaker: "Waiter", line: "Perfect, right this way. Here are your menus — I'll give you a moment." },
      { speaker: "Emma", line: "Thanks! Could we get some water while we decide?" },
      { speaker: "Waiter", line: "Absolutely. Still or sparkling?" },
      { speaker: "Mike", line: "I'll have still, please. Do you have any specials tonight?" },
      { speaker: "Waiter", line: "Tonight's special is grilled salmon with roasted vegetables. It's really popular." },
      { speaker: "Emma", line: "That sounds nice, but I was eyeing the pasta. Is the truffle sauce good?" },
      { speaker: "Waiter", line: "Oh, the truffle sauce is amazing — it's made in-house. Highly recommended." },
      { speaker: "Mike", line: "I'll go with the salmon, medium rare please. And the truffle pasta for her." },
      { speaker: "Emma", line: "One more thing — could I get my dressing on the side for the salad?" },
      { speaker: "Waiter", line: "Of course. Anything else? Allergies I should know about?" },
      { speaker: "Mike", line: "Nope, we're good. When do you expect our food?" },
      { speaker: "Waiter", line: "About 15–20 minutes. I'll bring your drinks right away." },
      { speaker: "Emma", line: "Thanks so much! You've been really helpful." },
      { speaker: "Waiter", line: "My pleasure. I'll check on you soon." }
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
    usefulExpressions: [
      { expression: "Do you have a reservation?", meaning: "您有预订吗？", usage: "餐厅服务员询问预订情况的标准说法" },
      { expression: "Party of two", meaning: "两位", usage: "告诉服务员用餐人数" },
      { expression: "I'll give you a moment", meaning: "给您一点时间", usage: "服务员让顾客慢慢看菜单" },
      { expression: "Could we get...?", meaning: "我们能要...吗？", usage: "礼貌地提出请求" },
      { expression: "On the side", meaning: "分开装", usage: "要求酱料、配菜等分开" },
      { expression: "Check on you", meaning: "查看您的需求", usage: "服务员表示会再次照顾客人" }
    ],
    grammarFocus: [
      {
        title: "Polite Requests with 'Could' and 'Would'",
        explanation: "在餐厅等场合，用 'Could/Can/Would you...?' 结构表达礼貌请求。",
        examples: [
          "Could I get the dressing on the side?",
          "Would you recommend the salmon?",
          "Can we get some water, please?"
        ]
      }
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
      instruction: "Role-play ordering food at a restaurant with a friend. Take turns being waiter and customer. Use at least 5 expressions from this lesson.",
      hints: [
        "Start with a greeting and ask about reservations",
        "Ask about the daily special",
        "Order food and make one modification",
        "Thank the server politely"
      ]
    }
  },
  {
    id: "coffee-shop",
    title: "Buying Coffee",
    emoji: "☕",
    description: "Ordering at a coffee shop, customizing drinks, and quick conversations.",
    color: "from-amber-400 to-yellow-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "brew", phonetic: "/bruː/", chinese: "冲泡", partOfSpeech: "verb" },
      { word: "latte", phonetic: "/ˈlɑːteɪ/", chinese: "拿铁", partOfSpeech: "noun" },
      { word: "espresso", phonetic: "/eˈspresoʊ/", chinese: "浓缩咖啡", partOfSpeech: "noun" },
      { word: "skim milk", phonetic: "/skɪm mɪlk/", chinese: "脱脂牛奶", partOfSpeech: "noun" },
      { word: "to-go", phonetic: "/tə ɡoʊ/", chinese: "外带", partOfSpeech: "adjective" }
    ],
    conversation: [
      { speaker: "Barista", line: "Hey there! What can I get for you?" },
      { speaker: "Lisa", line: "Hi! I'll take a large latte, please." },
      { speaker: "Barista", line: "Sure. Milk choice — we have whole, skim, oat, and almond." },
      { speaker: "Lisa", line: "Oat milk, please. And can you make it with an extra shot?" },
      { speaker: "Barista", line: "Of course. That'll be one extra shot for $1.10. Anything else?" },
      { speaker: "Lisa", line: "Actually, throw in a blueberry muffin too. Is that gluten-free?" },
      { speaker: "Barista", line: "Nope, it has gluten, unfortunately. Our gluten-free option is the banana bread." },
      { speaker: "Lisa", line: "Hmm, I'll just take the muffin then. I'm not that strict about gluten anyway." },
      { speaker: "Barista", line: "Haha, fair enough. So that's one oat milk latte with an extra shot and a blueberry muffin." },
      { speaker: "Lisa", line: "Exactly. Oh — and can I get that for here or to-go?" },
      { speaker: "Barista", line: "To-go, you said?" },
      { speaker: "Lisa", line: "Actually, make it for here. I'll stay and chat with my friend." },
      { speaker: "Barista", line: "You got it. That'll be $7.50 total." },
      { speaker: "Lisa", line: "Here's my card. Oh, and do you have a loyalty program?" },
      { speaker: "Barista", line: "We do! Every 10th drink is free. I'll punch your card." },
      { speaker: "Lisa", line: "Perfect! Thanks so much." },
      { speaker: "Barista", line: "You're welcome! I'll call your name when it's ready." }
    ],
    chineseTranslation: [
      { speaker: "Barista", line: "嗨！您想喝点什么？" },
      { speaker: "Lisa", line: "你好！我要一大杯拿铁，谢谢。" },
      { speaker: "Barista", line: "好的。要什么牛奶？我们有全脂、脱脂、燕麦和杏仁奶。" },
      { speaker: "Lisa", line: "请给我燕麦奶。能多加一份浓缩吗？" },
      { speaker: "Barista", line: "没问题。额外加一份浓缩是1.10美元。还要别的吗？" },
      { speaker: "Lisa", line: "其实，再来一个蓝莓松饼。那个是无麸质的吗？" },
      { speaker: "Barista", line: "不巧，那个含麸质。我们的无麸质选项是香蕉面包。" },
      { speaker: "Lisa", line: "嗯，那我还是要松饼吧。我对麸质也没那么严格。" },
      { speaker: "Barista", line: "哈哈，好吧。那就是一杯燕麦奶拿铁加一份浓缩，外加一个蓝莓松饼。" },
      { speaker: "Lisa", line: "对的。哦——我是要在这里喝还是外带？" },
      { speaker: "Barista", line: "您刚才说外带？" },
      { speaker: "Lisa", line: "其实，就在这里喝。我要和朋友在这坐会儿。" },
      { speaker: "Barista", line: "好的。总共7.50美元。" },
      { speaker: "Lisa", line: "这是我的卡。哦，你们有会员积分吗？" },
      { speaker: "Barista", line: "有的！每喝10杯送一杯。我给您打卡。" },
      { speaker: "Lisa", line: "太好了！非常感谢。" },
      { speaker: "Barista", line: "不客气！做好了我会叫您的名字。" }
    ],
    usefulExpressions: [
      { expression: "What can I get for you?", meaning: "您要点什么？", usage: "咖啡师的标准用语" },
      { expression: "Throw in", meaning: "额外加上", usage: "非正式地请求添加东西" },
      { expression: "I'm not that strict about...", meaning: "我对...没那么严格", usage: "表示在某个方面比较随意" },
      { expression: "You got it", meaning: "没问题", usage: "确认对方的要求" },
      { expression: "Make it for here/to-go", meaning: "在这喝/外带", usage: "选择用餐方式" }
    ],
    grammarFocus: [
      {
        title: "Imperatives for Polite Instructions",
        explanation: "服务员用省略句表示礼貌和效率。",
        examples: [
          "Here you are!",
          "Take your time.",
          "I'll call your name when it's ready."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "get for you", meaning: "为您点单", example: "What can I get for you?" },
      { chunk: "throw in", meaning: "额外加上", example: "Throw in an extra cookie." },
      { chunk: "not that strict about", meaning: "对...没那么严格", example: "I'm not that strict about diet." }
    ],
    pronunciationTips: [
      { tip: "'Extra shot' → /ˈekstrə ʃɑːt/", example: "'Shot' sounds like 'shaw' in fast speech" },
      { tip: "'Could you' → /kədʒə/ in fast speech", example: "Could you call my name? → Coudja call my name?" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I want a latte' without 'please'",
        correction: "Use 'I'll have...' or 'I'd like...'",
        explanation: "直接说 'I want' 显得粗鲁。"
      },
      {
        mistake: "Using 'take away' instead of 'to-go'",
        correction: "American: 'to-go'; British: 'takeaway'",
        explanation: "注意地区差异。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are buying coffee for yourself and a friend. Order customized drinks. Ask about the menu and loyalty program.",
        prompts: [
          "Greet the barista",
          "Order your drink with customization",
          "Ask about a menu item",
          "Ask about loyalty programs"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Latte",
        synonyms: ["Cappuccino", "Americano"],
        antonyms: [],
        example: "I drink a latte every morning."
      },
      {
        word: "Skim milk",
        synonyms: ["Non-fat milk", "Low-fat milk"],
        antonyms: ["Whole milk"],
        example: "Can I have skim milk instead of whole?"
      }
    ],
    shadowingPractice: [
      "Hey there! What can I get for you?",
      "I'll take a large latte, please.",
      "Could you make it with an extra shot?",
      "That'll be $7.50 total."
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
  },
  {
    id: "grocery-shopping",
    title: "Going Shopping",
    emoji: "🛍️",
    description: "Asking about sizes, trying things on, and negotiating prices.",
    color: "from-pink-400 to-rose-400",
    level: "A2",
    estimatedTime: "12 min",
    vocabularyPreview: [
      { word: "fitting room", phonetic: "/ˈfɪtɪŋ ruːm/", chinese: "试衣间", partOfSpeech: "noun" },
      { word: "cashier", phonetic: "/kæˈʃɪr/", chinese: "收银员", partOfSpeech: "noun" },
      { word: "discount", phonetic: "/ˈdɪskaʊnt/", chinese: "折扣", partOfSpeech: "noun" },
      { word: "refund", phonetic: "/ˈriːfʌnd/", chinese: "退款", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Sales associate", line: "Hi there! Let me know if you need any help finding your size." },
      { speaker: "Jenny", line: "Thanks! I'm just looking for casual summer dresses — do you have anything in medium?" },
      { speaker: "Sales associate", line: "Absolutely! We have a whole new section right here. What's your price range?" },
      { speaker: "Jenny", line: "I'd prefer something under $60, if possible. I'm on a bit of a budget." },
      { speaker: "Sales associate", line: "We have some lovely options right here. This floral one is on sale — 30% off." },
      { speaker: "Jenny", line: "Oh, that's cute! Can I try it on?" },
      { speaker: "Sales associate", line: "Of course! The fitting rooms are right over there. Size medium is on the hanger." },
      { speaker: "Jenny", line: "Perfect. Oh — do you take credit cards?" },
      { speaker: "Sales associate", line: "Yes, we take Visa, Mastercard, and Apple Pay. Cash too, if you prefer." },
      { speaker: "Jenny", line: "Great. I'll be right back!" },
      { speaker: "Jenny", line: "(coming back) Hmm, it's a little tight around the shoulders. Do you have a large?" },
      { speaker: "Sales associate", line: "Let me check... yes, right here! I'll also grab a few other styles for you." },
      { speaker: "Jenny", line: "You're a lifesaver. Also, if I buy two, is there an additional discount?" },
      { speaker: "Sales associate", line: "Actually, yes — 20% off when you buy two or more items today only." },
      { speaker: "Jenny", line: "That works for me! I'll try these too." }
    ],
    chineseTranslation: [
      { speaker: "Sales associate", line: "您好！如果需要帮忙找尺码请告诉我。" },
      { speaker: "Jenny", line: "谢谢！我在找休闲的夏季连衣裙——你们有中码的吗？" },
      { speaker: "Sales associate", line: "当然有！我们正好有一整排新款。您的预算大概是多少？" },
      { speaker: "Jenny", line: "如果可能的话，我想找60美元以下的。我的预算有点紧。" },
      { speaker: "Sales associate", line: "这里有一些很美的选择。这条花裙子正在打折——七折。" },
      { speaker: "Jenny", line: "哦，好可爱！我能试穿一下吗？" },
      { speaker: "Sales associate", line: "当然！试衣间就在那边。中码在衣架上挂着。" },
      { speaker: "Jenny", line: "太好了。哦——你们接受信用卡吗？" },
      { speaker: "Sales associate", line: "是的，我们接受Visa、Mastercard和Apple Pay。现金也可以。" },
      { speaker: "Jenny", line: "太好了。我马上回来！" },
      { speaker: "Jenny", line: "（回来）嗯，肩膀这里有点紧。有大码的吗？" },
      { speaker: "Sales associate", line: "让我查一下...有的，在这里！我再给您拿几款其他样式。" },
      { speaker: "Jenny", line: "你真是帮了大忙。另外，如果我买两件，还有额外折扣吗？" },
      { speaker: "Sales associate", line: "实际上有的——今天买两件或以上享八折。" },
      { speaker: "Jenny", line: "那对我很合适！我也试试这几件。" }
    ],
    usefulExpressions: [
      { expression: "I'm just looking", meaning: "我只是随便看看", usage: "当店员主动帮忙时使用" },
      { expression: "On sale", meaning: "打折中", usage: "描述特价商品" },
      { expression: "Let me know if you need anything", meaning: "有需要随时告诉我", usage: "店员的标准用语" },
      { expression: "Try it on", meaning: "试穿", usage: "请求试穿衣物" },
      { expression: "That works for me", meaning: "这对我合适", usage: "接受提议或方案" },
      { expression: "You're a lifesaver", meaning: "你真是帮了大忙", usage: "非正式地表达感谢" }
    ],
    grammarFocus: [
      {
        title: "Present Continuous for Current Actions",
        explanation: "用现在进行时描述当前正在进行的动作。",
        examples: [
          "I'm looking for a dress.",
          "I'm on a bit of a budget.",
          "I'm just browsing, thanks."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "on a budget", meaning: "预算有限", example: "I'm looking for something under $50 because I'm on a budget." },
      { chunk: "try something on", meaning: "试穿", example: "Can I try this on in a smaller size?" },
      { chunk: "works for me", meaning: "这对我合适", example: "That price works for me." },
      { chunk: "right over there", meaning: "就在那边", example: "The fitting rooms are right over there." }
    ],
    pronunciationTips: [
      { tip: "'Could you' → /kədʒə/ in natural speech", example: "Could you check for a large?" },
      { tip: "Weak 'and' → /ən/ or /n/", example: "bread and butter → bread'n'butter" }
    ],
    commonMistakes: [
      {
        mistake: "Using 'big' instead of 'large' for clothing sizes",
        correction: "Clothing sizes are small, medium, large",
        explanation: "服装尺码用 small/medium/large，不用 big/small。"
      },
      {
        mistake: "Saying 'expensive' instead of 'I can't afford it'",
        correction: "Use softer phrases: 'That's a bit over my budget'",
        explanation: "直接说贵可能显得不礼貌，用预算概念更委婉。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are shopping for a birthday gift for a friend. Ask the salesperson for help.",
        prompts: [
          "Greet the salesperson",
          "Explain what you're looking for",
          "Ask about price and alternatives",
          "Decide whether to buy"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Fitting room",
        synonyms: ["Changing room", "Dressing room"],
        antonyms: [],
        example: "I need to use the fitting room."
      },
      {
        word: "Budget",
        synonyms: ["Allowance", "Price range"],
        antonyms: ["Luxury", "Excess"],
        example: "I'm on a tight budget this month."
      }
    ],
    shadowingPractice: [
      "Hi there! Let me know if you need any help finding your size.",
      "We have some lovely options right here.",
      "Could I try it on, please?",
      "That works for me!"
    ],
    speakingChallenge: {
      instruction: "Practice a shopping dialogue. Change the item: shoes, jacket, or phone case. Use 'I'm just looking', 'Can I try this on?', 'Do you have a large?', and 'That works for me'.",
      hints: [
        "Try buying a pair of sneakers",
        "Ask about the material and warranty",
        "Ask about student discount",
        "Complete the purchase"
      ]
    }
  },
  {
    id: "taxi-ride",
    title: "Taking a Taxi / Uber",
    emoji: "🚕",
    description: "Getting a ride, giving directions, and handling payment.",
    color: "from-yellow-400 to-amber-400",
    level: "A2",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "destination", phonetic: "/ˌdestɪˈneɪʃn/", chinese: "目的地", partOfSpeech: "noun" },
      { word: "pickup", phonetic: "/ˈpɪkʌp/", chinese: "接人地点", partOfSpeech: "noun" },
      { word: "traffic", phonetic: "/ˈtræfɪk/", chinese: "交通", partOfSpeech: "noun" },
      { word: "estimated", phonetic: "/ˈestɪmeɪtɪd/", chinese: "预估的", partOfSpeech: "adjective" }
    ],
    conversation: [
      { speaker: "Driver", line: "Hi there! Are you heading to the airport?" },
      { speaker: "Tom", line: "Yes, Terminal 3. Is that a long ride?" },
      { speaker: "Driver", line: "About 35 minutes, depending on traffic. I'll take the highway — it's usually faster." },
      { speaker: "Tom", line: "Sounds good. Do you mind if I stop briefly to grab a coffee? It's just around the corner." },
      { speaker: "Driver", line: "Sure, no problem. I'll pull over here." },
      { speaker: "Tom", line: "Thanks! I'll be two minutes tops." },
      { speaker: "Driver", line: "Take your time. Do you want the receipt emailed or printed?" },
      { speaker: "Tom", line: "Emailed, please. Oh, and could you turn up the AC a bit? It's a bit warm in here." },
      { speaker: "Driver", line: "Of course. Here you go — saved you a few minutes. We should make it with time to spare." },
      { speaker: "Tom", line: "Perfect. Thanks for the smooth ride!" }
    ],
    chineseTranslation: [
      { speaker: "Driver", line: "嗨！您要去机场吗？" },
      { speaker: "Tom", line: "是的，3号航站楼。路程远吗？" },
      { speaker: "Driver", line: "大约35分钟，看交通情况。我走高速——通常更快。" },
      { speaker: "Tom", line: "听起来不错。您介意我稍微停一下买杯咖啡吗？就在拐角处。" },
      { speaker: "Driver", line: "当然没问题。我在这里靠边停。" },
      { speaker: "Tom", line: "谢谢！我最多两分钟就好。" },
      { speaker: "Driver", line: "慢慢来。您要收据发邮件还是打印？" },
      { speaker: "Tom", line: "发邮件吧。哦——能把空调开大一点吗？这里有点热。" },
      { speaker: "Driver", line: "当然。好了——帮您省了几分钟。我们应该能提前到达。" },
      { speaker: "Tom", line: "太好了。谢谢这趟顺畅的行程！" }
    ],
    usefulExpressions: [
      { expression: "Are you heading to...?", meaning: "您要去...吗？", usage: "司机确认目的地" },
      { expression: "Depending on traffic", meaning: "看交通情况", usage: "表示时间不确定" },
      { expression: "Take your time", meaning: "慢慢来", usage: "让对方不着急" },
      { expression: "Pull over", meaning: "靠边停", usage: "司机停车" },
      { expression: "With time to spare", meaning: "提前到达", usage: "表示时间充裕" }
    ],
    grammarFocus: [
      {
        title: "Conditional with 'depending on'",
        explanation: "'Depending on' + noun means 'if... changes'.",
        examples: [
          "Depending on traffic, we'll arrive in 35 minutes.",
          "Depending on the weather, we might stay home."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "heading to", meaning: "前往", example: "Are you heading to the airport?" },
      { chunk: "pull over", meaning: "靠边停", example: "Can you pull over here?" },
      { chunk: "take your time", meaning: "慢慢来", example: "Take your time, no rush." },
      { chunk: "with time to spare", meaning: "时间充裕", example: "We arrived with time to spare." }
    ],
    pronunciationTips: [
      { tip: "'Depending on' → /dɪˈpendɪŋ ɒn/", example: "'Depending on traffic'" },
      { tip: "'Could you' → /kədʒə/", example: "Could you turn up the AC?" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'stop the car' instead of 'pull over'",
        correction: "Use 'pull over' for the side of the road",
        explanation: "'Stop the car' 更像命令，'pull over' 是常用表达。"
      },
      {
        mistake: "Using 'air conditioner' instead of 'AC'",
        correction: "Both are fine; 'AC' is more common in taxis",
        explanation: "'AC' 是 'air conditioning' 的常用缩写。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are taking an Uber to a restaurant. Confirm the destination, ask about traffic, and make a quick stop if needed.",
        prompts: [
          "Confirm the destination with the driver",
          "Ask about traffic",
          "Make a request about temperature or music",
          "Ask for the receipt preference"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Destination",
        synonyms: ["Endpoint", "Target", "Goal"],
        antonyms: ["Origin", "Starting point"],
        example: "What's your final destination?"
      },
      {
        word: "Traffic",
        synonyms: ["Congestion", "Gridlock"],
        antonyms: ["Clear roads"],
        example: "The traffic is terrible today."
      }
    ],
    shadowingPractice: [
      "Hi there! Are you heading to the airport?",
      "About 35 minutes, depending on traffic.",
      "Sure, no problem. I'll pull over here.",
      "Take your time. Do you want the receipt emailed or printed?"
    ],
    speakingChallenge: {
      instruction: "Role-play a taxi ride. Change the destination, add small talk about the weather or city, and practice asking the driver to adjust something (AC, music, window).",
      hints: [
        "Start by confirming the destination",
        "Ask 'How long is the ride?'",
        "Say 'Could you turn down/up the...?'",
        "Thank the driver at the end"
      ]
    }
  },
  {
    id: "airport-checkin",
    title: "At the Airport",
    emoji: "✈️",
    description: "Checking in, going through security, and boarding.",
    color: "from-sky-400 to-indigo-400",
    level: "A2",
    estimatedTime: "12 min",
    vocabularyPreview: [
      { word: "boarding pass", phonetic: "/ˈbɔːrdɪŋ pæs/", chinese: "登机牌", partOfSpeech: "noun" },
      { word: "security", phonetic: "/sɪˈkjʊrəti/", chinese: "安检", partOfSpeech: "noun" },
      { word: "gate", phonetic: "/ɡeɪt/", chinese: "登机口", partOfSpeech: "noun" },
      { word: "overhead bin", phonetic: "/ˈoʊvərhed bɪn/", chinese: "头顶行李架", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Agent", line: "Good morning! May I see your passport and boarding pass, please?" },
      { speaker: "David", line: "Sure, here you go. Is the flight on time?" },
      { speaker: "Agent", line: "Yes, boarding starts at 10:30 at Gate C4. Do you have any checked bags?" },
      { speaker: "David", line: "Just this one suitcase. I have some electronics in my carry-on too — do I need to take them out?" },
      { speaker: "Agent", line: "Laptops and tablets need to go in the bin separately. Phones can stay in your bag." },
      { speaker: "David", line: "Got it. How much is the overweight fee if I'm over the limit?" },
      { speaker: "Agent", line: "For international flights, it's $50 per kilogram over 23kg." },
      { speaker: "David", line: "Okay, I think I'm within the limit. Thanks for your help!" },
      { speaker: "Agent", line: "You're welcome! Proceed to security, and have a great flight." }
    ],
    chineseTranslation: [
      { speaker: "Agent", line: "早上好！请出示您的护照和登机牌。" },
      { speaker: "David", line: "好的，给您。航班准点吗？" },
      { speaker: "Agent", line: "是的，10:30开始登机，在C4登机口。您有托运行李吗？" },
      { speaker: "David", line: "只有这一个行李箱。我的随身行李里还有一些电子产品——需要拿出来吗？" },
      { speaker: "Agent", line: "笔记本电脑和平板需要单独放入安检盒。手机可以留在包里。" },
      { speaker: "David", line: "明白了。如果超重，超重费怎么算？" },
      { speaker: "Agent", line: "国际航班每超过23公斤的部分，每公斤50美元。" },
      { speaker: "David", line: "好的，我想我没有超重。谢谢您的帮助！" },
      { speaker: "Agent", line: "不客气！请前往安检，祝您飞行愉快。" }
    ],
    usefulExpressions: [
      { expression: "May I see...?", meaning: "请出示...", usage: "航空公司/安检人员要求的正式说法" },
      { expression: "Here you go", meaning: "给您", usage: "递东西给对方" },
      { expression: "Proceed to", meaning: "前往", usage: "指示去向" },
      { expression: "Within the limit", meaning: "在限制范围内", usage: "表示未超重/未超标" }
    ],
    grammarFocus: [
      {
        title: "Modal Verbs for Permission and Requests",
        explanation: "用 'may/can/could' 表示礼貌请求。",
        examples: [
          "May I see your passport?",
          "Can I keep my phone in the bag?",
          "Could you tell me where Gate C4 is?"
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "boarding pass", meaning: "登机牌", example: "Don't forget your boarding pass." },
      { chunk: "proceed to security", meaning: "前往安检", example: "Proceed to security checkpoint B." },
      { chunk: "overhead bin", meaning: "头顶行李架", example: "Put your bag in the overhead bin." },
      { chunk: "within the limit", meaning: "在限制内", example: "Your bag is within the weight limit." }
    ],
    pronunciationTips: [
      { tip: "'May I' → /meɪ aɪ/ with linking", example: "May I see..." },
      { tip: "'Boarding pass' → /ˈbɔːrdɪŋ pæs/", example: "Stress the first syllable of each word" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I want to check in' without documents ready",
        correction: "Have passport and boarding pass ready before approaching",
        explanation: "值机时应该提前准备好文件。"
      },
      {
        mistake: "Using 'bag' for all luggage types",
        correction: "Suitcase = 行李箱; carry-on = 随身行李; checked bag = 托运行李",
        explanation: "区分不同行李类型的说法。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are at the airport check-in counter. You have one suitcase and a backpack. Ask about your gate, baggage allowance, and any travel requirements.",
        prompts: [
          "Present your passport and boarding pass",
          "Ask about your gate number",
          "Ask about baggage allowance",
          "Ask about security requirements"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Boarding pass",
        synonyms: ["Boarding ticket", "Gate pass"],
        antonyms: [],
        example: "I printed my boarding pass at home."
      },
      {
        word: "Overhead bin",
        synonyms: ["Overhead compartment", "Upper storage"],
        antonyms: [],
        example: "Put your carry-on in the overhead bin."
      }
    ],
    shadowingPractice: [
      "Good morning! May I see your passport and boarding pass, please?",
      "Boarding starts at 10:30 at Gate C4.",
      "Laptops and tablets need to go in the bin separately.",
      "Proceed to security, and have a great flight."
    ],
    speakingChallenge: {
      instruction: "Practice the airport check-in dialogue. Change the destination, add a second bag, and ask about in-flight meals or entertainment.",
      hints: [
        "Try going to Tokyo or Paris",
        "Ask 'Is there a meal on this flight?'",
        "Ask about seat selection",
        "Practice asking about baggage fees"
      ]
    }
  },
  {
    id: "weekend-plans",
    title: "Weekend Plans",
    emoji: "🎉",
    description: "Making plans with friends, discussing activities, and casual invitations.",
    color: "from-green-400 to-emerald-400",
    level: "A2",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "up for", phonetic: "/ʌp fər/", chinese: "愿意", partOfSpeech: "phrase" },
      { word: "hang out", phonetic: "/hæŋ aʊt/", chinese: "闲逛", partOfSpeech: "phrasal verb" },
      { word: "last-minute", phonetic: "/læst ˈmiːnɪt/", chinese: "临时的", partOfSpeech: "adjective" }
    ],
    conversation: [
      { speaker: "Amy", line: "Hey! Any plans for the weekend?" },
      { speaker: "John", line: "Not yet. I was thinking of checking out that new art exhibit downtown. You interested?" },
      { speaker: "Amy", line: "Oh, I saw that last week! It's supposed to be really good. I'm definitely up for it." },
      { speaker: "John", line: "Great! We could grab lunch afterwards. I heard there's a nice Italian place nearby." },
      { speaker: "Amy", line: "Sounds perfect. What time were you thinking?" },
      { speaker: "John", line: "How about 11 AM? That gives us time to wander through the exhibit without rushing." },
      { speaker: "Amy", line: "Works for me! Should we invite Lisa and Mike too?" },
      { speaker: "John", line: "Good idea. I'll text them. If they can't make it, it's just more coffee for us." },
      { speaker: "Amy", line: "Haha, exactly. Oh, and if it rains, should we have a backup plan?" },
      { speaker: "John", line: "Good thinking. There's a board game café right around the corner if we need it." },
      { speaker: "Amy", line: "Perfect! So 11 AM, art exhibit, and Italian food — or board games if it rains. I'm excited!" }
    ],
    chineseTranslation: [
      { speaker: "Amy", line: "嘿！周末有什么计划吗？" },
      { speaker: "John", line: "还没有。我在想去看市中心那个新艺术展。你有兴趣吗？" },
      { speaker: "Amy", line: "哦，我上周去看了！据说非常棒。我很愿意。" },
      { speaker: "John", line: "太好了！我们之后可以吃午饭。我听说附近有一家不错的意大利餐厅。" },
      { speaker: "Amy", line: "听起来完美。你想约几点？" },
      { speaker: "John", line: "上午11点怎么样？这样我们就有时间慢慢逛展览，不用赶时间。" },
      { speaker: "Amy", line: "这对我合适！我们应该邀请Lisa和Mike一起吗？" },
      { speaker: "John", line: "好主意。我给他们发短信。如果他们来不了，我们就多喝点咖啡。" },
      { speaker: "Amy", line: "哈哈，没错。哦——如果下雨，我们应该有个备选方案吗？" },
      { speaker: "John", line: "想得周到。拐角处就有一家桌游咖啡馆，如果需要的话可以去那里。" },
      { speaker: "Amy", line: "太好了！所以是上午11点，艺术展，意大利餐——下雨就去桌游咖啡馆。我很期待！" }
    ],
    usefulExpressions: [
      { expression: "Any plans for...?", meaning: "有什么计划吗？", usage: "询问对方的时间安排" },
      { expression: "I'm up for it", meaning: "我愿意", usage: "接受邀请" },
      { expression: "Works for me", meaning: "这对我合适", usage: "接受提议" },
      { expression: "Last-minute", meaning: "临时的", usage: "描述临时安排" },
      { expression: "Backup plan", meaning: "备选方案", usage: "准备替代计划" }
    ],
    grammarFocus: [
      {
        title: "Future with 'Going to' for Plans",
        explanation: "用 'be going to' 表示已经计划好的未来安排。",
        examples: [
          "I'm going to the art exhibit.",
          "We're going to grab lunch afterwards.",
          "I'm going to text them."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "up for", meaning: "愿意", example: "I'm up for trying that new restaurant." },
      { chunk: "hang out", meaning: "闲逛", example: "Do you want to hang out this weekend?" },
      { chunk: "works for me", meaning: "这对我合适", example: "That time works for me." },
      { chunk: "backup plan", meaning: "备选方案", example: "We need a backup plan in case it rains." }
    ],
    pronunciationTips: [
      { tip: "'You interested?' → /ju ˈɪntrəstɪd/", example: "Fast, natural speech" },
      { tip: "'Going to' → /ˈɡoʊnə/", example: "I'm gonna text them." }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I not have plans' instead of 'I don't have plans'",
        correction: "Use 'I don't have any plans' or 'I have no plans'",
        explanation: "否定句需要助动词。"
      },
      {
        mistake: "Using 'maybe' for definite plans",
        correction: "Use 'probably' or 'definitely' for commitment",
        explanation: "'Maybe' 表示不确定，不适合确认计划。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You and your friend are making weekend plans. Discuss what you want to do, when, and invite others. Have a backup plan ready.",
        prompts: [
          "Ask about their availability",
          "Suggest an activity",
          "Agree on a time",
          "Make a backup plan"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Hang out",
        synonyms: ["Chill", "Hang", "Spend time"],
        antonyms: [],
        example: "Do you want to hang out after class?"
      },
      {
        word: "Backup",
        synonyms: ["Alternative", "Fallback", "Reserve"],
        antonyms: [],
        example: "We need a backup plan."
      }
    ],
    shadowingPractice: [
      "Hey! Any plans for the weekend?",
      "I'm definitely up for it.",
      "How about 11 AM?",
      "That works for me!"
    ],
    speakingChallenge: {
      instruction: "Make weekend plans with a friend. Use: 'I'm up for...', 'That works for me', and 'backup plan'. Change the activity to something you actually enjoy.",
      hints: [
        "Start by asking about their availability",
        "Suggest a specific activity and time",
        "Mention a backup plan",
        "End with excitement about the plans"
      ]
    }
  },
  {
    id: "making-cancelling-plans",
    title: "Making and Cancelling Plans",
    emoji: "📅",
    description: "Scheduling, rescheduling, and politely cancelling appointments.",
    color: "from-indigo-400 to-purple-400",
    level: "B1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "reschedule", phonetic: "/riːˈskedʒuːl/", chinese: "改期", partOfSpeech: "verb" },
      { word: "postpone", phonetic: "/poʊstˈpoʊn/", chinese: "推迟", partOfSpeech: "verb" },
      { word: "unavoidable", phonetic: "/ˌʌnəˈvɔɪdəbl/", chinese: "不可避免的", partOfSpeech: "adjective" }
    ],
    conversation: [
      { speaker: "Lisa", line: "Hey, are we still on for coffee tomorrow at 3?" },
      { speaker: "Tom", line: "Actually, something came up at work. I have to stay late for an unexpected meeting." },
      { speaker: "Lisa", line: "Oh no! That's frustrating. Do you want to reschedule?" },
      { speaker: "Tom", line: "If you're okay with it, sure. Would Friday at the same time work for you?" },
      { speaker: "Lisa", line: "Friday should work. But just to be safe — could we make it 4:30 instead? My schedule's a bit packed this week." },
      { speaker: "Tom", line: "4:30 works for me. Sorry about the last-minute change!" },
      { speaker: "Lisa", line: "No worries! Things happen. Just give me a heads up next time, that's all." },
      { speaker: "Tom", line: "Definitely. I promise I'll be on time Friday. Thanks for being understanding!" }
    ],
    chineseTranslation: [
      { speaker: "Lisa", line: "嘿，我们明天3点喝咖啡的计划还保留吗？" },
      { speaker: "Tom", line: "其实，工作上有事。我必须留下来参加一个临时会议。" },
      { speaker: "Lisa", line: "哦不！这真让人沮丧。你想改期吗？" },
      { speaker: "Tom", line: "如果你没问题的话，当然。周五同一时间对你合适吗？" },
      { speaker: "Lisa", line: "周五应该可以。但为了保险起见——我们能改成4:30吗？我这周日程有点满。" },
      { speaker: "Tom", line: "4:30对我可以。抱歉临时改期！" },
      { speaker: "Lisa", line: "没关系！事情总会有变化。下次提前告诉我一声就好。" },
      { speaker: "Tom", line: "一定。我保证周五会准时。谢谢你的理解！" }
    ],
    usefulExpressions: [
      { expression: "Are we still on for...?", meaning: "我们...的计划还保留吗？", usage: "确认计划是否还在" },
      { expression: "Something came up", meaning: "有事发生", usage: "委婉地解释为什么无法赴约" },
      { expression: "Stay late", meaning: "加班到很晚", usage: "表示需要延长工作时间" },
      { expression: "Give me a heads up", meaning: "提前告诉我", usage: "请求对方提前通知" },
      { expression: "No worries", meaning: "没关系", usage: "表示理解和宽容" }
    ],
    grammarFocus: [
      {
        title: "Conditional with 'Would' for Polite Suggestions",
        explanation: "用 'Would...?' 提出委婉的建议或询问。",
        examples: [
          "Would Friday work for you?",
          "Would you mind if I rescheduled?",
          "Would you prefer 4:30 instead?"
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "still on for", meaning: "计划保留", example: "Are we still on for tomorrow?" },
      { chunk: "came up", meaning: "发生", example: "Something came up at work." },
      { chunk: "stay late", meaning: "加班", example: "I have to stay late tonight." },
      { chunk: "give me a heads up", meaning: "提前通知", example: "Give me a heads up if you're running late." }
    ],
    pronunciationTips: [
      { tip: "'Would you' → /wʊdʒə/", example: "Would you mind...?" },
      { tip: "'Something came up' → /ˈsʌmθɪŋ keɪm ʌp/", example: "Fast, natural speech" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I cancel' instead of 'I have to cancel'",
        correction: "Use 'I have to cancel' or 'I need to reschedule'",
        explanation: "直接说 'I cancel' 太生硬。"
      },
      {
        mistake: "Not apologizing for cancelling",
        correction: "Always apologize and explain briefly",
        explanation: "即使是有正当理由，也要道歉并简短解释。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You need to cancel plans with a friend. Call or message them, explain why, suggest a new time, and apologize.",
        prompts: [
          "State that you need to cancel",
          "Give a brief reason",
          "Suggest an alternative time",
          "Apologize and thank them for understanding"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Reschedule",
        synonyms: ["Rearrange", "Postpone", "Move"],
        antonyms: ["Keep as planned"],
        example: "I need to reschedule our meeting."
      },
      {
        word: "Unavoidable",
        synonyms: ["Inevitable", "Unpreventable"],
        antonyms: ["Avoidable", "Optional"],
        example: "An unavoidable meeting came up."
      }
    ],
    shadowingPractice: [
      "Are we still on for coffee tomorrow at 3?",
      "Actually, something came up at work.",
      "Would Friday at the same time work for you?",
      "No worries! Things happen."
    ],
    speakingChallenge: {
      instruction: "Practice cancelling and rescheduling plans. Use: 'something came up', 'Would...work for you?', and 'Give me a heads up'.",
      hints: [
        "Start by confirming the original plan",
        "Give a realistic reason for cancelling",
        "Suggest a specific alternative time",
        "Apologize and thank them"
      ]
    }
  },
  {
    id: "family-talk",
    title: "Talking About Family",
    emoji: "👨‍👩‍👧‍👦",
    description: "Describing family members, relationships, and family events.",
    color: "from-red-400 to-pink-400",
    level: "A2",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "sibling", phonetic: "/ˈsɪblɪŋ/", chinese: "兄弟姐妹", partOfSpeech: "noun" },
      { word: "extended family", phonetic: "/ɪkˈstendɪd ˈfæməli/", chinese: "大家庭", partOfSpeech: "noun" },
      { word: "get along", phonetic: "/ɡet əˈlɒŋ/", chinese: "相处", partOfSpeech: "phrasal verb" },
      { word: "reunion", phonetic: "/riːˈjuːnjən/", chinese: "团聚", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Mia", line: "I saw your family photo on Instagram — you have a big family!" },
      { speaker: "James", line: "Yeah, I'm the youngest of four. Three older sisters and one brother." },
      { speaker: "Mia", line: "Wow, that's a lot! Do you get along with all of them?" },
      { speaker: "James", line: "Mostly! We bicker like any siblings, but we're close. My parents always emphasized family dinners together." },
      { speaker: "Mia", line: "That's so sweet. I have just one brother. We live in different cities now, so we don't see each other as much." },
      { speaker: "James", line: "That's tough. Do you have big family gatherings for holidays?" },
      { speaker: "Mia", line: "Yes! We have a huge reunion every Chinese New Year. All my cousins, aunts, and uncles come together." },
      { speaker: "James", line: "That sounds amazing! I've always wanted to experience a big family reunion like that." },
      { speaker: "Mia", line: "You should come next year! There's always way too much food and loud karaoke." },
      { speaker: "James", line: "Count me in! Though I might hide from the karaoke — I can't sing to save my life." },
      { speaker: "Mia", line: "Haha, don't worry — nobody can. That's half the fun!" }
    ],
    chineseTranslation: [
      { speaker: "Mia", line: "我在Instagram上看到了你的全家福——你家真大！" },
      { speaker: "James", line: "是的，我是四个孩子中最小的。有三个姐姐和一个哥哥。" },
      { speaker: "Mia", line: "哇，真多！你和他们都相处得好吗？" },
      { speaker: "James", line: "大多数时候！我们像所有兄弟姐妹一样会拌嘴，但我们很亲密。我父母总是强调要一起吃饭。" },
      { speaker: "Mia", line: "那真好。我只有一个哥哥。现在我们在不同的城市，所以不经常见面。" },
      { speaker: "James", line: "那很不容易。你们节日会举行大型家庭聚会吗？" },
      { speaker: "Mia", line: "是的！每年春节我们都有一个大型团聚。所有的表兄弟姐妹、阿姨和叔叔都会来。" },
      { speaker: "James", line: "那听起来太棒了！我一直想体验这样的大型家庭团聚。" },
      { speaker: "Mia", line: "明年你应该来！总是有太多食物和很吵的卡拉OK。" },
      { speaker: "James", line: "算我一个！不过我可能会躲着卡拉OK——我唱歌要命。" },
      { speaker: "Mia", line: "哈哈，别担心——没人会。这才是乐趣的一半！" }
    ],
    usefulExpressions: [
      { expression: "I'm the youngest of...", meaning: "我是...中最小的", usage: "介绍自己在兄弟姐妹中的排行" },
      { expression: "Get along", meaning: "相处", usage: "描述人际关系" },
      { expression: "Bicker like any siblings", meaning: "像所有兄弟姐妹一样拌嘴", usage: "非正式地描述吵架但不伤感情" },
      { expression: "Family reunion", meaning: "家庭团聚", usage: "描述大型家庭聚会" },
      { expression: "Count me in", meaning: "算我一个", usage: "热情地接受邀请" }
    ],
    grammarFocus: [
      {
        title: "Present Perfect for Life Experience",
        explanation: "用现在完成时描述过去的经历。",
        examples: [
          "I've always wanted to experience that.",
          "We've had reunions every year.",
          "I've never been to a Chinese New Year celebration."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "get along with", meaning: "与...相处", example: "I get along well with my siblings." },
      { chunk: "bicker like", meaning: "拌嘴", example: "We bicker like any siblings." },
      { chunk: "count me in", meaning: "算我一个", example: "Count me in for the trip!" },
      { chunk: "to save my life", meaning: "要命/无论如何", example: "I can't sing to save my life." }
    ],
    pronunciationTips: [
      { tip: "'I'm the youngest' → /aɪm ðə ˈjʌŋɡɪst/", example: "Fast, natural speech" },
      { tip: "'Count me in' → /kaʊnt mi ɪn/", example: "Stress 'count' and 'in'" }
    ],
    commonMistakes: [
      {
        mistake: "Using 'fight' for all sibling disagreements",
        correction: "Use 'bicker' for minor, playful arguments",
        explanation: "'Bicker' 描述轻微的、不伤感情的争吵。"
      },
      {
        mistake: "Saying 'I have no brother' instead of 'I don't have a brother'",
        correction: "Use 'I don't have any...' or 'I have no...'",
        explanation: "否定所有格用 'don't have any' 更自然。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are talking to a new friend about your family. Describe your siblings, parents, and a recent family event.",
        prompts: [
          "Describe how many siblings you have",
          "Say how you get along with them",
          "Mention a recent family gathering",
          "Invite them to a future family event"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Sibling",
        synonyms: ["Brother", "Sister", "Sibling"],
        antonyms: [],
        example: "I have three siblings."
      },
      {
        word: "Reunion",
        synonyms: ["Gathering", "Get-together", "Reunion"],
        antonyms: ["Separation"],
        example: "We have a family reunion every year."
      }
    ],
    shadowingPractice: [
      "I'm the youngest of four.",
      "Do you get along with all of them?",
      "We have a huge reunion every Chinese New Year.",
      "Count me in!"
    ],
    speakingChallenge: {
      instruction: "Describe your family to a partner. Use: 'I'm the youngest/oldest of...', 'I get along with...', 'family reunion', and 'count me in'.",
      hints: [
        "Start by saying how many siblings you have",
        "Describe your relationship with each",
        "Mention a recent family event",
        "Invite your partner to join next time"
      ]
    }
  },
  {
    id: "at-the-gym",
    title: "At the Gym",
    emoji: "🏋️",
    description: "Fitness routines, gym equipment, and workout conversations.",
    color: "from-green-400 to-lime-400",
    level: "B1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "workout", phonetic: "/ˈwɜːrkaʊt/", chinese: "锻炼", partOfSpeech: "noun" },
      { word: "treadmill", phonetic: "/ˈtredmɪl/", chinese: "跑步机", partOfSpeech: "noun" },
      { word: "personal trainer", phonetic: "/ˈpɜːrsənl treɪnər/", chinese: "私人教练", partOfSpeech: "noun" },
      { word: "muscle", phonetic: "/ˈmʌsl/", chinese: "肌肉", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Trainer", line: "Hi there! Are you new here? Let me show you around if you need." },
      { speaker: "Ryan", line: "Thanks! Yeah, this is my first time. I'm mainly interested in the cardio area." },
      { speaker: "Trainer", line: "The treadmills and ellipticals are right over there. Most people start with 20–30 minutes of cardio." },
      { speaker: "Ryan", line: "Got it. Do I need to warm up first?" },
      { speaker: "Trainer", line: "Absolutely! Five minutes on the treadmill at a slow pace, then some stretching. Prevents injury." },
      { speaker: "Ryan", line: "Makes sense. Are there any classes I could join?" },
      { speaker: "Trainer", line: "We have yoga at 9, spin class at 10:30, and HIIT at 5. The spin class is super popular — you'd need to book in advance." },
      { speaker: "Ryan", line: "I'll definitely try spin class. How often do you recommend working out?" },
      { speaker: "Trainer", line: "For beginners, three times a week is great. Consistency beats intensity, especially at the start." },
      { speaker: "Ryan", line: "That's good to know. One last thing — do you have trainers available for one-on-one sessions?" },
      { speaker: "Trainer", line: "Yes! I'm available tomorrow at 2 PM if you're free. We can design a custom plan based on your goals." },
      { speaker: "Ryan", line: "Perfect. Let's do it!" }
    ],
    chineseTranslation: [
      { speaker: "Trainer", line: "嗨！您是新手吗？如果您需要，我带您参观一下。" },
      { speaker: "Ryan", line: "谢谢！是的，这是我第一次来。我主要对有氧区感兴趣。" },
      { speaker: "Trainer", line: "跑步机和椭圆机就在那边。大多数人从20-30分钟的有氧运动开始。" },
      { speaker: "Ryan", line: "明白了。我需要先热身吗？" },
      { speaker: "Trainer", line: "当然！先在跑步机上慢跑5分钟，然后做一些拉伸。防止受伤。" },
      { speaker: "Ryan", line: "有道理。有什么课程我可以参加吗？" },
      { speaker: "Trainer", line: "我们有9点的瑜伽课，10:30的单车课，以及5点的高强度间歇训练。单车课超级受欢迎——您需要提前预订。" },
      { speaker: "Ryan", line: "我肯定会试试单车课。您建议多久锻炼一次？" },
      { speaker: "Trainer", line: "对初学者来说，每周三次就很棒。坚持比强度更重要，尤其是在开始时。" },
      { speaker: "Ryan", line: "这很有用。还有一件事——你们有一对一的私人教练吗？" },
      { speaker: "Trainer", line: "有的！我明天下午2点有空。我们可以根据您的目标设计一个定制计划。" },
      { speaker: "Ryan", line: "太好了。就这么定了！" }
    ],
    usefulExpressions: [
      { expression: "Show you around", meaning: "带您参观", usage: "主动提出带人熟悉环境" },
      { expression: "Prevents injury", meaning: "防止受伤", usage: "解释为什么要做某事" },
      { expression: "Book in advance", meaning: "提前预订", usage: "表示需要提前安排" },
      { expression: "Consistency beats intensity", meaning: "坚持比强度更重要", usage: "教练或朋友的健身建议" },
      { expression: "Let's do it", meaning: "就这么定了", usage: "热情地接受提议" }
    ],
    grammarFocus: [
      {
        title: "Modal Verbs for Advice and Necessity",
        explanation: "用 'need to', 'should', 'would' 表示建议和必要性。",
        examples: [
          "You need to warm up first.",
          "You should start with 20 minutes.",
          "I'd recommend booking in advance."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "warm up", meaning: "热身", example: "Always warm up before exercising." },
      { chunk: "book in advance", meaning: "提前预订", example: "You need to book in advance for spin class." },
      { chunk: "consistency beats intensity", meaning: "坚持比强度重要", example: "Consistency beats intensity, especially for beginners." },
      { chunk: "custom plan", meaning: "定制计划", example: "We can design a custom plan for you." }
    ],
    pronunciationTips: [
      { tip: "'Would need to' → /wʊd niːd tə/", example: "You'd need to book in advance." },
      { tip: "'Let me show you' → /let mi ʃoʊ ju/", example: "Fast, natural speech" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I want lose weight' instead of 'I want to lose weight'",
        correction: "Use 'want to + verb' or 'I'm interested in + -ing'",
        explanation: "'Want' 后面必须加 'to'。"
      },
      {
        mistake: "Using 'gym' as a verb",
        correction: "Use 'work out' or 'exercise' as verbs",
        explanation: "'Gym' 是名词，动词用 'work out'。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are at a gym for the first time. Ask a trainer about equipment, classes, and training options. Get advice on your fitness goals.",
        prompts: [
          "Ask for a tour of the gym",
          "Ask about cardio and strength equipment",
          "Ask about class schedules",
          "Inquire about personal training options"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Workout",
        synonyms: ["Exercise", "Training session", "Gym session"],
        antonyms: [],
        example: "I do a 30-minute workout every morning."
      },
      {
        word: "Consistency",
        synonyms: ["Regularity", "Steadiness", "Persistence"],
        antonyms: ["Inconsistency", "Irregularity"],
        example: "Consistency is key to fitness."
      }
    ],
    shadowingPractice: [
      "Hi there! Are you new here? Let me show you around.",
      "The treadmills and ellipticals are right over there.",
      "Five minutes on the treadmill at a slow pace, then some stretching.",
      "Consistency beats intensity, especially at the start."
    ],
    speakingChallenge: {
      instruction: "Talk about your fitness routine or goals. Use: 'workout', 'warm up', 'book in advance', and 'consistency beats intensity'.",
      hints: [
        "Start with your current routine or goals",
        "Mention what equipment you use",
        "Say how often you exercise",
        "Give one piece of advice to a friend"
      ]
    }
  },
  {
    id: "coworkers-small-talk",
    title: "Small Talk with Coworkers",
    emoji: "💼",
    description: "Office conversations, building rapport, and professional small talk.",
    color: "from-slate-400 to-gray-400",
    level: "B1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "rapport", phonetic: "/ræˈpɔːr/", chinese: "融洽关系", partOfSpeech: "noun" },
      { word: "water cooler", phonetic: "/ˈwɔːtər kuːlər/", chinese: "饮水机旁", partOfSpeech: "noun" },
      { word: "catch up", phonetic: "/kætʃ ʌp/", chinese: "叙旧", partOfSpeech: "phrasal verb" }
    ],
    conversation: [
      { speaker: "Emily", line: "Morning! How was your weekend?" },
      { speaker: "David", line: "Pretty good! I went camping with some friends. You?" },
      { speaker: "Emily", line: "Nice! I stayed in town. Watched a couple of movies and caught up on some sleep." },
      { speaker: "David", line: "Sounds relaxing. Did you see the new Marvel movie? I heard it's amazing." },
      { speaker: "Emily", line: "Not yet! I'm planning to go this week. Don't give me any spoilers!" },
      { speaker: "David", line: "No promises! Heard the ending is mind-blowing. Oh, by the way — did you finish the quarterly report?" },
      { speaker: "Emily", line: "Almost. I'm just waiting for the sales data from the regional team. Should have it by Wednesday." },
      { speaker: "David", line: "Cool. Let me know if you need any help — I have some experience with that data analysis." },
      { speaker: "Emily", line: "Thanks, I appreciate that! Oh, the meeting's starting. Let's catch up more at lunch?" },
      { speaker: "David", line: "Sounds good! See you at 12." }
    ],
    chineseTranslation: [
      { speaker: "Emily", line: "早上好！你周末过得怎么样？" },
      { speaker: "David", line: "很不错！我和一些朋友去露营了。你呢？" },
      { speaker: "Emily", line: "不错！我待在城里。看了几部电影，补了补觉。" },
      { speaker: "David", line: "听起来很放松。你看那部新漫威电影了吗？听说很棒。" },
      { speaker: "Emily", line: "还没呢！我计划这周去看。别给我剧透！" },
      { speaker: "David", line: "不保证！听说结局非常震撼。哦，对了——你完成季度报告了吗？" },
      { speaker: "Emily", line: "差不多了。我在等区域团队的销售数据。周三之前应该能拿到。" },
      { speaker: "David", line: "好的。如果需要任何帮助告诉我——我有一些数据分析的经验。" },
      { speaker: "Emily", line: "谢谢，我感激不尽！哦，会议开始了。我们午餐时再聊？" },
      { speaker: "David", line: "听起来不错！12点见。" }
    ],
    usefulExpressions: [
      { expression: "How was your weekend?", meaning: "你周末过得怎么样？", usage: "周一早上与同事的寒暄" },
      { expression: "Catch up on", meaning: "补上", usage: "表示补做错过的或落下的活动" },
      { expression: "Don't give me any spoilers", meaning: "别给我剧透", usage: "请求不要透露电影/书籍的结局" },
      { expression: "No promises", meaning: "不保证", usage: "非正式地回应请求" },
      { expression: "Let me know if you need anything", meaning: "如果需要任何东西请告诉我", usage: "主动提供帮助" }
    ],
    grammarFocus: [
      {
        title: "Past Simple for Weekend Activities",
        explanation: "用过去时描述周末已经发生的活动。",
        examples: [
          "I went camping with some friends.",
          "I watched a couple of movies.",
          "Did you see the new Marvel movie?"
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "catch up on", meaning: "补上", example: "I need to catch up on some sleep." },
      { chunk: "give me any spoilers", meaning: "给我剧透", example: "Don't give me any spoilers!" },
      { chunk: "water cooler talk", meaning: "饮水机闲聊", example: "We had water cooler talk about the new movie." },
      { chunk: "mind-blowing", meaning: "非常震撼", example: "The ending was mind-blowing." }
    ],
    pronunciationTips: [
      { tip: "'Did you' → /dɪdʒə/", example: "Did you finish the report?" },
      { tip: "'No promises' → /noʊ ˈprɑːmɪsɪz/", example: "Fast, natural speech" }
    ],
    commonMistakes: [
      {
        mistake: "Asking personal questions too early",
        correction: "Start with safe topics: weekend, movies, weather",
        explanation: "与同事交谈时先从安全的话题开始。"
      },
      {
        mistake: "Being too formal or too casual",
        correction: "Use neutral, friendly tone",
        explanation: "职场闲聊要保持专业而友好的语气。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You meet a coworker at the water cooler. Make small talk about their weekend, mention a project, and suggest grabbing lunch together.",
        prompts: [
          "Greet them and ask about their weekend",
          "Share something about your own weekend",
          "Briefly mention a work topic",
          "Suggest eating lunch together"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Rapport",
        synonyms: ["Relationship", "Connection", "Understanding"],
        antonyms: ["Discord", "Tension"],
        example: "She built good rapport with her team."
      },
      {
        word: "Quarterly report",
        synonyms: ["Quarterly report", "Business report"],
        antonyms: [],
        example: "I'm working on the quarterly report."
      }
    ],
    shadowingPractice: [
      "Morning! How was your weekend?",
      "Pretty good! I went camping with some friends.",
      "Don't give me any spoilers!",
      "Let me know if you need any help."
    ],
    speakingChallenge: {
      instruction: "Practice small talk with a coworker. Use: 'How was your...?', 'catch up on', and 'Let me know if...'. Keep it light and professional.",
      hints: [
        "Start with 'How was your weekend?'",
        "Share one activity you did",
        "Mention one work-related item",
        "End with an invitation to lunch or coffee"
      ]
    }
  },
  {
    id: "greeting-people",
    title: "Greeting People",
    emoji: "👋",
    description: "Basic greetings, introductions, and polite farewells for everyday situations.",
    color: "from-green-400 to-emerald-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Hello", phonetic: "/həˈloʊ/", chinese: "你好", partOfSpeech: "interjection" },
      { word: "Good morning", phonetic: "/ɡʊd ˈmɔːrnɪŋ/", chinese: "早上好", partOfSpeech: "phrase" },
      { word: "How are you?", phonetic: "/haʊ ɑːr juː/", chinese: "你好吗？", partOfSpeech: "question" },
      { word: "I'm fine, thanks", phonetic: "/aɪm faɪn θæŋks/", chinese: "我很好，谢谢", partOfSpeech: "phrase" },
      { word: "Nice to meet you", phonetic: "/naɪs tu miːt juː/", chinese: "很高兴认识你", partOfSpeech: "phrase" },
      { word: "Bye", phonetic: "/baɪ/", chinese: "再见", partOfSpeech: "interjection" }
    ],
    conversation: [
      { speaker: "Anna", line: "Hi, good morning!" },
      { speaker: "Ben", line: "Good morning! How are you?" },
      { speaker: "Anna", line: "I'm fine, thanks. And you?" },
      { speaker: "Ben", line: "I'm doing well, thank you." },
      { speaker: "Anna", line: "Nice to meet you. I'm Anna." },
      { speaker: "Ben", line: "Nice to meet you too, Anna. I'm Ben." },
      { speaker: "Anna", line: "See you later, Ben!" },
      { speaker: "Ben", line: "Bye! Have a great day." }
    ],
    chineseTranslation: [
      { speaker: "Anna", line: "嗨，早上好！" },
      { speaker: "Ben", line: "早上好！你好吗？" },
      { speaker: "Anna", line: "我很好，谢谢。你呢？" },
      { speaker: "Ben", line: "我很好，谢谢。" },
      { speaker: "Anna", line: "很高兴认识你。我是安娜。" },
      { speaker: "Ben", line: "我也很高兴认识你，安娜。我是本。" },
      { speaker: "Anna", line: "回头见，本！" },
      { speaker: "Ben", line: "再见！祝你今天愉快。" }
    ],
    usefulExpressions: [
      { expression: "Good morning", meaning: "早上好", usage: "从起床到中午前使用" },
      { expression: "How are you?", meaning: "你好吗？", usage: "最常见的问候方式" },
      { expression: "I'm fine, thanks", meaning: "我很好，谢谢", usage: "标准回答" },
      { expression: "Nice to meet you", meaning: "很高兴认识你", usage: "第一次见面时使用" },
      { expression: "Have a great day", meaning: "祝你今天愉快", usage: "告别时使用" }
    ],
    grammarFocus: [
      {
        title: "Basic Greetings",
        explanation: "英语中最常用的问候语。根据时间选择合适的问候语。",
        examples: [
          "Good morning!",
          "Good afternoon!",
          "Good evening!"
        ]
      },
      {
        title: "Simple Introductions",
        explanation: "介绍自己时使用 'I'm + 名字' 或 'My name is + 名字'。",
        examples: [
          "I'm Sarah.",
          "My name is John."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Good morning", meaning: "早上好", example: "Good morning, teacher!" },
      { chunk: "How are you?", meaning: "你好吗？", example: "Hi, how are you?" },
      { chunk: "Nice to meet you", meaning: "很高兴认识你", example: "Nice to meet you!" }
    ],
    pronunciationTips: [
      { tip: "How are you? → /haʊ ɑːr juː/", example: "Fast, natural speech" },
      { tip: "I'm fine → /aɪm faɪn/", example: "Contraction is natural" }
    ],
    commonMistakes: [
      {
        mistake: "翻译 '你好吗？' 为 'How do you do?'",
        correction: "日常问候用 'How are you?'",
        explanation: "'How do you do?' 是正式场合的初次见面问候，现在很少使用。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You meet your new neighbor for the first time. Greet them, introduce yourself, and say goodbye politely.",
        prompts: [
          "Say good morning",
          "Ask how they are",
          "Introduce yourself",
          "Say goodbye"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Hello",
        synonyms: ["Hi", "Hey"],
        antonyms: [],
        example: "Hello, how are you?"
      },
      {
        word: "Goodbye",
        synonyms: ["Bye", "See you"],
        antonyms: [],
        example: "Goodbye, see you tomorrow!"
      }
    ],
    shadowingPractice: [
      "Hi, good morning!",
      "How are you?",
      "I'm fine, thanks.",
      "Nice to meet you.",
      "Have a great day!"
    ],
    speakingChallenge: {
      instruction: "Practice greeting 3 different people: a friend, a teacher, and a shop assistant. Use appropriate greetings for each.",
      hints: [
        "Use 'Hi' or 'Hey' with friends",
        "Use 'Good morning/afternoon' with teachers",
        "Use 'Hello' with shop assistants",
        "Remember to say please and thank you"
      ]
    }
  },
  {
    id: "asking-directions",
    title: "Asking for Directions",
    emoji: "🗺️",
    description: "How to ask for and understand directions when you are lost or traveling.",
    color: "from-sky-400 to-blue-400",
    level: "A1",
    estimatedTime: "12 min",
    vocabularyPreview: [
      { word: "Excuse me", phonetic: "/ɪkˈskuːz miː/", chinese: "打扰一下", partOfSpeech: "phrase" },
      { word: "Where is...?", phonetic: "/wer ɪz/", chinese: "...在哪里？", partOfSpeech: "question" },
      { word: "Turn left", phonetic: "/tɜːrn left/", chinese: "左转", partOfSpeech: "phrase" },
      { word: "Turn right", phonetic: "/tɜːrn raɪt/", chinese: "右转", partOfSpeech: "phrase" },
      { word: "Go straight", phonetic: "/ɡoʊ streɪt/", chinese: "直走", partOfSpeech: "phrase" },
      { word: "Next to", phonetic: "/nekst tuː/", chinese: "在...旁边", partOfSpeech: "phrase" }
    ],
    conversation: [
      { speaker: "Tourist", line: "Excuse me, where is the train station?" },
      { speaker: "Local", line: "Go straight for two blocks, then turn left." },
      { speaker: "Tourist", line: "Is it far from here?" },
      { speaker: "Local", line: "No, it's about a 5-minute walk." },
      { speaker: "Tourist", line: "Thank you very much!" },
      { speaker: "Local", line: "You're welcome. Enjoy your day!" }
    ],
    chineseTranslation: [
      { speaker: "游客", line: "打扰一下，火车站在哪里？" },
      { speaker: "当地人", line: "直走两个街区，然后左转。" },
      { speaker: "游客", line: "离这里远吗？" },
      { speaker: "当地人", line: "不远，步行大约5分钟。" },
      { speaker: "游客", line: "非常感谢！" },
      { speaker: "当地人", line: "不客气。祝你今天愉快！" }
    ],
    usefulExpressions: [
      { expression: "Excuse me", meaning: "打扰一下", usage: "向陌生人提问前使用" },
      { expression: "Where is...?", meaning: "...在哪里？", usage: "询问地点" },
      { expression: "Turn left/right", meaning: "左转/右转", usage: "指路时使用" },
      { expression: "Go straight", meaning: "直走", usage: "指路时使用" },
      { expression: "You're welcome", meaning: "不客气", usage: "回应感谢" }
    ],
    grammarFocus: [
      {
        title: "Imperative Verbs for Directions",
        explanation: "用祈使句（动词原形开头）指路。",
        examples: [
          "Go straight.",
          "Turn left.",
          "Walk for two blocks."
        ]
      },
      {
        title: "Prepositions of Place",
        explanation: "用介词描述位置。",
        examples: [
          "The station is next to the bank.",
          "It's on Main Street.",
          "It's across from the park."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Go straight", meaning: "直走", example: "Go straight for 100 meters." },
      { chunk: "Turn left", meaning: "左转", example: "Turn left at the intersection." },
      { chunk: "Next to", meaning: "在...旁边", example: "It's next to the coffee shop." }
    ],
    pronunciationTips: [
      { tip: "Excuse me → /ɪkˈskuːz miː/", example: "Quick, polite phrase" },
      { tip: "Where is → /wer ɪz/", example: "'Where' sounds like 'wear'" }
    ],
    commonMistakes: [
      {
        mistake: "问路时用 'How can I go to...?'",
        correction: "更自然的说法是 'Where is...?' 或 'How do I get to...?'",
        explanation: "'Where is...?' 是最直接、最常用的问路方式。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are lost in a new city. Ask a local for directions to the nearest coffee shop.",
        prompts: [
          "Get the person's attention politely",
          "Ask where the coffee shop is",
          "Ask if it is far",
          "Thank them"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Intersection",
        synonyms: ["Crossing", "Junction"],
        antonyms: [],
        example: "Turn left at the intersection."
      },
      {
        word: "Block",
        synonyms: ["Distance", "Section"],
        antonyms: [],
        example: "Go straight for two blocks."
      }
    ],
    shadowingPractice: [
      "Excuse me, where is the train station?",
      "Go straight for two blocks.",
      "Turn left at the corner.",
      "It's next to the bank.",
      "Thank you very much!"
    ],
    speakingChallenge: {
      instruction: "Practice asking for directions to 3 different places: a hotel, a restaurant, and a museum. Use 'Excuse me', 'Where is...?', and 'Thank you'.",
      hints: [
        "Start with 'Excuse me'",
        "Ask 'Where is...?'",
        "Listen for 'Go straight', 'Turn left/right'",
        "Always say thank you"
      ]
    }
  },
  {
    id: "ordering-food",
    title: "Ordering Food at a Restaurant",
    emoji: "🍽️",
    description: "Simple restaurant conversations: greeting, ordering, asking questions, and paying.",
    color: "from-orange-400 to-red-400",
    level: "A1",
    estimatedTime: "12 min",
    vocabularyPreview: [
      { word: "Menu", phonetic: "/ˈmenjuː/", chinese: "菜单", partOfSpeech: "noun" },
      { word: "I would like...", phonetic: "/aɪ wʊd laɪk/", chinese: "我想要...", partOfSpeech: "phrase" },
      { word: "Bill", phonetic: "/bɪl/", chinese: "账单", partOfSpeech: "noun" },
      { word: "Water", phonetic: "/ˈwɔːtər/", chinese: "水", partOfSpeech: "noun" },
      { word: "Check", phonetic: "/tʃek/", chinese: "账单", partOfSpeech: "noun" },
      { word: "Enjoy your meal", phonetic: "/ɪnˈdʒɔɪ jʊr miːl/", chinese: "请慢用", partOfSpeech: "phrase" }
    ],
    conversation: [
      { speaker: "Server", line: "Hello! Welcome to our restaurant. Here is the menu." },
      { speaker: "Customer", line: "Thank you. Can I have some water please?" },
      { speaker: "Server", line: "Of course. Here you go. Are you ready to order?" },
      { speaker: "Customer", line: "Yes, I would like the soup and a salad, please." },
      { speaker: "Server", line: "Good choice! The soup is today's special. Enjoy your meal!" },
      { speaker: "Customer", line: "Thank you. This looks delicious." },
      { speaker: "Server", line: "Can I get you anything else?" },
      { speaker: "Customer", line: "No, thank you. Could I have the bill, please?" },
      { speaker: "Server", line: "Sure, here it is. The total is $25." },
      { speaker: "Customer", line: "Here is my card. Thank you for the service." },
      { speaker: "Server", line: "You're welcome! Have a great day." }
    ],
    chineseTranslation: [
      { speaker: "服务员", line: "你好！欢迎来到我们餐厅。这是菜单。" },
      { speaker: "顾客", line: "谢谢。请给我一些水。" },
      { speaker: "服务员", line: "当然。给您。您准备好点菜了吗？" },
      { speaker: "顾客", line: "是的，我想要汤和沙拉，谢谢。" },
      { speaker: "服务员", line: "好选择！汤是今天的特色。请慢用！" },
      { speaker: "顾客", line: "谢谢。这看起来很好吃。" },
      { speaker: "服务员", line: "还需要别的吗？" },
      { speaker: "顾客", line: "不用了，谢谢。请给我账单好吗？" },
      { speaker: "服务员", line: "好的，给您。总共25美元。" },
      { speaker: "顾客", line: "给你我的卡。谢谢你的服务。" },
      { speaker: "服务员", line: "不客气！祝你今天愉快。" }
    ],
    usefulExpressions: [
      { expression: "I would like...", meaning: "我想要...", usage: "礼貌点餐" },
      { expression: "Can I have...?", meaning: "能给我...吗？", usage: "请求物品或服务" },
      { expression: "Here you go", meaning: "给你", usage: "递东西给别人时" },
      { expression: "Could I have the bill?", meaning: "请给我账单好吗？", usage: "请求结账" },
      { expression: "Enjoy your meal", meaning: "请慢用", usage: "服务员常用语" }
    ],
    grammarFocus: [
      {
        title: "Polite Requests with 'I would like'",
        explanation: "用 'I would like...' 礼貌地表达想要的东西。比 'I want' 更礼貌。",
        examples: [
          "I would like the chicken salad.",
          "I would like some water, please.",
          "I would like to order now."
        ]
      },
      {
        title: "Yes/No Questions with 'Can I'",
        explanation: "用 'Can I...?' 礼貌地请求允许或物品。",
        examples: [
          "Can I have the menu?",
          "Can I pay by card?",
          "Can I get the bill?"
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "I would like", meaning: "我想要", example: "I would like the steak, please." },
      { chunk: "Could I have...?", meaning: "能给我...吗？", example: "Could I have the bill?" },
      { chunk: "Enjoy your meal", meaning: "请慢用", example: "Enjoy your meal!" }
    ],
    pronunciationTips: [
      { tip: "I would like → /aɪ wʊd laɪk/", example: "Commonly contracted to 'I'd like'" },
      { tip: "Could I have → /kʊd aɪ hæv/", example: "Polite request form" }
    ],
    commonMistakes: [
      {
        mistake: "用 'I want...' 点餐",
        correction: "更礼貌的说法是 'I would like...' 或 'I'd like...'",
        explanation: "在餐厅等服务场所，'I would like' 比 'I want' 更礼貌。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are at a restaurant with a friend. Order food and drinks, ask for the bill, and pay.",
        prompts: [
          "Greet the server",
          "Ask for water and the menu",
          "Order your food",
          "Ask for the bill",
          "Pay and say thank you"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Appetizer",
        synonyms: ["Starter", "Small dish"],
        antonyms: [],
        example: "Let's start with an appetizer."
      },
      {
        word: "Special",
        synonyms: ["Today's special", "Featured dish"],
        antonyms: [],
        example: "What is today's special?"
      }
    ],
    shadowingPractice: [
      "Hello! Welcome to our restaurant.",
      "Can I have some water, please?",
      "I would like the soup and a salad.",
      "Could I have the bill, please?",
      "You're welcome! Have a great day."
    ],
    speakingChallenge: {
      instruction: "Practice ordering a full meal at a restaurant. Include: greeting, ordering food/drink, asking for the bill, and paying.",
      hints: [
        "Start with 'Hello'",
        "Use 'I would like...' to order",
        "Ask 'Could I have the bill?'",
        "Say 'Thank you' at the end"
      ]
    }
  },
  {
    id: "shopping-basics",
    title: "Shopping Basics",
    emoji: "🛍️",
    description: "Buying clothes, asking about prices, and paying at a store.",
    color: "from-pink-400 to-rose-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "How much is...?", phonetic: "/haʊ mʌtʃ ɪz/", chinese: "...多少钱？", partOfSpeech: "question" },
      { word: "Price", phonetic: "/praɪs/", chinese: "价格", partOfSpeech: "noun" },
      { word: "Size", phonetic: "/saɪz/", chinese: "尺寸", partOfSpeech: "noun" },
      { word: "Color", phonetic: "/ˈkʌlər/", chinese: "颜色", partOfSpeech: "noun" },
      { word: "Cash", phonetic: "/kæʃ/", chinese: "现金", partOfSpeech: "noun" },
      { word: "Card", phonetic: "/kɑːrd/", chinese: "卡", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Customer", line: "Excuse me, how much is this shirt?" },
      { speaker: "Shopkeeper", line: "It's $25. It's on sale today." },
      { speaker: "Customer", line: "Oh, that's a good price. Do you have it in medium?" },
      { speaker: "Shopkeeper", line: "Yes, let me check. Here you go. Do you want to try it on?" },
      { speaker: "Customer", line: "Yes, please. Thank you." },
      { speaker: "Customer", line: "It fits perfectly. I'll take it." },
      { speaker: "Shopkeeper", line: "Great! Will you pay by cash or card?" },
      { speaker: "Customer", line: "Card, please." },
      { speaker: "Shopkeeper", line: "Here is your receipt. Thank you for shopping with us!" },
      { speaker: "Customer", line: "Thank you. Have a nice day!" }
    ],
    chineseTranslation: [
      { speaker: "顾客", line: "打扰一下，这件衬衫多少钱？" },
      { speaker: "店员", line: "25美元。今天特价。" },
      { speaker: "顾客", line: "哦，价格不错。有中号吗？" },
      { speaker: "店员", line: "有的，让我看看。给你。你想试穿吗？" },
      { speaker: "顾客", line: "好的，谢谢。" },
      { speaker: "顾客", line: "很合身。我买了。" },
      { speaker: "店员", line: "太好了！您用现金还是刷卡？" },
      { speaker: "顾客", line: "刷卡。" },
      { speaker: "店员", line: "这是您的收据。谢谢惠顾！" },
      { speaker: "顾客", line: "谢谢。祝你今天愉快！" }
    ],
    usefulExpressions: [
      { expression: "How much is...?", meaning: "...多少钱？", usage: "询问价格" },
      { expression: "Do you have this in...?", meaning: "你们有...号/颜色的吗？", usage: "询问尺码或颜色" },
      { expression: "I'll take it", meaning: "我买了", usage: "决定购买" },
      { expression: "Try it on", meaning: "试穿", usage: "请求试穿衣服" },
      { expression: "Pay by cash/card", meaning: "用现金/刷卡支付", usage: "选择支付方式" }
    ],
    grammarFocus: [
      {
        title: "Yes/No Questions with 'Do you'",
        explanation: "用 'Do you have...?' 询问是否有某物。",
        examples: [
          "Do you have this in medium?",
          "Do you have a blue color?",
          "Do you accept credit cards?"
        ]
      },
      {
        title: "Future Intention with 'I'll'",
        explanation: "用 'I'll...' (I will) 表达决定做某事。",
        examples: [
          "I'll take it.",
          "I'll pay by card.",
          "I'll try it on."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "How much is", meaning: "多少钱", example: "How much is this shirt?" },
      { chunk: "I'll take it", meaning: "我买了", example: "I'll take it, please." },
      { chunk: "Try it on", meaning: "试穿", example: "Can I try it on?" }
    ],
    pronunciationTips: [
      { tip: "How much → /haʊ mʌtʃ/", example: "Quick question" },
      { tip: "I'll take it → /aɪl teɪk ɪt/", example: "Decision phrase" }
    ],
    commonMistakes: [
      {
        mistake: "说 'How much it is?'",
        correction: "正确语序是 'How much is it?'",
        explanation: "疑问句中 be 动词要放在主语前面。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You want to buy a pair of shoes at a store. Ask about the price, size, and color. Try them on and buy them.",
        prompts: [
          "Greet the shopkeeper",
          "Ask the price",
          "Ask for your size",
          "Try them on",
          "Pay and say thank you"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Receipt",
        synonyms: ["Proof of purchase", "Bill"],
        antonyms: [],
        example: "Can I have a receipt, please?"
      },
      {
        word: "Discount",
        synonyms: ["Sale", "Reduction"],
        antonyms: [],
        example: "Is there a discount today?"
      }
    ],
    shadowingPractice: [
      "How much is this shirt?",
      "It's $25.",
      "Do you have it in medium?",
      "I'll take it.",
      "Thank you, have a nice day!"
    ],
    speakingChallenge: {
      instruction: "Practice shopping for 3 items: a shirt, a pair of shoes, and a hat. Use 'How much', 'I'll take it', and 'Thank you'.",
      hints: [
        "Start with 'Excuse me'",
        "Ask 'How much is...?'",
        "Ask 'Do you have...?'",
        "End with 'Thank you'"
      ]
    }
  },
  {
    id: "daily-small-talk",
    title: "Daily Small Talk",
    emoji: "☕",
    description: "Casual conversations about weather, weekend plans, hobbies, and general topics.",
    color: "from-teal-400 to-green-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Weather", phonetic: "/ˈweðər/", chinese: "天气", partOfSpeech: "noun" },
      { word: "Weekend", phonetic: "/ˈwiːkend/", chinese: "周末", partOfSpeech: "noun" },
      { word: "Hobby", phonetic: "/ˈhɒbi/", chinese: "爱好", partOfSpeech: "noun" },
      { word: "Like", phonetic: "/laɪk/", chinese: "喜欢", partOfSpeech: "verb" },
      { word: "Beautiful", phonetic: "/ˈbjuːtɪfl/", chinese: "美丽的", partOfSpeech: "adjective" }
    ],
    conversation: [
      { speaker: "Anna", line: "It's a beautiful day today, isn't it?" },
      { speaker: "Ben", line: "Yes, it's sunny and warm. Perfect for a picnic!" },
      { speaker: "Anna", line: "What are your plans for the weekend?" },
      { speaker: "Ben", line: "I'm going to visit my parents. What about you?" },
      { speaker: "Anna", line: "I'm going to the park with my dog. I love walking in the park." },
      { speaker: "Ben", line: "That sounds nice! Do you have any hobbies?" },
      { speaker: "Anna", line: "Yes, I like reading and cooking. How about you?" },
      { speaker: "Ben", line: "I enjoy playing soccer and watching movies." },
      { speaker: "Anna", line: "Cool! Maybe we can play soccer together sometime?" },
      { speaker: "Ben", line: "That would be great! Let's plan it soon." }
    ],
    chineseTranslation: [
      { speaker: "Anna", line: "今天天气真好，不是吗？" },
      { speaker: "Ben", line: "是的，阳光明媚。非常适合野餐！" },
      { speaker: "Anna", line: "你周末有什么计划？" },
      { speaker: "Ben", line: "我要去看望父母。你呢？" },
      { speaker: "Anna", line: "我要带我的狗去公园。我喜欢在公园散步。" },
      { speaker: "Ben", line: "听起来不错！你有什么爱好吗？" },
      { speaker: "Anna", line: "有的，我喜欢阅读和做饭。你呢？" },
      { speaker: "Ben", line: "我喜欢踢足球和看电影。" },
      { speaker: "Anna", line: "酷！也许我们可以找个时间一起踢足球？" },
      { speaker: "Ben", line: "那太好了！我们很快计划吧。" }
    ],
    usefulExpressions: [
      { expression: "It's a beautiful day", meaning: "今天天气真好", usage: "谈论天气" },
      { expression: "What are your plans...?", meaning: "你有什么计划...？", usage: "询问他人安排" },
      { expression: "I love...", meaning: "我喜欢...", usage: "表达爱好或喜好" },
      { expression: "That sounds nice", meaning: "听起来不错", usage: "回应他人的计划" },
      { expression: "Let's plan it soon", meaning: "我们很快计划吧", usage: "建议将来一起做某事" }
    ],
    grammarFocus: [
      {
        title: "Present Continuous for Future Plans",
        explanation: "用现在进行时表示已经安排好的未来计划。",
        examples: [
          "I'm going to the park.",
          "I'm visiting my parents.",
          "What are you doing this weekend?"
        ]
      },
      {
        title: "Simple Present for Habits and Likes",
        explanation: "用一般现在时表达爱好和喜好。",
        examples: [
          "I like reading.",
          "I enjoy playing soccer.",
          "She loves cooking."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "What are your plans", meaning: "你有什么计划", example: "What are your plans for the weekend?" },
      { chunk: "I love...", meaning: "我喜欢...", example: "I love walking in the park." },
      { chunk: "That sounds nice", meaning: "听起来不错", example: "That sounds nice!" }
    ],
    pronunciationTips: [
      { tip: "It's a beautiful day → /ɪts ə ˈbjuːtɪfl deɪ/", example: "Natural, flowing speech" },
      { tip: "What are your plans → /wət ɑːr jʊr plænz/", example: "Fast, connected speech" }
    ],
    commonMistakes: [
      {
        mistake: "说 'I am like reading'",
        correction: "正确说法是 'I like reading'",
        explanation: "'Like' 在这里是动词，不需要用 'am'。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You meet a neighbor in the elevator. Make small talk about the weather and your weekend plans.",
        prompts: [
          "Greet them",
          "Comment on the weather",
          "Ask about their weekend",
          "Share your own plans",
          "Say goodbye"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Picnic",
        synonyms: ["Outdoor meal", "Cookout"],
        antonyms: [],
        example: "We had a picnic in the park."
      },
      {
        word: "Hobby",
        synonyms: ["Interest", "Pastime"],
        antonyms: [],
        example: "My hobby is photography."
      }
    ],
    shadowingPractice: [
      "It's a beautiful day today, isn't it?",
      "What are your plans for the weekend?",
      "I'm going to the park with my dog.",
      "I like reading and cooking.",
      "Maybe we can play soccer together sometime?"
    ],
    speakingChallenge: {
      instruction: "Practice making small talk with 3 different people: a neighbor, a friend, and a colleague. Use weather, weekend, and hobbies as topics.",
      hints: [
        "Start with a greeting",
        "Comment on the weather",
        "Ask about their weekend or hobbies",
        "Share your own interests",
        "End with a friendly goodbye"
      ]
    }
  },
  {
    id: "coffee-shop-basics",
    title: "At the Coffee Shop",
    emoji: "☕",
    description: "Ordering drinks, customizing your order, and paying at a café.",
    color: "from-amber-400 to-orange-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Coffee", phonetic: "/ˈkɒfi/", chinese: "咖啡", partOfSpeech: "noun" },
      { word: "Tea", phonetic: "/tiː/", chinese: "茶", partOfSpeech: "noun" },
      { word: "Medium", phonetic: "/ˈmiːdiəm/", chinese: "中杯", partOfSpeech: "noun" },
      { word: "Large", phonetic: "/lɑːrdʒ/", chinese: "大杯", partOfSpeech: "adjective" },
      { word: "To go", phonetic: "/tuː ɡoʊ/", chinese: "带走", partOfSpeech: "phrase" },
      { word: "Here", phonetic: "/hɪr/", chinese: "这里喝", partOfSpeech: "adverb" }
    ],
    conversation: [
      { speaker: "Barista", line: "Hi! What can I get for you?" },
      { speaker: "Customer", line: "Hi, I'd like a medium latte, please." },
      { speaker: "Barista", line: "Sure. Hot or iced?" },
      { speaker: "Customer", line: "Iced, please. And can I have it to go?" },
      { speaker: "Barista", line: "Absolutely. Would you like any food with that?" },
      { speaker: "Customer", line: "No, just the coffee, thank you." },
      { speaker: "Barista", line: "That'll be $4.50. Name for the cup?" },
      { speaker: "Customer", line: "It's under Anna. Thank you!" },
      { speaker: "Barista", line: "Thanks, Anna! Your order will be ready in 2 minutes." }
    ],
    chineseTranslation: [
      { speaker: "咖啡师", line: "嗨！您想喝点什么？" },
      { speaker: "顾客", line: "嗨，我想要一杯中杯拿铁，谢谢。" },
      { speaker: "咖啡师", line: "好的。热的还是冰的？" },
      { speaker: "顾客", line: "冰的，谢谢。而且我要带走。" },
      { speaker: "咖啡师", line: "当然。需要配点吃的吗？" },
      { speaker: "顾客", line: "不用了，只要咖啡，谢谢。" },
      { speaker: "咖啡师", line: "总共4.50美元。请问怎么称呼？" },
      { speaker: "顾客", line: "安娜。" },
      { speaker: "咖啡师", line: "谢谢安娜！您的订单2分钟后就好。" }
    ],
    usefulExpressions: [
      { expression: "What can I get for you?", meaning: "您想点什么？", usage: "店员询问顾客" },
      { expression: "I'd like...", meaning: "我想要...", usage: "礼貌点单" },
      { expression: "Hot or iced?", meaning: "热的还是冰的？", usage: "询问温度" },
      { expression: "To go / For here", meaning: "带走 / 这里喝", usage: "选择用餐方式" },
      { expression: "That'll be...", meaning: "总共...", usage: "告知价格" },
      { expression: "Name for the cup?", meaning: "请问怎么称呼？", usage: "询问订单姓名" }
    ],
    grammarFocus: [
      {
        title: "Polite Requests with 'I'd like'",
        explanation: "用 'I'd like...' (I would like) 礼貌点单。",
        examples: [
          "I'd like a coffee.",
          "I'd like it iced.",
          "I'd like it to go."
        ]
      },
      {
        title: "Yes/No Questions with 'Would you'",
        explanation: "店员常用 'Would you like...?' 询问额外需求。",
        examples: [
          "Would you like milk?",
          "Would you like a receipt?"
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "I'd like", meaning: "我想要", example: "I'd like a latte, please." },
      { chunk: "To go", meaning: "带走", example: "Can I get this to go?" },
      { chunk: "For here", meaning: "在这里吃", example: "For here or to go?" }
    ],
    pronunciationTips: [
      { tip: "I'd like → /aɪd laɪk/", example: "Contraction sounds natural" },
      { tip: "That'll be → /ðætəl biː/", example: "Quick speech for pricing" }
    ],
    commonMistakes: [
      {
        mistake: "说 'I want...' 点单",
        correction: "更礼貌的说法是 'I'd like...'",
        explanation: "在服务行业，'I'd like' 比 'I want' 更礼貌合适。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are at a coffee shop. Order a drink, specify hot/iced and size, and ask for it to go.",
        prompts: [
          "Greet the barista",
          "Order your drink",
          "Choose hot or iced",
          "Say 'to go'",
          "Confirm your name"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Espresso",
        synonyms: ["Short coffee", "Strong coffee"],
        antonyms: [],
        example: "I'd like an espresso, please."
      },
      {
        word: "Pastry",
        synonyms: ["Baked good", "Snack"],
        antonyms: [],
        example: "Can I see the pastries?"
      }
    ],
    shadowingPractice: [
      "Hi! What can I get for you?",
      "I'd like a medium latte, please.",
      "Hot or iced?",
      "Iced, please. To go.",
      "That'll be $4.50. Name for the cup?"
    ],
    speakingChallenge: {
      instruction: "Practice ordering at a coffee shop 3 times with different drinks: latte, americano, and iced tea. Use 'I'd like', specify size, and say 'to go'.",
      hints: [
        "Start with 'Hi'",
        "Use 'I'd like...'",
        "Choose hot or iced",
        "Remember to say 'thank you'"
      ]
    }
  },
  {
    id: "phone-calls-basics",
    title: "Making Phone Calls",
    emoji: "📞",
    description: "Answering calls, leaving messages, and basic phone etiquette.",
    color: "from-indigo-400 to-blue-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Hello?", phonetic: "/həˈloʊ/", chinese: "喂？", partOfSpeech: "interjection" },
      { word: "Can I speak to...?", phonetic: "/kæn aɪ spiːk tuː/", chinese: "我能和...说话吗？", partOfSpeech: "question" },
      { word: "Hold on", phonetic: "/hoʊld ɒn/", chinese: "请稍等", partOfSpeech: "phrase" },
      { word: "Message", phonetic: "/ˈmesɪdʒ/", chinese: "留言", partOfSpeech: "noun" },
      { word: "Call back", phonetic: "/kɔːl bæk/", chinese: "回电话", partOfSpeech: "phrasal verb" },
      { word: "Busy", phonetic: "/ˈbɪzi/", chinese: "忙", partOfSpeech: "adjective" }
    ],
    conversation: [
      { speaker: "Receptionist", line: "Hello, Smith & Co. How can I help you?" },
      { speaker: "Caller", line: "Hi, can I speak to Mr. Johnson, please?" },
      { speaker: "Receptionist", line: "I'm sorry, he's in a meeting. Can I take a message?" },
      { speaker: "Caller", line: "Yes, please. Tell him Sarah called about the report." },
      { speaker: "Receptionist", line: "Sure. Does he need to call you back?" },
      { speaker: "Caller", line: "Yes, that would be great. My number is 555-0142." },
      { speaker: "Receptionist", line: "Thank you. I'll make sure he calls you back." },
      { speaker: "Caller", line: "Thanks a lot. Goodbye!" }
    ],
    chineseTranslation: [
      { speaker: "前台", line: "您好，这里是Smith公司。有什么可以帮您？" },
      { speaker: "来电者", line: "您好，我能和约翰逊先生通话吗？" },
      { speaker: "前台", line: "抱歉，他在开会。需要我帮您留言吗？" },
      { speaker: "来电者", line: "好的。请告诉他萨拉打来关于报告的事。" },
      { speaker: "前台", line: "好的。他需要给您回电话吗？" },
      { speaker: "来电者", line: "是的，那就太好了。我的号码是555-0142。" },
      { speaker: "前台", line: "谢谢。我会确保他给您回电话。" },
      { speaker: "来电者", line: "非常感谢。再见！" }
    ],
    usefulExpressions: [
      { expression: "Can I speak to...?", meaning: "我能和...说话吗？", usage: "打电话时想找某人" },
      { expression: "Hold on", meaning: "请稍等", usage: "让对方等待" },
      { expression: "Take a message", meaning: "留言", usage: "对方不在时帮对方记录信息" },
      { expression: "Call back", meaning: "回电话", usage: "请求对方回电" },
      { expression: "I'll make sure...", meaning: "我保证...", usage: "承诺转达某事" }
    ],
    grammarFocus: [
      {
        title: "Polite Phone Questions",
        explanation: "打电话时用 'Can I speak to...?' 或 'May I speak to...?' 礼貌询问。",
        examples: [
          "Can I speak to John?",
          "May I speak to the manager?",
          "Is this 555-0199?"
        ]
      },
      {
        title: "Present Continuous for Ongoing Actions",
        explanation: "用现在进行时描述正在进行的动作。",
        examples: [
          "He's in a meeting.",
          "She's on another line.",
          "They're busy right now."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Can I speak to", meaning: "我能和...说话吗", example: "Can I speak to Sarah?" },
      { chunk: "Hold on", meaning: "请稍等", example: "Hold on, let me check." },
      { chunk: "Take a message", meaning: "留言", example: "Can I take a message?" },
      { chunk: "Call back", meaning: "回电话", example: "I'll call you back later." }
    ],
    pronunciationTips: [
      { tip: "Can I speak to → /kæn aɪ spiːk tuː/", example: "Natural, polite phone phrase" },
      { tip: "Hold on → /hoʊld ɒn/", example: "Quick transition" }
    ],
    commonMistakes: [
      {
        mistake: "打电话时说 'I want to talk to...'",
        correction: "更礼貌的说法是 'Can I speak to...?'",
        explanation: "电话用语通常更正式，'Can I speak to...?' 是标准说法。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You call a restaurant to make a reservation. The line is busy, so you leave a message with your name, phone number, and time.",
        prompts: [
          "Answer the phone politely",
          "Ask to make a reservation",
          "Handle the 'busy' situation",
          "Leave your name and number",
          "Say goodbye"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Reservation",
        synonyms: ["Booking", "Appointment"],
        antonyms: [],
        example: "I'd like to make a reservation."
      },
      {
        word: "Voicemail",
        synonyms: ["Answering machine", "Message system"],
        antonyms: [],
        example: "Please leave a message after the beep."
      }
    ],
    shadowingPractice: [
      "Hello, Smith & Co. How can I help you?",
      "Can I speak to Mr. Johnson, please?",
      "I'm sorry, he's in a meeting.",
      "Can I take a message?",
      "I'll make sure he calls you back. Goodbye!"
    ],
    speakingChallenge: {
      instruction: "Practice making a phone call to schedule a doctor's appointment. Use 'Can I speak to...', 'hold on', and 'call back'.",
      hints: [
        "Start with a polite greeting",
        "Ask for the doctor or receptionist",
        "Give your name and reason for calling",
        "Confirm the appointment time",
        "Say thank you and goodbye"
      ]
    }
  },
  {
    id: "bank-basics",
    title: "At the Bank",
    emoji: "🏦",
    description: "Opening an account, checking balance, and basic banking transactions.",
    color: "from-emerald-400 to-green-400",
    level: "A1",
    estimatedTime: "12 min",
    vocabularyPreview: [
      { word: "Account", phonetic: "/əˈkaʊnt/", chinese: "账户", partOfSpeech: "noun" },
      { word: "Balance", phonetic: "/ˈbæləns/", chinese: "余额", partOfSpeech: "noun" },
      { word: "Deposit", phonetic: "/dɪˈpɒzɪt/", chinese: "存款", partOfSpeech: "verb / noun" },
      { word: "Withdraw", phonetic: "/wɪðˈdrɔː/", chinese: "取款", partOfSpeech: "verb" },
      { word: "Credit card", phonetic: "/ˈkredɪt kɑːrd/", chinese: "信用卡", partOfSpeech: "noun" },
      { word: "Receipt", phonetic: "/rɪˈsiːt/", chinese: "收据", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Customer", line: "Hello, I'd like to open a new account." },
      { speaker: "Banker", line: "Of course! What type of account would you like?" },
      { speaker: "Customer", line: "I need a savings account, please." },
      { speaker: "Banker", line: "Great choice. Do you have your ID and proof of address?" },
      { speaker: "Customer", line: "Yes, here they are. How much should I deposit to start?" },
      { speaker: "Banker", line: "You can start with any amount. Can I see your ID, please?" },
      { speaker: "Customer", line: "Sure, here is my passport." },
      { speaker: "Banker", line: "Thank you. Your account is now open. Here is your receipt." },
      { speaker: "Customer", line: "Thank you very much for your help!" }
    ],
    chineseTranslation: [
      { speaker: "顾客", line: "您好，我想开一个新账户。" },
      { speaker: "银行职员", line: "当然！您想开什么类型的账户？" },
      { speaker: "顾客", line: "我想开一个储蓄账户，谢谢。" },
      { speaker: "银行职员", line: "不错的选择。您有身份证和地址证明吗？" },
      { speaker: "顾客", line: "有的，在这里。初始存款需要多少？" },
      { speaker: "银行职员", line: "任何金额都可以。请出示您的身份证。" },
      { speaker: "顾客", line: "好的，这是我的护照。" },
      { speaker: "银行职员", line: "谢谢。您的账户已经开了。这是您的收据。" },
      { speaker: "顾客", line: "非常感谢您的帮助！" }
    ],
    usefulExpressions: [
      { expression: "I'd like to open...", meaning: "我想开...", usage: "申请开户" },
      { expression: "What type of...?", meaning: "什么类型的...？", usage: "询问选项" },
      { expression: "Can I see your...?", meaning: "能看看您的...吗？", usage: "请求查看证件" },
      { expression: "Here you go", meaning: "给你", usage: "递东西时" },
      { expression: "Savings account", meaning: "储蓄账户", usage: "银行术语" }
    ],
    grammarFocus: [
      {
        title: "Polite Requests with 'I'd like'",
        explanation: "用 'I'd like to...' 礼貌表达需求。",
        examples: [
          "I'd like to open an account.",
          "I'd like to check my balance.",
          "I'd like to withdraw some money."
        ]
      },
      {
        title: "Modal Verb 'Can' for Permission",
        explanation: "用 'Can I...?' 礼貌请求允许。",
        examples: [
          "Can I see your ID?",
          "Can I use the ATM?",
          "Can I deposit cash here?"
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Open an account", meaning: "开户", example: "I'd like to open a savings account." },
      { chunk: "Check my balance", meaning: "查余额", example: "Can I check my balance?" },
      { chunk: "Make a deposit", meaning: "存款", example: "I want to make a deposit." }
    ],
    pronunciationTips: [
      { tip: "I'd like → /aɪd laɪk/", example: "Soft d sound, natural flow" },
      { tip: "Savings account → /ˈseɪvɪŋz əˈkaʊnt/", example: "'Savings' has two syllables" }
    ],
    commonMistakes: [
      {
        mistake: "'Open a bank' instead of 'open an account'",
        correction: "Correct: 'open an account'",
        explanation: "银行是 'bank'；你开的是 'account'（账户）。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You go to a bank to open your first savings account. Talk to the banker, provide your documents, and ask about the minimum deposit.",
        prompts: [
          "Greet the banker",
          "State what you want to do",
          "Provide ID and address proof",
          "Ask about the minimum deposit",
          "Thank them and leave"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Deposit",
        synonyms: ["Payment", "Investment"],
        antonyms: ["Withdrawal"],
        example: "I'd like to make a deposit."
      },
      {
        word: "Balance",
        synonyms: ["Amount", "Total"],
        antonyms: ["Debt"],
        example: "What is my account balance?"
      }
    ],
    shadowingPractice: [
      "Hello, I'd like to open a new account.",
      "What type of account would you like?",
      "I need a savings account, please.",
      "Do you have your ID and proof of address?",
      "Thank you very much for your help!"
    ],
    speakingChallenge: {
      instruction: "Practice opening a bank account and making a deposit. Use 'I'd like', 'Can I see', and 'Here you go'.",
      hints: [
        "Say what type of account you want",
        "Have your ID ready",
        "Ask about minimum deposit",
        "Confirm the account is open"
      ]
    }
  },
  {
    id: "doctor-visit",
    title: "Visiting a Doctor",
    emoji: "🏥",
    description: "Describing symptoms, understanding advice, and basic medical conversation.",
    color: "from-teal-400 to-cyan-400",
    level: "A1",
    estimatedTime: "12 min",
    vocabularyPreview: [
      { word: "Sick", phonetic: "/sɪk/", chinese: "生病的", partOfSpeech: "adjective" },
      { word: "Headache", phonetic: "/ˈhedeɪk/", chinese: "头痛", partOfSpeech: "noun" },
      { word: "Fever", phonetic: "/ˈfiːvər/", chinese: "发烧", partOfSpeech: "noun" },
      { word: "Medicine", phonetic: "/ˈmedəsən/", chinese: "药", partOfSpeech: "noun" },
      { word: "Rest", phonetic: "/rest/", chinese: "休息", partOfSpeech: "verb / noun" },
      { word: "Appointment", phonetic: "/əˈpɔɪntmənt/", chinese: "预约", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Doctor", line: "Hello, what seems to be the problem?" },
      { speaker: "Patient", line: "Hi, I have a bad headache and I feel dizzy." },
      { speaker: "Doctor", line: "How long have you had these symptoms?" },
      { speaker: "Patient", line: "Since yesterday. I also have a slight fever." },
      { speaker: "Doctor", line: "Let me check your temperature. Open your mouth, please." },
      { speaker: "Patient", line: "Is it serious?" },
      { speaker: "Doctor", line: "Nothing too serious. You have a mild infection. I recommend rest and this medicine." },
      { speaker: "Patient", line: "How often should I take it?" },
      { speaker: "Doctor", line: "Take one pill three times a day after meals. Drink plenty of water and rest well." },
      { speaker: "Patient", line: "Thank you, Doctor. I'll do that." }
    ],
    chineseTranslation: [
      { speaker: "医生", line: "您好，哪里不舒服？" },
      { speaker: "病人", line: "您好，我头痛得很厉害，还觉得头晕。" },
      { speaker: "医生", line: "这些症状持续多久了？" },
      { speaker: "病人", line: "从昨天开始的。我还稍微有点发烧。" },
      { speaker: "医生", line: "让我量一下体温。请张开嘴。" },
      { speaker: "病人", line: "严重吗？" },
      { speaker: "医生", line: "不严重。你有轻微感染。我建议休息并吃这个药。" },
      { speaker: "病人", line: "我应该多久吃一次？" },
      { speaker: "医生", line: "饭后每天三次，每次一片。多喝水，好好休息。" },
      { speaker: "病人", line: "谢谢医生。我会的。" }
    ],
    usefulExpressions: [
      { expression: "What seems to be the problem?", meaning: "哪里不舒服？", usage: "医生询问病情" },
      { expression: "I have a...", meaning: "我有...", usage: "描述症状" },
      { expression: "How long...?", meaning: "持续多久了？", usage: "询问持续时间" },
      { expression: "Take one pill...", meaning: "吃一片...", usage: "说明服药方法" },
      { expression: "Drink plenty of water", meaning: "多喝水", usage: "医生建议" }
    ],
    grammarFocus: [
      {
        title: "Present Perfect for Duration",
        explanation: "用现在完成时表示从过去持续到现在的状态。",
        examples: [
          "I have had a headache for two days.",
          "I have been feeling dizzy since morning.",
          "How long have you had the fever?"
        ]
      },
      {
        title: "Modal Verb 'Should' for Advice",
        explanation: "用 'should' 给出建议。",
        examples: [
          "You should rest.",
          "You should drink more water.",
          "You should see a doctor."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "I have a headache", meaning: "我头痛", example: "I have a terrible headache." },
      { chunk: "How long...?", meaning: "多久了？", example: "How long have you been sick?" },
      { chunk: "Take one pill", meaning: "吃一片药", example: "Take one pill three times a day." },
      { chunk: "Plenty of water", meaning: "大量的水", example: "Drink plenty of water." }
    ],
    pronunciationTips: [
      { tip: "What seems to be → /wɒt siːmz tu biː/", example: "Linking 'seems to'" },
      { tip: "Three times a day → /θriː taɪmz ə deɪ/", example: "Fast, natural speech" }
    ],
    commonMistakes: [
      {
        mistake: "'I have a headache since yesterday'",
        correction: "'I have had a headache since yesterday'",
        explanation: "表示从过去持续到现在，用现在完成时 'have had'。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are not feeling well. Visit a doctor, describe your symptoms, ask about the cause, and follow the doctor's advice.",
        prompts: [
          "Greet the doctor",
          "Describe your symptoms",
          "Answer questions about duration",
          "Ask for the diagnosis",
          "Repeat the advice"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Symptom",
        synonyms: ["Sign", "Indication"],
        antonyms: [],
        example: "What symptoms do you have?"
      },
      {
        word: "Prescription",
        synonyms: ["Doctor's order", "Medication"],
        antonyms: [],
        example: "I need to fill my prescription."
      }
    ],
    shadowingPractice: [
      "Hello, what seems to be the problem?",
      "I have a bad headache and I feel dizzy.",
      "How long have you had these symptoms?",
      "Take one pill three times a day after meals.",
      "Drink plenty of water and rest well."
    ],
    speakingChallenge: {
      instruction: "Practice visiting a doctor for three different problems: a cold, a stomachache, and a sore throat. Use 'I have a...' and ask 'What should I do?'.",
      hints: [
        "Start with 'Hello, what seems to be the problem?'",
        "Describe your symptom",
        "Ask how long it has lasted",
        "Follow the advice"
      ]
    }
  },
  {
    id: "making-appointments",
    title: "Making Appointments",
    emoji: "📅",
    description: "Scheduling, rescheduling, and confirming appointments by phone or in person.",
    color: "from-purple-400 to-indigo-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Appointment", phonetic: "/əˈpɔɪntmənt/", chinese: "预约", partOfSpeech: "noun" },
      { word: "Available", phonetic: "/əˈveɪləbl/", chinese: "有空的", partOfSpeech: "adjective" },
      { word: "Time slot", phonetic: "/taɪm slɒt/", chinese: "时间段", partOfSpeech: "noun" },
      { word: "Confirm", phonetic: "/kənˈfɜːrm/", chinese: "确认", partOfSpeech: "verb" },
      { word: "Reschedule", phonetic: "/riːˈʃedjuːl/", chinese: "改期", partOfSpeech: "verb" },
      { word: "Cancellation", phonetic: "/ˌkænsəˈleɪʃn/", chinese: "取消", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Receptionist", line: "Good morning! How can I help you?" },
      { speaker: "Customer", line: "Hi, I'd like to make an appointment, please." },
      { speaker: "Receptionist", line: "Sure. What day works best for you?" },
      { speaker: "Customer", line: "Do you have anything available on Friday morning?" },
      { speaker: "Receptionist", line: "Let me check. Yes, we have 10:00 and 11:30." },
      { speaker: "Customer", line: "11:30 is perfect. Thank you!" },
      { speaker: "Receptionist", line: "Great. Can I get your name and phone number please?" },
      { speaker: "Customer", line: "My name is Lisa, and my number is 555-0199." },
      { speaker: "Receptionist", line: "Thank you, Lisa! Your appointment is confirmed for Friday at 11:30." }
    ],
    chineseTranslation: [
      { speaker: "前台", line: "早上好！有什么可以帮您？" },
      { speaker: "顾客", line: "您好，我想预约。" },
      { speaker: "前台", line: "好的。您哪天方便？" },
      { speaker: "顾客", line: "周五上午有空吗？" },
      { speaker: "前台", line: "让我看看。有的，10点和11:30有空。" },
      { speaker: "顾客", line: "11:30完美。谢谢！" },
      { speaker: "前台", line: "好的。请问怎么称呼？电话号码是多少？" },
      { speaker: "顾客", line: "我叫丽莎，电话是555-0199。" },
      { speaker: "前台", line: "谢谢丽莎！您的预约已确认，周五11:30。" }
    ],
    usefulExpressions: [
      { expression: "I'd like to make an appointment", meaning: "我想预约", usage: "预约时使用" },
      { expression: "What day works best for you?", meaning: "您哪天方便？", usage: "询问可用时间" },
      { expression: "Do you have anything available...?", meaning: "...有空吗？", usage: "询问可用时段" },
      { expression: "That works for me", meaning: "那个时间对我可以", usage: "确认时间" },
      { expression: "Your appointment is confirmed", meaning: "预约已确认", usage: "确认预约" }
    ],
    grammarFocus: [
      {
        title: "Modal Verbs for Possibility and Offers",
        explanation: "用 'Can I...?' 和 'Do you have...?' 询问是否可能。",
        examples: [
          "Can I make an appointment?",
          "Do you have anything available on Monday?",
          "Can I speak to the manager?"
        ]
      },
      {
        title: "Present Simple for Scheduled Events",
        explanation: "用一般现在时描述已知安排。",
        examples: [
          "My appointment is on Friday.",
          "The meeting starts at 10:00.",
          "I have a dental appointment tomorrow."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Make an appointment", meaning: "预约", example: "I'd like to make an appointment." },
      { chunk: "Do you have anything available", meaning: "有空吗", example: "Do you have anything available tomorrow?" },
      { chunk: "Works for me", meaning: "对我可以", example: "10:00 works for me." }
    ],
    pronunciationTips: [
      { tip: "I'd like → /aɪd laɪk/", example: "Natural, polite request" },
      { tip: "Available → /əˈveɪləbl/", example: "Stress on second syllable" }
    ],
    commonMistakes: [
      {
        mistake: "'Make an appointment with the doctor' 说成 'make a doctor appointment'",
        correction: "两种都可以，但 'make an appointment with the doctor' 更常见",
        explanation: "注意 'appointment' 前面通常用 'an'。"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You need to schedule a dentist appointment. Call the clinic, ask for Friday, confirm 11:30, and write down the details.",
        prompts: [
          "Call and greet",
          "Ask to make an appointment",
          "Suggest a day",
          "Choose an available time",
          "Confirm your name and time"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Schedule",
        synonyms: ["Plan", "Timetable"],
        antonyms: ["Cancel"],
        example: "I need to schedule a meeting."
      },
      {
        word: "Available",
        synonyms: ["Free", "Open"],
        antonyms: ["Busy", "Unavailable"],
        example: "Is the doctor available on Tuesday?"
      }
    ],
    shadowingPractice: [
      "Hi, I'd like to make an appointment, please.",
      "What day works best for you?",
      "Do you have anything available on Friday morning?",
      "11:30 is perfect.",
      "Your appointment is confirmed for Friday at 11:30."
    ],
    speakingChallenge: {
      instruction: "Practice scheduling three appointments: a dentist, a hairdresser, and a massage. Use 'I'd like to make an appointment' and 'Do you have anything available...?'.",
      hints: [
        "Call or visit in person",
        "Ask for availability",
        "Pick a time that works",
        "Confirm the appointment",
        "Thank them politely"
      ]
    }
  }
];
