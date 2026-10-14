import { GrammarLesson } from "@/types/grammar";

export const relativeLesson: GrammarLesson = {
  id: "relative-foundation",
  subcategoryId: "relative",
  categoryId: "pronouns",
  title: "Relative Pronouns: who, which, that",
  titleZh: "关系代词：who, which, that",
  subtitle: "Connect clauses to give more information about nouns",
  level: "B1",
  estimatedMinutes: 35,
  lessonIndex: 5,
  totalLessonsInSubcategory: 6,
  description: "Master relative pronouns to connect clauses and add information about nouns.",
  descriptionZh: "掌握关系代词连接从句并提供名词信息。",
  objectives: [
    "use who for people",
    "use which for animals and things",
    "use that for people or things (informal)",
    "recognize clauses with relative pronouns",
    "correctly punctuate non-restrictive clauses",
    "use commas with who/which for extra information",
  ],
  teacherGuide: {
    teachingObjective:
      "Students will learn that relative pronouns connect a relative clause to a noun (called an antecedent). The choice of pronoun depends on whether the noun is a person, animal, or thing.",
    whatToExplain: [
      "who = people (The man who called me)",
      "which = animals and things (The car which I bought)",
      "that = people or things (informal) (The man that called me)",
      "non-restrictive clauses use commas (my brother, who lives in Beijing)",
      "restrictive clauses don't use commas (the book that I want)",
      "common pattern: who/which/that + verb + object",
    ],
    questionsToAsk: [
      "Should this use 'who' or 'which'?",
      "Do we use 'that' in formal writing?",
      "Do we use commas here?",
      "Is this clause extra information or important?",
    ],
    commonConfusion: [
      "Using 'that' for non-restrictive clauses with commas → WRONG",
      "Using 'who' for things → WRONG",
      "Forgetting commas with non-restrictive clauses",
      "Using 'which' for people → unnatural",
    ],
    timingSchedule: [
      { phase: "Introduce who/which/that", duration: "0–7 min", activity: "List and examples" },
      { phase: "Restrictive vs non-restrictive", duration: "7–14 min", activity: "Comma usage examples" },
      { phase: "Build relative clauses", duration: "14–20 min", activity: "who/which/that + subject + verb" },
      { phase: "Build non-restrictive clauses", duration: "20–25 min", activity: "Commas, extra information" },
      { phase: "Speaking practice", duration: "25–30 min", activity: "Students create 3 relative clauses each" },
    ],
  },
  homework: {
    title: "Relative Pronouns Homework",
    titleZh: "关系代词作业",
    tasks: [
      {
        type: "writing",
        instruction: "Write 10 sentences with relative clauses: 4 with 'who' for people, 3 with 'which' for things, 3 with 'that' (mixed).",
        instructionZh: "写10个从句：4个用who表示人，3个用which表示物，3个用that（混合）。",
        sampleAnswer: "The teacher who speaks English is here. The book which I read is interesting. The movie that I watched was good. The man who helped me is my uncle. The house which is on the hill is old.",
      },
      {
        type: "speaking",
        instruction: "Record 45 seconds describing your favorite book or movie using a relative clause.",
        instructionZh: "录制45秒用从句描述你最喜欢的书或电影。",
        sampleAnswer: "My favorite movie is 'The Godfather,' which is about a mafia family. The director Francis Ford Coppola, who won three Oscars, made it.",
      },
    ],
  },
  slides: [
    {
      id: "slide-1-welcome",
      slideNumber: 1,
      type: "TITLE",
      sectionTitle: "1. Welcome",
      title: "Relative Pronouns: who, which, that",
      titleZh: "关系代词：who, which, that",
      content:
        "Relative pronouns connect a clause to a noun (the antecedent). They tell us more about the noun. Who = people, which = animals and things, that = people or things (informal).",
      contentZh:
        "关系代词将从句连接到一个名词（称为先行词）。它们告诉我们关于名词的更多信息。Who = people, which = animals and things, that = people or things (informal).",
      keyPoints: [
        "Who = people only",
        "Which = animals and things only",
        "That = people or things (informal)",
        "Non-restrictive: commas, extra info",
        "Restrictive: no commas, essential info",
      ],
    },
    {
      id: "slide-2-who",
      slideNumber: 2,
      type: "RULE",
      sectionTitle: "2. Who (People)",
      title: "Who = People",
      titleZh: "who = 人",
      content:
        "Use who when referring to people as the subject of the relative clause:\n\n  The woman who called me is my aunt.\n  The students who passed the exam are happy.\n  The person who lost the key is looking for it.\n\n  Who can also be the object:\n  The woman who(m) I saw yesterday.\n  The students who(m) the teacher praised.\n\n  INFORMAL: The woman who I saw yesterday (object who is common).",
      contentZh:
        "当关系从句的主语是指人时使用who：\n\n  The woman who called me is my aunt. (叫我的是那位女人是我阿姨)\n  The students who passed the exam are happy. (通过考试的学生很高兴)\n  The person who lost the key is looking for it. (丢钥匙的人正在找它)\n\n  who也可以作为宾语：\n  The woman who(m) I saw yesterday. (我昨天看见的女人)\n  The students who(m) the teacher praised. (老师夸过的学生)\n\n  非正式：The woman who I saw yesterday（常用object who）",
    },
    {
      id: "slide-3-which",
      slideNumber: 3,
      type: "RULE",
      sectionTitle: "3. Which (Animals & Things)",
      title: "Which = Animals & Things",
      titleZh: "which = 动物和事物",
      content:
        "Use which when referring to animals (not people) or things as the subject or object:\n\n  The car which I bought is red.\n  The book which you read is on the table.\n  The dog which chased the cat ran away.\n  The problem which we discussed yesterday.\n\n  Which can also be the object: The key which I lost.\n\n  NON-RESTRICTIVE (extra info, with commas):\n  My car, which is red, is fast. (implies I have only one car)",
      contentZh:
        "当关系从句的主语是指动物或事物（不包括人）时使用which：\n\n  The car which I bought is red. (我买的车是红的)\n  The book which you read is on the table. (你读的书在桌上)\n  The dog which chased the cat ran away. (追猫的狗跑掉了)\n  The problem which we discussed yesterday. (我们昨天讨论的问题)\n\n  which也可以作为宾语：The key which I lost.\n\n  非限制性从句（额外信息，用逗号）：\n  My car, which is red, is fast. (我有车，暗示我只有一辆车)",
    },
    {
      id: "slide-4-that",
      slideNumber: 4,
      type: "RULE",
      sectionTitle: "4. That (People or Things - Informal)",
      title: "That = Informal People or Things",
      titleZh: "that = 口语化的人物或事物",
      content:
        "Use that in informal situations when referring to people or things. In formal writing, prefer who/which:\n\n  The man that called me is my uncle. (informal)\n  The book that I read is interesting. (informal)\n  The dog that chased the cat ran away. (informal)\n\n  In formal writing:\n  The man who called me.\n  The book which I read.\n\n  That is NEVER used with commas for non-restrictive clauses.",
      contentZh:
        "在非正式情况下，当指人或物时使用that。在正式写作中，首选who/which：\n\n  The man that called me is my uncle. (非正式)\n  The book that I read is interesting. (非正式)\n  The dog that chased the cat ran away. (非正式)\n\n  正式写作中：\n  The man who called me.\n  The book which I read.\n\n  that在非限制性从句中绝对不能用逗号。",
    },
    {
      id: "slide-5-restrictive-vs-non",
      slideNumber: 5,
      type: "RULE",
      sectionTitle: "5. Restrictive vs Non-Restrictive",
      title: "Comma Usage Rules",
      titleZh: "限制性 vs 非限制性",
      content:
        "Restrictive (essential) clauses give necessary information. Do NOT use commas:\n\n  The student who studies hard will succeed. (which student? the one who studies hard - essential)\n  The book that I want is on the table. (which book? the one I want - essential)\n\n  Non-restrictive (extra) clauses give additional information. DO use commas:\n  My brother, who lives in Beijing, is visiting. (only one brother, extra info)\n  The car, which is red, is fast. (I have one car, extra info)\n\n  RULE OF THUMB: If you can remove the clause and the sentence still makes sense, use commas.",
      contentZh:
        "限制性（必要）从句提供必要信息。不使用逗号：\n\n  The student who studies hard will succeed. (哪个学生？学习努力的那个学生 - 必要)\n  The book that I want is on the table. (哪本书？我想要的那本 - 必要)\n\n  非限制性（额外）从句提供额外信息。使用逗号：\n  My brother, who lives in Beijing, is visiting. (只有一个兄弟，额外信息)\n  The car, which is red, is fast. (我有一辆车，额外信息)\n\n  经验法则：如果删除从句句子仍然有意义，则使用逗号。",
    },
    {
      id: "slide-6-real-life",
      slideNumber: 6,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "6. Real Life Scenario",
      title: "Job Interview",
      titleZh: "面试",
      scenario: {
        context: "A job interview where the interviewer asks about the candidate's experience.",
        contextZh: "一场面试，面试官询问候选人的经历。",
        dialogue: [
          {
            speaker: "Interviewer",
            en: "Tell me about a challenge you faced at work.",
            zh: "告诉我你在工作中面临的挑战。",
            isTargetGrammar: true,
          },
          {
            speaker: "Candidate",
            en: "The manager who assigned me the project was very demanding. The project which I completed on time earned a bonus.",
            zh: "分配给我的项目经理非常苛刻。我按时完成的项目获得了奖金。",
            isTargetGrammar: true,
          },
          {
            speaker: "Interviewer",
            en: "Tell me about a person who influenced you.",
            zh: "告诉我一个影响了你的人。",
            isTargetGrammar: true,
          },
          {
            speaker: "Candidate",
            en: "My mentor who guided me through difficult times is my role model.",
            zh: "我的导师在困难时期指导了我。他是我的榜样。",
            isTargetGrammar: true,
          },
        ],
        task: "Notice: 'The manager who assigned me', 'The project which I completed', 'The person who influenced you', 'My mentor who guided me' - all use who for people.",
        taskZh: "注意：'The manager who assigned me'，'The project which I completed'，'The person who influenced you'，'My mentor who guided me'——全部使用who指人。",
      },
    },
    {
      id: "slide-7-speaking",
      slideNumber: 7,
      type: "SPEAKING_DRILL",
      sectionTitle: "7. Speaking Practice",
      title: "Describe a Photo",
      titleZh: "描述照片",
      speakingDrill: {
        prompt: "Record 45 seconds describing a photo. Use 2 relative clauses with who/which/that.",
        targetSentence:
          "In this photo, there's a couple who are smiling. The man who is wearing a hat is my father. The woman who is next to him is my mother. The bench which they are sitting on is old.",
        targetSentenceZh: "在这张照片中，有一对正在微笑的夫妇。戴着帽子的男人是我父亲。旁边的女人是我母亲。他们坐的长椅很旧。",
        tips: "Start with 'In this photo...' Then use who/which/that to add details about people and objects in the picture.",
      },
    },
    {
      id: "slide-8-quiz",
      slideNumber: 8,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "8. Quick Quiz",
      title: "Choose Correct Relative Pronoun",
      titleZh: "选择正确的关系代词",
      question: {
        question: "The student ___ studied hard is my friend. (who/which/that)",
        questionZh: "The student ___ studied hard is my friend. (who/which/that)",
        options: ["a. who", "b. which", "c. that"],
        correctIndex: 0,
        explanation: "who is used for people (the student is a person).",
        explanationZh: "who 用于人。",
        xpReward: 10,
      },
    },
    {
      id: "slide-9-challenge",
      slideNumber: 9,
      type: "CHALLENGE",
      sectionTitle: "9. Week Challenge",
      title: "20-Sentence Challenge",
      titleZh: "20句话挑战",
      content: "Write 20 sentences with relative clauses:\n\n- 10 with who for people\n- 5 with which for things/animals\n- 5 with that (mixed)\n\nEach sentence must have a relative clause with commas OR without commas depending on essential vs extra info.\n\nScoring: 1 point per correct sentence. Need 80% to pass!",
      contentZh:
        "写20个带有关系从句的句子：\n\n- 10个用who表示人\n- 5个用which表示物/动物\n- 5个用that（混合）\n\n每句话必须根据必要 vs 额外信息有逗号或没有逗号。\n\n评分：每句1分。需要80%才能通过！",
    },
  ],
};