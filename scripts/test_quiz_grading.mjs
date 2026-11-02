import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { test } from 'node:test';

const context = { window: {} };
vm.runInNewContext(fs.readFileSync('public/exercises/math_data.js', 'utf8'), context);
const paper = context.window.MATH_DATABASE.find(p => p.id === 21);
const gradingPath = 'public/exercises/quiz_grading.js';
if (fs.existsSync(gradingPath)) vm.runInNewContext(fs.readFileSync(gradingPath, 'utf8'), context);
const engine = context.window.QUIZ_GRADING;

test('papers 22–40 use objective questions worth 100 with unique choices', () => {
  for (const p of context.window.MATH_DATABASE.filter(p => p.id >= 22)) {
    assert.equal(p.sections.length, 8);
    assert.equal(p.sections.reduce((n, s) => n + s.score, 0), 100);
    assert.ok(p.sections.every(s => s.type !== 'poem'), `第${p.id}套仍有自评加分`);
    const ids = new Set();
    for (const s of p.sections) for (const i of s.items || []) {
      assert.ok(!ids.has(i.qid), i.qid);
      ids.add(i.qid);
      assert.equal(i.options.filter(o => o.correct).length, 1, i.qid);
      assert.equal(new Set(i.options.map(o => o.text)).size, i.options.length, i.qid);
      assert.ok(i.visual, `${i.qid}缺图示`);
      assert.doesNotMatch(i.visual, /最大✔|最小✔|➡️.*得|易错提醒|【\d+】|共\d+个数/);
    }
    assert.equal(ids.size, 26);
  }
});

test('indistinguishable matching answers can be swapped without losing points', () => {
  const p = context.window.MATH_DATABASE.find(p => p.id === 26);
  const s = p.sections[0];
  const same = s.pairs.filter(pair => pair.char === s.pairs[0].char);
  assert.ok(same.length >= 2);
  const matches = Object.fromEntries(same.map((pair, i) => [pair.target, same[(i + 1) % same.length].answer]));
  const results = engine.grade(p, {}, matches).results.filter(r => same.some(pair => r.qid === 'match_' + pair.target));
  assert.ok(results.every(r => r.isCorrect));
});

test('matching cards with different visible pronunciation remain distinct', () => {
  const p = { sections: [{ type: 'matching', title: '多音字', score: 100, pairs: [
    { target: 'a', answer: 'aa', label: '银行', char: '行', pinyin: 'háng' },
    { target: 'b', answer: 'bb', label: '行走', char: '行', pinyin: 'xíng' }
  ] }] };
  const result = engine.grade(p, {}, { a: 'bb', b: 'aa' });
  assert.equal(result.score, 0);
  assert.equal(result.wrong, 2);
});

test('verified math corrections reject the original wrong answers', () => {
  const get = qid => context.window.MATH_DATABASE.flatMap(p => p.sections.flatMap(s => s.items || [])).find(i => i.qid === qid);
  assert.equal(get('M33-3-2').options.find(o => o.correct).text, '30');
  assert.doesNotMatch(get('M36-6-1').prompt, /1\s*-\s*7\s*=\s*6/);
  assert.equal(get('M39-4-2').options.find(o => o.correct).text, '最少 8 个');
  assert.ok(get('M31-5-2').prompt.includes('不包括正方体'));
  assert.ok(get('M39-5-2').prompt.includes('钟面上的时针'));
  assert.ok(get('M34-5-1').options.filter(o => !o.correct).every(o => o.text !== '1 个十和 10 个一'));
});

test('all 19 repaired papers equal their generator sources', async () => {
  for (const [file, name] of [
    ['p21_p25', 'papers21to25'], ['p26_p30', 'papers26to30'],
    ['p31_p35', 'papers31to35'], ['p36_p40', 'papers36to40']
  ]) {
    const source = (await import(`./advanced_math_papers_${file}.mjs`))[name];
    for (const p of source.filter(p => p.id >= 22)) {
      assert.equal(JSON.stringify(p), JSON.stringify(context.window.MATH_DATABASE.find(item => item.id === p.id)), `第${p.id}套源不同`);
    }
  }
});

test('numeric comparison answers agree with independently evaluated expressions', () => {
  const sum = expression => (expression.replace(/\s/g, '').match(/[+-]?\d+/g) || []).reduce((n, term) => n + Number(term), 0);
  let checked = 0;
  for (const p of context.window.MATH_DATABASE.filter(p => p.id >= 22)) {
    for (const i of p.sections[1].items) {
      const match = i.prompt.match(/^([\d\s+\-]+)○([\d\s+\-]+)，/);
      if (!match) continue;
      const left = sum(match[1]), right = sum(match[2]);
      assert.equal(i.options.find(o => o.correct).text, left === right ? '=' : left > right ? '>' : '<', i.qid);
      checked++;
    }
  }
  assert.ok(checked >= 30, `只检查了${checked}道纯数值比较题`);
});

test('equation blanks and integer extrema have the stated unique solutions', () => {
  const all = context.window.MATH_DATABASE.flatMap(p => p.sections.flatMap(s => s.items || []));
  const checks = {
    'M26-3-1': n => n < 3, 'M26-3-2': n => 2 + n < 5,
    'M26-3-3': n => 5 - n > 2, 'M31-6-3': n => 10 - n > 6,
    'M34-6-1': n => 12 + n < 17, 'M34-6-2': n => 18 - n > 13,
    'M37-5-1': n => 9 + n < 15, 'M37-5-2': n => 8 + n < 14
  };
  for (const [id, valid] of Object.entries(checks)) {
    const possible = Array.from({ length: 21 }, (_, n) => n).filter(valid);
    assert.equal(Number(all.find(i => i.qid === id).options.find(o => o.correct).text), Math.max(...possible), id);
  }
  for (const [id, valid] of Object.entries({
    'M25-6-1': n => 5 - n === 2, 'M25-6-2': n => n + 3 === 5,
    'M29-6-1': n => 10 - n === 4, 'M29-6-2': n => n + 5 === 9,
    'M30-6-4': n => 10 - n - 2 === 5, 'M33-6-4': n => 13 + n === 17,
    'M34-4-1': n => 14 + n === 19, 'M34-4-2': n => 18 - n === 12,
    'M37-4-1': n => 9 + n === 16, 'M37-4-2': n => n + 8 === 15,
    'M37-4-3': n => 7 + n === 14, 'M37-4-4': n => 6 + n === 12,
    'M38-6-1': n => 9 + n === 8 + 6, 'M38-6-2': n => 7 + 8 === n + 6,
    'M38-6-3': n => 8 + 7 === 9 + n
  })) {
    const possible = Array.from({ length: 21 }, (_, n) => n).filter(valid);
    assert.equal(possible.length, 1, id);
    assert.equal(Number(all.find(i => i.qid === id).options.find(o => o.correct).text), possible[0], id);
  }
});

test('data diagrams match stated units, counts and direction reference', () => {
  const get = id => context.window.MATH_DATABASE.flatMap(p => p.sections.flatMap(s => s.items || [])).find(i => i.qid === id);
  assert.doesNotMatch(get('M22-5-3').visual, /厘米/);
  assert.match(get('M22-3-4').prompt, /大石头.*1号杯/);
  assert.match(get('M22-3-4').visual, /1号杯/);
  assert.match(get('M24-5-2').visual, /x="120"[^>]*>月亮/);
  assert.equal((get('M29-3-1').visual.match(/🌸/g) || []).length, 9);
  assert.equal((get('M33-3-2').visual.match(/<span>⚪<\/span>/g) || []).length, 3);
  assert.doesNotMatch(get('M29-3-4').prompt, /一图四式/);
  assert.deepEqual(Array.from(get('M30-5-1').options, o => o.text), ['3+2', '2+4']);
  assert.equal(get('M28-7-2').options.find(o => o.correct).text, '6 个');
});

test('legacy visual injection cannot restore solved diagrams', () => {
  for (const [group, lo, hi] of [['p26_p30', 26, 30], ['p31_p35', 31, 35], ['p36_p40', 36, 40]]) {
    const text = fs.readFileSync(`scripts/inject_visuals_${group}.mjs`, 'utf8');
    const objectText = text.match(/const visuals = ([\s\S]*?);\s*for \(const paper/)[1];
    const visuals = vm.runInNewContext('(' + objectText + ')');
    for (const p of context.window.MATH_DATABASE.filter(p => p.id >= lo && p.id <= hi)) {
      for (const s of p.sections) for (const i of s.items || []) assert.equal(visuals[i.qid], i.visual, i.qid);
    }
  }
});

test('half-hour clock hour hand is between the two hour marks', () => {
  const items = context.window.MATH_DATABASE.flatMap(p => p.sections.flatMap(s => s.items || []));
  for (const [id, hour] of [['M36-3-1', 8], ['M36-3-2', 12], ['M36-6-3', 9], ['M39-5-1', 6]]) {
    const visual = items.find(i => i.qid === id).visual;
    const tag = visual.match(/<line[^>]*style="stroke-width:5"[^>]*>/)[0];
    const x = Number(tag.match(/x2="([^"]+)"/)[1]), y = Number(tag.match(/y2="([^"]+)"/)[1]);
    const angle = (Math.atan2(x - 210, 98 - y) * 180 / Math.PI + 360) % 360;
    assert.ok(Math.abs(angle - (hour % 12 * 30 + 15)) < 0.001, id);
  }
});

test('empty paper submission has zero points and counts every unanswered question', () => {
  assert.ok(engine, '需要交卷统一评分模块');
  const result = engine.grade(paper, {}, {});
  assert.equal(result.score, 0);
  assert.equal(result.unanswered, 32);
  assert.equal(result.wrong, 0);
});

test('all correct answers give exactly 100 and readable matching answers', () => {
  assert.ok(engine);
  const answers = {}, matches = {};
  for (const section of paper.sections) {
    for (const item of section.items || []) answers[item.qid] = item.options.findIndex(o => o.correct);
    for (const pair of section.pairs || []) matches[pair.target] = pair.answer;
  }
  const result = engine.grade(paper, answers, matches);
  assert.equal(result.score, 100);
  assert.equal(result.unanswered, 0);
  assert.equal(result.wrong, 0);
  assert.equal(result.results[0].correctAnswer, '8 根');
});

test('replacing a wrong selection changes grading and does not accumulate points', () => {
  assert.ok(engine);
  const item = paper.sections[1].items[0];
  const answers = { [item.qid]: item.options.findIndex(o => !o.correct) };
  const matches = { 'm21-1': 'ma21-2' };
  let result = engine.grade(paper, answers, matches);
  assert.equal(result.score, 0);
  assert.equal(result.wrong, 2);
  assert.equal(result.results[0].userAnswer, '9 个');
  answers[item.qid] = item.options.findIndex(o => o.correct);
  matches['m21-1'] = 'ma21-1';
  result = engine.grade(paper, answers, matches);
  assert.equal(result.score, 4);
  assert.equal(result.wrong, 0);
  assert.equal(engine.grade(paper, answers, matches).score, 4);
});

test('shuffle changes answer positions without mutating source options', () => {
  assert.ok(engine);
  const options = paper.sections[1].items[0].options;
  const before = JSON.stringify(options);
  const orders = new Set(Array.from({ length: 30 }, () => engine.shuffle(options, () => 0).map(o => o.text).join('|')));
  assert.ok(!orders.has(options.map(o => o.text).join('|')));
  assert.equal(JSON.stringify(options), before);
});

test('paper 21 has no self-awarded section and no solution hints in its diagrams', () => {
  assert.equal(paper.sections.reduce((sum, s) => sum + s.score, 0), 100);
  assert.ok(paper.sections.every(s => s.type !== 'poem'), '自评按钮不应计入数学试卷分数');
  for (const s of paper.sections) for (const i of s.items || []) {
    assert.equal(i.options.filter(o => o.correct).length, 1);
    assert.doesNotMatch(i.visual || '', /跨3格|跨5格|黄色高亮|绿色高亮|易错提醒|3双=3人|3双=6根|4双=8根/);
  }
});

test('paper generator produces exactly the same paper 21 as the served bank', async () => {
  const { papers21to25 } = await import('./advanced_math_papers_p21_p25.mjs');
  assert.equal(JSON.stringify(papers21to25[0]), JSON.stringify(paper));
});

test('shared grading preserves full marks and unanswered counts for every existing paper', () => {
  for (const file of fs.readdirSync('public/exercises').filter(f => /_data.*\.js$/.test(f))) {
    const bankContext = { window: {} };
    vm.runInNewContext(fs.readFileSync('public/exercises/' + file, 'utf8'), bankContext);
    for (const bank of Object.values(bankContext.window).filter(Array.isArray)) for (const p of bank) {
      const answers = {}, matches = {}, acknowledgements = {};
      p.sections.forEach((s, k) => {
        (s.items || []).forEach(i => answers[i.qid] = i.options.findIndex(o => o.correct));
        (s.pairs || []).forEach(pair => matches[pair.target] = pair.answer);
        (s.buttons || []).forEach((_, j) => acknowledgements[`poem-${k}-${j}`] = true);
      });
      const full = engine.grade(p, answers, matches, acknowledgements);
      assert.equal(full.score, 100, `${file}: ${p.title}`);
      assert.equal(full.unanswered, 0, `${file}: ${p.title}`);
      const empty = engine.grade(p, {}, {});
      assert.equal(empty.score, 0);
      assert.equal(empty.unanswered, empty.results.length);
    }
  }
});
