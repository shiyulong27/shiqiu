/**
 * 静态数据审计：小学英语自然拼读与趣味单词王国数据库健全性测试
 */
import {
  alphabetPhonics,
  shortVowelFamilies,
  magicERules,
  consonantDigraphs,
  sightWords50,
  phonicsQuiz
} from '../src/data/englishPhonicsData.js'

let hasError = false
function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ [FAIL] ${msg}`)
    hasError = true
  } else {
    console.log(`✓ [PASS] ${msg}`)
  }
}

console.log('🔤 开始审计【小学英语自然拼读与趣味单词王国数据库】...')

// 1. 26 字母发音库
assert(Array.isArray(alphabetPhonics) && alphabetPhonics.length === 26, `26 字母自然拼读必须严格等于 26 个，当前: ${alphabetPhonics.length}`)
alphabetPhonics.forEach((item, idx) => {
  assert(item.letter && item.name && item.sound && item.chant && item.word && item.zh && item.icon, `字母[${idx}][${item.letter}]字段完整`)
})

// 2. 5 大短元音家族
assert(shortVowelFamilies.length === 5, `短元音家族必须涵盖 a, e, i, o, u 五大元音，当前: ${shortVowelFamilies.length}`)
let totalWordFamilies = 0
let totalFamilyWords = 0
shortVowelFamilies.forEach(v => {
  assert(v.vowel && v.sound && v.families.length > 0, `元音【${v.vowel}】数据健全`)
  totalWordFamilies += v.families.length
  v.families.forEach(fam => {
    assert(fam.pattern && fam.words.length >= 2, `词族【${fam.pattern}】包含单词数: ${fam.words.length}`)
    totalFamilyWords += fam.words.length
    fam.words.forEach(w => {
      assert(w.en && w.zh && w.icon, `单词【${w.en}】释义完整`)
    })
  })
})
console.log(`- 短元音词族总数: ${totalWordFamilies}, 词族收录单词总数: ${totalFamilyWords}`)

// 3. 长元音 Magic E 规则
assert(magicERules.length === 4, `Magic E 规则收录 a_e, i_e, o_e, u_e 四大组，当前: ${magicERules.length}`)
magicERules.forEach(r => {
  assert(r.pattern && r.shortSound && r.longSound && r.pairs.length >= 3 && r.ruleDesc, `Magic E【${r.pattern}】规则完整`)
  r.pairs.forEach(p => {
    assert(p.shortWord && p.longWord && p.shortZh && p.longZh, `对比词对【${p.shortWord} ➔ ${p.longWord}】完备`)
  })
})

// 4. 核心复合辅音
assert(consonantDigraphs.length >= 5, `复合辅音至少包含 5 组 (sh, ch, th, wh, ph)，当前: ${consonantDigraphs.length}`)
consonantDigraphs.forEach(d => {
  assert(d.digraph && d.sound && d.action && d.words.length >= 3, `复合辅音【${d.digraph}】例词数: ${d.words.length}`)
})

// 5. 50 个 Sight Words
assert(sightWords50.length === 50, `Sight Words 必须严格收录 50 个核心高频词，当前: ${sightWords50.length}`)
for (let lvl = 1; lvl <= 5; lvl++) {
  const count = sightWords50.filter(w => w.level === lvl).length
  assert(count === 10, `Level ${lvl} 核心高频词严格为 10 个，当前: ${count}`)
}
sightWords50.forEach(sw => {
  assert(sw.word && sw.zh && sw.sentence && sw.sentenceZh, `高频词【${sw.word}】例句完整`)
})

// 6. 趣味闯关题库
assert(phonicsQuiz.length >= 8, `自然拼读闯关题库至少 8 题，当前: ${phonicsQuiz.length}`)
phonicsQuiz.forEach(q => {
  assert(q.question && q.options.length === 4, `题目[${q.id}] 4 个选项完整`)
  assert(q.answer >= 0 && q.answer <= 3, `题目[${q.id}] 答案在 0..3 范围内`)
  assert(q.explain && q.explain.length > 10, `题目[${q.id}] 具备解析说明`)
})

if (hasError) {
  console.error('\n❌ 存在校验失败项，请检查！')
  process.exit(1)
} else {
  console.log('\n🎉 小学英语自然拼读与趣味单词王国数据库静态审计 100% 全部通过！')
}
