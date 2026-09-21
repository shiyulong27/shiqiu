import fs from 'fs';
import path from 'path';
import {
  ancientAstronomyData,
  modernConstellationsData,
  solarSystemData,
  deepSpaceData,
  deepSpaceObjects,
  stellarEvolution,
  cosmicScaleLadder,
  humanExploration,
  astronomyQuiz
} from '../src/data/astronomyData.js';

console.log('--- 正在执行【天文星空与深空摄影】数据完整性校验 ---');
let errors = 0;

// 1. 检查深空天体数据与图片
const objects = deepSpaceObjects || deepSpaceData?.deepSpaceObjects;
if (!objects || objects.length < 6) {
  console.error(`[ERROR] deepSpaceObjects 数量不足 6 项: 现为 ${objects?.length || 0}`);
  errors++;
} else {
  console.log(`[PASS] deepSpaceObjects 数量达标: ${objects.length} 项`);
  for (const item of objects) {
    if (!item.image) {
      console.error(`[ERROR] 深空天体缺少图片路径: ${item.name}`);
      errors++;
    } else {
      const localPath = path.join('public', item.image.replace(/^\//, ''));
      if (!fs.existsSync(localPath)) {
        console.error(`[ERROR] 深空天体本地图片不存在: ${localPath}`);
        errors++;
      } else {
        const size = fs.statSync(localPath).size;
        if (size < 1000) {
          console.error(`[ERROR] 图片过小 (<1KB): ${localPath}`);
          errors++;
        }
      }
    }
  }
}

// 2. 检查恒星演化六阶段
if (!stellarEvolution || stellarEvolution.length !== 6) {
  console.error(`[ERROR] stellarEvolution 应为整整 6 个阶段: 现为 ${stellarEvolution?.length}`);
  errors++;
} else {
  console.log(`[PASS] 恒星演化六阶段结构完整`);
}

// 3. 检查宇宙尺度阶梯
if (!cosmicScaleLadder || cosmicScaleLadder.length < 7) {
  console.error(`[ERROR] cosmicScaleLadder 步数不足 7 级`);
  errors++;
} else {
  console.log(`[PASS] 宇宙尺度阶梯达标: ${cosmicScaleLadder.length} 级`);
}

// 4. 检查人类航天大国重器
if (!humanExploration || humanExploration.length < 3) {
  console.error(`[ERROR] humanExploration 数量不足 3 项`);
  errors++;
} else {
  console.log(`[PASS] 人类深空探索重大项目: ${humanExploration.length} 项`);
  for (const h of humanExploration) {
    const localPath = path.join('public', h.image.replace(/^\//, ''));
    if (!fs.existsSync(localPath)) {
      console.error(`[ERROR] 航天项目图片不存在: ${localPath}`);
      errors++;
    }
  }
}

// 5. 检查天文问答题库
if (!astronomyQuiz || astronomyQuiz.length < 5) {
  console.error(`[ERROR] astronomyQuiz 题量不足 5 题`);
  errors++;
} else {
  console.log(`[PASS] 天文题库题量: ${astronomyQuiz.length} 题`);
}

if (errors > 0) {
  console.error(`--- 校验失败: 发现 ${errors} 处错误 ---`);
  process.exit(1);
} else {
  console.log('--- 天文星空与深空摄影数据校验 100% 全部通过 (PASS) ---');
}
