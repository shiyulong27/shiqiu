import { fourInventions, ancientScientists, silkRoadExchanges, modernAeroScience, scienceQuizList } from '../src/data/scienceData.js';

console.log('=====================================================');
console.log('🔍 启动华夏科学探索与古今科技长卷数据静态严苛审计...');
console.log('=====================================================');

// 1. 检验四大发明
console.log(`\n1️⃣  检验古代四大发明 (当前: ${fourInventions.length} 项)...`);
if (fourInventions.length !== 4) {
  throw new Error(`四大发明数量不符: ${fourInventions.length} !== 4`);
}
for (const inv of fourInventions) {
  if (!inv.id || !inv.name || !inv.inventor || !inv.mechanism || !inv.impact || !inv.funFact) {
    throw new Error(`发明核心字段缺失: ${inv.id}`);
  }
  if (!Array.isArray(inv.evolution) || inv.evolution.length < 3) {
    throw new Error(`发明演变时间轴不足: ${inv.id}`);
  }
}
console.log('✓ 古代四大发明数据完整无误！');

// 2. 检验古代科技先贤巨擘
console.log(`\n2️⃣  检验古代科技先贤 (当前: ${ancientScientists.length} 位科技泰斗)...`);
if (ancientScientists.length < 8) {
  throw new Error(`先贤数量不足: ${ancientScientists.length} < 8`);
}
const sciIds = new Set();
for (const sci of ancientScientists) {
  if (sciIds.has(sci.id)) throw new Error(`重复科学家 ID: ${sci.id}`);
  sciIds.add(sci.id);

  if (!sci.name || !sci.dynasty || !sci.titles || !sci.majorWorks || !sci.achievements || !sci.anecdote) {
    throw new Error(`科学家核心信息缺失: ${sci.id}`);
  }
}
console.log('✓ 古代科技先贤数据审计全部通过！');

// 3. 检验丝绸之路物产大交换
console.log('\n3️⃣  检验丝绸之路物产大交换...');
if (!silkRoadExchanges.inbound || silkRoadExchanges.inbound.length < 6) {
  throw new Error('传入物产数量不足');
}
if (!silkRoadExchanges.outbound || silkRoadExchanges.outbound.length < 4) {
  throw new Error('输出物产数量不足');
}
if (!silkRoadExchanges.routes || silkRoadExchanges.routes.length !== 2) {
  throw new Error('陆海双线路线对比缺失');
}
for (const item of silkRoadExchanges.inbound) {
  if (!item.name || !item.origin || !item.era || !item.intro) {
    throw new Error(`传入物产字段缺失: ${item.id}`);
  }
}
for (const item of silkRoadExchanges.outbound) {
  if (!item.name || !item.destination || !item.intro) {
    throw new Error(`输出物产字段缺失: ${item.id}`);
  }
}
console.log('✓ 丝绸之路物产大交换数据审计通过！');

// 4. 检验现代大国重器与深空探索
console.log(`\n4️⃣  检验现代深空大国重器 (当前: ${modernAeroScience.length} 项超级科技)...`);
if (modernAeroScience.length < 7) {
  throw new Error(`大国重器收录数量不足: ${modernAeroScience.length} < 7`);
}
for (const aero of modernAeroScience) {
  if (!aero.name || !aero.mythName || !aero.category || !aero.milestones || !aero.secret) {
    throw new Error(`现代科技字段缺失: ${aero.id}`);
  }
}
console.log('✓ 现代大国重器数据全部验证正确！');

// 5. 检验亲子科学挑战题库
console.log(`\n5️⃣  检验亲子科学趣味题库 (当前: ${scienceQuizList.length} 道题)...`);
if (scienceQuizList.length < 6) {
  throw new Error(`挑战题库数量不足: ${scienceQuizList.length} < 6`);
}
for (const q of scienceQuizList) {
  if (!q.id || !q.question || !q.answer || !q.explanation) {
    throw new Error(`题目核心信息缺失: ${q.id}`);
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`题目选项非 4 选 1: ${q.id}`);
  }
  if (!q.options.includes(q.answer)) {
    throw new Error(`正确答案不在选项内: ${q.id} -> ${q.answer}`);
  }
}
console.log('✓ 亲子科学趣味题库全部验证通过！');

console.log('\n=====================================================');
console.log('🎉 华夏科学探索与古今科技长卷全量静态数据审计 100% 通过！');
console.log('=====================================================');
