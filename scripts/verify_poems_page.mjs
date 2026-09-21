import { spawn } from 'child_process';
import path from 'path';
import { chromium } from 'playwright';

const PORT = 4330;
const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🌐 启动 Playwright 自动化端到端仿真测试: 国学古诗点读台');
console.log('=====================================================');

const server = spawn(
  process.execPath,
  ['node_modules/astro/astro.js', 'preview', '--port', String(PORT), '--host', '127.0.0.1'],
  { stdio: ['ignore', 'pipe', 'pipe'] }
);

const ready = new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error('预览服务器启动超时 (30s)')), 30000);
  server.stdout.on('data', (b) => {
    if (b.toString().includes(String(PORT))) {
      clearTimeout(timer);
      setTimeout(resolve, 400);
    }
  });
  server.stderr.on('data', (b) => {
    // ignore harmless info
  });
});

async function runTests() {
  await ready;
  console.log(`✓ 预览服务器已在 http://127.0.0.1:${PORT}/shiqiu/ 成功就绪\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 960 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const url = `http://127.0.0.1:${PORT}/shiqiu/chinese/poems/`;
  console.log(`1️⃣  访问古诗点读台: ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // 1. 验证左侧目录初始卡片数
  const initialCardsCount = await page.locator('.poem-list-card').count();
  console.log(`- 初始古诗列表篇目数: ${initialCardsCount} 篇 (预期 127 篇)`);
  if (initialCardsCount !== 127) throw new Error(`古诗数量不符合预期: ${initialCardsCount}`);

  // 2. 验证主舞台标题与作者
  const mainTitle = await page.locator('#poem-title-heading').innerText();
  const authorInfo = await page.locator('#poem-author-heading').innerText();
  console.log(`- 默认首篇标题: ${mainTitle.replace(/\s+/g, ' ')}`);
  console.log(`- 诗人朝代: ${authorInfo}`);
  if (!mainTitle.includes('咏鹅')) throw new Error('首篇默认应为《咏鹅》');

  // 3. 截取点读研习模式截图
  const shot1 = path.join(brainDir, 'simulation_poems_study.png');
  await page.screenshot({ path: shot1 });
  console.log(`📸 已保存点读研习模式截图: ${shot1}`);

  // 4. 切换到【🎵 律动节拍】视图
  console.log('\n2️⃣  切换至【🎵 律动节拍】视图...');
  await page.click('#btn-view-rhythm');
  await page.waitForTimeout(300);
  const pauseMarks = await page.locator('.poem-rhythm-pause').count();
  console.log(`- 律动节拍停顿标记数: ${pauseMarks} 处`);
  if (pauseMarks === 0) throw new Error('律动节拍停顿标记未正确渲染');

  const shot2 = path.join(brainDir, 'simulation_poems_rhythm.png');
  await page.screenshot({ path: shot2 });
  console.log(`📸 已保存律动节拍模式截图: ${shot2}`);

  // 5. 切换到【🧩 挖空挑战】背诵模式
  console.log('\n3️⃣  切换至【🧩 挖空挑战】背诵模式...');
  await page.click('#btn-mode-blank');
  await page.waitForTimeout(300);
  const blankBoxes = page.locator('.poem-blank-box');
  const blankCount = await blankBoxes.count();
  console.log(`- 检测到挖空问号单元格: ${blankCount} 个`);
  if (blankCount === 0) throw new Error('挖空单元格未正确渲染');

  // 点击第一个问号测试揭开
  console.log('- 点击第一个挖空问号测试揭晓...');
  await blankBoxes.first().click();
  await page.waitForTimeout(200);
  const revealedText = await page.locator('.poem-blank-box.revealed').innerText();
  console.log(`- 揭晓汉字: 【${revealedText}】`);

  const shot3 = path.join(brainDir, 'simulation_poems_blank.png');
  await page.screenshot({ path: shot3 });
  console.log(`📸 已保存挖空挑战模式截图: ${shot3}`);

  // 6. 测试【🏆 遮挡背诵】模式
  console.log('\n4️⃣  测试【🏆 遮挡背诵】模式...');
  await page.click('#btn-mode-mask');
  await page.waitForTimeout(300);
  const maskBars = page.locator('.poem-mask-bar');
  const maskCount = await maskBars.count();
  console.log(`- 检测到遮挡条: ${maskCount} 个`);
  if (maskCount === 0) throw new Error('遮挡条未正确渲染');
  // 点击第一个遮挡条揭晓
  await maskBars.first().click();
  await page.waitForTimeout(200);

  // 7. 切回【📖 点读研习】模式并测试单字田字格弹窗
  console.log('\n5️⃣  切回【📖 点读研习】模式并测试汉字田字格弹窗...');
  await page.click('#btn-mode-study');
  await page.click('#btn-view-pinyin');
  await page.waitForTimeout(300);

  const firstCharBox = page.locator('.poem-char-box').first();
  await firstCharBox.click();
  await page.waitForTimeout(300);

  const modalVisible = await page.locator('#char-modal').isVisible();
  const modalChar = await page.locator('#modal-char').innerText();
  const modalPinyin = await page.locator('#modal-pinyin').innerText();
  console.log(`- 单字田字格弹窗激活: ${modalVisible}, 汉字: ${modalChar}, 拼音: ${modalPinyin}`);
  if (!modalVisible || modalChar !== '鹅') throw new Error('汉字田字格弹窗未正确激活');

  const shot4 = path.join(brainDir, 'simulation_poems_char_modal.png');
  await page.screenshot({ path: shot4 });
  console.log(`📸 已保存汉字田字格弹窗截图: ${shot4}`);

  // 关闭弹窗
  await page.click('.modal-close-btn');
  await page.waitForTimeout(200);

  // 8. 测试背诵打卡
  console.log('\n6️⃣  测试背诵打卡功能...');
  await page.click('#btn-checkin');
  await page.waitForTimeout(300);
  const checkinText = await page.locator('#checkin-status-text').innerText();
  console.log(`- 打卡状态提示: ${checkinText}`);
  if (!checkinText.includes('成功背诵通关')) throw new Error('背诵打卡未能成功更新状态');

  // 9. 测试学段胶囊过滤 (覆盖12个学期关键节点)
  console.log('\n7️⃣  测试学段筛选胶囊...');
  // 点击一上 (预期 6 篇)
  await page.click('.grade-tab-pill[data-grade="一上"]');
  await page.waitForTimeout(300);
  let visibleCards = await page.locator('.poem-list-card:visible').count();
  console.log(`- 一上筛选结果: ${visibleCards} 篇 (预期 6 篇)`);
  if (visibleCards !== 6) throw new Error(`一上诗篇数不符: ${visibleCards}`);

  // 点击三下 (预期 10 篇)
  await page.click('.grade-tab-pill[data-grade="三下"]');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.poem-list-card:visible').count();
  console.log(`- 三下筛选结果: ${visibleCards} 篇 (预期 10 篇)`);
  if (visibleCards !== 10) throw new Error(`三下诗篇数不符: ${visibleCards}`);

  // 点击四上 (预期 11 篇)
  await page.click('.grade-tab-pill[data-grade="四上"]');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.poem-list-card:visible').count();
  console.log(`- 四上筛选结果: ${visibleCards} 篇 (预期 11 篇)`);
  if (visibleCards !== 11) throw new Error(`四上诗篇数不符: ${visibleCards}`);

  // 点击五下 (预期 13 篇)
  await page.click('.grade-tab-pill[data-grade="五下"]');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.poem-list-card:visible').count();
  console.log(`- 五下筛选结果: ${visibleCards} 篇 (预期 13 篇)`);
  if (visibleCards !== 13) throw new Error(`五下诗篇数不符: ${visibleCards}`);

  // 点击六下 (预期 25 篇)
  await page.click('.grade-tab-pill[data-grade="六下"]');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.poem-list-card:visible').count();
  console.log(`- 六下筛选结果: ${visibleCards} 篇 (预期 25 篇)`);
  if (visibleCards !== 25) throw new Error(`六下诗篇数不符: ${visibleCards}`);

  // 切回全部 (预期 127 篇)
  await page.click('.grade-tab-pill[data-grade="all"]');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.poem-list-card:visible').count();
  console.log(`- 全部篇目筛选结果: ${visibleCards} 篇 (预期 127 篇)`);
  if (visibleCards !== 127) throw new Error(`全部篇目数不符: ${visibleCards}`);

  // 10. 测试搜索过滤功能
  console.log('\n8️⃣  测试快速搜索框 (输入 "草长莺飞")...');
  await page.fill('#poem-search-input', '草长莺飞');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.poem-list-card:visible').count();
  const searchResultTitle = await page.locator('.poem-list-card:visible .card-title').first().innerText();
  console.log(`- 搜索命中数: ${visibleCards} 篇, 命中诗名: ${searchResultTitle}`);
  if (visibleCards !== 1 || searchResultTitle !== '村居') throw new Error('搜索过滤未精准匹配《村居》');

  // 测试文言文搜索 (输入 "弈秋")
  console.log('\n8️⃣.1 测试文言文快速搜索 (输入 "弈秋")...');
  await page.fill('#poem-search-input', '弈秋');
  await page.waitForTimeout(300);
  visibleCards = await page.locator('.poem-list-card:visible').count();
  const wenyanResultTitle = await page.locator('.poem-list-card:visible .card-title').first().innerText();
  console.log(`- 搜索命中数: ${visibleCards} 篇, 命中篇名: ${wenyanResultTitle}`);
  if (visibleCards !== 1 || wenyanResultTitle !== '学弈') throw new Error('搜索过滤未精准匹配《学弈》');

  // 点击切换到《学弈》并截图
  await page.locator('.poem-list-card:visible').first().click();
  await page.waitForTimeout(300);
  const shotWenyan = path.join(brainDir, 'simulation_poems_wenyan.png');
  await page.screenshot({ path: shotWenyan });
  console.log(`📸 已保存文言文小古文点读截图: ${shotWenyan}`);

  // 清空搜索
  await page.click('#btn-search-clear');
  await page.waitForTimeout(300);

  // 11. 测试全屏大字晨读投影模式
  console.log('\n9️⃣  测试全屏大字晨读投影模式...');
  await page.click('#btn-fullscreen-reader');
  await page.waitForTimeout(300);
  const fsVisible = await page.locator('#fullscreen-reader').isVisible();
  const fsLines = await page.locator('#fs-lines-container .fs-line-row').count();
  console.log(`- 全屏晨读模态激活: ${fsVisible}, 诗句行数: ${fsLines}`);
  if (!fsVisible || fsLines === 0) throw new Error('全屏晨读投影模式未正确展开');

  // 退出全屏
  await page.click('button:has-text("退出全屏")');
  await page.waitForTimeout(200);

  // 12. 检查控制台报错
  console.log('\n🔟  浏览器控制台错误严苛审查...');
  if (consoleErrors.length > 0) {
    console.error(`❌ 发现 ${consoleErrors.length} 个控制台错误:`, consoleErrors);
    throw new Error('存在控制台错误');
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
  console.log('\n🎉 国学古诗点读台全景端到端交互仿真 100% 通过！');
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
