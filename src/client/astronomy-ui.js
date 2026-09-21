/**
 * 浩瀚星空与天文学通识客户端交互脚本
 */
import {
  ancientAstronomyData,
  modernConstellationsData,
  solarSystemData,
  astronomyQuiz
} from '../data/astronomyData.js'

document.addEventListener('DOMContentLoaded', () => {
  // 1. 四重视角切换控制器 (Ancient / Modern / Solar / Deep)
  const viewTabs = document.querySelectorAll('.astro-view-tab')
  const viewSections = {
    ancient: document.getElementById('view-ancient'),
    modern: document.getElementById('view-modern'),
    solar: document.getElementById('view-solar'),
    deep: document.getElementById('view-deep')
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

  // 2. 东方四象切换控制器 (青龙 / 玄武 / 白虎 / 朱雀)
  const symbolTabs = document.querySelectorAll('.symbol-nav-btn')
  const symbolCards = document.querySelectorAll('.symbol-section-box')

  symbolTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const symId = btn.getAttribute('data-symbol')
      symbolTabs.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')

      symbolCards.forEach(box => {
        if (box.getAttribute('data-symbol-id') === symId) {
          box.classList.remove('hidden')
          box.style.display = 'block'
        } else {
          box.classList.add('hidden')
          box.style.display = 'none'
        }
      })
    })
  })

  // 3. 动态月相模拟器交互 (Moon Phase Slider)
  const moonSlider = document.getElementById('moon-phase-slider')
  const moonDayDisplay = document.getElementById('moon-day-display')
  const moonIconDisplay = document.getElementById('moon-icon-display')
  const moonNameDisplay = document.getElementById('moon-name-display')
  const moonDescDisplay = document.getElementById('moon-desc-display')
  const moonVisualSphere = document.getElementById('moon-visual-sphere')

  if (moonSlider) {
    moonSlider.addEventListener('input', (e) => {
      const day = parseInt(e.target.value, 10)
      if (moonDayDisplay) moonDayDisplay.textContent = `农历 ${getLunarDayName(day)}`

      // 匹配最近的月相配置
      const phases = solarSystemData.moonPhases
      let matched = phases[0]
      for (let i = 0; i < phases.length; i++) {
        if (day >= phases[i].day) {
          matched = phases[i]
        }
      }

      if (moonIconDisplay) moonIconDisplay.textContent = matched.shape
      if (moonNameDisplay) moonNameDisplay.textContent = matched.name
      if (moonDescDisplay) moonDescDisplay.textContent = matched.desc

      // 动态调整阴影比例
      if (moonVisualSphere) {
        updateMoonVisual(moonVisualSphere, day)
      }
    })
  }

  function getLunarDayName(day) {
    const units = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
    if (day === 1) return '初一 (朔日)'
    if (day <= 10) return `初${units[day]}`
    if (day === 15) return '十五 (望日)'
    if (day < 20) return `十${units[day - 10]}`
    if (day === 20) return '二十'
    if (day < 30) return `廿${units[day - 20]}`
    return '三十 (晦日)'
  }

  function updateMoonVisual(sphere, day) {
    // 30 天周期中的月相渲染：初一全黑，十五全亮
    let progress = (day - 1) / 29 // 0 到 1
    // 光照百分比：初一 0%，十五 100%，三十 0%
    let litPercent = Math.sin(progress * Math.PI) * 100
    if (progress <= 0.5) {
      // 上半月，亮面在右
      sphere.style.background = `radial-gradient(circle at 75% 50%, #fef08a 0%, #ca8a04 ${litPercent}%, #0f172a 100%)`
    } else {
      // 下半月，亮面在左
      sphere.style.background = `radial-gradient(circle at 25% 50%, #fef08a 0%, #ca8a04 ${litPercent}%, #0f172a 100%)`
    }
  }

  // 4. 星宿与天体详卷模态弹窗 (Detail Modal)
  const detailModal = document.getElementById('astro-detail-modal')
  const detailCloseBtn = document.getElementById('astro-detail-close')
  const detailTitle = document.getElementById('astro-detail-title')
  const detailTag = document.getElementById('astro-detail-tag')
  const detailBody = document.getElementById('astro-detail-body')
  const detailVoiceBtn = document.getElementById('astro-detail-voice')

  function openDetailModal(title, tag, htmlContent, textToSpeak) {
    if (!detailModal) return
    if (detailTitle) detailTitle.textContent = title
    if (detailTag) detailTag.textContent = tag
    if (detailBody) detailBody.innerHTML = htmlContent
    detailModal.classList.remove('hidden')
    detailModal.style.display = 'flex'

    if (detailVoiceBtn) {
      detailVoiceBtn.onclick = () => {
        speakText(`${title}。${textToSpeak}`)
      }
    }
  }

  function closeDetailModal() {
    if (detailModal) {
      detailModal.classList.add('hidden')
      detailModal.style.display = 'none'
      if (window.speechSynthesis) window.speechSynthesis.cancel()
    }
  }

  if (detailCloseBtn) detailCloseBtn.addEventListener('click', closeDetailModal)
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeDetailModal()
    })
  }

  // 绑定宿卡片点击展开详情
  document.querySelectorAll('.mansion-card').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.getAttribute('data-name')
      const modern = card.getAttribute('data-modern')
      const meaning = card.getAttribute('data-meaning')
      const role = card.getAttribute('data-role')
      const symbol = card.getAttribute('data-symbol')

      const html = `
        <div class="modal-detail-card">
          <div class="detail-row"><strong>所属天象：</strong> <span>${symbol}</span></div>
          <div class="detail-row"><strong>现代星座对照：</strong> <span>${modern}</span></div>
          <div class="detail-row"><strong>古籍原义：</strong> <p class="detail-p">${meaning}</p></div>
          <div class="detail-row"><strong>司掌天命：</strong> <p class="detail-p">${role}</p></div>
        </div>
      `
      openDetailModal(`${name} 详卷`, symbol, html, `${name}，属于${symbol}。现代对应${modern}。${meaning}。${role}`)
    })
  })

  // 绑定行星卡片点击展开详情
  document.querySelectorAll('.planet-card').forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-planet-id')
      const p = solarSystemData.planets.find(item => item.id === pId)
      if (!p) return

      const html = `
        <div class="modal-detail-card">
          <div class="planet-avatar-large" style="color: ${p.color}; font-size: 3rem; text-align: center; margin-bottom: 1rem;">
            ${p.icon}
          </div>
          <div class="detail-row"><strong>行星类型：</strong> <span>${p.type}</span></div>
          <div class="detail-row"><strong>日距：</strong> <span>${p.distFromSun}</span></div>
          <div class="detail-row"><strong>公转与自转：</strong> <span>公转 ${p.orbitalPeriod} · 自转 ${p.rotationPeriod}</span></div>
          <div class="detail-row"><strong>大小比例：</strong> <span>相对地球直径 ${p.diameterRatio} 倍 · 卫星数 ${p.moons} 颗</span></div>
          <div class="detail-row"><strong>表面温度：</strong> <span>${p.surfaceTemp}</span></div>
          <div class="detail-row"><strong>奇妙核心特征：</strong> <p class="detail-p">${p.keyFeature}</p></div>
          <div class="detail-row"><strong>速记口诀：</strong> <div class="rhyme-box">💡 ${p.memoryRhyme}</div></div>
        </div>
      `
      openDetailModal(`${p.name} (${p.en})`, p.type, html, `${p.name}，${p.type}。${p.keyFeature}。速记口诀：${p.memoryRhyme}`)
    })
  })

  // 5. 四季观星指南模态弹窗 (Stargazing Guide Modal)
  const guideModal = document.getElementById('astro-guide-modal')
  const openGuideBtn = document.getElementById('btn-open-stargazing-guide')
  const closeGuideBtn = document.getElementById('astro-guide-close')

  if (openGuideBtn && guideModal) {
    openGuideBtn.addEventListener('click', () => {
      guideModal.classList.remove('hidden')
      guideModal.style.display = 'flex'
    })
  }
  if (closeGuideBtn && guideModal) {
    closeGuideBtn.addEventListener('click', () => {
      guideModal.classList.add('hidden')
      guideModal.style.display = 'none'
    })
  }
  if (guideModal) {
    guideModal.addEventListener('click', (e) => {
      if (e.target === guideModal) {
        guideModal.classList.add('hidden')
        guideModal.style.display = 'none'
      }
    })
  }

  // 6. 天文小院士亲子挑战模态 (Quiz Modal)
  const quizModal = document.getElementById('astro-quiz-modal')
  const openQuizBtn = document.getElementById('btn-open-astro-quiz')
  const closeQuizBtn = document.getElementById('astro-quiz-close')

  let currentQuizIdx = 0
  let userScore = 0
  let activeQuestions = []

  if (openQuizBtn && quizModal) {
    openQuizBtn.addEventListener('click', () => {
      startNewQuiz()
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

  function startNewQuiz() {
    currentQuizIdx = 0
    userScore = 0
    // 随机抽取 5 题
    const shuffled = [...astronomyQuiz].sort(() => 0.5 - Math.random())
    activeQuestions = shuffled.slice(0, 5)
    renderQuizQuestion()
  }

  function renderQuizQuestion() {
    const container = document.getElementById('astro-quiz-body')
    if (!container) return

    if (currentQuizIdx >= activeQuestions.length) {
      // 挑战完成
      container.innerHTML = `
        <div class="quiz-finish-card">
          <div class="quiz-finish-icon">🏆</div>
          <h3>恭喜完成星空小院士挑战！</h3>
          <p class="quiz-final-score">本次得分：<strong>${userScore * 20}</strong> / 100 分</p>
          <div class="quiz-badge-award">
            ⭐⭐⭐⭐⭐【🔭 华夏未来天文小院士】
          </div>
          <p class="quiz-finish-desc">无论古人仰望的三垣二十八宿，还是遨游星辰大海的现代天文学，浩瀚宇宙的奥秘永远等待你去探索！</p>
          <button id="btn-quiz-restart" class="quiz-btn-restart">再战一轮</button>
        </div>
      `
      const restartBtn = document.getElementById('btn-quiz-restart')
      if (restartBtn) restartBtn.addEventListener('click', startNewQuiz)
      return
    }

    const q = activeQuestions[currentQuizIdx]
    container.innerHTML = `
      <div class="quiz-card-box">
        <div class="quiz-progress-bar">
          第 ${currentQuizIdx + 1} / ${activeQuestions.length} 关
        </div>
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
        // 锁定所有选项
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
            renderQuizQuestion()
          }
        }
      })
    })
  }

  // 7. 语音朗读辅助函数
  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      alert('您的浏览器暂不支持语音朗读')
      return
    }
    window.speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'zh-CN'
    utter.rate = 0.95
    window.speechSynthesis.speak(utter)
  }

  // 8. 真实深空天体全屏灯箱
  const deepCards = document.querySelectorAll('.deep-card')
  const astroLightbox = document.getElementById('astro-lightbox-modal')
  const astroLightboxImg = document.getElementById('astro-lightbox-img')
  const astroLightboxCaption = document.getElementById('astro-lightbox-caption')
  const closeAstroLightbox = document.getElementById('btn-close-astro-lightbox')

  if (astroLightbox) {
    deepCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.getAttribute('data-img')
        const title = card.getAttribute('data-title')
        const desc = card.getAttribute('data-desc')
        const secret = card.getAttribute('data-secret')
        if (img && astroLightboxImg) {
          astroLightboxImg.src = img
          astroLightboxImg.alt = title
          if (astroLightboxCaption) {
            astroLightboxCaption.innerHTML = `<strong>${title}</strong><br><span style="font-size:0.85rem; color:#94a3b8;">${desc}</span><br><span style="font-size:0.8rem; color:#fde047;">💡 ${secret}</span>`
          }
          astroLightbox.style.display = 'flex'
        }
      })
    })

    if (closeAstroLightbox) {
      closeAstroLightbox.addEventListener('click', () => {
        astroLightbox.style.display = 'none'
      })
    }

    astroLightbox.addEventListener('click', (e) => {
      if (e.target === astroLightbox) {
        astroLightbox.style.display = 'none'
      }
    })
  }

  // 键盘 ESC 快捷关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (astroLightbox && astroLightbox.style.display === 'flex') {
        astroLightbox.style.display = 'none'
        return
      }
      const modals = document.querySelectorAll('.astro-modal:not(.hidden)')
      modals.forEach(m => m.classList.add('hidden'))
    }
  })
})
