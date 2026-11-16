import assert from 'node:assert/strict';
import { foundationDomains as domains, foundationEntries as entries, foundationSources as sources } from '../src/data/commonSenseFoundationsData.js';

const expected = Array.from({length:8},(_,d)=>Array.from({length:8},(_,i)=>`CS${d+9}-${String(i+1).padStart(2,'0')}`)).flat();
assert.equal(entries.length,64);
assert.equal(new Set(entries.map(e=>e.id)).size,64);
assert.equal(new Set(sources.map(s=>s.id)).size,sources.length);
for(const entry of entries){
  assert(expected.includes(entry.id),`未知ID ${entry.id}`);
  assert(domains.some(d=>d.id===entry.domainId),`未知领域 ${entry.id}`);
  for(const field of ['title','shortAnswer','explanation','example','scopeNote'])assert(entry[field]?.trim(),`${entry.id} 缺少 ${field}`);
  assert.equal(entry.reviewStatus,'verified',`尚未核验 ${entry.id}`);
  assert(entry.compare.length>=2&&entry.compare.every(row=>row.length===2&&row.every(Boolean)),`${entry.id} 对照缺失`);
  assert(entry.sourceIds.length,`${entry.id} 来源缺失`);
  for(const id of entry.sourceIds){const source=sources.find(s=>s.id===id);assert(source,`${entry.id} 来源不存在 ${id}`);assert(source.supports&&source.readStatus.includes('已读'));}
}
for(const domain of domains)assert.equal(entries.filter(e=>e.domainId===domain.id).length,8,`${domain.id} 目录不完整`);
console.log(JSON.stringify({structure:'passed',entries:entries.length,domains:domains.length,sources:sources.length,missing:expected.filter(id=>!entries.some(e=>e.id===id))},null,2));
