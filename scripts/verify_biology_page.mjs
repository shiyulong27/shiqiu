import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4342;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/biology/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🌿 启动 Playwright E2E 仿真: 生物奥秘与神奇动物王国');
console.log('=====================================================');

const server = spawn('npx', ['astro', 'dev', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: 'd:\\project\\git\\shiqiu',
  shell: true,
  stdio: 'pipe'
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('4342') || str.includes('Local')) {
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

  // 1. 访问生物专页
  console.log(`\n1️⃣  访问生物与动物专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('生命之树 · 生物奥秘与神奇动物王国')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  // 检查动物卡片
  const cards = page.locator('.bio-species-card');
  const count = await cards.count();
  console.log(`- 渲染动物卡片数: ${count}`);
  if (count < 15) {
    throw new Error(`动物卡片过少: ${count}`);
  }

  await page.screenshot({ path: path.join(brainDir, 'simulation_bio_overview.png') });
  console.log('✓ 截图保存: simulation_bio_overview.png');

  // 2. 筛选标签测试
  console.log('\n2️⃣  测试分类筛选标签 (哺乳动物 / 神奇植物)...');
  const mammalTab = page.locator('.bio-filter-tab[data-cat="mammals"]');
  await mammalTab.click();
  await page.waitForTimeout(300);

  const visibleCards = await page.locator('.bio-species-card:visible').count();
  console.log(`- 哺乳动物可见卡片数: ${visibleCards}`);
  if (visibleCards !== 6) {
    throw new Error(`哺乳动物卡片数预期为6，实际为 ${visibleCards}`);
  }

  // 切换至神奇植物
  const botanyTab = page.locator('.bio-filter-tab[data-cat="botany"]');
  await botanyTab.click();
  await page.waitForTimeout(300);
  const botanySec = page.locator('.bio-special-section[data-category="botany"]');
  const isBotanyVisible = await botanySec.isVisible();
  console.log(`- 神奇植物展区可见性: ${isBotanyVisible}`);
  if (!isBotanyVisible) throw new Error('神奇植物展区未能成功展示');

  await page.screenshot({ path: path.join(brainDir, 'simulation_bio_botany.png') });
  console.log('✓ 截图保存: simulation_bio_botany.png');

  // 切回全部
  await page.locator('.bio-filter-tab[data-cat="all"]').click();
  await page.waitForTimeout(300);

  // 3. 测试即时搜索
  console.log('\n3️⃣  测试搜索输入框: 搜 "雪山之王"...');
  const searchInput = page.locator('#bio-search-input');
  await searchInput.fill('雪山之王');
  await page.waitForTimeout(300);
  const searchMatchCount = await page.locator('.bio-species-card:visible').count();
  console.log(`- 匹配结果数: ${searchMatchCount}`);
  if (searchMatchCount !== 1) {
    throw new Error(`搜索匹配数量异常: ${searchMatchCount}`);
  }
  await searchInput.fill('');
  await page.waitForTimeout(200);

  // 4. 测试物种详情弹窗
  console.log('\n4️⃣  测试大熊猫卡片点击与详情弹窗...');
  const pandaCard = page.locator('.bio-species-card[data-id="giant-panda"]');
  await pandaCard.click();
  await page.waitForTimeout(400);

  const detailModal = page.locator('#bio-detail-modal');
  const isModalActive = await detailModal.evaluate((el) => el.classList.contains('active'));
  console.log(`- 弹窗是否激活: ${isModalActive}`);
  if (!isModalActive) throw new Error('点击大熊猫未能打开详情弹窗');

  const modalTitle = await page.locator('#modal-bio-title').textContent();
  console.log(`- 弹窗标题: ${modalTitle}`);
  if (!modalTitle.includes('大熊猫')) throw new Error('弹窗标题内容不符');

  await page.screenshot({ path: path.join(brainDir, 'simulation_bio_detail_modal.png') });
  console.log('✓ 截图保存: simulation_bio_detail_modal.png');

  // 关闭详情弹窗
  await page.locator('#btn-close-bio-detail').click();
  await page.waitForTimeout(300);

  // 5. 测试亲子生物百科挑战
  console.log('\n5️⃣  测试亲子挑战赛模态框与判分...');
  await page.locator('#btn-open-bio-quiz').click();
  await page.waitForTimeout(400);

  const quizModal = page.locator('#bio-quiz-modal');
  const isQuizActive = await quizModal.evaluate((el) => el.classList.contains('active'));
  console.log(`- 答题弹窗激活: ${isQuizActive}`);
  if (!isQuizActive) throw new Error('答题弹窗未正常弹出');

  // 答第1题（正确答案C: 食肉目，索引2）
  const q1Opts = page.locator('.bio-quiz-card').nth(0).locator('.bio-quiz-opt');
  await q1Opts.nth(2).click();

  // 提交计算成绩
  await page.locator('#btn-submit-bio-quiz').click();
  await page.waitForTimeout(400);

  const scoreCard = page.locator('#bio-quiz-score-card');
  const isScoreVisible = await scoreCard.isVisible();
  console.log(`- 成绩结算卡是否可见: ${isScoreVisible}`);
  if (!isScoreVisible) throw new Error('成绩结算卡片未能显示');

  await page.screenshot({ path: path.join(brainDir, 'simulation_bio_quiz_modal.png') });
  console.log('✓ 截图保存: simulation_bio_quiz_modal.png');

  await page.locator('#btn-close-bio-quiz').click();
  await page.waitForTimeout(300);

  // 6. 验证控制台零错误
  console.log('\n6️⃣  检查浏览器控制台错误...');
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
  console.log('🎉 生物奥秘与神奇动物王国 E2E 仿真测试 100% 成功！');
  console.log('=====================================================');
} catch (err) {
  console.error('\n❌ E2E 仿真测试失败:', err);
  process.exitCode = 1;
} finally {
  server.kill();
  setTimeout(() => process.exit(process.exitCode || 0), 500);
}
