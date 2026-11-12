// Oral exam data for CHN201 (HSK Standard Course 1, lessons 10–15 + review).
// PART1: English prompt -> say it in Chinese. `alt` = other acceptable answers.
// PART2: listen-and-answer dialogues. src "sheet" = the class Q&A sheet (items 1–32),
//        src "extra" = additional practice items in the same style.
// PART3: the two possible free-talk topics with frames, vocab, model talks and tips.

export const PART1 = [
  // ---- The five prompts from the oral sample paper ----
  { en: "when", h: "什么时候", p: "shénme shíhou", l: "11", alt: [] },
  { en: "sleep", h: "睡觉", p: "shuìjiào", l: "13", alt: [] },
  { en: "to take the train", h: "坐火车", p: "zuò huǒchē", l: "15", alt: [] },
  { en: "love", h: "爱", p: "ài", l: "12", alt: [] },
  { en: "You eat more fruit.", h: "你多吃些水果。", p: "Nǐ duō chī xiē shuǐguǒ.", l: "12", alt: ["你多吃一些水果。", "你多吃水果。"] },

  // ---- Lesson 10 ----
  { en: "on top of; above", h: "上面", p: "shàngmiàn", l: "10", alt: ["上"] },
  { en: "inside", h: "里面", p: "lǐmiàn", l: "10", alt: ["里"] },
  { en: "in the middle; between", h: "中间", p: "zhōngjiān", l: "10", alt: [] },
  { en: "in front", h: "前面", p: "qiánmiàn", l: "10", alt: [] },
  { en: "behind", h: "后面", p: "hòumiàn", l: "10", alt: [] },
  { en: "under; below", h: "下面", p: "xiàmiàn", l: "10", alt: [] },
  { en: "here", h: "这儿", p: "zhèr", l: "10", alt: [] },
  { en: "there", h: "那儿", p: "nàr", l: "10", alt: [] },
  { en: "can; may (be allowed to)", h: "能", p: "néng", l: "10", alt: [] },
  { en: "to help", h: "帮", p: "bāng", l: "10", alt: [] },
  { en: "to open the door", h: "开门", p: "kāi mén", l: "10", alt: [] },
  { en: "to use", h: "用", p: "yòng", l: "10", alt: [] },
  { en: "classroom", h: "教室", p: "jiàoshì", l: "10", alt: [] },
  { en: "computer", h: "电脑", p: "diànnǎo", l: "10", alt: [] },
  { en: "Can I sit here?", h: "我能坐这儿吗？", p: "Wǒ néng zuò zhèr ma?", l: "10", alt: [] },
  { en: "Please sit down.", h: "请坐。", p: "Qǐng zuò.", l: "10", alt: [] },
  { en: "Can you help me open the door?", h: "你能帮我开门吗？", p: "Nǐ néng bāng wǒ kāi mén ma?", l: "10", alt: [] },
  { en: "Can I use your pen?", h: "我能用你的笔吗？", p: "Wǒ néng yòng nǐ de bǐ ma?", l: "10", alt: [] },
  { en: "Sorry, you can't.", h: "不好意思，不能。", p: "Bù hǎoyìsi, bù néng.", l: "10", alt: ["对不起，不能。"] },
  { en: "Where is my phone?", h: "我的手机在哪儿？", p: "Wǒ de shǒujī zài nǎr?", l: "10", alt: [] },
  { en: "The cat is under the chair.", h: "猫在椅子下面。", p: "Māo zài yǐzi xiàmiàn.", l: "10", alt: [] },
  { en: "There are many books in the classroom.", h: "教室里面有很多书。", p: "Jiàoshì lǐmiàn yǒu hěn duō shū.", l: "10", alt: ["教室里有很多书。"] },
  { en: "There is nobody in the classroom.", h: "教室里面没有人。", p: "Jiàoshì lǐmiàn méiyǒu rén.", l: "10", alt: ["教室里没有人。"] },

  // ---- Lesson 11 ----
  { en: "now", h: "现在", p: "xiànzài", l: "11", alt: [] },
  { en: "o'clock", h: "点", p: "diǎn", l: "11", alt: [] },
  { en: "half (past)", h: "半", p: "bàn", l: "11", alt: [] },
  { en: "early morning", h: "早上", p: "zǎoshang", l: "11", alt: [] },
  { en: "morning (before noon)", h: "上午", p: "shàngwǔ", l: "11", alt: [] },
  { en: "noon", h: "中午", p: "zhōngwǔ", l: "11", alt: [] },
  { en: "afternoon", h: "下午", p: "xiàwǔ", l: "11", alt: [] },
  { en: "evening", h: "晚上", p: "wǎnshang", l: "11", alt: [] },
  { en: "to get up", h: "起床", p: "qǐchuáng", l: "11", alt: [] },
  { en: "to have class; to go to class", h: "上课", p: "shàngkè", l: "11", alt: [] },
  { en: "to exercise", h: "锻炼身体", p: "duànliàn shēntǐ", l: "11", alt: [] },
  { en: "to eat (a meal)", h: "吃饭", p: "chī fàn", l: "11", alt: [] },
  { en: "to do homework", h: "写作业", p: "xiě zuòyè", l: "11", alt: [] },
  { en: "to take a walk", h: "散步", p: "sànbù", l: "11", alt: [] },
  { en: "to go home", h: "回家", p: "huí jiā", l: "11", alt: [] },
  { en: "to take a shower", h: "洗澡", p: "xǐzǎo", l: "11", alt: [] },
  { en: "dormitory", h: "宿舍", p: "sùshè", l: "11", alt: [] },
  { en: "to live (somewhere)", h: "住", p: "zhù", l: "11", alt: [] },
  { en: "What time is it now?", h: "现在几点？", p: "Xiànzài jǐ diǎn?", l: "11", alt: [] },
  { en: "It's half past ten.", h: "现在十点半。", p: "Xiànzài shí diǎn bàn.", l: "11", alt: ["十点半。"] },
  { en: "It's five past eight.", h: "现在八点零五分。", p: "Xiànzài bā diǎn líng wǔ fēn.", l: "11", alt: ["八点五分。"] },
  { en: "I get up before 7 in the morning.", h: "我早上七点前起床。", p: "Wǒ zǎoshang qī diǎn qián qǐchuáng.", l: "11", alt: ["早上七点前我起床。"] },
  { en: "I go to bed after 11 at night.", h: "我晚上十一点后睡觉。", p: "Wǒ wǎnshang shíyī diǎn hòu shuìjiào.", l: "11", alt: ["晚上十一点后我睡觉。"] },
  { en: "When do you go home?", h: "你什么时候回家？", p: "Nǐ shénme shíhou huí jiā?", l: "11", alt: [] },
  { en: "Where do you live?", h: "你住在哪儿？", p: "Nǐ zhù zài nǎr?", l: "11", alt: ["你住哪儿？"] },
  { en: "I live in the dormitory.", h: "我住在宿舍。", p: "Wǒ zhù zài sùshè.", l: "11", alt: ["我住宿舍。"] },

  // ---- Lesson 12 ----
  { en: "weather", h: "天气", p: "tiānqì", l: "12", alt: [] },
  { en: "how is it?; how about", h: "怎么样", p: "zěnmeyàng", l: "12", alt: [] },
  { en: "cold", h: "冷", p: "lěng", l: "12", alt: [] },
  { en: "hot", h: "热", p: "rè", l: "12", alt: [] },
  { en: "to rain", h: "下雨", p: "xià yǔ", l: "12", alt: [] },
  { en: "body; health", h: "身体", p: "shēntǐ", l: "12", alt: [] },
  { en: "maybe; possibly", h: "可能", p: "kěnéng", l: "12", alt: [] },
  { en: "certainly; surely", h: "一定", p: "yídìng", l: "12", alt: [] },
  { en: "fruit", h: "水果", p: "shuǐguǒ", l: "12", alt: [] },
  { en: "very; extremely", h: "非常", p: "fēicháng", l: "12", alt: [] },
  { en: "good-looking", h: "好看", p: "hǎokàn", l: "12", alt: ["漂亮"] },
  { en: "How is the weather tomorrow?", h: "明天天气怎么样？", p: "Míngtiān tiānqì zěnmeyàng?", l: "12", alt: ["明天的天气怎么样？"] },
  { en: "It's too hot today.", h: "今天太热了。", p: "Jīntiān tài rè le.", l: "12", alt: ["今天天气太热了。"] },
  { en: "It's neither cold nor hot.", h: "不冷不热。", p: "Bù lěng bú rè.", l: "12", alt: [] },
  { en: "Will it rain tomorrow?", h: "明天会下雨吗？", p: "Míngtiān huì xià yǔ ma?", l: "12", alt: [] },
  { en: "It may rain tomorrow.", h: "明天可能会下雨。", p: "Míngtiān kěnéng huì xià yǔ.", l: "12", alt: [] },
  { en: "She will definitely come.", h: "她一定会来。", p: "Tā yídìng huì lái.", l: "12", alt: [] },
  { en: "Drink more water.", h: "多喝些水。", p: "Duō hē xiē shuǐ.", l: "12", alt: ["多喝水。", "你多喝一些水。"] },
  { en: "I love eating Chinese food.", h: "我爱吃中国菜。", p: "Wǒ ài chī Zhōngguó cài.", l: "12", alt: [] },
  { en: "This movie is great!", h: "这个电影太好看了！", p: "Zhège diànyǐng tài hǎokàn le!", l: "12", alt: [] },
  { en: "How is your health?", h: "你身体怎么样？", p: "Nǐ shēntǐ zěnmeyàng?", l: "12", alt: [] },
  { en: "He is neither tall nor short.", h: "他不高不矮。", p: "Tā bù gāo bù ǎi.", l: "12", alt: [] },

  // ---- Lesson 13 ----
  { en: "hello (on the phone)", h: "喂", p: "wèi", l: "13", alt: [] },
  { en: "to make a phone call", h: "打电话", p: "dǎ diànhuà", l: "13", alt: [] },
  { en: "to call Mom", h: "给妈妈打电话", p: "gěi māma dǎ diànhuà", l: "13", alt: [] },
  { en: "to watch TV", h: "看电视", p: "kàn diànshì", l: "13", alt: [] },
  { en: "to read (a book)", h: "看书", p: "kàn shū", l: "13", alt: [] },
  { en: "to study", h: "学习", p: "xuéxí", l: "13", alt: [] },
  { en: "to play (video) games", h: "打游戏", p: "dǎ yóuxì", l: "13", alt: [] },
  { en: "to cook", h: "做饭", p: "zuò fàn", l: "13", alt: [] },
  { en: "to look at one's phone", h: "看手机", p: "kàn shǒujī", l: "13", alt: [] },
  { en: "together", h: "一起", p: "yìqǐ", l: "13", alt: [] },
  { en: "What are you doing?", h: "你在做什么呢？", p: "Nǐ zài zuò shénme ne?", l: "13", alt: ["你在做什么？"] },
  { en: "I'm studying Chinese.", h: "我在学习中文呢。", p: "Wǒ zài xuéxí Zhōngwén ne.", l: "13", alt: ["我在学习中文。", "我在学中文呢。"] },
  { en: "I'm calling my dad.", h: "我在给爸爸打电话呢。", p: "Wǒ zài gěi bàba dǎ diànhuà ne.", l: "13", alt: ["我在给爸爸打电话。"] },
  { en: "He isn't reading; he's looking at his phone.", h: "他没在看书，他在看手机。", p: "Tā méi zài kàn shū, tā zài kàn shǒujī.", l: "13", alt: [] },
  { en: "Let's go eat together!", h: "我们一起去吃饭吧！", p: "Wǒmen yìqǐ qù chī fàn ba!", l: "13", alt: [] },
  { en: "Sure! / OK!", h: "好啊！", p: "Hǎo a!", l: "13", alt: ["好的！"] },
  { en: "Sorry, I don't want to go.", h: "不好意思，我不想去。", p: "Bù hǎoyìsi, wǒ bù xiǎng qù.", l: "13", alt: ["对不起，我不想去。"] },
  { en: "See you tomorrow!", h: "明天见！", p: "Míngtiān jiàn!", l: "13", alt: [] },

  // ---- Lesson 14 ----
  { en: "things; stuff", h: "东西", p: "dōngxi", l: "14", alt: [] },
  { en: "a little", h: "一点儿", p: "yìdiǎnr", l: "14", alt: [] },
  { en: "quite a few; quite a lot", h: "不少", p: "bù shǎo", l: "14", alt: [] },
  { en: "these", h: "这些", p: "zhèxiē", l: "14", alt: [] },
  { en: "those", h: "那些", p: "nàxiē", l: "14", alt: [] },
  { en: "all; both", h: "都", p: "dōu", l: "14", alt: [] },
  { en: "to see", h: "看见", p: "kànjiàn", l: "14", alt: [] },
  { en: "to drive (a car)", h: "开车", p: "kāi chē", l: "14", alt: [] },
  { en: "to come back", h: "回来", p: "huílai", l: "14", alt: [] },
  { en: "beautiful; pretty", h: "漂亮", p: "piàoliang", l: "14", alt: [] },
  { en: "clothes", h: "衣服", p: "yīfu", l: "14", alt: [] },
  { en: "to go shopping", h: "去商店买东西", p: "qù shāngdiàn mǎi dōngxi", l: "14", alt: ["买东西"] },
  { en: "I went to the store to buy things.", h: "我去商店买东西了。", p: "Wǒ qù shāngdiàn mǎi dōngxi le.", l: "14", alt: [] },
  { en: "She bought some apples.", h: "她买了一点儿苹果。", p: "Tā mǎile yìdiǎnr píngguǒ.", l: "14", alt: ["她买了一些苹果。"] },
  { en: "I bought a lot of clothes.", h: "我买了很多衣服。", p: "Wǒ mǎile hěn duō yīfu.", l: "14", alt: ["我买了不少衣服。"] },
  { en: "I didn't see him.", h: "我没看见他。", p: "Wǒ méi kànjiàn tā.", l: "14", alt: [] },
  { en: "Have you eaten?", h: "你吃饭了吗？", p: "Nǐ chī fàn le ma?", l: "14", alt: [] },
  { en: "He will be back in 40 minutes.", h: "他四十分钟后回来。", p: "Tā sìshí fēnzhōng hòu huílai.", l: "14", alt: ["四十分钟后他回来。"] },
  { en: "These clothes are all very pretty.", h: "这些衣服都很漂亮。", p: "Zhèxiē yīfu dōu hěn piàoliang.", l: "14", alt: [] },
  { en: "How many people did you see?", h: "你看见了几个人？", p: "Nǐ kànjiànle jǐ gè rén?", l: "14", alt: [] },

  // ---- Lesson 15 ----
  { en: "airplane", h: "飞机", p: "fēijī", l: "15", alt: [] },
  { en: "to take a plane; to fly", h: "坐飞机", p: "zuò fēijī", l: "15", alt: [] },
  { en: "to take the bus", h: "坐公交车", p: "zuò gōngjiāochē", l: "15", alt: [] },
  { en: "to take the subway", h: "坐地铁", p: "zuò dìtiě", l: "15", alt: [] },
  { en: "to take a taxi", h: "坐出租车", p: "zuò chūzūchē", l: "15", alt: [] },
  { en: "to take the school bus", h: "坐校车", p: "zuò xiàochē", l: "15", alt: [] },
  { en: "to ride a bike", h: "骑自行车", p: "qí zìxíngchē", l: "15", alt: [] },
  { en: "to walk; on foot", h: "走路", p: "zǒulù", l: "15", alt: [] },
  { en: "to know (a person); to meet", h: "认识", p: "rènshi", l: "15", alt: [] },
  { en: "to travel (for fun)", h: "旅游", p: "lǚyóu", l: "15", alt: ["旅行"] },
  { en: "university", h: "大学", p: "dàxué", l: "15", alt: [] },
  { en: "I came by plane.", h: "我是坐飞机来的。", p: "Wǒ shì zuò fēijī lái de.", l: "15", alt: [] },
  { en: "I came to Türkiye yesterday.", h: "我是昨天来土耳其的。", p: "Wǒ shì zuótiān lái Tǔ'ěrqí de.", l: "15", alt: [] },
  { en: "How did you come to school?", h: "你是怎么来学校的？", p: "Nǐ shì zěnme lái xuéxiào de?", l: "15", alt: [] },
  { en: "I walked to school.", h: "我是走路来学校的。", p: "Wǒ shì zǒulù lái xuéxiào de.", l: "15", alt: [] },
  { en: "Where did you buy it?", h: "你是在哪儿买的？", p: "Nǐ shì zài nǎr mǎi de?", l: "15", alt: [] },
  { en: "We met in 2024.", h: "我们是2024年认识的。", p: "Wǒmen shì èr líng èr sì nián rènshi de.", l: "15", alt: [] },
  { en: "I didn't come by taxi.", h: "我不是坐出租车来的。", p: "Wǒ bú shì zuò chūzūchē lái de.", l: "15", alt: [] },
  { en: "Nice to meet you.", h: "认识你很高兴。", p: "Rènshi nǐ hěn gāoxìng.", l: "15", alt: ["很高兴认识你。"] },

  // ---- Review (lessons 1–9) ----
  { en: "Thank you. — You're welcome.", h: "谢谢！——不客气。", p: "Xièxie! — Bú kèqi.", l: "R", alt: [] },
  { en: "Sorry. — It doesn't matter.", h: "对不起。——没关系。", p: "Duìbuqǐ. — Méi guānxi.", l: "R", alt: [] },
  { en: "What's your name?", h: "你叫什么名字？", p: "Nǐ jiào shénme míngzi?", l: "R", alt: [] },
  { en: "I am Turkish.", h: "我是土耳其人。", p: "Wǒ shì Tǔ'ěrqí rén.", l: "R", alt: [] },
  { en: "How old are you?", h: "你今年多大？", p: "Nǐ jīnnián duō dà?", l: "R", alt: ["你多大了？"] },
  { en: "How many people are there in your family?", h: "你家有几口人？", p: "Nǐ jiā yǒu jǐ kǒu rén?", l: "R", alt: [] },
  { en: "How much is this?", h: "这个多少钱？", p: "Zhège duōshao qián?", l: "R", alt: [] },
  { en: "I can speak a little Chinese.", h: "我会说一点儿中文。", p: "Wǒ huì shuō yìdiǎnr Zhōngwén.", l: "R", alt: ["我会说一点儿汉语。"] },
  { en: "I want to drink tea.", h: "我想喝茶。", p: "Wǒ xiǎng hē chá.", l: "R", alt: [] },
  { en: "What's the date today?", h: "今天几月几号？", p: "Jīntiān jǐ yuè jǐ hào?", l: "R", alt: [] },
  { en: "friend", h: "朋友", p: "péngyou", l: "R", alt: [] },
  { en: "birthday", h: "生日", p: "shēngrì", l: "R", alt: [] },
];

export const PART2 = [
  // ======== Q&A sheet (items 1–32) ========
  { n: 1, src: "sheet", l: "10", turns: [
    { s: "A", h: "手机在哪儿？", p: "Shǒujī zài nǎr?", e: "Where is the phone?" },
    { s: "B", h: "手机在桌子上面。", p: "Shǒujī zài zhuōzi shàngmiàn.", e: "The phone is on the table." },
  ], tip: "Answer with thing + 在 + place + 上面/里面/下面. Repeat the noun from the question." },
  { n: 2, src: "sheet", l: "10", turns: [
    { s: "A", h: "“爱”在哪儿？", p: "\"Ài\" zài nǎr?", e: "Where is \"love\"?" },
    { s: "B", h: "爱在我和你中间。", p: "Ài zài wǒ hé nǐ zhōngjiān.", e: "Love is between you and me." },
  ], tip: "A 和 B 中间 = between A and B. Memorize it as a whole sentence." },
  { n: 3, src: "sheet", l: "10", turns: [
    { s: "A", h: "教室里面有什么？", p: "Jiàoshì lǐmiàn yǒu shénme?", e: "What is there in the classroom?" },
    { s: "B", h: "教室里面有很多书、二十个学生和一个老师。", p: "Jiàoshì lǐmiàn yǒu hěn duō shū, èrshí gè xuésheng hé yí gè lǎoshī.", e: "In the classroom there are many books, twenty students and one teacher." },
  ], tip: "Place + 有 + things. Change the numbers to your real class; use 和 only before the last item." },
  { n: 4, src: "sheet", l: "10", turns: [
    { s: "A", h: "我能坐这儿吗？", p: "Wǒ néng zuò zhèr ma?", e: "Can I sit here?" },
    { s: "B", h: "请坐。", p: "Qǐng zuò.", e: "Please sit down." },
  ], tip: "A polite yes to 能…吗 requests: 请坐 / 好的 / 能。" },
  { n: 5, src: "sheet", l: "10", turns: [
    { s: "A", h: "你能帮我开门吗？", p: "Nǐ néng bāng wǒ kāi mén ma?", e: "Can you help me open the door?" },
    { s: "B", h: "好的。", p: "Hǎo de.", e: "Sure." },
  ], tip: "好的 = OK/sure. You can also answer 能。" },
  { n: 6, src: "sheet", l: "10", turns: [
    { s: "A", h: "我能用你的笔吗？", p: "Wǒ néng yòng nǐ de bǐ ma?", e: "Can I use your pen?" },
    { s: "B", h: "不好意思，不能。", p: "Bù hǎoyìsi, bù néng.", e: "Sorry, you can't." },
  ], tip: "Polite refusal: 不好意思 + 不能. Negate 能 with 不, never 没." },
  { n: 7, src: "sheet", l: "12", turns: [
    { s: "A", h: "明天会下雨吗？", p: "Míngtiān huì xià yǔ ma?", e: "Will it rain tomorrow?" },
    { s: "B", h: "明天可能会下雨。", p: "Míngtiān kěnéng huì xià yǔ.", e: "It may rain tomorrow." },
  ], tip: "Keep the question's words and add 可能 before 会. Negative: 明天不会下雨。" },
  { n: 8, src: "sheet", l: "12", turns: [
    { s: "A", h: "明天她会来上课吗？", p: "Míngtiān tā huì lái shàngkè ma?", e: "Will she come to class tomorrow?" },
    { s: "B", h: "她一定会来上课。", p: "Tā yídìng huì lái shàngkè.", e: "She will definitely come to class." },
  ], tip: "一定会 = definitely will (stronger than 可能会). Note the tone: yídìng." },
  { n: 9, src: "sheet", l: "11", turns: [
    { s: "A", h: "现在几点？", p: "Xiànzài jǐ diǎn?", e: "What time is it now?" },
    { s: "B", h: "现在下午4点05分。", p: "Xiànzài xiàwǔ sì diǎn líng wǔ fēn.", e: "It is 4:05 in the afternoon." },
  ], tip: "Time of day (早上/上午/下午/晚上) + 点 + 分. Say 05 as líng wǔ; 30 minutes = 半." },
  { n: 10, src: "sheet", l: "11", turns: [
    { s: "A", h: "你几点起床？", p: "Nǐ jǐ diǎn qǐchuáng?", e: "What time do you get up?" },
    { s: "B", h: "我早上7点前起床。", p: "Wǒ zǎoshang qī diǎn qián qǐchuáng.", e: "I get up before 7 in the morning." },
    { s: "A", h: "你什么时候睡觉？", p: "Nǐ shénme shíhou shuìjiào?", e: "When do you go to bed?" },
    { s: "B", h: "我晚上11点后睡觉。", p: "Wǒ wǎnshang shíyī diǎn hòu shuìjiào.", e: "I go to bed after 11 at night." },
  ], tip: "Time goes BEFORE the verb: 我 + time (+前/后) + verb. Use your real times." },
  { n: 11, src: "sheet", l: "12", turns: [
    { s: "A", h: "昨天的天气怎么样？", p: "Zuótiān de tiānqì zěnmeyàng?", e: "How was the weather yesterday?" },
    { s: "B", h: "昨天的天气很好，不冷不热。", p: "Zuótiān de tiānqì hěn hǎo, bù lěng bú rè.", e: "The weather was nice yesterday, neither cold nor hot." },
  ], tip: "Adjective answer + 不A不B. Mind sandhi: bù lěng but bú rè." },
  { n: 12, src: "sheet", l: "12", turns: [
    { s: "A", h: "这个电影怎么样？", p: "Zhège diànyǐng zěnmeyàng?", e: "How is this movie?" },
    { s: "B", h: "这个电影太好看了。", p: "Zhège diànyǐng tài hǎokàn le.", e: "This movie is really great." },
  ], tip: "太 + adjective + 了 = really/too … . Don't forget the 了." },
  { n: 13, src: "sheet", l: "12", turns: [
    { s: "A", h: "这件衣服怎么样？", p: "Zhè jiàn yīfu zěnmeyàng?", e: "How is this piece of clothing?" },
    { s: "B", h: "这件衣服不太好看。", p: "Zhè jiàn yīfu bú tài hǎokàn.", e: "This piece of clothing doesn't look very good." },
  ], tip: "不太 + adjective = not very … (softer than 不). Measure word for clothes: 件." },
  { n: 14, src: "sheet", l: "12", turns: [
    { s: "A", h: "天气太热了，我不爱吃饭，怎么办？", p: "Tiānqì tài rè le, wǒ bú ài chī fàn, zěnme bàn?", e: "It's too hot, I don't feel like eating. What should I do? (怎么办 = what should I do)" },
    { s: "B", h: "你多吃些水果，多喝些水。", p: "Nǐ duō chī xiē shuǐguǒ, duō hē xiē shuǐ.", e: "Eat more fruit and drink more water." },
  ], tip: "Advice pattern: 多 + verb + 些 + noun. 怎么办 always asks for advice." },
  { n: 15, src: "sheet", l: "12", turns: [
    { s: "A", h: "我的中文不太好，怎么办？", p: "Wǒ de Zhōngwén bú tài hǎo, zěnme bàn?", e: "My Chinese isn't very good. What should I do?" },
    { s: "B", h: "你多看些中文书，多说中文。", p: "Nǐ duō kàn xiē Zhōngwén shū, duō shuō Zhōngwén.", e: "Read more Chinese books and speak more Chinese." },
  ], tip: "Same 多 + V (+ 些) + N advice pattern; you can also say 多写汉字." },
  { n: 16, src: "sheet", l: "R", turns: [
    { s: "A", h: "你的手机号是多少？", p: "Nǐ de shǒujī hào shì duōshao?", e: "What is your phone number?" },
    { s: "B", h: "我的手机号是0521179897。", p: "Wǒ de shǒujī hào shì líng wǔ èr yāo yāo qī jiǔ bā jiǔ qī.", e: "My phone number is 0521179897." },
  ], tip: "Read digits one by one; in phone numbers 1 is read yāo, not yī. Practise your own number." },
  { n: 17, src: "sheet", l: "13", turns: [
    { s: "A", h: "你在做什么呢？", p: "Nǐ zài zuò shénme ne?", e: "What are you doing?" },
    { s: "B", h: "我在给爸爸打电话呢。", p: "Wǒ zài gěi bàba dǎ diànhuà ne.", e: "I'm calling my dad." },
  ], tip: "在 + verb + 呢 = doing right now. 给 + person goes before 打电话." },
  { n: 18, src: "sheet", l: "13", turns: [
    { s: "A", h: "你在做什么？", p: "Nǐ zài zuò shénme?", e: "What are you doing?" },
    { s: "B", h: "我在打游戏。", p: "Wǒ zài dǎ yóuxì.", e: "I'm playing games." },
  ], tip: "Swap in any activity: 在看书 / 在学习 / 在看电视 / 在做饭." },
  { n: 19, src: "sheet", l: "13", turns: [
    { s: "A", h: "他在看书吗？", p: "Tā zài kàn shū ma?", e: "Is he reading?" },
    { s: "B", h: "他没在看书，他在看手机。", p: "Tā méi zài kàn shū, tā zài kàn shǒujī.", e: "He isn't reading; he's looking at his phone." },
  ], tip: "Negative progressive is 没在 + verb (not 不在). Then say what he IS doing." },
  { n: 20, src: "sheet", l: "13", turns: [
    { s: "A", h: "我们明天一起去吃饭吧！", p: "Wǒmen míngtiān yìqǐ qù chī fàn ba!", e: "Let's go eat together tomorrow!" },
    { s: "B", h: "好啊！", p: "Hǎo a!", e: "Sure!" },
  ], tip: "Accept an invitation with 好啊！ You may add 明天见！" },
  { n: 21, src: "sheet", l: "13", turns: [
    { s: "A", h: "我们明天一起去打篮球吧！", p: "Wǒmen míngtiān yìqǐ qù dǎ lánqiú ba!", e: "Let's go play basketball together tomorrow!" },
    { s: "B", h: "不好意思，我不想去打篮球。", p: "Bù hǎoyìsi, wǒ bù xiǎng qù dǎ lánqiú.", e: "Sorry, I don't want to go play basketball." },
  ], tip: "Polite refusal: 不好意思，我不想 + repeat the activity." },
  { n: 22, src: "sheet", l: "14", turns: [
    { s: "A", h: "小美在宿舍吗？", p: "Xiǎo Měi zài sùshè ma?", e: "Is Xiao Mei in the dorm?" },
    { s: "B", h: "她不在宿舍。", p: "Tā bú zài sùshè.", e: "She isn't in the dorm." },
    { s: "A", h: "她去哪儿了？", p: "Tā qù nǎr le?", e: "Where did she go?" },
    { s: "B", h: "她去商店买东西了。", p: "Tā qù shāngdiàn mǎi dōngxi le.", e: "She went to the store to buy things." },
  ], tip: "Not at a place = 不在 (bú zài). Sentence-final 了 = it has happened: 去 + place + 做什么 + 了." },
  { n: 23, src: "sheet", l: "14", turns: [
    { s: "A", h: "她买什么了？", p: "Tā mǎi shénme le?", e: "What did she buy?" },
    { s: "B", h: "她买了一点儿水果。", p: "Tā mǎile yìdiǎnr shuǐguǒ.", e: "She bought some fruit." },
  ], tip: "Verb + 了 + amount + noun: 买了一点儿 / 买了很多 / 买了三个." },
  { n: 24, src: "sheet", l: "14", turns: [
    { s: "A", h: "王芳买什么了？", p: "Wáng Fāng mǎi shénme le?", e: "What did Wang Fang buy?" },
    { s: "B", h: "她买了不少衣服。", p: "Tā mǎile bù shǎo yīfu.", e: "She bought quite a lot of clothes." },
  ], tip: "不少 = quite a lot. Replace the name with 她/他 in your answer." },
  { n: 25, src: "sheet", l: "14", turns: [
    { s: "A", h: "你爸爸妈妈、爷爷奶奶、哥哥姐姐好吗？", p: "Nǐ bàba māma, yéye nǎinai, gēge jiějie hǎo ma?", e: "How are your parents, grandparents, older brother and older sister?" },
    { s: "B", h: "他们都很好。", p: "Tāmen dōu hěn hǎo.", e: "They are all very well." },
  ], tip: "Many people → 他们都 + adjective. 都 goes after the subject, before 很." },
  { n: 26, src: "sheet", l: "14", turns: [
    { s: "A", h: "你吃饭了吗？", p: "Nǐ chī fàn le ma?", e: "Have you eaten?" },
    { s: "B", h: "我吃饭了。", p: "Wǒ chī fàn le.", e: "Yes, I have eaten." },
  ], tip: "Yes = 我吃饭了。 No = 我没吃饭。 (no 了 with 没)." },
  { n: 27, src: "sheet", l: "14", turns: [
    { s: "A", h: "你看见王老师了吗？", p: "Nǐ kànjiàn Wáng lǎoshī le ma?", e: "Did you see Teacher Wang?" },
    { s: "B", h: "我没看见她。", p: "Wǒ méi kànjiàn tā.", e: "I didn't see her." },
  ], tip: "Past negative = 没 + verb, and drop 了. Yes-answer: 看见了。" },
  { n: 28, src: "sheet", l: "15", turns: [
    { s: "A", h: "你是怎么来学校的？", p: "Nǐ shì zěnme lái xuéxiào de?", e: "How did you come to school?" },
    { s: "B", h: "我是走路来学校的。", p: "Wǒ shì zǒulù lái xuéxiào de.", e: "I walked to school." },
  ], tip: "Put your transport between 是 and 来: 是坐校车/坐公交车/坐地铁/走路 + 来学校的." },
  { n: 29, src: "sheet", l: "15", turns: [
    { s: "A", h: "你是怎么去美国的？", p: "Nǐ shì zěnme qù Měiguó de?", e: "How did you go to the USA?" },
    { s: "B", h: "我是坐飞机去美国的。", p: "Wǒ shì zuò fēijī qù Měiguó de.", e: "I went to the USA by plane." },
  ], tip: "是 + manner + 去 + place + 的. Keep the place from the question." },
  { n: 30, src: "sheet", l: "15", turns: [
    { s: "A", h: "你和你的朋友是什么时候认识的？", p: "Nǐ hé nǐ de péngyou shì shénme shíhou rènshi de?", e: "When did you and your friend meet?" },
    { s: "B", h: "我们是2024年认识的。", p: "Wǒmen shì èr líng èr sì nián rènshi de.", e: "We met in 2024." },
  ], tip: "Read years digit by digit: 2025 = èr líng èr wǔ nián. Answer with 我们 (you + friend)." },
  { n: 31, src: "sheet", l: "15", turns: [
    { s: "A", h: "你的书包是在哪儿买的？", p: "Nǐ de shūbāo shì zài nǎr mǎi de?", e: "Where did you buy your schoolbag?" },
    { s: "B", h: "我是在中国买的。", p: "Wǒ shì zài Zhōngguó mǎi de.", e: "I bought it in China." },
  ], tip: "是 + 在 + place + verb + 的. You can also start with the object: 我的书包是在土耳其买的。" },
  { n: 32, src: "sheet", l: "15", turns: [
    { s: "A", h: "你的衣服是在中国买的吗？", p: "Nǐ de yīfu shì zài Zhōngguó mǎi de ma?", e: "Did you buy your clothes in China?" },
    { s: "B", h: "我的衣服不是在中国买的，是在土耳其买的。", p: "Wǒ de yīfu bú shì zài Zhōngguó mǎi de, shì zài Tǔ'ěrqí mǎi de.", e: "My clothes weren't bought in China; they were bought in Türkiye." },
  ], tip: "Negative: 不是…的 (bú shì), then correct it with 是…的." },

  // ======== Extra practice items (examiner may vary questions) ========
  { n: 33, src: "extra", l: "10", turns: [
    { s: "A", h: "你的书包在哪儿？", p: "Nǐ de shūbāo zài nǎr?", e: "Where is your schoolbag?" },
    { s: "B", h: "我的书包在椅子下面。", p: "Wǒ de shūbāo zài yǐzi xiàmiàn.", e: "My schoolbag is under the chair." },
  ], tip: "Change 你的 to 我的 in your answer, then 在 + place + 下面/上面/里面." },
  { n: 34, src: "extra", l: "10", turns: [
    { s: "A", h: "你的宿舍里面有什么？", p: "Nǐ de sùshè lǐmiàn yǒu shénme?", e: "What is there in your dorm room?" },
    { s: "B", h: "我的宿舍里面有电脑、桌子、椅子和很多书。", p: "Wǒ de sùshè lǐmiàn yǒu diànnǎo, zhuōzi, yǐzi hé hěn duō shū.", e: "In my dorm room there is a computer, a desk, chairs and many books." },
  ], tip: "Place + 有 + list. Put 和 before the last thing only." },
  { n: 35, src: "extra", l: "10", turns: [
    { s: "A", h: "小猫在哪儿？", p: "Xiǎo māo zài nǎr?", e: "Where is the kitten?" },
    { s: "B", h: "小猫在桌子和椅子中间。", p: "Xiǎo māo zài zhuōzi hé yǐzi zhōngjiān.", e: "The kitten is between the table and the chair." },
  ], tip: "Between A and B = 在 A 和 B 中间." },
  { n: 36, src: "extra", l: "10", turns: [
    { s: "A", h: "我能用你的电脑吗？", p: "Wǒ néng yòng nǐ de diànnǎo ma?", e: "Can I use your computer?" },
    { s: "B", h: "能，你用吧。", p: "Néng, nǐ yòng ba.", e: "Yes, go ahead and use it." },
  ], tip: "Yes = 能; no = 不好意思，不能。 吧 makes it friendly." },
  { n: 37, src: "extra", l: "10", turns: [
    { s: "A", h: "你家前面有什么？", p: "Nǐ jiā qiánmiàn yǒu shénme?", e: "What is in front of your home?" },
    { s: "B", h: "我家前面有一个商店。", p: "Wǒ jiā qiánmiàn yǒu yí gè shāngdiàn.", e: "There is a store in front of my home." },
  ], tip: "Place + 前面/后面 + 有 + 一个 + thing. Note yí gè." },
  { n: 38, src: "extra", l: "11", turns: [
    { s: "A", h: "你每天几点上课？", p: "Nǐ měi tiān jǐ diǎn shàngkè?", e: "What time do you have class every day?" },
    { s: "B", h: "我每天上午九点上课。", p: "Wǒ měi tiān shàngwǔ jiǔ diǎn shàngkè.", e: "I have class at 9 a.m. every day." },
  ], tip: "Order: 我 + 每天 + time of day + clock time + verb." },
  { n: 39, src: "extra", l: "11", turns: [
    { s: "A", h: "你什么时候去学校？", p: "Nǐ shénme shíhou qù xuéxiào?", e: "When do you go to school?" },
    { s: "B", h: "我早上八点半去学校。", p: "Wǒ zǎoshang bā diǎn bàn qù xuéxiào.", e: "I go to school at 8:30 in the morning." },
  ], tip: "Replace 什么时候 with your time, keep the rest of the question." },
  { n: 40, src: "extra", l: "11", turns: [
    { s: "A", h: "你住在哪儿？", p: "Nǐ zhù zài nǎr?", e: "Where do you live?" },
    { s: "B", h: "我住在学校的宿舍。", p: "Wǒ zhù zài xuéxiào de sùshè.", e: "I live in the school dormitory." },
  ], tip: "住在 + place. Other answers: 我住在家里。/ 我和爸爸妈妈一起住。" },
  { n: 41, src: "extra", l: "11", turns: [
    { s: "A", h: "你中午几点吃饭？", p: "Nǐ zhōngwǔ jǐ diǎn chī fàn?", e: "What time do you eat lunch?" },
    { s: "B", h: "我中午十二点半吃饭。", p: "Wǒ zhōngwǔ shí'èr diǎn bàn chī fàn.", e: "I eat at 12:30 at noon." },
  ], tip: "12:30 = 十二点半. Time word before the verb." },
  { n: 42, src: "extra", l: "11", turns: [
    { s: "A", h: "你下午做什么？", p: "Nǐ xiàwǔ zuò shénme?", e: "What do you do in the afternoon?" },
    { s: "B", h: "我下午四点后锻炼身体。", p: "Wǒ xiàwǔ sì diǎn hòu duànliàn shēntǐ.", e: "I exercise after 4 in the afternoon." },
  ], tip: "Any routine verb works: 写作业 / 散步 / 回宿舍 / 学习." },
  { n: 43, src: "extra", l: "11", turns: [
    { s: "A", h: "你晚上几点回宿舍？", p: "Nǐ wǎnshang jǐ diǎn huí sùshè?", e: "What time do you go back to the dorm in the evening?" },
    { s: "B", h: "我晚上九点前回宿舍。", p: "Wǒ wǎnshang jiǔ diǎn qián huí sùshè.", e: "I go back to the dorm before 9 in the evening." },
  ], tip: "前 = before, 后 = after; both come right after the clock time." },
  { n: 44, src: "extra", l: "12", turns: [
    { s: "A", h: "今天天气怎么样？", p: "Jīntiān tiānqì zěnmeyàng?", e: "How is the weather today?" },
    { s: "B", h: "今天天气非常好，不冷不热。", p: "Jīntiān tiānqì fēicháng hǎo, bù lěng bú rè.", e: "The weather is very good today, neither cold nor hot." },
  ], tip: "Other answers: 今天太冷了。/ 今天很热。/ 今天下雨了。" },
  { n: 45, src: "extra", l: "12", turns: [
    { s: "A", h: "明天会很冷吗？", p: "Míngtiān huì hěn lěng ma?", e: "Will it be very cold tomorrow?" },
    { s: "B", h: "明天可能会很冷。", p: "Míngtiān kěnéng huì hěn lěng.", e: "It may be very cold tomorrow." },
  ], tip: "可能会 = may; 一定会 = will surely; 不会 = won't." },
  { n: 46, src: "extra", l: "12", turns: [
    { s: "A", h: "你爱做什么？", p: "Nǐ ài zuò shénme?", e: "What do you love doing?" },
    { s: "B", h: "我爱看电影，也爱打篮球。", p: "Wǒ ài kàn diànyǐng, yě ài dǎ lánqiú.", e: "I love watching movies, and I also love playing basketball." },
  ], tip: "爱 + verb phrase. Add a second hobby with 也爱." },
  { n: 47, src: "extra", l: "12", turns: [
    { s: "A", h: "你的中文老师怎么样？", p: "Nǐ de Zhōngwén lǎoshī zěnmeyàng?", e: "What is your Chinese teacher like?" },
    { s: "B", h: "我的中文老师非常好，她不高不矮，很漂亮。", p: "Wǒ de Zhōngwén lǎoshī fēicháng hǎo, tā bù gāo bù ǎi, hěn piàoliang.", e: "My Chinese teacher is very nice; she is neither tall nor short, and very pretty." },
  ], tip: "Describe with 很/非常 + adjective and 不A不B." },
  { n: 48, src: "extra", l: "12", turns: [
    { s: "A", h: "你身体怎么样？", p: "Nǐ shēntǐ zěnmeyàng?", e: "How is your health?" },
    { s: "B", h: "我身体很好，我每天锻炼身体。", p: "Wǒ shēntǐ hěn hǎo, wǒ měi tiān duànliàn shēntǐ.", e: "I'm very healthy; I exercise every day." },
  ], tip: "Add a reason sentence to sound fluent." },
  { n: 49, src: "extra", l: "12", turns: [
    { s: "A", h: "我的汉字不太好，怎么办？", p: "Wǒ de Hànzì bú tài hǎo, zěnme bàn?", e: "My Chinese characters aren't very good. What should I do?" },
    { s: "B", h: "你多写些汉字，多看些中文书。", p: "Nǐ duō xiě xiē Hànzì, duō kàn xiē Zhōngwén shū.", e: "Write more characters and read more Chinese books." },
  ], tip: "怎么办 → advice with 多 + V + 些 + N, twice." },
  { n: 50, src: "extra", l: "13", turns: [
    { s: "A", h: "喂，你在做什么呢？", p: "Wèi, nǐ zài zuò shénme ne?", e: "Hello, what are you doing?" },
    { s: "B", h: "喂，我在写作业呢。", p: "Wèi, wǒ zài xiě zuòyè ne.", e: "Hello, I'm doing homework." },
  ], tip: "On the phone, answer 喂 too. 在 + V + 呢." },
  { n: 51, src: "extra", l: "13", turns: [
    { s: "A", h: "你妈妈在做什么呢？", p: "Nǐ māma zài zuò shénme ne?", e: "What is your mom doing?" },
    { s: "B", h: "她在做饭呢。", p: "Tā zài zuò fàn ne.", e: "She is cooking." },
  ], tip: "Use 她/他 for the person in the question." },
  { n: 52, src: "extra", l: "13", turns: [
    { s: "A", h: "你在看电视吗？", p: "Nǐ zài kàn diànshì ma?", e: "Are you watching TV?" },
    { s: "B", h: "我没在看电视，我在学习。", p: "Wǒ méi zài kàn diànshì, wǒ zài xuéxí.", e: "I'm not watching TV; I'm studying." },
  ], tip: "没在 + V, then 在 + what you are really doing." },
  { n: 53, src: "extra", l: "13", turns: [
    { s: "A", h: "你在给谁打电话？", p: "Nǐ zài gěi shéi dǎ diànhuà?", e: "Who are you calling?" },
    { s: "B", h: "我在给我妈妈打电话。", p: "Wǒ zài gěi wǒ māma dǎ diànhuà.", e: "I'm calling my mom." },
  ], tip: "Replace 谁 with the person; keep 给 + person + 打电话." },
  { n: 54, src: "extra", l: "13", turns: [
    { s: "A", h: "我们下午一起去散步吧！", p: "Wǒmen xiàwǔ yìqǐ qù sànbù ba!", e: "Let's go for a walk together this afternoon!" },
    { s: "B", h: "好啊！下午见！", p: "Hǎo a! Xiàwǔ jiàn!", e: "Sure! See you this afternoon!" },
  ], tip: "Accept + time + 见: 下午见 / 明天见 / 晚上见." },
  { n: 55, src: "extra", l: "13", turns: [
    { s: "A", h: "我们今天晚上一起去看电影吧！", p: "Wǒmen jīntiān wǎnshang yìqǐ qù kàn diànyǐng ba!", e: "Let's go see a movie together tonight!" },
    { s: "B", h: "不好意思，我不想去，我想在宿舍睡觉。", p: "Bù hǎoyìsi, wǒ bù xiǎng qù, wǒ xiǎng zài sùshè shuìjiào.", e: "Sorry, I don't want to go; I want to sleep in the dorm." },
  ], tip: "Refuse politely and give what you want to do instead." },
  { n: 56, src: "extra", l: "13", turns: [
    { s: "A", h: "昨天下午三点你在做什么？", p: "Zuótiān xiàwǔ sān diǎn nǐ zài zuò shénme?", e: "What were you doing at 3 p.m. yesterday?" },
    { s: "B", h: "昨天下午三点我在上课。", p: "Zuótiān xiàwǔ sān diǎn wǒ zài shàngkè.", e: "At 3 p.m. yesterday I was in class." },
  ], tip: "在 + V also works for the past when a time point is given." },
  { n: 57, src: "extra", l: "14", turns: [
    { s: "A", h: "你昨天去哪儿了？", p: "Nǐ zuótiān qù nǎr le?", e: "Where did you go yesterday?" },
    { s: "B", h: "我昨天去商店买东西了。", p: "Wǒ zuótiān qù shāngdiàn mǎi dōngxi le.", e: "Yesterday I went to the store to buy things." },
  ], tip: "Sentence-final 了. Other places: 去书店了 / 去医院了 / 去北京旅游了." },
  { n: 58, src: "extra", l: "14", turns: [
    { s: "A", h: "你买了什么？", p: "Nǐ mǎile shénme?", e: "What did you buy?" },
    { s: "B", h: "我买了一些水果和一件衣服。", p: "Wǒ mǎile yìxiē shuǐguǒ hé yí jiàn yīfu.", e: "I bought some fruit and a piece of clothing." },
  ], tip: "Verb + 了 + quantity + noun. Don't say just 我买了衣服 — add a quantity." },
  { n: 59, src: "extra", l: "14", turns: [
    { s: "A", h: "你买了几本书？", p: "Nǐ mǎile jǐ běn shū?", e: "How many books did you buy?" },
    { s: "B", h: "我买了三本书。", p: "Wǒ mǎile sān běn shū.", e: "I bought three books." },
  ], tip: "Replace 几 with a number and keep the measure word 本." },
  { n: 60, src: "extra", l: "14", turns: [
    { s: "A", h: "你看见我的手机了吗？", p: "Nǐ kànjiàn wǒ de shǒujī le ma?", e: "Did you see my phone?" },
    { s: "B", h: "我没看见你的手机。", p: "Wǒ méi kànjiàn nǐ de shǒujī.", e: "I didn't see your phone." },
  ], tip: "我的 in the question becomes 你的 in your answer." },
  { n: 61, src: "extra", l: "14", turns: [
    { s: "A", h: "你朋友什么时候回来？", p: "Nǐ péngyou shénme shíhou huílai?", e: "When will your friend come back?" },
    { s: "B", h: "他二十分钟后回来。", p: "Tā èrshí fēnzhōng hòu huílai.", e: "He will be back in twenty minutes." },
  ], tip: "Number + 分钟后 = in … minutes; it goes before 回来." },
  { n: 62, src: "extra", l: "14", turns: [
    { s: "A", h: "这些衣服怎么样？", p: "Zhèxiē yīfu zěnmeyàng?", e: "How are these clothes?" },
    { s: "B", h: "这些衣服都很漂亮。", p: "Zhèxiē yīfu dōu hěn piàoliang.", e: "These clothes are all very pretty." },
  ], tip: "这些/那些 + noun + 都 + 很 + adjective." },
  { n: 63, src: "extra", l: "14", turns: [
    { s: "A", h: "你今天喝咖啡了吗？", p: "Nǐ jīntiān hē kāfēi le ma?", e: "Did you drink coffee today?" },
    { s: "B", h: "我今天没喝咖啡，我喝茶了。", p: "Wǒ jīntiān méi hē kāfēi, wǒ hē chá le.", e: "I didn't drink coffee today; I drank tea." },
  ], tip: "没 + V (no 了), then the positive sentence with 了." },
  { n: 64, src: "extra", l: "15", turns: [
    { s: "A", h: "你是哪年开始学中文的？", p: "Nǐ shì nǎ nián kāishǐ xué Zhōngwén de?", e: "In which year did you start learning Chinese?" },
    { s: "B", h: "我是2025年开始学中文的。", p: "Wǒ shì èr líng èr wǔ nián kāishǐ xué Zhōngwén de.", e: "I started learning Chinese in 2025." },
  ], tip: "是 + time + verb phrase + 的. Read the year digit by digit." },
  { n: 65, src: "extra", l: "15", turns: [
    { s: "A", h: "你是怎么来大学的？", p: "Nǐ shì zěnme lái dàxué de?", e: "How did you come to the university?" },
    { s: "B", h: "我是坐校车来大学的。", p: "Wǒ shì zuò xiàochē lái dàxué de.", e: "I came to the university by school bus." },
  ], tip: "Options: 坐公交车 / 坐地铁 / 坐出租车 / 骑自行车 / 开车 / 走路." },
  { n: 66, src: "extra", l: "15", turns: [
    { s: "A", h: "你是坐地铁来的吗？", p: "Nǐ shì zuò dìtiě lái de ma?", e: "Did you come by subway?" },
    { s: "B", h: "我不是坐地铁来的，我是坐公交车来的。", p: "Wǒ bú shì zuò dìtiě lái de, wǒ shì zuò gōngjiāochē lái de.", e: "I didn't come by subway; I came by bus." },
  ], tip: "不是…的, then correct it with 是…的." },
  { n: 67, src: "extra", l: "15", turns: [
    { s: "A", h: "你的手机是在哪儿买的？", p: "Nǐ de shǒujī shì zài nǎr mǎi de?", e: "Where did you buy your phone?" },
    { s: "B", h: "我的手机是在土耳其买的。", p: "Wǒ de shǒujī shì zài Tǔ'ěrqí mǎi de.", e: "I bought my phone in Türkiye." },
  ], tip: "是 + 在 + place + 买的." },
  { n: 68, src: "extra", l: "15", turns: [
    { s: "A", h: "你和你的好朋友是在哪儿认识的？", p: "Nǐ hé nǐ de hǎo péngyou shì zài nǎr rènshi de?", e: "Where did you and your good friend meet?" },
    { s: "B", h: "我们是在大学认识的。", p: "Wǒmen shì zài dàxué rènshi de.", e: "We met at university." },
  ], tip: "Answer with 我们. Other places: 在学校 / 在中文课 / 在宿舍." },
  { n: 69, src: "extra", l: "15", turns: [
    { s: "A", h: "你去北京旅游了吗？", p: "Nǐ qù Běijīng lǚyóu le ma?", e: "Did you go to Beijing for a trip?" },
    { s: "B", h: "去了。", p: "Qù le.", e: "Yes, I did." },
    { s: "A", h: "你是怎么去的？", p: "Nǐ shì zěnme qù de?", e: "How did you go?" },
    { s: "B", h: "我是坐飞机去的。", p: "Wǒ shì zuò fēijī qù de.", e: "I went by plane." },
  ], tip: "First 了 (it happened), then 是…的 for the details (how/when/with whom)." },
  { n: 70, src: "extra", l: "15", turns: [
    { s: "A", h: "你们是怎么去饭店的？", p: "Nǐmen shì zěnme qù fàndiàn de?", e: "How did you (all) get to the restaurant?" },
    { s: "B", h: "我们是坐出租车去饭店的。", p: "Wǒmen shì zuò chūzūchē qù fàndiàn de.", e: "We went to the restaurant by taxi." },
  ], tip: "你们 in the question → 我们 in the answer." },
  { n: 71, src: "extra", l: "15", turns: [
    { s: "A", h: "你是什么时候来北京的？", p: "Nǐ shì shénme shíhou lái Běijīng de?", e: "When did you come to Beijing?" },
    { s: "B", h: "我是昨天来北京的。", p: "Wǒ shì zuótiān lái Běijīng de.", e: "I came to Beijing yesterday." },
  ], tip: "Time goes right after 是: 是昨天 / 是上个月 / 是2024年 + 来…的." },
  { n: 72, src: "extra", l: "R", turns: [
    { s: "A", h: "你家有几口人？", p: "Nǐ jiā yǒu jǐ kǒu rén?", e: "How many people are there in your family?" },
    { s: "B", h: "我家有四口人：爸爸、妈妈、哥哥和我。", p: "Wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.", e: "There are four people in my family: dad, mom, my older brother and me." },
  ], tip: "Use 口 for family members; list them with 和 before the last." },
  { n: 73, src: "extra", l: "R", turns: [
    { s: "A", h: "你今年多大？", p: "Nǐ jīnnián duō dà?", e: "How old are you this year?" },
    { s: "B", h: "我今年二十岁。", p: "Wǒ jīnnián èrshí suì.", e: "I'm twenty this year." },
  ], tip: "No 是 before age: 我二十岁, not 我是二十岁." },
  { n: 74, src: "extra", l: "R", turns: [
    { s: "A", h: "你会说中文吗？", p: "Nǐ huì shuō Zhōngwén ma?", e: "Can you speak Chinese?" },
    { s: "B", h: "我会说一点儿中文。", p: "Wǒ huì shuō yìdiǎnr Zhōngwén.", e: "I can speak a little Chinese." },
  ], tip: "会 = can (a learned skill). 一点儿 goes before the noun." },
  { n: 75, src: "extra", l: "R", turns: [
    { s: "A", h: "今天几月几号？星期几？", p: "Jīntiān jǐ yuè jǐ hào? Xīngqī jǐ?", e: "What's the date today? What day of the week?" },
    { s: "B", h: "今天十一月十二号，星期四。", p: "Jīntiān shíyī yuè shí'èr hào, xīngqīsì.", e: "Today is November 12th, Thursday." },
  ], tip: "Order: 月 → 号 → 星期. Check the real date on exam day." },
  { n: 76, src: "extra", l: "R", turns: [
    { s: "A", h: "你的生日是几月几号？", p: "Nǐ de shēngrì shì jǐ yuè jǐ hào?", e: "When is your birthday?" },
    { s: "B", h: "我的生日是五月九号。", p: "Wǒ de shēngrì shì wǔ yuè jiǔ hào.", e: "My birthday is May 9th." },
  ], tip: "Replace 几 with numbers; month first, then day." },
  { n: 77, src: "extra", l: "R", turns: [
    { s: "A", h: "你是哪国人？", p: "Nǐ shì nǎ guó rén?", e: "What nationality are you?" },
    { s: "B", h: "我是土耳其人。", p: "Wǒ shì Tǔ'ěrqí rén.", e: "I'm Turkish." },
  ], tip: "Country + 人 = nationality: 中国人 / 美国人 / 土耳其人." },
];

export const PART3 = [
  {
    id: "day",
    h: "请介绍你的一天。",
    p: "Qǐng jièshào nǐ de yì tiān.",
    en: "Please describe your daily routine.",
    frames: [
      { h: "大家好！我叫___，我是___人。", p: "Dàjiā hǎo! Wǒ jiào ___, wǒ shì ___ rén.", e: "Hello everyone! My name is ___, I am ___. (大家 = everyone)" },
      { h: "我住在___。", p: "Wǒ zhù zài ___.", e: "I live in ___." },
      { h: "我每天早上___点起床。", p: "Wǒ měi tiān zǎoshang ___ diǎn qǐchuáng.", e: "Every day I get up at ___ in the morning." },
      { h: "我早上___点前起床。", p: "Wǒ zǎoshang ___ diǎn qián qǐchuáng.", e: "I get up before ___ in the morning." },
      { h: "我每天坐___去学校。", p: "Wǒ měi tiān zuò ___ qù xuéxiào.", e: "Every day I take the ___ to school." },
      { h: "我上午___点上课。", p: "Wǒ shàngwǔ ___ diǎn shàngkè.", e: "I have class at ___ in the morning." },
      { h: "我中午在___吃饭。", p: "Wǒ zhōngwǔ zài ___ chī fàn.", e: "At noon I eat at ___." },
      { h: "我下午___点后___。", p: "Wǒ xiàwǔ ___ diǎn hòu ___.", e: "After ___ in the afternoon I ___." },
      { h: "我晚上在宿舍写作业、看书。", p: "Wǒ wǎnshang zài sùshè xiě zuòyè, kàn shū.", e: "In the evening I do homework and read in the dorm." },
      { h: "我晚上___点后睡觉。", p: "Wǒ wǎnshang ___ diǎn hòu shuìjiào.", e: "I go to bed after ___ at night." },
      { h: "现在我在___呢。", p: "Xiànzài wǒ zài ___ ne.", e: "Right now I am ___." },
      { h: "这是我的一天。谢谢大家！", p: "Zhè shì wǒ de yì tiān. Xièxie dàjiā!", e: "This is my day. Thank you, everyone!" },
    ],
    vocab: ["每天", "早上", "上午", "中午", "下午", "晚上", "点", "半", "前", "后", "起床", "洗澡", "吃饭", "上课", "写作业", "锻炼身体", "散步", "学习", "回家", "宿舍", "睡觉", "坐", "校车", "打电话"],
    models: [
      {
        level: "Basic",
        h: "大家好！我叫阿里，我是大学生。我每天早上七点起床。我八点坐校车去学校。我上午九点上课。我中午十二点半吃饭。我下午在宿舍写作业。我晚上十一点后睡觉。谢谢！",
        p: "Dàjiā hǎo! Wǒ jiào Ālǐ, wǒ shì dàxuéshēng. Wǒ měi tiān zǎoshang qī diǎn qǐchuáng. Wǒ bā diǎn zuò xiàochē qù xuéxiào. Wǒ shàngwǔ jiǔ diǎn shàngkè. Wǒ zhōngwǔ shí'èr diǎn bàn chī fàn. Wǒ xiàwǔ zài sùshè xiě zuòyè. Wǒ wǎnshang shíyī diǎn hòu shuìjiào. Xièxie!",
        e: "Hello everyone! My name is Ali, I'm a university student. Every day I get up at 7 in the morning. At 8 I take the school bus to school. I have class at 9 a.m. I eat at 12:30. In the afternoon I do homework in the dorm. I go to bed after 11 at night. Thank you!",
      },
      {
        level: "Strong",
        h: "大家好！我叫阿里，我是土耳其人，今年二十岁。我是大学生，我是2025年来这个大学的。我住在学校的宿舍。我每天早上七点前起床。起床后，我吃一点儿面包，喝茶。八点半，我坐校车去教室上课。我们的中文老师是中国人，她非常好。中午十二点，我和朋友一起在餐厅吃饭。今天中午我吃了很多米饭。下午四点后，我和同学一起打篮球。晚上七点，我给妈妈打电话。晚上我在宿舍写作业、看书，十一点后洗澡、睡觉。现在我在和老师说中文呢！明天是星期五，我可能会去商店买东西。我很喜欢我的一天。谢谢大家！",
        p: "Dàjiā hǎo! Wǒ jiào Ālǐ, wǒ shì Tǔ'ěrqí rén, jīnnián èrshí suì. Wǒ shì dàxuéshēng, wǒ shì èr líng èr wǔ nián lái zhège dàxué de. Wǒ zhù zài xuéxiào de sùshè. Wǒ měi tiān zǎoshang qī diǎn qián qǐchuáng. Qǐchuáng hòu, wǒ chī yìdiǎnr miànbāo, hē chá. Bā diǎn bàn, wǒ zuò xiàochē qù jiàoshì shàngkè. Wǒmen de Zhōngwén lǎoshī shì Zhōngguó rén, tā fēicháng hǎo. Zhōngwǔ shí'èr diǎn, wǒ hé péngyou yìqǐ zài cāntīng chī fàn. Jīntiān zhōngwǔ wǒ chīle hěn duō mǐfàn. Xiàwǔ sì diǎn hòu, wǒ hé tóngxué yìqǐ dǎ lánqiú. Wǎnshang qī diǎn, wǒ gěi māma dǎ diànhuà. Wǎnshang wǒ zài sùshè xiě zuòyè, kàn shū, shíyī diǎn hòu xǐzǎo, shuìjiào. Xiànzài wǒ zài hé lǎoshī shuō Zhōngwén ne! Míngtiān shì xīngqīwǔ, wǒ kěnéng huì qù shāngdiàn mǎi dōngxi. Wǒ hěn xǐhuan wǒ de yì tiān. Xièxie dàjiā!",
        e: "Hello everyone! My name is Ali, I'm Turkish and I'm twenty this year. I'm a university student; I came to this university in 2025. I live in the school dorm. Every day I get up before 7 in the morning. After getting up, I eat a little bread and drink tea. At 8:30 I take the school bus to the classroom for class. Our Chinese teacher is Chinese, and she is very nice. At 12 noon I eat with my friends in the cafeteria. Today at noon I ate a lot of rice. After 4 p.m. I play basketball with my classmates. At 7 in the evening I call my mom. In the evening I do homework and read in the dorm, and after 11 I shower and go to bed. Right now I'm speaking Chinese with my teacher! Tomorrow is Friday, so I may go shopping. I really like my day. Thank you, everyone!",
      },
    ],
    tips: [
      "Open with 大家好！我叫… and close with 谢谢！ — easy points for a clear structure.",
      "Go in time order: 早上 → 上午 → 中午 → 下午 → 晚上. Starting each sentence with a time word replaces connectors like 然后 (ránhòu, then), which you only need if you are sure of it.",
      "Time always comes BEFORE the verb: 我七点起床 (not 我起床七点). Clock time + 前/后 = before/after.",
      "Add one sentence each with 了 (今天我吃了很多米饭), 在…呢 (现在我在说中文呢) and 会/可能会 (明天我可能会…) to show off the exam grammar.",
      "Use your real times and activities — it's easier to remember and to answer follow-up questions.",
      "Speak slowly and clearly; 8 correct sentences beat 15 broken ones. Watch tones on 起床 qǐchuáng, 睡觉 shuìjiào, 上课 shàngkè.",
    ],
  },
  {
    id: "change",
    h: "请介绍你现在和十年前相比有哪些变化，再想一想十年后的自己会是什么样子。",
    p: "Qǐng jièshào nǐ xiànzài hé shí nián qián xiāngbǐ yǒu nǎxiē biànhuà, zài xiǎng yi xiǎng shí nián hòu de zìjǐ huì shì shénme yàngzi.",
    en: "Describe how you have changed compared to 10 years ago. Then imagine what you will be like in ten years.",
    frames: [
      { h: "十年前我___岁，现在我___岁了，十年后我___岁。", p: "Shí nián qián wǒ ___ suì, xiànzài wǒ ___ suì le, shí nián hòu wǒ ___ suì.", e: "Ten years ago I was ___, now I'm ___, in ten years I'll be ___." },
      { h: "十年前我是孩子，现在我长大了。", p: "Shí nián qián wǒ shì háizi, xiànzài wǒ zhǎngdà le.", e: "Ten years ago I was a child; now I have grown up." },
      { h: "十年前我很___，现在我很___了。", p: "Shí nián qián wǒ hěn ___, xiànzài wǒ hěn ___ le.", e: "Ten years ago I was very ___; now I am very ___." },
      { h: "十年前我不会___，现在我会___了。", p: "Shí nián qián wǒ bú huì ___, xiànzài wǒ huì ___ le.", e: "Ten years ago I couldn't ___; now I can ___." },
      { h: "十年前我住在___，现在我住在___。", p: "Shí nián qián wǒ zhù zài ___, xiànzài wǒ zhù zài ___.", e: "Ten years ago I lived in ___; now I live in ___." },
      { h: "十年前我爱___，现在我爱___。", p: "Shí nián qián wǒ ài ___, xiànzài wǒ ài ___.", e: "Ten years ago I loved ___; now I love ___." },
      { h: "我是___年开始学中文的。", p: "Wǒ shì ___ nián kāishǐ xué Zhōngwén de.", e: "I started learning Chinese in ___." },
      { h: "十年后我一定会___。", p: "Shí nián hòu wǒ yídìng huì ___.", e: "In ten years I will definitely ___." },
      { h: "十年后我可能会___。", p: "Shí nián hòu wǒ kěnéng huì ___.", e: "In ten years I may ___." },
      { h: "十年后我想去___工作。", p: "Shí nián hòu wǒ xiǎng qù ___ gōngzuò.", e: "In ten years I want to go work in ___." },
      { h: "十年后我的中文一定会非常好。", p: "Shí nián hòu wǒ de Zhōngwén yídìng huì fēicháng hǎo.", e: "In ten years my Chinese will definitely be very good." },
    ],
    vocab: ["年", "前", "后", "现在", "孩子", "长大", "会", "可能", "一定", "想", "岁", "高", "矮", "说", "中文", "住", "爱", "喜欢", "工作", "认识", "开始", "旅游", "飞机", "开车", "朋友"],
    models: [
      {
        level: "Basic",
        h: "大家好！我叫阿里。十年前我十岁，现在我二十岁了。十年前我是孩子，现在我长大了。十年前我很矮，现在我很高了。十年前我不会说中文，现在我会说中文了。十年后我的中文一定会非常好。十年后我可能会有一个孩子。谢谢！",
        p: "Dàjiā hǎo! Wǒ jiào Ālǐ. Shí nián qián wǒ shí suì, xiànzài wǒ èrshí suì le. Shí nián qián wǒ shì háizi, xiànzài wǒ zhǎngdà le. Shí nián qián wǒ hěn ǎi, xiànzài wǒ hěn gāo le. Shí nián qián wǒ bú huì shuō Zhōngwén, xiànzài wǒ huì shuō Zhōngwén le. Shí nián hòu wǒ de Zhōngwén yídìng huì fēicháng hǎo. Shí nián hòu wǒ kěnéng huì yǒu yí gè háizi. Xièxie!",
        e: "Hello everyone! My name is Ali. Ten years ago I was ten; now I'm twenty. Ten years ago I was a child; now I have grown up. Ten years ago I was short; now I'm tall. Ten years ago I couldn't speak Chinese; now I can. In ten years my Chinese will definitely be very good. In ten years I may have a child. Thank you!",
      },
      {
        level: "Strong",
        h: "大家好！我叫阿里，我是土耳其人。十年前我十岁，现在我二十岁了，十年后我三十岁。十年前我是孩子，个子很矮，现在我长大了，个子很高。十年前我和爸爸妈妈一起住，现在我住在大学的宿舍。十年前我不会说中文，也不认识中国人。我是2025年开始学中文的。现在我会说一点儿中文了，我也认识了两个中国朋友。十年前我爱打游戏，现在我爱学习，也爱锻炼身体。现在我在学做中国菜呢！十年后我一定会去中国旅游，我可能会坐飞机去北京。十年后我的中文一定会非常好。我可能会在中国工作，也可能会有一个孩子。我觉得十年后的我会很高兴。谢谢大家！",
        p: "Dàjiā hǎo! Wǒ jiào Ālǐ, wǒ shì Tǔ'ěrqí rén. Shí nián qián wǒ shí suì, xiànzài wǒ èrshí suì le, shí nián hòu wǒ sānshí suì. Shí nián qián wǒ shì háizi, gèzi hěn ǎi, xiànzài wǒ zhǎngdà le, gèzi hěn gāo. Shí nián qián wǒ hé bàba māma yìqǐ zhù, xiànzài wǒ zhù zài dàxué de sùshè. Shí nián qián wǒ bú huì shuō Zhōngwén, yě bú rènshi Zhōngguó rén. Wǒ shì èr líng èr wǔ nián kāishǐ xué Zhōngwén de. Xiànzài wǒ huì shuō yìdiǎnr Zhōngwén le, wǒ yě rènshile liǎng gè Zhōngguó péngyou. Shí nián qián wǒ ài dǎ yóuxì, xiànzài wǒ ài xuéxí, yě ài duànliàn shēntǐ. Xiànzài wǒ zài xué zuò Zhōngguó cài ne! Shí nián hòu wǒ yídìng huì qù Zhōngguó lǚyóu, wǒ kěnéng huì zuò fēijī qù Běijīng. Shí nián hòu wǒ de Zhōngwén yídìng huì fēicháng hǎo. Wǒ kěnéng huì zài Zhōngguó gōngzuò, yě kěnéng huì yǒu yí gè háizi. Wǒ juéde shí nián hòu de wǒ huì hěn gāoxìng. Xièxie dàjiā!",
        e: "Hello everyone! My name is Ali, I'm Turkish. Ten years ago I was ten, now I'm twenty, and in ten years I'll be thirty. Ten years ago I was a child and short; now I've grown up and I'm tall. Ten years ago I lived with my parents; now I live in the university dorm. Ten years ago I couldn't speak Chinese and didn't know any Chinese people. I started learning Chinese in 2025. Now I can speak a little Chinese, and I have got to know two Chinese friends. Ten years ago I loved playing games; now I love studying and exercising. Right now I'm learning to cook Chinese food! In ten years I will definitely travel to China; I may fly to Beijing. In ten years my Chinese will definitely be very good. I may work in China, and I may also have a child. I think the me of ten years from now will be very happy. Thank you, everyone!",
      },
    ],
    tips: [
      "Use the three-step contrast in every pair: 十年前我…，现在我…了，十年后我一定/可能会…。",
      "The 了 at the end of the \"now\" clause marks the change (现在我长大了 / 现在我会说中文了) — don't drop it.",
      "Future = 会: 一定会 (definitely), 可能会 (maybe). Past habit/ability negative = 不会 (十年前我不会说中文).",
      "Ages are free points: 十年前我十岁，现在我二十岁了，十年后我三十岁。 No 是 before ages.",
      "Prepare 3–4 change pairs (age, height, language, where you live, hobbies) and 2–3 future sentences; add one 是…的 (我是2025年开始学中文的).",
      "Start with 大家好 and finish with 谢谢 — and keep sentences short so your tones stay clear.",
    ],
  },
];
