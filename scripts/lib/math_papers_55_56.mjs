import { wrapVisual, svgFrame, matchStick, matchEq, sudoku4, balanceScale } from './math_svg_helpers.mjs';

export const papers55to56 = [
  // =========================================================================
  // 第 55 套：火柴棒改算式、公共边拼图与算式谜卷
  // =========================================================================
  {
    id: 55,
    subject: 'math',
    unit: '名校专项：火柴数阵与四宫数独',
    title: '第 55 套：一年级数学·火柴棒改算式、公共边拼图与算式谜卷',
    tag: '火柴算谜',
    tagColor: 'bg-amber-100 text-amber-800',
    desc: '经典动手启智火柴棒与数字算式谜专练！含移动 1 根/拿掉 1 根/添上 1 根变正确等式、三角形公共边省火柴、“田”字去棒数正方形、双空天平填数与图形等量代换。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '火柴棒魔法：只移动 1 根使算式成立',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M55-1-1',
            title: '1. 搬搬算符小火柴：6 + 4 = 4（只移动 1 根）',
            prompt: '下面用火柴棒摆出了一道错误算式：<span class="font-mono font-bold">6 + 4 = 4</span>。规定只能<strong>移动 1 根火柴</strong>（拿起来换个地方放），把这道算式变成正确的算式，应该怎么改？',
            tip: '【审题金钥匙】火柴题先找“加号变减号”这一大突破口！把“+”号中间竖着的那 1 根火柴拿走，“+”就变成了“-”；再把拿起来的这 1 根竖着放进数字 6 的右上角缺口，6 就变成了 8！等式变成 8 - 4 = 4，一步成功！',
            visual: wrapVisual(svgFrame(440, 128, '火柴棒摆成的错误算式 6 加 4 等于 4', `
              <rect x="8" y="8" width="424" height="112" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">移动 1 根火柴棒，使下面这个等式成立：</text>
              ${matchEq(126, 48, ['6', '+', '4', '=', '4'], 1)}
            `), 'amber'),
            options: [
              { text: '变成 8 - 4 = 4（把“+”竖棒移到 6 变成 8）', correct: true },
              { text: '变成 9 - 4 = 5（既要改 6 还得把 4 变 5）', correct: false },
              { text: '变成 6 + 4 = 10（1 根不够拼出两位数）', correct: false }
            ]
          },
          {
            qid: 'M55-1-2',
            title: '2. 再试一题移棒变等式：5 + 3 = 6（只移动 1 根）',
            prompt: '又一道错算式：<span class="font-mono font-bold">5 + 3 = 6</span>。同样只允许<strong>移动 1 根火柴</strong>（不能扔掉也不能多拿），下面哪一种改法能让算式正确？',
            tip: '【审题金钥匙】左边 5 + 3 = 8 比右边 6 太大啦！试着把“+”号的那 1 根竖棒拿出来（“+”变成“-”），插到数字 5 右上角的空缺处，5 就变成了 9！算式成了 9 - 3 = 6，严丝合缝！',
            visual: wrapVisual(svgFrame(440, 128, '火柴棒摆成的错误算式 5 加 3 等于 6', `
              <rect x="8" y="8" width="424" height="112" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">只能移动 1 根火柴棒，怎样让等式变正确？</text>
              ${matchEq(126, 48, ['5', '+', '3', '=', '6'], 1)}
            `), 'amber'),
            options: [
              { text: '变成 9 - 3 = 6（把“+”竖棒移给 5 变成 9）', correct: true },
              { text: '变成 6 + 3 = 9（5 和 6 都要动两三根）', correct: false },
              { text: '变成 5 + 3 = 8（必须额外添 1 根火柴）', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '火柴棒加减挑战：拿掉 1 根 vs 添上 1 根',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M55-2-1',
            title: '1. 做“减法瘦身”：拿掉 1 根火柴使等式成立',
            prompt: '看下面摆好的错误等式：<span class="font-mono font-bold">8 - 5 = 9</span>。这次规定<strong>拿掉 1 根火柴</strong>（扔回盒子里，其他火柴不动），就能变成正确的算式，应该怎么改？',
            tip: '【审题金钥匙】左边 8 - 5 算出来本来应该是 3，再看看右边的数字 9：只要把 9 左上角竖着的那 1 根小火柴拿走，9 就干脆利落地变成了 3！等式立刻变成 8 - 5 = 3！',
            visual: wrapVisual(svgFrame(440, 128, '火柴棒摆成的错误算式 8 减 5 等于 9', `
              <rect x="8" y="8" width="424" height="112" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#9f1239">直接拿掉 1 根火柴（不增加不移动）：变成哪道题？</text>
              ${matchEq(126, 48, ['8', '-', '5', '=', '9'], 1)}
            `), 'rose'),
            options: [
              { text: '变成 8 - 5 = 3（拿掉 9 左上角 1 根）', correct: true },
              { text: '变成 9 - 5 = 4（得改 8 还得重拼 4）', correct: false },
              { text: '变成 6 - 5 = 1（得拿掉好几根）', correct: false }
            ]
          },
          {
            qid: 'M55-2-2',
            title: '2. 做“加法增肥”：添上 1 根火柴使等式成立',
            prompt: '观察错误算式：<span class="font-mono font-bold">2 - 2 = 4</span>。现在请从盒子里<strong>再拿出 1 根新火柴添上去</strong>（原来摆好的不动），怎样就变成对的了？',
            tip: '【审题金钥匙】先算 2 和 2 怎样才能得出 4？当然是 2 + 2 = 4 呀！只要从盒子里拿 1 根火柴竖着搭在原来的减号“-”上，减号立刻变成加号“+”，算式就成为 2 + 2 = 4！',
            visual: wrapVisual(svgFrame(440, 128, '火柴棒摆成的错误算式 2 减 2 等于 4', `
              <rect x="8" y="8" width="424" height="112" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="29" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">多添上 1 根火柴（原来的不准挪动）：变哪道算式？</text>
              ${matchEq(126, 48, ['2', '-', '2', '=', '4'], 1)}
            `), 'emerald'),
            options: [
              { text: '变成 2 + 2 = 4（在减号上添 1 根变“+”）', correct: true },
              { text: '变成 6 - 2 = 4（添 1 根把 2 变不了 6）', correct: false },
              { text: '变成 8 - 2 = 6（需要改很多根）', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '火柴拼几何图形：共用公共边 & 去棒数正方形',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M55-3-1',
            title: '1. 共用斜边拼三角形：摆 3 个共需几根火柴',
            prompt: '用火柴棒一排摆出 3 个紧紧挨在一起的正三角形（像下图的梯子一样，相邻两个三角形<strong>共用中间 1 根斜边</strong>）。这样摆完 3 个三角形，一共只要多少根火柴？',
            tip: '【审题金钥匙】单独摆 3 个三角形要 3 + 3 + 3 = 9 根，但中间排紧了会省火柴！第 1 个三角形用 3 根；接着第 2 个借用了第 1 个的斜边，只要再添 2 根；第 3 个同样再添 2 根。一共：3 + 2 + 2 = 7（根）！',
            visual: wrapVisual(svgFrame(440, 150, '7根火柴棒共用公共边横向连排拼出3个正三角形', `
              <rect x="8" y="8" width="424" height="134" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">相邻三角形共用 1 根公共边：一共用了多少根火柴？</text>
              ${matchStick(160, 118, 220, 118)}
              ${matchStick(160, 118, 190, 66)}
              ${matchStick(190, 66, 220, 118)}
              ${matchStick(190, 66, 250, 66)}
              ${matchStick(220, 118, 250, 66)}
              ${matchStick(250, 66, 280, 118)}
              ${matchStick(220, 118, 280, 118)}
              <text x="220" y="136" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#475569">数一数或者算一算：3 + 2 + 2 = ？根</text>
            `), 'sky'),
            options: [
              { text: '7 根', correct: true },
              { text: '9 根', correct: false },
              { text: '6 根', correct: false }
            ]
          },
          {
            qid: 'M55-3-2',
            title: '2. 12 根火柴拼“田”字：拿掉 2 根剩几个正方形',
            prompt: '原本 12 根火柴拼成了一个完整的“田”字（有 5 个正方形）。现在把图上用<strong>灰虚线标出的 2 根火柴拿走</strong>，剩下的实线火柴图形里，一共还能数出多少个正方形？',
            tip: '【审题金钥匙】拿走里面的上竖和左横那 2 根火柴后，左上、右上、左下三个小格的墙打通连成一片，都不再是正方形啦！认真找完整闭合的正方形，只剩下：① 右下角 1 个完整的小正方形；② 最外圈 1 个完整的大正方形。合计 1 + 1 = 2（个）！',
            visual: wrapVisual(svgFrame(440, 165, '田字格火柴，中间上竖和左横变为虚线表示拿掉，其余实线留存', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#3730a3">拿掉 2 根灰虚线火柴后，剩下的图里还有几个正方形？</text>
              ${matchStick(164, 38, 220, 38)}
              ${matchStick(220, 38, 276, 38)}
              ${matchStick(164, 150, 220, 150)}
              ${matchStick(220, 150, 276, 150)}
              ${matchStick(164, 38, 164, 94)}
              ${matchStick(164, 94, 164, 150)}
              ${matchStick(276, 38, 276, 94)}
              ${matchStick(276, 94, 276, 150)}
              ${matchStick(220, 38, 220, 94, true)}
              ${matchStick(164, 94, 220, 94, true)}
              ${matchStick(220, 94, 220, 150)}
              ${matchStick(220, 94, 276, 94)}
            `), 'indigo'),
            options: [
              { text: '2 个（1 个大正方形 + 1 个小正方形）', correct: true },
              { text: '3 个（少掉 2 根只少 1 个小格）', correct: false },
              { text: '1 个（只剩最外圈大正方形）', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '数字卡片巧填算式 & 连等式平衡配对',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M55-4-1',
            title: '1. 卡片不重复配对平衡：2 + ？ = □ + □',
            prompt: '手里有四张卡片 <strong>2、3、5、6</strong>，数字卡片 <strong>2</strong> 已经固定摆在最左边。请把剩下的 <strong>3、5、6</strong> 放进三个空框里（每张只用一次），使左右两边得数相等。请问加号右边的五角星格里应该放几？',
            tip: '【审题金钥匙】卡片平衡巧算：四张牌合起来一共 2 + 3 + 5 + 6 = 16，要平均分给等号左右两边，每一边得数都必须是 8（8 + 8 = 16）！所以左边 2 + ★ = 8，星格里必须放 6；右边正好 3 + 5 = 8！',
            visual: wrapVisual(svgFrame(440, 145, '备选卡片 3 5 6，等式 2 加 问号 等于 空 加 空', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">剩下卡片： [ 3 ]   [ 5 ]   [ 6 ]  （每张只用一次）</text>
              <rect x="52" y="54" width="46" height="44" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
              <text x="75" y="83" text-anchor="middle" font-size="22" font-weight="black" fill="#14532d">2</text>
              <text x="115" y="84" text-anchor="middle" font-size="22" font-weight="black" fill="#1e293b">+</text>
              <rect x="132" y="54" width="52" height="44" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2.4"/>
              <text x="158" y="83" text-anchor="middle" font-size="18" font-weight="black" fill="#be123c">★</text>
              <text x="206" y="84" text-anchor="middle" font-size="22" font-weight="black" fill="#1e293b">=</text>
              <rect x="230" y="54" width="46" height="44" rx="8" fill="#ffffff" stroke="#475569" stroke-width="1.8" stroke-dasharray="4,2"/>
              <text x="293" y="84" text-anchor="middle" font-size="22" font-weight="black" fill="#1e293b">+</text>
              <rect x="310" y="54" width="46" height="44" rx="8" fill="#ffffff" stroke="#475569" stroke-width="1.8" stroke-dasharray="4,2"/>
              <text x="220" y="122" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">使等式左右两边算出来的得数一样大，★ 填几？</text>
            `), 'emerald'),
            options: [
              { text: '6', correct: true },
              { text: '5', correct: false },
              { text: '3', correct: false }
            ]
          },
          {
            qid: 'M55-4-2',
            title: '2. 连等减法跷跷板：三个得数都等于几',
            prompt: '把数字卡片 <strong>1、2、3</strong> 不重复地分别填入下面三个方框里：<strong>6 - □ = 5 - □ = 4 - □</strong>，使得这三道减法算出来的<strong>结果完全一样</strong>。这个相等的结果是几？',
            tip: '【审题金钥匙】减法连等口诀：“大数配大数，小数配小数”！6、5、4 依次少 1，要让得数相等，减去的数也要依次少 1！所以 6 减最大的 3（6 - 3 = 3），5 减中间的 2（5 - 2 = 3），4 减最小的 1（4 - 1 = 3），结果都是 3！',
            visual: wrapVisual(svgFrame(440, 130, '三道连等减法算式 6减框 等于 5减框 等于 4减框', `
              <rect x="8" y="8" width="424" height="114" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="220" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#3730a3">把 [ 1 ] [ 2 ] [ 3 ] 不重复填进三个框，使三边都相等：</text>
              <text x="58" y="82" text-anchor="middle" font-size="22" font-weight="black" fill="#1e293b">6 -</text>
              <rect x="84" y="55" width="38" height="38" rx="8" fill="#ffffff" stroke="#4f46e5" stroke-width="2" stroke-dasharray="4,2"/>
              <text x="138" y="82" text-anchor="middle" font-size="22" font-weight="black" fill="#4f46e5">=</text>
              <text x="176" y="82" text-anchor="middle" font-size="22" font-weight="black" fill="#1e293b">5 -</text>
              <rect x="202" y="55" width="38" height="38" rx="8" fill="#ffffff" stroke="#4f46e5" stroke-width="2" stroke-dasharray="4,2"/>
              <text x="256" y="82" text-anchor="middle" font-size="22" font-weight="black" fill="#4f46e5">=</text>
              <text x="294" y="82" text-anchor="middle" font-size="22" font-weight="black" fill="#1e293b">4 -</text>
              <rect x="320" y="55" width="38" height="38" rx="8" fill="#ffffff" stroke="#4f46e5" stroke-width="2" stroke-dasharray="4,2"/>
              <text x="386" y="82" text-anchor="middle" font-size="16" font-weight="bold" fill="#be123c">= ( ？ )</text>
            `), 'indigo'),
            options: [
              { text: '3', correct: true },
              { text: '2', correct: false },
              { text: '4', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '同数天平双空推理 & 三步图形虫食算',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M55-5-1',
            title: '1. 天平左右放着同一个数：12 - ★ = 4 + ★',
            prompt: '看下面稳稳保持平衡的天平：左边写着 <span class="font-mono font-bold">12 - ★</span>，右边写着 <span class="font-mono font-bold">4 + ★</span>，两个星星代表<strong>同一个数字</strong>。想一想，★ 是几？',
            tip: '【审题金钥匙】两边本来相差 12 - 4 = 8。要想让 12 减少一点、4 增加同样多后正好相遇打平，就要把相差的 8 对半拆成 4 和 4！检验一下：12 - 4 = 8，4 + 4 = 8，两边都是 8，完全正确！',
            visual: wrapVisual(svgFrame(440, 145, '平衡天平左盘写12减星，右盘写4加星', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">相同的“★”填同一个数，使天平两边一样重：</text>
              ${balanceScale(220, 66, '12 - ★', '4 + ★', 'even')}
            `), 'amber'),
            options: [
              { text: '4', correct: true },
              { text: '6', correct: false },
              { text: '8', correct: false }
            ]
          },
          {
            qid: 'M55-5-2',
            title: '2. 图形顺藤摸瓜算式谜：算算圆点 ● 等于几',
            prompt: '下面的三行图形等式里，相同的图形表示同样的数：① <strong>★ + ★ = 14</strong>；② <strong>★ + △ = 12</strong>；③ <strong>△ - ● = 2</strong>。一步步往后推算，圆点 <strong>●</strong> 代表数字几？',
            tip: '【审题金钥匙】等量代换像解锁密码箱一样一层层打开：① 7 + 7 = 14，所以 ★ = 7；② 把 7 带入第二行，7 + △ = 12，算出 △ = 5；③ 把 5 带入第三行，5 - ● = 2，所以 ● = 3！',
            visual: wrapVisual(svgFrame(440, 145, '三行图形算式谜：双星等于14，星加三角等于12，三角减圆点等于2', `
              <rect x="8" y="8" width="424" height="129" rx="14" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.6"/>
              <text x="220" y="34" text-anchor="middle" font-size="16" font-weight="bold" fill="#b45309">★  +  ★  =  14</text>
              <text x="220" y="68" text-anchor="middle" font-size="16" font-weight="bold" fill="#1d4ed8">★  +  △  =  12</text>
              <text x="220" y="102" text-anchor="middle" font-size="16" font-weight="bold" fill="#be123c">△  -  ●  =  2   （求：● = ？ ）</text>
              <text x="220" y="126" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#64748b">顺藤摸瓜：先算 ★，再算 △，最后就能解出 ●！</text>
            `), 'purple'),
            options: [
              { text: '3', correct: true },
              { text: '5', correct: false },
              { text: '7', correct: false }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 第 56 套：十字三角数阵、洛书雏形与四宫数独卷
  // =========================================================================
  {
    id: 56,
    subject: 'math',
    unit: '名校专项：火柴数阵与四宫数独',
    title: '第 56 套：一年级数学·十字三角数阵、洛书雏形与四宫数独卷',
    tag: '数阵数独',
    tagColor: 'bg-purple-100 text-purple-800',
    desc: '重点小学奥数思维核心模块！系统涵盖十字交叉重叠中心数、三角形幻和数阵、辐射七星阵、古代九宫洛书、行/列/宫唯一数法四宫数字数独、水果趣味数独及加法金字塔。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '十字交叉重叠原理 & 简单三角数阵',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M56-1-1',
            title: '1. 十字形填 1~5：谁必须站最正中间',
            prompt: '把数字 <strong>1、2、3、4、5</strong> 不重复地填进下面“十”字形排列的 5 个圆圈里，要求<strong>横着一排三个数之和 = 9，竖着一排三个数之和也 = 9</strong>。正中间的黄色圆圈必须填数字几？',
            tip: '【审题金钥匙】超级好用的“重叠数秘诀”：横行加竖行一共等于 9 + 9 = 18，其中正中间那个数被加了两次！而 1 + 2 + 3 + 4 + 5 = 15，多出来的 18 - 15 = 3 就是中间数！验算一下：横填 1-3-5（和为 9），竖填 2-3-4（和为 9）！',
            visual: wrapVisual(svgFrame(440, 155, '十字形5个圆圈，正中心标问号，卡片为1、2、3、4、5', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="112" y="54" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">备选数字（不重复）</text>
              <text x="112" y="80" text-anchor="middle" font-size="14" font-weight="black" fill="#b45309">1  、 2  、 3  、 4  、 5</text>
              <text x="112" y="108" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#78350f">横竖三数和都是 9</text>
              <line x1="305" y1="32" x2="305" y2="128" stroke="#d97706" stroke-width="2.4"/>
              <line x1="257" y1="80" x2="353" y2="80" stroke="#d97706" stroke-width="2.4"/>
              <circle cx="305" cy="34" r="16" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
              <circle cx="305" cy="126" r="16" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
              <circle cx="259" cy="80" r="16" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
              <circle cx="351" cy="80" r="16" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
              <circle cx="305" cy="80" r="18" fill="#fef08a" stroke="#be123c" stroke-width="2.6"/>
              <text x="305" y="86" text-anchor="middle" font-size="17" font-weight="black" fill="#be123c">？</text>
            `), 'amber'),
            options: [
              { text: '3', correct: true },
              { text: '1', correct: false },
              { text: '5', correct: false }
            ]
          },
          {
            qid: 'M56-1-2',
            title: '2. 三角形数阵填 1~6：每条边加起来都等于 9',
            prompt: '把 <strong>1、2、3、4、5、6</strong> 填进三角形的 6 个圆圈里，使每条边三个数加起来都等于 <strong>9</strong>。三个顶角已经填好 1、2、3，左边“1”和“3”中间的黄色圈里应该填几？',
            tip: '【审题金钥匙】三角形三条边是独立的加减题！盯着左边那条边看：顶上是 1，左下角是 3，整条边三个数相加要等于 9，所以中间：9 - 1 - 3 = 5！顺便检查另外两条边：3+4+2=9，1+6+2=9，把 4、5、6 全用齐啦！',
            visual: wrapVisual(svgFrame(440, 165, '三角形6圈数阵：顶1，左下3，右下2，求1和3中间数使每边和为9', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#166534">每条边上三个圆圈相加都等于 9：“？”填几？</text>
              <line x1="220" y1="45" x2="148" y2="137" stroke="#15803d" stroke-width="2.6"/>
              <line x1="220" y1="45" x2="292" y2="137" stroke="#15803d" stroke-width="2.6"/>
              <line x1="148" y1="137" x2="292" y2="137" stroke="#15803d" stroke-width="2.6"/>
              <circle cx="220" cy="45" r="15" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
              <text x="220" y="51" text-anchor="middle" font-size="15" font-weight="black" fill="#14532d">1</text>
              <circle cx="148" cy="137" r="15" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
              <text x="148" y="143" text-anchor="middle" font-size="15" font-weight="black" fill="#14532d">3</text>
              <circle cx="292" cy="137" r="15" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
              <text x="292" y="143" text-anchor="middle" font-size="15" font-weight="black" fill="#14532d">2</text>
              <circle cx="184" cy="91" r="16" fill="#fef08a" stroke="#be123c" stroke-width="2.4"/>
              <text x="184" y="97" text-anchor="middle" font-size="16" font-weight="black" fill="#be123c">？</text>
              <circle cx="256" cy="91" r="15" fill="#ffffff" stroke="#15803d" stroke-width="2"/>
              <circle cx="220" cy="137" r="15" fill="#ffffff" stroke="#15803d" stroke-width="2"/>
            `), 'emerald'),
            options: [
              { text: '5', correct: true },
              { text: '4', correct: false },
              { text: '6', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '两步顺推数阵 & 中心辐射星阵',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M56-2-1',
            title: '1. 两步递推三角数阵：先算左角，再算底边“？”',
            prompt: '把 <strong>1~6</strong> 填入下图的 6 个圆圈，使每条边上的三个数相加都等于 <strong>10</strong>。已知顶角是 1，左边中间是 6，右下角是 5。请分两步往后算，底边正中间的 <strong>？</strong> 应填几？',
            tip: '【审题金钥匙】第一步先看已知数最多的左边这条线：1 + 6 + 左下角 = 10，算出左下角是 3！第二步马上看底边：3 + ？ + 5 = 10，10 - 3 - 5 = 2，所以“？”必须填 2！（最后右边中间填 4，1+4+5=10 全部完美！）',
            visual: wrapVisual(svgFrame(440, 165, '三角形6圈数阵：顶1，左中6，右下5，求底边中？使每边和为10', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0369a1">每条边三数之和都等于 10：先推左角，再求底边“？”</text>
              <line x1="220" y1="45" x2="148" y2="137" stroke="#0284c7" stroke-width="2.6"/>
              <line x1="220" y1="45" x2="292" y2="137" stroke="#0284c7" stroke-width="2.6"/>
              <line x1="148" y1="137" x2="292" y2="137" stroke="#0284c7" stroke-width="2.6"/>
              <circle cx="220" cy="45" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
              <text x="220" y="51" text-anchor="middle" font-size="15" font-weight="black" fill="#0c4a6e">1</text>
              <circle cx="184" cy="91" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
              <text x="184" y="97" text-anchor="middle" font-size="15" font-weight="black" fill="#0c4a6e">6</text>
              <circle cx="148" cy="137" r="15" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
              <circle cx="292" cy="137" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
              <text x="292" y="143" text-anchor="middle" font-size="15" font-weight="black" fill="#0c4a6e">5</text>
              <circle cx="256" cy="91" r="15" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
              <circle cx="220" cy="137" r="16" fill="#fef08a" stroke="#be123c" stroke-width="2.4"/>
              <text x="220" y="143" text-anchor="middle" font-size="16" font-weight="black" fill="#be123c">？</text>
            `), 'sky'),
            options: [
              { text: '2', correct: true },
              { text: '4', correct: false },
              { text: '3', correct: false }
            ]
          },
          {
            qid: 'M56-2-2',
            title: '2. 辐射七星连珠数阵：每条线三个数都凑 12',
            prompt: '把 1~7 填进下面穿过中心的 3 条直线上，要求<strong>每一条直线上三个圆圈相加都等于 12</strong>。已知中心是 4，横排右边已经有 2，最左边黄色圈里的 <strong>？</strong> 应该填几？',
            tip: '【审题金钥匙】眼睛沿着水平那条直线看：从左到右分别是“？ — 4 — 2”，加起来必须等于 12！算算 12 - 4 - 2 = 6！检查另一条直线：1 + 4 + 7 = 12，第三条斜线填入 3 和 5（3 + 4 + 5 = 12）全部齐活！',
            visual: wrapVisual(svgFrame(440, 165, '3条线穿过中心4的七圆星阵，一条1-4-7，横线？-4-2', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.6"/>
              <text x="220" y="24" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#6b21a8">每条穿过中心的直线 3 个数之和都是 12：“？”是几？</text>
              <line x1="145" y1="88" x2="295" y2="88" stroke="#7e22ce" stroke-width="2.4"/>
              <line x1="182" y1="44" x2="258" y2="132" stroke="#7e22ce" stroke-width="2.4"/>
              <line x1="258" y1="44" x2="182" y2="132" stroke="#7e22ce" stroke-width="2.4"/>
              <circle cx="220" cy="88" r="15" fill="#f3e8ff" stroke="#7e22ce" stroke-width="2.2"/>
              <text x="220" y="94" text-anchor="middle" font-size="15" font-weight="black" fill="#581c87">4</text>
              <circle cx="145" cy="88" r="16" fill="#fef08a" stroke="#be123c" stroke-width="2.4"/>
              <text x="145" y="94" text-anchor="middle" font-size="16" font-weight="black" fill="#be123c">？</text>
              <circle cx="295" cy="88" r="15" fill="#ffffff" stroke="#7e22ce" stroke-width="2"/>
              <text x="295" y="94" text-anchor="middle" font-size="15" font-weight="black" fill="#1e293b">2</text>
              <circle cx="182" cy="44" r="14" fill="#ffffff" stroke="#7e22ce" stroke-width="2"/>
              <text x="182" y="50" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">1</text>
              <circle cx="258" cy="132" r="14" fill="#ffffff" stroke="#7e22ce" stroke-width="2"/>
              <text x="258" y="138" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">7</text>
              <circle cx="258" cy="44" r="14" fill="#ffffff" stroke="#7e22ce" stroke-width="2"/>
              <circle cx="182" cy="132" r="14" fill="#ffffff" stroke="#7e22ce" stroke-width="2"/>
            `), 'purple'),
            options: [
              { text: '6', correct: true },
              { text: '5', correct: false },
              { text: '3', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '古老智慧九宫格（洛书雏形）',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M56-3-1',
            title: '1. 标准“洛书”九宫图：找出失踪的数字',
            prompt: '古代有一张神奇的九宫格“洛书”：<strong>每一横行、每一竖列、两条大斜线</strong>上的三个数相加都等于 <strong>15</strong>。看下面缺了一角的洛书，蓝色高亮格 <strong>？</strong> 应该是几？',
            tip: '【审题金钥匙】既可以看第二横行：3 + 5 + ？ = 15，算出 15 - 3 - 5 = 7；也可以用第三竖列再核对一遍：6 + ？ + 2 = 15，同样是 7！双重检验超稳妥！',
            visual: wrapVisual(svgFrame(440, 165, '3乘3洛书九宫格：8 1 6 / 3 5 ？ / 4 9 2', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#3730a3">每行、每列、每条斜线 3 个数和都是 15：“？”填几？</text>
              ${(() => {
                const g = [['8','1','6'],['3','5','？'],['4','9','2']];
                let out = '';
                for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
                  const x = 166 + c * 36, y = 38 + r * 36;
                  const isQ = g[r][c] === '？';
                  out += `<rect x="${x}" y="${y}" width="36" height="36" fill="${isQ ? '#fef08a' : '#ffffff'}" stroke="#312e81" stroke-width="2"/>
                          <text x="${x+18}" y="${y+24}" text-anchor="middle" font-size="16" font-weight="black" fill="${isQ ? '#be123c' : '#1e293b'}">${g[r][c]}</text>`;
                }
                return out;
              })()}
            `), 'indigo'),
            options: [
              { text: '7', correct: true },
              { text: '9', correct: false },
              { text: '6', correct: false }
            ]
          },
          {
            qid: 'M56-3-2',
            title: '2. 未知幻和巧破洛书：自己找出“每一排都加几”',
            prompt: '下面也是一个神秘九宫格，规定每一横行、每一竖列、每条对角斜线三个数加起来都相等（但没直接告诉你等于几）。请先找出一条<strong>已经填满 3 个数的线</strong>算出这个总和，再推出上面中间的 <strong>？</strong> 是几？',
            tip: '【审题金钥匙】宝藏思路！斜着看从左上到右下（2、5、8）或者最底下一行（4、3、8）都填满了：2 + 5 + 8 = 15，4 + 3 + 8 = 15！原来每排都凑 15！马上看中间这一竖列：？ + 5 + 3 = 15，所以 ？ = 15 - 8 = 7！',
            visual: wrapVisual(svgFrame(440, 165, '神秘九宫格：左上2，中5，右中1，底排4 3 8，求顶排中间？', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#9f1239">每排每列斜线和都相同：先找满排算总和，再求“？”！</text>
              ${(() => {
                const g = [['2','？',''],['','5','1'],['4','3','8']];
                let out = '';
                for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
                  const x = 166 + c * 36, y = 38 + r * 36;
                  const val = g[r][c];
                  const isQ = val === '？';
                  out += `<rect x="${x}" y="${y}" width="36" height="36" fill="${isQ ? '#fef08a' : val ? '#ffffff' : '#f8fafc'}" stroke="#9f1239" stroke-width="2"/>`;
                  if (val) out += `<text x="${x+18}" y="${y+24}" text-anchor="middle" font-size="16" font-weight="black" fill="${isQ ? '#be123c' : '#1e293b'}">${val}</text>`;
                }
                return out;
              })()}
            `), 'rose'),
            options: [
              { text: '7', correct: true },
              { text: '6', correct: false },
              { text: '9', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '名校思维热榜：四宫数独（行 · 列 · 宫唯一排除）',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M56-4-1',
            title: '1. 入门四宫数独：缺啥补啥显神威',
            prompt: '四宫数独规则：每一横行、每一竖列、以及粗线框住的每个 2×2 小四格里，都要填入 <strong>1、2、3、4</strong> 且<strong>不能重复</strong>。请问黄色标着 <strong>？</strong> 的格子里应该填数字几？',
            tip: '【审题金钥匙】这一行是第二横行：[ 3  4  1  ？ ]，1、3、4 已经站好位啦，只缺一个数字 2！（顺便检查这一竖列有 4、3，小四格里也有 4、1，填 2 完全不冲突！）',
            visual: wrapVisual(svgFrame(440, 175, '4乘4数字数独图，第二行第4列为黄色问号格', `
              <rect x="8" y="8" width="424" height="159" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="220" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0369a1">每行、每列、每个粗线四格都必须有 1~4 不重复：“？”填几？</text>
              ${sudoku4(160, 38, 30, [[1,2,0,4],[3,4,1,0],[0,1,4,3],[4,3,2,0]], [1, 3])}
            `), 'sky'),
            options: [
              { text: '2', correct: true },
              { text: '3', correct: false },
              { text: '4', correct: false }
            ]
          },
          {
            qid: 'M56-4-2',
            title: '2. 进阶四宫数独：同时看“横行 + 竖列”交叉排除',
            prompt: '难度提高一点点！在下面这个四宫数独里，如果只看第 1 横行，有两个空格不知道谁填 1、谁填 2；如果再连着第 3 竖列一起看，就能一下子锁定 <strong>？</strong>！请问黄色格里必须填几？',
            tip: '【审题金钥匙】超帅的“行列交叉排除法”！看第 1 横行：已经有 3 和 4，只缺 1 和 2；再往下看“？”所在的第 3 竖列，下面已经有一个数字 1 站着了，所以“？”绝不能再填 1，只能填 2！',
            visual: wrapVisual(svgFrame(440, 175, '4乘4数独，第1行第3列为问号格，第1行有3和4，第3列有1和3', `
              <rect x="8" y="8" width="424" height="159" rx="14" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.6"/>
              <text x="220" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#6b21a8">结合“横行 + 竖列 + 小四宫”共同排除：黄色“？”填几？</text>
              ${sudoku4(160, 38, 30, [[0,3,0,4],[2,0,1,0],[3,1,0,2],[4,0,3,0]], [0, 2])}
            `), 'purple'),
            options: [
              { text: '2', correct: true },
              { text: '1', correct: false },
              { text: '4', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '水果四宫数独 & 数字金字塔逆推',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M56-5-1',
            title: '1. 趣味水果四宫数独：巧推第 2 行里的“？”',
            prompt: '每横行、每竖列、每粗框四格里都有四种水果：<strong>🍎、🍌、🍇、🍊</strong> 且不能重复。先填出第 1 行里缺的那个水果，就能算出右上粗框里 <strong>？</strong> 代表哪种水果啦！',
            tip: '【审题金钥匙】两步跳数独解谜：① 看最上面第 1 行，已经有 🍎、🍌、🍇，那么第 1 行第 3 格一定是缺的 🍊！② 现在看右上角那个 2×2 粗线小四格：已有 🍊、🍇、🍎，唯独缺 🍌，所以 ？ = 🍌（香蕉）！',
            visual: wrapVisual(svgFrame(440, 185, '4乘4水果四宫数独图，四种水果苹果香蕉葡萄橘子，问号在第2行第3列', `
              <rect x="8" y="8" width="424" height="169" rx="14" fill="#ecfdf5" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="26" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#065f46">每行/每列/每宫都有 🍎 🍌 🍇 🍊 各 1 个：问号格放谁？</text>
              ${sudoku4(156, 40, 32, [[2,1,0,3],[0,3,0,1],[1,0,3,4],[3,4,1,0]], [1, 2], { 1: '🍎', 2: '🍌', 3: '🍇', 4: '🍊' })}
            `), 'emerald'),
            options: [
              { text: '🍌（香蕉）', correct: true },
              { text: '🍊（橘子）', correct: false },
              { text: '🍎（苹果）', correct: false }
            ]
          },
          {
            qid: 'M56-5-2',
            title: '2. 加法数字金字塔：下面两格之和等于上面格',
            prompt: '看下面这个神奇的金字塔积木：规则是<strong>下面紧挨着的两个数加起来，等于压在它们上面那一格的数</strong>（比如 ★ + 4 = 9）。从顶到底验证一下，五角星 <strong>★</strong> 里应该填数字几？',
            tip: '【审题金钥匙】由中层右边那块“9”直接往下看：★ + 4 = 9，算出 ★ = 9 - 4 = 5！再往上检验一遍：底层 3 + 5 = 8（中层左格是 8），最顶层 8 + 9 = 17，全塔完美合拢！',
            visual: wrapVisual(svgFrame(440, 155, '三层砖块加法金字塔：顶17，中左空 中右9，底3 星号 4', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="220" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">规律：下面相邻两块相加 = 上面那一块</text>
              <rect x="190" y="34" width="60" height="32" rx="4" fill="#fde047" stroke="#b45309" stroke-width="2"/>
              <text x="220" y="56" text-anchor="middle" font-size="16" font-weight="black" fill="#78350f">17</text>
              <rect x="160" y="66" width="60" height="32" rx="4" fill="#ffffff" stroke="#b45309" stroke-width="2"/>
              <text x="190" y="88" text-anchor="middle" font-size="14" font-weight="bold" fill="#94a3b8"> </text>
              <rect x="220" y="66" width="60" height="32" rx="4" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
              <text x="250" y="88" text-anchor="middle" font-size="16" font-weight="black" fill="#78350f">9</text>
              <rect x="130" y="98" width="60" height="32" rx="4" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
              <text x="160" y="120" text-anchor="middle" font-size="16" font-weight="black" fill="#78350f">3</text>
              <rect x="190" y="98" width="60" height="32" rx="4" fill="#fef08a" stroke="#be123c" stroke-width="2.4"/>
              <text x="220" y="120" text-anchor="middle" font-size="17" font-weight="black" fill="#be123c">★</text>
              <rect x="250" y="98" width="60" height="32" rx="4" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
              <text x="280" y="120" text-anchor="middle" font-size="16" font-weight="black" fill="#78350f">4</text>
            `), 'amber'),
            options: [
              { text: '5', correct: true },
              { text: '6', correct: false },
              { text: '4', correct: false }
            ]
          }
        ]
      }
    ]
  }
];
