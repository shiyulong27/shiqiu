/**
 * 小学英语自然拼读与趣味单词王国客户端交互脚本
 */
import {
  alphabetPhonics,
  shortVowelFamilies,
  magicERules,
  consonantDigraphs,
  sightWords50,
  phonicsQuiz
} from '../data/englishPhonicsData.js'

document.addEventListener('DOMContentLoaded', () => {
  // 1. 四重视角切换控制器
  const viewTabs = document.querySelectorAll('.phonics-view-tab')
  const viewSections = {
    alphabet: document.getElementById('view-alphabet'),
    families: document.getElementById('view-families'),
    magice: document.getElementById('view-magice'),
    sightwords: document.getElementById('view-sightwords')
  }

  viewTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const view = tab.getAttribute('data-view')
      viewTabs.forEach(t => t.classList.remove('active'))
      tab.classList.add('active')

      Object.keys(viewSections).forEach(v => {
        if (viewSections[v]) {
          if (v === view) {
            viewSections[v].classList.remove('hidden')
            viewSections[v].classList.add('active')
          } else {
            viewSections[v].classList.add('hidden')
            viewSections[v].classList.remove('active')
          }
        }
      })
      window.scrollTo({ top: 380, behavior: 'smooth' })
    })
  })

  // 2. 字母与单词点读发音 (Web Speech API)
  document.querySelectorAll('.btn-speak-word').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const word = btn.getAttribute('data-word')
      if (word) speakEnglish(word)
    })
  })

  // 3. 互动拼词实验室 (Phonics Word Builder)
  const onsetBtns = document.querySelectorAll('.builder-onset-btn')
  const rimeBtns = document.querySelectorAll('.builder-rime-btn')
  const builderResultBox = document.getElementById('builder-result-word')
  const builderResultMeaning = document.getElementById('builder-result-meaning')
  const builderResultIcon = document.getElementById('builder-result-icon')
  const builderSpeakBtn = document.getElementById('builder-btn-speak')

  let currentOnset = 'c'
  let currentRime = '-at'

  // 词库索引映射
  const validWordsDict = {
    'cat': { zh: '小猫', icon: '🐱' },
    'bat': { zh: '蝙蝠/球棒', icon: '🦇' },
    'hat': { zh: '帽子', icon: '🎩' },
    'mat': { zh: '垫子', icon: '🧘' },
    'rat': { zh: '老鼠', icon: '🐀' },
    'fat': { zh: '胖乎乎的', icon: '🐼' },
    'pan': { zh: '平底锅', icon: '🍳' },
    'can': { zh: '易拉罐/能够', icon: '🥫' },
    'fan': { zh: '风扇', icon: '🪭' },
    'man': { zh: '男人', icon: '👨' },
    'van': { zh: '面包车', icon: '🚐' },
    'cap': { zh: '帽子', icon: '🧢' },
    'map': { zh: '地图', icon: '🗺️' },
    'tap': { zh: '水龙头', icon: '🚰' },
    'pen': { zh: '钢笔', icon: '🖊️' },
    'hen': { zh: '母鸡', icon: '🐔' },
    'ten': { zh: '数字十', icon: '🔟' },
    'men': { zh: '男人们', icon: '👥' },
    'net': { zh: '网', icon: '🕸️' },
    'pet': { zh: '宠物', icon: '🐶' },
    'wet': { zh: '湿漉漉', icon: '💦' },
    'pig': { zh: '小猪', icon: '🐷' },
    'big': { zh: '巨大的', icon: '🐘' },
    'dig': { zh: '挖掘', icon: '⛏️' },
    'pin': { zh: '别针', icon: '🧷' },
    'win': { zh: '获胜赢得', icon: '🏆' },
    'bin': { zh: '垃圾桶', icon: '🗑️' },
    'sit': { zh: '坐下', icon: '🪑' },
    'hit': { zh: '击打', icon: '🥊' },
    'hop': { zh: '单脚跳', icon: '🦘' },
    'mop': { zh: '拖把', icon: '🧹' },
    'pop': { zh: '爆米花', icon: '🍿' },
    'top': { zh: '陀螺/顶端', icon: '🔝' },
    'hot': { zh: '热腾腾', icon: '🔥' },
    'pot': { zh: '锅子', icon: '🍲' },
    'bug': { zh: '小甲虫', icon: '🐞' },
    'mug': { zh: '马克杯', icon: '☕' },
    'rug': { zh: '地毯', icon: '🧶' },
    'hug': { zh: '拥抱', icon: '🤗' },
    'sun': { zh: '太阳', icon: '☀️' },
    'run': { zh: '奔跑', icon: '🏃' },
    'bun': { zh: '小面包', icon: '🥯' }
  }

  function updateBuilderWord() {
    const rimeClean = currentRime.replace('-', '')
    const fullWord = currentOnset + rimeClean
    if (builderResultBox) builderResultBox.textContent = fullWord

    if (validWordsDict[fullWord]) {
      const info = validWordsDict[fullWord]
      if (builderResultMeaning) builderResultMeaning.textContent = `✨ 释义：${info.zh}`
      if (builderResultIcon) builderResultIcon.textContent = info.icon
    } else {
      if (builderResultMeaning) builderResultMeaning.textContent = `💡 可以自然拼读发音的英文词根`
      if (builderResultIcon) builderResultIcon.textContent = '🔤'
    }

    speakEnglish(fullWord)
  }

  onsetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      onsetBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      currentOnset = btn.getAttribute('data-onset')
      updateBuilderWord()
    })
  })

  rimeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      rimeBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      currentRime = btn.getAttribute('data-rime')
      updateBuilderWord()
    })
  })

  if (builderSpeakBtn) {
    builderSpeakBtn.addEventListener('click', () => {
      const word = builderResultBox ? builderResultBox.textContent : 'cat'
      speakEnglish(word)
    })
  }

  // 4. Magic E 魔法变换开关交互
  document.querySelectorAll('.magic-e-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.magic-e-card')
      if (!card) return
      const isLong = card.classList.toggle('is-transformed')
      const shortWord = card.getAttribute('data-short')
      const longWord = card.getAttribute('data-long')

      if (isLong) {
        btn.textContent = '↩️ 还原短音'
        speakEnglish(longWord)
      } else {
        btn.textContent = '✨ 施展 Magic E'
        speakEnglish(shortWord)
      }
    })
  })

  // 5. Sight Words 等级筛选
  const sightFilterBtns = document.querySelectorAll('.sight-level-btn')
  const sightCards = document.querySelectorAll('.sight-word-card')

  sightFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lvl = btn.getAttribute('data-level')
      sightFilterBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')

      sightCards.forEach(card => {
        if (lvl === 'all' || card.getAttribute('data-level') === lvl) {
          card.classList.remove('hidden')
          card.style.display = 'block'
        } else {
          card.classList.add('hidden')
          card.style.display = 'none'
        }
      })
    })
  })

  // 6. 趣味闯关挑战模态 (Quiz Modal)
  const quizModal = document.getElementById('phonics-quiz-modal')
  const openQuizBtn = document.getElementById('btn-open-phonics-quiz')
  const closeQuizBtn = document.getElementById('phonics-quiz-close')

  let currentQuizIdx = 0
  let userScore = 0
  let activeQuestions = []

  if (openQuizBtn && quizModal) {
    openQuizBtn.addEventListener('click', () => {
      startNewPhonicsQuiz()
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

  function startNewPhonicsQuiz() {
    currentQuizIdx = 0
    userScore = 0
    const shuffled = [...phonicsQuiz].sort(() => 0.5 - Math.random())
    activeQuestions = shuffled.slice(0, 5)
    renderPhonicsQuizQuestion()
  }

  function renderPhonicsQuizQuestion() {
    const container = document.getElementById('phonics-quiz-body')
    if (!container) return

    if (currentQuizIdx >= activeQuestions.length) {
      container.innerHTML = `
        <div class="quiz-finish-card">
          <div class="quiz-finish-icon">🏆</div>
          <h3>恭喜通过自然拼读趣味闯关！</h3>
          <p class="quiz-final-score">本次得分：<strong>${userScore * 20}</strong> / 100 分</p>
          <div class="quiz-badge-award">
            ⭐⭐⭐⭐⭐【🔤 英语拼读小达人】
          </div>
          <p class="quiz-finish-desc">见词能读、听音能写！多听、多练、大声朗读，英语阅读之门已经为你敞开！</p>
          <button id="btn-phonics-restart" class="quiz-btn-restart">再挑战一轮</button>
        </div>
      `
      const restartBtn = document.getElementById('btn-phonics-restart')
      if (restartBtn) restartBtn.addEventListener('click', startNewPhonicsQuiz)
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
            renderPhonicsQuizQuestion()
          }
        }
      })
    })
  }

  // 7. 英文语音发音函数
  function speakEnglish(text, rate = 0.9) {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'en-US'
    utter.rate = rate
    window.speechSynthesis.speak(utter)
  }
})
