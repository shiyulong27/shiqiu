import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 4340;
const BASE_URL = `http://127.0.0.1:${PORT}/shiqiu/english/phonics/`;
const brainDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🔤 启动 Playwright E2E 仿真: 小学英语自然拼读与单词王国');
console.log('=====================================================');

const server = spawn('npx', ['astro', 'dev', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: 'd:\\project\\git\\shiqiu',
  shell: true,
  stdio: 'pipe'
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('4340') || str.includes('Local')) {
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

  // 1. 访问自然拼读专页
  console.log(`\n1️⃣  访问自然拼读专页: ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log(`- 页面 Title: ${title}`);
  if (!title.includes('小学英语自然拼读与趣味单词王国')) {
    throw new Error(`页面标题不匹配: ${title}`);
  }

  // 2. 验证 26 字母发音律默认视窗
  console.log('\n2️⃣  验证【26 字母自然发音律】主视窗...');
  const letterCards = await page.locator('.letter-card').count();
  console.log(`- 字母卡片数: ${letterCards} (预期 26)`);
  if (letterCards !== 26) throw new Error(`字母卡片数不符合预期: ${letterCards}`);

  const shot1 = path.join(brainDir, 'simulation_phonics_alphabet.png');
  await page.screenshot({ path: shot1, fullPage: false });
  console.log(`📸 已保存 26 字母发音律截图: ${shot1}`);

  // 3. 切换至【短元音词族与拼词实验室】视窗
  console.log('\n3️⃣  切换至【短元音词族与拼词实验室】视窗...');
  await page.locator('#tab-families').click();
  await page.waitForTimeout(300);

  const familiesVisible = await page.locator('#view-families').isVisible();
  console.log(`- 词族视窗可见: ${familiesVisible}`);

  // 测试拼词：点击辅音 'p'，点击词族 '-an'
  await page.locator('.builder-onset-btn[data-onset="p"]').click();
  await page.locator('.builder-rime-btn[data-rime="-an"]').click();
  await page.waitForTimeout(200);

  const resultWord = await page.locator('#builder-result-word').textContent();
  const resultMeaning = await page.locator('#builder-result-meaning').textContent();
  console.log(`- 互动拼词结果: [${resultWord}] [${resultMeaning}] (预期 pan 平底锅)`);
  if (resultWord !== 'pan' || !resultMeaning.includes('平底锅')) {
    throw new Error(`互动拼词实验室结果不符合预期: ${resultWord}`);
  }

  const shot2 = path.join(brainDir, 'simulation_phonics_builder.png');
  await page.screenshot({ path: shot2, fullPage: false });
  console.log(`📸 已保存拼词积木实验室截图: ${shot2}`);

  // 4. 切换至【Magic E 魔法与复合辅音】视窗
  console.log('\n4️⃣  切换至【Magic E 魔法与复合辅音】视窗...');
  await page.locator('#tab-magice').click();
  await page.waitForTimeout(300);

  const magiceVisible = await page.locator('#view-magice').isVisible();
  const magiceRules = await page.locator('.magice-rule-card').count();
  const digraphs = await page.locator('.digraph-card').count();
  console.log(`- Magic E 视窗可见: ${magiceVisible}, 规则数: ${magiceRules} (预期 4), 复合辅音数: ${digraphs} (预期 >= 5)`);
  if (!magiceVisible || magiceRules !== 4 || digraphs < 5) {
    throw new Error('Magic E 或复合辅音渲染不完全');
  }

  // 测试施展 Magic E 按钮
  const toggleBtn = page.locator('.magic-e-toggle-btn').first();
  await toggleBtn.click();
  await page.waitForTimeout(200);
  const btnText = await toggleBtn.textContent();
  console.log(`- 点击 Magic E 按钮后的文本: [${btnText}] (预期包含“还原”)`);

  const shot3 = path.join(brainDir, 'simulation_phonics_magice.png');
  await page.screenshot({ path: shot3, fullPage: false });
  console.log(`📸 已保存 Magic E 与复合辅音截图: ${shot3}`);

  // 5. 切换至【50 个高频词 (Sight Words)】视窗
  console.log('\n5️⃣  切换至【50 个高频词 (Sight Words)】视窗...');
  await page.locator('#tab-sightwords').click();
  await page.waitForTimeout(300);

  const swVisible = await page.locator('#view-sightwords').isVisible();
  const totalSwCards = await page.locator('.sight-word-card').count();
  console.log(`- Sight Words 视窗可见: ${swVisible}, 词卡总数: ${totalSwCards} (预期 50)`);
  if (totalSwCards !== 50) throw new Error(`Sight Words 总数不为 50: ${totalSwCards}`);

  // 过滤 Level 1
  await page.locator('.sight-level-btn[data-level="1"]').click();
  await page.waitForTimeout(200);
  const l1VisibleCount = await page.locator('.sight-word-card:visible').count();
  console.log(`- 过滤 Level 1 后可见卡片数: ${l1VisibleCount} (预期 10)`);
  if (l1VisibleCount !== 10) throw new Error(`Level 1 过滤异常: ${l1VisibleCount}`);

  const shot4 = path.join(brainDir, 'simulation_phonics_sightwords.png');
  await page.screenshot({ path: shot4, fullPage: false });
  console.log(`📸 已保存 Sight Words 高频词截图: ${shot4}`);

  // 6. 测试自然拼读趣味闯关挑战
  console.log('\n6️⃣  测试【自然拼读趣味闯关挑战】...');
  await page.locator('#btn-open-phonics-quiz').click();
  await page.waitForTimeout(300);

  const quizVisible = await page.locator('#phonics-quiz-modal').isVisible();
  const qText = await page.locator('.quiz-question-text').textContent();
  console.log(`- 挑战模态唤起: ${quizVisible}, 首题题目: ${qText.substring(0, 35)}...`);

  await page.locator('.quiz-opt-btn').first().click();
  await page.waitForTimeout(200);

  const feedbackText = await page.locator('#quiz-feedback-box').textContent();
  console.log(`- 作答反馈: ${feedbackText.substring(0, 45)}...`);

  const shot5 = path.join(brainDir, 'simulation_phonics_quiz_modal.png');
  await page.screenshot({ path: shot5 });
  console.log(`📸 已保存自然拼读闯关截图: ${shot5}`);

  await page.locator('#phonics-quiz-close').click();

  // 7. 控制台错误审查
  console.log('\n7️⃣  控制台错误严苛审查...');
  if (consoleErrors.length > 0) {
    throw new Error(`检测到 ${consoleErrors.length} 个浏览器控制台错误:\n${consoleErrors.join('\n')}`);
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
}

try {
  await runTests();
  console.log('\n🎉 小学英语自然拼读与趣味单词王国 E2E 端到端仿真 100% 成功通过！');
} catch (err) {
  console.error('\n❌ E2E 测试异常:', err);
  process.exitCode = 1;
} finally {
  server.kill('SIGTERM');
  console.log('✓ 预览服务器已安全关闭');
}
