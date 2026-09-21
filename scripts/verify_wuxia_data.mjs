import { wuxiaClassicsData } from '../src/data/wuxiaClassicsData.js';

console.log('--- 开始静态校验经典武侠小说长卷数据 (wuxiaClassicsData.js) ---');

let errors = [];

// 1. 验证元数据
if (!wuxiaClassicsData.meta || !wuxiaClassicsData.meta.title || !wuxiaClassicsData.meta.couplet) {
  errors.push('缺少 meta.title 或 meta.couplet 对联');
}

// 2. 验证小说列表
if (!Array.isArray(wuxiaClassicsData.novels) || wuxiaClassicsData.novels.length < 5) {
  errors.push('novels 小说数量不足 5 部');
} else {
  const ids = new Set();
  wuxiaClassicsData.novels.forEach((n) => {
    if (!n.id || ids.has(n.id)) errors.push(`小说 id 非法或重复: ${n.id}`);
    ids.add(n.id);

    if (!n.name || !n.era || !Array.isArray(n.protagonists) || n.protagonists.length === 0) {
      errors.push(`小说 ${n.id} 缺少主角或时代背景`);
    }
    if (!Array.isArray(n.coreKungfu) || n.coreKungfu.length === 0) {
      errors.push(`小说 ${n.id} 缺少核心武学绝技`);
    }
    if (!n.storySummary || !n.spiritMeaning) {
      errors.push(`小说 ${n.id} 缺少故事梗概或侠义内涵`);
    }
  });
}

// 3. 验证门派
if (!Array.isArray(wuxiaClassicsData.sects) || wuxiaClassicsData.sects.length < 4) {
  errors.push('sects 门派列表不足 4 个');
}

// 4. 验证题库
if (!Array.isArray(wuxiaClassicsData.quiz) || wuxiaClassicsData.quiz.length < 6) {
  errors.push('quiz 题库少于 6 题');
} else {
  wuxiaClassicsData.quiz.forEach((q, idx) => {
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
  console.log(`- 经典武侠巨著: ${wuxiaClassicsData.novels.length} 部长卷`);
  console.log(`- 武林经典名门: ${wuxiaClassicsData.sects.length} 个`);
  console.log(`- 侠义通识挑战题: ${wuxiaClassicsData.quiz.length} 道`);
  process.exit(0);
}
