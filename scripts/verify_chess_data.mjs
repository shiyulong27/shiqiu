import { chessGamesData } from '../src/data/chessGamesData.js';

console.log('--- 开始静态校验经典棋类通识数据 (chessGamesData.js) ---');

let errors = [];

// 1. 验证元数据
if (!chessGamesData.meta || !chessGamesData.meta.title) {
  errors.push('缺少 meta.title');
}

// 2. 验证棋类列表
if (!Array.isArray(chessGamesData.games) || chessGamesData.games.length < 5) {
  errors.push('games 棋类列表少于 5 种');
} else {
  const ids = new Set();
  chessGamesData.games.forEach((g) => {
    if (!g.id || ids.has(g.id)) errors.push(`棋类 id 非法或重复: ${g.id}`);
    ids.add(g.id);

    if (!g.name || !g.board || !Array.isArray(g.coreRules) || g.coreRules.length === 0) {
      errors.push(`棋类 ${g.id} 缺少规则或棋盘定义`);
    }
    if (!Array.isArray(g.classicChants) || g.classicChants.length === 0) {
      errors.push(`棋类 ${g.id} 缺少经典走法口诀`);
    }
  });
}

// 3. 验证题库
if (!Array.isArray(chessGamesData.quiz) || chessGamesData.quiz.length < 6) {
  errors.push('quiz 题库少于 6 题');
} else {
  chessGamesData.quiz.forEach((q, idx) => {
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
  console.log(`- 经典棋类体系: ${chessGamesData.games.length} 种经典棋艺`);
  console.log(`- 经典博弈挑战题: ${chessGamesData.quiz.length} 道`);
  process.exit(0);
}
