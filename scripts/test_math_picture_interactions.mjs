import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {test} from 'node:test';

const context = {window:{}};
for (const file of ['quiz_data.js','math_data.js','original_papers.js','quiz_grading.js','original_paper_interactions.js','original_paper_ui.js']) {
  vm.runInNewContext(fs.readFileSync('public/exercises/'+file,'utf8'),context);
}
const mapping = context.window.ORIGINAL_PAPER_INTERACTIONS;
const questions = context.window.ORIGINAL_PAPERS.math.flatMap(p=>p.sections.flatMap(s=>s.items));

test('on-picture circles and marks retain question IDs, answer values and scoring',()=>{
  assert.equal(Object.keys(mapping).length,22);
  for (const [qid,config] of Object.entries(mapping)) {
    const q=questions.find(q=>q.qid===qid);assert.ok(q,qid);
    assert.ok(/^original-math-(41|42|43)-/.test(qid));
    assert.ok(fs.existsSync('public/exercises/'+config.image));
    assert.equal(config.crop.length,4);
    for(const t of config.targets) {
      assert.ok(t.x>=0&&t.y>=0&&t.w>0&&t.h>0&&t.x+t.w<=100&&t.y+t.h<=100,qid);
    }
    const correct=String(q.answers[0]).split(' ');
    for(const value of correct)assert.ok(config.targets.some(t=>t.value===value),`${qid}: ${value}`);
    assert.equal(context.window.QUIZ_GRADING.gradeResponse(q,{[qid]:q.answers[0]}).isCorrect,true);
    const html=context.window.ORIGINAL_PAPER_UI.render({title:q.title,items:[q]});
    assert.match(html,/data-picture-answer/);
    assert.ok(!html.includes('data-response-input='),qid);
  }
});

test('whole-source duplicate pictures are removed from mapped sections',()=>{
  for(const p of context.window.ORIGINAL_PAPERS.math)for(const s of p.sections) {
    const html=context.window.ORIGINAL_PAPER_UI.render(s);
    for(const q of s.items)if(mapping[q.qid])assert.ok(!html.includes(`src="${mapping[q.qid].image}"`),q.qid);
  }
});

test('drawing tasks in these three papers have the image canvas without a text box',()=>{
  for(const q of questions.filter(q=>q.drawing)) {
    const html=context.window.ORIGINAL_PAPER_UI.render({title:q.title,items:[q]});
    assert.match(html,/data-drawing=/);
    assert.ok(!html.includes('<textarea'),q.qid);
  }
  const q=context.window.ORIGINAL_PAPERS.chinese[0].sections[0].items[0];
  assert.match(context.window.ORIGINAL_PAPER_UI.render({items:[q]}),/<textarea/);
});
