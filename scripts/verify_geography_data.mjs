import { chinaGeographyData, regionsList } from '../src/data/chinaGeographyData.js';

console.log('=====================================================');
console.log('🔍 校验中国地理通识数据库: src/data/chinaGeographyData.js');
console.log('=====================================================');

console.log(`✓ 载入省区总数: ${chinaGeographyData.length} 个 (预期: 34 个)`);
if (chinaGeographyData.length !== 34) {
  console.error(`❌ 省份总数不为 34！当前: ${chinaGeographyData.length}`);
  process.exit(1);
}

let errors = 0;
const idSet = new Set();
const adcodeSet = new Set();
const regionCount = {};

chinaGeographyData.forEach((prov, idx) => {
  if (!prov.id || !prov.adcode || !prov.name || !prov.capital || !prov.abbr || !prov.region) {
    console.error(`❌ [第 ${idx + 1} 个省份基础字段缺失]: ${prov.name || prov.id}`);
    errors++;
  }

  if (idSet.has(prov.id)) {
    console.error(`❌ [ID 重复]: ${prov.id}`);
    errors++;
  }
  idSet.add(prov.id);

  if (adcodeSet.has(prov.adcode)) {
    console.error(`❌ [Adcode 重复]: ${prov.adcode} (${prov.name})`);
    errors++;
  }
  adcodeSet.add(prov.adcode);

  regionCount[prov.region] = (regionCount[prov.region] || 0) + 1;

  if (!prov.landmarks || prov.landmarks.length < 2) {
    console.error(`❌ [${prov.name} 地标数量不足 2 个]`);
    errors++;
  }

  if (!prov.specialties || prov.specialties.length < 2) {
    console.error(`❌ [${prov.name} 特产数量不足 2 个]`);
    errors++;
  }

  if (!prov.funFact || prov.funFact.length < 10) {
    console.error(`❌ [${prov.name} 趣味冷知识缺失或过短]`);
    errors++;
  }
});

console.log('\n📊 七大地理大区分组统计:');
Object.entries(regionCount).forEach(([k, v]) => console.log(`  • ${k}: ${v} 个省市区`));

if (errors > 0) {
  console.error(`\n❌ 校验未通过，发现 ${errors} 处数据问题！`);
  process.exit(1);
} else {
  console.log('\n🎉 中国 34 个省级行政区地理通识数据 100% 校验通过！');
}
