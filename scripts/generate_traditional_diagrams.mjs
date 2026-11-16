import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// 原创教学示意。所有文字/关系都显式定义；不将图画成实物照片或历史复原证据。
const out = fileURLToPath(new URL('../public/images/traditional/', import.meta.url))
const checkOnly = process.argv.includes('--check')
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
const text = (x, y, value, size = 21, attrs = '') => `<text x="${x}" y="${y}" font-size="${size}" ${attrs}>${esc(value)}</text>`
const rect = (x, y, w, h, fill = '#eee8d9') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}"/>`
const line = (x1, y1, x2, y2, color = '#677b72') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${color}" stroke-width="3" fill="none"/>`
function svg(title, desc, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(desc)}</desc><rect width="640" height="420" rx="18" fill="#faf6ed"/><g font-family="'Noto Sans SC','Microsoft YaHei',sans-serif" fill="#253f36" text-anchor="middle">${text(320, 43, title, 27)}${body}</g></svg>\n`
}
const diagrams = new Map()
const mobile = (title, desc, body, height = 560) => svg(title, desc, body).replace('viewBox="0 0 640 420"', `viewBox="0 0 360 ${height}"`).replace('width="640" height="420"', `width="360" height="${height}"`).replace('<text x="320" y="43" font-size="27"', '<text x="180" y="40" font-size="20"')
diagrams.set('sixkin', svg('六亲：先看语境，再看名单', '泛指时指亲人；特定文献中可以按不同的六类亲属或关系列举。',
  rect(30, 85, 280, 235) + rect(330, 85, 280, 235, '#e1ebe4') + text(170, 125, '泛指亲人', 27) + text(170, 180, '“亲”是在说关系') + text(170, 225, '不必先数六个人') + text(470, 125, '文献分类', 27) + text(470, 180, '有按关系分的名单') + text(470, 225, '也有按亲属列的名单') + text(320, 375, '读具体古文时，连同出处和注释一起看', 20)))
const compass = (cx, northUp) => {
  const s = northUp ? 1 : -1
  return `<circle cx="${cx}" cy="200" r="95" fill="#e1ebe4"/>` + line(cx, 140, cx, 260) + line(cx - 60, 200, cx + 60, 200) +
    text(cx, 110, northUp ? '北 ↑' : '南', 24) + text(cx, 305, northUp ? '南' : '北 ↓', 24) + text(cx - 110, 207, northUp ? '西' : '东', 22) + text(cx + 110, 207, northUp ? '东' : '西', 22) +
    rect(cx - 40, 200 - s * 48 - 18, 80, 36, '#dfb970') + text(cx, 200 - s * 48 + 8, '学校', 20) + rect(cx - 40, 200 + s * 48 - 18, 80, 36, '#b1d0ba') + text(cx, 200 + s * 48 + 8, '公园', 20)
}
diagrams.set('direction', svg('地图转了，方向关系仍要看方向标', '左图北在纸上方，右图整图转半圈后北在纸下方；学校始终在公园北面。',
  compass(165, true) + compass(475, false) + text(165, 350, '北向朝上') + text(475, 350, '整图转半圈') + text(320, 395, '两幅图：学校都在公园北面', 19)))
diagrams.set('boundaries', svg('问好有很多种方式', '可以挥手问好；不愿被拥抱时可以拒绝；害怕或不舒服时向可信成人求助。',
  [105, 320, 535].map((x, i) => `<circle cx="${x}" cy="150" r="31" fill="${['#dfb970', '#b1d0ba', '#c7d8e2'][i]}"/>` + line(x, 184, x, 240) + line(x, 208, x - 35, 187) + line(x, 208, x + 35, 175) + text(x, 292, ['挥挥手', '我不想抱抱', '找大人帮助'][i], 22)).join('') + text(320, 365, '没有及时说“不”，受到伤害也不是你的错', 20)))
diagrams.set('family', svg('找堂表：从“我”沿关系走', '爸爸的兄弟的孩子常称堂亲；姑姑、舅舅、姨妈的孩子常称表亲；不能只看姓氏。',
  rect(265, 78, 110, 48, '#dfb970') + text(320, 111, '我', 25) + line(320, 126, 165, 170) + line(320, 126, 475, 170) + rect(45, 170, 240, 58) + rect(355, 170, 240, 58) + text(165, 207, '爸爸 → 兄弟', 23) + text(475, 207, '父母 → 姑舅姨', 23) + line(165, 228, 165, 270) + line(475, 228, 475, 270) + rect(45, 270, 240, 60, '#e1ebe4') + rect(355, 270, 240, 60, '#e1ebe4') + text(165, 309, '他们的孩子：堂亲', 22) + text(475, 309, '他们的孩子：表亲', 22) + text(320, 385, '先看关系路径，再看长幼；各地称呼可能不同', 19)))
diagrams.set('festival', svg('同一个春节，可以有不同过法', '春节的共同主题是辞旧迎新、团聚与祝福；具体活动由地方、社区和家庭而异。',
  `<circle cx="320" cy="185" r="85" fill="#dfb970"/>` + text(320, 174, '团聚', 30) + text(320, 214, '祝福', 30) + rect(35, 90, 150, 65) + text(110, 132, '地方') + rect(455, 90, 150, 65) + text(530, 132, '社区') + rect(35, 260, 150, 65, '#e1ebe4') + text(110, 302, '家庭') + rect(455, 260, 150, 65, '#e1ebe4') + text(530, 302, '时代变化') + line(185, 142, 245, 170) + line(455, 142, 395, 170) + line(185, 280, 250, 230) + line(455, 280, 390, 230) + text(320, 385, '可以问：“你家怎样过年？有什么心愿？”', 20)))
diagrams.set('elements', svg('五行：认识古人的分类思想', '木、火、土、金、水是传统五行分类。此图只列名称，不表示科学元素分类、医学结论或因果。',
  [['木', 320, 115], ['火', 485, 205], ['土', 425, 315], ['金', 215, 315], ['水', 155, 205]].map(([label, x, y]) => `<circle cx="${x}" cy="${y}" r="39" fill="#e1ebe4"/>` + text(x, y + 10, label, 30)).join('') + text(320, 215, '传统观念', 24) + text(320, 395, '认识文化分类，不用它判断健康或命运', 20)))
const blocks = (x, y) => Array.from({ length: 8 }, (_, i) => rect(x + (i % 4) * 40, y + Math.floor(i / 4) * 40, 31, 31, '#dfb970')).join('')
diagrams.set('measure', svg('先知道制度，才能读懂“半斤八两”', '采用旧制一斤十六两；十六份平均分两边，每边八份。积木只示意等份，不表示实际克数。',
  line(100, 155, 540, 155) + line(320, 155, 320, 325) + `<path d="M265 345 L375 345 L320 300 Z" fill="#677b72"/>` + blocks(115, 190) + blocks(385, 190) + text(190, 125, '半斤 = 八两', 23) + text(460, 125, '半斤 = 八两', 23) + text(320, 385, '旧制一斤分十六份；每一半都是八份', 20)))
const music = [['金', '钟'], ['石', '磬'], ['土', '埙'], ['革', '鼓'], ['丝', '琴瑟'], ['木', '柷敔'], ['匏', '笙'], ['竹', '笛箫']]
diagrams.set('music', svg('八音：按传统材料分乐器', '八类示例：金钟、石磬、土埙、革鼓、丝琴瑟、木柷敔、匏笙、竹笛箫。不是八个音符；现代材料可能变化。',
  music.map(([material, instrument], i) => { const x = 30 + (i % 4) * 155, y = 85 + Math.floor(i / 4) * 135; return rect(x, y, 145, 115, i % 2 ? '#e1ebe4' : '#eee8d9') + text(x + 72, y + 42, material, 29) + text(x + 72, y + 85, instrument, 23) }).join('') + text(320, 395, '“匏”读 páo，指葫芦类材料；图中是传统分类示例', 18)))

diagrams.set('sixkin-mobile', mobile('六亲：先看语境', '上框：泛指亲人。下框：具体文献中有不同的亲属分类，连同出处理解。',
  rect(20, 75, 320, 170) + text(180, 118, '泛指亲人', 28) + text(180, 170, '“亲”是在说关系', 22) + text(180, 210, '不必先数六个人', 22) + rect(20, 270, 320, 170, '#e1ebe4') + text(180, 315, '文献分类', 28) + text(180, 365, '有按关系分的名单', 22) + text(180, 405, '也有按亲属列的名单', 22) + text(180, 505, '连同出处和注释一起看', 21)))
diagrams.set('direction-mobile', mobile('地图转了，先看方向标', '上图北向朝上，下图转半圈后北向朝下；学校始终在公园北面。',
  compass(180, true) + text(180, 345, '北向朝上', 22) + `<g transform="translate(0 330)">${compass(180, false)}</g>` + text(180, 675, '整张图转半圈', 22) + text(180, 725, '学校始终在公园北面', 22), 770))
diagrams.set('boundaries-mobile', mobile('问好，也可以保持距离', '可以挥手问好，可以拒绝不愿意的拥抱，害怕时找可信成人。',
  [120, 265, 410].map((y, i) => `<circle cx="65" cy="${y}" r="30" fill="${['#dfb970','#b1d0ba','#c7d8e2'][i]}"/>` + line(65,y+32,65,y+75) + line(65,y+50,30,y+30) + line(65,y+50,100,y+20) + text(235,y+20,['挥挥手','我不想抱抱','找大人帮助'][i],23)).join('') + text(180, 530, '受到伤害，不是你的错', 21), 575))
diagrams.set('family-mobile', mobile('找堂表：从“我”出发', '爸爸的兄弟的孩子常称堂亲；姑舅姨的孩子常称表亲。称呼还要看长幼和地区。',
  rect(130, 75, 100, 50, '#dfb970') + text(180, 110, '我', 28) + line(180,125,95,170) + line(180,125,265,170) + rect(20,170,150,100) + rect(190,170,150,100) + text(95,218,'爸爸的兄弟',20) + text(265,208,'姑姑、舅舅',20) + text(265,245,'或姨妈',20) + line(95,270,95,310) + line(265,270,265,310) + rect(20,310,150,100,'#e1ebe4') + rect(190,310,150,100,'#e1ebe4') + text(95,350,'他们的孩子',20) + text(95,385,'常称堂亲',22) + text(265,350,'他们的孩子',20) + text(265,385,'常称表亲',22) + text(180,465,'先看实际关系，不只看姓氏',20), 510))
diagrams.set('festival-mobile', mobile('同一个春节，不同过法', '春节共同主题为辞旧迎新、团聚和祝福；地方社区家庭及时代会带来不同具体做法。',
  `<circle cx="180" cy="180" r="80" fill="#dfb970"/>` + text(180,172,'团聚',30) + text(180,215,'祝福',30) + [['地方',20,300],['社区',190,300],['家庭',20,385],['时代变化',190,385]].map(([v,x,y])=>rect(x,y,150,65,'#e1ebe4')+text(x+75,y+43,v,23)).join('') + text(180,505,'可以问：你家怎样过年？',21)))
diagrams.set('elements-mobile', mobile('五行：古人的分类思想', '木火土金水是传统分类；这张图只列名称，不用于证明科学或医疗结论。',
  [['木',180,120],['火',285,215],['土',245,345],['金',115,345],['水',75,215]].map(([v,x,y])=>`<circle cx="${x}" cy="${y}" r="39" fill="#e1ebe4"/>`+text(x,y+11,v,30)).join('')+text(180,245,'传统观念',23)+text(180,455,'认识文化分类',22)+text(180,495,'不用它判断健康或命运',21)))
diagrams.set('measure-mobile', mobile('旧制：一斤分十六份', '十六份平均分两边，每边八份；旧制半斤等于八两。此图不表示固定克数。',
  line(20,130,340,130)+line(180,130,180,340)+`<path d="M135 360 L225 360 L180 320 Z" fill="#677b72"/>`+blocks(15,170)+blocks(195,170)+text(90,100,'半斤 = 八两',21)+text(270,100,'半斤 = 八两',21)+text(180,410,'两边各有八份',23)+text(180,455,'先知道制度，再理解换算',20), 510))
diagrams.set('music-mobile', mobile('八音：按材料分乐器', '金钟、石磬、土埙、革鼓、丝琴瑟、木柷敔、匏笙、竹笛箫是传统材料分类示例。',
  music.map(([m,v],i)=>{const x=20+(i%2)*170,y=70+Math.floor(i/2)*115;return rect(x,y,150,100,i%2?'#e1ebe4':'#eee8d9')+text(x+75,y+38,m,29)+text(x+75,y+79,v,23)}).join('')+text(180,565,'“匏”读 páo，指葫芦类材料',20)+text(180,605,'图中是传统分类示例',20), 645))

if (!checkOnly) mkdirSync(out, { recursive: true })
for (const [name, content] of diagrams) {
  const filename = `${out}sample-${name}.svg`
  if (existsSync(filename)) {
    if (readFileSync(filename, 'utf8') !== content) throw new Error(`图解与生成定义不一致，保留现有文件并停止：${filename}`)
  } else if (checkOnly) {
    throw new Error(`缺少图解：${filename}`)
  } else {
    writeFileSync(filename, content, { encoding: 'utf8', flag: 'wx' })
  }
}
console.log(`${checkOnly ? '校验' : '生成/核对'} ${diagrams.size} 幅原创教学示意图；已有不同内容不覆盖。`)
