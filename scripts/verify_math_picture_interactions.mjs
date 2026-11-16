import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';

const root=path.resolve('public/exercises');
const evidence='todos/evidence/2026-10-15-math-picture-interaction';
fs.mkdirSync(evidence,{recursive:true});
const server=http.createServer((req,res)=>{
  const file=path.resolve(root,'.'+new URL(req.url,'http://localhost').pathname);
  if(!file.startsWith(root+path.sep)||!fs.existsSync(file)){res.writeHead(404);res.end();return;}
  const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg'};
  res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
let browser;
const checks=[];
try {
  browser=await chromium.launch({headless:true});
  const context=await browser.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true});
  const page=await context.newPage();const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  // Keep the page's actual stylesheet runtime; unrelated external requests are blocked.
  await page.route('https://**/*',route=>route.request().url().endsWith('/tailwindcss.min.js')?route.continue():route.abort());
  page.setDefaultTimeout(10000);
  const base=`http://127.0.0.1:${server.address().port}`;
  for(const id of [41,42,43]) {
    await page.goto(`${base}/quiz.html?subject=math&paper=${id}`);
    const cases=await page.evaluate(()=>currentPaper.sections.flatMap(s=>s.items).filter(q=>window.ORIGINAL_PAPER_INTERACTIONS[q.qid]).map(q=>({qid:q.qid,answer:q.answers[0]})));
    for(const q of cases) {
      const group=page.locator(`[data-picture-answer="${q.qid}"]`);
      assert.equal(await page.locator(`[data-response-qid="${q.qid}"] [data-response-input]`).count(),0);
      const buttons=group.locator('button');const first=buttons.first();
      await first.tap();assert.equal(await first.getAttribute('aria-pressed'),'true');
      await first.tap();assert.equal(await first.getAttribute('aria-pressed'),'false');
      assert.equal(await page.evaluate(qid=>selectedAnswers[qid],q.qid),undefined);
      if(await first.getAttribute('data-multiple')==='false') {
        await first.tap();await buttons.nth(1).tap();
        assert.equal(await first.getAttribute('aria-pressed'),'false');
        await buttons.nth(1).tap();
      }
      for(const value of String(q.answer).split(' '))await group.locator(`button[data-value="${value}"]`).tap();
      const grade=await page.evaluate(qid=>{
        const q=currentPaper.sections.flatMap(s=>s.items).find(q=>q.qid===qid);
        return window.QUIZ_GRADING.gradeResponse(q,selectedAnswers);
      },q.qid);
      assert.equal(grade.isCorrect,true,q.qid);
      const rect=await group.boundingBox();assert.ok(rect.x>=0&&rect.x+rect.width<=392,q.qid);
    }
    for(const qid of ['original-math-42-5-3','original-math-43-4-16-3']) {
      const region=page.locator(`[data-response-qid="${qid}"]`);
      if(await region.count())await region.screenshot({path:`${evidence}/${qid}-mobile.png`});
    }
    const drawing=page.locator('canvas[data-drawing]').first();
    if(await drawing.count()) {
      const qid=await drawing.getAttribute('data-drawing');
      await drawing.scrollIntoViewIfNeeded();
      await page.waitForFunction(qid=>{
        const c=document.querySelector(`[data-drawing="${qid}"]`);
        return !c.dataset.image||c.height!==220;
      },qid,{timeout:5000});
      // A tap creates an actual pointer stroke; the saved PNG participates in review.
      await drawing.tap();
      if(id===43)await drawing.screenshot({path:evidence+'/math-43-drawing-mobile.png'});
      assert.ok(await page.evaluate(qid=>selectedAnswers['drawing:'+qid]?.startsWith('data:image/png'),qid));
      await page.locator(`[data-clear-drawing="${qid}"]`).click();
      assert.equal(await page.evaluate(qid=>selectedAnswers['drawing:'+qid],qid),undefined);
      await drawing.tap();
      await page.evaluate(()=>submitExam());
      await page.waitForSelector('#original-review-modal');
      const review=page.locator('[data-review]').first();await review.fill(await review.getAttribute('max'));
      await page.getByRole('button',{name:'确认评分并交卷'}).click();
    } else await page.evaluate(()=>submitExam());
    await page.waitForSelector('#result-modal:not(.hidden)');
    for(const q of cases)assert.ok(await page.locator(`[data-picture-qid="${q.qid}"]`).first().isDisabled());
    await page.evaluate(()=>closeModal());
    const region=page.locator(`[data-response-qid="${cases[0].qid}"]`);
    await region.screenshot({path:`${evidence}/math-${id}-mobile.png`});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2),false);
    checks.push(`Math ${id}: ${cases.length} picture questions; touch select/cancel/change, correct scoring, drawing/clear/review, submission locking and 390px width passed.`);
    console.log(checks.at(-1));
  }
  await page.setViewportSize({width:1280,height:900});
  await page.goto(base+'/quiz.html?subject=math&paper=42');
  await page.locator('[data-picture-qid="original-math-42-1-1"][data-value="3"]').click();
  const keyboard=page.locator('[data-picture-qid="original-math-42-1-1"][data-value="5"]');
  await keyboard.focus();await page.keyboard.press('Enter');
  assert.equal(await keyboard.getAttribute('aria-pressed'),'true');
  await page.locator('[data-picture-qid="original-math-42-1-1"][data-value="3"]').click();
  await page.locator('[data-response-qid="original-math-42-1-1"]').screenshot({path:evidence+'/math-42-desktop.png'});
  await page.emulateMedia({media:'print'});
  assert.ok(await page.locator('[data-picture-qid="original-math-42-1-1"][data-value="3"]').isVisible());
  const unchanged=fs.readFileSync(evidence+'/original_papers.js');
  assert.deepEqual(fs.readFileSync(root+'/original_papers.js'),unchanged);
  assert.deepEqual(errors,[]);
  checks.push('Desktop and print circle visible; source dataset bytes unchanged; no JavaScript errors.');
  fs.writeFileSync(evidence+'/browser-report.json',JSON.stringify({checkedOn:new Date().toISOString(),checks},null,2)+'\n');
  console.log(checks.at(-1));
} finally {
  if(browser)await browser.close();
  await new Promise(resolve=>server.close(resolve));
}
