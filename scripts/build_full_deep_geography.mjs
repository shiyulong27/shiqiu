// scripts/build_full_deep_geography.mjs
// 生成涵盖 34 个省级行政区「八大核心维度深度档案」的完整标准数据库

import fs from 'fs';
import path from 'path';

// 导入模块化省份数据定义
import { municipalities } from './provinces_data/municipalities.mjs';
import { northChina } from './provinces_data/north_china.mjs';
import { northeast } from './provinces_data/northeast.mjs';
import { eastChina } from './provinces_data/east_china.mjs';
import { centralChina } from './provinces_data/central_china.mjs';
import { southChina } from './provinces_data/south_china.mjs';
import { southwest } from './provinces_data/southwest.mjs';
import { northwest } from './provinces_data/northwest.mjs';

const allProvinces = [
  ...municipalities,
  ...northChina,
  ...northeast,
  ...eastChina,
  ...centralChina,
  ...southChina,
  ...southwest,
  ...northwest
];

console.log(`总计装载省份数量: ${allProvinces.length} 个`);

if (allProvinces.length !== 34) {
  console.error(`❌ 省份总数不为 34！当前为: ${allProvinces.length}`);
  process.exit(1);
}

const regionsList = ['全部大区', '华北', '东北', '华东', '华中', '华南', '西南', '西北', '港澳台'];

const fileContent = `/**
 * 中国地理通识长卷 · 34 个省级行政区核心通识数据库（八维全景深度档案版）
 * 涵盖：
 * 1. 行政区划定位与国家战略定位标签 (adminType, statusBadges, nameOrigin)
 * 2. 四大硬核指标 (population, area, ethnicGroups, climateProfile)
 * 3. 核心鲜明特征看板 (coreFeatures: 2~3 个最具辨识度的灵魂地貌人文特质)
 * 4. 气候环境与自然水文极值 (climateProfile, terrainProfile: 最高峰/最低点/大江大山)
 * 5. 经济实力与大国重器工程 (economicProfile: GDP地位/支柱产业/超级工程)
 * 6. 名胜古迹与世界遗产 (landmarks)
 * 7. 风土物产与非遗美食 (specialties)
 * 8. 中小学课本古诗山河联动与历史人物 (relatedPoems, famousFigures, funFact)
 */

export const chinaGeographyData = ${JSON.stringify(allProvinces, null, 2)};

// 按大区分组辅助字典
export const regionsList = ${JSON.stringify(regionsList, null, 2)};
`;

const targetPath = path.resolve('src/data/chinaGeographyData.js');
fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log(`✅ 成功输出至: ${targetPath}，共 ${allProvinces.length} 个省份！`);
