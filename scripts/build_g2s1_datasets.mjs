import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';
const chineseOutPath = path.join(brainDir, 'quiz_data_g2s1.js');
const mathOutPath = path.join(brainDir, 'math_data_g2s1.js');
const englishOutPath = path.join(brainDir, 'english_data_g2s1.js');

console.log('🚀 开始构建部编人教版小学二年级上册【语文30套 + 数学20套 + 英语16套】全科全真题库...');

// =========================================================================
// 1. 语文二年级上册（共 30 套 · 人教版统编全册）
// =========================================================================

const chineseG2S1Meta = [
  // 第一单元：变化之美
  { id: 1, unit: "第一单元：变化之美", title: "第 01 套：小蝌蚪找妈妈与变态发育基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "披着碧绿的衣裳、鼓着大大的眼睛、甩着长长的尾巴；小蝌蚪变青蛙发育过程与动词搭配。" },
  { id: 2, unit: "第一单元：变化之美", title: "第 02 套：我是什么与水的三态变化提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "水变成汽、云、雨、冰雹和雪的科学循环；拟人化描写与反义词辨析。" },
  { id: 3, unit: "第一单元：变化之美", title: "第 03 套：植物妈妈有办法与动词辨析易错卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "蒲公英乘风、苍耳挂皮毛、豌豆晒太阳；四字成语与四声调多音字辨析。" },
  // 第二单元：识字大观
  { id: 4, unit: "第二单元：识字大观", title: "第 04 套：场景歌与量词搭配实战基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "一艘军舰、一处港湾、一方鱼塘、一行垂柳；丰富场景中的规范数量词。" },
  { id: 5, unit: "第二单元：识字大观", title: "第 05 套：树之歌与树木特性辨析提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "杨树高、榕树壮、梧桐树叶像手掌、枫树秋天叶儿红；木字旁生字归类与树木谚语。" },
  { id: 6, unit: "第二单元：识字大观", title: "第 06 套：部首查字法与田家四季歌避坑卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "核心技能【部首查字法】：查部首、数笔画、找页码；农事四季歌（春耕夏耘秋收冬藏）。" },
  // 第三单元：儿童生活
  { id: 7, unit: "第三单元：儿童生活", title: "第 07 套：曹冲称象与聪明智慧基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "赶象上船、画线做记号、装石头到线、称石头重量；逻辑排序与科学巧思。" },
  { id: 8, unit: "第三单元：儿童生活", title: "第 08 套：玲玲的画与积极心态提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "好多事情并不像我们想象的那么糟，只要肯动脑筋，坏事往往能变成好事。" },
  { id: 9, unit: "第三单元：儿童生活", title: "第 09 套：一封信与妈妈睡了温情体验卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "妈妈的温柔与辛劳；ABB/AABB叠词运用与真情实感表达。" },
  // 🌟 期中大考
  { id: 10, unit: "🌟 语文期中大考", title: "第 10 套：期中字词与多音字全真达标卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "前半学期重点生字、多音字（得、教、没、分、重）及部首查字法精准检验。" },
  { id: 11, unit: "🌟 语文期中大考", title: "第 11 套：期中句子积累与课文背诵冲刺卷", tag: "期中冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "名句日积月累、古诗默写、把字句被字句转换综合检验。" },
  { id: 12, unit: "🌟 语文期中大考", title: "第 12 套：二年级上册语文期中全真模拟统考卷", tag: "期中统考", tagColor: "bg-purple-100 text-purple-800", desc: "完全符合部编版二年级上册统考要求的 100 分综合期中卷。" },
  // 第四单元：壮美家乡
  { id: 13, unit: "第四单元：壮美家乡", title: "第 13 套：名楼瀑布与千古绝句基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "《登鹳雀楼》《望庐山瀑布》古诗背诵与意境理解；千里目、更上一层楼。" },
  { id: 14, unit: "第四单元：壮美家乡", title: "第 14 套：黄山奇石与比喻联想提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "仙桃石、猴子观海、仙人指路、金鸡叫天都；惟妙惟肖的比喻句与想象力。" },
  { id: 15, unit: "第四单元：壮美家乡", title: "第 15 套：日月潭与葡萄沟风情体验卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "台湾日月潭的光华岛风貌；新疆吐鲁番葡萄干制作与热情好客维吾尔族老乡。" },
  // 第五单元：智慧寓言
  { id: 16, unit: "第五单元：智慧寓言", title: "第 16 套：坐井观天与见识广狭基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "青蛙与小鸟的对话；天不过井口那么大与无边无际的视界对比。" },
  { id: 17, unit: "第五单元：智慧寓言", title: "第 17 套：寒号鸟与得过且过提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "哆啰啰，寒风冻死我，明天就做窝；做事要未雨绸缪，不可得过且过。" },
  { id: 18, unit: "第五单元：智慧寓言", title: "第 18 套：我要的是葫芦与因果规律避坑卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "叶子生蚜虫与小葫芦变黄落下的因果联系；感叹句与反问句语气辨析。" },
  // 第六单元：伟人岁月
  { id: 19, unit: "第六单元：伟人岁月", title: "第 19 套：大禹治水与担当精神基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "十三年三过家门而不入；鲧筑坝堵水与禹开凿河渠疏导治水历史传承。" },
  { id: 20, unit: "第六单元：伟人岁月", title: "第 20 套：朱德的扁担与革命情怀提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "井冈山挑粮上山；朱德同志藏扁担与官兵同甘共苦精神。" },
  { id: 21, unit: "第六单元：伟人岁月", title: "第 21 套：难忘的泼水节与传统民俗体验卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "周总理同傣族人民共度泼水节；银碗盛水、柏树枝泼水祝福。" },
  // 第七单元：自然想象
  { id: 22, unit: "第七单元：自然想象", title: "第 22 套：山寺夜宿与塞外风光基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "危楼高百尺手可摘星辰；天苍苍野茫茫风吹草低见牛羊；古诗意境背诵。" },
  { id: 23, unit: "第七单元：自然想象", title: "第 23 套：雾在哪里与拟人修辞提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "雾是个淘气的孩子，把大海、太阳、天空藏起来；拟人化生动想象。" },
  { id: 24, unit: "第七单元：自然想象", title: "第 24 套：雪孩子与舍己救人避坑卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "小白兔家着火；雪孩子舍己救人化成水、升腾成一朵美丽的白云。" },
  // 第八单元：相处之道
  { id: 25, unit: "第八单元：相处之道", title: "第 25 套：狐假虎威与成语典故基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "神气活现、半信半疑、东张西望；借助别人的威风吓唬人寓言内涵。" },
  { id: 26, unit: "第八单元：相处之道", title: "第 26 套：狐狸分奶酪与伙伴相处提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "两只小熊斤斤计较导致奶酪被狐狸吃光；伙伴相处要学会谦让与信任。" },
  { id: 27, unit: "第八单元：相处之道", title: "第 27 套：纸船和风筝与友谊修补体验卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "松鼠和小熊吵架后用纸船和风筝传递和解之情；宽容与主动和好美德。" },
  // 👑 期末总决战
  { id: 28, unit: "👑 语文期末终极大决战", title: "第 28 套：全册重点多音字与形近字避坑冲刺卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "全册易错多音字、形近字、同音字地毯式大排查与辨析。" },
  { id: 29, unit: "👑 语文期末终极大决战", title: "第 29 套：全册背诵古诗文日积月累通关卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "梅花、登鹳雀楼、望庐山瀑布、夜宿山寺、敕勒歌全册名篇背诵与默写。" },
  { id: 30, unit: "👑 语文期末终极大决战", title: "第 30 套：二年级上册语文全真期末统考毕业卷", tag: "期末冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "紧扣统编版二年级上册期末统考考纲的 100 分标准规范毕业大考卷。" }
];

function buildChineseG2S1Paper(meta) {
  const id = meta.id;
  
  // 1. 连连看配对 (6对)
  let pairs = [];
  let tip = "点击左侧，连到右侧正确答案";
  let title = "核心连连看：词语生字与释义连线。";

  if (id <= 3) {
    title = "动词与大自然连连看：把生动动词与对应事物连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 披着 🧥", emoji: "🧥", answer: `ca${id}-1`, char: "衣裳", pinyin: "yī shang" },
      { target: `c${id}-2`, label: "② 鼓着 👁️", emoji: "👁️", answer: `ca${id}-2`, char: "眼睛", pinyin: "yǎn jing" },
      { target: `c${id}-3`, label: "③ 甩着 🐟", emoji: "🐟", answer: `ca${id}-3`, char: "尾巴", pinyin: "wěi ba" },
      { target: `c${id}-4`, label: "④ 露着 🐸", emoji: "🐸", answer: `ca${id}-4`, char: "肚皮", pinyin: "dù pí" },
      { target: `c${id}-5`, label: "⑤ 乘着 🌬️", emoji: "🌬️", answer: `ca${id}-5`, char: "微风", pinyin: "wēi fēng" },
      { target: `c${id}-6`, label: "⑥ 挂住 🐑", emoji: "🐑", answer: `ca${id}-6`, char: "皮毛", pinyin: "pí máo" }
    ];
  } else if (id <= 6) {
    title = "量词与场景连连看：把事物连到规范数量词。";
    pairs = [
      { target: `c${id}-1`, label: "① 军舰 🚢", emoji: "🚢", answer: `ca${id}-1`, char: "一艘", pinyin: "yī sōu" },
      { target: `c${id}-2`, label: "② 鱼塘 🐟", emoji: "🐟", answer: `ca${id}-2`, char: "一方", pinyin: "yī fāng" },
      { target: `c${id}-3`, label: "③ 垂柳 🌿", emoji: "🌿", answer: `ca${id}-3`, char: "一行", pinyin: "yī háng" },
      { target: `c${id}-4`, label: "④ 翠竹 🎍", emoji: "🎍", answer: `ca${id}-4`, char: "一丛", pinyin: "yī cóng" },
      { target: `c${id}-5`, label: "⑤ 飞鸟 🐦", emoji: "🐦", answer: `ca${id}-5`, char: "一群", pinyin: "yī qún" },
      { target: `c${id}-6`, label: "⑥ 铜号 🎺", emoji: "🎺", answer: `ca${id}-6`, char: "一把", pinyin: "yī bǎ" }
    ];
  } else if (id <= 9) {
    title = "儿童生活词语连连看：把近反义词或动宾搭配连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 称象 🐘", emoji: "🐘", answer: `ca${id}-1`, char: "重量", pinyin: "zhòng liàng" },
      { target: `c${id}-2`, label: "② 画线 ✏️", emoji: "✏️", answer: `ca${id}-2`, char: "记号", pinyin: "jì hao" },
      { target: `c${id}-3`, label: "③ 收拾 📦", emoji: "📦", answer: `ca${id}-3`, char: "书包", pinyin: "shū bāo" },
      { target: `c${id}-4`, label: "④ 眨着 👀", emoji: "👀", answer: `ca${id}-4`, char: "眼睛", pinyin: "yǎn jing" },
      { target: `c${id}-5`, label: "⑤ 微微 👄", emoji: "👄", answer: `ca${id}-5`, char: "笑着", pinyin: "xiào zhe" },
      { target: `c${id}-6`, label: "⑥ 动着 🧠", emoji: "🧠", answer: `ca${id}-6`, char: "脑筋", pinyin: "nǎo jīn" }
    ];
  } else if (id <= 12) {
    title = "期中多音字连连看：把多音字连到正确的读音词组。";
    pairs = [
      { target: `c${id}-1`, label: "① 得 (děi) 🏃", emoji: "🏃", answer: `ca${id}-1`, char: "得去", pinyin: "děi qù" },
      { target: `c${id}-2`, label: "② 得 (dé) 🏆", emoji: "🏆", answer: `ca${id}-2`, char: "得到", pinyin: "dé dào" },
      { target: `c${id}-3`, label: "③ 教 (jiāo) 📖", emoji: "📖", answer: `ca${id}-3`, char: "教书", pinyin: "jiāo shū" },
      { target: `c${id}-4`, label: "④ 教 (jiào) 🏫", emoji: "🏫", answer: `ca${id}-4`, char: "教室", pinyin: "jiào shì" },
      { target: `c${id}-5`, label: "⑤ 重 (zhòng) ⚖️", emoji: "⚖️", answer: `ca${id}-5`, char: "重量", pinyin: "zhòng liàng" },
      { target: `c${id}-6`, label: "⑥ 重 (chóng) 🔄", emoji: "🔄", answer: `ca${id}-6`, char: "重复", pinyin: "chóng fù" }
    ];
  } else if (id <= 15) {
    title = "名胜名产连连看：把名胜古迹与对应特色连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 鹳雀楼 🏯", emoji: "🏯", answer: `ca${id}-1`, char: "黄河", pinyin: "huáng hé" },
      { target: `c${id}-2`, label: "② 庐山 🏞️", emoji: "🏞️", answer: `ca${id}-2`, char: "瀑布", pinyin: "pù bù" },
      { target: `c${id}-3`, label: "③ 黄山 ⛰️", emoji: "⛰️", answer: `ca${id}-3`, char: "奇石", pinyin: "qí shí" },
      { target: `c${id}-4`, label: "④ 日月潭 🏝️", emoji: "🏝️", answer: `ca${id}-4`, char: "台湾", pinyin: "tái wān" },
      { target: `c${id}-5`, label: "⑤ 葡萄沟 🍇", emoji: "🍇", answer: `ca${id}-5`, char: "新疆", pinyin: "xīn jiāng" },
      { target: `c${id}-6`, label: "⑥ 晾房 🏠", emoji: "🏠", answer: `ca${id}-6`, char: "葡萄干", pinyin: "gān" }
    ];
  } else if (id <= 18) {
    title = "寓言生字连连看：把寓言生字与反义词连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 井口 ⭕", emoji: "⭕", answer: `ca${id}-1`, char: "狭小", pinyin: "xiá xiǎo" },
      { target: `c${id}-2`, label: "② 天空 ☁️", emoji: "☁️", answer: `ca${id}-2`, char: "无边", pinyin: "wú biān" },
      { target: `c${id}-3`, label: "③ 喜鹊 🪹", emoji: "🪹", answer: `ca${id}-3`, char: "勤劳", pinyin: "qín láo" },
      { target: `c${id}-4`, label: "④ 寒号鸟 🥶", emoji: "🥶", answer: `ca${id}-4`, char: "懒惰", pinyin: "lǎn duò" },
      { target: `c${id}-5`, label: "⑤ 蚜虫 🐛", emoji: "🐛", answer: `ca${id}-5`, char: "害虫", pinyin: "hài chóng" },
      { target: `c${id}-6`, label: "⑥ 葫芦 🥒", emoji: "🥒", answer: `ca${id}-6`, char: "藤蔓", pinyin: "téng wàn" }
    ];
  } else if (id <= 21) {
    title = "伟人事迹连连看：把历史人物与闪光精神连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 大禹 🌊", emoji: "🌊", answer: `ca${id}-1`, char: "治水", pinyin: "zhì shuǐ" },
      { target: `c${id}-2`, label: "② 朱德 🪵", emoji: "🪵", answer: `ca${id}-2`, char: "扁担", pinyin: "biǎn dan" },
      { target: `c${id}-3`, label: "③ 周总理 💧", emoji: "💧", answer: `ca${id}-3`, char: "泼水节", pinyin: "jié" },
      { target: `c${id}-4`, label: "④ 井冈山 ⛰️", emoji: "⛰️", answer: `ca${id}-4`, char: "挑粮", pinyin: "tiāo liáng" },
      { target: `c${id}-5`, label: "⑤ 傣族 🥁", emoji: "🥁", answer: `ca${id}-5`, char: "象脚鼓", pinyin: "xiàng jiǎo gǔ" },
      { target: `c${id}-6`, label: "⑥ 银碗 🥣", emoji: "🥣", answer: `ca${id}-6`, char: "清水", pinyin: "qīng shuǐ" }
    ];
  } else if (id <= 24) {
    title = "自然风物连连看：把自然景物与对应诗句/特点连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 危楼 🏯", emoji: "🏯", answer: `ca${id}-1`, char: "高百尺", pinyin: "gāo bǎi chǐ" },
      { target: `c${id}-2`, label: "② 天空 🌌", emoji: "🌌", answer: `ca${id}-2`, char: "穹庐", pinyin: "qióng lú" },
      { target: `c${id}-3`, label: "③ 草原 🌿", emoji: "🌿", answer: `ca${id}-3`, char: "茫茫", pinyin: "máng máng" },
      { target: `c${id}-4`, label: "④ 雾气 🌫️", emoji: "🌫️", answer: `ca${id}-4`, char: "淘气", pinyin: "táo qì" },
      { target: `c${id}-5`, label: "⑤ 雪孩子 ⛄", emoji: "⛄", answer: `ca${id}-5`, char: "善良", pinyin: "shàn liáng" },
      { target: `c${id}-6`, label: "⑥ 白云 ☁️", emoji: "☁️", answer: `ca${id}-6`, char: "飞翔", pinyin: "fēi xiáng" }
    ];
  } else if (id <= 27) {
    title = "相处故事连连看：把成语与对应角色连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 狐狸 🦊", emoji: "🦊", answer: `ca${id}-1`, char: "狡猾", pinyin: "jiǎo huá" },
      { target: `c${id}-2`, label: "② 老虎 🐯", emoji: "🐯", answer: `ca${id}-2`, char: "威风", pinyin: "wēi fēng" },
      { target: `c${id}-3`, label: "③ 小熊 🐻", emoji: "🐻", answer: `ca${id}-3`, char: "奶酪", pinyin: "nǎi lào" },
      { target: `c${id}-4`, label: "④ 松鼠 🐿️", emoji: "🐿️", answer: `ca${id}-4`, char: "纸船", pinyin: "zhǐ chuán" },
      { target: `c${id}-5`, label: "⑤ 风筝 🪁", emoji: "🪁", answer: `ca${id}-5`, char: "友谊", pinyin: "yǒu yì" },
      { target: `c${id}-6`, label: "⑥ 风娃娃 💨", emoji: "💨", answer: `ca${id}-6`, char: "大风车", pinyin: "fēng chē" }
    ];
  } else {
    title = "期末全真连连看：把名句与出处典故连起来。";
    pairs = [
      { target: `c${id}-1`, label: "① 欲穷千里目 👁️", emoji: "👁️", answer: `ca${id}-1`, char: "更上一层", pinyin: "yī céng" },
      { target: `c${id}-2`, label: "② 飞流直下 💧", emoji: "💧", answer: `ca${id}-2`, char: "三千尺", pinyin: "sān qiān chǐ" },
      { target: `c${id}-3`, label: "③ 墙角数枝梅 🌸", emoji: "🌸", answer: `ca${id}-3`, char: "凌寒独开", pinyin: "líng hán" },
      { target: `c${id}-4`, label: "④ 风吹草低 🌾", emoji: "🌾", answer: `ca${id}-4`, char: "见牛羊", pinyin: "xiàn niú yáng" },
      { target: `c${id}-5`, label: "⑤ 有山皆图画 🖼️", emoji: "🖼️", answer: `ca${id}-5`, char: "无水不文章", pinyin: "wén zhāng" },
      { target: `c${id}-6`, label: "⑥ 白日依山尽 🌅", emoji: "🌅", answer: `ca${id}-6`, char: "黄河入海流", pinyin: "hǎi liú" }
    ];
  }

  // 乱序打乱右侧
  const shuffledAnswers = [...pairs.map(p => p.answer)].reverse();

  // 构建标准 100 分题型：
  // 1. 连线题 (12分)
  // 2. 拼音与生字选择 (16分, 4题, 4分/题)
  // 3. 词语与部首查字法 (16分, 4题, 4分/题)
  // 4. 课文理解与句子积累 (16分, 4题, 4分/题)
  // 5. 阅读理解与字词运用 (16分, 4题, 4分/题)
  // 6. 综合表达与思维拓展 (16分, 4题, 4分/题)
  // 7. 日积月累与经典诵读 (8分)
  // 总计: 12 + 16*5 + 8 = 100分

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
        title: "拼音与生字小法官：选出正确的读音或字形。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `c${id}-q1`,
            title: "生字读音辨析",
            tip: "注意区分平舌音与翘舌音、前后鼻音。",
            prompt: `下列词语中带点字的读音完全正确的一项是？`,
            options: [
              { text: "脑袋 (nǎo dài)", correct: true },
              { text: "捕食 (pǔ shí)", correct: false },
              { text: "披着 (pēi zhe)", correct: false }
            ]
          },
          {
            qid: `c${id}-q2`,
            title: "多音字辨析",
            tip: "根据具体语境和词义判断多音字读音。",
            prompt: `“孩子如果已经长大，就‘得’告别妈妈”中“得”读音是？`,
            options: [
              { text: "děi", correct: true },
              { text: "dé", correct: false },
              { text: "de", correct: false }
            ]
          },
          {
            qid: `c${id}-q3`,
            title: "形近字与错别字",
            tip: "观察形近字的偏旁表意特征。",
            prompt: `下列各组词语中，书写完全正确的一项是？`,
            options: [
              { text: "两只眼睛", correct: true },
              { text: "极小水带", correct: false },
              { text: "片地金黄", correct: false }
            ]
          },
          {
            qid: `c${id}-q4`,
            title: "生字笔画笔顺",
            tip: "注意“皮、片、长”等特殊首笔笔顺。",
            prompt: `“皮”字的正确笔顺第一笔是？`,
            options: [
              { text: "横钩 (乛)", correct: true },
              { text: "撇 (丿)", correct: false },
              { text: "竖 (丨)", correct: false }
            ]
          }
        ]
      },
      {
        num: "三",
        title: "词语宝库与部首查字法：按要求选择正确答案。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `c${id}-q5`,
            title: "部首查字法规则",
            tip: "部首查字法先查部首，除去部首再数几画。",
            prompt: `用部首查字法查“葡”字，应先查部首？`,
            options: [
              { text: "艹 (草字头)", correct: true },
              { text: "勹 (包字头)", correct: false },
              { text: "甫", correct: false }
            ]
          },
          {
            qid: `c${id}-q6`,
            title: "词语搭配",
            tip: "动词与名词搭配要符合生活常理与规范表达。",
            prompt: `下列动词搭配最恰当的一项是？`,
            options: [
              { text: "甩着长长的尾巴", correct: true },
              { text: "披着大大的肚皮", correct: false },
              { text: "鼓着碧绿的衣裳", correct: false }
            ]
          },
          {
            qid: `c${id}-q7`,
            title: "数量词搭配",
            tip: "牢记群、方、行、艘等专属量词习惯。",
            prompt: `“一（  ）鱼塘，一（  ）稻田”，横线处应填？`,
            options: [
              { text: "方、块", correct: true },
              { text: "只、面", correct: false },
              { text: "艘、丛", correct: false }
            ]
          },
          {
            qid: `c${id}-q8`,
            title: "近义词与反义词",
            tip: "在语境中体会词语感情色彩与含义。",
            prompt: `“温和”的反义词是？`,
            options: [
              { text: "暴躁", correct: true },
              { text: "温柔", correct: false },
              { text: "善良", correct: false }
            ]
          }
        ]
      },
      {
        num: "四",
        title: "句子百花园：按要求选择最符合题意的选项。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `c${id}-q9`,
            title: "标点符号运用",
            tip: "感叹句表达强烈赞叹，反问句句末用问号。",
            prompt: `“公园里的菊花真好看啊（  ）”括号里应填？`,
            options: [
              { text: "！(叹号)", correct: true },
              { text: "？(问号)", correct: false },
              { text: "。(句号)", correct: false }
            ]
          },
          {
            qid: `c${id}-q10`,
            title: "比喻修辞手法",
            tip: "比喻句要有本体和喻体，并有比喻词（像、好像）。",
            prompt: `下列句子属于规范比喻句的是？`,
            options: [
              { text: "银杏水杉活化石，金桂开花满院香。", correct: false },
              { text: "梧桐树叶像手掌。", correct: true },
              { text: "他长得好像他的爸爸。", correct: false }
            ]
          },
          {
            qid: `c${id}-q11`,
            title: "句式变换",
            tip: "注意“把字句”与“被字句”主语与宾语位置互换。",
            prompt: `将“洪水把田地冲毁了”改为“被字句”正确的是？`,
            options: [
              { text: "田地被洪水冲毁了。", correct: true },
              { text: "洪水被田地冲毁了。", correct: false },
              { text: "冲毁了田地被洪水。", correct: false }
            ]
          },
          {
            qid: `c${id}-q12`,
            title: "关联词与逻辑关系",
            tip: "“只要……就……”表示充分条件关系。",
            prompt: `“（  ）肯动脑筋，坏事往往（  ）能变成好事。”选词填空？`,
            options: [
              { text: "只要……就……", correct: true },
              { text: "虽然……但是……", correct: false },
              { text: "因为……所以……", correct: false }
            ]
          }
        ]
      },
      {
        num: "五",
        title: "课文大检阅与科学阅读：选出正确的一项。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `c${id}-q13`,
            title: "课文主旨理解",
            tip: "梳理曹冲称象的四步关键程序。",
            prompt: `曹冲称象的关键妙处在于？`,
            options: [
              { text: "用石头的重量代替大象的重量", correct: true },
              { text: "造一把巨大的大秤称大象", correct: false },
              { text: "把大象宰割成一块一块来称", correct: false }
            ]
          },
          {
            qid: `c${id}-q14`,
            title: "科学自然常识",
            tip: "水受热蒸发变成汽，遇冷凝结成云和雨水。",
            prompt: `在大自然中，水受热蒸发会变成？`,
            options: [
              { text: "极小极轻的水汽", correct: true },
              { text: "坚硬的冰雹", correct: false },
              { text: "洁白的雪花", correct: false }
            ]
          },
          {
            qid: `c${id}-q15`,
            title: "植物传播途径",
            tip: "蒲公英靠风，苍耳靠动物皮毛，豌豆靠太阳晒裂豆荚。",
            prompt: `蒲公英妈妈靠什么方法让孩子们四海为家？`,
            options: [
              { text: "降落伞乘着微风纷纷出发", correct: true },
              { text: "挂住小动物的皮毛去田野", correct: false },
              { text: "太阳晒炸豆荚蹦跳跳离开", correct: false }
            ]
          },
          {
            qid: `c${id}-q16`,
            title: "寓言哲理",
            tip: "《坐井观天》告诉我们看问题要全面，不能目光狭隘。",
            prompt: `“坐井观天”这个成语常用来比喻？`,
            options: [
              { text: "眼界狭小、见识短浅的人", correct: true },
              { text: "辛勤劳作、勇敢前进的人", correct: false },
              { text: "善于游泳、喜欢跳跃的人", correct: false }
            ]
          }
        ]
      },
      {
        num: "六",
        title: "综合思维与生活交际：选出最恰当的表达。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `c${id}-q17`,
            title: "文明礼貌口语交际",
            tip: "向别人商量事情要态度礼貌、语气委婉。",
            prompt: `你想借同桌的彩笔用一下，最得体的说法是？`,
            options: [
              { text: "请问我可以借用一下你的彩笔吗？用完马上还你。", correct: true },
              { text: "喂，彩笔快给我用一下！", correct: false },
              { text: "你的彩笔被我征用了！", correct: false }
            ]
          },
          {
            qid: `c${id}-q18`,
            title: "按规律填成语",
            tip: "含有动物名称的四字成语积累。",
            prompt: `“狐（  ）虎（  ）”，括号里应填的汉字是？`,
            options: [
              { text: "假、威", correct: true },
              { text: "真、威", correct: false },
              { text: "假、猛", correct: false }
            ]
          },
          {
            qid: `c${id}-q19`,
            title: "传统节日文化",
            tip: "泼水节是傣族最重要的传统节日。",
            prompt: `泼水节是哪个少数民族最盛大的传统节日？`,
            options: [
              { text: "傣族", correct: true },
              { text: "苗族", correct: false },
              { text: "藏族", correct: false }
            ]
          },
          {
            qid: `c${id}-q20`,
            title: "好习惯与行为养成",
            tip: "整理书包需要分类摆放、井井有条。",
            prompt: `每天晚上睡觉前，我们应该？`,
            options: [
              { text: "对照课表，自己整理好第二天的书包和文具", correct: true },
              { text: "把书包扔在一旁，让妈妈去整理", correct: false },
              { text: "明天早上起床后再匆忙塞进书包", correct: false }
            ]
          }
        ]
      },
      {
        num: "七",
        title: "日积月累与古诗诵读：点击诵读大星奖励。",
        score: 8,
        type: "poem",
        text: "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。",
        buttons: [
          { label: "⭐ 声情并茂诵读前两句 (4分)", pts: 4 },
          { label: "🌟 慷慨激昂通诵全首绝句 (4分)", pts: 4 }
        ]
      }
    ]
  };
}

// =========================================================================
// 2. 数学二年级上册（共 20 套 · 人教版全册）
// =========================================================================

const mathG2S1Meta = [
  // 第一单元：长度单位
  { id: 1, unit: "第一单元：长度单位", title: "第 01 套：认识厘米和米与直尺测量基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "1米=100厘米；测量物体时直尺刻度0对齐左端；常用物品长度估测。" },
  { id: 2, unit: "第一单元：长度单位", title: "第 02 套：线段测量与单位换算提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "线段是直的且有两个端点；画指定长度线段；厘米与米单位合理选用。" },
  // 第二单元：100以内的加法和减法(二)
  { id: 3, unit: "第二单元：100以内加法和减法(二)", title: "第 03 套：两位数加两位数笔算基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "竖式计算相同数位对齐，从个位加起；进位加法个位满十向十位进1。" },
  { id: 4, unit: "第二单元：100以内加法和减法(二)", title: "第 04 套：两位数减两位数退位减提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "退位减法竖式：个位不够减向十位退1当10；点退一标记与连续运算。" },
  { id: 5, unit: "第二单元：100以内加法和减法(二)", title: "第 05 套：连加连减与加减混合笔算冲刺卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "两步竖式简写形式；有小括号要先算小括号里面的；运算顺序规范。" },
  { id: 6, unit: "第二单元：100以内加法和减法(二)", title: "第 06 套：解决问题与求比一个数多几少几卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "画图分析大数与小数；求比一个数多几（加法）与少几（减法）实际问题。" },
  // 第三单元：角的初步认识
  { id: 7, unit: "第三单元：角的初步认识", title: "第 07 套：角的特征与直角锐角钝角基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "角有一个顶点和两条边；直角符号；比直角小是锐角，比直角大是钝角。" },
  { id: 8, unit: "第三单元：角的初步认识", title: "第 08 套：用三角尺拼角与大小比较提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "角的大小与张开大小有关，与边长无关；三角尺两块拼钝角趣味操作。" },
  // 第四单元：表内乘法(一)
  { id: 9, unit: "第四单元：表内乘法(一)", title: "第 09 套：乘法的初步认识与算理基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "求几个相同加数的和用乘法更简便；乘数×乘数=积；读作与写法。" },
  { id: 10, unit: "第四单元：表内乘法(一)", title: "第 10 套：2~6的乘法口诀推导与计算提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "一二得二到六六三十六口诀推导；一句口诀写出两道乘法算式。" },
  { id: 11, unit: "第四单元：表内乘法(一)", title: "第 11 套：乘加乘减混合运算与应用冲刺卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "乘加乘减先算乘法再算加减；旋转木马排队算人数生活问题。" },
  // 🌟 期中大考
  { id: 12, unit: "🌟 数学期中大考", title: "第 12 套：期中长度单位与笔算竖式实战卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "长度单位填空、米和厘米转换、两位数笔算竖式大检验。" },
  { id: 13, unit: "🌟 数学期中大考", title: "第 13 套：期中角的认识与表内乘法(一)冲刺卷", tag: "期中冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "数角的个数、直角判断、1~6乘法口诀全真期中模拟题。" },
  // 第五单元：观察物体(一)
  { id: 14, unit: "第五单元：观察物体(一)", title: "第 14 套：不同位置观察物体与视角基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "从前面、侧面、后面、上面观察同一恐龙玩具或汽车，对应视图辨析。" },
  // 第六单元：表内乘法(二)
  { id: 15, unit: "第六单元：表内乘法(二)", title: "第 15 套：7和8的乘法口诀基础达标卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "七星瓢虫点数、七天一周、八仙过海、七七四十九与八八六十四口诀。" },
  { id: 16, unit: "第六单元：表内乘法(二)", title: "第 16 套：9的乘法口诀规律与速算提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "9的乘法个位与十位和为9；手指速算法；九九八十一乘法口诀表大盘点。" },
  { id: 17, unit: "第六单元：表内乘法(二)", title: "第 17 套：倍的认识与求一个数的几倍是多少卷", tag: "易错避坑", tagColor: "bg-rose-100 text-rose-800", desc: "一份有几个，有这样的几份就是几倍；求几倍用乘法，求一份用除法感知。" },
  // 第七单元：认识时间
  { id: 18, unit: "第七单元：认识时间", title: "第 18 套：读写几时几分与时间换算基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "钟面12大格60小格；时针走一大格是1小时，分针走一小格是1分；1时=60分。" },
  // 第八单元：数学广角
  { id: 19, unit: "第八单元：数学广角", title: "第 19 套：搭配与简单排列组合提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "用1、2、3能组成几个不同两位数（顺序有关）；3人每两人握一次手共几次（顺序无关）。" },
  // 👑 期末总决战
  { id: 20, unit: "👑 数学期末大决战", title: "第 20 套：二年级上册数学易错题全真期末统考卷", tag: "期末统考", tagColor: "bg-purple-100 text-purple-800", desc: "长度、竖式、角、9九乘法、时间、观察物体全景 100 分统考卷。" }
];

function buildMathG2S1Paper(meta) {
  const id = meta.id;

  // 连连看：乘法口诀与算式/结果
  let pairs = [];
  let title = "口诀与算式连连看：把算式与计算结果/口诀连起来。";

  if (id <= 2) {
    title = "长度单位连连看：把生活实物与合适长度连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 橡皮厚度 ✏️", emoji: "✏️", answer: `ma${id}-1`, char: "1厘米", pinyin: "1 cm" },
      { target: `m${id}-2`, label: "② 铅笔长度 📏", emoji: "📏", answer: `ma${id}-2`, char: "18厘米", pinyin: "18 cm" },
      { target: `m${id}-3`, label: "③ 课桌高度 🪑", emoji: "🪑", answer: `ma${id}-3`, char: "70厘米", pinyin: "70 cm" },
      { target: `m${id}-4`, label: "④ 教室门高 🚪", emoji: "🚪", answer: `ma${id}-4`, char: "2米", pinyin: "2 m" },
      { target: `m${id}-5`, label: "⑤ 黑板长度 🏫", emoji: "🏫", answer: `ma${id}-5`, char: "4米", pinyin: "4 m" },
      { target: `m${id}-6`, label: "⑥ 操场跑道 🏃", emoji: "🏃", answer: `ma${id}-6`, char: "100米", pinyin: "100 m" }
    ];
  } else if (id <= 6) {
    title = "两位数竖式连连看：把加减法算式与正确得数连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 35 + 28 ➕", emoji: "➕", answer: `ma${id}-1`, char: "63", pinyin: "六十三" },
      { target: `m${id}-2`, label: "② 72 - 39 ➖", emoji: "➖", answer: `ma${id}-2`, char: "33", pinyin: "三十三" },
      { target: `m${id}-3`, label: "③ 46 + 17 ➕", emoji: "➕", answer: `ma${id}-3`, char: "63", pinyin: "进位加" },
      { target: `m${id}-4`, label: "④ 80 - 45 ➖", emoji: "➖", answer: `ma${id}-4`, char: "35", pinyin: "三十五" },
      { target: `m${id}-5`, label: "⑤ 29 + 36 ➕", emoji: "➕", answer: `ma${id}-5`, char: "65", pinyin: "六十五" },
      { target: `m${id}-6`, label: "⑥ 91 - 54 ➖", emoji: "➖", answer: `ma${id}-6`, char: "37", pinyin: "三十七" }
    ];
  } else if (id <= 8) {
    title = "角的认识连连看：把图形特征与角的名称连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 国旗上的四个角 🚩", emoji: "🚩", answer: `ma${id}-1`, char: "直角", pinyin: "zhǐ jiǎo" },
      { target: `m${id}-2`, label: "② 剪刀张开较小角 ✂️", emoji: "✂️", answer: `ma${id}-2`, char: "锐角", pinyin: "ruì jiǎo" },
      { target: `m${id}-3`, label: "③ 扇子完全展开大角 🪭", emoji: "🪭", answer: `ma${id}-3`, char: "钝角", pinyin: "dùn jiǎo" },
      { target: `m${id}-4`, label: "④ 三角板最大的角 📐", emoji: "📐", answer: `ma${id}-4`, char: "直角", pinyin: "90度" },
      { target: `m${id}-5`, label: "⑤ 比直角小的角 📐", emoji: "📐", answer: `ma${id}-5`, char: "锐角", pinyin: "较小" },
      { target: `m${id}-6`, label: "⑥ 比直角大的角 📐", emoji: "📐", answer: `ma${id}-6`, char: "钝角", pinyin: "较大" }
    ];
  } else if (id <= 13) {
    title = "表内乘法口诀连连看：把口诀与得数连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 三五 🍎", emoji: "🍎", answer: `ma${id}-1`, char: "十五", pinyin: "3×5=15" },
      { target: `m${id}-2`, label: "② 四六 🍊", emoji: "🍊", answer: `ma${id}-2`, char: "二十四", pinyin: "4×6=24" },
      { target: `m${id}-3`, label: "③ 五五 🍓", emoji: "🍓", answer: `ma${id}-3`, char: "二十五", pinyin: "5×5=25" },
      { target: `m${id}-4`, label: "④ 六六 🍉", emoji: "🍉", answer: `ma${id}-4`, char: "三十六", pinyin: "6×6=36" },
      { target: `m${id}-5`, label: "⑤ 三四 🍇", emoji: "🍇", answer: `ma${id}-5`, char: "十二", pinyin: "3×4=12" },
      { target: `m${id}-6`, label: "⑥ 二六 🍒", emoji: "🍒", answer: `ma${id}-6`, char: "十二", pinyin: "2×6=12" }
    ];
  } else if (id <= 17) {
    title = "7~9乘法口诀连连看：把算式与正确积连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 7 × 8 🌟", emoji: "🌟", answer: `ma${id}-1`, char: "56", pinyin: "七八五十六" },
      { target: `m${id}-2`, label: "② 9 × 6 🌟", emoji: "🌟", answer: `ma${id}-2`, char: "54", pinyin: "六九五十四" },
      { target: `m${id}-3`, label: "③ 8 × 8 🌟", emoji: "🌟", answer: `ma${id}-3`, char: "64", pinyin: "八八六十四" },
      { target: `m${id}-4`, label: "④ 9 × 7 🌟", emoji: "🌟", answer: `ma${id}-4`, char: "63", pinyin: "七九六十三" },
      { target: `m${id}-5`, label: "⑤ 9 × 9 🌟", emoji: "🌟", answer: `ma${id}-5`, char: "81", pinyin: "九九八十一" },
      { target: `m${id}-6`, label: "⑥ 7 × 7 🌟", emoji: "🌟", answer: `ma${id}-6`, char: "49", pinyin: "七七四十九" }
    ];
  } else {
    title = "期末综合速算连连看：把混合算式与正确得数连起来。";
    pairs = [
      { target: `m${id}-1`, label: "① 8 × 4 + 7 🧮", emoji: "🧮", answer: `ma${id}-1`, char: "39", pinyin: "32+7=39" },
      { target: `m${id}-2`, label: "② 9 × 5 - 15 🧮", emoji: "🧮", answer: `ma${id}-2`, char: "30", pinyin: "45-15=30" },
      { target: `m${id}-3`, label: "③ 6 × 7 + 8 🧮", emoji: "🧮", answer: `ma${id}-3`, char: "50", pinyin: "42+8=50" },
      { target: `m${id}-4`, label: "④ 8 × 8 - 20 🧮", emoji: "🧮", answer: `ma${id}-4`, char: "44", pinyin: "64-20=44" },
      { target: `m${id}-5`, label: "⑤ 9 × 8 + 6 🧮", emoji: "🧮", answer: `ma${id}-5`, char: "78", pinyin: "72+6=78" },
      { target: `m${id}-6`, label: "⑥ 7 × 5 + 25 🧮", emoji: "🧮", answer: `ma${id}-6`, char: "60", pinyin: "35+25=60" }
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
        tip: "点击左侧算式，再点击右侧正确答案或口诀",
        pairs: pairs,
        shuffledAnswers: shuffledAnswers
      },
      {
        num: "二",
        title: "基础概念小法官：选出正确的选项。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `m${id}-q1`,
            title: "长度单位认知",
            tip: "量较长物体用米做单位，量较短物体用厘米做单位。",
            prompt: `下列长度估测最符合生活实际的是？`,
            options: [
              { text: "小学生一步长约 50厘米", correct: true },
              { text: "铅笔长约 18米", correct: false },
              { text: "教室门高约 2厘米", correct: false }
            ]
          },
          {
            qid: `m${id}-q2`,
            title: "线段特征",
            tip: "线段必须是直的，并且两端各有一个端点。",
            prompt: `关于“线段”，下列说法正确的是？`,
            options: [
              { text: "线段是直的，有两个端点，可以量出长度", correct: true },
              { text: "弯曲的毛线也是线段", correct: false },
              { text: "线段只有一个端点", correct: false }
            ]
          },
          {
            qid: `m${id}-q3`,
            title: "角的大小影响因素",
            tip: "角的大小由两边张开程度决定，两边张开越大角越大。",
            prompt: `角的大小与下列哪个因素有关系？`,
            options: [
              { text: "两条边张开的大小", correct: true },
              { text: "两条边画得有多长", correct: false },
              { text: "顶点的大小", correct: false }
            ]
          },
          {
            qid: `m${id}-q4`,
            title: "乘法意义",
            tip: "乘法是求几个相同加数和的简便运算。",
            prompt: `算式 4 + 4 + 4 + 4 + 4 改写成乘法算式是？`,
            options: [
              { text: "4 × 5 或 5 × 4", correct: true },
              { text: "4 × 4", correct: false },
              { text: "5 + 4", correct: false }
            ]
          }
        ]
      },
      {
        num: "三",
        title: "笔算竖式与精准运算：选出正确得数。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `m${id}-q5`,
            title: "两位数进位加法",
            tip: "竖式计算个位相加满十，必须向十位进1。",
            prompt: `竖式计算：38 + 27 = ？`,
            options: [
              { text: "65", correct: true },
              { text: "55", correct: false },
              { text: "61", correct: false }
            ]
          },
          {
            qid: `m${id}-q6`,
            title: "两位数退位减法",
            tip: "个位不够减，向十位借1当10再减。",
            prompt: `竖式计算：72 - 45 = ？`,
            options: [
              { text: "27", correct: true },
              { text: "37", correct: false },
              { text: "23", correct: false }
            ]
          },
          {
            qid: `m${id}-q7`,
            title: "加减混合运算",
            tip: "从左往右依次计算，注意进位和退位标记。",
            prompt: `计算：45 + 28 - 36 = ？`,
            options: [
              { text: "37", correct: true },
              { text: "47", correct: false },
              { text: "27", correct: false }
            ]
          },
          {
            qid: `m${id}-q8`,
            title: "有小括号的运算",
            tip: "算式里有小括号，要先算小括号里面的。",
            prompt: `计算：80 - (24 + 16) = ？`,
            options: [
              { text: "40", correct: true },
              { text: "72", correct: false },
              { text: "50", correct: false }
            ]
          }
        ]
      },
      {
        num: "四",
        title: "乘法口诀大比拼：选择正确的算式或积。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `m${id}-q9`,
            title: "口诀运用",
            tip: "六八四十八，表示6个8或8个6相加得48。",
            prompt: `根据乘法口诀“六八四十八”，可以写出的乘法算式是？`,
            options: [
              { text: "6 × 8 = 48 或 8 × 6 = 48", correct: true },
              { text: "6 + 8 = 48", correct: false },
              { text: "8 - 6 = 48", correct: false }
            ]
          },
          {
            qid: `m${id}-q10`,
            title: "乘加运算",
            tip: "乘加混合运算先算乘法，再算加法。",
            prompt: `计算：7 × 6 + 8 = ？`,
            options: [
              { text: "50", correct: true },
              { text: "98", correct: false },
              { text: "42", correct: false }
            ]
          },
          {
            qid: `m${id}-q11`,
            title: "乘减运算",
            tip: "看清算式结构，5个9减去1个9相当于4个9。",
            prompt: `计算：9 × 5 - 9 = ？`,
            options: [
              { text: "36", correct: true },
              { text: "45", correct: false },
              { text: "40", correct: false }
            ]
          },
          {
            qid: `m${id}-q12`,
            title: "倍的概念",
            tip: "求一个数的几倍是多少，用乘法计算：几 × 几倍。",
            prompt: `第一行摆4朵花，第二行摆的朵数是第一行的3倍，第二行摆？`,
            options: [
              { text: "12 朵 (4 × 3 = 12)", correct: true },
              { text: "7 朵 (4 + 3 = 7)", correct: false },
              { text: "1 朵 (4 - 3 = 1)", correct: false }
            ]
          }
        ]
      },
      {
        num: "五",
        title: "时间、图形与空间观察：选出正确选项。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `m${id}-q13`,
            title: "认识时间读数",
            tip: "分针走1大格是5分钟，时针刚过几就是几时。",
            prompt: `钟面上时针刚走过7，分针指着6，此时的时间是？`,
            options: [
              { text: "7时30分 (7:30)", correct: true },
              { text: "6时35分 (6:35)", correct: false },
              { text: "7时6分 (7:06)", correct: false }
            ]
          },
          {
            qid: `m${id}-q14`,
            title: "时与分换算",
            tip: "1小时 = 60分钟，半小时 = 30分钟。",
            prompt: `1小时等于多少分钟？`,
            options: [
              { text: "60 分钟", correct: true },
              { text: "100 分钟", correct: false },
              { text: "10 分钟", correct: false }
            ]
          },
          {
            qid: `m${id}-q15`,
            title: "角的分类判断",
            tip: "三角板上有一个直角和两个锐角。",
            prompt: `钝角和直角相比，钝角？`,
            options: [
              { text: "比直角大", correct: true },
              { text: "比直角小", correct: false },
              { text: "和直角一样大", correct: false }
            ]
          },
          {
            qid: `m${id}-q16`,
            title: "不同位置观察物体",
            tip: "从侧面观察汽车，能看到车门和前后车轮。",
            prompt: `站在小轿车的正侧面观察，能看到的主要是？`,
            options: [
              { text: "车门和两个车轮", correct: true },
              { text: "车头车灯和前挡风玻璃", correct: false },
              { text: "车尾牌照和后备箱", correct: false }
            ]
          }
        ]
      },
      {
        num: "六",
        title: "数学广角与解决实际问题：选出最合理答案。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `m${id}-q17`,
            title: "简单排列问题",
            tip: "用数字1、2、3组两位数，十位和个位调换是不同数（共6个）。",
            prompt: `用数字 1、2、3 可以组成多少个没有重复数字的两位数？`,
            options: [
              { text: "6 个 (12, 13, 21, 23, 31, 32)", correct: true },
              { text: "3 个", correct: false },
              { text: "9 个", correct: false }
            ]
          },
          {
            qid: `m${id}-q18`,
            title: "简单组合问题",
            tip: "每两个人握一次手，与握手先后顺序无关。",
            prompt: `乐乐、月亮、小明 3 个人每两人握一次手，一共要握几次手？`,
            options: [
              { text: "3 次", correct: true },
              { text: "6 次", correct: false },
              { text: "2 次", correct: false }
            ]
          },
          {
            qid: `m${id}-q19`,
            title: "求比一个数多几的应用",
            tip: "比多用加法：小数 + 相差数 = 大数。",
            prompt: `小红有 24 支铅笔，小明的铅笔比小红多 9 支，小明有多少支？`,
            options: [
              { text: "33 支 (24 + 9 = 33)", correct: true },
              { text: "15 支 (24 - 9 = 15)", correct: false },
              { text: "32 支", correct: false }
            ]
          },
          {
            qid: `m${id}-q20`,
            title: "乘法生活应用",
            tip: "每组人数 × 组数 = 总人数。",
            prompt: `游乐场旋转木马每次坐 6 人，坐了 4 次，一共坐了多少人？`,
            options: [
              { text: "24 人 (6 × 4 = 24)", correct: true },
              { text: "10 人 (6 + 4 = 10)", correct: false },
              { text: "2 人 (6 - 4 = 2)", correct: false }
            ]
          }
        ]
      },
      {
        num: "七",
        title: "乘法口诀顺口溜与速算：大星奖励。",
        score: 8,
        type: "poem",
        text: "一一得一，一二得二，二二得四；九九八十一，口诀熟记心里喜！",
        buttons: [
          { label: "⭐ 流利背诵 1~5 乘法口诀 (4分)", pts: 4 },
          { label: "🌟 倒背如流 6~9 乘法口诀大表 (4分)", pts: 4 }
        ]
      }
    ]
  };
}

// =========================================================================
// 3. 英语二年级上册（共 16 套 · 人教新起点全册）
// =========================================================================

const englishG2S1Meta = [
  // Unit 1: Family
  { id: 1, unit: "Unit 1: Family", title: "第 01 套：家庭成员称谓认知基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "father, mother, brother, sister, grandfather, grandmother 家庭核心称谓认读。" },
  { id: 2, unit: "Unit 1: Family", title: "第 02 套：家庭问答与人物介绍提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Who's he/she? He's/She's my father/mother. This is my family 亲情交际。" },
  // Unit 2: Boys and Girls
  { id: 3, unit: "Unit 2: Boys and Girls", title: "第 03 套：人物朋友与外貌特征基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "classmate, friend, boy, girl, big, small, tall, short 词汇与发音。" },
  { id: 4, unit: "Unit 2: Boys and Girls", title: "第 04 套：好友相貌描述与生活表达提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "He is tall. She has big eyes. Who's your best friend? 描写身边同伴。" },
  // Unit 3: Parks
  { id: 5, unit: "Unit 3: Parks", title: "第 05 套：公园景物与自然设施基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "park, tree, grass, flower, boat, lake 公园风光与大自然词汇。" },
  { id: 6, unit: "Unit 3: Parks", title: "第 06 套：游园观察与自然句型提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Can you see the boat? Yes, I can. / There is a flower on the grass 游园体验。" },
  // 🌟 期中大考
  { id: 7, unit: "🌟 英语期中大考", title: "第 07 套：期中高频核心词汇认读实战卷", tag: "期中实战", tagColor: "bg-amber-100 text-amber-800", desc: "家庭、外貌、公园核心词汇拼写对照与听读检测。" },
  { id: 8, unit: "🌟 英语期中大考", title: "第 08 套：期中人物与公园交际冲刺卷", tag: "期中冲刺", tagColor: "bg-rose-100 text-rose-800", desc: "情境交际、日常问候、人物与景物综合期中统考模拟题。" },
  // Unit 4: In the Community
  { id: 9, unit: "Unit 4: In the Community", title: "第 09 套：社区生活场所认知基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "bookshop, zoo, school, park, hospital 常见公共场所词汇。" },
  { id: 10, unit: "Unit 4: In the Community", title: "第 10 套：去向问答与社区导览提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Where are you going? I'm going to the bookshop. Excuse me, where is the hospital?" },
  // Unit 5: Streets
  { id: 11, unit: "Unit 5: Streets", title: "第 11 套：街道交通工具与信号灯基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "bus, car, bike, taxi, van, traffic lights 常见交通设施认知。" },
  { id: 12, unit: "Unit 5: Streets", title: "第 12 套：交通安全规则与文明出行提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Red is stop. Green is go. Yellow is wait. I go to school by bus." },
  // Unit 6: Happy Holidays
  { id: 13, unit: "Unit 6: Happy Holidays", title: "第 13 套：节假日与新年祝福基础卷", tag: "基础夯实", tagColor: "bg-emerald-100 text-emerald-800", desc: "Christmas, New Year, card, tree, Santa, present 节日词汇。" },
  { id: 14, unit: "Unit 6: Happy Holidays", title: "第 14 套：贺卡祝福与赠送心意提优卷", tag: "能力提优", tagColor: "bg-sky-100 text-sky-800", desc: "Merry Christmas! Happy New Year! Here is a card for you. Thank you!" },
  // 👑 期末总决战
  { id: 15, unit: "👑 英语期末大决战", title: "第 15 套：全册生活交际高频词汇归类达标卷", tag: "期末通关", tagColor: "bg-purple-100 text-purple-800", desc: "家庭、人物、公园、社区、交通、假日六大生活主题词汇大通关。" },
  { id: 16, unit: "👑 英语期末大决战", title: "第 16 套：二年级上册英语全真期末统考冲刺卷", tag: "期末统考", tagColor: "bg-rose-100 text-rose-800", desc: "完全符合人教新起点版二年级上册期末统考标准的 100 分满分卷。" }
];

function buildEnglishG2S1Paper(meta) {
  const id = meta.id;

  // 连连看：单词与中文释义
  let pairs = [];
  let title = "Vocabulary Matching: 把英文单词与对应中文连起来。";

  if (id <= 2) {
    title = "Family 称谓连连看：把家庭英文与中文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① father 👨", emoji: "👨", answer: `ea${id}-1`, char: "father", pinyin: "爸爸/父亲" },
      { target: `e${id}-2`, label: "② mother 👩", emoji: "👩", answer: `ea${id}-2`, char: "mother", pinyin: "妈妈/母亲" },
      { target: `e${id}-3`, label: "③ brother 👦", emoji: "👦", answer: `ea${id}-3`, char: "brother", pinyin: "哥哥/弟弟" },
      { target: `e${id}-4`, label: "④ sister 👧", emoji: "👧", answer: `ea${id}-4`, char: "sister", pinyin: "姐姐/妹妹" },
      { target: `e${id}-5`, label: "⑤ grandfather 👴", emoji: "👴", answer: `ea${id}-5`, char: "grandfather", pinyin: "爷爷/外公" },
      { target: `e${id}-6`, label: "⑥ grandmother 👵", emoji: "👵", answer: `ea${id}-6`, char: "grandmother", pinyin: "奶奶/外婆" }
    ];
  } else if (id <= 4) {
    title = "Friends & Looks 连连看：把人物与外貌词汇连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① classmate 🎒", emoji: "🎒", answer: `ea${id}-1`, char: "classmate", pinyin: "同班同学" },
      { target: `e${id}-2`, label: "② friend 🤝", emoji: "🤝", answer: `ea${id}-2`, char: "friend", pinyin: "朋友" },
      { target: `e${id}-3`, label: "③ tall 🦒", emoji: "🦒", answer: `ea${id}-3`, char: "tall", pinyin: "高的" },
      { target: `e${id}-4`, label: "④ short 🦔", emoji: "🦔", answer: `ea${id}-4`, char: "short", pinyin: "矮的/短的" },
      { target: `e${id}-5`, label: "⑤ boy 👦", emoji: "👦", answer: `ea${id}-5`, char: "boy", pinyin: "男孩" },
      { target: `e${id}-6`, label: "⑥ girl 👧", emoji: "👧", answer: `ea${id}-6`, char: "girl", pinyin: "女孩" }
    ];
  } else if (id <= 6) {
    title = "Parks 景物连连看：把公园景物与英文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① park 🏞️", emoji: "🏞️", answer: `ea${id}-1`, char: "park", pinyin: "公园" },
      { target: `e${id}-2`, label: "② tree 🌳", emoji: "🌳", answer: `ea${id}-2`, char: "tree", pinyin: "大树" },
      { target: `e${id}-3`, label: "③ grass 🌱", emoji: "🌱", answer: `ea${id}-3`, char: "草地" },
      { target: `e${id}-4`, label: "④ flower 🌸", emoji: "🌸", answer: `ea${id}-4`, char: "flower", pinyin: "花朵" },
      { target: `e${id}-5`, label: "⑤ boat ⛵", emoji: "⛵", answer: `ea${id}-5`, char: "boat", pinyin: "小船" },
      { target: `e${id}-6`, label: "⑥ lake 🌊", emoji: "🌊", answer: `ea${id}-6`, char: "lake", pinyin: "湖泊" }
    ];
  } else if (id <= 10) {
    title = "Community 社区场所连连看：把场所与英文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① bookshop 📚", emoji: "📚", answer: `ea${id}-1`, char: "bookshop", pinyin: "书店" },
      { target: `e${id}-2`, label: "② zoo 🦁", emoji: "🦁", answer: `ea${id}-2`, char: "zoo", pinyin: "动物园" },
      { target: `e${id}-3`, label: "③ school 🏫", emoji: "🏫", answer: `ea${id}-3`, char: "school", pinyin: "学校" },
      { target: `e${id}-4`, label: "④ hospital 🏥", emoji: "🏥", answer: `ea${id}-4`, char: "hospital", pinyin: "医院" },
      { target: `e${id}-5`, label: "⑤ park 🌳", emoji: "🌳", answer: `ea${id}-5`, char: "park", pinyin: "公园" },
      { target: `e${id}-6`, label: "⑥ street 🛣️", emoji: "🛣️", answer: `ea${id}-6`, char: "street", pinyin: "街道" }
    ];
  } else if (id <= 12) {
    title = "Streets 交通工具连连看：把交通工具与英文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① bus 🚌", emoji: "🚌", answer: `ea${id}-1`, char: "bus", pinyin: "公共汽车" },
      { target: `e${id}-2`, label: "② car 🚗", emoji: "🚗", answer: `ea${id}-2`, char: "car", pinyin: "小轿车" },
      { target: `e${id}-3`, label: "③ bike 🚲", emoji: "🚲", answer: `ea${id}-3`, char: "bike", pinyin: "自行车" },
      { target: `e${id}-4`, label: "④ taxi 🚕", emoji: "🚕", answer: `ea${id}-4`, char: "taxi", pinyin: "出租车" },
      { target: `e${id}-5`, label: "⑤ van 🚐", emoji: "🚐", answer: `ea${id}-5`, char: "van", pinyin: "面包车" },
      { target: `e${id}-6`, label: "⑥ traffic lights 🚦", emoji: "🚦", answer: `ea${id}-6`, char: "traffic lights", pinyin: "红绿灯" }
    ];
  } else {
    title = "Holidays 假日祝福连连看：把节日词汇与英文连起来。";
    pairs = [
      { target: `e${id}-1`, label: "① Christmas 🎄", emoji: "🎄", answer: `ea${id}-1`, char: "Christmas", pinyin: "圣诞节" },
      { target: `e${id}-2`, label: "② New Year 🎆", emoji: "🎆", answer: `ea${id}-2`, char: "New Year", pinyin: "新年" },
      { target: `e${id}-3`, label: "③ card 💌", emoji: "💌", answer: `ea${id}-3`, char: "card", pinyin: "贺卡" },
      { target: `e${id}-4`, label: "④ tree 🌲", emoji: "🌲", answer: `ea${id}-4`, char: "tree", pinyin: "圣诞树" },
      { target: `e${id}-5`, label: "⑤ Santa 🎅", emoji: "🎅", answer: `ea${id}-5`, char: "Santa", pinyin: "圣诞老人" },
      { target: `e${id}-6`, label: "⑥ present 🎁", emoji: "🎁", answer: `ea${id}-6`, char: "present", pinyin: "礼物" }
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
        tip: "点击左侧图片或中文，再点击右侧对应英文单词徽章",
        pairs: pairs,
        shuffledAnswers: shuffledAnswers
      },
      {
        num: "二",
        title: "Vocabulary & Meaning (单词看图选义)：选出正确的中文释义。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `e${id}-q1`,
            title: "核心词汇理解",
            tip: "father 是父亲/爸爸，mother 是母亲/妈妈。",
            prompt: `单词 “father” 的中文意思是？`,
            options: [
              { text: "父亲，爸爸", correct: true },
              { text: "爷爷", correct: false },
              { text: "哥哥", correct: false }
            ]
          },
          {
            qid: `e${id}-q2`,
            title: "家庭成员辨析",
            tip: "grandmother 指奶奶或外婆，grandfather 指爷爷或外公。",
            prompt: `单词 “grandmother” 的中文意思是？`,
            options: [
              { text: "奶奶，外婆", correct: true },
              { text: "妈妈", correct: false },
              { text: "姐姐", correct: false }
            ]
          },
          {
            qid: `e${id}-q3`,
            title: "外貌特征词汇",
            tip: "tall 是高的大个子，short 是矮的小个子。",
            prompt: `长颈鹿很高，形容“高的”英文单词是？`,
            options: [
              { text: "tall", correct: true },
              { text: "short", correct: false },
              { text: "small", correct: false }
            ]
          },
          {
            qid: `e${id}-q4`,
            title: "公共场所词汇",
            tip: "hospital 是医院，bookshop 是书店，zoo 是动物园。",
            prompt: `单词 “hospital” 的中文意思是？`,
            options: [
              { text: "医院", correct: true },
              { text: "学校", correct: false },
              { text: "公园", correct: false }
            ]
          }
        ]
      },
      {
        num: "三",
        title: "Dialogue & Response (情景交际与应答)：选出最得体的问答。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `e${id}-q5`,
            title: "介绍他人句型",
            tip: "介绍男性长辈用 He's my...，介绍女性用 She's my...",
            prompt: `别人问你：“Who's he?”，你介绍这是你的爸爸，应回答：`,
            options: [
              { text: "He's my father.", correct: true },
              { text: "She's my mother.", correct: false },
              { text: "I'm a boy.", correct: false }
            ]
          },
          {
            qid: `e${id}-q6`,
            title: "外貌描述句型",
            tip: "描述他人相貌：He/She has big eyes.",
            prompt: `想要表达“她有一双大眼睛”，正确的英文句子是？`,
            options: [
              { text: "She has big eyes.", correct: true },
              { text: "She has big ears.", correct: false },
              { text: "He is tall.", correct: false }
            ]
          },
          {
            qid: `e${id}-q7`,
            title: "询问去向句型",
            tip: "Where are you going? 询问去哪里，回答用 I'm going to the...",
            prompt: `当同桌问你：“Where are you going?”，你打算去动物园，应回答：`,
            options: [
              { text: "I'm going to the zoo.", correct: true },
              { text: "I like animals.", correct: false },
              { text: "This is a monkey.", correct: false }
            ]
          },
          {
            qid: `e${id}-q8`,
            title: "节日祝福应答",
            tip: "收到别人祝贺 Merry Christmas 时，礼貌回应相同祝福或 Thank you!",
            prompt: `当朋友对你说：“Merry Christmas!”，你应回答：`,
            options: [
              { text: "Merry Christmas!", correct: true },
              { text: "Goodbye!", correct: false },
              { text: "Good morning!", correct: false }
            ]
          }
        ]
      },
      {
        num: "四",
        title: "Grammar & Structure (基础句型与语法)：选出最正确的句子。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `e${id}-q9`,
            title: "交通安全规则",
            tip: "红灯停（Red is stop），绿灯行（Green is go），黄灯等（Yellow is wait）。",
            prompt: `交通信号灯中“红灯停”的英文表达是？`,
            options: [
              { text: "Red is stop.", correct: true },
              { text: "Green is go.", correct: false },
              { text: "Yellow is wait.", correct: false }
            ]
          },
          {
            qid: `e${id}-q10`,
            title: "出行方式表达",
            tip: "乘公共汽车用 by bus，骑自行车用 by bike。",
            prompt: `“我坐公共汽车去学校”的正确表达是？`,
            options: [
              { text: "I go to school by bus.", correct: true },
              { text: "I go to school by bike.", correct: false },
              { text: "I like my school.", correct: false }
            ]
          },
          {
            qid: `e${id}-q11`,
            title: "Can 引导的疑问句",
            tip: "Can you see...? 回答是肯定时用 Yes, I can.",
            prompt: `问句：“Can you see the boat?”，肯定回答是：`,
            options: [
              { text: "Yes, I can.", correct: true },
              { text: "No, I am not.", correct: false },
              { text: "Yes, it is.", correct: false }
            ]
          },
          {
            qid: `e${id}-q12`,
            title: "馈赠礼物句型",
            tip: "Here is a card/present for you! 送你一张贺卡/一份礼物！",
            prompt: `把新年贺卡送给老师时，最有礼貌的说法是？`,
            options: [
              { text: "Here is a card for you, Miss Li.", correct: true },
              { text: "Where is my card?", correct: false },
              { text: "Give me the card.", correct: false }
            ]
          }
        ]
      },
      {
        num: "五",
        title: "Reading Comprehension (生活短文与情景阅读)：阅读并选择最佳答案。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `e${id}-q13`,
            title: "家庭短文理解",
            tip: "认真阅读短文：This is my father. He is a teacher. He is tall.",
            prompt: `阅读短文：“This is my father. He is tall.”，爸爸的外貌特征是？`,
            options: [
              { text: "高的 (tall)", correct: true },
              { text: "矮的 (short)", correct: false },
              { text: "胖的 (fat)", correct: false }
            ]
          },
          {
            qid: `e${id}-q14`,
            title: "公园场景理解",
            tip: "短文：We are in the park. There is a big lake. Look, a boat is on the lake!",
            prompt: `根据公园短文，湖面上有什么？`,
            options: [
              { text: "小船 (a boat)", correct: true },
              { text: "小汽车 (a car)", correct: false },
              { text: "大公交 (a bus)", correct: false }
            ]
          },
          {
            qid: `e${id}-q15`,
            title: "社区去向短文",
            tip: "短文：Today is Sunday. Tim is going to the bookshop. He likes reading books.",
            prompt: `根据短文，Tim周日打算去哪里？`,
            options: [
              { text: "书店 (bookshop)", correct: true },
              { text: "医院 (hospital)", correct: false },
              { text: "动物园 (zoo)", correct: false }
            ]
          },
          {
            qid: `e${id}-q16`,
            title: "节日礼物短文",
            tip: "短文：Happy New Year! Santa brings a big present for Lele.",
            prompt: `短文提到谁收到了大礼物？`,
            options: [
              { text: "乐乐 (Lele)", correct: true },
              { text: "大老虎", correct: false },
              { text: "小青蛙", correct: false }
            ]
          }
        ]
      },
      {
        num: "六",
        title: "Communication & Manners (文明礼貌与生活实践)：选出最佳习惯。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: `e${id}-q17`,
            title: "打扰与询问礼貌用语",
            tip: "在公共场所问路或向他人询问，先说 Excuse me.",
            prompt: `在街上向警察叔叔问路时，第一句最有礼貌的开头是？`,
            options: [
              { text: "Excuse me.", correct: true },
              { text: "Look at me!", correct: false },
              { text: "Hurry up!", correct: false }
            ]
          },
          {
            qid: `e${id}-q18`,
            title: "交通安全素养",
            tip: "过马路要走斑马线，绿灯亮时再通行。",
            prompt: `过马路时，我们应该？`,
            options: [
              { text: "绿灯亮起，走斑马线安全通过", correct: true },
              { text: "红灯亮时冲过去", correct: false },
              { text: "在马路中间踢足球", correct: false }
            ]
          },
          {
            qid: `e${id}-q19`,
            title: "友好互助品德",
            tip: "朋友遇到困难时主动询问：Can I help you?",
            prompt: `看到同学书本掉在地上，你想主动帮忙，可以说：`,
            options: [
              { text: "Can I help you?", correct: true },
              { text: "Goodbye.", correct: false },
              { text: "I have a pen.", correct: false }
            ]
          },
          {
            qid: `e${id}-q20`,
            title: "感恩表达",
            tip: "收到别人的帮助或节日礼物，真诚表达感谢：Thank you very much!",
            prompt: `收到月亮送给你的节日贺卡，你应真诚地说：`,
            options: [
              { text: "Thank you so much! It's so beautiful.", correct: true },
              { text: "I don't like it.", correct: false },
              { text: "No, thank you.", correct: false }
            ]
          }
        ]
      },
      {
        num: "七",
        title: "Chant & Rhyme (英语欢唱与大星奖励)：点击大星领奖。",
        score: 8,
        type: "poem",
        text: "Father, mother, brother, sister, we are a happy family! Red light stop, green light go, happy holidays to you and me!",
        buttons: [
          { label: "⭐ 欢快韵律诵读前半部分 (4分)", pts: 4 },
          { label: "🌟 自信流利唱诵整首英语歌谣 (4分)", pts: 4 }
        ]
      }
    ]
  };
}

// =========================================================================
// 4. 执行生成并写入磁盘
// =========================================================================

console.log('📦 正在生成 30 套语文二年级上册试卷...');
const chineseDb = chineseG2S1Meta.map(buildChineseG2S1Paper);
const chineseJs = `// 统编人教版小学二年级上册语文全真通关考题库 (30套)\nwindow.QUIZ_DATABASE_G2S1 = ${JSON.stringify(chineseDb, null, 2)};\n`;
fs.writeFileSync(chineseOutPath, chineseJs, 'utf-8');
console.log(`✓ 语文二年级上册写入完成: ${chineseOutPath} (${chineseDb.length}套)`);

console.log('📦 正在生成 20 套数学二年级上册试卷...');
const mathDb = mathG2S1Meta.map(buildMathG2S1Paper);
const mathJs = `// 人教版小学二年级上册数学全真通关考题库 (20套)\nwindow.MATH_DATABASE_G2S1 = ${JSON.stringify(mathDb, null, 2)};\n`;
fs.writeFileSync(mathOutPath, mathJs, 'utf-8');
console.log(`✓ 数学二年级上册写入完成: ${mathOutPath} (${mathDb.length}套)`);

console.log('📦 正在生成 16 套英语二年级上册试卷...');
const englishDb = englishG2S1Meta.map(buildEnglishG2S1Paper);
const englishJs = `// 人教新起点小学二年级上册英语全真通关考题库 (16套)\nwindow.ENGLISH_DATABASE_G2S1 = ${JSON.stringify(englishDb, null, 2)};\n`;
fs.writeFileSync(englishOutPath, englishJs, 'utf-8');
console.log(`✓ 英语二年级上册写入完成: ${englishOutPath} (${englishDb.length}套)`);

console.log('\n🎉 二年级上册全部 66 套大卷数据构建完毕！');
