/**
 * emperors-battles-ui.js
 * 历代帝王世系与华夏重大决战风云 客户端交互控制器
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.HB_DATA;
  if (!data) return;

  // DOM Elements
  const tabEmperors = document.getElementById('tab-emperors');
  const tabBattles = document.getElementById('tab-battles');
  const viewEmperors = document.getElementById('view-emperors');
  const viewBattles = document.getElementById('view-battles');
  const filterPillsBar = document.getElementById('filter-pills-bar');
  const searchInput = document.getElementById('hb-search-input');
  const btnSearchClear = document.getElementById('btn-search-clear');
  const emptyState = document.getElementById('hb-empty-state');
  const btnEmptyReset = document.getElementById('btn-empty-reset');

  // Modals
  const namingModal = document.getElementById('naming-modal');
  const btnOpenNaming = document.getElementById('btn-open-naming');
  const btnCloseNaming = document.getElementById('btn-close-naming');

  const emperorModal = document.getElementById('emperor-modal');
  const btnCloseEmp = document.getElementById('btn-close-emp');
  const btnEmpVoice = document.getElementById('btn-emp-voice');

  const quizModal = document.getElementById('quiz-modal');
  const btnOpenQuiz = document.getElementById('btn-open-quiz');
  const btnCloseQuiz = document.getElementById('btn-close-quiz');

  // State
  let currentView = 'emperors'; // 'emperors' | 'battles'
  let currentEpochPill = 'all';
  let currentBattleTypePill = 'all';
  let currentSearchQuery = '';
  let activeEmperorData = null;

  // 1. 初始化视图与胶囊筛选条
  function renderFilterPills() {
    filterPillsBar.innerHTML = '';

    if (currentView === 'emperors') {
      const pills = [
        { id: 'all', label: '全部朝代' },
        { id: 'pre-qin', label: '🏺 先秦华夏' },
        { id: 'qin-han', label: '🏛️ 大一统秦汉' },
        { id: 'three-kingdoms-jin', label: '⚔️ 三国魏晋南北朝' },
        { id: 'sui-tang', label: '🏯 隋唐盛世五代' },
        { id: 'song-yuan', label: '📜 两宋辽金元' },
        { id: 'ming-qing', label: '👑 明清帝国' }
      ];

      pills.forEach(p => {
        const btn = document.createElement('button');
        btn.className = `hb-pill ${currentEpochPill === p.id ? 'active' : ''}`;
        btn.textContent = p.label;
        btn.dataset.id = p.id;
        btn.addEventListener('click', () => {
          currentEpochPill = p.id;
          renderFilterPills();
          applyFilterAndSearch();
        });
        filterPillsBar.appendChild(btn);
      });
    } else {
      const pills = [
        { id: 'all', label: '全部战役' },
        { id: '以少胜多', label: '🔥 以少胜多' },
        { id: '鼎革统一', label: '⚡ 鼎革统一' },
        { id: '水师水战', label: '🌊 水师水战' },
        { id: '坚守阻击', label: '🛡️ 坚守阻击' },
        { id: '长途奔袭', label: '🐎 长途奔袭' },
        { id: '攻坚围城', label: '🏰 攻坚围城' }
      ];

      pills.forEach(p => {
        const btn = document.createElement('button');
        btn.className = `hb-pill ${currentBattleTypePill === p.id ? 'active' : ''}`;
        btn.textContent = p.label;
        btn.dataset.id = p.id;
        btn.addEventListener('click', () => {
          currentBattleTypePill = p.id;
          renderFilterPills();
          applyFilterAndSearch();
        });
        filterPillsBar.appendChild(btn);
      });
    }
  }

  // 2. 视角切换逻辑
  function switchView(viewName) {
    currentView = viewName;
    if (viewName === 'emperors') {
      tabEmperors.classList.add('active');
      tabBattles.classList.remove('active');
      viewEmperors.classList.add('active');
      viewBattles.classList.remove('active');
    } else {
      tabBattles.classList.add('active');
      tabEmperors.classList.remove('active');
      viewBattles.classList.add('active');
      viewEmperors.classList.remove('active');
    }
    renderFilterPills();
    applyFilterAndSearch();
  }

  tabEmperors.addEventListener('click', () => switchView('emperors'));
  tabBattles.addEventListener('click', () => switchView('battles'));

  // 3. 搜索与过滤逻辑
  function applyFilterAndSearch() {
    const q = currentSearchQuery.trim().toLowerCase();
    let totalVisible = 0;

    if (currentView === 'emperors') {
      const epochBlocks = document.querySelectorAll('.epoch-block');
      epochBlocks.forEach(block => {
        const blockEpoch = block.getAttribute('data-epoch');
        let blockHasMatch = false;

        const cards = block.querySelectorAll('.emp-card');
        cards.forEach(card => {
          const empEpoch = card.getAttribute('data-epoch');
          const name = (card.getAttribute('data-name') || '').toLowerCase();
          const temple = (card.getAttribute('data-temple') || '').toLowerCase();
          const ministers = (card.getAttribute('data-ministers') || '').toLowerCase();
          const flourish = (card.getAttribute('data-flourish') || '').toLowerCase();

          // 胶囊匹配
          const matchesPill = (currentEpochPill === 'all' || empEpoch === currentEpochPill);
          // 搜索词匹配
          const matchesQuery = !q || name.includes(q) || temple.includes(q) || ministers.includes(q) || flourish.includes(q);

          if (matchesPill && matchesQuery) {
            card.style.display = 'flex';
            blockHasMatch = true;
            totalVisible++;
          } else {
            card.style.display = 'none';
          }
        });

        block.style.display = blockHasMatch ? 'block' : 'none';
      });
    } else {
      const battleCards = document.querySelectorAll('.battle-card');
      battleCards.forEach(card => {
        const bType = card.getAttribute('data-type') || '';
        const name = (card.getAttribute('data-name') || '').toLowerCase();
        const idioms = (card.getAttribute('data-idioms') || '').toLowerCase();
        const commanders = (card.getAttribute('data-commanders') || '').toLowerCase();

        // 胶囊匹配
        const matchesPill = (currentBattleTypePill === 'all' || bType === currentBattleTypePill);
        // 搜索词匹配
        const matchesQuery = !q || name.includes(q) || idioms.includes(q) || commanders.includes(q);

        if (matchesPill && matchesQuery) {
          card.style.display = 'flex';
          totalVisible++;
        } else {
          card.style.display = 'none';
        }
      });
    }

    if (totalVisible === 0) {
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
    }
  }

  // 搜索事件监听
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
    currentEpochPill = 'all';
    currentBattleTypePill = 'all';
    renderFilterPills();
    applyFilterAndSearch();
  });

  // 4. 帝王称谓小百科模态
  function openNamingModal() {
    namingModal.style.display = 'flex';
  }
  function closeNamingModal() {
    namingModal.style.display = 'none';
  }

  btnOpenNaming.addEventListener('click', openNamingModal);
  btnCloseNaming.addEventListener('click', closeNamingModal);
  namingModal.addEventListener('click', (e) => {
    if (e.target === namingModal) closeNamingModal();
  });

  // 5. 帝王详卷模态
  function openEmperorModal(empId) {
    const emp = data.emperors.find(e => e.id === empId);
    if (!emp) return;

    activeEmperorData = emp;
    document.getElementById('detail-emp-avatar').textContent = emp.avatarIcon || '👑';
    document.getElementById('detail-emp-title').textContent = emp.templeName;
    document.getElementById('detail-emp-subtitle').textContent = `本名：${emp.name} · ${emp.dynastyName}`;
    document.getElementById('detail-emp-era').textContent = emp.flourishEra;
    document.getElementById('detail-emp-reign').textContent = emp.reignPeriod;
    document.getElementById('detail-emp-eradenom').textContent = emp.eraNames.length > 0 ? emp.eraNames.join('、') : '—';
    document.getElementById('detail-emp-achievements').textContent = emp.achievements;
    document.getElementById('detail-emp-anecdote').textContent = emp.anecdote;

    const ministersContainer = document.getElementById('detail-emp-ministers');
    ministersContainer.innerHTML = '';
    emp.notableMinisters.forEach(m => {
      const tag = document.createElement('span');
      tag.className = 'minister-tag';
      tag.textContent = m;
      ministersContainer.appendChild(tag);
    });

    emperorModal.style.display = 'flex';
  }

  function closeEmperorModal() {
    emperorModal.style.display = 'none';
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  // 委托给帝王卡片点击
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-read-emp');
    if (btn) {
      const empId = btn.getAttribute('data-id');
      openEmperorModal(empId);
      return;
    }

    const card = e.target.closest('.emp-card');
    if (card && !e.target.closest('button')) {
      const empId = card.getAttribute('data-id');
      openEmperorModal(empId);
    }
  });

  btnCloseEmp.addEventListener('click', closeEmperorModal);
  emperorModal.addEventListener('click', (e) => {
    if (e.target === emperorModal) closeEmperorModal();
  });

  // 语音播报帝王故事
  btnEmpVoice.addEventListener('click', () => {
    if (!activeEmperorData || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const textToRead = `${activeEmperorData.templeName}，${activeEmperorData.dynastyName}君主。${activeEmperorData.achievements}。趣味历史：${activeEmperorData.anecdote}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  });

  // 6. 历史风云益智问答挑战系统
  let quizCurrentIndex = 0;
  let quizScore = 0;
  let quizQuestions = [];

  function startQuiz() {
    // 随机抽取 5 道题
    const shuffled = [...data.quizzes].sort(() => 0.5 - Math.random());
    quizQuestions = shuffled.slice(0, 5);
    quizCurrentIndex = 0;
    quizScore = 0;

    document.getElementById('quiz-complete-box').style.display = 'none';
    document.getElementById('quiz-feedback-box').style.display = 'none';
    document.getElementById('quiz-options-wrap').style.display = 'grid';
    document.querySelector('.quiz-status-row').style.display = 'flex';
    document.querySelector('.quiz-question-box').style.display = 'block';

    renderQuizQuestion();
    quizModal.style.display = 'flex';
  }

  function renderQuizQuestion() {
    const q = quizQuestions[quizCurrentIndex];
    if (!q) return;

    document.getElementById('quiz-progress').textContent = `第 ${quizCurrentIndex + 1} / ${quizQuestions.length} 题`;
    document.getElementById('quiz-score').textContent = `得分：${quizScore} 分`;
    document.getElementById('quiz-question-text').textContent = q.question;

    const wrap = document.getElementById('quiz-options-wrap');
    wrap.innerHTML = '';
    document.getElementById('quiz-feedback-box').style.display = 'none';

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleQuizAnswer(opt, btn));
      wrap.appendChild(btn);
    });
  }

  function handleQuizAnswer(selectedOpt, clickedBtn) {
    const q = quizQuestions[quizCurrentIndex];
    const isCorrect = (selectedOpt === q.answer);

    // 禁用所有选项
    const allBtns = document.querySelectorAll('.quiz-opt-btn');
    allBtns.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === q.answer) {
        btn.classList.add('correct');
      }
    });

    if (isCorrect) {
      clickedBtn.classList.add('correct');
      quizScore += 20;
      document.getElementById('quiz-score').textContent = `得分：${quizScore} 分`;
    } else {
      clickedBtn.classList.add('wrong');
    }

    const feedbackBox = document.getElementById('quiz-feedback-box');
    const feedbackText = document.getElementById('quiz-feedback-text');
    feedbackText.innerHTML = `<strong>${isCorrect ? '🎉 恭喜答对！' : '💡 很遗憾答错了～'}</strong> ${q.explanation}`;
    feedbackBox.style.display = 'flex';
  }

  document.getElementById('btn-quiz-next').addEventListener('click', () => {
    quizCurrentIndex++;
    if (quizCurrentIndex < quizQuestions.length) {
      renderQuizQuestion();
    } else {
      // 挑战完成
      document.getElementById('quiz-options-wrap').style.display = 'none';
      document.querySelector('.quiz-status-row').style.display = 'none';
      document.querySelector('.quiz-question-box').style.display = 'none';
      document.getElementById('quiz-feedback-box').style.display = 'none';

      const completeBox = document.getElementById('quiz-complete-box');
      document.getElementById('quiz-final-score').textContent = `全套 5 题作答完毕，你获得了 ${quizScore} 分！`;
      completeBox.style.display = 'block';
    }
  });

  document.getElementById('btn-quiz-restart').addEventListener('click', startQuiz);

  btnOpenQuiz.addEventListener('click', startQuiz);
  btnCloseQuiz.addEventListener('click', () => {
    quizModal.style.display = 'none';
  });
  quizModal.addEventListener('click', (e) => {
    if (e.target === quizModal) quizModal.style.display = 'none';
  });

  // ESC 键关闭所有模态框
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNamingModal();
      closeEmperorModal();
      quizModal.style.display = 'none';
    }
  });

  // 初始渲染
  renderFilterPills();
});
