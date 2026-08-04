import { SlangModule } from "@/types/slang-module";

export const slangModule: SlangModule = {
  id: "real-english-slang",
  title: "Real English: Swearing, Slang & Offensive Language",
  description:
    "Master contextual usage, intensity awareness, and cultural nuances of English slang and strong language across 5 progressive categories.",
  emoji: "🗣️",
  color: "from-rose-500 to-orange-600",
  safetyDisclaimer:
    "This module teaches comprehension and recognition, not encouragement of offensive language. Always assess your audience and environment before using any slang.",
  safetyDisclaimerZh:
    "本模块教授理解和识别，而非鼓励使用冒犯性语言。使用任何俚语前请务必评估您的听众和环境。",
  lessons: [
    {
      id: "mild-interjections",
      title: "Mild Interjections & Soft Expletives",
      description:
        "Common, low-intensity expressions used for emphasis, frustration, or surprise in everyday speech.",
      emoji: "😅",
      category: "mild-interjections",
      terms: [
        {
          id: "crap",
          english: "Crap",
          chinese: "该死（较弱）",
          pinyin: "gāi sǐ",
          pronunciation: "krap",
          literalMeaning: "Excrement",
          actualMeaning:
            "Used as a mild expletive for frustration or disappointment.",
          detailsEn:
            "A softened alternative to stronger profanity. Common among all ages.",
          detailsZh: "较强脏话的软化替代品。各年龄段普遍使用。",
          intensity: 2,
          safetyLabels: [
            { label: "Family Friendly", icon: "✅", settings: ["Work", "School", "Family"] },
            { label: "Mild Caution", icon: "⚠️", settings: ["Formal settings"] },
          ],
          regionalVariations: [
            { region: "American", usage: "Oh crap!", note: "Most common" },
            { region: "British", usage: "Crap!", note: "Common" },
            { region: "Australian", usage: "Crap!", note: "Widely understood" },
          ],
          demographics: { ageGroup: "All ages", tone: "Frustrated", genderNeutral: true },
          nonVerbalCues: {
            facialExpression: "Frown or grimace",
            bodyLanguage: "Hands on hips or head in hands",
            gesture: "Eye roll",
          },
          comparative: {
            commonMistakes: ["Using in very formal business settings"],
            saferAlternatives: ["Darn it", "Shoot", "Dang"],
            similarWords: ["Crap!"],
            culturalNotes:
              "Generally accepted as mild in most English-speaking countries.",
          },
          exampleEn: "Oh crap! I forgot my keys at home again.",
          exampleZh: "该死！我又把钥匙忘在家里了。",
          category: "mild-interjections",
        },
        {
          id: "damn",
          english: "Damn",
          chinese: "该死/讨厌",
          pinyin: "gāi sǐ / tǎo yàn",
          pronunciation: "dam",
          literalMeaning: "To condemn",
          actualMeaning: "Mild expletive expressing frustration or emphasis.",
          detailsEn:
            "Versatile mild profanity. Can express frustration or emphasis. Slightly stronger than 'crap'.",
          detailsZh: "versatile的轻度脏话。可表达沮丧或强调。比'crap'稍强。",
          intensity: 2,
          safetyLabels: [
            { label: "Mostly Safe", icon: "✅", settings: ["Casual", "Friends", "Family"] },
            { label: "Caution", icon: "⚠️", settings: ["Formal meetings", "With strangers"] },
          ],
          regionalVariations: [
            { region: "American", usage: "Damn it!", note: "Very common" },
            { region: "British", usage: "Damn!", note: "Common" },
            { region: "Australian", usage: "Damn!", note: "Common" },
          ],
          demographics: { ageGroup: "Teen-adult", tone: "Frustrated", genderNeutral: true },
          nonVerbalCues: { facialExpression: "Frown or clenched jaw", bodyLanguage: "Sigh or hand slap" },
          comparative: {
            commonMistakes: ["Using in professional emails"],
            saferAlternatives: ["Darn", "Dang", "Shoot"],
            similarWords: ["Dang", "Darn"],
            culturalNotes: "Can be used as an intensifier in casual speech.",
          },
          exampleEn: "Damn, that was an amazing concert!",
          exampleZh: "该死，那场演唱会太精彩了！",
          category: "mild-interjections",
        },
        {
          id: "hell",
          english: "Hell",
          chinese: "该死/见鬼",
          pinyin: "gāi sǐ / jiàn guǐ",
          pronunciation: "hel",
          literalMeaning: "The underworld",
          actualMeaning: "Mild expletive or intensifier.",
          detailsEn:
            "Very mild by modern standards. 'What the hell' is extremely common.",
          detailsZh: "按现代标准非常轻微。'What the hell'非常常见。",
          intensity: 1,
          safetyLabels: [
            { label: "Very Safe", icon: "✅", settings: ["All settings"] },
            { label: "Mild Caution", icon: "⚠️", settings: ["Religious contexts"] },
          ],
          regionalVariations: [
            { region: "American", usage: "What the hell?", note: "Extremely common" },
            { region: "British", usage: "What the hell?", note: "Common" },
            { region: "Australian", usage: "What the hell?", note: "Common" },
          ],
          demographics: { ageGroup: "All ages", tone: "Surprised", genderNeutral: true },
          nonVerbalCues: { facialExpression: "Raised eyebrows", bodyLanguage: "Shrug" },
          comparative: {
            commonMistakes: ["Using in religious contexts where it may offend"],
            saferAlternatives: ["What on earth", "What the heck"],
            similarWords: ["Heck"],
            culturalNotes: "Originally religious, now largely secularized in casual speech.",
          },
          exampleEn: "What the hell is going on here?",
          exampleZh: "这里到底是怎么回事？",
          category: "mild-interjections",
        },
        {
          id: "dang",
          english: "Dang",
          chinese: "真讨厌/哎呀",
          pinyin: "zhēn tǎo yàn / āi yā",
          pronunciation: "dang",
          literalMeaning: "Variant of 'damn'",
          actualMeaning: "Very mild exclamation of frustration or surprise.",
          detailsEn:
            "The softest option in this category. Often used when children are present.",
          detailsZh: "本类别中最温和的选择。当有儿童在场时常用。",
          intensity: 1,
          safetyLabels: [{ label: "Family Friendly", icon: "✅", settings: ["All settings"] }],
          regionalVariations: [
            { region: "American", usage: "Dang it!", note: "Common" },
            { region: "British", usage: "Dang!", note: "Less common" },
            { region: "Australian", usage: "Dang!", note: "Understood" },
          ],
          demographics: { ageGroup: "All ages", tone: "Frustrated", genderNeutral: true },
          nonVerbalCues: { facialExpression: "Mild frown", bodyLanguage: "Head shake" },
          comparative: {
            commonMistakes: ["Using in very strong frustration - may sound dismissive"],
            saferAlternatives: ["Oh no", "Oops"],
            similarWords: ["Darn", "Dang nabbit"],
            culturalNotes: "Commonly used by parents when children are present.",
          },
          exampleEn: "Dang, I spilled coffee on my shirt.",
          exampleZh: "哎呀，我把咖啡洒在衬衫上了。",
          category: "mild-interjections",
        },
        {
          id: "darn",
          english: "Darn",
          chinese: "真讨厌/可恶",
          pinyin: "zhēn tǎo yàn / kě wù",
          pronunciation: "darn",
          literalMeaning: "Variant of 'damn'",
          actualMeaning: "Mild expletive, softer than 'damn'.",
          detailsEn:
            "Classic family-friendly alternative to 'damn'. Very common in American English.",
          detailsZh: "经典的'该死'的家庭友好替代品。在美式英语中非常常见。",
          intensity: 1,
          safetyLabels: [{ label: "Family Friendly", icon: "✅", settings: ["All settings"] }],
          regionalVariations: [
            { region: "American", usage: "Darn it!", note: "Very common" },
            { region: "British", usage: "Darn!", note: "Less common" },
            { region: "Australian", usage: "Darn!", note: "Understood" },
          ],
          demographics: { ageGroup: "All ages", tone: "Frustrated", genderNeutral: true },
          nonVerbalCues: { facialExpression: "Slight frown", bodyLanguage: "Sigh" },
          comparative: {
            commonMistakes: ["Using with very strong emotion - may sound weak"],
            saferAlternatives: ["Oh no", "Shoot"],
            similarWords: ["Dang", "Darnit"],
            culturalNotes: "Often associated with wholesome speech in the US.",
          },
          exampleEn: "Darn, I missed the bus again.",
          exampleZh: "可恶，我又错过公交车了。",
          category: "mild-interjections",
        },
      ],
      dialogues: [
        {
          id: "d1",
          context: "Roommate forgets to buy groceries",
          lines: [
            { speaker: "Alex", english: "Oh crap, we're out of milk again?", chinese: "该死，我们又没牛奶了？", pinyin: "gāi sǐ, wǒ men yòu méi niú nǎi le?" },
            { speaker: "Jordan", english: "I know, I totally forgot. My bad!", chinese: "我知道，我完全忘了。我的错！", pinyin: "wǒ zhī dào, wǒ wán quán wàng le. wǒ de cuò!" },
            { speaker: "Alex", english: "Dang it, I really wanted cereal this morning.", chinese: "哎呀，我今天早上真的很想吃麦片。", pinyin: "āi yā, wǒ jīn tiān zǎo shàng zhēn de hěn xiǎng chī mài piàn." },
          ],
          comprehensionNote:
            "Shows natural progression from stronger (crap) to softer (dang) mild expletives in the same conversation.",
        },
        {
          id: "d2",
          context: "Computer crashes during work",
          lines: [
            { speaker: "Sam", english: "What the hell? My document just crashed!", chinese: "见鬼了？我的文档刚崩溃了！", pinyin: "jiàn guǐ le? wǒ de wén dàng gāng bēng kuì le!" },
            { speaker: "Riley", english: "No way! Did you save it?", chinese: "不会吧！你保存了吗？", pinyin: "bú huì ba! nǐ bǎo cún le ma?" },
            { speaker: "Sam", english: "Hell no! I was just about to hit save.", chinese: "见鬼，没有！我刚要按保存。", pinyin: "jiàn guǐ, méi yǒu! wǒ gāng yào àn bǎo cún." },
          ],
          comprehensionNote: "'What the hell' expresses surprise, while 'hell no' is a stronger denial.",
        },
        {
          id: "d3",
          context: "Friend spills drink at restaurant",
          lines: [
            { speaker: "Taylor", english: "Oops! Oh crap, I spilled your drink.", chinese: "哎呀！我把饮料洒了。", pinyin: "āi yā! wǒ bǎ yǐn liào sǎ le." },
            { speaker: "Morgan", english: "Darn it, now my phone is wet!", chinese: "可恶，现在我的手机湿了！", pinyin: "kě wù, xiàn zài wǒ de shǒu jī shī le!" },
            { speaker: "Casey", english: "Don't worry, it happens. Damn, that's a lot of soda though.", chinese: "别担心，常有的。该死，那是很多苏打水啊。", pinyin: "bié dān xīn, cháng yǒu de. gāi sǐ, nà shì hěn duō sū dǎ shuǐ a." },
          ],
          comprehensionNote:
            "Notice how 'darn' shows mild frustration about the phone, while 'damn' comments on the quantity of spillage.",
        },
        {
          id: "d4",
          context: "Traffic jam on the way to airport",
          lines: [
            { speaker: "Jamie", english: "Damn it! We're going to miss our flight.", chinese: "该死！我们要错过航班了。", pinyin: "gāi sǐ! wǒ men yào cuò guò háng bān le." },
            { speaker: "Pat", english: "Oh hell, this traffic is terrible.", chinese: "哦见鬼，这交通太糟糕了。", pinyin: "ō jiàn guǐ, zhè jiāo tōng tài zāo gāo le." },
            { speaker: "Jamie", english: "Dang, I should have left earlier.", chinese: "哎呀，我早该出发的。", pinyin: "āi yā, wǒ zǎo gāi chū fā de." },
          ],
          comprehensionNote:
            "Shows different intensities: 'damn it' (strongest), 'hell' (moderate), 'dang' (softest) in the same stressful situation.",
        },
        {
          id: "d5",
          context: "Finding parking spot is taken",
          lines: [
            { speaker: "Quinn", english: "Crap! That was the last spot.", chinese: "该死！那是最后一个车位了。", pinyin: "gāi sǐ! nà shì zuì hòu yī gè chē wèi le." },
            { speaker: "Riley", english: "Darn it, we drove around for 20 minutes.", chinese: "可恶，我们绕了20分钟了。", pinyin: "kě wù, wǒ men rào le 20 fēn zhōng le." },
            { speaker: "Quinn", english: "What the hell, people just park anywhere these days.", chinese: "见鬼，现在的人真是随便乱停。", pinyin: "jiàn guǐ, xiàn zài de rén zhēn shì suí biàn luàn tíng." },
          ],
          comprehensionNote:
            "'What the hell' is used to express frustration at a general situation rather than a specific person.",
        },
      ],
      practiceDrills: [
        {
          id: "p1",
          type: "role-play",
          title: "Kitchen Disaster Role-Play",
          instructions:
            "Act out a scenario where you burn dinner. Use at least 3 different mild interjections from this lesson.",
          instructionsZh: "表演你烧坏晚餐的场景。使用本课至少3种不同的轻度感叹词。",
          content:
            "You're cooking dinner for friends. The smoke alarm goes off. Your partner walks in. React naturally using 'crap', 'damn', 'darn', 'hell', and 'dang' appropriately.",
          contentZh:
            "你正在为朋友做晚餐。烟雾警报响了。你的伴侣走了进来。自然地反应，适当使用'crap'、'damn'、'darn'、'hell'和'dang'。",
          answer:
            "Example: 'Oh crap! The smoke alarm! Damn, I burned the chicken. Darn it, I was so distracted. Hell, we have 10 minutes before guests arrive! Dang, I should have set a timer.'",
        },
        {
          id: "p2",
          type: "listening-translation",
          title: "Intensity Ranking",
          instructions: "Rank these expressions from mildest (1) to strongest (5).",
          instructionsZh: "将这些表达从最温和（1）到最强（5）排序。",
          content: "1. 'Dang'  2. 'Crap'  3. 'Damn'  4. 'Hell'  5. 'Darn'",
          contentZh: "1. 'Dang'  2. 'Crap'  3. 'Damn'  4. 'Hell'  5. 'Darn'",
          answer: "1-Dang (1), 2-Darn (1), 3-Hell (1-2), 4-Crap (2), 5-Damn (2-3)",
        },
        {
          id: "p3",
          type: "situational-judgment",
          title: "Context Matching",
          instructions: "Choose the BEST mild interjection for each situation.",
          instructionsZh: "为每种情况选择最佳轻度感叹词。",
          content:
            "A) You drop your phone in water. B) Your child draws on the wall. C) You miss a deadline at work. D) You see a cute dog.",
          contentZh: "A) 你把手机掉进水里。B) 你的孩子在墙上画画。C) 你错过了工作截止日期。D) 你看到一只可爱的狗。",
          options: [
            { label: "A) Dang", labelZh: "A) 哎呀", correct: true },
            { label: "B) Crap", labelZh: "B) 该死", correct: false },
            { label: "C) Darn", labelZh: "C) 可恶", correct: false },
            { label: "D) Hell", labelZh: "D) 见鬼", correct: false },
          ],
          answer:
            "A) Dang - family-friendly, B) Darn - mild, C) Damn - stronger for workplace stress, D) Hell - inappropriate for cute context",
        },
        {
          id: "p4",
          type: "emotional-intelligence",
          title: "Empathy Response",
          instructions:
            "Your friend says 'Damn, I failed my driving test again.' How do you respond empathetically?",
          instructionsZh: "你的朋友说'该死，我又没通过驾照考试。'你如何有同理心地回应？",
          content: "Choose the most empathetic response.",
          contentZh: "选择最有同理心的回应。",
          options: [
            {
              label: "A) Oh man, that sucks. Want to practice together?",
              labelZh: "A) 伙计，那太糟了。想一起练习吗？",
              correct: true,
            },
            { label: "B) Don't worry about it.", labelZh: "B) 别担心", correct: false },
            {
              label: "C) I told you to study more.",
              labelZh: "C) 我告诉过你要多学习",
              correct: false,
            },
            { label: "D) Damn, really?", labelZh: "D) 该死，真的吗？", correct: false },
          ],
          answer:
            "A validates emotion and offers support. B dismisses. C is critical. D focuses on your reaction not theirs.",
        },
        {
          id: "p5",
          type: "register-comparison",
          title: "Register Shift Practice",
          instructions: "Rewrite these sentences from casual to formal and vice versa.",
          instructionsZh: "将这些句子从随意改写为正式，反之亦然。",
          content:
            "Casual: 'Oh crap, I forgot the meeting.' → Formal: 'Oh dear, I seem to have forgotten the meeting.' Now reverse: Formal: 'I apologize for the oversight.' → Casual:",
          contentZh:
            "随意：'该死，我忘了会议。' → 正式：'哦天哪，我好像忘了会议。' 现在反过来：正式：'我为疏忽道歉。' → 随意：",
          answer: "'Oh crap, my bad. I totally forgot about it.'",
        },
      ],
      quiz: [
        {
          id: "q1",
          question: "Which mild interjection is considered MOST family-friendly?",
          questionZh: "哪种轻度感叹词被认为最适合家庭使用？",
          options: [
            { label: "A) Damn", labelZh: "A) 该死", correct: false },
            { label: "B) Dang", labelZh: "B) 哎呀", correct: true },
            { label: "C) Hell", labelZh: "C) 见鬼", correct: false },
            { label: "D) Crap", labelZh: "D) 该死", correct: false },
          ],
          explanation: "Dang is the softest option and appropriate for all ages and settings.",
          explanationZh: "Dang是最温和的选择，适合所有年龄段和场合。",
        },
        {
          id: "q2",
          question: "Choose the BEST context for 'What the hell?'",
          questionZh: "为'What the hell?'选择最佳语境。",
          options: [
            { label: "A) At a funeral", labelZh: "A) 在葬礼上", correct: false },
            { label: "B) In a job interview", labelZh: "B) 在面试中", correct: false },
            { label: "C) With friends at a concert", labelZh: "C) 和朋友在音乐会上", correct: true },
            { label: "D) In a classroom", labelZh: "D) 在教室里", correct: false },
          ],
          explanation:
            "'What the hell' is casual and should be avoided in formal or solemn settings.",
          explanationZh: "'What the hell'是随意的，应避免在正式或庄严场合使用。",
        },
        {
          id: "q3",
          question: "Your coworker says 'Damn it!' when their computer crashes. What should you do?",
          questionZh: "当同事电脑崩溃说'Damn it!'时，你应该怎么做？",
          options: [
            { label: "A) Report them to HR", labelZh: "A) 向HR举报", correct: false },
            {
              label: "B) Offer to help fix the issue",
              labelZh: "B) 主动帮忙解决问题",
              correct: true,
            },
            { label: "C) Ignore them completely", labelZh: "C) 完全无视他们", correct: false },
            {
              label: "D) Tell them to be more professional",
              labelZh: "D) 告诉他们要更专业",
              correct: false,
            },
          ],
          explanation:
            "'Damn it' is a very mild expletive in a stressful work situation. Responding with empathy is appropriate.",
          explanationZh: "'Damn it'在紧张工作情境中是非常轻度的感叹词。以同理心回应是合适的。",
        },
        {
          id: "q4",
          question: "Which is the intensity ranking from mildest to strongest?",
          questionZh: "以下哪个是从最温和到最强的强度排序？",
          options: [
            {
              label: "A) Dang → Darn → Hell → Crap → Damn",
              labelZh: "A) 哎呀 → 可恶 → 见鬼 → 该死 → 该死",
              correct: true,
            },
            {
              label: "B) Hell → Dang → Damn → Crap → Darn",
              labelZh: "B) 见鬼 → 哎呀 → 该死 → 该死 → 可恶",
              correct: false,
            },
            {
              label: "C) Crap → Damn → Hell → Darn → Dang",
              labelZh: "C) 该死 → 该死 → 见鬼 → 可恶 → 哎呀",
              correct: false,
            },
            {
              label: "D) Darn → Dang → Crap → Hell → Damn",
              labelZh: "D) 可恶 → 哎呀 → 该死 → 见鬼 → 该死",
              correct: false,
            },
          ],
          explanation:
            "Dang and Darn are the mildest (family-friendly), Hell is slightly stronger, Crap is moderate, and Damn is the strongest in this group.",
          explanationZh:
            "Dang和Darn最温和（家庭友好），Hell稍强，Crap中等，Damn是本组中最强的。",
        },
        {
          id: "q5",
          question: "A teenager says 'Oh crap!' when they lose their phone. This is:",
          questionZh: "一个青少年丢了手机时说'Oh crap!'。这是：",
          options: [
            { label: "A) Highly inappropriate", labelZh: "A) 非常不合适", correct: false },
            {
              label: "B) A normal mild expression",
              labelZh: "B) 正常的轻度表达",
              correct: true,
            },
            { label: "C) Extremely offensive", labelZh: "C) 极度冒犯", correct: false },
            { label: "D) A form of harassment", labelZh: "D) 骚扰的一种形式", correct: false },
          ],
          explanation:
            "'Crap' is a mild expletive commonly used by teenagers. It is not harassment - harassment involves targeted, repeated negative behavior toward a person.",
          explanationZh:
            "'Crap'是青少年常用的轻度脏话。这不是骚扰——骚扰涉及针对某人的、重复的负面行为。",
        },
      ],
    },
    {
      id: "internet-digital-slang",
      title: "Internet & Digital Slang",
      description:
        "Texting, social media, and gaming slang - how digital communication shapes modern English.",
      emoji: "📱",
      category: "internet-digital-slang",
      terms: [
        {
          id: "ghosting",
          english: "Ghosting",
          chinese: "突然消失/不回消息",
          pinyin: "tū rán xiāo shī / bù huí xiāo xī",
          pronunciation: "goh-sting",
          literalMeaning: "Like a ghost disappearing",
          actualMeaning: "Cutting off all communication without explanation.",
          detailsEn:
            "Extremely common in dating and friendships. Originated from online dating culture.",
          detailsZh: "在约会和友谊中极为常见。起源于在线约会文化。",
          intensity: 2,
          safetyLabels: [
            {
              label: "Socially Aware",
              icon: "⚠️",
              settings: ["Discussions about relationships", "Advice contexts"],
            },
          ],
          regionalVariations: [
            { region: "American", usage: "He's been ghosting me for weeks.", note: "Very common" },
            { region: "British", usage: "She just ghosted me.", note: "Common" },
            {
              region: "Australian",
              usage: "Ghosting is such a terrible thing to do.",
              note: "Common",
            },
          ],
          demographics: { ageGroup: "Teens-Adults", tone: "Disgusted", genderNeutral: true },
          nonVerbalCues: {
            facialExpression: "Disappointed or sad",
            bodyLanguage: "Looking at phone repeatedly",
          },
          comparative: {
            commonMistakes: [
              "Using to describe simply not replying once",
              "Confusing with 'benching' or 'breadcrumbing'",
            ],
            saferAlternatives: ["Stopped replying", "Cut off contact", "Stopped messaging"],
            similarWords: ["Benching", "Breadcrumbing", "Zombieing"],
            culturalNotes:
              "Part of modern dating vocabulary. Has sparked discussions about digital etiquette and mental health.",
          },
          exampleEn: "We went on three dates and then he started ghosting me.",
          exampleZh: "我们约会了三次，然后他就突然不回我消息了。",
          category: "internet-digital-slang",
        },
        {
          id: "cap-fr",
          english: "Cap / No Cap",
          chinese: "谎言 / 真话",
          pinyin: "huǎng yán / zhēn huà",
          pronunciation: "kap / noh kap",
          literalMeaning: "Cap = lie (from 'bullcrap' or 'capping' lying)",
          actualMeaning: "Cap = lie, No cap = no lie / for real",
          detailsEn:
            "Originated in African American Vernacular English (AAVE) and hip-hop culture, now mainstream. 'No cap' means 'I'm being honest'.",
          detailsZh:
            "起源于非裔美国人白话英语（AAVE）和嘻哈文化，现已成为主流。'No cap'意为'我是认真的'。",
          intensity: 1,
          safetyLabels: [
            {
              label: "Culturally Aware",
              icon: "ℹ️",
              settings: ["Most casual contexts", "With peers"],
            },
          ],
          regionalVariations: [
            { region: "American", usage: "No cap, that's the best pizza.", note: "Very common among youth" },
            { region: "British", usage: "No cap.", note: "Understood but less common" },
            { region: "Australian", usage: "No cap.", note: "Growing usage" },
          ],
          demographics: { ageGroup: "Teens-Young Adults", tone: "Playful", genderNeutral: true },
          nonVerbalCues: {
            facialExpression: "Serious or deadpan",
            bodyLanguage: "Hand on chest (promise gesture)",
          },
          comparative: {
            commonMistakes: [
              "Using 'cap' as a noun meaning 'hat' in slang context",
              "Using with older generations who may not understand",
            ],
            saferAlternatives: ["Lie / Lying", "I'm serious", "Really"],
            similarWords: ["Fake", "Sus", "Cap = lie"],
            culturalNotes:
              "Important to recognize AAVE origins and use respectfully.",
          },
          exampleEn: "No cap, I studied for 10 hours for that test.",
          exampleZh: "真的，我为那次考试学习了10个小时。",
          category: "internet-digital-slang",
        },
        {
          id: "yeet",
          english: "Yeet",
          chinese: "扔/用力扔",
          pinyin: "rēng / yòng lì rēng",
          pronunciation: "yeet",
          literalMeaning: "To throw with force",
          actualMeaning: "To throw something with enthusiasm; also an exclamation of excitement.",
          detailsEn:
            "Viral meme word from 2014-2018. Can be verb ('yeet the ball') or interjection ('YEET!').",
          detailsZh: "2014-2018年的病毒式迷因词。可作动词或感叹词。",
          intensity: 1,
          safetyLabels: [{ label: "Family Friendly", icon: "✅", settings: ["Most contexts"] }],
          regionalVariations: [
            { region: "American", usage: "Yeet!", note: "Originated here" },
            { region: "British", usage: "Yeet!", note: "Understood" },
            { region: "Australian", usage: "Yeet!", note: "Understood" },
          ],
          demographics: { ageGroup: "Teens-Young Adults", tone: "Playful", genderNeutral: true },
          nonVerbalCues: {
            facialExpression: "Big smile or excited expression",
            bodyLanguage: "Throwing motion with arm",
          },
          comparative: {
            commonMistakes: ["Using with older audiences who won't understand", "Using in serious contexts"],
            saferAlternatives: ["Throw", "Chuck", "Toss", "Awesome!", "Cool!"],
            similarWords: ["Skrrt", "Bruh", "W"],
            culturalNotes: "Example of how internet culture creates and spreads slang rapidly.",
          },
          exampleEn: "He yeeted the empty bottle into the recycling bin.",
          exampleZh: "他把空瓶子用力扔进了回收箱。",
          category: "internet-digital-slang",
        },
        {
          id: "sus",
          english: "Sus",
          chinese: "可疑的/ suspicious",
          pinyin: "kě yí de / xián yí",
          pronunciation: "suhs",
          literalMeaning: "Suspicious (shortened)",
          actualMeaning: "Suspicious, sketchy, or questionable.",
          detailsEn:
            "Popularized by the game 'Among Us' (2020). Shortened from 'suspicious'. Now widely used beyond gaming.",
          detailsZh: "由游戏'Among Us'（2020）推广。由'suspicious'缩短而来。现已超越游戏广泛使用。",
          intensity: 1,
          safetyLabels: [
            { label: "Casual", icon: "✅", settings: ["Friends", "Gaming", "Social media"] },
          ],
          regionalVariations: [
            { region: "American", usage: "That's sus.", note: "Very common" },
            { region: "British", usage: "That's sus.", note: "Common" },
            { region: "Australian", usage: "That's sus.", note: "Common" },
          ],
          demographics: { ageGroup: "Teens-Young Adults", tone: "Sarcastic", genderNeutral: true },
          nonVerbalCues: {
            facialExpression: "Side-eye or raised eyebrow",
            bodyLanguage: "Pointing or head tilt",
          },
          comparative: {
            commonMistakes: ["Using in formal contexts", "Confusing with 'sus' as a name"],
            saferAlternatives: ["Suspicious", "Sketchy", "Questionable", "Dodgy"],
            similarWords: ["Sketchy", "Shady", "Dodgy"],
            culturalNotes: "Gaming slang crossing into everyday speech is a modern phenomenon.",
          },
          exampleEn: "He said he was working late but I saw him at the movies. That's sus.",
          exampleZh: "他说他在加班，但我看到他在电影院。这很可疑。",
          category: "internet-digital-slang",
        },
        {
          id: "rizz",
          english: "Rizz",
          chinese: "魅力/撩人技巧",
          pinyin: "mèi lì / liáo rén jì qiǎo",
          pronunciation: "riz",
          literalMeaning: "Charisma (shortened)",
          actualMeaning: "Skill at attracting romantic or sexual interest through charm.",
          detailsEn:
            "Coined by Twitch streamer Kai Cenat in 2021. Shortened from 'charisma'. Went viral in 2022. Now mainstream.",
          detailsZh:
            "由Twitch主播Kai Cenat于2021年创造。由'charisma'缩短而来。2022年病毒式传播。现已成为主流。",
          intensity: 1,
          safetyLabels: [
            {
              label: "Casual",
              icon: "✅",
              settings: ["Friends", "Social media", "Dating contexts"],
            },
          ],
          regionalVariations: [
            { region: "American", usage: "He has infinite rizz.", note: "Originated here" },
            { region: "British", usage: "Rizz.", note: "Understood" },
            { region: "Australian", usage: "Rizz.", note: "Understood" },
          ],
          demographics: { ageGroup: "Teens-Young Adults", tone: "Playful", genderNeutral: true },
          nonVerbalCues: {
            facialExpression: "Impressed or amused",
            bodyLanguage: "Nodding or pointing",
          },
          comparative: {
            commonMistakes: [
              "Using in formal or professional settings",
              "Using with older generations",
            ],
            saferAlternatives: ["Charisma", "Charm", "Game"],
            similarWords: ["Game", "Swag", "Cool"],
            culturalNotes:
              "Example of how streaming culture creates slang that spreads globally within months.",
          },
          exampleEn: "She has serious rizz - everyone falls for her.",
          exampleZh: "她真的有魅力——每个人都被她吸引。",
          category: "internet-digital-slang",
        },
        {
          id: "simping",
          english: "Simping",
          chinese: "过度讨好/舔狗",
          pinyin: "guò dù tǎo hǎo / tǎi gǒu",
          pronunciation: "sim-ping",
          literalMeaning: "Behaving like a 'sIMP'",
          actualMeaning:
            "Doing excessive nice things for someone you're attracted to, often to gain their approval.",
          detailsEn:
            "Originated on TikTok in 2019. Negative connotation - implies lack of self-respect. Often used as an insult.",
          detailsZh: "起源于2019年TikTok。负面含义——暗示缺乏自尊。常被用作侮辱。",
          intensity: 3,
          safetyLabels: [
            { label: "Caution", icon: "⚠️", settings: ["Can be insulting", "Dating conversations"] },
          ],
          regionalVariations: [
            { region: "American", usage: "Stop simping for her.", note: "Very common" },
            { region: "British", usage: "He's simping hard.", note: "Common" },
            { region: "Australian", usage: "Don't simp.", note: "Common" },
          ],
          demographics: { ageGroup: "Teens-Young Adults", tone: "Disgusted", genderNeutral: true },
          nonVerbalCues: {
            facialExpression: "Disapproving or cringing",
            bodyLanguage: "Hand to forehead (facepalm)",
          },
          comparative: {
            commonMistakes: [
              "Using to genuinely describe kindness",
              "Using with someone you don't know well",
            ],
            saferAlternatives: [
              "Overly eager",
              "Putting someone on a pedestal",
              "People-pleasing",
            ],
            similarWords: ["Beta male", "White knight", "Simp"],
            culturalNotes:
              "Shows how internet slang can carry strong negative judgments about social behavior.",
          },
          exampleEn: "He bought her a $200 gift after one date - total simp move.",
          exampleZh: "一次约会后他就给她买了200美元的礼物——典型的舔狗行为。",
          category: "internet-digital-slang",
        },
        {
          id: "skibidi",
          english: "Skibidi",
          chinese: "Skibidi（网络迷因）",
          pinyin: "sī jǐ bǐ dí",
          pronunciation: "skih-bee-dee",
          literalMeaning: "From 'Skibidi Toilet' meme series",
          actualMeaning:
            "Internet meme term from viral video series; used ironically or as nonsense filler.",
          detailsEn:
            "From 'Skibidi Toilet' YouTube series (2023). Represents surreal internet culture. Used by Gen Z to describe something absurd or as ironic filler.",
          detailsZh:
            "来自'Skibidi Toilet'YouTube系列（2023）。代表超现实的网络文化。被Z世代用来描述荒谬事物或作为讽刺填充词。",
          intensity: 1,
          safetyLabels: [
            { label: "Niche Internet", icon: "ℹ️", settings: ["Gaming", "Meme contexts"] },
          ],
          regionalVariations: [
            { region: "American", usage: "That's so skibidi.", note: "Gen Z usage" },
            { region: "British", usage: "Skibidi.", note: "Understood" },
            { region: "Australian", usage: "Skibidi.", note: "Understood" },
          ],
          demographics: { ageGroup: "Gen Z (under 20)", tone: "Playful", genderNeutral: true },
          nonVerbalCues: {
            facialExpression: "Deadpan or ironic smile",
            bodyLanguage: "Head bob to meme audio",
          },
          comparative: {
            commonMistakes: [
              "Using with anyone over 25 who likely won't understand",
              "Treating it as a 'real' word",
            ],
            saferAlternatives: ["Weird", "Absurd", "Random"],
            similarWords: ["Ohio", "Gyatt", "Sigma"],
            culturalNotes:
              "Example of how rapidly internet slang evolves and becomes niche.",
          },
          exampleEn: "That random TikTok was so skibidi, I couldn't stop laughing.",
          exampleZh: "那个随机TikTok太Skibidi了，我笑得停不下来。",
          category: "internet-digital-slang",
        },
      ],
      dialogues: [
        {
          id: "d1",
          context: "Friend complaining about a date who stopped texting",
          lines: [
            {
              speaker: "Casey",
              english: "He's been ghosting me for a week. No texts, no calls, nothing.",
              chinese: "他已经一周不回我消息了。没短信，没电话，什么都没有。",
              pinyin: "tā yǐ jīng yī zhōu bù huí wǒ xiāo xī le. méi duǎn xìn, méi diàn huà, shén me dōu méi yǒu.",
            },
            {
              speaker: "Morgan",
              english: "That's so sus. Just block him.",
              chinese: "太可疑了。直接拉黑他吧。",
              pinyin: "tài kě yí le. zhí jiē lā hēi tā ba.",
            },
            {
              speaker: "Casey",
              english: "I know, but no cap - he was really sweet at first.",
              chinese: "我知道，但说实话——他一开始真的很好。",
              pinyin: "wǒ zhī dào, dàn shuō shí huà - tā yī kāi shǐ zhēn de hěn hǎo.",
            },
          ],
          comprehensionNote:
            "Ghosting = disappearing, sus = suspicious, no cap = honestly/for real.",
        },
        {
          id: "d2",
          context: "Group chat reacting to a friend's new relationship",
          lines: [
            {
              speaker: "Alex",
              english: "Jake is simping so hard for Sarah right now.",
              chinese: "Jake现在太舔Sarah了。",
              pinyin: "Jake xiàn zài tài tǎi Sarah le.",
            },
            {
              speaker: "Jordan",
              english: "He bought her a PS5 on the second date. Cap.",
              chinese: "第二次约会他就给她买了PS5。假的吧。",
              pinyin: "dì èr cì yuē huì tā jiù gěi tā mǎi le PS5. jiǎ de ba.",
            },
            {
              speaker: "Riley",
              english: "No cap, I saw the receipt. He's gone.",
              chinese: "真的，我看到了收据。他没救了。",
              pinyin: "zhēn de, wǒ kàn dào le shōu jù. tā méi jiù le.",
            },
          ],
          comprehensionNote: "Simping = excessive people-pleasing, cap = lie, no cap = honestly.",
        },
        {
          id: "d3",
          context: "Gamers reacting to a new update",
          lines: [
            {
              speaker: "Sam",
              english: "This new update is so skibidi, I can't even.",
              chinese: "这次更新太Skibidi了，我简直无语。",
              pinyin: "zhè cì gēng xīn tài Skibidi le, wǒ jiǎn zhí wú yǔ.",
            },
            {
              speaker: "Taylor",
              english: "Bro just yeeted my favorite character into the trash.",
              chinese: "兄弟直接把我最喜欢的角色扔进垃圾桶了。",
              pinyin: "xiōng dì zhí jiē bǎ wǒ zuì xǐ huan de jué sè rēng jìn lā jī tǒng le.",
            },
            {
              speaker: "Morgan",
              english: "Fr, the developers need to stop. This is mad sus.",
              chinese: "真的，开发者们该停了。这太可疑了。",
              pinyin: "zhēn de, kāi fā zhě men gāi tíng le. zhè tài kě yí le.",
            },
          ],
          comprehensionNote: "Skibidi = absurd, yeeted = thrown away, fr = for real, sus = suspicious.",
        },
        {
          id: "d4",
          context: "Teenagers discussing social media drama",
          lines: [
            {
              speaker: "Pat",
              english: "Did you see what she posted? She's got serious rizz.",
              chinese: "你看到她发的了吗？她真的很有魅力。",
              pinyin: "nǐ kàn dào tā fā de le ma? tā zhēn de hěn yǒu mèi lì.",
            },
            {
              speaker: "Quinn",
              english: "No cap, she could get anyone. But that ex of hers is still simping.",
              chinese: "真的，她能搞定任何人。但她的前任还在当舔狗。",
              pinyin: "zhēn de, tā néng gǎo dìng rèn hé rén. dàn tā de qián rèn hái zài dāng tǎi gǒu.",
            },
            {
              speaker: "Riley",
              english: "Fr, he needs to move on. It's been months.",
              chinese: "真的，他该放下了。都好几个月了。",
              pinyin: "zhēn de, tā gāi fàng xià le. dōu hǎo jǐ gè yuè le.",
            },
          ],
          comprehensionNote: "Rizz = charm, no cap = honestly, simping = people-pleasing, fr = for real.",
        },
        {
          id: "d5",
          context: "Texting about a cancelled plan",
          lines: [
            {
              speaker: "Jamie",
              english: "She ghosted me again. Third time this month.",
              chinese: "她又突然消失了。这个月第三次了。",
              pinyin: "tā yòu tū rán xiāo shī le. zhè gè yuè dì sān cì le.",
            },
            {
              speaker: "Avery",
              english: "Fr, at some point you gotta stop replying.",
              chinese: "真的，有时候你该停止回复了。",
              pinyin: "zhēn de, yǒu shí hòu nǐ gāi tíng zhǐ huí fù le.",
            },
            {
              speaker: "Jamie",
              english: "I know, but she's so funny. Plus, she has mad rizz.",
              chinese: "我知道，但她太有趣了。而且她超有魅力。",
              pinyin: "wǒ zhī dào, dàn tā tài yǒu qù le. ér qiě tā chāo yǒu mèi lì.",
            },
          ],
          comprehensionNote: "Ghosted = disappeared, fr = for real, mad rizz = lots of charm.",
        },
      ],
      practiceDrills: [
        {
          id: "p1",
          type: "role-play",
          title: "Text Message Drama",
          instructions: "Write a text conversation between two friends where one is complaining about being ghosted.",
          instructionsZh: "写一段两个朋友之间的短信对话，其中一个抱怨自己被突然消失。",
          content: "Use at least 3 internet slang terms naturally. Include 'ghosting', 'sus', 'no cap', or 'rizz'.",
          contentZh: "自然地使用至少3个网络俚语。包括'ghosting'、'sus'、'no cap'或'rizz'。",
          answer:
            "Example: 'Ugh, he's been ghosting me for 3 days. No cap, I thought we had something. Is it just me or is that super sus?'",
        },
        {
          id: "p2",
          type: "listening-translation",
          title: "Slang Translation",
          instructions: "Translate these slang sentences into standard English.",
          instructionsZh: "将这些俚语句子翻译成标准英语。",
          content: "1. 'No cap, he's got rizz.'  2. 'She just yeeted my feelings.'  3. 'That's mad sus.'",
          contentZh: "1. '真的，他有魅力。'  2. '她直接践踏了我的感情。'  3. '那太可疑了。'",
          answer:
            "1. 'Honestly, he has charisma/charm.' 2. 'She just rejected me cruelly/without care.' 3. 'That's very suspicious/questionable.'",
        },
        {
          id: "p3",
          type: "situational-judgment",
          title: "Appropriate Usage",
          instructions: "When is it appropriate to use 'sus'?",
          instructionsZh: "什么时候适合使用'sus'？",
          content: "A) In a job interview B) In a police report C) With friends discussing a strange situation D) In a formal essay",
          contentZh: "A) 在面试中 B) 在警察报告中 C) 和朋友讨论奇怪情况 D) 在正式论文中",
          options: [
            { label: "A) In a job interview", labelZh: "A) 在面试中", correct: false },
            { label: "B) In a police report", labelZh: "B) 在警察报告中", correct: false },
            {
              label: "C) With friends discussing a strange situation",
              labelZh: "C) 和朋友讨论奇怪情况",
              correct: true,
            },
            { label: "D) In a formal essay", labelZh: "D) 在正式论文中", correct: false },
          ],
          answer:
            "C only. 'Sus' is very casual and should never be used in formal or serious contexts.",
        },
        {
          id: "p4",
          type: "emotional-intelligence",
          title: "Empathy Response",
          instructions: "Your friend says 'I can't believe he ghosted me after 6 months.' Respond empathetically.",
          instructionsZh: "你的朋友说'我不敢相信他六个月后突然消失。'有同理心地回应。",
          content: "Use appropriate internet slang to show you understand.",
          contentZh: "使用适当的网络俚语表示你理解。",
          answer:
            "Example: 'Fr, that's so messed up. No cap, you deserve way better. Don't let that mess with your rizz - you're awesome.'",
        },
        {
          id: "p5",
          type: "register-comparison",
          title: "Formal vs. Casual",
          instructions: "Rewrite these slang sentences as standard English.",
          instructionsZh: "将这些俚语句子改写为标准英语。",
          content: "1. 'He's simping hard.' 2. 'That's so cap.' 3. 'She has W rizz.'",
          contentZh: "1. '他当舔狗当得很卖力。' 2. '那是假的。' 3. '她很有魅力。'",
          answer:
            "1. 'He's being overly eager to please her.' 2. 'That's a lie/fake.' 3. 'She has excellent charisma/romantic appeal.'",
        },
      ],
      quiz: [
        {
          id: "q1",
          question: "What does 'ghosting' mean?",
          questionZh: "'Ghosting'是什么意思？",
          options: [
            { label: "A) Becoming a ghost for Halloween", labelZh: "A) 万圣节变成鬼", correct: false },
            {
              label: "B) Cutting off all communication without explanation",
              labelZh: "B) 在没有解释的情况下切断所有联系",
              correct: true,
            },
            { label: "C) Playing a video game", labelZh: "C) 玩电子游戏", correct: false },
            { label: "D) Scaring someone", labelZh: "D) 吓唬某人", correct: false },
          ],
          explanation:
            "Ghosting refers to suddenly ending all communication with someone without explanation, common in modern dating.",
          explanationZh: "Ghosting指突然中断与某人的所有联系而不作解释，在现代约会中很常见。",
        },
        {
          id: "q2",
          question: "'No cap' means:",
          questionZh: "'No cap'意思是：",
          options: [
            { label: "A) I'm wearing a hat", labelZh: "A) 我戴着一顶帽子", correct: false },
            { label: "B) No lie / for real / honestly", labelZh: "B) 没说谎/真的/说实话", correct: true },
            { label: "C) I don't have a limit", labelZh: "C) 我没有限制", correct: false },
            { label: "D) Stop talking", labelZh: "D) 别说话", correct: false },
          ],
          explanation: "'No cap' means 'no lie' or 'for real'. It comes from African American Vernacular English.",
          explanationZh: "'No cap'意为'没说谎'或'真的'。它来自非裔美国人白话英语。",
        },
        {
          id: "q3",
          question: "Which slang term is MOST associated with gaming culture?",
          questionZh: "哪个俚语与游戏文化关联最密切？",
          options: [
            { label: "A) Yeet", labelZh: "A) Yeet", correct: false },
            { label: "B) Sus", labelZh: "B) Sus", correct: true },
            { label: "C) Cap", labelZh: "C) Cap", correct: false },
            { label: "D) Simping", labelZh: "D) Simping", correct: false },
          ],
          explanation: "'Sus' was popularized by the game 'Among Us' in 2020, though it existed before.",
          explanationZh: "'Sus'由2020年的游戏'Among Us'推广，尽管它之前就存在。",
        },
        {
          id: "q4",
          question: "If someone says 'He has zero rizz', they mean:",
          questionZh: "如果有人说'He has zero rizz'，意思是：",
          options: [
            { label: "A) He's very charismatic", labelZh: "A) 他非常有魅力", correct: false },
            { label: "B) He has no romantic charm", labelZh: "B) 他没有浪漫魅力", correct: true },
            { label: "C) He's a great gamer", labelZh: "C) 他是个很棒的游戏玩家", correct: false },
            { label: "D) He's very funny", labelZh: "D) 他很有趣", correct: false },
          ],
          explanation:
            "'Rizz' means romantic charisma/charm. 'Zero rizz' means no ability to attract romantic interest.",
          explanationZh: "'Rizz'意为浪漫魅力。'Zero rizz'意为没有吸引浪漫兴趣的能力。",
        },
        {
          id: "q5",
          question: "Which is the CORRECT usage of 'cap'?",
          questionZh: "以下哪项是'cap'的正确用法？",
          options: [
            {
              label: "A) 'No cap, I'm telling the truth.'",
              labelZh: "A) 'No cap, I'm telling the truth.'",
              correct: true,
            },
            {
              label: "B) 'That's a nice cap you're wearing.'",
              labelZh: "B) 'That's a nice cap you're wearing.'",
              correct: false,
            },
            {
              label: "C) 'Cap the bottle tightly.'",
              labelZh: "C) 'Cap the bottle tightly.'",
              correct: false,
            },
            { label: "D) All of the above", labelZh: "D) 以上全部", correct: false },
          ],
          explanation:
            "In slang, 'cap' means 'lie'. 'No cap' means 'no lie'. But 'cap' can also mean 'hat' or 'to cover' in standard English. Context matters.",
          explanationZh:
            "在俚语中，'cap'意为'谎言'。'No cap'意为'没说谎'。但'cap'在标准英语中也可以意为'帽子'或'覆盖'。语境很重要。",
        },
      ],
    },
    {
      id: "casual-connectors",
      title: "Casual Connectors & Fillers",
      description:
        "Common words and phrases that make speech flow naturally. Learn when to use fillers, connectors, and casual markers in everyday conversation.",
      emoji: "💬",
      category: "casual-connectors",
      terms: [
        {
          id: "bet",
          english: "Bet",
          chinese: "一言为定/没问题",
          pinyin: "yī yán wéi dìng / méi wèn tí",
          pronunciation: "bet",
          literalMeaning: "A wager or bet",
          actualMeaning: "Agreement, confirmation, or 'okay'",
          detailsEn:
            "Common in casual speech, especially among young people. Means 'agreed' or 'okay'.",
          detailsZh: "在 casual speech 中很常见，尤其是年轻人之间。意为'同意'或'好的'。",
          intensity: 1,
          safetyLabels: [
            { label: "Very Safe", icon: "✅", settings: ["All settings"] },
          ],
          regionalVariations: [
            { region: "American", usage: "Bet!", note: "Very common" },
            { region: "British", usage: "Bet!", note: "Common" },
            { region: "Australian", usage: "Bet!", note: "Common" },
          ],
          demographics: {
            ageGroup: "Teens and above",
            tone: "Friendly",
            genderNeutral: true,
          },
          nonVerbalCues: {
            facialExpression: "Nod or smile",
            bodyLanguage: "Thumbs up or relaxed posture",
          },
          comparative: {
            commonMistakes: ["Using in formal business settings"],
            saferAlternatives: ["Sure", "Okay", "Agreed", "Sounds good"],
            similarWords: ["Okay", "Sure", "Alright"],
            culturalNotes:
              "Originally from gambling ('I bet'), now means 'agreed' in casual speech.",
          },
          exampleEn: "We meeting at 5? — Bet.",
          exampleZh: "我们5点见面？——一言为定。",
          category: "casual-connectors",
        },
        {
          id: "slaps",
          english: "Slaps",
          chinese: "超棒/好听到爆",
          pinyin: "chāo bàng / hǎo tīng dào bào",
          pronunciation: "slaps",
          literalMeaning: "To hit or slap",
          actualMeaning: "Really good, especially music, food, or experiences",
          detailsEn:
            "Modern slang meaning something is exceptionally good. Popularized by music and social media.",
          detailsZh: "现代俚语，意为某事物非常好。由音乐和社交媒体推广。",
          intensity: 1,
          safetyLabels: [
            { label: "Very Safe", icon: "✅", settings: ["All settings"] },
          ],
          regionalVariations: [
            { region: "American", usage: "This song slaps!", note: "Very common" },
            { region: "British", usage: "This slaps!", note: "Common" },
            { region: "Australian", usage: "This slaps!", note: "Common" },
          ],
          demographics: {
            ageGroup: "Teens and above",
            tone: "Excited",
            genderNeutral: true,
          },
          nonVerbalCues: {
            facialExpression: "Wide eyes or smile",
            bodyLanguage: "Nodding head or bobbing to music",
          },
          comparative: {
            commonMistakes: ["Using for serious or formal contexts"],
            saferAlternatives: ["Great", "Amazing", "Fantastic", "Really good"],
            similarWords: ["Fire", "Lit", "Dope"],
            culturalNotes:
              "Originated in music culture around 2015-2016. Now used for food, fashion, and experiences too.",
          },
          exampleEn: "This new album slaps! Been on repeat all day.",
          exampleZh: "这张新专辑超棒！今天一直在循环播放。",
          category: "casual-connectors",
        },
        {
          id: "whack",
          english: "Whack",
          chinese: "糟糕的/不行的",
          pinyin: "zāo gāo de / bù xíng de",
          pronunciation: "whak",
          literalMeaning: "To hit or strike",
          actualMeaning: "Bad, terrible, or unsatisfactory",
          detailsEn: "Opposite of 'slaps.' Means something is bad or disappointing.",
          detailsZh: "'Slaps'的反义词。意为某事物不好或令人失望。",
          intensity: 1,
          safetyLabels: [
            { label: "Very Safe", icon: "✅", settings: ["All settings"] },
          ],
          regionalVariations: [
            { region: "American", usage: "That movie was whack.", note: "Common" },
            { region: "British", usage: "That's whack.", note: "Common" },
            { region: "Australian", usage: "That's whack.", note: "Common" },
          ],
          demographics: {
            ageGroup: "Teens and above",
            tone: "Disappointed",
            genderNeutral: true,
          },
          nonVerbalCues: {
            facialExpression: "Frown or disappointed look",
            bodyLanguage: "Head shake or shrug",
          },
          comparative: {
            commonMistakes: ["Using in formal contexts"],
            saferAlternatives: ["Bad", "Terrible", "Disappointing", "Not good"],
            similarWords: ["Lame", "Wack", "Trash"],
            culturalNotes:
              "Common in casual speech. 'Whack' means bad, 'slaps' means good. They're opposites.",
          },
          exampleEn: "The food at that restaurant was whack.",
          exampleZh: "那家餐厅的食物很糟糕。",
          category: "casual-connectors",
        },
      ],
      dialogues: [
        {
          id: "d1",
          context: "Friends discussing a new song",
          lines: [
            {
              speaker: "Casey",
              english: "Have you heard the new track?",
              chinese: "你听新歌了吗？",
              pinyin: "nǐ tīng xīn gē le ma?",
            },
            {
              speaker: "Morgan",
              english: "Yeah, it slaps! Been on repeat all day.",
              chinese: "听了，超棒！今天一直在循环播放。",
              pinyin: "tīng le, chāo bàng! jīn tiān yī zhí zài xún huán bō fàng.",
            },
            {
              speaker: "Casey",
              english: "Right? The beat is insane.",
              chinese: "是吧？节奏太疯狂了。",
              pinyin: "shì ba? jié zòu tài fēng kuáng le.",
            },
          ],
          comprehensionNote:
            "Shows how 'slaps' is used naturally to express enthusiasm about music.",
        },
        {
          id: "d2",
          context: "Friends discussing a bad movie",
          lines: [
            {
              speaker: "Taylor",
              english: "Did you see that new action movie?",
              chinese: "你看那部新动作片了吗？",
              pinyin: "nǐ kàn nà bù xīn dòng zuò piàn le ma?",
            },
            {
              speaker: "Jordan",
              english: "Yeah, it was so whack. The plot made no sense.",
              chinese: "看了，太糟糕了。剧情完全说不通。",
              pinyin: "kàn le, tài zāo gāo le. ju qíng wán quán shuō bù tōng.",
            },
            {
              speaker: "Taylor",
              english: "I know, right? Waste of money.",
              chinese: "是吧？浪费钱。",
              pinyin: "shì ba? làng fèi qián.",
            },
          ],
          comprehensionNote:
            "Shows how 'whack' is used to express disappointment. It's the opposite of 'slaps'.",
        },
      ],
      practiceDrills: [
        {
          id: "p1",
          type: "register-comparison",
          title: "Formal vs. Casual",
          instructions: "Rewrite these sentences using casual connectors.",
          instructionsZh: "使用 casual connectors 改写这些句子。",
          content: "1. 'That concert was amazing.' 2. 'I agree with your plan.' 3. 'The food was terrible.'",
          contentZh: "1. '那场演唱会太精彩了。' 2. '我同意你的计划。' 3. '那食物很糟糕。'",
          answer:
            "1. 'That concert slaps!' 2. 'Bet, let's do it.' 3. 'The food was whack.'",
          answerZh: "1. '那场演唱会超棒！' 2. '一言为定，就这么办。' 3. '那食物很糟糕。'",
        },
        {
          id: "p2",
          type: "situational-judgment",
          title: "When to Use",
          instructions: "When is it appropriate to say 'slaps'?",
          instructionsZh: "什么时候适合说'slaps'？",
          content: "A) At a business meeting B) With friends discussing music C) In a formal essay D) With a stranger",
          contentZh: "A) 在商务会议上 B) 和朋友讨论音乐 C) 在正式论文中 D) 和陌生人",
          options: [
            { label: "A) At a business meeting", labelZh: "A) 在商务会议上", correct: false },
            {
              label: "B) With friends discussing music",
              labelZh: "B) 和朋友讨论音乐",
              correct: true,
            },
            { label: "C) In a formal essay", labelZh: "C) 在正式论文中", correct: false },
            { label: "D) With a stranger", labelZh: "D) 和陌生人", correct: false },
          ],
          answer:
            "B only. 'Slaps' is very casual and should only be used with friends in informal settings.",
          answerZh: "仅B。'Slaps'非常 casual，只应在非正式场合和朋友一起使用。",
        },
      ],
      quiz: [
        {
          id: "q1",
          question: "What does 'slaps' mean?",
          questionZh: "'Slaps'是什么意思？",
          options: [
            { label: "A) To hit someone", labelZh: "A) 打某人", correct: false },
            { label: "B) Really good", labelZh: "B) 超棒", correct: true },
            { label: "C) To agree", labelZh: "C) 同意", correct: false },
            { label: "D) Bad or terrible", labelZh: "D) 糟糕的", correct: false },
          ],
          explanation:
            "'Slaps' means something is really good, especially music, food, or experiences. It's modern slang from the 2010s.",
          explanationZh: "'Slaps'意为某事物非常好，尤其是音乐、食物或体验。它是2010年代的现代俚语。",
        },
        {
          id: "q2",
          question: "What does 'whack' mean?",
          questionZh: "'Whack'是什么意思？",
          options: [
            { label: "A) To hit someone", labelZh: "A) 打某人", correct: false },
            { label: "B) Really good", labelZh: "B) 超棒", correct: false },
            { label: "C) Bad or terrible", labelZh: "C) 糟糕的", correct: true },
            { label: "D) To agree", labelZh: "D) 同意", correct: false },
          ],
          explanation:
            "'Whack' means something is bad, terrible, or disappointing. It's the opposite of 'slaps.'",
          explanationZh: "'Whack'意为某事物糟糕、糟糕或令人失望。它是'slaps'的反义词。",
        },
      ],
    },
    {
      id: "street-slang",
      title: "Street Slang & Attitude",
      description:
        "Common street slang and expressions with attitude. Learn when these are cool among friends and when they can cause trouble.",
      emoji: "😎",
      category: "street-slang",
      terms: [
        {
          id: "deadass",
          english: "Deadass",
          chinese: "说真的/真的假的",
          pinyin: "shuō zhēn de / zhēn de jiǎ de",
          pronunciation: "ded-as",
          literalMeaning: "Dead ass (vulgar origin)",
          actualMeaning: "Seriously / I'm not joking / For real",
          detailsEn:
            "Common in casual speech, especially among young people. Used to emphasize that you're serious or to ask if someone is serious.",
          detailsZh: "在 casual speech 中很常见，尤其是年轻人之间。用于强调你是认真的，或问某人是否认真。",
          intensity: 2,
          safetyLabels: [
            { label: "Mostly Safe", icon: "✅", settings: ["Casual", "Friends"] },
            { label: "Caution", icon: "⚠️", settings: ["Formal settings"] },
          ],
          regionalVariations: [
            { region: "American", usage: "Deadass?", note: "Very common" },
            { region: "British", usage: "Deadass?", note: "Less common" },
            { region: "Australian", usage: "Deadass?", note: "Uncommon" },
          ],
          demographics: {
            ageGroup: "Teens and above",
            tone: "Serious",
            genderNeutral: true,
          },
          nonVerbalCues: {
            facialExpression: "Serious face or raised eyebrows",
            bodyLanguage: "Leaning forward or direct eye contact",
          },
          comparative: {
            commonMistakes: ["Using in formal settings", "Using with strangers"],
            saferAlternatives: ["Really?", "Are you serious?", "For real?", "No way"],
            similarWords: ["Fr", "No cap", "Deadass"],
            culturalNotes:
              "Originated in African American Vernacular English (AAVE). Now used widely but still associated with AAVE.",
          },
          exampleEn: "Deadass? You're going to travel the world?",
          exampleZh: "说真的？你要去环游世界？",
          category: "street-slang",
        },
        {
          id: "bussin",
          english: "Bussin'",
          chinese: "好吃到爆/棒极了",
          pinyin: "hǎo chī dào bào / bàng jí le",
          pronunciation: "buh-sin",
          literalMeaning: "Bussing (phonetically shifted)",
          actualMeaning: "Really good, especially food",
          detailsEn:
            "Popular slang for food that tastes amazing. Originated in African American communities.",
          detailsZh: "形容食物非常好吃的流行俚语。起源于非裔美国人社区。",
          intensity: 1,
          safetyLabels: [
            { label: "Very Safe", icon: "✅", settings: ["All settings"] },
          ],
          regionalVariations: [
            { region: "American", usage: "This food bussin'!", note: "Very common" },
            { region: "British", usage: "This bussin'!", note: "Common" },
            { region: "Australian", usage: "This bussin'!", note: "Common" },
          ],
          demographics: {
            ageGroup: "Teens and above",
            tone: "Excited",
            genderNeutral: true,
          },
          nonVerbalCues: {
            facialExpression: "Wide eyes or smile",
            bodyLanguage: "Nodding while eating",
          },
          comparative: {
            commonMistakes: ["Using for non-food contexts"],
            saferAlternatives: ["Delicious", "Amazing", "Great", "Fantastic"],
            similarWords: ["Slaps", "Fire", "Lit"],
            culturalNotes:
              "Originated in African American Vernacular English. Now widely used, especially for food.",
          },
          exampleEn: "This mac and cheese is bussin'!",
          exampleZh: "这通心粉和奶酪好吃到爆！",
          category: "street-slang",
        },
        {
          id: "flex",
          english: "Flex",
          chinese: "炫耀/展示",
          pinyin: "xuàn yào / zhǎn shì",
          pronunciation: "fleks",
          literalMeaning: "To bend or contract (muscle)",
          actualMeaning: "To show off or display something proudly",
          detailsEn:
            "Common in casual speech. Can be positive (sharing achievements) or negative (showing off).",
          detailsZh: "在 casual speech 中很常见。可以是积极的（分享成就）或消极的（炫耀）。",
          intensity: 1,
          safetyLabels: [
            { label: "Mostly Safe", icon: "✅", settings: ["Casual", "Friends"] },
            { label: "Caution", icon: "⚠️", settings: ["Formal settings"] },
          ],
          regionalVariations: [
            { region: "American", usage: "He's always flexing his new car.", note: "Very common" },
            { region: "British", usage: "He's flexing his new car.", note: "Common" },
            { region: "Australian", usage: "He's flexing his new car.", note: "Common" },
          ],
          demographics: {
            ageGroup: "Teens and above",
            tone: "Playful",
            genderNeutral: true,
          },
          nonVerbalCues: {
            facialExpression: "Proud smile or smirk",
            bodyLanguage: "Showing off the object or striking a pose",
          },
          comparative: {
            commonMistakes: ["Using in formal settings", "Using to describe others negatively without context"],
            saferAlternatives: ["Show off", "Display", "Share", "Be proud of"],
            similarWords: ["Show off", "Showboat", "Humblebrag"],
            culturalNotes:
              "Can be positive or negative depending on context. 'Flex' alone is often negative, but 'flex your skills' can be positive.",
          },
          exampleEn: "He's just flexing his new watch.",
          exampleZh: "他只是在炫耀他的新手表。",
          category: "street-slang",
        },
      ],
      dialogues: [
        {
          id: "d1",
          context: "Friends discussing someone showing off",
          lines: [
            {
              speaker: "Casey",
              english: "Did you see Jake's new car?",
              chinese: "你看到Jake的新车了吗？",
              pinyin: "nǐ kàn dào Jake de xīn chē le ma?",
            },
            {
              speaker: "Morgan",
              english: "Yeah, he's been flexing it all week.",
              chinese: "看了，他整个星期都在炫耀。",
              pinyin: "kàn le, tā zhěng gè xīng qī dōu zài xuàn yào.",
            },
            {
              speaker: "Casey",
              english: "I know, right? Just let him have his moment.",
              chinese: "是吧？就让他得意一下吧。",
              pinyin: "shì ba? jiù ràng tā dé yì yī xià ba.",
            },
          ],
          comprehensionNote:
            "Shows how 'flex' is used to describe showing off. It can be playful or slightly negative depending on tone.",
        },
        {
          id: "d2",
          context: "Friends talking about good food",
          lines: [
            {
              speaker: "Taylor",
              english: "Try the wings! They're bussin'!",
              chinese: "尝尝鸡翅！好吃到爆！",
              pinyin: "cháng chang jī chì! hǎo chī dào bào!",
            },
            {
              speaker: "Jordan",
              english: "Wow, you're right. This is amazing.",
              chinese: "哇，你说得对。这太棒了。",
              pinyin: "wa, nǐ shuō de duì. zhè tài bàng le.",
            },
            {
              speaker: "Taylor",
              english: "Told you! Best wings in the city.",
              chinese: "跟你说过了！城里最好的鸡翅。",
              pinyin: "gēn nǐ shuō guò le! chéng lǐ zuì hǎo de jī chì.",
            },
          ],
          comprehensionNote:
            "Shows how 'bussin'' is used for food. It's very positive and enthusiastic.",
        },
        {
          id: "d3",
          context: "Friends reacting to surprising news",
          lines: [
            {
              speaker: "Riley",
              english: "I'm actually moving to Japan next month.",
              chinese: "我下个月真的要搬到日本去了。",
              pinyin: "wǒ xià gè yuè zhēn de yào bān dào rì běn qù le.",
            },
            {
              speaker: "Sam",
              english: "Deadass? That's wild!",
              chinese: "说真的？太疯狂了！",
              pinyin: "shuō zhēn de? tài fēng kuáng le!",
            },
            {
              speaker: "Riley",
              english: "Deadass. I already quit my job.",
              chinese: "说真的。我已经辞职了。",
              pinyin: "shuō zhēn de. wǒ yǐ jīng cí zhí le.",
            },
          ],
          comprehensionNote:
            "Shows how 'deadass' is used both to ask for confirmation and to confirm something seriously.",
        },
      ],
      practiceDrills: [
        {
          id: "p1",
          type: "register-comparison",
          title: "Formal vs. Casual",
          instructions: "Rewrite these sentences using street slang.",
          instructionsZh: "使用 street slang 改写这些句子。",
          content: "1. 'He is showing off his new phone.' 2. 'This food is delicious.' 3. 'Are you serious?'",
          contentZh: "1. '他在炫耀他的新手机。' 2. '这食物很美味。' 3. '你是认真的吗？'",
          answer:
            "1. 'He's flexing his new phone.' 2. 'This food bussin'!' 3. 'Deadass?'",
          answerZh: "1. '他在炫耀他的新手机。' 2. '这食物好吃到爆！' 3. '说真的？'",
        },
        {
          id: "p2",
          type: "situational-judgment",
          title: "When to Use",
          instructions: "When is it appropriate to say 'bussin''?",
          instructionsZh: "什么时候适合说'bussin''？",
          content: "A) At a fancy restaurant with your boss B) With friends eating street food C) In a job interview D) In a formal essay",
          contentZh: "A) 在高级餐厅和老板一起 B) 和朋友吃街头食品 C) 在面试中 D) 在正式论文中",
          options: [
            { label: "A) At a fancy restaurant with your boss", labelZh: "A) 在高级餐厅和老板一起", correct: false },
            {
              label: "B) With friends eating street food",
              labelZh: "B) 和朋友吃街头食品",
              correct: true,
            },
            { label: "C) In a job interview", labelZh: "C) 在面试中", correct: false },
            { label: "D) In a formal essay", labelZh: "D) 在正式论文中", correct: false },
          ],
          answer:
            "B only. 'Bussin'' is very casual and should only be used with friends in informal settings.",
          answerZh: "仅B。'Bussin''非常 casual，只应在非正式场合和朋友一起使用。",
        },
        {
          id: "p3",
          type: "emotional-intelligence",
          title: "Empathy Response",
          instructions: "Your friend says 'I can't believe I failed that test.' Respond appropriately.",
          instructionsZh: "你的朋友说'我不敢相信我考试不及格。'恰当地回应。",
          content: "Use street slang to show you understand and care.",
          contentZh: "使用 street slang 表示你理解并关心。",
          answer:
            "Example: 'Deadass? That sucks. But you'll pass next time — I know it. Want to grab food? I'll treat.'",
          answerZh: "示例：'说真的？太糟了。但你下次会过的——我知道。想去吃东西吗？我请客。'",
        },
      ],
      quiz: [
        {
          id: "q1",
          question: "What does 'deadass' mean?",
          questionZh: "'Deadass'是什么意思？",
          options: [
            { label: "A) To be extremely tired", labelZh: "A) 非常累", correct: false },
            { label: "B) Seriously / For real", labelZh: "B) 说真的/真的", correct: true },
            { label: "C) To be very angry", labelZh: "C) 非常生气", correct: false },
            { label: "D) To be excited", labelZh: "D) 很兴奋", correct: false },
          ],
          explanation:
            "'Deadass' means 'seriously' or 'for real.' It's used to emphasize that you're being truthful or to ask if someone is serious.",
          explanationZh: "'Deadass'意为'说真的'或'真的'。用于强调你是认真的，或问某人是否认真。",
        },
        {
          id: "q2",
          question: "What does 'bussin'' mean?",
          questionZh: "'Bussin''是什么意思？",
          options: [
            { label: "A) Really good (especially food)", labelZh: "A) 超棒（尤其是食物）", correct: true },
            { label: "B) To be very busy", labelZh: "B) 非常忙", correct: false },
            { label: "C) To show off", labelZh: "C) 炫耀", correct: false },
            { label: "D) To be serious", labelZh: "D) 认真", correct: false },
          ],
          explanation:
            "'Bussin'' means something is really good, especially food. It originated in African American Vernacular English.",
          explanationZh: "'Bussin''意为某事物非常好，尤其是食物。它起源于非裔美国人白话英语。",
        },
        {
          id: "q3",
          question: "What does 'flex' mean?",
          questionZh: "'Flex'是什么意思？",
          options: [
            { label: "A) To show off", labelZh: "A) 炫耀", correct: true },
            { label: "B) To be flexible", labelZh: "B) 灵活", correct: false },
            { label: "C) To exercise", labelZh: "C) 锻炼", correct: false },
            { label: "D) To relax", labelZh: "D) 放松", correct: false },
          ],
          explanation:
            "'Flex' means to show off or display something proudly. It can be positive or negative depending on context.",
          explanationZh: "'Flex'意为炫耀或自豪地展示某物。根据语境可以是积极的或消极的。",
        },
      ],
    },
  ],
};

export default slangModule;
