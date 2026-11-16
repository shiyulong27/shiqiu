import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function testAllAdvancedVisuals() {
  console.log("============================================================");
  console.log("🎨 正在对第 21 ~ 40 套进阶试卷的【全量图文可视化】进行严密质检");
  console.log("============================================================");

  // 1. 静态检查 public/exercises/math_data.js 中第 21~40 套的 visual 覆盖率
  const dataPath = path.resolve('./public/exercises/math_data.js');
  const code = fs.readFileSync(dataPath, 'utf-8');
  const sandbox = {};
  const fn = new Function('window', code + '\nreturn window.MATH_DATABASE;');
  const papers = fn(sandbox);

  let totalChoiceItems = 0;
  let visualCount = 0;
  const missing = [];

  for (const paper of papers) {
    if (paper.id >= 21 && paper.id <= 40) {
      for (const sec of paper.sections) {
        if (sec.items) {
          for (const item of sec.items) {
            totalChoiceItems++;
            if (item.visual && item.visual.trim().length > 0) {
              visualCount++;
            } else {
              missing.push({ paperId: paper.id, qid: item.qid, prompt: item.prompt });
            }
          }
        }
      }
    }
  }

  console.log(`✓ 第 21 ~ 40 套进阶题选择题总数: ${totalChoiceItems}`);
  console.log(`✓ 成功包含 visual 可视化插图题数: ${visualCount}`);

  if (missing.length > 0) {
    console.error(`❌ 发现 ${missing.length} 道题目缺少 visual 属性:`, missing);
    process.exit(1);
  } else {
    console.log(`✅ 100% 覆盖！所有 20 套进阶试卷共 ${totalChoiceItems} 道选择题全部配备可视化插图！`);
  }

  // 2. Playwright 端到端浏览器渲染抽检
  console.log("\n🌐 启动无头浏览器，抽检试卷页面中的 .item-visual DOM 渲染情况...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const testPaperIds = [21, 26, 27, 28, 29, 30, 31, 33, 35, 37, 40];
  for (const pid of testPaperIds) {
    const quizUrl = `file://${path.resolve('./public/exercises/quiz.html')}?subject=math&id=${pid}`;
    await page.goto(quizUrl, { waitUntil: 'load' });
    await page.waitForTimeout(300);

    const visualElements = await page.locator('.item-visual').count();
    console.log(`  ✓ 第 ${pid} 套试卷页面成功渲染 .item-visual 视觉组件数: ${visualElements} 个`);
    if (visualElements === 0) {
      console.error(`❌ 第 ${pid} 套试卷页面未渲染任何 .item-visual！`);
      process.exit(1);
    }
  }

  await browser.close();
  console.log("\n🎉🎉 所有抽检试卷全部包含丰富的图文可视化元素，验证彻底通过！🎉🎉");
}

testAllAdvancedVisuals().catch(err => {
  console.error(err);
  process.exit(1);
});
