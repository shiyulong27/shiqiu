/**
 * science-ui.js
 * 华夏科学探索与古今科技长卷 客户端交互控制器
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.SCI_DATA;
  if (!data) return;

  // DOM Elements
  const tabAncient = document.getElementById('tab-ancient');
  const tabSilkroad = document.getElementById('tab-silkroad');
  const tabModern = document.getElementById('tab-modern');

  const viewAncient = document.getElementById('view-ancient');
  const viewSilkroad = document.getElementById('view-silkroad');
  const viewModern = document.getElementById('view-modern');

  const searchInput = document.getElementById('sci-search-input');
  const btnSearchClear = document.getElementById('btn-sci-search-clear');
  const emptyState = document.getElementById('sci-empty-state');
  const btnEmptyReset = document.getElementById('btn-sci-empty-reset');
  const pillsBar = document.getElementById('sci-pills-bar');

  // Modals
  const chronicleModal = document.getElementById('sci-chronicle-modal');
  const btnOpenChronicle = document.getElementById('btn-open-sci-chronicle');
  const btnCloseChronicle = document.getElementById('btn-close-sci-chronicle');

  const scientistModal = document.getElementById('scientist-modal');
  const btnCloseScientist = document.getElementById('btn-close-sci-detail');
  const btnSciVoice = document.getElementById('btn-sci-voice');

  const quizModal = document.getElementById('sci-quiz-modal');
  const btnOpenQuiz = document.getElementById('btn-open-sci-quiz');
  const btnCloseQuiz = document.getElementById('btn-close-sci-quiz');

  // State
  let currentView = 'ancient'; // 'ancient' | 'silkroad' | 'modern'
  let currentPill = 'all';
  let currentSearchQuery = '';
  let activeScientistData = null;

  // 1. 渲染胶囊筛选按钮
  function renderFilterPills() {
    pillsBar.innerHTML = '';
    let pills = [];

    if (currentView === 'ancient') {
      pills = [
        { id: 'all', label: '全部发明与先贤' },
        { id: 'inventions', label: '📜 古代四大发明' },
        { id: 'scientists', label: '🌟 科技先贤巨擘' }
      ];
    } else if (currentView === 'silkroad') {
      pills = [
        { id: 'all', label: '全部物产大交换' },
        { id: 'inbound', label: '🍇 西域传入蔬果' },
        { id: 'outbound', label: '👘 华夏走向世界' }
      ];
    } else {
      pills = [
        { id: 'all', label: '全部大国重器' },
        { id: '月球探测', label: '🌕 月球深空' },
        { id: '载人航天', label: '🛰️ 空间站实验室' },
        { id: '火星探测', label: '🔴 行星火星' },
        { id: '深海大工程', label: '🌊 万米深海潜航' }
      ];
    }

    pills.forEach(p => {
      const btn = document.createElement('button');
      btn.className = `sci-pill ${currentPill === p.id ? 'active' : ''}`;
      btn.textContent = p.label;
      btn.dataset.id = p.id;
      btn.addEventListener('click', () => {
        currentPill = p.id;
        renderFilterPills();
        applyFilterAndSearch();
      });
      pillsBar.appendChild(btn);
    });
  }

  // 2. 视角切换
  function switchView(viewName) {
    currentView = viewName;
    currentPill = 'all';

    [tabAncient, tabSilkroad, tabModern].forEach(t => t.classList.remove('active'));
    [viewAncient, viewSilkroad, viewModern].forEach(v => v.classList.remove('active'));

    if (viewName === 'ancient') {
      tabAncient.classList.add('active');
      viewAncient.classList.add('active');
    } else if (viewName === 'silkroad') {
      tabSilkroad.classList.add('active');
      viewSilkroad.classList.add('active');
    } else {
      tabModern.classList.add('active');
      viewModern.classList.add('active');
    }

    renderFilterPills();
    applyFilterAndSearch();
  }

  tabAncient.addEventListener('click', () => switchView('ancient'));
  tabSilkroad.addEventListener('click', () => switchView('silkroad'));
  tabModern.addEventListener('click', () => switchView('modern'));

  // 3. 搜索与过滤逻辑
  function applyFilterAndSearch() {
    const q = currentSearchQuery.trim().toLowerCase();
    let totalVisible = 0;

    if (currentView === 'ancient') {
      const invDeck = document.getElementById('inventions-deck');
      const invCards = document.querySelectorAll('.inv-card');
      const sciGrid = document.getElementById('scientists-grid');
      const sciCards = document.querySelectorAll('.sci-card');

      const showInventions = (currentPill === 'all' || currentPill === 'inventions');
      const showScientists = (currentPill === 'all' || currentPill === 'scientists');

      invCards.forEach(card => {
        const name = (card.getAttribute('data-name') || '').toLowerCase();
        const inventor = (card.getAttribute('data-inventor') || '').toLowerCase();
        const kw = (card.getAttribute('data-keywords') || '').toLowerCase();
        const match = showInventions && (!q || name.includes(q) || inventor.includes(q) || kw.includes(q));

        card.style.display = match ? 'flex' : 'none';
        if (match) totalVisible++;
      });

      sciCards.forEach(card => {
        const name = (card.getAttribute('data-name') || '').toLowerCase();
        const dynasty = (card.getAttribute('data-dynasty') || '').toLowerCase();
        const works = (card.getAttribute('data-works') || '').toLowerCase();
        const achieve = (card.getAttribute('data-achieve') || '').toLowerCase();
        const match = showScientists && (!q || name.includes(q) || dynasty.includes(q) || works.includes(q) || achieve.includes(q));

        card.style.display = match ? 'flex' : 'none';
        if (match) totalVisible++;
      });

      invDeck.style.display = showInventions ? 'grid' : 'none';
      sciGrid.style.display = showScientists ? 'grid' : 'none';
    } else if (currentView === 'silkroad') {
      const inboundCol = document.querySelector('.col-inbound');
      const outboundCol = document.querySelector('.col-outbound');

      const showInbound = (currentPill === 'all' || currentPill === 'inbound');
      const showOutbound = (currentPill === 'all' || currentPill === 'outbound');

      inboundCol.style.display = showInbound ? 'block' : 'none';
      outboundCol.style.display = showOutbound ? 'block' : 'none';

      const goodCards = document.querySelectorAll('.good-card');
      goodCards.forEach(card => {
        const name = (card.getAttribute('data-name') || '').toLowerCase();
        const intro = (card.getAttribute('data-intro') || '').toLowerCase();
        const parentColVisible = card.closest('.exchange-column').style.display !== 'none';
        const match = parentColVisible && (!q || name.includes(q) || intro.includes(q));

        card.style.display = match ? 'block' : 'none';
        if (match) totalVisible++;
      });
    } else {
      const aeroCards = document.querySelectorAll('.aero-card');
      aeroCards.forEach(card => {
        const name = (card.getAttribute('data-name') || '').toLowerCase();
        const myth = (card.getAttribute('data-myth') || '').toLowerCase();
        const category = card.getAttribute('data-category') || '';
        const intro = (card.getAttribute('data-intro') || '').toLowerCase();

        const matchPill = (currentPill === 'all' || category === currentPill);
        const matchQuery = !q || name.includes(q) || myth.includes(q) || intro.includes(q) || category.includes(q);

        if (matchPill && matchQuery) {
          card.style.display = 'flex';
          totalVisible++;
        } else {
          card.style.display = 'none';
        }
      });
    }

    emptyState.style.display = (totalVisible === 0) ? 'block' : 'none';
  }

  // 搜索监听
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    applyFilterAndSearch();
  });

  btnSearchClear.addEventListener('click', () => {
    searchInput.value = '';
    currentSearchQuery = '';
    applyFilterAndSearch();
  });

  btnEmptyReset.addEventListener('click', () => {
    searchInput.value = '';
    currentSearchQuery = '';
    currentPill = 'all';
    renderFilterPills();
    applyFilterAndSearch();
  });

  // 4. 科技编年小百科模态
  btnOpenChronicle.addEventListener('click', () => {
    chronicleModal.style.display = 'flex';
  });
  btnCloseChronicle.addEventListener('click', () => {
    chronicleModal.style.display = 'none';
  });
  chronicleModal.addEventListener('click', (e) => {
    if (e.target === chronicleModal) chronicleModal.style.display = 'none';
  });

  // 5. 先贤详情模态
  function openScientistModal(sciId) {
    const sci = data.scientists.find(s => s.id === sciId);
    if (!sci) return;

    activeScientistData = sci;
    document.getElementById('detail-sci-avatar').textContent = sci.avatar;
    document.getElementById('detail-sci-name').textContent = sci.name;
    document.getElementById('detail-sci-dynasty').textContent = `${sci.dynasty} · ${sci.titles}`;
    document.getElementById('detail-sci-works').textContent = sci.majorWorks;
    document.getElementById('detail-sci-achievements').textContent = sci.achievements;
    document.getElementById('detail-sci-anecdote').textContent = sci.anecdote;

    scientistModal.style.display = 'flex';
  }

  function closeScientistModal() {
    scientistModal.style.display = 'none';
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-sci-detail');
    if (btn) {
      const sciId = btn.getAttribute('data-id');
      openScientistModal(sciId);
      return;
    }
    const card = e.target.closest('.sci-card');
    if (card && !e.target.closest('button')) {
      const sciId = card.getAttribute('data-id');
      openScientistModal(sciId);
    }
  });

  btnCloseScientist.addEventListener('click', closeScientistModal);
  scientistModal.addEventListener('click', (e) => {
    if (e.target === scientistModal) closeScientistModal();
  });

  btnSciVoice.addEventListener('click', () => {
    if (!activeScientistData || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const text = `${activeScientistData.name}，${activeScientistData.dynasty}科技大家。传世巨著：${activeScientistData.majorWorks}。科学探索故事：${activeScientistData.anecdote}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  });

  // 6. 科学小博士益智问答挑战系统
  let quizIndex = 0;
  let quizScore = 0;
  let currentQuestions = [];

  function startQuiz() {
    const shuffled = [...data.quizzes].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, 5);
    quizIndex = 0;
    quizScore = 0;

    document.getElementById('sci-quiz-complete-box').style.display = 'none';
    document.getElementById('sci-quiz-feedback-box').style.display = 'none';
    document.getElementById('sci-quiz-options-wrap').style.display = 'grid';
    document.querySelector('.quiz-status-row').style.display = 'flex';
    document.querySelector('.quiz-question-box').style.display = 'block';

    renderQuizQuestion();
    quizModal.style.display = 'flex';
  }

  function renderQuizQuestion() {
    const q = currentQuestions[quizIndex];
    if (!q) return;

    document.getElementById('sci-quiz-progress').textContent = `第 ${quizIndex + 1} / ${currentQuestions.length} 题`;
    document.getElementById('sci-quiz-score').textContent = `得分：${quizScore} 分`;
    document.getElementById('sci-quiz-question-text').textContent = q.question;

    const wrap = document.getElementById('sci-quiz-options-wrap');
    wrap.innerHTML = '';
    document.getElementById('sci-quiz-feedback-box').style.display = 'none';

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleQuizAnswer(opt, btn));
      wrap.appendChild(btn);
    });
  }

  function handleQuizAnswer(selectedOpt, clickedBtn) {
    const q = currentQuestions[quizIndex];
    const isCorrect = (selectedOpt === q.answer);

    const allBtns = document.querySelectorAll('.quiz-opt-btn');
    allBtns.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === q.answer) btn.classList.add('correct');
    });

    if (isCorrect) {
      clickedBtn.classList.add('correct');
      quizScore += 20;
      document.getElementById('sci-quiz-score').textContent = `得分：${quizScore} 分`;
    } else {
      clickedBtn.classList.add('wrong');
    }

    const feedbackBox = document.getElementById('sci-quiz-feedback-box');
    const feedbackText = document.getElementById('sci-quiz-feedback-text');
    feedbackText.innerHTML = `<strong>${isCorrect ? '🎉 恭喜答对！' : '💡 很遗憾答错了～'}</strong> ${q.explanation}`;
    feedbackBox.style.display = 'flex';
  }

  document.getElementById('btn-sci-quiz-next').addEventListener('click', () => {
    quizIndex++;
    if (quizIndex < currentQuestions.length) {
      renderQuizQuestion();
    } else {
      document.getElementById('sci-quiz-options-wrap').style.display = 'none';
      document.querySelector('.quiz-status-row').style.display = 'none';
      document.querySelector('.quiz-question-box').style.display = 'none';
      document.getElementById('sci-quiz-feedback-box').style.display = 'none';

      const completeBox = document.getElementById('sci-quiz-complete-box');
      document.getElementById('sci-quiz-final-score').textContent = `全套 5 题作答完毕，你获得了 ${quizScore} 分！`;
      completeBox.style.display = 'block';
    }
  });

  document.getElementById('btn-sci-quiz-restart').addEventListener('click', startQuiz);
  btnOpenQuiz.addEventListener('click', startQuiz);
  btnCloseQuiz.addEventListener('click', () => {
    quizModal.style.display = 'none';
  });
  quizModal.addEventListener('click', (e) => {
    if (e.target === quizModal) quizModal.style.display = 'none';
  });

  // ESC 键通用关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      chronicleModal.style.display = 'none';
      closeScientistModal();
      quizModal.style.display = 'none';
    }
  });

  // 初始渲染
  renderFilterPills();
});
