import { yearOf } from './date.js'

export const TANG_SONG_START = 618
export const TANG_SONG_END = 1279

export const PERIODS = [
  { id: 'chutang', name: '初唐', start: 618, end: 712, color: '#b03a2e', desc: '武德开国至景云禅让，贞观盛世与初唐四杰、陈子昂开诗风' },
  { id: 'shengtang', name: '盛唐', start: 713, end: 765, color: '#9c2c1c', desc: '开元天宝盛世至安史平定，李白、杜甫、高适、岑参、王维、孟浩然群星璀璨' },
  { id: 'zhongtang', name: '中唐', start: 766, end: 824, color: '#884ea0', desc: '元和中兴、古文运动与新乐府，韩愈、柳宗元、白居易、元稹、刘禹锡并起' },
  { id: 'wantang', name: '晚唐', start: 825, end: 907, color: '#7d3c98', desc: '牛李党争与藩镇割据，小李杜（杜牧、李商隐）吟咏兴亡' },
  { id: 'wudai', name: '五代十国', start: 907, end: 960, color: '#5d6d7e', desc: '政权更迭，花间词兴起，南唐后主李煜开创词境新天地' },
  { id: 'beisong', name: '北宋', start: 960, end: 1127, color: '#1f618d', desc: '庆历新政、熙宁变法与新旧党争，欧阳修、范仲淹、王安石、司马光、苏轼、苏门四学士同辉' },
  { id: 'nansong', name: '南宋', start: 1127, end: 1279, color: '#154360', desc: '偏安抗金与乾淳之治，岳飞、秦桧、李清照、陆游、范成大、杨万里、辛弃疾、姜夔' },
]

export function getPeriodForYear(y) {
  if (y <= 712) return PERIODS[0]
  if (y <= 765) return PERIODS[1]
  if (y <= 824) return PERIODS[2]
  if (y <= 907) return PERIODS[3]
  if (y < 960) return PERIODS[4]
  if (y <= 1127) return PERIODS[5]
  return PERIODS[6]
}

const EXILE_THEMES = new Set(['贬谪', '迁谪', '流放', '遇赦', '贬官', '左迁'])
const EXILE_PATTERN = /(被贬|左迁|流放|贬官|贬居|贬所|迁谪|安置|团练副使|别驾|长流|永贞|乌台|南迁|黄州|惠州|儋州|永州|柳州|潮州|朗州|连州|江州|忠州|夷陵|滁州|龙标|夜郎|崖州|雷州)/

export function isExileContext({ themes = [], title = '', context = '', place = '' }) {
  if (themes.some((t) => EXILE_THEMES.has(t))) return true
  const combined = `${title} ${context} ${place}`
  return EXILE_PATTERN.test(combined)
}

function parseApproxYearFromNote(note) {
  if (!note || typeof note !== 'string') return null
  const m = /(?:约|生于|卒于|前)?\s*(\d{3,4})/.exec(note)
  if (!m) return null
  const y = Number(m[1])
  return Number.isFinite(y) ? y : null
}

function resolveFigureSpan(f, detail) {
  let start = f.birth ? yearOf(f.birth) : parseApproxYearFromNote(f.birth_note)
  let end = f.death ? yearOf(f.death) : parseApproxYearFromNote(f.death_note)

  const detailYears = []
  if (detail) {
    for (const item of detail.timeline ?? []) {
      if (typeof item.date?.year === 'number') detailYears.push(item.date.year)
      if (typeof item.date?.range_end === 'number') detailYears.push(item.date.range_end)
    }
    for (const w of detail.works ?? []) {
      if (typeof w.date?.year === 'number') detailYears.push(w.date.year)
    }
  }
  if (start == null && detailYears.length > 0) start = Math.min(...detailYears) - 15
  if (end == null && detailYears.length > 0) end = Math.max(...detailYears) + 5
  if (start != null && end == null) end = Math.min(start + 60, TANG_SONG_END)
  if (end != null && start == null) start = Math.max(end - 60, TANG_SONG_START)
  return { startYear: start, endYear: end }
}

const TANG_SONG_DYNASTIES = new Set([
  'tang',
  'wudai', 'houliang', 'houtang', 'houjin', 'houhan', 'houzhou',
  'song', 'beisong', 'nansong',
])

function isTangSongFigure(f, span) {
  if (f.id === 'guanhanqing' || f.id === 'guoshoujing' || f.id === 'zhaomengfu') return false
  if (Array.isArray(f.related_dynasties) && f.related_dynasties.some((d) => TANG_SONG_DYNASTIES.has(d))) {
    return true
  }
  if (span.startYear == null || span.endYear == null) return false
  return span.startYear <= 1250 && span.endYear >= 618
}

const REL_PRIORITY = {
  '挚友': 1,
  '亲属': 2,
  '师承': 3,
  '论敌': 4,
  '同僚': 5,
  '社群': 6,
  '思想影响': 7,
  '后世附会': 8,
}

/**
 * 构建唐宋风云诗画长卷数据模型（纯函数，无 DOM/Astro 依赖）。
 */
export function buildTangSongTimeline(data) {
  const { rulers = [], events = [], figures = [], figureDetails = [] } = data
  const detailById = new Map(figureDetails.map((d) => [d.id, d]))

  // 1. 唐、五代、两宋皇帝序列
  const tsRulers = rulers
    .filter((r) => TANG_SONG_DYNASTIES.has(r.dynasty))
    .map((r) => {
      const startYear = yearOf(r.reign_start)
      const endYear = yearOf(r.reign_end)
      return {
        id: `${r.dynasty}-${r.temple_name}`,
        dynasty: r.dynasty,
        dynastyName:
          r.dynasty === 'tang'
            ? '唐'
            : r.dynasty === 'beisong'
              ? '北宋'
              : r.dynasty === 'nansong'
                ? '南宋'
                : r.dynasty === 'houliang'
                  ? '后梁'
                  : r.dynasty === 'houzhou'
                    ? '后周'
                    : '五代',
        templeName: r.temple_name,
        name: r.name ?? '',
        startYear,
        endYear,
        eraNames: r.era_names ?? [],
        note: r.note ?? '',
        periodId: getPeriodForYear(Math.round((startYear + endYear) / 2)).id,
      }
    })
    .sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear)

  const rulerAtYear = (y) => {
    const matches = tsRulers.filter((r) => y >= r.startYear && y <= r.endYear)
    return matches[matches.length - 1] ?? null
  }

  // 2. 唐宋重大历史事件（618–1279）
  const tsEvents = events
    .filter((e) => {
      const y = yearOf(e.date)
      return y >= TANG_SONG_START && y <= TANG_SONG_END
    })
    .map((e) => {
      const y = yearOf(e.date)
      return {
        id: e.id,
        year: y,
        date: e.date,
        title: e.title,
        category: e.category,
        importance: Number(e.importance) || 3,
        summary: e.summary ?? '',
        tags: e.tags ?? [],
        relatedDynasties: e.related_dynasties ?? [],
        periodId: getPeriodForYear(y).id,
      }
    })
    .sort((a, b) => a.year - b.year || b.importance - a.importance)

  // 3. 唐宋人物（诗人、词人、宰相名臣、名将、思想家、书画家）
  const tsFigures = []
  const figureMap = new Map()

  for (const f of figures) {
    const detail = detailById.get(f.id)
    const span = resolveFigureSpan(f, detail)
    if (!isTangSongFigure(f, span)) continue

    const roles = f.roles ?? []
    const isPoet = roles.includes('诗人')
    const isCi = roles.includes('词人')
    const isMinister =
      f.field === '政治' ||
      f.field === '军事' ||
      roles.includes('政治家') ||
      roles.includes('军事家')
    const isLiterati = f.field === '文学' || isPoet || isCi

    const works = (detail?.works ?? [])
      .map((w) => {
        const wy = typeof w.date?.year === 'number' ? w.date.year : null
        const exile = isExileContext({
          themes: w.themes ?? [],
          title: w.title ?? '',
          context: w.context ?? '',
          place: w.place ?? '',
        })
        return {
          workId: w.work_id,
          title: w.title,
          genre: w.genre ?? '',
          year: wy,
          dateText: w.date?.text ?? (wy ? `${wy}年` : '年代不详'),
          place: w.place ?? '',
          context: w.context ?? '',
          excerpt: w.excerpt ?? '',
          themes: w.themes ?? [],
          attribution: w.attribution ?? '确凿',
          isExile: exile,
        }
      })
      .sort((a, b) => (a.year ?? 9999) - (b.year ?? 9999))

    const footprints = (detail?.footprints ?? [])
      .filter((fp) => !fp.memorial_only)
      .map((fp) => ({
        name: fp.name,
        modernName: fp.modern_name ?? '',
        kind: fp.kind ?? '',
        year: typeof fp.visit_date?.year === 'number' ? fp.visit_date.year : null,
        rangeEnd: typeof fp.visit_date?.range_end === 'number' ? fp.visit_date.range_end : null,
        dateText: fp.visit_date?.text ?? '',
      }))

    const timelineNodes = (detail?.timeline ?? []).map((t) => {
      const ty = typeof t.date?.year === 'number' ? t.date.year : null
      const exile = isExileContext({
        title: t.title ?? '',
        context: t.summary ?? '',
        place: t.place ?? '',
      })
      return {
        stage: t.stage ?? '',
        title: t.title ?? '',
        year: ty,
        rangeEnd: typeof t.date?.range_end === 'number' ? t.date.range_end : null,
        dateText: t.date?.text ?? '',
        place: t.place ?? '',
        summary: t.summary ?? '',
        isExile: exile,
      }
    })

    const midYear =
      span.startYear != null && span.endYear != null
        ? Math.round((span.startYear + span.endYear) / 2)
        : TANG_SONG_START
    const activeMid = Math.min(Math.max(midYear + 10, TANG_SONG_START), TANG_SONG_END)

    const figObj = {
      id: f.id,
      name: f.name,
      field: f.field,
      roles,
      tags: f.tags ?? [],
      note: detail?.profile?.summary ?? f.note ?? '',
      courtesyName: detail?.profile?.courtesy_name ?? '',
      artName: detail?.profile?.art_name ?? '',
      offices: detail?.profile?.offices ?? [],
      startYear: span.startYear,
      endYear: span.endYear,
      birthExact: !!f.birth,
      deathExact: !!f.death,
      hasDetail: !!detail,
      detailPath: detail ? `figure/${f.id}/` : null,
      isPoet,
      isCi,
      isMinister,
      isLiterati,
      periodId: getPeriodForYear(activeMid).id,
      works,
      exileWorksCount: works.filter((w) => w.isExile).length,
      footprints,
      exilePlacesCount: footprints.filter((fp) => fp.kind === '谪迁').length,
      timelineNodes,
    }

    tsFigures.push(figObj)
    figureMap.set(f.id, figObj)
  }

  tsFigures.sort((a, b) => (a.startYear ?? 9999) - (b.startYear ?? 9999) || a.name.localeCompare(b.name, 'zh-Hans-CN'))

  // 4. 双向关系归并（每对人物保留优先级最高的一条主关系并聚合证据）
  const edgeMap = new Map()
  const relationsByFigure = new Map()
  for (const f of tsFigures) relationsByFigure.set(f.id, [])

  for (const detail of figureDetails) {
    if (!figureMap.has(detail.id)) continue
    for (const rel of detail.relations ?? []) {
      if (!figureMap.has(rel.target_id)) continue
      const a = detail.id
      const b = rel.target_id
      const pairKey = [a, b].sort().join('::')

      const srcFig = figureMap.get(a)
      const tgtFig = figureMap.get(b)
      let overlapStart = null
      let overlapEnd = null
      if (srcFig.startYear != null && srcFig.endYear != null && tgtFig.startYear != null && tgtFig.endYear != null) {
        const lo = Math.max(srcFig.startYear, tgtFig.startYear)
        const hi = Math.min(srcFig.endYear, tgtFig.endYear)
        if (lo <= hi) {
          overlapStart = lo
          overlapEnd = hi
        }
      }

      const relType = rel.relation_type ?? '社群'
      const prio = REL_PRIORITY[relType] ?? 99
      const existing = edgeMap.get(pairKey)

      if (!existing || prio < (REL_PRIORITY[existing.type] ?? 99)) {
        edgeMap.set(pairKey, {
          id: pairKey,
          sourceId: a,
          targetId: b,
          type: relType,
          direction: rel.direction ?? '双向',
          periodText: rel.period?.text ?? existing?.periodText ?? '',
          year: typeof rel.period?.year === 'number' ? rel.period.year : (existing?.year ?? null),
          rangeEnd: typeof rel.period?.range_end === 'number' ? rel.period.range_end : (existing?.rangeEnd ?? null),
          overlapStart,
          overlapEnd,
          evidence: rel.evidence || existing?.evidence || '',
          inferred: !!rel.inferred,
        })
      } else {
        if (!existing.evidence && rel.evidence) existing.evidence = rel.evidence
        if (!existing.periodText && rel.period?.text) existing.periodText = rel.period.text
        if (existing.year == null && typeof rel.period?.year === 'number') existing.year = rel.period.year
      }
    }
  }

  const edges = [...edgeMap.values()]
  for (const edge of edges) {
    relationsByFigure.get(edge.sourceId)?.push({
      peerId: edge.targetId,
      peerName: figureMap.get(edge.targetId)?.name ?? edge.targetId,
      peerRoles: figureMap.get(edge.targetId)?.roles ?? [],
      peerField: figureMap.get(edge.targetId)?.field ?? '',
      type: edge.type,
      periodText: edge.periodText,
      year: edge.year,
      overlapStart: edge.overlapStart,
      overlapEnd: edge.overlapEnd,
      evidence: edge.evidence,
      inferred: edge.inferred,
    })
    relationsByFigure.get(edge.targetId)?.push({
      peerId: edge.sourceId,
      peerName: figureMap.get(edge.sourceId)?.name ?? edge.sourceId,
      peerRoles: figureMap.get(edge.sourceId)?.roles ?? [],
      peerField: figureMap.get(edge.sourceId)?.field ?? '',
      type: edge.type,
      periodText: edge.periodText,
      year: edge.year,
      overlapStart: edge.overlapStart,
      overlapEnd: edge.overlapEnd,
      evidence: edge.evidence,
      inferred: edge.inferred,
    })
  }
  for (const list of relationsByFigure.values()) {
    list.sort((x, y) => (REL_PRIORITY[x.type] ?? 99) - (REL_PRIORITY[y.type] ?? 99))
  }

  // 5. 全量系年诗词作品索引
  const worksTimeline = []
  for (const f of tsFigures) {
    for (const w of f.works) {
      if (w.year != null && w.year >= TANG_SONG_START && w.year <= TANG_SONG_END) {
        worksTimeline.push({
          ...w,
          authorId: f.id,
          authorName: f.name,
          authorRoles: f.roles,
          isPoet: f.isPoet,
          isCi: f.isCi,
          periodId: getPeriodForYear(w.year).id,
        })
      }
    }
  }
  worksTimeline.sort((a, b) => a.year - b.year || a.authorName.localeCompare(b.authorName, 'zh-Hans-CN'))

  // 6. 按时期分桶并生成逐年平行时空行（yearRows）
  const periodBlocks = PERIODS.map((p) => {
    const pRulers = tsRulers.filter((r) => r.endYear >= p.start && r.startYear <= p.end)
    const pEvents = tsEvents.filter((e) => e.year >= p.start && e.year <= p.end)
    const pWorks = worksTimeline.filter((w) => w.year >= p.start && w.year <= p.end)
    const pFigures = tsFigures.filter((f) => {
      if (f.startYear == null || f.endYear == null) return f.periodId === p.id
      const activeStart = f.startYear + 15
      return f.endYear >= p.start && activeStart <= p.end
    })

    // 收集该时期内需出行的年份
    const yearSet = new Set()
    for (const r of pRulers) {
      if (r.startYear >= p.start && r.startYear <= p.end) yearSet.add(r.startYear)
    }
    for (const e of pEvents) yearSet.add(e.year)
    for (const w of pWorks) yearSet.add(w.year)
    for (const f of pFigures) {
      // 重要政治/军事/名臣或无作品诗人以其活跃起始/关键年份入行，避免空荡
      if (f.isMinister && !f.hasDetail && f.startYear != null) {
        const peak = Math.min(Math.max(f.startYear + 35, p.start), Math.min(f.endYear ?? f.startYear + 50, p.end))
        if (peak >= p.start && peak <= p.end) yearSet.add(peak)
      }
      for (const node of f.timelineNodes) {
        if (node.year != null && node.year >= p.start && node.year <= p.end && node.isExile) {
          yearSet.add(node.year)
        }
      }
    }

    const sortedYears = [...yearSet].sort((a, b) => a - b)
    const yearRows = sortedYears.map((y) => {
      const reigningRuler = rulerAtYear(y)
      const startingRulers = pRulers.filter((r) => r.startYear === y)
      const rowEvents = pEvents.filter((e) => e.year === y)
      const rowWorks = pWorks.filter((w) => w.year === y)

      // 筛选当年有代表性节点的人物（被贬节点 / 无作品之宰相名臣代表节点）
      const rowExileNodes = []
      for (const f of pFigures) {
        for (const node of f.timelineNodes) {
          if (node.year === y && node.isExile) {
            rowExileNodes.push({
              figureId: f.id,
              figureName: f.name,
              roles: f.roles,
              isPoet: f.isPoet,
              isCi: f.isCi,
              ...node,
            })
          }
        }
      }

      const rowMinisters = pFigures.filter((f) => {
        if (!f.isMinister || f.hasDetail) return false
        const peak = Math.min(Math.max((f.startYear ?? y) + 35, p.start), Math.min(f.endYear ?? (f.startYear ?? y) + 50, p.end))
        return peak === y
      })

      return {
        year: y,
        reigningRuler,
        startingRulers,
        events: rowEvents,
        works: rowWorks,
        exileNodes: rowExileNodes,
        ministers: rowMinisters,
      }
    })

    return {
      ...p,
      rulers: pRulers,
      events: pEvents,
      works: pWorks,
      figures: pFigures,
      yearRows,
    }
  })

  const stats = {
    rulersCount: tsRulers.length,
    eventsCount: tsEvents.length,
    figuresCount: tsFigures.length,
    poetsCount: tsFigures.filter((f) => f.isPoet).length,
    ciCount: tsFigures.filter((f) => f.isCi).length,
    ministersCount: tsFigures.filter((f) => f.isMinister).length,
    worksCount: worksTimeline.length,
    exileWorksCount: worksTimeline.filter((w) => w.isExile).length,
    relationsCount: edges.length,
  }

  return {
    periods: PERIODS,
    periodBlocks,
    rulers: tsRulers,
    events: tsEvents,
    figures: tsFigures,
    worksTimeline,
    edges,
    relationsMap: Object.fromEntries(relationsByFigure),
    stats,
  }
}
