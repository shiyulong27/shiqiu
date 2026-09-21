import { spawn } from 'child_process';
import path from 'path';
import { chromium } from 'playwright';

const PORT = 4335;
const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🌐 启动 Playwright E2E 仿真: 二十四节气与七十二物候长卷');
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
      setTimeout(resolve, 500);
    }
  });
  server.stderr.on('data', () => {});
});

async function runTests() {
  await ready;
  console.log(`✓ 预览服务器已在 http://127.0.0.1:${PORT}/shiqiu/ 成功就绪\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 960 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const url = `http://127.0.0.1:${PORT}/shiqiu/chinese/solar-terms/`;
  console.log(`1️⃣  访问二十四节气长卷专页: ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // 1. 基础页面元素检查
  const dialNodesCount = await page.locator('.dial-node-btn').count();
  const drawerCardsCount = await page.locator('.term-mini-card').count();
  console.log(`- 罗盘 360° 节气节点数: ${dialNodesCount} (预期 24)`);
  console.log(`- 节气名录列表卡片数: ${drawerCardsCount} (预期 24)`);
  if (dialNodesCount !== 24 || drawerCardsCount !== 24) {
    throw new Error('节气节点或列表卡片总数不符合预期 24');
  }

  // 2. 验证当前时令节气速览条
  const currTitle = await page.locator('#curr-term-title').innerText();
  const currTagline = await page.locator('#curr-term-tagline').innerText();
  console.log(`- 自动判定当前时令节气: ${currTitle}, 标语: ${currTagline}`);

  const shot1 = path.join(brainDir, 'simulation_solar_terms_default.png');
  await page.screenshot({ path: shot1 });
  console.log(`📸 已保存二十四节气主展台截图: ${shot1}`);

  // 3. 测试节气切换（切换至“清明”）
  console.log('\n2️⃣  测试节气切换 (切换至“清明”节气)...');
  await page.click('.term-mini-card[data-id="qingming"]');
  await page.waitForTimeout(400);

  const termName = await page.locator('#term-name').innerText();
  const termTagline = await page.locator('#term-tagline').innerText();
  const pentadFirst = await page.locator('.pentad-card .pentad-name').first().innerText();
  const poemQuote = await page.locator('#poem-quote').innerText();
  console.log(`- 切换后节气名称: ${termName}, 标语: ${termTagline}`);
  console.log(`- 清明一候物候: ${pentadFirst}`);
  console.log(`- 联动古诗名句: ${poemQuote}`);

  if (!termName.includes('清明') || !pentadFirst.includes('桐始华') || !poemQuote.includes('清明时节雨纷纷')) {
    throw new Error('清明节气详情渲染不符合预期');
  }

  const shot2 = path.join(brainDir, 'simulation_solar_terms_qingming.png');
  await page.screenshot({ path: shot2 });
  console.log(`📸 已保存清明节气物候展台截图: ${shot2}`);

  // 4. 测试四季筛选胶囊
  console.log('\n3️⃣  测试四季胶囊筛选...');
  // 点击“春生” (预期 6 个节气)
  await page.click('.season-tab-pill[data-season="🌱 春生"]');
  await page.waitForTimeout(300);
  let visibleCards = await page.locator('.term-mini-card:visible').count();
  console.log(`- 春季筛选结果: ${visibleCards} 节 (预期 6)`);
  if (visibleCards !== 6) throw new Error(`春季筛选数量不符: ${visibleCards}`);

  // 点击“冬藏” (预期 6 个节气)
  await page.click('.season-tab-pill[data-season="❄️ 冬藏"]');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.term-mini-card:visible').count();
  console.log(`- 冬季筛选结果: ${visibleCards} 节 (预期 6)`);
  if (visibleCards !== 6) throw new Error(`冬季筛选数量不符: ${visibleCards}`);

  // 点击“冬至”卡片
  await page.click('.term-mini-card[data-id="dongzhi"]');
  await page.waitForTimeout(300);
  const dongzhiTitle = await page.locator('#term-name').innerText();
  const dongzhiFood = await page.locator('#term-foods-wrap').innerText();
  console.log(`- 冬至展台: ${dongzhiTitle}, 代表美食: ${dongzhiFood}`);
  if (!dongzhiTitle.includes('冬至') || (!dongzhiFood.includes('水饺') && !dongzhiFood.includes('饺子'))) {
    throw new Error('冬至节气展台未正确展示');
  }

  const shot3 = path.join(brainDir, 'simulation_solar_terms_dongzhi.png');
  await page.screenshot({ path: shot3 });
  console.log(`📸 已保存冬至节气物候展台截图: ${shot3}`);

  // 切回全部节气
  await page.click('.season-tab-pill[data-season="全部节气"]');
  await page.waitForTimeout(300);

  // 5. 测试搜索功能
  console.log('\n4️⃣  测试快速搜索框 (输入 "青团")...');
  await page.fill('#st-search-input', '青团');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.term-mini-card:visible').count();
  const searchMatchName = await page.locator('.term-mini-card:visible .card-name').first().innerText();
  console.log(`- 搜索命中数: ${visibleCards} 节, 匹配节气: ${searchMatchName}`);
  if (visibleCards !== 1 || !searchMatchName.includes('清明')) {
    throw new Error('搜索“青团”未能精准匹配清明节气');
  }

  // 清空搜索
  await page.click('#btn-st-search-clear');
  await page.waitForTimeout(300);

  // 6. 测试统编教材《二十四节气歌》点读台
  console.log('\n5️⃣  测试《二十四节气歌》点读台...');
  await page.click('#btn-open-song');
  await page.waitForTimeout(300);

  const songModalVisible = await page.locator('#song-modal').isVisible();
  const songLinesCount = await page.locator('.song-line-card').count();
  console.log(`- 节气歌模态唤起: ${songModalVisible}, 诗歌诗行数: ${songLinesCount}`);
  if (!songModalVisible || songLinesCount !== 4) {
    throw new Error('节气歌点读台模态展示异常');
  }

  const shot4 = path.join(brainDir, 'simulation_solar_terms_song.png');
  await page.screenshot({ path: shot4 });
  console.log(`📸 已保存节气歌点读台截图: ${shot4}`);

  await page.click('#song-modal .modal-close');
  await page.waitForTimeout(200);

  // 7. 测试节气物候趣味大挑战
  console.log('\n6️⃣  测试【节气物候趣味大挑战】问答游戏...');
  await page.click('#btn-open-quiz');
  await page.waitForTimeout(300);

  const quizModalVisible = await page.locator('#quiz-modal').isVisible();
  const qTitle = await page.locator('#quiz-q-title').innerText();
  console.log(`- 问答挑战模态唤起: ${quizModalVisible}, 首题题目: ${qTitle}`);
  if (!quizModalVisible || !qTitle) {
    throw new Error('问答挑战模态未正常启动');
  }

  // 点击春分选项（第 1 题的正确选项）
  await page.click('.st-quiz-btn:has-text("春分")');
  await page.waitForTimeout(300);

  const fbText = await page.locator('#quiz-feedback').innerText();
  console.log(`- 答题即时反馈: ${fbText}`);
  if (!fbText.includes('恭喜答对')) {
    throw new Error('问答判定反馈未正确提示');
  }

  const shot5 = path.join(brainDir, 'simulation_solar_terms_quiz.png');
  await page.screenshot({ path: shot5 });
  console.log(`📸 已保存节气物候问答挑战截图: ${shot5}`);

  // 关闭挑战模态
  await page.click('#quiz-modal .modal-close');
  await page.waitForTimeout(200);

  // 8. 严格审查浏览器控制台错误
  console.log('\n7️⃣  控制台错误严苛审查...');
  if (consoleErrors.length > 0) {
    console.error(`❌ 发现 ${consoleErrors.length} 个控制台错误:`, consoleErrors);
    throw new Error('存在浏览器控制台错误');
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
  console.log('\n🎉 中华二十四节气与七十二物候长卷 E2E 端到端仿真 100% 成功通过！');
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
