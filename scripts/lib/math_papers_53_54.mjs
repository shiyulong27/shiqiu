import { wrapVisual, svgFrame, arrow, brickWall } from './math_svg_helpers.mjs';

export const papers53to54 = [
  // =========================================================================
  // 第 53 套：有序数平面图形与最短路径一笔画卷
  // =========================================================================
  {
    id: 53,
    subject: 'math',
    unit: '名校专项：平面数图形与补砖展开',
    title: '第 53 套：一年级数学·有序数平面图形与最短路径一笔画卷',
    tag: '有序计数',
    tagColor: 'bg-sky-100 text-sky-800',
    desc: '专攻幼小衔接与名校高频几何计数！涵盖线段打枪法、多射线数角、分块三角形、田字正方形、偏心矩形、三叉路口判一笔画与方格最短路线数法。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '有序打枪法：数线段 & 数锐角',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M53-1-1',
            title: '1. 直线上的点：一共有几条线段',
            prompt: '观察一条直线上的 4 个点 <span class="font-mono font-bold">A、B、C、D</span>，任何两点之间都可以连成一段。仔细有序地数一数，下图中<strong>一共</strong>有多少条不同的线段？',
            tip: '【审题金钥匙】数线段要用“分类计数/打枪法”，千万别只数 3 条最短的！单小段有 AB、BC、CD 共 3 条；两小段拼成的有 AC、BD 共 2 条；三小段连成整条 AD 有 1 条。合起来一共：3 + 2 + 1 = 6（条）！',
            visual: wrapVisual(svgFrame(440, 120, '一条水平直线上依次标有A、B、C、D四个点', `
              <rect x="8" y="8" width="424" height="104" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">按顺序数一数：图上一共有几条线段？</text>
              <line x1="56" y1="68" x2="384" y2="68" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
              <circle cx="56" cy="68" r="6" fill="#e11d48" stroke="#ffffff" stroke-width="1.5"/>
              <circle cx="165" cy="68" r="6" fill="#e11d48" stroke="#ffffff" stroke-width="1.5"/>
              <circle cx="275" cy="68" r="6" fill="#e11d48" stroke="#ffffff" stroke-width="1.5"/>
              <circle cx="384" cy="68" r="6" fill="#e11d48" stroke="#ffffff" stroke-width="1.5"/>
              <text x="56" y="95" text-anchor="middle" font-size="14" font-weight="black" fill="#1e293b">A</text>
              <text x="165" y="95" text-anchor="middle" font-size="14" font-weight="black" fill="#1e293b">B</text>
              <text x="275" y="95" text-anchor="middle" font-size="14" font-weight="black" fill="#1e293b">C</text>
              <text x="384" y="95" text-anchor="middle" font-size="14" font-weight="black" fill="#1e293b">D</text>
            `), 'sky'),
            options: [
              { text: '6 条', correct: true },
              { text: '3 条', correct: false },
              { text: '5 条', correct: false }
            ]
          },
          {
            qid: 'M53-1-2',
            title: '2. 同顶点 5 条射线：一共有几个角',
            prompt: '从同一个顶点 <span class="font-mono font-bold">O</span> 向外画出了 5 条直直的射线，每相邻两条射线组成 1 个基本小角，大大小小拼在一起。这幅图中<strong>一共</strong>有几个角？',
            tip: '【审题金钥匙】数角的方法和数线段一模一样！5 条射线之间有 4 个紧挨着的基本小角。按大小有序数：1 个小角组成的有 4 个，2 个拼成的有 3 个，3 个拼成的有 2 个，4 个拼成的大角有 1 个。总数 = 4 + 3 + 2 + 1 = 10（个）！',
            visual: wrapVisual(svgFrame(440, 185, '从顶点O出发的5条射线组成多个大小不同的锐角', `
              <rect x="8" y="8" width="424" height="169" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">从顶点 O 发出 5 条射线：一共能数出几个角？</text>
              <line x1="126" y1="154" x2="296" y2="154" stroke="#0f172a" stroke-width="2.6" stroke-linecap="round"/>
              <line x1="126" y1="154" x2="288" y2="101" stroke="#0f172a" stroke-width="2.6" stroke-linecap="round"/>
              <line x1="126" y1="154" x2="264" y2="54" stroke="#0f172a" stroke-width="2.6" stroke-linecap="round"/>
              <line x1="126" y1="154" x2="226" y2="38" stroke="#0f172a" stroke-width="2.6" stroke-linecap="round"/>
              <line x1="126" y1="154" x2="178" y2="44" stroke="#0f172a" stroke-width="2.6" stroke-linecap="round"/>
              <path d="M164,154 A38,38 0 0,0 138,118" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="3,2"/>
              <circle cx="126" cy="154" r="5" fill="#e11d48"/>
              <text x="108" y="162" text-anchor="middle" font-size="15" font-weight="black" fill="#be123c">O</text>
              <text x="310" y="158" font-size="12.5" font-weight="bold" fill="#334155">①</text>
              <text x="298" y="102" font-size="12.5" font-weight="bold" fill="#334155">②</text>
              <text x="274" y="55" font-size="12.5" font-weight="bold" fill="#334155">③</text>
              <text x="236" y="42" font-size="12.5" font-weight="bold" fill="#334155">④</text>
              <text x="187" y="48" font-size="12.5" font-weight="bold" fill="#334155">⑤</text>
            `), 'amber'),
            options: [
              { text: '10 个', correct: true },
              { text: '4 个', correct: false },
              { text: '8 个', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '分块三角形大闯关：单层剖分 vs 双层横切',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M53-2-1',
            title: '1. 从尖角分底边：一共几个三角形',
            prompt: '看下面这个被分成 3 份的大三角形：最上面的尖角向下连出两条直线，把底边分成了 3 小段。认真按“单个、两块拼、三块拼”数清楚，图里<strong>一共</strong>有几个三角形？',
            tip: '【审题金钥匙】三角形只要盯着底边分成几份就行了！单个小三角形有 3 个；两块合拼的三角形有 2 个；三块合拼的大三角形有 1 个。一共：3 + 2 + 1 = 6（个）！',
            visual: wrapVisual(svgFrame(440, 155, '大三角形从顶角拉出两条斜线分成左中右三份', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#ecfdf5" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">合拼的也要算进去：图中有几个三角形？</text>
              <polygon points="220,42 100,132 340,132" fill="#d1fae5" stroke="#047857" stroke-width="2.6" stroke-linejoin="round"/>
              <line x1="220" y1="42" x2="180" y2="132" stroke="#047857" stroke-width="2.4"/>
              <line x1="220" y1="42" x2="260" y2="132" stroke="#047857" stroke-width="2.4"/>
              <circle cx="220" cy="42" r="4.5" fill="#e11d48"/>
            `), 'emerald'),
            options: [
              { text: '6 个', correct: true },
              { text: '3 个', correct: false },
              { text: '5 个', correct: false }
            ]
          },
          {
            qid: 'M53-2-2',
            title: '2. 宝塔双层切一刀：别把梯形当三角形',
            prompt: '下面这个大三角形中间先画了一竖分成左右两半，接着正中间又横着切了一刀，分成上、下两层。仔细辨认形状，图中<strong>一共</strong>能找出几个三角形？',
            tip: '【审题金钥匙】超级易错题！下面那一层的左半边和右半边有 4 条边（是梯形，不是三角形！），只能连着上面的顶角一起数：上半层有“左、右、整个上半层”共 3 个；从尖角拉到底的大三角形又有“大左、大右、整个大三角形”共 3 个。合计 3 + 3 = 6（个）！',
            visual: wrapVisual(svgFrame(440, 165, '大三角形中间一竖加腰间一横，分为上下两层', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#9f1239">小心下层的形状哦！一共有几个三角形？</text>
              <polygon points="220,40 106,142 334,142" fill="#ffe4e6" stroke="#be123c" stroke-width="2.6" stroke-linejoin="round"/>
              <line x1="220" y1="40" x2="220" y2="142" stroke="#be123c" stroke-width="2.4"/>
              <line x1="163" y1="91" x2="277" y2="91" stroke="#be123c" stroke-width="2.4"/>
            `), 'rose'),
            options: [
              { text: '6 个', correct: true },
              { text: '5 个', correct: false },
              { text: '4 个', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '“田”字格数正方形 & 横排长方形有序计数',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M53-3-1',
            title: '1. “田”字网格：大大小小共有几个正方形',
            prompt: '观察下面这个方方正正的“田”字形格子（每个小格四条边都一样长）。除了单独的 4 个小方格，四个合起来的也是正方形，图里<strong>一共</strong>有几个正方形？',
            tip: '【审题金钥匙】数正方形一定要“按格数分类”！由 1 个小格组成的小正方形有 4 个（左上、右上、左下、右下）；由 4 个小格拼成的大正方形外框有 1 个。加起来一共：4 + 1 = 5（个）！',
            visual: wrapVisual(svgFrame(440, 160, '2乘2方正的田字格', `
              <rect x="8" y="8" width="424" height="144" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#3730a3">每个小格四边相等：大大小小共有几个正方形？</text>
              <rect x="168" y="40" width="104" height="104" fill="#ffffff" stroke="#312e81" stroke-width="2.8"/>
              <line x1="220" y1="40" x2="220" y2="144" stroke="#4f46e5" stroke-width="2.2"/>
              <line x1="168" y1="92" x2="272" y2="92" stroke="#4f46e5" stroke-width="2.2"/>
            `), 'indigo'),
            options: [
              { text: '5 个', correct: true },
              { text: '4 个', correct: false },
              { text: '6 个', correct: false }
            ]
          },
          {
            qid: 'M53-3-2',
            title: '2. 并排 3 格长条：一共拼出几个长方形',
            prompt: '看下面横着并排拼在一起的 3 块扁扁小长方形（每个都是长长的、肯定不是正方形）。除了单个小格，相邻几个并在一起也能拼成新长方形，图中<strong>一共</strong>有几个长方形？',
            tip: '【审题金钥匙】按长度一节一节数：单格长方形有 3 个（左、中、右）；两格拼在一起的长方形有 2 个（左+中、中+右）；三格全拼在一起的大长方形有 1 个。总数：3 + 2 + 1 = 6（个）！',
            visual: wrapVisual(svgFrame(440, 145, '横向并排3个宽度大于高度的扁长方形格子', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.6"/>
              <text x="220" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#6b21a8">每块小格都是“扁扁的长方形”：一共几个长方形？</text>
              <rect x="85" y="48" width="270" height="68" fill="#ffffff" stroke="#6b21a8" stroke-width="2.8"/>
              <line x1="175" y1="48" x2="175" y2="116" stroke="#7e22ce" stroke-width="2.2"/>
              <line x1="265" y1="48" x2="265" y2="116" stroke="#7e22ce" stroke-width="2.2"/>
            `), 'purple'),
            options: [
              { text: '6 个', correct: true },
              { text: '3 个', correct: false },
              { text: '5 个', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '一笔画奇点秘密：三叉路口判能否一笔画成',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M53-4-1',
            title: '1. 口字、日字、田字：哪一个不能一笔画',
            prompt: '一笔画大秘密：如果一个点正好汇合了 3 条路（我们把这种点标成<strong>红色圆点“三叉路口”</strong>），一张图里红点最多只能有 2 个！请观察 ①“口”字、②“日”字、③“田”字，哪一个<strong>不能</strong>笔尖不离纸且不重复地一笔画完？',
            tip: '【审题金钥匙】数出图上的“三叉路口”红点：①“口”字 0 个红点（全走通，能一笔画）；②“日”字左右中间共 2 个红点（1个做起点、1个做终点，正好能一笔画）；③“田”字上下左右共有 4 个红点（超过了 2 个，走到一半就会卡死，不能一笔画）！',
            visual: wrapVisual(svgFrame(460, 155, '对比三个图：①口字0个红点，②日字左右2个红点，③田字四边4个红点', `
              <rect x="8" y="8" width="136" height="139" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="1.6"/>
              <text x="76" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">① “口”字</text>
              <rect x="40" y="42" width="72" height="72" fill="#ffffff" stroke="#1e293b" stroke-width="2.6"/>
              <text x="76" y="134" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#475569">有 0 个三叉路口</text>

              <rect x="162" y="8" width="136" height="139" rx="12" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="230" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">② “日”字</text>
              <rect x="196" y="40" width="68" height="76" fill="#ffffff" stroke="#1e293b" stroke-width="2.6"/>
              <line x1="196" y1="78" x2="264" y2="78" stroke="#1e293b" stroke-width="2.6"/>
              <circle cx="196" cy="78" r="5.5" fill="#e11d48" stroke="#ffffff" stroke-width="1.2"/>
              <circle cx="264" cy="78" r="5.5" fill="#e11d48" stroke="#ffffff" stroke-width="1.2"/>
              <text x="230" y="134" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#475569">有 2 个三叉路口</text>

              <rect x="316" y="8" width="136" height="139" rx="12" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="384" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#9f1239">③ “田”字</text>
              <rect x="348" y="42" width="72" height="72" fill="#ffffff" stroke="#1e293b" stroke-width="2.6"/>
              <line x1="384" y1="42" x2="384" y2="114" stroke="#1e293b" stroke-width="2.6"/>
              <line x1="348" y1="78" x2="420" y2="78" stroke="#1e293b" stroke-width="2.6"/>
              <circle cx="384" cy="42" r="5.5" fill="#e11d48" stroke="#ffffff" stroke-width="1.2"/>
              <circle cx="384" cy="114" r="5.5" fill="#e11d48" stroke="#ffffff" stroke-width="1.2"/>
              <circle cx="348" cy="78" r="5.5" fill="#e11d48" stroke="#ffffff" stroke-width="1.2"/>
              <circle cx="420" cy="78" r="5.5" fill="#e11d48" stroke="#ffffff" stroke-width="1.2"/>
              <text x="384" y="134" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">有 4 个三叉路口</text>
            `), 'sky'),
            options: [
              { text: '③ “田”字（有 4 个三叉路口）', correct: true },
              { text: '① “口”字（没有三叉路口）', correct: false },
              { text: '② “日”字（有 2 个三叉路口）', correct: false }
            ]
          },
          {
            qid: 'M53-4-2',
            title: '2. 找对起点才能走通：“日”字一笔画从哪出发',
            prompt: '想一笔不重复地画出下面这个“日”字，四个外角标了蓝圆点（连 2 条线），左右正中间标了星星 ⭐（各连 3 条线）。小画家<strong>必须从哪种点出发</strong>才能画成功？',
            tip: '【审题金钥匙】牢记口诀：“单数点进，单数点出”！⭐ 处汇合了 3 条路（3 是单数），每次经过它都会用掉 2 条路“一进一出”，多出来的第 1 条路只能用来当“起点”或“终点”！如果从蓝圆点出发，半路经过 2 个 ⭐ 后就会有路走不回来！',
            visual: wrapVisual(svgFrame(440, 165, '大日字框图，四角画蓝色圆点，左右中间交点画金色五角星', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#fefce8" stroke="#fde047" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#854d0e">想一笔不重复画完“日”字，必须从哪儿落笔？</text>
              <rect x="155" y="42" width="130" height="98" fill="#ffffff" stroke="#334155" stroke-width="3"/>
              <line x1="155" y1="91" x2="285" y2="91" stroke="#334155" stroke-width="3"/>
              <circle cx="155" cy="42" r="7" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5"/>
              <circle cx="285" cy="42" r="7" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5"/>
              <circle cx="155" cy="140" r="7" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5"/>
              <circle cx="285" cy="140" r="7" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5"/>
              <text x="155" y="97" text-anchor="middle" font-size="20">⭐</text>
              <text x="285" y="97" text-anchor="middle" font-size="20">⭐</text>
              <text x="76" y="48" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1d4ed8">蓝点（2条路）</text>
              <text x="76" y="96" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b45309">⭐（3条路）</text>
              <text x="364" y="96" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b45309">⭐（3条路）</text>
            `), 'amber'),
            options: [
              { text: '必须从标 ⭐ 的三叉路口出发', correct: true },
              { text: '必须从角落的蓝色圆点出发', correct: false },
              { text: '不管从哪个点出发都能画完', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '网格标数法：从左上 A 到右下 B 最短路径条数',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M53-5-1',
            title: '1. 排排两格小迷宫：几条不同最短路线',
            prompt: '蚂蚁小吉从左上角的起点 <strong>A</strong> 出发，想到右下角的终点 <strong>B</strong> 拿糖果。规定每次只能沿着格子线<strong>向右 →</strong> 或 <strong>向下 ↓</strong> 走（不绕远路）。小吉一共有多少条不同的路线？',
            tip: '【审题金钥匙】按什么时候“往下拐”来有顺序地数：① 一开始就向下走，再向右两格（↓→→）；② 先向右 1 格到中间再向下，接着向右（→↓→）；③ 一直向右到底再向下（→→↓）。正好一共 3 条路！',
            visual: wrapVisual(svgFrame(440, 155, '1行2列方格图，左上角标起点A，右下角标终点B，只许向右或向下走', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#166534">规则：只能沿着线【向右 →】或【向下 ↓】走到 B</text>
              <rect x="135" y="48" width="170" height="72" fill="#ffffff" stroke="#15803d" stroke-width="2.6"/>
              <line x1="220" y1="48" x2="220" y2="120" stroke="#15803d" stroke-width="2.2"/>
              <circle cx="135" cy="48" r="11" fill="#e11d48"/>
              <text x="135" y="52.5" text-anchor="middle" font-size="12" font-weight="black" fill="#ffffff">A</text>
              <text x="108" y="53" text-anchor="end" font-size="12" font-weight="bold" fill="#be123c">起点</text>
              <circle cx="305" cy="120" r="11" fill="#16a34a"/>
              <text x="305" y="124.5" text-anchor="middle" font-size="12" font-weight="black" fill="#ffffff">B</text>
              <text x="330" y="125" text-anchor="start" font-size="12" font-weight="bold" fill="#15803d">终点</text>
              ${arrow(155, 42, 198, 42, '#0284c7', 2.2)}
              ${arrow(128, 66, 128, 102, '#0284c7', 2.2)}
            `), 'emerald'),
            options: [
              { text: '3 条', correct: true },
              { text: '2 条', correct: false },
              { text: '4 条', correct: false }
            ]
          },
          {
            qid: 'M53-5-2',
            title: '2. 经典“田”字路网：A 到 B 共有几条最短路径',
            prompt: '难度升级！小熊从“田”字格公园的左上角 <strong>A</strong> 出发去右下角 <strong>B</strong>，同样规定只能沿着路<strong>向右 →</strong> 或 <strong>向下 ↓</strong> 走。用标数小魔法试一试，一共能走出几条不同路线？',
            tip: '【审题金钥匙】超好用的“路标加法魔法”：最上面一行和最左边一列都只有 1 种走法（写上 1）；中间交叉路口只能从上面(1)或左边(1)走过来，所以标上 1 + 1 = 2；同理下中路口是 1 + 2 = 3，右中路口是 2 + 1 = 3；最后终点 B = 3 + 3 = 6（条）！',
            visual: wrapVisual(svgFrame(440, 175, '2行2列田字格路网，左上A右下B，标出只能向右或向下', `
              <rect x="8" y="8" width="424" height="159" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#3730a3">规则：每次只能【向右 →】或【向下 ↓】，不能走回头路</text>
              <rect x="145" y="44" width="150" height="104" fill="#ffffff" stroke="#312e81" stroke-width="2.6"/>
              <line x1="220" y1="44" x2="220" y2="148" stroke="#4f46e5" stroke-width="2.2"/>
              <line x1="145" y1="96" x2="295" y2="96" stroke="#4f46e5" stroke-width="2.2"/>
              <circle cx="145" cy="44" r="11" fill="#e11d48"/>
              <text x="145" y="48.5" text-anchor="middle" font-size="12" font-weight="black" fill="#ffffff">A</text>
              <text x="122" y="48" text-anchor="end" font-size="12" font-weight="bold" fill="#be123c">起点</text>
              <circle cx="295" cy="148" r="11" fill="#16a34a"/>
              <text x="295" y="152.5" text-anchor="middle" font-size="12" font-weight="black" fill="#ffffff">B</text>
              <text x="318" y="152" text-anchor="start" font-size="12" font-weight="bold" fill="#15803d">终点</text>
              ${arrow(168, 37, 206, 37, '#0284c7', 2.2)}
              ${arrow(136, 62, 136, 90, '#0284c7', 2.2)}
            `), 'indigo'),
            options: [
              { text: '6 条', correct: true },
              { text: '4 条', correct: false },
              { text: '8 条', correct: false }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 第 54 套：墙面补砖块、剪纸展开与正方体对面卷
  // =========================================================================
  {
    id: 54,
    subject: 'math',
    unit: '名校专项：平面数图形与补砖展开',
    title: '第 54 套：一年级数学·墙面补砖块、剪纸展开与正方体对面卷',
    tag: '补砖展开',
    tagColor: 'bg-indigo-100 text-indigo-800',
    desc: '一年级高频丢分大题专练！含错缝砌砖墙补砖块、6块宽墙半块凑整法、4×4方格补缺、Z型异形拼图匹配、对折剪纸展开洞数、1-4-1与2-3-1正方体展开图找对面、镜像对称与半格拼整。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '名校必考：错缝墙面一共缺了多少块砖',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M54-1-1',
            title: '1. 一年级期中期末霸榜题：5 块宽砖墙补缺',
            prompt: '看下面砌好的一面红砖墙（每一行都正好铺满 <strong>5 块砖</strong>，最左边和最右边的半块砖合起来算 1 整块）。中间破了一个大洞，请问<strong>一共缺少了多少块砖</strong>？',
            tip: '【审题金钥匙】补砖块超级大招“隔行对齐数缺口”（或者“每行5块减去剩下的”）：从上往下看：第1行完整 5 块（缺 0）；第2行左右两半合 1 块加上中间完整的 2 块共剩 3 块，缺 5 - 3 = 2（块）；第3行剩 2 块，缺 3 块；第4行剩 3 块，缺 2 块；第5行完整（缺 0）。合计：2 + 3 + 2 = 7（块）！',
            visual: wrapVisual(svgFrame(440, 165, '5行5块宽错缝砖墙，中间第2至4行破了个大洞', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#fff7ed" stroke="#fdba74" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#9a3412">每整行正好有 5 块砖（两头半块凑 1 块）：墙洞共缺几块？</text>
              ${brickWall(100, 34, 48, 22, 5, 5, { 1: [2, 3], 2: [1, 2, 3], 3: [2, 3] })}
            `), 'amber'),
            options: [
              { text: '7 块', correct: true },
              { text: '6 块', correct: false },
              { text: '8 块', correct: false }
            ]
          },
          {
            qid: 'M54-1-2',
            title: '2. 进阶加宽砖墙：6 块宽错缝大洞补砖',
            prompt: '看下面这面更宽的砖墙：顶行完整数出来一共铺了 <strong>6 块砖</strong>，而且上面和下面隔一层接缝是对齐的。仔细逐行算清，墙洞里<strong>一共少了多少块砖</strong>？',
            tip: '【审题金钥匙】拿直尺或者顺着竖缝往下“画虚线”补砖最准确！从上到下逐行统计空位：第1行 0 块；第2行缺 2 块；第3行缺 3 块；第4行缺 3 块；第5行缺 2 块；第6行 0 块。把每行缺的加起来：2 + 3 + 3 + 2 = 10（块）！',
            visual: wrapVisual(svgFrame(440, 175, '6行6块宽错缝砖墙，中间第2至5行缺失', `
              <rect x="8" y="8" width="424" height="159" rx="14" fill="#fff7ed" stroke="#fdba74" stroke-width="1.6"/>
              <text x="220" y="24" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#9a3412">每行正好铺 6 块大砖：空白墙洞处一共缺了多少块？</text>
              ${brickWall(76, 33, 48, 21, 6, 6, { 1: [2, 3], 2: [1, 2, 3], 3: [2, 3, 4], 4: [2, 3] })}
            `), 'amber'),
            options: [
              { text: '10 块', correct: true },
              { text: '9 块', correct: false },
              { text: '11 块', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '方格地砖补缺 & 异形拼块不翻转严丝合缝',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M54-2-1',
            title: '1. 4×4 方格地砖：空白处补几块小正方形',
            prompt: '工人叔叔铺一片 <span class="font-mono font-bold">4 × 4</span> 的正方形彩色地砖，灰色空位是还没有铺上的地方。请问<strong>还要再铺多少块</strong>小正方形地砖才能把整片铺满？',
            tip: '【审题金钥匙】按“从上到下每一行”有序去数灰色小格子，绝对不会漏也不会重：第1行缺 0 块，第2行缺 2 块，第3行缺 3 块，第4行缺 1 块。合起来是：2 + 3 + 1 = 6（块）！',
            visual: wrapVisual(svgFrame(440, 165, '4乘4方格地砖板，彩色已铺好，灰色空白处共缺6小格', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0369a1">灰色虚线方格是没有铺的地方：还要补几块正方形砖？</text>
              ${(() => {
                const grid = [[1,1,1,1],[1,0,0,1],[1,0,0,0],[1,1,0,1]];
                let out = '';
                for (let r = 0; r < 4; r++) {
                  for (let c = 0; c < 4; c++) {
                    const x = 160 + c * 28, y = 38 + r * 28;
                    out += grid[r][c]
                      ? `<rect x="${x}" y="${y}" width="28" height="28" fill="#38bdf8" stroke="#0369a1" stroke-width="1.6"/>`
                      : `<rect x="${x}" y="${y}" width="28" height="28" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="3,2"/>`;
                  }
                }
                return out + `<rect x="160" y="38" width="112" height="112" fill="none" stroke="#0c4a6e" stroke-width="2.6"/>`;
              })()}
            `), 'sky'),
            options: [
              { text: '6 块', correct: true },
              { text: '5 块', correct: false },
              { text: '7 块', correct: false }
            ]
          },
          {
            qid: 'M54-2-2',
            title: '2. 找对形状平移放进缺口：谁能严丝合缝',
            prompt: '左边是一块少了 4 个小方格的正方形拼图板。规定右边三块拼图<strong>不能旋转也不能翻面，只能直接平移放进去</strong>，哪一块能刚好填满左边的白色缺口？',
            tip: '【审题金钥匙】顺着缺口走一圈：最上面是中间 1 格，往下走 1 格后往右拐 1 格，再往下拐 1 格——整体是个“左上向右下方拐弯”的小楼梯（Z 型）。对照右图，只有 ① 号拼块方向完全吻合，② 号左右反了，③ 号多出一整竖条！',
            visual: wrapVisual(svgFrame(460, 155, '左边3x3板缺Z型4格，右边对比①②③三块备选拼图', `
              <rect x="8" y="8" width="166" height="139" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.6"/>
              <text x="91" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">白色为待填缺口</text>
              ${(() => {
                const filled = [[1,0,1],[1,0,0],[1,1,0]];
                let out = '';
                for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
                  const x = 46 + c * 30, y = 36 + r * 30;
                  out += filled[r][c]
                    ? `<rect x="${x}" y="${y}" width="30" height="30" fill="#6366f1" stroke="#312e81" stroke-width="1.5"/>`
                    : `<rect x="${x}" y="${y}" width="30" height="30" fill="#ffffff" stroke="#e11d48" stroke-width="1.6" stroke-dasharray="3,2"/>`;
                }
                return out + `<rect x="46" y="36" width="90" height="90" fill="none" stroke="#1e293b" stroke-width="2.4"/>`;
              })()}
              ${(() => {
                const drawPiece = (ox, oy, cells, color, stroke, title) => {
                  let s = `<rect x="${ox - 12}" y="8" width="84" height="139" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.4"/>`;
                  s += `<text x="${ox + 30}" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">${title}</text>`;
                  for (const [r, c] of cells) {
                    s += `<rect x="${ox + 6 + c * 24}" y="${oy + r * 24}" width="24" height="24" fill="${color}" stroke="${stroke}" stroke-width="1.6"/>`;
                  }
                  return s;
                };
                return drawPiece(196, 46, [[0,0],[1,0],[1,1],[2,1]], '#f59e0b', '#92400e', '① 号')
                     + drawPiece(290, 46, [[0,1],[1,1],[1,0],[2,0]], '#10b981', '#065f46', '② 号')
                     + drawPiece(384, 46, [[0,0],[1,0],[2,0],[2,1]], '#ec4899', '#9d174d', '③ 号');
              })()}
            `), 'indigo'),
            options: [
              { text: '① 号拼块', correct: true },
              { text: '② 号拼块', correct: false },
              { text: '③ 号拼块', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '对称剪纸展开：折 1 次 vs 连折 2 次剪中心角',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M54-3-1',
            title: '1. 对折 1 次沿折痕剪半圆：展开后什么样',
            prompt: '把一张正方形彩纸左右<strong>对折 1 次</strong>，紧贴着中间那条竖折痕用剪刀剪出一个半圆缺口。把纸全部打开摊平，整张纸会变成下面哪一幅图？',
            tip: '【审题金钥匙】半圆紧贴着中间的“对称折痕”剪下，纸打开时左右两半圆会刚好在正中间拼成一个完整的圆洞！② 号图是贴着外面边缘剪才会出现两个缺口；③ 号图是上下各剪一个半圆才有的样子。',
            visual: wrapVisual(svgFrame(460, 150, '左图显示对折后沿折痕剪半圆，右边对比①②③三个展开选项', `
              <rect x="8" y="8" width="144" height="134" rx="12" fill="#fdf2f8" stroke="#f9a8d4" stroke-width="1.5"/>
              <text x="80" y="25" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#9d174d">沿红线折痕剪半圆</text>
              <rect x="38" y="42" width="42" height="78" fill="#fce7f3" stroke="#db2777" stroke-width="1.3" stroke-dasharray="3,2"/>
              <rect x="80" y="42" width="42" height="78" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
              <line x1="80" y1="36" x2="80" y2="128" stroke="#e11d48" stroke-width="2.2" stroke-dasharray="4,2"/>
              <path d="M80,66 A15,15 0 0,1 80,96 Z" fill="#ffffff" stroke="#be185d" stroke-width="1.8"/>
              <text x="80" y="136" text-anchor="middle" font-size="11" font-weight="bold" fill="#be185d">✂️ 剪半圆</text>
              ${arrow(155, 76, 174, 76, '#475569', 2.4)}

              <rect x="180" y="8" width="84" height="134" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.4"/>
              <text x="222" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">① 号</text>
              <rect x="190" y="42" width="64" height="68" fill="#fbcfe8" stroke="#be185d" stroke-width="1.8"/>
              <circle cx="222" cy="76" r="13" fill="#ffffff" stroke="#be185d" stroke-width="1.6"/>

              <rect x="274" y="8" width="84" height="134" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.4"/>
              <text x="316" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">② 号</text>
              <rect x="284" y="42" width="64" height="68" fill="#fbcfe8" stroke="#be185d" stroke-width="1.8"/>
              <path d="M284,64 A12,12 0 0,1 284,88 Z" fill="#ffffff" stroke="#be185d" stroke-width="1.5"/>
              <path d="M348,64 A12,12 0 0,0 348,88 Z" fill="#ffffff" stroke="#be185d" stroke-width="1.5"/>

              <rect x="368" y="8" width="84" height="134" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.4"/>
              <text x="410" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">③ 号</text>
              <rect x="378" y="42" width="64" height="68" fill="#fbcfe8" stroke="#be185d" stroke-width="1.8"/>
              <circle cx="410" cy="60" r="10" fill="#ffffff" stroke="#be185d" stroke-width="1.5"/>
              <circle cx="410" cy="92" r="10" fill="#ffffff" stroke="#be185d" stroke-width="1.5"/>
            `), 'rose'),
            options: [
              { text: '① 号图：正中间出现 1 个整圆洞', correct: true },
              { text: '② 号图：左右边沿各缺 1 个半圆', correct: false },
              { text: '③ 号图：纸中上下共 2 个整圆洞', correct: false }
            ]
          },
          {
            qid: 'M54-3-2',
            title: '2. 连续对折 2 次剪“中心小角”：共有几个洞',
            prompt: '拿一张正方形纸<strong>先左右对折，再上下对折</strong>，折成只有四分之一大小的小正方形。然后用剪刀斜着把最中心的那个折角剪掉一小块。全部展开后，整张大纸中间有几个洞？',
            tip: '【审题金钥匙】超经典易错陷阱！很多人一看到折了 2 次（共有 4 层纸），就猜展开有 4 个洞！其实因为剪掉的是整张大纸正中心“4 层碰在一起的那个角”，摊开后 4 个小缺口紧紧拼在一起，只合成“正中间的 1 个大菱形洞”！（只有在小方块正肚子里面戳洞，才会变成 4 个小洞哦！）',
            visual: wrapVisual(svgFrame(460, 145, '大纸先后左右、上下对折成小方块，斜剪掉中心交汇角', `
              <rect x="8" y="8" width="444" height="129" rx="14" fill="#fefce8" stroke="#fde047" stroke-width="1.6"/>
              <rect x="26" y="34" width="76" height="76" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8"/>
              <line x1="64" y1="30" x2="64" y2="114" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4,2"/>
              <text x="64" y="127" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">① 左右对折</text>
              ${arrow(108, 72, 134, 72, '#ca8a04', 2.4)}

              <rect x="142" y="34" width="42" height="76" fill="#fde047" stroke="#ca8a04" stroke-width="1.8"/>
              <line x1="138" y1="72" x2="188" y2="72" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4,2"/>
              <text x="163" y="127" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">② 上下对折</text>
              ${arrow(194, 72, 220, 72, '#ca8a04', 2.4)}

              <polygon points="232,38 290,38 290,96 254,96 232,74" fill="#facc15" stroke="#a16207" stroke-width="2"/>
              <polygon points="232,74 254,96 232,96" fill="#ffffff" stroke="#e11d48" stroke-width="1.6" stroke-dasharray="3,2"/>
              <text x="262" y="127" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">③ ✂️剪中心角</text>
              ${arrow(300, 72, 328, 72, '#ca8a04', 2.4)}

              <rect x="338" y="30" width="96" height="86" rx="8" fill="#ffffff" stroke="#ca8a04" stroke-width="1.6" stroke-dasharray="4,3"/>
              <text x="386" y="78" text-anchor="middle" font-size="18" font-weight="black" fill="#be123c">展开后 ？</text>
              <text x="386" y="102" text-anchor="middle" font-size="11" font-weight="bold" fill="#475569">正中间有几个洞</text>
            `), 'amber'),
            options: [
              { text: '1 个大洞（在纸正中间）', correct: true },
              { text: '4 个分开的小洞', correct: false },
              { text: '2 个洞', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '正方体展开图找对面（“目”字隔一格 & “Z”字两头）',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M54-4-1',
            title: '1. 标准“1-4-1”正方体展开图：数字 1 对面是几',
            prompt: '下面是一张正方体纸盒的“1-4-1”型展开图，六个面写着 1 到 6。如果把它折成一个封闭的正方体盒子，数字 <strong>1</strong> 相对的面是几号？',
            tip: '【审题金钥匙】记住正方体展开图“隔一格必相对（目字规律）”！同一横排的 1、2、3、4 卷成一圈，1 隔着 2 正好在 3 的对面（1 ↔ 3，2 ↔ 4）；上下盖子 5 和 6 相对（5 ↔ 6）。',
            visual: wrapVisual(svgFrame(440, 165, '1-4-1正方体展开图，中排1、2、3、4，上5下6', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#3730a3">折成正方体后，数字 1 的正对面是几？</text>
              ${(() => {
                const cells = [
                  [0, 1, '5', '#dbeafe'],
                  [1, 0, '1', '#fef08a'], [1, 1, '2', '#e0f2fe'], [1, 2, '3', '#e0f2fe'], [1, 3, '4', '#e0f2fe'],
                  [2, 1, '6', '#dbeafe']
                ];
                return cells.map(([r, c, txt, fill]) => {
                  const x = 148 + c * 36, y = 38 + r * 36;
                  return `<rect x="${x}" y="${y}" width="36" height="36" fill="${fill}" stroke="#1e293b" stroke-width="2"/>
                          <text x="${x + 18}" y="${y + 24}" text-anchor="middle" font-size="16" font-weight="black" fill="#1e293b">${txt}</text>`;
                }).join('');
              })()}
            `), 'indigo'),
            options: [
              { text: '3', correct: true },
              { text: '2', correct: false },
              { text: '4', correct: false }
            ]
          },
          {
            qid: 'M54-4-2',
            title: '2. 进阶阶梯“2-3-1”展开图：字母 A 的对面是谁',
            prompt: '观察这张阶梯状（“2-3-1”型）正方体展开图。把它折成一个完整正方体后，与黄色格子里的字母 <strong>A</strong> 相对的面是哪一个字母？',
            tip: '【审题金钥匙】阶梯图也能用“Z 字两头找对面”！先看中间直排：C 隔着 D 在 E 的对面（C ↔ E）；再从 A 开始画个竖着拉长的“Z”字：A → B → C → D，Z 字的两头 A 和 D 正好隔了两条折边面对面（A ↔ D）！最后剩 B ↔ F！',
            visual: wrapVisual(svgFrame(440, 165, '2-3-1型阶梯正方体展开图：上排AB，中排CDE，下排F', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#6b21a8">折成正方体后，与 A 相对的面是哪个字母？</text>
              ${(() => {
                const cells = [
                  [0, 0, 'A', '#fef08a'], [0, 1, 'B', '#f3e8ff'],
                  [1, 1, 'C', '#f3e8ff'], [1, 2, 'D', '#f3e8ff'], [1, 3, 'E', '#f3e8ff'],
                  [2, 2, 'F', '#f3e8ff']
                ];
                return cells.map(([r, c, txt, fill]) => {
                  const x = 148 + c * 36, y = 38 + r * 36;
                  return `<rect x="${x}" y="${y}" width="36" height="36" fill="${fill}" stroke="#1e293b" stroke-width="2"/>
                          <text x="${x + 18}" y="${y + 24}" text-anchor="middle" font-size="16" font-weight="black" fill="#1e293b">${txt}</text>`;
                }).join('');
              })()}
            `), 'purple'),
            options: [
              { text: 'D', correct: true },
              { text: 'C', correct: false },
              { text: 'F', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '照镜子左右轴对称 & 半格凑整面积启蒙',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M54-5-1',
            title: '1. 照镜子画对称：哪一个是正确的右半边',
            prompt: '虚线是一面竖直立着的“对称镜子”，左边画好了小屋的一半（蓝屋顶贴着镜子坡下去，绿方格贴在镜子边，黄圆点放在离镜子较远的左边角落）。下面哪一幅是它在镜子另一边<strong>正确</strong>的对称图形？',
            tip: '【审题金钥匙】“轴对称/照镜子”记住两个口诀：① 上下高度不能倒过来；② 离镜子近的在对称那一边也要近，离镜子远的在对称那一边也要远！绿方格贴着镜子，黄圆点应该跑到最右下角才对，所以只有 ① 号正确！',
            visual: wrapVisual(svgFrame(460, 155, '左图对称轴左边有贴轴半三角和方块、外角黄圆，右边对比①②③选项', `
              <rect x="8" y="8" width="128" height="139" rx="12" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.5"/>
              <text x="72" y="25" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0369a1">原左半边 + 镜子</text>
              <line x1="102" y1="34" x2="102" y2="128" stroke="#e11d48" stroke-width="2" stroke-dasharray="4,3"/>
              <polygon points="102,42 102,70 50,70" fill="#38bdf8" stroke="#0284c7" stroke-width="1.6"/>
              <rect x="84" y="70" width="18" height="22" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>
              <circle cx="52" cy="108" r="9" fill="#facc15" stroke="#b45309" stroke-width="1.5"/>
              <text x="102" y="140" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#be123c">对称轴</text>

              <rect x="148" y="8" width="96" height="139" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.4"/>
              <text x="196" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">① 号右半边</text>
              <line x1="168" y1="34" x2="168" y2="128" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="4,3"/>
              <polygon points="168,42 168,70 220,70" fill="#38bdf8" stroke="#0284c7" stroke-width="1.6"/>
              <rect x="168" y="70" width="18" height="22" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>
              <circle cx="218" cy="108" r="9" fill="#facc15" stroke="#b45309" stroke-width="1.5"/>

              <rect x="254" y="8" width="96" height="139" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.4"/>
              <text x="302" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">② 号右半边</text>
              <line x1="274" y1="34" x2="274" y2="128" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="4,3"/>
              <polygon points="326,42 326,70 274,70" fill="#38bdf8" stroke="#0284c7" stroke-width="1.6"/>
              <rect x="308" y="70" width="18" height="22" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>
              <circle cx="284" cy="108" r="9" fill="#facc15" stroke="#b45309" stroke-width="1.5"/>

              <rect x="360" y="8" width="92" height="139" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.4"/>
              <text x="406" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">③ 号右半边</text>
              <line x1="380" y1="34" x2="380" y2="128" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="4,3"/>
              <polygon points="380,120 380,92 432,92" fill="#38bdf8" stroke="#0284c7" stroke-width="1.6"/>
              <rect x="380" y="70" width="18" height="22" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>
              <circle cx="430" cy="54" r="9" fill="#facc15" stroke="#b45309" stroke-width="1.5"/>
            `), 'sky'),
            options: [
              { text: '① 号（形状对称、近镜同近、远镜同远）', correct: true },
              { text: '② 号（只是直接平移没翻对称）', correct: false },
              { text: '③ 号（屋顶跑到底下上下颠倒了）', correct: false }
            ]
          },
          {
            qid: 'M54-5-2',
            title: '2. 方格纸数“小梯形”面积：两个半格凑成 1 整格',
            prompt: '方格纸上涂出一个橘色“屋顶小梯形”。先数出正中间饱满的小正方形，再把左右两角斜着切开的两个“半格三角形”合起来凑成 1 整格。请问涂色部分一共占了<strong>多少个整格</strong>？',
            tip: '【审题金钥匙】面积启蒙黄金法则“先数整格，再拼半格”！正中间有 3 个满满的整格；左右两边各斜切了一半（各占半个方格），两个半格拼在一起正好凑成 1 个整格！所以一共占了：3 + 1 = 4（个整格）！',
            visual: wrapVisual(svgFrame(440, 165, '3列4行方格纸里涂着占3整格加2半格的小火箭阴影', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#ecfdf5" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#065f46">两个半格合拼算 1 整格：涂色部分一共占几整格？</text>
              ${(() => {
                // Grid 4 cols x 4 rows, x=164..276, y=38..150, cell=28
                // Fill row1 c1,c2 as 2 half triangles? Wait: col1 r0-half=(192,66)->(220,38)->(220,66), col2 r0-half=(220,38)->(248,66)->(220,66)!
                // Wait col1 r0 box is x=192..220, y=38..66; diagonal (192,66)-(220,38) gives lower-right half!
                // Col2 r0 box is x=220..248, y=38..66; diagonal (220,38)-(248,66) gives lower-left half!
                // Below that: col1 & col2 wait only 1 col wide in stem or 2 whole + 1? Let's put 3 WHOLE cells directly under or beside:
                // Row 1 c1,c2 (2 whole = 2) + Row 2 c1 (1 whole) => wait asymmetric rocket looks weird if 2 wide then 1 wide.
                // What about 1 col wide? No, 2 halves = 2 half-cells on sides, or Row1 (c1,c2 = 2 whole) + Row2 (left-half on c0? no).
                // Symmetric 3 whole + 2 halves:
                // Col 0..3 (4 cols), Row 0..2 (3 rows, cell=32, width 128, height 96 at x=156, y=42):
                // Middle Col1 & Col2 wait 3 whole + 2 halves = 4 total!
                // House shape across Row1 (c0,c1,c2 = 3 whole boxes? Width 3!)
                // Width 3 cols x 3 rows (cell=32, x=172..268, y=42..138):
                // Center box (r=1,c=1) + top-right? Wait: Row1: [whole(r1,c0), whole(r1,c1), whole(r1,c2)] = 3 whole!
                // And above (r=0,c=0) has diagonal half? Wait better symmetric boat / trapezoid!
                // Trapezoid on bottom row (r=2, cols 0,1,2,3 -> center 3 or row of 3 whole + 2 halves on left and right ends!):
                // Look at a sleek symmetric boat/trapezoid in Row 1 (cols 0,1,2,3):
                // c=0: right-triangle half-cell (top-right to bottom-left diagonal -> lower-right half!)
                // c=1: FULL square
                // c=2: FULL square
                // c=3: FULL? That's 2 whole + 2 halves = 3. To make 3 whole + 2 halves = 4:
                // Use 5 cols wide (c=0..4, cell=28, width=140 at x=150, y=54, 3 rows):
                // Row 1: c=0 lower-right half, c=1 FULL, c=2 FULL, c=3 FULL, c=4 lower-left half -> symmetric trapezoid with 3 FULL + 2 HALVES = 4!
                // Check: boat hull upside down = roof/house trapezoid!
                // Row 1: c0 bottom-right half (points (178,82),(178,110),(150,110)), c1 FULL, c2 FULL, c3 FULL, c4 bottom-left half!
                let out = '';
                const ox = 150, oy = 46, c = 28;
                out += `<polygon points="${ox+c},${oy+c} ${ox+c},${oy+2*c} ${ox},${oy+2*c}" fill="#fb923c"/>`;
                out += `<rect x="${ox+c}" y="${oy+c}" width="${3*c}" height="${c}" fill="#fb923c"/>`;
                out += `<polygon points="${ox+4*c},${oy+c} ${ox+5*c},${oy+2*c} ${ox+4*c},${oy+2*c}" fill="#fb923c"/>`;
                // Grid lines OVER fill so halves and wholes are 100% crisp!
                for (let r = 0; r <= 3; r++) {
                  out += `<line x1="${ox}" y1="${oy + r * c}" x2="${ox + 5 * c}" y2="${oy + r * c}" stroke="#065f46" stroke-width="1.5"/>`;
                }
                for (let col = 0; col <= 5; col++) {
                  out += `<line x1="${ox + col * c}" y1="${oy}" x2="${ox + col * c}" y2="${oy + 3 * c}" stroke="#065f46" stroke-width="1.5"/>`;
                }
                out += `<rect x="${ox}" y="${oy}" width="${5*c}" height="${3*c}" fill="none" stroke="#064e3b" stroke-width="2.2"/>`;
                return out;
              })()}
              <text x="220" y="146" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#9a3412">上面屋顶小梯形共占几个整格？</text>
            `), 'emerald'),
            options: [
              { text: '4 个整格', correct: true },
              { text: '5 个整格', correct: false },
              { text: '3 个整格', correct: false }
            ]
          }
        ]
      }
    ]
  }
];
