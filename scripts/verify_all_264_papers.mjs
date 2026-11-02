/**
 * 全平台 264 套大卷统一校验脚本
 * 覆盖：一年级上册 / 一年级下册 / 二年级上册 / 二年级下册
 * 阶段一：全量数据结构静态审计（套数、总分、连线对数、选项正确标注、tip）
 * 阶段二：Playwright 无头浏览器端到端仿真（各学段Hub切换 + 提交成绩 + 历史榜单 + 0控制台错误）
 */

import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const brainDir = fs.existsSync('public/exercises/math_data.js') ? path.resolve('public/exercises') : 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';

// ─────────────────────────────────────────────────────────────
// 工具：动态载入 window.XXX 数据库文件
// ─────────────────────────────────────────────────────────────
function loadDb(filename, varName) {
  const code = fs.readFileSync(path.join(brainDir, filename), 'utf-8');
  const sandbox = {};
  new Function('window', code)(sandbox);
  return sandbox[varName];
}

// ─────────────────────────────────────────────────────────────
// 阶段一：全量静态数据审计
// ─────────────────────────────────────────────────────────────
const STAGE_DATASETS = [
  {
    label: '一年级上册 (G1S1)',
    files: [
      { file: 'quiz_data.js',         var: 'QUIZ_DATABASE',         subject: '语文一上', expected: 30 },
      { file: 'math_data.js',         var: 'MATH_DATABASE',         subject: '数学一上', expected: 40 },
      { file: 'english_data.js',      var: 'ENGLISH_DATABASE',      subject: '英语一上', expected: 16 },
    ],
  },
  {
    label: '一年级下册 (G1S2)',
    files: [
      { file: 'quiz_data_g1s2.js',    var: 'QUIZ_DATABASE_G1S2',    subject: '语文一下', expected: 30 },
      { file: 'math_data_g1s2.js',    var: 'MATH_DATABASE_G1S2',    subject: '数学一下', expected: 20 },
      { file: 'english_data_g1s2.js', var: 'ENGLISH_DATABASE_G1S2', subject: '英语一下', expected: 16 },
    ],
  },
  {
    label: '二年级上册 (G2S1)',
    files: [
      { file: 'quiz_data_g2s1.js',    var: 'QUIZ_DATABASE_G2S1',    subject: '语文二上', expected: 30 },
      { file: 'math_data_g2s1.js',    var: 'MATH_DATABASE_G2S1',    subject: '数学二上', expected: 20 },
      { file: 'english_data_g2s1.js', var: 'ENGLISH_DATABASE_G2S1', subject: '英语二上', expected: 16 },
    ],
  },
  {
    label: '二年级下册 (G2S2)',
    files: [
      { file: 'quiz_data_g2s2.js',    var: 'QUIZ_DATABASE_G2S2',    subject: '语文二下', expected: 30 },
      { file: 'math_data_g2s2.js',    var: 'MATH_DATABASE_G2S2',    subject: '数学二下', expected: 20 },
      { file: 'english_data_g2s2.js', var: 'ENGLISH_DATABASE_G2S2', subject: '英语二下', expected: 16 },
    ],
  },
];

console.log('\n╔══════════════════════════════════════════════════════════╗');
console.log('║   📚 全平台 264 套大卷一次性全量校验 · 阶段一：静态审计   ║');
console.log('╚══════════════════════════════════════════════════════════╝\n');

let globalErrors = 0;
let totalPapers = 0;

function auditDb(db, label) {
  let stageErrors = 0;
  db.forEach(paper => {
    totalPapers++;
    if (!paper.id || !paper.title || !paper.unit) {
      console.error(`  ❌ [${label} 第${paper.id}套] 缺少 id/title/unit 基础属性`);
      stageErrors++;
    }

    let score = 0;
    paper.sections.forEach((sec, sIdx) => {
      score += (sec.score || 0);

      if (sec.type === 'matching') {
        if (!sec.pairs || sec.pairs.length !== 6) {
          console.error(`  ❌ [${label} 第${paper.id}套 §${sIdx+1}] 连线对数应为6，实际: ${sec.pairs?.length}`);
          stageErrors++;
        }
        if (!sec.shuffledAnswers || sec.shuffledAnswers.length !== 6) {
          console.error(`  ❌ [${label} 第${paper.id}套 §${sIdx+1}] shuffledAnswers 应为6，实际: ${sec.shuffledAnswers?.length}`);
          stageErrors++;
        }
      } else if (sec.type === 'choice') {
        if (!sec.items || sec.items.length === 0) {
          console.error(`  ❌ [${label} 第${paper.id}套 §${sIdx+1}] 选择题 items 为空`);
          stageErrors++;
        }
        (sec.items || []).forEach(item => {
          const hasCorrect = (item.options || []).some(o => o.correct === true);
          if (!hasCorrect) {
            console.error(`  ❌ [${label} 第${paper.id}套] 题目 ${item.qid} 无正确选项`);
            stageErrors++;
          }
          if (!item.tip) {
            console.error(`  ❌ [${label} 第${paper.id}套] 题目 ${item.qid} 缺少 tip 诊断提示`);
            stageErrors++;
          }
        });
      } else if (sec.type === 'poem') {
        if (!sec.text || !sec.buttons || sec.buttons.length === 0) {
          console.error(`  ❌ [${label} 第${paper.id}套 §${sIdx+1}] poem/古诗题配置不全`);
          stageErrors++;
        }
      }
    });

    if (score !== 100) {
      console.error(`  ❌ [${label} 第${paper.id}套] 总分 ${score} 分 ≠ 100 分`);
      stageErrors++;
    }
  });
  return stageErrors;
}

const stageReport = [];
for (const stage of STAGE_DATASETS) {
  console.log(`📦 正在审计【${stage.label}】(${stage.files.reduce((a,f)=>a+f.expected,0)} 套)...`);
  let stageTotal = 0;
  let stageErrors = 0;

  for (const { file, var: varName, subject, expected } of stage.files) {
    let db;
    try {
      db = loadDb(file, varName);
    } catch (e) {
      console.error(`  ❌ 无法加载 ${file}: ${e.message}`);
      globalErrors++;
      continue;
    }

    if (db.length !== expected) {
      console.error(`  ❌ [${subject}] 套数不符: 预期 ${expected}，实际 ${db.length}`);
      globalErrors++;
    }

    const errs = auditDb(db, subject);
    stageErrors += errs;
    stageTotal += db.length;
    const mark = errs === 0 ? '✅' : '❌';
    console.log(`  ${mark} ${subject}: ${db.length} 套，${errs} 错误`);
  }

  globalErrors += stageErrors;
  stageReport.push({ label: stage.label, total: stageTotal, errors: stageErrors });
  console.log(`  → 本学段合计: ${stageTotal} 套，${stageErrors} 处错误\n`);
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📊 阶段一静态审计汇总:');
stageReport.forEach(r => {
  const mark = r.errors === 0 ? '✅' : '❌';
  console.log(`  ${mark} ${r.label}: ${r.total} 套，发现 ${r.errors} 处错误`);
});
console.log(`  📚 四学段合计: ${totalPapers} 套，全局错误 ${globalErrors} 处`);

if (globalErrors > 0) {
  console.error(`\n❌ 静态审计失败！发现 ${globalErrors} 处错误，请修正后重试。`);
  process.exit(1);
}

console.log('\n🎉 阶段一静态审计 100% 通过！所有 264 套试卷结构与 100 分满分制完全合规！');

// ─────────────────────────────────────────────────────────────
// 阶段二：Playwright 无头浏览器端到端仿真
// ─────────────────────────────────────────────────────────────
console.log('\n╔══════════════════════════════════════════════════════════╗');
console.log('║   🌐 阶段二：Playwright 无头浏览器端到端交互仿真测试      ║');
console.log('╚══════════════════════════════════════════════════════════╝\n');

const BASE_URL = `file:///${brainDir.replace(/\\/g, '/')}`;

// 各学段仿真配置
const BROWSER_STAGES = [
  {
    label: '一年级上册 (G1S1)',
    stageBtn: '#btn-stage-g1s1',
    chineseUrl: `${BASE_URL}/quiz.html?grade=1&semester=1&subject=chinese&paper=1`,
    mathUrl:    `${BASE_URL}/quiz.html?grade=1&semester=1&subject=math&paper=5`,
    englishUrl: `${BASE_URL}/quiz.html?grade=1&semester=1&subject=english&paper=1`,
    expectedCards: { chinese: 30, math: 20, english: 16 },
    historyKeyword: '一年级上',
    screenshotPrefix: 'verify_g1s1',
  },
  {
    label: '一年级下册 (G1S2)',
    stageBtn: '#btn-stage-g1s2',
    chineseUrl: `${BASE_URL}/quiz.html?grade=1&semester=2&subject=chinese&paper=1`,
    mathUrl:    `${BASE_URL}/quiz.html?grade=1&semester=2&subject=math&paper=5`,
    englishUrl: `${BASE_URL}/quiz.html?grade=1&semester=2&subject=english&paper=1`,
    expectedCards: { chinese: 30, math: 20, english: 16 },
    historyKeyword: '一年级下',
    screenshotPrefix: 'verify_g1s2',
  },
  {
    label: '二年级上册 (G2S1)',
    stageBtn: '#btn-stage-g2s1',
    chineseUrl: `${BASE_URL}/quiz.html?grade=2&semester=1&subject=chinese&paper=1`,
    mathUrl:    `${BASE_URL}/quiz.html?grade=2&semester=1&subject=math&paper=11`,
    englishUrl: `${BASE_URL}/quiz.html?grade=2&semester=1&subject=english&paper=1`,
    expectedCards: { chinese: 30, math: 20, english: 16 },
    historyKeyword: '二年级上',
    screenshotPrefix: 'verify_g2s1',
  },
  {
    label: '二年级下册 (G2S2)',
    stageBtn: '#btn-stage-g2s2',
    chineseUrl: `${BASE_URL}/quiz.html?grade=2&semester=2&subject=chinese&paper=1`,
    mathUrl:    `${BASE_URL}/quiz.html?grade=2&semester=2&subject=math&paper=10`,
    englishUrl: `${BASE_URL}/quiz.html?grade=2&semester=2&subject=english&paper=1`,
    expectedCards: { chinese: 30, math: 20, english: 16 },
    historyKeyword: '二年级下',
    screenshotPrefix: 'verify_g2s2',
  },
];

async function answerPaper(page, stageLabel) {
  // 连线题
  const leftCards = page.locator('.left-card');
  const pairCount = await leftCards.count();
  if (pairCount > 0) {
    console.log(`    • 连线题: 检测到 ${pairCount} 个左侧卡片`);
    for (let i = 0; i < pairCount; i++) {
      const card = leftCards.nth(i);
      const target = await card.getAttribute('data-target');
      await card.click();
      await page.waitForTimeout(80);
      const right = page.locator(`.right-card[data-answer="${target}"]`);
      if (await right.count() > 0) {
        await right.click();
        await page.waitForTimeout(80);
      }
    }
  }

  // 选择题
  const qGroups = page.locator('.q-group');
  const groupCount = await qGroups.count();
  if (groupCount > 0) {
    console.log(`    • 选择题: 检测到 ${groupCount} 道`);
    for (let i = 0; i < groupCount; i++) {
      const g = qGroups.nth(i);
      const opts = g.locator('.opt-btn');
      // 第1题故意选错以触发查漏补缺处方笺
      const idx = (i === 0 && (await opts.count()) > 1) ? 1 : 0;
      await opts.nth(idx).click();
      await page.waitForTimeout(40);
    }
  }
}

async function runBrowserTests() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  const allConsoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') allConsoleErrors.push(`[console.error] ${msg.text()}`);
  });
  page.on('pageerror', err => allConsoleErrors.push(`[pageerror] ${err.message}`));

  const indexUrl = `${BASE_URL}/index.html`;
  let browserErrors = 0;
  const browserReport = [];

  for (const stage of BROWSER_STAGES) {
    console.log(`\n🔵 仿真测试【${stage.label}】`);
    let stageOk = true;

    try {
      // ── 1. Hub 切换学段 & 卡片数校验 ──────────────────────────
      console.log(`  1️⃣  Hub 考场大厅 → 切换至【${stage.label}】`);
      await page.goto(indexUrl, { waitUntil: 'load' });
      await page.waitForTimeout(500);
      await page.click(stage.stageBtn);
      await page.waitForTimeout(400);

      // 语文卡片数
      const chineseCount = await page.locator('#cards-grid > div').count();
      const chineseMark = chineseCount === stage.expectedCards.chinese ? '✅' : '❌';
      console.log(`    ${chineseMark} 语文卡片数: ${chineseCount} (预期 ${stage.expectedCards.chinese})`);
      if (chineseCount !== stage.expectedCards.chinese) { stageOk = false; browserErrors++; }

      // 数学卡片数
      await page.click('#tab-subject-math');
      await page.waitForTimeout(300);
      const mathCount = await page.locator('#cards-grid > div').count();
      const mathMark = mathCount === stage.expectedCards.math ? '✅' : '❌';
      console.log(`    ${mathMark} 数学卡片数: ${mathCount} (预期 ${stage.expectedCards.math})`);
      if (mathCount !== stage.expectedCards.math) { stageOk = false; browserErrors++; }

      // 英语卡片数
      await page.click('#tab-subject-english');
      await page.waitForTimeout(300);
      const englishCount = await page.locator('#cards-grid > div').count();
      const englishMark = englishCount === stage.expectedCards.english ? '✅' : '❌';
      console.log(`    ${englishMark} 英语卡片数: ${englishCount} (预期 ${stage.expectedCards.english})`);
      if (englishCount !== stage.expectedCards.english) { stageOk = false; browserErrors++; }

      // Hub 截图
      const hubShot = path.join(brainDir, `${stage.screenshotPrefix}_hub.png`);
      await page.screenshot({ path: hubShot });
      console.log(`    📸 Hub 截图: ${hubShot}`);

      // ── 2. 数学试卷：作答 + 交卷 + 成绩弹窗 + 荣誉榜 ────────
      console.log(`  2️⃣  数学试卷作答与交卷`);
      await page.goto(stage.mathUrl, { waitUntil: 'load' });
      await page.waitForTimeout(600);

      const mathTitle = await page.locator('#paper-title').innerText().catch(() => '(未找到)');
      const mathBadge = await page.locator('#subject-badge').innerText().catch(() => '(未找到)');
      console.log(`    • 试卷标题: ${mathTitle.replace(/\n/g,' ')}`);
      console.log(`    • 角标: ${mathBadge.replace(/\n/g,' ')}`);

      await answerPaper(page, stage.label);

      const quizShot = path.join(brainDir, `${stage.screenshotPrefix}_quiz_math.png`);
      await page.screenshot({ path: quizShot });
      console.log(`    📸 试卷截图: ${quizShot}`);

      await page.click('button:has-text("交卷结分")');
      await page.waitForTimeout(600);

      const modalVisible = await page.locator('#result-modal').isVisible();
      const scoreText = await page.locator('#modal-score').innerText().catch(() => '?');
      const studentText = await page.locator('#modal-student').innerText().catch(() => '?');
      const modalMark = modalVisible ? '✅' : '❌';
      console.log(`    ${modalMark} 成绩弹窗: ${modalVisible}，考生: ${studentText}，得分: ${scoreText}分`);
      if (!modalVisible) { stageOk = false; browserErrors++; }

      const modalShot = path.join(brainDir, `${stage.screenshotPrefix}_modal_math.png`);
      await page.screenshot({ path: modalShot });
      console.log(`    📸 弹窗截图: ${modalShot}`);

      await page.click('button:has-text("存入荣誉榜并查看")');
      await page.waitForTimeout(400);

      const historyRow = page.locator('#history-table-body tr').first();
      const rowText = await historyRow.innerText().catch(() => '');
      const historyMark = rowText.includes(stage.historyKeyword) ? '✅' : '❌';
      console.log(`    ${historyMark} 荣誉榜记录包含"${stage.historyKeyword}": ${historyMark === '✅'}`);
      console.log(`    → 记录摘要: ${rowText.split('\t').slice(0,4).join(' | ')}`);
      if (!rowText.includes(stage.historyKeyword)) { stageOk = false; browserErrors++; }

      // ── 3. 语文试卷截图 ───────────────────────────────────────
      console.log(`  3️⃣  语文试卷截图`);
      await page.goto(stage.chineseUrl, { waitUntil: 'load' });
      await page.waitForTimeout(500);
      const chineseShot = path.join(brainDir, `${stage.screenshotPrefix}_quiz_chinese.png`);
      await page.screenshot({ path: chineseShot });
      console.log(`    📸 语文截图: ${chineseShot}`);

      // ── 4. 英语试卷截图 ───────────────────────────────────────
      console.log(`  4️⃣  英语试卷截图`);
      await page.goto(stage.englishUrl, { waitUntil: 'load' });
      await page.waitForTimeout(500);
      const englishShot = path.join(brainDir, `${stage.screenshotPrefix}_quiz_english.png`);
      await page.screenshot({ path: englishShot });
      console.log(`    📸 英语截图: ${englishShot}`);

    } catch (e) {
      console.error(`  ❌ 【${stage.label}】仿真测试抛出异常: ${e.message}`);
      stageOk = false;
      browserErrors++;
    }

    const stageSummary = stageOk ? '✅ PASS' : '❌ FAIL';
    browserReport.push({ label: stage.label, result: stageSummary });
    console.log(`  → 本学段仿真测试: ${stageSummary}`);
  }

  // ── 5. 控制台错误汇总 ─────────────────────────────────────────
  console.log('\n5️⃣  浏览器控制台错误汇总...');
  if (allConsoleErrors.length > 0) {
    console.error(`  ❌ 发现 ${allConsoleErrors.length} 个控制台错误:`);
    allConsoleErrors.forEach(e => console.error(`    → ${e}`));
    browserErrors += allConsoleErrors.length;
  } else {
    console.log('  ✅ 浏览器控制台 0 错误 (0 console errors)！');
  }

  await browser.close();

  // ─────────────────────────────────────────────────────────────
  // 最终总结报告
  // ─────────────────────────────────────────────────────────────
  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║              📋 全平台 264 套大卷校验最终报告             ║');
  console.log('╠══════════════════════════════════════════════════════════╣');
  stageReport.forEach(r => {
    const m = r.errors === 0 ? '✅' : '❌';
    console.log(`║  静态: ${m} ${r.label.padEnd(16)} ${r.total} 套，${r.errors} 处错误              ║`);
  });
  console.log('╠══════════════════════════════════════════════════════════╣');
  browserReport.forEach(r => {
    console.log(`║  浏览器: ${r.result} ${r.label.padEnd(20)}                   ║`);
  });
  console.log('╠══════════════════════════════════════════════════════════╣');
  const totalOk = globalErrors === 0 && browserErrors === 0;
  const total = totalOk ? '✅ 全部通过！264 套试卷完全合规' : `❌ 共发现 ${globalErrors + browserErrors} 处错误`;
  console.log(`║  总结: ${total.padEnd(48)} ║`);
  console.log('╚══════════════════════════════════════════════════════════╝');

  if (!totalOk) {
    process.exit(1);
  }
}

runBrowserTests().catch(err => {
  console.error('❌ 测试运行失败:', err);
  process.exit(1);
});
