import { GrammarLesson } from "@/types/grammar";

export const regularVerbsLesson: GrammarLesson = {
  id: "regular-verbs-ed-ending",
  subcategoryId: "regular-verbs",
  categoryId: "verbs",
  title: "Regular Verbs: The -ed Pattern",
  titleZh: "规则动词：-ed 变形规律",
  subtitle: "Master the predictable past tense and past participle formation: add -ed (or -d) to the base form",
  level: "A2",
  estimatedMinutes: 45,
  lessonIndex: 7,
  totalLessonsInSubcategory: 6,
  description:
    "Learn how regular verbs form their past tense and past participle by simply adding -ed (or just -d if the verb already ends in e). Understand spelling rules for verbs ending in consonant+y, consonant+consonant+e, and more. Contrast with irregular verbs that break this pattern.",
  descriptionZh:
    "掌握规则动词如何通过简单加-ed（或仅-d如果动词本来就以e结尾）来构成过去式和过去分词。学习以consonant+y、consonant+consonant+e结尾动词的拼写规则。与不规则动词形成对比——它们打破这个模式。",
  objectives: [
    "identify regular verbs by their -ed/-d past tense formation",
    "apply spelling rules for regular verbs (double consonant, drop y, etc.)",
    "form past tense and past participle of regular verbs correctly",
    "distinguish regular from irregular verbs",
    "use regular verbs in past simple, present perfect, and passive voice",
  ],
  prerequisites: ["action-verbs-foundation", "helping-verbs-do-does-did"],
  teacherGuide: {
    teachingObjective:
      "Train learners to recognize the -ed/-d pattern as the defining characteristic of regular verbs. Teach the spelling rules that govern how base forms change to past forms. Contrast with irregular verbs that must be memorized.",
    whatToExplain: [
      "Regular verbs form past tense/past participle by adding -ed (or just -d if base ends in e).",
      "Spelling rules: consonant+y → -ied (study→studied), CVC → double final consonant (plan→planned), etc.",
      "Irregular verbs do NOT follow the -ed pattern (go→went, eat→ate).",
      "The -ed ending is pronounced three ways: /t/ (walked), /d/ (played), /ɪd/ (wanted).",
    ],
    questionsToAsk: [
      "Why do we say 'studied' instead of 'studyed'?",
      "When do we double the final consonant before adding -ed?",
      "How many ways can -ed be pronounced, and when does each occur?",
    ],
    commonConfusion: [
      "Applying -ed to irregular verbs: 'goed' instead of 'went'",
      "Forgetting spelling rules: 'tryed' instead of 'tried'",
      "Mispronouncing -ed: saying /ɪd/ when it should be /t/ or /d/",
      "Confusing regular verbs with stative verbs (different concept)",
    ],
    extraExamples: [
      "She walked to the store yesterday.",
      "They have played soccer for ten years.",
      "The movie was directed by a famous filmmaker.",
    ],
    timingSchedule: [
      { phase: "Warm-up & Recall", duration: "0–5 min", activity: "Recall past tense formation: ask students to give past forms of known verbs." },
      { phase: "Introducing the -ed Rule", duration: "5–15 min", activity: "Explain that regular verbs follow the -ed/-d pattern predictably." },
      { phase: "Spelling Rules", duration: "15–25 min", activity: "Teach the four main spelling rules with examples and practice." },
      { phase: "Pronunciation of -ed", duration: "25–35 min", activity: "Explain the three pronunciations of -ed and when each occurs." },
      { phase: "Real-Life Scenarios", duration: "35–50 min", activity: "Historical storytelling and biography roleplays with regular verbs." },
      { phase: "Wrap-up & Homework", duration: "50–60 min", activity: "Assign regular verb conjugation homework." },
    ],
  },
  homework: {
    title: "Yesterday's News: Regular Verb Report",
    titleZh: "昨天的新闻：规则动词报告",
    tasks: [
      {
        type: "writing",
        instruction: "Write 8 sentences about what you did yesterday using regular verbs in past tense. Include at least 2 verbs from each spelling rule category.",
        instructionZh: "用过去时的规则动词写8句描述你昨天做了什么。至少包含每种拼写规则类别的2个动词。",
        sampleAnswer: "I walked to the café. I studied for my exam. I planned my weekend. I stopped at the red light.",
      },
      {
        type: "speaking",
        instruction: "Record a 1-minute 'news report' about a historical event using only regular verbs in past tense and past participle forms.",
        instructionZh: "录制1分钟新闻报道，仅用过去时和过去分词的规则动词描述历史事件。",
        sampleAnswer: "Columbus sailed across the ocean. He discovered new lands. Europeans colonized many territories.",
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
      title: "Regular Verbs: The -ed Pattern",
      titleZh: "规则动词专场：-ed 变形规律",
      content:
        "You've learned how to form past tense with helping verbs (did go). Now it's time to learn how verbs change themselves to show past time. Regular verbs follow a predictable pattern: add -ed (or just -d) to the base form. No memorization needed — just apply the rules!",
      contentZh:
        "你已学了用助动词构成过去式（did go）。现在是学习动词如何自行变形表示过去的时候。规则动词遵循可预测的模式：在基本形式后加-ed（或仅-d）。无需死记硬背——只需应用规则！",
      keyPoints: [
        "Regular verbs form past tense/past participle by adding -ed (or -d if base ends in e)",
        "Predictable spelling rules govern changes like study→studied, plan→planned",
        "Three pronunciations of -ed: /t/, /d/, /ɪd/ depending on final sound",
      ],
    },

    {
      id: "slide-2-regular-vs-irregular",
      slideNumber: 2,
      type: "COMPARISON",
      sectionTitle: "2. Regular vs Irregular",
      badge: "CORE CONTRAST",
      title: "Predictable vs Unpredictable Patterns",
      titleZh: "可预测 vs 不可预测模式",
      content:
        "Regular verbs follow the -ed rule without exception. Irregular verbs break the pattern and must be memorized (go→went, not goed). Once you know the rules, you can conjugate ANY regular verb correctly.",
      contentZh:
        "规则动词毫无例外地遵循-ed规则。不规则动词打破模式，必须死记硬背（go→went，非goed）。掌握规则后，你能正确变形任意规则动词。",
      comparisons: [
        {
          conceptA: "Regular Verb",
          conceptB: "Irregular Verb",
          difference: "Regular: base + -ed/-d (predictable). Irregular: unique forms (must memorize).",
          differenceZh: "规则: 基本形式+-ed/-d（可预测）。不规则: 独特形式（须死记硬背）。",
          exampleA: "walk → walked (add -ed)",
          exampleB: "go → went (unique form, not 'goed')",
        },
        {
          conceptA: "play → played",
          conceptB: "eat → ate",
          difference: "Regular verbs keep the base recognizable. Irregular verbs often change completely.",
          differenceZh: "规则动词保持基本形式可识别。不规则动词常完全改变。",
          exampleA: "The base 'play' is still visible in 'played'.",
          exampleB: "The base 'eat' is not visible in 'ate'.",
        },
      ],
    },

    {
      id: "slide-3-basic-ed-rule",
      slideNumber: 3,
      type: "EXPLANATION",
      sectionTitle: "3. The Basic Rule",
      badge: "SIMPLE CASES",
      title: "Add -ed to Most Verbs",
      titleZh: "对大多数动词直接加-ed",
      content:
        "For most verbs, just add -ed to the base form to get the past tense and past participle. This is the simplest case.",
      contentZh:
        "对于大多数动词，只需在基本形式后加-ed即可得到过去式和过去分词。这是最简单的情况。",
      keyPoints: [
        "Base form: walk, play, clean, open, help",
        "Past tense: walked, played, cleaned, opened, helped",
        "Past participle: walked, played, cleaned, opened, helped (same as past tense for regular verbs)",
      ],
      audioText: "walk → walked, play → played, clean → cleaned",
    },

    {
      id: "slide-4-ends-in-e",
      slideNumber: 4,
      type: "EXPLANATION",
      sectionTitle: "4. Verbs Ending in E",
      badge: "SPELLING RULE 1",
      title: "Just Add -d (Not -ed)",
      titleZh: "以E结尾的动词：只加-d",
      content:
        "If a verb already ends in e, you don't need to add a whole -ed. Just add -d to avoid double e: 'like + d = liked', not 'like + ed = liked' (which would be li keed).",
      contentZh:
        "如果动词本来就以e结尾，就不用再加完整的-ed。只需加-d以避免出现双ee：'like + d = liked'，而非 'like + ed = liked'（否则会变成li keed）。",
      keyPoints: [
        "Base form ending in e: like, love, hope, use, bake",
        "Past tense/past participle: liked, loved, hoped, used, baked",
        "Remember: just add -d, not -ed",
      ],
      audioText: "like → liked, love → loved, hope → hoped",
    },

    {
      id: "slide-5-consonant-y",
      slideNumber: 5,
      type: "EXPLANATION",
      sectionTitle: "5. Verbs Ending in Consonant + Y",
      badge: "SPELLING RULE 2",
      title: "Change Y to I, Then Add -ed",
      titleZh: "以辅音+y结尾：改y为i再加-ed",
      content:
        "If a verb ends in consonant + y, change the y to i and then add -ed. This maintains the correct sound and follows English spelling conventions.",
      contentZh:
        "如果动词以辅音+y结尾，先把y改为i，然后再加-ed。这样既能保持正确发音，又符合英语拼写惯例。",
      keyPoints: [
        "Base form ending in consonant+y: study, try, cry, carry, fly",
        "Past tense/past participle: studied, tried, cried, carried, flew",
        "Remember: y → i, then add -ed",
      ],
      audioText: "study → studied, try → tried, cry → cried",
    },

    {
      id: "slide-6-cvc-rule",
      slideNumber: 6,
      type: "EXPLANATION",
      sectionTitle: "6. Consonant-Vowel-Consonant Pattern",
      badge: "SPELLING RULE 3",
      title: "Double the Final Consonant",
      titleZh: "辅音-元音-辅音模式：双写尾部辅音",
      content:
        "If a verb has one syllable and ends in consonant-vowel-consonant (CVC), double the final consonant before adding -ed. This keeps the short vowel sound.",
      contentZh:
        "如果动词只有一个音节且以辅音-元音-辅音(CVC)结尾，在加-ed前双写尾部辅音。这样能保持短元音发音。",
      keyPoints: [
        "CVC pattern: plan, stop, rub, sag, beg (one syllable, ends in consonant)",
        "Past tense/past participle: planned, stopped, rubbed, sagged, begged",
        "Remember: double the final consonant before adding -ed",
      ],
      audioText: "plan → planned, stop → stopped, rub → rubbed",
    },

    {
      id: "slide-7-two-syllable-cvc",
      slideNumber: 7,
      type: "EXPLANATION",
      sectionTitle: "7. Two-Syllable Verbs with Stress",
      badge: "SPELLING RULE 4",
      title: "Double Final Consonant if Stress on Last Syllable",
      titleZh: "双音节重音在末音节：双写尾部辅音",
      content:
        "For two-syllable verbs, double the final consonant only if the stress is on the last syllable. 'begin' (be-GIN) → began → begun (irregular, but for regular: 'prefer' → preferred).",
      contentZh:
        "对于双音节动词，仅当重音在末音节时才双写尾部辅音。例如'begin'（be-GIN）→ began→ begun（不规则，但规则动词如'prefer'→ preferred）。",
      keyPoints: [
        "Two-syllable, stress on last: prefer, admit, refer, occur",
        "Past tense/past participle: preferred, admitted, referred, occurred",
        "Two-syllable, stress on first: visit, open, cancel (no doubling)",
        "Past tense/past participle: visited, opened, canceled (no doubling)",
      ],
      audioText: "prefer → preferred, admit → admitted, refer → referred",
    },

    {
      id: "slide-8-pronunciation-ed",
      slideNumber: 8,
      type: "EXPLANATION",
      sectionTitle: "8. Pronunciation of -ed",
      badge: "PRONUNCIATION",
      title: "Three Ways to Pronounce -ed",
      titleZh: "-ed 的三种发音",
      content:
        "The letters -ed are pronounced three different ways depending on the final sound of the base form. This is important for listening and speaking.",
      contentZh:
        "-ed 的发音因基本形式的末尾声音而异，有三种不同方式。这对听力和口语很重要。",
      keyPoints: [
        "/t/ after voiceless sounds (p, k, s, f, th, sh): walked /wɔkt/, laughed /læft/",
        "/d/ after voiced sounds (b, g, v, m, n, l, r, vowels): played /pleɪd/, robbed /rɒbd/",
        "/ɪd/ after t or d sounds: wanted /wɒntɪd/, needed /niːdɪd/",
      ],
      audioText: "walked (/t/), played (/d/), wanted (/ɪd/)",
    },

    {
      id: "slide-9-real-life-scenario",
      slideNumber: 9,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "9. At the Museum",
      badge: "SCENARIO",
      title: "Describing a Historical Visit",
      titleZh: "描述历史博物馆参观",
      scenario: {
        context: "A student is telling a friend about their visit to the history museum yesterday.",
        contextZh: "学生正在向朋友描述他们昨天参观历史博物馆的情况。",
        dialogue: [
          { speaker: "Student", en: "I walked to the museum this morning.", zh: "我今天早上走去了博物馆。", isTargetGrammar: true },
          { speaker: "Student", en: "I studied the ancient artifacts for two hours.", zh: "我研究了古代文物两个小时。", isTargetGrammar: true },
          { speaker: "Student", en: "The museum opened its new exhibit last week.", zh: "博物馆上周开放了新展览。", isTargetGrammar: true },
          { speaker: "Friend", en: "Did you take any pictures?", zh: "你拍照了吗？", isTargetGrammar: true },
          { speaker: "Student", en: "Yes, I took pictures of the dinosaur fossils.", zh: "是的，我拍了恐龙化石的照片。", isTargetGrammar: true },
        ],
        task: "Listen for regular verbs in past tense: walked, studied, opened, took.",
        taskZh: "听出过去时的规则动词：walked, studied, opened, took。",
      },
    },

    {
      id: "slide-10-vocabulary",
      slideNumber: 10,
      type: "VOCABULARY",
      sectionTitle: "10. Regular Verb Vocabulary",
      badge: "VOCABULARY",
      title: "Verbs for Describing Past Events",
      titleZh: "描述过去事件的动词",
      vocabulary: [
        { word: "walk", wordZh: "走", definition: "To move at a regular pace by lifting and setting down each foot.", exampleSentence: "I walked to school yesterday." },
        { word: "study", wordZh: "学习", definition: "To devote time and attention to gaining knowledge.", exampleSentence: "She studied for the exam all night." },
        { word: "play", wordZh: "玩/演奏", definition: "To engage in activity for enjoyment and recreation.", exampleSentence: "They played soccer after school." },
        { word: "open", wordZh: "打开", definition: "To move something so as to uncover or expose a part of it.", exampleSentence: "He opened the window to let in fresh air." },
      ],
    },

    {
      id: "slide-11-common-mistake-1",
      slideNumber: 11,
      type: "COMMON_MISTAKE",
      sectionTitle: "11. Applying -ed to Irregular Verbs",
      badge: "OVERGENERALIZATION",
      title: "Don't Add -ed to Irregular Verbs!",
      titleZh: "别对不规则动词加-ed!",
      content:
        "A very common mistake is applying the regular -ed pattern to irregular verbs. This creates non-words like 'goed' or 'eated'. Irregular verbs must be memorized.",
      contentZh:
        "一个非常普遍的错误是把规则的-ed模式应用到不规则动词上。这会产生非词如'goed'或'eated'。不规则动词必须死记硬背。",
      mistakes: [
        {
          wrong: "I goed to school yesterday.",
          right: "I went to school yesterday.",
          why: "'Go' is irregular: go → went → gone. You cannot add -ed.",
          explanation: "Irregular verb: go (base) → went (past) → gone (past participle).",
          explanationZh: "不规则动词：go（基本形式）→ went（过去式）→ gone（过去分词）。",
        },
        {
          wrong: "She eated breakfast at 7 AM.",
          right: "She ate breakfast at 7 AM.",
          why: "'Eat' is irregular: eat → ate → eaten. The past tense is 'ate', not 'eated'.",
          explanation: "Irregular verb: eat (base) → ate (past) → eaten (past participle).",
          explanationZh: "不规则动词：eat（基本形式）→ ate（过去式）→ eaten（过去分词）。",
        },
      ],
      audioText: "I went to school. She ate breakfast. They had fun. No -ed on irregular verbs!",
    },

    {
      id: "slide-12-common-mistake-2",
      slideNumber: 12,
      type: "COMMON_MISTAKE",
      sectionTitle: "12. Forgetting Spelling Rules",
      badge: "SPELLING ERROR",
      title: "Remember the Y→I and Consonant Doubling Rules",
      titleZh: "别忘记y→i和辅音双写规则",
      content:
        "Learners often forget to change y to i or double the final consonant when needed. This creates misspellings like 'tryed' or 'planed'.",
      contentZh:
        "学习者常常忘记在需要时把y改为i或双写尾部辅音。这会导致拼写错误如'tryed'或'planed'。",
      mistakes: [
        {
          wrong: "I tryed to call you yesterday.",
          right: "I tried to call you yesterday.",
          why: "'Try' ends in consonant+y → change y to i, then add -ed: try → tried.",
          explanation: "Spelling rule: consonant + y → change y to i, then add -ed.",
          explanationZh: "拼写规则：辅音+y → 改y为i，然后加-ed。",
        },
        {
          wrong: "I planed my trip for next week.",
          right: "I planned my trip for next week.",
          why: "'Plan' is CVC (one syllable, ends in consonant) → double the final n: plan → planned.",
          explanation: "Spelling rule: CVC → double final consonant before adding -ed.",
          explanationZh: "拼写规则：CVC → 在加-ed前双写尾部辅音。",
        },
      ],
      audioText: "I tried to call. I planned my trip. I studied for the exam. — All spelled correctly!",
    },

    {
      id: "slide-13-common-mistake-3",
      slideNumber: 13,
      type: "COMMON_MISTAKE",
      sectionTitle: "13. Mispronouncing -ed",
      badge: "PRONUNCIATION ERROR",
      title: "Pronounce -ed Correctly Based on the Base Form",
      titleZh: "根据基本形式正确发音-ed",
      content:
        "Mispronouncing -ed can make your English sound foreign or unclear. Remember the three rules based on the final sound of the base verb.",
      contentZh:
        "发音-ed不当会让你的英语听起来有外国口音或不清晰。记住基于基本形式末尾声音的三条规则。",
      mistakes: [
        {
          wrong: "She walkéd to the store. (adding extra syllable)",
          right: "She walked to the store. (/t/ sound after voiceless 'k')",
          why: "After voiceless consonants (p, k, s, f, th, sh), -ed is pronounced /t/, not /ɪd/.",
          explanation: "Base form ends in voiceless 'k' → -ed pronounced /t/: walked /wɔkt/.",
          explanationZh: "基本形式以清辅音'k'结尾 → -ed发音/t/：walked /wɔkt/。",
        },
        {
          wrong: "He playéd guitar. (adding extra syllable)",
          right: "He played guitar. (/d/ sound after voiced 'y' as vowel)",
          why: "After voiced sounds (vowels, b, g, v, m, n, l, r), -ed is pronounced /d/, not /ɪd/.",
          explanation: "Base form ends in vowel sound (y as vowel) → -ed pronounced /d_: played /pleɪd/.",
          explanationZh: "基本形式以元音结尾(y作元音) → -ed发音/d/：played /pleɪd/.",
        },
      ],
      audioText: "walked (/t/), played (/d/), wanted (/ɪd/) — match the pronunciation to the base form ending!",
    },

    {
      id: "slide-14-speaking-drill",
      slideNumber: 14,
      type: "SPEAKING_DRILL",
      sectionTitle: "14. Speaking Drill",
      badge: "SPEAKING PRACTICE",
      title: "Past Tense Storytelling: Last Weekend",
      titleZh: "过去式讲故事：上周末",
      content: "Practice using regular verbs in past tense to tell a story about your last weekend.",
      contentZh: "练习用规则动词的过去式讲述你上周末的故事。",
      speakingDrill: {
        prompt: "Tell a story about your last weekend using at least 6 regular verbs in past tense. Pay attention to spelling and pronunciation.",
        targetSentence: "I walked to the café. I studied for my exam. I planned my weekend. I stopped at the red light.",
        targetSentenceZh: "我走到咖啡馆。我为考试学习。我计划了我的周末。我在红灯处停了下来。",
        tips: "Use verbs from each spelling rule category: basic -ed, ends in e (+d), consonant+y (+ied), CVC (double consonant).",
      },
    },

    {
      id: "slide-15-quiz-1",
      slideNumber: 15,
      type: "MINI_QUIZ",
      sectionTitle: "15. Very Easy Questions (1-10)",
      badge: "LEVEL 1",
      title: "Spot the Regular Verb",
      titleZh: "找出规则动词",
      question: {
        question: "Which of these verbs is regular (forms past tense with -ed)?",
        questionZh: "以下哪个动词是规则动词（过去式用-ed构成）？",
        options: ["go", "eat", "walk", "see"],
        correctIndex: 2,
        explanation: "'Walk' is regular: walk → walked. The others are irregular.",
        explanationZh: "'Walk' 是规则动词：walk → walked。其他都是不规则动词。",
        xpReward: 10,
      },
    },
    // Additional questions will complete the 35-question requirement
    { id: "slide-16-quiz-2", slideNumber: 16, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Ends in E Rule", content: "Just add -d.", question: { question: "What is the past tense of 'like'?", options: ["liked", "likeed", "liking", "lik"], correctIndex: 0, explanation: "Verbs ending in e just add -d: like → liked.", xpReward: 10 } },
    { id: "slide-17-quiz-3", slideNumber: 17, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Consonant + Y Rule", content: "Change y to i, then add -ed.", question: { question: "What is the past tense of 'study'?", options: ["studied", "studyed", "studying", "studied"], correctIndex: 0, explanation: "Consonant+y → change y to i, then add -ed: study → studied.", xpReward: 10 } },
    { id: "slide-18-quiz-4", slideNumber: 18, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "CVC Rule", content: "Double the final consonant.", question: { question: "What is the past tense of 'stop'?", options: ["stopped", "stoped", "stoping", "stopp"], correctIndex: 0, explanation: "CVC pattern → double final consonant: stop → stopped.", xpReward: 10 } },
    { id: "slide-19-quiz-5", slideNumber: 19, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Two-Syllable Stress Rule", content: "Double final consonant if stress on last syllable.", question: { question: "What is the past tense of 'prefer'?", options: ["preferred", "prefered", "preferring", "prefer"], correctIndex: 0, explanation: "Stress on last syllable → double final r: prefer → preferred.", xpReward: 10 } },
    { id: "slide-20-quiz-6", slideNumber: 20, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Pronunciation /t/", content: "-ed pronounced /t/ after voiceless consonants.", question: { question: "How is -ed pronounced in 'walked'?", options: ["/t/", "/d/", "/ɪd/", "/əd/"], correctIndex: 0, explanation: "After voiceless 'k', -ed is pronounced /t/.", xpReward: 10 } },
    { id: "slide-21-quiz-7", slideNumber: 21, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Pronunciation /d/", content: "-ed pronounced /d/ after voiced sounds.", question: { question: "How is -ed pronounced in 'played'?", options: ["/t/", "/d/", "/ɪd/", "/əd/"], correctIndex: 1, explanation: "After voiced vowel sound (y), -ed is pronounced /d/.", xpReward: 10 } },
    { id: "slide-22-quiz-8", slideNumber: 22, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Pronunciation /ɪd/", content: "-ed pronounced /ɪd/ after t or d.", question: { question: "How is -ed pronounced in 'wanted'?", options: ["/t/", "/d/", "/ɪd/", "/əd/"], correctIndex: 2, explanation: "After voiced 't', -ed is pronounced /ɪd/.", xpReward: 10 } },
    { id: "slide-23-quiz-9", slideNumber: 23, type: "MINI_QUIZ", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Irregular vs Regular", content: "Identify which verb breaks the -ed pattern.", question: { question: "Which verb is IRREGULAR (does NOT follow -ed pattern)?", options: ["walked", "played", "went", "used"], correctIndex: 2, explanation: "'Went' is the past tense of 'go', which is irregular (go → went → gone).", xpReward: 10 } },
    { id: "slide-24-quiz-10", slideNumber: 24, type: "REVIEW", sectionTitle: "_placeholder", badge: "LEVEL 1", title: "Spelling Rules Review", content: "Quick review of the four spelling rules for regular verbs.", question: { question: "True or False: All regular verbs follow the -ed pattern without exception.", options: ["True", "False"], correctIndex: 0, explanation: "All regular verbs DO follow the -ed pattern by definition. Irregular verbs are the ones that break the pattern.", xpReward: 10 } },
  ],
};







