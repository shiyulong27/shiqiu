import { rubikCubeData } from '../src/data/rubikCubeData.js';

console.log('--- 开始静态校验空间思维与三阶魔方数据 (rubikCubeData.js) ---');

let errors = [];

// 1. 验证元数据
if (!rubikCubeData.meta || !rubikCubeData.meta.title) {
  errors.push('缺少 meta.title');
}

// 2. 验证魔方构造
if (!rubikCubeData.cubeStructure || !rubikCubeData.cubeStructure.centerBlocks) {
  errors.push('缺少 cubeStructure 构造说明');
}

// 3. 验证转动代号
if (!Array.isArray(rubikCubeData.notationList) || rubikCubeData.notationList.length < 6) {
  errors.push('notationList 转动代号列表不足');
} else {
  rubikCubeData.notationList.forEach((n) => {
    if (!n.code || !n.name || !n.desc) {
      errors.push(`转动代码 ${n.code || '未知'} 缺少必要字段`);
    }
  });
}

// 4. 验证七步层先法
if (!Array.isArray(rubikCubeData.layerSteps) || rubikCubeData.layerSteps.length !== 7) {
  errors.push(`layerSteps 必须精确包含 7 步，当前为 ${rubikCubeData.layerSteps?.length}`);
} else {
  rubikCubeData.layerSteps.forEach((st, idx) => {
    if (st.stepNum !== idx + 1) {
      errors.push(`第 ${idx + 1} 步 stepNum 序号不匹配: ${st.stepNum}`);
    }
    if (!st.title || !st.goal || !st.chant || !st.detail || !st.formulaName) {
      errors.push(`第 ${idx + 1} 步缺少核心教学字段`);
    }
  });
}

// 5. 验证题库
if (!Array.isArray(rubikCubeData.quiz) || rubikCubeData.quiz.length < 6) {
  errors.push('quiz 题库少于 6 题');
} else {
  rubikCubeData.quiz.forEach((q, idx) => {
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
  console.log(`- 转动代码符号: ${rubikCubeData.notationList.length} 组`);
  console.log(`- 层先法还原步骤: ${rubikCubeData.layerSteps.length} 步通关`);
  console.log(`- 空间赋能价值: ${rubikCubeData.spatialBenefits.length} 项`);
  console.log(`- 空间与魔方挑战题: ${rubikCubeData.quiz.length} 道`);
  process.exit(0);
}
