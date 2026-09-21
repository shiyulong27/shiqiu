/**
 * 静态数据审计：天文学与浩瀚星空通识数据库健全性测试
 */
import {
  ancientAstronomyData,
  modernConstellationsData,
  solarSystemData,
  astronomyQuiz
} from '../src/data/astronomyData.js'

let hasError = false
function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ [FAIL] ${msg}`)
    hasError = true
  } else {
    console.log(`✓ [PASS] ${msg}`)
  }
}

console.log('🌌 开始审计【浩瀚星空与天文学通识数据库】...')

// 1. 三垣审计
const { threeEnclosures, fourSymbols, ancientInnovations } = ancientAstronomyData
assert(Array.isArray(threeEnclosures) && threeEnclosures.length === 3, '三垣数据必须且仅包含紫微垣、太微垣、天市垣')
threeEnclosures.forEach(enc => {
  assert(enc.id && enc.name && enc.pinyin && enc.alias && enc.role && enc.coreStars.length > 0, `三垣【${enc.name}】字段完整`)
})

// 2. 四象与二十八宿审计
assert(Array.isArray(fourSymbols) && fourSymbols.length === 4, '四象必须包含青龙、玄武、白虎、朱雀')
let totalMansions = 0
fourSymbols.forEach(sym => {
  assert(sym.mansions && sym.mansions.length === 7, `四象【${sym.name}】必须严格包含 7 宿`)
  totalMansions += sym.mansions.length
  sym.mansions.forEach(m => {
    assert(m.name && m.stars > 0 && m.modern && m.meaning && m.role, `宿【${m.name}】数据健全`)
  })
})
assert(totalMansions === 28, `二十八宿总数必须严格等于 28，当前总数: ${totalMansions}`)
assert(ancientInnovations.length >= 4, `古代观星发明与客星记录至少 4 项，当前: ${ancientInnovations.length}`)

// 3. 四季星空与现代星座
const { seasonalTriangles, zodiacList } = modernConstellationsData
assert(seasonalTriangles.length === 4, `四季夜空指南必须包含春夏秋冬四季，当前: ${seasonalTriangles.length}`)
seasonalTriangles.forEach(season => {
  assert(season.coreStars.length >= 3, `季节【${season.season}】至少包含 3 颗标志亮星`)
  assert(season.guideSteps.length >= 3, `季节【${season.season}】寻星步骤至少 3 步`)
})

assert(zodiacList.length === 12, `黄道十二星座必须严格为 12 个，当前: ${zodiacList.length}`)
zodiacList.forEach(z => {
  assert(z.name && z.latin && z.date && z.icon && z.star && z.story, `黄道星座【${z.name}】数据完整`)
})

// 4. 八大行星与深空实验室
const { planets, moonPhases, phenomena } = solarSystemData
assert(planets.length === 8, `太阳系八大行星必须严格为 8 颗，当前: ${planets.length}`)
const expectedPlanets = ['水星', '金星', '地球', '火星', '木星', '土星', '天王星', '海王星']
planets.forEach((p, idx) => {
  assert(p.name === expectedPlanets[idx], `行星[${idx}]名称匹配预期: ${expectedPlanets[idx]}`)
  assert(p.distFromSun && p.orbitalPeriod && p.rotationPeriod && p.diameterRatio && p.keyFeature && p.memoryRhyme, `行星【${p.name}】科学参数与口诀完整`)
})

assert(moonPhases.length === 8, `月相盈亏八阶段必须严格为 8 个，当前: ${moonPhases.length}`)
assert(phenomena.length >= 3, `奇妙天文天象至少收录 3 项（日月食与流星雨）`)

// 5. 挑战题库
assert(astronomyQuiz.length >= 8, `天文小院士挑战题库至少 8 题，当前: ${astronomyQuiz.length}`)
astronomyQuiz.forEach(q => {
  assert(q.question && q.options.length === 4, `题目[${q.id}]题干与 4 个选项完整`)
  assert(q.answer >= 0 && q.answer <= 3, `题目[${q.id}]答案索引在 0..3 范围内`)
  assert(q.explain && q.explain.length > 10, `题目[${q.id}]具备详尽的原理解析`)
})

if (hasError) {
  console.error('\n❌ 存在校验失败项，请检查！')
  process.exit(1)
} else {
  console.log('\n🎉 天文学通识数据库静态审计 100% 全部通过！')
}
