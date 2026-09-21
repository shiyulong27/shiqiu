/**
 * 侠义千秋 · 华夏经典武侠小说长卷客户端交互脚本
 * 支持小说卷轴切换、华山论剑绝技详情、侠义金句语音朗读与武侠通识答题
 */

document.addEventListener('DOMContentLoaded', () => {
  initNovelTabs();
  initQuoteSpeech();
  initQuiz();
});

// 1. 小说卷轴切换
function initNovelTabs() {
  const tabs = document.querySelectorAll('.wuxia-novel-tab');
  const cards = document.querySelectorAll('.wuxia-novel-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-novel');
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

// 2. 侠义金句朗读
function initQuoteSpeech() {
  const quoteBoxes = document.querySelectorAll('.wuxia-quote-card');
  quoteBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const quote = box.querySelector('.quote-text')?.textContent;
      if (!quote) return;

      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(quote);
      u.lang = 'zh-CN';
      u.rate = 0.88;
      window.speechSynthesis.speak(u);
    });
  });
}

// 3. 亲子武侠通识挑战赛
function initQuiz() {
  const quizModal = document.getElementById('wuxia-quiz-modal');
  const openQuizBtn = document.getElementById('btn-open-wuxia-quiz');
  const closeQuizBtn = document.getElementById('btn-close-wuxia-quiz');
  const submitBtn = document.getElementById('btn-submit-wuxia-quiz');
  const resetBtn = document.getElementById('btn-reset-wuxia-quiz');
  const scoreCard = document.getElementById('wuxia-quiz-score-card');

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

  const optionBtns = document.querySelectorAll('.wuxia-quiz-opt');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.wuxia-quiz-card');
      if (!parent) return;
      parent.querySelectorAll('.wuxia-quiz-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      let score = 0;
      const cards = document.querySelectorAll('.wuxia-quiz-card');

      cards.forEach(card => {
        const correctIndex = parseInt(card.getAttribute('data-correct'), 10);
        const selected = card.querySelector('.wuxia-quiz-opt.selected');
        const feedback = card.querySelector('.wuxia-quiz-feedback');

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
          <div class="score-badge">🌟 侠义通识测评得分：${score} / ${total}（得分率 ${percent}%）</div>
          <p class="score-honor">${score === total ? '🎉 豪气干云！满分通关！授予【🗡️ 华夏侠义精神小宗师】至高荣誉！' : score >= 5 ? '👏 意气风发！深解江湖浩然正气，获得【江湖侠客小名仕】勋章！' : '💪 侠之大者为国为民，重温经典故事，再来一战！'}</p>
        `;
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.wuxia-quiz-opt').forEach(b => b.classList.remove('selected'));
      document.querySelectorAll('.wuxia-quiz-card').forEach(c => {
        c.classList.remove('correct', 'wrong');
        const fb = c.querySelector('.wuxia-quiz-feedback');
        if (fb) fb.style.display = 'none';
      });
      if (scoreCard) scoreCard.style.display = 'none';
    });
  }
}
