import {
  KEYS, BACKUP_PREFIX, readSnapshot, parseSnapshot, mergeSnapshots,
  makeBackup, snapshotFromBackup, writeSnapshot
} from './record-merge-core.js';

const $ = id => document.getElementById(id);
const localHost = ['127.0.0.1', 'localhost'].includes(location.hostname);
const localPort = ['4321', '14321'].includes(location.port);
const peerOrigin = localHost && localPort && location.protocol === 'http:'
  ? `http://${location.hostname}:${location.port === '4321' ? '14321' : '4321'}` : null;
const token = new URLSearchParams(location.search).get('token');
const bridge = new URLSearchParams(location.search).get('bridge') === '1';

if (bridge) {
  document.querySelector('main').hidden = true;
  // 只允许同一主机的另一已知端口、指定父窗口和一次性 token 读取这两个键。
  window.addEventListener('message', event => {
    if (!peerOrigin || window.parent === window || !token || token.length < 20
      || event.origin !== peerOrigin || event.source !== window.parent
      || event.data?.type !== 'shiqiu-quiz-read' || event.data.token !== token) return;
    const response = { type: 'shiqiu-quiz-snapshot', token };
    try {
      response.raw = readSnapshot(localStorage);
      parseSnapshot(response.raw);
    } catch (error) { response.error = error.message; }
    event.source.postMessage(response, event.origin);
  });
} else {
  start();
}

function readPeer() {
  if (!peerOrigin) return Promise.reject(new Error('跨端口读取只支持本机 4321 和 14321，请使用文件备份导入。'));
  return new Promise((resolve, reject) => {
    const frame = document.createElement('iframe');
    frame.hidden = true;
    frame.title = '只读来源地址答题记录';
    const requestToken = crypto.randomUUID();
    const url = new URL(location.pathname, peerOrigin);
    url.searchParams.set('bridge', '1');
    url.searchParams.set('token', requestToken);
    const cleanup = () => {
      clearTimeout(timeout);
      window.removeEventListener('message', receive);
      frame.remove();
    };
    const receive = event => {
      if (event.origin !== peerOrigin || event.source !== frame.contentWindow
        || event.data?.type !== 'shiqiu-quiz-snapshot' || event.data.token !== requestToken) return;
      cleanup();
      if (event.data.error) reject(new Error(event.data.error));
      else resolve(event.data.raw);
    };
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error(`无法读取 ${peerOrigin}。请确认来源端口服务已启动；原答题记录未修改。也可以在来源地址下载备份后导入。`));
    }, 8000);
    window.addEventListener('message', receive);
    frame.onload = () => frame.contentWindow?.postMessage({ type: 'shiqiu-quiz-read', token: requestToken }, peerOrigin);
    frame.src = url.href;
    document.body.appendChild(frame);
  });
}

function download(backup) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `shiqiu-quiz-${location.hostname}-${location.port || 'web'}-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function start() {
  let preview = null;
  let busy = false;
  function status(message, kind = '') {
    $('status').textContent = message;
    $('status').className = kind;
  }
  function refreshBackups() {
    const selected = $('backup-list').value;
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(BACKUP_PREFIX)) keys.push(key);
    }
    $('backup-list').replaceChildren();
    for (const key of keys.sort().reverse()) {
      const option = document.createElement('option');
      option.value = key;
      const backup = JSON.parse(localStorage.getItem(key));
      option.textContent = new Date(backup.createdAt).toLocaleString('zh-CN') + ' · ' + key.slice(-6);
      $('backup-list').appendChild(option);
    }
    if (keys.includes(selected)) $('backup-list').value = selected;
    $('download-saved').disabled = $('restore').disabled = keys.length === 0;
  }
  function showCounts(currentRaw, sourceRaw = null) {
    const current = parseSnapshot(currentRaw);
    const merged = sourceRaw ? mergeSnapshots(currentRaw, sourceRaw) : null;
    $('counts').replaceChildren();
    KEYS.forEach((key, index) => {
      const row = document.createElement('tr');
      const stats = merged?.stats[key];
      for (const value of [index ? '错题本' : '交卷成绩', current[key].length, stats?.source ?? '—', stats?.merged ?? '—', stats?.added ?? '—']) {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      }
      $('counts').appendChild(row);
    });
    const data = merged ? parseSnapshot(merged.raw) : current;
    const students = [...new Set(KEYS.flatMap(key => data[key].map(item => item.student)))];
    $('students').textContent = students.map(student => `${student}：${data[KEYS[0]].filter(r => r.student === student).length} 次交卷，${data[KEYS[1]].filter(r => r.student === student).length} 条错题`).join('；');
    return merged;
  }
  function clearPreview() {
    preview = null;
    $('merge').disabled = $('download-preview').disabled = true;
  }
  function setPreview(sourceRaw, sourceOrigin, mode) {
    const currentRaw = readSnapshot(localStorage);
    const merged = showCounts(currentRaw, sourceRaw);
    preview = { currentRaw, sourceRaw, sourceOrigin, mode, merged };
    $('source-origin').textContent = sourceOrigin;
    $('download-preview').disabled = false;
    const changed = KEYS.some(key => merged.raw[key] !== currentRaw[key]);
    $('merge').disabled = !changed;
    const totalSource = KEYS.reduce((sum, key) => sum + merged.stats[key].source, 0);
    status(totalSource === 0
      ? '来源地址中读到 0 条成绩和 0 条错题。请核对 Chrome 配置和以前使用的主机名；这不代表其他浏览器或地址的数据已丢失。'
      : changed ? '读取成功。请核对预览数量，建议先下载双方备份，再点击“备份并合并”。' : '读取成功，当前地址已包含这些记录，无需重复写入。');
  }
  async function run(action) {
    if (busy) return;
    busy = true;
    for (const button of document.querySelectorAll('button')) button.disabled = true;
    try { await action(); }
    catch (error) {
      clearPreview();
      try { showCounts(readSnapshot(localStorage)); } catch { /* 保留最初的错误信息。 */ }
      status(error.message, 'error');
    }
    finally {
      busy = false;
      $('read-peer').disabled = !peerOrigin;
      $('download-current').disabled = $('preview-import').disabled = false;
      $('merge').disabled = !preview || !KEYS.some(key => preview.merged.raw[key] !== preview.currentRaw[key]);
      $('download-preview').disabled = !preview;
      try { refreshBackups(); } catch (error) { status('备份列表读取失败：' + error.message, 'error'); }
    }
  }
  $('current-origin').textContent = location.origin;
  $('source-origin').textContent = peerOrigin || '文件备份';
  $('read-peer').textContent = `读取 ${peerOrigin ? new URL(peerOrigin).port : '来源地址'} 的记录`;
  $('merge').textContent = `备份并合并到 ${location.port || '当前地址'}`;
  if (localHost) {
    const url = new URL(location.href);
    url.hostname = location.hostname === 'localhost' ? '127.0.0.1' : 'localhost';
    url.search = '';
    $('other-host').href = url.href;
    $('other-host').hidden = false;
  }
  $('read-peer').onclick = () => run(async () => {
    clearPreview();
    status('正在读取来源地址，请稍候……');
    setPreview(await readPeer(), peerOrigin, 'peer');
  });
  $('download-current').onclick = () => run(() => download(makeBackup(readSnapshot(localStorage), { origin: location.origin })));
  $('download-preview').onclick = () => run(() => {
    if (preview) download(makeBackup(preview.currentRaw, { origin: location.origin, source: { origin: preview.sourceOrigin, raw: preview.sourceRaw } }));
  });
  $('merge').onclick = () => run(async () => {
    const pending = preview;
    if (!pending) return;
    if (pending.mode === 'peer') {
      const latest = await readPeer();
      if (KEYS.some(key => latest[key] !== pending.sourceRaw[key])) {
        clearPreview();
        showCounts(readSnapshot(localStorage));
        throw new Error('来源地址记录在预览后已变化，请重新读取，未写入任何答题数据。');
      }
    }
    const result = writeSnapshot(localStorage, pending.currentRaw, pending.merged.raw, {
      origin: location.origin, source: { origin: pending.sourceOrigin, raw: pending.sourceRaw }
    });
    clearPreview();
    const current = readSnapshot(localStorage);
    showCounts(current);
    const data = parseSnapshot(current);
    if (result.backupKey) { refreshBackups(); $('backup-list').value = result.backupKey; }
    status(`合并完成：当前共有 ${data[KEYS[0]].length} 次交卷、${data[KEYS[1]].length} 条错题。来源地址未修改，合并前双方数据已备份。请返回练习大厅刷新查看。`, 'success');
  });
  function previewImport(text) {
    clearPreview();
    let backup;
    try { backup = JSON.parse(text); }
    catch { throw new Error('备份不是有效的 JSON，请检查文件或粘贴内容；答题记录未修改。'); }
    setPreview(snapshotFromBackup(backup), backup.origin || '导入的 JSON 备份', 'file');
  }
  $('backup-text').oninput = () => {
    clearPreview();
    status('备份内容已变化，请重新预览后合并。');
  };
  $('preview-import').onclick = () => run(() => previewImport($('backup-text').value));
  $('backup-file').onchange = () => run(async () => {
    const file = $('backup-file').files[0];
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) throw new Error('备份超过 20MB，请先检查文件是否正确。');
    previewImport(await file.text());
  });
  $('download-saved').onclick = () => run(() => download(JSON.parse(localStorage.getItem($('backup-list').value))));
  $('restore').onclick = () => run(() => {
    const key = $('backup-list').value;
    const backup = JSON.parse(localStorage.getItem(key));
    snapshotFromBackup(backup);
    if (!confirm('恢复后当前地址将回到选中备份的原始状态；当前记录会先另存一份备份。确定恢复吗？')) return;
    writeSnapshot(localStorage, readSnapshot(localStorage), backup.raw, { origin: location.origin });
    clearPreview();
    showCounts(readSnapshot(localStorage));
    status('已恢复所选备份的原始状态，恢复前的数据也已另存备份。', 'success');
  });
  window.addEventListener('storage', event => {
    if (KEYS.includes(event.key) || event.key === null) {
      clearPreview();
      try { showCounts(readSnapshot(localStorage)); status('其他页面更新了答题记录，请重新读取后合并。'); }
      catch (error) { status(error.message, 'error'); }
    }
  });
  try {
    showCounts(readSnapshot(localStorage));
    refreshBackups();
    $('read-peer').disabled = !peerOrigin;
    status('当前地址读取完成。点击“读取来源地址的记录”，预览后再合并。');
  } catch (error) {
    for (const button of document.querySelectorAll('button')) button.disabled = true;
    status(error.message + ' 请先保留浏览器数据，停止继续答题。', 'error');
  }
}
