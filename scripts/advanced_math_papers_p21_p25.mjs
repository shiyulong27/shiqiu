// 一年级上册数学进阶提优 · 第 21 ~ 25 套 (全量高品质图文可视化插图版)
export const papers21to25 = [
  // =========================================================================
  // Paper 21: 【实拍真卷对标】成双成对与数轴度量思维卷
  // =========================================================================
  {
    id: 21,
    unit: "第一单元：准备课",
    title: "第 21 套：【进阶】成双成对与数轴度量思维卷",
    tag: "思维培优",
    tagColor: "bg-purple-100 text-purple-800",
    desc: "成双成对物品数量换算、直尺刻度计数、两数接近度与数量和顺序辨析。",
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: "成双与组装连连看：按数量关系连一连。",
        score: 12,
        type: "matching",
        tip: "1双是2根，1副是2只，注意换算",
        pairs: [
          { target: "m21-1", label: "① 4 双筷子 🥢", emoji: "🥢", answer: "ma21-1", char: "8 根", pinyin: "bā gēn" },
          { target: "m21-2", label: "② 3 盘苹果(每盘3个) 🍎", emoji: "🍎", answer: "ma21-2", char: "9 个", pinyin: "jiǔ gè" },
          { target: "m21-3", label: "③ 2 盒积木(每盒4块) 🧱", emoji: "🧱", answer: "ma21-3", char: "8 块", pinyin: "bā kuài" },
          { target: "m21-4", label: "④ 5 辆两轮自行车 🚲", emoji: "🚲", answer: "ma21-4", char: "10 轮", pinyin: "shí lún" },
          { target: "m21-5", label: "⑤ 3 副暖和手套 🧤", emoji: "🧤", answer: "ma21-5", char: "6 只", pinyin: "liù zhī" },
          { target: "m21-6", label: "⑥ 北斗七星星座 ⭐", emoji: "⭐", answer: "ma21-6", char: "7 颗", pinyin: "qī kē" }
        ],
        shuffledAnswers: ["ma21-2", "ma21-4", "ma21-1", "ma21-6", "ma21-3", "ma21-5"]
      },
      {
        num: "二",
        title: "比大小与符号小法官：选择○里合适的符号。",
        score: 8,
        type: "choice",
        items: [
          {
            qid: "M21-2-1",
            prompt: "盘子里有3个铃铛，旁边有5个黑圆圈●。3 ○ 5，中间选哪个符号？",
            title: "比多少符号辨析",
            tip: "尖尖对小数，3小于5，填小于号（<）。",
            visual: `<div class="flex items-center justify-center gap-3 p-2 bg-amber-50/80 border border-amber-200 rounded-xl"><div class="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-amber-200"><span class="text-lg">🔔🔔🔔</span><span class="text-xs font-bold text-amber-800 ml-1">(3个铃铛)</span></div><span class="text-xs font-black text-slate-400">比多少</span><div class="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-300"><span class="text-lg">●●●●●</span><span class="text-xs font-bold text-slate-700 ml-1">(5个黑圆)</span></div></div>`,
            options: [{ text: "<", correct: true }, { text: ">", correct: false }]
          },
          {
            qid: "M21-2-2",
            prompt: "盘子里有6个梨，旁边有5个黑圆圈●。6 ○ 5，中间选哪个符号？",
            title: "比大小符号书写",
            tip: "开口朝大数，6大于5，填大于号（>）。",
            visual: `<div class="flex items-center justify-center gap-3 p-2 bg-lime-50/80 border border-lime-200 rounded-xl"><div class="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-lime-200"><span class="text-lg">🍐🍐🍐🍐🍐🍐</span><span class="text-xs font-bold text-lime-800 ml-1">(6个梨)</span></div><span class="text-xs font-black text-slate-400">比多少</span><div class="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-300"><span class="text-lg">●●●●●</span><span class="text-xs font-bold text-slate-700 ml-1">(5个黑圆)</span></div></div>`,
            options: [{ text: ">", correct: true }, { text: "<", correct: false }]
          },
          {
            qid: "M21-2-3",
            prompt: "比较5根香蕉和5个黑圆圈●的数量。5 ○ 5，中间选哪个符号？",
            title: "同样多符号",
            tip: "数量相等用等于号（=）。",
            visual: `<div class="flex items-center justify-center gap-3 p-2 bg-yellow-50/80 border border-yellow-200 rounded-xl"><div class="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-yellow-200"><span class="text-lg">🍌🍌🍌🍌🍌</span><span class="text-xs font-bold text-yellow-800 ml-1">(5根香蕉)</span></div><span class="text-xs font-black text-amber-500 font-bold">比多少</span><div class="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-300"><span class="text-lg">●●●●●</span><span class="text-xs font-bold text-slate-700 ml-1">(5个黑圆)</span></div></div>`,
            options: [{ text: "=", correct: true }, { text: ">", correct: false }]
          },
          {
            qid: "M21-2-4",
            prompt: "4 双筷子（共8根）与 7 根铅笔相比：8 ○ 7，中间填？",
            title: "双数与单数比大小",
            tip: "4双是8根，8 > 7。",
            visual: `<div class="p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs"><div class="flex flex-wrap items-center justify-center gap-2"><div><svg viewBox="0 0 200 50" width="160" role="img" aria-label="4双筷子"><line x1="12" y1="5" x2="16" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="21" y1="5" x2="25" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="5" x2="54" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="59" y1="5" x2="63" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="88" y1="5" x2="92" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="97" y1="5" x2="101" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="126" y1="5" x2="130" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="135" y1="5" x2="139" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/></svg><span>4双筷子</span></div><span>与</span><div>✏️✏️✏️✏️✏️✏️✏️<br>7根铅笔</div></div></div>`,
            options: [{ text: ">", correct: true }, { text: "<", correct: false }]
          }
        ]
      },
      {
        num: "三",
        title: "数轴与端点思维：看直尺做聪明的小侦探。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: "M21-3-1",
            prompt: "从 0 开始，1 个 1 个地数到 8，一共数了几个数？",
            title: "数数包含0陷阱",
            tip: "别忘了数字0！0、1、2、3、4、5、6、7、8，一共有 9 个数！",
            visual: `<div class="p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs"><svg viewBox="0 0 330 60" width="100%" role="img" aria-label="从0到8的直尺刻度"><line x1="15" y1="22" x2="315" y2="22" stroke="#334155"/><line x1="15" y1="15" x2="15" y2="29" stroke="#334155"/><text x="15" y="48" text-anchor="middle" font-size="13" fill="#334155">0</text><line x1="52.5" y1="15" x2="52.5" y2="29" stroke="#334155"/><text x="52.5" y="48" text-anchor="middle" font-size="13" fill="#334155">1</text><line x1="90" y1="15" x2="90" y2="29" stroke="#334155"/><text x="90" y="48" text-anchor="middle" font-size="13" fill="#334155">2</text><line x1="127.5" y1="15" x2="127.5" y2="29" stroke="#334155"/><text x="127.5" y="48" text-anchor="middle" font-size="13" fill="#334155">3</text><line x1="165" y1="15" x2="165" y2="29" stroke="#334155"/><text x="165" y="48" text-anchor="middle" font-size="13" fill="#334155">4</text><line x1="202.5" y1="15" x2="202.5" y2="29" stroke="#334155"/><text x="202.5" y="48" text-anchor="middle" font-size="13" fill="#334155">5</text><line x1="240" y1="15" x2="240" y2="29" stroke="#334155"/><text x="240" y="48" text-anchor="middle" font-size="13" fill="#334155">6</text><line x1="277.5" y1="15" x2="277.5" y2="29" stroke="#334155"/><text x="277.5" y="48" text-anchor="middle" font-size="13" fill="#334155">7</text><line x1="315" y1="15" x2="315" y2="29" stroke="#334155"/><text x="315" y="48" text-anchor="middle" font-size="13" fill="#334155">8</text></svg></div>`,
            options: [{ text: "9 个数", correct: true }, { text: "8 个数", correct: false }, { text: "7 个数", correct: false }]
          },
          {
            qid: "M21-3-2",
            prompt: "在直尺 0~10 的刻度数中，比 5 小的数有几个？",
            title: "比5小的数(含0)",
            tip: "直尺上比5小的数有：0、1、2、3、4，一共有 5 个！千万不能漏掉0！",
            visual: `<div class="p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs"><svg viewBox="0 0 330 60" width="100%" role="img" aria-label="从0到10的直尺刻度"><line x1="15" y1="22" x2="315" y2="22" stroke="#334155"/><line x1="15" y1="15" x2="15" y2="29" stroke="#334155"/><text x="15" y="48" text-anchor="middle" font-size="13" fill="#334155">0</text><line x1="45" y1="15" x2="45" y2="29" stroke="#334155"/><text x="45" y="48" text-anchor="middle" font-size="13" fill="#334155">1</text><line x1="75" y1="15" x2="75" y2="29" stroke="#334155"/><text x="75" y="48" text-anchor="middle" font-size="13" fill="#334155">2</text><line x1="105" y1="15" x2="105" y2="29" stroke="#334155"/><text x="105" y="48" text-anchor="middle" font-size="13" fill="#334155">3</text><line x1="135" y1="15" x2="135" y2="29" stroke="#334155"/><text x="135" y="48" text-anchor="middle" font-size="13" fill="#334155">4</text><line x1="165" y1="15" x2="165" y2="29" stroke="#334155"/><text x="165" y="48" text-anchor="middle" font-size="13" fill="#334155">5</text><line x1="195" y1="15" x2="195" y2="29" stroke="#334155"/><text x="195" y="48" text-anchor="middle" font-size="13" fill="#334155">6</text><line x1="225" y1="15" x2="225" y2="29" stroke="#334155"/><text x="225" y="48" text-anchor="middle" font-size="13" fill="#334155">7</text><line x1="255" y1="15" x2="255" y2="29" stroke="#334155"/><text x="255" y="48" text-anchor="middle" font-size="13" fill="#334155">8</text><line x1="285" y1="15" x2="285" y2="29" stroke="#334155"/><text x="285" y="48" text-anchor="middle" font-size="13" fill="#334155">9</text><line x1="315" y1="15" x2="315" y2="29" stroke="#334155"/><text x="315" y="48" text-anchor="middle" font-size="13" fill="#334155">10</text></svg></div>`,
            options: [{ text: "5 个", correct: true }, { text: "4 个", correct: false }, { text: "6 个", correct: false }]
          },
          {
            qid: "M21-3-3",
            prompt: "在直尺 0~10 的刻度数中，比 7 大的数有几个？",
            title: "比7大的数",
            tip: "比7大的数是：8、9、10，一共有 3 个。",
            visual: `<div class="p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs"><svg viewBox="0 0 330 60" width="100%" role="img" aria-label="从0到10的直尺刻度"><line x1="15" y1="22" x2="315" y2="22" stroke="#334155"/><line x1="15" y1="15" x2="15" y2="29" stroke="#334155"/><text x="15" y="48" text-anchor="middle" font-size="13" fill="#334155">0</text><line x1="45" y1="15" x2="45" y2="29" stroke="#334155"/><text x="45" y="48" text-anchor="middle" font-size="13" fill="#334155">1</text><line x1="75" y1="15" x2="75" y2="29" stroke="#334155"/><text x="75" y="48" text-anchor="middle" font-size="13" fill="#334155">2</text><line x1="105" y1="15" x2="105" y2="29" stroke="#334155"/><text x="105" y="48" text-anchor="middle" font-size="13" fill="#334155">3</text><line x1="135" y1="15" x2="135" y2="29" stroke="#334155"/><text x="135" y="48" text-anchor="middle" font-size="13" fill="#334155">4</text><line x1="165" y1="15" x2="165" y2="29" stroke="#334155"/><text x="165" y="48" text-anchor="middle" font-size="13" fill="#334155">5</text><line x1="195" y1="15" x2="195" y2="29" stroke="#334155"/><text x="195" y="48" text-anchor="middle" font-size="13" fill="#334155">6</text><line x1="225" y1="15" x2="225" y2="29" stroke="#334155"/><text x="225" y="48" text-anchor="middle" font-size="13" fill="#334155">7</text><line x1="255" y1="15" x2="255" y2="29" stroke="#334155"/><text x="255" y="48" text-anchor="middle" font-size="13" fill="#334155">8</text><line x1="285" y1="15" x2="285" y2="29" stroke="#334155"/><text x="285" y="48" text-anchor="middle" font-size="13" fill="#334155">9</text><line x1="315" y1="15" x2="315" y2="29" stroke="#334155"/><text x="315" y="48" text-anchor="middle" font-size="13" fill="#334155">10</text></svg></div>`,
            options: [{ text: "3 个", correct: true }, { text: "4 个", correct: false }, { text: "2 个", correct: false }]
          },
          {
            qid: "M21-3-4",
            prompt: "2 和 10 这两个数中，哪一个数更接近 5？",
            title: "数轴距离接近度",
            tip: "5到2的距离是3（5-2=3），5到10的距离是5（10-5=5），3比5小，所以 2 更接近 5！",
            visual: `<div class="p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs"><svg viewBox="0 0 330 60" width="100%" role="img" aria-label="从0到10的直尺刻度"><line x1="15" y1="22" x2="315" y2="22" stroke="#334155"/><line x1="15" y1="15" x2="15" y2="29" stroke="#334155"/><text x="15" y="48" text-anchor="middle" font-size="13" fill="#334155">0</text><line x1="45" y1="15" x2="45" y2="29" stroke="#334155"/><text x="45" y="48" text-anchor="middle" font-size="13" fill="#334155">1</text><line x1="75" y1="15" x2="75" y2="29" stroke="#334155"/><text x="75" y="48" text-anchor="middle" font-size="13" fill="#334155">2</text><line x1="105" y1="15" x2="105" y2="29" stroke="#334155"/><text x="105" y="48" text-anchor="middle" font-size="13" fill="#334155">3</text><line x1="135" y1="15" x2="135" y2="29" stroke="#334155"/><text x="135" y="48" text-anchor="middle" font-size="13" fill="#334155">4</text><line x1="165" y1="15" x2="165" y2="29" stroke="#334155"/><text x="165" y="48" text-anchor="middle" font-size="13" fill="#334155">5</text><line x1="195" y1="15" x2="195" y2="29" stroke="#334155"/><text x="195" y="48" text-anchor="middle" font-size="13" fill="#334155">6</text><line x1="225" y1="15" x2="225" y2="29" stroke="#334155"/><text x="225" y="48" text-anchor="middle" font-size="13" fill="#334155">7</text><line x1="255" y1="15" x2="255" y2="29" stroke="#334155"/><text x="255" y="48" text-anchor="middle" font-size="13" fill="#334155">8</text><line x1="285" y1="15" x2="285" y2="29" stroke="#334155"/><text x="285" y="48" text-anchor="middle" font-size="13" fill="#334155">9</text><line x1="315" y1="15" x2="315" y2="29" stroke="#334155"/><text x="315" y="48" text-anchor="middle" font-size="13" fill="#334155">10</text></svg></div>`,
            options: [{ text: "2 更接近 5", correct: true }, { text: "10 更接近 5", correct: false }]
          }
        ]
      },
      {
        num: "四",
        title: "极值不等式与概念辨析：选出最精准的答案。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: "M21-4-1",
            prompt: "从0到10的整数中选一个数填入 [ ]，使 [ ] < 5。最大能填几？",
            title: "不等式最大能填几",
            tip: "比5小的数有0、1、2、3、4，其中最大的数是 4。",
            visual: `<div class="p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs"><span class="text-2xl font-bold">□ &lt; 5</span></div>`,
            options: [{ text: "4", correct: true }, { text: "5", correct: false }, { text: "0", correct: false }]
          },
          {
            qid: "M21-4-2",
            prompt: "下面关于数字“10”的说法中，错误的是哪一项？",
            title: "数的特征辨析",
            tip: "10比5大，题目说“它比5小”是错误的。",
            visual: `<div class="p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs">||||||||||<br>10根小棒</div>`,
            options: [
              { text: "它比 5 小", correct: true },
              { text: "9 添上 1 是 10", correct: false },
              { text: "它可以用 10 根小棒表示", correct: false }
            ]
          },
          {
            qid: "M21-4-3",
            prompt: "与 9 相邻的两个数分别是多少？",
            title: "相邻数考查",
            tip: "9的前面一个是8，后面一个是10，相邻的两个数是 8 和 10。",
            visual: `<div class="flex items-center justify-center gap-2 p-1.5 bg-sky-50 border border-sky-200 rounded-xl font-mono font-bold text-xs"><span class="w-7 h-7 rounded bg-white border-2 border-dashed border-sky-400 flex items-center justify-center text-sky-700">？</span><span class="text-slate-400">、</span><span class="w-7 h-7 rounded bg-sky-500 text-white flex items-center justify-center shadow-xs">9</span><span class="text-slate-400">、</span><span class="w-7 h-7 rounded bg-white border-2 border-dashed border-sky-400 flex items-center justify-center text-sky-700">？</span></div>`,
            options: [{ text: "8 和 10", correct: true }, { text: "7 和 8", correct: false }, { text: "9 和 10", correct: false }]
          },
          {
            qid: "M21-4-4",
            prompt: "5 和 7 中间的数是几？",
            title: "两数中间的数",
            tip: "5和7正中间的数是 6。",
            visual: `<div class="flex items-center justify-center gap-2 p-1.5 bg-emerald-50 border border-emerald-200 rounded-xl font-mono font-bold text-xs"><span class="w-7 h-7 rounded bg-emerald-500 text-white flex items-center justify-center">5</span><span class="text-slate-400">→</span><span class="w-7 h-7 rounded bg-white border-2 border-dashed border-emerald-500 flex items-center justify-center text-emerald-800 text-sm font-black">？</span><span class="text-slate-400">→</span><span class="w-7 h-7 rounded bg-emerald-500 text-white flex items-center justify-center">7</span></div>`,
            options: [{ text: "6", correct: true }, { text: "8", correct: false }]
          }
        ]
      },
      {
        num: "五",
        title: "基数与序数高阶辨析：火眼金睛不踩坑。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M21-5-1",
            prompt: "从左往右看6盆花：第1盆3朵，第2盆5朵，第3盆7朵，第4盆2朵，第5盆4朵，第6盆8朵。哪一盆的花最少？",
            title: "第几盆与花朵数混淆辨析",
            tip: "花朵最少的是2朵，它在第 4 盆！千万不要看成第1盆！",
            visual: `<div class="p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs"><div class="grid grid-cols-3 sm:grid-cols-6 gap-2"><div class="bg-white p-2 rounded border border-slate-200"><div>🌸🌸🌸</div><span>第1盆</span></div><div class="bg-white p-2 rounded border border-slate-200"><div>🌸🌸🌸🌸🌸</div><span>第2盆</span></div><div class="bg-white p-2 rounded border border-slate-200"><div>🌸🌸🌸🌸🌸🌸🌸</div><span>第3盆</span></div><div class="bg-white p-2 rounded border border-slate-200"><div>🌸🌸</div><span>第4盆</span></div><div class="bg-white p-2 rounded border border-slate-200"><div>🌸🌸🌸🌸</div><span>第5盆</span></div><div class="bg-white p-2 rounded border border-slate-200"><div>🌸🌸🌸🌸🌸🌸🌸🌸</div><span>第6盆</span></div></div></div>`,
            options: [{ text: "第 4 盆", correct: true }, { text: "第 1 盆", correct: false }, { text: "第 2 盆", correct: false }]
          },
          {
            qid: "M21-5-2",
            prompt: "上面那排花中，第 2 盆有 5 朵花，第 4 盆有 2 朵花，第 4 盆的花比第 2 盆少几朵？",
            title: "花朵数量差",
            tip: "5 - 2 = 3朵。",
            visual: `<div class="flex items-center justify-center gap-3 p-1.5 bg-rose-50 border border-rose-200 rounded-xl"><div class="bg-white px-2 py-0.5 rounded border border-rose-200 text-xs font-bold text-rose-900">🏺 第2盆：🌸🌸🌸🌸🌸 (5朵)</div><span class="text-slate-400 font-bold">🆚</span><div class="bg-white px-2 py-0.5 rounded border border-rose-200 text-xs font-bold text-rose-900">🏺 第4盆：🌸🌸 (2朵)</div></div>`,
            options: [{ text: "少 3 朵", correct: true }, { text: "少 2 朵", correct: false }]
          },
          {
            qid: "M21-5-3",
            prompt: "上面那排花，一共摆了多少盆花？",
            title: "总盆数点数",
            tip: "从第1盆到第6盆，一共有 6 盆花。",
            visual: `<div class="flex items-center justify-center gap-1.5 p-1.5 bg-amber-50 border border-amber-200 rounded-xl text-xs font-bold text-amber-900"><span>🏺①</span><span>🏺②</span><span>🏺③</span><span>🏺④</span><span>🏺⑤</span><span>🏺⑥</span><span class="ml-2 text-slate-500 font-normal">（数花盆总数）</span></div>`,
            options: [{ text: "6 盆", correct: true }, { text: "5 盆", correct: false }]
          }
        ]
      },
      {
        num: "六",
        title: "生活常识推理与操作思维：做善于观察的小能手。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M21-6-1",
            prompt: "帐篷里每个人都脱下一双鞋放在外面，图中的鞋子全部属于帐篷里的人，没有多余的鞋子。看图，帐篷里有几个人？",
            title: "成双对应推断人数",
            tip: "每个人穿 1 双鞋（2只），外面有 4 双鞋，说明帐篷里一共有 4 个人！",
            visual: `<div class="p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs">⛺<br>帐篷外的鞋子：<div class="flex flex-wrap justify-center gap-4 mt-2"><span>👟👟</span><span>👟👟</span><span>👟👟</span><span>👟👟</span></div></div>`,
            options: [{ text: "4 人", correct: true }, { text: "8 人", correct: false }, { text: "2 人", correct: false }]
          },
          {
            qid: "M21-6-2",
            prompt: "4个框里分别画图形：第1框1个，第2框3个，第3框5个。要使第1框最少、第4框最多，下面哪一个数量适合第4框？",
            title: "排序与数量递增",
            tip: "第4个框必须比第3个框（5个）更多，所以可以画 7 个。",
            visual: `<div class="flex flex-col items-center p-2 bg-orange-50/80 border border-orange-200 rounded-xl gap-1 w-full"><div class="text-[11px] font-bold text-orange-950">📦 四个框里的数量：</div><div class="grid grid-cols-4 gap-1.5 w-full text-center"><div class="border border-orange-300 bg-white p-1 rounded flex flex-col items-center"><span class="text-xs font-bold text-orange-600">△</span><span class="text-[10px] text-slate-500 mt-1">第1框(1个)</span></div><div class="border border-orange-300 bg-white p-1 rounded flex flex-col items-center"><span class="text-xs font-bold text-orange-600">△△△</span><span class="text-[10px] text-slate-500 mt-1">第2框(3个)</span></div><div class="border border-orange-300 bg-white p-1 rounded flex flex-col items-center"><span class="text-xs font-bold text-orange-600">△△△△△</span><span class="text-[10px] text-slate-500 mt-1">第3框(5个)</span></div><div class="border-2 border-dashed border-rose-400 bg-rose-50 p-1 rounded flex flex-col items-center"><span class="text-xs font-black text-rose-600">？个</span><span class="text-[10px] text-rose-700 font-bold mt-1">第4框</span></div></div></div>`,
            options: [{ text: "7 个", correct: true }, { text: "4 个", correct: false }, { text: "2 个", correct: false }]
          },
          {
            qid: "M21-6-3",
            prompt: "夜空中的“北斗七星”像一把大勺子，它是由几颗明亮的星星组成的？",
            title: "天文常识与计数",
            tip: "北斗“七”星由 7 颗星星组成。",
            visual: `<div class="flex flex-col items-center p-2 bg-slate-900 border border-indigo-500 rounded-xl w-full max-w-xs text-white"><div class="text-[11px] font-bold text-indigo-300 mb-0.5">✨ 北斗七星星座：</div><svg viewBox="0 0 200 65" class="w-40 h-auto"><polyline points="15,20 45,15 75,32 105,38 125,58 165,52 150,28 105,38" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="2,2" /><circle cx="15" cy="20" r="3.5" fill="#fbbf24" /><circle cx="45" cy="15" r="3.5" fill="#fbbf24" /><circle cx="75" cy="32" r="3.5" fill="#fbbf24" /><circle cx="105" cy="38" r="3.5" fill="#fbbf24" /><circle cx="125" cy="58" r="3.5" fill="#fbbf24" /><circle cx="165" cy="52" r="3.5" fill="#fbbf24" /><circle cx="150" cy="28" r="3.5" fill="#fbbf24" /></svg><span class="text-[10px] text-amber-300 font-mono">⭐ 组成一把勺子的大星星</span></div>`,
            options: [{ text: "7 颗", correct: true }, { text: "6 颗", correct: false }, { text: "8 颗", correct: false }]
          },
          {
            qid: "M21-6-4",
            prompt: "一只小兔吃 1 根胡萝卜。现在有 5 只小兔，篮子里有 4 根胡萝卜，胡萝卜够分吗？还差几根？",
            title: "一一对应比多少",
            tip: "5只小兔需要5根，4 < 5，不够分，还差 1 根。",
            visual: `<div class="flex flex-col items-center p-1.5 bg-emerald-50 border border-emerald-200 rounded-xl gap-0.5"><div class="text-xs font-bold text-emerald-950">🐰🐰🐰🐰🐰 <span class="text-[10px] text-slate-500">(5只小兔)</span></div><div class="text-[10px] text-slate-400">一一对应分萝卜</div><div class="text-xs font-bold text-orange-600">🥕🥕🥕🥕 <span class="text-[10px] text-slate-500">(4根胡萝卜)</span></div></div>`,
            options: [{ text: "不够分，差 1 根", correct: true }, { text: "正好够分", correct: false }]
          }
        ]
      },
      {
        num: "七",
        title: "数量换算与解决问题：选择正确的结果。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M21-7-1",
            prompt: "乐乐拿了 3 双筷子，月亮又拿来 2 根单只筷子，合起来一共有多少根筷子？",
            title: "复合量词加法",
            tip: "3双筷子是 6 根，6 + 2 = 8 根筷子！",
            visual: `<div class="p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs"><div class="flex flex-wrap justify-center gap-2"><div>乐乐：<svg viewBox="0 0 200 50" width="160" role="img" aria-label="3双筷子"><line x1="12" y1="5" x2="16" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="21" y1="5" x2="25" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="5" x2="54" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="59" y1="5" x2="63" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="88" y1="5" x2="92" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="97" y1="5" x2="101" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/></svg>3双筷子</div><span>＋</span><div>月亮：<svg viewBox="0 0 200 50" width="160" role="img" aria-label="0双筷子和2根单根筷子"><line x1="12" y1="5" x2="16" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/><line x1="21" y1="5" x2="25" y2="43" stroke="#92400e" stroke-width="3" stroke-linecap="round"/></svg>2根筷子</div></div></div>`,
            options: [{ text: "8 根", correct: true }, { text: "5 根", correct: false }, { text: "10 根", correct: false }]
          },
          {
            qid: "M21-7-2",
            prompt: "一群小朋友野营，每人穿一双雨靴。有的在帐篷里，各脱下一双雨靴放在树下，树下共有3双；另外2人穿着雨靴在草地上跑。这群小朋友共有几人？",
            title: "雨靴与人数综合",
            tip: "3双雨靴对应3人，加上外面跑的2人，3 + 2 = 5 人。",
            visual: `<div class="flex items-center justify-center gap-2 p-1.5 bg-amber-50 border border-amber-200 rounded-xl text-xs font-bold text-amber-900"><div class="bg-white px-2 py-0.5 rounded border border-amber-200">树下雨靴：👢👢 👢👢 👢👢 (3双)</div><span>➕</span><div class="bg-white px-2 py-0.5 rounded border border-amber-200">草地上：🏃🏃 (2人)</div></div>`,
            options: [{ text: "5 人", correct: true }, { text: "8 人", correct: false }, { text: "6 人", correct: false }]
          },
          {
            qid: "M21-7-3",
            prompt: "小红买来 1 双手套和 2 双袜子，手套和袜子一共有多少只？",
            title: "成双手套袜子计算",
            tip: "1双手套是2只，2双袜子是4只，2 + 4 = 6 只。",
            visual: `<div class="flex items-center justify-center gap-2 p-1.5 bg-pink-50 border border-pink-200 rounded-xl text-xs font-bold text-pink-900"><div class="bg-white px-2 py-0.5 rounded border border-pink-200">🧤 1双手套</div><span>➕</span><div class="bg-white px-2 py-0.5 rounded border border-pink-200">🧦🧦 2双袜子</div></div>`,
            options: [{ text: "6 只", correct: true }, { text: "3 只", correct: false }, { text: "4 只", correct: false }]
          },
          {
            qid: "M21-7-4",
            prompt: "桌上有 2 盘桃子，每盘放 4 个。如果吃了 3 个，还剩下几个桃子？",
            title: "两盘总数与减法",
            tip: "2盘一共：4 + 4 = 8 个，8 - 3 = 5 个桃子。",
            visual: `<div class="flex items-center justify-center gap-2 p-1.5 bg-orange-50 border border-orange-200 rounded-xl text-xs font-bold text-orange-950"><div class="bg-white px-2 py-0.5 rounded border border-orange-200">盘1：🍑🍑🍑🍑</div><div class="bg-white px-2 py-0.5 rounded border border-orange-200">盘2：🍑🍑🍑🍑</div><span class="text-rose-600 font-bold ml-1">😋 吃了3个</span></div>`,
            options: [{ text: "5 个", correct: true }, { text: "3 个", correct: false }, { text: "6 个", correct: false }]
          }
        ]
      },
      {
        "num": "八",
        "title": "综合练习：选择正确的答案。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M21-8-1",
            "prompt": "2双手套一共有多少只？",
            "title": "成双数量换算",
            "tip": "一双手套有2只，两双有2+2=4只。",
            "visual": "<div class=\"p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs\"><span class=\"text-2xl\">🧤　🧤</span><br>2双手套</div>",
            "options": [
              {
                "text": "4只",
                "correct": true
              },
              {
                "text": "2只",
                "correct": false
              },
              {
                "text": "6只",
                "correct": false
              }
            ]
          },
          {
            "qid": "M21-8-2",
            "prompt": "从0开始，一个一个地数到6，一共数了几个数？",
            "title": "从零计数",
            "tip": "0、1、2、3、4、5、6，一共7个数。",
            "visual": "<div class=\"p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs\"><svg viewBox=\"0 0 330 60\" width=\"100%\" role=\"img\" aria-label=\"从0到6的直尺刻度\"><line x1=\"15\" y1=\"22\" x2=\"315\" y2=\"22\" stroke=\"#334155\"/><line x1=\"15\" y1=\"15\" x2=\"15\" y2=\"29\" stroke=\"#334155\"/><text x=\"15\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">0</text><line x1=\"65\" y1=\"15\" x2=\"65\" y2=\"29\" stroke=\"#334155\"/><text x=\"65\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"115\" y1=\"15\" x2=\"115\" y2=\"29\" stroke=\"#334155\"/><text x=\"115\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"165\" y1=\"15\" x2=\"165\" y2=\"29\" stroke=\"#334155\"/><text x=\"165\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"215\" y1=\"15\" x2=\"215\" y2=\"29\" stroke=\"#334155\"/><text x=\"215\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"265\" y1=\"15\" x2=\"265\" y2=\"29\" stroke=\"#334155\"/><text x=\"265\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"315\" y1=\"15\" x2=\"315\" y2=\"29\" stroke=\"#334155\"/><text x=\"315\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text></svg></div>",
            "options": [
              {
                "text": "7个",
                "correct": true
              },
              {
                "text": "6个",
                "correct": false
              },
              {
                "text": "5个",
                "correct": false
              }
            ]
          },
          {
            "qid": "M21-8-3",
            "prompt": "从左往右，小猫排在第几？",
            "title": "顺序辨析",
            "tip": "从左往右依次是小狗、小兔、小猫、小熊，小猫排第3。",
            "visual": "<div class=\"p-3 bg-sky-50 border border-sky-200 rounded-xl w-full text-center text-xs\"><span class=\"text-2xl\">🐶　🐰　🐱　🐻</span><br>从左往右 →</div>",
            "options": [
              {
                "text": "第3",
                "correct": true
              },
              {
                "text": "第2",
                "correct": false
              },
              {
                "text": "第4",
                "correct": false
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Paper 22: 【进阶】天平代换与轻重长短推理卷
  // =========================================================================
  {
    id: 22,
    unit: "第一单元：准备课",
    title: "第 22 套：【进阶】天平代换与轻重长短推理卷",
    tag: "思维培优",
    tagColor: "bg-sky-100 text-sky-800",
    desc: "天平传递代换、弯曲绳子拉直比长短、打结绳长变化与水位高低空间推理。",
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: "天平代换连连看：看天平平衡，连到对应数量。",
        score: 12,
        type: "matching",
        tip: "天平两边重量相等，找准等量代换关系",
        pairs: [
          { target: "m22-1", label: "① 1个菠萝 = 2个苹果，2个菠萝 =", emoji: "🍍", answer: "ma22-1", char: "4个苹果", pinyin: "sì gè" },
          { target: "m22-2", label: "② 1只小兔 = 3只小鸟，2只小兔 =", emoji: "🐰", answer: "ma22-2", char: "6只小鸟", pinyin: "liù zhī" },
          { target: "m22-3", label: "③ 1个西瓜 = 4个桃子，半个西瓜 =", emoji: "🍉", answer: "ma22-3", char: "2个桃子", pinyin: "èr gè" },
          { target: "m22-4", label: "④ 1只小狗 = 2只小猫，3只小狗 =", emoji: "🐶", answer: "ma22-4", char: "6只小猫", pinyin: "liù zhī" },
          { target: "m22-5", label: "⑤ 2个梨 = 4个草莓，1个梨 =", emoji: "🍐", answer: "ma22-5", char: "2个草莓", pinyin: "èr gè" },
          { target: "m22-6", label: "⑥ 1头小猪 = 5只小鸭，2头小猪 =", emoji: "🐷", answer: "ma22-6", char: "10只小鸭", pinyin: "shí zhī" }
        ],
        shuffledAnswers: ["ma22-2", "ma22-4", "ma22-1", "ma22-6", "ma22-3", "ma22-5"]
      },
      {
        num: "二",
        title: "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        score: 8,
        type: "choice",
        items: [
          {
            qid: "M22-2-1",
            prompt: "一斤铁和一斤棉花相比：一斤铁的重量 ○ 一斤棉花的重量，○里填什么符号？",
            title: "经典轻重陷阱",
            tip: "都是“一斤”，重量完全一样，填等于号（=）！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一斤铁和一斤棉花相比：一斤铁的重量 ○ 一斤棉花的重量</span></div>",
            options: [{ text: "=", correct: true }, { text: ">", correct: false }]
          },
          {
            qid: "M22-2-2",
            prompt: "跷跷板左边坐着大象，右边坐着小猴，左边沉到底：大象重量 ○ 小猴重量，○里填什么符号？",
            title: "跷跷板沉浮比大小",
            tip: "沉下去的一端重，大象比小猴重，填 >。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">跷跷板左边坐着大象，右边坐着小猴，左边沉到底：大象重量 ○ 小猴重量</span></div>",
            options: [{ text: ">", correct: true }, { text: "<", correct: false }]
          },
          {
            qid: "M22-2-3",
            prompt: "一根绳子长10米，剪掉3米。剩下的长度 ○ 8米，○里填什么符号？",
            title: "绳长比较",
            tip: "10−3=7，7<8，选择小于号。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">绳子原长10米</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">剪掉3米</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">剩下长度 ○ 8米</span></div>",
            options: [{ text: "<", correct: true }, { text: ">", correct: false }]
          },
          {
            qid: "M22-2-4",
            prompt: "1个西瓜重5千克，1个哈密瓜重3千克。西瓜重量 ○ 哈密瓜重量，○里填什么符号？",
            title: "瓜重比较",
            tip: "5 > 3，填大于号。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">1个西瓜重5千克，1个哈密瓜重3千克。西瓜重量 ○ 哈密瓜重量</span></div>",
            options: [{ text: ">", correct: true }, { text: "<", correct: false }]
          }
        ]
      },
      {
        num: "三",
        title: "曲直与绳长思维：拉直比较看真章。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: "M22-3-1",
            prompt: "两根绳子两端对齐，甲绳拉直，乙绳在相同的两端之间弯曲。哪根绳子的实际长度更长？",
            title: "曲直拉直比长短",
            tip: "乙绳在相同的两端之间绕了弯路，拉直后比甲绳长。",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"两根绳子的两端对齐，甲是直线，乙弯曲\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>两根绳子的两端对齐，甲是直线，乙弯曲</title><text x=\"40\" y=\"44\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">甲</text><line x1=\"85\" y1=\"40\" x2=\"375\" y2=\"40\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"40\" y=\"100\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">乙</text><path d=\"M85 95 Q145 20 215 95 Q290 165 375 95\" fill=\"none\" stroke=\"#475569\" stroke-width=\"3\"/><line x1=\"85\" y1=\"20\" x2=\"85\" y2=\"126\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"375\" y1=\"20\" x2=\"375\" y2=\"126\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg>",
            options: [{ text: "乙绳更长", correct: true }, { text: "甲绳更长", correct: false }, { text: "一样长", correct: false }]
          },
          {
            qid: "M22-3-2",
            prompt: "两根原来一样长的绳子，红绳打3个结，蓝绳打1个结，每个结大小相同。把结外的部分拉直后，哪根绳子两端之间的长度更长？",
            title: "打结消耗绳长问题",
            tip: "打结会消耗绳子长度，打结越多的绳子变短得越厉害，蓝绳打结少所以蓝绳更长！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">红绳：3个同样大小的结</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">蓝绳：1个同样大小的结</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">原来长度相等</span></div>",
            options: [{ text: "蓝绳更长", correct: true }, { text: "红绳更长", correct: false }]
          },
          {
            qid: "M22-3-3",
            prompt: "用珠子紧挨着串满同样长度的两条项链。一条用8颗大珠子，另一条用更小的珠子。哪条需要的珠子更多？",
            title: "物体大小与所需数量",
            tip: "小珍珠个头小，要达到相同长度需要更多颗小珍珠（比8颗多）。",
            visual: "<div class=\"flex flex-wrap justify-center gap-5 p-3 border border-slate-300 rounded-xl\"><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"大珠项链\"><span>⚪</span><span>⚪</span><span>⚪</span><span>⚪</span><span>⚪</span><span>⚪</span><span>⚪</span><span>⚪</span></div><div class=\"mt-2 text-sm text-slate-700\">大珠项链</div></div></div><div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小珠项链：同样长、串满、无空隙</span></div>",
            options: [{ text: "比 8 颗多", correct: true }, { text: "比 8 颗少", correct: false }]
          },
          {
            qid: "M22-3-4",
            prompt: "1号和2号杯形状、大小相同，原来水面一样高。大石头完全浸没在1号杯，小石头完全浸没在2号杯，水不溢出。哪个杯子的水面上升得更多？",
            title: "体积排开水位上升",
            tip: "大石头占的空间大，排开水多，1号杯水面升得更高！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 160\" role=\"img\" aria-label=\"相同杯子初始水面等高；大石头与小石头尚未入水\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>相同杯子初始水面等高；大石头与小石头尚未入水</title><path d=\"M80 28v90h90V28 M260 28v90h90V28\" fill=\"none\" stroke=\"#475569\" stroke-width=\"3\"/><line x1=\"80\" y1=\"80\" x2=\"170\" y2=\"80\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"260\" y1=\"80\" x2=\"350\" y2=\"80\" stroke=\"#475569\" stroke-width=\"2\" /><circle cx=\"125\" cy=\"25\" r=\"22\" fill=\"#cbd5e1\" stroke=\"#475569\"/><circle cx=\"305\" cy=\"25\" r=\"12\" fill=\"#cbd5e1\" stroke=\"#475569\"/><text x=\"125\" y=\"140\" text-anchor=\"middle\" font-size=\"16\">1号杯</text><text x=\"305\" y=\"140\" text-anchor=\"middle\" font-size=\"16\">2号杯</text></svg>",
            options: [{ text: "1 号杯升得更高", correct: true }, { text: "2 号杯升得更高", correct: false }]
          }
        ]
      },
      {
        num: "四",
        title: "天平传递代换：做小小逻辑推理家。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: "M22-4-1",
            prompt: "天平左边1个菠萝 = 右边2个苹果；又知1个苹果 = 2个桃子。那么1个菠萝等于几个桃子？",
            title: "二级等量代换",
            tip: "1个菠萝换2个苹果，每个苹果换2个桃子，2+2=4个桃子！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">1个菠萝的重量＝2个苹果</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">1个苹果的重量＝2个桃子</span></div>",
            options: [{ text: "4 个桃子", correct: true }, { text: "2 个桃子", correct: false }, { text: "3 个桃子", correct: false }]
          },
          {
            qid: "M22-4-2",
            prompt: "天平左边1只鸭子 + 1只鸡 = 右边3只鸡。那么1只鸭子的重量等于几只鸡？",
            title: "天平消去法",
            tip: "天平两边同时拿掉1只鸡，左边剩1只鸭子，右边剩 3 - 1 = 2 只鸡！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">天平左边1只鸭子 + 1只鸡 = 右边3只鸡</span></div>",
            options: [{ text: "2 只鸡", correct: true }, { text: "3 只鸡", correct: false }]
          },
          {
            qid: "M22-4-3",
            prompt: "小红比小芳高，小芳比小丽高，这三个人中谁最矮？",
            title: "传递性比较极值",
            tip: "小红 > 小芳 > 小丽，小丽最矮！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红比小芳高</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小芳比小丽高</span></div>",
            options: [{ text: "小丽最矮", correct: true }, { text: "小红最矮", correct: false }]
          },
          {
            qid: "M22-4-4",
            prompt: "1 根大香蕉的重量等于 3 颗草莓。现在天平左边放 2 根大香蕉，右边要放几颗草莓才能平衡？",
            title: "乘倍代换推理",
            tip: "1根换3颗，2根大香蕉换 3 + 3 = 6 颗草莓。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">1根香蕉的重量＝3颗草莓</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">2根香蕉的重量＝？颗草莓</span></div>",
            options: [{ text: "6 颗草莓", correct: true }, { text: "5 颗草莓", correct: false }]
          }
        ]
      },
      {
        num: "五",
        title: "轻重长短综合辨析：生活中的物理常识。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M22-5-1",
            prompt: "把一个实心铁球和一个同样大的实心泡沫塑料球放进水里，通常谁会浮在水面上？",
            title: "浮力与轻重常识",
            tip: "同样大小的实心铁球和泡沫球材料不同；通常铁球沉入水中，泡沫球浮在水面。不能只凭轻重判断所有物体的浮沉。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">把一个铁球和一个同样大的泡沫塑料球同时放进水里</span></div>",
            options: [{ text: "泡沫塑料球浮在水面", correct: true }, { text: "铁球浮在水面", correct: false }]
          },
          {
            qid: "M22-5-2",
            prompt: "比高矮时，小刚垫起脚尖站在台阶上，小强站在平地上，这样能量出真正的身高吗？",
            title: "比高矮基准线",
            tip: "比高矮必须站在同一水平地面上，不能垫脚或站台阶！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 160\" role=\"img\" aria-label=\"甲从同一地面竖起，乙的起点高于地面\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>甲从同一地面竖起，乙的起点高于地面</title><line x1=\"35\" y1=\"120\" x2=\"385\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"100\" y1=\"35\" x2=\"100\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"275\" y1=\"15\" x2=\"275\" y2=\"80\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"100\" y=\"18\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">甲</text><text x=\"275\" y=\"138\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">乙</text></svg>",
            options: [{ text: "不能，必须在同一水平面上站直", correct: true }, { text: "能，高的就是小刚", correct: false }]
          },
          {
            qid: "M22-5-3",
            prompt: "一根木棍长 8 米，锯掉一半，还剩下多少米？",
            title: "对半减半长度",
            tip: "8的一半是4米（4+4=8）。",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"长度8米的木条，虚线为中点\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>长度8米的木条，虚线为中点</title><line x1=\"40\" y1=\"58\" x2=\"380\" y2=\"58\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"74\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"380\" y1=\"40\" x2=\"380\" y2=\"74\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"35\" x2=\"210\" y2=\"83\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><text x=\"210\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">全长8米</text><text x=\"125\" y=\"112\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">一半长？</text></svg>",
            options: [{ text: "4 米", correct: true }, { text: "5 米", correct: false }]
          }
        ]
      },
      {
        num: "六",
        title: "逆向思考与极值推断：考考你的脑筋急转弯。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M22-6-1",
            prompt: "甲、乙、丙三根木条分别长5厘米、7厘米、4厘米。哪根木条最长？",
            title: "木条长度比较",
            tip: "7比5和4都大，所以乙木条最长。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">甲：5厘米</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乙：7厘米</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">丙：4厘米</span></div>",
            options: [
              {
                "text": "乙木条",
                "correct": true
              },
              {
                "text": "甲木条",
                "correct": false
              },
              {
                "text": "丙木条",
                "correct": false
              }
            ]
          },
          {
            qid: "M22-6-2",
            prompt: "三个小朋友的杯子里原来装有同样多的果汁，喝后小明剩得最多，小红剩得最少。谁喝得最多？",
            title: "剩余量与消耗量逆向关系",
            tip: "剩得越少说明喝得越多！小红剩得最少，所以小红喝得最多！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">三个小朋友的杯子里原来装有同样多的果汁</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">喝后小明剩得最多</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红剩得最少</span></div>",
            options: [{ text: "小红喝得最多", correct: true }, { text: "小明喝得最多", correct: false }]
          },
          {
            qid: "M22-6-3",
            prompt: "一根绳子对折一次，两端对齐，在折后绳子的中间位置同时剪断两股。一共变成几段？",
            title: "折叠剪绳思维拓展",
            tip: "剪的位置在折后中间，原绳上被剪断了两处，所以分成3段。",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 175\" role=\"img\" aria-label=\"两端对齐的对折绳子，从折后中间同时剪断两股\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>两端对齐的对折绳子，从折后中间同时剪断两股</title><path d=\"M75 40H295Q355 40 355 75Q355 110 295 110H75\" fill=\"none\" stroke=\"#475569\" stroke-width=\"4\"/><line x1=\"210\" y1=\"22\" x2=\"210\" y2=\"130\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><text x=\"210\" y=\"154\" text-anchor=\"middle\" font-size=\"14\" fill=\"#334155\">虚线是剪的位置</text></svg>",
            options: [{ text: "3 段", correct: true }, { text: "2 段", correct: false }, { text: "4 段", correct: false }]
          },
          {
            qid: "M22-6-4",
            prompt: "天平两边各有 5 块糖，从左边拿 2 块放到右边，右边比左边多几块糖？",
            title: "移多补少极易错题",
            tip: "左边剩 5-2=3 块，右边有 5+2=7 块，7 - 3 = 4 块！移2块多4块！",
            visual: "<div class=\"flex flex-wrap justify-center gap-5 p-3 border border-slate-300 rounded-xl\"><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"原来左边\"><span>🍬</span><span>🍬</span><span>🍬</span><span>🍬</span><span>🍬</span></div><div class=\"mt-2 text-sm text-slate-700\">原来左边</div></div><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"原来右边\"><span>🍬</span><span>🍬</span><span>🍬</span><span>🍬</span><span>🍬</span></div><div class=\"mt-2 text-sm text-slate-700\">原来右边</div></div></div><div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从左边移2块到右边</span></div>",
            options: [{ text: "多 4 块", correct: true }, { text: "多 2 块", correct: false }]
          }
        ]
      },
      {
        num: "七",
        title: "生活解决问题：学以致用大冲关。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M22-7-1",
            prompt: "小白兔拔萝卜，拔了 4 个大红萝卜和 5 个小白萝卜，送给奶奶 3 个，还剩几个？",
            title: "加减混合生活问题",
            tip: "4 + 5 = 9 个，9 - 3 = 6 个萝卜。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小白兔拔萝卜</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">拔了 4 个大红萝卜和 5 个小白萝卜</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">送给奶奶 3 个</span></div>",
            options: [{ text: "6 个", correct: true }, { text: "7 个", correct: false }]
          },
          {
            qid: "M22-7-2",
            prompt: "乐乐有 8 支彩笔，月亮有 4 支彩笔，乐乐给月亮几支后两人的彩笔同样多？",
            title: "移多补少同样多",
            tip: "乐乐比月亮多 8-4=4 支，把多出的4支分一半（4分成2和2），给2支后两人都是6支！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐有 8 支彩笔</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">月亮有 4 支彩笔</span></div>",
            options: [{ text: "给 2 支", correct: true }, { text: "给 4 支", correct: false }]
          },
          {
            qid: "M22-7-3",
            prompt: "妈妈买了 10 个鸡蛋，早上煎了 2 个，中午煮了 3 个，还剩下几个鸡蛋？",
            title: "连续消耗减法",
            tip: "10 - 2 - 3 = 5 个鸡蛋。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">妈妈买了 10 个鸡蛋</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">早上煎了 2 个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">中午煮了 3 个</span></div>",
            options: [{ text: "5 个", correct: true }, { text: "6 个", correct: false }]
          },
          {
            qid: "M22-7-4",
            prompt: "一根彩带长 9 米，包装礼盒用去 4 米，扎气球用去 3 米，彩带还剩几米？",
            title: "连减生活实际应用",
            tip: "9 - 4 - 3 = 2 米。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一根彩带长 9 米</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">包装礼盒用去 4 米</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">扎气球用去 3 米</span></div>",
            options: [{ text: "2 米", correct: true }, { text: "3 米", correct: false }]
          }
        ]
      },
      {
        "num": "八",
        "title": "综合小挑战：选择正确答案。",
        "score": 12,
        "type": "choice",
        "tip": "独立作答，交卷后统一判分。",
        "items": [
          {
            "qid": "M22-8-1",
            "title": "1. 综合小挑战",
            "prompt": "甲木条长6厘米，乙木条长9厘米，哪根长？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">甲木条长6厘米</span></div>",
            "options": [
              {
                "text": "乙木条",
                "correct": true
              },
              {
                "text": "甲木条",
                "correct": false
              }
            ],
            "tip": "9大于6，所以乙木条长。"
          },
          {
            "qid": "M22-8-2",
            "title": "2. 综合小挑战",
            "prompt": "一件物品重4个单位，另一件重3个单位，合起来重多少个单位？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一件物品重4个单位</span></div>",
            "options": [
              {
                "text": "7",
                "correct": true
              },
              {
                "text": "6",
                "correct": false
              },
              {
                "text": "8",
                "correct": false
              }
            ],
            "tip": "4+3=7。"
          },
          {
            "qid": "M22-8-3",
            "title": "3. 综合小挑战",
            "prompt": "两端相同，一条绳子拉直，一条绕弯，哪条实际更长？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两端相同</span></div>",
            "options": [
              {
                "text": "绕弯的",
                "correct": true
              },
              {
                "text": "拉直的",
                "correct": false
              }
            ],
            "tip": "同样的两端之间，绕弯的路径更长。"
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Paper 23: 【进阶】左右相对性与排队陷阱卷
  // =========================================================================
  {
    id: 23,
    unit: "第二单元：位置",
    title: "第 23 套：【进阶】左右相对性与排队陷阱卷",
    tag: "思维培优",
    tagColor: "bg-rose-100 text-rose-800",
    desc: "面对面左右相对性辨识、镜子里的左右相反、排队中“从左数第几个”与“左边有几个”深度辨析。",
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: "方位对应连连看：看情境辨析方位词。",
        score: 12,
        type: "matching",
        tip: "分清自身左右与他人面对面左右",
        pairs: [
          { target: "m23-1", label: "① 大多数同学写字用的手 ✍️", emoji: "✍️", answer: "ma23-1", char: "右手", pinyin: "yòu shǒu" },
          { target: "m23-2", label: "② 敬礼时高高举起的手 🫡", emoji: "🫡", answer: "ma23-2", char: "右手", pinyin: "yòu shǒu" },
          { target: "m23-3", label: "③ 佩戴红领巾在衣服胸前 🧣", emoji: "🧣", answer: "ma23-3", char: "前面", pinyin: "qián mian" },
          { target: "m23-4", label: "④ 书包背在身体的后背 🎒", emoji: "🎒", answer: "ma23-4", char: "后面", pinyin: "hòu mian" },
          { target: "m23-5", label: "⑤ 学校规定沿走廊靠右走，应走在自己哪一侧？", emoji: "🚶", answer: "ma23-5", char: "右侧", pinyin: "yòu cè" },
          { target: "m23-6", label: "⑥ 小明用右手写字，通常用哪只手扶本子？", emoji: "✋", answer: "ma23-6", char: "左手", pinyin: "zuǒ shǒu" }
        ],
        shuffledAnswers: ["ma23-2", "ma23-4", "ma23-1", "ma23-6", "ma23-3", "ma23-5"]
      },
      {
        num: "二",
        title: "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        score: 8,
        type: "choice",
        items: [
          {
            qid: "M23-2-1",
            prompt: "排队做操，从左数小华排第 4，从左数小丽排第 6：小华排的序号 ○ 小丽排的序号，○里填什么符号？",
            title: "排队序数比大小",
            tip: "4 < 6，小华在小丽的左边，填 <。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">排队做操，从左数小华排第 4，从左数小丽排第 6：小华排的序号 ○ 小丽排的序号</span></div>",
            options: [{ text: "<", correct: true }, { text: ">", correct: false }]
          },
          {
            qid: "M23-2-2",
            prompt: "小红左边有 3 个人，右边有 5 个人：右边人数 ○ 左边人数，○里填什么符号？",
            title: "左右人数对比",
            tip: "5 > 3，右边人数多，填 >。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红左边有 3 个人，右边有 5 个人：右边人数 ○ 左边人数</span></div>",
            options: [{ text: ">", correct: true }, { text: "<", correct: false }]
          },
          {
            qid: "M23-2-3",
            prompt: "乐乐左手拿 4 颗糖，右手拿 4 颗糖：左手数量 ○ 右手数量，○里填什么符号？",
            title: "双手数量比较",
            tip: "两边都是4颗，相等填 =。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐左手拿 4 颗糖，右手拿 4 颗糖：左手数量 ○ 右手数量</span></div>",
            options: [{ text: "=", correct: true }, { text: "<", correct: false }]
          },
          {
            qid: "M23-2-4",
            prompt: "一排共有8人，序号从1开始。总人数8 ○ 小明所说的序号9，○里填什么符号？",
            title: "总人数与序号矛盾",
            tip: "8<9。总人数只有8人，所以不能排到第9。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一排共有8人，序号从1开始。总人数8 ○ 小明所说的序号9</span></div>",
            options: [{ text: "<", correct: true }, { text: ">", correct: false }]
          }
        ]
      },
      {
        num: "三",
        title: "面对面与镜子左右：挑战思维观察力。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: "M23-3-1",
            prompt: "老师面对着同学们，举起老师自己的右手。同学们看到这只手在自己看到画面的哪一边？",
            title: "面对面左右相对性",
            tip: "面对面站立时左右方向是相反的！老师举右手，在同学们的左边！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 185\" role=\"img\" aria-label=\"面对观察者的老师举起自己的右手，手在画面左侧\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>面对观察者的老师举起自己的右手，手在画面左侧</title><circle cx=\"210\" cy=\"38\" r=\"20\" fill=\"white\" stroke=\"#475569\"/><line x1=\"210\" y1=\"58\" x2=\"210\" y2=\"103\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"68\" x2=\"130\" y2=\"28\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"68\" x2=\"275\" y2=\"84\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"103\" x2=\"180\" y2=\"132\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"103\" x2=\"240\" y2=\"132\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"165\" text-anchor=\"middle\" font-size=\"14\" fill=\"#334155\">老师面对你，举起右手</text></svg>",
            options: [{ text: "左边", correct: true }, { text: "右边", correct: false }]
          },
          {
            qid: "M23-3-2",
            prompt: "小明和小刚面对面。小明向自己的右侧指，小刚看到这个方向在自己的哪一侧？",
            title: "击掌面对面手型",
            tip: "两人面对面，彼此的左右方向相反。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明 → ← 小刚</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">面对面；小明指向自己的右侧</span></div>",
            options: [{ text: "左边", correct: true }, { text: "右边", correct: false }]
          },
          {
            qid: "M23-3-3",
            prompt: "图中的小猴正面朝着你，花在你看到的画面的右侧。这朵花在小猴自己的哪只耳朵旁？",
            title: "面对面判断左右",
            tip: "正面朝着你的小猴，自己的左侧在你看到画面的右侧。",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"面对观察者的小猴，花在画面右侧耳旁\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>面对观察者的小猴，花在画面右侧耳旁</title><circle cx=\"165\" cy=\"72\" r=\"24\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"255\" cy=\"72\" r=\"24\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"210\" cy=\"78\" r=\"47\" fill=\"white\" stroke=\"#475569\"/><text x=\"195\" y=\"75\" text-anchor=\"middle\" font-size=\"24\" fill=\"#334155\">•</text><text x=\"227\" y=\"75\" text-anchor=\"middle\" font-size=\"24\" fill=\"#334155\">•</text><text x=\"210\" y=\"98\" text-anchor=\"middle\" font-size=\"24\" fill=\"#334155\">ᴗ</text><text x=\"276\" y=\"56\" text-anchor=\"middle\" font-size=\"29\" fill=\"#334155\">🌸</text></svg>",
            options: [{ text: "左耳", correct: true }, { text: "右耳", correct: false }]
          },
          {
            qid: "M23-3-4",
            prompt: "两名同学在足够宽的楼梯上面对面，各自保持在自己的右侧直行。他们的路线能错开吗？",
            title: "规则与相对性",
            tip: "面对面时，各自的右侧在不同侧，路线可以错开。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两人面对面</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">各沿自己的右侧直行</span></div>",
            options: [{ text: "能错开", correct: true }, { text: "不能错开", correct: false }]
          }
        ]
      },
      {
        num: "四",
        title: "排队“第几个”与“一共有几人”陷阱辨析。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: "M23-4-1",
            prompt: "从左往右数，小猫排第4；小猫右边还有3只动物（不包括小猫）。这一排一共有几只？",
            title: "排队部分加总",
            tip: "小猫及其左边一共有4只，右边还有3只，4 + 3 = 7 只！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从左数小猫第4</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小猫右边另有3只</span></div>",
            options: [{ text: "7 只", correct: true }, { text: "6 只", correct: false }, { text: "8 只", correct: false }]
          },
          {
            qid: "M23-4-2",
            prompt: "小朋友排成一队做操，从前往后数乐乐排第 4，从后往前数乐乐排第 5。这一队一共有几人？",
            title: "排队重复数减一",
            tip: "乐乐被从前数了一次，又从后数了一次，重复数了2次！4 + 5 - 1 = 8 人！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小朋友排成一队做操</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从前往后数乐乐排第 4</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从后往前数乐乐排第 5</span></div>",
            options: [{ text: "8 人", correct: true }, { text: "9 人", correct: false }, { text: "10 人", correct: false }]
          },
          {
            qid: "M23-4-3",
            prompt: "小红的左边有 3 个人，小红的右边有 4 个人。这一排一共有几个人？",
            title: "左右人数加本人",
            tip: "注意加上小红自己！3 + 4 + 1(小红) = 8 人！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红的左边有 3 个人</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红的右边有 4 个人</span></div>",
            options: [{ text: "8 人", correct: true }, { text: "7 人", correct: false }]
          },
          {
            qid: "M23-4-4",
            prompt: "一排共有 7 个人，从左往右数小芳排第 3。请问小芳的右边有几个人？",
            title: "求右边人数",
            tip: "7人减去小芳及其左边的3人：7 - 3 = 4 人！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一排共有 7 个人</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从左往右数小芳排第 3</span></div>",
            options: [{ text: "4 人", correct: true }, { text: "5 人", correct: false }]
          }
        ]
      },
      {
        num: "五",
        title: "多方位组合空间定位：火眼金睛辨认。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M23-5-1",
            prompt: "只有题目所说的这三只小动物。小动物赛跑，小兔跑在最前面，小狗跑在最后面，小松鼠在小兔后面、小狗前面。排在第二位的是？",
            title: "赛跑前后顺序",
            tip: "顺序是：小兔（第1）、小松鼠（第2）、小狗（第3）。排第二的是小松鼠！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">只有题目所说的这三只小动物</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小动物赛跑</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小兔跑在最前面</span></div>",
            options: [{ text: "小松鼠", correct: true }, { text: "小狗", correct: false }]
          },
          {
            qid: "M23-5-2",
            prompt: "课桌上，数学书在语文书的左边，文具盒在语文书的右边。放在最左边的是什么？",
            title: "物体左右相对链",
            tip: "从左到右依次是：数学书、语文书、文具盒。最左边的是数学书！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">课桌上</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">数学书在语文书的左边</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">文具盒在语文书的右边</span></div>",
            options: [{ text: "数学书", correct: true }, { text: "文具盒", correct: false }]
          },
          {
            qid: "M23-5-3",
            prompt: "你在小明的前面，小明在小刚的前面。这三个人中谁走在队伍的最前面？",
            title: "前后传递推理",
            tip: "你 > 小明 > 小刚，走在最前面的是你！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">你在小明的前面</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明在小刚的前面</span></div>",
            options: [{ text: "你", correct: true }, { text: "小刚", correct: false }]
          }
        ]
      },
      {
        num: "六",
        title: "两数之间与排队间隔高难度思维。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M23-6-1",
            prompt: "【两数之间陷阱】从前往后数，小明排第 2，小华排第 6。小明和小华之间有几个人？",
            title: "两数之间不含两端",
            tip: "在第2和第6之间的人是第3、4、5，一共 3 人！（算式：6 - 2 - 1 = 3 人）",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从前往后数</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明排第 2</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小华排第 6</span></div>",
            options: [{ text: "3 人", correct: true }, { text: "4 人", correct: false }, { text: "2 人", correct: false }]
          },
          {
            qid: "M23-6-2",
            prompt: "一排有8只小鸭，“圈出左边3只”表示圈出多少只？",
            title: "基数与序数区别",
            tip: "左边3只是一个数量，共3只；第3只才是单独的一只。",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"排列图：🐥、🐥、🐥、🐥、🐥、🐥、🐥、🐥；从左边开始数\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>排列图：🐥、🐥、🐥、🐥、🐥、🐥、🐥、🐥；从左边开始数</title><text x=\"30\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐥</text><text x=\"81.42857142857143\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐥</text><text x=\"132.85714285714286\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐥</text><text x=\"184.28571428571428\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐥</text><text x=\"235.71428571428572\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐥</text><text x=\"287.14285714285717\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐥</text><text x=\"338.57142857142856\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐥</text><text x=\"390\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐥</text><text x=\"210\" y=\"119\" text-anchor=\"middle\" font-size=\"14\" fill=\"#334155\">从左边开始数</text></svg>",
            options: [{ text: "3 只", correct: true }, { text: "1 只", correct: false }]
          },
          {
            qid: "M23-6-3",
            prompt: "排队报数，从左数乐乐报 5，从右数乐乐报 4。这一排一共有几人？",
            title: "左右报数相加",
            tip: "5 + 4 - 1 = 8 人。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">排队报数</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从左数乐乐报 5</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从右数乐乐报 4</span></div>",
            options: [{ text: "8 人", correct: true }, { text: "9 人", correct: false }]
          },
          {
            qid: "M23-6-4",
            prompt: "小红前面有 2 人，后面有 5 人。从后往前数，小红排第几？",
            title: "倒序位置推算",
            tip: "小红后面有5人，说明从后往前数，这5人是第1~5名，小红紧接着排第 6！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红前面有 2 人</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">后面有 5 人</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从后往前数</span></div>",
            options: [{ text: "第 6", correct: true }, { text: "第 5", correct: false }, { text: "第 7", correct: false }]
          }
        ]
      },
      {
        num: "七",
        title: "生活情境与方位解决问题。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M23-7-1",
            prompt: "树上有一排小鸟，从左数小蓝鸟是第 3 只，从右数小蓝鸟是第 6 只。树上一共有几只小鸟？",
            title: "小鸟排队两端数",
            tip: "3 + 6 - 1 = 8 只。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">树上有一排小鸟</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从左数小蓝鸟是第 3 只</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从右数小蓝鸟是第 6 只</span></div>",
            options: [{ text: "8 只", correct: true }, { text: "9 只", correct: false }]
          },
          {
            qid: "M23-7-2",
            prompt: "红花排在第一，黄花排在最后，中间夹着 4 朵蓝花。这一排一共有几朵花？",
            title: "两端加中间数量",
            tip: "1朵红花 + 4朵蓝花 + 1朵黄花 = 6 朵花！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">红花排在第一</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">黄花排在最后</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">中间夹着 4 朵蓝花</span></div>",
            options: [{ text: "6 朵", correct: true }, { text: "5 朵", correct: false }]
          },
          {
            qid: "M23-7-3",
            prompt: "车厢里坐着一排乘客。从前数叔叔是第 4 位，叔叔后面还有 5 位乘客。这节车厢这一排一共有几位？",
            title: "排号加后面人数",
            tip: "4 + 5 = 9 位乘客。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">车厢里坐着一排乘客</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从前数叔叔是第 4 位</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">叔叔后面还有 5 位乘客</span></div>",
            options: [{ text: "9 位", correct: true }, { text: "8 位", correct: false }]
          },
          {
            qid: "M23-7-4",
            prompt: "每跳一次向前走1格。小松鼠跳格子，从第 1 格向前跳 4 格，小松鼠现在停在第几格？",
            title: "数轴前进加法",
            tip: "1 + 4 = 5 格。",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">0</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">7</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">8</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">9</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text></svg>",
            options: [{ text: "第 5 格", correct: true }, { text: "第 4 格", correct: false }]
          }
        ]
      },
      {
        "num": "八",
        "title": "综合小挑战：选择正确答案。",
        "score": 12,
        "type": "choice",
        "tip": "独立作答，交卷后统一判分。",
        "items": [
          {
            "qid": "M23-8-1",
            "title": "1. 综合小挑战",
            "prompt": "乐乐左手拿2颗糖，右手拿3颗糖，两手一共拿几颗？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">左手：2颗糖</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">右手：3颗糖</span></div>",
            "options": [
              {
                "text": "5 颗",
                "correct": true
              },
              {
                "text": "4 颗",
                "correct": false
              }
            ],
            "tip": "2+3=5。"
          },
          {
            "qid": "M23-8-2",
            "title": "2. 综合小挑战",
            "prompt": "一排有6只小鸭，圈出左边第2只，一共圈出几只？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一排有6只小鸭</span></div>",
            "options": [
              {
                "text": "1 只",
                "correct": true
              },
              {
                "text": "2 只",
                "correct": false
              }
            ],
            "tip": "第2只表示位置，只圈出1只。"
          },
          {
            "qid": "M23-8-3",
            "title": "3. 综合小挑战",
            "prompt": "从左数小猫第3，从右数小猫第4，这排共有几只动物？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从左数小猫第3</span></div>",
            "options": [
              {
                "text": "6 只",
                "correct": true
              },
              {
                "text": "7 只",
                "correct": false
              }
            ],
            "tip": "3+4−1=6。"
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Paper 24: 【进阶】多维空间方位与路线推理卷
  // =========================================================================
  {
    id: 24,
    unit: "第二单元：位置",
    title: "第 24 套：【进阶】多维空间方位与路线推理卷",
    tag: "思维培优",
    tagColor: "bg-indigo-100 text-indigo-800",
    desc: "多层货架上下左右综合定位、房间楼层住户推理、迷宫行进路线方位辨识。",
    timeLimit: 25,
    sections: [
      {
        "num": "一",
        "title": "看货架位置连连看：按图中位置连接物品。",
        "score": 12,
        "type": "matching",
        "tip": "以看到的画面判断左、右和上、中、下三层。",
        "pairs": [
          {
            "target": "m24-1",
            "label": "① 最顶层正中间",
            "emoji": "📍",
            "answer": "ma24-1",
            "char": "玩具小熊",
            "pinyin": "xiǎo xióng"
          },
          {
            "target": "m24-2",
            "label": "② 最底层最右侧",
            "emoji": "📍",
            "answer": "ma24-2",
            "char": "彩色足球",
            "pinyin": "zú qiú"
          },
          {
            "target": "m24-3",
            "label": "③ 中间层最左侧",
            "emoji": "📍",
            "answer": "ma24-3",
            "char": "故事图画书",
            "pinyin": "tú huà shū"
          },
          {
            "target": "m24-4",
            "label": "④ 中间层正中间",
            "emoji": "📍",
            "answer": "ma24-4",
            "char": "可爱小闹钟",
            "pinyin": "nào zhōng"
          },
          {
            "target": "m24-5",
            "label": "⑤ 最底层最左侧",
            "emoji": "📍",
            "answer": "ma24-5",
            "char": "神奇悠悠球",
            "pinyin": "yōu yōu qiú"
          },
          {
            "target": "m24-6",
            "label": "⑥ 最顶层最左侧",
            "emoji": "📍",
            "answer": "ma24-6",
            "char": "变形机器人",
            "pinyin": "jī qì rén"
          }
        ],
        "shuffledAnswers": [
          "ma24-2",
          "ma24-4",
          "ma24-1",
          "ma24-6",
          "ma24-3",
          "ma24-5"
        ],
        "visual": "<div class=\"border border-slate-400 rounded-lg p-3 bg-white\"><div class=\"grid grid-cols-3 text-center gap-4 py-3 border-b border-slate-400\"><span>🤖 机器人</span><span>🧸 小熊</span><span>空位</span></div><div class=\"grid grid-cols-3 text-center gap-4 py-3 border-b border-slate-400\"><span>📚 图画书</span><span>⏰ 闹钟</span><span>空位</span></div><div class=\"grid grid-cols-3 text-center gap-4 py-3\"><span>🪀 悠悠球</span><span>空位</span><span>⚽ 足球</span></div></div>"
      },
      {
        num: "二",
        title: "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        score: 8,
        type: "choice",
        items: [
          {
            qid: "M24-2-1",
            prompt: "楼房共6层，小明住在第4层，小华住在第2层：小明住的楼层 ○ 小华住的楼层，○里填什么符号？",
            title: "楼层高低比大小",
            tip: "4 > 2，小明住得更高，填 >。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">楼房共6层，小明住在第4层，小华住在第2层：小明住的楼层 ○ 小华住的楼层</span></div>",
            options: [{ text: ">", correct: true }, { text: "<", correct: false }]
          },
          {
            qid: "M24-2-2",
            prompt: "货架上层有4件玩具，下层有4件玩具：上层玩具数 ○ 下层玩具数，○里填什么符号？",
            title: "层数数量对比",
            tip: "两层都是4件，填 =。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">货架上层有4件玩具，下层有4件玩具：上层玩具数 ○ 下层玩具数</span></div>",
            options: [{ text: "=", correct: true }, { text: ">", correct: false }]
          },
          {
            qid: "M24-2-3",
            prompt: "蚂蚁爬5格，蜗牛爬7格。蚂蚁爬的格数 ○ 蜗牛爬的格数，○里填什么符号？",
            title: "爬行格数对比",
            tip: "5 < 7，蜗牛爬得多，填 <。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">蚂蚁爬5格，蜗牛爬7格。蚂蚁爬的格数 ○ 蜗牛爬的格数</span></div>",
            options: [{ text: "<", correct: true }, { text: ">", correct: false }]
          },
          {
            qid: "M24-2-4",
            prompt: "从1楼到3楼爬的楼梯层数 ○ 从1楼到4楼爬的楼梯层数，○里填什么符号？",
            title: "楼梯间数比较",
            tip: "2 < 3，填小于号。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从1楼到3楼爬的楼梯层数 ○ 从1楼到4楼爬的楼梯层数</span></div>",
            options: [{ text: "<", correct: true }, { text: ">", correct: false }]
          }
        ]
      },
      {
        num: "三",
        title: "楼房住户与邻居推理：做聪明的小侦探查案。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: "M24-3-1",
            prompt: "一栋4层小动物楼房：小狗住在紧挨着小兔的上一层，小猫住在紧挨着小兔的下一层。小狗住在第3层，小猫住在第几层？",
            title: "楼房上下传递推理",
            tip: "小狗第3层在小兔楼上，说明小兔在第2层；小猫在小兔楼下，所以小猫住在第 1 层！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小狗：第3层</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小兔：紧挨狗的下一层</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小猫：紧挨兔的下一层</span></div>",
            options: [{ text: "第 1 层", correct: true }, { text: "第 2 层", correct: false }, { text: "第 4 层", correct: false }]
          },
          {
            qid: "M24-3-2",
            prompt: "小红家住在3楼，小刚家住在紧挨着小红家的上一层。小刚家住在几楼？",
            title: "楼上楼下相邻层",
            tip: "3楼的楼上是 3 + 1 = 4 楼。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红：3楼</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小刚：紧挨着的上一层</span></div>",
            options: [{ text: "4 楼", correct: true }, { text: "2 楼", correct: false }]
          },
          {
            qid: "M24-3-3",
            prompt: "一栋楼里，乐乐从 1 楼走到 2 楼爬了 1 层楼梯。乐乐从 1 楼走到 5 楼，一共要爬几层楼梯？",
            title: "经典植树楼梯间隔",
            tip: "走到5楼需要爬 5 - 1 = 4 层楼梯！千万别写5层！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一栋楼里</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐从 1 楼走到 2 楼爬了 1 层楼梯</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐从 1 楼走到 5 楼</span></div>",
            options: [{ text: "4 层", correct: true }, { text: "5 层", correct: false }, { text: "3 层", correct: false }]
          },
          {
            qid: "M24-3-4",
            prompt: "3个小动物住一排平房：小羊的右边是小鹿，小羊的左边是小马。中间住着谁？",
            title: "平房左右邻居",
            tip: "小马在左，小鹿在右，小羊在正中间！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"排列图：🐴、🐑、🦌\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>排列图：🐴、🐑、🦌</title><text x=\"30\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐴</text><text x=\"210\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐑</text><text x=\"390\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🦌</text><text x=\"210\" y=\"119\" text-anchor=\"middle\" font-size=\"14\" fill=\"#334155\"></text></svg>",
            options: [{ text: "小羊", correct: true }, { text: "小马", correct: false }]
          }
        ]
      },
      {
        num: "四",
        title: "迷宫路线与方位指引：按指令前进。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: "M24-4-1",
            prompt: "小机器人从起点出发，先向前走 3 格，再向右拐走 2 格，接着向后退 1 格。小机器人一共走了几格？",
            title: "路线步数统计",
            tip: "3 + 2 + 1 = 6 格！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小机器人从起点出发</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">先向前走 3 格</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">再向右拐走 2 格</span></div>",
            options: [{ text: "6 格", correct: true }, { text: "5 格", correct: false }, { text: "4 格", correct: false }]
          },
          {
            qid: "M24-4-2",
            prompt: "在九宫格中，中心格的上方是太阳，下方是月亮，左方是星星，右方是白云。月亮的对面是什么？",
            title: "空间相对位置",
            tip: "下方与上方正相对，下方的月亮对面是上方的太阳！",
            visual: "<div class=\"grid grid-cols-3 gap-1 border border-slate-400 text-center p-2 w-60\"><div class=\"border border-slate-300 p-3\">　</div><div class=\"border border-slate-300 p-3\">☀️</div><div class=\"border border-slate-300 p-3\">　</div><div class=\"border border-slate-300 p-3\">⭐</div><div class=\"border border-slate-300 p-3\">中心</div><div class=\"border border-slate-300 p-3\">☁️</div><div class=\"border border-slate-300 p-3\">　</div><div class=\"border border-slate-300 p-3\">🌙</div><div class=\"border border-slate-300 p-3\">　</div></div>",
            options: [{ text: "太阳", correct: true }, { text: "星星", correct: false }]
          },
          {
            qid: "M24-4-3",
            prompt: "图中刹车踏板在油门踏板的哪一边？",
            title: "生活常识方位",
            tip: "刹车踏板在油门踏板的左边。",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"正对踏板看到的刹车和油门位置\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>正对踏板看到的刹车和油门位置</title><rect x=\"100\" y=\"30\" width=\"100\" height=\"70\" rx=\"8\" fill=\"white\" stroke=\"#475569\"/><rect x=\"260\" y=\"30\" width=\"50\" height=\"70\" rx=\"8\" fill=\"white\" stroke=\"#475569\"/><text x=\"150\" y=\"70\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">刹车</text><text x=\"285\" y=\"70\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">油门</text></svg>",
            options: [{ text: "左边", correct: true }, { text: "右边", correct: false }]
          },
          {
            qid: "M24-4-4",
            prompt: "红旗在操场正中间，小明在红旗北面，小华在红旗南面。小明面向小华时，看向什么方向？",
            title: "前后南北方向对应",
            tip: "从北面面向南面的小华，小明看向南方。",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 158\" role=\"img\" aria-label=\"小明在北，小华在南，红旗在中间\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>小明在北，小华在南，红旗在中间</title><text x=\"210\" y=\"20\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">北</text><text x=\"210\" y=\"45\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小明</text><text x=\"210\" y=\"82\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🚩</text><text x=\"210\" y=\"118\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小华</text><text x=\"210\" y=\"140\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">南</text></svg>",
            options: [{ text: "向南看", correct: true }, { text: "向北看", correct: false }]
          }
        ]
      },
      {
        num: "五",
        title: "图形多层摆放与遮挡观察。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M24-5-1",
            prompt: "把红本子放在桌上，黄本子放在红本子上面，蓝本子放在最上面。压在最底下的是哪一本？",
            title: "多层叠放最底层",
            tip: "从下到上是：红、黄、蓝。压在最底下的是红本子！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"蓝、黄、红本子依次叠放\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>蓝、黄、红本子依次叠放</title><rect x=\"110\" y=\"85\" width=\"200\" height=\"20\" fill=\"#fecaca\" stroke=\"#475569\"/><rect x=\"110\" y=\"65\" width=\"200\" height=\"20\" fill=\"#fef08a\" stroke=\"#475569\"/><rect x=\"110\" y=\"45\" width=\"200\" height=\"20\" fill=\"#bfdbfe\" stroke=\"#475569\"/><text x=\"210\" y=\"41\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">蓝本子</text><text x=\"335\" y=\"80\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">黄本子</text><text x=\"335\" y=\"100\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">红本子</text></svg>",
            options: [{ text: "红本子", correct: true }, { text: "蓝本子", correct: false }]
          },
          {
            qid: "M24-5-2",
            prompt: "如图，乐乐和小明坐在长桌的两侧面对面，月亮坐在乐乐的右手边。月亮在小明的哪一手边？",
            title: "环桌相对左右推理",
            tip: "乐乐和小明面对面，乐乐的右手边正对小明的左手边！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 170\" role=\"img\" aria-label=\"俯视长桌：乐乐面向下，小明面向上，月亮坐在乐乐右手边\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>俯视长桌：乐乐面向下，小明面向上，月亮坐在乐乐右手边</title><rect x=\"65\" y=\"58\" width=\"290\" height=\"55\" fill=\"white\" stroke=\"#475569\"/><text x=\"120\" y=\"34\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">月亮 ↓</text><text x=\"210\" y=\"34\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">乐乐 ↓</text><text x=\"210\" y=\"143\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小明 ↑</text></svg>",
            options: [{ text: "左手边", correct: true }, { text: "右手边", correct: false }]
          },
          {
            qid: "M24-5-3",
            prompt: "4只小鸟落在电线杆上，从左到右排成一排。飞走了第2只和第4只，电线上还剩几只鸟？",
            title: "序数剔除后剩余点数",
            tip: "飞走了2只，4 - 2 = 2 只小鸟。",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"排列图：🐦、🐦 ↗、🐦、🐦 ↗；箭头表示原来第2、第4只飞走\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>排列图：🐦、🐦 ↗、🐦、🐦 ↗；箭头表示原来第2、第4只飞走</title><text x=\"30\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐦</text><text x=\"150\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐦 ↗</text><text x=\"270\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐦</text><text x=\"390\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🐦 ↗</text><text x=\"210\" y=\"119\" text-anchor=\"middle\" font-size=\"14\" fill=\"#334155\">箭头表示原来第2、第4只飞走</text></svg>",
            options: [{ text: "2 只", correct: true }, { text: "3 只", correct: false }]
          }
        ]
      },
      {
        num: "六",
        title: "方位综合趣味推理题。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M24-6-1",
            prompt: "小红和小军并排坐着看电影。小红的左手挨着小军的右手，小军坐在小红的哪一边？",
            title: "并排坐左右辨析",
            tip: "小红的左边是小军，所以小军坐在小红的左边！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小军的右手 ↔ 小红的左手</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两人并排朝同一方向看电影</span></div>",
            options: [{ text: "左边", correct: true }, { text: "右边", correct: false }]
          },
          {
            qid: "M24-6-2",
            prompt: "小明面向东方，后面是西方，左边是北方。右边是什么方向？",
            title: "东西南北方位口诀",
            tip: "早晨起来面向东，前面是东后面西，左面是北右面南！右面是南！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 155\" role=\"img\" aria-label=\"面向东方，右手边待确定\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>面向东方，右手边待确定</title><text x=\"210\" y=\"26\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">北</text><text x=\"340\" y=\"80\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">东</text><text x=\"80\" y=\"80\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">西</text><text x=\"210\" y=\"135\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">？</text><line x1=\"210\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"62\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小明</text></svg>",
            options: [{ text: "南", correct: true }, { text: "北", correct: false }]
          },
          {
            qid: "M24-6-3",
            prompt: "只有3只小猴爬树：A在B上面，C在A上面。谁爬得最高？",
            title: "垂直链条极值",
            tip: "C > A > B，小猴C爬得最高！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"只有三只小猴，C在A上面，A在B上面\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>只有三只小猴，C在A上面，A在B上面</title><text x=\"210\" y=\"25\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小猴 C</text><text x=\"210\" y=\"70\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小猴 A</text><text x=\"210\" y=\"115\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小猴 B</text><line x1=\"125\" y1=\"15\" x2=\"125\" y2=\"128\" stroke=\"#475569\" stroke-width=\"2\" /></svg>",
            options: [{ text: "小猴 C", correct: true }, { text: "小猴 B", correct: false }]
          },
          {
            qid: "M24-6-4",
            prompt: "4个小朋友手拉手围成一个圆圈跳舞，每个人的两边各有1个伙伴。每个人身边相邻的伙伴一共有几个？",
            title: "围圈左右相邻",
            tip: "左手拉一个，右手拉一个，两边共有 2 个伙伴。",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"四个小朋友手拉手围成一圈\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>四个小朋友手拉手围成一圈</title><text x=\"210\" y=\"24\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小朋友</text><text x=\"110\" y=\"76\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小朋友</text><text x=\"310\" y=\"76\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小朋友</text><text x=\"210\" y=\"128\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">小朋友</text><line x1=\"190\" y1=\"28\" x2=\"130\" y2=\"59\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"230\" y1=\"28\" x2=\"290\" y2=\"59\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"130\" y1=\"87\" x2=\"190\" y2=\"115\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"290\" y1=\"87\" x2=\"230\" y2=\"115\" stroke=\"#475569\" stroke-width=\"2\" /></svg>",
            options: [{ text: "2 个", correct: true }, { text: "1 个", correct: false }]
          }
        ]
      },
      {
        num: "七",
        title: "生活情境与方位数学应用。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M24-7-1",
            prompt: "图书馆有 3 层，第 1 层有故事书 4 柜，第 2 层有科普书 3 柜，第 3 层有画册 2 柜。图书馆一共有多少柜书？",
            title: "三层总量连加",
            tip: "4 + 3 + 2 = 9 柜书。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">图书馆有 3 层</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">第 1 层有故事书 4 柜</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">第 2 层有科普书 3 柜</span></div>",
            options: [{ text: "9 柜", correct: true }, { text: "8 柜", correct: false }]
          },
          {
            qid: "M24-7-2",
            prompt: "小鸟从树上向下飞了 2 米捉虫，又向上飞了 5 米回窝。小鸟一共飞了多少米？",
            title: "上下飞行总距离",
            tip: "2 + 5 = 7 米。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小鸟从树上向下飞了 2 米捉虫</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又向上飞了 5 米回窝</span></div>",
            options: [{ text: "7 米", correct: true }, { text: "3 米", correct: false }]
          },
          {
            qid: "M24-7-3",
            prompt: "小猴在果园里，向左走采了 3 个桃子，向右走采了 4 个桃子，吃掉 2 个，还剩几个？",
            title: "方位采摘混合运算",
            tip: "3 + 4 - 2 = 5 个桃子。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小猴在果园里</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">向左走采了 3 个桃子</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">向右走采了 4 个桃子</span></div>",
            options: [{ text: "5 个", correct: true }, { text: "6 个", correct: false }]
          },
          {
            qid: "M24-7-4",
            prompt: "小明从第 1 棵树走到第 5 棵树，每相邻两棵树相距 2 米。他一共走了几个间隔？",
            title: "植树间隔段数",
            tip: "从第1棵到第5棵，一共有 5 - 1 = 4 个间隔！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"排列图：🌲、🌲、🌲、🌲、🌲；每相邻两棵相距2米\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>排列图：🌲、🌲、🌲、🌲、🌲；每相邻两棵相距2米</title><text x=\"30\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌲</text><text x=\"120\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌲</text><text x=\"210\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌲</text><text x=\"300\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌲</text><text x=\"390\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌲</text><text x=\"210\" y=\"119\" text-anchor=\"middle\" font-size=\"14\" fill=\"#334155\">每相邻两棵相距2米</text></svg>",
            options: [{ text: "4 个间隔", correct: true }, { text: "5 个间隔", correct: false }]
          }
        ]
      },
      {
        "num": "八",
        "title": "综合小挑战：选择正确答案。",
        "score": 12,
        "type": "choice",
        "tip": "独立作答，交卷后统一判分。",
        "items": [
          {
            "qid": "M24-8-1",
            "title": "1. 综合小挑战",
            "prompt": "小明住第2层，紧挨着的上一层是第几层？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明住第2层</span></div>",
            "options": [
              {
                "text": "第3层",
                "correct": true
              },
              {
                "text": "第1层",
                "correct": false
              }
            ],
            "tip": "2往上一层是3。"
          },
          {
            "qid": "M24-8-2",
            "title": "2. 综合小挑战",
            "prompt": "从1楼到4楼，需要爬几层楼梯？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从1楼到4楼</span></div>",
            "options": [
              {
                "text": "3 层",
                "correct": true
              },
              {
                "text": "4 层",
                "correct": false
              }
            ],
            "tip": "4−1=3。"
          },
          {
            "qid": "M24-8-3",
            "title": "3. 综合小挑战",
            "prompt": "面向北方时，右手边是什么方向？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">面向北方时</span></div>",
            "options": [
              {
                "text": "东",
                "correct": true
              },
              {
                "text": "西",
                "correct": false
              }
            ],
            "tip": "面向北，右边是东。"
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Paper 25: 【进阶】基数序数辨析与0的本质卷
  // =========================================================================
  {
    id: 25,
    unit: "第三单元：1~5的认识与加减",
    title: "第 25 套：【进阶】基数序数辨析与0的本质卷",
    tag: "思维培优",
    tagColor: "bg-purple-100 text-purple-800",
    desc: "“几个”与“第几个”严密区分、数字0的三重含义（没有/起点/温度界限）、分与合极限拆分。",
    timeLimit: 25,
    sections: [
      {
        num: "一",
        title: "0的运算与分与合连连看：快速口算连一连。",
        score: 12,
        type: "matching",
        tip: "任何数加0减0仍得原数，两数相同相减得0",
        pairs: [
          { target: "m25-1", label: "① 4 - 4 = ？ ➖", emoji: "0️⃣", answer: "ma25-1", char: "0", pinyin: "líng" },
          { target: "m25-2", label: "② 5 + 0 = ？ ➕", emoji: "5️⃣", answer: "ma25-2", char: "5", pinyin: "wǔ" },
          { target: "m25-3", label: "③ 0 + 3 = ？ ➕", emoji: "3️⃣", answer: "ma25-3", char: "3", pinyin: "sān" },
          { target: "m25-4", label: "④ 2 - 0 = ？ ➖", emoji: "2️⃣", answer: "ma25-4", char: "2", pinyin: "èr" },
          { target: "m25-5", label: "⑤ 5 可以分成 2 和 ？ 🧩", emoji: "🧩", answer: "ma25-5", char: "3", pinyin: "sān" },
          { target: "m25-6", label: "⑥ 1 和 3 可以合成 ？ 🤝", emoji: "🤝", answer: "ma25-6", char: "4", pinyin: "sì" }
        ],
        shuffledAnswers: ["ma25-2", "ma25-4", "ma25-1", "ma25-6", "ma25-3", "ma25-5"]
      },
      {
        num: "二",
        title: "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        score: 8,
        type: "choice",
        items: [
          {
            qid: "M25-2-1",
            prompt: "5 - 0 ○ 5 + 0，○里填什么符号？",
            title: "0的加减比大小",
            tip: "5-0=5，5+0=5，两边相等填 =。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">5 - 0 ○ 5 + 0</span></div>",
            options: [{ text: "=", correct: true }, { text: ">", correct: false }]
          },
          {
            qid: "M25-2-2",
            prompt: "3 - 3 ○ 0 + 1，○里填什么符号？",
            title: "得数与0比大小",
            tip: "3-3=0，0+1=1，0 < 1，填小于号。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">3 - 3 ○ 0 + 1</span></div>",
            options: [{ text: "<", correct: true }, { text: ">", correct: false }]
          },
          {
            qid: "M25-2-3",
            prompt: "比大小：4 - 2 ○ 5 - 2，○里填什么符号？",
            title: "减相同数比大小",
            tip: "被减数大的差更大：2 < 3，填 <。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">比大小：4 - 2 ○ 5 - 2</span></div>",
            options: [{ text: "<", correct: true }, { text: ">", correct: false }]
          },
          {
            qid: "M25-2-4",
            prompt: "在0、1、2、3、4、5中，最小的数 ○ 最大的数，○里填什么符号？",
            title: "0与自然数大小",
            tip: "0是最小的自然数，0 < 1。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在0、1、2、3、4、5中，最小的数 ○ 最大的数</span></div>",
            options: [{ text: "<", correct: true }, { text: ">", correct: false }]
          }
        ]
      },
      {
        num: "三",
        title: "基数与序数核心陷阱：严防张冠李戴。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: "M25-3-1",
            prompt: "【极高频陷阱】5 只小鸭排成一排游泳，只有第 3 只小鸭戴了红帽子。戴红帽子的小鸭一共有几只？",
            title: "第几只与几只的基序辨析",
            tip: "“第3只”表示位置序号，戴帽子的只有它这 1 只！千万不要写3只！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 110\" role=\"img\" aria-label=\"一排小鸭，只有一只戴红帽\" style=\"width:100%;max-width:420px\"><text x=\"50\" y=\"75\" text-anchor=\"middle\" font-size=\"32\">🐥</text><text x=\"130\" y=\"75\" text-anchor=\"middle\" font-size=\"32\">🐥</text><text x=\"210\" y=\"75\" text-anchor=\"middle\" font-size=\"32\">🐥</text><path d=\"M192 39h16l3 7h-22Z\" fill=\"#e11d48\"/><text x=\"290\" y=\"75\" text-anchor=\"middle\" font-size=\"32\">🐥</text><text x=\"370\" y=\"75\" text-anchor=\"middle\" font-size=\"32\">🐥</text></svg>",
            options: [{ text: "1 只", correct: true }, { text: "3 只", correct: false }, { text: "5 只", correct: false }]
          },
          {
            qid: "M25-3-2",
            prompt: "盘子里有 5 个苹果。乐乐吃了第 2 个，月亮吃了第 4 个。他们一共吃了几个苹果？",
            title: "点吃特定序号苹果",
            tip: "乐乐吃了1个，月亮吃了1个，一共吃了 1 + 1 = 2 个苹果！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">盘子里有 5 个苹果</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐吃了第 2 个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">月亮吃了第 4 个</span></div>",
            options: [{ text: "2 个", correct: true }, { text: "4 个", correct: false }, { text: "6 个", correct: false }]
          },
          {
            qid: "M25-3-3",
            prompt: "跑步比赛中，小明跑在第 1 名，小刚跑在第 3 名。他们之间有几名运动员？",
            title: "名次之间人数",
            tip: "第1和第3之间只有第 2 名这 1 个人！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">跑步比赛中</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明跑在第 1 名</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小刚跑在第 3 名</span></div>",
            options: [{ text: "1 人", correct: true }, { text: "2 人", correct: false }]
          },
          {
            qid: "M25-3-4",
            prompt: "分给乐乐和月亮，每人至少1朵，花不作区分。把 4 朵小红花分给 2 个小朋友，每人都要分到，有几种分法？",
            title: "4的有序分解",
            tip: "可以分成（1和3）、（2和2）、（3和1），共有 3 种分法！",
            visual: "<div class=\"flex flex-wrap justify-center gap-5 p-3 border border-slate-300 rounded-xl\"><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"待分配\"><span>🌸</span><span>🌸</span><span>🌸</span><span>🌸</span></div><div class=\"mt-2 text-sm text-slate-700\">待分配</div></div></div><div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">月亮</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">每人至少1朵</span></div>",
            options: [{ text: "3 种", correct: true }, { text: "2 种", correct: false }, { text: "4 种", correct: false }]
          }
        ]
      },
      {
        num: "四",
        title: "数字“0”的奥秘：做生活数学家。",
        score: 16,
        type: "choice",
        items: [
          {
            qid: "M25-4-1",
            prompt: "尺子上的刻度“0”表示什么意思？",
            title: "直尺0刻度含义",
            tip: "直尺上的0表示测量的【起点】！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">0</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">7</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">8</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">9</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text></svg>",
            options: [{ text: "表示起点", correct: true }, { text: "表示没有", correct: false }]
          },
          {
            qid: "M25-4-2",
            prompt: "树上原来有3只小鸟，它们全部飞走了。树上现在还有几只小鸟？用哪个数表示？",
            title: "0表示一个也没有",
            tip: "全飞走了，一个也没有，用数字 0 表示。3 - 3 = 0。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">原有3只小鸟</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">全部飞走</span></div>",
            options: [{ text: "0", correct: true }, { text: "1", correct: false }]
          },
          {
            qid: "M25-4-3",
            prompt: "温度计显示0°C，这个“0”表示什么？",
            title: "温度计0的含义",
            tip: "0°C是温度的一种读数，并不是没有温度。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">温度计显示0°C</span></div>",
            options: [{ text: "一个温度读数", correct: true }, { text: "没有温度", correct: false }]
          },
          {
            qid: "M25-4-4",
            prompt: "一个数减去它本身，得数是多少？例如：5 - 5 = ？",
            title: "相同数相减定律",
            tip: "任何数减去它本身，结果都是 0！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">5 - 5 = ？</span></div>",
            options: [{ text: "0", correct: true }, { text: "1", correct: false }]
          }
        ]
      },
      {
        num: "五",
        title: "5以内数的分解与组成综合思维。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M25-5-1",
            prompt: "5 可以分成 1 和几？几和 2 可以合成 5？",
            title: "5的分与合",
            tip: "5可以分成1和4；3和2可以合成5！",
            visual: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">0</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">7</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">8</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">9</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text></svg>",
            options: [{ text: "4 和 3", correct: true }, { text: "3 和 3", correct: false }]
          },
          {
            qid: "M25-5-2",
            prompt: "把5块同样的糖分成两堆，每堆至少1块，只交换两堆的位置算同一种分法。一共有几种分法？",
            title: "不同数量分组",
            tip: "5分成1和4，或者2和3（因为5是单数，不可能两堆一样多），共 2 组组合！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">把5块同样的糖分成两堆</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">每堆至少1块</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">只交换两堆的位置算同一种分法</span></div>",
            options: [{ text: "2 种", correct: true }, { text: "3 种", correct: false }]
          },
          {
            qid: "M25-5-3",
            prompt: "4 块巧克力分给乐乐和月亮，要使两人分得同样多，每人分几块？",
            title: "双数平均分",
            tip: "4可以分成2和2，每人分 2 块。",
            visual: "<div class=\"flex flex-wrap justify-center gap-5 p-3 border border-slate-300 rounded-xl\"><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"平均分给两人，尚未分配\"><span>🍫</span><span>🍫</span><span>🍫</span><span>🍫</span></div><div class=\"mt-2 text-sm text-slate-700\">平均分给两人，尚未分配</div></div></div>",
            options: [{ text: "2 块", correct: true }, { text: "1 块", correct: false }]
          }
        ]
      },
      {
        num: "六",
        title: "加减法逆向推导与符号填空。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M25-6-1",
            prompt: "5 - ( ) = 2，括号里应该填几？",
            title: "减法未知数",
            tip: "想：5可以分成2和3，所以 5 - 3 = 2！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">5 - ( ) = 2</span></div>",
            options: [{ text: "3", correct: true }, { text: "2", correct: false }]
          },
          {
            qid: "M25-6-2",
            prompt: "( ) + 3 = 5，括号里应该填几？",
            title: "加法未知数",
            tip: "想：2加3等于5，括号里填 2！",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">( ) + 3 = 5</span></div>",
            options: [{ text: "2", correct: true }, { text: "3", correct: false }]
          },
          {
            qid: "M25-6-3",
            prompt: "在 4 ○ 1 = 5 中，圆圈里应该填什么运算符号？",
            title: "运算符号填空",
            tip: "4加1等于5，填加号（+）。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在 4 ○ 1 = 5 中</span></div>",
            options: [{ text: "+", correct: true }, { text: "-", correct: false }]
          },
          {
            qid: "M25-6-4",
            prompt: "在 5 ○ 2 = 3 中，圆圈里应该填什么运算符号？",
            title: "减法符号填空",
            tip: "5减2等于3，填减号（-）。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在 5 ○ 2 = 3 中</span></div>",
            options: [{ text: "-", correct: true }, { text: "+", correct: false }]
          }
        ]
      },
      {
        num: "七",
        title: "生活情境加减综合应用。",
        score: 12,
        type: "choice",
        items: [
          {
            qid: "M25-7-1",
            prompt: "小猫钓鱼，上午钓了 3 条，下午钓了 0 条，小猫一共钓了多少条鱼？",
            title: "含0加法应用题",
            tip: "3 + 0 = 3 条鱼。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小猫钓鱼</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">上午钓了 3 条</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">下午钓了 0 条</span></div>",
            options: [{ text: "3 条", correct: true }, { text: "0 条", correct: false }]
          },
          {
            qid: "M25-7-2",
            prompt: "笼子里有 4 只鸽子，飞走了 4 只，笼子里还剩几只鸽子？",
            title: "含0减法应用题",
            tip: "4 - 4 = 0 只。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">笼子里有 4 只鸽子</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">飞走了 4 只</span></div>",
            options: [{ text: "0 只", correct: true }, { text: "4 只", correct: false }]
          },
          {
            qid: "M25-7-3",
            prompt: "妈妈买了 5 颗草莓，乐乐吃了 2 颗，月亮吃了 1 颗，还剩几颗草莓？",
            title: "连续吃减法应用",
            tip: "5 - 2 - 1 = 2 颗草莓。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">妈妈买了 5 颗草莓</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐吃了 2 颗</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">月亮吃了 1 颗</span></div>",
            options: [{ text: "2 颗", correct: true }, { text: "3 颗", correct: false }]
          },
          {
            qid: "M25-7-4",
            prompt: "盘子里有 2 个苹果，爸爸又买来 3 个，合起来一共有多少个？",
            title: "5以内基础加法",
            tip: "2 + 3 = 5 个苹果。",
            visual: "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">盘子里有 2 个苹果</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">爸爸又买来 3 个</span></div>",
            options: [{ text: "5 个", correct: true }, { text: "6 个", correct: false }]
          }
        ]
      },
      {
        "num": "八",
        "title": "综合小挑战：选择正确答案。",
        "score": 12,
        "type": "choice",
        "tip": "独立作答，交卷后统一判分。",
        "items": [
          {
            "qid": "M25-8-1",
            "title": "1. 综合小挑战",
            "prompt": "计算5−5，结果是多少？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">计算5−5</span></div>",
            "options": [
              {
                "text": "0",
                "correct": true
              },
              {
                "text": "5",
                "correct": false
              }
            ],
            "tip": "全部减去，剩0。"
          },
          {
            "qid": "M25-8-2",
            "title": "2. 综合小挑战",
            "prompt": "把4块糖平均分给2人，每人几块？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">把4块糖平均分给2人</span></div>",
            "options": [
              {
                "text": "2 块",
                "correct": true
              },
              {
                "text": "1 块",
                "correct": false
              },
              {
                "text": "3 块",
                "correct": false
              }
            ],
            "tip": "2+2=4，每人2块。"
          },
          {
            "qid": "M25-8-3",
            "title": "3. 综合小挑战",
            "prompt": "0和3相加是多少？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">0和3相加是多少</span></div>",
            "options": [
              {
                "text": "3",
                "correct": true
              },
              {
                "text": "0",
                "correct": false
              }
            ],
            "tip": "0+3=3。"
          }
        ]
      }
    ]
  }
];
