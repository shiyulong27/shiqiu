import fs from 'fs';
import path from 'path';
import { grade4Poems } from './poems_grade4.mjs';
import { grade5Poems } from './poems_grade5.mjs';
import { grade6Poems } from './poems_grade6.mjs';

console.log('🚀 正在构建统编版小学 1~6 年级 12 册全量 127 篇古诗文完整数据集...');

function makeTokens(text, pinyinStr, rhythmStr) {
  const chars = Array.from(text);
  const cleanPy = pinyinStr.replace(/[，。？！、：；“”‘’]/g, ' ').trim().split(/\s+/).filter(Boolean);
  let pyIdx = 0;
  const tokens = [];

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (/[，。？！、：；“”‘’\s]/.test(ch)) {
      tokens.push({ char: ch, pinyin: '' });
    } else {
      tokens.push({ char: ch, pinyin: cleanPy[pyIdx] || '' });
      pyIdx++;
    }
  }

  return tokens;
}

function makeLine(text, pinyin, rhythm) {
  return {
    text,
    pinyin,
    rhythm,
    tokens: makeTokens(text, pinyin, rhythm)
  };
}

// 导入原有前 27 首
import { poemsData as existingPoems } from '../src/data/poemsData.js';
const all127List = [];

// 一二年级 27 首
existingPoems.filter(p => ['一上', '一下', '二上', '二下'].includes(p.grade)).forEach(p => {
  all127List.push(p);
});

// 三年级 19 首
const g3Poems = [
  {
    id: 'shan-xing',
    title: '山行',
    titlePinyin: 'shān xíng',
    author: '杜牧',
    dynasty: '唐代',
    grade: '三上',
    gradeFull: '三年级上册',
    theme: '四季风物',
    themeColor: '#ea580c',
    tags: ['停车坐爱枫林晚', '霜叶红于二月花'],
    famousQuote: '停车坐爱枫林晚，霜叶红于二月花。',
    lines: [
      makeLine('远上寒山石径斜，', 'yuǎn shàng hán shān shí jìng xiá,', '远上寒山／石径斜，'),
      makeLine('白云生处有人家。', 'bái yún shēng chù yǒu rén jiā.', '白云生处／有人家。'),
      makeLine('停车坐爱枫林晚，', 'tíng chē zuò ài fēng lín wǎn,', '停车坐爱／枫林晚，'),
      makeLine('霜叶红于二月花。', 'shuāng yè hóng yú èr yuè huā.', '霜叶红于／二月花。')
    ],
    spokenText: '山行，杜牧，唐代。远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。',
    translation: '一条石板小路曲折伸向高高的寒山，在那白云缭绕的地方隐约有人家。停下马车只因为喜爱这深秋傍晚的枫林，被霜打过的枫叶比二月的红花还要艳丽！',
    appreciation: '以热烈的红色赞美深秋枫林，展现出昂扬豁达的情怀。',
    keywords: [{ word: '石径斜', explain: '曲折的小路。斜读 xiá。' }, { word: '坐', explain: '因为。' }]
  },
  {
    id: 'ye-shu-suo-jian',
    title: '夜书所见',
    titlePinyin: 'yè shū suǒ jiàn',
    author: '叶绍翁',
    dynasty: '宋代',
    grade: '三上',
    gradeFull: '三年级上册',
    theme: '明月思乡',
    themeColor: '#6366f1',
    tags: ['萧萧梧叶送寒声', '知有儿童挑促织'],
    famousQuote: '知有儿童挑促织，夜深篱落一灯明。',
    lines: [
      makeLine('萧萧梧叶送寒声，', 'xiāo xiāo wú yè sòng hán shēng,', '萧萧梧叶／送寒声，'),
      makeLine('江上秋风动客情。', 'jiāng shàng qiū fēng dòng kè qíng.', '江上秋风／动客情。'),
      makeLine('知有儿童挑促织，', 'zhī yǒu ér tóng tiǎo cù zhī,', '知有儿童／挑促织，'),
      makeLine('夜深篱落一灯明。', 'yè shēn lí luò yī dēng míng.', '夜深篱落／一灯明。')
    ],
    spokenText: '夜书所见，叶绍翁，宋代。萧萧梧叶送寒声，江上秋风动客情。知有儿童挑促织，夜深篱落一灯明。',
    translation: '萧萧落下的梧桐叶送来阵阵寒意，江上吹来的秋风触动了游子的思乡情怀。忽然看到篱笆旁有一点灯火，料想是孩子们正在深夜捉蟋蟀呢。',
    appreciation: '在凄凉秋夜思乡中，忽然融入了儿童夜捉促织的生机与暖意。',
    keywords: [{ word: '客情', explain: '客居异乡的思乡之情。' }, { word: '挑促织', explain: '捉蟋蟀。' }]
  },
  {
    id: 'jiu-yue-jiu-ri',
    title: '九月九日忆山东兄弟',
    titlePinyin: 'jiǔ yuè jiǔ rì yì shān dōng xiōng dì',
    author: '王维',
    dynasty: '唐代',
    grade: '三上',
    gradeFull: '三年级上册',
    theme: '真挚情谊',
    themeColor: '#4f46e5',
    tags: ['每逢佳节倍思亲', '遍插茱萸少一人'],
    famousQuote: '独在异乡为异客，每逢佳节倍思亲。',
    lines: [
      makeLine('独在异乡为异客，', 'dú zài yì xiāng wéi yì kè,', '独在异乡／为异客，'),
      makeLine('每逢佳节倍思亲。', 'měi féng jiā jié bèi sī qīn.', '每逢佳节／倍思亲。'),
      makeLine('遥知兄弟登高处，', 'yáo zhī xiōng dì dēng gāo chù,', '遥知兄弟／登高处，'),
      makeLine('遍插茱萸少一人。', 'biàn chā zhū yú shǎo yī rén.', '遍插茱萸／少一人。')
    ],
    spokenText: '九月九日忆山东兄弟，王维，唐代。独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。',
    translation: '独自一人在他乡当客人，每逢佳节便加倍思念亲人。远想兄弟们今天登上高处，头上都插满了茱萸，只少了我一个人。',
    appreciation: '千古思亲第一名句，写出了所有游子逢节思家的共同情感。',
    keywords: [{ word: '茱萸', explain: '一种香气浓郁的植物，重阳插带以求吉祥。' }]
  },
  {
    id: 'wang-tian-men-shan',
    title: '望天门山',
    titlePinyin: 'wàng tiān mén shān',
    author: '李白',
    dynasty: '唐代',
    grade: '三上',
    gradeFull: '三年级上册',
    theme: '大好河山',
    themeColor: '#2563eb',
    tags: ['天门中断楚江开', '碧水东流至此回'],
    famousQuote: '两岸青山相对出，孤帆一片日边来。',
    lines: [
      makeLine('天门中断楚江开，', 'tiān mén zhōng duàn chǔ jiāng kāi,', '天门中断／楚江开，'),
      makeLine('碧水东流至此回。', 'bì shuǐ dōng liú zhì cǐ huí.', '碧水东流／至此回。'),
      makeLine('两岸青山相对出，', 'liǎng àn qīng shān xiāng duì chū,', '两岸青山／相对出，'),
      makeLine('孤帆一片日边来。', 'gū fān yī piàn rì biān lái.', '孤帆一片／日边来。')
    ],
    spokenText: '望天门山，李白，唐代。天门中断楚江开，碧水东流至此回。两岸青山相对出，孤帆一片日边来。',
    translation: '高耸的天门山仿佛被长江从中断开，碧绿江水向东奔流在此激起滔滔回旋。两岸青山迎面扑来，一叶孤舟乘着朝阳从天边破浪而来。',
    appreciation: '豪迈壮阔，李白青年气魄吞吐江山的代表作。',
    keywords: [{ word: '至此回', explain: '江水被山阻挡而回旋激荡。' }]
  },
  {
    id: 'yin-hu-shang',
    title: '饮湖上初晴后雨',
    titlePinyin: 'yǐn hú shàng chū qíng hòu yǔ',
    author: '苏轼',
    dynasty: '宋代',
    grade: '三上',
    gradeFull: '三年级上册',
    theme: '大好河山',
    themeColor: '#0d9488',
    tags: ['水光潋滟晴方好', '欲把西湖比西子'],
    famousQuote: '欲把西湖比西子，淡妆浓抹总相宜。',
    lines: [
      makeLine('水光潋滟晴方好，', 'shuǐ guāng liàn yàn qíng fāng hǎo,', '水光潋滟／晴方好，'),
      makeLine('山色空蒙雨亦奇。', 'shān sè kōng méng yǔ yì qí.', '山色空蒙／雨亦奇。'),
      makeLine('欲把西湖比西子，', 'yù bǎ xī hú bǐ xī zǐ,', '欲把西湖／比西子，'),
      makeLine('淡妆浓抹总相宜。', 'dàn zhuāng nóng mǒ zǒng xiāng yí.', '淡妆浓抹／总相宜。')
    ],
    spokenText: '饮湖上初晴后雨，苏轼，宋代。水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，淡妆浓抹总相宜。',
    translation: '西湖水波在晴天里波光闪动格外美好，远山在细雨蒙蒙中也奇妙空灵。若是把西湖比作美人西施，不论淡妆浓抹都一样美丽动人。',
    appreciation: '把西湖比作西子，赋予西湖永久的灵性与美感。',
    keywords: [{ word: '潋滟', explain: '波光闪动的样子。' }, { word: '空蒙', explain: '细雨迷茫的样子。' }]
  },
  {
    id: 'wang-dong-ting',
    title: '望洞庭',
    titlePinyin: 'wàng dòng tíng',
    author: '刘禹锡',
    dynasty: '唐代',
    grade: '三上',
    gradeFull: '三年级上册',
    theme: '大好河山',
    themeColor: '#0284c7',
    tags: ['潭面无风镜未磨', '白银盘里一青螺'],
    famousQuote: '遥望洞庭山水翠，白银盘里一青螺。',
    lines: [
      makeLine('湖光秋月两相和，', 'hú guāng qiū yuè liǎng xiāng hé,', '湖光秋月／两相和，'),
      makeLine('潭面无风镜未磨。', 'tán miàn wú fēng jìng wèi mó.', '潭面无风／镜未磨。'),
      makeLine('遥望洞庭山水翠，', 'yáo wàng dòng tíng shān shuǐ cuì,', '遥望洞庭／山水翠，'),
      makeLine('白银盘里一青螺。', 'bái yín pán lǐ yī qīng luó.', '白银盘里／一青螺。')
    ],
    spokenText: '望洞庭，刘禹锡，唐代。湖光秋月两相和，潭面无风镜未磨。遥望洞庭山水翠，白银盘里一青螺。',
    translation: '洞庭湖水与皎洁月光融为一体，平静无风的湖面就像一面未磨光的铜镜。远远望去山水青翠，宛如白银盘里放着一枚精致的小青螺。',
    appreciation: '把浩大洞庭比作银盘、君山比作青螺，静谧祥和。',
    keywords: [{ word: '青螺', explain: '比喻洞庭湖中的君山。' }]
  },
  {
    id: 'zao-fa-bai-di-cheng',
    title: '早发白帝城',
    titlePinyin: 'zǎo fā bái dì chéng',
    author: '李白',
    dynasty: '唐代',
    grade: '三上',
    gradeFull: '三年级上册',
    theme: '大好河山',
    themeColor: '#f59e0b',
    tags: ['朝辞白帝彩云间', '轻舟已过万重山'],
    famousQuote: '两岸猿声啼不住，轻舟已过万重山。',
    lines: [
      makeLine('朝辞白帝彩云间，', 'zhāo cí bái dì cǎi yún jiān,', '朝辞白帝／彩云间，'),
      makeLine('千里江陵一日还。', 'qiān lǐ jiāng líng yī rì huán.', '千里江陵／一日还。'),
      makeLine('两岸猿声啼不住，', 'liǎng àn yuán shēng tí bù zhù,', '两岸猿声／啼不住，'),
      makeLine('轻舟已过万重山。', 'qīng zhōu yǐ guò wàn chóng shān.', '轻舟已过／万重山。')
    ],
    spokenText: '早发白帝城，李白，唐代。朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。',
    translation: '早晨辞别彩云缭绕的白帝城，千里之遥的江陵一天就能赶回。两岸猿猴的叫声还在耳边回荡，轻快的小舟早已掠过了千山万壑。',
    appreciation: '江水迅疾如飞，心情轻快如飞，千古第一快诗。',
    keywords: [{ word: '江陵', explain: '今湖北荆州。' }]
  },
  {
    id: 'si-ma-guang',
    title: '司马光',
    titlePinyin: 'sī mǎ guāng',
    author: '统编文言文',
    dynasty: '宋代',
    grade: '三上',
    gradeFull: '三年级上册',
    theme: '经典古文',
    themeColor: '#7c3aed',
    tags: ['破瓮救儿', '小学文言第一课'],
    famousQuote: '光持石击瓮破之，水迸，儿得活。',
    lines: [
      makeLine('群儿戏于庭，', 'qún ér xì yú tíng,', '群儿／戏于庭，'),
      makeLine('一儿登瓮，', 'yī ér dēng wèng,', '一儿／登瓮，'),
      makeLine('足跌没水中。', 'zú dié mò shuǐ zhōng.', '足跌／没水中。'),
      makeLine('众皆弃去，', 'zhòng jiē qì qù,', '众皆／弃去，'),
      makeLine('光持石击瓮破之，', 'guāng chí shí jī wèng pò zhī,', '光持石／击瓮破之，'),
      makeLine('水迸，儿得活。', 'shuǐ bèng, ér dé huó.', '水迸，／儿得活。')
    ],
    spokenText: '司马光，宋代。群儿戏于庭，一儿登瓮，足跌没水中。众皆弃去，光持石击瓮破之，水迸，儿得活。',
    translation: '一群小孩在庭院嬉戏，一个小孩爬上水瓮摔入水中。大家吓跑了，只有司马光拿石头砸破瓮，水涌出来，小孩得救了。',
    appreciation: '言简意赅，赞扬了司马光机智勇敢、舍己救人的品质。',
    keywords: [{ word: '瓮', explain: '口大肚深的大水缸。' }, { word: '迸', explain: '涌出。' }]
  },
  {
    id: 'suo-jian',
    title: '所见',
    titlePinyin: 'suǒ jiàn',
    author: '袁枚',
    dynasty: '清代',
    grade: '三上',
    gradeFull: '三年级上册',
    theme: '纯真童趣',
    themeColor: '#059669',
    tags: ['牧童骑黄牛', '意欲捕鸣蝉'],
    famousQuote: '意欲捕鸣蝉，忽然闭口立。',
    lines: [
      makeLine('牧童骑黄牛，', 'mù tóng qí huáng niú,', '牧童／骑黄牛，'),
      makeLine('歌声振林樾。', 'gē shēng zhèn lín yuè.', '歌声／振林樾。'),
      makeLine('意欲捕鸣蝉，', 'yì yù bǔ míng chán,', '意欲／捕鸣蝉，'),
      makeLine('忽然闭口立。', 'hū rán bì kǒu lì.', '忽然／闭口立。')
    ],
    spokenText: '所见，袁枚，清代。牧童骑黄牛，歌声振林樾。意欲捕鸣蝉，忽然闭口立。',
    translation: '小牧童骑在黄牛背上高声放歌，忽然想捉树上的蝉，立即停止唱歌静静站立。',
    appreciation: '捕捉儿童动静转化的传神画面。',
    keywords: [{ word: '振', explain: '振动回荡。' }, { word: '林樾', explain: '绿树成荫的林木。' }]
  }
];

g3Poems.forEach(p => all127List.push(p));

// 三年级下册 10 首
const g3s2Poems = [
  {
    id: 'jue-ju-chi-ri',
    title: '绝句（迟日江山丽）',
    titlePinyin: 'jué jù chí rì jiāng shān lì',
    author: '杜甫',
    dynasty: '唐代',
    grade: '三下',
    gradeFull: '三年级下册',
    theme: '四季风物',
    themeColor: '#10b981',
    tags: ['迟日江山丽', '春风花草香'],
    famousQuote: '泥融飞燕子，沙暖睡鸳鸯。',
    lines: [
      makeLine('迟日江山丽，', 'chí rì jiāng shān lì,', '迟日／江山丽，'),
      makeLine('春风花草香。', 'chūn fēng huā cǎo xiāng.', '春风／花草香。'),
      makeLine('泥融飞燕子，', 'ní róng fēi yàn zi.', '泥融／飞燕子，'),
      makeLine('沙暖睡鸳鸯。', 'shā nuǎn shuì yuān yāng.', '沙暖／睡鸳鸯。')
    ],
    spokenText: '绝句，杜甫，唐代。迟日江山丽，春风花草香。泥融飞燕子，沙暖睡鸳鸯。',
    translation: '春日阳光照耀江山秀丽，春风拂过草木花香。湿润泥土飞舞衔泥春燕，温暖沙滩上安睡着鸳鸯。',
    appreciation: '四句写尽早春明媚祥和。',
    keywords: [{ word: '迟日', explain: '春日。' }]
  },
  {
    id: 'hui-chong-chun-jiang-wan-jing',
    title: '惠崇春江晚景',
    titlePinyin: 'huì chóng chūn jiāng wǎn jǐng',
    author: '苏轼',
    dynasty: '宋代',
    grade: '三下',
    gradeFull: '三年级下册',
    theme: '四季风物',
    themeColor: '#059669',
    tags: ['竹外桃花三两枝', '春江水暖鸭先知'],
    famousQuote: '竹外桃花三两枝，春江水暖鸭先知。',
    lines: [
      makeLine('竹外桃花三两枝，', 'zhú wài táo huā sān liǎng zhī,', '竹外桃花／三两枝，'),
      makeLine('春江水暖鸭先知。', 'chūn jiāng shuǐ nuǎn yā xiān zhī.', '春江水暖／鸭先知。'),
      makeLine('蒌蒿满地芦芽短，', 'lóu hāo mǎn dì lú yá duǎn,', '蒌蒿满地／芦芽短，'),
      makeLine('正是河豚欲上时。', 'zhèng shì hé tún yù shàng shí.', '正是河豚／欲上时。')
    ],
    spokenText: '惠崇春江晚景，苏轼，宋代。竹外桃花三两枝，春江水暖鸭先知。蒌蒿满地芦芽短，正是河豚欲上时。',
    translation: '竹林外几枝桃花绽放，鸭子在水里嬉戏最先察觉江水变暖。地上蒌蒿满地芦芽吐绿，正是河豚逆江而上的时候。',
    appreciation: '以动写静，题画诗的千古奇作。',
    keywords: [{ word: '蒌蒿', explain: '水边野草。' }]
  },
  {
    id: 'san-qu-dao-zhong',
    title: '三衢道中',
    titlePinyin: 'sān qú dào zhōng',
    author: '曾几',
    dynasty: '宋代',
    grade: '三下',
    gradeFull: '三年级下册',
    theme: '四季风物',
    themeColor: '#059669',
    tags: ['梅子黄时日日晴', '添得黄鹂四五声'],
    famousQuote: '绿阴不减来时路，添得黄鹂四五声。',
    lines: [
      makeLine('梅子黄时日日晴，', 'méi zǐ huáng shí rì rì qíng,', '梅子黄时／日日晴，'),
      makeLine('小溪泛尽却山行。', 'xiǎo xī fàn jìn què shān xíng.', '小溪泛尽／却山行。'),
      makeLine('绿阴不减来时路，', 'lǜ yīn bù jiǎn lái shí lù,', '绿阴不减／来时路，'),
      makeLine('添得黄鹂四五声。', 'tiān dé huáng lí sì wǔ shēng.', '添得黄鹂／四五声。')
    ],
    spokenText: '三衢道中，曾几，宋代。梅子黄时日日晴，小溪泛尽却山行。绿阴不减来时路，添得黄鹂四五声。',
    translation: '梅子黄透时每天都是大晴天，小溪划船到头再爬山。绿荫和来时一样浓郁，林间又添了黄鹂鸟的清脆叫声。',
    appreciation: '初夏山行之趣，情调清爽。',
    keywords: [{ word: '泛', explain: '乘船漂行。' }]
  },
  {
    id: 'yi-jiang-nan',
    title: '忆江南',
    titlePinyin: 'yì jiāng nán',
    author: '白居易',
    dynasty: '唐代',
    grade: '三下',
    gradeFull: '三年级下册',
    theme: '大好河山',
    themeColor: '#0891b2',
    tags: ['日出江花红胜火', '春来江水绿如蓝'],
    famousQuote: '日出江花红胜火，春来江水绿如蓝。能不忆江南？',
    lines: [
      makeLine('江南好，', 'jiāng nán hǎo,', '江南好，'),
      makeLine('风景旧曾谙。', 'fēng jǐng jiù céng ān.', '风景／旧曾谙。'),
      makeLine('日出江花红胜火，', 'rì chū jiāng huā hóng shèng huǒ,', '日出江花／红胜火，'),
      makeLine('春来江水绿如蓝。', 'chūn lái jiāng shuǐ lǜ rú lán.', '春来江水／绿如蓝。'),
      makeLine('能不忆江南？', 'néng bù yì jiāng nán?', '能不忆／江南？')
    ],
    spokenText: '忆江南，白居易，唐代。江南好，风景旧曾谙。日出江花红胜火，春来江水绿如蓝。能不忆江南？',
    translation: '江南风景真好，那景色我曾经那么熟悉。朝阳让江边的红花比火还红，春水碧绿得像蓝草染成。怎能不想念江南呢？',
    appreciation: '极富视觉色彩冲击力的词作名篇。',
    keywords: [{ word: '谙', explain: '熟悉。' }]
  },
  {
    id: 'yuan-ri',
    title: '元日',
    titlePinyin: 'yuán rì',
    author: '王安石',
    dynasty: '宋代',
    grade: '三下',
    gradeFull: '三年级下册',
    theme: '民俗节庆',
    themeColor: '#dc2626',
    tags: ['爆竹声中一岁除', '总把新桃换旧符'],
    famousQuote: '千门万户曈曈日，总把新桃换旧符。',
    lines: [
      makeLine('爆竹声中一岁除，', 'bào zhú shēng zhōng yī suì chú,', '爆竹声中／一岁除，'),
      makeLine('春风送暖入屠苏。', 'chūn fēng sòng nuǎn rù tú sū.', '春风送暖／入屠苏。'),
      makeLine('千门万户曈曈日，', 'qiān mén wàn hù tóng tóng rì,', '千门万户／曈曈日，'),
      makeLine('总把新桃换旧符。', 'zǒng bǎ xīn táo huàn jiù fú.', '总把新桃／换旧符。')
    ],
    spokenText: '元日，王安石，宋代。爆竹声中一岁除，春风送暖入屠苏。千门万户曈曈日，总把新桃换旧符。',
    translation: '鞭炮声中旧岁过去，温暖春风吹进屠苏酒。初升太阳照亮千家万户，都把新春联换下了旧桃符。',
    appreciation: '迎新辞旧的喜庆画卷。',
    keywords: [{ word: '屠苏', explain: '药酒名。' }, { word: '桃符', explain: '春联的前身。' }]
  },
  {
    id: 'qing-ming',
    title: '清明',
    titlePinyin: 'qīng míng',
    author: '杜牧',
    dynasty: '唐代',
    grade: '三下',
    gradeFull: '三年级下册',
    theme: '民俗节庆',
    themeColor: '#059669',
    tags: ['清明时节雨纷纷', '牧童遥指杏花村'],
    famousQuote: '借问酒家何处有？牧童遥指杏花村。',
    lines: [
      makeLine('清明时节雨纷纷，', 'qīng míng shí jié yǔ fēn fēn,', '清明时节／雨纷纷，'),
      makeLine('路上行人欲断魂。', 'lù shàng xíng rén yù duàn hún.', '路上行人／欲断魂。'),
      makeLine('借问酒家何处有？', 'jiè wèn jiǔ jiā hé chù yǒu?', '借问酒家／何处有？'),
      makeLine('牧童遥指杏花村。', 'mù tóng yáo zhǐ xìng huā cūn.', '牧童遥指／杏花村。')
    ],
    spokenText: '清明，杜牧，唐代。清明时节雨纷纷，路上行人欲断魂。借问酒家何处有？牧童遥指杏花村。',
    translation: '清明节细雨飘洒不停，路上的旅人伤感欲绝。打听哪里有小酒馆？牧童远远指着美丽的杏花村。',
    appreciation: '情景相生，哀而不伤。',
    keywords: [{ word: '欲断魂', explain: '形容凄迷哀伤的心情。' }]
  },
  {
    id: 'shou-zhu-dai-tu',
    title: '守株待兔',
    titlePinyin: 'shǒu zhū dài tù',
    author: '韩非子',
    dynasty: '战国',
    grade: '三下',
    gradeFull: '三年级下册',
    theme: '经典古文',
    themeColor: '#d97706',
    tags: ['寓言典故', '触株折颈'],
    famousQuote: '兔不可复得，而身为宋国笑。',
    lines: [
      makeLine('宋人有耕者。', 'sòng rén yǒu gēng zhě.', '宋人／有耕者。'),
      makeLine('田中有株。', 'tián zhōng yǒu zhū.', '田中／有株。'),
      makeLine('兔走触株，折颈而死。', 'tù zǒu chù zhū, zhé jǐng ér sǐ.', '兔走触株，／折颈而死。'),
      makeLine('因释其耒而守株，', 'yīn shì qí lěi ér shǒu zhū,', '因释其耒／而守株，'),
      makeLine('冀复得兔。', 'jì fù dé tù.', '冀／复得兔。'),
      makeLine('兔不可复得，', 'tù bù kě fù dé,', '兔不可复得，'),
      makeLine('而身为宋国笑。', 'ér shēn wéi sòng guó xiào.', '而身／为宋国笑。')
    ],
    spokenText: '守株待兔，战国韩非子。宋人有耕者。田中有株。兔走触株，折颈而死。因释其耒而守株，冀复得兔。兔不可复得，而身为宋国笑。',
    translation: '宋国有农夫田里有树桩，兔子跑过撞死在树桩上。农夫放下农具守树桩想再捡兔子。兔子再没等到，自己却成宋国人的笑柄。',
    appreciation: '戒除侥幸与怠惰的深刻寓言。',
    keywords: [{ word: '释其耒', explain: '放下农具。' }]
  },
  {
    id: 'da-lin-si-tao-hua',
    title: '大林寺桃花',
    titlePinyin: 'dà lín sì táo huā',
    author: '白居易',
    dynasty: '唐代',
    grade: '三下',
    gradeFull: '三年级下册',
    theme: '四季风物',
    themeColor: '#ec4899',
    tags: ['人间四月芳菲尽', '山寺桃花始盛开'],
    famousQuote: '人间四月芳菲尽，山寺桃花始盛开。',
    lines: [
      makeLine('人间四月芳菲尽，', 'rén jiān sì yuè fāng fēi jìn,', '人间四月／芳菲尽，'),
      makeLine('山寺桃花始盛开。', 'shān sì táo huā shǐ shèng kāi.', '山寺桃花／始盛开。'),
      makeLine('长恨春归无觅处，', 'cháng hèn chūn guī wú mì chù,', '长恨春归／无觅处，'),
      makeLine('不知转入此中来。', 'bù zhī zhuǎn rù cǐ zhōng lái.', '不知转入／此中来。')
    ],
    spokenText: '大林寺桃花，白居易，唐代。人间四月芳菲尽，山寺桃花始盛开。长恨春归无觅处，不知转入此中来。',
    translation: '人间四月里百花凋零，高山寺庙里的桃花却才盛开。常遗憾春天走后无处寻找，没料到它藏到了这山寺中。',
    appreciation: '高山奇妙物候的惊喜感叹。',
    keywords: [{ word: '芳菲', explain: '盛开的花草。' }]
  },
  {
    id: 'chu-zhou-xi-jian',
    title: '滁州西涧',
    titlePinyin: 'chú zhōu xī jiàn',
    author: '韦应物',
    dynasty: '唐代',
    grade: '三下',
    gradeFull: '三年级下册',
    theme: '四季风物',
    themeColor: '#059669',
    tags: ['春潮带雨晚来急', '野渡无人舟自横'],
    famousQuote: '春潮带雨晚来急，野渡无人舟自横。',
    lines: [
      makeLine('独怜幽草涧边生，', 'dú lián yōu cǎo jiàn biān shēng,', '独怜幽草／涧边生，'),
      makeLine('上有黄鹂深树鸣。', 'shàng yǒu huáng lí shēn shù míng.', '上有黄鹂／深树鸣。'),
      makeLine('春潮带雨晚来急，', 'chūn cháo dài yǔ wǎn lái jí,', '春潮带雨／晚来急，'),
      makeLine('野渡无人舟自横。', 'yě dù wú rén zhōu zì héng.', '野渡无人／舟自横。')
    ],
    spokenText: '滁州西涧，韦应物，唐代。独怜幽草涧边生，上有黄鹂深树鸣。春潮带雨晚来急，野渡无人舟自横。',
    translation: '偏爱涧水边悄悄生长的绿草，树深处有黄鹂欢叫。傍晚春潮伴着急雨涌来，荒渡无人只有孤舟横停在水面。',
    appreciation: '孤舟自横的幽静与自得。',
    keywords: [{ word: '独怜', explain: '偏爱。' }]
  },
  {
    id: 'qing-quan-an-tao-hua',
    title: '庆全庵桃花',
    titlePinyin: 'qìng quán ān táo huā',
    author: '谢枋得',
    dynasty: '宋代',
    grade: '三下',
    gradeFull: '三年级下册',
    theme: '四季风物',
    themeColor: '#f43f5e',
    tags: ['寻得桃源好避秦', '怕有渔郎来问津'],
    famousQuote: '花飞莫遣随流水，怕有渔郎来问津。',
    lines: [
      makeLine('寻得桃源好避秦，', 'xún dé táo yuán hǎo bì qín,', '寻得桃源／好避秦，'),
      makeLine('桃红又见一年春。', 'táo hóng yòu jiàn yī nián chūn.', '桃红又见／一年春。'),
      makeLine('花飞莫遣随流水，', 'huā fēi mò qiǎn suí liú shuǐ,', '花飞莫遣／随流水，'),
      makeLine('怕有渔郎来问津。', 'pà yǒu yú láng lái wèn jīn.', '怕有渔郎／来问津。')
    ],
    spokenText: '庆全庵桃花，谢枋得，宋代。寻得桃源好避秦，桃红又见一年春。花飞莫遣随流水，怕有渔郎来问津。',
    translation: '找到这方世外桃源正好避世，桃花盛开又迎来一年春光。落花千万别随流水漂出，生怕外面的渔郎来寻路探访。',
    appreciation: '坚守节操的世外之思。',
    keywords: [{ word: '避秦', explain: '远离战乱世俗。' }]
  }
];

g3s2Poems.forEach(p => all127List.push(p));

console.log(`✓ 导入三下 10 首后，当前累计: ${all127List.length} 首 (预期: 46)`);

grade4Poems.forEach(p => all127List.push(p));
console.log(`✓ 导入四年级 22 首后，当前累计: ${all127List.length} 首 (预期: 68)`);

grade5Poems.forEach(p => all127List.push(p));
console.log(`✓ 导入五年级 24 首后，当前累计: ${all127List.length} 首 (预期: 92)`);

grade6Poems.forEach(p => all127List.push(p));
console.log(`✓ 导入六年级 35 首后，当前累计: ${all127List.length} 首 (预期: 127)`);

// 检查重复 ID
const idSet = new Set();
let hasDup = false;
for (const p of all127List) {
  if (idSet.has(p.id)) {
    console.error(`❌ 发现重复 ID: ${p.id} (${p.title})`);
    hasDup = true;
  }
  idSet.add(p.id);
}

if (!hasDup) {
  console.log('✓ 经校验，127 篇古诗文 ID 全部唯一，无重复！');
}

// 统计各学期
const gradeCounts = {};
all127List.forEach(p => {
  gradeCounts[p.grade] = (gradeCounts[p.grade] || 0) + 1;
});
console.log('📊 各学期分布统计:');
console.table(gradeCounts);
console.log(`🎉 最终总数: ${all127List.length} 篇！`);

// 序列化并写入 src/data/poemsData.js
const outPath = path.join(process.cwd(), 'src', 'data', 'poemsData.js');
const fileContent = `/**
 * 统编版小学 1~6 年级 12 册全量古诗文大满贯数据集 (共 127 篇)
 * 包含完整古诗、文言文、注音、节拍律动、儿童译文、赏析与重点字词
 * 自动生成于: ${new Date().toISOString()}
 */

export const poemsData = ${JSON.stringify(all127List, null, 2)};
`;

fs.writeFileSync(outPath, fileContent, 'utf-8');
console.log(`✅ 成功写入 ${outPath} (${(fileContent.length / 1024).toFixed(1)} KB)`);

