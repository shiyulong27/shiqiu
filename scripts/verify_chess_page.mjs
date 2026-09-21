import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4345;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/games/chess/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('♟️ 启动 Playwright E2E 仿真: 华夏与世界经典棋类通识');
console.log('=====================================================');

const server = spawn('npx', ['astro', 'dev', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: 'd:\\project\\git\\shiqiu',
  shell: true,
  stdio: 'pipe'
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('4345') || str.includes('Local')) {
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

  // 1. 访问棋类专页
  console.log(`\n1️⃣  访问棋类通识专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('智慧博弈 · 华夏与世界经典棋类通识')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  const cardsCount = await page.locator('.chess-game-card').count();
  console.log(`- 渲染棋类卡片数: ${cardsCount}`);
  if (cardsCount !== 6) {
    throw new Error(`预期6种棋类卡片，实际渲染: ${cardsCount}`);
  }

  await page.screenshot({ path: path.join(brainDir, 'simulation_chess_overview.png') });
  console.log('✓ 截图保存: simulation_chess_overview.png');

  // 2. 测试棋种切换 (切换至中国象棋)
  console.log('\n2️⃣  测试棋种分类切换 (中国象棋 / 国际象棋)...');
  const xiangqiTab = page.locator('.chess-game-tab[data-game="xiangqi"]');
  await xiangqiTab.click();
  await page.waitForTimeout(300);

  const visibleCount = await page.locator('.chess-game-card:visible').count();
  console.log(`- 象棋过滤后可见卡片数: ${visibleCount}`);
  if (visibleCount !== 1) {
    throw new Error(`象棋过滤卡片数不为1: ${visibleCount}`);
  }

  await page.screenshot({ path: path.join(brainDir, 'simulation_chess_xiangqi.png') });
  console.log('✓ 截图保存: simulation_chess_xiangqi.png');

  // 切回全部
  await page.locator('.chess-game-tab[data-game="all"]').click();
  await page.waitForTimeout(300);

  // 3. 测试口诀卡片点击
  console.log('\n3️⃣  测试口诀朗读点击 (马走日字象走田)...');
  const chantItem = page.locator('.chess-chant-item').first();
  await chantItem.click();
  await page.waitForTimeout(200);

  // 4. 测试亲子博弈答题模态框
  console.log('\n4️⃣  测试亲子棋类通识答题模态框...');
  await page.locator('#btn-open-chess-quiz').click();
  await page.waitForTimeout(400);

  const quizModal = page.locator('#chess-quiz-modal');
  const isQuizActive = await quizModal.evaluate(el => el.classList.contains('active'));
  console.log(`- 答题弹窗激活: ${isQuizActive}`);
  if (!isQuizActive) throw new Error('答题弹窗未正常弹出');

  // 答第1题（围棋361个交叉点，选项B，索引1）
  const q1Opts = page.locator('.chess-quiz-card').nth(0).locator('.chess-quiz-opt');
  await q1Opts.nth(1).click();

  // 提交成绩
  await page.locator('#btn-submit-chess-quiz').click();
  await page.waitForTimeout(400);

  const scoreCard = page.locator('#chess-quiz-score-card');
  const isScoreVisible = await scoreCard.isVisible();
  console.log(`- 成绩结算卡可见性: ${isScoreVisible}`);
  if (!isScoreVisible) throw new Error('成绩结算卡片未能显示');

  await page.screenshot({ path: path.join(brainDir, 'simulation_chess_quiz_modal.png') });
  console.log('✓ 截图保存: simulation_chess_quiz_modal.png');

  await page.locator('#btn-close-chess-quiz').click();
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
  console.log('🎉 华夏与世界经典棋类通识 E2E 仿真测试 100% 成功！');
  console.log('=====================================================');
} catch (err) {
  console.error('\n❌ E2E 仿真测试失败:', err);
  process.exitCode = 1;
} finally {
  server.kill();
  setTimeout(() => process.exit(process.exitCode || 0), 500);
}
