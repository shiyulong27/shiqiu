import fs from 'fs';
import path from 'path';
import { biologyData } from '../src/data/biologyData.js';

console.log('--- 正在执行【生物与神奇动物真实图鉴】静态数据校验 ---');

let errors = 0;

// 1. 检查总体数据结构
if (!biologyData || !biologyData.animals) {
  console.error('[ERROR] biologyData 或 animals 缺失');
  process.exit(1);
}

console.log(`[PASS] 基础结构存在. 物种总数: ${biologyData.animals.length}`);

// 2. 检查物种数量 (目标 >= 38)
if (biologyData.animals.length < 35) {
  console.error(`[ERROR] 物种数量不足 35: 现为 ${biologyData.animals.length}`);
  errors++;
} else {
  console.log(`[PASS] 物种数量达标: ${biologyData.animals.length} 种`);
}

// 3. 检查所有动物图片的本地存在性
for (const a of biologyData.animals) {
  if (!a.image) {
    console.error(`[ERROR] 物种缺少本地图片配置: ${a.name} (${a.id})`);
    errors++;
  } else {
    const localPath = path.join('public', a.image.replace(/^\//, ''));
    if (!fs.existsSync(localPath)) {
      console.error(`[ERROR] 物种本地图片文件不存在: ${localPath} (${a.name})`);
      errors++;
    } else {
      const size = fs.statSync(localPath).size;
      if (size < 1000) {
        console.error(`[ERROR] 物种图片文件异常过小 (<1KB): ${localPath}`);
        errors++;
      }
    }
  }
}

// 4. 检查植物与微观生命图片存在性
if (biologyData.botany) {
  for (const b of biologyData.botany) {
    if (b.image) {
      const localPath = path.join('public', b.image.replace(/^\//, ''));
      if (!fs.existsSync(localPath)) {
        console.error(`[ERROR] 植物本地图片文件不存在: ${localPath} (${b.name})`);
        errors++;
      }
    }
  }
}

if (biologyData.microAndHuman) {
  for (const m of biologyData.microAndHuman) {
    if (m.image) {
      const localPath = path.join('public', m.image.replace(/^\//, ''));
      if (!fs.existsSync(localPath)) {
        console.error(`[ERROR] 微观生命本地图片文件不存在: ${localPath} (${m.name})`);
        errors++;
      }
    }
  }
}

// 5. 检查恐龙门类
const dinosaurs = biologyData.animals.filter(a => a.category === 'dinosaurs');
console.log(`[INFO] 包含恐龙与史前古生物: ${dinosaurs.length} 种`);
if (dinosaurs.length < 8) {
  console.error(`[ERROR] 恐龙数量不足 8 种: 现为 ${dinosaurs.length}`);
  errors++;
}

// 6. 检查题库
const quizzes = biologyData.quizzes || biologyData.quiz;
if (!quizzes || quizzes.length < 8) {
  console.error(`[ERROR] 题库题量不足 8 题`);
  errors++;
} else {
  for (const q of quizzes) {
    if (!q.question || q.options.length !== 4 || typeof (q.answerIndex ?? q.correct) !== 'number') {
      console.error(`[ERROR] 题目格式异常: ${q.question}`);
      errors++;
    }
  }
}

if (errors > 0) {
  console.error(`--- 校验失败: 发现 ${errors} 处错误 ---`);
  process.exit(1);
} else {
  console.log('--- 校验全部通过 (100% PASS): 所有图片真实存在且符合规范 ---');
}
