export type SlangLevel = "safe" | "internet" | "street" | "rough";

export interface SlangItem {
  id: string;
  word: string;
  chinese: string;
  pinyin: string;
  meaning: string;
  example: string;
  exampleZh: string;
  whoSaysIt: string;
  ageGroup: string;
  region: string;
  isOffensive: boolean;
  offensiveLevel: number;
  safeAlternatives: string[];
  conversation: {
    speaker: string;
    line: string;
  }[];
  chineseTranslation: {
    speaker: string;
    line: string;
  }[];
  culturalNotes: string;
  warning?: string;
}

export interface SlangLevelData {
  level: SlangLevel;
  title: string;
  description: string;
  emoji: string;
  color: string;
  items: SlangItem[];
}

export const slangAcademy: SlangLevelData[] = [
  {
    level: "safe",
    title: "Safe Slang",
    description: "Everyday casual expressions that are widely accepted and safe to use in most situations.",
    emoji: "😊",
    color: "from-green-400 to-emerald-400",
    items: [
      {
        id: "safe-1",
        word: "No worries",
        chinese: "没关系",
        pinyin: "méi guān xi",
        meaning: "It's okay / You're welcome / No problem",
        example: "Sorry I'm late! — No worries, we just got here.",
        exampleZh: "对不起我迟到了！——没关系，我们刚到。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["No problem", "It's okay", "Don't worry about it", "All good"],
        conversation: [
          { speaker: "Amy", line: "Sorry I'm late!" },
          { speaker: "John", line: "No worries, we just got here." },
          { speaker: "Amy", line: "Thanks for being understanding." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "对不起我迟到了！" },
          { speaker: "John", line: "没关系，我们刚到。" },
          { speaker: "Amy", line: "谢谢你的理解。" }
        ],
        culturalNotes: "'No worries' is uniquely Australian but now understood everywhere. It's the most common response to apologies in casual speech."
      },
      {
        id: "safe-2",
        word: "My bad",
        chinese: "我的错",
        pinyin: "wǒ de cuò",
        meaning: "My mistake / I'm sorry",
        example: "I forgot to text you back. My bad!",
        exampleZh: "我忘了回你短信。我的错！",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "American, Australian, British",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["My mistake", "I'm sorry", "I apologize", "That was my fault"],
        conversation: [
          { speaker: "Tom", line: "You were supposed to bring the tickets!" },
          { speaker: "Lisa", line: "Oh no, my bad. I totally forgot." },
          { speaker: "Tom", line: "It happens. Let's just buy new ones." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "你该带票的！" },
          { speaker: "Lisa", line: "哦不，我的错。我完全忘了。" },
          { speaker: "Tom", line: "常有的事。我们买新的吧。" }
        ],
        culturalNotes: "'My bad' is American slang that went mainstream. It's casual but acceptable in most situations."
      },
      {
        id: "safe-3",
        word: "No way",
        chinese: "不会吧/真的吗",
        pinyin: "bú huì ba / zhēn de ma",
        meaning: "Really? / That's surprising / I don't believe it",
        example: "No way! I won the lottery!",
        exampleZh: "不会吧！我中彩票了！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Really?", "Are you serious?", "No kidding"],
        conversation: [
          { speaker: "Amy", line: "I just got a new job!" },
          { speaker: "John", line: "No way! Congratulations!" },
          { speaker: "Amy", line: "Thanks! I'm so excited." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我刚得到一份新工作！" },
          { speaker: "John", line: "不会吧！恭喜！" },
          { speaker: "Amy", line: "谢谢！我很兴奋。" }
        ],
        culturalNotes: "'No way' can express surprise or disbelief. It's very common in casual speech."
      },
      {
        id: "safe-4",
        word: "Fair enough",
        chinese: "有道理/好吧",
        pinyin: "yǒu dào lǐ / hǎo ba",
        meaning: "I understand your point / That's reasonable",
        example: "I don't like it, but fair enough.",
        exampleZh: "我不喜欢，但你说得有道理。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["I see your point", "That's reasonable", "I understand"],
        conversation: [
          { speaker: "Tom", line: "I think we should leave early." },
          { speaker: "Lisa", line: "I'd rather stay longer, but fair enough." },
          { speaker: "Tom", line: "We can always come back next time." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "我觉得我们应该早点走。" },
          { speaker: "Lisa", line: "我宁愿多待一会儿，但你说得有道理。" },
          { speaker: "Tom", line: "我们下次可以再来。" }
        ],
        culturalNotes: "'Fair enough' is a very common way to acknowledge someone else's point even if you disagree."
      }
    ]
  },
  {
    level: "internet",
    title: "Internet English",
    description: "Texting, social media, and gaming slang that has entered everyday speech.",
    emoji: "📱",
    color: "from-blue-400 to-cyan-400",
    items: [
      {
        id: "internet-1",
        word: "Ghost",
        chinese: "突然消失",
        pinyin: "tū rán xiāo shī",
        meaning: "To cut off all communication without explanation",
        example: "We went on three dates and then he ghosted me.",
        exampleZh: "我们约会了三次，然后他就突然不回我消息了。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-35",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Stopped replying", "Cut off contact", "Stopped messaging"],
        conversation: [
          { speaker: "Casey", line: "He's been ghosting me for a week." },
          { speaker: "Morgan", line: "That's so rude. Just block him." },
          { speaker: "Casey", line: "I know, but it's so confusing." }
        ],
        chineseTranslation: [
          { speaker: "Casey", line: "他已经一周不回我消息了。" },
          { speaker: "Morgan", line: "太粗鲁了。直接拉黑他吧。" },
          { speaker: "Casey", line: "我知道，但真的很困惑。" }
        ],
        culturalNotes: "Originated from online dating culture. Now used in all digital communication contexts."
      },
      {
        id: "internet-2",
        word: "Sus",
        chinese: "可疑的",
        pinyin: "kě yí de",
        meaning: "Suspicious, sketchy, or questionable",
        example: "He said he was working late but I saw him at the movies. That's sus.",
        exampleZh: "他说他在加班，但我看到他在电影院。这很可疑。",
        whoSaysIt: "Gamers, teens, young adults",
        ageGroup: "13-30",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Suspicious", "Sketchy", "Questionable", "Dodgy"],
        conversation: [
          { speaker: "Sam", line: "That deal seems too good to be true." },
          { speaker: "Riley", line: "Yeah, it's kinda sus." },
          { speaker: "Sam", line: "Let's do some research first." }
        ],
        chineseTranslation: [
          { speaker: "Sam", line: "那笔交易好得令人怀疑。" },
          { speaker: "Riley", line: "是的，有点可疑。" },
          { speaker: "Sam", line: "我们先做点调查吧。" }
        ],
        culturalNotes: "Popularized by the game 'Among Us' in 2020. Shortened from 'suspicious'."
      },
      {
        id: "internet-3",
        word: "GOAT",
        chinese: "史上最伟大的",
        pinyin: "shǐ shàng zuì wěi dà de",
        meaning: "Greatest Of All Time",
        example: "Messi is the GOAT of football.",
        exampleZh: "梅西是足球史上最伟大的球员。",
        whoSaysIt: "Sports fans, social media users, teens",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["The best ever", "Greatest of all time", "Legend"],
        conversation: [
          { speaker: "Jake", line: "Did you see that match? LeBron is the GOAT." },
          { speaker: "Mia", line: "I think Jordan is better, but respect." },
          { speaker: "Jake", line: "We can agree to disagree." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "你看到那场比赛了吗？勒布朗是史上最伟大的。" },
          { speaker: "Mia", line: "我觉得乔丹更棒，但respect。" },
          { speaker: "Jake", line: "我们求同存异吧。" }
        ],
        culturalNotes: "Very common in sports and social media. Written in all caps."
      },
      {
        id: "internet-4",
        word: "FOMO",
        chinese: "错失恐惧症",
        pinyin: "cuò shī kǒng jù zhèng",
        meaning: "Fear Of Missing Out — anxiety that you're missing out on something others are doing",
        example: "I went to the party even though I was tired because of FOMO.",
        exampleZh: "我尽管很累还是去了派对，因为怕错过。",
        whoSaysIt: "Everyone, especially young adults",
        ageGroup: "Teens to 40s",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Fear of missing out", "Not wanting to miss out", "Keeping up with others"],
        conversation: [
          { speaker: "Lisa", line: "I'm exhausted but I have to go to this concert." },
          { speaker: "Tom", line: "FOMO?" },
          { speaker: "Lisa", line: "Guilty. I can't stand the thought of missing it." }
        ],
        chineseTranslation: [
          { speaker: "Lisa", line: "我累死了，但必须去看这个演唱会。" },
          { speaker: "Tom", line: "怕错过？" },
          { speaker: "Lisa", line: "罪有应得。我受不了错过的想法。" }
        ],
        culturalNotes: "Very common in social media and modern life. Often used as a noun."
      }
    ]
  },
  {
    level: "street",
    title: "Street English",
    description: "Expressions you'll hear on the street, in movies, and among young people. Learn who says them and when.",
    emoji: "🏙️",
    color: "from-orange-400 to-red-400",
    items: [
      {
        id: "street-1",
        word: "No cap",
        chinese: "真的/没骗你",
        pinyin: "zhēn de / méi piāo nǐ",
        meaning: "No lie / For real / Honestly",
        example: "No cap, I studied for 10 hours for that test.",
        exampleZh: "真的，我为那次考试学习了10个小时。",
        whoSaysIt: "Teens, young adults, hip-hop culture",
        ageGroup: "13-30",
        region: "American (originally AAVE), now global",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Honestly", "For real", "I promise", "Truth"],
        conversation: [
          { speaker: "Jake", line: "No cap, that was the best concert ever." },
          { speaker: "Mia", line: "I know! The energy was insane." },
          { speaker: "Jake", line: "We have to go to their next show." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "真的，那是史上最棒的演唱会。" },
          { speaker: "Mia", line: "我知道！现场气氛太疯狂了。" },
          { speaker: "Jake", line: "我们一定要去看他们的下一场演出。" }
        ],
        culturalNotes: "Originated in African American Vernacular English (AAVE) and hip-hop culture. Important to recognize its origins and use respectfully.",
        warning: "Be aware of AAVE origins. Don't mock AAVE while using its slang."
      },
      {
        id: "street-2",
        word: "Salty",
        chinese: "恼怒的/酸的",
        pinyin: "nǎo nǎo de / suān de",
        meaning: "Bitter, annoyed, or upset, especially about a small defeat",
        example: "He's still salty about losing the game yesterday.",
        exampleZh: "他还在为昨天输掉比赛而恼怒。",
        whoSaysIt: "Teens, young adults, gamers",
        ageGroup: "13-30",
        region: "American, Australian, British",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Annoyed", "Bitter", "Upset", "Frustrated"],
        conversation: [
          { speaker: "Jake", line: "You're still mad I beat you?" },
          { speaker: "Mia", line: "I'm not mad, just a little salty." },
          { speaker: "Jake", line: "Rematch? I'll go easy on you." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "你还在为我赢了你而生气吗？" },
          { speaker: "Mia", line: "我没生气，只是有点恼怒。" },
          { speaker: "Jake", line: "再来一局？我会让着你的。" }
        ],
        culturalNotes: "Common in gaming and competitive contexts. Can be playful among friends."
      },
      {
        id: "street-3",
        word: "Clap back",
        chinese: "反驳/回击",
        pinyin: "fǎn bó / huí jī",
        meaning: "To respond sharply or win an argument with a comeback",
        example: "She clapped back so hard he couldn't say anything else.",
        exampleZh: "她反驳得太厉害，他再也说不出什么了。",
        whoSaysIt: "Teens, young adults, social media users",
        ageGroup: "13-35",
        region: "American, British",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Comeback", "Sharp reply", "Witty response", "Retort"],
        conversation: [
          { speaker: "Tom", line: "You're not good enough for this team." },
          { speaker: "Lisa", line: "Says the guy who missed every shot yesterday. Clap back." },
          { speaker: "Tom", line: "Okay, that was fair." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "你不够好进这个队。" },
          { speaker: "Lisa", line: "那个昨天每次都投丢的人这么说。反驳。" },
          { speaker: "Tom", line: "好吧，你说得对。" }
        ],
        culturalNotes: "Popularized by social media and hip-hop. A 'clap back' is a sharp, often public, response to criticism."
      }
    ]
  },
  {
    level: "rough",
    title: "Rough English",
    description: "Strong language that you need to understand but should use with extreme caution. Learn when it's rude, when it's bullying, and when it's acceptable among friends.",
    emoji: "⚠️",
    color: "from-red-400 to-rose-400",
    items: [
      {
        id: "rough-1",
        word: "Shut up",
        chinese: "闭嘴",
        pinyin: "bì zuǐ",
        meaning: "Be quiet / Stop talking",
        example: "Oh my god, shut up! That's amazing!",
        exampleZh: "哦我的天，闭嘴！那太棒了！",
        whoSaysIt: "Everyone, but tone matters hugely",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 3,
        safeAlternatives: ["Be quiet", "Stop talking", "Quiet please", "Hang on"],
        conversation: [
          { speaker: "Emma", line: "You won't believe what happened..." },
          { speaker: "Jake", line: "Oh my god, shut up! That's amazing!" },
          { speaker: "Emma", line: "I know! Can you believe it?" }
        ],
        chineseTranslation: [
          { speaker: "Emma", line: "你绝对不会相信发生了什么..." },
          { speaker: "Jake", line: "哦我的天，闭嘴！那太棒了！" },
          { speaker: "Emma", line: "我知道！你能相信吗？" }
        ],
        culturalNotes: "Among friends, 'shut up' can mean 'wow, that's shocking/exciting!' Never use with strangers, superiors, or in formal settings.",
        warning: "WARNING: 'Shut up' is rude when used literally. Among friends with excited tone, it can mean 'wow!' When in doubt, don't use it."
      },
      {
        id: "rough-2",
        word: "What the heck?",
        chinese: "搞什么鬼？",
        pinyin: "gǎ shén me guǐ?",
        meaning: "Expression of surprise or frustration (mild)",
        example: "What the heck? I just parked here!",
        exampleZh: "搞什么鬼？我刚刚停在这的！",
        whoSaysIt: "Everyone, including parents around children",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["What on earth?", "What's going on?", "Really?"],
        conversation: [
          { speaker: "Tom", line: "What the heck? My phone just died." },
          { speaker: "Lisa", line: "Did you charge it last night?" },
          { speaker: "Tom", line: "I thought I did. Ugh, this is the worst." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "搞什么鬼？我手机刚没电了。" },
          { speaker: "Lisa", line: "你昨晚充电了吗？" },
          { speaker: "Tom", line: "我以为充了。唉，太糟了。" }
        ],
        culturalNotes: "'Heck' is a family-friendly alternative to 'hell'. Safe for all ages."
      },
      {
        id: "rough-3",
        word: "Freaking",
        chinese: "该死的/该死的",
        pinyin: "gāi sǐ de",
        meaning: "Intensifier for frustration (mild profanity)",
        example: "Where are my freaking keys?",
        exampleZh: "我该死的钥匙在哪？",
        whoSaysIt: "Teens, young adults",
        ageGroup: "Teens and above",
        region: "American, Australian",
        isOffensive: true,
        offensiveLevel: 2,
        safeAlternatives: ["Darn", "Dang", "Flipping", "Shoot"],
        conversation: [
          { speaker: "Lisa", line: "I can't find my freaking charger." },
          { speaker: "Tom", line: "Did you check your bag?" },
          { speaker: "Lisa", line: "Yes! This is so frustrating." }
        ],
        chineseTranslation: [
          { speaker: "Lisa", line: "我找不到我该死的充电器了。" },
          { speaker: "Tom", line: "你检查过你的包了吗？" },
          { speaker: "Lisa", line: "检查过了！太令人沮丧了。" }
        ],
        culturalNotes: "Milder than 'f***ing' but still considered profanity by some. Common in casual speech."
      }
    ]
  }
];

export default slangAcademy;
