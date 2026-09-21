/**
 * 静态数据审计：华夏世界自然与文化遗产数据库健全性测试
 */
import {
  heritageStats,
  heritageList,
  heritageQuiz
} from '../src/data/worldHeritageData.js'

let hasError = false
function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ [FAIL] ${msg}`)
    hasError = true
  } else {
    console.log(`✓ [PASS] ${msg}`)
  }
}

console.log('🏯 开始审计【华夏世界自然与文化遗产全景数据库】...')

// 1. 统计概览审计
assert(heritageStats.totalCount === 59, `世界遗产总数 59 项符合最新数据，当前: ${heritageStats.totalCount}`)
assert(heritageStats.mixedCount === 4, `四大双重遗产数符合中国实际`)
assert(heritageStats.mixedNames.length === 4, `四大双重遗产名称数组完整`)

// 2. 代表性遗产名录审计
assert(heritageList.length >= 16, `核心代表性名录至少收录 16 处，当前: ${heritageList.length}`)
const types = new Set(heritageList.map(h => h.type))
assert(types.has('cultural') && types.has('natural') && types.has('mixed'), '名录必须涵盖文化、自然与双重遗产三种类别')

const mixedFound = heritageList.filter(h => h.type === 'mixed')
assert(mixedFound.length === 4, `四大双重遗产全部在名录中建档完整，当前找到: ${mixedFound.length}`)

heritageList.forEach(item => {
  assert(item.id && item.name && item.type && item.typeZh && item.year && item.province && item.region, `遗产【${item.name}】基础属性健全`)
  assert(item.unescoQuote && item.highlight && item.historyLink, `遗产【${item.name}】教科文评价、核心亮点与历史渊源完整`)
  assert(Array.isArray(item.poems) && item.poems.length > 0, `遗产【${item.name}】必须关联至少一首古诗词名句`)
  item.poems.forEach(p => {
    assert(p.author && p.dynasty && p.title && p.text, `遗产【${item.name}】关联诗词【${p.title}】内容完备`)
  })
})

// 3. 亲子挑战题库审计
assert(heritageQuiz.length >= 8, `世界遗产挑战题库至少 8 题，当前: ${heritageQuiz.length}`)
heritageQuiz.forEach(q => {
  assert(q.question && q.options.length === 4, `题目[${q.id}] 4 个选项完备`)
  assert(q.answer >= 0 && q.answer <= 3, `题目[${q.id}] 答案在 0..3 范围内`)
  assert(q.explain && q.explain.length > 10, `题目[${q.id}] 具备深入解析`)
})

if (hasError) {
  console.error('\n❌ 存在校验失败项，请检查！')
  process.exit(1)
} else {
  console.log('\n🎉 华夏世界遗产数据库静态审计 100% 全部通过！')
}
