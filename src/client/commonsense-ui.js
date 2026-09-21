/**
 * 少儿生活与百科常识宝典客户端交互脚本
 * 支持常识分类切换、标识详细弹窗、垃圾分类趣味投放小测试与安全通识挑战
 */

document.addEventListener('DOMContentLoaded', () => {
  initCategoryTabs();
  initTrashSimulator();
  initQuiz();
  initSignCards();
});

// 1. 分类导航切换
function initCategoryTabs() {
  const tabs = document.querySelectorAll('.cs-filter-tab');
  const sections = document.querySelectorAll('.cs-module-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetCat = tab.getAttribute('data-cat');
      sections.forEach(sec => {
        const secCat = sec.getAttribute('data-section');
        if (targetCat === 'all' || targetCat === secCat) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });
    });
  });
}

// 2. 垃圾分类投放互动体验小游戏
function initTrashSimulator() {
  const itemBtns = document.querySelectorAll('.trash-sim-item');
  const binBtns = document.querySelectorAll('.trash-sim-bin');
  const resultMsg = document.getElementById('trash-sim-result');

  let selectedItem = null;

  itemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      itemBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedItem = {
        name: btn.getAttribute('data-item'),
        correctCategory: btn.getAttribute('data-cat')
      };
      if (resultMsg) {
        resultMsg.innerHTML = `已选中 <b>${selectedItem.name}</b>，请点击下方对应的分类垃圾桶投放！`;
        resultMsg.className = 'trash-result-box active';
      }
    });
  });

  binBtns.forEach(bin => {
    bin.addEventListener('click', () => {
      if (!selectedItem) {
        if (resultMsg) {
          resultMsg.innerHTML = '👉 请先在上方点击选择一个日常垃圾物品！';
          resultMsg.className = 'trash-result-box warn';
        }
        return;
      }

      const binCat = bin.getAttribute('data-cat');
      if (binCat === selectedItem.correctCategory) {
        if (resultMsg) {
          resultMsg.innerHTML = `🎉 <b>投放正确！</b>【${selectedItem.name}】属于【${bin.querySelector('.bin-name').textContent}】！保护环境，为你点赞！`;
          resultMsg.className = 'trash-result-box success';
        }
      } else {
        if (resultMsg) {
          resultMsg.innerHTML = `❌ <b>投放有误哦！</b>【${selectedItem.name}】不属于这个桶，再仔细想想口诀吧！`;
          resultMsg.className = 'trash-result-box wrong';
        }
      }
    });
  });
}

// 3. 标识卡片交互
function initSignCards() {
  const signCards = document.querySelectorAll('.cs-sign-card');
  signCards.forEach(card => {
    card.addEventListener('click', () => {
      const meaning = card.getAttribute('data-meaning');
      const rule = card.getAttribute('data-rule');
      const name = card.getAttribute('data-name');
      
      const modal = document.getElementById('cs-sign-modal');
      if (!modal) return;
      document.getElementById('modal-sign-name').textContent = name;
      document.getElementById('modal-sign-meaning').textContent = meaning;
      document.getElementById('modal-sign-rule').textContent = rule;
      modal.classList.add('active');
    });
  });

  const closeBtn = document.getElementById('btn-close-sign-modal');
  const modal = document.getElementById('cs-sign-modal');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

// 4. 亲子安全常识挑战赛
function initQuiz() {
  const quizModal = document.getElementById('cs-quiz-modal');
  const openQuizBtn = document.getElementById('btn-open-cs-quiz');
  const closeQuizBtn = document.getElementById('btn-close-cs-quiz');
  const submitBtn = document.getElementById('btn-submit-cs-quiz');
  const resetBtn = document.getElementById('btn-reset-cs-quiz');
  const scoreCard = document.getElementById('cs-quiz-score-card');

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

  const optionBtns = document.querySelectorAll('.cs-quiz-opt');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.cs-quiz-card');
      if (!parent) return;
      parent.querySelectorAll('.cs-quiz-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      let score = 0;
      const cards = document.querySelectorAll('.cs-quiz-card');

      cards.forEach(card => {
        const correctIndex = parseInt(card.getAttribute('data-correct'), 10);
        const selected = card.querySelector('.cs-quiz-opt.selected');
        const feedback = card.querySelector('.cs-quiz-feedback');

        if (selected) {
          const chosenIndex = parseInt(selected.getAttribute('data-index'), 10);
          if (chosenIndex === correctIndex) {
            score++;
            card.classList.add('correct');
            card.classList.remove('wrong');
            if (feedback) {
              feedback.innerHTML = `✅ <b>回答正确！</b> ${card.getAttribute('data-expl')}`;
              feedback.style.display = 'block';
            }
          } else {
            card.classList.add('wrong');
            card.classList.remove('correct');
            if (feedback) {
              feedback.innerHTML = `❌ <b>回答错误。</b> ${card.getAttribute('data-expl')}`;
              feedback.style.display = 'block';
            }
          }
        } else {
          card.classList.add('wrong');
          if (feedback) {
            feedback.innerHTML = `⚠️ <b>未作答。</b> 正确答案为选项 ${['A','B','C','D'][correctIndex]}。${card.getAttribute('data-expl')}`;
            feedback.style.display = 'block';
          }
        }
      });

      if (scoreCard) {
        scoreCard.style.display = 'block';
        const total = cards.length;
        const percent = Math.round((score / total) * 100);
        scoreCard.innerHTML = `
          <div class="score-badge">🌟 安全挑战得分：${score} / ${total}（准确率 ${percent}%）</div>
          <p class="score-honor">${score === total ? '🎉 满分通关！授予【🛡️ 平安与生活百科小院士】荣誉称号！' : score >= 5 ? '👏 表现出色！安全意识非常棒，获得【平安安全小能手】勋章！' : '💪 生命安全大如天，把错题多读两遍，再次挑战吧！'}</p>
        `;
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.cs-quiz-opt').forEach(b => b.classList.remove('selected'));
      document.querySelectorAll('.cs-quiz-card').forEach(c => {
        c.classList.remove('correct', 'wrong');
        const fb = c.querySelector('.cs-quiz-feedback');
        if (fb) fb.style.display = 'none';
      });
      if (scoreCard) scoreCard.style.display = 'none';
    });
  }
}
