/**
 * 历代帝王世系与华夏重大决战风云 · 全量数据库
 * 专为青少年与亲子历史通识、统编语文成语典故及教材必背古诗联动设计
 */

export const dynastyEpochs = [
  { id: 'pre-qin', name: '先秦华夏', period: '约前2070 - 前221', color: '#8d6e63', icon: '🏺', desc: '夏商周三代鼎立，春秋五霸与战国七雄争锋' },
  { id: 'qin-han', name: '大一统秦汉', period: '前221 - 公元220', color: '#c0392b', icon: '🏛️', desc: '百代皆行秦政制，强汉雄风与文景光武' },
  { id: 'three-kingdoms-jin', name: '三国两晋南北朝', period: '公元220 - 589', color: '#8e44ad', icon: '⚔️', desc: '群雄逐鹿三足鼎立，衣冠南渡与民族大交融' },
  { id: 'sui-tang', name: '隋唐盛世五代', period: '公元581 - 960', color: '#d35400', icon: '🏯', desc: '大运河开创科举，贞观开元万国来朝' },
  { id: 'song-yuan', name: '两宋辽金元', period: '公元960 - 1368', color: '#16a085', icon: '📜', desc: '文治与科技巅峰，理学兴盛与欧亚大一统' },
  { id: 'ming-qing', name: '明清帝国', period: '公元1368 - 1912', color: '#2980b9', icon: '👑', desc: '天子守国门与紫禁城，康乾盛世与落日余晖' }
];

export const emperorsList = [
  // 先秦夏商周
  {
    id: 'emp-huangdi',
    dynasty: 'pre-qin',
    dynastyName: '上古传说',
    name: '姬轩辕',
    templeName: '黄帝（轩辕氏）',
    reignPeriod: '约前26世纪',
    eraNames: [],
    flourishEra: '华夏人文初祖',
    avatarIcon: '👑',
    achievements: '播百谷草木，造车船，创文字律历，与炎帝会盟涿鹿败蚩尤，奠定华夏民族共同始祖。',
    notableMinisters: ['风后', '力牧', '仓颉', '嫘祖'],
    anecdote: '传说黄帝的妻子嫘祖发明了养蚕缫丝，史官仓颉观察鸟兽足迹创造了最早的汉字！'
  },
  {
    id: 'emp-yu',
    dynasty: 'pre-qin',
    dynastyName: '夏朝',
    name: '姒文命',
    templeName: '大禹（夏后氏）',
    reignPeriod: '约前2070 - 前2060',
    eraNames: [],
    flourishEra: '夏朝开国之祖',
    avatarIcon: '🌊',
    achievements: '改堵为疏治理九洲水患，三过家门而不入；铸九鼎划天下九州，其子启开启“家天下”世袭王制。',
    notableMinisters: ['伯益', '皋陶'],
    anecdote: '大禹治水十三年，三次经过自己的家门，听到刚出生的儿子哭声，为了治理洪水都忍着没有进去！'
  },
  {
    id: 'emp-tang',
    dynasty: 'pre-qin',
    dynastyName: '商朝',
    name: '子履',
    templeName: '商汤（成汤）',
    reignPeriod: '约前1600 - 前1588',
    eraNames: [],
    flourishEra: '商朝开国明君',
    avatarIcon: '🏹',
    achievements: '任用伊尹为相，鸣条之战伐桀灭夏，开创商朝；以德立国，宽仁爱民。',
    notableMinisters: ['伊尹', '仲虺'],
    anecdote: '“网开一面”的成语就是商汤留下的！他看到有人四面张网捕鸟，便让其撤去三面，只留一面让鸟自由飞翔。'
  },
  {
    id: 'emp-wuding',
    dynasty: 'pre-qin',
    dynastyName: '商朝',
    name: '子昭',
    templeName: '武丁（高宗）',
    reignPeriod: '约前1250 - 前1192',
    eraNames: [],
    flourishEra: '武丁中兴',
    avatarIcon: '🛡️',
    achievements: '殷墟甲骨文时代代表帝王；任用贤臣傅说，王后妇好挂帅征战四方，商朝版图与青铜文化达鼎盛。',
    notableMinisters: ['傅说', '甘盘', '妇好（王后）'],
    anecdote: '武丁的王后妇好是中国历史上第一位有据可查的巾帼女将军，墓中出土了重达上百公斤的精美青铜大钺！'
  },
  {
    id: 'emp-zhouwu',
    dynasty: 'pre-qin',
    dynastyName: '西周',
    name: '姬发',
    templeName: '周武王',
    reignPeriod: '约前1046 - 前1043',
    eraNames: [],
    flourishEra: '周朝开国圣君',
    avatarIcon: '📜',
    achievements: '继承周文王遗志，联合诸侯在牧野之战大败商纣，建立西周；封邦建国，以德配天。',
    notableMinisters: ['姜子牙（姜尚）', '周公旦', '召公奭'],
    anecdote: '姜太公用没有鱼钩的直钩在渭水边垂钓，周文王亲自礼聘，辅佐武王一举灭商开创周朝八百年基业！'
  },
  {
    id: 'emp-zhougong',
    dynasty: 'pre-qin',
    dynastyName: '西周',
    name: '姬旦',
    templeName: '周公旦（摄政）',
    reignPeriod: '约前1042 - 前1036',
    eraNames: [],
    flourishEra: '制礼作乐·成康之治基石',
    avatarIcon: '🎶',
    achievements: '周成王幼年辅政，平定三监之乱；营建洛邑，制定宗法分封制与周礼乐章，奠定中华礼仪之邦根基。',
    notableMinisters: ['召公奭'],
    anecdote: '“周公吐哺，天下归心”，周公为了接待前来献策的贤士，洗头时三次握起湿发，吃一顿饭三次吐出嘴里的食物！'
  },

  // 大一统秦汉
  {
    id: 'emp-qinshihuang',
    dynasty: 'qin-han',
    dynastyName: '秦朝',
    name: '嬴政',
    templeName: '秦始皇',
    reignPeriod: '前221 - 前210',
    eraNames: [],
    flourishEra: '千古一帝·首统六国',
    avatarIcon: '👑',
    achievements: '扫灭六国建立中国第一个大一统中央集权王朝；废分封立郡县，统一度量衡、文字、车轨，修万里长城与灵渠。',
    notableMinisters: ['李斯', '王翦', '蒙恬'],
    anecdote: '秦始皇首次将“三皇”与“五帝”合并创造了“皇帝”这一尊号，自称“始皇帝”，规定皇帝自称“朕”！'
  },
  {
    id: 'emp-hanhaozu',
    dynasty: 'qin-han',
    dynastyName: '西汉',
    name: '刘邦',
    templeName: '汉高祖',
    reignPeriod: '前202 - 前195',
    eraNames: [],
    flourishEra: '大汉开国之君',
    avatarIcon: '🍶',
    achievements: '从泗水亭长起兵，约法三章得民心；楚汉相争击败项羽建立大汉王朝；善于用人，开启汉民族辉煌时代。',
    notableMinisters: ['张良（谋略）', '萧何（内政）', '韩信（军事）', '曹参'],
    anecdote: '刘邦称赞三位重臣：“运筹策帷幄之中，吾不如子房；镇国家抚百姓，吾不如萧何；连百万之军战必胜，吾不如韩信！”'
  },
  {
    id: 'emp-hanwenjing',
    dynasty: 'qin-han',
    dynastyName: '西汉',
    name: '刘恒 / 刘启',
    templeName: '汉文帝 / 汉景帝',
    reignPeriod: '前180 - 前141',
    eraNames: ['前元', '中元', '后元'],
    flourishEra: '文景之治',
    avatarIcon: '🌾',
    achievements: '轻徭薄赋，与民休息，免收全国田租十余年；倡导勤俭节约，废除肉刑，国库充盈，开创中国第一个治世盛宴。',
    notableMinisters: ['贾谊', '晁错', '周亚夫'],
    anecdote: '汉文帝在位二十三年，宫室苑囿没有增加一件，穿粗糙丝绸，下令死后不起高大封土，是历史上最节俭的皇帝之一。'
  },
  {
    id: 'emp-hanwudi',
    dynasty: 'qin-han',
    dynastyName: '西汉',
    name: '刘彻',
    templeName: '汉武帝',
    reignPeriod: '前141 - 前87',
    eraNames: ['建元', '元光', '元朔', '元狩', '元鼎', '元封', '太初', '天汉', '太始', '征和', '后元'],
    flourishEra: '汉武盛世',
    avatarIcon: '🐎',
    achievements: '颁布推恩令强化集权；罢黜百家独尊儒术；派卫青霍去病北击匈奴封狼居胥；命张骞凿空西域开辟丝绸之路；首创“建元”年号。',
    notableMinisters: ['卫青', '霍去病', '董仲舒', '张骞', '主父偃', '司马迁'],
    anecdote: '中国历史上第一个正式的帝王“年号”——“建元”，就是汉武帝设立的！从此开创了年号纪年两千多年的传统。'
  },
  {
    id: 'emp-hanguangwu',
    dynasty: 'qin-han',
    dynastyName: '东汉',
    name: '刘秀',
    templeName: '汉光武帝',
    reignPeriod: '公元25 - 57',
    eraNames: ['建武', '中元'],
    flourishEra: '光武中兴',
    avatarIcon: '☀️',
    achievements: '昆阳之战以少胜多击垮王莽新朝主力；平定割据定都洛阳延续大汉国祚；精兵简政，释放奴婢，重振太学，海内富庶。',
    notableMinisters: ['云台二十八将（邓禹、冯异、耿弇、吴汉等）'],
    anecdote: '刘秀待人宽厚温和，部下大将冯异立功后总是在大树下静静乘凉不争功劳，因此被士兵亲切地称为“大树将军”！'
  },

  // 三国魏晋南北朝
  {
    id: 'emp-caopi',
    dynasty: 'three-kingdoms-jin',
    dynastyName: '三国曹魏',
    name: '曹丕',
    templeName: '魏文帝',
    reignPeriod: '公元220 - 226',
    eraNames: ['黄初'],
    flourishEra: '曹魏开国皇帝',
    avatarIcon: '🖋️',
    achievements: '接受汉献帝禅让建立魏国，结束东汉名义统治；采纳九品中正制；擅长文学，与曹操、曹植并称“三曹”，开建安诗风。',
    notableMinisters: ['司马懿', '陈群', '贾诩', '钟繇'],
    anecdote: '曹丕也是著名文人，写下中国文学史上第一首成熟完整的文人七言诗《燕歌行》！'
  },
  {
    id: 'emp-liubei',
    dynasty: 'three-kingdoms-jin',
    dynastyName: '三国蜀汉',
    name: '刘备',
    templeName: '汉昭烈帝（先主）',
    reignPeriod: '公元221 - 223',
    eraNames: ['章武'],
    flourishEra: '蜀汉开国皇帝',
    avatarIcon: '🤝',
    achievements: '织席贩履起家，三顾茅庐得诸葛亮；赤壁破曹鼎足而立，占荆州夺益州建立蜀汉；仁德爱民，托孤白帝城。',
    notableMinisters: ['诸葛亮', '关羽', '张飞', '赵云', '庞统', '法正'],
    anecdote: '刘备临终前给后主刘禅的遗诏中留下千古名言：“勿以恶小而为之，勿以善小而不为。惟贤惟德，能服于人！”'
  },
  {
    id: 'emp-sunquan',
    dynasty: 'three-kingdoms-jin',
    dynastyName: '三国东吴',
    name: '孙权',
    templeName: '吴大帝',
    reignPeriod: '公元229 - 252',
    eraNames: ['黄龙', '嘉禾', '赤乌', '太元', '神凤'],
    flourishEra: '东吴开国皇帝',
    avatarIcon: '⚓',
    achievements: '承兄孙策基业统领江东；任用周瑜赤壁破曹，用陆逊夷陵破刘，三分天下；派卫温远航夷洲（台湾），开发江南。',
    notableMinisters: ['周瑜', '鲁肃', '吕蒙', '陆逊', '诸葛瑾'],
    anecdote: '辛弃疾词云：“天下英雄谁敌手？曹刘。生子当如孙仲谋！”曹操看了孙权的严整水军也不禁由衷赞叹。'
  },
  {
    id: 'emp-jinwudi',
    dynasty: 'three-kingdoms-jin',
    dynastyName: '西晋',
    name: '司马炎',
    templeName: '晋武帝',
    reignPeriod: '公元265 - 290',
    eraNames: ['泰始', '咸宁', '太康'],
    flourishEra: '太康之治·三国归晋',
    avatarIcon: '🏰',
    achievements: '逼魏帝禅位建立西晋；公元280年发兵灭吴，结束三国近百年分裂局面，实现全国短暂大一统。',
    notableMinisters: ['羊祜', '杜预', '贾充', '张华'],
    anecdote: '西晋灭吴时，大将王浚造楼船顺长江而下，杜预势如破竹，留下了成语“势如破竹”！'
  },
  {
    id: 'emp-beizhuxiaowen',
    dynasty: 'three-kingdoms-jin',
    dynastyName: '北魏',
    name: '拓跋宏（元宏）',
    templeName: '北魏孝文帝',
    reignPeriod: '公元471 - 499',
    eraNames: ['延兴', '承明', '太和'],
    flourishEra: '太和改制·汉化融合',
    avatarIcon: '👘',
    achievements: '推行均田制与三长制；力排众议迁都洛阳；改汉姓（拓跋改元）、穿汉服、说汉语、通婚姻，极大促进了北方民族大交融。',
    notableMinisters: ['冯太后（祖母辅政）', '李冲', '王肃'],
    anecdote: '孝文帝为了推行汉化，下令朝廷上三十岁以下的官员一律不准再讲鲜卑语，否则降职罚俸！'
  },

  // 盛世隋唐五代
  {
    id: 'emp-suiwendi',
    dynasty: 'sui-tang',
    dynastyName: '隋朝',
    name: '杨坚',
    templeName: '隋文帝',
    reignPeriod: '公元581 - 604',
    eraNames: ['开皇', '仁寿'],
    flourishEra: '开皇之治',
    avatarIcon: '🌾',
    achievements: '灭陈结束魏晋南北朝近三百年分裂；创立三省六部制与科举制度雏形；开创开皇之治，天下储积得供五六十年。',
    notableMinisters: ['高颎', '杨素', '牛弘', '苏威'],
    anecdote: '隋文帝崇尚节俭，日常膳食只有一道肉菜，衣服破了也补好再穿，国库却极其充盈，粮仓大得可以储存千万石粮食！'
  },
  {
    id: 'emp-tangtaizong',
    dynasty: 'sui-tang',
    dynastyName: '唐朝',
    name: '李世民',
    templeName: '唐太宗',
    reignPeriod: '公元626 - 649',
    eraNames: ['贞观'],
    flourishEra: '贞观之治·天可汗',
    avatarIcon: '🌟',
    achievements: '少年起兵克定天下，玄武门之变后即位；从谏如流，任人唯贤，休养生息；击败突厥被尊为“天可汗”；文成公主入藏。',
    notableMinisters: ['房玄龄', '杜如晦', '魏征', '李靖', '尉迟恭', '长孙无忌'],
    anecdote: '唐太宗悼念直臣魏征：“以铜为镜，可以正衣冠；以古为镜，可以知兴替；以人为镜，可以明得失。朕尝宝此三镜，魏征殂逝，遂亡一镜矣！”'
  },
  {
    id: 'emp-wuzetian',
    dynasty: 'sui-tang',
    dynastyName: '武周 / 唐朝',
    name: '武曌',
    templeName: '则天大圣皇帝（武则天）',
    reignPeriod: '公元690 - 705',
    eraNames: ['天授', '如意', '长寿', '延载', '天册万岁', '万岁登封', '神功', '圣历', '长安'],
    flourishEra: '贞观遗风',
    avatarIcon: '🌸',
    achievements: '中国历史上唯一正统女皇帝，改国号为周；首创武举与殿试制度；破格提拔寒门庶族人才；为开元盛世奠定坚实基础。',
    notableMinisters: ['狄仁杰', '张柬之', '姚崇', '宋璟', '上官婉儿'],
    anecdote: '武则天临终前遗命除去帝号，称“则天大圣皇后”，并在乾陵前留下一座无字碑，是非功过任由后人评说！'
  },
  {
    id: 'emp-tangxuanzong',
    dynasty: 'sui-tang',
    dynastyName: '唐朝',
    name: '李隆基',
    templeName: '唐玄宗',
    reignPeriod: '公元712 - 756',
    eraNames: ['先天', '开元', '天宝'],
    flourishEra: '开元盛世',
    avatarIcon: '🏮',
    achievements: '励精图治，任用姚崇、宋璟为相，整顿吏治，大唐经济、文化、诗歌步入极盛（杜甫诗云“忆昔开元全盛日，小邑犹藏万家室”）；晚年爆发安史之乱转衰。',
    notableMinisters: ['姚崇', '宋璟', '张九龄', '郭子仪', '李光弼'],
    anecdote: '开元时期大唐万国来朝，李白、杜甫、高适等大诗人云集长安洛阳，写下了无数千古传诵的华彩诗篇！'
  },

  // 两宋辽金元
  {
    id: 'emp-songtaizu',
    dynasty: 'song-yuan',
    dynastyName: '北宋',
    name: '赵匡胤',
    templeName: '宋太祖',
    reignPeriod: '公元960 - 976',
    eraNames: ['建隆', '乾德', '开宝'],
    flourishEra: '大宋开国·建隆之治',
    avatarIcon: '🪖',
    achievements: '陈桥兵变黄袍加身建立宋朝；“杯酒释兵权”解除禁军将领兵权；崇文抑武，先南后北统一中原主要割据势力，奠定文治繁荣。',
    notableMinisters: ['赵普', '曹彬', '潘美'],
    anecdote: '“卧榻之侧，岂容他人鼾睡”，宋太祖宴请石守信等开国宿将，举杯谈笑间和平收回兵权，历史上称为“杯酒释兵权”！'
  },
  {
    id: 'emp-songrenzong',
    dynasty: 'song-yuan',
    dynastyName: '北宋',
    name: '赵祯',
    templeName: '宋仁宗',
    reignPeriod: '公元1022 - 1063',
    eraNames: ['天圣', '明道', '景祐', '宝元', '康定', '庆历', '皇祐', '至和', '嘉祐'],
    flourishEra: '仁宗盛治·群星璀璨',
    avatarIcon: '✨',
    achievements: '在位四十二年宽厚仁慈，广纳谏言；群星闪耀的文化鼎盛期（范仲淹、包拯、欧阳修、苏轼、王安石、司马光皆其朝廷重臣）。',
    notableMinisters: ['范仲淹', '包拯', '富弼', '韩琦', '欧阳修', '司马光'],
    anecdote: '宋仁宗夜里想吃烤羊肉，怕御厨从此每夜宰羊形成定例，忍着饥饿没说；驾崩时连敌国辽道宗耶律洪基都痛哭为他建衣冠冢！'
  },
  {
    id: 'emp-songgaozong',
    dynasty: 'song-yuan',
    dynastyName: '南宋',
    name: '赵构',
    templeName: '宋高宗',
    reignPeriod: '公元1127 - 1162',
    eraNames: ['建炎', '绍兴'],
    flourishEra: '南宋建立·绍兴和议',
    avatarIcon: '🛶',
    achievements: '靖康之耻后南迁应天府即位建立南宋，偏安临安（杭州）；起用岳飞、韩世忠抗金，后听信秦桧杀害岳飞订立绍兴和议。',
    notableMinisters: ['李纲', '宗泽', '岳飞', '韩世忠', '秦桧'],
    anecdote: '民族英雄岳飞率领岳家军北伐打得金兵感叹“撼山易，撼岳家军难”，却被秦桧与高宗用十二道金牌强行召回！'
  },
  {
    id: 'emp-genghis-hubilai',
    dynasty: 'song-yuan',
    dynastyName: '大元',
    name: '孛儿只斤·忽必烈',
    templeName: '元世祖',
    reignPeriod: '公元1260 - 1294',
    eraNames: ['中统', '至元'],
    flourishEra: '大元帝国开国',
    avatarIcon: '🐎',
    achievements: '成吉思汗之孙；1271年建国号为“大元”，取《易经》“大哉乾元”之意；1279年灭南宋彻底统一全国；设立行省制度沿用至今。',
    notableMinisters: ['刘秉忠', '郭守敬（水利天文）', '耶律楚材'],
    anecdote: '元朝天文学家郭守敬在元世祖支持下编制出《授时历》，测定一年为 365.2425 天，与现代公历一秒不差，领先西方三百多年！'
  },

  // 明清帝国
  {
    id: 'emp-mingtaizu',
    dynasty: 'ming-qing',
    dynastyName: '大明',
    name: '朱元璋',
    templeName: '明太祖（洪武帝）',
    reignPeriod: '公元1368 - 1398',
    eraNames: ['洪武'],
    flourishEra: '洪武之治',
    avatarIcon: '🌾',
    achievements: '布衣和尚起兵，驱逐蒙元恢复中华；定都南京建立大明；废除宰相权分六部；编《大明律》与《鱼鳞图册》，惩治贪官休养生息。',
    notableMinisters: ['徐达', '常遇春', '刘基（刘伯温）', '李文忠'],
    anecdote: '朱元璋是中国历史上唯一一个真正由社会最底层的贫苦农民和流浪和尚，一步步靠超绝才能统一天下的平民开国皇帝！'
  },
  {
    id: 'emp-mingchengzu',
    dynasty: 'ming-qing',
    dynastyName: '大明',
    name: '朱棣',
    templeName: '明成祖（永乐帝）',
    reignPeriod: '公元1402 - 1424',
    eraNames: ['永乐'],
    flourishEra: '永乐盛世',
    avatarIcon: '🚢',
    achievements: '靖难之役夺位；迁都北京营建紫禁城；命郑和七下西洋远涉亚非；五次亲征漠北；组织修纂三亿七千万字的古代百科巨著《永乐大典》。',
    notableMinisters: ['姚广孝', '郑和', '解缙', '张玉'],
    anecdote: '郑和率领两百余艘长达百余米的巨型宝船舰队七下西洋，比哥伦布发现美洲早了近百年，宣扬和平与海上丝绸之路友谊！'
  },
  {
    id: 'emp-kangxi',
    dynasty: 'ming-qing',
    dynastyName: '大清',
    name: '爱新觉罗·玄烨',
    templeName: '清圣祖（康熙帝）',
    reignPeriod: '公元1661 - 1722',
    eraNames: ['康熙'],
    flourishEra: '康乾盛世开创者',
    avatarIcon: '🦁',
    achievements: '八岁登基十四岁亲政，擒鳌拜平定三藩；收复台湾设立府县；亲征噶尔丹；两战雅克萨反击沙俄侵略订立《尼布楚条约》；在位61年为历史之最。',
    notableMinisters: ['索额图', '明珠', '陈廷敬', '李光地', '张廷玉'],
    anecdote: '康熙帝酷爱学习，不仅精通骑射满汉典籍，还向西方传教士刻苦学习代数几何、天文学和解剖学，随身携带比例规和望远镜！'
  },
  {
    id: 'emp-qianlong',
    dynasty: 'ming-qing',
    dynastyName: '大清',
    name: '爱新觉罗·弘历',
    templeName: '清高宗（乾隆帝）',
    reignPeriod: '公元1735 - 1795',
    eraNames: ['乾隆'],
    flourishEra: '十全武功·乾隆盛世',
    avatarIcon: '📜',
    achievements: '平定准噶尔与回部叛乱，定名“新疆”；完善西藏金瓶掣签制度；组织编纂中国最大丛书《四库全书》；晚年自称“十全老人”。',
    notableMinisters: ['傅恒', '阿桂', '刘统勋', '纪晓岚', '和珅'],
    anecdote: '乾隆帝一生酷爱微服下江南，创作了四万多首诗歌，还是个狂热的字画收藏家，留下了许多传世盖章趣闻！'
  }
];

export const battlesList = [
  // 1. 涿鹿之战
  {
    id: 'battle-zhuolu',
    name: '涿鹿之战',
    year: -2600,
    yearDisplay: '约前26世纪',
    dynasty: 'pre-qin',
    dynastyName: '上古传说',
    type: '鼎革统一',
    typeLabel: '👑 华夏奠基',
    sides: {
      blue: { name: '炎黄部落联盟', commander: '黄帝（轩辕）、炎帝', troops: '万国部族盟军' },
      red: { name: '九黎部落联盟', commander: '蚩尤', troops: '八十一兄弟部落' }
    },
    strategy: '指南车破大雾迷障，应龙蓄水止风雨，以德化民联合诸部',
    idioms: ['开天辟地', '云开雾散'],
    impact: '击溃蚩尤九黎部族，炎黄部落融为一体定居中原，标志着华夏族雏形的确立，被尊为人文初祖之战。',
    storySummary: '相传蚩尤呼风唤雨、作大雾三日，黄帝制造了指南车辨别方向，终于在涿鹿原上战胜蚩尤，从此诸侯尊黄帝为天子！'
  },

  // 2. 鸣条之战
  {
    id: 'battle-mingtiao',
    name: '鸣条之战',
    year: -1600,
    yearDisplay: '约前1600年',
    dynasty: 'pre-qin',
    dynastyName: '夏末商初',
    type: '鼎革统一',
    typeLabel: '⚡ 夏商鼎革',
    sides: {
      blue: { name: '商军与反夏同盟', commander: '商汤、伊尹', troops: '战车七十乘、敢死士数千' },
      red: { name: '夏王朝军队', commander: '夏桀', troops: '夏军主力' }
    },
    strategy: '避实就虚，深明大义瓦解敌军，风雨交加中乘势突击',
    idioms: ['汤武革命', '暴殄天物'],
    impact: '中国历史上第一场有文献记载的“以德革暴”改朝换代战役，夏朝灭亡，商朝正式建立。',
    storySummary: '夏桀残暴无道，商汤在鸣条之野向三军发表演说，历数桀的罪状。商军士气如虹，一举击溃夏军，夏桀仓皇逃奔南巢！'
  },

  // 3. 牧野之战
  {
    id: 'battle-muye',
    name: '牧野之战',
    year: -1046,
    yearDisplay: '前1046年',
    dynasty: 'pre-qin',
    dynastyName: '商末周初',
    type: '鼎革统一',
    typeLabel: '⚡ 商周鼎革',
    sides: {
      blue: { name: '周联军与西方诸侯', commander: '周武王、姜子牙', troops: '车300乘、虎贲3000、甲士4.5万' },
      red: { name: '商朝奴隶与守军', commander: '商纣王', troops: '号称十七万人' }
    },
    strategy: '乘商朝主力征讨东夷虚弱之际长驱直入，拂晓时分发起凌厉攻势',
    idioms: ['倒戈相向', '前歌后舞'],
    impact: '纣王鹿台自焚，商朝灭亡。西周建立并开启了延续八百年的分封宗法制与礼乐文明。',
    poemLink: {
      title: '《诗经·大雅·大明》',
      quote: '牧野洋洋，檀车煌煌，驷騵彭彭。维师尚父，时维鹰扬。'
    },
    storySummary: '周武王率联军疾行至商都朝歌城外的牧野。商纣王仓促武装奴隶囚犯十七万人迎战，奴隶们不愿为暴君卖命纷纷在阵前倒转兵刃带路，商军彻底土崩瓦解！'
  },

  // 4. 长勺之战
  {
    id: 'battle-changshao',
    name: '长勺之战',
    year: -684,
    yearDisplay: '前684年',
    dynasty: 'pre-qin',
    dynastyName: '春秋',
    type: '以少胜多',
    typeLabel: '🔥 以少胜多',
    sides: {
      blue: { name: '鲁国军队', commander: '曹刿、鲁庄公', troops: '鲁军精锐' },
      red: { name: '齐国大军', commander: '齐桓公、鲍叔牙', troops: '齐军大举压境' }
    },
    strategy: '后发制人，“敌疲我打”，三鼓之后士气消竭再行出击',
    idioms: ['一鼓作气', '再衰三竭', '辙乱旗靡'],
    impact: '齐国称霸初期受到鲁国坚决遏阻，留下了中国古代最早系统论述战争心理与战机把握的军事名篇。',
    storySummary: '面对强大的齐军，谋士曹刿劝鲁庄公沉住气。齐军擂响三通战鼓，士气渐渐衰竭。曹刿见齐军车辙混乱、旗帜倾倒，才下令全线冲锋，大获全胜！'
  },

  // 5. 城濮之战
  {
    id: 'battle-chengpu',
    name: '城濮之战',
    year: -632,
    yearDisplay: '前632年',
    dynasty: 'pre-qin',
    dynastyName: '春秋',
    type: '以少胜多',
    typeLabel: '🔥 诱敌深入',
    sides: {
      blue: { name: '晋军及宋齐秦联军', commander: '晋文公、先轸', troops: '晋军七百乘' },
      red: { name: '楚军及陈蔡附庸军', commander: '楚令尹子玉', troops: '楚国精锐大军' }
    },
    strategy: '兑现流亡承诺退避三舍，诱使楚军骄横冒进，伪装败退设伏斩其两翼',
    idioms: ['退避三舍'],
    impact: '遏制了楚国北上进取中原的势头，晋文公在践土会盟诸侯，正式确立中原霸主地位。',
    storySummary: '晋文公重耳当年流亡楚国时曾对楚王许诺：“若两国交战，晋军当退避九十里（三舍）。”城濮对阵晋军主动后撤九十里，楚帅子玉轻敌孤军深入，被晋军分头击破！'
  },

  // 6. 柏举之战
  {
    id: 'battle-baiju',
    name: '柏举之战',
    year: -506,
    yearDisplay: '前506年',
    dynasty: 'pre-qin',
    dynastyName: '春秋',
    type: '以少胜多',
    typeLabel: '🔥 奔袭攻坚',
    sides: {
      blue: { name: '吴国军队', commander: '孙武、伍子胥、阖闾', troops: '吴军约3万人' },
      red: { name: '楚国庞大守军', commander: '楚昭王、囊瓦', troops: '楚军约20万人' }
    },
    strategy: '长途奔袭千余里，避实击虚，出其不意渡淮水直插楚国腹地',
    idioms: ['兵贵神速', '出其不意'],
    impact: '孙武军事理论的实战巅峰，吴军五战五捷攻入楚国都城郢都，创造了春秋时期远途攻入大国国都的奇迹。',
    storySummary: '大军事家孙武和伍子胥辅佐吴王阖闾，以区区三万吴军机动千里，连续击溃楚军主力，直捣楚国首都郢城，威震天下！'
  },

  // 7. 桂陵之战
  {
    id: 'battle-guiling',
    name: '桂陵之战',
    year: -354,
    yearDisplay: '前354年',
    dynasty: 'pre-qin',
    dynastyName: '战国',
    type: '以少胜多',
    typeLabel: '🎯 围魏救赵',
    sides: {
      blue: { name: '齐国援赵军', commander: '田忌、孙膑', troops: '齐军精锐' },
      red: { name: '魏国精锐武卒', commander: '庞涓', troops: '围攻赵都邯郸之魏军' }
    },
    strategy: '不直接救援赵都邯郸，而是直奔防务空虚的魏国国都大梁，在归途桂陵设伏截击',
    idioms: ['围魏救赵', '批亢捣虚'],
    impact: '成功解除了赵国危机，开创了兵法中“围点打援、攻其必救”的著名战术范例。',
    storySummary: '魏军狂攻赵国都城邯郸，田忌想带兵去赵国救火。孙膑笑道：“解开乱麻不能硬扯，救赵只需直攻魏都大梁！”庞涓仓皇回援，在桂陵被守候已久的齐军迎头痛击！'
  },

  // 8. 马陵之战
  {
    id: 'battle-maling',
    name: '马陵之战',
    year: -341,
    yearDisplay: '前341年',
    dynasty: 'pre-qin',
    dynastyName: '战国',
    type: '以少胜多',
    typeLabel: '🏹 诱敌伏击',
    sides: {
      blue: { name: '齐国军队', commander: '田忌、孙膑', troops: '齐军主力' },
      red: { name: '魏国庞大精锐', commander: '庞涓、太子申', troops: '魏武卒十万人' }
    },
    strategy: '逐日减灶制造士兵逃亡假象，诱使庞涓丢弃重兵轻骑狂追，在峡谷伏击万弩齐发',
    idioms: ['减灶诱敌'],
    impact: '庞涓兵败自刎，魏国太子申被俘，魏国霸权彻底衰落，齐国成为战国东方霸主。',
    storySummary: '孙膑第一天挖十万人生火灶，第二天五万，第三天三万。庞涓大喜：“齐军怯弱，逃兵过半！”率骑兵日夜兼程追至马陵道。树上刻着“庞涓死于此树之下”，万箭齐发！'
  },

  // 9. 长平之战
  {
    id: 'battle-changping',
    name: '长平之战',
    year: -260,
    yearDisplay: '前260年',
    dynasty: 'pre-qin',
    dynastyName: '战国末期',
    type: '鼎革统一',
    typeLabel: '💀 生死决战',
    sides: {
      blue: { name: '秦军主力', commander: '白起、王龁', troops: '秦军约55万人' },
      red: { name: '赵国主力', commander: '赵括（换下廉颇）', troops: '赵军约45万人' }
    },
    strategy: '反间计诱赵换帅，佯败诱敌深入，出动奇兵两万五千人断赵军粮道后路',
    idioms: ['纸上谈兵'],
    impact: '战国历史上规模最大、伤亡最惨烈的决战。赵国元气大伤再无力抗秦，秦国统一大势不可逆转。',
    storySummary: '廉颇筑垒固守让秦军无可奈何，秦国用反间计使赵王换上只会高谈阔论兵书的赵括。白起佯败将赵军诱入深谷，切断粮道围困46天，赵括中箭身亡，赵军惨败！'
  },

  // 10. 巨鹿之战
  {
    id: 'battle-julu',
    name: '巨鹿之战',
    year: -207,
    yearDisplay: '前207年',
    dynasty: 'qin-han',
    dynastyName: '秦末',
    type: '以少胜多',
    typeLabel: '🔥 破釜沉舟',
    sides: {
      blue: { name: '楚军义军', commander: '项羽', troops: '楚军约5万人' },
      red: { name: '秦朝名将主力', commander: '章邯、王离', troops: '秦军约40万人' }
    },
    strategy: '渡过漳水后凿沉战船、砸碎饭锅、烧毁营帐，断绝退路示必死之心直插秦军要害',
    idioms: ['破釜沉舟', '作壁上观', '以一当十'],
    impact: '项羽九战九捷全歼王离长城军团，迫使章邯率20万人投降，彻底粉碎了秦王朝主力，确立西楚霸王地位。',
    storySummary: '项羽渡过漳河，下令把所有的船只都凿沉，把煮饭的铁锅全砸烂，每人只带三天干粮！楚军个个奋勇拼杀以一当十，诸侯联军在营垒上观战看得目瞪口呆两腿发抖！'
  },

  // 11. 垓下之战
  {
    id: 'battle-gaixia',
    name: '垓下之战',
    year: -202,
    yearDisplay: '前202年',
    dynasty: 'qin-han',
    dynastyName: '楚汉相争',
    type: '鼎革统一',
    typeLabel: '🏹 十面埋伏',
    sides: {
      blue: { name: '汉王刘邦联军', commander: '韩信、彭越、英布', troops: '汉联军约60万人' },
      red: { name: '西楚残军', commander: '项羽', troops: '楚军约10万人' }
    },
    strategy: '五路大军合围，十面埋伏大阵层层设防，夜唱楚歌瓦解楚人士气',
    idioms: ['四面楚歌', '十面埋伏', '霸王别姬'],
    impact: '项羽突围至乌江自刎，楚汉争霸彻底结束。刘邦定陶登基建立享誉世界的大汉王朝。',
    poemLink: {
      title: '《夏日绝句》· 李清照',
      quote: '生当作人杰，死亦为鬼雄。至今思项羽，不肯过江东。'
    },
    storySummary: '汉军将项羽紧紧围困在垓下。深夜四面八方响起了楚国乡音小调，楚军士兵泣不成声纷纷逃散。项羽在帐中与虞姬痛饮诀别，战至最后一人不肯过江东！'
  },

  // 12. 昆阳之战
  {
    id: 'battle-kunyang',
    name: '昆阳之战',
    year: 23,
    yearDisplay: '公元23年',
    dynasty: 'qin-han',
    dynastyName: '新莽汉末',
    type: '以少胜多',
    typeLabel: '🔥 惊天反杀',
    sides: {
      blue: { name: '绿林汉军守城', commander: '刘秀（汉光武帝）', troops: '昆阳城内外约2万人' },
      red: { name: '新莽朝廷主力', commander: '王寻、王邑', troops: '新莽大军42万人（含猛兽阵）' }
    },
    strategy: '固守待援，刘秀带十三骑深夜突围调集精锐，直冲王莽中军帅帐斩杀主将，暴风骤雨助战',
    idioms: ['狂风骤雨', '兵败如山倒'],
    impact: '以两万兵力击溃四十万正规军的军事奇迹，彻底宣判了王莽新朝的覆灭，为东汉光武中兴奠定胜局。',
    storySummary: '王莽派四十二万大军连营百里包围昆阳小城，还带来了虎豹犀牛大象。刘秀带三千敢死队直捣莽军中军斩杀王寻，恰逢天降暴雨狂风吹折屋瓦，莽军自相践踏溺死滍水！'
  },

  // 13. 漠北之战
  {
    id: 'battle-mobei',
    name: '漠北之战',
    year: -119,
    yearDisplay: '前119年',
    dynasty: 'qin-han',
    dynastyName: '西汉',
    type: '长途奔袭',
    typeLabel: '🐎 远征漠北',
    sides: {
      blue: { name: '西汉骑兵铁军', commander: '卫青、霍去病', troops: '骑兵10万、步兵数十万' },
      red: { name: '匈奴单于主力与左贤王', commander: '伊稚斜单于、左贤王', troops: '匈奴各部精骑数十万' }
    },
    strategy: '深入大漠千里追击，大将军卫青武刚车固阵，骠骑将军霍去病轻骑大迂回包抄',
    idioms: ['封狼居胥', '瀚海饮马'],
    impact: '歼灭匈奴精锐近九万人，匈奴远遁漠北，“漠南无王庭”，西汉北部边境得以长期安定，打通丝绸之路。',
    poemLink: {
      title: '《塞下曲》· 卢纶',
      quote: '月黑雁飞高，单于夜遁逃。欲将轻骑逐，大雪满弓刀。'
    },
    storySummary: '年仅二十二岁的霍去病率轻骑渡过大沙漠，追击匈奴两千余里，登上狼居胥山举行祭天大典，留下“封狼居胥”的中国古代武将至高荣耀！'
  },

  // 14. 官渡之战
  {
    id: 'battle-guandu',
    name: '官渡之战',
    year: 200,
    yearDisplay: '公元200年',
    dynasty: 'three-kingdoms-jin',
    dynastyName: '东汉末年',
    type: '以少胜多',
    typeLabel: '🔥 奇袭粮道',
    sides: {
      blue: { name: '曹操军', commander: '曹操、荀彧、张辽', troops: '曹军约2-3万人' },
      red: { name: '袁绍大军', commander: '袁绍、颜良、文丑、淳于琼', troops: '袁军号称11万人' }
    },
    strategy: '听取投诚谋士许攸良策，曹操亲率五千精骑夜袭乌巢，火烧袁绍全部粮草辎重',
    idioms: ['兵以粮为本', '以寡敌众'],
    impact: '曹操以少胜多击垮实力最强大的袁绍，彻底奠定了曹操统一中国北方的根基。',
    storySummary: '两军在官渡相持半年，曹军粮草将尽。谋士许攸来投，曹操光着脚跑出来迎接。当晚曹操假扮袁军突袭乌巢粮仓放火烧天，袁军闻粮尽军心大乱全线溃散！'
  },

  // 15. 赤壁之战
  {
    id: 'battle-chibi',
    name: '赤壁之战',
    year: 208,
    yearDisplay: '公元208年',
    dynasty: 'three-kingdoms-jin',
    dynastyName: '三国前夕',
    type: '水师水战',
    typeLabel: '🌊 火烧赤壁',
    sides: {
      blue: { name: '孙刘抗曹联军', commander: '周瑜、诸葛亮、程普、刘备', troops: '联军约5万人' },
      red: { name: '曹操水陆大军', commander: '曹操', troops: '号称八十万（实约二十余万）' }
    },
    strategy: '利用曹军不习水战、战船首尾相连的弱点，黄盖行诈降计，借东南风风势纵火烧船',
    idioms: ['借东风', '万事俱备，只欠东风', '樯橹灰飞烟灭'],
    impact: '重挫曹操南下统一企图，刘备趁机占领荆州、进军益州，正式奠定了三国鼎立的天下大势。',
    poemLink: {
      title: '《赤壁》· 杜牧',
      quote: '折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。'
    },
    storySummary: '曹操把战船用铁锁连在一起以减小颠簸。老将黄盖乘着满载干柴浸油的蒙冲斗舰诈降，趁着东南大风点火撞向曹军船队。江面火光冲天，把赤壁两岸照得通红！'
  },

  // 16. 夷陵之战
  {
    id: 'battle-yiling',
    name: '夷陵之战',
    year: 222,
    yearDisplay: '公元222年',
    dynasty: 'three-kingdoms-jin',
    dynastyName: '三国',
    type: '以少胜多',
    typeLabel: '🔥 火烧连营',
    sides: {
      blue: { name: '东吴守军', commander: '陆逊', troops: '吴军约5万人' },
      red: { name: '蜀汉伐吴大军', commander: '刘备', troops: '蜀军约5万人' }
    },
    strategy: '坚守不出疲惫蜀军，待盛夏酷暑蜀军依山傍林扎营七百里之际，夜间顺风施以火攻',
    idioms: ['火烧连营', '骄兵必败'],
    impact: '蜀汉元气大伤，刘备败退白帝城托孤。三国鼎立格局进一步固化，魏蜀吴三方进入战略守势。',
    storySummary: '刘备为关羽报仇亲征东吴，连营七百里在树林旁避暑。书生大都督陆逊隐忍数月，等夏天风起时下令每位士兵手持一把茅草点火，蜀汉营寨顺风全烧成一片火海！'
  },

  // 17. 淝水之战
  {
    id: 'battle-feishui',
    name: '淝水之战',
    year: 383,
    yearDisplay: '公元383年',
    dynasty: 'three-kingdoms-jin',
    dynastyName: '东晋十六国',
    type: '以少胜多',
    typeLabel: '🔥 草木皆兵',
    sides: {
      blue: { name: '东晋北府兵', commander: '谢安（后方统帅）、谢玄、谢石', troops: '精锐北府军8万人' },
      red: { name: '前秦多民族军团', commander: '苻坚、苻融', troops: '号称八十余万兵马' }
    },
    strategy: '请前秦军稍稍后撤让出渡河决战阵地，趁其退动之际大喊“秦军败矣”，引发大踩踏',
    idioms: ['草木皆兵', '风声鹤唳', '投鞭断流', '围棋赌墅'],
    impact: '前秦迅速土崩瓦解，北方再次陷入分裂混战；东晋王朝得以偏安江南，江南经济文化得以延续保全。',
    storySummary: '苻坚骄傲宣称投鞭可以截断长江。在八公山望见晋军阵容严整，草木晃动都以为是晋兵。两军临淝水对决，秦军一退就止不住溃散，听到风声鹤鸣都以为是追兵赶来！'
  },

  // 18. 虎牢之战
  {
    id: 'battle-hulao',
    name: '虎牢之战',
    year: 621,
    yearDisplay: '公元621年',
    dynasty: 'sui-tang',
    dynastyName: '唐初统一',
    type: '以少胜多',
    typeLabel: '👑 一战擒双王',
    sides: {
      blue: { name: '唐军玄甲军', commander: '秦王李世民', troops: '围洛阳唐军及阻击精锐约数万人' },
      red: { name: '郑国与夏国联军', commander: '王世充（洛阳）、窦建德（河北援军）', troops: '联军十余万人' }
    },
    strategy: '围点打援，李世民分兵围困王世充，亲率三千黑甲精骑扼守虎牢天险，一举生擒窦建德',
    idioms: ['一举两得', '擒贼先擒王'],
    impact: '一战同时消灭王世充与窦建德两大割据势力，彻底平定中原腹地，为唐朝天下一统奠定决定性胜局。',
    storySummary: '李世民率身穿黑铁甲的玄甲精骑卡在虎牢关要道，窦建德十万大军列阵数里。李世民待其疲惫饮水之机，亲率铁骑直插敌阵大砍帅旗，生擒窦建德，王世充闻讯只得开城投降！'
  },

  // 19. 睢阳之战
  {
    id: 'battle-suiyang',
    name: '睢阳之战',
    year: 757,
    yearDisplay: '公元757年',
    dynasty: 'sui-tang',
    dynastyName: '唐朝安史之乱',
    type: '坚守阻击',
    typeLabel: '🛡️ 血守江淮',
    sides: {
      blue: { name: '唐朝守城忠烈', commander: '张巡、许远', troops: '城中守军不足七千人' },
      red: { name: '安史叛军燕军', commander: '尹子奇', troops: '叛军精锐十三万人' }
    },
    strategy: '草人借箭、地道伏击，弹尽粮绝坚守十个月，历经四百余次激烈交锋',
    idioms: ['忠肝义胆', '视死如归'],
    impact: '以微弱兵力成功阻滞叛军南下达十个月之久，保全了唐朝东南江淮财赋赋税命脉，使郭子仪得以收复两京。',
    poemLink: {
      title: '《正气歌》（节选）· 文天祥',
      quote: '为张睢阳齿，为颜常山舌。'
    },
    storySummary: '张巡率几千守军在睢阳坚守十个月，城中没有箭支，张巡做草人从城墙吊下骗叛军射箭数十万支！张巡许远誓死不降，保全了江淮千万人，为大唐平乱立下第一奇功！'
  },

  // 20. 高平之战
  {
    id: 'battle-gaoping',
    name: '高平之战',
    year: 954,
    yearDisplay: '公元954年',
    dynasty: 'sui-tang',
    dynastyName: '五代十国',
    type: '以少胜多',
    typeLabel: '🔥 帝王亲征',
    sides: {
      blue: { name: '后周禁军', commander: '周世宗柴荣、赵匡胤', troops: '周军精锐' },
      red: { name: '北汉与契丹辽军联军', commander: '北汉世祖刘崇、辽将杨衮', troops: '联军三万余人' }
    },
    strategy: '周军右翼溃败危机时刻，周世宗亲冒箭雨督战，宿卫将领赵匡胤率骑兵死战突击',
    idioms: ['反败为胜', '身先士卒'],
    impact: '不仅彻底击碎了契丹扶植北汉南下的野心，更让柴荣树立了无上军威，成为赵匡胤日后建立宋朝统一的奠基之役。',
    storySummary: '后周大军右翼将领临阵脱逃，局势万分危急！年轻的周世宗柴荣拔剑策马冲向最前线，赵匡胤大喊：“主辱臣死，此时不拼更待何时！”周军见皇帝身先士卒，反败为胜！'
  },

  // 21. 澶州之战
  {
    id: 'battle-chanzhou',
    name: '澶州之战',
    year: 1004,
    yearDisplay: '公元1004年',
    dynasty: 'song-yuan',
    dynastyName: '北宋',
    type: '御驾亲征',
    typeLabel: '🏹 澶渊之盟',
    sides: {
      blue: { name: '北宋禁军守城', commander: '宋真宗、宰相寇准', troops: '宋军数万人' },
      red: { name: '辽国铁骑主力', commander: '辽圣宗、萧太后、萧挞览', troops: '辽军二十万人' }
    },
    strategy: '寇准力谏真宗亲临前线稳定军心，宋军在澶州城头使用大型床弩伏弩射杀辽国主将萧挞览',
    idioms: ['居安思危', '化干戈为玉帛'],
    impact: '促成宋辽双方订立《澶渊之盟》，宋辽开启了长达百余年互不开战、互通互市的和平繁荣时期。',
    storySummary: '辽军二十万骑兵深入逼近黄河，宰相寇准力劝宋真宗登上澶州北城门楼。将士们见到黄色龙旗欢呼声响彻数十里，宋军用床弩一箭射死辽军主帅萧挞览，促成了和平之盟！'
  },

  // 22. 采石之战
  {
    id: 'battle-caishi',
    name: '采石之战',
    year: 1161,
    yearDisplay: '公元1161年',
    dynasty: 'song-yuan',
    dynastyName: '南宋',
    type: '水师水战',
    typeLabel: '🌊 书生破金',
    sides: {
      blue: { name: '南宋溃散残军', commander: '虞允文（文官参谋）', troops: '宋军约1.8万人' },
      red: { name: '金朝跨江大军', commander: '金帝海陵王完颜亮', troops: '金军渡江精锐约15万人' }
    },
    strategy: '以海鳅战船水军优势冲撞敌船，在两岸设伏配合神臂弩与霹雳炮火器反击',
    idioms: ['力挽狂澜', '以弱胜强'],
    impact: '彻底粉碎了金帝完颜亮吞并南宋的狂妄企图，金国内部发生政变完颜亮被杀，保全了南宋江山半壁。',
    storySummary: '宋将逃跑，文官虞允文挺身而出抚慰士兵：“国家养汝三十年，战死报国在此一举！”宋军海鳅船像飞鱼般在江中穿梭，发射霹雳炮炸沉金军船只，书生创造了保家卫国的奇迹！'
  },

  // 23. 襄阳之战
  {
    id: 'battle-xiangyang',
    name: '襄阳之战',
    year: 1267,
    yearDisplay: '公元1267 - 1273年',
    dynasty: 'song-yuan',
    dynastyName: '南宋末期',
    type: '攻坚围城',
    typeLabel: '🏰 六年铁壁',
    sides: {
      blue: { name: '南宋襄樊军民', commander: '吕文焕、张贵、张顺', troops: '襄樊坚守军民数万人' },
      red: { name: '蒙古大军与汉军', commander: '忽必烈、阿术、刘整、阿里海牙', troops: '蒙古陆水军十余万人' }
    },
    strategy: '深沟高垒筑长围锁死汉水补给线，六年围困后动用新型远程投石机“回回炮”轰毁樊城城墙',
    idioms: ['铁壁铜墙', '唇亡齿寒'],
    impact: '襄阳门户沦陷后，南宋长江中游防线全面崩塌，元军顺流直下临安，南宋灭亡进入倒计时。',
    storySummary: '襄阳城坚守了整整六年，宋军水将张顺、张贵冒死顺江冲破重围运送布匹食盐进城壮烈牺牲。直到元军调来巨大无比的回回炮巨石破城，襄樊才遗憾陷落！'
  },

  // 24. 崖山海战
  {
    id: 'battle-yashan',
    name: '崖山海战',
    year: 1279,
    yearDisplay: '公元1279年',
    dynasty: 'song-yuan',
    dynastyName: '南宋末年',
    type: '水师水战',
    typeLabel: '🌊 悲壮殉国',
    sides: {
      blue: { name: '南宋流亡朝廷船队', commander: '张世杰、陆秀夫、幼帝赵昺', troops: '宋军民约20万人、千艘大船' },
      red: { name: '元朝水师', commander: '张弘范、李恒', troops: '元水陆军精锐' }
    },
    strategy: '宋军连环锁船结一字阵固守，元军利用风潮顺势突袭切断淡水，展开四面围攻',
    idioms: ['碧血丹心', '宁死不屈'],
    impact: '南宋最后一支抵抗力量彻底终结，元朝正式统一全国。陆秀夫负帝投海展现了华夏士大夫气节。',
    poemLink: {
      title: '《过零丁洋》· 文天祥',
      quote: '人生自古谁无死？留取丹心照汗青。'
    },
    storySummary: '海战失利大势已去，宰相陆秀夫身穿朝服，对八岁小皇帝说：“国事至此，陛下当为国死！”背负幼帝毅然纵身跳入万顷波涛，十万军民誓死不降随之投海，气壮山河！'
  },

  // 25. 鄱阳湖之战
  {
    id: 'battle-poyang',
    name: '鄱阳湖之战',
    year: 1363,
    yearDisplay: '公元1363年',
    dynasty: 'ming-qing',
    dynastyName: '元末明初',
    type: '水师水战',
    typeLabel: '🌊 巨舰决战',
    sides: {
      blue: { name: '朱元璋军', commander: '朱元璋、徐达、常遇春', troops: '朱军小船快船约20万人' },
      red: { name: '陈友谅大汉水师', commander: '陈友谅', troops: '三层楼船巨舰约60万人' }
    },
    strategy: '以小克大避实击虚，七条装满火药柴草的“火船”借东北风顺水冲入敌军巨舰群纵火',
    idioms: ['以逸待劳', '以巧制拙'],
    impact: '中世纪世界规模最大的水上决战，击毙陈友谅彻底消灭最强对手，朱元璋夺取天下奠定坚实胜局。',
    storySummary: '陈友谅的三层楼船高数丈如同漂浮城堡，将战船铁索连舟。朱元璋造出七艘死士火筏，乘风冲入敌阵焚烧友谅巨舰，湖水尽赤，陈友谅中箭阵亡！'
  },

  // 26. 北京保卫战
  {
    id: 'battle-beijing-defense',
    name: '北京保卫战',
    year: 1449,
    yearDisplay: '公元1449年',
    dynasty: 'ming-qing',
    dynastyName: '明朝',
    type: '坚守阻击',
    typeLabel: '🛡️ 于谦挽澜',
    sides: {
      blue: { name: '明朝军民守城军', commander: '兵部尚书于谦、石亨', troops: '明军集结约22万人' },
      red: { name: '瓦剌也先蒙古铁骑', commander: '也先、脱脱不花', troops: '也先骑兵精锐数万人' }
    },
    strategy: '拥立明景帝消除人质要挟，下达“大军出城闭九门”死战决令，神机营枪炮配合伏击',
    idioms: ['粉身碎骨', '社稷为重'],
    impact: '在土木堡之变英宗被俘的亡国绝境下力挽狂澜，击退蒙古瓦剌骑兵，保全了大明帝国国祚。',
    poemLink: {
      title: '《石灰吟》· 于谦',
      quote: '千锤万凿出深山，烈火焚烧若等闲。粉骨碎身浑不怕，要留清白在人间。'
    },
    storySummary: '明英宗被瓦剌俘虏，京城大乱大臣主张南迁。于谦拍案怒喝：“提议南迁者当斩！”拥立新帝后下令把北京城九门全部紧闭示死战之心，神机营火器轰杀也先后方，瓦剌败走塞外！'
  },

  // 27. 宁远之战
  {
    id: 'battle-ningyuan',
    name: '宁远之战',
    year: 1626,
    yearDisplay: '公元1626年',
    dynasty: 'ming-qing',
    dynastyName: '明末',
    type: '坚守阻击',
    typeLabel: '💥 红夷大炮',
    sides: {
      blue: { name: '明朝辽东守军', commander: '袁崇焕、满桂', troops: '守城明军约2万人' },
      red: { name: '后金八旗铁骑', commander: '努尔哈赤', troops: '后金精锐号称13万人' }
    },
    strategy: '以城固守，以炮制骑，在城头架设十一门西洋红夷大炮，密集轰击后金攻城梯盾',
    idioms: ['凭坚固守', '所向披靡'],
    impact: '取得明军对抗八旗铁骑的首次大捷，打破了后金“不可战胜”的神话，努尔哈赤负伤愤恨而卒。',
    storySummary: '关外重镇纷纷失守，袁崇焕血书誓死守孤城宁远。努尔哈赤八旗重甲骑兵推盾车云梯登城，袁崇焕点燃城头红夷大炮，炮声如雷轰碎盾车，八旗军伤亡惨重退走！'
  },

  // 28. 雅克萨之战
  {
    id: 'battle-yakesa',
    name: '雅克萨之战',
    year: 1685,
    yearDisplay: '公元1685 - 1686年',
    dynasty: 'ming-qing',
    dynastyName: '清朝康熙年间',
    type: '攻坚围城',
    typeLabel: '🛡️ 守卫黑龙江',
    sides: {
      blue: { name: '大清东北守边军', commander: '都统彭春、萨布素、康熙帝亲统', troops: '清水陆水师万余人' },
      red: { name: '沙俄哥萨克侵略军', commander: '托尔布津', troops: '沙俄盘踞雅克萨守军' }
    },
    strategy: '水陆并进长途合围，红衣大炮轰城，围困断绝城中供给，彻底清除沙俄侵略据点',
    idioms: ['寸土不让', '扬我国威'],
    impact: '中国对西方侵略者的首次重大反击胜利，迫使沙俄签订近代第一个平等的边界条约《尼布楚条约》，法律上确立了黑龙江和乌苏里江流域主权。',
    storySummary: '沙俄侵略者盘踞黑龙江雅克萨筑城堡掠夺。康熙帝亲自部署两次围攻雅克萨，神威无敌大将军炮猛烈轰城击毙头目托尔布津，沙俄投降求和，签下《尼布楚条约》！'
  }
];

export const namingKnowledge = {
  title: '帝王名号小百科：庙号、谥号、年号分不清？',
  subtitle: '古人称呼皇帝的讲究与历史奥秘',
  sections: [
    {
      type: 'miao-hao',
      tag: '祖功宗德',
      name: '🏛️ 庙号（如：唐太宗、宋太祖）',
      explanation: '皇帝死后在太庙立牌位受子孙祭祀时的专有名号。',
      rules: '“祖有功而宗有德”：开国皇帝通常称“太祖”或“高祖”，守成发扬光大的明君多称“太宗”或“仁宗”、“世祖”。',
      whenUsed: '唐、宋、元时期的人们最习惯称呼皇帝的庙号。'
    },
    {
      type: 'shi-hao',
      tag: '生前定评',
      name: '📜 谥号（如：汉武帝、隋文帝）',
      explanation: '皇帝死后，朝廷大臣根据其生前品德、政绩功过评定给出的盖棺定论尊号。',
      rules: '表扬的“美谥”：经纬天地曰“文”，克定祸乱曰“武”，敬民贵民曰“景”；批评的“恶谥”：残忍暴虐曰“炀”，荒淫失国曰“幽”。',
      whenUsed: '西汉、东汉时期的皇帝最常用谥号来称呼，如汉文帝、汉武帝。'
    },
    {
      type: 'nian-hao',
      tag: '纪年名号',
      name: '📅 年号（如：康熙、乾隆、永乐）',
      explanation: '皇帝用来纪年的名号。汉武帝首创“建元”年号，从此每一任皇帝即位都会立新年号。',
      rules: '汉唐宋一个皇帝经常因为祥瑞、改元换好几个年号（如武则天一生换了十几个年号）；到了明朝和清朝，皇帝一般“一生只用一个年号”（除明英宗因被俘复辟用过正统、天顺外），因此人们习惯用年号直接称呼明清皇帝！',
      whenUsed: '明朝、清朝时期最习惯用年号称呼皇帝，如永乐帝、康熙帝、乾隆帝。'
    }
  ]
};

export const historyQuizList = [
  {
    id: 'q1',
    question: '成语“破釜沉舟”说的是哪位名将砸碎煮饭铁锅、凿沉战船，在巨鹿之战中以少胜多大败秦军？',
    options: ['项羽', '刘邦', '韩信', '白起'],
    answer: '项羽',
    explanation: '巨鹿之战中，项羽率楚军渡过漳河后“皆沉船，破釜甑，烧庐舍”，断绝一切退路，终于大败秦军主力！'
  },
  {
    id: 'q2',
    question: '“退避三舍”典故发生在春秋时期的哪一场争霸战役中？晋文公主动后撤九十里以兑现承诺。',
    options: ['城濮之战', '长勺之战', '长平之战', '柏举之战'],
    answer: '城濮之战',
    explanation: '晋文公流亡楚国时曾许诺若两国交兵退避九十里（一舍三十里），城濮之战中兑现诺言并大破轻敌冒进的楚军！'
  },
  {
    id: 'q3',
    question: '被杜甫写诗盛赞“忆昔开元全盛日，小邑犹藏万家室”的开元盛世，是由哪位大唐皇帝开创的？',
    options: ['唐玄宗（李隆基）', '唐太宗（李世民）', '唐高祖（李渊）', '唐高宗（李治）'],
    answer: '唐玄宗（李隆基）',
    explanation: '唐玄宗李隆基早期任用姚崇、宋璟，整顿吏治励精图治，开创了经济文化极度繁荣的“开元盛世”。'
  },
  {
    id: 'q4',
    question: '成语“纸上谈兵”出自哪场战役？赵国名将赵奢的儿子赵括只会死背兵书，导致四十余万赵军惨败。',
    options: ['长平之战', '马陵之战', '巨鹿之战', '官渡之战'],
    answer: '长平之战',
    explanation: '长平之战赵王弃用坚守的廉颇，换上空谈兵法的赵括，被秦将白起诱敌包围断绝粮道，赵军元气大伤。'
  },
  {
    id: 'q5',
    question: '“折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。”杜牧这首诗写的是哪场水战？',
    options: ['赤壁之战', '淝水之战', '鄱阳湖之战', '崖山海战'],
    answer: '赤壁之战',
    explanation: '唐代诗人杜牧游历黄州赤壁矶，捡起折断的铁戟，感慨当年周瑜火烧赤壁借东风挫败曹操八十万大军的英勇！'
  },
  {
    id: 'q6',
    question: '中国历史上唯一一位正统女皇帝是谁？她首创殿试与武举制度，立下无字碑任后人评说。',
    options: ['武则天', '吕后', '慈禧太后', '长孙皇后'],
    answer: '武则天',
    explanation: '武则天改国号为周，是中国历史上唯一正统女皇帝，破格提拔寒门人才，为后来的开元盛世打下坚实基础。'
  },
  {
    id: 'q7',
    question: '中国历史上在位时间最长（整整61年）、八岁登基十四岁亲政、两战雅克萨保卫边疆的清朝皇帝是？',
    options: ['康熙帝（玄烨）', '乾隆帝（弘历）', '雍正帝（胤禛）', '顺治帝（福临）'],
    answer: '康熙帝（玄烨）',
    explanation: '康熙帝爱新觉罗·玄烨在位整整61年，平定三藩、收复台湾、亲征噶尔丹、反击沙俄，被尊为千古一帝。'
  },
  {
    id: 'q8',
    question: '于谦在土木堡之变皇帝被俘的绝境下，写下《石灰吟》力挽狂澜击退瓦剌大军，取得哪场战役的胜利？',
    options: ['北京保卫战', '宁远之战', '采石之战', '澶州之战'],
    answer: '北京保卫战',
    explanation: '1449年兵部尚书于谦拥立新帝、关闭城门九门示决死之心，用火器重创也先骑兵，成功保卫大明京师！'
  }
];
