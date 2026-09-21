/**
 * 四年级上册 (11篇) + 四年级下册 (11篇) = 22篇
 */

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

export const grade4Poems = [
  // ==========================================
  // 四年级上册 (11 篇)
  // ==========================================
  {
    id: 'mu-jiang-yin',
    title: '暮江吟',
    titlePinyin: 'mù jiāng yín',
    author: '白居易',
    dynasty: '唐代',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '四季风物',
    themeColor: '#0891b2',
    tags: ['一道残阳铺水中', '露似真珠月似弓'],
    famousQuote: '一道残阳铺水中，半江瑟瑟半江红。',
    lines: [
      makeLine('一道残阳铺水中，', 'yī dào cán yáng pū shuǐ zhōng,', '一道残阳／铺水中，'),
      makeLine('半江瑟瑟半江红。', 'bàn jiāng sè sè bàn jiāng hóng.', '半江瑟瑟／半江红。'),
      makeLine('可怜九月初三夜，', 'kě lián jiǔ yuè chū sān yè,', '可怜九月／初三夜，'),
      makeLine('露似真珠月似弓。', 'lù sì zhēn zhū yuè sì gōng.', '露似真珠／月似弓。')
    ],
    spokenText: '暮江吟，白居易，唐代。一道残阳铺水中，半江瑟瑟半江红。可怜九月初三夜，露似真珠月似弓。',
    translation: '落日斜照在江面上，江水一半碧绿青碧，一半映着晚霞鲜红。最可爱的是九月初三的夜晚，草叶上的露珠晶莹如珍珠，初升的新月纤巧似一张弯弓。',
    appreciation: '深秋傍晚江景的绝美特写，色调柔美华丽。',
    keywords: [{ word: '瑟瑟', explain: '碧绿色。' }, { word: '可怜', explain: '可爱。' }]
  },
  {
    id: 'ti-xi-lin-bi',
    title: '题西林壁',
    titlePinyin: 'tí xī lín bì',
    author: '苏轼',
    dynasty: '宋代',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '哲理探索',
    themeColor: '#0d9488',
    tags: ['横看成岭侧成峰', '不识庐山真面目'],
    famousQuote: '不识庐山真面目，只缘身在此山中。',
    lines: [
      makeLine('横看成岭侧成峰，', 'héng kàn chéng lǐng cè chéng fēng,', '横看成岭／侧成峰，'),
      makeLine('远近高低各不同。', 'yuǎn jìn gāo dī gè bù tóng.', '远近高低／各不同。'),
      makeLine('不识庐山真面目，', 'bù shí lú shān zhēn miàn mù,', '不识庐山／真面目，'),
      makeLine('只缘身在此山中。', 'zhǐ yuán shēn zài cǐ shān zhōng.', '只缘身在／此山中。')
    ],
    spokenText: '题西林壁，苏轼，宋代。横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。',
    translation: '正面看庐山是重重山岭，侧面看是高耸山峰，远近高低角度各不相同。认不清庐山本来的整体全貌，只因为自己身在重重山谷中啊！',
    appreciation: '哲理名篇，启示看待事物要客观全面。',
    keywords: [{ word: '只缘', explain: '只因为。' }]
  },
  {
    id: 'xue-mei',
    title: '雪梅',
    titlePinyin: 'xuě méi',
    author: '卢钺',
    dynasty: '宋代',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '哲理探索',
    themeColor: '#db2777',
    tags: ['梅须逊雪三分白', '雪却输梅一段香'],
    famousQuote: '梅须逊雪三分白，雪却输梅一段香。',
    lines: [
      makeLine('梅雪争春未肯降，', 'méi xuě zhēng chūn wèi kěn xiáng,', '梅雪争春／未肯降，'),
      makeLine('骚人阁笔费评章。', 'sāo rén gé bǐ fèi píng zhāng.', '骚人阁笔／费评章。'),
      makeLine('梅须逊雪三分白，', 'méi xū xùn xuě sān fēn bái,', '梅须逊雪／三分白，'),
      makeLine('雪却输梅一段香。', 'xuě què shū méi yī duàn xiāng.', '雪却输梅／一段香。')
    ],
    spokenText: '雪梅，卢钺，宋代。梅雪争春未肯降，骚人阁笔费评章。梅须逊雪三分白，雪却输梅一段香。',
    translation: '梅花与白雪在早春争相展现姿容谁也不肯服输，诗人放下笔难以评判高下。论洁白梅花确实比雪逊色三分，但论芳香雪却比梅花输了一段清香！',
    appreciation: '物各有所长，各有所短，辩证生动。',
    keywords: [{ word: '降', explain: '服输，降服（读 xiáng）。' }, { word: '逊', explain: '差，不如。' }]
  },
  {
    id: 'lu-zhai',
    title: '鹿柴',
    titlePinyin: 'lù zhài',
    author: '王维',
    dynasty: '唐代',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '四季风物',
    themeColor: '#059669',
    tags: ['空山不见人', '但闻人语响'],
    famousQuote: '空山不见人，但闻人语响。',
    lines: [
      makeLine('空山不见人，', 'kōng shān bù jiàn rén,', '空山／不见人，'),
      makeLine('但闻人语响。', 'dàn wén rén yǔ xiǎng.', '但闻／人语响。'),
      makeLine('返景入深林，', 'fǎn yǐng rù shēn lín,', '返景／入深林，'),
      makeLine('复照青苔上。', 'fù zhào qīng tái shàng.', '复照／青苔上。')
    ],
    spokenText: '鹿柴，王维，唐代。空山不见人，但闻人语响。返景入深林，复照青苔上。',
    translation: '空寂的山林里看不见人影，只隐隐听到有人说话的声响。一抹夕阳落日的余晖穿过深林，又映照在碧绿的青苔之上。',
    appreciation: '以有声衬无声，以动衬静，空灵禅意。',
    keywords: [{ word: '柴', explain: '通“寨”，读 zhài。' }, { word: '返景', explain: '夕阳返照的光芒。' }]
  },
  {
    id: 'chang-e',
    title: '嫦娥',
    titlePinyin: 'cháng é',
    author: '李商隐',
    dynasty: '唐代',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '神话传说',
    themeColor: '#4f46e5',
    tags: ['云母屏风烛影深', '碧海青天夜夜心'],
    famousQuote: '嫦娥应悔偷灵药，碧海青天夜夜心。',
    lines: [
      makeLine('云母屏风烛影深，', 'yún mǔ píng fēng zhú yǐng shēn,', '云母屏风／烛影深，'),
      makeLine('长河渐落晓星沉。', 'cháng hé jiàn luò xiǎo xīng chén.', '长河渐落／晓星沉。'),
      makeLine('嫦娥应悔偷灵药，', 'cháng é yīng huǐ tōu líng yào,', '嫦娥应悔／偷灵药，'),
      makeLine('碧海青天夜夜心。', 'bì hǎi qīng tiān yè yè xīn.', '碧海青天／夜夜心。')
    ],
    spokenText: '嫦娥，李商隐，唐代。云母屏风烛影深，长河渐落晓星沉。嫦娥应悔偷灵药，碧海青天夜夜心。',
    translation: '精美的云母屏风上烛光摇曳暗淡，银河逐渐西沉晨星也将隐去。月宫里的嫦娥此时应该正后悔偷吃了长生灵药吧，在碧海青天的广寒宫中夜夜忍受孤独凄凉。',
    appreciation: '借神话传说抒发内心的孤寂与清冷自守。',
    keywords: [{ word: '长河', explain: '银河。' }, { word: '碧海青天', explain: '天宇广阔深邃如大海。' }]
  },
  {
    id: 'chu-sai-wang-chang-ling',
    title: '出塞',
    titlePinyin: 'chū sài',
    author: '王昌龄',
    dynasty: '唐代',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '边塞家国',
    themeColor: '#d97706',
    tags: ['秦时明月汉时关', '万里长征人未还'],
    famousQuote: '但使龙城飞将在，不教胡马度阴山。',
    lines: [
      makeLine('秦时明月汉时关，', 'qín shí míng yuè hàn shí guān,', '秦时明月／汉时关，'),
      makeLine('万里长征人未还。', 'wàn lǐ cháng zhēng rén wèi huán.', '万里长征／人未还。'),
      makeLine('但使龙城飞将在，', 'dàn shǐ lóng chéng fēi jiàng zài,', '但使龙城／飞将在，'),
      makeLine('不教胡马度阴山。', 'bù jiào hú mǎ dù yīn shān.', '不教胡马／度阴山。')
    ],
    spokenText: '出塞，王昌龄，唐代。秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
    translation: '还是秦汉以来的明月照耀着秦汉时的边关，万里远征的将士至今仍未能生还。只要还有汉代飞将军李广那样的勇将镇守边关，决不让侵扰的战马越过阴山！',
    appreciation: '唐代七绝压卷之作，悲壮雄浑，充满保家卫国的浩然之气。',
    keywords: [{ word: '龙城飞将', explain: '指汉代名将飞将军李广或卫青。' }, { word: '教', explain: '令，让（读 jiào）。' }]
  },
  {
    id: 'liang-zhou-ci-wang-han',
    title: '凉州词',
    titlePinyin: 'liáng zhōu cí',
    author: '王翰',
    dynasty: '唐代',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '边塞家国',
    themeColor: '#b45309',
    tags: ['葡萄美酒夜光杯', '古来征战几人回'],
    famousQuote: '醉卧沙场君莫笑，古来征战几人回？',
    lines: [
      makeLine('葡萄美酒夜光杯，', 'pú táo měi jiǔ yè guāng bēi,', '葡萄美酒／夜光杯，'),
      makeLine('欲饮琵琶马上催。', 'yù yǐn pí pá mǎ shàng cuī.', '欲饮琵琶／马上催。'),
      makeLine('醉卧沙场君莫笑，', 'zuì wò shā chǎng jūn mò xiào,', '醉卧沙场／君莫笑，'),
      makeLine('古来征战几人回？', 'gǔ lái zhēng zhàn jǐ rén huí?', '古来征战／几人回？')
    ],
    spokenText: '凉州词，王翰，唐代。葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？',
    translation: '精美的夜光杯中斟满了醇香的西域葡萄酒，刚想开怀畅饮，马上的琵琶声又催促着准备出征。若是我醉倒在沙场上请诸位切莫讥笑，自古以来奔赴边塞打仗又有几人能平安生还呢？',
    appreciation: '豪饮中见悲壮，生死置之度外的豁达豪迈。',
    keywords: [{ word: '夜光杯', explain: '美玉琢成的酒杯。' }, { word: '沙场', explain: '战场。' }]
  },
  {
    id: 'xia-ri-jue-ju',
    title: '夏日绝句',
    titlePinyin: 'xià rì jué jù',
    author: '李清照',
    dynasty: '宋代',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '边塞家国',
    themeColor: '#dc2626',
    tags: ['生当作人杰', '死亦为鬼雄'],
    famousQuote: '生当作人杰，死亦为鬼雄。',
    lines: [
      makeLine('生当作人杰，', 'shēng dāng zuò rén jié,', '生当作／人杰，'),
      makeLine('死亦为鬼雄。', 'sǐ yì wéi guǐ xióng.', '死亦为／鬼雄。'),
      makeLine('至今思项羽，', 'zhì jīn sī xiàng yǔ,', '至今／思项羽，'),
      makeLine('不肯过江东。', 'bù kěn guò jiāng dōng.', '不肯／过江东。')
    ],
    spokenText: '夏日绝句，李清照，宋代。生当作人杰，死亦为鬼雄。至今思项羽，不肯过江东。',
    translation: '活着的时候应当做顶天立地的英雄豪杰，死去了也要成为鬼中的英雄！直到今天人们还在思念当年的西楚霸王项羽，战败后宁死不肯苟活渡过江东。',
    appreciation: '巾帼豪气，讽刺南宋朝廷偏安江南的屈辱懦弱。',
    keywords: [{ word: '人杰', explain: '人中豪杰。' }, { word: '鬼雄', explain: '鬼中英豪。' }]
  },
  {
    id: 'bie-dong-da',
    title: '别董大',
    titlePinyin: 'bié dǒng dà',
    author: '高适',
    dynasty: '唐代',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '真挚情谊',
    themeColor: '#ea580c',
    tags: ['莫愁前路无知己', '天下谁人不识君'],
    famousQuote: '莫愁前路无知己，天下谁人不识君？',
    lines: [
      makeLine('千里黄云白日曛，', 'qiān lǐ huáng yún bái rì xūn,', '千里黄云／白日曛，'),
      makeLine('北风吹雁雪纷纷。', 'běi fēng chuī yàn xuě fēn fēn.', '北风吹雁／雪纷纷。'),
      makeLine('莫愁前路无知己，', 'mò chóu qián lù wú zhī jǐ,', '莫愁前路／无知己，'),
      makeLine('天下谁人不识君？', 'tiān xià shéi rén bù shí jūn?', '天下谁人／不识君？')
    ],
    spokenText: '别董大，高适，唐代。千里黄云白日曛，北风吹雁雪纷纷。莫愁前路无知己，天下谁人不识君？',
    translation: '千里黄云遮天蔽日日色昏沉，北风呼啸中大雁南飞大雪纷飞。不要忧愁前面的旅途没有知心好友，普天之下又有谁不知道君的大名呢？',
    appreciation: '毫无送别常见的悲泣，豪气干云，鼓励好友重整旗鼓。',
    keywords: [{ word: '日曛', explain: '日色昏暗。' }, { word: '君', explain: '敬称对方。' }]
  },
  {
    id: 'jing-wei-tian-hai',
    title: '精卫填海',
    titlePinyin: 'jīng wèi tián hǎi',
    author: '山海经',
    dynasty: '先秦',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '经典古文',
    themeColor: '#059669',
    tags: ['神话传世', '衔西山木石'],
    famousQuote: '常衔西山之木石，以堙于东海。',
    lines: [
      makeLine('炎帝之少女，名曰女娃。', 'yán dì zhī shào nǚ, míng yuē nǚ wá.', '炎帝之少女，／名曰女娃。'),
      makeLine('女娃游于东海，溺而不返，', 'nǚ wá yóu yú dōng hǎi, nì ér bù fǎn,', '女娃游于东海，／溺而不返，'),
      makeLine('故为精卫，', 'gù wéi jīng wèi,', '故为精卫，'),
      makeLine('常衔西山之木石，以堙于东海。', 'cháng xián xī shān zhī mù shí, yǐ yīn yú dōng hǎi.', '常衔西山之木石，／以堙于东海。')
    ],
    spokenText: '精卫填海，山海经。炎帝之少女，名曰女娃。女娃游于东海，溺而不返，故为精卫，常衔西山之木石，以堙于东海。',
    translation: '炎帝的小女儿名字叫女娃。女娃去东海游玩淹死没能回来，化作了精卫鸟，常常衔着西山的树枝和石子，用来填平浩瀚的东海。',
    appreciation: '中华民族百折不挠、死不放弃的壮丽图腾。',
    keywords: [{ word: '少女', explain: '小女儿。' }, { word: '堙', explain: '填塞填平（读 yīn）。' }]
  },
  {
    id: 'wang-rong-bu-qu-dao-pang-li',
    title: '王戎不取道旁李',
    titlePinyin: 'wáng róng bù qǔ dào páng lǐ',
    author: '世说新语',
    dynasty: '南朝宋',
    grade: '四上',
    gradeFull: '四年级上册',
    theme: '经典古文',
    themeColor: '#7c3aed',
    tags: ['敏锐观察', '树在道边多子必苦李'],
    famousQuote: '树在道边而多子，此必苦李。',
    lines: [
      makeLine('王戎七岁，尝与诸小儿游。', 'wáng róng qī suì, cháng yǔ zhū xiǎo ér yóu.', '王戎七岁，／尝与诸小儿游。'),
      makeLine('看道边李树多子折枝，', 'kàn dào biān lǐ shù duō zǐ zhé zhī,', '看道边李树／多子折枝，'),
      makeLine('诸儿竞走取之，唯戎不动。', 'zhū ér jìng zǒu qǔ zhī, wéi róng bù dòng.', '诸儿竞走取之，／唯戎不动。'),
      makeLine('人问之，答曰：', 'rén wèn zhī, dá yuē:', '人问之，答曰：'),
      makeLine('“树在道边而多子，此必苦李。”', '“shù zài dào biān ér duō zǐ, cǐ bì kǔ lǐ.”', '“树在道边而多子，／此必苦李。”'),
      makeLine('取之，信然。', 'qǔ zhī, xìn rán.', '取之，信然。')
    ],
    spokenText: '王戎不取道旁李，世说新语。王戎七岁，尝与诸小儿游。看道边李树多子折枝，诸儿竞走取之，唯戎不动。人问之，答曰：“树在道边而多子，此必苦李。”取之，信然。',
    translation: '王戎七岁时曾经和伙伴玩耍。看到路边李子树上结满果子压弯树枝，孩子们都争相跑去摘，唯有王戎不动。别人问他，他回答：“树在路边果实还这么多，一定是苦李子。”摘来一尝，果然如此。',
    appreciation: '善于观察、冷静推理的智慧故事。',
    keywords: [{ word: '尝', explain: '曾经。' }, { word: '竞走', explain: '争相奔跑。' }, { word: '信然', explain: '确实如此。' }]
  },

  // ==========================================
  // 四年级下册 (11 篇)
  // ==========================================
  {
    id: 'si-shi-tian-yuan-25',
    title: '四时田园杂兴（其二十五）',
    titlePinyin: 'sì shí tián yuán zá xìng qí èr shí wǔ',
    author: '范成大',
    dynasty: '宋代',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '勤俭农桑',
    themeColor: '#d97706',
    tags: ['梅子金黄杏子肥', '惟有蜻蜓蛱蝶飞'],
    famousQuote: '日长篱落无人过，惟有蜻蜓蛱蝶飞。',
    lines: [
      makeLine('梅子金黄杏子肥，', 'méi zǐ jīn huáng xìng zǐ féi,', '梅子金黄／杏子肥，'),
      makeLine('麦花雪白菜花稀。', 'mài huā xuě bái cài huā xī.', '麦花雪白／菜花稀。'),
      makeLine('日长篱落无人过，', 'rì cháng lí luò wú rén guò,', '日长篱落／无人过，'),
      makeLine('惟有蜻蜓蛱蝶飞。', 'wéi yǒu qīng tíng jiá dié fēi.', '惟有蜻蜓／蛱蝶飞。')
    ],
    spokenText: '四时田园杂兴其二十五，范成大，宋代。梅子金黄杏子肥，麦花雪白菜花稀。日长篱落无人过，惟有蜻蜓蛱蝶飞。',
    translation: '初夏梅子金黄杏子果实饱满，麦花洁白油菜花稀疏。白天渐长篱笆小径空无一人，只有蜻蜓和蝴蝶在阳光中轻舞。',
    appreciation: '以静衬忙，农村初夏昼长农忙之景。',
    keywords: [{ word: '肥', explain: '指果实饱满肥大。' }, { word: '蛱蝶', explain: '蝴蝶。' }]
  },
  {
    id: 'su-xin-shi-xu-gong-dian',
    title: '宿新市徐公店',
    titlePinyin: 'sù xīn shì xú gōng diàn',
    author: '杨万里',
    dynasty: '宋代',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '纯真童趣',
    themeColor: '#059669',
    tags: ['儿童急走追黄蝶', '飞入菜花无处寻'],
    famousQuote: '儿童急走追黄蝶，飞入菜花无处寻。',
    lines: [
      makeLine('篱落疏疏一径深，', 'lí luò shū shū yī jìng shēn,', '篱落疏疏／一径深，'),
      makeLine('树头新绿未成阴。', 'shù tóu xīn lǜ wèi chéng yīn.', '树头新绿／未成阴。'),
      makeLine('儿童急走追黄蝶，', 'ér tóng jí zǒu zhuī huáng dié,', '儿童急走／追黄蝶，'),
      makeLine('飞入菜花无处寻。', 'fēi rù cài huā wú chù xún.', '飞入菜花／无处寻。')
    ],
    spokenText: '宿新市徐公店，杨万里，宋代。篱落疏疏一径深，树头新绿未成阴。儿童急走追黄蝶，飞入菜花无处寻。',
    translation: '稀稀落落的篱笆旁小路伸向远方，枝头的新绿还没长成茂密浓荫。活泼的小孩奔跑着追赶黄色蝴蝶，蝴蝶飞入金黄油菜花海中再也找不到了。',
    appreciation: '儿童追蝶扑空的趣味活灵活现。',
    keywords: [{ word: '急走', explain: '快跑。' }]
  },
  {
    id: 'qing-ping-le-cun-ju',
    title: '清平乐·村居',
    titlePinyin: 'qīng píng yuè cūn jū',
    author: '辛弃疾',
    dynasty: '宋代',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '纯真童趣',
    themeColor: '#10b981',
    tags: ['大儿锄豆中儿编笼', '溪头卧剥莲蓬'],
    famousQuote: '最喜小儿亡赖，溪头卧剥莲蓬。',
    lines: [
      makeLine('茅檐低小，溪上青青草。', 'máo yán dī xiǎo, xī shàng qīng qīng cǎo.', '茅檐低小，／溪上青青草。'),
      makeLine('醉里吴音相媚好，白发谁家翁媪？', 'zuì lǐ wú yīn xiāng mèi hǎo, bái fà shéi jiā wēng ǎo?', '醉里吴音相媚好，／白发谁家翁媪？'),
      makeLine('大儿锄豆溪东，中儿正织鸡笼。', 'dà ér chú dòu xī dōng, zhōng ér zhèng zhī jī lóng.', '大儿锄豆溪东，／中儿正织鸡笼。'),
      makeLine('最喜小儿亡赖，溪头卧剥莲蓬。', 'zuì xǐ xiǎo ér wú lài, xī tóu wò bō lián peng.', '最喜小儿亡赖，／溪头卧剥莲蓬。')
    ],
    spokenText: '清平乐村居，辛弃疾，宋代。茅檐低小，溪上青青草。醉里吴音相媚好，白发谁家翁媪？大儿锄豆溪东，中儿正织鸡笼。最喜小儿亡赖，溪头卧剥莲蓬。',
    translation: '茅草屋檐低矮小巧，溪边青草碧绿。微醉中带着吴地乡音亲切闲聊，那白发老人是哪家的老翁老妇？大儿子在溪东锄草，二儿子在编织鸡笼。最惹人喜爱的是淘气的小儿子，正趴在溪头悠闲地剥莲蓬呢。',
    appreciation: '宋词中乡村田园人伦天伦之乐的最高艺术典范。',
    keywords: [{ word: '翁媪', explain: '老翁老妇。' }, { word: '亡赖', explain: '同顽皮、调皮（读 wú lài）。' }]
  },
  {
    id: 'bu-suan-zi-yong-mei-lu-you',
    title: '卜算子·咏梅',
    titlePinyin: 'bǔ suàn zǐ yǒng méi',
    author: '陆游',
    dynasty: '宋代',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '托物言志',
    themeColor: '#be185d',
    tags: ['零落成泥碾作尘', '只有香如故'],
    famousQuote: '零落成泥碾作尘，只有香如故。',
    lines: [
      makeLine('驿外断桥边，寂寞开无主。', 'yì wài duàn qiáo biān, jì mò kāi wú zhǔ.', '驿外断桥边，／寂寞开无主。'),
      makeLine('已是黄昏独自愁，更着风和雨。', 'yǐ shì huáng hūn dú zì chóu, gèng zhuó fēng hé yǔ.', '已是黄昏独自愁，／更着风和雨。'),
      makeLine('无意苦争春，一任群芳妒。', 'wú yì kǔ zhēng chūn, yī rèn qún fāng dù.', '无意苦争春，／一任群芳妒。'),
      makeLine('零落成泥碾作尘，只有香如故。', 'líng luò chéng ní niǎn zuò chén, zhǐ yǒu xiāng rú gù.', '零落成泥碾作尘，／只有香如故。')
    ],
    spokenText: '卜算子咏梅，陆游，宋代。驿外断桥边，寂寞开无主。已是黄昏独自愁，更着风和雨。无意苦争春，一任群芳妒。零落成泥碾作尘，只有香如故。',
    translation: '驿站外断桥边，梅花孤单地开放无人顾惜。已是黄昏独自愁苦，偏偏又遭受着风吹雨打。无意在春天里苦苦争妍斗艳，任由百花心生嫉妒。即使凋零落入泥土被碾作尘埃，清幽的芬芳依然如故！',
    appreciation: '借梅花的高洁芳香，抒发至死不渝的傲岸情操。',
    keywords: [{ word: '无主', explain: '没有人过问爱惜。' }, { word: '香如故', explain: '芬芳依旧未变。' }]
  },
  {
    id: 'feng-luo-yin',
    title: '蜂',
    titlePinyin: 'fēng',
    author: '罗隐',
    dynasty: '唐代',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '勤俭农桑',
    themeColor: '#f59e0b',
    tags: ['不论平地与山尖', '为谁辛苦为谁甜'],
    famousQuote: '采得百花成蜜后，为谁辛苦为谁甜？',
    lines: [
      makeLine('不论平地与山尖，', 'bù lùn píng dì yǔ shān jiān,', '不论平地／与山尖，'),
      makeLine('无限风光尽被占。', 'wú xiàn fēng guāng jìn bèi zhàn.', '无限风光／尽被占。'),
      makeLine('采得百花成蜜后，', 'cǎi dé bǎi huā chéng mì hòu,', '采得百花／成蜜后，'),
      makeLine('为谁辛苦为谁甜？', 'wèi shéi xīn kǔ wèi shéi tián?', '为谁辛苦／为谁甜？')
    ],
    spokenText: '蜂，罗隐，唐代。不论平地与山尖，无限风光尽被占。采得百花成蜜后，为谁辛苦为谁甜？',
    translation: '无论是平原田野还是高山之巅，无限的大好风光都被蜜蜂所占据。历尽千辛万苦采集百花酿成了甜美的蜂蜜，究竟是在为谁辛苦奔忙？又是在为谁带来甘甜呢？',
    appreciation: '借蜜蜂酿蜜辛劳，赞扬劳动者的奉献，讽刺不劳而获者。',
    keywords: [{ word: '占', explain: '占领拥有。' }]
  },
  {
    id: 'fu-rong-lou-song-xin-jian',
    title: '芙蓉楼送辛渐',
    titlePinyin: 'fú róng lóu sòng xīn jiàn',
    author: '王昌龄',
    dynasty: '唐代',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '真挚情谊',
    themeColor: '#0284c7',
    tags: ['寒雨连江夜入吴', '一片冰心在玉壶'],
    famousQuote: '洛阳亲友如相问，一片冰心在玉壶。',
    lines: [
      makeLine('寒雨连江夜入吴，', 'hán yǔ lián jiāng yè rù wú,', '寒雨连江／夜入吴，'),
      makeLine('平明送客楚山孤。', 'píng míng sòng kè chǔ shān gū.', '平明送客／楚山孤。'),
      makeLine('洛阳亲友如相问，', 'luò yáng qīn yǒu rú xiāng wèn,', '洛阳亲友／如相问，'),
      makeLine('一片冰心在玉壶。', 'yī piàn bīng xīn zài yù hú.', '一片冰心／在玉壶。')
    ],
    spokenText: '芙蓉楼送辛渐，王昌龄，唐代。寒雨连江夜入吴，平明送客楚山孤。洛阳亲友如相问，一片冰心在玉壶。',
    translation: '冷雨连绵夜色中洒满江天涌入吴地，天刚亮送走好友只留下楚山孤影。洛阳的亲朋好友若是问起我近况，就说我坚贞清白的心依然如晶莹玉壶中的冰块一般纯洁！',
    appreciation: '以玉壶冰心自喻，展现了孤介清白、不慕荣利的崇高情操。',
    keywords: [{ word: '平明', explain: '天刚亮。' }, { word: '冰心', explain: '纯洁如冰的心。' }]
  },
  {
    id: 'sai-xia-qu-lu-lun-yue-hei',
    title: '塞下曲（月黑雁飞高）',
    titlePinyin: 'sài xià qǔ yuè hēi yàn fēi gāo',
    author: '卢纶',
    dynasty: '唐代',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '边塞家国',
    themeColor: '#d97706',
    tags: ['单于夜遁逃', '大雪满弓刀'],
    famousQuote: '欲将轻骑逐，大雪满弓刀。',
    lines: [
      makeLine('月黑雁飞高，', 'yuè hēi yàn fēi gāo,', '月黑／雁飞高，'),
      makeLine('单于夜遁逃。', 'chán yú yè dùn táo.', '单于／夜遁逃。'),
      makeLine('欲将轻骑逐，', 'yù jiāng qīng qí zhú,', '欲将／轻骑逐，'),
      makeLine('大雪满弓刀。', 'dà xuě mǎn gōng dāo.', '大雪／满弓刀。')
    ],
    spokenText: '塞下曲，卢纶，唐代。月黑雁飞高，单于夜遁逃。欲将轻骑逐，大雪满弓刀。',
    translation: '漆黑无月的寒夜里大雁高高惊飞，敌军单于正趁黑连夜逃窜。将军率领轻骑想要追击敌人，漫天的风雪落满了将士们的弓刀。',
    appreciation: '不写交锋写追击，严寒风雪中杀敌豪情扑面而来。',
    keywords: [{ word: '单于', explain: '古代匈奴最高首领（读 chán yú）。' }, { word: '逐', explain: '追赶。' }]
  },
  {
    id: 'mo-mei',
    title: '墨梅',
    titlePinyin: 'mò méi',
    author: '王冕',
    dynasty: '元代',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '托物言志',
    themeColor: '#475569',
    tags: ['我家洗砚池头树', '只留清气满乾坤'],
    famousQuote: '不要人夸好颜色，只留清气满乾坤。',
    lines: [
      makeLine('我家洗砚池头树，', 'wǒ jiā xǐ yàn chí tóu shù,', '我家洗砚／池头树，'),
      makeLine('朵朵花开淡墨痕。', 'duǒ duǒ huā kāi dàn mò hén.', '朵朵花开／淡墨痕。'),
      makeLine('不要人夸好颜色，', 'bù yào rén kuā hǎo yán sè,', '不要人夸／好颜色，'),
      makeLine('只留清气满乾坤。', 'zhǐ liú qīng qì mǎn qián kūn.', '只留清气／满乾坤。')
    ],
    spokenText: '墨梅，王冕，元代。我家洗砚池头树，朵朵花开淡墨痕。不要人夸好颜色，只留清气满乾坤。',
    translation: '我家洗砚池畔盛开的梅树，朵朵花儿盛开都带着淡淡的水墨痕迹。它不需要人们夸奖花色多么艳丽，只想将清正芳香留在天地乾坤之间！',
    appreciation: '题画诗杰作。托梅言志，立意高远，表现出不媚俗态的清正风骨。',
    keywords: [{ word: '清气', explain: '清雅芳香的气韵，比喻高洁品格。' }, { word: '乾坤', explain: '天地之间。' }]
  },
  {
    id: 'du-zuo-jing-ting-shan',
    title: '独坐敬亭山',
    titlePinyin: 'dú zuò jìng tíng shān',
    author: '李白',
    dynasty: '唐代',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '大好河山',
    themeColor: '#2563eb',
    tags: ['众鸟高飞尽', '相看两不厌只有敬亭山'],
    famousQuote: '相看两不厌，只有敬亭山。',
    lines: [
      makeLine('众鸟高飞尽，', 'zhòng niǎo gāo fēi jìn,', '众鸟／高飞尽，'),
      makeLine('孤云独去闲。', 'gū yún dú qù xián.', '孤云／独去闲。'),
      makeLine('相看两不厌，', 'xiāng kàn liǎng bù yàn,', '相看／两不厌，'),
      makeLine('只有敬亭山。', 'zhǐ yǒu jìng tíng shān.', '只有／敬亭山。')
    ],
    spokenText: '独坐敬亭山，李白，唐代。众鸟高飞尽，孤云独去闲。相看两不厌，只有敬亭山。',
    translation: '群鸟都高飞远去不知所踪，孤单的云朵也独自悠闲飘逝。天地间只有我和敬亭山长久对望怎么看都不厌倦，如今只有这青山做我的知己了。',
    appreciation: '山即是人，人即是山，李白物我两忘的孤高意境。',
    keywords: [{ word: '厌', explain: '满足、厌烦。两不厌：互相看不厌。' }]
  },
  {
    id: 'nang-ying-ye-du',
    title: '囊萤夜读',
    titlePinyin: 'náng yíng yè dú',
    author: '晋书',
    dynasty: '唐代编',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '经典古文',
    themeColor: '#10b981',
    tags: ['车胤苦读', '盛数十萤火照书'],
    famousQuote: '夏月则练囊盛数十萤火以照书，以夜继日焉。',
    lines: [
      makeLine('胤恭勤不倦，博学多通。', 'yìn gōng qín bù juàn, bó xué duō tōng.', '胤恭勤不倦，／博学多通。'),
      makeLine('家贫不常得油，', 'jiā pín bù cháng dé yóu,', '家贫／不常得油，'),
      makeLine('夏月则练囊盛数十萤火以照书，', 'xià yuè zé liàn náng chéng shù shí yíng huǒ yǐ zhào shū,', '夏月则练囊盛数十萤火／以照书，'),
      makeLine('以夜继日焉。', 'yǐ yè jì rì yān.', '以夜继日焉。')
    ],
    spokenText: '囊萤夜读，晋书。胤恭勤不倦，博学多通。家贫不常得油，夏月则练囊盛数十萤火以照书，以夜继日焉。',
    translation: '晋代车胤恭敬勤勉不知疲倦，学识广博。家里贫穷买不起灯油，夏天的夜晚就用白色丝绢袋子装入几十只萤火虫用来照亮书本，日夜不停地刻苦苦读。',
    appreciation: '囊萤映雪的成语典故，勉励后人克服困难勤奋向学。',
    keywords: [{ word: '恭勤', explain: '谦逊勤奋。' }, { word: '练囊', explain: '白色丝绢做成的布袋。' }]
  },
  {
    id: 'tie-chu-cheng-zhen',
    title: '铁杵成针',
    titlePinyin: 'tiě chǔ chéng zhēn',
    author: '方舆胜览',
    dynasty: '宋代',
    grade: '四下',
    gradeFull: '四年级下册',
    theme: '经典古文',
    themeColor: '#7c3aed',
    tags: ['李白成才故事', '只要功夫深铁杵磨成针'],
    famousQuote: '老妪方磨铁杵。问之，曰：“欲作针。”',
    lines: [
      makeLine('磨针溪，在象耳山下。', 'mó zhēn xī, zài xiàng ěr shān xià.', '磨针溪，／在象耳山下。'),
      makeLine('世传李太白读书山中，未成，弃去。', 'shì chuán lǐ tài bái dú shū shān zhōng, wèi chéng, qì qù.', '世传李太白读书山中，／未成，弃去。'),
      makeLine('过是溪，逢老妪方磨铁杵。', 'guò shì xī, féng lǎo yù fāng mó tiě chǔ.', '过是溪，／逢老妪方磨铁杵。'),
      makeLine('问之，曰：“欲作针。”', 'wèn zhī, yuē: “yù zuò zhēn.”', '问之，曰：／“欲作针。”'),
      makeLine('太白感其意，还卒业。', 'tài bái gǎn qí yì, huán zú yè.', '太白感其意，／还卒业。')
    ],
    spokenText: '铁杵成针，宋代。磨针溪，在象耳山下。世传李太白读书山中，未成，弃去。过是溪，逢老妪方磨铁杵。问之，曰：“欲作针。”太白感其意，还卒业。',
    translation: '磨针溪在象耳山脚下。传说李白在山中读书，还没学成便半途废学下山。路过小溪碰见一位老婆婆正磨铁棒。李白问她，她说：“想磨成绣花针。”李白被她的恒心毅力感动，回去发奋苦读最终完成学业。',
    appreciation: '“只要功夫深，铁杵磨成针”的源泉出处。',
    keywords: [{ word: '老妪', explain: '老妇人（读 yù）。' }, { word: '卒业', explain: '完成学业。' }]
  }
];
