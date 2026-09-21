import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';
const chineseOutPath = path.join(brainDir, 'quiz_data_g2s2.js');
const mathOutPath = path.join(brainDir, 'math_data_g2s2.js');
const englishOutPath = path.join(brainDir, 'english_data_g2s2.js');

console.log('🚀 开始构建部编人教版小学二年级下册【语文30套 + 数学20套 + 英语16套】全科全真题库...');

// =========================================================================
// 1. 语文二年级下册（共 30 套 · 人教版统编全册）
// =========================================================================

const chineseG2S2Meta = [
  // 第一单元：春回大地
  { id: 1, unit: "第一单元：春回大地", title: "第 01 套：古诗二首与春景感知基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "《村居》《咏柳》草长莺飞二月天，拂堤杨柳醉春烟；碧玉妆成一树高，万条垂下绿丝绦。" },
  { id: 2, unit: "第一单元：春回大地", title: "第 02 套：找春天与鲜花小路提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "春天像个害羞的小姑娘；开满鲜花的小路——“美好的礼物”温暖真谛。" },
  { id: 3, unit: "第一单元：春回大地", title: "第 03 套：伟人植树与春景描写避坑卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "《邓小平爷爷植树》认真严肃态度；春天动词与生动形容词积累。" },
  // 第二单元：爱心奉献
  { id: 4, unit: "第二单元：爱心奉献", title: "第 04 套：雷锋精神与助人为乐基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "《雷锋叔叔，你在哪里》长长的小溪、弯弯的小路、泥泞路上的脚窝；寻访雷锋足迹。" },
  { id: 5, unit: "第二单元：爱心奉献", title: "第 05 套：千人糕与劳动成果提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "《千人糕》平平常常的米糕需千百人共同劳动；懂得珍惜粮食与感恩劳动者。" },
  { id: 6, unit: "第二单元：爱心奉献", title: "第 06 套：一匹出色的马与亲情相处体验卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "爸爸给的“柳枝神马”；童年纯真想象与家庭温馨相处之乐。" },
  // 第三单元：传统文化识字
  { id: 7, unit: "第三单元：传统文化识字", title: "第 07 套：神州谣与祖国大好河山基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "黄河奔，长江涌，长城长，珠峰耸；各民族齐奋发，神州大同祖国颂。" },
  { id: 8, unit: "第三单元：传统文化识字", title: "第 08 套：传统节日民俗与贝字旁故事提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "春节贴对联、清明扫墓、端午赛龙舟吃粽子、中秋赏月吃月饼、重阳踏秋登高；“贝”字旁与钱财演变。" },
  { id: 9, unit: "第三单元：传统文化识字", title: "第 09 套：中华传统美食与偏旁归类避坑卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "烤鸭、水煮鱼、葱爆羊肉、小笼包；火字旁、四点底、火候与烹饪动词归类。" },
  // 🌟 期中大考
  { id: 10, unit: "🌟 语文期中大考", title: "第 10 套：期中字词与偏旁表意全真达标卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "前半学期重点字词、偏旁表意（贝/火/灬/木）、多音字全景综合检验。" },
  { id: 11, unit: "🌟 语文期中大考", title: "第 11 套：期中句子积累与传统文化冲刺卷", tag: "期中冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "传统节日排序、中华美食搭配、修辞名句积累综合检验。" },
  { id: 12, unit: "🌟 语文期中大考", title: "第 12 套：二年级下册语文期中全真模拟统考卷", tag: "期中统考", tagColor: "bg-purple-100 text-purple-800", desc: "完全符合部编人教版二年级下册统考大纲的 100 分综合期中卷。" },
  // 第四单元：童心童趣
  { id: 13, unit: "第四单元：童心童趣", title: "第 13 套：彩色的梦与童年想象基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "一大把彩色铅笔，在白纸上跳蹦；绿的草坪、红的野花、蓝得透明的天空。" },
  { id: 14, unit: "第四单元：童心童趣", title: "第 14 套：枫树上的喜鹊与自然之爱提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "喜鹊阿姨教喜鹊弟弟学拼音、看日出；童心体察大自然生灵之美。" },
  { id: 15, unit: "第四单元：童心童趣", title: "第 15 套：沙滩童话与小虫子乐观体验卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "沙滩城堡救公主；当一只小虫子其实很不错，在草叶上摇晃、用露珠洗脸。" },
  // 第五单元：寓言与哲理
  { id: 16, unit: "第五单元：寓言与哲理", title: "第 16 套：亡羊补牢与揠苗助长寓言基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "亡羊补牢为时不晚；急于求成拔禾苗反致枯死；寓言深刻哲理领悟。" },
  { id: 17, unit: "第五单元：寓言与哲理", title: "第 17 套：画杨桃与实事求是提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "坐在教室一角看杨桃像五角星；看问题要实事求是，从客观角度出发。" },
  { id: 18, unit: "第五单元：寓言与哲理", title: "第 18 套：小马过河与亲身实践避坑卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "老牛说浅、松鼠说深；不可光听别人说，自己动脑筋亲自试一试才能明真理。" },
  // 第六单元：大自然秘密
  { id: 19, unit: "第六单元：大自然秘密", title: "第 19 套：荷花绝句与西湖夏景基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "接天莲叶无穷碧，映日荷花别样红；两个黄鹂鸣翠柳，一行白鹭上青天；名诗背诵。" },
  { id: 20, unit: "第六单元：大自然秘密", title: "第 20 套：野外迷路与大自然指南针提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "太阳中午在南边、树影指北方；北极星永远在正北；大树枝叶稠向南稀向北；沟渠积雪北化得快南化得慢。" },
  { id: 21, unit: "第六单元：大自然秘密", title: "第 21 套：神奇失重与太空生活体验卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "失重环境站着睡在睡袋里、吸管塑料袋喝水、特制带钩鞋子鞋架。" },
  // 第七单元：改变与成长
  { id: 22, unit: "第七单元：改变与成长", title: "第 22 套：大象耳朵与做最好的自己基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "大象的大耳朵耷拉着是自己的特点；人家是人家，我是我，不用刻意盲从。" },
  { id: 23, unit: "第七单元：改变与成长", title: "第 23 套：蜘蛛开店与持之以恒提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "口罩编织店（河马）、围巾店（长颈鹿）、袜子店（蜈蚣）；做事要不怕困难坚持到底。" },
  { id: 24, unit: "第七单元：改变与成长", title: "第 24 套：青蛙卖泥塘与辛勤双手避坑卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "种草、引水、栽树、种花、盖房，用辛勤劳动把烂泥塘变成美丽家园舍不得卖了。" },
  // 第八单元：神话与溯源
  { id: 25, unit: "第八单元：神话与溯源", title: "第 25 套：祖先摇篮与原始森林基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "祖先的摇篮是大森林；采野果、掏鹊蛋、和野兔赛跑、看蘑菇打伞。" },
  { id: 26, unit: "第八单元：神话与溯源", title: "第 26 套：万物学本领与自然规律提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "《当世界年纪还小的时候》太阳学发光、月亮学变化、水学往低处流；顺应自然大道。" },
  { id: 27, unit: "第八单元：神话与溯源", title: "第 27 套：羿射九日与远古英雄神话体验卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "十个太阳炙烤大地庄稼焦枯；后羿跨越九十九座高山登上昆仑山，神箭射九日留一日造福人间。" },
  // 👑 期末总决战
  { id: 28, unit: "👑 语文期末终极大决战", title: "第 28 套：全册重点多音字形近字扫雷冲刺卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "全册重点易错生字、形声字规律、多音字（扇、行、磨、倒）全景排雷。" },
  { id: 29, unit: "👑 语文期末终极大决战", title: "第 29 套：全册背诵古诗文名句日积月累通关卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "村居、咏柳、晓出净慈寺、绝句、二十四节气歌、传统谚语全盘默写背诵。" },
  { id: 30, unit: "👑 语文期末终极大决战", title: "第 30 套：二年级下册语文全真期末统考毕业卷", tag: "期末统考", tagColor: "bg-rose-100 text-rose-800", desc: "紧密对标统编人教版二年级下册期末毕业标准的 100 分规范大考卷。" }
];

function buildChineseG2S2Paper(meta) {
  const id = meta.id;
  
  let pairs = [];
  let tip = "点击左侧词语，连到右侧正确答案";
  let title = "核心连连看：课文生字与词义搭配连线。";

  if (id <= 3) {
    title = "春景诗意连连看：把春景词语与对应诗句/物候连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 草长莺飞 🌿", emoji: "🌿", answer: `ca${id}-1`, char: "二月天", pinyin: "èr yuè tiān" },
      { target: `c${id}-2`, label: "② 拂堤杨柳 🎋", emoji: "🎋", answer: `ca${id}-2`, char: "醉春烟", pinyin: "zuì chūn yān" },
      { target: `c${id}-3`, label: "③ 儿童散学 🎒", emoji: "🎒", answer: `ca${id}-3`, char: "放纸鸢", pinyin: "fàng zhǐ yuān" },
      { target: `c${id}-4`, label: "④ 碧玉妆成 🌳", emoji: "🌳", answer: `ca${id}-4`, char: "一树高", pinyin: "yī shù gāo" },
      { target: `c${id}-5`, label: "⑤ 万条垂下 🍃", emoji: "🍃", answer: `ca${id}-5`, char: "绿丝绦", pinyin: "lǜ sī tāo" },
      { target: `c${id}-6`, label: "⑥ 二月春风 ✂️", emoji: "✂️", answer: `ca${id}-6`, char: "似剪刀", pinyin: "sì jiǎn dāo" }
    ];
  } else if (id <= 6) {
    title = "爱心奉献连连看：把助人行为与对应人物品质连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 冒着细雨 🌧️", emoji: "🌧️", answer: `ca${id}-1`, char: "背孩子", pinyin: "bēi hái zi" },
      { target: `c${id}-2`, label: "② 踏着荆棘 🪵", emoji: "🪵", answer: `ca${id}-2`, char: "雷锋", pinyin: "léi fēng" },
      { target: `c${id}-3`, label: "③ 平常米糕 🌾", emoji: "🌾", answer: `ca${id}-3`, char: "千人糕", pinyin: "qiān rén gāo" },
      { target: `c${id}-4`, label: "④ 细长柳枝 🎋", emoji: "🎋", answer: `ca${id}-4`, char: "出色马", pinyin: "mǎ" },
      { target: `c${id}-5`, label: "⑤ 乘风出发 ⛵", emoji: "⛵", answer: `ca${id}-5`, char: "勇敢", pinyin: "yǒng gǎn" },
      { target: `c${id}-6`, label: "⑥ 珍惜粮食 🍚", emoji: "🍚", answer: `ca${id}-6`, char: "感恩", pinyin: "gǎn ēn" }
    ];
  } else if (id <= 9) {
    title = "传统节日与美食连连看：把传统节日与特色民俗连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 春节 🧧", emoji: "🧧", answer: `ca${id}-1`, char: "贴窗花", pinyin: "tiē chuāng huā" },
      { target: `c${id}-2`, label: "② 清明节 🌿", emoji: "🌿", answer: `ca${id}-2`, char: "扫墓祭祖", pinyin: "sǎo mù" },
      { target: `c${id}-3`, label: "③ 端午节 🛶", emoji: "🛶", answer: `ca${id}-3`, char: "赛龙舟", pinyin: "sài lóng zhōu" },
      { target: `c${id}-4`, label: "④ 七夕节 🌌", emoji: "🌌", answer: `ca${id}-4`, char: "乞巧巧果", pinyin: "qǐ qiǎo" },
      { target: `c${id}-5`, label: "⑤ 中秋节 🥮", emoji: "🥮", answer: `ca${id}-5`, char: "吃月饼", pinyin: "chī yuè bǐng" },
      { target: `c${id}-6`, label: "⑥ 重阳节 🏔️", emoji: "🏔️", answer: `ca${id}-6`, char: "赏菊登高", pinyin: "dēng gāo" }
    ];
  } else if (id <= 12) {
    title = "期中偏旁表意连连看：把偏旁与核心表意连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 贝字旁 (财购资) 💰", emoji: "💰", answer: `ca${id}-1`, char: "钱财货币", pinyin: "qián cái" },
      { target: `c${id}-2`, label: "② 火字旁 (烧烤煤) 🔥", emoji: "🔥", answer: `ca${id}-2`, char: "火与烹饪", pinyin: "pēng rèn" },
      { target: `c${id}-3`, label: "③ 四点底 (煎热蒸) 🍲", emoji: "🍲", answer: `ca${id}-3`, char: "高温加热", pinyin: "jiā rè" },
      { target: `c${id}-4`, label: "④ 虫字旁 (蜻蜓蝶) 🦋", emoji: "🦋", answer: `ca${id}-4`, char: "昆虫小兽", pinyin: "kūn chóng" },
      { target: `c${id}-5`, label: "⑤ 舟字旁 (航舰艇) 🚢", emoji: "🚢", answer: `ca${id}-5`, char: "船只水运", pinyin: "chuán zhī" },
      { target: `c${id}-6`, label: "⑥ 月字旁 (肚胆股) 🥩", emoji: "🥩", answer: `ca${id}-6`, char: "肉月器官", pinyin: "qì guān" }
    ];
  } else if (id <= 15) {
    title = "童话童心连连看：把童话角色与生动行为连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 彩色铅笔 ✏️", emoji: "✏️", answer: `ca${id}-1`, char: "画梦境", pinyin: "huà mèng jìng" },
      { target: `c${id}-2`, label: "② 喜鹊阿姨 🐦", emoji: "🐦", answer: `ca${id}-2`, char: "教拼音", pinyin: "jiāo pīn yīn" },
      { target: `c${id}-3`, label: "③ 沙滩城堡 🏰", emoji: "🏰", answer: `ca${id}-3`, char: "救公主", pinyin: "jiù gōng zhǔ" },
      { target: `c${id}-4`, label: "④ 小虫子 🐛", emoji: "🐛", answer: `ca${id}-4`, char: "露珠洗脸", pinyin: "xǐ liǎn" },
      { target: `c${id}-5`, label: "⑤ 绿草坪 🌱", emoji: "🌱", answer: `ca${id}-5`, char: "生机", pinyin: "shēng jī" },
      { target: `c${id}-6`, label: "⑥ 枫树窝 🪺", emoji: "🪺", answer: `ca${id}-6`, char: "小喜鹊", pinyin: "xǐ què" }
    ];
  } else if (id <= 18) {
    title = "寓言哲理连连看：把寓言典故与深刻道理连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 亡羊补牢 🐑", emoji: "🐑", answer: `ca${id}-1`, char: "未为迟也", pinyin: "wèi chí yě" },
      { target: `c${id}-2`, label: "② 揠苗助长 🌱", emoji: "🌱", answer: `ca${id}-2`, char: "急于求成", pinyin: "jí yú qiú chéng" },
      { target: `c${id}-3`, label: "③ 画杨桃 🍐", emoji: "🍐", answer: `ca${id}-3`, char: "实事求是", pinyin: "shí shì qiú shì" },
      { target: `c${id}-4`, label: "④ 小马过河 🐎", emoji: "🐎", answer: `ca${id}-4`, char: "亲身实践", pinyin: "qīn shēn shí jiàn" },
      { target: `c${id}-5`, label: "⑤ 老牛指路 🐂", emoji: "🐂", answer: `ca${id}-5`, char: "水只到膝盖", pinyin: "xī gài" },
      { target: `c${id}-6`, label: "⑥ 松鼠大喊 🐿️", emoji: "🐿️", answer: `ca${id}-6`, char: "水深会淹死", pinyin: "yān sǐ" }
    ];
  } else if (id <= 21) {
    title = "天然指南针连连看：把自然辨向景物与方向特征连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 太阳正午 ☀️", emoji: "☀️", answer: `ca${id}-1`, char: "在南方", pinyin: "zài nán fāng" },
      { target: `c${id}-2`, label: "② 阳光下树影 🌳", emoji: "🌳", answer: `ca${id}-2`, char: "指向北方", pinyin: "zhǐ běi fāng" },
      { target: `c${id}-3`, label: "③ 北极星 🌟", emoji: "🌟", answer: `ca${id}-3`, char: "高挂正北", pinyin: "zhèng běi" },
      { target: `c${id}-4`, label: "④ 稠密枝叶 🍃", emoji: "🍃", answer: `ca${id}-4`, char: "面向南方", pinyin: "miàn nán" },
      { target: `c${id}-5`, label: "⑤ 稀疏枝叶 🍂", emoji: "🍂", answer: `ca${id}-5`, char: "面向北方", pinyin: "miàn běi" },
      { target: `c${id}-6`, label: "⑥ 沟渠积雪 ❄️", emoji: "❄️", answer: `ca${id}-6`, char: "北化得快", pinyin: "huà dé kuài" }
    ];
  } else if (id <= 24) {
    title = "成长故事连连看：把小动物与奋斗历程连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 大象 🐘", emoji: "🐘", answer: `ca${id}-1`, char: "耷拉耳朵", pinyin: "dā la" },
      { target: `c${id}-2`, label: "② 蜘蛛 🕷️", emoji: "🕷️", answer: `ca${id}-2`, char: "织网开店", pinyin: "kāi diàn" },
      { target: `c${id}-3`, label: "③ 青蛙 🐸", emoji: "🐸", answer: `ca${id}-3`, char: "改造泥塘", pinyin: "ní táng" },
      { target: `c${id}-4`, label: "④ 小毛虫 🐛", emoji: "🐛", answer: `ca${id}-4`, char: "破茧成蝶", pinyin: "pò jiǎn" },
      { target: `c${id}-5`, label: "⑤ 长颈鹿 🦒", emoji: "🦒", answer: `ca${id}-5`, char: "买长围巾", pinyin: "wéi jīn" },
      { target: `c${id}-6`, label: "⑥ 蜈蚣 🪱", emoji: "🪱", answer: `ca${id}-6`, char: "穿四十二只袜", pinyin: "wà" }
    ];
  } else if (id <= 27) {
    title = "远古神话连连看：把神话故事与英雄事迹连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 后羿 🏹", emoji: "🏹", answer: `ca${id}-1`, char: "射落九日", pinyin: "shè jiǔ rì" },
      { target: `c${id}-2`, label: "② 夸父 🏃", emoji: "🏃", answer: `ca${id}-2`, char: "追逐太阳", pinyin: "zhuī rì" },
      { target: `c${id}-3`, label: "③ 女娲 🪨", emoji: "🪨", answer: `ca${id}-3`, char: "炼石补天", pinyin: "bǔ tiān" },
      { target: `c${id}-4`, label: "④ 神农 🌿", emoji: "🌿", answer: `ca${id}-4`, char: "尝百草", pinyin: "cháng bǎi cǎo" },
      { target: `c${id}-5`, label: "⑤ 仓颉 📜", emoji: "📜", answer: `ca${id}-5`, char: "造字传文明", pinyin: "zào zì" },
      { target: `c${id}-6`, label: "⑥ 大禹 🌊", emoji: "🌊", answer: `ca${id}-6`, char: "开山引水", pinyin: "yǐn shuǐ" }
    ];
  } else {
    title = "期末诗文名句连连看：把名句与下半句连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 接天莲叶无穷碧 🪷", emoji: "🪷", answer: `ca${id}-1`, char: "映日荷花别样红", pinyin: "bié yàng hóng" },
      { target: `c${id}-2`, label: "② 两个黄鹂鸣翠柳 🐦", emoji: "🐦", answer: `ca${id}-2`, char: "一行白鹭上青天", pinyin: "shàng qīng tiān" },
      { target: `c${id}-3`, label: "③ 窗含西岭千秋雪 🏔️", emoji: "🏔️", answer: `ca${id}-3`, char: "门泊东吴万里船", pinyin: "wàn lǐ chuán" },
      { target: `c${id}-4`, label: "④ 春雨惊春清谷天 🌧️", emoji: "🌧️", answer: `ca${id}-4`, char: "夏满芒夏暑相连", pinyin: "shǔ xiāng lián" },
      { target: `c${id}-5`, label: "⑤ 秋处露秋寒霜降 🌾", emoji: "🌾", answer: `ca${id}-5`, char: "冬雪雪冬小大寒", pinyin: "xiǎo dà hán" },
      { target: `c${id}-6`, label: "⑥ 唯德学，唯才艺 📚", emoji: "📚", answer: `ca${id}-6`, char: "不如人，当自砺", pinyin: "dāng zì lì" }
    ];
  }

  const shuffledAnswers = [...pairs.map(p => p.answer)].reverse();

  return {
    id: id,
    unit: meta.unit,
    title: meta.title,
    tag: meta.tag,
    tagColor: meta.tagColor,
    desc: meta.desc,
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
        title: "生字字形与读音小法官：选出正确的选项。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `c${id}-q1`,
            title: "易错字音辨析",
            tip: "注意绦 (tāo)、趁 (chèn)、荆 (jīng) 等标准发音。",
            prompt: `下列词语中加点字读音完全正确的一项是？`,
            options: [
              { text: "绿丝绦 (tāo)", correct: true },
              { text: "忙趁 (chèng) 东风", correct: false },
              { text: "泥泞 (nìng) 读成 (líng)", correct: false }
            ]
          },
          {
            qid: `c${id}-q2`,
            title: "多音字语境判断",
            tip: "“扇”作名词读四声（扇子），作动词读一声（扇风）。",
            prompt: `“大象有一对大耳朵，像一把大扇子”中的“扇”读音是？`,
            options: [
              { text: "shàn (四声)", correct: true },
              { text: "shān (一声)", correct: false },
              { text: "shǎn (三声)", correct: false }
            ]
          },
          {
            qid: `c${id}-q3`,
            title: "形近字与字义",
            tip: "“值”与价值有关，“植”与植物树木有关。",
            prompt: `“邓小平爷爷亲手（  ）树”中括号里应填的正确字是？`,
            options: [
              { text: "植 (植树)", correct: true },
              { text: "值 (值日)", correct: false },
              { text: "直 (直线)", correct: false }
            ]
          },
          {
            qid: `c${id}-q4`,
            title: "偏旁表意规律",
            tip: "带“贝”字旁的字大多与钱财有关。",
            prompt: `“财、购、货、赚”这些字都带有“贝”字旁，它们大多与什么有关？`,
            options: [
              { text: "钱财和买卖", correct: true },
              { text: "贝壳和海洋", correct: false },
              { text: "房屋和建筑", correct: false }
            ]
          }
        ]
      },
      {
        num: "三",
        title: "词语百宝箱与词义搭配：选出最恰当的词语。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `c${id}-q5`,
            title: "烹饪美食动词",
            tip: "烤鸭、煎饺、水煮鱼、炖排骨，动词要与食物做法匹配。",
            prompt: `下列中华美食与制作方法搭配最恰当的一项是？`,
            options: [
              { text: "烤鸭、煎饺、水煮鱼", correct: true },
              { text: "烤鱼塘、煮泥土", correct: false },
              { text: "蒸黄河、炸长江", correct: false }
            ]
          },
          {
            qid: `c${id}-q6`,
            title: "量词运用",
            tip: "一匹马、一柄雨伞、一条绿丝绦、一处港湾。",
            prompt: `“爸爸从柳树上折下一（  ）柳枝，当成一（  ）出色的马。”填量词？`,
            options: [
              { text: "根、匹", correct: true },
              { text: "条、个", correct: false },
              { text: "把、只", correct: false }
            ]
          },
          {
            qid: `c${id}-q7`,
            title: "形容词与修饰搭配",
            tip: "美好的礼物、泥泞的小路、葱郁的树林。",
            prompt: `长颈鹿收到鼹鼠先生寄来的花籽，春天里开满了鲜花，这是？`,
            options: [
              { text: "美好的礼物", correct: true },
              { text: "可怕的惩罚", correct: false },
              { text: "奇怪的石头", correct: false }
            ]
          },
          {
            qid: `c${id}-q8`,
            title: "反义词辨析",
            tip: "黑暗对光明，糊涂对明白，慌张对镇定。",
            prompt: `在野外迷了路，“千万可别慌张”中“慌张”的反义词是？`,
            options: [
              { text: "镇定 / 沉着", correct: true },
              { text: "害怕", correct: false },
              { text: "紧张", correct: false }
            ]
          }
        ]
      },
      {
        num: "四",
        title: "句子与修辞魔法屋：选出最符合要求的一项。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `c${id}-q9`,
            title: "比喻修辞",
            tip: "比喻句要有本体喻体（春天像个害羞的小姑娘，遮遮掩掩，躲躲藏藏）。",
            prompt: `下列句子运用了生动比喻修辞手法的是？`,
            options: [
              { text: "大象有一对大耳朵，像两把大扇子耷拉着。", correct: true },
              { text: "他今天好像生病了没来上课。", correct: false },
              { text: "春天来了，草儿绿了。", correct: false }
            ]
          },
          {
            qid: `c${id}-q10`,
            title: "拟人修辞",
            tip: "把事物赋予人的动作和情感（小鸟在枝头欢快地唱歌）。",
            prompt: `“小毛虫在叶子上趴着，羡慕地看着小昆虫们在微风中飞舞”这运用了？`,
            options: [
              { text: "拟人修辞", correct: true },
              { text: "夸张修辞", correct: false },
              { text: "排比修辞", correct: false }
            ]
          },
          {
            qid: `c${id}-q11`,
            title: "句式排序",
            tip: "按照太阳在天空中的运转规律排序。",
            prompt: `要是你在野外迷了路，太阳辨认方向的顺序正确的是？`,
            options: [
              { text: "早晨东方升起，中午在南边照耀，傍晚西方落下", correct: true },
              { text: "早晨西方升起，傍晚东方落下", correct: false },
              { text: "中午在北边，早晨在南边", correct: false }
            ]
          },
          {
            qid: `c${id}-q12`,
            title: "感悟哲理与标点",
            tip: "“只要……就……”表示只要满足条件就会产生结果。",
            prompt: `“（  ）现在把羊圈修好，以后（  ）不会再丢羊了。”选关联词？`,
            options: [
              { text: "只要……就……", correct: true },
              { text: "虽然……但是……", correct: false },
              { text: "即使……也……", correct: false }
            ]
          }
        ]
      },
      {
        num: "五",
        title: "课文大世界与寓言哲理：选出正确的一项。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `c${id}-q13`,
            title: "寓言故事哲理",
            tip: "《亡羊补牢》比喻出了差错及时补救，避免更大损失。",
            prompt: `成语“亡羊补牢”告诉我们的生活哲理是？`,
            options: [
              { text: "犯了错误或遭遇损失，及时弥补还不算晚", correct: true },
              { text: "丢了羊就必须去市场上买更多的羊", correct: false },
              { text: "急于求成拔苗助长禾苗就能长高", correct: false }
            ]
          },
          {
            qid: `c${id}-q14`,
            title: "《小马过河》实践真理",
            tip: "不能光听别人说，自己动脑筋亲自试一试。",
            prompt: `《小马过河》中，小马最终明白的道理是？`,
            options: [
              { text: "别人的经验不一定适合自己，要动脑筋亲身去尝试", correct: true },
              { text: "水太深了，绝对不能下水过河", correct: false },
              { text: "老牛说的话永远比松鼠更正确", correct: false }
            ]
          },
          {
            qid: `c${id}-q15`,
            title: "大自然指南针",
            tip: "北极星高挂在正北方，是黑夜最好的天然指南针。",
            prompt: `黑夜里在野外迷失了方向，我们可以寻找哪颗星星来辨别正北方？`,
            options: [
              { text: "北极星", correct: true },
              { text: "启明星", correct: false },
              { text: "织女星", correct: false }
            ]
          },
          {
            qid: `c${id}-q16`,
            title: "太空生活科学常识",
            tip: "在宇宙飞船里因为处于失重状态，普通杯子里的水倒不出来。",
            prompt: `宇航员在太空舱里喝水，为什么要使用带吸管的塑料饮水袋？`,
            options: [
              { text: "因为失重状态下，杯子里的水不会自动往下流", correct: true },
              { text: "因为太空中没有空气不能呼吸", correct: false },
              { text: "因为太空舱里太冷水结成了冰", correct: false }
            ]
          }
        ]
      },
      {
        num: "六",
        title: "综合素养与传统文化：选出最恰当的表达。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `c${id}-q17`,
            title: "中国传统节日排序",
            tip: "按照农历时间先后顺序：春节(正月初一) -> 清明 -> 端午(五月初五) -> 中秋(八月十五) -> 重阳(九月初九)。",
            prompt: `下列中国传统节日按农历时间先后顺序排列正确的是？`,
            options: [
              { text: "春节 → 清明节 → 端午节 → 中秋节 → 重阳节", correct: true },
              { text: "中秋节 → 春节 → 端午节 → 重阳节", correct: false },
              { text: "端午节 → 春节 → 重阳节 → 中秋节", correct: false }
            ]
          },
          {
            qid: `c${id}-q18`,
            title: "神话人物后羿",
            tip: "后羿拉开神弓，射下九个多余的太阳，解救人间苦难。",
            prompt: `神话故事中，射下九个太阳解救黎民百姓的古代英雄是？`,
            options: [
              { text: "后羿", correct: true },
              { text: "盘古", correct: false },
              { text: "夸父", correct: false }
            ]
          },
          {
            qid: `c${id}-q19`,
            title: "做最好的自己",
            tip: "《大象的耳朵》告诉我们不要盲目羡慕和模仿别人。",
            prompt: `大象在经历把耳朵竖起来又放下去后说：“我还是让耳朵耷拉着吧”，这说明？`,
            options: [
              { text: "每个人都有自己的独特特点，不用盲目模仿别人", correct: true },
              { text: "大象的耳朵太沉重了竖不起来", correct: false },
              { text: "大象讨厌自己的大耳朵", correct: false }
            ]
          },
          {
            qid: `c${id}-q20`,
            title: "文明借物与礼貌用语",
            tip: "与同桌借东西要商量、礼貌、按时归还。",
            prompt: `你想要向同学借一本故事书看，最得体文明的表达是？`,
            options: [
              { text: "请问你的这本故事书看完了吗？我可以借阅两天吗？谢谢你！", correct: true },
              { text: "把书给我看几天，不给我就不理你了！", correct: false },
              { text: "直接从同学桌上拿走看", correct: false }
            ]
          }
        ]
      },
      {
        num: "七",
        title: "名篇背诵与诗文诵读：大星奖励。",
        score: 8,
        type: "poem",
        text: "草长莺飞二月天，拂堤杨柳醉春烟。儿童散学归来早，忙趁东风放纸鸢。",
        buttons: [
          { label: "⭐ 有感情朗诵《村居》前两句 (4分)", pts: 4 },
          { label: "🌟 熟练背诵全首《村居》七绝 (4分)", pts: 4 }
        ]
      }
    ]
  };
}

// =========================================================================
// 2. 数学二年级下册（共 20 套 · 人教版全册）
// =========================================================================

const mathG2S2Meta = [
  // 第一单元：数据收集整理
  { id: 1, unit: "第一单元：数据收集整理", title: "第 01 套：数据统计与正字记录法基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "调查喜欢看哪种课外书；一个“正”字代表5票；统计表格绘制与数据分析建议。" },
  // 第二单元：表内除法(一)
  { id: 2, unit: "第二单元：表内除法(一)", title: "第 02 套：平均分的含义与初步认识基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "每份分得同样多叫平均分；按每份几个分与平均分成几份的动手操作。" },
  { id: 3, unit: "第二单元：表内除法(一)", title: "第 03 套：除法算式名称与乘除法转换提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "被除数÷除数=商；根据乘法口诀写出一道乘法算式和两道除法算式。" },
  { id: 4, unit: "第二单元：表内除法(一)", title: "第 04 套：用2~6乘法口诀求商实战避坑卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "求商看除数想口诀；解决“平均每人分几支铅笔”的实际应用题。" },
  // 第三单元：图形的运动(一)
  { id: 5, unit: "第三单元：图形的运动(一)", title: "第 05 套：对称平移与旋转现象辨析基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "轴对称图形与对称轴；平移（沿直线运动不改变形状大小方向）；旋转（绕固定点转动）。" },
  // 第四单元：表内除法(二)
  { id: 6, unit: "第四单元：表内除法(二)", title: "第 06 套：用7、8、9口诀求商基础达标卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "56÷7=8 (七八五十六)；72÷9=8 (八九七十二)；熟练九九表内除法。" },
  { id: 7, unit: "第四单元：表内除法(二)", title: "第 07 套：求一个数是另一个数的几倍应用卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "求一个数是另一个数的几倍，用除法计算：大数÷小数=倍数（不带单位）。" },
  // 🌟 期中大考
  { id: 8, unit: "🌟 数学期中大考", title: "第 08 套：期中表内除法与图形运动冲刺卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "表内除法计算、对称轴判断、平移旋转分类期中全景大检验。" },
  { id: 9, unit: "🌟 数学期中大考", title: "第 09 套：二年级下册数学期中全真模拟统考卷", tag: "期中统考", tagColor: "bg-purple-100 text-purple-800", desc: "完全符合人教版二年级下册期中统考规格的 100 分标准大考卷。" },
  // 第五单元：混合运算
  { id: 10, unit: "第五单元：混合运算", title: "第 10 套：同级与两级混合脱式计算基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "只有加减或只有乘除从左往右算；既有乘除又有加减，先算乘除后算加减。" },
  { id: 11, unit: "第五单元：混合运算", title: "第 11 套：带小括号运算与两步脱式提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "算式里有小括号，要先算小括号里面的；规范两步脱式书写等号对齐。" },
  { id: 12, unit: "第五单元：混合运算", title: "第 12 套：混合运算两步实际问题避坑卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "面包店烤面包、买书打折找零；列综合算式并合理运用小括号。" },
  // 第六单元：有余数的除法
  { id: 13, unit: "第六单元：有余数的除法", title: "第 13 套：有余数除法算理与竖式笔算基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "平均分后有剩余；核心铁律：余数必须比除数小（余数 < 除数）；除法竖式四步（商乘减比）。" },
  { id: 14, unit: "第六单元：有余数的除法", title: "第 14 套：进一法与去尾法解决实际问题提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "租船租车乘座问题必须“进一”（商+1）；买物品做衣服问题只能“去尾”（舍去余数）。" },
  { id: 15, unit: "第六单元：有余数的除法", title: "第 15 套：周期循环规律与余数定位冲刺卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "彩旗红黄蓝绿4面一组循环，第25面是什么颜色？看余数找对应位置。" },
  // 第七单元：万以内数的认识
  { id: 16, unit: "第七单元：万以内数的认识", title: "第 16 套：千以内与万以内数的读写法基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "个、十、百、千、万数位顺序表；中间有零读一个零，末尾有零不读零。" },
  { id: 17, unit: "第七单元：万以内数的认识", title: "第 17 套：万以内数大小比较与求近似数提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "位数不同位数多的数大；位数相同从最高位比；看最接近整百整千求近似数。" },
  // 第八单元：克和千克
  { id: 18, unit: "第八单元：克和千克", title: "第 18 套：认识克与千克质量单位基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "1千克=1000克；一枚2分硬币约1克，一袋食盐500克，2袋食盐正好1千克。" },
  // 第九单元：数学广角
  { id: 19, unit: "第九单元：数学广角", title: "第 19 套：简单推理与九宫格数独逻辑提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "甲不是语文老师也不是数学老师，甲是英语老师；连线排除法与数独推理。" },
  // 👑 期末总决战
  { id: 20, unit: "👑 数学期末大决战", title: "第 20 套：二年级下册数学全真期末统考毕业卷", tag: "期末统考", tagColor: "bg-purple-100 text-purple-800", desc: "除法、运动、混合、余数、万以内数、克与千克全景 100 分统考卷。" }
];

function buildMathG2S2Paper(meta) {
  const id = meta.id;

  let pairs = [];
  let title = "除法算式连连看：把除法算式与正确商/结果连起来。";

  if (id <= 4) {
    title = "表内除法口诀连连看：把除法算式与对应商连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 18 ÷ 3 ➗", emoji: "➗", answer: `ma${id}-1`, char: "6", pinyin: "三六十八" },
      { target: `m${id}-2`, label: "② 24 ÷ 4 ➗", emoji: "➗", answer: `ma${id}-2`, char: "6", pinyin: "四六二十四" },
      { target: `m${id}-3`, label: "③ 30 ÷ 5 ➗", emoji: "➗", answer: `ma${id}-3`, char: "6", pinyin: "五六三十" },
      { target: `m${id}-4`, label: "④ 12 ÷ 2 ➗", emoji: "➗", answer: `ma${id}-4`, char: "6", pinyin: "二六十二" },
      { target: `m${id}-5`, label: "⑤ 36 ÷ 6 ➗", emoji: "➗", answer: `ma${id}-5`, char: "6", pinyin: "六六三十六" },
      { target: `m${id}-6`, label: "⑥ 20 ÷ 4 ➗", emoji: "➗", answer: `ma${id}-6`, char: "5", pinyin: "四五二十" }
    ];
  } else if (id <= 7) {
    title = "7~9口诀除法连连看：把大数除法与商连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 56 ÷ 7 ➗", emoji: "➗", answer: `ma${id}-1`, char: "8", pinyin: "七八五十六" },
      { target: `m${id}-2`, label: "② 72 ÷ 9 ➗", emoji: "➗", answer: `ma${id}-2`, char: "8", pinyin: "八九七十二" },
      { target: `m${id}-3`, label: "③ 64 ÷ 8 ➗", emoji: "➗", answer: `ma${id}-3`, char: "8", pinyin: "八八六十四" },
      { target: `m${id}-4`, label: "④ 63 ÷ 7 ➗", emoji: "➗", answer: `ma${id}-4`, char: "9", pinyin: "七九六十三" },
      { target: `m${id}-5`, label: "⑤ 81 ÷ 9 ➗", emoji: "➗", answer: `ma${id}-5`, char: "9", pinyin: "九九八十一" },
      { target: `m${id}-6`, label: "⑥ 49 ÷ 7 ➗", emoji: "➗", answer: `ma${id}-6`, char: "7", pinyin: "七七四十九" }
    ];
  } else if (id <= 12) {
    title = "混合运算脱式连连看：把两步算式与正确得数连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 4 + 5 × 6 🧮", emoji: "🧮", answer: `ma${id}-1`, char: "34", pinyin: "4+30=34" },
      { target: `m${id}-2`, label: "② (18 + 14) ÷ 4 🧮", emoji: "🧮", answer: `ma${id}-2`, char: "8", pinyin: "32÷4=8" },
      { target: `m${id}-3`, label: "③ 56 - 28 ÷ 7 🧮", emoji: "🧮", answer: `ma${id}-3`, char: "52", pinyin: "56-4=52" },
      { target: `m${id}-4`, label: "④ 7 × (3 + 5) 🧮", emoji: "🧮", answer: `ma${id}-4`, char: "56", pinyin: "7×8=56" },
      { target: `m${id}-5`, label: "⑤ 45 ÷ 5 + 16 🧮", emoji: "🧮", answer: `ma${id}-5`, char: "25", pinyin: "9+16=25" },
      { target: `m${id}-6`, label: "⑥ 63 - (25 + 15) 🧮", emoji: "🧮", answer: `ma${id}-6`, char: "23", pinyin: "63-40=23" }
    ];
  } else if (id <= 15) {
    title = "有余数除法连连看：把有余数算式与商和余数连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 23 ÷ 4 ➗", emoji: "➗", answer: `ma${id}-1`, char: "5余3", pinyin: "4×5+3=23" },
      { target: `m${id}-2`, label: "② 38 ÷ 5 ➗", emoji: "➗", answer: `ma${id}-2`, char: "7余3", pinyin: "5×7+3=38" },
      { target: `m${id}-3`, label: "③ 29 ÷ 6 ➗", emoji: "➗", answer: `ma${id}-3`, char: "4余5", pinyin: "6×4+5=29" },
      { target: `m${id}-4`, label: "④ 45 ÷ 7 ➗", emoji: "➗", answer: `ma${id}-4`, char: "6余3", pinyin: "7×6+3=45" },
      { target: `m${id}-5`, label: "⑤ 50 ÷ 8 ➗", emoji: "➗", answer: `ma${id}-5`, char: "6余2", pinyin: "8×6+2=50" },
      { target: `m${id}-6`, label: "⑥ 34 ÷ 9 ➗", emoji: "➗", answer: `ma${id}-6`, char: "3余7", pinyin: "9×3+7=34" }
    ];
  } else {
    title = "期末综合速算连连看：把大数与运算式连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 2000 + 3000 ➕", emoji: "➕", answer: `ma${id}-1`, char: "5000", pinyin: "五千" },
      { target: `m${id}-2`, label: "② 800 + 700 ➕", emoji: "➕", answer: `ma${id}-2`, char: "1500", pinyin: "一千五百" },
      { target: `m${id}-3`, label: "③ 1千克 - 400克 ➖", emoji: "➖", answer: `ma${id}-3`, char: "600克", pinyin: "1000-400" },
      { target: `m${id}-4`, label: "④ 48 ÷ 6 + 12 🧮", emoji: "🧮", answer: `ma${id}-4`, char: "20", pinyin: "8+12=20" },
      { target: `m${id}-5`, label: "⑤ 9 × 4 ÷ 6 🧮", emoji: "🧮", answer: `ma${id}-5`, char: "6", pinyin: "36÷6=6" },
      { target: `m${id}-6`, label: "⑥ 3千克 + 2千克 ⚖️", emoji: "⚖️", answer: `ma${id}-6`, char: "5千克", pinyin: "5000克" }
    ];
  }

  const shuffledAnswers = [...pairs.map(p => p.answer)].reverse();

  return {
    id: id,
    unit: meta.unit,
    title: meta.title,
    tag: meta.tag,
    tagColor: meta.tagColor,
    desc: meta.desc,
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: title,
        score: 12,
        type: "matching",
        tip: "点击左侧算式，再点击右侧对应得数",
        pairs: pairs,
        shuffledAnswers: shuffledAnswers
      },
      {
        num: "二",
        title: "基础概念与除法算理：选出正确的一项。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `m${id}-q1`,
            title: "平均分概念",
            tip: "只有每份分得同样多，才叫平均分。",
            prompt: `把 12 个苹果分成 3 份，下列分法属于“平均分”的是？`,
            options: [
              { text: "每份都有 4 个 (4, 4, 4)", correct: true },
              { text: "第1份3个，第2份4个，第3份5个", correct: false },
              { text: "第1份2个，第2份2个，第3份8个", correct: false }
            ]
          },
          {
            qid: `m${id}-q2`,
            title: "除法算式名称",
            tip: "在 24 ÷ 6 = 4 中，24是被除数，6是除数，4是商。",
            prompt: `在除法算式 35 ÷ 7 = 5 中，35 叫做？`,
            options: [
              { text: "被除数", correct: true },
              { text: "除数", correct: false },
              { text: "商", correct: false }
            ]
          },
          {
            qid: `m${id}-q3`,
            title: "余数铁律",
            tip: "在有余数的除法中，余数一定要比除数小（余数 < 除数）。",
            prompt: `一个除法算式的除数是 6，那么它的余数最大只能是？`,
            options: [
              { text: "5", correct: true },
              { text: "6", correct: false },
              { text: "7", correct: false }
            ]
          },
          {
            qid: `m${id}-q4`,
            title: "质量单位认知",
            tip: "1千克 = 1000克，较轻物体用克，较重物体用千克。",
            prompt: `下列物品质量最接近 1 克的是？`,
            options: [
              { text: "一枚 2 分硬币", correct: true },
              { text: "一个西瓜", correct: false },
              { text: "一袋大米", correct: false }
            ]
          }
        ]
      },
      {
        num: "三",
        title: "混合运算与脱式速算：选出正确得数。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `m${id}-q5`,
            title: "两级运算顺序",
            tip: "先算乘除法，再算加减法。",
            prompt: `脱式计算：36 - 24 ÷ 6 = ？`,
            options: [
              { text: "32 (先算24÷6=4，再算36-4=32)", correct: true },
              { text: "2 (先算36-24=12，再算12÷6=2)", correct: false },
              { text: "30", correct: false }
            ]
          },
          {
            qid: `m${id}-q6`,
            title: "有小括号的运算",
            tip: "有小括号必须先算小括号里面的！",
            prompt: `脱式计算：(42 - 18) ÷ 4 = ？`,
            options: [
              { text: "6 (先算42-18=24，再算24÷4=6)", correct: true },
              { text: "38", correct: false },
              { text: "8", correct: false }
            ]
          },
          {
            qid: `m${id}-q7`,
            title: "乘除混合运算",
            tip: "只有乘除同级运算，从左往右依次计算。",
            prompt: `计算：4 × 9 ÷ 6 = ？`,
            options: [
              { text: "6 (4×9=36，36÷6=6)", correct: true },
              { text: "9", correct: false },
              { text: "12", correct: false }
            ]
          },
          {
            qid: `m${id}-q8`,
            title: "整百整千数加减法",
            tip: "几个千加几个千，或者把0对齐口算。",
            prompt: `口算：4000 + 5000 - 3000 = ？`,
            options: [
              { text: "6000", correct: true },
              { text: "7000", correct: false },
              { text: "5000", correct: false }
            ]
          }
        ]
      },
      {
        num: "四",
        title: "图形运动与数位空间：选出正确的一项。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `m${id}-q9`,
            title: "平移现象辨识",
            tip: "物体沿直线滑动，形状、大小和方向都不改变。",
            prompt: `下列现象中，属于“平移”现象的是？`,
            options: [
              { text: "升国旗时国旗缓缓上升", correct: true },
              { text: "风车叶片随风转动", correct: false },
              { text: "汽车方向盘的转动", correct: false }
            ]
          },
          {
            qid: `m${id}-q10`,
            title: "旋转现象辨识",
            tip: "物体绕着一个点或一个轴做圆周运动。",
            prompt: `下列现象中，属于“旋转”现象的是？`,
            options: [
              { text: "钟面上时针和分针的走动", correct: true },
              { text: "推拉抽屉的移动", correct: false },
              { text: "电梯直上直下升降", correct: false }
            ]
          },
          {
            qid: `m${id}-q11`,
            title: "万以内数位读写",
            tip: "从高位读起，中间不管有几个0只读一个零，末尾的0不读。",
            prompt: `数字 5008 的正确读法是？`,
            options: [
              { text: "五千零八", correct: true },
              { text: "五千零零八", correct: false },
              { text: "五千八", correct: false }
            ]
          },
          {
            qid: `m${id}-q12`,
            title: "求近似数",
            tip: "看最接近哪个整百整千数。",
            prompt: `小明家离学校有 998 米，998 米大约是？`,
            options: [
              { text: "1000 米", correct: true },
              { text: "900 米", correct: false },
              { text: "800 米", correct: false }
            ]
          }
        ]
      },
      {
        num: "五",
        title: "生活质量与解决实际问题：选出合理答案。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `m${id}-q13`,
            title: "质量单位换算",
            tip: "1千克 = 1000克，半千克 = 500克。",
            prompt: `3千克等于多少克？`,
            options: [
              { text: "3000 克", correct: true },
              { text: "300 克", correct: false },
              { text: "30 克", correct: false }
            ]
          },
          {
            qid: `m${id}-q14`,
            title: "进一法租船问题",
            tip: "22人坐船每条坐4人，22÷4=5条余2人，剩下2人也要租1条船，所以需5+1=6条。",
            prompt: `有 22 位小朋友去公园划船，每条船最多坐 4 人，至少要租几条船？`,
            options: [
              { text: "6 条 (22÷4=5条……2人，5+1=6条)", correct: true },
              { text: "5 条", correct: false },
              { text: "4 条", correct: false }
            ]
          },
          {
            qid: `m${id}-q15`,
            title: "去尾法做衣服问题",
            tip: "25米布做衣服每套用3米，25÷3=8套余1米，剩下1米不够做一套，只能做8套。",
            prompt: `妈妈买来 25 米花布做连衣裙，每件衣服用布 3 米，最多能做几件？`,
            options: [
              { text: "8 件 (25÷3=8件……1米，最多8件)", correct: true },
              { text: "9 件", correct: false },
              { text: "7 件", correct: false }
            ]
          },
          {
            qid: `m${id}-q16`,
            title: "求倍数实际问题",
            tip: "求一个数是另一个数的几倍用除法：大数÷小数。",
            prompt: `池塘里有 36 只鸭子，9 只鹅，鸭子的只数是鹅的几倍？`,
            options: [
              { text: "4 倍 (36 ÷ 9 = 4)", correct: true },
              { text: "27 倍 (36 - 9 = 27)", correct: false },
              { text: "45 倍 (36 + 9 = 45)", correct: false }
            ]
          }
        ]
      },
      {
        num: "六",
        title: "数学广角与逻辑推理：选出正确结论。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `m${id}-q17`,
            title: "简单排除法推理",
            tip: "根据条件逐一排除不可能项。",
            prompt: `小明、乐乐、月亮三人分别拿着语文书、数学书和英语书。小明说：“我拿的不是数学书”，月亮说：“我拿的是语文书”。那么乐乐拿的是？`,
            options: [
              { text: "数学书", correct: true },
              { text: "语文书", correct: false },
              { text: "英语书", correct: false }
            ]
          },
          {
            qid: `m${id}-q18`,
            title: "周期彩旗规律",
            tip: "彩旗按红、黄、蓝3面一组排列，20÷3=6组余2面，余数2对应黄色。",
            prompt: `学校操场按“红、黄、蓝”规律挂彩旗，第 20 面彩旗是？`,
            options: [
              { text: "黄色 (20÷3=6组……2面，第2面是黄色)", correct: true },
              { text: "红色", correct: false },
              { text: "蓝色", correct: false }
            ]
          },
          {
            qid: `m${id}-q19`,
            title: "买文具综合计算",
            tip: "总钱数 - 买书钱 = 剩下的钱，再算能买几支笔。",
            prompt: `小明有 50 元钱，买了一本 26 元的科普书，剩下的钱买 4 元一支的钢笔，可以买几支？`,
            options: [
              { text: "6 支 ((50 - 26) ÷ 4 = 24 ÷ 4 = 6)", correct: true },
              { text: "8 支", correct: false },
              { text: "5 支", correct: false }
            ]
          },
          {
            qid: `m${id}-q20`,
            title: "万以内数的大小比较",
            tip: "4080 与 4800 比较，千位都是4，百位8大于0，所以4800更大。",
            prompt: `在 4080、4800、4008 这三个数中，最大的是？`,
            options: [
              { text: "4800", correct: true },
              { text: "4080", correct: false },
              { text: "4008", correct: false }
            ]
          }
        ]
      },
      {
        num: "七",
        title: "运算口诀与算理口述：大星奖励。",
        score: 8,
        type: "poem",
        text: "除数是几想几的口诀，余数一定要比除数小；混合脱式小括号，先算括号再算外！",
        buttons: [
          { label: "⭐ 声情并茂诵读除法与余数口诀 (4分)", pts: 4 },
          { label: "🌟 自信流利背诵混合运算两步歌诀 (4分)", pts: 4 }
        ]
      }
    ]
  };
}

// =========================================================================
// 3. 英语二年级下册（共 16 套 · 人教新起点全册）
// =========================================================================

const englishG2S2Meta = [
  // Unit 1: Playtime
  { id: 1, unit: "Unit 1: Playtime", title: "第 01 套：课余运动与玩具认知基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "play football, fly a kite, ride a bike, make a model plane, swim, skate 课外活动词汇。" },
  { id: 2, unit: "Unit 1: Playtime", title: "第 02 套：课余能力问答与生活交际提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Can you swim? Yes, I can. / Can you fly a kite? No, I can't. What can you do?" },
  // Unit 2: Weather
  { id: 3, unit: "Unit 2: Weather", title: "第 03 套：天气现象与自然特征基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "sunny, cloudy, rainy, windy, snowy 常见天气词汇认读与发音。" },
  { id: 4, unit: "Unit 2: Weather", title: "第 04 套：天气询问与出行日常提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "What's the weather like today? It's sunny. Let's go and play football. Take an umbrella." },
  // Unit 3: Seasons
  { id: 5, unit: "Unit 3: Seasons", title: "第 05 套：四季变换与冷暖感受基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "spring, summer, autumn, winter, hot, cold, warm, cool 四季词汇与温度认知。" },
  { id: 6, unit: "Unit 3: Seasons", title: "第 06 套：四季喜好与特色活动提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "I like spring. It's warm. I can fly a kite. In winter, it's cold. I can make a snowman." },
  // 🌟 期中大考
  { id: 7, unit: "🌟 英语期中大考", title: "第 07 套：期中活动爱好与天气四季实战卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "课外运动、天气状况、四季温度核心词汇与句型大盘点。" },
  { id: 8, unit: "🌟 英语期中大考", title: "第 08 套：期中情景交际与听读冲刺卷", tag: "期中冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "情境交际、句型问答、生活短文全景期中统考模拟。" },
  // Unit 4: Time
  { id: 9, unit: "Unit 4: Time", title: "第 09 套：整点时间认读与作息基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "7 o'clock, 12 o'clock, get up, go to school, have lunch, go home, go to bed 时间与作息。" },
  { id: 10, unit: "Unit 4: Time", title: "第 10 套：时间询问与按时作息提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "What time is it? It's 7 o'clock. It's time to get up / go to school. Good morning!" },
  // Unit 5: My Day
  { id: 11, unit: "Unit 5: My Day", title: "第 11 套：一天日常日程与作息基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "in the morning, in the afternoon, in the evening, read a book, watch TV, do homework." },
  { id: 12, unit: "Unit 5: My Day", title: "第 12 套：个人生活日常英文描述提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "I read a book in the evening. In the afternoon, I play football with my classmates." },
  // Unit 6: My Week
  { id: 13, unit: "Unit 6: My Week", title: "第 13 套：一周七天英文认读基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday 一周七天词汇拼写。" },
  { id: 14, unit: "Unit 6: My Week", title: "第 14 套：周计划规划与日程安排提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "What do you do on Monday? I go to school. On Saturday, I ride my bike." },
  // 👑 期末总决战
  { id: 15, unit: "👑 英语期末大决战", title: "第 15 套：全册生活交际高频词汇归类达标卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "活动、天气、四季、时间、日程、星期六大生活主题词汇大通关。" },
  { id: 16, unit: "👑 英语期末大决战", title: "第 16 套：二年级下册英语全真期末统考冲刺卷", tag: "期末统考", tagColor: "bg-rose-100 text-rose-800", desc: "完全对标人教新起点版二年级下册期末统考规范的 100 分满分卷。" }
];

function buildEnglishG2S2Paper(meta) {
  const id = meta.id;

  let pairs = [];
  let title = "Playtime & Life Matching: 把英文单词与中文连起来。";

  if (id <= 2) {
    title = "Playtime 课外运动连连看：把活动英文与中文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① play football ⚽", emoji: "⚽", answer: `ea${id}-1`, char: "play football", pinyin: "踢足球" },
      { target: `e${id}-2`, label: "② fly a kite 🪁", emoji: "🪁", answer: `ea${id}-2`, char: "fly a kite", pinyin: "放风筝" },
      { target: `e${id}-3`, label: "③ ride a bike 🚲", emoji: "🚲", answer: `ea${id}-3`, char: "ride a bike", pinyin: "骑自行车" },
      { target: `e${id}-4`, label: "④ swim 🏊", emoji: "🏊", answer: `ea${id}-4`, char: "swim", pinyin: "游泳" },
      { target: `e${id}-5`, label: "⑤ skate ⛸️", emoji: "⛸️", answer: `ea${id}-5`, char: "skate", pinyin: "滑冰" },
      { target: `e${id}-6`, label: "⑥ model plane ✈️", emoji: "✈️", answer: `ea${id}-6`, char: "model plane", pinyin: "模型飞机" }
    ];
  } else if (id <= 4) {
    title = "Weather 天气连连看：把天气英文与中文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① sunny ☀️", emoji: "☀️", answer: `ea${id}-1`, char: "sunny", pinyin: "晴朗的" },
      { target: `e${id}-2`, label: "② cloudy ☁️", emoji: "☁️", answer: `ea${id}-2`, char: "多云的" },
      { target: `e${id}-3`, label: "③ rainy 🌧️", emoji: "🌧️", answer: `ea${id}-3`, char: "下雨的" },
      { target: `e${id}-4`, label: "④ windy 🌬️", emoji: "🌬️", answer: `ea${id}-4`, char: "刮风的" },
      { target: `e${id}-5`, label: "⑤ snowy ❄️", emoji: "❄️", answer: `ea${id}-5`, char: "下雪的" },
      { target: `e${id}-6`, label: "⑥ umbrella ☂️", emoji: "☂️", answer: `ea${id}-6`, char: "umbrella", pinyin: "雨伞" }
    ];
  } else if (id <= 6) {
    title = "Seasons 四季连连看：把季节与英文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① spring 🌸", emoji: "🌸", answer: `ea${id}-1`, char: "spring", pinyin: "春天" },
      { target: `e${id}-2`, label: "② summer 🍉", emoji: "🍉", answer: `ea${id}-2`, char: "summer", pinyin: "夏天" },
      { target: `e${id}-3`, label: "③ autumn 🍁", emoji: "🍁", answer: `ea${id}-3`, char: "autumn", pinyin: "秋天" },
      { target: `e${id}-4`, label: "④ winter ⛄", emoji: "⛄", answer: `ea${id}-4`, char: "winter", pinyin: "冬天" },
      { target: `e${id}-5`, label: "⑤ warm 🌱", emoji: "🌱", answer: `ea${id}-5`, char: "warm", pinyin: "暖和的" },
      { target: `e${id}-6`, label: "⑥ cold 🥶", emoji: "🥶", answer: `ea${id}-6`, char: "cold", pinyin: "寒冷的" }
    ];
  } else if (id <= 10) {
    title = "Time 作息连连看：把时间作息与英文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① get up ⏰", emoji: "⏰", answer: `ea${id}-1`, char: "get up", pinyin: "起床" },
      { target: `e${id}-2`, label: "② go to school 🏫", emoji: "🏫", answer: `ea${id}-2`, char: "go to school", pinyin: "上学" },
      { target: `e${id}-3`, label: "③ have lunch 🍱", emoji: "🍱", answer: `ea${id}-3`, char: "have lunch", pinyin: "吃午餐" },
      { target: `e${id}-4`, label: "④ go home 🏡", emoji: "🏡", answer: `ea${id}-4`, char: "go home", pinyin: "回家" },
      { target: `e${id}-5`, label: "⑤ go to bed 🛏️", emoji: "🛏️", answer: `ea${id}-5`, char: "go to bed", pinyin: "睡觉" },
      { target: `e${id}-6`, label: "⑥ 7 o'clock 🕖", emoji: "🕖", answer: `ea${id}-6`, char: "7 o'clock", pinyin: "7点整" }
    ];
  } else if (id <= 12) {
    title = "My Day 日常连连看：把时间段活动与英文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① in the morning 🌅", emoji: "🌅", answer: `ea${id}-1`, char: "morning", pinyin: "早晨/上午" },
      { target: `e${id}-2`, label: "② in the afternoon ☀️", emoji: "☀️", answer: `ea${id}-2`, char: "afternoon", pinyin: "下午" },
      { target: `e${id}-3`, label: "③ in the evening 🌙", emoji: "🌙", answer: `ea${id}-3`, char: "evening", pinyin: "晚上" },
      { target: `e${id}-4`, label: "④ read a book 📖", emoji: "📖", answer: `ea${id}-4`, char: "read a book", pinyin: "看书" },
      { target: `e${id}-5`, label: "⑤ watch TV 📺", emoji: "📺", answer: `ea${id}-5`, char: "watch TV", pinyin: "看电视" },
      { target: `e${id}-6`, label: "⑥ do homework ✍️", emoji: "✍️", answer: `ea${id}-6`, char: "do homework", pinyin: "做作业" }
    ];
  } else {
    title = "My Week 一周连连看：把星期几与英文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① Monday 📅", emoji: "📅", answer: `ea${id}-1`, char: "Monday", pinyin: "星期一" },
      { target: `e${id}-2`, label: "② Tuesday 📅", emoji: "📅", answer: `ea${id}-2`, char: "Tuesday", pinyin: "星期二" },
      { target: `e${id}-3`, label: "③ Wednesday 📅", emoji: "📅", answer: `ea${id}-3`, char: "Wednesday", pinyin: "星期三" },
      { target: `e${id}-4`, label: "④ Thursday 📅", emoji: "📅", answer: `ea${id}-4`, char: "Thursday", pinyin: "星期四" },
      { target: `e${id}-5`, label: "⑤ Friday 📅", emoji: "📅", answer: `ea${id}-5`, char: "Friday", pinyin: "星期五" },
      { target: `e${id}-6`, label: "⑥ Sunday ☀️", emoji: "☀️", answer: `ea${id}-6`, char: "Sunday", pinyin: "星期日" }
    ];
  }

  const shuffledAnswers = [...pairs.map(p => p.answer)].reverse();

  return {
    id: id,
    unit: meta.unit,
    title: meta.title,
    tag: meta.tag,
    tagColor: meta.tagColor,
    desc: meta.desc,
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: title,
        score: 12,
        type: "matching",
        tip: "点击左侧图片或活动，再点击右侧对应英文单词徽章",
        pairs: pairs,
        shuffledAnswers: shuffledAnswers
      },
      {
        num: "二",
        title: "Vocabulary & Meaning (核心词汇与释义)：选出正确的中文。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `e${id}-q1`,
            title: "活动词汇认知",
            tip: "swim 是游泳，skate 是滑冰。",
            prompt: `单词 “swim” 的中文意思是？`,
            options: [
              { text: "游泳", correct: true },
              { text: "放风筝", correct: false },
              { text: "踢足球", correct: false }
            ]
          },
          {
            qid: `e${id}-q2`,
            title: "天气词汇辨析",
            tip: "sunny 是晴朗的，rainy 是下雨的，cloudy 是多云的。",
            prompt: `今天下雨了，形容“下雨的”英文单词是？`,
            options: [
              { text: "rainy", correct: true },
              { text: "sunny", correct: false },
              { text: "snowy", correct: false }
            ]
          },
          {
            qid: `e${id}-q3`,
            title: "季节与冷暖",
            tip: "spring 春天暖和 (warm)，winter 冬天寒冷 (cold)。",
            prompt: `春天很暖和，形容“暖和的”英文单词是？`,
            options: [
              { text: "warm", correct: true },
              { text: "cold", correct: false },
              { text: "hot", correct: false }
            ]
          },
          {
            qid: `e${id}-q4`,
            title: "作息时间词汇",
            tip: "get up 是起床，go to bed 是上床睡觉。",
            prompt: `短语 “get up” 的中文意思是？`,
            options: [
              { text: "起床", correct: true },
              { text: "睡觉", correct: false },
              { text: "上学", correct: false }
            ]
          }
        ]
      },
      {
        num: "三",
        title: "Dialogue & Communication (情景问答与对话)：选出最得体应答。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `e${id}-q5`,
            title: "能力询问与应答",
            tip: "Can you swim? 肯定回答用 Yes, I can.",
            prompt: `同桌问你：“Can you swim?”，你会游泳，应回答：`,
            options: [
              { text: "Yes, I can.", correct: true },
              { text: "No, I am not.", correct: false },
              { text: "I like dogs.", correct: false }
            ]
          },
          {
            qid: `e${id}-q6`,
            title: "天气询问句型",
            tip: "询问今天天气：What's the weather like today?",
            prompt: `早上出门前想询问妈妈今天的天气，最得体的英文句子是？`,
            options: [
              { text: "What's the weather like today?", correct: true },
              { text: "What time is it?", correct: false },
              { text: "Where are you going?", correct: false }
            ]
          },
          {
            qid: `e${id}-q7`,
            title: "时间询问与作息提醒",
            tip: "It's 7 o'clock. It's time to get up! 7点了，该起床了！",
            prompt: `钟表指着7点，妈妈提醒乐乐该起床了，会说：`,
            options: [
              { text: "It's 7 o'clock. It's time to get up.", correct: true },
              { text: "It's time to have lunch.", correct: false },
              { text: "Good night!", correct: false }
            ]
          },
          {
            qid: `e${id}-q8`,
            title: "周末日程问答",
            tip: "What do you do on Sunday? 询问周日做什么。",
            prompt: `朋友问你：“What do you do on Sunday?”，你周日骑自行车，应回答：`,
            options: [
              { text: "I ride my bike on Sunday.", correct: true },
              { text: "I have lunch at 12 o'clock.", correct: false },
              { text: "It's sunny today.", correct: false }
            ]
          }
        ]
      },
      {
        num: "四",
        title: "Grammar & Structure (核心句型与语法)：选出最正确的句子。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `e${id}-q9`,
            title: "季节喜好与原因",
            tip: "I like summer because I can swim in summer.",
            prompt: `表达“我喜欢夏天，因为我能在夏天游泳”的正确句子是？`,
            options: [
              { text: "I like summer. I can swim.", correct: true },
              { text: "I like winter. It is hot.", correct: false },
              { text: "I don't like spring.", correct: false }
            ]
          },
          {
            qid: `e${id}-q10`,
            title: "时间介词用法",
            tip: "在早晨/下午/晚上用 in the morning / in the afternoon / in the evening.",
            prompt: `“在早晨，我去上学”，横线处应填？ “I go to school ______.”`,
            options: [
              { text: "in the morning", correct: true },
              { text: "on the morning", correct: false },
              { text: "at the morning", correct: false }
            ]
          },
          {
            qid: `e${id}-q11`,
            title: "星期介词搭配",
            tip: "在具体星期几前面用介词 on（如 on Monday, on Friday）。",
            prompt: `“在星期五，我们踢足球”，填空正确的是？ “We play football ______ Friday.”`,
            options: [
              { text: "on", correct: true },
              { text: "in", correct: false },
              { text: "at", correct: false }
            ]
          },
          {
            qid: `e${id}-q12`,
            title: "出行雨具提醒",
            tip: "外面下雨了，带把雨伞吧：It's rainy outside. Take an umbrella.",
            prompt: `“今天下雨了，带把伞吧”的规范英文是？`,
            options: [
              { text: "It's rainy. Take an umbrella.", correct: true },
              { text: "It's sunny. Take a coat.", correct: false },
              { text: "It's snowy. Fly a kite.", correct: false }
            ]
          }
        ]
      },
      {
        num: "五",
        title: "Reading Comprehension (生活短文阅读)：阅读短文并选择最佳答案。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `e${id}-q13`,
            title: "天气与活动短文",
            tip: "短文：Today is Saturday. It's sunny and warm. Lele flies a kite in the park.",
            prompt: `根据短文，乐乐在公园里做什么活动？`,
            options: [
              { text: "放风筝 (flies a kite)", correct: true },
              { text: "游泳 (swim)", correct: false },
              { text: "堆雪人 (make a snowman)", correct: false }
            ]
          },
          {
            qid: `e${id}-q14`,
            title: "日常作息短文",
            tip: "短文：I get up at 7:00. I have breakfast at 7:30. I go to school at 8:00.",
            prompt: `根据短文，作者几点去上学？`,
            options: [
              { text: "8:00 (8点)", correct: true },
              { text: "7:00", correct: false },
              { text: "7:30", correct: false }
            ]
          },
          {
            qid: `e${id}-q15`,
            title: "季节特征短文",
            tip: "短文：Winter is cold and snowy. We put on coats and make a snowman.",
            prompt: `短文描述的是哪个季节？`,
            options: [
              { text: "冬天 (winter)", correct: true },
              { text: "夏天 (summer)", correct: false },
              { text: "春天 (spring)", correct: false }
            ]
          },
          {
            qid: `e${id}-q16`,
            title: "周日程短文",
            tip: "短文：From Monday to Friday, I go to school. On Sunday, I read books with Yueliang.",
            prompt: `周日作者和月亮一起做什么？`,
            options: [
              { text: "看书 (read books)", correct: true },
              { text: "滑冰", correct: false },
              { text: "买菜", correct: false }
            ]
          }
        ]
      },
      {
        num: "六",
        title: "Habits & Manners (生活习惯与礼貌)：选出健康有礼的行为。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `e${id}-q17`,
            title: "按时作息健康素养",
            tip: "早睡早起身体好：Go to bed early and get up early.",
            prompt: `为了保持充沛的精力和健康的身体，小学生应当？`,
            options: [
              { text: "按时睡觉，早睡早起 (Go to bed early, get up early)", correct: true },
              { text: "熬夜玩手机到半夜", correct: false },
              { text: "早上不起床一直赖床", correct: false }
            ]
          },
          {
            qid: `e${id}-q18`,
            title: "恶劣天气安全防范",
            tip: "雷雨大风天气避免在树下停留：Stay safe inside.",
            prompt: `雷雨大风天气（rainy and windy），我们应该？`,
            options: [
              { text: "呆在室内安全避雨，不可在大树下躲雨", correct: true },
              { text: "跑到大树底下放风筝", correct: false },
              { text: "到河里游泳", correct: false }
            ]
          },
          {
            qid: `e${id}-q19`,
            title: "互助友谊",
            tip: "放学时与老师和同学礼貌道别：See you tomorrow / Goodbye.",
            prompt: `下午放学回家，礼貌同老师同学告别说：`,
            options: [
              { text: "Goodbye! See you tomorrow!", correct: true },
              { text: "What time is it?", correct: false },
              { text: "I have an apple.", correct: false }
            ]
          },
          {
            qid: `e${id}-q20`,
            title: "计划管理习惯",
            tip: "合理安排每周时间，劳逸结合。",
            prompt: `关于周一到周日的安排，好习惯是？`,
            options: [
              { text: "制定周计划，认真学习并积极锻炼身体", correct: true },
              { text: "作业拖到周日晚上才匆忙补写", correct: false },
              { text: "每天只顾看电视不做作业", correct: false }
            ]
          }
        ]
      },
      {
        num: "七",
        title: "Chant & Rhyme (四季与作息英文欢唱)：大星奖励。",
        score: 8,
        type: "poem",
        text: "Spring is warm, summer is hot; autumn is cool, winter is cold! Monday to Sunday, happy every day!",
        buttons: [
          { label: "⭐ 伴随轻快节拍朗读四季诗谣 (4分)", pts: 4 },
          { label: "🌟 自信流利唱诵整首星期歌谣 (4分)", pts: 4 }
        ]
      }
    ]
  };
}

// =========================================================================
// 4. 执行生成并写入磁盘
// =========================================================================

console.log('📦 正在生成 30 套语文二年级下册试卷...');
const chineseDb = chineseG2S2Meta.map(buildChineseG2S2Paper);
const chineseJs = `// 统编人教版小学二年级下册语文全真通关考题库 (30套)\nwindow.QUIZ_DATABASE_G2S2 = ${JSON.stringify(chineseDb, null, 2)};\n`;
fs.writeFileSync(chineseOutPath, chineseJs, 'utf-8');
console.log(`✓ 语文二年级下册写入完成: ${chineseOutPath} (${chineseDb.length}套)`);

console.log('📦 正在生成 20 套数学二年级下册试卷...');
const mathDb = mathG2S2Meta.map(buildMathG2S2Paper);
const mathJs = `// 人教版小学二年级下册数学全真通关考题库 (20套)\nwindow.MATH_DATABASE_G2S2 = ${JSON.stringify(mathDb, null, 2)};\n`;
fs.writeFileSync(mathOutPath, mathJs, 'utf-8');
console.log(`✓ 数学二年级下册写入完成: ${mathOutPath} (${mathDb.length}套)`);

console.log('📦 正在生成 16 套英语二年级下册试卷...');
const englishDb = englishG2S2Meta.map(buildEnglishG2S2Paper);
const englishJs = `// 人教新起点小学二年级下册英语全真通关考题库 (16套)\nwindow.ENGLISH_DATABASE_G2S2 = ${JSON.stringify(englishDb, null, 2)};\n`;
fs.writeFileSync(englishOutPath, englishJs, 'utf-8');
console.log(`✓ 英语二年级下册写入完成: ${englishOutPath} (${englishDb.length}套)`);

console.log('\n🎉 二年级下册全部 66 套大卷数据构建完毕！');
