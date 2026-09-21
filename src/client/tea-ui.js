/**
 * 中华茶文化全景百科客户端交互脚本
 * 支持六大茶类切换、五步辨茶法放大镜、产区与价格档次速查及茶道挑战赛
 */

document.addEventListener('DOMContentLoaded', () => {
  initTeaCategoryTabs();
  initEvalStepCards();
  initQuiz();
});

// 1. 六大茶类切换
function initTeaCategoryTabs() {
  const tabs = document.querySelectorAll('.tea-cat-tab');
  const cards = document.querySelectorAll('.tea-cat-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-cat');
      cards.forEach(card => {
        const cardId = card.getAttribute('data-id');
        if (targetId === 'all' || targetId === cardId) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 2. 辨茶五步法卡片互动
function initEvalStepCards() {
  const stepCards = document.querySelectorAll('.tea-eval-card');
  stepCards.forEach(card => {
    card.addEventListener('click', () => {
      stepCards.forEach(c => c.classList.remove('highlighted'));
      card.classList.add('highlighted');
    });
  });
}

// 3. 亲子茶道通识挑战赛
function initQuiz() {
  const quizModal = document.getElementById('tea-quiz-modal');
  const openQuizBtn = document.getElementById('btn-open-tea-quiz');
  const closeQuizBtn = document.getElementById('btn-close-tea-quiz');
  const submitBtn = document.getElementById('btn-submit-tea-quiz');
  const resetBtn = document.getElementById('btn-reset-tea-quiz');
  const scoreCard = document.getElementById('tea-quiz-score-card');

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

  const optionBtns = document.querySelectorAll('.tea-quiz-opt');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.tea-quiz-card');
      if (!parent) return;
      parent.querySelectorAll('.tea-quiz-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      let score = 0;
      const cards = document.querySelectorAll('.tea-quiz-card');

      cards.forEach(card => {
        const correctIndex = parseInt(card.getAttribute('data-correct'), 10);
        const selected = card.querySelector('.tea-quiz-opt.selected');
        const feedback = card.querySelector('.tea-quiz-feedback');

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
          <div class="score-badge">🌟 茶道通识测评得分：${score} / ${total}（得分率 ${percent}%）</div>
          <p class="score-honor">${score === total ? '🎉 满室茶香！满分通关！授予【🍵 中华茶道与品茗小院士】至高荣誉！' : score >= 5 ? '👏 表现优异！明察六大茶系与辨茶之道，获得【茶韵小茶人】勋章！' : '💪 茶道修心，静水流深，品一杯清茶，再来挑战吧！'}</p>
        `;
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.tea-quiz-opt').forEach(b => b.classList.remove('selected'));
      document.querySelectorAll('.tea-quiz-card').forEach(c => {
        c.classList.remove('correct', 'wrong');
        const fb = c.querySelector('.tea-quiz-feedback');
        if (fb) fb.style.display = 'none';
      });
      if (scoreCard) scoreCard.style.display = 'none';
    });
  }
}
