import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import http from 'node:http';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const artifactDir = 'C:/Users/liwei/.gemini/antigravity/brain/f4449243-78e1-4826-8e0c-0775c396ad3f/scratch/verify_53_60';
fs.mkdirSync(artifactDir, { recursive: true });

// 1. File encoding checks (no BOM, no CR, no replacement char)
for (const file of ['public/exercises/original_papers.js', 'public/exercises/index.html']) {
  const bytes = fs.readFileSync(file);
  const text = bytes.toString('utf8');
  assert.ok(!bytes.subarray(0, 3).equals(Buffer.from([0xef, 0xbb, 0xbf])), `${file} must not have UTF-8 BOM`);
  assert.doesNotMatch(text, /\r|\uFFFD/, `${file} must use LF and valid UTF-8`);
}

// 2. Load full G1S1 banks & grading engine
const context = { window: { QUIZ_DATABASE: [], MATH_DATABASE: [], ENGLISH_DATABASE: [] } };
for (const file of ['quiz_data.js', 'math_data.js', 'english_data.js', 'original_papers.js', 'quiz_grading.js']) {
  vm.runInNewContext(fs.readFileSync(`public/exercises/${file}`, 'utf8'), context);
}

const mathPapers = context.window.MATH_DATABASE;
const chinesePapers = context.window.QUIZ_DATABASE;
const englishPapers = context.window.ENGLISH_DATABASE;
const origMath = context.window.ORIGINAL_PAPERS.math;
const engine = context.window.QUIZ_GRADING;

console.log(`Loaded Math: ${mathPapers.length} (Original/Special: ${origMath.length}), Chinese: ${chinesePapers.length}, English: ${englishPapers.length}`);
assert.equal(mathPapers.length, 60, `Expected 60 math papers total, got ${mathPapers.length}`);
assert.equal(origMath.length, 20, `Expected 20 original/special math papers, got ${origMath.length}`);

// Ensure NO duplicate QID across ALL papers in G1S1
const seenQids = new Set();
for (const p of [...chinesePapers, ...mathPapers, ...englishPapers]) {
  for (const s of p.sections || []) {
    for (const item of s.items || []) {
      if (item.qid) {
        assert.ok(!seenQids.has(item.qid), `Duplicate QID across bank: ${item.qid}`);
        seenQids.add(item.qid);
      }
    }
  }
}

// 3. Static & grading audit on Papers 53..60 (plus regression check on 49..52)
const expectedUnits = {
  53: '名校专项：平面数图形与补砖展开',
  54: '名校专项：平面数图形与补砖展开',
  55: '名校专项：火柴数阵与四宫数独',
  56: '名校专项：火柴数阵与四宫数独',
  57: '名校专项：奇偶单双与逻辑游戏',
  58: '名校专项：生活数学经典模型',
  59: '名校专项：生活数学经典模型',
  60: '名校专项：名校全真压轴大综合'
};

const newIds = [53, 54, 55, 56, 57, 58, 59, 60];
for (const id of [49, 50, 51, 52, ...newIds]) {
  const paper = mathPapers.find(p => p.id === id);
  assert.ok(paper, `Paper ${id} missing`);
  assert.equal(paper.subject, 'math');
  if (expectedUnits[id]) assert.equal(paper.unit, expectedUnits[id]);
  assert.equal(paper.timeLimit, 35, `Paper ${id} timeLimit`);
  assert.equal(paper.fullScore, 100);
  assert.equal(paper.passScore, 60);
  assert.doesNotMatch(paper.desc, /\*\*|`/, `Paper ${id} desc has raw markdown`);
  assert.equal(paper.sections.reduce((n, s) => n + s.score, 0), 100);

  let qCount = 0;
  const perfect = {};
  const wrong = {};
  for (const sec of paper.sections) {
    assert.equal(sec.type, 'choice');
    assert.equal(sec.items.length, 2, `Paper ${id} section ${sec.num} expects 2 items`);
    for (const item of sec.items) {
      qCount++;
      assert.ok(item.qid.startsWith(`M${id}-`), `Unexpected qid ${item.qid}`);
      assert.ok(item.tip.startsWith('【审题金钥匙】'), `${item.qid} tip format`);
      assert.doesNotMatch(item.prompt, /\*\*|`/, `${item.qid} prompt raw markdown`);
      assert.doesNotMatch(item.tip, /\*\*|`|<[^>]+>/, `${item.qid} tip markdown/HTML`);
      assert.ok(item.visual.includes('<svg ') && item.visual.includes('viewBox='), `${item.qid} SVG missing`);
      assert.doesNotMatch(item.visual, /最大✔|最小✔|➡️.*得|易错提醒/, `${item.qid} visual leaks answer`);
      assert.ok(item.options.length >= 3);
      assert.equal(item.options.filter(o => o.correct).length, 1);
      assert.equal(new Set(item.options.map(o => o.text)).size, item.options.length);
      for (const opt of item.options) {
        assert.doesNotMatch(opt.text, /^[A-C][\.、]/, `${item.qid} embedded choice prefix`);
      }
      perfect[item.qid] = item.options.findIndex(o => o.correct);
      wrong[item.qid] = item.options.findIndex(o => !o.correct);
    }
  }
  assert.equal(qCount, 10, `Paper ${id} should have 10 questions`);
  assert.equal(engine.grade(paper, perfect, {}).score, 100);
  assert.equal(engine.grade(paper, wrong, {}).score, 0);
  assert.equal(engine.grade(paper, {}, {}).unanswered, 10);
  console.log(`✅ Static & grading checks PASSED for Paper ${id}: ${paper.title}`);
}

// 4. Verify generator reproducibility (byte-for-byte idempotent)
const beforeHash = crypto.createHash('sha256').update(fs.readFileSync('public/exercises/original_papers.js')).digest('hex');
await import('./generate_math_papers_53_60.mjs');
const afterHash = crypto.createHash('sha256').update(fs.readFileSync('public/exercises/original_papers.js')).digest('hex');
assert.equal(afterHash, beforeHash, 'Re-running generate_math_papers_53_60.mjs must be idempotent');
console.log('✅ Generator idempotency check PASSED');

// 5. Playwright Browser E2E Verification
const root = path.resolve('public/exercises');
const types = {
  '.js': 'text/javascript; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.css': 'text/css; charset=utf-8'
};
const server = http.createServer((req, res) => {
  const reqPath = new URL(req.url, 'http://localhost').pathname;
  const rel = reqPath === '/' ? 'index.html' : reqPath.replace(/^\/+/, '');
  const file = path.resolve(root, rel);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file)) {
    res.writeHead(404);
    res.end();
    return;
  }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});

await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
let browser;

try {
  browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();

  const pageErrors = [];
  const consoleErrors = [];
  page.on('pageerror', e => pageErrors.push(e.message));
  page.on('console', msg => {
    if (msg.type() === 'error') {
      const txt = msg.text();
      if (!txt.includes('tailwindcss')) consoleErrors.push(txt);
    }
  });

  // Hub verification
  await page.goto(`${base}/index.html?grade=1&semester=1&subject=math`, { waitUntil: 'networkidle' });
  const mathBadge = await page.locator('#badge-count-math').innerText();
  assert.equal(mathBadge, '60套', `Expected 60套 on math tab, got ${mathBadge}`);
  const expectedStageTotal = chinesePapers.length + mathPapers.length + englishPapers.length;
  assert.equal(await page.locator('#stage-count-g1s1').innerText(), `${expectedStageTotal}套`);

  const heroDesc = await page.locator('#hero-desc').innerText();
  assert.ok(heroDesc.includes('原卷与名校思维专项 20 套'), `Unexpected heroDesc: ${heroDesc}`);

  for (const [unitName, expectedCount] of [
    ['名校专项：平面数图形与补砖展开', 2],
    ['名校专项：火柴数阵与四宫数独', 2],
    ['名校专项：奇偶单双与逻辑游戏', 1],
    ['名校专项：生活数学经典模型', 2],
    ['名校专项：名校全真压轴大综合', 1]
  ]) {
    const unitBtn = page.locator(`.unit-filter-btn[data-unit="${unitName}"]`);
    assert.equal(await unitBtn.count(), 1, `Unit pill missing: ${unitName}`);
    assert.ok((await unitBtn.innerText()).includes(`(${expectedCount}套)`));
    await unitBtn.click();
    assert.equal(await page.locator('#cards-grid > div').count(), expectedCount, `Filtered cards mismatch for ${unitName}`);
  }
  await page.locator('.unit-filter-btn[data-unit="全部"]').click();
  assert.equal(await page.locator('#cards-grid > div').count(), 60);
  await page.screenshot({ path: `${artifactDir}/hub-60.png`, fullPage: false });
  console.log('✅ Hub UI & all 5 new unit filter pills verified (60 math papers total)');

  // Verify every new paper 53..60 in browser
  for (const id of newIds) {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(`${base}/quiz.html?grade=1&semester=1&subject=math&paper=${id}`, { waitUntil: 'networkidle' });

    const descText = await page.locator('#paper-desc').innerText();
    assert.doesNotMatch(descText, /undefined|\*\*|`/, `Paper ${id} desc broken: ${descText}`);
    assert.match(descText, /建议答题时间：35分钟/);

    const renderedPrompts = await page.evaluate(() => [...document.querySelectorAll('.q-group')].map(el => el.innerText));
    for (const txt of renderedPrompts) {
      assert.doesNotMatch(txt, /\*\*|`/, `Paper ${id} leaks raw markdown: ${txt}`);
    }

    // Verify all 10 SVGs render with non-zero size, ZERO text clipping, and ZERO text-to-text collisions
    const svgStats = await page.evaluate(() => {
      const svgs = [...document.querySelectorAll('.item-visual svg')];
      return svgs.map((svg, idx) => {
        const rect = svg.getBoundingClientRect();
        const clippedTexts = [];
        const boxes = [];
        for (const t of svg.querySelectorAll('text')) {
          const content = (t.textContent || '').trim();
          if (!content) continue;
          const tb = t.getBoundingClientRect();
          if (tb.width === 0 || tb.height === 0) continue;
          if (tb.left < rect.left - 2 || tb.top < rect.top - 2 || tb.right > rect.right + 2 || tb.bottom > rect.bottom + 2) {
            clippedTexts.push({ text: content, left: +(tb.left - rect.left).toFixed(1), top: +(tb.top - rect.top).toFixed(1), right: +(tb.right - rect.left).toFixed(1), bottom: +(tb.bottom - rect.top).toFixed(1), svgW: +rect.width.toFixed(1), svgH: +rect.height.toFixed(1) });
          }
          boxes.push({ text: content, tb });
        }
        const overlaps = [];
        for (let i = 0; i < boxes.length; i++) {
          for (let j = i + 1; j < boxes.length; j++) {
            const a = boxes[i].tb, b = boxes[j].tb;
            const ix = Math.min(a.right, b.right) - Math.max(a.left, b.left);
            const iy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            if (ix > 4 && iy > 4) {
              overlaps.push({ a: boxes[i].text, b: boxes[j].text, ix: +ix.toFixed(1), iy: +iy.toFixed(1) });
            }
          }
        }
        return { idx, w: rect.width, h: rect.height, clippedTexts, overlaps };
      });
    });

    assert.equal(svgStats.length, 10, `Paper ${id} should render 10 SVGs`);
    for (const s of svgStats) {
      assert.ok(s.w > 250 && s.h > 70, `Paper ${id} SVG #${s.idx} collapsed: ${s.w}x${s.h}`);
      assert.deepEqual(s.clippedTexts, [], `Paper ${id} SVG #${s.idx} clipped text: ${JSON.stringify(s.clippedTexts)}`);
      assert.deepEqual(s.overlaps, [], `Paper ${id} SVG #${s.idx} overlapping text: ${JSON.stringify(s.overlaps)}`);
    }

    await page.screenshot({ path: `${artifactDir}/paper-${id}-desktop.png`, fullPage: true });

    // Interactive click all correct options & submit
    const correctBtns = page.locator('.opt-btn[data-correct="true"]');
    assert.equal(await correctBtns.count(), 10);
    for (let i = 0; i < 10; i++) {
      await correctBtns.nth(i).click();
    }
    await page.getByRole('button', { name: /交卷结分/ }).click();
    await page.waitForSelector('#result-modal:not(.hidden)');
    assert.equal(await page.locator('#modal-score').innerText(), '100', `Paper ${id} expected 100`);
    await page.getByRole('button', { name: /关闭成绩报告/ }).click();
    console.log(`✅ Desktop, SVG Geometry & 100pt Interactive Submit PASSED for Paper ${id}`);
  }

  // Test Mistake Vault with wrong answer on Paper 54
  await page.goto(`${base}/quiz.html?grade=1&semester=1&subject=math&paper=54`, { waitUntil: 'networkidle' });
  await page.locator('.q-group').first().locator('.opt-btn[data-correct="false"]').first().click();
  for (let i = 1; i < 10; i++) {
    await page.locator('.q-group').nth(i).locator('.opt-btn[data-correct="true"]').click();
  }
  await page.getByRole('button', { name: /交卷结分/ }).click();
  await page.waitForSelector('#result-modal:not(.hidden)');
  assert.equal(await page.locator('#modal-score').innerText(), '90');
  await page.getByRole('button', { name: /关闭成绩报告/ }).click();
  await page.evaluate(() => openMistakeVault());
  await page.waitForSelector('#mistake-modal:not(.hidden)');
  const vaultText = await page.locator('#mistake-list-container').innerText();
  assert.match(vaultText, /砖墙|审题金钥匙/);
  console.log('✅ Mistake vault verified for Paper 54');

  // Mobile 390px + Print media checks
  for (const id of [54, 56, 60]) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${base}/quiz.html?grade=1&semester=1&subject=math&paper=${id}`, { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);
    assert.equal(overflow, false, `Mobile horizontal overflow on Paper ${id}`);
    if (id === 54) await page.screenshot({ path: `${artifactDir}/paper-54-mobile.png`, fullPage: false });

    await page.emulateMedia({ media: 'print' });
    const printVisibleSvgs = await page.evaluate(() =>
      [...document.querySelectorAll('.item-visual svg')].filter(s => {
        const r = s.getBoundingClientRect();
        return r.width > 100 && r.height > 40;
      }).length
    );
    assert.equal(printVisibleSvgs, 10, `All 10 SVGs must stay visible in print mode on Paper ${id}`);
    await page.emulateMedia({ media: 'screen' });
  }
  console.log('✅ Mobile 390px zero-overflow & A4 print media checks PASSED');

  assert.deepEqual(pageErrors, [], `Page errors: ${pageErrors.join('; ')}`);
  assert.deepEqual(consoleErrors, [], `Console errors: ${consoleErrors.join('; ')}`);
  console.log('\n🎉 ALL STATIC, INTERACTIVE, RESPONSIVE & SVG GEOMETRY CHECKS PASSED FOR PAPERS 49–60!');
} finally {
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
}
