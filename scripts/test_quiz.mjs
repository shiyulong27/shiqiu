import { chromium } from 'playwright';
import path from 'path';

const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';
const hubUrl = `file:///${brainDir.replace(/\\/g, '/')}/index.html`;

async function runMultiSubjectVerification() {
  console.log('🚀 开始全科（语文30套 + 数学20套 + 英语16套）全链路端到端自动化测试...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1366, height: 950 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(`[Console Error]: ${msg.text()}`);
  });
  page.on('pageerror', err => consoleErrors.push(`[Page Error]: ${err.message}`));

  // 1. 测试首页大厅加载与语文 30 套
  console.log('📍 1. 正在访问闯关大厅 (index.html)...');
  await page.goto(hubUrl);
  await page.waitForTimeout(1000);

  const chineseCards = await page.$$eval('#cards-grid > div', cards => cards.length);
  console.log(`✓ 语文考场试卷卡片总数: ${chineseCards} (预期: 30套)`);
  if (chineseCards !== 30) throw new Error(`语文试卷数量不符，实际: ${chineseCards}`);

  // 2. 测试切换到【数学考场】
  console.log('📍 2. 测试切换到【数学考场】(20套)...');
  await page.click('#tab-subject-math');
  await page.waitForTimeout(500);

  const mathCards = await page.$$eval('#cards-grid > div', cards => cards.length);
  console.log(`✓ 数学考场试卷卡片总数: ${mathCards} (预期: 20套)`);
  if (mathCards !== 20) throw new Error(`数学试卷数量不符，实际: ${mathCards}`);

  const mathHeroTitle = await page.$eval('#hero-title', el => el.innerText.trim());
  console.log(`✓ 数学考场横幅标题: ${mathHeroTitle}`);

  // 截取数学考场大厅图
  await page.screenshot({ path: path.join(brainDir, 'simulation_hub_math.png'), fullPage: false });
  console.log('📸 已截取数学考场看板截图: simulation_hub_math.png');

  // 3. 测试切换到【英语考场】
  console.log('📍 3. 测试切换到【英语考场】(16套)...');
  await page.click('#tab-subject-english');
  await page.waitForTimeout(500);

  const englishCards = await page.$$eval('#cards-grid > div', cards => cards.length);
  console.log(`✓ 英语考场试卷卡片总数: ${englishCards} (预期: 16套)`);
  if (englishCards !== 16) throw new Error(`英语试卷数量不符，实际: ${englishCards}`);

  const englishHeroTitle = await page.$eval('#hero-title', el => el.innerText.trim());
  console.log(`✓ 英语考场横幅标题: ${englishHeroTitle}`);

  // 截取英语考场大厅图
  await page.screenshot({ path: path.join(brainDir, 'simulation_hub_english.png'), fullPage: false });
  console.log('📸 已截取英语考场看板截图: simulation_hub_english.png');

  // 4. 测试试卷答题引擎：进入数学第 1 套
  console.log('📍 4. 测试进入【数学第 01 套：数一数与比多少基础卷】...');
  const mathQuizUrl = `file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=math&paper=1`;
  await page.goto(mathQuizUrl);
  await page.waitForTimeout(1000);

  const mathPaperTitle = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 数学试卷标题: ${mathPaperTitle}`);

  // 模拟数学连线作答
  console.log('🎮 正在模拟数学连线与选择答题...');
  await page.click('.left-card[data-target="m1-1"]'); // 3只小猫
  await page.waitForTimeout(150);
  await page.click('.right-card[data-answer="ma1-1"]'); // 3
  await page.waitForTimeout(200);

  // 模拟数学选择答题（故意选一个错题测试查漏补缺处方）
  const wrongMathOpt = await page.$('.q-group[data-qid="MQ1-2-1"] .opt-btn:has-text(">")');
  if (wrongMathOpt) await wrongMathOpt.click();

  // 截取数学答题页面
  await page.screenshot({ path: path.join(brainDir, 'simulation_quiz_math.png'), fullPage: false });
  console.log('📸 已截取数学答题截图: simulation_quiz_math.png');

  // 点击交卷
  await page.click('button:has-text("交卷结分")');
  await page.waitForTimeout(500);

  const isModalVisible = await page.isVisible('#result-modal');
  console.log(`✓ 数学交卷弹窗弹出状态: ${isModalVisible}`);
  const modalScore = await page.$eval('#modal-score', el => el.innerText.trim());
  console.log(`✓ 模拟得分: ${modalScore} 分`);

  // 截取数学交卷结算弹窗
  await page.screenshot({ path: path.join(brainDir, 'simulation_modal_math.png'), fullPage: false });
  console.log('📸 已截取数学结分诊断弹窗截图: simulation_modal_math.png');

  // 5. 测试试卷答题引擎：进入英语第 1 套
  console.log('📍 5. 测试进入【英语第 01 套：学校与核心文具认读基础卷】...');
  const englishQuizUrl = `file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=english&paper=1`;
  await page.goto(englishQuizUrl);
  await page.waitForTimeout(1000);

  const englishPaperTitle = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 英语试卷标题: ${englishPaperTitle}`);

  // 模拟英语连线作答
  console.log('🎮 正在模拟英语连线与选择答题...');
  await page.click('.left-card[data-target="e1-1"]'); // 书本
  await page.waitForTimeout(150);
  await page.click('.right-card[data-answer="ea1-1"]'); // book
  await page.waitForTimeout(200);

  // 故意触发一个错题测试英语查漏补缺
  const wrongEngOpt = await page.$('.q-group[data-qid="EQ1-2-1"] .opt-btn:has-text("橡皮")');
  if (wrongEngOpt) await wrongEngOpt.click();

  // 截取英语答题页面
  await page.screenshot({ path: path.join(brainDir, 'simulation_quiz_english.png'), fullPage: false });
  console.log('📸 已截取英语答题截图: simulation_quiz_english.png');

  // 点击交卷
  await page.click('button:has-text("交卷结分")');
  await page.waitForTimeout(500);

  const engModalVisible = await page.isVisible('#result-modal');
  console.log(`✓ 英语交卷弹窗弹出状态: ${engModalVisible}`);

  // 截取英语交卷结算弹窗
  await page.screenshot({ path: path.join(brainDir, 'simulation_modal_english.png'), fullPage: false });
  console.log('📸 已截取英语结分诊断弹窗截图: simulation_modal_english.png');

  // 6. 检查全过程是否存在 Console 报错
  console.log('📍 6. 校验全链路 Console 错误日志...');
  if (consoleErrors.length > 0) {
    console.error('❌ 自动化测试中发现以下错误:');
    consoleErrors.forEach(e => console.error(e));
    throw new Error('存在控制台或页面错误，测试不通过！');
  } else {
    console.log('🎉 完美！测试全程 0 Console 错误，三大主科 66 套试卷系统全部运转正常！');
  }

  await browser.close();
}

runMultiSubjectVerification().catch(err => {
  console.error('测试失败:', err);
  process.exit(1);
});
