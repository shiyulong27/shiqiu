import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4338;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/math/games/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🌐 启动 Playwright E2E 仿真: 数学思维乐园趣味益智大挑战');
console.log('=====================================================');

const server = spawn('npx', ['astro', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: 'd:\\project\\git\\shiqiu',
  shell: true,
  stdio: 'pipe'
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('http')) {
    console.log(`✓ 预览服务器已在 http://127.0.0.1:${PORT}/shiqiu/ 成功就绪`);
  }
});

server.stderr.on('data', (d) => {
  const str = d.toString();
  if (!str.includes('ExperimentalWarning') && !str.includes('node:')) {
    console.warn(`[Preview Server Stderr] ${str.trim()}`);
  }
});

await new Promise((r) => setTimeout(r, 2500));

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

  // 1. 访问数学乐园专页
  console.log(`\n1️⃣  访问数学思维乐园专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('数学思维乐园')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  // 2. 测试 24 点速算神投手
  console.log('\n2️⃣  测试 24 点速算桌面交互...');
  const cardCount = await page.locator('.poker-card').count();
  console.log(`- 扑克卡牌渲染数: ${cardCount} (预期 4)`);
  if (cardCount !== 4) throw new Error('24点扑克卡牌渲染数量异常');

  // 点击第 1 张牌 (3), 乘号, 第 2 张牌 (8)
  await page.locator('.poker-card').nth(0).click();
  await page.waitForTimeout(100);
  await page.click('.calc-btn.btn-op[data-char="×"]');
  await page.waitForTimeout(100);
  await page.locator('.poker-card').nth(1).click();
  await page.waitForTimeout(200);

  const formulaText = await page.locator('#tf-formula-screen').innerText();
  console.log(`- 当前已组装算式: ${formulaText}`);

  // 查看提示
  await page.click('#btn-tf-hint');
  await page.waitForTimeout(200);
  const hintVal = await page.locator('#tf-hint-text').innerText();
  console.log(`- 24点提示: ${hintVal}`);

  // 展开参考解法
  await page.click('#btn-tf-solution');
  await page.waitForTimeout(200);
  const solutionsCount = await page.locator('#tf-solutions-list li').count();
  console.log(`- 参考解法数量: ${solutionsCount}`);

  const shot1 = path.join(brainDir, 'simulation_math_24point.png');
  await page.screenshot({ path: shot1 });
  console.log(`📸 已保存 24 点速算神投手展台截图: ${shot1}`);

  // 3. 测试切换到【火柴棒等式巧挪】
  console.log('\n3️⃣  测试切换到【火柴棒等式巧挪】视角...');
  await page.click('#tab-matchstick');
  await page.waitForTimeout(300);

  const msSectionVisible = await page.locator('#view-matchstick').isVisible();
  const mpCardCount = await page.locator('.mp-card').count();
  console.log(`- 火柴棒视窗展示: ${msSectionVisible}, 题目数: ${mpCardCount} (预期 >= 5)`);
  if (!msSectionVisible || mpCardCount < 5) {
    throw new Error('火柴棒视窗展示异常');
  }

  // 点击第 1 题的“揭晓移动魔法”
  await page.locator('.btn-reveal-magic').first().click();
  await page.waitForTimeout(200);
  const solText = await page.locator('.sol-pill').first().innerText();
  console.log(`- 第 1 关火柴等式解密答案: ${solText}`);

  const shot2 = path.join(brainDir, 'simulation_math_matchstick.png');
  await page.screenshot({ path: shot2 });
  console.log(`📸 已保存火柴棒等式巧挪截图: ${shot2}`);

  // 4. 测试切换到【巧算速算演练台】
  console.log('\n4️⃣  测试切换到【巧算速算演练台】视角...');
  await page.click('#tab-speedcalc');
  await page.waitForTimeout(300);

  const calcSectionVisible = await page.locator('#view-speedcalc').isVisible();
  console.log(`- 巧算演练视窗展示: ${calcSectionVisible}`);

  // 点击头同尾合十魔法 (23 × 27)
  await page.click('#btn-calc-tt');
  await page.waitForTimeout(200);
  const ttResult = await page.locator('#output-tt-box .result-line').innerText();
  console.log(`- 头同尾合十演练结果: ${ttResult}`);
  if (!ttResult.includes('621')) throw new Error('头同尾合十计算结果异常');

  // 点击乘 11 魔法 (45 × 11)
  await page.click('#btn-calc-e11');
  await page.waitForTimeout(200);
  const e11Result = await page.locator('#output-e11-box .result-line').innerText();
  console.log(`- 乘以 11 演练结果: ${e11Result}`);
  if (!e11Result.includes('495')) throw new Error('乘以 11 计算结果异常');

  const shot3 = path.join(brainDir, 'simulation_math_speedcalc.png');
  await page.screenshot({ path: shot3 });
  console.log(`📸 已保存巧算速算演练台截图: ${shot3}`);

  // 5. 测试速算秘籍大图鉴模态
  console.log('\n5️⃣  测试【巧算速算大秘籍】模态...');
  await page.click('#btn-open-tricks');
  await page.waitForTimeout(300);

  const tricksModalVisible = await page.locator('#tricks-modal').isVisible();
  console.log(`- 秘籍模态唤起: ${tricksModalVisible}`);
  if (!tricksModalVisible) throw new Error('秘籍模态未展示');

  const shot4 = path.join(brainDir, 'simulation_math_tricks_modal.png');
  await page.screenshot({ path: shot4 });
  console.log(`📸 已保存速算秘籍模态截图: ${shot4}`);

  await page.click('#btn-close-tricks');
  await page.waitForTimeout(200);

  // 6. 测试数学思维大挑战
  console.log('\n6️⃣  测试【思维段位大挑战】...');
  await page.click('#btn-open-math-quiz');
  await page.waitForTimeout(300);

  const quizModalVisible = await page.locator('#math-quiz-modal').isVisible();
  const qText = await page.locator('#math-quiz-question-text').innerText();
  console.log(`- 挑战模态唤起: ${quizModalVisible}, 首题题目: ${qText}`);
  if (!quizModalVisible || !qText) {
    throw new Error('思维挑战模态未正常启动');
  }

  // 作答第 1 题
  await page.locator('.quiz-opt-btn').first().click();
  await page.waitForTimeout(300);

  const feedbackText = await page.locator('#math-quiz-feedback-text').innerText();
  console.log(`- 作答反馈: ${feedbackText.slice(0, 35)}...`);
  if (!feedbackText) throw new Error('答题反馈未显示');

  const shot5 = path.join(brainDir, 'simulation_math_quiz_modal.png');
  await page.screenshot({ path: shot5 });
  console.log(`📸 已保存思维挑战截图: ${shot5}`);

  await page.click('#btn-close-math-quiz');
  await page.waitForTimeout(200);

  // 7. 控制台错误审查
  console.log('\n7️⃣  控制台错误严苛审查...');
  if (consoleErrors.length > 0) {
    console.error(`❌ 发现 ${consoleErrors.length} 个控制台错误:`, consoleErrors);
    throw new Error('存在浏览器控制台错误');
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
  console.log('\n🎉 数学思维乐园与趣味益智大挑战 E2E 端到端仿真 100% 成功通过！');
}

try {
  await runTests();
} catch (e) {
  console.error('❌ 测试执行失败:', e);
  process.exitCode = 1;
} finally {
  server.kill();
  console.log('✓ 预览服务器已安全关闭');
}
