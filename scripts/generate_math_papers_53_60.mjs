import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { papers53to54 } from './lib/math_papers_53_54.mjs';
import { papers55to56 } from './lib/math_papers_55_56.mjs';
import { papers57to58 } from './lib/math_papers_57_58.mjs';
import { papers59to60 } from './lib/math_papers_59_60.mjs';

export const papers53to60 = [
  ...papers53to54,
  ...papers55to56,
  ...papers57to58,
  ...papers59to60
];

// Independent mathematical self-checks before touching target database
function solveSudoku4(grid) {
  const g = grid.map(r => [...r]);
  const sols = [];
  function backtrack() {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (g[r][c] === 0) {
          const br = Math.floor(r / 2) * 2, bc = Math.floor(c / 2) * 2;
          for (let v = 1; v <= 4; v++) {
            let ok = true;
            for (let i = 0; i < 4; i++) {
              if (g[r][i] === v || g[i][c] === v) { ok = false; break; }
            }
            if (ok) {
              for (let dr = 0; dr < 2; dr++) for (let dc = 0; dc < 2; dc++) {
                if (g[br + dr][bc + dc] === v) ok = false;
              }
            }
            if (ok) {
              g[r][c] = v;
              backtrack();
              g[r][c] = 0;
            }
          }
          return;
        }
      }
    }
    sols.push(g.map(r => [...r]));
  }
  backtrack();
  return sols;
}

// Verify M56-4-1, M56-4-2, M56-5-1 Sudokus have unique solutions matching expected answers
{
  const s1 = solveSudoku4([[1,2,0,4],[3,4,1,0],[0,1,4,3],[4,3,2,0]]);
  assert.equal(s1.length, 1, 'M56-4-1 must have unique solution');
  assert.equal(s1[0][1][3], 2, 'M56-4-1 target [1,3] must be 2');

  const s2 = solveSudoku4([[0,3,0,4],[2,0,1,0],[3,1,0,2],[4,0,3,0]]);
  assert.equal(s2.length, 1, 'M56-4-2 must have unique solution');
  assert.equal(s2[0][0][2], 2, 'M56-4-2 target [0,2] must be 2');

  const s3 = solveSudoku4([[2,1,0,3],[0,3,0,1],[1,0,3,4],[3,4,1,0]]);
  assert.equal(s3.length, 1, 'M56-5-1 must have unique solution');
  assert.equal(s3[0][1][2], 2, 'M56-5-1 target [1,2] must be 2 (🍌)');
}

// Verify snail / caterpillar day-by-day simulation (M58-4-1 & M58-4-2)
function daysToEscape(height, up, down) {
  let pos = 0;
  for (let day = 1; day <= 30; day++) {
    pos += up;
    if (pos >= height) return day;
    pos -= down;
  }
  throw new Error('Did not escape');
}
assert.equal(daysToEscape(7, 3, 2), 5, 'M58-4-1 snail');
assert.equal(daysToEscape(8, 4, 2), 3, 'M58-4-2 caterpillar');

// Structural & content integrity checks across all 8 papers (80 items)
assert.equal(papers53to60.length, 8);
const qidSet = new Set();
for (let idx = 0; idx < papers53to60.length; idx++) {
  const p = papers53to60[idx];
  assert.equal(p.id, 53 + idx);
  assert.equal(p.subject, 'math');
  assert.equal(p.timeLimit, 35);
  assert.equal(p.fullScore, 100);
  assert.equal(p.passScore, 60);
  assert.doesNotMatch(p.title, /\*\*|`/);
  assert.doesNotMatch(p.desc, /\*\*|`/);
  assert.equal(p.sections.length, 5, `Paper ${p.id} must have 5 sections`);
  assert.equal(p.sections.reduce((n, s) => n + s.score, 0), 100);

  for (const sec of p.sections) {
    assert.equal(sec.type, 'choice');
    assert.equal(sec.items.length, 2, `Paper ${p.id} section ${sec.num} must have 2 items`);
    assert.doesNotMatch(sec.title, /\*\*|`/, `Paper ${p.id} sec ${sec.num} title has raw markdown`);
    for (const item of sec.items) {
      assert.ok(item.qid.startsWith(`M${p.id}-`), `Unexpected qid ${item.qid}`);
      assert.ok(!qidSet.has(item.qid), `Duplicate QID ${item.qid}`);
      qidSet.add(item.qid);
      assert.doesNotMatch(item.title, /\*\*|`/, `${item.qid} title has raw markdown`);
      assert.doesNotMatch(item.prompt, /\*\*|`/, `${item.qid} prompt has raw markdown`);
      assert.doesNotMatch(item.tip, /\*\*|`|<[^>]+>/, `${item.qid} tip has raw markdown or HTML`);
      assert.ok(item.tip.startsWith('【审题金钥匙】'), `${item.qid} tip prefix`);
      assert.ok(item.visual.includes('<svg ') && item.visual.includes('viewBox='), `${item.qid} missing SVG`);
      assert.doesNotMatch(item.visual, /最大✔|最小✔|➡️.*得|易错提醒/, `${item.qid} SVG answer leak`);
      assert.ok(item.options.length >= 3, `${item.qid} options count`);
      assert.equal(item.options.filter(o => o.correct).length, 1, `${item.qid} must have 1 correct option`);
      assert.equal(new Set(item.options.map(o => o.text)).size, item.options.length, `${item.qid} duplicate options`);
      for (const opt of item.options) {
        assert.doesNotMatch(opt.text, /^[A-C][\.、]/, `${item.qid} option should not embed A./B./C.`);
      }
    }
  }
}

// Safely splice into public/exercises/original_papers.js while keeping id < 53 & chinese untouched
const targetPath = 'public/exercises/original_papers.js';
const origText = fs.readFileSync(targetPath, 'utf8').replace(/\r\n/g, '\n');

const ctx = { window: { QUIZ_DATABASE: [], MATH_DATABASE: [], ENGLISH_DATABASE: [] } };
vm.runInNewContext(origText, ctx);
const existingMathBefore53 = ctx.window.ORIGINAL_PAPERS.math.filter(p => p.id < 53);
const existingChinese = ctx.window.ORIGINAL_PAPERS.chinese;

const footerTail = '\n  ]\n};\nwindow.QUIZ_DATABASE.push(...window.ORIGINAL_PAPERS.chinese);\nwindow.MATH_DATABASE.push(...window.ORIGINAL_PAPERS.math);\n';
const marker53 = ',\n    {\n      "id": 53,';
const formattedAdditions = papers53to60
  .map(p => JSON.stringify(p, null, 2).split('\n').map(line => '    ' + line).join('\n'))
  .join(',\n');

const idx53 = origText.indexOf(marker53);
if (idx53 > 0) {
  const head = origText.slice(0, idx53);
  fs.writeFileSync(targetPath, `${head},\n${formattedAdditions}${footerTail}`, 'utf8');
} else {
  const anchorIdx = origText.indexOf('\n  ]\n};\nwindow.QUIZ_DATABASE.push');
  assert.ok(anchorIdx > 0, 'Could not find ORIGINAL_PAPERS array tail');
  assert.ok(!ctx.window.ORIGINAL_PAPERS.math.some(p => p.id >= 53), 'Paper >= 53 already exists without canonical marker');
  const beforeArrClose = origText.slice(0, anchorIdx);
  fs.writeFileSync(targetPath, `${beforeArrClose},\n${formattedAdditions}${footerTail}`, 'utf8');
}

// Re-verify resulting database
const verifyCtx = { window: { QUIZ_DATABASE: [], MATH_DATABASE: [], ENGLISH_DATABASE: [] } };
vm.runInNewContext(fs.readFileSync(targetPath, 'utf8'), verifyCtx);
assert.equal(verifyCtx.window.ORIGINAL_PAPERS.chinese.length, existingChinese.length);
assert.equal(verifyCtx.window.ORIGINAL_PAPERS.math.length, existingMathBefore53.length + 8);
assert.equal(
  JSON.stringify(verifyCtx.window.ORIGINAL_PAPERS.math.filter(p => p.id < 53)),
  JSON.stringify(existingMathBefore53),
  'Existing math papers < 53 must remain identical!'
);
assert.equal(
  JSON.stringify(verifyCtx.window.ORIGINAL_PAPERS.chinese),
  JSON.stringify(existingChinese),
  'Existing chinese papers must remain identical!'
);

console.log(`✅ Successfully generated and verified Papers 53–60 in ${targetPath} (${verifyCtx.window.ORIGINAL_PAPERS.math.length} original/special math papers total).`);
