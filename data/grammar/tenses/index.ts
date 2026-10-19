import { GrammarSubcategory, GrammarLessonSummary } from "@/types/grammar";

// Import lesson files (will be created later)
import { presentSimpleLesson } from "./present-simple";
import { presentContinuousLesson } from "./present-continuous";
import { pastSimpleLesson } from "./past-simple";
import { futureWillLesson } from "./future-will";
import { futureGoingToLesson } from "./future-going-to";
import { presentPerfectLesson } from "./present-perfect";
import { pastContinuousLesson } from "./past-continuous";
import { pastPerfectLesson } from "./past-perfect";
import { futureContinuousLesson } from "./future-continuous";
import { presentPerfectContinuousLesson } from "./present-perfect-continuous";
import { pastPerfectContinuousLesson } from "./past-perfect-continuous";
import { futurePerfectLesson } from "./future-perfect";
import { futurePerfectContinuousLesson } from "./future-perfect-continuous";
import { tenseMasterChallenge } from "./tense-master-challenge";

export const tenseSubcategories: GrammarSubcategory[] = [
  // 1. Present Simple
  {
    id: "present-simple",
    categoryId: "tenses",
    name: "Present Simple",
    nameZh: "一般现在时",
    icon: "⏱️",
    meaning: "Express habits, routines, facts, and permanent situations.",
    shortIntro: "The foundation of English tenses. Use for habits, scheduled events, and unchanging truths.",
    shortIntroZh: "英语时态的基础。用于表达习惯、计划事件和永恒真理。",
    examples: ["I work.", "She studies.", "The sun rises in the east."],
    examplesZh: ["我工作。", "她学习。", "太阳从东方升起。"],
    levelRange: "Beginner",
    difficulty: "Beginner",
    lessons: [
      {
        id: "present-simple-foundation",
        subcategoryId: "present-simple",
        categoryId: "tenses",
        title: "Present Simple: Habits & Facts",
        titleZh: "一般现在时：习惯与事实",
        level: "A1",
        estimatedMinutes: 45,
        slideCount: 40,
        description: "Master the present simple for routines, habits, and permanent truths.",
        descriptionZh: "掌握一般现在时以表达日常习惯、例行公事和永恒真理。",
      },
    ],
  },
  
  // 2. Present Continuous
  {
    id: "present-continuous",
    categoryId: "tenses",
    name: "Present Continuous",
    nameZh: "现在进行时",
    icon: "🔄",
    meaning: "Express actions happening now or around now.",
    shortIntro: "Use for actions in progress at the moment of speaking or temporary situations.",
    shortIntroZh: "用于说话时刻正在进行的动作或临时状态。",
    examples: ["I am working.", "She is studying.", "They are watching TV."],
    examplesZh: ["我在工作。", "她在学习。", "他们在看电视。"],
    levelRange: "Beginner",
    difficulty: "Beginner",
    lessons: [
      {
        id: "present-continuous-foundation",
        subcategoryId: "present-continuous",
        categoryId: "tenses",
        title: "Present Continuous: Actions in Progress",
        titleZh: "现在进行时：进行中的动作",
        level: "A2",
        estimatedMinutes: 40,
        slideCount: 35,
        description: "Learn to express temporary actions and current activities.",
        descriptionZh: "学习表达临时动作和当前正在进行的活动。",
      },
    ],
  },
  
  // 3. Past Simple
  {
    id: "past-simple",
    categoryId: "tenses",
    name: "Past Simple",
    nameZh: "一般过去时",
    icon: "📅",
    meaning: "Express completed actions at a specific time in the past.",
    shortIntro: "Use for finished actions, past habits, and completed states.",
    shortIntroZh: "用于表示过去完成的动作、过去的习惯和已完成的状态。",
    examples: ["I worked yesterday.", "She studied last year.", "They visited Paris in 2020."],
    examplesZh: ["我昨天工作了。", "她去年学习了。", "他们在2020年访问了巴黎。"],
    levelRange: "Beginner",
    difficulty: "Beginner",
    lessons: [
      {
        id: "past-simple-foundation",
        subcategoryId: "past-simple",
        categoryId: "tenses",
        title: "Past Simple: Completed Actions",
        titleZh: "一般过去时：完成的动作",
        level: "A2",
        estimatedMinutes: 45,
        slideCount: 40,
        description: "Master past simple for completed actions and past habits.",
        descriptionZh: "掌握一般过去时以表达已完成的动作和过去的习惯。",
      },
    ],
  },
  
  // 4. Future with will
  {
    id: "future-will",
    categoryId: "tenses",
    name: "Future with Will",
    nameZh: "将来时（will）",
    icon: "🔮",
    meaning: "Express spontaneous decisions, predictions, promises, and offers.",
    shortIntro: "Use for spontaneous decisions, predictions, promises, and offers made at the moment of speaking.",
    shortIntroZh: "用于表达说话时刻的自发决定、预测、承诺和提议。",
    examples: ["I will help you.", "It will rain tomorrow.", "I promise I'll call you."],
    examplesZh: ["我会帮你的。", "明天会下雨。", "我保证我会打电话给你。"],
    levelRange: "Beginner",
    difficulty: "Beginner",
    lessons: [
      {
        id: "future-will-foundation",
        subcategoryId: "future-will",
        categoryId: "tenses",
        title: "Future with Will: Decisions & Predictions",
        titleZh: "将来时（will）：决定与预测",
        level: "A2",
        estimatedMinutes: 35,
        slideCount: 30,
        description: "Learn to express spontaneous decisions, predictions, and promises.",
        descriptionZh: "学习表达自发决定、预测和承诺。",
      },
    ],
  },
  
  // 5. Be going to
  {
    id: "future-going-to",
    categoryId: "tenses",
    name: "Be Going To",
    nameZh: "将来时（be going to）",
    icon: "🎯",
    meaning: "Express planned intentions and predictions based on present evidence.",
    shortIntro: "Use for pre-planned intentions and predictions based on current evidence.",
    shortIntroZh: "用于表达预先计划的意图和基于当前证据的预测。",
    examples: ["I am going to study tonight.", "Look at those clouds - it's going to rain."],
    examplesZh: ["我今晚打算学习。", "看那些云 - 要下雨了。"],
    levelRange: "Beginner",
    difficulty: "Beginner",
    lessons: [
      {
        id: "future-going-to-foundation",
        subcategoryId: "future-going-to",
        categoryId: "tenses",
        title: "Be Going To: Plans & Evidence-Based Predictions",
        titleZh: "将来时（be going to）：计划与证据预测",
        level: "A2",
        estimatedMinutes: 40,
        slideCount: 35,
        description: "Master expressing plans and predictions based on present evidence.",
        descriptionZh: "掌握表达计划和基于当前证据的预测。",
      },
    ],
  },
  
  // 6. Present Perfect
  {
    id: "present-perfect",
    categoryId: "tenses",
    name: "Present Perfect",
    nameZh: "现在完成时",
    icon: "🔗",
    meaning: "Express past actions with present relevance or unfinished time periods.",
    shortIntro: "Connect past actions to the present - experience, change, or unfinished time.",
    shortIntroZh: "将过去的动作与现在联系起来 - 经验、变化或未完成的时间段。",
    examples: ["I have worked here for 5 years.", "She has visited Japan three times.", "They have just finished the project."],
    examplesZh: ["我在这里工作了5年了。", "她三次访问过日本。", "他们刚刚完成了项目。"],
    levelRange: "Intermediate",
    difficulty: "Intermediate",
    lessons: [
      {
        id: "present-perfect-foundation",
        subcategoryId: "present-perfect",
        categoryId: "tenses",
        title: "Present Perfect: Past Actions with Present Relevance",
        titleZh: "现在完成时：与现在相关的过去动作",
        level: "B1",
        estimatedMinutes: 50,
        slideCount: 45,
        description: "Learn to connect past actions to the present through experience, change, and unfinished time.",
        descriptionZh: "学习将过去的动作通过经验、变化和未完成时间与现在联系起来。",
      },
    ],
  },
  
  // 7. Past Continuous
  {
    id: "past-continuous",
    categoryId: "tenses",
    name: "Past Continuous",
    nameZh: "过去进行时",
    icon: "⏳",
    meaning: "Express ongoing actions that were in progress at a specific past time.",
    shortIntro: "Use for background actions, interrupted actions, and simultaneous past actions.",
    shortIntroZh: "用于表示过去某个时间点正在进行的动作、背景动作和被中断的动作。",
    examples: ["I was working when you called.", "They were studying while I was cooking.", "At 8 PM last night, she was watching TV."],
    examplesZh: ["你打电话时我正在工作。", "我做饭的时候他们在学习。", "昨晚8点她正在看电视。"],
    levelRange: "Intermediate",
    difficulty: "Intermediate",
    lessons: [
      {
        id: "past-continuous-foundation",
        subcategoryId: "past-continuous",
        categoryId: "tenses",
        title: "Past Continuous: Ongoing Past Actions",
        titleZh: "过去进行时：过去进行中的动作",
        level: "B1",
        estimatedMinutes: 40,
        slideCount: 35,
        description: "Master expressing ongoing actions that were in progress at specific past times.",
        descriptionZh: "掌握表达在特定过去时间点正在进行的动作。",
      },
    ],
  },
  
  // 8. Past Perfect
  {
    id: "past-perfect",
    categoryId: "tenses",
    name: "Past Perfect",
    nameZh: "过去完成时",
    icon: "🔁",
    meaning: "Express actions completed before another past action or time.",
    shortIntro: "The 'past of the past' - actions completed before another past reference point.",
    shortIntroZh: "'过去的过去' - 在另一个过去时间点之前完成的动作。",
    examples: ["I had finished work before you called.", "She had left when I arrived.", "They had eaten dinner by 7 PM."],
    examplesZh: ["你打电话之前我已经完成了工作。", "我到达时她已经离开了。", "他们在7点之前已经吃完了晚餐。"],
    levelRange: "Intermediate",
    difficulty: "Intermediate",
    lessons: [
      {
        id: "past-perfect-foundation",
        subcategoryId: "past-perfect",
        categoryId: "tenses",
        title: "Past Perfect: Actions Before Other Past Actions",
        titleZh: "过去完成时：在其他过去动作之前的动作",
        level: "B2",
        estimatedMinutes: 45,
        slideCount: 40,
        description: "Learn to sequence past actions using the past perfect.",
        descriptionZh: "学习使用过去完成时来排列过去动作的顺序。",
      },
    ],
  },
  
  // 9. Future Continuous
  {
    id: "future-continuous",
    categoryId: "tenses",
    name: "Future Continuous",
    nameZh: "将来进行时",
    icon: "⏭️",
    meaning: "Express actions that will be in progress at a specific future time.",
    shortIntro: "Use for actions that will be ongoing at a specific point in the future.",
    shortIntroZh: "用于表示将来某个特定时间点将要进行的动作。",
    examples: ["This time tomorrow, I will be flying to Paris.", "At 9 PM tonight, we will be having dinner."],
    examplesZh: ["明天这个时候，我将正飞往巴黎。", "今晚9点，我们将正在吃晚餐。"],
    levelRange: "Intermediate",
    difficulty: "Intermediate",
    lessons: [
      {
        id: "future-continuous-foundation",
        subcategoryId: "future-continuous",
        categoryId: "tenses",
        title: "Future Continuous: Actions in Progress at Future Times",
        titleZh: "将来进行时：将来时间点进行中的动作",
        level: "B1",
        estimatedMinutes: 40,
        slideCount: 35,
        description: "Learn to express actions that will be ongoing at specific future times.",
        descriptionZh: "学习表达在特定将来时间点将要进行的动作。",
      },
    ],
  },
  
  // 10. Present Perfect Continuous
  {
    id: "present-perfect-continuous",
    categoryId: "tenses",
    name: "Present Perfect Continuous",
    nameZh: "现在完成进行时",
    icon: "🔄🔗",
    meaning: "Express actions that started in the past and continue to the present.",
    shortIntro: "Focus on the duration of actions that began in the past and are still continuing.",
    shortIntroZh: "关注从过去开始并持续到现在的动作的持续时间。",
    examples: ["I have been working here for 3 hours.", "She has been studying all day.", "They have been waiting for 20 minutes."],
    examplesZh: ["我在这里已经工作了3个小时。", "她今天一直在学习。", "他们已经等了20分钟。"],
    levelRange: "Intermediate",
    difficulty: "Intermediate",
    lessons: [
      {
        id: "present-perfect-continuous-foundation",
        subcategoryId: "present-perfect-continuous",
        categoryId: "tenses",
        title: "Present Perfect Continuous: Duration of Ongoing Actions",
        titleZh: "现在完成进行时：持续进行动作的时长",
        level: "B1",
        estimatedMinutes: 45,
        slideCount: 40,
        description: "Master expressing the duration of actions that started in the past and continue to the present.",
        descriptionZh: "掌握表达从过去开始并持续到现在的动作的持续时间。",
      },
    ],
  },
  
  // 11. Past Perfect Continuous
  {
    id: "past-perfect-continuous",
    categoryId: "tenses",
    name: "Past Perfect Continuous",
    nameZh: "过去完成进行时",
    icon: "🔁🔄",
    meaning: "Express actions that were ongoing up to a specific past time.",
    shortIntro: "Focus on the duration of actions that were in progress before another past reference point.",
    shortIntroZh: "关注在另一个过去时间点之前一直在进行的动作的持续时间。",
    examples: ["I had been working for 2 hours when you called.", "She had been studying all night before the exam."],
    examplesZh: ["你打电话时我已经工作了2个小时。", "考试前她整晚都在学习。"],
    levelRange: "Intermediate",
    difficulty: "Intermediate",
    lessons: [
      {
        id: "past-perfect-continuous-foundation",
        subcategoryId: "past-perfect-continuous",
        categoryId: "tenses",
        title: "Past Perfect Continuous: Duration Before Past Reference Points",
        titleZh: "过去完成进行时：在过去参考点之前的动作持续时间",
        level: "B2",
        estimatedMinutes: 45,
        slideCount: 40,
        description: "Learn to express the duration of actions that were ongoing before specific past times.",
        descriptionZh: "掌握表达在特定过去时间点之前一直在进行的动作的持续时间。",
      },
    ],
  },
  
  // 12. Future Perfect
  {
    id: "future-perfect",
    categoryId: "tenses",
    name: "Future Perfect",
    nameZh: "将来完成时",
    icon: "🎯🔗",
    meaning: "Express actions that will be completed before a specific future time.",
    shortIntro: "Use for actions that will be finished before another future reference point.",
    shortIntroZh: "用于表示将在另一个将来时间点之前完成的动作。",
    examples: ["By next year, I will have completed my degree.", "By 5 PM today, we will have finished the project."],
    examplesZh: ["到明年，我将已经完成了我的学位。", "今天下午5点前，我们将已经完成了项目。"],
    levelRange: "Intermediate",
    difficulty: "Intermediate",
    lessons: [
      {
        id: "future-perfect-foundation",
        subcategoryId: "future-perfect",
        categoryId: "tenses",
        title: "Future Perfect: Actions Completed Before Future Times",
        titleZh: "将来完成时：在将来时间点之前完成的动作",
        level: "B2",
        estimatedMinutes: 40,
        slideCount: 35,
        description: "Learn to express actions that will be completed before specific future reference points.",
        descriptionZh: "学习表达在特定将来时间点之前将要完成的动作。",
      },
    ],
  },
  
  // 13. Future Perfect Continuous
  {
    id: "future-perfect-continuous",
    categoryId: "tenses",
    name: "Future Perfect Continuous",
    nameZh: "将来完成进行时",
    icon: "🎯🔄",
    meaning: "Express actions that will be ongoing up to a specific future time.",
    shortIntro: "Focus on the duration of actions that will be in progress before another future reference point.",
    shortIntroZh: "关注在另一个将来时间点之前将要进行的动作的持续时间。",
    examples: ["By next June, I will have been working here for 5 years.", "By the time you arrive, I will have been waiting for 2 hours."],
    examplesZh: ["到明年6月，我将在这里已经工作了5年。", "你到达时，我将已经等了2个小时。"],
    levelRange: "Advanced",
    difficulty: "Advanced",
    lessons: [
      {
        id: "future-perfect-continuous-foundation",
        subcategoryId: "future-perfect-continuous",
        categoryId: "tenses",
        title: "Future Perfect Continuous: Duration Before Future Reference Points",
        titleZh: "将来完成进行时：在将来参考点之前的动作持续时间",
        level: "C1",
        estimatedMinutes: 50,
        slideCount: 45,
        description: "Master expressing the duration of actions that will be ongoing before specific future times.",
        descriptionZh: "掌握表达在特定将来时间点之前将要进行的动作的持续时间。",
      },
    ],
  },
  
  // 14. Tense Master Challenge
  {
    id: "tense-master-challenge",
    categoryId: "tenses",
    name: "Tense Master Challenge",
    nameZh: "时态大师挑战",
    icon: "🏆",
    meaning: "Synthesize all tense knowledge through integrated practice and assessment.",
    shortIntro: "The ultimate test - choose the correct tense based on meaning and context without labels.",
    shortIntroZh: "终极测试 - 根据意义和语境选择正确的时态，无需标签提示。",
    examples: ["Choose the correct tense: 'I ___ (work) here for 5 years.'", "Select the appropriate form: 'When I called, she ___ (sleep).'"],
    examplesZh: ["选择正确的时态：'I ___ (work) 在这里工作了5年。'", "选择正确形式：'当我打电话时，她___ (sleep)。'"],
    levelRange: "Advanced",
    difficulty: "Advanced",
    lessons: [
      {
        id: "tense-master-challenge-final",
        subcategoryId: "tense-master-challenge",
        categoryId: "tenses",
        title: "Tense Master Challenge: Integrated Assessment",
        titleZh: "时态大师挑战：综合评估",
        level: "C1",
        estimatedMinutes: 60,
        slideCount: 50,
        description: "Master all 13 tenses through context-based selection and error correction.",
        descriptionZh: "通过基于语境的选择和错误纠正掌握所有13种时态。",
      },
    ],
  },
];
// Flattened lesson registry for easy access
export const allTenseLessons: GrammarLessonSummary[] = [
  presentSimpleLesson,
  presentContinuousLesson,
  pastSimpleLesson,
  futureWillLesson,
  futureGoingToLesson,
  presentPerfectLesson,
  pastContinuousLesson,
  pastPerfectLesson,
  futureContinuousLesson,
  presentPerfectContinuousLesson,
  pastPerfectContinuousLesson,
  futurePerfectLesson,
  futurePerfectContinuousLesson,
  tenseMasterChallenge,
];

export {
  presentSimpleLesson,
  presentContinuousLesson,
  pastSimpleLesson,
  futureWillLesson,
  futureGoingToLesson,
  presentPerfectLesson,
  pastContinuousLesson,
  pastPerfectLesson,
  futureContinuousLesson,
  presentPerfectContinuousLesson,
  pastPerfectContinuousLesson,
  futurePerfectLesson,
  futurePerfectContinuousLesson,
  tenseMasterChallenge,
};












