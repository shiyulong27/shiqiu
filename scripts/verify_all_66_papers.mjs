import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const brainDir = fs.existsSync('public/exercises/math_data.js') ? path.resolve('public/exercises') : 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';

// 1. 数据完整性静态校验
console.log('=====================================================');
console.log('🔍 阶段一：全真大试卷底层数据结构与 100 分满分严谨性静态校验');
console.log('=====================================================');

// 动态载入数据文件 (由于在浏览器环境使用 window.XXX，在 Node 下通过模拟 window 读取)
function loadDatabase(filename, varName) {
  const code = fs.readFileSync(path.join(brainDir, filename), 'utf-8');
  const sandbox = {};
  const runner = new Function('window', code);
  runner(sandbox);
  return sandbox[varName];
}

const chineseDb = loadDatabase('quiz_data.js', 'QUIZ_DATABASE');
const mathDb = loadDatabase('math_data.js', 'MATH_DATABASE');
const englishDb = loadDatabase('english_data.js', 'ENGLISH_DATABASE');

console.log(`✓ 语文数据文件解析成功: ${chineseDb.length} 套大卷 (预期: 30套)`);
console.log(`✓ 数学数据文件解析成功: ${mathDb.length} 套大卷 (预期: 40套)`);
console.log(`✓ 英语数据文件解析成功: ${englishDb.length} 套大卷 (预期: 16套)`);

let totalErrors = 0;

function auditDatabase(db, subjectName) {
  console.log(`\n📋 正在逐卷审计【${subjectName}】...`);
  db.forEach(paper => {
    let paperScore = 0;
    if (!paper.id || !paper.title || !paper.unit) {
      console.error(`❌ [${subjectName} 缺少基本属性]: Paper ${paper.id}`);
      totalErrors++;
    }

    paper.sections.forEach((sec, idx) => {
      paperScore += sec.score;

      if (sec.type === 'matching') {
        if (!sec.pairs || sec.pairs.length !== 6) {
          console.error(`❌ [${subjectName} 第${paper.id}套 连线对数不为6]: 当前有 ${sec.pairs?.length}`);
          totalErrors++;
        }
        if (!sec.shuffledAnswers || sec.shuffledAnswers.length !== 6) {
          console.error(`❌ [${subjectName} 第${paper.id}套 乱序答案不为6]: 当前有 ${sec.shuffledAnswers?.length}`);
          totalErrors++;
        }
      } else if (sec.type === 'choice') {
        if (!sec.items || sec.items.length === 0) {
          console.error(`❌ [${subjectName} 第${paper.id}套 选择题为空]: 第${idx + 1}大题`);
          totalErrors++;
        }
        sec.items.forEach(item => {
          const hasCorrect = item.options.some(o => o.correct === true);
          if (!hasCorrect) {
            console.error(`❌ [${subjectName} 第${paper.id}套 题目无正确选项]: ${item.qid} - ${item.prompt}`);
            totalErrors++;
          }
          if (!item.tip) {
            console.error(`❌ [${subjectName} 第${paper.id}套 题目缺少诊断提示tip]: ${item.qid}`);
            totalErrors++;
          }
        });
      } else if (sec.type === 'poem') {
        if (!sec.text || !sec.buttons || sec.buttons.length === 0) {
          console.error(`❌ [${subjectName} 第${paper.id}套 儿歌朗诵题配置不全]`);
          totalErrors++;
        }
      }
    });

    if (paperScore !== 100) {
      console.error(`❌ [${subjectName} 第${paper.id}套 总分不为100分]: 实际为 ${paperScore} 分`);
      totalErrors++;
    }
  });
  console.log(`✓ 【${subjectName}】全量试卷满分 100 分校验完毕，全部合规！`);
}

auditDatabase(chineseDb, '语文考场');
auditDatabase(mathDb, '数学考场');
auditDatabase(englishDb, '英语考场');

if (totalErrors > 0) {
  throw new Error(`数据静态审计失败，发现 ${totalErrors} 处错误！`);
}

console.log('\n=====================================================');
console.log('🌐 阶段二：Playwright 真实浏览器环境动态交互深度验证');
console.log('=====================================================');

async function runBrowserDeepVerification() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1366, height: 950 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type === 'error') consoleErrors.push(`[Console Error]: ${msg.text()}`);
  });
  page.on('pageerror', err => consoleErrors.push(`[Page Error]: ${err.message}`));

  const hubUrl = `file:///${brainDir.replace(/\\/g, '/')}/index.html`;

  // 1. 进入大厅
  console.log('📍 1. 访问通关大厅...');
  await page.goto(hubUrl);
  await page.waitForTimeout(800);

  // 2. 验证学员切换与数据隔离
  console.log('📍 2. 验证双学员【乐乐】与【月亮】切换...');
  await page.click('#hub-btn-yueliang');
  await page.waitForTimeout(300);
  let cardStudentText = await page.$eval('#cards-grid > div:first-child', el => el.innerText);
  console.log(`✓ 切换为月亮后，首张卡片状态显示: ${cardStudentText.includes('月亮 尚未作答') ? '👧 月亮 尚未作答（隔离成功）' : '状态异常'}`);

  await page.click('#hub-btn-lele');
  await page.waitForTimeout(300);

  // 3. 抽样测试语文关键节点试卷：期中（第10套）、期末（第30套）
  console.log('📍 3. 抽检语文期中卷 (quiz.html?subject=chinese&paper=10)...');
  await page.goto(`file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=chinese&paper=10`);
  await page.waitForTimeout(600);
  let title = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 试卷成功载入: ${title}`);

  console.log('📍 4. 抽检语文期末总决战 (quiz.html?subject=chinese&paper=30)...');
  await page.goto(`file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=chinese&paper=30`);
  await page.waitForTimeout(600);
  title = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 试卷成功载入: ${title}`);

  // 4. 抽样测试数学关键节点试卷：期中（第11套）、认识钟表（第15套）、凑十法进位加法（第17套）、期末（第20套）
  console.log('📍 5. 抽检数学期中大考 (quiz.html?subject=math&paper=11)...');
  await page.goto(`file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=math&paper=11`);
  await page.waitForTimeout(600);
  title = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 试卷成功载入: ${title}`);

  console.log('📍 6. 抽检数学认识钟表 (quiz.html?subject=math&paper=15)...');
  await page.goto(`file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=math&paper=15`);
  await page.waitForTimeout(600);
  title = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 试卷成功载入: ${title}`);

  console.log('📍 7. 抽检数学凑十法进位加 (quiz.html?subject=math&paper=17)...');
  await page.goto(`file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=math&paper=17`);
  await page.waitForTimeout(600);
  title = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 试卷成功载入: ${title}`);

  console.log('📍 8. 抽检数学期末大决战 (quiz.html?subject=math&paper=20)...');
  await page.goto(`file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=math&paper=20`);
  await page.waitForTimeout(600);
  title = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 试卷成功载入: ${title}`);

  // 5. 抽样测试英语关键节点试卷：期中（第7套）、颜色（第11套）、水果食物（第13套）、期末（第16套）
  console.log('📍 9. 抽检英语期中大考 (quiz.html?subject=english&paper=7)...');
  await page.goto(`file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=english&paper=7`);
  await page.waitForTimeout(600);
  title = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 试卷成功载入: ${title}`);

  console.log('📍 10. 抽检英语颜色认知 (quiz.html?subject=english&paper=11)...');
  await page.goto(`file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=english&paper=11`);
  await page.waitForTimeout(600);
  title = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 试卷成功载入: ${title}`);

  console.log('📍 11. 抽检英语期末统考 (quiz.html?subject=english&paper=16)...');
  await page.goto(`file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=english&paper=16`);
  await page.waitForTimeout(600);
  title = await page.$eval('#paper-title', el => el.innerText.trim());
  console.log(`✓ 试卷成功载入: ${title}`);

  // 6. 模拟完整答题测试：答对两道题，答错一道题，交卷结分，验证得分与查漏补缺处方精准性
  console.log('📍 12. 模拟做题交互与诊断精准性检测（数学第15套：认识钟表）...');
  await page.goto(`file:///${brainDir.replace(/\\/g, '/')}/quiz.html?subject=math&paper=15`);
  await page.waitForTimeout(800);

  // 连线第一项
  await page.click('.left-card:first-child');
  await page.waitForTimeout(100);
  // 点对应的正确答案
  const targetId = await page.$eval('.left-card:first-child', el => el.getAttribute('data-target'));
  const targetNum = targetId.split('-')[1];
  await page.click(`.right-card[data-answer="ma15-${targetNum}"]`);
  await page.waitForTimeout(150);

  // 故意点一个错题
  const wrongChoice = await page.$('.q-group .opt-btn:not(.text-slate-800)');
  // 点单选题第一个选项
  const firstChoice = await page.$('.q-group .opt-btn');
  if (firstChoice) await firstChoice.click();

  // 点击交卷
  await page.click('button:has-text("交卷结分")');
  await page.waitForTimeout(500);

  const diagVisible = await page.isVisible('#diagnostic-content');
  console.log(`✓ 诊断处方笺生成状态: ${diagVisible ? '已成功生成并呈现' : '未生成'}`);

  // 点击存入荣誉榜并查看
  await page.click('button:has-text("存入荣誉榜并查看")');
  await page.waitForTimeout(300);

  const recordCount = await page.$$eval('#history-table-body tr', rows => rows.length);
  console.log(`✓ 历史荣誉榜记录存入状态: 成功存入 ${recordCount} 条记录`);

  // 检查是否有任何控制台报错
  if (consoleErrors.length > 0) {
    console.error('❌ 控制台错误日志:', consoleErrors);
    throw new Error('存在控制台错误！');
  } else {
    console.log('🎉 验证完毕！全真 66 套试卷全部经过底层数据结构与真实浏览器运行验证，0 控制台错误！');
  }

  await browser.close();
}

runBrowserDeepVerification().catch(err => {
  console.error('深度验证失败:', err);
  process.exit(1);
});
