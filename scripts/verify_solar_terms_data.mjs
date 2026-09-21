import { solarTermsData, solarTermsSong, seasonsList, solarTermsQuizCards } from '../src/data/solarTermsData.js';

console.log('=====================================================');
console.log('🔍 校验中华二十四节气与七十二物候数据库: src/data/solarTermsData.js');
console.log('=====================================================');

let errors = 0;

// 1. 节气总数校验 (必须严格 24 个)
console.log(`\n1️⃣  校验节气总数 (当前: ${solarTermsData.length} 个)`);
if (solarTermsData.length !== 24) {
  console.error(`❌ 节气总数不为 24！当前: ${solarTermsData.length}`);
  errors++;
} else {
  console.log('✓ 节气总数严格等于 24 个');
}

// 2. 四季分布校验 (各 6 节)
console.log('\n2️⃣  校验四季分布');
const seasonCounts = { spring: 0, summer: 0, autumn: 0, winter: 0 };
const idSet = new Set();
const orderSet = new Set();

solarTermsData.forEach((term, idx) => {
  // 检查必填基础字段
  const requiredFields = [
    'id', 'order', 'name', 'pinyin', 'season', 'seasonName', 'solarLongitude',
    'dateRange', 'approxMonth', 'approxDay', 'icon', 'tagline', 'astronomy',
    'pentads', 'customs', 'foods', 'farming', 'poem', 'funFact'
  ];

  requiredFields.forEach(field => {
    if (term[field] === undefined || term[field] === null || term[field] === '') {
      console.error(`❌ [节气 ${term.name || idx} 缺少字段]: ${field}`);
      errors++;
    }
  });

  if (idSet.has(term.id)) {
    console.error(`❌ ID 重复: ${term.id}`);
    errors++;
  }
  idSet.add(term.id);

  if (orderSet.has(term.order)) {
    console.error(`❌ 排序序号重复: ${term.order}`);
    errors++;
  }
  orderSet.add(term.order);

  seasonCounts[term.season] = (seasonCounts[term.season] || 0) + 1;

  // 3. 严格校验七十二物候 (每个节气严格 3 候)
  if (!term.pentads || term.pentads.length !== 3) {
    console.error(`❌ [${term.name}] 物候数量不为 3！当前: ${term.pentads?.length}`);
    errors++;
  } else {
    term.pentads.forEach((p, pIdx) => {
      if (!p.name || !p.creature || !p.icon) {
        console.error(`❌ [${term.name} 第 ${pIdx + 1} 候字段缺失]`);
        errors++;
      }
    });
  }

  // 校验古诗联动
  if (!term.poem || !term.poem.title || !term.poem.author || !term.poem.quote) {
    console.error(`❌ [${term.name} 关联古诗信息不全]`);
    errors++;
  }
});

console.log('✓ 四季分布统计:');
console.log(`  • 春生: ${seasonCounts.spring} 节 (预期 6)`);
console.log(`  • 夏长: ${seasonCounts.summer} 节 (预期 6)`);
console.log(`  • 秋收: ${seasonCounts.autumn} 节 (预期 6)`);
console.log(`  • 冬藏: ${seasonCounts.winter} 节 (预期 6)`);

if (seasonCounts.spring !== 6 || seasonCounts.summer !== 6 || seasonCounts.autumn !== 6 || seasonCounts.winter !== 6) {
  console.error('❌ 四季每个季节节气数不等于 6！');
  errors++;
}

// 4. 校验七十二候总数
const totalPentads = solarTermsData.reduce((acc, term) => acc + term.pentads.length, 0);
console.log(`\n3️⃣  校验七十二物候总数: ${totalPentads} 候 (预期 72 候)`);
if (totalPentads !== 72) {
  console.error(`❌ 物候总数不为 72！当前: ${totalPentads}`);
  errors++;
} else {
  console.log('✓ 七十二物候 100% 完备无缺');
}

// 5. 校验二十四节气歌与问答题库
console.log('\n4️⃣  校验节气歌与问答题库');
if (!solarTermsSong || !solarTermsSong.lines || solarTermsSong.lines.length !== 4) {
  console.error('❌ 节气歌行数不为 4 行！');
  errors++;
} else {
  console.log(`✓ 节气歌结构完整: ${solarTermsSong.lines.length} 句诗行`);
}

if (!solarTermsQuizCards || solarTermsQuizCards.length < 5) {
  console.error('❌ 节气问答题库数量不足 5 题！');
  errors++;
} else {
  solarTermsQuizCards.forEach((q, qIdx) => {
    if (!q.question || !q.options || q.options.length !== 4 || !q.answer || !q.explain) {
      console.error(`❌ 问答题 ${qIdx + 1} 字段缺失`);
      errors++;
    }
    if (!q.options.includes(q.answer)) {
      console.error(`❌ 问答题 ${qIdx + 1} 选项不包含答案: ${q.question}`);
      errors++;
    }
  });
  console.log(`✓ 节气趣味题库数量: ${solarTermsQuizCards.length} 题，全部有效通过`);
}

if (errors > 0) {
  console.error(`\n❌ 校验未通过，发现 ${errors} 处数据错误！`);
  process.exit(1);
} else {
  console.log('\n🎉 中华二十四节气与七十二物候全量数据库 100% 校验通过！');
}
