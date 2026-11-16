import { wrapVisual, svgFrame, arrow, balanceScale } from './math_svg_helpers.mjs';

export const papers59to60 = [
  // =========================================================================
  // 第 59 套：移多补少、暗含比较与年龄同步推理卷
  // =========================================================================
  {
    id: 59,
    subject: 'math',
    unit: '名校专项：生活数学经典模型',
    title: '第 59 套：一年级数学·移多补少、暗含比较与年龄同步推理卷',
    tag: '移多年龄',
    tagColor: 'bg-indigo-100 text-indigo-800',
    desc: '打通“移多补少与年龄差和”全部四大变式！精炼对齐切一半、送后仍多或一样多逆推、先变化再移补、年龄差永远不变及多人年龄和同步同增同减。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '直观移多补少：“相差数 ÷ 2（对半平分）”',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M59-1-1',
            title: '1. 星星队排队对齐：上面移几颗下来两行一样多',
            prompt: '看下面一一对齐排好的两行星星：第一行有 <strong>14 颗</strong>红星，第二行有 <strong>8 颗</strong>蓝星。要想让两行星星的数量变得一样多，应该从第一行拿几颗移到第二行？',
            tip: '【审题金钥匙】移多补少超级顺口溜：“先算多几个，再分一半给别人，千万不能全部给人！”第一行比第二行多 14 - 8 = 6（颗）。如果把 6 颗全拿下去，第二行反而多啦！把 6 分成一样多的 3 和 3，只要从第一行移 3 颗到第二行，就都是 11 颗一样多啦！',
            visual: wrapVisual(svgFrame(440, 145, '第一行14颗红星，第二行8颗蓝星一一对齐', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#92400e">一一对应比一比：第一行拿几颗到第二行，两行就一样多？</text>
              <text x="38" y="64" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">14颗</text>
              <text x="38" y="106" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1d4ed8">8颗</text>
              ${Array.from({ length: 14 }, (_, i) => `<text x="${74 + i * 24}" y="66" text-anchor="middle" font-size="16">⭐</text>`).join('')}
              ${Array.from({ length: 8 }, (_, i) => `<text x="${74 + i * 24}" y="108" text-anchor="middle" font-size="16">🔷</text>`).join('')}
              <line x1="254" y1="42" x2="254" y2="122" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="4,3"/>
            `), 'amber'),
            options: [
              { text: '3 颗', correct: true },
              { text: '6 颗', correct: false },
              { text: '4 颗', correct: false }
            ]
          },
          {
            qid: 'M59-1-2',
            title: '2. 大篮桃子 11 个、小篮 3 个：怎么搬才同样多',
            prompt: '桌上有两篮水蜜桃：大篮子里装着 <strong>11 个</strong>桃，小篮子里装着 <strong>3 个</strong>桃。从大篮子拿出几个桃子放进小篮子，两个篮子里的桃子数量就一样多？',
            tip: '【审题金钥匙】第一步先算出大篮子比小篮子多几个：11 - 3 = 8（个）。第二步把多出的 8 个对半平分（8 = 4 + 4）：大篮子留下一半 4 个，把另一半 4 个搬进小篮子，两边立刻都变成 7 个！',
            visual: wrapVisual(svgFrame(440, 145, '左大篮子11个桃，右小篮子3个桃，问从左拿几个到右同样多', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#9f1239">大篮拿出几个桃放到小篮里，两篮桃子就同样多？</text>
              <rect x="44" y="48" width="144" height="70" rx="14" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
              <text x="116" y="76" text-anchor="middle" font-size="16" font-weight="black" fill="#9f1239">🍑 大篮子</text>
              <text x="116" y="102" text-anchor="middle" font-size="15" font-weight="black" fill="#be123c">11 个桃</text>
              ${arrow(196, 82, 246, 82, '#e11d48', 2.8)}
              <text x="221" y="72" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">移？个</text>
              <rect x="254" y="48" width="144" height="70" rx="14" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
              <text x="326" y="76" text-anchor="middle" font-size="16" font-weight="black" fill="#92400e">🍑 小篮子</text>
              <text x="326" y="102" text-anchor="middle" font-size="15" font-weight="black" fill="#b45309">3 个桃</text>
            `), 'rose'),
            options: [
              { text: '4 个', correct: true },
              { text: '8 个', correct: false },
              { text: '5 个', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '逆向推本来差多少：“给后一样多”与“给后仍多”',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M59-2-1',
            title: '1. 逆推经典陷阱：小明送小红 4 张后两人一样多',
            prompt: '小明和小红都在收集奥特曼卡片。今天小明大方地<strong>送给小红 4 张画片后</strong>，两个人的画片就正好一样多。想一想，<strong>原来</strong>小明比小红多几张画片？',
            tip: '【审题金钥匙】一年级最高频错题！送 4 张就一样多，可不是原本只多 4 张哦！小明少了 4 张、小红反而增加了 4 张，“此消彼长”一下子拉近了双倍差距：4 + 4 = 8（张）！你可以用例子检验：原本小明 10 张、小红 2 张，送 4 张后就都是 6 张！',
            visual: wrapVisual(svgFrame(440, 145, '小明给小红4张画片后两人现在同样多，问原来小明比小红多几张', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#3730a3">小明给小红 4 张画片后，两人就一样多啦！</text>
              <rect x="28" y="48" width="116" height="62" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
              <text x="86" y="75" text-anchor="middle" font-size="15" font-weight="black" fill="#0369a1">👦 小明</text>
              <text x="86" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="#0284c7">少 4 张</text>
              ${arrow(154, 78, 286, 78, '#4f46e5', 2.8)}
              <text x="220" y="68" text-anchor="middle" font-size="12" font-weight="black" fill="#be123c">送给小红 4 张</text>
              <text x="220" y="102" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#15803d">结果：两人现在一样多</text>
              <rect x="296" y="48" width="116" height="62" rx="12" fill="#fce7f3" stroke="#db2777" stroke-width="1.8"/>
              <text x="354" y="75" text-anchor="middle" font-size="15" font-weight="black" fill="#9d174d">👧 小红</text>
              <text x="354" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="#be185d">多 4 张</text>
              <text x="220" y="128" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">请问：原来小明比小红多几张画片？</text>
            `), 'indigo'),
            options: [
              { text: '8 张', correct: true },
              { text: '4 张', correct: false },
              { text: '2 张', correct: false }
            ]
          },
          {
            qid: 'M59-2-2',
            title: '2. 名校拔高变式：给了 3 颗糖，竟然还比对方多 2 颗',
            prompt: '哥哥有好多颗水果糖。哥哥拿了 <strong>3 颗糖送给弟弟后，哥哥还是比弟弟多 2 颗</strong>。开动小脑筋反推一下，原来哥哥比弟弟多多少颗糖？',
            tip: '【审题金钥匙】画线段图或者拆步想！哥哥给弟弟 3 颗糖已经拉近了 3 + 3 = 6 颗的距离，结果拉近 6 颗以后哥哥居然还多出 2 颗在外面！把还没消掉的 2 颗加回来：3 + 3 + 2 = 8（颗）！代入验算：原来哥哥 10 颗、弟弟 2 颗，给 3 颗后变成 7 颗和 5 颗，果然还多 2 颗！',
            visual: wrapVisual(svgFrame(440, 145, '哥哥给弟弟3颗糖后哥哥仍多2颗，问原来多几颗', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0369a1">哥哥给弟弟 3 颗糖后，哥哥手里【还比弟弟多 2 颗】</text>
              <rect x="38" y="48" width="130" height="58" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
              <text x="103" y="75" text-anchor="middle" font-size="15" font-weight="black" fill="#1e40af">🧑 哥哥</text>
              <text x="103" y="95" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#2563eb">送出 3 颗后仍多 2 颗</text>
              ${arrow(176, 76, 266, 76, '#0284c7', 2.8)}
              <text x="221" y="66" text-anchor="middle" font-size="12" font-weight="black" fill="#be123c">给弟弟 3 颗</text>
              <rect x="274" y="48" width="128" height="58" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
              <text x="338" y="75" text-anchor="middle" font-size="15" font-weight="black" fill="#166534">🧒 弟弟</text>
              <text x="338" y="95" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#15803d">收到 3 颗</text>
              <text x="220" y="126" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#be123c">问：原来哥哥比弟弟多多少颗糖？</text>
            `), 'sky'),
            options: [
              { text: '8 颗', correct: true },
              { text: '5 颗', correct: false },
              { text: '6 颗', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '双层书架已知总数倒推 & 先倒入再倒出二次移补',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M59-3-1',
            title: '1. 两层书架共 12 本书：上层搬 2 本到下层才同样多',
            prompt: '书架上、下两层<strong>一共有 12 本书</strong>。如果从上层拿走 <strong>2 本</strong>放到下层，上下两层书的本数就刚好一样多。那么，<strong>原来</strong>上层有多少本书？',
            tip: '【审题金钥匙】超顺滑的“结果倒推法”！两层合起来总数 12 本一直没变，后来上下一样多时，就是把 12 对半平分：6 + 6 = 12，说明后来上层有 6 本！现在把刚才搬下去的那 2 本“倒带”拿回上层：6 + 2 = 8（本）！',
            visual: wrapVisual(svgFrame(440, 155, '上下两层书架共12本书，上层拿2本放到下层后一样多，问原上层几本', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#92400e">上下两层一共 12 本书：上层拿 2 本去下层后，两层一样多</text>
              <rect x="78" y="38" width="210" height="44" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
              <text x="183" y="65" text-anchor="middle" font-size="14" font-weight="black" fill="#78350f">上层书架（原来有 ？本）</text>
              <rect x="78" y="92" width="210" height="44" rx="8" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
              <text x="183" y="119" text-anchor="middle" font-size="14" font-weight="black" fill="#78350f">下层书架</text>
              ${arrow(308, 60, 308, 114, '#e11d48', 2.8)}
              <text x="364" y="83" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">移下 2 本</text>
              <text x="364" y="101" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">后一样多</text>
            `), 'amber'),
            options: [
              { text: '8 本', correct: true },
              { text: '10 本', correct: false },
              { text: '6 本', correct: false }
            ]
          },
          {
            qid: 'M59-3-2',
            title: '2. 两步动态倒水：先往蓝桶新加 2 升，再从红桶倒',
            prompt: '红水桶里装着 <strong>10 升水</strong>，蓝水桶里装着 <strong>4 升水</strong>。乐乐先拿水瓢另外往蓝桶里新倒进了 <strong>2 升水</strong>；之后还要从红桶往蓝桶倒进几升水，两桶水才能一样多？',
            tip: '【审题金钥匙】一定要按事情变化先后算清“现在有多少”！蓝桶先另外倒进 2 升水后，现在已经有 4 + 2 = 6（升）水啦！红桶还是 10 升，现在两桶相差 10 - 6 = 4（升）。再把相差的 4 升分一半（2 升）从红桶倒进蓝桶，两桶就都是 8 升同样多啦！',
            visual: wrapVisual(svgFrame(440, 155, '红桶10升水，蓝桶4升先外加2升，问再从红倒几升到蓝两桶一样多', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#166534">第①步：先往蓝桶另外添 2 升；第②步：再从红桶倒几升过去？</text>
              <rect x="64" y="48" width="90" height="76" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
              <text x="109" y="82" text-anchor="middle" font-size="14" font-weight="black" fill="#9f1239">红桶 10 升</text>
              <text x="109" y="106" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">（第②步倒？升）</text>
              ${arrow(164, 88, 236, 88, '#0284c7', 2.8)}
              <rect x="246" y="48" width="144" height="76" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
              <text x="318" y="76" text-anchor="middle" font-size="14" font-weight="black" fill="#0369a1">蓝桶原有 4 升</text>
              <text x="318" y="100" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#15803d">+ 新添 2 升水</text>
            `), 'emerald'),
            options: [
              { text: '2 升', correct: true },
              { text: '3 升', correct: false },
              { text: '4 升', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '年龄问题核心定理：“年龄差永远不变”',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M59-4-1',
            title: '1. 10 年之后爸爸会比乐乐大几岁？',
            prompt: '今年爸爸 <strong>35 岁</strong>，乐乐 <strong>7 岁</strong>。转眼过去 10 年以后，那时候爸爸比乐乐大几岁？',
            tip: '【审题金钥匙】年龄问题第一铁律：“两个人的年龄差永远不变！”每过 1 年，爸爸长 1 岁，乐乐也同时长 1 岁！10 年后爸爸 45 岁，乐乐 17 岁，45 - 17 依然等于 35 - 7 = 28（岁）！千万别不小心多加了 10 岁哦！',
            visual: wrapVisual(svgFrame(440, 140, '今年爸爸35岁乐乐7岁，问10年后爸爸比乐乐大几岁', `
              <rect x="8" y="8" width="424" height="124" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#3730a3">今年：爸爸 35 岁  ·  乐乐 7 岁</text>
              <rect x="36" y="48" width="124" height="60" rx="12" fill="#ffffff" stroke="#4f46e5" stroke-width="1.8"/>
              <text x="98" y="76" text-anchor="middle" font-size="15" font-weight="black" fill="#1e293b">👨 爸爸 35 岁</text>
              <text x="98" y="96" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#4f46e5">+10 年后</text>
              <text x="220" y="83" text-anchor="middle" font-size="15" font-weight="black" fill="#be123c">相差 ？岁</text>
              <rect x="280" y="48" width="124" height="60" rx="12" fill="#ffffff" stroke="#4f46e5" stroke-width="1.8"/>
              <text x="342" y="76" text-anchor="middle" font-size="15" font-weight="black" fill="#1e293b">👦 乐乐 7 岁</text>
              <text x="342" y="96" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#4f46e5">+10 年后</text>
            `), 'indigo'),
            options: [
              { text: '28 岁', correct: true },
              { text: '38 岁', correct: false },
              { text: '18 岁', correct: false }
            ]
          },
          {
            qid: 'M59-4-2',
            title: '2. 穿越时间算今年：“等小美 9 岁时爷爷 63 岁”',
            prompt: '小美今年 <strong>6 岁</strong>。妈妈告诉她：“<strong>等小美长到 9 岁的时候，爷爷正好 63 岁</strong>。”请问爷爷<strong>今年</strong>多少岁？',
            tip: '【审题金钥匙】“同步穿过几年”大法：从小美今年 6 岁到以后 9 岁，中间还要经过 9 - 6 = 3（年）！也就是说爷爷还要再过 3 年才满 63 岁，把这未来的 3 年退回今年：爷爷今年 = 63 - 3 = 60（岁）！',
            visual: wrapVisual(svgFrame(440, 145, '今年小美6岁、爷爷？岁；3年后小美9岁、爷爷63岁', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#6b21a8">抓准“同长几岁”：等小美 9 岁时，爷爷是 63 岁</text>
              <rect x="34" y="46" width="154" height="72" rx="12" fill="#ffffff" stroke="#7e22ce" stroke-width="1.8"/>
              <text x="111" y="72" text-anchor="middle" font-size="14" font-weight="black" fill="#4c1d95">【今年】</text>
              <text x="111" y="94" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1e293b">小美 6 岁 · 爷爷 ？岁</text>
              ${arrow(194, 82, 246, 82, '#7e22ce', 2.8)}
              <text x="220" y="70" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">过几年？</text>
              <rect x="254" y="46" width="154" height="72" rx="12" fill="#f3e8ff" stroke="#7e22ce" stroke-width="1.8"/>
              <text x="331" y="72" text-anchor="middle" font-size="14" font-weight="black" fill="#4c1d95">【将来】</text>
              <text x="331" y="94" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1e293b">小美 9 岁 · 爷爷 63 岁</text>
            `), 'purple'),
            options: [
              { text: '60 岁', correct: true },
              { text: '63 岁', correct: false },
              { text: '54 岁', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '名校高频大坑：“多人年龄和”过 N 年要每人各长 N 岁',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M59-5-1',
            title: '1. 兄妹今年年龄和 11 岁，4 年后两人年龄和是几岁',
            prompt: '今年哥哥和妹妹两人的年龄加起来一共是 <strong>11 岁</strong>。再过 <strong>4 年后</strong>，哥哥和妹妹两人的年龄加起来一共是多少岁？',
            tip: '【审题金钥匙】超级多同学掉进“11 + 4 = 15”的陷阱里！注意啦：过 4 年时，哥哥长大 4 岁，妹妹也跟着长大 4 岁，两个人加起来一共多长了 4 + 4 = 8 岁！所以 4 年后的年龄和 = 11 + 4 + 4 = 19（岁）！',
            visual: wrapVisual(svgFrame(440, 140, '兄妹今年年龄和11岁，问4年后两人年龄和是多少岁', `
              <rect x="8" y="8" width="424" height="124" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#9f1239">兄妹今年一共 11 岁  ➔  4 年后兄妹俩一共多少岁？</text>
              <rect x="52" y="48" width="144" height="58" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="1.8"/>
              <text x="124" y="74" text-anchor="middle" font-size="14" font-weight="black" fill="#1e293b">👦 哥哥：+4 岁</text>
              <text x="124" y="95" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">也要长 4 岁！</text>
              <text x="220" y="84" text-anchor="middle" font-size="22" font-weight="black" fill="#e11d48">+</text>
              <rect x="244" y="48" width="144" height="58" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="1.8"/>
              <text x="316" y="74" text-anchor="middle" font-size="14" font-weight="black" fill="#1e293b">👧 妹妹：+4 岁</text>
              <text x="316" y="95" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">同样长 4 岁！</text>
            `), 'rose'),
            options: [
              { text: '19 岁', correct: true },
              { text: '15 岁', correct: false },
              { text: '17 岁', correct: false }
            ]
          },
          {
            qid: 'M59-5-2',
            title: '2. 时光倒流算年龄和：3 年前两人年龄和是几岁',
            prompt: '今年乐乐和表姐两人的年龄加起来一共是 <strong>14 岁</strong>（两人都超过 4 岁啦）。那么倒退回 <strong>3 年前</strong>，他们两人的年龄和一共是多少岁？',
            tip: '【审题金钥匙】时光倒流回到 3 年前，乐乐要比今年小 3 岁，表姐也要比今年小 3 岁，两人一共要减去两个 3！算式：14 - 3 - 3 = 8（岁）！假设今年乐乐 5 岁、表姐 9 岁（和 14），3 年前分别是 2 岁和 6 岁，和正是 8 岁！',
            visual: wrapVisual(svgFrame(440, 140, '乐乐和表姐今年年龄和14岁，问3年前两人年龄和是多少', `
              <rect x="8" y="8" width="424" height="124" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">今年乐乐与表姐年龄和 = 14 岁  ➔  倒退 3 年前一共几岁？</text>
              <rect x="64" y="48" width="136" height="58" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
              <text x="132" y="74" text-anchor="middle" font-size="14" font-weight="black" fill="#0c4a6e">👦 乐乐：-3 岁</text>
              <text x="132" y="95" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0284c7">少 3 岁</text>
              <rect x="240" y="48" width="136" height="58" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
              <text x="308" y="74" text-anchor="middle" font-size="14" font-weight="black" fill="#0c4a6e">👧 表姐：-3 岁</text>
              <text x="308" y="95" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0284c7">也少 3 岁</text>
            `), 'sky'),
            options: [
              { text: '8 岁', correct: true },
              { text: '11 岁', correct: false },
              { text: '10 岁', correct: false }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 第 60 套：天平称重找次品、统筹策略与全题型压轴卷
  // =========================================================================
  {
    id: 60,
    subject: 'math',
    unit: '名校专项：名校全真压轴大综合',
    title: '第 60 套：一年级数学·天平称重找次品、统筹策略与全题型压轴卷',
    tag: '统筹压轴',
    tagColor: 'bg-rose-100 text-rose-800',
    desc: '一年级名校素养终极检验大综合卷！集合天平称找轻球次品、双天平比轻重递推、并行时间、烙饼统筹、数位卡片、最不利配钥匙、拿糖必胜策略、三人过河、错中求解与星期推算。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '天平称重找次品 & 动物体重排序逻辑推理',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M60-1-1',
            title: '1. 天平火眼金睛找次品：平衡说明剩下的那个不对劲',
            prompt: '桌子上有 ①号、②号、③号 三个外表完全一样的乒乓球，其中有 <strong>1 个比较轻（空心次品）</strong>，另外 2 个一样重。把 ①号 和 ②号 放到天平两边，结果天平完全<strong>水平平衡</strong>，那么那个较轻的次品球是？',
            tip: '【审题金钥匙】称次品只需称 1 次就搞定！天平两端水平平衡，说明盘子里的 ①号 和 ②号 一样重（都是合格好球！）。那唯一比好球轻的次品，只能是没有放上天平的 ③号球啦！',
            visual: wrapVisual(svgFrame(440, 145, '天平左盘①号球右盘②号球保持水平平衡，③号球摆在旁边桌上', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0369a1">3 个球里有 1 个轻的次品，称出天平完全平衡，谁是次品？</text>
              ${balanceScale(164, 62, '①号球', '②号球', 'even')}
              <rect x="298" y="54" width="102" height="58" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4,3"/>
              <circle cx="349" cy="76" r="13" fill="#fde047" stroke="#b45309" stroke-width="1.6"/>
              <text x="349" y="81" text-anchor="middle" font-size="13" font-weight="black" fill="#78350f">③</text>
              <text x="349" y="104" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">留在桌上的 ③号球</text>
            `), 'sky'),
            options: [
              { text: '③号球', correct: true },
              { text: '①号球', correct: false },
              { text: '还必须再称一次才知道', correct: false }
            ]
          },
          {
            qid: 'M60-1-2',
            title: '2. 动物翘翘板比重量：谁是最重的大力士',
            prompt: '看下面两架天平谁把那一头压下去啦（低的一边重，高的一边轻）：图① <strong>小猪</strong>比<strong>小羊</strong>重；图② <strong>小熊</strong>比<strong>小猪</strong>重。把三只小动物按<strong>从最重到最轻</strong>排列，正确的是？',
            tip: '【审题金钥匙】用传递大法一比就清！图①小猪比小羊重（小猪 > 小羊）；图②小熊连小猪都压下去了，说明小熊比小猪还要重（小熊 > 小猪）！连起来排队：小熊 > 小猪 > 小羊！',
            visual: wrapVisual(svgFrame(460, 155, '左天平左低小猪右高小羊，右天平左低小熊右高小猪', `
              <rect x="6" y="8" width="448" height="139" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="230" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#92400e">观察低的一边重、高的一边轻，按从重到轻排队：</text>
              ${balanceScale(120, 66, '🐷 小猪', '🐑 小羊', 'left')}
              ${balanceScale(340, 66, '🐻 小熊', '🐷 小猪', 'left')}
            `), 'amber'),
            options: [
              { text: '小熊 > 小猪 > 小羊', correct: true },
              { text: '小猪 > 小熊 > 小羊', correct: false },
              { text: '小羊 > 小猪 > 小熊', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '统筹省时大智慧：同时吃苹果 & 经典平底锅烙饼',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M60-2-1',
            title: '1. 并行吃水果陷阱：6 个人一起吃要几分钟',
            prompt: '课间休息，3 个小朋友<strong>同时吃</strong>各自的 1 个苹果（每人吃手里那 1 个），从开始吃到吃完一共花了 <strong>4 分钟</strong>。照这样计算，如果 <strong>6 个小朋友同时</strong>各自吃 1 个苹果，一共要花几分钟？',
            tip: '【审题金钥匙】看到数字翻倍变成 6 就答 8 分钟？上当啦！每个人吃自己手里的 1 个苹果依然只要 4 分钟，因为大家是“同一时间一起吃”，不是你吃完再轮到我吃！所以 6 人同时吃仍然只用 4 分钟！',
            visual: wrapVisual(svgFrame(440, 130, '6个小朋友排排坐同时一起各自啃1个红苹果', `
              <rect x="8" y="8" width="424" height="114" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#166534">每人吃 1 个苹果要 4 分钟：6 人“同一时间一起吃”要几分？</text>
              ${Array.from({ length: 6 }, (_, i) => {
                const cx = 56 + i * 65;
                return `<rect x="${cx - 24}" y="46" width="48" height="48" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="1.6"/>
                        <text x="${cx}" y="68" text-anchor="middle" font-size="17">👧🍎</text>
                        <text x="${cx}" y="86" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#15803d">第${i+1}人</text>`;
              }).join('')}
              <text x="220" y="112" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">大家同时张嘴一起啃，不需要排队等别人！</text>
            `), 'emerald'),
            options: [
              { text: '4 分钟', correct: true },
              { text: '8 分钟', correct: false },
              { text: '2 分钟', correct: false }
            ]
          },
          {
            qid: 'M60-2-2',
            title: '2. 名校必考神题“烙 3 张饼”：每次放 2 张怎样最快',
            prompt: '妈妈用一口平底锅烙鸡蛋饼，锅里<strong>每次最多同时放 2 张饼</strong>，每张饼的<strong>正面、反面都要烙</strong>，烙熟一面需要 <strong>2 分钟</strong>。如果要烙熟 <strong>3 张饼</strong>，最少需要几分钟？',
            tip: '【审题金钥匙】不让平底锅空出一个位置的神级统筹法！① 第一个 2 分钟：烙 1号正面 + 2号正面（锅满！）；② 第二个 2 分钟：翻 1号反面 + 换上 3号正面（1号熟了拿走！）；③ 第三个 2 分钟：把 2号反面 + 3号反面放回（全熟！）。总共只花了 2 + 2 + 2 = 6（分钟）！',
            visual: wrapVisual(svgFrame(440, 145, '一口平底锅画着每次最多放2张饼，旁边放着3张待烙小饼', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#92400e">每次锅里最多放 2 张饼 · 正反两面都要烙（每面 2 分钟）</text>
              <circle cx="116" cy="86" r="46" fill="#334155" stroke="#0f172a" stroke-width="2.6"/>
              <line x1="160" y1="100" x2="192" y2="112" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
              <circle cx="96" cy="76" r="13.5" fill="#fde047" stroke="#b45309" stroke-width="1.5"/>
              <circle cx="136" cy="76" r="13.5" fill="#fde047" stroke="#b45309" stroke-width="1.5"/>
              <text x="116" y="116" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">最多放2张</text>
              <rect x="214" y="42" width="198" height="82" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="1.6"/>
              <text x="313" y="66" text-anchor="middle" font-size="14" font-weight="black" fill="#78350f">🥞 1号  🥞 2号  🥞 3号</text>
              <text x="313" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">诀窍：不要只放 1 张浪费锅位</text>
              <text x="313" y="112" text-anchor="middle" font-size="12.5" font-weight="black" fill="#be123c">煎熟 3 张饼最少要几分钟？</text>
            `), 'amber'),
            options: [
              { text: '6 分钟', correct: true },
              { text: '8 分钟', correct: false },
              { text: '12 分钟', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '数位猜猜乐 & 最不凑巧配钥匙（最不利原则）',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M60-3-1',
            title: '1. 线索猜数字卡片：十位与个位的秘密',
            prompt: '小卡片背面的秘密数字有 3 条线索：① 在 <strong>10 到 20 之间</strong>；② 是个<strong>单数</strong>；③ <strong>个位上的数字比十位上的数字大 4</strong>。这张卡片上的数字是？',
            tip: '【审题金钥匙】逐条缩小范围：① 在 10 和 20 之间（不可能是 20），说明十位上的数字必定是 1；② 个位比十位（1）大 4：1 + 4 = 5，个位是 5；③ 合起来是 15，而且 15 确实也是单数，三条线索完美符合！',
            visual: wrapVisual(svgFrame(440, 140, '一张写着十位与个位三条线索的神秘数位卡', `
              <rect x="8" y="8" width="424" height="124" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <rect x="44" y="28" width="84" height="84" rx="14" fill="#ffffff" stroke="#4f46e5" stroke-width="2.4"/>
              <text x="86" y="74" text-anchor="middle" font-size="24" font-weight="black" fill="#4f46e5">？</text>
              <text x="86" y="98" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">神秘数字卡</text>
              <text x="158" y="46" font-size="13" font-weight="bold" fill="#312e81">线索①：在 10 到 20 之间</text>
              <text x="158" y="74" font-size="13" font-weight="bold" fill="#312e81">线索②：它是一个单数</text>
              <text x="158" y="102" font-size="13" font-weight="black" fill="#be123c">线索③：个位数字比十位大 4</text>
            `), 'indigo'),
            options: [
              { text: '15', correct: true },
              { text: '14', correct: false },
              { text: '13', correct: false }
            ]
          },
          {
            qid: 'M60-3-2',
            title: '2. 最倒霉试开锁：3 把打乱的钥匙配 3 把锁',
            prompt: '红、黄、蓝三把外观打乱的钥匙配对应的三把锁。假设每次<strong>运气最差（最不凑巧）</strong>，但用聪明的方法只要能肯定谁配谁就不用再插一次。保证把 3 把钥匙和锁<strong>全部配对好</strong>，最多只要试开几次？',
            tip: '【审题金钥匙】超省力的最不利推理！① 配第一把锁：最倒霉试了第 1 把（打不开）、第 2 把（也打不开），那剩下一把不用试插就知道肯定配第一把锁！所以第 1 把锁最多试 2 次；② 配第二把锁：手里还剩 2 把钥匙，试 1 次就知道归谁；③ 最后一把锁自动配好不用试！合计：2 + 1 = 3（次）！',
            visual: wrapVisual(svgFrame(440, 145, '3把彩色钥匙和3把密码锁等待配对，问最倒霉情况最多试开几次', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#9f1239">3 把打乱钥匙配 3 把锁（推理确定的最后 1 步不用真去拧）</text>
              ${['🔑1', '🔑2', '🔑3'].map((k, i) => `
                <rect x="${92 + i * 98}" y="42" width="60" height="30" rx="8" fill="#ffffff" stroke="#e11d48" stroke-width="1.6"/>
                <text x="${122 + i * 98}" y="62" text-anchor="middle" font-size="14" font-weight="bold" fill="#be123c">${k}</text>
              `).join('')}
              ${['🔒甲', '🔒乙', '🔒丙'].map((l, i) => `
                <rect x="${92 + i * 98}" y="88" width="60" height="32" rx="8" fill="#ffe4e6" stroke="#9f1239" stroke-width="1.6"/>
                <text x="${122 + i * 98}" y="109" text-anchor="middle" font-size="14" font-weight="bold" fill="#881337">${l}</text>
              `).join('')}
            `), 'rose'),
            options: [
              { text: '3 次', correct: true },
              { text: '6 次', correct: false },
              { text: '9 次', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '博弈必胜策略 & 只有 1 条船的 7 人渡河问题',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M60-4-1',
            title: '1. 拿糖果必胜法宝：如何确保拿最后一颗糖赢',
            prompt: '盘子里共有 <strong>5 颗糖果</strong>，乐乐和月亮轮流伸手拿，规定每人每次只能拿 <strong>1 颗或 2 颗</strong>，谁<strong>拿到最后一颗</strong>谁就获胜。轮到乐乐先拿，她第一次必须拿几颗才能确保稳赢？',
            tip: '【审题金钥匙】学会从终点往回倒推！想要在最后一回合赢，就得在前一回合让对手面对“还剩 3 颗糖”的死局（因为对手拿 1 颗就剩 2 颗，拿 2 颗就剩 1 颗，剩下的全归我拿到最后一颗！）。桌上有 5 颗糖，要想留给对手 3 颗，乐乐第一次必须拿走：5 - 3 = 2（颗）！',
            visual: wrapVisual(svgFrame(440, 140, '盘子里整齐摆着5颗糖果，标明每次只能拿1颗或2颗，拿最后一颗获胜', `
              <rect x="8" y="8" width="424" height="124" rx="14" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#6b21a8">桌上有 5 颗糖（每次只能拿 1 或 2 颗，拿到最后一颗赢）</text>
              ${[0, 1, 2, 3, 4].map(i => `
                <circle cx="${108 + i * 56}" cy="68" r="14" fill="#f472b6" stroke="#be185d" stroke-width="1.8"/>
                <text x="${108 + i * 56}" y="73" text-anchor="middle" font-size="13" font-weight="black" fill="#ffffff">${i+1}</text>
              `).join('')}
              <text x="220" y="114" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#be123c">乐乐【先拿】，第一次拿几颗就一定能稳赢？</text>
            `), 'purple'),
            options: [
              { text: '2 颗（留 3 颗给对手）', correct: true },
              { text: '1 颗（留 4 颗给对手）', correct: false },
              { text: '拿 1 颗和拿 2 颗结果一样', correct: false }
            ]
          },
          {
            qid: 'M60-4-2',
            title: '2. 7 位同学过河只有 1 条船：最少要划几趟',
            prompt: '<strong>7 位小朋友</strong>来到河边想坐同一条小木船去对岸。这条小木船<strong>每次最多能坐 3 人</strong>，而且船过去之后必须由其中 1 人把船划回来接大家（过河算 1 趟，划回来也算 1 趟）。把 7 人全部送到对岸，最少一共要划几趟？',
            tip: '【审题金钥匙】别算成简单的加法忘了人划船，也别在最后多划回来！一趟一趟演一遍：① 第1趟：3人划过去（2人下船留对岸）；② 第2趟：1人独自划回来（现在对岸有2人，岸边还剩5人）；③ 第3趟：3人再划过去；④ 第4趟：1人划回来（此时对岸已有4人，岸边剩最后3人）；⑤ 第5趟：剩下的3人一齐上船划到对岸，任务圆满完成不需要再划回来！一共刚好 5 趟！',
            visual: wrapVisual(svgFrame(440, 150, '岸边7位小朋友等一条限乘3人的小船过河，过河和划回各算1趟', `
              <rect x="8" y="8" width="424" height="134" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0369a1">共 7 人过河 · 船限坐 3 人（过去 1 趟、划回也算 1 趟）</text>
              <rect x="20" y="42" width="112" height="84" rx="10" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
              <text x="76" y="72" text-anchor="middle" font-size="13" font-weight="black" fill="#166534">出发岸边</text>
              <text x="76" y="96" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">🧒 共 7 人</text>
              <rect x="140" y="42" width="160" height="84" rx="10" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
              <text x="220" y="64" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">⛵ 最多坐 3 人</text>
              ${arrow(156, 82, 282, 82, '#0369a1', 2.4)}
              ${arrow(282, 106, 156, 106, '#e11d48', 2.4)}
              <rect x="308" y="42" width="112" height="84" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="364" y="72" text-anchor="middle" font-size="13" font-weight="black" fill="#92400e">目标对岸</text>
              <text x="364" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">7人全上岸</text>
            `), 'sky'),
            options: [
              { text: '5 趟', correct: true },
              { text: '6 趟', correct: false },
              { text: '3 趟', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '错中求解逆向还原 & 7 天一周期星期几推算',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M60-5-1',
            title: '1. 错中求解大侦探：把“+5”看成了“-5”',
            prompt: '小马虎在做一道加法题 <span class="font-mono font-bold">□ + 5</span> 的时候看花了眼，把加号当成减号，算成了 <span class="font-mono font-bold">□ - 5</span>，最后算出来的错误答案是 <strong>4</strong>。请问原来那道加法题的<strong>正确得数</strong>应该是多少？',
            tip: '【审题金钥匙】错中求解两步走“将错就错求原数，再带回去算对题”！① 先根据算错的算式找回原来的方框：□ - 5 = 4，算出原来的 □ = 4 + 5 = 9；② 再算正确的题：9 + 5 = 14！',
            visual: wrapVisual(svgFrame(440, 140, '看错符号对比框：错误算法框减5等于4，正确算法框加5等于？', `
              <rect x="8" y="8" width="424" height="124" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <rect x="28" y="28" width="180" height="84" rx="12" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.8"/>
              <text x="118" y="52" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#9f1239">看错算成了（错题）</text>
              <text x="118" y="86" text-anchor="middle" font-size="22" font-weight="black" fill="#be123c">□ - 5 = 4</text>
              ${arrow(212, 70, 234, 70, '#78350f', 2.6)}
              <rect x="240" y="28" width="174" height="84" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
              <text x="327" y="52" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#166534">原本应该算（对题）</text>
              <text x="327" y="86" text-anchor="middle" font-size="22" font-weight="black" fill="#15803d">□ + 5 = ？</text>
            `), 'amber'),
            options: [
              { text: '14', correct: true },
              { text: '9', correct: false },
              { text: '10', correct: false }
            ]
          },
          {
            qid: 'M60-5-2',
            title: '2. 妈妈的生日是星期几：7 天一轮回大法',
            prompt: '日历上显示<strong>今天是星期一</strong>（一个星期有 7 天，每 7 天都会循环回到星期一）。再过 <strong>9 天</strong>就是妈妈的生日了，请问妈妈过生日那天是星期几？',
            tip: '【审题金钥匙】“满 7 天就回原地”超级快算法！今天星期一，那么“再过 7 天”正好又是星期一！我们只需要把多出来的 9 - 7 = 2 天往后数就行：过第 8 天是星期二，过第 9 天就是星期三！',
            visual: wrapVisual(svgFrame(440, 140, '一星期日历条标出今天星期一，询问再过9天后是星期几', `
              <rect x="8" y="8" width="424" height="124" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#3730a3">今天是【星期一】，再过 9 天就是妈妈生日（每 7 天一循环）</text>
              ${['一', '二', '三', '四', '五', '六', '日'].map((d, i) => {
                const x = 44 + i * 52;
                const isToday = i === 0;
                return `<rect x="${x}" y="46" width="42" height="50" rx="8" fill="${isToday ? '#fef08a' : '#ffffff'}" stroke="${isToday ? '#be123c' : '#6366f1'}" stroke-width="1.8"/>
                        <text x="${x+21}" y="68" text-anchor="middle" font-size="13" font-weight="black" fill="${isToday ? '#be123c' : '#1e293b'}">周${d}</text>
                        <text x="${x+21}" y="86" text-anchor="middle" font-size="10" font-weight="bold" fill="#64748b">${isToday ? '今天' : ''}</text>`;
              }).join('')}
              <text x="220" y="118" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">先过 7 天又是星期一，再接着数完剩下的天数！</text>
            `), 'indigo'),
            options: [
              { text: '星期三', correct: true },
              { text: '星期二', correct: false },
              { text: '星期四', correct: false }
            ]
          }
        ]
      }
    ]
  }
];
