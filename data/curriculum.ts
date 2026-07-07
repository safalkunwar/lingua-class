import { Level } from "@/types/curriculum";

export const curriculum: Level[] = [
    {
        id: "level-1",
        title: "Level 1: Greetings & Basics",
        description: "Essential greetings to start a conversation.",
        items: [
            {
                english: "Hello", breakdown: "heh-loh", chinese: "你好", pinyin: "nǐ hǎo", emoji: "👋", imageKeyword: "greeting",
                detailsEn: "The most common and standard greeting used at any time of day.",
                detailsZh: "最常见和标准的问候语，可在任何时间使用。",
                exampleEn: "Hello! It is nice to meet you today.",
                exampleZh: "你好！今天很高兴见到你。"
            },
            {
                english: "Thank you", breakdown: "thangk yoo", chinese: "谢谢", pinyin: "xiè xiè", emoji: "🙏", imageKeyword: "thankyou",
                detailsEn: "Used to show gratitude or appreciation for something done for you.",
                detailsZh: "用于表达感激或感谢之情。",
                exampleEn: "Thank you so much for helping me with my work.",
                exampleZh: "非常感谢你帮我完成工作。"
            },
            {
                english: "Goodbye", breakdown: "good-by", chinese: "再见", pinyin: "zài jiàn", emoji: "🚶", imageKeyword: "farewell",
                detailsEn: "Used when parting ways. Literally translates to 'again see'.",
                detailsZh: "分别时使用的用语。字面意思是“再次相见”。",
                exampleEn: "I have to go home now. Goodbye, see you tomorrow!",
                exampleZh: "我现在得回家了。再见，明天见！"
            },
            {
                english: "Yes", breakdown: "yes", chinese: "是", pinyin: "shì", emoji: "✅", imageKeyword: "checkmark",
                detailsEn: "Used to give an affirmative response. In Chinese, '是' also means 'to be'.",
                detailsZh: "用于给予肯定的回答。",
                exampleEn: "Yes, I would love to go to the park with you.",
                exampleZh: "是的，我很乐意和你一起去公园。"
            },
            {
                english: "No", breakdown: "noh", chinese: "不", pinyin: "bù", emoji: "❌", imageKeyword: "deny",
                detailsEn: "Used to give a negative response. Often placed before a verb in Chinese.",
                detailsZh: "用于给予否定的回答。",
                exampleEn: "No, I do not want any more coffee today.",
                exampleZh: "不，我今天不想再喝咖啡了。"
            },
            {
                english: "Please", breakdown: "pleez", chinese: "请", pinyin: "qǐng", emoji: "🥺", imageKeyword: "polite",
                detailsEn: "Used to be polite when asking for something. Adds courtesy to a request.",
                detailsZh: "请求某物或某事时用于表达礼貌的词语。",
                exampleEn: "Could you please pass me the salt?",
                exampleZh: "请把盐递给我好吗？"
            },
            {
                english: "Excuse me", breakdown: "ek-skyooz mee", chinese: "打扰一下", pinyin: "dǎ rǎo yī xià", emoji: "🙋", imageKeyword: "attention",
                detailsEn: "Used to get someone's attention politely or apologize for an interruption.",
                detailsZh: "用于礼貌地引起某人注意或为打扰道歉。",
                exampleEn: "Excuse me, do you know what time it is?",
                exampleZh: "打扰一下，你知道现在几点吗？"
            },
            {
                english: "Sorry", breakdown: "sor-ee", chinese: "对不起", pinyin: "duì bù qǐ", emoji: "🙇", imageKeyword: "apology",
                detailsEn: "Used to express apology or regret for something you have done wrong.",
                detailsZh: "用于表达歉意或遗憾。",
                exampleEn: "I am very sorry for being late to the meeting.",
                exampleZh: "开会迟到我非常对不起。"
            },
            {
                english: "You're welcome", breakdown: "yoor wel-kum", chinese: "不客气", pinyin: "bú kè qì", emoji: "😊", imageKeyword: "smile",
                detailsEn: "The polite response when someone thanks you. Literally means 'don't be polite'.",
                detailsZh: "对“谢谢”的礼貌回复。字面意思是“不要客气”。",
                exampleEn: "A: Thank you! B: You're welcome, anytime!",
                exampleZh: "甲：谢谢！乙：不客气，随时都可以！"
            },
            {
                english: "Good morning", breakdown: "good mor-ning", chinese: "早上好", pinyin: "zǎo shàng hǎo", emoji: "🌅", imageKeyword: "sunrise",
                detailsEn: "A greeting used in the early part of the day, before noon.",
                detailsZh: "在一天中较早时候（中午前）使用的问候语。",
                exampleEn: "Good morning everyone! I hope you had a good rest.",
                exampleZh: "大家早上好！希望你们都休息好了。"
            },
            {
                english: "Good afternoon", breakdown: "good af-ter-noon", chinese: "下午好", pinyin: "xià wǔ hǎo", emoji: "☀️", imageKeyword: "afternoon",
                detailsEn: "A greeting used in the afternoon, from noon until evening.",
                detailsZh: "下午时使用的问候语（中午到傍晚之间）。",
                exampleEn: "Good afternoon! Did you have a nice lunch?",
                exampleZh: "下午好！你午饭吃得好吗？"
            },
            {
                english: "Good evening", breakdown: "good eve-ning", chinese: "晚上好", pinyin: "wǎn shàng hǎo", emoji: "🌆", imageKeyword: "evening",
                detailsEn: "A greeting used after sunset when the day is ending.",
                detailsZh: "日落后使用的问候语。",
                exampleEn: "Good evening! The sunset looks beautiful today.",
                exampleZh: "晚上好！今天的日落真美。"
            },
            {
                english: "Good night", breakdown: "good nyt", chinese: "晚安", pinyin: "wǎn ān", emoji: "🌙", imageKeyword: "night",
                detailsEn: "Said when someone is going to sleep or at the end of the day.",
                detailsZh: "当有人要去睡觉或一天结束时说的话。",
                exampleEn: "Good night! Sweet dreams and sleep well.",
                exampleZh: "晚安！做个好梦，好好睡觉。"
            },
            {
                english: "How are you?", breakdown: "how ahr yoo", chinese: "你好吗", pinyin: "nǐ hǎo ma", emoji: "❓", imageKeyword: "conversation",
                detailsEn: "A common polite question asking about someone's well-being.",
                detailsZh: "询问他人近况的常见礼貌用语。",
                exampleEn: "Hi John, how are you doing today?",
                exampleZh: "嗨约翰，你今天好吗？"
            },
            {
                english: "I am fine", breakdown: "eye am fyn", chinese: "我很好", pinyin: "wǒ hěn hǎo", emoji: "😄", imageKeyword: "happy",
                detailsEn: "The standard polite response to 'How are you?'.",
                detailsZh: "对“你好吗？”的标准礼貌回复。",
                exampleEn: "I am fine, thank you for asking!",
                exampleZh: "我很好，谢谢你的关心！"
            },
            {
                english: "Nice to meet you", breakdown: "nys too meet yoo", chinese: "很高兴认识你", pinyin: "hěn gāo xìng rèn shí nǐ", emoji: "🤝", imageKeyword: "handshake",
                detailsEn: "A polite phrase used after being introduced to someone new.",
                detailsZh: "在初次认识某人后使用的礼貌用语。",
                exampleEn: "It is very nice to meet you, welcome to our school.",
                exampleZh: "很高兴认识你，欢迎来到我们学校。"
            },
            {
                english: "See you later", breakdown: "see yoo lay-ter", chinese: "回头见", pinyin: "huí tóu jiàn", emoji: "👀", imageKeyword: "wave",
                detailsEn: "An informal way to say goodbye, implying you will meet again soon.",
                detailsZh: "一种非正式的告别方式，意味着你们很快会再见面。",
                exampleEn: "I have to go now, but see you later at the game!",
                exampleZh: "我现在要走了，但比赛时回头见！"
            },
            {
                english: "Take care", breakdown: "tayk kair", chinese: "保重", pinyin: "bǎo zhòng", emoji: "💙", imageKeyword: "care",
                detailsEn: "Said when parting from someone to wish them well.",
                detailsZh: "分别时说的话，祝对方一切安好。",
                exampleEn: "It was great seeing you. Take care on your trip!",
                exampleZh: "很高兴见到你。旅途中保重！"
            },
            {
                english: "Welcome", breakdown: "wel-kum", chinese: "欢迎", pinyin: "huān yíng", emoji: "🏠", imageKeyword: "welcome",
                detailsEn: "Used to greet a guest or someone arriving at a place.",
                detailsZh: "用于迎接客人或到达某地的人。",
                exampleEn: "Welcome to our home, please come in!",
                exampleZh: "欢迎来到我们家，请进！"
            },
            {
                english: "Congratulations", breakdown: "kun-gra-chuh-lay-shuns", chinese: "恭喜", pinyin: "gōng xǐ", emoji: "🎉", imageKeyword: "celebration",
                detailsEn: "Used to praise someone for an achievement or happy event.",
                detailsZh: "用于称赞某人的成就或喜事。",
                exampleEn: "Congratulations on passing your English exam!",
                exampleZh: "恭喜你通过了英语考试！"
            },
            {
                english: "Happy birthday", breakdown: "hap-ee burth-day", chinese: "生日快乐", pinyin: "shēng rì kuài lè", emoji: "🎂", imageKeyword: "birthday",
                detailsEn: "A greeting said to someone on the anniversary of their birth.",
                detailsZh: "在某人生日时说的话。",
                exampleEn: "Happy birthday to you! I hope all your wishes come true.",
                exampleZh: "祝你生日快乐！希望你所有的愿望都成真。"
            },
            {
                english: "Cheers", breakdown: "cheerz", chinese: "干杯", pinyin: "gān bēi", emoji: "🥂", imageKeyword: "toast",
                detailsEn: "Said when raising glasses in a toast. Also used as 'thank you' informally.",
                detailsZh: "举杯庆祝时说的话。在英国口语中也用于表达感谢。",
                exampleEn: "Cheers everyone! Here is to a great new year!",
                exampleZh: "大家干杯！为美好的新年而庆祝！"
            }
        ]
    },
    {
        id: "level-2",
        title: "Level 2: Numbers & Time",
        description: "Counting and telling time.",
        items: [
            {
                english: "One", breakdown: "wun", chinese: "一", pinyin: "yī", emoji: "1️⃣", imageKeyword: "number one",
                detailsEn: "The number 1. The first and most basic number.",
                detailsZh: "数字 1。第一个也是最基本的数字。",
                exampleEn: "I only need one ticket for the movie tonight.",
                exampleZh: "我今晚只需要一张电影票。"
            },
            {
                english: "Two", breakdown: "too", chinese: "二", pinyin: "èr", emoji: "2️⃣", imageKeyword: "pair",
                detailsEn: "The number 2. In Chinese, '两(liǎng)' is used when counting objects.",
                detailsZh: "数字 2。汉语中数量词前用“两”。",
                exampleEn: "Can I get two cups of tea, please?",
                exampleZh: "能给我来两杯茶吗？"
            },
            {
                english: "Three", breakdown: "three", chinese: "三", pinyin: "sān", emoji: "3️⃣", imageKeyword: "three objects",
                detailsEn: "The number 3.",
                detailsZh: "数字 3。",
                exampleEn: "We will meet at the restaurant at three o'clock.",
                exampleZh: "我们三点钟在餐厅见面。"
            },
            {
                english: "Four", breakdown: "for", chinese: "四", pinyin: "sì", emoji: "4️⃣", imageKeyword: "four seasons",
                detailsEn: "The number 4. In Chinese culture, this number is considered unlucky.",
                detailsZh: "数字 4。在中国文化中，这个数字被认为不吉利。",
                exampleEn: "There are four seasons in a year: spring, summer, fall, and winter.",
                exampleZh: "一年有四个季节：春、夏、秋、冬。"
            },
            {
                english: "Five", breakdown: "fyv", chinese: "五", pinyin: "wǔ", emoji: "5️⃣", imageKeyword: "hand five",
                detailsEn: "The number 5. We have five fingers on each hand.",
                detailsZh: "数字 5。我们每只手有五根手指。",
                exampleEn: "The meeting will start in five minutes.",
                exampleZh: "会议将在五分钟后开始。"
            },
            {
                english: "Six", breakdown: "siks", chinese: "六", pinyin: "liù", emoji: "6️⃣", imageKeyword: "hexagon",
                detailsEn: "The number 6. A hexagon has six sides.",
                detailsZh: "数字 6。六边形有六条边。",
                exampleEn: "I wake up at six o'clock every morning.",
                exampleZh: "我每天早上六点起床。"
            },
            {
                english: "Seven", breakdown: "seh-vuhn", chinese: "七", pinyin: "qī", emoji: "7️⃣", imageKeyword: "rainbow",
                detailsEn: "The number 7. A rainbow has seven colors.",
                detailsZh: "数字 7。彩虹有七种颜色。",
                exampleEn: "There are seven days in a week.",
                exampleZh: "一周有七天。"
            },
            {
                english: "Eight", breakdown: "ayt", chinese: "八", pinyin: "bā", emoji: "8️⃣", imageKeyword: "octopus",
                detailsEn: "The number 8. In Chinese culture, 8 is considered very lucky.",
                detailsZh: "数字 8。在中国文化中，8被认为非常吉利。",
                exampleEn: "An octopus has eight arms.",
                exampleZh: "章鱼有八条手臂。"
            },
            {
                english: "Nine", breakdown: "nyn", chinese: "九", pinyin: "jiǔ", emoji: "9️⃣", imageKeyword: "nine",
                detailsEn: "The number 9. Nine is the largest single digit number.",
                detailsZh: "数字 9。九是最大的个位数。",
                exampleEn: "The school bell rings at nine in the morning.",
                exampleZh: "学校的钟声在早上九点响起。"
            },
            {
                english: "Ten", breakdown: "ten", chinese: "十", pinyin: "shí", emoji: "🔟", imageKeyword: "ten fingers",
                detailsEn: "The number 10. We have ten fingers in total.",
                detailsZh: "数字 10。我们总共有十根手指。",
                exampleEn: "I scored ten out of ten on my test!",
                exampleZh: "我的考试得了满分十分！"
            },
            {
                english: "Today", breakdown: "tuh-day", chinese: "今天", pinyin: "jīn tiān", emoji: "📅", imageKeyword: "calendar",
                detailsEn: "The current day we are living in right now.",
                detailsZh: "我们现在所处的这一天。",
                exampleEn: "Today is a very beautiful and sunny day.",
                exampleZh: "今天是一个非常美丽阳光明媚的日子。"
            },
            {
                english: "Tomorrow", breakdown: "tuh-mor-oh", chinese: "明天", pinyin: "míng tiān", emoji: "🔜", imageKeyword: "sunrise",
                detailsEn: "The day after today.",
                detailsZh: "今天之后的一天。",
                exampleEn: "I will finish this project by tomorrow morning.",
                exampleZh: "我会在明天早上之前完成这个项目。"
            },
            {
                english: "Yesterday", breakdown: "yes-ter-day", chinese: "昨天", pinyin: "zuó tiān", emoji: "🔙", imageKeyword: "past",
                detailsEn: "The day before today.",
                detailsZh: "今天之前的一天。",
                exampleEn: "I went to the grocery store yesterday evening.",
                exampleZh: "我昨天傍晚去了趟杂货店。"
            },
            {
                english: "Morning", breakdown: "mor-ning", chinese: "早上", pinyin: "zǎo shàng", emoji: "🌄", imageKeyword: "morning",
                detailsEn: "The early part of the day, from midnight to noon.",
                detailsZh: "一天中较早的时间，从午夜到中午。",
                exampleEn: "I like to drink coffee in the morning.",
                exampleZh: "我喜欢在早上喝咖啡。"
            },
            {
                english: "Night", breakdown: "nyt", chinese: "晚上", pinyin: "wǎn shàng", emoji: "🌙", imageKeyword: "night sky",
                detailsEn: "The period of darkness between sunset and sunrise.",
                detailsZh: "日落到日出之间的黑暗时期。",
                exampleEn: "The stars are beautiful at night.",
                exampleZh: "夜晚的星星很美丽。"
            },
            {
                english: "Week", breakdown: "week", chinese: "星期", pinyin: "xīng qī", emoji: "🗓️", imageKeyword: "week",
                detailsEn: "A period of seven days, usually starting on Monday or Sunday.",
                detailsZh: "七天的时间，通常从星期一或星期日开始。",
                exampleEn: "I exercise three times a week.",
                exampleZh: "我每周锻炼三次。"
            },
            {
                english: "Month", breakdown: "munth", chinese: "月", pinyin: "yuè", emoji: "📆", imageKeyword: "month",
                detailsEn: "One of the twelve periods that a year is divided into.",
                detailsZh: "一年被分为十二个月。",
                exampleEn: "My birthday is in the third month of the year.",
                exampleZh: "我的生日在一年中的第三个月。"
            },
            {
                english: "Year", breakdown: "yeer", chinese: "年", pinyin: "nián", emoji: "🗓", imageKeyword: "new year",
                detailsEn: "A period of 365 days, or 366 in a leap year.",
                detailsZh: "365天的时间段，闰年为366天。",
                exampleEn: "I have been studying English for one year.",
                exampleZh: "我学英语已经一年了。"
            },
            {
                english: "Now", breakdown: "now", chinese: "现在", pinyin: "xiàn zài", emoji: "⏳", imageKeyword: "clock",
                detailsEn: "The present moment, happening at this exact time.",
                detailsZh: "当前的时刻，就在此时此刻发生的。",
                exampleEn: "We need to leave the house right now.",
                exampleZh: "我们现在必须离开家。"
            },
            {
                english: "Hour", breakdown: "ow-er", chinese: "小时", pinyin: "xiǎo shí", emoji: "🕐", imageKeyword: "hourglass",
                detailsEn: "A unit of time equal to 60 minutes.",
                detailsZh: "等于60分钟的时间单位。",
                exampleEn: "The flight from Beijing to Shanghai takes two hours.",
                exampleZh: "从北京到上海的航班需要两个小时。"
            },
            {
                english: "Minute", breakdown: "min-it", chinese: "分钟", pinyin: "fēn zhōng", emoji: "⏱️", imageKeyword: "timer",
                detailsEn: "A unit of time equal to 60 seconds.",
                detailsZh: "等于60秒的时间单位。",
                exampleEn: "I will be ready in just five minutes.",
                exampleZh: "我五分钟后就准备好了。"
            },
            {
                english: "Second", breakdown: "sek-und", chinese: "秒", pinyin: "miǎo", emoji: "⚡", imageKeyword: "fast",
                detailsEn: "The smallest common unit of time, 1/60 of a minute.",
                detailsZh: "最小的常见时间单位，一分钟的六十分之一。",
                exampleEn: "The runner finished the race in under ten seconds.",
                exampleZh: "选手在十秒内完成了比赛。"
            }
        ]
    },
    {
        id: "level-3",
        title: "Level 3: Food & Dining",
        description: "Vocabulary for eating out and describing food.",
        items: [
            {
                english: "Water", breakdown: "wah-ter", chinese: "水", pinyin: "shuǐ", emoji: "💧", imageKeyword: "water glass",
                detailsEn: "The most essential clear liquid for drinking. The human body is 60% water.",
                detailsZh: "最基本的饮用透明液体。人体60%是水。",
                exampleEn: "Can I please get a glass of cold water?",
                exampleZh: "能给我来一杯冷水吗？"
            },
            {
                english: "Rice", breakdown: "rys", chinese: "米饭", pinyin: "mǐ fàn", emoji: "🍚", imageKeyword: "rice bowl",
                detailsEn: "A staple food grain cooked by boiling. The most important food in Asia.",
                detailsZh: "通过蒸煮的主食谷物。是亚洲最重要的食物。",
                exampleEn: "I would like a bowl of steamed white rice.",
                exampleZh: "我想要一碗蒸白米饭。"
            },
            {
                english: "Noodles", breakdown: "noo-duls", chinese: "面条", pinyin: "miàn tiáo", emoji: "🍜", imageKeyword: "noodles",
                detailsEn: "A type of food made from flour and water, cut into long strips.",
                detailsZh: "一种由面粉和水制成、切成长条的食物。",
                exampleEn: "I love eating spicy noodles with egg on top.",
                exampleZh: "我喜欢吃上面放鸡蛋的辣面条。"
            },
            {
                english: "Bread", breakdown: "bred", chinese: "面包", pinyin: "miàn bāo", emoji: "🍞", imageKeyword: "bread loaf",
                detailsEn: "A baked food made from flour and water. A staple food in Western countries.",
                detailsZh: "由面粉和水制成的烘焙食品。西方国家的主食。",
                exampleEn: "I eat toast and butter with bread every morning.",
                exampleZh: "我每天早上吃烤面包和黄油。"
            },
            {
                english: "Meat", breakdown: "meet", chinese: "肉", pinyin: "ròu", emoji: "🥩", imageKeyword: "meat",
                detailsEn: "The flesh of an animal used as food. Common types include beef, pork, and chicken.",
                detailsZh: "用作食物的动物的肉。常见的有牛肉、猪肉和鸡肉。",
                exampleEn: "He doesn't eat meat because he is a vegetarian.",
                exampleZh: "他不吃肉因为他是个素食主义者。"
            },
            {
                english: "Fish", breakdown: "fish", chinese: "鱼", pinyin: "yú", emoji: "🐟", imageKeyword: "fish dish",
                detailsEn: "An aquatic animal commonly eaten as food. Rich in protein and healthy omega-3 fats.",
                detailsZh: "通常作为食物食用的水生动物。富含蛋白质和健康的欧米茄-3脂肪。",
                exampleEn: "I prefer eating fish instead of red meat.",
                exampleZh: "我更喜欢吃鱼而不是红肉。"
            },
            {
                english: "Egg", breakdown: "eg", chinese: "鸡蛋", pinyin: "jī dàn", emoji: "🥚", imageKeyword: "eggs",
                detailsEn: "A round or oval object laid by hens, eaten as food. Very nutritious.",
                detailsZh: "母鸡产下的圆形或椭圆形物体，作为食物食用。非常有营养。",
                exampleEn: "I eat two boiled eggs for breakfast every day.",
                exampleZh: "我每天早餐吃两个煮鸡蛋。"
            },
            {
                english: "Vegetable", breakdown: "vej-tuh-buhl", chinese: "蔬菜", pinyin: "shū cài", emoji: "🥬", imageKeyword: "vegetables",
                detailsEn: "A plant or part of a plant used as food. Essential for a healthy diet.",
                detailsZh: "用作食物的植物或植物的一部分。对健康饮食至关重要。",
                exampleEn: "You need to eat more green vegetables to be healthy.",
                exampleZh: "你需要多吃绿色蔬菜才能保持健康。"
            },
            {
                english: "Fruit", breakdown: "froot", chinese: "水果", pinyin: "shuǐ guǒ", emoji: "🍎", imageKeyword: "fruits",
                detailsEn: "The sweet or sour fleshy product of a tree or plant. High in vitamins.",
                detailsZh: "树木或植物的甜或酸的果肉产品。富含维生素。",
                exampleEn: "I eat a piece of fruit after every meal.",
                exampleZh: "我每餐后都会吃一个水果。"
            },
            {
                english: "Milk", breakdown: "milk", chinese: "牛奶", pinyin: "niú nǎi", emoji: "🥛", imageKeyword: "milk",
                detailsEn: "A white liquid produced by cows. Rich in calcium for strong bones.",
                detailsZh: "奶牛产的白色液体。富含钙，有助于骨骼强健。",
                exampleEn: "Children should drink milk every day to grow strong.",
                exampleZh: "孩子们应该每天喝牛奶以茁壮成长。"
            },
            {
                english: "Tea", breakdown: "tee", chinese: "茶", pinyin: "chá", emoji: "🍵", imageKeyword: "tea cup",
                detailsEn: "A hot drink made by steeping dried leaves in boiling water. Very popular in China.",
                detailsZh: "用沸水浸泡干燥叶子制成的热饮。在中国非常受欢迎。",
                exampleEn: "Would you like a cup of green tea after dinner?",
                exampleZh: "晚饭后想来一杯绿茶吗？"
            },
            {
                english: "Coffee", breakdown: "kof-ee", chinese: "咖啡", pinyin: "kā fēi", emoji: "☕", imageKeyword: "coffee cup",
                detailsEn: "A hot drink made from roasted coffee beans. Popular worldwide for its energy boost.",
                detailsZh: "由烘焙咖啡豆制成的热饮。因其提神效果而在全球广受欢迎。",
                exampleEn: "I cannot start my morning without a cup of coffee.",
                exampleZh: "我没有一杯咖啡就无法开始早晨的生活。"
            },
            {
                english: "Soup", breakdown: "soop", chinese: "汤", pinyin: "tāng", emoji: "🍲", imageKeyword: "soup bowl",
                detailsEn: "A liquid food made by boiling ingredients in water. Warming and nutritious.",
                detailsZh: "通过在水中煮沸食材制成的液体食物。温暖且有营养。",
                exampleEn: "This hot soup is perfect for a cold winter day.",
                exampleZh: "这碗热汤非常适合寒冷的冬天。"
            },
            {
                english: "Cake", breakdown: "kayk", chinese: "蛋糕", pinyin: "dàn gāo", emoji: "🍰", imageKeyword: "cake slice",
                detailsEn: "A sweet baked dessert, usually eaten on special occasions like birthdays.",
                detailsZh: "一种甜的烘焙甜点，通常在生日等特殊场合食用。",
                exampleEn: "We ordered a chocolate cake for her birthday party.",
                exampleZh: "我们为她的生日派对订了一个巧克力蛋糕。"
            },
            {
                english: "Spicy", breakdown: "spy-see", chinese: "辣", pinyin: "là", emoji: "🌶️", imageKeyword: "chili pepper",
                detailsEn: "Used to describe food with a strong, hot burning flavor from chili peppers.",
                detailsZh: "用来形容含有辣椒的强烈辛辣口味的食物。",
                exampleEn: "This soup is too spicy for me to eat.",
                exampleZh: "这汤对我来说太辣了吃不下。"
            },
            {
                english: "Sweet", breakdown: "sweet", chinese: "甜", pinyin: "tián", emoji: "🍬", imageKeyword: "candy",
                detailsEn: "A pleasant sugary taste. The opposite of sour, bitter, or salty.",
                detailsZh: "令人愉快的含糖味道。与酸、苦或咸相对。",
                exampleEn: "This mango is very sweet and juicy.",
                exampleZh: "这个芒果非常甜而多汁。"
            },
            {
                english: "Sour", breakdown: "sowr", chinese: "酸", pinyin: "suān", emoji: "🍋", imageKeyword: "lemon",
                detailsEn: "A sharp acidic taste like lemons or vinegar.",
                detailsZh: "像柠檬或醋一样的尖锐酸味。",
                exampleEn: "I love to put sour lemon juice on my fish.",
                exampleZh: "我喜欢在鱼上放酸柠檬汁。"
            },
            {
                english: "Menu", breakdown: "men-yoo", chinese: "菜单", pinyin: "cài dān", emoji: "📖", imageKeyword: "restaurant menu",
                detailsEn: "A list of food and drink items available in a restaurant.",
                detailsZh: "餐厅里提供的食物和饮料清单。",
                exampleEn: "Could we please see the dessert menu?",
                exampleZh: "能让我们看看甜点菜单吗？"
            },
            {
                english: "Restaurant", breakdown: "res-ter-ont", chinese: "餐厅", pinyin: "cān tīng", emoji: "🍽️", imageKeyword: "restaurant",
                detailsEn: "A place where people pay to sit and eat meals prepared and served on the premises.",
                detailsZh: "人们付钱坐着享用在现场准备和供应的餐食的地方。",
                exampleEn: "Let us go to the new Chinese restaurant downtown.",
                exampleZh: "我们去市中心那家新的中餐馆吧。"
            },
            {
                english: "Breakfast", breakdown: "brek-fust", chinese: "早餐", pinyin: "zǎo cān", emoji: "🥞", imageKeyword: "breakfast",
                detailsEn: "The first meal of the day, eaten in the morning. Very important for energy.",
                detailsZh: "一天中的第一顿饭，在早上吃。对精力非常重要。",
                exampleEn: "I never skip breakfast because it gives me energy for the day.",
                exampleZh: "我从不跳过早餐，因为它给我一天的精力。"
            },
            {
                english: "Lunch", breakdown: "lunch", chinese: "午餐", pinyin: "wǔ cān", emoji: "🥙", imageKeyword: "lunch",
                detailsEn: "The meal eaten in the middle of the day, usually around noon.",
                detailsZh: "在一天中间吃的饭，通常在中午左右。",
                exampleEn: "I usually eat lunch with my colleagues at work.",
                exampleZh: "我通常在工作时和同事一起吃午餐。"
            },
            {
                english: "Dinner", breakdown: "din-er", chinese: "晚餐", pinyin: "wǎn cān", emoji: "🍱", imageKeyword: "dinner",
                detailsEn: "The main meal of the day, eaten in the evening.",
                detailsZh: "一天中的主餐，在傍晚吃。",
                exampleEn: "Our family always eats dinner together at seven o'clock.",
                exampleZh: "我们家总是在七点一起吃晚餐。"
            }
        ]
    },
    {
        id: "level-4",
        title: "Level 4: Useful Phrases",
        description: "Putting words together into real sentences.",
        items: [
            {
                english: "I don't understand", breakdown: "eye dohnt un-der-stand", chinese: "我不明白", pinyin: "wǒ bù míng bái", emoji: "😕", imageKeyword: "confused",
                detailsEn: "A crucial phrase when learning a language, used when you are confused.",
                detailsZh: "学习语言时非常关键的句子，当你不清楚对方意思时使用。",
                exampleEn: "I'm sorry, you are speaking too fast and I don't understand.",
                exampleZh: "对不起，你说得太快了，我不明白。"
            },
            {
                english: "Where is...?", breakdown: "hwair iz", chinese: "...在哪里？", pinyin: "...zài nǎ lǐ?", emoji: "📍", imageKeyword: "map direction",
                detailsEn: "Used to ask the location of a person or place.",
                detailsZh: "用于询问某人或某地的位置。",
                exampleEn: "Excuse me, where is the nearest subway station?",
                exampleZh: "打扰一下，最近的地铁站在哪里？"
            },
            {
                english: "What is your name?", breakdown: "hwut iz yoor naym", chinese: "你叫什么名字？", pinyin: "nǐ jiào shén me míng zì", emoji: "📛", imageKeyword: "nametag",
                detailsEn: "The standard question to ask for someone's identity.",
                detailsZh: "询问他人身份的标准问题。",
                exampleEn: "Hello, it is nice to meet you. What is your name?",
                exampleZh: "你好，很高兴认识你。你叫什么名字？"
            },
            {
                english: "My name is...", breakdown: "my naym iz", chinese: "我的名字是...", pinyin: "wǒ de míng zì shì...", emoji: "🗣️", imageKeyword: "introduction",
                detailsEn: "Used to introduce yourself to others. Always followed by your name.",
                detailsZh: "用于向他人介绍自己的名字。",
                exampleEn: "My name is David and I am from Canada.",
                exampleZh: "我的名字是大卫，我来自加拿大。"
            },
            {
                english: "Can you speak slowly?", breakdown: "kan yoo speek sloh-lee", chinese: "你能说慢一点吗？", pinyin: "nǐ néng shuō màn yī diǎn ma", emoji: "🐢", imageKeyword: "slow",
                detailsEn: "Used when the speaker is talking too fast for you to follow.",
                detailsZh: "当对方语速太快你跟不上时使用。",
                exampleEn: "My English is not very good, can you please speak slowly?",
                exampleZh: "我的英语不太好，你能说慢一点吗？"
            },
            {
                english: "How much is this?", breakdown: "how much iz this", chinese: "这个多少钱？", pinyin: "zhè ge duō shǎo qián", emoji: "💰", imageKeyword: "shopping price",
                detailsEn: "The essential phrase for shopping and asking for prices.",
                detailsZh: "购物和询问价格时的基本用语。",
                exampleEn: "I want to buy this shirt. How much is this?",
                exampleZh: "我想买这件衬衫。这个多少钱？"
            },
            {
                english: "Where is the bathroom?", breakdown: "hwair iz the bath-room", chinese: "洗手间在哪里？", pinyin: "xǐ shǒu jiān zài nǎ lǐ", emoji: "🚻", imageKeyword: "restroom sign",
                detailsEn: "A very important question when traveling or in public places.",
                detailsZh: "旅行或在公共场所时非常重要的问题。",
                exampleEn: "Excuse me, could you point me to where the bathroom is?",
                exampleZh: "打扰一下，您能指给我洗手间在哪里吗？"
            },
            {
                english: "I am hungry", breakdown: "eye am hung-gree", chinese: "我饿了", pinyin: "wǒ è le", emoji: "🤤", imageKeyword: "hungry stomach",
                detailsEn: "Used to express that you want to eat food.",
                detailsZh: "用来表达你想吃东西了。",
                exampleEn: "I am so hungry! Can we go eat something now?",
                exampleZh: "我好饿！我们能去吃点东西吗？"
            },
            {
                english: "I am tired", breakdown: "eye am tyrd", chinese: "我累了", pinyin: "wǒ lèi le", emoji: "😴", imageKeyword: "tired",
                detailsEn: "Used to express that you are exhausted and need rest.",
                detailsZh: "用来表达你很疲惫需要休息。",
                exampleEn: "I am very tired after working all day.",
                exampleZh: "工作了一整天后我很累。"
            },
            {
                english: "I love you", breakdown: "eye luv yoo", chinese: "我爱你", pinyin: "wǒ ài nǐ", emoji: "❤️", imageKeyword: "love heart",
                detailsEn: "The most powerful phrase of affection in any language.",
                detailsZh: "在任何语言中最有力的爱意表达。",
                exampleEn: "I love you more than anything in the world.",
                exampleZh: "我爱你胜过世界上的一切。"
            },
            {
                english: "I need help", breakdown: "eye need help", chinese: "我需要帮助", pinyin: "wǒ xū yào bāng zhù", emoji: "🆘", imageKeyword: "help",
                detailsEn: "Used when you are in trouble or need assistance from others.",
                detailsZh: "当你遇到麻烦或需要他人帮助时使用。",
                exampleEn: "I need help with my homework, can you assist me?",
                exampleZh: "我需要帮助做作业，你能帮我吗？"
            },
            {
                english: "Can you help me?", breakdown: "kan yoo help mee", chinese: "你能帮我吗？", pinyin: "nǐ néng bāng wǒ ma", emoji: "🙏", imageKeyword: "asking help",
                detailsEn: "Politely asking someone to assist you with something.",
                detailsZh: "礼貌地请求某人帮助你做某事。",
                exampleEn: "Can you help me carry these heavy bags?",
                exampleZh: "你能帮我提这些重包吗？"
            },
            {
                english: "I don't know", breakdown: "eye dohnt noh", chinese: "我不知道", pinyin: "wǒ bù zhī dào", emoji: "🤷", imageKeyword: "shrug",
                detailsEn: "Used when you do not have the information or answer.",
                detailsZh: "当你没有信息或答案时使用。",
                exampleEn: "I am sorry, I don't know where the station is.",
                exampleZh: "对不起，我不知道车站在哪里。"
            },
            {
                english: "What time is it?", breakdown: "hwut tym iz it", chinese: "现在几点了？", pinyin: "xiàn zài jǐ diǎn le", emoji: "⌚", imageKeyword: "wristwatch",
                detailsEn: "Used to ask for the current time.",
                detailsZh: "用于询问当前时间。",
                exampleEn: "Excuse me, what time is it? I am late for my class.",
                exampleZh: "打扰一下，现在几点了？我上课要迟到了。"
            },
            {
                english: "How do you say...?", breakdown: "how doo yoo say", chinese: "...怎么说？", pinyin: "...zěn me shuō?", emoji: "💬", imageKeyword: "speech bubble",
                detailsEn: "Used to ask how to say a word or phrase in another language.",
                detailsZh: "用于询问如何用另一种语言说某个词或短语。",
                exampleEn: "How do you say 'thank you' in Chinese?",
                exampleZh: "谢谢用中文怎么说？"
            },
            {
                english: "What does it mean?", breakdown: "hwut duz it meen", chinese: "这是什么意思？", pinyin: "zhè shì shén me yì si", emoji: "🤔", imageKeyword: "thinking",
                detailsEn: "Used to ask for the meaning or definition of something.",
                detailsZh: "用于询问某事的含义或定义。",
                exampleEn: "I saw this new word. What does it mean?",
                exampleZh: "我看到了这个新单词，这是什么意思？"
            },
            {
                english: "Can I try?", breakdown: "kan eye try", chinese: "我可以试试吗？", pinyin: "wǒ kě yǐ shì shì ma", emoji: "🖐️", imageKeyword: "trying",
                detailsEn: "Used when you want permission to attempt something.",
                detailsZh: "当你想获得尝试某事的许可时使用。",
                exampleEn: "This looks delicious. Can I try a little?",
                exampleZh: "这个看起来很好吃。我可以试试吗？"
            },
            {
                english: "That is correct", breakdown: "that iz kuh-rekt", chinese: "那是正确的", pinyin: "nà shì zhèng quē de", emoji: "✔️", imageKeyword: "correct answer",
                detailsEn: "Used to confirm that something is right or accurate.",
                detailsZh: "用于确认某事是正确的或准确的。",
                exampleEn: "Yes, that is correct! You are learning very fast.",
                exampleZh: "是的，那是正确的！你学得很快。"
            },
            {
                english: "I agree", breakdown: "eye uh-gree", chinese: "我同意", pinyin: "wǒ tóng yì", emoji: "👍", imageKeyword: "thumbs up",
                detailsEn: "Used to express that you share the same opinion as someone.",
                detailsZh: "用于表达你与某人持有相同观点。",
                exampleEn: "I agree with your idea, let us do it that way.",
                exampleZh: "我同意你的想法，让我们那样做吧。"
            },
            {
                english: "Let us go", breakdown: "let us goh", chinese: "走吧", pinyin: "zǒu ba", emoji: "🚶", imageKeyword: "walking",
                detailsEn: "An informal suggestion to start moving or leaving a place.",
                detailsZh: "开始行动或离开某地的非正式建议。",
                exampleEn: "The movie starts in ten minutes. Let us go now!",
                exampleZh: "电影十分钟后开始。我们走吧！"
            },
            {
                english: "I am happy", breakdown: "eye am hap-ee", chinese: "我很开心", pinyin: "wǒ hěn kāi xīn", emoji: "😄", imageKeyword: "happy person",
                detailsEn: "Used to express a feeling of joy and contentment.",
                detailsZh: "用来表达喜悦和满足感。",
                exampleEn: "I am so happy that you came to visit me today.",
                exampleZh: "我很开心你今天来看我了。"
            },
            {
                english: "Be careful", breakdown: "bee kair-ful", chinese: "小心", pinyin: "xiǎo xīn", emoji: "⚠️", imageKeyword: "warning sign",
                detailsEn: "A warning to pay attention and avoid danger.",
                detailsZh: "提醒注意并避免危险的警告。",
                exampleEn: "Be careful when you cross the busy road.",
                exampleZh: "过繁忙的马路时要小心。"
            }
        ]
    },
    {
        id: "level-5",
        title: "Level 5: Daily Life",
        description: "Commonly used words in everyday life.",
        items: [
            {
                english: "Work", breakdown: "wurk", chinese: "工作", pinyin: "gōng zuò", emoji: "💼", imageKeyword: "office work",
                detailsEn: "Activity involving mental or physical effort done to achieve a result.",
                detailsZh: "为了达到某种结果而进行的需要脑力或体力努力的活动。",
                exampleEn: "I have a lot of work to finish before the weekend.",
                exampleZh: "在周末之前我有很多工作要完成。"
            },
            {
                english: "Sleep", breakdown: "sleep", chinese: "睡觉", pinyin: "shuì jiào", emoji: "🛌", imageKeyword: "sleeping bed",
                detailsEn: "A condition of rest for the body and mind that recurs every night.",
                detailsZh: "每晚都会发生的身心休息状态。",
                exampleEn: "I am very tired and I need to get some sleep.",
                exampleZh: "我非常累，我需要睡一会儿。"
            },
            {
                english: "Phone", breakdown: "fohn", chinese: "手机", pinyin: "shǒu jī", emoji: "📱", imageKeyword: "smartphone",
                detailsEn: "A portable electronic device used for communication, browsing, and more.",
                detailsZh: "用于通信、浏览等的便携式电子设备。",
                exampleEn: "I lost my phone and I cannot call my friends.",
                exampleZh: "我弄丢了手机，无法给朋友打电话。"
            },
            {
                english: "Money", breakdown: "mun-ee", chinese: "钱", pinyin: "qián", emoji: "💵", imageKeyword: "money cash",
                detailsEn: "A medium of exchange in the form of coins and banknotes.",
                detailsZh: "以硬币和纸币形式存在的交换媒介。",
                exampleEn: "Do you have enough money to buy the tickets?",
                exampleZh: "你有足够的钱买票吗？"
            },
            {
                english: "Home", breakdown: "hohm", chinese: "家", pinyin: "jiā", emoji: "🏠", imageKeyword: "house home",
                detailsEn: "The place where one lives permanently, especially with family.",
                detailsZh: "一个人永久居住的地方，特别是和家人在一起。",
                exampleEn: "After a long day of traveling, it feels great to be home.",
                exampleZh: "经过漫长的一天旅行后，回到家感觉真好。"
            },
            {
                english: "Friend", breakdown: "frend", chinese: "朋友", pinyin: "péng yǒu", emoji: "👫", imageKeyword: "friends together",
                detailsEn: "A person whom one knows and with whom one has mutual affection.",
                detailsZh: "认识并与之有深厚感情联系的人。",
                exampleEn: "She is my best friend from high school.",
                exampleZh: "她是我高中时最好的朋友。"
            },
            {
                english: "School", breakdown: "skool", chinese: "学校", pinyin: "xué xiào", emoji: "🏫", imageKeyword: "school building",
                detailsEn: "An institution for educating children and young people.",
                detailsZh: "教育儿童和年轻人的机构。",
                exampleEn: "The children take the bus to school every morning.",
                exampleZh: "孩子们每天早上坐公交车去学校。"
            },
            {
                english: "Car", breakdown: "kar", chinese: "汽车", pinyin: "qì chē", emoji: "🚗", imageKeyword: "car road",
                detailsEn: "A four-wheeled road vehicle powered by an engine.",
                detailsZh: "由发动机驱动的四轮公路车辆。",
                exampleEn: "I parked my car in the garage across the street.",
                exampleZh: "我把汽车停在街对面的车库里了。"
            },
            {
                english: "Book", breakdown: "book", chinese: "书", pinyin: "shū", emoji: "📚", imageKeyword: "open book",
                detailsEn: "A written or printed work consisting of pages in a cover.",
                detailsZh: "由封面内页面组成的书面或印刷作品。",
                exampleEn: "I read a book for thirty minutes every night before bed.",
                exampleZh: "我每晚睡前读三十分钟的书。"
            },
            {
                english: "Doctor", breakdown: "dok-ter", chinese: "医生", pinyin: "yī shēng", emoji: "👨‍⚕️", imageKeyword: "doctor hospital",
                detailsEn: "A person qualified to practice medicine and treat sick people.",
                detailsZh: "有资格行医和治疗病人的人。",
                exampleEn: "You should see a doctor about that cough.",
                exampleZh: "你应该去看医生处理那个咳嗽。"
            },
            {
                english: "Hospital", breakdown: "hos-pit-ul", chinese: "医院", pinyin: "yī yuàn", emoji: "🏥", imageKeyword: "hospital building",
                detailsEn: "An institution where sick or injured people receive medical treatment.",
                detailsZh: "病人或受伤者接受医疗治疗的机构。",
                exampleEn: "My mother works as a nurse in the local hospital.",
                exampleZh: "我妈妈在当地医院担任护士。"
            },
            {
                english: "Market", breakdown: "mar-kit", chinese: "市场", pinyin: "shì chǎng", emoji: "🏪", imageKeyword: "market stall",
                detailsEn: "A place where people buy and sell goods and food.",
                detailsZh: "人们买卖商品和食物的地方。",
                exampleEn: "I go to the fresh market every Sunday morning.",
                exampleZh: "我每个星期天早上都去新鲜市场。"
            },
            {
                english: "Bank", breakdown: "bangk", chinese: "银行", pinyin: "yín háng", emoji: "🏦", imageKeyword: "bank building",
                detailsEn: "A financial institution that holds money and provides loans.",
                detailsZh: "持有资金并提供贷款的金融机构。",
                exampleEn: "I need to go to the bank to withdraw some money.",
                exampleZh: "我需要去银行取一些钱。"
            },
            {
                english: "Park", breakdown: "park", chinese: "公园", pinyin: "gōng yuán", emoji: "🌳", imageKeyword: "city park",
                detailsEn: "A large public green space in a city used for recreation.",
                detailsZh: "城市中用于休闲的大型公共绿地。",
                exampleEn: "I take my dog for a walk in the park every evening.",
                exampleZh: "我每天傍晚带狗去公园散步。"
            },
            {
                english: "Bus", breakdown: "bus", chinese: "公共汽车", pinyin: "gōng gòng qì chē", emoji: "🚌", imageKeyword: "city bus",
                detailsEn: "A large road vehicle that carries many passengers along a fixed route.",
                detailsZh: "沿固定路线运载许多乘客的大型公路车辆。",
                exampleEn: "I take the bus to school because it is cheap.",
                exampleZh: "我坐公共汽车去上学，因为便宜。"
            },
            {
                english: "Train", breakdown: "trayn", chinese: "火车", pinyin: "huǒ chē", emoji: "🚆", imageKeyword: "train station",
                detailsEn: "A connected series of railway carriages moved by an engine.",
                detailsZh: "由发动机驱动的一系列相连铁路车厢。",
                exampleEn: "The high-speed train from Beijing to Shanghai is very fast.",
                exampleZh: "从北京到上海的高速火车非常快。"
            },
            {
                english: "Weather", breakdown: "weth-er", chinese: "天气", pinyin: "tiān qì", emoji: "🌤️", imageKeyword: "weather sky",
                detailsEn: "The atmospheric conditions (rain, sun, wind) at a particular place and time.",
                detailsZh: "特定地点和时间的大气条件（雨、太阳、风）。",
                exampleEn: "The weather today is perfect for going to the beach.",
                exampleZh: "今天的天气非常适合去海滩。"
            },
            {
                english: "Rain", breakdown: "rayn", chinese: "雨", pinyin: "yǔ", emoji: "🌧️", imageKeyword: "rain drops",
                detailsEn: "Water falling from clouds in drops. Makes plants grow.",
                detailsZh: "从云端以水滴形式落下的水。有助于植物生长。",
                exampleEn: "Don't forget to bring an umbrella because it will rain today.",
                exampleZh: "别忘了带伞，因为今天会下雨。"
            },
            {
                english: "Sun", breakdown: "sun", chinese: "太阳", pinyin: "tài yáng", emoji: "☀️", imageKeyword: "bright sun",
                detailsEn: "The star at the center of the solar system that gives us light and heat.",
                detailsZh: "太阳系中心的恒星，给我们带来光和热。",
                exampleEn: "The sun rises in the east and sets in the west.",
                exampleZh: "太阳从东方升起，从西方落下。"
            },
            {
                english: "Family", breakdown: "fam-uh-lee", chinese: "家人", pinyin: "jiā rén", emoji: "👨‍👩‍👧‍👦", imageKeyword: "family portrait",
                detailsEn: "A group of people related by blood, marriage, or adoption.",
                detailsZh: "由血缘、婚姻或收养关系联系在一起的一群人。",
                exampleEn: "My family has dinner together every Sunday evening.",
                exampleZh: "我的家人每个星期天傍晚一起吃晚饭。"
            },
            {
                english: "Computer", breakdown: "kum-pyoo-ter", chinese: "电脑", pinyin: "diàn nǎo", emoji: "💻", imageKeyword: "laptop computer",
                detailsEn: "An electronic device for storing and processing data.",
                detailsZh: "用于存储和处理数据的电子设备。",
                exampleEn: "I use my computer to study English every day.",
                exampleZh: "我每天用电脑学习英语。"
            },
            {
                english: "Music", breakdown: "myoo-zik", chinese: "音乐", pinyin: "yīn yuè", emoji: "🎵", imageKeyword: "music notes",
                detailsEn: "Vocal or instrumental sounds combined to produce beauty of form and expression.",
                detailsZh: "将声乐或器乐音调组合在一起产生美感和表达的艺术。",
                exampleEn: "I listen to music every morning while I get ready.",
                exampleZh: "我每天早上准备时都听音乐。"
            }
        ]
    }
] as Level[];
