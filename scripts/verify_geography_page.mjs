import { spawn } from 'child_process';
import path from 'path';
import { chromium } from 'playwright';

const PORT = 4332;
const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🌐 启动 Playwright 自动化端到端仿真测试: 中国地理通识长卷');
console.log('=====================================================');

const server = spawn(
  process.execPath,
  ['node_modules/astro/astro.js', 'preview', '--port', String(PORT), '--host', '127.0.0.1'],
  { stdio: ['ignore', 'pipe', 'pipe'] }
);

const ready = new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error('预览服务器启动超时 (35s)')), 35000);
  server.stdout.on('data', (b) => {
    if (b.toString().includes(String(PORT))) {
      clearTimeout(timer);
      setTimeout(resolve, 400);
    }
  });
  server.stderr.on('data', () => {});
});

async function runTests() {
  await ready;
  console.log(`✓ 预览服务器已在 http://127.0.0.1:${PORT}/shiqiu/ 成功就绪\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1400, height: 960 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const url = `http://127.0.0.1:${PORT}/shiqiu/geography/explore/`;
  console.log(`1️⃣  访问中国地理通识长卷专页: ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // 1. 验证左侧省份列表初始卡片数
  const initialCardsCount = await page.locator('.province-mini-card').count();
  console.log(`- 初始省份列表卡片数: ${initialCardsCount} 个 (预期 34 个)`);
  if (initialCardsCount !== 34) throw new Error(`省份数量不符合预期: ${initialCardsCount}`);

  // 2. 验证默认展卷（四川省）
  const provName = await page.locator('#prov-name').innerText();
  const provCapital = await page.locator('#prov-capital').innerText();
  const provTagline = await page.locator('#prov-tagline').innerText();
  console.log(`- 默认展卷省份: ${provName}, ${provCapital}, 美称: “${provTagline}”`);
  if (!provName.includes('四川')) throw new Error('首个默认展卷省份应为四川省');

  const lmCount = await page.locator('#prov-landmarks-grid .landmark-card').count();
  const spCount = await page.locator('#prov-specialties-grid .specialty-card').count();
  console.log(`- 地标古迹卡片数: ${lmCount}, 风物特产卡片数: ${spCount}`);
  if (lmCount === 0 || spCount === 0) throw new Error('地标或特产未正确渲染');

  // 截图默认全景
  const shot1 = path.join(brainDir, 'simulation_geo_explore_default.png');
  await page.screenshot({ path: shot1 });
  console.log(`📸 已保存地理长卷主展台截图: ${shot1}`);

  // 3. 测试省份点击切换（切换至陕西省）
  console.log('\n2️⃣  测试省份点击切换 (切换至陕西省)...');
  await page.click('.province-mini-card[data-id="shaanxi"]');
  await page.waitForTimeout(400);

  const shaanxiTitle = await page.locator('#prov-name').innerText();
  const shaanxiCap = await page.locator('#prov-capital').innerText();
  console.log(`- 切换后展卷省份: ${shaanxiTitle}, ${shaanxiCap}`);
  if (!shaanxiTitle.includes('陕西') || !shaanxiCap.includes('西安')) throw new Error('省份切换未能成功更新为陕西省');

  const shot2 = path.join(brainDir, 'simulation_geo_explore_shaanxi.png');
  await page.screenshot({ path: shot2 });
  console.log(`📸 已保存陕西省展卷截图: ${shot2}`);

  // 4. 测试大区筛选胶囊
  console.log('\n3️⃣  测试七大地理大区胶囊筛选...');
  // 点击西北 (预期 5 个省区)
  await page.click('.region-tab-pill[data-region="西北"]');
  await page.waitForTimeout(300);
  let visibleCards = await page.locator('.province-mini-card:visible').count();
  console.log(`- 西北筛选结果: ${visibleCards} 个 (预期 5 个)`);
  if (visibleCards !== 5) throw new Error(`西北大区省份数不符: ${visibleCards}`);

  // 点击华东 (预期 8 个省市区)
  await page.click('.region-tab-pill[data-region="华东"]');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.province-mini-card:visible').count();
  console.log(`- 华东筛选结果: ${visibleCards} 个 (预期 8 个)`);
  if (visibleCards !== 8) throw new Error(`华东大区省份数不符: ${visibleCards}`);

  // 切回全部
  await page.click('.region-tab-pill[data-region="全部大区"]');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.province-mini-card:visible').count();
  console.log(`- 全部大区筛选结果: ${visibleCards} 个 (预期 34 个)`);
  if (visibleCards !== 34) throw new Error(`全部省份数不符: ${visibleCards}`);

  // 5. 测试快速搜索框
  console.log('\n4️⃣  测试快速搜索框 (输入 "大熊猫")...');
  await page.fill('#geo-search-input', '大熊猫');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.province-mini-card:visible').count();
  const searchMatchName = await page.locator('.province-mini-card:visible .card-name').first().innerText();
  console.log(`- 搜索命中数: ${visibleCards} 个, 首个省份: ${searchMatchName}`);
  if (visibleCards < 1 || !searchMatchName.includes('四川')) throw new Error('搜索大熊猫未能精准匹配四川省');

  // 清空搜索
  await page.click('#btn-geo-search-clear');
  await page.waitForTimeout(300);

  // 6. 测试【华夏足迹打卡册】
  console.log('\n5️⃣  测试【华夏足迹打卡册】功能...');
  await page.click('#btn-open-footprints');
  await page.waitForTimeout(300);

  const fpModalVisible = await page.locator('#footprints-modal').isVisible();
  const fpBtnsCount = await page.locator('.fp-item-btn').count();
  console.log(`- 足迹模态激活: ${fpModalVisible}, 省份打卡按钮数: ${fpBtnsCount}`);
  if (!fpModalVisible || fpBtnsCount !== 34) throw new Error('足迹打卡模态未正确展示');

  // 勾选四川省
  const sichuanBtn = page.locator('.fp-item-btn:has-text("四川")');
  await sichuanBtn.click();
  await page.waitForTimeout(200);

  const visitedCountText = await page.locator('#stat-visited-count').innerText();
  console.log(`- 打卡后统计状态: ${visitedCountText}`);
  if (!visitedCountText.includes('1 / 34')) throw new Error('足迹统计未正确增加');

  const shot3 = path.join(brainDir, 'simulation_geo_footprints.png');
  await page.screenshot({ path: shot3 });
  console.log(`📸 已保存华夏足迹打卡册截图: ${shot3}`);

  // 关闭足迹弹窗
  await page.click('.modal-close');
  await page.waitForTimeout(200);

  // 7. 测试【趣味地理猜省挑战】
  console.log('\n6️⃣  测试【趣味地理猜省挑战】问答闯关...');
  await page.click('#btn-open-quiz');
  await page.waitForTimeout(300);

  const quizModalVisible = await page.locator('#quiz-modal').isVisible();
  const qText = await page.locator('#quiz-q-text').innerText();
  console.log(`- 猜省问答模态激活: ${quizModalVisible}, 题目: ${qText}`);
  if (!quizModalVisible || !qText) throw new Error('猜省闯关未正确激活');

  // 点击第一个答案（正确选项“四川省”）
  await page.click('.quiz-option-btn:has-text("四川省")');
  await page.waitForTimeout(300);

  const fbText = await page.locator('#quiz-feedback').innerText();
  console.log(`- 答题反馈: ${fbText}`);
  if (!fbText.includes('回答正确')) throw new Error('答题反馈未判定正确');

  const shot4 = path.join(brainDir, 'simulation_geo_quiz.png');
  await page.screenshot({ path: shot4 });
  console.log(`📸 已保存猜省闯关挑战截图: ${shot4}`);

  // 关闭挑战弹窗
  await page.locator('#quiz-modal .modal-close').click();
  await page.waitForTimeout(200);

  // 8. 严格检查控制台错误
  console.log('\n7️⃣  控制台错误严苛审查...');
  if (consoleErrors.length > 0) {
    console.error(`❌ 发现 ${consoleErrors.length} 个控制台错误:`, consoleErrors);
    throw new Error('存在浏览器控制台错误');
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
  console.log('\n🎉 中国地理通识长卷全景端到端交互仿真 100% 通过！');
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
