import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4339;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/astronomy/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🌌 启动 Playwright E2E 仿真: 浩瀚星空与天文学通识长卷');
console.log('=====================================================');

const server = spawn('npx', ['astro', 'dev', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: 'd:\\project\\git\\shiqiu',
  shell: true,
  stdio: 'pipe'
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('4339') || str.includes('Local')) {
    console.log(`✓ Dev 服务器已在 http://127.0.0.1:${PORT}/shiqiu/ 成功就绪`);
  }
});

server.stderr.on('data', (d) => {
  const str = d.toString();
  if (!str.includes('ExperimentalWarning') && !str.includes('node:') && !str.includes('Unknown user config')) {
    console.warn(`[Server Stderr] ${str.trim()}`);
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

  // 1. 访问天文学专页
  console.log(`\n1️⃣  访问天文学专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('浩瀚星空与天文学通识长卷')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  // 2. 验证东方古代星宿默认视窗
  console.log('\n2️⃣  验证【东方古代天文学 (三垣二十八宿)】默认主视窗...');
  const encCards = await page.locator('.enclosure-card').count();
  console.log(`- 三垣卡片数: ${encCards} (预期 3)`);
  if (encCards !== 3) throw new Error(`三垣卡片数不匹配: ${encCards}`);

  const symbolBtns = await page.locator('.symbol-nav-btn').count();
  console.log(`- 四象切换按钮数: ${symbolBtns} (预期 4)`);
  if (symbolBtns !== 4) throw new Error(`四象按钮数不匹配: ${symbolBtns}`);

  const mansionCards = await page.locator('.mansion-card').count();
  console.log(`- 当前可见二十八宿卡片数: ${mansionCards} (当前象预期 7)`);

  const shot1 = path.join(brainDir, 'simulation_astro_ancient.png');
  await page.screenshot({ path: shot1, fullPage: false });
  console.log(`📸 已保存东方古代天文学长卷截图: ${shot1}`);

  // 3. 验证星宿详卷模态
  console.log('\n3️⃣  测试【星宿详卷模态弹窗】...');
  await page.locator('.mansion-card[data-name="角宿"]').first().click();
  await page.waitForTimeout(300);

  const modalTitle = await page.locator('#astro-detail-title').textContent();
  console.log(`- 详卷模态标题: ${modalTitle}`);
  if (!modalTitle.includes('角宿 详卷')) {
    throw new Error(`星宿详卷标题不符合预期: ${modalTitle}`);
  }

  const shot2 = path.join(brainDir, 'simulation_astro_mansion_modal.png');
  await page.screenshot({ path: shot2 });
  console.log(`📸 已保存星宿详卷模态截图: ${shot2}`);

  await page.locator('#astro-detail-close').click();
  await page.waitForTimeout(200);

  // 4. 切换到【现代四季星座】视角
  console.log('\n4️⃣  切换到【现代四季星座】视角...');
  await page.locator('#tab-modern').click();
  await page.waitForTimeout(300);

  const modernVisible = await page.locator('#view-modern').isVisible();
  const seasonGuides = await page.locator('.season-guide-card').count();
  const zodiacCards = await page.locator('.zodiac-card').count();
  console.log(`- 现代星座视窗可见: ${modernVisible}, 四季向导数: ${seasonGuides} (预期 4), 十二星座数: ${zodiacCards} (预期 12)`);
  if (!modernVisible || seasonGuides !== 4 || zodiacCards !== 12) {
    throw new Error('现代星座视窗渲染不完全');
  }

  const shot3 = path.join(brainDir, 'simulation_astro_modern.png');
  await page.screenshot({ path: shot3, fullPage: false });
  console.log(`📸 已保存现代四季星座长卷截图: ${shot3}`);

  // 5. 切换到【太阳系与深空实验室】视角
  console.log('\n5️⃣  切换到【太阳系与深空实验室】视角...');
  await page.locator('#tab-solar').click();
  await page.waitForTimeout(300);

  const solarVisible = await page.locator('#view-solar').isVisible();
  const planetCards = await page.locator('.planet-card').count();
  console.log(`- 太阳系视窗可见: ${solarVisible}, 八大行星数: ${planetCards} (预期 8)`);
  if (!solarVisible || planetCards !== 8) {
    throw new Error('太阳系视窗渲染不完全');
  }

  // 6. 测试月相动态滑动模拟器
  console.log('\n6️⃣  测试【月相盈亏动态模拟器】...');
  const slider = page.locator('#moon-phase-slider');
  await slider.fill('15');
  await slider.dispatchEvent('input');
  await page.waitForTimeout(300);

  const moonDay = await page.locator('#moon-day-display').textContent();
  const moonName = await page.locator('#moon-name-display').textContent();
  console.log(`- 滑块调至 15 日后的显示: [${moonDay}] [${moonName}]`);
  if (!moonDay.includes('十五') || !moonName.includes('满月')) {
    throw new Error(`月相动态模拟器反馈异常: ${moonDay}, ${moonName}`);
  }

  const shot4 = path.join(brainDir, 'simulation_astro_solar_moon.png');
  await page.screenshot({ path: shot4, fullPage: false });
  console.log(`📸 已保存太阳系与月相模拟实验室截图: ${shot4}`);

  // 7. 测试行星详卷模态
  console.log('\n7️⃣  测试【行星详卷模态弹窗】...');
  await page.locator('.planet-card[data-planet-id="saturn"]').click();
  await page.waitForTimeout(300);

  const planetModalTitle = await page.locator('#astro-detail-title').textContent();
  console.log(`- 行星模态标题: ${planetModalTitle}`);
  if (!planetModalTitle.includes('土星')) {
    throw new Error(`行星模态标题异常: ${planetModalTitle}`);
  }
  await page.locator('#astro-detail-close').click();
  await page.waitForTimeout(200);

  // 8. 测试四季观星指南模态
  console.log('\n8️⃣  测试【四季观星指南秘籍】模态...');
  await page.locator('#btn-open-stargazing-guide').click();
  await page.waitForTimeout(300);
  const guideVisible = await page.locator('#astro-guide-modal').isVisible();
  console.log(`- 观星指南模态唤起: ${guideVisible}`);
  await page.locator('#astro-guide-close').click();
  await page.waitForTimeout(200);

  // 9. 测试天文小院士亲子挑战
  console.log('\n9️⃣  测试【天文小院士亲子星空挑战】...');
  await page.locator('#btn-open-astro-quiz').click();
  await page.waitForTimeout(300);
  const quizVisible = await page.locator('#astro-quiz-modal').isVisible();
  const firstQText = await page.locator('.quiz-question-text').textContent();
  console.log(`- 挑战模态唤起: ${quizVisible}, 首题题目: ${firstQText.substring(0, 35)}...`);

  // 点击第一个选项
  await page.locator('.quiz-opt-btn').first().click();
  await page.waitForTimeout(200);

  const feedbackText = await page.locator('#quiz-feedback-box').textContent();
  console.log(`- 作答反馈: ${feedbackText.substring(0, 45)}...`);

  const shot5 = path.join(brainDir, 'simulation_astro_quiz_modal.png');
  await page.screenshot({ path: shot5 });
  console.log(`📸 已保存天文挑战模态截图: ${shot5}`);

  await page.locator('#astro-quiz-close').click();

  // 10. 控制台错误审查
  console.log('\n🔟 控制台错误严苛审查...');
  if (consoleErrors.length > 0) {
    throw new Error(`检测到 ${consoleErrors.length} 个浏览器控制台错误:\n${consoleErrors.join('\n')}`);
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
}

try {
  await runTests();
  console.log('\n🎉 浩瀚星空与天文学通识长卷 E2E 端到端仿真 100% 成功通过！');
} catch (err) {
  console.error('\n❌ E2E 测试异常:', err);
  process.exitCode = 1;
} finally {
  server.kill('SIGTERM');
  console.log('✓ 预览服务器已安全关闭');
}
