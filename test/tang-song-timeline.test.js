import { describe, expect, it } from 'vitest'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadAll } from '../src/lib/load.js'
import { buildTangSongTimeline, TANG_SONG_START, TANG_SONG_END } from '../src/lib/tangSongTimeline.js'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const data = loadAll(path.join(ROOT, 'data'))
const model = buildTangSongTimeline(data)

describe('唐宋风云诗画长卷数据模型（618–1279）', () => {
  it('覆盖初唐至南宋完整历史时期与历代皇帝序列', () => {
    expect(model.periods.map((p) => p.name)).toEqual([
      '初唐',
      '盛唐',
      '中唐',
      '晚唐',
      '五代十国',
      '北宋',
      '南宋',
    ])

    const tangRulers = model.rulers.filter((r) => r.dynasty === 'tang')
    const beisongRulers = model.rulers.filter((r) => r.dynasty === 'beisong')
    const nansongRulers = model.rulers.filter((r) => r.dynasty === 'nansong')

    expect(tangRulers.length).toBeGreaterThanOrEqual(20)
    expect(beisongRulers).toHaveLength(9)
    expect(nansongRulers).toHaveLength(9)

    for (const r of model.rulers) {
      expect(r.startYear).toBeGreaterThanOrEqual(TANG_SONG_START)
      expect(r.endYear).toBeLessThanOrEqual(TANG_SONG_END)
    }
  })

  it('同时收录诗人、词人与宰相名臣/名将', () => {
    const names = new Set(model.figures.map((f) => f.name))
    expect(names.has('李白')).toBe(true)
    expect(names.has('高适')).toBe(true)
    expect(names.has('孟浩然')).toBe(true)
    expect(names.has('苏轼')).toBe(true)
    expect(names.has('辛弃疾')).toBe(true)
    expect(names.has('房玄龄')).toBe(true)
    expect(names.has('李林甫')).toBe(true)
    expect(names.has('司马光')).toBe(true)
    expect(names.has('秦桧')).toBe(true)

    expect(model.stats.poetsCount).toBeGreaterThanOrEqual(30)
    expect(model.stats.ciCount).toBeGreaterThanOrEqual(10)
    expect(model.stats.ministersCount).toBeGreaterThanOrEqual(25)
  })

  it('自动归并双向人物关系并保留交游/论敌证据', () => {
    const libaiRels = model.relationsMap.libai || []
    const libaiPeers = new Map(libaiRels.map((r) => [r.peerId, r]))

    expect(libaiPeers.get('dufu')?.type).toBe('挚友')
    expect(libaiPeers.get('gaoshi')?.type).toBe('挚友')
    expect(libaiPeers.get('menghaoran')?.type).toBe('挚友')
    expect(libaiPeers.get('hezhizhang')?.type).toBe('挚友')

    // 反向索引也必须存在
    const gaoshiPeers = new Map((model.relationsMap.gaoshi || []).map((r) => [r.peerId, r]))
    expect(gaoshiPeers.get('libai')?.type).toBe('挚友')
    expect(gaoshiPeers.get('dufu')?.type).toBe('挚友')

    const yuefeiPeers = new Map((model.relationsMap.yuefei || []).map((r) => [r.peerId, r]))
    expect(yuefeiPeers.get('qinhui')?.type).toBe('论敌')
    expect(yuefeiPeers.get('hanshizhong')?.type).toBe('同僚')
  })

  it('识别系年诗词作品及其贬谪/迁谪创作地点与背景', () => {
    expect(model.worksTimeline.length).toBeGreaterThanOrEqual(200)
    const exileWorks = model.worksTimeline.filter((w) => w.isExile)
    expect(exileWorks.length).toBeGreaterThanOrEqual(30)

    const titles = new Set(exileWorks.map((w) => w.title))
    expect(titles.has('早发白帝城')).toBe(true)
    expect(titles.has('江雪')).toBe(true)

    const sushiYellow = exileWorks.find((w) => w.authorId === 'sushi' && w.place.includes('黄州'))
    expect(sushiYellow).toBeTruthy()
  })

  it('每个时期区块的 yearRows 严格按年份升序且携带在位君主', () => {
    for (const block of model.periodBlocks) {
      expect(block.yearRows.length).toBeGreaterThan(0)
      for (let i = 1; i < block.yearRows.length; i++) {
        expect(block.yearRows[i].year).toBeGreaterThan(block.yearRows[i - 1].year)
      }
      const tangOrSongRow = block.yearRows.find((r) => r.year >= 618 && r.year <= 907 || r.year >= 960)
      if (tangOrSongRow) {
        expect(tangOrSongRow.reigningRuler).toBeTruthy()
      }
    }
  })
})
