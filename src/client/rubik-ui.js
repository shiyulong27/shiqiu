/**
 * 空间思维与三阶魔方立体乐园客户端交互脚本
 * 支持七步层先法分步切换、3D 模拟器状态预览、旋转代码试炼与空间思维答题
 */

document.addEventListener('DOMContentLoaded', () => {
  initStepNavigator();
  initFormulaButtons();
  initQuiz();
});

// 1. 七步层先法导航与 3D 状态切换
function initStepNavigator() {
  const stepBtns = document.querySelectorAll('.rubik-step-tab');
  const stepCards = document.querySelectorAll('.rubik-step-card');
  const prevBtn = document.getElementById('btn-prev-step');
  const nextBtn = document.getElementById('btn-next-step');
  const stagePreview = document.getElementById('rubik-stage-preview');

  let currentStep = 1;
  const totalSteps = stepCards.length;

  function setStep(stepNum) {
    currentStep = stepNum;
    stepBtns.forEach(btn => {
      const num = parseInt(btn.getAttribute('data-step'), 10);
      if (num === currentStep) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    stepCards.forEach(card => {
      const num = parseInt(card.getAttribute('data-step'), 10);
      if (num === currentStep) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // 更新 3D 状态预览标签
    if (stagePreview) {
      const stageMap = {
        1: { name: "🌼 第一步：黄心白瓣小白菊", color: "#facc15" },
        2: { name: "➕ 第二步：底层白色十字与侧边对齐", color: "#ffffff" },
        3: { name: "🧱 第三步：第一层全白与侧面T字", color: "#38bdf8" },
        4: { name: "🏰 第四步：前两层完全复原", color: "#4ade80" },
        5: { name: "🌟 第五步：顶层黄色十字", color: "#eab308" },
        6: { name: "🐟 第六步：顶面小鱼全黄面", color: "#f59e0b" },
        7: { name: "🎉 第七步：六面完全复原！", color: "#10b981" }
      };
      const info = stageMap[currentStep] || stageMap[1];
      stagePreview.textContent = info.name;
    }

    if (prevBtn) prevBtn.disabled = currentStep === 1;
    if (nextBtn) nextBtn.disabled = currentStep === totalSteps;
  }

  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const num = parseInt(btn.getAttribute('data-step'), 10);
      setStep(num);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) setStep(currentStep - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < totalSteps) setStep(currentStep + 1);
    });
  }

  setStep(1);
}

// 2. 交互式代码符号试炼
function initFormulaButtons() {
  const codeBtns = document.querySelectorAll('.notation-item-card');
  const testDisplay = document.getElementById('rubik-formula-sequence');

  let sequence = [];

  codeBtns.forEach(card => {
    card.addEventListener('click', () => {
      const code = card.getAttribute('data-code');
      sequence.push(code);
      if (sequence.length > 8) sequence.shift();
      if (testDisplay) {
        testDisplay.textContent = sequence.join('  ');
      }
    });
  });

  const clearBtn = document.getElementById('btn-clear-sequence');
  if (clearBtn && testDisplay) {
    clearBtn.addEventListener('click', () => {
      sequence = [];
      testDisplay.textContent = '点击下方动作卡片组合公式...';
    });
  }
}

// 3. 亲子空间与魔方挑战赛
function initQuiz() {
  const quizModal = document.getElementById('rubik-quiz-modal');
  const openQuizBtn = document.getElementById('btn-open-rubik-quiz');
  const closeQuizBtn = document.getElementById('btn-close-rubik-quiz');
  const submitBtn = document.getElementById('btn-submit-rubik-quiz');
  const resetBtn = document.getElementById('btn-reset-rubik-quiz');
  const scoreCard = document.getElementById('rubik-quiz-score-card');

  if (!quizModal || !openQuizBtn) return;

  openQuizBtn.addEventListener('click', () => {
    quizModal.classList.add('active');
  });

  if (closeQuizBtn) {
    closeQuizBtn.addEventListener('click', () => {
      quizModal.classList.remove('active');
    });
  }

  quizModal.addEventListener('click', (e) => {
    if (e.target === quizModal) quizModal.classList.remove('active');
  });

  const optionBtns = document.querySelectorAll('.rubik-quiz-opt');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.rubik-quiz-card');
      if (!parent) return;
      parent.querySelectorAll('.rubik-quiz-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      let score = 0;
      const cards = document.querySelectorAll('.rubik-quiz-card');

      cards.forEach(card => {
        const correctIndex = parseInt(card.getAttribute('data-correct'), 10);
        const selected = card.querySelector('.rubik-quiz-opt.selected');
        const feedback = card.querySelector('.rubik-quiz-feedback');

        if (selected) {
          const chosenIndex = parseInt(selected.getAttribute('data-index'), 10);
          if (chosenIndex === correctIndex) {
            score++;
            card.classList.add('correct');
            card.classList.remove('wrong');
            if (feedback) {
              feedback.innerHTML = `✅ <b>正确！</b> ${card.getAttribute('data-expl')}`;
              feedback.style.display = 'block';
            }
          } else {
            card.classList.add('wrong');
            card.classList.remove('correct');
            if (feedback) {
              feedback.innerHTML = `❌ <b>不正确。</b> ${card.getAttribute('data-expl')}`;
              feedback.style.display = 'block';
            }
          }
        } else {
          card.classList.add('wrong');
          if (feedback) {
            feedback.innerHTML = `⚠️ <b>未作答。</b> 正确选项为 ${['A','B','C','D'][correctIndex]}。${card.getAttribute('data-expl')}`;
            feedback.style.display = 'block';
          }
        }
      });

      if (scoreCard) {
        scoreCard.style.display = 'block';
        const total = cards.length;
        const percent = Math.round((score / total) * 100);
        scoreCard.innerHTML = `
          <div class="score-badge">🌟 空间思维测评得分：${score} / ${total}（得分率 ${percent}%）</div>
          <p class="score-honor">${score === total ? '🎉 太厉害了！满分通关！授予【🎲 三维空间与魔方小大师】至高荣誉！' : score >= 5 ? '👏 表现优异！三维空间直觉敏锐，获得【空间思维探索者】勋章！' : '💪 多拿真实魔方转一转，亲手感受空间对称，再来挑战吧！'}</p>
        `;
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.rubik-quiz-opt').forEach(b => b.classList.remove('selected'));
      document.querySelectorAll('.rubik-quiz-card').forEach(c => {
        c.classList.remove('correct', 'wrong');
        const fb = c.querySelector('.rubik-quiz-feedback');
        if (fb) fb.style.display = 'none';
      });
      if (scoreCard) scoreCard.style.display = 'none';
    });
  }
}
