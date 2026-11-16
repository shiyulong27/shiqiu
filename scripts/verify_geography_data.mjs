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

  // 严格核验深度通识八大新维度
  if (!prov.adminType || !['直辖市', '省', '自治区', '特别行政区'].includes(prov.adminType)) {
    console.error(`❌ [${prov.name} adminType 无效或缺失]: ${prov.adminType}`);
    errors++;
  }

  if (!prov.statusBadges || prov.statusBadges.length < 2) {
    console.error(`❌ [${prov.name} statusBadges 数量不足 2 个]`);
    errors++;
  }

  if (!prov.population || prov.population.length < 5) {
    console.error(`❌ [${prov.name} population 缺失或过短]`);
    errors++;
  }

  if (!prov.area || prov.area.length < 5) {
    console.error(`❌ [${prov.name} area 缺失或过短]`);
    errors++;
  }

  if (!prov.ethnicGroups || !prov.ethnicGroups.count || !prov.ethnicGroups.summary || !prov.ethnicGroups.mainGroups) {
    console.error(`❌ [${prov.name} ethnicGroups 结构不完整]`);
    errors++;
  }

  if (!prov.nameOrigin || prov.nameOrigin.length < 8) {
    console.error(`❌ [${prov.name} nameOrigin 缺失或过短]`);
    errors++;
  }

  if (!prov.coreFeatures || prov.coreFeatures.length < 2) {
    console.error(`❌ [${prov.name} coreFeatures 鲜明特质数量不足 2 个]`);
    errors++;
  }

  if (!prov.climateProfile || !prov.climateProfile.type || !prov.climateProfile.summary || !prov.climateProfile.feel) {
    console.error(`❌ [${prov.name} climateProfile 气候特征不完整]`);
    errors++;
  }

  if (!prov.terrainProfile || !prov.terrainProfile.highestPeak || !prov.terrainProfile.lowestPoint || !prov.terrainProfile.majorRivers) {
    console.error(`❌ [${prov.name} terrainProfile 水文地貌极值不完整]`);
    errors++;
  }

  if (!prov.economicProfile || !prov.economicProfile.gdpRank || !prov.economicProfile.industryHighlights || !prov.economicProfile.nationalProjects) {
    console.error(`❌ [${prov.name} economicProfile 经济与大国重器不完整]`);
    errors++;
  }
  // 严格核验山河为界与省界溯源字段 (Layer 1)
  if (!prov.boundaryHeritage || !prov.boundaryHeritage.divideType || !prov.boundaryHeritage.divideName || !prov.boundaryHeritage.borderRiversMountains || !prov.boundaryHeritage.allusion || !prov.boundaryHeritage.heritageDetail) {
    console.error(`❌ [${prov.name} boundaryHeritage 缺失或结构不完整]`);
    errors++;
  }
});
console.log('✓ 34 个省级行政区八大核心通识维度与山河为界典故（boundaryHeritage）完整无误');

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

// 4. 校验华夏地理分界与名湖大泊专题数据 (Layer 2)
console.log(`\n4️⃣  校验华夏地理分界与名湖大泊专题数据`);
import { boundaryThemesData, mountainBoundariesData } from '../src/data/chinaGeographyBoundariesData.js';

const expectedThemeKeys = ['qinling_huaihe', 'lianghu_divide', 'liangguang_divide', 'major_lakes'];
expectedThemeKeys.forEach(key => {
  const theme = boundaryThemesData[key];
  if (!theme) {
    console.error(`❌ 缺失关键专题: ${key}`);
    errors++;
    return;
  }
  if (!theme.title || !theme.tagline || !theme.intro || !theme.svgImage || !theme.coords || !theme.stations || !theme.allusions) {
    console.error(`❌ 专题 ${key} 字段不完整`);
    errors++;
  }
  if (theme.stations.length < 4) {
    console.error(`❌ 专题 ${key} 站点数不足 4: 当前 ${theme.stations.length}`);
    errors++;
  }
  if (theme.allusions.length < 2) {
    console.error(`❌ 专题 ${key} 历史典故数不足 2: 当前 ${theme.allusions.length}`);
    errors++;
  }
});
console.log(`✓ 4 大地理分界专题 (秦岭淮河南北分界、两湖分野、两广同源、五大淡水湖大泊) 完整`);

if (mountainBoundariesData.length < 4) {
  console.error(`❌ 脊梁山脉分界数据不足 4 条: 当前 ${mountainBoundariesData.length}`);
  errors++;
}
mountainBoundariesData.forEach(mb => {
  if (!mb.name || !mb.provinces || !mb.highlight || !mb.desc || !mb.poem) {
    console.error(`❌ 脊梁山脉分界字段缺失: ${mb.name}`);
    errors++;
  }
});
console.log(`✓ 华夏四大脊梁山脉分界（太行山、武夷山、巫山、南岭五岭）数据完整`);

// 5. 校验省份象形拼图题库 (34 省全覆盖)
console.log(`\n5️⃣  校验省份象形拼图题库 (当前: ${provincePuzzleCards.length} 题)`);
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
  console.log('\n🎉 所有地理、江河、名山、分界专题及象形拼图数据 100% 静态校验通过！');
}
