import { dynastyEpochs, emperorsList, battlesList, namingKnowledge, historyQuizList } from '../src/data/emperorsBattlesData.js';

console.log('=====================================================');
console.log('🔍 启动历代帝王世系与华夏重大决战数据静态严苛审计...');
console.log('=====================================================');

// 1. 检验朝代大纪元
console.log(`\n1️⃣  检验朝代大纪元 (当前: ${dynastyEpochs.length} 个纪元)...`);
if (dynastyEpochs.length < 6) {
  throw new Error(`朝代纪元数量不足: ${dynastyEpochs.length} < 6`);
}
const epochIds = new Set(dynastyEpochs.map(e => e.id));
for (const epoch of dynastyEpochs) {
  if (!epoch.id || !epoch.name || !epoch.period || !epoch.color || !epoch.icon) {
    throw new Error(`纪元字段缺失: ${JSON.stringify(epoch)}`);
  }
}
console.log('✓ 朝代大纪元数据完整合法！');

// 2. 检验历代代表帝王世系
console.log(`\n2️⃣  检验历代帝王世系 (当前: ${emperorsList.length} 位代表帝王)...`);
if (emperorsList.length < 15) {
  throw new Error(`帝王数量过少: ${emperorsList.length} < 15`);
}
const empIds = new Set();
for (const emp of emperorsList) {
  if (empIds.has(emp.id)) {
    throw new Error(`重复帝王 ID: ${emp.id}`);
  }
  empIds.add(emp.id);

  if (!epochIds.has(emp.dynasty)) {
    throw new Error(`帝王所属纪元无效: ${emp.id} -> ${emp.dynasty}`);
  }
  if (!emp.name || !emp.templeName || !emp.reignPeriod || !emp.achievements || !emp.anecdote) {
    throw new Error(`帝王核心字段缺失: ${emp.id}`);
  }
  if (!Array.isArray(emp.notableMinisters) || emp.notableMinisters.length === 0) {
    throw new Error(`帝王名臣列表为空: ${emp.id}`);
  }
}
console.log('✓ 历代帝王数据审计全部通过！');

// 3. 检验华夏重大决战风云
console.log(`\n3️⃣  检验华夏重大决战 (当前: ${battlesList.length} 场重大战役)...`);
if (battlesList.length < 25) {
  throw new Error(`重大战役收录数量不足: ${battlesList.length} < 25`);
}
const battleIds = new Set();
for (const b of battlesList) {
  if (battleIds.has(b.id)) {
    throw new Error(`重复战役 ID: ${b.id}`);
  }
  battleIds.add(b.id);

  if (!epochIds.has(b.dynasty)) {
    throw new Error(`战役所属纪元无效: ${b.id} -> ${b.dynasty}`);
  }
  if (typeof b.year !== 'number') {
    throw new Error(`战役年份数值缺失或类型非 number: ${b.id}`);
  }
  if (!b.sides?.blue?.name || !b.sides?.red?.name || !b.sides?.blue?.commander || !b.sides?.red?.commander) {
    throw new Error(`战役交战双方信息缺失: ${b.id}`);
  }
  if (!b.strategy || !b.impact || !b.storySummary) {
    throw new Error(`战役战术/影响/故事缺失: ${b.id}`);
  }
  if (!Array.isArray(b.idioms) || b.idioms.length === 0) {
    throw new Error(`战役成语关联列表为空: ${b.id}`);
  }
  if (b.poemLink) {
    if (!b.poemLink.title || !b.poemLink.quote) {
      throw new Error(`战役联动诗词信息缺失: ${b.id}`);
    }
  }
}
console.log('✓ 华夏重大战役数据审计全部通过！');

// 4. 检验帝王名号小百科
console.log('\n4️⃣  检验帝王名号通识小百科...');
if (!namingKnowledge.title || !namingKnowledge.subtitle || namingKnowledge.sections.length !== 3) {
  throw new Error('小百科知识结构异常');
}
for (const s of namingKnowledge.sections) {
  if (!s.type || !s.name || !s.explanation || !s.rules || !s.whenUsed) {
    throw new Error(`小百科章节内容缺失: ${s.type}`);
  }
}
console.log('✓ 帝王名号通识小百科审计通过！');

// 5. 检验亲子趣味大挑战题库
console.log(`\n5️⃣  检验亲子趣味大挑战题库 (当前: ${historyQuizList.length} 道问答题)...`);
if (historyQuizList.length < 6) {
  throw new Error(`挑战题库数量不足: ${historyQuizList.length} < 6`);
}
for (const q of historyQuizList) {
  if (!q.id || !q.question || !q.answer || !q.explanation) {
    throw new Error(`题目核心字段缺失: ${q.id}`);
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`题目选项数量不符合 4 选 1: ${q.id}`);
  }
  if (!q.options.includes(q.answer)) {
    throw new Error(`正确答案不在选项中: ${q.id} -> 答案 ${q.answer}`);
  }
}
console.log('✓ 亲子趣味大挑战题库全部验证正确！');

console.log('\n=====================================================');
console.log('🎉 历代帝王与重大战役全量静态数据审计 100% 通过！');
console.log('=====================================================');
