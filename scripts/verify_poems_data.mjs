import { poemsData } from '../src/data/poemsData.js';

console.log('=====================================================');
console.log('🔍 校验古诗点读台核心数据集: src/data/poemsData.js');
console.log('=====================================================');

console.log(`✓ 成功载入 ${poemsData.length} 首古诗 (预期: 127 首)`);

let errors = 0;
const idSet = new Set();
const gradeCounts = {};
const themeCounts = {};

poemsData.forEach((poem, idx) => {
  if (!poem.id || !poem.title || !poem.author || !poem.dynasty || !poem.lines) {
    console.error(`❌ [第 ${idx + 1} 首 缺少必要基础字段]: ${poem.id || '无ID'}`);
    errors++;
  }

  if (idSet.has(poem.id)) {
    console.error(`❌ [ID 重复]: ${poem.id}`);
    errors++;
  }
  idSet.add(poem.id);

  gradeCounts[poem.grade] = (gradeCounts[poem.grade] || 0) + 1;
  themeCounts[poem.theme] = (themeCounts[poem.theme] || 0) + 1;

  // 校验每句诗文
  poem.lines.forEach((line, lIdx) => {
    if (!line.text || !line.pinyin || !line.rhythm || !line.tokens) {
      console.error(`❌ [${poem.title} 第 ${lIdx + 1} 句配置不全]`);
      errors++;
    }

    const tokenCharStr = line.tokens.map(t => t.char).join('');
    if (tokenCharStr !== line.text) {
      console.error(`❌ [${poem.title} 第 ${lIdx + 1} 句 token 拼接与 text 不一致]: "${tokenCharStr}" !== "${line.text}"`);
      errors++;
    }
  });

  if (!poem.translation || !poem.appreciation || !poem.keywords || poem.keywords.length === 0) {
    console.error(`❌ [${poem.title} 缺少译文/赏析/词汇注释]`);
    errors++;
  }
});

console.log('\n📊 学段分布统计:');
Object.entries(gradeCounts).forEach(([k, v]) => console.log(`  • ${k}: ${v} 首`));

console.log('\n🎨 主题分布统计:');
Object.entries(themeCounts).forEach(([k, v]) => console.log(`  • ${k}: ${v} 首`));

if (errors > 0) {
  console.error(`\n❌ 数据集校验未通过，共有 ${errors} 处错误！`);
  process.exit(1);
} else {
  console.log('\n🎉 数据集 100% 校验通过！无任何结构或字句不一致问题！');
}
