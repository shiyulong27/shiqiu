/**
 * 智慧博弈与经典棋类通识客户端交互脚本
 * 支持棋种切换、棋盘视觉渲染、走法口诀点读与亲子博弈答题
 */

document.addEventListener('DOMContentLoaded', () => {
  initGameTabs();
  initQuiz();
  initChantSpeech();
});

// 1. 棋类切换
function initGameTabs() {
  const tabs = document.querySelectorAll('.chess-game-tab');
  const cards = document.querySelectorAll('.chess-game-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-game');
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

// 2. 口诀语音朗读
function initChantSpeech() {
  const chantBoxes = document.querySelectorAll('.chess-chant-item');
  chantBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const chant = box.querySelector('.chant-text')?.textContent;
      if (!chant) return;

      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(chant);
      u.lang = 'zh-CN';
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    });
  });
}

// 3. 亲子棋类通识挑战赛
function initQuiz() {
  const quizModal = document.getElementById('chess-quiz-modal');
  const openQuizBtn = document.getElementById('btn-open-chess-quiz');
  const closeQuizBtn = document.getElementById('btn-close-chess-quiz');
  const submitBtn = document.getElementById('btn-submit-chess-quiz');
  const resetBtn = document.getElementById('btn-reset-chess-quiz');
  const scoreCard = document.getElementById('chess-quiz-score-card');

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

  const optionBtns = document.querySelectorAll('.chess-quiz-opt');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.chess-quiz-card');
      if (!parent) return;
      parent.querySelectorAll('.chess-quiz-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      let score = 0;
      const cards = document.querySelectorAll('.chess-quiz-card');

      cards.forEach(card => {
        const correctIndex = parseInt(card.getAttribute('data-correct'), 10);
        const selected = card.querySelector('.chess-quiz-opt.selected');
        const feedback = card.querySelector('.chess-quiz-feedback');

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
          <div class="score-badge">🌟 棋类通识测评成绩：${score} / ${total}（得分率 ${percent}%）</div>
          <p class="score-honor">${score === total ? '🎉 太精彩了！满分通关！授予【♟️ 华夏棋道与博弈小宗师】至高荣誉！' : score >= 5 ? '👏 表现不凡！通晓中外弈理，获得【棋艺博弈探索者】勋章！' : '💪 胜固欣然败亦喜，复盘多思索，再接再厉再试一次！'}</p>
        `;
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.chess-quiz-opt').forEach(b => b.classList.remove('selected'));
      document.querySelectorAll('.chess-quiz-card').forEach(c => {
        c.classList.remove('correct', 'wrong');
        const fb = c.querySelector('.chess-quiz-feedback');
        if (fb) fb.style.display = 'none';
      });
      if (scoreCard) scoreCard.style.display = 'none';
    });
  }
}
