import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4337;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/science/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🌐 启动 Playwright E2E 仿真: 华夏科学探索与古今科技长卷');
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

  // 1. 访问科学专页
  console.log(`\n1️⃣  访问科学探索专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('华夏科学探索与古今科技长卷')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  const invCount = await page.locator('.inv-card').count();
  const sciCount = await page.locator('.sci-card').count();
  console.log(`- 四大发明卡片数: ${invCount} (预期 4), 科技先贤数: ${sciCount} (预期 9)`);
  if (invCount !== 4 || sciCount < 9) {
    throw new Error('四大发明或先贤卡片数量异常');
  }

  const shot1 = path.join(brainDir, 'simulation_science_default.png');
  await page.screenshot({ path: shot1 });
  console.log(`📸 已保存古代发明与先贤默认展台截图: ${shot1}`);

  // 2. 测试先贤详情模态 (祖冲之)
  console.log('\n2️⃣  测试科技先贤详情模态 (点击“祖冲之”)...');
  await page.click('.sci-card[data-id="sci-zuchongzhi"] .btn-sci-detail');
  await page.waitForTimeout(300);

  const sciModalVisible = await page.locator('#scientist-modal').isVisible();
  const detailName = await page.locator('#detail-sci-name').innerText();
  const detailAchieve = await page.locator('#detail-sci-achievements').innerText();
  console.log(`- 先贤详卷模态唤起: ${sciModalVisible}, 先贤: ${detailName}`);
  console.log(`- 核心成就片段: ${detailAchieve.slice(0, 35)}...`);

  if (!sciModalVisible || !detailName.includes('祖冲之') || !detailAchieve.includes('圆周率')) {
    throw new Error('先贤详卷模态展示异常');
  }

  const shot2 = path.join(brainDir, 'simulation_science_scientist_modal.png');
  await page.screenshot({ path: shot2 });
  console.log(`📸 已保存科技先贤详卷截图: ${shot2}`);

  await page.click('#btn-close-sci-detail');
  await page.waitForTimeout(200);

  // 3. 测试切换至【丝路物产大交换】
  console.log('\n3️⃣  测试切换到【丝路物产大交换】视角...');
  await page.click('#tab-silkroad');
  await page.waitForTimeout(300);

  const silkSectionVisible = await page.locator('#view-silkroad').isVisible();
  const goodsCount = await page.locator('.good-card').count();
  console.log(`- 丝路视窗展示: ${silkSectionVisible}, 物产卡片数: ${goodsCount} (预期 >= 12)`);
  if (!silkSectionVisible || goodsCount < 12) {
    throw new Error('丝路物产视窗展示异常');
  }

  // 搜索“葡萄”
  console.log('- 测试输入“葡萄”过滤检索...');
  await page.fill('#sci-search-input', '葡萄');
  await page.waitForTimeout(300);

  const visibleGoods = await page.locator('.good-card:visible').count();
  const firstGoodName = await page.locator('.good-card:visible .good-name').first().innerText();
  console.log(`- 检索结果: ${visibleGoods} 项, 命中名称: ${firstGoodName}`);
  if (visibleGoods !== 1 || !firstGoodName.includes('葡萄')) {
    throw new Error('搜索“葡萄”未能精准过滤');
  }

  await page.click('#btn-sci-search-clear');
  await page.waitForTimeout(200);

  const shot3 = path.join(brainDir, 'simulation_science_silkroad.png');
  await page.screenshot({ path: shot3 });
  console.log(`📸 已保存丝路物产大交换截图: ${shot3}`);

  // 4. 测试切换至【现代大国重器】
  console.log('\n4️⃣  测试切换到【现代大国重器】视角...');
  await page.click('#tab-modern');
  await page.waitForTimeout(300);

  const modernSectionVisible = await page.locator('#view-modern').isVisible();
  const aeroCount = await page.locator('.aero-card').count();
  console.log(`- 现代重器视窗展示: ${modernSectionVisible}, 超级工程数: ${aeroCount} (预期 >= 8)`);
  if (!modernSectionVisible || aeroCount < 8) {
    throw new Error('现代大国重器视窗展示异常');
  }

  const shot4 = path.join(brainDir, 'simulation_science_modern_aero.png');
  await page.screenshot({ path: shot4 });
  console.log(`📸 已保存现代大国重器长卷截图: ${shot4}`);

  // 5. 测试科学小博士益智挑战
  console.log('\n5️⃣  测试【科学小博士亲子挑战】...');
  await page.click('#btn-open-sci-quiz');
  await page.waitForTimeout(300);

  const quizModalVisible = await page.locator('#sci-quiz-modal').isVisible();
  const qText = await page.locator('#sci-quiz-question-text').innerText();
  console.log(`- 挑战模态唤起: ${quizModalVisible}, 首题题目: ${qText}`);
  if (!quizModalVisible || !qText) {
    throw new Error('科学挑战模态未正常启动');
  }

  // 作答第 1 题
  await page.locator('.quiz-opt-btn').first().click();
  await page.waitForTimeout(300);

  const feedbackText = await page.locator('#sci-quiz-feedback-text').innerText();
  console.log(`- 作答反馈: ${feedbackText.slice(0, 35)}...`);
  if (!feedbackText) throw new Error('问答作答反馈未显示');

  const shot5 = path.join(brainDir, 'simulation_science_quiz_modal.png');
  await page.screenshot({ path: shot5 });
  console.log(`📸 已保存科学挑战截图: ${shot5}`);

  await page.click('#btn-close-sci-quiz');
  await page.waitForTimeout(200);

  // 6. 控制台错误审查
  console.log('\n6️⃣  控制台错误严苛审查...');
  if (consoleErrors.length > 0) {
    console.error(`❌ 发现 ${consoleErrors.length} 个控制台错误:`, consoleErrors);
    throw new Error('存在浏览器控制台错误');
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
  console.log('\n🎉 华夏科学探索与古今科技长卷 E2E 端到端仿真 100% 成功通过！');
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
