import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4343;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/knowledge/commonsense/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🛡️ 启动 Playwright E2E 仿真: 少儿生活与百科常识宝典');
console.log('=====================================================');

const server = spawn('npx', ['astro', 'dev', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: 'd:\\project\\git\\shiqiu',
  shell: true,
  stdio: 'pipe'
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('4343') || str.includes('Local')) {
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

  // 1. 访问常识专页
  console.log(`\n1️⃣  访问生活常识宝典专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('少儿生活与百科常识大宝典')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  await page.screenshot({ path: path.join(brainDir, 'simulation_commonsense_overview.png') });
  console.log('✓ 截图保存: simulation_commonsense_overview.png');

  // 2. 测试分类标签切换
  console.log('\n2️⃣  测试分类导航切换 (交通公共标识 / 垃圾四分类)...');
  const signTab = page.locator('.cs-filter-tab[data-cat="signs"]');
  await signTab.click();
  await page.waitForTimeout(300);

  const signsSection = page.locator('.cs-module-section[data-section="signs"]');
  const isSignsVisible = await signsSection.isVisible();
  console.log(`- 公共标识展区可见性: ${isSignsVisible}`);
  if (!isSignsVisible) throw new Error('公共标识展区切换未成功');

  await page.screenshot({ path: path.join(brainDir, 'simulation_commonsense_signs.png') });
  console.log('✓ 截图保存: simulation_commonsense_signs.png');

  // 切换至垃圾四分类
  const trashTab = page.locator('.cs-filter-tab[data-cat="trash"]');
  await trashTab.click();
  await page.waitForTimeout(300);

  // 3. 测试垃圾分类模拟投放小实验
  console.log('\n3️⃣  测试垃圾分类模拟器交互 (矿泉水塑料瓶 -> 可回收物)...');
  const plasticItem = page.locator('.trash-sim-item[data-item="矿泉水塑料瓶"]');
  await plasticItem.click();
  await page.waitForTimeout(200);

  const blueBin = page.locator('.trash-sim-bin.bin-blue');
  await blueBin.click();
  await page.waitForTimeout(300);

  const resultText = await page.locator('#trash-sim-result').textContent();
  console.log(`- 投放反馈结果: ${resultText}`);
  if (!resultText.includes('投放正确')) {
    throw new Error(`垃圾分类反馈不符合预期: ${resultText}`);
  }

  await page.screenshot({ path: path.join(brainDir, 'simulation_commonsense_trash.png') });
  console.log('✓ 截图保存: simulation_commonsense_trash.png');

  // 4. 测试标识详情弹窗
  console.log('\n4️⃣  测试公共标识卡片点击...');
  // 先切回全部或标识展区，使标识可见
  await page.locator('.cs-filter-tab[data-cat="all"]').click();
  await page.waitForTimeout(300);

  const firstSign = page.locator('.cs-sign-card').first();
  await firstSign.click();
  await page.waitForTimeout(400);

  const signModal = page.locator('#cs-sign-modal');
  const isSignModalActive = await signModal.evaluate(el => el.classList.contains('active'));
  console.log(`- 标识弹窗是否激活: ${isSignModalActive}`);
  if (!isSignModalActive) throw new Error('标识弹窗未能成功打开');

  await page.locator('#btn-close-sign-modal').click();
  await page.waitForTimeout(300);

  // 5. 测试亲子安全常识挑战赛
  console.log('\n5️⃣  测试亲子安全常识大闯关模态框与判分...');
  await page.locator('#btn-open-cs-quiz').click();
  await page.waitForTimeout(400);

  const quizModal = page.locator('#cs-quiz-modal');
  const isQuizActive = await quizModal.evaluate(el => el.classList.contains('active'));
  console.log(`- 挑战赛弹窗激活: ${isQuizActive}`);
  if (!isQuizActive) throw new Error('答题弹窗未正常弹出');

  // 答第1题（火灾逃生正确答案选项B，索引1）
  const q1Opts = page.locator('.cs-quiz-card').nth(0).locator('.cs-quiz-opt');
  await q1Opts.nth(1).click();

  // 提交成绩
  await page.locator('#btn-submit-cs-quiz').click();
  await page.waitForTimeout(400);

  const scoreCard = page.locator('#cs-quiz-score-card');
  const isScoreVisible = await scoreCard.isVisible();
  console.log(`- 成绩结算卡可见性: ${isScoreVisible}`);
  if (!isScoreVisible) throw new Error('成绩结算卡未能正常显示');

  await page.screenshot({ path: path.join(brainDir, 'simulation_commonsense_quiz_modal.png') });
  console.log('✓ 截图保存: simulation_commonsense_quiz_modal.png');

  await page.locator('#btn-close-cs-quiz').click();
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
  console.log('🎉 少儿生活与百科常识宝典 E2E 仿真测试 100% 成功！');
  console.log('=====================================================');
} catch (err) {
  console.error('\n❌ E2E 仿真测试失败:', err);
  process.exitCode = 1;
} finally {
  server.kill();
  setTimeout(() => process.exit(process.exitCode || 0), 500);
}
