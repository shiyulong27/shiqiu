/**
 * 生物奥秘与神奇动物王国核心数据
 * 专为中小学生与亲子通识启智打造：涵盖生命之树、五大动物类群、珍稀国宝、神奇植物与微观人体奥秘
 */

export const biologyData = {
  meta: {
    title: "生命之树 · 生物奥秘与神奇动物王国",
    subtitle: "探索地球38亿年演化奇迹，从国宝大熊猫到深海巨兽，从神奇捕蝇草到微观人体奥秘",
    motto: "万物皆有灵，天地与我并生，而万物与我为一",
    stats: {
      animalCount: 22,
      plantCount: 5,
      humanBodySystems: 4,
      quizCount: 8
    }
  },

  categoryNav: [
    { id: "all", name: "全部物种", icon: "🌍", desc: "生机盎然的地球生命圈" },
    { id: "mammals", name: "哺乳动物", icon: "🐼", desc: "恒温胎生哺乳的陆地霸主" },
    { id: "birds", name: "天空飞禽", icon: "🦅", desc: "长有羽翼翱翔天际的演化精灵" },
    { id: "reptilesAmphibians", name: "两栖爬行", icon: "🐊", desc: "从古生代走向陆地的远古先驱" },
    { id: "marineLife", name: "深海奥秘", icon: "🐋", desc: "浩瀚蔚蓝深处的生命史诗" },
    { id: "insects", name: "昆虫王国", icon: "🦋", desc: "地球上数量最庞大的微观帝国" },
    { id: "botany", name: "神奇植物", icon: "🌿", desc: "光合作用滋养地球的绿色奇迹" },
    { id: "humanBody", name: "人体奥秘", icon: "🫀", desc: "自身精密运转的生命微观宇宙" }
  ],

  animals: [
    {
      id: "giant-panda",
      name: "大熊猫",
      pinyin: "dà xióng māo",
      englishName: "Giant Panda",
      latinName: "Ailuropoda melanoleuca",
      category: "mammals",
      emoji: "🐼",
      badge: "华夏国宝 · 伞护种",
      protectionLevel: "国家一级重点保护野生动物 / IUCN易危(VU)",
      habitat: "中国四川、陕西秦岭、甘肃南部高山竹林（海拔1200-3500米）",
      diet: "99%为竹子（偶尔吃鸟蛋、小竹鼠等肉食）",
      features: "黑白相间的毛色、圆滚滚的身体、标志性黑眼圈，手掌长有特化的'伪拇指'方便抓握竹竿。",
      habits: "每天需花费10-16个小时吃下12-38公斤竹子；独居，嗅觉极度灵敏；幼崽出生时仅约100克重，像小粉老鼠。",
      funFact: "大熊猫在分类学上属于食肉目熊科！它们的消化道依然保持食肉动物的短肠特征，所以只能吸收竹子少部分营养，必须靠不停地吃来维持能量！",
      accentColor: "#10b981",
      svgTheme: "panda"
    },
    {
      id: "snow-leopard",
      name: "雪豹",
      pinyin: "xuě bào",
      englishName: "Snow Leopard",
      latinName: "Panthera uncia",
      category: "mammals",
      emoji: "🐆",
      badge: "雪山之王 · 高原隐士",
      protectionLevel: "国家一级重点保护野生动物 / IUCN易危(VU)",
      habitat: "青藏高原、天山、阿尔泰山等高寒裸岩与雪线附近（海拔3000-5500米）",
      diet: "岩羊、北山羊、盘羊、高原鼠兔",
      features: "灰白色皮毛带有黑色玫瑰花结斑纹，脚掌宽大长有密毛如同天然雪地靴，尾巴粗长几乎与体长相当（达1米）。",
      habits: "夜行性、独居；粗大的尾巴在陡峭悬崖跳跃时保持平衡，寒冷冬夜睡觉时还能像毛毯一样盖住口鼻保温。",
      funFact: "雪豹因为舌骨骨化不完全，所以它不能像狮子老虎那样大声咆哮（Roar），只能发出呼噜呼噜（Purr）或喵呜声！",
      accentColor: "#64748b",
      svgTheme: "snow-leopard"
    },
    {
      id: "siberian-tiger",
      name: "东北虎",
      pinyin: "dōng běi hǔ",
      englishName: "Siberian Tiger / Amur Tiger",
      latinName: "Panthera tigris altaica",
      category: "mammals",
      emoji: "🐅",
      badge: "百兽之王 · 林海雪原霸主",
      protectionLevel: "国家一级重点保护野生动物 / IUCN濒危(EN)",
      habitat: "中国东北温带针阔针叶混交林（东北虎豹国家公园）、俄罗斯远东",
      diet: "野猪、马鹿、狍子、梅花鹿",
      features: "现存体型最大的猫科动物，雄性体重可达250-300公斤，毛色较浅呈淡黄色，冬毛长而浓密。",
      habits: "独行侠，活动范围可达数百平方公里；额头上的黑纹酷似汉字'王'字；擅长游泳，但极少爬大树。",
      funFact: "每一只老虎身上的条纹都是独一无二的，就像人类的指纹一样！哪怕把老虎的毛剃光，它的皮肤上依然有黑色的条纹图案！",
      accentColor: "#f97316",
      svgTheme: "tiger"
    },
    {
      id: "blue-whale",
      name: "蓝鲸",
      pinyin: "lán jīng",
      englishName: "Blue Whale",
      latinName: "Balaenoptera musculus",
      category: "mammals",
      emoji: "🐋",
      badge: "地球之最 · 史诗巨兽",
      protectionLevel: "国家一级重点保护野生动物 / IUCN濒危(EN)",
      habitat: "全球四大洋寒温带冷水海域至热带越冬海域",
      diet: "微小的南极磷虾（每天吞食达4-8吨磷虾）",
      features: "地球有史以来最大的动物！体长可达33米，体重突破180吨；舌头重达2.7吨（相当于一头大象的重量），心脏有一辆小汽车那么大。",
      habits: "须鲸类，滤食进食；喷出的水柱高达9-12米；发出低频次声波（可达188分贝），声音能在深海中传播上千公里。",
      funFact: "刚出生的蓝鲸宝宝每天就要喝下400升母乳，每小时体重就增加4公斤，是自然界生长速度最快的生命奇迹！",
      accentColor: "#0284c7",
      svgTheme: "whale"
    },
    {
      id: "asian-elephant",
      name: "亚洲象",
      pinyin: "yà zhōu xiàng",
      englishName: "Asian Elephant",
      latinName: "Elephas maximus",
      category: "mammals",
      emoji: "🐘",
      badge: "陆地巨无霸 · 森林工程师",
      protectionLevel: "国家一级重点保护野生动物 / IUCN濒危(EN)",
      habitat: "中国云南西双版纳、普洱热带雨林、季雨林",
      diet: "芭蕉、竹笋、草本植物、树皮、盐渍土",
      features: "亚洲现存最大陆生动物，长有极其灵巧的鼻子（长鼻上没有骨骼，包含上万块肌肉），雌象通常不长外露长牙。",
      habits: "典型的母系家族社会，由年长的母象首领带队迁徙；记忆力惊人，能牢记数十年前的水源地与迁徙路线。",
      funFact: "大象虽然体重数吨，但走起路来却悄无声息！因为它们的脚底下有一层厚厚的天然海绵状脂肪垫，能吸收所有震动与脚步声！",
      accentColor: "#8b5cf6",
      svgTheme: "elephant"
    },
    {
      id: "golden-monkey",
      name: "川金丝猴",
      pinyin: "chuān jīn sī hóu",
      englishName: "Golden Snub-nosed Monkey",
      latinName: "Rhinopithecus roxellana",
      category: "mammals",
      emoji: "🐒",
      badge: "灵动仙客 · 高山神猴",
      protectionLevel: "国家一级重点保护野生动物 / IUCN濒危(EN)",
      habitat: "四川、陕西秦岭、甘肃、湖北神农架的高山森林（海拔1500-3300米）",
      diet: "地衣、苔藓、树皮、嫩叶、野果、昆虫",
      features: "身披金光闪闪的长披风状背毛，面孔呈天蓝色，鼻孔朝天仰起（鼻骨退化）。",
      habits: "群居生活，群体规模可达上百只；在寒冬常聚拢互相梳毛抱团取暖；奔跑跳跃于数十米高林冠层如履平地。",
      funFact: "川金丝猴的鼻子为什么朝天长？科学研究发现，这是为了适应高寒缺氧环境，短小的鼻腔可以避免在高山严寒中被冻伤！",
      accentColor: "#eab308",
      svgTheme: "monkey"
    },

    // 鸟类
    {
      id: "red-crowned-crane",
      name: "丹顶鹤",
      pinyin: "dān dǐng hè",
      englishName: "Red-crowned Crane",
      latinName: "Grus japonensis",
      category: "birds",
      emoji: "🦩",
      badge: "吉祥仙鹤 · 湿地精灵",
      protectionLevel: "国家一级重点保护野生动物 / IUCN易危(VU)",
      habitat: "黑龙江扎龙、吉林向海、江苏盐城等开阔湿地沼泽",
      diet: "鱼虾、水生昆虫、软体动物、水生植物根茎",
      features: "体长约1.5米，双翼展开达2.4米；全身洁白，颈部和飞羽黑色，头顶裸露皮肤充血呈现鲜红色丹顶。",
      habits: "一夫一妻制，对伴侣忠贞不渝；求偶时跳起曼妙翩跹的仙鹤双人舞，伴随高亢悠扬的鸣叫声响彻云霄。",
      funFact: "丹顶鹤头顶那抹红色并不是红色的羽毛，而是因为缺少羽毛、密布着毛细血管的裸露头皮！当它兴奋或愤怒时，血液加速流淌，颜色会变得格外鲜红！",
      accentColor: "#ef4444",
      svgTheme: "crane"
    },
    {
      id: "golden-eagle",
      name: "金雕",
      pinyin: "jīn diāo",
      englishName: "Golden Eagle",
      latinName: "Aquila chrysaetos",
      category: "birds",
      emoji: "🦅",
      badge: "猛禽之霸 · 空中战斗机",
      protectionLevel: "国家一级重点保护野生动物 / IUCN无危(LC)",
      habitat: "高原山地、悬崖峡谷、荒漠森林交错带",
      diet: "野兔、旱獭、野鸡，甚至捕食幼鹿、岩羊幼崽",
      features: "双翼展开超2米，头后与颈部有金黄色羽毛，爪力极为惊人（握力可捏碎猎物头骨），视力是人类的8倍。",
      habits: "高空盘旋巡猎；发现猎物时以时速高达300公里的俯冲速度直插猎物，犹如空中闪电。",
      funFact: "金雕不仅视力超强，能看清两公里外草地里奔跑的小兔子，而且它们两只眼睛前方视野重叠，具有完美的立体三维深度测距能力！",
      accentColor: "#b45309",
      svgTheme: "eagle"
    },
    {
      id: "emperor-penguin",
      name: "帝企鹅",
      pinyin: "dì qǐ é",
      englishName: "Emperor Penguin",
      latinName: "Aptenodytes forsteri",
      category: "birds",
      emoji: "🐧",
      badge: "极地勇士 · 伟大的企鹅爸爸",
      protectionLevel: "IUCN近危(NT)",
      habitat: "南极大陆极地严寒冰原与周边冰海",
      diet: "南极磷虾、乌贼、小鱼",
      features: "现存企鹅中体型最大，身高可达1.2米，体重超40公斤；颈部两侧有优雅的金黄色耳斑，羽毛致密防风防水。",
      habits: "在南极零下40度的暴风雪极夜中繁殖；企鹅爸爸在脚背上用育儿袋孵蛋65天，期间不吃不喝体重减轻近一半！",
      funFact: "帝企鹅虽然是鸟类但不会飞，但它们在水下却像喷气飞机一样敏捷，潜水深度可达560米，闭气时间超过20分钟！",
      accentColor: "#0ea5e9",
      svgTheme: "penguin"
    },
    {
      id: "hummingbird",
      name: "蜂鸟",
      pinyin: "fēng niǎo",
      englishName: "Hummingbird",
      latinName: "Trochilidae",
      category: "birds",
      emoji: "🐦",
      badge: "微雕飞侠 · 悬停大师",
      protectionLevel: "CITES附录二重点保护",
      habitat: "美洲热带雨林、温带花海与高山灌丛",
      diet: "花蜜、微小花间昆虫",
      features: "世界上最小的鸟类（吸蜜蜂鸟仅重1.8克，比一枚一枚硬币还轻！），羽毛在阳光下散发虹彩金属光泽。",
      habits: "飞行时翅膀每秒振动高达50-80次，心跳每分钟可达1000次；新陈代谢极快，每天需要摄入相当于自身体重数倍的花蜜。",
      funFact: "蜂鸟是自然界唯一能够倒着飞、侧着飞甚至肚皮朝上悬停翻滚的鸟类！它的翅膀关节能够像直升机旋翼一样360度旋转！",
      accentColor: "#ec4899",
      svgTheme: "hummingbird"
    },

    // 爬行两栖
    {
      id: "chinese-alligator",
      name: "扬子鳄",
      pinyin: "yáng zǐ è",
      englishName: "Chinese Alligator",
      latinName: "Alligator sinensis",
      category: "reptilesAmphibians",
      emoji: "🐊",
      badge: "两亿年活化石 · 中华鼍龙",
      protectionLevel: "国家一级重点保护野生动物 / IUCN极危(CR)",
      habitat: "长江中下游（安徽宣城、浙江长兴等河流淡水湿地）",
      diet: "鱼类、蚌类、田螺、蛙类、小水禽",
      features: "体型较小，体长约1.5米；头部扁平吻短钝，背部覆有坚硬坚固的骨板鳞片；性情温顺，极少主动攻击人。",
      habits: "冷血变温动物，每年10月至次年4月进入地底深邃复杂的泥洞冬眠；古籍中的'鼍'（tuó）即扬子鳄。",
      funFact: "扬子鳄打洞技术堪称一绝！它们在河岸边挖掘的地下洞穴四通八达，内部有通气孔、戏水池、居室和逃生出口，甚至能防洪防冻！",
      accentColor: "#059669",
      svgTheme: "alligator"
    },
    {
      id: "chameleon",
      name: "变色龙",
      pinyin: "biàn sè lóng",
      englishName: "Chameleon",
      latinName: "Chamaeleonidae",
      category: "reptilesAmphibians",
      emoji: "🦎",
      badge: "伪装魔术师 · 独立双眼",
      protectionLevel: "CITES附录二保护",
      habitat: "非洲马达加斯加岛、热带雨林与干燥灌木丛",
      diet: "蟋蟀、螳螂、蝗虫、飞蛾",
      features: "双眼可各自独立360度旋转观察不同方向；舌头弹射长度可达体长的两倍；脚趾特化成抓握树枝的前二后三结构。",
      habits: "变色并非只为伪装隐蔽，更主要用于调节体温和表达情绪（如发怒变黑、示爱变鲜艳亮丽）。",
      funFact: "变色龙弹射长舌头的速度快如出膛子弹，从零加速到时速96公里只需要1/100秒，猎物根本来不及反应就被舌尖的吸盘粘走了！",
      accentColor: "#14b8a6",
      svgTheme: "chameleon"
    },
    {
      id: "poison-dart-frog",
      name: "箭毒蛙",
      pinyin: "jiàn dú wā",
      englishName: "Poison Dart Frog",
      latinName: "Dendrobatidae",
      category: "reptilesAmphibians",
      emoji: "🐸",
      badge: "警戒色王者 · 丛林小毒囊",
      protectionLevel: "CITES附录重点保护",
      habitat: "中南美洲热带雨林落叶层与附生植物叶腋水洼",
      diet: "微小蚂蚁、白蚁、螨虫",
      features: "体型娇小（仅2-6厘米），但体表颜色极其惊艳炫目（荧光黄、电光蓝、烈焰红），这是警告捕食者'我有剧毒'的警戒色。",
      habits: "日行性，常背着孵化后的小蝌蚪爬上数十米高的大树，把蝌蚪放到凤梨科植物叶心的天然'蓄水池'中精心抚育。",
      funFact: "黄金箭毒蛙体内分泌的蛙毒素极为霸道，仅仅1毫克毒素就足以杀死上万只小老鼠！但在人工饲养环境下失去特定野外蚂蚁食物，它们就不会产生毒素了！",
      accentColor: "#facc15",
      svgTheme: "frog"
    },

    // 海洋生物
    {
      id: "great-white-shark",
      name: "大白鲨",
      pinyin: "dà bái shā",
      englishName: "Great White Shark",
      latinName: "Carcharodon carcharias",
      category: "marineLife",
      emoji: "🦈",
      badge: "顶级掠食者 · 猎手感官",
      protectionLevel: "IUCN易危(VU) / CITES附录二",
      habitat: "各大洋温带与亚热带沿岸及开阔大洋",
      diet: "海豹、海狮、海豚、大型鱼类",
      features: "流线型躯体，口中长有数排锋利三角形锯齿状牙齿；头部有劳伦氏壶腹，能探测到百万分之一伏特的微弱生物电场。",
      habits: "必须终生不停向前游动，让海水通过鳃裂呼吸氧气；牙齿一旦脱落，后排牙齿会像传送带一样立刻向前替补，一生替换上万颗牙齿！",
      funFact: "大白鲨的嗅觉灵敏到不可思议，它们在开阔海洋中能够闻到几公里外稀释在数百万升海水中的仅仅一滴血液的味道！",
      accentColor: "#3b82f6",
      svgTheme: "shark"
    },
    {
      id: "giant-squid",
      name: "大王乌贼",
      pinyin: "dà wáng wū zéi",
      englishName: "Giant Squid",
      latinName: "Architeuthis dux",
      category: "marineLife",
      emoji: "🦑",
      badge: "深海神秘克拉肯 · 无脊椎霸主",
      protectionLevel: "IUCN无危(LC)",
      habitat: "全球各大洋300至1000米黑暗冰冷深海中层",
      diet: "深海鱼类、其他头足类",
      features: "体长可达10-13米，拥有动物界最大的眼睛（直径达27厘米，像餐盘一样大！），触手长满带尖锐齿环的吸盘。",
      habits: "潜行于黑暗无光的深海中，用巨大眼睛捕捉微弱生物荧光；唯一天敌是潜入深海捕食的抹香鲸，二者经常爆发深海生死对决。",
      funFact: "大王乌贼流淌的血液是蓝色的！因为它们的血液中不是像我们一样使用铁元素的血红蛋白，而是使用铜元素的血蓝蛋白来运送氧气！",
      accentColor: "#6366f1",
      svgTheme: "squid"
    },
    {
      id: "clownfish",
      name: "小丑鱼",
      pinyin: "xiǎo chǒu yú",
      englishName: "Clownfish / Anemonefish",
      latinName: "Amphiprioninae",
      category: "marineLife",
      emoji: "🐠",
      badge: "珊瑚礁共生典范 · 海底尼莫",
      protectionLevel: "IUCN无危(LC)",
      habitat: "太平洋与印度洋温暖珊瑚礁浅海",
      diet: "藻类、浮游桡足类、海葵吃剩的食物碎渣",
      features: "鲜艳橘红色身躯上环绕三道洁白斑带，体表覆盖一层特殊的黏液，使它不会被毒性强烈的海葵触手刺伤。",
      habits: "与有毒海葵建立牢不可破的互利共生联盟：海葵为小丑鱼提供安全避风港，小丑鱼则为海葵清理寄生虫、引诱猎物并扇动水流增氧。",
      funFact: "小丑鱼全都是雄性先熟雌雄同体！在一个海葵群体里，体型最大的是雌鱼首领，第二大的是配偶雄鱼，如果雌鱼不幸离开，领头雄鱼就会转变为雌鱼统领全家！",
      accentColor: "#ea580c",
      svgTheme: "clownfish"
    },

    // 昆虫
    {
      id: "honeybee",
      name: "蜜蜂",
      pinyin: "mì fēng",
      englishName: "Honeybee",
      latinName: "Apis mellifera",
      category: "insects",
      emoji: "🐝",
      badge: "授粉工程大师 · 甜蜜制造者",
      protectionLevel: "生态关键种（农作物与野生植物生命线）",
      habitat: "除南极洲外的全球农田、果园、花海森林",
      diet: "花蜜（提供糖分能量）与花粉（提供蛋白质）",
      features: "后足长有精巧的'花粉篮'，身上覆有密毛能吸附花粉；六角形蜂巢结构被誉为自然界力学与空间效率的最高奇迹。",
      habits: "高度社会化群居（蜂王、工蜂、雄蜂分工严密）；通过发明神奇的'八字摇摆舞'向同伴精确传递数百米外花源的方向与距离！",
      funFact: "全球人类三分之一以上的粮食和水果蔬菜，都需要依靠蜜蜂等昆虫授粉！如果没有蜜蜂，苹果、草莓、番茄和坚果都将不复存在！",
      accentColor: "#d97706",
      svgTheme: "bee"
    },
    {
      id: "blue-morpho",
      name: "大蓝闪蝶",
      pinyin: "dà lán shǎn dié",
      englishName: "Blue Morpho Butterfly",
      latinName: "Morpho peleides",
      category: "insects",
      emoji: "🦋",
      badge: "丛林蓝宝石 · 物理结构色奇迹",
      protectionLevel: "热带雨林旗舰昆虫",
      habitat: "中南美洲热带雨林林冠层",
      diet: "腐烂发酵热带水果汁液、树汁、露水",
      features: "展翅达15-20厘米，翅膀正面呈现璀璨夺目、随视角变幻的金属电光蓝，翅膀背面却是不起眼的枯叶棕褐色带有假眼斑。",
      habits: "白天在树冠高空闪烁滑翔；飞行时翅膀开合，一会儿电光闪闪一会儿隐匿消失，让捕食的鸟类产生视觉错觉无从下嘴。",
      funFact: "大蓝闪蝶的翅膀上根本没有一滴蓝色色素！那惊艳的幽蓝其实是纳米级的微观鳞片结构，经过物理光的反射与干涉形成的'结构色'，历经千万年也不会褪色！",
      accentColor: "#2563eb",
      svgTheme: "butterfly"
    }
  ],

  // 神奇植物世界
  botany: [
    {
      id: "ginkgo",
      name: "银杏",
      pinyin: "yín xìng",
      englishName: "Ginkgo Biloba",
      badge: "亿年孑遗 · 植物界大熊猫",
      features: "两亿七千万年前侏罗纪时代的孑遗物种，扇形叶片，秋季金黄灿烂，雌雄异株。",
      importance: "生命力顽强，具极高药用、观赏与抗辐射价值，见证了恐龙的崛起与灭亡。",
      funFact: "广岛原子弹爆炸中心附近，次年春天最先从焦土中萌发新绿的正是几株银杏树！"
    },
    {
      id: "venus-flytrap",
      name: "捕蝇草",
      pinyin: "bǔ yíng cǎo",
      englishName: "Venus Flytrap",
      badge: "食虫奇侠 · 植物猎手",
      features: "叶片末端特化成类似贝壳的捕虫夹，内侧长有敏感的感觉刚毛，分泌蜜汁引诱昆虫。",
      importance: "生长在氮磷匮乏的酸性泥炭沼泽中，演化出消化昆虫补充自身营养的独特生存策略。",
      funFact: "捕虫夹具有记忆能力！只有当昆虫在20秒内连续碰触两次触毛，夹子才会在0.1秒内迅速闭合，防止被一滴雨水白白骗闭！"
    },
    {
      id: "mimosa",
      name: "含羞草",
      pinyin: "hán xiū cǎo",
      englishName: "Mimosa Pudica",
      badge: "会害羞的小草 · 敏捷感应",
      features: "二回羽状复叶，受到手指碰触或振动时，小叶会成对快速闭合，叶柄同时下垂倒伏。",
      importance: "叶枕部位富含水分，受刺激时细胞膜离子迅速透出导致水分流失，形成膨压变化。",
      funFact: "在热带暴风雨来临前，含羞草闭合叶片能有效减少风雨打击与食草动物的啃食！"
    },
    {
      id: "metasequoia",
      name: "水杉",
      pinyin: "shuǐ shān",
      englishName: "Dawn Redwood",
      badge: "活化石发现奇迹 · 华夏绿色国宝",
      features: "中国植物学家于1941年在湖北利川首次发现野生存活株，此前科学界一直以为水杉已在数百万年前绝种。",
      importance: "被列为世界自然保护联盟极危物种，如今已成功引种繁育至全球50多个国家绿化造林。",
      funFact: "水杉每年深秋初冬其羽状小叶会变成锈红色并随小枝一同脱落，春天再换上嫩绿新装！"
    },
    {
      id: "giant-sequoia",
      name: "巨杉（雪曼将军树）",
      pinyin: "jù shān",
      englishName: "Giant Sequoia",
      badge: "地球体积最大树木 · 森林巨人",
      features: "树高超过83米，底部树干直径超11米，树龄高达2300-2700年，体积近1500立方米。",
      importance: "厚达几十厘米的树皮富含单宁酸，天然防火防虫，树冠顶端能从太平洋海雾中吸收水分。",
      funFact: "巨杉的球果竟需要依靠山火烘烤热量才能爆开外壳，让种子掉落在被野火清扫过的肥沃灰烬中发芽！"
    }
  ],

  // 人体微观生命奥秘
  humanBody: [
    {
      id: "skeletal-system",
      name: "骨骼支撑系统",
      subtitle: "206块坚固的人体钢筋骨架",
      features: "成年人体共有206块骨骼，支撑身体、保护内部脆弱脏器（如颅骨保护大脑、肋骨保护心肺），同时骨髓每天制造数十亿血细胞。",
      funFact: "刚出生的小婴儿其实有300多块骨头，随着长大，很多小骨骼（如骶骨、头骨缝）逐渐融合，成年后就变成了206块！"
    },
    {
      id: "circulatory-system",
      name: "血液循环系统",
      subtitle: "永不停歇的人体生命高速公路",
      features: "心脏像一个不知疲倦的强力水泵，每天跳动约10万次，泵出近8000升血液；体内血管总长度串联起来超10万公里，可绕地球赤道两圈半！",
      funFact: "红细胞在人体血管里跑一圈完成运送氧气任务，平均只需要短短60秒！"
    },
    {
      id: "nervous-system",
      name: "神经与大脑宇宙",
      subtitle: "860亿神经元的智慧总司令部",
      features: "人类大脑由大约860亿个神经元组成，神经信号通过突触以电脉冲和化学物质传递，速度最高可达时速400公里！",
      funFact: "大脑虽然只占人体体重的2%左右，但却消耗着人体整整20%的氧气与能量，是机体最贪吃的器官！"
    },
    {
      id: "immune-system",
      name: "免疫防御卫士",
      subtitle: "24小时巡逻的人体健康护卫军",
      features: "白细胞、吞噬细胞和淋巴细胞组成人体防线，每天清除成千上万入侵体内的细菌、病毒和变异细胞。",
      funFact: "当你感冒发烧时，其实是免疫系统在指挥下丘脑调高体温，高温能抑制病毒繁殖并激活白细胞更强战斗力！"
    }
  ],

  // 亲子生物挑战题库
  quiz: [
    {
      id: "q1",
      question: "大熊猫在生物分类学上属于哪一个目？",
      options: ["食草目", "啮齿目", "食肉目", "灵长目"],
      answerIndex: 2,
      explanation: "大熊猫在生物分类学上属于食肉目熊科！它们的祖先是食肉的，虽然现在99%吃竹子，但消化道结构依然保持食肉动物的特征。"
    },
    {
      id: "q2",
      question: "世界上体型最大、有史以来最庞大的动物是什么？",
      options: ["非洲象", "霸王龙", "易碎双腔龙", "蓝鲸"],
      answerIndex: 3,
      explanation: "蓝鲸是地球有史以来最大的动物，体长可突破33米，体重达180吨，连最大的恐龙在它面前也相形见绌！"
    },
    {
      id: "q3",
      question: "哪种鸟类是自然界唯一能够倒着飞、侧着飞甚至悬停翻滚的？",
      options: ["蜂鸟", "金雕", "雨燕", "游隼"],
      answerIndex: 0,
      explanation: "蜂鸟的翅膀关节能够像直升机旋翼一样360度旋转，每秒振动50-80次，是唯一能自如倒退飞行的鸟类。"
    },
    {
      id: "q4",
      question: "丹顶鹤头顶鲜艳的红色其实是什么？",
      options: ["红色的羽毛", "涂上的花汁", "无羽毛且充血的裸露头皮", "头顶的特殊宝石"],
      answerIndex: 2,
      explanation: "丹顶鹤的'丹顶'并不是羽毛，而是因为头顶缺少羽毛，皮下密布的毛细血管在兴奋时充血形成的天然艳红色。"
    },
    {
      id: "q5",
      question: "变色龙弹射舌头捕食猎物的极速加速过程需要多久？",
      options: ["约1秒", "约半秒", "约1/100秒", "约1分钟"],
      answerIndex: 2,
      explanation: "变色龙舌头弹射极快，从静止加速到时速96公里仅需约1/100秒，是生物界最迅猛的捕食武器之一。"
    },
    {
      id: "q6",
      question: "大蓝闪蝶翅膀上耀眼的电光蓝色在科学上属于什么原理？",
      options: ["蓝色化学色素", "物理微纳结构色", "荧光菌寄生", "海水染色"],
      answerIndex: 1,
      explanation: "大蓝闪蝶没有蓝色色素，其翅膀鳞片具有精细的纳米级阶梯结构，使光发生干涉与反射形成物理结构色，永不褪色。"
    },
    {
      id: "q7",
      question: "成年人体一共有多少块骨骼？",
      options: ["108块", "206块", "365块", "500块"],
      answerIndex: 1,
      explanation: "成年人体共有206块骨骼，婴儿出生时约有300多块，随后部分小骨逐渐愈合固定为206块。"
    },
    {
      id: "q8",
      question: "被称为'植物界大熊猫'、经历两亿多年未曾灭绝的孑遗活化石是哪种植物？",
      options: ["向日葵", "仙人掌", "银杏", "郁金香"],
      answerIndex: 2,
      explanation: "银杏是侏罗纪时代的孑遗物种，至今已在地球上生存超过2.7亿年，被誉为植物界的活化石与绿色大熊猫。"
    }
  ]
};
