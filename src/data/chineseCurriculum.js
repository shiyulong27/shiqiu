/**
 * 小学 1~6 年级统编版（新课标）语文全景课程大纲与交互脑图数据集
 * 涵盖：识字与写字指标、查字工具、语法修辞、篇目古诗、习作能力及各学段考评标尺
 */

export const gradesList = [
  { id: 'grade1', name: '一年级', stage: '第一学段·启蒙筑基', badge: '拼音识字', fullTitle: '小学一年级语文 · 拼音大厦与识字启蒙' },
  { id: 'grade2', name: '二年级', stage: '第一学段·学段收官', badge: '部首写话', fullTitle: '小学二年级语文 · 部首查字与段落写话' },
  { id: 'grade3', name: '三年级', stage: '第二学段·重大转折', badge: '修辞习作', fullTitle: '小学三年级语文 · 修辞启蒙与300字习作' },
  { id: 'grade4', name: '四年级', stage: '第二学段·学段收官', badge: '文言关联', fullTitle: '小学四年级语文 · 文言启蒙与400字叙事' },
  { id: 'grade5', name: '五年级', stage: '第三学段·高段深化', badge: '名著细节', fullTitle: '小学五年级语文 · 名著精读与说明文写作' },
  { id: 'grade6', name: '六年级', stage: '第三学段·毕业总冲刺', badge: '课标总达标', fullTitle: '小学六年级语文 · 小升初总复习与课标总达标' },
]

export const curriculumData = {
  // ==========================================
  // 一年级 (Grade 1)
  // ==========================================
  grade1: {
    id: 'grade1',
    name: '一年级',
    stage: '第一学段（1-2年级）· 启蒙筑基期',
    badge: '🌟 拼音与字词地基',
    themeColor: '#059669',
    summary: '小学最重要的幼小衔接与筑基年。全面攻克 63 个拼音部件与音序查字典法，掌握 28 种笔画与 7 大笔顺，完成 700 认 / 300 写的核心字根积累。',
    kpiStats: {
      shizi: '识 700 / 写 300',
      gushi: '必背 10 首古诗',
      chengyu: '40+ 条四季成语',
      xizuo: '看图写话 1~3 句完整话',
    },
    mindmapTree: {
      name: '🌱 小学一年级语文\n全景知识与能力架构',
      itemStyle: { color: '#059669', borderColor: '#047857', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#059669', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '🔤 拼音大厦\n(63部件+26字母)',
          itemStyle: { color: '#f59e0b' },
          label: { backgroundColor: '#f59e0b', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '声母发音部位 (23个)',
              children: [
                { name: '双唇/唇齿：b · p · m · f' },
                { name: '舌尖中音：d · t · n · l (n/l辨析)' },
                { name: '舌根音：g · k · h' },
                { name: '舌面前音：j · q · x (遇ü去两点)' },
                { name: '平舌音(3)：z · c · s' },
                { name: '翘舌音(4)：zh · ch · sh · r' },
                { name: '零声母介母：y · w' }
              ]
            },
            {
              name: '韵母深度五类 (24个)',
              children: [
                { name: '单韵母 6个：a · o · e · i · u · ü' },
                { name: '复韵母 8个：ai ei ui ao ou iu ie üe (易混: ei/ie ui/iu)' },
                { name: '特殊元音 1个：er (卷舌独用)' },
                { name: '前鼻韵母 5个：an · en · in · un · ün (-n抵上齿龈)' },
                { name: '后鼻韵母 4个：ang · eng · ing · ong (-ng抵软腭)' }
              ]
            },
            {
              name: '整体认读与音序查字法',
              children: [
                { name: '16个整体认读音节 (zhi chi shi ri / zi ci si / yi wu yu / ye yue yuan / yin yun ying)' },
                { name: '标调歌：有a不放过/没a找oe/iu并列标在后' },
                { name: '26个大写字母表与音序查字典三步法' }
              ]
            }
          ]
        },
        {
          name: '✍️ 汉字系统\n(识700 / 写300)',
          itemStyle: { color: '#10b981' },
          label: { backgroundColor: '#10b981', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '一上《写字表》100字 (四会掌握·带全量组词)',
              children: [
                { name: '数字方位时间 17字 (一到十、上下中后半、东西里早月)' },
                { name: '天地自然农耕 17字 (天地日月云山田禾火水雨土木林石风白果)' },
                { name: '人伦身体代词 18字 (你我他人们、儿女子头口目耳手足心力自己同)' },
                { name: '动物物象用具 16字 (牛羊马鸟虫鱼、刀尺本书门衣巴把皮竹)' },
                { name: '状态动作虚词 32字 (大小多少开关立正出入来去在有是好长比从才明学又和)' }
              ]
            },
            {
              name: '300个识字表构字规律',
              children: [
                { name: '象形描摹族 (日月水火山石田禾竹网)' },
                { name: '会意合成族 (休·明·尘·双木林·三木森·二人从·三人众)' },
                { name: '偏旁表意归类 (反犬旁犭·鸟字旁·虫字旁·三点水氵)' }
              ]
            },
            {
              name: '笔画与7大黄金笔顺',
              children: [
                { name: '28种基本笔画 (横竖撇捺折钩等复合笔画)' },
                { name: '先横后竖(十) · 先撇后捺(八) · 从上到下(三) · 从左到右(林)' },
                { name: '从外到内(月) · 先里头后封口(回) · 先中间后两边(小)' }
              ]
            }
          ]
        },
        {
          name: '📚 词汇与成语\n(语感与积累)',
          itemStyle: { color: '#3b82f6' },
          label: { backgroundColor: '#3b82f6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '四字成语分类 (40+)',
              children: [
                { name: '春季自然8成语：春回大地 · 万物复苏 · 柳绿花红 · 莺歌燕舞 · 百花齐放等' },
                { name: '生活情态成语：欢声笑语 · 自言自语 · 东张西望 · 七上八下 · 鸟语花香等' }
              ]
            },
            {
              name: '典型叠词与构词模型',
              children: [
                { name: 'ABB式描摹：绿油油 · 胖乎乎 · 笑嘻嘻 · 亮晶晶' },
                { name: 'AABB式动作：高高兴兴 · 红红火火 · 干干净净 · 平平安安' },
                { name: 'ABAB式属性：雪白雪白 · 碧绿碧绿 · 火红火红 · 金黄金黄' }
              ]
            },
            {
              name: '核心造句骨架',
              children: [
                { name: '四要素完整句：谁 + 在什么地方 + 干什么' },
                { name: '比喻句启蒙：弯弯的月儿像小船' }
              ]
            }
          ]
        },
        {
          name: '📖 篇目与古诗\n(文学审美)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '统编一年级必背古诗 (10首全部落地)',
              children: [
                { name: '一上 (4首)：《咏鹅》《江南》《悯农·其二》《古朗月行》' },
                { name: '一下 (6首)：《春晓》《赠汪伦》《静夜思》《寻隐者不遇》《池上》《小池》' }
              ]
            },
            {
              name: '经典体裁篇目',
              children: [
                { name: '寓言启智：《乌鸦喝水》《小猴子下山》《动物王国开大会》' },
                { name: '科学童话：《小壁虎借尾巴》《棉花姑娘》《小松鼠找花生》' },
                { name: '德育与文化：《文具的家》《吃水不忘挖井人》《姓氏歌》' }
              ]
            }
          ]
        },
        {
          name: '🎯 达标能力标尺\n(期末考评)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '阅读提取标尺',
              children: [
                { name: '数清自然段 (开头空两格为一段)' },
                { name: '借助拼音阅读 100~200 字短文' },
                { name: '直接圈画回答“谁在干什么/结果如何”' }
              ]
            },
            {
              name: '看图写话实战标尺',
              children: [
                { name: '篇幅：看懂 1~2 幅图，写 1~3 句通顺的话' },
                { name: '要素：时间 + 地点 + 人物 + 事件' },
                { name: '标点：规范使用句号(。)、问号(？)、叹号(！)，生字注拼音' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '🌟 一上《写字表》全量 100 字与标准日常组词精选',
        type: 'wordlist',
        note: '包含 100 个必写字的田字格大字、标准拼音及 260+ 核心组词。'
      }
    ]
  },

  // ==========================================
  // 二年级 (Grade 2)
  // ==========================================
  grade2: {
    id: 'grade2',
    name: '二年级',
    stage: '第一学段（1-2年级）· 学段收官大达标',
    badge: '🏆 第一学段终考',
    themeColor: '#0284c7',
    summary: '第一学段（低段）收官之年。识字量实现翻倍跨越（累积识 1600 / 写 800），全面掌握部首查字法，看图写话升级为 50~100 字的完整连贯段落。',
    kpiStats: {
      shizi: '累积识 1600 / 写 800',
      gushi: '必背 12 首古诗',
      chengyu: '60+ 条成语寓言',
      xizuo: '看图写话 50~100 字完整段落',
    },
    mindmapTree: {
      name: '📘 小学二年级语文\n全景知识与能力架构',
      itemStyle: { color: '#0284c7', borderColor: '#0369a1', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#0284c7', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '✍️ 汉字大厦与查字法\n(识900 / 写500)',
          itemStyle: { color: '#0ea5e9' },
          label: { backgroundColor: '#0ea5e9', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '部首查字法 (本学年核心技能)',
              children: [
                { name: '第一步：确认部首，翻《部首目录》查页码' },
                { name: '第二步：数除部首外的剩余笔画，翻《检字表》' },
                { name: '第三步：按检字表注明的页码，翻阅字典正文查字音与词义' },
                { name: '难检字查字法（独体字查起笔笔画：横竖撇点折）' }
              ]
            },
            {
              name: '同音字与多音字辨析',
              children: [
                { name: '高频多音字：得(de/dé/děi) · 行(xíng/háng) · 为(wéi/wèi) · 都(dōu/dū)' },
                { name: '重难形近字辨析：做/作 · 带/戴 · 状/壮 · 园/圆' },
                { name: '形声字声旁推音规律深入' }
              ]
            }
          ]
        },
        {
          name: '📚 词汇语感与成语\n(语言表达积累)',
          itemStyle: { color: '#3b82f6' },
          label: { backgroundColor: '#3b82f6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '动词与色彩搭配',
              children: [
                { name: '精准动词：披红袍 · 露肚皮 · 甩尾巴 · 迎上去 · 追上去' },
                { name: '叠词新构型：AABC (欣欣向荣、窃窃私语) / ABAC (自言自语、无边无际)' }
              ]
            },
            {
              name: '经典寓言与典故成语',
              children: [
                { name: '动物智慧：狐假虎威 · 井底之蛙 · 惊弓之鸟 · 亡羊补牢' },
                { name: '成语故事：揠苗助长 · 刻舟求剑 · 坐井观天 · 叶公好龙' }
              ]
            },
            {
              name: '词语搭配与反义词',
              children: [
                { name: '反义词对仗：温和-暴躁 · 仔细-马虎 · 宽阔-狭窄 · 繁华-冷清' },
                { name: '量词归类（一顶帐篷、一艘军舰、一方鱼塘、一行垂柳）' }
              ]
            }
          ]
        },
        {
          name: '📖 经典篇目与古诗文\n(课标必背12首)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '必背古诗词 (12首全部落地)',
              children: [
                { name: '二上(6首)：《小儿垂钓》《登鹳雀楼》《望庐山瀑布》《夜宿山寺》《敕勒歌》《梅花》' },
                { name: '二下(6首)：《村居》《咏柳》《赋得古原草送别》《晓出净慈寺送林子方》《绝句》《舟夜书所见》' }
              ]
            },
            {
              name: '经典课文体裁',
              children: [
                { name: '科学探索篇：《小蝌蚪找妈妈》《我是什么》《植物妈妈有办法》' },
                { name: '智慧历史篇：《曹冲称象》《玲玲的画》《朱德的扁担》' },
                { name: '自然人文篇：《黄山奇石》《日月潭》《雷雨》《千人糕》' }
              ]
            }
          ]
        },
        {
          name: '🎯 表达与看图写话标尺\n(由句成段飞跃)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '段落写话标准 (50~100字)',
              children: [
                { name: '行文格式：每段开头空两格，标点符号占一格' },
                { name: '多幅图逻辑：能看出前因后果，理顺事情的发展顺序' },
                { name: '心理与语言描写启蒙：“我想……”、“他大声说：‘……’”' }
              ]
            },
            {
              name: '阅读理解能力标尺',
              children: [
                { name: '默读起步：不出声、不动唇、不指读' },
                { name: '提取概括：找出中心句或段落关键句' },
                { name: '阅读字数要求：单篇阅读 200~400 字' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '📜 二年级必背古诗 12 首全量清单与名句',
        type: 'poetry',
        list: [
          '《登鹳雀楼》· 王之涣（欲穷千里目，更上一层楼）',
          '《望庐山瀑布》· 李白（飞流直下三千尺，疑是银河落九天）',
          '《夜宿山寺》· 李白（危楼高百尺，手可摘星辰）',
          '《敕勒歌》· 北朝民歌（天苍苍，野茫茫，风吹草低见牛羊）',
          '《咏柳》· 贺知章（不知细叶谁裁出，二月春风似剪刀）',
          '《村居》· 高鼎（草长莺飞二月天，拂堤杨柳醉春烟）',
          '《绝句》· 杜甫（两个黄鹂鸣翠柳，一行白鹭上青天）',
          '《晓出净慈寺送林子方》· 杨万里（接天莲叶无穷碧，映日荷花别样红）',
          '《赋得古原草送别》· 白居易（野火烧不尽，春风吹又生）',
          '《梅花》· 王安石（墙角数枝梅，凌寒独自开）',
          '《小儿垂钓》· 胡令能（路人借问遥招手，怕得鱼惊不应人）',
          '《舟夜书所见》· 查慎行（微微风簇浪，散作满天星）'
        ]
      }
    ]
  },

  // ==========================================
  // 三年级 (Grade 3)
  // ==========================================
  grade3: {
    id: 'grade3',
    name: '三年级',
    stage: '第二学段（3-4年级）· 重大分水岭',
    badge: '🚀 习作起步里程碑',
    themeColor: '#7c3aed',
    summary: '小学语文公认最关键的转折分水岭！由“识字为主”转向“阅读与表达为主”，硬笔钢笔字起步，正式引入比喻、拟人等修辞手法，开启 300 字大篇幅独立习作。',
    kpiStats: {
      shizi: '累积识 2000 / 写 1050',
      gushi: '必背 12 首经典诗词',
      xiuci: '比喻 · 拟人 · 排比启蒙',
      xizuo: '300字命题/半命题大习作',
    },
    mindmapTree: {
      name: '📙 小学三年级语文\n全景知识与能力架构',
      itemStyle: { color: '#7c3aed', borderColor: '#6d28d9', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#7c3aed', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '🖋️ 汉字书写与词汇深化\n(钢笔字启蒙)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '书写规范转型',
              children: [
                { name: '硬笔钢笔字起步：横平竖直、结构匀称，杜绝涂抹' },
                { name: '毛笔书法启蒙：临摹颜体/欧体基本笔画' }
              ]
            },
            {
              name: '查词与推断词义',
              children: [
                { name: '联系上下文猜词法（破除离开字典不会读）' },
                { name: '近义词细微辨析（吩咐-嘱咐、观察-观看、安静-平静）' }
              ]
            }
          ]
        },
        {
          name: '🎨 语法与修辞手法\n(第二学段核心抓手)',
          itemStyle: { color: '#ec4899' },
          label: { backgroundColor: '#ec4899', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '三大核心修辞',
              children: [
                { name: '比喻句：本体 + 喻词(像/仿佛) + 喻体' },
                { name: '拟人句：把物当作人来写（赋予人的动作、神情、情感）' },
                { name: '排比句启蒙：三个或以上结构相同、语气一致的句式' }
              ]
            },
            {
              name: '修改病句起步 (常见4类)',
              children: [
                { name: '成分残缺：缺少主语（如：通过……使……）' },
                { name: '用词不当：词义轻重或感情色彩不当' },
                { name: '语序颠倒：修饰语与主干顺序错乱' },
                { name: '标点修改符号：规范使用增补、删除、调换等修改符号' }
              ]
            }
          ]
        },
        {
          name: '📖 经典课文与诗词名篇\n(传统节日与自然)',
          itemStyle: { color: '#6366f1' },
          label: { backgroundColor: '#6366f1', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '必背古诗文 (12首全部落地)',
              children: [
                { name: '三上(6首)：《山行》《赠刘景文》《夜书所见》《望天门山》《饮湖上初晴后雨》《望洞庭》' },
                { name: '三下(6首)：《绝句(迟日江山丽)》《惠崇春江晚景》《三衢道中》《忆江南》《元日》《清明》《九月九日忆山东兄弟》' }
              ]
            },
            {
              name: '单元重点文学',
              children: [
                { name: '自然美景单元：《秋天的雨》《美丽的小兴安岭》《荷花》《燕子》' },
                { name: '传统文化单元：《赵州桥》《一幅名扬中外的画(清明上河图)》《纸的发明》' },
                { name: '童话寓言单元：《总也倒不了的老屋》《陶罐和铁罐》《守株待兔(文言起步)》' }
              ]
            }
          ]
        },
        {
          name: '✍️ 300字习作与阅读标尺\n(大作文正式起步)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '300字习作大类',
              children: [
                { name: '写人记事：《猜猜他是谁》(抓典型外貌性格)、《那次玩得真高兴》' },
                { name: '写景状物：《这儿真美》(围绕一句话写一段话)、《我眼中的缤纷世界》' },
                { name: '想象与童话：《我来编童话》《续写故事》《假如我有一支神笔》' },
                { name: '应用文：观察日记规范格式' }
              ]
            },
            {
              name: '阅读理解进阶',
              children: [
                { name: '找中心句：段首、段尾或段中的概括句' },
                { name: '借助关键语句理解一段话的意思' },
                { name: '课外阅读量累积达到 40 万字' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '📜 三年级必背诗词 12 首清单与名句',
        type: 'poetry',
        list: [
          '《山行》· 杜牧（停车坐爱枫林晚，霜叶红于二月花）',
          '《望天门山》· 李白（天门中断楚江开，碧水东流至此回）',
          '《饮湖上初晴后雨》· 苏轼（欲把西湖比西子，淡妆浓抹总相宜）',
          '《望洞庭》· 刘禹锡（遥望洞庭山水翠，白银盘里一青螺）',
          '《赠刘景文》· 苏轼（一年好景君须记，最是橙黄橘绿时）',
          '《元日》· 王安石（千门万户曈曈日，总把新桃换旧符）',
          '《清明》· 杜牧（借问酒家何处有？牧童遥指杏花村）',
          '《九月九日忆山东兄弟》· 王维（独在异乡为异客，每逢佳节倍思亲）',
          '《惠崇春江晚景》· 苏轼（竹外桃花三两枝，春江水暖鸭先知）',
          '《忆江南》· 白居易（日出江花红胜火，春来江水绿如蓝）',
          '《三衢道中》· 曾几（梅子黄时日日晴，小溪泛尽却山行）',
          '《守株待兔》· 韩非子（宋人有耕者。田中有株。兔走触株，折颈而死）'
        ]
      }
    ]
  },

  // ==========================================
  // 四年级 (Grade 4)
  // ==========================================
  grade4: {
    id: 'grade4',
    name: '四年级',
    stage: '第二学段（3-4年级）· 学段收官大达标',
    badge: '🏆 第二学段终考',
    themeColor: '#d97706',
    summary: '第二学段收官之年。正式开启小古文文言文体系，全面掌握八大关联词逻辑关系，叙事习作要求写清起因、经过、结果，达到 400 字篇幅。',
    kpiStats: {
      shizi: '累积识 2500 / 写 1600',
      gushi: '必背 14 首诗词文言',
      guanlian: '八大复句关联词',
      xizuo: '400字起因经过叙事完整作文',
    },
    mindmapTree: {
      name: '📙 小学四年级语文\n全景知识与能力架构',
      itemStyle: { color: '#d97706', borderColor: '#b45309', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#d97706', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '📚 词句逻辑与关联词\n(八大复句关系)',
          itemStyle: { color: '#f59e0b' },
          label: { backgroundColor: '#f59e0b', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '八大关联词体系',
              children: [
                { name: '并列：一边……一边…… / 既……又……' },
                { name: '递进：不仅……而且…… / 不但……还……' },
                { name: '转折：虽然……但是…… / 尽管……还是……' },
                { name: '因果：因为……所以…… / 既然……就……' },
                { name: '假设：如果……就…… / 即使……也……' },
                { name: '条件：只要……就…… / 只有……才……' },
                { name: '选择：不是……就是…… / 与其……不如……' }
              ]
            },
            {
              name: '句式变换技能',
              children: [
                { name: '陈述句 ⇄ 反问句' },
                { name: '把字句 ⇄ 被字句' },
                { name: '直接引述句 ⇄ 转述句（第一人称改第三人称）' }
              ]
            }
          ]
        },
        {
          name: '📜 文言文启蒙与古诗词\n(必背14首)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '文言小古文启蒙',
              children: [
                { name: '《王戎不取道旁李》：树在道边而多子，此必苦李' },
                { name: '《精卫填海》：常衔西山之木石，以堙于东海' },
                { name: '《铁杵成针》：太白感其意，还卒业' }
              ]
            },
            {
              name: '必背古诗词 (14首)',
              children: [
                { name: '四上：《鹿柴》《题西林壁》《雪梅》《暮江吟》《出塞》《凉州词》《夏日绝句》《别董大》' },
                { name: '四下：《四时田园杂兴(其二十五)》《宿新市徐公店》《清平乐·村居》《卜算子·咏梅》《蜂》《独坐敬亭山》' }
              ]
            }
          ]
        },
        {
          name: '📖 经典文学单元\n(神话与科普)',
          itemStyle: { color: '#10b981' },
          label: { backgroundColor: '#10b981', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            { name: '上古神话单元：《盘古开天地》《女娲补天》《普罗米修斯》' },
            { name: '自然奇观单元：《观潮》《走月亮》《现代诗二首(秋晚的江上/花牛歌)》' },
            { name: '动物灵趣单元：《老舍·猫》《母鸡》《白鹅》(明贬实褒的反讽艺术)' },
            { name: '科普探索单元：《琥珀》《飞向蓝天的恐龙》《纳米技术就在我们身边》' }
          ]
        },
        {
          name: '✍️ 400字习作与提问策略\n(第二学段达标)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '记叙文四要素与波澜',
              children: [
                { name: '把一件事情写完整：起因、经过、高潮、结果' },
                { name: '游记四步法：按游览顺序写景、移步换景' },
                { name: '书信标准格式：称谓、问候、正文、祝颂语、署名、日期' }
              ]
            },
            {
              name: '阅读提问策略单元',
              children: [
                { name: '从课文内容角度提问' },
                { name: '从课文写法技巧角度提问' },
                { name: '从获得的启示联系生活角度提问' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '📜 四年级必背古诗文 14 首名句精粹',
        type: 'poetry',
        list: [
          '《题西林壁》· 苏轼（不识庐山真面目，只缘身在此山中）',
          '《雪梅》· 卢钺（梅须逊雪三分白，雪却输梅一段香）',
          '《暮江吟》· 白居易（一道残阳铺水中，半江瑟瑟半江红）',
          '《出塞》· 王昌龄（秦时明月汉时关，万里长征人未还）',
          '《凉州词》· 王翰（葡萄美酒夜光杯，欲饮琵琶马上催）',
          '《夏日绝句》· 李清照（生当作人杰，死亦为鬼雄）',
          '《别董大》· 高适（莫愁前路无知己，天下谁人不识君）',
          '《独坐敬亭山》· 李白（相看两不厌，只有敬亭山）',
          '《清平乐·村居》· 辛弃疾（大儿锄豆溪东，中儿正织鸡笼。最喜小儿亡赖，溪头卧剥莲蓬）',
          '《蜂》· 罗隐（采得百花成蜜后，为谁辛苦为谁甜？）'
        ]
      }
    ]
  },

  // ==========================================
  // 五年级 (Grade 5)
  // ==========================================
  grade5: {
    id: 'grade5',
    name: '五年级',
    stage: '第三学段（5-6年级）· 高段文学深化',
    badge: '📚 四大名著精读',
    themeColor: '#ea580c',
    summary: '步入第三学段（高年级）。四大名著整本书精读、文言家国情怀篇目集中呈现；写作要求 450 字，强调细节描写与说明文说明方法。',
    kpiStats: {
      shizi: '累积识 2700 / 写 1750',
      gushi: '必背 14 首诗词文言',
      mingzhu: '四大名著精读回目',
      xizuo: '450字细节描写与说明文',
    },
    mindmapTree: {
      name: '📕 小学五年级语文\n全景知识与能力架构',
      itemStyle: { color: '#ea580c', borderColor: '#c2410c', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#ea580c', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '🏰 四大名著精读单元\n(经典中国文学之巅)',
          itemStyle: { color: '#f97316' },
          label: { backgroundColor: '#f97316', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '四大名著原著回目导读',
              children: [
                { name: '《三国演义》·《草船借箭》(诸葛亮神机妙算、周瑜妒才)' },
                { name: '《水浒传》·《景阳冈》(武松豪迈机敏与打虎细节)' },
                { name: '《西游记》·《猴王出世》(石猴探水帘洞称王)' },
                { name: '《红楼梦》·《红楼春趣》(贾宝玉与大观园放风筝)' }
              ]
            },
            {
              name: '民间故事传承',
              children: [
                { name: '《猎人海力布》(牺牲自己救乡亲的英雄情怀)' },
                { name: '《牛郎织女》(民间四大传说之一，口耳相传的叙事艺术)' }
              ]
            }
          ]
        },
        {
          name: '📜 爱国诗词与文言名篇\n(家国天下担当)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '必背爱国古诗词 (14首)',
              children: [
                { name: '家国情怀：《示儿》《题临安邸》《己亥杂诗》《从军行》《送元二使安西》' },
                { name: '羁旅思乡：《枫桥夜泊》《长相思》《秋思》' },
                { name: '风骨童趣：《蝉》《稚子弄冰》《村晚》《游子吟》' }
              ]
            },
            {
              name: '家国文言文名篇',
              children: [
                { name: '《少年中国说(节选)》· 梁启超（少年智则国智，少年富则国富）' },
                { name: '《圆明园的毁灭》(铭记国耻，增强民族复兴使命)' }
              ]
            }
          ]
        },
        {
          name: '🔬 说明文方法与细节描写\n(实用与文学双轨)',
          itemStyle: { color: '#059669' },
          label: { backgroundColor: '#059669', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '四大核心说明方法',
              children: [
                { name: '列数字：准确量化事物特征' },
                { name: '举例子：通俗易懂具象说明' },
                { name: '打比方：生动形象增强趣味' },
                { name: '作比较：对比突出事物优缺点' }
              ]
            },
            {
              name: '五大人物细节描写',
              children: [
                { name: '外貌描写 · 语言描写 · 动作描写 · 神态描写 · 心理描写' }
              ]
            }
          ]
        },
        {
          name: '✍️ 450字习作与提速阅读\n(第三学段标尺)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '习作多元体裁',
              children: [
                { name: '说明文：《介绍一种事物》(运用说明方法条理分明)' },
                { name: '写人：《他“____”了》(抓典型细节刻画神态动作)' },
                { name: '抒情：《二十年后的家乡》《慈母情深》' }
              ]
            },
            {
              name: '速读技巧达标',
              children: [
                { name: '连词成句地读，眼睛余光扩大视幅' },
                { name: '带着问题默读，速度达到每分钟 300~400 字' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '📜 五年级必背古诗词 14 首名句精选',
        type: 'poetry',
        list: [
          '《示儿》· 陆游（死去元知万事空，但悲不见九州同。王师北定中原日，家祭无忘告乃翁）',
          '《题临安邸》· 林升（山外青山楼外楼，西湖歌舞几时休？）',
          '《己亥杂诗》· 龚自珍（我劝天公重抖擞，不拘一格降人才）',
          '《枫桥夜泊》· 张继（月落乌啼霜满天，江枫渔火对愁眠）',
          '《长相思》· 纳兰性德（风一更，雪一更，聒碎乡心梦不成，故园无此声）',
          '《游子吟》· 孟郊（谁言寸草心，报得三春晖）',
          '《蝉》· 虞世南（居高声自远，非是藉秋风）',
          '《送元二使安西》· 王维（劝君更尽一杯酒，西出阳关无故人）'
        ]
      }
    ]
  },

  // ==========================================
  // 六年级 (Grade 6)
  // ==========================================
  grade6: {
    id: 'grade6',
    name: '六年级',
    stage: '第三学段（5-6年级）· 小升初总复习与课标总达标',
    badge: '🎓 课标总达标终考',
    themeColor: '#e11d48',
    summary: '小学语文全学段总收官之年！达成课标全部 3000 识字 / 2500 写字总指标。八大修辞、八大病句、16 种标点符号全面通关，建立小升初阅读理解公式与 500 字大习作体系。',
    kpiStats: {
      shizi: '课标总达标: 识3000 / 写2500',
      gushi: '必背 13 首文言诗词',
      xiuci: '八大修辞与八大病句',
      xizuo: '500字综合大作文与小升初建模',
    },
    mindmapTree: {
      name: '🎓 小学六年级语文\n全景知识与能力架构',
      itemStyle: { color: '#e11d48', borderColor: '#be123c', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#e11d48', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '🛠️ 语法修辞与标点总关口\n(小升初语言基础)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '八大修辞手法全掌握',
              children: [
                { name: '比喻 · 拟人 · 排比 · 夸张 (艺术夸大)' },
                { name: '设问 (自问自答) · 反问 (无疑而问强调语气)' },
                { name: '对偶 (字数相等对仗) · 借代 (借用特征代本体)' }
              ]
            },
            {
              name: '八大病句类型精准修改',
              children: [
                { name: '成分残缺 · 搭配不当 · 语序混乱 · 前后矛盾' },
                { name: '重复啰嗦 · 句式杂糅 · 指代不明 · 不合逻辑' }
              ]
            },
            {
              name: '16种标点符号精通',
              children: [
                { name: '重点难点：破折号4大作用 (解释说明/声音延长/话题转折/递进)' },
                { name: '省略号5大作用 (引文省略/列举省略/说话断续/语意未尽)' },
                { name: '分号与书名号的准确使用' }
              ]
            }
          ]
        },
        {
          name: '📜 文言文与诗词名篇\n(高品位文言文学)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '文言文哲理名篇',
              children: [
                { name: '《学弈》· 孟子（一心以为有鸿鹄将至，思援弓缴而射之）' },
                { name: '《两小儿辩日》· 列子（孰为汝多知乎？）' },
                { name: '《伯牙鼓琴》· 吕氏春秋（高山流水，知音难求）' }
              ]
            },
            {
              name: '必背古诗词 (13首全落地)',
              children: [
                { name: '六上：《宿建德江》《六月二十七日望湖楼醉书》《西江月·夜行黄沙道中》《春夜喜雨》' },
                { name: '六下：《寒食》《迢迢牵牛星》《十五夜望月》《马诗》《石灰吟》《竹石》《泊船瓜洲》' }
              ]
            }
          ]
        },
        {
          name: '📖 经典文学与红色传统\n(整本书阅读方法)',
          itemStyle: { color: '#0ea5e9' },
          label: { backgroundColor: '#0ea5e9', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            { name: '革命经典单元：《狼牙山五壮士》《开国大典》《七律·长征》《十六年前的回忆》' },
            { name: '外国名家经典：《列夫·托尔斯泰·穷人》《卖火柴的小女孩》《鲁滨逊漂流记》' },
            { name: '爱国文人名篇：《鲁迅先生生平单元》(《好的故事》《我的伯父鲁迅先生》《少年闰土》)' }
          ]
        },
        {
          name: '✍️ 500字习作与答题建模\n(小升初升学通关)',
          itemStyle: { color: '#d97706' },
          label: { backgroundColor: '#d97706', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '500字综合大习作',
              children: [
                { name: '表达真情实感：《那个星期天》(心理时间流逝感)' },
                { name: '应用文通关：读后感、即兴演讲稿、倡议书、毕业赠言' },
                { name: '点面结合场面描写（如阅兵、拔河比赛）' }
              ]
            },
            {
              name: '小升初现代文阅读答题模型',
              children: [
                { name: '概括主要内容：“谁 + 在什么背景下 + 做了什么 + 结果怎样”' },
                { name: '词句赏析公式：修辞手法 + 表现对象特征 + 表达了作者怎样的思想感情' },
                { name: '理解句子含义：表面意思(本义) + 深层含义(文章主旨)' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '📜 六年级必背古诗文 13 首小升初名句大典',
        type: 'poetry',
        list: [
          '《春夜喜雨》· 杜甫（好雨知时节，当春乃发生。随风潜入夜，润物细无声）',
          '《石灰吟》· 于谦（千锤万凿出深山，烈火焚烧若等闲。粉骨碎身浑不怕，要留清白在人间）',
          '《竹石》· 郑燮（咬定青山不放松，立根原在破岩中。千磨万击还坚劲，任尔东西南北风）',
          '《马诗》· 李贺（大漠沙如雪，燕山月似钩。何当金络脑，快走踏清秋）',
          '《西江月·夜行黄沙道中》· 辛弃疾（稻花香里说丰年，听取蛙声一片）',
          '《宿建德江》· 孟浩然（移舟泊烟渚，日暮客愁新。野旷天低树，江清月近人）',
          '《泊船瓜洲》· 王安石（春风又绿江南岸，明月何时照我还）',
          '《迢迢牵牛星》· 汉乐府（盈盈一水间，脉脉不得语）'
        ]
      }
    ]
  }
}
