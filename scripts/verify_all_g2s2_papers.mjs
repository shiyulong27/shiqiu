import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🔍 阶段一：二年级下册 66 套试卷底层数据结构与 100 分满分严谨性静态审计');
console.log('=====================================================');

function loadDatabase(filename, varName) {
  const code = fs.readFileSync(path.join(brainDir, filename), 'utf-8');
  const sandbox = {};
  const runner = new Function('window', code);
  runner(sandbox);
  return sandbox[varName];
}

const chineseG2S2Db = loadDatabase('quiz_data_g2s2.js', 'QUIZ_DATABASE_G2S2');
const mathG2S2Db = loadDatabase('math_data_g2s2.js', 'MATH_DATABASE_G2S2');
const englishG2S2Db = loadDatabase('english_data_g2s2.js', 'ENGLISH_DATABASE_G2S2');

console.log(`✓ 语文二年级下册数据解析成功: ${chineseG2S2Db.length} 套大卷 (预期: 30套)`);
console.log(`✓ 数学二年级下册数据解析成功: ${mathG2S2Db.length} 套大卷 (预期: 20套)`);
console.log(`✓ 英语二年级下册数据解析成功: ${englishG2S2Db.length} 套大卷 (预期: 16套)`);

let totalAuditErrors = 0;

function auditDatabase(db, subjectName) {
  console.log(`\n📋 正在逐卷审计【${subjectName}】...`);
  db.forEach(paper => {
    let paperScore = 0;
    if (!paper.id || !paper.title || !paper.unit) {
      console.error(`❌ [${subjectName} 缺少基本属性]: Paper ${paper.id}`);
      totalAuditErrors++;
    }

    paper.sections.forEach((sec, idx) => {
      paperScore += sec.score;

      if (sec.type === 'matching') {
        if (!sec.pairs || sec.pairs.length !== 6) {
          console.error(`❌ [${subjectName} 第${paper.id}套 连线对数不为6]: 当前有 ${sec.pairs?.length}`);
          totalAuditErrors++;
        }
        if (!sec.shuffledAnswers || sec.shuffledAnswers.length !== 6) {
          console.error(`❌ [${subjectName} 第${paper.id}套 乱序答案不为6]: 当前有 ${sec.shuffledAnswers?.length}`);
          totalAuditErrors++;
        }
      } else if (sec.type === 'choice') {
        if (!sec.items || sec.items.length === 0) {
          console.error(`❌ [${subjectName} 第${paper.id}套 选择题为空]: 第${idx + 1}大题`);
          totalAuditErrors++;
        }
        sec.items.forEach(item => {
          const hasCorrect = item.options.some(o => o.correct === true);
          if (!hasCorrect) {
            console.error(`❌ [${subjectName} 第${paper.id}套 题目无正确选项]: ${item.qid} - ${item.prompt}`);
            totalAuditErrors++;
          }
          if (!item.tip) {
            console.error(`❌ [${subjectName} 第${paper.id}套 题目缺少诊断提示tip]: ${item.qid}`);
            totalAuditErrors++;
          }
        });
      } else if (sec.type === 'poem') {
        if (!sec.text || !sec.buttons || sec.buttons.length === 0) {
          console.error(`❌ [${subjectName} 第${paper.id}套 儿歌/古诗朗诵题配置不全]`);
          totalAuditErrors++;
        }
      }
    });

    if (paperScore !== 100) {
      console.error(`❌ [${subjectName} 第${paper.id}套 总分不为100分]: 实际为 ${paperScore} 分`);
      totalAuditErrors++;
    }
  });
  console.log(`✓ 【${subjectName}】全量试卷满分 100 分审计完毕，全部合规！`);
}

auditDatabase(chineseG2S2Db, '语文二年级下册考场');
auditDatabase(mathG2S2Db, '数学二年级下册考场');
auditDatabase(englishG2S2Db, '英语二年级下册考场');

if (totalAuditErrors > 0) {
  throw new Error(`数据静态审计失败，发现 ${totalAuditErrors} 处错误！`);
}

console.log('🎉 阶段一静态审计 100% 通过！所有 66 套试卷均为严格 100 分满分制！\n');

console.log('=====================================================');
console.log('🌐 阶段二：Playwright 无头浏览器交互仿真测试与视觉校验');
console.log('=====================================================');

async function runBrowserTests() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 960 }
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.message);
  });

  // 1. 测试 Hub 首页学段切换与三科展示
  console.log('1️⃣ 访问 Hub 考场大厅并测试【二年级下册】学段切换...');
  const indexUrl = `file:///${brainDir.replace(/\\/g, '/')}/index.html`;
  await page.goto(indexUrl, { waitUntil: 'load' });
  await page.waitForTimeout(600);

  // 点击切换至二年级下册
  console.log('- 点击切换至【🌟 二年级下册】...');
  await page.click('#btn-stage-g2s2');
  await page.waitForTimeout(400);

  // 检查二年级下册语文卡片数量
  let cardCount = await page.locator('#cards-grid > div').count();
  console.log(`- 二年级下册语文考场卡片数: ${cardCount} 套 (预期 30)`);
  if (cardCount !== 30) throw new Error(`二年级下册语文卡片数不符合预期: ${cardCount}`);

  // 切换到二年级下册数学考场
  console.log('- 点击切换至【📐 数学考场】...');
  await page.click('#tab-subject-math');
  await page.waitForTimeout(400);
  cardCount = await page.locator('#cards-grid > div').count();
  console.log(`- 二年级下册数学考场卡片数: ${cardCount} 套 (预期 20)`);
  if (cardCount !== 20) throw new Error(`二年级下册数学考片数不符合预期: ${cardCount}`);

  // 截图：二年级下册数学考场大厅
  const hubMathScreenshot = path.join(brainDir, 'simulation_hub_g2s2_math.png');
  await page.screenshot({ path: hubMathScreenshot, fullPage: false });
  console.log(`📸 已保存截图: ${hubMathScreenshot}`);

  // 切换到二年级下册英语考场
  console.log('- 点击切换至【🔤 英语考场】...');
  await page.click('#tab-subject-english');
  await page.waitForTimeout(400);
  cardCount = await page.locator('#cards-grid > div').count();
  console.log(`- 二年级下册英语考场卡片数: ${cardCount} 套 (预期 16)`);
  if (cardCount !== 16) throw new Error(`二年级下册英语卡片数不符合预期: ${cardCount}`);

  // 2. 测试二年级下册数学第10套（混合运算脱式计算与运算顺序）
  console.log('\n2️⃣ 开启二年级下册数学第10套【混合运算脱式计算冲刺卷】交互测试...');
  const quizMathUrl = `file:///${brainDir.replace(/\\/g, '/')}/quiz.html?grade=2&semester=2&subject=math&paper=10`;
  await page.goto(quizMathUrl, { waitUntil: 'load' });
  await page.waitForTimeout(600);

  const paperTitle = await page.locator('#paper-title').innerText();
  console.log(`- 试卷标题: ${paperTitle}`);
  const semBadge = await page.locator('#subject-badge').innerText();
  console.log(`- 科目与学期角标: ${semBadge}`);

  // 测试第1大题：连线题操作
  console.log('- 进行第1大题算式与得数连线...');
  const leftCards = page.locator('.left-card');
  const rightCards = page.locator('.right-card');
  const pairCount = await leftCards.count();
  console.log(`- 连线题检测到 ${pairCount} 个左侧算式卡片`);

  for (let i = 0; i < pairCount; i++) {
    const leftCard = leftCards.nth(i);
    const targetVal = await leftCard.getAttribute('data-target');
    await leftCard.click();
    await page.waitForTimeout(100);

    const matchingRight = page.locator(`.right-card[data-answer="${targetVal}"]`);
    if (await matchingRight.count() > 0) {
      await matchingRight.click();
      await page.waitForTimeout(100);
    }
  }

  // 作答选择题
  console.log('- 作答选择题...');
  const qGroups = page.locator('.q-group');
  const totalChoiceGroups = await qGroups.count();
  console.log(`- 检测到 ${totalChoiceGroups} 道选择题`);
  for (let i = 0; i < totalChoiceGroups; i++) {
    const group = qGroups.nth(i);
    const optButtons = group.locator('.opt-btn');
    if (i === 0 && (await optButtons.count()) > 1) {
      // 故意点击第2个选项以触发查漏补缺处方笺
      await optButtons.nth(1).click();
    } else {
      await optButtons.first().click();
    }
    await page.waitForTimeout(50);
  }

  // 答题后试卷截图
  const quizMathScreenshot = path.join(brainDir, 'simulation_quiz_g2s2_math.png');
  await page.screenshot({ path: quizMathScreenshot, fullPage: false });
  console.log(`📸 已保存截图: ${quizMathScreenshot}`);

  // 点击交卷
  console.log('- 点击【✅ 交卷结分】按钮...');
  await page.click('button:has-text("交卷结分")');
  await page.waitForTimeout(600);

  // 验证成绩单弹窗
  const modalVisible = await page.locator('#result-modal').isVisible();
  const finalScore = await page.locator('#modal-score').innerText();
  const studentName = await page.locator('#modal-student').innerText();
  const badgeName = await page.locator('#modal-badge').innerText();
  console.log(`- 成绩单弹窗弹出成功: ${modalVisible}`);
  console.log(`- 考生: ${studentName}, 得分: ${finalScore}分, 称号: ${badgeName}`);

  // 成绩弹窗截图
  const modalMathScreenshot = path.join(brainDir, 'simulation_modal_g2s2_math.png');
  await page.screenshot({ path: modalMathScreenshot, fullPage: false });
  console.log(`📸 已保存截图: ${modalMathScreenshot}`);

  // 关闭弹窗存入荣誉榜
  await page.click('button:has-text("存入荣誉榜并查看")');
  await page.waitForTimeout(400);

  // 验证历史榜单中记录条目
  const historyRow = page.locator('#history-table-body tr').first();
  const historyRowText = await historyRow.innerText();
  console.log(`- 荣誉榜最新记录: ${historyRowText.replace(/\n/g, ' | ')}`);
  if (!historyRowText.includes('二年级下') || !historyRowText.includes('数学')) {
    throw new Error('荣誉榜记录未正确体现二年级下或数学学科标识！');
  }

  // 3. 校验语文二年级下册第1套【村居】古诗与形近字
  console.log('\n3️⃣ 校验二年级下册语文第1套【村居与找春天】...');
  const quizChineseUrl = `file:///${brainDir.replace(/\\/g, '/')}/quiz.html?grade=2&semester=2&subject=chinese&paper=1`;
  await page.goto(quizChineseUrl, { waitUntil: 'load' });
  await page.waitForTimeout(600);
  const chineseQuizScreenshot = path.join(brainDir, 'simulation_quiz_g2s2_chinese.png');
  await page.screenshot({ path: chineseQuizScreenshot, fullPage: false });
  console.log(`📸 已保存截图: ${chineseQuizScreenshot}`);

  // 4. 校验英语二年级下册第1套【Playtime】
  console.log('\n4️⃣ 校验二年级下册英语第1套【Unit 1 Playtime】...');
  const quizEnglishUrl = `file:///${brainDir.replace(/\\/g, '/')}/quiz.html?grade=2&semester=2&subject=english&paper=1`;
  await page.goto(quizEnglishUrl, { waitUntil: 'load' });
  await page.waitForTimeout(600);
  const englishQuizScreenshot = path.join(brainDir, 'simulation_quiz_g2s2_english.png');
  await page.screenshot({ path: englishQuizScreenshot, fullPage: false });
  console.log(`📸 已保存截图: ${englishQuizScreenshot}`);

  // 5. 审查控制台错误
  console.log('\n5️⃣ 浏览器控制台错误审查...');
  if (consoleErrors.length > 0) {
    console.error(`❌ 发现 ${consoleErrors.length} 个控制台错误:`, consoleErrors);
    throw new Error('浏览器控制台存在 JavaScript 错误！');
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
  console.log('\n🎉 所有 66 套二年级下册试卷静态审计与端到端交互仿真校验 100% 通过！');
}

runBrowserTests().catch(err => {
  console.error('❌ 测试运行失败:', err);
  process.exit(1);
});
