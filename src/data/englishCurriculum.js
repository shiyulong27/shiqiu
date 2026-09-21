/**
 * 小学 1~6 年级英语全景知识架构与课程标准数据集
 * 对齐教育部《义务教育英语课程标准》（2022年版）
 * 包含：自然拼读/国际音标、主题词汇、核心句型对话、时态语法演进、文学韵文与达标考评
 */

export const gradesList = [
  {
    id: 'grade1',
    name: '一年级',
    badge: '英语启蒙 · 听做视听与自然拼读筑基',
    stage: '预备学段 (1年级) · 启蒙语感',
    summary: '以“视听先行、兴趣为本”为核心。全面攻克 26 个英文字母规范大小写书写与单音自然拼读 (Phonics)，掌握 120 个常见高频词汇与 15 组日常礼貌小问候，建立纯正语感。',
    themeColor: '#d97706',
    kpiStats: {
      words: '认读 120 词',
      phonics: '26字母单音拼读',
      dialogue: '日常交际 15 组',
      songs: '经典童谣 8 首'
    }
  },
  {
    id: 'grade2',
    name: '二年级',
    badge: '语感进阶 · 拼读规律与功能日常问询',
    stage: '预备学段 (2年级) · 语感萌芽',
    summary: '突破长元音与辅音双拼 (Magic E / Blends)。拓展生活核心物象（身体、食物、文具、玩具），掌握喜好、能力、位置与拥有的功能问答，开启 50 词简短英文图文绘本阅读。',
    themeColor: '#ea580c',
    kpiStats: {
      words: '认读 200 词',
      phonics: 'Magic E & 辅音双拼',
      dialogue: '功能问答 25 组',
      reading: '绘本阅读 50 词'
    }
  },
  {
    id: 'grade3',
    name: '三年级',
    badge: '正式学段 · 词汇双扩容与 Be 动词语法启蒙',
    stage: '第一学段 (3年级) · 基础奠基',
    summary: '正式开启全国义务教育三会/四会考查。精熟元音字母组合，攻破 Be 动词口诀与人称代词主格系统，掌握星期、天气与时间概念，建立四线三格规范句子书写与段落认读。',
    themeColor: '#0284c7',
    kpiStats: {
      words: '课标 350 词 (掌握四会)',
      grammar: 'Be动词 & 人称代词',
      dialogue: '情景问询 30 组',
      writing: '四线三格规范造句'
    }
  },
  {
    id: 'grade4',
    name: '四年级',
    badge: '能力跃升 · 现在进行时与物主代词体系',
    stage: '第二学段 (4年级) · 稳步进阶',
    summary: '攻克现在进行时专项 (be + doing) 与动词变 -ing 三大黄金法则。全景掌握形容词性/名词性物主代词体系与情态动词 can/may，阅读篇幅达 80 词，能够看图进行多句连续口头描述。',
    themeColor: '#7c3aed',
    kpiStats: {
      words: '课标 550 词',
      tense: '现在进行时 be+doing',
      grammar: '双重物主代词体系',
      reading: '80 词短文细节提取'
    }
  },
  {
    id: 'grade5',
    name: '五年级',
    badge: '时态飞跃 · 一般过去时与一般将来时',
    stage: '第二学段 (5年级) · 综合提升',
    summary: '突破小学英语核心时态大关：一般过去时规则与不规则动词变化表，一般将来时 (be going to / will) 结构，结合频度副词与形容词比较级 (-er, more)，书写 4~6 句连贯的英文旅行日记或活动计划。',
    themeColor: '#059669',
    kpiStats: {
      words: '课标 800 词',
      tense: '一般过去时 & 将来时',
      grammar: '形容词比较级与频度词',
      composition: '连贯段落习作 4~6 句'
    }
  },
  {
    id: 'grade6',
    name: '六年级',
    badge: '小升初大成 · 四大时态全景融会贯通与高分读写',
    stage: '毕业总复习 (6年级) · 拔尖融会',
    summary: '小升初英语终极体系大成。四大核心时态（一般现在/现在进行/一般过去/一般将来）综合辨析，形容词副词最高级，特殊疑问句族、介词与数词全景，掌握命题作文四步法与初中衔接阅读。',
    themeColor: '#e11d48',
    kpiStats: {
      words: '1000+ 核心四会词',
      tenses: '四大时态对比与综合题眼',
      grammar: '最高级/介词/特殊疑问句',
      exam: '小升初满分读写大模型'
    }
  }
]

export const curriculumData = {
  // =========================================================================
  // 一年级 (Grade 1)
  // =========================================================================
  grade1: {
    ...gradesList[0],
    mindmapTree: {
      name: '🔤 小学一年级英语\n全景知识与能力架构',
      itemStyle: { color: '#d97706', borderColor: '#b45309', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#d97706', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '🔤 字母与拼读\n(Alphabet & Phonics)',
          itemStyle: { color: '#f59e0b' },
          label: { backgroundColor: '#f59e0b', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '26个英文字母规范书写',
              children: [
                { name: '大写字母一律占上两格：A B C D E F G H I J K L M N O P Q R S T U V W X Y Z' },
                { name: '小写字母分三类：占中格(a c e m n o r s u v w x z) · 占中上格(b d f h k l t) · 占中下格(g p q y)' },
                { name: '唯一占全三格小写字母：j' }
              ]
            },
            {
              name: '短元音与辅音自然拼读 (Short Vowels)',
              children: [
                { name: '短元音 /æ/：cat, bat, hat, apple, bag' },
                { name: '短元音 /e/：bed, red, pen, leg, egg' },
                { name: '短元音 /ɪ/：pig, big, sit, milk, fish' },
                { name: '短元音 /ɒ/：dog, box, hot, fox, orange' },
                { name: '短元音 /ʌ/：cup, sun, bus, run, duck' }
              ]
            },
            {
              name: 'CVC 单词自然拼读模型',
              children: [
                { name: '辅音+元音+辅音拼读法：c-a-t -> cat, d-o-g -> dog, b-u-s -> bus' },
                { name: '见词能读、听音能写的基础拼读感知' }
              ]
            }
          ]
        },
        {
          name: '🧸 主题分类核心词\n(120 Core Words)',
          itemStyle: { color: '#10b981' },
          label: { backgroundColor: '#10b981', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '萌宠动物 (Animals)',
              children: [
                { name: '常见家宠：cat (小猫), dog (小狗), bird (小鸟), rabbit (兔子)' },
                { name: '大型动物：panda (大熊猫), monkey (猴子), tiger (老虎), elephant (大象), lion (狮子)' }
              ]
            },
            {
              name: '缤纷色彩 (Colors)',
              children: [
                { name: '三原色与基础色：red (红), yellow (黄), blue (蓝)' },
                { name: '自然拓展色：green (绿), black (黑), white (白), orange (橙), purple (紫)' }
              ]
            },
            {
              name: '家庭称谓 (Family Members)',
              children: [
                { name: '核心长辈：father/dad (爸爸), mother/mom (妈妈)' },
                { name: '同辈平辈：brother (哥哥/弟弟), sister (姐姐/妹妹), baby (小婴儿)' }
              ]
            },
            {
              name: '基础数字 (Numbers 1~10)',
              children: [
                { name: '数字 1~5：one, two, three, four, five' },
                { name: '数字 6~10：six, seven, eight, nine, ten' }
              ]
            }
          ]
        },
        {
          name: '💬 日常交际与句型\n(Daily Expressions)',
          itemStyle: { color: '#3b82f6' },
          label: { backgroundColor: '#3b82f6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '问候与告别礼貌用语',
              children: [
                { name: 'Hello! / Hi! (你好！)' },
                { name: 'Good morning! / Good afternoon! (早上好！/ 下午好！)' },
                { name: 'Goodbye! / Bye-bye! / See you! (再见！)' }
              ]
            },
            {
              name: '自我介绍与姓名问答',
              children: [
                { name: 'What’s your name? (你叫什么名字？)' },
                { name: 'My name is Tim. / I’m Amy. (我叫蒂姆。/ 我是艾米。)' }
              ]
            },
            {
              name: '指认近处物象与颜色',
              children: [
                { name: 'What’s this? — It’s an apple / a panda. (这是什么？— 这是一个苹果/一只大熊猫。)' },
                { name: 'What colour is it? — It’s red. (它是什么颜色的？— 它是红色的。)' }
              ]
            },
            {
              name: '课堂常规听做指令',
              children: [
                { name: '动作指令：Stand up. (起立) · Sit down. (请坐)' },
                { name: '操作指令：Open your book. (翻开书) · Listen to me. (听我说)' }
              ]
            }
          ]
        },
        {
          name: '🎵 童谣与韵律歌谣\n(Songs & Chants)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '经典磨耳朵必背童谣',
              children: [
                { name: '《The Alphabet Song》(26个字母歌)' },
                { name: '《Twinkle, Twinkle, Little Star》(一闪一闪小星星)' },
                { name: '《Ten Little Indian Boys》(十个印第安小男孩·数数律动)' },
                { name: '《Head, Shoulders, Knees and Toes》(身体律动操)' }
              ]
            },
            {
              name: '朗朗上口自然拼读 Chants',
              children: [
                { name: 'A is for apple, /æ/-/æ/-apple.' },
                { name: 'B is for banana, /b/-/b/-banana.' },
                { name: 'C is for cat, /k/-/k/-cat.' }
              ]
            }
          ]
        },
        {
          name: '🎯 启蒙达标标尺\n(Assessment Rubrics)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '听辨与反应标尺',
              children: [
                { name: '听懂日常指令并能做出对应的动作反馈（TPR教学达标）' },
                { name: '听到录音能指认 120 个核心词汇图卡' }
              ]
            },
            {
              name: '口语表达与书写标尺',
              children: [
                { name: '能用英语主动进行 3 句以上问候、道谢与道别' },
                { name: '正确在四线三格中规范书写 26 个字母大小写，笔顺与占格无误' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '🌟 一年级核心单词 120 词经典分类速查表',
        list: [
          '【动物】cat (小猫), dog (小狗), bird (小鸟), rabbit (兔子), panda (大熊猫), monkey (猴子), fish (鱼), duck (鸭子), bear (熊), pig (猪)',
          '【颜色】red (红), yellow (黄), blue (蓝), green (绿), black (黑), white (白), orange (橙), purple (紫), pink (粉), brown (棕)',
          '【数字】one (1), two (2), three (3), four (4), five (5), six (6), seven (7), eight (8), nine (9), ten (10)',
          '【家庭】father/dad (爸爸), mother/mom (妈妈), brother (兄弟), sister (姐妹), grandpa (爷爷/外公), grandma (奶奶/外婆), baby (婴儿)',
          '【学校】book (书), pen (钢笔), pencil (铅笔), bag (书包), ruler (直尺), eraser (橡皮), desk (书桌), chair (椅子), school (学校)',
          '【动作】stand (站), sit (坐), open (开), close (关), look (看), listen (听), read (读), sing (唱), jump (跳), run (跑)'
        ]
      },
      {
        title: '💬 一年级日常高频实用情景金句 (支持点读)',
        list: [
          'Hello, I am Lucy. Nice to meet you! (你好，我是露西。很高兴认识你！)',
          'Good morning, Miss White! (早上好，怀特老师！)',
          'What is your name? — My name is Mike. (你叫什么名字？— 我叫迈克。)',
          'How are you? — I am fine, thank you. (你好吗？— 我很好，谢谢你。)',
          'What is this? — It is a cute panda. (这是什么？— 这是一只可爱的大熊猫。)',
          'What colour is the bag? — It is blue. (这个书包是什么颜色的？— 它是蓝色的。)',
          'How many apples? — One, two, three, four, five! (有多少个苹果？— 1、2、3、4、5个！)',
          'Thank you very much! — You are welcome. (非常感谢你！— 不客气。)'
        ]
      }
    ]
  },

  // =========================================================================
  // 二年级 (Grade 2)
  // =========================================================================
  grade2: {
    ...gradesList[1],
    mindmapTree: {
      name: '🔤 小学二年级英语\n全景知识与能力架构',
      itemStyle: { color: '#ea580c', borderColor: '#c2410c', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#ea580c', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '🔤 拼读进阶\n(Magic E & Blends)',
          itemStyle: { color: '#f97316' },
          label: { backgroundColor: '#f97316', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: 'Magic E (元音长音魔法规则)',
              children: [
                { name: 'a_e 发长音 /eɪ/：cake (蛋糕), lake (湖), make (制作), name (名字)' },
                { name: 'i_e 发长音 /aɪ/：bike (自行车), like (喜欢), kite (风筝), five (五)' },
                { name: 'o_e 发长音 /əʊ/：nose (鼻子), rose (玫瑰), home (家), rope (绳子)' },
                { name: 'u_e 发长音 /juː/：cute (可爱的), tube (试管), mute (静音)' }
              ]
            },
            {
              name: '常用辅音连缀组合 (Consonant Digraphs)',
              children: [
                { name: 'sh 组合发 /ʃ/：ship (轮船), shop (商店), fish (鱼), wash (洗)' },
                { name: 'ch 组合发 /tʃ/：chair (椅子), chicken (鸡肉), touch (触碰)' },
                { name: 'th 组合发清辅音 /θ/ 与浊辅音 /ð/：thank (谢谢), thin (瘦) / this (这), that (那)' },
                { name: 'wh 组合发 /w/：what (什么), where (哪里), white (白色)' }
              ]
            }
          ]
        },
        {
          name: '🍎 生活场景核心词\n(200 Extended Words)',
          itemStyle: { color: '#10b981' },
          label: { backgroundColor: '#10b981', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '身体器官与五官 (Body Parts)',
              children: [
                { name: '头部五官：eye (眼睛), ear (耳朵), nose (鼻子), mouth (嘴巴), face (脸)' },
                { name: '躯干四肢：head (头), arm (手臂), hand (手), leg (腿), foot (脚)' }
              ]
            },
            {
              name: '美味饮食 (Food & Drinks)',
              children: [
                { name: '主食与甜点：rice (米饭), noodles (面条), bread (面包), cake (蛋糕)' },
                { name: '营养饮品与果蔬：milk (牛奶), juice (果汁), water (水), egg (鸡蛋), banana (香蕉)' }
              ]
            },
            {
              name: '童年玩具与运动 (Toys & Sports)',
              children: [
                { name: '经典玩具：doll (洋娃娃), car (小汽车), ball (球), kite (风筝), train (小火车)' },
                { name: '活力运动：swim (游泳), football (足球), basketball (篮球), dance (跳舞)' }
              ]
            },
            {
              name: '空间方位介词 (Prepositions)',
              children: [
                { name: '三大核心基础介词：in (在...里面), on (在...上面), under (在...下面)' }
              ]
            }
          ]
        },
        {
          name: '💬 功能问答与核心句型\n(Functional Q&A)',
          itemStyle: { color: '#3b82f6' },
          label: { backgroundColor: '#3b82f6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '喜好与需求问询 (Like & Want)',
              children: [
                { name: 'Do you like apples? — Yes, I do. / No, I don’t.' },
                { name: 'I like bananas and milk. (我喜欢香蕉和牛奶。)' },
                { name: 'Can I have some water, please? (我能喝点水吗？)' }
              ]
            },
            {
              name: '能力表达与询问 (Ability: Can)',
              children: [
                { name: 'Can you swim / fly / draw? (你会游泳/飞/画画吗？)' },
                { name: 'Yes, I can. / No, I can’t. (是的我会。/ 不我不会。)' },
                { name: 'Birds can fly. Fish can swim. (鸟儿会飞，鱼儿会游。)' }
              ]
            },
            {
              name: '空间位置探寻 (Where is it?)',
              children: [
                { name: 'Where is my schoolbag? (我的书包在哪里？)' },
                { name: 'It’s on the desk. / It’s under the chair. (在书桌上。/ 在椅子下面。)' }
              ]
            },
            {
              name: '身体特征描述 (Have / Has)',
              children: [
                { name: 'I have two big eyes and a small mouth. (我有两只大眼睛和一张小嘴巴。)' },
                { name: 'The elephant has a long nose. (大象有一条长长的鼻子。)' }
              ]
            }
          ]
        },
        {
          name: '📚 简短绘本与小剧场\n(Picture Books)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '50 词趣味分级绘本精读',
              children: [
                { name: '《Brown Bear, Brown Bear, What Do You See?》(颜色动物韵文经典)' },
                { name: '《From Head to Toe》(动作与能力模仿)' },
                { name: '《Where is Baby’s Belly Button?》(捉迷藏方位绘本)' }
              ]
            },
            {
              name: '课堂角色扮演情景剧 (Role-play)',
              children: [
                { name: '情景 1：在水果店买水果 (At the Fruit Shop)' },
                { name: '情景 2：寻找走丢的小猫 (Where is the Kitty?)' }
              ]
            }
          ]
        },
        {
          name: '🎯 二年级考评标尺\n(Assessment Standards)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '听读理解质量标尺',
              children: [
                { name: '能借助插图听懂并读懂 30~50 词的简短故事或对话' },
                { name: '能听音正确圈出符合 Magic E 发音规律的生词' }
              ]
            },
            {
              name: '交际与抄写规范标尺',
              children: [
                { name: '能针对喜好、能力或物品位置与同伴进行 3 轮以上连贯问答' },
                { name: '规范书写单词和简短句子，词与词之间留出一个字母间距，首字母大写，句末有标点' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '🌟 二年级进阶词汇 200 词主题核心盘',
        list: [
          '【五官身体】head (头), face (脸), hair (头发), eye (眼睛), ear (耳朵), nose (鼻子), mouth (嘴), tooth/teeth (牙齿), arm (胳膊), hand (手), leg (腿), foot/feet (脚)',
          '【日常饮食】rice (米), bread (面包), cake (蛋糕), egg (蛋), meat (肉), fish (鱼), chicken (鸡肉), milk (牛奶), juice (果汁), water (水), tea (茶), soup (汤)',
          '【玩具运动】toy (玩具), doll (洋娃娃), ball (球), kite (风筝), car (车), bike (自行车), boat (船), plane (飞机), swim (游泳), jump (跳), run (跑), play (玩)',
          '【方位地点】in (在...里), on (在...上), under (在...下), near (在...附近), behind (在...后), park (公园), zoo (动物园), room (房间), home (家), shop (商店)'
        ]
      },
      {
        title: '💬 二年级生活情境核心对话卡 (支持点读)',
        list: [
          'Look at the elephant! It has big ears and a long nose. (看那只大象！它有大大的耳朵和长长的鼻子。)',
          'Do you like bananas? — Yes, I like sweet bananas very much! (你喜欢香蕉吗？— 是的，我非常喜欢甜甜的香蕉！)',
          'Can you swim? — No, I can’t. But I can run very fast! (你会游泳吗？— 不，我不会。但是我可以跑得非常快！)',
          'Where is my ruler? — Look! It is under your chair. (我的尺子在哪里？— 看！它在你的椅子下面。)',
          'How old are you? — I am eight years old. (你多大了？— 我八岁了。)',
          'Have some juice, please. — Thank you, Mom! (请喝点果汁吧。— 谢谢妈妈！)'
        ]
      }
    ]
  },

  // =========================================================================
  // 三年级 (Grade 3)
  // =========================================================================
  grade3: {
    ...gradesList[2],
    mindmapTree: {
      name: '🔤 小学三年级英语\n全景知识与能力架构',
      itemStyle: { color: '#0284c7', borderColor: '#0369a1', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#0284c7', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '🔤 语音与字母组合\n(Vowel Digraphs & IPA)',
          itemStyle: { color: '#38bdf8' },
          label: { backgroundColor: '#38bdf8', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '常见元音字母组合规律',
              children: [
                { name: 'ee / ea 发长音 /iː/：see (看见), meet (遇见), tea (茶), read (读)' },
                { name: 'oo 组合长短音：发长音 /uː/ (zoo, food) · 发短音 /ʊ/ (book, look, foot)' },
                { name: 'ar / or 字母组合：ar 发 /ɑː/ (car, park) · or 发 /ɔː/ (horse, morning, fork)' },
                { name: 'al / au / aw 组合：all, tall, ball, draw, autumn' }
              ]
            },
            {
              name: '音节划分与单词重音感知',
              children: [
                { name: '单音节词 (One syllable)：cat, book, pen, red' },
                { name: '双音节词 (Two syllables)：pen-cil, sis-ter, win-dow, doc-tor' }
              ]
            }
          ]
        },
        {
          name: '📝 课标三会四会词汇\n(350 Core Words)',
          itemStyle: { color: '#10b981' },
          label: { backgroundColor: '#10b981', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '班级教室与学校设施 (Classroom)',
              children: [
                { name: '物品设施：blackboard (黑板), light (电灯), fan (风扇), floor (地板), wall (墙壁)' },
                { name: '功能场所：classroom (教室), library (图书馆), playground (操场), art room (美术室)' }
              ]
            },
            {
              name: '星期与气象天气 (Days & Weather)',
              children: [
                { name: '星期一至星期日：Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday' },
                { name: '常见天气形容词：sunny (晴天), rainy (下雨), cloudy (多云), windy (有风), snowy (下雪)' }
              ]
            },
            {
              name: '一日时间与作息 (Time & Daily)',
              children: [
                { name: '时段划分：morning (早晨), afternoon (下午), evening (晚上), night (深夜)' },
                { name: '钟点整点：o’clock (点钟), thirty (三十), minute (分钟)' }
              ]
            }
          ]
        },
        {
          name: '⚖️ 语法核心骨架\n(Grammar Fundamentals)',
          itemStyle: { color: '#3b82f6' },
          label: { backgroundColor: '#3b82f6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '人称代词主格系统 (Personal Pronouns)',
              children: [
                { name: '第一人称：I (我) · we (我们)' },
                { name: '第二人称：you (你 / 你们)' },
                { name: '第三人称：he (他) · she (她) · it (它) · they (他们/她们/它们)' }
              ]
            },
            {
              name: 'Be 动词黄金法则与口诀',
              children: [
                { name: '核心速记口诀：“我(I)用am，你(you)用are，is连着他她它(he/she/it)；单数is，复数are”' },
                { name: '肯定句：I am a student. · She is tall. · They are happy.' },
                { name: '否定句：在 be 动词后直接加 not (am not, is not / isn’t, are not / aren’t)' },
                { name: '一般疑问句：Be 动词提前至句首 (Are you ready? Is he your brother?)' }
              ]
            },
            {
              name: '名词单数变复数基础规则',
              children: [
                { name: '一般情况直接加 -s：book -> books, apple -> apples, bag -> bags' },
                { name: '以 s, x, sh, ch 结尾加 -es：bus -> buses, box -> boxes, watch -> watches' },
                { name: '不规则特殊复数：child -> children, foot -> feet, tooth -> teeth' }
              ]
            },
            {
              name: 'There be 句型初阶 (某处有某物)',
              children: [
                { name: 'There is + 单数名词/不可数名词 (There is a book on the desk.)' },
                { name: 'There are + 复数名词 (There are three pens in the box.)' }
              ]
            }
          ]
        },
        {
          name: '🗣️ 交际情景与功能句型\n(Situations)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '询问时间与时刻',
              children: [
                { name: 'What time is it? — It’s eight o’clock. (几点了？— 八点整。)' },
                { name: 'It’s time for breakfast / school. (该吃早饭了/该去上学了。)' }
              ]
            },
            {
              name: '询问天气与温度',
              children: [
                { name: 'What’s the weather like today? — It’s warm and sunny. (今天天气如何？— 暖和且晴朗。)' },
                { name: 'Is it cold outside? — Yes, it is. / No, it isn’t.' }
              ]
            },
            {
              name: '提议与发出邀请 (Let’s...)',
              children: [
                { name: 'Let’s go to the playground! (我们去操场吧！)' },
                { name: 'Great! / Good idea! (太棒了！/ 好主意！)' }
              ]
            }
          ]
        },
        {
          name: '🎯 三年级考评标尺\n(Assessment Standards)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '基础语音与词汇达标',
              children: [
                { name: '掌握 350 个核心四会词汇的正确拼写与中文语义' },
                { name: '能读准包含 ee, ea, oo, ar 等组合的单音节与双音节词' }
              ]
            },
            {
              name: '语法与书写考评质量标准',
              children: [
                { name: '准确熟练运用 Be 动词（am/is/are）填空与完成句子变换，正确率达 95% 以上' },
                { name: '在四线三格中规范书写英文句子：首字母大写、词距均匀、标点规范' },
                { name: '阅读 50~80 词短文，能从文中直接提取关键信息回答填空' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '🌟 三年级 350 课标核心词汇重点集锦',
        list: [
          '【学校教室】classroom (教室), window (窗户), door (门), picture (图片), blackboard (黑板), light (灯), teacher’s desk (讲台), computer (电脑), fan (风扇), floor (地板)',
          '【时间星期】time (时间), o’clock (点钟), day (天), week (周), Monday (周一), Tuesday (周二), Wednesday (周三), Thursday (周四), Friday (周五), Saturday (周六), Sunday (周日)',
          '【气象气候】weather (天气), hot (热), warm (暖和), cool (凉爽), cold (冷), sunny (晴), rainy (雨), snowy (雪), cloudy (多云), windy (风)',
          '【人称代词】I (我), you (你/你们), he (他), she (她), it (它), we (我们), they (他们), this (这个), that (那个), these (这些), those (那些)'
        ]
      },
      {
        title: '⚖️ 三年级核心语法精练与经典考查句型',
        list: [
          '【Be动词搭配】I am a boy. / You are my best friend. / He is ten years old. / They are in the classroom.',
          '【There be 句型】There is a computer on the teacher’s desk. / There are thirty students in our class.',
          '【时刻询问】What time is it now? — It is seven thirty. It is time to get up!',
          '【天气询问】What is the weather like in Beijing? — It is cold and snowy. Put on your coat.',
          '【名词复数】I have one apple, but Lucy has three apples and two boxes.'
        ]
      }
    ]
  },

  // =========================================================================
  // 四年级 (Grade 4)
  // =========================================================================
  grade4: {
    ...gradesList[3],
    mindmapTree: {
      name: '🔤 小学四年级英语\n全景知识与能力架构',
      itemStyle: { color: '#7c3aed', borderColor: '#6d28d9', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#7c3aed', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '🏃 现在进行时专项\n(Present Continuous)',
          itemStyle: { color: '#a855f7' },
          label: { backgroundColor: '#a855f7', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '现在进行时核心结构',
              children: [
                { name: '基本公式：主语 + be (am/is/are) + 动词-ing + 其他' },
                { name: '标志性时间词：now (现在), look! (看！), listen! (听！), at the moment' }
              ]
            },
            {
              name: '动词 -ing 变化三大黄金法则',
              children: [
                { name: '① 一般情况直接加 -ing：read -> reading, play -> playing, do -> doing' },
                { name: '② 以不发音的 e 结尾，去 e 加 -ing：make -> making, write -> writing, dance -> dancing' },
                { name: '③ 重读闭音节、末尾辅元辅，双写尾字母加 -ing：run -> running, swim -> swimming, sit -> sitting' }
              ]
            },
            {
              name: '进行时四大句型变换',
              children: [
                { name: '肯定句：He is reading a book.' },
                { name: '否定句：He is not reading a book. (isn’t reading)' },
                { name: '一般疑问句：Is he reading a book? — Yes, he is. / No, he isn’t.' },
                { name: '特殊疑问句：What are you doing? — I am writing an email.' }
              ]
            }
          ]
        },
        {
          name: '👔 物主代词与情态动词\n(Pronouns & Modals)',
          itemStyle: { color: '#3b82f6' },
          label: { backgroundColor: '#3b82f6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '形容词性 vs 名词性物主代词',
              children: [
                { name: '形容词性 (形物代+名词)：my bag, your pen, his dog, her book, our school, their car' },
                { name: '名词性 (名物代独立使用)：mine, yours, his, hers, ours, theirs (This pen is mine.)' },
                { name: '名词所有格：Tom’s hat (汤姆的帽子), the teacher’s desk' }
              ]
            },
            {
              name: '情态动词 (Modal Verbs: Can / May / Must)',
              children: [
                { name: '情态动词后必须紧跟动词原形：can swim, may come, must obey' },
                { name: '请求许可：May I come in? / Can I use your ruler, please?' }
              ]
            }
          ]
        },
        {
          name: '🗺️ 拓展主题词汇\n(550 Core Words)',
          itemStyle: { color: '#10b981' },
          label: { backgroundColor: '#10b981', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '社会职业与身份 (Jobs & Professions)',
              children: [
                { name: '常用职业：teacher (教师), doctor (医生), nurse (护士), police officer (警察), farmer (农民), driver (司机), cook (厨师)' }
              ]
            },
            {
              name: '一年四季与传统节日 (Seasons & Festivals)',
              children: [
                { name: '四季变换：spring (春), summer (夏), autumn/fall (秋), winter (冬)' },
                { name: '中外节日：New Year (新年), Children’s Day (儿童节), Mid-Autumn Festival (中秋节), Christmas (圣诞节)' }
              ]
            },
            {
              name: '日常作息动作词组 (Daily Routines)',
              children: [
                { name: '从晨到晚：get up (起床), eat breakfast (吃早饭), go to school (去上学), have lunch (吃午饭), do homework (做作业), go to bed (睡觉)' }
              ]
            }
          ]
        },
        {
          name: '📖 篇章阅读与信息提取\n(Reading Comprehension)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '80 词短文阅读技巧',
              children: [
                { name: '定位寻读法 (Scanning)：带着人名、时间、地点回原文定位关键词句' },
                { name: '是非判断 (True or False) 陷阱甄别：注意 not, every, only 等修饰词' }
              ]
            },
            {
              name: '图文匹配与连贯表达',
              children: [
                { name: '观察 3~4 幅连续图画，按时间顺序排列句子或补全对话' }
              ]
            }
          ]
        },
        {
          name: '🎯 四年级考评标尺\n(Assessment Standards)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '现在进行时运用达标',
              children: [
                { name: '能百分之百准确拼写 30 个常用动词的 -ing 形式，牢记 run, swim, dance 等特殊变化' },
                { name: '能用现在进行时准确描述正在发生的一组动作（至少连续 4 句完整话）' }
              ]
            },
            {
              name: '阅读理解与书写质量',
              children: [
                { name: '读懂 80 词左右的记叙性短文，提取细节并正确回答 5 道理解题' },
                { name: '仿照例句，完成 40 词左右的“我的日常一天”或“四季活动”小短文' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '🌟 四年级 550 课标核心词汇重点盘',
        list: [
          '【职业身份】teacher (教师), student (学生), doctor (医生), nurse (护士), driver (司机), farmer (农民), cook (厨师), singer (歌手), writer (作家), police officer (警官)',
          '【四季自然】spring (春), summer (夏), autumn (秋), winter (冬), warm (暖), hot (热), cool (凉), cold (冷), plant (植物), flower (花), tree (树), leaf/leaves (树叶)',
          '【动作词组】get up (起床), eat breakfast (吃早饭), go to school (上学), have English class (上英语课), play sports (做运动), do homework (做作业), clean the room (打扫房间)',
          '【物主代词】my (我的), your (你的), his (他的), her (她的), our (我们的), their (他们的) / mine (我的), yours (你的), hers (她的), ours (我们的), theirs (他们的)'
        ]
      },
      {
        title: '🏃 现在进行时经典句型对比训练 (支持点读)',
        list: [
          'What are you doing now? — I am reading an interesting storybook. (你现在正在做什么？— 我正在读一本有趣的故事书。)',
          'Look! The children are running and playing football on the playground. (看！孩子们正在操场上跑步和踢足球。)',
          'Listen! Who is singing in the music room? — It is Sarah. (听！谁正在音乐教室里唱歌？— 是萨拉。)',
          'Is your mother cooking dinner in the kitchen? — Yes, she is. (你的妈妈正在厨房里做晚饭吗？— 是的，她是。)',
          'Whose coat is this? — It is not mine. It is Lily’s coat. (这是谁的大衣？— 不是我的。这是莉莉的大衣。)'
        ]
      }
    ]
  },

  // =========================================================================
  // 五年级 (Grade 5)
  // =========================================================================
  grade5: {
    ...gradesList[4],
    mindmapTree: {
      name: '🔤 小学五年级英语\n全景知识与能力架构',
      itemStyle: { color: '#059669', borderColor: '#047857', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#059669', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '⏳ 一般过去时专项\n(Simple Past Tense)',
          itemStyle: { color: '#10b981' },
          label: { backgroundColor: '#10b981', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '一般过去时概念与时间标志',
              children: [
                { name: '核心定义：表示过去某个时间发生的动作或存在的状态' },
                { name: '标志性时间词：yesterday (昨天), yesterday morning, last night/week/year, two days ago (两天前), in 2020' }
              ]
            },
            {
              name: '规则动词过去式变化 4 大法则',
              children: [
                { name: '① 一般动词直接加 -ed：play -> played, clean -> cleaned, watch -> watched' },
                { name: '② 以 e 结尾直接加 -d：live -> lived, dance -> danced, like -> liked' },
                { name: '③ 辅音+y 结尾，变 y 为 i 再加 -ed：study -> studied, cry -> cried, carry -> carried' },
                { name: '④ 重读闭音节双写尾字母加 -ed：stop -> stopped, plan -> planned' }
              ]
            },
            {
              name: '小学必背 30 个核心不规则动词',
              children: [
                { name: '高频动词 1组：is/am -> was · are -> were · do -> did · go -> went · have -> had' },
                { name: '高频动词 2组：see -> saw · eat -> ate · buy -> bought · get -> got · take -> took' },
                { name: '高频动词 3组：read -> read (读音/red/) · say -> said · come -> came · make -> made' }
              ]
            },
            {
              name: '过去时句型与助动词 Did',
              children: [
                { name: '肯定句：I went to Beijing last summer holiday.' },
                { name: '否定句 (didn’t + 动词原形)：I didn’t go to school yesterday.' },
                { name: '一般疑问句 (Did + 动词原形)：Did you see a film? — Yes, I did. / No, I didn’t.' }
              ]
            }
          ]
        },
        {
          name: '🚀 一般将来时专项\n(Simple Future Tense)',
          itemStyle: { color: '#0284c7' },
          label: { backgroundColor: '#0284c7', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: 'be going to 与 will 结构辨析',
              children: [
                { name: 'be going to + 动词原形：表示计划、打算、准备做某事 (I am going to visit my grandparents this weekend.)' },
                { name: 'will + 动词原形：表示将来的客观趋势或主观意愿 (It will rain tomorrow. / I will help you.)' },
                { name: '标志性时间词：tomorrow (明天), next week/month, soon (不久), this afternoon' }
              ]
            }
          ]
        },
        {
          name: '📊 形容词比较级与频度副词\n(Comparison & Frequency)',
          itemStyle: { color: '#f59e0b' },
          label: { backgroundColor: '#f59e0b', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '形容词比较级规则与句型',
              children: [
                { name: '规则变化：tall -> taller, short -> shorter, big -> bigger, heavy -> heavier' },
                { name: '多音节加 more：more beautiful, more interesting' },
                { name: '核心比较句型：A + be + 形容词比较级 + than + B (Tom is taller than Mike.)' }
              ]
            },
            {
              name: '五大频度副词概率阶梯',
              children: [
                { name: 'always (100% 总是) > usually (80% 通常) > often (60% 经常) > sometimes (30% 有时) > never (0% 从不)' }
              ]
            }
          ]
        },
        {
          name: '✍️ 段落习作与主题表达\n(Writing & Discourse)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '经典主题短文结构',
              children: [
                { name: '主题 1：难忘的假期生活 (My Unforgettable Holiday·过去时)' },
                { name: '主题 2：我的周末计划 (My Weekend Plan·将来时)' },
                { name: '主题 3：介绍我的最好朋友 (My Best Friend·比较级与现在时)' }
              ]
            }
          ]
        },
        {
          name: '🎯 五年级考评标尺\n(Assessment Standards)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '时态综合运用达标标尺',
              children: [
                { name: '熟练默写 30 个核心不规则动词过去式，无拼写错误' },
                { name: '能准确根据时间状语甄别现在时、进行时、过去时与将来时' }
              ]
            },
            {
              name: '书面表达与阅读综合标尺',
              children: [
                { name: '阅读 100~120 词叙事短文，完成推断主旨、代词指代与上下文推测' },
                { name: '独立写出 5~7 句逻辑连贯、语法准确、时态统一的英文小短文' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '🌟 五年级 800 课标核心词汇 & 不规则动词过去式速记盘',
        list: [
          '【核心不规则过去式】go -> went, see -> saw, eat -> ate, have/has -> had, do/does -> did, buy -> bought, take -> took, get -> got, come -> came, read -> read, write -> wrote',
          '【旅行休闲】travel (旅行), trip (旅行), museum (博物馆), park (公园), hotel (宾馆), beach (沙滩), mountain (高山), ticket (票), take pictures (拍照), delicious (美味的)',
          '【形容词比较级】tall -> taller (更高), short -> shorter (更矮), strong -> stronger (更强壮), thin -> thinner (更瘦), heavy -> heavier (更重), fast -> faster (更快)',
          '【频度副词】always (总是), usually (通常), often (经常), sometimes (有时), never (从不), weekend (周末), hobby (爱好), habit (习惯)'
        ]
      },
      {
        title: '⏳ 过去时与将来时核心例句对比 (支持点读)',
        list: [
          'Where did you go last weekend? — I went to the forest park with my family. (上周末你去了哪里？— 我和家人去了森林公园。)',
          'Did you take any pictures there? — Yes, I took a lot of beautiful pictures. (你在那里拍照了吗？— 是的，我拍了很多漂亮的照片。)',
          'What are you going to do tomorrow? — I am going to buy a new dictionary. (你明天打算做什么？— 我打算去买一本新字典。)',
          'Who is heavier, you or your brother? — My brother is heavier than me. (谁更重，你还是你的弟弟？— 我弟弟比我更重。)',
          'I always get up at six thirty, but yesterday I got up at seven o’clock. (我总是六点半起床，但昨天我七点钟才起床。)'
        ]
      }
    ]
  },

  // =========================================================================
  // 六年级 (Grade 6)
  // =========================================================================
  grade6: {
    ...gradesList[5],
    mindmapTree: {
      name: '🔤 小学六年级英语\n小升初总复习与大成架构',
      itemStyle: { color: '#e11d48', borderColor: '#be123c', borderWidth: 2 },
      label: { fontSize: 14, fontWeight: 'bold', color: '#fff', backgroundColor: '#e11d48', padding: [6, 12], borderRadius: 8 },
      children: [
        {
          name: '🔄 四大核心时态综合贯通\n(Tenses Synthesis)',
          itemStyle: { color: '#f43f5e' },
          label: { backgroundColor: '#f43f5e', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '四大时态对比与综合题眼',
              children: [
                { name: '① 一般现在时：经常性规律与真理 · 动词单三加 -s/-es · 标志：often, every day, usually' },
                { name: '② 现在进行时：正在发生的动作 · be (am/is/are) + doing · 标志：now, look, listen' },
                { name: '③ 一般过去时：过去发生的事情 · 动词用过去式 (did) · 标志：yesterday, last year, ago' },
                { name: '④ 一般将来时：未来打算与趋势 · will / be going to + do · 标志：tomorrow, next month' }
              ]
            },
            {
              name: '小升初时态混合高频考点',
              children: [
                { name: '情境时态交叉题：I usually go by bus, but yesterday I walked.' },
                { name: '助动词恢复原形规律：Do/Does/Did/Will 之后动词一律恢复原形！' }
              ]
            }
          ]
        },
        {
          name: '🏆 进阶语法专项族\n(Advanced Grammar)',
          itemStyle: { color: '#3b82f6' },
          label: { backgroundColor: '#3b82f6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '形容词与副词最高级 (Superlatives)',
              children: [
                { name: '变化规则：直接加 -est (tallest) · 以 e 结尾加 -st (nicest) · 双写加 -est (biggest) · 辅音+y 变 i 加 -est (happiest)' },
                { name: '多音节加 the most：the most famous, the most exciting' },
                { name: '核心句式：主语 + be + the + 最高级 + of/in 范围 (The Yangtze River is the longest river in China.)' }
              ]
            },
            {
              name: '特殊疑问句全家族 (Wh- Questions)',
              children: [
                { name: '基础问句：Who (谁) · What (什么) · Where (哪里) · When (何时) · Why (为什么) · Which (哪个)' },
                { name: '复合问句：How many (多少数量·可数) · How much (多少钱/不可数) · How often (多久一次) · How long (多长)' }
              ]
            },
            {
              name: '介词全景与数词辨析 (Prepositions & Numbers)',
              children: [
                { name: '时间介词辨析：at 具体时刻 (at 7:00) · on 具体某天 (on Monday, on May 1st) · in 年月季节时段 (in 2026, in spring)' },
                { name: '基数词变序数词口诀：一二三特殊记 (first, second, third)；八去t (eighth)，九去e (ninth)；ve要用f替 (fifth, twelfth)；ty变tie (twentieth)；几十几只变个位' }
              ]
            }
          ]
        },
        {
          name: '✍️ 小升初高分习作模型\n(Writing Strategies)',
          itemStyle: { color: '#8b5cf6' },
          label: { backgroundColor: '#8b5cf6', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '满分作文黄金四步法',
              children: [
                { name: '① 审题立意：确定文章人称（第几人称）与主要时态（过去/现在/将来）' },
                { name: '② 拟定提纲：三段式结构（总起阐明观点 -> 分述 2~3 个具体细节 -> 总结抒发情感）' },
                { name: '③ 升级衔接词：运用 and, but, so, because, however, first, next, finally 增强逻辑' },
                { name: '④ 严格自查：主谓一致（单三）、时态前后统一、名词单复数、标点大小写' }
              ]
            },
            {
              name: '小升初三大母题模板',
              children: [
                { name: '母题 1：人物介绍与偶像 (My Favorite Teacher / My Role Model)' },
                { name: '母题 2：理想与未来 (My Dream / Changes in Me)' },
                { name: '母题 3：难忘活动与旅行 (An Exciting Trip / A Happy Day)' }
              ]
            }
          ]
        },
        {
          name: '🎯 毕业达标与考评大典\n(Graduation Standards)',
          itemStyle: { color: '#10b981' },
          label: { backgroundColor: '#10b981', color: '#fff', padding: [5, 10], borderRadius: 6, fontWeight: 'bold' },
          children: [
            {
              name: '词汇语法综合达标',
              children: [
                { name: '100% 掌握课标 1000+ 核心词汇，做到听读拼写全过关' },
                { name: '单项选择与语法填空综合正确率达 95% 以上' }
              ]
            },
            {
              name: '阅读理解与书面表达大成',
              children: [
                { name: '阅读 150 词左右英文短文，完成主旨概括、细节推断与推理判断' },
                { name: '书写 50~80 词结构严谨、时态准确、语言优美的高分英文小短文' }
              ]
            }
          ]
        }
      ]
    },
    tables: [
      {
        title: '🏆 六年级小升初核心必背词汇与语法大全',
        list: [
          '【四大时态动词对比】play (一般现在) -> is playing (现在进行) -> played (一般过去) -> will play (一般将来)',
          '【疑问词家族】who (谁), whose (谁的), which (哪一个), where (哪里), when (何时), why (为什么), how (怎样), how many (多少), how much (多少钱), how old (几岁), how tall (多高), how heavy (多重), how long (多长)',
          '【形容词最高级】tallest (最高), shortest (最矮), biggest (最大), smallest (最小), happiest (最快乐), best (最好), worst (最差), most beautiful (最美), most exciting (最刺激)',
          '【常用连接词】and (并且), but (但是), or (或者), so (所以), because (因为), then (然后), after that (在那之后), finally (最后)'
        ]
      },
      {
        title: '✍️ 小升初高分习作经典范文与句型剖析 (支持点读)',
        list: [
          'I had an unforgettable summer holiday last year. I went to Beijing with my parents by high-speed train. (去年我度过了一个难忘的暑假。我和父母乘高铁去了北京。)',
          'We visited the Great Wall and the Palace Museum. The Great Wall is the most famous place in China. (我们参观了长城和故宫。长城是中国最著名的地方。)',
          'We took a lot of photos and ate delicious roast duck. Although I was a little tired, I felt very happy. (我们拍了很多照片，吃了美味的烤鸭。虽然我有点累，但我感到非常快乐。)',
          'My dream is to be an English teacher in the future. Because I like children and I want to help them learn English. (我的梦想是将来成为一名英语老师。因为我喜欢孩子，我想帮助他们学习英语。)',
          'To make my dream come true, I must study hard every day and read more English books. (为了实现我的梦想，我必须每天努力学习，多读英语书。)'
        ]
      }
    ]
  }
}
