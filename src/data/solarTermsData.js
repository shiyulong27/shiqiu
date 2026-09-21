/**
 * 《中华二十四节气与七十二物候数据库》
 * 完整收录 24 个节气、72 物候、太阳黄经、天文特征、传统民俗、节令美食、农谚与必背古诗联动
 */

export const solarTermsSong = {
  title: '二十四节气歌 (统编版语文教材推荐)',
  lines: [
    {
      text: '春雨惊春清谷天，',
      pinyin: 'chūn yǔ jīng chūn qīng gǔ tiān,',
      season: 'spring',
      terms: ['立春', '雨水', '惊蛰', '春分', '清明', '谷雨'],
      explain: '春季六节：立春、雨水、惊蛰、春分、清明、谷雨，万物复苏，草木萌动。'
    },
    {
      text: '夏满芒夏暑相连。',
      pinyin: 'xià mǎn máng xià shǔ xiāng lián.',
      season: 'summer',
      terms: ['立夏', '小满', '芒种', '夏至', '小暑', '大暑'],
      explain: '夏季六节：立夏、小满、芒种、夏至、小暑、大暑，日长夜短，万物繁茂。'
    },
    {
      text: '秋处露秋寒霜降，',
      pinyin: 'qiū chǔ lù qiū hán shuāng jiàng,',
      season: 'autumn',
      terms: ['立秋', '处暑', '白露', '秋分', '寒露', '霜降'],
      explain: '秋季六节：立秋、处暑、白露、秋分、寒露、霜降，硕果累累，金风送爽。'
    },
    {
      text: '冬雪雪冬小大寒。',
      pinyin: 'dōng xuě xuě dōng xiǎo dà hán.',
      season: 'winter',
      terms: ['立冬', '小雪', '大雪', '冬至', '小寒', '大寒'],
      explain: '冬季六节：立冬、小雪、大雪、冬至、小寒、大寒，千里冰封，休养生息。'
    }
  ],
  mnemonics: [
    '每月两节不变更，最多相差一两天。',
    '上半年来六廿一，下半年是八廿三。'
  ]
};

export const seasonsList = ['全部节气', '🌱 春生', '☀️ 夏长', '🍂 秋收', '❄️ 冬藏'];

export const solarTermsData = [
  // ══════════════════════════════════════════════
  // 🌱 春季 (Spring) · 万物生发 · 草木萌动
  // ══════════════════════════════════════════════
  {
    id: 'lichun',
    order: 1,
    name: '立春',
    pinyin: 'lì chūn',
    season: 'spring',
    seasonName: '春季',
    seasonOrder: 1,
    solarLongitude: 315,
    dateRange: '每年公历 2 月 3 日 ~ 5 日',
    approxMonth: 2,
    approxDay: 4,
    color: '#16a34a',
    themeColor: '#22c55e',
    icon: '🌱',
    tagline: '东风解冻，万物始生',
    astronomy: '太阳到达黄经 315°，春季伊始。北斗星斗柄指向东北方（艮位）。虽然天气仍料峭，但白昼渐长，大地回春。',
    pentads: [
      { order: 1, name: '一候 · 东风解冻', creature: '东风送暖，大地上冰封的水面开始融化。', icon: '💨' },
      { order: 2, name: '二候 · 蛰虫始振', creature: '在泥土里冬眠的各种小昆虫慢慢苏醒。', icon: '🐛' },
      { order: 3, name: '三候 · 鱼陟负冰', creature: '水底的鱼儿游到水面上，水面上还有未融化的浮冰。', icon: '🐟' }
    ],
    customs: ['咬春：吃春饼、春卷与脆生生的水萝卜', '打春牛：用泥塑春牛以祈求五谷丰登', '迎春祈福：张贴“宜春”春条'],
    foods: ['春饼（卷合菜）', '春卷', '咬萝卜', '韭菜合子'],
    farming: '“立春一日，百草回芽”、“立春一年端，种地早打算”，农民伯伯开始备耕育苗。',
    poem: {
      title: '春日',
      author: '朱熹',
      quote: '等闲识得东风面，万紫千红总是春。'
    },
    funFact: '立春这天，很多小朋友会尝试“立蛋”游戏，因为立春时地轴与公转轨道相对平衡，鸡蛋更容易竖立起来哦！'
  },
  {
    id: 'yushui',
    order: 2,
    name: '雨水',
    pinyin: 'yǔ shuǐ',
    season: 'spring',
    seasonName: '春季',
    seasonOrder: 2,
    solarLongitude: 330,
    dateRange: '每年公历 2 月 18 日 ~ 20 日',
    approxMonth: 2,
    approxDay: 19,
    color: '#0d9488',
    themeColor: '#14b8a6',
    icon: '🌧️',
    tagline: '润物无声，鸿雁北归',
    astronomy: '太阳到达黄经 330°。气温回升，冰雪融化，降水逐渐增多且多为细雨，故称“雨水”。',
    pentads: [
      { order: 1, name: '一候 · 獭祭鱼', creature: '水獭开始捕鱼，把鱼整齐摆在岸边，宛如祭拜。', icon: '🦦' },
      { order: 2, name: '二候 · 鸿雁来', creature: '南方越冬的大雁排着整齐的队列飞回北方故乡。', icon: '🪿' },
      { order: 3, name: '三候 · 草木萌动', creature: '在润物无声的春雨滋润下，小草与树木冒出嫩黄新芽。', icon: '🌿' }
    ],
    customs: ['回娘屋：出嫁的女儿带罐罐肉、礼品回家探望父母', '拉保保：民间为幼儿认干爹祈求平安健康'],
    foods: ['罐罐肉（慢火煨炖红烧肉）', '龙须面', '蜂蜜柠檬温水'],
    farming: '“春雨贵如油”、“雨水送肥忙”，麦苗开始返青拔节，田野一片繁忙生机。',
    poem: {
      title: '春夜喜雨',
      author: '杜甫',
      quote: '好雨知时节，当春乃发生。随风潜入夜，润物细无声。'
    },
    funFact: '为什么说“春雨贵如油”呢？因为北方初春降水稀少，适时的春雨对刚刚越冬苏醒的小麦简直就像甘露一样珍贵！'
  },
  {
    id: 'jingzhe',
    order: 3,
    name: '惊蛰',
    pinyin: 'jīng zhé',
    season: 'spring',
    seasonName: '春季',
    seasonOrder: 3,
    solarLongitude: 345,
    dateRange: '每年公历 3 月 5 日 ~ 7 日',
    approxMonth: 3,
    approxDay: 5,
    color: '#15803d',
    themeColor: '#4ade80',
    icon: '⚡',
    tagline: '春雷初响，百虫破土',
    astronomy: '太阳到达黄经 345°。春雷阵阵唤醒越冬的小生灵，气温回升加速，真正进入了草长莺飞的仲春。',
    pentads: [
      { order: 1, name: '一候 · 桃始华', creature: '桃花含苞待放，粉红娇嫩的花朵开满枝头。', icon: '🌸' },
      { order: 2, name: '二候 · 仓庚鸣', creature: '黄鹂鸟（仓庚）在柳枝间欢快鸣叫，歌声婉转动听。', icon: '🐤' },
      { order: 3, name: '三候 · 鹰化为鸠', creature: '猛禽老鹰悄悄隐蔽繁殖，而斑鸠在暖春中自由飞翔鸣叫。', icon: '🕊️' }
    ],
    customs: ['惊蛰吃梨：寓意与害虫“离”开，又可滋阴润肺防燥', '蒙鼓皮：民间雷神信仰，人们在这天修理击打大鼓'],
    foods: ['川贝炖雪梨', '蒸鲜梨', '炒黄豆（爆米花）', '摊煎饼'],
    farming: '“九尽杨花开，农活一起来”、“过了惊蛰节，春耕不能歇”，春播春灌全面展开。',
    poem: {
      title: '钱塘湖春行（节选）',
      author: '白居易',
      quote: '几处早莺争暖树，谁家新燕啄春泥。乱花渐欲迷人眼，浅草才能没马蹄。'
    },
    funFact: '民间传说惊蛰这天雷神会击打天鼓，所以雷声轰鸣；古人认为小虫子是被雷声“惊”醒的，其实是温暖的气温唤醒了它们！'
  },
  {
    id: 'chunfen',
    order: 4,
    name: '春分',
    pinyin: 'chūn fēn',
    season: 'spring',
    seasonName: '春季',
    seasonOrder: 4,
    solarLongitude: 0,
    dateRange: '每年公历 3 月 20 日 ~ 22 日',
    approxMonth: 3,
    approxDay: 21,
    color: '#059669',
    themeColor: '#34d399',
    icon: '⚖️',
    tagline: '昼夜均分，玄鸟归巢',
    astronomy: '太阳直射赤道，到达黄经 0°。全球各地昼夜均分，各 12 小时。同时春季正好过半，故称“分”。',
    pentads: [
      { order: 1, name: '一候 · 玄鸟至', creature: '玄鸟即活泼可爱的燕子，从南方千里迢迢飞回旧巢。', icon: '🐦' },
      { order: 2, name: '二候 · 雷乃发声', creature: '下雨时天空响起清脆明亮的滚滚春雷。', icon: '🌩️' },
      { order: 3, name: '三候 · 始电', creature: '电闪雷鸣，云层中开始能看到闪电划破天空的光芒。', icon: '⚡' }
    ],
    customs: ['春分立蛋：南北半球昼夜均等，引力平稳，立蛋成功率高', '放风筝：春光明媚，儿童争相奔跑放飞纸鸢', '吃春菜：采摘野苋菜等嫩绿野蔬滚汤'],
    foods: ['春菜汤', '太阳糕', '荠菜鲜肉馄饨'],
    farming: '“春分麦起身，一刻值千金”，冬小麦进入拔节旺盛期，需肥需水量大。',
    poem: {
      title: '村居',
      author: '高鼎',
      quote: '草长莺飞二月天，拂堤杨柳醉春烟。儿童散学归来早，忙趁东风放纸鸢。'
    },
    funFact: '“春分到，蛋儿俏”！在春分这天，世界上有无数国家的小朋友都在玩竖鸡蛋的趣味科学挑战！'
  },
  {
    id: 'qingming',
    order: 5,
    name: '清明',
    pinyin: 'qīng míng',
    season: 'spring',
    seasonName: '春季',
    seasonOrder: 5,
    solarLongitude: 15,
    dateRange: '每年公历 4 月 4 日 ~ 6 日',
    approxMonth: 4,
    approxDay: 5,
    color: '#047857',
    themeColor: '#10b981',
    icon: '🍃',
    tagline: '天清地明，翠绿踏青',
    astronomy: '太阳到达黄经 15°。气候温暖，万木吐翠，空气清新，天地明朗，因此得名“清明”。既是节气也是传统重大节日。',
    pentads: [
      { order: 1, name: '一候 · 桐始华', creature: '洁白淡紫的泡桐花盛开，清香满树。', icon: '🌺' },
      { order: 2, name: '二候 · 田鼠化为鴽', creature: '喜阴的田鼠钻回地下，鹌鹑类小鸟（鴽）在草丛间飞鸣。', icon: '🪶' },
      { order: 3, name: '三候 · 虹始见', creature: '雨后初晴的天空中，往往能看到绚丽跨空的七彩雨虹。', icon: '🌈' }
    ],
    customs: ['扫墓祭祖：缅怀先烈与祖辈', '踏青郊游：全家人到大自然中去拥抱春光', '插柳戴柳：杨柳吐绿，折柳插在门楣或戴在头上祈福', '荡秋千'],
    foods: ['江南青团（艾草裹豆沙/蛋黄肉松）', '清明果', '馓子', '润饼'],
    farming: '“清明前后，种瓜点豆”、“清明忙种麦，谷雨催秧秧”，全国农业生产进入繁忙春播高潮。',
    poem: {
      title: '清明',
      author: '杜牧',
      quote: '清明时节雨纷纷，路上行人欲断魂。借问酒家何处有？牧童遥指杏花村。'
    },
    funFact: '青团是用艾草汁或麦青汁和糯米粉做成的，绿油油的不仅清香软糯，艾草还有驱寒除湿的天然药效呢！'
  },
  {
    id: 'guyu',
    order: 6,
    name: '谷雨',
    pinyin: 'gǔ yǔ',
    season: 'spring',
    seasonName: '春季',
    seasonOrder: 6,
    solarLongitude: 30,
    dateRange: '每年公历 4 月 19 日 ~ 21 日',
    approxMonth: 4,
    approxDay: 20,
    color: '#065f46',
    themeColor: '#059669',
    icon: '🌾',
    tagline: '雨生百谷，春暮夏至',
    astronomy: '太阳到达黄经 30°。春季的最后一个节气，雨水增多，滋养谷物健康生长，所谓“雨生百谷”。',
    pentads: [
      { order: 1, name: '一候 · 萍始生', creature: '池塘和水田里的浮萍由于温度升高开始大量生长。', icon: '🪷' },
      { order: 2, name: '二候 · 鸣鸠拂其羽', creature: '布谷鸟（鸣鸠）扑棱翅膀欢叫，催促人们抓紧播种。', icon: '🐦' },
      { order: 3, name: '三候 · 戴胜降于桑', creature: '头戴漂亮羽冠的戴胜鸟飞落到桑树枝头筑巢产卵。', icon: '🪶' }
    ],
    customs: ['品谷雨春茶：采摘清晨带露珠的谷雨新茶，汤色清亮甘醇', '走谷雨：走入大自然强身健体', '赏牡丹：谷雨正值“谷雨花”牡丹盛放之季'],
    foods: ['香椿炒鸡蛋（“雨前香椿嫩如丝”）', '谷雨茶', '春笋煨汤'],
    farming: '“谷雨下雨，四十五日无干土”，水稻插秧与棉花播种最关键的时节。',
    poem: {
      title: '春晴',
      author: '王驾',
      quote: '雨前初见花间蕊，雨后全无叶底花。蜂蝶纷纷过墙去，却疑春色在邻家。'
    },
    funFact: '香椿在谷雨前后最鲜嫩，醇香扑鼻，过了谷雨香椿就木质化变老不能吃啦，所以古人叫“吃春”！'
  },

  // ══════════════════════════════════════════════
  // ☀️ 夏季 (Summer) · 万物繁盛 · 日长炎暑
  // ══════════════════════════════════════════════
  {
    id: 'lixia',
    order: 7,
    name: '立夏',
    pinyin: 'lì xià',
    season: 'summer',
    seasonName: '夏季',
    seasonOrder: 1,
    solarLongitude: 45,
    dateRange: '每年公历 5 月 5 日 ~ 7 日',
    approxMonth: 5,
    approxDay: 5,
    color: '#ea580c',
    themeColor: '#f97316',
    icon: '🍉',
    tagline: '日长风暖，孟夏草木长',
    astronomy: '太阳到达黄经 45°，夏季之始。“夏”即“大”也，天地万物至此皆长大繁盛。雷雨增多，农作物进入旺盛生长期。',
    pentads: [
      { order: 1, name: '一候 · 蝼蝈鸣', creature: '蝼蛄（土狗子）和青蛙在田野间随着暮色鸣叫。', icon: '🐸' },
      { order: 2, name: '二候 · 蚯蚓出', creature: '湿热的泥土中，蚯蚓纷纷钻出地面翻松泥土。', icon: '🪱' },
      { order: 3, name: '三候 · 王瓜生', creature: '一种叫王瓜的藤蔓植物飞快攀爬生长、结出果实。', icon: '🥒' }
    ],
    customs: ['斗蛋游戏：小朋友把煮熟的鸡蛋装入彩色网袋挂在胸前相互碰撞比硬度', '立夏秤人：用大秤称体重，祈祷孩童在炎夏不消瘦掉肉', '尝三鲜：品尝樱桃、青梅、新蚕豆'],
    foods: ['立夏饭（五色豆糯米饭）', '五香茶叶蛋', '鲜嫩蚕豆', '红樱桃'],
    farming: '“立夏看麦芒，小满见麦黄”，北方小麦扬花灌浆，江南油菜籽收获。',
    poem: {
      title: '四时田园杂兴·其二十五',
      author: '范成大',
      quote: '梅子金黄杏子肥，麦花雪白菜花稀。日长篱落无人过，惟有蜻蜓蛱蝶飞。'
    },
    funFact: '“立夏吃了蛋，热天不疰夏”！立夏的斗蛋游戏是孩子们最爱的狂欢，蛋头碰蛋头、蛋尾碰蛋尾，最结实的蛋被称为“蛋王”！'
  },
  {
    id: 'xiaoman',
    order: 8,
    name: '小满',
    pinyin: 'xiǎo mǎn',
    season: 'summer',
    seasonName: '夏季',
    seasonOrder: 2,
    solarLongitude: 60,
    dateRange: '每年公历 5 月 20 日 ~ 22 日',
    approxMonth: 5,
    approxDay: 21,
    color: '#c2410c',
    themeColor: '#fb923c',
    icon: '🌾',
    tagline: '麦粒渐满，未及全熟',
    astronomy: '太阳到达黄经 60°。“小满”意指北方麦类作物的籽粒开始灌浆饱满，但尚未完全成熟，只是“小得盈满”。南方则雨水渐满。',
    pentads: [
      { order: 1, name: '一候 · 苦菜秀', creature: '略带清香苦味的苦苦菜在原野上枝叶茂盛、开出嫩黄小花。', icon: '🌼' },
      { order: 2, name: '二候 · 靡草死', creature: '喜阴耐寒的一些初春杂草（靡草）在烈日下渐渐枯萎。', icon: '🌾' },
      { order: 3, name: '三候 · 麦秋至', creature: '虽然是初夏，但对成熟的小麦而言却迎来了它的秋收。', icon: '🍞' }
    ],
    customs: ['祭车神：祭祀农田灌溉水车，确保灌溉充足', '祈蚕节：传说小满为蚕神诞辰，养蚕人家缫丝祈福', '吃苦苦菜：清热解暑祛火气'],
    foods: ['凉拌苦苦菜', '黄瓜炒肉片', '绿豆百合粥'],
    farming: '“小满不满，麦有一险”，田间防干热风与病虫害，确保夏粮丰收。',
    poem: {
      title: '乡村四月',
      author: '翁卷',
      quote: '绿遍山原白满川，子规声里雨如烟。乡村四月闲人少，才了蚕桑又插田。'
    },
    funFact: '二十四节气里有“小暑大暑”、“小雪大雪”、“小寒大寒”，为什么有“小满”却没有“大满”呢？因为中国传统智慧讲究“满招损，谦受益”，小满刚刚好，大满则溢！'
  },
  {
    id: 'mangzhong',
    order: 9,
    name: '芒种',
    pinyin: 'máng zhòng',
    season: 'summer',
    seasonName: '夏季',
    seasonOrder: 3,
    solarLongitude: 75,
    dateRange: '每年公历 6 月 5 日 ~ 7 日',
    approxMonth: 6,
    approxDay: 6,
    color: '#b45309',
    themeColor: '#f59e0b',
    icon: '🌾',
    tagline: '有芒有种，既收又忙',
    astronomy: '太阳到达黄经 75°。“芒”指有芒的麦类作物成熟开镰收割，“种”指有芒的谷黍类稻子抓紧播种，是一个既忙着收获又忙着播种的节气。',
    pentads: [
      { order: 1, name: '一候 · 螳螂生', creature: '去年秋天产下的螳螂卵囊破壳，小螳螂破壳而出。', icon: '🦗' },
      { order: 2, name: '二候 · 鵙始鸣', creature: '喜阴的伯劳鸟（鵙）停在枝头感阴而鸣。', icon: '🐦' },
      { order: 3, name: '三候 · 反舌无声', creature: '百舌鸟（反舌）在盛夏停止了婉转学舌叫声。', icon: '🤫' }
    ],
    customs: ['送花神：百花凋零，饯送花神归位', '煮梅饮酒：三国“青梅煮酒论英雄”，新鲜青梅酸涩需蒸煮泡饮', '打泥巴仗：南方侗族插秧时青年男女在泥田中嬉戏互掷'],
    foods: ['煮青梅（脆梅、杨梅）', '青梅绿茶', '解暑酸梅汤'],
    farming: '“芒种忙，麦上场”、“春争日，夏争时”，农人挥汗如雨抢收小麦、抢种水稻。',
    poem: {
      title: '悯农·其一',
      author: '李绅',
      quote: '春种一粒粟，秋收万颗子。四海无闲田，农夫犹饿死。'
    },
    funFact: '芒种谐音“忙种”，顾名思义就是“既忙着收麦子，又忙着种晚稻”，是一年当中最充实忙碌的农忙黄金周！'
  },
  {
    id: 'xiazhi',
    order: 10,
    name: '夏至',
    pinyin: 'xià zhì',
    season: 'summer',
    seasonName: '夏季',
    seasonOrder: 4,
    solarLongitude: 90,
    dateRange: '每年公历 6 月 21 日 ~ 22 日',
    approxMonth: 6,
    approxDay: 21,
    color: '#e11d48',
    themeColor: '#fb7185',
    icon: '☀️',
    tagline: '日北之至，日影最短',
    astronomy: '太阳直射北回归线，到达黄经 90°。北半球一年中白昼最长、黑夜最短的一天。正午时分太阳最高，正午物影最短。',
    pentads: [
      { order: 1, name: '一候 · 鹿角解', creature: '属阳性的梅花鹿骨角在夏至日开始自然脱落换新角。', icon: '🦌' },
      { order: 2, name: '二候 · 蝉始鸣', creature: '知了（雄蝉）感应到盛夏阳气在树梢间齐声长鸣。', icon: '🪲' },
      { order: 3, name: '三候 · 半夏生', creature: '喜阴的药草半夏在沼泽湿地中蓬勃生长。', icon: '🌱' }
    ],
    customs: ['吃夏至面：“冬至饺子夏至面”，品尝新面条', '祭神祀祖：感谢大地的丰收恩赐', '佩香囊消夏：防蚊虫驱湿热'],
    foods: ['过水凉面（芝麻酱凉面）', '绿豆汤', '冰镇西瓜', '杨梅烧仙草'],
    farming: '“夏至不过不热”，气温持续走高，水稻田间需防汛排涝防暴雨。',
    poem: {
      title: '小池',
      author: '杨万里',
      quote: '泉眼无声惜细流，树阴照水爱晴柔。小荷才露尖尖角，早有蜻蜓立上头。'
    },
    funFact: '在北回归线经过的地方（如广东汕头、从化，台湾花莲），夏至中午 12 点站在太阳底下，你会发现——你的影子竟然完全“消失”在脚底下啦！'
  },
  {
    id: 'xiaoshu',
    order: 11,
    name: '小暑',
    pinyin: 'xiǎo shǔ',
    season: 'summer',
    seasonName: '夏季',
    seasonOrder: 5,
    solarLongitude: 105,
    dateRange: '每年公历 7 月 6 日 ~ 8 日',
    approxMonth: 7,
    approxDay: 7,
    color: '#be123c',
    themeColor: '#f43f5e',
    icon: '🔥',
    tagline: '小暑大暑，上蒸下煮',
    astronomy: '太阳到达黄经 105°。“暑”表示炎热，小暑即气候已经很炎热，但还没达到一年中最热的极点。全国大部分地区开启“三伏天”。',
    pentads: [
      { order: 1, name: '一候 · 温风至', creature: '微风吹拂在脸上不再感到凉爽，而是阵阵热浪扑面。', icon: '💨' },
      { order: 2, name: '二候 · 蟋蟀居壁', creature: '蟋蟀离开炎热田野，躲进农家凉爽的墙壁阴凉缝隙中。', icon: '🦗' },
      { order: 3, name: '三候 · 鹰始挚', creature: '老鹰因为地面气温过高，飞往高空凉爽处学习捕食搏击。', icon: '🦅' }
    ],
    customs: ['食新米：用刚收获的早稻新米做饭祭祀五谷神', '晒伏晒衣书：艳阳高照，将衣物书籍搬出暴晒防霉防蛀', '饮三豆饮：绿豆、红豆、黑豆煮水解暑'],
    foods: ['黄鳝（“小暑黄鳝赛人参”）', '绿豆南瓜汤', '藕粉凉糕', '冰糖莲子汤'],
    farming: '“小暑交大暑，热得无处躲”，农田需注意保水抗旱，早稻开镰收割。',
    poem: {
      title: '池上',
      author: '白居易',
      quote: '小娃撑小艇，偷采白莲回。不解藏踪迹，浮萍一道开。'
    },
    funFact: '古人在小暑这天喜欢晒书！相传这一天的阳光最烈，把珍藏的古书字画拿出来翻晒，可以杀死所有小书虫，保证一年不生蠹虫！'
  },
  {
    id: 'dashu',
    order: 12,
    name: '大暑',
    pinyin: 'dà shǔ',
    season: 'summer',
    seasonName: '夏季',
    seasonOrder: 6,
    solarLongitude: 120,
    dateRange: '每年公历 7 月 22 日 ~ 24 日',
    approxMonth: 7,
    approxDay: 23,
    color: '#9f1239',
    themeColor: '#e11d48',
    icon: '☀️',
    tagline: '湿热蒸腾，伏天极热',
    astronomy: '太阳到达黄经 120°。一年中最热的节气，正值“中伏”前后。日光猛烈，雷暴频繁，雨热同期，热浪滚滚。',
    pentads: [
      { order: 1, name: '一候 · 腐草为萤', creature: '草丛中的萤火虫卵孵化成虫，夏夜宛如点点明灯。', icon: '✨' },
      { order: 2, name: '二候 · 土润溽暑', creature: '土壤潮湿温润，空气中水汽蒸腾如蒸笼，极其湿热。', icon: '♨️' },
      { order: 3, name: '三候 · 大雨时行', creature: '午后常有电闪雷鸣的暴雨倾盆而下，迅速湿润大地。', icon: '⛈️' }
    ],
    customs: ['饮伏茶：在路边凉亭摆放免费的大桶凉茶供行路人解暑', '晒伏姜：生姜切片加红糖在三伏烈日下暴晒储存', '斗蟋蟀：夜间捉鸣蝉与蟋蟀比斗'],
    foods: ['仙草冻', '凤梨（台湾大暑吃凤梨）', '伏姜茶', '老冬瓜排骨薏米汤'],
    farming: '“大暑不暑，五谷不鼓”，炎热的天气有利于晚稻分蘖生长与玉米扬花。',
    poem: {
      title: '夏日绝句',
      author: '李清照',
      quote: '生当作人杰，死亦为鬼雄。至今思项羽，不肯过江东。'
    },
    funFact: '古人以为黑夜里闪闪发光的萤火虫是由枯草腐烂后化成的，其实是萤火虫妈妈把卵产在湿润枯草间，到了大暑刚好破茧成虫，飞出夜空！'
  },

  // ══════════════════════════════════════════════
  // 🍂 秋季 (Autumn) · 金风送爽 · 五谷丰收
  // ══════════════════════════════════════════════
  {
    id: 'liqiu',
    order: 13,
    name: '立秋',
    pinyin: 'lì qiū',
    season: 'autumn',
    seasonName: '秋季',
    seasonOrder: 1,
    solarLongitude: 135,
    dateRange: '每年公历 8 月 7 日 ~ 9 日',
    approxMonth: 8,
    approxDay: 8,
    color: '#d97706',
    themeColor: '#f59e0b',
    icon: '🍂',
    tagline: '一叶落而知天下秋',
    astronomy: '太阳到达黄经 135°，秋季开始。虽然白天“秋老虎”余热未消，但夜间已有凉风习习，草木开始结实。',
    pentads: [
      { order: 1, name: '一候 · 凉风至', creature: '早晨和晚间的清风拂面，开始带有一丝爽朗的凉意。', icon: '🍃' },
      { order: 2, name: '二候 · 白露降', creature: '清晨的草叶上开始凝结出晶莹剔透的水珠。', icon: '💧' },
      { order: 3, name: '三候 · 寒蝉鸣', creature: '秋天的知了（寒蝉）在凉风中发出低沉柔缓的鸣叫。', icon: '🦗' }
    ],
    customs: ['贴秋膘：夏天胃口不佳掉肉，立秋煮肉炖鸡进补以强壮体魄', '啃秋/咬秋：全家围坐吃西瓜防痱子', '晒秋：徽州等山区农家把辣椒、玉米晾在竹晒匾上五彩斑斓'],
    foods: ['红烧肉', '清炖老鸭汤', '西瓜', '烀秋玉米'],
    farming: '“立秋三天遍地红”，高粱泛红，玉米饱满，秋粮进入成熟关键期。',
    poem: {
      title: '立秋',
      author: '刘翰',
      quote: '乳鸦啼散玉屏空，一枕新凉一扇风。睡起秋声无觅处，满阶梧叶月明中。'
    },
    funFact: '“一叶知秋”的成语最早就是指立秋！相传宋代宫廷里栽种着高大的梧桐树，立秋时节只要看到第一片梧桐叶落下，太史官就会高呼：“秋来啦！”'
  },
  {
    id: 'chushu',
    order: 14,
    name: '处暑',
    pinyin: 'chù shǔ',
    season: 'autumn',
    seasonName: '秋季',
    seasonOrder: 2,
    solarLongitude: 150,
    dateRange: '每年公历 8 月 22 日 ~ 24 日',
    approxMonth: 8,
    approxDay: 23,
    color: '#b45309',
    themeColor: '#d97706',
    icon: '🌾',
    tagline: '处暑无三日，新凉直万金',
    astronomy: '太阳到达黄经 150°。“处”意为终止、退伏。处暑标志着炎热夏季的正式退场，秋高气爽真正来临。',
    pentads: [
      { order: 1, name: '一候 · 鹰乃祭鸟', creature: '老鹰开始大量捕猎鸟雀，捕到后陈列四周宛如祭祀。', icon: '🦅' },
      { order: 2, name: '二候 · 天地始肃', creature: '天地间草木开始凋零收敛，秋意渐浓。', icon: '🍂' },
      { order: 3, name: '三候 · 禾乃登', creature: '“禾”为黍稻谷麦农作物，“登”即成熟大丰收。', icon: '🌾' }
    ],
    customs: ['开海节（开渔节）：沿海休渔期结束，渔船千帆竞发捕捞肥美海鲜', '吃处暑鸭：鸭子肥美清热润燥，北京烤鸭/南京盐水鸭正当其时', '放河灯：中元夜点亮莲花灯放入江海祈愿'],
    foods: ['盐水鸭', '莲子百合银耳羹', '煎龙眼', '酸梅汤'],
    farming: '“处暑禾头白，白露到割得”，水稻一片金黄，棉花陆续吐絮采摘。',
    poem: {
      title: '宿建德江',
      author: '孟浩然',
      quote: '移舟泊烟渚，日暮客愁新。野旷天低树，江清月近人。'
    },
    funFact: '处暑期间民间最壮观的风景是“开渔节”！海边成百上千艘渔船披红挂彩一齐鸣笛出海，几天后带回螃蟹、大虾与肥美的黄鱼！'
  },
  {
    id: 'bailu',
    order: 15,
    name: '白露',
    pinyin: 'bái lù',
    season: 'autumn',
    seasonName: '秋季',
    seasonOrder: 3,
    solarLongitude: 165,
    dateRange: '每年公历 9 月 7 日 ~ 9 日',
    approxMonth: 9,
    approxDay: 8,
    color: '#0284c7',
    themeColor: '#38bdf8',
    icon: '💧',
    tagline: '蒹葭苍苍，白露为霜',
    astronomy: '太阳到达黄经 165°。昼夜温差最大的节气。白天阳光和煦，夜间温度骤降，水汽在草叶上凝结成白白亮亮的露珠。',
    pentads: [
      { order: 1, name: '一候 · 鸿雁来', creature: '大雁排成整齐的人字形或一字形往南迁徙。', icon: '🪿' },
      { order: 2, name: '二候 · 玄鸟归', creature: '春分而来的燕子感念深秋，结伴飞回南方越冬。', icon: '🐦' },
      { order: 3, name: '三候 · 群鸟养羞', creature: '百鸟忙着衔取草籽果实，储藏在洞穴里准备过冬（羞即美食）。', icon: '🐿️' }
    ],
    customs: ['品白露茶：经过夏季烈日后初秋采摘的茶，香气格外清幽醇厚', '吃白露米酒：用糯米自酿温润甜酒', '吃龙眼（福州传统补气血）'],
    foods: ['白露米酒', '桂圆（龙眼）', '清炒红薯叶', '白露秋梨'],
    farming: '“白露秋分夜，一夜凉一夜”，秋粮收获进入高潮，冬小麦开始整地。',
    poem: {
      title: '暮江吟',
      author: '白居易',
      quote: '一道残阳铺水中，半江瑟瑟半江红。可怜九月初三夜，露似真珠月似弓。'
    },
    funFact: '“白露身不露，寒露脚不露”！白露之后虽然白天太阳暖烘烘的，但早晚温差超过十多度，小朋友们要及时穿上长袖衣裳，不要受凉打喷嚏哦！'
  },
  {
    id: 'qiufen',
    order: 16,
    name: '秋分',
    pinyin: 'qiū fēn',
    season: 'autumn',
    seasonName: '秋季',
    seasonOrder: 4,
    solarLongitude: 180,
    dateRange: '每年公历 9 月 22 日 ~ 24 日',
    approxMonth: 9,
    approxDay: 23,
    color: '#eab308',
    themeColor: '#facc15',
    icon: '⚖️',
    tagline: '昼夜平分，中国农民丰收节',
    astronomy: '太阳再次直射赤道，到达黄经 180°。昼夜再次均等各 12 小时。同时平分秋季九十天。自 2018 年起被设立为“中国农民丰收节”。',
    pentads: [
      { order: 1, name: '一候 · 雷始收声', creature: '雷公退伏，天空中不再有轰隆隆的雷鸣。', icon: '⛅' },
      { order: 2, name: '二候 · 蛰虫坯户', creature: '冬眠的昆虫开始用细腻的湿泥把洞口涂封起来保暖。', icon: '🕳️' },
      { order: 3, name: '三候 · 水始涸', creature: '雨水变少，河流湖泊水位下降，浅滩露出。', icon: '🏞️' }
    ],
    customs: ['庆祝中国农民丰收节：晒金秋硕果、办农事趣味竞技', '秋分立蛋：和春分一样再次挑战竖鸡蛋', '送秋牛图：民间用红纸印画耕田春牛送入各家各户'],
    foods: ['阳澄湖大闸蟹（秋风起，蟹脚痒）', '秋菜滚鱼汤', '糖炒栗子', '桂花糕'],
    farming: '“白露早，寒露迟，秋分种麦正当时”，北方冬小麦全面大面积播种。',
    poem: {
      title: '山居秋暝（节选）',
      author: '王维',
      quote: '空山新雨后，天气晚来秋。明月松间照，清泉石上流。'
    },
    funFact: '秋分这天不仅是天文学上的昼夜平分点，还是国家法定“中国农民丰收节”！红彤彤的苹果、金灿灿的水稻堆成小山，金秋大地最喜庆！'
  },
  {
    id: 'hanlu',
    order: 17,
    name: '寒露',
    pinyin: 'hán lù',
    season: 'autumn',
    seasonName: '秋季',
    seasonOrder: 5,
    solarLongitude: 195,
    dateRange: '每年公历 10 月 8 日 ~ 9 日',
    approxMonth: 10,
    approxDay: 8,
    color: '#0369a1',
    themeColor: '#0ea5e9',
    icon: '❄️',
    tagline: '露水初寒，万山红遍',
    astronomy: '太阳到达黄经 195°。从白露的凉爽转向寒冷，露水更冷，快要凝结成霜。北半球白昼明显变短，气温进一步走低。',
    pentads: [
      { order: 1, name: '一候 · 鸿雁来宾', creature: '最后一批越冬的大雁飞往南方（后来者为宾客）。', icon: '🪿' },
      { order: 2, name: '二候 · 雀入大水为蛤', creature: '飞雀隐蔽越冬，海边贝类蛤蜊纹理色泽似雀鸟羽毛。', icon: '🐚' },
      { order: 3, name: '三候 · 菊有黄华', creature: '百花凋零之后，金黄绚烂的秋菊独自傲霜怒放。', icon: '🌼' }
    ],
    customs: ['赏金秋重阳菊：登高望远，赏各色菊花展', '登高远眺：强身健体开阔胸襟', '秋钓边：深水温度低，鱼儿游向浅滩暖岸觅食'],
    foods: ['花糕（重阳糕）', '清蒸大闸蟹', '香甜柿子', '芝麻糊'],
    farming: '“寒露时节天渐寒，农夫抢种不迟延”，北方棉花收尾，南方晚稻开镰。',
    poem: {
      title: '九月九日忆山东兄弟',
      author: '王维',
      quote: '独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。'
    },
    funFact: '为什么说“雀入大水为蛤”呢？古人看到秋天小麻雀变少了，海滩上的蛤蜊壳花纹却和麻雀肚子上的斑纹一模一样，就浪漫地猜想小麻雀跳进水里变成了蛤蜊！'
  },
  {
    id: 'shuangjiang',
    order: 18,
    name: '霜降',
    pinyin: 'shuāng jiàng',
    season: 'autumn',
    seasonName: '秋季',
    seasonOrder: 6,
    solarLongitude: 210,
    dateRange: '每年公历 10 月 23 日 ~ 24 日',
    approxMonth: 10,
    approxDay: 23,
    color: '#b91c1c',
    themeColor: '#ef4444',
    icon: '🍁',
    tagline: '霜叶红于二月花，秋暮冬近',
    astronomy: '太阳到达黄经 210°。秋季的最后一个节气。气温骤降至 0℃ 以下，地表水汽直接凝华成白色的细小冰晶——霜。枫叶被霜打后变得通体火红。',
    pentads: [
      { order: 1, name: '一候 · 豺乃祭兽', creature: '豺狼捕获猎物堆放在山洞四周慢慢享用。', icon: '🐺' },
      { order: 2, name: '二候 · 草木黄落', creature: '树叶全部变黄飘落，大地一片萧瑟金黄。', icon: '🍂' },
      { order: 3, name: '三候 · 蛰虫咸俯', creature: '小虫子们全都缩在洞穴深处低头不动进入冬眠。', icon: '🐛' }
    ],
    customs: ['吃甜红柿子：民间俗信“霜降吃丁柿，不会流鼻涕”', '赏红叶：北京香山、苏州天平山红叶如火如荼', '拔萝卜：霜降萝卜甜脆无辛辣气'],
    foods: ['大红柿子', '糖炒板栗', '霜打白菜', '羊肉煲'],
    farming: '“霜降抢收，粒粒归仓”，所有秋季作物必须全部收割入库，防备冻害。',
    poem: {
      title: '山行',
      author: '杜牧',
      quote: '远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。'
    },
    funFact: '树叶为什么在霜降后会变红变黄呢？因为天气冷了，叶片里的绿色叶绿素分解退场，原本藏在叶子里的花青素和胡萝卜素就大显身手，把枫树染得比春花还要红艳！'
  },

  // ══════════════════════════════════════════════
  // ❄️ 冬季 (Winter) · 冰雪凝霜 · 蛰伏蓄力
  // ══════════════════════════════════════════════
  {
    id: 'lidong',
    order: 19,
    name: '立冬',
    pinyin: 'lì dōng',
    season: 'winter',
    seasonName: '冬季',
    seasonOrder: 1,
    solarLongitude: 225,
    dateRange: '每年公历 11 月 7 日 ~ 8 日',
    approxMonth: 11,
    approxDay: 7,
    color: '#0369a1',
    themeColor: '#38bdf8',
    icon: '🥟',
    tagline: '水始冰，地始冻，冬藏蓄力',
    astronomy: '太阳到达黄经 225°。冬季伊始。“立”即建立，“冬”即终了，农作物全部收藏入库，动物开始冬眠闭藏。',
    pentads: [
      { order: 1, name: '一候 · 水始冰', creature: '北方江河池塘表面开始凝结出薄薄的透明冰层。', icon: '🧊' },
      { order: 2, name: '二候 · 地始冻', creature: '夜间泥土表层受冻坚硬，踩上去咯吱作响。', icon: '🧱' },
      { order: 3, name: '三候 · 雉入大水为蜃', creature: '野鸡等雉鸟隐匿无踪，海边的大蛤蜊（蜃）吐气成楼台。', icon: '🦪' }
    ],
    customs: ['立冬吃饺子：秋冬之交“交子”之时吃热腾腾的饺子防冻耳朵', '冬泳健儿下水：冬泳爱好者在立冬日挑战冰水', '酿黄酒：冬季水清适宜发酵压榨'],
    foods: ['热汤水饺（羊肉大葱/猪肉白菜馅）', '姜母鸭', '羊肉萝卜汤'],
    farming: '“立冬不翻地，等于白出力”，冬耕深翻土地，冻死越冬害虫。',
    poem: {
      title: '逢雪宿芙蓉山主人',
      author: '刘长卿',
      quote: '日暮苍山远，天寒白屋贫。柴门闻犬吠，风雪夜归人。'
    },
    funFact: '立冬为什么一定要吃饺子呢？饺子不仅长得像耳朵，俗话说“立冬不端饺子碗，冻掉耳朵没人管”，而且“饺”与交替的“交”同音，代表秋冬交替！'
  },
  {
    id: 'xiaoxue',
    order: 20,
    name: '小雪',
    pinyin: 'xiǎo xuě',
    season: 'winter',
    seasonName: '冬季',
    seasonOrder: 2,
    solarLongitude: 240,
    dateRange: '每年公历 11 月 22 日 ~ 23 日',
    approxMonth: 11,
    approxDay: 22,
    color: '#0284c7',
    themeColor: '#7dd3fc',
    icon: '🌨️',
    tagline: '小雪气寒，雪花纷飞',
    astronomy: '太阳到达黄经 240°。北方冷空气频繁南下，气温降至 0℃ 以下，开始出现雪花，但雪量不大且落地即化，故称“小雪”。',
    pentads: [
      { order: 1, name: '一候 · 虹藏不见', creature: '由于温度低不再下雷雨，彩虹隐没不见。', icon: '🌈' },
      { order: 2, name: '二候 · 天气上升地气下降', creature: '天上的阳气往上升，地底的阴气往下降，天地阻隔。', icon: '🌫️' },
      { order: 3, name: '三候 · 闭塞而成冬', creature: '天地闭塞，万物深潜，真正的寒冬全面降临。', icon: '❄️' }
    ],
    customs: ['腌腊肉：小雪气温急剧下降，农家开始宰年猪、腌制风干腊肉腊肠', '吃糍粑：南方民间用蒸熟糯米捣成软糯糍粑蘸白糖黄豆粉', '晒鱼干'],
    foods: ['红糖糍粑', '热腾腾刨汤肉', '腌腊肠', '羊肉火锅'],
    farming: '“小雪雪满天，来年必丰年”，积雪如棉被护佑冬小麦保温保墒。',
    poem: {
      title: '问刘十九',
      author: '白居易',
      quote: '绿蚨新醅酒，红泥小火炉。晚来天欲雪，能饮一杯无？'
    },
    funFact: '谚语说“冬天麦盖三层被，来年枕着馒头睡”！因为小雪时下的雪又轻又软，就像盖在麦苗上的棉被，既能防冻，雪水融化还能为土地补充天然氮肥呢！'
  },
  {
    id: 'daxue',
    order: 21,
    name: '大雪',
    pinyin: 'dà xuě',
    season: 'winter',
    seasonName: '冬季',
    seasonOrder: 3,
    solarLongitude: 255,
    dateRange: '每年公历 12 月 6 日 ~ 8 日',
    approxMonth: 12,
    approxDay: 7,
    color: '#2563eb',
    themeColor: '#93c5fd',
    icon: '❄️',
    tagline: '千里冰封，万里雪飘',
    astronomy: '太阳到达黄经 255°。大雪比小雪降雪几率更大，降雪范围更广，积雪不易融化。北方银装素裹，万里冰封。',
    pentads: [
      { order: 1, name: '一候 · 鹖鴠不鸣', creature: '寒号鸟（鹖鴠）受不了严寒，停止了哀哀鸣叫。', icon: '🐦' },
      { order: 2, name: '二候 · 虎始交', creature: '山中猛虎感应到阳气萌动，开始寻觅伴侣繁衍后代。', icon: '🐅' },
      { order: 3, name: '三候 · 荔挺出', creature: '一种名叫“荔挺”的坚韧兰草在雪被下悄悄探出新芽。', icon: '🌿' }
    ],
    customs: ['赏雪滑冰：小朋友打雪仗、堆雪人，滑冰车', '封缸腌菜：腌制雪里蕻、冬菜大缸', '进补红肉：暖身御寒'],
    foods: ['红枣枸杞羊肉汤', '雪里蕻炖豆腐', '烤红薯', '冰糖葫芦'],
    farming: '“大雪半融加一冰，明年定是大丰年”，农田重点防严寒冻害。',
    poem: {
      title: '江雪',
      author: '柳宗元',
      quote: '千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。'
    },
    funFact: '小朋友们最熟悉的寓言故事《寒号鸟》里那只“哆啰啰，寒风冻死我，明天就做窝”的鸟儿，就是大雪一候里的主角“鹖鴠”哦！'
  },
  {
    id: 'dongzhi',
    order: 22,
    name: '冬至',
    pinyin: 'dōng zhì',
    season: 'winter',
    seasonName: '冬季',
    seasonOrder: 4,
    solarLongitude: 270,
    dateRange: '每年公历 12 月 21 日 ~ 23 日',
    approxMonth: 12,
    approxDay: 22,
    color: '#1d4ed8',
    themeColor: '#60a5fa',
    icon: '🥟',
    tagline: '冬至大如年，数九寒天始',
    astronomy: '太阳直射南回归线，到达黄经 270°。北半球一年中白昼最短、黑夜最长的一天。自此日起，太阳直射点向北移动，白昼一天天变长，开始“数九”。',
    pentads: [
      { order: 1, name: '一候 · 蚯蚓结', creature: '地下冬眠的蚯蚓蜷缩盘结抱团御寒。', icon: '🪱' },
      { order: 2, name: '二候 · 麋角解', creature: '属阴性的麋鹿感受到阴气极盛，头上的鹿角脱落。', icon: '🦌' },
      { order: 3, name: '三候 · 水泉动', creature: '深井和山泉深处的水开始缓慢温润涌动。', icon: '⛲' }
    ],
    customs: ['九九消寒图：从冬至起画梅花八十一朵，每天点一瓣，花开尽则春满人间', '北方吃饺子、南方吃汤圆', '祭天祭祖：古人有“冬至大如年”的朝贺古礼'],
    foods: ['冬至水饺', '彩色甜汤圆', '红豆糯米饭', '羊肉热汤'],
    farming: '“数九寒天，冷在三九”，农家维修农具、积肥备耕。',
    poem: {
      title: '绝句（节选）',
      author: '杜甫',
      quote: '窗含西岭千秋雪，门泊东吴万里船。'
    },
    funFact: '冬至日虽然白天最短，但还不是一年中最冷的时候哦！因为大地积攒的热量还没散完，“冷在三九”，真正最冷的极寒要等到冬至后的二十多天！'
  },
  {
    id: 'xiaohan',
    order: 23,
    name: '小寒',
    pinyin: 'xiǎo hán',
    season: 'winter',
    seasonName: '冬季',
    seasonOrder: 5,
    solarLongitude: 285,
    dateRange: '每年公历 1 月 5 日 ~ 7 日',
    approxMonth: 1,
    approxDay: 6,
    color: '#1e40af',
    themeColor: '#3b82f6',
    icon: '🧊',
    tagline: '小寒胜大寒，冷气积久而寒',
    astronomy: '太阳到达黄经 285°。冷气积久而寒。常年气象数据统计中，我国绝大部分地区最冷的时段往往就在小寒节气，正值“二九”和“三九”。',
    pentads: [
      { order: 1, name: '一候 · 雁北乡', creature: '候鸟大雁感应到地底微弱的阳气，开始掉头向北飞返。', icon: '🪿' },
      { order: 2, name: '二候 · 鹊始巢', creature: '喜鹊开始在枯树枝头忙着衔树枝筑建新巢。', icon: '🐦' },
      { order: 3, name: '三候 · 雉始雊', creature: '野鸡（雉）感受到春意初萌，在早晨高声啼叫求偶。', icon: '🐓' }
    ],
    customs: ['吃腊八粥：若小寒逢腊八，熬煮八宝米粥温养脾胃', '吃菜饭/糯米饭：广东南京吃糯米生炒排骨饭', '踏雪寻梅：蜡梅凌寒怒放，清香扑鼻'],
    foods: ['八宝腊八粥', '腊味糯米饭', '烤红薯', '冰糖炒栗子'],
    farming: '“小寒大寒，冻成冰团”，农人防冻护苗，清沟排水。',
    poem: {
      title: '梅花',
      author: '王安石',
      quote: '墙角数枝梅，凌寒独自开。遥知不是雪，为有暗香来。'
    },
    funFact: '民间常说“小寒胜大寒，常见冷在三九天”！虽然名字叫“小寒”，但中国北方大部分城市历史最低气温往往出现在小寒期间，是真正冷到骨髓的极寒节气！'
  },
  {
    id: 'dahan',
    order: 24,
    name: '大寒',
    pinyin: 'dà hán',
    season: 'winter',
    seasonName: '冬季',
    seasonOrder: 6,
    solarLongitude: 300,
    dateRange: '每年公历 1 月 20 日 ~ 21 日',
    approxMonth: 1,
    approxDay: 20,
    color: '#1e3a8a',
    themeColor: '#2563eb',
    icon: '⛄',
    tagline: '大寒岁底，大寒迎年',
    astronomy: '太阳到达黄经 300°。全年最后一个节气。寒潮南下频繁。虽然天气极寒，但隐隐已能感受到春天的脚步，紧接着就是辞旧迎新的新春佳节。',
    pentads: [
      { order: 1, name: '一候 · 鸡始乳', creature: '母鸡感应到新春将至，开始孵化雏鸡。', icon: '🐔' },
      { order: 2, name: '二候 · 征鸟厉疾', creature: '鹰隼等猛禽在严寒中展翅迅猛捕食，储存体力。', icon: '🦅' },
      { order: 3, name: '三候 · 水泽腹坚', creature: '冰冻三尺，湖面中央最深的水域也冻得坚硬如铁。', icon: '🧊' }
    ],
    customs: ['大寒迎年：买年货、赶年集、扫尘除垢、贴年画春联', '吃消寒糕：年糕谐音“年高”，寓意步步高升吉利温暖', '尾牙祭：岁末团聚酬谢劳动'],
    foods: ['红糖年糕（消寒糕）', '羊肉火锅', '八宝饭', '温补鸡汤'],
    farming: '“大寒见三白，农人衣食足”，下大雪冻死害虫，为来年立春翻土打下好底子。',
    poem: {
      title: '元日',
      author: '王安石',
      quote: '爆竹声中一岁除，春风送暖入屠苏。千门万户曈曈日，总把新桃换旧符。'
    },
    funFact: '“大寒到顶点，日后是春天”！大寒是二十四节气的终章，也是新一个循环的序幕。大寒一过，下一个节气又是生机勃勃的“立春”啦！'
  }
];

export const solarTermsQuizCards = [
  {
    id: 'quiz-1',
    question: '“春雨惊春清谷天”这句节气歌里，哪一个节气白天和黑夜正好一样长？',
    options: ['春分', '立春', '清明', '惊蛰'],
    answer: '春分',
    explain: '春分这天太阳直射赤道，全球各地昼夜平分，各为 12 个小时！'
  },
  {
    id: 'quiz-2',
    question: '古人常说“吃了什么不疰夏”，立夏这天小朋友们最爱玩的经典碰撞游戏是？',
    options: ['斗蛋比赛', '放风筝', '猜灯谜', '打泥巴仗'],
    answer: '斗蛋比赛',
    explain: '立夏有挂蛋斗蛋的习俗，“立夏吃了蛋，热天不疰夏”，小朋友们拿煮熟的鸡蛋撞击比硬度！'
  },
  {
    id: 'quiz-3',
    question: '白露节气之后紧接着是哪个节气？它被国家设立为“中国农民丰收节”？',
    options: ['秋分', '处暑', '寒露', '立秋'],
    answer: '秋分',
    explain: '秋分是昼夜平分的秋季重要节点，瓜果飘香五谷丰登，自 2018 年起被设立为中国农民丰收节！'
  },
  {
    id: 'quiz-4',
    question: '“冬至大如年”，在北方冬至有吃哪种像小耳朵一样的传统美食以防冻耳朵？',
    options: ['热腾腾的饺子', '软糯青团', '芝麻凉面', '脆皮春卷'],
    answer: '热腾腾的饺子',
    explain: '俗话说“冬至不端饺子碗，冻掉耳朵没人管”，冬至吃饺子暖胃又吉利！'
  },
  {
    id: 'quiz-5',
    question: '二十四节气里最后一个节气是哪个？它一过就迎来了辞旧迎新的新春佳节！',
    options: ['大寒', '冬至', '小寒', '大雪'],
    answer: '大寒',
    explain: '大寒是二十四节气的最后一站，“大寒到顶点，日后是春天”，大寒一过就该过大年迎接立春啦！'
  }
];
