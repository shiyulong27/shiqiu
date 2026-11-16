import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import http from 'node:http';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const artifactDir = 'C:/Users/liwei/.gemini/antigravity/brain/f4449243-78e1-4826-8e0c-0775c396ad3f/scratch/verify_49_52';
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
const engine = context.window.QUIZ_GRADING;

console.log(`Loaded Math: ${mathPapers.length}, Chinese: ${chinesePapers.length}, English: ${englishPapers.length}`);
assert.ok(mathPapers.length >= 52, `Expected at least 52 math papers, got ${mathPapers.length}`);

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

// 3. Static audit on Papers 49..52
const newIds = [49, 50, 51, 52];
for (const id of newIds) {
  const paper = mathPapers.find(p => p.id === id);
  assert.ok(paper, `Paper ${id} missing`);
  assert.equal(paper.subject, 'math');
  assert.equal(paper.unit, '名校专项：动态方位与逻辑推理');
  assert.equal(paper.timeLimit, 35, `Paper ${id} must define numeric timeLimit: 35`);
  assert.equal(paper.fullScore, 100);
  assert.equal(paper.passScore, 60);
  assert.doesNotMatch(paper.desc, /\*\*|`/, `Paper ${id} desc has raw markdown`);
  assert.equal(paper.sections.reduce((n, s) => n + s.score, 0), 100);

  let qCount = 0;
  const perfect = {};
  const wrong = {};
  for (const sec of paper.sections) {
    assert.equal(sec.type, 'choice');
    assert.equal(sec.items.length, 2, `Paper ${id} section ${sec.num} expects 2 wide SVG items`);
    for (const item of sec.items) {
      qCount++;
      assert.ok(item.qid.startsWith(`M${id}-`), `Unexpected qid ${item.qid}`);
      assert.ok(item.tip.startsWith('【审题金钥匙】'), `${item.qid} tip format`);
      assert.doesNotMatch(item.prompt, /\*\*|`/, `${item.qid} prompt contains raw markdown`);
      assert.doesNotMatch(item.tip, /\*\*|`|<[^>]+>/, `${item.qid} tip contains raw markdown or HTML`);
      assert.ok(item.visual.includes('<svg ') && item.visual.includes('viewBox='), `${item.qid} must have inline <svg>`);
      assert.doesNotMatch(item.visual, /✔|易错提醒/, `${item.qid} visual leaks answer`);
      assert.ok(item.options.length >= 3);
      assert.equal(item.options.filter(o => o.correct).length, 1, `${item.qid} must have 1 correct option`);
      assert.equal(new Set(item.options.map(o => o.text)).size, item.options.length, `${item.qid} duplicate options`);
      for (const opt of item.options) {
        assert.doesNotMatch(opt.text, /^[A-C][\.、]/, `${item.qid} option should not embed letter label`);
      }
      perfect[item.qid] = item.options.findIndex(o => o.correct);
      wrong[item.qid] = item.options.findIndex(o => !o.correct);
    }
  }
  assert.equal(qCount, 10, `Paper ${id} should have 10 questions`);
  const g100 = engine.grade(paper, perfect, {});
  assert.equal(g100.score, 100);
  assert.equal(g100.wrong, 0);
  assert.equal(g100.unanswered, 0);
  const g0 = engine.grade(paper, wrong, {});
  assert.equal(g0.score, 0);
  assert.equal(g0.wrong, 10);
  const gEmpty = engine.grade(paper, {}, {});
  assert.equal(gEmpty.score, 0);
  assert.equal(gEmpty.unanswered, 10);
  console.log(`✅ Static & grading checks PASSED for Paper ${id}: ${paper.title}`);
}

// 4. Verify generator reproducibility
const beforeHash = crypto.createHash('sha256').update(fs.readFileSync('public/exercises/original_papers.js')).digest('hex');
await import('./generate_math_papers_49_52.mjs');
const afterHash = crypto.createHash('sha256').update(fs.readFileSync('public/exercises/original_papers.js')).digest('hex');
assert.equal(afterHash, beforeHash, 'Re-running generate_math_papers_49_52.mjs must be idempotent');
console.log('✅ Generator idempotency check PASSED');

// 5. Playwright Headless Browser Verification (Hub, Quiz Desktop/Mobile/Print, SVGs, Submit, Mistake Vault)
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
  assert.equal(mathBadge, `${mathPapers.length}套`, `Expected ${mathPapers.length}套 on math tab, got ${mathBadge}`);
  const expectedStageTotal = chinesePapers.length + mathPapers.length + englishPapers.length;
  assert.equal(await page.locator('#stage-count-g1s1').innerText(), `${expectedStageTotal}套`);

  const heroDesc = await page.locator('#hero-desc').innerText();
  assert.ok(heroDesc.includes('原卷与名校思维专项 12 套'), `Unexpected heroDesc: ${heroDesc}`);

  const unitBtn = page.locator('.unit-filter-btn[data-unit="名校专项：动态方位与逻辑推理"]');
  assert.equal(await unitBtn.count(), 1, 'New unit filter pill must exist');
  assert.ok((await unitBtn.innerText()).includes('(4套)'));
  await unitBtn.click();
  assert.equal(await page.locator('#cards-grid > div').count(), 4, 'Clicking unit filter should show 4 papers');
  await page.screenshot({ path: `${artifactDir}/hub-filtered.png`, fullPage: true });
  console.log('✅ Hub UI & unit filter verified (52 math papers, 4 filtered cards)');

  // Verify each quiz paper in browser
  for (const id of newIds) {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(`${base}/quiz.html?grade=1&semester=1&subject=math&paper=${id}`, { waitUntil: 'networkidle' });

    const descText = await page.locator('#paper-desc').innerText();
    assert.doesNotMatch(descText, /undefined|\*\*|`/, `Paper ${id} desc has undefined or raw markdown: ${descText}`);
    assert.match(descText, /建议答题时间：35分钟/);

    const renderedPrompts = await page.evaluate(() => [...document.querySelectorAll('.q-group')].map(el => el.innerText));
    for (const txt of renderedPrompts) {
      assert.doesNotMatch(txt, /\*\*|`/, `Paper ${id} rendered question text leaks raw markdown: ${txt}`);
    }

    // Verify all 10 SVGs render with non-zero size & zero text clipping outside viewBox
    const svgStats = await page.evaluate(() => {
      const svgs = [...document.querySelectorAll('.item-visual svg')];
      return svgs.map((svg, idx) => {
        const rect = svg.getBoundingClientRect();
        const clippedTexts = [];
        for (const t of svg.querySelectorAll('text')) {
          const tb = t.getBoundingClientRect();
          if (tb.width === 0) continue;
          if (tb.left < rect.left - 2 || tb.top < rect.top - 2 || tb.right > rect.right + 2 || tb.bottom > rect.bottom + 2) {
            clippedTexts.push({ text: t.textContent, left: tb.left - rect.left, top: tb.top - rect.top, right: tb.right - rect.left, bottom: tb.bottom - rect.top, svgW: rect.width, svgH: rect.height });
          }
        }
        return { idx, w: rect.width, h: rect.height, clippedTexts };
      });
    });

    assert.equal(svgStats.length, 10, `Paper ${id} should render 10 SVGs`);
    for (const s of svgStats) {
      assert.ok(s.w > 250 && s.h > 70, `Paper ${id} SVG #${s.idx} collapsed: ${s.w}x${s.h}`);
      assert.deepEqual(s.clippedTexts, [], `Paper ${id} SVG #${s.idx} text outside viewBox: ${JSON.stringify(s.clippedTexts)}`);
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
    assert.equal(await page.locator('#modal-score').innerText(), '100', `Paper ${id} expected 100 after interactive submit`);
    await page.getByRole('button', { name: /关闭成绩报告/ }).click();
    console.log(`✅ Browser Desktop & Interactive 100pt PASSED for Paper ${id} (all 10 SVGs verified unclipped)`);
  }

  // Test Mistake Vault with wrong answer on Paper 49
  await page.goto(`${base}/quiz.html?grade=1&semester=1&subject=math&paper=49`, { waitUntil: 'networkidle' });
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
  assert.match(vaultText, /三堆小鸭|审题金钥匙/);
  console.log('✅ Mistake vault verified for Paper 49');

  // Mobile 390px + Print media checks
  for (const id of [49, 52]) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${base}/quiz.html?grade=1&semester=1&subject=math&paper=${id}`, { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);
    assert.equal(overflow, false, `Mobile horizontal overflow detected on Paper ${id}`);
    if (id === 49) await page.screenshot({ path: `${artifactDir}/paper-49-mobile.png`, fullPage: false });

    await page.emulateMedia({ media: 'print' });
    const printVisibleSvgs = await page.evaluate(() =>
      [...document.querySelectorAll('.item-visual svg')].filter(s => {
        const r = s.getBoundingClientRect();
        return r.width > 100 && r.height > 40;
      }).length
    );
    assert.equal(printVisibleSvgs, 10, `All 10 SVGs must remain visible in print mode on Paper ${id}`);
    await page.emulateMedia({ media: 'screen' });
  }
  console.log('✅ Mobile 390px zero-overflow & A4 print media checks PASSED');

  assert.deepEqual(pageErrors, [], `Page errors: ${pageErrors.join('; ')}`);
  assert.deepEqual(consoleErrors, [], `Console errors: ${consoleErrors.join('; ')}`);
  console.log('\n🎉 ALL STATIC, INTERACTIVE, RESPONSIVE & SVG GEOMETRY CHECKS PASSED FOR PAPERS 49–52!');
} finally {
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
}
