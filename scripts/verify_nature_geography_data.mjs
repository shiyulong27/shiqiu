import fs from 'fs';
import path from 'path';
import { naturalGeographyData } from '../src/data/naturalGeographyData.js';

console.log('--- 正在执行【华夏自然地理与世界地理大画卷】静态数据校验 ---');
let errors = 0;

// 1. 检查三级阶梯
const steps = naturalGeographyData.terrainSteps?.steps;
if (!steps || steps.length !== 3) {
  console.error(`[ERROR] 三级阶梯数据不完整，应为 3 级: 现为 ${steps?.length}`);
  errors++;
} else {
  console.log(`[PASS] 三级阶梯完整: 3 级`);
  for (const s of steps) {
    if (s.image) {
      const local = path.join('public', s.image.replace(/^\//, ''));
      if (!fs.existsSync(local)) {
        console.error(`[ERROR] 阶梯图片不存在: ${local}`);
        errors++;
      }
    }
  }
}

// 2. 检查山脉走向
if (!naturalGeographyData.mountainFramework || naturalGeographyData.mountainFramework.length !== 3) {
  console.error(`[ERROR] 山脉走向骨架应为 3 大系统`);
  errors++;
} else {
  console.log(`[PASS] 山脉走向骨架: 3 大走向完整`);
}

// 3. 检查长江与黄河全流域水文
const rivers = naturalGeographyData.rivers;
if (!rivers?.yangtze?.sections || rivers.yangtze.sections.length < 3) {
  console.error(`[ERROR] 长江水文流域节点不足 3 个`);
  errors++;
} else {
  console.log(`[PASS] 长江全流域水文节点: ${rivers.yangtze.sections.length} 个`);
}

if (!rivers?.yellowRiver?.sections || rivers.yellowRiver.sections.length < 3) {
  console.error(`[ERROR] 黄河水文流域节点不足 3 个`);
  errors++;
} else {
  console.log(`[PASS] 黄河全流域水文节点: ${rivers.yellowRiver.sections.length} 个`);
}

// 4. 检查秦岭-淮河与胡焕庸线
const qinling = naturalGeographyData.coreDividingLines?.qinlingHuaihe;
if (!qinling || qinling.dimensions.length !== 10) {
  console.error(`[ERROR] 秦岭-淮河应为整整 10 大维度差异: 现为 ${qinling?.dimensions?.length}`);
  errors++;
} else {
  console.log(`[PASS] 秦岭-淮河南北分界十大维度差异完整 (10/10)`);
}

const huLine = naturalGeographyData.coreDividingLines?.huLine;
if (!huLine || !huLine.naturalCause) {
  console.error(`[ERROR] 胡焕庸线数据缺失`);
  errors++;
} else {
  console.log(`[PASS] 胡焕庸线人口与自然密码完整`);
}

// 5. 检查奇异地貌成因与图片
const landforms = naturalGeographyData.landformFeatures;
if (!landforms || landforms.length < 3) {
  console.error(`[ERROR] 地貌成因数据不足 3 类`);
  errors++;
} else {
  console.log(`[PASS] 奇异地质地貌成因: ${landforms.length} 类`);
  for (const lf of landforms) {
    const local = path.join('public', lf.image.replace(/^\//, ''));
    if (!fs.existsSync(local)) {
      console.error(`[ERROR] 地貌图片不存在: ${local}`);
      errors++;
    }
  }
}

// 6. 检查世界地理 (七大洲四大洋与世界极值)
const world = naturalGeographyData.worldGeography;
if (!world?.continents || world.continents.length !== 7) {
  console.error(`[ERROR] 七大洲数量不为 7: 现为 ${world?.continents?.length}`);
  errors++;
} else {
  console.log(`[PASS] 七大洲完整收录: 7 洲`);
}

if (!world?.oceans || world.oceans.length !== 4) {
  console.error(`[ERROR] 四大洋数量不为 4: 现为 ${world?.oceans?.length}`);
  errors++;
} else {
  console.log(`[PASS] 四大洋完整收录: 4 洋`);
}

if (!world?.earthExtremes || world.earthExtremes.length < 5) {
  console.error(`[ERROR] 地球极值数量不足 5 个`);
  errors++;
} else {
  console.log(`[PASS] 地球极值图鉴: ${world.earthExtremes.length} 处`);
  for (const ex of world.earthExtremes) {
    const local = path.join('public', ex.image.replace(/^\//, ''));
    if (!fs.existsSync(local)) {
      console.error(`[ERROR] 地球极值图片不存在: ${local}`);
      errors++;
    }
  }
}

if (errors > 0) {
  console.error(`--- 校验失败: 发现 ${errors} 处错误 ---`);
  process.exit(1);
} else {
  console.log('--- 华夏自然地理与世界地理数据静态校验 100% 全部通过 (PASS) ---');
}
