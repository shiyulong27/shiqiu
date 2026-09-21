import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';
const mathOutPath = path.join(brainDir, 'math_data.js');
const englishOutPath = path.join(brainDir, 'english_data.js');

console.log('🚀 开始构建一年级上册【数学20套】与【英语16套】权威高品质题库...');

// =========================================================================
// 1. 数学 20 套全真大卷题库 (严格对标人教版小学数学一年级上册课本与单元大纲)
// =========================================================================

// 定义数学每个单元的专属题库生成规则
const mathCurriculumData = [
  // --- 第一单元：准备课 ---
  {
    id: 1,
    unit: "第一单元：准备课",
    title: "第 01 套：数一数与比多少基础卷",
    tag: "基础夯实",
    tagColor: "bg-emerald-100 text-emerald-800",
    desc: "点数 1~10 物品数量、一一对应比多少（同样多、多、少）。",
    timeLimit: 25,
    matching: {
      title: "核心连连看：看实物图片数一数，连到对应的数字。",
      tip: "数清楚左侧水果动物数量，连到右边数字",
      pairs: [
        { target: "m1-1", label: "① 3只小猫", emoji: "🐱🐱🐱", answer: "ma1-1", char: "3", pinyin: "三" },
        { target: "m1-2", label: "② 5个苹果", emoji: "🍎🍎🍎🍎🍎", answer: "ma1-2", char: "5", pinyin: "五" },
        { target: "m1-3", label: "③ 1个太阳", emoji: "☀️", answer: "ma1-3", char: "1", pinyin: "一" },
        { target: "m1-4", label: "④ 4只小鸟", emoji: "🐦🐦🐦🐦", answer: "ma1-4", char: "4", pinyin: "四" },
        { target: "m1-5", label: "⑤ 2只小兔", emoji: "🐰🐰", answer: "ma1-5", char: "2", pinyin: "二" },
        { target: "m1-6", label: "⑥ 6朵向日葵", emoji: "🌻🌻🌻🌻🌻🌻", answer: "ma1-6", char: "6", pinyin: "六" }
      ],
      shuffledAnswers: ["ma1-2", "ma1-4", "ma1-1", "ma1-6", "ma1-3", "ma1-5"]
    },
    choices2: [
      { qid: "M1-2-1", prompt: "盘子里有 5 个梨，小明吃了 2 个，盘子里的梨是变多了还是变少了？", title: "物品增减认知", tip: "吃掉之后变少了。", options: [{ text: "变少了", correct: true }, { text: "变多了", correct: false }] },
      { qid: "M1-2-2", prompt: "左边有 4 只鸭子，右边有 4 只鸡，鸭子和鸡的数量？", title: "同样多概念", tip: "都是4只，数量同样多。", options: [{ text: "同样多", correct: true }, { text: "鸭子多", correct: false }] },
      { qid: "M1-2-3", prompt: "小兔有 5 只，胡萝卜有 3 根，一只小兔分一根，胡萝卜够吗？", title: "一一对应比多少", tip: "3根不够分给5只小兔，胡萝卜比小兔少。", options: [{ text: "不够（胡萝卜少）", correct: true }, { text: "够了", correct: false }] },
      { qid: "M1-2-4", prompt: "数字 1 到 10 中，最小的单数是几？", title: "数的大小初识", tip: "1 是最小的非零自然数。", options: [{ text: "1", correct: true }, { text: "0", correct: false }] }
    ],
    choices3: [
      { qid: "M1-3-1", prompt: "数一数：国旗上有几颗五角星？", title: "观察数数", tip: "五星红旗上有一颗大五角星和四颗小五角星，一共5颗。", options: [{ text: "5 颗", correct: true }, { text: "4 颗", correct: false }] },
      { qid: "M1-3-2", prompt: "人的两只手一共有几个手指头？", title: "生活中的数字", tip: "一只手5个，两只手5+5=10个手指头。", options: [{ text: "10 个", correct: true }, { text: "8 个", correct: false }] },
      { qid: "M1-3-3", prompt: "下面哪一组物品的数量正好是 6 个？", title: "精准点数", tip: "仔细点数：6个铅笔正好是6。", options: [{ text: "✏️✏️✏️✏️✏️✏️（6支铅笔）", correct: true }, { text: "⚽⚽⚽⚽（4个球）", correct: false }] },
      { qid: "M1-3-4", prompt: "比 3 多 1 的数是几？", title: "相邻数初识", tip: "3往后数一个数是4。", options: [{ text: "4", correct: true }, { text: "2", correct: false }] }
    ],
    choices4: [
      { qid: "M1-4-1", prompt: "1、2、3、( )、5，括号里应该填几？", title: "按顺序数数", tip: "3后面是4，4后面是5。", options: [{ text: "4", correct: true }, { text: "6", correct: false }] },
      { qid: "M1-4-2", prompt: "倒着数数：5、4、3、( )、1，括号里填？", title: "倒数练习", tip: "3的前面一个是2。", options: [{ text: "2", correct: true }, { text: "0", correct: false }] },
      { qid: "M1-4-3", prompt: "比 5 少 1 的数是几？", title: "数的前后关系", tip: "5的前一个数是4。", options: [{ text: "4", correct: true }, { text: "6", correct: false }] },
      { qid: "M1-4-4", prompt: "两只小鸟飞走了，树上一只也没有了，用哪个数字表示？", title: "0的含义", tip: "一个也没有用数字 0 表示。", options: [{ text: "0", correct: true }, { text: "1", correct: false }] }
    ],
    choices5: [
      { qid: "M1-5-1", prompt: "小猫有 3 只，小狗有 2 只，哪种动物多？", title: "比多少实战", tip: "3 比 2 大，小猫多。", options: [{ text: "小猫多", correct: true }, { text: "小狗多", correct: false }] },
      { qid: "M1-5-2", prompt: "乐乐有 4 块糖，月亮也有 4 块糖，他们手里的糖？", title: "同样多判断", tip: "数量相同就是同样多。", options: [{ text: "同样多", correct: true }, { text: "乐乐多", correct: false }] },
      { qid: "M1-5-3", prompt: "画△和小圆圈一样多：○○○，应画几个△？", title: "画同样多", tip: "有3个圆圈，就要画3个△。", options: [{ text: "3 个", correct: true }, { text: "4 个", correct: false }] }
    ],
    choices6: [
      { qid: "M1-6-1", prompt: "排队做操，小明排在第 1，小红排在小明后面，小红排第几？", title: "先后排队位置", tip: "1后面是第2。", options: [{ text: "第 2", correct: true }, { text: "第 3", correct: false }] },
      { qid: "M1-6-2", prompt: "桌子上有苹果和梨，每个盘子放1个苹果，刚好放完，说明？", title: "一一对应概念", tip: "盘子和苹果数量同样多。", options: [{ text: "盘子和苹果同样多", correct: true }, { text: "苹果比盘子多", correct: false }] },
      { qid: "M1-6-3", prompt: "红花有 5 朵，黄花有 3 朵，红花比黄花？", title: "多与少对比", tip: "5 比 3 多 2 朵。", options: [{ text: "多 2 朵", correct: true }, { text: "少 2 朵", correct: false }] },
      { qid: "M1-6-4", prompt: "看图数数：小手伸出3根手指，再伸出2根，一共有几根？", title: "手指数数", tip: "3根加上2根一共是5根手指。", options: [{ text: "5 根", correct: true }, { text: "4 根", correct: false }] }
    ],
    choices7: [
      { qid: "M1-7-1", prompt: "池塘里有 3 只小鸭，又游来了 2 只，池塘里一共有几只小鸭？", title: "初步加法情境", tip: "合起来一共：3 + 2 = 5 只。", options: [{ text: "5 只", correct: true }, { text: "4 只", correct: false }] },
      { qid: "M1-7-2", prompt: "树上有 4 只苹果，掉下来 1 只，树上还剩几只？", title: "初步减法情境", tip: "掉落减少：4 - 1 = 3 只。", options: [{ text: "3 只", correct: true }, { text: "5 只", correct: false }] },
      { qid: "M1-7-3", prompt: "妈妈买了 5 个鸡蛋，早上煮了 2 个，还剩下几个？", title: "生活减法问题", tip: "5 - 2 = 3 个。", options: [{ text: "3 个", correct: true }, { text: "2 个", correct: false }] },
      { qid: "M1-7-4", prompt: "左手拿 2 支笔，右手拿 2 支笔，合起来一共有？", title: "加法总数问题", tip: "2 + 2 = 4 支笔。", options: [{ text: "4 支", correct: true }, { text: "3 支", correct: false }] }
    ],
    poem: {
      text: "一二三四五，上山打老虎。老虎没打到，打到小松鼠。松鼠有几只？让我数一数：数来又数去，一二三四五！",
      btn1: "🗣️ 我会流利背诵《数数儿歌》 (+6分)",
      btn2: "🏆 我能从1数到10不漏数 (+6分)"
    }
  },
  {
    id: 2,
    unit: "第一单元：准备课",
    title: "第 02 套：比长短高矮与轻重提优卷",
    tag: "能力提优",
    tagColor: "bg-sky-100 text-sky-800",
    desc: "实物长度、高度对比，比轻重思维训练与观察力拓展。",
    timeLimit: 25,
    matching: {
      title: "核心连连看：把特征相反的观察词语连起来。",
      tip: "比长短、比高矮、比轻重反义对应",
      pairs: [
        { target: "m2-1", label: "① 长铅笔 📏", emoji: "📏", answer: "ma2-1", char: "短", pinyin: "duǎn" },
        { target: "m2-2", label: "② 高大树 🌲", emoji: "🌲", answer: "ma2-2", char: "矮", pinyin: "ǎi" },
        { target: "m2-3", label: "③ 重大象 🐘", emoji: "🐘", answer: "ma2-3", char: "轻", pinyin: "qīng" },
        { target: "m2-4", label: "④ 大西瓜 🍉", emoji: "🍉", answer: "ma2-4", char: "小", pinyin: "xiǎo" },
        { target: "m2-5", label: "⑤ 粗树干 🪵", emoji: "🪵", answer: "ma2-5", char: "细", pinyin: "xì" },
        { target: "m2-6", label: "⑥ 厚字典 📚", emoji: "📚", answer: "ma2-6", char: "薄", pinyin: "báo" }
      ],
      shuffledAnswers: ["ma2-2", "ma2-4", "ma2-1", "ma2-6", "ma2-3", "ma2-5"]
    },
    choices2: [
      { qid: "M2-2-1", prompt: "比长短时，两根绳子的一端必须要？", title: "比长短的标准", tip: "比长短必须一端对齐，才能准确比较另一端。", options: [{ text: "对齐（平齐）", correct: true }, { text: "随便放", correct: false }] },
      { qid: "M2-2-2", prompt: "长颈鹿和小兔子比高矮，谁更高？", title: "比高矮辨析", tip: "长颈鹿脖子长个子高，长颈鹿高。", options: [{ text: "长颈鹿高", correct: true }, { text: "小兔子高", correct: false }] },
      { qid: "M2-2-3", prompt: "跷跷板一头低下去，一头翘起来，低下去的一头说明？", title: "跷跷板比轻重", tip: "重的一头会把跷跷板压下去。", options: [{ text: "比较重", correct: true }, { text: "比较轻", correct: false }] },
      { qid: "M2-2-4", prompt: "一个气球和一个足球比轻重，谁更重？", title: "生活实物比轻重", tip: "足球是皮质实心的比充满空气的气球重得多。", options: [{ text: "足球重", correct: true }, { text: "气球重", correct: false }] }
    ],
    choices3: [
      { qid: "M2-3-1", prompt: "比高矮时，两个人应该站在？", title: "比高矮的前提", tip: "比高矮必须站在同一水平地面上，不能一个站在台阶上。", options: [{ text: "同一平地上", correct: true }, { text: "一个站桌上", correct: false }] },
      { qid: "M2-3-2", prompt: "一根直尺和一根弯曲的绳子拉直后相比，弯曲绳子拉直后变？", title: "曲直与长度", tip: "弯曲的拉直后往往更长。", options: [{ text: "更长", correct: true }, { text: "变短", correct: false }] },
      { qid: "M2-3-3", prompt: "大象和松鼠坐在天平两边，哪边会沉下去？", title: "天平比轻重", tip: "大象更重，大象那一端会沉下去。", options: [{ text: "大象端沉下去", correct: true }, { text: "松鼠端沉下去", correct: false }] },
      { qid: "M2-3-4", prompt: "同样大的两杯水，放进大石头的杯子水面会？", title: "体积与水位", tip: "大石头占空间大，水面升得更高。", options: [{ text: "升得更高", correct: true }, { text: "不变", correct: false }] }
    ],
    choices4: [
      { qid: "M2-4-1", prompt: "小明比小华高，小华比小李高，三个人中谁最高？", title: "传递性比较", tip: "小明 > 小华 > 小李，所以小明最高！", options: [{ text: "小明最高", correct: true }, { text: "小李最高", correct: false }] },
      { qid: "M2-4-2", prompt: "小红的铅笔长 5 格，小刚的铅笔长 3 格，谁的铅笔长？", title: "格子度量长度", tip: "5格比3格多，小红的铅笔长。", options: [{ text: "小红长", correct: true }, { text: "小刚长", correct: false }] },
      { qid: "M2-4-3", prompt: "最粗的树用双臂抱，抱不过来；最细的小树枝可以用？", title: "粗细概念", tip: "细的可以用两个手指捏住。", options: [{ text: "两只手指捏住", correct: true }, { text: "卡车运", correct: false }] },
      { qid: "M2-4-4", prompt: "一斤棉花和一斤铁相比，哪个更重？", title: "经典思维陷阱题", tip: "都是“一斤”，所以一样重！", options: [{ text: "一样重", correct: true }, { text: "铁更重", correct: false }] }
    ],
    choices5: [
      { qid: "M2-5-1", prompt: "爷爷和乐乐比年龄，谁的年龄大？", title: "生活中的大小对比", tip: "爷爷年龄大，乐乐年龄小。", options: [{ text: "爷爷大", correct: true }, { text: "乐乐大", correct: false }] },
      { qid: "M2-5-2", prompt: "汽车和自行车比跑的速度，谁更快？", title: "快慢对比", tip: "汽车开得比自行车快。", options: [{ text: "汽车快", correct: true }, { text: "自行车快", correct: false }] },
      { qid: "M2-5-3", prompt: "大客车和文具盒比大小，谁占的地方大？", title: "物体大小对比", tip: "大客车体积大很多。", options: [{ text: "大客车大", correct: true }, { text: "文具盒大", correct: false }] }
    ],
    choices6: [
      { qid: "M2-6-1", prompt: "乐乐喝了一半果汁，月亮喝光了，谁杯子里剩下的果汁多？", title: "剩余量观察", tip: "乐乐剩下一半，月亮没有了，乐乐多。", options: [{ text: "乐乐杯子里多", correct: true }, { text: "月亮杯子里多", correct: false }] },
      { qid: "M2-6-2", prompt: "三根绳子打结，打结最多的绳子原来？", title: "打结思维拓展", tip: "打结会消耗绳长。", options: [{ text: "原来最长", correct: true }, { text: "原来最短", correct: false }] },
      { qid: "M2-6-3", prompt: "把一块大石头和一个小纸团丢进水里，谁沉得更快？", title: "重力感知", tip: "大石头重迅速沉底。", options: [{ text: "大石头沉底", correct: true }, { text: "小纸团沉底", correct: false }] },
      { qid: "M2-6-4", prompt: "比一比：1米长的铁丝和1米长的木棍，谁长？", title: "等长判断", tip: "都是1米长，一样长！", options: [{ text: "一样长", correct: true }, { text: "铁丝长", correct: false }] }
    ],
    choices7: [
      { qid: "M2-7-1", prompt: "小白兔拔了4个大萝卜和2个小萝卜，一共有几个萝卜？", title: "生活加法应用", tip: "4 + 2 = 6 个萝卜。", options: [{ text: "6 个", correct: true }, { text: "5 个", correct: false }] },
      { qid: "M2-7-2", prompt: "一根绳子长 6 米，剪掉 2 米，还剩多少米？", title: "长度减法问题", tip: "6 - 2 = 4 米。", options: [{ text: "4 米", correct: true }, { text: "8 米", correct: false }] },
      { qid: "M2-7-3", prompt: "小明拿了3个红气球，小红拿了3个黄气球，两人一共有几个？", title: "相同数相加", tip: "3 + 3 = 6 个气球。", options: [{ text: "6 个", correct: true }, { text: "5 个", correct: false }] },
      { qid: "M2-7-4", prompt: "盘子里有5块西瓜，小猪吃了4块，还剩几块？", title: "简单生活减法", tip: "5 - 4 = 1 块西瓜。", options: [{ text: "1 块", correct: true }, { text: "2 块", correct: false }] }
    ],
    poem: {
      text: "比长短，一头平；比高矮，平地站；比轻重，天平看；重的一头向下沉，轻的一头向上翻！",
      btn1: "🗣️ 我会熟练朗诵《比多少儿歌》 (+6分)",
      btn2: "🏆 一端对齐方法我记牢了 (+6分)"
    }
  }
];

// 补充第 3 ~ 20 套数学试卷大纲生成器
const mathUnitsMeta = [
  // 位置
  { id: 3, unit: "第二单元：位置", title: "第 03 套：上下前后方位认知卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "空间方位：物体的上下、前后的相对位置关系辨识。" },
  { id: 4, unit: "第二单元：位置", title: "第 04 套：左右相对性与排队第几个卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "分清左手和右手、排队从左数/从右数第几个与一共有几人。" },
  // 1~5加减
  { id: 5, unit: "第三单元：1~5的认识与加减", title: "第 05 套：1~5各数的认识与分与合卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "1~5的基数与序数含义、数的分解与组成（分与合）。" },
  { id: 6, unit: "第三单元：1~5的认识与加减", title: "第 06 套：1~5的加减法与比大小（> < =）卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "大于号、小于号与等于号使用，加减法算理与“0”的加减。" },
  // 认识图形
  { id: 7, unit: "第四单元：认识图形（一）", title: "第 07 套：长方体正方体圆柱球认知卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "认识长方体、正方体、圆柱和球四大立体图形基本特征。" },
  { id: 8, unit: "第四单元：认识图形（一）", title: "第 08 套：立体图形拼搭与生活实物分类卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "能滚动的图形、拼搭积木数量数数、魔方易拉罐乒乓球分类。" },
  // 6~10加减
  { id: 9, unit: "第五单元：6~10的认识与加减", title: "第 09 套：6~10的加减法与连加连减卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "6、7、8、9、10的分与合，连加、连减口算速算过关。" },
  { id: 10, unit: "第五单元：6~10的认识与加减", title: "第 10 套：加减混合与看图列式解决问题卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "一图四式、问号在不同位置的看图列算式与加减混合运算。" },
  // 期中大考
  { id: 11, unit: "🌟 数学期中大考", title: "第 11 套：期中1~10数与运算实战过关卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "期中前半学期1~10口算、分与合、比大小综合大检阅。" },
  { id: 12, unit: "🌟 数学期中大考", title: "第 12 套：期中位置图形与排队问题冲刺卷", tag: "期中冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "左右排队、图形数数与综合应用题半期满分测试。" },
  // 11~20各数
  { id: 13, unit: "第六单元：11~20各数的认识", title: "第 13 套：11~20各数读写与数位个位十位卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "1个十和几个一、计数器认识十位与个位、数序排列。" },
  { id: 14, unit: "第六单元：11~20各数的认识", title: "第 14 套：十几加几与相应减法提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "不进位加减法（如 10+3=13, 15-5=10, 12+3=15）与比大小。" },
  // 认识钟表
  { id: 15, unit: "第七单元：认识钟表", title: "第 15 套：分针时针与整时认知卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "认识分针长时针短，分针指着12时针指着几就是几时。" },
  { id: 16, unit: "第七单元：认识钟表", title: "第 16 套：半时与过1小时是几时提优卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "认识几时半（分针指着6），推算1小时前和1小时后是几时。" },
  // 20以内进位加法
  { id: 17, unit: "第八单元：20以内进位加法", title: "第 17 套：9加几与凑十法基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "核心算法“凑十法”：看大数拆小数，见9想1凑成十。" },
  { id: 18, unit: "第八单元：20以内进位加法", title: "第 18 套：8/7/6加几技巧与解决问题卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "见8想2、见7想3，解决“原来有多少/一共有多少”的实际问题。" },
  // 期末大决战
  { id: 19, unit: "👑 数学期末终极大决战", title: "第 19 套：全册易错题避坑冲刺大考卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "全册容易扣分的排队陷阱、两数之间有几个数、数图形漏洞扫除。" },
  { id: 20, unit: "👑 数学期末终极大决战", title: "第 20 套：一年级上册数学全真期末统考卷", tag: "期末冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "完全对标人教版期末统考标准的 100 分综合毕业大试卷。" }
];

// 针对单元精心配置专属题目库
function buildDetailedMathPaper(meta) {
  const id = meta.id;
  
  // 匹配连连看（根据单元主题）
  let matchingPairs = [];
  let matchingTitle = "核心连连看：算式或概念连线。";
  let matchingTip = "点击左侧，连到右侧正确答案";

  if (id === 3 || id === 4) {
    // 位置单元
    matchingTitle = "方位连连看：看生活中的物体，辨析空间相对方位。";
    matchingTip = "找出生活位置与方位词的对应";
    matchingPairs = [
      { target: `m${id}-1`, label: "① 天空中的小鸟 🐦", emoji: "🐦", answer: `ma${id}-1`, char: "上面", pinyin: "shàng" },
      { target: `m${id}-2`, label: "② 地面上的小草 🌱", emoji: "🌱", answer: `ma${id}-2`, char: "下面", pinyin: "xià" },
      { target: `m${id}-3`, label: "③ 领队走在最前 🏃", emoji: "🏃", answer: `ma${id}-3`, char: "前面", pinyin: "qián" },
      { target: `m${id}-4`, label: "④ 小狗跟在最后 🐕", emoji: "🐕", answer: `ma${id}-4`, char: "后面", pinyin: "hòu" },
      { target: `m${id}-5`, label: "⑤ 写字拿筷子的手 ✍️", emoji: "✍️", answer: `ma${id}-5`, char: "右手", pinyin: "yòu" },
      { target: `m${id}-6`, label: "⑥ 压着本子的手 ✋", emoji: "✋", answer: `ma${id}-6`, char: "左手", pinyin: "zuǒ" }
    ];
  } else if (id === 5 || id === 6) {
    // 1~5加减
    matchingTitle = "算式连连看：口算 5 以内加减法，连到正确的得数。";
    matchingTip = "口算结果，快速连线";
    matchingPairs = [
      { target: `m${id}-1`, label: "① 2 + 1 = ？", emoji: "➕", answer: `ma${id}-1`, char: "3", pinyin: "sān" },
      { target: `m${id}-2`, label: "② 4 + 1 = ？", emoji: "➕", answer: `ma${id}-2`, char: "5", pinyin: "wǔ" },
      { target: `m${id}-3`, label: "③ 5 - 1 = ？", emoji: "➖", answer: `ma${id}-3`, char: "4", pinyin: "sì" },
      { target: `m${id}-4`, label: "④ 3 - 1 = ？", emoji: "➖", answer: `ma${id}-4`, char: "2", pinyin: "èr" },
      { target: `m${id}-5`, label: "⑤ 1 + 0 = ？", emoji: "➕", answer: `ma${id}-5`, char: "1", pinyin: "yī" },
      { target: `m${id}-6`, label: "⑥ 3 - 3 = ？", emoji: "➖", answer: `ma${id}-6`, char: "0", pinyin: "líng" }
    ];
  } else if (id === 7 || id === 8) {
    // 认识图形
    matchingTitle = "立体图形连连看：把生活实物连到对应的几何图形名称。";
    matchingTip = "看实物特征，连到对应图形";
    matchingPairs = [
      { target: `m${id}-1`, label: "① 魔方积木 🎲", emoji: "🎲", answer: `ma${id}-1`, char: "正方体", pinyin: "zhèng" },
      { target: `m${id}-2`, label: "② 牙膏盒子 📦", emoji: "📦", answer: `ma${id}-2`, char: "长方体", pinyin: "cháng" },
      { target: `m${id}-3`, label: "③ 可乐易拉罐 🥫", emoji: "🥫", answer: `ma${id}-3`, char: "圆柱", pinyin: "yuán" },
      { target: `m${id}-4`, label: "④ 足球皮球 ⚽", emoji: "⚽", answer: `ma${id}-4`, char: "球", pinyin: "qiú" },
      { target: `m${id}-5`, label: "⑤ 乒乓球 🏓", emoji: "🏓", answer: `ma${id}-5`, char: "球", pinyin: "qiú" },
      { target: `m${id}-6`, label: "⑥ 铅笔桶 🪣", emoji: "🪣", answer: `ma${id}-6`, char: "圆柱", pinyin: "yuán" }
    ];
  } else if (id === 9 || id === 10) {
    // 6~10加减
    matchingTitle = "凑十连连看：好朋友手拉手，哪两个数合起来是 10？";
    matchingTip = "一九一九好朋友，二八二八手拉手";
    matchingPairs = [
      { target: `m${id}-1`, label: "① 数字 9 🤝", emoji: "9️⃣", answer: `ma${id}-1`, char: "1", pinyin: "yī" },
      { target: `m${id}-2`, label: "② 数字 8 🤝", emoji: "8️⃣", answer: `ma${id}-2`, char: "2", pinyin: "èr" },
      { target: `m${id}-3`, label: "③ 数字 7 🤝", emoji: "7️⃣", answer: `ma${id}-3`, char: "3", pinyin: "sān" },
      { target: `m${id}-4`, label: "④ 数字 6 🤝", emoji: "6️⃣", answer: `ma${id}-4`, char: "4", pinyin: "sì" },
      { target: `m${id}-5`, label: "⑤ 数字 5 🤝", emoji: "5️⃣", answer: `ma${id}-5`, char: "5", pinyin: "wǔ" },
      { target: `m${id}-6`, label: "⑥ 数字 10 🤝", emoji: "🔟", answer: `ma${id}-6`, char: "0", pinyin: "líng" }
    ];
  } else if (id === 15 || id === 16) {
    // 认识钟表
    matchingTitle = "认识钟表连连看：看钟表指针，连到对应的作息时刻。";
    matchingTip = "分针指着12是整时，分针指着6是半时";
    matchingPairs = [
      { target: `m${id}-1`, label: "① 早上起床 ⏰", emoji: "⏰", answer: `ma${id}-1`, char: "7:00", pinyin: "七时" },
      { target: `m${id}-2`, label: "② 上午上课 🏫", emoji: "🏫", answer: `ma${id}-2`, char: "8:00", pinyin: "八时" },
      { target: `m${id}-3`, label: "③ 中午吃饭 🍚", emoji: "🍚", answer: `ma${id}-3`, char: "12:00", pinyin: "十二时" },
      { target: `m${id}-4`, label: "④ 下午放学 🎒", emoji: "🎒", answer: `ma${id}-4`, char: "4:00", pinyin: "四时" },
      { target: `m${id}-5`, label: "⑤ 晚上睡觉 🛏️", emoji: "🛏️", answer: `ma${id}-5`, char: "9:00", pinyin: "九时" },
      { target: `m${id}-6`, label: "⑥ 午休时刻 ☀️", emoji: "☀️", answer: `ma${id}-6`, char: "1:00", pinyin: "一时" }
    ];
  } else if (id === 17 || id === 18) {
    // 20以内进位加法
    matchingTitle = "进位加法连连看：用“凑十法”快速口算，连到对应得数。";
    matchingTip = "看大数拆小数，凑成十再加几";
    matchingPairs = [
      { target: `m${id}-1`, label: "① 9 + 2 = ？", emoji: "🧮", answer: `ma${id}-1`, char: "11", pinyin: "shíyī" },
      { target: `m${id}-2`, label: "② 9 + 4 = ？", emoji: "🧮", answer: `ma${id}-2`, char: "13", pinyin: "shísān" },
      { target: `m${id}-3`, label: "③ 8 + 4 = ？", emoji: "🧮", answer: `ma${id}-3`, char: "12", pinyin: "shí'èr" },
      { target: `m${id}-4`, label: "④ 8 + 6 = ？", emoji: "🧮", answer: `ma${id}-4`, char: "14", pinyin: "shísì" },
      { target: `m${id}-5`, label: "⑤ 7 + 8 = ？", emoji: "🧮", answer: `ma${id}-5`, char: "15", pinyin: "shíwǔ" },
      { target: `m${id}-6`, label: "⑥ 9 + 7 = ？", emoji: "🧮", answer: `ma${id}-6`, char: "16", pinyin: "shíliù" }
    ];
  } else {
    // 综合/期中/期末/11~20各数
    matchingTitle = "综合速算连连看：计算算式，准确连线到正确结果。";
    matchingTip = "细心口算，稳拿满分";
    matchingPairs = [
      { target: `m${id}-1`, label: "① 10 + 3 = ？", emoji: "🔢", answer: `ma${id}-1`, char: "13", pinyin: "shísān" },
      { target: `m${id}-2`, label: "② 15 - 5 = ？", emoji: "🔢", answer: `ma${id}-2`, char: "10", pinyin: "shí" },
      { target: `m${id}-3`, label: "③ 8 + 3 = ？", emoji: "🔢", answer: `ma${id}-3`, char: "11", pinyin: "shíyī" },
      { target: `m${id}-4`, label: "④ 9 + 5 = ？", emoji: "🔢", answer: `ma${id}-4`, char: "14", pinyin: "shísì" },
      { target: `m${id}-5`, label: "⑤ 18 - 2 = ？", emoji: "🔢", answer: `ma${id}-5`, char: "16", pinyin: "shíliù" },
      { target: `m${id}-6`, label: "⑥ 10 + 10 = ？", emoji: "🔢", answer: `ma${id}-6`, char: "20", pinyin: "èrshí" }
    ];
  }

  const shuffledAnswers = [`ma${id}-2`, `ma${id}-4`, `ma${id}-1`, `ma${id}-6`, `ma${id}-3`, `ma${id}-5`];

  return {
    ...meta,
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: matchingTitle,
        score: 12,
        type: "matching",
        tip: matchingTip,
        pairs: matchingPairs,
        shuffledAnswers: shuffledAnswers
      },
      {
        num: "二",
        title: "比大小与符号小法官：在○里填入 >、< 或 = 。",
        score: 8,
        type: "choice",
        items: [
          { qid: `MQ${id}-2-1`, prompt: `比大小：${id <= 6 ? '3 ○ 5' : id <= 12 ? '8 ○ 6' : '15 ○ 12'}，中间应该填？`, title: "两数比大小", tip: "开口朝大数，尖尖对小数。", options: [{ text: id <= 6 ? "<" : ">", correct: true }, { text: id <= 6 ? ">" : "<", correct: false }] },
          { qid: `MQ${id}-2-2`, prompt: `比大小：${id <= 6 ? '2 + 2 ○ 4' : id <= 12 ? '6 + 3 ○ 9' : '9 + 4 ○ 13'}，中间应该填？`, title: "算式与数相等", tip: "两边算式得数相等，用等于号（=）。", options: [{ text: "=", correct: true }, { text: ">", correct: false }] },
          { qid: `MQ${id}-2-3`, prompt: `比大小：${id <= 6 ? '5 - 1 ○ 3' : id <= 12 ? '10 - 2 ○ 7' : '18 - 8 ○ 11'}，中间应该填？`, title: "减法结果比大小", tip: "先算出减法得数，再比大小。", options: [{ text: id > 12 ? "<" : ">", correct: true }, { text: id > 12 ? ">" : "<", correct: false }] },
          { qid: `MQ${id}-2-4`, prompt: `比大小：${id <= 10 ? '0 ○ 1' : '19 ○ 20'}，中间应该填？`, title: "数序比大小", tip: "后面的数比前面的数大。", options: [{ text: "<", correct: true }, { text: ">", correct: false }] }
        ]
      },
      {
        num: "三",
        title: "数的分与合及概念：做数字拼图小能手。",
        score: 16,
        type: "choice",
        items: [
          { qid: `MQ${id}-3-1`, prompt: id <= 6 ? "5 可以分成 2 和几？" : id <= 12 ? "9 可以分成 4 和几？" : "1个十和5个一合起来是多少？", title: id <= 12 ? "数的分与合" : "十几的组成", tip: id <= 6 ? "2 + 3 = 5。" : id <= 12 ? "4 + 5 = 9。" : "十位是1，个位是5，合起来是15。", options: [{ text: id <= 6 ? "3" : id <= 12 ? "5" : "15", correct: true }, { text: id <= 6 ? "4" : id <= 12 ? "6" : "51", correct: false }] },
          { qid: `MQ${id}-3-2`, prompt: id <= 6 ? "几和 1 可以合成 4？" : id <= 12 ? "几和 3 可以合成 10？" : "20 里面有几个十？", title: "数的组成概念", tip: id <= 6 ? "3 + 1 = 4。" : id <= 12 ? "7 + 3 = 10。" : "20表示2个十。", options: [{ text: id <= 6 ? "3" : id <= 12 ? "7" : "2 个十", correct: true }, { text: id <= 6 ? "2" : id <= 12 ? "6" : "20 个十", correct: false }] },
          { qid: `MQ${id}-3-3`, prompt: id <= 10 ? "和 6 相邻的两个数分别是？" : "在计数器上，从右边起第一位是？", title: id <= 10 ? "相邻数认知" : "认识数位", tip: id <= 10 ? "6前面的数是5，后面的数是7。" : "右起第一位是个位，第二位是十位。", options: [{ text: id <= 10 ? "5 和 7" : "个位", correct: true }, { text: id <= 10 ? "6 和 8" : "十位", correct: false }] },
          { qid: `MQ${id}-3-4`, prompt: id <= 10 ? "比 7 大且比 9 小的数是几？" : "14 里面的“1”在十位上，表示？", title: id <= 10 ? "两数之间数" : "数位含义", tip: id <= 10 ? "7 和 9 中间的数是 8。" : "十位上的1表示1个十。", options: [{ text: id <= 10 ? "8" : "1 个十", correct: true }, { text: id <= 10 ? "6" : "1 个一", correct: false }] }
        ]
      },
      {
        num: "四",
        title: "口算速度小达人：选出正确计算结果。",
        score: 16,
        type: "choice",
        items: [
          { qid: `MQ${id}-4-1`, prompt: id <= 6 ? "3 + 2 = ( )" : id <= 12 ? "6 + 4 = ( )" : "9 + 5 = ( )（想：9加1得10，10加4得14）", title: "核心加法计算", tip: "口算加法，细心算出结果。", options: [{ text: id <= 6 ? "5" : id <= 12 ? "10" : "14", correct: true }, { text: id <= 6 ? "4" : id <= 12 ? "9" : "13", correct: false }] },
          { qid: `MQ${id}-4-2`, prompt: id <= 6 ? "5 - 3 = ( )" : id <= 12 ? "8 - 3 = ( )" : "8 + 7 = ( )（想：8加2得10，10加5得15）", title: "核心算式口算", tip: "进位加法凑十快准稳。", options: [{ text: id <= 6 ? "2" : id <= 12 ? "5" : "15", correct: true }, { text: id <= 6 ? "1" : id <= 12 ? "6" : "16", correct: false }] },
          { qid: `MQ${id}-4-3`, prompt: id <= 10 ? "4 + 0 = ( )" : "16 - 6 = ( )", title: "特性算式", tip: "任何数加0仍得原数；十几减几得10。", options: [{ text: id <= 10 ? "4" : "10", correct: true }, { text: id <= 10 ? "0" : "6", correct: false }] },
          { qid: `MQ${id}-4-4`, prompt: id <= 10 ? "2 + 3 + 2 = ( )" : "3 + 6 + 5 = ( )", title: "连加计算", tip: "连加算式从左往右一步步算。", options: [{ text: id <= 10 ? "7" : "14", correct: true }, { text: id <= 10 ? "8" : "15", correct: false }] }
        ]
      },
      {
        num: "五",
        title: "图形与钟表侦探：火眼金睛辨认。",
        score: 12,
        type: "choice",
        items: [
          { qid: `MQ${id}-5-1`, prompt: (id === 7 || id === 8 || id >= 19) ? "圆滚滚、能向各个方向任意滚动的是？" : (id === 15 || id === 16) ? "钟面上又细又长走得快的是？" : "长方形的面摸起来是？", title: "图形与钟表特征", tip: "球任意滚动；分针长，时针短。", options: [{ text: (id === 15 || id === 16) ? "分针" : "球", correct: true }, { text: (id === 15 || id === 16) ? "时针" : "圆柱", correct: false }] },
          { qid: `MQ${id}-5-2`, prompt: (id === 15 || id === 16) ? "分针指着12，时针指着6，现在是几时？" : "魔方是由6个完全相同的什么图形组成的？", title: "正方体与钟表辨认", tip: "魔方是正方体；时针指6是6时整。", options: [{ text: (id === 15 || id === 16) ? "6 时" : "正方体", correct: true }, { text: (id === 15 || id === 16) ? "12 时" : "长方体", correct: false }] },
          { qid: `MQ${id}-5-3`, prompt: (id === 15 || id === 16) ? "分针指着6，时针走过4还没到5，是？" : "用4个同样大小的小正方体，( )拼成一个大正方体？", title: "空间想象与时间", tip: "拼成大正方体至少需要8个小正方体；分针指6是半时。", options: [{ text: (id === 15 || id === 16) ? "4 时半" : "不能（至少需8个）", correct: true }, { text: (id === 15 || id === 16) ? "5 时半" : "能拼成", correct: false }] }
        ]
      },
      {
        num: "六",
        title: "位置与排队问题：做清醒的小指挥。",
        score: 12,
        type: "choice",
        items: [
          { qid: `MQ${id}-6-1`, prompt: "右手拿着文具，那么系红领巾的胸口在身体的？", title: "基本方位辨析", tip: "前胸后背，胸前在前面。", options: [{ text: "前面", correct: true }, { text: "后面", correct: false }] },
          { qid: `MQ${id}-6-2`, prompt: "红灯在黄灯的上面，绿灯在黄灯的下面，最上面的灯是？", title: "上下位置推理", tip: "红灯在最上面。", options: [{ text: "红灯", correct: true }, { text: "绿灯", correct: false }] },
          { qid: `MQ${id}-6-3`, prompt: "小朋友排队，从前往后数小华排第3，从后往前数小华排第4，这一队一共有几人？", title: "排队经典易错题", tip: "3 + 4 - 1 = 6人（小华数了两次，要减去1）。", options: [{ text: "6 人", correct: true }, { text: "7 人", correct: false }] },
          { qid: `MQ${id}-6-4`, prompt: "小兔前面有 3 只动物，后面有 2 只动物，这一队一共有几只动物？", title: "排队前后人数计算", tip: "3 + 2 + 1(小兔自己) = 6只。", options: [{ text: "6 只", correct: true }, { text: "5 只", correct: false }] }
        ]
      },
      {
        num: "七",
        title: "看图列式与解决问题：生活中的数学。",
        score: 12,
        type: "choice",
        items: [
          { qid: `MQ${id}-7-1`, prompt: "树上有8只鸟，飞走了3只，又飞来了2只，现在树上有几只鸟？", title: "加减混合实际问题", tip: "8 - 3 + 2 = 7 只。", options: [{ text: "7 只", correct: true }, { text: "6 只", correct: false }] },
          { qid: `MQ${id}-7-2`, prompt: "乐乐折了9只千纸鹤，月亮折了6只，他们一共折了多少只？", title: "进位加法解决问题", tip: "9 + 6 = 15 只。", options: [{ text: "15 只", correct: true }, { text: "14 只", correct: false }] },
          { qid: `MQ${id}-7-3`, prompt: "盒子里原来有14块橡皮，借给同学4块，盒子里还剩几块？", title: "十几减几解决问题", tip: "14 - 4 = 10 块。", options: [{ text: "10 块", correct: true }, { text: "18 块", correct: false }] },
          { qid: `MQ${id}-7-4`, prompt: "小猴采了5个桃子，大猴采了8个桃子，大猴比小猴多采几个？", title: "比多少减法问题", tip: "8 - 5 = 3 个桃子。", options: [{ text: "3 个", correct: true }, { text: "13 个", correct: false }] }
        ]
      },
      {
        num: "八",
        title: "数学儿歌与数学素养：熟读儿歌，轻松做题。",
        score: 12,
        type: "poem",
        text: (id <= 10) ? "一九一九好朋友，二八二八手拉手，三七三七真亲密，四六四六一起走，五五凑成一双手！" : "看大数，分小数，凑成十，加剩数。九加一，八加二，七加三，六加四，五五相凑成十数！",
        buttons: [
          { label: "🗣️ 我会流利背诵《凑十儿歌》 (+6分)", pts: 6 },
          { label: "🏆 凑十法口诀我能秒答 (+6分)", pts: 6 }
        ]
      }
    ]
  };
}

function formatCurriculumPaper(raw) {
  return {
    id: raw.id,
    unit: raw.unit,
    title: raw.title,
    tag: raw.tag,
    tagColor: raw.tagColor,
    desc: raw.desc,
    timeLimit: raw.timeLimit || 25,
    sections: [
      {
        num: "一",
        title: raw.matching.title,
        score: 12,
        type: "matching",
        tip: raw.matching.tip,
        pairs: raw.matching.pairs,
        shuffledAnswers: raw.matching.shuffledAnswers
      },
      {
        num: "二",
        title: "比大小与符号小法官：在○里填入 >、< 或 = 。",
        score: 8,
        type: "choice",
        items: raw.choices2
      },
      {
        num: "三",
        title: "数的分与合及概念：做数字拼图小能手。",
        score: 16,
        type: "choice",
        items: raw.choices3
      },
      {
        num: "四",
        title: "口算速度小达人：选出正确计算结果。",
        score: 16,
        type: "choice",
        items: raw.choices4
      },
      {
        num: "五",
        title: "图形与观察辨析：火眼金睛辨认。",
        score: 12,
        type: "choice",
        items: raw.choices5
      },
      {
        num: "六",
        title: "位置与排队问题：做清醒的小指挥。",
        score: 12,
        type: "choice",
        items: raw.choices6
      },
      {
        num: "七",
        title: "看图列式与解决问题：生活中的数学。",
        score: 12,
        type: "choice",
        items: raw.choices7
      },
      {
        num: "八",
        title: "数学儿歌与数学素养：熟读儿歌，轻松做题。",
        score: 12,
        type: "poem",
        text: raw.poem.text,
        buttons: [
          { label: raw.poem.btn1, pts: 6 },
          { label: raw.poem.btn2, pts: 6 }
        ]
      }
    ]
  };
}

const allMathQuizzes = [
  formatCurriculumPaper(mathCurriculumData[0]),
  formatCurriculumPaper(mathCurriculumData[1]),
  ...mathUnitsMeta.map(m => buildDetailedMathPaper(m))
];

fs.writeFileSync(mathOutPath, `// 部编人教版小学数学一年级上册 · 20套全真通关大考卷权威题库\nwindow.MATH_DATABASE = ${JSON.stringify(allMathQuizzes, null, 2)};\n`, 'utf-8');
console.log(`✅ 数学题库成功更新：20套大卷已保存至 ${mathOutPath}`);


// =========================================================================
// 2. 英语 16 套趣味大卷题库 (严格对标人教新起点/PEP版一年级上册大纲)
// =========================================================================

const englishUnitsMeta = [
  // Unit 1: School
  { id: 1, unit: "Unit 1: School", title: "第 01 套：学校与核心文具认读基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "book, ruler, pencil, eraser, schoolbag 核心文具认知。" },
  { id: 2, unit: "Unit 1: School", title: "第 02 套：课堂日常交际指令提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Stand up, Sit down, Open your book, Show me your pencil." },
  // Unit 2: Face & Body
  { id: 3, unit: "Unit 2: Face & Body", title: "第 03 套：身体五官词汇认知基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "eye, ear, nose, mouth, face, hand, foot 五官四肢大点兵。" },
  { id: 4, unit: "Unit 2: Face & Body", title: "第 04 套：身体动作与指令游戏提优卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "Touch your nose! Look at me. This is my mouth." },
  // Unit 3: Animals
  { id: 5, unit: "Unit 3: Animals", title: "第 05 套：可爱动物词汇认读基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "cat, dog, bird, monkey, tiger, panda, rabbit 动物大狂欢。" },
  { id: 6, unit: "Unit 3: Animals", title: "第 06 套：动物问答与喜好表达提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "What's this? It's a cat. Do you like dogs? I like pandas." },
  // 期中大考
  { id: 7, unit: "🌟 英语期中大考", title: "第 07 套：期中听读识词实战过关卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "学校、五官与动物核心词汇听读连线与分类检测。" },
  { id: 8, unit: "🌟 英语期中大考", title: "第 08 套：期中情境交际模拟冲刺卷", tag: "期中模拟", tagColor: "bg-rose-100 text-rose-800", desc: "问候语、课堂指令与情境问答全真模拟测试。" },
  // Unit 4: Numbers
  { id: 9, unit: "Unit 4: Numbers", title: "第 09 套：数字 1~10 认读基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "one, two, three, four, five, six, seven, eight, nine, ten 英文数字。" },
  { id: 10, unit: "Unit 4: Numbers", title: "第 10 套：数数与数量问答提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "How many? Three books. Five apples. 点数问答实践。" },
  // Unit 5: Colours
  { id: 11, unit: "Unit 5: Colours", title: "第 11 套：五彩缤纷颜色基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "red, yellow, blue, green, black, white 颜色单词牢记。" },
  { id: 12, unit: "Unit 5: Colours", title: "第 12 套：颜色与生活物品匹配提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Show me blue. A red apple. What colour is it? It's green." },
  // Unit 6: Fruit & Food
  { id: 13, unit: "Unit 6: Fruit & Food", title: "第 13 套：美味水果与食物基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "apple, banana, pear, orange, water, milk 美食词汇。" },
  { id: 14, unit: "Unit 6: Fruit & Food", title: "第 14 套：日常饮食与礼貌表达提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "I like bananas. Can I have an apple? Thank you." },
  // 期末大决战
  { id: 15, unit: "👑 英语期末终极大决战", title: "第 15 套：全册高频词汇分类总复习卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "文具、五官、动物、数字、颜色、水果全景大分类。" },
  { id: 16, unit: "👑 英语期末终极大决战", title: "第 16 套：一年级上册英语全真期末统考卷", tag: "期末冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "完全符合一年级期末考题标准的情境综合大测试。" }
];

function buildDetailedEnglishPaper(meta) {
  const id = meta.id;
  let matchingPairs = [];
  let matchingTitle = "Look and Match（看图连线）：把图片与英文单词连起来。";
  let matchingTip = "点击左侧图片，连到右侧正确单词";

  if (id === 1 || id === 2) {
    // School
    matchingPairs = [
      { target: `e${id}-1`, label: "① 书本 📖", emoji: "📖", answer: `ea${id}-1`, char: "book", pinyin: "书本" },
      { target: `e${id}-2`, label: "② 尺子 📏", emoji: "📏", answer: `ea${id}-2`, char: "ruler", pinyin: "尺子" },
      { target: `e${id}-3`, label: "③ 铅笔 ✏️", emoji: "✏️", answer: `ea${id}-3`, char: "pencil", pinyin: "铅笔" },
      { target: `e${id}-4`, label: "④ 橡皮 🧼", emoji: "🧼", answer: `ea${id}-4`, char: "eraser", pinyin: "橡皮" },
      { target: `e${id}-5`, label: "⑤ 书包 🎒", emoji: "🎒", answer: `ea${id}-5`, char: "schoolbag", pinyin: "书包" },
      { target: `e${id}-6`, label: "⑥ 钢笔 ✒️", emoji: "✒️", answer: `ea${id}-6`, char: "pen", pinyin: "钢笔" }
    ];
  } else if (id === 3 || id === 4) {
    // Face & Body
    matchingPairs = [
      { target: `e${id}-1`, label: "① 眼睛 👁️", emoji: "👁️", answer: `ea${id}-1`, char: "eye", pinyin: "眼睛" },
      { target: `e${id}-2`, label: "② 耳朵 👂", emoji: "👂", answer: `ea${id}-2`, char: "ear", pinyin: "耳朵" },
      { target: `e${id}-3`, label: "③ 鼻子 👃", emoji: "👃", answer: `ea${id}-3`, char: "nose", pinyin: "鼻子" },
      { target: `e${id}-4`, label: "④ 嘴巴 👄", emoji: "👄", answer: `ea${id}-4`, char: "mouth", pinyin: "嘴巴" },
      { target: `e${id}-5`, label: "⑤ 小手 ✋", emoji: "✋", answer: `ea${id}-5`, char: "hand", pinyin: "手" },
      { target: `e${id}-6`, label: "⑥ 脸蛋 👧", emoji: "👧", answer: `ea${id}-6`, char: "face", pinyin: "脸" }
    ];
  } else if (id === 5 || id === 6) {
    // Animals
    matchingPairs = [
      { target: `e${id}-1`, label: "① 小猫 🐱", emoji: "🐱", answer: `ea${id}-1`, char: "cat", pinyin: "小猫" },
      { target: `e${id}-2`, label: "② 小狗 🐶", emoji: "🐶", answer: `ea${id}-2`, char: "dog", pinyin: "小狗" },
      { target: `e${id}-3`, label: "③ 小鸟 🐦", emoji: "🐦", answer: `ea${id}-3`, char: "bird", pinyin: "小鸟" },
      { target: `e${id}-4`, label: "④ 猴子 🐵", emoji: "🐵", answer: `ea${id}-4`, char: "monkey", pinyin: "猴子" },
      { target: `e${id}-5`, label: "⑤ 熊猫 🐼", emoji: "🐼", answer: `ea${id}-5`, char: "panda", pinyin: "大熊猫" },
      { target: `e${id}-6`, label: "⑥ 兔子 🐰", emoji: "🐰", answer: `ea${id}-6`, char: "rabbit", pinyin: "兔子" }
    ];
  } else if (id === 9 || id === 10) {
    // Numbers
    matchingPairs = [
      { target: `e${id}-1`, label: "① 数字 1 1️⃣", emoji: "1️⃣", answer: `ea${id}-1`, char: "one", pinyin: "一" },
      { target: `e${id}-2`, label: "② 数字 2 2️⃣", emoji: "2️⃣", answer: `ea${id}-2`, char: "two", pinyin: "二" },
      { target: `e${id}-3`, label: "③ 数字 3 3️⃣", emoji: "3️⃣", answer: `ea${id}-3`, char: "three", pinyin: "三" },
      { target: `e${id}-4`, label: "④ 数字 4 4️⃣", emoji: "4️⃣", answer: `ea${id}-4`, char: "four", pinyin: "四" },
      { target: `e${id}-5`, label: "⑤ 数字 5 5️⃣", emoji: "5️⃣", answer: `ea${id}-5`, char: "five", pinyin: "五" },
      { target: `e${id}-6`, label: "⑥ 数字 6 6️⃣", emoji: "6️⃣", answer: `ea${id}-6`, char: "six", pinyin: "六" }
    ];
  } else if (id === 11 || id === 12) {
    // Colours
    matchingPairs = [
      { target: `e${id}-1`, label: "① 红色 🔴", emoji: "🔴", answer: `ea${id}-1`, char: "red", pinyin: "红色" },
      { target: `e${id}-2`, label: "② 黄色 🟡", emoji: "🟡", answer: `ea${id}-2`, char: "yellow", pinyin: "黄色" },
      { target: `e${id}-3`, label: "③ 蓝色 🔵", emoji: "🔵", answer: `ea${id}-3`, char: "blue", pinyin: "蓝色" },
      { target: `e${id}-4`, label: "④ 绿色 🟢", emoji: "🟢", answer: `ea${id}-4`, char: "green", pinyin: "绿色" },
      { target: `e${id}-5`, label: "⑤ 黑色 ⚫", emoji: "⚫", answer: `ea${id}-5`, char: "black", pinyin: "黑色" },
      { target: `e${id}-6`, label: "⑥ 白色 ⚪", emoji: "⚪", answer: `ea${id}-6`, char: "white", pinyin: "白色" }
    ];
  } else if (id === 13 || id === 14) {
    // Fruit & Food
    matchingPairs = [
      { target: `e${id}-1`, label: "① 苹果 🍎", emoji: "🍎", answer: `ea${id}-1`, char: "apple", pinyin: "苹果" },
      { target: `e${id}-2`, label: "② 香蕉 🍌", emoji: "🍌", answer: `ea${id}-2`, char: "banana", pinyin: "香蕉" },
      { target: `e${id}-3`, label: "③ 梨子 🍐", emoji: "🍐", answer: `ea${id}-3`, char: "pear", pinyin: "梨" },
      { target: `e${id}-4`, label: "④ 橙子 🍊", emoji: "🍊", answer: `ea${id}-4`, char: "orange", pinyin: "橙子" },
      { target: `e${id}-5`, label: "⑤ 牛奶 🥛", emoji: "🥛", answer: `ea${id}-5`, char: "milk", pinyin: "牛奶" },
      { target: `e${id}-6`, label: "⑥ 饮用水 💧", emoji: "💧", answer: `ea${id}-6`, char: "water", pinyin: "水" }
    ];
  } else {
    // 期中/期末综合
    matchingPairs = [
      { target: `e${id}-1`, label: "① 尺子 📏", emoji: "📏", answer: `ea${id}-1`, char: "ruler", pinyin: "尺子" },
      { target: `e${id}-2`, label: "② 眼睛 👁️", emoji: "👁️", answer: `ea${id}-2`, char: "eye", pinyin: "眼睛" },
      { target: `e${id}-3`, label: "③ 熊猫 🐼", emoji: "🐼", answer: `ea${id}-3`, char: "panda", pinyin: "大熊猫" },
      { target: `e${id}-4`, label: "④ 数字 7 7️⃣", emoji: "7️⃣", answer: `ea${id}-4`, char: "seven", pinyin: "七" },
      { target: `e${id}-5`, label: "⑤ 红色 🔴", emoji: "🔴", answer: `ea${id}-5`, char: "red", pinyin: "红色" },
      { target: `e${id}-6`, label: "⑥ 苹果 🍎", emoji: "🍎", answer: `ea${id}-6`, char: "apple", pinyin: "苹果" }
    ];
  }

  const shuffledAnswers = [`ea${id}-2`, `ea${id}-4`, `ea${id}-1`, `ea${id}-6`, `ea${id}-3`, `ea${id}-5`];

  return {
    ...meta,
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: matchingTitle,
        score: 12,
        type: "matching",
        tip: matchingTip,
        pairs: matchingPairs,
        shuffledAnswers: shuffledAnswers
      },
      {
        num: "二",
        title: "Listen and Choose（看词选义）：选出正确的中文意思。",
        score: 8,
        type: "choice",
        items: [
          { qid: `EQ${id}-2-1`, prompt: id <= 2 ? "“pencil” 的中文意思是什么？" : id <= 4 ? "“nose” 的中文意思是什么？" : id <= 6 ? "“tiger” 的中文意思是什么？" : id <= 10 ? "“eight” 是数字几？" : "“blue” 是哪种颜色？", title: "单词释义理解", tip: "基础核心词汇认知。", options: [{ text: id <= 2 ? "铅笔" : id <= 4 ? "鼻子" : id <= 6 ? "老虎" : id <= 10 ? "8" : "蓝色", correct: true }, { text: id <= 2 ? "橡皮" : id <= 4 ? "耳朵" : id <= 6 ? "兔子" : id <= 10 ? "5" : "黄色", correct: false }] },
          { qid: `EQ${id}-2-2`, prompt: id <= 2 ? "“schoolbag” 指的是？" : id <= 4 ? "“mouth” 指的是？" : id <= 6 ? "“bird” 指的是？" : id <= 10 ? "“three” 是数字几？" : "“green” 是什么颜色？", title: "核心词义选择", tip: "记忆单词音形义。", options: [{ text: id <= 2 ? "书包" : id <= 4 ? "嘴巴" : id <= 6 ? "小鸟" : id <= 10 ? "3" : "绿色", correct: true }, { text: id <= 2 ? "铅笔盒" : id <= 4 ? "小手" : id <= 6 ? "猴子" : id <= 10 ? "6" : "黑色", correct: false }] },
          { qid: `EQ${id}-2-3`, prompt: "“teacher” 是我们最尊敬的？", title: "人物称呼", tip: "teacher 表示老师。", options: [{ text: "老师", correct: true }, { text: "同学", correct: false }] },
          { qid: `EQ${id}-2-4`, prompt: "遇到朋友打招呼，说 “Hello!” 是什么意思？", title: "日常问候", tip: "Hello / Hi 表示你好！", options: [{ text: "你好！", correct: true }, { text: "再见！", correct: false }] }
        ]
      },
      {
        num: "三",
        title: "Read and Select（图文对应）：选择最符合情境的选项。",
        score: 16,
        type: "choice",
        items: [
          { qid: `EQ${id}-3-1`, prompt: id <= 2 ? "老师说：“Show me your ruler.” 你应该拿出什么？" : id <= 4 ? "老师说：“Touch your eye.” 你应该摸哪里？" : id <= 6 ? "看到一只可爱的猫咪，你会说：“It's a ( ) .”" : "问别人一共有多少个，用哪个疑问词？", title: "情境理解指令", tip: "听懂课堂关键指令。", options: [{ text: id <= 2 ? "拿出尺子" : id <= 4 ? "摸眼睛" : id <= 6 ? "cat" : "How many?", correct: true }, { text: id <= 2 ? "拿出铅笔" : id <= 4 ? "摸鼻子" : id <= 6 ? "dog" : "What colour?", correct: false }] },
          { qid: `EQ${id}-3-2`, prompt: "上课铃响了，班长喊：“Stand up!” 同学们应该？", title: "课堂指令起立", tip: "Stand up 表示起立，Sit down 表示坐下。", options: [{ text: "起立", correct: true }, { text: "坐下", correct: false }] },
          { qid: `EQ${id}-3-3`, prompt: "放学回家，和小伙伴说再见，应该说？", title: "道别礼貌用语", tip: "Goodbye 或 Bye-bye 表示再见。", options: [{ text: "Goodbye!", correct: true }, { text: "Good morning!", correct: false }] },
          { qid: `EQ${id}-3-4`, prompt: "早上见到老师和同学，应该有礼貌地说？", title: "早晨问候", tip: "Good morning 表示早上好。", options: [{ text: "Good morning!", correct: true }, { text: "Good evening!", correct: false }] }
        ]
      },
      {
        num: "四",
        title: "Daily Expressions（交际小达人）：选出正确的应答语。",
        score: 16,
        type: "choice",
        items: [
          { qid: `EQ${id}-4-1`, prompt: "别人对你说：“Thank you!” 你应该回答？", title: "礼貌答谢", tip: "You're welcome.（不客气。）", options: [{ text: "You're welcome.", correct: true }, { text: "No, thanks.", correct: false }] },
          { qid: `EQ${id}-4-2`, prompt: "当你想知道对方的名字时，可以说？", title: "询问姓名", tip: "What's your name? 询问名字。", options: [{ text: "What's your name?", correct: true }, { text: "How are you?", correct: false }] },
          { qid: `EQ${id}-4-3`, prompt: "有人问：“What's this?”（这是什么？），你可以回答？", title: "物品指认回答", tip: "It's a ... 回答这是什么。", options: [{ text: "It's a book.", correct: true }, { text: "I'm seven.", correct: false }] },
          { qid: `EQ${id}-4-4`, prompt: "别人问你：“How are you?” 你感觉很好，可以回答？", title: "身体近况问答", tip: "I'm fine, thank you.（我很好，谢谢。）", options: [{ text: "I'm fine, thank you.", correct: true }, { text: "I am Lele.", correct: false }] }
        ]
      },
      {
        num: "五",
        title: "Category Master（单词分类官）：选出不同类的单词。",
        score: 12,
        type: "choice",
        items: [
          { qid: `EQ${id}-5-1`, prompt: "选出不同类的单词：A. ruler（尺子） B. pencil（铅笔） C. cat（小猫）", title: "动物与文具分类", tip: "cat 是动物，其它两个是文具。", options: [{ text: "C. cat", correct: true }, { text: "A. ruler", correct: false }] },
          { qid: `EQ${id}-5-2`, prompt: "选出不同类的单词：A. eye（眼睛） B. nose（鼻子） C. red（红色）", title: "颜色与器官分类", tip: "red 是颜色，其它两个是五官部位。", options: [{ text: "C. red", correct: true }, { text: "A. eye", correct: false }] },
          { qid: `EQ${id}-5-3`, prompt: "选出不同类的单词：A. one（一） B. two（二） C. apple（苹果）", title: "数字与水果分类", tip: "apple 是食物水果，其它两个是数字。", options: [{ text: "C. apple", correct: true }, { text: "B. two", correct: false }] }
        ]
      },
      {
        num: "六",
        title: "Sentence Sense（句子小能手）：选出最合适的句子。",
        score: 12,
        type: "choice",
        items: [
          { qid: `EQ${id}-6-1`, prompt: "当你向大家介绍你的好朋友月亮时，可以说？", title: "介绍他人句型", tip: "This is Yueliang.（这是月亮。）", options: [{ text: "This is Yueliang.", correct: true }, { text: "I am Yueliang.", correct: false }] },
          { qid: `EQ${id}-6-2`, prompt: "当别人给你一个红苹果，你想表达“我喜欢苹果”，可以说？", title: "喜好表达", tip: "I like apples.（我喜欢苹果。）", options: [{ text: "I like apples.", correct: true }, { text: "I have a pen.", correct: false }] },
          { qid: `EQ${id}-6-3`, prompt: "桌子上有 4 支铅笔，用英语怎么数？", title: "数量搭配", tip: "Four pencils.（四支铅笔。）", options: [{ text: "Four pencils.", correct: true }, { text: "One pencil.", correct: false }] },
          { qid: `EQ${id}-6-4`, prompt: "“Show me your yellow crayon.” 中 yellow 指的是？", title: "颜色词汇理解", tip: "yellow 是黄色。", options: [{ text: "黄色", correct: true }, { text: "黑色", correct: false }] }
        ]
      },
      {
        num: "七",
        title: "Reading & Context（趣味情境判断）：看句子判断对错。",
        score: 12,
        type: "choice",
        items: [
          { qid: `EQ${id}-7-1`, prompt: "大熊猫最喜欢的食物是竹子，panda 是黑白相间的？", title: "大熊猫常识与英语", tip: "Pandas are black and white.", options: [{ text: "对（Right）", correct: true }, { text: "错（Wrong）", correct: false }] },
          { qid: `EQ${id}-7-2`, prompt: "“An apple a day keeps the doctor away.” 苹果是一种健康的水果？", title: "水果文化常识", tip: "一天一苹果，医生远离我。", options: [{ text: "对（Right）", correct: true }, { text: "错（Wrong）", correct: false }] },
          { qid: `EQ${id}-7-3`, prompt: "红绿灯中的红灯是 “Green”，绿灯是 “Red”？", title: "红绿灯颜色对应", tip: "红灯是 Red，绿灯是 Green，题目说反了！", options: [{ text: "错（Wrong）", correct: true }, { text: "对（Right）", correct: false }] },
          { qid: `EQ${id}-7-4`, prompt: "一只小狗四条腿，可以说 “A dog has four legs.”？", title: "动物与数字常识", tip: "小狗有4条腿（four legs）。", options: [{ text: "对（Right）", correct: true }, { text: "错（Wrong）", correct: false }] }
        ]
      },
      {
        num: "八",
        title: "English Chant & Song（英语儿歌大声唱）：唱出自信好口语。",
        score: 12,
        type: "poem",
        text: (id <= 8) ? "Hello, hello, how are you? I'm fine, I'm fine, thank you! One, two, three, look at me! Stand up, sit down, happy as can be!" : "Red, yellow, blue and green, stand up! Apple, banana, pear and orange, eat them up! One, two, three, four, five, dance and dive!",
        buttons: [
          { label: "🗣️ 我能大声朗读出优美英文歌谣 (+6分)", pts: 6 },
          { label: "🏆 英语单词发音准确自信 (+6分)", pts: 6 }
        ]
      }
    ]
  };
}

const allEnglishQuizzes = englishUnitsMeta.map(m => buildDetailedEnglishPaper(m));

fs.writeFileSync(englishOutPath, `// 人教版小学英语一年级上册 · 16套趣味通关大考卷权威题库\nwindow.ENGLISH_DATABASE = ${JSON.stringify(allEnglishQuizzes, null, 2)};\n`, 'utf-8');
console.log(`✅ 英语题库成功更新：16套大卷已保存至 ${englishOutPath}`);
console.log('🎉 所有数据构建完毕！');
