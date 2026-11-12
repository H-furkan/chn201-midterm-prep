// Grammar points for CHN201 (HSK Standard Course 1). 'R' = review of lessons 1–9.
export const GRAMMAR = [
 {
  id: "ma-question-words",
  l: "R",
  title: "吗 questions vs question words",
  pattern: "Statement + 吗？ (yes/no question)\nQuestion word (什么 / 谁 / 哪儿 / 几 / 多少 / 怎么) in the answer's position — NO 吗",
  explain: "To make a yes/no question, simply add 吗 to the end of a statement; the word order does not change. If the sentence already has a question word such as 什么, 谁, 哪儿, 哪, 几, 多少 or 怎么, it is already a question, so you must NOT add 吗. The question word stands exactly where the answer will stand (你叫什么名字？— 我叫Ali。). The most common mistake is adding 吗 after a question word.",
  examples: [
   {
    h: "你是学生吗？",
    p: "Nǐ shì xuésheng ma?",
    e: "Are you a student?"
   },
   {
    h: "你喜欢喝茶吗？",
    p: "Nǐ xǐhuan hē chá ma?",
    e: "Do you like drinking tea?"
   },
   {
    h: "你叫什么名字？",
    p: "Nǐ jiào shénme míngzi?",
    e: "What is your name?"
   },
   {
    h: "他是谁？",
    p: "Tā shì shéi?",
    e: "Who is he?"
   },
   {
    h: "你住在哪儿？",
    p: "Nǐ zhù zài nǎr?",
    e: "Where do you live?"
   },
   {
    h: "你家有几口人？",
    p: "Nǐ jiā yǒu jǐ kǒu rén?",
    e: "How many people are there in your family?"
   },
   {
    h: "这本书多少钱？",
    p: "Zhè běn shū duōshao qián?",
    e: "How much is this book?"
   }
  ],
  mistakes: [
   {
    wrong: "你叫什么名字吗？",
    right: "你叫什么名字？",
    why: "什么 already makes it a question; never add 吗 to a question-word question."
   },
   {
    wrong: "你是哪国人吗？",
    right: "你是哪国人？",
    why: "哪 is a question word, so 吗 must go."
   }
  ],
  quiz: [
   {
    q: "Choose the correct question:",
    options: [
     "你去哪儿？",
     "你去哪儿吗？",
     "你哪儿去吗？"
    ],
    answer: 0,
    why: "哪儿 is a question word, so no 吗; it stands after the verb 去 where the place would be."
   },
   {
    q: "你是中国人（　）？",
    options: [
     "什么",
     "谁",
     "吗"
    ],
    answer: 2,
    why: "It is a yes/no question with no question word, so add 吗."
   },
   {
    q: "他是（　）？ —他是我的老师。",
    options: [
     "几",
     "谁",
     "吗"
    ],
    answer: 1,
    why: "The answer is a person, so ask with 谁 (who)."
   },
   {
    q: "Which sentence is WRONG?",
    options: [
     "你想喝什么吗？",
     "你有几个朋友？",
     "你喜欢看书吗？"
    ],
    answer: 0,
    why: "你想喝什么吗 mixes the question word 什么 with 吗."
   },
   {
    q: "Turn 他是医生。 into a yes/no question:",
    options: [
     "他是什么医生吗？",
     "吗他是医生？",
     "他是医生吗？"
    ],
    answer: 2,
    why: "Just add 吗 at the end; nothing else changes."
   }
  ]
 },
 {
  id: "shi-you-zai",
  l: "R",
  title: "是, 有 and 在 (to be / to have, there is / to be at)",
  pattern: "A + 是 + B  (A is B)\nPlace + 有 + Thing  (there is a thing at a place)\nThing/Person + 在 + Place  (the thing is at a place)",
  explain: "是 links two nouns: 我是学生. Do not use 是 before adjectives — say 我很高兴, not 我是高兴. 有 means 'to have' and also 'there is / there are'; in that case the PLACE comes first: 桌子上有一本书. 在 tells you where a known thing or person is; the THING comes first: 书在桌子上. The negative of 有 is always 没有, never 不有.",
  examples: [
   {
    h: "我是土耳其人。",
    p: "Wǒ shì Tǔ'ěrqí rén.",
    e: "I am Turkish."
   },
   {
    h: "我有一个妹妹。",
    p: "Wǒ yǒu yí gè mèimei.",
    e: "I have a younger sister."
   },
   {
    h: "教室里有很多学生。",
    p: "Jiàoshì li yǒu hěn duō xuésheng.",
    e: "There are lots of students in the classroom."
   },
   {
    h: "我的手机在桌子上。",
    p: "Wǒ de shǒujī zài zhuōzi shang.",
    e: "My phone is on the table."
   },
   {
    h: "老师在学校。",
    p: "Lǎoshī zài xuéxiào.",
    e: "The teacher is at school."
   },
   {
    h: "我没有电脑。",
    p: "Wǒ méiyǒu diànnǎo.",
    e: "I don't have a computer."
   }
  ],
  mistakes: [
   {
    wrong: "我不有哥哥。",
    right: "我没有哥哥。",
    why: "有 is always negated with 没, never with 不."
   },
   {
    wrong: "桌子上在一本书。",
    right: "桌子上有一本书。",
    why: "When the place comes first, use 有 (there is)."
   },
   {
    wrong: "我是很高兴。",
    right: "我很高兴。",
    why: "Adjectives do not need 是."
   }
  ],
  quiz: [
   {
    q: "书包里（　）一个杯子。",
    options: [
     "在",
     "有",
     "是"
    ],
    answer: 1,
    why: "The place 书包里 comes first, so it is 'there is' = 有."
   },
   {
    q: "我妈妈（　）医院。",
    options: [
     "在",
     "有",
     "是"
    ],
    answer: 0,
    why: "Person + 在 + place: my mum is at the hospital."
   },
   {
    q: "他（　）我的同学。",
    options: [
     "有",
     "在",
     "是"
    ],
    answer: 2,
    why: "Noun = noun: he is my classmate, so 是."
   },
   {
    q: "Choose the negative of 我有自行车。",
    options: [
     "我有没自行车。",
     "我没有自行车。",
     "我不有自行车。"
    ],
    answer: 1,
    why: "有 is negated with 没: 没有."
   },
   {
    q: "Which means 'My book is in the bag'?",
    options: [
     "我的书在书包里。",
     "我的书是书包里。",
     "书包在我的书里。"
    ],
    answer: 0,
    why: "Thing + 在 + place + 里."
   }
  ]
 },
 {
  id: "measure-words",
  l: "R",
  title: "Measure words 个 / 口 / 本 / 件 / 块",
  pattern: "Number / 这 / 那 / 几 + Measure word + Noun\n三本书 · 两个人 · 一件衣服 · 五块（钱）",
  explain: "In Chinese a number cannot stand directly before a noun; a measure word must come in between: 三本书, not 三书. 个 is the general one (people, cups, apples), 口 counts family members (几口人), 本 is for books, 件 for clothes, 块 is the spoken word for yuan (money). Before a measure word 'two' is 两, not 二: 两个人. 这 / 那 / 几 also need a measure word: 这本书, 几个人.",
  examples: [
   {
    h: "我家有四口人。",
    p: "Wǒ jiā yǒu sì kǒu rén.",
    e: "There are four people in my family."
   },
   {
    h: "我有两个哥哥。",
    p: "Wǒ yǒu liǎng gè gēge.",
    e: "I have two older brothers."
   },
   {
    h: "这本书很好看。",
    p: "Zhè běn shū hěn hǎokàn.",
    e: "This book is really good."
   },
   {
    h: "她买了三件衣服。",
    p: "Tā mǎile sān jiàn yīfu.",
    e: "She bought three pieces of clothing."
   },
   {
    h: "这个杯子二十块。",
    p: "Zhège bēizi èrshí kuài.",
    e: "This cup is twenty yuan."
   },
   {
    h: "你有几本中文书？",
    p: "Nǐ yǒu jǐ běn Zhōngwén shū?",
    e: "How many Chinese books do you have?"
   }
  ],
  mistakes: [
   {
    wrong: "我有三朋友。",
    right: "我有三个朋友。",
    why: "A number needs a measure word before the noun."
   },
   {
    wrong: "我有二个妹妹。",
    right: "我有两个妹妹。",
    why: "Before a measure word, 'two' is 两."
   },
   {
    wrong: "我买了一个书。",
    right: "我买了一本书。",
    why: "Books are counted with 本."
   }
  ],
  quiz: [
   {
    q: "我想买一（　）衣服。",
    options: [
     "本",
     "口",
     "件"
    ],
    answer: 2,
    why: "Clothes are counted with 件."
   },
   {
    q: "我有三（　）汉语书。",
    options: [
     "块",
     "本",
     "件"
    ],
    answer: 1,
    why: "Books are counted with 本."
   },
   {
    q: "这个苹果五（　）。",
    options: [
     "块",
     "口",
     "件"
    ],
    answer: 0,
    why: "块 is the spoken word for yuan."
   },
   {
    q: "Which is correct?",
    options: [
     "二个学生",
     "两学生",
     "两个学生"
    ],
    answer: 2,
    why: "Two + measure word = 两个; the measure word cannot be left out."
   },
   {
    q: "你家有几（　）人？",
    options: [
     "件",
     "口",
     "本"
    ],
    answer: 1,
    why: "Family members are counted with 口: 几口人."
   }
  ]
 },
 {
  id: "word-order",
  l: "R",
  title: "Word order: Subject + Time + Place + Verb",
  pattern: "Subject + Time + 在 + Place + Verb + Object\n(or) Time + Subject + 在 + Place + Verb + Object",
  explain: "Chinese puts WHEN and WHERE before the action, not at the end as in English. First the person, then the time, then 在 + place, and last the verb and its object: 我明天在学校学习。 The time word may also stand at the very beginning (明天我在学校学习), but never after the verb. The most common mistake is copying English order: 我学习中文在学校.",
  examples: [
   {
    h: "我明天在学校学习。",
    p: "Wǒ míngtiān zài xuéxiào xuéxí.",
    e: "I will study at school tomorrow."
   },
   {
    h: "我每天在宿舍写作业。",
    p: "Wǒ měi tiān zài sùshè xiě zuòyè.",
    e: "I do my homework in the dorm every day."
   },
   {
    h: "周末我在家看电视。",
    p: "Zhōumò wǒ zài jiā kàn diànshì.",
    e: "At the weekend I watch TV at home."
   },
   {
    h: "我爸爸在医院工作。",
    p: "Wǒ bàba zài yīyuàn gōngzuò.",
    e: "My dad works at a hospital."
   },
   {
    h: "我们晚上在饭店吃饭。",
    p: "Wǒmen wǎnshang zài fàndiàn chī fàn.",
    e: "We eat at a restaurant in the evening."
   },
   {
    h: "她下午在教室看书。",
    p: "Tā xiàwǔ zài jiàoshì kàn shū.",
    e: "She reads in the classroom in the afternoon."
   }
  ],
  mistakes: [
   {
    wrong: "我学习中文在学校。",
    right: "我在学校学习中文。",
    why: "在 + place goes before the verb."
   },
   {
    wrong: "我吃饭中午。",
    right: "我中午吃饭。",
    why: "Time words go before the verb, never at the end."
   }
  ],
  quiz: [
   {
    q: "Choose the correct sentence:",
    options: [
     "我明天在家看书。",
     "我在家明天看书。",
     "我看书明天在家。"
    ],
    answer: 0,
    why: "Order: subject + time + place + verb."
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "他工作在医院。",
     "在医院他工作是。",
     "他在医院工作。"
    ],
    answer: 2,
    why: "在 + place comes before the verb 工作."
   },
   {
    q: "Arrange: A 晚上　B 我　C 看电视　D 在宿舍",
    options: [
     "晚上看电视我在宿舍。",
     "我晚上在宿舍看电视。",
     "我在宿舍看电视晚上。"
    ],
    answer: 1,
    why: "Subject + time + place + verb."
   },
   {
    q: "Where should 今天 go?  我 A 去 B 商店 C。",
    options: [
     "A",
     "B",
     "C"
    ],
    answer: 0,
    why: "Time goes before the verb: 我今天去商店。"
   },
   {
    q: "Which sentence is WRONG?",
    options: [
     "明天我在学校上课。",
     "我明天在学校上课。",
     "我在学校上课明天。"
    ],
    answer: 2,
    why: "The time word 明天 cannot come at the end."
   }
  ]
 },
 {
  id: "hui-neng-xiang",
  l: "R",
  title: "会 vs 能 vs 想 (can / be able, may / want)",
  pattern: "会 + V = can (a skill you have learned)\n能 + V = can, be able to; may (circumstances, permission)\n想 + V = want to, would like to",
  explain: "Use 会 for skills that you learned: 我会说中文, 我会开车. Use 能 when you are able (or allowed) to do something in a particular situation: 我今天不能去, 我能坐这儿吗？ Use 想 for wishes and plans: 我想去中国. All three are negated with 不 placed before them: 不会, 不能, 不想. A common mistake is using 会 to ask for permission (我会坐这儿吗？ is wrong).",
  examples: [
   {
    h: "我会说一点儿中文。",
    p: "Wǒ huì shuō yìdiǎnr Zhōngwén.",
    e: "I can speak a little Chinese."
   },
   {
    h: "我妹妹不会游泳。",
    p: "Wǒ mèimei bú huì yóuyǒng.",
    e: "My younger sister can't swim."
   },
   {
    h: "今天下午我上课，不能去看电影。",
    p: "Jīntiān xiàwǔ wǒ shàngkè, bù néng qù kàn diànyǐng.",
    e: "I have class this afternoon, so I can't go to see a film."
   },
   {
    h: "我能用你的笔吗？",
    p: "Wǒ néng yòng nǐ de bǐ ma?",
    e: "May I use your pen?"
   },
   {
    h: "我想去北京旅游。",
    p: "Wǒ xiǎng qù Běijīng lǚyóu.",
    e: "I want to travel to Beijing."
   },
   {
    h: "你想喝什么？",
    p: "Nǐ xiǎng hē shénme?",
    e: "What would you like to drink?"
   }
  ],
  mistakes: [
   {
    wrong: "我会坐这儿吗？",
    right: "我能坐这儿吗？",
    why: "Asking for permission uses 能."
   },
   {
    wrong: "我会不说中文。",
    right: "我不会说中文。",
    why: "不 goes before the modal verb: 不会 + verb."
   }
  ],
  quiz: [
   {
    q: "I can drive (I learned how): 我（　）开车。",
    options: [
     "在",
     "会",
     "想"
    ],
    answer: 1,
    why: "A learned skill uses 会."
   },
   {
    q: "老师，我（　）用你的笔吗？",
    options: [
     "能",
     "会",
     "是"
    ],
    answer: 0,
    why: "Asking for permission: 我能…吗？"
   },
   {
    q: "I want to go to China: 我（　）去中国。",
    options: [
     "在",
     "是",
     "想"
    ],
    answer: 2,
    why: "A wish uses 想."
   },
   {
    q: "我今天下午上课，不（　）和你去看电影。 (= I'm not free to go)",
    options: [
     "在",
     "能",
     "是"
    ],
    answer: 1,
    why: "Not able because of circumstances: 不能."
   },
   {
    q: "Which sentence asks for permission?",
    options: [
     "我能坐这儿吗？",
     "我会说汉语吗？",
     "我想坐这儿。"
    ],
    answer: 0,
    why: "我能…吗？ = May I…?"
   }
  ]
 },
 {
  id: "ji-vs-duoshao",
  l: "R",
  title: "几 vs 多少 (how many / how much)",
  pattern: "几 + Measure word + Noun  (small number, usually under 10)\n多少 (+ Measure word) + Noun  (any number, often big)\n多少钱？ = How much does it cost?",
  explain: "Both mean 'how many'. Use 几 when you expect a small number (under ten), and always put a measure word after it: 几个, 几口, 几本. Use 多少 for bigger or unknown numbers; a measure word after 多少 is optional (多少学生). Prices are always asked with 多少钱. 几 is also used for dates, weekdays and clock time: 几月几号, 星期几, 几点.",
  examples: [
   {
    h: "你家有几口人？",
    p: "Nǐ jiā yǒu jǐ kǒu rén?",
    e: "How many people are there in your family?"
   },
   {
    h: "你有几个中国朋友？",
    p: "Nǐ yǒu jǐ gè Zhōngguó péngyou?",
    e: "How many Chinese friends do you have?"
   },
   {
    h: "你们学校有多少学生？",
    p: "Nǐmen xuéxiào yǒu duōshao xuésheng?",
    e: "How many students does your school have?"
   },
   {
    h: "这件衣服多少钱？",
    p: "Zhè jiàn yīfu duōshao qián?",
    e: "How much is this piece of clothing?"
   },
   {
    h: "今天几月几号？",
    p: "Jīntiān jǐ yuè jǐ hào?",
    e: "What's the date today?"
   },
   {
    h: "你女儿几岁了？",
    p: "Nǐ nǚ'ér jǐ suì le?",
    e: "How old is your daughter?"
   }
  ],
  mistakes: [
   {
    wrong: "你有几书？",
    right: "你有几本书？",
    why: "几 must be followed by a measure word."
   },
   {
    wrong: "这个杯子几钱？",
    right: "这个杯子多少钱？",
    why: "Prices are asked with 多少钱."
   }
  ],
  quiz: [
   {
    q: "这个苹果（　）钱？",
    options: [
     "几",
     "什么",
     "多少"
    ],
    answer: 2,
    why: "Prices: 多少钱."
   },
   {
    q: "你有（　）个妹妹？ —两个。",
    options: [
     "什么",
     "几",
     "哪"
    ],
    answer: 1,
    why: "Small number + measure word 个: 几个."
   },
   {
    q: "Which is WRONG?",
    options: [
     "你有几书？",
     "你有几本书？",
     "你有多少书？"
    ],
    answer: 0,
    why: "几 needs a measure word: 几本书."
   },
   {
    q: "今天星期（　）？",
    options: [
     "多少",
     "什么",
     "几"
    ],
    answer: 2,
    why: "Weekdays are asked with 星期几."
   },
   {
    q: "你们大学有（　）学生？",
    options: [
     "哪",
     "多少",
     "几"
    ],
    answer: 1,
    why: "A university has many students, and there is no measure word, so 多少."
   }
  ]
 },
 {
  id: "numbers-dates",
  l: "R",
  title: "Numbers, dates and days of the week",
  pattern: "Year + 月 + 日/号 + 星期 (big → small)\n2024年 = èr líng èr sì nián (digit by digit)\n星期一 … 星期六, 星期天 / 星期日",
  explain: "Chinese dates go from big to small: year, month, day, then the weekday: 2025年10月15日 星期三. Years are read digit by digit (2024年 = 二〇二四年), but months and days are read as normal numbers (十月十五号). In speech people say 号, in writing 日. Weekdays are 星期 + 一 to 六, and Sunday is 星期天 or 星期日. Ask with 几: 几月几号？ 星期几？",
  examples: [
   {
    h: "今天是十一月十二号，星期四。",
    p: "Jīntiān shì shíyī yuè shí'èr hào, xīngqīsì.",
    e: "Today is 12 November, Thursday."
   },
   {
    h: "我的生日是五月二十号。",
    p: "Wǒ de shēngrì shì wǔ yuè èrshí hào.",
    e: "My birthday is on 20 May."
   },
   {
    h: "明天星期几？",
    p: "Míngtiān xīngqī jǐ?",
    e: "What day of the week is it tomorrow?"
   },
   {
    h: "我星期六不上课。",
    p: "Wǒ xīngqīliù bú shàngkè.",
    e: "I don't have classes on Saturday."
   },
   {
    h: "我是2024年来北京的。",
    p: "Wǒ shì èr líng èr sì nián lái Běijīng de.",
    e: "I came to Beijing in 2024."
   },
   {
    h: "我妈妈今年四十五岁。",
    p: "Wǒ māma jīnnián sìshíwǔ suì.",
    e: "My mum is 45 this year."
   }
  ],
  mistakes: [
   {
    wrong: "十五号十月",
    right: "十月十五号",
    why: "Dates go from big to small: month before day."
   },
   {
    wrong: "星期七",
    right: "星期天 / 星期日",
    why: "Sunday is 星期天 or 星期日; there is no 星期七."
   }
  ],
  quiz: [
   {
    q: "How do you say 'Sunday'?",
    options: [
     "星期天",
     "星期七",
     "星期零"
    ],
    answer: 0,
    why: "Sunday = 星期天 (or 星期日)."
   },
   {
    q: "How do you say '8 March'?",
    options: [
     "八号三月",
     "三号八月",
     "三月八号"
    ],
    answer: 2,
    why: "Month first, then day."
   },
   {
    q: "How is 2024年 read?",
    options: [
     "èr sì nián",
     "èr líng èr sì nián",
     "èrshí èrshísì nián"
    ],
    answer: 1,
    why: "Years are read digit by digit."
   },
   {
    q: "今天是星期五，明天是星期（　）。",
    options: [
     "六",
     "四",
     "天"
    ],
    answer: 0,
    why: "The day after Friday (五) is Saturday (六)."
   },
   {
    q: "Which question asks for the date?",
    options: [
     "现在几点？",
     "今天天气怎么样？",
     "今天几月几号？"
    ],
    answer: 2,
    why: "几月几号 asks month and day."
   }
  ]
 },
 {
  id: "location-words",
  l: "10",
  title: "Location words 上面 / 下面 / 里面 / 前面 / 后面 / 中间",
  pattern: "Thing + 在 + Place + 上面/里面… (where a thing is)\nPlace + 上面/里面… + 有 + Thing (what there is)\nA 和 B 中间 (between A and B)",
  explain: "Location words come AFTER the noun, not before it as English prepositions do: 桌子上面 = on the table (literally 'table top'). With 在 the thing comes first: 小猫在桌子下面. With 有 the place comes first: 桌子下面有一只猫. 面 can often be dropped: 桌子上, 书包里. 中间 needs two things: 我和他中间. The most common mistake is English order: 在上面桌子.",
  examples: [
   {
    h: "我的手机在桌子上面。",
    p: "Wǒ de shǒujī zài zhuōzi shàngmiàn.",
    e: "My phone is on the table."
   },
   {
    h: "书包里面有两本书。",
    p: "Shūbāo lǐmiàn yǒu liǎng běn shū.",
    e: "There are two books in the schoolbag."
   },
   {
    h: "小猫在椅子下面。",
    p: "Xiǎo māo zài yǐzi xiàmiàn.",
    e: "The kitten is under the chair."
   },
   {
    h: "学校前面有一个饭店。",
    p: "Xuéxiào qiánmiàn yǒu yí gè fàndiàn.",
    e: "There is a restaurant in front of the school."
   },
   {
    h: "电脑后面是什么？",
    p: "Diànnǎo hòumiàn shì shénme?",
    e: "What is behind the computer?"
   },
   {
    h: "我坐在爸爸和妈妈中间。",
    p: "Wǒ zuò zài bàba hé māma zhōngjiān.",
    e: "I'm sitting between my dad and my mum."
   },
   {
    h: "你在哪儿？—我在教室里。",
    p: "Nǐ zài nǎr? — Wǒ zài jiàoshì li.",
    e: "Where are you? — I'm in the classroom."
   }
  ],
  mistakes: [
   {
    wrong: "我的书在上面桌子。",
    right: "我的书在桌子上面。",
    why: "The location word comes after the noun."
   },
   {
    wrong: "桌子上面在一个杯子。",
    right: "桌子上面有一个杯子。",
    why: "Place first → 有; thing first → 在."
   }
  ],
  quiz: [
   {
    q: "The cup is on the table:",
    options: [
     "桌子在杯子上面。",
     "杯子在桌子上面。",
     "杯子在上面桌子。"
    ],
    answer: 1,
    why: "Thing + 在 + noun + 上面."
   },
   {
    q: "There is a phone in the bag: 书包（　）有一个手机。",
    options: [
     "里面",
     "上面",
     "后面"
    ],
    answer: 0,
    why: "In = 里面."
   },
   {
    q: "学校前面（　）一个商店。",
    options: [
     "在",
     "去",
     "有"
    ],
    answer: 2,
    why: "The place comes first, so 'there is' = 有."
   },
   {
    q: "The cat is under the table: 猫在桌子（　）。",
    options: [
     "前面",
     "下面",
     "上面"
    ],
    answer: 1,
    why: "Under = 下面."
   },
   {
    q: "我坐在爸爸和妈妈（　）。 (between)",
    options: [
     "中间",
     "里面",
     "后面"
    ],
    answer: 0,
    why: "A 和 B 中间 = between A and B."
   },
   {
    q: "Which is correct?",
    options: [
     "椅子下面在一本书。",
     "一本书有椅子下面。",
     "椅子下面有一本书。"
    ],
    answer: 2,
    why: "Place + 有 + thing."
   }
  ]
 },
 {
  id: "neng-permission",
  l: "10",
  title: "能 for permission and requests (我能…吗？ / 你能…吗？)",
  pattern: "我能 + V + 吗？ = May I …?\n你能 + V + 吗？ = Could you …? (asking for help)\nYes: 请坐！/ 好！  No: 不好意思，不能。",
  explain: "能 + verb asks whether something is possible or allowed. 我能…吗？ asks for permission (May I…?), and 你能…吗？ asks someone for help (Could you…?). A friendly 'yes' is often just an action phrase like 请坐！ or 好！; a polite 'no' is 不好意思，不能。 or 对不起，不能。 To say 'can't', put 不 before 能: 我不能去. 吗 always stays at the very end.",
  examples: [
   {
    h: "我能坐这儿吗？—请坐！",
    p: "Wǒ néng zuò zhèr ma? — Qǐng zuò!",
    e: "May I sit here? — Please, sit down!"
   },
   {
    h: "你能帮我开门吗？",
    p: "Nǐ néng bāng wǒ kāi mén ma?",
    e: "Could you open the door for me?"
   },
   {
    h: "我能用你的笔吗？—不好意思，不能。",
    p: "Wǒ néng yòng nǐ de bǐ ma? — Bù hǎoyìsi, bù néng.",
    e: "May I use your pen? — Sorry, you can't."
   },
   {
    h: "我能看看你的书吗？",
    p: "Wǒ néng kànkan nǐ de shū ma?",
    e: "May I have a look at your book?"
   },
   {
    h: "你明天能来学校吗？",
    p: "Nǐ míngtiān néng lái xuéxiào ma?",
    e: "Can you come to school tomorrow?"
   },
   {
    h: "明天我不能来上课。",
    p: "Míngtiān wǒ bù néng lái shàngkè.",
    e: "I can't come to class tomorrow."
   }
  ],
  negative: {
   h: "我不能用你的电脑。",
   p: "Wǒ bù néng yòng nǐ de diànnǎo.",
   e: "I can't use your computer."
  },
  mistakes: [
   {
    wrong: "我能吗坐这儿？",
    right: "我能坐这儿吗？",
    why: "吗 goes at the very end of the sentence."
   },
   {
    wrong: "我会用你的手机吗？",
    right: "我能用你的手机吗？",
    why: "Permission is asked with 能, not 会."
   },
   {
    wrong: "我能不去。",
    right: "我不能去。",
    why: "'Can't' = 不能: 不 goes before 能."
   }
  ],
  quiz: [
   {
    q: "我（　）坐这儿吗？",
    options: [
     "在",
     "有",
     "能"
    ],
    answer: 2,
    why: "Asking permission: 我能…吗？"
   },
   {
    q: "A：我能用你的笔吗？　B：（　）",
    options: [
     "没关系。",
     "不好意思，不能。",
     "不客气。"
    ],
    answer: 1,
    why: "A polite refusal of a request."
   },
   {
    q: "Choose the correct request:",
    options: [
     "你能帮我开门吗？",
     "你能开门帮我吗？",
     "你帮我能开门吗？"
    ],
    answer: 0,
    why: "能 + 帮我 + action + 吗."
   },
   {
    q: "Say 'I can't go tomorrow':",
    options: [
     "我明天能不去。",
     "我不明天能去。",
     "我明天不能去。"
    ],
    answer: 2,
    why: "Time before the verb, 不 before 能."
   },
   {
    q: "A：我能坐这儿吗？　B：（　）",
    options: [
     "再见！",
     "请坐！",
     "请喝茶！"
    ],
    answer: 1,
    why: "请坐 = please sit down — saying yes."
   }
  ]
 },
 {
  id: "he-nouns",
  l: "10",
  title: "和 only joins nouns",
  pattern: "Noun + 和 + Noun (我和你 · 书和笔)\nNOT between verbs, adjectives or sentences",
  explain: "和 means 'and', but only between nouns or pronouns: 我和妈妈, 书和笔. Unlike English 'and', it cannot join two verbs, two adjectives or two sentences. Use a comma, often with 也, instead: 我喝茶，也喝咖啡. 和 can also mean 'with': 我和朋友去商店 (I go to the shop with a friend).",
  examples: [
   {
    h: "我和我朋友都是学生。",
    p: "Wǒ hé wǒ péngyou dōu shì xuésheng.",
    e: "My friend and I are both students."
   },
   {
    h: "桌子上有书和笔。",
    p: "Zhuōzi shang yǒu shū hé bǐ.",
    e: "There are books and pens on the table."
   },
   {
    h: "我爸爸和妈妈住在安卡拉。",
    p: "Wǒ bàba hé māma zhù zài Ānkǎlā.",
    e: "My dad and mum live in Ankara."
   },
   {
    h: "我和同学一起去吃饭。",
    p: "Wǒ hé tóngxué yìqǐ qù chī fàn.",
    e: "I go to eat with my classmates."
   },
   {
    h: "我喝茶，也喝咖啡。",
    p: "Wǒ hē chá, yě hē kāfēi.",
    e: "I drink tea, and I drink coffee too."
   }
  ],
  mistakes: [
   {
    wrong: "她很漂亮和很高。",
    right: "她很漂亮，也很高。",
    why: "和 cannot join two adjective phrases."
   },
   {
    wrong: "我喜欢看书和他喜欢看电影。",
    right: "我喜欢看书，他喜欢看电影。",
    why: "和 cannot join two sentences."
   }
  ],
  quiz: [
   {
    q: "Which uses 和 correctly?",
    options: [
     "我和妹妹去商店。",
     "我去商店和买东西。",
     "她很高和很漂亮。"
    ],
    answer: 0,
    why: "和 joins the two people 我 and 妹妹."
   },
   {
    q: "I like tea and coffee:",
    options: [
     "我喜欢茶，和咖啡喜欢。",
     "我和喜欢茶咖啡。",
     "我喜欢茶和咖啡。"
    ],
    answer: 2,
    why: "和 between the two nouns 茶 and 咖啡."
   },
   {
    q: "Which sentence is WRONG?",
    options: [
     "我有一个哥哥和一个姐姐。",
     "她很高和很漂亮。",
     "爸爸和妈妈在家。"
    ],
    answer: 1,
    why: "和 cannot join adjectives: 她很高，也很漂亮。"
   },
   {
    q: "我（　）朋友一起去看电影。",
    options: [
     "和",
     "也",
     "都"
    ],
    answer: 0,
    why: "和 + person + 一起 = together with someone."
   }
  ]
 },
 {
  id: "telling-time",
  l: "11",
  title: "Telling time: 点 / 分 / 半",
  pattern: "Number + 点 (+ Number + 分)\n两点 (2:00) · 八点零五分 (8:05) · 十点半 (10:30)\n现在几点？",
  explain: "Hours are counted with 点 and minutes with 分: 九点十分 = 9:10. Half past is 半, after 点: 十点半. 2 o'clock is always 两点, never 二点 (but 12:00 is 十二点). For minutes 1–9 add 零: 八点零五分. Ask 'What time is it?' with 现在几点？ and remember that the time goes BEFORE the verb: 我七点起床.",
  examples: [
   {
    h: "现在几点？—现在两点。",
    p: "Xiànzài jǐ diǎn? — Xiànzài liǎng diǎn.",
    e: "What time is it now? — It's two o'clock."
   },
   {
    h: "我七点半起床。",
    p: "Wǒ qī diǎn bàn qǐchuáng.",
    e: "I get up at half past seven."
   },
   {
    h: "我们八点零五分上课。",
    p: "Wǒmen bā diǎn líng wǔ fēn shàngkè.",
    e: "Our class starts at 8:05."
   },
   {
    h: "电影十二点四十分开始。",
    p: "Diànyǐng shí'èr diǎn sìshí fēn kāishǐ.",
    e: "The film starts at 12:40."
   },
   {
    h: "他晚上十一点睡觉。",
    p: "Tā wǎnshang shíyī diǎn shuìjiào.",
    e: "He goes to bed at 11 p.m."
   },
   {
    h: "现在十点十五分。",
    p: "Xiànzài shí diǎn shíwǔ fēn.",
    e: "It's 10:15 now."
   }
  ],
  mistakes: [
   {
    wrong: "二点",
    right: "两点",
    why: "2 o'clock is 两点."
   },
   {
    wrong: "半十点",
    right: "十点半",
    why: "半 comes after 点."
   },
   {
    wrong: "我起床七点。",
    right: "我七点起床。",
    why: "The time goes before the verb."
   }
  ],
  quiz: [
   {
    q: "2:00 =",
    options: [
     "二时",
     "两点",
     "二点"
    ],
    answer: 1,
    why: "Two o'clock is 两点."
   },
   {
    q: "10:30 =",
    options: [
     "十点半",
     "半十点",
     "十半点"
    ],
    answer: 0,
    why: "半 comes after 点."
   },
   {
    q: "8:05 =",
    options: [
     "八点五十分",
     "五点零八分",
     "八点零五分"
    ],
    answer: 2,
    why: "Minutes under ten take 零: 零五分."
   },
   {
    q: "现在（　）点？",
    options: [
     "什么",
     "几",
     "多少"
    ],
    answer: 1,
    why: "Clock time is asked with 几点."
   },
   {
    q: "6:45 =",
    options: [
     "六点四十五分",
     "四十五点六分",
     "六点半"
    ],
    answer: 0,
    why: "Hour + 点 + minutes + 分."
   }
  ]
 },
 {
  id: "time-words",
  l: "11",
  title: "Time-of-day words and where time goes",
  pattern: "早上 · 上午 · 中午 · 下午 · 晚上\nSubject + (Day) + Time of day + Clock time + Verb\nor: Time + Subject + Verb",
  explain: "Time phrases go from big to small: 明天上午九点 (tomorrow, morning, 9 o'clock). The whole time phrase goes BEFORE the verb — either after the subject (我早上七点起床) or at the start of the sentence (早上七点我起床) — never at the end. 早上 is early morning (getting up), 上午 the rest of the morning until noon, 中午 noon, 下午 afternoon and 晚上 evening/night.",
  examples: [
   {
    h: "我早上七点起床。",
    p: "Wǒ zǎoshang qī diǎn qǐchuáng.",
    e: "I get up at 7 a.m."
   },
   {
    h: "早上七点我起床。",
    p: "Zǎoshang qī diǎn wǒ qǐchuáng.",
    e: "At seven in the morning I get up."
   },
   {
    h: "我们上午九点上课。",
    p: "Wǒmen shàngwǔ jiǔ diǎn shàngkè.",
    e: "We have class at 9 a.m."
   },
   {
    h: "我中午十二点在餐厅吃饭。",
    p: "Wǒ zhōngwǔ shí'èr diǎn zài cāntīng chī fàn.",
    e: "I have lunch in the cafeteria at 12 noon."
   },
   {
    h: "她下午四点锻炼身体。",
    p: "Tā xiàwǔ sì diǎn duànliàn shēntǐ.",
    e: "She does exercise at 4 p.m."
   },
   {
    h: "我晚上在宿舍写作业。",
    p: "Wǒ wǎnshang zài sùshè xiě zuòyè.",
    e: "I do my homework in the dorm in the evening."
   }
  ],
  mistakes: [
   {
    wrong: "我起床早上七点。",
    right: "我早上七点起床。",
    why: "Time goes before the verb."
   },
   {
    wrong: "我七点早上起床。",
    right: "我早上七点起床。",
    why: "Big to small: 早上 before 七点."
   }
  ],
  quiz: [
   {
    q: "Choose the correct sentence:",
    options: [
     "我睡觉晚上十一点。",
     "我十一点晚上睡觉。",
     "我晚上十一点睡觉。"
    ],
    answer: 2,
    why: "Subject + time of day + clock time + verb."
   },
   {
    q: "Which word means 'noon'?",
    options: [
     "晚上",
     "中午",
     "早上"
    ],
    answer: 1,
    why: "中午 = noon."
   },
   {
    q: "Arrange: A 下午　B 回家　C 五点　D 我",
    options: [
     "我下午五点回家。",
     "我五点下午回家。",
     "我回家下午五点。"
    ],
    answer: 0,
    why: "Big to small, all before the verb."
   },
   {
    q: "Which sentence means the same as 我早上八点吃饭？",
    options: [
     "我吃饭早上八点。",
     "我早上吃饭八点。",
     "早上八点我吃饭。"
    ],
    answer: 2,
    why: "The time may move to the front, but never after the verb."
   },
   {
    q: "Tomorrow at 9 a.m.:",
    options: [
     "上午九点明天",
     "明天上午九点",
     "九点上午明天"
    ],
    answer: 1,
    why: "Big to small: day, part of day, clock time."
   }
  ]
 },
 {
  id: "time-qian-hou",
  l: "11",
  title: "Time + 前 / 后 (before / after a time)",
  pattern: "Time + 前 = before …\nTime + 后 = after …\n我早上七点前起床。· 我晚上十一点后睡觉。",
  explain: "To say 'before 7' or 'after 11', put 前 or 后 AFTER the time, not before it as in English: 七点前, 十一点后. The whole phrase is still a time word, so it goes before the verb: 我晚上十一点后睡觉. Lesson 14 uses the same idea with lengths of time: 四十分钟后 = in 40 minutes.",
  examples: [
   {
    h: "我早上七点前起床。",
    p: "Wǒ zǎoshang qī diǎn qián qǐchuáng.",
    e: "I get up before 7 a.m."
   },
   {
    h: "我晚上十一点后睡觉。",
    p: "Wǒ wǎnshang shíyī diǎn hòu shuìjiào.",
    e: "I go to bed after 11 p.m."
   },
   {
    h: "你下午三点前能回来吗？",
    p: "Nǐ xiàwǔ sān diǎn qián néng huílai ma?",
    e: "Can you come back before 3 p.m.?"
   },
   {
    h: "五点后我去锻炼身体。",
    p: "Wǔ diǎn hòu wǒ qù duànliàn shēntǐ.",
    e: "After five o'clock I go and exercise."
   },
   {
    h: "我们中午十二点前上课。",
    p: "Wǒmen zhōngwǔ shí'èr diǎn qián shàngkè.",
    e: "We have classes before 12 noon."
   }
  ],
  mistakes: [
   {
    wrong: "我前七点起床。",
    right: "我七点前起床。",
    why: "前 / 后 come after the time."
   },
   {
    wrong: "我睡觉十一点后。",
    right: "我十一点后睡觉。",
    why: "The time phrase goes before the verb."
   }
  ],
  quiz: [
   {
    q: "before 8 o'clock",
    options: [
     "八点前",
     "前八点",
     "八前点"
    ],
    answer: 0,
    why: "Time + 前."
   },
   {
    q: "I go home after 5 p.m.:",
    options: [
     "我后下午五点回家。",
     "我回家下午五点后。",
     "我下午五点后回家。"
    ],
    answer: 2,
    why: "Time + 后, placed before the verb."
   },
   {
    q: "I do homework after 7 p.m.: 我晚上七点（　）写作业。",
    options: [
     "半",
     "后",
     "前"
    ],
    answer: 1,
    why: "after = 后."
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "我上午十点前去商店。",
     "我上午前十点去商店。",
     "我去商店前上午十点。"
    ],
    answer: 0,
    why: "Time + 前, before the verb."
   }
  ]
 },
 {
  id: "shenme-shihou",
  l: "11",
  title: "什么时候 (when?)",
  pattern: "Subject + 什么时候 + Verb …？\nAnswer: put the time in the same place.\n几点 = at what (clock) time",
  explain: "什么时候 means 'when'. Like every question word, it stands where the answer goes — before the verb: 你什么时候去学校？— 我八点去学校. Do not move it to the end of the sentence as in English, and do not add 吗. If you want an exact clock time, you can also ask with 几点.",
  examples: [
   {
    h: "你什么时候去北京？",
    p: "Nǐ shénme shíhou qù Běijīng?",
    e: "When are you going to Beijing?"
   },
   {
    h: "我星期六去北京。",
    p: "Wǒ xīngqīliù qù Běijīng.",
    e: "I'm going to Beijing on Saturday."
   },
   {
    h: "你们什么时候上课？—我们上午十点上课。",
    p: "Nǐmen shénme shíhou shàngkè? — Wǒmen shàngwǔ shí diǎn shàngkè.",
    e: "When do you have class? — We have class at 10 a.m."
   },
   {
    h: "你什么时候回宿舍？",
    p: "Nǐ shénme shíhou huí sùshè?",
    e: "When are you going back to the dorm?"
   },
   {
    h: "他什么时候能回来？",
    p: "Tā shénme shíhou néng huílai?",
    e: "When can he come back?"
   },
   {
    h: "你每天几点起床？",
    p: "Nǐ měi tiān jǐ diǎn qǐchuáng?",
    e: "What time do you get up every day?"
   }
  ],
  mistakes: [
   {
    wrong: "你去学校什么时候？",
    right: "你什么时候去学校？",
    why: "什么时候 goes before the verb."
   },
   {
    wrong: "你什么时候吃饭吗？",
    right: "你什么时候吃饭？",
    why: "No 吗 with a question word."
   }
  ],
  quiz: [
   {
    q: "Choose the correct question:",
    options: [
     "什么时候你回家吗？",
     "你什么时候回家？",
     "你回家什么时候？"
    ],
    answer: 1,
    why: "Question word before the verb, no 吗."
   },
   {
    q: "A：你（　）去商店？　B：我下午去。",
    options: [
     "什么时候",
     "什么",
     "哪儿"
    ],
    answer: 0,
    why: "The answer is a time, so ask 什么时候."
   },
   {
    q: "A：你什么时候去北京？　B：（　）",
    options: [
     "我坐飞机去。",
     "我和朋友去。",
     "我星期五去。"
    ],
    answer: 2,
    why: "什么时候 asks for a time."
   },
   {
    q: "Which question asks for a clock time?",
    options: [
     "你睡觉吗？",
     "你几点睡觉？",
     "你在哪儿睡觉？"
    ],
    answer: 1,
    why: "几点 = at what time."
   },
   {
    q: "Arrange: A 什么时候　B 你　C 锻炼身体",
    options: [
     "你什么时候锻炼身体？",
     "你锻炼身体什么时候？",
     "什么时候锻炼你身体？"
    ],
    answer: 0,
    why: "Subject + 什么时候 + verb."
   }
  ]
 },
 {
  id: "zenmeyang",
  l: "12",
  title: "怎么样 (How is …? / How about …?)",
  pattern: "Topic + 怎么样？ = How is …? / What is … like?\nSuggestion + ，怎么样？ = How about it?",
  explain: "怎么样 asks for an opinion or a description: 明天天气怎么样？ 你身体怎么样？ It goes at the END, after the thing you are asking about, and it never takes 吗. Answer with an adjective, usually with a degree word: 很好, 太热了, 不太好吃. After a suggestion, ，怎么样？ means 'how about it?': 我们去看电影，怎么样？",
  examples: [
   {
    h: "明天天气怎么样？—明天很冷。",
    p: "Míngtiān tiānqì zěnmeyàng? — Míngtiān hěn lěng.",
    e: "What will the weather be like tomorrow? — It will be cold."
   },
   {
    h: "你身体怎么样？",
    p: "Nǐ shēntǐ zěnmeyàng?",
    e: "How's your health?"
   },
   {
    h: "这件衣服怎么样？—很漂亮！",
    p: "Zhè jiàn yīfu zěnmeyàng? — Hěn piàoliang!",
    e: "What do you think of this piece of clothing? — Very pretty!"
   },
   {
    h: "中国菜怎么样？—太好吃了！",
    p: "Zhōngguó cài zěnmeyàng? — Tài hǎochī le!",
    e: "How's Chinese food? — It's delicious!"
   },
   {
    h: "安卡拉的天气怎么样？",
    p: "Ānkǎlā de tiānqì zěnmeyàng?",
    e: "What's the weather like in Ankara?"
   },
   {
    h: "我们一起去喝咖啡，怎么样？",
    p: "Wǒmen yìqǐ qù hē kāfēi, zěnmeyàng?",
    e: "Let's go for a coffee together — how about it?"
   }
  ],
  mistakes: [
   {
    wrong: "天气怎么样吗？",
    right: "天气怎么样？",
    why: "怎么样 is a question word; no 吗."
   },
   {
    wrong: "怎么样天气？",
    right: "天气怎么样？",
    why: "怎么样 comes after the topic."
   }
  ],
  quiz: [
   {
    q: "你妈妈身体（　）？",
    options: [
     "什么",
     "几",
     "怎么样"
    ],
    answer: 2,
    why: "Asking about someone's health: 身体怎么样？"
   },
   {
    q: "A：北京的天气怎么样？　B：（　）",
    options: [
     "三点。",
     "很热。",
     "我坐飞机去。"
    ],
    answer: 1,
    why: "Answer 怎么样 with an adjective."
   },
   {
    q: "Choose the correct question:",
    options: [
     "今天天气怎么样？",
     "今天天气怎么样吗？",
     "怎么样今天天气？"
    ],
    answer: 0,
    why: "Topic + 怎么样, no 吗."
   },
   {
    q: "我们明天去商店，（　）？",
    options: [
     "什么",
     "谁",
     "怎么样"
    ],
    answer: 2,
    why: "Suggestion + 怎么样 = how about it?"
   },
   {
    q: "A：这个饭店的菜怎么样？　B：（　）",
    options: [
     "二十块。",
     "不太好吃。",
     "在学校后面。"
    ],
    answer: 1,
    why: "An opinion about the food."
   }
  ]
 },
 {
  id: "tai-le",
  l: "12",
  title: "太 + Adjective + 了 (too … / so …!)",
  pattern: "太 + Adj + 了！\n不太 + Adj (not very …) — no 了",
  explain: "太…了 expresses a strong feeling: 'too …' (a complaint) or 'so …!' (praise): 太热了！ 太好了！ Don't forget the 了 at the end, and don't add 很 (not 太很好了). The negative form 不太 + adjective means 'not very' and takes no 了: 今天不太冷.",
  examples: [
   {
    h: "今天太热了！",
    p: "Jīntiān tài rè le!",
    e: "It's so hot today!"
   },
   {
    h: "这件衣服太大了。",
    p: "Zhè jiàn yīfu tài dà le.",
    e: "This piece of clothing is too big."
   },
   {
    h: "太好了！我们明天去旅游！",
    p: "Tài hǎo le! Wǒmen míngtiān qù lǚyóu!",
    e: "Great! We're going travelling tomorrow!"
   },
   {
    h: "中国菜太好吃了！",
    p: "Zhōngguó cài tài hǎochī le!",
    e: "Chinese food is so delicious!"
   },
   {
    h: "汉字太难了。",
    p: "Hànzì tài nán le.",
    e: "Chinese characters are too difficult."
   },
   {
    h: "今天不太冷。",
    p: "Jīntiān bú tài lěng.",
    e: "It's not very cold today."
   }
  ],
  mistakes: [
   {
    wrong: "太热！",
    right: "太热了！",
    why: "太 + adjective needs 了 at the end."
   },
   {
    wrong: "今天不太冷了。",
    right: "今天不太冷。",
    why: "不太 (not very) takes no 了."
   },
   {
    wrong: "太很好了！",
    right: "太好了！",
    why: "Don't put 很 after 太."
   }
  ],
  quiz: [
   {
    q: "今天太冷（　）！",
    options: [
     "了",
     "吗",
     "的"
    ],
    answer: 0,
    why: "太 + adj + 了."
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "太好吗！",
     "很太好了！",
     "太好了！"
    ],
    answer: 2,
    why: "太 + adj + 了, no 很."
   },
   {
    q: "not very hot",
    options: [
     "不热太",
     "不太热",
     "太不热了"
    ],
    answer: 1,
    why: "不太 + adjective."
   },
   {
    q: "汉字太（　）了，我不会写！",
    options: [
     "难",
     "好吃",
     "少"
    ],
    answer: 0,
    why: "Characters you can't write are 'too difficult' = 难."
   },
   {
    q: "Which sentence is WRONG?",
    options: [
     "汉语太难了。",
     "今天不太热。",
     "这个苹果太好吃。"
    ],
    answer: 2,
    why: "太好吃 is missing 了: 太好吃了。"
   }
  ]
 },
 {
  id: "degree-words",
  l: "12",
  title: "Degree words 非常 / 很 / 不太 / 不 / 很不",
  pattern: "非常 > 很 > 不太 > 不 > 很不  + Adjective\nSubject + degree word + Adjective (no 是!)",
  explain: "Chinese adjectives work like verbs, so they don't need 是: 今天很热. A degree word goes BEFORE the adjective to show how strong it is: 非常 (extremely), 很 (very — often just a neutral 'is'), 不太 (not very), 不 (not), 很不 (really not). In a simple statement 很 is normally added even when you don't mean 'very'. The most common mistakes are 我是很高兴 and putting the degree word after the adjective.",
  examples: [
   {
    h: "今天非常热。",
    p: "Jīntiān fēicháng rè.",
    e: "It's extremely hot today."
   },
   {
    h: "我哥哥很高。",
    p: "Wǒ gēge hěn gāo.",
    e: "My older brother is tall."
   },
   {
    h: "这个苹果不太好吃。",
    p: "Zhège píngguǒ bú tài hǎochī.",
    e: "This apple isn't very tasty."
   },
   {
    h: "今天不冷。",
    p: "Jīntiān bù lěng.",
    e: "It isn't cold today."
   },
   {
    h: "他很不高兴。",
    p: "Tā hěn bù gāoxìng.",
    e: "He is really unhappy."
   },
   {
    h: "我觉得汉语不太难。",
    p: "Wǒ juéde Hànyǔ bú tài nán.",
    e: "I think Chinese isn't very difficult."
   }
  ],
  mistakes: [
   {
    wrong: "我是很高兴。",
    right: "我很高兴。",
    why: "Adjectives don't take 是."
   },
   {
    wrong: "我高兴很。",
    right: "我很高兴。",
    why: "The degree word goes before the adjective."
   }
  ],
  quiz: [
   {
    q: "Which is the strongest?",
    options: [
     "不太热",
     "非常热",
     "很热"
    ],
    answer: 1,
    why: "非常 is stronger than 很."
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "我很高兴。",
     "我是很高兴。",
     "我高兴很。"
    ],
    answer: 0,
    why: "Degree word + adjective, no 是."
   },
   {
    q: "Order from MOST to LEAST cold: A 不冷　B 非常冷　C 不太冷",
    options: [
     "B, C, A",
     "A, C, B",
     "C, B, A"
    ],
    answer: 0,
    why: "非常冷 > 不太冷 > 不冷."
   },
   {
    q: "He is really unhappy:",
    options: [
     "他高兴很不。",
     "他很不高兴。",
     "他不很高兴。"
    ],
    answer: 1,
    why: "很不 + adj = really not …."
   },
   {
    q: "这个菜（　）好吃，我不爱吃。",
    options: [
     "不太",
     "非常",
     "很"
    ],
    answer: 0,
    why: "You don't like eating it, so it is 'not very' tasty."
   }
  ]
 },
 {
  id: "bu-a-bu-b",
  l: "12",
  title: "不 A 不 B (neither A nor B — just right)",
  pattern: "不 + Adj 1 + 不 + Adj 2 (two opposite adjectives)\n不冷不热 · 不高不矮 · 不大不小 · 不多不少",
  explain: "Put 不 before two OPPOSITE adjectives to say that something is in the middle: 不冷不热 = neither cold nor hot, i.e. just right. It usually sounds positive. The two adjectives must be opposites (冷/热, 高/矮, 大/小, 多/少) and no 很 is added. Watch the tone of 不: bù before 1st/2nd/3rd tones, bú before a 4th tone (bù lěng bú rè).",
  examples: [
   {
    h: "今天不冷不热。",
    p: "Jīntiān bù lěng bú rè.",
    e: "Today it's neither cold nor hot."
   },
   {
    h: "我哥哥不高不矮。",
    p: "Wǒ gēge bù gāo bù ǎi.",
    e: "My older brother is neither tall nor short."
   },
   {
    h: "这件衣服不大不小。",
    p: "Zhè jiàn yīfu bú dà bù xiǎo.",
    e: "This piece of clothing is neither too big nor too small."
   },
   {
    h: "五月的安卡拉不冷不热。",
    p: "Wǔ yuè de Ānkǎlā bù lěng bú rè.",
    e: "In May, Ankara is neither cold nor hot."
   },
   {
    h: "教室里的学生不多不少。",
    p: "Jiàoshì li de xuésheng bù duō bù shǎo.",
    e: "There are neither too many nor too few students in the classroom."
   }
  ],
  mistakes: [
   {
    wrong: "今天不冷不好。",
    right: "今天不冷不热。",
    why: "The two adjectives must be opposites."
   },
   {
    wrong: "他很不高不矮。",
    right: "他不高不矮。",
    why: "Don't add 很 to 不A不B."
   }
  ],
  quiz: [
   {
    q: "neither cold nor hot",
    options: [
     "不冷很热",
     "很不冷热",
     "不冷不热"
    ],
    answer: 2,
    why: "不 + 冷 + 不 + 热."
   },
   {
    q: "我弟弟（　）。 (neither tall nor short)",
    options: [
     "很高不矮",
     "不高不矮",
     "不高不好"
    ],
    answer: 1,
    why: "Opposites 高 / 矮."
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "这件衣服不大不小。",
     "这件衣服很不大不小。",
     "这件衣服不大小不。"
    ],
    answer: 0,
    why: "不A不B with opposites, no 很."
   },
   {
    q: "今天不冷不热 means the weather is …",
    options: [
     "very bad",
     "extremely cold",
     "just right"
    ],
    answer: 2,
    why: "不A不B describes a comfortable middle."
   }
  ]
 },
 {
  id: "hui-will",
  l: "12",
  title: "会 = will (possibility / prediction)",
  pattern: "Subject + (可能 / 一定) + 会 + V\nNegative: 不会 + V\nQuestion: …会…吗？",
  explain: "Besides 'can (skill)', 会 also means 'will' when you predict what is likely to happen: 明天会下雨。 可能会 = may / might (not sure), 一定会 = will definitely. Put 可能 / 一定 BEFORE 会, never after it. The negative is 不会 (won't), never 没会. This is very useful for the oral topic about yourself in ten years: 十年后我一定会…",
  examples: [
   {
    h: "明天会下雨吗？",
    p: "Míngtiān huì xià yǔ ma?",
    e: "Will it rain tomorrow?"
   },
   {
    h: "明天可能会下雨。",
    p: "Míngtiān kěnéng huì xià yǔ.",
    e: "It might rain tomorrow."
   },
   {
    h: "她一定会来。",
    p: "Tā yídìng huì lái.",
    e: "She will definitely come."
   },
   {
    h: "他今天不会去学校。",
    p: "Tā jīntiān bú huì qù xuéxiào.",
    e: "He won't go to school today."
   },
   {
    h: "明天会很热吗？",
    p: "Míngtiān huì hěn rè ma?",
    e: "Will it be hot tomorrow?"
   },
   {
    h: "十年后我的中文一定会非常好。",
    p: "Shí nián hòu wǒ de Zhōngwén yídìng huì fēicháng hǎo.",
    e: "In ten years my Chinese will definitely be very good."
   }
  ],
  negative: {
   h: "明天不会下雨。",
   p: "Míngtiān bú huì xià yǔ.",
   e: "It won't rain tomorrow."
  },
  mistakes: [
   {
    wrong: "明天会可能下雨。",
    right: "明天可能会下雨。",
    why: "可能 goes before 会."
   },
   {
    wrong: "他没会来。",
    right: "他不会来。",
    why: "会 is negated with 不."
   }
  ],
  quiz: [
   {
    q: "明天可能（　）下雨。",
    options: [
     "会",
     "在",
     "是"
    ],
    answer: 0,
    why: "可能会 = might."
   },
   {
    q: "She will definitely come:",
    options: [
     "她会一定来。",
     "她一定来会。",
     "她一定会来。"
    ],
    answer: 2,
    why: "一定 + 会 + verb."
   },
   {
    q: "He won't come tomorrow:",
    options: [
     "他不明天会来。",
     "他明天不会来。",
     "他明天没会来。"
    ],
    answer: 1,
    why: "不会 = won't; time before 不会."
   },
   {
    q: "In 明天会下雨, 会 means …",
    options: [
     "will (prediction)",
     "can (skill)",
     "want to"
    ],
    answer: 0,
    why: "Talking about the weather tomorrow is a prediction."
   },
   {
    q: "A：明天会冷吗？　B：（　）",
    options: [
     "不会，我不会说汉语。",
     "会，我会开车。",
     "不会，明天不冷不热。"
    ],
    answer: 2,
    why: "The answer must be about tomorrow's weather."
   }
  ]
 },
 {
  id: "duo-v-xie",
  l: "12",
  title: "多 + Verb + (一)些 + Noun (do more of …)",
  pattern: "(你) + 多 + V + (一)些 + N\n你多吃些水果，多喝水。",
  explain: "To advise someone to do MORE of something, put 多 BEFORE the verb: 多吃, 多喝, 多看. 些 / 一些 after the verb means 'some', and the noun comes last. Typical advice: 你多吃些水果，多喝水。 (You should eat more fruit and drink more water.) The common mistake is English order: 吃多水果 (eat more fruit).",
  examples: [
   {
    h: "你多吃些水果。",
    p: "Nǐ duō chī xiē shuǐguǒ.",
    e: "You should eat more fruit."
   },
   {
    h: "多喝水！",
    p: "Duō hē shuǐ!",
    e: "Drink more water!"
   },
   {
    h: "你多吃一些米饭吧。",
    p: "Nǐ duō chī yìxiē mǐfàn ba.",
    e: "Have some more rice."
   },
   {
    h: "你多锻炼身体吧。",
    p: "Nǐ duō duànliàn shēntǐ ba.",
    e: "You should exercise more."
   },
   {
    h: "我们多说汉语吧！",
    p: "Wǒmen duō shuō Hànyǔ ba!",
    e: "Let's speak more Chinese!"
   },
   {
    h: "你多看些中文书。",
    p: "Nǐ duō kàn xiē Zhōngwén shū.",
    e: "Read more Chinese books."
   }
  ],
  mistakes: [
   {
    wrong: "你吃多些水果。",
    right: "你多吃些水果。",
    why: "多 goes before the verb."
   },
   {
    wrong: "你喝水多。",
    right: "你多喝水。",
    why: "For advice, 多 comes before the verb."
   }
  ],
  quiz: [
   {
    q: "You eat more fruit.",
    options: [
     "你吃水果多些。",
     "你多吃些水果。",
     "你吃多些水果。"
    ],
    answer: 1,
    why: "多 + verb + 些 + noun."
   },
   {
    q: "你身体不太好，（　）喝水。",
    options: [
     "多",
     "很",
     "太"
    ],
    answer: 0,
    why: "多 + verb = do more of it."
   },
   {
    q: "Arrange: A 些　B 多　C 吃　D 你　E 苹果",
    options: [
     "你吃多些苹果。",
     "你些多吃苹果。",
     "你多吃些苹果。"
    ],
    answer: 2,
    why: "Subject + 多 + verb + 些 + noun."
   },
   {
    q: "In 多吃些水果, 多 comes …",
    options: [
     "at the end",
     "before the verb",
     "after the verb"
    ],
    answer: 1,
    why: "多 + verb."
   }
  ]
 },
 {
  id: "ai-v",
  l: "12",
  title: "爱 + Verb (love doing)",
  pattern: "Subject + 爱 + V (+ O)\nNegative: 不爱 + V",
  explain: "爱 means 'love'. Like 喜欢, it can be followed directly by a verb: 我爱看书 = I love reading. Use 爱 + verb for hobbies and habits. Nothing goes between 爱 and the verb. Likes and habits are negated with 不 (不爱), not with 没.",
  examples: [
   {
    h: "我爱看书。",
    p: "Wǒ ài kàn shū.",
    e: "I love reading."
   },
   {
    h: "我妹妹爱吃苹果。",
    p: "Wǒ mèimei ài chī píngguǒ.",
    e: "My younger sister loves eating apples."
   },
   {
    h: "他不爱锻炼身体。",
    p: "Tā bú ài duànliàn shēntǐ.",
    e: "He doesn't like exercising."
   },
   {
    h: "你爱喝茶吗？",
    p: "Nǐ ài hē chá ma?",
    e: "Do you love drinking tea?"
   },
   {
    h: "土耳其人非常爱喝茶。",
    p: "Tǔ'ěrqí rén fēicháng ài hē chá.",
    e: "Turkish people really love drinking tea."
   },
   {
    h: "我爱我的家。",
    p: "Wǒ ài wǒ de jiā.",
    e: "I love my family."
   }
  ],
  negative: {
   h: "我不爱吃面条。",
   p: "Wǒ bú ài chī miàntiáo.",
   e: "I don't like eating noodles."
  },
  mistakes: [
   {
    wrong: "我没爱打游戏。",
    right: "我不爱打游戏。",
    why: "Likes and habits are negated with 不."
   },
   {
    wrong: "我看书爱。",
    right: "我爱看书。",
    why: "爱 comes before the verb."
   }
  ],
  quiz: [
   {
    q: "I love drinking coffee:",
    options: [
     "我喝咖啡爱。",
     "我爱咖啡喝。",
     "我爱喝咖啡。"
    ],
    answer: 2,
    why: "爱 + verb + object."
   },
   {
    q: "My dad loves cooking: 我爸爸（　）做饭。",
    options: [
     "会",
     "爱",
     "在"
    ],
    answer: 1,
    why: "love = 爱 (在 = is doing, 会 = can)."
   },
   {
    q: "Negative of 我爱看电视。",
    options: [
     "我不爱看电视。",
     "我没爱看电视。",
     "我爱不看电视。"
    ],
    answer: 0,
    why: "不爱 + verb."
   },
   {
    q: "Which word can replace 爱 in 我爱看书 with almost the same meaning?",
    options: [
     "想",
     "能",
     "喜欢"
    ],
    answer: 2,
    why: "喜欢 + verb = like doing."
   }
  ]
 },
 {
  id: "zai-progressive",
  l: "13",
  title: "在 + Verb (+ 呢): an action in progress",
  pattern: "Subject + 在 + V (+ O) + 呢\nSubject + V (+ O) + 呢\nNegative: Subject + 没(在) + V  — no 呢",
  explain: "To say someone IS DOING something right now, put 在 before the verb; 呢 at the end is optional but sounds natural: 她在做饭呢. Spoken Chinese can also use only 呢: 她看书呢. To say someone is NOT doing it, use 没在 + verb (or 没 + verb) and drop 呢: 他没在看书，他在看手机. Don't use 不在 for this — 不在 means 'not at a place'.",
  examples: [
   {
    h: "你在做什么呢？",
    p: "Nǐ zài zuò shénme ne?",
    e: "What are you doing?"
   },
   {
    h: "我在写作业呢。",
    p: "Wǒ zài xiě zuòyè ne.",
    e: "I'm doing my homework."
   },
   {
    h: "她在学做中国菜。",
    p: "Tā zài xué zuò Zhōngguó cài.",
    e: "She is learning to cook Chinese food."
   },
   {
    h: "爸爸看电视呢。",
    p: "Bàba kàn diànshì ne.",
    e: "Dad is watching TV."
   },
   {
    h: "他没在看书，他在看手机。",
    p: "Tā méi zài kàn shū, tā zài kàn shǒujī.",
    e: "He isn't reading; he's looking at his phone."
   },
   {
    h: "昨天下午三点我在睡觉。",
    p: "Zuótiān xiàwǔ sān diǎn wǒ zài shuìjiào.",
    e: "At 3 p.m. yesterday I was sleeping."
   }
  ],
  negative: {
   h: "他没在看书。",
   p: "Tā méi zài kàn shū.",
   e: "He isn't reading."
  },
  mistakes: [
   {
    wrong: "他不在看书。",
    right: "他没在看书。",
    why: "The progressive is negated with 没(在)."
   },
   {
    wrong: "我看书在呢。",
    right: "我在看书呢。",
    why: "在 goes before the verb."
   },
   {
    wrong: "他没在看书呢。",
    right: "他没在看书。",
    why: "The negative sentence drops 呢."
   }
  ],
  quiz: [
   {
    q: "A：你在做什么呢？　B：我（　）打游戏呢。",
    options: [
     "在",
     "是",
     "有"
    ],
    answer: 0,
    why: "在 + verb = is doing."
   },
   {
    q: "Negative of 他在睡觉。",
    options: [
     "他不在睡觉了。",
     "他在不睡觉。",
     "他没在睡觉。"
    ],
    answer: 2,
    why: "没在 + verb."
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "妈妈呢在做饭。",
     "妈妈在做饭呢。",
     "妈妈做饭在呢。"
    ],
    answer: 1,
    why: "在 + verb + object + 呢."
   },
   {
    q: "Which sentence means 'She is not studying (right now)'?",
    options: [
     "她没在学习。",
     "她在学习呢。",
     "她学习了。"
    ],
    answer: 0,
    why: "没在 + verb."
   },
   {
    q: "我在看书（　）。 (statement: I'm reading)",
    options: [
     "吗",
     "的",
     "呢"
    ],
    answer: 2,
    why: "呢 ends a progressive statement."
   }
  ]
 },
 {
  id: "yiqi-ba",
  l: "13",
  title: "吧 suggestions: 一起…吧！ and how to reply",
  pattern: "(我们) + 一起 + V + 吧！ = Let's … (together)!\nYes: 好啊！/ 好的！  No: 不好意思，我不想… / 对不起，我不能…",
  explain: "吧 at the end of a sentence turns it into a friendly suggestion: 我们去吃饭吧！ (Let's go and eat!). 一起 (together) goes before the verb: 我们一起去吧. To accept, say 好啊！ or 好的！; to refuse politely, start with 不好意思 or 对不起 and give a reason: 不好意思，我不想去。 Don't use 吗 for a suggestion — 吗 turns it into a yes/no question.",
  examples: [
   {
    h: "我们一起去看电影吧！",
    p: "Wǒmen yìqǐ qù kàn diànyǐng ba!",
    e: "Let's go and see a film together!"
   },
   {
    h: "好啊！几点去？",
    p: "Hǎo a! Jǐ diǎn qù?",
    e: "Great! What time shall we go?"
   },
   {
    h: "我们一起去吃中国菜吧。",
    p: "Wǒmen yìqǐ qù chī Zhōngguó cài ba.",
    e: "Let's go and eat Chinese food together."
   },
   {
    h: "不好意思，我不想去，我想在家睡觉。",
    p: "Bù hǎoyìsi, wǒ bù xiǎng qù, wǒ xiǎng zài jiā shuìjiào.",
    e: "Sorry, I don't want to go; I want to sleep at home."
   },
   {
    h: "明天我们一起去锻炼身体吧！",
    p: "Míngtiān wǒmen yìqǐ qù duànliàn shēntǐ ba!",
    e: "Let's go and exercise together tomorrow!"
   },
   {
    h: "对不起，明天我上课，不能去。",
    p: "Duìbuqǐ, míngtiān wǒ shàngkè, bù néng qù.",
    e: "Sorry, I have class tomorrow, so I can't go."
   }
  ],
  mistakes: [
   {
    wrong: "我们去一起吃饭吧。",
    right: "我们一起去吃饭吧。",
    why: "一起 goes before the whole verb phrase."
   },
   {
    wrong: "我们一起吃饭吗！",
    right: "我们一起吃饭吧！",
    why: "A suggestion ends with 吧, not 吗."
   }
  ],
  quiz: [
   {
    q: "我们一起去商店（　）！",
    options: [
     "呢",
     "吧",
     "吗"
    ],
    answer: 1,
    why: "Suggestion = 吧."
   },
   {
    q: "A：我们一起去喝咖啡吧！　B：（　）",
    options: [
     "好啊！",
     "不客气。",
     "没关系。"
    ],
    answer: 0,
    why: "Accepting a suggestion: 好啊！"
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "我们看电视一起吧。",
     "一起我们吧看电视。",
     "我们一起看电视吧。"
    ],
    answer: 2,
    why: "一起 before the verb, 吧 at the end."
   },
   {
    q: "Which is a polite refusal?",
    options: [
     "我们去吧！",
     "不好意思，我不想去。",
     "好啊！"
    ],
    answer: 1,
    why: "不好意思 + reason."
   },
   {
    q: "A：明天一起去打篮球吧！　B：不好意思，明天我（　）去，我上课。",
    options: [
     "不能",
     "没",
     "不是"
    ],
    answer: 0,
    why: "Not able because of class: 不能."
   }
  ]
 },
 {
  id: "gei-da-dianhua",
  l: "13",
  title: "给 + Person + 打电话, and 喂 on the phone",
  pattern: "Subject + (Time) + 给 + Person + 打电话\n喂，你好！ (hello? — on the phone only)",
  explain: "'To call someone' is 给 + person + 打电话: 我给妈妈打电话. The person goes between 给 and 打电话, never straight after 打电话 (not 打电话妈妈). Time words still go first: 晚上我给你打电话. On the phone, start with 喂 (wèi, 'hello?'). 喂 is only for the phone — face to face just say 你好.",
  examples: [
   {
    h: "我每天给妈妈打电话。",
    p: "Wǒ měi tiān gěi māma dǎ diànhuà.",
    e: "I call my mum every day."
   },
   {
    h: "晚上我给你打电话。",
    p: "Wǎnshang wǒ gěi nǐ dǎ diànhuà.",
    e: "I'll call you this evening."
   },
   {
    h: "喂，你好！你在做什么呢？",
    p: "Wèi, nǐ hǎo! Nǐ zài zuò shénme ne?",
    e: "Hello? Hi! What are you doing?"
   },
   {
    h: "喂，是王老师吗？",
    p: "Wèi, shì Wáng lǎoshī ma?",
    e: "Hello, is that Teacher Wang?"
   },
   {
    h: "你在给谁打电话？",
    p: "Nǐ zài gěi shéi dǎ diànhuà?",
    e: "Who are you calling?"
   },
   {
    h: "昨天我没给他打电话。",
    p: "Zuótiān wǒ méi gěi tā dǎ diànhuà.",
    e: "I didn't call him yesterday."
   }
  ],
  mistakes: [
   {
    wrong: "我打电话妈妈。",
    right: "我给妈妈打电话。",
    why: "The person comes after 给, before 打电话."
   },
   {
    wrong: "我给打电话你。",
    right: "我给你打电话。",
    why: "给 + person must stay together."
   },
   {
    wrong: "（见面）喂，老师好！",
    right: "老师好！",
    why: "喂 is only used on the phone."
   }
  ],
  quiz: [
   {
    q: "I call my friend:",
    options: [
     "我打电话朋友。",
     "我朋友给打电话。",
     "我给朋友打电话。"
    ],
    answer: 2,
    why: "给 + person + 打电话."
   },
   {
    q: "(on the phone)（　），你好！我是Ali。",
    options: [
     "呢",
     "喂",
     "吧"
    ],
    answer: 1,
    why: "Phone greeting = 喂."
   },
   {
    q: "你（　）谁打电话？",
    options: [
     "给",
     "是",
     "有"
    ],
    answer: 0,
    why: "给 + person + 打电话."
   },
   {
    q: "Arrange: A 打电话　B 晚上　C 给你　D 我",
    options: [
     "我给你打电话晚上。",
     "我晚上打电话你给。",
     "我晚上给你打电话。"
    ],
    answer: 2,
    why: "Subject + time + 给 + person + 打电话."
   }
  ]
 },
 {
  id: "time-jian",
  l: "13",
  title: "Time + 见 (See you …!)",
  pattern: "Time word + 见！\n明天见！· 下午见！· 星期一见！",
  explain: "To say goodbye and also say WHEN you will meet again, put the time BEFORE 见: 明天见 (see you tomorrow), 晚上见, 星期五见. 再见 is the general goodbye with no specific time. Don't copy English order — 见明天 is wrong.",
  examples: [
   {
    h: "明天见！",
    p: "Míngtiān jiàn!",
    e: "See you tomorrow!"
   },
   {
    h: "下午见！",
    p: "Xiàwǔ jiàn!",
    e: "See you this afternoon!"
   },
   {
    h: "好，我们星期六见！",
    p: "Hǎo, wǒmen xīngqīliù jiàn!",
    e: "OK, see you on Saturday!"
   },
   {
    h: "我们晚上七点见吧。",
    p: "Wǒmen wǎnshang qī diǎn jiàn ba.",
    e: "Let's meet at seven this evening."
   },
   {
    h: "老师，再见！",
    p: "Lǎoshī, zàijiàn!",
    e: "Goodbye, teacher!"
   }
  ],
  mistakes: [
   {
    wrong: "见明天！",
    right: "明天见！",
    why: "The time comes before 见."
   }
  ],
  quiz: [
   {
    q: "See you tomorrow!",
    options: [
     "明天见！",
     "见明天！",
     "明天再见见！"
    ],
    answer: 0,
    why: "Time + 见."
   },
   {
    q: "A：我们下午一起去吧！　B：好啊，（　）！",
    options: [
     "下午吗",
     "见下午",
     "下午见"
    ],
    answer: 2,
    why: "Time + 见."
   },
   {
    q: "See you on Monday!",
    options: [
     "一星期见！",
     "星期一见！",
     "见星期一！"
    ],
    answer: 1,
    why: "星期一 + 见."
   },
   {
    q: "Which is the general goodbye (no time)?",
    options: [
     "再见",
     "明天见",
     "晚上见"
    ],
    answer: 0,
    why: "再见 = goodbye."
   }
  ]
 },
 {
  id: "le-change",
  l: "14",
  title: "Sentence-final 了: it has happened / new situation",
  pattern: "Subject + V + O + 了  (it has happened)\nAdjective / 会… + 了  (change: 天气冷了 · 我会说中文了)",
  explain: "了 at the end of a sentence tells the listener that something has happened, or that a situation is new: 我去商店买东西了 (I went shopping), 他回家了 (He has gone home). It also marks a change: 天气冷了 (It has got cold), 现在我会说中文了 (Now I can speak Chinese). Ask with …了吗？ and answer V + 了. When you negate with 没, the 了 disappears.",
  examples: [
   {
    h: "我去商店买东西了。",
    p: "Wǒ qù shāngdiàn mǎi dōngxi le.",
    e: "I went to the shop to buy some things."
   },
   {
    h: "张先生去学开车了。",
    p: "Zhāng xiānsheng qù xué kāi chē le.",
    e: "Mr Zhang has gone to learn to drive."
   },
   {
    h: "你吃饭了吗？—吃了。",
    p: "Nǐ chī fàn le ma? — Chī le.",
    e: "Have you eaten? — Yes, I have."
   },
   {
    h: "天气冷了。",
    p: "Tiānqì lěng le.",
    e: "It has got cold."
   },
   {
    h: "十年前我不会说中文，现在我会说中文了。",
    p: "Shí nián qián wǒ bú huì shuō Zhōngwén, xiànzài wǒ huì shuō Zhōngwén le.",
    e: "Ten years ago I couldn't speak Chinese; now I can."
   },
   {
    h: "我妹妹长大了。",
    p: "Wǒ mèimei zhǎngdà le.",
    e: "My younger sister has grown up."
   }
  ],
  negative: {
   h: "我没去商店。",
   p: "Wǒ méi qù shāngdiàn.",
   e: "I didn't go to the shop."
  },
  mistakes: [
   {
    wrong: "我了去商店。",
    right: "我去商店了。",
    why: "This 了 goes at the end of the sentence."
   },
   {
    wrong: "我昨天没去学校了。",
    right: "我昨天没去学校。",
    why: "With 没, drop 了."
   }
  ],
  quiz: [
   {
    q: "他不在家，他去医院（　）。",
    options: [
     "呢",
     "了",
     "吗"
    ],
    answer: 1,
    why: "He has gone (it happened): sentence-final 了."
   },
   {
    q: "A：你吃饭了吗？　B：（　）",
    options: [
     "吃了。",
     "吃呢。",
     "吃吗。"
    ],
    answer: 0,
    why: "Short yes-answer: V + 了."
   },
   {
    q: "Now I can speak Chinese (I couldn't before):",
    options: [
     "我现在了会说中文。",
     "我会了现在说中文。",
     "我现在会说中文了。"
    ],
    answer: 2,
    why: "Change = 了 at the end."
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "了我昨天去北京。",
     "我昨天去北京了。",
     "我昨天了去北京。"
    ],
    answer: 1,
    why: "了 at the end."
   },
   {
    q: "我弟弟今年二十岁，他长大（　）。",
    options: [
     "了",
     "吗",
     "的"
    ],
    answer: 0,
    why: "A new situation: 长大了."
   }
  ]
 },
 {
  id: "le-quantity",
  l: "14",
  title: "Verb + 了 + amount + object (completed action)",
  pattern: "Subject + V + 了 + Number + MW / 一点儿 / 很多 / 不少 + N\n她买了三件衣服。· 你看见了几个人？",
  explain: "When a completed action has an object with a NUMBER or an amount (三个, 一点儿, 很多, 不少), put 了 right after the verb: 我买了一点儿苹果. If the object is a bare noun with no amount, 了 normally goes at the end of the sentence instead (我买苹果了). Asking 'how many' about a finished action also uses V + 了: 你买了几本书？",
  examples: [
   {
    h: "她买了一点儿苹果。",
    p: "Tā mǎile yìdiǎnr píngguǒ.",
    e: "She bought a few apples."
   },
   {
    h: "我买了很多衣服。",
    p: "Wǒ mǎile hěn duō yīfu.",
    e: "I bought lots of clothes."
   },
   {
    h: "你看见了几个人？",
    p: "Nǐ kànjiànle jǐ gè rén?",
    e: "How many people did you see?"
   },
   {
    h: "昨天我喝了三杯茶。",
    p: "Zuótiān wǒ hēle sān bēi chá.",
    e: "Yesterday I drank three cups of tea."
   },
   {
    h: "她在商店买了不少东西。",
    p: "Tā zài shāngdiàn mǎile bù shǎo dōngxi.",
    e: "She bought quite a lot of things at the shop."
   },
   {
    h: "我买了两本中文书。",
    p: "Wǒ mǎile liǎng běn Zhōngwén shū.",
    e: "I bought two Chinese books."
   }
  ],
  mistakes: [
   {
    wrong: "我了买很多东西。",
    right: "我买了很多东西。",
    why: "了 comes right after the verb."
   },
   {
    wrong: "她买一点儿了苹果。",
    right: "她买了一点儿苹果。",
    why: "了 goes between the verb and the amount."
   }
  ],
  quiz: [
   {
    q: "我昨天买（　）三本书。",
    options: [
     "的",
     "吗",
     "了"
    ],
    answer: 2,
    why: "Verb + 了 + number + measure word + noun."
   },
   {
    q: "She bought a lot of clothes:",
    options: [
     "她买很多了衣服。",
     "她买了很多衣服。",
     "她了买很多衣服。"
    ],
    answer: 1,
    why: "了 right after 买."
   },
   {
    q: "你看见（　）几个人？",
    options: [
     "了",
     "呢",
     "吧"
    ],
    answer: 0,
    why: "A finished action with an amount: V + 了."
   },
   {
    q: "Arrange: A 了　B 一点儿　C 我　D 买　E 水果",
    options: [
     "我买一点儿了水果。",
     "我了买一点儿水果。",
     "我买了一点儿水果。"
    ],
    answer: 2,
    why: "Subject + V + 了 + amount + noun."
   }
  ]
 },
 {
  id: "mei-negation",
  l: "14",
  title: "没 + Verb: did not / has not (no 了)",
  pattern: "Subject + 没(有) + V (+ O)  — NO 了\n我没看见他。",
  explain: "To say an action did NOT happen (or has not happened yet), put 没 or 没有 before the verb and remove 了: 我没去. 不 is for the present, the future, habits and wishes: 我不去 = I'm not going / I don't go. A short 'no' answer to a 了-question is 没有 or 没 + verb. The most common mistakes are using 不 for past actions and keeping 了 after 没.",
  examples: [
   {
    h: "我没看见他。",
    p: "Wǒ méi kànjiàn tā.",
    e: "I didn't see him."
   },
   {
    h: "昨天我没去学校。",
    p: "Zuótiān wǒ méi qù xuéxiào.",
    e: "I didn't go to school yesterday."
   },
   {
    h: "你买衣服了吗？—没买。",
    p: "Nǐ mǎi yīfu le ma? — Méi mǎi.",
    e: "Did you buy clothes? — No, I didn't."
   },
   {
    h: "她今天没喝咖啡。",
    p: "Tā jīntiān méi hē kāfēi.",
    e: "She hasn't had any coffee today."
   },
   {
    h: "我没有给妈妈打电话。",
    p: "Wǒ méiyǒu gěi māma dǎ diànhuà.",
    e: "I didn't call my mum."
   },
   {
    h: "明天我不去学校。",
    p: "Míngtiān wǒ bú qù xuéxiào.",
    e: "I'm not going to school tomorrow."
   }
  ],
  mistakes: [
   {
    wrong: "我没看见了他。",
    right: "我没看见他。",
    why: "No 了 after 没."
   },
   {
    wrong: "昨天我不去商店。",
    right: "昨天我没去商店。",
    why: "A past action is negated with 没, not 不."
   }
  ],
  quiz: [
   {
    q: "I didn't buy anything yesterday: 昨天我（　）买东西。",
    options: [
     "没",
     "不",
     "没有了"
    ],
    answer: 0,
    why: "Past action → 没 + verb, no 了."
   },
   {
    q: "Negative of 我看见了王老师。",
    options: [
     "我没看见了王老师。",
     "我不看见了王老师。",
     "我没看见王老师。"
    ],
    answer: 2,
    why: "没 + verb, and 了 disappears."
   },
   {
    q: "A：你去商店了吗？　B：（　）",
    options: [
     "不去了吗？",
     "没去。",
     "没去了。"
    ],
    answer: 1,
    why: "没 + verb, no 了."
   },
   {
    q: "明天我（　）去学校，我在家学习。",
    options: [
     "不",
     "没",
     "没有"
    ],
    answer: 0,
    why: "Future → 不."
   },
   {
    q: "Which sentence is WRONG?",
    options: [
     "他昨天没来。",
     "我明天不来。",
     "他昨天没来了。"
    ],
    answer: 2,
    why: "没 and 了 do not go together."
   }
  ]
 },
 {
  id: "dou-ye",
  l: "14",
  title: "都 and 也 (all / also) — before the verb",
  pattern: "Subject + 也 / 都 + V / Adj\nBoth together: Subject + 也 + 都 + V\n都不 = none · 不都 = not all",
  explain: "也 (also, too) and 都 (all, both) are adverbs: they go AFTER the subject and BEFORE the verb or adjective — never at the start or the end of the sentence like English 'also' / 'too'. 都 refers back to a plural subject before it: 我们都是学生. When you need both, the order is 也都: 他们也都是学生. With 不: 都不 = none of them, 不都 = not all of them.",
  examples: [
   {
    h: "我也是学生。",
    p: "Wǒ yě shì xuésheng.",
    e: "I'm a student too."
   },
   {
    h: "我们都是土耳其人。",
    p: "Wǒmen dōu shì Tǔ'ěrqí rén.",
    e: "We are all Turkish."
   },
   {
    h: "我爸爸和妈妈都是医生。",
    p: "Wǒ bàba hé māma dōu shì yīshēng.",
    e: "My dad and mum are both doctors."
   },
   {
    h: "他们也都喜欢喝茶。",
    p: "Tāmen yě dōu xǐhuan hē chá.",
    e: "They all like drinking tea, too."
   },
   {
    h: "这些衣服都很漂亮。",
    p: "Zhèxiē yīfu dōu hěn piàoliang.",
    e: "These clothes are all very pretty."
   },
   {
    h: "我们都不想去。",
    p: "Wǒmen dōu bù xiǎng qù.",
    e: "None of us want to go."
   }
  ],
  mistakes: [
   {
    wrong: "也我是学生。",
    right: "我也是学生。",
    why: "也 goes after the subject, before the verb."
   },
   {
    wrong: "我们是都老师。",
    right: "我们都是老师。",
    why: "都 goes before the verb 是."
   },
   {
    wrong: "他们都也是学生。",
    right: "他们也都是学生。",
    why: "The order is 也都."
   }
  ],
  quiz: [
   {
    q: "I like tea too:",
    options: [
     "我喜欢茶也。",
     "我也喜欢茶。",
     "也我喜欢茶。"
    ],
    answer: 1,
    why: "Subject + 也 + verb."
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "他们也都是中国人。",
     "他们都也是中国人。",
     "他们是也都中国人。"
    ],
    answer: 0,
    why: "也都 + verb."
   },
   {
    q: "我和我朋友（　）是学生。",
    options: [
     "和",
     "很",
     "都"
    ],
    answer: 2,
    why: "Plural subject + 都 = both / all."
   },
   {
    q: "None of us are going:",
    options: [
     "我们去都不。",
     "我们都不去。",
     "我们不都去。"
    ],
    answer: 1,
    why: "都不 = none; 不都 = not all."
   },
   {
    q: "这些苹果（　）很好吃。",
    options: [
     "都",
     "是",
     "和"
    ],
    answer: 0,
    why: "这些 is plural: 都 = all of them."
   }
  ]
 },
 {
  id: "zhexie-naxie",
  l: "14",
  title: "这些 / 那些 (these / those)",
  pattern: "这些 / 那些 + Noun  (no measure word)\n这 / 那 + MW + Noun  (one thing)",
  explain: "这些 (these) and 那些 (those) are the plural of 这 and 那. Put them directly before the noun with NO measure word: 这些书, 那些人 — compare the singular 这本书, 那个人. Chinese nouns have no plural ending, so 这些 / 那些 often show the plural. 们 is only for people and never goes together with a number.",
  examples: [
   {
    h: "这些苹果多少钱？",
    p: "Zhèxiē píngguǒ duōshao qián?",
    e: "How much are these apples?"
   },
   {
    h: "那些人是谁？",
    p: "Nàxiē rén shì shéi?",
    e: "Who are those people?"
   },
   {
    h: "这些衣服都是在北京买的。",
    p: "Zhèxiē yīfu dōu shì zài Běijīng mǎi de.",
    e: "These clothes were all bought in Beijing."
   },
   {
    h: "那些书是我的。",
    p: "Nàxiē shū shì wǒ de.",
    e: "Those books are mine."
   },
   {
    h: "这个杯子是我的，那些杯子是我妹妹的。",
    p: "Zhège bēizi shì wǒ de, nàxiē bēizi shì wǒ mèimei de.",
    e: "This cup is mine; those cups are my younger sister's."
   }
  ],
  mistakes: [
   {
    wrong: "这些本书",
    right: "这些书",
    why: "No measure word after 这些 / 那些."
   },
   {
    wrong: "三个学生们",
    right: "三个学生",
    why: "Don't use 们 together with a number."
   }
  ],
  quiz: [
   {
    q: "these books",
    options: [
     "这些本书",
     "这书些",
     "这些书"
    ],
    answer: 2,
    why: "这些 + noun, no measure word."
   },
   {
    q: "（　）人是你的同学吗？ (those people)",
    options: [
     "哪些",
     "那些",
     "那个"
    ],
    answer: 1,
    why: "those = 那些."
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "那些衣服很漂亮。",
     "那些件衣服很漂亮。",
     "那衣服些很漂亮。"
    ],
    answer: 0,
    why: "那些 + noun, no measure word."
   },
   {
    q: "这（　）是我的朋友。 (These are my friends.)",
    options: [
     "个",
     "本",
     "些"
    ],
    answer: 2,
    why: "Plural: 这些."
   }
  ]
 },
 {
  id: "yidianr-bushao",
  l: "14",
  title: "一点儿 vs 不少 / 很多 (a little vs quite a lot / a lot)",
  pattern: "V (+ 了) + 一点儿 + N  = a little\nV (+ 了) + 不少 + N  = quite a lot\nV (+ 了) + 很多 + N  = a lot",
  explain: "These words go before a noun to say how much: 一点儿 (a little, a bit), 不少 (quite a lot — literally 'not few'), 很多 (a lot). They come after the verb and before the noun: 我会说一点儿中文, not 我会说中文一点儿. 多 alone cannot go before a noun — say 很多书, not 多书. 一点儿 is not used for counting people.",
  examples: [
   {
    h: "我会说一点儿汉语。",
    p: "Wǒ huì shuō yìdiǎnr Hànyǔ.",
    e: "I can speak a little Chinese."
   },
   {
    h: "我想喝一点儿水。",
    p: "Wǒ xiǎng hē yìdiǎnr shuǐ.",
    e: "I'd like to drink a little water."
   },
   {
    h: "她买了不少衣服。",
    p: "Tā mǎile bù shǎo yīfu.",
    e: "She bought quite a lot of clothes."
   },
   {
    h: "我们大学有很多学生。",
    p: "Wǒmen dàxué yǒu hěn duō xuésheng.",
    e: "Our university has a lot of students."
   },
   {
    h: "桌子上有很多东西。",
    p: "Zhuōzi shang yǒu hěn duō dōngxi.",
    e: "There are lots of things on the table."
   }
  ],
  mistakes: [
   {
    wrong: "我有多朋友。",
    right: "我有很多朋友。",
    why: "多 alone cannot stand before a noun; use 很多."
   },
   {
    wrong: "我会说汉语一点儿。",
    right: "我会说一点儿汉语。",
    why: "一点儿 goes before the noun."
   }
  ],
  quiz: [
   {
    q: "I can speak a little Chinese:",
    options: [
     "我会说一点儿中文。",
     "我会说中文一点儿。",
     "我一点儿会说中文。"
    ],
    answer: 0,
    why: "Verb + 一点儿 + noun."
   },
   {
    q: "She bought quite a lot of clothes:",
    options: [
     "她买了少衣服。",
     "她买了不衣服少。",
     "她买了不少衣服。"
    ],
    answer: 2,
    why: "不少 + noun."
   },
   {
    q: "教室里有（　）学生。",
    options: [
     "一点儿",
     "很多",
     "多"
    ],
    answer: 1,
    why: "很多 + noun; 多 alone is wrong and 一点儿 is not for people."
   },
   {
    q: "不少 means …",
    options: [
     "quite a lot",
     "not at all",
     "very few"
    ],
    answer: 0,
    why: "不少 = not few = quite a lot."
   }
  ]
 },
 {
  id: "fenzhong-hou",
  l: "14",
  title: "Number + 分钟后 (in … minutes)",
  pattern: "Number + 分钟 + 后 + V\n他四十分钟后回来。",
  explain: "分钟 is a length of time (minutes), while 分 is a point on the clock (8:05 = 八点零五分). Number + 分钟后 means 'after … minutes / in … minutes' and, like every time phrase, goes BEFORE the verb: 他二十分钟后回来. Don't mix it up with clock time + 后: 七点后 = after 7 o'clock.",
  examples: [
   {
    h: "他什么时候能回来？—四十分钟后回来。",
    p: "Tā shénme shíhou néng huílai? — Sìshí fēnzhōng hòu huílai.",
    e: "When can he come back? — He'll be back in 40 minutes."
   },
   {
    h: "电影二十分钟后开始。",
    p: "Diànyǐng èrshí fēnzhōng hòu kāishǐ.",
    e: "The film starts in 20 minutes."
   },
   {
    h: "十分钟后我给你打电话。",
    p: "Shí fēnzhōng hòu wǒ gěi nǐ dǎ diànhuà.",
    e: "I'll call you in ten minutes."
   },
   {
    h: "我们五分钟后去吃饭吧。",
    p: "Wǒmen wǔ fēnzhōng hòu qù chī fàn ba.",
    e: "Let's go and eat in five minutes."
   }
  ],
  mistakes: [
   {
    wrong: "他回来四十分钟后。",
    right: "他四十分钟后回来。",
    why: "The time phrase goes before the verb."
   },
   {
    wrong: "他四十分后回来。",
    right: "他四十分钟后回来。",
    why: "A length of time needs 分钟."
   }
  ],
  quiz: [
   {
    q: "in 30 minutes",
    options: [
     "三十分后钟",
     "三十分钟后",
     "后三十分钟"
    ],
    answer: 1,
    why: "Number + 分钟 + 后."
   },
   {
    q: "A：你妈妈什么时候回来？　B：（　）",
    options: [
     "二十分钟后回来。",
     "回来二十分钟后。",
     "二十点后分钟回来。"
    ],
    answer: 0,
    why: "Time phrase before the verb."
   },
   {
    q: "Which one is a length of time?",
    options: [
     "十点",
     "十号",
     "十分钟"
    ],
    answer: 2,
    why: "分钟 = minutes (duration)."
   },
   {
    q: "Choose the correct sentence:",
    options: [
     "他后十分钟来。",
     "他十分钟后来。",
     "他来十分钟后。"
    ],
    answer: 1,
    why: "Number + 分钟后 + verb."
   }
  ]
 },
 {
  id: "shi-de",
  l: "15",
  title: "是……的 (emphasising when / where / how)",
  pattern: "Subject + 是 + Time / Place / Manner + Verb + 的\n我是昨天来的。· 我是在北京买的。· 我是坐飞机来的。",
  explain: "Use 是…的 when everyone already knows that an action HAPPENED, and you want to focus on WHEN, WHERE, HOW or WITH WHOM it happened. Put 是 right before the detail you are stressing and 的 at the end of the sentence. In positive sentences 是 can be left out, but 的 never can. It is only for past actions — for the future use a normal sentence (我明天来).",
  examples: [
   {
    h: "我是坐飞机来的。",
    p: "Wǒ shì zuò fēijī lái de.",
    e: "I came by plane."
   },
   {
    h: "我是昨天来土耳其的。",
    p: "Wǒ shì zuótiān lái Tǔ'ěrqí de.",
    e: "I came to Turkey yesterday."
   },
   {
    h: "这个书包是在北京买的。",
    p: "Zhège shūbāo shì zài Běijīng mǎi de.",
    e: "This schoolbag was bought in Beijing."
   },
   {
    h: "她是和妈妈一起来的。",
    p: "Tā shì hé māma yìqǐ lái de.",
    e: "She came with her mum."
   },
   {
    h: "我们是2024年认识的。",
    p: "Wǒmen shì èr líng èr sì nián rènshi de.",
    e: "We met in 2024."
   },
   {
    h: "我是骑自行车去学校的。",
    p: "Wǒ shì qí zìxíngchē qù xuéxiào de.",
    e: "I went to school by bike."
   }
  ],
  negative: {
   h: "我不是坐飞机来的。",
   p: "Wǒ bú shì zuò fēijī lái de.",
   e: "I didn't come by plane."
  },
  mistakes: [
   {
    wrong: "我是明天来的。",
    right: "我明天来。",
    why: "是…的 is only for actions that already happened."
   },
   {
    wrong: "我是坐飞机来。",
    right: "我是坐飞机来的。",
    why: "Don't forget 的 at the end."
   },
   {
    wrong: "我是来的昨天。",
    right: "我是昨天来的。",
    why: "The detail goes between 是 and the verb."
   }
  ],
  quiz: [
   {
    q: "Choose the correct sentence:",
    options: [
     "我昨天是来的。",
     "我是来昨天的。",
     "我是昨天来的。"
    ],
    answer: 2,
    why: "是 + time + verb + 的."
   },
   {
    q: "这件衣服是在商店买（　）。",
    options: [
     "吗",
     "的",
     "了"
    ],
    answer: 1,
    why: "是…的 needs 的."
   },
   {
    q: "Which sentence about the FUTURE is correct?",
    options: [
     "我明天坐飞机去北京。",
     "我是明天坐飞机去北京的。",
     "我明天是坐飞机去的北京。"
    ],
    answer: 0,
    why: "No 是…的 for the future."
   },
   {
    q: "I came with my friend:",
    options: [
     "我和朋友是来一起的。",
     "我是来的和朋友一起。",
     "我是和朋友一起来的。"
    ],
    answer: 2,
    why: "是 + 和朋友一起 + 来 + 的."
   },
   {
    q: "In 他是开车来的, what is being emphasised?",
    options: [
     "who he came with",
     "how he came",
     "when he came"
    ],
    answer: 1,
    why: "开车 is the manner."
   }
  ]
 },
 {
  id: "shi-de-questions",
  l: "15",
  title: "是……的 questions and the negative 不是……的",
  pattern: "Subject + 是 + 什么时候 / 在哪儿 / 怎么 / 和谁 + V + 的？\nYes/no: …是…的吗？\nNegative: Subject + 不是 + detail + V + 的",
  explain: "To ask about the details of a past action, put the question word inside the 是…的 frame: 你是什么时候来的？ 你是怎么来的？ 你是在哪儿买的？ Answer with the same frame, replacing the question word with the detail. The negative is 不是…的 (bú shì) — here 是 can NOT be left out, and 没 is never used. A yes/no question adds 吗: 你是坐地铁来的吗？",
  examples: [
   {
    h: "你是什么时候来土耳其的？",
    p: "Nǐ shì shénme shíhou lái Tǔ'ěrqí de?",
    e: "When did you come to Turkey?"
   },
   {
    h: "你们是怎么来饭店的？",
    p: "Nǐmen shì zěnme lái fàndiàn de?",
    e: "How did you get to the restaurant?"
   },
   {
    h: "你的手机是在哪儿买的？",
    p: "Nǐ de shǒujī shì zài nǎr mǎi de?",
    e: "Where did you buy your phone?"
   },
   {
    h: "你是和谁一起去的？",
    p: "Nǐ shì hé shéi yìqǐ qù de?",
    e: "Who did you go with?"
   },
   {
    h: "你是坐地铁来的吗？—不是，我是坐出租车来的。",
    p: "Nǐ shì zuò dìtiě lái de ma? — Bú shì, wǒ shì zuò chūzūchē lái de.",
    e: "Did you come by metro? — No, I came by taxi."
   },
   {
    h: "我不是在北京认识他的。",
    p: "Wǒ bú shì zài Běijīng rènshi tā de.",
    e: "It wasn't in Beijing that I met him."
   }
  ],
  mistakes: [
   {
    wrong: "你怎么是来的？",
    right: "你是怎么来的？",
    why: "是 comes before the question word."
   },
   {
    wrong: "我没是坐飞机来的。",
    right: "我不是坐飞机来的。",
    why: "The negative is 不是…的."
   },
   {
    wrong: "我不坐飞机来的。",
    right: "我不是坐飞机来的。",
    why: "In the negative, 是 cannot be dropped."
   }
  ],
  quiz: [
   {
    q: "A：你是（　）来的？　B：我是坐火车来的。",
    options: [
     "怎么",
     "什么时候",
     "在哪儿"
    ],
    answer: 0,
    why: "The answer is a means of transport, so ask 怎么."
   },
   {
    q: "A：你是什么时候来北京的？　B：（　）",
    options: [
     "我是坐飞机来的。",
     "我是和妈妈来的。",
     "我是昨天来的。"
    ],
    answer: 2,
    why: "什么时候 asks for a time."
   },
   {
    q: "Negative of 我是开车来的。",
    options: [
     "我是不开车来的。",
     "我不是开车来的。",
     "我没是开车来的。"
    ],
    answer: 1,
    why: "不是…的."
   },
   {
    q: "Where did you buy it?",
    options: [
     "你是在哪儿买的？",
     "你在哪儿是买的？",
     "你是买在哪儿的？"
    ],
    answer: 0,
    why: "是 + 在哪儿 + verb + 的."
   },
   {
    q: "A：你是坐出租车来的吗？　B：不是，（　）",
    options: [
     "我不走路来。",
     "我走路来了的。",
     "我是走路来的。"
    ],
    answer: 2,
    why: "Answer in the same 是…的 frame."
   }
  ]
 },
 {
  id: "transport",
  l: "15",
  title: "Transport: 坐 vs 骑 vs 开 vs 走路",
  pattern: "坐 + 飞机 / 火车 / 公交车 / 地铁 / 出租车 / 校车  (ride as a passenger)\n骑 + 自行车  (ride astride)  · 开车 (drive) · 走路 (walk)\nSubject + 坐/骑/开… + vehicle + 去/来 + Place",
  explain: "Use 坐 (literally 'sit') for anything you ride in as a passenger: 坐飞机, 坐地铁, 坐校车. Use 骑 for things you sit astride, like a bicycle: 骑自行车. 开 means to drive (开车), and 走路 means to walk. The 'how' part comes BEFORE 去/来 + place: 我坐地铁去学校 (not 我去学校坐地铁). Ask 'how?' with 怎么: 你怎么去学校？",
  examples: [
   {
    h: "我坐地铁去学校。",
    p: "Wǒ zuò dìtiě qù xuéxiào.",
    e: "I go to school by metro."
   },
   {
    h: "你怎么去北京？—我坐火车去。",
    p: "Nǐ zěnme qù Běijīng? — Wǒ zuò huǒchē qù.",
    e: "How are you getting to Beijing? — I'm going by train."
   },
   {
    h: "我每天骑自行车去上课。",
    p: "Wǒ měi tiān qí zìxíngchē qù shàngkè.",
    e: "I ride my bike to class every day."
   },
   {
    h: "我爸爸开车去上班。",
    p: "Wǒ bàba kāi chē qù shàngbān.",
    e: "My dad drives to work."
   },
   {
    h: "我走路回宿舍。",
    p: "Wǒ zǒulù huí sùshè.",
    e: "I walk back to the dorm."
   },
   {
    h: "很多学生坐校车去上课。",
    p: "Hěn duō xuésheng zuò xiàochē qù shàngkè.",
    e: "Lots of students take the campus bus to class."
   }
  ],
  mistakes: [
   {
    wrong: "我坐自行车去学校。",
    right: "我骑自行车去学校。",
    why: "Bicycles take 骑, not 坐."
   },
   {
    wrong: "我去学校坐地铁。",
    right: "我坐地铁去学校。",
    why: "Means of transport comes before 去 + place."
   },
   {
    wrong: "我坐走路去学校。",
    right: "我走路去学校。",
    why: "走路 is already a verb; no 坐."
   }
  ],
  quiz: [
   {
    q: "我（　）自行车去学校。",
    options: [
     "开",
     "骑",
     "坐"
    ],
    answer: 1,
    why: "Bicycle → 骑."
   },
   {
    q: "他（　）飞机去北京。",
    options: [
     "坐",
     "骑",
     "走"
    ],
    answer: 0,
    why: "Plane → 坐 (passenger)."
   },
   {
    q: "你（　）去学校？ —我坐公交车去。",
    options: [
     "什么",
     "哪儿",
     "怎么"
    ],
    answer: 2,
    why: "Asking about the way: 怎么."
   },
   {
    q: "I go to the restaurant by taxi:",
    options: [
     "我出租车坐去饭店。",
     "我坐出租车去饭店。",
     "我去饭店坐出租车。"
    ],
    answer: 1,
    why: "Transport + 去 + place."
   },
   {
    q: "My dad drives to work:",
    options: [
     "我爸爸开车去上班。",
     "我爸爸骑车去上班。",
     "我爸爸坐车开去上班。"
    ],
    answer: 0,
    why: "drive = 开车."
   }
  ]
 }
];
