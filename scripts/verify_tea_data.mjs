import { teaCultureData } from '../src/data/teaCultureData.js';

console.log('--- 开始静态校验中华茶文化全景百科数据 (teaCultureData.js) ---');

let errors = [];

// 1. 验证元数据
if (!teaCultureData.meta || !teaCultureData.meta.title) {
  errors.push('缺少 meta.title');
}

// 2. 验证六大茶类
if (!Array.isArray(teaCultureData.teaCategories) || teaCultureData.teaCategories.length !== 6) {
  errors.push(`teaCategories 必须精确包含 6 大茶类，当前为 ${teaCultureData.teaCategories?.length}`);
} else {
  teaCultureData.teaCategories.forEach((c) => {
    if (!c.id || !c.name || !c.fermentation || !c.representative || !c.waterTemp) {
      errors.push(`茶类 ${c.id || '未知'} 缺少发音/代表茶/水温字段`);
    }
  });
}

// 3. 验证辨茶五步
if (!Array.isArray(teaCultureData.evalSteps) || teaCultureData.evalSteps.length !== 5) {
  errors.push('evalSteps 必须精确包含 5 步鉴茶法');
}

// 4. 验证核心名产区
if (!Array.isArray(teaCultureData.famousRegions) || teaCultureData.famousRegions.length < 5) {
  errors.push('famousRegions 产区列表不足 5 处');
}

// 5. 验证价格档位
if (!Array.isArray(teaCultureData.priceTiers) || teaCultureData.priceTiers.length !== 4) {
  errors.push('priceTiers 必须包含 4 档价格梯度');
}

// 6. 验证题库
if (!Array.isArray(teaCultureData.quiz) || teaCultureData.quiz.length < 6) {
  errors.push('quiz 题库少于 6 题');
} else {
  teaCultureData.quiz.forEach((q, idx) => {
    if (!q.question || !Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`第 ${idx + 1} 题选项不足 4 个`);
    }
    if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) {
      errors.push(`第 ${idx + 1} 题 answerIndex 非法`);
    }
    if (!q.explanation) {
      errors.push(`第 ${idx + 1} 题缺少解析 explanation`);
    }
  });
}

if (errors.length > 0) {
  console.error('❌ 静态校验失败，发现错误:');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log(`✅ 静态校验 100% 通过！`);
  console.log(`- 中国六大茶类: ${teaCultureData.teaCategories.length} 类完整收录`);
  console.log(`- 辨茶评鉴五步: ${teaCultureData.evalSteps.length} 步`);
  console.log(`- 核心名茶微产区: ${teaCultureData.famousRegions.length} 处对比`);
  console.log(`- 市场价格档位: ${teaCultureData.priceTiers.length} 档阶梯`);
  console.log(`- 茶道通识挑战题: ${teaCultureData.quiz.length} 道`);
  process.exit(0);
}
