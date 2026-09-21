import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4344;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/math/rubik/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🎲 启动 Playwright E2E 仿真: 空间思维与三阶魔方立体乐园');
console.log('=====================================================');

const server = spawn('npx', ['astro', 'dev', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: 'd:\\project\\git\\shiqiu',
  shell: true,
  stdio: 'pipe'
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('4344') || str.includes('Local')) {
    console.log(`✓ Dev 服务器已在 http://127.0.0.1:${PORT}/shiqiu/ 成功就绪`);
  }
});

server.stderr.on('data', (d) => {
  const str = d.toString();
  if (!str.includes('ExperimentalWarning') && !str.includes('node:') && !str.includes('Unknown user config')) {
    console.warn(`[Server Stderr] ${str.trim()}`);
  }
});

await new Promise((r) => setTimeout(r, 2800));

async function runTests() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 960 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.error(`[Browser Console Error] ${msg.text()}`);
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    console.error(`[Page Uncaught Error] ${err.message}`);
    consoleErrors.push(err.message);
  });

  // 1. 访问魔方专页
  console.log(`\n1️⃣  访问魔方空间专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('空间大师 · 三阶魔方还原与空间思维乐园')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  await page.screenshot({ path: path.join(brainDir, 'simulation_rubik_overview.png') });
  console.log('✓ 截图保存: simulation_rubik_overview.png');

  // 2. 测试七步层先法导航切换
  console.log('\n2️⃣  测试层先法分步切换 (切换至第3步 / 第6步小鱼)...');
  const step3Tab = page.locator('.rubik-step-tab[data-step="3"]');
  await step3Tab.click();
  await page.waitForTimeout(300);

  const stageText = await page.locator('#rubik-stage-preview').textContent();
  console.log(`- 步骤目标显示: ${stageText}`);
  if (!stageText.includes('第一层全白')) {
    throw new Error(`步骤切换未生效: ${stageText}`);
  }

  const step6Tab = page.locator('.rubik-step-tab[data-step="6"]');
  await step6Tab.click();
  await page.waitForTimeout(300);

  await page.screenshot({ path: path.join(brainDir, 'simulation_rubik_steps.png') });
  console.log('✓ 截图保存: simulation_rubik_steps.png');

  // 3. 测试转动代码符号组合台
  console.log('\n3️⃣  测试转动代码组合台: 点击 R, U, R prime, U prime...');
  const cardR = page.locator('.notation-item-card[data-code="R"]');
  const cardU = page.locator('.notation-item-card[data-code="U"]');
  const cardRPrime = page.locator('.notation-item-card[data-code="R\'"]');
  const cardUPrime = page.locator('.notation-item-card[data-code="U\'"]');

  await cardR.click();
  await page.waitForTimeout(100);
  await cardU.click();
  await page.waitForTimeout(100);
  await cardRPrime.click();
  await page.waitForTimeout(100);
  await cardUPrime.click();
  await page.waitForTimeout(200);

  const formulaSeq = await page.locator('#rubik-formula-sequence').textContent();
  console.log(`- 组合手法序列: ${formulaSeq}`);
  if (!formulaSeq.includes('R') || !formulaSeq.includes("U'")) {
    throw new Error(`公式序列未正确拼接: ${formulaSeq}`);
  }

  await page.screenshot({ path: path.join(brainDir, 'simulation_rubik_notations.png') });
  console.log('✓ 截图保存: simulation_rubik_notations.png');

  // 4. 测试空间魔方小院士挑战赛
  console.log('\n4️⃣  测试亲子空间问答挑战模态框...');
  await page.locator('#btn-open-rubik-quiz').click();
  await page.waitForTimeout(400);

  const quizModal = page.locator('#rubik-quiz-modal');
  const isQuizActive = await quizModal.evaluate(el => el.classList.contains('active'));
  console.log(`- 答题弹窗激活: ${isQuizActive}`);
  if (!isQuizActive) throw new Error('答题弹窗未正常弹出');

  // 答第1题（中心块6个固定不动，选项B，索引1）
  const q1Opts = page.locator('.rubik-quiz-card').nth(0).locator('.rubik-quiz-opt');
  await q1Opts.nth(1).click();

  // 提交测评
  await page.locator('#btn-submit-rubik-quiz').click();
  await page.waitForTimeout(400);

  const scoreCard = page.locator('#rubik-quiz-score-card');
  const isScoreVisible = await scoreCard.isVisible();
  console.log(`- 成绩结算卡可见性: ${isScoreVisible}`);
  if (!isScoreVisible) throw new Error('成绩结算卡片未能显示');

  await page.screenshot({ path: path.join(brainDir, 'simulation_rubik_quiz_modal.png') });
  console.log('✓ 截图保存: simulation_rubik_quiz_modal.png');

  await page.locator('#btn-close-rubik-quiz').click();
  await page.waitForTimeout(300);

  // 5. 验证控制台零错误
  console.log('\n5️⃣  检查浏览器控制台错误...');
  console.log(`- 控制台捕获错误数: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    throw new Error(`发现浏览器控制台错误: ${JSON.stringify(consoleErrors)}`);
  }
  console.log('✓ 完美！浏览器控制台 0 错误！');

  await browser.close();
}

try {
  await runTests();
  console.log('\n=====================================================');
  console.log('🎉 空间思维与三阶魔方立体乐园 E2E 仿真测试 100% 成功！');
  console.log('=====================================================');
} catch (err) {
  console.error('\n❌ E2E 仿真测试失败:', err);
  process.exitCode = 1;
} finally {
  server.kill();
  setTimeout(() => process.exit(process.exitCode || 0), 500);
}
