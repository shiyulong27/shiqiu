import { wrapVisual, svgFrame, arrow, parityDots } from './math_svg_helpers.mjs';

export const papers57to58 = [
  // =========================================================================
  // 第 57 套：单双数点阵、开关灯渡河与奇偶策略卷
  // =========================================================================
  {
    id: 57,
    subject: 'math',
    unit: '名校专项：奇偶单双与逻辑游戏',
    title: '第 57 套：一年级数学·单双数点阵、开关灯渡河与奇偶策略卷',
    tag: '奇偶单双',
    tagColor: 'bg-emerald-100 text-emerald-800',
    desc: '直击幼小衔接与小学奥数“奇偶性（单双数）”大关！涵括点阵两两配对判单双、连加减奇偶速算、拉开关灯、三杯同翻两人传球、划船往返及连续单数拼正方形阵。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '两两配对点阵法：单双数加减奇偶不变律',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M57-1-1',
            title: '1. 手拉手凑对魔法：单数 + 单数 = ？',
            prompt: '观察下面的点子配对图：左边 7 个蓝点两两一圈，最后剩下 1 个红点“落单”；右边 5 个绿点两两一圈，也剩下 1 个红点“落单”。把左边和右边合在一起，原本各自落单的红点刚好可以手拉手凑成一对，所以<strong>单数 + 单数</strong>的结果一定是？',
            tip: '【审题金钥匙】奇偶性核心图解！单数就是“两两找朋友总会多出 1 个落单的数”。当两个单数相加时，多出来的那两个落单点正好在中间手拉手配成新的一对，再也没人落单啦！所以“单数 + 单数 = 双数”（比如 7 + 5 = 12，也是双数）！',
            visual: wrapVisual(svgFrame(440, 145, '左边7个点3对剩1红点，右边5个点2对剩1红点', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#166534">两两配对看“落单点”：两个落单的红点合起来变成啥？</text>
              <text x="108" y="54" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">7（单数：多出 1 个）</text>
              ${parityDots(40, 68, 7, '#3b82f6')}
              <text x="218" y="82" text-anchor="middle" font-size="20" font-weight="black" fill="#334155">+</text>
              <text x="330" y="54" text-anchor="middle" font-size="13" font-weight="bold" fill="#047857">5（单数：也多 1 个）</text>
              ${parityDots(276, 68, 5, '#10b981')}
              <path d="M164,90 Q228,124 362,90" fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="4,3"/>
              <text x="260" y="122" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">两个孤单小红点刚好手拉手配成 1 对！</text>
            `), 'emerald'),
            options: [
              { text: '双数', correct: true },
              { text: '单数', correct: false },
              { text: '可能是单数，也可能是双数', correct: false }
            ]
          },
          {
            qid: 'M57-1-2',
            title: '2. 不用算出具体得数，火眼金睛判单双',
            prompt: '不直接算出最后等于几，请你用单双数规律秒判算式 <span class="font-mono font-bold">9 + 7 - 5</span> 的最终得数是<strong>单数</strong>还是<strong>双数</strong>？',
            tip: '【审题金钥匙】奇偶性神速口诀：两步看落单点！① 先看 9 + 7（单 + 单 = 双，落单的两个凑成对）；② 再看结果减 5（双 - 单 = 单，拆掉一对还剩 1 个孤单的）！也可以检验得数：9 + 7 - 5 = 11，11 的个位是 1，确实是单数！',
            visual: wrapVisual(svgFrame(440, 128, '数字牌 9(单数) 加 7(单数) 减 5(单数) 等于 问号', `
              <rect x="8" y="8" width="424" height="112" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">奇偶速判（不求几）：三个单数这样算，得数是？</text>
              <rect x="40" y="48" width="66" height="48" rx="10" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.8"/>
              <text x="73" y="72" text-anchor="middle" font-size="20" font-weight="black" fill="#be123c">9</text>
              <text x="73" y="89" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#9f1239">单数</text>
              <text x="124" y="79" text-anchor="middle" font-size="22" font-weight="black" fill="#334155">+</text>
              <rect x="142" y="48" width="66" height="48" rx="10" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.8"/>
              <text x="175" y="72" text-anchor="middle" font-size="20" font-weight="black" fill="#be123c">7</text>
              <text x="175" y="89" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#9f1239">单数</text>
              <text x="226" y="79" text-anchor="middle" font-size="22" font-weight="black" fill="#334155">-</text>
              <rect x="244" y="48" width="66" height="48" rx="10" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.8"/>
              <text x="277" y="72" text-anchor="middle" font-size="20" font-weight="black" fill="#be123c">5</text>
              <text x="277" y="89" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#9f1239">单数</text>
              <text x="328" y="79" text-anchor="middle" font-size="22" font-weight="black" fill="#334155">=</text>
              <rect x="346" y="48" width="62" height="48" rx="10" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
              <text x="377" y="78" text-anchor="middle" font-size="15" font-weight="black" fill="#854d0e">？</text>
            `), 'sky'),
            options: [
              { text: '单数', correct: true },
              { text: '双数', correct: false },
              { text: '0', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '拉开关亮灭问题 & 翻转杯子奇偶不变量',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M57-2-1',
            title: '1. 淘气猫拉开关：原本亮着的台灯连拉 15 下',
            prompt: '夜晚房间里的台灯本来是<strong>亮着</strong>的。淘气小猫伸爪连续去拉了 <strong>15 下</strong>开关绳（拉 1 下灭，再拉 1 下又亮……）。请问小猫拉完 15 下后，这盏台灯是亮着还是熄灭了？',
            tip: '【审题金钥匙】列前几下找规律大法：最初是“亮”➔ 拉 1 下“灭”（单数下）➔ 拉 2 下“亮”（双数下）➔ 拉 3 下“灭”（单数下）……规律出来啦！拉“单数”下就灭，拉“双数”下就亮！15 是单数，所以台灯一定是熄灭（不亮）！',
            visual: wrapVisual(svgFrame(440, 145, '明亮的台灯和拉线开关，提问连续拉15下后的状态', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#92400e">原本状态：【亮着】💡  ➔  连续拉开关 15 下后：？</text>
              <polygon points="84,48 136,48 152,82 68,82" fill="#fde047" stroke="#ca8a04" stroke-width="2" stroke-linejoin="round"/>
              <line x1="110" y1="82" x2="110" y2="114" stroke="#78350f" stroke-width="4"/>
              <rect x="86" y="114" width="48" height="10" rx="4" fill="#78350f"/>
              <line x1="138" y1="82" x2="138" y2="104" stroke="#b45309" stroke-width="1.8" stroke-dasharray="2,2"/>
              <circle cx="138" cy="107" r="4" fill="#e11d48"/>
              <rect x="190" y="44" width="222" height="78" rx="10" fill="#ffffff" stroke="#fde68a" stroke-width="1.5"/>
              <text x="301" y="66" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#475569">最初（0下）：亮 💡</text>
              <text x="301" y="88" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#64748b">拉 1 下：灭  ·  拉 2 下：亮</text>
              <text x="301" y="110" text-anchor="middle" font-size="13" font-weight="black" fill="#be123c">连续拉满 15 下：亮 还是 灭？</text>
            `), 'amber'),
            options: [
              { text: '熄灭（不亮）', correct: true },
              { text: '亮着', correct: false },
              { text: '一会儿亮一会儿灭猜不到', correct: false }
            ]
          },
          {
            qid: 'M57-2-2',
            title: '2. 3 只杯子“每次同翻 2 只”：能全部翻扣过来吗',
            prompt: '桌子上摆了 <strong>3 只杯口朝上</strong>的玻璃杯。规定每次必须<strong>同时翻转其中恰好 2 只杯子</strong>（不能只翻 1 只，也不能翻 3 只）。照这样翻下去，能把 3 只杯子<strong>全部</strong>变成杯口朝下吗？',
            tip: '【审题金钥匙】超妙的奇偶不变量！一开始朝下的杯子有 0 只（0 是双数）。① 如果翻两个朝上的，朝下数量加 2；② 如果翻一上一下，朝下数量不变；③ 如果翻两个朝下的，朝下数量减 2！每次只会有 0 只或 2 只杯口朝下（永远是双数个），永远不可能变成 3 只（单数）朝下！',
            visual: wrapVisual(svgFrame(440, 150, '3只全部杯口朝上的水杯，下方规则框写每次同时翻转恰好2只杯子', `
              <rect x="8" y="8" width="424" height="134" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#9f1239">原本 3 只杯口全部朝上，每次必须同时翻 2 只，能全朝下吗？</text>
              ${[126, 220, 314].map((cx, i) => `
                <path d="M${cx-18},48 L${cx+18},48 L${cx+13},94 L${cx-13},94 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                <ellipse cx="${cx}" cy="48" rx="18" ry="5" fill="#bae6fd" stroke="#0284c7" stroke-width="1.6"/>
                <text x="${cx}" y="78" text-anchor="middle" font-size="13" font-weight="black" fill="#0369a1">${i+1}</text>
              `).join('')}
              <rect x="74" y="106" width="292" height="24" rx="8" fill="#ffffff" stroke="#e11d48" stroke-width="1.4"/>
              <text x="220" y="122" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">规则：每次必须挑出 2 只同时翻转（倒过来或正过来）</text>
            `), 'rose'),
            options: [
              { text: '无论翻多少次都做不到', correct: true },
              { text: '最少翻 3 次就能全部朝下', correct: false },
              { text: '翻 2 次就能全部朝下', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '小船往返渡河 & 面对面传球位置推理',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M57-3-1',
            title: '1. 河岸摆渡来回划：第 12 次停在哪一岸',
            prompt: '小木船停在<strong>北岸</strong>准备渡河。第 1 次划到南岸，第 2 次划回北岸，第 3 次再去南岸……小船就这样不停地往返划行。请问连续划了 <strong>12 次</strong>后，小船停在哪一岸？',
            tip: '【审题金钥匙】列出前几步发现周期规律：单数次（第 1、3、5……次）都会到达对面的南岸；双数次（第 2、4、6……次）正好往返回到出发的北岸！12 是一个双数，所以第 12 次肯定稳稳停在出发的北岸！',
            visual: wrapVisual(svgFrame(440, 155, '一条蓝色小河分北岸与南岸，小船第1次向南划，第2次回北岸', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#ecfdf5" stroke="#86efac" stroke-width="1.6"/>
              <rect x="18" y="16" width="404" height="34" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="1.4"/>
              <text x="220" y="38" text-anchor="middle" font-size="13.5" font-weight="black" fill="#166534">北岸（小船起点）</text>
              <rect x="18" y="54" width="404" height="50" fill="#bae6fd"/>
              <path d="M134,76 L190,76 L180,92 L144,92 Z" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
              <text x="162" y="87" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">小船</text>
              ${arrow(235, 58, 235, 98, '#0369a1', 2.4)}
              <text x="266" y="82" font-size="11.5" font-weight="bold" fill="#0369a1">第1次</text>
              ${arrow(318, 98, 318, 58, '#e11d48', 2.4)}
              <text x="352" y="82" font-size="11.5" font-weight="bold" fill="#be123c">第2次</text>
              <rect x="18" y="108" width="404" height="32" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.4"/>
              <text x="220" y="129" text-anchor="middle" font-size="13.5" font-weight="black" fill="#92400e">南岸（划完第 12 次后小船在哪岸？）</text>
            `), 'emerald'),
            options: [
              { text: '北岸', correct: true },
              { text: '南岸', correct: false },
              { text: '正停在河中间', correct: false }
            ]
          },
          {
            qid: 'M57-3-2',
            title: '2. 两人你来我往传皮球：传了 19 次在谁手里',
            prompt: '乐乐和月亮面对面站着传皮球。最开始球拿在<strong>乐乐</strong>手里：第 1 次乐乐传给月亮，第 2 次月亮传回乐乐……他们像这样一传一回，总共传了 <strong>19 次</strong>，现在皮球在谁手里？',
            tip: '【审题金钥匙】传球就是“单双来回交替”！起始球在乐乐手里（0 次）：传第 1 次后到月亮（单数在月亮），传第 2 次后回乐乐（双数回乐乐）！19 是单数，所以传完第 19 次，皮球一定稳稳落到月亮手里！',
            visual: wrapVisual(svgFrame(440, 145, '左乐乐拿红皮球，右月亮接球，中间虚线箭标往返传球19次', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#3730a3">开始球在乐乐手里：你来我往传了 19 次，最后在谁那？</text>
              <rect x="64" y="54" width="76" height="46" rx="22" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
              <text x="102" y="82" text-anchor="middle" font-size="14" font-weight="black" fill="#92400e">👦 乐乐</text>
              <text x="102" y="118" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b45309">（第0次起点）</text>
              <rect x="300" y="54" width="76" height="46" rx="22" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
              <text x="338" y="82" text-anchor="middle" font-size="14" font-weight="black" fill="#9d174d">👧 月亮</text>
              <circle cx="152" cy="64" r="9.5" fill="#f97316" stroke="#9a3412" stroke-width="1.5"/>
              ${arrow(166, 64, 290, 64, '#16a34a', 2.4)}
              <text x="228" y="57" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#15803d">第 1 次 ➔</text>
              ${arrow(290, 92, 166, 92, '#4f46e5', 2.4)}
              <text x="228" y="109" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#3730a3">← 第 2 次</text>
            `), 'indigo'),
            options: [
              { text: '月亮手里', correct: true },
              { text: '乐乐手里', correct: false },
              { text: '两个人手里都没球', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '奇偶不可能任务判别（分碗糖果 & 找朋友配对）',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M57-4-1',
            title: '1. 10 颗糖分装 3 个碗，每碗都要单数颗行不行',
            prompt: '妈妈抓来 <strong>10 颗糖果</strong>，想全部装进桌上的 <strong>3 个小碗</strong>里，并且特别要求：<strong>每个碗里的糖果颗数都必须是单数</strong>！不用一颗颗试啦，开动脑筋想一想，能办到吗？',
            tip: '【审题金钥匙】奇偶判定大法显神通！前两个碗都是单数，单数 + 单数 = 双数；再加第三个碗的单数：双数 + 单数 = 单数！也就是说，3 个单数加起来永远只能是个单数，绝对加不出双数 10！根本做不到！（如果装 4 个单数碗倒是可以，比如 1+3+3+3=10）',
            visual: wrapVisual(svgFrame(440, 145, '10颗糖要放进3个小碗，要求每碗都只能装单数颗', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#92400e">把总共【10 颗糖】分装进【3 个碗】，每碗必须装单数颗</text>
              ${[105, 220, 335].map((cx, i) => `
                <path d="M${cx-42},62 Q${cx},112 ${cx+42},62 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                <text x="${cx}" y="98" text-anchor="middle" font-size="11.5" font-weight="black" fill="#854d0e">第${i+1}碗(单数)</text>
              `).join('')}
              <text x="162" y="84" text-anchor="middle" font-size="20" font-weight="black" fill="#92400e">+</text>
              <text x="278" y="84" text-anchor="middle" font-size="20" font-weight="black" fill="#92400e">+</text>
              <text x="220" y="126" text-anchor="middle" font-size="13" font-weight="bold" fill="#be123c">单数 + 单数 + 单数 能凑出 10（双数）吗？</text>
            `), 'amber'),
            options: [
              { text: '不能做到（3 个单数相加结果还是单数）', correct: true },
              { text: '能做到（可以装成 3 + 3 + 4）', correct: false },
              { text: '能做到（比如 1 颗、3 颗、6 颗）', correct: false }
            ]
          },
          {
            qid: 'M57-4-2',
            title: '2. 找朋友两两牵手：13 人又转来 2 人会落单吗',
            prompt: '体育课排队时原有 <strong>13 名</strong>小朋友，今天班里又新转来 <strong>2 名</strong>同学。老师让大家两两牵手找一位搭档做游戏，所有人都能刚好配完、没有一人落单吗？',
            tip: '【审题金钥匙】先把现在总人数算出来：13 + 2 = 15（人），也可以用单双规律判断：单数(13) + 双数(2) = 单数！既然总人数是个单数，两两配对到最后，必定会有 1 位小朋友找不到搭档而落单！',
            visual: wrapVisual(svgFrame(440, 140, '原有13位同学加上新转来2位同学，问两两牵手配对结果', `
              <rect x="8" y="8" width="424" height="124" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">两两牵手找好朋友（2 人一组），会刚好配对完成吗？</text>
              <rect x="46" y="48" width="150" height="58" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
              <text x="121" y="75" text-anchor="middle" font-size="15" font-weight="black" fill="#0c4a6e">原有 13 人</text>
              <text x="121" y="95" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#e11d48">（单数）</text>
              <text x="220" y="84" text-anchor="middle" font-size="22" font-weight="black" fill="#334155">+</text>
              <rect x="244" y="48" width="150" height="58" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
              <text x="319" y="75" text-anchor="middle" font-size="15" font-weight="black" fill="#0c4a6e">新来 2 人</text>
              <text x="319" y="95" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#16a34a">（双数）</text>
            `), 'sky'),
            options: [
              { text: '不能，还会多出 1 人落单', correct: true },
              { text: '能，刚好每人都有搭档', correct: false },
              { text: '不能，会多出 2 人落单', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '翻牌统计奇偶 & 连续单数拼出“正方形阵”',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M57-5-1',
            title: '1. 1~10 号数字牌：把双数全翻过去剩几张',
            prompt: '桌上从 <strong>1 到 10</strong> 摆了 10 张数字卡片，开始全部都是数字朝上。乐乐把其中所有的“<strong>双数卡片</strong>”全部翻成背面朝下，现在桌上还剩几张卡片数字朝上？',
            tip: '【审题金钥匙】1 到 10 这 10 个连续自然数里，单数和双数刚好“你一个、我一个”对半分！其中双数是 2、4、6、8、10（翻掉 5 张）；留下来继续数字朝上的是单数 1、3、5、7、9，一共还有 5 张！',
            visual: wrapVisual(svgFrame(452, 130, '数字1到10排成一行的10张卡片，要求翻掉所有双数卡片', `
              <rect x="6" y="8" width="440" height="114" rx="14" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.6"/>
              <text x="226" y="29" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#6b21a8">共 10 张数字卡片：把“双数”全扣过去，剩几张数字朝上？</text>
              ${Array.from({ length: 10 }, (_, i) => {
                const x = 22 + i * 41;
                return `<rect x="${x}" y="46" width="34" height="46" rx="6" fill="#ffffff" stroke="#7e22ce" stroke-width="1.8"/>
                        <text x="${x + 17}" y="76" text-anchor="middle" font-size="16" font-weight="black" fill="#4c1d95">${i + 1}</text>`;
              }).join('')}
              <text x="226" y="110" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">数一数 1~10 里面有几个单数没有翻？</text>
            `), 'purple'),
            options: [
              { text: '5 张', correct: true },
              { text: '4 张', correct: false },
              { text: '6 张', correct: false }
            ]
          },
          {
            qid: 'M57-5-2',
            title: '2. 名校美妙数列：连续单数拼方阵 1+3+5+7 = ？',
            prompt: '大数学家高斯小时候玩过的点阵积木：① 第 1 幅有 1 个点；② 往外围铺一圈 L 型加 3 个点凑成 4 个（2×2 方阵）；③ 再加 5 个点凑成 9 个（3×3 方阵）。那么第 4 幅 <strong>1 + 3 + 5 + 7</strong> 凑成 4 排 4 列的方阵，一共有几个点？',
            tip: '【审题金钥匙】超级美的“连续单数方阵定律”！每多加一个大单数，正好在边上铺出新的一条拐弯 L 边，把方阵放大一圈！1 = 1；1 + 3 = 4；1 + 3 + 5 = 9；到了第 4 幅，就在 9 个的基础上再加外围那 7 个（9 + 7 = 16），也就是 4 + 4 + 4 + 4 = 16（个）！',
            visual: wrapVisual(svgFrame(456, 155, '依次增大的点阵方阵：1等于1，1+3等于4，1+3+5等于9，问1+3+5+7等于几', `
              <rect x="6" y="8" width="444" height="139" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <rect x="16" y="20" width="96" height="114" rx="10" fill="#ffffff" stroke="#c7d2fe" stroke-width="1.4"/>
              <circle cx="64" cy="64" r="7" fill="#3b82f6"/>
              <text x="64" y="122" text-anchor="middle" font-size="12" font-weight="black" fill="#1e293b">1 = 1</text>

              <rect x="122" y="20" width="100" height="114" rx="10" fill="#ffffff" stroke="#c7d2fe" stroke-width="1.4"/>
              <circle cx="158" cy="52" r="6" fill="#3b82f6"/>
              <circle cx="186" cy="52" r="6" fill="#f59e0b"/><circle cx="158" cy="78" r="6" fill="#f59e0b"/><circle cx="186" cy="78" r="6" fill="#f59e0b"/>
              <text x="172" y="122" text-anchor="middle" font-size="12" font-weight="black" fill="#1e293b">1+3 = 4</text>

              <rect x="232" y="20" width="106" height="114" rx="10" fill="#ffffff" stroke="#c7d2fe" stroke-width="1.4"/>
              ${(() => {
                let s = '';
                for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
                  const col = (r === 0 && c === 0) ? '#3b82f6' : (r < 2 && c < 2) ? '#f59e0b' : '#10b981';
                  s += `<circle cx="${261 + c * 24}" cy="${42 + r * 24}" r="5.5" fill="${col}"/>`;
                }
                return s;
              })()}
              <text x="285" y="122" text-anchor="middle" font-size="12" font-weight="black" fill="#1e293b">1+3+5 = 9</text>

              <rect x="348" y="20" width="94" height="114" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.8"/>
              <text x="395" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">4 排 × 4 列</text>
              <text x="395" y="88" text-anchor="middle" font-size="22" font-weight="black" fill="#be123c">？</text>
              <text x="395" y="122" text-anchor="middle" font-size="11.5" font-weight="black" fill="#b45309">1+3+5+7 = ？</text>
            `), 'indigo'),
            options: [
              { text: '16', correct: true },
              { text: '15', correct: false },
              { text: '14', correct: false }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 第 58 套：锯木植树、敲钟爬楼与蜗牛爬井间隔卷
  // =========================================================================
  {
    id: 58,
    subject: 'math',
    unit: '名校专项：生活数学经典模型',
    title: '第 58 套：一年级数学·锯木植树、敲钟爬楼与蜗牛爬井间隔卷',
    tag: '间隔模型',
    tagColor: 'bg-rose-100 text-rose-800',
    desc: '专门根治一年级“段数与次数混淆”顽疾！包含锯木头、剪彩带、直路种树摆花 vs 圆形池塘闭环植树、2楼爬到6楼、挂钟报时、蜗牛爬井与毛毛虫爬竿、切蛋糕最多块数与空瓶换汽水。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '锯木头 & 剪彩带（次数 = 段数 - 1）',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M58-1-1',
            title: '1. 木匠锯长木头：锯成 5 段一共需要多少分钟',
            prompt: '木工叔叔要把一根长长的木头均匀锯成 <strong>5 段</strong>。已知每锯断一次需要用 <strong>3 分钟</strong>，把木头全部锯成 5 段一共要用几分钟？',
            tip: '【审题金钥匙】“段数”和“锯的次数”差 1！把木头锯成 5 段，仔细数缺口其实只要锯 5 - 1 = 4（次）！千万别算成 5 个 3 相加！一共用时：3 + 3 + 3 + 3 = 12（分钟）！',
            visual: wrapVisual(svgFrame(440, 145, '木头锯成5段示意图，4个锯口分别有小锯子标志', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">把一根整木头锯成【5 段】（每锯一次耗时 3 分钟）</text>
              ${[0, 1, 2, 3, 4].map(i => `
                <rect x="${42 + i * 74}" y="76" width="58" height="26" rx="5" fill="#d97706" stroke="#78350f" stroke-width="1.8"/>
                <text x="${71 + i * 74}" y="93" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">第${i + 1}段</text>
              `).join('')}
              ${[0, 1, 2, 3].map(i => `
                <line x1="${108 + i * 74}" y1="48" x2="${108 + i * 74}" y2="112" stroke="#e11d48" stroke-width="2" stroke-dasharray="4,3"/>
                <text x="${108 + i * 74}" y="46" text-anchor="middle" font-size="14">🪚</text>
              `).join('')}
              <text x="220" y="128" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">先数一数：锯成 5 段需要锯几次？一共几分钟？</text>
            `), 'amber'),
            options: [
              { text: '12 分钟', correct: true },
              { text: '15 分钟', correct: false },
              { text: '9 分钟', correct: false }
            ]
          },
          {
            qid: 'M58-1-2',
            title: '2. 逆向反问剪彩带：连剪了 4 刀会分成几段',
            prompt: '有一条长长的红彩带，乐乐不折叠也不把彩带弯起来，老老实实伸直着一刀一刀<strong>剪了 4 刀</strong>，每一刀都完全剪断。这条彩带最后被剪成了多少段？',
            tip: '【审题金钥匙】拿起手指头模拟切香肠：剪 1 刀分成 2 段；剪 2 刀分成 3 段……每次剪出来的段数总比刀数多 1（段数 = 次数 + 1）！所以剪 4 刀一共会得到：4 + 1 = 5（段）！',
            visual: wrapVisual(svgFrame(440, 130, '一根长红彩带用剪刀连剪4刀的示意图', `
              <rect x="8" y="8" width="424" height="114" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#9f1239">彩带不折叠，连续垂直剪 4 刀，会被剪成几段？</text>
              <rect x="46" y="66" width="348" height="22" rx="6" fill="#fb7185" stroke="#be123c" stroke-width="2"/>
              ${[114, 184, 254, 324].map((x, idx) => `
                <line x1="${x}" y1="48" x2="${x}" y2="104" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,3"/>
                <text x="${x}" y="46" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">✂️${idx+1}</text>
              `).join('')}
              <text x="220" y="114" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#9f1239">次数 + 1 = 段数</text>
            `), 'rose'),
            options: [
              { text: '5 段', correct: true },
              { text: '4 段', correct: false },
              { text: '3 段', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '直路两头插旗摆花 vs 圆形池塘闭环植树',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M58-2-1',
            title: '1. 马路一边插 6 面旗：每两面旗中间摆 1 盆花',
            prompt: '校门口直直的大路旁，从头到尾一共等距离插了 <strong>6 面红旗</strong>。工人阿姨要在<strong>每相邻两面红旗正中间</strong>放 1 盆鲜花，一共需要准备多少盆花？',
            tip: '【审题金钥匙】马路从头到尾两头都插着旗，像张开的小手指一样！6 根手指中间只有几个指缝间隔呢？6 - 1 = 5（个空挡）！每个空挡放 1 盆花，正好需要 5 盆花！',
            visual: wrapVisual(svgFrame(440, 145, '直马路两边端点共6面红旗，中间只画出省略号等待推算盆数', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#166534">直路一旁共插 6 面旗（两头都插），相邻两旗间摆 1 盆花</text>
              <line x1="36" y1="104" x2="404" y2="104" stroke="#92400e" stroke-width="4" stroke-linecap="round"/>
              ${[60, 145, 300, 382].map((x, idx) => {
                const n = [1, 2, 5, 6][idx];
                return `<line x1="${x}" y1="54" x2="${x}" y2="104" stroke="#334155" stroke-width="2.5"/>
                        <polygon points="${x},54 ${x+22},62 ${x},70" fill="#e11d48"/>
                        <text x="${x}" y="122" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#334155">第${n}面</text>`;
              }).join('')}
              <circle cx="102" cy="96" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
              <text x="102" y="100" text-anchor="middle" font-size="11" font-weight="black" fill="#854d0e">花</text>
              <text x="222" y="85" text-anchor="middle" font-size="18" font-weight="black" fill="#64748b">…… 中间省略 ……</text>
              <circle cx="341" cy="96" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
              <text x="341" y="100" text-anchor="middle" font-size="11" font-weight="black" fill="#854d0e">花</text>
            `), 'emerald'),
            options: [
              { text: '5 盆', correct: true },
              { text: '6 盆', correct: false },
              { text: '7 盆', correct: false }
            ]
          },
          {
            qid: 'M58-2-2',
            title: '2. 圆形池塘大对比：一圈 7 棵柳树中间夹桃树',
            prompt: '公园里有一个圆圆的小池塘，绕着池塘一圈正好种了 <strong>7 棵柳树</strong>。如果在每相邻两棵柳树中间都补种 1 棵桃树，一圈共要种<strong>多少棵桃树</strong>？',
            tip: '【审题金钥匙】超重要的对照陷阱题！马路有尽头，所以少 1 个间隔；但“圆形池塘”是首尾接起来的闭环（第 7 棵后面紧接着又是第 1 棵）！在封闭圆圈里，棵数和间隔数一模一样！所以 7 棵柳树中间有 7 个空位，要种 7 棵桃树！',
            visual: wrapVisual(svgFrame(440, 155, '椭圆蓝色池塘周圈种了7棵绿柳树，问中间可种几棵桃树', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0369a1">绕圆形池塘一圈种了 7 棵柳树，相邻两棵间种 1 棵桃树：</text>
              <ellipse cx="220" cy="96" rx="92" ry="38" fill="#bae6fd" stroke="#0284c7" stroke-width="2.4"/>
              <text x="220" y="101" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">圆形小池塘</text>
              ${Array.from({ length: 7 }, (_, i) => {
                const a = -Math.PI / 2 + (2 * Math.PI * i) / 7;
                const x = 220 + 106 * Math.cos(a);
                const y = 96 + 46 * Math.sin(a);
                const pa = a + Math.PI / 7;
                const px = 220 + 106 * Math.cos(pa);
                const py = 96 + 46 * Math.sin(pa);
                return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8.5" fill="#22c55e" stroke="#15803d" stroke-width="1.6"/>
                        <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="6.5" fill="#fbcfe8" stroke="#be185d" stroke-width="1.4" stroke-dasharray="2,2"/>`;
              }).join('')}
            `), 'sky'),
            options: [
              { text: '7 棵', correct: true },
              { text: '6 棵', correct: false },
              { text: '8 棵', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '从 2 楼爬到 6 楼 & 挂钟整点报时敲钟',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M58-3-1',
            title: '1. 认清起点不是一楼：从 2 楼走到 6 楼',
            prompt: '小红家住在 6 楼。放学回家时，她刚好先在 <strong>2 楼</strong>取完快递，接着从 2 楼继续往上走到 6 楼。已知她每爬 1 层楼梯要用 <strong>1 分钟</strong>，还需要走几分钟到家？',
            tip: '【审题金钥匙】爬楼梯用“终点楼层 - 起点楼层”就是还要爬的层数！从 2 楼往上走：2→3（1层）、3→4（2层）、4→5（3层）、5→6（4层）。算式：6 - 2 = 4（层），一共只要 4 分钟！注意起点不是 1 楼哦！',
            visual: wrapVisual(svgFrame(440, 175, '六层楼房剖面：高亮标注起点2楼和终点6楼家', `
              <rect x="8" y="8" width="424" height="159" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="296" y="48" text-anchor="middle" font-size="13" font-weight="bold" fill="#3730a3">小红从 2 楼 ➔ 走到 6 楼</text>
              <text x="296" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">（每往上走 1 层需要 1 分钟）</text>
              <text x="296" y="106" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#be123c">还要爬几层？需要几分钟？</text>
              ${[6, 5, 4, 3, 2, 1].map((fl, idx) => {
                const y = 26 + idx * 22;
                const fill = fl === 6 ? '#dcfce7' : fl === 2 ? '#fef08a' : '#ffffff';
                const txt = fl === 6 ? '6 楼（家）' : fl === 2 ? '2 楼（起点）' : `${fl} 楼`;
                return `<rect x="44" y="${y}" width="116" height="22" fill="${fill}" stroke="#312e81" stroke-width="1.5"/>
                        <text x="102" y="${y + 15}" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e293b">${txt}</text>`;
              }).join('')}
              ${arrow(176, 125, 176, 37, '#e11d48', 2.8)}
            `), 'indigo'),
            options: [
              { text: '4 分钟', correct: true },
              { text: '5 分钟', correct: false },
              { text: '6 分钟', correct: false }
            ]
          },
          {
            qid: 'M58-3-2',
            title: '2. 挂钟报时陷阱题：敲 3 下用 4 秒，敲 5 下用几秒',
            prompt: '大厅的老挂钟 3 点时叮当<strong>敲了 3 下</strong>，从第 1 声响到第 3 声停一共花了 <strong>4 秒</strong>。按照这样均匀的速度，早上 5 点<strong>敲 5 下</strong>，一共要几秒？',
            tip: '【审题金钥匙】敲钟的时间并不是消耗在“铛”那一瞬间，而是消耗在两声中间等待的“间隔”上！敲 3 下其实中间只等了 3 - 1 = 2 个间隔，花了 4 秒，说明每个间隔是 2 秒！敲 5 下中间有 5 - 1 = 4 个间隔，所以需要 2 + 2 + 2 + 2 = 8（秒）！',
            visual: wrapVisual(svgFrame(440, 155, '上面Timeline敲3下含2个空档共4秒，下面敲5下含4个空档问共几秒', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#92400e">挂钟报时时间 = 声音之间的“空档总时间”</text>
              <line x1="74" y1="62" x2="214" y2="62" stroke="#b45309" stroke-width="2.2"/>
              ${[74, 144, 214].map(x => `<circle cx="${x}" cy="62" r="9" fill="#f59e0b"/><text x="${x}" y="66" text-anchor="middle" font-size="11" font-weight="black" fill="#ffffff">铛</text>`).join('')}
              <text x="275" y="66" font-size="12.5" font-weight="bold" fill="#78350f">敲 3 下：共用 4 秒</text>
              <line x1="74" y1="112" x2="354" y2="112" stroke="#0284c7" stroke-width="2.2"/>
              ${[74, 144, 214, 284, 354].map(x => `<circle cx="${x}" cy="112" r="9" fill="#0284c7"/><text x="${x}" y="116" text-anchor="middle" font-size="11" font-weight="black" fill="#ffffff">铛</text>`).join('')}
              <text x="214" y="136" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#be123c">敲 5 下：一共用几秒？</text>
            `), 'amber'),
            options: [
              { text: '8 秒', correct: true },
              { text: '10 秒', correct: false },
              { text: '6 秒', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '经典压轴“进退不回滑”：蜗牛爬井 & 毛毛虫爬竿',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M58-4-1',
            title: '1. 全网高频“蜗牛爬井”：千万记住爬出去就不再滑啦',
            prompt: '一口水井深 <strong>7 米</strong>。小蜗牛第 1 天早上从井底出发，<strong>白天向上爬 3 米，到了晚上睡觉往下滑 2 米</strong>。照这样的规律，小蜗牛第几天就能爬出井口？',
            tip: '【审题金钥匙】超经典“最后一天冲刺不滑落”规律！每天白天+晚上净爬升只有 3 - 2 = 1 米，但只要到达 7 米井口就成功出来不会下滑啦！让我们一天天数：① 第1天晚到 1 米；② 第2天晚到 2 米；③ 第3天晚到 3 米；④ 第4天晚到 4 米；到了第 5 天白天，直接向上爬 3 米：4 + 3 = 7 米，刚好出井！答案是第 5 天！（千万别盲算成第 7 天！）',
            visual: wrapVisual(svgFrame(440, 175, '7米深水井剖面刻度尺，标出白天爬3米、夜里滑2米', `
              <rect x="8" y="8" width="424" height="159" rx="14" fill="#ecfdf5" stroke="#86efac" stroke-width="1.6"/>
              <line x1="86" y1="30" x2="86" y2="152" stroke="#78350f" stroke-width="4"/>
              <line x1="172" y1="30" x2="172" y2="152" stroke="#78350f" stroke-width="4"/>
              <line x1="86" y1="152" x2="172" y2="152" stroke="#78350f" stroke-width="4"/>
              <line x1="60" y1="30" x2="86" y2="30" stroke="#15803d" stroke-width="4"/>
              <line x1="172" y1="30" x2="196" y2="30" stroke="#15803d" stroke-width="4"/>
              <text x="56" y="34" text-anchor="end" font-size="11.5" font-weight="bold" fill="#15803d">7米井口</text>
              <text x="56" y="154" text-anchor="end" font-size="11.5" font-weight="bold" fill="#78350f">0米井底</text>
              <text x="129" y="143" text-anchor="middle" font-size="17">🐌</text>
              ${arrow(104, 118, 104, 74, '#16a34a', 2.4)}
              <text x="104" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">+3m</text>
              ${arrow(150, 74, 150, 104, '#e11d48', 2.4)}
              <text x="150" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">-2m</text>
              <rect x="206" y="42" width="210" height="106" rx="12" fill="#ffffff" stroke="#86efac" stroke-width="1.5"/>
              <text x="311" y="66" text-anchor="middle" font-size="13" font-weight="black" fill="#065f46">水井一共深 7 米</text>
              <text x="311" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">🌞 白天：向上爬 3 米</text>
              <text x="311" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">🌙 夜晚：向下滑 2 米</text>
              <text x="311" y="134" text-anchor="middle" font-size="12.5" font-weight="black" fill="#0f172a">第几天白天就能爬出井？</text>
            `), 'emerald'),
            options: [
              { text: '第 5 天', correct: true },
              { text: '第 7 天', correct: false },
              { text: '第 6 天', correct: false }
            ]
          },
          {
            qid: 'M58-4-2',
            title: '2. 变式再练一遍：毛毛虫爬 8 米高竹竿',
            prompt: '毛毛虫想要爬上 <strong>8 米高</strong>的竹竿顶吃嫩叶。它<strong>白天向上爬 4 米，晚上睡觉往下滑 2 米</strong>。从第 1 天早上由竿底开始爬，它第几天就能爬到竹竿顶端？',
            tip: '【审题金钥匙】每天净爬高 4 - 2 = 2 米，一起跟踪每天位置：① 第1天晚滑到 2 米；② 第2天晚滑到 4 米；③ 第3天白天一口气爬 4 米：4 + 4 = 8（米），已经到达竿顶吃嫩叶啦，不用等到晚上下滑！答案是第 3 天！',
            visual: wrapVisual(svgFrame(440, 155, '8米竹竿，毛毛虫白天爬4米、夜晚滑2米', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.6"/>
              <rect x="108" y="24" width="16" height="114" rx="6" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
              <text x="96" y="34" text-anchor="end" font-size="11.5" font-weight="bold" fill="#15803d">8米竿顶</text>
              <text x="96" y="136" text-anchor="end" font-size="11.5" font-weight="bold" fill="#475569">0米竿底</text>
              <text x="116" y="132" text-anchor="middle" font-size="16">🐛</text>
              <rect x="190" y="34" width="222" height="98" rx="12" fill="#ffffff" stroke="#86efac" stroke-width="1.5"/>
              <text x="301" y="58" text-anchor="middle" font-size="13" font-weight="black" fill="#065f46">竹竿全长 8 米</text>
              <text x="301" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">🌞 白天：向上爬 4 米</text>
              <text x="301" y="100" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">🌙 夜晚：向下滑 2 米</text>
              <text x="301" y="122" text-anchor="middle" font-size="12" font-weight="black" fill="#0f172a">第几天白天就能到达竿顶？</text>
            `), 'emerald'),
            options: [
              { text: '第 3 天', correct: true },
              { text: '第 4 天', correct: false },
              { text: '第 2 天', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '烧脑小神童挑战：直切蛋糕最多块 & 空瓶换汽水',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M58-5-1',
            title: '1. 切生日蛋糕挑战：切 3 刀最多能切几块',
            prompt: '桌上放着一个圆圆的大奶油蛋糕。只允许你用水果刀笔直向下切 <strong>3 刀</strong>（切的时候不能移动蛋糕块）。要想让切出来的块数<strong>尽量最多</strong>，一共最多能切成几块？',
            tip: '【审题金钥匙】超级好玩！如果 3 刀全切过同一个中心点（像切西瓜那样），只有 6 块；想要块数最多，必须让“第 3 刀分别穿过前两刀，但避开原来的交点”——多出一块小三角！规律是：0刀=1块 ➔ 1刀=+1(2块) ➔ 2刀=+2(4块) ➔ 3刀=+3(7块)！最多 7 块！',
            visual: wrapVisual(svgFrame(440, 145, '圆形奶油蛋糕和切3刀最多切几块示意图', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <circle cx="114" cy="76" r="46" fill="#fef3c7" stroke="#f59e0b" stroke-width="2.6"/>
              <circle cx="114" cy="76" r="36" fill="#ffe4e6" stroke="#fda4af" stroke-width="1.4"/>
              <text x="114" y="81" text-anchor="middle" font-size="14" font-weight="bold" fill="#be123c">🎂 大蛋糕</text>
              <rect x="190" y="34" width="224" height="82" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
              <text x="302" y="58" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#9f1239">规则：不移动蛋糕，笔直切 3 刀</text>
              <text x="302" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">秘诀：让第 3 刀和前两刀都相交，</text>
              <text x="302" y="100" text-anchor="middle" font-size="12" font-weight="black" fill="#be123c">而且别交在同一个点上！最多几块？</text>
            `), 'rose'),
            options: [
              { text: '7 块', correct: true },
              { text: '6 块', correct: false },
              { text: '8 块', correct: false }
            ]
          },
          {
            qid: 'M58-5-2',
            title: '2. 超市兑换划算王：3 个空瓶换 1 瓶汽水',
            prompt: '小卖部搞活动：<strong>每 3 个空汽水瓶可以免费换 1 瓶新汽水</strong>。乐乐掏钱一共买了 <strong>5 瓶汽水</strong>，喝完一直换下去（不向老板借空瓶），乐乐最多一共能喝到几瓶汽水？',
            tip: '【审题金钥匙】换完的新汽水喝掉后也会变成空瓶哦！一步一步算清：① 先喝买的 5 瓶，得到 5 个空瓶；② 拿出 3 个空瓶换第 6 瓶（手里还剩 2 个空瓶）；③ 喝完第 6 瓶又产生 1 个空瓶，刚好凑成 2 + 1 = 3 个空瓶！④ 再拿这 3 个空瓶换第 7 瓶！喝完还剩 1 个空瓶换不了啦，一共喝了 5 + 1 + 1 = 7（瓶）！',
            visual: wrapVisual(svgFrame(440, 145, '买了5瓶橘子汽水，规则标明3个空瓶换1瓶新汽水，不借空瓶', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0369a1">规则：【3 个空瓶】= 换【1 瓶汽水】（不借瓶）</text>
              ${[0, 1, 2, 3, 4].map(i => {
                const x = 66 + i * 38;
                return `<rect x="${x}" y="52" width="22" height="44" rx="5" fill="#fb923c" stroke="#9a3412" stroke-width="1.6"/>
                        <rect x="${x + 5}" y="44" width="12" height="8" rx="2" fill="#e11d48"/>`;
              }).join('')}
              <text x="150" y="116" text-anchor="middle" font-size="12" font-weight="bold" fill="#9a3412">先买了 5 瓶汽水</text>
              <rect x="256" y="48" width="158" height="72" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
              <text x="335" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">喝完的瓶子接着换！</text>
              <text x="335" y="96" text-anchor="middle" font-size="13" font-weight="black" fill="#be123c">最多一共能喝到几瓶？</text>
            `), 'sky'),
            options: [
              { text: '7 瓶', correct: true },
              { text: '6 瓶', correct: false },
              { text: '8 瓶', correct: false }
            ]
          }
        ]
      }
    ]
  }
];
