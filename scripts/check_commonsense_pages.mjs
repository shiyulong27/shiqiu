import { chromium } from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';

// 仅检查本次两个页面的关键操作，不运行全站 E2E 或生产构建。
const origin=process.env.SHIQIU_PREVIEW_ORIGIN || 'http://127.0.0.1:4321';
const base=`${origin}/shiqiu/`;
const dir='todos/evidence/2026-10-14-正式常识页检查';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({headless:true});
const errors=[];const checks=[];
try {
  const page=await browser.newPage({viewport:{width:1440,height:980}});
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.goto(`${base}culture/traditional/`,{waitUntil:'networkidle'});
  assert.equal(await page.locator('[data-entry]').count(),128);
  const count=()=>page.locator('[data-entry]:visible').count();
  await page.screenshot({path:`${dir}/desktop.png`});
  await page.locator('#culture-query').fill('亲戚');await page.locator('#culture-chapter').selectOption('C04');assert.equal(await count(),1);
  await page.locator('#culture-scenario').selectOption('去做客');assert.equal(await count(),1);
  await page.locator('#culture-scenario').selectOption('玩艺术');assert.equal(await count(),0);assert(await page.locator('#culture-empty').isVisible());
  await page.locator('#clear-culture-filters').click();assert.equal(await count(),128);
  await page.locator('#culture-query').fill('找不到的词');await page.locator('[data-chapter-jump="C04"]').click();assert.equal(await count(),128);
  await page.locator('#TC02-01>details').evaluate(e=>e.open=true);await page.locator('[data-turn-map-button]').click();assert.match(await page.locator('[data-turn-map-status]').innerText(),/下方.*仍在公园北面/);await page.locator('[data-turn-map-button]').click();assert.match(await page.locator('[data-turn-map-status]').innerText(),/上方/);
  checks.push('传统页128条；搜索/跨篇场景与主题取交集；空态/清空/目录定位');
  await page.locator('#open-culture-quiz').click();await page.locator('#culture-quiz-form button[type="submit"]').click();assert.match(await page.locator('#culture-quiz-result').innerText(),/8 题没有选择/);
  for(const[i,answer]of [1,2,1,2,0,2,1,0].entries())await page.locator(`input[name="culture-quiz-${i+1}"][value="${answer}"]`).check();
  await page.locator('#culture-quiz-form button[type="submit"]').click();assert.match(await page.locator('#culture-quiz-result').innerText(),/8 \/ 8/);assert.equal(await page.locator('[data-answer-for]:visible').count(),8);
  await page.locator('#retry-culture-quiz').click();assert.equal(await page.locator('#culture-quiz-form input:checked').count(),0);assert.equal(await page.locator('[data-answer-for]:visible').count(),0);
  await page.keyboard.press('Escape');assert.equal(await page.locator('#culture-quiz-dialog').evaluate(e=>e.open),false);assert.equal(await page.evaluate(()=>document.activeElement.id),'open-culture-quiz');
  checks.push('答题漏答、满分解析、重做、Esc关闭及焦点返回');
  await page.setViewportSize({width:360,height:800});await page.goto(`${base}culture/traditional/`,{waitUntil:'networkidle'});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:`${dir}/mobile.png`});
  for(const[id,name]of [['TC02-07','time'],['TC06-04','cycle'],['TC07-10','court'],['TC08-11','instruments']]){
    await page.locator(`#${id}>details`).evaluate(e=>e.open=true);await page.locator(`#${id} .culture-explainer`).scrollIntoViewIfNeeded();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:`${dir}/mobile-${name}.png`});
  }
  for(const img of await page.locator('.chapter-visual img').all()){await img.scrollIntoViewIfNeeded();await page.waitForFunction(e=>e.complete&&e.naturalWidth>0,await img.elementHandle());}
  const svgResults=await page.locator('.chapter-visual img').evaluateAll(imgs=>imgs.map(e=>({src:e.currentSrc,alt:e.alt})));
  assert(svgResults.every(r=>r.src.includes('-mobile.svg')&&r.alt));checks.push('360px正文与时辰/生克/庭院/乐器图无横向溢出；采用移动版图片');
  await page.goto(`${base}knowledge/commonsense/`,{waitUntil:'networkidle'});assert.equal(await page.locator('[data-foundation-entry]').count(),64);
  await page.locator('.cs-filter-tab[data-cat="foundations"]').click();assert(await page.locator('#foundations').isVisible());assert.equal(await page.locator('[data-section="safety"]:visible').count(),0);
  await page.locator('#foundation-search').fill('月亮');await page.locator('#foundation-domain').selectOption('C12');assert((await page.locator('[data-foundation-entry]:visible').count())>0);
  await page.locator('#foundation-domain').selectOption('C15');assert.equal(await page.locator('[data-foundation-entry]:visible').count(),0);assert(await page.locator('#foundation-empty').isVisible());
  await page.locator('#foundation-clear').click();assert.equal(await page.locator('[data-foundation-entry]:visible').count(),64);
  await page.locator('#foundation-C14').scrollIntoViewIfNeeded();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:`${dir}/mobile-foundations.png`});
  await page.locator('.cs-filter-tab[data-cat="safety"]').click();assert(await page.locator('[data-section="safety"]').isVisible());
  await page.goto(`${base}knowledge/commonsense/#CS16-08`,{waitUntil:'networkidle'});assert(await page.locator('#CS16-08').isVisible());
  checks.push('旧常识页64条、入门分类/检索/空态/清空、原安全分类、入门稳定锚点');
  await page.goto(base,{waitUntil:'networkidle'});const homeLink=page.locator('a[href="/shiqiu/culture/traditional/"]');assert((await homeLink.count())>0);await homeLink.first().click();assert(page.url().includes('/culture/traditional/'));
  for(const path of ['knowledge/commonsense/','chinese/solar-terms/','culture/tea/','astronomy/','games/chess/']){const r=await page.request.get(`${base}${path}`);assert.equal(r.status(),200,path);}
  checks.push('首页入口、两页互链和本次专题延伸链接HTTP200');
  assert.equal(errors.length,0,errors.join('\n'));
  const report={at:new Date().toISOString(),traditionalEntries:128,foundationEntries:64,checks,consoleErrors:errors,productionBuild:'未执行，按用户要求留给用户'};
  fs.writeFileSync(`${dir}/report.json`,JSON.stringify(report,null,2)+'\n','utf8');console.log(JSON.stringify(report,null,2));
}finally{await browser.close();}
