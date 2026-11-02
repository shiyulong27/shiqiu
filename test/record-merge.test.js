import { describe, expect, it } from 'vitest';
import {
  BACKUP_PREFIX, KEYS, mergeSnapshots, parseSnapshot, readSnapshot,
  writeSnapshot, snapshotFromBackup
} from '../public/exercises/record-merge-core.js';

const [recordsKey, mistakesKey] = KEYS;
const record = (id, score = 80) => ({ id, student: '乐乐', paper: '练习一', score, subject: 'math' });
const mistake = (id) => ({ id, student: '月亮', paperId: 1, qid: 'q1', timestamp: 10 });
const snapshot = (records = [], mistakes = []) => ({
  [recordsKey]: JSON.stringify(records), [mistakesKey]: JSON.stringify(mistakes)
});
function storageFor(raw, fail = () => false) {
  const values = new Map(Object.entries(raw).filter(([, value]) => value !== null));
  return {
    values,
    getItem: key => values.get(key) ?? null,
    setItem(key, value) { if (fail(key, value)) throw new Error('quota'); values.set(key, value); },
    removeItem: key => values.delete(key)
  };
}

describe('跨端口答题记录无损合并', () => {
  it('没有保存过的数据与空数组都可读取，不触碰其他存储键', () => {
    const storage = storageFor({ unrelated: 'keep' });
    expect(readSnapshot(storage)).toEqual({ [recordsKey]: null, [mistakesKey]: null });
    expect(parseSnapshot(readSnapshot(storage))[recordsKey]).toEqual([]);
    expect(mergeSnapshots(readSnapshot(storage), snapshot()).raw).toEqual(readSnapshot(storage));
    expect(storage.getItem('unrelated')).toBe('keep');
  });

  it('两端都保留，完整相同记录去重，字段顺序不影响判断', () => {
    const first = record(1);
    const reordered = Object.fromEntries(Object.entries(first).reverse());
    const merged = mergeSnapshots(snapshot([first]), snapshot([reordered, record(2)]));
    expect(parseSnapshot(merged.raw)[recordsKey]).toEqual([record(2), first]);
    expect(merged.stats[recordsKey]).toEqual({ current: 1, source: 2, merged: 2, added: 1, duplicates: 1 });
  });

  it('同一 ID 内容不同以及同试卷不同时间的尝试都保留', () => {
    const merged = mergeSnapshots(snapshot([record(1, 70)]), snapshot([record(1, 90), record(2, 70)]));
    expect(parseSnapshot(merged.raw)[recordsKey]).toHaveLength(3);
  });

  it('保留旧版本缺省年级、零分、嵌套答案、画板和未知字段', () => {
    const old = { ...record(1, 0), answers: { q1: [0, '甲'] }, drawing: 'data:image/png;base64,AA==', custom: false };
    expect(parseSnapshot(mergeSnapshots(snapshot(), snapshot([old])).raw)[recordsKey]).toEqual([old]);
  });

  it('错题本只去重完整副本，同一题的不同作答均保留，重复合并幂等', () => {
    const current = snapshot([], [mistake('a')]);
    const source = snapshot([], [mistake('a'), { ...mistake('b'), answer: '乙' }]);
    const first = mergeSnapshots(current, source);
    expect(parseSnapshot(first.raw)[mistakesKey]).toHaveLength(2);
    expect(mergeSnapshots(first.raw, source).raw).toEqual(first.raw);
  });

  it('拒绝损坏 JSON、非数组、缺少存储键或无效记录，不当作空数据', () => {
    for (const invalid of [
      { ...snapshot(), [recordsKey]: '[bad' },
      { ...snapshot(), [recordsKey]: '{}' },
      { [recordsKey]: '[]' },
      snapshot([null]), snapshot([{}]), snapshot([{ ...record(1), score: '80' }]),
      snapshot([], [{ ...mistake('a'), qid: null }])
    ]) expect(() => parseSnapshot(invalid)).toThrow();
  });

  it('写入前备份双方原始字符串，不修改来源和其他存储键', () => {
    const before = { ...snapshot([record(1)]), [mistakesKey]: null };
    const source = snapshot([record(2)], [mistake('a')]);
    const storage = storageFor({ ...before, unrelated: 'keep' });
    const next = mergeSnapshots(before, source).raw;
    const result = writeSnapshot(storage, before, next, { origin: 'http://127.0.0.1:14321', source: { origin: 'http://127.0.0.1:4321', raw: source } });
    const saved = JSON.parse(storage.getItem(result.backupKey));
    expect(result.backupKey.startsWith(BACKUP_PREFIX)).toBe(true);
    expect(saved.raw).toEqual(before);
    expect(saved.source.raw).toEqual(source);
    expect(readSnapshot(storage)).toEqual(next);
    expect(storage.getItem('unrelated')).toBe('keep');
    expect(source).toEqual(snapshot([record(2)], [mistake('a')]));
  });

  it('预览后记录变化时拒绝覆盖，连备份也不开始写', () => {
    const before = snapshot([record(1)]);
    const storage = storageFor(snapshot([record(2)]));
    expect(() => writeSnapshot(storage, before, snapshot([record(3)]))).toThrow(/变化/);
    expect(readSnapshot(storage)).toEqual(snapshot([record(2)]));
    expect([...storage.values.keys()].some(key => key.startsWith(BACKUP_PREFIX))).toBe(false);
  });

  it('备份空间不足则完全不写原数据', () => {
    const before = snapshot([record(1)]);
    const storage = storageFor(before, key => key.startsWith(BACKUP_PREFIX));
    expect(() => writeSnapshot(storage, before, snapshot([record(2)]))).toThrow(/备份/);
    expect(readSnapshot(storage)).toEqual(before);
  });

  it('第二个键写失败时恢复第一个键，包括原来不存在的键，备份仍在', () => {
    const before = { [recordsKey]: null, [mistakesKey]: '[]' };
    const storage = storageFor(before, (key, value) => key === mistakesKey && value !== '[]');
    expect(() => writeSnapshot(storage, before, snapshot([record(2)], [mistake('a')]))).toThrow(/已恢复/);
    expect(readSnapshot(storage)).toEqual(before);
    expect([...storage.values.keys()].filter(key => key.startsWith(BACKUP_PREFIX))).toHaveLength(1);
  });

  it('备份可恢复原状，恢复前也保留当前数据副本', () => {
    const before = snapshot([record(1)]);
    const next = snapshot([record(1), record(2)]);
    const storage = storageFor(before);
    const first = writeSnapshot(storage, before, next);
    const backup = JSON.parse(storage.getItem(first.backupKey));
    const restore = writeSnapshot(storage, next, backup.raw);
    expect(readSnapshot(storage)).toEqual(before);
    expect(JSON.parse(storage.getItem(restore.backupKey)).raw).toEqual(next);
  });

  it('回滚也失败时明确报错，并保留可恢复的原始备份', () => {
    const before = snapshot([record(1)]);
    const next = snapshot([record(2)], [mistake('a')]);
    let wroteRecords = false;
    const storage = storageFor(before, (key, value) => {
      if (key === recordsKey && value === next[recordsKey]) { wroteRecords = true; return false; }
      return (key === mistakesKey && value === next[mistakesKey])
        || (key === recordsKey && value === before[recordsKey] && wroteRecords);
    });
    expect(() => writeSnapshot(storage, before, next)).toThrow(/部分恢复失败/);
    const key = [...storage.values.keys()].find(key => key.startsWith(BACKUP_PREFIX));
    expect(JSON.parse(storage.getItem(key)).raw).toEqual(before);
  });

  it('只导入本工具的正确版本备份，并可从合并前备份取回双方记录', () => {
    const backup = { format: 'shiqiu-quiz-backup', version: 1, raw: snapshot([record(1)]), source: { raw: snapshot([record(2)]) } };
    expect(parseSnapshot(snapshotFromBackup(backup))[recordsKey]).toHaveLength(2);
    expect(() => snapshotFromBackup({ ...backup, version: 2 })).toThrow();
    expect(() => snapshotFromBackup({ format: 'unknown', version: 1, raw: snapshot() })).toThrow();
  });
});
