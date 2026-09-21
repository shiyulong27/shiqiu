import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4341;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/geography/heritage/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🏯 启动 Playwright E2E 仿真: 华夏世界遗产与名胜古迹长卷');
console.log('=====================================================');

const server = spawn('npx', ['astro', 'dev', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: 'd:\\project\\git\\shiqiu',
  shell: true,
  stdio: 'pipe'
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('4341') || str.includes('Local')) {
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

  // 1. 访问世界遗产专页
  console.log(`\n1️⃣  访问华夏世界遗产专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('华夏世界自然与文化遗产全景长卷')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  // 2. 验证全部遗产卡片
  console.log('\n2️⃣  验证默认展示全部代表性世界遗产...');
  const totalCards = await page.locator('.heritage-card').count();
  console.log(`- 遗产卡片总数: ${totalCards} (预期 >= 16)`);
  if (totalCards < 16) throw new Error(`遗产卡片数不足: ${totalCards}`);

  const shot1 = path.join(brainDir, 'simulation_heritage_default.png');
  await page.screenshot({ path: shot1, fullPage: false });
  console.log(`📸 已保存世界遗产长卷默认主图: ${shot1}`);

  // 3. 筛选【文化与自然双重遗产】
  console.log('\n3️⃣  测试筛选【文化与自然双重遗产】...');
  await page.locator('.type-filter-btn[data-type="mixed"]').click();
  await page.waitForTimeout(200);

  const mixedVisibleCount = await page.locator('.heritage-card:visible').count();
  console.log(`- 双重遗产可见卡片数: ${mixedVisibleCount} (预期 4)`);
  if (mixedVisibleCount !== 4) throw new Error(`双重遗产数量不匹配: ${mixedVisibleCount}`);

  const shot2 = path.join(brainDir, 'simulation_heritage_mixed.png');
  await page.screenshot({ path: shot2, fullPage: false });
  console.log(`📸 已保存双重遗产筛选长卷截图: ${shot2}`);

  // 4. 搜索“兵马俑”
  console.log('\n4️⃣  测试搜索框输入“兵马俑”...');
  // 先还原全部筛选
  await page.locator('.type-filter-btn[data-type="all"]').click();
  await page.locator('#heritage-search-input').fill('兵马俑');
  await page.waitForTimeout(200);

  const searchVisibleCount = await page.locator('.heritage-card:visible').count();
  console.log(`- 搜索结果可见卡片数: ${searchVisibleCount} (预期 1)`);
  if (searchVisibleCount !== 1) throw new Error(`搜索过滤异常: ${searchVisibleCount}`);

  // 5. 点击兵马俑卡片展开详卷模态
  console.log('\n5️⃣  测试【遗产详卷与诗词联动】模态...');
  await page.locator('.heritage-card:visible').first().click();
  await page.waitForTimeout(300);

  const modalTitle = await page.locator('#heritage-detail-title').textContent();
  console.log(`- 详卷模态标题: ${modalTitle}`);
  if (!modalTitle.includes('兵马俑')) {
    throw new Error(`详卷模态标题异常: ${modalTitle}`);
  }

  const shot3 = path.join(brainDir, 'simulation_heritage_detail_modal.png');
  await page.screenshot({ path: shot3 });
  console.log(`📸 已保存世界遗产详卷模态截图: ${shot3}`);

  await page.locator('#heritage-detail-close').click();
  await page.waitForTimeout(200);

  // 6. 测试足迹打卡
  console.log('\n6️⃣  测试【点亮足迹】打卡功能...');
  await page.locator('#heritage-search-input').fill('');
  await page.waitForTimeout(200);

  const firstCardStampBtn = page.locator('.heritage-card').first().locator('.btn-stamp-footprint');
  await firstCardStampBtn.click();
  await page.waitForTimeout(200);

  const stampedCount = await page.locator('#footprint-stamped-count').textContent();
  console.log(`- 打卡后足迹计数: ${stampedCount} (预期 >= 1)`);
  if (parseInt(stampedCount, 10) < 1) throw new Error(`足迹打卡计数未增加: ${stampedCount}`);

  // 7. 测试世界遗产通识亲子挑战
  console.log('\n7️⃣  测试【世界遗产通识挑战赛】...');
  await page.locator('#btn-open-heritage-quiz').click();
  await page.waitForTimeout(300);

  const quizVisible = await page.locator('#heritage-quiz-modal').isVisible();
  const qText = await page.locator('.quiz-question-text').textContent();
  console.log(`- 挑战模态唤起: ${quizVisible}, 首题题目: ${qText.substring(0, 35)}...`);

  await page.locator('.quiz-opt-btn').first().click();
  await page.waitForTimeout(200);

  const feedbackText = await page.locator('#quiz-feedback-box').textContent();
  console.log(`- 作答反馈: ${feedbackText.substring(0, 45)}...`);

  const shot4 = path.join(brainDir, 'simulation_heritage_quiz_modal.png');
  await page.screenshot({ path: shot4 });
  console.log(`📸 已保存世界遗产通识挑战截图: ${shot4}`);

  await page.locator('#heritage-quiz-close').click();

  // 8. 控制台错误严苛审查
  console.log('\n8️⃣  控制台错误严苛审查...');
  if (consoleErrors.length > 0) {
    throw new Error(`检测到 ${consoleErrors.length} 个浏览器控制台错误:\n${consoleErrors.join('\n')}`);
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
}

try {
  await runTests();
  console.log('\n🎉 华夏世界遗产与名胜古迹长卷 E2E 端到端仿真 100% 成功通过！');
} catch (err) {
  console.error('\n❌ E2E 测试异常:', err);
  process.exitCode = 1;
} finally {
  server.kill('SIGTERM');
  console.log('✓ 预览服务器已安全关闭');
}
