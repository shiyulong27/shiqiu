import * as echarts from 'echarts'

const dataEl = document.getElementById('ts-client-data')
if (dataEl) {
  const payload = JSON.parse(dataEl.textContent || '{}')
  const figuresById = new Map((payload.figures || []).map((f) => [f.id, f]))
  const relationsMap = payload.relationsMap || {}
  const edges = payload.edges || []
  const baseUrl = payload.baseUrl || '/'

  // ── 视图切换 Tabs ─────────────────────────────────────────
  const viewTabs = [...document.querySelectorAll('.ts-view-tab')]
  const viewPanes = {
    timeline: document.getElementById('pane-timeline'),
    graph: document.getElementById('pane-graph'),
    exile: document.getElementById('pane-exile'),
  }
  let currentView = 'timeline'
  let graphInstance = null
  let currentCircle = 'all'

  function switchView(view) {
    currentView = view
    viewTabs.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.view === view)
    })
    Object.entries(viewPanes).forEach(([k, el]) => {
      if (!el) return
      if (k === view) el.removeAttribute('hidden')
      else el.setAttribute('hidden', '')
    })
    if (view === 'graph') {
      requestAnimationFrame(() => renderGraph(currentCircle))
    }
  }

  viewTabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      switchView(btn.dataset.view || 'timeline')
    })
  })

  // ── 筛选状态与 DOM 引用 ────────────────────────────────────
  const toggleRulers = document.getElementById('flt-rulers')
  const toggleEvents = document.getElementById('flt-events')
  const toggleMinisters = document.getElementById('flt-ministers')
  const togglePoets = document.getElementById('flt-poets')
  const toggleCi = document.getElementById('flt-ci')
  const toggleExileOnly = document.getElementById('flt-exile-only')
  const searchInput = document.getElementById('ts-search-input')
  const searchClear = document.getElementById('ts-search-clear')

  const periodSections = [...document.querySelectorAll('.ts-period-section')]
  const yearRows = [...document.querySelectorAll('.ts-year-row')]
  const allCards = [...document.querySelectorAll('.ts-card')]
  const exileCards = [...document.querySelectorAll('.ts-exile-card')]
  const emptyBanner = document.getElementById('ts-empty-state')

  const workspace = document.getElementById('ts-workspace')
  const spotlight = document.getElementById('ts-spotlight')
  const spotContent = document.getElementById('ts-spot-content')
  const spotClose = document.getElementById('ts-spot-close')
  const focusBanner = document.getElementById('ts-focus-banner')
  const focusBannerText = document.getElementById('ts-focus-banner-text')
  const focusClearBtn = document.getElementById('ts-focus-clear')

  let focusedFigureId = null

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  // ── 时间轴筛选与关系聚焦高亮 ───────────────────────────────
  function applyFilters() {
    const showRulers = !!toggleRulers?.checked
    const showEvents = !!toggleEvents?.checked
    const showMinisters = !!toggleMinisters?.checked
    const showPoets = !!togglePoets?.checked
    const showCi = !!toggleCi?.checked
    const exileOnly = !!toggleExileOnly?.checked
    const q = (searchInput?.value || '').trim().toLowerCase()

    // 聚焦人物及其关联人物映射
    const peerRelMap = new Map()
    if (focusedFigureId) {
      for (const rel of relationsMap[focusedFigureId] || []) {
        peerRelMap.set(rel.peerId, rel)
      }
    }

    // 1. 更新所有时间轴卡片可见性与聚焦高亮
    for (const card of allCards) {
      const kind = card.dataset.kind // ruler | event | minister | exile | work
      const authorId = card.dataset.authorId || ''
      const isPoet = card.dataset.isPoet === '1'
      const isCi = card.dataset.isCi === '1'
      const isMinister = card.dataset.isMinister === '1'
      const isExile = card.dataset.isExile === '1'

      let visible = true

      if (exileOnly) {
        // 仅看贬谪模式：保留贬谪节点与贬谪作品，若开启皇帝也保留即位年作参考
        if (kind === 'work') visible = isExile
        else if (kind === 'exile') visible = true
        else if (kind === 'ruler') visible = showRulers && false
        else visible = false
      } else {
        if (kind === 'ruler') visible = showRulers
        else if (kind === 'event') visible = showEvents
        else if (kind === 'minister') visible = showMinisters
        else if (kind === 'exile' || kind === 'work') {
          const roleMatch =
            (isPoet && showPoets) ||
            (isCi && showCi) ||
            (isMinister && showMinisters) ||
            (!isPoet && !isCi && !isMinister && (showPoets || showCi))
          visible = roleMatch
        }
      }

      if (visible && q) {
        const haystack = (card.dataset.search || card.textContent || '').toLowerCase()
        visible = haystack.includes(q)
      }

      card.hidden = !visible

      // 关系聚焦标记
      card.classList.remove('is-focus-match', 'is-peer-match')
      const oldHint = card.querySelector('.ts-tag-rel-hint')
      if (oldHint) oldHint.remove()

      if (focusedFigureId && visible && authorId) {
        if (authorId === focusedFigureId) {
          card.classList.add('is-focus-match')
        } else if (peerRelMap.has(authorId)) {
          const rel = peerRelMap.get(authorId)
          card.classList.add('is-peer-match')
          const head = card.querySelector('.ts-card-head')
          if (head) {
            const badge = document.createElement('span')
            badge.className = 'ts-tag ts-tag-rel-hint'
            badge.textContent = `关联·${rel.type}`
            head.appendChild(badge)
          }
        }
      }
    }

    // 2. 更新年份行显隐与聚焦高亮
    let totalVisibleRows = 0
    for (const row of yearRows) {
      const cardsInRow = [...row.querySelectorAll('.ts-card')]
      const hasVisibleCard = cardsInRow.some((c) => !c.hidden)
      row.hidden = !hasVisibleCard
      if (hasVisibleCard) totalVisibleRows++

      row.classList.remove('is-highlighted', 'is-dimmed')
      if (focusedFigureId && hasVisibleCard) {
        const hasMatch = cardsInRow.some(
          (c) => !c.hidden && (c.classList.contains('is-focus-match') || c.classList.contains('is-peer-match'))
        )
        if (hasMatch) row.classList.add('is-highlighted')
        else row.classList.add('is-dimmed')
      }
    }

    // 3. 更新时期区块显隐与名录芯片高亮
    for (const sec of periodSections) {
      const rowsInSec = [...sec.querySelectorAll('.ts-year-row')]
      const hasRows = rowsInSec.some((r) => !r.hidden)
      sec.hidden = !hasRows

      sec.querySelectorAll('.ts-roster-chip[data-fig-id]').forEach((chip) => {
        const fid = chip.dataset.figId
        chip.classList.remove('is-focused', 'is-peer', 'is-dimmed')
        if (focusedFigureId) {
          if (fid === focusedFigureId) chip.classList.add('is-focused')
          else if (peerRelMap.has(fid)) chip.classList.add('is-peer')
          else chip.classList.add('is-dimmed')
        }
      })
    }

    if (emptyBanner) {
      emptyBanner.hidden = totalVisibleRows > 0
    }

    // 4. 同步过滤「贬谪诗路编年」视图卡片
    for (const ec of exileCards) {
      const authorId = ec.dataset.authorId || ''
      let vis = true
      if (q) {
        const haystack = (ec.dataset.search || ec.textContent || '').toLowerCase()
        vis = haystack.includes(q)
      }
      if (focusedFigureId && authorId !== focusedFigureId && !peerRelMap.has(authorId)) {
        // 聚焦时不隐藏，改为弱化提示，或者保持搜索优先
      }
      ec.hidden = !vis
      ec.classList.toggle('is-focus-match', !!focusedFigureId && authorId === focusedFigureId)
    }
  }

  // ── 人物聚焦抽屉（Spotlight） ──────────────────────────────
  function focusFigure(figureId, options = {}) {
    const fig = figuresById.get(figureId)
    if (!fig) return
    focusedFigureId = figureId

    const rels = relationsMap[figureId] || []
    if (focusBanner && focusBannerText) {
      focusBannerText.innerHTML = `当前聚焦：<strong>${escapeHtml(fig.name)}</strong>（${fig.startYear ?? '?'}–${fig.endYear ?? '?'}） · 共关联 <strong>${rels.length}</strong> 位唐宋名士/政要，时间轴已自动高亮本人及好友/政敌节点`
      focusBanner.removeAttribute('hidden')
    }

    if (spotlight && spotContent && workspace) {
      workspace.classList.add('has-spotlight')
      spotlight.removeAttribute('hidden')

      const styleNames = [
        fig.courtesyName ? `字${fig.courtesyName}` : '',
        fig.artName ? `号${fig.artName}` : '',
      ]
        .filter(Boolean)
        .join(' · ')

      const relHtml =
        rels.length > 0
          ? rels
              .map((r) => {
                const overlapText =
                  r.overlapStart != null && r.overlapEnd != null
                    ? `生命交集 ${r.overlapStart}–${r.overlapEnd}`
                    : ''
                return `
                  <div class="ts-spot-rel-item">
                    <div class="ts-spot-rel-top">
                      <button type="button" class="ts-author-btn js-focus-fig" data-fig-id="${escapeHtml(r.peerId)}">${escapeHtml(r.peerName)}</button>
                      <span class="ts-rel-badge" data-type="${escapeHtml(r.type)}">${escapeHtml(r.type)}</span>
                    </div>
                    <div class="ts-card-meta">${escapeHtml(r.periodText || overlapText)}</div>
                    ${r.evidence ? `<p class="ts-card-summary">${escapeHtml(r.evidence)}</p>` : ''}
                  </div>
                `
              })
              .join('')
          : '<p class="ts-card-meta">暂无已录入的交叉关系，可查看其生平作品与同朝政局。</p>'

      const worksHtml =
        fig.works && fig.works.length > 0
          ? fig.works
              .map(
                (w) => `
                <div class="ts-spot-work-item ${w.isExile ? 'is-exile' : ''}">
                  <div>
                    <strong>${escapeHtml(w.dateText)}</strong> ·
                    <strong>《${escapeHtml(w.title)}》</strong>
                    ${w.place ? `<span class="ts-tag ts-tag-place">${escapeHtml(w.place)}</span>` : ''}
                    ${w.isExile ? '<span class="ts-tag ts-tag-exile">贬谪/迁谪</span>' : ''}
                  </div>
                  <div class="ts-card-summary">${escapeHtml(w.context)}</div>
                  ${w.excerpt ? `<div class="ts-work-excerpt">${escapeHtml(w.excerpt)}</div>` : ''}
                </div>
              `
              )
              .join('')
          : '<p class="ts-card-meta">该人物暂无系年诗词收录（可结合同朝事件查看其政局影响）。</p>'

      const officesHtml =
        fig.offices && fig.offices.length > 0
          ? `<div class="ts-card-meta" style="margin-top:0.35rem;">历任官职：${escapeHtml(fig.offices.slice(0, 8).join('、'))}${fig.offices.length > 8 ? ' 等' : ''}</div>`
          : ''

      const detailLinkHtml = fig.detailPath
        ? `<a class="ts-nav-link" style="margin-top:0.5rem;" href="${escapeHtml(baseUrl + fig.detailPath)}">📖 打开「${escapeHtml(fig.name)}」完整全景详卷 ➔</a>`
        : ''

      spotContent.innerHTML = `
        <div class="ts-spot-head">
          <div>
            <h3 class="ts-spot-name">${escapeHtml(fig.name)}</h3>
            <div class="ts-spot-sub">
              ${escapeHtml(styleNames ? styleNames + ' · ' : '')}${fig.startYear ?? '?'}–${fig.endYear ?? '?'}
              · ${escapeHtml((fig.roles && fig.roles.length ? fig.roles : [fig.field]).join(' / '))}
            </div>
          </div>
        </div>
        <p class="ts-card-summary">${escapeHtml(fig.note)}</p>
        ${officesHtml}
        ${detailLinkHtml}
        <div style="margin-top:0.65rem;">
          <button type="button" class="ts-period-jump js-locate-timeline" data-fig-id="${escapeHtml(fig.id)}">📍 在时间轴中定位此人</button>
        </div>

        <div class="ts-spot-section">
          <h4>🤝 人物关系网（${rels.length}）</h4>
          <div class="ts-spot-rel-list">${relHtml}</div>
        </div>

        <div class="ts-spot-section">
          <h4>✍️ 系年作品与创作地（${fig.works?.length || 0}）</h4>
          <div>${worksHtml}</div>
        </div>
      `
    }

    applyFilters()

    if (options.scrollToTimeline) {
      if (currentView !== 'timeline') switchView('timeline')
      requestAnimationFrame(() => {
        const firstMatch = document.querySelector('.ts-year-row:not([hidden]) .ts-card.is-focus-match')
        firstMatch?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
    }
  }

  function clearFocus() {
    focusedFigureId = null
    if (focusBanner) focusBanner.setAttribute('hidden', '')
    if (spotlight) spotlight.setAttribute('hidden', '')
    if (workspace) workspace.classList.remove('has-spotlight')
    applyFilters()
  }

  spotClose?.addEventListener('click', clearFocus)
  focusClearBtn?.addEventListener('click', clearFocus)

  // 全局点击事件委托：任意人物按钮/名录芯片
  document.addEventListener('click', (e) => {
    const locateBtn = e.target.closest('.js-locate-timeline')
    if (locateBtn) {
      const fid = locateBtn.dataset.figId
      if (fid) focusFigure(fid, { scrollToTimeline: true })
      return
    }
    const figBtn = e.target.closest('[data-fig-id], .js-focus-fig')
    if (figBtn) {
      const fid = figBtn.dataset.figId
      if (fid && figuresById.has(fid)) {
        focusFigure(fid)
      }
    }
  })

  // ── 朝代阶段快捷跳转 ──────────────────────────────────────
  const periodJumpBtns = [...document.querySelectorAll('.ts-period-jump[data-period-id]')]
  periodJumpBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.periodId
      if (!pid) return
      if (currentView !== 'timeline') switchView('timeline')
      const target = document.getElementById(`period-${pid}`)
      if (target) {
        if (target.hidden) {
          // 若当前筛选把该时期藏住了，提醒或重置部分条件
          clearFocus()
        }
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        periodJumpBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.periodId === pid))
      }
    })
  })

  // ── 筛选监听 ──────────────────────────────────────────────
  ;[toggleRulers, toggleEvents, toggleMinisters, togglePoets, toggleCi, toggleExileOnly].forEach((el) => {
    el?.addEventListener('change', applyFilters)
  })

  let searchTimer = null
  searchInput?.addEventListener('input', () => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(applyFilters, 120)
  })

  searchClear?.addEventListener('click', () => {
    if (searchInput) searchInput.value = ''
    applyFilters()
  })

  // ── ECharts 名士关系图谱 ──────────────────────────────────
  const circleBtns = [...document.querySelectorAll('.ts-circle-btn[data-circle]')]
  circleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentCircle = btn.dataset.circle || 'all'
      circleBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.circle === currentCircle))
      renderGraph(currentCircle)
    })
  })

  const EDGE_COLOR = {
    '挚友': '#d35400',
    '亲属': '#b7950b',
    '师承': '#1e8449',
    '论敌': '#8e44ad',
    '同僚': '#2471a3',
    '社群': '#7f8c8d',
    '思想影响': '#95a5a6',
    '后世附会': '#bdc3c7',
  }

  function matchCircle(fig, circle) {
    if (circle === 'all') return true
    if (circle === 'shengtang') return fig.periodId === 'chutang' || fig.periodId === 'shengtang'
    if (circle === 'zhongtang') return fig.periodId === 'zhongtang' || fig.periodId === 'wantang'
    if (circle === 'beisong') return fig.periodId === 'wudai' || fig.periodId === 'beisong'
    if (circle === 'nansong') return fig.periodId === 'nansong'
    return true
  }

  function renderGraph(circle) {
    const dom = document.getElementById('ts-graph-canvas')
    if (!dom) return
    if (!graphInstance) {
      graphInstance = echarts.init(dom)
      graphInstance.on('click', (params) => {
        if (params.dataType === 'node' && params.data?.id) {
          focusFigure(params.data.id)
        }
      })
      window.addEventListener('resize', () => graphInstance?.resize())
    }

    // 仅抽取有关系连接的人物 + 当前圈层筛选
    const connectedIds = new Set()
    for (const edge of edges) {
      connectedIds.add(edge.sourceId)
      connectedIds.add(edge.targetId)
    }

    const activeFigs = (payload.figures || []).filter(
      (f) => connectedIds.has(f.id) && matchCircle(f, circle)
    )
    const activeSet = new Set(activeFigs.map((f) => f.id))

    const degreeMap = new Map()
    const activeEdges = edges.filter((e) => {
      if (!activeSet.has(e.sourceId) || !activeSet.has(e.targetId)) return false
      degreeMap.set(e.sourceId, (degreeMap.get(e.sourceId) || 0) + 1)
      degreeMap.set(e.targetId, (degreeMap.get(e.targetId) || 0) + 1)
      return true
    })

    const categories = [
      { name: '诗人', itemStyle: { color: '#b03a2e' } },
      { name: '词人', itemStyle: { color: '#7d3c98' } },
      { name: '宰相/名臣/将领', itemStyle: { color: '#1f618d' } },
      { name: '思想/书画/其他', itemStyle: { color: '#117a65' } },
    ]

    const nodes = activeFigs.map((f) => {
      const catIdx = f.isMinister && !f.isPoet && !f.isCi
        ? 2
        : f.isCi && !f.isPoet
          ? 1
          : f.isPoet || f.isCi
            ? 0
            : 3
      const deg = degreeMap.get(f.id) || 1
      return {
        id: f.id,
        name: f.name,
        category: catIdx,
        symbolSize: Math.min(48, 22 + deg * 4),
        value: `${f.startYear ?? '?'}–${f.endYear ?? '?'} · 关系 ${deg} 条 · 作品 ${f.works?.length || 0} 篇`,
        label: {
          show: true,
          fontSize: deg >= 3 ? 13 : 11,
          fontWeight: deg >= 3 ? 'bold' : 'normal',
        },
      }
    })

    const links = activeEdges.map((e) => ({
      source: e.sourceId,
      target: e.targetId,
      value: e.type,
      lineStyle: {
        color: EDGE_COLOR[e.type] || '#888',
        width: e.type === '挚友' || e.type === '论敌' || e.type === '师承' ? 2.4 : 1.4,
        type: e.type === '思想影响' || e.type === '后世附会' ? 'dashed' : 'solid',
        curveness: 0.14,
      },
      label: {
        show: activeEdges.length <= 45,
        formatter: e.type,
        fontSize: 10,
        color: EDGE_COLOR[e.type] || '#666',
      },
    }))

    graphInstance.setOption({
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          if (params.dataType === 'node') {
            return `<strong>${escapeHtml(params.data.name)}</strong><br/>${escapeHtml(params.data.value)}<br/><span style="color:#9c2c1c;">点击查看关系与作品详情</span>`
          }
          if (params.dataType === 'edge') {
            const src = figuresById.get(params.data.source)?.name || params.data.source
            const tgt = figuresById.get(params.data.target)?.name || params.data.target
            return `${escapeHtml(src)} ⇄ ${escapeHtml(tgt)}：<strong>${escapeHtml(params.data.value)}</strong>`
          }
          return ''
        },
      },
      legend: {
        data: categories.map((c) => c.name),
        top: 6,
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: nodes,
          links,
          categories,
          roam: true,
          draggable: true,
          emphasis: {
            focus: 'adjacency',
            lineStyle: { width: 4 },
          },
          force: {
            repulsion: circle === 'all' ? 320 : 480,
            edgeLength: [85, 160],
            gravity: 0.08,
          },
        },
      ],
    }, true)
  }

  // 初始化应用
  applyFilters()
}
