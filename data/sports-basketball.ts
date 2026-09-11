export interface BasketballVocabEntry {
  id: string;
  english: string;
  chinese: string;
  pinyin: string;
  phonetic: string;
  partOfSpeech: string;
  definitionEn: string;
  definitionZh: string;
  exampleEn: string;
  exampleZh: string;
  emoji: string;
}

export interface BasketballSlangEntry {
  id: string;
  term: string;
  chinese: string;
  meaning: string;
  meaningZh: string;
  exampleEn: string;
  exampleZh: string;
  warning?: string;
  warningZh?: string;
}

export interface CurryDialogueLine {
  speaker: "May" | "Curry" | "Staff" | "Fan" | "Narrator";
  line: string;
  lineZh?: string;
  note?: string;
}

export interface CurryMissionLevel {
  id: string;
  label: string;
  emoji: string;
  description: string;
  descriptionZh: string;
  dialogue: CurryDialogueLine[];
}

export interface CurryQuestion {
  id: string;
  category: "basketball" | "mindset" | "china" | "light";
  question: string;
  questionZh: string;
}

export interface CurryReaction {
  level: "basic" | "natural" | "basketball" | "followup";
  phrase: string;
  phraseZh: string;
}

export interface RecoveryPhrase {
  english: string;
  chinese: string;
  situation: string;
}

export interface CommonMistakeEntry {
  mistake: string;
  correction: string;
  correctionZh: string;
}

export interface SlangMatchItem {
  term: string;
  meaning: string;
}

export interface RapidDrillItem {
  situation: string;
  situationZh: string;
  goodResponse: string;
  goodResponseZh: string;
}

export interface RoleplayScenario {
  id: string;
  title: string;
  titleZh: string;
  role: string;
  roleZh: string;
  secretInstructions?: string;
  secretInstructionsZh?: string;
  prompts?: string[];
  partnerLines?: string[];
}

export interface ListeningCommand {
  english: string;
  chinese: string;
}

export interface EventChecklistItem {
  text: string;
  textZh: string;
}

export interface SportsCategory {
  id: string;
  title: string;
  titleZh: string;
  emoji: string;
  description: string;
  descriptionZh: string;
  color: string;
}

export interface BasketballSubModule {
  id: string;
  title: string;
  titleZh: string;
  emoji: string;
  description: string;
  descriptionZh: string;
  type: "vocabulary" | "slang" | "dialogue" | "drill" | "reference" | "mission";
}

export const sportsCategories: SportsCategory[] = [
  {
    id: "sports",
    title: "Sports",
    titleZh: "体育运动",
    emoji: "🏅",
    description: "Learn English through sports — from basketball vocabulary to real-life fan conversations and special missions.",
    descriptionZh: "通过体育学习英语——从篮球词汇到真实球迷对话和特别任务。",
    color: "from-orange-400 to-red-500",
  },
  {
    id: "basketball",
    title: "Basketball",
    titleZh: "篮球",
    emoji: "🏀",
    description: "Master basketball English: court vocabulary, fan slang, game commentary, and the ultimate fan mission — Meeting Stephen Curry.",
    descriptionZh: "掌握篮球英语：球场词汇、球迷俚语、比赛解说，以及终极球迷任务——会见斯蒂芬·库里。",
    color: "from-amber-400 to-orange-500",
  },
];

export const basketballSubModules: BasketballSubModule[] = [
  { id: "basketball-basics", title: "Basketball Basics", titleZh: "篮球基础", emoji: "🏀", description: "Essential court vocabulary and positions.", descriptionZh: "必备球场词汇和位置。", type: "vocabulary" },
  { id: "basketball-vocabulary", title: "Basketball Vocabulary", titleZh: "篮球词汇", emoji: "📖", description: "Key actions and moves on the court.", descriptionZh: "球场上的关键动作和移动。", type: "vocabulary" },
  { id: "basketball-positions", title: "Important Positions", titleZh: "重要位置", emoji: "👤", description: "PG, SG, SF, PF, C explained simply.", descriptionZh: "简单解释 PG、SG、SF、PF、C。", type: "vocabulary" },
  { id: "basketball-slang", title: "Basketball Slang", titleZh: "篮球俚语", emoji: "🔥", description: "Talk like a real basketball fan.", descriptionZh: "像真正的篮球迷一样说话。", type: "slang" },
  { id: "watching-a-game", title: "Watching a Game", titleZh: "看比赛", emoji: "📺", description: "Commentary English and game reactions.", descriptionZh: "解说英语和比赛反应。", type: "dialogue" },
  { id: "talking-with-fans", title: "Talking With Fans", titleZh: "与球迷交谈", emoji: "🗣️", description: "Natural conversations with other fans.", descriptionZh: "与其他球迷的自然对话。", type: "dialogue" },
  { id: "talking-with-players", title: "Talking With Players", titleZh: "与球员交谈", emoji: "🤝", description: "Respectful conversation with players.", descriptionZh: "与球员的尊重对话。", type: "dialogue" },
  { id: "asking-questions", title: "Asking Questions", titleZh: "提问", emoji: "❓", description: "Great questions to ask players and fans.", descriptionZh: "问球员和球迷的好问题。", type: "dialogue" },
  { id: "basketball-pronunciation", title: "Pronunciation", titleZh: "发音", emoji: "👄", description: "Stress and clarity for basketball words.", descriptionZh: "篮球单词的重音和清晰度。", type: "vocabulary" },
  { id: "game-commentary", title: "Game Commentary", titleZh: "比赛解说", emoji: "🎙️", description: "Beginner-friendly basketball commentary phrases.", descriptionZh: "初学者友好的篮球解说短语。", type: "dialogue" },
  { id: "basketball-small-talk", title: "Basketball Small Talk", titleZh: "篮球闲聊", emoji: "💬", description: "Casual basketball conversation starters.", descriptionZh: "随意的篮球对话开场白。", type: "dialogue" },
  { id: "meet-stephen-curry", title: "⭐ Meet Stephen Curry", titleZh: "⭐ 会见斯蒂芬·库里", emoji: "⭐", description: "Special Shenzhen mission: meet Stephen Curry with confidence.", descriptionZh: "深圳特别任务：自信会见斯蒂芬·库里。", type: "mission" },
];

export const basketballCourtVocabulary: BasketballVocabEntry[] = [
  {
    id: "court",
    english: "court",
    chinese: "球场",
    pinyin: "qiú chǎng",
    phonetic: "/kɔːrt/",
    partOfSpeech: "noun",
    definitionEn: "The playing surface for basketball.",
    definitionZh: "篮球的比赛场地表面。",
    exampleEn: "The court is wet from the rain.",
    exampleZh: "球场被雨淋湿了。",
    emoji: "🏀",
  },
  {
    id: "hoop",
    english: "hoop",
    chinese: "篮筐",
    pinyin: "lán kuāng",
    phonetic: "/huːp/",
    partOfSpeech: "noun",
    definitionEn: "The metal ring that the ball goes through to score.",
    definitionZh: "球穿过的金属环，得分的地方。",
    exampleEn: "He shot from outside the hoop.",
    exampleZh: "他在篮筐外投篮。",
    emoji: "🏀",
  },
  {
    id: "rim",
    english: "rim",
    chinese: "篮圈",
    pinyin: "lán quān",
    phonetic: "/rɪm/",
    partOfSpeech: "noun",
    definitionEn: "The circular metal edge of the basket.",
    definitionZh: "篮筐的圆形金属边缘。",
    exampleEn: "The ball hit the rim and bounced out.",
    exampleZh: "球击中篮圈后弹了出来。",
    emoji: "⭕",
  },
  {
    id: "backboard",
    english: "backboard",
    chinese: "篮板",
    pinyin: "lán bǎn",
    phonetic: "/ˈbækbɔːrd/",
    partOfSpeech: "noun",
    definitionEn: "The rectangular board behind the basket.",
    definitionZh: "篮筐后面的矩形板。",
    exampleEn: "He banked the shot off the backboard.",
    exampleZh: "他擦板投篮。",
    emoji: "🟦",
  },
  {
    id: "three-point-line",
    english: "three-point line",
    chinese: "三分线",
    pinyin: "sān fēn xiàn",
    phonetic: "/θriː pɔɪnt laɪn/",
    partOfSpeech: "noun",
    definitionEn: "The arc line beyond which shots count for three points.",
    definitionZh: "弧线，在此线外投篮算三分。",
    exampleEn: "He released the shot from beyond the three-point line.",
    exampleZh: "他在三分线外出手投篮。",
    emoji: "〰️",
  },
  {
    id: "free-throw-line",
    english: "free-throw line",
    chinese: "罚球线",
    pinyin: "fá qiú xiàn",
    phonetic: "/friː θroʊ laɪn/",
    partOfSpeech: "noun",
    definitionEn: "The line where players shoot free throws.",
    definitionZh: "球员罚球的位置线。",
    exampleEn: "She stepped to the free-throw line and scored.",
    exampleZh: "她走到罚球线得分。",
    emoji: "➖",
  },
  {
    id: "paint",
    english: "paint / key",
    chinese: "禁区",
    pinyin: "jìn qū",
    phonetic: "/peɪnt/ /kiː/",
    partOfSpeech: "noun",
    definitionEn: "The rectangular area directly under the basket. Also called 'the key'.",
    definitionZh: "篮筐正下方的矩形区域。也叫 'the key'。",
    exampleEn: "He posted up in the paint for the easy bucket.",
    exampleZh: "他在禁区内要位轻松得分。",
    emoji: "🟧",
  },
  {
    id: "baseline",
    english: "baseline",
    chinese: "底线",
    pinyin: "dǐ xiàn",
    phonetic: "/ˈbeɪslaɪn/",
    partOfSpeech: "noun",
    definitionEn: "The boundary line at each end of the court.",
    definitionZh: "球场两端的边界线。",
    exampleEn: "She drove along the baseline for the layup.",
    exampleZh: "她沿底线突破上篮。",
    emoji: "📏",
  },
  {
    id: "sideline",
    english: "sideline",
    chinese: "边线",
    pinyin: "biān xiàn",
    phonetic: "/ˈsaɪdlaɪn/",
    partOfSpeech: "noun",
    definitionEn: "The boundary line along the sides of the court.",
    definitionZh: "球场两侧的边界线。",
    exampleEn: "The ball went out of bounds on the sideline.",
    exampleZh: "球在边线出界了。",
    emoji: "↔️",
  },
];

export const basketballActionVocabulary: BasketballVocabEntry[] = [
  {
    id: "shoot",
    english: "shoot",
    chinese: "投篮",
    pinyin: "tóu lán",
    phonetic: "/ʃuːt/",
    partOfSpeech: "verb",
    definitionEn: "To throw the ball toward the basket to score.",
    definitionZh: "向篮筐投球试图得分。",
    exampleEn: "He shoots with perfect form.",
    exampleZh: "他的投篮动作很标准。",
    emoji: "🎯",
  },
  {
    id: "pass",
    english: "pass",
    chinese: "传球",
    pinyin: "chuán qiú",
    phonetic: "/pæs/",
    partOfSpeech: "verb",
    definitionEn: "To throw the ball to a teammate.",
    definitionZh: "把球传给队友。",
    exampleEn: "She made a beautiful pass to her teammate.",
    exampleZh: "她给队友传了一个漂亮的球。",
    emoji: "🤲",
  },
  {
    id: "dribble",
    english: "dribble",
    chinese: "运球",
    pinyin: "yùn qiú",
    phonetic: "/ˈdrɪbl/",
    partOfSpeech: "verb",
    definitionEn: "To bounce the ball continuously while moving.",
    definitionZh: "移动时连续拍球。",
    exampleEn: "He dribbled past two defenders.",
    exampleZh: "他运球过了两名防守者。",
    emoji: "👟",
  },
  {
    id: "defend",
    english: "defend",
    chinese: "防守",
    pinyin: "fáng shǒu",
    phonetic: "/dɪˈfend/",
    partOfSpeech: "verb",
    definitionEn: "To try to stop the other team from scoring.",
    definitionZh: "试图阻止对方球队得分。",
    exampleEn: "She defends the paint extremely well.",
    exampleZh: "她在禁区防守得非常好。",
    emoji: "🛡️",
  },
  {
    id: "rebound",
    english: "rebound",
    chinese: "篮板球",
    pinyin: "lán bǎn qiú",
    phonetic: "/ˈriːbaʊnd/",
    partOfSpeech: "verb / noun",
    definitionEn: "To grab the ball after a missed shot.",
    definitionZh: "在投篮不中后抢到球。",
    exampleEn: "He grabbed the rebound and scored.",
    exampleZh: "他抢到篮板后得分。",
    emoji: "📦",
  },
  {
    id: "block",
    english: "block",
    chinese: "盖帽",
    pinyin: "gài mào",
    phonetic: "/blɒk/",
    partOfSpeech: "verb / noun",
    definitionEn: "To stop an opponent's shot from scoring.",
    definitionZh: "阻止对手投篮得分。",
    exampleEn: "She had three blocks in the first half.",
    exampleZh: "她在上半场有三个盖帽。",
    emoji: "🚫",
  },
  {
    id: "steal",
    english: "steal",
    chinese: "抢断",
    pinyin: "qiǎng duàn",
    phonetic: "/stiːl/",
    partOfSpeech: "verb / noun",
    definitionEn: "To take the ball from an opponent who has it.",
    definitionZh: "从持球的对手手中抢走球。",
    exampleEn: "He got a steal and ran the fast break.",
    exampleZh: "他抢断后发动快攻。",
    emoji: "🏃",
  },
  {
    id: "dunk",
    english: "dunk",
    chinese: "扣篮",
    pinyin: "kòu lán",
    phonetic: "/dʌŋk/",
    partOfSpeech: "verb / noun",
    definitionEn: "To score by slamming the ball through the hoop with one or both hands.",
    definitionZh: "用单手或双手将球砸进篮筐得分。",
    exampleEn: "He dunked over two defenders.",
    exampleZh: "他过了两名防守者后扣篮。",
    emoji: "💥",
  },
  {
    id: "assist",
    english: "assist",
    chinese: "助攻",
    pinyin: "zhù gōng",
    phonetic: "/əˈsɪst/",
    partOfSpeech: "noun / verb",
    definitionEn: "A pass that directly leads to a score.",
    definitionZh: "直接导致得分的传球。",
    exampleEn: "She had ten assists in the game.",
    exampleZh: "她在比赛中有十个助攻。",
    emoji: "🎯",
  },
  {
    id: "score",
    english: "score",
    chinese: "得分",
    pinyin: "dé fēn",
    phonetic: "/skɔːr/",
    partOfSpeech: "verb / noun",
    definitionEn: "To make a basket and earn points.",
    definitionZh: "投中篮筐并得分。",
    exampleEn: "He scored thirty points last night.",
    exampleZh: "他昨晚得了三十分。",
    emoji: "🏆",
  },
  {
    id: "drive",
    english: "drive",
    chinese: "突破",
    pinyin: "tū pò",
    phonetic: "/draɪv/",
    partOfSpeech: "verb",
    definitionEn: "To move quickly toward the basket with the ball.",
    definitionZh: "持球快速向篮筐移动。",
    exampleEn: "She drove left and finished with a floater.",
    exampleZh: "她向左突破后投出高抛球得分。",
    emoji: "🏎️",
  },
  {
    id: "screen",
    english: "screen",
    chinese: "挡拆",
    pinyin: "dǎng chāi",
    phonetic: "/skriːn/",
    partOfSpeech: "noun / verb",
    definitionEn: "To block a defender to free up a teammate.",
    definitionZh: "挡住防守者为队友创造空位。",
    exampleEn: "He set a screen and Curry came off for the shot.",
    exampleZh: "他做了挡拆，库里出来投篮。",
    emoji: "🧱",
  },
  {
    id: "cut",
    english: "cut",
    chinese: "切",
    pinyin: "qiē",
    phonetic: "/kʌt/",
    partOfSpeech: "verb",
    definitionEn: "To make a quick change of direction to get open.",
    definitionZh: "快速变向以获得空位。",
    exampleEn: "She cut to the basket and received the pass.",
    exampleZh: "她切向篮筐并接到传球。",
    emoji: "✂️",
  },
  {
    id: "foul",
    english: "foul",
    chinese: "犯规",
    pinyin: "fàn guī",
    phonetic: "/faʊl/",
    partOfSpeech: "noun / verb",
    definitionEn: "An illegal physical contact against another player.",
    definitionZh: "对另一名球员的非法身体接触。",
    exampleEn: "He was called for a shooting foul.",
    exampleZh: "他被吹了投篮犯规。",
    emoji: "🚨",
  },
];

export const basketballPositionVocabulary: BasketballVocabEntry[] = [
  {
    id: "pg",
    english: "PG — Point Guard",
    chinese: "控球后卫",
    pinyin: "kòng qiú hòu wèi",
    phonetic: "/pɔɪnt ɡɑːrd/",
    partOfSpeech: "noun",
    definitionEn: "Often organizes the offense and handles the ball.",
    definitionZh: "通常组织进攻并控球。",
    exampleEn: "The PG brings the ball up the court and runs the play.",
    exampleZh: "控卫带球过半场并组织进攻。",
    emoji: "🧠",
  },
  {
    id: "sg",
    english: "SG — Shooting Guard",
    chinese: "得分后卫",
    pinyin: "dé fēn hòu wèi",
    phonetic: "/ˈʃuːtɪŋ ɡɑːrd/",
    partOfSpeech: "noun",
    definitionEn: "Usually the team's best outside shooter.",
    definitionZh: "通常是球队最好的外线投手。",
    exampleEn: "The SG spaces the floor and hits open threes.",
    exampleZh: "得分后卫拉开空间并命中空位三分。",
    emoji: "🎯",
  },
  {
    id: "sf",
    english: "SF — Small Forward",
    chinese: "小前锋",
    pinyin: "xiǎo qiān fēng",
    phonetic: "/smɔːl ˈfɔːrwərd/",
    partOfSpeech: "noun",
    definitionEn: "A versatile player who scores, defends, and rebounds.",
    definitionZh: "全能球员，得分、防守、篮板都能做。",
    exampleEn: "The SF attacks the rim and guards the opponent's best player.",
    exampleZh: "小前锋冲击篮筐并防守对方最好的球员。",
    emoji: "🏃",
  },
  {
    id: "pf",
    english: "PF — Power Forward",
    chinese: "大前锋",
    pinyin: "dà qiān fēng",
    phonetic: "/ˈpaʊər ˈfɔːrwərd/",
    partOfSpeech: "noun",
    definitionEn: "Plays near the basket and uses strength inside.",
    definitionZh: "在篮下活动并用力量在内线进攻。",
    exampleEn: "The PF posts up, rebounds, and sets screens.",
    exampleZh: "大前锋低位单打、抢篮板和做挡拆。",
    emoji: "💪",
  },
  {
    id: "c",
    english: "C — Center",
    chinese: "中锋",
    pinyin: "zhōng fēng",
    phonetic: "/ˈsentər/",
    partOfSpeech: "noun",
    definitionEn: "Usually the tallest player. Protects the rim and rebounds.",
    definitionZh: "通常是最高的球员。保护篮筐和抢篮板。",
    exampleEn: "The C anchors the defense and scores inside.",
    exampleZh: "中锋是防守的支柱并在内线得分。",
    emoji: "🏔️",
  },
];

export const basketballSlang: BasketballSlangEntry[] = [
  {
    id: "bucket",
    term: "bucket",
    chinese: "得分 / 进球",
    meaning: "A made basket or score.",
    meaningZh: "投中得分。",
    exampleEn: "Curry gets buckets.",
    exampleZh: "库里能得分。",
    warning: "Casual slang. Don't say 'You bricked that' to Curry! 😂",
  },
  {
    id: "swish",
    term: "swish",
    chinese: "空心入网",
    meaning: "The ball goes through the net without touching the rim.",
    meaningZh: "球穿过篮网而没有碰到篮圈。",
    exampleEn: "Swish! Nothing but net.",
    exampleZh: "空心入网！只有网。",
  },
  {
    id: "brick",
    term: "brick",
    chinese: "打铁 / 投丢",
    meaning: "A badly missed shot.",
    meaningZh: "严重投偏的球。",
    exampleEn: "He bricked that open three.",
    exampleZh: "他把那个空位三分投丢了。",
    warning: "Casual slang. Don't tell Curry 'You bricked that.' 😂",
  },
  {
    id: "airball",
    term: "airball",
    chinese: "三不沾",
    meaning: "A shot that misses the rim AND the backboard entirely.",
    meaningZh: "连篮圈和篮板都没碰到的投篮。",
    exampleEn: "That was an airball — it didn't even hit the rim.",
    exampleZh: "那是三不沾——连篮圈都没碰到。",
  },
  {
    id: "dime",
    term: "dime",
    chinese: "精妙助攻",
    meaning: "A beautiful, precise assist pass.",
    meaningZh: "漂亮而精准的助攻传球。",
    exampleEn: "What a dime! Perfect pass.",
    exampleZh: "多么精妙的助攻！完美的传球。",
  },
  {
    id: "handles",
    term: "handles",
    chinese: "运球技术",
    meaning: "Dribbling ability or skill.",
    meaningZh: "运球能力或技术。",
    exampleEn: "His handles are crazy.",
    exampleZh: "他的运球技术太强了。",
  },
  {
    id: "crossover",
    term: "crossover",
    chinese: "胯下运球变向",
    meaning: "A quick dribble move changing direction suddenly.",
    meaningZh: "快速运球突然变向的动作。",
    exampleEn: "He crossed him over and drove to the basket.",
    exampleZh: "他 crossover 后突破到篮下。",
  },
  {
    id: "ankle-breaker",
    term: "ankle breaker",
    chinese: "晃倒对手",
    meaning: "A move that makes the defender lose balance. Does NOT literally break an ankle!",
    meaningZh: "让防守者失去平衡的动作。并不是真的折断脚踝！",
    exampleEn: "That crossover was an ankle breaker!",
    exampleZh: "那个 crossover 把对手晃倒了！",
    warning: "Visual explanation important — not literal! 😂",
  },
  {
    id: "deep-three",
    term: "deep three",
    chinese: "超远三分",
    meaning: "A three-pointer taken from far behind the three-point line.",
    meaningZh: "从三分线很远处投出的三分球。",
    exampleEn: "He hit a deep three from the logo.",
    exampleZh: "他在 logo 处投进了一个超远三分。",
  },
  {
    id: "pull-up-three",
    term: "pull-up three",
    chinese: "急停三分",
    meaning: "A player dribbles, stops, and immediately shoots a three.",
    meaningZh: "球员运球后急停并立即投出三分。",
    exampleEn: "Curry's pull-up three is almost impossible to defend.",
    exampleZh: "库里的急停三分几乎无法防守。",
  },
  {
    id: "logo-three",
    term: "logo three / logo three-pointer",
    chinese: "logo 三分",
    meaning: "A very long shot from around the center-court logo area.",
    meaningZh: "从中场 logo 附近投出的超远投篮。",
    exampleEn: "Curry can hit logo threes.",
    exampleZh: "库里能投 logo 三分。",
  },
  {
    id: "clutch",
    term: "clutch",
    chinese: "关键 / 大心脏",
    meaning: "Performing very well in an important late-game moment.",
    meaningZh: "在比赛末段重要时刻表现出色。",
    exampleEn: "That shot was clutch.",
    exampleZh: "那球太关键了。",
  },
  {
    id: "buzzer-beater",
    term: "buzzer beater",
    chinese: "压哨球",
    meaning: "A shot made just before the game or quarter clock expires.",
    meaningZh: "在比赛或节时钟走完前投进的球。",
    exampleEn: "He hit a buzzer beater to win the game.",
    exampleZh: "他投进了一个压哨绝杀球。",
  },
  {
    id: "and-one",
    term: "and-one",
    chinese: "加罚一球",
    meaning: "A player makes the shot despite being fouled and gets one extra free throw.",
    meaningZh: "球员在被犯规后仍投中，并获得一次额外罚球。",
    exampleEn: "He scored the and-one and the crowd went wild.",
    exampleZh: "他完成了 2+1，全场沸腾了。",
  },
  {
    id: "poster",
    term: "poster / posterize",
    chinese: "骑扣 / 羞辱式扣篮",
    meaning: "A dramatic dunk directly over a defender.",
    meaningZh: "直接在防守者头上完成的震撼扣篮。",
    exampleEn: "He posterized the defender!",
    exampleZh: "他把防守者骑扣了！",
  },
  {
    id: "cooking",
    term: "cooking",
    chinese: "手感火热",
    meaning: "A player is dominating offensively. NOT cooking food!",
    meaningZh: "球员在进攻端统治比赛。不是真的在做饭！",
    exampleEn: "Curry is cooking tonight.",
    exampleZh: "库里今晚手感火热。",
    warning: "Explain visually: NOT cooking food. 😂",
  },
  {
    id: "on-fire",
    term: "on fire",
    chinese: "手感火热",
    meaning: "A player is making many shots in a row.",
    meaningZh: "球员连续投进很多球。",
    exampleEn: "He's on fire from three-point range.",
    exampleZh: "他的三分手感火热。",
  },
  {
    id: "locked-in",
    term: "locked in",
    chinese: "全神贯注",
    meaning: "Extremely focused on the game.",
    meaningZh: "极度专注于比赛。",
    exampleEn: "He was completely locked in during the fourth quarter.",
    exampleZh: "他在第四节完全进入了状态。",
  },
];

export const basketballCommentaryPhrases = [
  {
    id: "curry-for-three",
    english: "Curry for three...",
    chinese: "库里投三分了……",
  },
  {
    id: "knocks-it-down",
    english: "He knocks it down!",
    chinese: "他投中了！",
  },
  {
    id: "what-a-shot",
    english: "What a shot!",
    chinese: "好球！",
  },
  {
    id: "great-pass",
    english: "Great pass!",
    chinese: "漂亮的传球！",
  },
  {
    id: "nice-block",
    english: "Nice block!",
    chinese: "漂亮的封盖！",
  },
  {
    id: "gets-the-rebound",
    english: "He gets the rebound.",
    chinese: "他抢到了篮板。",
  },
  {
    id: "fast-break",
    english: "They're on a fast break.",
    chinese: "他们正在打快攻。",
  },
  {
    id: "one-point-game",
    english: "It's a one-point game.",
    chinese: "比赛只差一分了。",
  },
  {
    id: "ten-seconds-left",
    english: "Ten seconds left.",
    chinese: "还剩十秒。",
  },
  {
    id: "hits-the-game-winner",
    english: "He hits the game-winner!",
    chinese: "他投中了绝杀球！",
  },
];

export const curryQuestions: CurryQuestion[] = [
  {
    id: "cq1",
    category: "basketball",
    question: "What's your favorite part of playing basketball?",
    questionZh: "打篮球你最喜欢什么？",
  },
  {
    id: "cq2",
    category: "basketball",
    question: "What's your favorite shot to practice?",
    questionZh: "你最喜欢练习什么投篮？",
  },
  {
    id: "cq3",
    category: "basketball",
    question: "How many three-pointers do you normally shoot during practice?",
    questionZh: "你训练时通常投多少个三分球？",
  },
  {
    id: "cq4",
    category: "basketball",
    question: "What helped you become such a consistent shooter?",
    questionZh: "是什么让你成为如此稳定的投手？",
  },
  {
    id: "cq5",
    category: "basketball",
    question: "What's the hardest part of being a professional basketball player?",
    questionZh: "作为职业篮球运动员最难的部分是什么？",
  },
  {
    id: "cq6",
    category: "mindset",
    question: "How do you stay calm under pressure?",
    questionZh: "你在压力下如何保持冷静？",
  },
  {
    id: "cq7",
    category: "mindset",
    question: "How do you stay confident after missing a few shots?",
    questionZh: "投丢几个球后如何保持自信？",
  },
  {
    id: "cq8",
    category: "mindset",
    question: "What keeps you motivated after so many years?",
    questionZh: "这么多年是什么让你保持动力？",
  },
  {
    id: "cq9",
    category: "mindset",
    question: "How do you deal with a bad game?",
    questionZh: "你如何处理一场糟糕的比赛？",
  },
  {
    id: "cq10",
    category: "china",
    question: "How are you enjoying China?",
    questionZh: "你在中国玩得开心吗？",
  },
  {
    id: "cq11",
    category: "china",
    question: "How do you like Shenzhen so far?",
    questionZh: "你觉得深圳怎么样？",
  },
  {
    id: "cq12",
    category: "china",
    question: "What's been your favorite part of the trip?",
    questionZh: "这次旅行你最喜欢什么？",
  },
  {
    id: "cq13",
    category: "china",
    question: "Have you tried any local food yet?",
    questionZh: "你尝过当地食物了吗？",
  },
  {
    id: "cq14",
    category: "light",
    question: "If you weren't a basketball player, what do you think you'd be doing?",
    questionZh: "如果你不是篮球运动员，你觉得你会做什么？",
  },
  {
    id: "cq15",
    category: "light",
    question: "What's harder: hitting a three-pointer or choosing what to eat for dinner?",
    questionZh: "哪个更难：投中三分还是决定晚餐吃什么？",
  },
  {
    id: "cq16",
    category: "light",
    question: "What's one basketball skill you wish people asked you about more?",
    questionZh: "你希望人们多问你哪个篮球技巧？",
  },
];

export const questionsToAvoid = [
  { english: "How much money do you make?", chinese: "你赚多少钱？" },
  { english: "Can you give me your phone number?", chinese: "你能给我你的电话号码吗？" },
  { english: "Can you give me free shoes?", chinese: "你能给我免费球鞋吗？" },
  { english: "Can you follow me on Instagram?", chinese: "你能在Instagram上关注我吗？" },
  { english: "Can you record five videos for my friends?", chinese: "你能为我的朋友录五个视频吗？" },
  { english: "Personal family questions that are inappropriate for the situation.", chinese: "不适合当前情况的私人家庭问题。" },
];

export const reactionBank: CurryReaction[] = [
  { level: "basic", phrase: "Really?", phraseZh: "真的吗？" },
  { level: "basic", phrase: "Nice!", phraseZh: "太好了！" },
  { level: "basic", phrase: "Wow!", phraseZh: "哇！" },
  { level: "basic", phrase: "That's amazing.", phraseZh: "太棒了。" },
  { level: "natural", phrase: "That's really interesting.", phraseZh: "那真的很有意思。" },
  { level: "natural", phrase: "That makes sense.", phraseZh: "这有道理。" },
  { level: "natural", phrase: "That's a good point.", phraseZh: "说得好。" },
  { level: "natural", phrase: "I never thought about it that way.", phraseZh: "我从没那样想过。" },
  { level: "basketball", phrase: "That's impressive.", phraseZh: "真令人印象深刻。" },
  { level: "basketball", phrase: "That's crazy!", phraseZh: "太疯狂了！" },
  { level: "basketball", phrase: "Your shooting is unreal.", phraseZh: "你的投篮太不可思议了。" },
  { level: "basketball", phrase: "That's why you're one of the best.", phraseZh: "那就是为什么你是最棒的之一。" },
  { level: "followup", phrase: "Why is that?", phraseZh: "为什么？" },
  { level: "followup", phrase: "How did you learn that?", phraseZh: "你是怎么学会的？" },
  { level: "followup", phrase: "How long did that take?", phraseZh: "那花了多长时间？" },
  { level: "followup", phrase: "Was that difficult?", phraseZh: "那难吗？" },
];

export const recoveryPhrases: RecoveryPhrase[] = [
  {
    english: "Sorry, I'm a little nervous. 😂",
    chinese: "对不起，我有点紧张。😂",
    situation: "You freeze and forget what to say",
  },
  {
    english: "I had something to say, and I completely forgot it.",
    chinese: "我本来有话要说，但完全忘了。",
    situation: "Your mind goes blank mid-sentence",
  },
  {
    english: "Wow... I can't believe I'm meeting you.",
    chinese: "哇……真不敢相信我见到你了。",
    situation: "You're overwhelmed and speechless",
  },
  {
    english: "Sorry, I didn't catch that.",
    chinese: "对不起，我没听清。",
    situation: "You didn't hear what Curry said",
  },
  {
    english: "Could you say that again?",
    chinese: "你能再说一遍吗？",
    situation: "You need repetition",
  },
  {
    english: "Sorry, could you say that a little more slowly?",
    chinese: "对不起，你能说慢一点吗？",
    situation: "Curry spoke too fast",
  },
  {
    english: "Do you mean...?",
    chinese: "你的意思是……？",
    situation: "You want to confirm what you heard",
  },
];

export const howAreYouResponses = [
  { level: "simple", english: "I'm good! How about you?", chinese: "我很好！你呢？" },
  { level: "natural", english: "I'm great, thanks!", chinese: "我很好，谢谢！" },
  { level: "excited", english: "I'm great! Honestly, I'm really excited to meet you.", chinese: "我很好！说实话，见到你我真的很兴奋。" },
  { level: "funny", english: "I'm good — just a little nervous right now. 😂", chinese: "我很好——只是现在有点紧张。😂" },
];

export const nameResponses = [
  { level: "basic", english: "I'm May.", chinese: "我是 May。" },
  { level: "natural", english: "My name's May.", chinese: "我的名字是 May。" },
  { level: "extended", english: "I'm May. It's really nice to meet you.", chinese: "我是 May。很高兴见到你。" },
];

export const autographRequestOptions = [
  { level: "polite", english: "Would you mind signing this for me, please?", chinese: "你介意帮我签个名吗？" },
  { level: "safe", english: "Could I get your autograph, please?", chinese: "能给我一个你的签名吗？" },
  { level: "simple", english: "Could you sign this for me?", chinese: "你能帮我签个名吗？" },
];

export const personalizedAutographOptions = [
  { english: "Could you make it out to May, please?", chinese: "你能写给我的 May 吗？" },
  { english: "Could you write 'To May'?", chinese: "你能写 'To May' 吗？" },
];

export const photoRequestOptions = [
  { level: "polite", english: "Would it be okay if we took a quick photo?", chinese: "我们能拍个快照吗？" },
  { level: "easy", english: "Could we take a photo together?", chinese: "我们能一起拍个照吗？" },
  { level: "natural", english: "Could I get a quick picture with you?", chinese: "我能和你拍个快照吗？" },
  { level: "short", english: "Steph, quick photo?", chinese: "Steph，快拍个照？" },
];

export const staffDenialResponses = [
  { english: "No worries. Thank you anyway!", chinese: "没关系。还是谢谢你！" },
  { english: "That's okay. Thanks!", chinese: "没关系。谢谢！" },
];

export const tenSecondModeDialogue: CurryDialogueLine[] = [
  { speaker: "May", line: "Steph! I'm a huge fan. It's amazing to meet you.", lineZh: "Steph！我是你的忠实粉丝。见到你太棒了。" },
  { speaker: "May", line: "Could you sign this for me, please?", lineZh: "你能帮我签个名吗？" },
  { speaker: "May", line: "Thank you!", lineZh: "谢谢你！" },
];

export const thirtySecondModeDialogue: CurryDialogueLine[] = [
  { speaker: "May", line: "Hi Steph! It's amazing to meet you.", lineZh: "嗨 Steph！见到你太棒了。" },
  { speaker: "May", line: "I'm May. I'm a huge fan.", lineZh: "我是 May。我是你的忠实粉丝。" },
  { speaker: "May", line: "What's one piece of advice you'd give someone trying to improve their shooting?", lineZh: "对于想提高投篮的人，你有什么建议？" },
  { speaker: "Curry", line: "Practice and repetition. Mastery takes thousands of reps.", lineZh: "练习和重复。掌握需要成千上万次重复。", note: "Practice response — NOT a real Curry quote" },
  { speaker: "May", line: "That's great advice.", lineZh: "那是很好的建议。" },
  { speaker: "May", line: "Could you sign this for me?", lineZh: "你能帮我签个名吗？" },
  { speaker: "May", line: "Thank you so much. Enjoy Shenzhen!", lineZh: "非常感谢。在深圳玩得开心！" },
];

export const safeDialogue: CurryDialogueLine[] = [
  { speaker: "May", line: "Hi Steph! Nice to meet you.", lineZh: "嗨 Steph！很高兴见到你。" },
  { speaker: "Curry", line: "Nice to meet you too.", lineZh: "我也很高兴见到你。" },
  { speaker: "May", line: "I'm a big fan.", lineZh: "我是你的忠实粉丝。" },
  { speaker: "Curry", line: "Thank you, I appreciate that.", lineZh: "谢谢，我很感激。" },
  { speaker: "May", line: "Could I get your autograph, please?", lineZh: "能给我一个你的签名吗？" },
  { speaker: "Curry", line: "Sure.", lineZh: "当然。" },
  { speaker: "May", line: "Thank you so much!", lineZh: "非常感谢！" },
];

export const naturalDialogue: CurryDialogueLine[] = [
  { speaker: "May", line: "Hey Steph! It's so nice to meet you.", lineZh: "嘿 Steph！很高兴见到你。" },
  { speaker: "Curry", line: "Nice to meet you too. How are you?", lineZh: "我也很高兴见到你。你好吗？" },
  { speaker: "May", line: "I'm great — honestly, a little nervous. I'm a huge fan.", lineZh: "我很好——说实话，有点紧张。我是你的忠实粉丝。" },
  { speaker: "Curry", line: "Don't be nervous!", lineZh: "别紧张！" },
  { speaker: "May", line: "I'll try! I've watched so many of your games.", lineZh: "我尽量！我看了你很多比赛。" },
  { speaker: "Curry", line: "I appreciate that.", lineZh: "我很感激。" },
  { speaker: "May", line: "Would you mind signing this for me?", lineZh: "你介意帮我签个名吗？" },
  { speaker: "Curry", line: "Of course.", lineZh: "当然可以。" },
  { speaker: "May", line: "Thank you! Could we also take a quick photo?", lineZh: "谢谢！我们能拍个快照吗？" },
  { speaker: "Curry", line: "Sure.", lineZh: "当然。" },
  { speaker: "May", line: "Amazing. Thank you so much. Enjoy Shenzhen!", lineZh: "太棒了。非常感谢。在深圳玩得开心！" },
];

export const confidentDialogue: CurryDialogueLine[] = [
  { speaker: "May", line: "Steph, it's an honor to meet you. I've been looking forward to this all day.", lineZh: "Steph，很荣幸见到你。我一整天都在期待这个。" },
  { speaker: "Curry", line: "Thank you! How are you doing?", lineZh: "谢谢！你怎么样？" },
  { speaker: "May", line: "I'm great — trying not to forget all my English right now. 😂", lineZh: "我很好——尽量不让自己忘光所有英语。😂" },
  { speaker: "Curry", line: "Haha, you're doing fine.", lineZh: "哈哈，你做得很好。" },
  { speaker: "May", line: "I've always admired how calm you stay in big moments.", lineZh: "我一直很佩服你在关键时刻的冷静。" },
  { speaker: "May", line: "How do you handle that kind of pressure?", lineZh: "你如何处理那种压力？" },
  { speaker: "Curry", line: "I try to trust my preparation and stay focused on the next play.", lineZh: "我尽量相信我的准备并专注于下一个回合。", note: "Practice response — NOT a real Curry quote" },
  { speaker: "May", line: "That's really interesting.", lineZh: "那真的很有意思。" },
  { speaker: "May", line: "Before you go, would you mind signing this for me?", lineZh: "在你走之前，你介意帮我签个名吗？" },
  { speaker: "May", line: "And if there's time, could we grab a quick photo?", lineZh: "如果有时间，我们能拍个快照吗？" },
  { speaker: "May", line: "Thank you. This absolutely made my day.", lineZh: "谢谢你。这真的让我今天很美好。" },
];

export const nervousMayDialogue: CurryDialogueLine[] = [
  { speaker: "Narrator", line: "May finally meets Curry. Her brain says: 'Speak English.'", lineZh: "May 终于见到了 Curry。她的大脑说：'说英语。'" },
  { speaker: "Narrator", line: "Her brain replies: ❌ English.exe has stopped working.", lineZh: "她的大脑回复：❌ English.exe 已停止工作。😂" },
  { speaker: "May", line: "Sorry, I'm a little nervous. 😂", lineZh: "对不起，我有点紧张。😂" },
  { speaker: "Curry", line: "No problem! Take your time.", lineZh: "没问题！慢慢来。" },
  { speaker: "May", line: "I had something to say, and I completely forgot it.", lineZh: "我本来有话要说，但完全忘了。" },
  { speaker: "May", line: "Wow... I can't believe I'm meeting you.", lineZh: "哇……真不敢相信我见到你了。" },
];

export const commonChineseMistakes: CommonMistakeEntry[] = [
  { mistake: "I very like your basketball.", correction: "I really like watching you play.", correctionZh: "我 really 喜欢看你打球。" },
  { mistake: "Can you give me one sign?", correction: "Could I get your autograph?", correctionZh: "Could I get your autograph?" },
  { mistake: "Can we make a photo?", correction: "Could we take a photo?", correctionZh: "Could we take a photo?" },
  { mistake: "I watch your match many times.", correction: "I've watched a lot of your games.", correctionZh: "I've watched a lot of your games." },
];

export const autographEtiquette = {
  title: "Autograph Etiquette",
  titleZh: "签名礼仪",
  dos: [
    { text: "Have the item ready.", textZh: "准备好物品。" },
    { text: "Have the pen ready if appropriate.", textZh: "如适用，准备好笔。" },
    { text: "Be brief.", textZh: "简短一点。" },
    { text: "Ask politely.", textZh: "礼貌地请求。" },
    { text: "Follow staff instructions.", textZh: "听从工作人员指示。" },
    { text: "Say thank you.", textZh: "说谢谢。" },
  ],
  donts: [
    { text: "Don't push through people.", textZh: "不要挤过人群。" },
    { text: "Don't grab the player.", textZh: "不要拉球员。" },
    { text: "Don't argue if staff says no.", textZh: "如果工作人员说不行，不要争辩。" },
    { text: "Don't keep asking repeatedly.", textZh: "不要反复请求。" },
    { text: "Don't hand over ten different things.", textZh: "不要递上十样不同的东西。" },
  ],
};

export const naturalCompliments = [
  { level: "simple", english: "You're an amazing player.", chinese: "你是一个出色的球员。" },
  { level: "natural", english: "I love watching you play.", chinese: "我喜欢看你打球。" },
  { level: "specific", english: "Your shooting is incredible.", chinese: "你的投篮太不可思议了。" },
  { level: "meaningful", english: "I really admire your confidence and work ethic.", chinese: "我真的很佩服你的自信和职业道德。" },
  { level: "fan", english: "The range on your three-point shot is unreal.", chinese: "你三分球的射程太不可思议了。" },
  { level: "personal", english: "Watching you play made basketball much more interesting for me.", chinese: "看你打球让我觉得篮球有趣多了。" },
];

export const gqratFormula = {
  title: "G-Q-R-A-T Formula",
  titleZh: "G-Q-R-A-T 公式",
  steps: [
    { letter: "G", label: "Greet", english: "Hi Steph! Nice to meet you.", chinese: "嗨 Steph！很高兴见到你。" },
    { letter: "Q", label: "Question", english: "How are you enjoying Shenzhen?", chinese: "你在深圳玩得开心吗？" },
    { letter: "R", label: "React", english: "That's awesome.", chinese: "太棒了。" },
    { letter: "A", label: "Autograph / photo", english: "Would you mind signing this?", chinese: "你介意帮我签个名吗？" },
    { letter: "T", label: "Thank", english: "Thank you so much!", chinese: "非常感谢！" },
  ],
};

export const fiveEssentialSentences = [
  { id: "fes1", english: "Hi Steph! It's amazing to meet you.", chinese: "嗨 Steph！见到你太棒了。" },
  { id: "fes2", english: "I'm a huge fan.", chinese: "我是你的忠实粉丝。" },
  { id: "fes3", english: "Sorry, I didn't catch that. Could you say it again?", chinese: "对不起，我没听清。你能再说一遍吗？" },
  { id: "fes4", english: "Would you mind signing this for me?", chinese: "你介意帮我签个名吗？" },
  { id: "fes5", english: "Thank you so much. It was great meeting you.", chinese: "非常感谢。很高兴见到你。" },
];

export const pronunciationPracticeWords = [
  { english: "Stephen", phonetic: "/ˈstiːvən/", tip: "STEH-ven", tipZh: "STEH-ven" },
  { english: "Curry", phonetic: "/ˈkʌri/", tip: "KUR-ee", tipZh: "KUR-ee" },
  { english: "basketball", phonetic: "/ˈbɑːskɪtbɔːl/", tip: "BASS-kit-ball", tipZh: "BASS-kit-ball" },
  { english: "Warriors", phonetic: "/ˈwɔːriərz/", tip: "WOR-ee-urz", tipZh: "WOR-ee-urz" },
  { english: "autograph", phonetic: "/ˈɔːtəɡræf/", tip: "AW-tuh-graf", tipZh: "AW-tuh-graf" },
  { english: "photograph", phonetic: "/ˈfoʊtəɡræf/", tip: "FO-to-graf", tipZh: "FO-to-graf" },
  { english: "three-pointer", phonetic: "/θriː ˈpɔɪntər/", tip: "THREE POYN-ter", tipZh: "THREE POYN-ter" },
  { english: "shooting", phonetic: "/ˈʃuːtɪŋ/", tip: "SHOO-ting", tipZh: "SHOO-ting" },
  { english: "pressure", phonetic: "/ˈpreʃər/", tip: "PRESH-ur", tipZh: "PRESH-ur" },
  { english: "practice", phonetic: "/ˈpræktɪs/", tip: "PRAK-tis", tipZh: "PRAK-tis" },
  { english: "favorite", phonetic: "/ˈfeɪvərɪt/", tip: "FAY-vuh-rit", tipZh: "FAY-vuh-rit" },
  { english: "incredible", phonetic: "/ɪnˈkredəbl/", tip: "in-KRED-uh-bl", tipZh: "in-KRED-uh-bl" },
  { english: "signature", phonetic: "/ˈsɪɡnətʃər/", tip: "SIG-nuh-chur", tipZh: "SIG-nuh-chur" },
  { english: "Shenzhen", phonetic: "/ʃənˈdʒen/", tip: "shen-JEN", tipZh: "shen-JEN" },
];

export const autographVsSignature = {
  autograph: {
    title: "Autograph",
    titleZh: "签名（名人给粉丝的）",
    meaning: "A famous person's signature given to a fan.",
    meaningZh: "名人给粉丝的签名。",
  },
  signature: {
    title: "Signature",
    titleZh: "签名（日常用的）",
    meaning: "Your written name used generally.",
    meaningZh: "日常使用的亲笔签名。",
  },
  note: {
    english: "May asks: 'Could I get your autograph?' — not usually 'Could I get your signature?' Both can be understood, but 'autograph' is much more natural in the fan situation.",
    chinese: "May 问：'Could I get your autograph?'——通常不说 'Could I get your signature?' 两者都能懂，但在球迷场合 'autograph' 自然得多。",
  },
};

export const fanVsSupporter = {
  natural: { english: "I'm a big fan of yours.", chinese: "我是你的忠实粉丝。" },
  textbook: { english: "I'm your supporter.", chinese: "我是你的支持者。" },
  note: {
    english: "'Fan' is much more natural in this situation. 'Supporter' is understandable but less natural for meeting a famous athlete.",
    chinese: "'Fan' 在这个场合自然得多。'Supporter' 能懂但不如 'fan' 自然。",
  },
};

export const likeVsAdmire = {
  avoid: { english: "I like you.", chinese: "我喜欢你。", note: "Can sound personal/ambiguous." },
  better: [
    { english: "I love watching you play.", chinese: "我喜欢看你打球。" },
    { english: "I'm a huge fan.", chinese: "我是你的忠实粉丝。" },
    { english: "I really admire your game.", chinese: "我真的很欣赏你的球技。" },
    { english: "I admire your work ethic.", chinese: "我佩服你的职业道德。" },
  ],
};

export const slangMatchingGame: SlangMatchItem[] = [
  { term: "SWISH", meaning: "clean made shot / 空心入网" },
  { term: "BRICK", meaning: "badly missed shot / 打铁" },
  { term: "DIME", meaning: "great assist / 精妙助攻" },
  { term: "HANDLES", meaning: "dribbling skill / 运球技术" },
  { term: "CLUTCH", meaning: "great under pressure / 大心脏" },
  { term: "COOKING", meaning: "dominating/scoring well / 手感火热" },
  { term: "AIRBALL", meaning: "misses everything / 三不沾" },
  { term: "BUCKET", meaning: "made basket/score / 得分" },
];

export const dontSayToCurry: { bad: string; better: string; betterZh: string }[] = [
  { bad: "You brick many balls?", better: "How do you stay confident after missing a few shots?", betterZh: "投丢一些后如何保持自信？" },
  { bad: "Give autograph.", better: "Would you mind signing this for me, please?", betterZh: "你介意帮我签个名吗？" },
  { bad: "Take photo with me.", better: "Could we take a quick photo together?", betterZh: "我们能一起拍个快照吗？" },
  { bad: "You are my best basketball man.", better: "You're one of my favorite players.", betterZh: "你是我最喜欢的球员之一。" },
];

export const rapidDrillItems: RapidDrillItem[] = [
  { situation: "Curry appears.", situationZh: "库里出现了。", goodResponse: "Hi Steph! I'm a huge fan. It's amazing to meet you.", goodResponseZh: "嗨 Steph！我是你的忠实粉丝。见到你太棒了。" },
  { situation: "He asks your name.", situationZh: "他问你的名字。", goodResponse: "I'm May. It's really nice to meet you.", goodResponseZh: "我是 May。很高兴见到你。" },
  { situation: "You don't understand him.", situationZh: "你没听懂他的话。", goodResponse: "Sorry, I didn't catch that. Could you say it again?", goodResponseZh: "对不起，我没听清。你能再说一遍吗？" },
  { situation: "He compliments Shenzhen.", situationZh: "他称赞深圳。", goodResponse: "Thank you! I'm glad you like it.", goodResponseZh: "谢谢！很高兴你喜欢这里。" },
  { situation: "You want an autograph.", situationZh: "你想要签名。", goodResponse: "Would you mind signing this for me, please?", goodResponseZh: "你介意帮我签个名吗？" },
  { situation: "You want a photo.", situationZh: "你想要拍照。", goodResponse: "Could we take a quick photo together?", goodResponseZh: "我们能一起拍个快照吗？" },
  { situation: "Staff says hurry up.", situationZh: "工作人员说快点。", goodResponse: "Thank you so much! It was great meeting you.", goodResponseZh: "非常感谢！很高兴见到你。" },
  { situation: "You're leaving.", situationZh: "你要离开了。", goodResponse: "Thank you so much. Enjoy Shenzhen!", goodResponseZh: "非常感谢。在深圳玩得开心！" },
];

export const roleplayScenarios: RoleplayScenario[] = [
  {
    id: "rp-curry",
    title: "Meet Stephen Curry",
    titleZh: "会见斯蒂芬·库里",
    role: "Stephen Curry",
    roleZh: "斯蒂芬·库里",
    secretInstructions: "Start casually. Speak slightly faster after 30 seconds. Ask May an unexpected question. Ask her whether she plays basketball. Ask who her favorite player is. Pretend staff says only 20 seconds remain.",
    secretInstructionsZh: "随意开始。30秒后语速稍微加快。问 May 一个意外的问题。问她是否打篮球。问她最喜欢的球员是谁。假装工作人员说只剩20秒。",
    prompts: [
      "Greet May naturally",
      "Ask how she is",
      "Ask an unexpected question",
      "Mention time is running out",
    ],
    partnerLines: [
      "Hey! How are you?",
      "What's your name?",
      "Do you play basketball?",
      "Who's your favorite player?",
      "Sorry, we have to keep moving!",
    ],
  },
  {
    id: "rp-staff",
    title: "Event Staff",
    titleZh: "活动工作人员",
    role: "Event Staff Member",
    roleZh: "活动工作人员",
    prompts: [
      "Tell people where to line up",
      "Answer questions about autographs and photos",
      "Keep the line moving",
      "Handle 'no' situations politely",
    ],
    partnerLines: [
      "Where should I line up?",
      "Is this the line for the meet-and-greet?",
      "Are autographs allowed?",
      "Can we take photos?",
      "How much time do we have?",
      "Should I have my item ready?",
    ],
  },
  {
    id: "rp-fan",
    title: "Another Fan",
    titleZh: "另一位球迷",
    role: "Another Fan",
    roleZh: "另一位球迷",
    prompts: [
      "Make small talk while waiting",
      "Ask if they're here for Curry",
      "Discuss basketball casually",
      "Share excitement about the event",
    ],
    partnerLines: [
      "Are you here to see Curry?",
      "How long have you been waiting?",
      "Are you a Warriors fan?",
      "Where are you from?",
      "Worth the wait?",
    ],
  },
  {
    id: "rp-photographer",
    title: "Photographer / Staff",
    titleZh: "摄影师 / 工作人员",
    role: "Event Photographer",
    roleZh: "活动摄影师",
    prompts: [
      "Direct people for the photo",
      "Keep it quick and efficient",
      "Tell people when to smile",
    ],
    partnerLines: [
      "Look here.",
      "A little closer.",
      "One more.",
      "Okay, thank you.",
    ],
  },
];

export const listeningCommands: ListeningCommand[] = [
  { english: "Keep moving, please.", chinese: "请继续前进。" },
  { english: "Next person.", chinese: "下一位。" },
  { english: "Have your item ready.", chinese: "请准备好您的物品。" },
  { english: "No flash.", chinese: "不要开闪光灯。" },
  { english: "One photo only.", chinese: "只能拍一张照片。" },
  { english: "No autographs.", chinese: "不提供签名。" },
  { english: "Please step this way.", chinese: "请这边走。" },
  { english: "Stand over here.", chinese: "站在这里。" },
  { english: "Look at the camera.", chinese: "看镜头。" },
  { english: "That's it, thank you.", chinese: "好了，谢谢。" },
];

export const eventChecklist: EventChecklistItem[] = [
  { text: "Practice five essential sentences.", textZh: "练习五个基本句子。" },
  { text: "Practice Curry's name.", textZh: "练习库里的名字。" },
  { text: "Decide ONE question.", textZh: "确定一个问题。" },
  { text: "Decide autograph item.", textZh: "确定签名物品。" },
  { text: "Prepare pen if permitted.", textZh: "如允许，准备好笔。" },
  { text: "Decide whether autograph or photo is priority.", textZh: "确定签名还是拍照是优先项。" },
  { text: "Keep phone ready.", textZh: "手机准备好。" },
  { text: "Practice emergency phrase.", textZh: "练习应急短语。" },
  { text: "Don't memorize a 2-minute speech.", textZh: "不要背诵2分钟的演讲稿。" },
];

export const curryMissionLevels: CurryMissionLevel[] = [
  {
    id: "safe",
    label: "Safe",
    emoji: "🌱",
    description: "Very easy English. Simple and short.",
    descriptionZh: "非常简单的英语。简单而简短。",
    dialogue: safeDialogue,
  },
  {
    id: "natural",
    label: "Natural",
    emoji: "🌿",
    description: "Normal conversational English.",
    descriptionZh: "正常的对话英语。",
    dialogue: naturalDialogue,
  },
  {
    id: "confident",
    label: "Confident",
    emoji: "🔥",
    description: "More expressive, fan-like English.",
    descriptionZh: "更有表现力、更有球迷范儿的英语。",
    dialogue: confidentDialogue,
  },
];

export const mayPossibleAnswers = {
  playsYes: "A little. I'm definitely better at watching than playing though. 😂",
  playsNo: "Not really. I'm more of a fan than a player.",
  playsOccasionally: "Just casually with friends.",
  favoritePlayer: {
    joke: "You're asking me that while I'm standing in front of you? 😂",
    simple: "Of course you're one of my favorites.",
  },
  watchNBA: {
    yes: "Yeah, whenever I have time.",
    sometimes: "Sometimes. I don't follow every game, but I enjoy watching.",
    beginner: "I'm actually still learning more about basketball.",
  },
};

export const shenzhenSmallTalk = [
  { english: "How are you enjoying Shenzhen?", chinese: "你在深圳玩得开心吗？" },
  { english: "Have you been here before?", chinese: "你以前来过这里吗？" },
  { english: "Have you had a chance to explore the city?", chinese: "你有机会探索这座城市吗？" },
  { english: "Have you tried any food here?", chinese: "你尝过这里的食物吗？" },
];

export const afterMeetingResponses = [
  { english: "Amazing. I was so nervous at first, but he was really friendly.", chinese: "太棒了。起初我很紧张，但他真的很友好。" },
  { english: "It happened so fast! I almost forgot what I wanted to say.", chinese: "发生得太快了！我差点忘了我想说什么。" },
  { english: "I managed to get his autograph, so I'm happy!", chinese: "我成功拿到了他的签名，我很开心！" },
];

export const noAutographResponse = [
  { english: "I didn't manage to get an autograph, but meeting him was still worth it.", chinese: "我没拿到签名，但见到他仍然很值得。" },
];

export const gotAutographResponses = [
  { english: "I got Curry's autograph!", chinese: "我拿到了库里的签名！" },
  { english: "I actually got his autograph!", chinese: "我真的拿到他的签名了！" },
  { english: "I still can't believe it.", chinese: "我仍然不敢相信。" },
  { english: "This is going straight into a frame. 😂", chinese: "这个要直接装框了。😂" },
];

export const manageToExplanation = {
  phrase: "manage to",
  meaning: "successfully do something difficult",
  meaningZh: "成功做困难的事",
  example: "I managed to get his autograph.",
  exampleZh: "我成功拿到了他的签名。",
};

export const finalExamScenario = {
  setup: "You are waiting in line. Staff calls: 'Next!'",
  lines: [
    { speaker: "Curry", line: "Hey! How are you?" },
    { speaker: "May", line: "[Student responds]" },
    { speaker: "Curry", line: "What's your name?" },
    { speaker: "May", line: "[Student responds]" },
    { speaker: "Curry", line: "Do you play basketball?" },
    { speaker: "May", line: "[Student responds]" },
    { speaker: "Curry", line: "You're doing great. Keep it up!", lineZh: "你做得很好。继续！", note: "Curry speaks a little quickly here" },
    { speaker: "May", line: "[May must show she understands or ask for clarification]" },
    { speaker: "May", line: "[May asks one question about basketball or Shenzhen]" },
    { speaker: "Curry", line: "That's a great question. I think the key is practice.", lineZh: "好问题。我认为关键是练习。", note: "Practice response" },
    { speaker: "May", line: "[May reacts naturally]" },
    { speaker: "Staff", line: "Okay, one last photo." },
    { speaker: "May", line: "[May asks/poses for photo]" },
    { speaker: "May", line: "[May requests autograph if permitted]" },
    { speaker: "May", line: "[May says goodbye naturally]" },
  ],
  evaluationCriteria: [
    { criterion: "Communication", description: "Could she express herself clearly?" },
    { criterion: "Naturalness", description: "Did she sound natural, not memorized?" },
    { criterion: "Listening", description: "Could she understand Curry's questions?" },
    { criterion: "Recovery", description: "If confused, did she ask for repetition?" },
    { criterion: "Politeness", description: "Was she respectful and polite?" },
    { criterion: "Confidence", description: "Did she smile and stay calm?" },
  ],
};

export const curryMeetingReadiness = {
  title: "Curry Meeting Readiness",
  titleZh: "库里见面准备度",
  metrics: [
    { label: "Greeting", labelZh: "问候", icon: "👋" },
    { label: "Autograph request", labelZh: "签名请求", icon: "✍️" },
    { label: "Listening", labelZh: "听力", icon: "👂" },
    { label: "Basketball talk", labelZh: "篮球话题", icon: "🏀" },
    { label: "Emergency English", labelZh: "应急英语", icon: "🛟" },
  ],
};

export const confusedEnglishExamples = [
  { bad: "😅 smile + nod + understand absolutely nothing", good: "Sorry, I didn't catch that.", goodZh: "对不起，我没听清。" },
];

export const mayAnswersCurry = {
  yes: "Yeah, whenever I have time.",
  sometimes: "Sometimes. I don't follow every game, but I enjoy watching.",
  beginner: "I'm actually still learning more about basketball.",
};

export const mayFavoritePlayerResponse = {
  joke: "You're asking me that while I'm standing in front of you? 😂",
  simple: "You're definitely one of my favorites.",
};
