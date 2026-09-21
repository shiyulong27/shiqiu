/**
 * 华夏世界遗产与名胜古迹客户端交互脚本
 */
import {
  heritageStats,
  heritageList,
  heritageQuiz
} from '../data/worldHeritageData.js'

document.addEventListener('DOMContentLoaded', () => {
  // 1. 类型与大区组合筛选控制器
  const typeFilterBtns = document.querySelectorAll('.type-filter-btn')
  const regionSelect = document.getElementById('heritage-region-select')
  const searchInput = document.getElementById('heritage-search-input')
  const heritageCards = document.querySelectorAll('.heritage-card')
  const totalCounterDisplay = document.getElementById('heritage-visible-count')

  let currentType = 'all'
  let currentRegion = 'all'
  let currentSearch = ''

  function applyFilters() {
    let visibleCount = 0
    heritageCards.forEach(card => {
      const type = card.getAttribute('data-type')
      const region = card.getAttribute('data-region')
      const name = card.getAttribute('data-name') || ''
      const prov = card.getAttribute('data-province') || ''

      const typeMatch = (currentType === 'all' || type === currentType)
      const regionMatch = (currentRegion === 'all' || region === currentRegion)
      const searchMatch = !currentSearch || name.includes(currentSearch) || prov.includes(currentSearch)

      if (typeMatch && regionMatch && searchMatch) {
        card.classList.remove('hidden')
        card.style.display = 'flex'
        visibleCount++
      } else {
        card.classList.add('hidden')
        card.style.display = 'none'
      }
    })

    if (totalCounterDisplay) totalCounterDisplay.textContent = visibleCount
  }

  typeFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeFilterBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      currentType = btn.getAttribute('data-type')
      applyFilters()
    })
  })

  if (regionSelect) {
    regionSelect.addEventListener('change', (e) => {
      currentRegion = e.target.value
      applyFilters()
    })
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim()
      applyFilters()
    })
  }

  // 2. 亲子打卡足迹簿 (Footprint Stamps with localStorage)
  const footprintCountDisplay = document.getElementById('footprint-stamped-count')
  const STORAGE_KEY = 'shiqiu_heritage_stamps_v1'
  let stampedIds = new Set()

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) stampedIds = new Set(JSON.parse(saved))
  } catch (e) {
    stampedIds = new Set()
  }

  function updateFootprintUI() {
    heritageCards.forEach(card => {
      const hId = card.getAttribute('data-id')
      const stampBtn = card.querySelector('.btn-stamp-footprint')
      if (stampedIds.has(hId)) {
        card.classList.add('is-stamped')
        if (stampBtn) stampBtn.innerHTML = '🚩 已点亮足迹'
      } else {
        card.classList.remove('is-stamped')
        if (stampBtn) stampBtn.innerHTML = '📍 点亮足迹'
      }
    })
    if (footprintCountDisplay) footprintCountDisplay.textContent = stampedIds.size
  }

  document.querySelectorAll('.btn-stamp-footprint').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const card = btn.closest('.heritage-card')
      if (!card) return
      const hId = card.getAttribute('data-id')
      if (stampedIds.has(hId)) {
        stampedIds.delete(hId)
      } else {
        stampedIds.add(hId)
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...stampedIds]))
      } catch (err) {}
      updateFootprintUI()
    })
  })

  updateFootprintUI()

  // 3. 遗产详卷与诗词联动模态弹窗 (Detail Modal)
  const detailModal = document.getElementById('heritage-detail-modal')
  const detailCloseBtn = document.getElementById('heritage-detail-close')
  const detailTitle = document.getElementById('heritage-detail-title')
  const detailTag = document.getElementById('heritage-detail-tag')
  const detailBody = document.getElementById('heritage-detail-body')
  const detailVoiceBtn = document.getElementById('heritage-detail-voice')

  function openHeritageModal(item) {
    if (!detailModal) return
    if (detailTitle) detailTitle.textContent = `${item.icon} ${item.name}`
    if (detailTag) detailTag.textContent = `${item.typeZh} · ${item.province} (${item.year}年入选)`

    const poemsHtml = item.poems.map(p => `
      <div class="modal-poem-box">
        <div class="poem-title-bar"><strong>${p.title}</strong> · ${p.dynasty} · ${p.author}</div>
        <p class="poem-quote-text">${p.text}</p>
      </div>
    `).join('')

    if (detailBody) {
      detailBody.innerHTML = `
        <div class="heritage-modal-content">
          <div class="modal-info-block">
            <strong>🏛️ 联合国教科文组织评语：</strong>
            <p class="unesco-quote">${item.unescoQuote}</p>
          </div>
          <div class="modal-info-block">
            <strong>✨ 核心胜景与价值：</strong>
            <p>${item.highlight}</p>
          </div>
          <div class="modal-info-block">
            <strong>📜 历代文人山河诗词联动：</strong>
            <div class="modal-poems-list">${poemsHtml}</div>
          </div>
          <div class="modal-info-block">
            <strong>👑 关联历史大事件与先贤：</strong>
            <p>${item.historyLink}</p>
          </div>
        </div>
      `
    }

    detailModal.classList.remove('hidden')
    detailModal.style.display = 'flex'

    if (detailVoiceBtn) {
      detailVoiceBtn.onclick = () => {
        const text = `${item.name}，${item.typeZh}。${item.highlight}。${item.poems[0]?.title}，${item.poems[0]?.text}`
        speakText(text)
      }
    }
  }

  function closeHeritageModal() {
    if (detailModal) {
      detailModal.classList.add('hidden')
      detailModal.style.display = 'none'
      if (window.speechSynthesis) window.speechSynthesis.cancel()
    }
  }

  if (detailCloseBtn) detailCloseBtn.addEventListener('click', closeHeritageModal)
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeHeritageModal()
    })
  }

  heritageCards.forEach(card => {
    card.addEventListener('click', () => {
      const hId = card.getAttribute('data-id')
      const item = heritageList.find(h => h.id === hId)
      if (item) openHeritageModal(item)
    })
  })

  // 4. 世界遗产通识亲子挑战模态 (Quiz Modal)
  const quizModal = document.getElementById('heritage-quiz-modal')
  const openQuizBtn = document.getElementById('btn-open-heritage-quiz')
  const closeQuizBtn = document.getElementById('heritage-quiz-close')

  let currentQuizIdx = 0
  let userScore = 0
  let activeQuestions = []

  if (openQuizBtn && quizModal) {
    openQuizBtn.addEventListener('click', () => {
      startNewHeritageQuiz()
      quizModal.classList.remove('hidden')
      quizModal.style.display = 'flex'
    })
  }
  if (closeQuizBtn && quizModal) {
    closeQuizBtn.addEventListener('click', () => {
      quizModal.classList.add('hidden')
      quizModal.style.display = 'none'
    })
  }
  if (quizModal) {
    quizModal.addEventListener('click', (e) => {
      if (e.target === quizModal) {
        quizModal.classList.add('hidden')
        quizModal.style.display = 'none'
      }
    })
  }

  function startNewHeritageQuiz() {
    currentQuizIdx = 0
    userScore = 0
    const shuffled = [...heritageQuiz].sort(() => 0.5 - Math.random())
    activeQuestions = shuffled.slice(0, 5)
    renderHeritageQuizQuestion()
  }

  function renderHeritageQuizQuestion() {
    const container = document.getElementById('heritage-quiz-body')
    if (!container) return

    if (currentQuizIdx >= activeQuestions.length) {
      container.innerHTML = `
        <div class="quiz-finish-card">
          <div class="quiz-finish-icon">🏆</div>
          <h3>恭喜完成中华世界遗产通识挑战！</h3>
          <p class="quiz-final-score">本次得分：<strong>${userScore * 20}</strong> / 100 分</p>
          <div class="quiz-badge-award">
            ⭐⭐⭐⭐⭐【🏯 中华世界遗产通识小使者】
          </div>
          <p class="quiz-finish-desc">华夏大地壮丽山河与五千年悠久文明，在世界遗产的名册上熠熠生辉！愿你带着对这片土地的热爱，走遍万里山河！</p>
          <button id="btn-heritage-restart" class="quiz-btn-restart">再挑战一轮</button>
        </div>
      `
      const restartBtn = document.getElementById('btn-heritage-restart')
      if (restartBtn) restartBtn.addEventListener('click', startNewHeritageQuiz)
      return
    }

    const q = activeQuestions[currentQuizIdx]
    container.innerHTML = `
      <div class="quiz-card-box">
        <div class="quiz-progress-bar">第 ${currentQuizIdx + 1} / ${activeQuestions.length} 关</div>
        <h3 class="quiz-question-text">${q.question}</h3>
        <div class="quiz-options-list">
          ${q.options.map((opt, i) => `
            <button class="quiz-opt-btn" data-opt-idx="${i}">
              <span class="opt-label">${String.fromCharCode(65 + i)}</span>
              <span class="opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>
        <div id="quiz-feedback-box" class="quiz-feedback hidden"></div>
        <div class="quiz-actions-row">
          <button id="btn-quiz-next" class="quiz-btn-next hidden">下一题 ➔</button>
        </div>
      </div>
    `

    const optButtons = container.querySelectorAll('.quiz-opt-btn')
    const feedbackBox = document.getElementById('quiz-feedback-box')
    const nextBtn = document.getElementById('btn-quiz-next')

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = parseInt(btn.getAttribute('data-opt-idx'), 10)
        optButtons.forEach(b => b.disabled = true)

        if (selected === q.answer) {
          userScore++
          btn.classList.add('correct')
          feedbackBox.className = 'quiz-feedback correct'
          feedbackBox.innerHTML = `🎉 <strong>恭喜答对！</strong> ${q.explain}`
        } else {
          btn.classList.add('wrong')
          optButtons[q.answer].classList.add('correct')
          feedbackBox.className = 'quiz-feedback wrong'
          feedbackBox.innerHTML = `💡 <strong>很遗憾答错了～</strong> 正确答案是【${q.options[q.answer]}】。<br>${q.explain}`
        }
        feedbackBox.classList.remove('hidden')
        if (nextBtn) {
          nextBtn.classList.remove('hidden')
          nextBtn.onclick = () => {
            currentQuizIdx++
            renderHeritageQuizQuestion()
          }
        }
      })
    })
  }

  function speakText(text) {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'zh-CN'
    utter.rate = 0.95
    window.speechSynthesis.speak(utter)
  }
})
