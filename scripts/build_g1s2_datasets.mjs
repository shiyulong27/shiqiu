import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';
const chineseOutPath = path.join(brainDir, 'quiz_data_g1s2.js');
const mathOutPath = path.join(brainDir, 'math_data_g1s2.js');
const englishOutPath = path.join(brainDir, 'english_data_g1s2.js');

console.log('🚀 开始构建部编人教版小学一年级下册【语文30套 + 数学20套 + 英语16套】全科全真题库...');

// =========================================================================
// 1. 语文一年级下册（共 30 套 · 人教版统编全册）
// =========================================================================

const chineseG1S2Meta = [
  // 第一单元：识字一
  { id: 1, unit: "第一单元：识字一", title: "第 01 套：春夏秋冬与四季之美基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "春风吹、夏雨落、秋霜降、冬雪飘；四季景物与特征词语认读。" },
  { id: 2, unit: "第一单元：识字一", title: "第 02 套：姓氏歌与字谜乐园提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "李、张、胡、吴等姓氏分解（木子李、弓长张）；会意字猜字谜拓展。" },
  { id: 3, unit: "第一单元：识字一", title: "第 03 套：大写字母表与青字族易错卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "26个大写字母大小写对照；青字族形近字（清晴睛情请）精准辨析。" },
  // 第二单元：课文一
  { id: 4, unit: "第二单元：课文一", title: "第 04 套：饮水思源与感恩品质基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "《吃水不忘挖井人》课文理解，沙洲坝挖井，饮水思源革命传统。" },
  { id: 5, unit: "第二单元：课文一", title: "第 05 套：美丽心愿与多彩太阳提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "《我多想去看看》北京升旗与天山；《四个太阳》送给四季的色彩表达。" },
  { id: 6, unit: "第二单元：课文一", title: "第 06 套：丰富量词与童年生活体验卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "《一个接一个》积极心态；多样量词搭配（一辆车、一匹马、一架飞机）。" },
  // 第三单元：课文二
  { id: 7, unit: "第三单元：课文二", title: "第 07 套：伙伴互助与快乐成长基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "《小公鸡和小鸭子》捉虫游泳互助；《树和喜鹊》有邻居有朋友真快乐。" },
  { id: 8, unit: "第三单元：课文二", title: "第 08 套：音序查字法实战闯关提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "核心技能【音序查字法】：查大写音序、找音节、看页码规范步骤。" },
  { id: 9, unit: "第三单元：课文二", title: "第 09 套：快乐分享与生活词语拓展卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "《怎么都快乐》一人到多人玩游戏，叠词积累（安安静静、叽叽喳喳）。" },
  // 第四单元：课文三
  { id: 10, unit: "第四单元：课文三", title: "第 10 套：思乡古诗与夜晚美景基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "《静夜思》李白思乡背诵；《夜色》克服怕黑胆小心理勇敢探索。" },
  { id: 11, unit: "第四单元：课文三", title: "第 11 套：端午民俗与美丽彩虹提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "《端午粽》屈原历史民俗；《彩虹》丰富想象力与关爱家人孝心。" },
  { id: 12, unit: "第四单元：课文三", title: "第 12 套：汉字间架结构与偏旁书写卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "点在正上方先写点；主谓宾完整句型表达；《寻隐者不遇》古诗背诵。" },
  // 🌟 期中大考
  { id: 13, unit: "🌟 语文期中大考", title: "第 13 套：期中大写字母与拼音实战过关卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "字母表大小写配对、平翘舌前后鼻音综合复习过关。" },
  { id: 14, unit: "🌟 语文期中大考", title: "第 14 套：期中生字词语与查字典冲刺卷", tag: "期中冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "前半学期写字表一类字、音序查字法、量词搭配综合冲刺。" },
  { id: 15, unit: "🌟 语文期中大考", title: "第 15 套：一年级下册语文中期全真模拟统考卷", tag: "期中统考", tagColor: "bg-purple-100 text-purple-800", desc: "期中全真 100 分综合试卷，完全对标期中统考标准。" },
  // 第五单元：识字二
  { id: 16, unit: "第五单元：识字二", title: "第 16 套：动物儿歌与虫字旁汉字基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "《动物儿歌》蜻蜓蝴蝶蚯蚓蚂蚁蝌蚪蜘蛛；虫字旁会意字认读。" },
  { id: 17, unit: "第五单元：识字二", title: "第 17 套：对子歌与操场运动词汇提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "《古对今》反义词对仗；《操场上》提手旁（打拍拔）与足字旁（跳跑踢）。" },
  { id: 18, unit: "第五单元：识字二", title: "第 18 套：三字经启蒙与包字族形近字卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "《人之初》经典国学背诵；包字族（饱抱泡炮跑）形旁表意辨析。" },
  // 第六单元：课文四
  { id: 19, unit: "第六单元：课文四", title: "第 19 套：夏天古诗与池塘美景基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "《池上》《小池》杨万里白居易古诗背诵；小荷才露尖尖角早有蜻蜓立上头。" },
  { id: 20, unit: "第六单元：课文四", title: "第 20 套：荷叶圆圆与比喻修辞提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "《荷叶圆圆》摇篮、停机坪、歌台、凉伞角色比喻；ABAB叠词。" },
  { id: 21, unit: "第六单元：课文四", title: "第 21 套：动物下雨预报与标点符号卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "《要下雨了》燕子低飞、鱼游水面、蚂蚁搬家；逗号句号问号叹号规范停顿。" },
  // 第七单元：课文五
  { id: 22, unit: "第七单元：课文五", title: "第 22 套：珍惜时间与收拾整理习惯基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "《文具的家》收纳好习惯；《一分钟》时间观念（贪睡一分钟迟到二十分钟）。" },
  { id: 23, unit: "第七单元：课文五", title: "第 23 套：通知四要素与做事专注提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "《动物王国开大会》通知要素（时间地点参加人事情）；《小猴子下山》做事专一。" },
  { id: 24, unit: "第七单元：课文五", title: "第 24 套：口语交际与做事目标专一卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "礼貌请假交际；做事目标明确不三心二意；字词句综合运用。" },
  // 第八单元：课文六
  { id: 25, unit: "第八单元：课文六", title: "第 25 套：大自然益虫与科学常识基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "《棉花姑娘》七星瓢虫、啄木鸟、青蛙益虫益鸟分工。" },
  { id: 26, unit: "第八单元：课文六", title: "第 26 套：独立思考与破除盲从提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "《咕咚》遇事动脑筋不要盲目跟风；生动拟声词积累。" },
  { id: 27, unit: "第八单元：课文六", title: "第 27 套：小壁虎借尾巴与动物特征卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "《小壁虎借尾巴》鱼尾摇水、牛尾赶蝇、燕尾掌舵、壁虎尾巴再生。" },
  // 👑 期末总决战
  { id: 28, unit: "👑 语文期末终极大决战", title: "第 28 套：全册200生字笔顺与形近字避坑卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "全册重点一类生字笔顺、形近字、多音字扫雷大冲刺。" },
  { id: 29, unit: "👑 语文期末终极大决战", title: "第 29 套：全册古诗文与日积月累通关卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "春夏秋冬、静夜思、池上、小池、古对今、人之初全景古诗文背诵。" },
  { id: 30, unit: "👑 语文期末终极大决战", title: "第 30 套：一年级下册语文全真期末统考毕业卷", tag: "期末冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "完全符合部编人教版一年级下册统考标准的 100 分毕业大考卷。" }
];

function buildChineseG1S2Paper(meta) {
  const id = meta.id;
  
  // 1. 连连看配对
  let pairs = [];
  let tip = "点击左侧，连到右侧正确答案";
  let title = "核心连连看：看图/词语连线。";

  if (id <= 3) {
    title = "春夏秋冬连连看：把四季特征词语与对应拼音连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 春风吹 🌸", emoji: "🌸", answer: `ca${id}-1`, char: "春", pinyin: "chūn" },
      { target: `c${id}-2`, label: "② 夏雨落 🌧️", emoji: "🌧️", answer: `ca${id}-2`, char: "夏", pinyin: "xià" },
      { target: `c${id}-3`, label: "③ 秋霜降 🍁", emoji: "🍁", answer: `ca${id}-3`, char: "秋", pinyin: "qiū" },
      { target: `c${id}-4`, label: "④ 冬雪飘 ❄️", emoji: "❄️", answer: `ca${id}-4`, char: "冬", pinyin: "dōng" },
      { target: `c${id}-5`, label: "⑤ 青草绿 🌱", emoji: "🌱", answer: `ca${id}-5`, char: "青", pinyin: "qīng" },
      { target: `c${id}-6`, label: "⑥ 红花开 🌺", emoji: "🌺", answer: `ca${id}-6`, char: "红", pinyin: "hóng" }
    ];
  } else if (id <= 6) {
    title = "心愿量词连连看：把事物连到对应的专属量词。";
    pairs = [
      { target: `c${id}-1`, label: "① 一口水井 🕳️", emoji: "🕳️", answer: `ca${id}-1`, char: "口", pinyin: "kǒu" },
      { target: `c${id}-2`, label: "② 一座天安门 🏛️", emoji: "🏛️", answer: `ca${id}-2`, char: "座", pinyin: "zuò" },
      { target: `c${id}-3`, label: "③ 一辆汽车 🚗", emoji: "🚗", answer: `ca${id}-3`, char: "辆", pinyin: "liàng" },
      { target: `c${id}-4`, label: "④ 一匹骏马 🐎", emoji: "🐎", answer: `ca${id}-4`, char: "匹", pinyin: "pǐ" },
      { target: `c${id}-5`, label: "⑤ 一架飞机 ✈️", emoji: "✈️", answer: `ca${id}-5`, char: "架", pinyin: "jià" },
      { target: `c${id}-6`, label: "⑥ 一颗红枣 🌰", emoji: "🌰", answer: `ca${id}-6`, char: "颗", pinyin: "kē" }
    ];
  } else if (id <= 12) {
    title = "汉字偏旁连连看：把生字连到它正确的偏旁部首。";
    pairs = [
      { target: `c${id}-1`, label: "① 捉虫的“捉” 🪱", emoji: "🪱", answer: `ca${id}-1`, char: "扌", pinyin: "tíshǒu" },
      { target: `c${id}-2`, label: "② 游泳的“游” 🏊", emoji: "🏊", answer: `ca${id}-2`, char: "氵", pinyin: "sāndiǎn" },
      { target: `c${id}-3`, label: "③ 伙伴的“伴” 👫", emoji: "👫", answer: `ca${id}-3`, char: "亻", pinyin: "dānrén" },
      { target: `c${id}-4`, label: "④ 孤单的“孤” 🐤", emoji: "🐤", answer: `ca${id}-4`, char: "子", pinyin: "zǐzì" },
      { target: `c${id}-5`, label: "⑤ 晴朗的“晴” ☀️", emoji: "☀️", answer: `ca${id}-5`, char: "日", pinyin: "rìzì" },
      { target: `c${id}-6`, label: "⑥ 眼睛的“睛” 👁️", emoji: "👁️", answer: `ca${id}-6`, char: "目", pinyin: "mùzì" }
    ];
  } else if (id <= 18) {
    title = "动物儿歌连连看：把小动物连到它独特的本领。";
    pairs = [
      { target: `c${id}-1`, label: "① 蜻蜓 🛸", emoji: "🛸", answer: `ca${id}-1`, char: "展翅", pinyin: "zhǎnchì" },
      { target: `c${id}-2`, label: "② 蝴蝶 🦋", emoji: "🦋", answer: `ca${id}-2`, char: "捉迷", pinyin: "zhuōmí" },
      { target: `c${id}-3`, label: "③ 蚯蚓 🪱", emoji: "🪱", answer: `ca${id}-3`, char: "造宫", pinyin: "zàogōng" },
      { target: `c${id}-4`, label: "④ 蚂蚁 🐜", emoji: "🐜", answer: `ca${id}-4`, char: "运粮", pinyin: "yùnliáng" },
      { target: `c${id}-5`, label: "⑤ 蝌蚪 🐸", emoji: "🐸", answer: `ca${id}-5`, char: "游水", pinyin: "yóushuǐ" },
      { target: `c${id}-6`, label: "⑥ 蜘蛛 🕸️", emoji: "🕸️", answer: `ca${id}-6`, char: "结网", pinyin: "jiéwǎng" }
    ];
  } else if (id <= 24) {
    title = "夏天与童趣连连看：把事物连到它生动的比喻。";
    pairs = [
      { target: `c${id}-1`, label: "① 荷叶是小水珠的 💧", emoji: "💧", answer: `ca${id}-1`, char: "摇篮", pinyin: "yáolán" },
      { target: `c${id}-2`, label: "② 荷叶是小蜻蜓的 🚁", emoji: "🚁", answer: `ca${id}-2`, char: "停机", pinyin: "tíngjī" },
      { target: `c${id}-3`, label: "③ 荷叶是小青蛙的 🎤", emoji: "🎤", answer: `ca${id}-3`, char: "歌台", pinyin: "gētái" },
      { target: `c${id}-4`, label: "④ 荷叶是小鱼儿的 ☂️", emoji: "☂️", answer: `ca${id}-4`, char: "凉伞", pinyin: "liángsǎn" },
      { target: `c${id}-5`, label: "⑤ 燕子低飞捉 🐛", emoji: "🐛", answer: `ca${id}-5`, char: "虫子", pinyin: "chóngzi" },
      { target: `c${id}-6`, label: "⑥ 小鱼游到水面 🐟", emoji: "🐟", answer: `ca${id}-6`, char: "透气", pinyin: "tòuqì" }
    ];
  } else {
    title = "科学与成语连连看：把成语与对应动物特征连线。";
    pairs = [
      { target: `c${id}-1`, label: "① 七星瓢虫 🐞", emoji: "🐞", answer: `ca${id}-1`, char: "蚜虫", pinyin: "yáchóng" },
      { target: `c${id}-2`, label: "② 啄木鸟 🪵", emoji: "🪵", answer: `ca${id}-2`, char: "树干", pinyin: "shùgàn" },
      { target: `c${id}-3`, label: "③ 小鱼尾巴 🐟", emoji: "🐟", answer: `ca${id}-3`, char: "拨水", pinyin: "bōshuǐ" },
      { target: `c${id}-4`, label: "④ 老牛尾巴 🐂", emoji: "🐂", answer: `ca${id}-4`, char: "赶蝇", pinyin: "gǎnyíng" },
      { target: `c${id}-5`, label: "⑤ 燕子尾巴 🐦", emoji: "🐦", answer: `ca${id}-5`, char: "掌舵", pinyin: "zhǎngduò" },
      { target: `c${id}-6`, label: "⑥ 壁虎尾巴 🦎", emoji: "🦎", answer: `ca${id}-6`, char: "再生", pinyin: "zàishēng" }
    ];
  }

  const shuffledAnswers = [`ca${id}-2`, `ca${id}-4`, `ca${id}-1`, `ca${id}-6`, `ca${id}-3`, `ca${id}-5`];

  return {
    ...meta,
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: title,
        score: 12,
        type: "matching",
        tip: tip,
        pairs: pairs,
        shuffledAnswers: shuffledAnswers
      },
      {
        num: "二",
        title: "拼音音节与生字小法官：选出正确的拼音或读音。",
        score: 8,
        type: "choice",
        items: [
          { qid: `CQ2-${id}-1`, prompt: id <= 5 ? "“降落”的“降”字，正确读音是？" : id <= 15 ? "“快乐”的“乐”在这里读什么？" : "“空地”的“空”读音是？", title: "多音字辨析", tip: "降落读 jiàng（降落伞），投降读 xiáng；快乐读 lè；空地读 kòng。", options: [{ text: id <= 5 ? "jiàng" : id <= 15 ? "lè" : "kòng", correct: true }, { text: id <= 5 ? "xiáng" : id <= 15 ? "yuè" : "kōng", correct: false }] },
          { qid: `CQ2-${id}-2`, prompt: "“纯净”的“净”声母是 j 还是 q？", title: "声母辨析", tip: "干净的净读 jìng。", options: [{ text: "j (jìng)", correct: true }, { text: "q (qìng)", correct: false }] },
          { qid: `CQ2-${id}-3`, prompt: "“微风”的“微”是整体认读音节吗？", title: "音节属性", tip: "wēi 不是整体认读音节，声母 w 和韵母 ei。", options: [{ text: "不是 (w-ēi)", correct: true }, { text: "是整体认读音节", correct: false }] },
          { qid: `CQ2-${id}-4`, prompt: "大写字母“G”对应的小写字母是？", title: "大写字母表", tip: "大写 G 对应小写 g。", options: [{ text: "g", correct: true }, { text: "q", correct: false }] }
        ]
      },
      {
        num: "三",
        title: "汉字魔术与形近偏旁：字形结构大辨析。",
        score: 16,
        type: "choice",
        items: [
          { qid: `CQ3-${id}-1`, prompt: id <= 10 ? "“日”加上“青”是什么字？表示天气很好？" : "“虫”字旁的汉字大多数和什么有关？", title: "青字族与偏旁", tip: "日字旁表示太阳，晴朗的晴；虫字旁汉字多与昆虫小动物有关。", options: [{ text: id <= 10 ? "晴（晴朗）" : "昆虫动物", correct: true }, { text: id <= 10 ? "睛（眼睛）" : "树木花草", correct: false }] },
          { qid: `CQ3-${id}-2`, prompt: "查字典时，按【音序查字法】，应该先找什么？", title: "音序查字法步骤", tip: "先查大写字母（音序），再查音节，最后按页码找字。", options: [{ text: "大写字母（音序）", correct: true }, { text: "汉字笔画", correct: false }] },
          { qid: `CQ3-${id}-3`, prompt: "“国”和“白”的书写规则是？", title: "汉字书写规则", tip: "全包围结构汉字遵守“先外后内再封口”。", options: [{ text: "先外后内再封口", correct: true }, { text: "先封口再写里面", correct: false }] },
          { qid: `CQ3-${id}-4`, prompt: "“打球、拍皮球、拔河”这几个动作汉字都有什么偏旁？", title: "提手旁归类", tip: "与手部动作有关的用提手旁（扌）。", options: [{ text: "扌（提手旁）", correct: true }, { text: "𧾷（足字旁）", correct: false }] }
        ]
      },
      {
        num: "四",
        title: "词语宝库与量词反义词：做积累小达人。",
        score: 16,
        type: "choice",
        items: [
          { qid: `CQ4-${id}-1`, prompt: "选出正确的量词搭配：一( )水井，一( )大马。", title: "量词精准使用", tip: "一口水井，一匹大马。", options: [{ text: "口、匹", correct: true }, { text: "个、头", correct: false }] },
          { qid: `CQ4-${id}-2`, prompt: "“古对今，圆对( )，严寒对酷暑。”括号里填？", title: "对子歌积累", tip: "古对今，圆对方，严寒对酷暑，春暖对秋凉。", options: [{ text: "方", correct: true }, { text: "直", correct: false }] },
          { qid: `CQ4-${id}-3`, prompt: "“荷叶( )的，小水珠躺在上面。”适合填入什么叠词？", title: "生动叠词积累", tip: "荷叶圆圆的，绿绿的。", options: [{ text: "圆圆", correct: true }, { text: "细细", correct: false }] },
          { qid: `CQ4-${id}-4`, prompt: "“燕子低飞、小鱼游到水面、蚂蚁搬家”告诉我们？", title: "生活自然常识", tip: "动物的这些异常表现预示着【要下雨了】。", options: [{ text: "要下雨了", correct: true }, { text: "天晴了", correct: false }] }
        ]
      },
      {
        num: "五",
        title: "句子通顺与标点小能手：让句子美起来。",
        score: 12,
        type: "choice",
        items: [
          { qid: `CQ5-${id}-1`, prompt: "“荷叶是小青蛙的歌台( )”句末应该加什么标点？", title: "标点符号运用", tip: "陈述一句话完整结束，用句号（。）。", options: [{ text: "句号（。）", correct: true }, { text: "问号（？）", correct: false }] },
          { qid: `CQ5-${id}-2`, prompt: "“你今天去学校了吗( )”表示疑问，应该用？", title: "问号的使用", tip: "疑问句末尾用问号（？）。", options: [{ text: "问号（？）", correct: true }, { text: "感叹号（！）", correct: false }] },
          { qid: `CQ5-${id}-3`, prompt: "写通知时，必须要写清楚哪四个核心要素？", title: "通知规范格式", tip: "时间、地点、参加人、事情四要素缺一不可。", options: [{ text: "时间、地点、参加人、事情", correct: true }, { text: "天气、心情、分数、礼物", correct: false }] }
        ]
      },
      {
        num: "六",
        title: "课文理解与品质修养：明白大道理。",
        score: 12,
        type: "choice",
        items: [
          { qid: `CQ6-${id}-1`, prompt: "《吃水不忘挖井人》告诉我们要懂得什么传统美德？", title: "饮水思源感恩", tip: "饮水思源，时刻感恩帮助过我们的人。", options: [{ text: "饮水思源，感恩图报", correct: true }, { text: "节约用水", correct: false }] },
          { qid: `CQ6-${id}-2`, prompt: "《一分钟》里的元元因为多睡了一分钟，结果？", title: "珍惜时间观念", tip: "多睡了一分钟，结果一路错过车迟到了二十分钟。", options: [{ text: "迟到了20分钟", correct: true }, { text: "正好准时赶上", correct: false }] },
          { qid: `CQ6-${id}-3`, prompt: "《小猴子下山》扔了玉米摘桃子，最后空手回家，是因为？", title: "做事专一不三心二意", tip: "做事要有始有终，不能见一样爱一样三心二意。", options: [{ text: "做事三心二意，没有目标", correct: true }, { text: "小猴子力气太小", correct: false }] },
          { qid: `CQ6-${id}-4`, prompt: "《小壁虎借尾巴》中，小壁虎最后怎么有了新尾巴？", title: "壁虎尾巴再生功能", tip: "小壁虎的尾巴具有再生能力，自己长出了一条新尾巴！", options: [{ text: "自己长出了一条新尾巴", correct: true }, { text: "小燕子借给它的", correct: false }] }
        ]
      },
      {
        num: "七",
        title: "趣味阅读与语段辨析：火眼金睛读细节。",
        score: 12,
        type: "choice",
        items: [
          { qid: `CQ7-${id}-1`, prompt: "“人之初，性本善。性相近，习相远。”出自哪部国学经典？", title: "三字经文学常识", tip: "出自我国古代启蒙读物《三字经》。", options: [{ text: "《三字经》", correct: true }, { text: "《百家姓》", correct: false }] },
          { qid: `CQ7-${id}-2`, prompt: "“举头望明月，低头思故乡。”描写的传统节日或情感是？", title: "思乡传统情怀", tip: "李白在夜晚望月思念远方的故乡。", options: [{ text: "思念故乡亲人", correct: true }, { text: "端午吃粽子", correct: false }] },
          { qid: `CQ7-${id}-3`, prompt: "棉花姑娘生病了，是谁帮她治好了病？", title: "棉花姑娘益虫辨认", tip: "圆圆的身上有七个斑点的【七星瓢虫】吃掉了蚜虫。", options: [{ text: "七星瓢虫", correct: true }, { text: "啄木鸟", correct: false }] },
          { qid: `CQ7-${id}-4`, prompt: "《咕咚》故事里，“咕咚”其实是什么声音？", title: "咕咚故事真相", tip: "熟透了的木瓜掉进湖水里发出的“咕咚”声音！", options: [{ text: "木瓜掉进水里的声音", correct: true }, { text: "湖里可怕的怪兽", correct: false }] }
        ]
      },
      {
        num: "八",
        title: "经典诗文朗诵与背诵：腹有诗书气自华。",
        score: 12,
        type: "poem",
        text: id <= 15 ? "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。床前明月光，疑是地上霜。举头望明月，低头思故乡。" : "泉眼无声惜细流，树阴照水爱晴柔。小荷才露尖尖角，早有蜻蜓立上头。小娃撑小艇，偷采白莲回。不解藏踪迹，浮萍一道开。",
        buttons: [
          { label: "🗣️ 我能流利有感情地背诵古诗文 (+6分)", pts: 6 },
          { label: "🏆 课文重点段落我能熟练背诵 (+6分)", pts: 6 }
        ]
      }
    ]
  };
}

const allChineseG1S2Quizzes = chineseG1S2Meta.map(m => buildChineseG1S2Paper(m));
fs.writeFileSync(chineseOutPath, `// 部编人教版小学语文一年级下册 · 30套全真通关大考卷题库\nwindow.QUIZ_DATABASE_G1S2 = ${JSON.stringify(allChineseG1S2Quizzes, null, 2)};\n`, 'utf-8');
console.log(`✅ 语文下册题库成功生成：30套大卷已保存至 ${chineseOutPath}`);


// =========================================================================
// 2. 数学一年级下册（共 20 套 · 人教版统编全册）
// =========================================================================

const mathG1S2Meta = [
  // 第一单元：认识图形（二）
  { id: 1, unit: "第一单元：认识图形（二）", title: "第 01 套：长方形正方形三角形圆认知基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "辨认长方形、正方形、平行四边形、三角形和圆等平面图形。" },
  { id: 2, unit: "第一单元：认识图形（二）", title: "第 02 套：平面图形拼组与七巧板趣味提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "七巧板（5个三角形+1个正方形+1个平行四边形）拼组图形。" },
  // 第二单元：20以内的退位减法
  { id: 3, unit: "第二单元：20以内的退位减法", title: "第 03 套：十几减9与“破十法”基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "掌握十几减9的核心“破十法”（先算10-9=1，再算1加几）。" },
  { id: 4, unit: "第二单元：20以内的退位减法", title: "第 04 套：十几减8/7/6口算提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "破十法与“想加算减法”熟练口算十几减8、7、6。" },
  { id: 5, unit: "第二单元：20以内的退位减法", title: "第 05 套：十几减5/4/3/2与多余条件解决问题卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "排除题目中多余条件，求一个数比另一个数多几（少几）。" },
  // 第三单元：分类与整理
  { id: 6, unit: "第三单元：分类与整理", title: "第 06 套：单一标准与不同标准分类基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "按形状、颜色等单一或不同标准进行物品分类计数。" },
  { id: 7, unit: "第三单元：分类与整理", title: "第 07 套：象形统计图与简单统计表提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "用简单的象形统计图和表格呈现分类结果，比多少。" },
  // 第四单元：100以内数的认识
  { id: 8, unit: "第四单元：100以内数的认识", title: "第 08 套：数数、数位与数的组成基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "几个十和几个一，十位与个位、百位，数的读写法则。" },
  { id: 9, unit: "第四单元：100以内数的认识", title: "第 09 套：百数表规律与比大小提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "百数表中行与列规律；多得多、少得多、多一些、少一些。" },
  { id: 10, unit: "第四单元：100以内数的认识", title: "第 10 套：整十数加一位数及相应减法卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "掌握 30+2=32, 32-2=30, 32-30=2 算理口算。" },
  // 🌟 数学期中大考
  { id: 11, unit: "🌟 数学期中大考", title: "第 11 套：期中图形退位减与数位实战过关卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "前半学期平面图形、退位减法、分类、100以内数大检阅。" },
  { id: 12, unit: "🌟 数学期中大考", title: "第 12 套：期中破十法与百数表能力冲刺满分卷", tag: "期中冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "排队多余条件解决问题、百数表截块推算综合大考。" },
  // 第五单元：认识人民币
  { id: 13, unit: "第五单元：认识人民币", title: "第 13 套：元角分面额与换算基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "认识纸币硬币；掌握 1元=10角，1角=10分 换算。" },
  { id: 14, unit: "第五单元：认识人民币", title: "第 14 套：商品标价、付钱找钱生活提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "解决买文具玩具付钱、找回多少钱的生活实际问题。" },
  // 第六单元：100以内的加法和减法（一）
  { id: 15, unit: "第六单元：100以内的加法和减法", title: "第 15 套：整十数加减整十数基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "掌握 20+30=50, 60-40=20（以“十”为单位口算）。" },
  { id: 16, unit: "第六单元：100以内的加法和减法", title: "第 16 套：两位数加一位数进位与退位减提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "25+2=27, 28+5=33（进位加法）；35-2=33, 36-8=28（退位减法）。" },
  { id: 17, unit: "第六单元：100以内的加法和减法", title: "第 17 套：小括号认识与同数连加连减解决问题卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "算式中有小括号先算小括号；3个小朋友每人折5只纸鹤连加。" },
  // 第七单元：找规律
  { id: 18, unit: "第七单元：找规律", title: "第 18 套：图形与数字变化规律探索卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "图形形状颜色重复排列规律；数字等差增减步长规律。" },
  // 👑 数学期末大决战
  { id: 19, unit: "👑 数学期末终极大决战", title: "第 19 套：全册易错题避坑冲刺大考卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "元角分名数计算、退位减法忘记借一、连加连减陷阱大扫除。" },
  { id: 20, unit: "👑 数学期末终极大决战", title: "第 20 套：一年级下册数学全真期末统考满分卷", tag: "期末冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "完全符合一年级下册统考标准的 100 分综合毕业试卷。" }
];

function buildMathG1S2Paper(meta) {
  const id = meta.id;
  let pairs = [];
  let title = "核心连连看：算式或图形匹配。";
  let tip = "点击左侧，连到右侧正确答案";

  if (id <= 2) {
    title = "平面图形连连看：把实物表面形状连到对应的平面几何图形。";
    pairs = [
      { target: `m${id}-1`, label: "① 红领巾表面 🚩", emoji: "🚩", answer: `ma${id}-1`, char: "三角形", pinyin: "sānjiǎo" },
      { target: `m${id}-2`, label: "② 硬币钟表正面 🪙", emoji: "🪙", answer: `ma${id}-2`, char: "圆", pinyin: "yuán" },
      { target: `m${id}-3`, label: "③ 课桌桌面 🪑", emoji: "🪑", answer: `ma${id}-3`, char: "长方形", pinyin: "chángfāng" },
      { target: `m${id}-4`, label: "④ 魔方一个面 🎲", emoji: "🎲", answer: `ma${id}-4`, char: "正方形", pinyin: "zhèngfāng" },
      { target: `m${id}-5`, label: "⑤ 伸缩拉门网格 🚪", emoji: "🚪", answer: `ma${id}-5`, char: "平行四边", pinyin: "píngxíng" },
      { target: `m${id}-6`, label: "⑥ 课本封面 📖", emoji: "📖", answer: `ma${id}-6`, char: "长方形", pinyin: "chángfāng" }
    ];
  } else if (id <= 5) {
    title = "破十法连连看：快速口算 20 以内退位减法，连到正确得数。";
    pairs = [
      { target: `m${id}-1`, label: "① 15 - 9 = ？", emoji: "➖", answer: `ma${id}-1`, char: "6", pinyin: "liù" },
      { target: `m${id}-2`, label: "② 13 - 8 = ？", emoji: "➖", answer: `ma${id}-2`, char: "5", pinyin: "wǔ" },
      { target: `m${id}-3`, label: "③ 14 - 7 = ？", emoji: "➖", answer: `ma${id}-3`, char: "7", pinyin: "qī" },
      { target: `m${id}-4`, label: "④ 12 - 4 = ？", emoji: "➖", answer: `ma${id}-4`, char: "8", pinyin: "bā" },
      { target: `m${id}-5`, label: "⑤ 11 - 2 = ？", emoji: "➖", answer: `ma${id}-5`, char: "9", pinyin: "jiǔ" },
      { target: `m${id}-6`, label: "⑥ 16 - 8 = ？", emoji: "➖", answer: `ma${id}-6`, char: "8", pinyin: "bā" }
    ];
  } else if (id <= 10) {
    title = "数的组成连连看：把算式与对应的整十数十位数连线。";
    pairs = [
      { target: `m${id}-1`, label: "① 4个十和5个一", emoji: "🔢", answer: `ma${id}-1`, char: "45", pinyin: "sìshíwǔ" },
      { target: `m${id}-2`, label: "② 8个十是", emoji: "🔢", answer: `ma${id}-2`, char: "80", pinyin: "bāshí" },
      { target: `m${id}-3`, label: "③ 30 + 7 = ？", emoji: "➕", answer: `ma${id}-3`, char: "37", pinyin: "sānshíqī" },
      { target: `m${id}-4`, label: "④ 56 - 6 = ？", emoji: "➖", answer: `ma${id}-4`, char: "50", pinyin: "wǔshí" },
      { target: `m${id}-5`, label: "⑤ 9个十和9个一", emoji: "🔢", answer: `ma${id}-5`, char: "99", pinyin: "jiǔshíjiǔ" },
      { target: `m${id}-6`, label: "⑥ 10个十是", emoji: "🔢", answer: `ma${id}-6`, char: "100", pinyin: "yìbǎi" }
    ];
  } else if (id <= 14) {
    title = "认识人民币连连看：把生活用品价格连到对应的币值换算。";
    pairs = [
      { target: `m${id}-1`, label: "① 1 元 = ？角 💰", emoji: "💰", answer: `ma${id}-1`, char: "10角", pinyin: "shíjiǎo" },
      { target: `m${id}-2`, label: "② 1 角 = ？分 🪙", emoji: "🪙", answer: `ma${id}-2`, char: "10分", pinyin: "shífēn" },
      { target: `m${id}-3`, label: "③ 5 张 1 元是 💵", emoji: "💵", answer: `ma${id}-3`, char: "5元", pinyin: "wǔyuán" },
      { target: `m${id}-4`, label: "④ 2 张 5 角是 🪙", emoji: "🪙", answer: `ma${id}-4`, char: "1元", pinyin: "yīyuán" },
      { target: `m${id}-5`, label: "⑤ 1 张 50 元是 💴", emoji: "💴", answer: `ma${id}-5`, char: "50元", pinyin: "wǔshíyuán" },
      { target: `m${id}-6`, label: "⑥ 1 张 100 元是 💳", emoji: "💳", answer: `ma${id}-6`, char: "100元", pinyin: "yìbǎiyuán" }
    ];
  } else {
    title = "100以内加减法连连看：快速口算得数并连线。";
    pairs = [
      { target: `m${id}-1`, label: "① 20 + 30 = ？", emoji: "➕", answer: `ma${id}-1`, char: "50", pinyin: "wǔshí" },
      { target: `m${id}-2`, label: "② 45 + 3 = ？", emoji: "➕", answer: `ma${id}-2`, char: "48", pinyin: "sìshíbā" },
      { target: `m${id}-3`, label: "③ 28 + 5 = ？", emoji: "➕", answer: `ma${id}-3`, char: "33", pinyin: "sānshísān" },
      { target: `m${id}-4`, label: "④ 56 - 4 = ？", emoji: "➖", answer: `ma${id}-4`, char: "52", pinyin: "wǔshí'èr" },
      { target: `m${id}-5`, label: "⑤ 42 - 8 = ？", emoji: "➖", answer: `ma${id}-5`, char: "34", pinyin: "sānshísì" },
      { target: `m${id}-6`, label: "⑥ 10 - (2 + 3) = ？", emoji: "🧮", answer: `ma${id}-6`, char: "5", pinyin: "wǔ" }
    ];
  }

  const shuffledAnswers = [`ma${id}-2`, `ma${id}-4`, `ma${id}-1`, `ma${id}-6`, `ma${id}-3`, `ma${id}-5`];

  return {
    ...meta,
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: title,
        score: 12,
        type: "matching",
        tip: tip,
        pairs: pairs,
        shuffledAnswers: shuffledAnswers
      },
      {
        num: "二",
        title: "比大小与符号小法官：在○里填入 >、< 或 = 。",
        score: 8,
        type: "choice",
        items: [
          { qid: `MQ2-${id}-1`, prompt: `比大小：${id <= 5 ? '13 - 4 ○ 8' : id <= 12 ? '45 ○ 54' : '36 + 4 ○ 40'}，中间填什么？`, title: "大小关系比较", tip: "开口朝大数，两边算好再比较。", options: [{ text: id <= 5 ? ">" : id <= 12 ? "<" : "=", correct: true }, { text: id <= 5 ? "<" : id <= 12 ? ">" : ">", correct: false }] },
          { qid: `MQ2-${id}-2`, prompt: "比大小：1 元 ○ 9 角，中间填什么？", title: "人民币大小比较", tip: "1元等于10角，10角大于9角，所以 1元 > 9角。", options: [{ text: ">", correct: true }, { text: "<", correct: false }] },
          { qid: `MQ2-${id}-3`, prompt: "比大小：58 - 8 ○ 50，中间填什么？", title: "加减算式与数比大小", tip: "58-8=50，两边相等填等号（=）。", options: [{ text: "=", correct: true }, { text: "<", correct: false }] },
          { qid: `MQ2-${id}-4`, prompt: "比大小：100 ○ 99，中间填什么？", title: "三位数与两位数比大小", tip: "三位数100大于两位数99。", options: [{ text: ">", correct: true }, { text: "<", correct: false }] }
        ]
      },
      {
        num: "三",
        title: "概念认知与数位换算：做数学小行家。",
        score: 16,
        type: "choice",
        items: [
          { qid: `MQ3-${id}-1`, prompt: id <= 2 ? "一副七巧板一共有几块板组成？" : id <= 10 ? "从右边起，第一位是个位，第二位是十位，第三位是？" : "计算带有小括号的算式 12 - (3 + 4)，应该先算什么？", title: id <= 2 ? "七巧板块数" : id <= 10 ? "数位顺序" : "小括号运算规则", tip: id <= 2 ? "七巧板有7块（5个三角形+1个正方形+1个平行四边形）。" : id <= 10 ? "右起第三位是【百位】。" : "算式里有小括号，要先算小括号里面的（3+4=7）。", options: [{ text: id <= 2 ? "7 块" : id <= 10 ? "百位" : "先算 (3 + 4)", correct: true }, { text: id <= 2 ? "8 块" : id <= 10 ? "万位" : "从左往右先算 12 - 3", correct: false }] },
          { qid: `MQ3-${id}-2`, prompt: "“破十法”算 13 - 9：把13分成10和3，先算 10 - 9 = 1，再算？", title: "破十法详细算理", tip: "先算 10 - 9 = 1，再算 1 + 3 = 4！", options: [{ text: "1 + 3 = 4", correct: true }, { text: "10 + 3 = 13", correct: false }] },
          { qid: `MQ3-${id}-3`, prompt: "一张 10 元纸币，可以换几张 5 元的纸币？", title: "人民币等额兑换", tip: "5 + 5 = 10，可以换 2 张 5 元。", options: [{ text: "2 张", correct: true }, { text: "5 张", correct: false }] },
          { qid: `MQ3-${id}-4`, prompt: "一个两位数，十位上是 6，个位上是 2，这个数读作？", title: "数的读法", tip: "十位是6表示六十，个位是2表示二，读作：六十二。", options: [{ text: "六十二", correct: true }, { text: "二十六", correct: false }] }
        ]
      },
      {
        num: "四",
        title: "口算速度小达人：选出正确计算结果。",
        score: 16,
        type: "choice",
        items: [
          { qid: `MQ4-${id}-1`, prompt: id <= 5 ? "15 - 8 = ( )" : id <= 12 ? "40 + 8 = ( )" : "26 + 7 = ( )", title: "核心加减法计算", tip: "进位加与退位减牢记法则。", options: [{ text: id <= 5 ? "7" : id <= 12 ? "48" : "33", correct: true }, { text: id <= 5 ? "6" : id <= 12 ? "84" : "32", correct: false }] },
          { qid: `MQ4-${id}-2`, prompt: id <= 5 ? "12 - 7 = ( )" : id <= 12 ? "76 - 6 = ( )" : "54 - 8 = ( )", title: "退位减法口算", tip: "54 - 8: 14 - 8 = 6, 40 + 6 = 46。", options: [{ text: id <= 5 ? "5" : id <= 12 ? "70" : "46", correct: true }, { text: id <= 5 ? "6" : id <= 12 ? "60" : "44", correct: false }] },
          { qid: `MQ4-${id}-3`, prompt: "30 + 40 = ( )", title: "整十数相加", tip: "3个十加4个十等于7个十，即70。", options: [{ text: "70", correct: true }, { text: "7", correct: false }] },
          { qid: `MQ4-${id}-4`, prompt: "80 - 30 = ( )", title: "整十数相减", tip: "8个十减3个十等于5个十，即50。", options: [{ text: "50", correct: true }, { text: "5", correct: false }] }
        ]
      },
      {
        num: "五",
        title: "图形与规律探索：做聪明的小侦探。",
        score: 12,
        type: "choice",
        items: [
          { qid: `MQ5-${id}-1`, prompt: "找规律：△ ○ △ ○ △ ○ ( )，括号里下一个图形是？", title: "重复图形规律", tip: "一三角形一圆圈重复出现，下一个是【△】。", options: [{ text: "△", correct: true }, { text: "○", correct: false }] },
          { qid: `MQ5-${id}-2`, prompt: "找规律：2、4、6、8、( )，括号里应该填几？", title: "等差递增规律", tip: "每次加2，8 + 2 = 10。", options: [{ text: "10", correct: true }, { text: "9", correct: false }] },
          { qid: `MQ5-${id}-3`, prompt: "两个完全一样的正方形，可以拼成一个什么图形？", title: "图形拼组", tip: "两个相同正方形拼在一起，变成一个【长方形】。", options: [{ text: "长方形", correct: true }, { text: "圆", correct: false }] }
        ]
      },
      {
        num: "六",
        title: "人民币与多余条件：避开题目小陷阱。",
        score: 12,
        type: "choice",
        items: [
          { qid: `MQ6-${id}-1`, prompt: "买一支铅笔花 8 角，付了 1 元钱，应该找回多少钱？", title: "找零计算", tip: "1元 = 10角，10角 - 8角 = 2角。", options: [{ text: "2 角", correct: true }, { text: "8 角", correct: false }] },
          { qid: `MQ6-${id}-2`, prompt: "小红有12朵红花，送给同学5朵，还剩几朵？题目中若多了一句“小红今天穿红衣服”，这句是？", title: "排除多余条件", tip: "“穿红衣服”与算花朵数量无关，属于多余条件！", options: [{ text: "多余无用条件", correct: true }, { text: "必须用上的数字", correct: false }] },
          { qid: `MQ6-${id}-3`, prompt: "乐乐有 15 本书，月亮有 8 本书，乐乐比月亮多几本书？", title: "比多少实际问题", tip: "求一个数比另一个数多几用减法：15 - 8 = 7 本。", options: [{ text: "7 本", correct: true }, { text: "23 本", correct: false }] },
          { qid: `MQ6-${id}-4`, prompt: "爷爷的年龄比 60 岁多一些，爷爷可能是几岁？", title: "多一些概念辨析", tip: "63 岁比 60 多一些（88岁属于多得多）。", options: [{ text: "63 岁", correct: true }, { text: "88 岁", correct: false }] }
        ]
      },
      {
        num: "七",
        title: "看图列式与实际问题：数学就在我身边。",
        score: 12,
        type: "choice",
        items: [
          { qid: `MQ7-${id}-1`, prompt: "3 个小朋友做千纸鹤，每人做了 4 只，他们一共做了多少只？", title: "同数连加应用题", tip: "3个4相加：4 + 4 + 4 = 12 只。", options: [{ text: "12 只", correct: true }, { text: "7 只", correct: false }] },
          { qid: `MQ7-${id}-2`, prompt: "树上一共有 28 个桃子，小猴第一天摘了 8 个，第二天摘了 10 个，一共摘了几个？", title: "问题求和理解", tip: "问的是一共摘了几个：8 + 10 = 18 个（注意别把总数28减了）。", options: [{ text: "18 个", correct: true }, { text: "10 个", correct: false }] },
          { qid: `MQ7-${id}-3`, prompt: "书包一个 45 元，文具盒一个 20 元，买这两样一共需要？", title: "购物总价相加", tip: "45 + 20 = 65 元。", options: [{ text: "65 元", correct: true }, { text: "25 元", correct: false }] },
          { qid: `MQ7-${id}-4`, prompt: "一箱苹果有 36 个，吃了 9 个，箱子里还剩几个苹果？", title: "退位减法解决问题", tip: "36 - 9 = 27 个。", options: [{ text: "27 个", correct: true }, { text: "25 个", correct: false }] }
        ]
      },
      {
        num: "八",
        title: "数学儿歌与数学思维：朗朗上口好口诀。",
        score: 12,
        type: "poem",
        text: id <= 10 ? "十几减九不用愁，退一加一十变九。十几减八退一加二，减七加三，减六加四，退位减法算得快！" : "元角分，分分清：十个分是一只角，十只角是一块元。整十数相加减，十位动来个位安！",
        buttons: [
          { label: "🗣️ 我会熟练朗读《破十法与退位减儿歌》 (+6分)", pts: 6 },
          { label: "🏆 100以内退位加减口算口诀我能秒答 (+6分)", pts: 6 }
        ]
      }
    ]
  };
}

const allMathG1S2Quizzes = mathG1S2Meta.map(m => buildMathG1S2Paper(m));
fs.writeFileSync(mathOutPath, `// 部编人教版小学数学一年级下册 · 20套全真通关大考卷题库\nwindow.MATH_DATABASE_G1S2 = ${JSON.stringify(allMathG1S2Quizzes, null, 2)};\n`, 'utf-8');
console.log(`✅ 数学下册题库成功生成：20套大卷已保存至 ${mathOutPath}`);


// =========================================================================
// 3. 英语一年级下册（共 16 套 · 人教新起点/PEP版全册）
// =========================================================================

const englishG1S2Meta = [
  // Unit 1: Classroom
  { id: 1, unit: "Unit 1: Classroom", title: "第 01 套：我的教室与设施认知基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "blackboard, desk, chair, door, window 教室设施词汇。" },
  { id: 2, unit: "Unit 1: Classroom", title: "第 02 套：空间方位与教室指令提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "in, on, under 介词；Clean the blackboard, Open the door." },
  // Unit 2: Room
  { id: 3, unit: "Unit 2: Room", title: "第 03 套：温馨卧室与家具词汇基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "bed, light, box, sofa, table 房间家具物品认读。" },
  { id: 4, unit: "Unit 2: Room", title: "第 04 套：位置问答与物品寻找提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Where is my ruler? It's under the bed / on the table." },
  // Unit 3: Toys
  { id: 5, unit: "Unit 3: Toys", title: "第 05 套：趣味玩具乐园认知基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "plane, ball, doll, train, car, bear, boat 玩具单词。" },
  { id: 6, unit: "Unit 3: Toys", title: "第 06 套：玩具借用与分享礼貌提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Can I have a plane? Sure. Here you are. I have a new train." },
  // 🌟 英语期中大考
  { id: 7, unit: "🌟 英语期中大考", title: "第 07 套：期中听读识词实战过关卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "教室、房间、玩具与介词（in/on/under）期中全景过关。" },
  { id: 8, unit: "🌟 英语期中大考", title: "第 08 套：期中情境交际模拟冲刺卷", tag: "期中模拟", tagColor: "bg-rose-100 text-rose-800", desc: "物品寻找、礼貌借用玩具全真情境模拟测试卷。" },
  // Unit 4: Food & Drinks
  { id: 9, unit: "Unit 4: Food & Drinks", title: "第 09 套：美味三餐与主食认知基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "rice, noodles, fish, chicken, egg, soup 美食词汇。" },
  { id: 10, unit: "Unit 4: Food & Drinks", title: "第 10 套：饮食喜好与就餐交际提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Do you like fish? Yes, I do. Have some noodles, please." },
  // Unit 5: Drink & Fruit
  { id: 11, unit: "Unit 5: Drink & Fruit", title: "第 11 套：健康饮品与美味水果基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "water, milk, juice, tea, apple, pear, orange, banana." },
  { id: 12, unit: "Unit 5: Drink & Fruit", title: "第 12 套：就餐点餐与礼貌点单提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "What would you like? I'd like some juice, please. Thank you." },
  // Unit 6: Clothes
  { id: 13, unit: "Unit 6: Clothes", title: "第 13 套：日常服饰与穿着词汇基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "shirt, T-shirt, skirt, dress, pants, socks, shoes, hat." },
  { id: 14, unit: "Unit 6: Clothes", title: "第 14 套：衣物穿戴与赞美表达提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "I like your dress. Put on your socks. Take off your hat." },
  // 👑 英语期末大决战
  { id: 15, unit: "👑 英语期末终极大决战", title: "第 15 套：全册高频生活词汇分类总复习卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "设施、家具、玩具、食物、饮品、服饰六大类全景词汇。" },
  { id: 16, unit: "👑 英语期末终极大决战", title: "第 16 套：一年级下册英语全真期末统考满分卷", tag: "期末冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "完全对标一年级下册英语期末统考标准的全真试卷。" }
];

function buildEnglishG1S2Paper(meta) {
  const id = meta.id;
  let pairs = [];
  let title = "Look and Match（看图连线）：把图片与英文单词连起来。";
  let tip = "点击左侧图片，连到右侧正确单词";

  if (id <= 2) {
    title = "Classroom 设施连连看：把教室图片连到对应单词。";
    pairs = [
      { target: `e${id}-1`, label: "① 黑板 ⬛", emoji: "⬛", answer: `ea${id}-1`, char: "blackboard", pinyin: "黑板" },
      { target: `e${id}-2`, label: "② 课桌 🪑", emoji: "🪑", answer: `ea${id}-2`, char: "desk", pinyin: "书桌" },
      { target: `e${id}-3`, label: "③ 椅子 🪑", emoji: "🪑", answer: `ea${id}-3`, char: "chair", pinyin: "椅子" },
      { target: `e${id}-4`, label: "④ 门 🚪", emoji: "🚪", answer: `ea${id}-4`, char: "door", pinyin: "门" },
      { target: `e${id}-5`, label: "⑤ 窗户 🪟", emoji: "🪟", answer: `ea${id}-5`, char: "window", pinyin: "窗户" },
      { target: `e${id}-6`, label: "⑥ 教室 🏫", emoji: "🏫", answer: `ea${id}-6`, char: "classroom", pinyin: "教室" }
    ];
  } else if (id <= 4) {
    title = "Room 房间物品连连看：把卧室物品连到英文名称。";
    pairs = [
      { target: `e${id}-1`, label: "① 睡床 🛏️", emoji: "🛏️", answer: `ea${id}-1`, char: "bed", pinyin: "床" },
      { target: `e${id}-2`, label: "② 电灯 💡", emoji: "💡", answer: `ea${id}-2`, char: "light", pinyin: "灯" },
      { target: `e${id}-3`, label: "③ 箱子/盒子 📦", emoji: "📦", answer: `ea${id}-3`, char: "box", pinyin: "盒子" },
      { target: `e${id}-4`, label: "④ 沙发 🛋️", emoji: "🛋️", answer: `ea${id}-4`, char: "sofa", pinyin: "沙发" },
      { target: `e${id}-5`, label: "⑤ 餐桌/桌子 🪵", emoji: "🪵", answer: `ea${id}-5`, char: "table", pinyin: "桌子" },
      { target: `e${id}-6`, label: "⑥ 房间 🏠", emoji: "🏠", answer: `ea${id}-6`, char: "room", pinyin: "房间" }
    ];
  } else if (id <= 6) {
    title = "Toys 玩具世界连连看：把玩具与英文单词连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① 玩具飞机 ✈️", emoji: "✈️", answer: `ea${id}-1`, char: "plane", pinyin: "飞机" },
      { target: `e${id}-2`, label: "② 皮球 ⚽", emoji: "⚽", answer: `ea${id}-2`, char: "ball", pinyin: "球" },
      { target: `e${id}-3`, label: "③ 洋娃娃 🪆", emoji: "🪆", answer: `ea${id}-3`, char: "doll", pinyin: "玩偶" },
      { target: `e${id}-4`, label: "④ 火车 🚂", emoji: "🚂", answer: `ea${id}-4`, char: "train", pinyin: "火车" },
      { target: `e${id}-5`, label: "⑤ 小汽车 🚗", emoji: "🚗", answer: `ea${id}-5`, char: "car", pinyin: "小汽车" },
      { target: `e${id}-6`, label: "⑥ 玩具熊 🧸", emoji: "🧸", answer: `ea${id}-6`, char: "bear", pinyin: "玩具熊" }
    ];
  } else if (id <= 10) {
    title = "Food & Drinks 美食连连看：把食物与英文连线。";
    pairs = [
      { target: `e${id}-1`, label: "① 米饭 🍚", emoji: "🍚", answer: `ea${id}-1`, char: "rice", pinyin: "米饭" },
      { target: `e${id}-2`, label: "② 面条 🍜", emoji: "🍜", answer: `ea${id}-2`, char: "noodles", pinyin: "面条" },
      { target: `e${id}-3`, label: "③ 鲜鱼 🐟", emoji: "🐟", answer: `ea${id}-3`, char: "fish", pinyin: "鱼" },
      { target: `e${id}-4`, label: "④ 鸡肉 🍗", emoji: "🍗", answer: `ea${id}-4`, char: "chicken", pinyin: "鸡肉" },
      { target: `e${id}-5`, label: "⑤ 鸡蛋 🥚", emoji: "🥚", answer: `ea${id}-5`, char: "egg", pinyin: "鸡蛋" },
      { target: `e${id}-6`, label: "⑥ 蔬菜汤 🥣", emoji: "🥣", answer: `ea${id}-6`, char: "soup", pinyin: "汤" }
    ];
  } else if (id <= 12) {
    title = "Drink & Fruit 水果饮品连连看：美味健康连线。";
    pairs = [
      { target: `e${id}-1`, label: "① 果汁 🧃", emoji: "🧃", answer: `ea${id}-1`, char: "juice", pinyin: "果汁" },
      { target: `e${id}-2`, label: "② 牛奶 🥛", emoji: "🥛", answer: `ea${id}-2`, char: "milk", pinyin: "牛奶" },
      { target: `e${id}-3`, label: "③ 茶水 🍵", emoji: "🍵", answer: `ea${id}-3`, char: "tea", pinyin: "茶" },
      { target: `e${id}-4`, label: "④ 饮用水 💧", emoji: "💧", answer: `ea${id}-4`, char: "water", pinyin: "水" },
      { target: `e${id}-5`, label: "⑤ 苹果 🍎", emoji: "🍎", answer: `ea${id}-5`, char: "apple", pinyin: "苹果" },
      { target: `e${id}-6`, label: "⑥ 草莓 🍓", emoji: "🍓", answer: `ea${id}-6`, char: "strawberry", pinyin: "草莓" }
    ];
  } else {
    title = "Clothes 服饰连连看：把漂亮衣服连到正确英文单词。";
    pairs = [
      { target: `e${id}-1`, label: "① 衬衫 👔", emoji: "👔", answer: `ea${id}-1`, char: "shirt", pinyin: "衬衫" },
      { target: `e${id}-2`, label: "② T恤衫 👕", emoji: "👕", answer: `ea${id}-2`, char: "T-shirt", pinyin: "T恤" },
      { target: `e${id}-3`, label: "③ 连衣裙 👗", emoji: "👗", answer: `ea${id}-3`, char: "dress", pinyin: "连衣裙" },
      { target: `e${id}-4`, label: "④ 裤子 👖", emoji: "👖", answer: `ea${id}-4`, char: "pants", pinyin: "裤子" },
      { target: `e${id}-5`, label: "⑤ 袜子 🧦", emoji: "🧦", answer: `ea${id}-5`, char: "socks", pinyin: "袜子" },
      { target: `e${id}-6`, label: "⑥ 帽子 🧢", emoji: "🧢", answer: `ea${id}-6`, char: "hat", pinyin: "帽子" }
    ];
  }

  const shuffledAnswers = [`ea${id}-2`, `ea${id}-4`, `ea${id}-1`, `ea${id}-6`, `ea${id}-3`, `ea${id}-5`];

  return {
    ...meta,
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: title,
        score: 12,
        type: "matching",
        tip: tip,
        pairs: pairs,
        shuffledAnswers: shuffledAnswers
      },
      {
        num: "二",
        title: "Listen and Choose（看词选义）：选出正确的中文意思。",
        score: 8,
        type: "choice",
        items: [
          { qid: `EQ2-${id}-1`, prompt: id <= 2 ? "“blackboard” 是教室里的什么？" : id <= 4 ? "“bed” 是卧室里的什么？" : id <= 6 ? "“plane” 是哪种交通玩具？" : id <= 10 ? "“noodles” 是中国人爱吃的？" : "“dress” 指的是？", title: "核心词汇释义", tip: "基础生活名词音形义掌握。", options: [{ text: id <= 2 ? "黑板" : id <= 4 ? "睡床" : id <= 6 ? "玩具飞机" : id <= 10 ? "面条" : "连衣裙", correct: true }, { text: id <= 2 ? "课桌" : id <= 4 ? "沙发" : id <= 6 ? "小汽车" : id <= 10 ? "米饭" : "裤子", correct: false }] },
          { qid: `EQ2-${id}-2`, prompt: "“under” 表示在什么位置？", title: "空间介词理解", tip: "in 在里面，on 在上面，under 在下面。", options: [{ text: "在……下面", correct: true }, { text: "在……上面", correct: false }] },
          { qid: `EQ2-${id}-3`, prompt: "“shoes” 穿在身体的哪个部位？", title: "服饰穿戴常识", tip: "shoes 是鞋子，穿在脚上。", options: [{ text: "鞋子（脚上）", correct: true }, { text: "帽子（头上）", correct: false }] },
          { qid: `EQ2-${id}-4`, prompt: "“juice” 是什么好喝的饮品？", title: "饮品词义", tip: "juice 表示鲜美果汁。", options: [{ text: "果汁", correct: true }, { text: "牛奶", correct: false }] }
        ]
      },
      {
        num: "三",
        title: "Read and Select（图文对应）：选择最符合情境的选项。",
        score: 16,
        type: "choice",
        items: [
          { qid: `EQ3-${id}-1`, prompt: "小猫在椅子下面，应该用英语说：“The cat is ( ) the chair.”", title: "介词情境填空", tip: "在下面用 under。", options: [{ text: "under", correct: true }, { text: "on", correct: false }] },
          { qid: `EQ3-${id}-2`, prompt: "老师说：“Open the door, please.” 同学应该？", title: "动作指令理解", tip: "Open the door 表示开门，Close 是关门。", options: [{ text: "去开门", correct: true }, { text: "去关窗", correct: false }] },
          { qid: `EQ3-${id}-3`, prompt: "想询问书包在哪里，你可以问？", title: "寻找物品句型", tip: "Where is my schoolbag? 询问位置。", options: [{ text: "Where is my schoolbag?", correct: true }, { text: "What is this?", correct: false }] },
          { qid: `EQ3-${id}-4`, prompt: "想赞美同学的衣服漂亮，可以说？", title: "称赞交际用语", tip: "I like your dress! 或 You look cool!", options: [{ text: "I like your dress!", correct: true }, { text: "I am fine.", correct: false }] }
        ]
      },
      {
        num: "四",
        title: "Daily Expressions（日常交际小达人）：选出正确的应答语。",
        score: 16,
        type: "choice",
        items: [
          { qid: `EQ4-${id}-1`, prompt: "当你想借别人的玩具火车玩时，可以说？", title: "礼貌请求借用", tip: "Can I have a train? 礼貌借用玩具。", options: [{ text: "Can I have a train?", correct: true }, { text: "This is a train.", correct: false }] },
          { qid: `EQ4-${id}-2`, prompt: "别人问你：“Do you like rice?” 你喜欢吃，可以回答？", title: "饮食喜好回答", tip: "Yes, I do. 肯定回答；No, I don't. 否定回答。", options: [{ text: "Yes, I do.", correct: true }, { text: "No, I am not.", correct: false }] },
          { qid: `EQ4-${id}-3`, prompt: "当你递给别人东西时，礼貌地说？", title: "递送物品礼貌语", tip: "Here you are.（给你。）", options: [{ text: "Here you are.", correct: true }, { text: "Thank you.", correct: false }] },
          { qid: `EQ4-${id}-4`, prompt: "别人对你说：“Here you are.”，你应该回答？", title: "接受致谢", tip: "别人递给你东西后要说 Thank you!", options: [{ text: "Thank you!", correct: true }, { text: "You're welcome.", correct: false }] }
        ]
      },
      {
        num: "五",
        title: "Category Master（单词分类官）：选出不同类的单词。",
        score: 12,
        type: "choice",
        items: [
          { qid: `EQ5-${id}-1`, prompt: "选出不同类的单词：A. desk（书桌） B. chair（椅子） C. plane（飞机）", title: "设施与玩具分类", tip: "plane 是玩具交通，其它两个是教室家具。", options: [{ text: "C. plane", correct: true }, { text: "A. desk", correct: false }] },
          { qid: `EQ5-${id}-2`, prompt: "选出不同类的单词：A. noodles（面条） B. rice（米饭） C. socks（袜子）", title: "食物与服饰分类", tip: "socks 是衣服服饰，其它两个是食物。", options: [{ text: "C. socks", correct: true }, { text: "B. rice", correct: false }] },
          { qid: `EQ5-${id}-3`, prompt: "选出不同类的单词：A. in（在里面） B. on（在上面） C. milk（牛奶）", title: "介词与食物分类", tip: "milk 是饮品，其它两个是方位介词。", options: [{ text: "C. milk", correct: true }, { text: "A. in", correct: false }] }
        ]
      },
      {
        num: "六",
        title: "Sentence Sense（句子小能手）：选出最合适的句子。",
        score: 12,
        type: "choice",
        items: [
          { qid: `EQ6-${id}-1`, prompt: "天冷了，妈妈对乐乐说：“穿上你的外套吧”，用英语说？", title: "穿衣指令", tip: "Put on your coat. 穿上外套（Take off 是脱下）。", options: [{ text: "Put on your coat.", correct: true }, { text: "Take off your shoes.", correct: false }] },
          { qid: `EQ6-${id}-2`, prompt: "服务员问：“What would you like?” 你想要牛奶，可以说？", title: "点餐饮品句型", tip: "I'd like some milk, please.", options: [{ text: "I'd like some milk, please.", correct: true }, { text: "I have a pen.", correct: false }] },
          { qid: `EQ6-${id}-3`, prompt: "“The ball is on the box.” 中文意思是？", title: "方位句意翻译", tip: "球在盒子上面。", options: [{ text: "球在盒子上面", correct: true }, { text: "球在盒子里面", correct: false }] },
          { qid: `EQ6-${id}-4`, prompt: "“Clean the blackboard, please.” 这句话是请同学做什么？", title: "劳动交际指令", tip: "擦黑板。", options: [{ text: "擦黑板", correct: true }, { text: "扫地", correct: false }] }
        ]
      },
      {
        num: "七",
        title: "Reading & Context（趣味情境判断）：看句子判断对错。",
        score: 12,
        type: "choice",
        items: [
          { qid: `EQ7-${id}-1`, prompt: "“Fish live in the water.” 鱼儿生活在水里，这个常识正确吗？", title: "自然常识与英语", tip: "鱼儿生活在水里是正确的。", options: [{ text: "对（Right）", correct: true }, { text: "错（Wrong）", correct: false }] },
          { qid: `EQ7-${id}-2`, prompt: "“We wear a hat on our foot.” 我们把帽子戴在脚上？", title: "穿戴常识", tip: "帽子戴在头上（on our head），题目说戴在脚上是错的！", options: [{ text: "错（Wrong）", correct: true }, { text: "对（Right）", correct: false }] },
          { qid: `EQ7-${id}-3`, prompt: "“Noodles are delicious food.” 面条是一种美味的传统中国食物？", title: "饮食文化常识", tip: "面条是美味食物。", options: [{ text: "对（Right）", correct: true }, { text: "错（Wrong）", correct: false }] },
          { qid: `EQ7-${id}-4`, prompt: "“A chair has four legs.” 大多数椅子有四条腿？", title: "生活观察认知", tip: "椅子通常有4条腿。", options: [{ text: "对（Right）", correct: true }, { text: "错（Wrong）", correct: false }] }
        ]
      },
      {
        num: "八",
        title: "English Chant & Song（英语儿歌大声唱）：唱出自信好口语。",
        score: 12,
        type: "poem",
        text: id <= 8 ? "In, on, under, where is the bear? It's on the desk, it's under the chair! Plane, train, car and boat, happy toys in my coat!" : "Rice and noodles, yummy in my tummy! Milk and juice, healthy and sunny! Shirt, skirt, dress and hat, beautiful as a clever cat!",
        buttons: [
          { label: "🗣️ 我能大声朗读下册优美英文歌谣 (+6分)", pts: 6 },
          { label: "🏆 核心情境日常英语交际我能脱口而出 (+6分)", pts: 6 }
        ]
      }
    ]
  };
}

const allEnglishG1S2Quizzes = englishG1S2Meta.map(m => buildEnglishG1S2Paper(m));
fs.writeFileSync(englishOutPath, `// 人教版小学英语一年级下册 · 16套趣味通关大考卷题库\nwindow.ENGLISH_DATABASE_G1S2 = ${JSON.stringify(allEnglishG1S2Quizzes, null, 2)};\n`, 'utf-8');
console.log(`✅ 英语下册题库成功生成：16套大卷已保存至 ${englishOutPath}`);
console.log('🎉 一年级下册全科 66 套大卷题库全部构建完毕！');
