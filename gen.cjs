const fs = require("fs");
const path = require("path");
const dir = "data/levels";

// Compact word format: [word, pos, breakdown, zh, pinyin, emoji, img, defEn, defZh, [exEn, exZh], [exEn2, exZh2], collocs(sym;sep), syn(sym), ant(sym), [mistake, correction]]
function W(w, pos, br, zh, py, em, img, dEn, dZh, exs, col, syn, ant, mis) {
  const examples = exs.map(e => `{ en: ${Q(e[0])}, zh: ${Q(e[1])} }`).join(", ");
  const mistakes = (mis||[]).map(m => `{ mistake: ${Q(m[0])}, correction: ${Q(m[1])} }`).join(", ");
  const c = (col||"").split(";").filter(Boolean).map(Q).join(", ");
  const s = (syn||"").split(";").filter(Boolean).map(Q).join(", ");
  const a = (ant||"").split(";").filter(Boolean).map(Q).join(", ");
  return `{ word:${Q(w)},partOfSpeech:${Q(pos)},breakdown:${Q(br)},chinese:${Q(zh)},pinyin:${Q(py)},emoji:${Q(em)},imageKeyword:${Q(img)},definitionEn:${Q(dEn)},definitionZh:${Q(dZh)},examples:[${examples}],collocations:[${c}],synonyms:[${s}],antonyms:[${a}],commonMistakes:[${mistakes}],level:LEVEL,category:CAT }`;
}
function Q(s){ if(s==null)return'""'; return '"'+String(s).replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'; }

function buildFile(meta, items, phrases, dialogues, tasks, diagrams) {
  const itemsStr = items.map(it => `    ${it},`).join("\n");
  const phrasesStr = phrases.map(p => {
    const ex = p.examples.map(e=>`{en:${Q(e.en)},zh:${Q(e.zh)}}`).join(",");
    return `    { phrase:${Q(p.phrase)},chinese:${Q(p.chinese)},pinyin:${Q(p.pinyin)},formality:${Q(p.formality)},situation:${Q(p.situation)},definitionEn:${Q(p.definitionEn)},definitionZh:${Q(p.definitionZh)},examples:[${ex}] },`;
  }).join("\n");
  const diaStr = dialogues.map(d => {
    const lines = d.lines.map(l=>`{speaker:${Q(l.speaker)},english:${Q(l.english)},chinese:${Q(l.chinese)},pinyin:${Q(l.pinyin)},note:${Q(l.note||"")}}`).join(",");
    return `    { id:${Q(d.id)},title:${Q(d.title)},description:${Q(d.description)},emoji:${Q(d.emoji)},scenario:${Q(d.scenario)},lines:[${lines}] },`;
  }).join("\n");
  const taskStr = tasks.map(t => {
    let extra = "";
    if (t.options) extra += `,options:[${t.options.map(Q).join(",")}]`;
    if (t.pairs) extra += `,pairs:[${t.pairs.map(p=>`{left:${Q(p.left)},right:${Q(p.right)}}`).join(",")}]`;
    if (t.acceptable) extra += `,acceptable:[${t.acceptable.map(Q).join(",")}]`;
    if (t.targetLang) extra += `,targetLang:${Q(t.targetLang)}`;
    if (t.hint) extra += `,hint:${Q(t.hint)}`;
    if (t.explanation) extra += `,explanation:${Q(t.explanation)}`;
    if (t.promptZh) extra += `,promptZh:${Q(t.promptZh)}`;
    return `    { id:${Q(t.id)},type:${Q(t.type)},prompt:${Q(t.prompt)},answer:${Array.isArray(t.answer)?`[${t.answer.map(Q).join(",")}]`:Q(t.answer)}${extra} },`;
  }).join("\n");
  const diaGramStr = diagrams.map(d => `    { type:${Q(d.type)},title:${Q(d.title)},mermaid:${Q(d.mermaid)} },`).join("\n");
  return `import { Level } from "@/types/curriculum";

export const ${meta.varName}: Level = {
  id: ${Q(meta.id)},
  title: ${Q(meta.title)},
  description: ${Q(meta.description)},
  cefrLevel: ${Q(meta.cefrLevel)},
  emoji: ${Q(meta.emoji)},
  color: ${Q(meta.color)},
  category: ${Q(meta.category)},
  items: [
${itemsStr}
  ],
  phrases: [
${phrasesStr}
  ],
  dialogues: [
${diaStr}
  ],
  tasks: [
${taskStr}
  ],
  diagrams: [
${diaGramStr}
  ],
};
`;
}

// ============ BEGINNER ============
function genBeginner() {
  const items = [];
  let L="beginner";
  // Food (20)
  const food = [
    ["Water","Noun","wah-ter","水","shuǐ","💧","glass of water","The clear liquid we drink.","我们饮用的透明液体。",[["I drink water every day.","我每天喝水。"],["A glass of water please.","请来一杯水。"]],"drink water;glass of water;water bottle","liquid","solid"],
    ["Rice","Noun","rys","米饭","mǐ fàn","🍚","bowl of rice","A staple grain cooked by boiling.","煮食的主食谷物。",[["I eat rice daily.","我每天吃米饭。"],["A bowl of rice.","一碗米饭。"]],"steamed rice;fried rice;bowl of rice","grain",""],
    ["Bread","Noun","bred","面包","miàn bāo","🍞","bread loaf","Baked food from flour and water.","面粉和水烤制的食物。",[["Bread for breakfast.","面包当早餐。"],["Fresh bread is warm.","新鲜面包暖暖的。"]],"slice of bread;bread roll;white bread","loaf",""],
    ["Meat","Noun","meet","肉","ròu","🥩","raw meat","Animal flesh eaten as food.","作为食物的动物肉。",[["He doesn't eat meat.","他不吃肉。"],["Meat is protein.","肉含蛋白质。"]],"red meat;raw meat;cooked meat","flesh","vegetable"],
    ["Fish","Noun","fish","鱼","yú","🐟","grilled fish","Aquatic animal eaten as food.","食用水生动物。",[["I like fish.","我喜欢鱼。"],["Fish is healthy.","鱼很健康。"]],"catch fish;fish tank;fish soup","seafood",""],
    ["Egg","Noun","eg","鸡蛋","jī dàn","🥚","boiled eggs","Oval food laid by hens.","母鸡产的椭圆食物。",[["Two eggs for breakfast.","早餐两个蛋。"],["Boil the egg.","把蛋煮熟。"]],"boiled egg;fried egg;scrambled egg","oval",""],
    ["Vegetable","Noun","vej-tuh-bul","蔬菜","shū cài","🥬","fresh vegetables","Plant parts eaten as food.","食用的植物部分。",[["Eat your vegetables.","吃蔬菜。"],["Green vegetables are healthy.","绿色蔬菜健康。"]],"fresh vegetable;green vegetable;vegetable soup","greens","meat"],
    ["Fruit","Noun","froot","水果","shuǐ guǒ","🍎","fruit bowl","Sweet fleshy plant product.","甜美的植物果实。",[["Fruit is good.","水果有益。"],["I love tropical fruit.","我爱热带水果。"]],"fresh fruit;fruit juice;fruit salad","produce",""],
    ["Milk","Noun","milk","牛奶","niú nǎi","🥛","milk glass","White liquid from cows.","奶牛产的白色液体。",[["Kids drink milk.","孩子喝牛奶。"],["Milk builds bones.","牛奶强骨。"]],"glass of milk;milk shake;soy milk","dairy",""],
    ["Tea","Noun","tee","茶","chá","🍵","tea cup","Hot drink from steeped leaves.","浸泡叶子的热饮。",[["Tea, please.","请来茶。"],["Green tea is popular.","绿茶流行。"]],"cup of tea;green tea;black tea","infusion","coffee"],
    ["Coffee","Noun","kof-ee","咖啡","kā fēi","☕","coffee cup","Hot drink from roasted beans.","烘焙豆的热饮。",[["I need coffee.","我需要咖啡。"],["Black coffee please.","黑咖啡谢谢。"]],"cup of coffee;coffee shop;coffee bean","brew","tea"],
    ["Soup","Noun","soop","汤","tāng","🍲","soup bowl","Liquid food from boiled ingredients.","煮沸食材的液体食物。",[["Soup is hot.","汤很烫。"],["Chicken soup is warm.","鸡汤暖胃。"]],"bowl of soup;chicken soup;hot soup","broth",""],
    ["Noodle","Noun","noo-dul","面条","miàn tiáo","🍜","noodle bowl","Long strips of dough.","长条面团。",[["Spicy noodles!","辣面条！"],["Beef noodles are tasty.","牛肉面美味。"]],"bowl of noodles;instant noodles;rice noodles","pasta",""],
    ["Chicken","Noun","chik-in","鸡肉","jī ròu","🍗","roast chicken","Common poultry meat.","常见家禽肉。",[["Fried chicken is tasty.","炸鸡美味。"],["Chicken for dinner.","晚餐吃鸡肉。"]],"fried chicken;roast chicken;chicken soup","poultry","beef"],
    ["Pork","Noun","pork","猪肉","zhū ròu","🥓","cooked pork","Meat from pigs.","猪肉。",[["Pork is common here.","猪肉在这里常见。"],["Pork dumplings.","猪肉饺子。"]],"pork chop;pork belly","pig meat","beef"],
    ["Beef","Noun","beef","牛肉","niú ròu","🥩","beef steak","Meat from cattle.","牛肉。",[["Beef is pricey.","牛肉贵。"],["Beef steak please.","请来牛排。"]],"beef steak;ground beef;roast beef","cow meat","pork"],
    ["Salt","Noun","sawlt","盐","yán","🧂","salt shaker","White substance to flavor food.","调味的白色物质。",[["Pass the salt.","递盐。"],["Less salt is better.","少盐更好。"]],"table salt;sea salt;salt shaker","sodium","sugar"],
    ["Sugar","Noun","shoo-gur","糖","táng","🍬","sugar cubes","Sweet substance in food.","食物中的甜味物质。",[["Sugar in tea.","茶里加糖。"],["Less sugar please.","少糖谢谢。"]],"brown sugar;sugar cube;sugar bowl","sweetener","salt"],
    ["Oil","Noun","oyl","油","yóu","🫒","cooking oil","Liquid fat for cooking.","烹饪用的液态脂肪。",[["Heat the oil.","热油。"],["Olive oil is healthy.","橄榄油健康。"]],"cooking oil;olive oil;vegetable oil","fat",""],
    ["Juice","Noun","joos","果汁","guǒ zhī","🧃","juice glass","Drink from pressed fruit.","榨水果的饮料。",[["Orange juice please.","橙汁谢谢。"],["Fresh juice is healthy.","鲜榨果汁健康。"]],"fruit juice;orange juice;apple juice","drink",""],
  ];
  food.forEach(r => items.push(W(...r, L, "Food & Drink")));

  // Numbers 11-100, ordinals (15)
  const numbers = [
    ["Eleven","Number","ih-lev-en","十一","shí yī","1️⃣","number eleven","The number 11.","数字11。",[["Eleven is after ten.","十一在十后。"],["Eleven students came.","来了十一个学生。"]],"eleven oclock","",""],
    ["Twelve","Number","twelv","十二","shí èr","🔢","number twelve","The number 12.","数字12。",[["Twelve months a year.","一年十二个月。"],["A dozen is twelve.","一打是十二。"]],"twelve months;twelve oclock","dozen",""],
    ["Thirteen","Number","thur-teen","十三","shí sān","🔢","number thirteen","The number 13.","数字13。",[["Thirteen is unlucky in the West.","十三在西方不吉利。"],["Thirteen people.","十三个人。"]],"thirteen","",""],
    ["Fourteen","Number","for-teen","十四","shí sì","🔢","number","The number 14.","数字14。",[["Fourteen days.","十四天。"]],"fourteen","",""],
    ["Fifteen","Number","fif-teen","十五","shí wǔ","🔢","number","The number 15.","数字15。",[["Fifteen minutes.","十五分钟。"]],"fifteen minutes","",""],
    ["Sixteen","Number","siks-teen","十六","shí liù","🔢","number","The number 16.","数字16。",[["Sixteen candles.","十六根蜡烛。"]],"sixteen","",""],
    ["Seventeen","Number","sev-en-teen","十七","shí qī","🔢","number","The number 17.","数字17。",[["Seventeen years old.","十七岁。"]],"seventeen","",""],
    ["Eighteen","Number","ay-teen","十八","shí bā","🔢","number","The number 18.","数字18。",[["Eighteen is an adult.","十八岁成年。"]],"eighteen","",""],
    ["Nineteen","Number","nyn-teen","十九","shí jiǔ","🔢","number","The number 19.","数字19。",[["Nineteen students.","十九个学生。"]],"nineteen","",""],
    ["Twenty","Number","twen-tee","二十","èr shí","2️⃣","number twenty","The number 20.","数字20。",[["I am twenty.","我二十岁。"],["Twenty dollars.","二十美元。"]],"twenty dollars;twenty years","",""],
    ["Thirty","Number","thur-tee","三十","sān shí","3️⃣","number thirty","The number 30.","数字30。",[["Thirty minutes.","三十分钟。"],["He is thirty.","他三十岁。"]],"thirty minutes;thirty years","",""],
    ["Forty","Number","for-tee","四十","sì shí","4️⃣","number","The number 40.","数字40。",[["Forty hours.","四十小时。"]],"forty","",""],
    ["Fifty","Number","fif-tee","五十","wǔ shí","5️⃣","number fifty","The number 50.","数字50。",[["Fifty percent.","百分之五十。"],["Fifty yuan.","五十元。"]],"fifty percent;fifty dollars","",""],
    ["Hundred","Number","hun-drid","百","bǎi","💯","one hundred","The number 100.","数字100。",[["One hundred years.","一百年。"],["Got hundred on test.","考试一百分。"]],"one hundred;hundred percent","century",""],
    ["Thousand","Number","thow-zund","千","qiān","🔑","thousand","The number 1000.","数字1000。",[["A thousand thanks.","万分感谢。"],["One thousand meters.","一千米。"]],"one thousand;thousand dollars","",""],
  ];
  numbers.forEach(r => items.push(W(...r, L, "Numbers")));

  // Time & Date (15)
  const time = [
    ["Today","Noun","tuh-day","今天","jīn tiān","📅","calendar","The current day.","当前的一天。",[["Today is sunny.","今天晴天。"],["What day is today?","今天星期几？"]],"today morning;today afternoon","this day","yesterday"],
    ["Tomorrow","Noun","tuh-mor-oh","明天","míng tiān","🔜","sunrise","The day after today.","今天之后的一天。",[["See you tomorrow.","明天见。"],["Tomorrow is a holiday.","明天放假。"]],"tomorrow morning;tomorrow night","","yesterday"],
    ["Yesterday","Noun","yes-ter-day","昨天","zuó tiān","🔙","past","The day before today.","今天之前的一天。",[["I saw him yesterday.","我昨天见他。"],["Yesterday it rained.","昨天下雨。"]],"yesterday morning;yesterday evening","","tomorrow"],
    ["Morning","Noun","mor-ning","早上","zǎo shàng","🌄","sunrise","Early part of the day.","一天的早期。",[["Coffee in the morning.","早上喝咖啡。"],["Good morning!","早上好！"]],"morning coffee;tomorrow morning","daybreak","night"],
    ["Afternoon","Noun","af-ter-noon","下午","xià wǔ","☀️","afternoon sun","Between noon and evening.","中午到傍晚。",[["Good afternoon!","下午好！"],["Class this afternoon.","今天下午有课。"]],"this afternoon;afternoon tea","","morning"],
    ["Evening","Noun","eev-ning","傍晚","bàng wǎn","🌆","evening sky","When day ends.","一天结束的时候。",[["Good evening!","晚上好！"],["Relax in evening.","傍晚放松。"]],"this evening;evening meal","dusk","morning"],
    ["Night","Noun","nyt","夜晚","yè wǎn","🌙","night sky","Dark time after sunset.","日落后黑暗时间。",[["Good night!","晚安！"],["Stars at night.","夜晚有星星。"]],"good night;late night","nighttime","day"],
    ["Week","Noun","week","周","zhōu","🗓️","calendar","Seven days.","七天。",[["Seven days a week.","一周七天。"],["See you next week.","下周见。"]],"next week;last week;every week","",""],
    ["Month","Noun","munth","月","yuè","📆","calendar","One-twelfth of a year.","一年的十二分之一。",[["Birthday next month.","下个月生日。"],["Twelve months a year.","一年十二个月。"]],"next month;last month","",""],
    ["Year","Noun","yeer","年","nián","🗓️","calendar","365 days.","365天。",[["Happy New Year!","新年快乐！"],["Ten years old.","十岁。"]],"new year;next year;last year","annual",""],
    ["Now","Adverb","now","现在","xiàn zài","⏳","clock","At this moment.","此时此刻。",[["Busy now.","现在忙。"],["Do it now.","现在做。"]],"right now;just now","presently","then"],
    ["Later","Adverb","lay-tur","以后","yǐ hòu","⏰","clock","After this time.","这个时间之后。",[["See you later.","回头见。"],["Do it later.","以后做。"]],"see you later;later on","afterwards","now"],
    ["Early","Adjective","ur-lee","早的","zǎo de","🌅","sunrise","Before expected time.","在预期之前。",[["Wake up early.","早起。"],["The early bird.","早起的鸟儿。"]],"early morning;early bird","premature","late"],
    ["Late","Adjective","layt","迟的","chí de","🌙","night","After expected time.","在预期之后。",[["Sorry I'm late.","抱歉迟到。"],["Train is late.","火车晚点。"]],"late for work;late at night","tardy","early"],
    ["Hour","Noun","ow-ur","小时","xiǎo shí","🕐","clock","60 minutes.","60分钟。",[["Wait one hour.","等一小时。"],["Movie is two hours.","电影两小时。"]],"one hour;half an hour;per hour","",""],
  ];
  time.forEach(r => items.push(W(...r, L, "Time & Date")));

  // Family (12)
  const family = [
    ["Mother","Noun","muth-ur","母亲","mǔ qīn","👩","mother child","Female parent.","女性家长。",[["My mother is kind.","母亲和蔼。"],["I love mother.","我爱妈妈。"]],"mother tongue;mother in law","mom;mama","father"],
    ["Father","Noun","fah-thur","父亲","fù qīn","👨","father son","Male parent.","男性家长。",[["Father works hard.","父亲努力工作。"],["Father is tall.","父亲高。"]],"father in law;father figure","dad;papa","mother"],
    ["Brother","Noun","bruth-ur","兄弟","xiōng dì","👦","brothers","Male sibling.","男性手足。",[["One brother.","一个兄弟。"],["Brother is older.","哥哥更大。"]],"older brother;younger brother","sibling","sister"],
    ["Sister","Noun","sis-tur","姐妹","jiě mèi","👧","sisters","Female sibling.","女性手足。",[["I have a sister.","我有一个姐妹。"],["Sister is a doctor.","姐姐是医生。"]],"older sister;younger sister","sibling","brother"],
    ["Son","Noun","sun","儿子","ér zi","👦","father son","Male child.","男孩孩子。",[["Their son is five.","儿子五岁。"],["Two sons.","两个儿子。"]],"son in law","boy","daughter"],
    ["Daughter","Noun","daw-tur","女儿","nǚ ér","👧","mother daughter","Female child.","女孩孩子。",[["Daughter is smart.","女儿聪明。"],["One daughter.","一个女儿。"]],"daughter in law","girl","son"],
    ["Grandfather","Noun","grand-fah-thur","祖父","zǔ fù","👴","grandfather","Father of a parent.","父母的父亲。",[["Grandfather is wise.","祖父睿智。"],["Grandfather tells stories.","祖父讲故事。"]],"great grandfather","grandpa","grandmother"],
    ["Grandmother","Noun","grand-muth-ur","祖母","zǔ mǔ","👵","grandmother","Mother of a parent.","父母的母亲。",[["Grandmother cooks well.","祖母做饭好。"],["Grandmother is kind.","祖母和蔼。"]],"great grandmother","grandma","grandfather"],
    ["Husband","Noun","huz-band","丈夫","zhàng fu","🤵","married","Married man.","已婚男子。",[["Her husband is tall.","她丈夫高。"],["My husband cooks.","我丈夫做饭。"]],"husband and wife","spouse","wife"],
    ["Wife","Noun","wyf","妻子","qī zi","👰","married","Married woman.","已婚女子。",[["His wife is a nurse.","他妻子是护士。"],["My wife is kind.","妻子和蔼。"]],"husband and wife","spouse","husband"],
    ["Uncle","Noun","un-kul","叔叔","shū shu","👨","uncle","Brother of a parent.","父母的兄弟。",[["Uncle visits often.","叔叔常来。"],["Uncle gave a gift.","叔叔送礼物。"]],"uncle in law","","aunt"],
    ["Aunt","Noun","ant","阿姨","ā yí","👩","aunt","Sister of a parent.","父母的姐妹。",[["Aunt is funny.","阿姨有趣。"],["Aunt lives far.","阿姨住远。"]],"aunt in law","","uncle"],
  ];
  family.forEach(r => items.push(W(...r, L, "Family")));

  // Shopping (12)
  const shop = [
    ["Buy","Verb","by","买","mǎi","🛒","shopping cart","To get something by paying.","付钱获取某物。",[["I buy bread daily.","每天买面包。"],["Buy me coffee.","给我买咖啡。"]],"buy online;buy now","purchase","sell"],
    ["Sell","Verb","sel","卖","mài","🏷️","sale sign","To give for money.","以钱换出。",[["They sell fruit.","他们卖水果。"],["Sell my car.","卖车。"]],"sell out;sell online","vend","buy"],
    ["Price","Noun","prys","价格","jià gé","💰","price tag","Money amount for something.","某物金额。",[["What's the price?","价格多少？"],["Price is high.","价格高。"]],"price tag;high price","cost",""],
    ["Money","Noun","mun-ee","钱","qián","💵","cash","Coins and banknotes to buy.","购买用的钱币。",[["I need money.","我需要钱。"],["Save money.","存钱。"]],"save money;spend money","cash",""],
    ["Dollar","Noun","dol-ur","美元","měi yuán","💲","dollar bill","US currency unit.","美国货币单位。",[["Five dollars.","五美元。"],["A dollar an apple.","一美元一个苹果。"]],"US dollar;dollar bill","buck",""],
    ["Yuan","Noun","yoo-ahn","元","yuán","💴","chinese money","Chinese currency unit.","中国货币单位。",[["Ten yuan.","十元。"],["One hundred yuan.","一百元。"]],"chinese yuan;renminbi","rmb",""],
    ["Shop","Noun","shop","商店","shāng diàn","🏪","shop","Place that sells things.","卖东西的地方。",[["Shop is open.","商店开门。"],["Go to the shop.","去商店。"]],"shop keeper;coffee shop","store",""],
    ["Market","Noun","mar-kit","市场","shì chǎng","🛍️","market","Place to buy and sell.","买卖的地方。",[["Fresh food at market.","市场有鲜食。"],["Sunday market.","周日市场。"]],"supermarket;fresh market","bazaar",""],
    ["Cheap","Adjective","cheep","便宜的","pián yi de","💵","cheap","Low price.","价格低。",[["Shirt is cheap.","衬衫便宜。"],["Cheap but good.","便宜又好。"]],"very cheap;cheap price","inexpensive","expensive"],
    ["Expensive","Adjective","ik-spen-siv","昂贵的","áng guì de","💰","expensive","High price.","价格高。",[["Gold is expensive.","黄金贵。"],["Too expensive.","太贵了。"]],"very expensive;expensive car","pricey","cheap"],
    ["Sale","Noun","sayl","促销","cù xiāo","🏷️","sale sign","Selling at lower prices.","低价销售。",[["Store has a sale.","商店促销。"],["Big sale this week.","本周大促。"]],"on sale;big sale","discount",""],
    ["Receipt","Noun","ri-seet","收据","shōu jù","🧾","receipt","Proof of payment.","付款证明。",[["Keep the receipt.","保留收据。"],["Can I have a receipt?","能要收据吗？"]],"keep receipt;sales receipt","invoice",""],
  ];
  shop.forEach(r => items.push(W(...r, L, "Shopping & Money")));

  // Transport (12)
  const trans = [
    ["Car","Noun","kar","汽车","qì chē","🚗","car","Four-wheeled road vehicle.","四轮车辆。",[["I drive a car.","我开车。"],["Car is red.","车是红的。"]],"drive a car;rent a car","auto",""],
    ["Bus","Noun","bus","公交车","gōng jiāo chē","🚌","bus","Large passenger vehicle.","大型载客车。",[["I take the bus.","我坐公交。"],["Bus is late.","公交晚点。"]],"bus stop;bus station","coach",""],
    ["Train","Noun","trayn","火车","huǒ chē","🚆","train","Rail carriages.","铁路车厢。",[["Trains are fast.","火车快。"],["Train to Beijing.","火车去北京。"]],"train station;high speed train","railway",""],
    ["Taxi","Noun","tak-see","出租车","chū zū chē","🚕","taxi","Hired car with driver.","有司机的雇佣车。",[["Call a taxi.","叫出租车。"],["Taxi is here.","出租车到了。"]],"take a taxi;taxi driver","cab",""],
    ["Plane","Noun","playn","飞机","fēi jī","✈️","plane","Flying vehicle.","飞行器。",[["Plane is fast.","飞机快。"],["Took a plane.","坐飞机。"]],"plane ticket;catch a plane","airplane",""],
    ["Bicycle","Noun","by-sik-ul","自行车","zì xíng chē","🚲","bicycle","Two-wheeled pedal vehicle.","两轮脚踏车。",[["Ride a bicycle.","骑自行车。"],["Bicycle is healthy.","自行车健康。"]],"ride a bicycle;bicycle lane","bike",""],
    ["Boat","Noun","bot","船","chuán","🚢","boat","Water vehicle.","水上交通工具。",[["Took a boat.","坐船。"],["Boat is small.","船小。"]],"sail a boat;fishing boat","ship",""],
    ["Subway","Noun","sub-way","地铁","dì tiě","🚇","subway","Underground train.","地下火车。",[["Subway is crowded.","地铁挤。"],["Take the subway.","坐地铁。"]],"subway station;take the subway","metro",""],
    ["Ticket","Noun","tik-it","票","piào","🎟️","ticket","Paper allowing travel.","允许旅行的纸。",[["Buy a ticket.","买票。"],["Show your ticket.","出示票。"]],"train ticket;plane ticket","pass",""],
    ["Station","Noun","stay-shun","车站","chē zhàn","🚉","station","Where vehicles stop.","车辆停靠处。",[["Meet at station.","车站见。"],["Station is busy.","车站忙。"]],"train station;bus station","terminal",""],
    ["Airport","Noun","air-port","机场","jī chǎng","🛫","airport","Where planes land.","飞机降落处。",[["Airport is far.","机场远。"],["Meet at airport.","机场见。"]],"airport terminal;international airport","aerodrome",""],
    ["Road","Noun","rohd","路","lù","🛣️","road","Path for vehicles.","车辆通行的路。",[["Road is long.","路长。"],["Cross the road.","过马路。"]],"cross the road;main road","street",""],
  ];
  trans.forEach(r => items.push(W(...r, L, "Transportation")));

  // Weather (10)
  const weather = [
    ["Sun","Noun","sun","太阳","tài yáng","☀️","sun","Star giving Earth light.","给地球光亮的恒星。",[["Sun is bright.","太阳亮。"],["Sun rises east.","太阳东升。"]],"morning sun;sun shine","star","moon"],
    ["Rain","Noun","rayn","雨","yǔ","🌧️","rain","Water from clouds.","云中落下的水。",[["Rain is heavy.","雨大。"],["Rain grows plants.","雨水养植物。"]],"heavy rain;light rain","rainfall","sun"],
    ["Snow","Noun","snoh","雪","xuě","❄️","snow","Frozen white rain.","冻结的白雨。",[["Snow is white.","雪白。"],["Kids love snow.","孩子爱雪。"]],"snow man;heavy snow","snowfall",""],
    ["Wind","Noun","wind","风","fēng","💨","wind","Moving air.","流动的空气。",[["Wind is strong.","风大。"],["Wind moves leaves.","风吹叶动。"]],"strong wind;light wind","breeze",""],
    ["Cloud","Noun","klowd","云","yún","☁️","cloud","Mass in the sky.","天空中的团块。",[["Sky has clouds.","天有云。"],["Dark clouds mean rain.","乌云兆雨。"]],"dark cloud;white cloud","",""],
    ["Hot","Adjective","hot","热的","rè de","🔥","hot","High temperature.","温度高。",[["Water is hot.","水热。"],["It's hot today.","今天热。"]],"too hot;hot day","warm","cold"],
    ["Cold","Adjective","kohld","冷的","lěng de","❄️","cold","Low temperature.","温度低。",[["Ice is cold.","冰冷。"],["I feel cold.","我觉得冷。"]],"very cold;cold water","chilly","hot"],
    ["Warm","Adjective","worm","温暖的","wēn nuǎn de","🌤️","warm","Pleasantly high temperature.","令人舒适的温度。",[["Tea is warm.","茶温。"],["A warm day.","温暖一天。"]],"warm up;warm welcome","mild","cool"],
    ["Storm","Noun","storm","暴风雨","bào fēng yǔ","⛈️","storm","Strong wind and rain.","强风和雨。",[["Storm is dangerous.","暴风雨危险。"],["Inside during storm.","暴风雨时待室内。"]],"thunder storm;snow storm","tempest",""],
    ["Fog","Noun","fog","雾","wù","🌫️","fog","Thick cloud at ground.","地面的厚云。",[["Fog is thick.","雾浓。"],["Drive carefully in fog.","雾天小心驾驶。"]],"thick fog;fog light","mist",""],
  ];
  weather.forEach(r => items.push(W(...r, L, "Weather")));

  // Body (10)
  const body = [
    ["Head","Noun","hed","头","tóu","🧠","head","Top of the body.","身体顶部。",[["Head hurts.","头痛。"],["Shake your head.","摇头。"]],"head ache;head phone","",""],
    ["Foot","Noun","fut","脚","jiǎo","🦶","foot","Body part for walking.","行走部位。",[["Feet hurt.","脚痛。"],["Wash feet.","洗脚。"]],"left foot;right foot;foot ball","","hand"],
    ["Hand","Noun","hand","手","shǒu","✋","hand","End of the arm.","手臂末端。",[["Two hands.","两只手。"],["Raise hand.","举手。"]],"left hand;right hand","","foot"],
    ["Doctor","Noun","dok-tur","医生","yī shēng","👨‍⚕️","doctor","Person who treats sick.","治疗病人者。",[["See a doctor.","看医生。"],["Doctor is kind.","医生和蔼。"]],"see a doctor;family doctor","physician","patient"],
    ["Hospital","Noun","hos-pi-tul","医院","yī yuàn","🏥","hospital","Place for medical care.","医疗场所。",[["He's in hospital.","他在医院。"],["Hospital nearby.","医院附近。"]],"hospital bed;hospital staff","clinic",""],
    ["Sick","Adjective","sik","生病的","shēng bìng de","🤒","sick","Not healthy.","不健康。",[["Feel sick.","不舒服。"],["She is sick.","她病了。"]],"feel sick;get sick","ill","healthy"],
    ["Medicine","Noun","med-i-sin","药","yào","💊","medicine","Substance to treat illness.","治疗用物质。",[["Take medicine.","吃药。"],["Medicine is bitter.","药苦。"]],"take medicine;cold medicine","drug",""],
    ["Healthy","Adjective","hel-thee","健康的","jiàn kāng de","💪","healthy","In good health.","健康良好。",[["Eat healthy food.","吃健康食物。"],["Feel healthy.","感觉健康。"]],"healthy food;stay healthy","fit","sick"],
    ["Eye","Noun","eye","眼睛","yǎn jing","👁️","eye","For seeing.","用来看。",[["Close eyes.","闭眼。"],["Blue eyes.","蓝眼睛。"]],"left eye;eye contact","",""],
    ["Body","Noun","bod-ee","身体","shēn tǐ","🧍","body","Whole physical person.","整个身体。",[["Body is tired.","身体累。"],["Take care of body.","照顾身体。"]],"human body;body part","physique",""],
  ];
  body.forEach(r => items.push(W(...r, L, "Body & Health")));

  const phrases = [
    {phrase:"How much is this?",chinese:"这个多少钱？",pinyin:"zhè ge duō shǎo qián",formality:"neutral",situation:"Asking price",definitionEn:"Question to ask the price.",definitionZh:"询问价格的问题。",examples:[{en:"How much is this shirt?",zh:"这件衬衫多少钱？"}]},
    {phrase:"Where is the bathroom?",chinese:"洗手间在哪里？",pinyin:"xǐ shǒu jiān zài nǎ lǐ",formality:"neutral",situation:"Asking location",definitionEn:"Asking for the toilet location.",definitionZh:"询问厕所位置。",examples:[{en:"Excuse me, where is the bathroom?",zh:"打扰，洗手间在哪？"}]},
    {phrase:"I am hungry",chinese:"我饿了",pinyin:"wǒ è le",formality:"casual",situation:"Expressing hunger",definitionEn:"Saying you want food.",definitionZh:"说想吃东西。",examples:[{en:"I am hungry, let's eat.",zh:"我饿了，我们吃吧。"}]},
    {phrase:"Thank you very much",chinese:"非常感谢",pinyin:"fēi cháng gǎn xiè",formality:"formal",situation:"Strong thanks",definitionEn:"Expressing strong gratitude.",definitionZh:"表达强烈感谢。",examples:[{en:"Thank you very much for help.",zh:"非常感谢你的帮助。"}]},
    {phrase:"Can you help me?",chinese:"你能帮我吗？",pinyin:"nǐ néng bāng wǒ ma",formality:"neutral",situation:"Asking for help",definitionEn:"Polite request for assistance.",definitionZh:"礼貌求助。",examples:[{en:"Can you help me carry this?",zh:"你能帮我搬这个吗？"}]},
    {phrase:"I don't know",chinese:"我不知道",pinyin:"wǒ bù zhī dào",formality:"neutral",situation:"Lacking information",definitionEn:"Saying you lack information.",definitionZh:"说不知情。",examples:[{en:"I don't know the answer.",zh:"我不知道答案。"}]},
    {phrase:"What time is it?",chinese:"现在几点了？",pinyin:"xiàn zài jǐ diǎn le",formality:"neutral",situation:"Asking the time",definitionEn:"Asking current time.",definitionZh:"问现在时间。",examples:[{en:"Excuse me, what time is it?",zh:"请问现在几点了？"}]},
    {phrase:"See you tomorrow",chinese:"明天见",pinyin:"míng tiān jiàn",formality:"casual",situation:"Parting until tomorrow",definitionEn:"Saying goodbye until tomorrow.",definitionZh:"告别到明天。",examples:[{en:"Good night, see you tomorrow!",zh:"晚安，明天见！"}]},
    {phrase:"How are you?",chinese:"你好吗？",pinyin:"nǐ hǎo ma",formality:"neutral",situation:"Greeting",definitionEn:"Asking wellbeing.",definitionZh:"问候。",examples:[{en:"Hi, how are you?",zh:"嗨，你好吗？"}]},
    {phrase:"Nice to meet you",chinese:"很高兴认识你",pinyin:"hěn gāo xìng rèn shí nǐ",formality:"neutral",situation:"First meeting",definitionEn:"Said when meeting someone.",definitionZh:"初次见面用语。",examples:[{en:"Nice to meet you, I'm Tom.",zh:"很高兴认识你，我是Tom。"}]},
    {phrase:"I'm sorry",chinese:"对不起",pinyin:"duì bù qǐ",formality:"neutral",situation:"Apologizing",definitionEn:"Expressing apology.",definitionZh:"道歉。",examples:[{en:"I'm sorry I'm late.",zh:"对不起我迟到了。"}]},
    {phrase:"Excuse me",chinese:"打扰一下",pinyin:"dǎ rǎo yí xià",formality:"neutral",situation:"Getting attention",definitionEn:"Getting attention politely.",definitionZh:"礼貌引起注意。",examples:[{en:"Excuse me, can I pass?",zh:"打扰，我能过去吗？"}]},
    {phrase:"Let's go",chinese:"走吧",pinyin:"zǒu ba",formality:"casual",situation:"Starting to move",definitionEn:"Suggesting to leave.",definitionZh:"建议离开。",examples:[{en:"It's late, let's go.",zh:"晚了，走吧。"}]},
    {phrase:"Be careful",chinese:"小心",pinyin:"xiǎo xīn",formality:"neutral",situation:"Warning",definitionEn:"Warning to be cautious.",definitionZh:"警告小心。",examples:[{en:"Be careful on the road.",zh:"路上小心。"}]},
    {phrase:"That's correct",chinese:"那是正确的",pinyin:"nà shì zhèng què de",formality:"neutral",situation:"Confirming",definitionEn:"Confirming something is right.",definitionZh:"确认正确。",examples:[{en:"Yes, that's correct!",zh:"是的，没错！"}]},
    {phrase:"How do you say...?",chinese:"……怎么说？",pinyin:"...zěn me shuō",formality:"neutral",situation:"Asking translation",definitionEn:"Asking how to say something.",definitionZh:"问怎么说。",examples:[{en:"How do you say 'cat' in Chinese?",zh:"猫用中文怎么说？"}]},
    {phrase:"What does it mean?",chinese:"这是什么意思？",pinyin:"zhè shì shén me yì si",formality:"neutral",situation:"Asking meaning",definitionEn:"Asking definition.",definitionZh:"问含义。",examples:[{en:"New word — what does it mean?",zh:"新词——什么意思？"}]},
    {phrase:"Can I try?",chinese:"我可以试试吗？",pinyin:"wǒ kě yǐ shì shì ma",formality:"neutral",situation:"Asking to attempt",definitionEn:"Asking permission to try.",definitionZh:"请求尝试。",examples:[{en:"Looks good, can I try?",zh:"看起来不错，可以试吗？"}]},
  ];

  const dialogues = [
    {id:"b-dia-1",title:"At the Restaurant",description:"Ordering food at a restaurant.",emoji:"🍽️",scenario:"Restaurant",lines:[
      {speaker:"Waiter",english:"Good evening! A table for two?",chinese:"晚上好！两位吗？",pinyin:"wǎn shàng hǎo! liǎng wèi ma?"},
      {speaker:"Guest",english:"Yes, please. Can we see the menu?",chinese:"是的，请给我们菜单。",pinyin:"shì de, qǐng gěi wǒ men cài dān."},
      {speaker:"Waiter",english:"Of course. Here you are.",chinese:"当然，给您。",pinyin:"dāng rán, gěi nín."},
      {speaker:"Guest",english:"I would like a bowl of rice and chicken.",chinese:"我要一碗米饭和鸡肉。",pinyin:"wǒ yào yì wǎn mǐ fàn hé jī ròu."},
      {speaker:"Waiter",english:"Anything to drink?",chinese:"喝什么？",pinyin:"hē shén me?"},
      {speaker:"Guest",english:"A cup of tea, please.",chinese:"请来一杯茶。",pinyin:"qǐng lái yì bēi chá."},
      {speaker:"Waiter",english:"Coming right up!",chinese:"马上来！",pinyin:"mǎ shàng lái!"},
    ]},
    {id:"b-dia-2",title:"Buying Food at the Market",description:"Shopping for fresh food.",emoji:"🛒",scenario:"Market",lines:[
      {speaker:"Seller",english:"Fresh fruit! Come look!",chinese:"新鲜水果！来看看！",pinyin:"xīn xiān shuǐ guǒ! lái kàn kan!"},
      {speaker:"Buyer",english:"How much are the apples?",chinese:"苹果多少钱？",pinyin:"píng guǒ duō shǎo qián?"},
      {speaker:"Seller",english:"Five yuan each.",chinese:"每个五元。",pinyin:"měi ge wǔ yuán."},
      {speaker:"Buyer",english:"I'll take six. That's thirty yuan?",chinese:"我要六个。三十元？",pinyin:"wǒ yào liù ge. sān shí yuán?"},
      {speaker:"Seller",english:"Yes. Here's a bag.",chinese:"对。给你袋子。",pinyin:"duì. gěi nǐ dài zi."},
      {speaker:"Buyer",english:"Thank you. Here's the money.",chinese:"谢谢。给你钱。",pinyin:"xiè xiè. gěi nǐ qián."},
    ]},
    {id:"b-dia-3",title:"Asking for Directions",description:"Finding your way in a new city.",emoji:"📍",scenario:"Street",lines:[
      {speaker:"Tourist",english:"Excuse me, where is the train station?",chinese:"打扰，火车站在哪？",pinyin:"dǎ rǎo, huǒ chē zhàn zài nǎ?"},
      {speaker:"Local",english:"Go straight, then turn left.",chinese:"直走，然后左转。",pinyin:"zhí zǒu, rán hòu zuǒ zhuǎn."},
      {speaker:"Tourist",english:"Is it far?",chinese:"远吗？",pinyin:"yuǎn ma?"},
      {speaker:"Local",english:"No, about ten minutes walk.",chinese:"不远，走路约十分钟。",pinyin:"bù yuǎn, zǒu lù yuē shí fēn zhōng."},
      {speaker:"Tourist",english:"Thank you very much!",chinese:"非常感谢！",pinyin:"fēi cháng gǎn xiè!"},
      {speaker:"Local",english:"You're welcome. Be careful on the road.",chinese:"不客气。路上小心。",pinyin:"bú kè qì. lù shàng xiǎo xīn."},
    ]},
  ];

  const tasks = [
    {id:"b-mc-1",type:"multiple-choice",prompt:"What do we drink that is clear and healthy?",options:["Water","Oil","Salt","Sugar"],answer:"Water",explanation:"Water is the clear healthy liquid we drink."},
    {id:"b-mc-2",type:"multiple-choice",prompt:"How many days are in a week?",options:["5","6","7","8"],answer:"7",explanation:"There are 7 days in a week."},
    {id:"b-mc-3",type:"multiple-choice",prompt:"Your mother's brother is your...?",options:["Father","Uncle","Cousin","Son"],answer:"Uncle",explanation:"Mother's brother is your uncle."},
    {id:"b-mc-4",type:"multiple-choice",prompt:"What do you take to travel underground in a city?",options:["Plane","Boat","Subway","Bicycle"],answer:"Subway",explanation:"Subway is the underground train."},
    {id:"b-fb-1",type:"fill-blank",prompt:"I ___ bread every morning. (buy/sell)",answer:"buy",acceptable:["buy","Buy"],hint:"Opposite of sell"},
    {id:"b-fb-2",type:"fill-blank",prompt:"The day after today is ___.",answer:"tomorrow",acceptable:["tomorrow","Tomorrow"],hint:"Starts with 't'"},
    {id:"b-fb-3",type:"fill-blank",prompt:"Gold is very ___. (cheap/expensive)",answer:"expensive",acceptable:["expensive","Expensive"],hint:"Costs a lot of money"},
    {id:"b-mt-1",type:"matching",prompt:"Match family members.",pairs:[{left:"Mother",right:"妈妈"},{left:"Father",right:"爸爸"},{left:"Sister",right:"姐妹"},{left:"Brother",right:"兄弟"}]},
    {id:"b-mt-2",type:"matching",prompt:"Match transport to where it travels.",pairs:[{left:"Plane",right:"Sky"},{left:"Boat",right:"Water"},{left:"Car",right:"Road"},{left:"Subway",right:"Underground"}]},
    {id:"b-tr-1",type:"translation",prompt:"Translate to Chinese: Thank you",targetLang:"zh",answer:"谢谢",acceptable:["谢谢"," xiè xie"]},
    {id:"b-tr-2",type:"translation",prompt:"Translate to English: 现在几点了？",targetLang:"en",answer:"What time is it?",acceptable:["What time is it?","What time is it","what time is it"]},
    {id:"b-tr-3",type:"translation",prompt:"Translate to English: 我饿了",targetLang:"en",answer:"I am hungry",acceptable:["I am hungry","I'm hungry","I am hungry."]},
  ];

  const diagrams = [
    {type:"mindmap",title:"Family Tree",mermaid:"mindmap\n  root((Family))\n    Parents\n      Mother\n      Father\n    Siblings\n      Brother\n      Sister\n    Grandparents\n      Grandfather\n      Grandmother\n    Extended\n      Uncle\n      Aunt"},
    {type:"mindmap",title:"Food Categories",mermaid:"mindmap\n  root((Food))\n    Staple\n      Rice\n      Bread\n      Noodles\n    Meat\n      Chicken\n      Beef\n      Pork\n      Fish\n    Drink\n      Water\n      Tea\n      Coffee\n      Milk\n      Juice\n    Flavor\n      Salt\n      Sugar\n      Oil"},
    {type:"mindmap",title:"Transportation",mermaid:"mindmap\n  root((Transport))\n    Land\n      Car\n      Bus\n      Train\n      Bicycle\n      Taxi\n    Air\n      Plane\n    Water\n      Boat\n    Underground\n      Subway"},
    {type:"flow",title:"Telling Time Flow",mermaid:"flowchart TD\n    A[\"What time?\"] --> B{Morning?}\n    B -- Yes --> C[\"Good morning\"]\n    B -- No --> D{Afternoon?}\n    D -- Yes --> E[\"Good afternoon\"]\n    D -- No --> F{Evening?}\n    F -- Yes --> G[\"Good evening\"]\n    F -- No --> H[\"Good night\"]"},
  ];

  const meta = {varName:"beginner",id:"beginner",title:"Beginner: Everyday English",description:"Essential everyday vocabulary: numbers, time, food, family, shopping, transportation, weather, and health.",cefrLevel:"A1",emoji:"🌱",color:"from-emerald-400 to-green-400",category:"Beginner"};
  return buildFile(meta, items, phrases, dialogues, tasks, diagrams);
}

fs.writeFileSync(path.join(dir, "beginner.ts"), genBeginner());
console.log("Wrote beginner.ts");
