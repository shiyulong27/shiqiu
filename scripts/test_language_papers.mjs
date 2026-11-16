import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { repairChinese, repairEnglish } from './repair_g1s1_language_papers.mjs';

const context={window:{}};
for(const name of ['quiz_data.js','english_data.js','quiz_grading.js'])vm.runInNewContext(fs.readFileSync(`public/exercises/${name}`,'utf8'),context);
const {QUIZ_DATABASE: chinese, ENGLISH_DATABASE: english, QUIZ_GRADING: engine}=context.window;
const items=p=>p.sections.flatMap(s=>s.items||[]);

test('all 46 language papers have real objective questions and exactly 100 points',()=>{
  assert.equal(chinese.length,30);assert.equal(english.length,16);
  for(const p of [...chinese,...english]){
    assert.equal(p.sections.reduce((n,s)=>n+s.score,0),100);
    assert.ok(p.sections.every(s=>['choice','matching'].includes(s.type)));
    const ids=items(p).map(q=>q.qid);assert.equal(new Set(ids).size,ids.length);
    assert.doesNotMatch(JSON.stringify(p),/正确选项|干扰项|正确字|形近错别字|课文原版词|口语生造词|能变成的新字|不存在的错字|词语 [A-F]|景物 [A-F]/);
    for(const q of items(p)){
      assert.ok(q.prompt||q.ancient,q.qid);assert.ok(q.tip,q.qid);
      assert.equal(q.options.filter(o=>o.correct).length,1,q.qid);
      assert.equal(new Set(q.options.map(o=>o.text)).size,q.options.length,q.qid);
      assert.doesNotMatch(q.prompt||'',/本套第|这个生字|下面三个音节/);
    }
  }
});

test('every language paper gives 0 for empty or all wrong and 100 for all correct',()=>{
  for(const p of [...chinese,...english]){
    const answers={},wrong={},matches={},badMatches={};
    for(const q of items(p)){answers[q.qid]=q.options.findIndex(o=>o.correct);wrong[q.qid]=q.options.findIndex(o=>!o.correct);}
    for(const s of p.sections.filter(s=>s.type==='matching'))s.pairs.forEach((pair,i)=>{matches[pair.target]=pair.answer;badMatches[pair.target]=s.pairs[(i+1)%s.pairs.length].answer;});
    const empty=engine.grade(p,{},{});assert.equal(empty.score,0);assert.equal(empty.unanswered,items(p).length+6);
    assert.equal(engine.grade(p,answers,matches).score,100);
    assert.equal(engine.grade(p,wrong,badMatches).score,0);
    const first=items(p)[0];answers[first.qid]=wrong[first.qid];assert.ok(engine.grade(p,answers,matches).score<100);
  }
});

test('matching clues do not repeat the answer and retained pronunciations are accurate',()=>{
  for(const p of [...chinese,...english]){
    const s=p.sections[0];assert.equal(s.hidePinyin,true);
    assert.equal(new Set(s.pairs.map(x=>x.char)).size,6);
    assert.equal([...s.shuffledAnswers].sort().join(),Array.from(s.pairs,x=>x.answer).sort().join());
    for(const x of s.pairs)if(!s.hideLabels)assert.ok(!x.label.includes(x.char),`${p.id}: ${x.label} reveals ${x.char}`);
  }
  const expected={明:'míng',月:'yuè',林:'lín',森:'sēn',尖:'jiān',从:'cóng',鸟:'niǎo',猫:'māo',狗:'gǒu',鱼:'yú',兔:'tù',马:'mǎ'};
  for(const p of chinese.filter(p=>p.id>=7))for(const pair of p.sections[0].pairs)if(expected[pair.char])assert.equal(pair.pinyin,expected[pair.char]);
});

test('English classification tests English and includes every named candidate',()=>{
  for(const p of english){
    assert.doesNotMatch(JSON.stringify(p),/Listen|🧼|英语儿歌大声唱/);
    for(const q of p.sections[4].items){assert.equal(q.options.length,3);assert.doesNotMatch(q.prompt,/[（）]|[ABC]\./);for(const o of q.options)assert.ok(q.prompt.includes(o.text));}
    const eraser=p.sections[0].pairs.find(x=>x.char==='eraser');if(eraser)assert.match(eraser.visual,/<svg/);
    assert.equal(p.sections[3].items[2].options.find(o=>o.correct).text,"It's a book.");
    assert.match(p.sections[3].items[2].prompt,/一本书/);
  }
});

test('known Chinese ambiguities, false graphics and explicit answer hints stay repaired',()=>{
  const get=id=>chinese.flatMap(items).find(q=>q.qid===id);
  assert.match(get('P2-6-2').prompt,/反义词/);
  assert.match(get('P2-4-2').prompt,/上方加一撇/);
  assert.match(get('Q3-3').tip,/加一竖是“田”/);
  assert.equal(get('P3-2-3').options.find(o=>o.correct).text,'异（yì）');
  assert.match(chinese[3].sections[0].pairs[5].label,/“兔”/);
  for(const p of chinese)for(const q of items(p))assert.doesNotMatch(q.options.map(o=>o.text).join(),/hèng|（正确）|（错误）/);
  assert.doesNotMatch(JSON.stringify(chinese[0]),/甲骨|古字/);
  for(const q of chinese[1].sections[1].items)assert.match(q.visual,/<svg/);
  assert.ok(chinese[23].sections.flatMap(s=>s.items||[]).filter(q=>/看图/.test(q.prompt)).every(q=>/📖|🌧️/.test(q.prompt)));
});

test('repair is repeatable and rendering controls are scoped to individual sections',()=>{
  assert.equal(JSON.stringify(repairChinese(chinese)),JSON.stringify(chinese));
  assert.equal(JSON.stringify(repairEnglish(english)),JSON.stringify(english));
  const html=fs.readFileSync('public/exercises/quiz.html','utf8');assert.match(html,/sec\.hidePinyin \? ''/);assert.match(html,/p\.visual \|\| p\.emoji/);
});
