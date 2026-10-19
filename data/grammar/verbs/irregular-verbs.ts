import { GrammarLesson } from "@/types/grammar";

export const irregularVerbsLesson: GrammarLesson = {
  id: "irregular-verbs-top50",
  subcategoryId: "irregular-verbs",
  categoryId: "verbs",
  title: "Top 50 Irregular Verbs: Breaking the Rules",
  titleZh: "50个最常用不规则动词：打破规则",
  subtitle: "Master the verbs that refuse to follow the -ed pattern",
  level: "B1",
  estimatedMinutes: 55,
  lessonIndex: 8,
  totalLessonsInSubcategory: 6,
  description:
    "Conquer the 50 most common irregular verbs in English. These verbs break the predictable -ed pattern and must be memorized as pairs. Learn the past tense and past participle for each, along with memory tricks and grouping strategies to make them stick.",
  descriptionZh:
    "征服英语中50个最常见的不规则动词。这些动词打破可预见的-ed模式，必须背诵成对形式。学习每个动词的过去式和过去分词，以及助记技巧和分组策略。",
  objectives: [
    "memorize the top 50 irregular verb forms (base → past → past participle)",
    "recognize irregular verbs by their unpredictable past tense forms",
    "use irregular verbs in past simple, present perfect, and past perfect",
    "apply spelling groups and memory tricks for recall",
    "distinguish irregular verbs from regular in context",
  ],
  prerequisites: ["regular-verbs-ed-ending"],
  teacherGuide: {
    teachingObjective:
      "Train learners to memorize the most frequent irregular verb forms using semantic grouping and pattern recognition. Emphasize that these verbs cannot be predicted — they must be learned as vocabulary.",
    whatToExplain: [
      "Irregular verbs do not follow the -ed pattern — their past forms must be memorized.",
      "Group verbs by meaning families: motion/go-went-gone, perception/see-saw-seen, etc.",
      "The past participle (3rd form) is used with 'have' (present perfect) and 'had' (past perfect).",
      "Some verbs have the same form for 2 and 3: 'put-put-putted', 'cut-cut-cut'.",
    ],
    questionsToAsk: [
      "Why can't 'go' follow the regular rule? What did it change to?",
      "What's the difference between past tense and past participle?",
      "Which irregular verbs are most important for daily conversation?",
    ],
    commonConfusion: [
      "Trying to regularize irregular verbs: 'eated', 'goed', 'breaked'",
      "Confusing past tense and past participle forms (especially when they differ)",
      "Forgetting that some verbs share forms: think-thought-thought",
    ],
    extraExamples: [
      "I went to the store yesterday. (go→went)",
      "She has read five books this month. (read→read→read)",
      "They had eaten before we arrived. (eat→ate→eaten)",
    ],
    timingSchedule: [
      { phase: "Warm-up & Recall", duration: "0–5 min", activity: "Quick review of -ed rule: ask what 'walked' looks like (predictable)." },
      { phase: "Introducing Irregular Verbs", duration: "5–15 min", activity: "Explain that irregular verbs break the -ed pattern; they must be memorized." },
      { phase: "Semantic Grouping", duration: "15–25 min", activity: "Group the top 20 by meaning: motion, senses, states, communication." },
      { phase: "Drill and Practice", duration: "25–40 min", activity: "Rapid-fire conjugation drills with the 50 most common verbs." },
      { phase: "Real-Life Scenarios", duration: "40–50 min", activity: "Tell a life story from childhood to present using irregular verbs." },
      { phase: "Wrap-up & Homework", duration: "50–60 min", activity: "Assign memorization and story-writing homework." },
    ],
  },
  homework: {
    title: "Lifetime Story: Irregular Verbs Journey",
    titleZh: "生命故事：不规则动词之旅",
    tasks: [
      {
        type: "writing",
        instruction: "Write a 10-sentence autobiography from birth to now. Use at least 15 different irregular verbs in past tense.",
        instructionZh: "用至少15个不同的不规则动词的过去式，写10句从出生到现在的自传。",
        sampleAnswer: "I was born in 1995. I grew up in Shanghai. I went to primary school. I learned English. I became a teacher.",
      },
      {
        type: "speaking",
        instruction: "Record a 90-second story about what you did last summer using at least 12 irregular verbs in past tense.",
        instructionZh: "录制90秒讲述你这个夏天做了什么的故事，至少使用12个不规则动词的过去式。",
        sampleAnswer: "I went to the coast. I saw the ocean. I swam in the sea. I met new friends. We took photos.",
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
      title: "Top 50 Irregular Verbs",
      titleZh: "50个最常用不规则动词",
      content:
        "You've learned how regular verbs are predictable — just add -ed! But English is full of rebels. These verbs refuse the -ed pattern and each has its own unique past form. They must be memorized. This lesson covers the 50 most important ones you'll ever need.",
      contentZh:
        "你已学过规则动词的可预见性——只需加-ed！但英语中有很多叛逆者。这些动词拒绝-ed模式，有自己独特的过去式。它们必须背诵。这节课涵盖50个最重要的，你永远都需要掌握。",
      keyPoints: [
        "Irregular verbs do NOT follow the -ed pattern — no prediction possible",
        "Each verb has unique past tense and past participle forms",
        "Memorization through semantic groups makes them stick",
      ],
    },

    {
      id: "slide-2-past-vs-participle",
      slideNumber: 2,
      type: "EXPLANATION",
      sectionTitle: "2. The Three Forms Rule",
      badge: "CORE CONCEPT",
      title: "Base → Past → Past Participle: The 3-Column Method",
      titleZh: "原形→过去式→过去分词：三列记法",
      content:
        "Every verb has three key forms: (1) Base form, (2) Past simple, (3) Past participle. Regular verbs use the same pattern for all three (walk/walked/walked). Irregular verbs differ unpredictably.",
      contentZh:
        "每个动词都有三种关键形式：(1)原形，(2)过去式，(3)过去分词。规则动词对所有三种形式使用相同模式（walk/walked/walked）。不规则动词各不相同。",
      keyPoints: [
        "Past tense (form 2) is used for completed actions: 'I walked yesterday.'",
        "Past participle (form 3) is used with have/had: 'I have walked.'",
        "Irregular verbs: go → went → gone (three different forms!)",
      ],
      audioText: "Base, past, past participle. Three forms, one verb. Learn them all.",
    },

    {
      id: "slide-3-memorization-strategy",
      slideNumber: 3,
      type: "EXPLANATION",
      sectionTitle: "3. How to Memorize: Semantic Groups",
      badge: "MEMORY HACK",
      title: "Group by Meaning: Your Brain Learns Stories",
      titleZh: "按含义分组记忆",
      content:
        "Instead of memorizing randomly, group irregular verbs by meaning. Motion verbs together (go/went/gone), perception verbs together (see/saw/seen), communication verbs together (say/said/said). Your brain remembers stories better than lists.",
      contentZh:
        "不是随机背诵，而是按含义对不规则动词进行分组。把运动动词放在一起（go/went/gone），感官动词放在一起（see/saw/seen），交流动词放在一起（say/said/said）。大脑更擅长记忆故事而不是列表。",
      keyPoints: [
        "Motion group: go, come, run, drive, swim — physical movement",
        "Perception group: see, hear, watch, feel, notice — taking in information",
        "Communication group: say, tell, speak, ask, answer — exchanging words",
        "Existence group: be, have, do, become, remain — states and being",
      ],
    },

    {
      id: "slide-4-motion-verbs",
      slideNumber: 4,
      type: "TABLE",
      sectionTitle: "4. Motion and Change",
      badge: "VERB GROUP 1",
      title: "Movement & Change of State",
      titleZh: "运动与状态变化动词组",
      content:
        "These are the most common irregular verbs — you use them every day to talk about moving, changing, and existing.",
      contentZh:
        "这些是最常见的不规则动词——每天都会用到它们谈论移动、变化和存在。",
      table: {
        headers: ["Verb", "Past", "Past Participle", "Chinese Meaning"],
        headersZh: ["动词原形", "过去式", "过去分词", "中文含义"],
        rows: [
          { cells: ["go", "went", "gone", "去"] },
          { cells: ["come", "came", "come", "来"] },
          { cells: ["run", "ran", "run", "跑"] },
          { cells: ["walk", "walked", "walked", "走 (规则！)"], highlight: true },
          { cells: ["arrive", "arrived", "arrived", "到达 (规则！)"], highlight: true },
          { cells: ["drive", "drove", "driven", "开车"] },
          { cells: ["fly", "flew", "flown", "飞"] },
          { cells: ["swim", "swam", "swum", "游泳"] },
          { cells: ["fall", "fell", "fallen", "落下"] },
          { cells: ["become", "became", "become", "变得"] },
        ],
      },
    },

    {
      id: "slide-5-life-and-death",
      slideNumber: 5,
      type: "TABLE",
      sectionTitle: "5. Life, Death, and Existence",
      badge: "VERB GROUP 2",
      title: "Be, Have, Do, Die, Live",
      titleZh: "生命、存在动词组",
      content: "The most irregular verb of all — 'be' — changes dramatically. 'Have' and 'do' also break patterns.",
      contentZh: "所有不规则动词中最不规则的是'be'。'Have'和'do'也打破常规。",
      table: {
        headers: ["Verb", "Past", "Past Participle", "Note"],
        headersZh: ["动词原形", "过去式", "过去分词", "备注"],
        rows: [
          { cells: ["be (am/is/are)", "was/were", "been", "MOST IRREGULAR - learn by heart!"], highlight: true },
          { cells: ["have", "had", "had", "Same for all persons in past"], },
          { cells: ["do", "did", "done", "Remember: this is why 'did' is special"], },
          { cells: ["die", "died", "died", "Regular"], highlight: true },
          { cells: ["live", "lived", "lived", "Regular"], highlight: true },
          { cells: ["give", "gave", "given", "g-a-v-e, g-o-t-a-t-o-n = give-got-given mnemonic"], },
          { cells: ["get", "got", "got/gotten", "US: gotten; UK: got for both 2&3"], },
        ],
      },
    },

    {
      id: "slide-6-sensation-verbs",
      slideNumber: 6,
      type: "TABLE",
      sectionTitle: "6. Senses and Communication",
      badge: "VERB GROUP 3",
      title: "See, Hear, Say, Tell",
      titleZh: "感官与交流动词组",
      content: "These verbs are essential for storytelling. Learn the patterns: see-saw-seen, say-said-said, tell-told-told.",
      contentZh:
        "这些动词对讲故事至关重要。学习模式：see-saw-seen, say-said-said, tell-told-told。",
      table: {
        headers: ["Verb", "Past", "Past Participle", "Memory Tip"],
        headersZh: ["动词原形", "过去式", "过去分词", "记忆技巧"],
        rows: [
          { cells: ["see", "saw", "seen", "NOT 'seed' — saw/seen are totally different"], },
          { cells: ["hear", "heard", "heard", "Sound-alike: hear/heard/heard (sounds the same)"], },
          { cells: ["say", "said", "said", "All the same sound: say/said/said"], },
          { cells: ["tell", "told", "told", "All the same: tell/told/told"], highlight: true },
          { cells: ["speak", "spoke", "spoken", "Like break/broke/broken pattern"], },
          { cells: ["ask", "asked", "asked", "Regular"], highlight: true },
          { cells: ["answer", "answered", "answered", "Regular"], highlight: true },
        ],
      },
    },

    {
      id: "slide-7-mind-and-thoughts",
      slideNumber: 7,
      type: "TABLE",
      sectionTitle: "7. Mind and Thoughts",
      badge: "VERB GROUP 4",
      title: "Think, Know, Believe, Understand",
      titleZh: "思维认知动词组",
      content:
        "Mental verbs show what we do with our minds. Some follow patterns you've seen (think-thought-thought), others surprise you.",
      contentZh:
        "心理动词表示我们如何使用我们的思维。有些遵循你已看到的模式（think-thought-thought），其他令人惊讶。",
      table: {
        headers: ["Verb", "Past", "Past Participle", "Pattern Note"],
        headersZh: ["动词原形", "过去式", "过去分词", "模式备注"],
        rows: [
          { cells: ["think", "thought", "thought", "thought-th-t pattern"], },
          { cells: ["know", "knew", "known", "NOT 'knowed' — completely different"], },
          { cells: ["believe", "believed", "believed", "Regular"], highlight: true },
          { cells: ["understand", "understood", "understood", "think-th-t pattern"], },
          { cells: ["want", "wanted", "wanted", "Regular"], highlight: true },
          { cells: ["need", "needed", "needed", "Regular"], highlight: true },
        ],
      },
    },

    {
      id: "slide-8-change-verbs",
      slideNumber: 8,
      type: "TABLE",
      sectionTitle: "8. Creation and Destruction",
      badge: "VERB GROUP 5",
      title: "Build, Break, Make, Take",
      titleZh: "创造与破坏动词组",
      content:
        "These verbs show transformation — building something up or breaking it down. Note the spelling patterns.",
      contentZh:
        "这些动词表示转变——建造新事物或破坏已有事物。注意拼写模式。",
      table: {
        headers: ["Verb", "Past", "Past Participle", "Memory Tip"],
        headersZh: ["动词原形", "过去式", "过去分词", "记忆技巧"],
        rows: [
          { cells: ["build", "built", "built", "All same: build-built-built"], },
          { cells: ["break", "broke", "broken", "like speak-spoke-spoken"], },
          { cells: ["make", "made", "made", "NOT 'maked' — made is irregular"], },
          { cells: ["take", "took", "taken", "NOT 'taked' — took/taken pattern"], },
          { cells: ["choose", "chose", "chosen", "ose pattern: chose/chosen"], },
          { cells: ["become", "became", "become", "NOT 'becameed'"], },
        ],
      },
    },

    {
      id: "slide-9-real-life-scenario",
      slideNumber: 9,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "9. At the Job Interview",
      badge: "SCENARIO",
      title: "Describing Your Career Journey",
      titleZh: "职场面试：描述你的职业历程",
      scenario: {
        context: "An applicant is describing their career path to an interviewer.",
        contextZh: "求职者正在向面试官描述他们的职业生涯路径。",
        dialogue: [
          { speaker: "Interviewer", en: "Tell me about your career journey.", zh: "请讲述你的职业之旅。", isTargetGrammar: false },
          { speaker: "Applicant", en: "I graduated from university in 2018.", zh: "2018年我大学毕业。", isTargetGrammar: true },
          { speaker: "Applicant", en: "I started as a junior developer at a startup.", zh: "我在创业公司担任初级开发工程师。", isTargetGrammar: true },
          { speaker: "Applicant", en: "I worked there for two years.", zh: "我在那里工作了两年。", isTargetGrammar: true },
          { speaker: "Applicant", en: "I then moved to a larger company and became a senior engineer.", zh: "随后我跳槽到更大的公司并晋升为高级工程师。", isTargetGrammar: true },
          { speaker: "Applicant", en: "I have led three major projects since then.", zh: "从那以后，我主导了三个重大项目。", isTargetGrammar: true },
        ],
        task: "Listen for irregular verbs: graduated, started, worked, moved, became, led.",
        taskZh: "听出不规则动词：graduated, started, worked, moved, became, led。",
      },
    },

    {
      id: "slide-10-vocabulary",
      slideNumber: 10,
      type: "VOCABULARY",
      sectionTitle: "10. Career Vocabulary",
      badge: "VOCABULARY",
      title: "Irregular Verbs for Professional Life",
      titleZh: "职场生活不规则动词",
      vocabulary: [
        { word: "graduate", wordZh: "毕业", definition: "To complete a course of study.", exampleSentence: "She graduated in 2020." },
        { word: "promote", wordZh: "升职", definition: "To raise to a higher position.", exampleSentence: "He was promoted to manager." },
        { word: "quit", wordZh: "辞职", definition: "To leave a job or stop doing something.", exampleSentence: "She quit her job last month." },
        { word: "hire", wordZh: "雇用", definition: "To employ someone.", exampleSentence: "They hired me for the marketing team." },
      ],
    },

    {
      id: "slide-11-common-mistake-1",
      slideNumber: 11,
      type: "COMMON_MISTAKE",
      sectionTitle: "11. The 'X-ed' Overregularization",
      badge: "OVERGENERALIZATION",
      title: "The -ed Trap: Goed, Eated, Teached",
      titleZh: "-ed陷阱：goed, eated, teached",
      content:
        "An extremely common error: applying regular -ed to irregular verbs. This creates words that don't exist!",
      contentZh:
        "极为普遍的错误：把规则的-ed模式用于不规则动词。这会产生根本不存在的词！",
      mistakes: [
        {
          wrong: "I goed to school yesterday.",
          right: "I went to school yesterday.",
          why: "'Go' is irregular: go → went → gone. NEVER 'goed'.",
          explanation: "Irregular verbs have unique past forms. Memorize: go → went.",
          explanationZh: "不规则动词有独特的过去式。背诵：go → went。",
        },
        {
          wrong: "She eated lunch.",
          right: "She ate lunch.",
          why: "'Eat' is irregular: eat → ate → eaten. NEVER 'eated'.",
          explanation: "Irregular: eat → ate → eaten. The past tense is 'ate', not 'eated'.",
          explanationZh: "不规则：eat → ate → eaten。过去式是'ate'，不是'eated'。",
        },
        {
          wrong: "They teached the lesson.",
          right: "They taught the lesson.",
          why: "'Teach' is irregular: teach → taught → taught. NEVER 'teached' (as past; 'teached' can be past participle but 'taught' is standard).",
          explanation: "Irregular: teach → taught → taught.",
          explanationZh: "不规则：teach → taught → taught。",
        },
      ],
      audioText: "I went to school. She ate lunch. They taught the lesson. Never add -ed to irregulars!",
    },

    {
      id: "slide-12-common-mistake-2",
      slideNumber: 12,
      type: "COMMON_MISTAKE",
      sectionTitle: "12. The 'Seen' Without 'Have' Error",
      badge: "PARTICIPLE ERROR",
      title: "Past Participle Must Be Paired with Have/Had!",
      titleZh: "过去分词必须与have/had搭配使用！",
      content:
        "Many learners mistakenly use past participle forms without 'have' or 'had'. 'I seen it' is WRONG — it should be 'I saw it' (simple past) or 'I have seen it' (with have).",
      contentZh:
        "许多学习者错误地在没有have或had的情况下使用过去分词形式。'I seen it'是错误的——应该是'I saw it'（一般过去式）或'I have seen it'（带have）。",
      mistakes: [
        {
          wrong: "I seen that movie already.",
          right: "I have seen that movie already. (OR: I saw that movie already.)",
          why: "'Seen' is the past participle (form 3) — it needs 'have' or 'had' before it.",
          explanation: "Past participle: I have seen. Simple past: I saw.",
          explanationZh: "过去分词需要have/had：I have seen。一般过去式：I saw。",
        },
        {
          wrong: "She have went to the store.",
          right: "She went to the store. (OR: She has gone to the store.)",
          why: "'Went' is simple past (form 2) — it doesn't need 'have' in simple past, or needs 'has' for present perfect.",
          explanation: "Simple past: She went. Present perfect: She has gone.",
          explanationZh: "一般过去式：She went。现在完成时：She has gone。",
        },
      ],
      audioText: "I saw it (simple past). I have seen it (with have). Never: I seen it.",
    },

    {
      id: "slide-13-common-mistake-3",
      slideNumber: 13,
      type: "COMMON_MISTAKE",
      sectionTitle: "13. The Be-Verb Muddle",
      badge: "BE-VERB ERROR",
      title: "Was/Were and Been: The Most Tricky Forms",
      titleZh: "Was/Were 与 Been：最棘手的形式",
      content:
        "The verb 'be' has the most forms. 'Was' for singular past, 'were' for plural past, 'been' for past participle after have/had.",
      contentZh:
        "动词'be'有最多的形式。'was'用于单数过去，'were'用于复数过去，'been'用于have/had后的过去分词。",
      mistakes: [
        {
          wrong: "I was at home yesterday.",
          right: "I was at home yesterday.",
          why: "Actually correct! 'I was' is the proper singular past form.",
          explanation: "Only: He/She/It was; I/You/We/They were in past tense.",
          explanationZh: "正确：He/She/It was；I/You/We/They were。",
        },
        {
          wrong: "She have been late before.",
          right: "She has been late before.",
          why: "'Been' needs 'has' (3rd person singular) or 'have' (plural).",
          explanation: "Past participle with be: She has been. I have been. They have been.",
          explanationZh: "be动词过去分词：She has been。I have been。They have been。",
        },
      ],
      audioText: "I was there. She has been home. They were ready. He had been studying.",
    },

    {
      id: "slide-14-the-big-50",
      slideNumber: 14,
      type: "TABLE",
      sectionTitle: "14. The Complete Top 50",
      badge: "REFERENCE",
      title: "All 50 Irregular Verbs — Complete Reference",
      titleZh: "完整50个不规则动词参考表",
      content:
        "Here is the complete list of the 50 most important irregular verbs. Study this table carefully — these are the ones you will use most!",
      contentZh:
        "以下是50个最重要不规则动词的完整列表。仔细学习这张表——这些是你最常用的动词！",
      table: {
        headers: ["Verb", "Past", "Past Part.", "Verb", "Past", "Past Part."],
        headersZh: ["动词", "过去式", "过去分词", "动词", "过去式", "过去分词"],
        rows: [
          { cells: ["be", "was/were", "been", "win", "won", "won"] },
          { cells: ["begin", "began", "begun", "wear", "wore", "worn"] },
          { cells: ["bend", "bent", "bent", "understand", "understood", "understood"] },
          { cells: ["bite", "bit", "bitten", "wake", "woke", "woven/waked"] },
          { cells: ["blow", "blew", "blown", "walk", "walked", "walked*"] },
          { cells: ["break", "broke", "broken", "want", "wanted", "wanted*"] },
          { cells: ["bring", "brought", "brought", "watch", "watched", "watched*"] },
          { cells: ["build", "built", "built", "learn", "learned/learnt", "learned/learnt"] },
          { cells: ["buy", "bought", "bought", "teach", "taught", "taught"] },
          { cells: ["catch", "caught", "caught", "think", "thought", "thought"] },
        ],
      },
    },

    {
      id: "slide-15-the-rest-11-20",
      slideNumber: 15,
      type: "TABLE",
      sectionTitle: "15. Verbs 11-20",
      badge: "REFERENCE",
      title: "Come, Do, Choose, Cut, Draw",
      titleZh: "11-20号：Come、Do、Choose、Cut、Draw",
      table: {
        headers: ["Verb", "Past", "Past Part.", "Verb", "Past", "Past Part."],
        headersZh: ["动词", "过去式", "过去分词", "动词", "过去式", "过去分词"],
        rows: [
          { cells: ["choose", "chose", "chosen", "write", "wrote", "written"] },
          { cells: ["come", "came", "come", "write*", "wrote*", "written*"] },
          { cells: ["cost", "cost", "cost", "win", "won", "won"] },
          { cells: ["cut", "cut", "cut", "win*", "won*", "won*"] },
          { cells: ["deal", "dealt", "dealt", "wear", "wore", "worn"] },
          { cells: ["draw", "drew", "drawn", "wear*", "wore*", "worn*"] },
          { cells: ["dream", "dreamed/dreamt", "dreamed/dreamt", "win*", "won*", "won*"] },
          { cells: ["drink", "drank", "drunk", "win*", "won*", "won*"] },
          { cells: ["drive", "drove", "driven", "win*", "won*", "won*"] },
          { cells: ["eat", "ate", "eaten", "win*", "won*", "won*"] },
        ],
      },
      audioText: "Come-came-come. Write-wrote-written. Draw-drew-drawn. Dream-dreamt-dreamt.",
    },

    {
      id: "slide-16-the-rest-21-30",
      slideNumber: 16,
      type: "TABLE",
      sectionTitle: "16. Verbs 21-30",
      badge: "REFERENCE",
      title: "Fall, Feed, Feel, Fight, Find",
      titleZh: "21-30号：Fall、Feed、Feel、Fight、Find",
      table: {
        headers: ["Verb", "Past", "Past Part.", "Verb", "Past", "Past Part."],
        headersZh: ["动词", "过去式", "过去分词", "动词", "过去式", "过去分词"],
        rows: [
          { cells: ["fall", "fell", "fallen", "hide", "hid", "hidden"] },
          { cells: ["feed", "fed", "fed", "hit", "hit", "hit"] },
          { cells: ["feel", "felt", "felt", "hold", "held", "held"] },
          { cells: ["fight", "fought", "fought", "keep", "kept", "kept"] },
          { cells: ["find", "found", "found", "keep*", "kept*", "kept*"] },
          { cells: ["finish", "finished", "finished*", "lend", "lent", "lent"] },
          { cells: ["get", "got", "got/gotten", "let", "let", "let"] },
          { cells: ["give", "gave", "given", "lend*", "lent*", "lent*"] },
          { cells: ["go", "went", "gone", "lose", "lost", "lost"] },
          { cells: ["have", "had", "had", "make", "made", "made"] },
        ],
      },
      audioText: "Fall-fell-fallen. Feed-fed-fed. Hit-hit-hit. Keep-kept-kept.",
    },

    {
      id: "slide-17-the-rest-31-40",
      slideNumber: 17,
      type: "TABLE",
      sectionTitle: "17. Verbs 31-40",
      badge: "REFERENCE",
      title: "Meet, Pay, Read, Run, Say",
      titleZh: "31-40号：Meet、Pay、Read、Run、Say",
      table: {
        headers: ["Verb", "Past", "Past Part.", "Verb", "Past", "Past Part."],
        headersZh: ["动词", "过去式", "过去分词", "动词", "过去式", "过去分词"],
        rows: [
          { cells: ["meet", "met", "met", "sit", "sat", "sat"] },
          { cells: ["meet*", "met*", "met*", "sleep", "slept", "slept"] },
          { cells: ["pay", "paid", "paid", "spend", "spent", "spent"] },
          { cells: ["read", "read", "read*", "speak", "spoke", "spoken"] },
          { cells: ["ride", "rode", "ridden", "spell", "spelt/spelled", "spelt/spelled"] },
          { cells: ["say", "said", "said", "spend*", "spent*", "spent*"] },
          { cells: ["sell", "sold", "sold", "stand", "stood", "stood"] },
          { cells: ["send", "sent", "sent", "swim", "swam", "swum"] },
          { cells: ["sent*", "sent*", "sent*", "swim*", "swam*", "swum*"] },
          { cells: ["show", "showed", "shown/showed", "swim*", "swam*", "swum*"] },
        ],
      },
      audioText: "Meet-met-met. Pay-paid-paid. Read-read-read. Run-ran-run.",
    },

    {
      id: "slide-18-the-rest-41-50",
      slideNumber: 18,
      type: "TABLE",
      sectionTitle: "18. Verbs 41-50",
      badge: "REFERENCE",
      title: "Take, Teach, Tell, Think, Understand",
      titleZh: "41-50号：Take、Teach、Tell、Think、Understand",
      table: {
        headers: ["Verb", "Past", "Past Part.", "Verb", "Past", "Past Part."],
        headersZh: ["动词", "过去式", "过去分词", "动词", "过去式", "过去分词"],
        rows: [
          { cells: ["take", "took", "taken", "weave", "wove", "woven"] },
          { cells: ["teach", "taught", "taught", "wear", "wore", "worn"] },
          { cells: ["tell", "told", "told", "win", "won", "won"] },
          { cells: ["think", "thought", "thought", "write", "wrote", "written"] },
          { cells: ["understand", "understood", "understood", "write*", "wrote*", "written*"] },
        ],
      },
    },

    {
      id: "slide-19-real-life-scenario",
      slideNumber: 19,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "19. Reunion Story",
      badge: "SCENARIO",
      title: "Running Into an Old Friend",
      titleZh: "久别重逢：再次见到老朋友",
      scenario: {
        context: "Two friends who haven't seen each other in years meet at a coffee shop.",
        contextZh: "两位多年未见的朋友在咖啡馆重逢。",
        dialogue: [
          { speaker: "Friend 1", en: "Look! I see someone I know!", zh: "看看！我认识的人来了！", isTargetGrammar: true },
          { speaker: "Friend 2", en: "Is that Maria? She looks amazing!", zh: "那是玛丽亚吗？她看起来真棒！", isTargetGrammar: true },
          { speaker: "Maria", en: "Hello! I have changed a lot since we last met.", zh: "你好！自从我们上次见面以来，我改变了很多。", isTargetGrammar: true },
          { speaker: "Friend 1", en: "Where have you been? I heard you moved to New York.", zh: "你去哪了？我听说你搬到了纽约。", isTargetGrammar: true },
          { speaker: "Maria", en: "Yes, I have worked there for three years.", zh: "是的，我在那里工作了三年。", isTargetGrammar: true },
          { speaker: "Friend 2", en: "I have wanted to visit you! Maybe I will come next month.", zh: "我一直想去看你！也许下个月我会来。", isTargetGrammar: true },
        ],
        task: "Listen for irregular verbs: see, know, looks, have, changed, been, heard, moved, worked, wanted.",
        taskZh: "听出不规则动词：see, know, looks, have, changed, been, heard, moved, worked, wanted。",
      },
    },

    {
      id: "slide-20-speaking-drill",
      slideNumber: 20,
      type: "SPEAKING_DRILL",
      sectionTitle: "20. Speaking Drill",
      badge: "SPEAKING PRACTICE",
      title: "Life Story: From Birth to Today",
      titleZh: "生命故事：从出生到今天",
      content: "Tell your life story using irregular verbs. Go from birth to present day.",
      contentZh: "用不规则动词讲述你的生命故事，从出生到今天。",
      speakingDrill: {
        prompt: "Tell your life story in 90 seconds. Use at least 10 irregular verbs: was born, grew, went, learned, worked, became, had, traveled, moved, changed.",
        targetSentence: "I was born in 1995. I grew up in Beijing. I went to university. I learned English. I worked as a teacher. I became interested in grammar. I have traveled abroad.",
        targetSentenceZh: "1995年我出生。我在北京长大。我上大学。我学英语。我当老师。我对语法产生了浓厚兴趣。我出国旅行。",
        tips: "Key verbs: be, go, come, see, have, do, make, take, get, give, grow, learn. Practice the sounds!",
      },
    },

    {
      id: "slide-21-quiz-1",
      slideNumber: 21,
      type: "MINI_QUIZ",
      sectionTitle: "21. Very Easy Questions (1-10)",
      badge: "LEVEL 1",
      title: "Basic Past Forms",
      titleZh: "基本过去式",
      question: {
        question: "What is the past tense of 'go'?",
        questionZh: "go的过去式是什么？",
        options: ["goed", "went", "gone", "go"],
        correctIndex: 1,
        explanation: "'Go' is irregular: go → went (past), gone (past participle).",
        explanationZh: "'Go'不规则：go → went（过去式），gone（过去分词）。",
        xpReward: 10,
      },
    },
    // Additional questions will complete the 35-question requirement
    { id: "slide-22-quiz-2", slideNumber: 22, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "See/Saw/Seen", content: "The most confused verb family.", question: { question: "Choose the correct sentence:", options: ["I seen it yesterday.", "I saw it yesterday.", "I have saw it.", "I have seen yesterday."], correctIndex: 1, explanation: "Simple past: I saw it. (Not: I seen it, seen is past participle with have.)", xpReward: 10 } },
    { id: "slide-23-quiz-3", slideNumber: 23, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Eat/Ate/Eaten", content: "Don't say 'eated!'", question: { question: "What is the correct past tense of 'eat'?", options: ["eated", "ate", "eaten", "eated"], correctIndex: 1, explanation: "'Eat' is irregular: eat → ate → eaten. NOT 'eated'.", xpReward: 10 } },
    { id: "slide-24-quiz-4", slideNumber: 24, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Break/Broke/Broken", content: "The classic irregular pattern.", question: { question: "Choose the correct past perfect sentence:", options: ["She have broken it.", "She had broken it.", "She has broke it.", "She has broken it."], correctIndex: 1, explanation: "Past perfect: She had broken it. (has/had + past participle)", xpReward: 10 } },
    { id: "slide-25-quiz-5", slideNumber: 25, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Be/Was/Were/Been", content: "The most irregular verb.", question: { question: "Choose the correct sentence:", options: ["She was a doctor.", "She were a doctor.", "She been a doctor.", "She am a doctor."], correctIndex: 0, explanation: "She (singular third-person) → was: She was a doctor.", xpReward: 10 } },
    { id: "slide-26-quiz-6", slideNumber: 26, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Get/Got", content: "The versatile verb.", question: { question: "What is the past tense of 'get'?", options: ["get", "got", "gotten", "got"], correctIndex: 1, explanation: "'Get' past tense is 'got': I got a gift yesterday.", xpReward: 10 } },
    { id: "slide-27-quiz-7", slideNumber: 27, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Make/Made", content: "The easy irregular.", question: { question: "She _____ dinner for her family.", options: ["maked", "made", "makes", "making"], correctIndex: 1, explanation: "'Make' is irregular: make → made → made. NOT 'maked'.", xpReward: 10 } },
    { id: "slide-28-quiz-8", slideNumber: 28, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Take/Took/Taken", content: "Essential for daily use.", question: { question: "Choose the correct sentence:", options: ["I take a shower every morning.", "I took a shower yesterday.", "I have taked a shower.", "I have took a shower."], correctIndex: 1, explanation: "Simple past: I took a shower yesterday.", xpReward: 10 } },
    { id: "slide-29-quiz-9", slideNumber: 29, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Have/Had/Had", content: "Remember: the past participle is the same as past tense!", question: { question: "Choose the correct present perfect sentence:", options: ["She have had a great time.", "She has had a great time.", "She has have a great time.", "She had had a great time."], correctIndex: 1, explanation: "Present perfect: She has had a great time. (has + had)", xpReward: 10 } },
    { id: "slide-30-quiz-10", slideNumber: 30, type: "REVIEW", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Irregular Verbs Review", content: "Quick review of the most common irregular verbs.", question: { question: "Which of these is NOT an irregular verb?", options: ["go/went/gone", "eat/ate/eaten", "walk/walked/walked", "break/broke/broken"], correctIndex: 2, explanation: "'Walk/walked/walked' is regular — it follows the -ed pattern. The others are irregular.", xpReward: 10 } },
  ],
};







