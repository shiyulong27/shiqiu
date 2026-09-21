import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4346;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/culture/wuxia/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🗡️ 启动 Playwright E2E 仿真: 华夏经典武侠小说长卷');
console.log('=====================================================');

const server = spawn('npx', ['astro', 'dev', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: 'd:\\project\\git\\shiqiu',
  shell: true,
  stdio: 'pipe'
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('4346') || str.includes('Local')) {
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

  // 1. 访问武侠专页
  console.log(`\n1️⃣  访问武侠长卷专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('侠义千秋 · 华夏经典武侠小说长卷')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  const cardsCount = await page.locator('.wuxia-novel-card').count();
  console.log(`- 渲染武侠小说卡片数: ${cardsCount}`);
  if (cardsCount !== 5) {
    throw new Error(`预期5部长卷，实际渲染: ${cardsCount}`);
  }

  await page.screenshot({ path: path.join(brainDir, 'simulation_wuxia_overview.png') });
  console.log('✓ 截图保存: simulation_wuxia_overview.png');

  // 2. 测试作品过滤切换
  console.log('\n2️⃣  测试小说卷轴切换 (射雕英雄传 / 天龙八部)...');
  const shediaoTab = page.locator('.wuxia-novel-tab[data-novel="shediao"]');
  await shediaoTab.click();
  await page.waitForTimeout(300);

  const visibleCount = await page.locator('.wuxia-novel-card:visible').count();
  console.log(`- 射雕过滤后可见卡片数: ${visibleCount}`);
  if (visibleCount !== 1) {
    throw new Error(`射雕过滤卡片数不为1: ${visibleCount}`);
  }

  // 检查华山五绝展区
  const fiveMasters = page.locator('.five-masters-block');
  const isMastersVisible = await fiveMasters.isVisible();
  console.log(`- 华山五绝展台是否可见: ${isMastersVisible}`);
  if (!isMastersVisible) throw new Error('华山五绝展台未能正常显示');

  await page.screenshot({ path: path.join(brainDir, 'simulation_wuxia_shediao.png') });
  console.log('✓ 截图保存: simulation_wuxia_shediao.png');

  // 切回全部
  await page.locator('.wuxia-novel-tab[data-novel="all"]').click();
  await page.waitForTimeout(300);

  // 3. 测试亲子武侠通识答题模态框
  console.log('\n3️⃣  测试亲子武侠答题模态框与判分...');
  await page.locator('#btn-open-wuxia-quiz').click();
  await page.waitForTimeout(400);

  const quizModal = page.locator('#wuxia-quiz-modal');
  const isQuizActive = await quizModal.evaluate(el => el.classList.contains('active'));
  console.log(`- 答题弹窗激活: ${isQuizActive}`);
  if (!isQuizActive) throw new Error('答题弹窗未正常弹出');

  // 答第1题（侠之大者为国为民，选项B，索引1）
  const q1Opts = page.locator('.wuxia-quiz-card').nth(0).locator('.wuxia-quiz-opt');
  await q1Opts.nth(1).click();

  // 提交成绩
  await page.locator('#btn-submit-wuxia-quiz').click();
  await page.waitForTimeout(400);

  const scoreCard = page.locator('#wuxia-quiz-score-card');
  const isScoreVisible = await scoreCard.isVisible();
  console.log(`- 成绩结算卡可见性: ${isScoreVisible}`);
  if (!isScoreVisible) throw new Error('成绩结算卡片未能显示');

  await page.screenshot({ path: path.join(brainDir, 'simulation_wuxia_quiz_modal.png') });
  console.log('✓ 截图保存: simulation_wuxia_quiz_modal.png');

  await page.locator('#btn-close-wuxia-quiz').click();
  await page.waitForTimeout(300);

  // 4. 验证控制台零错误
  console.log('\n4️⃣  检查浏览器控制台错误...');
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
  console.log('🎉 华夏经典武侠小说长卷 E2E 仿真测试 100% 成功！');
  console.log('=====================================================');
} catch (err) {
  console.error('\n❌ E2E 仿真测试失败:', err);
  process.exitCode = 1;
} finally {
  server.kill();
  setTimeout(() => process.exit(process.exitCode || 0), 500);
}
