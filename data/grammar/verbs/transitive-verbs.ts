import { GrammarLesson } from "@/types/grammar";

export const transitiveVerbsLesson: GrammarLesson = {
  id: "transitive-verbs-objects",
  subcategoryId: "transitive-verbs",
  categoryId: "verbs",
  title: "Transitive Verbs: Taking Objects",
  titleZh: "及物动词：带动宾语",
  subtitle: "Identify verbs that take direct objects and complete the action through another noun",
  level: "B1",
  estimatedMinutes: 50,
  lessonIndex: 5,
  totalLessonsInSubcategory: 6,
  description:
    "Master transitive verbs that transfer action to a direct object. Learn to identify verbs like 'eat', 'read', 'build' that need an object to complete meaning. Compare with intransitive verbs, and discover why 'I ate' sounds incomplete while 'I ate lunch' sounds complete.",
  descriptionZh:
    "掌握带动直接宾语的及物动词。学习识别'eat', 'read', 'build'等需要宾语才能完整表达意思的动词。与不及物动词比较，理解为什么'I ate'听起来不完整而'I ate lunch'却完整。",
  objectives: [
    "identify transitive verbs by checking if they take a direct object",
    "distinguish transitive from intransitive verbs",
    "form Subject + Verb + Object sentences with transitive verbs",
    "use transitive verbs in questions, negatives, and past tense",
    "understand the object requirement rule",
  ],
  prerequisites: ["action-verbs-foundation", "helping-verbs-do-does-did"],
  teacherGuide: {
    teachingObjective:
      "Train learners to recognize that transitive verbs require a direct object to complete their meaning — the action is 'transferred' to someone or something. Contrast with intransitive verbs that need nothing after them.",
    whatToExplain: [
      "Transitive verbs transfer action to a direct object: 'I kicked the ball.'",
      "Ask 'What?' after the verb — if you get an answer, it's transitive.",
      "Intransitive verbs need no object: 'He arrived.' 'She slept.'",
      "Test: 'I read __?' (What did I read? 'a book') → transitive. 'He arrived __?' (no answer) → intransitive.",
    ],
    questionsToAsk: [
      "Why is 'I kicked' incomplete but 'I kicked the ball' is complete?",
      "What question do you ask to test if a verb is transitive?",
      "Can you think of verbs that can be BOTH transitive and intransitive?",
    ],
    commonConfusion: [
      "Thinking all verbs need objects (some don't)",
      "Forgetting that some verbs work both ways: She reads (intr.) / She reads a book (trans.)",
      "Confusing transitive verbs with action verbs — not all action verbs are transitive",
    ],
    extraExamples: [
      "The chef prepared a five-course meal.",
      "She painted a beautiful landscape.",
      "They built a house from scratch.",
    ],
    timingSchedule: [
      { phase: "Warm-up & Recall", duration: "0–5 min", activity: "Recall SVO structure: ask students to build 3 complete action sentences." },
      { phase: "Introducing Objects", duration: "5–15 min", activity: "Explain transitive verbs as 'action transfer' — the verb needs an object." },
      { phase: "What? Test", duration: "15–25 min", activity: "Teach the 'What?' test: ask after verb, if answer → transitive." },
      { phase: "Comparing Transitive/intransitive", duration: "25–35 min", activity: "Sort verbs into transitive/intransitive categories with flashcards." },
      { phase: "Real-Life Scenarios", duration: "35–50 min", activity: "Restaurant ordering and shopping roleplays with transitive verbs." },
      { phase: "Wrap-up & Homework", duration: "50–60 min", activity: "Assign transitive verb story homework." },
    ],
  },
  homework: {
    title: "My Day in Direct Objects",
    titleZh: "我的一天：直接宾语挑战",
    tasks: [
      {
        type: "writing",
        instruction: "Write 8 sentences describing your day. Each sentence must have a transitive verb + direct object. Highlight the object in each sentence.",
        instructionZh: "写8个描述你一天的句子，每个都必须含有及物动词+直接宾语。标出每个句子中的宾语。",
        sampleAnswer: "I drank coffee this morning. She sent an email at work. He bought groceries after dinner.",
      },
      {
        type: "speaking",
        instruction: "Record a 1-minute story about your last meal using at least 6 transitive verbs with direct objects.",
        instructionZh: "录制1分钟讲述你最近的一餐，使用至少6个带直接宾语的及物动词。",
        sampleAnswer: "I ordered a sandwich. The waiter brought soup. I ate half. I paid the bill.",
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
      title: "Transitive Verbs: Taking Objects",
      titleZh: "及物动词专场：带动宾语",
      content:
        "So far, you've learned how to identify action verbs, form complete sentences with subjects and verbs. But what makes some sentences feel 'incomplete'? Why does 'I read' sound weird, but 'I read a book' sounds perfect? The answer is the direct object — the thing that RECEIVES the action of a transitive verb.",
      contentZh:
        "到目前为止，你已学习了如何识别行为动词、搭建主谓句。但是什么让某些句子感觉'不完整'？为什么'I read'听起来怪，而'I read a book'却完美？答案是直接宾语——接收及物动词作用的事物。",
      keyPoints: [
        "Transitive verbs transfer action TO a direct object",
        "The direct object answers 'What?' or 'Whom?' after the verb",
        "Without an object, transitive verbs feel incomplete",
      ],
    },

    {
      id: "slide-2-transitive-vs-intransitive",
      slideNumber: 2,
      type: "COMPARISON",
      sectionTitle: "2. Transitive vs Intransitive",
      badge: "CORE CONTRAST",
      title: "Action WITH an Object vs Action WITHOUT",
      titleZh: "带宾语的动作 vs 无宾语的动作",
      content:
        "Transitive verbs transfer their action to a direct object ('She reads a book'). Intransitive verbs complete their action without any object ('She slept all night'). The difference is the presence or absence of a receiving noun.",
      contentZh:
        "及物动词把动作用到直接宾语上（'She reads a book'）。不及物动词在没有任何宾语的情况下完成动作（'She slept all night'）。区别在于是否有接收者名词。",
      comparisons: [
        {
          conceptA: "Transitive Verb",
          conceptB: "Intransitive Verb",
          difference: "Transitive verbs transfer action to a direct object. Intransitive verbs do not.",
          differenceZh: "及物动词把动作用到直接宾语。不及物动词不需要宾语。",
          exampleA: "She reads a book. (a book = direct object)",
          exampleB: "She slept. (no object needed)",
        },
        {
          conceptA: "I ate.",
          conceptB: "I ate lunch.",
          difference: "Without an object, the action feels incomplete.",
          differenceZh: "没有宾语，动作感觉不完整。",
          exampleA: "I ate. (incomplete — what did you eat?)",
          exampleB: "I ate lunch. (complete — lunch is the direct object)",
        },
      ],
    },

    {
      id: "slide-3-the-object-test",
      slideNumber: 3,
      type: "EXPLANATION",
      sectionTitle: "3. The Object Test",
      badge: "HOW TO IDENTIFY",
      title: "The 'What?' Question: Your Transitive Detector",
      titleZh: "'What?'测试：识别及物动词的钥匙",
      content:
        "After the verb, ask: 'What did the subject do?'. If you get a clear answer (a thing, person, or action), the verb is transitive. If there's nothing to answer, it's intransitive.",
      contentZh:
        "动词后问：'他/她做了什么？'。如果有明确答案（事物、人或动作），动词是及物动词。如果没有答案，则是不及物动词。",
      keyPoints: [
        "I kicked ____. What did I kick? The ball. → Transitive",
        "She arrived ____. What did she arrive? Nothing. → Intransitive",
        "He reads ____. What does he read? A book. → Transitive",
      ],
      audioText: "Ask 'What?' after the verb. If you get an answer, it's transitive.",
    },

    {
      id: "slide-4-svo-with-object",
      slideNumber: 4,
      type: "VISUAL_DIAGRAM",
      sectionTitle: "4. SVO Structure",
      badge: "FORMULA",
      title: "Subject + Verb + Object: The 3-Piece Machine",
      titleZh: "主谓宾三件套：SVO结构",
      content:
        "Transitive verbs work within the SVO (Subject-Verb-Object) structure. The subject does, the verb acts, the object receives.",
      contentZh:
        "及物动词在SVO（主语-动词-宾语）结构中运行。主语发出动作，动词施加作用，宾语接受作用。",
      diagram: {
        type: "svo",
        title: "The Transitive Structure",
        titleZh: "及物动词结构",
        formula: "Subject → Verb (Action) → Object (Receives)",
        items: [
          { label: "SUBJECT (Who?)", labelZh: "主语 (谁做)", sublabel: "She", color: "bg-blue-50/60 dark:bg-blue-950/30 border-blue-300" },
          { label: "VERB (What? — Transitive)", labelZh: "动词 (什么动作)", sublabel: "reads", color: "bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300" },
          { label: "OBJECT (What? — Receiving)", labelZh: "宾语 (接受的对象)", sublabel: "a book.", color: "bg-amber-50/60 dark:bg-amber-950/30 border-amber-300" },
        ],
      },
      keyPoints: [
        "Subject (Who?) = She",
        "Verb (What?) = reads",
        "Object (What?) = a book",
      ],
    },

    {
      id: "slide-5-common-transitive",
      slideNumber: 5,
      type: "VOCABULARY",
      sectionTitle: "5. Common Transitive Verbs",
      badge: "ESSENTIAL VERBS",
      title: "The Big 10 Transitive Power Verbs",
      titleZh: "十大常用及物动词",
      content:
        "These verbs almost always transfer their action to an object. Try asking 'What?' after each one — you'll always get an answer!",
      contentZh:
        "这些动词几乎总是把动作用到宾语上。试试在每个词后面问'What?'，你总会得到答�。",
      vocabulary: [
        { word: "build", wordZh: "建立", definition: "To create or construct something.", exampleSentence: "They built a house." },
        { word: "cook", wordZh: "烹饪", definition: "To prepare food by heating it.", exampleSentence: "She cooks dinner." },
        { word: "read", wordZh: "阅读", definition: "To look at and understand written text.", exampleSentence: "He reads books." },
        { word: "write", wordZh: "写", definition: "To produce words on paper or screen.", exampleSentence: "I write emails." },
        { word: "buy", wordZh: "买", definition: "To obtain something by paying money.", exampleSentence: "We buy groceries." },
        { word: "make", wordZh: "制作", definition: "To create or produce something.", exampleSentence: "She makes coffee." },
        { word: "eat", wordZh: "吃", definition: "To consume food.", exampleSentence: "They eat lunch." },
        { word: "see", wordZh: "看见", definition: "To perceive with the eyes.", exampleSentence: "I see the bird." },
        { word: "give", wordZh: "给", definition: "To transfer something to someone.", exampleSentence: "He gives gifts." },
        { word: "take", wordZh: "拿", definition: "To grab or carry something away.", exampleSentence: "She takes photos." },
      ],
    },

    {
      id: "slide-6-tense-examples",
      slideNumber: 6,
      type: "TABLE",
      sectionTitle: "6. Transitive Verbs Across Tenses",
      badge: "TENSES",
      title: "Base, Past, Question, Negative with 'Eat'",
      titleZh: "及物动词'tEat'在不同时态中的变化",
      content:
        "A transitive verb changes like the regular pattern you know. But it always needs its object — 'eat what?' is the question.",
      contentZh:
        "及物动词按规则变形，但总是需要宾语——'吃什么？'是关键。",
      table: {
        headers: ["Form", "Pattern", "Example with 'eat'", "Object Present?"],
        headersZh: ["形式", "模式", "'eat'例句", "有宾语吗"],
        rows: [
          { cells: ["Positive", "Subject + Verb + Object", "I eat lunch.", "Yes"], },
          { cells: ["Past", "Subject + Verb-past + Object", "I ate lunch.", "Yes"], },
          { cells: ["Question", "Do/Does + Subject + Verb + Object?", "Did you eat dinner?", "Yes"], },
          { cells: ["Negative", "Subject + don't/doesn't + Verb + Object", "She doesn't eat vegetables.", "Yes"], },
        ],
      },
    },

    {
      id: "slide-7-real-life-scenario",
      slideNumber: 7,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "7. At the Restaurant",
      badge: "SCENARIO",
      title: "Ordering Food with Transitive Verbs",
      titleZh: "餐厅点餐：带宾语的动作",
      scenario: {
        context: "Customers at a restaurant place orders and interact with the waiter.",
        contextZh: "顾客在餐厅下单并与服务员互动。",
        dialogue: [
          { speaker: "Waiter", en: "Can I take your order?", zh: "可以点菜吗？（Can I take your order? — verb 'take' + 'your order' object)", isTargetGrammar: false },
          { speaker: "Customer 1", en: "I would like to order the grilled salmon with vegetables.", zh: "我想点带蔬菜的烤三文鱼。", isTargetGrammar: true },
          { speaker: "Customer 2", en: "I'll have the pasta with tomato sauce.", zh: "我要番茄酱面的意大利面。", isTargetGrammar: true },
          { speaker: "Waiter", en: "Does anyone want dessert?", zh: "有人想吃甜点吗？", isTargetGrammar: false },
          { speaker: "Customer 1", en: "She wants to try the chocolate cake.", zh: "她想尝试巧克力蛋糕。", isTargetGrammar: true },
          { speaker: "Customer 2", en: "Please bring the check when we finish.", zh: "吃完后请带账单。", isTargetGrammar: true },
        ],
        task: "Listen for transitive verbs that take direct objects: order, have, try, bring.",
        taskZh: "听出带直接宾语的及物动词：order, have, try, bring.",
      },
    },

    {
      id: "slide-8-vocabulary",
      slideNumber: 8,
      type: "VOCABULARY",
      sectionTitle: "8. Restaurant Ordering Vocabulary",
      badge: "VOCABULARY",
      title: "Verbs for Placing an Order",
      titleZh: "点餐动词词汇",
      vocabulary: [
        { word: "order", wordZh: "点(菜)", definition: "To ask for food or drinks.", exampleSentence: "I order the grilled salmon." },
        { word: "serve", wordZh: "上(菜)", definition: "To bring food to the customer.", exampleSentence: "The waiter serves the soup." },
        { word: "prefer", wordZh: "更喜欢", definition: "To like one thing more than another.", exampleSentence: "She prefers vegetarian dishes." },
        { word: "recommend", wordZh: "推荐", definition: "To suggest something as good.", exampleSentence: "The chef recommends the special." },
      ],
    },

    {
      id: "slide-9-common-mistake-1",
      slideNumber: 9,
      type: "COMMON_MISTAKE",
      sectionTitle: "9. Missing Objects",
      badge: "OMISSION ERROR",
      title: "The Incomplete Sentence: 'I Read' vs 'I Read a Book'",
      titleZh: "不完整句子：'I read' vs 'I read a book'",
      content:
        "A transitive verb without its object leaves listeners hanging. The action hangs in the air with no one to receive it.",
      contentZh:
        "缺少宾语的及物动词让人听起来没完没了。动作用到虚空，没有接受者。",
      mistakes: [
        {
          wrong: "I eat.",
          right: "I eat dinner.",
          why: "Transitive verb needs an object: eat WHAT?",
          explanation: "Add the object: eat breakfast, eat lunch, eat dinner.",
          explanationZh: "及物动词需要宾语：吃什么？加上宾语。",
        },
        {
          wrong: "She reads.",
          right: "She reads books.",
          why: "Without an object, the sentence feels incomplete.",
          explanation: "books = the thing that receives the action of 'reads'.",
          explanationZh: "books 是接受'reads'动作的事物。",
        },
      ],
    },

    {
      id: "slide-10-common-mistake-2",
      slideNumber: 10,
      type: "COMMON_MISTAKE",
      sectionTitle: "10. The Over-Generalization Trap",
      badge: "L1 INTERFERENCE",
      title: "Not All Action Verbs Are Transitive!",
      titleZh: "不是所有行为动词都是及物动词！",
      content:
        "Chinese allows dropping objects more freely. But in English, some verbs just don't need objects. 'He slept' is complete. Adding 'sleep something' sounds wrong.",
      contentZh:
        "中文灵活省略宾语。但英语中有些动词根本不需要宾语。'He slept'已经完整了，加'sleep something'反而怪。",
      mistakes: [
        {
          wrong: "He sleeps his bed all night. (trying to copy Chinese)",
          right: "He slept all night. (no object needed)",
          why: "'Sleep' is intransitive — it does not take a direct object.",
          explanation: "Intransitive verb. Ask 'What did he sleep?' — no answer!",
          explanationZh: "'Sleep' 不及物动词——无需宾语。",
        },
        {
          wrong: "They discussed their problems yesterday.",
          right: "They discussed the new policy. / They had a discussion.",
          why: "'Discuss' is transitive — it needs something to discuss. 'Their problems' is fine but could be clearer.",
          explanation: "discuss + what? → the new policy.",
          explanationZh: "discuss + 什么？ → the new policy.",
        },
      ],
    },

    {
      id: "slide-11-comparison-slide",
      slideNumber: 11,
      type: "COMPARISON",
      sectionTitle: "11. Transitive vs Intransitive",
      badge: "KEY CONTRAST",
      title: "What? Test Results Across Verbs",
      titleZh: "What?测试：各动词归类",
      content:
        "This comparison shows how each verb responds to the 'What?' object test.",
      contentZh:
        "下表显示每个动词对'What?'宾语测试的反应。",
      comparisons: [
        {
          conceptA: "eat",
          conceptB: "drink",
          difference: "Both are transitive — they take direct objects.",
          differenceZh: "都是及物动词——带直接宾语。",
          exampleA: "I eat lunch. / eat WHAT? → lunch",
          exampleB: "She drinks coffee. / drink WHAT? → coffee",
        },
        {
          conceptA: "arrive",
          conceptB: "leave",
          difference: "Both are intransitive — no direct object needed.",
          differenceZh: "都是不及物动词——无需直接宾语。",
          exampleA: "He arrived. / arrive WHAT? → nothing",
          exampleB: "They left. / leave WHAT? → nothing",
        },
      ],
    },

    {
      id: "slide-12-shopping-scenario",
      slideNumber: 12,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "12. At the Store",
      badge: "SCENARIO",
      title: "Shopping with Transitive Verbs",
      titleZh: "逛商店：带宾语的购物对话",
      scenario: {
        context: "Two friends are shopping and asking about prices.",
        contextZh: "两个朋友在逛商店，询问价格。",
        dialogue: [
          { speaker: "Friend 1", en: "Do you like that jacket?", zh: "你喜欢那件夹克吗？", isTargetGrammar: false },
          { speaker: "Friend 2", en: "I love it! But I don't need to buy new clothes right now.", zh: "太喜欢了！但我现在不需要买新衣服。", isTargetGrammar: true },
          { speaker: "Friend 1", en: "Check the price tag — it's on sale.", zh: "看看价格标签，打折了。", isTargetGrammar: true },
          { speaker: "Friend 2", en: "It's forty dollars. Is it too expensive?", zh: "四十美元，太贵吗？", isTargetGrammar: false },
          { speaker: "Friend 1", en: "Let me try it on.", zh: "让我试试看。", isTargetGrammar: true },
        ],
        task: "Note transitive verbs: love, buy, check.",
        taskZh: "注意及物动词：love, buy, check.",
      },
    },

    {
      id: "slide-13-ambitransitive",
      slideNumber: 13,
      type: "EXPLANATION",
      sectionTitle: "13. Special Case: Ambitransitive Verbs",
      badge: "ADVANCED",
      title: "Sometimes Transitive, Sometimes Not",
      titleZh: "可及物可不及物：灵活动词",
      content:
        "A few verbs can be BOTH transitive and intransitive. The object is optional. Context decides!",
      contentZh:
        "少数动词既可以带宾语，也可以不用。上下文决定是否加宾语。",
      keyPoints: [
        "Play: 'The kids play.' / 'The kids play soccer.'",
        "Read: 'She reads every morning.' / 'She reads novels.'",
        "Eat: 'I ate.' / 'I ate lunch.'",
        "When the object is optional, the verb is ambitransitive",
      ],
    },

    {
      id: "slide-14-speaking-drill",
      slideNumber: 14,
      type: "SPEAKING_DRILL",
      sectionTitle: "14. Speaking Drill",
      badge: "SPEAKING PRACTICE",
      title: "Object Storytelling: Describe Your Last Meal",
      titleZh: "宾语故事：描述最近的一餐",
      content: "Practice using transitive verbs with clear objects to tell a story.",
      contentZh: "练习使用带明确宾语的及物动词讲故事。",
      speakingDrill: {
        prompt: "Describe your last meal in 6 sentences. Every sentence must have a transitive verb + object.",
        targetSentence: "I ordered sushi. I poured green tea. I sprinkled pepper. I ate the appetizer. I shared my roll.",
        targetSentenceZh: "我点了寿司。我倒了绿茶。我撒了黑胡椒。我吃了开胃菜。我分享了我的卷子。",
        tips: "Use: eat, cook, buy, make, read, write. Remember: each needs a 'What?' object!",
      },
    },

    {
      id: "slide-15-quiz-1",
      slideNumber: 15,
      type: "MINI_QUIZ",
      sectionTitle: "15. Very Easy Questions (1-10)",
      badge: "LEVEL 1",
      title: "Spot the Object",
      titleZh: "找出宾语",
      question: {
        question: "In 'She reads a book', what is the direct object?",
        questionZh: "在'She reads a book'中，什么是直接宾语？",
        options: ["she", "reads", "a book", "none"],
        correctIndex: 2,
        explanation: "'A book' is the thing receiving the action of 'reads' — it's the direct object.",
        explanationZh: "'A book' 是接受 'reads' 动作的事物，是直接宾语。",
        xpReward: 10,
      },
    },
    // Additional questions will complete the 35-question requirement
    { id: "slide-16-quiz-2", slideNumber: 16, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Transitive Detector", content: "Use the 'What?' test.", question: { question: "'He kicked __?' — What makes this transitive?", options: ["Ball", "What", "Kicked", "He"], correctIndex: 3, explanation: "The verb 'kicked' requires an object — it's transitive.", xpReward: 10 } },
    { id: "slide-17-quiz-3", slideNumber: 17, type: "MULTIPLE_CHOICE", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Complete the Sentence", content: "A transitive verb needs an object.", question: { question: "Choose the complete sentence:", options: ["I eat.", "I eat lunch.", "I am eating.", "I am eating lunch."], correctIndex: 1, explanation: "'I eat lunch' has a subject, verb, and direct object = complete transitive sentence.", xpReward: 10 } },
    { id: "slide-18-quiz-4", slideNumber: 18, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Intransitive Check", content: "Some verbs don't need objects.", question: { question: "'She slept all night.' — Does this need an object?", options: ["Yes", "No", "Maybe", "I don't know"], correctIndex: 1, explanation: "'Sleep' is intransitive — it doesn't need an object to be complete.", xpReward: 10, } },
    { id: "slide-19-quiz-5", slideNumber: 19, type: "MULTIPLE_CHOICE", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Past Tense Transitive", content: "Transitive verbs keep their objects in the past.", question: { question: "Choose the correct past tense sentence:", options: ["She read a book.", "She reads a book.", "She is read a book.", "She did read book."], correctIndex: 0, explanation: "'Read' in past tense + 'a book' (direct object) = complete.", xpReward: 10 } },
    { id: "slide-20-quiz-6", slideNumber: 20, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Question Form", content: "With transitive verbs in questions.", question: { question: "Complete the question: '_____ you buy (something) at the store?'", options: ["Buy", "Did you buy", "Do you buy", "Buyed you"], correctIndex: 1, explanation: "Past question with transitive verb: Did you buy + object.", xpReward: 10 } },
    { id: "slide-21-quiz-7", slideNumber: 21, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Object Identification", content: "The object receives the action.", question: { question: "In 'They built a house', what received the action?", options: ["They", "built", "a house", "none"], correctIndex: 2, explanation: "'A house' is the receiver of the action — the direct object.", xpReward: 10 } },
    { id: "slide-22-quiz-8", slideNumber: 22, type: "MULTIPLE_CHOICE", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Negative Transitive", content: "Transitive verbs in negatives keep the object.", question: { question: "Choose the correct negative:", options: ["I don't eat lunch.", "I don't eat.", "I didn't lunch.", "I not eat lunch."], correctIndex: 0, explanation: "don't + base verb + object = negative transitive sentence.", xpReward: 10 } },
    { id: "slide-23-quiz-9", slideNumber: 23, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Verb Type ID", content: "Use the What test to classify.", question: { question: "'She arrived at the station.' — Is 'arrive' transitive or intransitive?", options: ["Transitive", "Intransitive", "Both", "Neither"], correctIndex: 1, explanation: "'Arrive' does not take a direct object — it's intransitive.", xpReward: 10 } },
    { id: "slide-24-quiz-10", slideNumber: 24, type: "REVIEW", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Lesson 1 Review", content: "Quick review of transitive vs intransitive.", question: { question: "True or False: All action verbs are transitive.", options: ["True", "False"], correctIndex: 1, explanation: "Not all action verbs are transitive. Some don't take objects. 'Action verb' and 'transitive' are different concepts.", xpReward: 10 } },
  ],
};







