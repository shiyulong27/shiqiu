import { biologyData } from '../src/data/biologyData.js';

console.log('--- 开始静态校验生物奥秘与动物王国数据 (biologyData.js) ---');

let errors = [];

// 1. 验证元数据
if (!biologyData.meta || !biologyData.meta.title) {
  errors.push('缺少 meta.title');
}

// 2. 验证分类导航
if (!Array.isArray(biologyData.categoryNav) || biologyData.categoryNav.length < 5) {
  errors.push('categoryNav 长度不足或不是数组');
}

// 3. 验证动物列表
if (!Array.isArray(biologyData.animals) || biologyData.animals.length === 0) {
  errors.push('animals 列表为空');
} else {
  const ids = new Set();
  biologyData.animals.forEach((item, index) => {
    if (!item.id) errors.push(`第 ${index} 项动物缺少 id`);
    if (ids.has(item.id)) errors.push(`动物 id 重复: ${item.id}`);
    ids.add(item.id);

    if (!item.name || !item.latinName || !item.englishName) {
      errors.push(`动物 ${item.id} 缺少名称（中文/拉丁/英文）`);
    }
    if (!item.category) {
      errors.push(`动物 ${item.id} 缺少分类 category`);
    }
    if (!item.habitat || !item.diet || !item.features || !item.habits || !item.funFact) {
      errors.push(`动物 ${item.id} 缺少核心生物学详述字段`);
    }
  });
}

// 4. 验证神奇植物
if (!Array.isArray(biologyData.botany) || biologyData.botany.length < 3) {
  errors.push('botany 植物列表不足');
} else {
  biologyData.botany.forEach((plant) => {
    if (!plant.id || !plant.name || !plant.features || !plant.funFact) {
      errors.push(`植物 ${plant.id || '未知'} 缺少必要字段`);
    }
  });
}

// 5. 验证人体奥秘
if (!Array.isArray(biologyData.humanBody) || biologyData.humanBody.length < 3) {
  errors.push('humanBody 人体系统列表不足');
} else {
  biologyData.humanBody.forEach((sys) => {
    if (!sys.id || !sys.name || !sys.features || !sys.funFact) {
      errors.push(`人体系统 ${sys.id || '未知'} 缺少必要字段`);
    }
  });
}

// 6. 验证自测题库
if (!Array.isArray(biologyData.quiz) || biologyData.quiz.length < 6) {
  errors.push('quiz 题库少于 6 道题');
} else {
  biologyData.quiz.forEach((q, idx) => {
    if (!q.question || !Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`第 ${idx + 1} 道题选项不为 4 项`);
    }
    if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) {
      errors.push(`第 ${idx + 1} 道题 answerIndex 非法: ${q.answerIndex}`);
    }
    if (!q.explanation) {
      errors.push(`第 ${idx + 1} 道题缺少解析 explanation`);
    }
  });
}

if (errors.length > 0) {
  console.error('❌ 静态校验失败，发现错误:');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log(`✅ 静态校验 100% 通过！`);
  console.log(`- 核心动物物种: ${biologyData.animals.length} 种`);
  console.log(`- 神奇植物物种: ${biologyData.botany.length} 种`);
  console.log(`- 人体微观系统: ${biologyData.humanBody.length} 组`);
  console.log(`- 亲子百科挑战题: ${biologyData.quiz.length} 道`);
  process.exit(0);
}
