import { SlangLevel, SlangItem, SlangLevelData } from "@/types/slang-module";

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
      },
      {
        id: "safe-5",
        word: "No biggie",
        chinese: "没什么大不了的",
        pinyin: "méi shén me dà bù liǎo de",
        meaning: "No problem / It's not a big deal",
        example: "Sorry I'm late! — No biggie.",
        exampleZh: "对不起我迟到了！——没什么大不了的。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["No problem", "It's okay", "Don't worry about it", "No worries"],
        conversation: [
          { speaker: "Amy", line: "I'm sorry I forgot your birthday." },
          { speaker: "John", line: "No biggie, let's celebrate this weekend instead." },
          { speaker: "Amy", line: "You're the best. Dinner is on me!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "对不起我忘了你的生日。" },
          { speaker: "John", line: "没什么大不了的，我们这周末再庆祝吧。" },
          { speaker: "Amy", line: "你真好。我请客吃饭！" }
        ],
        culturalNotes: "'No biggie' is casual American slang for 'no problem.' It's very common in the US and now understood everywhere."
      },
      {
        id: "safe-6",
        word: "Hang out",
        chinese: "闲逛/出去玩",
        pinyin: "xián guàng / chū qù wán",
        meaning: "Spend time together casually",
        example: "Do you want to hang out after school?",
        exampleZh: "放学后想一起玩吗？",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Spend time together", "Meet up", "Get together", "Hang"],
        conversation: [
          { speaker: "Lisa", line: "We should hang out sometime." },
          { speaker: "Tom", line: "Sure! How about this weekend?" },
          { speaker: "Lisa", line: "Perfect. I'll text you the details." }
        ],
        chineseTranslation: [
          { speaker: "Lisa", line: "我们 sometime 一起玩吧。" },
          { speaker: "Tom", line: "好啊！这周末怎么样？" },
          { speaker: "Lisa", line: "完美。我会发信息给你详情。" }
        ],
        culturalNotes: "'Hang out' is the standard phrase for casual time with friends. It has no romantic implication unless context suggests otherwise."
      },
      {
        id: "safe-7",
        word: "Chill",
        chinese: "放松/冷静",
        pinyin: "fàng sōng / lěng jìng",
        meaning: "Relax / Calm down / Casual and relaxed",
        example: "Just chill, it's not a big deal.",
        exampleZh: "放松点，没什么大不了的。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Relax", "Calm down", "Take it easy", "Be cool"],
        conversation: [
          { speaker: "Amy", line: "I'm so stressed about the exam." },
          { speaker: "John", line: "Chill, you've studied hard." },
          { speaker: "Amy", line: "I know, but I still feel nervous." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我考试压力好大。" },
          { speaker: "John", line: "放松，你已经努力复习了。" },
          { speaker: "Amy", line: "我知道，但我还是紧张。" }
        ],
        culturalNotes: "'Chill' can mean 'relax' or describe a relaxed person/ situation. 'Chill out' means 'calm down.' Very common in casual speech."
      },
      {
        id: "safe-8",
        word: "Vibe",
        chinese: "氛围/感觉",
        pinyin: "fēn wéi / gǎn jué",
        meaning: "The atmosphere or feeling of a place/situation",
        example: "This coffee shop has good vibes.",
        exampleZh: "这家咖啡店氛围很好。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Atmosphere", "Feeling", "Mood", "Energy"],
        conversation: [
          { speaker: "Lisa", line: "I love this place. It has such good vibes." },
          { speaker: "Tom", line: "Yeah, it's so relaxing here." },
          { speaker: "Lisa", line: "We should come back this weekend." }
        ],
        chineseTranslation: [
          { speaker: "Lisa", line: "我喜欢这个地方。氛围很好。" },
          { speaker: "Tom", line: "是啊，这里好放松。" },
          { speaker: "Lisa", line: "我们这周末应该再来。" }
        ],
        culturalNotes: "'Vibe' refers to the emotional atmosphere of a place or situation. 'Good vibes' means positive atmosphere. 'Bad vibes' means negative or uncomfortable atmosphere."
      },
      {
        id: "safe-9",
        word: "Bet",
        chinese: "一言为定/没问题",
        pinyin: "yī yán wéi dìng / méi wèn tí",
        meaning: "Agreement / confirmation / 'okay'",
        example: "We meeting at 5? — Bet.",
        exampleZh: "我们5点见面？——一言为定。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Sure", "Okay", "Agreed", "Sounds good"],
        conversation: [
          { speaker: "Amy", line: "We should hang out this weekend." },
          { speaker: "John", line: "Bet! Where do you want to go?" },
          { speaker: "Amy", line: "I'll text you the details." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我们这周末应该一起玩。" },
          { speaker: "John", line: "一言为定！你想去哪？" },
          { speaker: "Amy", line: "我会发信息给你详情。" }
        ],
        culturalNotes: "'Bet' is a very common way to say 'agreed' or 'okay' in casual speech. Originated from AAVE but now used by everyone."
      },
      {
        id: "safe-10",
        word: "I feel you",
        chinese: "我懂你/我理解你",
        pinyin: "wǒ dǒng nǐ / wǒ lǐ jiě nǐ",
        meaning: "I understand you / I empathize with you",
        example: "I'm so stressed about the exam. — I feel you, I have three this week.",
        exampleZh: "我考试压力好大。——我懂你，我这周也有三个考试。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["I understand", "I get it", "I know what you mean", "Same here"],
        conversation: [
          { speaker: "Lisa", line: "I'm so tired. I barely slept last night." },
          { speaker: "Tom", line: "I feel you. I was up until 3am studying too." },
          { speaker: "Lisa", line: "We should take a nap after class." }
        ],
        chineseTranslation: [
          { speaker: "Lisa", line: "我累死了。我昨晚几乎没睡。" },
          { speaker: "Tom", line: "我懂你。我也学习到凌晨3点。" },
          { speaker: "Lisa", line: "我们课后应该小睡一下。" }
        ],
        culturalNotes: "'I feel you' is a casual way to show empathy. It means 'I understand your situation because I've been there.' Very common in casual speech."
      },
      {
        id: "safe-11",
        word: "Facts",
        chinese: "事实/真的",
        pinyin: "shì shí / zhēn de",
        meaning: "That's true / I agree completely",
        example: "This weather is amazing. — Facts!",
        exampleZh: "这天气好棒。——真的！",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-30",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["True", "I agree", "That's right", "No lie"],
        conversation: [
          { speaker: "Jake", line: "Pizza is the best food ever." },
          { speaker: "Mia", line: "Facts! I could eat it every day." },
          { speaker: "Jake", line: "Same. No other food compares." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "披萨是最好吃的食物。" },
          { speaker: "Mia", line: "真的！我每天都想吃。" },
          { speaker: "Jake", line: "一样。没有其他食物能比。" }
        ],
        culturalNotes: "'Facts' is used to strongly agree with something. It means 'that's true' or 'I agree 100%.' Common in casual speech and social media comments."
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
      },
      {
        id: "internet-8",
        word: "Slaps",
        chinese: "超棒/好听到爆",
        pinyin: "chāo bàng / hǎo tīng dào bào",
        meaning: "Really good, especially music or food",
        example: "This new album slaps!",
        exampleZh: "这张新专辑超棒！",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-30",
        region: "American, British, Australian",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Great", "Amazing", "Fantastic", "Really good"],
        conversation: [
          { speaker: "Casey", line: "Have you heard the new track?" },
          { speaker: "Morgan", line: "Yeah, it slaps! Been on repeat all day." },
          { speaker: "Casey", line: "Right? The beat is insane." }
        ],
        chineseTranslation: [
          { speaker: "Casey", line: "你听新歌了吗？" },
          { speaker: "Morgan", line: "听了，超棒！今天一直在循环播放。" },
          { speaker: "Casey", line: "是吧？节奏太疯狂了。" }
        ],
        culturalNotes: "'Slaps' is modern slang meaning something is exceptionally good. Originated in music culture but now used for food, fashion, and more."
      },
      {
        id: "internet-9",
        word: "Vibe check",
        chinese: "氛围检查/察言观色",
        pinyin: "fēn wéi jiǎn chá / chá yán guān sè",
        meaning: "Assessing the mood or atmosphere of a situation",
        example: "I need to do a quick vibe check before I go in there.",
        exampleZh: "进去之前我需要先察言观色一下。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-35",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Check the mood", "Read the room", "See how people feel", "Assess the situation"],
        conversation: [
          { speaker: "Taylor", line: "Should we go in?" },
          { speaker: "Jordan", line: "Hold on, let me do a vibe check first." },
          { speaker: "Taylor", line: "Good call. Looks like they're having a meeting." }
        ],
        chineseTranslation: [
          { speaker: "Taylor", line: "我们该进去吗？" },
          { speaker: "Jordan", line: "等等，我先察言观色一下。" },
          { speaker: "Taylor", line: "好主意。看起来他们正在开会。" }
        ],
        culturalNotes: "'Vibe check' became popular on social media around 2019. It means assessing whether the mood is positive, negative, or tense."
      },
      {
        id: "internet-5",
        word: "Cap",
        chinese: "谎言/吹牛",
        pinyin: "huǎng yán / chuī niú",
        meaning: "Lie / exaggeration / to claim something false",
        example: "No cap, I studied for 10 hours for that test.",
        exampleZh: "真的，我为那次考试学习了10个小时。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-30",
        region: "American (originally AAVE), now global",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Lie", "Exaggeration", "False claim", "Untruth"],
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
        culturalNotes: "'Cap' means 'lie' in slang. 'No cap' means 'no lie' or 'I'm telling the truth.' Originated in African American Vernacular English."
      },
      {
        id: "internet-6",
        word: "Rizz",
        chinese: "魅力/撩妹/撩汉",
        pinyin: "mèi lì / liáo mèi / liáo hàn",
        meaning: "Charisma or ability to attract romantic interest",
        example: "He's got mad rizz. Every girl at the party was talking to him.",
        exampleZh: "他魅力十足。派对上的每个女孩都在和他说话。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-25",
        region: "American, British, Australian",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Charisma", "Charm", "Smooth talker", "Game"],
        conversation: [
          { speaker: "Casey", line: "Did you see Jake talking to Sarah?" },
          { speaker: "Morgan", line: "Yeah, he's got serious rizz." },
          { speaker: "Casey", line: "I know! I'm jealous." }
        ],
        chineseTranslation: [
          { speaker: "Casey", line: "你看到Jake和Sarah说话了吗？" },
          { speaker: "Morgan", line: "看了，他魅力十足。" },
          { speaker: "Casey", line: "我知道！我嫉妒了。" }
        ],
        culturalNotes: "Short for 'charisma.' Popularized by TikTok and Gen Z. Can be used for anyone who is good at attracting others romantically."
      },
      {
           warning: "WARNING: This term is highly offensive and should be avoided in all contexts. It can cause serious harm and is considered hate speech in many communities.",
     id: "internet-7",
        word: "Simp",
        chinese: "舔狗/讨好者",
        pinyin: "tiǎn gǒu / tǎo hǎo zhě",
        meaning: "Someone who does too much for someone they like, often with no reciprocation",
        example: "He's simping for Sarah. He bought her a PS5 on the second date.",
        exampleZh: "他在讨好Sarah。他第二次约会就给她买了PS5。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-25",
        region: "American, British, Australian",
        isOffensive: true,
        offensiveLevel: 2,
        safeAlternatives: ["Devoted", "Attentive", "Enthusiastic", "Hopeful romantic"],
        conversation: [
          { speaker: "Tom", line: "Jake is simping so hard for Sarah right now." },
          { speaker: "Lisa", line: "I know! He bought her a PS5 on the second date." },
          { speaker: "Tom", line: "That's wild. She hasn't even said she likes him." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "Jake现在在拼命讨好Sarah。" },
          { speaker: "Lisa", line: "我知道！他第二次约会就给她买了PS5。" },
          { speaker: "Tom", line: "太疯狂了。她甚至没说过喜欢他。" }
        ],
        culturalNotes: "Often used as an insult, but can be self-deprecating. Implies the person is being taken advantage of. Use carefully - can be hurtful."
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
      },
      {
        id: "street-4",
        word: "Flex",
        chinese: "炫耀/展示",
        pinyin: "xuàn yào / zhǎn shì",
        meaning: "To show off or display something proudly",
        example: "He's just flexing his new watch.",
        exampleZh: "他只是在炫耀他的新手表。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-35",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Show off", "Display", "Share", "Be proud of"],
        conversation: [
          { speaker: "Jake", line: "Did you see his new car?" },
          { speaker: "Mia", line: "He's been flexing it all week." },
          { speaker: "Jake", line: "I know, right? Just let him have his moment." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "你看到他的新车了吗？" },
          { speaker: "Mia", line: "他整个星期都在炫耀。" },
          { speaker: "Jake", line: "是吧？就让他得意一下吧。" }
        ],
        culturalNotes: "Can be positive or negative depending on context. 'Flex' alone is often negative, but 'flex your skills' can be positive."
      },
      {
        id: "street-5",
        word: "Deadass",
        chinese: "说真的/真的假的",
        pinyin: "shuō zhēn de / zhēn de jiǎ de",
        meaning: "Seriously / For real / I'm not joking",
        example: "Deadass? You're going to travel the world?",
        exampleZh: "说真的？你要去环游世界？",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-30",
        region: "American (originally AAVE), now global",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Really?", "Are you serious?", "For real?", "No way"],
        conversation: [
          { speaker: "Jake", line: "I'm actually moving to Japan next month." },
          { speaker: "Mia", line: "Deadass? That's wild!" },
          { speaker: "Jake", line: "Deadass. I already quit my job." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "我下个月真的要搬到日本去了。" },
          { speaker: "Mia", line: "说真的？太疯狂了！" },
          { speaker: "Jake", line: "说真的。我已经辞职了。" }
        ],
        culturalNotes: "Originated in African American Vernacular English (AAVE). Now used widely but still associated with AAVE."
      },
      {
        id: "street-6",
        word: "Bussin'",
        chinese: "好吃到爆/棒极了",
        pinyin: "hǎo chī dào bào / bàng jí le",
        meaning: "Really good, especially food",
        example: "This mac and cheese is bussin'!",
        exampleZh: "这通心粉和奶酪好吃到爆！",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-30",
        region: "American, British, Australian",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Delicious", "Amazing", "Great", "Fantastic"],
        conversation: [
          { speaker: "Taylor", line: "Try the wings! They're bussin'!" },
          { speaker: "Jordan", line: "Wow, you're right. This is amazing." },
          { speaker: "Taylor", line: "Told you! Best wings in the city." }
        ],
        chineseTranslation: [
          { speaker: "Taylor", line: "尝尝鸡翅！好吃到爆！" },
          { speaker: "Jordan", line: "哇，你说得对。这太棒了。" },
          { speaker: "Taylor", line: "跟你说过了！城里最好的鸡翅。" }
        ],
        culturalNotes: "Popular slang for food that tastes amazing. Originated in African American communities but now widely used."
      },
      {
        id: "street-7",
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
           warning: "WARNING: This is a very rude and aggressive phrase. It can be considered verbal abuse and may have serious social consequences.",
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
      },
      {
           warning: "WARNING: This expression is extremely vulgar. It insults someone's family and implies incest. Using this word can provoke violence.",
     id: "rough-4",
        word: "Dumb",
        chinese: "愚蠢的/笨蛋",
        pinyin: "yú chǔn / běn dàn",
        meaning: "Stupid or foolish (insult)",
        example: "That was a dumb idea.",
        exampleZh: "那是个愚蠢的主意。",
        whoSaysIt: "Everyone when frustrated",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 2,
        safeAlternatives: ["Unwise", "Not the best idea", "Careless", "That wasn't smart"],
        conversation: [
          { speaker: "Tom", line: "Why did you do that? That was so dumb." },
          { speaker: "Lisa", line: "I know, I wasn't thinking." },
          { speaker: "Tom", line: "Just be more careful next time." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "你为什么要那样做？太蠢了。" },
          { speaker: "Lisa", line: "我知道，我没想清楚。" },
          { speaker: "Tom", line: "下次小心点。" }
        ],
        culturalNotes: "Common mild insult. Less severe than 'idiot' but still rude. Often used to describe actions rather than people."
      },
      {
        id: "rough-5",
        word: "Hate you",
        chinese: "讨厌你/恨你",
        pinyin: "tǎo yàn nǐ / hèn nǐ",
        meaning: "I strongly dislike you (very strong, often not literal)",
        example: "I hate you! You ruined my party.",
        exampleZh: "我讨厌你！你毁了我的派对。",
        whoSaysIt: "Angry people, upset friends, dramatic teens",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 4,
        safeAlternatives: ["I'm really upset with you", "I'm angry", "That hurt my feelings", "I'm disappointed"],
        conversation: [
          { speaker: "Mia", line: "I hate you! You told everyone my secret!" },
          { speaker: "Jake", line: "I'm sorry, it slipped out." },
          { speaker: "Mia", line: "That's not okay. I need you to apologize." }
        ],
        chineseTranslation: [
          { speaker: "Mia", line: "我讨厌你！你把我的秘密告诉所有人了！" },
          { speaker: "Jake", line: "对不起，我脱口而出了。" },
          { speaker: "Mia", line: "这不行。你需要道歉。" }
        ],
        culturalNotes: "Very strong expression. Rarely literal among friends, but still hurtful. Among teens, it's often dramatic and temporary. Adults should avoid using it.",
        warning: "WARNING: 'I hate you' is extremely hurtful. Even when said in anger, it can cause lasting emotional damage. Never use this expression lightly."
      },
      {
           warning: "WARNING: This term can be deeply hurtful due to its historical meaning. While used as a general insult in some regions, it can still cause serious emotional harm.",
     id: "rough-6",
        word: "Jerk",
        chinese: "混蛋",
        pinyin: "hún dàn",
        meaning: "Rude or unpleasant person",
        example: "The guy who cut in line is such a jerk.",
        exampleZh: "那个插队的人真是个混蛋。",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 3,
        safeAlternatives: ["Rude person", "Unpleasant person", "Unkind person", "That person was rude"],
        conversation: [
          { speaker: "Amy", line: "Did you see that guy cut in line?" },
          { speaker: "John", line: "Yeah, what a jerk." },
          { speaker: "Amy", line: "I should have said something." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你看到那个插队的人了吗？" },
          { speaker: "John", line: "看到了，真是个混蛋。" },
          { speaker: "Amy", line: "我应该说点什么的。" }
        ],
        culturalNotes: "One of the most common mild insults in American English. Still rude but widely used among friends to describe others."
      },
      {
        id: "rough-7",
        word: "Loser",
        chinese: "失败者",
        pinyin: "shī bài zhě",
        meaning: "Unsuccessful or pathetic person",
        example: "Oh, you lost again? Typical loser.",
        exampleZh: "哦，你又输了？典型的失败者。",
        whoSaysIt: "Bullies, angry people, teasing friends",
        ageGroup: "All ages (especially school)",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 4,
        safeAlternatives: ["Unlucky", "Unsuccessful", "Having a rough time", "That was tough"],
        conversation: [
          { speaker: "Sam", line: "Loser! Get better at the game." },
          { speaker: "Riley", line: "Shut up, weirdo. Rematch!" },
          { speaker: "Sam", line: "You're just mad because I won." }
        ],
        chineseTranslation: [
          { speaker: "Sam", line: "失败者！游戏练好点。" },
          { speaker: "Riley", line: "闭嘴，怪人。再来一局！" },
          { speaker: "Sam", line: "你只是因为我赢了才生气。" }
        ],
        culturalNotes: "Common in school bullying. Should be avoided in adult professional contexts. Can be playful among friends depending on tone.",
        warning: "WARNING: 'Loser' can be bullying language. Using it toward someone who is struggling is cruel."
      },
      {
           warning: "WARNING: This is an extremely vulgar and aggressive phrase. It is considered one of the rudest expressions in English and should never be used.",
     id: "rough-8",
        word: "Idiot",
        chinese: "白痴/笨蛋",
        pinyin: "bái chǐ / běn dàn",
        meaning: "Stupid person (insult)",
        example: "You idiot! You locked the keys in the car again.",
        exampleZh: "你个笨蛋！你又把钥匙锁在车里了。",
        whoSaysIt: "Everyone when frustrated",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 3,
        safeAlternatives: ["Silly", "Careless", "Unwise", "That was a mistake"],
        conversation: [
          { speaker: "Alex", line: "You idiot! You deleted the whole folder!" },
          { speaker: "Jordan", line: "I know, I'm so sorry. It was an accident." },
          { speaker: "Alex", line: "Whatever. Just don't be such a jerk next time." }
        ],
        chineseTranslation: [
          { speaker: "Alex", line: "你个白痴！你把整个文件夹都删了！" },
          { speaker: "Jordan", line: "我知道，对不起。那是意外。" },
          { speaker: "Alex", line: "算了。下次别那么混蛋。" }
        ],
        culturalNotes: "Mild-to-moderate insult. Less severe than some other words but still rude. Common in everyday speech among friends."
      },
      {
        id: "rough-9",
        word: "Drop dead",
        chinese: "去死吧",
        pinyin: "qù sǐ ba",
        meaning: "Go away / Leave me alone (very rude)",
        example: "Drop dead! I don't want to talk to you.",
        exampleZh: "去死吧！我不想和你说话。",
        whoSaysIt: "Angry people, bullies",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 5,
        safeAlternatives: ["I don't want to talk", "Leave me alone", "I'm not interested", "Go away"],
        conversation: [
          { speaker: "Alex", line: "I don't want to see you here again." },
          { speaker: "Sam", line: "Drop dead! I wasn't even talking to you." },
          { speaker: "Alex", line: "Watch your mouth." }
        ],
        chineseTranslation: [
          { speaker: "Alex", line: "我不想再在这里看到你。" },
          { speaker: "Sam", line: "去死吧！我甚至没在和你说话。" },
          { speaker: "Alex", line: "注意你的嘴巴。" }
        ],
        culturalNotes: "Extremely rude. Considered a serious insult. Can be considered harassment. Students should understand it but never use it.",
        warning: "EXTREME WARNING: 'Drop dead' is one of the rudest expressions in English. It can be considered a threat. Never use this expression."
      }
    ]
  },
  {
    level: "text-speak",
    title: "Text Speak & Short Forms",
    description: "Common abbreviations, acronyms, and short forms used in texting, social media, and online communication.",
    emoji: "📱",
    color: "from-blue-400 to-cyan-400",
    items: [
      {
        id: "text-1",
        word: "IDK",
        chinese: "我不知道",
        pinyin: "wǒ bù zhī dào",
        meaning: "I don't know",
        example: "IDK what time the movie starts.",
        exampleZh: "我不知道电影什么时候开始。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["I don't know", "I'm not sure", "I have no idea"],
        conversation: [
          { speaker: "Amy", line: "What time is the movie?" },
          { speaker: "John", line: "IDK, let me check." },
          { speaker: "Amy", line: "Okay, let me know." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "电影几点？" },
          { speaker: "John", line: "我不知道，我查一下。" },
          { speaker: "Amy", line: "好的，告诉我。" }
        ],
        culturalNotes: "One of the most common text abbreviations. Used in casual writing and speech."
      },
      {
        id: "text-2",
        word: "OMG",
        chinese: "我的天哪",
        pinyin: "wǒ de tiān ne",
        meaning: "Oh my God",
        example: "OMG! I just won tickets to the concert!",
        exampleZh: "我的天哪！我刚赢得了演唱会门票！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Oh my goodness", "Wow", "Oh no"],
        conversation: [
          { speaker: "Amy", line: "I got the job!" },
          { speaker: "John", line: "OMG! That's amazing!" },
          { speaker: "Amy", line: "I know! I'm so excited." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我得到那份工作了！" },
          { speaker: "John", line: "我的天哪！太棒了！" },
          { speaker: "Amy", line: "我知道！我太兴奋了。" }
        ],
        culturalNotes: "Extremely common exclamation. Originally from texting, now common in speech. Some religious people find it offensive."
      },
      {
        id: "text-3",
        word: "LOL",
        chinese: "大笑/笑死我了",
        pinyin: "dà xiào / xiào sǐ wǒ le",
        meaning: "Laugh out loud",
        example: "That meme made me LOL.",
        exampleZh: "那个表情包让我大笑。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Haha", "Hehe", "That's funny"],
        conversation: [
          { speaker: "John", line: "Did you see that video?" },
          { speaker: "Amy", line: "LOL! That was hilarious." },
          { speaker: "John", line: "I know! I couldn't stop laughing." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "你看到那个视频了吗？" },
          { speaker: "Amy", line: "大笑！那太搞笑了。" },
          { speaker: "John", line: "我知道！我忍不住笑。" }
        ],
        culturalNotes: "One of the oldest text abbreviations. Often used even when not literally laughing. Can be used ironically."
      },
      {
        id: "text-4",
        word: "BRB",
        chinese: "马上回来",
        pinyin: "mǎ shàng huí lái",
        meaning: "Be right back",
        example: "BRB, my phone is dying.",
        exampleZh: "马上回来，我手机快没电了。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Be right back", "I'll be back shortly"],
        conversation: [
          { speaker: "Amy", line: "Where are you going?" },
          { speaker: "John", line: "BRB, need to charge my phone." },
          { speaker: "Amy", line: "Hurry back!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你去哪？" },
          { speaker: "John", line: "马上回来，我需要给手机充电。" },
          { speaker: "Amy", line: "快点回来！" }
        ],
        culturalNotes: "Common in online chat and gaming. Indicates temporary absence."
      },
      {
        id: "text-5",
        word: "BTW",
        chinese: "顺便说一下",
        pinyin: "shùn biàn shuō yī xià",
        meaning: "By the way",
        example: "BTW, did you finish the report?",
        exampleZh: "顺便说一下，你完成报告了吗？",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["By the way", "Incidentally"],
        conversation: [
          { speaker: "John", line: "I finished the project." },
          { speaker: "Amy", line: "BTW, the meeting is moved to 3pm." },
          { speaker: "John", line: "Thanks for letting me know." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "我完成了项目。" },
          { speaker: "Amy", line: "顺便说一下，会议改到下午3点了。" },
          { speaker: "John", line: "谢谢告诉我。" }
        ],
        culturalNotes: "One of the most useful transition phrases. Appropriate in most contexts."
      },
      {
        id: "text-6",
        word: "TBH",
        chinese: "说实话",
        pinyin: "shuō shí huà",
        meaning: "To be honest",
        example: "TBH, I didn't enjoy that restaurant.",
        exampleZh: "说实话，我不喜欢那家餐厅。",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["To be honest", "Frankly", "Honestly"],
        conversation: [
          { speaker: "Amy", line: "What did you think of the movie?" },
          { speaker: "John", line: "TBH, it was a bit boring." },
          { speaker: "Amy", line: "I agree, it was too long." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你觉得电影怎么样？" },
          { speaker: "John", line: "说实话，有点无聊。" },
          { speaker: "Amy", line: "我同意，太长了。" }
        ],
        culturalNotes: "Often used before an opinion that might be unpopular or critical."
      },
      {
        id: "text-7",
        word: "IDC",
        chinese: "我不在乎",
        pinyin: "wǒ bù zài hū",
        meaning: "I don't care",
        example: "IDC where we eat. You choose.",
        exampleZh: "我不在乎我们在哪里吃。你选吧。",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["I don't mind", "It doesn't matter", "Whatever you prefer"],
        conversation: [
          { speaker: "Amy", line: "Where do you want to go?" },
          { speaker: "John", line: "IDC, you pick." },
          { speaker: "Amy", line: "Okay, let's try the new place." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你想去哪？" },
          { speaker: "John", line: "我不在乎，你选。" },
          { speaker: "Amy", line: "好的，我们去新地方吧。" }
        ],
        culturalNotes: "Can sound dismissive. Use 'I don't mind' in polite company."
      },
      {
        id: "text-8",
        word: "SMH",
        chinese: "摇头",
        pinyin: "yáo tóu",
        meaning: "Shaking my head",
        example: "SMH, they canceled the show again.",
        exampleZh: "摇头，他们又取消了节目。",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["I'm disappointed", "That's unfortunate"],
        conversation: [
          { speaker: "John", line: "They canceled the show again." },
          { speaker: "Amy", line: "SMH, I'm so tired of this." },
          { speaker: "John", line: "Me too. I was really excited." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "他们又取消了节目。" },
          { speaker: "Amy", line: "摇头，我烦透了。" },
          { speaker: "John", line: "我也是。我本来很期待。" }
        ],
        culturalNotes: "Common in social media comments. Expresses disappointment or disbelief."
      },
      {
        id: "text-9",
        word: "TTYL",
        chinese: "待会见",
        pinyin: "dài huì jiàn",
        meaning: "Talk to you later",
        example: "I have to go now. TTYL!",
        exampleZh: "我得走了。待会见！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Talk to you later", "See you later", "Goodbye for now"],
        conversation: [
          { speaker: "Amy", line: "I have to go now." },
          { speaker: "John", line: "TTYL! Text me later." },
          { speaker: "Amy", line: "Will do! Bye!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我得走了。" },
          { speaker: "John", line: "待会见！稍后发信息给我。" },
          { speaker: "Amy", line: "好的！再见！" }
        ],
        culturalNotes: "From early internet chat culture. Still widely recognized and used."
      },
      {
        id: "text-10",
        word: "NP",
        chinese: "没问题",
        pinyin: "méi wèn tí",
        meaning: "No problem",
        example: "Thanks for the help! — NP!",
        exampleZh: "谢谢帮忙！——没问题！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["No problem", "You're welcome", "It's okay"],
        conversation: [
          { speaker: "John", line: "Thanks for the help!" },
          { speaker: "Amy", line: "NP! Anytime." },
          { speaker: "John", line: "You're the best." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "谢谢帮忙！" },
          { speaker: "Amy", line: "没问题！随时效劳。" },
          { speaker: "John", line: "你最好。" }
        ],
        culturalNotes: "Very common response to 'thank you' or apologies."
      },
      {
        id: "text-11",
        word: "THX",
        chinese: "谢谢",
        pinyin: "xiè xiè",
        meaning: "Thanks",
        example: "Thx for picking me up!",
        exampleZh: "谢谢来接我！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Thank you", "Thanks", "I appreciate it"],
        conversation: [
          { speaker: "Amy", line: "Thanks for the ride!" },
          { speaker: "John", line: "Thx for coming!" },
          { speaker: "Amy", line: "Of course!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "谢谢载我！" },
          { speaker: "John", line: "谢谢你来！" },
          { speaker: "Amy", line: "当然！" }
        ],
        culturalNotes: "Casual abbreviation of 'thanks.' Common in text and informal notes."
      },
      {
        id: "text-12",
        word: "PLS",
        chinese: "请",
        pinyin: "qǐng",
        meaning: "Please",
        example: "Pls send me the file when you can.",
        exampleZh: "请你能的时候把文件发给我。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Please", "Kindly", "If you could"],
        conversation: [
          { speaker: "John", line: "Can you send me the file?" },
          { speaker: "Amy", line: "Pls send it when you can." },
          { speaker: "John", line: "Will do!" }
        ],
        chineseTranslation: [
          { speaker: "John", line: "你能发给我文件吗？" },
          { speaker: "Amy", line: "请你能的时候发给我。" },
          { speaker: "John", line: "好的！" }
        ],
        culturalNotes: "Casual version of 'please.' Common in digital communication."
      },
      {
        id: "text-13",
        word: "ASAP",
        chinese: "尽快",
        pinyin: "jǐn kuài",
        meaning: "As soon as possible",
        example: "Please respond ASAP. We have a deadline.",
        exampleZh: "请尽快回复。我们有截止日期。",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["As soon as possible", "At your earliest convenience", "Promptly"],
        conversation: [
          { speaker: "Amy", line: "I need that report ASAP!" },
          { speaker: "John", line: "I'm working on it now." },
          { speaker: "Amy", line: "Thanks, the deadline is today." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我需要那份报告尽快！" },
          { speaker: "John", line: "我正在做。" },
          { speaker: "Amy", line: "谢谢，截止日期是今天。" }
        ],
        culturalNotes: "Very common in workplace communication. Implies urgency."
      },
      {
        id: "text-14",
        word: "FYI",
        chinese: "供参考",
        pinyin: "gòng cān kǎo",
        meaning: "For your information",
        example: "FYI, the office will be closed tomorrow.",
        exampleZh: "通知你一下，办公室明天将关闭。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["For your information", "Just so you know", "Heads up"],
        conversation: [
          { speaker: "John", line: "FYI, the meeting is at 2pm." },
          { speaker: "Amy", line: "Thanks for the heads up." },
          { speaker: "John", line: "No problem!" }
        ],
        chineseTranslation: [
          { speaker: "John", line: "通知你一下，会议在下午2点。" },
          { speaker: "Amy", line: "谢谢提醒。" },
          { speaker: "John", line: "不客气！" }
        ],
        culturalNotes: "Common in text and business communication. Neutral tone."
      },
      {
        id: "text-15",
        word: "GTG",
        chinese: "我得走了",
        pinyin: "wǒ děi zǒu le",
        meaning: "Got to go",
        example: "GTG, my ride is here.",
        exampleZh: "我得走了，我的车来了。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Got to go", "I have to leave", "I need to go now"],
        conversation: [
          { speaker: "Amy", line: "I have to leave now." },
          { speaker: "John", line: "GTG, talk later!" },
          { speaker: "Amy", line: "Bye!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我得走了。" },
          { speaker: "John", line: "得走了，待会见！" },
          { speaker: "Amy", line: "再见！" }
        ],
        culturalNotes: "Common in text and chat. Indicates departure."
      },
      {
        id: "text-16",
        word: "BFF",
        chinese: "最好的朋友",
        pinyin: "zuì hǎo de péng yǒu",
        meaning: "Best friend forever",
        example: "We've been BFFs since elementary school.",
        exampleZh: "我们从小学就是最好的朋友了。",
        whoSaysIt: "Everyone",
        ageGroup: "Kids-Teens",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Best friend", "Close friend", "Bestie"],
        conversation: [
          { speaker: "Amy", line: "You're my BFF!" },
          { speaker: "John", line: "Aww, you're mine too!" },
          { speaker: "Amy", line: "Friends forever!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你是我最好的朋友！" },
          { speaker: "John", line: "哇，你也是我的！" },
          { speaker: "Amy", line: "永远的朋友！" }
        ],
        culturalNotes: "Common in text and social media. Expresses close friendship."
      },
      {
        id: "text-17",
        word: "ROFL",
        chinese: "笑得在地上打滚",
        pinyin: "xiào de zài dì shàng dǎ gǔn",
        meaning: "Rolling on floor laughing",
        example: "That video had me ROFL.",
        exampleZh: "那个视频让我笑得在地上打滚。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["LOL", "Haha", "That's funny"],
        conversation: [
          { speaker: "John", line: "Did you see that cat video?" },
          { speaker: "Amy", line: "ROFL! That was amazing." },
          { speaker: "John", line: "I know! So funny." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "你看到那个猫视频了吗？" },
          { speaker: "Amy", line: "笑得在地上打滚！太棒了。" },
          { speaker: "John", line: "我知道！太好笑了。" }
        ],
        culturalNotes: "Similar to LOL but stronger. Can be used ironically."
      },
      {
        id: "text-18",
        word: "LMAO",
        chinese: "笑死我了",
        pinyin: "xiào sǐ wǒ le",
        meaning: "Laughing my ass off",
        example: "LMAO, I can't stop watching that video.",
        exampleZh: "笑死我了，我忍不住看那个视频。",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["LOL", "Haha", "That's funny", "ROFL"],
        conversation: [
          { speaker: "Amy", line: "That meme is so funny." },
          { speaker: "John", line: "LMAO! I can't breathe." },
          { speaker: "Amy", line: "Same! It's hilarious." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "那个表情包太好笑了。" },
          { speaker: "John", line: "笑死我了！我喘不过气。" },
          { speaker: "Amy", line: "一样！太搞笑了。" }
        ],
        culturalNotes: "Stronger version of LOL. Contains mild profanity ('ass'). Avoid in formal contexts."
      },
      {
        id: "text-19",
        word: "STFU",
        chinese: "闭嘴",
        pinyin: "bì zuǐ",
        meaning: "Shut the fuck up",
        example: "STFU! I'm trying to concentrate.",
        exampleZh: "闭嘴！我在努力集中注意力。",
        whoSaysIt: "Angry people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 4,
        safeAlternatives: ["Be quiet", "Stop talking", "Please be quiet"],
        conversation: [
          { speaker: "John", line: "STFU! I'm trying to study." },
          { speaker: "Amy", line: "Sorry, I didn't know." },
          { speaker: "John", line: "It's okay, just be quiet." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "闭嘴！我在学习。" },
          { speaker: "Amy", line: "对不起，我不知道。" },
          { speaker: "John", line: "没关系，只要安静。" }
        ],
        culturalNotes: "Very rude and aggressive. Can lead to conflicts. Never use in professional or public settings.",
        warning: "WARNING: 'STFU' is extremely offensive. It combines a sexual profanity with a command. Using it can end relationships and careers."
      },
      {
        id: "text-20",
        word: "WTF",
        chinese: "什么鬼",
        pinyin: "shén me guǐ",
        meaning: "What the fuck",
        example: "WTF? I didn't order that!",
        exampleZh: "什么鬼？我没点那个！",
        whoSaysIt: "Everyone when shocked",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 4,
        safeAlternatives: ["What the heck", "What on earth", "What happened"],
        conversation: [
          { speaker: "Amy", line: "WTF? Where's my food?" },
          { speaker: "John", line: "I don't know, maybe they forgot." },
          { speaker: "Amy", line: "This is ridiculous." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "什么鬼？我的食物呢？" },
          { speaker: "John", line: "我不知道，也许他们忘了。" },
          { speaker: "Amy", line: "这太荒谬了。" }
        ],
        culturalNotes: "Extremely vulgar but very common. The minced version 'WTH' is slightly less offensive.",
        warning: "WARNING: 'WTF' is highly offensive. Avoid in formal settings and with people you don't know well."
      },
      {
        id: "text-21",
        word: "TL;DR",
        chinese: "太长不看",
        pinyin: "tài cháng bù kàn",
        meaning: "Too long; didn't read",
        example: "TL;DR: I'm moving to another city.",
        exampleZh: "太长不看：我要搬到另一个城市了。",
        whoSaysIt: "Everyone online",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Summary", "In short", "Briefly", "Long story short"],
        conversation: [
          { speaker: "John", line: "I wrote a long post about my trip." },
          { speaker: "Amy", line: "TL;DR: Did you have fun?" },
          { speaker: "John", line: "Haha, yes! It was amazing." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "我写了一个关于我旅行的长帖子。" },
          { speaker: "Amy", line: "太长不看：你玩得开心吗？" },
          { speaker: "John", line: "哈哈，是的！太棒了。" }
        ],
        culturalNotes: "Essential for online communication. Can be used as a noun or verb."
      },
      {
        id: "text-22",
        word: "AMA",
        chinese: "问我任何问题",
        pinyin: "wèn wǒ rèn hé wèn tí",
        meaning: "Ask me anything",
        example: "I just finished a marathon. AMA!",
        exampleZh: "我刚完成马拉松。问我任何问题！",
        whoSaysIt: "Everyone on social media",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Ask me anything", "Q&A session", "Feel free to ask"],
        conversation: [
          { speaker: "John", line: "I'm a doctor. AMA!" },
          { speaker: "Amy", line: "What's the most common illness you see?" },
          { speaker: "John", line: "The common cold, surprisingly." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "我是医生。问我任何问题！" },
          { speaker: "Amy", line: "你最常见的是什么病？" },
          { speaker: "John", line: " surprisingly，是普通感冒。" }
        ],
        culturalNotes: "Popularized by Reddit. Common on social media for Q&A sessions."
      },
      {
        id: "text-23",
        word: "FOMO",
        chinese: "错失恐惧症",
        pinyin: "cuò shī kǒng jù zhèng",
        meaning: "Fear of missing out",
        example: "I stayed home but had major FOMO seeing all the party photos.",
        exampleZh: "我呆在家里但看到所有派对照片后非常错失恐惧。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["I wish I was there", "I don't want to miss out"],
        conversation: [
          { speaker: "Amy", line: "I didn't go to the party." },
          { speaker: "John", line: "FOMO? I saw the photos." },
          { speaker: "Amy", line: "Yeah, major FOMO." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我没去派对。" },
          { speaker: "John", line: "错失恐惧？我看到了照片。" },
          { speaker: "Amy", line: "是的，非常错失恐惧。" }
        ],
        culturalNotes: "Became mainstream around 2011-2013. Related to social media and constant connectivity."
      },
      {
        id: "text-24",
        word: "YOLO",
        chinese: "你只活一次",
        pinyin: "nǐ zhǐ huó yī cì",
        meaning: "You only live once",
        example: "YOLO! Let's book the trip.",
        exampleZh: "你只活一次！我们订行程吧。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Carpe diem", "Live life", "Seize the day"],
        conversation: [
          { speaker: "John", line: "Should we book the trip?" },
          { speaker: "Amy", line: "YOLO! Let's do it!" },
          { speaker: "John", line: "Okay, I'm booking it now." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "我们应该订行程吗？" },
          { speaker: "Amy", line: "你只活一次！我们做吧！" },
          { speaker: "John", line: "好的，我现在订。" }
        ],
        culturalNotes: "Popularized by Drake. Encourages seizing the moment."
      },
      {
        id: "text-25",
        word: "BAE",
        chinese: "宝贝/亲爱的",
        pinyin: "bǎo bèi / qīn ài de",
        meaning: "Before anyone else / romantic partner",
        example: "Going to dinner with my bae tonight.",
        exampleZh: "今晚和我亲爱的去吃饭。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Baby", "Honey", "Sweetheart", "Dear"],
        conversation: [
          { speaker: "Amy", line: "Who are you meeting tonight?" },
          { speaker: "John", line: "My bae! We're going to dinner." },
          { speaker: "Amy", line: "Have fun!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你今晚见谁？" },
          { speaker: "John", line: "我的亲爱的！我们要去吃饭。" },
          { speaker: "Amy", line: "玩得开心！" }
        ],
        culturalNotes: "Term of endearment from social media. Often used for romantic partners."
      },
      {
        id: "text-26",
        word: "FAM",
        chinese: "家人/好兄弟",
        pinyin: "jiā rén / hǎo xiōng dì",
        meaning: "Family / close friends",
        example: "Hey fam, long time no see!",
        exampleZh: "嘿家人，好久不见！",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Friend", "Brother", "Sister", "Close friend"],
        conversation: [
          { speaker: "John", line: "What's up, fam?" },
          { speaker: "Amy", line: "Not much! How are you?" },
          { speaker: "John", line: "Doing good, thanks!" }
        ],
        chineseTranslation: [
          { speaker: "John", line: "怎么了，家人？" },
          { speaker: "Amy", line: "没什么！你好吗？" },
          { speaker: "John", line: "很好，谢谢！" }
        ],
        culturalNotes: "From African American Vernacular English. Now widely used across all communities."
      },
      {
        id: "text-27",
        word: "IRL",
        chinese: "在现实中",
        pinyin: "zài xiàn shí zhōng",
        meaning: "In real life",
        example: "We've been friends online for years but never met IRL.",
        exampleZh: "我们网上认识几年了但从没见过面。",
        whoSaysIt: "Everyone online",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["In person", "Face to face", "In the real world"],
        conversation: [
          { speaker: "Amy", line: "Have you met your online friend?" },
          { speaker: "John", line: "Not yet, we're planning to meet IRL." },
          { speaker: "Amy", line: "That's exciting!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你见过你的网友吗？" },
          { speaker: "John", line: "还没有，我们计划在现实中见面。" },
          { speaker: "Amy", line: "那太令人兴奋了！" }
        ],
        culturalNotes: "From early internet/gaming culture. Now mainstream."
      },
      {
        id: "text-28",
        word: "NVM",
        chinese: "算了",
        pinyin: "suàn le",
        meaning: "Never mind",
        example: "NVM, I found it.",
        exampleZh: "算了，我找到了。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Never mind", "Forget it", "It doesn't matter"],
        conversation: [
          { speaker: "John", line: "NVM, I don't need your help anymore." },
          { speaker: "Amy", line: "Okay, let me know if you change your mind." },
          { speaker: "John", line: "Will do." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "算了，我不需要你帮忙了。" },
          { speaker: "Amy", line: "好的，如果你改变主意告诉我。" },
          { speaker: "John", line: "好的。" }
        ],
        culturalNotes: "Very common in digital communication. Can sometimes sound dismissive."
      },
      {
        id: "text-29",
        word: "OFC",
        chinese: "当然",
        pinyin: "dāng rán",
        meaning: "Of course",
        example: "OFC I remember your birthday!",
        exampleZh: "我当然记得你的生日！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Of course", "Certainly", "Obviously"],
        conversation: [
          { speaker: "Amy", line: "Do you remember my birthday?" },
          { speaker: "John", line: "OFC! It's next month." },
          { speaker: "Amy", line: "You're the best!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你记得我的生日吗？" },
          { speaker: "John", line: "当然！下个月。" },
          { speaker: "Amy", line: "你最好！" }
        ],
        culturalNotes: "Casual but widely understood. Can be used sarcastically."
      },
      {
        id: "text-30",
        word: "OP",
        chinese: "楼主",
        pinyin: "lóu zhǔ",
        meaning: "Original poster",
        example: "OP mentioned they've never been to Paris.",
        exampleZh: "楼主提到他们从未去过巴黎。",
        whoSaysIt: "Everyone on forums",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Original poster", "Thread starter", "The person who posted this"],
        conversation: [
          { speaker: "John", line: "OP said they need help." },
          { speaker: "Amy", line: "I saw that. Let's help them." },
          { speaker: "John", line: "Good idea." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "楼主说他们需要帮助。" },
          { speaker: "Amy", line: "我看到了。我们帮帮他们。" },
          { speaker: "John", line: "好主意。" }
        ],
        culturalNotes: "Essential forum terminology. Also used on Reddit and social media."
      },
      {
        id: "text-31",
        word: "TMI",
        chinese: "信息过量",
        pinyin: "xìn xī guò liàng",
        meaning: "Too much information",
        example: "TMI! I didn't need to know that.",
        exampleZh: "信息过量！我不想知道那个。",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["That's too much", "I didn't need to know that"],
        conversation: [
          { speaker: "Amy", line: "And then the doctor said..." },
          { speaker: "John", line: "TMI! Please stop." },
          { speaker: "Amy", line: "Sorry, I got carried away." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "然后医生说..." },
          { speaker: "John", line: "信息过量！请停下来。" },
          { speaker: "Amy", line: "对不起，我太投入了。" }
        ],
        culturalNotes: "Often used humorously among friends but can be hurtful if serious."
      },
      {
        id: "text-32",
        word: "WTH",
        chinese: "搞什么鬼",
        pinyin: "gǎo shén me guǐ",
        meaning: "What the hell",
        example: "WTH? Why is the door locked?",
        exampleZh: "搞什么鬼？为什么门锁了？",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["What on earth", "What the heck", "What happened"],
        conversation: [
          { speaker: "John", line: "WTH? The door is locked." },
          { speaker: "Amy", line: "Maybe they locked it early." },
          { speaker: "John", line: "But it's not even 6pm yet." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "搞什么鬼？门锁了。" },
          { speaker: "Amy", line: "也许他们早锁了。" },
          { speaker: "John", line: "但还没到6点呢。" }
        ],
        culturalNotes: "Milder version of WTF. Still informal but less offensive."
      },
      {
        id: "text-33",
        word: "WYD",
        chinese: "你在干嘛",
        pinyin: "nǐ zài gàn má",
        meaning: "What you doing",
        example: "WYD? I'm bored.",
        exampleZh: "你在干嘛？我很无聊。",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["What are you doing?", "What's up?", "How are you?"],
        conversation: [
          { speaker: "Amy", line: "WYD?" },
          { speaker: "John", line: "Nothing much, just chilling." },
          { speaker: "Amy", line: "Want to hang out?" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你在干嘛？" },
          { speaker: "John", line: "没什么，只是放松。" },
          { speaker: "Amy", line: "想一起玩吗？" }
        ],
        culturalNotes: "Very casual greeting in text. Best used with friends."
      },
      {
        id: "text-34",
        word: "WBY",
        chinese: "你呢",
        pinyin: "nǐ ne",
        meaning: "What about you",
        example: "I'm good, WBY?",
        exampleZh: "我很好，你呢？",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["What about you?", "How about you?", "And you?"],
        conversation: [
          { speaker: "John", line: "I'm good, WBY?" },
          { speaker: "Amy", line: "Same here!" },
          { speaker: "John", line: "Cool!" }
        ],
        chineseTranslation: [
          { speaker: "John", line: "我很好，你呢？" },
          { speaker: "Amy", line: "我也是！" },
          { speaker: "John", line: "酷！" }
        ],
        culturalNotes: "Very common in casual conversation and text."
      },
      {
        id: "text-35",
        word: "HBU",
        chinese: "你呢",
        pinyin: "nǐ ne",
        meaning: "How about you",
        example: "I'm fine, HBU?",
        exampleZh: "我很好，你呢？",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["How about you?", "What about you?", "And you?"],
        conversation: [
          { speaker: "Amy", line: "I'm fine, HBU?" },
          { speaker: "John", line: "Doing good, thanks!" },
          { speaker: "Amy", line: "Great to hear!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我很好，你呢？" },
          { speaker: "John", line: "很好，谢谢！" },
          { speaker: "Amy", line: "太好了！" }
        ],
        culturalNotes: "Less common than WBY but still widely understood."
      },
      {
        id: "text-36",
        word: "JK",
        chinese: "开玩笑",
        pinyin: "kāi wán xiào",
        meaning: "Just kidding",
        example: "I ate your fries! — JK, they're still there.",
        exampleZh: "我吃了你的薯条！——开玩笑，还在呢。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Just kidding", "I'm joking", "I was being sarcastic"],
        conversation: [
          { speaker: "John", line: "I ate your fries!" },
          { speaker: "Amy", line: "JK, they're still there." },
          { speaker: "John", line: "You scared me!" }
        ],
        chineseTranslation: [
          { speaker: "John", line: "我吃了你的薯条！" },
          { speaker: "Amy", line: "开玩笑，还在呢。" },
          { speaker: "John", line: "你吓到我了！" }
        ],
        culturalNotes: "Can also be written as J/K. Sometimes overused to backtrack from offensive comments."
      },
      {
        id: "text-37",
        word: "SMFH",
        chinese: "摇头",
        pinyin: "yáo tóu",
        meaning: "Shaking my fucking head",
        example: "SMFH, he did it again.",
        exampleZh: "摇头，他又做了。",
        whoSaysIt: "Angry people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 4,
        safeAlternatives: ["SMH", "I'm disappointed", "That's unfortunate"],
        conversation: [
          { speaker: "Amy", line: "He did it again." },
          { speaker: "John", line: "SMFH, I can't believe it." },
          { speaker: "Amy", line: "I know, it's so frustrating." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "他又做了。" },
          { speaker: "John", line: "摇头，我无法相信。" },
          { speaker: "Amy", line: "我知道，太令人沮丧了。" }
        ],
        culturalNotes: "Stronger version of SMH. Contains profanity. Avoid in most contexts.",
        warning: "WARNING: 'SMFH' contains profanity. It is very offensive. Use 'SMH' instead."
      },
      {
        id: "text-38",
        word: "TFW",
        chinese: "那种感觉",
        pinyin: "nà zhǒng gǎn jué",
        meaning: "That feel when",
        example: "TFW you realize it's Monday tomorrow.",
        exampleZh: "那种感觉当你意识到明天是周一。",
        whoSaysIt: "Everyone on social media",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["When you...", "That moment when", "The feeling when"],
        conversation: [
          { speaker: "John", line: "TFW you realize it's Monday tomorrow." },
          { speaker: "Amy", line: "No! I'm not ready." },
          { speaker: "John", line: "Weekends go too fast." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "那种感觉当你意识到明天是周一。" },
          { speaker: "Amy", line: "不！我还没准备好。" },
          { speaker: "John", line: "周末过得太快了。" }
        ],
        culturalNotes: "Essential meme format. Often used with images or GIFs."
      },
      {
        id: "text-39",
        word: "YW",
        chinese: "不客气",
        pinyin: "bú kè qì",
        meaning: "You're welcome",
        example: "Thanks for the help! — YW!",
        exampleZh: "谢谢帮忙！——不客气！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["You're welcome", "No problem", "No worries"],
        conversation: [
          { speaker: "Amy", line: "Thanks for the help!" },
          { speaker: "John", line: "YW!" },
          { speaker: "Amy", line: "You're a lifesaver!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "谢谢帮忙！" },
          { speaker: "John", line: "不客气！" },
          { speaker: "Amy", line: "你救了我一命！" }
        ],
        culturalNotes: "Casual but polite. Widely acceptable in most contexts."
      },
      {
        id: "text-40",
        word: "TY",
        chinese: "谢谢",
        pinyin: "xiè xiè",
        meaning: "Thank you",
        example: "TY for the ride!",
        exampleZh: "谢谢载我！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Thank you", "Thanks", "I appreciate it"],
        conversation: [
          { speaker: "John", line: "TY for the help!" },
          { speaker: "Amy", line: "YW!" },
          { speaker: "John", line: "Have a good one!" }
        ],
        chineseTranslation: [
          { speaker: "John", line: "谢谢帮忙！" },
          { speaker: "Amy", line: "不客气！" },
          { speaker: "John", line: "祝你愉快！" }
        ],
        culturalNotes: "Very casual. Best used with friends or in informal contexts."
      },
      {
        id: "text-41",
        word: "G2G",
        chinese: "得走了",
        pinyin: "děi zǒu le",
        meaning: "Got to go",
        example: "G2G, my mom is calling.",
        exampleZh: "得走了，我妈妈在叫我。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Got to go", "I have to leave", "I need to go now"],
        conversation: [
          { speaker: "Amy", line: "I have to leave now." },
          { speaker: "John", line: "G2G, talk later!" },
          { speaker: "Amy", line: "Bye!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我得走了。" },
          { speaker: "John", line: "得走了，待会见！" },
          { speaker: "Amy", line: "再见！" }
        ],
        culturalNotes: "Similar to GTG. Common in text and chat."
      },
      {
        id: "text-42",
        word: "CU",
        chinese: "再见",
        pinyin: "zài jiàn",
        meaning: "See you",
        example: "CU tomorrow!",
        exampleZh: "明天见！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["See you", "See you later", "Goodbye", "Bye"],
        conversation: [
          { speaker: "John", line: "CU tomorrow!" },
          { speaker: "Amy", line: "See you then!" },
          { speaker: "John", line: "Bye!" }
        ],
        chineseTranslation: [
          { speaker: "John", line: "明天见！" },
          { speaker: "Amy", line: "到时候见！" },
          { speaker: "John", line: "再见！" }
        ],
        culturalNotes: "Very casual goodbye. From early text messaging culture."
      },
      {
        id: "text-43",
        word: "GN",
        chinese: "晚安",
        pinyin: "wǎn ān",
        meaning: "Good night",
        example: "GN! Talk to you tomorrow.",
        exampleZh: "晚安！明天聊。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Good night", "Goodnight", "Sleep well"],
        conversation: [
          { speaker: "Amy", line: "I'm going to bed." },
          { speaker: "John", line: "GN! Sleep well." },
          { speaker: "Amy", line: "Thanks! Night!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我去睡觉了。" },
          { speaker: "John", line: "晚安！睡个好觉。" },
          { speaker: "Amy", line: "谢谢！晚安！" }
        ],
        culturalNotes: "Very common in digital communication before bed."
      },
      {
        id: "text-44",
        word: "GB",
        chinese: "再见",
        pinyin: "zài jiàn",
        meaning: "Goodbye",
        example: "GB! Have a safe trip.",
        exampleZh: "再见！旅途平安。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Goodbye", "Bye", "See you", "Take care"],
        conversation: [
          { speaker: "John", line: "GB! Have a safe trip." },
          { speaker: "Amy", line: "Thanks! Bye!" },
          { speaker: "John", line: "See you soon!" }
        ],
        chineseTranslation: [
          { speaker: "John", line: "再见！旅途平安。" },
          { speaker: "Amy", line: "谢谢！再见！" },
          { speaker: "John", line: "很快见！" }
        ],
        culturalNotes: "Casual but polite. Widely understood."
      },
      {
        id: "text-45",
        word: "HMU",
        chinese: "联系我",
        pinyin: "lián xì wǒ",
        meaning: "Hit me up",
        example: "HMU when you're free!",
        exampleZh: "你有空联系我！",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Contact me", "Message me", "Call me", "Reach out"],
        conversation: [
          { speaker: "Amy", line: "HMU when you're free!" },
          { speaker: "John", line: "Will do! Same here." },
          { speaker: "Amy", line: "Cool, talk soon!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你有空联系我！" },
          { speaker: "John", line: "好的！我也是。" },
          { speaker: "Amy", line: "酷，待会见！" }
        ],
        culturalNotes: "Very casual. Best used with friends or people you know well."
      },
      {
        id: "text-46",
        word: "K",
        chinese: "好的",
        pinyin: "hǎo de",
        meaning: "Okay",
        example: "See you at 5. — K.",
        exampleZh: "5点见。——好的。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Okay", "Sure", "Sounds good", "Got it"],
        conversation: [
          { speaker: "John", line: "See you at 5." },
          { speaker: "Amy", line: "K." },
          { speaker: "John", line: "Cool." }
        ],
        chineseTranslation: [
          { speaker: "John", line: "5点见。" },
          { speaker: "Amy", line: "好的。" },
          { speaker: "John", line: "酷。" }
        ],
        culturalNotes: "Single 'K' can seem rude or dismissive. 'KK' or 'Okay' is friendlier."
      },
      {
        id: "text-47",
        word: "KK",
        chinese: "好的",
        pinyin: "hǎo de",
        meaning: "Okay (friendlier)",
        example: "I'll be there at 7. — KK!",
        exampleZh: "我7点到。——好的！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Okay", "Sure", "Sounds good", "Got it"],
        conversation: [
          { speaker: "Amy", line: "I'll be there at 7." },
          { speaker: "John", line: "KK!" },
          { speaker: "Amy", line: "See you then!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我7点到。" },
          { speaker: "John", line: "好的！" },
          { speaker: "Amy", line: "到时候见！" }
        ],
        culturalNotes: "Warmer than single 'K'. Common in online chat and gaming."
      },
      {
        id: "text-48",
        word: "RN",
        chinese: "现在",
        pinyin: "xiàn zài",
        meaning: "Right now",
        example: "I'm so hungry RN!",
        exampleZh: "我现在好饿！",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Right now", "Currently", "At the moment", "Now"],
        conversation: [
          { speaker: "John", line: "I'm so hungry RN!" },
          { speaker: "Amy", line: "Let's get food then." },
          { speaker: "John", line: "Yes, please!" }
        ],
        chineseTranslation: [
          { speaker: "John", line: "我现在好饿！" },
          { speaker: "Amy", line: "那我们吃点东西吧。" },
          { speaker: "John", line: "好的，请！" }
        ],
        culturalNotes: "Very common in social media captions and text. From 'right now.'"
      },
      {
        id: "text-49",
        word: "IMO",
        chinese: "在我看来",
        pinyin: "zài wǒ kàn lái",
        meaning: "In my opinion",
        example: "IMO, the movie was overrated.",
        exampleZh: "在我看来，这部电影被高估了。",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["In my opinion", "I think", "I believe", "From my perspective"],
        conversation: [
          { speaker: "Amy", line: "What did you think of the movie?" },
          { speaker: "John", line: "IMO, it was overrated." },
          { speaker: "Amy", line: "I agree, it wasn't that great." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你觉得电影怎么样？" },
          { speaker: "John", line: "在我看来，它被高估了。" },
          { speaker: "Amy", line: "我同意，没那么好。" }
        ],
        culturalNotes: "Essential for online discussions. Often used before controversial opinions."
      },
      {
        id: "text-50",
        word: "ICYMI",
        chinese: "你可能错过了",
        pinyin: "nǐ kě néng cuò guò le",
        meaning: "In case you missed it",
        example: "ICYMI, the concert was last night.",
        exampleZh: "你可能错过了，演唱会昨晚举行了。",
        whoSaysIt: "Everyone on social media",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["In case you missed it", "Just in case", "For your awareness"],
        conversation: [
          { speaker: "John", line: "ICYMI, the concert was last night." },
          { speaker: "Amy", line: "I missed it! Was it good?" },
          { speaker: "John", line: "It was amazing!" }
        ],
        chineseTranslation: [
          { speaker: "John", line: "你可能错过了，演唱会昨晚举行了。" },
          { speaker: "Amy", line: "我错过了！好看吗？" },
          { speaker: "John", line: "太棒了！" }
        ],
        culturalNotes: "Popular on Twitter and news aggregators. Helps catch up on trending topics."
      }
    ]
  }
];
