/**
 * 五年级上册 (11篇) + 五年级下册 (13篇) = 24篇
 */

function makeTokens(text, pinyinStr, rhythmStr) {
  const chars = Array.from(text);
  const cleanPy = pinyinStr.replace(/[，。？！、：；“”‘’「」『』《》]/g, ' ').trim().split(/\s+/).filter(Boolean);
  let pyIdx = 0;
  const tokens = [];

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (/[，。？！、：；“”‘’「」『』《》\s]/.test(ch)) {
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

export const grade5Poems = [
  // ==========================================
  // 五年级上册 (11 篇)
  // ==========================================
  {
    id: 'chan',
    title: '蝉',
    titlePinyin: 'chán',
    author: '虞世南',
    dynasty: '唐代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '托物言志',
    themeColor: '#059669',
    tags: ['居高声自远', '非是藉秋风'],
    famousQuote: '居高声自远，非是藉秋风。',
    lines: [
      makeLine('垂緌饮清露，', 'chuí ruí yǐn qīng lù,', '垂緌／饮清露，'),
      makeLine('流响出疏桐。', 'liú xiǎng chū shū tóng.', '流响／出疏桐。'),
      makeLine('居高声自远，', 'jū gāo shēng zì yuǎn,', '居高／声自远，'),
      makeLine('非是藉秋风。', 'fēi shì jiè qiū fēng.', '非是／藉秋风。')
    ],
    spokenText: '蝉，虞世南，唐代。垂緌饮清露，流响出疏桐。居高声自远，非是藉秋风。',
    translation: '蝉垂下头部触须吸饮清冽的露水，清亮的鸣叫声从稀疏的梧桐树上传出。蝉声传得远是因为身处高处，并不是凭借秋风的力量。',
    appreciation: '托物言志名篇，赞赏品格高尚之人不需要依附外在权势便能声名远播。',
    keywords: [{ word: '垂緌', explain: '指蝉的触须，也比喻古人帽带下垂部分。' }, { word: '藉', explain: '凭借，依靠。' }]
  },
  {
    id: 'qi-qiao',
    title: '乞巧',
    titlePinyin: 'qǐ qiǎo',
    author: '林杰',
    dynasty: '唐代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '民俗节庆',
    themeColor: '#db2777',
    tags: ['七夕今宵看碧霄', '穿尽红丝几万条'],
    famousQuote: '家家乞巧望秋月，穿尽红丝几万条。',
    lines: [
      makeLine('七夕今宵看碧霄，', 'qī xī jīn xiāo kàn bì xiāo,', '七夕今宵／看碧霄，'),
      makeLine('牵牛织女渡河桥。', 'qiān niú zhī nǚ dù hé qiáo.', '牵牛织女／渡河桥。'),
      makeLine('家家乞巧望秋月，', 'jiā jiā qǐ qiǎo wàng qiū yuè,', '家家乞巧／望秋月，'),
      makeLine('穿尽红丝几万条。', 'chuān jìn hóng sī jǐ wàn tiáo.', '穿尽红丝／几万条。')
    ],
    spokenText: '乞巧，林杰，唐代。七夕今宵看碧霄，牵牛织女渡河桥。家家乞巧望秋月，穿尽红丝几万条。',
    translation: '今夜七夕佳节仰望碧蓝夜空，牛郎织女正在银河的喜鹊桥上相会。千家万户的少女都在向明月乞求心灵手巧，穿戴了不知多少万条红丝线。',
    appreciation: '生动再现了古代民间七夕乞巧的欢悦民俗场景。',
    keywords: [{ word: '碧霄', explain: '青翠的天空。' }, { word: '乞巧', explain: '七夕夜穿针乞求织女赐予巧艺。' }]
  },
  {
    id: 'shi-er',
    title: '示儿',
    titlePinyin: 'shì ér',
    author: '陆游',
    dynasty: '宋代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '家国情怀',
    themeColor: '#dc2626',
    tags: ['王师北定中原日', '家祭无忘告乃翁'],
    famousQuote: '王师北定中原日，家祭无忘告乃翁。',
    lines: [
      makeLine('死去元知万事空，', 'sǐ qù yuán zhī wàn shì kōng,', '死去／元知万事空，'),
      makeLine('但悲不见九州同。', 'dàn bēi bù jiàn jiǔ zhōu tóng.', '但悲／不见九州同。'),
      makeLine('王师北定中原日，', 'wáng shī běi dìng zhōng yuán rì,', '王师北定／中原日，'),
      makeLine('家祭无忘告乃翁。', 'jiā jì wú wàng gào nǎi wēng.', '家祭／无忘告乃翁。')
    ],
    spokenText: '示儿，陆游，宋代。死去元知万事空，但悲不见九州同。王师北定中原日，家祭无忘告乃翁。',
    translation: '我本就知道人死之后万事皆空，唯一悲伤的就是没能看到国家统一。待到朝廷军队北伐平定收复中原那一天，在祭祀祖先时千万不要忘记告诉我！',
    appreciation: '陆游的临终绝笔，字字泣血，爱国赤诚感召千古。',
    keywords: [{ word: '元知', explain: '原本就知道。' }, { word: '乃翁', explain: '你的父亲。' }]
  },
  {
    id: 'ti-lin-an-di',
    title: '题临安邸',
    titlePinyin: 'tí lín ān dǐ',
    author: '林升',
    dynasty: '宋代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '家国情怀',
    themeColor: '#ea580c',
    tags: ['山外青山楼外楼', '直把杭州作汴州'],
    famousQuote: '暖风熏得游人醉，直把杭州作汴州。',
    lines: [
      makeLine('山外青山楼外楼，', 'shān wài qīng shān lóu wài lóu,', '山外青山／楼外楼，'),
      makeLine('西湖歌舞几时休？', 'xī hú gē wǔ jǐ shí xiū?', '西湖歌舞／几时休？'),
      makeLine('暖风熏得游人醉，', 'nuǎn fēng xūn dé yóu rén zuì,', '暖风熏得／游人醉，'),
      makeLine('直把杭州作汴州。', 'zhí bǎ háng zhōu zuò biàn zhōu.', '直把杭州／作汴州。')
    ],
    spokenText: '题临安邸，林升，宋代。山外青山楼外楼，西湖歌舞几时休？暖风熏得游人醉，直把杭州作汴州。',
    translation: '青山之外还有青山，高楼之外还有高楼，西湖边达官贵人的靡靡歌舞几时才能停止？沉醉的暖风把游人熏得神魂颠倒，简直把临安当成了故都汴州！',
    appreciation: '辛辣嘲讽南宋统治者苟且偷安、不思收复失地的醉生梦死。',
    keywords: [{ word: '邸', explain: '旅店、客栈。' }, { word: '汴州', explain: '北宋都城，即今河南开封。' }]
  },
  {
    id: 'ji-hai-za-shi',
    title: '己亥杂诗',
    titlePinyin: 'jǐ hài zá shī',
    author: '龚自珍',
    dynasty: '清代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '家国情怀',
    themeColor: '#7c3aed',
    tags: ['我劝天公重抖擞', '不拘一格降人才'],
    famousQuote: '我劝天公重抖擞，不拘一格降人才。',
    lines: [
      makeLine('九州生气恃风雷，', 'jiǔ zhōu shēng qì shì fēng léi,', '九州生气／恃风雷，'),
      makeLine('万马齐喑究可哀。', 'wàn mǎ qí yīn jiū kě āi.', '万马齐喑／究可哀。'),
      makeLine('我劝天公重抖擞，', 'wǒ quàn tiān gōng zhòng dǒu sǒu,', '我劝天公／重抖擞，'),
      makeLine('不拘一格降人才。', 'bù jū yī gé jiàng rén cái.', '不拘一格／降人才。')
    ],
    spokenText: '己亥杂诗，龚自珍，清代。九州生气恃风雷，万马齐喑究可哀。我劝天公重抖擞，不拘一格降人才。',
    translation: '国家要重新恢复勃勃生机，必须依靠狂风暴雨般的变革；人们沉默不语、万马齐喑的沉闷局面实在令人悲哀。我奉劝上天重新振奋精神，打破一切条框规矩降下优秀人才！',
    appreciation: '呼唤变革、期盼人才辈出的激昂绝唱。',
    keywords: [{ word: '喑', explain: '哑口无言。' }, { word: '不拘一格', explain: '不局限于一种规格标准。' }]
  },
  {
    id: 'shan-ju-qiu-ming',
    title: '山居秋暝',
    titlePinyin: 'shān jū qiū míng',
    author: '王维',
    dynasty: '唐代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '四季风物',
    themeColor: '#0d9488',
    tags: ['明月松间照', '清泉石上流'],
    famousQuote: '明月松间照，清泉石上流。',
    lines: [
      makeLine('空山新雨后，', 'kōng shān xīn yǔ hòu,', '空山／新雨后，'),
      makeLine('天气晚来秋。', 'tiān qì wǎn lái qiū.', '天气／晚来秋。'),
      makeLine('明月松间照，', 'míng yuè sōng jiān zhào,', '明月／松间照，'),
      makeLine('清泉石上流。', 'qīng quán shí shàng liú.', '清泉／石上流。'),
      makeLine('竹喧归浣女，', 'zhú xuān guī huàn nǚ,', '竹喧／归浣女，'),
      makeLine('莲动下渔舟。', 'lián dòng xià yú zhōu.', '莲动／下渔舟。'),
      makeLine('随意春芳歇，', 'suí yì chūn fāng xiē,', '随意／春芳歇，'),
      makeLine('王孙自可留。', 'wáng sūn zì kě liú.', '王孙／自可留。')
    ],
    spokenText: '山居秋暝，王维，唐代。空山新雨后，天气晚来秋。明月松间照，清泉石上流。竹喧归浣女，莲动下渔舟。随意春芳歇，王孙自可留。',
    translation: '空旷山峦刚沐浴了一场新雨，傍晚的天气透出初秋凉意。皎洁明月在青松间静静照耀，清冽泉水在山石上潺潺流淌。竹林里传来洗衣姑娘的欢声笑语，水莲摇动是渔舟顺流划来。任凭春天的芳菲凋谢，这里依然值得隐居流连。',
    appreciation: '诗中有画，画中有诗，展现出纯洁幽静的自然与淳朴高洁的情致。',
    keywords: [{ word: '暝', explain: '日落，天黑。' }, { word: '浣女', explain: '洗衣的女子。' }]
  },
  {
    id: 'feng-qiao-ye-bo',
    title: '枫桥夜泊',
    titlePinyin: 'fēng qiáo yè bó',
    author: '张继',
    dynasty: '唐代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '明月思乡',
    themeColor: '#4338ca',
    tags: ['月落乌啼霜满天', '夜半钟声到客船'],
    famousQuote: '姑苏城外寒山寺，夜半钟声到客船。',
    lines: [
      makeLine('月落乌啼霜满天，', 'yuè luò wū tí shuāng mǎn tiān,', '月落乌啼／霜满天，'),
      makeLine('江枫渔火对愁眠。', 'jiāng fēng yú huǒ duì chóu mián.', '江枫渔火／对愁眠。'),
      makeLine('姑苏城外寒山寺，', 'gū sū chéng wài hán shān sì,', '姑苏城外／寒山寺，'),
      makeLine('夜半钟声到客船。', 'yè bàn zhōng shēng dào kè chuán.', '夜半钟声／到客船。')
    ],
    spokenText: '枫桥夜泊，张继，唐代。月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。',
    translation: '月亮沉落乌鸦啼鸣漫天布满清霜，江边枫树与渔火伴着孤客愁绪难眠。苏州城外那古老的寒山寺，半夜悠扬的钟声飘落到了这客船之上。',
    appreciation: '秋夜客船羁旅名篇，空灵悠远的钟声敲动了千百年游子的心弦。',
    keywords: [{ word: '泊', explain: '停船靠岸。' }, { word: '姑苏', explain: '苏州古称。' }]
  },
  {
    id: 'chang-xiang-si',
    title: '长相思',
    titlePinyin: 'cháng xiāng sī',
    author: '纳兰性德',
    dynasty: '清代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '明月思乡',
    themeColor: '#6366f1',
    tags: ['山一程水一程', '故园无此声'],
    famousQuote: '聒碎乡心梦不成，故园无此声。',
    lines: [
      makeLine('山一程，水一程，', 'shān yī chéng, shuǐ yī chéng,', '山一程，／水一程，'),
      makeLine('身向榆关那畔行，', 'shēn xiàng yú guān nà pàn xíng,', '身向榆关／那畔行，'),
      makeLine('夜深千帐灯。', 'yè shēn qiān zhàng dēng.', '夜深／千帐灯。'),
      makeLine('风一更，雪一更，', 'fēng yī gēng, xuě yī gēng,', '风一更，／雪一更，'),
      makeLine('聒碎乡心梦不成，', 'guō suì xiāng xīn mèng bù chéng,', '聒碎乡心／梦不成，'),
      makeLine('故园无此声。', 'gù yuán wú cǐ shēng.', '故园／无此声。')
    ],
    spokenText: '长相思，纳兰性德，清代。山一程，水一程，身向榆关那畔行，夜深千帐灯。风一更，雪一更，聒碎乡心梦不成，故园无此声。',
    translation: '翻过一座座山涉过一条条水，队伍正向着山海关外进发，深夜里军营千顶帐篷点亮了灯火。风刮了一阵又一阵，雪下了一阵又一阵，风雪声打碎了思乡梦境久久不能成眠，在宁静的家乡可从来没有这种喧嚣风雪啊。',
    appreciation: '边塞出巡行军中对故园温情的无限眷恋与凄清。',
    keywords: [{ word: '榆关', explain: '山海关。' }, { word: '聒', explain: '声音嘈杂刺耳。' }]
  },
  {
    id: 'yu-ge-zi',
    title: '渔歌子',
    titlePinyin: 'yú gē zǐ',
    author: '张志和',
    dynasty: '唐代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '四季风物',
    themeColor: '#0891b2',
    tags: ['西塞山前白鹭飞', '斜风细雨不须归'],
    famousQuote: '青箬笠，绿蓑衣，斜风细雨不须归。',
    lines: [
      makeLine('西塞山前白鹭飞，', 'xī sài shān qián bái lù fēi,', '西塞山前／白鹭飞，'),
      makeLine('桃花流水鳜鱼肥。', 'táo huā liú shuǐ guì yú féi.', '桃花流水／鳜鱼肥。'),
      makeLine('青箬笠，', 'qīng ruò lì,', '青箬笠，'),
      makeLine('绿蓑衣，', 'lǜ suō yī,', '绿蓑衣，'),
      makeLine('斜风细雨不须归。', 'xié fēng xì yǔ bù xū guī.', '斜风细雨／不须归。')
    ],
    spokenText: '渔歌子，张志和，唐代。西塞山前白鹭飞，桃花流水鳜鱼肥。青箬笠，绿蓑衣，斜风细雨不须归。',
    translation: '西塞山前白鹭翩翩起飞，春水涨起桃花漂流鳜鱼正肥美。头戴青色箬竹斗笠，身披绿色草编蓑衣，在微斜的风和细密的春雨中怡然自乐，不急着回家。',
    appreciation: '色调明丽生机盎然的江南春水渔隐画卷。',
    keywords: [{ word: '箬笠', explain: '竹篾编织的斗笠。' }, { word: '不须归', explain: '乐而忘返，不用急着回去。' }]
  },
  {
    id: 'guan-shu-you-gan-1',
    title: '观书有感·其一',
    titlePinyin: 'guān shū yǒu gǎn qí yī',
    author: '朱熹',
    dynasty: '宋代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '哲理探索',
    themeColor: '#2563eb',
    tags: ['问渠那得清如许', '为有源头活水来'],
    famousQuote: '问渠那得清如许？为有源头活水来。',
    lines: [
      makeLine('半亩方塘一鉴开，', 'bàn mǔ fāng táng yī jiàn kāi,', '半亩方塘／一鉴开，'),
      makeLine('天光云影共徘徊。', 'tiān guāng yún yǐng gòng pái huái.', '天光云影／共徘徊。'),
      makeLine('问渠那得清如许？', 'wèn qú nà dé qīng rú xǔ?', '问渠那得／清如许？'),
      makeLine('为有源头活水来。', 'wèi yǒu yuán tóu huó shuǐ lái.', '为有源头／活水来。')
    ],
    spokenText: '观书有感其一，朱熹，宋代。半亩方塘一鉴开，天光云影共徘徊。问渠那得清如许？为有源头活水来。',
    translation: '半亩大小的池塘像明镜一样打开，天光与云影在水面上悠然徘徊倒映。要问这池水为什么会这般清澈见底？因为从源头上源源不断流来清新的活水啊！',
    appreciation: '借方塘活水比喻学习，只有不断吸取新知识，思想才能永葆清澈明澈。',
    keywords: [{ word: '鉴', explain: '镜子。' }, { word: '渠', explain: '它，代指池塘。' }]
  },
  {
    id: 'guan-shu-you-gan-2',
    title: '观书有感·其二',
    titlePinyin: 'guān shū yǒu gǎn qí èr',
    author: '朱熹',
    dynasty: '宋代',
    grade: '五上',
    gradeFull: '五年级上册',
    theme: '哲理探索',
    themeColor: '#3b82f6',
    tags: ['艨艟巨舰一毛轻', '此日中流自在行'],
    famousQuote: '向来枉费推移力，此日中流自在行。',
    lines: [
      makeLine('昨夜江边春水生，', 'zuó yè jiāng biān chūn shuǐ shēng,', '昨夜江边／春水生，'),
      makeLine('艨艟巨舰一毛轻。', 'méng chōng jù jiàn yī máo qīng.', '艨艟巨舰／一毛轻。'),
      makeLine('向来枉费推移力，', 'xiàng lái wǎng fèi tuī yí lì,', '向来枉费／推移力，'),
      makeLine('此日中流自在行。', 'cǐ rì zhōng liú zì zài xíng.', '此日中流／自在行。')
    ],
    spokenText: '观书有感其二，朱熹，宋代。昨夜江边春水生，艨艟巨舰一毛轻。向来枉费推移力，此日中流自在行。',
    translation: '昨晚江边春潮涌涨，原本搁浅的庞大战舰变得像羽毛一般轻盈浮起。往日里白白花费了推拉搬动的力气，今天却能在江流中心自由自在地航行。',
    appreciation: '说明水到渠成、厚积薄发的规律，积蓄足够力量后一切困难迎刃而解。',
    keywords: [{ word: '艨艟', explain: '古代的大型战船。' }, { word: '中流', explain: '江水中心。' }]
  },

  // ==========================================
  // 五年级下册 (13 篇)
  // ==========================================
  {
    id: 'si-shi-tian-yuan-31',
    title: '四时田园杂兴·其三十一',
    titlePinyin: 'sì shí tián yuán zá xìng qí sān shí yī',
    author: '范成大',
    dynasty: '宋代',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '四季风物',
    themeColor: '#059669',
    tags: ['昼出耘田夜绩麻', '也傍桑阴学种瓜'],
    famousQuote: '童孙未解供耕织，也傍桑阴学种瓜。',
    lines: [
      makeLine('昼出耘田夜绩麻，', 'zhòu chū yún tián yè jì má,', '昼出耘田／夜绩麻，'),
      makeLine('村庄儿女各当家。', 'cūn zhuāng ér nǚ gè dāng jiā.', '村庄儿女／各当家。'),
      makeLine('童孙未解供耕织，', 'tóng sūn wèi jiě gòng gēng zhī,', '童孙未解／供耕织，'),
      makeLine('也傍桑阴学种瓜。', 'yě bàng sāng yīn xué zhòng guā.', '也傍桑阴／学种瓜。')
    ],
    spokenText: '四时田园杂兴其三十一，范成大，宋代。昼出耘田夜绩麻，村庄儿女各当家。童孙未解供耕织，也傍桑阴学种瓜。',
    translation: '白天去田间锄草，夜晚在家搓麻绳，农家的青年男女各自挑起家务重担。幼小的孩子们虽然不懂得耕田织布，也在桑树荫凉下一本正经学着种瓜。',
    appreciation: '赞美农村辛勤劳作的美德，儿童学种瓜的纯朴稚态跃然纸上。',
    keywords: [{ word: '耘田', explain: '在田间锄草。' }, { word: '绩麻', explain: '把麻搓成线。' }, { word: '未解', explain: '不懂得。' }]
  },
  {
    id: 'zhi-zi-nong-bing',
    title: '稚子弄冰',
    titlePinyin: 'zhì zǐ nòng bīng',
    author: '杨万里',
    dynasty: '宋代',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '纯真童趣',
    themeColor: '#0284c7',
    tags: ['彩丝穿取当银钲', '忽作玻璃碎地声'],
    famousQuote: '敲成玉磬穿林响，忽作玻璃碎地声。',
    lines: [
      makeLine('稚子金盆脱晓冰，', 'zhì zǐ jīn pén tuō xiǎo bīng,', '稚子金盆／脱晓冰，'),
      makeLine('彩丝穿取当银钲。', 'cǎi sī chuān qǔ dāng yín zhēng.', '彩丝穿取／当银钲。'),
      makeLine('敲成玉磬穿林响，', 'qiāo chéng yù qìng chuān lín xiǎng,', '敲成玉磬／穿林响，'),
      makeLine('忽作玻璃碎地声。', 'hū zuò bō lí suì dì shēng.', '忽作玻璃／碎地声。')
    ],
    spokenText: '稚子弄冰，杨万里，宋代。稚子金盆脱晓冰，彩丝穿取当银钲。敲成玉磬穿林响，忽作玻璃碎地声。',
    translation: '清晨幼童从铜盆里取出一整块冻结的冰块，用彩色丝线穿系起来当作银钲敲打。清脆的声音像玉磬一样在树林中回荡，忽然冰块掉落，发出像玻璃碎地一样的声响。',
    appreciation: '抓住冬天儿童以冰为乐的细节，声音生动，趣味横生。',
    keywords: [{ word: '稚子', explain: '幼小的孩童。' }, { word: '钲', explain: '古代的一种打击乐器。' }, { word: '磬', explain: '古代玉石制成的乐器。' }]
  },
  {
    id: 'cun-wan',
    title: '村晚',
    titlePinyin: 'cūn wǎn',
    author: '雷震',
    dynasty: '宋代',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '四季风物',
    themeColor: '#0d9488',
    tags: ['山衔落日浸寒漪', '短笛无腔信口吹'],
    famousQuote: '牧童归去横牛背，短笛无腔信口吹。',
    lines: [
      makeLine('草满池塘水满陂，', 'cǎo mǎn chí táng shuǐ mǎn bēi,', '草满池塘／水满陂，'),
      makeLine('山衔落日浸寒漪。', 'shān xián luò rì jìn hán yī.', '山衔落日／浸寒漪。'),
      makeLine('牧童归去横牛背，', 'mù tóng guī qù héng niú bèi,', '牧童归去／横牛背，'),
      makeLine('短笛无腔信口吹。', 'duǎn dí wú qiāng xìn kǒu chuī.', '短笛无腔／信口吹。')
    ],
    spokenText: '村晚，雷震，宋代。草满池塘水满陂，山衔落日浸寒漪。牧童归去横牛背，短笛无腔信口吹。',
    translation: '池塘四周长满了青草，池水漫过了池岸；青山仿佛衔着落日，水波倒映着夕阳寒光。小牧童放牧归来横骑在黄牛背上，拿着短笛随心所欲无曲调地信口吹奏。',
    appreciation: '夕阳斜照的水乡晚景与无忧无虑的牧童相映成趣。',
    keywords: [{ word: '陂', explain: '池塘岸堤。' }, { word: '漪', explain: '水波纹。' }, { word: '无腔', explain: '没有固定的乐谱曲调。' }]
  },
  {
    id: 'you-zi-yin',
    title: '游子吟',
    titlePinyin: 'yóu zǐ yín',
    author: '孟郊',
    dynasty: '唐代',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '真挚情谊',
    themeColor: '#e11d48',
    tags: ['谁言寸草心', '报得三春晖'],
    famousQuote: '谁言寸草心，报得三春晖。',
    lines: [
      makeLine('慈母手中线，', 'cí mǔ shǒu zhōng xiàn,', '慈母／手中线，'),
      makeLine('游子身上衣。', 'yóu zǐ shēn shàng yī.', '游子／身上衣。'),
      makeLine('临行密密缝，', 'lín xíng mì mì féng,', '临行／密密缝，'),
      makeLine('意恐迟迟归。', 'yì kǒng chí chí guī.', '意恐／迟迟归。'),
      makeLine('谁言寸草心，', 'shuí yán cùn cǎo xīn,', '谁言／寸草心，'),
      makeLine('报得三春晖。', 'bào dé sān chūn huī.', '报得／三春晖。')
    ],
    spokenText: '游子吟，孟郊，唐代。慈母手中线，游子身上衣。临行密密缝，意恐迟迟归。谁言寸草心，报得三春晖。',
    translation: '慈祥的母亲手里拿着针线，正为即将远行的儿子缝制衣衫。临出发前密密匝匝地缝缀，心里唯恐儿子在外逗留迟迟难归。有谁能说小草那一点点绿意，能够报答得了春天阳光的普照恩情呢？',
    appreciation: '千古颂母第一诗，小草与春晖的比喻动人心魄。',
    keywords: [{ word: '寸草心', explain: '比喻儿女极其微小的孝心。' }, { word: '三春晖', explain: '比喻母亲深厚博大的慈爱。' }]
  },
  {
    id: 'niao-ming-jian',
    title: '鸟鸣涧',
    titlePinyin: 'niǎo míng jiàn',
    author: '王维',
    dynasty: '唐代',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '四季风物',
    themeColor: '#059669',
    tags: ['人闲桂花落', '月出惊山鸟'],
    famousQuote: '月出惊山鸟，时鸣春涧中。',
    lines: [
      makeLine('人闲桂花落，', 'rén xián guì huā luò,', '人闲／桂花落，'),
      makeLine('夜静春山空。', 'yè jìng chūn shān kōng.', '夜静／春山空。'),
      makeLine('月出惊山鸟，', 'yuè chū jīng shān niǎo,', '月出／惊山鸟，'),
      makeLine('时鸣春涧中。', 'shí míng chūn jiàn zhōng.', '时鸣／春涧中。')
    ],
    spokenText: '鸟鸣涧，王维，唐代。人闲桂花落，夜静春山空。月出惊山鸟，时鸣春涧中。',
    translation: '春夜寂静人心宁静，隐约能感知桂花悄然飘落；山谷空旷夜色深沉。明月升起的光芒惊动了栖宿的山鸟，在春天的溪涧中不时鸣叫。',
    appreciation: '以动衬静的名篇，写出了幽静深山超凡脱俗的安详。',
    keywords: [{ word: '人闲', explain: '人心情闲适沉静。' }, { word: '时鸣', explain: '不时发出叫声。' }]
  },
  {
    id: 'cong-jun-xing',
    title: '从军行',
    titlePinyin: 'cóng jūn xíng',
    author: '王昌龄',
    dynasty: '唐代',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '家国情怀',
    themeColor: '#b45309',
    tags: ['青海长云暗雪山', '不破楼兰终不还'],
    famousQuote: '黄沙百战穿金甲，不破楼兰终不还。',
    lines: [
      makeLine('青海长云暗雪山，', 'qīng hǎi cháng yún àn xuě shān,', '青海长云／暗雪山，'),
      makeLine('孤城遥望玉门关。', 'gū chéng yáo wàng yù mén guān.', '孤城遥望／玉门关。'),
      makeLine('黄沙百战穿金甲，', 'huáng shā bǎi zhàn chuān jīn jiǎ,', '黄沙百战／穿金甲，'),
      makeLine('不破楼兰终不还。', 'bù pò lóu lán zhōng bù huán.', '不破楼兰／终不还。')
    ],
    spokenText: '从军行，王昌龄，唐代。青海长云暗雪山，孤城遥望玉门关。黄沙百战穿金甲，不破楼兰终不还。',
    translation: '青海湖上空连绵的乌云笼罩着阴暗的祁连雪山，边塞孤城远远守望着玉门雄关。塞外狂沙中经历百战磨穿了铁甲战铠，不彻底平定边患就誓死不回家乡！',
    appreciation: '充满慷慨激昂与誓死卫国的豪迈气魄。',
    keywords: [{ word: '穿金甲', explain: '铠甲被黄沙风沙和战斗磨穿磨破。' }, { word: '破楼兰', explain: '平定边患侵略。' }]
  },
  {
    id: 'qiu-ye-jiang-xiao',
    title: '秋夜将晓出篱门迎凉有感',
    titlePinyin: 'qiū yè jiāng xiǎo chū lí mén yíng liáng yǒu gǎn',
    author: '陆游',
    dynasty: '宋代',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '家国情怀',
    themeColor: '#b91c1c',
    tags: ['三万里河东入海', '南望王师又一年'],
    famousQuote: '遗民泪尽胡尘里，南望王师又一年。',
    lines: [
      makeLine('三万里河东入海，', 'sān wàn lǐ hé dōng rù hǎi,', '三万里河／东入海，'),
      makeLine('五千仞岳上摩天。', 'wǔ qiān rèn yuè shàng mó tiān.', '五千仞岳／上摩天。'),
      makeLine('遗民泪尽胡尘里，', 'yí mín lèi jìn hú chén lǐ,', '遗民泪尽／胡尘里，'),
      makeLine('南望王师又一年。', 'nán wàng wáng shī yòu yī nián.', '南望王师／又一年。')
    ],
    spokenText: '秋夜将晓出篱门迎凉有感，陆游，宋代。三万里河东入海，五千仞岳上摩天。遗民泪尽胡尘里，南望王师又一年。',
    translation: '三万里黄河滔滔向东奔流入海，五千仞华岳巍峨挺拔直插青天。中原失地受苦的老百姓在金兵铁蹄尘暴中哭干了眼泪，盼望朝廷北伐大军南望了一年又一年！',
    appreciation: '山河壮丽与同胞苦难形成巨大反差，悲痛深沉。',
    keywords: [{ word: '河', explain: '特指黄河。' }, { word: '岳', explain: '指华山等名山。' }, { word: '遗民', explain: '沦陷区留在北方的百姓。' }]
  },
  {
    id: 'wen-guan-jun',
    title: '闻官军收河南河北',
    titlePinyin: 'wén guān jūn shōu hé nán hé běi',
    author: '杜甫',
    dynasty: '唐代',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '家国情怀',
    themeColor: '#15803d',
    tags: ['初闻涕泪满衣裳', '青春作伴好还乡'],
    famousQuote: '白日放歌须纵酒，青春作伴好还乡。',
    lines: [
      makeLine('剑外忽传收蓟北，', 'jiàn wài hū chuán shōu jì běi,', '剑外忽传／收蓟北，'),
      makeLine('初闻涕泪满衣裳。', 'chū wén tì lèi mǎn yī shang.', '初闻涕泪／满衣裳。'),
      makeLine('却看妻子愁何在，', 'què kàn qī zǐ chóu hé zài,', '却看妻子／愁何在，'),
      makeLine('漫卷诗书喜欲狂。', 'màn juǎn shī shū xǐ yù kuáng.', '漫卷诗书／喜欲狂。'),
      makeLine('白日放歌须纵酒，', 'bái rì fàng gē xū zòng jiǔ,', '白日放歌／须纵酒，'),
      makeLine('青春作伴好还乡。', 'qīng chūn zuò bàn hǎo huán xiāng.', '青春作伴／好还乡。'),
      makeLine('即从巴峡穿巫峡，', 'jí cóng bā xiá chuān wū xiá,', '即从巴峡／穿巫峡，'),
      makeLine('便下襄阳向洛阳。', 'biàn xià xiāng yáng xiàng luò yáng.', '便下襄阳／向洛阳。')
    ],
    spokenText: '闻官军收河南河北，杜甫，唐代。剑外忽传收蓟北，初闻涕泪满衣裳。却看妻子愁何在，漫卷诗书喜欲狂。白日放歌须纵酒，青春作伴好还乡。即从巴峡穿巫峡，便下襄阳向洛阳。',
    translation: '剑门关外忽然传来官军收复蓟北的捷报，刚听到时喜悦的泪水洒满了衣襟。回头看妻子儿女哪还有半点忧愁，胡乱卷起诗书简直高兴得发狂。大白天尽情放声歌唱畅快痛饮，伴随着明媚春光正好收拾行李返回故乡。马上就从巴峡穿过巫峡，顺流而下到达襄阳再直奔洛阳！',
    appreciation: '杜甫生平“第一快诗”，饱经忧患后的狂喜与爱国情怀奔涌而出。',
    keywords: [{ word: '剑外', explain: '剑门关以南，指蜀地。' }, { word: '青春', explain: '指明媚温暖的春天。' }]
  },
  {
    id: 'liang-zhou-ci-wang-zhi-huan',
    title: '凉州词',
    titlePinyin: 'liáng zhōu cí',
    author: '王之涣',
    dynasty: '唐代',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '大好河山',
    themeColor: '#d97706',
    tags: ['黄河远上白云间', '春风不度玉门关'],
    famousQuote: '羌笛何须怨杨柳，春风不度玉门关。',
    lines: [
      makeLine('黄河远上白云间，', 'huáng hé yuǎn shàng bái yún jiān,', '黄河远上／白云间，'),
      makeLine('一片孤城万仞山。', 'yī piàn gū chéng wàn rèn shān.', '一片孤城／万仞山。'),
      makeLine('羌笛何须怨杨柳，', 'qiāng dí hé xū yuàn yáng liǔ,', '羌笛何须／怨杨柳，'),
      makeLine('春风不度玉门关。', 'chūn fēng bù dù yù mén guān.', '春风不度／玉门关。')
    ],
    spokenText: '凉州词，王之涣，唐代。黄河远上白云间，一片孤城万仞山。羌笛何须怨杨柳，春风不度玉门关。',
    translation: '黄河奔腾宛如从白云之间迢迢而来，群峰崇山之间兀立着一座边塞孤城。何必用羌笛幽怨地吹奏《折杨柳》呢？春天的温暖之风本就吹不到这遥远的玉门关外。',
    appreciation: '雄浑苍凉的边塞名篇，意境宏阔，沉郁高亢。',
    keywords: [{ word: '仞', explain: '古代长度单位，八尺为一仞。' }, { word: '怨杨柳', explain: '哀怨地吹奏古曲《折杨柳》。' }]
  },
  {
    id: 'huang-he-lou-song-meng-hao-ran',
    title: '黄鹤楼送孟浩然之广陵',
    titlePinyin: 'huáng hè lóu sòng mèng hào rán zhī guǎng líng',
    author: '李白',
    dynasty: '唐代',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '真挚情谊',
    themeColor: '#2563eb',
    tags: ['烟花三月下扬州', '唯见长江天际流'],
    famousQuote: '孤帆远影碧空尽，唯见长江天际流。',
    lines: [
      makeLine('故人西辞黄鹤楼，', 'gù rén xī cí huáng hè lóu,', '故人西辞／黄鹤楼，'),
      makeLine('烟花三月下扬州。', 'yān huā sān yuè xià yáng zhōu.', '烟花三月／下扬州。'),
      makeLine('孤帆远影碧空尽，', 'gū fān yuǎn yǐng bì kōng jìn,', '孤帆远影／碧空尽，'),
      makeLine('唯见长江天际流。', 'wéi jiàn cháng jiāng tiān jì liú.', '唯见长江／天际流。')
    ],
    spokenText: '黄鹤楼送孟浩然之广陵，李白，唐代。故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。',
    translation: '老朋友孟浩然在西面的黄鹤楼与我依依告别，在繁花如锦的阳春三月顺流东下扬州。孤独的帆影渐渐消失在碧蓝的天空尽头，只看见浩瀚长江滚滚向天际奔流。',
    appreciation: '将离别深情完全融入浩渺壮丽的长江水色之中。',
    keywords: [{ word: '广陵', explain: '今江苏扬州。' }, { word: '烟花', explain: '春光烂漫、柳絮如烟繁花似锦。' }]
  },
  {
    id: 'zi-xiang-mao-dun',
    title: '自相矛盾',
    titlePinyin: 'zì xiāng máo dùn',
    author: '韩非子',
    dynasty: '战国',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '经典古文',
    themeColor: '#d97706',
    tags: ['寓言名篇', '物莫能陷'],
    famousQuote: '夫不可陷之盾与无不陷之矛，不可同世而立。',
    lines: [
      makeLine('楚人有鬻盾与矛者，', 'chǔ rén yǒu yù dùn yǔ máo zhě,', '楚人／有鬻盾与矛者，'),
      makeLine('誉之曰：“吾盾之坚，物莫能陷也。”', 'yù zhī yuē: "wú dùn zhī jiān, wù mò néng xiàn yě."', '誉之曰：／“吾盾之坚，／物莫能陷也。”'),
      makeLine('又誉其矛曰：“吾矛之利，于物无不陷也。”', 'yòu yù qí máo yuē: "wú máo zhī lì, yú wù wú bù xiàn yě."', '又誉其矛曰：／“吾矛之利，／于物无不陷也。”'),
      makeLine('或曰：“以子之矛陷子之盾，何如？”', 'huò yuē: "yǐ zǐ zhī máo xiàn zǐ zhī dùn, hé rú?"', '或曰：／“以子之矛／陷子之盾，／何如？”'),
      makeLine('其人弗能应也。', 'qí rén fú néng yìng yě.', '其人／弗能应也。'),
      makeLine('夫不可陷之盾与无不陷之矛，不可同世而立。', 'fú bù kě xiàn zhī dùn yǔ wú bù xiàn zhī máo, bù kě tóng shì ér lì.', '夫不可陷之盾／与无不陷之矛，／不可同世而立。')
    ],
    spokenText: '自相矛盾，战国韩非子。楚人有鬻盾与矛者，誉之曰：“吾盾之坚，物莫能陷也。”又誉其矛曰：“吾矛之利，于物无不陷也。”或曰：“以子之矛陷子之盾，何如？”其人弗能应也。夫不可陷之盾与无不陷之矛，不可同世而立。',
    translation: '楚国有个卖盾牌和长矛的人，夸耀盾牌说：“我的盾坚固无比，任何兵器都刺不穿它。”又夸耀长矛说：“我的矛锐利无比，什么东西都能刺穿。”有人问：“用你的矛刺你的盾，会怎么样？”那人答不上来。无法刺穿的盾和什么都能刺穿的矛，是不可能同时存在的。',
    appreciation: '揭示说话办事必须实事求是、前后一致，不能前后抵触。',
    keywords: [{ word: '鬻', explain: '卖。' }, { word: '誉', explain: '夸耀。' }, { word: '弗能应', explain: '不能回答。' }]
  },
  {
    id: 'tian-ji-sai-ma',
    title: '田忌赛马',
    titlePinyin: 'tián jì sài mǎ',
    author: '司马迁《史记》',
    dynasty: '西汉',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '经典古文',
    themeColor: '#4f46e5',
    tags: ['历史智慧', '孙膑妙计'],
    famousQuote: '今以君之下驷与彼上驷，取君上驷与彼中驷，取君中驷与彼下驷。',
    lines: [
      makeLine('田忌数与齐诸公子驰逐重射。', 'tián jì shuò yǔ qí zhū gōng zǐ chí zhú zhòng shè.', '田忌数与齐诸公子／驰逐重射。'),
      makeLine('孙子见其马足不甚相远，马有上、中、下辈。', 'sūn zǐ jiàn qí mǎ zú bù shèn xiāng yuǎn, mǎ yǒu shàng, zhōng, xià bèi.', '孙子见其马足／不甚相远，／马有上、中、下辈。'),
      makeLine('孙子谓田忌曰：“君弟重射，臣能令君胜。”', 'sūn zǐ wèi tián jì yuē: "jūn dì zhòng shè, chén néng lìng jūn shèng."', '孙子谓田忌曰：／“君弟重射，／臣能令君胜。”'),
      makeLine('田忌信然之，与王及诸公子逐射千金。', 'tián jì xìn rán zhī, yǔ wáng jí zhū gōng zǐ zhú shè qiān jīn.', '田忌信然之，／与王及诸公子／逐射千金。'),
      makeLine('及临质，孙子曰：“今以君之下驷与彼上驷，', 'jí lín zhì, sūn zǐ yuē: "jīn yǐ jūn zhī xià sì yǔ bǐ shàng sì,', '及临质，／孙子曰：／“今以君之下驷／与彼上驷，'),
      makeLine('取君上驷与彼中驷，取君中驷与彼下驷。”', 'qǔ jūn shàng sì yǔ bǐ zhōng sì, qǔ jūn zhōng sì yǔ bǐ xià sì."', '取君上驷／与彼中驷，／取君中驷／与彼下驷。”'),
      makeLine('既驰三辈毕，而田忌一不胜而二胜，卒得王千金。', 'jì chí sān bèi bì, ér tián jì yī bù shèng ér èr shèng, zú dé wáng qiān jīn.', '既驰三辈毕，／而田忌一不胜而二胜，／卒得王千金。')
    ],
    spokenText: '田忌赛马，西汉司马迁。田忌数与齐诸公子驰逐重射。孙子见其马足不甚相远，马有上、中、下辈。孙子谓田忌曰：“君弟重射，臣能令君胜。”田忌信然之，与王及诸公子逐射千金。及临质，孙子曰：“今以君之下驷与彼上驷，取君上驷与彼中驷，取君中驷与彼下驷。”既驰三辈毕，而田忌一不胜而二胜，卒得王千金。',
    translation: '田忌经常和齐国诸位公子赛马下大赌注。孙膑发现大家的马奔跑脚力相差不多，马分为上、中、下等。孙膑对田忌说：“您只管下大注，我能让您获胜。”比赛时孙膑说：“用您的下等马对付他的上等马，用您的上等马对付他的中等马，用您的中等马对付他的下等马。”三轮比赛跑完，田忌一负两胜，最终赢得了千金大奖。',
    appreciation: '展现运筹帷幄、科学博弈、化被动为主动的超卓智慧。',
    keywords: [{ word: '数', explain: '屡次，经常。' }, { word: '驷', explain: '古代一车套的四匹马，这里指马。' }, { word: '卒', explain: '最终。' }]
  },
  {
    id: 'yang-shi-zhi-zi',
    title: '杨氏之子',
    titlePinyin: 'yáng shì zhī zǐ',
    author: '刘义庆《世说新语》',
    dynasty: '南朝宋',
    grade: '五下',
    gradeFull: '五年级下册',
    theme: '经典古文',
    themeColor: '#7c3aed',
    tags: ['机智应答', '夫子家禽'],
    famousQuote: '儿应声答曰：“未闻孔雀是夫子家禽。”',
    lines: [
      makeLine('梁国杨氏子九岁，甚聪惠。', 'liáng guó yáng shì zǐ jiǔ suì, shèn cōng huì.', '梁国杨氏子／九岁，／甚聪惠。'),
      makeLine('孔君平诣其父，父不在，乃呼儿出。', 'kǒng jūn píng yì qí fù, fù bù zài, nǎi hū ér chū.', '孔君平／诣其父，／父不在，／乃呼儿出。'),
      makeLine('为设果，果有杨梅。', 'wèi shè guǒ, guǒ yǒu yáng méi.', '为设果，／果有杨梅。'),
      makeLine('孔指以示儿曰：“此是君家果。”', 'kǒng zhǐ yǐ shì ér yuē: "cǐ shì jūn jiā guǒ."', '孔指以示儿曰：／“此是君家果。”'),
      makeLine('儿应声答曰：“未闻孔雀是夫子家禽。”', 'ér yìng shēng dá yuē: "wèi wén kǒng què shì fū zǐ jiā qín."', '儿应声答曰：／“未闻孔雀／是夫子家禽。”')
    ],
    spokenText: '杨氏之子，刘义庆世说新语。梁国杨氏子九岁，甚聪惠。孔君平诣其父，父不在，乃呼儿出。为设果，果有杨梅。孔指以示儿曰：“此是君家果。”儿应声答曰：“未闻孔雀是夫子家禽。”',
    translation: '梁国一户姓杨的人家有个九岁男孩，非常聪明。孔君平来拜访他的父亲，父亲不在，就把孩子叫出来。孩子为客人摆设水果，果盘里有杨梅。孔君平指着杨梅给孩子看打趣说：“这是你家的水果吧。”孩子应声回答：“没听说过孔雀是您先生家的家禽呢。”',
    appreciation: '以孔雀对杨梅，既幽默应对长辈的玩笑，又极有教养礼貌，展现出九岁儿童惊人的语言机敏。',
    keywords: [{ word: '惠', explain: '同“慧”，智慧。' }, { word: '诣', explain: '拜访。' }, { word: '夫子', explain: '古代对男子的尊称，先生。' }]
  }
];
