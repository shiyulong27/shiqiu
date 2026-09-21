/**
 * math-games-ui.js
 * 数学思维乐园 · 24点速算神投手与趣味益智大挑战客户端控制器
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.MATH_GAMES_DATA;
  if (!data) return;

  // View Switcher
  const tabTwentyFour = document.getElementById('tab-twentyfour');
  const tabMatchstick = document.getElementById('tab-matchstick');
  const tabSpeedCalc = document.getElementById('tab-speedcalc');

  const viewTwentyFour = document.getElementById('view-twentyfour');
  const viewMatchstick = document.getElementById('view-matchstick');
  const viewSpeedCalc = document.getElementById('view-speedcalc');

  // Modals
  const tricksModal = document.getElementById('tricks-modal');
  const btnOpenTricks = document.getElementById('btn-open-tricks');
  const btnCloseTricks = document.getElementById('btn-close-tricks');

  const quizModal = document.getElementById('math-quiz-modal');
  const btnOpenQuiz = document.getElementById('btn-open-math-quiz');
  const btnCloseQuiz = document.getElementById('btn-close-math-quiz');

  // 1. 视图切换
  function switchView(v) {
    [tabTwentyFour, tabMatchstick, tabSpeedCalc].forEach(t => t.classList.remove('active'));
    [viewTwentyFour, viewMatchstick, viewSpeedCalc].forEach(s => s.classList.remove('active'));

    if (v === 'twentyfour') {
      tabTwentyFour.classList.add('active');
      viewTwentyFour.classList.add('active');
    } else if (v === 'matchstick') {
      tabMatchstick.classList.add('active');
      viewMatchstick.classList.add('active');
    } else {
      tabSpeedCalc.classList.add('active');
      viewSpeedCalc.classList.add('active');
    }
  }

  tabTwentyFour.addEventListener('click', () => switchView('twentyfour'));
  tabMatchstick.addEventListener('click', () => switchView('matchstick'));
  tabSpeedCalc.addEventListener('click', () => switchView('speedcalc'));

  // 2. 🎴 24 点速算神投手核心状态机
  let currentLevel = 'bronze';
  let currentPuzzleIndex = 0;
  let currentCards = [];
  let currentHint = '';
  let currentSolutions = [];
  let userFormulaTokens = []; // [{ type: 'card', val: 3, cardIndex: 0 } | { type: 'op', val: '+' }]
  let usedCardIndices = new Set();
  let completedCount = 0;

  const cardsRow = document.getElementById('tf-cards-row');
  const formulaScreen = document.getElementById('tf-formula-screen');
  const evalResult = document.getElementById('tf-eval-result');
  const hintBox = document.getElementById('tf-hint-box');
  const hintText = document.getElementById('tf-hint-text');
  const solutionBox = document.getElementById('tf-solution-box');
  const solutionsList = document.getElementById('tf-solutions-list');

  const suits = [
    { icon: '♠️', isRed: false },
    { icon: '♥️', isRed: true },
    { icon: '♣️', isRed: false },
    { icon: '♦️', isRed: true }
  ];

  function load24Puzzle() {
    const levelPuzzles = data.puzzles.filter(p => p.level === currentLevel);
    const puzzle = levelPuzzles[currentPuzzleIndex % levelPuzzles.length];

    currentCards = [...puzzle.cards];
    currentHint = puzzle.hint;
    currentSolutions = [...puzzle.solutions];

    resetFormula();
    renderCards();

    hintBox.style.display = 'none';
    solutionBox.style.display = 'none';
  }

  function renderCards() {
    cardsRow.innerHTML = '';
    currentCards.forEach((val, idx) => {
      const suit = suits[idx % suits.length];
      const card = document.createElement('div');
      card.className = `poker-card ${suit.isRed ? 'red-suit' : 'black-suit'} ${usedCardIndices.has(idx) ? 'used' : ''}`;
      card.dataset.index = idx;
      card.innerHTML = `
        <div class="card-val-corner">${val}</div>
        <div class="card-suit-center">${suit.icon}</div>
        <div class="card-val-corner" style="text-align: right;">${val}</div>
      `;

      card.addEventListener('click', () => {
        if (usedCardIndices.has(idx)) return;
        // 添加卡牌到算式
        userFormulaTokens.push({ type: 'card', val: val, cardIndex: idx });
        usedCardIndices.add(idx);
        updateFormulaView();
        card.classList.add('used');
      });

      cardsRow.appendChild(card);
    });
  }

  function resetFormula() {
    userFormulaTokens = [];
    usedCardIndices.clear();
    updateFormulaView();
    const allCards = document.querySelectorAll('.poker-card');
    allCards.forEach(c => c.classList.remove('used'));
  }

  function updateFormulaView() {
    if (userFormulaTokens.length === 0) {
      formulaScreen.innerHTML = '<span class="formula-placeholder">点击下方卡牌和运算符号组装算式...</span>';
      evalResult.textContent = '当前结果：—';
      evalResult.classList.remove('correct');
      return;
    }

    const str = userFormulaTokens.map(t => t.val).join(' ');
    formulaScreen.textContent = str;

    // 尝试安全计算求值
    try {
      // 替换 × 和 ÷
      const expr = str.replace(/×/g, '*').replace(/÷/g, '/');
      // 简单防止非法字符执行
      if (/^[0-9+\-*/().\s]+$/.test(expr)) {
        // eslint-disable-next-line no-eval
        const res = Function(`'use strict'; return (${expr})`)();
        if (typeof res === 'number' && !isNaN(res) && isFinite(res)) {
          const rounded = Math.round(res * 100) / 100;
          const allUsed = (usedCardIndices.size === 4);

          if (Math.abs(res - 24) < 1e-6 && allUsed) {
            evalResult.innerHTML = `当前结果：<strong>24</strong> 🎉 恭喜！完美凑出 24 点！`;
            evalResult.classList.add('correct');
            completedCount++;
            document.getElementById('tf-score').textContent = completedCount;
          } else {
            evalResult.textContent = `当前结果：${rounded}${allUsed ? ' (未达 24 点，再想想哦～)' : ' (还需使用未出的卡牌)'}`;
            evalResult.classList.remove('correct');
          }
        } else {
          evalResult.textContent = '算式输入中...';
          evalResult.classList.remove('correct');
        }
      }
    } catch {
      evalResult.textContent = '算式输入中...';
      evalResult.classList.remove('correct');
    }
  }

  // 符号按钮事件绑定
  document.querySelectorAll('.calc-btn.btn-op').forEach(btn => {
    btn.addEventListener('click', () => {
      const op = btn.getAttribute('data-char');
      userFormulaTokens.push({ type: 'op', val: op });
      updateFormulaView();
    });
  });

  // 退格
  document.getElementById('btn-tf-backspace').addEventListener('click', () => {
    if (userFormulaTokens.length === 0) return;
    const popped = userFormulaTokens.pop();
    if (popped.type === 'card') {
      usedCardIndices.delete(popped.cardIndex);
      const cardEl = document.querySelector(`.poker-card[data-index="${popped.cardIndex}"]`);
      if (cardEl) cardEl.classList.remove('used');
    }
    updateFormulaView();
  });

  // 清空
  document.getElementById('btn-tf-clear').addEventListener('click', resetFormula);

  // 提示与解法
  document.getElementById('btn-tf-hint').addEventListener('click', () => {
    hintText.textContent = currentHint;
    hintBox.style.display = (hintBox.style.display === 'none') ? 'flex' : 'none';
  });

  document.getElementById('btn-tf-solution').addEventListener('click', () => {
    solutionsList.innerHTML = '';
    currentSolutions.forEach(sol => {
      const li = document.createElement('li');
      li.textContent = sol;
      solutionsList.appendChild(li);
    });
    solutionBox.style.display = (solutionBox.style.display === 'none') ? 'block' : 'none';
  });

  // 等级切换
  document.querySelectorAll('.level-pill:not(.btn-random-deal)').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.level-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      currentLevel = btn.getAttribute('data-level');
      currentPuzzleIndex = 0;
      load24Puzzle();
    });
  });

  // 随机发牌
  document.getElementById('btn-random-deal').addEventListener('click', () => {
    document.querySelectorAll('.level-pill').forEach(p => p.classList.remove('active'));
    document.getElementById('btn-random-deal').classList.add('active');
    currentPuzzleIndex = Math.floor(Math.random() * data.puzzles.length);
    const puzzle = data.puzzles[currentPuzzleIndex];
    currentLevel = puzzle.level;
    currentCards = [...puzzle.cards];
    currentHint = puzzle.hint;
    currentSolutions = [...puzzle.solutions];
    resetFormula();
    renderCards();
    hintBox.style.display = 'none';
    solutionBox.style.display = 'none';
  });

  // 初始化 24 点游戏
  load24Puzzle();

  // 3. 🥢 火柴棒等式展开解密
  document.querySelectorAll('.btn-reveal-magic').forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.getAttribute('data-id');
      const solEl = document.getElementById(`sol-${pId}`);
      if (solEl) {
        solEl.style.display = (solEl.style.display === 'none') ? 'block' : 'none';
      }
    });
  });

  // 4. ⚡ 巧算速算实时演练实验室
  // 头同尾合十
  document.getElementById('btn-calc-tt').addEventListener('click', () => {
    const v1 = parseInt(document.getElementById('input-tt-1').value, 10) || 0;
    const v2 = parseInt(document.getElementById('input-tt-2').value, 10) || 0;
    const box = document.getElementById('output-tt-box');

    const h1 = Math.floor(v1 / 10);
    const t1 = v1 % 10;
    const h2 = Math.floor(v2 / 10);
    const t2 = v2 % 10;

    if (h1 !== h2 || (t1 + t2 !== 10)) {
      box.innerHTML = `
        <div class="step-line" style="color: #dc2626;">⚠️ 提示：输入的两个数不满足“十位相同且个位相加等于10”（例如 23 与 27，46 与 44）。</div>
        <div class="result-line" style="color: #475569;">普通乘法计算：${v1} × ${v2} = <strong>${v1 * v2}</strong></div>
      `;
      return;
    }

    const headProd = h1 * (h1 + 1);
    const tailProd = t1 * t2;
    const tailStr = (tailProd < 10) ? `0${tailProd}` : `${tailProd}`;
    const result = headProd * 100 + tailProd;

    box.innerHTML = `
      <div class="step-line">① 前两位：头 × (头 + 1) = ${h1} × (${h1} + 1) = <strong>${headProd}</strong></div>
      <div class="step-line">② 后两位：尾 × 尾 = ${t1} × ${t2} = <strong>${tailStr}</strong></div>
      <div class="result-line">拼合口算答案：<strong>${result}</strong> 🎉 (${v1} × ${v2} = ${result})</div>
    `;
  });

  // 任意数 × 11
  document.getElementById('btn-calc-e11').addEventListener('click', () => {
    const num = parseInt(document.getElementById('input-e11').value, 10) || 0;
    const box = document.getElementById('output-e11-box');
    const result = num * 11;

    if (num >= 10 && num <= 99) {
      const d1 = Math.floor(num / 10);
      const d2 = num % 10;
      const sum = d1 + d2;
      const hasCarry = (sum >= 10);

      box.innerHTML = `
        <div class="step-line">① 两头拉开：首位 <strong>${d1}</strong>，末位 <strong>${d2}</strong></div>
        <div class="step-line">② 中间相加：${d1} + ${d2} = <strong>${sum}</strong>${hasCarry ? ' (满十向百位进 1)' : ''}</div>
        <div class="result-line">拼合口算答案：<strong>${result}</strong> 🎉 (${num} × 11 = ${result})</div>
      `;
    } else {
      box.innerHTML = `
        <div class="step-line">从右往左两两相加法计算：${num} × 11</div>
        <div class="result-line">口算答案：<strong>${result}</strong> 🎉</div>
      `;
    }
  });

  // 5. 模态框交互
  btnOpenTricks.addEventListener('click', () => {
    tricksModal.style.display = 'flex';
  });
  btnCloseTricks.addEventListener('click', () => {
    tricksModal.style.display = 'none';
  });
  tricksModal.addEventListener('click', (e) => {
    if (e.target === tricksModal) tricksModal.style.display = 'none';
  });

  // 6. 数学小天才思维大挑战游戏
  let quizIndex = 0;
  let quizScore = 0;
  let quizQuestions = [];

  function startMathQuiz() {
    const shuffled = [...data.quizzes].sort(() => 0.5 - Math.random());
    quizQuestions = shuffled.slice(0, 5);
    quizIndex = 0;
    quizScore = 0;

    document.getElementById('math-quiz-complete-box').style.display = 'none';
    document.getElementById('math-quiz-feedback-box').style.display = 'none';
    document.getElementById('math-quiz-options-wrap').style.display = 'grid';
    document.querySelector('.quiz-status-row').style.display = 'flex';
    document.querySelector('.quiz-question-box').style.display = 'block';

    renderMathQuestion();
    quizModal.style.display = 'flex';
  }

  function renderMathQuestion() {
    const q = quizQuestions[quizIndex];
    if (!q) return;

    document.getElementById('math-quiz-progress').textContent = `第 ${quizIndex + 1} / ${quizQuestions.length} 题`;
    document.getElementById('math-quiz-score').textContent = `得分：${quizScore} 分`;
    document.getElementById('math-quiz-question-text').textContent = q.question;

    const wrap = document.getElementById('math-quiz-options-wrap');
    wrap.innerHTML = '';
    document.getElementById('math-quiz-feedback-box').style.display = 'none';

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleMathAnswer(opt, btn));
      wrap.appendChild(btn);
    });
  }

  function handleMathAnswer(selectedOpt, clickedBtn) {
    const q = quizQuestions[quizIndex];
    const isCorrect = (selectedOpt === q.answer);

    const allBtns = document.querySelectorAll('.quiz-opt-btn');
    allBtns.forEach(b => {
      b.disabled = true;
      if (b.textContent === q.answer) b.classList.add('correct');
    });

    if (isCorrect) {
      clickedBtn.classList.add('correct');
      quizScore += 20;
      document.getElementById('math-quiz-score').textContent = `得分：${quizScore} 分`;
    } else {
      clickedBtn.classList.add('wrong');
    }

    const feedbackBox = document.getElementById('math-quiz-feedback-box');
    const feedbackText = document.getElementById('math-quiz-feedback-text');
    feedbackText.innerHTML = `<strong>${isCorrect ? '🎉 恭喜答对！' : '💡 很遗憾答错了～'}</strong> ${q.explanation}`;
    feedbackBox.style.display = 'flex';
  }

  document.getElementById('btn-math-quiz-next').addEventListener('click', () => {
    quizIndex++;
    if (quizIndex < quizQuestions.length) {
      renderMathQuestion();
    } else {
      document.getElementById('math-quiz-options-wrap').style.display = 'none';
      document.querySelector('.quiz-status-row').style.display = 'none';
      document.querySelector('.quiz-question-box').style.display = 'none';
      document.getElementById('math-quiz-feedback-box').style.display = 'none';

      const completeBox = document.getElementById('math-quiz-complete-box');
      document.getElementById('math-quiz-final-score').textContent = `全套 5 题作答完毕，你获得了 ${quizScore} 分！`;
      completeBox.style.display = 'block';
    }
  });

  document.getElementById('btn-math-quiz-restart').addEventListener('click', startMathQuiz);
  btnOpenQuiz.addEventListener('click', startMathQuiz);
  btnCloseQuiz.addEventListener('click', () => {
    quizModal.style.display = 'none';
  });
  quizModal.addEventListener('click', (e) => {
    if (e.target === quizModal) quizModal.style.display = 'none';
  });

  // ESC 键关闭所有模态框
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      tricksModal.style.display = 'none';
      quizModal.style.display = 'none';
    }
  });
});
