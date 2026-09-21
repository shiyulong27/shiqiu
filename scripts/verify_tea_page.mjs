import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4347;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/culture/tea/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🍵 启动 Playwright E2E 仿真: 中华茶文化全景百科');
console.log('=====================================================');

const server = spawn('npx', ['astro', 'dev', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: 'd:\\project\\git\\shiqiu',
  shell: true,
  stdio: 'pipe'
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('4347') || str.includes('Local')) {
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

  // 1. 访问茶文化专页
  console.log(`\n1️⃣  访问中华茶文化专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('一片树叶的故事 · 中华茶文化全景百科')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  const cardsCount = await page.locator('.tea-cat-card').count();
  console.log(`- 渲染六大茶类卡片数: ${cardsCount}`);
  if (cardsCount !== 6) {
    throw new Error(`预期6大茶类卡片，实际渲染: ${cardsCount}`);
  }

  await page.screenshot({ path: path.join(brainDir, 'simulation_tea_overview.png') });
  console.log('✓ 截图保存: simulation_tea_overview.png');

  // 2. 测试茶类分类切换 (切换至绿茶 / 乌龙茶)
  console.log('\n2️⃣  测试六大茶类过滤切换 (绿茶 / 乌龙茶)...');
  const greenTab = page.locator('.tea-cat-tab[data-cat="green-tea"]');
  await greenTab.click();
  await page.waitForTimeout(300);

  const visibleCount = await page.locator('.tea-cat-card:visible').count();
  console.log(`- 绿茶过滤后可见卡片数: ${visibleCount}`);
  if (visibleCount !== 1) {
    throw new Error(`绿茶过滤卡片数不为1: ${visibleCount}`);
  }

  await page.screenshot({ path: path.join(brainDir, 'simulation_tea_green.png') });
  console.log('✓ 截图保存: simulation_tea_green.png');

  // 切回全部
  await page.locator('.tea-cat-tab[data-cat="all"]').click();
  await page.waitForTimeout(300);

  // 3. 测试鉴茶五步法卡片互动
  console.log('\n3️⃣  测试鉴茶五步法卡片高亮...');
  const firstEvalCard = page.locator('.tea-eval-card').first();
  await firstEvalCard.click();
  await page.waitForTimeout(200);

  // 4. 测试亲子茶道答题模态框
  console.log('\n4️⃣  测试亲子茶道通识答题模态框...');
  await page.locator('#btn-open-tea-quiz').click();
  await page.waitForTimeout(400);

  const quizModal = page.locator('#tea-quiz-modal');
  const isQuizActive = await quizModal.evaluate(el => el.classList.contains('active'));
  console.log(`- 答题弹窗激活: ${isQuizActive}`);
  if (!isQuizActive) throw new Error('答题弹窗未正常弹出');

  // 答第1题（完全不发酵的茶类是绿茶，选项B，索引1）
  const q1Opts = page.locator('.tea-quiz-card').nth(0).locator('.tea-quiz-opt');
  await q1Opts.nth(1).click();

  // 提交成绩
  await page.locator('#btn-submit-tea-quiz').click();
  await page.waitForTimeout(400);

  const scoreCard = page.locator('#tea-quiz-score-card');
  const isScoreVisible = await scoreCard.isVisible();
  console.log(`- 成绩结算卡可见性: ${isScoreVisible}`);
  if (!isScoreVisible) throw new Error('成绩结算卡片未能显示');

  await page.screenshot({ path: path.join(brainDir, 'simulation_tea_quiz_modal.png') });
  console.log('✓ 截图保存: simulation_tea_quiz_modal.png');

  await page.locator('#btn-close-tea-quiz').click();
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
  console.log('🎉 中华茶文化全景百科 E2E 仿真测试 100% 成功！');
  console.log('=====================================================');
} catch (err) {
  console.error('\n❌ E2E 仿真测试失败:', err);
  process.exitCode = 1;
} finally {
  server.kill();
  setTimeout(() => process.exit(process.exitCode || 0), 500);
}
