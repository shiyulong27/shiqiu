/**
 * 生物奥秘与神奇动物王国客户端交互脚本
 * 支持物种分类筛选、即时搜索、物种详卷弹窗、中英双语朗读与亲子问答互动
 */

document.addEventListener('DOMContentLoaded', () => {
  initCategoryFilters();
  initSearch();
  initAnimalModals();
  initQuiz();
  initSpeech();
});

// 1. 分类筛选
function initCategoryFilters() {
  const tabs = document.querySelectorAll('.bio-filter-tab');
  const cards = document.querySelectorAll('.bio-species-card');
  const sections = document.querySelectorAll('.bio-special-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.getAttribute('data-cat');

      // 处理动物卡片过滤
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cat === cardCat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      // 处理植物与人体特殊展区展示
      sections.forEach(sec => {
        const secCat = sec.getAttribute('data-category');
        if (cat === 'all' || cat === secCat) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });
    });
  });
}

// 2. 关键词即时搜索
function initSearch() {
  const searchInput = document.getElementById('bio-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.bio-species-card');

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// 3. 物种详情弹窗与数据渲染
function initAnimalModals() {
  const modal = document.getElementById('bio-detail-modal');
  const closeBtn = document.getElementById('btn-close-bio-detail');
  const cards = document.querySelectorAll('.bio-species-card');

  if (!modal || !closeBtn) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.getAttribute('data-name');
      const pinyin = card.getAttribute('data-pinyin');
      const enName = card.getAttribute('data-en');
      const latin = card.getAttribute('data-latin');
      const badge = card.getAttribute('data-badge');
      const habitat = card.getAttribute('data-habitat');
      const diet = card.getAttribute('data-diet');
      const features = card.getAttribute('data-features');
      const habits = card.getAttribute('data-habits');
      const funFact = card.getAttribute('data-funfact');
      const emoji = card.getAttribute('data-emoji');
      const protection = card.getAttribute('data-protection');

      document.getElementById('modal-bio-emoji').textContent = emoji;
      document.getElementById('modal-bio-title').textContent = `${name} (${pinyin})`;
      document.getElementById('modal-bio-subtitle').textContent = `${enName} · ${latin}`;
      document.getElementById('modal-bio-badge').textContent = badge;
      document.getElementById('modal-bio-protection').textContent = protection;
      document.getElementById('modal-bio-habitat').textContent = habitat;
      document.getElementById('modal-bio-diet').textContent = diet;
      document.getElementById('modal-bio-features').textContent = features;
      document.getElementById('modal-bio-habits').textContent = habits;
      document.getElementById('modal-bio-funfact').textContent = funFact;

      modal.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

// 4. 语音点读支持 (Web Speech API)
function initSpeech() {
  const speakBtn = document.getElementById('btn-bio-speak');
  if (!speakBtn) return;

  speakBtn.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) {
      alert('抱歉，当前浏览器不支持语音合成播放。');
      return;
    }
    const name = document.getElementById('modal-bio-title').textContent.split(' ')[0];
    const funFact = document.getElementById('modal-bio-funfact').textContent;
    const text = `${name}。冷知识：${funFact}`;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  });
}

// 5. 亲子生物通识挑战赛答题交互
function initQuiz() {
  const quizModal = document.getElementById('bio-quiz-modal');
  const openQuizBtn = document.getElementById('btn-open-bio-quiz');
  const closeQuizBtn = document.getElementById('btn-close-bio-quiz');
  const submitBtn = document.getElementById('btn-submit-bio-quiz');
  const resetBtn = document.getElementById('btn-reset-bio-quiz');
  const scoreCard = document.getElementById('bio-quiz-score-card');

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

  // 选项点击高亮
  const optionBtns = document.querySelectorAll('.bio-quiz-opt');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentQuestion = btn.closest('.bio-quiz-card');
      if (!parentQuestion) return;
      parentQuestion.querySelectorAll('.bio-quiz-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // 提交判分
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      let score = 0;
      const cards = document.querySelectorAll('.bio-quiz-card');

      cards.forEach((card) => {
        const correctIndex = parseInt(card.getAttribute('data-correct'), 10);
        const selected = card.querySelector('.bio-quiz-opt.selected');
        const feedback = card.querySelector('.bio-quiz-feedback');

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
            feedback.innerHTML = `⚠️ <b>未作答。</b> 正确答案是选项 ${['A','B','C','D'][correctIndex]}。${card.getAttribute('data-expl')}`;
            feedback.style.display = 'block';
          }
        }
      });

      if (scoreCard) {
        scoreCard.style.display = 'block';
        const total = cards.length;
        const percent = Math.round((score / total) * 100);
        scoreCard.innerHTML = `
          <div class="score-badge">🌟 挑战成绩：${score} / ${total}（得分率 ${percent}%）</div>
          <p class="score-honor">${score === total ? '🎉 满分通关！授予【🌱 生物多样性与神奇动物小博士】至高荣誉！' : score >= 5 ? '👏 表现优异！获得【🌿 未来生命科学小学者】勋章！继续加油！' : '💪 还需多探索大自然哦，温故而知新，再试一次吧！'}</p>
        `;
      }
    });
  }

  // 重置答题
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.bio-quiz-opt').forEach(b => b.classList.remove('selected'));
      document.querySelectorAll('.bio-quiz-card').forEach(c => {
        c.classList.remove('correct', 'wrong');
        const fb = c.querySelector('.bio-quiz-feedback');
        if (fb) fb.style.display = 'none';
      });
      if (scoreCard) scoreCard.style.display = 'none';
    });
  }
}
