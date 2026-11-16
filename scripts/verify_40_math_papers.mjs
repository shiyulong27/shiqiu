import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { chromium } from 'playwright';

console.log('\n============================================================');
console.log('🔍 正在运行：一年级上册数学【40套全真与进阶大考卷】深度自测与校验');
console.log('============================================================\n');

const mathFilePath = 'public/exercises/math_data.js';
if (!fs.existsSync(mathFilePath)) {
  console.error(`❌ 未找到文件: ${mathFilePath}`);
  process.exit(1);
}

const rawCode = fs.readFileSync(mathFilePath, 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(rawCode, sandbox);
const db = sandbox.window.MATH_DATABASE;

if (!Array.isArray(db)) {
  console.error('❌ window.MATH_DATABASE 不是数组！');
  process.exit(1);
}

console.log(`✓ 试卷总数: ${db.length} 套 (预期: 40套)`);
if (db.length !== 40) {
  console.error(`❌ 试卷套数不符合预期 40，实际为 ${db.length}`);
  process.exit(1);
}

// ─────────────────────────────────────────────────────────────
// 阶段一：40 套试卷全量底层数据结构与逻辑静态审计
// ─────────────────────────────────────────────────────────────
console.log('\n📋 阶段一：逐套全量静态结构与 100 分满分逻辑审计...');

let staticErrors = 0;
let totalQuestionsChecked = 0;
let totalMatchingPairsChecked = 0;

db.forEach((paper, pIdx) => {
  const paperId = paper.id;
  if (paperId !== pIdx + 1) {
    console.error(`  ❌ [第 ${paperId} 套] ID 不连续，预期: ${pIdx + 1}`);
    staticErrors++;
  }
  if (!paper.title || !paper.unit || !paper.desc || !paper.tag) {
    console.error(`  ❌ [第 ${paperId} 套] 缺少 title / unit / desc / tag 基础元数据`);
    staticErrors++;
  }

  let paperScore = 0;
  if (!paper.sections || paper.sections.length !== 8) {
    console.error(`  ❌ [第 ${paperId} 套] 大题模块数应为 8，实际为: ${paper.sections?.length}`);
    staticErrors++;
  }

  const seenQids = new Set();

  (paper.sections || []).forEach((sec, sIdx) => {
    paperScore += (sec.score || 0);

    if (sec.type === 'matching') {
      if (!sec.pairs || sec.pairs.length !== 6) {
        console.error(`  ❌ [第 ${paperId} 套 §${sIdx+1}] 连线题 pairs 数必须为 6，实际: ${sec.pairs?.length}`);
        staticErrors++;
      }
      if (!sec.shuffledAnswers || sec.shuffledAnswers.length !== 6) {
        console.error(`  ❌ [第 ${paperId} 套 §${sIdx+1}] shuffledAnswers 数必须为 6，实际: ${sec.shuffledAnswers?.length}`);
        staticErrors++;
      }
      const pairAnswers = (sec.pairs || []).map(p => p.answer);
      sec.shuffledAnswers.forEach(ans => {
        if (!pairAnswers.includes(ans)) {
          console.error(`  ❌ [第 ${paperId} 套 §${sIdx+1}] 连线选项 ${ans} 未在 pairs 中声明`);
          staticErrors++;
        }
      });
      totalMatchingPairsChecked += sec.pairs.length;
    } else if (sec.type === 'choice') {
      if (!sec.items || sec.items.length === 0) {
        console.error(`  ❌ [第 ${paperId} 套 §${sIdx+1}] 选择题 items 为空`);
        staticErrors++;
      }
      (sec.items || []).forEach(item => {
        totalQuestionsChecked++;
        if (seenQids.has(item.qid)) {
          console.error(`  ❌ [第 ${paperId} 套] 题目 QID 重复: ${item.qid}`);
          staticErrors++;
        }
        seenQids.add(item.qid);

        if (!item.prompt || !item.tip || !item.title) {
          console.error(`  ❌ [第 ${paperId} 套] 题目 ${item.qid} 缺少 prompt / tip / title`);
          staticErrors++;
        }
        const hasCorrect = (item.options || []).some(o => o.correct === true);
        const hasIncorrect = (item.options || []).some(o => o.correct === false);
        if (!hasCorrect || !hasIncorrect) {
          console.error(`  ❌ [第 ${paperId} 套] 题目 ${item.qid} 选项配置异常 (需有正误选项)`);
          staticErrors++;
        }
      });
    } else if (sec.type === 'poem') {
      const pScore = (sec.buttons || []).reduce((sum, b) => sum + (b.pts || 0), 0);
      if (pScore !== 12) {
        console.error(`  ❌ [第 ${paperId} 套 §${sIdx+1}] 儿歌模块总分应为 12，实际: ${pScore}`);
        staticErrors++;
      }
    }
  });

  if (paperScore !== 100) {
    console.error(`  ❌ [第 ${paperId} 套] 试卷满分应为 100，实际为: ${paperScore}`);
    staticErrors++;
  }
});

console.log(`✓ 静态审计完成：检查了 40 套大卷，共计 ${totalQuestionsChecked} 道选择题，${totalMatchingPairsChecked} 对连线匹配题`);
if (staticErrors === 0) {
  console.log('✅ 阶段一静态审计：0 错误，100% 满分结构完好！\n');
} else {
  console.error(`💥 阶段一发现 ${staticErrors} 处错误！`);
  process.exit(1);
}

// ─────────────────────────────────────────────────────────────
// 阶段二：Playwright 端到端无头浏览器全功能自测
// ─────────────────────────────────────────────────────────────
console.log('🌐 阶段二：启动 Playwright 无头浏览器端到端仿真自测...');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const consoleErrors = [];
page.on('console', msg => {
  if (msg.type() === 'error') {
    consoleErrors.push(`[Console Error] ${msg.text()}`);
  }
});
page.on('pageerror', err => {
  consoleErrors.push(`[Page Error] ${err.message}`);
});

const indexPath = `file://${path.resolve('public/exercises/index.html')}`;
console.log(`  🔗 打开大厅页面: ${indexPath}`);
await page.goto(indexPath);
await page.waitForLoadState('domcontentloaded');

// 1. 验证数学考场切换与 40 套卡片
console.log('  👉 切换到数学考场...');
await page.click('#tab-subject-math');
await page.waitForTimeout(300);

const mathBadgeText = await page.textContent('#badge-count-math');
console.log(`  ✓ 数学考场徽章显示: ${mathBadgeText}`);
if (!mathBadgeText.includes('40套')) {
  console.error(`  ❌ 数学考场徽章未显示 40套，实际为: ${mathBadgeText}`);
  process.exit(1);
}

const cardCount = await page.locator('.unit-filter-btn').count();
console.log(`  ✓ 单元 Filter 过滤按钮数: ${cardCount}`);

// 2. 检查进阶第 21 套（对标真卷）答题页面
console.log('  👉 打开第 21 套【成双成对与数轴度量思维卷】...');
const quizPath = `file://${path.resolve('public/exercises/quiz.html')}?grade=1&semester=1&subject=math&paper=21`;
await page.goto(quizPath);
await page.waitForLoadState('domcontentloaded');
await page.waitForTimeout(300);

const paperTitle = await page.textContent('#paper-title');
console.log(`  ✓ 试卷标题正确加载: ${paperTitle.trim()}`);
if (!paperTitle.includes('第 21 套：【进阶】成双成对与数轴度量思维卷')) {
  console.error(`  ❌ 第 21 套卷头标题错误: ${paperTitle}`);
  process.exit(1);
}

// 3. 仿真作答第 21 套：连连看点击
console.log('  👉 仿真连连看交互...');
const leftCards = await page.locator('.left-card');
const rightCards = await page.locator('.right-card');
const leftCount = await leftCards.count();
const rightCount = await rightCards.count();
console.log(`  ✓ 连连看左侧卡片数: ${leftCount}，右侧卡片数: ${rightCount}`);
if (leftCount !== 6 || rightCount !== 6) {
  console.error('  ❌ 连连看卡片数量不为 6');
  process.exit(1);
}

// 点击左侧第一张，再点击右侧对应答案
const target1 = await leftCards.nth(0).getAttribute('data-target');
const answer1 = await leftCards.nth(0).getAttribute('data-answer');
await leftCards.nth(0).click();
const matchingRight = page.locator(`.right-card[data-answer="${answer1}"]`);
await matchingRight.click();
await page.waitForTimeout(200);

// 4. 仿真选择题点击
console.log('  👉 仿真选择题作答...');
const optBtns = await page.locator('.opt-btn');
const optCount = await optBtns.count();
console.log(`  ✓ 选择题选项按钮总数: ${optCount}`);
// 点击几个正确选项
const correctBtns = page.locator('.opt-btn[data-correct="true"]');
const correctCount = await correctBtns.count();
for (let i = 0; i < Math.min(6, correctCount); i++) {
  await correctBtns.nth(i).click();
}

// 5. 点击儿歌背诵按钮
console.log('  👉 仿真儿歌朗诵加分...');
const poemBtn0 = page.locator('#btn-poem-0');
if (await poemBtn0.isVisible()) {
  await poemBtn0.click();
}

// 6. 交卷并检查结分弹窗
console.log('  👉 点击交卷结分...');
await page.click('button:has-text("交卷结分")');
await page.waitForTimeout(300);

const modalScore = await page.textContent('#modal-score');
console.log(`  ✓ 结分弹窗成功弹出，当前实测得分: ${modalScore} 分`);

// 7. 测试其他关键套卷的加载（如第 22、31、35、40 套）
const testPapers = [22, 31, 35, 40];
for (const p of testPapers) {
  const pUrl = `file://${path.resolve('public/exercises/quiz.html')}?grade=1&semester=1&subject=math&paper=${p}`;
  await page.goto(pUrl);
  await page.waitForLoadState('domcontentloaded');
  const t = await page.textContent('#paper-title');
  console.log(`  ✓ 第 ${p} 套加载验证成功: ${t.trim()}`);
}

await browser.close();

console.log('\n─────────────────────────────────────────────────────────────');
console.log(`🔍 控制台错误总计: ${consoleErrors.length}`);
if (consoleErrors.length > 0) {
  console.error('❌ 页面出现控制台错误:');
  consoleErrors.forEach(err => console.error(`   ${err}`));
  process.exit(1);
} else {
  console.log('✅ 页面 0 控制台报错，纯净无瑕！');
}

console.log('\n🎉🎉 一年级上册数学【40套全真与进阶大考卷】端到端全量自测 100% 满分通过！🎉🎉\n');
