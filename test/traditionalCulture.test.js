import { describe, it, expect } from 'vitest';
import { gradeCultureQuiz, matchesCultureEntry } from '../src/utils/traditionalCulture.js';
import { traditionalQuiz, publishedTraditionalEntries, traditionalSources } from '../src/data/traditionalCultureData.js';
import { commonSenseData } from '../src/data/commonSenseData.js';
import { foundationDomains, foundationEntries, foundationSources } from '../src/data/commonSenseFoundationsData.js';

describe('传统文化阅读与答题', () => {
  it('搜索支持别名、多个词，并与主题和场景取交集', () => {
    const entry = publishedTraditionalEntries.find(e => e.id === 'TC04-05');
    expect(matchesCultureEntry(entry, { query: ' 亲戚 堂 ', chapter: 'C04', scenario: '认亲戚' })).toBe(true);
    expect(matchesCultureEntry(entry, { query: '亲戚', chapter: 'C01' })).toBe(false);
    expect(matchesCultureEntry(entry, { query: '亲戚', scenario: '玩艺术' })).toBe(false);
    expect(matchesCultureEntry(entry, { query: '亲戚', scenario: '去做客' })).toBe(true);
    expect(matchesCultureEntry(entry, { query: '不存在的词' })).toBe(false);
  });
  it('漏答、越界和字符串不能被当作正确完成', () => {
    for (const answers of [{}, { [traditionalQuiz[0].id]: -1 }, { [traditionalQuiz[0].id]: '1' }]) {
      const grade = gradeCultureQuiz(traditionalQuiz, answers);
      expect(grade.complete).toBe(false);
      expect(grade.score).toBe(null);
    }
  });
  it('完整作答可得满分，也正确处理零分和重做后的空答案', () => {
    expect(gradeCultureQuiz(traditionalQuiz, Object.fromEntries(traditionalQuiz.map(q => [q.id, q.answerIndex]))).score).toBe(8);
    expect(gradeCultureQuiz(traditionalQuiz, Object.fromEntries(traditionalQuiz.map(q => [q.id, (q.answerIndex + 1) % q.options.length]))).score).toBe(0);
    expect(gradeCultureQuiz(traditionalQuiz, {}).missing).toHaveLength(8);
  });
  it('公开条目来源存在且不是只找到链接或访问失败', () => {
    for (const entry of publishedTraditionalEntries) for (const id of entry.sourceIds) {
      const source = traditionalSources.find(s => s.id === id);
      expect(source, `${entry.id}: ${id}`).toBeDefined();
      expect(source.readStatus).toMatch(/已读/);
    }
  });
});

describe('旧常识高优先修正回归', () => {
  it('统计与实际数据一致', () => {
    const { stats } = commonSenseData.meta;
    expect(stats.safetyRules).toBe(commonSenseData.safetyTopics.length);
    expect(stats.signCount).toBe(commonSenseData.publicSigns.length);
    expect(stats.trashCategories).toBe(commonSenseData.trashClassification.length);
    expect(stats.healthTips).toBe(commonSenseData.healthHabits.length);
    expect(stats.quizCount).toBe(commonSenseData.quiz.length);
  });
  it('不恢复已撤下的无依据数字、儿童危险操作和健康保证', () => {
    const data = JSON.stringify(commonSenseData);
    for (const phrase of ['过滤60%', '黄金十二秒', '30-50厘米', '每天300ml以上', '胶带粘起', '彻底用尽排空', '国际黄金护眼', '能将手部各个角落的细菌病毒彻底消灭']) expect(data).not.toContain(phrase);
    expect(commonSenseData.safetyTopics[0].points.join('')).toContain('不能过滤一氧化碳');
    expect(commonSenseData.safetyTopics.find(t => t.id === 'anti-drowning').points.join('')).toContain('留在安全位置');
    expect(commonSenseData.publicSigns.find(t => t.id === 'sign-no-entry').name).toBe('禁止驶入');
    expect(commonSenseData.quiz.find(t => t.id === 'q5').question).toContain('上海2024年');
  });
});

describe('现代常识入门', () => {
  it('八域各有八个可回查问题，不用专题链接冒充正文', () => {
    expect(foundationEntries).toHaveLength(64);
    expect(new Set(foundationEntries.map(e=>e.id)).size).toBe(64);
    for(const domain of foundationDomains)expect(foundationEntries.filter(e=>e.domainId===domain.id)).toHaveLength(8);
    for(const entry of foundationEntries){expect(entry.explanation.length).toBeGreaterThan(20);expect(entry.compare.length).toBeGreaterThanOrEqual(2);for(const id of entry.sourceIds)expect(foundationSources.some(s=>s.id===id)).toBe(true);}
  });
});
