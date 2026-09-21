import { commonSenseData } from '../src/data/commonSenseData.js';

console.log('--- 开始静态校验生活与百科常识宝典数据 (commonSenseData.js) ---');

let errors = [];

// 1. 验证元数据
if (!commonSenseData.meta || !commonSenseData.meta.title) {
  errors.push('缺少 meta.title');
}

// 2. 验证安全自救主题
if (!Array.isArray(commonSenseData.safetyTopics) || commonSenseData.safetyTopics.length < 4) {
  errors.push('safetyTopics 列表少于 4 个');
} else {
  commonSenseData.safetyTopics.forEach((topic, i) => {
    if (!topic.id || !topic.title || !topic.summary || !Array.isArray(topic.points) || topic.points.length === 0) {
      errors.push(`安全主题第 ${i + 1} 项缺少必要字段`);
    }
  });
}

// 3. 验证公共标识
if (!Array.isArray(commonSenseData.publicSigns) || commonSenseData.publicSigns.length < 6) {
  errors.push('publicSigns 标识少于 6 个');
} else {
  commonSenseData.publicSigns.forEach((sign, i) => {
    if (!sign.id || !sign.name || !sign.meaning || !sign.childrenRule) {
      errors.push(`公共标识第 ${i + 1} 项 (${sign.id || '未知'}) 缺少必要字段`);
    }
  });
}

// 4. 验证垃圾分类
if (!Array.isArray(commonSenseData.trashClassification) || commonSenseData.trashClassification.length !== 4) {
  errors.push('trashClassification 必须为 4 大分类');
} else {
  commonSenseData.trashClassification.forEach((cat) => {
    if (!cat.id || !cat.name || !cat.chant || !Array.isArray(cat.examples) || cat.examples.length < 3) {
      errors.push(`垃圾分类 ${cat.id || '未知'} 缺少口诀或示例列表不足`);
    }
  });
}

// 5. 验证健康习惯
if (!Array.isArray(commonSenseData.healthHabits) || commonSenseData.healthHabits.length < 3) {
  errors.push('healthHabits 习惯列表少于 3 项');
}

// 6. 验证题库
if (!Array.isArray(commonSenseData.quiz) || commonSenseData.quiz.length < 6) {
  errors.push('quiz 题库少于 6 题');
} else {
  commonSenseData.quiz.forEach((q, i) => {
    if (!q.question || !Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`第 ${i + 1} 题选项不足 4 个`);
    }
    if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) {
      errors.push(`第 ${i + 1} 题 answerIndex 非法`);
    }
    if (!q.explanation) {
      errors.push(`第 ${i + 1} 题缺少解析 explanation`);
    }
  });
}

if (errors.length > 0) {
  console.error('❌ 静态校验失败，发现错误:');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log(`✅ 静态校验 100% 通过！`);
  console.log(`- 应急安全专题: ${commonSenseData.safetyTopics.length} 组`);
  console.log(`- 交通与公共标识: ${commonSenseData.publicSigns.length} 个`);
  console.log(`- 垃圾四大分类: ${commonSenseData.trashClassification.length} 类`);
  console.log(`- 健康生活习惯: ${commonSenseData.healthHabits.length} 套`);
  console.log(`- 亲子生活常识挑战题: ${commonSenseData.quiz.length} 道`);
  process.exit(0);
}
