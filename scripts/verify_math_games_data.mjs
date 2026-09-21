import { twentyFourPuzzleSets, matchstickPuzzles, speedMathTricks, mathBrainTeasers } from '../src/data/mathGamesData.js';

console.log('=====================================================');
console.log('🔍 启动数学思维乐园趣味数据静态严苛审计...');
console.log('=====================================================');

// 1. 检验 24 点精选题库
console.log(`\n1️⃣  检验 24 点精选题库 (当前: ${twentyFourPuzzleSets.length} 组牌局)...`);
if (twentyFourPuzzleSets.length < 8) {
  throw new Error(`24点牌组数量不足: ${twentyFourPuzzleSets.length} < 8`);
}
for (const p of twentyFourPuzzleSets) {
  if (!p.id || !p.level || !p.levelLabel || !p.hint || !Array.isArray(p.cards) || p.cards.length !== 4) {
    throw new Error(`24点牌组字段缺失: ${p.id}`);
  }
  if (!Array.isArray(p.solutions) || p.solutions.length === 0) {
    throw new Error(`24点牌组无解法: ${p.id}`);
  }
}
console.log('✓ 24 点精选题库审计通过！');

// 2. 检验火柴棒移动谜题
console.log(`\n2️⃣  检验火柴棒等式谜题 (当前: ${matchstickPuzzles.length} 道火柴题)...`);
if (matchstickPuzzles.length < 5) {
  throw new Error(`火柴棒题数不足: ${matchstickPuzzles.length} < 5`);
}
for (const mp of matchstickPuzzles) {
  if (!mp.id || !mp.equation || !mp.rule || !mp.solutionText || !mp.explanation) {
    throw new Error(`火柴棒题目字段缺失: ${mp.id}`);
  }
  if (!Array.isArray(mp.answers) || mp.answers.length === 0) {
    throw new Error(`火柴棒题目答案列表为空: ${mp.id}`);
  }
}
console.log('✓ 火柴棒等式谜题审计通过！');

// 3. 检验速算巧算秘籍
console.log(`\n3️⃣  检验速算巧算秘籍 (当前: ${speedMathTricks.length} 项心算秘籍)...`);
if (speedMathTricks.length < 4) {
  throw new Error(`速算秘籍数量不足: ${speedMathTricks.length} < 4`);
}
for (const t of speedMathTricks) {
  if (!t.id || !t.name || !t.category || !t.condition || !t.formula || !t.example || !t.funTip) {
    throw new Error(`速算秘籍信息缺失: ${t.id}`);
  }
}
console.log('✓ 速算巧算秘籍审计通过！');

// 4. 检验亲子思维大挑战题库
console.log(`\n4️⃣  检验亲子数学思维大挑战 (当前: ${mathBrainTeasers.length} 道题)...`);
if (mathBrainTeasers.length < 6) {
  throw new Error(`挑战题库数量不足: ${mathBrainTeasers.length} < 6`);
}
for (const q of mathBrainTeasers) {
  if (!q.id || !q.question || !q.answer || !q.explanation) {
    throw new Error(`题目核心信息缺失: ${q.id}`);
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`题目选项非 4 选 1: ${q.id}`);
  }
  if (!q.options.includes(q.answer)) {
    throw new Error(`正确答案不在选项中: ${q.id} -> ${q.answer}`);
  }
}
console.log('✓ 亲子数学思维大挑战全部验证通过！');

console.log('\n=====================================================');
console.log('🎉 数学思维乐园趣味数据静态严苛审计 100% 通过！');
console.log('=====================================================');
