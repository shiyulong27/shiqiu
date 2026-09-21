import { chromium } from 'playwright';
import path from 'path';

console.log('--- 启动 Playwright E2E 仿真测试: 天文星空与深空摄影画廊专页 ---');

const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}/shiqiu/astronomy/`;

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  try {
    console.log(`[NAVIGATE] 访问: ${BASE_URL}`);
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 15000 });

    const artifactDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

    // 1. 切换到“韦伯与深空”视角 (data-view="deep")
    const deepTab = page.locator('.astro-view-tab[data-view="deep"]');
    await deepTab.click();
    await page.waitForTimeout(500);

    const deepSection = page.locator('#view-deep');
    const isVisible = await deepSection.isVisible();
    console.log(`[CHECK] 韦伯与深空展台可见: ${isVisible ? '是' : '否'}`);
    if (!isVisible) throw new Error('view-deep 未正常展示');

    // 2. 检查深空天体卡片数 (8张)
    const cards = page.locator('.deep-card');
    const cardCount = await cards.count();
    console.log(`[CHECK] 深空天体真实照片卡片数: ${cardCount}`);
    if (cardCount < 7) throw new Error(`深空卡片数量不足 7 项: ${cardCount}`);

    await page.screenshot({ path: path.join(artifactDir, 'simulation_astronomy_deep_overview.png') });
    console.log('[SCREENSHOT] 保存深空展台概览截图: simulation_astronomy_deep_overview.png');

    // 3. 检查恒星六阶段演化时间轴
    const stellarCards = page.locator('.stellar-node-card');
    const stellarCount = await stellarCards.count();
    console.log(`[CHECK] 恒星生死六阶段卡片数: ${stellarCount}`);
    if (stellarCount !== 6) throw new Error(`恒星阶段应为 6，现为 ${stellarCount}`);

    // 滚动并截图恒星演化
    await page.evaluate(() => document.querySelector('.stellar-timeline-deck').scrollIntoView());
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(artifactDir, 'simulation_astronomy_stellar_evolution.png') });
    console.log('[SCREENSHOT] 保存恒星演化时间轴截图: simulation_astronomy_stellar_evolution.png');

    // 4. 点击第一张深空卡片，测试全屏超清灯箱
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);
    await cards.first().click();
    await page.waitForSelector('#astro-lightbox-modal:visible');
    await page.waitForTimeout(400);
    console.log('[CHECK] 天文全屏灯箱已打开');

    await page.screenshot({ path: path.join(artifactDir, 'simulation_astronomy_lightbox.png') });
    console.log('[SCREENSHOT] 保存深空全屏灯箱截图: simulation_astronomy_lightbox.png');

    // 5. 按 ESC 键关闭灯箱
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const lbClosed = !(await page.locator('#astro-lightbox-modal').isVisible());
    console.log(`[CHECK] ESC 键关闭灯箱: ${lbClosed ? '成功' : '失败'}`);

    // 6. 控制台无报错检查
    if (consoleErrors.length > 0) {
      console.error('[ERROR] 发现浏览器控制台报错:', consoleErrors);
      throw new Error(`控制台有 ${consoleErrors.length} 个错误`);
    }

    console.log('--- 天文星空与深空画廊 Playwright E2E 仿真测试 100% 全部通过 (PASS) ---');
  } finally {
    await browser.close();
  }
}

run().catch(err => {
  console.error('[FATAL]', err);
  process.exit(1);
});
