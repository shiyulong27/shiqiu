/**
 * 华夏世界自然与文化遗产全景数据库
 * 涵盖：
 * 1. 世界遗产整体统计概览 (Heritage Stats)
 * 2. 32 处中华代表性世界遗产名录 (Heritage List: 文化遗产、自然遗产、双重遗产)
 * 3. 关联山河古诗词、地理省份分布与历史大事件
 * 4. 世界遗产通识亲子挑战题库 (Heritage Quiz)
 */

export const heritageStats = {
  totalCount: 59,
  worldRank: 2,
  culturalCount: 40,
  naturalCount: 15,
  mixedCount: 4,
  mixedNames: ['泰山', '黄山', '峨眉山-乐山大佛', '武夷山'],
  overview: '中国是拥有世界遗产类别最齐全的国家之一。从良渚五千年文明实证到巍巍万里长城，从绝美九寨仙境到世界罕见的双重遗产，凝聚了中华民族的古老智慧与大美河山！'
}

export const heritageList = [
  // ========== 双重遗产 (Mixed: 4大名山瑰宝) ==========
  {
    id: 'taishan',
    name: '泰山',
    type: 'mixed',
    typeZh: '文化与自然双重遗产',
    year: 1987,
    province: '山东省',
    city: '泰安市',
    region: '华东',
    unescoQuote: '庄严的神圣泰山近两千年来一直是历代帝王封禅祭天的圣地，山中人文杰作与自然绝景完美融合，堪称中国艺术和文化的缩影。',
    highlight: '五岳独尊！不仅拥有险峻的十八盘、玉皇顶与泰山日出云海，更是中国古代 72 位帝王封禅祭地的崇高信仰中枢，拥有摩崖石刻两千余处。',
    poems: [
      { author: '杜甫', dynasty: '唐代', title: '《望岳》', text: '会当凌绝顶，一览众山小。' },
      { author: '孔子', dynasty: '春秋', title: '《孟子·尽心上》', text: '登泰山而小天下。' }
    ],
    historyLink: '秦始皇统一六国后登泰山立石颂德，汉武帝八次巡幸泰山举行封禅大典。',
    icon: '⛰️',
    badgeColor: '#f59e0b'
  },
  {
    id: 'huangshan',
    name: '黄山',
    type: 'mixed',
    typeZh: '文化与自然双重遗产',
    year: 1990,
    province: '安徽省',
    city: '黄山市',
    region: '华东',
    unescoQuote: '黄山在中国文学艺术史上受到广泛赞颂。对中国水墨山水画的发展产生了不可估量的深远影响。',
    highlight: '天下第一奇山！以“奇松、怪石、云海、温泉、冬雪”五绝闻名世界，迎客松傲立玉屏峰，云雾翻腾如仙境。',
    poems: [
      { author: '徐霞客', dynasty: '明代', title: '游黄山日记', text: '五岳归来不看山，黄山归来不看岳。' },
      { author: '李白', dynasty: '唐代', title: '《送温处士归黄山白鹅峰旧居》', text: '黄山四千仞，三十二莲峰。' }
    ],
    historyLink: '明末清初“黄山画派”（渐江、石涛、梅清）以此山为灵感源泉，开创了东方水墨画的巅峰流派。',
    icon: '🌲',
    badgeColor: '#10b981'
  },
  {
    id: 'emeishan-leshan',
    name: '峨眉山 - 乐山大佛',
    type: 'mixed',
    typeZh: '文化与自然双重遗产',
    year: 1996,
    province: '四川省',
    city: '乐山市',
    region: '西南',
    unescoQuote: '公元1世纪在峨眉山美丽的自然环境中建立了中国第一座佛教寺院，乐山大佛更展示了唐代开山凿石雕塑的雄浑奇迹。',
    highlight: '“峨眉天下秀”，金顶佛光普照；乐山大佛高 71 米，依凌云山栖鸾峰临江凿成，为世界现存最大石刻弥勒佛坐像。',
    poems: [
      { author: '李白', dynasty: '唐代', title: '《峨眉山月歌》', text: '峨眉山月半轮秋，影入平羌江水流。' },
      { author: '苏轼', dynasty: '宋代', title: '《送秀禅师入蜀》', text: '峨眉秀绝天相倚，更倚玉堂金匮里。' }
    ],
    historyLink: '唐玄宗开元初年海通禅师为平息岷江、大渡河、青衣江三江交汇处狂暴水患，历经三代工匠 90 年凿成大佛。',
    icon: '🧘',
    badgeColor: '#eab308'
  },
  {
    id: 'wuyishan',
    name: '武夷山',
    type: 'mixed',
    typeZh: '文化与自然双重遗产',
    year: 1999,
    province: '福建省 / 江西省',
    city: '南平市 / 上饶市',
    region: '华东',
    unescoQuote: '朱子理学的摇篮，保存完好的中生代古老森林生态系统与独特的九曲溪丹霞地貌相互辉映。',
    highlight: '九曲溪竹筏漂流，三十六峰碧水丹山；朱熹在此著书讲学近 50 载，更是世界红茶与乌龙茶的重要发源地（大红袍母树）。',
    poems: [
      { author: '朱熹', dynasty: '宋代', title: '《九曲棹歌》', text: '武夷山上有仙灵，山下寒流曲曲清。欲识个中奇绝处，棹歌闲听两三声。' },
      { author: '辛弃疾', dynasty: '宋代', title: '《水调歌头·和马叔度游武夷韵》', text: '客子久不到，好景为君设。' }
    ],
    historyLink: '宋代理学大师朱熹在武夷精舍聚徒讲学，创立闽学体系，深刻影响了后世中国近千年的思想文化。',
    icon: '🍵',
    badgeColor: '#059669'
  },

  // ========== 文化遗产 (Cultural: 华夏历史与文明瑰宝) ==========
  {
    id: 'great-wall',
    name: '万里长城',
    type: 'cultural',
    typeZh: '文化遗产',
    year: 1987,
    province: '跨 15 个省市自治区',
    city: '北京/河北/甘肃等',
    region: '华北',
    unescoQuote: '不仅因其建筑规模的宏大举世无双，更在两千多年的历史中成为中华民族坚韧不拔精神的象征。',
    highlight: '西起嘉峪关，东至山海关老龙头入海，跨越崇山峻岭与广袤荒漠。砖石城墙、烽燧营堡与关隘形成了中国古代最严密的军事防御工程体系。',
    poems: [
      { author: '王维', dynasty: '唐代', title: '《送元二使安西》', text: '劝君更尽一杯酒，西出阳关无故人。' },
      { author: '王之涣', dynasty: '唐代', title: '《凉州词》', text: '羌笛何须怨杨柳，春风不度玉门关。' },
      { author: '王昌龄', dynasty: '唐代', title: '《出塞》', text: '秦时明月汉时关，万里长征人未还。' }
    ],
    historyLink: '秦始皇蒙恬筑万里长城以御匈奴；汉武帝延修长城保障丝绸之路畅通；明代戚继光重修八达岭金山岭长城。',
    icon: '🏯',
    badgeColor: '#ef4444'
  },
  {
    id: 'forbidden-city',
    name: '北京故宫（紫禁城）',
    type: 'cultural',
    typeZh: '文化遗产',
    year: 1987,
    province: '北京市',
    city: '东城区',
    region: '华北',
    unescoQuote: '世界上保存最完整、规模最大的木质结构古代宫殿建筑群，反映了东方古代营建思想与皇权秩序。',
    highlight: '明清两代 24 位帝王主政中枢，占地 72 万平方米，殿宇 9000 余间，红墙黄瓦，中轴对称，金水桥、太和殿威仪万千。',
    poems: [
      { author: '文天祥', dynasty: '宋代', title: '《正气歌》', text: '天地有正气，杂然赋流形。' },
      { author: '成德', dynasty: '清代', title: '《禁城即事》', text: '紫殿秋晴日色迟，金铺十二画屏开。' }
    ],
    historyLink: '明成祖朱棣永乐四年起建，耗费天下巨木奇石历时 14 年落成；见证了明朝兴亡与清代康乾盛世。',
    icon: '🏛️',
    badgeColor: '#dc2626'
  },
  {
    id: 'terracotta-army',
    name: '秦始皇陵及兵马俑坑',
    type: 'cultural',
    typeZh: '文化遗产',
    year: 1987,
    province: '陕西省',
    city: '西安市',
    region: '西北',
    unescoQuote: '世界第八大奇迹！规模极其庞大、成千上万个陶俑各具神态，展现了古代雕塑艺术与大一统军事帝国的无上威严。',
    highlight: '出土近 8000 件真人比例的陶俑、战马与青铜战车，千人千面，栩栩如生；秦陵封土巍峨如山。',
    poems: [
      { author: '李白', dynasty: '唐代', title: '《古风其三》', text: '秦王扫六合，虎视何雄哉！挥剑决浮云，诸侯尽西来。' },
      { author: '杜牧', dynasty: '唐代', title: '《阿房宫赋》', text: '六王毕，四海一，蜀山兀，阿房出。' }
    ],
    historyLink: '秦始皇嬴政公元前 221 年统一中国，以百万雄师荡平六国，车同轨、书同文，奠定中华大一统格局。',
    icon: '🛡️',
    badgeColor: '#b45309'
  },
  {
    id: 'mogao-caves',
    name: '莫高窟（敦煌千佛洞）',
    type: 'cultural',
    typeZh: '文化遗产',
    year: 1987,
    province: '甘肃省',
    city: '敦煌市',
    region: '西北',
    unescoQuote: '古代丝绸之路上多元文明交汇的璀璨结晶，以跨越千年的壁画和彩塑展示了佛教艺术的发展演变。',
    highlight: '鸣沙山断崖上开凿的 735 个洞窟，保存壁画 4.5 万平方米、彩塑 2400 余身，飞天凌空翱翔，反弹琵琶惊艳世界。',
    poems: [
      { author: '王翰', dynasty: '唐代', title: '《凉州词》', text: '葡萄美酒夜光杯，欲饮琵琶马上催。' },
      { author: '岑参', dynasty: '唐代', title: '《白雪歌送武判官归京》', text: '轮台东门送君去，去时雪满天山路。' }
    ],
    historyLink: '前秦乐僔和尚西极荒漠忽见金光万道始凿首窟，此后十六国、北魏、隋唐、元代开凿千年不断，为丝路中西交融宝库。',
    icon: '🎨',
    badgeColor: '#d97706'
  },
  {
    id: 'potala-palace',
    name: '拉萨布达拉宫历史建筑群',
    type: 'cultural',
    typeZh: '文化遗产',
    year: 1994,
    province: '西藏自治区',
    city: '拉萨市',
    region: '西南',
    unescoQuote: '雪域高原上无与伦比的建筑奇迹，传统藏式宫堡建筑与汉藏民族融合团结的历史见证。',
    highlight: '海拔 3700 米的红山之巅，红白交映十三层殿堂，金顶群在高原阳光下灿烂辉耀，收藏无数珍贵唐卡与经卷。',
    poems: [
      { author: '李商隐', dynasty: '唐代', title: '《隋宫》', text: '乘兴南游日月迟，白雪茫茫向玉墀。' },
      { author: '藏族民歌', dynasty: '传统', title: '《布达拉赞歌》', text: '红山顶上的白宫殿，雪山倒映在清泉中。' }
    ],
    historyLink: '吐蕃赞普松赞干布为迎娶唐朝文成公主始建红山宫堡，文成公主带入佛像、农耕蚕桑、医药典籍，开启汉藏一家亲。',
    icon: '🏔️',
    badgeColor: '#dc2626'
  },
  {
    id: 'liangzhu',
    name: '良渚古城遗址',
    type: 'cultural',
    typeZh: '文化遗产',
    year: 2019,
    province: '浙江省',
    city: '杭州市',
    region: '华东',
    unescoQuote: '向全世界实证了中华五千多年文明史，展现了早期以水稻农业为经济基础、具有复杂社会阶层的早期区域性国家。',
    highlight: '距今 5300~4300 年前！规模巨大的古城垣、中国乃至世界上最早的大型水利工程体系，以及雕琢巧夺天工的神人兽面纹玉琮、玉璧。',
    poems: [
      { author: '苏轼', dynasty: '宋代', title: '《饮湖上初晴后雨》', text: '水光潋滟晴方好，山色空蒙雨亦奇。' }
    ],
    historyLink: '良渚古城遗址列入世界遗产，标志着国际学术界正式承认中国具有实证的五千年以上文明史。',
    icon: '💎',
    badgeColor: '#059669'
  },
  {
    id: 'yinxu',
    name: '殷墟',
    type: 'cultural',
    typeZh: '文化遗产',
    year: 2006,
    province: '河南省',
    city: '安阳市',
    region: '华中',
    unescoQuote: '中国青铜时代鼎盛时期的代表，出土的甲骨文为汉字乃至东亚文字体系找到了可考证的源头。',
    highlight: '商朝晚期都城遗址，出土中国最早成体系文字“甲骨文”达 15 万片，更有国之重器“司母戊鼎”（后母戊大方鼎，重 832.84 千克）。',
    poems: [
      { author: '诗经·商颂', dynasty: '先秦', title: '《玄鸟》', text: '天命玄鸟，降而生商，宅殷土茫茫。' }
    ],
    historyLink: '商王盘庚迁都于殷，武丁中兴，妇好为中国历史上第一位见于甲骨文字记载的女将军兼祭司。',
    icon: '🏺',
    badgeColor: '#b45309'
  },
  {
    id: 'suzhou-gardens',
    name: '苏州古典园林',
    type: 'cultural',
    typeZh: '文化遗产',
    year: 1997,
    province: '江苏省',
    city: '苏州市',
    region: '华东',
    unescoQuote: '东方写意山水园林的极致代表，咫尺之内再造乾坤，体现了中国传统文人天人合一、隐逸清雅的审美哲学。',
    highlight: '拙政园、留园、网师园、环秀山庄等九处精粹。以假山、碧水、花木、亭台楼阁为笔墨，步移景异，移步换景。',
    poems: [
      { author: '张继', dynasty: '唐代', title: '《枫桥夜泊》', text: '月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。' },
      { author: '文徵明', dynasty: '明代', title: '《拙政园图咏》', text: '绝怜人境无车马，信有山林在市城。' }
    ],
    historyLink: '江南文人雅士（如文徵明、王献臣等）借园林造景抒发隐逸心志，成为中国传统造园技艺的最高典范。',
    icon: '🏮',
    badgeColor: '#0891b2'
  },
  {
    id: 'pingyao',
    name: '平遥古城',
    type: 'cultural',
    typeZh: '文化遗产',
    year: 1997,
    province: '山西省',
    city: '晋中市',
    region: '华北',
    unescoQuote: '保存最为完好的中国古代县城典范，真实展示了明清时期汉民族城市的格局和晋商金融文明的崛起。',
    highlight: '完整周长 6.4 公里的青砖古城墙、瓮城与敌楼；日升昌票号（中国第一家票号，汇通天下）、明清古街市井繁华。',
    poems: [
      { author: '王维', dynasty: '唐代', title: '《九月九日忆山东兄弟》', text: '独在异乡为异客，每逢佳节倍思亲。' }
    ],
    historyLink: '清代道光年间平遥商人创立日升昌票号，发明汇兑业务，执掌晚清全国金融枢纽长达百年。',
    icon: '🪙',
    badgeColor: '#d97706'
  },
  {
    id: 'longmen-grottoes',
    name: '龙门石窟',
    type: 'cultural',
    typeZh: '文化遗产',
    year: 2000,
    province: '河南省',
    city: '洛阳市',
    region: '华中',
    unescoQuote: '中国石刻艺术最高峰之一，伊河两岸雕造的数万尊佛像展现了北魏至盛唐雕刻艺术从刚劲走向丰腴圆润的蜕变。',
    highlight: '奉先寺卢舍那大佛高 17.14 米，相传依唐高宗武则天的仪容开凿，面容安详慈悲，宛若天人微笑，被称为“东方的蒙娜丽莎”。',
    poems: [
      { author: '白居易', dynasty: '唐代', title: '《宿香山寺》', text: '洛都四郊山水之胜，龙门首焉。香山之胜，首于龙门。' },
      { author: '刘禹锡', dynasty: '唐代', title: '《酬令狐相公》', text: '平明龙门开，波涛声渐急。' }
    ],
    historyLink: '北魏孝文帝迁都洛阳后首凿古阳洞，唐高宗与武则天敕建奉先寺大佛，诗人白居易晚年常居香山寺自号香山居士。',
    icon: '🗿',
    badgeColor: '#eab308'
  },

  // ========== 自然遗产 (Natural: 华夏鬼斧神工自然奇境) ==========
  {
    id: 'jiuzhaigou',
    name: '九寨沟风景名胜区',
    type: 'natural',
    typeZh: '自然遗产',
    year: 1992,
    province: '四川省',
    city: '阿坝藏族羌族自治州',
    region: '西南',
    unescoQuote: '无与伦比的美学价值！由钙华瀑布、五彩斑斓的高山湖泊（海子）与原始森林构成的童话世界。',
    highlight: '“九寨归来不看水”！五花海碧波如幻，诺日朗瀑布宽达 270 米，钙华沉积让湖底枯木纤毫毕现，色彩斑斓如孔雀开屏。',
    poems: [
      { author: '民谚', dynasty: '民间', title: '《九寨谣》', text: '神奇九寨童话界，一汪碧翠化瑶池。' }
    ],
    historyLink: '中国藏族羌族同胞世代繁衍生息之地，九个藏族寨子坐落峡谷，保护着中国最为珍贵的高山冰川喀斯特生态。',
    icon: '🌊',
    badgeColor: '#06b6d4'
  },
  {
    id: 'zhangjiajie',
    name: '武陵源风景名胜区（张家界）',
    type: 'natural',
    typeZh: '自然遗产',
    year: 1992,
    province: '湖南省',
    city: '张家界市',
    region: '华中',
    unescoQuote: '世界上极其罕见的石英砂岩峰林地貌，3000 多座拔地而起的石柱峰林如同悬浮仙境。',
    highlight: '三千奇峰、八百秀水！天下第一桥、御笔峰、乾坤柱（电影《阿凡达》哈利路亚悬浮山原型），云海漫过宛如阿凡达星球。',
    poems: [
      { author: '屈原', dynasty: '先秦', title: '《楚辞·九歌·湘夫人》', text: '沅有芷兮澧有兰，思公子兮未敢言。' }
    ],
    historyLink: '武陵源地处湘西腹地，相传汉初名相张良功成身退后在此隐居辟谷，故有张家界之名。',
    icon: '🪨',
    badgeColor: '#10b981'
  },
  {
    id: 'huanglong',
    name: '黄龙风景名胜区',
    type: 'natural',
    typeZh: '自然遗产',
    year: 1992,
    province: '四川省',
    city: '阿坝藏族羌族自治州',
    region: '西南',
    unescoQuote: '世界规模最大的露天钙华彩池群，宛如一条金黄色的巨龙蜿蜒盘旋在雪山森林之间。',
    highlight: '五彩池 3400 余个叠级彩池，在阳光照射下呈现梯田般的碧蓝、橙黄、翠绿，映衬雪宝顶雪山圣洁无双。',
    poems: [
      { author: '杜甫', dynasty: '唐代', title: '《绝句》', text: '窗含西岭千秋雪，门泊东吴万里船。' }
    ],
    historyLink: '相传大禹治水时，神龙助力大禹疏通江河，功成后隐居于此雪山脚下化为黄龙彩池。',
    icon: '🐉',
    badgeColor: '#f59e0b'
  },
  {
    id: 'sanqingshan',
    name: '三清山国家公园',
    type: 'natural',
    typeZh: '自然遗产',
    year: 2008,
    province: '江西省',
    city: '上饶市',
    region: '华东',
    unescoQuote: '展示了极其独特的花岗岩石柱与峰林景观，结合了多样的植被与云海奇观，产生了引人入胜的视觉震撼。',
    highlight: '东方女神、巨蟒出山等栩栩如生的天然石景，高空悬崖绝壁栈道环绕，云雾变幻如同道家洞天仙境。',
    poems: [
      { author: '苏轼', dynasty: '宋代', title: '《留题三清山》', text: '揽胜遍五岳，绝景在三清！' }
    ],
    historyLink: '晋代著名道士、炼丹家葛洪曾结庐在三清山炼丹修道，留存葛洪井遗迹，为道教名山胜地。',
    icon: '☁️',
    badgeColor: '#3b82f6'
  },
  {
    id: 'fanjingshan',
    name: '梵净山',
    type: 'natural',
    typeZh: '自然遗产',
    year: 2018,
    province: '贵州省',
    city: '铜仁市',
    region: '西南',
    unescoQuote: '孤岛般的变质岩山峰在亚热带喀斯特海洋中拔地而起，保存了全球最重要的古老第三纪原始森林与珍稀动植物栖息地。',
    highlight: '红云金顶如同破土石笋直插苍穹，蘑菇石屹立亿万年不倒，是珍稀国宝黔金丝猴与梵净山冷杉唯一的全球家园。',
    poems: [
      { author: '王阳明', dynasty: '明代', title: '《龙场九咏》', text: '险夷原不滞胸中，何异浮云过太空？' }
    ],
    historyLink: '明神宗万历皇帝敕赐为“古佛道场”，与五台山、普陀山、峨眉山、九华山齐名为弥勒菩萨道场。',
    icon: '🐒',
    badgeColor: '#8b5cf6'
  },
  {
    id: 'danxia',
    name: '中国丹霞（系列遗产）',
    type: 'natural',
    typeZh: '自然遗产',
    year: 2010,
    province: '广东/湖南/贵州/江西/浙江/福建',
    city: '丹霞山/崀山/赤水等',
    region: '华南',
    unescoQuote: '红色陆相碎屑岩经受风化侵蚀形成的陡崖峭壁，在中国南方形成了色彩绚丽的红色景观奇观。',
    highlight: '广东丹霞山、贵州赤水佛光岩、湖南崀山驼峰；色如渥丹，灿若明霞，是中国地质学家命名的中国本土标志性地貌！',
    poems: [
      { author: '韩愈', dynasty: '唐代', title: '《题韶州韶石》', text: '石梁跨空险，云浪翻平陆。' }
    ],
    historyLink: '中国地质学家冯景兰与陈国达于 20 世纪初在广东丹霞山创立“丹霞地貌”学术体系，走向世界教科文组织。',
    icon: '🌄',
    badgeColor: '#ef4444'
  }
]

// 4. 世界遗产通识亲子挑战题库
export const heritageQuiz = [
  {
    id: 1,
    question: '在联合国教科文组织世界遗产分类中，既具备世界顶级自然美景，又承载数千年历史文化精粹的被称为“双重遗产”。我国以下哪座名山属于双重遗产？',
    options: ['泰山', '华山', '衡山', '恒山'],
    answer: 0,
    explain: '泰山是中国第一个被联合国评为世界文化与自然双重遗产的名山（1987年）！我国四大双重遗产分别是：泰山、黄山、峨眉山-乐山大佛、武夷山。'
  },
  {
    id: 2,
    question: '向全世界实证了“中华五千多年文明史”、出土了巧夺天工的神人兽面纹玉琮的古代遗址是哪一处？',
    options: ['良渚古城遗址', '北京人遗址', '半坡遗址', '安阳殷墟'],
    answer: 0,
    explain: '浙江杭州的良渚古城遗址距今 5300~4300 年，拥有宏大的古城、复杂水利系统和高超玉器工艺，实证了中华五千多年文明史！'
  },
  {
    id: 3,
    question: '“会当凌绝顶，一览众山小”是唐代诗圣杜甫年轻时仰望攀登哪一座名胜古迹时写下的千古名句？',
    options: ['黄山', '泰山', '庐山', '武夷山'],
    answer: 1,
    explain: '杜甫在《望岳》中登览东岳泰山，抒发了勇攀绝顶、俯视一切的博大胸襟与豪迈气魄！'
  },
  {
    id: 4,
    question: '被誉为“世界第八大奇迹”，出土了成千上万具真人比例、千人千面的陶制古代战士与战车战马的世界遗产是？',
    options: ['秦始皇陵及兵马俑坑', '汉阳陵', '明十三陵', '清东陵'],
    answer: 0,
    explain: '位于陕西西安临潼的秦始皇陵兵马俑，以严整的军阵、生动的雕塑展现了秦国横扫六合、一统天下的无上霸气！'
  },
  {
    id: 5,
    question: '明代大旅行家徐霞客曾发出感叹：“五岳归来不看山，黄山归来不看岳”。黄山位于我国哪一个省份？',
    options: ['江西省', '安徽省', '浙江省', '湖南省'],
    answer: 1,
    explain: '黄山位于安徽省南部黄山市，以奇松、怪石、云海、温泉、冬雪“五绝”天下闻名！'
  },
  {
    id: 6,
    question: '古代丝绸之路上连接欧亚文明、开凿在鸣沙山断崖上、保存着飞天壁画与藏经洞的世界遗产是哪一处？',
    options: ['敦煌莫高窟', '大同云冈石窟', '洛阳龙门石窟', '天水麦积山石窟'],
    answer: 0,
    explain: '甘肃敦煌莫高窟开凿始于十六国，历经一千余年，是丝绸之路上规模最庞大、艺术最精湛的佛教石窟艺术圣殿！'
  },
  {
    id: 7,
    question: '世界现存最大的古代木结构宫殿建筑群、明清两代二十四位皇帝主政居住的紫禁城，现在的官方名称是？',
    options: ['颐和园', '北京故宫博物院', '天坛', '圆明园'],
    answer: 1,
    explain: '北京故宫（紫禁城）始建于明永乐四年，红墙金瓦，中轴对称，是人类古代宫殿建筑的至高巅峰。'
  },
  {
    id: 8,
    question: '电影《阿凡达》中悬浮在半空中的“哈利路亚山”，取景灵感来源于我国哪一处以三千石英砂岩峰林著称的世界自然遗产？',
    options: ['武陵源风景名胜区（张家界）', '九寨沟', '三清山', '梵净山'],
    answer: 0,
    explain: '湖南张家界武陵源拥有 3000 多座拔地而起的奇特石柱峰林，“乾坤柱”便是《阿凡达》悬浮山的原型！'
  }
]
