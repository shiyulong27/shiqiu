import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4336;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/history/emperors-battles/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🌐 启动 Playwright E2E 仿真: 历代帝王与重大决战故事长卷');
console.log('=====================================================');

// 启动 astro preview 服务器
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

// 等待服务器就绪
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

  // 1. 访问专页
  console.log(`\n1️⃣  访问历代帝王与重大决战专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('历代帝王世系与华夏重大决战风云')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  const empCardsCount = await page.locator('.emp-card').count();
  console.log(`- 帝王世系卡片总数: ${empCardsCount} (预期 >= 20)`);
  if (empCardsCount < 20) throw new Error('帝王卡片数量不足');

  const shot1 = path.join(brainDir, 'simulation_history_emperors_default.png');
  await page.screenshot({ path: shot1 });
  console.log(`📸 已保存帝王世系默认主展台截图: ${shot1}`);

  // 2. 测试帝王卡片点击与详卷模态
  console.log('\n2️⃣  测试帝王详卷模态 (点击“唐太宗”)...');
  await page.click('.emp-card[data-id="emp-tangtaizong"] .btn-read-emp');
  await page.waitForTimeout(300);

  const empModalVisible = await page.locator('#emperor-modal').isVisible();
  const empDetailTitle = await page.locator('#detail-emp-title').innerText();
  const empDetailAnecdote = await page.locator('#detail-emp-anecdote').innerText();
  console.log(`- 帝王详卷模态唤起: ${empModalVisible}, 帝王: ${empDetailTitle}`);
  console.log(`- 少儿趣味典故片段: ${empDetailAnecdote.slice(0, 35)}...`);

  if (!empModalVisible || !empDetailTitle.includes('唐太宗') || !empDetailAnecdote.includes('以铜为镜')) {
    throw new Error('帝王详卷模态展示异常');
  }

  const shot2 = path.join(brainDir, 'simulation_history_emperor_detail.png');
  await page.screenshot({ path: shot2 });
  console.log(`📸 已保存帝王风云详卷截图: ${shot2}`);

  // 关闭模态
  await page.click('#btn-close-emp');
  await page.waitForTimeout(200);

  // 3. 测试切换到【华夏重大决战长卷】
  console.log('\n3️⃣  测试切换到【华夏重大决战长卷】视角...');
  await page.click('#tab-battles');
  await page.waitForTimeout(300);

  const battlesSectionVisible = await page.locator('#view-battles').isVisible();
  const battlesCount = await page.locator('.battle-card').count();
  console.log(`- 决战长卷展示: ${battlesSectionVisible}, 战役总数: ${battlesCount} 场 (预期 >= 25)`);
  if (!battlesSectionVisible || battlesCount < 25) {
    throw new Error('重大决战长卷切换展示异常');
  }

  const shot3 = path.join(brainDir, 'simulation_history_battles_default.png');
  await page.screenshot({ path: shot3 });
  console.log(`📸 已保存重大决战时间轴长卷截图: ${shot3}`);

  // 4. 测试战役分类筛选与成语快速检索
  console.log('\n4️⃣  测试战役分类筛选 (点击“🔥 以少胜多”)...');
  await page.click('.hb-pill:has-text("以少胜多")');
  await page.waitForTimeout(300);

  const visibleBattles = await page.locator('.battle-card:visible').count();
  console.log(`- “以少胜多”战役筛选结果: ${visibleBattles} 场`);
  if (visibleBattles < 5) throw new Error('以少胜多筛选数量异常');

  // 搜索成语“破釜沉舟”
  console.log('- 测试输入成语“破釜沉舟”精准定位...');
  await page.fill('#hb-search-input', '破釜沉舟');
  await page.waitForTimeout(300);

  const searchMatchCount = await page.locator('.battle-card:visible').count();
  const matchedBattleName = await page.locator('.battle-card:visible .battle-name').first().innerText();
  console.log(`- 成语搜索结果: ${searchMatchCount} 场, 匹配战役: ${matchedBattleName}`);
  if (searchMatchCount !== 1 || !matchedBattleName.includes('巨鹿之战')) {
    throw new Error('成语“破釜沉舟”未能精准检索到巨鹿之战');
  }

  // 清除搜索
  await page.click('#btn-search-clear');
  await page.waitForTimeout(200);
  await page.click('.hb-pill:has-text("全部战役")');
  await page.waitForTimeout(200);

  // 5. 测试帝王称谓通识小百科模态
  console.log('\n5️⃣  测试【帝王称谓通识小百科】模态...');
  await page.click('#btn-open-naming');
  await page.waitForTimeout(300);

  const namingModalVisible = await page.locator('#naming-modal').isVisible();
  const namingSectionsCount = await page.locator('.naming-sec-card').count();
  console.log(`- 称谓小百科模态唤起: ${namingModalVisible}, 剖析板块: ${namingSectionsCount} (预期 3)`);
  if (!namingModalVisible || namingSectionsCount !== 3) {
    throw new Error('称谓小百科模态展示异常');
  }

  const shot4 = path.join(brainDir, 'simulation_history_naming_modal.png');
  await page.screenshot({ path: shot4 });
  console.log(`📸 已保存帝王称谓小百科模态截图: ${shot4}`);

  await page.click('#btn-close-naming');
  await page.waitForTimeout(200);

  // 6. 测试历史风云亲子益智挑战
  console.log('\n6️⃣  测试【历史风云亲子益智挑战】...');
  await page.click('#btn-open-quiz');
  await page.waitForTimeout(300);

  const quizModalVisible = await page.locator('#quiz-modal').isVisible();
  const qText = await page.locator('#quiz-question-text').innerText();
  console.log(`- 挑战模态唤起: ${quizModalVisible}, 首题题目: ${qText}`);
  if (!quizModalVisible || !qText) {
    throw new Error('益智挑战模态未正常启动');
  }

  // 点击第 1 个选项
  await page.locator('.quiz-opt-btn').first().click();
  await page.waitForTimeout(300);

  const feedbackText = await page.locator('#quiz-feedback-text').innerText();
  console.log(`- 作答反馈: ${feedbackText.slice(0, 35)}...`);
  if (!feedbackText) throw new Error('问答作答反馈未显示');

  const shot5 = path.join(brainDir, 'simulation_history_quiz_modal.png');
  await page.screenshot({ path: shot5 });
  console.log(`📸 已保存历史益智挑战截图: ${shot5}`);

  await page.click('#btn-close-quiz');
  await page.waitForTimeout(200);

  // 7. 严格控制台审查
  console.log('\n7️⃣  控制台错误严苛审查...');
  if (consoleErrors.length > 0) {
    console.error(`❌ 发现 ${consoleErrors.length} 个控制台错误:`, consoleErrors);
    throw new Error('存在浏览器控制台错误');
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
  console.log('\n🎉 历代帝王世系与重大决战风云 E2E 端到端仿真 100% 成功通过！');
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
