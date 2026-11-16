export const wrapVisual = (svg, accent = 'sky') => {
  const palette = {
    sky: 'bg-sky-50/70 border-sky-200',
    amber: 'bg-amber-50/70 border-amber-200',
    emerald: 'bg-emerald-50/70 border-emerald-200',
    purple: 'bg-purple-50/70 border-purple-200',
    rose: 'bg-rose-50/70 border-rose-200',
    indigo: 'bg-indigo-50/70 border-indigo-200'
  };
  return `<div class="p-2.5 ${palette[accent] || palette.sky} border rounded-xl w-full flex justify-center">${svg}</div>`;
};

export const svgFrame = (w, h, label, body) =>
  `<svg viewBox="0 0 ${w} ${h}" class="w-full max-w-[460px] h-auto select-none" role="img" aria-label="${label}">${body}</svg>`;

export const arrow = (x1, y1, x2, y2, color = '#e11d48', sw = 2.6) => {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const hl = 8.5;
  const p1x = x2 - hl * Math.cos(ang - 0.52);
  const p1y = y2 - hl * Math.sin(ang - 0.52);
  const p2x = x2 - hl * Math.cos(ang + 0.52);
  const p2y = y2 - hl * Math.sin(ang + 0.52);
  return `<g>
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>
    <polyline points="${p1x.toFixed(1)},${p1y.toFixed(1)} ${x2},${y2} ${p2x.toFixed(1)},${p2y.toFixed(1)}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
};

// Individual wooden matchstick with red head at (x1,y1)
export const matchStick = (x1, y1, x2, y2, dashed = false) => {
  if (dashed) {
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#94a3b8" stroke-width="3.2" stroke-dasharray="4,3" stroke-linecap="round"/>`;
  }
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const hx = x1 + (dx / len) * 3;
  const hy = y1 + (dy / len) * 3;
  return `<g>
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#b45309" stroke-width="4.4" stroke-linecap="round"/>
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#facc15" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="3" fill="#dc2626" stroke="#7f1d1d" stroke-width="0.9"/>
  </g>`;
};

const SEGS = {
  '0': 'abcdef', '1': 'bc', '2': 'abdeg', '3': 'abcdg', '4': 'bcfg',
  '5': 'acdfg', '6': 'acdefg', '7': 'abc', '8': 'abcdefg', '9': 'abcdfg'
};

export const matchChar = (x, y, ch, scale = 1) => {
  const s = (v) => (v * scale).toFixed(1);
  if (ch === '+') {
    return `<g transform="translate(${x},${y})">
      ${matchStick(0, 12 * scale, 22 * scale, 12 * scale)}
      ${matchStick(11 * scale, 1 * scale, 11 * scale, 23 * scale)}
    </g>`;
  }
  if (ch === '-') {
    return `<g transform="translate(${x},${y})">
      ${matchStick(0, 12 * scale, 22 * scale, 12 * scale)}
    </g>`;
  }
  if (ch === '=') {
    return `<g transform="translate(${x},${y})">
      ${matchStick(0, 8 * scale, 22 * scale, 8 * scale)}
      ${matchStick(0, 17 * scale, 22 * scale, 17 * scale)}
    </g>`;
  }
  const mask = SEGS[ch] || '';
  const coords = {
    a: [4 * scale, 0, 24 * scale, 0],
    b: [27 * scale, 3 * scale, 27 * scale, 22 * scale],
    c: [27 * scale, 28 * scale, 27 * scale, 47 * scale],
    d: [4 * scale, 50 * scale, 24 * scale, 50 * scale],
    e: [1 * scale, 28 * scale, 1 * scale, 47 * scale],
    f: [1 * scale, 3 * scale, 1 * scale, 22 * scale],
    g: [4 * scale, 25 * scale, 24 * scale, 25 * scale]
  };
  return `<g transform="translate(${x},${y})">
    ${[...mask].map(k => {
      const [x1, y1, x2, y2] = coords[k];
      return matchStick(Number(s(x1 / scale)), Number(s(y1 / scale)), Number(s(x2 / scale)), Number(s(y2 / scale)));
    }).join('')}
  </g>`;
};

export const matchEq = (ox, oy, tokens, scale = 1) => {
  let cursor = ox;
  return tokens.map(ch => {
    const isOp = ch === '+' || ch === '-' || ch === '=';
    const out = matchChar(cursor, oy + (isOp ? 13 * scale : 0), ch, scale);
    cursor += (isOp ? 36 : 44) * scale;
    return out;
  }).join('');
};

// Staggered running-bond brick wall:
// Even rows (0,2,4...): totalCols full bricks [0..totalCols-1]
// Odd rows (1,3,5...): halfL at idx 0, (totalCols-1) full bricks at idx [1..totalCols-1], halfR at idx totalCols
export const brickWall = (ox, oy, bw, rh, totalCols, rows, missingMap = {}) => {
  const parts = [];
  parts.push(`<rect x="${ox}" y="${oy}" width="${totalCols * bw}" height="${rows * rh}" fill="#f8fafc" stroke="#9a3412" stroke-width="2"/>`);
  for (let r = 0; r < rows; r++) {
    const y = oy + r * rh;
    const miss = new Set(missingMap[r] || []);
    if (r % 2 === 0) {
      for (let c = 0; c < totalCols; c++) {
        if (miss.has(c)) continue;
        parts.push(`<rect x="${ox + c * bw}" y="${y}" width="${bw}" height="${rh}" fill="#fdba74" stroke="#9a3412" stroke-width="1.6"/>`);
      }
    } else {
      const half = bw / 2;
      if (!miss.has(0)) parts.push(`<rect x="${ox}" y="${y}" width="${half}" height="${rh}" fill="#fed7aa" stroke="#9a3412" stroke-width="1.6"/>`);
      for (let c = 1; c < totalCols; c++) {
        if (miss.has(c)) continue;
        parts.push(`<rect x="${ox + half + (c - 1) * bw}" y="${y}" width="${bw}" height="${rh}" fill="#fdba74" stroke="#9a3412" stroke-width="1.6"/>`);
      }
      if (!miss.has(totalCols)) parts.push(`<rect x="${ox + totalCols * bw - half}" y="${y}" width="${half}" height="${rh}" fill="#fed7aa" stroke="#9a3412" stroke-width="1.6"/>`);
    }
  }
  return parts.join('');
};

export const sudoku4 = (ox, oy, cell, grid, targetPos, displayMap = null) => {
  const [tr, tc] = targetPos;
  const cells = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const x = ox + c * cell;
      const y = oy + r * cell;
      const val = grid[r][c];
      const isTarget = r === tr && c === tc;
      const fill = isTarget ? '#fef3c7' : val ? '#ffffff' : '#f8fafc';
      const label = isTarget ? '？' : val ? (displayMap ? displayMap[val] : String(val)) : '';
      cells.push(`<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${fill}" stroke="#94a3b8" stroke-width="1"/>`);
      if (label) {
        cells.push(`<text x="${x + cell / 2}" y="${y + cell * 0.66}" text-anchor="middle" font-size="${isTarget ? 18 : displayMap ? 17 : 16}" font-weight="${isTarget ? 'black' : 'bold'}" fill="${isTarget ? '#be123c' : '#1e293b'}">${label}</text>`);
      }
    }
  }
  const size = cell * 4;
  const subBorders = `
    <rect x="${ox}" y="${oy}" width="${size}" height="${size}" fill="none" stroke="#1e293b" stroke-width="2.6"/>
    <line x1="${ox + cell * 2}" y1="${oy}" x2="${ox + cell * 2}" y2="${oy + size}" stroke="#1e293b" stroke-width="2.4"/>
    <line x1="${ox}" y1="${oy + cell * 2}" x2="${ox + size}" y2="${oy + cell * 2}" stroke="#1e293b" stroke-width="2.4"/>
  `;
  return cells.join('') + subBorders;
};

export const balanceScale = (cx, cy, leftTxt, rightTxt, tilt = 'even') => {
  const deg = tilt === 'left' ? -10 : tilt === 'right' ? 10 : 0;
  return `<g transform="translate(${cx},${cy})">
    <polygon points="0,8 -18,46 18,46" fill="#cbd5e1" stroke="#475569" stroke-width="1.6" stroke-linejoin="round"/>
    <g transform="rotate(${deg})">
      <line x1="-68" y1="0" x2="68" y2="0" stroke="#334155" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="-64" y1="0" x2="-74" y2="24" stroke="#64748b" stroke-width="1.3"/>
      <line x1="-64" y1="0" x2="-54" y2="24" stroke="#64748b" stroke-width="1.3"/>
      <rect x="-90" y="24" width="52" height="22" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="-64" y="39" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#78350f">${leftTxt}</text>
      <line x1="64" y1="0" x2="54" y2="24" stroke="#64748b" stroke-width="1.3"/>
      <line x1="64" y1="0" x2="74" y2="24" stroke="#64748b" stroke-width="1.3"/>
      <rect x="38" y="24" width="52" height="22" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <text x="64" y="39" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0369a1">${rightTxt}</text>
    </g>
  </g>`;
};

export const parityDots = (ox, oy, count, fill = '#3b82f6') => {
  const pairs = Math.floor(count / 2);
  const rem = count % 2;
  const parts = [];
  for (let p = 0; p < pairs; p++) {
    const px = ox + p * 38;
    parts.push(`<rect x="${px}" y="${oy}" width="32" height="18" rx="9" fill="#ffffff" stroke="#94a3b8" stroke-width="1.2"/>`);
    parts.push(`<circle cx="${px + 9}" cy="${oy + 9}" r="5" fill="${fill}"/>`);
    parts.push(`<circle cx="${px + 23}" cy="${oy + 9}" r="5" fill="${fill}"/>`);
  }
  if (rem === 1) {
    const px = ox + pairs * 38;
    parts.push(`<rect x="${px}" y="${oy}" width="20" height="18" rx="9" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="3,2"/>`);
    parts.push(`<circle cx="${px + 10}" cy="${oy + 9}" r="5" fill="#e11d48"/>`);
  }
  return parts.join('');
};
