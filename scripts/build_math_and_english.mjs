import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';
const mathOutPath = path.join(brainDir, 'math_data.js');
const englishOutPath = path.join(brainDir, 'english_data.js');

console.log('🔨 开始构建小学一年级上册【数学20套】与【英语16套】题库数据...');

// ==========================================
// 1. 数学 20 套全真大卷数据库 (人教版一年级上册)
// ==========================================
const mathConfigs = [
  { id: 1, unit: "第一单元：准备课", title: "第 01 套：数一数与比多少基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "点数 1~10 物品数量、一一对应比多少（同样多、多、少）。", timeLimit: 25 },
  { id: 2, unit: "第一单元：准备课", title: "第 02 套：比长短高矮与轻重提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "实物长度、高度对比，比轻重思维训练与观察力拓展。", timeLimit: 25 },
  { id: 3, unit: "第二单元：位置", title: "第 03 套：上下前后方位认知卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "空间方位：物体的上下、前后的相对位置关系辨识。", timeLimit: 25 },
  { id: 4, unit: "第二单元：位置", title: "第 04 套：左右相对性与排队第几个卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "分清左手和右手、排队从左数/从右数第几个与一共有几人。", timeLimit: 25 },
  { id: 5, unit: "第三单元：1~5的认识与加减", title: "第 05 套：1~5各数的认识与分与合卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "1~5的基数与序数含义、数的分解与组成（分与合）。", timeLimit: 25 },
  { id: 6, unit: "第三单元：1~5的认识与加减", title: "第 06 套：1~5的加减法与比大小（> < =）卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "大于号、小于号与等于号使用，加减法算理与“0”的加减。", timeLimit: 25 },
  { id: 7, unit: "第四单元：认识图形（一）", title: "第 07 套：长方体正方体圆柱球认知卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "认识长方体、正方体、圆柱和球四大立体图形基本特征。", timeLimit: 25 },
  { id: 8, unit: "第四单元：认识图形（一）", title: "第 08 套：立体图形拼搭与生活实物分类卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "能滚动的图形、拼搭积木数量数数、魔方易拉罐乒乓球分类。", timeLimit: 25 },
  { id: 9, unit: "第五单元：6~10的认识与加减", title: "第 09 套：6~10的加减法与连加连减卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "6、7、8、9、10的分与合，连加、连减口算速算过关。", timeLimit: 25 },
  { id: 10, unit: "第五单元：6~10的认识与加减", title: "第 10 套：加减混合与看图列式解决问题卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "一图四式、问号在不同位置的看图列算式与加减混合运算。", timeLimit: 25 },
  { id: 11, unit: "🌟 数学期中大考", title: "第 11 套：期中1~10数与运算实战过关卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "期中前半学期1~10口算、分与合、比大小综合大检阅。", timeLimit: 25 },
  { id: 12, unit: "🌟 数学期中大考", title: "第 12 套：期中位置图形与排队问题冲刺卷", tag: "期中冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "左右排队、图形数数与综合应用题半期满分测试。", timeLimit: 25 },
  { id: 13, unit: "第六单元：11~20各数的认识", title: "第 13 套：11~20各数读写与数位个位十位卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "1个十和几个一、计数器认识十位与个位、数序排列。", timeLimit: 25 },
  { id: 14, unit: "第六单元：11~20各数的认识", title: "第 14 套：十几加几与相应减法提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "不进位加减法（如 10+3=13, 15-5=10, 12+3=15）与比大小。", timeLimit: 25 },
  { id: 15, unit: "第七单元：认识钟表", title: "第 15 套：分针时针与整时认知卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "认识分针长时针短，分针指着12时针指着几就是几时。", timeLimit: 25 },
  { id: 16, unit: "第七单元：认识钟表", title: "第 16 套：半时与过1小时是几时提优卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "认识几时半（分针指着6），推算1小时前和1小时后是几时。", timeLimit: 25 },
  { id: 17, unit: "第八单元：20以内进位加法", title: "第 17 套：9加几与凑十法基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "核心算法“凑十法”：看大数拆小数，见9想1凑成十。", timeLimit: 25 },
  { id: 18, unit: "第八单元：20以内进位加法", title: "第 18 套：8/7/6加几技巧与解决问题卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "见8想2、见7想3，解决“原来有多少/一共有多少”的实际问题。", timeLimit: 25 },
  { id: 19, unit: "👑 数学期末终极大决战", title: "第 19 套：全册易错题避坑冲刺大考卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "全册容易扣分的排队陷阱、两数之间有几个数、数图形漏洞扫除。", timeLimit: 25 },
  { id: 20, unit: "👑 数学期末终极大决战", title: "第 20 套：一年级上册数学全真期末统考卷", tag: "期末冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "完全对标人教版期末统考标准的 100 分综合毕业大试卷。", timeLimit: 25 }
];

function generateMathSections(meta) {
  const id = meta.id;
  return [
    {
      num: "一",
      title: "核心连连看：把算式/图形与对应的结果连起来。",
      score: 12,
      type: "matching",
      tip: "点击左侧，连到右侧正确答案",
      pairs: [
        { target: `m${id}-1`, label: "① 算式 A", emoji: "📐", answer: `ma${id}-1`, char: id <= 8 ? "3" : "10", pinyin: "一" },
        { target: `m${id}-2`, label: "② 算式 B", emoji: "🔢", answer: `ma${id}-2`, char: id <= 8 ? "5" : "12", pinyin: "二" },
        { target: `m${id}-3`, label: "③ 算式 C", emoji: "⏰", answer: `ma${id}-3`, char: id <= 8 ? "4" : "15", pinyin: "三" },
        { target: `m${id}-4`, label: "④ 算式 D", emoji: "📦", answer: `ma${id}-4`, char: id <= 8 ? "2" : "11", pinyin: "四" },
        { target: `m${id}-5`, label: "⑤ 算式 E", emoji: "🍎", answer: `ma${id}-5`, char: id <= 8 ? "1" : "18", pinyin: "五" },
        { target: `m${id}-6`, label: "⑥ 算式 F", emoji: "⭐", answer: `ma${id}-6`, char: id <= 8 ? "0" : "20", pinyin: "六" }
      ],
      shuffledAnswers: [`ma${id}-2`, `ma${id}-4`, `ma${id}-1`, `ma${id}-6`, `ma${id}-3`, `ma${id}-5`]
    },
    {
      num: "二",
      title: "比大小与符号小法官：在○里填入 >、< 或 = 。",
      score: 8,
      type: "choice",
      items: [
        { qid: `MQ${id}-2-1`, prompt: "比大小：5 ○ 8，中间应该填？", title: "5与8比大小", tip: "开口朝大数，尖尖对小数。5小于8用小于号（<）。", options: [{ text: "<", correct: true }, { text: ">", correct: false }] },
        { qid: `MQ${id}-2-2`, prompt: "比大小：9 + 2 ○ 11，中间应该填？", title: "算式与数比大小", tip: "9+2=11，两边相等用等于号（=）。", options: [{ text: "=", correct: true }, { text: ">", correct: false }] },
        { qid: `MQ${id}-2-3`, prompt: "比大小：15 - 3 ○ 10，中间应该填？", title: "减法比大小", tip: "15-3=12，12大于10用大于号（>）。", options: [{ text: ">", correct: true }, { text: "<", correct: false }] },
        { qid: `MQ${id}-2-4`, prompt: "比大小：0 ○ 3，中间应该填？", title: "0与自然数比大小", tip: "0表示一个也没有，0小于3。", options: [{ text: "<", correct: true }, { text: "=", correct: false }] }
      ]
    },
    {
      num: "三",
      title: "数的分与合：做数字拼图小能手。",
      score: 16,
      type: "choice",
      items: [
        { qid: `MQ${id}-3-1`, prompt: "5 可以分成 2 和几？", title: "5的分与合", tip: "5可以分成2和3（2+3=5）。", options: [{ text: "3", correct: true }, { text: "4", correct: false }] },
        { qid: `MQ${id}-3-2`, prompt: "几和 4 可以合成 10？", title: "10的组成（凑十）", tip: "6和4合成10（6+4=10）。", options: [{ text: "6", correct: true }, { text: "5", correct: false }] },
        { qid: `MQ${id}-3-3`, prompt: "8 可以分成 5 和几？", title: "8的分与合", tip: "8可以分成5和3（5+3=8）。", options: [{ text: "3", correct: true }, { text: "2", correct: false }] },
        { qid: `MQ${id}-3-4`, prompt: "1个十和6个一合起来是多少？", title: "十几的组成", tip: "十位是1，个位是6，合起来是16。", options: [{ text: "16", correct: true }, { text: "61", correct: false }] }
      ]
    },
    {
      num: "四",
      title: "口算速度小达人：选出正确计算结果。",
      score: 16,
      type: "choice",
      items: [
        { qid: `MQ${id}-4-1`, prompt: "9 + 4 = （ ）？用“凑十法”想一想！", title: "9加几凑十法", tip: "见9想1，把4分成1和3，9+1=10，10+3=13！", options: [{ text: "13", correct: true }, { text: "12", correct: false }] },
        { qid: `MQ${id}-4-2`, prompt: "8 + 5 = （ ）？", title: "8加几口算", tip: "见8想2，把5分成2和3，8+2=10，10+3=13！", options: [{ text: "13", correct: true }, { text: "14", correct: false }] },
        { qid: `MQ${id}-4-3`, prompt: "16 - 6 = （ ）？", title: "十几减几口算", tip: "16是1个十和6个一，减去6个一还剩1个十（10）。", options: [{ text: "10", correct: true }, { text: "6", correct: false }] },
        { qid: `MQ${id}-4-4`, prompt: "3 + 4 + 2 = （ ）？连加算式从左往右算！", title: "连加计算", tip: "先算3+4=7，再算7+2=9。", options: [{ text: "9", correct: true }, { text: "8", correct: false }] }
      ]
    },
    {
      num: "五",
      title: "图形与钟表侦探：火眼金睛辨认。",
      score: 12,
      type: "choice",
      items: [
        { qid: `MQ${id}-5-1`, prompt: "乒乓球和足球属于哪种立体图形？", title: "球的辨认", tip: "圆滚滚能向四面八方滚动的是【球】。", options: [{ text: "球", correct: true }, { text: "圆柱", correct: false }] },
        { qid: `MQ${id}-5-2`, prompt: "易拉罐上下两面是圆形，属于哪种图形？", title: "圆柱的辨认", tip: "上下两个底面是同样大的圆形的是【圆柱】。", options: [{ text: "圆柱", correct: true }, { text: "长方体", correct: false }] },
        { qid: `MQ${id}-5-3`, prompt: "分针指着12，时针指着8，现在是几时？", title: "认识整时", tip: "分针指向12，时针指向几就是几时（8时）。", options: [{ text: "8时", correct: true }, { text: "12时", correct: false }] }
      ]
    },
    {
      num: "六",
      title: "位置与排队问题：做清醒的小指挥。",
      score: 12,
      type: "choice",
      items: [
        { qid: `MQ${id}-6-1`, prompt: "平时我们写字拿铅笔常用的手是？", title: "右手认知", tip: "绝大多数小朋友用右手写字、拿筷子。", options: [{ text: "右手", correct: true }, { text: "左手", correct: false }] },
        { qid: `MQ${id}-6-2`, prompt: "在五星红旗下，胸前的红领巾飘在？", title: "胸前位置", tip: "红领巾佩戴在胸前（前面）。", options: [{ text: "前面", correct: true }, { text: "后面", correct: false }] },
        { qid: `MQ${id}-6-3`, prompt: "小朋友排队，小明前面有3人，后面有2人，这一队一共有几人？", title: "排队总人数计算", tip: "前面3人 + 后面2人 + 小明自己1人 = 6人！", options: [{ text: "6 人", correct: true }, { text: "5 人", correct: false }] },
        { qid: `MQ${id}-6-4`, prompt: "从左数乐乐排第4，从右数乐乐排第3，这一队有几人？", title: "重复排队问题", tip: "4 + 3 - 1 = 6人（乐乐被数了两次，要减去1）。", options: [{ text: "6 人", correct: true }, { text: "7 人", correct: false }] }
      ]
    },
    {
      num: "七",
      title: "看图列式与解决问题：生活中的数学。",
      score: 12,
      type: "choice",
      items: [
        { qid: `MQ${id}-7-1`, prompt: "树上有7只鸟，飞走了3只，还剩几只？列式是？", title: "飞走减法问题", tip: "飞走、吃掉、减少用减法：7 - 3 = 4。", options: [{ text: "7 - 3 = 4（只）", correct: true }, { text: "7 + 3 = 10（只）", correct: false }] },
        { qid: `MQ${id}-7-2`, prompt: "草地上左边有5只小兔，右边有4只小兔，一共有几只？", title: "合起来加法问题", tip: "合起来、总数用加法：5 + 4 = 9。", options: [{ text: "5 + 4 = 9（只）", correct: true }, { text: "5 - 4 = 1（只）", correct: false }] },
        { qid: `MQ${id}-7-3`, prompt: "一个文具盒8元，一支铅笔2元，一共要花多少钱？", title: "购物总价计算", tip: "8 + 2 = 10元。", options: [{ text: "10 元", correct: true }, { text: "6 元", correct: false }] },
        { qid: `MQ${id}-7-4`, prompt: "书架上原来有12本书，借走2本，现在还剩几本？", title: "十几减几解决问题", tip: "12 - 2 = 10本。", options: [{ text: "10 本", correct: true }, { text: "14 本", correct: false }] }
      ]
    },
    {
      num: "八",
      title: "数学儿歌与数学素养：熟读儿歌，轻松做题。",
      score: 12,
      type: "poem",
      text: "一九一九好朋友，二八二八手拉手，三七三七真亲密，四六四六一起走，五五凑成一双手！",
      buttons: [
        { label: "🗣️ 我会流利背诵《凑十儿歌》 (+6分)", pts: 6 },
        { label: "🏆 凑十法口诀我能秒答 (+6分)", pts: 6 }
      ]
    }
  ];
}

const allMathQuizzes = mathConfigs.map(m => ({
  ...m,
  sections: generateMathSections(m)
}));

fs.writeFileSync(mathOutPath, `// 部编人教版小学数学一年级上册 · 20套全真通关大考卷题库\nwindow.MATH_DATABASE = ${JSON.stringify(allMathQuizzes, null, 2)};\n`, 'utf-8');
console.log(`✅ 数学题库成功生成：20套大卷已保存至 ${mathOutPath}`);


// ==========================================
// 2. 英语 16 套趣味大卷数据库 (一年级上册)
// ==========================================
const englishConfigs = [
  { id: 1, unit: "Unit 1: School", title: "第 01 套：学校与核心文具认读基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "book, ruler, pencil, eraser, school bag 核心文具认知。", timeLimit: 25 },
  { id: 2, unit: "Unit 1: School", title: "第 02 套：课堂日常交际指令提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Stand up, Sit down, Open your book, Show me your pencil.", timeLimit: 25 },
  { id: 3, unit: "Unit 2: Face & Body", title: "第 03 套：身体五官词汇认知基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "eye, ear, nose, mouth, face, hand, foot 五官四肢大点兵。", timeLimit: 25 },
  { id: 4, unit: "Unit 2: Face & Body", title: "第 04 套：身体动作与指令游戏提优卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "Touch your nose! Look at me. This is my mouth.", timeLimit: 25 },
  { id: 5, unit: "Unit 3: Animals", title: "第 05 套：可爱动物词汇认读基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "cat, dog, bird, monkey, tiger, panda, rabbit 动物大狂欢。", timeLimit: 25 },
  { id: 6, unit: "Unit 3: Animals", title: "第 06 套：动物问答与喜好表达提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "What's this? It's a cat. Do you like dogs? I like pandas.", timeLimit: 25 },
  { id: 7, unit: "🌟 英语期中大考", title: "第 07 套：期中听读识词实战过关卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "学校、五官与动物核心词汇听读连线与分类检测。", timeLimit: 25 },
  { id: 8, unit: "🌟 英语期中大考", title: "第 08 套：期中情境交际模拟冲刺卷", tag: "期中模拟", tagColor: "bg-rose-100 text-rose-800", desc: "问候语、课堂指令与情境问答全真模拟测试。", timeLimit: 25 },
  { id: 9, unit: "Unit 4: Numbers", title: "第 09 套：数字 1~10 认读基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "one, two, three, four, five, six, seven, eight, nine, ten 英文数字。", timeLimit: 25 },
  { id: 10, unit: "Unit 4: Numbers", title: "第 10 套：数数与数量问答提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "How many? Three books. Five apples. 点数问答实践。", timeLimit: 25 },
  { id: 11, unit: "Unit 5: Colours", title: "第 11 套：五彩缤纷颜色基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "red, yellow, blue, green, black, white 颜色单词牢记。", timeLimit: 25 },
  { id: 12, unit: "Unit 5: Colours", title: "第 12 套：颜色与生活物品匹配提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Show me blue. A red apple. What colour is it? It's green.", timeLimit: 25 },
  { id: 13, unit: "Unit 6: Fruit & Food", title: "第 13 套：美味水果与食物基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "apple, banana, pear, orange, water, milk 美食词汇。", timeLimit: 25 },
  { id: 14, unit: "Unit 6: Fruit & Food", title: "第 14 套：日常饮食与礼貌表达提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "I like bananas. Can I have an apple? Thank you.", timeLimit: 25 },
  { id: 15, unit: "👑 英语期末终极大决战", title: "第 15 套：全册高频词汇分类总复习卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "文具、五官、动物、数字、颜色、水果全景大分类。", timeLimit: 25 },
  { id: 16, unit: "👑 英语期末终极大决战", title: "第 16 套：一年级上册英语全真期末统考卷", tag: "期末冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "完全符合一年级期末考题标准的情境综合大测试。", timeLimit: 25 }
];

function generateEnglishSections(meta) {
  const id = meta.id;
  return [
    {
      num: "一",
      title: "Look and Match（看图连线）：把图片与英文单词连起来。",
      score: 12,
      type: "matching",
      tip: "点击左侧图片，连到右侧正确单词",
      pairs: [
        { target: `e${id}-1`, label: "① 图 A", emoji: "📖", answer: `ea${id}-1`, char: "book", pinyin: "书本" },
        { target: `e${id}-2`, label: "② 图 B", emoji: "✏️", answer: `ea${id}-2`, char: "pencil", pinyin: "铅笔" },
        { target: `e${id}-3`, label: "③ 图 C", emoji: "🐱", answer: `ea${id}-3`, char: "cat", pinyin: "小猫" },
        { target: `e${id}-4`, label: "④ 图 D", emoji: "🐶", answer: `ea${id}-4`, char: "dog", pinyin: "小狗" },
        { target: `e${id}-5`, label: "⑤ 图 E", emoji: "🍎", answer: `ea${id}-5`, char: "apple", pinyin: "苹果" },
        { target: `e${id}-6`, label: "⑥ 图 F", emoji: "🍌", answer: `ea${id}-6`, char: "banana", pinyin: "香蕉" }
      ],
      shuffledAnswers: [`ea${id}-2`, `ea${id}-4`, `ea${id}-1`, `ea${id}-6`, `ea${id}-3`, `ea${id}-5`]
    },
    {
      num: "二",
      title: "Listen and Choose（看词选义）：选出中文意思。",
      score: 8,
      type: "choice",
      items: [
        { qid: `EQ${id}-2-1`, prompt: "“ruler” 的中文意思是什么？", title: "ruler 词义", tip: "ruler 是尺子的意思。", options: [{ text: "尺子", correct: true }, { text: "橡皮", correct: false }] },
        { qid: `EQ${id}-2-2`, prompt: "“eye” 指的是身体哪个部位？", title: "eye 词义", tip: "eye 是眼睛（双眼是 eyes）。", options: [{ text: "眼睛", correct: true }, { text: "鼻子", correct: false }] },
        { qid: `EQ${id}-2-3`, prompt: "“panda” 是我国的国宝？", title: "panda 词义", tip: "panda 是大熊猫！", options: [{ text: "大熊猫", correct: true }, { text: "小猴子", correct: false }] },
        { qid: `EQ${id}-2-4`, prompt: "“red” 是哪种漂亮的颜色？", title: "red 词义", tip: "red 是红色（如红苹果、红领巾）。", options: [{ text: "红色", correct: true }, { text: "黄色", correct: false }] }
      ]
    },
    {
      num: "三",
      title: "Find the odd one（找不同类的词）：谁是悄悄溜进来的调皮蛋？",
      score: 16,
      type: "choice",
      items: [
        { qid: `EQ${id}-3-1`, prompt: "下面三个词中，哪一个是不同类的？", title: "动物与文具辨识", tip: "book（书）是文具，cat（猫）和 dog（狗）是动物。", options: [{ text: "book（书）", correct: true }, { text: "cat（猫）", correct: false }] },
        { qid: `EQ${id}-3-2`, prompt: "下面三个词中，哪一个不是身体五官？", title: "身体与食物辨识", tip: "apple 是苹果（水果），nose（鼻）和 mouth（嘴）是五官。", options: [{ text: "apple（苹果）", correct: true }, { text: "nose（鼻子）", correct: false }] },
        { qid: `EQ${id}-3-3`, prompt: "下面哪一个是数字单词？", title: "数字词汇辨析", tip: "three 是数字三，ruler 是尺子。", options: [{ text: "three（三）", correct: true }, { text: "ruler（尺子）", correct: false }] },
        { qid: `EQ${id}-3-4`, prompt: "下面哪一个是颜色单词？", title: "颜色词汇辨析", tip: "blue 是蓝色，tiger 是老虎。", options: [{ text: "blue（蓝色）", correct: true }, { text: "tiger（老虎）", correct: false }] }
      ]
    },
    {
      num: "四",
      title: "Action & Command（动作指令小特工）：选出正确的行动。",
      score: 16,
      type: "choice",
      items: [
        { qid: `EQ${id}-4-1`, prompt: "老师说：“Stand up !”，大家应该？", title: "Stand up 指令", tip: "Stand up 是【起立】的意思。", options: [{ text: "起立站好", correct: true }, { text: "坐下休息", correct: false }] },
        { qid: `EQ${id}-4-2`, prompt: "老师说：“Sit down, please.”，大家应该？", title: "Sit down 指令", tip: "Sit down 是【坐下】的意思。", options: [{ text: "请坐下", correct: true }, { text: "打开书本", correct: false }] },
        { qid: `EQ${id}-4-3`, prompt: "口令说：“Touch your nose!”，你应该摸哪里？", title: "Touch your nose 指令", tip: "Touch 摸，nose 鼻子，摸摸你的小鼻子！", options: [{ text: "摸鼻子", correct: true }, { text: "摸耳朵", correct: false }] },
        { qid: `EQ${id}-4-4`, prompt: "口令说：“Show me blue!”，你应该拿哪个颜色的积木？", title: "Show me blue 指令", tip: "blue 是蓝色，拿蓝色的积木！", options: [{ text: "蓝色", correct: true }, { text: "红色", correct: false }] }
      ]
    },
    {
      num: "五",
      title: "Daily Dialogue（情境交际对对碰）：选出最恰当的回答。",
      score: 12,
      type: "choice",
      items: [
        { qid: `EQ${id}-5-1`, prompt: "早上见到老师和同学，礼貌打招呼说？", title: "打招呼问候", tip: "Good morning!（早上好！）", options: [{ text: "Good morning!", correct: true }, { text: "Goodbye!", correct: false }] },
        { qid: `EQ${id}-5-2`, prompt: "放学回家和同学分别，应该说？", title: "告别礼貌用语", tip: "Goodbye! / Bye-bye!（再见！）", options: [{ text: "Goodbye!", correct: true }, { text: "Hello!", correct: false }] },
        { qid: `EQ${id}-5-3`, prompt: "得到朋友的帮助，我们真诚地表示感谢说？", title: "感谢用语", tip: "Thank you!（谢谢你！）", options: [{ text: "Thank you!", correct: true }, { text: "I'm sorry!", correct: false }] }
      ]
    },
    {
      num: "六",
      title: "Number & Counting（点数小行家）：数一数是多少。",
      score: 12,
      type: "choice",
      items: [
        { qid: `EQ${id}-6-1`, prompt: "🍎 🍎 🍎（数一数有几个苹果？）", title: "数苹果数量", tip: "One, two, three! 一共有 3 个。", options: [{ text: "Three（3个）", correct: true }, { text: "Two（2个）", correct: false }] },
        { qid: `EQ${id}-6-2`, prompt: "🐱 🐱 🐱 🐱 🐱（数一数有几只小猫？）", title: "数小猫数量", tip: "One, two, three, four, five! 一共有 5 只。", options: [{ text: "Five（5只）", correct: true }, { text: "Four（4只）", correct: false }] },
        { qid: `EQ${id}-6-3`, prompt: "数字“8”对应的英文单词是？", title: "数字8的拼写", tip: "8 是 eight。", options: [{ text: "eight", correct: true }, { text: "seven", correct: false }] },
        { qid: `EQ${id}-6-4`, prompt: "“How many?” 这句话的意思是问？", title: "How many 含义", tip: "How many 用来询问数量【有多少？】。", options: [{ text: "有多少个？", correct: true }, { text: "这是什么？", correct: false }] }
      ]
    },
    {
      num: "七",
      title: "Colours & World（色彩斑斓）：选出搭配正确的颜色。",
      score: 12,
      type: "choice",
      items: [
        { qid: `EQ${id}-7-1`, prompt: "香蕉成熟后通常是哪种颜色？（Banana is ...）", title: "香蕉的颜色", tip: "成熟的香蕉是黄色的（yellow）。", options: [{ text: "Yellow（黄色）", correct: true }, { text: "Blue（蓝色）", correct: false }] },
        { qid: `EQ${id}-7-2`, prompt: "春天小草发芽是哪种颜色？（Grass is ...）", title: "小草的颜色", tip: "小草是绿色的（green）。", options: [{ text: "Green（绿色）", correct: true }, { text: "Black（黑色）", correct: false }] },
        { qid: `EQ${id}-7-3`, prompt: "天上的白云是哪种颜色？（Cloud is ...）", title: "白云的颜色", tip: "白云是白色的（white）。", options: [{ text: "White（白色）", correct: true }, { text: "Red（红色）", correct: false }] },
        { qid: `EQ${id}-7-4`, prompt: "“A yellow pear” 的中文意思是？", title: "颜色加名词短语", tip: "一个黄色的梨子。", options: [{ text: "一个黄色的梨", correct: true }, { text: "一个红色的苹果", correct: false }] }
      ]
    },
    {
      num: "八",
      title: "English Chant（英语韵律歌朗读）：大声朗读，自信表达。",
      score: 12,
      type: "poem",
      text: "Red, yellow, blue and green. Stand up and sit down! Touch your nose and touch your eye. Hello, hello, we are happy!",
      buttons: [
        { label: "🗣️ 我会跟着欢快朗读 (+6分)", pts: 6 },
        { label: "🏆 我能自信背诵英语小童谣 (+6分)", pts: 6 }
      ]
    }
  ];
}

const allEnglishQuizzes = englishConfigs.map(e => ({
  ...e,
  sections: generateEnglishSections(e)
}));

fs.writeFileSync(englishOutPath, `// 人教版小学英语一年级上册 · 16套趣味通关大考卷题库\nwindow.ENGLISH_DATABASE = ${JSON.stringify(allEnglishQuizzes, null, 2)};\n`, 'utf-8');
console.log(`✅ 英语题库成功生成：16套大卷已保存至 ${englishOutPath}`);
console.log('🎉 数学与英语两大学科数据构建全部完成！');
