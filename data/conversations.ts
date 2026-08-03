import { ConversationTopic } from "@/types/conversations";

export const conversations: ConversationTopic[] = [
  {
    id: "first-meeting",
    title: "Meeting Someone for the First Time",
    emoji: "??",
    description: "Natural introductions, small talk, and making a good first impression.",
    color: "from-blue-400 to-cyan-400",
    level: "A2",
    estimatedTime: "15 min",
    vocabularyPreview: [
      { word: "first impression", phonetic: "/f??rst ?m'pre?n/", chinese: "????", partOfSpeech: "noun" },
      { word: "connect", phonetic: "/k?'nekt/", chinese: "????", partOfSpeech: "verb" },
      { word: "awkward", phonetic: "/'??kw?rd/", chinese: "???", partOfSpeech: "adjective" },
      { word: "break the ice", phonetic: "/bre?k ð? a?s/", chinese: "????", partOfSpeech: "idiom" },
      { word: "hometown", phonetic: "/'ho?mta?n/", chinese: "??", partOfSpeech: "noun" },
      { word: "catch up", phonetic: "/kæt? ?p/", chinese: "??", partOfSpeech: "phrasal verb" },
      { word: "industry", phonetic: "/'?nd?stri/", chinese: "??", partOfSpeech: "noun" }
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
      { speaker: "Alex", line: "?,??????????????——?????????????" },
      { speaker: "Sarah", line: "??!????,????????????????" },
      { speaker: "Alex", line: "???????,???????????" },
      { speaker: "Sarah", line: "??,?????????,???????!" },
      { speaker: "Alex", line: "???,??!??????????????" },
      { speaker: "Sarah", line: "??!???????????????,??????" },
      { speaker: "Alex", line: "????????????????????????" },
      { speaker: "Sarah", line: "???,???????????????,???????????——??????????" },
      { speaker: "Alex", line: "?????????????,?????????" },
      { speaker: "Sarah", line: "???!??????????" },
      { speaker: "Alex", line: "??????????????????????,????" },
      { speaker: "Sarah", line: "???????,????——???????" },
      { speaker: "Alex", line: "?????????????????????????????" },
      { speaker: "Sarah", line: "?????!??????????????" },
      { speaker: "Alex", line: "????????????,?????????" },
      { speaker: "Sarah", line: "?????????????,?????" },
      { speaker: "Alex", line: "???,????????????!" }
    ],
    usefulExpressions: [
      { expression: "You must be...?", meaning: "????????", usage: "???????????????????" },
      { expression: "Can't complain", meaning: "???????", usage: "?????????,???????????" },
      { expression: "Swamped with work", meaning: "?????", usage: "????????" },
      { expression: "Fell into it by accident", meaning: "????????", usage: "??????????????" },
      { expression: "Never looked back", meaning: "????", usage: "????????????????" },
      { expression: "Killing it", meaning: "???????", usage: "????????" },
      { expression: "Ran into each other", meaning: "????", usage: "??????" }
    ],
    grammarFocus: [
      {
        title: "Present Perfect for Life Experience",
        explanation: "?????????????????????,??????????",
        examples: [
          "I've been swamped with work lately.",
          "I've just gotten promoted.",
          "Have you been to this area before?"
        ]
      },
      {
        title: "Past Simple vs. Present Perfect",
        explanation: "??????????,??????????????",
        examples: [
          "I fell into it by accident (specific past moment).",
          "I've been studying communication (ongoing relevance)."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "meet someone briefly", meaning: "???????", example: "We met briefly at the conference." },
      { chunk: "catch up", meaning: "??", example: "Let's catch up over coffee sometime." },
      { chunk: "fall into something", meaning: "????????", example: "I fell into teaching by accident." },
      { chunk: "never looked back", meaning: "????", example: "I switched careers and never looked back." },
      { chunk: "run into someone", meaning: "??????", example: "I ran into my old boss downtown." }
    ],
    pronunciationTips: [
      { tip: "Connected speech: 'got to' ? 'gotta'", example: "'I gotta run' instead of 'I have got to run'" },
      { tip: "Weak forms: 'to' is often /t?/ or /tu/", example: "'going to' ? 'gonna'" }
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
    emoji: "???",
    description: "Interacting with waiters, asking questions, and making special requests.",
    color: "from-orange-400 to-red-400",
    level: "A2",
    estimatedTime: "12 min",
    vocabularyPreview: [
      { word: "reservation", phonetic: "/?rez?r've??n/", chinese: "??", partOfSpeech: "noun" },
      { word: "recommend", phonetic: "/?rek?'mend/", chinese: "??", partOfSpeech: "verb" },
      { word: "allergic", phonetic: "/?'l??rd??k/", chinese: "???", partOfSpeech: "adjective" },
      { word: "customize", phonetic: "/'k?st?ma?z/", chinese: "??", partOfSpeech: "verb" }
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
      { speaker: "Waiter", line: "???!??????" },
      { speaker: "Mike", line: "??,?Turner??????" },
      { speaker: "Waiter", line: "??,????????——????????" },
      { speaker: "Emma", line: "??!??????????????????" },
      { speaker: "Waiter", line: "?????????????" },
      { speaker: "Mike", line: "????????,??????????" },
      { speaker: "Waiter", line: "?????????????????????" },
      { speaker: "Emma", line: "?????,?????????????????" },
      { speaker: "Waiter", line: "?,??????——????????????" },
      { speaker: "Mike", line: "?????,???????????" },
      { speaker: "Emma", line: "?????——????????????" },
      { speaker: "Waiter", line: "??????????????????" },
      { speaker: "Mike", line: "??,????????????????" },
      { speaker: "Waiter", line: "??15-20????????????" },
      { speaker: "Emma", line: "????!???????" },
      { speaker: "Waiter", line: "??????????????" }
    ],
    usefulExpressions: [
      { expression: "Do you have a reservation?", meaning: "??????", usage: "????????????????" },
      { expression: "Party of two", meaning: "??", usage: "?????????" },
      { expression: "I'll give you a moment", meaning: "??????", usage: "???????????" },
      { expression: "Could we get...?", meaning: "????...??", usage: "???????" },
      { expression: "On the side", meaning: "???", usage: "??????????" },
      { expression: "Check on you", meaning: "??????", usage: "????????????" }
    ],
    grammarFocus: [
      {
        title: "Polite Requests with 'Could' and 'Would'",
        explanation: "??????,? 'Could/Can/Would you...?' ?????????",
        examples: [
          "Could I get the dressing on the side?",
          "Would you recommend the salmon?",
          "Can we get some water, please?"
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "look things over", meaning: "??", example: "Take your time and look things over." },
      { chunk: "get something", meaning: "???", example: "Could we get some water?" },
      { chunk: "eye something", meaning: "????", example: "I was eyeing the chocolate cake." },
      { chunk: "in-house", meaning: "???", example: "The sauce is made in-house." }
    ],
    pronunciationTips: [
      { tip: "'Could we' ? /k?d wi/ with linking", example: "Could we ? 'Coudwee'" },
      { tip: "'Would you' ? /w?d??/ with elision", example: "Would you ? 'Woodja'" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I want the salmon' instead of 'I'll have...'",
        correction: "Use 'I'll have...' or 'I'd like...' for politeness",
        explanation: "??? 'I want' ??????????"
      },
      {
        mistake: "Saying 'Can I get...' without 'please'",
        correction: "Always add 'please' when making requests",
        explanation: "????????,'please' ??????????"
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
    emoji: "?",
    description: "Ordering at a coffee shop, customizing drinks, and quick conversations.",
    color: "from-amber-400 to-yellow-400",
    level: "A1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Business coffee meetings" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard coffee shop interaction" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "With friends at a café" }
    ],
    warmUp: {
      title: "Warm-Up: Coffee Culture",
      content: "Coffee shops are everywhere in English-speaking countries. Ordering coffee is one of the most common daily interactions. In this lesson, you'll learn how to order confidently, customize your drink, and make small talk with the barista.",
      contentZh: "????????????????????????????????,??????????????????,????????"
    },
    vocabulary: [
      {
        word: "brew",
        phonetic: "/bru?/",
        chinese: "??",
        pinyin: "chong pèi",
        partOfSpeech: "verb",
        definitionEn: "To make coffee or tea by pouring hot water over it.",
        definitionZh: "??????????????",
        exampleEn: "I brew a fresh cup every morning.",
        exampleZh: "?????????????",
        register: "neutral"
      },
      {
        word: "latte",
        phonetic: "/'l??te?/",
        chinese: "??",
        pinyin: "ná tie",
        partOfSpeech: "noun",
        definitionEn: "Coffee drink made with espresso and steamed milk.",
        definitionZh: "??????????????????",
        exampleEn: "I'll have a latte with oat milk.",
        exampleZh: "??????????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-coffee-1",
          expression: "What can I get for you?",
          chinese: "??????",
          pinyin: "nín yào dian shén me?",
          meaning: "Standard greeting from baristas and servers asking what you'd like to order.",
          whenToUse: "When being served at a café, restaurant, or bar. The server is asking for your order.",
          whenNotToUse: "Don't use this as a customer — it's the server's line. As a customer, say 'I'll have...' or 'I'd like...'",
          nativeFrequency: "Extremely common — heard multiple times daily in service settings.",
          commonMistakes: [
            { mistake: "Customer saying 'What can I get for you?' to the barista", correction: "The barista says this to you. You respond with your order." }
          ],
          pronunciation: "/w?t kæn a? get f?r ju?/",
          funnyExample: "A: What can I get for you? B: You, obviously. A: ...That's not what I meant.",
          memoryTrick: "Think: 'What = order' + 'get = receive' = 'What do you want to receive?'",
          relatedExpressions: ["I'll have...", "I'd like...", "Can I get...?"],
          collocations: ["get for you", "get me a coffee", "get the usual"],
          miniQuiz: [
            { question: "Who says 'What can I get for you?'?", options: ["The barista/server", "The customer", "Both", "Neither"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-coffee-2",
          expression: "You got it",
          chinese: "???",
          pinyin: "méi wèn tí",
          meaning: "A casual way to confirm or agree to a request.",
          whenToUse: "When confirming an order, agreeing to a request, or showing you understand.",
          whenNotToUse: "Don't use in very formal settings. Use 'Certainly' or 'Of course' instead.",
          nativeFrequency: "Very common in casual service interactions.",
          commonMistakes: [
            { mistake: "Using in formal business emails", correction: "Use 'Certainly' or 'I'll take care of that' in formal contexts" }
          ],
          pronunciation: "/ju g?t ?t/",
          funnyExample: "A: Can you fly to the moon for me? B: You got it! A: ...I was joking.",
          memoryTrick: "Think: 'GOT it = I understand and will do it.'",
          relatedExpressions: ["No problem", "Sure thing", "Absolutely", "Of course"],
          collocations: ["you got it", "you got it, thanks", "you got it, no problem"],
          miniQuiz: [
            { question: "'You got it' means:", options: ["I'll do it / No problem", "I don't understand", "I'm confused", "Go away"], correct: 0 }
          ],
          register: "casual"
        }
      ]
    },
    nativeChunks: [
      { chunk: "What can I get for you?", meaning: "??????", example: "What can I get for you?", register: "neutral", context: "Barista greeting" },
      { chunk: "I'll have...", meaning: "??...", example: "I'll have a large latte, please.", register: "neutral", context: "Ordering" },
      { chunk: "throw in", meaning: "????", example: "Throw in an extra cookie.", register: "casual", context: "Adding items" },
      { chunk: "not that strict about", meaning: "?...?????", example: "I'm not that strict about gluten.", register: "casual", context: "Expressing flexibility" },
      { chunk: "You got it", meaning: "???", example: "You got it. That'll be $7.50.", register: "casual", context: "Confirming order" }
    ],
    conversation: [
      { speaker: "Barista", line: "Hey there! What can I get for you?", register: "casual", note: "Standard greeting with friendly tone" },
      { speaker: "Lisa", line: "Hi! I'll take a large latte, please.", register: "neutral" },
      { speaker: "Barista", line: "Sure. Milk choice — we have whole, skim, oat, and almond.", register: "neutral" },
      { speaker: "Lisa", line: "Oat milk, please. And can you make it with an extra shot?", register: "neutral" },
      { speaker: "Barista", line: "Of course. That'll be one extra shot for $1.10. Anything else?", register: "neutral" },
      { speaker: "Lisa", line: "Actually, throw in a blueberry muffin too. Is that gluten-free?", register: "casual", note: "'Throw in' = casually add" },
      { speaker: "Barista", line: "Nope, it has gluten, unfortunately. Our gluten-free option is the banana bread.", register: "neutral" },
      { speaker: "Lisa", line: "Hmm, I'll just take the muffin then. I'm not that strict about gluten anyway.", register: "casual" },
      { speaker: "Barista", line: "Haha, fair enough. So that's one oat milk latte with an extra shot and a blueberry muffin.", register: "neutral" },
      { speaker: "Lisa", line: "Exactly. Oh — and can I get that for here or to-go?", register: "neutral" },
      { speaker: "Barista", line: "To-go, you said?", register: "neutral" },
      { speaker: "Lisa", line: "Actually, make it for here. I'll stay and chat with my friend.", register: "neutral" },
      { speaker: "Barista", line: "You got it. That'll be $7.50 total.", register: "casual" },
      { speaker: "Lisa", line: "Here's my card. Oh, and do you have a loyalty program?", register: "neutral" },
      { speaker: "Barista", line: "We do! Every 10th drink is free. I'll punch your card.", register: "neutral" },
      { speaker: "Lisa", line: "Perfect! Thanks so much.", register: "neutral" },
      { speaker: "Barista", line: "You're welcome! I'll call your name when it's ready.", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "Barista", line: "?!???????" },
      { speaker: "Lisa", line: "??!???????,???" },
      { speaker: "Barista", line: "?????????????????????????" },
      { speaker: "Lisa", line: "????????????????" },
      { speaker: "Barista", line: "????????????1.10?????????" },
      { speaker: "Lisa", line: "??,??????????????????" },
      { speaker: "Barista", line: "??,????????????????????" },
      { speaker: "Lisa", line: "?,????????????????????" },
      { speaker: "Barista", line: "??,??????????????????,?????????" },
      { speaker: "Lisa", line: "????——????????????" },
      { speaker: "Barista", line: "???????" },
      { speaker: "Lisa", line: "??,?????????????????" },
      { speaker: "Barista", line: "?????7.50???" },
      { speaker: "Lisa", line: "???????,?????????" },
      { speaker: "Barista", line: "??!??10???????????" },
      { speaker: "Lisa", line: "???!?????" },
      { speaker: "Barista", line: "???!???????????" }
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
      { tip: "'Could we' ? /k?d wi/ with linking", example: "Could we ? 'Coudwee'" },
      { tip: "'Would you' ? /w?d??/ with elision", example: "Would you ? 'Woodja'" }
    ],
    shadowing: [
      { line: "Hey there! What can I get for you?", emphasis: "What can I get" },
      { line: "I'll take a large latte, please.", emphasis: "I'll take" },
      { line: "Could you make it with an extra shot?", emphasis: "Could you make" },
      { line: "That'll be $7.50 total.", emphasis: "That'll be" }
    ],
    speakingPractice: {
      instruction: "Practice ordering at a coffee shop. Change the details: different drink, different milk, different snack. Record yourself.",
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
        "Would you go back to that coffee shop?"
      ]
    },
    rolePlay: {
      scenario: "You are at a café. Order a drink and a snack. Ask about today's special. Make a special request.",
      prompts: [
        "Greet the barista",
        "Order your drink with customization",
        "Ask about a menu item",
        "Ask about loyalty programs"
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
      description: "Go to a café or coffee shop this week and order in English. Write down exactly what you said and what the barista said. Reflect: did you feel more confident?",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "Which is the most natural way to order?",
        questionZh: "??????????",
        options: [
          { label: "A) I'll have the latte, please.", labelZh: "A) ??????,???", correct: true },
          { label: "B) Give me the latte.", labelZh: "B) ?????", correct: false },
          { label: "C) I want the latte.", labelZh: "C) ?????", correct: false },
          { label: "D) Latte. Now.", labelZh: "D) ??????", correct: false }
        ],
        explanation: "'I'll have...' is the standard polite way to order. 'I want' sounds demanding.",
        explanationZh: "'I'll have...'???????????'I want'????????"
      },
      {
        id: "q2",
        question: "'Throw in' means:",
        questionZh: "'Throw in'???:",
        options: [
          { label: "A) Add something extra", labelZh: "A) ????", correct: true },
          { label: "B) Throw something away", labelZh: "B) ??", correct: false },
          { label: "C) Make coffee", labelZh: "C) ???", correct: false },
          { label: "D) Pay", labelZh: "D) ??", correct: false }
        ],
        explanation: "'Throw in' means to add something extra casually. 'Throw in an extra shot' = add an extra shot.",
        explanationZh: "'Throw in'?????????????'Throw in an extra shot'=???????"
      }
    ],
    review: [
      { key: "order", prompt: "What's the polite way to order coffee?", answer: "I'll have... or I'd like..." },
      { key: "customize", prompt: "How do you ask for customization?", answer: "Could I get... with extra...?" },
      { key: "loyalty", prompt: "How do you ask about loyalty programs?", answer: "Do you have a loyalty program?" }
    ],
    humorNotes: [
      {
        context: "When the barista asks for your name",
        punchline: "A: Name for the order? B: Actually, call me 'The guy who ordered the complicated coffee.'",
        explanation: "Self-deprecating humor about complicated coffee orders is very common."
      }
    ],
    usefulExpressions: [
      { expression: "What can I get for you?", meaning: "??????", usage: "????????" },
      { expression: "Throw in", meaning: "????", usage: "??????????" },
      { expression: "I'm not that strict about...", meaning: "??...?????", usage: "???????????" },
      { expression: "You got it", meaning: "???", usage: "???????" },
      { expression: "Make it for here/to-go", meaning: "???/??", usage: "??????" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I want a latte' without 'please'",
        correction: "Use 'I'll have...' or 'I'd like...'",
        explanation: "??? 'I want' ?????"
      },
      {
        mistake: "Using 'take away' instead of 'to-go'",
        correction: "American: 'to-go'; British: 'takeaway'",
        explanation: "???????"
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
    emoji: "???",
    description: "Asking about sizes, trying things on, and negotiating prices.",
    color: "from-pink-400 to-rose-400",
    level: "A2",
    estimatedTime: "12 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "High-end store interactions" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard retail conversation" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Shopping with friends" },
      { level: "slang", label: "Slang", color: "bg-purple-100 text-purple-800 border-purple-200", description: "Peer shopping chat" }
    ],
    warmUp: {
      title: "Warm-Up: Shopping Culture",
      content: "Shopping is a universal activity, but the language varies by country. In this lesson, you'll learn how to ask for sizes, negotiate prices politely, and handle fitting rooms like a local.",
      contentZh: "???????,???????????????,????????????????,??????????????"
    },
    vocabulary: [
      {
        word: "fitting room",
        phonetic: "/'f?t?? ru?m/",
        chinese: "???",
        pinyin: "shì yi jian",
        partOfSpeech: "noun",
        definitionEn: "A private room in a store where you can try on clothes.",
        definitionZh: "??????????,???????????",
        exampleEn: "The fitting rooms are at the back.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "cashier",
        phonetic: "/kæ'??r/",
        chinese: "???",
        pinyin: "shou yín yuán",
        partOfSpeech: "noun",
        definitionEn: "The person who handles payments at a store.",
        definitionZh: "??????????",
        exampleEn: "The cashier scanned all the items.",
        exampleZh: "???????????",
        register: "neutral"
      },
      {
        word: "discount",
        phonetic: "/'d?ska?nt/",
        chinese: "??",
        pinyin: "zhé kòu",
        partOfSpeech: "noun",
        definitionEn: "A reduction in the regular price of something.",
        definitionZh: "??????????",
        exampleEn: "Is there a student discount?",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "refund",
        phonetic: "/'ri?f?nd/",
        chinese: "??",
        pinyin: "tuì kuan",
        partOfSpeech: "noun",
        definitionEn: "The return of money after a purchase.",
        definitionZh: "????????",
        exampleEn: "I'd like a refund, please.",
        exampleZh: "??????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-shopping-1",
          expression: "I'm just looking",
          chinese: "???????",
          pinyin: "wo zhi shì suí biàn kàn kan",
          meaning: "A polite way to tell a salesperson you don't need help right now.",
          whenToUse: "When a salesperson approaches you and you want to browse independently.",
          whenNotToUse: "Don't use if you actually want help. Then say 'Yes, do you have this in medium?' instead.",
          nativeFrequency: "Extremely common in retail stores globally.",
          commonMistakes: [
            { mistake: "Saying it rudely", correction: "Say it with a smile: 'I'm just looking, thanks!'" }
          ],
          pronunciation: "/a?m d??st 'l?k??/",
          funnyExample: "A: Can I help you? B: I'm just looking. A: We have cameras. B: I'm just looking at the cameras too.",
          memoryTrick: "Think: 'just = only' + 'looking = browsing' = 'only browsing'",
          relatedExpressions: ["Just browsing", "Thanks, I'm good", "I'll let you know"],
          collocations: ["just looking", "just browsing", "just looking thanks"],
          miniQuiz: [
            { question: "'I'm just looking' means:", options: ["I'm browsing without buying", "I'm lost", "I need help", "I'm angry"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-shopping-2",
          expression: "That works for me",
          chinese: "?????",
          pinyin: "zhè duì wo hé shì",
          meaning: "Accepting an offer, deal, or suggestion that suits you.",
          whenToUse: "When agreeing to a price, plan, or suggestion. Very common in negotiations.",
          whenNotToUse: "Don't use when rejecting. Say 'That doesn't work for me' to decline.",
          nativeFrequency: "Very common in shopping and business negotiations.",
          commonMistakes: [
            { mistake: "Using 'That's good' instead", correction: "'That works for me' is more active — it shows the option fits your needs" }
          ],
          pronunciation: "/ðæt w??ks f?r mi?/",
          funnyExample: "A: The price is $80. B: That works for me! A: Great! B: ...I meant I'll work for $80.",
          memoryTrick: "Think: 'works = functions' + 'for me = for my needs' = 'it fits my needs'",
          relatedExpressions: ["That suits me", "I'll take it", "Sounds good", "Perfect"],
          collocations: ["works for me", "works for us", "that works"],
          miniQuiz: [
            { question: "'That works for me' means:", options: ["I accept / It's fine", "I reject it", "I'm confused", "Go away"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-shopping-3",
          expression: "You're a lifesaver",
          chinese: "???????",
          pinyin: "ni zhen shì bang le dà máng",
          meaning: "Strong informal gratitude when someone does something helpful.",
          whenToUse: "When someone goes above and beyond to help you. Very warm and appreciative.",
          whenNotToUse: "Don't use with strangers or in formal settings. Use 'Thank you so much' instead.",
          nativeFrequency: "Common among friends, family, and helpful service workers.",
          commonMistakes: [
            { mistake: "Using with a strict boss", correction: "Save this for friends and friendly service staff" }
          ],
          pronunciation: "/j??r ? 'la?fse?v?r/",
          funnyExample: "A: Here's your coffee. B: You're a lifesaver! A: It's just coffee. B: It's my third coffee today.",
          memoryTrick: "Think: 'lifesaver = someone who saves your life' = 'you helped me so much'",
          relatedExpressions: ["You're the best", "I owe you one", "Thanks a million", "You're a star"],
          collocations: ["you're a lifesaver", "you're a lifesaver thanks", "life saver"],
          miniQuiz: [
            { question: "'You're a lifesaver' is:", options: ["Strong gratitude for help", "A medical term", "An insult", "A greeting"], correct: 0 }
          ],
          register: "casual"
        }
      ]
    },
    nativeChunks: [
      { chunk: "I'm just looking", meaning: "???????", example: "I'm just looking, thanks!", register: "neutral", context: "Responding to sales staff" },
      { chunk: "on a budget", meaning: "????", example: "I'm on a bit of a budget.", register: "neutral", context: "Discussing price" },
      { chunk: "try it on", meaning: "??", example: "Can I try it on?", register: "neutral", context: "Fitting room request" },
      { chunk: "That works for me", meaning: "?????", example: "That works for me!", register: "neutral", context: "Accepting offer" },
      { chunk: "right over there", meaning: "????", example: "The fitting rooms are right over there.", register: "neutral", context: "Giving directions in store" }
    ],
    conversation: [
      { speaker: "Sales associate", line: "Hi there! Let me know if you need any help finding your size.", register: "neutral" },
      { speaker: "Jenny", line: "Thanks! I'm just looking for casual summer dresses — do you have anything in medium?", register: "neutral" },
      { speaker: "Sales associate", line: "Absolutely! We have a whole new section right here. What's your price range?", register: "neutral" },
      { speaker: "Jenny", line: "I'd prefer something under $60, if possible. I'm on a bit of a budget.", register: "neutral" },
      { speaker: "Sales associate", line: "We have some lovely options right here. This floral one is on sale — 30% off.", register: "neutral" },
      { speaker: "Jenny", line: "Oh, that's cute! Can I try it on?", register: "neutral" },
      { speaker: "Sales associate", line: "Of course! The fitting rooms are right over there. Size medium is on the hanger.", register: "neutral" },
      { speaker: "Jenny", line: "Perfect. Oh — do you take credit cards?", register: "neutral" },
      { speaker: "Sales associate", line: "Yes, we take Visa, Mastercard, and Apple Pay. Cash too, if you prefer.", register: "neutral" },
      { speaker: "Jenny", line: "Great. I'll be right back!", register: "neutral" },
      { speaker: "Jenny", line: "(coming back) Hmm, it's a little tight around the shoulders. Do you have a large?", register: "neutral" },
      { speaker: "Sales associate", line: "Let me check... yes, right here! I'll also grab a few other styles for you.", register: "neutral" },
      { speaker: "Jenny", line: "You're a lifesaver. Also, if I buy two, is there an additional discount?", register: "casual" },
      { speaker: "Sales associate", line: "Actually, yes — 20% off when you buy two or more items today only.", register: "neutral" },
      { speaker: "Jenny", line: "That works for me! I'll try these too.", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "Sales associate", line: "??!??????????????" },
      { speaker: "Jenny", line: "??!???????????——????????" },
      { speaker: "Sales associate", line: "???!?????????????????????" },
      { speaker: "Jenny", line: "??????,???60??????????????" },
      { speaker: "Sales associate", line: "????????????????????——???" },
      { speaker: "Jenny", line: "?,???!????????" },
      { speaker: "Sales associate", line: "??!?????????????????" },
      { speaker: "Jenny", line: "?????——?????????" },
      { speaker: "Sales associate", line: "??,????Visa?Mastercard?Apple Pay???????" },
      { speaker: "Jenny", line: "?????????!" },
      { speaker: "Jenny", line: "(??)?,??????????????" },
      { speaker: "Sales associate", line: "?????...??,???!????????????" },
      { speaker: "Jenny", line: "??????????,??????,????????" },
      { speaker: "Sales associate", line: "?????——????????????" },
      { speaker: "Jenny", line: "??????!????????" }
    ],
    grammarInContext: [
      {
        title: "Present Continuous for Current Actions",
        explanation: "?????????????????????????????",
        examples: [
          "I'm looking for a dress.",
          "I'm on a bit of a budget.",
          "I'm just browsing, thanks."
        ]
      }
    ],
    pronunciation: [
      { tip: "'Could I' ? /k?d a?/ with linking", example: "Could I ? 'Couddie'" },
      { tip: "'Try it on' ? /tra? ?t ?n/ with elision", example: "Try it on ? 'Tryidon'" }
    ],
    shadowing: [
      { line: "Hi there! Let me know if you need any help finding your size.", emphasis: "Let me know" },
      { line: "Thanks! I'm just looking for casual summer dresses.", emphasis: "just looking" },
      { line: "Can I try it on?", emphasis: "try it on" },
      { line: "That works for me!", emphasis: "works for me" }
    ],
    speakingPractice: {
      instruction: "Practice a shopping dialogue. Change the item: shoes, jacket, or phone case. Use 'I'm just looking', 'Can I try this on?', 'Do you have a large?', and 'That works for me'.",
      hints: [
        "Try buying a pair of sneakers",
        "Ask about the material and warranty",
        "Ask about student discount",
        "Complete the purchase"
      ],
      followUpQuestions: [
        "What did you buy?",
        "Did you get a discount?",
        "Was the salesperson helpful?",
        "Would you shop there again?"
      ]
    },
    rolePlay: {
      scenario: "You are shopping for a birthday gift for a friend. Ask the salesperson for help finding something within your budget.",
      prompts: [
        "Greet the salesperson",
        "Explain what you're looking for",
        "Ask about price and alternatives",
        "Decide whether to buy"
      ],
      partnerLines: [
        "Hi there! Let me know if you need anything.",
        "We have some lovely options in that price range.",
        "Would you like to try it on?",
        "That works for me!"
      ]
    },
    homework: {
      task: "Real-World Shopping",
      description: "Go shopping this week and practice using 'I'm just looking', 'Can I try this on?', and 'That works for me'. Write a short journal entry about your experience.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "What does 'I'm just looking' mean?",
        questionZh: "'I'm just looking'??????",
        options: [
          { label: "A) I'm browsing without buying", labelZh: "A) ???????", correct: true },
          { label: "B) I need help immediately", labelZh: "B) ???????", correct: false },
          { label: "C) I want to buy everything", labelZh: "C) ???????", correct: false },
          { label: "D) I'm lost", labelZh: "D) ????", correct: false }
        ],
        explanation: "'I'm just looking' politely tells sales staff you're browsing and don't need assistance.",
        explanationZh: "'I'm just looking'?????????????,??????"
      },
      {
        id: "q2",
        question: "'That works for me' means:",
        questionZh: "'That works for me'???:",
        options: [
          { label: "A) I accept / It's fine", labelZh: "A) ???/??", correct: true },
          { label: "B) I reject it", labelZh: "B) ???", correct: false },
          { label: "C) I'm confused", labelZh: "C) ? confused", correct: false },
          { label: "D) It doesn't fit", labelZh: "D) ???", correct: false }
        ],
        explanation: "'That works for me' means the offer or suggestion is acceptable.",
        explanationZh: "'That works for me'?????????????????"
      }
    ],
    review: [
      { key: "browse", prompt: "How do you say you're not ready to buy?", answer: "I'm just looking" },
      { key: "try", prompt: "How do you ask to try clothes on?", answer: "Can I try it on?" },
      { key: "accept", prompt: "How do you accept a deal?", answer: "That works for me" }
    ],
    humorNotes: [
      {
        context: "When the salesperson keeps pushing",
        punchline: "A: You need help! B: I'm just looking. A: I saw you looking at the $500 jacket. B: I'm just... financially looking.",
        explanation: "Self-deprecating humor about budget and shopping is very common."
      }
    ],
    usefulExpressions: [
      { expression: "I'm just looking", meaning: "???????", usage: "??????????" },
      { expression: "On sale", meaning: "???", usage: "??????" },
      { expression: "Let me know if you need anything", meaning: "????????", usage: "???????" },
      { expression: "Try it on", meaning: "??", usage: "??????" },
      { expression: "That works for me", meaning: "?????", usage: "???????" },
      { expression: "You're a lifesaver", meaning: "???????", usage: "????????" }
    ],
    commonMistakes: [
      {
        mistake: "Using 'big' instead of 'large' for clothing sizes",
        correction: "Clothing sizes are small, medium, large",
        explanation: "????? small/medium/large,?? big/small?"
      },
      {
        mistake: "Saying 'expensive' instead of 'I can't afford it'",
        correction: "Use softer phrases: 'That's a bit over my budget'",
        explanation: "???????????,?????????"
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
    emoji: "??",
    description: "Getting a ride, giving directions, and handling payment.",
    color: "from-yellow-400 to-amber-400",
    level: "A2",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Business travel or premium rides" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard taxi or Uber ride" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Chatting with a friendly driver" }
    ],
    warmUp: {
      title: "Warm-Up: Ride-Sharing & Taxis",
      content: "Taking a taxi or ride-share is common everywhere. In this lesson, you'll learn how to confirm your destination, politely ask the driver for adjustments, and handle payment smoothly.",
      contentZh: "???????????????????????,????????????????????,?????????"
    },
    vocabulary: [
      {
        word: "destination",
        phonetic: "/?dest?'ne??n/",
        chinese: "???",
        pinyin: "mù dì dì",
        partOfSpeech: "noun",
        definitionEn: "The place you are going to.",
        definitionZh: "???????",
        exampleEn: "What's your final destination?",
        exampleZh: "???????????",
        register: "neutral"
      },
      {
        word: "pickup",
        phonetic: "/'p?k?p/",
        chinese: "????",
        pinyin: "jie rén dì dian",
        partOfSpeech: "noun",
        definitionEn: "The location where a driver collects a passenger.",
        definitionZh: "?????????",
        exampleEn: "The pickup is at Terminal 2.",
        exampleZh: "???2?????",
        register: "neutral"
      },
      {
        word: "traffic",
        phonetic: "/'træf?k/",
        chinese: "??",
        pinyin: "jiao tong",
        partOfSpeech: "noun",
        definitionEn: "Vehicles moving on a road.",
        definitionZh: "?????????",
        exampleEn: "The traffic is heavy today.",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "estimated",
        phonetic: "/'est?me?t?d/",
        chinese: "???",
        pinyin: "yu gu de",
        partOfSpeech: "adjective",
        definitionEn: "Calculated approximately based on current conditions.",
        definitionZh: "????????????",
        exampleEn: "The estimated arrival is 3 PM.",
        exampleZh: "?????????3??",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-taxi-1",
          expression: "Are you heading to...?",
          chinese: "???...??",
          pinyin: "nín yào qù... ma?",
          meaning: "Asking someone about their destination.",
          whenToUse: "When confirming where someone is going. Very common with drivers, concierges, and travel staff.",
          whenNotToUse: "Don't use for past trips. Use 'Did you go to...?' for past tense.",
          nativeFrequency: "Extremely common in transportation and travel contexts.",
          commonMistakes: [
            { mistake: "Using 'going to' without 'heading'", correction: "'Heading to' is more natural in spoken English" }
          ],
          pronunciation: "/?r ju? 'hed?? tu?/",
          funnyExample: "A: Are you heading to the gym? B: No, the gym is heading to me. I haven't moved in an hour.",
          memoryTrick: "Think: 'heading = direction' + 'to = destination' = 'where are you directed?'",
          relatedExpressions: ["Where are you going?", "Where to?", "What's your destination?"],
          collocations: ["heading to", "heading home", "heading out"],
          miniQuiz: [
            { question: "'Are you heading to the airport?' means:", options: ["Are you going to the airport?", "Are you leaving the airport?", "Do you work at the airport?", "Do you like airports?"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-taxi-2",
          expression: "Depending on traffic",
          chinese: "?????",
          pinyin: "kàn jiao tong qíng kuàng",
          meaning: "A phrase indicating that time or outcome varies based on traffic conditions.",
          whenToUse: "When giving time estimates for travel. Shows awareness of uncertainty.",
          whenNotToUse: "Don't use for non-traffic situations. Use 'Depending on the weather' for weather.",
          nativeFrequency: "Very common in transportation and logistics.",
          commonMistakes: [
            { mistake: "Using 'depending about'", correction: "Always use 'depending on'" }
          ],
          pronunciation: "/d?'pend?? ?n 'træf?k/",
          funnyExample: "A: When will you arrive? B: Depending on traffic. A: ...But there's no traffic. B: Then I'm here.",
          memoryTrick: "Think: 'depend = rely on' + 'on traffic' = 'rely on traffic conditions'",
          relatedExpressions: ["It depends", "Depending on the weather", "Subject to change"],
          collocations: ["depending on traffic", "depending on the weather", "depending on circumstances"],
          miniQuiz: [
            { question: "'Depending on traffic' means:", options: ["Time varies based on traffic", "I hate traffic", "Traffic is bad", "I'm stuck"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-taxi-3",
          expression: "Take your time",
          chinese: "???",
          pinyin: "màn màn lái",
          meaning: "A polite way to tell someone they don't need to hurry.",
          whenToUse: "When someone is running late or needs extra time. Very common and polite.",
          whenNotToUse: "Don't use if you actually need them to hurry. Use 'Hurry up' or 'We're running late' instead.",
          nativeFrequency: "Extremely common — one of the most polite phrases in English.",
          commonMistakes: [
            { mistake: "Using sarcastically without context", correction: "This phrase is almost always sincere in English" }
          ],
          pronunciation: "/te?k j??r ta?m/",
          funnyExample: "A: I'm sorry I'm late! B: Take your time! A: ...But I'm here now. B: I know, I'm just being polite.",
          memoryTrick: "Think: 'take = use' + 'your time = your own pace' = 'use your own pace'",
          relatedExpressions: ["No rush", "Take as long as you need", "Don't rush"],
          collocations: ["take your time", "take all the time", "take your time no rush"],
          miniQuiz: [
            { question: "'Take your time' means:", options: ["Don't hurry", "Hurry up", "Time is up", "I'm late"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-taxi-4",
          expression: "Pull over",
          chinese: "???",
          pinyin: "kào bian tíng",
          meaning: "To move a vehicle to the side of the road and stop.",
          whenToUse: "When asking a driver to stop at the side of the road. Also used by police.",
          whenNotToUse: "Don't use 'stop the car' as a polite request — it sounds like a command.",
          nativeFrequency: "Very common in driving and transportation contexts.",
          commonMistakes: [
            { mistake: "Saying 'stop the car' to a taxi driver", correction: "Say 'Could you pull over here, please?'" }
          ],
          pronunciation: "/p?l '??v?r/",
          funnyExample: "A: Pull over! B: Why? A: I just want to take a photo. B: ...That's not why we say 'pull over'.",
          memoryTrick: "Think: 'pull = move' + 'over = to the side' = 'move to the side'",
          relatedExpressions: ["Pull up", "Stop here", "Park here"],
          collocations: ["pull over", "pull over here", "pull up"],
          miniQuiz: [
            { question: "'Pull over' means:", options: ["Stop at the side of the road", "Pull something heavy", "Drive faster", "Turn left"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "Are you heading to", meaning: "???...??", example: "Are you heading to the airport?", register: "neutral", context: "Confirming destination" },
      { chunk: "depending on traffic", meaning: "?????", example: "About 35 minutes, depending on traffic.", register: "neutral", context: "Time estimate" },
      { chunk: "take your time", meaning: "???", example: "Take your time.", register: "neutral", context: "Being polite" },
      { chunk: "pull over", meaning: "???", example: "Can you pull over here?", register: "neutral", context: "Stopping the car" },
      { chunk: "with time to spare", meaning: "????", example: "We arrived with time to spare.", register: "neutral", context: "Arriving early" }
    ],
    conversation: [
      { speaker: "Driver", line: "Hi there! Are you heading to the airport?", register: "neutral" },
      { speaker: "Tom", line: "Yes, Terminal 3. Is that a long ride?", register: "neutral" },
      { speaker: "Driver", line: "About 35 minutes, depending on traffic. I'll take the highway — it's usually faster.", register: "neutral" },
      { speaker: "Tom", line: "Sounds good. Do you mind if I stop briefly to grab a coffee? It's just around the corner.", register: "neutral" },
      { speaker: "Driver", line: "Sure, no problem. I'll pull over here.", register: "neutral" },
      { speaker: "Tom", line: "Thanks! I'll be two minutes tops.", register: "neutral" },
      { speaker: "Driver", line: "Take your time. Do you want the receipt emailed or printed?", register: "neutral" },
      { speaker: "Tom", line: "Emailed, please. Oh, and could you turn up the AC a bit? It's a bit warm in here.", register: "neutral" },
      { speaker: "Driver", line: "Of course. Here you go — saved you a few minutes. We should make it with time to spare.", register: "neutral" },
      { speaker: "Tom", line: "Perfect. Thanks for the smooth ride!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "Driver", line: "?!???????" },
      { speaker: "Tom", line: "??,3??????????" },
      { speaker: "Driver", line: "??35??,??????????——?????" },
      { speaker: "Tom", line: "???????????????????????????" },
      { speaker: "Driver", line: "??????????????" },
      { speaker: "Tom", line: "??!?????????" },
      { speaker: "Driver", line: "????????????????" },
      { speaker: "Tom", line: "??????——????????????????" },
      { speaker: "Driver", line: "?????——??????????????????" },
      { speaker: "Tom", line: "?????????????!" }
    ],
    grammarInContext: [
      {
        title: "Conditional with 'Depending On'",
        explanation: "'Depending on' + noun means 'if... changes'. It shows that the result is not certain.",
        examples: [
          "Depending on traffic, we'll arrive in 35 minutes.",
          "Depending on the weather, we might stay home.",
          "Depending on the price, I'll buy it."
        ]
      }
    ],
    pronunciation: [
      { tip: "'Depending on' ? /d?'pend?? ?n/ with stress on second syllable", example: "Depending on traffic" },
      { tip: "'Could you' ? /k?d??/ in fast speech", example: "Could you turn up the AC?" }
    ],
    shadowing: [
      { line: "Hi there! Are you heading to the airport?", emphasis: "heading to" },
      { line: "About 35 minutes, depending on traffic.", emphasis: "depending on traffic" },
      { line: "Sure, no problem. I'll pull over here.", emphasis: "pull over" },
      { line: "Take your time.", emphasis: "Take your time" }
    ],
    speakingPractice: {
      instruction: "Role-play a taxi ride. Change the destination, add small talk about the weather or city, and practice asking the driver to adjust something (AC, music, window).",
      hints: [
        "Start by confirming the destination",
        "Ask 'How long is the ride?'",
        "Say 'Could you turn down/up the...?'",
        "Thank the driver at the end"
      ],
      followUpQuestions: [
        "Where did you go?",
        "Did you make any requests?",
        "How was the driver?",
        "Would you take that route again?"
      ]
    },
    rolePlay: {
      scenario: "You are taking an Uber to a restaurant. Confirm the destination, ask about traffic, and make a quick stop if needed.",
      prompts: [
        "Confirm the destination with the driver",
        "Ask about traffic",
        "Make a request about temperature or music",
        "Ask for the receipt preference"
      ],
      partnerLines: [
        "Hi there! Are you heading to the airport?",
        "About 35 minutes, depending on traffic.",
        "Sure, no problem. I'll pull over here.",
        "Take your time."
      ]
    },
    homework: {
      task: "Real-World Ride",
      description: "Take a taxi or Uber this week and practice the expressions from this lesson. Write down what you said and what the driver said.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'Pull over' means:",
        questionZh: "'Pull over'???:",
        options: [
          { label: "A) Stop at the side of the road", labelZh: "A) ???", correct: true },
          { label: "B) Pull something heavy", labelZh: "B) ???", correct: false },
          { label: "C) Drive faster", labelZh: "C) ???", correct: false },
          { label: "D) Turn left", labelZh: "D) ??", correct: false }
        ],
        explanation: "'Pull over' means to move your vehicle to the side of the road and stop.",
        explanationZh: "'Pull over'?????????????"
      },
      {
        id: "q2",
        question: "'Depending on traffic' means:",
        questionZh: "'Depending on traffic'???:",
        options: [
          { label: "A) Time varies based on traffic", labelZh: "A) ?????????", correct: true },
          { label: "B) I hate traffic", labelZh: "B) ?????", correct: false },
          { label: "C) Traffic is bad", labelZh: "C) ?????", correct: false },
          { label: "D) I'm stuck in traffic", labelZh: "D) ????", correct: false }
        ],
        explanation: "'Depending on traffic' means the time or outcome will change based on how heavy traffic is.",
        explanationZh: "'Depending on traffic'?????????????????????"
      }
    ],
    review: [
      { key: "destination", prompt: "How do you ask where someone is going?", answer: "Are you heading to...?" },
      { key: "traffic", prompt: "How do you say time varies based on traffic?", answer: "Depending on traffic" },
      { key: "politeness", prompt: "How do you tell someone not to hurry?", answer: "Take your time" }
    ],
    humorNotes: [
      {
        context: "When the driver asks if you're heading to the airport",
        punchline: "A: Are you heading to the airport? B: No, I'm heading to the gym. A: ...Then why did you book an airport ride? B: I thought it was free cardio.",
        explanation: "Self-deprecating humor about confusing rides with exercise is very common."
      }
    ],
    usefulExpressions: [
      { expression: "Are you heading to...?", meaning: "???...??", usage: "???????" },
      { expression: "Depending on traffic", meaning: "?????", usage: "???????" },
      { expression: "Take your time", meaning: "???", usage: "??????" },
      { expression: "Pull over", meaning: "???", usage: "????" },
      { expression: "With time to spare", meaning: "????", usage: "??????" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'stop the car' instead of 'pull over'",
        correction: "Use 'pull over' for the side of the road",
        explanation: "'Stop the car' ????,'pull over' ??????"
      },
      {
        mistake: "Using 'air conditioner' instead of 'AC'",
        correction: "Both are fine; 'AC' is more common in taxis",
        explanation: "'AC' ? 'air conditioning' ??????"
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
    emoji: "??",
    description: "Checking in, going through security, and boarding.",
    color: "from-sky-400 to-indigo-400",
    level: "A2",
    estimatedTime: "12 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Airline staff and official procedures" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard airport conversation" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Chatting with fellow travelers" }
    ],
    warmUp: {
      title: "Warm-Up: Airport Survival",
      content: "Airports have their own language — from check-in to boarding. In this lesson, you'll learn the essential phrases to navigate airports confidently in English.",
      contentZh: "??????????——???????????,?????????????????????"
    },
    vocabulary: [
      {
        word: "boarding pass",
        phonetic: "/'b??rd?? pæs/",
        chinese: "???",
        pinyin: "deng ji pái",
        partOfSpeech: "noun",
        definitionEn: "A document that allows a passenger to board a flight.",
        definitionZh: "??????????",
        exampleEn: "Don't forget your boarding pass.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "security",
        phonetic: "/s?'kj?r?ti/",
        chinese: "??",
        pinyin: "an jian",
        partOfSpeech: "noun",
        definitionEn: "The process of checking passengers and luggage for safety.",
        definitionZh: "?????????????",
        exampleEn: "Security is at the end of the hall.",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "gate",
        phonetic: "/ge?t/",
        chinese: "???",
        pinyin: "deng ji kou",
        partOfSpeech: "noun",
        definitionEn: "The door through which passengers board the plane.",
        definitionZh: "???????",
        exampleEn: "Boarding starts at Gate C4.",
        exampleZh: "C4????????",
        register: "neutral"
      },
      {
        word: "overhead bin",
        phonetic: "/'o?v?rhed b?n/",
        chinese: "?????",
        pinyin: "tóu di xíng li jià",
        partOfSpeech: "noun",
        definitionEn: "The storage compartment above the seats on a plane.",
        definitionZh: "???????????",
        exampleEn: "Put your bag in the overhead bin.",
        exampleZh: "?????????????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-airport-1",
          expression: "May I see...?",
          chinese: "???...",
          pinyin: "qing chu shì...",
          meaning: "A polite formal request to see someone's documents or ID.",
          whenToUse: "When checking in at airports, hotels, or official venues. Very common and polite.",
          whenNotToUse: "Don't use with friends or family. Use 'Can I see...?' for casual situations.",
          nativeFrequency: "Extremely common at airports, hotels, and official checkpoints.",
          commonMistakes: [
            { mistake: "Using 'I want to see...'", correction: "'May I see...?' is polite and expected in formal settings" }
          ],
          pronunciation: "/me? a? si?/",
          funnyExample: "A: May I see your ID? B: May I see your sense of humor? A: ...Sir, this is the TSA.",
          memoryTrick: "Think: 'may = polite permission' + 'see = look at' = 'polite request to look'",
          relatedExpressions: ["Can I see...?", "Could you show me...?", "Please present..."],
          collocations: ["may I see", "may I see your", "may I have a look"],
          miniQuiz: [
            { question: "'May I see your passport?' is:", options: ["A polite request for documents", "A question about permission", "A statement", "An offer"], correct: 0 }
          ],
          register: "formal"
        },
        {
          id: "de-airport-2",
          expression: "Here you go",
          chinese: "??",
          pinyin: "gei nín",
          meaning: "Giving something to someone in a casual, friendly way.",
          whenToUse: "When handing over documents, money, or items. Very common everywhere.",
          whenNotToUse: "Don't use when receiving — use 'Thank you' instead.",
          nativeFrequency: "Extremely common — one of the most useful phrases in English.",
          commonMistakes: [
            { mistake: "Using in very formal writing", correction: "Use 'Please find attached' in formal emails" }
          ],
          pronunciation: "/h?? ju? go?/",
          funnyExample: "A: Give me the documents. B: Here you go! A: ...That's not how this works.",
          memoryTrick: "Think: 'here = take this' + 'you go = it's yours' = 'take this, it's yours'",
          relatedExpressions: ["There you go", "Here you are", "Here it is"],
          collocations: ["here you go", "here you go thanks", "here you go please"],
          miniQuiz: [
            { question: "'Here you go' means:", options: ["Take this / Here it is", "Go away", "Goodbye", "Come here"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-airport-3",
          expression: "Proceed to",
          chinese: "??",
          pinyin: "qián wang",
          meaning: "Official instruction to go to a specific location.",
          whenToUse: "At airports, government buildings, and official venues. Formal and clear.",
          whenNotToUse: "Don't use with friends. Use 'Go to' or 'Head to' in casual situations.",
          nativeFrequency: "Very common at airports and official venues.",
          commonMistakes: [
            { mistake: "Using casually with friends", correction: "Use 'Head to' or 'Go to' with friends" }
          ],
          pronunciation: "/pr?'si?d tu?/",
          funnyExample: "A: Proceed to Gate 5. B: Proceed? A: Yes, walk to Gate 5. B: ...You could have just said 'go'.",
          memoryTrick: "Think: 'proceed = move forward' + 'to = direction' = 'move forward to a place'",
          relatedExpressions: ["Head to", "Go to", "Make your way to"],
          collocations: ["proceed to", "proceed to security", "proceed to gate"],
          miniQuiz: [
            { question: "'Proceed to Gate 5' means:", options: ["Go to Gate 5", "Stay at Gate 5", "Gate 5 is closed", "Wait at Gate 5"], correct: 0 }
          ],
          register: "formal"
        }
      ]
    },
    nativeChunks: [
      { chunk: "May I see", meaning: "???", example: "May I see your passport?", register: "formal", context: "Official request" },
      { chunk: "here you go", meaning: "??", example: "Here you go.", register: "neutral", context: "Handing something" },
      { chunk: "proceed to", meaning: "??", example: "Proceed to security.", register: "formal", context: "Airport directions" },
      { chunk: "boarding pass", meaning: "???", example: "Don't forget your boarding pass.", register: "neutral", context: "Travel document" },
      { chunk: "within the limit", meaning: "????", example: "Your bag is within the weight limit.", register: "neutral", context: "Baggage rules" }
    ],
    conversation: [
      { speaker: "Agent", line: "Good morning! May I see your passport and boarding pass, please?", register: "formal" },
      { speaker: "David", line: "Sure, here you go. Is the flight on time?", register: "neutral" },
      { speaker: "Agent", line: "Yes, boarding starts at 10:30 at Gate C4. Do you have any checked bags?", register: "neutral" },
      { speaker: "David", line: "Just this one suitcase. I have some electronics in my carry-on too — do I need to take them out?", register: "neutral" },
      { speaker: "Agent", line: "Laptops and tablets need to go in the bin separately. Phones can stay in your bag.", register: "neutral" },
      { speaker: "David", line: "Got it. How much is the overweight fee if I'm over the limit?", register: "neutral" },
      { speaker: "Agent", line: "For international flights, it's $50 per kilogram over 23kg.", register: "neutral" },
      { speaker: "David", line: "Okay, I think I'm within the limit. Thanks for your help!", register: "neutral" },
      { speaker: "Agent", line: "You're welcome! Proceed to security, and have a great flight.", register: "formal" }
    ],
    chineseTranslation: [
      { speaker: "Agent", line: "???!????????????" },
      { speaker: "David", line: "??,?????????" },
      { speaker: "Agent", line: "??,10:30????,?C4????????????" },
      { speaker: "David", line: "????????????????????????——???????" },
      { speaker: "Agent", line: "???????????????????????????" },
      { speaker: "David", line: "????????,???????" },
      { speaker: "Agent", line: "???????23?????,???50???" },
      { speaker: "David", line: "??,??????????????!" },
      { speaker: "Agent", line: "???!?????,???????" }
    ],
    grammarInContext: [
      {
        title: "Modal Verbs for Permission and Requests",
        explanation: "? 'may/can/could' ?????????????? 'may',???? 'can' ? 'could'?",
        examples: [
          "May I see your passport?",
          "Can I keep my phone in the bag?",
          "Could you tell me where Gate C4 is?"
        ]
      }
    ],
    pronunciation: [
      { tip: "'May I' ? /me? a?/ with linking", example: "May I see..." },
      { tip: "'Boarding pass' ? /'b??rd?? pæs/", example: "Stress the first syllable of each word" }
    ],
    shadowing: [
      { line: "Good morning! May I see your passport and boarding pass, please?", emphasis: "May I see" },
      { line: "Boarding starts at 10:30 at Gate C4.", emphasis: "Gate C4" },
      { line: "Laptops and tablets need to go in the bin separately.", emphasis: "separately" },
      { line: "Proceed to security, and have a great flight.", emphasis: "Proceed to" }
    ],
    speakingPractice: {
      instruction: "Practice the airport check-in dialogue. Change the destination, add a second bag, and ask about in-flight meals or entertainment.",
      hints: [
        "Try going to Tokyo or Paris",
        "Ask 'Is there a meal on this flight?'",
        "Ask about seat selection",
        "Practice asking about baggage fees"
      ],
      followUpQuestions: [
        "Where did you fly to?",
        "Did you have any checked bags?",
        "Was security easy?",
        "Did you get a window seat?"
      ]
    },
    rolePlay: {
      scenario: "You are at the airport check-in counter. You have one suitcase and a backpack. Ask about your gate, baggage allowance, and any travel requirements.",
      prompts: [
        "Present your passport and boarding pass",
        "Ask about your gate number",
        "Ask about baggage allowance",
        "Ask about security requirements"
      ],
      partnerLines: [
        "Good morning! May I see your passport and boarding pass?",
        "Boarding starts at 10:30 at Gate C4.",
        "Your carry-on is fine. Do you have any checked bags?",
        "Laptops need to go in the bin separately."
      ]
    },
    homework: {
      task: "Airport Vocabulary Hunt",
      description: "Watch an airport scene in a movie or TV show. Write down 10 words or phrases you hear related to check-in, security, or boarding.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'May I see your passport?' is:",
        questionZh: "'May I see your passport?'?:",
        options: [
          { label: "A) A polite formal request", labelZh: "A) ???????", correct: true },
          { label: "B) An informal question", labelZh: "B) ?????", correct: false },
          { label: "C) A command", labelZh: "C) ??", correct: false },
          { label: "D) An offer", labelZh: "D) ??", correct: false }
        ],
        explanation: "'May I...' is a very polite way to ask for permission or documents.",
        explanationZh: "'May I...'?????????????????"
      },
      {
        id: "q2",
        question: "'Proceed to security' means:",
        questionZh: "'Proceed to security'???:",
        options: [
          { label: "A) Go to security", labelZh: "A) ????", correct: true },
          { label: "B) Stay at check-in", labelZh: "B) ?????", correct: false },
          { label: "C) Wait for security", labelZh: "C) ????", correct: false },
          { label: "D) Exit the airport", labelZh: "D) ????", correct: false }
        ],
        explanation: "'Proceed to' means to go to a specific location. It's commonly used at airports.",
        explanationZh: "'Proceed to'?????????????????"
      }
    ],
    review: [
      { key: "documents", prompt: "What documents do you need at check-in?", answer: "Passport and boarding pass" },
      { key: "polite", prompt: "How do you politely ask to see documents?", answer: "May I see...?" },
      { key: "baggage", prompt: "What do you call the bag you carry on the plane?", answer: "Carry-on" }
    ],
    humorNotes: [
      {
        context: "When security asks about electronics",
        punchline: "A: Do you have any electronics? B: Just my phone, my laptop, my tablet, my watch, my e-reader, and my portable charger. A: ...Just put them all in the bin.",
        explanation: "Self-deprecating humor about having too many gadgets is very common at airports."
      }
    ],
    usefulExpressions: [
      { expression: "May I see...?", meaning: "???...", usage: "????/???????????" },
      { expression: "Here you go", meaning: "??", usage: "??????" },
      { expression: "Proceed to", meaning: "??", usage: "????" },
      { expression: "Within the limit", meaning: "??????", usage: "?????/???" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I want to check in' without documents ready",
        correction: "Have passport and boarding pass ready before approaching",
        explanation: "?????????????"
      },
      {
        mistake: "Using 'bag' for all luggage types",
        correction: "Suitcase = ???; carry-on = ????; checked bag = ????",
        explanation: "????????????"
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
    emoji: "??",
    description: "Making plans with friends, discussing activities, and casual invitations.",
    color: "from-green-400 to-emerald-400",
    level: "A2",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Professional event invitations" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard social planning" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Friends making plans" },
      { level: "slang", label: "Slang", color: "bg-purple-100 text-purple-800 border-purple-200", description: "Peer group planning" }
    ],
    warmUp: {
      title: "Warm-Up: Social Planning",
      content: "Making plans is one of the most common social interactions in English. In this lesson, you'll learn how to suggest activities, agree on times, and handle changes gracefully.",
      contentZh: "???????????????????????,???????????????,?????????"
    },
    vocabulary: [
      {
        word: "up for",
        phonetic: "/?p f?r/",
        chinese: "??",
        pinyin: "yuàn yì",
        partOfSpeech: "phrase",
        definitionEn: "Willing to do something; interested in an activity.",
        definitionZh: "?????;?????????",
        exampleEn: "I'm up for trying that new restaurant.",
        exampleZh: "???????????",
        register: "neutral"
      },
      {
        word: "hang out",
        phonetic: "/hæ? a?t/",
        chinese: "??",
        pinyin: "xián guàng",
        partOfSpeech: "phrasal verb",
        definitionEn: "To spend time relaxing with friends, without a specific plan.",
        definitionZh: "????????????,???????",
        exampleEn: "Do you want to hang out this weekend?",
        exampleZh: "?????????",
        register: "casual"
      },
      {
        word: "last-minute",
        phonetic: "/læst 'mi?n?t/",
        chinese: "???",
        pinyin: "lín shí de",
        partOfSpeech: "adjective",
        definitionEn: "Happening or done at the last possible moment.",
        definitionZh: "?????????????????",
        exampleEn: "It was a last-minute change.",
        exampleZh: "?????????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-weekend-1",
          expression: "Any plans for...?",
          chinese: "???????",
          pinyin: "you shén me jì huà ma?",
          meaning: "Asking someone what they intend to do in a specific time period.",
          whenToUse: "When asking about someone's weekend, evening, or holiday plans.",
          whenNotToUse: "Don't use for past events. Use 'Did you have plans for...?' for past tense.",
          nativeFrequency: "Extremely common — you'll hear this every week.",
          commonMistakes: [
            { mistake: "Using 'Do you have plans?' instead", correction: "'Any plans' is more natural in casual English" }
          ],
          pronunciation: "/'eni plænz f?r/",
          funnyExample: "A: Any plans for the weekend? B: Yes, my bed and I are very close. A: ...Same.",
          memoryTrick: "Think: 'any = some' + 'plans = ideas' = 'do you have any ideas?'",
          relatedExpressions: ["What are you up to?", "What's the plan?", "Anything fun planned?"],
          collocations: ["any plans", "plans for the weekend", "plans for tonight"],
          miniQuiz: [
            { question: "'Any plans for the weekend?' means:", options: ["What are you doing this weekend?", "Did you do something last weekend?", "Are you free forever?", "Do you like weekends?"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-weekend-2",
          expression: "I'm up for it",
          chinese: "???",
          pinyin: "wo yuàn yì",
          meaning: "Expressing willingness or interest in doing something.",
          whenToUse: "When accepting an invitation or suggestion enthusiastically.",
          whenNotToUse: "Don't use if you're not actually interested. Say 'I'm not really up for it' to decline politely.",
          nativeFrequency: "Very common in casual social situations.",
          commonMistakes: [
            { mistake: "Using 'I want it' instead", correction: "'I'm up for it' shows willingness, not desire" }
          ],
          pronunciation: "/a?m ?p f?r ?t/",
          funnyExample: "A: Want to go skydiving? B: I'm up for it! A: ...I was testing you. B: Too late, I'm in the plane.",
          memoryTrick: "Think: 'up = ready' + 'for = to do' = 'I'm ready to do it'",
          relatedExpressions: ["I'd love to", "Sounds good", "I'm in", "Count me in"],
          collocations: ["up for it", "up for trying", "up for anything"],
          miniQuiz: [
            { question: "'I'm up for it' means:", options: ["I'm willing / interested", "I'm standing up", "I'm rejecting it", "I'm confused"], correct: 0 }
          ],
          register: "casual"
        },
        {
          id: "de-weekend-3",
          expression: "Works for me",
          chinese: "?????",
          pinyin: "zhè duì wo hé shì",
          meaning: "Accepting a time, plan, or suggestion that suits you.",
          whenToUse: "When agreeing to a proposed time or plan. Very common in scheduling.",
          whenNotToUse: "Don't use when rejecting. Say 'That doesn't work for me' to decline.",
          nativeFrequency: "Very common in social and professional planning.",
          commonMistakes: [
            { mistake: "Using 'It's good' instead", correction: "'Works for me' is more active — shows the option fits your schedule" }
          ],
          pronunciation: "/w??ks f?r mi?/",
          funnyExample: "A: Let's meet at 6 AM. B: That works for me. A: ...Are you a robot?",
          memoryTrick: "Think: 'works = functions' + 'for me = for my schedule' = 'my schedule accepts this'",
          relatedExpressions: ["That suits me", "I'll take it", "Sounds good", "Perfect"],
          collocations: ["works for me", "works for us", "that works"],
          miniQuiz: [
            { question: "'Works for me' means:", options: ["I accept / It's fine", "I reject it", "I'm confused", "I'm busy"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "Any plans for", meaning: "???????", example: "Any plans for the weekend?", register: "neutral", context: "Asking about plans" },
      { chunk: "I'm up for", meaning: "???", example: "I'm up for trying that.", register: "casual", context: "Accepting invitation" },
      { chunk: "works for me", meaning: "?????", example: "11 AM works for me.", register: "neutral", context: "Agreeing on time" },
      { chunk: "hang out", meaning: "??", example: "Do you want to hang out?", register: "casual", context: "Casual invitation" },
      { chunk: "backup plan", meaning: "????", example: "We need a backup plan.", register: "neutral", context: "Planning ahead" }
    ],
    conversation: [
      { speaker: "Amy", line: "Hey! Any plans for the weekend?", register: "neutral" },
      { speaker: "John", line: "Not yet. I was thinking of checking out that new art exhibit downtown. You interested?", register: "neutral" },
      { speaker: "Amy", line: "Oh, I saw that last week! It's supposed to be really good. I'm definitely up for it.", register: "casual" },
      { speaker: "John", line: "Great! We could grab lunch afterwards. I heard there's a nice Italian place nearby.", register: "neutral" },
      { speaker: "Amy", line: "Sounds perfect. What time were you thinking?", register: "neutral" },
      { speaker: "John", line: "How about 11 AM? That gives us time to wander through the exhibit without rushing.", register: "neutral" },
      { speaker: "Amy", line: "Works for me! Should we invite Lisa and Mike too?", register: "neutral" },
      { speaker: "John", line: "Good idea. I'll text them. If they can't make it, it's just more coffee for us.", register: "neutral" },
      { speaker: "Amy", line: "Haha, exactly. Oh, and if it rains, should we have a backup plan?", register: "casual" },
      { speaker: "John", line: "Good thinking. There's a board game café right around the corner if we need it.", register: "neutral" },
      { speaker: "Amy", line: "Perfect! So 11 AM, art exhibit, and Italian food — or board games if it rains. I'm excited!", register: "casual" }
    ],
    chineseTranslation: [
      { speaker: "Amy", line: "?!?????????" },
      { speaker: "John", line: "?????????????????????????" },
      { speaker: "Amy", line: "?,??????!???????????" },
      { speaker: "John", line: "???!???????????????????????????" },
      { speaker: "Amy", line: "????????????" },
      { speaker: "John", line: "??11??????????????????,??????" },
      { speaker: "Amy", line: "?????!??????Lisa?Mike????" },
      { speaker: "John", line: "???????????????????,?????????" },
      { speaker: "Amy", line: "??,????——????,????????????" },
      { speaker: "John", line: "?????????????????,????????????" },
      { speaker: "Amy", line: "???!?????11?,???,????——??????????????!" }
    ],
    grammarInContext: [
      {
        title: "Future with 'Going to' for Plans",
        explanation: "? 'be going to' ?????????????",
        examples: [
          "I'm going to the art exhibit.",
          "We're going to grab lunch afterwards.",
          "I'm going to text them."
        ]
      }
    ],
    pronunciation: [
      { tip: "'You interested?' ? /ju '?ntr?st?d/ in fast speech", example: "You interested? = 'Ju interested?'" },
      { tip: "'Going to' ? /'go?n?/ in casual speech", example: "I'm gonna text them." }
    ],
    shadowing: [
      { line: "Hey! Any plans for the weekend?", emphasis: "Any plans" },
      { line: "I'm definitely up for it.", emphasis: "up for it" },
      { line: "How about 11 AM?", emphasis: "How about" },
      { line: "Works for me!", emphasis: "Works for me" }
    ],
    speakingPractice: {
      instruction: "Make weekend plans with a friend. Use: 'I'm up for...', 'That works for me', and 'backup plan'. Change the activity to something you actually enjoy.",
      hints: [
        "Start by asking about their availability",
        "Suggest a specific activity and time",
        "Mention a backup plan",
        "End with excitement about the plans"
      ],
      followUpQuestions: [
        "What did you decide to do?",
        "Did you invite others?",
        "What was your backup plan?",
        "Did the weather change your plans?"
      ]
    },
    rolePlay: {
      scenario: "You and your friend are making weekend plans. Discuss what you want to do, when, and invite others. Have a backup plan ready.",
      prompts: [
        "Ask about their availability",
        "Suggest an activity",
        "Agree on a time",
        "Make a backup plan"
      ],
      partnerLines: [
        "Hey! Any plans for the weekend?",
        "I was thinking of checking out that new art exhibit.",
        "How about 11 AM?",
        "We need a backup plan in case it rains."
      ]
    },
    homework: {
      task: "Real Weekend Plan",
      description: "Actually make plans with a friend this weekend using the expressions from this lesson. Write a brief reflection: did you feel more confident making plans in English?",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'I'm up for it' means:",
        questionZh: "'I'm up for it'???:",
        options: [
          { label: "A) I'm willing / interested", labelZh: "A) ???/???", correct: true },
          { label: "B) I'm standing up", labelZh: "B) ?????", correct: false },
          { label: "C) I'm rejecting it", labelZh: "C) ???", correct: false },
          { label: "D) I'm confused", labelZh: "D) ???", correct: false }
        ],
        explanation: "'I'm up for it' means you're willing or interested in doing something.",
        explanationZh: "'I'm up for it'???????????????"
      },
      {
        id: "q2",
        question: "'Any plans for the weekend?' is asking:",
        questionZh: "'Any plans for the weekend?'???:",
        options: [
          { label: "A) What are you doing this weekend?", labelZh: "A) ??????????", correct: true },
          { label: "B) Did you do something last weekend?", labelZh: "B) ?????????", correct: false },
          { label: "C) Are you free forever?", labelZh: "C) ???????", correct: false },
          { label: "D) Do you like weekends?", labelZh: "D) ???????", correct: false }
        ],
        explanation: "'Any plans for...?' asks about future intentions for a specific time period.",
        explanationZh: "'Any plans for...?'??????????????"
      }
    ],
    review: [
      { key: "ask", prompt: "How do you ask about someone's weekend plans?", answer: "Any plans for the weekend?" },
      { key: "accept", prompt: "How do you accept an invitation?", answer: "I'm up for it" },
      { key: "agree", prompt: "How do you agree on a time?", answer: "Works for me / That time works for me" }
    ],
    humorNotes: [
      {
        context: "When making last-minute plans",
        punchline: "A: Any plans for tonight? B: Yeah, breathing. A: ...I meant actual plans. B: That is an actual plan.",
        explanation: "Self-deprecating humor about having no plans is very common."
      }
    ],
    usefulExpressions: [
      { expression: "Any plans for...?", meaning: "???????", usage: "?????????" },
      { expression: "I'm up for it", meaning: "???", usage: "????" },
      { expression: "Works for me", meaning: "?????", usage: "????" },
      { expression: "Last-minute", meaning: "???", usage: "??????" },
      { expression: "Backup plan", meaning: "????", usage: "??????" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I not have plans' instead of 'I don't have plans'",
        correction: "Use 'I don't have any plans' or 'I have no plans'",
        explanation: "?????????"
      },
      {
        mistake: "Using 'maybe' for definite plans",
        correction: "Use 'probably' or 'definitely' for commitment",
        explanation: "'Maybe' ?????,????????"
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
    emoji: "??",
    description: "Scheduling, rescheduling, and politely cancelling appointments.",
    color: "from-indigo-400 to-purple-400",
    level: "B1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Professional meeting changes" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard appointment scheduling" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Rescheduling with friends" }
    ],
    warmUp: {
      title: "Warm-Up: The Art of Rescheduling",
      content: "Life happens — plans change. In this lesson, you'll learn how to cancel and reschedule politely while maintaining good relationships.",
      contentZh: "??????——?????????,??????????????,??????????"
    },
    vocabulary: [
      {
        word: "reschedule",
        phonetic: "/ri?'sked?u?l/",
        chinese: "??",
        pinyin: "gai qi",
        partOfSpeech: "verb",
        definitionEn: "To change the time of a planned event.",
        definitionZh: "??????????",
        exampleEn: "I need to reschedule our meeting.",
        exampleZh: "???????????",
        register: "neutral"
      },
      {
        word: "postpone",
        phonetic: "/po?st'po?n/",
        chinese: "??",
        pinyin: "tui chí",
        partOfSpeech: "verb",
        definitionEn: "To delay an event to a later time.",
        definitionZh: "????????????",
        exampleEn: "The meeting was postponed until Friday.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "unavoidable",
        phonetic: "/??n?'v??d?bl/",
        chinese: "?????",
        pinyin: "bù ke bì mian de",
        partOfSpeech: "adjective",
        definitionEn: "Impossible to prevent or avoid.",
        definitionZh: "??????????",
        exampleEn: "An unavoidable meeting came up.",
        exampleZh: "???????????",
        register: "formal"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-cancel-1",
          expression: "Are we still on for...?",
          chinese: "??...????????",
          pinyin: "wo men... de jì huà hái bao liú ma?",
          meaning: "Checking if a previously made plan is still happening.",
          whenToUse: "When you want to confirm a plan before the scheduled time. Common and expected.",
          whenNotToUse: "Don't use for plans that haven't been made yet. Use 'Do you want to...?' instead.",
          nativeFrequency: "Very common — used to confirm plans before they happen.",
          commonMistakes: [
            { mistake: "Using 'Are we still for...?'", correction: "Always use 'on for' — it's a fixed phrase" }
          ],
          pronunciation: "/?r wi st?l ?n f?r/",
          funnyExample: "A: Are we still on for tonight? B: Yes, unless the world ends. A: ...I'll prepare for both possibilities.",
          memoryTrick: "Think: 'on = active' + 'for = planned for' = 'is the plan still active?'",
          relatedExpressions: ["Still on?", "Still happening?", "Still good?"],
          collocations: ["still on for", "still on tonight", "still on tomorrow"],
          miniQuiz: [
            { question: "'Are we still on for coffee?' means:", options: ["Is our coffee plan still happening?", "Do you still drink coffee?", "Is coffee available?", "Do you want more coffee?"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-cancel-2",
          expression: "Something came up",
          chinese: "????",
          pinyin: "you shì fa sheng",
          meaning: "A vague, polite way to say an unexpected event prevented you from doing something.",
          whenToUse: "When cancelling plans without giving too much personal detail. Very common and socially acceptable.",
          whenNotToUse: "Don't overuse it — if you're always 'something coming up', people will notice.",
          nativeFrequency: "Extremely common — the standard way to explain a cancellation.",
          commonMistakes: [
            { mistake: "Giving too much or too little detail", correction: "Brief explanation + apology is the perfect balance" }
          ],
          pronunciation: "/'s?m??? ke?m ?p/",
          funnyExample: "A: Why are you late? B: Something came up. A: ...Like what? B: A really good parking spot.",
          memoryTrick: "Think: 'came up = appeared' = 'something appeared that blocked my plans'",
          relatedExpressions: ["Something unexpected happened", "An issue came up", "A problem arose"],
          collocations: ["something came up", "something came up at work", "something came up sorry"],
          miniQuiz: [
            { question: "'Something came up' means:", options: ["An unexpected event happened", "I made plans", "I'm happy", "I'm busy forever"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-cancel-3",
          expression: "Give me a heads up",
          chinese: "?????",
          pinyin: "tí qián gào sù wo",
          meaning: "Asking someone to notify you in advance about something.",
          whenToUse: "When asking someone to warn you before changing plans or doing something that affects you.",
          whenNotToUse: "Don't use as a command. Use it as a polite request: 'Could you give me a heads up?'",
          nativeFrequency: "Very common in both personal and professional contexts.",
          commonMistakes: [
            { mistake: "Using 'give me notice' in casual situations", correction: "'Give me a heads up' is more casual and natural" }
          ],
          pronunciation: "/g?v mi ? hedz ?p/",
          funnyExample: "A: I'll be 30 minutes late. B: Could you give me a heads up next time? A: ...I thought being late WAS the heads up.",
          memoryTrick: "Think: 'heads up = warning' = 'give me a warning in advance'",
          relatedExpressions: ["Let me know in advance", "Give me a warning", "Notify me beforehand"],
          collocations: ["give me a heads up", "give us a heads up", "heads up next time"],
          miniQuiz: [
            { question: "'Give me a heads up' means:", options: ["Notify me in advance", "Give me your hat", "Hit me", "Wake me up"], correct: 0 }
          ],
          register: "casual"
        }
      ]
    },
    nativeChunks: [
      { chunk: "Are we still on for", meaning: "??...????????", example: "Are we still on for coffee?", register: "neutral", context: "Confirming plans" },
      { chunk: "something came up", meaning: "????", example: "Something came up at work.", register: "neutral", context: "Explaining cancellation" },
      { chunk: "give me a heads up", meaning: "?????", example: "Give me a heads up next time.", register: "casual", context: "Requesting advance notice" },
      { chunk: "stay late", meaning: "??", example: "I have to stay late tonight.", register: "neutral", context: "Work schedule" },
      { chunk: "no worries", meaning: "???", example: "No worries! Things happen.", register: "casual", context: "Accepting cancellation" }
    ],
    conversation: [
      { speaker: "Lisa", line: "Hey, are we still on for coffee tomorrow at 3?", register: "neutral" },
      { speaker: "Tom", line: "Actually, something came up at work. I have to stay late for an unexpected meeting.", register: "neutral" },
      { speaker: "Lisa", line: "Oh no! That's frustrating. Do you want to reschedule?", register: "neutral" },
      { speaker: "Tom", line: "If you're okay with it, sure. Would Friday at the same time work for you?", register: "neutral" },
      { speaker: "Lisa", line: "Friday should work. But just to be safe — could we make it 4:30 instead? My schedule's a bit packed this week.", register: "neutral" },
      { speaker: "Tom", line: "4:30 works for me. Sorry about the last-minute change!", register: "neutral" },
      { speaker: "Lisa", line: "No worries! Things happen. Just give me a heads up next time, that's all.", register: "casual" },
      { speaker: "Tom", line: "Definitely. I promise I'll be on time Friday. Thanks for being understanding!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "Lisa", line: "?,????3????????????" },
      { speaker: "Tom", line: "??,?????????????????????" },
      { speaker: "Lisa", line: "??!?????????????" },
      { speaker: "Tom", line: "????????,???????????????" },
      { speaker: "Lisa", line: "??????????????——?????4:30???????????" },
      { speaker: "Tom", line: "4:30???????????!" },
      { speaker: "Lisa", line: "???!????????????????????" },
      { speaker: "Tom", line: "??????????????????!" }
    ],
    grammarInContext: [
      {
        title: "Conditional with 'Would' for Polite Suggestions",
        explanation: "? 'Would...?' ???????????",
        examples: [
          "Would Friday work for you?",
          "Would you mind if I rescheduled?",
          "Would you prefer 4:30 instead?"
        ]
      }
    ],
    pronunciation: [
      { tip: "'Would you' ? /w?d??/ in fast speech", example: "Would you mind...?" },
      { tip: "'Something came up' ? /'s?m??? ke?m ?p/", example: "Fast, natural speech" }
    ],
    shadowing: [
      { line: "Hey, are we still on for coffee tomorrow at 3?", emphasis: "still on for" },
      { line: "Actually, something came up at work.", emphasis: "something came up" },
      { line: "Would Friday at the same time work for you?", emphasis: "Would...work for you" },
      { line: "No worries! Things happen.", emphasis: "No worries" }
    ],
    speakingPractice: {
      instruction: "Practice cancelling and rescheduling plans. Use: 'something came up', 'Would...work for you?', and 'Give me a heads up'.",
      hints: [
        "Start by confirming the original plan",
        "Give a realistic reason for cancelling",
        "Suggest a specific alternative time",
        "Apologize and thank them"
      ],
      followUpQuestions: [
        "What came up?",
        "Did you reschedule?",
        "Was the other person understanding?",
        "Would you do anything differently?"
      ]
    },
    rolePlay: {
      scenario: "You need to cancel plans with a friend. Call or message them, explain why, suggest a new time, and apologize.",
      prompts: [
        "State that you need to cancel",
        "Give a brief reason",
        "Suggest an alternative time",
        "Apologize and thank them for understanding"
      ],
      partnerLines: [
        "Are we still on for coffee tomorrow at 3?",
        "Oh no! That's frustrating. Do you want to reschedule?",
        "Friday should work.",
        "No worries! Things happen."
      ]
    },
    homework: {
      task: "Real-World Reschedule",
      description: "Practice by cancelling or rescheduling a real plan this week using the expressions from this lesson. Write a brief reflection.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'Something came up' means:",
        questionZh: "'Something came up'???:",
        options: [
          { label: "A) An unexpected event happened", labelZh: "A) ???????", correct: true },
          { label: "B) I made plans", labelZh: "B) ??????", correct: false },
          { label: "C) I'm happy", labelZh: "C) ????", correct: false },
          { label: "D) I'm busy forever", labelZh: "D) ????", correct: false }
        ],
        explanation: "'Something came up' is a polite way to say an unexpected event prevented you from doing something.",
        explanationZh: "'Something came up'?????????????????????"
      },
      {
        id: "q2",
        question: "'Are we still on for coffee?' is asking:",
        questionZh: "'Are we still on for coffee?'???:",
        options: [
          { label: "A) Is our coffee plan still happening?", labelZh: "A) ???????????", correct: true },
          { label: "B) Do you still drink coffee?", labelZh: "B) ???????", correct: false },
          { label: "C) Is coffee available?", labelZh: "C) ??????", correct: false },
          { label: "D) Do you want more coffee?", labelZh: "D) ?????????", correct: false }
        ],
        explanation: "'Are we still on for...?' checks if a previously arranged plan is still on.",
        explanationZh: "'Are we still on for...?'??????????????"
      }
    ],
    review: [
      { key: "confirm", prompt: "How do you check if a plan is still happening?", answer: "Are we still on for...?" },
      { key: "cancel", prompt: "How do you politely explain a cancellation?", answer: "Something came up" },
      { key: "reschedule", prompt: "How do you ask to change the time?", answer: "Would...work for you?" }
    ],
    humorNotes: [
      {
        context: "When cancelling plans",
        punchline: "A: Something came up. B: Was it your couch? Because Netflix and chill called. A: ...Guilty.",
        explanation: "Self-deprecating humor about laziness is very common when cancelling plans."
      }
    ],
    usefulExpressions: [
      { expression: "Are we still on for...?", meaning: "??...????????", usage: "????????" },
      { expression: "Something came up", meaning: "????", usage: "????????????" },
      { expression: "Stay late", meaning: "?????", usage: "??????????" },
      { expression: "Give me a heads up", meaning: "?????", usage: "????????" },
      { expression: "No worries", meaning: "???", usage: "???????" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I cancel' instead of 'I have to cancel'",
        correction: "Use 'I have to cancel' or 'I need to reschedule'",
        explanation: "??? 'I cancel' ????"
      },
      {
        mistake: "Not apologizing for cancelling",
        correction: "Always apologize and explain briefly",
        explanation: "????????,??????????"
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
    emoji: "???????????",
    description: "Describing family members, relationships, and family events.",
    color: "from-red-400 to-pink-400",
    level: "A2",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Professional or formal introductions" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard family conversation" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Chatting with friends about family" }
    ],
    warmUp: {
      title: "Warm-Up: Family Vocabulary",
      content: "Family is a universal topic. In this lesson, you'll learn how to describe your family members, relationships, and family traditions in natural English.",
      contentZh: "??????????????,?????????????????????????????"
    },
    vocabulary: [
      {
        word: "sibling",
        phonetic: "/'s?bl??/",
        chinese: "????",
        pinyin: "xiong dì jie mèi",
        partOfSpeech: "noun",
        definitionEn: "A brother or sister.",
        definitionZh: "????????????",
        exampleEn: "I have three siblings.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "extended family",
        phonetic: "/?k'stend?d 'fæm?li/",
        chinese: "???",
        pinyin: "dà jia tíng",
        partOfSpeech: "noun",
        definitionEn: "All your relatives including aunts, uncles, and cousins.",
        definitionZh: "?????????????????????",
        exampleEn: "My extended family lives in different cities.",
        exampleZh: "?????????????",
        register: "neutral"
      },
      {
        word: "get along",
        phonetic: "/get ?'l??/",
        chinese: "??",
        pinyin: "xiang chu",
        partOfSpeech: "phrasal verb",
        definitionEn: "To have a friendly relationship with someone.",
        definitionZh: "???????????",
        exampleEn: "I get along well with my siblings.",
        exampleZh: "??????????????",
        register: "neutral"
      },
      {
        word: "reunion",
        phonetic: "/ri?'ju?nj?n/",
        chinese: "??",
        pinyin: "tuán jù",
        partOfSpeech: "noun",
        definitionEn: "A gathering of family members who haven't seen each other for a long time.",
        definitionZh: "???????????????",
        exampleEn: "We have a family reunion every year.",
        exampleZh: "?????????????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-family-1",
          expression: "I'm the youngest of...",
          chinese: "??...????",
          pinyin: "wo shì... zhong zuì xiao de",
          meaning: "Telling people your birth order in your family.",
          whenToUse: "When someone asks about your family size or siblings.",
          whenNotToUse: "Don't use if you're an only child. Use 'I'm an only child' instead.",
          nativeFrequency: "Very common in family conversations.",
          commonMistakes: [
            { mistake: "Using 'I'm the smaller'", correction: "Use 'youngest' for birth order, not 'smaller'" }
          ],
          pronunciation: "/a?m ð? 'j??g?st ?v/",
          funnyExample: "A: I'm the youngest of five. B: That explains everything. A: ...What's that supposed to mean?",
          memoryTrick: "Think: 'youngest = smallest age number' = 'born last'",
          relatedExpressions: ["I'm the oldest", "I'm the middle child", "I'm an only child"],
          collocations: ["youngest of", "oldest of", "middle of three"],
          miniQuiz: [
            { question: "'I'm the youngest of four' means:", options: ["I have 3 older siblings", "I have 4 younger siblings", "I'm 4 years old", "I have no siblings"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-family-2",
          expression: "Get along with",
          chinese: "?...??",
          pinyin: "yu... xiang chu",
          meaning: "Having a good or bad relationship with someone.",
          whenToUse: "When describing relationships with family, friends, or colleagues.",
          whenNotToUse: "Don't use for objects. Use 'get along with people' only.",
          nativeFrequency: "Very common in describing relationships.",
          commonMistakes: [
            { mistake: "Using 'get along to'", correction: "Always use 'get along with'" }
          ],
          pronunciation: "/get ?'l?? w?ð/",
          funnyExample: "A: Do you get along with your brother? B: We get along... when he's not eating my food.",
          memoryTrick: "Think: 'along = together' + 'with = together with' = 'be together well with'",
          relatedExpressions: ["I'm close to", "I don't get along with", "We're like best friends"],
          collocations: ["get along with", "get along well with", "don't get along with"],
          miniQuiz: [
            { question: "'I get along with my sister' means:", options: ["We have a good relationship", "I fight with her", "I don't know her", "She is my enemy"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-family-3",
          expression: "Count me in",
          chinese: "????",
          pinyin: "suàn wo yi gè",
          meaning: "Enthusiastically accepting an invitation.",
          whenToUse: "When you want to join an activity or event with excitement.",
          whenNotToUse: "Don't use for serious or formal commitments. Use 'I accept' in formal contexts.",
          nativeFrequency: "Very common in casual social situations.",
          commonMistakes: [
            { mistake: "Using 'I come' or 'I will come'", correction: "'Count me in' is more enthusiastic and casual" }
          ],
          pronunciation: "/ka?nt mi ?n/",
          funnyExample: "A: Who wants to go skydiving? B: Count me in! A: ...We're at a restaurant. B: Still count me in.",
          memoryTrick: "Think: 'count = include' + 'me in = me on the list' = 'include me'",
          relatedExpressions: ["I'm in", "Sign me up", "I'd love to", "Count me in!"],
          collocations: ["count me in", "count me in for", "count me in too"],
          miniQuiz: [
            { question: "'Count me in!' means:", options: ["I want to join!", "Count my money", "Exclude me", "I'm not sure"], correct: 0 }
          ],
          register: "casual"
        }
      ]
    },
    nativeChunks: [
      { chunk: "I'm the youngest of", meaning: "??...????", example: "I'm the youngest of four.", register: "neutral", context: "Birth order" },
      { chunk: "get along with", meaning: "?...??", example: "I get along with my siblings.", register: "neutral", context: "Relationships" },
      { chunk: "bicker like", meaning: "??", example: "We bicker like any siblings.", register: "casual", context: "Playful arguments" },
      { chunk: "count me in", meaning: "????", example: "Count me in!", register: "casual", context: "Accepting invitation" },
      { chunk: "to save my life", meaning: "??", example: "I can't sing to save my life.", register: "casual", context: "Self-deprecating humor" }
    ],
    conversation: [
      { speaker: "Mia", line: "I saw your family photo on Instagram — you have a big family!", register: "neutral" },
      { speaker: "James", line: "Yeah, I'm the youngest of four. Three older sisters and one brother.", register: "neutral" },
      { speaker: "Mia", line: "Wow, that's a lot! Do you get along with all of them?", register: "neutral" },
      { speaker: "James", line: "Mostly! We bicker like any siblings, but we're close. My parents always emphasized family dinners together.", register: "casual" },
      { speaker: "Mia", line: "That's so sweet. I have just one brother. We live in different cities now, so we don't see each other as much.", register: "neutral" },
      { speaker: "James", line: "That's tough. Do you have big family gatherings for holidays?", register: "neutral" },
      { speaker: "Mia", line: "Yes! We have a huge reunion every Chinese New Year. All my cousins, aunts, and uncles come together.", register: "neutral" },
      { speaker: "James", line: "That sounds amazing! I've always wanted to experience a big family reunion like that.", register: "neutral" },
      { speaker: "Mia", line: "You should come next year! There's always way too much food and loud karaoke.", register: "casual" },
      { speaker: "James", line: "Count me in! Though I might hide from the karaoke — I can't sing to save my life.", register: "casual" },
      { speaker: "Mia", line: "Haha, don't worry — nobody can. That's half the fun!", register: "casual" }
    ],
    chineseTranslation: [
      { speaker: "Mia", line: "??Instagram?????????——????!" },
      { speaker: "James", line: "??,??????????????????????" },
      { speaker: "Mia", line: "?,??!???????????" },
      { speaker: "James", line: "?????!??????????????,????????????????????" },
      { speaker: "Mia", line: "??????????????????????,????????" },
      { speaker: "James", line: "?????????????????????" },
      { speaker: "Mia", line: "??!?????????????????????????????????" },
      { speaker: "James", line: "???????!????????????????" },
      { speaker: "Mia", line: "??????!?????????????OK?" },
      { speaker: "James", line: "????!??????????OK——??????" },
      { speaker: "Mia", line: "??,???——????????????!" }
    ],
    grammarInContext: [
      {
        title: "Present Perfect for Life Experience",
        explanation: "??????????????",
        examples: [
          "I've always wanted to experience that.",
          "We've had reunions every year.",
          "I've never been to a Chinese New Year celebration."
        ]
      }
    ],
    pronunciation: [
      { tip: "'I'm the youngest' ? /a?m ð? 'j??g?st/", example: "Fast, natural speech" },
      { tip: "'Count me in' ? /ka?nt mi ?n/", example: "Stress 'count' and 'in'" }
    ],
    shadowing: [
      { line: "I'm the youngest of four.", emphasis: "youngest of" },
      { line: "Do you get along with all of them?", emphasis: "get along" },
      { line: "We have a huge reunion every Chinese New Year.", emphasis: "huge reunion" },
      { line: "Count me in!", emphasis: "Count me in" }
    ],
    speakingPractice: {
      instruction: "Describe your family to a partner. Use: 'I'm the youngest/oldest of...', 'I get along with...', 'family reunion', and 'count me in'.",
      hints: [
        "Start by saying how many siblings you have",
        "Describe your relationship with each",
        "Mention a recent family event",
        "Invite your partner to join next time"
      ],
      followUpQuestions: [
        "How many siblings do you have?",
        "Do you get along well?",
        "What's your favorite family tradition?",
        "Would you invite me to your reunion?"
      ]
    },
    rolePlay: {
      scenario: "You are talking to a new friend about your family. Describe your siblings, parents, and a recent family event.",
      prompts: [
        "Describe how many siblings you have",
        "Say how you get along with them",
        "Mention a recent family gathering",
        "Invite them to a future family event"
      ],
      partnerLines: [
        "I saw your family photo — you have a big family!",
        "Do you get along with all of them?",
        "That sounds amazing!",
        "Count me in!"
      ]
    },
    homework: {
      task: "Family Interview",
      description: "Interview a family member about their favorite family memory. Write down their story in English, or record it.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'I'm the youngest of four' means:",
        questionZh: "'I'm the youngest of four'???:",
        options: [
          { label: "A) I have 3 older siblings", labelZh: "A) ??3?????", correct: true },
          { label: "B) I have 4 younger siblings", labelZh: "B) ??4?????", correct: false },
          { label: "C) I'm 4 years old", labelZh: "C) ?4?", correct: false },
          { label: "D) I have no siblings", labelZh: "D) ???????", correct: false }
        ],
        explanation: "'Youngest of four' means you have three older siblings and you were born last.",
        explanationZh: "'Youngest of four'???????????,??????"
      },
      {
        id: "q2",
        question: "'Count me in!' means:",
        questionZh: "'Count me in!'???:",
        options: [
          { label: "A) I want to join!", labelZh: "A) ????!", correct: true },
          { label: "B) Count my money", labelZh: "B) ????", correct: false },
          { label: "C) Exclude me", labelZh: "C) ????", correct: false },
          { label: "D) I'm not sure", labelZh: "D) ????", correct: false }
        ],
        explanation: "'Count me in!' is an enthusiastic way to accept an invitation.",
        explanationZh: "'Count me in!'???????????"
      }
    ],
    review: [
      { key: "siblings", prompt: "How do you say you have no brothers or sisters?", answer: "I'm an only child" },
      { key: "relationship", prompt: "How do you describe a good relationship with family?", answer: "I get along with..." },
      { key: "join", prompt: "How do you enthusiastically accept an invitation?", answer: "Count me in!" }
    ],
    humorNotes: [
      {
        context: "When talking about sibling rivalry",
        punchline: "A: Do you get along with your siblings? B: We get along... when I'm not stealing their food. A: ...That's every sibling ever.",
        explanation: "Self-deprecating humor about sibling rivalry over food is very common."
      }
    ],
    usefulExpressions: [
      { expression: "I'm the youngest of...", meaning: "??...????", usage: "?????????????" },
      { expression: "Get along", meaning: "??", usage: "??????" },
      { expression: "Bicker like any siblings", meaning: "???????????", usage: "?????????????" },
      { expression: "Family reunion", meaning: "????", usage: "????????" },
      { expression: "Count me in", meaning: "????", usage: "???????" }
    ],
    commonMistakes: [
      {
        mistake: "Using 'fight' for all sibling disagreements",
        correction: "Use 'bicker' for minor, playful arguments",
        explanation: "'Bicker' ??????????????"
      },
      {
        mistake: "Saying 'I have no brother' instead of 'I don't have a brother'",
        correction: "Use 'I don't have any...' or 'I have no...'",
        explanation: "?????? 'don't have any' ????"
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
    emoji: "???",
    description: "Fitness routines, gym equipment, and workout conversations.",
    color: "from-green-400 to-lime-400",
    level: "B1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Consulting with a trainer" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard gym interaction" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Chatting with gym friends" }
    ],
    warmUp: {
      title: "Warm-Up: Gym Culture",
      content: "Gyms have their own culture and vocabulary. In this lesson, you'll learn how to ask for help, understand equipment names, and talk about fitness naturally.",
      contentZh: "?????????????????,?????????????????,??????????"
    },
    vocabulary: [
      {
        word: "workout",
        phonetic: "/'w??rka?t/",
        chinese: "??",
        pinyin: "duàn liàn",
        partOfSpeech: "noun",
        definitionEn: "A session of physical exercise.",
        definitionZh: "??????????",
        exampleEn: "I do a 30-minute workout every morning.",
        exampleZh: "??????30??????",
        register: "neutral"
      },
      {
        word: "treadmill",
        phonetic: "/'tredm?l/",
        chinese: "???",
        pinyin: "pao bù ji",
        partOfSpeech: "noun",
        definitionEn: "A machine for running or walking while staying in one place.",
        definitionZh: "??????????????",
        exampleEn: "I run on the treadmill for 20 minutes.",
        exampleZh: "???????20???",
        register: "neutral"
      },
      {
        word: "personal trainer",
        phonetic: "/'p??rs?nl tre?n?r/",
        chinese: "????",
        pinyin: "si rén jiào liàn",
        partOfSpeech: "noun",
        definitionEn: "A fitness professional who works one-on-one with clients.",
        definitionZh: "??????????????",
        exampleEn: "I booked a session with a personal trainer.",
        exampleZh: "??????????????",
        register: "neutral"
      },
      {
        word: "muscle",
        phonetic: "/'m?sl/",
        chinese: "??",
        pinyin: "ji ròu",
        partOfSpeech: "noun",
        definitionEn: "Tissue in the body that contracts to produce movement.",
        definitionZh: "??????????????",
        exampleEn: "This exercise targets your core muscles.",
        exampleZh: "?????????????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-gym-1",
          expression: "Let me show you around",
          chinese: "???????",
          pinyin: "wo dài nín zhuan guan yi xià",
          meaning: "Offering to give someone a tour of a place.",
          whenToUse: "When someone is new to a gym, office, or venue and you want to help them.",
          whenNotToUse: "Don't use if you don't know the place well yourself.",
          nativeFrequency: "Very common when welcoming new people anywhere.",
          commonMistakes: [
            { mistake: "Using 'show you everything' instead", correction: "'Show you around' means a quick tour, not everything" }
          ],
          pronunciation: "/let mi ?o? ju ?'ra?nd/",
          funnyExample: "A: Let me show you around. B: Wow, this gym is huge! A: ...I meant the equipment area. B: Oh.",
          memoryTrick: "Think: 'show = point out' + 'around = all around' = 'point out everything'",
          relatedExpressions: ["I'll give you a tour", "Let me introduce you", "Follow me"],
          collocations: ["show you around", "show me around", "let me show you"],
          miniQuiz: [
            { question: "'Let me show you around' means:", options: ["Give you a tour", "Show you everything forever", "Point at you", "Walk around randomly"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-gym-2",
          expression: "Book in advance",
          chinese: "????",
          pinyin: "tí qián yù dìng",
          meaning: "Reserving something before you arrive.",
          whenToUse: "For popular classes, appointments, or events that fill up quickly.",
          whenNotToUse: "Don't use for things that don't require reservations.",
          nativeFrequency: "Very common for classes, restaurants, and appointments.",
          commonMistakes: [
            { mistake: "Using 'book before' instead", correction: "Use 'book in advance' — 'in advance' is the standard phrase" }
          ],
          pronunciation: "/b?k ?n ?d'væns/",
          funnyExample: "A: Do I need to book in advance? B: Yes, or you'll be doing yoga in the hallway. A: ...I'll book.",
          memoryTrick: "Think: 'advance = before' = 'book before you go'",
          relatedExpressions: ["Reserve ahead", "Make a reservation", "Book ahead"],
          collocations: ["book in advance", "book ahead", "reserve in advance"],
          miniQuiz: [
            { question: "'Book in advance' means:", options: ["Reserve before arriving", "Cancel after arriving", "Pay extra", "Bring a friend"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-gym-3",
          expression: "Consistency beats intensity",
          chinese: "????????",
          pinyin: "jian chí bi qiáng dù gèng zhòng yào",
          meaning: "Regular, moderate effort is better than occasional extreme effort.",
          whenToUse: "When giving fitness advice or encouraging someone to keep going.",
          whenNotToUse: "Don't use as a literal rule for everything — it's specific to fitness and habits.",
          nativeFrequency: "Common among trainers and fitness enthusiasts.",
          commonMistakes: [
            { mistake: "Taking it as a strict rule", correction: "It's motivational advice, not a law — intensity has its place too" }
          ],
          pronunciation: "/k?n's?st?nsi bi?ts ?n'tens?ti/",
          funnyExample: "A: I only work out once a month, but it's INTENSE. B: Consistency beats intensity. A: ...My monthly workout is 24 hours long.",
          memoryTrick: "Think: 'consistency = regular' + 'beats = wins against' + 'intensity = extreme' = 'regular wins over extreme'",
          relatedExpressions: ["Slow and steady wins the race", "Rome wasn't built in a day", "Progress over perfection"],
          collocations: ["consistency beats intensity", "consistency is key", "beats intensity"],
          miniQuiz: [
            { question: "'Consistency beats intensity' means:", options: ["Regular effort is better than occasional extreme effort", "Intensity is always better", "You should be intense always", "Gyms are for intense people"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "Let me show you around", meaning: "???????", example: "Let me show you around.", register: "neutral", context: "Welcoming new people" },
      { chunk: "book in advance", meaning: "????", example: "You need to book in advance.", register: "neutral", context: "Class reservation" },
      { chunk: "consistency beats intensity", meaning: "????????", example: "Consistency beats intensity.", register: "neutral", context: "Fitness advice" },
      { chunk: "custom plan", meaning: "????", example: "We can design a custom plan.", register: "neutral", context: "Personal training" },
      { chunk: "warm up", meaning: "??", example: "Always warm up first.", register: "neutral", context: "Exercise preparation" }
    ],
    conversation: [
      { speaker: "Trainer", line: "Hi there! Are you new here? Let me show you around if you need.", register: "neutral" },
      { speaker: "Ryan", line: "Thanks! Yeah, this is my first time. I'm mainly interested in the cardio area.", register: "neutral" },
      { speaker: "Trainer", line: "The treadmills and ellipticals are right over there. Most people start with 20–30 minutes of cardio.", register: "neutral" },
      { speaker: "Ryan", line: "Got it. Do I need to warm up first?", register: "neutral" },
      { speaker: "Trainer", line: "Absolutely! Five minutes on the treadmill at a slow pace, then some stretching. Prevents injury.", register: "neutral" },
      { speaker: "Ryan", line: "Makes sense. Are there any classes I could join?", register: "neutral" },
      { speaker: "Trainer", line: "We have yoga at 9, spin class at 10:30, and HIIT at 5. The spin class is super popular — you'd need to book in advance.", register: "neutral" },
      { speaker: "Ryan", line: "I'll definitely try spin class. How often do you recommend working out?", register: "neutral" },
      { speaker: "Trainer", line: "For beginners, three times a week is great. Consistency beats intensity, especially at the start.", register: "neutral" },
      { speaker: "Ryan", line: "That's good to know. One last thing — do you have trainers available for one-on-one sessions?", register: "neutral" },
      { speaker: "Trainer", line: "Yes! I'm available tomorrow at 2 PM if you're free. We can design a custom plan based on your goals.", register: "neutral" },
      { speaker: "Ryan", line: "Perfect. Let's do it!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "Trainer", line: "?!???????????,????????" },
      { speaker: "Ryan", line: "??!??,???????????????????" },
      { speaker: "Trainer", line: "?????????????????20-30??????????" },
      { speaker: "Ryan", line: "????????????" },
      { speaker: "Trainer", line: "??!????????5??,?????????????" },
      { speaker: "Ryan", line: "????????????????" },
      { speaker: "Trainer", line: "???9?????,10:30????,??5??????????????????——????????" },
      { speaker: "Ryan", line: "????????????????????" },
      { speaker: "Trainer", line: "??????,????????????????,????????" },
      { speaker: "Ryan", line: "??????????——?????????????" },
      { speaker: "Trainer", line: "??!?????2???????????????????????" },
      { speaker: "Ryan", line: "?????????!" }
    ],
    grammarInContext: [
      {
        title: "Modal Verbs for Advice and Necessity",
        explanation: "? 'need to', 'should', 'would' ?????????",
        examples: [
          "You need to warm up first.",
          "You should start with 20 minutes.",
          "I'd recommend booking in advance."
        ]
      }
    ],
    pronunciation: [
      { tip: "'Would need to' ? /w?d ni?d t?/", example: "You'd need to book in advance." },
      { tip: "'Let me show you' ? /let mi ?o? ju/", example: "Fast, natural speech" }
    ],
    shadowing: [
      { line: "Hi there! Are you new here? Let me show you around.", emphasis: "show you around" },
      { line: "The treadmills and ellipticals are right over there.", emphasis: "right over there" },
      { line: "Five minutes on the treadmill at a slow pace, then some stretching.", emphasis: "slow pace" },
      { line: "Consistency beats intensity, especially at the start.", emphasis: "Consistency beats intensity" }
    ],
    speakingPractice: {
      instruction: "Talk about your fitness routine or goals. Use: 'workout', 'warm up', 'book in advance', and 'consistency beats intensity'.",
      hints: [
        "Start with your current routine or goals",
        "Mention what equipment you use",
        "Say how often you exercise",
        "Give one piece of advice to a friend"
      ],
      followUpQuestions: [
        "What's your favorite workout?",
        "Do you go to a gym or exercise at home?",
        "How often do you work out?",
        "What's your fitness goal?"
      ]
    },
    rolePlay: {
      scenario: "You are at a gym for the first time. Ask a trainer about equipment, classes, and training options. Get advice on your fitness goals.",
      prompts: [
        "Ask for a tour of the gym",
        "Ask about cardio and strength equipment",
        "Ask about class schedules",
        "Inquire about personal training options"
      ],
      partnerLines: [
        "Hi there! Are you new here? Let me show you around.",
        "The treadmills and ellipticals are right over there.",
        "We have yoga at 9, spin class at 10:30, and HIIT at 5.",
        "Yes! I'm available tomorrow at 2 PM if you're free."
      ]
    },
    homework: {
      task: "Gym Vocabulary Hunt",
      description: "Visit a gym or watch a gym tour video. Write down 10 fitness-related words or phrases you hear. Practice using them in sentences.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'Book in advance' means:",
        questionZh: "'Book in advance'???:",
        options: [
          { label: "A) Reserve before arriving", labelZh: "A) ????", correct: true },
          { label: "B) Cancel after arriving", labelZh: "B) ?????", correct: false },
          { label: "C) Pay extra", labelZh: "C) ????", correct: false },
          { label: "D) Bring a friend", labelZh: "D) ????", correct: false }
        ],
        explanation: "'Book in advance' means to reserve something before you go.",
        explanationZh: "'Book in advance'???????????"
      },
      {
        id: "q2",
        question: "'Consistency beats intensity' means:",
        questionZh: "'Consistency beats intensity'???:",
        options: [
          { label: "A) Regular effort is better than occasional extreme effort", labelZh: "A) ???????????????", correct: true },
          { label: "B) Intensity is always better", labelZh: "B) ??????", correct: false },
          { label: "C) You should be intense always", labelZh: "C) ????????", correct: false },
          { label: "D) Gyms are for intense people", labelZh: "D) ????????????", correct: false }
        ],
        explanation: "'Consistency beats intensity' means regular, moderate effort is more effective than occasional extreme effort.",
        explanationZh: "'Consistency beats intensity'???????????????????????"
      }
    ],
    review: [
      { key: "equipment", prompt: "What equipment might you find in a gym?", answer: "Treadmill, elliptical, weights, etc." },
      { key: "booking", prompt: "How do you reserve a popular gym class?", answer: "Book in advance" },
      { key: "advice", prompt: "What's the trainer's advice for beginners?", answer: "Consistency beats intensity" }
    ],
    humorNotes: [
      {
        context: "When someone says they work out intensely once a month",
        punchline: "A: I had a 3-hour workout yesterday! B: Consistency beats intensity. A: It was a 3-hour movie about working out.",
        explanation: "Self-deprecating humor about not actually working out is very common."
      }
    ],
    usefulExpressions: [
      { expression: "Show you around", meaning: "????", usage: "??????????" },
      { expression: "Prevents injury", meaning: "????", usage: "?????????" },
      { expression: "Book in advance", meaning: "????", usage: "????????" },
      { expression: "Consistency beats intensity", meaning: "????????", usage: "??????????" },
      { expression: "Let's do it", meaning: "?????", usage: "???????" }
    ],
    commonMistakes: [
      {
        mistake: "Saying 'I want lose weight' instead of 'I want to lose weight'",
        correction: "Use 'want to + verb' or 'I'm interested in + -ing'",
        explanation: "'Want' ????? 'to'?"
      },
      {
        mistake: "Using 'gym' as a verb",
        correction: "Use 'work out' or 'exercise' as verbs",
        explanation: "'Gym' ???,??? 'work out'?"
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
    emoji: "??",
    description: "Office conversations, building rapport, and professional small talk.",
    color: "from-slate-400 to-gray-400",
    level: "B1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Client or executive interactions" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard workplace conversation" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Team lunch or break room chat" }
    ],
    warmUp: {
      title: "Warm-Up: Office Culture",
      content: "Small talk at work builds relationships and makes the workplace more enjoyable. In this lesson, you'll learn how to chat naturally with coworkers while staying professional.",
      contentZh: "??????????????,?????????????,???????????????????????"
    },
    vocabulary: [
      {
        word: "rapport",
        phonetic: "/ræ'p??r/",
        chinese: "????",
        pinyin: "róng qià guan xi",
        partOfSpeech: "noun",
        definitionEn: "A friendly, understanding relationship with someone.",
        definitionZh: "??????????????",
        exampleEn: "She built good rapport with her team.",
        exampleZh: "?????????????????",
        register: "neutral"
      },
      {
        word: "water cooler",
        phonetic: "/'w??t?r ku?l?r/",
        chinese: "????",
        pinyin: "yin shui ji páng",
        partOfSpeech: "noun",
        definitionEn: "The area near the office water cooler where people chat informally.",
        definitionZh: "???????????????????",
        exampleEn: "We had water cooler talk about the new project.",
        exampleZh: "?????????????",
        register: "neutral"
      },
      {
        word: "catch up",
        phonetic: "/kæt? ?p/",
        chinese: "??",
        pinyin: "xù jiù",
        partOfSpeech: "phrasal verb",
        definitionEn: "To talk to someone you haven't seen for a while and find out what they've been doing.",
        definitionZh: "???????????,???????????",
        exampleEn: "Let's catch up at lunch.",
        exampleZh: "?????????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-coworker-1",
          expression: "How was your weekend?",
          chinese: "?????????",
          pinyin: "ni zhou mò guò de zen me yàng?",
          meaning: "The most common Monday morning greeting to ask about someone's weekend.",
          whenToUse: "Monday mornings or after a break when asking about someone's time off.",
          whenNotToUse: "Don't ask on Friday afternoon — people are thinking about the weekend ahead, not the past one.",
          nativeFrequency: "Extremely common in offices every Monday.",
          commonMistakes: [
            { mistake: "Asking too many personal questions", correction: "Keep it light: weekend, weather, or a shared experience" }
          ],
          pronunciation: "/ha? w?z j??r 'wi?kend/",
          funnyExample: "A: How was your weekend? B: Long. A: ...I meant 'good', 'bad', 'fun'? B: All three.",
          memoryTrick: "Think: 'How = what was it like' + 'weekend = Saturday-Sunday' = 'How were your days off?'",
          relatedExpressions: ["How was your Friday?", "Good weekend?", "Weekend treat?"],
          collocations: ["how was your weekend", "how was your day", "how was your night"],
          miniQuiz: [
            { question: "'How was your weekend?' is usually asked:", options: ["On Monday mornings", "On Friday evenings", "On weekends", "Never"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-coworker-2",
          expression: "Catch up on",
          chinese: "??",
          pinyin: "bu shàng",
          meaning: "To do something you missed or didn't have time for earlier.",
          whenToUse: "When talking about sleep, work, emails, or shows you missed.",
          whenNotToUse: "Don't use for catching up with a person — use 'catch up with' for people.",
          nativeFrequency: "Very common in both personal and professional contexts.",
          commonMistakes: [
            { mistake: "Using 'catch up with sleep' instead of 'catch up on sleep'", correction: "Use 'catch up on' for activities/things, 'catch up with' for people" }
          ],
          pronunciation: "/kæt? ?p ?n/",
          funnyExample: "A: Did you catch up on sleep? B: I caught up on three seasons of Netflix instead. A: ...That's not what I meant, but fair.",
          memoryTrick: "Think: 'catch = get' + 'up = back to normal' + 'on = about' = 'get back to normal about something'",
          relatedExpressions: ["Catch up with", "Get back to", "Make up for"],
          collocations: ["catch up on sleep", "catch up on work", "catch up on emails"],
          miniQuiz: [
            { question: "'I need to catch up on sleep' means:", options: ["I need to get extra sleep", "I need to talk to sleep", "I need to wake up", "I need to go to bed earlier"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-coworker-3",
          expression: "Don't give me any spoilers",
          chinese: "?????",
          pinyin: "bié gei wo jù tòu",
          meaning: "Asking someone not to tell you the ending or important plot details of a movie, show, or book.",
          whenToUse: "When you haven't seen/read something yet and want to experience it fresh.",
          whenNotToUse: "Don't use if you've already seen/read it — then you can discuss it freely.",
          nativeFrequency: "Very common among friends, family, and coworkers.",
          commonMistakes: [
            { mistake: "Using it after you already know the ending", correction: "Only use it before you've experienced it" }
          ],
          pronunciation: "/do?nt g?v mi '?ni 'sp??l?rz/",
          funnyExample: "A: Don't give me any spoilers! B: Too late — I told everyone in the office. A: ...I hate you.",
          memoryTrick: "Think: 'spoiler = ruins the surprise' = 'don't ruin it for me'",
          relatedExpressions: ["No spoilers!", "Don't tell me the ending", "I haven't seen it yet!"],
          collocations: ["give spoilers", "no spoilers", "spoiler alert"],
          miniQuiz: [
            { question: "'Don't give me any spoilers' means:", options: ["Don't tell me the ending/plot", "Give me details", "Tell me everything", "I love spoilers"], correct: 0 }
          ],
          register: "casual"
        }
      ]
    },
    nativeChunks: [
      { chunk: "How was your weekend?", meaning: "?????????", example: "How was your weekend?", register: "neutral", context: "Monday morning greeting" },
      { chunk: "catch up on", meaning: "??", example: "I need to catch up on some sleep.", register: "neutral", context: "Catching up on missed things" },
      { chunk: "don't give me any spoilers", meaning: "?????", example: "Don't give me any spoilers!", register: "casual", context: "Protecting plot surprises" },
      { chunk: "no promises", meaning: "???", example: "No promises!", register: "casual", context: "Playful refusal" },
      { chunk: "let me know if you need anything", meaning: "????????????", example: "Let me know if you need anything.", register: "neutral", context: "Offering help" }
    ],
    conversation: [
      { speaker: "Emily", line: "Morning! How was your weekend?", register: "neutral" },
      { speaker: "David", line: "Pretty good! I went camping with some friends. You?", register: "neutral" },
      { speaker: "Emily", line: "Nice! I stayed in town. Watched a couple of movies and caught up on some sleep.", register: "neutral" },
      { speaker: "David", line: "Sounds relaxing. Did you see the new Marvel movie? I heard it's amazing.", register: "neutral" },
      { speaker: "Emily", line: "Not yet! I'm planning to go this week. Don't give me any spoilers!", register: "casual" },
      { speaker: "David", line: "No promises! Heard the ending is mind-blowing. Oh, by the way — did you finish the quarterly report?", register: "neutral" },
      { speaker: "Emily", line: "Almost. I'm just waiting for the sales data from the regional team. Should have it by Wednesday.", register: "neutral" },
      { speaker: "David", line: "Cool. Let me know if you need any help — I have some experience with that data analysis.", register: "neutral" },
      { speaker: "Emily", line: "Thanks, I appreciate that! Oh, the meeting's starting. Let's catch up more at lunch?", register: "neutral" },
      { speaker: "David", line: "Sounds good! See you at 12.", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "Emily", line: "???!?????????" },
      { speaker: "David", line: "???!??????????????" },
      { speaker: "Emily", line: "??!????????????,?????" },
      { speaker: "David", line: "????????????????????????" },
      { speaker: "Emily", line: "???!?????????????!" },
      { speaker: "David", line: "???!??????????,??——??????????" },
      { speaker: "Emily", line: "????????????????????????????" },
      { speaker: "David", line: "??????????????——????????????" },
      { speaker: "Emily", line: "??,?????!?,??????????????" },
      { speaker: "David", line: "?????!12???" }
    ],
    grammarInContext: [
      {
        title: "Past Simple for Weekend Activities",
        explanation: "????????????????",
        examples: [
          "I went camping with some friends.",
          "I watched a couple of movies.",
          "Did you see the new Marvel movie?"
        ]
      }
    ],
    pronunciation: [
      { tip: "'Did you' ? /d?d??/", example: "Did you finish the report?" },
      { tip: "'No promises' ? /no? 'pr??m?s?z/", example: "Fast, natural speech" }
    ],
    shadowing: [
      { line: "Morning! How was your weekend?", emphasis: "How was your weekend" },
      { line: "Pretty good! I went camping with some friends.", emphasis: "went camping" },
      { line: "Don't give me any spoilers!", emphasis: "Don't give me any spoilers" },
      { line: "Let me know if you need any help.", emphasis: "Let me know" }
    ],
    speakingPractice: {
      instruction: "Practice small talk with a coworker. Use: 'How was your...?', 'catch up on', and 'Let me know if...'. Keep it light and professional.",
      hints: [
        "Start with 'How was your weekend?'",
        "Share one activity you did",
        "Mention one work-related item",
        "End with an invitation to lunch or coffee"
      ],
      followUpQuestions: [
        "How was the conversation?",
        "Did you keep it professional?",
        "What topics did you cover?",
        "Would you feel comfortable chatting more?"
      ]
    },
    rolePlay: {
      scenario: "You meet a coworker at the water cooler. Make small talk about their weekend, mention a project, and suggest grabbing lunch together.",
      prompts: [
        "Greet them and ask about their weekend",
        "Share something about your own weekend",
        "Briefly mention a work topic",
        "Suggest eating lunch together"
      ],
      partnerLines: [
        "Morning! How was your weekend?",
        "Pretty good! I went camping with some friends.",
        "By the way — did you finish the quarterly report?",
        "Let's catch up more at lunch?"
      ]
    },
    homework: {
      task: "Real Office Small Talk",
      description: "Have a 2-minute small talk conversation with a coworker this week. Use at least 3 expressions from this lesson. Write a brief reflection.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'How was your weekend?' is usually asked:",
        questionZh: "'How was your weekend?'????????:",
        options: [
          { label: "A) On Monday mornings", labelZh: "A) ????", correct: true },
          { label: "B) On Friday evenings", labelZh: "B) ????", correct: false },
          { label: "C) On weekends", labelZh: "C) ??", correct: false },
          { label: "D) Never", labelZh: "D) ??", correct: false }
        ],
        explanation: "'How was your weekend?' is a standard Monday morning office greeting.",
        explanationZh: "'How was your weekend?'???????????????"
      },
      {
        id: "q2",
        question: "'Catch up on sleep' means:",
        questionZh: "'Catch up on sleep'???:",
        options: [
          { label: "A) Get extra sleep you missed", labelZh: "A) ????????", correct: true },
          { label: "B) Talk to sleep", labelZh: "B) ?????", correct: false },
          { label: "C) Wake up early", labelZh: "C) ??", correct: false },
          { label: "D) Go to bed earlier", labelZh: "D) ????", correct: false }
        ],
        explanation: "'Catch up on sleep' means to get the sleep you didn't get earlier.",
        explanationZh: "'Catch up on sleep'?????????????"
      }
    ],
    review: [
      { key: "greeting", prompt: "What's the most common Monday greeting?", answer: "How was your weekend?" },
      { key: "sleep", prompt: "How do you say you need extra sleep?", answer: "I need to catch up on sleep" },
      { key: "spoiler", prompt: "How do you ask someone not to tell you a movie ending?", answer: "Don't give me any spoilers!" }
    ],
    humorNotes: [
      {
        context: "When someone asks about your weekend and you did nothing",
        punchline: "A: How was your weekend? B: So productive! A: Oh? What did you do? B: I decided not to be sad about doing nothing.",
        explanation: "Self-deprecating humor about lazy weekends is very common in offices."
      }
    ],
    usefulExpressions: [
      { expression: "How was your weekend?", meaning: "?????????", usage: "??????????" },
      { expression: "Catch up on", meaning: "??", usage: "?????????????" },
      { expression: "Don't give me any spoilers", meaning: "?????", usage: "????????/?????" },
      { expression: "No promises", meaning: "???", usage: "????????" },
      { expression: "Let me know if you need anything", meaning: "????????????", usage: "??????" }
    ],
    commonMistakes: [
      {
        mistake: "Asking personal questions too early",
        correction: "Start with safe topics: weekend, movies, weather",
        explanation: "????????????????"
      },
      {
        mistake: "Being too formal or too casual",
        correction: "Use neutral, friendly tone",
        explanation: "????????????????"
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
    emoji: "??",
    description: "Basic greetings, introductions, and polite farewells for everyday situations.",
    color: "from-green-400 to-emerald-400",
    level: "A1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Business or first-time meetings" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard everyday greetings" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Friends and family" }
    ],
    warmUp: {
      title: "Warm-Up: The Power of Greetings",
      content: "Greetings are the foundation of every conversation. In this lesson, you'll master the essential English greetings for different times of day and situations.",
      contentZh: "???????????????,????????????????????"
    },
    vocabulary: [
      {
        word: "Hello",
        phonetic: "/h?'lo?/",
        chinese: "??",
        pinyin: "ni hao",
        partOfSpeech: "interjection",
        definitionEn: "A standard greeting used any time of day.",
        definitionZh: "???????????????????",
        exampleEn: "Hello, how are you?",
        exampleZh: "??,????",
        register: "neutral"
      },
      {
        word: "Good morning",
        phonetic: "/g?d 'm??rn??/",
        chinese: "???",
        pinyin: "zao shàng hao",
        partOfSpeech: "phrase",
        definitionEn: "A greeting used from sunrise until noon.",
        definitionZh: "?????????????",
        exampleEn: "Good morning, teacher!",
        exampleZh: "???,??!",
        register: "neutral"
      },
      {
        word: "How are you?",
        phonetic: "/ha? ??r ju?/",
        chinese: "????",
        pinyin: "ni hao ma?",
        partOfSpeech: "question",
        definitionEn: "The most common way to ask someone how they are doing.",
        definitionZh: "?????????????",
        exampleEn: "Hi, how are you?",
        exampleZh: "?,????",
        register: "neutral"
      },
      {
        word: "I'm fine, thanks",
        phonetic: "/a?m fa?n ?æ?ks/",
        chinese: "???,??",
        pinyin: "wo hen hao, xiè xie",
        partOfSpeech: "phrase",
        definitionEn: "The standard response to 'How are you?'",
        definitionZh: "?'????'??????",
        exampleEn: "I'm fine, thanks. And you?",
        exampleZh: "???,??????",
        register: "neutral"
      },
      {
        word: "Nice to meet you",
        phonetic: "/na?s tu mi?t ju?/",
        chinese: "??????",
        pinyin: "hen gao xìng rèn shi ni",
        partOfSpeech: "phrase",
        definitionEn: "Said when meeting someone for the first time.",
        definitionZh: "????????????",
        exampleEn: "Nice to meet you. I'm Anna.",
        exampleZh: "????????????",
        register: "neutral"
      },
      {
        word: "Bye",
        phonetic: "/ba?/",
        chinese: "??",
        pinyin: "zài jiàn",
        partOfSpeech: "interjection",
        definitionEn: "A casual way to say goodbye.",
        definitionZh: "?????????",
        exampleEn: "Bye! Have a great day.",
        exampleZh: "??!???????",
        register: "casual"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-greeting-1",
          expression: "Good morning",
          chinese: "???",
          pinyin: "zao shàng hao",
          meaning: "A standard greeting used from sunrise until noon.",
          whenToUse: "When greeting someone before noon. The most common morning greeting.",
          whenNotToUse: "Don't use after noon. Use 'Good afternoon' from 12 PM to around 5 PM, and 'Good evening' after that.",
          nativeFrequency: "Extremely common — used daily in the morning.",
          commonMistakes: [
            { mistake: "Using 'Good morning' after noon", correction: "Switch to 'Good afternoon' after 12 PM" }
          ],
          pronunciation: "/g?d 'm??rn??/",
          funnyExample: "A: Good morning! B: It's 3 PM. A: ...My internal clock is confused.",
          memoryTrick: "Think: 'morning = before noon' = 'only use before 12 PM'",
          relatedExpressions: ["Good afternoon", "Good evening", "Morning!"],
          collocations: ["good morning", "good morning everyone", "good morning sir"],
          miniQuiz: [
            { question: "When should you say 'Good morning'?", options: ["Before noon", "After noon", "At night", "Anytime"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-greeting-2",
          expression: "How are you?",
          chinese: "????",
          pinyin: "ni hao ma?",
          meaning: "The most common greeting to ask about someone's wellbeing.",
          whenToUse: "When greeting someone you know. Very common everywhere.",
          whenNotToUse: "Don't use with strangers in formal settings. Use 'Hello' or 'Good morning' instead.",
          nativeFrequency: "Extremely common — probably the most used phrase in English.",
          commonMistakes: [
            { mistake: "Asking 'How do you do?' as a greeting", correction: "'How do you do?' is formal and old-fashioned. Use 'How are you?' instead." }
          ],
          pronunciation: "/ha? ??r ju?/",
          funnyExample: "A: How are you? B: Fine. A: ...That's not how the conversation works. B: Then how does it work?",
          memoryTrick: "Think: 'How = what state' + 'are you = are you doing' = 'what state are you in?'",
          relatedExpressions: ["How's it going?", "How are you doing?", "How do you do?"],
          collocations: ["how are you", "how are you doing", "how are you today"],
          miniQuiz: [
            { question: "'How are you?' is:", options: ["A common greeting", "A medical question", "An insult", "A farewell"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-greeting-3",
          expression: "Nice to meet you",
          chinese: "??????",
          pinyin: "hen gao xìng rèn shi ni",
          meaning: "Said when meeting someone for the first time.",
          whenToUse: "When being introduced to someone new. Very important in English culture.",
          whenNotToUse: "Don't use with people you already know. Use 'Good to see you again' instead.",
          nativeFrequency: "Very common — the standard phrase for first meetings.",
          commonMistakes: [
            { mistake: "Saying 'Nice to meet you too' before they say it", correction: "Wait for them to say 'Nice to meet you' first, then add 'too'" }
          ],
          pronunciation: "/na?s tu mi?t ju?/",
          funnyExample: "A: Nice to meet you! B: Nice to meet you too! A: ...We've been friends for 5 years. B: I know, I just like saying it.",
          memoryTrick: "Think: 'nice = good' + 'to meet = to meet' + 'you = you' = 'good to meet you'",
          relatedExpressions: ["Pleased to meet you", "Great to meet you", "Nice to meet you too"],
          collocations: ["nice to meet you", "pleased to meet you", "nice to meet you too"],
          miniQuiz: [
            { question: "'Nice to meet you' is used when:", options: ["Meeting someone for the first time", "Leaving a place", "Saying goodbye", "Ordering food"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "Good morning", meaning: "???", example: "Good morning, teacher!", register: "neutral", context: "Morning greeting" },
      { chunk: "How are you?", meaning: "????", example: "Hi, how are you?", register: "neutral", context: "Standard greeting" },
      { chunk: "I'm fine, thanks", meaning: "???,??", example: "I'm fine, thanks. And you?", register: "neutral", context: "Responding to greeting" },
      { chunk: "Nice to meet you", meaning: "??????", example: "Nice to meet you!", register: "neutral", context: "First introduction" },
      { chunk: "Have a great day", meaning: "??????", example: "Bye! Have a great day.", register: "neutral", context: "Farewell" }
    ],
    conversation: [
      { speaker: "Anna", line: "Hi, good morning!", register: "neutral" },
      { speaker: "Ben", line: "Good morning! How are you?", register: "neutral" },
      { speaker: "Anna", line: "I'm fine, thanks. And you?", register: "neutral" },
      { speaker: "Ben", line: "I'm doing well, thank you.", register: "neutral" },
      { speaker: "Anna", line: "Nice to meet you. I'm Anna.", register: "neutral" },
      { speaker: "Ben", line: "Nice to meet you too, Anna. I'm Ben.", register: "neutral" },
      { speaker: "Anna", line: "See you later, Ben!", register: "casual" },
      { speaker: "Ben", line: "Bye! Have a great day.", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "Anna", line: "?,???!" },
      { speaker: "Ben", line: "???!????" },
      { speaker: "Anna", line: "???,??????" },
      { speaker: "Ben", line: "???,???" },
      { speaker: "Anna", line: "????????????" },
      { speaker: "Ben", line: "????????,???????" },
      { speaker: "Anna", line: "???,?!" },
      { speaker: "Ben", line: "??!???????" }
    ],
    grammarInContext: [
      {
        title: "Basic Greetings",
        explanation: "????????????????????????",
        examples: [
          "Good morning!",
          "Good afternoon!",
          "Good evening!"
        ]
      },
      {
        title: "Simple Introductions",
        explanation: "??????? 'I'm + ??' ? 'My name is + ??'?",
        examples: [
          "I'm Sarah.",
          "My name is John."
        ]
      }
    ],
    pronunciation: [
      { tip: "How are you? ? /ha? ??r ju?/", example: "Fast, natural speech" },
      { tip: "I'm fine ? /a?m fa?n/", example: "Contraction is natural" }
    ],
    shadowing: [
      { line: "Hi, good morning!", emphasis: "good morning" },
      { line: "How are you?", emphasis: "How are you" },
      { line: "I'm fine, thanks. And you?", emphasis: "I'm fine, thanks" },
      { line: "Nice to meet you. I'm Anna.", emphasis: "Nice to meet you" }
    ],
    speakingPractice: {
      instruction: "Practice greeting 3 different people: a friend, a teacher, and a shop assistant. Use appropriate greetings for each.",
      hints: [
        "Use 'Hi' or 'Hey' with friends",
        "Use 'Good morning/afternoon' with teachers",
        "Use 'Hello' with shop assistants",
        "Remember to say please and thank you"
      ],
      followUpQuestions: [
        "What greeting did you use for each person?",
        "Did you adjust your tone?",
        "Which greeting felt most natural?",
        "What's your go-to greeting?"
      ]
    },
    rolePlay: {
      scenario: "You meet your new neighbor for the first time. Greet them, introduce yourself, and say goodbye politely.",
      prompts: [
        "Say good morning",
        "Ask how they are",
        "Introduce yourself",
        "Say goodbye"
      ],
      partnerLines: [
        "Good morning!",
        "How are you?",
        "Nice to meet you! I'm Sarah.",
        "Bye! Have a great day."
      ]
    },
    homework: {
      task: "Greeting Challenge",
      description: "Greet 5 people today using different greetings. Write down what you said and how they responded.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "When should you say 'Good morning'?",
        questionZh: "???????'Good morning'?",
        options: [
          { label: "A) Before noon", labelZh: "A) ????", correct: true },
          { label: "B) After noon", labelZh: "B) ????", correct: false },
          { label: "C) At night", labelZh: "C) ??", correct: false },
          { label: "D) Anytime", labelZh: "D) ????", correct: false }
        ],
        explanation: "'Good morning' is used from sunrise until noon.",
        explanationZh: "'Good morning'?????????"
      },
      {
        id: "q2",
        question: "'Nice to meet you' is used when:",
        questionZh: "'Nice to meet you'???????:",
        options: [
          { label: "A) Meeting someone for the first time", labelZh: "A) ???????", correct: true },
          { label: "B) Leaving a place", labelZh: "B) ??????", correct: false },
          { label: "C) Saying goodbye", labelZh: "C) ???", correct: false },
          { label: "D) Ordering food", labelZh: "D) ??", correct: false }
        ],
        explanation: "'Nice to meet you' is said when meeting someone for the first time.",
        explanationZh: "'Nice to meet you'???????????"
      }
    ],
    review: [
      { key: "greeting", prompt: "What's the standard morning greeting?", answer: "Good morning" },
      { key: "question", prompt: "What's the most common greeting question?", answer: "How are you?" },
      { key: "response", prompt: "How do you respond to 'How are you?'?", answer: "I'm fine, thanks" }
    ],
    humorNotes: [
      {
        context: "When someone says 'How are you?' but doesn't want a real answer",
        punchline: "A: How are you? B: Fine. A: ...I meant 'good morning', not 'tell me your life story'.",
        explanation: "The exchange 'How are you? Fine.' is often just a ritual, not a real question."
      }
    ],
    usefulExpressions: [
      { expression: "Good morning", meaning: "???", usage: "?????????" },
      { expression: "How are you?", meaning: "????", usage: "????????" },
      { expression: "I'm fine, thanks", meaning: "???,??", usage: "????" },
      { expression: "Nice to meet you", meaning: "??????", usage: "????????" },
      { expression: "Have a great day", meaning: "??????", usage: "?????" }
    ],
    commonMistakes: [
      {
        mistake: "?? '????' ? 'How do you do?'",
        correction: "????? 'How are you?'",
        explanation: "'How do you do?' ????????????,???????"
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
    emoji: "???",
    description: "How to ask for and understand directions when you are lost or traveling.",
    color: "from-sky-400 to-blue-400",
    level: "A1",
    estimatedTime: "12 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Asking officials or in formal areas" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard asking a stranger" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Asking a friend or local casually" }
    ],
    warmUp: {
      title: "Warm-Up: Getting Around",
      content: "Getting lost is part of travel. In this lesson, you'll learn how to ask for directions politely and understand the most common responses.",
      contentZh: "??????????????,?????????????????????"
    },
    vocabulary: [
      {
        word: "Excuse me",
        phonetic: "/?k'sku?z mi?/",
        chinese: "????",
        pinyin: "da rao yi xià",
        partOfSpeech: "phrase",
        definitionEn: "A polite way to get someone's attention.",
        definitionZh: "?????????????",
        exampleEn: "Excuse me, where is the train station?",
        exampleZh: "????,???????",
        register: "neutral"
      },
      {
        word: "Where is...?",
        phonetic: "/wer ?z/",
        chinese: "...????",
        pinyin: "... zài na li?",
        partOfSpeech: "question",
        definitionEn: "The most common way to ask for the location of something.",
        definitionZh: "?????????????",
        exampleEn: "Where is the nearest coffee shop?",
        exampleZh: "??????????",
        register: "neutral"
      },
      {
        word: "Turn left",
        phonetic: "/t??rn left/",
        chinese: "??",
        pinyin: "zuo zhuan",
        partOfSpeech: "phrase",
        definitionEn: "A direction to go left at an intersection.",
        definitionZh: "????????????",
        exampleEn: "Turn left at the corner.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Turn right",
        phonetic: "/t??rn ra?t/",
        chinese: "??",
        pinyin: "yòu zhuan",
        partOfSpeech: "phrase",
        definitionEn: "A direction to go right at an intersection.",
        definitionZh: "????????????",
        exampleEn: "Turn right at the traffic light.",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Go straight",
        phonetic: "/go? stre?t/",
        chinese: "??",
        pinyin: "zhí zou",
        partOfSpeech: "phrase",
        definitionEn: "Continue in the same direction without turning.",
        definitionZh: "?????????,????",
        exampleEn: "Go straight for two blocks.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Next to",
        phonetic: "/nekst tu?/",
        chinese: "?...??",
        pinyin: "zài... páng bian",
        partOfSpeech: "phrase",
        definitionEn: "Beside or adjacent to something.",
        definitionZh: "???????????",
        exampleEn: "It's next to the bank.",
        exampleZh: "???????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-directions-1",
          expression: "Excuse me",
          chinese: "????",
          pinyin: "da rao yi xià",
          meaning: "A polite phrase to get a stranger's attention before asking a question.",
          whenToUse: "Before asking a stranger for help, directions, or any question.",
          whenNotToUse: "Don't use with friends or people you know well — just ask directly.",
          nativeFrequency: "Extremely common — essential for polite interaction with strangers.",
          commonMistakes: [
            { mistake: "Not using it and just asking abruptly", correction: "Always start with 'Excuse me' when approaching strangers" }
          ],
          pronunciation: "/?k'sku?z mi?/",
          funnyExample: "A: Excuse me! B: Yes? A: I'm lost. B: ...You could have just said that first.",
          memoryTrick: "Think: 'excuse = apologize' + 'me = me bothering you' = 'sorry to bother you'",
          relatedExpressions: ["Sorry to bother you", "Pardon me", "Do you have a minute?"],
          collocations: ["excuse me", "excuse me sir", "excuse me miss"],
          miniQuiz: [
            { question: "'Excuse me' is used to:", options: ["Get a stranger's attention politely", "Say goodbye", "Apologize for a mistake", "Introduce yourself"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-directions-2",
          expression: "Where is...?",
          chinese: "...????",
          pinyin: "... zài na li?",
          meaning: "The standard question to ask for the location of something.",
          whenToUse: "When you need to find a place. The most common and direct way to ask.",
          whenNotToUse: "Don't use 'How can I go to...?' as it sounds unnatural. Use 'Where is...?' or 'How do I get to...?' instead.",
          nativeFrequency: "Extremely common — the #1 way to ask for directions.",
          commonMistakes: [
            { mistake: "Using 'How can I go to...?'", correction: "Use 'Where is...?' or 'How do I get to...?'" }
          ],
          pronunciation: "/wer ?z/",
          funnyExample: "A: Where is the train station? B: That way. A: ...'That way' is not a location.",
          memoryTrick: "Think: 'Where = location' + 'is = exists' = 'where does it exist?'",
          relatedExpressions: ["How do I get to...?", "Can you tell me where... is?", "Do you know where... is?"],
          collocations: ["where is", "where is the", "where is nearest"],
          miniQuiz: [
            { question: "'Where is the train station?' is asking for:", options: ["The location of the station", "The time of the train", "The price of a ticket", "The name of the station"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-directions-3",
          expression: "Go straight",
          chinese: "??",
          pinyin: "zhí zou",
          meaning: "Continue moving forward without turning.",
          whenToUse: "When giving or receiving directions. Very common and essential.",
          whenNotToUse: "Don't use for cars only — it works for walking too.",
          nativeFrequency: "Very common in directions and navigation.",
          commonMistakes: [
            { mistake: "Using 'go straightly' (not a word)", correction: "'Straight' is both adjective and adverb — use 'go straight'" }
          ],
          pronunciation: "/go? stre?t/",
          funnyExample: "A: Go straight. B: For how long? A: Until you question your life choices. B: ...How long is that?",
          memoryTrick: "Think: 'straight = not turning' = 'don't turn, just go'",
          relatedExpressions: ["Walk straight", "Drive straight", "Keep going straight"],
          collocations: ["go straight", "go straight ahead", "go straight for"],
          miniQuiz: [
            { question: "'Go straight' means:", options: ["Continue forward without turning", "Go quickly", "Turn immediately", "Stop walking"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "Excuse me", meaning: "????", example: "Excuse me, where is the station?", register: "neutral", context: "Getting attention" },
      { chunk: "Where is", meaning: "...???", example: "Where is the nearest cafe?", register: "neutral", context: "Asking location" },
      { chunk: "Go straight", meaning: "??", example: "Go straight for two blocks.", register: "neutral", context: "Direction" },
      { chunk: "Turn left/right", meaning: "??/??", example: "Turn left at the corner.", register: "neutral", context: "Direction" },
      { chunk: "next to", meaning: "?...??", example: "It's next to the bank.", register: "neutral", context: "Location description" }
    ],
    conversation: [
      { speaker: "Tourist", line: "Excuse me, where is the train station?", register: "neutral" },
      { speaker: "Local", line: "Go straight for two blocks, then turn left.", register: "neutral" },
      { speaker: "Tourist", line: "Is it far from here?", register: "neutral" },
      { speaker: "Local", line: "No, it's about a 5-minute walk.", register: "neutral" },
      { speaker: "Tourist", line: "Thank you very much!", register: "neutral" },
      { speaker: "Local", line: "You're welcome. Enjoy your day!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "????,???????" },
      { speaker: "???", line: "??????,?????" },
      { speaker: "??", line: "??????" },
      { speaker: "???", line: "??,????5???" },
      { speaker: "??", line: "????!" },
      { speaker: "???", line: "??????????!" }
    ],
    grammarInContext: [
      {
        title: "Imperative Verbs for Directions",
        explanation: "????(??????)???",
        examples: [
          "Go straight.",
          "Turn left.",
          "Walk for two blocks."
        ]
      },
      {
        title: "Prepositions of Place",
        explanation: "????????",
        examples: [
          "The station is next to the bank.",
          "It's on Main Street.",
          "It's across from the park."
        ]
      }
    ],
    pronunciation: [
      { tip: "Excuse me ? /?k'sku?z mi?/", example: "Quick, polite phrase" },
      { tip: "Where is ? /wer ?z/", example: "'Where' sounds like 'wear'" }
    ],
    shadowing: [
      { line: "Excuse me, where is the train station?", emphasis: "Excuse me" },
      { line: "Go straight for two blocks.", emphasis: "Go straight" },
      { line: "Turn left at the corner.", emphasis: "Turn left" },
      { line: "It's next to the bank.", emphasis: "next to" }
    ],
    speakingPractice: {
      instruction: "Practice asking for directions to 3 different places: a hotel, a restaurant, and a museum. Use 'Excuse me', 'Where is...?', and 'Thank you'.",
      hints: [
        "Start with 'Excuse me'",
        "Ask 'Where is...?'",
        "Listen for 'Go straight', 'Turn left/right'",
        "Always say thank you"
      ],
      followUpQuestions: [
        "What place did you ask for?",
        "What directions were you given?",
        "Did you find it easily?",
        "What other phrases could you use?"
      ]
    },
    rolePlay: {
      scenario: "You are lost in a new city. Ask a local for directions to the nearest coffee shop.",
      prompts: [
        "Get the person's attention politely",
        "Ask where the coffee shop is",
        "Ask if it is far",
        "Thank them"
      ],
      partnerLines: [
        "Excuse me, where is the train station?",
        "Go straight for two blocks, then turn left.",
        "No, it's about a 5-minute walk.",
        "You're welcome. Enjoy your day!"
      ]
    },
    homework: {
      task: "Real Directions",
      description: "Actually ask for directions somewhere this week in English (even if you know the way). Write down what you said and what the person said.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "When should you say 'Excuse me'?",
        questionZh: "???????'Excuse me'?",
        options: [
          { label: "A) Before asking a stranger", labelZh: "A) ???????", correct: true },
          { label: "B) After asking", labelZh: "B) ????", correct: false },
          { label: "C) Never", labelZh: "C) ??", correct: false },
          { label: "D) Only with friends", labelZh: "D) ?????", correct: false }
        ],
        explanation: "'Excuse me' is used to politely get a stranger's attention before asking a question.",
        explanationZh: "'Excuse me'?????????????,??????"
      },
      {
        id: "q2",
        question: "'Go straight' means:",
        questionZh: "'Go straight'???:",
        options: [
          { label: "A) Continue forward without turning", labelZh: "A) ????????", correct: true },
          { label: "B) Go quickly", labelZh: "B) ???", correct: false },
          { label: "C) Turn immediately", labelZh: "C) ????", correct: false },
          { label: "D) Stop walking", labelZh: "D) ????", correct: false }
        ],
        explanation: "'Go straight' means to continue moving forward without turning.",
        explanationZh: "'Go straight'???????,????"
      }
    ],
    review: [
      { key: "attention", prompt: "How do you politely get a stranger's attention?", answer: "Excuse me" },
      { key: "ask", prompt: "What's the most common way to ask for a location?", answer: "Where is...?" },
      { key: "direction", prompt: "What does 'Go straight' mean?", answer: "Continue forward without turning" }
    ],
    humorNotes: [
      {
        context: "When someone gives you terrible directions",
        punchline: "A: Go straight until you see the big tree. B: Which big tree? A: The one that looks like a big tree. B: ...I'll use my GPS.",
        explanation: "Self-deprecating humor about bad directions or being lost is very common."
      }
    ],
    usefulExpressions: [
      { expression: "Excuse me", meaning: "????", usage: "?????????" },
      { expression: "Where is...?", meaning: "...????", usage: "????" },
      { expression: "Turn left/right", meaning: "??/??", usage: "?????" },
      { expression: "Go straight", meaning: "??", usage: "?????" },
      { expression: "You're welcome", meaning: "???", usage: "????" }
    ],
    commonMistakes: [
      {
        mistake: "???? 'How can I go to...?'",
        correction: "??????? 'Where is...?' ? 'How do I get to...?'",
        explanation: "'Where is...?' ??????????????"
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
    emoji: "???",
    description: "Simple restaurant conversations: greeting, ordering, asking questions, and paying.",
    color: "from-orange-400 to-red-400",
    level: "A1",
    estimatedTime: "12 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Fine dining or business meals" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard restaurant interaction" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Casual dining with friends" }
    ],
    warmUp: {
      title: "Warm-Up: Restaurant Culture",
      content: "Restaurants have their own language — from greetings to ordering to paying. In this lesson, you'll learn how to navigate a restaurant confidently in English.",
      contentZh: "??????????——??????????????,????????????????????"
    },
    vocabulary: [
      {
        word: "Menu",
        phonetic: "/'menju?/",
        chinese: "??",
        pinyin: "cài dan",
        partOfSpeech: "noun",
        definitionEn: "A list of food and drinks available at a restaurant.",
        definitionZh: "????????????????",
        exampleEn: "Can I see the menu, please?",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "I would like",
        phonetic: "/a? w?d la?k/",
        chinese: "???",
        pinyin: "wo xiang yào",
        partOfSpeech: "phrase",
        definitionEn: "A polite way to order or request something.",
        definitionZh: "??????????????",
        exampleEn: "I would like the soup, please.",
        exampleZh: "????,???",
        register: "neutral"
      },
      {
        word: "Bill",
        phonetic: "/b?l/",
        chinese: "??",
        pinyin: "zhàng dan",
        partOfSpeech: "noun",
        definitionEn: "The paper showing how much you need to pay at a restaurant.",
        definitionZh: "???????????????",
        exampleEn: "Could I have the bill, please?",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Water",
        phonetic: "/'w??t?r/",
        chinese: "?",
        pinyin: "shui",
        partOfSpeech: "noun",
        definitionEn: "A common drink to order at restaurants.",
        definitionZh: "????????????",
        exampleEn: "Can I have some water, please?",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Check",
        phonetic: "/t?ek/",
        chinese: "??",
        pinyin: "zhàng dan",
        partOfSpeech: "noun",
        definitionEn: "American English for 'bill' at a restaurant.",
        definitionZh: "????????????",
        exampleEn: "Could I have the check?",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Enjoy your meal",
        phonetic: "/?n'd??? j?r mi?l/",
        chinese: "???",
        pinyin: "qing màn yòng",
        partOfSpeech: "phrase",
        definitionEn: "A common phrase servers say when bringing food.",
        definitionZh: "????????????",
        exampleEn: "Enjoy your meal!",
        exampleZh: "???!",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-restaurant-1",
          expression: "I would like",
          chinese: "???",
          pinyin: "wo xiang yào",
          meaning: "The standard polite way to order food or request something.",
          whenToUse: "When ordering at restaurants, cafes, or any service setting.",
          whenNotToUse: "Don't use 'I want' in restaurants — it's considered rude. Use 'I would like' or 'I'll have' instead.",
          nativeFrequency: "Extremely common — the standard way to order politely.",
          commonMistakes: [
            { mistake: "Using 'I want' instead of 'I would like'", correction: "'I would like' or 'I'll have' are much more polite" }
          ],
          pronunciation: "/a? w?d la?k/",
          funnyExample: "A: I want the steak! B: I would like the steak, please. A: ...Much better. B: I also want a discount.",
          memoryTrick: "Think: 'would like = want politely' = 'want with manners'",
          relatedExpressions: ["I'll have...", "I'd like...", "Can I get...?"],
          collocations: ["would like", "would like the", "would like to order"],
          miniQuiz: [
            { question: "'I would like' is:", options: ["Polite way to order", "Rude way to order", "A question", "An apology"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-restaurant-2",
          expression: "Can I have...?",
          chinese: "???...??",
          pinyin: "néng gei wo... ma?",
          meaning: "A polite way to ask for something at a restaurant.",
          whenToUse: "When asking for water, the menu, the bill, or any item.",
          whenNotToUse: "Don't use for ordering food — use 'I would like...' for ordering.",
          nativeFrequency: "Very common for requests at restaurants.",
          commonMistakes: [
            { mistake: "Using 'Give me...' instead", correction: "'Can I have...?' is much more polite" }
          ],
          pronunciation: "/kæn a? hæv/",
          funnyExample: "A: Can I have the bill? B: Can you pay? A: ...That's not what I meant.",
          memoryTrick: "Think: 'Can I = may I' + 'have = receive' = 'may I receive?'",
          relatedExpressions: ["Could I have...?", "May I have...?", "Can I get...?"],
          collocations: ["can I have", "can I have the bill", "can I have some water"],
          miniQuiz: [
            { question: "'Can I have...?' is used for:", options: ["Polite requests", "Statements", "Orders to staff", "Greetings"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-restaurant-3",
          expression: "Here you go",
          chinese: "??",
          pinyin: "gei nín",
          meaning: "Giving something to someone in a friendly, casual way.",
          whenToUse: "When handing over the menu, food, water, or bill.",
          whenNotToUse: "Don't use when receiving — use 'Thank you' instead.",
          nativeFrequency: "Extremely common everywhere.",
          commonMistakes: [
            { mistake: "Using in very formal writing", correction: "Use 'Please find attached' in formal emails" }
          ],
          pronunciation: "/h?? ju? go?/",
          funnyExample: "A: Give me the bill. B: Here you go! A: ...That's not how this works.",
          memoryTrick: "Think: 'here = take this' + 'you go = it's yours' = 'take this, it's yours'",
          relatedExpressions: ["There you go", "Here you are", "Here it is"],
          collocations: ["here you go", "here you go thanks", "here you go please"],
          miniQuiz: [
            { question: "'Here you go' means:", options: ["Take this / Here it is", "Go away", "Goodbye", "Come here"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "I would like", meaning: "???", example: "I would like the soup, please.", register: "neutral", context: "Ordering" },
      { chunk: "Can I have", meaning: "???...??", example: "Can I have some water?", register: "neutral", context: "Requesting" },
      { chunk: "Here you go", meaning: "??", example: "Here you go.", register: "neutral", context: "Giving something" },
      { chunk: "Could I have the bill", meaning: "????????", example: "Could I have the bill, please?", register: "neutral", context: "Paying" },
      { chunk: "Enjoy your meal", meaning: "???", example: "Enjoy your meal!", register: "neutral", context: "Server phrase" }
    ],
    conversation: [
      { speaker: "Server", line: "Hello! Welcome to our restaurant. Here is the menu.", register: "neutral" },
      { speaker: "Customer", line: "Thank you. Can I have some water please?", register: "neutral" },
      { speaker: "Server", line: "Of course. Here you go. Are you ready to order?", register: "neutral" },
      { speaker: "Customer", line: "Yes, I would like the soup and a salad, please.", register: "neutral" },
      { speaker: "Server", line: "Good choice! The soup is today's special. Enjoy your meal!", register: "neutral" },
      { speaker: "Customer", line: "Thank you. This looks delicious.", register: "neutral" },
      { speaker: "Server", line: "Can I get you anything else?", register: "neutral" },
      { speaker: "Customer", line: "No, thank you. Could I have the bill, please?", register: "neutral" },
      { speaker: "Server", line: "Sure, here it is. The total is $25.", register: "neutral" },
      { speaker: "Customer", line: "Here is my card. Thank you for the service.", register: "neutral" },
      { speaker: "Server", line: "You're welcome! Have a great day.", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "???", line: "??!??????????????" },
      { speaker: "??", line: "??????????" },
      { speaker: "???", line: "???????????????" },
      { speaker: "??", line: "??,???????,???" },
      { speaker: "???", line: "???!???????????!" },
      { speaker: "??", line: "???????????" },
      { speaker: "???", line: "???????" },
      { speaker: "??", line: "???,???????????" },
      { speaker: "???", line: "??,?????25???" },
      { speaker: "??", line: "?????????????" },
      { speaker: "???", line: "???!???????" }
    ],
    grammarInContext: [
      {
        title: "Polite Requests with 'I would like'",
        explanation: "? 'I would like...' ???????????? 'I want' ????",
        examples: [
          "I would like the chicken salad.",
          "I would like some water, please.",
          "I would like to order now."
        ]
      },
      {
        title: "Yes/No Questions with 'Can I'",
        explanation: "? 'Can I...?' ???????????",
        examples: [
          "Can I have the menu?",
          "Can I pay by card?",
          "Can I get the bill?"
        ]
      }
    ],
    pronunciation: [
      { tip: "I would like ? /a? w?d la?k/", example: "Commonly contracted to 'I'd like'" },
      { tip: "Could I have ? /k?d a? hæv/", example: "Polite request form" }
    ],
    shadowing: [
      { line: "Hello! Welcome to our restaurant. Here is the menu.", emphasis: "Welcome to our restaurant" },
      { line: "Can I have some water, please?", emphasis: "Can I have" },
      { line: "Yes, I would like the soup and a salad, please.", emphasis: "I would like" },
      { line: "Could I have the bill, please?", emphasis: "Could I have the bill" }
    ],
    speakingPractice: {
      instruction: "Practice ordering a full meal at a restaurant. Include: greeting, ordering food/drink, asking for the bill, and paying.",
      hints: [
        "Start with 'Hello'",
        "Use 'I would like...' to order",
        "Ask 'Could I have the bill?'",
        "Say 'Thank you' at the end"
      ],
      followUpQuestions: [
        "What did you order?",
        "Was the service good?",
        "What was the total?",
        "Would you go back?"
      ]
    },
    rolePlay: {
      scenario: "You are at a restaurant with a friend. Order food and drinks, ask for the bill, and pay.",
      prompts: [
        "Greet the server",
        "Ask for water and the menu",
        "Order your food",
        "Ask for the bill",
        "Pay and say thank you"
      ],
      partnerLines: [
        "Hello! Welcome to our restaurant. Here is the menu.",
        "Of course. Here you go. Are you ready to order?",
        "Good choice! The soup is today's special. Enjoy your meal!",
        "Sure, here it is. The total is $25."
      ]
    },
    homework: {
      task: "Real Restaurant Visit",
      description: "Go to a restaurant this week and order entirely in English. Write down what you said and what the server said.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "Which is the most polite way to order?",
        questionZh: "??????????",
        options: [
          { label: "A) I would like the salad, please.", labelZh: "A) ?????,???", correct: true },
          { label: "B) I want the salad.", labelZh: "B) ?????", correct: false },
          { label: "C) Give me the salad.", labelZh: "C) ?????", correct: false },
          { label: "D) Salad. Now.", labelZh: "D) ??????", correct: false }
        ],
        explanation: "'I would like...' is the standard polite way to order. 'I want' sounds demanding.",
        explanationZh: "'I would like...'???????????'I want'????????"
      },
      {
        id: "q2",
        question: "'Here you go' means:",
        questionZh: "'Here you go'???:",
        options: [
          { label: "A) Take this / Here it is", labelZh: "A) ??/???", correct: true },
          { label: "B) Go away", labelZh: "B) ??", correct: false },
          { label: "C) Goodbye", labelZh: "C) ??", correct: false },
          { label: "D) Come here", labelZh: "D) ??", correct: false }
        ],
        explanation: "'Here you go' is used when giving something to someone.",
        explanationZh: "'Here you go'??????????"
      }
    ],
    review: [
      { key: "order", prompt: "What's the polite way to order food?", answer: "I would like..." },
      { key: "request", prompt: "How do you ask for water politely?", answer: "Can I have some water?" },
      { key: "pay", prompt: "How do you ask for the bill?", answer: "Could I have the bill, please?" }
    ],
    humorNotes: [
      {
        context: "When the server asks if you want dessert",
        punchline: "A: Would you like dessert? B: I would like dessert. A: ...I don't actually have dessert. B: Then I would like the truth.",
        explanation: "Self-deprecating humor about always wanting dessert is very common."
      }
    ],
    usefulExpressions: [
      { expression: "I would like...", meaning: "???...", usage: "????" },
      { expression: "Can I have...?", meaning: "???...??", usage: "???????" },
      { expression: "Here you go", meaning: "??", usage: "???????" },
      { expression: "Could I have the bill?", meaning: "????????", usage: "????" },
      { expression: "Enjoy your meal", meaning: "???", usage: "??????" }
    ],
    commonMistakes: [
      {
        mistake: "? 'I want...' ??",
        correction: "??????? 'I would like...' ? 'I'd like...'",
        explanation: "????????,'I would like' ? 'I want' ????"
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
    emoji: "???",
    description: "Buying clothes, asking about prices, and paying at a store.",
    color: "from-pink-400 to-rose-400",
    level: "A1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "High-end store interactions" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard retail shopping" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Casual store or market" }
    ],
    warmUp: {
      title: "Warm-Up: Shopping Phrases",
      content: "Shopping is a universal activity. In this lesson, you'll learn how to ask about prices, sizes, and payment methods in English.",
      contentZh: "????????????,??????????????????????"
    },
    vocabulary: [
      {
        word: "How much is...?",
        phonetic: "/ha? m?t? ?z/",
        chinese: "...????",
        pinyin: "... duo shao qián?",
        partOfSpeech: "question",
        definitionEn: "Asking for the price of something.",
        definitionZh: "????????",
        exampleEn: "How much is this shirt?",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Price",
        phonetic: "/pra?s/",
        chinese: "??",
        pinyin: "jià gé",
        partOfSpeech: "noun",
        definitionEn: "The amount of money something costs.",
        definitionZh: "??????",
        exampleEn: "The price is $25.",
        exampleZh: "???25???",
        register: "neutral"
      },
      {
        word: "Size",
        phonetic: "/sa?z/",
        chinese: "??",
        pinyin: "chi cùn",
        partOfSpeech: "noun",
        definitionEn: "The measurement of clothing or shoes.",
        definitionZh: "?????????",
        exampleEn: "Do you have this in medium?",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Color",
        phonetic: "/'k?l?r/",
        chinese: "??",
        pinyin: "yán sè",
        partOfSpeech: "noun",
        definitionEn: "The color of an item.",
        definitionZh: "??????",
        exampleEn: "Do you have this in blue?",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Cash",
        phonetic: "/kæ?/",
        chinese: "??",
        pinyin: "xiàn jin",
        partOfSpeech: "noun",
        definitionEn: "Physical money (bills and coins).",
        definitionZh: "???(?????)?",
        exampleEn: "I'll pay by cash.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Card",
        phonetic: "/k??rd/",
        chinese: "?",
        pinyin: "ka",
        partOfSpeech: "noun",
        definitionEn: "Credit or debit card for payment.",
        definitionZh: "?????????????",
        exampleEn: "Can I pay by card?",
        exampleZh: "???????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-shopping-basics-1",
          expression: "How much is...?",
          chinese: "...????",
          pinyin: "... duo shao qián?",
          meaning: "The standard way to ask for the price of something.",
          whenToUse: "In any store when you want to know the price of an item.",
          whenNotToUse: "Don't use in formal auctions or negotiations — there are different conventions.",
          nativeFrequency: "Extremely common — used daily in shopping.",
          commonMistakes: [
            { mistake: "Saying 'How much it is?'", correction: "Correct order is 'How much is it?'" }
          ],
          pronunciation: "/ha? m?t? ?z/",
          funnyExample: "A: How much is this? B: $50. A: ...That's more than I expected. B: That's how much it is.",
          memoryTrick: "Think: 'How much = what quantity of money' + 'is = costs' = 'what does it cost?'",
          relatedExpressions: ["What's the price?", "How much does it cost?", "What's this?"],
          collocations: ["how much is", "how much is this", "how much is that"],
          miniQuiz: [
            { question: "'How much is this?' means:", options: ["What's the price?", "How big is it?", "What color is it?", "Where is it?"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-shopping-basics-2",
          expression: "Do you have this in...?",
          chinese: "???...?/?????",
          pinyin: "ni men you... hào / yán sè de ma?",
          meaning: "Asking if a store has a specific size, color, or variant of an item.",
          whenToUse: "When you like an item but need a different size or color.",
          whenNotToUse: "Don't use for completely different items — ask 'Do you sell/have...?' instead.",
          nativeFrequency: "Very common in clothing and retail stores.",
          commonMistakes: [
            { mistake: "Using 'Is this available in...?' which is correct but longer", correction: "'Do you have this in...?' is more natural in casual shopping" }
          ],
          pronunciation: "/du ju hæv ð?s ?n/",
          funnyExample: "A: Do you have this in sanity? B: ...We only have sizes S, M, L.",
          memoryTrick: "Think: 'Do you have = is available' + 'in = in this variant' = 'is this variant available?'",
          relatedExpressions: ["Do you have any...?", "Is this available in...?", "Can I get this in...?"],
          collocations: ["have this in", "have this in medium", "have this in blue"],
          miniQuiz: [
            { question: "'Do you have this in medium?' means:", options: ["Is there a medium size?", "Is this cheap?", "Is this new?", "Is this on sale?"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-shopping-basics-3",
          expression: "I'll take it",
          chinese: "???",
          pinyin: "wo mai le",
          meaning: "Deciding to buy something.",
          whenToUse: "When you've made your decision to purchase an item.",
          whenNotToUse: "Don't use if you're still deciding. Use 'Can I try it on?' or 'Let me think' instead.",
          nativeFrequency: "Very common in shopping.",
          commonMistakes: [
            { mistake: "Using 'I want it' instead", correction: "'I'll take it' is more decisive and natural in shopping" }
          ],
          pronunciation: "/a?l te?k ?t/",
          funnyExample: "A: I'll take it! B: Great! That'll be $500. A: ...I didn't ask the price. B: It's $500.",
          memoryTrick: "Think: 'take = buy' = 'I will buy this'",
          relatedExpressions: ["I'll get it", "I'll buy it", "This one please"],
          collocations: ["I'll take it", "I'll take this one", "I'll take the blue one"],
          miniQuiz: [
            { question: "'I'll take it' means:", options: ["I want to buy it", "I will carry it", "I don't want it", "It's too expensive"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "How much is", meaning: "...???", example: "How much is this shirt?", register: "neutral", context: "Asking price" },
      { chunk: "Do you have this in", meaning: "???...?", example: "Do you have this in medium?", register: "neutral", context: "Asking for size/color" },
      { chunk: "I'll take it", meaning: "???", example: "I'll take it.", register: "neutral", context: "Decision to buy" },
      { chunk: "try it on", meaning: "??", example: "Can I try it on?", register: "neutral", context: "Fitting request" },
      { chunk: "pay by cash/card", meaning: "???/????", example: "I'll pay by card.", register: "neutral", context: "Payment" }
    ],
    conversation: [
      { speaker: "Customer", line: "Excuse me, how much is this shirt?", register: "neutral" },
      { speaker: "Shopkeeper", line: "It's $25. It's on sale today.", register: "neutral" },
      { speaker: "Customer", line: "Oh, that's a good price. Do you have it in medium?", register: "neutral" },
      { speaker: "Shopkeeper", line: "Yes, let me check. Here you go. Do you want to try it on?", register: "neutral" },
      { speaker: "Customer", line: "Yes, please. Thank you.", register: "neutral" },
      { speaker: "Customer", line: "It fits perfectly. I'll take it.", register: "neutral" },
      { speaker: "Shopkeeper", line: "Great! Will you pay by cash or card?", register: "neutral" },
      { speaker: "Customer", line: "Card, please.", register: "neutral" },
      { speaker: "Shopkeeper", line: "Here is your receipt. Thank you for shopping with us!", register: "neutral" },
      { speaker: "Customer", line: "Thank you. Have a nice day!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "????,????????" },
      { speaker: "??", line: "25????????" },
      { speaker: "??", line: "?,??????????" },
      { speaker: "??", line: "??,??????????????" },
      { speaker: "??", line: "??,???" },
      { speaker: "??", line: "????????" },
      { speaker: "??", line: "???!?????????" },
      { speaker: "??", line: "???" },
      { speaker: "??", line: "???????????!" },
      { speaker: "??", line: "?????????!" }
    ],
    grammarInContext: [
      {
        title: "Yes/No Questions with 'Do you'",
        explanation: "? 'Do you have...?' ????????",
        examples: [
          "Do you have this in medium?",
          "Do you have a blue color?",
          "Do you accept credit cards?"
        ]
      },
      {
        title: "Future Intention with 'I'll'",
        explanation: "? 'I'll...' (I will) ????????",
        examples: [
          "I'll take it.",
          "I'll pay by card.",
          "I'll try it on."
        ]
      }
    ],
    pronunciation: [
      { tip: "How much ? /ha? m?t?/", example: "Quick question" },
      { tip: "I'll take it ? /a?l te?k ?t/", example: "Decision phrase" }
    ],
    shadowing: [
      { line: "Excuse me, how much is this shirt?", emphasis: "How much is" },
      { line: "Do you have it in medium?", emphasis: "Do you have" },
      { line: "It fits perfectly. I'll take it.", emphasis: "I'll take it" },
      { line: "Will you pay by cash or card?", emphasis: "pay by cash or card" }
    ],
    speakingPractice: {
      instruction: "Practice shopping for 3 items: a shirt, a pair of shoes, and a hat. Use 'How much', 'I'll take it', and 'Thank you'.",
      hints: [
        "Start with 'Excuse me'",
        "Ask 'How much is...?'",
        "Ask 'Do you have...?'",
        "End with 'Thank you'"
      ],
      followUpQuestions: [
        "What did you buy?",
        "Did you get a good price?",
        "Did you try anything on?",
        "How did you pay?"
      ]
    },
    rolePlay: {
      scenario: "You want to buy a pair of shoes at a store. Ask about the price, size, and color. Try them on and buy them.",
      prompts: [
        "Greet the shopkeeper",
        "Ask the price",
        "Ask for your size",
        "Try them on",
        "Pay and say thank you"
      ],
      partnerLines: [
        "Excuse me, how much is this shirt?",
        "It's $25. It's on sale today.",
        "Yes, let me check. Here you go.",
        "Great! Will you pay by cash or card?"
      ]
    },
    homework: {
      task: "Shopping Challenge",
      description: "Go shopping this week and practice using 'How much is...?', 'Do you have...?', and 'I'll take it'. Write a brief shopping journal.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "Which is the most natural way to ask for a price?",
        questionZh: "??????????",
        options: [
          { label: "A) How much is this?", labelZh: "A) ??????", correct: true },
          { label: "B) How much it is?", labelZh: "B) ?????", correct: false },
          { label: "C) How much this?", labelZh: "C) ?????", correct: false },
          { label: "D) How much?", labelZh: "D) ???", correct: false }
        ],
        explanation: "'How much is this?' is the correct question form. Don't say 'How much it is?'.",
        explanationZh: "'How much is this?'?????????'How much it is?'?"
      },
      {
        id: "q2",
        question: "'I'll take it' means:",
        questionZh: "'I'll take it'???:",
        options: [
          { label: "A) I want to buy it", labelZh: "A) ???", correct: true },
          { label: "B) I will carry it", labelZh: "B) ????", correct: false },
          { label: "C) I don't want it", labelZh: "C) ????", correct: false },
          { label: "D) It's too expensive", labelZh: "D) ???", correct: false }
        ],
        explanation: "'I'll take it' means you've decided to buy something.",
        explanationZh: "'I'll take it'?????????????"
      }
    ],
    review: [
      { key: "price", prompt: "How do you ask for the price?", answer: "How much is...?" },
      { key: "size", prompt: "How do you ask for a different size?", answer: "Do you have this in...?" },
      { key: "buy", prompt: "How do you say you want to buy something?", answer: "I'll take it" }
    ],
    humorNotes: [
      {
        context: "When you see the price and reconsider",
        punchline: "A: How much is this? B: $500. A: ...I'll take it. B: Great! A: ...I meant I'll take my wallet and leave.",
        explanation: "Self-deprecating humor about prices being too high is very common."
      }
    ],
    usefulExpressions: [
      { expression: "How much is...?", meaning: "...????", usage: "????" },
      { expression: "Do you have this in...?", meaning: "???...?/?????", usage: "???????" },
      { expression: "I'll take it", meaning: "???", usage: "????" },
      { expression: "Try it on", meaning: "??", usage: "??????" },
      { expression: "Pay by cash/card", meaning: "???/????", usage: "??????" }
    ],
    commonMistakes: [
      {
        mistake: "? 'How much it is?'",
        correction: "????? 'How much is it?'",
        explanation: "???? be ??????????"
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
    emoji: "?",
    description: "Casual conversations about weather, weekend plans, hobbies, and general topics.",
    color: "from-teal-400 to-green-400",
    level: "A1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Professional networking events" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard casual conversation" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Friends and neighbors" }
    ],
    warmUp: {
      title: "Warm-Up: The Art of Small Talk",
      content: "Small talk is the social glue of everyday life. In this lesson, you'll learn how to make light, friendly conversation about common topics like weather, plans, and hobbies.",
      contentZh: "??????????????????,????????????????????,??????????"
    },
    vocabulary: [
      {
        word: "Weather",
        phonetic: "/'weð?r/",
        chinese: "??",
        pinyin: "tian qì",
        partOfSpeech: "noun",
        definitionEn: "The state of the atmosphere at a particular time and place.",
        definitionZh: "?????????????",
        exampleEn: "The weather is beautiful today.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Weekend",
        phonetic: "/'wi?kend/",
        chinese: "??",
        pinyin: "zhou mò",
        partOfSpeech: "noun",
        definitionEn: "Saturday and Sunday, or the time off from work/school.",
        definitionZh: "?????,???/????????",
        exampleEn: "What are your plans for the weekend?",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "Hobby",
        phonetic: "/'h?bi/",
        chinese: "??",
        pinyin: "ài hào",
        partOfSpeech: "noun",
        definitionEn: "An activity you do regularly in your free time for pleasure.",
        definitionZh: "???????????????????",
        exampleEn: "My hobby is photography.",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Like",
        phonetic: "/la?k/",
        chinese: "??",
        pinyin: "xi huan",
        partOfSpeech: "verb",
        definitionEn: "To enjoy or find pleasant.",
        definitionZh: "????????",
        exampleEn: "I like reading.",
        exampleZh: "??????",
        register: "neutral"
      },
      {
        word: "Beautiful",
        phonetic: "/'bju?t?fl/",
        chinese: "???",
        pinyin: "mei lì de",
        partOfSpeech: "adjective",
        definitionEn: "Very pleasing to look at; attractive.",
        definitionZh: "???????;?????",
        exampleEn: "It's a beautiful day today.",
        exampleZh: "???????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-smalltalk-1",
          expression: "It's a beautiful day",
          chinese: "??????",
          pinyin: "jin tian tian qì zhen hao",
          meaning: "A common way to start small talk by commenting on the weather.",
          whenToUse: "When starting a conversation with neighbors, coworkers, or strangers. Very safe and common topic.",
          whenNotToUse: "Don't use if it's clearly raining or storming — say 'What terrible weather!' instead.",
          nativeFrequency: "Extremely common — the #1 small talk starter.",
          commonMistakes: [
            { mistake: "Using 'It's a beautiful weather'", correction: "Say 'It's beautiful weather' or 'It's a beautiful day'" }
          ],
          pronunciation: "/?ts ? 'bju?t?fl de?/",
          funnyExample: "A: It's a beautiful day! B: It's pouring rain. A: ...I meant spiritually beautiful.",
          memoryTrick: "Think: 'beautiful = nice' + 'day = today' = 'today is nice'",
          relatedExpressions: ["It's sunny", "It's warm today", "Nice day, isn't it?"],
          collocations: ["beautiful day", "beautiful weather", "beautiful morning"],
          miniQuiz: [
            { question: "'It's a beautiful day' is usually used to:", options: ["Start small talk", "Complain about weather", "Say goodbye", "Make plans"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-smalltalk-2",
          expression: "What are your plans...?",
          chinese: "??????...?",
          pinyin: "ni you shén me jì huà...?",
          meaning: "Asking someone about their upcoming schedule or intentions.",
          whenToUse: "When asking about someone's weekend, evening, or holiday plans.",
          whenNotToUse: "Don't use for past events. Use 'What were your plans...?' for past tense.",
          nativeFrequency: "Very common — used daily when asking about future intentions.",
          commonMistakes: [
            { mistake: "Using 'What do you plan?' instead", correction: "'What are your plans...?' is more natural in casual English" }
          ],
          pronunciation: "/w?t ??r j?r plænz/",
          funnyExample: "A: What are your plans for the weekend? B: My plan is to avoid all plans. A: ...That's still a plan.",
          memoryTrick: "Think: 'plans = ideas' + 'what are = asking about' = 'asking about your ideas'",
          relatedExpressions: ["What are you up to?", "Do you have any plans?", "What's the plan?"],
          collocations: ["plans for the weekend", "plans for tonight", "plans for the holiday"],
          miniQuiz: [
            { question: "'What are your plans for the weekend?' asks about:", options: ["Future weekend intentions", "Past weekend activities", "Current weather", "Favorite hobbies"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-smalltalk-3",
          expression: "I love...",
          chinese: "???...",
          pinyin: "wo xi huan...",
          meaning: "Expressing strong liking or enthusiasm for something.",
          whenToUse: "When talking about hobbies, food, activities, or anything you enjoy.",
          whenNotToUse: "Don't use for people in romantic contexts — it's too strong. Use 'I like...' instead.",
          nativeFrequency: "Very common in casual conversation.",
          commonMistakes: [
            { mistake: "Using 'I am loving...' for general preferences", correction: "Use 'I love...' or 'I like...' for general preferences" }
          ],
          pronunciation: "/a? l?v/",
          funnyExample: "A: I love pizza! B: I love pizza too! A: ...We should get married. B: ...Let's just get pizza first.",
          memoryTrick: "Think: 'love = strong like' = 'really enjoy something'",
          relatedExpressions: ["I like...", "I enjoy...", "I'm into..."],
          collocations: ["love reading", "love cooking", "love playing soccer"],
          miniQuiz: [
            { question: "'I love reading' means:", options: ["I really enjoy reading", "I want to marry reading", "I'm learning to read", "I hate reading"], correct: 0 }
          ],
          register: "casual"
        }
      ]
    },
    nativeChunks: [
      { chunk: "It's a beautiful day", meaning: "??????", example: "It's a beautiful day today, isn't it?", register: "neutral", context: "Weather small talk" },
      { chunk: "What are your plans", meaning: "??????", example: "What are your plans for the weekend?", register: "neutral", context: "Asking about plans" },
      { chunk: "I love", meaning: "???", example: "I love walking in the park.", register: "casual", context: "Expressing preferences" },
      { chunk: "That sounds nice", meaning: "?????", example: "That sounds nice!", register: "neutral", context: "Responding positively" },
      { chunk: "Let's plan it soon", meaning: "???????", example: "Let's plan it soon.", register: "casual", context: "Making future plans" }
    ],
    conversation: [
      { speaker: "Anna", line: "It's a beautiful day today, isn't it?", register: "neutral" },
      { speaker: "Ben", line: "Yes, it's sunny and warm. Perfect for a picnic!", register: "neutral" },
      { speaker: "Anna", line: "What are your plans for the weekend?", register: "neutral" },
      { speaker: "Ben", line: "I'm going to visit my parents. What about you?", register: "neutral" },
      { speaker: "Anna", line: "I'm going to the park with my dog. I love walking in the park.", register: "casual" },
      { speaker: "Ben", line: "That sounds nice! Do you have any hobbies?", register: "neutral" },
      { speaker: "Anna", line: "Yes, I like reading and cooking. How about you?", register: "neutral" },
      { speaker: "Ben", line: "I enjoy playing soccer and watching movies.", register: "neutral" },
      { speaker: "Anna", line: "Cool! Maybe we can play soccer together sometime?", register: "casual" },
      { speaker: "Ben", line: "That would be great! Let's plan it soon.", register: "casual" }
    ],
    chineseTranslation: [
      { speaker: "Anna", line: "??????,????" },
      { speaker: "Ben", line: "??,???????????!" },
      { speaker: "Anna", line: "?????????" },
      { speaker: "Ben", line: "???????????" },
      { speaker: "Anna", line: "???????????????????" },
      { speaker: "Ben", line: "?????!????????" },
      { speaker: "Anna", line: "??,????????????" },
      { speaker: "Ben", line: "???????????" },
      { speaker: "Anna", line: "?!????????????????" },
      { speaker: "Ben", line: "????!????????" }
    ],
    grammarInContext: [
      {
        title: "Present Continuous for Future Plans",
        explanation: "???????????????????",
        examples: [
          "I'm going to the park.",
          "I'm visiting my parents.",
          "What are you doing this weekend?"
        ]
      },
      {
        title: "Simple Present for Habits and Likes",
        explanation: "??????????????",
        examples: [
          "I like reading.",
          "I enjoy playing soccer.",
          "She loves cooking."
        ]
      }
    ],
    pronunciation: [
      { tip: "It's a beautiful day ? /?ts ? 'bju?t?fl de?/", example: "Natural, flowing speech" },
      { tip: "What are your plans ? /w?t ??r j?r plænz/", example: "Fast, connected speech" }
    ],
    shadowing: [
      { line: "It's a beautiful day today, isn't it?", emphasis: "beautiful day" },
      { line: "What are your plans for the weekend?", emphasis: "plans for the weekend" },
      { line: "I'm going to the park with my dog.", emphasis: "going to the park" },
      { line: "I like reading and cooking.", emphasis: "like reading" },
      { line: "Maybe we can play soccer together sometime?", emphasis: "play soccer together" }
    ],
    speakingPractice: {
      instruction: "Practice making small talk with 3 different people: a neighbor, a friend, and a colleague. Use weather, weekend, and hobbies as topics.",
      hints: [
        "Start with a greeting",
        "Comment on the weather",
        "Ask about their weekend or hobbies",
        "Share your own interests",
        "End with a friendly goodbye"
      ],
      followUpQuestions: [
        "How did the conversation start?",
        "What topics did you cover?",
        "Did you discover any shared interests?",
        "Would you feel comfortable continuing?"
      ]
    },
    rolePlay: {
      scenario: "You meet a neighbor in the elevator. Make small talk about the weather and your weekend plans.",
      prompts: [
        "Greet them",
        "Comment on the weather",
        "Ask about their weekend",
        "Share your own plans",
        "Say goodbye"
      ],
      partnerLines: [
        "Hi there!",
        "It's a beautiful day today, isn't it?",
        "Not much, just relaxing. You?",
        "That sounds nice!",
        "See you around!"
      ]
    },
    homework: {
      task: "Small Talk Challenge",
      description: "Have a 2-minute small talk conversation with 3 people this week. Use weather, weekend, or hobbies as topics. Write a brief reflection.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'It's a beautiful day' is usually used to:",
        questionZh: "'It's a beautiful day'????:",
        options: [
          { label: "A) Start small talk", labelZh: "A) ????", correct: true },
          { label: "B) Complain about weather", labelZh: "B) ????", correct: false },
          { label: "C) Say goodbye", labelZh: "C) ???", correct: false },
          { label: "D) Make plans", labelZh: "D) ????", correct: false }
        ],
        explanation: "'It's a beautiful day' is a very common way to start small talk.",
        explanationZh: "'It's a beautiful day'??????????????"
      },
      {
        id: "q2",
        question: "'What are your plans for the weekend?' asks about:",
        questionZh: "'What are your plans for the weekend?'????:",
        options: [
          { label: "A) Future weekend intentions", labelZh: "A) ???????", correct: true },
          { label: "B) Past weekend activities", labelZh: "B) ???????", correct: false },
          { label: "C) Current weather", labelZh: "C) ????", correct: false },
          { label: "D) Favorite hobbies", labelZh: "D) ??????", correct: false }
        ],
        explanation: "'What are your plans...?' asks about future intentions, not past activities.",
        explanationZh: "'What are your plans...?'?????????,????????"
      }
    ],
    review: [
      { key: "weather", prompt: "What's a common small talk topic?", answer: "Weather / It's a beautiful day" },
      { key: "plans", prompt: "How do you ask about weekend plans?", answer: "What are your plans for the weekend?" },
      { key: "hobbies", prompt: "How do you ask about hobbies?", answer: "Do you have any hobbies?" }
    ],
    humorNotes: [
      {
        context: "When small talk gets too deep",
        punchline: "A: What are your plans for the weekend? B: To exist. A: ...Same. B: Want to exist together? A: ...That's the nicest invitation I've ever gotten.",
        explanation: "Self-deprecating humor about having no plans is very common in small talk."
      }
    ],
    usefulExpressions: [
      { expression: "It's a beautiful day", meaning: "??????", usage: "????" },
      { expression: "What are your plans...?", meaning: "??????...?", usage: "??????" },
      { expression: "I love...", meaning: "???...", usage: "???????" },
      { expression: "That sounds nice", meaning: "?????", usage: "???????" },
      { expression: "Let's plan it soon", meaning: "???????", usage: "?????????" }
    ],
    commonMistakes: [
      {
        mistake: "? 'I am like reading'",
        correction: "????? 'I like reading'",
        explanation: "'Like' ??????,???? 'am'?"
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
    emoji: "?",
    description: "Ordering drinks, customizing your order, and paying at a café.",
    color: "from-amber-400 to-orange-400",
    level: "A1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Business coffee meetings" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard café interaction" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Chatting with a friend at a café" }
    ],
    warmUp: {
      title: "Warm-Up: Coffee Shop Culture",
      content: "Coffee shops are social hubs. In this lesson, you'll learn how to order confidently, customize your drink, and handle payment at a café.",
      contentZh: "?????????????,??????????????????,?????????????"
    },
    vocabulary: [
      {
        word: "Coffee",
        phonetic: "/'k?fi/",
        chinese: "??",
        pinyin: "ka fei",
        partOfSpeech: "noun",
        definitionEn: "A popular hot drink made from roasted coffee beans.",
        definitionZh: "????????????????",
        exampleEn: "I'd like a coffee, please.",
        exampleZh: "???????,???",
        register: "neutral"
      },
      {
        word: "Tea",
        phonetic: "/ti?/",
        chinese: "?",
        pinyin: "chá",
        partOfSpeech: "noun",
        definitionEn: "A hot drink made by infusing dried leaves in hot water.",
        definitionZh: "??????????????????",
        exampleEn: "I'd like a cup of tea.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Medium",
        phonetic: "/'mi?di?m/",
        chinese: "??",
        pinyin: "zhong bei",
        partOfSpeech: "noun",
        definitionEn: "A medium-sized drink, between small and large.",
        definitionZh: "????,??????????",
        exampleEn: "I'd like a medium latte.",
        exampleZh: "??????????",
        register: "neutral"
      },
      {
        word: "Large",
        phonetic: "/l??rd?/",
        chinese: "??",
        pinyin: "dà bei",
        partOfSpeech: "adjective",
        definitionEn: "The biggest size available.",
        definitionZh: "????????",
        exampleEn: "I'd like a large coffee.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "To go",
        phonetic: "/tu? go?/",
        chinese: "??",
        pinyin: "dài zou",
        partOfSpeech: "phrase",
        definitionEn: "Taking your order away with you instead of drinking it there.",
        definitionZh: "???????????????",
        exampleEn: "I'd like it to go, please.",
        exampleZh: "??????",
        register: "neutral"
      },
      {
        word: "Here",
        phonetic: "/h?r/",
        chinese: "???",
        pinyin: "zhè li he",
        partOfSpeech: "adverb",
        definitionEn: "Drinking your order at the café instead of taking it away.",
        definitionZh: "???????????????",
        exampleEn: "For here, please.",
        exampleZh: "??????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-coffee-shop-1",
          expression: "What can I get for you?",
          chinese: "??????",
          pinyin: "nín xiang dian shén me?",
          meaning: "The standard greeting from baristas asking what you'd like to order.",
          whenToUse: "This is the barista's line, not the customer's. Respond with your order.",
          whenNotToUse: "Don't use this as a customer — it's the server's line.",
          nativeFrequency: "Extremely common — you'll hear this in every coffee shop.",
          commonMistakes: [
            { mistake: "Customers saying this to baristas", correction: "The barista says this to you. You respond with your order." }
          ],
          pronunciation: "/w?t kæn a? get f?r ju?/",
          funnyExample: "A: What can I get for you? B: You, obviously. A: ...That's not what I meant.",
          memoryTrick: "Think: 'What = order' + 'can I get = can I serve' = 'what can I serve you?'",
          relatedExpressions: ["What would you like?", "What can I get started for you?", "Ready to order?"],
          collocations: ["can I get you", "what can I get", "what can I get for you"],
          miniQuiz: [
            { question: "'What can I get for you?' is said by:", options: ["The barista", "The customer", "Both", "Neither"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-coffee-shop-2",
          expression: "I'd like...",
          chinese: "???...",
          pinyin: "wo xiang yào...",
          meaning: "The standard polite way to order at a coffee shop.",
          whenToUse: "When ordering any drink or food at a café.",
          whenNotToUse: "Don't use 'I want...' — it's considered rude in service settings.",
          nativeFrequency: "Extremely common — the standard way to order politely.",
          commonMistakes: [
            { mistake: "Using 'I want...' instead", correction: "'I'd like...' or 'I'll have...' are much more polite" }
          ],
          pronunciation: "/a?d la?k/",
          funnyExample: "A: I want a latte! B: I'd like a latte, please. A: ...Much better. B: I also want a discount.",
          memoryTrick: "Think: 'd = would + like = want politely = would want politely",
          relatedExpressions: ["I'll have...", "Can I get...?", "Could I have...?"],
          collocations: ["I'd like", "I'd like a", "I'd like the"],
          miniQuiz: [
            { question: "'I'd like...' is:", options: ["Polite way to order", "Rude way to order", "A question", "An apology"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-coffee-shop-3",
          expression: "Hot or iced?",
          chinese: "???????",
          pinyin: "rè de hái shì bing de?",
          meaning: "Asking whether you want a hot or cold drink.",
          whenToUse: "When ordering drinks that can be served hot or cold.",
          whenNotToUse: "Don't use for drinks that are only served one way.",
          nativeFrequency: "Very common in coffee shops.",
          commonMistakes: [
            { mistake: "Saying 'Hot or cold?'", correction: "'Iced' is the standard coffee shop term, not 'cold'" }
          ],
          pronunciation: "/h?t ??r a?st/",
          funnyExample: "A: Hot or iced? B: Yes. A: ...You have to pick one.",
          memoryTrick: "Think: 'iced = cold coffee term' = 'use iced, not cold, at coffee shops'",
          relatedExpressions: ["Hot or cold?", "Warm or cold?", "Heated or chilled?"],
          collocations: ["hot or iced", "hot or cold", "iced coffee"],
          miniQuiz: [
            { question: "'Hot or iced?' means:", options: ["Do you want hot or cold?", "Is it spicy?", "Is it fresh?", "Do you want sugar?"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "What can I get for you", meaning: "?????", example: "What can I get for you?", register: "neutral", context: "Barista greeting" },
      { chunk: "I'd like", meaning: "???", example: "I'd like a medium latte.", register: "neutral", context: "Ordering" },
      { chunk: "to go", meaning: "??", example: "Can I have it to go?", register: "neutral", context: "Takeaway option" },
      { chunk: "for here", meaning: "???", example: "For here or to go?", register: "neutral", context: "Dine-in option" },
      { chunk: "That'll be", meaning: "??", example: "That'll be $4.50.", register: "neutral", context: "Pricing" }
    ],
    conversation: [
      { speaker: "Barista", line: "Hi! What can I get for you?", register: "neutral" },
      { speaker: "Customer", line: "Hi, I'd like a medium latte, please.", register: "neutral" },
      { speaker: "Barista", line: "Sure. Hot or iced?", register: "neutral" },
      { speaker: "Customer", line: "Iced, please. And can I have it to go?", register: "neutral" },
      { speaker: "Barista", line: "Absolutely. Would you like any food with that?", register: "neutral" },
      { speaker: "Customer", line: "No, just the coffee, thank you.", register: "neutral" },
      { speaker: "Barista", line: "That'll be $4.50. Name for the cup?", register: "neutral" },
      { speaker: "Customer", line: "It's under Anna. Thank you!", register: "neutral" },
      { speaker: "Barista", line: "Thanks, Anna! Your order will be ready in 2 minutes.", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "???", line: "?!???????" },
      { speaker: "??", line: "?,?????????,???" },
      { speaker: "???", line: "??????????" },
      { speaker: "??", line: "??,??????????" },
      { speaker: "???", line: "???????????" },
      { speaker: "??", line: "???,????,???" },
      { speaker: "???", line: "??4.50??????????" },
      { speaker: "??", line: "???" },
      { speaker: "???", line: "????!????2??????" }
    ],
    grammarInContext: [
      {
        title: "Polite Requests with 'I'd like'",
        explanation: "? 'I'd like...' (I would like) ?????",
        examples: [
          "I'd like a coffee.",
          "I'd like it iced.",
          "I'd like it to go."
        ]
      },
      {
        title: "Yes/No Questions with 'Would you'",
        explanation: "???? 'Would you like...?' ???????",
        examples: [
          "Would you like milk?",
          "Would you like a receipt?"
        ]
      }
    ],
    pronunciation: [
      { tip: "I'd like ? /a?d la?k/", example: "Contraction sounds natural" },
      { tip: "That'll be ? /ðæt?l bi?/", example: "Quick speech for pricing" }
    ],
    shadowing: [
      { line: "Hi! What can I get for you?", emphasis: "What can I get" },
      { line: "I'd like a medium latte, please.", emphasis: "I'd like" },
      { line: "Sure. Hot or iced?", emphasis: "Hot or iced" },
      { line: "Iced, please. And can I have it to go?", emphasis: "to go" }
    ],
    speakingPractice: {
      instruction: "Practice ordering at a coffee shop 3 times with different drinks: latte, americano, and iced tea. Use 'I'd like', specify size, and say 'to go'.",
      hints: [
        "Start with 'Hi'",
        "Use 'I'd like...'",
        "Choose hot or iced",
        "Remember to say 'thank you'"
      ],
      followUpQuestions: [
        "What did you order?",
        "Did you get it to go or for here?",
        "Was the barista friendly?",
        "How much did it cost?"
      ]
    },
    rolePlay: {
      scenario: "You are at a coffee shop. Order a drink, specify hot/iced and size, and ask for it to go.",
      prompts: [
        "Greet the barista",
        "Order your drink",
        "Choose hot or iced",
        "Say 'to go'",
        "Confirm your name"
      ],
      partnerLines: [
        "Hi! What can I get for you?",
        "Sure. Hot or iced?",
        "Absolutely. Would you like any food with that?",
        "That'll be $4.50. Name for the cup?",
        "Thanks, Anna! Your order will be ready in 2 minutes."
      ]
    },
    homework: {
      task: "Coffee Shop Visit",
      description: "Visit a coffee shop this week and order in English. Write down exactly what you said and what the barista said.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "Which is the most polite way to order?",
        questionZh: "??????????",
        options: [
          { label: "A) I'd like a latte, please.", labelZh: "A) ???????,???", correct: true },
          { label: "B) I want a latte.", labelZh: "B) ???????", correct: false },
          { label: "C) Give me a latte.", labelZh: "C) ???????", correct: false },
          { label: "D) Latte. Now.", labelZh: "D) ??????", correct: false }
        ],
        explanation: "'I'd like...' is the standard polite way to order. 'I want' sounds demanding.",
        explanationZh: "'I'd like...'???????????'I want'????????"
      },
      {
        id: "q2",
        question: "'Hot or iced?' asks about:",
        questionZh: "'Hot or iced?'????:",
        options: [
          { label: "A) Temperature preference", labelZh: "A) ????", correct: true },
          { label: "B) Size of the drink", labelZh: "B) ????", correct: false },
          { label: "C) Type of coffee", labelZh: "C) ????", correct: false },
          { label: "D) Payment method", labelZh: "D) ????", correct: false }
        ],
        explanation: "'Hot or iced?' asks whether you want your drink hot or cold.",
        explanationZh: "'Hot or iced?'?????????????"
      }
    ],
    review: [
      { key: "order", prompt: "What's the polite way to order?", answer: "I'd like..." },
      { key: "temperature", prompt: "How do you ask hot or cold?", answer: "Hot or iced?" },
      { key: "takeaway", prompt: "How do you say you want it to go?", answer: "To go / For here" }
    ],
    humorNotes: [
      {
        context: "When the barista spells your name wrong",
        punchline: "A: Name for the cup? B: Anna. A: *writes 'Enna'* B: ...That's not my name. A: It's what you sound like.",
        explanation: "Self-deprecating humor about baristas spelling names wrong is very common."
      }
    ],
    usefulExpressions: [
      { expression: "What can I get for you?", meaning: "??????", usage: "??????" },
      { expression: "I'd like...", meaning: "???...", usage: "????" },
      { expression: "Hot or iced?", meaning: "???????", usage: "????" },
      { expression: "To go / For here", meaning: "?? / ???", usage: "??????" },
      { expression: "That'll be...", meaning: "??...", usage: "????" },
      { expression: "Name for the cup?", meaning: "???????", usage: "??????" }
    ],
    commonMistakes: [
      {
        mistake: "? 'I want...' ??",
        correction: "??????? 'I'd like...'",
        explanation: "?????,'I'd like' ? 'I want' ??????"
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
    emoji: "??",
    description: "Answering calls, leaving messages, and basic phone etiquette.",
    color: "from-indigo-400 to-blue-400",
    level: "A1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Business or official calls" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard phone conversation" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Calling friends or family" }
    ],
    warmUp: {
      title: "Warm-Up: Phone Etiquette",
      content: "Phone calls have their own rules and vocabulary. In this lesson, you'll learn how to answer calls politely, ask for people, and leave messages.",
      contentZh: "????????????????????????????????????????"
    },
    vocabulary: [
      {
        word: "Hello?",
        phonetic: "/h??lo?/",
        chinese: "??",
        pinyin: "wéi?",
        partOfSpeech: "interjection",
        definitionEn: "The standard way to answer a phone call.",
        definitionZh: "?????????",
        exampleEn: "Hello? Who's calling?",
        exampleZh: "?????",
        register: "neutral"
      },
      {
        word: "Can I speak to...?",
        phonetic: "/kæn a? spi?k tu?/",
        chinese: "???...????",
        pinyin: "w? néng hé... shu? huà ma?",
        partOfSpeech: "question",
        definitionEn: "Asking to talk to a specific person on the phone.",
        definitionZh: "??????????????",
        exampleEn: "Can I speak to Mr. Johnson, please?",
        exampleZh: "????????????",
        register: "neutral"
      },
      {
        word: "Hold on",
        phonetic: "/ho?ld ?n/",
        chinese: "???",
        pinyin: "q?ng sh?o d?ng",
        partOfSpeech: "phrase",
        definitionEn: "Asking someone to wait on the phone.",
        definitionZh: "???????????",
        exampleEn: "Hold on, let me check.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "Message",
        phonetic: "/?mes?d?/",
        chinese: "??",
        pinyin: "liú yán",
        partOfSpeech: "noun",
        definitionEn: "Information left for someone who isn't available.",
        definitionZh: "???????????",
        exampleEn: "Can I take a message?",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Call back",
        phonetic: "/k??l bæk/",
        chinese: "???",
        pinyin: "huí diàn huà",
        partOfSpeech: "phrasal verb",
        definitionEn: "To return a phone call.",
        definitionZh: "????",
        exampleEn: "I'll call you back later.",
        exampleZh: "??????????",
        register: "neutral"
      },
      {
        word: "Busy",
        phonetic: "/?b?zi/",
        chinese: "?",
        pinyin: "máng",
        partOfSpeech: "adjective",
        definitionEn: "Occupied or unavailable.",
        definitionZh: "????????",
        exampleEn: "He's busy right now.",
        exampleZh: "??????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-phone-1",
          expression: "Can I speak to...?",
          chinese: "???...????",
          pinyin: "w? néng hé... shu? huà ma?",
          meaning: "The standard polite way to ask for someone on the phone.",
          whenToUse: "When calling and asking to speak to a specific person.",
          whenNotToUse: "Don't use 'I want to talk to...' — it's too direct and rude.",
          nativeFrequency: "Extremely common — the standard phone etiquette.",
          commonMistakes: [
            { mistake: "Using 'I want to talk to...' instead", correction: "'Can I speak to...?' is the polite, standard form" }
          ],
          pronunciation: "/kæn a? spi?k tu?/",
          funnyExample: "A: Can I speak to... myself? B: ...You're already here. A: I know, I just wanted to hear my own voice.",
          memoryTrick: "Think: 'speak = talk' + 'to = with' = 'can I talk with this person?'",
          relatedExpressions: ["May I speak to...?", "Is this...?", "I'd like to speak to..."],
          collocations: ["speak to", "speak to someone", "can I speak to"],
          miniQuiz: [
            { question: "'Can I speak to...?' is used to:", options: ["Ask for a person on the phone", "Say hello", "Leave a message", "Hang up"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-phone-2",
          expression: "Hold on",
          chinese: "???",
          pinyin: "q?ng sh?o d?ng",
          meaning: "Asking someone to wait on the phone.",
          whenToUse: "When you need to check something or get someone before continuing the call.",
          whenNotToUse: "Don't keep people on hold for more than a minute without checking back.",
          nativeFrequency: "Very common in phone conversations.",
          commonMistakes: [
            { mistake: "Using 'Wait' instead", correction: "'Hold on' is the standard phone phrase" }
          ],
          pronunciation: "/ho?ld ?n/",
          funnyExample: "A: Hold on. B: ...How long? A: Until you forget why you called. B: ...I already forgot.",
          memoryTrick: "Think: 'hold = keep' + 'on = continuing' = 'keep the call continuing while I check'",
          relatedExpressions: ["Wait a moment", "One moment please", "Let me check"],
          collocations: ["hold on", "hold on please", "hold on a moment"],
          miniQuiz: [
            { question: "'Hold on' means:", options: ["Wait a moment", "Hang up", "Call back", "Leave a message"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-phone-3",
          expression: "Take a message",
          chinese: "??",
          pinyin: "liú yán",
          meaning: "Writing down information for someone who isn't available to take the call.",
          whenToUse: "When the person you're calling isn't available and you want to leave information.",
          whenNotToUse: "Don't use if the person is available — talk to them directly.",
          nativeFrequency: "Very common in offices and professional settings.",
          commonMistakes: [
            { mistake: "Using 'Leave a message' when asking if you can", correction: "The receiver says 'Can I take a message?' — you say 'Yes, please tell him...'" }
          ],
          pronunciation: "/te?k ? ?mes?d?/",
          funnyExample: "A: Can I take a message? B: Yes. Tell him I said... wait, what did I want to say? A: ...I'll take a message that you called.",
          memoryTrick: "Think: 'take = write down' + 'message = information' = 'write down information'",
          relatedExpressions: ["Leave a message", "Take down a message", "Write this down"],
          collocations: ["take a message", "take a message for", "can I take a message"],
          miniQuiz: [
            { question: "'Can I take a message?' is said by:", options: ["The person answering the phone", "The caller", "Both", "Neither"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "Can I speak to", meaning: "???...???", example: "Can I speak to Mr. Johnson?", register: "neutral", context: "Asking for someone" },
      { chunk: "Hold on", meaning: "???", example: "Hold on, let me check.", register: "neutral", context: "Waiting on phone" },
      { chunk: "take a message", meaning: "??", example: "Can I take a message?", register: "neutral", context: "Taking message" },
      { chunk: "call back", meaning: "???", example: "I'll call you back later.", register: "neutral", context: "Returning call" },
      { chunk: "in a meeting", meaning: "???", example: "He's in a meeting.", register: "neutral", context: "Busy reason" }
    ],
    conversation: [
      { speaker: "Receptionist", line: "Hello, Smith & Co. How can I help you?", register: "neutral" },
      { speaker: "Caller", line: "Hi, can I speak to Mr. Johnson, please?", register: "neutral" },
      { speaker: "Receptionist", line: "I'm sorry, he's in a meeting. Can I take a message?", register: "neutral" },
      { speaker: "Caller", line: "Yes, please. Tell him Sarah called about the report.", register: "neutral" },
      { speaker: "Receptionist", line: "Sure. Does he need to call you back?", register: "neutral" },
      { speaker: "Caller", line: "Yes, that would be great. My number is 555-0142.", register: "neutral" },
      { speaker: "Receptionist", line: "Thank you. I'll make sure he calls you back.", register: "neutral" },
      { speaker: "Caller", line: "Thanks a lot. Goodbye!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "??????Smith???????????" },
      { speaker: "???", line: "???????????????" },
      { speaker: "??", line: "?????????????????" },
      { speaker: "???", line: "??????????????????" },
      { speaker: "??", line: "?????????????" },
      { speaker: "???", line: "??????????????555-0142?" },
      { speaker: "??", line: "??????????????" },
      { speaker: "???", line: "????????" }
    ],
    grammarInContext: [
      {
        title: "Polite Phone Questions",
        explanation: "????? 'Can I speak to...?' ? 'May I speak to...?' ?????",
        examples: [
          "Can I speak to John?",
          "May I speak to the manager?",
          "Is this 555-0199?"
        ]
      },
      {
        title: "Present Continuous for Ongoing Actions",
        explanation: "????????????????",
        examples: [
          "He's in a meeting.",
          "She's on another line.",
          "They're busy right now."
        ]
      }
    ],
    pronunciation: [
      { tip: "Can I speak to ? /kæn a? spi?k tu?/", example: "Natural, polite phone phrase" },
      { tip: "Hold on ? /ho?ld ?n/", example: "Quick transition" }
    ],
    shadowing: [
      { line: "Hello, Smith & Co. How can I help you?", emphasis: "How can I help you" },
      { line: "Can I speak to Mr. Johnson, please?", emphasis: "Can I speak to" },
      { line: "I'm sorry, he's in a meeting.", emphasis: "in a meeting" },
      { line: "Can I take a message?", emphasis: "take a message" }
    ],
    speakingPractice: {
      instruction: "Practice making a phone call to schedule a doctor's appointment. Use 'Can I speak to...', 'hold on', and 'call back'.",
      hints: [
        "Start with a polite greeting",
        "Ask for the doctor or receptionist",
        "Give your name and reason for calling",
        "Confirm the appointment time",
        "Say thank you and goodbye"
      ],
      followUpQuestions: [
        "Who did you ask for?",
        "Were they available?",
        "Did you leave a message?",
        "Did they call you back?"
      ]
    },
    rolePlay: {
      scenario: "You call a restaurant to make a reservation. The line is busy, so you leave a message with your name, phone number, and time.",
      prompts: [
        "Answer the phone politely",
        "Ask to make a reservation",
        "Handle the 'busy' situation",
        "Leave your name and number",
        "Say goodbye"
      ],
      partnerLines: [
        "Hello, Smith & Co. How can I help you?",
        "I'm sorry, he's in a meeting.",
        "Can I take a message?",
        "I'll make sure he calls you back."
      ]
    },
    homework: {
      task: "Real Phone Call",
      description: "Make a real phone call in English this week — to a restaurant, doctor, or business. Write down what you said.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'Can I speak to...?' is used to:",
        questionZh: "'Can I speak to...?'???",
        options: [
          { label: "A) Ask for a person on the phone", labelZh: "A) ??????", correct: true },
          { label: "B) Say hello", labelZh: "B) ???", correct: false },
          { label: "C) Leave a message", labelZh: "C) ??", correct: false },
          { label: "D) Hang up", labelZh: "D) ???", correct: false }
        ],
        explanation: "'Can I speak to...?' is the standard way to ask for someone on the phone.",
        explanationZh: "'Can I speak to...?'?????????????"
      },
      {
        id: "q2",
        question: "'Hold on' means:",
        questionZh: "'Hold on'????",
        options: [
          { label: "A) Wait a moment", labelZh: "A) ???", correct: true },
          { label: "B) Hang up", labelZh: "B) ???", correct: false },
          { label: "C) Call back", labelZh: "C) ???", correct: false },
          { label: "D) Leave a message", labelZh: "D) ??", correct: false }
        ],
        explanation: "'Hold on' means to wait a moment on the phone.",
        explanationZh: "'Hold on'???????????"
      }
    ],
    review: [
      { key: "ask", prompt: "How do you ask for someone on the phone?", answer: "Can I speak to...?" },
      { key: "wait", prompt: "How do you ask someone to wait?", answer: "Hold on" },
      { key: "message", prompt: "How do you offer to take a message?", answer: "Can I take a message?" }
    ],
    humorNotes: [
      {
        context: "When you call and forget what you wanted",
        punchline: "A: Can I speak to... wait, who was I calling? B: ...You called your own number. A: ...I thought I left a message for myself.",
        explanation: "Self-deprecating humor about phone confusion is very common."
      }
    ],
    usefulExpressions: [
      { expression: "Can I speak to...?", meaning: "???...????", usage: "????????" },
      { expression: "Hold on", meaning: "???", usage: "?????" },
      { expression: "Take a message", meaning: "??", usage: "????????????" },
      { expression: "Call back", meaning: "???", usage: "??????" },
      { expression: "I'll make sure...", meaning: "???...", usage: "??????" }
    ],
    commonMistakes: [
      {
        mistake: "????? 'I want to talk to...'",
        correction: "??????? 'Can I speak to...?'",
        explanation: "??????????'Can I speak to...?' ??????"
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
    emoji: "??",
    description: "Opening an account, checking balance, and basic banking transactions.",
    color: "from-emerald-400 to-green-400",
    level: "A1",
    estimatedTime: "12 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Banking appointments or loans" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard bank transactions" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Chatting with a bank teller" }
    ],
    warmUp: {
      title: "Warm-Up: Banking Basics",
      content: "Banks are essential in adult life. In this lesson, you'll learn how to open an account, ask about balances, and make deposits in English.",
      contentZh: "??????????????????????????????????????"
    },
    vocabulary: [
      {
        word: "Account",
        phonetic: "/??ka?nt/",
        chinese: "??",
        pinyin: "zhàng hù",
        partOfSpeech: "noun",
        definitionEn: "A financial arrangement with a bank to hold money.",
        definitionZh: "????????????????",
        exampleEn: "I'd like to open a new account.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "Balance",
        phonetic: "/?bæl?ns/",
        chinese: "??",
        pinyin: "yú é",
        partOfSpeech: "noun",
        definitionEn: "The amount of money in an account.",
        definitionZh: "???????",
        exampleEn: "What's my account balance?",
        exampleZh: "??????????",
        register: "neutral"
      },
      {
        word: "Deposit",
        phonetic: "/d??p?z?t/",
        chinese: "??",
        pinyin: "cún ku?n",
        partOfSpeech: "verb / noun",
        definitionEn: "To put money into a bank account.",
        definitionZh: "?????????",
        exampleEn: "I'd like to make a deposit.",
        exampleZh: "?????",
        register: "neutral"
      },
      {
        word: "Withdraw",
        phonetic: "/w?ð?dr??/",
        chinese: "??",
        pinyin: "q? ku?n",
        partOfSpeech: "verb",
        definitionEn: "To take money out of a bank account.",
        definitionZh: "?????????",
        exampleEn: "I need to withdraw some cash.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "Credit card",
        phonetic: "/?kred?t k??rd/",
        chinese: "???",
        pinyin: "xìn yòng k?",
        partOfSpeech: "noun",
        definitionEn: "A plastic card used to pay for things on credit.",
        definitionZh: "??????????",
        exampleEn: "Do you accept credit cards?",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "Receipt",
        phonetic: "/r??si?t/",
        chinese: "??",
        pinyin: "sh?u jù",
        partOfSpeech: "noun",
        definitionEn: "A paper showing proof of a transaction.",
        definitionZh: "?????????",
        exampleEn: "Here is your receipt.",
        exampleZh: "???????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-bank-1",
          expression: "I'd like to open...",
          chinese: "???...",
          pinyin: "w? xi?ng k?i...",
          meaning: "Expressing your desire to start a new account or service.",
          whenToUse: "When starting a new bank account, credit card, or other financial service.",
          whenNotToUse: "Don't use for existing accounts — use 'I'd like to check...' or 'I'd like to withdraw...' instead.",
          nativeFrequency: "Very common when starting new banking relationships.",
          commonMistakes: [
            { mistake: "Using 'I want to open...' instead", correction: "'I'd like to open...' is more polite and professional" }
          ],
          pronunciation: "/a?d la?k tu? ?o?p?n/",
          funnyExample: "A: I'd like to open a bank. B: ...We already opened it. A: I'd like to open an account.",
          memoryTrick: "Think: 'open = start' + 'account = bank relationship' = 'start a bank relationship'",
          relatedExpressions: ["I want to open...", "Can I open...?", "I'd like to start..."],
          collocations: ["open an account", "open a savings account", "open a checking account"],
          miniQuiz: [
            { question: "'I'd like to open...' means:", options: ["I want to start a new account", "I want to close my account", "I want to borrow money", "I want to work there"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-bank-2",
          expression: "Can I see your...?",
          chinese: "?????...??",
          pinyin: "néng kàn kan nín de... ma?",
          meaning: "Asking to see someone's identification or documents.",
          whenToUse: "When verifying identity at a bank, airport, or official venue.",
          whenNotToUse: "Don't use for personal items — only for official documents like ID, passport, etc.",
          nativeFrequency: "Very common in formal and official settings.",
          commonMistakes: [
            { mistake: "Using 'Show me your...' instead", correction: "'Can I see your...?' is polite; 'Show me...' is rude" }
          ],
          pronunciation: "/kæn a? si? j?r/",
          funnyExample: "A: Can I see your ID? B: Can I see your sense of humor? A: ...Sir, this is the bank.",
          memoryTrick: "Think: 'see = look at' + 'your = your document' = 'may I look at your document?'",
          relatedExpressions: ["May I see...?", "Could you show me...?", "Do you have your...?"],
          collocations: ["see your ID", "see your passport", "see your documents"],
          miniQuiz: [
            { question: "'Can I see your ID?' is:", options: ["A polite request for documents", "An offer to show your ID", "A statement", "An insult"], correct: 0 }
          ],
          register: "formal"
        },
        {
          id: "de-bank-3",
          expression: "Here you go",
          chinese: "??",
          pinyin: "g?i nín",
          meaning: "Giving something to someone in a friendly way.",
          whenToUse: "When handing over documents, money, or items.",
          whenNotToUse: "Don't use when receiving — use 'Thank you' instead.",
          nativeFrequency: "Extremely common everywhere.",
          commonMistakes: [
            { mistake: "Using in very formal writing", correction: "Use 'Please find attached' in formal emails" }
          ],
          pronunciation: "/h?? ju? ?o?/",
          funnyExample: "A: Give me the documents. B: Here you go! A: ...That's not how this works.",
          memoryTrick: "Think: 'here = take this' + 'you go = it's yours' = 'take this, it's yours'",
          relatedExpressions: ["There you go", "Here you are", "Here it is"],
          collocations: ["here you go", "here you go thanks", "here you go please"],
          miniQuiz: [
            { question: "'Here you go' means:", options: ["Take this / Here it is", "Go away", "Goodbye", "Come here"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "open an account", meaning: "??", example: "I'd like to open a savings account.", register: "neutral", context: "Banking" },
      { chunk: "Can I see your", meaning: "?????...?", example: "Can I see your ID?", register: "formal", context: "Verification" },
      { chunk: "Here you go", meaning: "??", example: "Here you go.", register: "neutral", context: "Handing something" },
      { chunk: "check my balance", meaning: "???", example: "Can I check my balance?", register: "neutral", context: "Account inquiry" },
      { chunk: "make a deposit", meaning: "??", example: "I'd like to make a deposit.", register: "neutral", context: "Depositing money" }
    ],
    conversation: [
      { speaker: "Customer", line: "Hello, I'd like to open a new account.", register: "neutral" },
      { speaker: "Banker", line: "Of course! What type of account would you like?", register: "neutral" },
      { speaker: "Customer", line: "I need a savings account, please.", register: "neutral" },
      { speaker: "Banker", line: "Great choice. Do you have your ID and proof of address?", register: "neutral" },
      { speaker: "Customer", line: "Yes, here they are. How much should I deposit to start?", register: "neutral" },
      { speaker: "Banker", line: "You can start with any amount. Can I see your ID, please?", register: "neutral" },
      { speaker: "Customer", line: "Sure, here is my passport.", register: "neutral" },
      { speaker: "Banker", line: "Thank you. Your account is now open. Here is your receipt.", register: "neutral" },
      { speaker: "Customer", line: "Thank you very much for your help!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "????????????" },
      { speaker: "????", line: "??????????????" },
      { speaker: "??", line: "?????????????" },
      { speaker: "????", line: "??????????????????" },
      { speaker: "??", line: "????????????????" },
      { speaker: "????", line: "?????????????????" },
      { speaker: "??", line: "??????????" },
      { speaker: "????", line: "???????????????????" },
      { speaker: "??", line: "?????????" }
    ],
    grammarInContext: [
      {
        title: "Polite Requests with 'I'd like'",
        explanation: "? 'I'd like to...' ???????",
        examples: [
          "I'd like to open an account.",
          "I'd like to check my balance.",
          "I'd like to withdraw some money."
        ]
      },
      {
        title: "Modal Verb 'Can' for Permission",
        explanation: "? 'Can I...?' ???????",
        examples: [
          "Can I see your ID?",
          "Can I use the ATM?",
          "Can I deposit cash here?"
        ]
      }
    ],
    pronunciation: [
      { tip: "I'd like ? /a?d la?k/", example: "Soft d sound, natural flow" },
      { tip: "Savings account ? /?se?v??z ??ka?nt/", example: "'Savings' has two syllables" }
    ],
    shadowing: [
      { line: "Hello, I'd like to open a new account.", emphasis: "I'd like to open" },
      { line: "What type of account would you like?", emphasis: "type of account" },
      { line: "I need a savings account, please.", emphasis: "savings account" },
      { line: "Do you have your ID and proof of address?", emphasis: "ID and proof of address" }
    ],
    speakingPractice: {
      instruction: "Practice opening a bank account and making a deposit. Use 'I'd like', 'Can I see', and 'Here you go'.",
      hints: [
        "Say what type of account you want",
        "Have your ID ready",
        "Ask about minimum deposit",
        "Confirm the account is open"
      ],
      followUpQuestions: [
        "What type of account did you open?",
        "What documents did you need?",
        "How much did you deposit?",
        "Was the banker helpful?"
      ]
    },
    rolePlay: {
      scenario: "You go to a bank to open your first savings account. Talk to the banker, provide your documents, and ask about the minimum deposit.",
      prompts: [
        "Greet the banker",
        "State what you want to do",
        "Provide ID and address proof",
        "Ask about the minimum deposit",
        "Thank them and leave"
      ],
      partnerLines: [
        "Hello, I'd like to open a new account.",
        "Of course! What type of account would you like?",
        "Great choice. Do you have your ID and proof of address?",
        "Thank you. Your account is now open."
      ]
    },
    homework: {
      task: "Bank Vocabulary Hunt",
      description: "Visit a bank or watch a banking video. Write down 10 banking words or phrases you hear. Practice using them in sentences.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'I'd like to open...' means:",
        questionZh: "'I'd like to open...'????",
        options: [
          { label: "A) I want to start a new account", labelZh: "A) ????????", correct: true },
          { label: "B) I want to close my account", labelZh: "B) ????????", correct: false },
          { label: "C) I want to borrow money", labelZh: "C) ????", correct: false },
          { label: "D) I want to work there", labelZh: "D) ???????", correct: false }
        ],
        explanation: "'I'd like to open...' means you want to start a new account or service.",
        explanationZh: "'I'd like to open...'???????????????"
      },
      {
        id: "q2",
        question: "'Can I see your ID?' is:",
        questionZh: "'Can I see your ID?'??",
        options: [
          { label: "A) A polite request for documents", labelZh: "A) ?????????", correct: true },
          { label: "B) An offer to show your ID", labelZh: "B) ????????", correct: false },
          { label: "C) A statement", labelZh: "C) ??", correct: false },
          { label: "D) An insult", labelZh: "D) ??", correct: false }
        ],
        explanation: "'Can I see your ID?' is a polite way to ask for someone's identification.",
        explanationZh: "'Can I see your ID?'??????????????????"
      }
    ],
    review: [
      { key: "open", prompt: "How do you say you want to start a new account?", answer: "I'd like to open..." },
      { key: "documents", prompt: "What documents do you need at a bank?", answer: "ID and proof of address" },
      { key: "deposit", prompt: "How do you say you want to deposit money?", answer: "I'd like to make a deposit" }
    ],
    humorNotes: [
      {
        context: "When the banker asks for your ID",
        punchline: "A: Can I see your ID? B: Here you go. A: ...This is a drawing of a cat. B: That's my emotional support cat. Her name is Account.",
        explanation: "Self-deprecating humor about banking confusion is very common."
      }
    ],
    usefulExpressions: [
      { expression: "I'd like to open...", meaning: "???...", usage: "????" },
      { expression: "What type of...?", meaning: "?????...?", usage: "????" },
      { expression: "Can I see your...?", meaning: "?????...??", usage: "??????" },
      { expression: "Here you go", meaning: "??", usage: "????" },
      { expression: "Savings account", meaning: "????", usage: "????" }
    ],
    commonMistakes: [
      {
        mistake: "'Open a bank' instead of 'open an account'",
        correction: "Correct: 'open an account'",
        explanation: "?? 'open a bank'??? 'open an account'(??)?"
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
    emoji: "??",
    description: "Describing symptoms, understanding advice, and basic medical conversation.",
    color: "from-teal-400 to-cyan-400",
    level: "A1",
    estimatedTime: "12 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Hospital or specialist visits" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard doctor consultation" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Chatting with a family doctor" }
    ],
    warmUp: {
      title: "Warm-Up: Medical English",
      content: "Visiting a doctor can be stressful, especially in a foreign language. In this lesson, you'll learn how to describe symptoms, understand doctor's advice, and ask questions clearly.",
      contentZh: "????????????????????????????????????????????????"
    },
    vocabulary: [
      {
        word: "Sick",
        phonetic: "/s?k/",
        chinese: "???",
        pinyin: "sh?ng bìng de",
        partOfSpeech: "adjective",
        definitionEn: "Not feeling well; ill.",
        definitionZh: "?????????",
        exampleEn: "I feel sick.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Headache",
        phonetic: "/?hede?k/",
        chinese: "??",
        pinyin: "tóu tòng",
        partOfSpeech: "noun",
        definitionEn: "Pain in the head.",
        definitionZh: "?????",
        exampleEn: "I have a bad headache.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Fever",
        phonetic: "/?fi?v?r/",
        chinese: "??",
        pinyin: "f? sh?o",
        partOfSpeech: "noun",
        definitionEn: "An abnormally high body temperature.",
        definitionZh: "???????",
        exampleEn: "I have a fever.",
        exampleZh: "?????",
        register: "neutral"
      },
      {
        word: "Medicine",
        phonetic: "/?med?s?n/",
        chinese: "?",
        pinyin: "yào",
        partOfSpeech: "noun",
        definitionEn: "Substance used to treat illness.",
        definitionZh: "??????????",
        exampleEn: "Take this medicine twice a day.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "Rest",
        phonetic: "/rest/",
        chinese: "??",
        pinyin: "xi? xi",
        partOfSpeech: "verb / noun",
        definitionEn: "To relax or sleep to recover health.",
        definitionZh: "???????????",
        exampleEn: "You should rest.",
        exampleZh: "??????",
        register: "neutral"
      },
      {
        word: "Appointment",
        phonetic: "/??p??ntm?nt/",
        chinese: "??",
        pinyin: "yù yu?",
        partOfSpeech: "noun",
        definitionEn: "A scheduled time to see a doctor.",
        definitionZh: "?????????",
        exampleEn: "I'd like to make an appointment.",
        exampleZh: "?????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-doctor-1",
          expression: "What seems to be the problem?",
          chinese: "??????",
          pinyin: "n? l? bù sh? fu?",
          meaning: "The standard way a doctor asks what's wrong with you.",
          whenToUse: "When a doctor or medical professional asks about your symptoms.",
          whenNotToUse: "Don't use this as a patient — this is the doctor's line.",
          nativeFrequency: "Very common in medical settings.",
          commonMistakes: [
            { mistake: "Using 'What is your problem?' which sounds rude", correction: "'What seems to be the problem?' is the polite, professional form" }
          ],
          pronunciation: "/w?t si?mz tu bi ð? ?pr?bl?m/",
          funnyExample: "A: What seems to be the problem? B: I have a serious case of being allergic to Mondays. A: ...I'll prescribe you a vacation.",
          memoryTrick: "Think: 'seems = appears' + 'problem = issue' = 'what issue appears to you?'",
          relatedExpressions: ["What's wrong?", "What's the matter?", "How are you feeling?"],
          collocations: ["seems to be", "what seems to be", "seems to be the problem"],
          miniQuiz: [
            { question: "'What seems to be the problem?' is asked by:", options: ["The doctor", "The patient", "Both", "Neither"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-doctor-2",
          expression: "I have a...",
          chinese: "??...",
          pinyin: "w? y?u...",
          meaning: "Describing a symptom or illness.",
          whenToUse: "When telling a doctor what's wrong with you.",
          whenNotToUse: "Don't use for general statements — only for health issues in medical contexts.",
          nativeFrequency: "Very common in doctor visits.",
          commonMistakes: [
            { mistake: "Using 'I am a headache' instead", correction: "Use 'I have a headache' — the symptom belongs to you, you don't become it" }
          ],
          pronunciation: "/a? hæv ?/",
          funnyExample: "A: I have a headache. B: I have a... case of the giggles. A: ...That's not a medical condition.",
          memoryTrick: "Think: 'have = experience' + 'symptom = feeling' = 'I experience this feeling'",
          relatedExpressions: ["I've got a...", "I'm feeling...", "I have been..."],
          collocations: ["have a headache", "have a fever", "have a cold"],
          miniQuiz: [
            { question: "'I have a headache' means:", options: ["I experience head pain", "I own a headache", "I am a headache", "I like headaches"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-doctor-3",
          expression: "Drink plenty of water",
          chinese: "???",
          pinyin: "du? h? shu?",
          meaning: "Common medical advice to stay hydrated.",
          whenToUse: "When a doctor gives you general health advice, or when you're sick.",
          whenNotToUse: "Don't use for serious conditions — always follow specific medical advice.",
          nativeFrequency: "Extremely common — the most common doctor's advice.",
          commonMistakes: [
            { mistake: "Using 'drink much water'", correction: "'Plenty of' is the standard phrase, not 'much'" }
          ],
          pronunciation: "/dr??k ?plenti ?v ?w??t?r/",
          funnyExample: "A: Drink plenty of water. B: Is that the cure for everything? A: ...Pretty much. B: What about a broken arm? A: ...Drink plenty of water and come back tomorrow.",
          memoryTrick: "Think: 'plenty = a lot of' + 'water = H2O' = 'drink lots of water'",
          relatedExpressions: ["Get plenty of rest", "Stay hydrated", "Drink lots of water"],
          collocations: ["plenty of water", "plenty of rest", "drink plenty"],
          miniQuiz: [
            { question: "'Drink plenty of water' means:", options: ["Drink a lot of water", "Drink a little water", "Avoid water", "Water is dangerous"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "What seems to be", meaning: "????", example: "What seems to be the problem?", register: "neutral", context: "Doctor asking" },
      { chunk: "I have a", meaning: "??", example: "I have a bad headache.", register: "neutral", context: "Describing symptoms" },
      { chunk: "How long", meaning: "??", example: "How long have you had this?", register: "neutral", context: "Duration question" },
      { chunk: "Take one pill", meaning: "???", example: "Take one pill three times a day.", register: "neutral", context: "Medicine instructions" },
      { chunk: "plenty of water", meaning: "????", example: "Drink plenty of water.", register: "neutral", context: "Medical advice" }
    ],
    conversation: [
      { speaker: "Doctor", line: "Hello, what seems to be the problem?", register: "neutral" },
      { speaker: "Patient", line: "Hi, I have a bad headache and I feel dizzy.", register: "neutral" },
      { speaker: "Doctor", line: "How long have you had these symptoms?", register: "neutral" },
      { speaker: "Patient", line: "Since yesterday. I also have a slight fever.", register: "neutral" },
      { speaker: "Doctor", line: "Let me check your temperature. Open your mouth, please.", register: "neutral" },
      { speaker: "Patient", line: "Is it serious?", register: "neutral" },
      { speaker: "Doctor", line: "Nothing too serious. You have a mild infection. I recommend rest and this medicine.", register: "neutral" },
      { speaker: "Patient", line: "How often should I take it?", register: "neutral" },
      { speaker: "Doctor", line: "Take one pill three times a day after meals. Drink plenty of water and rest well.", register: "neutral" },
      { speaker: "Patient", line: "Thank you, Doctor. I'll do that.", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "?????????" },
      { speaker: "??", line: "????????????????" },
      { speaker: "??", line: "??????????" },
      { speaker: "??", line: "???????????????" },
      { speaker: "??", line: "?????????????" },
      { speaker: "??", line: "????" },
      { speaker: "??", line: "???????????????????????" },
      { speaker: "??", line: "?????????" },
      { speaker: "??", line: "??????????????????????" },
      { speaker: "??", line: "?????????" }
    ],
    grammarInContext: [
      {
        title: "Present Perfect for Duration",
        explanation: "???????????????????????",
        examples: [
          "I have had a headache for two days.",
          "I have been feeling dizzy since morning.",
          "How long have you had the fever?"
        ]
      },
      {
        title: "Modal Verb 'Should' for Advice",
        explanation: "? 'should' ?????",
        examples: [
          "You should rest.",
          "You should drink more water.",
          "You should see a doctor."
        ]
      }
    ],
    pronunciation: [
      { tip: "What seems to be ? /w?t si?mz tu bi/", example: "Linking 'seems to'" },
      { tip: "Three times a day ? /?ri? ta?mz ? de?/", example: "Fast, natural speech" }
    ],
    shadowing: [
      { line: "Hello, what seems to be the problem?", emphasis: "what seems to be" },
      { line: "I have a bad headache and I feel dizzy.", emphasis: "bad headache" },
      { line: "How long have you had these symptoms?", emphasis: "How long" },
      { line: "Take one pill three times a day after meals.", emphasis: "three times a day" }
    ],
    speakingPractice: {
      instruction: "Practice visiting a doctor for three different problems: a cold, a stomachache, and a sore throat. Use 'I have a...' and ask 'What should I do?'.",
      hints: [
        "Start with 'Hello, what seems to be the problem?'",
        "Describe your symptom",
        "Ask how long it has lasted",
        "Follow the advice"
      ],
      followUpQuestions: [
        "What was your symptom?",
        "What did the doctor say?",
        "Did you understand the advice?",
        "Would you feel comfortable visiting a doctor in English?"
      ]
    },
    rolePlay: {
      scenario: "You are not feeling well. Visit a doctor, describe your symptoms, ask about the cause, and follow the doctor's advice.",
      prompts: [
        "Greet the doctor",
        "Describe your symptoms",
        "Answer questions about duration",
        "Ask for the diagnosis",
        "Repeat the advice"
      ],
      partnerLines: [
        "Hello, what seems to be the problem?",
        "I have a bad headache and I feel dizzy.",
        "How long have you had these symptoms?",
        "Nothing too serious. You have a mild infection."
      ]
    },
    homework: {
      task: "Medical Vocabulary",
      description: "Write down 5 medical symptoms and 5 pieces of medical advice in English. Practice using them with a partner.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'I have a headache' means:",
        questionZh: "'I have a headache'????",
        options: [
          { label: "A) I experience head pain", labelZh: "A) ?????", correct: true },
          { label: "B) I own a headache", labelZh: "B) ?????", correct: false },
          { label: "C) I am a headache", labelZh: "C) ??????", correct: false },
          { label: "D) I like headaches", labelZh: "D) ?????", correct: false }
        ],
        explanation: "'I have a headache' means you are experiencing head pain.",
        explanationZh: "'I have a headache'?????????????"
      },
      {
        id: "q2",
        question: "'Drink plenty of water' means:",
        questionZh: "'Drink plenty of water'????",
        options: [
          { label: "A) Drink a lot of water", labelZh: "A) ???", correct: true },
          { label: "B) Drink a little water", labelZh: "B) ????", correct: false },
          { label: "C) Avoid water", labelZh: "C) ????", correct: false },
          { label: "D) Water is dangerous", labelZh: "D) ?????", correct: false }
        ],
        explanation: "'Drink plenty of water' means to drink a large amount of water.",
        explanationZh: "'Drink plenty of water'????????"
      }
    ],
    review: [
      { key: "symptom", prompt: "How do you say you have a headache?", answer: "I have a headache" },
      { key: "duration", prompt: "How do you ask how long someone has been sick?", answer: "How long have you had...?" },
      { key: "advice", prompt: "What's common doctor's advice?", answer: "Drink plenty of water and rest" }
    ],
    humorNotes: [
      {
        context: "When the doctor gives you obvious advice",
        punchline: "A: Drink plenty of water and rest. B: ...That's not a diagnosis, that's being alive. A: ...Then keep doing that.",
        explanation: "Self-deprecating humor about generic medical advice is very common."
      }
    ],
    usefulExpressions: [
      { expression: "What seems to be the problem?", meaning: "??????", usage: "??????" },
      { expression: "I have a...", meaning: "??...", usage: "????" },
      { expression: "How long...?", meaning: "????", usage: "??????" },
      { expression: "Take one pill...", meaning: "???...", usage: "??????" },
      { expression: "Drink plenty of water", meaning: "???", usage: "????" }
    ],
    commonMistakes: [
      {
        mistake: "'I have a headache since yesterday'",
        correction: "'I have had a headache since yesterday'",
        explanation: "????????????????????????? 'have had'?"
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
    emoji: "??",
    description: "Scheduling, rescheduling, and confirming appointments by phone or in person.",
    color: "from-purple-400 to-indigo-400",
    level: "A1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Business or medical appointments" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard appointment scheduling" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Personal appointments with friends" }
    ],
    warmUp: {
      title: "Warm-Up: Appointment Language",
      content: "Making appointments is an essential life skill. In this lesson, you'll learn how to schedule, confirm, and manage appointments confidently.",
      contentZh: "??????????????????????????????????????"
    },
    vocabulary: [
      {
        word: "Appointment",
        phonetic: "/??p??ntm?nt/",
        chinese: "??",
        pinyin: "yù yu?",
        partOfSpeech: "noun",
        definitionEn: "A scheduled time to meet or see someone.",
        definitionZh: "?????????????",
        exampleEn: "I'd like to make an appointment.",
        exampleZh: "?????",
        register: "neutral"
      },
      {
        word: "Available",
        phonetic: "/??ve?l?bl/",
        chinese: "???",
        pinyin: "y?u kòng de",
        partOfSpeech: "adjective",
        definitionEn: "Free to meet or do something at a particular time.",
        definitionZh: "??????????????",
        exampleEn: "Are you available on Friday?",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Time slot",
        phonetic: "/ta?m sl?t/",
        chinese: "???",
        pinyin: "shí ji?n duàn",
        partOfSpeech: "noun",
        definitionEn: "A specific period of time available for an appointment.",
        definitionZh: "????????????",
        exampleEn: "We have a 10:00 time slot available.",
        exampleZh: "???10:00???????",
        register: "neutral"
      },
      {
        word: "Confirm",
        phonetic: "/k?n?f??rm/",
        chinese: "??",
        pinyin: "què rèn",
        partOfSpeech: "verb",
        definitionEn: "To verify that an appointment is still on.",
        definitionZh: "???????????",
        exampleEn: "I'd like to confirm my appointment.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "Reschedule",
        phonetic: "/ri???edju?l/",
        chinese: "??",
        pinyin: "g?i q?",
        partOfSpeech: "verb",
        definitionEn: "To change the time of an appointment.",
        definitionZh: "????????",
        exampleEn: "I need to reschedule my appointment.",
        exampleZh: "??????????",
        register: "neutral"
      },
      {
        word: "Cancellation",
        phonetic: "/?kæns??le??n/",
        chinese: "??",
        pinyin: "q? xi?o",
        partOfSpeech: "noun",
        definitionEn: "The act of cancelling an appointment.",
        definitionZh: "????????",
        exampleEn: "I need to make a cancellation.",
        exampleZh: "??????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-appointment-1",
          expression: "I'd like to make an appointment",
          chinese: "????",
          pinyin: "w? xi?ng yù yu?",
          meaning: "Expressing your desire to schedule a meeting or visit.",
          whenToUse: "When calling or visiting to schedule an appointment.",
          whenNotToUse: "Don't use for casual meetups with friends — use 'Let's meet...' instead.",
          nativeFrequency: "Very common in professional and medical settings.",
          commonMistakes: [
            { mistake: "Using 'I want to make an appointment'", correction: "'I'd like to make...' is more polite and professional" }
          ],
          pronunciation: "/a?d la?k tu? me?k ?n ??p??ntm?nt/",
          funnyExample: "A: I'd like to make an appointment. B: For what? A: To tell you I'd like to make an appointment. B: ...That's the appointment.",
          memoryTrick: "Think: 'make = create' + 'appointment = scheduled time' = 'create a scheduled time'",
          relatedExpressions: ["Can I make an appointment?", "I need to schedule...", "I'd like to book..."],
          collocations: ["make an appointment", "make an appointment with", "book an appointment"],
          miniQuiz: [
            { question: "'I'd like to make an appointment' means:", options: ["I want to schedule a meeting", "I want to cancel", "I want to reschedule", "I want to complain"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-appointment-2",
          expression: "What day works best for you?",
          chinese: "????????",
          pinyin: "n? ti?n duì n? zuì hé shì?",
          meaning: "Asking someone what day is most convenient for them.",
          whenToUse: "When scheduling an appointment and checking the other person's availability.",
          whenNotToUse: "Don't use if you're the only one involved — just pick a day.",
          nativeFrequency: "Very common in scheduling.",
          commonMistakes: [
            { mistake: "Using 'What day is best for you?'", correction: "'Works best' is more natural in English" }
          ],
          pronunciation: "/w?t de? w??ks best f?r ju?/",
          funnyExample: "A: What day works best for you? B: All of them. A: ...Then let's meet every day. B: ...I was joking.",
          memoryTrick: "Think: 'works best = most convenient' = 'which day is most convenient?'",
          relatedExpressions: ["When are you free?", "What's your availability?", "When works for you?"],
          collocations: ["works best for you", "works for me", "what day works"],
          miniQuiz: [
            { question: "'What day works best for you?' asks about:", options: ["Your availability", "Your favorite day", "Your work schedule", "Your birthday"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-appointment-3",
          expression: "Your appointment is confirmed",
          chinese: "???????",
          pinyin: "nín de yù yu? y? què rèn",
          meaning: "Telling someone that their appointment has been officially scheduled.",
          whenToUse: "After scheduling an appointment, to confirm it's been recorded.",
          whenNotToUse: "Don't use before actually scheduling — only after the appointment is set.",
          nativeFrequency: "Very common in confirmation messages and emails.",
          commonMistakes: [
            { mistake: "Using 'Your appointment is okay' instead", correction: "'Confirmed' is the standard professional term" }
          ],
          pronunciation: "/j?r ??p??ntm?nt ?z k?n?f??rmd/",
          funnyExample: "A: Your appointment is confirmed. B: For when? A: ...I forgot to confirm the time. B: ...Then it's not confirmed.",
          memoryTrick: "Think: 'confirmed = officially set' = 'it's definitely scheduled'",
          relatedExpressions: ["Your booking is confirmed", "You're all set", "Appointment confirmed"],
          collocations: ["appointment is confirmed", "booking confirmed", "you're confirmed"],
          miniQuiz: [
            { question: "'Your appointment is confirmed' means:", options: ["Your appointment is officially scheduled", "Your appointment might happen", "Your appointment is cancelled", "Your appointment is free"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "make an appointment", meaning: "??", example: "I'd like to make an appointment.", register: "neutral", context: "Scheduling" },
      { chunk: "works best for you", meaning: "?????", example: "What day works best for you?", register: "neutral", context: "Scheduling" },
      { chunk: "anything available", meaning: "???", example: "Do you have anything available on Friday?", register: "neutral", context: "Availability" },
      { chunk: "works for me", meaning: "????", example: "11:30 works for me.", register: "neutral", context: "Confirming time" },
      { chunk: "appointment is confirmed", meaning: "?????", example: "Your appointment is confirmed.", register: "neutral", context: "Confirmation" }
    ],
    conversation: [
      { speaker: "Receptionist", line: "Good morning! How can I help you?", register: "neutral" },
      { speaker: "Customer", line: "Hi, I'd like to make an appointment, please.", register: "neutral" },
      { speaker: "Receptionist", line: "Sure. What day works best for you?", register: "neutral" },
      { speaker: "Customer", line: "Do you have anything available on Friday morning?", register: "neutral" },
      { speaker: "Receptionist", line: "Let me check. Yes, we have 10:00 and 11:30.", register: "neutral" },
      { speaker: "Customer", line: "11:30 is perfect. Thank you!", register: "neutral" },
      { speaker: "Receptionist", line: "Great. Can I get your name and phone number please?", register: "neutral" },
      { speaker: "Customer", line: "My name is Lisa, and my number is 555-0199.", register: "neutral" },
      { speaker: "Receptionist", line: "Thank you, Lisa! Your appointment is confirmed for Friday at 11:30.", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "???", line: "????????????" },
      { speaker: "??", line: "????????" },
      { speaker: "???", line: "???????????" },
      { speaker: "??", line: "????????" },
      { speaker: "???", line: "???????????10:00?11:30?" },
      { speaker: "??", line: "11:30??????" },
      { speaker: "???", line: "????????????????" },
      { speaker: "??", line: "??Lisa????555-0199?" },
      { speaker: "???", line: "??Lisa???????????11:30?" }
    ],
    grammarInContext: [
      {
        title: "Modal Verbs for Possibility and Offers",
        explanation: "? 'Can I...?' ? 'Do you have...?' ????????",
        examples: [
          "Can I make an appointment?",
          "Do you have anything available on Monday?",
          "Can I speak to the manager?"
        ]
      },
      {
        title: "Present Simple for Scheduled Events",
        explanation: "????????????????",
        examples: [
          "My appointment is on Friday.",
          "The meeting starts at 10:00.",
          "I have a dental appointment tomorrow."
        ]
      }
    ],
    pronunciation: [
      { tip: "I'd like ? /a?d la?k/", example: "Natural, polite request" },
      { tip: "Available ? /??ve?l?bl/", example: "Stress on second syllable" }
    ],
    shadowing: [
      { line: "Hi, I'd like to make an appointment, please.", emphasis: "I'd like to make" },
      { line: "What day works best for you?", emphasis: "works best" },
      { line: "Do you have anything available on Friday morning?", emphasis: "anything available" },
      { line: "11:30 is perfect.", emphasis: "11:30 is perfect" }
    ],
    speakingPractice: {
      instruction: "Practice scheduling three appointments: a dentist, a hairdresser, and a massage. Use 'I'd like to make an appointment' and 'Do you have anything available...?'.",
      hints: [
        "Call or visit in person",
        "Ask for availability",
        "Pick a time that works",
        "Confirm the appointment",
        "Thank them politely"
      ],
      followUpQuestions: [
        "What appointments did you schedule?",
        "What times were available?",
        "Did you have to reschedule?",
        "How did you confirm?"
      ]
    },
    rolePlay: {
      scenario: "You need to schedule a dentist appointment. Call the clinic, ask for Friday, confirm 11:30, and write down the details.",
      prompts: [
        "Call and greet",
        "Ask to make an appointment",
        "Suggest a day",
        "Choose an available time",
        "Confirm your name and time"
      ],
      partnerLines: [
        "Good morning! How can I help you?",
        "Sure. What day works best for you?",
        "Let me check. Yes, we have 10:00 and 11:30.",
        "Thank you, Lisa! Your appointment is confirmed for Friday at 11:30."
      ]
    },
    homework: {
      task: "Real Appointment",
      description: "Actually schedule a real appointment this week in English — dentist, doctor, or any service. Write down what you said.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'I'd like to make an appointment' means:",
        questionZh: "'I'd like to make an appointment'????",
        options: [
          { label: "A) I want to schedule a meeting", labelZh: "A) ??????", correct: true },
          { label: "B) I want to cancel", labelZh: "B) ????", correct: false },
          { label: "C) I want to reschedule", labelZh: "C) ????", correct: false },
          { label: "D) I want to complain", labelZh: "D) ????", correct: false }
        ],
        explanation: "'I'd like to make an appointment' means you want to schedule a meeting or visit.",
        explanationZh: "'I'd like to make an appointment'?????????????"
      },
      {
        id: "q2",
        question: "'Your appointment is confirmed' means:",
        questionZh: "'Your appointment is confirmed'????",
        options: [
          { label: "A) Your appointment is officially scheduled", labelZh: "A) ?????????", correct: true },
          { label: "B) Your appointment might happen", labelZh: "B) ?????????", correct: false },
          { label: "C) Your appointment is cancelled", labelZh: "C) ???????", correct: false },
          { label: "D) Your appointment is free", labelZh: "D) ??????", correct: false }
        ],
        explanation: "'Your appointment is confirmed' means your appointment is officially scheduled.",
        explanationZh: "'Your appointment is confirmed'?????????????"
      }
    ],
    review: [
      { key: "schedule", prompt: "How do you say you want to schedule a meeting?", answer: "I'd like to make an appointment" },
      { key: "availability", prompt: "How do you ask if someone is free on Friday?", answer: "Do you have anything available on Friday?" },
      { key: "confirm", prompt: "How do you confirm an appointment?", answer: "Your appointment is confirmed" }
    ],
    humorNotes: [
      {
        context: "When you forget your appointment",
        punchline: "A: Your appointment is confirmed for Friday at 11:30. B: ...I forgot I made an appointment. A: ...That's why we confirm them.",
        explanation: "Self-deprecating humor about forgetting appointments is very common."
      }
    ],
    usefulExpressions: [
      { expression: "I'd like to make an appointment", meaning: "????", usage: "????" },
      { expression: "What day works best for you?", meaning: "????????", usage: "??????" },
      { expression: "Do you have anything available...?", meaning: "...????", usage: "??????" },
      { expression: "That works for me", meaning: "?????", usage: "???????" },
      { expression: "Your appointment is confirmed", meaning: "???????", usage: "????" }
    ],
    commonMistakes: [
      {
        mistake: "'Make an appointment with the doctor' ?? 'make a doctor appointment'",
        correction: "??????? 'make an appointment with the doctor'",
        explanation: "???'appointment'???? 'an'?"
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
  },
  {
    id: "hotel-checkin",
    title: "At the Hotel",
    emoji: "??",
    description: "Checking in, asking about amenities, and checking out at a hotel.",
    color: "from-blue-400 to-indigo-400",
    level: "A1",
    estimatedTime: "12 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Luxury hotel or business travel" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard hotel check-in" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Budget hotel or hostel" }
    ],
    warmUp: {
      title: "Warm-Up: Hotel English",
      content: "Checking into a hotel is a common travel situation. In this lesson, you'll learn how to check in, ask about amenities, and check out confidently.",
      contentZh: "????????????????????????????????????????"
    },
    vocabulary: [
      {
        word: "Reservation",
        phonetic: "/?rez?r?ve??n/",
        chinese: "??",
        pinyin: "yù dìng",
        partOfSpeech: "noun",
        definitionEn: "A booking made in advance for a hotel room.",
        definitionZh: "????????????",
        exampleEn: "I have a reservation under Thompson.",
        exampleZh: "??Thompson???????",
        register: "neutral"
      },
      {
        word: "Check in",
        phonetic: "/t?ek ?n/",
        chinese: "????",
        pinyin: "bàn l? rù zhù",
        partOfSpeech: "phrase",
        definitionEn: "The process of registering at a hotel and getting your room key.",
        definitionZh: "????????????????",
        exampleEn: "What time is check-in?",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Room",
        phonetic: "/ru?m/",
        chinese: "??",
        pinyin: "fáng ji?n",
        partOfSpeech: "noun",
        definitionEn: "A private space in a hotel for guests.",
        definitionZh: "??????????????",
        exampleEn: "My room is 305.",
        exampleZh: "?????305?",
        register: "neutral"
      },
      {
        word: "Key",
        phonetic: "/ki?/",
        chinese: "??/??",
        pinyin: "yào shi / fáng k?",
        partOfSpeech: "noun",
        definitionEn: "A card or physical key to access your hotel room.",
        definitionZh: "??????????????",
        exampleEn: "Here is your room key.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Breakfast",
        phonetic: "/?brekf?st/",
        chinese: "??",
        pinyin: "z?o c?n",
        partOfSpeech: "noun",
        definitionEn: "The first meal of the day, often served at hotels.",
        definitionZh: "????????????????",
        exampleEn: "Breakfast is served from 7 to 10.",
        exampleZh: "???????7??10??",
        register: "neutral"
      },
      {
        word: "Check out",
        phonetic: "/t?ek a?t/",
        chinese: "????",
        pinyin: "bàn l? tuì fáng",
        partOfSpeech: "phrase",
        definitionEn: "The process of leaving the hotel and paying your bill.",
        definitionZh: "???????????",
        exampleEn: "Check-out time is 11 AM.",
        exampleZh: "???????11??",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-hotel-1",
          expression: "I have a reservation under...",
          chinese: "????????...",
          pinyin: "w? yù dìng le, míng zi shì...",
          meaning: "Telling the hotel your reservation name to check in.",
          whenToUse: "When arriving at a hotel and checking in.",
          whenNotToUse: "Don't use for walk-ins without reservations — say 'I'd like to make a reservation' instead.",
          nativeFrequency: "Extremely common — the standard check-in phrase.",
          commonMistakes: [
            { mistake: "Saying 'I booked a room' without the name", correction: "Always include the reservation name: 'under the name...'" }
          ],
          pronunciation: "/a? hæv ? ?rez?r?ve??n ??nd?r/",
          funnyExample: "A: I have a reservation under... 'Steve'. B: I see 'Steeve' with two e's. A: ...That's a nickname.",
          memoryTrick: "Think: 'reservation = booking' + 'under = in the name of' = 'my booking is in the name of...'",
          relatedExpressions: ["I booked a room", "Do you have my reservation?", "I'd like to check in"],
          collocations: ["have a reservation", "reservation under", "reservation for"],
          miniQuiz: [
            { question: "'I have a reservation under...' is used to:", options: ["Check into a hotel", "Order food", "Make a complaint", "Ask for directions"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-hotel-2",
          expression: "Could I see your...?",
          chinese: "?????...??",
          pinyin: "néng kàn kan nín de... ma?",
          meaning: "Politely asking to see someone's ID or documents.",
          whenToUse: "When verifying identity at hotels, banks, or official places.",
          whenNotToUse: "Don't use for casual requests — it's too formal for friends.",
          nativeFrequency: "Very common in formal service interactions.",
          commonMistakes: [
            { mistake: "Using 'Show me your...' which sounds rude", correction: "'Could I see your...?' is polite and professional" }
          ],
          pronunciation: "/k?d a? si? j?r/",
          funnyExample: "A: Could I see your ID? B: Could I see your sense of humor? A: ...Sir, this is the hotel lobby.",
          memoryTrick: "Think: 'could = may' + 'see = look at' = 'may I look at your document?'",
          relatedExpressions: ["Can I see your...?", "May I see your...?", "Do you have your...?"],
          collocations: ["see your ID", "see your passport", "see your credit card"],
          miniQuiz: [
            { question: "'Could I see your ID?' is:", options: ["A polite request for documents", "An offer to show your ID", "A statement", "An insult"], correct: 0 }
          ],
          register: "formal"
        },
        {
          id: "de-hotel-3",
          expression: "Enjoy your stay",
          chinese: "??????",
          pinyin: "zhù nín rù zhù yú kuài",
          meaning: "A standard farewell from hotel staff to guests.",
          whenToUse: "When hotel staff say goodbye to guests after check-in.",
          whenNotToUse: "Don't use as a guest to staff — it's their line to you.",
          nativeFrequency: "Very common — standard hotel farewell.",
          commonMistakes: [
            { mistake: "Using 'Have a good stay' which is okay but less common", correction: "'Enjoy your stay' is the standard hotel phrase" }
          ],
          pronunciation: "/?n?d??? j?r ste?/",
          funnyExample: "A: Enjoy your stay! B: I'll try! A: ...That's not what I meant. B: I know, but the Wi-Fi password is 'enjoyyourstay'.",
          memoryTrick: "Think: 'enjoy = have a good' + 'stay = time here' = 'have a good time here'",
          relatedExpressions: ["Have a pleasant stay", "Enjoy your visit", "Welcome to the hotel"],
          collocations: ["enjoy your stay", "enjoy your visit", "enjoy your time"],
          miniQuiz: [
            { question: "'Enjoy your stay' is said by:", options: ["Hotel staff to guests", "Guests to staff", "Both", "Neither"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "have a reservation", meaning: "???", example: "I have a reservation under Thompson.", register: "neutral", context: "Check-in" },
      { chunk: "under the name", meaning: "?...??", example: "Under the name Smith.", register: "neutral", context: "Reservation name" },
      { chunk: "Could I see your", meaning: "?????...?", example: "Could I see your ID?", register: "formal", context: "Verification" },
      { chunk: "Here you go", meaning: "??", example: "Here you go.", register: "neutral", context: "Handing documents" },
      { chunk: "Enjoy your stay", meaning: "??????", example: "Enjoy your stay!", register: "neutral", context: "Farewell" }
    ],
    conversation: [
      { speaker: "Receptionist", line: "Good afternoon! Welcome to the Grand Hotel. Do you have a reservation?", register: "neutral" },
      { speaker: "Guest", line: "Yes, under the name Thompson. I booked a double room for three nights.", register: "neutral" },
      { speaker: "Receptionist", line: "Let me check... Yes, here it is. Could I see your ID and credit card, please?", register: "neutral" },
      { speaker: "Guest", line: "Sure, here you go.", register: "neutral" },
      { speaker: "Receptionist", line: "Thank you. Your room is 305 on the third floor. Breakfast is served from 7 to 10 in the restaurant downstairs.", register: "neutral" },
      { speaker: "Guest", line: "Perfect. Is Wi-Fi free?", register: "neutral" },
      { speaker: "Receptionist", line: "Yes, the password is on the back of your key card. Enjoy your stay!", register: "neutral" },
      { speaker: "Guest", line: "Thank you so much!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "???", line: "????????Grand?????????" },
      { speaker: "??", line: "????Thompson??????????????????" },
      { speaker: "???", line: "?????...?????????????????????" },
      { speaker: "??", line: "??????" },
      { speaker: "???", line: "????????305??????????????????7??10??" },
      { speaker: "??", line: "???Wi-Fi????" },
      { speaker: "???", line: "??????????????????" },
      { speaker: "??", line: "?????" }
    ],
    grammarInContext: [
      {
        title: "Present Perfect for Recent Actions",
        explanation: "?????????????????????????",
        examples: [
          "I have booked a room.",
          "I have just arrived.",
          "Has the room been cleaned?"
        ]
      },
      {
        title: "Prepositions of Place",
        explanation: "??????????",
        examples: [
          "The room is on the third floor.",
          "The restaurant is downstairs.",
          "The elevator is next to the lobby."
        ]
      }
    ],
    pronunciation: [
      { tip: "Reservation ? /?rez?r?ve??n/", example: "Four syllables, stress on 'vey'" },
      { tip: "Here you go ? /h?? ju? ?o?/", example: "Fast, natural speech" }
    ],
    shadowing: [
      { line: "Good afternoon! Welcome to the Grand Hotel. Do you have a reservation?", emphasis: "Do you have a reservation" },
      { line: "Yes, under the name Thompson. I booked a double room for three nights.", emphasis: "under the name Thompson" },
      { line: "Let me check... Yes, here it is. Could I see your ID and credit card, please?", emphasis: "Could I see your ID" },
      { line: "Your room is 305 on the third floor.", emphasis: "room is 305" },
      { line: "Breakfast is served from 7 to 10 in the restaurant downstairs.", emphasis: "Breakfast is served" }
    ],
    speakingPractice: {
      instruction: "Practice checking into a hotel for a 2-night stay. Use 'I have a reservation', ask about breakfast, Wi-Fi, and checkout time.",
      hints: [
        "State your reservation name",
        "Show your ID",
        "Ask about amenities",
        "Confirm your room number"
      ],
      followUpQuestions: [
        "What was the hotel name?",
        "What floor was your room on?",
        "What amenities did they mention?",
        "What time was breakfast served?"
      ]
    },
    rolePlay: {
      scenario: "You arrive at a hotel for a 3-night stay. Check in, ask about breakfast time, Wi-Fi, and the room location.",
      prompts: [
        "Tell them you have a reservation",
        "Provide your name and ID",
        "Ask about breakfast and Wi-Fi",
        "Thank them and go to your room"
      ],
      partnerLines: [
        "Good afternoon! Welcome to the Grand Hotel. Do you have a reservation?",
        "Let me check... Yes, here it is. Could I see your ID and credit card, please?",
        "Thank you. Your room is 305 on the third floor.",
        "Yes, the password is on the back of your key card. Enjoy your stay!"
      ]
    },
    homework: {
      task: "Hotel Vocabulary",
      description: "Look up 10 hotel-related words and practice using them in sentences. Think about your last hotel stay and describe it in English.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'I have a reservation under...' means:",
        questionZh: "'I have a reservation under...'????",
        options: [
          { label: "A) I have a booking in a specific name", labelZh: "A) ??????????????", correct: true },
          { label: "B) I want to make a reservation", labelZh: "B) ????", correct: false },
          { label: "C) I want to cancel", labelZh: "C) ????", correct: false },
          { label: "D) I'm looking for a hotel", labelZh: "D) ?????", correct: false }
        ],
        explanation: "'I have a reservation under...' means you have a booking in a specific name.",
        explanationZh: "'I have a reservation under...'??????????????????"
      },
      {
        id: "q2",
        question: "'Enjoy your stay' is said by:",
        questionZh: "'Enjoy your stay'??",
        options: [
          { label: "A) Hotel staff to guests", labelZh: "A) ??????????", correct: true },
          { label: "B) Guests to staff", labelZh: "B) ????????", correct: false },
          { label: "C) Both", labelZh: "C) ??????", correct: false },
          { label: "D) Neither", labelZh: "D) ???", correct: false }
        ],
        explanation: "'Enjoy your stay' is a standard farewell from hotel staff to guests.",
        explanationZh: "'Enjoy your stay'??????????????????"
      }
    ],
    review: [
      { key: "reservation", prompt: "How do you say you have a booking?", answer: "I have a reservation under..." },
      { key: "checkin", prompt: "What do you say when checking in?", answer: "I'd like to check in, please" },
      { key: "stay", prompt: "How do you wish a guest a good stay?", answer: "Enjoy your stay" }
    ],
    humorNotes: [
      {
        context: "When the hotel room is not what you expected",
        punchline: "A: Welcome to your room! B: ...I booked a suite. A: This is the elevator room. B: ...Then I'd like to check out.",
        explanation: "Self-deprecating humor about hotel room disappointments is very common."
      }
    ],
    usefulExpressions: [
      { expression: "I have a reservation under...", meaning: "????????...", usage: "????" },
      { expression: "Could I see your...?", meaning: "?????...??", usage: "??????" },
      { expression: "Here you go", meaning: "??", usage: "????" },
      { expression: "Breakfast is served from...", meaning: "???????...", usage: "??????" },
      { expression: "Enjoy your stay", meaning: "??????", usage: "????" }
    ],
    commonMistakes: [
      {
        mistake: "? 'I check in' ?? 'I'd like to check in'",
        correction: "??????? 'I'd like to check in, please'",
        explanation: "?????????????????"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You arrive at a hotel for a 3-night stay. Check in, ask about breakfast time, Wi-Fi, and the room location.",
        prompts: [
          "Tell them you have a reservation",
          "Provide your name and ID",
          "Ask about breakfast and Wi-Fi",
          "Thank them and go to your room"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Lobby",
        synonyms: ["Reception", "Entrance hall"],
        antonyms: [],
        example: "I'll meet you in the lobby."
      },
      {
        word: "Amenity",
        synonyms: ["Facility", "Service"],
        antonyms: [],
        example: "The hotel has many amenities."
      }
    ],
    shadowingPractice: [
      "Do you have a reservation?",
      "Yes, under the name Thompson.",
      "Your room is 305 on the third floor.",
      "Breakfast is served from 7 to 10.",
      "Enjoy your stay!"
    ],
    speakingChallenge: {
      instruction: "Practice checking into a hotel for a 2-night stay. Use 'I have a reservation', ask about breakfast, Wi-Fi, and checkout time.",
      hints: [
        "State your reservation name",
        "Show your ID",
        "Ask about amenities",
        "Confirm your room number"
      ]
    }
  },
  {
    id: "post-office",
    title: "At the Post Office",
    emoji: "??",
    description: "Sending letters and packages, buying stamps, and mailing items.",
    color: "from-red-400 to-pink-400",
    level: "A1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Official mail or international shipping" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard post office interaction" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Sending a quick letter or postcard" }
    ],
    warmUp: {
      title: "Warm-Up: Post Office Phrases",
      content: "The post office is an essential service. In this lesson, you'll learn how to mail packages, buy stamps, and ask about delivery options in English.",
      contentZh: "???????????????????????????????????????"
    },
    vocabulary: [
      {
        word: "Stamp",
        phonetic: "/stæmp/",
        chinese: "??",
        pinyin: "yóu piào",
        partOfSpeech: "noun",
        definitionEn: "A small piece of paper you put on mail to pay for postage.",
        definitionZh: "??????????????",
        exampleEn: "I need to buy some stamps.",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "Envelope",
        phonetic: "/?env?l??p/",
        chinese: "??",
        pinyin: "xìn f?ng",
        partOfSpeech: "noun",
        definitionEn: "A folded paper container for a letter.",
        definitionZh: "??????????",
        exampleEn: "Put the letter in an envelope.",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Package",
        phonetic: "/?pæk?d?/",
        chinese: "??",
        pinyin: "b?o gu?",
        partOfSpeech: "noun",
        definitionEn: "A wrapped or boxed item sent through the mail.",
        definitionZh: "???????????????",
        exampleEn: "I'd like to mail this package.",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Mail",
        phonetic: "/me?l/",
        chinese: "??",
        pinyin: "yóu jì",
        partOfSpeech: "verb / noun",
        definitionEn: "To send something through the postal system.",
        definitionZh: "???????????",
        exampleEn: "I need to mail this letter.",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Delivery",
        phonetic: "/d??l?v?ri/",
        chinese: "??",
        pinyin: "pèi sòng",
        partOfSpeech: "noun",
        definitionEn: "The service of bringing mail or packages to someone.",
        definitionZh: "??????????????",
        exampleEn: "Express delivery takes 3-5 days.",
        exampleZh: "??????3-5??",
        register: "neutral"
      },
      {
        word: "Address",
        phonetic: "/??dres/",
        chinese: "??",
        pinyin: "dì zh?",
        partOfSpeech: "noun",
        definitionEn: "The location where mail is sent.",
        definitionZh: "????????",
        exampleEn: "Write the address clearly.",
        exampleZh: "????????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-postoffice-1",
          expression: "I'd like to mail...",
          chinese: "???...",
          pinyin: "w? xi?ng jì...",
          meaning: "Expressing your desire to send something through the mail.",
          whenToUse: "When you arrive at the post office and want to send something.",
          whenNotToUse: "Don't use for digital messages — this is only for physical mail.",
          nativeFrequency: "Very common at post offices.",
          commonMistakes: [
            { mistake: "Using 'I want to send...' instead", correction: "'I'd like to mail...' is more polite and natural" }
          ],
          pronunciation: "/a?d la?k tu? me?l/",
          funnyExample: "A: I'd like to mail this package. B: Where to? A: To my friend. B: ...That's not an address.",
          memoryTrick: "Think: 'mail = send via post' + 'I'd like = politely want' = 'I politely want to send via post'",
          relatedExpressions: ["Can I mail...?", "I want to send...", "I need to post..."],
          collocations: ["mail a package", "mail a letter", "mail something"],
          miniQuiz: [
            { question: "'I'd like to mail...' means:", options: ["I want to send something by post", "I want to receive mail", "I want to buy stamps", "I want to open an account"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-postoffice-2",
          expression: "Regular / Express delivery",
          chinese: "??/????",
          pinyin: "p? t?ng / kuài dì pèi sòng",
          meaning: "The two main delivery speed options at the post office.",
          whenToUse: "When choosing how fast you want your mail or package delivered.",
          whenNotToUse: "Don't use for emails — this is only for physical mail.",
          nativeFrequency: "Very common when mailing packages.",
          commonMistakes: [
            { mistake: "Confusing 'delivery' with 'mail'", correction: "'Mail' is what you send, 'delivery' is how fast it arrives" }
          ],
          pronunciation: "/?re?j?l?r / ?k?spres d??l?v?ri/",
          funnyExample: "A: How much is express delivery? B: $25. A: ...I'll just walk it there myself. B: ...That's also an option.",
          memoryTrick: "Think: 'express = fast' + 'regular = normal' = 'fast vs normal delivery'",
          relatedExpressions: ["Standard delivery", "Overnight delivery", "Economy shipping"],
          collocations: ["regular delivery", "express delivery", "delivery time"],
          miniQuiz: [
            { question: "'Express delivery' means:", options: ["Fast delivery", "Slow delivery", "Free delivery", "No delivery"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-postoffice-3",
          expression: "How much is...?",
          chinese: "...????",
          pinyin: "... du? sh?o qián?",
          meaning: "Asking for the price of a service or item.",
          whenToUse: "When asking about postage, stamps, or delivery costs.",
          whenNotToUse: "Don't use for things that are free — it sounds confused.",
          nativeFrequency: "Extremely common — used everywhere when shopping or buying services.",
          commonMistakes: [
            { mistake: "Saying 'How much it is?'", correction: "Correct order is 'How much is it?'" }
          ],
          pronunciation: "/ha? m?t? ?z/",
          funnyExample: "A: How much is a stamp? B: $0.55. A: ...That's cheaper than my coffee.",
          memoryTrick: "Think: 'How much = what quantity of money' + 'is = costs' = 'what does it cost?'",
          relatedExpressions: ["What's the price?", "How much does it cost?", "What's the cost?"],
          collocations: ["how much is", "how much is this", "how much is that"],
          miniQuiz: [
            { question: "'How much is...?' asks for:", options: ["Price", "Weight", "Distance", "Time"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "I'd like to mail", meaning: "???", example: "I'd like to mail this package.", register: "neutral", context: "Mailing" },
      { chunk: "Regular or express", meaning: "??????", example: "Is it regular or express delivery?", register: "neutral", context: "Delivery options" },
      { chunk: "How much is", meaning: "???", example: "How much is express delivery?", register: "neutral", context: "Asking price" },
      { chunk: "Can I buy", meaning: "?????", example: "Can I buy some stamps?", register: "neutral", context: "Buying items" },
      { chunk: "Here is your receipt", meaning: "??????", example: "Here is your receipt.", register: "neutral", context: "Payment" }
    ],
    conversation: [
      { speaker: "Customer", line: "Hello, I'd like to mail this package, please.", register: "neutral" },
      { speaker: "Clerk", line: "Sure. Where are you sending it?", register: "neutral" },
      { speaker: "Customer", line: "To Japan. It's a gift for my friend.", register: "neutral" },
      { speaker: "Clerk", line: "Okay. Is it a regular or express delivery?", register: "neutral" },
      { speaker: "Customer", line: "How much is express delivery?", register: "neutral" },
      { speaker: "Clerk", line: "Express is $25 for 3-5 days. Regular is $10 for 2 weeks.", register: "neutral" },
      { speaker: "Customer", line: "I'll take regular delivery, please. Can I also buy some stamps?", register: "neutral" },
      { speaker: "Clerk", line: "Of course. How many stamps do you need?", register: "neutral" },
      { speaker: "Customer", line: "10, please. And can you write the address on it for me?", register: "neutral" },
      { speaker: "Clerk", line: "Sure. Here is your receipt.", register: "neutral" },
      { speaker: "Customer", line: "Thank you very much!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "???????????" },
      { speaker: "??", line: "??????????" },
      { speaker: "??", line: "???????????????" },
      { speaker: "??", line: "??????????????" },
      { speaker: "??", line: "??????" },
      { speaker: "??", line: "??25???3-5??????10???2????" },
      { speaker: "??", line: "????????????????" },
      { speaker: "??", line: "????????????" },
      { speaker: "??", line: "10???????????????" },
      { speaker: "??", line: "??????????" },
      { speaker: "??", line: "?????" }
    ],
    grammarInContext: [
      {
        title: "Questions with 'How much'",
        explanation: "? 'How much...?' ??????????????",
        examples: [
          "How much is express delivery?",
          "How much water do you drink?",
          "How much time do you need?"
        ]
      },
      {
        title: "Polite Offers with 'Can I'",
        explanation: "? 'Can I...?' ?????????????",
        examples: [
          "Can I buy stamps here?",
          "Can I track my package?",
          "Can I have a receipt?"
        ]
      }
    ],
    pronunciation: [
      { tip: "Package ? /?pæk?d?/", example: "Stress on first syllable" },
      { tip: "Delivery ? /d??l?v?ri/", example: "Stress on second syllable" }
    ],
    shadowing: [
      { line: "Hello, I'd like to mail this package, please.", emphasis: "I'd like to mail" },
      { line: "Where are you sending it?", emphasis: "Where are you sending" },
      { line: "How much is express delivery?", emphasis: "How much is" },
      { line: "I'll take regular delivery, please.", emphasis: "regular delivery" },
      { line: "Can I also buy some stamps?", emphasis: "buy some stamps" }
    ],
    speakingPractice: {
      instruction: "Practice mailing three items: a letter, a postcard, and a package. Use 'I'd like to mail...' and ask about delivery options.",
      hints: [
        "Start with 'Hello'",
        "Say where you're sending it",
        "Ask about delivery speed",
        "Buy stamps if needed"
      ],
      followUpQuestions: [
        "What did you mail?",
        "Which delivery option did you choose?",
        "How much did it cost?",
        "Did you track your package?"
      ]
    },
    rolePlay: {
      scenario: "You need to send a birthday gift to your friend in another country. Go to the post office, choose delivery speed, buy stamps, and mail it.",
      prompts: [
        "Greet the clerk",
        "Say what you want to mail",
        "Choose delivery type",
        "Buy stamps",
        "Get a receipt"
      ],
      partnerLines: [
        "Hello, I'd like to mail this package, please.",
        "Sure. Where are you sending it?",
        "Okay. Is it a regular or express delivery?",
        "Express is $25 for 3-5 days. Regular is $10 for 2 weeks.",
        "Sure. Here is your receipt."
      ]
    },
    homework: {
      task: "Mailing Practice",
      description: "Write a letter or postcard to a friend this week. Describe your week and ask about theirs. Mail it and track the delivery.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'I'd like to mail...' means:",
        questionZh: "'I'd like to mail...'????",
        options: [
          { label: "A) I want to send something by post", labelZh: "A) ?????????", correct: true },
          { label: "B) I want to receive mail", labelZh: "B) ??????", correct: false },
          { label: "C) I want to buy stamps", labelZh: "C) ?????", correct: false },
          { label: "D) I want to open an account", labelZh: "D) ?????", correct: false }
        ],
        explanation: "'I'd like to mail...' means you want to send something through the postal service.",
        explanationZh: "'I'd like to mail...'???????????????"
      },
      {
        id: "q2",
        question: "'Express delivery' means:",
        questionZh: "'Express delivery'????",
        options: [
          { label: "A) Fast delivery", labelZh: "A) ????", correct: true },
          { label: "B) Slow delivery", labelZh: "B) ????", correct: false },
          { label: "C) Free delivery", labelZh: "C) ????", correct: false },
          { label: "D) No delivery", labelZh: "D) ???", correct: false }
        ],
        explanation: "'Express delivery' is a faster, usually more expensive shipping option.",
        explanationZh: "'Express delivery'???????????????"
      }
    ],
    review: [
      { key: "mail", prompt: "How do you say you want to send a package?", answer: "I'd like to mail..." },
      { key: "delivery", prompt: "What are the two delivery options?", answer: "Regular or express delivery" },
      { key: "stamps", prompt: "How do you ask to buy stamps?", answer: "Can I buy some stamps?" }
    ],
    humorNotes: [
      {
        context: "When the post office is busy",
        punchline: "A: I'd like to mail this package. B: So would everyone else in this line. A: ...Then I'd like to mail my patience.",
        explanation: "Self-deprecating humor about post office lines is very common."
      }
    ],
    usefulExpressions: [
      { expression: "I'd like to mail...", meaning: "???...", usage: "????" },
      { expression: "Regular / Express delivery", meaning: "??/????", usage: "??????" },
      { expression: "How much is...?", meaning: "...????", usage: "????" },
      { expression: "Can I buy...?", meaning: "????...??", usage: "????" },
      { expression: "Here is your receipt", meaning: "??????", usage: "????" }
    ],
    commonMistakes: [
      {
        mistake: "? 'I want to mail...' ??? 'I'd like to mail...'",
        correction: "??????? 'I'd like to mail...'",
        explanation: "??????'I'd like' ? 'I want' ????"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You need to send a birthday gift to your friend in another country. Go to the post office, choose delivery speed, buy stamps, and mail it.",
        prompts: [
          "Greet the clerk",
          "Say what you want to mail",
          "Choose delivery type",
          "Buy stamps",
          "Get a receipt"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Postage",
        synonyms: ["Mailing cost", "Shipping fee"],
        antonyms: [],
        example: "The postage is $5."
      },
      {
        word: "Tracking",
        synonyms: ["Monitoring", "Following"],
        antonyms: [],
        example: "Can I track my package online?"
      }
    ],
    shadowingPractice: [
      "Hello, I'd like to mail this package, please.",
      "Where are you sending it?",
      "How much is express delivery?",
      "I'll take regular delivery, please.",
      "Here is your receipt."
    ],
    speakingChallenge: {
      instruction: "Practice mailing three items: a letter, a postcard, and a package. Use 'I'd like to mail...' and ask about delivery options.",
      hints: [
        "Start with 'Hello'",
        "Say where you're sending it",
        "Ask about delivery speed",
        "Buy stamps if needed"
      ]
    }
  },
  {
    id: "at-the-gym-beginner",
    title: "At the Gym",
    emoji: "???",
    description: "Asking about gym membership, using equipment, and talking to trainers.",
    color: "from-green-400 to-emerald-400",
    level: "A1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Business gym or formal training" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard gym interaction" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Chatting with gym staff or friends" }
    ],
    warmUp: {
      title: "Warm-Up: Gym English",
      content: "Going to the gym is a great way to stay healthy. In this lesson, you'll learn how to ask about memberships, use equipment, and talk to trainers in English.",
      contentZh: "???????????????????????????????????????????????"
    },
    vocabulary: [
      {
        word: "Membership",
        phonetic: "/?memb???p/",
        chinese: "????",
        pinyin: "huì yuán z? gé",
        partOfSpeech: "noun",
        definitionEn: "The status of being a member of a gym or club.",
        definitionZh: "???????????????",
        exampleEn: "I'd like to get a gym membership.",
        exampleZh: "????????????",
        register: "neutral"
      },
      {
        word: "Trainer",
        phonetic: "/?tre?n?r/",
        chinese: "??",
        pinyin: "jiào liàn",
        partOfSpeech: "noun",
        definitionEn: "A person who helps others exercise and get fit.",
        definitionZh: "????????????",
        exampleEn: "Do you have a personal trainer?",
        exampleZh: "?????????",
        register: "neutral"
      },
      {
        word: "Treadmill",
        phonetic: "/?tredm?l/",
        chinese: "???",
        pinyin: "p?o bù j?",
        partOfSpeech: "noun",
        definitionEn: "A machine for running or walking indoors.",
        definitionZh: "?????????????",
        exampleEn: "Let's start with a warm-up on the treadmill.",
        exampleZh: "?????????????",
        register: "neutral"
      },
      {
        word: "Weights",
        phonetic: "/we?ts/",
        chinese: "??/??",
        pinyin: "y? líng / gàng líng",
        partOfSpeech: "noun",
        definitionEn: "Equipment used for strength training.",
        definitionZh: "??????????",
        exampleEn: "Let's do some weights.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Mat",
        phonetic: "/mæt/",
        chinese: "??",
        pinyin: "diàn zi",
        partOfSpeech: "noun",
        definitionEn: "A padded surface for exercises like yoga.",
        definitionZh: "?????????????",
        exampleEn: "Put your mat on the floor.",
        exampleZh: "???????????",
        register: "neutral"
      },
      {
        word: "Workout",
        phonetic: "/?w??rka?t/",
        chinese: "??",
        pinyin: "duàn liàn",
        partOfSpeech: "noun",
        definitionEn: "A session of physical exercise.",
        definitionZh: "???????",
        exampleEn: "I have a workout every morning.",
        exampleZh: "?????????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-gym-1",
          expression: "I'm interested in...",
          chinese: "??...???",
          pinyin: "w? duì... g?n xìng qù",
          meaning: "Expressing interest in something, especially gym memberships or activities.",
          whenToUse: "When talking to gym staff about joining or trying something.",
          whenNotToUse: "Don't use 'I interest in...' — it's grammatically incorrect.",
          nativeFrequency: "Very common in service and social situations.",
          commonMistakes: [
            { mistake: "Saying 'I interest in...' instead of 'I'm interested in...'", correction: "'Interested' is an adjective, so you need 'am': 'I am interested in...'" }
          ],
          pronunciation: "/a?m ??ntr?st?d ?n/",
          funnyExample: "A: I interest in yoga. B: You interest in grammar too? A: ...I meant I'm interested.",
          memoryTrick: "Think: 'interested = feeling interest' + 'I am = I feel' = 'I feel interest in...'",
          relatedExpressions: ["I'd like...", "I want to try...", "Can I join...?"],
          collocations: ["interested in", "interested in joining", "interested in trying"],
          miniQuiz: [
            { question: "'I'm interested in...' means:", options: ["I want to learn more about it", "I already know it", "I hate it", "I'm teaching it"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-gym-2",
          expression: "Can I start with...?",
          chinese: "????...????",
          pinyin: "w? k? y? cóng... k?i sh? ma?",
          meaning: "Asking if you can begin with a specific plan, exercise, or equipment.",
          whenToUse: "When choosing a gym plan or starting a workout.",
          whenNotToUse: "Don't use for things that have already started — use 'Can I continue with...?' instead.",
          nativeFrequency: "Very common when starting something new.",
          commonMistakes: [
            { mistake: "Using 'I start with...' which sounds like a statement", correction: "'Can I start with...?' is a polite question" }
          ],
          pronunciation: "/kæn a? st??rt w?ð/",
          funnyExample: "A: Can I start with a donut? B: ...That's not a workout plan. A: It's a warm-up for my workout.",
          memoryTrick: "Think: 'start = begin' + 'with = using' = 'can I begin using this?'",
          relatedExpressions: ["I'd like to start with...", "Can I begin with...?", "Let's start with..."],
          collocations: ["start with", "start with a plan", "start with the treadmill"],
          miniQuiz: [
            { question: "'Can I start with...?' is used to:", options: ["Ask to begin with something", "Say you already started", "Stop an activity", "Ask for help"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-gym-3",
          expression: "I'm new to...",
          chinese: "??...??",
          pinyin: "w? shì... x?n sh?u",
          meaning: "Telling someone you don't have much experience with something.",
          whenToUse: "When starting at a gym, job, or any new activity.",
          whenNotToUse: "Don't use if you have experience — it would be dishonest.",
          nativeFrequency: "Very common when learning something new.",
          commonMistakes: [
            { mistake: "Using 'I new to...' without 'am'", correction: "Always use 'I'm new to...' or 'I am new to...'" }
          ],
          pronunciation: "/a?m nu? tu?/",
          funnyExample: "A: I'm new to this. B: No worries, we all started somewhere. A: ...I started yesterday and already need a vacation.",
          memoryTrick: "Think: 'new = beginner' + 'to = in' = 'I am a beginner in this'",
          relatedExpressions: ["I'm a beginner", "I'm just starting", "I'm learning..."],
          collocations: ["new to", "new to working out", "new to the gym"],
          miniQuiz: [
            { question: "'I'm new to...' means:", options: ["I am a beginner", "I am experienced", "I am teaching", "I am leaving"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "I'm interested in", meaning: "??...???", example: "I'm interested in a gym membership.", register: "neutral", context: "Expressing interest" },
      { chunk: "Can I start with", meaning: "????...???", example: "Can I start with a monthly plan?", register: "neutral", context: "Starting something" },
      { chunk: "I'm new to", meaning: "??...??", example: "I'm new to working out.", register: "neutral", context: "Being a beginner" },
      { chunk: "Show me around", meaning: "????", example: "Can you show me around?", register: "neutral", context: "Requesting tour" },
      { chunk: "Let's get started", meaning: "??????", example: "Let's get started.", register: "neutral", context: "Beginning activity" }
    ],
    conversation: [
      { speaker: "Member", line: "Hi, I'm interested in a gym membership.", register: "neutral" },
      { speaker: "Trainer", line: "Great! We have monthly and yearly plans. Which one do you prefer?", register: "neutral" },
      { speaker: "Member", line: "Can I start with a monthly plan?", register: "neutral" },
      { speaker: "Trainer", line: "Of course. That's $40 per month. Do you need a personal trainer?", register: "neutral" },
      { speaker: "Member", line: "Yes, please. I'm new to working out.", register: "neutral" },
      { speaker: "Trainer", line: "No problem! I can show you around. Let's start with a warm-up on the treadmill.", register: "neutral" },
      { speaker: "Member", line: "Sounds good. How long should I warm up?", register: "neutral" },
      { speaker: "Trainer", line: "About 10 minutes. Then we'll do some weights. Do you have comfortable shoes?", register: "neutral" },
      { speaker: "Member", line: "Yes, I brought my running shoes.", register: "neutral" },
      { speaker: "Trainer", line: "Perfect! Let's get started.", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "????????????????" },
      { speaker: "??", line: "???????????????? prefer ???" },
      { speaker: "??", line: "??????????" },
      { speaker: "??", line: "?????40????????????" },
      { speaker: "??", line: "?????????????" },
      { speaker: "??", line: "???????????????????????????" },
      { speaker: "??", line: "??????????????" },
      { speaker: "??", line: "??10??????????????????????????" },
      { speaker: "??", line: "?????????" },
      { speaker: "??", line: "??????????" }
    ],
    grammarInContext: [
      {
        title: "Present Continuous for Future Plans",
        explanation: "???????????????????",
        examples: [
          "I'm starting with a monthly plan.",
          "I'm working out tomorrow.",
          "What are you doing at the gym?"
        ]
      },
      {
        title: "Modal Verbs for Requests and Offers",
        explanation: "? 'Can I...?' ? 'Do you need...?' ?????????????",
        examples: [
          "Can I start with a monthly plan?",
          "Do you need a personal trainer?",
          "Can I use the treadmill?"
        ]
      }
    ],
    pronunciation: [
      { tip: "Membership ? /?memb???p/", example: "Stress on first syllable" },
      { tip: "Treadmill ? /?tredm?l/", example: "Stress on first syllable" }
    ],
    shadowing: [
      { line: "Hi, I'm interested in a gym membership.", emphasis: "interested in a gym membership" },
      { line: "Can I start with a monthly plan?", emphasis: "start with a monthly plan" },
      { line: "I'm new to working out.", emphasis: "new to working out" },
      { line: "Let's start with a warm-up on the treadmill.", emphasis: "warm-up on the treadmill" },
      { line: "Perfect! Let's get started.", emphasis: "get started" }
    ],
    speakingPractice: {
      instruction: "Practice joining a gym and talking to a trainer. Use 'I'm interested in', 'Can I start with', and 'I'm new to'.",
      hints: [
        "Ask about membership plans",
        "Choose monthly or yearly",
        "Ask for a trainer if you're new",
        "Confirm the price"
      ],
      followUpQuestions: [
        "What membership did you choose?",
        "How much does it cost per month?",
        "Did you ask for a trainer?",
        "What equipment did you try?"
      ]
    },
    rolePlay: {
      scenario: "You join a gym for the first time. Talk to the trainer about membership options, ask for a tour, and schedule your first workout.",
      prompts: [
        "Express interest in membership",
        "Choose a plan",
        "Ask for a trainer",
        "Get a tour of the gym",
        "Schedule your first session"
      ],
      partnerLines: [
        "Hi, I'm interested in a gym membership.",
        "Great! We have monthly and yearly plans. Which one do you prefer?",
        "Of course. That's $40 per month. Do you need a personal trainer?",
        "No problem! I can show you around. Let's start with a warm-up on the treadmill.",
        "Perfect! Let's get started."
      ]
    },
    homework: {
      task: "Gym Vocabulary",
      description: "Write down 10 gym-related words and practice using them. Research local gyms and compare their membership prices.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'I'm interested in...' means:",
        questionZh: "'I'm interested in...'????",
        options: [
          { label: "A) I want to learn more about it", labelZh: "A) ??????", correct: true },
          { label: "B) I already know it well", labelZh: "B) ???????", correct: false },
          { label: "C) I hate it", labelZh: "C) ????", correct: false },
          { label: "D) I am teaching it", labelZh: "D) ????", correct: false }
        ],
        explanation: "'I'm interested in...' means you want to learn more about something.",
        explanationZh: "'I'm interested in...'?????????????????"
      },
      {
        id: "q2",
        question: "'I'm new to...' means:",
        questionZh: "'I'm new to...'????",
        options: [
          { label: "A) I am a beginner", labelZh: "A) ????", correct: true },
          { label: "B) I am experienced", labelZh: "B) ?????", correct: false },
          { label: "C) I am teaching", labelZh: "C) ???", correct: false },
          { label: "D) I am leaving", labelZh: "D) ????", correct: false }
        ],
        explanation: "'I'm new to...' means you are a beginner at something.",
        explanationZh: "'I'm new to...'???????????"
      }
    ],
    review: [
      { key: "membership", prompt: "How do you say you want a gym membership?", answer: "I'm interested in a gym membership" },
      { key: "start", prompt: "How do you ask to begin with a monthly plan?", answer: "Can I start with a monthly plan?" },
      { key: "new", prompt: "How do you say you're a beginner?", answer: "I'm new to working out" }
    ],
    humorNotes: [
      {
        context: "When the gym is crowded",
        punchline: "A: I'm new to working out. B: So is everyone else on Monday. A: ...Then I'm new to Tuesdays too.",
        explanation: "Self-deprecating humor about gym crowds on Mondays is very common."
      }
    ],
    usefulExpressions: [
      { expression: "I'm interested in...", meaning: "??...???", usage: "????" },
      { expression: "Can I start with...?", meaning: "????...????", usage: "??????" },
      { expression: "I'm new to...", meaning: "??...??", usage: "????????" },
      { expression: "Show me around", meaning: "????", usage: "????" },
      { expression: "Let's get started", meaning: "??????", usage: "????" }
    ],
    commonMistakes: [
      {
        mistake: "? 'I interest in...'",
        correction: "???? 'I'm interested in...'",
        explanation: "'Interested' ?????????? 'am'?"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You join a gym for the first time. Talk to the trainer about membership options, ask for a tour, and schedule your first workout.",
        prompts: [
          "Express interest in membership",
          "Choose a plan",
          "Ask for a trainer",
          "Get a tour of the gym",
          "Schedule your first session"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Membership",
        synonyms: ["Subscription", "Enrollment"],
        antonyms: [],
        example: "A monthly membership is $40."
      },
      {
        word: "Workout",
        synonyms: ["Exercise", "Training"],
        antonyms: [],
        example: "I have a workout every morning."
      }
    ],
    shadowingPractice: [
      "Hi, I'm interested in a gym membership.",
      "Can I start with a monthly plan?",
      "I'm new to working out.",
      "Let's start with a warm-up on the treadmill.",
      "Let's get started!"
    ],
    speakingChallenge: {
      instruction: "Practice joining a gym and talking to a trainer. Use 'I'm interested in', 'Can I start with', and 'I'm new to'.",
      hints: [
        "Ask about membership plans",
        "Choose monthly or yearly",
        "Ask for a trainer if you're new",
        "Confirm the price"
      ]
    }
  },
  {
    id: "supermarket-shopping",
    title: "At the Supermarket",
    emoji: "??",
    description: "Finding items, asking for help, and checking out at a grocery store.",
    color: "from-green-400 to-lime-400",
    level: "A1",
    estimatedTime: "10 min",
    registerMarkers: [
      { level: "formal", label: "Formal", color: "bg-blue-100 text-blue-800 border-blue-200", description: "Upscale supermarket or specialty store" },
      { level: "neutral", label: "Neutral", color: "bg-gray-100 text-gray-800 border-gray-200", description: "Standard grocery shopping" },
      { level: "casual", label: "Casual", color: "bg-green-100 text-green-800 border-green-200", description: "Local market or casual store" }
    ],
    warmUp: {
      title: "Warm-Up: Supermarket English",
      content: "Supermarkets are universal, and knowing the right phrases makes shopping easier. In this lesson, you'll learn how to find items, ask for help, and check out smoothly.",
      contentZh: "????????????????????????????????????????????????"
    },
    vocabulary: [
      {
        word: "Cart",
        phonetic: "/k??rt/",
        chinese: "???",
        pinyin: "gòu wù ch?",
        partOfSpeech: "noun",
        definitionEn: "A wheeled basket for carrying groceries while shopping.",
        definitionZh: "????????????????",
        exampleEn: "Can I get a cart, please?",
        exampleZh: "????????????",
        register: "neutral"
      },
      {
        word: "Aisle",
        phonetic: "/a?l/",
        chinese: "????",
        pinyin: "huò jià t?ng dào",
        partOfSpeech: "noun",
        definitionEn: "The space between shelves in a supermarket.",
        definitionZh: "??????????",
        exampleEn: "They're in aisle 3.",
        exampleZh: "???3????",
        register: "neutral"
      },
      {
        word: "Checkout",
        phonetic: "/?t?eka?t/",
        chinese: "???",
        pinyin: "sh?u yín tái",
        partOfSpeech: "noun",
        definitionEn: "The place where you pay for your groceries.",
        definitionZh: "??????????",
        exampleEn: "The checkout is on the left.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Receipt",
        phonetic: "/r??si?t/",
        chinese: "??",
        pinyin: "sh?u jù",
        partOfSpeech: "noun",
        definitionEn: "A paper showing what you bought and how much you paid.",
        definitionZh: "?????????????????",
        exampleEn: "Here's your receipt.",
        exampleZh: "???????",
        register: "neutral"
      },
      {
        word: "Cashier",
        phonetic: "/kæ???r/",
        chinese: "???",
        pinyin: "sh?u yín yuán",
        partOfSpeech: "noun",
        definitionEn: "The person who takes your payment at the checkout.",
        definitionZh: "??????????",
        exampleEn: "The cashier was very helpful.",
        exampleZh: "????????",
        register: "neutral"
      },
      {
        word: "Plastic bag",
        phonetic: "/?plæst?k bæ?/",
        chinese: "???",
        pinyin: "sù liào dài",
        partOfSpeech: "noun",
        definitionEn: "A bag made of plastic for carrying groceries.",
        definitionZh: "??????????",
        exampleEn: "Do you need a plastic bag?",
        exampleZh: "????????",
        register: "neutral"
      }
    ],
    dailyExpressions: {
      title: "Daily Native Expressions",
      items: [
        {
          id: "de-supermarket-1",
          expression: "Where are the...?",
          chinese: "...????",
          pinyin: "... zài n? l??",
          meaning: "Asking where a specific item is located in the store.",
          whenToUse: "When you can't find something in the supermarket.",
          whenNotToUse: "Don't use for items you can clearly see — it sounds confused.",
          nativeFrequency: "Very common in stores and supermarkets.",
          commonMistakes: [
            { mistake: "Using 'Where is the...?' for plural items", correction: "Use 'Where are the...?' for plural items like 'apples'" }
          ],
          pronunciation: "/we?r ??r ð?/",
          funnyExample: "A: Where are the apples? B: They're in aisle 3. A: ...I was in aisle 3 and didn't see them. B: ...Did you look?",
          memoryTrick: "Think: 'where = location' + 'are = plural' = 'where are these items?'",
          relatedExpressions: ["Where is the...?", "Can you tell me where...?", "Do you know where...?"],
          collocations: ["where are the", "where are the apples", "where are the shelves"],
          miniQuiz: [
            { question: "'Where are the...?' is used for:", options: ["Asking location of plural items", "Asking about price", "Asking for help", "Paying"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-supermarket-2",
          expression: "I'll take...",
          chinese: "??...",
          pinyin: "w? yào...",
          meaning: "Deciding to buy something.",
          whenToUse: "When you've made your decision to purchase an item.",
          whenNotToUse: "Don't use if you're still deciding. Use 'Can I have...?' or 'Let me think' instead.",
          nativeFrequency: "Very common in shopping.",
          commonMistakes: [
            { mistake: "Using 'I want...' instead", correction: "'I'll take...' is more decisive and natural in shopping" }
          ],
          pronunciation: "/a?l te?k/",
          funnyExample: "A: I'll take everything. B: ...That'll be $500. A: ...I meant I'll take this apple.",
          memoryTrick: "Think: 'take = buy' = 'I will buy this'",
          relatedExpressions: ["I'll get it", "I'll buy it", "This one please"],
          collocations: ["I'll take", "I'll take this", "I'll take a bag"],
          miniQuiz: [
            { question: "'I'll take...' means:", options: ["I want to buy it", "I will carry it", "I don't want it", "It's too expensive"], correct: 0 }
          ],
          register: "neutral"
        },
        {
          id: "de-supermarket-3",
          expression: "Would you like...?",
          chinese: "???...??",
          pinyin: "nín xi?ng yào... ma?",
          meaning: "Asking someone if they want something, often as an offer.",
          whenToUse: "When offering something or suggesting an additional item.",
          whenNotToUse: "Don't use for commands — this is only for offers and suggestions.",
          nativeFrequency: "Very common in service situations.",
          commonMistakes: [
            { mistake: "Using 'Do you like...?' instead", correction: "'Would you like...?' is an offer; 'Do you like...?' is asking about preference" }
          ],
          pronunciation: "/w?d ju? la?k/",
          funnyExample: "A: Would you like a bag? B: Would I like a bag? A: ...I'm offering you a bag. B: ...I love bags. Yes!",
          memoryTrick: "Think: 'would like = want politely' = 'polite offer'",
          relatedExpressions: ["Do you want...?", "Can I get you...?", "Would you care for...?"],
          collocations: ["would you like", "would you like a bag", "would you like some"],
          miniQuiz: [
            { question: "'Would you like...?' is used to:", options: ["Offer something politely", "Ask about preferences", "Give a command", "Say goodbye"], correct: 0 }
          ],
          register: "neutral"
        }
      ]
    },
    nativeChunks: [
      { chunk: "Where are the", meaning: "...???", example: "Where are the apples?", register: "neutral", context: "Asking location" },
      { chunk: "They're in aisle", meaning: "???...??", example: "They're in aisle 3.", register: "neutral", context: "Giving location" },
      { chunk: "I'll take", meaning: "??", example: "I'll take a bag of those.", register: "neutral", context: "Deciding to buy" },
      { chunk: "Would you like", meaning: "???...?", example: "Would you like a plastic bag?", register: "neutral", context: "Offering" },
      { chunk: "Here's your receipt", meaning: "??????", example: "Here's your receipt.", register: "neutral", context: "Payment" }
    ],
    conversation: [
      { speaker: "Customer", line: "Excuse me, where are the apples?", register: "neutral" },
      { speaker: "Staff", line: "They're in aisle 3, next to the oranges.", register: "neutral" },
      { speaker: "Customer", line: "Thank you. Do you have any organic apples?", register: "neutral" },
      { speaker: "Staff", line: "Yes, right here. They're on sale today.", register: "neutral" },
      { speaker: "Customer", line: "Great! I'll take a bag of those, please.", register: "neutral" },
      { speaker: "Cashier", line: "That'll be $5.99. Would you like a plastic bag?", register: "neutral" },
      { speaker: "Customer", line: "No, I brought my own. Thank you!", register: "neutral" },
      { speaker: "Cashier", line: "Here's your receipt. Have a great day!", register: "neutral" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "???????????" },
      { speaker: "??", line: "???3??????????" },
      { speaker: "??", line: "????????????" },
      { speaker: "??", line: "?????????????" },
      { speaker: "??", line: "????????????" },
      { speaker: "???", line: "??5.99???????????" },
      { speaker: "??", line: "?????????????" },
      { speaker: "???", line: "????????????????" }
    ],
    grammarInContext: [
      {
        title: "Questions with 'Where'",
        explanation: "? 'Where...?' ?????",
        examples: [
          "Where are the apples?",
          "Where is the checkout?",
          "Where can I find bread?"
        ]
      },
      {
        title: "Simple Future with 'I'll'",
        explanation: "? 'I'll...' (I will) ??????????",
        examples: [
          "I'll take a bag.",
          "I'll get the milk.",
          "I'll pay by card."
        ]
      }
    ],
    pronunciation: [
      { tip: "Aisle ? /a?l/", example: "Sounds like 'I'll'" },
      { tip: "Receipt ? /r??si?t/", example: "Stress on second syllable" }
    ],
    shadowing: [
      { line: "Excuse me, where are the apples?", emphasis: "where are the apples" },
      { line: "They're in aisle 3, next to the oranges.", emphasis: "in aisle 3" },
      { line: "Great! I'll take a bag of those, please.", emphasis: "I'll take" },
      { line: "That'll be $5.99. Would you like a plastic bag?", emphasis: "Would you like" },
      { line: "Here's your receipt. Have a great day!", emphasis: "Here's your receipt" }
    ],
    speakingPractice: {
      instruction: "Practice shopping for 5 items at a supermarket. Use 'Where are...', 'I'll take', and 'Here's your receipt'.",
      hints: [
        "Start by taking a cart",
        "Ask for directions to each item",
        "Choose brands or sizes",
        "Pay at the checkout"
      ],
      followUpQuestions: [
        "What items did you buy?",
        "Did you find everything on your list?",
        "Did you ask for help?",
        "How much did you pay?"
      ]
    },
    rolePlay: {
      scenario: "You need to buy ingredients for dinner. Go to the supermarket, find the items, ask for help if needed, and check out.",
      prompts: [
        "Take a cart",
        "Find the items on your list",
        "Ask a staff member for help",
        "Choose items",
        "Pay at the checkout"
      ],
      partnerLines: [
        "Excuse me, where are the apples?",
        "They're in aisle 3, next to the oranges.",
        "Yes, right here. They're on sale today.",
        "That'll be $5.99. Would you like a plastic bag?",
        "Here's your receipt. Have a great day!"
      ]
    },
    homework: {
      task: "Supermarket Shopping",
      description: "Go to a supermarket and practice using 'Where are...', 'I'll take', and asking for help. Write a shopping list in English.",
      dueText: "Before next lesson"
    },
    quiz: [
      {
        id: "q1",
        question: "'Where are the...?' is used for:",
        questionZh: "'Where are the...?'???",
        options: [
          { label: "A) Asking location of plural items", labelZh: "A) ?????????", correct: true },
          { label: "B) Asking about price", labelZh: "B) ????", correct: false },
          { label: "C) Asking for help", labelZh: "C) ????", correct: false },
          { label: "D) Paying", labelZh: "D) ??", correct: false }
        ],
        explanation: "'Where are the...?' is used to ask where plural items are located.",
        explanationZh: "'Where are the...?'????????????"
      },
      {
        id: "q2",
        question: "'I'll take...' means:",
        questionZh: "'I'll take...'????",
        options: [
          { label: "A) I want to buy it", labelZh: "A) ???", correct: true },
          { label: "B) I will carry it", labelZh: "B) ????", correct: false },
          { label: "C) I don't want it", labelZh: "C) ????", correct: false },
          { label: "D) It's too expensive", labelZh: "D) ???", correct: false }
        ],
        explanation: "'I'll take...' means you've decided to buy something.",
        explanationZh: "'I'll take...'?????????????"
      }
    ],
    review: [
      { key: "location", prompt: "How do you ask where something is?", answer: "Where are the...?" },
      { key: "buy", prompt: "How do you say you want to buy something?", answer: "I'll take..." },
      { key: "receipt", prompt: "What do you get after paying?", answer: "Here's your receipt" }
    ],
    humorNotes: [
      {
        context: "When you forget your reusable bag",
        punchline: "A: Would you like a plastic bag? B: Yes, I forgot my reusable one. A: ...We all have those days. B: ...Today is 'those days'.",
        explanation: "Self-deprecating humor about forgetting reusable bags is very common."
      }
    ],
    usefulExpressions: [
      { expression: "Where are the...?", meaning: "...????", usage: "??????" },
      { expression: "They're in aisle...", meaning: "???...??", usage: "????" },
      { expression: "I'll take...", meaning: "??...", usage: "????" },
      { expression: "Would you like...?", meaning: "???...??", usage: "????" },
      { expression: "Here's your receipt", meaning: "??????", usage: "??????" }
    ],
    commonMistakes: [
      {
        mistake: "? 'I want...' ??? 'I'll take...'",
        correction: "?????'I'll take...' ???",
        explanation: "'I'll take' ??????????"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You need to buy ingredients for dinner. Go to the supermarket, find the items, ask for help if needed, and check out.",
        prompts: [
          "Take a cart",
          "Find the items on your list",
          "Ask a staff member for help",
          "Choose items",
          "Pay at the checkout"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Organic",
        synonyms: ["Natural", "Chemical-free"],
        antonyms: ["Processed"],
        example: "Do you have organic vegetables?"
      },
      {
        word: "Checkout",
        synonyms: ["Cash register", "Payment counter"],
        antonyms: [],
        example: "The checkout is on the left."
      }
    ],
    shadowingPractice: [
      "Excuse me, where are the apples?",
      "I'll take a bag of those, please.",
      "Would you like a plastic bag?",
      "No, I brought my own.",
      "Here's your receipt. Have a great day!"
    ],
    speakingChallenge: {
      instruction: "Practice shopping for 5 items at a supermarket. Use 'Where are...', 'I'll take', and 'Here's your receipt'.",
      hints: [
        "Start by taking a cart",
        "Ask for directions to each item",
        "Choose brands or sizes",
        "Pay at the checkout"
      ]
    }
  },
  {
    id: "public-transport",
    title: "Taking Public Transport",
    emoji: "??",
    description: "Buying tickets, asking about stops, and taking buses or trains.",
    color: "from-sky-400 to-blue-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Bus stop", phonetic: "/b?s st?p/", chinese: "???", partOfSpeech: "noun" },
      { word: "Ticket", phonetic: "/'t?k?t/", chinese: "?", partOfSpeech: "noun" },
      { word: "Station", phonetic: "/'ste??n/", chinese: "??", partOfSpeech: "noun" },
      { word: "Platform", phonetic: "/'plætf??rm/", chinese: "??", partOfSpeech: "noun" },
      { word: "Transfer", phonetic: "/træns'f??r/", chinese: "??", partOfSpeech: "verb / noun" },
      { word: "Schedule", phonetic: "/'sked?u?l/", chinese: "???", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Passenger", line: "Excuse me, does this bus go to Central Station?" },
      { speaker: "Driver", line: "Yes, it does. That'll be $2.50, please." },
      { speaker: "Passenger", line: "Here you go. Do I need to transfer anywhere?" },
      { speaker: "Driver", line: "No, this bus goes straight there. Enjoy your ride!" },
      { speaker: "Passenger", line: "Thank you. Is there a stop near the museum?" },
      { speaker: "Driver", line: "Yes, the next stop is Main Street, which is right in front of the museum." }
    ],
    chineseTranslation: [
      { speaker: "??", line: "????,????????????" },
      { speaker: "??", line: "?????2.50???" },
      { speaker: "??", line: "?????????????" },
      { speaker: "??", line: "??,????????????!" },
      { speaker: "??", line: "????????????" },
      { speaker: "??", line: "??,???????,????????" }
    ],
    usefulExpressions: [
      { expression: "Does this bus go to...?", meaning: "????...??", usage: "??????" },
      { expression: "That'll be...", meaning: "??...", usage: "????" },
      { expression: "Do I need to transfer?", meaning: "???????", usage: "????????" },
      { expression: "Right in front of", meaning: "??...??", usage: "????" },
      { expression: "Enjoy your ride", meaning: "????", usage: "?????" }
    ],
    grammarFocus: [
      {
        title: "Yes/No Questions with 'Does'",
        explanation: "? 'Does...?' ????????????",
        examples: [
          "Does this bus go to the airport?",
          "Does the train stop at Central?",
          "Does it run every 10 minutes?"
        ]
      },
      {
        title: "Prepositions of Place",
        explanation: "????????",
        examples: [
          "The museum is next to the park.",
          "The stop is in front of the museum.",
          "The station is on Main Street."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Go straight", meaning: "??", example: "This bus goes straight there." },
      { chunk: "Right in front of", meaning: "??...??", example: "The museum is right in front of the stop." },
      { chunk: "Do I need to transfer", meaning: "??????", example: "Do I need to transfer anywhere?" }
    ],
    pronunciationTips: [
      { tip: "That'll be ? /ðæt?l bi?/", example: "Contraction sounds natural" },
      { tip: "Right in front of ? /ra?t ?n fr?nt ?v/", example: "Fast, connected speech" }
    ],
    commonMistakes: [
      {
        mistake: "'I need transfer'",
        correction: "'I need to transfer' ? 'Do I need to transfer?'",
        explanation: "'Transfer' ???????? 'to'?"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You need to get from the bus stop to the museum. Ask the driver about the route, ticket price, and what stop to get off at.",
        prompts: [
          "Check if the bus goes to the museum",
          "Buy a ticket",
          "Ask if you need to transfer",
          "Ask which stop to get off at",
          "Thank the driver"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Schedule",
        synonyms: ["Timetable", "Plan"],
        antonyms: [],
        example: "What time is the next bus?"
      },
      {
        word: "Platform",
        synonyms: ["Track", "Terminal"],
        antonyms: [],
        example: "The train leaves from platform 3."
      }
    ],
    shadowingPractice: [
      "Excuse me, does this bus go to Central Station?",
      "That'll be $2.50, please.",
      "Do I need to transfer anywhere?",
      "The next stop is Main Street.",
      "Thank you. Enjoy your ride!"
    ],
    speakingChallenge: {
      instruction: "Practice taking public transport to 3 destinations: the museum, the park, and the shopping mall. Ask about routes, prices, and stops.",
      hints: [
        "Start with 'Does this bus go to...?'",
        "Ask the ticket price",
        "Confirm if you need to transfer",
        "Ask which stop to get off at"
      ]
    }
  },
  {
    id: "internet-social-media",
    title: "Internet and Social Media",
    emoji: "??",
    description: "Talking about social media, online activities, and digital habits.",
    color: "from-blue-400 to-cyan-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Post", phonetic: "/po?st/", chinese: "??", partOfSpeech: "noun / verb" },
      { word: "Follow", phonetic: "/'f?lo?/", chinese: "??", partOfSpeech: "verb" },
      { word: "Like", phonetic: "/la?k/", chinese: "??", partOfSpeech: "verb" },
      { word: "Comment", phonetic: "/'k?ment/", chinese: "??", partOfSpeech: "noun / verb" },
      { word: "Share", phonetic: "/?er/", chinese: "??", partOfSpeech: "verb" },
      { word: "Online", phonetic: "/'?nla?n/", chinese: "???", partOfSpeech: "adjective" }
    ],
    conversation: [
      { speaker: "Anna", line: "Did you see my new post on Instagram?" },
      { speaker: "Ben", line: "Not yet! What did you post?" },
      { speaker: "Anna", line: "I posted a photo of my trip. Can you like and comment?" },
      { speaker: "Ben", line: "Sure! I'll do it now. How many followers do you have now?" },
      { speaker: "Anna", line: "I have 500 followers. I'm trying to post more often." },
      { speaker: "Ben", line: "That's great! Should I share your post with my friends?" },
      { speaker: "Anna", line: "Yes, please! The more shares, the better." }
    ],
    chineseTranslation: [
      { speaker: "??", line: "????Instagram????????" },
      { speaker: "?", line: "??!??????" },
      { speaker: "??", line: "????????????????????" },
      { speaker: "?", line: "??!????????????????" },
      { speaker: "??", line: "??500??????????????" },
      { speaker: "?", line: "???!???????????????" },
      { speaker: "??", line: "??,?!???????" }
    ],
    usefulExpressions: [
      { expression: "Did you see my post?", meaning: "??????????", usage: "????????????" },
      { expression: "Can you like and comment?", meaning: "?????????", usage: "????" },
      { expression: "Post more often", meaning: "??????", usage: "??????" },
      { expression: "The more... the better", meaning: "????", usage: "????" },
      { expression: "Share with...", meaning: "???...", usage: "????" }
    ],
    grammarFocus: [
      {
        title: "Present Perfect for Recent Actions",
        explanation: "????????????????",
        examples: [
          "Have you seen my post?",
          "I have just posted a photo.",
          "How many followers have you gained?"
        ]
      },
      {
        title: "Comparative Structure: The more... the better",
        explanation: "? 'The more... the better' ???????",
        examples: [
          "The more shares, the better.",
          "The more likes, the better.",
          "The more often, the better."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Post a photo", meaning: "???", example: "I posted a photo on Instagram." },
      { chunk: "Like and comment", meaning: "?????", example: "Can you like and comment?" },
      { chunk: "The more... the better", meaning: "????", example: "The more shares, the better." }
    ],
    pronunciationTips: [
      { tip: "Followers ? /'f?lo??rz/", example: "Stress on first syllable" },
      { tip: "The more... the better ? /ð? m??r... ð? 'bet?r/", example: "Connected speech" }
    ],
    commonMistakes: [
      {
        mistake: "'Did you post my photo?'",
        correction: "'Did you see my post?' ? 'Have you seen my post?'",
        explanation: "'See' ????;'Post' ?????"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You and a friend are talking about social media. Ask about their posts, offer to like and share, and discuss your own online habits.",
        prompts: [
          "Ask if they saw your post",
          "Offer to like and comment",
          "Ask about their follower count",
          "Suggest sharing each other's posts",
          "Talk about posting frequency"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Hashtag",
        synonyms: ["Tag", "Keyword"],
        antonyms: [],
        example: "Don't forget to use hashtags."
      },
      {
        word: "Story",
        synonyms: ["Update", "Temporary post"],
        antonyms: [],
        example: "I posted a story on Instagram."
      }
    ],
    shadowingPractice: [
      "Did you see my new post?",
      "I posted a photo of my trip.",
      "Can you like and comment?",
      "How many followers do you have?",
      "The more shares, the better!"
    ],
    speakingChallenge: {
      instruction: "Practice talking about social media with a friend. Use 'post', 'like', 'follow', and 'share'. Discuss your favorite platforms and posting habits.",
      hints: [
        "Ask about their latest post",
        "Offer to like and comment",
        "Ask about follower count",
        "Suggest sharing posts",
        "Talk about posting frequency"
      ]
    }
  },
  {
    id: "asking-for-help",
    title: "Asking for Help",
    emoji: "??",
    description: "Polite ways to ask for help in shops, streets, and public places.",
    color: "from-yellow-400 to-amber-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Help", phonetic: "/help/", chinese: "??", partOfSpeech: "noun / verb" },
      { word: "Can you...?", phonetic: "/kæn ju?/", chinese: "??...??", partOfSpeech: "question" },
      { word: "Excuse me", phonetic: "/?k'sku?z mi?/", chinese: "????", partOfSpeech: "phrase" },
      { word: "Lost", phonetic: "/l?st/", chinese: "???", partOfSpeech: "adjective" },
      { word: "Problem", phonetic: "/'pr?bl?m/", chinese: "??", partOfSpeech: "noun" },
      { word: "Thank you", phonetic: "/?æ?k ju?/", chinese: "??", partOfSpeech: "phrase" }
    ],
    conversation: [
      { speaker: "Tourist", line: "Excuse me, I'm lost. Can you help me find the museum?" },
      { speaker: "Local", line: "Of course. It's just two blocks straight ahead. Turn left at the traffic light." },
      { speaker: "Tourist", line: "Thank you! Is it open on Sundays?" },
      { speaker: "Local", line: "Yes, it opens at 10 AM. You have plenty of time." },
      { speaker: "Tourist", line: "You're very kind. Thank you for your help!" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "????,???????????????" },
      { speaker: "???", line: "?????????,????????" },
      { speaker: "??", line: "??!???????" },
      { speaker: "???", line: "??,??10???????????" },
      { speaker: "??", line: "????????????!" }
    ],
    usefulExpressions: [
      { expression: "Can you help me...?", meaning: "????...??", usage: "??????" },
      { expression: "I'm lost", meaning: "????", usage: "??????" },
      { expression: "Can you show me...?", meaning: "?????...??", usage: "???????" },
      { expression: "Plenty of time", meaning: "????", usage: "??????" },
      { expression: "Thank you for your help", meaning: "??????", usage: "????" }
    ],
    grammarFocus: [
      {
        title: "Polite Requests with 'Can you'",
        explanation: "? 'Can you...?' ???????",
        examples: [
          "Can you help me?",
          "Can you show me the way?",
          "Can you repeat that, please?"
        ]
      },
      {
        title: "Simple Past for Location",
        explanation: "??????????????",
        examples: [
          "I lost my way.",
          "I left my bag at home.",
          "I missed the bus."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Can you help me", meaning: "?????", example: "Can you help me find the museum?" },
      { chunk: "I'm lost", meaning: "????", example: "I'm lost. Can you help me?" },
      { chunk: "Thank you for your help", meaning: "??????", example: "Thank you for your help!" }
    ],
    pronunciationTips: [
      { tip: "Can you ? /kæn ju?/", example: "Natural, polite request" },
      { tip: "Thank you for your help ? /?æ?k ju? f?r j?r help/", example: "Connected speech" }
    ],
    commonMistakes: [
      {
        mistake: "'Help me!'",
        correction: "'Can you help me, please?'",
        explanation: "?? 'Can you' ? 'please' ????????"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You are lost in a new city. Ask a local for help finding your hotel. Ask about distance, transportation, and time.",
        prompts: [
          "Get their attention politely",
          "Explain that you're lost",
          "Ask for directions",
          "Ask how far it is",
          "Thank them sincerely"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Direction",
        synonyms: ["Guidance", "Way"],
        antonyms: [],
        example: "Can you give me directions to the station?"
      },
      {
        word: "Traffic light",
        synonyms: ["Signal", "Stop light"],
        antonyms: [],
        example: "Turn left at the traffic light."
      }
    ],
    shadowingPractice: [
      "Excuse me, I'm lost. Can you help me find the museum?",
      "Of course. It's just two blocks straight ahead.",
      "Turn left at the traffic light.",
      "Is it open on Sundays?",
      "Thank you for your help!"
    ],
    speakingChallenge: {
      instruction: "Practice asking for help in 3 situations: finding a museum, asking for a restroom, and asking someone to take a photo for you.",
      hints: [
        "Start with 'Excuse me'",
        "Say 'Can you help me?'",
        "Explain what you need",
        "Always say 'Thank you'"
      ]
    }
  },
  {
    id: "weather-chat",
    title: "Talking About Weather",
    emoji: "???",
    description: "Describing weather, making predictions, and using weather in small talk.",
    color: "from-sky-400 to-blue-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Sunny", phonetic: "/'s?ni/", chinese: "???", partOfSpeech: "adjective" },
      { word: "Rainy", phonetic: "/'re?ni/", chinese: "???", partOfSpeech: "adjective" },
      { word: "Cold", phonetic: "/ko?ld/", chinese: "??", partOfSpeech: "adjective" },
      { word: "Warm", phonetic: "/w??rm/", chinese: "???", partOfSpeech: "adjective" },
      { word: "Forecast", phonetic: "/'f??rkæst/", chinese: "????", partOfSpeech: "noun" },
      { word: "Temperature", phonetic: "/'tempr?t??r/", chinese: "??", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Anna", line: "It's a beautiful sunny day today." },
      { speaker: "Ben", line: "Yes, it's warm and sunny. Perfect for a picnic!" },
      { speaker: "Anna", line: "What's the forecast for tomorrow?" },
      { speaker: "Ben", line: "It says it will be rainy and cold. We should bring jackets." },
      { speaker: "Anna", line: "Good idea. I don't like rainy days." },
      { speaker: "Ben", line: "Me neither. But we need rain for the plants!" },
      { speaker: "Anna", line: "That's true. Let's enjoy the sun today." }
    ],
    chineseTranslation: [
      { speaker: "Anna", line: "??????,?????" },
      { speaker: "Ben", line: "??,????????????!" },
      { speaker: "Anna", line: "??????????" },
      { speaker: "Ben", line: "??????,???????????" },
      { speaker: "Anna", line: "????????????" },
      { speaker: "Ben", line: "??????????????!" },
      { speaker: "Anna", line: "???????????????" }
    ],
    usefulExpressions: [
      { expression: "It's sunny/rainy/cold", meaning: "????/??/?", usage: "????" },
      { expression: "What's the forecast?", meaning: "????????", usage: "??????" },
      { expression: "Perfect for...", meaning: "????...", usage: "???????" },
      { expression: "Me neither", meaning: "???", usage: "???????????" },
      { expression: "Let's...", meaning: "???...", usage: "????" }
    ],
    grammarFocus: [
      {
        title: "Present Tense for Weather",
        explanation: "?????????????",
        examples: [
          "It's sunny today.",
          "It's raining outside.",
          "It's cold in winter."
        ]
      },
      {
        title: "Future with 'Will'",
        explanation: "? 'will' ???????",
        examples: [
          "It will rain tomorrow.",
          "It will be cold next week.",
          "The temperature will drop."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "It's sunny", meaning: "????", example: "It's sunny today." },
      { chunk: "What's the forecast", meaning: "????", example: "What's the forecast for tomorrow?" },
      { chunk: "Me neither", meaning: "???", example: "I don't like rain. Me neither." }
    ],
    pronunciationTips: [
      { tip: "Sunny ? /'s?ni/", example: "Double 'n', stress on first syllable" },
      { tip: "Forecast ? /'f??rkæst/", example: "Stress on first syllable" }
    ],
    commonMistakes: [
      {
        mistake: "'Today is rainy'",
        correction: "'It's rainy today'",
        explanation: "????? 'It's...',????? 'Today is...'"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You meet your neighbor outside. Talk about today's weather, tomorrow's forecast, and plan an outdoor activity together.",
        prompts: [
          "Comment on today's weather",
          "Ask about tomorrow's forecast",
          "Express your preference",
          "Suggest an activity",
          "Agree on a plan"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Forecast",
        synonyms: ["Prediction", "Outlook"],
        antonyms: [],
        example: "The forecast says it will rain."
      },
      {
        word: "Temperature",
        synonyms: ["Heat", "Cold"],
        antonyms: [],
        example: "The temperature is dropping."
      }
    ],
    shadowingPractice: [
      "It's a beautiful sunny day today.",
      "What's the forecast for tomorrow?",
      "It says it will be rainy and cold.",
      "We need rain for the plants!",
      "Let's enjoy the sun today."
    ],
    speakingChallenge: {
      instruction: "Practice talking about weather for a week. Use 'It's...', 'It will...', and 'Me neither'. Compare weather in different cities.",
      hints: [
        "Start with today's weather",
        "Use adjectives like sunny, rainy, cold",
        "Ask about tomorrow's forecast",
        "Express likes and dislikes",
        "Suggest activities based on weather"
      ]
    }
  },
  {
    id: "meeting-neighbors",
    title: "Meeting New Neighbors",
    emoji: "???",
    description: "Introducing yourself, small talk, and being friendly with new neighbors.",
    color: "from-emerald-400 to-teal-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Neighbor", phonetic: "/'ne?b?r/", chinese: "??", partOfSpeech: "noun" },
      { word: "Building", phonetic: "/'b?ld??/", chinese: "???", partOfSpeech: "noun" },
      { word: "Floor", phonetic: "/fl??r/", chinese: "??", partOfSpeech: "noun" },
      { word: "Introduce", phonetic: "/??ntr?'du?s/", chinese: "??", partOfSpeech: "verb" },
      { word: "Welcome", phonetic: "/'welk?m/", chinese: "??", partOfSpeech: "verb / adjective" },
      { word: "Get to know", phonetic: "/get tu? no?/", chinese: "??", partOfSpeech: "phrase" }
    ],
    conversation: [
      { speaker: "Anna", line: "Hi! I just moved in next door. I'm Anna." },
      { speaker: "Neighbor", line: "Welcome to the building! I'm Mike, from 2B." },
      { speaker: "Anna", line: "Nice to meet you, Mike! Is it a quiet building?" },
      { speaker: "Neighbor", line: "Yes, everyone here is friendly. What floor are you on?" },
      { speaker: "Anna", line: "I'm on 3A. I brought cookies. Would you like one?" },
      { speaker: "Neighbor", line: "That's so kind of you! Thank you very much." },
      { speaker: "Anna", line: "If you need anything, just knock. Welcome again!" },
      { speaker: "Neighbor", line: "You too! Let me know if you need help moving anything." }
    ],
    chineseTranslation: [
      { speaker: "Anna", line: "?!??????????Anna?" },
      { speaker: "??", line: "???????!??Mike,2B??" },
      { speaker: "Anna", line: "??????,Mike!???????" },
      { speaker: "??", line: "??,?????????????" },
      { speaker: "Anna", line: "??3A?????????????" },
      { speaker: "??", line: "???!?????" },
      { speaker: "Anna", line: "??????,??????????!" },
      { speaker: "??", line: "???!?????????,????" }
    ],
    usefulExpressions: [
      { expression: "I just moved in", meaning: "????", usage: "??????????" },
      { expression: "Nice to meet you", meaning: "??????", usage: "????????" },
      { expression: "Would you like...?", meaning: "???...??", usage: "??????" },
      { expression: "That's so kind of you", meaning: "???", usage: "???????" },
      { expression: "Let me know if...", meaning: "????...????", usage: "??????" }
    ],
    grammarFocus: [
      {
        title: "Present Perfect for Recent Actions",
        explanation: "????????????????",
        examples: [
          "I just moved in.",
          "I have just arrived.",
          "I have brought cookies."
        ]
      },
      {
        title: "Conditional Offers with 'Would you like'",
        explanation: "? 'Would you like...?' ???????????",
        examples: [
          "Would you like a cookie?",
          "Would you like some water?",
          "Would you like me to help?"
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Just moved in", meaning: "???", example: "I just moved in next door." },
      { chunk: "Nice to meet you", meaning: "??????", example: "Nice to meet you, Mike!" },
      { chunk: "That's so kind of you", meaning: "???", example: "That's so kind of you!" }
    ],
    pronunciationTips: [
      { tip: "Neighbor ? /'ne?b?r/", example: "Stress on first syllable" },
      { tip: "Would you like ? /w?d ju? la?k/", example: "Polite offer" }
    ],
    commonMistakes: [
      {
        mistake: "'I moved in yesterday' ??????",
        correction: "?????? 'I have just moved in' ???",
        explanation: "???????????????,???????"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You meet your new neighbor in the hallway. Introduce yourself, ask about the building, and offer a small gift.",
        prompts: [
          "Greet them warmly",
          "Introduce yourself",
          "Ask about the building",
          "Offer a small gift",
          "Exchange contact info"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Friendly",
        synonyms: ["Nice", "Kind", "Welcoming"],
        antonyms: ["Unfriendly", "Cold"],
        example: "Everyone here is friendly."
      },
      {
        word: "Building",
        synonyms: ["Apartment building", "Block"],
        antonyms: [],
        example: "It's a tall building."
      }
    ],
    shadowingPractice: [
      "Hi! I just moved in next door. I'm Anna.",
      "Welcome to the building! I'm Mike, from 2B.",
      "Nice to meet you, Mike!",
      "I brought cookies. Would you like one?",
      "That's so kind of you!"
    ],
    speakingChallenge: {
      instruction: "Practice introducing yourself to a new neighbor. Use 'I just moved in', 'Nice to meet you', and offer something small.",
      hints: [
        "Start with a friendly greeting",
        "Say which apartment you're in",
        "Ask about the building",
        "Offer a small gift or help",
        "End with a warm goodbye"
      ]
    }
  },
  {
    id: "at-laundromat",
    title: "At the Laundromat",
    emoji: "??",
    description: "Washing clothes, asking about machines, and basic laundromat conversation.",
    color: "from-cyan-400 to-blue-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Laundry", phonetic: "/'l??ndri/", chinese: "??", partOfSpeech: "noun" },
      { word: "Machine", phonetic: "/m?'?i?n/", chinese: "??", partOfSpeech: "noun" },
      { word: "Detergent", phonetic: "/d?'t??rd??nt/", chinese: "???", partOfSpeech: "noun" },
      { word: "Dryer", phonetic: "/'dra??r/", chinese: "???", partOfSpeech: "noun" },
      { word: "Change", phonetic: "/t?e?nd?/", chinese: "??", partOfSpeech: "noun" },
      { word: "Spin", phonetic: "/sp?n/", chinese: "??", partOfSpeech: "verb" }
    ],
    conversation: [
      { speaker: "Customer", line: "Hi, how much is a wash and dry cycle?" },
      { speaker: "Attendant", line: "A wash is $2 and dry is $1.50. Machines take quarters." },
      { speaker: "Customer", line: "Do you sell detergent here?" },
      { speaker: "Attendant", line: "Yes, right here. $1 per box. Do you need change for the machine?" },
      { speaker: "Customer", line: "Yes, please. Can you break a $20 bill?" },
      { speaker: "Attendant", line: "Sure. Here are your quarters. The wash cycle takes 30 minutes." },
      { speaker: "Customer", line: "Thank you! Can I use my phone while I wait?" },
      { speaker: "Attendant", line: "Of course. There's free Wi-Fi. Password is on the wall." }
    ],
    chineseTranslation: [
      { speaker: "??", line: "?,??????????" },
      { speaker: "??", line: "?2??,?1.50??????25?????" },
      { speaker: "??", line: "??????????" },
      { speaker: "??", line: "??,???????1???????????" },
      { speaker: "??", line: "??,???????20????" },
      { speaker: "??", line: "???????25?????????30???" },
      { speaker: "??", line: "??!?????????????" },
      { speaker: "??", line: "????????Wi-Fi???????" }
    ],
    usefulExpressions: [
      { expression: "How much is...?", meaning: "...????", usage: "????" },
      { expression: "Do you sell...?", meaning: "???...??", usage: "????????" },
      { expression: "Can you break a...?", meaning: "?????...??", usage: "?????" },
      { expression: "Here are your...", meaning: "????...", usage: "????" },
      { expression: "Free Wi-Fi", meaning: "??Wi-Fi", usage: "??????" }
    ],
    grammarFocus: [
      {
        title: "Questions with 'How much'",
        explanation: "? 'How much...?' ?????",
        examples: [
          "How much is a wash?",
          "How much is detergent?",
          "How much change do you need?"
        ]
      },
      {
        title: "Polite Requests with 'Can you'",
        explanation: "? 'Can you...?' ???????",
        examples: [
          "Can you break a $20 bill?",
          "Can you show me how to use it?",
          "Can I use your phone?"
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Wash and dry", meaning: "????", example: "I need a wash and dry cycle." },
      { chunk: "Break a bill", meaning: "???", example: "Can you break a $20 bill?" },
      { chunk: "Free Wi-Fi", meaning: "??Wi-Fi", example: "There's free Wi-Fi here." }
    ],
    pronunciationTips: [
      { tip: "Detergent ? /d?'t??rd??nt/", example: "Stress on second syllable" },
      { tip: "Quarters ? /'kw??rt?rz/", example: "Stress on first syllable" }
    ],
    commonMistakes: [
      {
        mistake: "'How much are a wash and dry?'",
        correction: "'How much is a wash and dry cycle?'",
        explanation: "???????????,??? 'is'?"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You need to wash your clothes at a laundromat. Ask about prices, buy detergent, get change, and ask about Wi-Fi.",
        prompts: [
          "Ask about wash and dry prices",
          "Ask if they sell detergent",
          "Get change for the machine",
          "Ask about Wi-Fi",
          "Thank them"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Cycle",
        synonyms: ["Session", "Round"],
        antonyms: [],
        example: "The wash cycle takes 30 minutes."
      },
      {
        word: "Change",
        synonyms: ["Coins", "Small bills"],
        antonyms: [],
        example: "Do you have change for the machine?"
      }
    ],
    shadowingPractice: [
      "Hi, how much is a wash and dry cycle?",
      "Do you sell detergent here?",
      "Can you break a $20 bill?",
      "The wash cycle takes 30 minutes.",
      "There's free Wi-Fi. Password is on the wall."
    ],
    speakingChallenge: {
      instruction: "Practice at a laundromat: ask prices, buy detergent, get change, and ask about amenities. Use 'How much', 'Do you sell', and 'Can you'.",
      hints: [
        "Ask about wash and dry prices",
        "Buy detergent if needed",
        "Get change for quarters",
        "Ask about Wi-Fi or seating"
      ]
    }
  },
  {
    id: "pet-store",
    title: "At the Pet Store",
    emoji: "??",
    description: "Buying pet food, asking about pets, and talking to pet store staff.",
    color: "from-orange-400 to-amber-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Pet", phonetic: "/pet/", chinese: "??", partOfSpeech: "noun" },
      { word: "Dog food", phonetic: "/d?g fu?d/", chinese: "??", partOfSpeech: "noun" },
      { word: "Cat food", phonetic: "/kæt fu?d/", chinese: "??", partOfSpeech: "noun" },
      { word: "Leash", phonetic: "/li??/", chinese: "???", partOfSpeech: "noun" },
      { word: "Cage", phonetic: "/ke?d?/", chinese: "??", partOfSpeech: "noun" },
      { word: "Toy", phonetic: "/t??/", chinese: "??", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Customer", line: "Hi, I'm looking for dog food for a small puppy." },
      { speaker: "Staff", line: "Sure! What brand do you usually buy?" },
      { speaker: "Customer", line: "I'm not sure. This is my first puppy." },
      { speaker: "Staff", line: "No problem! I recommend this one. It's good for puppies." },
      { speaker: "Customer", line: "Great. Do you have any toys for small dogs?" },
      { speaker: "Staff", line: "Yes, right here. Also, don't forget a leash and a collar." },
      { speaker: "Customer", line: "Perfect. How much is everything together?" },
      { speaker: "Staff", line: "That'll be $35. Would you like a bag?" },
      { speaker: "Customer", line: "Yes, please. Thank you for your help!" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "?,?????????" },
      { speaker: "??", line: "??!?????????" },
      { speaker: "??", line: "???????????????" },
      { speaker: "??", line: "???!????????????" },
      { speaker: "??", line: "??????????????" },
      { speaker: "??", line: "??,??????,??????????" },
      { speaker: "??", line: "?????????" },
      { speaker: "??", line: "??35??????????" },
      { speaker: "??", line: "??,???????????!" }
    ],
    usefulExpressions: [
      { expression: "I'm looking for...", meaning: "???...", usage: "???????" },
      { expression: "What brand...?", meaning: "????...?", usage: "????" },
      { expression: "I recommend...", meaning: "???...", usage: "??????" },
      { expression: "Don't forget...", meaning: "???...", usage: "????" },
      { expression: "That'll be...", meaning: "??...", usage: "????" }
    ],
    grammarFocus: [
      {
        title: "Present Continuous for Current Actions",
        explanation: "??????????????????",
        examples: [
          "I'm looking for dog food.",
          "I'm buying a gift.",
          "What are you looking for?"
        ]
      },
      {
        title: "Imperative for Suggestions",
        explanation: "?????????",
        examples: [
          "Don't forget a leash.",
          "Try this one.",
          "Take this coupon."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "I'm looking for", meaning: "???", example: "I'm looking for dog food." },
      { chunk: "Don't forget", meaning: "???", example: "Don't forget a leash." },
      { chunk: "That'll be", meaning: "??", example: "That'll be $35." }
    ],
    pronunciationTips: [
      { tip: "Puppy ? /'p?pi/", example: "Stress on first syllable" },
      { tip: "Leash ? /li??/", example: "Long 'e' sound" }
    ],
    commonMistakes: [
      {
        mistake: "'I look for dog food' ??????",
        correction: "?????? 'I'm looking for...' ????????",
        explanation: "????????????????"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You just got a new puppy and need supplies. Go to the pet store, ask for food recommendations, and buy a toy and leash.",
        prompts: [
          "Enter and greet the staff",
          "Say you need puppy food",
          "Ask for recommendations",
          "Choose a toy and leash",
          "Pay and say thank you"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Puppy",
        synonyms: ["Young dog", "Pup"],
        antonyms: [],
        example: "The puppy is very cute."
      },
      {
        word: "Collar",
        synonyms: ["Neck band", "Leash attachment"],
        antonyms: [],
        example: "Don't forget a collar for your dog."
      }
    ],
    shadowingPractice: [
      "Hi, I'm looking for dog food for a small puppy.",
      "I'm not sure. This is my first puppy.",
      "I recommend this one. It's good for puppies.",
      "Don't forget a leash and a collar.",
      "That'll be $35. Would you like a bag?"
    ],
    speakingChallenge: {
      instruction: "Practice buying supplies for a new pet. Use 'I'm looking for', 'I recommend', and 'Don't forget'. Include food, toys, and accessories.",
      hints: [
        "Start with 'I'm looking for'",
        "Ask for recommendations",
        "Choose items",
        "Ask about price",
        "Say thank you"
      ]
    }
  },
  {
    id: "library-visit",
    title: "At the Library",
    emoji: "??",
    description: "Finding books, asking for help, and using library services.",
    color: "from-indigo-400 to-purple-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Library", phonetic: "/'la?breri/", chinese: "???", partOfSpeech: "noun" },
      { word: "Book", phonetic: "/b?k/", chinese: "?", partOfSpeech: "noun" },
      { word: "Membership", phonetic: "/'memb?r??p/", chinese: "???", partOfSpeech: "noun" },
      { word: "Borrow", phonetic: "/'b?ro?/", chinese: "??", partOfSpeech: "verb" },
      { word: "Return", phonetic: "/r?'t??rn/", chinese: "??", partOfSpeech: "verb" },
      { word: "Fine", phonetic: "/fa?n/", chinese: "??", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Visitor", line: "Hi, I'd like to borrow a book about gardening." },
      { speaker: "Librarian", line: "Sure! Do you have a library card?" },
      { speaker: "Visitor", line: "No, I don't. How do I get one?" },
      { speaker: "Librarian", line: "I just need your ID and address. It's free." },
      { speaker: "Visitor", line: "Here you go. How many books can I borrow?" },
      { speaker: "Librarian", line: "You can borrow up to 5 books for 3 weeks." },
      { speaker: "Visitor", line: "Great! And what time do you close?" },
      { speaker: "Librarian", line: "We close at 8 PM on weekdays and 5 PM on weekends." }
    ],
    chineseTranslation: [
      { speaker: "??", line: "?,????????????" },
      { speaker: "?????", line: "??!???????" },
      { speaker: "??", line: "??????????" },
      { speaker: "?????", line: "?????????????????" },
      { speaker: "??", line: "???????????" },
      { speaker: "?????", line: "??????5?,??3??" },
      { speaker: "??", line: "???!???????" },
      { speaker: "?????", line: "?????8???,????5??" }
    ],
    usefulExpressions: [
      { expression: "I'd like to borrow...", meaning: "???...", usage: "??????" },
      { expression: "Do you have a...?", meaning: "??...??", usage: "????" },
      { expression: "How many...?", meaning: "??...?", usage: "????" },
      { expression: "Up to...", meaning: "??...", usage: "????" },
      { expression: "Here you go", meaning: "??", usage: "????" }
    ],
    grammarFocus: [
      {
        title: "Modal Verbs for Permission",
        explanation: "? 'Can I...?' ? 'Could I...?' ???????",
        examples: [
          "Can I borrow this book?",
          "Could I use the computer?",
          "Can I renew my books?"
        ]
      },
      {
        title: "Present Simple for Schedules",
        explanation: "?????????????",
        examples: [
          "The library closes at 8 PM.",
          "The bus arrives at 9.",
          "The movie starts at 7."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "I'd like to borrow", meaning: "???", example: "I'd like to borrow a book." },
      { chunk: "Library card", meaning: "???", example: "Do you have a library card?" },
      { chunk: "Up to 5 books", meaning: "??5?", example: "You can borrow up to 5 books." }
    ],
    pronunciationTips: [
      { tip: "Library ? /'la?breri/", example: "Stress on first syllable" },
      { tip: "Borrow ? /'b?ro?/", example: "Stress on first syllable" }
    ],
    commonMistakes: [
      {
        mistake: "'I want to borrow a book' ??????",
        correction: "??????? 'I'd like to borrow...'",
        explanation: "?????????????????"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You go to the library to borrow books. Get a membership card, find a book, ask about borrowing limits, and check the closing time.",
        prompts: [
          "Ask about getting a library card",
          "Provide your information",
          "Ask what books you can borrow",
          "Find a book on your topic",
          "Ask about closing time"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Membership",
        synonyms: ["Enrollment", "Registration"],
        antonyms: [],
        example: "Library membership is free."
      },
      {
        word: "Renew",
        synonyms: ["Extend", "Prolong"],
        antonyms: [],
        example: "Can I renew my books online?"
      }
    ],
    shadowingPractice: [
      "Hi, I'd like to borrow a book about gardening.",
      "Do you have a library card?",
      "I just need your ID and address. It's free.",
      "You can borrow up to 5 books for 3 weeks.",
      "We close at 8 PM on weekdays."
    ],
    speakingChallenge: {
      instruction: "Practice visiting a library: get a card, borrow books, ask about due dates, and check hours. Use 'I'd like to', 'Do you have', and 'How many'.",
      hints: [
        "Start with 'Hi, I'd like to borrow...'",
        "Get a library card if needed",
        "Ask about borrowing limits",
        "Check when books are due",
        "Ask about closing time"
      ]
    }
  },
  {
    id: "pharmacy",
    title: "At the Pharmacy",
    emoji: "??",
    description: "Buying medicine, asking for advice, and understanding labels.",
    color: "from-green-400 to-emerald-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Medicine", phonetic: "/'med?s?n/", chinese: "?", partOfSpeech: "noun" },
      { word: "Prescription", phonetic: "/pr?'skr?p?n/", chinese: "??", partOfSpeech: "noun" },
      { word: "Symptom", phonetic: "/'s?mpt?m/", chinese: "??", partOfSpeech: "noun" },
      { word: "Dosage", phonetic: "/'do?s?d?/", chinese: "??", partOfSpeech: "noun" },
      { word: "Side effects", phonetic: "/'sa?d ?fekts/", chinese: "???", partOfSpeech: "noun" },
      { word: "Generic", phonetic: "/d??'ner?k/", chinese: "????", partOfSpeech: "adjective" }
    ],
    conversation: [
      { speaker: "Customer", line: "Hi, I have a prescription to fill." },
      { speaker: "Pharmacist", line: "Sure. Do you have the prescription with you?" },
      { speaker: "Customer", line: "Yes, here it is. It's for antibiotics." },
      { speaker: "Pharmacist", line: "Okay, this will take about 15 minutes. Do you have any allergies?" },
      { speaker: "Customer", line: "No, I don't. How should I take this medicine?" },
      { speaker: "Pharmacist", line: "Take one pill three times a day with food. Here's the leaflet with all the details." },
      { speaker: "Customer", line: "Thank you. Are there any side effects I should know about?" },
      { speaker: "Pharmacist", line: "Some people feel sleepy. If that happens, just rest. And drink plenty of water." }
    ],
    chineseTranslation: [
      { speaker: "??", line: "?,?????????" },
      { speaker: "???", line: "??????????" },
      { speaker: "??", line: "????????????" },
      { speaker: "???", line: "??,????15??????????" },
      { speaker: "??", line: "????????????" },
      { speaker: "???", line: "????,????,??????????,????????" },
      { speaker: "??", line: "???????????????" },
      { speaker: "???", line: "?????????????????,?????????" }
    ],
    usefulExpressions: [
      { expression: "I have a prescription to fill", meaning: "????????", usage: "?????" },
      { expression: "Take one pill...", meaning: "???...", usage: "??????" },
      { expression: "With food", meaning: "??", usage: "??????" },
      { expression: "Side effects", meaning: "???", usage: "??????" },
      { expression: "Drink plenty of water", meaning: "???", usage: "????" }
    ],
    grammarFocus: [
      {
        title: "Modal Verbs for Advice",
        explanation: "? 'should' ? 'can' ?????",
        examples: [
          "You should take it with food.",
          "You can take it twice a day.",
          "You should drink plenty of water."
        ]
      },
      {
        title: "Present Simple for Instructions",
        explanation: "???????????",
        examples: [
          "Take one pill three times a day.",
          "Store in a cool place.",
          "Do not exceed the dosage."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Fill a prescription", meaning: "??", example: "I need to fill this prescription." },
      { chunk: "Take one pill", meaning: "???", example: "Take one pill three times a day." },
      { chunk: "Side effects", meaning: "???", example: "Are there any side effects?" }
    ],
    pronunciationTips: [
      { tip: "Prescription ? /pr?'skr?p?n/", example: "Stress on second syllable" },
      { tip: "Dosage ? /'do?s?d?/", example: "Stress on first syllable" }
    ],
    commonMistakes: [
      {
        mistake: "'I have a medicine'",
        correction: "'I have a prescription' ? 'I need medicine'",
        explanation: "??? 'prescription';?? 'medicine'?"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You have a headache and go to the pharmacy. Describe your symptom, get medicine, and ask about dosage and side effects.",
        prompts: [
          "Tell the pharmacist your symptom",
          "Show your prescription if you have one",
          "Ask about dosage",
          "Ask about side effects",
          "Thank them and leave"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Allergy",
        synonyms: ["Reaction", "Sensitivity"],
        antonyms: [],
        example: "I have an allergy to penicillin."
      },
      {
        word: "Generic",
        synonyms: ["Non-brand", "Standard"],
        antonyms: ["Brand name"],
        example: "Is there a generic version?"
      }
    ],
    shadowingPractice: [
      "Hi, I have a prescription to fill.",
      "Take one pill three times a day with food.",
      "Are there any side effects I should know about?",
      "Some people feel sleepy.",
      "Drink plenty of water."
    ],
    speakingChallenge: {
      instruction: "Practice at a pharmacy: get medicine, ask about dosage, side effects, and storage. Use 'I have a prescription', 'How should I take', and 'Are there any side effects'.",
      hints: [
        "State your symptom",
        "Show prescription if needed",
        "Ask how to take the medicine",
        "Ask about side effects",
        "Confirm the dosage"
      ]
    }
  },
  {
    id: "taxi-ride",
    title: "Taking a Taxi",
    emoji: "??",
    description: "Getting a taxi, giving directions, and paying the fare.",
    color: "from-yellow-400 to-amber-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Taxi", phonetic: "/'tæksi/", chinese: "???", partOfSpeech: "noun" },
      { word: "Destination", phonetic: "/?dest?'ne??n/", chinese: "???", partOfSpeech: "noun" },
      { word: "Fare", phonetic: "/fer/", chinese: "??", partOfSpeech: "noun" },
      { word: "Traffic", phonetic: "/'træf?k/", chinese: "??", partOfSpeech: "noun" },
      { word: "Drop off", phonetic: "/dr?p ?f/", chinese: "??", partOfSpeech: "phrasal verb" },
      { word: "Change", phonetic: "/t?e?nd?/", chinese: "??", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Passenger", line: "Hi, can you take me to the airport?" },
      { speaker: "Driver", line: "Sure. That's about 20 minutes. Is that okay?" },
      { speaker: "Passenger", line: "Yes, that's fine. How much is the fare?" },
      { speaker: "Driver", line: "Approximately $25, depending on traffic." },
      { speaker: "Passenger", line: "Okay. Can you drop me at Terminal 2?" },
      { speaker: "Driver", line: "Of course. Do you have a preferred route?" },
      { speaker: "Passenger", line: "No, whatever is fastest. I'm in a hurry." },
      { speaker: "Driver", line: "No problem. We'll take the highway. Here's your receipt. Have a great flight!" }
    ],
    chineseTranslation: [
      { speaker: "??", line: "?,?????????" },
      { speaker: "??", line: "?????20???????" },
      { speaker: "??", line: "?????????" },
      { speaker: "??", line: "??25??,????????" },
      { speaker: "??", line: "??????2??????????" },
      { speaker: "??", line: "????????????" },
      { speaker: "??", line: "??,??????????" },
      { speaker: "??", line: "?????????????????????????!" }
    ],
    usefulExpressions: [
      { expression: "Can you take me to...?", meaning: "?????...??", usage: "????????" },
      { expression: "How much is the fare?", meaning: "??????", usage: "????" },
      { expression: "Approximately...", meaning: "??...", usage: "???????" },
      { expression: "Drop me at...", meaning: "?...????", usage: "??????" },
      { expression: "In a hurry", meaning: "???", usage: "?????" }
    ],
    grammarFocus: [
      {
        title: "Modal Verbs for Requests",
        explanation: "? 'Can you...?' ?????",
        examples: [
          "Can you take me to the airport?",
          "Can you drive faster?",
          "Can you drop me at Terminal 2?"
        ]
      },
      {
        title: "Comparative Adjectives",
        explanation: "?????????????",
        examples: [
          "The highway is faster.",
          "This route is shorter.",
          "It's better to avoid downtown."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Take me to", meaning: "???", example: "Can you take me to the airport?" },
      { chunk: "How much is the fare", meaning: "?????", example: "How much is the fare?" },
      { chunk: "Drop me at", meaning: "?...????", example: "Drop me at Terminal 2, please." }
    ],
    pronunciationTips: [
      { tip: "Destination ? /?dest?'ne??n/", example: "Stress on 'nay'" },
      { tip: "Approximately ? /?'pr?ks?m?tli/", example: "Stress on second syllable" }
    ],
    commonMistakes: [
      {
        mistake: "'Can you take I to...?'",
        correction: "'Can you take me to...?'",
        explanation: "??????? 'me',???? 'I'?"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You need to get to the airport. Call a taxi, give the destination, discuss the route, and pay the driver.",
        prompts: [
          "Call the taxi",
          "State your destination",
          "Ask about the fare",
          "Choose a route",
          "Pay and thank the driver"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Fare",
        synonyms: ["Price", "Cost"],
        antonyms: [],
        example: "The fare is approximately $25."
      },
      {
        word: "Traffic",
        synonyms: ["Congestion", "Vehicles"],
        antonyms: [],
        example: "The traffic is heavy today."
      }
    ],
    shadowingPractice: [
      "Hi, can you take me to the airport?",
      "That's about 20 minutes. Is that okay?",
      "How much is the fare?",
      "Can you drop me at Terminal 2?",
      "Have a great flight!"
    ],
    speakingChallenge: {
      instruction: "Practice taking a taxi to 3 places: the airport, a hotel, and a restaurant. Use 'Can you take me to', ask about fare, and say 'drop me at'.",
      hints: [
        "Ask the taxi to come to your location",
        "State your destination clearly",
        "Ask about the fare",
        "Choose a route if asked",
        "Pay and say thank you"
      ]
    }
  },
  {
    id: "hair-salon",
    title: "At the Hair Salon",
    emoji: "??",
    description: "Booking an appointment, describing what you want, and paying for services.",
    color: "from-pink-400 to-rose-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Appointment", phonetic: "/?'p??ntm?nt/", chinese: "??", partOfSpeech: "noun" },
      { word: "Haircut", phonetic: "/'herk?t/", chinese: "??", partOfSpeech: "noun" },
      { word: "Color", phonetic: "/'k?l?r/", chinese: "??", partOfSpeech: "noun" },
      { word: "Style", phonetic: "/sta?l/", chinese: "??", partOfSpeech: "noun" },
      { word: "Blow-dry", phonetic: "/blo? dra?/", chinese: "??", partOfSpeech: "verb" },
      { word: "Tip", phonetic: "/t?p/", chinese: "??", partOfSpeech: "noun" }
    ],
    conversation: [
      { speaker: "Customer", line: "Hi, I'd like to make an appointment for a haircut." },
      { speaker: "Receptionist", line: "Sure. Do you prefer a male or female stylist?" },
      { speaker: "Customer", line: "It doesn't matter. What time do you have available?" },
      { speaker: "Receptionist", line: "We have 2 PM and 4 PM today. Which works for you?" },
      { speaker: "Customer", line: "2 PM is perfect. Can I also get my hair colored?" },
      { speaker: "Receptionist", line: "Of course. I'll schedule that after the haircut. It will be about 2 hours total." },
      { speaker: "Customer", line: "That's fine. How much will it be?" },
      { speaker: "Receptionist", line: "Haircut is $30, color is $50. Total is $80 plus tax." }
    ],
    chineseTranslation: [
      { speaker: "??", line: "?,???????" },
      { speaker: "??", line: "?????????????????" },
      { speaker: "??", line: "??????????????" },
      { speaker: "??", line: "?????2??4??????????" },
      { speaker: "??", line: "2????????????" },
      { speaker: "??", line: "?????????????????2???" },
      { speaker: "??", line: "??????????" },
      { speaker: "??", line: "??30??,??50?????80?????" }
    ],
    usefulExpressions: [
      { expression: "I'd like to make an appointment", meaning: "????", usage: "????" },
      { expression: "What time do you have available?", meaning: "????????", usage: "??????" },
      { expression: "That works for me", meaning: "??????", usage: "????" },
      { expression: "Total is...", meaning: "??...", usage: "????" },
      { expression: "Plus tax", meaning: "??", usage: "??????" }
    ],
    grammarFocus: [
      {
        title: "Present Simple for Preferences",
        explanation: "???????????",
        examples: [
          "I prefer a female stylist.",
          "It doesn't matter to me.",
          "I want a short haircut."
        ]
      },
      {
        title: "Modal Verbs for Offers",
        explanation: "? 'Can I...?' ? 'Do you have...?' ???",
        examples: [
          "Can I also get my hair colored?",
          "Do you have any tips for dry hair?",
          "Can I book for Saturday?"
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Make an appointment", meaning: "??", example: "I'd like to make an appointment." },
      { chunk: "Haircut", meaning: "??", example: "I need a haircut." },
      { chunk: "Plus tax", meaning: "??", example: "Total is $80 plus tax." }
    ],
    pronunciationTips: [
      { tip: "Appointment ? /?'p??ntm?nt/", example: "Stress on second syllable" },
      { tip: "Stylist ? /'sta?l?st/", example: "Stress on first syllable" }
    ],
    commonMistakes: [
      {
        mistake: "'I want make an appointment'",
        correction: "'I'd like to make an appointment'",
        explanation: "???? 'I'd like to' ????"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You want a haircut and color. Call the salon, book an appointment, describe what you want, and ask about the price.",
        prompts: [
          "Call and greet",
          "Ask for an appointment",
          "Choose a time",
          "Describe what you want",
          "Ask about the total price"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Stylist",
        synonyms: ["Hairdresser", "Beautician"],
        antonyms: [],
        example: "My stylist is very creative."
      },
      {
        word: "Blow-dry",
        synonyms: ["Dry hair", "Style"],
        antonyms: [],
        example: "Can you blow-dry my hair?"
      }
    ],
    shadowingPractice: [
      "Hi, I'd like to make an appointment for a haircut.",
      "We have 2 PM and 4 PM today.",
      "Can I also get my hair colored?",
      "It will be about 2 hours total.",
      "Total is $80 plus tax."
    ],
    speakingChallenge: {
      instruction: "Practice booking a hair salon appointment. Use 'I'd like to make an appointment', ask about availability, and confirm the price.",
      hints: [
        "Call or visit the salon",
        "Choose a service: haircut, color, or both",
        "Pick an available time",
        "Ask about the price",
        "Confirm your appointment"
      ]
    }
  },
  {
    id: "coffee-shop-meeting",
    title: "Coffee Shop Meeting",
    emoji: "?",
    description: "Meeting someone for coffee, ordering together, and making plans.",
    color: "from-amber-400 to-orange-400",
    level: "A1",
    estimatedTime: "10 min",
    vocabularyPreview: [
      { word: "Meeting", phonetic: "/'mi?t??/", chinese: "??", partOfSpeech: "noun" },
      { word: "Catch up", phonetic: "/kæt? ?p/", chinese: "??", partOfSpeech: "phrasal verb" },
      { word: "Recommend", phonetic: "/?rek?'mend/", chinese: "??", partOfSpeech: "verb" },
      { word: "Treat", phonetic: "/tri?t/", chinese: "??", partOfSpeech: "noun / verb" },
      { word: "Bill", phonetic: "/b?l/", chinese: "??", partOfSpeech: "noun" },
      { word: "Split", phonetic: "/spl?t/", chinese: "??", partOfSpeech: "verb" }
    ],
    conversation: [
      { speaker: "Anna", line: "Hey! Long time no see. How have you been?" },
      { speaker: "Ben", line: "I've been good! Let's catch up over coffee." },
      { speaker: "Anna", line: "Great idea! Do you know a good place around here?" },
      { speaker: "Ben", line: "Yes, there's a nice café just around the corner. I'll treat you this time." },
      { speaker: "Anna", line: "Oh, you don't have to! But thank you." },
      { speaker: "Ben", line: "No problem. I insist. What would you like to drink?" },
      { speaker: "Anna", line: "I'll have a latte, please. And maybe a croissant?" },
      { speaker: "Waiter", line: "Here you go. That'll be $12 total." },
      { speaker: "Ben", line: "Keep the change. Thanks for meeting me!" }
    ],
    chineseTranslation: [
      { speaker: "Anna", line: "?!????????????" },
      { speaker: "Ben", line: "???!??????????" },
      { speaker: "Anna", line: "???!???????????" },
      { speaker: "Ben", line: "??,???????????????????" },
      { speaker: "Anna", line: "?,????!?????" },
      { speaker: "Ben", line: "???????????????" },
      { speaker: "Anna", line: "??????,?????????????" },
      { speaker: "???", line: "?????12???" },
      { speaker: "Ben", line: "???????????!" }
    ],
    usefulExpressions: [
      { expression: "Long time no see", meaning: "????", usage: "???????" },
      { expression: "Catch up", meaning: "??", usage: "???????" },
      { expression: "I'll treat you", meaning: "???", usage: "????" },
      { expression: "Keep the change", meaning: "????", usage: "???????" },
      { expression: "I insist", meaning: "???", usage: "??????????" }
    ],
    grammarFocus: [
      {
        title: "Present Perfect for Recent News",
        explanation: "??????????????",
        examples: [
          "I have been busy.",
          "I have just returned.",
          "How have you been?"
        ]
      },
      {
        title: "Conditional Offers with 'I'll'",
        explanation: "? 'I'll...' ????????",
        examples: [
          "I'll treat you this time.",
          "I'll pay the bill.",
          "I'll order for us."
        ]
      }
    ],
    collocationsAndChunks: [
      { chunk: "Long time no see", meaning: "????", example: "Long time no see! How are you?" },
      { chunk: "Catch up", meaning: "??", example: "Let's catch up over coffee." },
      { chunk: "I'll treat you", meaning: "???", example: "I'll treat you this time." }
    ],
    pronunciationTips: [
      { tip: "Long time no see ? /l??? ta?m no? si?/", example: "Friendly, relaxed speech" },
      { tip: "Keep the change ? /ki?p ð? t?e?nd?/", example: "Quick, natural phrase" }
    ],
    commonMistakes: [
      {
        mistake: "'I'll treat you' ???",
        correction: "?? 'Oh, you don't have to' ???? 'I insist' ???",
        explanation: "????????,?????????????"
      }
    ],
    rolePlayPractice: [
      {
        scenario: "You meet an old friend at a café. Catch up on each other's lives, order drinks, and insist on treating them.",
        prompts: [
          "Greet them warmly",
          "Suggest catching up over coffee",
          "Choose a café",
          "Order drinks and food",
          "Insist on treating them"
        ]
      }
    ],
    vocabularyExpansion: [
      {
        word: "Recommend",
        synonyms: ["Suggest", "Advise"],
        antonyms: [],
        example: "I recommend the latte."
      },
      {
        word: "Catch up",
        synonyms: ["Update", "Fill in"],
        antonyms: [],
        example: "Let's catch up on everything."
      }
    ],
    shadowingPractice: [
      "Long time no see! How have you been?",
      "Let's catch up over coffee.",
      "I'll treat you this time.",
      "I'll have a latte, please.",
      "Keep the change. Thanks for meeting me!"
    ],
    speakingChallenge: {
      instruction: "Practice meeting a friend for coffee. Use 'Long time no see', 'catch up', 'I'll treat you', and 'Keep the change'.",
      hints: [
        "Start with a warm greeting",
        "Suggest catching up",
        "Choose a drink and food",
        "Insist on paying",
        "End with a friendly goodbye"
      ]
    }
  }
];
