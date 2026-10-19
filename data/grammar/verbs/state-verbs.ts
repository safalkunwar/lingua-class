import { GrammarLesson } from "@/types/grammar";

export const stateVerbsLesson: GrammarLesson = {
  id: "state-vs-continuous-trap",
  subcategoryId: "state-verbs",
  categoryId: "verbs",
  title: "State Verbs: The Continuous Tense Trap",
  titleZh: "状态动词：进行时态陷阱",
  subtitle: "Why 'I am knowing' is wrong and 'I know' is right",
  level: "B1",
  estimatedMinutes: 45,
  lessonIndex: 9,
  totalLessonsInSubcategory: 6,
  description:
    "Master the difference between state verbs (know, love, understand, believe, own, remember) and dynamic verbs (run, eat, study). Learn why state verbs rarely use continuous tenses (-ing forms), and how to express temporary states, changing conditions, or politeness without breaking the rules.",
  descriptionZh:
    "掌握状态动词（know、love、understand、believe、own、remember）与动态动词（run、eat、study）的区别。学习为什么状态动词很少用进行时态（-ing形式），以及如何表达暂时状态、正在变化的条件或礼貌而不违反规则。",
  objectives: [
    "identify state verbs that rarely use continuous tenses",
    "distinguish state verbs from dynamic verbs",
    "understand why 'I am knowing' is ungrammatical in standard English",
    "use state verbs in present simple for mental states, possession, emotions",
    "express temporary states, change, or politeness with context-appropriate exceptions",
    "apply state verb rules in professional and social contexts",
  ],
  prerequisites: ["action-verbs-foundation", "helping-verbs-do-does-did", "linking-verbs-am-is-are"],
  teacherGuide: {
    teachingObjective:
      "Train learners to recognize that state verbs describe conditions rather than actions, and that this semantic property restricts their use with progressive forms. Teach the exceptions where state verbs CAN be used in continuous forms (temporary states, changing conditions, politeness).",
    whatToExplain: [
      "State verbs describe conditions: knowing, loving, understanding, believing, owning, remembering.",
      "Dynamic verbs describe actions: running, eating, studying, working, building.",
      "Standard rule: state verbs use present simple, not continuous ('I know', not 'I am knowing').",
      "Exceptions exist: 'I'm understanding the problem better now.' (temporary shift), 'I'm loving this song.' (marketing/informal)",
      "The -ing form changes meaning or register — 'I like it' is fact, 'I'm liking it' suggests gradual discovery",
    ],
    questionsToAsk: [
      "Why is 'I am knowing the answer' wrong but 'I am learning the answer' okay?",
      "What's the difference between 'I love this restaurant' and 'I'm loving this restaurant'?",
      "When CAN state verbs be used in continuous forms, and what does that change?",
    ],
    commonConfusion: [
      "Using -ing with state verbs by mistake: 'I am understanding', 'I am believing'",
      "Confusing state verbs with linking verbs (both can describe conditions)",
      "Not recognizing that some verbs are BOTH state and dynamic: 'think', 'see'",
      "Using continuous forms for ownership: 'I am owning the house' instead of 'I own the house'",
    ],
    extraExamples: [
      "I understand the concept. (state: knowing)",
      "I understand the problem now. (state with gradual shift)",
      "I am understanding the client's needs better. (temporary, in-progress)",
      "The team is understanding the new policy. (changing condition, professional context)",
    ],
    timingSchedule: [
      { phase: "Warm-up & Recall", duration: "0–5 min", activity: "Recall action vs state from Lesson 1: ask for 5 verbs that describe feelings vs actions." },
      { phase: "The Core Rule", duration: "5–15 min", activity: "Explain state verbs vs dynamic verbs with the 'movement' test." },
      { phase: "The -ing Trap", duration: "15–25 min", activity: "Why 'I am knowing' is wrong; demonstrate correct forms with contrast." },
      { phase: "Exceptions & Nuance", duration: "25–35 min", activity: "When state verbs CAN take -ing (temporary states, change, politeness). Examples: loving, liking, thinking." },
      { phase: "Real-Life Scenarios", duration: "35–50 min", activity: "Workplace communication, social feedback, professional reports with state verbs." },
      { phase: "Wrap-up & Homework", duration: "50–60 min", activity: "Assign state verb identification and correction homework." },
    ],
  },
  homework: {
    title: "State Verb Correction Challenge",
    titleZh: "状态动词纠错挑战",
    tasks: [
      {
        type: "writing",
        instruction: "Rewrite the following 8 sentences using correct state verb forms. 4 will need to change from continuous to simple present; 4 are already correct.",
        instructionZh: "用正确的状态动词形式改写以下8个句子。4个需要从进行时改为一般现在时；4个已经正确。",
        sampleAnswer: "I know the answer. (✓) I understand the problem. (✓) I am understanding it now. (temporary state) I am believing the news. (✗ should be: I believe the news.)",
      },
      {
        type: "speaking",
        instruction: "Record a 1-minute monologue about what you currently understand, believe, and own. Use state verbs correctly. Then re-record it expressing the SAME ideas using continuous forms ONLY where appropriate (showing temporary states or change).",
        instructionZh: "录制1分钟独白，描述你当前理解、相信和拥有的事物。正确使用状态动词。然后重新录制，仅将适合表达暂时状态或变化的部分改为进行时形式。",
        sampleAnswer: "I know this is a hard project. I understand the requirements. I own the concept. — vs — I am understanding the complexity better. I am believing it will work.",
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
      title: "State Verbs: The Continuous Tense Trap",
      titleZh: "状态动词专场：进行时态陷阱",
      content:
        "You've learned that verbs can be action, linking, helping, or modal. Now we meet the most surprising group: STATE VERBS. These are verbs that describe CONDITIONS rather than ACTIONS — knowing, loving, understanding, believing. The trap? Many learners keep adding -ing to them: 'I am knowing'. WRONG! Most state verbs rarely use continuous forms. Here's why, and when you CAN break the rule.",
      contentZh:
        "你已学动词可以是行为、系、助或情态。现在认识最令人大吃一惊的一组：状态动词。这些动词描述状况而非动作——knowing, loving, understanding, believing。陷阱是什么？许多学习者不停给它们加-ing：'I am knowing'。错！大多数状态动词很少用进行时态。原因是什么，以及什么时候可以打破规则。",
      keyPoints: [
        "State verbs describe conditions: knowing, loving, understanding, owning, believing",
        "Dynamic verbs describe actions: running, eating, studying, building",
        "Standard rule: state verbs use present simple, NOT continuous forms",
        "Exceptions exist for temporary states, changing conditions, and informal usage",
      ],
    },

    {
      id: "slide-2-state-vs-dynamic",
      slideNumber: 2,
      type: "COMPARISON",
      sectionTitle: "2. State vs Dynamic",
      badge: "CORE CONTRAST",
      title: "Conditions vs Actions: The Movement Test",
      titleZh: "状态 vs 动作：运动测试",
      content:
        "The key question: does the verb describe a MOVEMENT or a CONDITION? Movement → dynamic → can use continuous. Condition → state → usually NOT continuous.",
      contentZh:
        "关键问题：该动词描述运动还是状态？运动 → 动态 → 可用进行时态。状态 → 静态 → 通常不用进行时态。",
      comparisons: [
        {
          conceptA: "State Verb (条件)",
          conceptB: "Dynamic Verb (动作)",
          difference: "State: condition, no visible motion. Dynamic: active, visible motion.",
          differenceZh: "状态: 条件，无可见运动。动态: 动作，有可见运动。",
          exampleA: "I understand the concept. (condition: knowing)",
          exampleB: "I study every night. (action: studying)",
        },
        {
          conceptA: "know",
          conceptB: "learn",
          difference: "Knowledge is a state. Learning is an action.",
          differenceZh: "知识是状态。学习是动作。",
          exampleA: "I know the answer. (state)",
          exampleB: "I am learning the answer. (action in progress)",
        },
      ],
      audioText: "I understand (state). I study (dynamic). I know (state). I learn (dynamic).",
    },

    {
      id: "slide-3-core-rule",
      slideNumber: 3,
      type: "RULE",
      sectionTitle: "3. The Golden Rule",
      badge: "CORE RULE",
      title: "State Verbs + Present Simple, NOT Continuous",
      titleZh: "状态动词 + 一般现在时，而非进行时态",
      content:
        "The golden rule: State verbs describe conditions. Conditions are not ongoing actions — they just ARE. Use present simple. NOT the -ing form.",
      contentZh:
        "黄金法则：状态动词描述条件。条件不是持续动作——它们只是存在。用一般现在时。不用-ing形式。",
      keyPoints: [
        "✓ I know the answer. (present simple: state)",
        "✗ I am knowing the answer. (continuous: ungrammatical for state)",
        "✓ I understand the problem. (present simple: state)",
        "✗ I am understanding the problem. (continuous: ungrammatical for state, standard)",
      ],
    },

    {
      id: "slide-4-mental-states",
      slideNumber: 4,
      type: "TABLE",
      sectionTitle: "4. Mental State Verbs",
      badge: "VERB CATEGORY",
      title: "Thinking, Knowing, Understanding",
      titleZh: "思维认知状态动词",
      content:
        "These verbs describe what is in your mind. They describe states of knowledge and thought, not ongoing actions.",
      contentZh:
        "这些动词描述你脑中有什么。它们描述知识和思维状态，而非持续动作。",
      table: {
        headers: ["Verb", "Present Simple ✓", "Continuous ✗ (Standard)", "Context for Exception"],
        headersZh: ["动词", "一般现在式 ✓", "进行时态 ✗ (标准)", "例外上下文"],
        rows: [
          { cells: ["know", "I know the answer.", "I am knowing the answer. ✗", "Rare: only in specific idioms"], },
          { cells: ["understand", "I understand.", "I am understanding. ✗", "Temporarily in progress: 'I'm understanding better now'"], },
          { cells: ["believe", "I believe in science.", "I am believing in science. ✗", "Informal: 'I'm believing the news'"], },
          { cells: ["remember", "I remember your face.", "I am remembering your face. ✗", "Rare: 'I'm remembering a dream'"], },
          { cells: ["understand", "I understand the policy.", "I'm understanding the policy. ✗", "Temporal: 'We're understanding the impact'"], },
        ],
      },
    },

    {
      id: "slide-5-emotion-verbs",
      slideNumber: 5,
      type: "TABLE",
      sectionTitle: "5. Emotion and Desire Verbs",
      badge: "VERB CATEGORY",
      title: "Love, Like, Want, Need, Prefer",
      titleZh: "情感欲望动词",
      content:
        "These verbs describe feelings and desires. They are stative — they don't take -ing in standard English.",
      contentZh:
        "这些动词描述情感和欲望。它们是静态的——标准英语中不加-ing。",
      table: {
        headers: ["Verb", "Present Simple ✓", "Continuous ✗ (Standard)", "Note"],
        headersZh: ["动词", "一般现在式 ✓", "进行时态 ✗ (标准)", "备注"],
        rows: [
          { cells: ["love", "I love this song.", "I am loving this song. ✗", "Informal marketing: 'I'm loving this new car!'"], },
          { cells: ["like", "I like coffee.", "I am liking coffee. ✗", "Temporary: 'I'm liking it more every day'"], },
          { cells: ["want", "I want a promotion.", "I am wanting a promotion. ✗", "Rare: only in specific contexts"], },
          { cells: ["need", "I need help.", "I am needing help. ✗", "Context for weakness: 'I'm needing support'"], },
          { cells: ["prefer", "I prefer tea.", "I am preferring tea. ✗", "Evolving preference: 'I'm preferring the new policy'"], },
        ],
      },
    },

    {
      id: "slide-6-possession-verbs",
      slideNumber: 6,
      type: "TABLE",
      sectionTitle: "6. Possession and Relation Verbs",
      badge: "VERB CATEGORY",
      title: "Own, Have, Belong, Contain",
      titleZh: "拥有关系动词",
      content:
        "These verbs describe what you possess or relationships. Ownership is a state, not an action in progress.",
      contentZh:
        "这些动词描述你拥有什么或关系。拥有是状态，而非进行中的动作。",
      table: {
        headers: ["Verb", "Present Simple ✓", "Continuous ✗ (Standard)", "Exception Context"],
        headersZh: ["动词", "一般现在式 ✓", "进行时态 ✗ (标准)", "例外上下文"],
        rows: [
          { cells: ["own", "I own a house.", "I am owning a house. ✗", "Rare: only in legal contexts"], },
          { cells: ["have", "I have two children.", "I am having two children. ✗", "EXCEPTION: 'have' in progressive: 'I'm having lunch' (action)"], },
          { cells: ["belong", "This belongs to me.", "This is belonging to me. ✗", "Standard: no continuous form"], },
          { cells: ["contain", "The box contains papers.", "The box is containing papers. ✗", "Standard: no continuous form"], },
          { cells: ["have", "I have a meeting.", "I am having a meeting. ✓", "EXCEPTION: 'have' with action meaning (lunch, meeting, time)"], },
        ],
      },
    },

    {
      id: "slide-7-appearance-verbs",
      slideNumber: 7,
      type: "TABLE",
      sectionTitle: "7. Sensory and Appearance Verbs",
      badge: "VERB CATEGORY",
      title: "See, Hear, Look, Smell, Sound",
      titleZh: "感官和外观动词",
      content:
        "Some sensory verbs can be both state (perception: 'I see the mountain') and dynamic (visual motion: 'I am looking at the mountain').",
      contentZh:
        "某些感官动词可同时为状态（感知：'I see the mountain'）和动态（视觉运动：'I am looking at the mountain'）。",
      table: {
        headers: ["Verb", "State Use", "Dynamic Use", "Meaning Difference"],
        headersZh: ["动词", "状态用法", "动态用法", "意义差异"],
        rows: [
          { cells: ["see", "I see the mountain. (perceive)", "I am seeing the mountain. (actually wrong)", "See is stative in perception context"], },
          { cells: ["hear", "I hear the music. (perceive)", "I am hearing the music. (weak)", "Hear is stative: perception"], },
          { cells: ["look", "She looks beautiful. (appears)", "She is looking out the window. (action)", "Look can be both state (appearance) and dynamic (action)"], },
          { cells: ["smell", "It smells good. (state: quality)", "It is smelling the new soap. (wrong)", "Smell is stative for perception"], },
          { cells: ["sound", "The song sounds great. (quality)", "He is sounding more confident. (changing)", "Sound is state for quality; 'is sounding' shows change"], },
        ],
      },
    },

    {
      id: "slide-8-exceptions",
      slideNumber: 8,
      type: "EXPLANATION",
      sectionTitle: "8. When Can State Verbs Take -ing?",
      badge: "EXCEPTIONS",
      title: "The Three Legal Continuous State Forms",
      titleZh: "三种合法的时态状态形式",
      content:
        "In standard English, state verbs almost always use present simple. But there are THREE important exceptions where -ing is grammatical and common.",
      contentZh:
        "标准英语中，状态动词几乎总用一般现在时。但有三种重要例外，-ing在语法上正确且常见。",
      keyPoints: [
        "1. TEMPORARY STATE: 'I'm understanding the complexity better now.' (in progress)",
        "2. CHANGING CONDITION: 'The team is believing in the new strategy.' (shifting state)",
        "3. INFORMAL/COMMERICAL: 'I'm loving this new car!' (marketing, informal)",
        "In all three cases, the -ing form signals that the state is in transition, not permanent",
      ],
    },

    {
      id: "slide-9-examples-with-explanation",
      slideNumber: 9,
      type: "EXAMPLE",
      sectionTitle: "9. Real Examples with Nuance",
      badge: "NUANCE",
      title: "Same Verb, Different Meanings with -ing",
      titleZh: "同一动词，不同的-ing含义",
      content:
        "Observe how adding -ing changes the meaning, not just the form. This is where nuance matters.",
      contentZh:
        "观察加-ing如何改变意义，而不仅是形式。这就是细微差别所在。",
      examples: [
        {
          en: "I like this coffee. (permanent preference)",
          zh: "我喜欢这咖啡。（永久偏好）",
          highlight: "like",
          explanation: "Present simple: stable, permanent state.",
        },
        {
          en: "I'm liking this coffee more every sip. (gradual change)",
          zh: "每一口我都越来越喜欢这咖啡。（逐渐变化）",
          highlight: "liking",
          explanation: "Continuous: state in transition, growing preference.",
        },
        {
          en: "I understand the problem. (completely, right now)",
          zh: "我理解这个问题。（完全理解，当下）",
          highlight: "understand",
          explanation: "Present simple: complete understanding, state.",
        },
        {
          en: "I'm understanding the problem better as I review the data. (in progress)",
          zh: "随着我复习数据，我对这个问题的理解在加深。（正在进行）",
          highlight: "understanding",
          explanation: "Continuous: gradual shift in understanding, in-progress state.",
        },
      ],
    },

    {
      id: "slide-10-real-life-scenario",
      slideNumber: 10,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "10. At the Design Review",
      badge: "SCENARIO",
      title: "Giving Feedback on a Project",
      titleZh: "设计评审：给予项目反馈",
      scenario: {
        context: "A project lead is giving feedback on a new design during a team meeting.",
        contextZh: "项目负责人在团队会议上对新设计进行反馈。",
        dialogue: [
          { speaker: "Lead", en: "I understand the team's concerns. I know this is a tough deadline.", zh: "我理解大家的担忧。我知道这个截止日期很紧。", isTargetGrammar: true },
          { speaker: "Developer", en: "I am having trouble with the database query.", zh: "我在数据库查询上遇到了困难。", isTargetGrammar: true },
          { speaker: "Lead", en: "I believe the issue is the caching layer. I am considering removing it.", zh: "我认为问题在缓存层。我正在考虑移除它。", isTargetGrammar: true },
          { speaker: "Designer", en: "The new colors are looking great. I like the direction.", zh: "新颜色看起来很棒。我喜欢这个方向。", isTargetGrammar: true },
          { speaker: "Lead", en: "I need everyone to trust the process. I am confident we will ship on time.", zh: "我需要大家信任这个过程。我确信我们会按时发布。", isTargetGrammar: true },
        ],
        task: "Listen for state verbs: understand, know, have, believe, need, like. Note: 'having trouble' is a dynamic use of 'have'.",
        taskZh: "听出状态动词：understand, know, have, believe, need, like。注意：'having trouble' 是 'have' 的动态用法。",
      },
    },

    {
      id: "slide-11-vocabulary",
      slideNumber: 11,
      type: "VOCABULARY",
      sectionTitle: "11. Professional State Verbs",
      badge: "VOCABULARY",
      title: "Verbs for Workplace Communication",
      titleZh: "职场交流状态动词",
      vocabulary: [
        { word: "believe", wordZh: "相信", definition: "To accept something as true without absolute proof.", exampleSentence: "I believe in the team's ability to deliver." },
        { word: "recognize", wordZh: "认可", definition: "To acknowledge or accept as true or valid.", exampleSentence: "I recognize that the project has challenges." },
        { word: "appreciate", wordZh: "感激", definition: "To recognize the worth of something; to be grateful.", exampleSentence: "I appreciate your patience during this transition." },
        { word: "expect", wordZh: "期望", definition: "To regard as likely or certain to happen.", exampleSentence: "I expect the results by end of week." },
      ],
    },

    {
      id: "slide-12-common-mistake-1",
      slideNumber: 12,
      type: "COMMON_MISTAKE",
      sectionTitle: "12. The 'I am knowing' Error",
      badge: "STATE VERB ERROR",
      title: "Stop Saying 'I Am Knowing' — Use Present Simple",
      titleZh: "停止说'I am knowing'——用一般现在时",
      content:
        "This is the #1 state verb mistake. Learners see -ing on dynamic verbs (run→running, eat→eating) and assume all verbs need it. State verbs don't follow this rule.",
      contentZh:
        "这是第一号状态动词错误。学习者看到动态动词的-ing（run→running, eat→eating），就假设所有动词都需要。状态动词不遵循这个规则。",
      mistakes: [
        {
          wrong: "I am knowing the answer.",
          right: "I know the answer.",
          why: "'Know' is a state verb — it describes a condition, not an action in progress.",
          explanation: "Present simple: I know. Continuous: I am knowing (incorrect).",
          explanationZh: "一般现在时：I know。进行时态：I am knowing（错误）。",
        },
        {
          wrong: "She is believing that we will win.",
          right: "She believes that we will win.",
          why: "'Believe' is a state verb — it describes a mental state, not an ongoing action.",
          explanation: "Present simple: She believes. Continuous: She is believing (incorrect).",
          explanationZh: "一般现在时：She believes。进行时态：She is believing（错误）。",
        },
      ],
      audioText: "I know the answer. She believes we will win. They understand the problem. No -ing on state verbs!",
    },

    {
      id: "slide-13-common-mistake-2",
      slideNumber: 13,
      type: "COMMON_MISTAKE",
      sectionTitle: "13. 'Having' and 'Happens' Confusion",
      badge: "AMBIGUOUS VERB",
      title: "The Verb 'Have': State vs Dynamic",
      titleZh: "动词'Have'：状态 vs 动态",
      content:
        "'Have' is tricky because it can be BOTH a state verb (possession) AND a dynamic verb (actions: have lunch, have a meeting, have fun). Context decides which meaning.",
      contentZh:
        "'Have'很棘手，因为它既可作状态动词（拥有）又可作动态动词（动作：have lunch, have a meeting, have fun）。上下文决定哪个意思。",
      mistakes: [
        {
          wrong: "I am having a new car. (ownership — should be state)",
          right: "I have a new car. (OR: I am having a new car delivered. — different meaning!)",
          why: "Ownership = state = present simple. 'Having a car' sounds like you're actively in the process of possessing it (weird!).",
          explanation: "Possession: I have a car. (state). Action: I am having lunch. (dynamic, in-progress)",
          explanationZh: "拥有：I have a car.（状态）。动作：I am having lunch.（动态，进行中）",
        },
        {
          wrong: "I am having a great time at the party.",
          right: "I am having a great time at the party. (✓ CORRECT! 'Have' here means 'experience' — dynamic)",
          why: "'Having a great time' means 'experiencing a great time' — this is a dynamic, in-progress action.",
          explanation: "Dynamic use of 'have': experience, enjoy, meet. 'I am having fun.'",
          explanationZh: "'have'的动态用法：体验、享受、见面。'I am having fun.'",
        },
      ],
      audioText: "I have a car (state: ownership). I am having lunch (dynamic: action). I am having a great time (dynamic: experience).",
    },

    {
      id: "slide-14-common-mistake-3",
      slideNumber: 14,
      type: "COMMON_MISTAKE",
      sectionTitle: "14. The 'Thinking' Trap",
      badge: "SUBTLE ERROR",
      title: "Think: State vs Dynamic (It Depends!)",
      titleZh: "Think：状态 vs 动态（视情况而定！）",
      content:
        "'Think' is BOTH a state verb (opinion/belief) AND a dynamic verb (active mental processing). When you're thinking about something, you're processing — dynamic. When you have an opinion, it's a state.",
      contentZh:
        "'Think'既可作状态动词（观点/信念）又可作动态动词（主动思维加工）。当你思考某事时，你在加工——动态。当你持有观点时，它是状态。",
      mistakes: [
        {
          wrong: "I am thinking that you should apply for the job. (opinion — should be state)",
          right: "I think that you should apply for the job. (OR: I am thinking about whether to apply. — different meaning)",
          why: "'Think' for opinion = state. 'Thinking about' = active processing = dynamic.",
          explanation: "Opinion: I think (state). Active processing: I am thinking about it (dynamic).",
          explanationZh: "观点：I think（状态）。主动思考：I am thinking about it（动态）。",
        },
        {
          wrong: "I am thinking you are right. (opinion — should be state)",
          right: "I think you are right. (present simple: opinion)",
          why: "'Think' for holding an opinion is stative — use present simple.",
          explanation: "Opinion: I think you're right (state). Process: I'm thinking about whether you're right (dynamic).",
          explanationZh: "观点：I think you're right（状态）。过程：I'm thinking about whether you're right（动态）。",
        },
      ],
      audioText: "I think you should go (opinion: state). I am thinking about the problem (active processing: dynamic).",
    },

    {
      id: "slide-15-speaking-drill",
      slideNumber: 15,
      type: "SPEAKING_DRILL",
      sectionTitle: "15. Speaking Drill",
      badge: "SPEAKING PRACTICE",
      title: "Professional Feedback with State Verbs",
      titleZh: "用状态动词给专业反馈",
      content: "Practice giving professional feedback using state verbs correctly.",
      contentZh: "练习用正确的状态动词给予专业反馈。",
      speakingDrill: {
        prompt: "Give 5 minutes of feedback on a colleague's presentation. Use state verbs: understand, believe, recognize, appreciate, need. Avoid -ing forms for state verbs.",
        targetSentence: "I understand the challenge. I believe the strategy is sound. I recognize the team's effort. I appreciate the attention to detail. I need more data before we proceed.",
        targetSentenceZh: "我理解这个挑战。我相信策略是合理的。我认可团队的付出。我感激对细节的关注。我们需要更多数据才能继续。",
        tips: "Use: know, understand, believe, recognize, appreciate, need, want, prefer, own. Remember: no -ing for state verbs!",
      },
    },

    {
      id: "slide-16-quiz-1",
      slideNumber: 16,
      type: "MINI_QUIZ",
      sectionTitle: "16. Very Easy Questions (1-10)",
      badge: "LEVEL 1",
      title: "State vs Dynamic",
      titleZh: "状态 vs 动态",
      question: {
        question: "Which verb is a STATE verb?",
        questionZh: "以下哪个是状态动词？",
        options: ["run", "know", "build", "eat"],
        correctIndex: 1,
        explanation: "'Know' describes a mental state, not an action in progress.",
        explanationZh: "'Know' 描述心理状态，而非进行中的动作。",
        xpReward: 10,
      },
    },
    // Additional questions will complete the 35-question requirement
    { id: "slide-17-quiz-2", slideNumber: 17, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "The -ing Trap", content: "Pick the correct sentence.", question: { question: "Which sentence is grammatically correct?", options: ["I am knowing the answer.", "I know the answer.", "I knows the answer.", "I known the answer."], correctIndex: 1, explanation: "'Know' is a state verb — use present simple, not continuous.", xpReward: 10 } },
    { id: "slide-18-quiz-3", slideNumber: 18, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Believe vs Believing", content: "Opinion verbs rarely take -ing.", question: { question: "Choose the correct sentence:", options: ["I am believing in you.", "I believe in you.", "I believed in you.", "I believing in you."], correctIndex: 1, explanation: "'Believe' is a state verb — use present simple: I believe in you.", xpReward: 10 } },
    { id: "slide-19-quiz-4", slideNumber: 19, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Understand vs Understanding", content: "Mental state in standard English.", question: { question: "Which is the standard correct form?", options: ["I am understanding the problem.", "I understand the problem.", "I understood the problem.", "I understanding the problem."], correctIndex: 1, explanation: "Standard English: present simple for mental states. 'I understand the problem.'", xpReward: 10 } },
    { id: "slide-20-quiz-5", slideNumber: 20, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Own vs Owning", content: "Possession is a state.", question: { question: "Complete: 'I _____ a house in the suburbs.'", options: ["am owning", "own", "owned", "owning"], correctIndex: 1, explanation: "'Own' is a state verb for possession: I own a house (present simple).", xpReward: 10 } },
    { id: "slide-21-quiz-6", slideNumber: 21, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Like vs Liking", content: "Preference verbs are stative.", question: { question: "Choose the correct sentence:", options: ["I am liking coffee.", "I like coffee.", "I liking coffee.", "I likes coffee."], correctIndex: 1, explanation: "'Like' is a state verb for preference: I like coffee (present simple).", xpReward: 10 } },
    { id: "slide-22-quiz-7", slideNumber: 22, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Need vs Needing", content: "Desire verbs are stative.", question: { question: "Which sentence is grammatically correct?", options: ["I am needing help.", "I need help.", "I needing help.", "I needs help."], correctIndex: 1, explanation: "'Need' is a state verb: I need help (present simple).", xpReward: 10 } },
    { id: "slide-23-quiz-8", slideNumber: 23, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Know vs Knowing", content: "The most common state verb.", question: { question: "Choose the correct form:", options: ["I am knowing this city.", "I know this city.", "I known this city.", "I knowing this city."], correctIndex: 1, explanation: "'Know' is a state verb: I know this city (present simple).", xpReward: 10 } },
    { id: "slide-24-quiz-9", slideNumber: 24, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Recognize vs Recognizing", content: "Acknowledge verbs are stative.", question: { question: "Choose the correct sentence:", options: ["I am recognizing her.", "I recognize her.", "I recognizes her.", "I recogniz ed her."], correctIndex: 1, explanation: "'Recognize' as state verb: I recognize her (present simple).", xpReward: 10 } },
    { id: "slide-25-quiz-10", slideNumber: 25, type: "REVIEW", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "State Verbs Summary", content: "Key takeaways from state verbs lesson.", question: { question: "True or False: State verbs NEVER use continuous forms in any context.", options: ["True", "False"], correctIndex: 1, explanation: "State verbs ALMOST NEVER use continuous forms, but there are exceptions: temporary states, changing conditions, informal usage, and specific verbs like 'have' which can be dynamic.", xpReward: 10 } },
  ],
};







