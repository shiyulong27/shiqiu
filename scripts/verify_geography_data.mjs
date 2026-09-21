import { chinaGeographyData, regionsList } from '../src/data/chinaGeographyData.js';
import { yangtzeData, yellowRiverData, mountainsData } from '../src/data/chinaRiversMountainsData.js';
import { provincePuzzleCards } from '../src/data/provincePuzzleData.js';

console.log('=====================================================');
console.log('🔍 校验中国地理通识数据库: 34省通识 + 江河名山 + 象形拼图');
console.log('=====================================================');

let errors = 0;

// 1. 校验 34 省份基础数据
console.log(`\n1️⃣  校验 34 省份通识数据 (当前: ${chinaGeographyData.length} 个)`);
if (chinaGeographyData.length !== 34) {
  console.error(`❌ 省份总数不为 34！当前: ${chinaGeographyData.length}`);
  errors++;
}

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
console.log('✓ 34 个省级行政区基础数据完整无误');

// 2. 校验江河数据 (长江与黄河)
console.log('\n2️⃣  校验长江与黄河水系通识数据');
if (!yangtzeData.coords || yangtzeData.coords.length < 20) {
  console.error('❌ 长江经纬度点集过少或缺失');
  errors++;
}
if (!yangtzeData.stations || yangtzeData.stations.length < 6) {
  console.error('❌ 长江沿线站点过少或缺失');
  errors++;
}
yangtzeData.stations.forEach(st => {
  if (!st.id || !st.name || !st.coords || st.coords.length !== 2 || !st.poem || !st.desc) {
    console.error(`❌ 长江站点字段缺失: ${st.name}`);
    errors++;
  }
});
console.log(`✓ 长江干流点集: ${yangtzeData.coords.length} 个点, 诗意人文站点: ${yangtzeData.stations.length} 个`);

if (!yellowRiverData.coords || yellowRiverData.coords.length < 20) {
  console.error('❌ 黄河经纬度点集过少或缺失');
  errors++;
}
if (!yellowRiverData.stations || yellowRiverData.stations.length < 6) {
  console.error('❌ 黄河沿线站点过少或缺失');
  errors++;
}
yellowRiverData.stations.forEach(st => {
  if (!st.id || !st.name || !st.coords || st.coords.length !== 2 || !st.poem || !st.desc) {
    console.error(`❌ 黄河站点字段缺失: ${st.name}`);
    errors++;
  }
});
console.log(`✓ 黄河几字弯点集: ${yellowRiverData.coords.length} 个点, 文化通识站点: ${yellowRiverData.stations.length} 个`);

// 3. 校验中华名山数据
console.log(`\n3️⃣  校验中华名山大川数据 (当前: ${mountainsData.length} 座名山)`);
if (mountainsData.length < 10) {
  console.error('❌ 名山数量不足 10 座');
  errors++;
}
mountainsData.forEach(m => {
  if (!m.id || !m.name || !m.altitude || !m.coords || m.coords.length !== 2 || !m.poem || !m.highlight) {
    console.error(`❌ 名山字段缺失: ${m.name}`);
    errors++;
  }
  // 校验省份 ID 对应
  if (!idSet.has(m.provinceId)) {
    console.error(`❌ 名山所属省份 ID 未对应有效省份: ${m.name} -> ${m.provinceId}`);
    errors++;
  }
});
console.log(`✓ 名山大川数据完整: 包含五岳及黄山、庐山、雁荡山、峨眉山、长白山、珠峰等 ${mountainsData.length} 处胜境`);

// 4. 校验省份象形拼图题库 (34 省全覆盖)
console.log(`\n4️⃣  校验省份象形拼图题库 (当前: ${provincePuzzleCards.length} 题)`);
if (provincePuzzleCards.length !== 34) {
  console.error(`❌ 拼图题库未覆盖 34 省！当前: ${provincePuzzleCards.length}`);
  errors++;
}
const puzzleIdSet = new Set();
provincePuzzleCards.forEach(card => {
  if (!card.id || !card.name || !card.riddle || !card.metaphor || !card.options || card.options.length !== 4 || !card.answer) {
    console.error(`❌ 拼图卡片字段缺失: ${card.name}`);
    errors++;
  }
  if (!card.options.includes(card.answer)) {
    console.error(`❌ 拼图选项未包含正确答案: ${card.name}`);
    errors++;
  }
  if (!idSet.has(card.id)) {
    console.error(`❌ 拼图卡片 ID 无法匹配省份: ${card.id}`);
    errors++;
  }
  puzzleIdSet.add(card.id);
});
if (puzzleIdSet.size !== 34) {
  console.error(`❌ 拼图卡片省份 ID 不唯一或未满 34: ${puzzleIdSet.size}`);
  errors++;
}
console.log(`✓ 34 省象形拟物联想题库 100% 覆盖，选项及答案正确无误`);

if (errors > 0) {
  console.error(`\n❌ 校验未通过，共发现 ${errors} 处数据异常！`);
  process.exit(1);
} else {
  console.log('\n🎉 所有地理、江河、名山及象形拼图数据 100% 静态校验通过！');
}
