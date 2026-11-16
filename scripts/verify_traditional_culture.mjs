import assert from 'node:assert/strict';
import fs from 'node:fs';
import { traditionalChapters as chapters, traditionalEntries as entries, publishedTraditionalEntries as published, traditionalSources as sources, traditionalVisuals as visuals, traditionalQuiz as quiz } from '../src/data/traditionalCultureData.js';

const expected = Array.from({ length: 8 }, (_, c) => Array.from({ length: 16 }, (_, i) => `TC${String(c + 1).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`)).flat();
assert.equal(new Set(entries.map(e => e.id)).size, entries.length, '重复条目 ID');
assert.equal(chapters.length, 8);
for (const entry of entries) {
  assert(expected.includes(entry.id), `未知条目 ${entry.id}`);
  assert(chapters.some(c => c.id === entry.chapterId));
  for (const field of ['title', 'question', 'shortAnswer', 'scopeNote', 'example', 'claimKind', 'reviewStatus']) assert(entry[field]?.trim(), `${entry.id} 缺 ${field}`);
  assert(entry.explanation?.length && entry.compare?.length >= 2 && entry.sourceIds?.length, `${entry.id} 解释/对照/来源缺失`);
  for (const id of entry.sourceIds) {
    const source = sources.find(s => s.id === id); assert(source, `${entry.id} 来源不存在 ${id}`);
    assert(/^https:\/\//.test(source.url), `来源地址非法 ${id}`);
    if (entry.reviewStatus === 'verified') assert(source.readStatus.includes('已读'), `${entry.id} 来源未读`);
  }
  for (const id of entry.visualRefs || []) assert(visuals.some(v => v.id === id), `图解引用不存在 ${entry.id}:${id}`);
}
for (const chapter of chapters) assert(published.some(e => e.id === chapter.startEntryId), `入门条目未公开 ${chapter.id}`);
for (const visual of visuals) {
  assert(visual.alt && visual.provenance);
  if (visual.kind === 'inline-component') assert(fs.existsSync(visual.data.component), `缺少图解组件 ${visual.id}`);
  else for (const path of [visual.path, visual.mobilePath]) assert(fs.existsSync(`public/${path}`), `缺失图片 ${path}`);
}
for (const question of quiz) {
  assert(published.some(e => e.id === question.entryId));
  assert(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < question.options.length);
  assert(question.explanation);
}
const pending = expected.filter(id => !published.some(e => e.id === id));
console.log(JSON.stringify({ structure: 'passed', publicEntries: published.length, chapterCounts: Object.fromEntries(chapters.map(c => [c.id, published.filter(e => e.chapterId === c.id).length])), pendingCount: pending.length, pending, visuals: visuals.length, quiz: quiz.length }, null, 2));
if (process.argv.includes('--require-complete')) assert.equal(pending.length, 0, '冻结目录尚未全部核验完成');
