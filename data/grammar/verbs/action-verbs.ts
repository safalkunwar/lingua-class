import { GrammarLesson } from "@/types/grammar";

export const actionVerbsFoundationLesson: GrammarLesson = {
  id: "action-verbs-foundation",
  subcategoryId: "action-verbs",
  categoryId: "verbs",
  title: "Action Verbs",
  titleZh: "行为动词 (动作动词)",
  subtitle: "Build your English from the inside out — from zero to confident mastery",
  level: "A1",
  estimatedMinutes: 60,
  lessonIndex: 1,
  totalLessonsInSubcategory: 8,
  description:
    "Master the kinetic engine of every English sentence. Learn to identify action verbs, build Subject + Verb (+ Object) sentences, form clean negatives and questions, and eliminate the Chinese 'I am agree' double-verb trap.",
  descriptionZh:
    "掌握英语句子的核心动力引擎。学习识别行为动词、搭建主谓宾基本句型、准确造出否定与疑问句，并彻底消除中式'I am agree'双谓语顽疾。",
  objectives: [
    "identify action verbs in speech and writing",
    "find action verbs inside complex sentences",
    "build basic sentences using Subject + Verb and Subject + Verb + Object",
    "use verbs naturally in positive, negative, and question forms",
    "distinguish dynamic action verbs from stative condition verbs",
    "recognize and eliminate common Chinese L1 double-verb errors",
    "apply action verbs in real-life daily, workplace, and PTE exam contexts",
  ],
  learningOutcomes: [
    "Identify verbs instantly in any natural sentence",
    "Build clean sentences with correct Subject-Verb-Object word order",
    "Conjugate third-person singular verbs with -s and -es accurately",
    "Form natural negative statements using don't and doesn't",
    "Ask clear questions using Do and Does without awkward pauses",
    "Speak with muscle memory about everyday routines, gym, dining, and work",
  ],
  learningOutcomesZh: [
    "在真实英文语境中一眼识别动词",
    "熟练运用主谓宾 (SVO) 语序造出正确句子",
    "准确掌握第三人称单数加 -s/-es 的动词变形",
    "使用 don't 与 doesn't 构建流畅自然的否定表达",
    "使用 Do 与 Does 自如发问，告别生硬直译",
    "具备谈论日常生活、健身、就餐与职场工作的口语肌肉记忆",
  ],
  nextLesson: {
    id: "helping-verbs-do-does-did",
    title: "Helping Verbs",
    href: "/grammar/verbs/helping-verbs",
  },
  teacherGuide: {
    teachingObjective:
      "Guide both beginner and adult learners to conceptualize English action verbs as the indispensable motor of communication, eliminate Chinese adjective-predicate interference, and enforce automatic third-person singular inflection.",
    timingSchedule: [
      { phase: "Warm-up & Orientation", duration: "0–5 min", activity: "Physical miming: elicit actions from students (waking up, typing, drinking coffee)." },
      { phase: "Core Concept & Purpose", duration: "5–15 min", activity: "Explain why sentences collapse without verbs; contrast Subject + Verb with Subject + Verb + Object." },
      { phase: "Sentence Forms & Agreement", duration: "15–25 min", activity: "Demonstrate positive (-s/-es), negative (don't/doesn't), and question (Do/Does) structures." },
      { phase: "Pitfall Deconstruction", duration: "25–35 min", activity: "Break down the 'I am agree' Chinglish syndrome and Action vs State difference." },
      { phase: "Scenarios & Dialogues", duration: "35–45 min", activity: "Roleplay morning routine and coffee shop ordering dialogues with audio modeling." },
      { phase: "Multi-Level Drills", duration: "45–55 min", activity: "Run tiered drills: Easy identification → Medium selection → Hard reordering → Error correction → Speaking output." },
      { phase: "PTE Link & Review", duration: "55–60 min", activity: "Write from Dictation algorithm tips, 3-rule synthesis, and homework assignment." },
    ],
    whatToExplain: [
      "Every English clause must have an explicit conjugated verb. Unlike Chinese where adjectives can directly function as predicates (e.g., 她很忙), English requires an action verb (She works hard) or linking verb (She is busy).",
      "Action verbs depict movements or active mental processes that have an actor and an impact.",
      "Third-person singular inflection (-s/-es) is an essential grammar marker that native speakers and PTE scoring algorithms listen for constantly.",
      "When forming negatives and questions with do/does, the main action verb always reverts to its pristine base form (Does she work? NOT: Does she works?).",
    ],
    questionsToAsk: [
      "Can an English sentence exist without a verb? (Never! Even 'Stop!' has the implied verb 'stop').",
      "In the funny example 'I eat my phone', is it grammatically correct? Why? (Yes, Subject 'I' + Verb 'eat' + Object 'my phone' — correct grammar, just terrible life choice!).",
      "Why is 'I am agree' wrong in English? (Because 'agree' is already a complete verb; adding 'am' creates an illegal double verb).",
    ],
    commonConfusion: [
      "Stacking 'be' with action verbs: 'I am live in Sydney' or 'He is work at bank'.",
      "Dropping the 3rd person -s: 'My manager send the report' instead of 'sends'.",
      "Confusing action with state: 'I am knowing the answer' instead of 'I know the answer'.",
      "Inverting word order based on Chinese: 'I every morning run' instead of 'I run every morning'.",
    ],
    extraExamples: [
      "The barista steams oat milk for the cappuccino.",
      "Sarah analyzes user retention trends every Tuesday afternoon.",
      "They negotiate contract clauses before signing the agreement.",
    ],
    speakingActivity:
      "Rapid-Fire Routine Drill: Teacher or partner calls out a time of day (e.g. 7:00 AM, 12:30 PM, 6:00 PM), and the student must state 2 distinct action verbs describing what they do at that exact hour.",
    homework:
      "Write 5 authentic sentences about your daily routine with 5 distinct action verbs. Identify Subject, Verb, and Object. Record a 30-second voice note speaking about someone else's routine (using 3rd-person -s).",
  },
  homework: {
    title: "Action Verbs Real-World Mastery Portfolio",
    titleZh: "行为动词真实世界应用实践作业",
    tasks: [
      {
        type: "writing",
        instruction: "Write 4 sentences describing your workday morning using 4 different action verbs (e.g. wake, brew, check, join).",
        instructionZh: "使用 4 个不同的行为动词写出 4 个描述你工作日早晨的句子（如 wake, brew, check, join）。",
        sampleAnswer: "I wake up at 7:00 AM. I brew a cup of black coffee. I check my urgent Slack messages. I join the morning team standup.",
      },
      {
        type: "speaking",
        instruction: "Record a 30-second audio note describing what a coworker or family member does (remember to add -s to third-person verbs!).",
        instructionZh: "录制一段 30 秒语音，描述一位同事或家人的日常（记得在第三人称动词后加 -s！）。",
        sampleAnswer: "My colleague David designs the mobile UI, writes technical documentation, and reviews pull requests every morning.",
      },
      {
        type: "reflection",
        instruction: "Explain in your own words why 'I am agree' is an incorrect double-verb in English, and recite the correct version 5 times.",
        instructionZh: "用自己的话解释为什么'I am agree'是错误的双谓语，并将正确版本'I agree'大声朗诵 5 遍。",
        sampleAnswer: "'Agree' is already a verb meaning 'hold the same opinion'. We don't add 'am'. Correct: I agree with you.",
      },
    ],
  },
  slides: [
    // SLIDE 1: Welcome
    {
      id: "slide-1-welcome",
      slideNumber: 1,
      type: "TITLE",
      sectionTitle: "1. Welcome & Orientation",
      badge: "ORIENTATION",
      title: "Welcome to Action Verbs!",
      titleZh: "欢迎来到行为动词工坊！",
      content:
        "Every living language has a heartbeat, and in English, that heartbeat is the VERB. Whether you are learning your first ten words or refining your professional fluency, mastering action verbs will give your English real power and momentum.",
      contentZh:
        "每种鲜活的语言都有其心脏脉搏，而在英语中，这颗跳动的心脏就是动词（Verb）。无论你是刚起步零基础，还是渴望深化语法底层逻辑，掌握行为动词都将为你的英语注入源源不断的动力！",
      keyPoints: [
        "Verbs make English move: without a verb, no sentence is complete",
        "Starts extremely simple, then builds to deep mastery",
        "Designed for 45–60 minutes with a teacher or self-study",
      ],
      audioText:
        "Welcome to Action Verbs! Verbs are the heartbeat of every English sentence. Let us build your English together.",
      hint: "Relax and get ready to discover how simple English sentences truly are.",
      hintZh: "放轻松，准备好发现英语句型结构其实是多么简洁明了。",
    },

    // SLIDE 2: What will you learn?
    {
      id: "slide-2-what-learn",
      slideNumber: 2,
      type: "EXPLANATION",
      sectionTitle: "2. Learning Roadmap",
      badge: "ROADMAP",
      title: "What Will You Learn Today?",
      titleZh: "今天你将掌握的核心能力清单",
      content:
        "Here is the map of your journey through this lesson. We will progress step by step from basic concepts to natural conversation, grammar drills, error correction, and real-life scenarios.",
      contentZh:
        "这是今天的学习路线图。我们将由浅入深，从基本概念一路进阶至真实对话、实战答题纠错与职场生活场景：",
      keyPoints: [
        "✓ What a verb is and why every sentence requires one",
        "✓ How to build Subject + Verb and Subject + Verb + Object sentences",
        "✓ How to make positive statements, negative statements, and questions",
        "✓ The difference between physical actions and mental states",
        "✓ How to eliminate the famous Chinese 'I am agree' double-verb mistake",
        "✓ Multi-level practice drills from easy to advanced",
      ],
      audioText:
        "Today you will learn what verbs do, how to build simple sentences, ask questions, and speak naturally.",
    },

    // SLIDE 3: Warm-up
    {
      id: "slide-3-warmup",
      slideNumber: 3,
      type: "EXPLANATION",
      sectionTitle: "3. Interactive Warm-up",
      badge: "WARM-UP",
      title: "Look Around You: The World in Action",
      titleZh: "热身观察：动起来的世界！",
      content:
        "Take a look around right now. Someone is drinking water. Someone is typing on a keyboard. A bird is flying outside. You are reading these words. Every single movement in the universe is powered by an ACTION VERB!",
      contentZh:
        "环顾你身边的世界：有人在喝水（drink），有人在键盘上打字（type），窗外有鸟儿在飞翔（fly），而你正在阅读这些文字（read）。宇宙中的每一次行动，都由行为动词驱动！",
      keyPoints: [
        "Think of what you did 5 minutes ago: did you sit? did you breathe? did you click?",
        "All of these 'doing words' are action verbs",
        "They bring life, energy, and clarity to human communication",
      ],
      audioText:
        "Every single movement is powered by an action verb. Words like drink, type, walk, and read.",
    },

    // SLIDE 4: What is a verb?
    {
      id: "slide-4-what-is-verb",
      slideNumber: 4,
      type: "EXPLANATION",
      sectionTitle: "4. The Foundation",
      badge: "CORE DEFINITION",
      title: "What Is a Verb?",
      titleZh: "动词的权威定义",
      content:
        "A verb tells us what someone or something DOES, IS, HAS, or EXPERIENCES. Right now, we will focus on the most active and exciting family: words that DO something!",
      contentZh:
        "动词告诉我们某人或某物'做什么'（DOES）、'是什么'（IS）、'拥有什么'（HAS）或'经历什么'（EXPERIENCES）。现在，我们聚焦在最富活力的一族：做动作的词（Action Verbs）！",
      keyPoints: [
        "run (跑步) — physical speed",
        "eat (吃) — nourishing the body",
        "study (学习) — active mental effort",
        "sleep (睡觉) — physiological rest",
        "work (工作) — professional productivity",
        "play (玩耍/演奏) — recreational activity",
      ],
      audioText:
        "A verb tells us what someone does, is, has, or experiences. Examples: run, eat, study, sleep, work, and play.",
      hint: "If you can physically perform it or picture someone doing it, it is an action verb!",
      hintZh: "如果你可以用肢体演出来或者脑海中想象出一个动作画面，它就是行为动词！",
    },

    // SLIDE 5: Why do we need verbs?
    {
      id: "slide-5-why-need-verbs",
      slideNumber: 5,
      type: "EXPLANATION",
      sectionTitle: "5. The Purpose",
      badge: "WHY GRAMMAR MATTERS",
      title: "Why Do We Need Verbs?",
      titleZh: "为什么英语句子必须有动词？",
      content:
        "Imagine trying to communicate without verbs: 'I... coffee.' 'She... bus.' What happened? Did you drink the coffee? Buy the coffee? Spill the coffee on your laptop? Without a verb, language freezes. Verbs make communication possible.",
      contentZh:
        "试想一下没有动词的荒唐交流：'我...咖啡'、'她...公交车'。到底发生了什么？是你喝了咖啡？买了咖啡？还是把咖啡泼在笔记本电脑上了？没有动词，信息陷入瘫痪。动词让事实浮出水面！",
      keyPoints: [
        "Verbs connect the person to the event",
        "A noun is just a thing; a verb is what happens to that thing",
        "In English, every grammatical sentence MUST contain at least one verb",
      ],
      audioText:
        "Without verbs, sentences have no meaning. Did you buy the coffee or drink the coffee? The verb tells us what happened.",
    },

    // SLIDE 6: Find the verb
    {
      id: "slide-6-find-verb",
      slideNumber: 6,
      type: "MINI_QUIZ",
      sectionTitle: "6. Detective Eye",
      badge: "DETECTIVE DRILL",
      title: "Spot the Action Verb!",
      titleZh: "侦探火眼金睛：找出句子里的动词！",
      content:
        "Put on your detective hat. Read the sentence below and find the word that represents the physical action:",
      contentZh:
        "当一回语法侦探。阅读下方句子，找出代表具体动作的那个词：",
      question: {
        question: "In this sentence: 'The happy children jump into the clear swimming pool', which word is the action verb?",
        questionZh: "在句子'The happy children jump into the clear swimming pool'中，哪一个是行为动词？",
        options: ["happy", "children", "jump", "swimming pool"],
        correctIndex: 2,
        explanation: "'jump' is the action verb! 'happy' is an adjective, 'children' is the subject noun, and 'swimming pool' is the place object.",
        explanationZh: "'jump' 是行为动词！'happy' 是形容词，'children' 是主语名词，'swimming pool' 是地点名词。",
        xpReward: 15,
      },
    },

    // SLIDE 7: Action verbs in daily life
    {
      id: "slide-7-daily-life",
      slideNumber: 7,
      type: "VOCABULARY",
      sectionTitle: "7. Daily Routine",
      badge: "DAILY LIFE",
      title: "Action Verbs from Sunrise to Sunset",
      titleZh: "从清晨到日暮：生活高频动作词汇",
      content:
        "Your entire day is a sequence of natural action verbs. Notice how clean and versatile these words are:",
      contentZh:
        "你的一整天就是由一连串自然的行为动词串联而成的。观察这些词汇的地道表达：",
      vocabulary: [
        {
          word: "wake up",
          wordZh: "醒来",
          partOfSpeech: "verb",
          definition: "Stop sleeping and open your eyes in the morning.",
          exampleSentence: "I wake up at seven o'clock every morning.",
          exampleSentenceZh: "我每天早晨七点醒来。",
        },
        {
          word: "brew",
          wordZh: "冲泡 (咖啡/茶)",
          partOfSpeech: "verb",
          definition: "Prepare a hot drink by soaking coffee grounds or tea leaves in boiling water.",
          exampleSentence: "She brews a fresh cup of coffee before work.",
          exampleSentenceZh: "她在上班前冲泡了一杯新鲜咖啡。",
        },
        {
          word: "commute",
          wordZh: "通勤 / 上下班往返",
          partOfSpeech: "verb",
          definition: "Travel some distance between one's home and place of work on a regular basis.",
          exampleSentence: "They commute to the financial district by train.",
          exampleSentenceZh: "他们乘火车通勤前往金融区。",
        },
        {
          word: "exercise",
          wordZh: "锻炼 / 健身",
          partOfSpeech: "verb",
          definition: "Engage in physical activity to sustain or improve health and fitness.",
          exampleSentence: "He exercises at the gym three times a week.",
          exampleSentenceZh: "他每周在健身房锻炼三次。",
        },
      ],
    },

    // SLIDE 8: Simple examples (With Fun Element!)
    {
      id: "slide-8-simple-examples",
      slideNumber: 8,
      type: "EXAMPLE",
      sectionTitle: "8. Authentic Examples",
      badge: "HUMOR & CLARITY",
      title: "Simple Examples & The Importance of Objects",
      titleZh: "生动例句与宾语的幽默妙用",
      content:
        "Notice how action verbs work with objects. Grammar is logical, but context matters!",
      contentZh:
        "体会行为动词如何搭配宾语。语法讲究逻辑，但语境更显智慧！",
      examples: [
        {
          en: "I eat breakfast.",
          zh: "我吃早餐。",
          highlight: "eat",
          explanation: "Normal, healthy sentence: 'I' (subject) + 'eat' (verb) + 'breakfast' (object).",
          parts: [
            { text: "I", role: "subject", explanation: "Subject pronoun (who eats)", explanationZh: "主语代词（谁吃）" },
            { text: "eat", role: "verb", explanation: "Action verb", explanationZh: "行为动词" },
            { text: "breakfast.", role: "object", explanation: "Object receiving the eating", explanationZh: "宾语（吃的对象）" },
          ],
        },
        {
          en: "I eat my phone.",
          zh: "我吃我的手机。（幽默例句）",
          highlight: "eat",
          explanation: "Technically 100% correct English grammar! But probably a terrible life decision. 😂 'eat' = verb, 'my phone' = object.",
          parts: [
            { text: "I", role: "subject", explanation: "The hungry person", explanationZh: "主语" },
            { text: "eat", role: "verb", explanation: "The action verb", explanationZh: "行为动词" },
            { text: "my phone.", role: "object", explanation: "Grammatically valid object, questionable snack choice!", explanationZh: "语法合规但不能真吃的宾语！" },
          ],
        },
        {
          en: "The barista brews fresh espresso.",
          zh: "咖啡师冲泡新鲜的意式浓缩咖啡。",
          highlight: "brews",
          explanation: "'The barista' (singular subject) + 'brews' (verb with -s) + 'fresh espresso' (object).",
        },
      ],
      audioText:
        "I eat breakfast. I eat my phone. Technically a sentence, but a bad life decision! The barista brews fresh espresso.",
    },

    // SLIDE 9: Subject + verb
    {
      id: "slide-9-subject-verb",
      slideNumber: 9,
      type: "VISUAL_DIAGRAM",
      sectionTitle: "9. Sentence Formula 1",
      badge: "FORMULA 1",
      title: "The Minimal Sentence: Subject + Verb",
      titleZh: "极简句子公式：主语 + 动词",
      content:
        "You do not need fifty words to make complete sense in English. Just TWO words can form a grammatically perfect sentence: Subject (who) + Verb (action)!",
      contentZh:
        "你不需要写很长的句子才能表达完整意思。仅仅两个词就能构成语法完备的句子：主语（谁）+ 动词（做什么）！",
      diagram: {
        type: "svo",
        title: "Two-Element Architecture",
        titleZh: "二元核心结构",
        formula: "Subject (谁) + Verb (做什么) = Complete Sentence!",
        items: [
          { label: "SUBJECT", labelZh: "主语", sublabel: "Birds", color: "bg-blue-50/60 dark:bg-blue-950/30 border-blue-300" },
          { label: "ACTION VERB", labelZh: "动作", sublabel: "fly.", color: "bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300" },
        ],
      },
      keyPoints: [
        "Birds fly. (鸟儿飞翔 — Complete!)",
        "Babies sleep. (婴儿睡觉 — Complete!)",
        "Engineers build. (工程师建造 — Complete!)",
        "Time flies. (光阴似箭 — Complete!)",
      ],
      audioText: "Birds fly. Babies sleep. Engineers build. Time flies. Just two words make a sentence.",
    },

    // SLIDE 10: Subject + verb + object
    {
      id: "slide-10-svo",
      slideNumber: 10,
      type: "VISUAL_DIAGRAM",
      sectionTitle: "10. Sentence Formula 2",
      badge: "FORMULA 2",
      title: "Adding the Receiver: Subject + Verb + Object",
      titleZh: "扩展结构：主语 + 谓语动词 + 宾语 (SVO)",
      content:
        "When an action passes to something else, we add a DIRECT OBJECT. The object answers the question: 'What?' or 'Whom?' did the subject act upon?",
      contentZh:
        "当动作作用于外界事物时，我们加入直接宾语（Object）。宾语回答'主语对什么或对谁施加了动作？'：",
      diagram: {
        type: "svo",
        title: "The SVO Golden Train",
        titleZh: "SVO 黄金三节车厢",
        formula: "Subject (主语) + Verb (动词) + Object (宾语)",
        items: [
          { label: "SUBJECT (谁)", labelZh: "发出者", sublabel: "May", color: "bg-blue-50/60 dark:bg-blue-950/30 border-blue-300" },
          { label: "VERB (动作)", labelZh: "核心动词", sublabel: "plays", color: "bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300" },
          { label: "OBJECT (对象)", labelZh: "承受者", sublabel: "basketball.", color: "bg-amber-50/60 dark:bg-amber-950/30 border-amber-300" },
        ],
      },
      keyPoints: [
        "May = Subject (Who is doing it?)",
        "plays = Verb (What is she doing?)",
        "basketball = Object (What is she playing?)",
      ],
      audioText: "May plays basketball. Subject, verb, object. The golden order of English.",
    },

    // SLIDE 11: Verb position
    {
      id: "slide-11-verb-position",
      slideNumber: 11,
      type: "COMMON_MISTAKE",
      sectionTitle: "11. Word Order",
      badge: "WORD ORDER",
      title: "Where Does the Verb Live in a Sentence?",
      titleZh: "动词在句子中的固定居所：切勿移位！",
      content:
        "In Chinese, time and frequency words often sit comfortably between the subject and the verb (我每天早晨跑步). But in English, keep your Subject and Verb tight friends! Put time words at the end or at the very beginning.",
      contentZh:
        "在汉语中，时间状语经常夹在主谓之间（'我每天早晨跑步'）。但在英文中，主语和动词是紧密相连的好搭档！时间状语通常放在句末或句首：",
      mistakes: [
        {
          wrong: "I every morning run.",
          right: "I run every morning. (OR: Every morning, I run.)",
          why: "Placing the time phrase between the subject and verb breaks standard English SVO cadence.",
          explanation: "Keep Subject ('I') and Verb ('run') together. Put 'every morning' at the end.",
          explanationZh: "让主语 'I' 与动词 'run' 紧密挨着，时间短语 'every morning' 置于句末。",
        },
      ],
      audioText: "Do not say 'I every morning run'. Say 'I run every morning'.",
    },

    // SLIDE 12: Positive sentences
    {
      id: "slide-12-positive",
      slideNumber: 12,
      type: "TABLE",
      sectionTitle: "12. Positive Statements",
      badge: "AFFIRMATIVE",
      title: "Positive Statements: The Third-Person Shift",
      titleZh: "肯定句规则：第三人称单数加 -s 矩阵",
      content:
        "Look at this clean table. Notice that the verb stays in its base form for I, You, We, and They. It ONLY changes when the subject is He, She, It, or one person!",
      contentZh:
        "观察这张清晰的表格。对于 I、You、We、They，动词全部保持原形！只有当主语是 He、She、It 或单数某人时，动词才加 -s/-es：",
      table: {
        headers: ["Subject", "Verb Form", "Sentence Example", "Note"],
        headersZh: ["主语", "动词形式", "句子示例", "说明"],
        rows: [
          { cells: ["I", "work", "I work in an office.", "Base form"], highlight: false },
          { cells: ["You", "work", "You work with great focus.", "Base form"], highlight: false },
          { cells: ["He / She / It", "works", "She works at a technology firm.", "Add -s for 3rd person singular!"], highlight: true },
          { cells: ["We", "work", "We work as a collaborative team.", "Base form"], highlight: false },
          { cells: ["They", "work", "They work remotely from home.", "Base form"], highlight: false },
        ],
      },
    },

    // SLIDE 13: Negative sentences
    {
      id: "slide-13-negative",
      slideNumber: 13,
      type: "RULE",
      sectionTitle: "13. Saying No",
      badge: "NEGATIVES",
      title: "How to Build Negative Sentences: Don't & Doesn't",
      titleZh: "否定句打造指南：Don't 与 Doesn't",
      content:
        "To say someone does NOT do an action in simple present, invite the helping verbs 'don't' (do not) and 'doesn't' (does not). Once doesn't takes the -s, the main verb relaxes back into its base form!",
      contentZh:
        "要表达某人'不做某事'，请出助动词 don't 与 doesn't。重点秘籍：一旦 doesn't 吸走了 -s，后面的主要动词立刻还原回干净的原形！",
      keyPoints: [
        "I / You / We / They + don't + base verb (e.g. I don't drink soda)",
        "He / She / It + doesn't + base verb (e.g. He doesn't drink coffee)",
        "WARNING: Never say 'He doesn't drinks' ❌. Once 'doesn't' has the -s, the verb stays base: 'doesn't drink' ✓",
      ],
      audioText:
        "I don't drink soda. He doesn't drink coffee. Remember: after doesn't, the verb stays in base form.",
    },

    // SLIDE 14: Questions
    {
      id: "slide-14-questions",
      slideNumber: 14,
      type: "EXPLANATION",
      sectionTitle: "14. Asking Clearly",
      badge: "QUESTIONS",
      title: "Asking Questions with Do and Does",
      titleZh: "如何提问：Do 与 Does 探寻答案",
      content:
        "To ask if someone does an action, put 'Do' or 'Does' right at the beginning of the sentence before the subject. Like magic, a statement turns into a polite question!",
      contentZh:
        "要询问别人是否进行某动作，只需把 'Do' 或 'Does' 放在主语最前面。如同魔法一般，陈述句瞬间变为礼貌的疑问句！",
      keyPoints: [
        "Do you play basketball? — Yes, I do. / No, I don't.",
        "Does she speak English? — Yes, she does. / No, she doesn't.",
        "Do they live in Melbourne? — Yes, they do. / No, they don't.",
      ],
      audioText:
        "Do you play basketball? Does she speak English? Put Do or Does first to ask a question.",
    },

    // SLIDE 15: Verb forms
    {
      id: "slide-15-verb-forms",
      slideNumber: 15,
      type: "TABLE",
      sectionTitle: "15. The 5 Verb Forms",
      badge: "VERB FORMS",
      title: "The 5 Morphological Shapes of an English Verb",
      titleZh: "动词的五种基本变形形态",
      content:
        "Every verb in the English language exists in five main forms. Once you know these five shapes for any verb, you can express any tense across past, present, and future.",
      contentZh:
        "英语中的每一个动词都有五种主要形态。一旦你掌握了这五种形态，就能在过去、现在与未来之间自如切换：",
      table: {
        headers: ["Base Form", "-s Form", "Past Simple", "Past Participle", "-ing Form"],
        headersZh: ["原形 (V1)", "第三人称单数 (Vs)", "过去式 (V2)", "过去分词 (V3)", "进行分词 (V-ing)"],
        rows: [
          { cells: ["write", "writes", "wrote", "written", "writing"], highlight: false },
          { cells: ["speak", "speaks", "spoke", "spoken", "speaking"], highlight: false },
          { cells: ["eat", "eats", "ate", "eaten", "eating"], highlight: false },
          { cells: ["play", "plays", "played", "played", "playing"], highlight: false },
        ],
      },
    },

    // SLIDE 16: Present action
    {
      id: "slide-16-present-action",
      slideNumber: 16,
      type: "EXAMPLE",
      sectionTitle: "16. Present Timeframe",
      badge: "PRESENT SIMPLE",
      title: "Describing Habits & Present Routines",
      titleZh: "现在时间线：日常习惯与固定规律",
      content:
        "We use the simple present tense with action verbs to describe things that happen regularly, habits, and permanent truths.",
      contentZh:
        "我们使用一般现在时的行为动词来描述规律性发生的动作、日常习惯以及客观事实：",
      examples: [
        {
          en: "The morning train arrives at platform three every morning.",
          zh: "早班火车每天早晨停靠在三号站台。",
          highlight: "arrives",
          explanation: "Habitual regular timetable action: singular subject 'The morning train' + 'arrives'.",
        },
        {
          en: "I drink two glasses of warm water right after waking up.",
          zh: "我刚醒来后会喝两杯温水。",
          highlight: "drink",
          explanation: "Personal health habit: subject 'I' + base verb 'drink'.",
        },
      ],
      audioText: "The morning train arrives at platform three every morning. I drink two glasses of water.",
    },

    // SLIDE 17: Past action
    {
      id: "slide-17-past-action",
      slideNumber: 17,
      type: "VISUAL_DIAGRAM",
      sectionTitle: "17. Past Timeframe",
      badge: "PAST SIMPLE",
      title: "Completed Actions in the Past",
      titleZh: "过去时间线：已经画上句号的动作",
      content:
        "When an action finished at a specific point in the past, regular verbs take -ed (or change form if irregular). The action is over and belongs to history.",
      contentZh:
        "当动作在过去的某个具体时间点已经完成，规则动词加 -ed（不规则动词发生变音）。动作已落幕，属于过去：",
      diagram: {
        type: "timeline",
        timeline: {
          past: "Yesterday: cooked dinner (Finished ✓)",
          now: "Present Moment",
          future: "Tomorrow",
          highlight: "past",
        },
      },
      keyPoints: [
        "Yesterday, I cooked authentic Italian pasta for my family. (cook → cooked)",
        "Last night, she finished the entire quarterly financial audit. (finish → finished)",
      ],
      audioText: "Yesterday, I cooked dinner. Last night, she finished the audit. Past actions are complete.",
    },

    // SLIDE 18: Future action
    {
      id: "slide-18-future-action",
      slideNumber: 18,
      type: "VISUAL_DIAGRAM",
      sectionTitle: "18. Future Timeframe",
      badge: "FUTURE ACTION",
      title: "Projected Actions in the Future",
      titleZh: "未来时间线：即将开展的行动",
      content:
        "To look forward into tomorrow or next year, pair the modal helper 'will' with your base action verb. No -s, no -ed, just pure forward momentum!",
      contentZh:
        "展望明天或明年时，将助词 'will' 与动词原形搭配。不加 -s，不加 -ed，唯有向前的行动力：",
      diagram: {
        type: "timeline",
        timeline: {
          past: "Yesterday",
          now: "Now (Planning)",
          future: "Tomorrow: will launch (Upcoming 🚀)",
          highlight: "future",
        },
      },
      keyPoints: [
        "Tomorrow, our engineering team will launch the new mobile feature.",
        "Next month, I will travel to Tokyo for an international design conference.",
      ],
      audioText: "Tomorrow, our team will launch the new feature. Next month, I will travel to Tokyo.",
    },

    // SLIDE 19: Action vs state
    {
      id: "slide-19-action-vs-state",
      slideNumber: 19,
      type: "COMPARISON",
      sectionTitle: "19. The Deep Contrast",
      badge: "ACTION VS STATE",
      title: "Dynamic Actions vs. Stative Conditions",
      titleZh: "动态行为 vs 静态状态深度对决",
      content:
        "This distinction is crucial for natural English fluency. Action verbs involve movement and change. State verbs describe feelings, beliefs, and possessions that are stationary.",
      contentZh:
        "这是通往地道英语流利度的关键分水岭。行为动词涉及运动与变化；状态动词描述静止的感受、信念与归属：",
      comparisons: [
        {
          conceptA: "ACTION VERB (动态动作)",
          conceptB: "STATE VERB (心理/静态)",
          difference: "Action verbs can take -ing continuous forms; state verbs usually cannot.",
          differenceZh: "行为动词可用于进行时态；状态动词通常不能直接用于进行时态。",
          exampleA: "I am eating breakfast. (✓ Physical eating action)",
          exampleB: "I know the answer. (NOT: I am knowing the answer ❌)",
        },
        {
          conceptA: "cook, run, design, swim",
          conceptB: "love, believe, own, understand",
          difference: "You can watch someone cook; you cannot physically watch someone 'own' or 'know'.",
          differenceZh: "你可以亲眼看到有人做饭；但你无法肉眼看到有人在'拥有'或'知道'。",
          exampleA: "She designs apps. (Physical output)",
          exampleB: "She understands math. (Mental state)",
        },
      ],
      audioText:
        "Action verbs show what you do, like cook and swim. State verbs show what you feel or know, like love and understand.",
    },

    // SLIDE 20: Common mistakes
    {
      id: "slide-20-common-mistakes",
      slideNumber: 20,
      type: "COMMON_MISTAKE",
      sectionTitle: "20. Global Pitfalls",
      badge: "GLOBAL PITFALLS",
      title: "The Top 2 Global Action Verb Mistakes",
      titleZh: "全球英语学习者最常踩的两大坑",
      content:
        "Even advanced learners occasionally slip up on these two rules. Review them carefully to make your speech error-proof.",
      contentZh:
        "即使进阶学习者偶尔也会在这两条规则上翻车。认真复盘，让你的口语准确无误：",
      mistakes: [
        {
          wrong: "He work at a hospital in downtown.",
          right: "He works at a hospital in downtown.",
          why: "Dropping the third-person -s with singular subjects (He, She, It) is the #1 spoken slip.",
          explanation: "Always remember: He / She / It + verb with -s (works).",
          explanationZh: "单数第三人称动词必加 -s：He works。",
        },
        {
          wrong: "I didn't went to the gym yesterday.",
          right: "I didn't go to the gym yesterday.",
          why: "Double past error: 'didn't' already marks past tense, so the verb must return to base form.",
          explanation: "After didn't, always use the base form 'go', never past form 'went'.",
          explanationZh: "在 didn't 之后，动词必须恢复原形 'go'，绝不可出现双重过去式。",
        },
      ],
      audioText: "Say 'He works', not 'He work'. Say 'I didn't go', not 'I didn't went'.",
    },

    // SLIDE 21: Chinese learner mistakes (The Famous 'I am agree' Trap)
    {
      id: "slide-21-chinese-mistakes",
      slideNumber: 21,
      type: "COMMON_MISTAKE",
      sectionTitle: "21. L1 Chinglish Traps",
      badge: "L1 RESCUE",
      title: "Chinese Learner Traps: The 'Am/Is/Are' Double Verb",
      titleZh: "中国学习者头号顽疾：中式'双谓语'叠加",
      content:
        "In Chinese, we say '我是同意你的' or '他是在那家公司工作'. When translating word-for-word, students often say 'I am agree' or 'He is work'. In English, you choose ONE: either a be verb OR an action verb. NEVER stack both!",
      contentZh:
        "中文习惯说'我是同意你的'或'他是很忙'。逐字直译时，大家极易说出'I am agree'或'He is work'。在英语中，要么用 be 动词，要么用行为动词，二选其一，绝不重叠！",
      mistakes: [
        {
          wrong: "I am agree with your perspective.",
          right: "I agree with your perspective.",
          why: "'Agree' is already a dynamic action/opinion verb. Adding 'am' creates an ungrammatical double verb.",
          explanation: "Simply say 'I agree' (肯定) or 'I don't agree' (否定).",
          explanationZh: "直接说 'I agree' 或 'I don't agree'，绝不加 'am'。",
        },
        {
          wrong: "She very likes traveling abroad.",
          right: "She likes traveling abroad very much. (OR: She really likes traveling.)",
          why: "In Chinese '很' goes before the verb (很喜欢). In English, 'very' cannot directly modify a verb.",
          explanation: "Use 'really' before the verb (She really likes) or put 'very much' at the end.",
          explanationZh: "英语中 'very' 不能直接修饰动词。用 'really like' 或在句末加 'very much'。",
        },
      ],
      audioText: "Never say 'I am agree'. Always say 'I agree'. Say 'She really likes traveling'.",
    },

    // SLIDE 22: Real-life scenario
    {
      id: "slide-22-scenario",
      slideNumber: 22,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "22. Real-Life Immersion",
      badge: "SCENARIO",
      title: "Morning Routine & Commuting to Work",
      titleZh: "真实情境：工作日早晨的起居与通勤",
      content:
        "Read how Mark describes his morning routine. Notice every single action verb in motion:",
      contentZh:
        "阅读 Mark 如何用英语描述他工作日的早晨。注意其中每一个生动的行为动词：",
      scenario: {
        context: "Mark is sharing his healthy weekday routine during an English conversation club.",
        contextZh: "Mark 正在英语角向大家分享他健康自律的工作日早晨习惯。",
        dialogue: [
          { speaker: "Mark", en: "My alarm rings at six-thirty every morning.", zh: "我的闹钟每天早晨六点半响起。", isTargetGrammar: true },
          { speaker: "Mark", en: "I drink a glass of fresh water, stretch for five minutes, and brew green tea.", zh: "我喝一杯温水，拉伸五分钟，然后冲泡绿茶。", isTargetGrammar: true },
          { speaker: "Mark", en: "At seven-fifteen, I catch the express train to the city center.", zh: "七点十五分，我乘坐快速列车前往市中心。", isTargetGrammar: true },
          { speaker: "Teacher", en: "Excellent! Notice verbs: rings, drink, stretch, brew, catch. All active!", zh: "太棒了！注意这些动词：响、喝、拉伸、冲泡、乘坐。全都是生动的行为动词！", isTargetGrammar: false },
        ],
        task: "Notice how all verbs describe concrete, sequential steps from morning to arrival.",
        taskZh: "体会这些动词如何按照时间先后顺序，描绘出连贯清晰的早晨生活画面。",
      },
    },

    // SLIDE 23: Conversation
    {
      id: "slide-23-conversation",
      slideNumber: 23,
      type: "CONVERSATION",
      sectionTitle: "23. Authentic Dialogue",
      badge: "COFFEE SHOP",
      title: "At the Coffee Shop: Ordering & Inquiring",
      titleZh: "咖啡馆实景对话：点餐与点单交流",
      content:
        "Listen and follow this everyday conversation between a customer and a barista.",
      contentZh:
        "倾听并跟读顾客与咖啡师之间的地道日常点餐对话：",
      scenario: {
        context: "Lucas is ordering his morning coffee and inquiring about plant-based milk options.",
        contextZh: "Lucas 正在点早餐咖啡并询问燕麦奶选项。",
        dialogue: [
          { speaker: "Lucas", en: "Good morning! Do you offer oat milk for the flat white?", zh: "早安！请问你们澳白可以换燕麦奶吗？", isTargetGrammar: true },
          { speaker: "Barista", en: "Yes, we steam fresh oat milk daily. What size would you like?", zh: "可以的，我们每天都打发新鲜燕麦奶。你想要什么杯型？", isTargetGrammar: true },
          { speaker: "Lucas", en: "I'll take a medium, and please add one raw sugar.", zh: "我要中杯，请加一份原蔗糖。", isTargetGrammar: true },
          { speaker: "Barista", en: "Perfect! Take a seat, and I will call your name when ready.", zh: "没问题！请先就座，做好后我会叫你的名字。", isTargetGrammar: true },
        ],
        task: "Identify the action verbs: offer (提供), steam (打发奶泡), take (选定), add (添加), call (呼叫).",
        taskZh: "找出其中的行为动词：offer, steam, take, add, call。",
      },
    },

    // SLIDE 24: Guided practice
    {
      id: "slide-24-guided-practice",
      slideNumber: 24,
      type: "EXAMPLE",
      sectionTitle: "24. Guided Practice",
      badge: "GUIDED PRACTICE",
      title: "Step-by-Step Sentence Dissection",
      titleZh: "步步为营：互动解剖复杂句子",
      content:
        "Click on the words below to examine how adjectives, subjects, action verbs, and objects fit together naturally.",
      contentZh:
        "点击下方句子中的单词，观察形容词、主语、行为动词与宾语如何自然咬合：",
      examples: [
        {
          en: "The dedicated doctor examines the patient carefully.",
          zh: "敬业的医生仔细地为病人检查身体。",
          highlight: "examines",
          explanation: "'examines' is the singular action verb (examine + s).",
          parts: [
            { text: "The dedicated doctor", role: "subject", explanation: "Subject noun phrase with adjective 'dedicated'", explanationZh: "带有形容词修饰的主语名词短语" },
            { text: "examines", role: "verb", explanation: "Active verb in 3rd-person singular (-s)", explanationZh: "第三人称单数行为动词" },
            { text: "the patient", role: "object", explanation: "Direct object person receiving examination", explanationZh: "承受检查的直接宾语" },
            { text: "carefully.", role: "modifier", explanation: "Manner adverb showing how the action is performed", explanationZh: "方式副词，表示怎样做动作" },
          ],
        },
      ],
      audioText: "The dedicated doctor examines the patient carefully.",
    },

    // SLIDE 25: Easy drill
    {
      id: "slide-25-easy-drill",
      slideNumber: 25,
      type: "MINI_QUIZ",
      sectionTitle: "25. Practice Level 1",
      badge: "EASY DRILL",
      title: "Level 1: Identify the Single Action Verb",
      titleZh: "难度等级 1：轻松找出行为动词",
      content:
        "Test your recognition: which word performs the action in this sentence?",
      contentZh:
        "自测眼力：这个句子中哪个词是执行动作的行为动词？",
      question: {
        question: "In the sentence: 'The experienced pilot safely lands the Boeing 787 in heavy wind', which word is the verb?",
        questionZh: "在句子'The experienced pilot safely lands the Boeing 787 in heavy wind'中，哪一个是动词？",
        options: ["experienced", "pilot", "lands", "wind"],
        correctIndex: 2,
        explanation: "'lands' is the action verb! 'pilot' is the subject noun, 'experienced' is an adjective, and 'safely' is an adverb.",
        explanationZh: "'lands'（降落）是行为动词！'pilot'是主语名词，'experienced'是形容词，'safely'是副词。",
        xpReward: 10,
      },
    },

    // SLIDE 26: Medium drill
    {
      id: "slide-26-medium-drill",
      slideNumber: 26,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "26. Practice Level 2",
      badge: "MEDIUM DRILL",
      title: "Level 2: Choose the Correct Agreement Form",
      titleZh: "难度等级 2：选择正确的主谓一致形式",
      content:
        "Choose the grammatically accurate verb form to complete this professional sentence:",
      contentZh:
        "选择语法准确的动词形式补全职场句子：",
      question: {
        question: "Our lead software architect _____ the technical specifications before the code review.",
        questionZh: "我们的首席软件架构师在代码审查前起草技术规格书。",
        options: ["draft", "drafts", "is draft", "drafting"],
        correctIndex: 1,
        explanation: "Correct! 'Our lead software architect' is a singular third-person subject, requiring the verb with -s: 'drafts'.",
        explanationZh: "正确！'Our lead software architect' 为单数第三人称主语，谓语动词必加 -s：'drafts'。",
        xpReward: 15,
      },
    },

    // SLIDE 27: Advanced drill (Sentence Reorder)
    {
      id: "slide-27-reorder",
      slideNumber: 27,
      type: "REORDER",
      sectionTitle: "27. Practice Level 3",
      badge: "ADVANCED DRILL",
      title: "Level 3: Sentence Builder Challenge",
      titleZh: "难度等级 3：高难度句子积木重组挑战",
      content:
        "Click the scrambled word chips in the exact Subject + Verb + Object + Time order:",
      contentZh:
        "按照'主语 + 动词 + 宾语 + 时间'的严格标准语序，点击乱序词块完成拼接：",
      reorder: {
        segments: ["every morning", "fresh sourdough bread", "The baker", "bakes"],
        correctOrder: ["The baker", "bakes", "fresh sourdough bread", "every morning"],
        translationZh: "烘焙师每天早晨烤制新鲜酸面包。",
        audioText: "The baker bakes fresh sourdough bread every morning.",
      },
    },

    // SLIDE 28: Error correction
    {
      id: "slide-28-error-correction",
      slideNumber: 28,
      type: "ERROR_CORRECTION",
      sectionTitle: "28. Practice Level 4",
      badge: "BUG HUNTER",
      title: "Level 4: Catch the Grammatical Bug!",
      titleZh: "难度等级 4：揪出隐藏的语法 Bug！",
      content:
        "One word in the sentence below violates English grammar. Find and fix it!",
      contentZh:
        "下方句子中有一个词破坏了英文语法规则。找出并纠正它！",
      errorCorrection: {
        sentence: "My roommate always leave his apartment keys on the kitchen counter.",
        errorWord: "leave",
        correctWord: "leaves",
        options: ["leave", "leaves", "is leave", "leaving"],
        explanation: "'My roommate' is singular third-person, so 'leave' must take -s to become 'leaves'.",
        explanationZh: "'My roommate' 是单数第三人称，动词 'leave' 必须加 -s 变成 'leaves'。",
      },
    },

    // SLIDE 29: Speaking drill
    {
      id: "slide-29-speaking",
      slideNumber: 29,
      type: "SPEAKING_DRILL",
      sectionTitle: "29. Practice Level 5",
      badge: "SPEAKING DRILL",
      title: "Level 5: Oral Output & Pronunciation Muscle Memory",
      titleZh: "难度等级 5：脱口而出肌肉记忆训练",
      content:
        "Speak the sentence aloud with natural English rhythm. Notice how the /z/ sound on 'negotiates' links smoothly into the next word:",
      contentZh:
        "大声朗读句子，注意自然地道语流，以及 'negotiates' 词尾 /z/ 音的清晰发音：",
      speakingDrill: {
        prompt: "Say this sentence aloud 3 times with confidence:",
        targetSentence: "She negotiates international contracts with global clients.",
        targetSentenceZh: "她与全球客户协商国际合同条款。",
        phonetic: "/ʃiː nɪˈɡəʊʃieɪts ˌɪntəˈnæʃnəl ˈkɒntrækts wɪð ˈɡləʊbl ˈklaɪənts/",
        tips: "Keep your voice flowing: pronounce the -s on 'negotiates' clearly as a sharp /ts/ sound without stopping your breath.",
      },
    },

    // SLIDE 30: Real-life challenge
    {
      id: "slide-30-real-challenge",
      slideNumber: 30,
      type: "EXPLANATION",
      sectionTitle: "30. Authentic Application",
      badge: "APPLICATION",
      title: "Real-Life Challenge: Describe Your Morning Routine",
      titleZh: "实战挑战：自信描述你的晨间起居",
      content:
        "Now it is your turn to produce! Use at least 4 distinct action verbs to describe what you do every morning between waking up and starting your work or study.",
      contentZh:
        "现在轮到你大显身手了！使用至少 4 个不同的行为动词，完整描述你从早晨睁开双眼到开始工作/学习的流程。",
      keyPoints: [
        "Step 1 (Wake up): 'I wake up at seven and stretch.'",
        "Step 2 (Breakfast): 'I make coffee and eat toast.'",
        "Step 3 (Get ready): 'I pack my bag and put on my coat.'",
        "Step 4 (Commute): 'I walk to the station and catch the train.'",
      ],
      audioText:
        "Describe your morning routine. Use verbs like wake up, stretch, make coffee, pack your bag, and catch the train.",
    },

    // SLIDE 31: PTE connection
    {
      id: "slide-31-pte-connection",
      slideNumber: 31,
      type: "EXPLANATION",
      sectionTitle: "31. PTE Exam Link",
      badge: "PTE ACADEMIC",
      title: "PTE Academic Connection: Write From Dictation (WFD)",
      titleZh: "培生 PTE 考点连接：听写句子与语法踩分点",
      content:
        "In the PTE Academic exam, 'Write From Dictation' (WFD) accounts for massive points in both Listening and Writing. The AI scoring algorithm checks every single verb ending (-s, -ed). Missing one single 's' on an action verb costs you precious points!",
      contentZh:
        "在 PTE 培生学术英语考试中，'听写句子'（WFD）在听力和写作中占极高分值。机器评分算法对每一个动词词尾（-s、-ed）进行严密比对。如果遗漏单数动词的一个 's'，就会白白丢分！",
      keyPoints: [
        "PTE Sample Sentence: 'The university library opens at eight o'clock every morning.'",
        "Common student error: typing 'open' instead of 'opens' (Machine awards 0 for that word!)",
        "Rule connection: 'library' is singular, so the action verb MUST be 'opens'.",
      ],
      audioText:
        "The university library opens at eight o'clock every morning. In PTE, never forget the s on singular verbs.",
    },

    // SLIDE 32: Mixed questions
    {
      id: "slide-32-mixed-quiz",
      slideNumber: 32,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "32. Mixed Review",
      badge: "MIXED CHECK",
      title: "Comprehensive Mixed Concept Quiz",
      titleZh: "综合概念考查：否定句动词还原",
      content:
        "Which of the four sentences below is 100% grammatically correct in English?",
      contentZh:
        "下列四个句子中，哪一个在英语语法上是 100% 正确无误的？",
      question: {
        question: "Select the sentence with 100% accurate verb grammar:",
        questionZh: "选出语法完全正确的句子：",
        options: [
          "She doesn't likes hot coffee in summer.",
          "She doesn't like hot coffee in summer.",
          "She not like hot coffee in summer.",
          "She is not like hot coffee in summer.",
        ],
        correctIndex: 1,
        explanation: "Correct! In negative present simple sentences, after 'doesn't', the main action verb returns to its base form: 'like' (NOT: likes).",
        explanationZh: "完全正确！在一般现在时否定句中，'doesn't' 之后的主要动词必须还原为原形 'like'（不可再加 -s）。",
        xpReward: 20,
      },
    },

    // SLIDE 33: Review
    {
      id: "slide-33-review",
      slideNumber: 33,
      type: "REVIEW",
      sectionTitle: "33. Synthesis & Review",
      badge: "CORE REVIEW",
      title: "Summary of Core Action Verb Rules",
      titleZh: "行为动词三大铁律全景复盘",
      content:
        "Before you graduate, review these three golden non-negotiable principles of English action verbs:",
      contentZh:
        "在通关前，牢牢重温英语行为动词的三大黄金法则：",
      reviewPoints: [
        {
          keyTakeaway: "1. The SVO Engine: Subject + Verb (+ Object).",
          keyTakeawayZh: "主谓宾黄金引擎：主语发出动作，动词执行动作，宾语承受动作。",
          ruleSummary: "Subject + Verb + Object",
        },
        {
          keyTakeaway: "2. The Third-Person Singular Agreement: He / She / It + Verb-s.",
          keyTakeawayZh: "单三主谓一致：主语为单数第三人称时，肯定句动词必加 -s 或 -es。",
          ruleSummary: "He/She/It + works/eats/plays",
        },
        {
          keyTakeaway: "3. No Double Verbs: Never stack am/is/are directly with action verbs.",
          keyTakeawayZh: "严禁双谓语叠加：绝不将 am/is/are 与动词原形生硬拼接（如 I am agree ❌）。",
          ruleSummary: "I agree (✓) | He works (✓)",
        },
      ],
    },

    // SLIDE 34: Can You Explain It? (Feynman Technique)
    {
      id: "slide-34-feynman",
      slideNumber: 34,
      type: "EXPLANATION",
      sectionTitle: "34. Feynman Technique",
      badge: "TEACH IT BACK",
      title: "Can You Explain It to a Friend?",
      titleZh: "费曼学习法：你能讲给别人听吗？",
      content:
        "The best way to know you have truly mastered grammar is to explain it in your own words. Imagine a classmate says: 'Hey, why is it wrong to say I am agree with you?' How would you explain it to them?",
      contentZh:
        "检验真正掌握语法的最高境界，就是能够用自己的话教会别人。试想一位同学问你：'为什么说 I am agree with you 是错的？'你会怎样向他解释？",
      keyPoints: [
        "1. Tell them: 'Agree is ALREADY an action verb — it means hold the same view.'",
        "2. Tell them: 'In English, you don't need am/is/are when you already have a real verb.'",
        "3. Give them the natural fix: 'Just say: I agree with you!'",
      ],
      audioText:
        "Can you explain it? Tell your friend: agree is already an action verb, so we do not need am. Just say: I agree with you.",
    },

    // SLIDE 35: Final challenge
    {
      id: "slide-35-final-challenge",
      slideNumber: 35,
      type: "SUMMARY",
      sectionTitle: "35. Master Graduation",
      badge: "GRADUATION",
      title: "What Can You Do Now?",
      titleZh: "通关大考：你现在的能力清单！",
      content:
        "Congratulations! You have completed the comprehensive Action Verbs Master Foundation. Look at how much you can do now:",
      contentZh:
        "热烈祝贺！你已成功通关行为动词基石大课。审视你此刻已经具备的英语硬核实力：",
      keyPoints: [
        "✓ Identify action verbs instantly across spoken and written English",
        "✓ Find verbs inside complex sentences without hesitation",
        "✓ Build clean basic sentences with Subject + Verb and Subject + Verb + Object",
        "✓ Use verbs in positive, negative (don't/doesn't), and question (Do/Does) structures",
        "✓ Use action verbs naturally in real coffee shop and workplace conversations",
        "✓ Recognize and eliminate common Chinese 'I am agree' double-verb mistakes",
      ],
    },

    // SLIDE 36: Homework & Next Step
    {
      id: "slide-36-homework",
      slideNumber: 36,
      type: "HOMEWORK",
      sectionTitle: "36. Take-Home & Next Step",
      badge: "NEXT DESTINATION",
      title: "Homework Portfolio & Next Destination",
      titleZh: "课后实践作业与下一站预告",
      content:
        "Solidify your newly acquired grammar reflexes with these 3 targeted take-home assignments. When you are ready, continue to your next grammar breakthrough!",
      contentZh:
        "通过以下 3 项针对性实践作业，将语法规则彻底转化为脱口而出的直觉反应。完成后即可开启下一站！",
      homework: {
        title: "Action Verbs Daily Routine Portfolio",
        titleZh: "行为动词日常与职场输出课后作业",
        tasks: [
          {
            type: "writing",
            instruction: "Write 4 sentences describing your workday morning using 4 different action verbs (e.g. wake, brew, check, join).",
            instructionZh: "使用 4 个不同的行为动词写出 4 个描述你工作日早晨的句子（如 wake, brew, check, join）。",
            sampleAnswer: "I wake up at 7:00 AM. I brew a cup of black coffee. I check my urgent Slack messages. I join the morning team standup.",
          },
          {
            type: "speaking",
            instruction: "Record a 30-second audio note describing what a coworker or family member does (remember to add -s to third-person verbs!).",
            instructionZh: "录制一段 30 秒语音，描述一位同事或家人的日常（记得在第三人称动词后加 -s！）。",
            sampleAnswer: "My colleague David designs the mobile UI, writes technical documentation, and reviews pull requests every morning.",
          },
          {
            type: "reflection",
            instruction: "Explain in your own words why 'I am agree' is an incorrect double-verb in English, and recite the correct version 5 times.",
            instructionZh: "用自己的话解释为什么'I am agree'是错误的双谓语，并将正确版本'I agree'大声朗诵 5 遍。",
            sampleAnswer: "'Agree' is already a verb meaning 'hold the same opinion'. We don't add 'am'. Correct: I agree with you.",
          },
        ],
      },
    },
  ],
};
