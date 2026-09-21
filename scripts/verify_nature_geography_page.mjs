import { chromium } from 'playwright';
import path from 'path';

console.log('--- 启动 Playwright E2E 仿真测试: 华夏自然地理与世界地理大画卷 ---');

const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}/shiqiu/geography/nature/`;
const artifactDir = 'C:\\Users\\liwei\\.gemini\\antigravity\\brain\\77e928f4-e97c-4d6f-85ae-2299355652a6';

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

  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  try {
    console.log(`[NAVIGATE] 访问页面: ${BASE_URL}`);
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 15000 });

    // 1. 验证三级阶梯部分
    const stepCards = page.locator('.step-card');
    const stepCount = await stepCards.count();
    console.log(`[CHECK] 地形三级阶梯卡片数: ${stepCount}`);
    if (stepCount !== 3) throw new Error(`阶梯数量应为 3，实际为: ${stepCount}`);

    await page.evaluate(() => document.querySelector('#section-steps').scrollIntoView());
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(artifactDir, 'simulation_geo_nature_steps.png') });
    console.log('[SCREENSHOT] 保存三级阶梯与山脉截图: simulation_geo_nature_steps.png');

    // 2. 验证大江大河水文节点
    const riverSecCards = page.locator('.river-section-card');
    const riverSecCount = await riverSecCards.count();
    console.log(`[CHECK] 长江黄河水文节点总数: ${riverSecCount}`);
    if (riverSecCount < 6) throw new Error(`水文节点数量不足: ${riverSecCount}`);

    await page.evaluate(() => document.querySelector('#section-rivers').scrollIntoView());
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(artifactDir, 'simulation_geo_nature_rivers.png') });
    console.log('[SCREENSHOT] 保存长江与黄河水文长卷截图: simulation_geo_nature_rivers.png');

    // 3. 验证两大核心分界线
    const diffRows = page.locator('.diff-table tbody tr');
    const rowCount = await diffRows.count();
    console.log(`[CHECK] 秦岭-淮河对比表行数: ${rowCount}`);
    if (rowCount !== 10) throw new Error(`秦岭-淮河应为 10 大维度，实际为: ${rowCount}`);

    const huBanner = page.locator('.huhuanyong-banner');
    const huVisible = await huBanner.isVisible();
    console.log(`[CHECK] 胡焕庸线展台可见: ${huVisible ? '是' : '否'}`);
    if (!huVisible) throw new Error('胡焕庸线未正常展示');

    await page.evaluate(() => document.querySelector('#section-dividing').scrollIntoView());
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(artifactDir, 'simulation_geo_nature_dividing.png') });
    console.log('[SCREENSHOT] 保存秦岭淮河与胡焕庸线截图: simulation_geo_nature_dividing.png');

    // 4. 验证奇异地貌卡片与全屏灯箱
    const lfCards = page.locator('.landform-card');
    const lfCount = await lfCards.count();
    console.log(`[CHECK] 奇异地质地貌卡片数: ${lfCount}`);
    if (lfCount < 3) throw new Error(`地貌卡片数过少: ${lfCount}`);

    // 点击第一张地貌卡片触发全屏超清灯箱
    await page.evaluate(() => document.querySelector('#section-landforms').scrollIntoView());
    await page.waitForTimeout(300);
    await lfCards.first().click();
    await page.waitForTimeout(500);

    const lightbox = page.locator('#geo-lightbox-modal');
    const lbVisible = await lightbox.isVisible();
    console.log(`[CHECK] 地理全屏超清灯箱显示: ${lbVisible ? '是' : '否'}`);
    if (!lbVisible) throw new Error('灯箱未能正常弹出');

    await page.screenshot({ path: path.join(artifactDir, 'simulation_geo_nature_lightbox.png') });
    console.log('[SCREENSHOT] 保存全屏地质灯箱截图: simulation_geo_nature_lightbox.png');

    // 关闭灯箱
    const closeBtn = page.locator('#btn-close-geo-lightbox');
    await closeBtn.click();
    await page.waitForTimeout(300);

    // 5. 验证世界之最与七大洲
    const continentCards = page.locator('.continent-card');
    const continentCount = await continentCards.count();
    console.log(`[CHECK] 七大洲卡片数: ${continentCount}`);
    if (continentCount !== 7) throw new Error(`七大洲数量应为 7，实际为: ${continentCount}`);

    const oceanCards = page.locator('.ocean-card');
    const oceanCount = await oceanCards.count();
    console.log(`[CHECK] 四大洋卡片数: ${oceanCount}`);
    if (oceanCount !== 4) throw new Error(`四大洋数量应为 4，实际为: ${oceanCount}`);

    const extremeCards = page.locator('.extreme-card');
    const extremeCount = await extremeCards.count();
    console.log(`[CHECK] 地球极值卡片数: ${extremeCount}`);
    if (extremeCount < 5) throw new Error(`极值卡片数不足 5: ${extremeCount}`);

    // 检查控制台报错
    if (consoleErrors.length > 0) {
      console.error(`[ERROR] 浏览器控制台出现 ${consoleErrors.length} 个错误:`);
      consoleErrors.forEach(err => console.error('   > ', err));
      throw new Error('浏览器控制台报错校验未通过');
    } else {
      console.log('[PASS] 浏览器控制台 0 错误 (0 console errors)');
    }

    console.log('--- 华夏自然地理与世界地理专页 Playwright E2E 测试全部通过 (100% PASS) ---');
  } catch (err) {
    console.error('--- Playwright 测试失败 ---', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

run();
