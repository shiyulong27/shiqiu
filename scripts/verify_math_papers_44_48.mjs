import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const context = { window: { QUIZ_DATABASE: [], MATH_DATABASE: [], ENGLISH_DATABASE: [] } };
vm.runInNewContext(fs.readFileSync('public/exercises/math_data.js', 'utf8'), context);
vm.runInNewContext(fs.readFileSync('public/exercises/original_papers.js', 'utf8'), context);
vm.runInNewContext(fs.readFileSync('public/exercises/quiz_grading.js', 'utf8'), context);

const engine = context.window.QUIZ_GRADING;
const mathPapers = context.window.MATH_DATABASE;

console.log(`Loaded ${mathPapers.length} math papers in total.`);
assert.ok(mathPapers.length >= 48, 'Should have at least 48 math papers');

const testedPaperIds = [44, 45, 46, 47, 48];
const allQids = new Set();

for (const id of testedPaperIds) {
  const paper = mathPapers.find(p => p.id === id);
  assert.ok(paper, `Paper ${id} must exist in MATH_DATABASE`);
  console.log(`\n--- Testing Paper ${id}: ${paper.title} ---`);
  
  // 1. Total sections & scores
  const totalScore = paper.sections.reduce((sum, s) => sum + s.score, 0);
  assert.equal(totalScore, 100, `Paper ${id} total score should be 100, got ${totalScore}`);
  if (paper.fullScore !== undefined) {
    assert.equal(paper.fullScore, 100, `Paper ${id} fullScore should be 100`);
  }
  
  let questionCount = 0;
  const perfectAnswers = {};
  const wrongAnswers = {};

  for (const [secIdx, sec] of paper.sections.entries()) {
    assert.ok(sec.items && sec.items.length > 0, `Section ${secIdx + 1} of Paper ${id} has items`);
    assert.equal(sec.type, 'choice', `Section ${secIdx + 1} of Paper ${id} should be choice type`);
    
    for (const item of sec.items) {
      questionCount++;
      // Unique qid
      assert.ok(!allQids.has(item.qid), `Duplicate qid found: ${item.qid}`);
      allQids.add(item.qid);

      // Tip and visual check
      assert.ok(item.tip && item.tip.includes('【审题金钥匙】'), `${item.qid} tip must contain 【审题金钥匙】`);
      assert.ok(item.visual && item.visual.length > 20, `${item.qid} visual must be present`);
      assert.ok(item.prompt && item.prompt.length > 5, `${item.qid} prompt must be present`);

      // Options check
      assert.ok(Array.isArray(item.options) && item.options.length >= 3, `${item.qid} must have at least 3 options`);
      const correctOpts = item.options.filter(o => o.correct);
      assert.equal(correctOpts.length, 1, `${item.qid} must have exactly one correct option`);

      const correctIndex = item.options.findIndex(o => o.correct);
      const wrongIndex = item.options.findIndex(o => !o.correct);

      perfectAnswers[item.qid] = correctIndex;
      wrongAnswers[item.qid] = wrongIndex;
    }
  }

  console.log(`Paper ${id} has ${paper.sections.length} sections and ${questionCount} questions.`);

  // 2. Test perfect score grading
  const perfectResult = engine.grade(paper, perfectAnswers, {});
  assert.equal(perfectResult.score, 100, `Paper ${id} perfect score expected 100, got ${perfectResult.score}`);
  assert.equal(perfectResult.wrong, 0, `Paper ${id} perfect run should have 0 wrong, got ${perfectResult.wrong}`);
  assert.equal(perfectResult.unanswered, 0, `Paper ${id} perfect run should have 0 unanswered`);
  console.log(`✅ Perfect score verification PASSED (100 pts)`);

  // 3. Test wrong score grading
  const wrongResult = engine.grade(paper, wrongAnswers, {});
  assert.equal(wrongResult.score, 0, `Paper ${id} wrong run expected 0, got ${wrongResult.score}`);
  assert.equal(wrongResult.wrong, questionCount, `Paper ${id} wrong run expected ${questionCount} wrong, got ${wrongResult.wrong}`);
  console.log(`✅ Zero score verification PASSED (0 pts, ${questionCount} wrong recorded)`);
}

console.log('\n=============================================');
console.log('🎉 ALL PAPERS (44, 45, 46, 47, 48) VERIFIED PERFECTLY!');
console.log('=============================================');
