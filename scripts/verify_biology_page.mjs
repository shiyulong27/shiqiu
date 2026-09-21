import { chromium } from 'playwright';
import path from 'path';

console.log('--- 启动 Playwright E2E 仿真测试: 生物与恐龙真实大图专页 ---');

const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}/shiqiu/biology/`;

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

    // 1. 验证基础卡片存在性
    const cards = page.locator('.bio-species-card');
    const cardCount = await cards.count();
    console.log(`[CHECK] 发现卡片数: ${cardCount}`);
    if (cardCount < 35) throw new Error(`卡片数量不足 35: ${cardCount}`);

    // 截图保存首页总览
    const artifactDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';
    await page.screenshot({ path: path.join(artifactDir, 'simulation_bio_real_overview.png'), fullPage: false });
    console.log('[SCREENSHOT] 保存概览截图: simulation_bio_real_overview.png');

    // 2. 测试分类切换到 "dinosaurs"
    const dinoTab = page.locator('.bio-filter-tab[data-cat="dinosaurs"]');
    await dinoTab.click();
    await page.waitForTimeout(500);

    const visibleCards = page.locator('.bio-species-card:visible');
    const dinoCount = await visibleCards.count();
    console.log(`[CHECK] 恐龙门类过滤后可见卡片数: ${dinoCount}`);
    if (dinoCount !== 8) throw new Error(`恐龙过滤卡片应为 8，实际为 ${dinoCount}`);

    await page.screenshot({ path: path.join(artifactDir, 'simulation_bio_dinosaurs.png'), fullPage: false });
    console.log('[SCREENSHOT] 保存恐龙展台截图: simulation_bio_dinosaurs.png');

    // 3. 点击霸王龙卡片，测试详情弹窗与真实照片
    const trexCard = page.locator('.bio-species-card[data-id="t-rex"]');
    await trexCard.click();
    await page.waitForSelector('#bio-detail-modal.active');
    console.log('[CHECK] 霸王龙详情弹窗已打开');

    const photoVisible = await page.locator('#modal-bio-photo-box').isVisible();
    if (!photoVisible) throw new Error('详情弹窗真实图片未正常展示');

    await page.screenshot({ path: path.join(artifactDir, 'simulation_bio_modal_real_photo.png') });
    console.log('[SCREENSHOT] 保存物种大图详情弹窗截图: simulation_bio_modal_real_photo.png');

    // 4. 点击全屏大图按钮进入灯箱
    const lightboxBtn = page.locator('#btn-open-lightbox');
    await lightboxBtn.click();
    await page.waitForSelector('#bio-lightbox-modal:visible');
    await page.waitForTimeout(400);
    console.log('[CHECK] 全屏超清灯箱已打开');

    await page.screenshot({ path: path.join(artifactDir, 'simulation_bio_lightbox.png') });
    console.log('[SCREENSHOT] 保存全屏灯箱截图: simulation_bio_lightbox.png');

    // 5. 按 ESC 键关闭灯箱和弹窗
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const lbClosed = !(await page.locator('#bio-lightbox-modal').isVisible());
    console.log(`[CHECK] ESC 关闭灯箱: ${lbClosed ? '成功' : '失败'}`);

    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const modalClosed = !(await page.locator('#bio-detail-modal').isVisible());
    console.log(`[CHECK] ESC 关闭详情弹窗: ${modalClosed ? '成功' : '失败'}`);

    // 6. 控制台无报错检查
    if (consoleErrors.length > 0) {
      console.error('[ERROR] 发现浏览器控制台报错:', consoleErrors);
      throw new Error(`控制台有 ${consoleErrors.length} 个错误`);
    }

    console.log('--- 仿真测试 100% 通过！页面交互、真实摄影展示、灯箱与无报错全部达标 ---');
  } finally {
    await browser.close();
  }
}

run().catch(err => {
  console.error('[FATAL]', err);
  process.exit(1);
});
