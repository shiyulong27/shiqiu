/**
 * scripts/download_encyclopedia_assets.mjs
 * 自动化从 Wikimedia Commons 公版图像库拉取高精度真实摄影，
 * 并通过 sharp 转码为轻量高清 WebP 格式（平均 70-120KB），存储在 public/images/ 下。
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ASSETS = [
  // ==========================================
  // 1. 生物与神奇动物 (public/images/biology/)
  // ==========================================
  { category: 'biology', filename: 'giant-panda.webp', query: 'Ailuropoda melanoleuca eating bamboo' },
  { category: 'biology', filename: 'snow-leopard.webp', query: 'Panthera uncia snow leopard' },
  { category: 'biology', filename: 'siberian-tiger.webp', query: 'Panthera tigris altaica tiger snow' },
  { category: 'biology', filename: 'golden-monkey.webp', query: 'Rhinopithecus roxellana golden snub-nosed monkey' },
  { category: 'biology', filename: 'tibetan-antelope.webp', query: 'Pantholops hodgsonii Tibetan antelope' },
  { category: 'biology', filename: 'chinese-alligator.webp', query: 'Alligator sinensis Chinese alligator' },
  { category: 'biology', filename: 'blue-whale.webp', query: 'Balaenoptera musculus blue whale' },
  { category: 'biology', filename: 'sperm-whale.webp', query: 'Physeter macrocephalus sperm whale' },
  { category: 'biology', filename: 'giant-squid.webp', query: 'Architeuthis dux squid' },
  { category: 'biology', filename: 'anglerfish.webp', query: 'Melanocetus johnsonii' },
  { category: 'biology', filename: 'polar-bear.webp', query: 'Ursus maritimus polar bear ice' },
  { category: 'biology', filename: 'emperor-penguin.webp', query: 'Aptenodytes forsteri emperor penguin' },
  { category: 'biology', filename: 'arctic-fox.webp', query: 'Vulpes lagopus arctic fox snow' },
  { category: 'biology', filename: 'cheetah.webp', query: 'Acinonyx jubatus cheetah' },
  { category: 'biology', filename: 'african-elephant.webp', query: 'Loxodonta africana elephant serengeti' },
  { category: 'biology', filename: 'chameleon.webp', query: 'Chamaeleo calyptratus chameleon' },
  { category: 'biology', filename: 'poison-dart-frog.webp', query: 'Dendrobates tinctorius frog' },
  { category: 'biology', filename: 'dead-leaf-butterfly.webp', query: 'Kallima inachus butterfly' },
  { category: 'biology', filename: 'peregrine-falcon.webp', query: 'Falco peregrinus falcon' },
  { category: 'biology', filename: 'golden-eagle.webp', query: 'Aquila chrysaetos golden eagle' },
  { category: 'biology', filename: 'platypus.webp', query: 'Ornithorhynchus anatinus platypus' },
  { category: 'biology', filename: 't-rex.webp', query: 'Tyrannosaurus rex field museum' },
  { category: 'biology', filename: 'triceratops.webp', query: 'Triceratops prorsus skeleton' },
  { category: 'biology', filename: 'brachiosaurus.webp', query: 'Giraffatitan brancai berlin' },
  { category: 'biology', filename: 'stegosaurus.webp', query: 'Stegosaurus stenops skeleton' },
  { category: 'biology', filename: 'quetzalcoatlus.webp', query: 'Quetzalcoatlus northropi' },
  { category: 'biology', filename: 'mosasaurus.webp', query: 'Mosasaurus hoffmanni skeleton' },
  { category: 'biology', filename: 'mammoth.webp', query: 'Mammuthus primigenius mammoth' },
  { category: 'biology', filename: 'trilobite.webp', query: 'Paradoxides trilobite fossil' },
  { category: 'biology', filename: 'venus-flytrap.webp', query: 'Dionaea muscipula flytrap' },
  { category: 'biology', filename: 'pitcher-plant.webp', query: 'Nepenthes rajah' },
  { category: 'biology', filename: 'ginkgo.webp', query: 'Ginkgo biloba tree autumn' },
  { category: 'biology', filename: 'tardigrade.webp', query: 'Hypsibius dujardini SEM tardigrade' },
  { category: 'biology', filename: 'blood-cells.webp', query: 'Red and white blood cells SEM' },

  // ==========================================
  // 2. 天文与深空 (public/images/astronomy/)
  // ==========================================
  { category: 'astronomy', filename: 'pillars-of-creation.webp', query: 'Pillars of Creation JWST' },
  { category: 'astronomy', filename: 'orion-nebula.webp', query: 'Messier 42 Orion Nebula Hubble' },
  { category: 'astronomy', filename: 'crab-nebula.webp', query: 'Crab Nebula Messier 1 Hubble' },
  { category: 'astronomy', filename: 'andromeda-galaxy.webp', query: 'Andromeda Galaxy M31 Hubble' },
  { category: 'astronomy', filename: 'sombrero-galaxy.webp', query: 'Sombrero Galaxy Messier 104 Hubble' },
  { category: 'astronomy', filename: 'hubble-ultra-deep-field.webp', query: 'Hubble Ultra Deep Field' },
  { category: 'astronomy', filename: 'black-hole-m87.webp', query: 'Black hole Messier 87 Event Horizon Telescope' },
  { category: 'astronomy', filename: 'black-hole-sgr-a.webp', query: 'Sagittarius A* Event Horizon Telescope' },
  { category: 'astronomy', filename: 'sun-prominence.webp', query: 'Solar Dynamics Observatory prominence' },
  { category: 'astronomy', filename: 'mercury-surface.webp', query: 'Mercury Messenger spacecraft' },
  { category: 'astronomy', filename: 'venus-surface.webp', query: 'Venus Magellan radar global' },
  { category: 'astronomy', filename: 'mars-surface.webp', query: 'Mars Curiosity rover landscape' },
  { category: 'astronomy', filename: 'mars-olympus-mons.webp', query: 'Olympus Mons Mars' },
  { category: 'astronomy', filename: 'jupiter-great-red-spot.webp', query: 'Jupiter Great Red Spot Juno' },
  { category: 'astronomy', filename: 'saturn-rings.webp', query: 'Saturn eclipse Cassini' },
  { category: 'astronomy', filename: 'tiangong-space-station.webp', query: 'Tiangong space station' },
  { category: 'astronomy', filename: 'fast-telescope.webp', query: 'FAST radio telescope Guizhou' },
  { category: 'astronomy', filename: 'pale-blue-dot.webp', query: 'Pale Blue Dot Voyager' },

  // ==========================================
  // 3. 自然与世界地理 (public/images/geography/)
  // ==========================================
  { category: 'geography', filename: 'hukou-waterfall.webp', query: 'Hukou Waterfall' },
  { category: 'geography', filename: 'three-gorges.webp', query: 'Three Gorges Yangtze River Qutang' },
  { category: 'geography', filename: 'qinghai-tibet-plateau.webp', query: 'Tibetan Plateau landscape snow' },
  { category: 'geography', filename: 'loess-plateau.webp', query: 'Loess Plateau terraced fields' },
  { category: 'geography', filename: 'karst-guilin.webp', query: 'Guilin karst mountains landscape' },
  { category: 'geography', filename: 'danxia-zhangye.webp', query: 'Zhangye Danxia rainbow mountains' },
  { category: 'geography', filename: 'yardang-ghost-city.webp', query: 'Yardang landform Dunhuang' },
  { category: 'geography', filename: 'everest-peak.webp', query: 'Mount Everest north face' },
  { category: 'geography', filename: 'mariana-trench.webp', query: 'Mariana trench bathymetry' },
  { category: 'geography', filename: 'baikal-lake.webp', query: 'Lake Baikal blue ice' },
  { category: 'geography', filename: 'amazon-river.webp', query: 'Amazon River rainforest aerial' },
  { category: 'geography', filename: 'sahara-desert.webp', query: 'Sahara desert dunes Erg Chebbi' }
];

async function searchWikimediaImage(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1280&gsrsearch=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'ShiqiuEncyclopediaBot/1.0 (educational static site; contact: liwei@shiqiu.local)' }
    });
    if (!res.ok) return null;
    const data = await res.json();
    const page = Object.values(data?.query?.pages || {})[0];
    return page?.imageinfo?.[0]?.thumburl || page?.imageinfo?.[0]?.url || null;
  } catch (err) {
    console.error(`Search error for [${query}]:`, err.message);
    return null;
  }
}

async function downloadAndProcessImage(item, baseDir = 'public/images') {
  const targetDir = path.join(baseDir, item.category);
  fs.mkdirSync(targetDir, { recursive: true });
  const outPath = path.join(targetDir, item.filename);

  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 5000) {
    console.log(`[SKIP] 已经存在: ${outPath} (${fs.statSync(outPath).size} bytes)`);
    return true;
  }

  console.log(`[SEARCH] 正在检索: "${item.query}" ...`);
  const imageUrl = await searchWikimediaImage(item.query);
  if (!imageUrl) {
    console.warn(`[WARN] 未找到有效图片: "${item.query}"`);
    return false;
  }

  try {
    const imgRes = await fetch(imageUrl, {
      headers: { 'User-Agent': 'ShiqiuEncyclopediaBot/1.0 (educational static site; contact: liwei@shiqiu.local)' }
    });
    if (!imgRes.ok) {
      console.warn(`[WARN] 下载失败 (${imgRes.status}): ${imageUrl}`);
      return false;
    }
    const buf = Buffer.from(await imgRes.arrayBuffer());
    
    // 使用 sharp 转换为优化后的 WebP (允许超大原图解码)
    await sharp(buf, { limitInputPixels: 0 })
      .resize(960, 720, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`[SUCCESS] 成功保存: ${outPath} (${Math.round(stat.size / 1024)} KB)`);
    return true;
  } catch (err) {
    console.error(`[ERROR] 处理失败 [${item.filename}]:`, err.message);
    return false;
  }
}

async function main() {
  console.log(`--- 开始全自动拉取与优化静态高清百科图像集 (共 ${ASSETS.length} 项) ---`);
  let successCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (let i = 0; i < ASSETS.length; i++) {
    const item = ASSETS[i];
    const targetDir = path.join('public/images', item.category);
    const outPath = path.join(targetDir, item.filename);

    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 5000) {
      skippedCount++;
    } else {
      const ok = await downloadAndProcessImage(item);
      if (ok) successCount++;
      else failedCount++;
      // 避免 Wikimedia API 频控，每次拉取间隔 500ms
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log(`\n--- 下载与转码任务完成 ---`);
  console.log(`总计: ${ASSETS.length} | 新增: ${successCount} | 已存在跳过: ${skippedCount} | 失败: ${failedCount}`);
}

main().catch(console.error);
