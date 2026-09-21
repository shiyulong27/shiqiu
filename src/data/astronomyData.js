/**
 * 十丘通识 · 浩瀚星空与天文学全景数据库
 * 涵盖：
 * 1. 东方古代天文学：三垣、四象二十八宿、古代观星重器与客星文献
 * 2. 现代全天星座：四季星空标志三角形/四边形、北斗寻北极星、黄道十二星座图谱
 * 3. 太阳系与深空奥秘：八大行星详细参数、月相盈亏阶段、日月食与流星雨
 * 4. 天文小院士亲子挑战题库
 */

// 1. 东方古代天文学 (Ancient Chinese Astronomy)
export const ancientAstronomyData = {
  // 三垣 (Three Enclosures)
  threeEnclosures: [
    {
      id: 'ziwei',
      name: '紫微垣',
      pinyin: 'Zǐ Wēi Yuán',
      alias: '中天太微紫宫 · 天帝皇居',
      starsCount: '39个星官，约160余颗星',
      position: '北极中天，围绕北极星，终年不落',
      role: '在古代被视为天帝的皇宫居所，象征至高无上的皇权与中央枢纽。',
      coreStars: ['北极五星（太子、帝星、庶子）', '北斗七星（天枢、天璇、天玑、天权、玉衡、开阳、摇光）', '四辅', '勾陈（含现代北极星小熊座α）'],
      folklore: '古人夜观星象，发现整片星空都在围绕北极星旋转，故称其为“紫微星”，象征“居其所而众星拱之”。',
      icon: '👑',
      tag: '中天帝阙'
    },
    {
      id: 'taiwei',
      name: '太微垣',
      pinyin: 'Tài Wēi Yuán',
      alias: '天庭朝堂 · 文臣武将内阁',
      starsCount: '20个星官，约78颗星',
      position: '紫微垣之南，处在现代狮子座、室女座与后发座之间',
      role: '象征天帝听政处理国家政务的朝廷公署，文武百官分列左右。',
      coreStars: ['五帝座（太微主星）', '三公（太尉、司徒、司空）', '九卿', '左右执法', '从官与郎将'],
      folklore: '春夜星空中，太微垣的群星如同文武群臣簇拥着五帝座，古人常通过观测太微垣的明暗来预测朝政与天下大事。',
      icon: '🏛️',
      tag: '朝政官署'
    },
    {
      id: 'tianshi',
      name: '天市垣',
      pinyin: 'Tiān Shì Yuán',
      alias: '天上市肆 · 平民百姓商贸百工',
      starsCount: '19个星官，约87颗星',
      position: '紫微垣东南，处在现代蛇夫座、武仙座与巨蛇座之间',
      role: '象征天界的大型都市与繁华集市，代表各诸侯国平民百姓的贸易、度量衡与百工生产。',
      coreStars: ['帝座（天市主星）', '市楼（市场管理指挥所）', '车肆（车马市场）', '斛与斗（粮食度量衡）', '东西藩垣（以战国齐赵魏韩等诸侯国命名）'],
      folklore: '夏夜星空下，天市垣群星围绕市楼分布，宛如热闹的人间坊市，体现了中国古人“天人合一”的浪漫社会观。',
      icon: '🏮',
      tag: '人间市集'
    }
  ],

  // 四象与二十八宿 (Four Symbols and Twenty-Eight Mansions)
  fourSymbols: [
    {
      id: 'qinglong',
      name: '东方青龙',
      pinyin: 'Dōng Fāng Qīng Lóng',
      direction: '东方',
      element: '木 · 春季',
      color: '#10b981',
      icon: '🐉',
      intro: '春回大地时出现在东方夜空，宛如一条腾飞在银河东岸的神龙，角宿为龙头，尾宿为龙尾。',
      folklore: '“二月二，龙抬头”：仲春时节，东方青龙的“角宿一”和“角宿二”两颗星在黄昏时刚好从地平线上升起，象征龙昂首破土，春耕祈雨。',
      mansions: [
        { name: '角宿', stars: 2, modern: '室女座 α (角宿一), ζ', meaning: '苍龙之双角，春分之初升之星', role: '天之门阙，龙首之冠' },
        { name: '亢宿', stars: 4, modern: '室女座 ι, κ, λ, θ', meaning: '苍龙之咽喉，清越昂扬', role: '天之庭尉，引吭高歌' },
        { name: '氐宿', stars: 4, modern: '天秤座 α, β, γ, ι', meaning: '苍龙之胸脯与前爪，根基坚实', role: '宿名本义为“底”，为龙身胸腹' },
        { name: '房宿', stars: 4, modern: '天蝎座 π, ρ, δ, β', meaning: '苍龙之腹与明堂，天驷天马', role: '天子之行宫，又称天马' },
        { name: '心宿', stars: 3, modern: '天蝎座 α (心宿二·大火星), σ, τ', meaning: '苍龙之心，殷红炽热之火', role: '“七月流火”指心宿二夏末西沉' },
        { name: '尾宿', stars: 9, modern: '天蝎座 μ, ε, ζ, η, θ, ι, κ, λ, ν', meaning: '苍龙摆动之华丽长尾', role: '九星盘卷，宛如龙尾浸入银河' },
        { name: '箕宿', stars: 4, modern: '人马座 γ, δ, ε, η', meaning: '苍龙之尾梢，扬簸箕之形，好起风', role: '古谚“月丽于箕，风扬沙石”' }
      ]
    },
    {
      id: 'xuanwu',
      name: '北方玄武',
      pinyin: 'Běi Fāng Xuán Wǔ',
      direction: '北方',
      element: '水 · 冬季',
      color: '#3b82f6',
      icon: '🐢',
      intro: '龟蛇相缠为玄武，占据北方严冬星空，守护北方幽都，与深冬农闲与储藏紧密相连。',
      folklore: '“南斗六星，注生司命”：北方玄武之首的“斗宿”由六颗星组成，形如小斗，俗称南斗六星，与北斗七星在星空中交相辉映。',
      mansions: [
        { name: '斗宿', stars: 6, modern: '人马座 φ, λ, μ, σ, τ, ζ', meaning: '玄武之首，又称南斗六星', role: '民间称“南斗注生，北斗注死”' },
        { name: '牛宿', stars: 6, modern: '摩羯座 β, α, ξ, π, ο, ρ', meaning: '玄武之角与牵牛星之根', role: '牵牛耕云，原初为农耕耕牛象征' },
        { name: '女宿', stars: 4, modern: '宝瓶座 ε, μ, 4, 3', meaning: '玄武之身，织女缝纫裁衣之女', role: '古代掌管天界布帛缝织之事' },
        { name: '虚宿', stars: 2, modern: '宝瓶座 β, 小马座 α', meaning: '玄武之脊，虚堂祭祀天地之所', role: '空虚幽远，冬至夜中之星' },
        { name: '危宿', stars: 3, modern: '宝瓶座 α, 飞马座 θ, ε', meaning: '玄武之屋脊，高处危险亦主修葺', role: '高台望远，严冬修葺房舍' },
        { name: '室宿', stars: 2, modern: '飞马座 α, β', meaning: '玄武之后腹，营室天宫', role: '“定之方中，作于楚宫”指室宿建房' },
        { name: '壁宿', stars: 2, modern: '飞马座 γ, 仙女座 α', meaning: '玄武之尾端，东壁图书秘藏之所', role: '主天子文章图书之府' }
      ]
    },
    {
      id: 'baihu',
      name: '西方白虎',
      pinyin: 'Xī Fāng Bái Hǔ',
      direction: '西方',
      element: '金 · 秋季',
      color: '#f59e0b',
      icon: '🐯',
      intro: '秋季威武白虎啸秋风，杀伐决断，星象在金秋时节闪烁耀眼，参宿三星更是冬夜最醒目的路标。',
      folklore: '“人生不相见，动如参与商”：杜甫名句中的“参”即西方参宿（猎户座），“商”即东方心宿（天蝎座大火星）。两星宿此起彼落，永不相见。',
      mansions: [
        { name: '奎宿', stars: 16, modern: '仙女座, 双鱼座', meaning: '白虎之尾梢，十六星屈曲如文章奎星', role: '主文运昌盛，天下文章大兴' },
        { name: '娄宿', stars: 3, modern: '白羊座 β, α, γ', meaning: '白虎之身，收敛聚拢刍牧', role: '主牲畜繁衍与秋季祭祀' },
        { name: '胃宿', stars: 3, modern: '白羊座 35, 39, 41', meaning: '白虎之腹，天下仓廪粮仓之胃', role: '主五谷丰登入库大吉' },
        { name: '昴宿', stars: 7, modern: '金牛座 昴星团 (M45)', meaning: '白虎之毛髯，七姐妹星团如繁花', role: '西域商贾与匈奴行军的重要天标' },
        { name: '毕宿', stars: 8, modern: '金牛座 α (毕宿五), ε, δ', meaning: '白虎之面网，叉形如打猎长网', role: '“月离于毕，俾滂沱兮”主降大雨' },
        { name: '觜宿', stars: 3, modern: '猎户座 λ, φ1, φ2', meaning: '白虎之额头与虎嘴', role: '小巧三角，为参宿之引导' },
        { name: '参宿', stars: 7, modern: '猎户座 α, β, γ, δ, ε, ζ, κ', meaning: '白虎之胸膛猛爪，三星高照', role: '参宿三星居腰带，福禄寿三星临门' }
      ]
    },
    {
      id: 'zhuque',
      name: '南方朱雀',
      pinyin: 'Nán Fāng Zhū Què',
      direction: '南方',
      element: '火 · 夏季',
      color: '#ef4444',
      icon: '🦚',
      intro: '红霞丹凤展翅飞跃南天，炎帝与火神之使者，羽翼斑斓，给大地带来盛夏的阳光与丰盛生机。',
      folklore: '“鹑火南翔，夏至正阳”：朱雀又称朱鸟、鹑鸟，星宿中的“星宿”即朱雀之心，夏夜在南方最高处闪烁，指引天地盛阳。',
      mansions: [
        { name: '井宿', stars: 8, modern: '双子座 μ, ν, γ, ξ, ε, 36, ζ, λ', meaning: '朱雀之首冠冠翎，开天辟地之甘泉水井', role: '八星成双列，主江河泉水通达' },
        { name: '鬼宿', stars: 4, modern: '巨蟹座 γ, δ, η, θ 及鬼星团 M44', meaning: '朱雀之眼眸，积尸气如云雾神秘', role: '中央白色絮状星云，古代敬畏幽微' },
        { name: '柳宿', stars: 8, modern: '长蛇座 δ, σ, η, ρ, ε, ζ, ω, θ', meaning: '朱雀之尖喙如柳叶，草木抽枝', role: '主鸟啄食与草木吐纳新芽' },
        { name: '星宿', stars: 7, modern: '长蛇座 α (星宿一), τ, ι', meaning: '朱雀之颈项羽心，又称七星', role: '夏至前后黄昏正中南天，古四仲星之一' },
        { name: '张宿', stars: 6, modern: '长蛇座 υ, λ, μ, HD 87344', meaning: '朱雀之嗉囊与胃囊，舒张长翼', role: '主宫廷设宴待客，天下丰饶' },
        { name: '翼宿', stars: 22, modern: '巨爵座, 长蛇座', meaning: '朱雀双翅大展，二十二星羽翼丰满', role: '主天界礼乐文章与远邦来仪' },
        { name: '轸宿', stars: 4, modern: '乌鸦座 γ, ε, δ, β', meaning: '朱雀之尾车与辅车，运转乾坤', role: '四星方形如车厢，主天下行车交通' }
      ]
    }
  ],

  // 古代观星发明与客星记载 (Ancient Instruments & Records)
  ancientInnovations: [
    {
      title: '甘德与石申《甘石星经》',
      period: '战国时期（公元前4世纪）',
      achievement: '世界上最早的天文学星表，测定了 120 余颗恒星的赤道坐标位置。',
      highlight: '甘德甚至在公元前 364 年仅凭肉眼观测就记下了木星旁边有一颗微小的“细红星”，很可能是人类最早发现木卫二或木卫三的记录！',
      icon: '📜'
    },
    {
      title: '张衡与水运浑天仪',
      period: '东汉（公元117年）',
      achievement: '世界上第一台利用水力驱动运转的天球仪。',
      highlight: '张衡将齿轮机械与漏水滴壶连接，浑天仪在室内随水流均匀自转，外面的星辰升起，里面的仪器星辰也恰好露出地平线，分毫不差！',
      icon: '🌐'
    },
    {
      title: '郭守敬与登封观星台及简仪',
      period: '元代（公元1276年）',
      achievement: '创制世界最精密的“简仪”与登封古观星台，制定《授时历》。',
      highlight: '郭守敬测得一年长度为 365.2425 日，与现代精密测量的实际公转数值仅差 26 秒，比西方格里高利历早了整整 300 年！',
      icon: '🏛️'
    },
    {
      title: '北宋“天关客星”超新星爆发记录',
      period: '北宋至和元年（公元1054年）',
      achievement: '中国史官详尽记录了金牛座天关星附近的超新星剧烈爆发。',
      highlight: '《宋史·天文志》记录该客星“昼见如太白，芒角四出，凡见二十三日”。这颗恒星爆发的绚烂遗迹就是今天哈勃望远镜拍摄的著名“蟹状星云 (M1)”！',
      icon: '💥'
    }
  ]
}

// 2. 现代全天星座与星空探索 (Modern Constellations & Night Sky Guide)
export const modernConstellationsData = {
  // 四季观星导引 (Four Seasons Night Sky Guide)
  seasonalTriangles: [
    {
      id: 'spring-sky',
      season: '🌸 春季夜空',
      bestMonths: '3月 ~ 5月',
      coreShape: '春季大三角 · 北斗指路',
      coreStars: [
        { name: '大角星 (Arcturus)', constel: '牧夫座', color: '橙黄色', note: '全天第四亮恒星，天空中著名的“守护者”' },
        { name: '角宿一 (Spica)', constel: '室女座', color: '纯白色', note: '代表秋收女神手中的一株金黄麦穗' },
        { name: '五帝座一 (Denebola)', constel: '狮子座', color: '青白色', note: '雄壮狮子威武的尾巴尖端' }
      ],
      guideSteps: [
        '第一步：抬头寻找北方高空的“北斗七星”（勺子形）。',
        '第二步：顺着北斗勺柄的三颗星（玉衡、开阳、摇光）画一条优美的大弧线（春季大弧线）。',
        '第三步：顺弧线滑过耀眼的橙黄色“大角星”，再滑到纯洁无瑕的“角宿一”。',
        '第四步：与狮子座尾巴的“五帝座一”连成一个巨大的等边三角形，这就是壮丽的“春季大三角”！'
      ],
      bgGrad: 'linear-gradient(135deg, #1e3a8a, #065f46)'
    },
    {
      id: 'summer-sky',
      season: '☀️ 夏季夜空',
      bestMonths: '6月 ~ 8月',
      coreShape: '夏季大三角 · 银河鹊桥',
      coreStars: [
        { name: '织女星 (Vega)', constel: '天琴座 α', color: '蓝白色', note: '天琴座最亮主星，传说中巧手织锦的天仙' },
        { name: '牛郎星 (Altair / 牵牛星)', constel: '天鹰座 α', color: '纯白色', note: '两旁伴着两颗小星（扁担星），挑着一双儿女' },
        { name: '天津四 (Deneb)', constel: '天鹅座 α', color: '亮白色', note: '展翅飞翔的天鹅尾巴，雄踞银河正中渡口' }
      ],
      guideSteps: [
        '第一步：夏夜仰望天顶，会看到白茫茫的银河宛如一条明亮的轻纱横跨夜空。',
        '第二步：银河西岸最耀眼发蓝光的璀璨亮星就是“织女星”。',
        '第三步：隔着银河隔岸相望、两侧各有一颗小暗星护卫的亮星就是“牛郎星”。',
        '第四步：顺着银河往北看，天鹅展翅扑打水花的尾尖就是“天津四”，古汉语意为“银河的大渡口码头”！'
      ],
      bgGrad: 'linear-gradient(135deg, #0f172a, #1e1b4b)'
    },
    {
      id: 'autumn-sky',
      season: '🍁 秋季夜空',
      bestMonths: '9月 ~ 11月',
      coreShape: '秋季四边形 · 飞马凌空',
      coreStars: [
        { name: '室宿一 (Markab)', constel: '飞马座 α', color: '白色', note: '飞马的马鞍与马背' },
        { name: '室宿二 (Scheat)', constel: '飞马座 β', color: '暗红色', note: '红巨星，飞马的马前腿关节' },
        { name: '壁宿一 (Algenib)', constel: '飞马座 γ', color: '蓝白色', note: '飞马舒展的飞翼翼尖' },
        { name: '壁宿二 (Alpheratz)', constel: '仙女座 α', color: '白带微紫', note: '飞马头部与仙女座头顶共用的一等亮星' }
      ],
      guideSteps: [
        '第一步：秋季夜空明亮恒星相对稀少，在头顶偏南空域寻找由四颗二等星组成的巨大矩形。',
        '第二步：这四颗星构成了希腊神话中长着翅膀的“飞马座”，也称“秋季大四边形”。',
        '第三步：顺着壁宿二向北延展，用双筒望远镜可以捕捉到微弱的椭圆光斑——那就是著名的“仙女座大星系 (M31)”，距我们250万光年，是人类肉眼能看到最遥远的宇宙深空天体！'
      ],
      bgGrad: 'linear-gradient(135deg, #312e81, #3b0764)'
    },
    {
      id: 'winter-sky',
      season: '❄️ 冬季夜空',
      bestMonths: '12月 ~ 2月',
      coreShape: '冬季大三角 · 猎户威武',
      coreStars: [
        { name: '天狼星 (Sirius)', constel: '大犬座 α', color: '纯白发蓝', note: '除太阳外全天肉眼最亮的恒星（视星等 -1.46），距离地球仅 8.6 光年' },
        { name: '参宿四 (Betelgeuse)', constel: '猎户座 α', color: '深橙红色', note: '体积极为庞大的红超巨星，若放在太阳位置，会吞没火星轨道！' },
        { name: '南河三 (Procyon)', constel: '小犬座 α', color: '黄白色', note: '小犬座亮星，在天狼星之前升起，故名“在犬之前”' }
      ],
      guideSteps: [
        '第一步：冬季晴朗无月夜，仰望东南方，最显眼的是腰系三颗整齐宝石的“猎户座”。',
        '第二步：猎户左肩闪烁着红宝石般的“参宿四”，右脚则是冰蓝色的“参宿七”。',
        '第三步：顺着猎户腰带三颗星往东南下方延伸，会看到整个夜空中最亮、光芒万丈的恒星——“天狼星”。',
        '第四步：参宿四、天狼星、南河三连成几乎完美的黄金等边三角形，这就是星空最耀眼的“冬季大三角”！'
      ],
      bgGrad: 'linear-gradient(135deg, #020617, #172554)'
    }
  ],

  // 十二黄道星座图谱 (Twelve Zodiac Constellations)
  zodiacList: [
    { name: '白羊座', latin: 'Aries', date: '3.21 - 4.19', element: '火象', icon: '♈', star: '娄宿三 (Hamal)', story: '古希腊神话中救走赫勒和弗里克索斯的长着金色羊毛的神羊。' },
    { name: '金牛座', latin: 'Taurus', date: '4.20 - 5.20', element: '土象', icon: '♉', star: '毕宿五 (Aldebaran)', story: '天神宙斯化身温顺白牛渡海的传说；牛角处有著名的蟹状星云与昴星团。' },
    { name: '双子座', latin: 'Gemini', date: '5.21 - 6.21', element: '风象', icon: '♊', star: '北河二 (Castor), 北河三 (Pollux)', story: '卡斯托尔与波吕克斯孪生兄弟情深，升上天空化为并肩闪耀的双子星。' },
    { name: '巨蟹座', latin: 'Cancer', date: '6.22 - 7.22', element: '水象', icon: '♋', star: '柳宿增三 (Acubens)', story: '赫拉克勒斯大战九头蛇许德拉时，前来相助的巨蟹；中央有著名的鬼星团蜂巢。' },
    { name: '狮子座', latin: 'Leo', date: '7.23 - 8.22', element: '火象', icon: '♌', star: '轩辕十四 (Regulus)', story: '刀枪不入的涅墨亚猛狮，头部排列如一把倒挂的镰刀，轩辕十四被称为“小皇帝之星”。' },
    { name: '处女座', latin: 'Virgo', date: '8.23 - 9.22', element: '土象', icon: '♍', star: '角宿一 (Spica)', story: '农业与正义女神阿斯特莱亚，手中持着象征丰收的纯白麦穗（角宿一）。' },
    { name: '天秤座', latin: 'Libra', date: '9.23 - 10.23', element: '风象', icon: '♎', star: '氐宿一 (Zubenelgenubi)', story: '正义女神用来衡量人间善与恶的天平，是黄道十二星座中唯一没有动物形象的星座。' },
    { name: '天蝎座', latin: 'Scorpius', date: '10.24 - 11.22', element: '水象', icon: '♏', star: '心宿二 (Antares)', story: '巨蝎挥舞大螯与毒刺，心宿二被称为“火星的宿敌”，夏夜火红夺目。' },
    { name: '射手座', latin: 'Sagittarius', date: '11.23 - 12.21', element: '火象', icon: '♐', star: '箕宿三 (Alnasl)', story: '手持长弓搭箭的半人马贤者喀戎，茶壶形状星宿正对着我们银河系的中心黑洞人马座A*。' },
    { name: '摩羯座', latin: 'Capricornus', date: '12.22 - 1.19', element: '土象', icon: '♑', star: '牛宿一 (Dabih)', story: '牧神潘恩为了逃避百头巨怪提丰，跳入尼罗河化为上半身是山羊、下半身是鱼尾的模样。' },
    { name: '水瓶座', latin: 'Aquarius', date: '1.20 - 2.18', element: '风象', icon: '♒', star: '虚宿一 (Sadalmelik)', story: '特洛伊美少年伽倪墨得斯为天神倾倒甘美琼浆玉液的宝瓶，泉水化为银河之流。' },
    { name: '双鱼座', latin: 'Pisces', date: '2.19 - 3.20', element: '水象', icon: '♓', star: '外屏七 (Alrescha)', story: '爱与美之神阿佛洛狄忒和儿子厄洛斯用丝带绑在一起化作游鱼逃脱险境的美丽传说。' }
  ]
}

// 3. 太阳系与深空奥秘实验室 (Solar System & Deep Space Lab)
export const solarSystemData = {
  // 八大行星参数与趣味科普 (Eight Planets)
  planets: [
    {
      id: 'mercury',
      name: '水星',
      en: 'Mercury',
      type: '类地行星（岩石）',
      distFromSun: '0.39 AU (约 5790 万公里)',
      orbitalPeriod: '88 个地球日',
      rotationPeriod: '58.6 个地球日',
      diameterRatio: '0.38 (约为地球 1/3)',
      moons: 0,
      surfaceTemp: '-180℃ 至 430℃',
      keyFeature: '水星上面并没有水！因为几乎没有大气层，向阳面被太阳烤得能熔化铅，背阳面则陷入冰窖，昼夜温差全太阳系第一。',
      memoryRhyme: '水星最小跑得快，八十八天转一圈。',
      color: '#9ca3af',
      icon: '⚪'
    },
    {
      id: 'venus',
      name: '金星',
      en: 'Venus',
      type: '类地行星（岩石）',
      distFromSun: '0.72 AU (约 1.08 亿公里)',
      orbitalPeriod: '224.7 个地球日',
      rotationPeriod: '243 个地球日（自西向东逆向自转）',
      diameterRatio: '0.95 (地球的双胞胎姐妹)',
      moons: 0,
      surfaceTemp: '常年约 465℃ (全太阳系最热行星)',
      keyFeature: '中国古代清晨见之称“启明星”，傍晚见之称“长庚星”。浓密失控的二氧化碳温室效应形成超级高压烤箱，表面还会降下硫酸雨！',
      memoryRhyme: '金星最亮温度高，启明长庚逆向转。',
      color: '#f59e0b',
      icon: '🟡'
    },
    {
      id: 'earth',
      name: '地球',
      en: 'Earth',
      type: '类地行星（岩石水球）',
      distFromSun: '1.00 AU (约 1.496 亿公里)',
      orbitalPeriod: '365.25 个地球日',
      rotationPeriod: '23 小时 56 分钟',
      diameterRatio: '1.00 (基准直径 12742 公里)',
      moons: 1,
      surfaceTemp: '平均约 15℃ (-89℃ 至 56.7℃)',
      keyFeature: '太阳系目前已知唯一孕育生命的蓝白相间星球！拥有71%的液态水海洋、富含氧气的大气保护层以及阻挡高能宇宙射线的全球地磁场。',
      memoryRhyme: '地球家园生命存，蔚蓝海洋孕生机。',
      color: '#3b82f6',
      icon: '🌍'
    },
    {
      id: 'mars',
      name: '火星',
      en: 'Mars',
      type: '类地行星（红色岩石）',
      distFromSun: '1.52 AU (约 2.28 亿公里)',
      orbitalPeriod: '687 个地球日',
      rotationPeriod: '24 小时 37 分钟',
      diameterRatio: '0.53 (约为地球一半)',
      moons: 2,
      surfaceTemp: '-125℃ 至 20℃ (平均 -63℃)',
      keyFeature: '中国古称“荧惑”。表面覆盖着大量氧化铁锈红色尘埃。拥有太阳系最高的火山“奥林匹斯山”（高达21千米，是珠穆朗玛峰的2.5倍）！',
      memoryRhyme: '火星红色荧惑名，奥林匹斯山冲天。',
      color: '#ef4444',
      icon: '🔴'
    },
    {
      id: 'jupiter',
      name: '木星',
      en: 'Jupiter',
      type: '气态巨行星',
      distFromSun: '5.20 AU (约 7.78 亿公里)',
      orbitalPeriod: '11.86 个地球年',
      rotationPeriod: '9 小时 55 分钟 (全太阳系自转最快)',
      diameterRatio: '11.2 (体积为地球的 1300 倍)',
      moons: 95,
      surfaceTemp: '云顶约 -110℃',
      keyFeature: '太阳系行星之王！质量比其他所有行星加起来还重2.5倍。表面有一团刮了至少数百年的超巨大反气旋风暴——“大红斑”，足以塞进整个地球！',
      memoryRhyme: '木星老大块头大，大红斑风暴转得急。',
      color: '#d97706',
      icon: '🟠'
    },
    {
      id: 'saturn',
      name: '土星',
      en: 'Saturn',
      type: '气态巨行星',
      distFromSun: '9.58 AU (约 14.3 亿公里)',
      orbitalPeriod: '29.45 个地球年',
      rotationPeriod: '10 小时 33 分钟',
      diameterRatio: '9.45 (仅次于木星)',
      moons: 146,
      surfaceTemp: '云顶约 -140℃',
      keyFeature: '头戴最壮丽“草帽光环”的绝美行星！光环由数十亿块冰晶和岩石颗粒组成，宽达数十万公里却只有十几米厚。土星密度极低，如果有个足够大的浴缸它能浮在水上！',
      memoryRhyme: '土星光环戴草帽，密度比水还要轻。',
      color: '#eab308',
      icon: '🪐'
    },
    {
      id: 'uranus',
      name: '天王星',
      en: 'Uranus',
      type: '冰巨行星',
      distFromSun: '19.22 AU (约 28.7 亿公里)',
      orbitalPeriod: '84.0 个地球年',
      rotationPeriod: '17 小时 14 分钟',
      diameterRatio: '4.01',
      moons: 28,
      surfaceTemp: '约 -224℃ (全太阳系最冷行星大气)',
      keyFeature: '“躺着打滚”自转的独特星球！自转轴倾角高达 97.8 度，仿佛一个滚动的保龄球在公转轨道上行进，大气富含甲烷呈现宁静梦幻的浅天青色。',
      memoryRhyme: '天王青蓝躺着滚，冰霜酷寒八十四。',
      color: '#06b6d4',
      icon: '🔷'
    },
    {
      id: 'neptune',
      name: '海王星',
      en: 'Neptune',
      type: '冰巨行星',
      distFromSun: '30.05 AU (约 45.0 亿公里)',
      orbitalPeriod: '164.8 个地球年',
      rotationPeriod: '16 小时 6 分钟',
      diameterRatio: '3.88',
      moons: 16,
      surfaceTemp: '约 -214℃',
      keyFeature: '太阳系已知最遥远的大行星，呈现湛蓝深邃的海洋色彩。这里刮着太阳系最狂暴的超音速狂风（风速高达每小时 2100 公里），更有神秘的“大黑斑”。',
      memoryRhyme: '海王深蓝居最远，超音狂风绕圈巡。',
      color: '#2563eb',
      icon: '🔵'
    }
  ],

  // 月相盈亏八阶段 (Eight Phases of the Moon)
  moonPhases: [
    { day: 1, name: '新月（朔）', shape: '🌑', desc: '月球转到太阳与地球之间，黑夜完全看不到月亮，农历每月初一。' },
    { day: 3, name: '蛾眉月', shape: '🌒', desc: '黄昏西方天空露出一弯细细银钩，宛如少女弯弯的娥眉，农历初三初四。' },
    { day: 7, name: '上弦月', shape: '🌓', desc: '半边发光，西半边亮、亮面朝西，上半夜挂在南天，农历初七初八。' },
    { day: 11, name: '渐盈凸月', shape: '🌔', desc: '月亮大半圆润饱满，快要圆满了，农历十一至十三。' },
    { day: 15, name: '满月（望）', shape: '🌕', desc: '地球在太阳与月亮之间，整夜皓月当空，中秋圆月正是此时，农历十五十六。' },
    { day: 19, name: '渐亏凸月', shape: '🌖', desc: '满月之后月亮开始从西侧慢慢亏缺，后半夜升起，农历十八至二十。' },
    { day: 22, name: '下弦月', shape: '🌗', desc: '半边发光，东半边亮、亮面朝东，清晨见于南天，农历廿二廿三。' },
    { day: 28, name: '残月', shape: '🌘', desc: '拂晓破晓时东方天际露出的细钩残月，农历廿七廿八。' }
  ],

  // 奇妙天文天象解密 (Astronomical Phenomena)
  phenomena: [
    {
      title: '🌞 日全食、日环食与日偏食',
      cause: '月球运行到太阳和地球之间，且三者正好在一条直线上，月球的阴影投射到地球表面挡住太阳光。',
      types: '日全食（月球完全遮挡日轮，白天瞬间变黑夜，能看到壮丽日冕）、日环食（月球离地球较远，无法全遮，留下一圈耀眼的金环）、日偏食（月球只挡住太阳一部分）。',
      icon: '🌘'
    },
    {
      title: '🌕 月全食与“红月亮（血月）”',
      cause: '地球运行到太阳与月球之间，地球阴影完全挡住直射月球的阳光。',
      types: '为什么月食时月亮不是黑色而是红色的？因为太阳光穿过地球厚厚的大气层时，蓝紫光被散射，只有波长较长的红光被折射照射到月球表面，反射回地球呈现唯美的“暗红血月”！',
      icon: '🔴'
    },
    {
      title: '🌠 英仙座与双子座流星雨',
      cause: '彗星绕太阳运行时沿途抛洒下的岩石粉尘微粒，当彗星轨道与地球公转轨道相交时，无数微粒以极高速度坠入地球大气层摩擦燃烧发光。',
      types: '每年 8 月中旬的英仙座流星雨（夏夜观星首选）与 12 月中旬的双子座流星雨（冬夜亮流星密集），每小时常可达上百颗流星！',
      icon: '✨'
    }
  ]
}

// 4. 天文小院士亲子挑战题库 (Astronomy Quiz Teasers)
export const astronomyQuiz = [
  {
    id: 1,
    question: '夜晚在北方星空迷路时，我们可以顺着北斗七星勺口的两颗星（天璇向天枢）连线，向前延长几倍距离就能找到北极星？',
    options: ['2 倍', '3 倍', '5 倍', '10 倍'],
    answer: 2,
    explain: '顺着北斗七星勺口外侧的“天璇”朝“天枢”引一条直线，延长大约 5 倍的距离，就能精准找到那颗孤悬正北方的二等亮星——北极星！'
  },
  {
    id: 2,
    question: '中国古代把二十八宿分为四大神兽天象，成语“二月二，龙抬头”所说的“龙抬头”指的是哪一个星宿在傍晚升起？',
    options: ['角宿（苍龙之角）', '心宿（苍龙之心）', '尾宿（苍龙之尾）', '斗宿（北方玄武）'],
    answer: 0,
    explain: '仲春二月二，东方青龙的龙头“角宿”在傍晚黄昏时分刚刚从东方地平线上探出头来，仿佛巨龙自沉睡中昂首苏醒，象征春回大地、春耕农忙！'
  },
  {
    id: 3,
    question: '在太阳系八大行星中，哪一颗行星的大气温室效应极其严重，表面温度高达 460℃ 以上，是全太阳系最热的行星？',
    options: ['水星', '金星', '火星', '木星'],
    answer: 1,
    explain: '虽然水星离太阳更近，但金星拥有厚达数十公里的二氧化碳浓厚大气层，引发极端的失控温室效应，热量进得来出不去，平均温度高达 465℃，比水星更热！'
  },
  {
    id: 4,
    question: '杜甫名诗《赠卫八处士》中有“人生不相见，动如参与商”。诗中的“参”和“商”在天文学中分别指哪两颗星宿？',
    options: ['织女星与牛郎星', '西方参宿与东方心宿（商星）', '北极星与南极老人星', '太阳与月亮'],
    answer: 1,
    explain: '“参”是西方白虎七宿中的参宿（猎户座亮星），“商”是东方青龙七宿中的心宿（天蝎座大火星）。因为它们一个在西一个在东，此出彼没，永远不可能同时出现在天空中！'
  },
  {
    id: 5,
    question: '太阳系中有一颗著名的气态巨行星拥有极其壮丽宽阔的“草帽光环”，且自身平均密度比水还要小，它是哪一颗？',
    options: ['木星', '土星', '天王星', '海王星'],
    answer: 1,
    explain: '土星拥有最宽广耀眼的光环（由碎冰块和岩石组成），且土星的平均密度只有约 0.69 克/立方厘米，比水（1.0 克/立方厘米）还小，如果有一个超级大水盆，土星能漂浮在上面！'
  },
  {
    id: 6,
    question: '农历每个月的初一，月亮正好运行在太阳与地球之间，在地球上完全看不见月亮，这种月相在古代被称为什么？',
    options: ['朔月（新月）', '望月（满月）', '上弦月', '残月'],
    answer: 0,
    explain: '农历初一月亮以暗面对着地球，称为“朔月”或“新月”；到了农历十五十六，地球在太阳与月亮中间，月亮整面反光照向地球，称为“望月”或“满月”。'
  },
  {
    id: 7,
    question: '夏季夜空跨越银河两岸有著名的“夏季大三角”，其中由哪三颗一等亮星共同组成？',
    options: ['织女星、牛郎星、天津四', '天狼星、参宿四、南河三', '大角星、角宿一、五帝座一', '心宿二、火星、毕宿五'],
    answer: 0,
    explain: '夏季大三角由天琴座织女星、天鹰座牛郎星和天鹅座天津四组成。而天狼星、参宿四、南河三组成的是“冬季大三角”。'
  },
  {
    id: 8,
    question: '人类肉眼在晴朗无光害夜空中能够直接看到的最遥远的深空天体是仙女座大星系 (M31)，它距离我们地球大约多远？',
    options: ['约 2.5 万光年', '约 25 万光年', '约 250 万光年', '约 2500 万光年'],
    answer: 2,
    explain: '仙女座大星系 (M31) 距离我们约 250 万光年！这意味着今夜我们肉眼看到的微弱星光，是它在 250 万年前（人类刚开始直立行走的旧石器时代初期）发射出来的！'
  }
]
