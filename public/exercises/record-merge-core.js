export const KEYS = ['shiqiu_grade1_quiz_records', 'shiqiu_mistake_vault'];
export const BACKUP_PREFIX = 'shiqiu_quiz_merge_backup_';

export function readSnapshot(storage) {
  return Object.fromEntries(KEYS.map(key => [key, storage.getItem(key)]));
}

export function parseSnapshot(raw) {
  if (!raw || typeof raw !== 'object') throw new Error('缺少答题数据。');
  return Object.fromEntries(KEYS.map((key, index) => {
    if (!Object.hasOwn(raw, key) || (raw[key] !== null && typeof raw[key] !== 'string')) {
      throw new Error(`数据格式不正确：${key}`);
    }
    let items;
    try { items = raw[key] === null ? [] : JSON.parse(raw[key]); }
    catch { throw new Error(`记录无法解析，请先保留原始数据：${key}`); }
    if (!Array.isArray(items)) throw new Error(`记录必须是数组：${key}`);
    for (const item of items) {
      if (!item || typeof item !== 'object' || Array.isArray(item)
        || !['string', 'number'].includes(typeof item.id) || !String(item.id).trim()
        || typeof item.student !== 'string' || !item.student.trim()
        || (index === 0 && (typeof item.paper !== 'string' || !Number.isFinite(item.score)))
        || (index === 1 && (typeof item.qid !== 'string' || !item.qid))) {
        throw new Error(`存在无效记录，未修改数据：${key}`);
      }
    }
    return [key, items];
  }));
}

function canonical(value) {
  if (Array.isArray(value)) return '[' + value.map(canonical).join(',') + ']';
  if (value && typeof value === 'object') {
    return '{' + Object.keys(value).sort().map(key => JSON.stringify(key) + ':' + canonical(value[key])).join(',') + '}';
  }
  return JSON.stringify(value);
}

export function mergeSnapshots(currentRaw, sourceRaw) {
  const current = parseSnapshot(currentRaw);
  const source = parseSnapshot(sourceRaw);
  const raw = {};
  const stats = {};
  for (const key of KEYS) {
    const seen = new Set();
    const currentSet = new Set(current[key].map(canonical));
    const merged = [];
    let added = 0;
    for (const item of [...current[key], ...source[key]]) {
      const identity = canonical(item);
      if (seen.has(identity)) continue;
      seen.add(identity);
      merged.push(item);
      if (!currentSet.has(identity)) added++;
    }
    merged.sort((a, b) => (Number(b.timestamp ?? b.id) || 0) - (Number(a.timestamp ?? a.id) || 0));
    // 没有新增或重复项时保留原始字符串，包括从未保存过的 null。
    raw[key] = added === 0 && merged.length === current[key].length
      ? currentRaw[key] : JSON.stringify(merged);
    stats[key] = {
      current: current[key].length, source: source[key].length, merged: merged.length,
      added, duplicates: current[key].length + source[key].length - merged.length
    };
  }
  return { raw, stats };
}

export function makeBackup(raw, metadata = {}) {
  parseSnapshot(raw);
  if (metadata.source) parseSnapshot(metadata.source.raw);
  return {
    format: 'shiqiu-quiz-backup', version: 1, createdAt: new Date().toISOString(),
    origin: metadata.origin || '', raw,
    ...(metadata.source ? { source: metadata.source } : {})
  };
}

export function snapshotFromBackup(backup) {
  if (backup?.format !== 'shiqiu-quiz-backup' || backup.version !== 1) {
    throw new Error('请选择本工具导出的第 1 版答题备份 JSON。');
  }
  parseSnapshot(backup.raw);
  return backup.source ? mergeSnapshots(backup.raw, backup.source.raw).raw : backup.raw;
}

function sameSnapshot(a, b) {
  return KEYS.every(key => a[key] === b[key]);
}

export function writeSnapshot(storage, expected, next, metadata = {}) {
  parseSnapshot(expected);
  parseSnapshot(next);
  if (!sameSnapshot(readSnapshot(storage), expected)) {
    throw new Error('当前答题记录已变化，请重新读取并预览后再合并。');
  }
  if (sameSnapshot(expected, next)) return { changed: false, backupKey: null };
  const backup = JSON.stringify(makeBackup(expected, metadata));
  const backupKey = BACKUP_PREFIX + Date.now() + '_' + Math.random().toString(36).slice(2);
  try {
    if (storage.getItem(backupKey) !== null) throw new Error('备份编号重复');
    storage.setItem(backupKey, backup);
    if (storage.getItem(backupKey) !== backup) throw new Error('备份校验失败');
  } catch {
    throw new Error('合并前备份保存失败，原答题数据未修改。请先下载备份，并释放浏览器存储空间。');
  }
  const touched = [];
  try {
    if (!sameSnapshot(readSnapshot(storage), expected)) throw new Error('写入前记录已变化');
    for (const key of KEYS) {
      if (next[key] === expected[key]) continue;
      touched.push(key);
      if (next[key] === null) storage.removeItem(key);
      else storage.setItem(key, next[key]);
    }
    if (!sameSnapshot(readSnapshot(storage), next)) throw new Error('写入校验失败');
  } catch (error) {
    const failed = [];
    for (const key of touched.reverse()) {
      try {
        const value = storage.getItem(key);
        if (value === expected[key]) continue;
        if (value !== next[key]) throw new Error('其他页面已修改记录');
        if (expected[key] === null) storage.removeItem(key);
        else storage.setItem(key, expected[key]);
        if (storage.getItem(key) !== expected[key]) throw new Error('恢复校验失败');
      } catch { failed.push(key); }
    }
    if (failed.length) throw new Error(`写入失败且部分恢复失败，请保留备份 ${backupKey}，暂停答题后处理。`);
    throw new Error(`写入未完成，已恢复合并前状态。备份保留为 ${backupKey}。原因：${error.message}`);
  }
  return { changed: true, backupKey };
}
