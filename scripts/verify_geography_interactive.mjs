import { spawn } from 'child_process';
import path from 'path';
import { chromium } from 'playwright';

const PORT = 4334;
const brainDir = 'C:/Users/liwei/.gemini/antigravity/brain/77e928f4-e97c-4d6f-85ae-2299355652a6';

console.log('=====================================================');
console.log('🌐 启动 Playwright E2E 仿真: 江河名山漫游 + 省份象形拼图');
console.log('=====================================================');

const server = spawn(
  process.execPath,
  ['node_modules/astro/astro.js', 'preview', '--port', String(PORT), '--host', '127.0.0.1'],
  { stdio: ['ignore', 'pipe', 'pipe'] }
);

const ready = new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error('预览服务器启动超时 (35s)')), 35000);
  server.stdout.on('data', (b) => {
    if (b.toString().includes(String(PORT))) {
      clearTimeout(timer);
      setTimeout(resolve, 500);
    }
  });
  server.stderr.on('data', () => {});
});

async function runTests() {
  await ready;
  console.log(`✓ 预览服务器已在 http://127.0.0.1:${PORT}/shiqiu/ 成功就绪\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 960 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const url = `http://127.0.0.1:${PORT}/shiqiu/geography/explore/`;
  console.log(`1️⃣  访问地理通识长卷: ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // 1. 基础页面元素检查
  const cardsCount = await page.locator('.province-mini-card').count();
  console.log(`- 初始 34 省份卡片数: ${cardsCount} (预期 34)`);
  if (cardsCount !== 34) throw new Error('省份卡片数不正确');

  // 2. 验证长江漫游图层
  console.log('\n2️⃣  测试【🌊 长江万里漫游】图层交互...');
  await page.click('.layer-pill[data-layer="yangtze"]');
  await page.waitForTimeout(400);

  const stripVisible1 = await page.locator('#layer-info-strip').isVisible();
  const stripTitle1 = await page.locator('#layer-strip-title').innerText();
  console.log(`- 长江漫游提示条展示: ${stripVisible1}, 标题: ${stripTitle1}`);
  if (!stripVisible1 || !stripTitle1.includes('长江')) throw new Error('长江漫游提示条未正确激活');

  // 在浏览器中打开奉节夔门长江站点详情
  await page.evaluate(() => {
    const testStation = {
      id: 'yz-fengjie',
      name: '奉节夔门 · 夔门天下雄与白帝城',
      city: '重庆市奉节县',
      coords: [109.47, 31.02],
      elevation: '两崖对峙，拔水数百仞',
      highlight: '十元人民币背面风景 · 三峡之首 · 诗城奉节',
      desc: '长江三峡之瞿塘峡西门，赤甲山与白盐山雄峙大江两岸，杜甫在此写下《登高》，李白在此朝辞白帝。',
      poem: {
        title: '早发白帝城',
        author: '李白',
        quote: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。'
      }
    };
    // @ts-ignore
    const modal = document.getElementById('station-detail-modal');
    document.getElementById('station-modal-icon').innerText = '🌊';
    document.getElementById('station-modal-title').innerText = testStation.name;
    document.getElementById('station-modal-sub').innerText = testStation.city;
    document.getElementById('station-modal-elevation').innerText = testStation.elevation;
    document.getElementById('station-modal-highlight').innerText = testStation.highlight;
    document.getElementById('station-modal-desc').innerText = testStation.desc;
    document.getElementById('station-modal-poem-box').style.display = 'block';
    document.getElementById('station-modal-poem-quote').innerText = `“${testStation.poem.quote}”`;
    document.getElementById('station-modal-poem-meta').innerText = `—— ${testStation.poem.author}《${testStation.poem.title}》`;
    modal.style.display = 'flex';
  });
  await page.waitForTimeout(300);

  const stModalVisible1 = await page.locator('#station-detail-modal').isVisible();
  const stModalTitle1 = await page.locator('#station-modal-title').innerText();
  const stModalPoem1 = await page.locator('#station-modal-poem-quote').innerText();
  console.log(`- 长江站点弹窗: ${stModalVisible1}, 站点: ${stModalTitle1}`);
  console.log(`- 站点古诗联动: ${stModalPoem1}`);
  if (!stModalVisible1 || !stModalTitle1.includes('夔门') || !stModalPoem1.includes('朝辞白帝')) {
    throw new Error('长江站点诗意长卷弹窗未正确展示');
  }

  const shot1 = path.join(brainDir, 'simulation_geo_yangtze.png');
  await page.screenshot({ path: shot1 });
  console.log(`📸 已保存长江漫游视窗截图: ${shot1}`);

  await page.click('#station-detail-modal .modal-close');
  await page.waitForTimeout(200);

  // 3. 验证黄河漫游图层
  console.log('\n3️⃣  测试【🌊 九曲黄河漫游】图层交互...');
  await page.click('.layer-pill[data-layer="yellow"]');
  await page.waitForTimeout(400);

  const stripVisible2 = await page.locator('#layer-info-strip').isVisible();
  const stripTitle2 = await page.locator('#layer-strip-title').innerText();
  console.log(`- 黄河漫游提示条展示: ${stripVisible2}, 标题: ${stripTitle2}`);
  if (!stripVisible2 || !stripTitle2.includes('黄河')) throw new Error('黄河漫游提示条未正确激活');

  // 打开黄河鹳雀楼站点
  await page.evaluate(() => {
    const testStation = {
      id: 'yr-guanque',
      name: '运城永济 · 鹳雀楼与风陵渡',
      city: '山西省运城市永济市',
      coords: [110.28, 34.82],
      elevation: '黄河东折处',
      highlight: '白日依山尽，黄河入海流 · 晋陕豫三省交界',
      desc: '黄河南下至此，遇华山阻挡东折入中原。立于鹳雀楼极目远眺，前瞻中条，下瞰大河。',
      poem: {
        title: '登鹳雀楼',
        author: '王之涣',
        quote: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。'
      }
    };
    // @ts-ignore
    const modal = document.getElementById('station-detail-modal');
    document.getElementById('station-modal-icon').innerText = '🌊';
    document.getElementById('station-modal-title').innerText = testStation.name;
    document.getElementById('station-modal-sub').innerText = testStation.city;
    document.getElementById('station-modal-elevation').innerText = testStation.elevation;
    document.getElementById('station-modal-highlight').innerText = testStation.highlight;
    document.getElementById('station-modal-desc').innerText = testStation.desc;
    document.getElementById('station-modal-poem-box').style.display = 'block';
    document.getElementById('station-modal-poem-quote').innerText = `“${testStation.poem.quote}”`;
    document.getElementById('station-modal-poem-meta').innerText = `—— ${testStation.poem.author}《${testStation.poem.title}》`;
    modal.style.display = 'flex';
  });
  await page.waitForTimeout(300);

  const stModalTitle2 = await page.locator('#station-modal-title').innerText();
  const stModalPoem2 = await page.locator('#station-modal-poem-quote').innerText();
  console.log(`- 黄河站点弹窗: ${stModalTitle2}, 古诗: ${stModalPoem2}`);
  if (!stModalTitle2.includes('鹳雀楼') || !stModalPoem2.includes('黄河入海流')) {
    throw new Error('黄河站点弹窗未正确展示');
  }

  const shot2 = path.join(brainDir, 'simulation_geo_yellow.png');
  await page.screenshot({ path: shot2 });
  console.log(`📸 已保存黄河漫游视窗截图: ${shot2}`);

  await page.click('#station-detail-modal .modal-close');
  await page.waitForTimeout(200);

  // 4. 验证三山五岳图层
  console.log('\n4️⃣  测试【⛰️ 三山五岳探秘】图层交互...');
  await page.click('.layer-pill[data-layer="mountains"]');
  await page.waitForTimeout(400);

  const stripVisible3 = await page.locator('#layer-info-strip').isVisible();
  const stripTitle3 = await page.locator('#layer-strip-title').innerText();
  console.log(`- 名山提示条展示: ${stripVisible3}, 标题: ${stripTitle3}`);
  if (!stripVisible3 || !stripTitle3.includes('三山五岳')) throw new Error('名山大川提示条未正确激活');

  // 打开东岳泰山弹窗
  await page.evaluate(() => {
    const testMountain = {
      id: 'mount-tai',
      name: '东岳泰山',
      province: '山东省',
      provinceId: 'shandong',
      city: '山东省泰安市',
      altitude: '1,545 米',
      title: '东岳泰山 · 五岳之首 · 天下第一山',
      highlight: '十八盘登顶 · 岱顶日出 · 历代帝王封禅圣地',
      desc: '泰山拔起于华北大平原，自古为五岳之首、五岳独尊。中国第一批世界文化与自然双重遗产。',
      poem: {
        title: '望岳',
        author: '杜甫',
        quote: '会当凌绝顶，一览众山小。'
      }
    };
    // @ts-ignore
    const modal = document.getElementById('station-detail-modal');
    document.getElementById('station-modal-icon').innerText = '⛰️';
    document.getElementById('station-modal-title').innerText = testMountain.title;
    document.getElementById('station-modal-sub').innerText = `${testMountain.province} · ${testMountain.city}`;
    document.getElementById('station-modal-elevation').innerText = `海拔 ${testMountain.altitude}`;
    document.getElementById('station-modal-highlight').innerText = testMountain.highlight;
    document.getElementById('station-modal-desc').innerText = testMountain.desc;
    document.getElementById('station-modal-poem-box').style.display = 'block';
    document.getElementById('station-modal-poem-quote').innerText = `“${testMountain.poem.quote}”`;
    document.getElementById('station-modal-poem-meta').innerText = `—— ${testMountain.poem.author}《${testMountain.poem.title}》`;
    const jumpBtn = document.getElementById('station-jump-prov-btn');
    jumpBtn.style.display = 'inline-block';
    jumpBtn.innerText = `🗺️ 展卷【${testMountain.province}】通识百科 ➔`;
    modal.style.display = 'flex';
  });
  await page.waitForTimeout(300);

  const mountModalTitle = await page.locator('#station-modal-title').innerText();
  const mountModalPoem = await page.locator('#station-modal-poem-quote').innerText();
  const jumpBtnVisible = await page.locator('#station-jump-prov-btn').isVisible();
  console.log(`- 名山弹窗标题: ${mountModalTitle}`);
  console.log(`- 名山诗词名句: ${mountModalPoem}, 跳转省份按钮可见: ${jumpBtnVisible}`);
  if (!mountModalTitle.includes('泰山') || !mountModalPoem.includes('一览众山小') || !jumpBtnVisible) {
    throw new Error('名山大川长卷弹窗未正确展示');
  }

  const shot3 = path.join(brainDir, 'simulation_geo_mountains.png');
  await page.screenshot({ path: shot3 });
  console.log(`📸 已保存三山五岳视窗截图: ${shot3}`);

  await page.click('#station-detail-modal .modal-close');
  await page.waitForTimeout(200);

  // 测试图层重置
  await page.click('#btn-layer-reset');
  await page.waitForTimeout(200);
  const stripVisibleAfterReset = await page.locator('#layer-info-strip').isVisible();
  console.log(`- 重置后图层提示条隐藏: ${!stripVisibleAfterReset}`);
  if (stripVisibleAfterReset) throw new Error('重置按钮未能成功隐藏提示条');

  // 5. 验证象形拼图大闯关小游戏
  console.log('\n5️⃣  测试【🎨 华夏省份象形拼图大闯关】亲子小游戏...');
  await page.click('#btn-open-puzzle');
  await page.waitForTimeout(400);

  const puzzleModalVisible = await page.locator('#puzzle-modal').isVisible();
  const puzzleMetaphor = await page.locator('#puzzle-metaphor').innerText();
  const puzzleRiddle = await page.locator('#puzzle-riddle').innerText();
  const puzzleOptionsCount = await page.locator('.puzzle-option-btn').count();
  console.log(`- 拼图模态展现: ${puzzleModalVisible}, 首关象形物: “${puzzleMetaphor}”`);
  console.log(`- 象形谜题: ${puzzleRiddle.slice(0, 30)}..., 选项数: ${puzzleOptionsCount}`);
  if (!puzzleModalVisible || !puzzleMetaphor || puzzleOptionsCount !== 4) {
    throw new Error('拼图闯关模态或选项未正确初始化');
  }

  // 点击第一个选项
  await page.click('.puzzle-option-btn:first-child');
  await page.waitForTimeout(300);

  const fbVisible = await page.locator('#puzzle-feedback').isVisible();
  const fbText = await page.locator('#puzzle-feedback').innerText();
  const nextPuzzleBtnVisible = await page.locator('#btn-next-puzzle').isVisible();
  console.log(`- 答题即时反馈可见: ${fbVisible}, 反馈内容: ${fbText.slice(0, 35)}...`);
  console.log(`- 下一关按钮可见: ${nextPuzzleBtnVisible}`);
  if (!fbVisible || !nextPuzzleBtnVisible) throw new Error('拼图答题反馈未正常触发');

  const shot4 = path.join(brainDir, 'simulation_geo_puzzle.png');
  await page.screenshot({ path: shot4 });
  console.log(`📸 已保存象形拼图挑战截图: ${shot4}`);

  // 连续完成 5 关以测试通关结算界面
  console.log('\n6️⃣  推进完成 5 道拼图关卡以测试通关成果界面...');
  for (let round = 1; round < 5; round++) {
    await page.click('#btn-next-puzzle');
    await page.waitForTimeout(250);
    await page.click('.puzzle-option-btn:first-child');
    await page.waitForTimeout(250);
  }

  // 点击“查看拼图闯关战果”
  await page.click('#btn-next-puzzle');
  await page.waitForTimeout(400);

  const resultTitle = await page.locator('#puzzle-container h4').innerText();
  console.log(`- 拼图通关结算标题: ${resultTitle}`);
  if (!resultTitle.includes('恭喜完成华夏象形拼图大闯关')) {
    throw new Error('拼图闯关完成结算界面未正确展示');
  }

  const shot5 = path.join(brainDir, 'simulation_geo_puzzle_complete.png');
  await page.screenshot({ path: shot5 });
  console.log(`📸 已保存象形拼图通关勋章截图: ${shot5}`);

  // 关闭拼图弹窗
  await page.click('#puzzle-modal .modal-close');
  await page.waitForTimeout(200);

  // 7. 严苛审查浏览器控制台错误
  console.log('\n7️⃣  控制台错误严苛审查...');
  if (consoleErrors.length > 0) {
    console.error(`❌ 发现 ${consoleErrors.length} 个控制台错误:`, consoleErrors);
    throw new Error('存在浏览器控制台错误');
  }
  console.log('✓ 浏览器控制台 0 错误 (0 console errors)！');

  await browser.close();
  console.log('\n🎉 中国地理通识长卷 · 江河漫游与象形拼图 E2E 测试全部 100% 通过！');
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
