import { GrammarLesson } from "@/types/grammar";

export const demonstrativeLesson: GrammarLesson = {
  id: "demonstrative-foundation",
  subcategoryId: "demonstrative",
  categoryId: "pronouns",
  title: "Demonstrative Pronouns: this, that, these, those",
  titleZh: "指示代词：this, that, these, those",
  subtitle: "Point to specific things based on distance and number",
  level: "A1",
  estimatedMinutes: 25,
  lessonIndex: 1,
  totalLessonsInSubcategory: 6,
  description: "Master demonstrative pronouns to point to things based on proximity and number.",
  descriptionZh: "掌握指示代词根据接近程度和数量指事物。",
  objectives: [
    "use this/these for nearby things (singular/plural)",
    "use that/those for distant things (singular/plural)",
    "distinguish between demonstrative pronouns and adjectives",
    "use demonstrative pronouns in questions and answers",
    "avoid common mistakes with distance and number agreement",
  ],
  teacherGuide: {
    teachingObjective:
      "Students will learn that demonstrative pronouns (this/that/these/those) point to things based on distance (near/far) and number (singular/plural). They can stand alone or modify nouns.",
    whatToExplain: [
      "Near + singular: this (this book)\n  Near + plural: these (these books)\n  Far + singular: that (that book)\n  Far + plural: those (those books)\n\n  Demonstrative adjectives come BEFORE nouns:\n  This book is mine.\n\n  Demonstrative pronouns stand ALONE:\n  This is mine.\n  That is hers.\n\n  Questions: Is this yours? Are these hers?",
      "Note: 'this/these' = near speaker, 'that/those' = far from speaker",
      "Common pattern: 'Is this/that ___?' 'Yes, this/that is ___.'",
    ],
    questionsToAsk: [
      "Is this near or far from you?",
      "Are these plural or singular?",
      "Should I use 'this' or 'that' for that book over there?",
      "Is 'these' for one book or many books?",
    ],
    commonConfusion: [
      "Confusing near/far: using 'this' for distant objects",
      "Number agreement: using 'this' with plural nouns",
      "Using demonstratives as adjectives when pronouns needed",
      "Mixing up 'these' and 'those' in questions",
    ],
    timingSchedule: [
      { phase: "Introduce distance concept", duration: "0–5 min", activity: "Point to near/far objects in room" },
      { phase: "Singular vs plural", duration: "5–10 min", activity: "Sort objects into singular/plural groups" },
      { phase: "Demonstrative adjectives", duration: "10–15 min", activity: "This book, These books" },
      { phase: "Demonstrative pronouns", duration: "15–18 min", activity: "This is mine, These are yours" },
      { phase: "Questions and answers", duration: "18–22 min", activity: "Is this yours? Yes, this is mine." },
      { phase: "Speaking practice", duration: "22–25 min", activity: "Students point and ask/answer about objects" },
    ],
  },
  homework: {
    title: "Demonstrative Pronouns Homework",
    titleZh: "指示代词作业",
    tasks: [
      {
        type: "writing",
        instruction: "Write 12 sentences using demonstrative pronouns: 6 for near objects (this/these), 6 for far objects (that/those).",
        instructionZh: "写12个句子使用指示代词：6个近距离（this/these），6个远距离（that/those）。",
        sampleAnswer: "This is my pen. These are my books. That is your bag. Those are your shoes.",
      },
      {
        type: "speaking",
        instruction: "Record 30 seconds pointing to 6 items in your room and asking/answering 'Is this yours?' or 'Are these yours?' using correct demonstratives.",
        instructionZh: "录制30秒指向房间里的6个物品，询问/回答'Is this yours?'或'Are these yours?'，使用正确的指示代词。",
        sampleAnswer: "Is this book yours? No, this is mine. Are these pens yours? Yes, these are mine.",
      },
    ],
  },
  slides: [
    {
      id: "slide-1-welcome",
      slideNumber: 1,
      type: "TITLE",
      sectionTitle: "1. Welcome",
      title: "Demonstrative Pronouns: this, that, these, those",
      titleZh: "指示代词：this, that, these, those",
      content:
        "Demonstrative pronouns point to things based on distance from the speaker and number (singular/plural). This/these = near, that/those = far.",
      contentZh:
        "指示代词根据说话者的距离和数量（单数/复数）指向事物。this/these = 近，that/those = 远。",
      keyPoints: [
        "This/these = near speaker",
        "That/those = far from speaker",
        "This/that = singular",
        "These/those = plural",
      ],
    },
    {
      id: "slide-2-distance",
      slideNumber: 2,
      type: "RULE",
      sectionTitle: "2. Distance: Near vs Far",
      title: "This/These = Near, That/Those = Far",
      titleZh: "this/these = 近，that/those = 远",
      content:
        "Point to objects around you:\n\n  Near objects (within arm's reach):\n  This book (near, singular)\n  These books (near, plural)\n\n  Far objects (across the room):\n  That book (far, singular)\n  Those books (far, plural)\n\n  Distance is relative to the SPEAKER, not the listener.",
      contentZh:
        "指向你周围的物体：\n\n  近距离物体（手臂可及范围内）：\n  This book（近，单数）\n  These books（近，复数）\n\n  远距离物体（房间另一端）：\n  That book（远，单数）\n  Those books（远，复数）\n\n  距离相对于说话者，而不是听者。",
    },
    {
      id: "slide-3-number",
      slideNumber: 3,
      type: "RULE",
      sectionTitle: "3. Number: Singular vs Plural",
      title: "This/That = Singular, These/Those = Plural",
      titleZh: "this/that = 单数，these/those = 复数",
      content:
        "Match demonstrative to noun number:\n\n  Singular (one): this book, that book\n  Plural (more than one): these books, those books\n\n  NOT: this books (singular with plural)\n  NOT: these book (plural with singular)\n\n  The demonstrative MUST match the noun's number.",
      contentZh:
        "将指示代词与名词数量匹配：\n\n  单数（一个）：this book, that book\n  复数（多个）：these books, those books\n\n  错误：this books（单数用于复数）\n  错误：these book（复数用于单数）\n\n  指示代词必须与名词的数量匹配。",
    },
    {
      id: "slide-4-adjective-vs-pronoun",
      slideNumber: 4,
      type: "RULE",
      sectionTitle: "4. Adjective vs Pronoun",
      title: "Before Noun vs Standing Alone",
      titleZh: "放在名词前 vs 独立使用",
      content:
        "Demonstrative adjectives come BEFORE nouns:\n\n  This book is mine.\n  These books are yours.\n  That bag is hers.\n  Those bags are his.\n\n  Demonstrative pronouns stand ALONE (no noun after):\n  This is mine.\n  These are yours.\n  That is hers.\n  Those are his.\n\n  NOT: This book is this. (wrong)\n  NOT: These books are these. (wrong)",
      contentZh:
        "指示形容词放在名词前：\n\n  This book is mine.（这本书是我的）\n  These books are yours.（这些书是你的）\n  That bag is hers.（那个包是她的）\n  Those bags are his.（那些包是他的）\n\n  指示代词独立使用（后面不跟名词）：\n  This is mine.（这是我的）\n  These are yours.（这些是你的）\n  That is hers.（那是她的）\n  Those are his.（那些是他的）\n\n  错误：This book is this.（错的）\n  错误：These books are these.（错的）",
    },
    {
      id: "slide-5-real-life",
      slideNumber: 5,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "5. Real Life Scenario",
      title: "In the Classroom",
      titleZh: "在教室里",
      scenario: {
        context: "A teacher points to objects in the classroom and asks students to identify them.",
        contextZh: "老师指向教室里的物体，让学生识别它们。",
        dialogue: [
          {
            speaker: "Teacher",
            en: "Is this your book?",
            zh: "这是你的书吗？",
            isTargetGrammar: true,
          },
          {
            speaker: "Student",
            en: "No, this is mine. Those are yours.",
            zh: "不，这是我的。那些是你的。",
            isTargetGrammar: true,
          },
          {
            speaker: "Teacher",
            en: "Are these your pencils?",
            zh: "这些是你的铅笔吗？",
            isTargetGrammar: true,
          },
          {
            speaker: "Student",
            en: "Yes, these are mine. That is yours.",
            zh: "是的，这些是我的。那是你的。",
            isTargetGrammar: true,
          },
        ],
        task: "Notice: 'this' (near singular), 'these' (near plural), 'that' (far singular), 'those' (far plural).",
        taskZh: "注意：'this'（近单数），'these'（近复数），'that'（远单数），'those'（远复数）。",
      },
    },
    {
      id: "slide-6-speaking",
      slideNumber: 6,
      type: "SPEAKING_DRILL",
      sectionTitle: "6. Speaking Practice",
      title: "Point and Ask",
      titleZh: "指向和询问",
      speakingDrill: {
        prompt: "Point to 4 objects in your room (2 near, 2 far). Ask 'Is this/that yours?' or 'Are these/those yours?' and answer correctly.",
        targetSentence:
          "Is this pen yours? No, this is mine. Are these books yours? Yes, these are mine. Is that bag yours? No, that is hers. Are those shoes yours? Yes, those are theirs.",
        targetSentenceZh: "这个笔是你的吗？不，这是我的。这些书是你的吗？是的，这些是我的。那个包是你的吗？不，那是她的。那些鞋子是你的吗？是的，那些是他们的。",
        tips: "First identify near/far, then singular/plural, then choose the correct demonstrative.",
      },
    },
    {
      id: "slide-7-quiz",
      slideNumber: 7,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "7. Quick Quiz",
      title: "Choose the Correct Sentence",
      titleZh: "选择正确的句子",
      question: {
        question: "This is mine / These is mine",
        questionZh: "这是我的 / 这些是我的",
        options: ["a. This is mine", "b. These is mine", "c. Both are correct"],
        correctIndex: 0,
        explanation: "This is singular and matches with 'is'. These is plural and would require 'are'.",
        explanationZh: "This 是单数，匹配 'is'。These 是复数，应该用 'are'。",
        xpReward: 10,
      },
    },
    {
      id: "slide-8-challenge",
      slideNumber: 8,
      type: "CHALLENGE",
      sectionTitle: "8. Week Challenge",
      title: "15-Question Challenge",
      titleZh: "15题挑战",
      content: "Complete 15 questions to master demonstrative pronouns:\n\n**Part A: Choose correct demonstrative (8 questions)**\n  ___ is mine (this/these) - pointing to near book\n  ___ are yours (that/those) - pointing to far books\n\n**Part B: Fix the mistakes (7 questions)**\n  These is mine. → _____\n  Is these yours? → _____\n\n**Scoring**: 1 point per correct answer. Need 80% to pass. Keep practicing!",
      contentZh: "完成15题来掌握指示代词：\n\n**A部分：选择正确的指示代词（8题）**\n  ___ is mine（this/these） - 指向近处的书\n  ___ are yours（that/those） - 指向远处的书\n\n**B部分：纠正错误（7题）**\n  These is mine. → _____\n  Is these yours? → _____\n\n**评分**：每题1分。需要80%才能通过。继续练习！",
    },
  ],
};