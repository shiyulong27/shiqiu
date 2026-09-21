/**
 * 小学英语自然拼读与趣味单词王国数据库
 * 涵盖：
 * 1. 26 字母自然拼读发音律与童谣 (Alphabet Phonics)
 * 2. 5 大短元音词族 (Short Vowel Word Families: -at, -en, -ig, -op, -ug 等)
 * 3. 长元音 Magic E 魔法转化动效 (Magic E Rules: cap->cape, pin->pine)
 * 4. 核心复合辅音 (Consonant Digraphs: sh, ch, th, wh, ph)
 * 5. 50 个核心高频词 (Sight Words)
 * 6. 自然拼读趣味闯关题库 (Phonics Quiz)
 */

// 1. 26 字母自然拼读
export const alphabetPhonics = [
  { letter: 'Aa', name: '/eɪ/', sound: '/æ/', chant: 'A is for Apple, /æ/ /æ/ Apple', word: 'Apple', zh: '苹果', icon: '🍎' },
  { letter: 'Bb', name: '/biː/', sound: '/b/', chant: 'B is for Ball, /b/ /b/ Ball', word: 'Ball', zh: '皮球', icon: '⚽' },
  { letter: 'Cc', name: '/siː/', sound: '/k/', chant: 'C is for Cat, /k/ /k/ Cat', word: 'Cat', zh: '小猫', icon: '🐱' },
  { letter: 'Dd', name: '/diː/', sound: '/d/', chant: 'D is for Dog, /d/ /d/ Dog', word: 'Dog', zh: '小狗', icon: '🐶' },
  { letter: 'Ee', name: '/iː/', sound: '/e/', chant: 'E is for Egg, /e/ /e/ Egg', word: 'Egg', zh: '鸡蛋', icon: '🥚' },
  { letter: 'Ff', name: '/ef/', sound: '/f/', chant: 'F is for Fish, /f/ /f/ Fish', word: 'Fish', zh: '小鱼', icon: '🐟' },
  { letter: 'Gg', name: '/dʒiː/', sound: '/ɡ/', chant: 'G is for Girl, /ɡ/ /ɡ/ Girl', word: 'Girl', zh: '女孩', icon: '👧' },
  { letter: 'Hh', name: '/eɪtʃ/', sound: '/h/', chant: 'H is for Hat, /h/ /h/ Hat', word: 'Hat', zh: '帽子', icon: '🎩' },
  { letter: 'Ii', name: '/aɪ/', sound: '/ɪ/', chant: 'I is for Igloo, /ɪ/ /ɪ/ Igloo', word: 'Igloo', zh: '冰屋', icon: '🛖' },
  { letter: 'Jj', name: '/dʒeɪ/', sound: '/dʒ/', chant: 'J is for Jam, /dʒ/ /dʒ/ Jam', word: 'Jam', zh: '果酱', icon: '🍯' },
  { letter: 'Kk', name: '/keɪ/', sound: '/k/', chant: 'K is for Kite, /k/ /k/ Kite', word: 'Kite', zh: '风筝', icon: '🪁' },
  { letter: 'Ll', name: '/el/', sound: '/l/', chant: 'L is for Lion, /l/ /l/ Lion', word: 'Lion', zh: '狮子', icon: '🦁' },
  { letter: 'Mm', name: '/em/', sound: '/m/', chant: 'M is for Monkey, /m/ /m/ Monkey', word: 'Monkey', zh: '猴子', icon: '🐵' },
  { letter: 'Nn', name: '/en/', sound: '/n/', chant: 'N is for Nut, /n/ /n/ Nut', word: 'Nut', zh: '坚果', icon: '🥜' },
  { letter: 'Oo', name: '/əʊ/', sound: '/ɒ/', chant: 'O is for Orange, /ɒ/ /ɒ/ Orange', word: 'Orange', zh: '橙子', icon: '🍊' },
  { letter: 'Pp', name: '/piː/', sound: '/p/', chant: 'P is for Panda, /p/ /p/ Panda', word: 'Panda', zh: '熊猫', icon: '🐼' },
  { letter: 'Qq', name: '/kjuː/', sound: '/kw/', chant: 'Q is for Queen, /kw/ /kw/ Queen', word: 'Queen', zh: '女王', icon: '👑' },
  { letter: 'Rr', name: '/ɑːr/', sound: '/r/', chant: 'R is for Rabbit, /r/ /r/ Rabbit', word: 'Rabbit', zh: '兔子', icon: '🐰' },
  { letter: 'Ss', name: '/es/', sound: '/s/', chant: 'S is for Sun, /s/ /s/ Sun', word: 'Sun', zh: '太阳', icon: '☀️' },
  { letter: 'Tt', name: '/tiː/', sound: '/t/', chant: 'T is for Tiger, /t/ /t/ Tiger', word: 'Tiger', zh: '老虎', icon: '🐯' },
  { letter: 'Uu', name: '/juː/', sound: '/ʌ/', chant: 'U is for Umbrella, /ʌ/ /ʌ/ Umbrella', word: 'Umbrella', zh: '雨伞', icon: '☂️' },
  { letter: 'Vv', name: '/viː/', sound: '/v/', chant: 'V is for Van, /v/ /v/ Van', word: 'Van', zh: '面包车', icon: '🚐' },
  { letter: 'Ww', name: '/ˈdʌbljuː/', sound: '/w/', chant: 'W is for Water, /w/ /w/ Water', word: 'Water', zh: '水', icon: '💧' },
  { letter: 'Xx', name: '/eks/', sound: '/ks/', chant: 'X is for Box, /ks/ /ks/ in Box', word: 'Box', zh: '盒子', icon: '📦' },
  { letter: 'Yy', name: '/waɪ/', sound: '/j/', chant: 'Y is for Yo-yo, /j/ /j/ Yo-yo', word: 'Yo-yo', zh: '溜溜球', icon: '🪀' },
  { letter: 'Zz', name: '/zed/', sound: '/z/', chant: 'Z is for Zebra, /z/ /z/ Zebra', word: 'Zebra', zh: '斑马', icon: '🦓' }
]

// 2. 5 大短元音词族 (Short Vowel Word Families)
export const shortVowelFamilies = [
  {
    vowel: 'Short a',
    sound: '/æ/',
    color: '#ef4444',
    families: [
      {
        pattern: '-at',
        words: [
          { en: 'cat', zh: '小猫', icon: '🐱' },
          { en: 'bat', zh: '蝙蝠/球棒', icon: '🦇' },
          { en: 'hat', zh: '帽子', icon: '🎩' },
          { en: 'mat', zh: '垫子', icon: '🧘' },
          { en: 'rat', zh: '大老鼠', icon: '🐀' }
        ]
      },
      {
        pattern: '-an',
        words: [
          { en: 'pan', zh: '平底锅', icon: '🍳' },
          { en: 'can', zh: '易拉罐', icon: '🥫' },
          { en: 'fan', zh: '风扇', icon: '🪭' },
          { en: 'man', zh: '男人', icon: '👨' },
          { en: 'van', zh: '货车', icon: '🚐' }
        ]
      },
      {
        pattern: '-ap',
        words: [
          { en: 'cap', zh: '鸭舌帽', icon: '🧢' },
          { en: 'map', zh: '地图', icon: '🗺️' },
          { en: 'tap', zh: '水龙头', icon: '🚰' },
          { en: 'nap', zh: '小憩午睡', icon: '😴' }
        ]
      }
    ]
  },
  {
    vowel: 'Short e',
    sound: '/e/',
    color: '#f59e0b',
    families: [
      {
        pattern: '-en',
        words: [
          { en: 'pen', zh: '钢笔', icon: '🖊️' },
          { en: 'hen', zh: '母鸡', icon: '🐔' },
          { en: 'ten', zh: '数字十', icon: '🔟' },
          { en: 'men', zh: '男人们', icon: '👥' }
        ]
      },
      {
        pattern: '-et',
        words: [
          { en: 'net', zh: '网', icon: '🕸️' },
          { en: 'pet', zh: '宠物', icon: '🐶' },
          { en: 'wet', zh: '湿漉漉', icon: '💦' },
          { en: 'jet', zh: '喷气飞机', icon: '✈️' }
        ]
      },
      {
        pattern: '-ed',
        words: [
          { en: 'bed', zh: '小床', icon: '🛏️' },
          { en: 'red', zh: '红色', icon: '🔴' }
        ]
      }
    ]
  },
  {
    vowel: 'Short i',
    sound: '/ɪ/',
    color: '#10b981',
    families: [
      {
        pattern: '-ig',
        words: [
          { en: 'pig', zh: '小猪', icon: '🐷' },
          { en: 'big', zh: '巨大的', icon: '🐘' },
          { en: 'dig', zh: '挖掘', icon: '⛏️' },
          { en: 'wig', zh: '假发', icon: '🦳' }
        ]
      },
      {
        pattern: '-in',
        words: [
          { en: 'pin', zh: '别针', icon: '🧷' },
          { en: 'win', zh: '获胜赢得', icon: '🏆' },
          { en: 'bin', zh: '垃圾桶', icon: '🗑️' }
        ]
      },
      {
        pattern: '-it',
        words: [
          { en: 'sit', zh: '坐下', icon: '🪑' },
          { en: 'hit', zh: '击打', icon: '🥊' },
          { en: 'kit', zh: '急救工具包', icon: '🧰' }
        ]
      }
    ]
  },
  {
    vowel: 'Short o',
    sound: '/ɒ/',
    color: '#3b82f6',
    families: [
      {
        pattern: '-op',
        words: [
          { en: 'hop', zh: '单脚跳', icon: '🦘' },
          { en: 'mop', zh: '拖把', icon: '🧹' },
          { en: 'pop', zh: '爆米花/砰', icon: '🍿' },
          { en: 'top', zh: '陀螺/顶端', icon: '🔝' }
        ]
      },
      {
        pattern: '-ot',
        words: [
          { en: 'hot', zh: '热腾腾', icon: '🔥' },
          { en: 'pot', zh: '锅子', icon: '🍲' },
          { en: 'dot', zh: '圆点', icon: '🟣' }
        ]
      },
      {
        pattern: '-ox',
        words: [
          { en: 'box', zh: '箱子', icon: '📦' },
          { en: 'fox', zh: '狐狸', icon: '🦊' }
        ]
      }
    ]
  },
  {
    vowel: 'Short u',
    sound: '/ʌ/',
    color: '#8b5cf6',
    families: [
      {
        pattern: '-ug',
        words: [
          { en: 'bug', zh: '小甲虫', icon: '🐞' },
          { en: 'mug', zh: '马克杯', icon: '☕' },
          { en: 'rug', zh: '小地毯', icon: '🧶' },
          { en: 'hug', zh: '拥抱', icon: '🤗' }
        ]
      },
      {
        pattern: '-un',
        words: [
          { en: 'sun', zh: '太阳', icon: '☀️' },
          { en: 'run', zh: '奔跑', icon: '🏃' },
          { en: 'bun', zh: '小面包', icon: '🥯' }
        ]
      },
      {
        pattern: '-ut',
        words: [
          { en: 'nut', zh: '坚果', icon: '🌰' },
          { en: 'hut', zh: '小木屋', icon: '🛖' },
          { en: 'cut', zh: '剪切', icon: '✂️' }
        ]
      }
    ]
  }
]

// 3. 长元音 Magic E 魔法变身 (Magic E Rules)
export const magicERules = [
  {
    pattern: 'a_e',
    shortSound: '/æ/',
    longSound: '/eɪ/',
    pairs: [
      { shortWord: 'cap', shortZh: '帽子', shortIcon: '🧢', longWord: 'cape', longZh: '披风斗篷', longIcon: '🦸' },
      { shortWord: 'tap', shortZh: '轻拍', shortIcon: '👏', longWord: 'tape', longZh: '胶带', longIcon: '📼' },
      { shortWord: 'mad', shortZh: '生气的', shortIcon: '😡', longWord: 'made', longZh: '制作', longIcon: '🔨' }
    ],
    ruleDesc: '末尾加上静音 e，前面的 a 就不再发短音 /æ/，而是直接叫出它自己的名字：/eɪ/！'
  },
  {
    pattern: 'i_e',
    shortSound: '/ɪ/',
    longSound: '/aɪ/',
    pairs: [
      { shortWord: 'pin', shortZh: '大头针', shortIcon: '🧷', longWord: 'pine', longZh: '松树', longIcon: '🌲' },
      { shortWord: 'kit', shortZh: '急救包', shortIcon: '🧰', longWord: 'kite', longZh: '风筝', longIcon: '🪁' },
      { shortWord: 'rip', shortZh: '撕裂', shortIcon: '📄', longWord: 'ripe', longZh: '果实成熟的', longIcon: '🍎' }
    ],
    ruleDesc: '末尾加上静音 e，前面的 i 挺起胸膛念出自己的名字：/aɪ/！'
  },
  {
    pattern: 'o_e',
    shortSound: '/ɒ/',
    longSound: '/əʊ/',
    pairs: [
      { shortWord: 'hop', shortZh: '跳跃', shortIcon: '🦘', longWord: 'hope', longZh: '希望', longIcon: '🌟' },
      { shortWord: 'rob', shortZh: '抢夺', shortIcon: '🦹', longWord: 'robe', longZh: '魔法长袍', longIcon: '🥋' },
      { shortWord: 'not', shortZh: '不', shortIcon: '🚫', longWord: 'note', longZh: '笔记本/音符', longIcon: '🎵' }
    ],
    ruleDesc: '末尾加上静音 e，前面的 o 圆圆嘴唇发出长音：/əʊ/！'
  },
  {
    pattern: 'u_e',
    shortSound: '/ʌ/',
    longSound: '/juː/',
    pairs: [
      { shortWord: 'cub', shortZh: '幼崽小熊', shortIcon: '🐻', longWord: 'cube', longZh: '立方体魔方', longIcon: '🧊' },
      { shortWord: 'tub', shortZh: '浴缸', shortIcon: '🛁', longWord: 'tube', longZh: '长管子', longIcon: '🧪' },
      { shortWord: 'cut', shortZh: '切剪', shortIcon: '✂️', longWord: 'cute', longZh: '可爱的', longIcon: '🥰' }
    ],
    ruleDesc: '末尾加上静音 e，前面的 u 唱出美妙音乐长音：/juː/！'
  }
]

// 4. 核心复合辅音 (Consonant Digraphs)
export const consonantDigraphs = [
  {
    digraph: 'sh',
    sound: '/ʃ/',
    action: '双手放在嘴前，嘘——安静的声音！',
    words: [
      { en: 'ship', zh: '轮船', icon: '🚢' },
      { en: 'fish', zh: '小鱼', icon: '🐟' },
      { en: 'shop', zh: '商店', icon: '🏪' },
      { en: 'shell', zh: '贝壳', icon: '🐚' }
    ]
  },
  {
    digraph: 'ch',
    sound: '/tʃ/',
    action: '像小火车开动一样：哧哧哧！',
    words: [
      { en: 'chair', zh: '椅子', icon: '🪑' },
      { en: 'chin', zh: '下巴', icon: '🧔' },
      { en: 'cheese', zh: '奶酪', icon: '🧀' },
      { en: 'beach', zh: '沙滩', icon: '🏖️' }
    ]
  },
  {
    digraph: 'th',
    sound: '/θ/ & /ð/',
    action: '舌尖轻轻咬在上下牙齿之间，轻轻吹气！',
    words: [
      { en: 'three', zh: '数字三', icon: '3️⃣' },
      { en: 'thin', zh: '瘦瘦的', icon: '🧍' },
      { en: 'this', zh: '这个', icon: '👉' },
      { en: 'that', zh: '那个', icon: '👈' }
    ]
  },
  {
    digraph: 'wh',
    sound: '/w/',
    action: '嘴唇撮成圆圆小孔，呼出轻风！',
    words: [
      { en: 'whale', zh: '大蓝鲸', icon: '🐋' },
      { en: 'wheel', zh: '车轮', icon: '🛞' },
      { en: 'white', zh: '白色', icon: '⚪' }
    ]
  },
  {
    digraph: 'ph',
    sound: '/f/',
    action: 'p 和 h 在一起，变身成为 f 的声音！',
    words: [
      { en: 'phone', zh: '电话', icon: '📱' },
      { en: 'photo', zh: '照片', icon: '📷' },
      { en: 'dolphin', zh: '海豚', icon: '🐬' }
    ]
  }
]

// 5. 50 个高频词 (Sight Words)
export const sightWords50 = [
  // Level 1: 启蒙极高频 (1~10)
  { word: 'the', level: 1, zh: '这/那（定冠词）', sentence: 'The sun is hot.', sentenceZh: '太阳很晒。' },
  { word: 'of', level: 1, zh: '……的', sentence: 'A cup of milk.', sentenceZh: '一杯牛奶。' },
  { word: 'and', level: 1, zh: '和、并且', sentence: 'Cat and dog.', sentenceZh: '猫和狗。' },
  { word: 'a', level: 1, zh: '一个', sentence: 'I see a bird.', sentenceZh: '我看见一只鸟。' },
  { word: 'to', level: 1, zh: '朝、到', sentence: 'Go to school.', sentenceZh: '去上学。' },
  { word: 'in', level: 1, zh: '在……里面', sentence: 'Fish in the lake.', sentenceZh: '鱼在湖里。' },
  { word: 'is', level: 1, zh: '是', sentence: 'He is happy.', sentenceZh: '他很快乐。' },
  { word: 'you', level: 1, zh: '你、你们', sentence: 'I love you.', sentenceZh: '我爱你。' },
  { word: 'that', level: 1, zh: '那个', sentence: 'That is my bike.', sentenceZh: '那是我的自行车。' },
  { word: 'it', level: 1, zh: '它', sentence: 'It is rainy.', sentenceZh: '正在下雨。' },

  // Level 2: (11~20)
  { word: 'he', level: 2, zh: '他', sentence: 'He can run fast.', sentenceZh: '他跑得很快。' },
  { word: 'was', level: 2, zh: '曾经是（is/am的过去式）', sentence: 'She was little.', sentenceZh: '她曾经很小。' },
  { word: 'for', level: 2, zh: '为了、给', sentence: 'A gift for you.', sentenceZh: '给你的礼物。' },
  { word: 'on', level: 2, zh: '在……上面', sentence: 'Book on desk.', sentenceZh: '书在桌上。' },
  { word: 'are', level: 2, zh: '是（复数）', sentence: 'We are friends.', sentenceZh: '我们是朋友。' },
  { word: 'as', level: 2, zh: '如同、像', sentence: 'Fast as tiger.', sentenceZh: '像老虎一样快。' },
  { word: 'with', level: 2, zh: '和……在一起', sentence: 'Play with me.', sentenceZh: '和我一起玩。' },
  { word: 'his', level: 2, zh: '他的', sentence: 'His name is Tom.', sentenceZh: '他的名字叫汤姆。' },
  { word: 'they', level: 2, zh: '他们', sentence: 'They jump high.', sentenceZh: '他们跳得很高。' },
  { word: 'I', level: 2, zh: '我', sentence: 'I like apples.', sentenceZh: '我喜欢苹果。' },

  // Level 3: (21~30)
  { word: 'at', level: 3, zh: '在（某地点/时间）', sentence: 'Look at the star.', sentenceZh: '看那颗星星。' },
  { word: 'be', level: 3, zh: '成为、做', sentence: 'Be brave and kind.', sentenceZh: '勇敢而善良。' },
  { word: 'this', level: 3, zh: '这个', sentence: 'This is my home.', sentenceZh: '这是我的家。' },
  { word: 'have', level: 3, zh: '有', sentence: 'I have two eyes.', sentenceZh: '我有两只眼睛。' },
  { word: 'from', level: 3, zh: '来自', sentence: 'From China.', sentenceZh: '来自中国。' },
  { word: 'or', level: 3, zh: '或者', sentence: 'Red or blue?', sentenceZh: '红色还是蓝色？' },
  { word: 'one', level: 3, zh: '一、一个', sentence: 'One big kite.', sentenceZh: '一个大风筝。' },
  { word: 'had', level: 3, zh: '曾经有', sentence: 'We had fun today.', sentenceZh: '我们今天玩得很开心。' },
  { word: 'by', level: 3, zh: '在……旁边 / 乘坐', sentence: 'Go by bus.', sentenceZh: '乘公交车去。' },
  { word: 'word', level: 3, zh: '单词、话语', sentence: 'Learn a new word.', sentenceZh: '学习一个新单词。' },

  // Level 4: (31~40)
  { word: 'but', level: 4, zh: '但是', sentence: 'Small but strong.', sentenceZh: '虽小但强壮。' },
  { word: 'not', level: 4, zh: '不', sentence: 'It is not cold.', sentenceZh: '天气不冷。' },
  { word: 'what', level: 4, zh: '什么', sentence: 'What is your dream?', sentenceZh: '你的梦想是什么？' },
  { word: 'all', level: 4, zh: '所有的、全部', sentence: 'All birds fly.', sentenceZh: '所有鸟都会飞。' },
  { word: 'were', level: 4, zh: '曾经是（are的过去式）', sentence: 'They were happy.', sentenceZh: '他们那时很快乐。' },
  { word: 'we', level: 4, zh: '我们', sentence: 'We love reading.', sentenceZh: '我们热爱阅读。' },
  { word: 'when', level: 4, zh: '当……时候', sentence: 'When morning comes.', sentenceZh: '当早晨来临。' },
  { word: 'your', level: 4, zh: '你的', sentence: 'Wash your hands.', sentenceZh: '洗洗你的手。' },
  { word: 'can', level: 4, zh: '能够、可以', sentence: 'You can do it!', sentenceZh: '你能做到的！' },
  { word: 'said', level: 4, zh: '说（say的过去式）', sentence: 'Mom said good night.', sentenceZh: '妈妈道了晚安。' },

  // Level 5: (41~50)
  { word: 'there', level: 5, zh: '在那里', sentence: 'There is a river.', sentenceZh: '那里有一条河。' },
  { word: 'use', level: 5, zh: '使用', sentence: 'Use your pencil.', sentenceZh: '用你的铅笔。' },
  { word: 'an', level: 5, zh: '一个（元音前）', sentence: 'Eat an apple.', sentenceZh: '吃一个苹果。' },
  { word: 'each', level: 5, zh: '每一个', sentence: 'Each child shines.', sentenceZh: '每个孩子都在发光。' },
  { word: 'which', level: 5, zh: '哪一个', sentence: 'Which color do you like?', sentenceZh: '你喜欢哪种颜色？' },
  { word: 'she', level: 5, zh: '她', sentence: 'She dances well.', sentenceZh: '她跳舞跳得很好。' },
  { word: 'do', level: 5, zh: '做', sentence: 'Do your best.', sentenceZh: '尽你最大努力。' },
  { word: 'how', level: 5, zh: '怎样、如何', sentence: 'How are you?', sentenceZh: '你好吗？' },
  { word: 'their', level: 5, zh: '他们的', sentence: 'Their room is neat.', sentenceZh: '他们的房间很整洁。' },
  { word: 'will', level: 5, zh: '将要', sentence: 'Tomorrow will be sunny.', sentenceZh: '明天会是晴天。' }
]

// 6. 自然拼读趣味闯关题库 (Phonics Quiz)
export const phonicsQuiz = [
  {
    id: 1,
    question: '单词 "cat"（小猫）中间的字母 a 发什么声音？',
    options: ['/eɪ/ (字母名长音)', '/æ/ (嘴巴张大两指宽的梅花音)', '/ʌ/ (短音)', '/ɒ/ (圆唇音)'],
    answer: 1,
    explain: '在封闭音节中，短元音 a 发 /æ/，就像看到小苹果张大嘴巴发出的清脆声音！'
  },
  {
    id: 2,
    question: '神奇的“Magic E”魔法：给单词 "pin"（大头针）末尾加上静音 e 后，变成了什么新单词，i 的发音发生了什么变化？',
    options: ['pine（松树），i 发它的字母名字 /aɪ/', 'pink（粉色），i 声音不变', 'pipe（烟斗），i 发 /eɪ/', 'pile（一堆），i 不发音'],
    answer: 0,
    explain: 'Magic E 的魔力在于它自己在末尾不发声，但能把前面的短元音转化为长元音！pin /pɪn/ ➔ pine /paɪn/（松树）！'
  },
  {
    id: 3,
    question: '在英语中，两个字母组合 "sh" 在单词 "ship"（轮船）和 "fish"（小鱼）中发什么声音？',
    options: ['/tʃ/ (小火车哧哧声)', '/ʃ/ (安静手指嘘声)', '/s/ (小蛇嘶嘶声)', '/k/ (小鸭咔咔声)'],
    answer: 1,
    explain: '辅音组合 "sh" 发 /ʃ/ 音，就像伸出食指放在嘴唇前叫大家安静时的“嘘——”声！'
  },
  {
    id: 4,
    question: '根据短元音 -at 家族的规律，如果把开头的首字母换成 h，拼出的单词 "hat" 是什么意思？',
    options: ['热热的', '帽子', '击打', '母鸡'],
    answer: 1,
    explain: 'h 发 /h/，加上 -at /æt/，合起来拼成 /hæt/（帽子）！'
  },
  {
    id: 5,
    question: '高频词 (Sight Word) "you" 在日常英语句型中是什么意思？',
    options: ['我们', '他们', '你 / 你们', '她'],
    answer: 2,
    explain: 'you 表示“你”或“你们”，例如经典句型 "Thank you"（谢谢你）和 "How are you?"（你好吗）。'
  },
  {
    id: 6,
    question: '字母组合 "ch" 在单词 "chair"（椅子）和 "cheese"（奶酪）中发出类似什么的声音？',
    options: ['小火车开动时的 /tʃ/', '吹风机吹风时的 /f/', '小狗汪汪叫的 /w/', '打呼噜的 /z/'],
    answer: 0,
    explain: 'ch 发 /tʃ/，舌尖抵住上齿龈轻快破擦，就像老式蒸汽小火车出发时的欢快动感！'
  },
  {
    id: 7,
    question: '给单词 "hop"（单脚跳）加上 Magic E 之后变成 "hope"，这个新单词的意思是什么？',
    options: ['长袍', '希望', '家园', '孔洞'],
    answer: 1,
    explain: 'hop /hɒp/ 加上末尾 e 变成 hope /həʊp/，意思是“希望”！'
  },
  {
    id: 8,
    question: '为什么我们说像 "the"、"of"、"and" 这样的单词是 Sight Words？',
    options: ['因为它们必须闭上眼睛读', '因为它们极其高频，要求孩子们一眼看到就能立刻认出读出', '因为它们只在科学课上出现', '因为它们都包含字母 S'],
    answer: 1,
    explain: 'Sight Words（视觉词）是英语书籍和绘本中出现频率极高的基础词汇，要求学习者无需逐个字母拼读、一眼看到就能脱口而出！'
  }
]
