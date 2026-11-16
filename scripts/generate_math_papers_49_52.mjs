import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const wrapVisual = (svg, accent = 'sky') => {
  const styles = {
    sky: 'bg-sky-50/70 border-sky-200',
    amber: 'bg-amber-50/70 border-amber-200',
    emerald: 'bg-emerald-50/70 border-emerald-200',
    indigo: 'bg-indigo-50/70 border-indigo-200',
    purple: 'bg-purple-50/70 border-purple-200',
    rose: 'bg-rose-50/70 border-rose-200'
  }[accent] || 'bg-sky-50/70 border-sky-200';
  return `<div class="w-full p-2.5 ${styles} border rounded-xl flex justify-center">${svg}</div>`;
};

const svgFrame = (w, h, label, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}" class="w-full max-w-[460px] h-auto block mx-auto font-sans">${body}</svg>`;

// Vector Duck: dir = 'left' | 'right' (base drawn facing LEFT, flip for RIGHT)
const duck = (x, y, dir = 'left', scale = 1, fill = '#facc15', stroke = '#b45309') => {
  const sx = dir === 'right' ? -scale : scale;
  return `<g transform="translate(${x},${y}) scale(${sx},${scale})">
    <path d="M12,1 L21,-3 L15,7 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.4" stroke-linejoin="round"/>
    <ellipse cx="4" cy="6" rx="11.5" ry="7.5" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
    <path d="M1,4 Q8,1 11,6 Q6,9 1,4 Z" fill="#fde047" stroke="${stroke}" stroke-width="1.1"/>
    <circle cx="-7" cy="-4.5" r="6.8" fill="#fef08a" stroke="${stroke}" stroke-width="1.5"/>
    <path d="M-13,-5 L-22,-2.5 L-13,-0.5 Z" fill="#ea580c" stroke="#9a3412" stroke-width="1.1" stroke-linejoin="round"/>
    <circle cx="-9.5" cy="-6" r="1.45" fill="#0f172a"/>
    <line x1="1" y1="13" x2="-1" y2="17" stroke="#c2410c" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="7" y1="13" x2="5" y2="17" stroke="#c2410c" stroke-width="1.4" stroke-linecap="round"/>
  </g>`;
};

// Vector Chick: dir = 'left' | 'right'
const chick = (x, y, dir = 'left', scale = 1) => {
  const sx = dir === 'right' ? -scale : scale;
  return `<g transform="translate(${x},${y}) scale(${sx},${scale})">
    <path d="M10,2 L16,-2 L11,7 Z" fill="#fde047" stroke="#a16207" stroke-width="1.3"/>
    <ellipse cx="3" cy="5" rx="9" ry="7" fill="#fef08a" stroke="#a16207" stroke-width="1.4"/>
    <circle cx="-6" cy="-4" r="5.8" fill="#fef08a" stroke="#a16207" stroke-width="1.4"/>
    <path d="M-8,-9.5 Q-6,-14 -4,-9.5 Q-2,-13 0,-9" fill="#ef4444" stroke="#b91c1c" stroke-width="1"/>
    <path d="M-11.5,-4.5 L-18,-2.5 L-11.5,-0.5 Z" fill="#f97316" stroke="#9a3412" stroke-width="1"/>
    <circle cx="-8" cy="-5.2" r="1.3" fill="#0f172a"/>
  </g>`;
};

// Vector Swan: dir = 'left' | 'right'
const swan = (x, y, dir = 'left', scale = 1) => {
  const sx = dir === 'right' ? -scale : scale;
  return `<g transform="translate(${x},${y}) scale(${sx},${scale})">
    <ellipse cx="4" cy="7" rx="11" ry="6.5" fill="#ffffff" stroke="#475569" stroke-width="1.4"/>
    <path d="M-4,5 Q-10,-6 -4,-11 Q-1,-13 2,-10" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    <path d="M-4,5 Q-10,-6 -4,-11" fill="none" stroke="#475569" stroke-width="1.4" stroke-linecap="round"/>
    <circle cx="-4" cy="-10.5" r="4" fill="#ffffff" stroke="#475569" stroke-width="1.3"/>
    <path d="M-8,-11 L-14,-9.5 L-8,-8 Z" fill="#f97316" stroke="#9a3412" stroke-width="0.9"/>
    <circle cx="-5.5" cy="-11.5" r="1.1" fill="#0f172a"/>
    <path d="M-2,4 Q6,1 13,5" fill="none" stroke="#64748b" stroke-width="1.2"/>
  </g>`;
};

// Vector Songbird: dir = 'left' | 'right'
const bird = (x, y, dir = 'left', color = '#38bdf8', stroke = '#0369a1') => {
  const sx = dir === 'right' ? -1 : 1;
  return `<g transform="translate(${x},${y}) scale(${sx},1)">
    <path d="M9,1 L17,-4 L12,6 Z" fill="${color}" stroke="${stroke}" stroke-width="1.3"/>
    <ellipse cx="2" cy="3" rx="9" ry="6.5" fill="${color}" stroke="${stroke}" stroke-width="1.4"/>
    <circle cx="-6" cy="-3.5" r="5" fill="${color}" stroke="${stroke}" stroke-width="1.4"/>
    <path d="M-10.5,-4 L-16,-2.5 L-10.5,-1 Z" fill="#f59e0b" stroke="#9a3412" stroke-width="0.9"/>
    <circle cx="-7.5" cy="-4.5" r="1.2" fill="#0f172a"/>
  </g>`;
};

// Vector Bunny: dir = 'left' | 'right'
const bunny = (x, y, dir = 'left', scale = 1) => {
  const sx = dir === 'right' ? -scale : scale;
  return `<g transform="translate(${x},${y}) scale(${sx},${scale})">
    <circle cx="11" cy="6" r="3.5" fill="#ffffff" stroke="#64748b" stroke-width="1.2"/>
    <ellipse cx="2" cy="7" rx="9" ry="7" fill="#ffffff" stroke="#475569" stroke-width="1.4"/>
    <ellipse cx="-3" cy="-11" rx="2.6" ry="6.5" transform="rotate(10 -3 -11)" fill="#ffffff" stroke="#475569" stroke-width="1.3"/>
    <ellipse cx="-6.5" cy="-11" rx="2.5" ry="6.2" transform="rotate(-8 -6.5 -11)" fill="#ffffff" stroke="#475569" stroke-width="1.3"/>
    <circle cx="-6.5" cy="-2" r="5.8" fill="#ffffff" stroke="#475569" stroke-width="1.4"/>
    <circle cx="-11.5" cy="-1.5" r="1.3" fill="#f43f5e"/>
    <circle cx="-8.5" cy="-3.5" r="1.2" fill="#0f172a"/>
  </g>`;
};

// Vector Carrot
const carrot = (x, y) => `<g transform="translate(${x},${y})">
  <path d="M-4,-15 Q0,-22 0,-13 Q3,-22 5,-14" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round"/>
  <path d="M-7,-12 L7,-12 L1,16 Q0,18 -1,16 Z" fill="#fb923c" stroke="#c2410c" stroke-width="1.4" stroke-linejoin="round"/>
  <line x1="-3" y1="-5" x2="2" y2="-5" stroke="#c2410c" stroke-width="1.1"/>
  <line x1="-2" y1="2" x2="2" y2="2" stroke="#c2410c" stroke-width="1.1"/>
</g>`;

// 5-Point Star
const star5 = (x, y, r = 13, fill = '#f43f5e', stroke = '#9f1239') => {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rad = i % 2 === 0 ? r : r * 0.44;
    pts.push(`${(x + rad * Math.cos(a)).toFixed(1)},${(y + rad * Math.sin(a)).toFixed(1)}`);
  }
  return `<polygon points="${pts.join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="1.4" stroke-linejoin="round"/>`;
};

// Side-view Cartoon Car: dir = 'left' | 'right' (nose & yellow headlight clearly point in dir)
const sideCar = (x, y, dir = 'left', bodyColor = '#3b82f6') => {
  const sx = dir === 'right' ? -1 : 1;
  return `<g transform="translate(${x},${y}) scale(${sx},1)">
    <path d="M-24,4 L-18,-7 L6,-7 L14,4 L24,4 L24,14 L-24,14 Z" fill="${bodyColor}" stroke="#1e293b" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M-15,-4 L-6,-4 L-6,3 L-18,3 Z" fill="#e0f2fe" stroke="#334155" stroke-width="1"/>
    <path d="M-3,-4 L5,-4 L10,3 L-3,3 Z" fill="#e0f2fe" stroke="#334155" stroke-width="1"/>
    <circle cx="-22" cy="8" r="3" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>
    <polygon points="-24,6 -33,3 -33,13 -24,10" fill="#fef08a" opacity="0.75"/>
    <rect x="21" y="6" width="3" height="5" rx="1" fill="#ef4444"/>
    <circle cx="-13" cy="15" r="5" fill="#1e293b"/>
    <circle cx="-13" cy="15" r="2" fill="#cbd5e1"/>
    <circle cx="13" cy="15" r="5" fill="#1e293b"/>
    <circle cx="13" cy="15" r="2" fill="#cbd5e1"/>
  </g>`;
};

// Vector Pear
const pear = (x, y) => `<g transform="translate(${x},${y})">
  <path d="M0,-11 Q2,-15 5,-14" fill="none" stroke="#15803d" stroke-width="1.6"/>
  <path d="M0,-10 C-6,-10 -6,-2 -8,3 C-10,9 -5,13 0,13 C5,13 10,9 8,3 C6,-2 6,-10 0,-10 Z" fill="#bef264" stroke="#65a30d" stroke-width="1.4"/>
</g>`;

// Banana icon
const banana = (x, y) => `<g transform="translate(${x},${y})">
  <path d="M-6,-10 C2,-6 6,4 8,11 C2,10 -5,3 -8,-7 Z" fill="#fde047" stroke="#ca8a04" stroke-width="1.3" stroke-linejoin="round"/>
</g>`;

// Vector Apple
const apple = (x, y, fill = '#ef4444') => `<g transform="translate(${x},${y})">
  <path d="M0,-9 Q2,-14 6,-12" fill="none" stroke="#15803d" stroke-width="1.6"/>
  <circle cx="0" cy="0" r="8.5" fill="${fill}" stroke="#991b1b" stroke-width="1.3"/>
  <circle cx="-2.5" cy="-2.5" r="2" fill="#fca5a5" opacity="0.65"/>
</g>`;

// Standard Equation Slots Template: "□ ○ □ ○ □ = □" or "□ ○ □ = □"
const eqTemplate = (y, terms = 3, label = '') => {
  const items = terms === 3
    ? [
        { type: 'box', x: 100 }, { type: 'op', x: 140 },
        { type: 'box', x: 164 }, { type: 'op', x: 204 },
        { type: 'box', x: 228 }, { type: 'eq', x: 266 },
        { type: 'box', x: 292 }
      ]
    : [
        { type: 'box', x: 136 }, { type: 'op', x: 176 },
        { type: 'box', x: 200 }, { type: 'eq', x: 238 },
        { type: 'box', x: 264 }
      ];
  const parts = items.map(it => {
    if (it.type === 'box') {
      return `<rect x="${it.x}" y="${y}" width="32" height="26" rx="5" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>`;
    }
    if (it.type === 'op') {
      return `<circle cx="${it.x + 10}" cy="${y + 13}" r="9" fill="#ffffff" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,2"/>`;
    }
    return `<text x="${it.x + 12}" y="${y + 19}" text-anchor="middle" font-size="18" font-weight="bold" fill="#334155">=</text>`;
  }).join('');
  const lbl = label ? `<text x="16" y="${y + 18}" font-size="12" font-weight="bold" fill="#475569">${label}</text>` : '';
  return lbl + parts;
};

// Directional Animal Head for Queues (unmistakably facing LEFT or RIGHT with beak/snout & eye)
const queueFace = (x, y, name, fill, stroke, dir = 'right', isRabbit = false, highlight = false) => {
  const sx = dir === 'left' ? -1 : 1;
  const ring = highlight ? `<rect x="-25" y="-26" width="50" height="68" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2.2"/>` : '';
  return `<g transform="translate(${x},${y})">
    ${ring}
    <g transform="scale(${sx},1)">
      ${isRabbit
        ? `<ellipse cx="-4" cy="-16" rx="3" ry="7" fill="${fill}" stroke="${stroke}" stroke-width="1.3"/><ellipse cx="2" cy="-16" rx="3" ry="7" fill="${fill}" stroke="${stroke}" stroke-width="1.3"/>`
        : `<circle cx="-8" cy="-11" r="4.5" fill="${fill}" stroke="${stroke}" stroke-width="1.3"/>`}
      <circle cx="0" cy="0" r="12" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
      <polygon points="11,-3 20,0 11,4" fill="#f97316" stroke="#9a3412" stroke-width="1"/>
      <circle cx="4.5" cy="-3.5" r="1.7" fill="#0f172a"/>
    </g>
    <text x="0" y="31" text-anchor="middle" font-size="12.5" font-weight="bold" fill="${highlight ? '#92400e' : '#1e293b'}">${name}</text>
  </g>`;
};

// Straight crisp arrow
const arrow = (x1, y1, x2, y2, color = '#16a34a', sw = 2.8) => {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const h = 8;
  const ax1 = x2 - h * Math.cos(angle - Math.PI / 6);
  const ay1 = y2 - h * Math.sin(angle - Math.PI / 6);
  const ax2 = x2 - h * Math.cos(angle + Math.PI / 6);
  const ay2 = y2 - h * Math.sin(angle + Math.PI / 6);
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/><polyline points="${ax1.toFixed(1)},${ay1.toFixed(1)} ${x2},${y2} ${ax2.toFixed(1)},${ay2.toFixed(1)}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
};

const papers49to52 = [
  // =========================================================================
  // 第 49 套：小鸭朝向与“静/动”看图列式辨析卷
  // =========================================================================
  {
    id: 49,
    subject: 'math',
    unit: '名校专项：动态方位与逻辑推理',
    title: '第 49 套：一年级数学·鸭群朝向与“静/动”看图列式辨析卷',
    tag: '朝向列式',
    tagColor: 'bg-sky-100 text-sky-800',
    desc: '直击全网高频“三堆小鸭”朝向争议原题！精训无界静态群组求和、围栏河岸进出方向加减混合、按朝向分类比多少、天鹅飞来飞走、虚线斜线移除及草丛遮挡逆向看图列式。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '核心热点：小鸭朝向（无界静态群组 vs 围栏箭头动态）',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M49-1-1',
            title: '1. 网红三堆小鸭原题：只有朝向区别',
            prompt: '观察草地上的三堆小鸭：左边 3 只嘴巴向左，中间 2 只嘴巴向右，右边 3 只嘴巴向左。画面中<strong>没有</strong>河岸分界、虚线圈或游走箭头，下面给出 <span class="font-mono font-bold">□ ○ □ ○ □ = □</span>。求“一共有几只小鸭”，最合理的算式是？',
            tip: '【审题金钥匙】“三堆小鸭”网红原题核心准则：图上只有几堆小鸭且没有河岸分界、虚线圈或动作箭头时，绝不能脑补成“走掉/游来”！三堆合起来求总数，应列连加算式：3 + 2 + 3 = 8！',
            visual: wrapVisual(svgFrame(440, 165, '草地上三堆小鸭：左边3只朝左、中间2只朝右、右边3只朝左，无围栏和箭头', `
              <rect x="8" y="8" width="424" height="110" rx="14" fill="#ecfdf5" stroke="#86efac" stroke-width="1.6"/>
              <text x="220" y="27" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">草地上共有三堆小鸭（无河岸围栏 · 无虚线圈 · 无游走箭头）</text>
              ${duck(34, 62, 'left', 0.92)}${duck(72, 62, 'left', 0.92)}${duck(110, 62, 'left', 0.92)}
              <text x="72" y="102" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857">第1堆（朝左）</text>
              ${duck(198, 62, 'right', 0.92)}${duck(242, 62, 'right', 0.92)}
              <text x="220" y="102" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857">第2堆（朝右）</text>
              ${duck(328, 62, 'left', 0.92)}${duck(366, 62, 'left', 0.92)}${duck(404, 62, 'left', 0.92)}
              <text x="366" y="102" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857">第3堆（朝左）</text>
              ${eqTemplate(128, 3, '看图列式：')}
            `), 'emerald'),
            options: [
              { text: '3 + 2 + 3 = 8', correct: true },
              { text: '3 - 2 + 3 = 4', correct: false },
              { text: '8 - 3 - 2 = 3', correct: false }
            ]
          },
          {
            qid: 'M49-1-2',
            title: '2. 变式进阶：岸边与水池动态进出（看准围栏与箭头）',
            prompt: '观察下图池塘动态图：蓝色池塘里<strong>原有 5 只小鸭</strong>，其中 3 只正沿着红色箭头往右游上岸，左岸另有 4 只正沿着绿色箭头准备游进池塘。按模板 <span class="font-mono font-bold">□ ○ □ ○ □ = □</span> 求现在池塘里有几只小鸭？',
            tip: '【审题金钥匙】看到池塘分界、虚线圈与方向箭头，才是“动态加减混合”！池塘里原有 5 只，先减去游上岸的 3 只（5 - 3 = 2），再加上左岸游进来的 4 只（2 + 4 = 6），算式是 5 - 3 + 4 = 6！',
            visual: wrapVisual(svgFrame(460, 185, '左岸4只游入池塘，池塘原有5只其中3只虚线圈出并沿红色箭头游向右岸', `
              <rect x="8" y="10" width="114" height="128" rx="12" fill="#dcfce7" stroke="#86efac" stroke-width="1.5"/>
              <text x="65" y="28" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#15803d">左岸：游来 4 只</text>
              ${duck(32, 56, 'right', 0.8)}${duck(68, 56, 'right', 0.8)}
              ${duck(32, 98, 'right', 0.8)}${duck(68, 98, 'right', 0.8)}
              <rect x="128" y="10" width="234" height="128" rx="14" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
              <text x="245" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">池塘原有 5 只小鸭</text>
              ${arrow(92, 78, 146, 78, '#16a34a', 3)}
              ${duck(184, 60, 'left', 0.82)}${duck(184, 102, 'left', 0.82)}
              <ellipse cx="286" cy="79" rx="50" ry="43" fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="5,4"/>
              ${duck(266, 61, 'right', 0.8)}${duck(304, 61, 'right', 0.8)}${duck(285, 99, 'right', 0.8)}
              <rect x="368" y="10" width="84" height="128" rx="12" fill="#dcfce7" stroke="#86efac" stroke-width="1.5"/>
              <text x="410" y="28" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">右岸：游走 3 只</text>
              ${arrow(334, 79, 404, 79, '#e11d48', 3)}
              ${eqTemplate(148, 3, '池塘现剩：')}
            `), 'sky'),
            options: [
              { text: '5 - 3 + 4 = 6', correct: true },
              { text: '5 + 3 - 4 = 4', correct: false },
              { text: '4 + 2 + 3 = 9', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '按朝向分类统计 & 两步连环画加减顺序',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M49-2-1',
            title: '1. 水面 8 只小鸭：朝右比朝左多几只',
            prompt: '观察水面上正在游泳的 8 只小鸭：它们有的嘴巴朝右游，有的嘴巴朝左游。仔细数清每只小鸭的朝向，请问<strong>朝右游的小鸭比朝左游的多几只</strong>？',
            tip: '【审题金钥匙】当同一幅图中小鸭方向混杂且没有进出箭头时，常考“按朝向分类比多少”！要逐只点数，别只数一行：朝右游的一共有 5 只，朝左游的一共有 3 只，求相差多少用减法：5 - 3 = 2（只）！',
            visual: wrapVisual(svgFrame(440, 155, '水面上下两排共8只小鸭混合朝向：朝右5只、朝左3只', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.6"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1e40af">看清嘴巴尖尖的朝向：朝右游的比朝左游的多几只？</text>
              ${duck(70, 62, 'right', 0.95)}${duck(170, 62, 'right', 0.95)}${duck(270, 62, 'left', 0.95)}${duck(370, 62, 'right', 0.95)}
              ${duck(70, 114, 'left', 0.95)}${duck(170, 114, 'right', 0.95)}${duck(270, 114, 'left', 0.95)}${duck(370, 114, 'right', 0.95)}
            `), 'sky'),
            options: [
              { text: '5 - 3 = 2（只）', correct: true },
              { text: '5 + 3 = 8（只）', correct: false },
              { text: '8 - 4 = 4（只）', correct: false }
            ]
          },
          {
            qid: 'M49-2-2',
            title: '2. 小鸡啄米：先跑来再跑走（连环画顺序列式）',
            prompt: '按先后顺序观察下面小鸡啄米连环画：图① 草地上原有 6 只小鸡，又跑来 3 只；图② 吃饱后跑走了 4 只。用算式 <span class="font-mono font-bold">□ ○ □ ○ □ = □</span> 求现在还剩几只？',
            tip: '【审题金钥匙】连环画加减混合必须严格按“事情发生的先后顺序”列式：先跑来 3 只用加法（6 + 3），接着跑走 4 只用减法（- 4），完整算式是 6 + 3 - 4 = 5！千万不能写成 6 + 4 - 3！',
            visual: wrapVisual(svgFrame(460, 175, '图1原有6只小鸡跑来3只，图2又跑走4只', `
              <rect x="8" y="8" width="202" height="122" rx="12" fill="#fefce8" stroke="#fde047" stroke-width="1.6"/>
              <text x="109" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">① 原有 6 只，又跑来 3 只</text>
              ${chick(36, 60, 'right', 0.95)}${chick(72, 60, 'right', 0.95)}${chick(106, 60, 'left', 0.95)}
              ${chick(36, 98, 'right', 0.95)}${chick(72, 98, 'right', 0.95)}${chick(106, 98, 'left', 0.95)}
              <line x1="128" y1="40" x2="128" y2="118" stroke="#ca8a04" stroke-width="1.2" stroke-dasharray="4,3"/>
              ${chick(154, 62, 'left', 0.9)}${chick(188, 62, 'left', 0.9)}${chick(172, 98, 'left', 0.9)}
              ${arrow(188, 114, 134, 114, '#16a34a', 2.4)}
              ${arrow(214, 68, 240, 68, '#475569', 3)}
              <rect x="246" y="8" width="206" height="122" rx="12" fill="#fff7ed" stroke="#fdba74" stroke-width="1.6"/>
              <text x="349" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#9a3412">② 接着跑走了 4 只</text>
              ${chick(272, 60, 'left', 0.9)}${chick(304, 60, 'right', 0.9)}${chick(272, 98, 'left', 0.9)}${chick(304, 98, 'right', 0.9)}${chick(334, 78, 'left', 0.9)}
              <rect x="348" y="38" width="100" height="68" rx="10" fill="none" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="4,3"/>
              ${chick(372, 58, 'right', 0.82)}${chick(420, 58, 'right', 0.82)}${chick(372, 90, 'right', 0.82)}${chick(420, 90, 'right', 0.82)}
              ${arrow(382, 116, 440, 116, '#e11d48', 2.4)}
              ${eqTemplate(140, 3, '现在还剩：')}
            `), 'amber'),
            options: [
              { text: '6 + 3 - 4 = 5', correct: true },
              { text: '6 - 3 + 4 = 7', correct: false },
              { text: '6 + 4 - 3 = 7', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '天鹅湖先飞走再飞来 & 两步连减避坑',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M49-3-1',
            title: '1. 经典天鹅湖连环画：先减后加',
            prompt: '请从左到右看天鹅湖两步图：① 湖里原来有 5 只天鹅，先飞走了 2 只；② 接着又飞来了 4 只。现在湖里有几只天鹅？',
            tip: '【审题金钥匙】人教版一上“先减后加”经典原题：按照图① ➔ 图② 的发生顺序，先从原来的 5 只里减去飞走的 2 只（5 - 2 = 3），再加上新飞来的 4 只（3 + 4 = 7），正确算式是 5 - 2 + 4 = 7！',
            visual: wrapVisual(svgFrame(460, 175, '图1湖面5只天鹅飞走2只，图2又飞来4只', `
              <rect x="8" y="8" width="202" height="122" rx="12" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="109" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">① 原有 5 只，先飞走 2 只</text>
              ${swan(38, 92, 'right', 0.95)}${swan(78, 92, 'left', 0.95)}${swan(116, 92, 'right', 0.95)}
              <ellipse cx="166" cy="64" rx="34" ry="26" fill="none" stroke="#e11d48" stroke-width="1.6" stroke-dasharray="4,3"/>
              ${swan(152, 62, 'right', 0.85)}${swan(182, 62, 'right', 0.85)}
              ${arrow(150, 96, 198, 42, '#e11d48', 2.2)}
              ${arrow(214, 68, 240, 68, '#475569', 3)}
              <rect x="246" y="8" width="206" height="122" rx="12" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.6"/>
              <text x="349" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">② 又飞来 4 只天鹅</text>
              ${swan(278, 102, 'right', 0.9)}${swan(314, 102, 'left', 0.9)}${swan(350, 102, 'right', 0.9)}
              ${swan(330, 56, 'left', 0.85)}${swan(364, 56, 'left', 0.85)}${swan(398, 56, 'left', 0.85)}${swan(430, 56, 'left', 0.85)}
              ${arrow(416, 46, 360, 86, '#16a34a', 2.2)}
              ${eqTemplate(140, 3, '现在湖里有：')}
            `), 'sky'),
            options: [
              { text: '5 - 2 + 4 = 7', correct: true },
              { text: '5 + 2 - 4 = 3', correct: false },
              { text: '7 - 2 + 4 = 9', correct: false }
            ]
          },
          {
            qid: 'M49-3-2',
            title: '2. 两次全部朝外飞走：连减列式防写反',
            prompt: '大树上原本一共停着 9 只小鸟，先从左边飞走了 2 只，过了一会儿又从右边飞走了 3 只。下面哪道连减算式能正确算出树上现在还剩几只小鸟？',
            tip: '【审题金钥匙】看到两个箭头都朝外飞走，说明数量连续减少两次！必须用原本的总数 9 依次减去两次飞走的只数：9 - 2 - 3 = 4（只）。千万别看着树上剩下的 4 只又写成减法！',
            visual: wrapVisual(svgFrame(460, 175, '树上原有9只小鸟，左边飞走2只，右边又飞走3只，树上剩4只', `
              <rect x="8" y="8" width="444" height="122" rx="14" fill="#ecfdf5" stroke="#86efac" stroke-width="1.6"/>
              <text x="230" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">大树上原本共有 9 只小鸟（两次向树外飞走）</text>
              <line x1="130" y1="106" x2="330" y2="106" stroke="#92400e" stroke-width="6" stroke-linecap="round"/>
              ${bird(162, 90, 'right')}${bird(206, 90, 'left')}${bird(250, 90, 'right')}${bird(294, 90, 'left')}
              <ellipse cx="64" cy="64" rx="44" ry="28" fill="none" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="4,3"/>
              ${bird(46, 64, 'left', '#fb7185', '#be123c')}${bird(84, 64, 'left', '#fb7185', '#be123c')}
              ${arrow(95, 86, 26, 40, '#e11d48', 2.4)}
              <text x="64" y="114" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">先飞走 2 只</text>
              <ellipse cx="390" cy="64" rx="52" ry="28" fill="none" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="4,3"/>
              ${bird(358, 64, 'right', '#fb7185', '#be123c')}${bird(390, 64, 'right', '#fb7185', '#be123c')}${bird(422, 64, 'right', '#fb7185', '#be123c')}
              ${arrow(348, 84, 434, 38, '#e11d48', 2.4)}
              <text x="390" y="114" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">又飞走 3 只</text>
              ${eqTemplate(140, 3, '树上还剩：')}
            `), 'emerald'),
            options: [
              { text: '9 - 2 - 3 = 4', correct: true },
              { text: '9 - 2 + 3 = 10', correct: false },
              { text: '9 - 3 + 2 = 8', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '虚线圈与斜线移除：“总数减去掉”核心铁律',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M49-4-1',
            title: '1. 虚线圈走萝卜：严防“剩下减去掉”错误',
            prompt: '认真看图：一共画了 8 根胡萝卜，其中用红色虚线圈圈住了 3 根（表示拿走/去掉）。正确的看图列式是？',
            tip: '【审题金钥匙】一年级最高频低级失误！很多同学看到左边 5 根、虚线圈里 3 根，就错列成“5 - 3 = 2”！务必记住铁律：虚线圈住的部分本来就在总数量里面，必须用“总数 8 减去掉的 3”，即 8 - 3 = 5！',
            visual: wrapVisual(svgFrame(440, 155, '一共8根胡萝卜，右边3根被红色虚线圈圈住', `
              <rect x="8" y="8" width="424" height="102" rx="14" fill="#fff7ed" stroke="#fed7aa" stroke-width="1.6"/>
              ${carrot(42, 64)}${carrot(90, 64)}${carrot(138, 64)}${carrot(186, 64)}${carrot(234, 64)}
              <rect x="268" y="26" width="150" height="72" rx="14" fill="#ffe4e6" fill-opacity="0.4" stroke="#e11d48" stroke-width="2.2" stroke-dasharray="6,4"/>
              ${carrot(294, 64)}${carrot(342, 64)}${carrot(390, 64)}
              <text x="342" y="21" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">虚线圈走 3 根</text>
              ${eqTemplate(120, 2, '算式：')}
            `), 'amber'),
            options: [
              { text: '8 - 3 = 5', correct: true },
              { text: '5 - 3 = 2', correct: false },
              { text: '5 + 3 = 8', correct: false }
            ]
          },
          {
            qid: 'M49-4-2',
            title: '2. 斜线划掉部分，再新添入另一部分',
            prompt: '观察五角星变化图：左边原本有 7 颗红星，其中 2 颗被斜线划掉（表示去掉）；右边又新摆来 3 颗蓝星（表示增加）。合起来算现在一共有几颗星，应列什么算式？',
            tip: '【审题金钥匙】斜线划掉的 2 颗原本算在左边 7 颗红星里面！所以第一步要用“原来的 7 - 划掉的 2 = 5”，再把右边新摆来的 3 颗加上去：7 - 2 + 3 = 8！千万别写成“5 - 2 + 3”！',
            visual: wrapVisual(svgFrame(460, 170, '左边原有7颗红星划掉2颗，右边又摆来3颗蓝星', `
              <rect x="8" y="8" width="268" height="118" rx="12" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="142" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#9f1239">左边原有 7 颗红星（斜线划掉 2 颗）</text>
              ${star5(46, 56)}${star5(100, 56)}${star5(154, 56)}${star5(208, 56)}
              ${star5(74, 98)}${star5(142, 98)}${star5(210, 98)}
              <line x1="126" y1="114" x2="158" y2="82" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
              <line x1="194" y1="114" x2="226" y2="82" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
              <rect x="288" y="8" width="164" height="118" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.6"/>
              <text x="370" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">又新摆来 3 颗蓝星</text>
              ${star5(326, 74, 14, '#3b82f6', '#1e40af')}${star5(370, 74, 14, '#3b82f6', '#1e40af')}${star5(414, 74, 14, '#3b82f6', '#1e40af')}
              ${arrow(370, 114, 294, 114, '#16a34a', 2.4)}
              ${eqTemplate(136, 3, '现在共有：')}
            `), 'rose'),
            options: [
              { text: '7 - 2 + 3 = 8', correct: true },
              { text: '5 - 2 + 3 = 6', correct: false },
              { text: '7 + 2 - 3 = 6', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '半遮挡隐藏部分 & “比原来少多少”陷阱',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M49-5-1',
            title: '1. 房子半遮挡看图列式（躲猫猫求隐藏部分）',
            prompt: '观察“小兔进小屋”示意图：下方大括号标明<strong>一共有 9 只小兔</strong>，草地外边还能看见 3 只小兔，其余的小兔都躲在右边的房子里（标着 <strong>？只</strong>）。求房子里藏着几只小兔？',
            tip: '【审题金钥匙】半遮挡型看图列式必须看懂大括号总数量！看不见的“？只”在总数量 9 只里面，要用“总数 - 看得见的部分”：9 - 3 = 6（只）。',
            visual: wrapVisual(svgFrame(440, 175, '草地上看得见3只小兔，房子里面藏着问号只，下方大括号标明一共9只小兔', `
              <rect x="8" y="8" width="424" height="114" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
              ${bunny(48, 86, 'right', 1.05)}${bunny(100, 86, 'right', 1.05)}${bunny(152, 86, 'right', 1.05)}
              <polygon points="222,52 320,16 418,52" fill="#f87171" stroke="#991b1b" stroke-width="2" stroke-linejoin="round"/>
              <rect x="242" y="52" width="156" height="62" rx="4" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
              <rect x="300" y="64" width="44" height="36" rx="8" fill="#ffffff" stroke="#b45309" stroke-width="1.8"/>
              <text x="322" y="88" text-anchor="middle" font-size="16" font-weight="black" fill="#be123c">？只</text>
              <path d="M24,126 Q24,136 44,136 L204,136 Q220,136 220,146 Q220,136 236,136 L396,136 Q416,136 416,126" fill="none" stroke="#334155" stroke-width="2"/>
              <rect x="150" y="146" width="140" height="24" rx="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.4"/>
              <text x="220" y="163" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">一共有 9 只小兔</text>
            `), 'emerald'),
            options: [
              { text: '9 - 3 = 6（只）', correct: true },
              { text: '9 + 3 = 12（只）', correct: false },
              { text: '6 - 3 = 3（只）', correct: false }
            ]
          },
          {
            qid: 'M49-5-2',
            title: '2. 树上摘果子，“比原来少了多少”视觉干扰',
            prompt: '苹果树上原本结了 10 个苹果，小明摘走 2 个，小红摘走 4 个，树上现在还剩 4 个。请问：<strong>树上的苹果比原来“少了多少个”</strong>？',
            tip: '【审题金钥匙】审题高危陷阱！问题不是问“树上还剩几个”，而是问“比原来少了多少个”！树上少掉的数量就等于两人一共摘走的数量：2 + 4 = 6（个）！“原有 10 个”反而是干扰条件！',
            visual: wrapVisual(svgFrame(460, 170, '树上原有10个苹果现剩4个，小明篮子里2个，小红篮子里4个', `
              <rect x="8" y="8" width="166" height="122" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
              <text x="91" y="25" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#166534">原有 10 个，现剩 4 个</text>
              <rect x="83" y="82" width="16" height="40" fill="#92400e"/>
              <circle cx="91" cy="64" r="34" fill="#4ade80" stroke="#15803d" stroke-width="1.6"/>
              ${apple(76, 52)}${apple(106, 54)}${apple(82, 76)}${apple(102, 74)}
              <rect x="184" y="8" width="130" height="122" rx="12" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5"/>
              <text x="249" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#9a3412">小明摘了 2 个</text>
              <path d="M212,72 L286,72 L276,108 L222,108 Z" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
              ${apple(236, 62)}${apple(262, 62)}
              <rect x="322" y="8" width="130" height="122" rx="12" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
              <text x="387" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#9f1239">小红摘了 4 个</text>
              <path d="M350,74 L424,74 L414,108 L360,108 Z" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
              ${apple(368, 62)}${apple(390, 62)}${apple(410, 62)}${apple(387, 44)}
              <rect x="30" y="138" width="400" height="24" rx="8" fill="#ffe4e6" stroke="#f43f5e" stroke-width="1.4"/>
              <text x="230" y="155" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#9f1239">看准问题：树上的苹果比原来【少了多少个】？</text>
            `), 'rose'),
            options: [
              { text: '2 + 4 = 6（个）', correct: true },
              { text: '10 - 2 - 4 = 4（个）', correct: false },
              { text: '10 - 4 = 6（个）', correct: false }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 第 50 套：生活乘车、停车场与一图四式动态卷
  // =========================================================================
  {
    id: 50,
    subject: 'math',
    unit: '名校专项：动态方位与逻辑推理',
    title: '第 50 套：一年级数学·公交乘车、停车场与一图四式动态卷',
    tag: '生活动态',
    tagColor: 'bg-indigo-100 text-indigo-800',
    desc: '攻克公交车车头朝向与前后门上下车、下车求原人数逆推、停车场两步进出、大小括号问号对比、一图四式总数原则、双向车道朝向统计与上楼排队方向辨析。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '公交车“前门上/后门下”与逆向“原来有几人”',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M50-1-1',
            title: '1. 公交车后门下 2 人、前门上 3 人',
            prompt: '观察公共汽车示意图：车头朝左行驶，车上原本有 8 位乘客。靠站时，后门下去了 2 位乘客，前门上来了 3 位乘客。现在车上一共有几位乘客？',
            tip: '【审题金钥匙】看公交车图注意两步：① 先找车灯/车头判断前门和后门；② 箭头向外是下车（减法），箭头向内是上车（加法）。原本 8 人，下车 2 人（8 - 2 = 6），又上车 3 人（6 + 3 = 9），列式：8 - 2 + 3 = 9！',
            visual: wrapVisual(svgFrame(460, 196, '车头朝左的公交车，原有8人，后门下2人，前门上3人', `
              <text x="232" y="18" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#854d0e">🚌 车头朝左 ← · 车上原有 8 位乘客</text>
              <rect x="68" y="30" width="332" height="86" rx="16" fill="#fef08a" stroke="#ca8a04" stroke-width="2.2"/>
              <path d="M68,58 L48,58 Q44,58 44,66 L44,102 L68,102 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
              <circle cx="48" cy="88" r="4" fill="#f97316"/>
              <rect x="73" y="38" width="24" height="28" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="1.4"/>
              <text x="131" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">前门上3</text>
              <rect x="112" y="54" width="38" height="60" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.6"/>
              ${arrow(131, 144, 131, 96, '#16a34a', 3)}
              <rect x="176" y="42" width="108" height="32" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.3"/>
              <text x="230" y="63" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">原车内：8人</text>
              <text x="323" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">后门下2</text>
              <rect x="304" y="54" width="38" height="60" rx="4" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.6"/>
              ${arrow(323, 96, 323, 144, '#e11d48', 3)}
              <circle cx="94" cy="118" r="10.5" fill="#1e293b"/><circle cx="94" cy="118" r="4" fill="#cbd5e1"/>
              <circle cx="362" cy="118" r="10.5" fill="#1e293b"/><circle cx="362" cy="118" r="4" fill="#cbd5e1"/>
              ${eqTemplate(158, 3, '现车上有：')}
            `), 'amber'),
            options: [
              { text: '8 - 2 + 3 = 9（位）', correct: true },
              { text: '8 + 2 - 3 = 7（位）', correct: false },
              { text: '8 - 3 + 2 = 7（位）', correct: false }
            ]
          },
          {
            qid: 'M50-1-2',
            title: '2. 逆向还原：已下车 4 人、车里还剩 7 人，求原来有几人',
            prompt: '公交车到站停稳（此时无人上车）：已经下去了 4 位乘客，透过车窗看见车上还坐着 7 位乘客。请问到站<strong>前原来</strong>车上有多少位乘客？',
            tip: '【审题金钥匙】逆向求“原来”切忌看到下车就减！刚下去的 4 人在到站前都在车里，把“已经下车的 4 人”和“还剩下的 7 人”合起来才是原来的总数：4 + 7 = 11（位）！',
            visual: wrapVisual(svgFrame(460, 175, '车厢窗内还剩7位乘客，下车箭头标着刚下车4位，大括号问原来共多少位', `
              <rect x="18" y="22" width="286" height="92" rx="14" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
              <rect x="34" y="42" width="204" height="38" rx="6" fill="#ffffff" stroke="#0369a1" stroke-width="1.4"/>
              <text x="136" y="66" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0369a1">车里还剩：7 位乘客</text>
              <rect x="252" y="42" width="38" height="70" rx="4" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.5"/>
              <circle cx="64" cy="116" r="10" fill="#1e293b"/><circle cx="268" cy="116" r="10" fill="#1e293b"/>
              ${arrow(280, 92, 344, 92, '#e11d48', 3)}
              <rect x="348" y="48" width="98" height="54" rx="10" fill="#fff1f2" stroke="#fda4af" stroke-width="1.6"/>
              <text x="397" y="72" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#be123c">刚下车</text>
              <text x="397" y="92" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#9f1239">4 位乘客</text>
              <path d="M26,128 Q26,138 46,138 L220,138 Q232,138 232,148 Q232,138 244,138 L420,138 Q440,138 440,128" fill="none" stroke="#334155" stroke-width="2"/>
              <rect x="130" y="148" width="204" height="24" rx="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.4"/>
              <text x="232" y="165" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0f172a">到站前车上原有 ？位乘客</text>
            `), 'sky'),
            options: [
              { text: '4 + 7 = 11（位）', correct: true },
              { text: '7 - 4 = 3（位）', correct: false },
              { text: '11 - 4 = 7（位）', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '停车场分步开走开来 & 鱼缸连环变化',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M50-2-1',
            title: '1. 停车场两步进出连环画',
            prompt: '看图讲停车场故事：① 场内原有 9 辆小汽车，开走了 4 辆；② 接着又开来了 3 辆小汽车。下列哪个算式能算出停车场<strong>现在共有几辆车</strong>？',
            tip: '【审题金钥匙】停车场分步连环变化：第①步原有 9 辆开走 4 辆，用减法 9 - 4 = 5；第②步又开进 3 辆，用加法 5 + 3 = 8。合起来列式是：9 - 4 + 3 = 8（辆）。',
            visual: wrapVisual(svgFrame(460, 175, '图1停车场原有9辆开走4辆，图2又开来3辆', `
              <rect x="8" y="8" width="204" height="122" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.6"/>
              <text x="110" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">① 原有 9 辆，开走 4 辆</text>
              ${sideCar(44, 52, 'right', '#60a5fa')}${sideCar(100, 52, 'right', '#60a5fa')}
              ${sideCar(44, 86, 'right', '#60a5fa')}${sideCar(100, 86, 'right', '#60a5fa')}${sideCar(72, 114, 'right', '#60a5fa')}
              <rect x="132" y="36" width="74" height="84" rx="8" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4,3"/>
              <text x="169" y="54" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">开走 4 辆</text>
              ${sideCar(168, 72, 'right', '#f87171')}${sideCar(168, 102, 'right', '#f87171')}
              ${arrow(144, 118, 200, 118, '#e11d48', 2.4)}
              ${arrow(216, 68, 240, 68, '#475569', 3)}
              <rect x="246" y="8" width="206" height="122" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.6"/>
              <text x="349" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">② 又开进 3 辆小汽车</text>
              ${sideCar(282, 54, 'right', '#60a5fa')}${sideCar(336, 54, 'right', '#60a5fa')}
              ${sideCar(282, 92, 'right', '#60a5fa')}${sideCar(336, 92, 'right', '#60a5fa')}${sideCar(308, 116, 'right', '#60a5fa')}
              <rect x="372" y="36" width="74" height="84" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
              <text x="409" y="54" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">开来 3 辆</text>
              ${sideCar(410, 74, 'left', '#34d399')}${sideCar(410, 104, 'left', '#34d399')}
              ${arrow(440, 118, 378, 118, '#16a34a', 2.4)}
              ${eqTemplate(140, 3, '现在共有：')}
            `), 'indigo'),
            options: [
              { text: '9 - 4 + 3 = 8（辆）', correct: true },
              { text: '9 + 4 - 3 = 10（辆）', correct: false },
              { text: '5 + 4 - 3 = 6（辆）', correct: false }
            ]
          },
          {
            qid: 'M50-2-2',
            title: '2. 鱼缸金鱼捞出又放进',
            prompt: '鱼缸里原来有 6 条红金鱼，小明用网捞出 2 条放到桌上的小杯里，紧接着又把刚买来的 5 条蓝金鱼倒进这个鱼缸。现在鱼缸里共有几条金鱼？',
            tip: '【审题金钥匙】数量动态变化：“捞出 2 条”代表减少（- 2），“倒进 5 条”代表增加（+ 5）。从左向右算：6 - 2 = 4（条），再算 4 + 5 = 9（条），完整算式为 6 - 2 + 5 = 9！',
            visual: wrapVisual(svgFrame(460, 170, '鱼缸原有6条红鱼，向左捞出2条，向右倒入5条蓝鱼', `
              <rect x="8" y="38" width="94" height="72" rx="10" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
              <text x="55" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">捞出 2 条</text>
              <text x="55" y="82" text-anchor="middle" font-size="11" fill="#9f1239">放小杯里</text>
              ${arrow(158, 72, 106, 72, '#e11d48', 2.8)}
              <rect x="164" y="20" width="132" height="104" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.2"/>
              <text x="230" y="42" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0369a1">玻璃鱼缸</text>
              <rect x="180" y="54" width="100" height="54" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.2"/>
              <text x="230" y="78" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0f172a">原有 6 条金鱼</text>
              <text x="230" y="98" text-anchor="middle" font-size="11" fill="#64748b">先捞走，再放进</text>
              ${arrow(354, 72, 300, 72, '#16a34a', 2.8)}
              <rect x="358" y="38" width="94" height="72" rx="10" fill="#ecfdf5" stroke="#86efac" stroke-width="1.5"/>
              <text x="405" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">又放进 5 条</text>
              <text x="405" y="82" text-anchor="middle" font-size="11" fill="#166534">新蓝金鱼</text>
              ${eqTemplate(136, 3, '现缸里有：')}
            `), 'sky'),
            options: [
              { text: '6 - 2 + 5 = 9（条）', correct: true },
              { text: '6 + 2 - 5 = 3（条）', correct: false },
              { text: '6 + 5 = 11（条）', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '大括号问号双图对比 & “一图四式”严密规范',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M50-3-1',
            title: '1. 左图求总数 vs 右图求部分（双图对比辨别）',
            prompt: '请仔细对比左右两幅大括号图，<strong>右图</strong>想让你求右边篮子里装了几个梨，下面哪个列式才是<strong>右图</strong>的正确算式？',
            tip: '【审题金钥匙】左图大括号下是“？个”，表示两边合起来用加法（5 + 4 = 9）；而右图大括号下已经给出了总数“共 9 个”，问号标在一边的篮子上，求部分必须用减法：9 - 5 = 4（个）！',
            visual: wrapVisual(svgFrame(460, 165, '左图5个梨+4个梨求总和问号；右图总数9个求右边篮子里的问号个', `
              <rect x="8" y="8" width="212" height="148" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
              <text x="114" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">左图（求总共）</text>
              ${pear(32, 62)}${pear(60, 62)}${pear(88, 62)}${pear(46, 92)}${pear(76, 92)}
              <rect x="116" y="42" width="88" height="62" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.4"/>
              ${pear(138, 60)}${pear(172, 60)}${pear(138, 88)}${pear(172, 88)}
              <path d="M22,110 Q22,120 38,120 L102,120 Q114,120 114,128 Q114,120 126,120 L190,120 Q206,120 206,110" fill="none" stroke="#475569" stroke-width="1.8"/>
              <text x="114" y="148" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#334155">？个</text>

              <rect x="240" y="8" width="212" height="148" rx="12" fill="#ecfdf5" stroke="#059669" stroke-width="2.2"/>
              <text x="346" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">★ 右图（本题要求）</text>
              ${pear(264, 62)}${pear(292, 62)}${pear(320, 62)}${pear(278, 92)}${pear(308, 92)}
              <rect x="348" y="42" width="88" height="62" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
              <text x="392" y="78" text-anchor="middle" font-size="16" font-weight="black" fill="#be123c">？个</text>
              <path d="M254,110 Q254,120 270,120 L334,120 Q346,120 346,128 Q346,120 358,120 L422,120 Q438,120 438,110" fill="none" stroke="#065f46" stroke-width="1.8"/>
              <text x="346" y="148" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#065f46">共 9 个</text>
            `), 'emerald'),
            options: [
              { text: '9 - 5 = 4（个）', correct: true },
              { text: '5 + 4 = 9（个）', correct: false },
              { text: '9 + 5 = 14（个）', correct: false }
            ]
          },
          {
            qid: 'M50-3-2',
            title: '2. 找错题：“一图四式”哪道算式写错了？',
            prompt: '根据下图（左边 6 个绿三角形，右边 4 个黄三角形）列出“一图四式”（两道加法 + 两道减法）。请问下列算式中，哪一道是<strong>不符合一图四式规律、写错了的</strong>？',
            tip: '【审题金钥匙】“一图四式”严密规定：两道加法是“左 + 右 = 总数”、“右 + 左 = 总数”；两道减法必须用“总数 - 其中一部分 = 另一部分”（即 10 - 6 = 4 和 10 - 4 = 6）。绝不能在没问比多少时写成“6 - 4 = 2”！',
            visual: wrapVisual(svgFrame(440, 145, '左边6个绿色三角形，右边4个黄色三角形，要求辨析一图四式错误项', `
              <rect x="8" y="8" width="424" height="129" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
              <text x="220" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#334155">左 6 个绿三角形 · 右 4 个黄三角形 ➔ 列“一图四式”</text>
              <rect x="28" y="42" width="182" height="80" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.6" stroke-dasharray="4,3"/>
              <polygon points="62,52 50,74 74,74" fill="#10b981" stroke="#047857" stroke-width="1.4"/>
              <polygon points="118,52 106,74 130,74" fill="#10b981" stroke="#047857" stroke-width="1.4"/>
              <polygon points="174,52 162,74 186,74" fill="#10b981" stroke="#047857" stroke-width="1.4"/>
              <polygon points="62,88 50,110 74,110" fill="#10b981" stroke="#047857" stroke-width="1.4"/>
              <polygon points="118,88 106,110 130,110" fill="#10b981" stroke="#047857" stroke-width="1.4"/>
              <polygon points="174,88 162,110 186,110" fill="#10b981" stroke="#047857" stroke-width="1.4"/>

              <rect x="242" y="42" width="166" height="80" rx="10" fill="#fefce8" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="4,3"/>
              <polygon points="288,52 276,74 300,74" fill="#facc15" stroke="#b45309" stroke-width="1.4"/>
              <polygon points="356,52 344,74 368,74" fill="#facc15" stroke="#b45309" stroke-width="1.4"/>
              <polygon points="288,88 276,110 300,110" fill="#facc15" stroke="#b45309" stroke-width="1.4"/>
              <polygon points="356,88 344,110 368,110" fill="#facc15" stroke="#b45309" stroke-width="1.4"/>
            `), 'amber'),
            options: [
              { text: '6 - 4 = 2', correct: true },
              { text: '10 - 6 = 4', correct: false },
              { text: '4 + 6 = 10', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '连环分镜因果叙事 & 一一对应逆反追赶',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M50-4-1',
            title: '1. 饼干连环画：按箭头方向读懂先后动作',
            prompt: '请顺着中间箭头从【第 1 格 ➔ 第 2 格】读懂连环画故事：盘子里原本有 8 块圆饼干，先拿走了 3 块；接着又新放进来 2 块方饼干。哪道算式符合过程？',
            tip: '【审题金钥匙】按时间箭头“第 1 格 ➔ 第 2 格”读图：第 1 格本来 8 块，圈走拿走 3 块（8 - 3 = 5）；到第 2 格又放进来 2 块（5 + 2 = 7），连环列式就是 8 - 3 + 2 = 7！',
            visual: wrapVisual(svgFrame(460, 165, '第1格8块饼干拿走3块，第2格又放进2块方饼干', `
              <rect x="8" y="8" width="202" height="114" rx="12" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="109" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">第 1 格：原有 8 块，拿走 3 块</text>
              <circle cx="40" cy="56" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/><circle cx="72" cy="56" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/>
              <circle cx="104" cy="56" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/><circle cx="40" cy="92" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/>
              <circle cx="72" cy="92" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/>
              <rect x="128" y="38" width="72" height="72" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.6" stroke-dasharray="4,3"/>
              <circle cx="150" cy="56" r="8.5" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/><circle cx="178" cy="56" r="8.5" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/>
              <circle cx="164" cy="80" r="8.5" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/>
              <text x="164" y="104" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#be123c">拿走 3 块</text>
              ${arrow(214, 65, 240, 65, '#475569', 3)}
              <rect x="246" y="8" width="206" height="114" rx="12" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              <text x="349" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">第 2 格：又放进 2 块方饼干</text>
              <circle cx="276" cy="56" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/><circle cx="308" cy="56" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/>
              <circle cx="340" cy="56" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/><circle cx="292" cy="92" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/>
              <circle cx="324" cy="92" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/>
              <rect x="374" y="48" width="20" height="20" rx="3" fill="#78350f" stroke="#451a03" stroke-width="1.2"/>
              <rect x="404" y="48" width="20" height="20" rx="3" fill="#78350f" stroke="#451a03" stroke-width="1.2"/>
              ${arrow(399, 98, 360, 82, '#16a34a', 2.4)}
              <text x="406" y="110" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#15803d">放进 2 块</text>
              ${eqTemplate(132, 3, '现在共有：')}
            `), 'amber'),
            options: [
              { text: '8 - 3 + 2 = 7', correct: true },
              { text: '8 + 3 - 2 = 9', correct: false },
              { text: '5 - 3 + 2 = 4', correct: false }
            ]
          },
          {
            qid: 'M50-4-2',
            title: '2. 一一对应推理：再买几根反超哥哥 1 根',
            prompt: '观察上下一一对应的香蕉图：哥哥有 10 根香蕉，弟弟有 4 根香蕉。请问：<strong>弟弟需要再买来多少根香蕉</strong>，才会反过来<strong>比哥哥多 1 根</strong>？',
            tip: '【审题金钥匙】一一对应两步推理：① 从虚线对齐能看出，弟弟追平哥哥需要再买 10 - 4 = 6（根）；② 题目还要“比哥哥多 1 根”，所以再多加 1 根：6 + 1 = 7（根）！验证：4 + 7 = 11 根，11 比 10 多 1 根！',
            visual: wrapVisual(svgFrame(440, 145, '哥哥10根香蕉与弟弟4根香蕉一一对应虚线对齐', `
              <rect x="8" y="8" width="424" height="129" rx="12" fill="#fefce8" stroke="#fde047" stroke-width="1.5"/>
              <text x="16" y="46" font-size="12.5" font-weight="bold" fill="#854d0e">哥哥(10)：</text>
              <text x="16" y="106" font-size="12.5" font-weight="bold" fill="#0369a1">弟弟(4)：</text>
              ${[0,1,2,3].map(i => `<line x1="${106 + i * 31}" y1="54" x2="${106 + i * 31}" y2="86" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="3,2"/>`).join('')}
              ${Array.from({length: 10}, (_, i) => banana(106 + i * 31, 40)).join('')}
              ${Array.from({length: 4}, (_, i) => banana(106 + i * 31, 100)).join('')}
              <rect x="220" y="82" width="204" height="36" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,3"/>
              <text x="322" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">弟弟还要买 ? 根才能反超 1 根</text>
            `), 'amber'),
            options: [
              { text: '7 根', correct: true },
              { text: '6 根', correct: false },
              { text: '5 根', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '双向车道朝向计数 & 上楼梯行进前后判断',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M50-5-1',
            title: '1. 马路双向车道车头朝向计数',
            prompt: '双向马路上共有 9 辆小汽车在行驶，车头尖尖（有黄色大车灯发光的那一头）就是前进方向。请一辆一辆看清车头方向，算一算：<strong>向左开的车比向右开的车多几辆</strong>？',
            tip: '【审题金钥匙】混合车道不能直接按“上一行减下一行”来算！必须逐辆辨认黄色车灯朝向：上车道 4 辆向左、1 辆向右；下车道 2 辆向左、2 辆向右。合计：向左开的有 6 辆，向右开的有 3 辆，相差 6 - 3 = 3（辆）！',
            visual: wrapVisual(svgFrame(460, 155, '双向马路上共9辆车，其中6辆车头黄色车灯朝左，3辆车头黄色车灯朝右', `
              <rect x="8" y="8" width="444" height="139" rx="14" fill="#334155" stroke="#0f172a" stroke-width="2"/>
              <line x1="16" y1="78" x2="444" y2="78" stroke="#f8fafc" stroke-width="2.4" stroke-dasharray="14,10"/>
              ${sideCar(56, 40, 'left', '#38bdf8')}
              ${sideCar(144, 40, 'right', '#fb7185')}
              ${sideCar(232, 40, 'left', '#38bdf8')}
              ${sideCar(320, 40, 'left', '#38bdf8')}
              ${sideCar(406, 40, 'left', '#38bdf8')}
              ${sideCar(76, 110, 'left', '#34d399')}
              ${sideCar(184, 110, 'right', '#fbbf24')}
              ${sideCar(292, 110, 'left', '#34d399')}
              ${sideCar(396, 110, 'right', '#fbbf24')}
            `), 'indigo'),
            options: [
              { text: '6 - 3 = 3（辆）', correct: true },
              { text: '5 - 4 = 1（辆）', correct: false },
              { text: '6 + 3 = 9（辆）', correct: false }
            ]
          },
          {
            qid: 'M50-5-2',
            title: '2. 上楼梯谁在最前面（行动朝向决定前后）',
            prompt: '4 只小动物正沿着台阶<strong>从左下向右上走上二楼</strong>（看箭头方向）。按照此刻上楼梯的前进方向，走在<strong>最前面</strong>和<strong>最后面</strong>的分别是谁？',
            tip: '【审题金钥匙】不要把“左边”误当成“前面”！谁走在最前面要看“前进箭头指向哪边”。它们正顺着右上箭头往二楼台阶走，领头站到最高阶靠近二楼门口的“小猫”走在最前，还在最低阶的“小熊”走在最后！',
            visual: wrapVisual(svgFrame(440, 165, '小熊、小狗、小兔、小猫依次在1到4阶向右上走上二楼', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
              <path d="M24,142 L116,142 L116,114 L208,114 L208,86 L300,86 L300,58 L412,58 L412,142 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="1.8"/>
              ${arrow(54, 104, 246, 42, '#0284c7', 3)}
              <text x="128" y="64" font-size="12.5" font-weight="bold" fill="#0369a1" transform="rotate(-17 128 64)">向二楼上楼梯 ↗</text>
              <rect x="358" y="18" width="52" height="38" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>
              <text x="384" y="42" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">二楼</text>
              <rect x="44" y="116" width="56" height="22" rx="6" fill="#ffffff" stroke="#475569" stroke-width="1.4"/><text x="72" y="132" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">🐻小熊</text>
              <rect x="136" y="88" width="56" height="22" rx="6" fill="#ffffff" stroke="#475569" stroke-width="1.4"/><text x="164" y="104" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">🐶小狗</text>
              <rect x="228" y="60" width="56" height="22" rx="6" fill="#ffffff" stroke="#475569" stroke-width="1.4"/><text x="256" y="76" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">🐰小兔</text>
              <rect x="312" y="32" width="52" height="22" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/><text x="338" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">🐱小猫</text>
            `), 'purple'),
            options: [
              { text: '小猫在最前，小熊在最后', correct: true },
              { text: '小熊在最前，小猫在最后', correct: false },
              { text: '小兔在最前，小狗在最后', correct: false }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 第 51 套：小动物朝向排队与镜像相对左右推理卷
  // =========================================================================
  {
    id: 51,
    subject: 'math',
    unit: '名校专项：动态方位与逻辑推理',
    title: '第 51 套：一年级数学·动物朝向排队与镜像相对左右推理卷',
    tag: '方位推理',
    tagColor: 'bg-purple-100 text-purple-800',
    desc: '突破动物排队“朝右/朝左看前后”、人物“背对你 vs 面对你”镜像左右手判断、横排动态左右跨步移动与队尾插到队首名次推算、3×3 货架定位、多线索房子推理与俯视汽车拐弯。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '小动物朝向决定排队前后（面向左 vs 面向右）',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M51-1-1',
            title: '1. 全队面向右边：找“小兔前面有几只”',
            prompt: '7 只小动物排成一横排准备出发，看图发现它们<strong>全部面向右边</strong>（眼睛和鼻子都朝右）。请问：<strong>小兔的前面</strong>一共有几只小动物？',
            tip: '【审题金钥匙】小动物排队分辨前后的唯一标准是看“眼睛和鼻子朝向哪边”！图中所有动物鼻子都朝右，所以“右边就是前面”！数一数小兔右边的有：小猴、小猪、小象、小鸭，共 4 只！千万别把尾巴后面的 2 只算成前面！',
            visual: wrapVisual(svgFrame(460, 148, '7只动物全部面向右排队，依次为刺猬、小羊、小兔、小猴、小猪、小象、小鸭', `
              <rect x="8" y="8" width="444" height="132" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
              <text x="230" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0369a1">全部面向右边（鼻子朝右 →）</text>
              ${arrow(130, 36, 330, 36, '#0284c7', 2.8)}
              ${queueFace(40, 82, '刺猬', '#fed7aa', '#9a3412', 'right')}
              ${queueFace(102, 82, '小羊', '#f8fafc', '#64748b', 'right')}
              ${queueFace(164, 82, '小兔', '#ffffff', '#d97706', 'right', true, true)}
              ${queueFace(226, 82, '小猴', '#fde68a', '#92400e', 'right')}
              ${queueFace(288, 82, '小猪', '#fecdd3', '#be123c', 'right')}
              ${queueFace(350, 82, '小象', '#cbd5e1', '#334155', 'right')}
              ${queueFace(412, 82, '小鸭', '#fef08a', '#b45309', 'right')}
            `), 'indigo'),
            options: [
              { text: '4 只', correct: true },
              { text: '2 只', correct: false },
              { text: '3 只', correct: false }
            ]
          },
          {
            qid: 'M51-1-2',
            title: '2. 面向左边终点前进：第 4 只后面紧跟谁',
            prompt: '6 只小动物排成一队面向左边的小红旗终点前进。请问：<strong>从左边数第 4 只</strong>是谁？并且<strong>在它的后面紧跟着</strong>哪只小动物？',
            tip: '【审题金钥匙】第一步先数位次：从左边旗子旁数第 1, 2, 3, 4，第 4 只是“小鸡”；第二步看朝向辨前后：所有动物都面朝左，尾巴朝右，所以“后面”在它的右边！小鸡右边紧跟着的是“小猴”！',
            visual: wrapVisual(svgFrame(460, 148, '6只动物全部面向左边终点，从左到右：小鹿、小猫、小狗、小鸡、小猴、乌龟', `
              <rect x="8" y="8" width="444" height="132" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
              <text x="30" y="76" text-anchor="middle" font-size="22">🏁</text>
              <text x="30" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">终点</text>
              <text x="230" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#15803d">← 全部面向左边终点前进</text>
              ${arrow(340, 36, 120, 36, '#15803d', 2.8)}
              ${queueFace(86, 82, '小鹿', '#fdba74', '#9a3412', 'left')}
              ${queueFace(152, 82, '小猫', '#fef3c7', '#b45309', 'left')}
              ${queueFace(218, 82, '小狗', '#fde68a', '#92400e', 'left')}
              ${queueFace(284, 82, '小鸡', '#fef08a', '#a16207', 'left')}
              ${queueFace(350, 82, '小猴', '#fed7aa', '#9a3412', 'left')}
              ${queueFace(416, 82, '乌龟', '#bbf7d0', '#166534', 'left')}
            `), 'emerald'),
            options: [
              { text: '小鸡，它后面紧跟着小猴', correct: true },
              { text: '小鸡，它后面紧跟着小狗', correct: false },
              { text: '小狗，它后面紧跟着小鸡', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '背对与面对面镜像相对左右判断',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M51-2-1',
            title: '1. 双图对比：图②面对你的女孩举起哪只手',
            prompt: '看图对比：图① 男孩<strong>背对着你</strong>；图② 女孩<strong>面对着你</strong>，她高高举起画面右边那只手里的小红旗。请问女孩用的是<strong>她自己</strong>的哪只手拿着小红旗？',
            tip: '【审题金钥匙】背对与面对左右大不同！图① 男孩背对你，他的左右和你完全相同；图② 女孩面对着你，她的左右刚好跟你相反！你看到的“画面右边”，正好是女孩“她自己的左手”！',
            visual: wrapVisual(svgFrame(460, 165, '图1男孩背对你举画面左手；图2女孩面对你举画面右边手里的小旗', `
              <rect x="8" y="8" width="212" height="149" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
              <text x="114" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">图① 男孩（背对着你）</text>
              <circle cx="114" cy="56" r="15" fill="#1e293b"/>
              <path d="M98,74 L130,74 L134,116 L94,116 Z" fill="#3b82f6" stroke="#1e40af" stroke-width="1.4"/>
              <rect x="102" y="78" width="24" height="28" rx="4" fill="#fbbf24" stroke="#b45309" stroke-width="1.2"/>
              <text x="114" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">书包</text>
              <line x1="98" y1="80" x2="64" y2="54" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
              <line x1="130" y1="80" x2="152" y2="106" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
              <text x="114" y="146" text-anchor="middle" font-size="11.5" fill="#475569">朝向与你相同</text>

              <rect x="240" y="8" width="212" height="149" rx="12" fill="#fff1f2" stroke="#f43f5e" stroke-width="2"/>
              <text x="346" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#9f1239">★ 图② 女孩（面对着你）</text>
              <circle cx="346" cy="56" r="15" fill="#fed7aa" stroke="#9a3412" stroke-width="1.4"/>
              <circle cx="340" cy="54" r="1.6" fill="#0f172a"/><circle cx="352" cy="54" r="1.6" fill="#0f172a"/>
              <path d="M341,62 Q346,66 351,62" fill="none" stroke="#be123c" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M332,74 L360,74 L368,116 L324,116 Z" fill="#fb7185" stroke="#be123c" stroke-width="1.4"/>
              <line x1="332" y1="80" x2="308" y2="106" stroke="#fb7185" stroke-width="4" stroke-linecap="round"/>
              <line x1="360" y1="80" x2="394" y2="52" stroke="#fb7185" stroke-width="4" stroke-linecap="round"/>
              <line x1="396" y1="54" x2="396" y2="28" stroke="#78350f" stroke-width="2"/>
              <polygon points="397,29 418,35 397,42" fill="#ef4444"/>
              <text x="346" y="146" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">问：举红旗是她自己哪只手？</text>
            `), 'rose'),
            options: [
              { text: '她自己的左手', correct: true },
              { text: '她自己的右手', correct: false },
              { text: '两只手都一样无法分辨', correct: false }
            ]
          },
          {
            qid: 'M51-2-2',
            title: '2. 教室照片：面对你的同学的左手边是谁',
            prompt: '教室照片中，<strong>小明、小红、小亮</strong>三名同学从照片左边到右边坐成一排，而且<strong>全都正面对着你</strong>。请问：坐在<strong>小红她自己左手边</strong>的是哪位同学？',
            tip: '【审题金钥匙】审题抓准以谁为中心：“小红她自己的左手边”是以面对你的小红为标准！因为你们面对面，左右刚好相反：在照片画面右边（你的右手边）坐着的小亮，正好紧挨着小红自己的左手边！',
            visual: wrapVisual(svgFrame(440, 150, '小明、小红、小亮面对着你坐成一排', `
              <rect x="8" y="8" width="424" height="134" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
              <text x="220" y="27" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">三位同学都【面对着你】坐成一排（从左到右：小明、小红、小亮）</text>
              ${[['小明', 82, false], ['小红', 220, true], ['小亮', 358, false]].map(([name, cx, hl]) => `
                <g transform="translate(${cx},72)">
                  <circle cx="0" cy="-16" r="13" fill="#fed7aa" stroke="${hl ? '#be123c' : '#9a3412'}" stroke-width="${hl ? 2 : 1.4}"/>
                  <circle cx="-4" cy="-18" r="1.4" fill="#0f172a"/><circle cx="4" cy="-18" r="1.4" fill="#0f172a"/>
                  <path d="M-4,-12 Q0,-9 4,-12" fill="none" stroke="#9a3412" stroke-width="1.3"/>
                  <rect x="-42" y="2" width="84" height="36" rx="8" fill="${hl ? '#ffe4e6' : '#e0f2fe'}" stroke="${hl ? '#e11d48' : '#0284c7'}" stroke-width="${hl ? 2 : 1.4}"/>
                  <text x="0" y="25" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0f172a">${name}</text>
                </g>
              `).join('')}
              <text x="220" y="132" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">问：小红她自己【左手边】坐着谁？</text>
            `), 'sky'),
            options: [
              { text: '小亮', correct: true },
              { text: '小明', correct: false },
              { text: '右边没有人', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '动态排队跨步移位与队尾调头名次推算',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M51-3-1',
            title: '1. 从第 5 位先向右 3 位再向左 5 位',
            prompt: '9 位同学站在从左往右编号为 1 到 9 号的位子上。小刚原本站在第 5 号位，他先按口令<strong>向右移动 3 格</strong>，接着再<strong>向左移动 5 格</strong>。现在小刚站在从左数第几位？',
            tip: '【审题金钥匙】横排排队位置左右移动规律（左为 1，右为 9）：向右移动会让数字变大（加法 5 + 3 = 8 号）；再向左移动会让数字变小（减法 8 - 5 = 3 号）。所以小刚最终站在从左数第 3 位！',
            visual: wrapVisual(svgFrame(460, 145, '1到9号位置从左到右，小刚在第5位，先向右移动3位，再向左移动5位', `
              <rect x="8" y="8" width="444" height="129" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.5"/>
              <text x="230" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">左 ➔ 右依次编号（小刚原本在第 5 号）</text>
              ${Array.from({length: 9}, (_, i) => {
                const n = i + 1;
                const cx = 42 + i * 47;
                const isFive = n === 5;
                return `
                  <circle cx="${cx}" cy="64" r="16" fill="${isFive ? '#fef3c7' : '#ffffff'}" stroke="${isFive ? '#d97706' : '#6366f1'}" stroke-width="${isFive ? 2.4 : 1.5}"/>
                  <text x="${cx}" y="69" text-anchor="middle" font-size="13.5" font-weight="bold" fill="${isFive ? '#92400e' : '#312e81'}">${n}</text>
                  ${isFive ? '<text x="230" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">★ 原位置</text>' : ''}
                `;
              }).join('')}
              <rect x="34" y="106" width="182" height="24" rx="7" fill="#ffffff" stroke="#818cf8" stroke-width="1.3"/>
              <text x="125" y="123" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e1b4b">① 先向右移动 3 格（→ 3）</text>
              <rect x="244" y="106" width="182" height="24" rx="7" fill="#ffffff" stroke="#818cf8" stroke-width="1.3"/>
              <text x="335" y="123" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e1b4b">② 再向左移动 5 格（← 5）</text>
            `), 'indigo'),
            options: [
              { text: '第 3 位', correct: true },
              { text: '第 7 位', correct: false },
              { text: '第 2 位', correct: false }
            ]
          },
          {
            qid: 'M51-3-2',
            title: '2. 最右 2 只调到最左：从左数名次变化',
            prompt: '8 只小企鹅从左到右排成一横排，原本<strong>企鹅乐乐从左数排在第 4 位</strong>。现在老师把<strong>最右边的 2 只企鹅</strong>（第 7、8 位）调到队伍的<strong>最左边</strong>去排好。这时<strong>从左数</strong>，企鹅乐乐排在第几位？',
            tip: '【审题金钥匙】“后端插到前端，自己名次顺延”！原本乐乐左边有 3 只企鹅；把最右边 2 只调到最左边以后，乐乐左边又多了 2 只（3 + 2 = 5 只）。因此现在从左数，乐乐是第 5 + 1 = 6 位！',
            visual: wrapVisual(svgFrame(460, 158, '8只企鹅从左到右1至8，乐乐在4号，最右边7和8调到最左边', `
              <rect x="8" y="8" width="444" height="142" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.5"/>
              <text x="218" y="23" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c">调换：把最右 2 只移到最左边排好</text>
              <path d="M396,60 Q230,24 38,60" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-dasharray="5,4"/>
              <polyline points="46,53 36,61 48,65" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round"/>
              ${Array.from({length: 8}, (_, i) => {
                const n = i + 1;
                const cx = 42 + i * 54;
                const isLele = n === 4;
                const isMoved = n >= 7;
                return `
                  <rect x="${cx - 22}" y="66" width="44" height="44" rx="8" fill="${isLele ? '#fef3c7' : isMoved ? '#ffe4e6' : '#ffffff'}" stroke="${isLele ? '#d97706' : isMoved ? '#e11d48' : '#0284c7'}" stroke-width="${isLele || isMoved ? 2 : 1.3}" ${isMoved ? 'stroke-dasharray="3,2"' : ''}/>
                  <text x="${cx}" y="86" text-anchor="middle" font-size="14">🐧</text>
                  <text x="${cx}" y="104" text-anchor="middle" font-size="11" font-weight="bold" fill="${isLele ? '#92400e' : '#1e293b'}">${isLele ? '乐(4)' : n}</text>
                `;
              }).join('')}
              <text x="230" y="136" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">调完后，从左数【企鹅乐乐】变成第几位？</text>
            `), 'sky'),
            options: [
              { text: '第 6 位', correct: true },
              { text: '第 2 位', correct: false },
              { text: '第 4 位', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '三层货架多维定位 & 小房子线索排除推理',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M51-4-1',
            title: '1. 三层 3×3 储物柜上下左右综合定位',
            prompt: '观察下面的 3 层储物柜（以你看图时的左右为准）：书包放在正中间格子。请问：<strong>书包的上面一层</strong>、<strong>闹钟右边的格子</strong>放着什么物品？',
            tip: '【审题金钥匙】两步精确找格子：① 先找上下层：“书包的上面一层”是上层；② 再看左右：物品不带面向，以我们正眼看到的左右为准，在“闹钟”右边的那一格就是“地球仪”！',
            visual: wrapVisual(svgFrame(440, 170, '3层3列储物柜，书包在正中，上层左铅笔盒、中闹钟、右地球仪', `
              <rect x="8" y="8" width="424" height="154" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.6"/>
              ${['上层', '中层', '下层'].map((rowName, r) =>
                `<text x="42" y="${42 + r * 48}" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#92400e">${rowName}</text>`
              ).join('')}
              ${[
                ['铅笔盒', '⏰ 闹钟', '🌐 地球仪'],
                ['✂️ 剪刀', '🎒 书包', '💡 台灯'],
                ['🧱 积木', '⚽ 足球', '🥤 水壶']
              ].map((row, r) => row.map((label, c) => {
                const gx = 82 + c * 114;
                const gy = 16 + r * 48;
                const center = r === 1 && c === 1;
                return `
                  <rect x="${gx}" y="${gy}" width="106" height="40" rx="8" fill="${center ? '#fef3c7' : '#ffffff'}" stroke="${center ? '#d97706' : '#cbd5e1'}" stroke-width="${center ? 2 : 1.4}"/>
                  <text x="${gx + 53}" y="${gy + 25}" text-anchor="middle" font-size="13" font-weight="bold" fill="${center ? '#92400e' : '#1e293b'}">${label}</text>
                `;
              }).join('')).join('')}
            `), 'amber'),
            options: [
              { text: '地球仪', correct: true },
              { text: '铅笔盒', correct: false },
              { text: '台灯', correct: false }
            ]
          },
          {
            qid: 'M51-4-2',
            title: '2. 并排三座小房子邻居位置排除推理',
            prompt: '并排着左、中、右 3 座小房子，分别住着小熊、小兔和小猫。① 小熊说：“我既没住在正中间，也没住在最右边。”② 小猫说：“我和小熊不是紧挨着的邻居。”请问<strong>正中间</strong>房子里住着谁？',
            tip: '【审题金钥匙】逻辑排除两步法：① 由线索① “既不在中间也不在最右”，立刻锁死小熊住【最左边】；② 线索② “小猫和小熊不是紧挨邻居”，而紧挨最左边的是正中间，所以小猫不能住正中间（必住最右边）；③ 剩下的【正中间】就一定是小兔！',
            visual: wrapVisual(svgFrame(440, 155, '左中右3座小房子门牌为问号，附小熊和小猫两条线索', `
              <rect x="8" y="8" width="424" height="139" rx="14" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.5"/>
              ${[[82, '最左边房子'], [220, '正中间房子'], [358, '最右边房子']].map(([cx, lbl]) => `
                <polygon points="${cx - 42},44 ${cx},16 ${cx + 42},44" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.6" stroke-linejoin="round"/>
                <rect x="${cx - 34}" y="44" width="68" height="44" rx="4" fill="#ffffff" stroke="#6d28d9" stroke-width="1.6"/>
                <text x="${cx}" y="72" text-anchor="middle" font-size="18" font-weight="black" fill="#6d28d9">？</text>
                <text x="${cx}" y="104" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#4c1d95">${lbl}</text>
              `).join('')}
              <text x="220" y="124" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#334155">① 小熊：既不在正中间，也不在最右边</text>
              <text x="220" y="140" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#334155">② 小猫：我和小熊不是紧挨着的邻居</text>
            `), 'purple'),
            options: [
              { text: '小兔', correct: true },
              { text: '小猫', correct: false },
              { text: '小熊', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '俯视路口左右转弯 & 电梯上下楼层推算',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M51-5-1',
            title: '1. 俯视十字路口转弯：车头向下，往自己右手边转',
            prompt: '看俯视马路图：红色小汽车正从上方道路<strong>车头朝下</strong>开往十字路口。到了路口后，小汽车往<strong>它自己的右手边</strong>转弯。请问小汽车会开向哪里？',
            tip: '【审题金钥匙】超经典视角转换题！千万别直接看屏幕的右边！先把自己坐进汽车驾驶座面向下方（车头方向）：此时“你自己的右手边”正好指向屏幕的左侧！所以往它自己右手边拐，会开向“图书馆”！',
            visual: wrapVisual(svgFrame(440, 185, '俯视十字路口，车头朝下的红车，左图书馆、右动物园、下直行游乐园', `
              <rect x="8" y="8" width="424" height="169" rx="14" fill="#ecfdf5" stroke="#86efac" stroke-width="1.5"/>
              <rect x="180" y="12" width="80" height="160" fill="#94a3b8"/>
              <rect x="12" y="72" width="416" height="60" fill="#94a3b8"/>
              <line x1="220" y1="14" x2="220" y2="170" stroke="#f8fafc" stroke-width="2" stroke-dasharray="8,6"/>
              <line x1="14" y1="102" x2="426" y2="102" stroke="#f8fafc" stroke-width="2" stroke-dasharray="8,6"/>
              <rect x="205" y="20" width="30" height="44" rx="7" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.6"/>
              <rect x="209" y="48" width="22" height="10" rx="2" fill="#e0f2fe"/>
              <circle cx="211" cy="63" r="2.5" fill="#fde047"/><circle cx="229" cy="63" r="2.5" fill="#fde047"/>
              ${arrow(220, 68, 220, 94, '#fef08a', 2.8)}
              <text x="315" y="42" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#991b1b">车头朝下行驶 ↓</text>
              <rect x="18" y="80" width="96" height="44" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.6"/>
              <text x="66" y="99" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">📚 图书馆</text>
              <text x="66" y="116" text-anchor="middle" font-size="10.5" fill="#475569">← 画面左侧</text>
              <rect x="326" y="80" width="96" height="44" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.6"/>
              <text x="374" y="99" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">🦒 动物园</text>
              <text x="374" y="116" text-anchor="middle" font-size="10.5" fill="#475569">画面右侧 →</text>
              <rect x="160" y="138" width="120" height="32" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
              <text x="220" y="159" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">🎡 游乐园 ↓</text>
            `), 'emerald'),
            options: [
              { text: '图书馆（画面左侧道路）', correct: true },
              { text: '动物园（画面右侧道路）', correct: false },
              { text: '游乐园（直行下方道路）', correct: false }
            ]
          },
          {
            qid: 'M51-5-2',
            title: '2. 电梯楼层升降两步推算',
            prompt: '小红和妈妈逛商场坐电梯：她们从 <strong>3 楼</strong>出发，电梯先<strong>往上升 4 层</strong>，接着又<strong>往下降 2 层</strong>停了下来。请问现在停在几楼？',
            tip: '【审题金钥匙】电梯升降每升高 1 层就加 1，每下降 1 层就减 1。从 3 楼出发，先升 4 层：3 + 4 = 7（楼）；再降 2 层：7 - 2 = 5（楼）！记住“升 4 层”就是直接加 4！',
            visual: wrapVisual(svgFrame(440, 170, '1到8楼电梯竖井，起点标在3楼，指令先往上升4层、再往下降2层', `
              <rect x="8" y="8" width="424" height="154" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
              ${Array.from({length: 8}, (_, i) => {
                const fl = 8 - i;
                const y = 16 + i * 17;
                const isThree = fl === 3;
                return `
                  <rect x="36" y="${y}" width="112" height="16" rx="3" fill="${isThree ? '#fef3c7' : '#ffffff'}" stroke="${isThree ? '#d97706' : '#94a3b8'}" stroke-width="${isThree ? 1.8 : 1}"/>
                  <text x="92" y="${y + 12}" text-anchor="middle" font-size="11" font-weight="bold" fill="${isThree ? '#92400e' : '#334155'}">${fl} 楼${isThree ? '（起点 ★）' : ''}</text>
                `;
              }).join('')}
              <rect x="178" y="24" width="234" height="36" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
              <text x="295" y="47" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">起点位置：从 3 楼出发</text>
              <rect x="178" y="70" width="234" height="36" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
              <text x="295" y="93" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">① 先往上升 4 层（↑ 4）</text>
              <rect x="178" y="116" width="234" height="36" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.5"/>
              <text x="295" y="139" text-anchor="middle" font-size="13" font-weight="bold" fill="#be123c">② 再往下降 2 层（↓ 2）➔ ？楼</text>
            `), 'sky'),
            options: [
              { text: '5 楼', correct: true },
              { text: '7 楼', correct: false },
              { text: '6 楼', correct: false }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 第 52 套：方格路径位移与图形旋转逻辑卷
  // =========================================================================
  {
    id: 52,
    subject: 'math',
    unit: '名校专项：动态方位与逻辑推理',
    title: '第 52 套：一年级数学·方格路径位移与图形旋转逻辑卷',
    tag: '路径旋转',
    tagColor: 'bg-rose-100 text-rose-800',
    desc: '冲刺幼小衔接与名校压轴思维：方格地图步数走位、已知终点逆向还原起点、顺/逆时针 90° 图形旋转、九宫格双重密码、田字格双符号移动、赛跑动态反超与俯视对桌观察。',
    timeLimit: 35,
    fullScore: 100,
    passScore: 60,
    sections: [
      {
        num: '一',
        title: '方格地图方向位移（正推终点 & 逆向还原起点）',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M52-1-1',
            title: '1. 小蚂蚁方格找食物：先向上 2 格，再向右 3 格',
            prompt: '在下面的方格地图中，小蚂蚁从左下角格子出发：<strong>先向上走 2 格，再向右走 3 格</strong>。请问小蚂蚁最后停在哪个食物格子里？',
            tip: '【审题金钥匙】走方格步数秘诀：起点那格不算步数，每进入一个新格子才算走 1 格！从左下角出发：① 向上数 2 格到达第 2 排最左边；② 从这一格向右数 1、2、3 格，正好停在第 2 排第 4 列的“🍬 糖果”格里！',
            visual: wrapVisual(svgFrame(440, 175, '4行5列方格图，左下角小蚂蚁出发，先向上2格再向右3格到糖果', `
              <rect x="8" y="8" width="424" height="159" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
              ${Array.from({length: 4}, (_, r) => Array.from({length: 5}, (_, c) => {
                const gx = 56 + c * 66;
                const gy = 18 + r * 35;
                let txt = '';
                let bg = '#ffffff';
                if (r === 3 && c === 0) { txt = '🐜 起点'; bg = '#fef3c7'; }
                else if (r === 1 && c === 3) { txt = '🍬 糖果'; bg = '#ffe4e6'; }
                else if (r === 1 && c === 2) { txt = '🍪 饼干'; bg = '#fff7ed'; }
                else if (r === 2 && c === 3) { txt = '🍎 苹果'; bg = '#ecfdf5'; }
                else if (r === 0 && c === 3) { txt = '🍓 草莓'; bg = '#fdf2f8'; }
                return `
                  <rect x="${gx}" y="${gy}" width="64" height="33" rx="4" fill="${bg}" stroke="#64748b" stroke-width="1.3"/>
                  ${txt ? `<text x="${gx + 32}" y="${gy + 21}" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">${txt}</text>` : ''}
                `;
              }).join('')).join('')}
            `), 'sky'),
            options: [
              { text: '🍬 糖果', correct: true },
              { text: '🍪 饼干', correct: false },
              { text: '🍎 苹果', correct: false }
            ]
          },
          {
            qid: 'M52-1-2',
            title: '2. 逆向推起点：先向右 2 格再向上 1 格到达终点',
            prompt: '小机器人从 A、B、C 三个星星格子里的某一个出发：<strong>先向右走 2 格，再向上走 1 格</strong>，正好停在右上方的 <strong>🏁 终点</strong>格里。请问小机器人<strong>原本从哪个格子出发</strong>？',
            tip: '【审题金钥匙】已知终点倒推起点，必须把路线“顺序颠倒、方向相反”！最后一步是“向上 1 格”进终点的，倒推要先“向下退 1 格”；前一步是“向右 2 格”，倒推要“向左退 2 格”！正好退回到【A 格】！代入验算：从 A 向右 2 格、再向上 1 格，稳稳落在 🏁！',
            visual: wrapVisual(svgFrame(440, 175, '4行4列方格图，终点在第2行第4列，A在3行2列、B在1行2列、C在4行2列', `
              <rect x="8" y="8" width="424" height="159" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.5"/>
              ${Array.from({length: 4}, (_, r) => Array.from({length: 4}, (_, c) => {
                const gx = 32 + c * 62;
                const gy = 18 + r * 35;
                let txt = '';
                let bg = '#ffffff';
                if (r === 1 && c === 3) { txt = '🏁 终点'; bg = '#dcfce7'; }
                else if (r === 2 && c === 1) { txt = '⭐ A'; bg = '#fef3c7'; }
                else if (r === 0 && c === 1) { txt = '⭐ B'; bg = '#fef3c7'; }
                else if (r === 3 && c === 1) { txt = '⭐ C'; bg = '#fef3c7'; }
                return `
                  <rect x="${gx}" y="${gy}" width="60" height="33" rx="4" fill="${bg}" stroke="#6366f1" stroke-width="1.3"/>
                  ${txt ? `<text x="${gx + 30}" y="${gy + 21}" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1e1b4b">${txt}</text>` : ''}
                `;
              }).join('')).join('')}
              <rect x="292" y="34" width="128" height="106" rx="10" fill="#ffffff" stroke="#6366f1" stroke-width="1.5"/>
              <text x="356" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">前进路线：</text>
              <text x="356" y="82" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">① 先向右走 2 格</text>
              <text x="356" y="104" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">② 再向上走 1 格</text>
              <text x="356" y="126" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">➔ 到达 🏁 终点</text>
            `), 'indigo'),
            options: [
              { text: 'A 格', correct: true },
              { text: 'B 格', correct: false },
              { text: 'C 格', correct: false }
            ]
          }
        ]
      },
      {
        num: '二',
        title: '图形与箭头顺时针 / 逆时针旋转规律',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M52-2-1',
            title: '1. 箭头顺时针旋转：上 ➔ 右 ➔ 下 ➔ ？',
            prompt: '观察方框里大箭头每一次转动的规律：第 1 个朝上 <strong>↑</strong>，第 2 个朝右 <strong>→</strong>，第 3 个朝下 <strong>↓</strong>。照这样顺时针继续转，第 4 个框里的问号应该选哪一个？',
            tip: '【审题金钥匙】想象钟表指针顺时针转一圈：先指向正上方（12 点），转一下指向右（3 点），再转一下指向下（6 点），下一步就会转到左边（9 点），也就是“朝左的箭头 ⬅️”！',
            visual: wrapVisual(svgFrame(460, 130, '4个方框依次为朝上箭头、朝右箭头、朝下箭头、问号', `
              <rect x="8" y="8" width="444" height="114" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.5"/>
              ${[[22, 0], [134, 90], [246, 180]].map(([x, rot]) => `
                <rect x="${x}" y="22" width="84" height="84" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
                <g transform="translate(${x + 42},64) rotate(${rot})">
                  ${arrow(0, 24, 0, -24, '#0284c7', 4.5)}
                </g>
              `).join('')}
              ${arrow(110, 64, 130, 64, '#64748b', 2.2)}
              ${arrow(222, 64, 242, 64, '#64748b', 2.2)}
              ${arrow(334, 64, 354, 64, '#64748b', 2.2)}
              <rect x="358" y="22" width="84" height="84" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2" stroke-dasharray="5,4"/>
              <text x="400" y="74" text-anchor="middle" font-size="26" font-weight="black" fill="#b45309">？</text>
            `), 'sky'),
            options: [
              { text: '朝左的箭头 ⬅️', correct: true },
              { text: '朝上的箭头 ⬆️', correct: false },
              { text: '朝右的箭头 ➡️', correct: false }
            ]
          },
          {
            qid: 'M52-2-2',
            title: '2. 红点在方格角落逆时针跳格推理',
            prompt: '观察正方形里红圆点位置的变化规律：第 1 幅红点在<strong>右上角</strong>，第 2 幅在<strong>左上角</strong>，第 3 幅在<strong>左下角</strong>。照这样转下去，第 4 幅图里红点应该移到哪个角落？',
            tip: '【审题金钥匙】角落移动方向：右上角 ➔ 左上角 ➔ 左下角，红点正按着“逆时针”方向挨个角落跳！从左下角再逆时针走一步，下一个就会跳到“右下角”！',
            visual: wrapVisual(svgFrame(460, 135, '4个田字正方形，红点依次在右上角、左上角、左下角、第4格问号', `
              <rect x="8" y="8" width="444" height="119" rx="14" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
              ${[[24, 58, 18], [136, 18, 18], [248, 18, 58]].map(([x, dx, dy]) => `
                <rect x="${x}" y="26" width="78" height="78" rx="8" fill="#ffffff" stroke="#475569" stroke-width="1.6"/>
                <line x1="${x + 39}" y1="26" x2="${x + 39}" y2="104" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
                <line x1="${x}" y1="65" x2="${x + 78}" y2="65" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
                <circle cx="${x + dx}" cy="${26 + dy}" r="11" fill="#e11d48"/>
              `).join('')}
              ${arrow(106, 65, 130, 65, '#9f1239', 2)}
              ${arrow(218, 65, 242, 65, '#9f1239', 2)}
              ${arrow(330, 65, 354, 65, '#9f1239', 2)}
              <rect x="358" y="26" width="78" height="78" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2" stroke-dasharray="5,4"/>
              <text x="397" y="74" text-anchor="middle" font-size="24" font-weight="black" fill="#b45309">？</text>
            `), 'rose'),
            options: [
              { text: '右下角', correct: true },
              { text: '右上角', correct: false },
              { text: '左上角', correct: false }
            ]
          }
        ]
      },
      {
        num: '三',
        title: '九宫格“双重规律” & 田字格双符号同步移动',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M52-3-1',
            title: '1. 九宫格“颜色 + 箭头朝向”双重密码推理',
            prompt: '观察 3×3 九宫格双重规律：每一行、每一列都必须集齐“红、蓝、黄”三种颜色，且分别配着“↑、→、↓”三种箭头。请问右下角空格 <strong>？</strong> 里应该填什么？',
            tip: '【审题金钥匙】九宫格双重推理“先看少什么再配对”：最后一行已经有了“黄 ↓”和“红 ↑”，所以剩下的格子里，颜色缺少“蓝”，箭头缺少“→”，合起来就是“蓝色的朝右箭头（蓝 →）”！用最后一列竖着检验也完全符合！',
            visual: wrapVisual(svgFrame(420, 175, '3x3九宫格每行每列有红上、蓝右、黄下三种，右下角为空白问号', `
              <rect x="8" y="8" width="404" height="159" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
              ${[
                [['红', '↑', '#fee2e2', '#e11d48'], ['蓝', '→', '#dbeafe', '#0284c7'], ['黄', '↓', '#fef3c7', '#d97706']],
                [['蓝', '→', '#dbeafe', '#0284c7'], ['黄', '↓', '#fef3c7', '#d97706'], ['红', '↑', '#fee2e2', '#e11d48']],
                [['黄', '↓', '#fef3c7', '#d97706'], ['红', '↑', '#fee2e2', '#e11d48'], null]
              ].map((row, r) => row.map((cell, c) => {
                const gx = 104 + c * 74;
                const gy = 16 + r * 49;
                if (!cell) {
                  return `<rect x="${gx}" y="${gy}" width="66" height="42" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4,3"/>
                  <text x="${gx + 33}" y="${gy + 28}" text-anchor="middle" font-size="20" font-weight="black" fill="#92400e">？</text>`;
                }
                const [cname, dir, bg, fg] = cell;
                return `<rect x="${gx}" y="${gy}" width="66" height="42" rx="8" fill="${bg}" stroke="${fg}" stroke-width="1.6"/>
                <text x="${gx + 22}" y="${gy + 26}" text-anchor="middle" font-size="13" font-weight="bold" fill="${fg}">${cname}</text>
                <text x="${gx + 46}" y="${gy + 27}" text-anchor="middle" font-size="18" font-weight="black" fill="${fg}">${dir}</text>`;
              }).join('')).join('')}
            `), 'purple'),
            options: [
              { text: '蓝色的朝右箭头（蓝 →）', correct: true },
              { text: '蓝色的朝下箭头（蓝 ↓）', correct: false },
              { text: '黄色的朝右箭头（黄 →）', correct: false }
            ]
          },
          {
            qid: 'M52-3-2',
            title: '2. 田字格太阳 ☀️ 与月亮 🌙 双重顺时针移动',
            prompt: '观察 2×2 田字格里的“太阳 ☀️”和“月亮 🌙”：第 1 幅 ☀️ 在左上、🌙 在右下；第 2 幅 ☀️ 在右上、🌙 在左下；第 3 幅 ☀️ 在右下、🌙 在左上。第 4 幅图中它们应该分别在哪里？',
            tip: '【审题金钥匙】双图形“分头追踪法”：单独盯住 ☀️ 太阳，它的顺序是“左上 ➔ 右上 ➔ 右下”，一直按顺时针走 1 格，第 4 幅图必到“左下角”；再单独盯住 🌙 月亮，“右下 ➔ 左下 ➔ 左上”，顺时针下一步必到“右上角”！',
            visual: wrapVisual(svgFrame(460, 145, '4个田字格：太阳和月亮同步顺时针移动1格', `
              <rect x="8" y="8" width="444" height="129" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
              ${[
                [22, 0, 3, '图1'],
                [134, 1, 2, '图2'],
                [246, 3, 0, '图3']
              ].map(([x, sunIdx, moonIdx, label]) => {
                const pos = [[19, 25], [57, 25], [19, 63], [57, 63]];
                return `
                  <rect x="${x}" y="20" width="76" height="76" rx="8" fill="#ffffff" stroke="#b45309" stroke-width="1.6"/>
                  <line x1="${x + 38}" y1="20" x2="${x + 38}" y2="96" stroke="#cbd5e1" stroke-width="1.2"/>
                  <line x1="${x}" y1="58" x2="${x + 76}" y2="58" stroke="#cbd5e1" stroke-width="1.2"/>
                  <text x="${x + pos[sunIdx][0]}" y="${20 + pos[sunIdx][1]}" text-anchor="middle" font-size="18">☀️</text>
                  <text x="${x + pos[moonIdx][0]}" y="${20 + pos[moonIdx][1]}" text-anchor="middle" font-size="18">🌙</text>
                  <text x="${x + 38}" y="116" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">${label}</text>
                `;
              }).join('')}
              ${arrow(104, 58, 128, 58, '#b45309', 2)}
              ${arrow(216, 58, 240, 58, '#b45309', 2)}
              ${arrow(328, 58, 352, 58, '#b45309', 2)}
              <rect x="358" y="20" width="76" height="76" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2" stroke-dasharray="4,3"/>
              <text x="396" y="66" text-anchor="middle" font-size="24" font-weight="black" fill="#b45309">？</text>
              <text x="396" y="116" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">图4</text>
            `), 'amber'),
            options: [
              { text: '☀️ 在左下角，🌙 在右上角', correct: true },
              { text: '☀️ 在左上角，🌙 在右下角', correct: false },
              { text: '☀️ 在右上角，🌙 在左下角', correct: false }
            ]
          }
        ]
      },
      {
        num: '四',
        title: '赛跑动态名次反超 & 面对面观察物体视角',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M52-4-1',
            title: '1. 赛跑冲刺两步连续反超推理',
            prompt: '赛跑开局从前到后的名次是：<strong>第1名小兔、第2名小猴、第3名小鹿、第4名小羊</strong>。① 半路上，第 4 名的小羊一下子超过了前面 2 名选手；② 终点前，小鹿又反超了小猴（第一名小兔位置始终不变）。最后冲线时谁获得了<strong>第 2 名</strong>？',
            tip: '【审题金钥匙】按动态变化排顺序：① 开始名次：1兔、2猴、3鹿、4羊；② 小羊从第 4 超过前面 2 位（超过小鹿和小猴），变成：1兔、2羊、3猴、4鹿；③ 小鹿再反超小猴，最终：1兔、2羊、3鹿、4猴！所以第 2 名是“小羊”！',
            visual: wrapVisual(svgFrame(460, 172, '赛跑开局从左向右奔向终点：第4小羊、第3小鹿、第2小猴、第1小兔，附两步反超线索', `
              <rect x="8" y="8" width="444" height="156" rx="14" fill="#ecfdf5" stroke="#86efac" stroke-width="1.5"/>
              <text x="200" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">开局跑道方向（向右冲刺 → 🏁终点）</text>
              <rect x="18" y="34" width="382" height="50" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="1.4"/>
              <text x="64" y="64" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#334155">第4: 小羊</text>
              <text x="156" y="64" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#334155">第3: 小鹿</text>
              <text x="248" y="64" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#334155">第2: 小猴</text>
              <text x="342" y="64" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#15803d">第1: 小兔</text>
              <text x="424" y="66" text-anchor="middle" font-size="22">🏁</text>
              <text x="230" y="109" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">① 半路：第4名小羊一下子超过了前面 2 名选手</text>
              <text x="230" y="129" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">② 终点前：小鹿反超小猴，小兔一直保持第 1 名</text>
              <text x="230" y="149" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">问：最后冲过终点时，谁获得了【第 2 名】？</text>
            `), 'emerald'),
            options: [
              { text: '小羊', correct: true },
              { text: '小鹿', correct: false },
              { text: '小猴', correct: false }
            ]
          },
          {
            qid: 'M52-4-2',
            title: '2. 俯视方桌对坐观察：苹果在乐乐的哪一边',
            prompt: '看下面俯视观察图：长桌桌面左边放着 🍎 苹果，右边放着 ⚽ 足球。<strong>乐乐站在长桌对面</strong>（面朝下方看着桌上的水果和球）。请问：在乐乐眼里，<strong>🍎 苹果在乐乐自己的哪一边</strong>？',
            tip: '【审题金钥匙】人站在桌面两对面观察物品时，左右视野刚好相反！我们从下方（月亮这一侧）往上看，苹果在左手边；但乐乐站在桌子对面往下看桌面（身体转了半圈），屏幕左边对乐乐而言就是他自己的“右边”！',
            visual: wrapVisual(svgFrame(440, 165, '长桌左放苹果右放足球，乐乐在对面向下看，月亮在下方往上看', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.5"/>
              <rect x="132" y="16" width="176" height="28" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>
              <text x="220" y="35" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#92400e">👦 乐乐（站对面往下看 ↓）</text>
              <rect x="108" y="54" width="224" height="58" rx="10" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
              ${apple(162, 82)}
              <text x="196" y="87" font-size="13" font-weight="bold" fill="#7f1d1d">苹果</text>
              <text x="266" y="89" text-anchor="middle" font-size="20">⚽</text>
              <text x="302" y="87" font-size="13" font-weight="bold" fill="#1e293b">足球</text>
              <rect x="132" y="122" width="176" height="28" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.5"/>
              <text x="220" y="141" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#9f1239">👧 月亮（站下方往上看 ↑）</text>
            `), 'sky'),
            options: [
              { text: '苹果在乐乐的右边', correct: true },
              { text: '苹果在乐乐的左边', correct: false },
              { text: '苹果挡住了足球看不见', correct: false }
            ]
          }
        ]
      },
      {
        num: '五',
        title: '钟表顺时针旋转推算 & 城堡门牌方位推理',
        score: 20,
        type: 'choice',
        items: [
          {
            qid: 'M52-5-1',
            title: '1. 钟表时针顺时针旋转 3 个大格是几时',
            prompt: '看图读钟表：现在钟面上是 <strong>2 时整</strong>（分针指着 12，时针指着 2）。如果时针接着<strong>按顺时针方向再走 3 个大格</strong>（分针同时转完 3 圈回到 12），那时是几时？',
            tip: '【审题金钥匙】认准钟表的“顺时针方向”：数字从 1 ➔ 2 ➔ 3 ➔ 4 ➔ 5 越来越大的方向！现在时针指 2，顺时针往前走 3 个大格（2 + 3 = 5），正好指向数字 5，时间就是 5 时整！注意不能倒着减成 11 时！',
            visual: wrapVisual(svgFrame(440, 165, '钟面现在2时整，外部箭头标明时针顺时针再走3个大格', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#eef2ff" stroke="#a5b4fc" stroke-width="1.5"/>
              <circle cx="118" cy="82" r="58" fill="#ffffff" stroke="#312e81" stroke-width="2.4"/>
              ${Array.from({length: 12}, (_, i) => {
                const n = i + 1;
                const rad = (n * 30 - 90) * Math.PI / 180;
                const tx = 118 + 45 * Math.cos(rad);
                const ty = 82 + 45 * Math.sin(rad) + 4;
                return `<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e1b4b">${n}</text>`;
              }).join('')}
              <line x1="118" y1="82" x2="118" y2="38" stroke="#475569" stroke-width="2.6" stroke-linecap="round"/>
              <line x1="118" y1="82" x2="146" y2="66" stroke="#e11d48" stroke-width="4" stroke-linecap="round"/>
              <circle cx="118" cy="82" r="3.5" fill="#1e1b48"/>
              <path d="M174,50 A66,66 0 0,1 180,108" fill="none" stroke="#0284c7" stroke-width="2.4"/>
              <polyline points="174,102 180,110 186,101" fill="none" stroke="#0284c7" stroke-width="2.4" stroke-linecap="round"/>
              <rect x="214" y="34" width="198" height="96" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
              <text x="313" y="60" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e1b4b">现在时间：2 时整</text>
              <text x="313" y="86" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0369a1">时针顺时针再走 3 大格</text>
              <text x="313" y="112" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#be123c">➔ 变成 ？时整</text>
            `), 'indigo'),
            options: [
              { text: '5 时', correct: true },
              { text: '11 时', correct: false },
              { text: '6 时', correct: false }
            ]
          },
          {
            qid: 'M52-5-2',
            title: '2. 城堡四扇门方位线索推理',
            prompt: '城堡里从左到右排着 1、2、3、4 四扇门，皇冠藏在其中一扇门后面。① 线索一：皇冠既不在最左边的 1 号门，也不在最右边的 4 号门；② 线索二：<strong>3 号门在皇冠门的右边</strong>。请问皇冠藏在哪扇门后面？',
            tip: '【审题金钥匙】相对位置转换推理：① 先排除最左 1 号和最右 4 号，只剩中间 2 号和 3 号；② 读准线索二：“3 号门在皇冠门的右边”，反过来说，皇冠门一定在 3 号门的【左边】！在 2 号和 3 号之中位于 3 号左边的就是“2 号门”！',
            visual: wrapVisual(svgFrame(440, 165, '从左到右1至4号城堡门，皇冠不在1和4，3号门在皇冠门的右边', `
              <rect x="8" y="8" width="424" height="149" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
              ${[1, 2, 3, 4].map((n, idx) => {
                const gx = 38 + idx * 96;
                return `
                  <path d="M${gx},86 L${gx},42 A28,24 0 0,1 ${gx + 60},42 L${gx + 60},86 Z" fill="#ffffff" stroke="#b45309" stroke-width="1.8"/>
                  <text x="${gx + 30}" y="64" text-anchor="middle" font-size="14" font-weight="black" fill="#92400e">${n}号门</text>
                `;
              }).join('')}
              <text x="220" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">① 👑 皇冠既不在最左 1 号门，也不在最右 4 号门</text>
              <text x="220" y="132" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">② 关键线索：3 号门在【👑 皇冠门】的右边</text>
            `), 'amber'),
            options: [
              { text: '2 号门', correct: true },
              { text: '3 号门', correct: false },
              { text: '1 号门', correct: false }
            ]
          }
        ]
      }
    ]
  }
];

// Clean static verification before touching target file
const qidSet = new Set();
for (const p of papers49to52) {
  assert.doesNotMatch(p.desc, /\*\*|`/, `Paper ${p.id} desc must not contain raw markdown`);
  assert.doesNotMatch(p.title, /\*\*|`/, `Paper ${p.id} title must not contain raw markdown`);
  assert.equal(p.sections.reduce((s, sec) => s + sec.score, 0), 100, `Paper ${p.id} sum != 100`);
  assert.equal(p.timeLimit, 35);
  assert.equal(p.fullScore, 100);
  for (const sec of p.sections) {
    assert.doesNotMatch(sec.title, /\*\*|`/, `Paper ${p.id} sec ${sec.num} title must not contain raw markdown`);
    for (const item of sec.items) {
      assert.ok(!qidSet.has(item.qid), `Duplicate QID ${item.qid}`);
      qidSet.add(item.qid);
      assert.doesNotMatch(item.prompt, /\*\*|`/, `${item.qid} prompt must not contain raw markdown (** or \`)`);
      assert.doesNotMatch(item.tip, /\*\*|`|<[^>]+>/, `${item.qid} tip must not contain raw markdown or HTML`);
      assert.ok(item.visual.includes('<svg '), `${item.qid} missing <svg>`);
      assert.ok(item.tip.startsWith('【审题金钥匙】'), `${item.qid} tip format`);
      assert.equal(item.options.filter(o => o.correct).length, 1, `${item.qid} options correct count`);
      assert.equal(new Set(item.options.map(o => o.text)).size, item.options.length, `${item.qid} duplicate options`);
    }
  }
}

// Safely splice into public/exercises/original_papers.js (preserving papers 31..48 identically)
const targetPath = 'public/exercises/original_papers.js';
const origText = fs.readFileSync(targetPath, 'utf8').replace(/\r\n/g, '\n');

// Evaluate current database cleanly
const ctx = { window: { QUIZ_DATABASE: [], MATH_DATABASE: [], ENGLISH_DATABASE: [] } };
vm.runInNewContext(origText, ctx);
const existingMath = ctx.window.ORIGINAL_PAPERS.math.filter(p => p.id < 49);
const existingChinese = ctx.window.ORIGINAL_PAPERS.chinese;

// Preserve everything up through paper 48 byte-for-byte if markers exist, otherwise cleanly rebuild from existing < 49
const anchorIdx = origText.indexOf('\n  ]\n};\nwindow.QUIZ_DATABASE.push');
assert.ok(anchorIdx > 0, 'Could not find ORIGINAL_PAPERS array tail');

let headBeforeClosing;
const alreadyHas49 = ctx.window.ORIGINAL_PAPERS.math.some(p => p.id >= 49);
if (alreadyHas49) {
  const newObj = {
    chinese: existingChinese,
    math: [...existingMath, ...papers49to52]
  };
  const headerComment = origText.slice(0, origText.indexOf('window.ORIGINAL_PAPERS = '));
  const footer = `\nwindow.QUIZ_DATABASE.push(...window.ORIGINAL_PAPERS.chinese);\nwindow.MATH_DATABASE.push(...window.ORIGINAL_PAPERS.math);\n`;
  const output = `${headerComment}window.ORIGINAL_PAPERS = ${JSON.stringify(newObj, null, 2)};${footer}`;
  fs.writeFileSync(targetPath, output, 'utf8');
} else {
  // Splice right after paper 48's closing `    }` before `\n  ]\n};` so 0 bytes of existing data change!
  const beforeArrClose = origText.slice(0, anchorIdx);
  const afterArrClose = origText.slice(anchorIdx);
  const formattedAdditions = papers49to52
    .map(p => JSON.stringify(p, null, 2).split('\n').map(line => '    ' + line).join('\n'))
    .join(',\n');
  const spliced = `${beforeArrClose},\n${formattedAdditions}${afterArrClose}`;
  fs.writeFileSync(targetPath, spliced, 'utf8');
}

// Re-verify resulting file parses cleanly and leaves all <=48 papers untouched
const verifyCtx = { window: { QUIZ_DATABASE: [], MATH_DATABASE: [], ENGLISH_DATABASE: [] } };
vm.runInNewContext(fs.readFileSync(targetPath, 'utf8'), verifyCtx);
assert.equal(verifyCtx.window.ORIGINAL_PAPERS.chinese.length, existingChinese.length);
assert.equal(verifyCtx.window.ORIGINAL_PAPERS.math.length, existingMath.length + 4);
assert.equal(
  JSON.stringify(verifyCtx.window.ORIGINAL_PAPERS.math.filter(p => p.id < 49)),
  JSON.stringify(existingMath),
  'Existing math papers < 49 must stay identical!'
);
assert.equal(
  JSON.stringify(verifyCtx.window.ORIGINAL_PAPERS.chinese),
  JSON.stringify(existingChinese),
  'Existing chinese papers must stay identical!'
);

console.log(`✅ Successfully generated and verified Papers 49–52 in ${targetPath} (${verifyCtx.window.ORIGINAL_PAPERS.math.length} original/special math papers total).`);
