/**
 * 六年级上册 (10篇) + 六年级下册 (25篇) = 35篇
 */

function makeTokens(text, pinyinStr, rhythmStr) {
  const chars = Array.from(text);
  const cleanPy = pinyinStr.replace(/[，。？！、：；“”‘’「」『』《》]/g, ' ').trim().split(/\s+/).filter(Boolean);
  let pyIdx = 0;
  const tokens = [];

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (/[，。？！、：；“”‘’「」『』《》\s]/.test(ch)) {
      tokens.push({ char: ch, pinyin: '' });
    } else {
      tokens.push({ char: ch, pinyin: cleanPy[pyIdx] || '' });
      pyIdx++;
    }
  }

  return tokens;
}

function makeLine(text, pinyin, rhythm) {
  return {
    text,
    pinyin,
    rhythm,
    tokens: makeTokens(text, pinyin, rhythm)
  };
}

export const grade6Poems = [
  // ==========================================
  // 六年级上册 (10 篇)
  // ==========================================
  {
    id: 'su-jian-de-jiang',
    title: '宿建德江',
    titlePinyin: 'sù jiàn dé jiāng',
    author: '孟浩然',
    dynasty: '唐代',
    grade: '六上',
    gradeFull: '六年级上册',
    theme: '四季风物',
    themeColor: '#0284c7',
    tags: ['野旷天低树', '江清月近人'],
    famousQuote: '野旷天低树，江清月近人。',
    lines: [
      makeLine('移舟泊烟渚，', 'yí zhōu bó yān zhǔ,', '移舟／泊烟渚，'),
      makeLine('日暮客愁新。', 'rì mù kè chóu xīn.', '日暮／客愁新。'),
      makeLine('野旷天低树，', 'yě kuàng tiān dī shù,', '野旷／天低树，'),
      makeLine('江清月近人。', 'jiāng qīng yuè jìn rén.', '江清／月近人。')
    ],
    spokenText: '宿建德江，孟浩然，唐代。移舟泊烟渚，日暮客愁新。野旷天低树，江清月近人。',
    translation: '把小船停靠在烟雾弥漫的江心沙洲旁，日落傍晚新添了漂泊游子的思愁。原野空旷辽阔天空显得比树木还低，江水澄澈清明倒映的明月仿佛走近了身旁。',
    appreciation: '以旷远淡远的笔墨，写出深邃宁静中涌动的羁旅深思。',
    keywords: [{ word: '烟渚', explain: '云雾笼罩的水中沙洲。' }, { word: '近人', explain: '月影倒映水中，仿佛与人亲近。' }]
  },
  {
    id: 'wang-hu-lou-zui-shu',
    title: '六月二十七日望湖楼醉书',
    titlePinyin: 'liù yuè èr shí qī rì wàng hú lóu zuì shū',
    author: '苏轼',
    dynasty: '宋代',
    grade: '六上',
    gradeFull: '六年级上册',
    theme: '四季风物',
    themeColor: '#0891b2',
    tags: ['黑云翻墨未遮山', '白雨跳珠乱入船'],
    famousQuote: '黑云翻墨未遮山，白雨跳珠乱入船。',
    lines: [
      makeLine('黑云翻墨未遮山，', 'hēi yún fān mò wèi zhē shān,', '黑云翻墨／未遮山，'),
      makeLine('白雨跳珠乱入船。', 'bái yǔ tiào zhū luàn rù chuán.', '白雨跳珠／乱入船。'),
      makeLine('卷地风来忽吹散，', 'juǎn dì fēng lái hū chuī sàn,', '卷地风来／忽吹散，'),
      makeLine('望湖楼下水如天。', 'wàng hú lóu xià shuǐ rú tiān.', '望湖楼下／水如天。')
    ],
    spokenText: '六月二十七日望湖楼醉书，苏轼，宋代。黑云翻墨未遮山，白雨跳珠乱入船。卷地风来忽吹散，望湖楼下水如天。',
    translation: '翻滚的乌云像泼翻的墨汁还未来得及遮住青山，白花花的暴雨就如乱跳的明珠飞溅入船舱。忽而一阵卷地狂风吹过将乌云暴雨一扫而空，望湖楼下的西湖水波澄澈碧绿得与青天连为一片。',
    appreciation: '疾如风雷的夏季雷雨特写，转瞬即逝的动态变化神采飞扬。',
    keywords: [{ word: '翻墨', explain: '打翻的黑墨汁。' }, { word: '跳珠', explain: '雨点像大珍珠跳跃。' }]
  },
  {
    id: 'xi-jiang-yue',
    title: '西江月·夜行黄沙道中',
    titlePinyin: 'xī jiāng yuè yè xíng huáng shā dào zhōng',
    author: '辛弃疾',
    dynasty: '宋代',
    grade: '六上',
    gradeFull: '六年级上册',
    theme: '四季风物',
    themeColor: '#16a34a',
    tags: ['稻花香里说丰年', '听取蛙声一片'],
    famousQuote: '稻花香里说丰年，听取蛙声一片。',
    lines: [
      makeLine('明月别枝惊鹊，', 'míng yuè bié zhī jīng què,', '明月／别枝惊鹊，'),
      makeLine('清风半夜鸣蝉。', 'qīng fēng bàn yè míng chán.', '清风／半夜鸣蝉。'),
      makeLine('稻花香里说丰年，', 'dào huā xiāng lǐ shuō fēng nián,', '稻花香里／说丰年，'),
      makeLine('听取蛙声一片。', 'tīng qǔ wā shēng yī piàn.', '听取／蛙声一片。'),
      makeLine('七八个星天外，', 'qī bā gè xīng tiān wài,', '七八个星／天外，'),
      makeLine('两三点雨山前。', 'liǎng sān diǎn yǔ shān qián.', '两三点雨／山前。'),
      makeLine('旧时茅店社林边，', 'jiù shí máo diàn shè lín biān,', '旧时茅店／社林边，'),
      makeLine('路转溪桥忽见。', 'lù zhuǎn xī qiáo hū xiàn.', '路转溪桥／忽见。')
    ],
    spokenText: '西江月夜行黄沙道中，辛弃疾，宋代。明月别枝惊鹊，清风半夜鸣蝉。稻花香里说丰年，听取蛙声一片。七八个星天外，两三点雨山前。旧时茅店社林边，路转溪桥忽见。',
    translation: '皎洁月光惊醒了枝头的喜鹊，清凉晚风中伴随着阵阵蝉鸣。在稻花芬芳的香气中仿佛都在谈论着丰收，耳边是一片欢腾的蛙声。天边疏疏落落挂着几颗晨星，山前滴滴嗒嗒飘落点点细雨。过去熟悉的土地庙树丛旁的茅草客店，拐过溪流上的小桥忽然出现在眼前。',
    appreciation: '洋溢着农村夏夜生活的欢欣愉悦，清新而充满泥土芳香。',
    keywords: [{ word: '别枝', explain: '横斜伸出的树枝。' }, { word: '见', explain: '同“现”，显现出来。' }]
  },
  {
    id: 'guo-gu-ren-zhuang',
    title: '过故人庄',
    titlePinyin: 'guò gù rén zhuāng',
    author: '孟浩然',
    dynasty: '唐代',
    grade: '六上',
    gradeFull: '六年级上册',
    theme: '真挚情谊',
    themeColor: '#059669',
    tags: ['绿树村边合', '把酒话桑麻'],
    famousQuote: '开轩面场圃，把酒话桑麻。',
    lines: [
      makeLine('故人具鸡黍，', 'gù rén jù jī shǔ,', '故人／具鸡黍，'),
      makeLine('邀我至田家。', 'yāo wǒ zhì tián jiā.', '邀我／至田家。'),
      makeLine('绿树村边合，', 'lǜ shù cūn biān hé,', '绿树／村边合，'),
      makeLine('青山郭外斜。', 'qīng shān guō wài xiá.', '青山／郭外斜。'),
      makeLine('开轩面场圃，', 'kāi xuān miàn cháng pǔ,', '开轩／面场圃，'),
      makeLine('把酒话桑麻。', 'bǎ jiǔ huà sāng má.', '把酒／话桑麻。'),
      makeLine('待到重阳日，', 'dài dào chóng yáng rì,', '待到／重阳日，'),
      makeLine('还来就菊花。', 'hái lái jiù jú huā.', '还来／就菊花。')
    ],
    spokenText: '过故人庄，孟浩然，唐代。故人具鸡黍，邀我至田家。绿树村边合，青山郭外斜。开轩面场圃，把酒话桑麻。待到重阳日，还来就菊花。',
    translation: '老朋友准备了丰盛的鸡肉和黄米饭，邀请我到他的农家做客。翠绿的树木环抱着村落，秀丽的青山在城郭外横斜。打开窗子正对着打谷场和菜园，端起酒杯畅谈着庄稼农事。等到九月九日重阳节那天，我还要再来这里观赏菊花！',
    appreciation: '朴实亲切如涓涓清泉，勾画出田园诗意的淳朴友情。',
    keywords: [{ word: '鸡黍', explain: '指丰盛的饭菜。' }, { word: '就菊花', explain: '饮菊花酒，赏菊。' }]
  },
  {
    id: 'chun-ri-zhu-xi',
    title: '春日',
    titlePinyin: 'chūn rì',
    author: '朱熹',
    dynasty: '宋代',
    grade: '六上',
    gradeFull: '六年级上册',
    theme: '四季风物',
    themeColor: '#e11d48',
    tags: ['胜日寻芳泗水滨', '万紫千红总是春'],
    famousQuote: '等闲识得东风面，万紫千红总是春。',
    lines: [
      makeLine('胜日寻芳泗水滨，', 'shèng rì xún fāng sì shuǐ bīn,', '胜日寻芳／泗水滨，'),
      makeLine('无边光景一时新。', 'wú biān guāng jǐng yī shí xīn.', '无边光景／一时新。'),
      makeLine('等闲识得东风面，', 'děng xián shí dé dōng fēng miàn,', '等闲识得／东风面，'),
      makeLine('万紫千红总是春。', 'wàn zǐ qiān hóng zǒng shì chūn.', '万紫千红／总是春。')
    ],
    spokenText: '春日，朱熹，宋代。胜日寻芳泗水滨，无边光景一时新。等闲识得东风面，万紫千红总是春。',
    translation: '在风和日丽的佳日来到泗水之畔寻觅春光，无边无际的自然风光顿时焕然一新。谁都可以轻易领略春风的气息与容貌，满眼万紫千红百花盛开便都是春天的绚丽！',
    appreciation: '借寻春赞美圣人之道带来如沐春风、百花齐放的蓬勃生机。',
    keywords: [{ word: '胜日', explain: '晴朗的大好日子。' }, { word: '等闲', explain: '平常，轻易。' }]
  },
  {
    id: 'jiang-nan-chun',
    title: '江南春',
    titlePinyin: 'jiāng nán chūn',
    author: '杜牧',
    dynasty: '唐代',
    grade: '六上',
    gradeFull: '六年级上册',
    theme: '大好河山',
    themeColor: '#059669',
    tags: ['千里莺啼绿映红', '多少楼台烟雨中'],
    famousQuote: '南朝四百八十寺，多少楼台烟雨中。',
    lines: [
      makeLine('千里莺啼绿映红，', 'qiān lǐ yīng tí lǜ yìng hóng,', '千里莺啼／绿映红，'),
      makeLine('水村山郭酒旗风。', 'shuǐ cūn shān guō jiǔ qí fēng.', '水村山郭／酒旗风。'),
      makeLine('南朝四百八十寺，', 'nán cháo sì bǎi bā shí sì,', '南朝／四百八十寺，'),
      makeLine('多少楼台烟雨中。', 'duō shǎo lóu tái yān yǔ zhōng.', '多少楼台／烟雨中。')
    ],
    spokenText: '江南春，杜牧，唐代。千里莺啼绿映红，水村山郭酒旗风。南朝四百八十寺，多少楼台烟雨中。',
    translation: '千里辽阔的江南黄莺欢叫绿树映衬着红花，依山傍水的村寨城郭酒旗随风飘扬。当年南朝修建的四百八十座寺庙，如今有多少楼台亭阁静立在迷蒙的烟雨之中啊。',
    appreciation: '将江南秀美春光与深沉历史兴亡之感熔于一炉。',
    keywords: [{ word: '山郭', explain: '依山而建的外城。' }, { word: '四百八十寺', explain: '虚指数量极多。' }]
  },
  {
    id: 'shu-hu-yin-xian-sheng-bi',
    title: '书湖阴先生壁',
    titlePinyin: 'shū hú yīn xiān shēng bì',
    author: '王安石',
    dynasty: '宋代',
    grade: '六上',
    gradeFull: '六年级上册',
    theme: '四季风物',
    themeColor: '#10b981',
    tags: ['一水护田将绿绕', '两山排闼送青来'],
    famousQuote: '一水护田将绿绕，两山排闼送青来。',
    lines: [
      makeLine('茅檐长扫净无苔，', 'máo yán cháng sǎo jìng wú tái,', '茅檐长扫／净无苔，'),
      makeLine('花木成畦手自栽。', 'huā mù chéng qí shǒu zì zāi.', '花木成畦／手自栽。'),
      makeLine('一水护田将绿绕，', 'yī shuǐ hù tián jiāng lǜ rào,', '一水护田／将绿绕，'),
      makeLine('两山排闼送青来。', 'liǎng shān pái tà sòng qīng lái.', '两山排闼／送青来。')
    ],
    spokenText: '书湖阴先生壁，王安石，宋代。茅檐长扫净无苔，花木成畦手自栽。一水护田将绿绕，两山排闼送青来。',
    translation: '茅屋房檐下经常打扫干净得没有一点青苔，花草树木成行成垄全都是主人亲手栽种。一条清澈溪流守护农田环抱着片片碧绿，两座青山推开门扇将满眼的青翠送上门来。',
    appreciation: '运用拟人化修辞，使山水仿佛具有了迎客的热情与灵性。',
    keywords: [{ word: '畦', explain: '田地划分的一块一块的小格子。' }, { word: '排闼', explain: '推开门扇。' }]
  },
  {
    id: 'lang-tao-sha-1',
    title: '浪淘沙·其一',
    titlePinyin: 'làng táo shā qí yī',
    author: '刘禹锡',
    dynasty: '唐代',
    grade: '六上',
    gradeFull: '六年级上册',
    theme: '大好河山',
    themeColor: '#f59e0b',
    tags: ['九曲黄河万里沙', '同到牵牛织女家'],
    famousQuote: '如今直上银河去，同到牵牛织女家。',
    lines: [
      makeLine('九曲黄河万里沙，', 'jiǔ qū huáng hé wàn lǐ shā,', '九曲黄河／万里沙，'),
      makeLine('浪淘风簸自天涯。', 'làng táo fēng bǒ zì tiān yá.', '浪淘风簸／自天涯。'),
      makeLine('如今直上银河去，', 'rú jīn zhí shàng yín hé qù,', '如今直上／银河去，'),
      makeLine('同到牵牛织女家。', 'tóng dào qiān niú zhī nǚ jiā.', '同到／牵牛织女家。')
    ],
    spokenText: '浪淘沙其一，刘禹锡，唐代。九曲黄河万里沙，浪淘风簸自天涯。如今直上银河去，同到牵牛织女家。',
    translation: '九曲回转的黄河卷带着万里泥沙，狂风大浪颠簸着从天涯尽头奔腾而来。今天就让我们乘风破浪直上天上的银河去，一同探访那神话中的牵牛织女家吧！',
    appreciation: '把黄河的雄浑磅礴与浪漫神话幻想完美结合，气冲斗牛。',
    keywords: [{ word: '浪淘风簸', explain: '波浪冲刷，狂风颠簸。' }, { word: '天涯', explain: '天边尽头。' }]
  },
  {
    id: 'bo-ya-gu-qin',
    title: '伯牙鼓琴',
    titlePinyin: 'bó yá gǔ qín',
    author: '《吕氏春秋》',
    dynasty: '战国',
    grade: '六上',
    gradeFull: '六年级上册',
    theme: '经典古文',
    themeColor: '#7c3aed',
    tags: ['高山流水', '千古知音'],
    famousQuote: '善哉乎鼓琴，巍巍乎若太山；汤汤乎若流水。',
    lines: [
      makeLine('伯牙鼓琴，锺子期听之。', 'bó yá gǔ qín, zhōng zǐ qī tīng zhī.', '伯牙鼓琴，／锺子期听之。'),
      makeLine('方鼓琴而志在太山，锺子期曰：', 'fāng gǔ qín ér zhì zài tài shān, zhōng zǐ qī yuē:', '方鼓琴／而志在太山，／锺子期曰：'),
      makeLine('“善哉乎鼓琴，巍巍乎若太山。”', '"shàn zāi hū gǔ qín, wēi wēi hū ruò tài shān."', '“善哉乎鼓琴，／巍巍乎若太山。”'),
      makeLine('少选之间而志在流水，锺子期又曰：', 'shǎo xuǎn zhī jiān ér zhì zài liú shuǐ, zhōng zǐ qī yòu yuē:', '少选之间／而志在流水，／锺子期又曰：'),
      makeLine('“善哉乎鼓琴，汤汤乎若流水。”', '"shàn zāi hū gǔ qín, shāng shāng hū ruò liú shuǐ."', '“善哉乎鼓琴，／汤汤乎若流水。”'),
      makeLine('锺子期死，伯牙破琴绝弦，', 'zhōng zǐ qī sǐ, bó yá pò qín jué xián,', '锺子期死，／伯牙破琴绝弦，'),
      makeLine('终身不复鼓琴，以为世无足复为鼓琴者。', 'zhōng shēn bù fù gǔ qín, yǐ wéi shì wú zú fù wéi gǔ qín zhě.', '终身不复鼓琴，／以为世无足复为鼓琴者。')
    ],
    spokenText: '伯牙鼓琴，吕氏春秋。伯牙鼓琴，锺子期听之。方鼓琴而志在太山，锺子期曰：“善哉乎鼓琴，巍巍乎若太山。”少选之间而志在流水，锺子期又曰：“善哉乎鼓琴，汤汤乎若流水。”锺子期死，伯牙破琴绝弦，终身不复鼓琴，以为世无足复为鼓琴者。',
    translation: '伯牙弹琴，锺子期倾听。伯牙弹琴心中志向泰山，锺子期说：“弹得真好啊，高耸雄伟像泰山一样！”不一会儿心中志向江河流水，锺子期又赞叹：“弹得真好啊，浩浩荡荡像奔流的大江！”锺子期死后，伯牙摔破琴扯断琴弦，终生不再弹琴，因为世上再也没有值得为之弹琴的知音了。',
    appreciation: '千古知音难觅，知己相惜至死不渝的崇高情感。',
    keywords: [{ word: '善哉', explain: '好啊，赞叹之词。' }, { word: '汤汤', explain: '读 shāng shāng，水流浩荡的样子。' }, { word: '破琴绝弦', explain: '摔坏琴、扯断琴弦。' }]
  },
  {
    id: 'shu-dai-song-hua-niu',
    title: '书戴嵩画牛',
    titlePinyin: 'shū dài sōng huà niú',
    author: '苏轼',
    dynasty: '宋代',
    grade: '六上',
    gradeFull: '六年级上册',
    theme: '经典古文',
    themeColor: '#d97706',
    tags: ['实践出真知', '耕当问奴'],
    famousQuote: '古语有云：“耕当问奴，织当问婢。”不可改也。',
    lines: [
      makeLine('蜀中有杜处士，好书画，所宝以百数。', 'shǔ zhōng yǒu dù chǔ shì, hào shū huà, suǒ bǎo yǐ bǎi shǔ.', '蜀中有杜处士，／好书画，／所宝以百数。'),
      makeLine('有戴嵩《牛》一轴，尤所爱，锦囊玉轴，常以自随。', 'yǒu dài sōng niú yī zhóu, yóu suǒ ài, jǐn náng yù zhóu, cháng yǐ zì suí.', '有戴嵩《牛》一轴，／尤所爱，／锦囊玉轴，／常以自随。'),
      makeLine('一日曝书画，有一牧童见之，拊掌大笑，曰：', 'yī rì pù shū huà, yǒu yī mù tóng jiàn zhī, fǔ zhǎng dà xiào, yuē:', '一日曝书画，／有一牧童见之，／拊掌大笑，曰：'),
      makeLine('“此画斗牛也。牛斗，力在角，尾搐入两股间，', '"cǐ huà dòu niú yě. niú dòu, lì zài jiǎo, wěi chù rù liǎng gǔ jiān,', '“此画斗牛也。／牛斗，力在角，／尾搐入两股间，'),
      makeLine('今乃掉尾而斗，谬矣。”处士笑而然之。', 'jīn nǎi diào wěi ér dòu, miù yǐ." chǔ shì xiào ér rán zhī.', '今乃掉尾而斗，／谬矣。”／处士笑而然之。'),
      makeLine('古语有云：“耕当问奴，织当问婢。”不可改也。', 'gǔ yǔ yǒu yún: "gēng dāng wèn nú, zhī dāng wèn bì." bù kě gǎi yě.', '古语有云：／“耕当问奴，／织当问婢。”／不可改也。')
    ],
    spokenText: '书戴嵩画牛，苏轼，宋代。蜀中有杜处士，好书画，所宝以百数。有戴嵩牛一轴，尤所爱，锦囊玉轴，常以自随。一日曝书画，有一牧童见之，拊掌大笑，曰：“此画斗牛也。牛斗，力在角，尾搐入两股间，今乃掉尾而斗，谬矣。”处士笑而然之。古语有云：“耕当问奴，织当问婢。”不可改也。',
    translation: '四川有位杜处士喜爱书画，珍藏的宝物数以百计。其中有唐代戴嵩画的《斗牛图》一卷，特别喜爱，用锦缎包裹玉质轴心，经常随身携带。一天晒书画，有个牧童看见了拍手大笑说：“这是画斗牛啊。牛打架力气在角上，尾巴夹在两腿之间；现在却摇着尾巴打斗，全画错啦！”处士笑着赞同牧童的话。古人说：“种田要问农夫，织布要问织女。”这话是不可更改的真理。',
    appreciation: '凡事要尊重实际生活经验，实践出真知，不迷信名家权威。',
    keywords: [{ word: '拊掌', explain: '拍手。' }, { word: '搐', explain: '收缩抽紧。' }, { word: '股', explain: '大腿。' }, { word: '掉尾', explain: '摇摆尾巴。' }]
  },

  // ==========================================
  // 六年级下册 (25 篇)
  // ==========================================
  {
    id: 'han-shi',
    title: '寒食',
    titlePinyin: 'hán shí',
    author: '韩翃',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '民俗节庆',
    themeColor: '#db2777',
    tags: ['春城无处不飞花', '轻烟散入五侯家'],
    famousQuote: '春城无处不飞花，寒食东风御柳斜。',
    lines: [
      makeLine('春城无处不飞花，', 'chūn chéng wú chù bù fēi huā,', '春城／无处不飞花，'),
      makeLine('寒食东风御柳斜。', 'hán shí dōng fēng yù liǔ xié.', '寒食东风／御柳斜。'),
      makeLine('日暮汉宫传蜡烛，', 'rì mù hàn gōng chuán là zhú,', '日暮汉宫／传蜡烛，'),
      makeLine('轻烟散入五侯家。', 'qīng yān sàn rù wǔ hòu jiā.', '轻烟散入／五侯家。')
    ],
    spokenText: '寒食，韩翃，唐代。春城无处不飞花，寒食东风御柳斜。日暮汉宫传蜡烛，轻烟散入五侯家。',
    translation: '暮春长安城里到处飘散着落花，寒食节东风吹拂御花园的杨柳轻斜。傍晚皇宫中分赐传点新蜡烛，袅袅轻烟飘散进豪门贵戚的府邸之中。',
    appreciation: '以轻柔工丽的笔触，委婉讽喻唐代宦官权贵的特权恩宠。',
    keywords: [{ word: '御柳', explain: '皇宫御花园的柳树。' }, { word: '五侯', explain: '指权贵豪门。' }]
  },
  {
    id: 'tiao-tiao-qian-niu-xing',
    title: '迢迢牵牛星',
    titlePinyin: 'tiáo tiáo qiān niú xīng',
    author: '《古诗十九首》',
    dynasty: '汉代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '真挚情谊',
    themeColor: '#6366f1',
    tags: ['盈盈一水间', '脉脉不得语'],
    famousQuote: '盈盈一水间，脉脉不得语。',
    lines: [
      makeLine('迢迢牵牛星，', 'tiáo tiáo qiān niú xīng,', '迢迢／牵牛星，'),
      makeLine('皎皎河汉女。', 'jiǎo jiǎo hé hàn nǚ.', '皎皎／河汉女。'),
      makeLine('纤纤擢素手，', 'xiān xiān zhuó sù shǒu,', '纤纤／擢素手，'),
      makeLine('札札弄机杼。', 'zhá zhá nòng jī zhù.', '札札／弄机杼。'),
      makeLine('终日不成章，', 'zhōng rì bù chéng zhāng,', '终日／不成章，'),
      makeLine('泣涕零如雨。', 'qì tì líng rú yǔ.', '泣涕／零如雨。'),
      makeLine('河汉清且浅，', 'hé hàn qīng qiě qiǎn,', '河汉／清且浅，'),
      makeLine('相去复几许。', 'xiāng qù fù jǐ xǔ.', '相去／复几许。'),
      makeLine('盈盈一水间，', 'yíng yíng yī shuǐ jiān,', '盈盈／一水间，'),
      makeLine('脉脉不得语。', 'mò mò bù dé yǔ.', '脉脉／不得语。')
    ],
    spokenText: '迢迢牵牛星，汉代古诗十九首。迢迢牵牛星，皎皎河汉女。纤纤擢素手，札札弄机杼。终日不成章，泣涕零如雨。河汉清且浅，相去复几许。盈盈一水间，脉脉不得语。',
    translation: '看那遥远的牵牛星，明亮皎洁的织女星。织女伸出纤细洁白的双手，札札敲打着织布机的梭子。一整天织不出整匹锦缎，眼泪如雨水般扑簌落下。银河看起来又清又浅，两人相隔又有多远呢？只隔着一弯盈盈清澈水流，含情脉脉却不能互诉心声。',
    appreciation: '叠字连缀，深情幽怨，抒写人间相思离别之痛。',
    keywords: [{ word: '机杼', explain: '织布机。' }, { word: '脉脉', explain: '凝视含情的样子。' }]
  },
  {
    id: 'shi-wu-ye-wang-yue',
    title: '十五夜望月',
    titlePinyin: 'shí wǔ yè wàng yuè',
    author: '王建',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '民俗节庆',
    themeColor: '#4f46e5',
    tags: ['冷露无声湿桂花', '不知秋思落谁家'],
    famousQuote: '今夜月明人尽望，不知秋思落谁家。',
    lines: [
      makeLine('中庭地白树栖鸦，', 'zhōng tíng dì bái shù qī yā,', '中庭地白／树栖鸦，'),
      makeLine('冷露无声湿桂花。', 'lěng lù wú shēng shī guì huā.', '冷露无声／湿桂花。'),
      makeLine('今夜月明人尽望，', 'jīn yè yuè míng rén jìn wàng,', '今夜月明／人尽望，'),
      makeLine('不知秋思落谁家。', 'bù zhī qiū sī luò shuí jiā.', '不知秋思／落谁家。')
    ],
    spokenText: '十五夜望月，王建，唐代。中庭地白树栖鸦，冷露无声湿桂花。今夜月明人尽望，不知秋思落谁家。',
    translation: '庭院月光洒满地面一片银白，乌鸦栖息在树枝上，无声的寒露悄悄打湿了桂花。今夜普天之下的人都在抬头仰望这一轮明月，不知这漫漫秋夜思念落入了谁的心中。',
    appreciation: '中秋望月怀乡绝唱，不直说自己思乡，而问“不知秋思落谁家”，含蓄蕴藉。',
    keywords: [{ word: '地白', explain: '月光洒在地上像一层白霜。' }, { word: '秋思', explain: '秋夜思亲念友之情。' }]
  },
  {
    id: 'huan-xi-sha-su-shi',
    title: '浣溪沙',
    titlePinyin: 'huàn xī shā',
    author: '苏轼',
    dynasty: '宋代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '哲理探索',
    themeColor: '#0d9488',
    tags: ['门前流水尚能西', '休将白发唱黄鸡'],
    famousQuote: '谁道人生无再少？门前流水尚能西！休将白发唱黄鸡。',
    lines: [
      makeLine('山下兰芽短浸溪，', 'shān xià lán yá duǎn jìn xī,', '山下兰芽／短浸溪，'),
      makeLine('松间沙路净无泥，', 'sōng jiān shā lù jìng wú ní,', '松间沙路／净无泥，'),
      makeLine('潇潇暮雨子规啼。', 'xiāo xiāo mù yǔ zǐ guī tí.', '潇潇暮雨／子规啼。'),
      makeLine('谁道人生无再少？', 'shuí dào rén shēng wú zài shào?', '谁道人生／无再少？'),
      makeLine('门前流水尚能西！', 'mén qián liú shuǐ shàng néng xī!', '门前流水／尚能西！'),
      makeLine('休将白发唱黄鸡。', 'xiū jiāng bái fà chàng huáng jī.', '休将白发／唱黄鸡。')
    ],
    spokenText: '浣溪沙，苏轼，宋代。山下兰芽短浸溪，松间沙路净无泥，潇潇暮雨子规啼。谁道人生无再少？门前流水尚能西！休将白发唱黄鸡。',
    translation: '山脚下兰草嫩芽刚刚冒出浸润在溪流中，松林间沙石小路洁净得不染一丝泥泞，黄昏潇潇细雨中杜鹃鸟在声声啼鸣。谁说人生不能重新变得年轻？你看门前的流水还能破天荒向西流淌！休要因为白发衰老就徒自悲叹光阴虚掷！',
    appreciation: '豪放旷达、自强不息的生命礼赞，逆境中始终乐观向上。',
    keywords: [{ word: '子规', explain: '杜鹃鸟。' }, { word: '再少', explain: '回到青春年少。' }, { word: '唱黄鸡', explain: '感叹时光流逝、容颜老去。' }]
  },
  {
    id: 'xue-yi',
    title: '学弈',
    titlePinyin: 'xué yì',
    author: '《孟子》',
    dynasty: '战国',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '经典古文',
    themeColor: '#7c3aed',
    tags: ['专心致志', '学习态度'],
    famousQuote: '虽与之俱学，弗若之矣。为是其智弗若与？曰：非然也。',
    lines: [
      makeLine('弈秋，通国之善弈者也。', 'yì qiū, tōng guó zhī shàn yì zhě yě.', '弈秋，／通国之善弈者也。'),
      makeLine('使弈秋诲二人弈，其一人专心致志，惟弈秋之为听；', 'shǐ yì qiū huì èr rén yì, qí yī rén zhuān xīn zhì zhì, wéi yì qiū zhī wéi tīng;', '使弈秋诲二人弈，／其一人专心致志，／惟弈秋之为听；'),
      makeLine('一人虽听之，一心以为有鸿鹄将至，思援弓缴而射之。', 'yī rén suī tīng zhī, yī xīn yǐ wéi yǒu hóng hú jiāng zhì, sī yuán gōng zhuó ér shè zhī.', '一人虽听之，／一心以为有鸿鹄将至，／思援弓缴而射之。'),
      makeLine('虽与之俱学，弗若之矣。', 'suī yǔ zhī jù xué, fú ruò zhī yǐ.', '虽与之俱学，／弗若之矣。'),
      makeLine('为是其智弗若与？曰：非然也。', 'wèi shì qí zhì fú ruò yú? yuē: fēi rán yě.', '为是其智弗若与？／曰：非然也。')
    ],
    spokenText: '学弈，战国孟子。弈秋，通国之善弈者也。使弈秋诲二人弈，其一人专心致志，惟弈秋之为听；一人虽听之，一心以为有鸿鹄将至，思援弓缴而射之。虽与之俱学，弗若之矣。为是其智弗若与？曰：非然也。',
    translation: '弈秋是全国最擅长下围棋的人。让他教两个人下棋，其中一人专心致志，只听弈秋教导；另一个人虽然也听着，心里却总想着有大天鹅要飞来，想拉弓搭箭射它。虽然两人一起学习，后者的成绩却远不如前者。难道是他的智商不如别人吗？回答说：绝不是这样的。',
    appreciation: '生动揭示了学习必须专心致志、不可三心二意的恒常真理。',
    keywords: [{ word: '诲', explain: '教导。' }, { word: '鸿鹄', explain: '天鹅。' }, { word: '弗若', explain: '不如。' }]
  },
  {
    id: 'liang-xiao-er-bian-ri',
    title: '两小儿辩日',
    titlePinyin: 'liǎng xiǎo ér biàn rì',
    author: '《列子》',
    dynasty: '战国',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '经典古文',
    themeColor: '#d97706',
    tags: ['实事求是', '孔子不能决'],
    famousQuote: '两小儿笑曰：“孰为汝多知乎？”',
    lines: [
      makeLine('孔子东游，见两小儿辩斗，问其故。', 'kǒng zǐ dōng yóu, jiàn liǎng xiǎo ér biàn dòu, wèn qí gù.', '孔子东游，／见两小儿辩斗，／问其故。'),
      makeLine('一儿曰：“我以日始出时去人近，而日中时远也。”', 'yī ér yuē: "wǒ yǐ rì shǐ chū shí qù rén jìn, ér rì zhōng shí yuǎn yě."', '一儿曰：／“我以日始出时去人近，／而日中时远也。”'),
      makeLine('一儿曰：“我以日初出远，而日中时近也。”', 'yī ér yuē: "wǒ yǐ rì chū chū yuǎn, ér rì zhōng shí jìn yě."', '一儿曰：／“我以日初出远，／而日中时近也。”'),
      makeLine('一儿曰：“日初出大如车盖，及日中则如盘盂，此不为远者小而近者大乎？”', 'yī ér yuē: "rì chū chū dà rú chē gài, jí rì zhōng zé rú pán yú, cǐ bù wéi yuǎn zhě xiǎo ér jìn zhě dà hū?"', '一儿曰：／“日初出大如车盖，／及日中则如盘盂，／此不为远者小而近者大乎？”'),
      makeLine('一儿曰：“日初出沧沧凉凉，及其日中如探汤，此不为近者热而远者凉乎？”', 'yī ér yuē: "rì chū chū cāng cāng liáng liáng, jí qí rì zhōng rú tàn tāng, cǐ bù wéi jìn zhě rè ér yuǎn zhě liáng hū?"', '一儿曰：／“日初出沧沧凉凉，／及其日中如探汤，／此不为近者热而远者凉乎？”'),
      makeLine('孔子不能决也。两小儿笑曰：“孰为汝多知乎？”', 'kǒng zǐ bù néng jué yě. liǎng xiǎo ér xiào yuē: "shú wéi rǔ duō zhī hū?"', '孔子不能决也。／两小儿笑曰：／“孰为汝多知乎？”')
    ],
    spokenText: '两小儿辩日，战国列子。孔子东游，见两小儿辩斗，问其故。一儿曰：“我以日始出时去人近，而日中时远也。”一儿曰：“我以日初出远，而日中时近也。”一儿曰：“日初出大如车盖，及日中则如盘盂，此不为远者小而近者大乎？”一儿曰：“日初出沧沧凉凉，及其日中如探汤，此不为近者热而远者凉乎？”孔子不能决也。两小儿笑曰：“孰为汝多知乎？”',
    translation: '孔子到东方游历，看见两个小孩在争辩，便询问原因。一个小孩说：“我认为太阳刚升起时离人近，而正午时离人远。”另一个小孩说：“我认为太阳刚升起时远，正午时近。”一个小孩说：“太阳刚出来大得像车伞盖，正午时却像个盘盂，这不是远的小、近的大吗？”另一个说：“太阳刚出来清凉寒冷，正午时却热得像把手伸进热水，这不是近的热、远的发凉吗？”孔子无法判定谁对谁错。两个小孩笑着说：“谁说你智慧多见识广呢？”',
    appreciation: '赞美儿童善于观察思考的求知欲，以及孔子实事求是、“知之为知之”的诚实治学风范。',
    keywords: [{ word: '去', explain: '距离。' }, { word: '探汤', explain: '把手伸进热水。汤：热水。' }, { word: '决', explain: '裁决判断。' }]
  },
  {
    id: 'ma-shi',
    title: '马诗',
    titlePinyin: 'mǎ shī',
    author: '李贺',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '托物言志',
    themeColor: '#b45309',
    tags: ['大漠沙如雪', '快走踏清秋'],
    famousQuote: '何当金络脑，快走踏清秋。',
    lines: [
      makeLine('大漠沙如雪，', 'dà mò shā rú xuě,', '大漠／沙如雪，'),
      makeLine('燕山月似钩。', 'yān shān yuè sì gōu.', '燕山／月似钩。'),
      makeLine('何当金络脑，', 'hé dāng jīn luò nǎo,', '何当／金络脑，'),
      makeLine('快走踏清秋。', 'kuài zǒu tà qīng qiū.', '快走／踏清秋。')
    ],
    spokenText: '马诗，李贺，唐代。大漠沙如雪，燕山月似钩。何当金络脑，快走踏清秋。',
    translation: '无边广漠中的黄沙在月下洁白如雪，燕山夜空挂着一弯如铁钩般的弯月。什么时候才能配上金色的笼头马嚼，纵横奔驰踏过那辽阔爽朗的深秋！',
    appreciation: '借良马渴望驰骋边疆、建功立业，寄托了诗人渴望施展抱负的凌云壮志。',
    keywords: [{ word: '金络脑', explain: '贵重的金色马笼头。' }, { word: '清秋', explain: '爽朗清净的秋天。' }]
  },
  {
    id: 'shi-hui-yin',
    title: '石灰吟',
    titlePinyin: 'shí huī yín',
    author: '于谦',
    dynasty: '明代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '托物言志',
    themeColor: '#475569',
    tags: ['千锤万凿出深山', '要留清白在人间'],
    famousQuote: '粉骨碎身浑不怕，要留清白在人间。',
    lines: [
      makeLine('千锤万凿出深山，', 'qiān chuí wàn záo chū shēn shān,', '千锤万凿／出深山，'),
      makeLine('烈火焚烧若等闲。', 'liè huǒ fén shāo ruò děng xián.', '烈火焚烧／若等闲。'),
      makeLine('粉骨碎身浑不怕，', 'fěn gǔ suì shēn hún bù pà,', '粉骨碎身／浑不怕，'),
      makeLine('要留清白在人间。', 'yào liú qīng bái zài rén jiān.', '要留清白／在人间。')
    ],
    spokenText: '石灰吟，于谦，明代。千锤万凿出深山，烈火焚烧若等闲。粉骨碎身浑不怕，要留清白在人间。',
    translation: '经历了千万次铁锤敲打钢凿开采才从深山运出，面对熊熊烈火的焚烧淬炼也看作平常等闲。纵然被研磨成粉身骨碎骨也浑然不惧，一定要把纯洁清白的品行永留在天地人间！',
    appreciation: '托物言志的千古名篇，展现出坚贞不屈、大义凛然的民族气节。',
    keywords: [{ word: '若等闲', explain: '好像平常的事情。' }, { word: '清白', explain: '石灰的洁白，比喻高洁坚贞的节操。' }]
  },
  {
    id: 'zhu-shi',
    title: '竹石',
    titlePinyin: 'zhú shí',
    author: '郑燮',
    dynasty: '清代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '托物言志',
    themeColor: '#15803d',
    tags: ['咬定青山不放松', '任尔东西南北风'],
    famousQuote: '千磨万击还坚劲，任尔东西南北风。',
    lines: [
      makeLine('咬定青山不放松，', 'yǎo dìng qīng shān bù fàng sōng,', '咬定青山／不放松，'),
      makeLine('立根原在破岩中。', 'lì gēn yuán zài pò yán zhōng.', '立根原在／破岩中。'),
      makeLine('千磨万击还坚劲，', 'qiān mó wàn jī hái jiān jìn,', '千磨万击／还坚劲，'),
      makeLine('任尔东西南北风。', 'rèn ěr dōng xī nán běi fēng.', '任尔／东西南北风。')
    ],
    spokenText: '竹石，郑燮，清代。咬定青山不放松，立根原在破岩中。千磨万击还坚劲，任尔东西南北风。',
    translation: '紧紧咬定青翠的山石绝不放松，深深扎根原本就在陡峭破裂的岩石缝隙中。历经千万次风雨磨砺敲击依然坚忍顽强，任凭你四面八方吹来狂暴的狂风！',
    appreciation: '赞颂坚韧不拔、傲骨凛然的刚正气节。',
    keywords: [{ word: '破岩', explain: '破裂陡峭的山岩。' }, { word: '任尔', explain: '任凭你。' }]
  },
  {
    id: 'cai-wei-jie-xuan',
    title: '采薇（节选）',
    titlePinyin: 'cǎi wēi jié xuǎn',
    author: '《诗经·小雅》',
    dynasty: '先秦',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '家国情怀',
    themeColor: '#059669',
    tags: ['昔我往矣杨柳依依', '今我来思雨雪霏霏'],
    famousQuote: '昔我往矣，杨柳依依。今我来思，雨雪霏霏。',
    lines: [
      makeLine('昔我往矣，', 'xī wǒ wǎng yǐ,', '昔我往矣，'),
      makeLine('杨柳依依。', 'yáng liǔ yī yī.', '杨柳依依。'),
      makeLine('今我来思，', 'jīn wǒ lái sī,', '今我来思，'),
      makeLine('雨雪霏霏。', 'yù xuě fēi fēi.', '雨雪霏霏。'),
      makeLine('行道迟迟，', 'xíng dào chí chí,', '行道迟迟，'),
      makeLine('载渴载饥。', 'zài kě zài jī.', '载渴载饥。'),
      makeLine('我心伤悲，', 'wǒ xīn shāng bēi,', '我心伤悲，'),
      makeLine('莫知我哀！', 'mò zhī wǒ āi!', '莫知我哀！')
    ],
    spokenText: '采薇节选，先秦诗经。昔我往矣，杨柳依依。今我来思，雨雪霏霏。行道迟迟，载渴载饥。我心伤悲，莫知我哀！',
    translation: '回想当初我出征时，杨柳依依随风摇曳。如今我返回家乡路途，雪花漫天纷扬飘落。泥泞道路行走缓慢艰难，又渴又饥忍受折磨。我的心中充满无尽悲伤，没人能理解我的哀痛！',
    appreciation: '情景交融的千古典范，“以乐景写哀，以哀景写乐”，深沉悲怆。',
    keywords: [{ word: '依依', explain: '形容杨柳随风轻柔摆动。' }, { word: '雨雪', explain: '雨作动词读 yù，下雪。霏霏：雪大貌。' }]
  },
  {
    id: 'chun-ye-xi-yu',
    title: '春夜喜雨',
    titlePinyin: 'chūn yè xǐ yǔ',
    author: '杜甫',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '四季风物',
    themeColor: '#0891b2',
    tags: ['随风潜入夜', '润物细无声'],
    famousQuote: '随风潜入夜，润物细无声。',
    lines: [
      makeLine('好雨知时节，', 'hǎo yǔ zhī shí jié,', '好雨／知时节，'),
      makeLine('当春乃发生。', 'dāng chūn nǎi fā shēng.', '当春／乃发生。'),
      makeLine('随风潜入夜，', 'suí fēng qián rù yè,', '随风／潜入夜，'),
      makeLine('润物细无声。', 'rùn wù xì wú shēng.', '润物／细无声。'),
      makeLine('野径云俱黑，', 'yě jìng yún jù hēi,', '野径／云俱黑，'),
      makeLine('江船火独明。', 'jiāng chuán huǒ dú míng.', '江船／火独明。'),
      makeLine('晓看红湿处，', 'xiǎo kàn hóng shī chù,', '晓看／红湿处，'),
      makeLine('花重锦官城。', 'huā zhòng jǐn guān chéng.', '花重／锦官城。')
    ],
    spokenText: '春夜喜雨，杜甫，唐代。好雨知时节，当春乃发生。随风潜入夜，润物细无声。野径云俱黑，江船火独明。晓看红湿处，花重锦官城。',
    translation: '及时的好雨仿佛通晓时节，正当春天万物萌发时降临。伴随着和煦春风悄悄潜入黑夜，滋润万物细密轻柔寂静无声。田野小路与天空浓云一样漆黑，唯有江上渔船闪烁着一点渔火。清晨若看那红艳湿润的花丛，沉甸甸的花朵定开满了整个锦官城。',
    appreciation: '字字写雨，字字无“喜”，却处处流溢着爱雨喜雨的欢悦之情。',
    keywords: [{ word: '发生', explain: '萌发、生长。' }, { word: '锦官城', explain: '成都的别称。' }]
  },
  {
    id: 'jiang-pan-du-bu-xun-hua-6',
    title: '江畔独步寻花·其六',
    titlePinyin: 'jiāng pàn dú bù xún huā qí liù',
    author: '杜甫',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '四季风物',
    themeColor: '#ec4899',
    tags: ['留连戏蝶时时舞', '自在娇莺恰恰啼'],
    famousQuote: '留连戏蝶时时舞，自在娇莺恰恰啼。',
    lines: [
      makeLine('黄四娘家花满蹊，', 'huáng sì niáng jiā huā mǎn xī,', '黄四娘家／花满蹊，'),
      makeLine('千朵万朵压枝低。', 'qiān duǒ wàn duǒ yā zhī dī.', '千朵万朵／压枝低。'),
      makeLine('留连戏蝶时时舞，', 'liú lián xì dié shí shí wǔ,', '留连戏蝶／时时舞，'),
      makeLine('自在娇莺恰恰啼。', 'zì zài jiāo yīng qià qià tí.', '自在娇莺／恰恰啼。')
    ],
    spokenText: '江畔独步寻花其六，杜甫，唐代。黄四娘家花满蹊，千朵万朵压枝低。留连戏蝶时时舞，自在娇莺恰恰啼。',
    translation: '黄四娘家周围的小路上开满了鲜花，千万朵繁花盛开把花枝压得低垂。流连忘返的彩蝶在花间翩翩起舞，自由自在的娇俏黄莺发出婉转啼鸣。',
    appreciation: '春天百花盛开、生机勃勃的绚丽画面，表现了诗人闲适欣喜的心情。',
    keywords: [{ word: '蹊', explain: '小路。' }, { word: '恰恰', explain: '形容鸟叫声和谐动听。' }]
  },
  {
    id: 'zao-chun-cheng-shui-bu',
    title: '早春呈水部张十八员外',
    titlePinyin: 'zǎo chūn chéng shuǐ bù zhāng shí bā yuán wài',
    author: '韩愈',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '四季风物',
    themeColor: '#10b981',
    tags: ['天街小雨润如酥', '草色遥看近却无'],
    famousQuote: '最是一年春好处，绝胜烟柳满皇都。',
    lines: [
      makeLine('天街小雨润如酥，', 'tiān jiē xiǎo yǔ rùn rú sū,', '天街小雨／润如酥，'),
      makeLine('草色遥看近却无。', 'cǎo sè yáo kàn jìn què wú.', '草色遥看／近却无。'),
      makeLine('最是一年春好处，', 'zuì shì yī nián chūn hǎo chù,', '最是一年／春好处，'),
      makeLine('绝胜烟柳满皇都。', 'jué shèng yān liǔ mǎn huáng dū.', '绝胜／烟柳满皇都。')
    ],
    spokenText: '早春呈水部张十八员外，韩愈，唐代。天街小雨润如酥，草色遥看近却无。最是一年春好处，绝胜烟柳满皇都。',
    translation: '京城街道上飘落的细雨柔润得像酥油一样，初生的草芽远远望去一片嫩绿、走近却稀疏得看不真切。这正是一年当中春光最美妙的时节，远远胜过暮春时烟柳弥漫满城的景象。',
    appreciation: '敏锐捕捉早春朦胧若现的细微生机，构思精巧。',
    keywords: [{ word: '天街', explain: '京城的街道。' }, { word: '润如酥', explain: '湿润滑腻如酥油。' }]
  },
  {
    id: 'jiang-shang-yu-zhe',
    title: '江上渔者',
    titlePinyin: 'jiāng shàng yú zhě',
    author: '范仲淹',
    dynasty: '宋代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '家国情怀',
    themeColor: '#0284c7',
    tags: ['江上往来人', '出没风波里'],
    famousQuote: '君看一叶舟，出没风波里。',
    lines: [
      makeLine('江上往来人，', 'jiāng shàng wǎng lái rén,', '江上／往来人，'),
      makeLine('但爱鲈鱼美。', 'dàn ài lú yú měi.', '但爱／鲈鱼美。'),
      makeLine('君看一叶舟，', 'jūn kàn yī yè zhōu,', '君看／一叶舟，'),
      makeLine('出没风波里。', 'chū mò fēng bō lǐ.', '出没／风波里。')
    ],
    spokenText: '江上渔者，范仲淹，宋代。江上往来人，但爱鲈鱼美。君看一叶舟，出没风波里。',
    translation: '江岸上人来人往络绎不绝，大家只喜爱鲈鱼肉质的鲜美。您请看那江中一叶孤零零的小船，在狂风巨浪中时隐时现有多么危险艰难！',
    appreciation: '反映底层劳动人民捕鱼生活的艰辛险恶，寄寓深厚同情。',
    keywords: [{ word: '但', explain: '只。' }, { word: '风波', explain: '风浪。' }]
  },
  {
    id: 'bo-chuan-gua-zhou',
    title: '泊船瓜洲',
    titlePinyin: 'bó chuán guā zhōu',
    author: '王安石',
    dynasty: '宋代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '明月思乡',
    themeColor: '#059669',
    tags: ['春风又绿江南岸', '明月何时照我还'],
    famousQuote: '春风又绿江南岸，明月何时照我还？',
    lines: [
      makeLine('京口瓜洲一水间，', 'jīng kǒu guā zhōu yī shuǐ jiān,', '京口瓜洲／一水间，'),
      makeLine('钟山只隔数重山。', 'zhōng shān zhǐ gé shù chóng shān.', '钟山只隔／数重山。'),
      makeLine('春风又绿江南岸，', 'chūn fēng yòu lǜ jiāng nán àn,', '春风又绿／江南岸，'),
      makeLine('明月何时照我还？', 'míng yuè hé shí zhào wǒ huán?', '明月何时／照我还？')
    ],
    spokenText: '泊船瓜洲，王安石，宋代。京口瓜洲一水间，钟山只隔数重山。春风又绿江南岸，明月何时照我还？',
    translation: '京口和瓜洲只隔着一条长江的水流，故乡钟山也只相隔几座青山。春风再次吹绿了江南两岸，空中的明月什么时候才能照亮我回家的归程呢？',
    appreciation: '“绿”字动用极传神，字里行间洋溢着浓郁的思乡之情。',
    keywords: [{ word: '一水间', explain: '只隔着一江之水。' }, { word: '绿', explain: '吹绿。' }]
  },
  {
    id: 'you-yuan-bu-zhi',
    title: '游园不值',
    titlePinyin: 'yóu yuán bù zhí',
    author: '叶绍翁',
    dynasty: '宋代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '四季风物',
    themeColor: '#e11d48',
    tags: ['春色满园关不住', '一枝红杏出墙来'],
    famousQuote: '春色满园关不住，一枝红杏出墙来。',
    lines: [
      makeLine('应怜屐齿印苍苔，', 'yīng lián jī chǐ yìn cāng tái,', '应怜屐齿／印苍苔，'),
      makeLine('小扣柴扉久不开。', 'xiǎo kòu chái fēi jiǔ bù kāi.', '小扣柴扉／久不开。'),
      makeLine('春色满园关不住，', 'chūn sè mǎn yuán guān bù zhù,', '春色满园／关不住，'),
      makeLine('一枝红杏出墙来。', 'yī zhī hóng xìng chū qiáng lái.', '一枝红杏／出墙来。')
    ],
    spokenText: '游园不值，叶绍翁，宋代。应怜屐齿印苍苔，小扣柴扉久不开。春色满园关不住，一枝红杏出墙来。',
    translation: '大概是园主人爱惜青苔怕木屐鞋齿踩坏，轻轻敲击柴门很久也没有人来开门。满园的蓬勃春色是关也关不住的，一枝娇艳的红杏早已伸出了院墙！',
    appreciation: '蕴含深刻哲理：新生事物具有顽强生命力，任何力量都无法阻挡。',
    keywords: [{ word: '不值', explain: '没遇到主人。' }, { word: '柴扉', explain: '柴门。' }]
  },
  {
    id: 'bu-suan-zi-song-bao-hao-ran',
    title: '卜算子·送鲍浩然之浙东',
    titlePinyin: 'bǔ suàn zǐ sòng bào hào rán zhī zhè dōng',
    author: '王观',
    dynasty: '宋代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '真挚情谊',
    themeColor: '#06b6d4',
    tags: ['水是眼波横', '山是眉峰聚'],
    famousQuote: '若到江南赶上春，千万和春住。',
    lines: [
      makeLine('水是眼波横，', 'shuǐ shì yǎn bō héng,', '水是／眼波横，'),
      makeLine('山是眉峰聚。', 'shān shì méi fēng jù.', '山是／眉峰聚。'),
      makeLine('欲问行人去那边？', 'yù wèn xíng rén qù nǎ biān?', '欲问行人／去那边？'),
      makeLine('眉眼盈盈处。', 'méi yǎn yíng yíng chù.', '眉眼／盈盈处。'),
      makeLine('才始送春归，', 'cái shǐ sòng chūn guī,', '才始／送春归，'),
      makeLine('又送君归去。', 'yòu sòng jūn guī qù.', '又送君／归去。'),
      makeLine('若到江南赶上春，', 'ruò dào jiāng nán gǎn shàng chūn,', '若到江南／赶上春，'),
      makeLine('千万和春住。', 'qiān wàn hé chūn zhù.', '千万／和春住。')
    ],
    spokenText: '卜算子送鲍浩然之浙东，王观，宋代。水是眼波横，山是眉峰聚。欲问行人去那边？眉眼盈盈处。才始送春归，又送君归去。若到江南赶上春，千万和春住。',
    translation: '水清秀得像美人流转的眼波，山青翠得如女子蹙起的眉峰。想要问那行路之人去往哪里？就去往那山清水秀的眉眼盈盈之处。刚才送走了离去的春天，现在又要送你归去。如果到了江南还能赶上春光，千万要与春光一同停留长住啊！',
    appreciation: '把山水拟作美人眉目，送别诗中毫无凄凉，满含美好祝愿。',
    keywords: [{ word: '眉峰', explain: '女子的眉毛。' }, { word: '和春住', explain: '与春天同在。' }]
  },
  {
    id: 'huan-xi-sha-qing-quan-si',
    title: '浣溪沙（一曲新词酒一杯）',
    titlePinyin: 'huàn xī shā yī qū xīn cí jiǔ yī bēi',
    author: '晏殊',
    dynasty: '宋代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '四季风物',
    themeColor: '#7c3aed',
    tags: ['无可奈何花落去', '似曾相识燕归来'],
    famousQuote: '无可奈何花落去，似曾相识燕归来。',
    lines: [
      makeLine('一曲新词酒一杯，', 'yī qū xīn cí jiǔ yī bēi,', '一曲新词／酒一杯，'),
      makeLine('去年天气旧亭台。', 'qù nián tiān qì jiù tíng tái.', '去年天气／旧亭台。'),
      makeLine('夕阳西下几时回？', 'xī yáng xī xià jǐ shí huí?', '夕阳西下／几时回？'),
      makeLine('无可奈何花落去，', 'wú kě nài hé huā luò qù,', '无可奈何／花落去，'),
      makeLine('似曾相识燕归来。', 'sì céng xiāng shí yàn guī lái.', '似曾相识／燕归来。'),
      makeLine('小园香径独徘徊。', 'xiǎo yuán xiāng jìng dú pái huái.', '小园香径／独徘徊。')
    ],
    spokenText: '浣溪沙，晏殊，宋代。一曲新词酒一杯，去年天气旧亭台。夕阳西下几时回？无可奈何花落去，似曾相识燕归来。小园香径独徘徊。',
    translation: '听着一首新填的词喝着一杯美酒，迎着与去年一样的天气坐在旧日的亭台。西下的夕阳落去什么时候才能回来呢？无可奈何中春花纷纷飘落，似曾相识的双燕又飞回来了。在落英缤纷的小园曲径上独自怅惘徘徊。',
    appreciation: '天然奇偶的千古绝对，流露时光流逝之感与美好希冀。',
    keywords: [{ word: '香径', explain: '落满花瓣的小路。' }]
  },
  {
    id: 'qing-ping-le-chun-gui-he-chu',
    title: '清平乐·春归何处',
    titlePinyin: 'qīng píng lè chūn guī hé chù',
    author: '黄庭坚',
    dynasty: '宋代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '四季风物',
    themeColor: '#059669',
    tags: ['春归何处', '百啭无人能解'],
    famousQuote: '若有人知春去处，唤取归来同住。',
    lines: [
      makeLine('春归何处？', 'chūn guī hé chù?', '春归何处？'),
      makeLine('寂寞无行路。', 'jì mò wú xíng lù.', '寂寞／无行路。'),
      makeLine('若有人知春去处，', 'ruò yǒu rén zhī chūn qù chù,', '若有人知／春去处，'),
      makeLine('唤取归来同住。', 'huàn qǔ guī lái tóng zhù.', '唤取归来／同住。'),
      makeLine('春无踪迹谁知？', 'chūn wú zōng jì shuí zhī?', '春无踪迹／谁知？'),
      makeLine('除非问取黄鹂。', 'chú fēi wèn qǔ huáng lí.', '除非／问取黄鹂。'),
      makeLine('百啭无人能解，', 'bǎi zhuàn wú rén néng jiě,', '百啭／无人能解，'),
      makeLine('因风飞过蔷薇。', 'yīn fēng fēi guò qiáng wēi.', '因风／飞过蔷薇。')
    ],
    spokenText: '清平乐春归何处，黄庭坚，宋代。春归何处？寂寞无行路。若有人知春去处，唤取归来同住。春无踪迹谁知？除非问取黄鹂。百啭无人能解，因风飞过蔷薇。',
    translation: '春天回归到哪里去了？悄然无声寻不见离去的道路。如果有人知道春天的去向，请唤它回来与我们一同居住。春天消失得无影无踪谁能知晓？除非去问那一树的黄鹂。黄鹂婉转百啭鸣叫没人能够听懂，它借着微风展翅飞过了蔷薇花架。',
    appreciation: '惜春拟人名作，纯真清丽，回味无穷。',
    keywords: [{ word: '唤取', explain: '呼唤招来。' }, { word: '百啭', explain: '鸟儿百般婉转啼鸣。' }]
  },
  {
    id: 'ti-di-zhi-shu-tang',
    title: '题弟侄书堂',
    titlePinyin: 'tí dì zhí shū táng',
    author: '杜荀鹤',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '哲理探索',
    themeColor: '#2563eb',
    tags: ['少年辛苦终身事', '莫向光阴惰寸功'],
    famousQuote: '少年辛苦终身事，莫向光阴惰寸功。',
    lines: [
      makeLine('何事居穷道不穷，', 'hé shì jū qióng dào bù qióng,', '何事居穷／道不穷，'),
      makeLine('乱时还与静时同。', 'luàn shí hái yǔ jìng shí tóng.', '乱时还与／静时同。'),
      makeLine('家贫显母生前孝，', 'jiā pín xiǎn mǔ shēng qián xiào,', '家贫显母／生前孝，'),
      makeLine('道苦求知死后名。', 'dào kǔ qiú zhī sǐ hòu míng.', '道苦求知／死后名。'),
      makeLine('少年辛苦终身事，', 'shào nián xīn kǔ zhōng shēn shì,', '少年辛苦／终身事，'),
      makeLine('莫向光阴惰寸功。', 'mò xiàng guāng yīn duò cùn gōng.', '莫向光阴／惰寸功。')
    ],
    spokenText: '题弟侄书堂，杜荀鹤，唐代。何事居穷道不穷，乱时还与静时同。家贫显母生前孝，道苦求知死后名。少年辛苦终身事，莫向光阴惰寸功。',
    translation: '为什么身处贫穷而道德志向不匮乏？在动乱年代和太平盛世一样刻苦读书。家境贫苦更能显出对母亲的孝敬，求道艰苦才能赢得流芳后世的功名。年轻时的勤勉辛苦是关系终身的大事，千万不要在光阴岁月中怠惰微小的功夫啊！',
    appreciation: '劝勉后辈珍惜青春韶华、持之以恒读书立业的名句。',
    keywords: [{ word: '惰寸功', explain: '在哪怕微小的努力上产生懈怠。' }]
  },
  {
    id: 'song-yuan-er-shi-an-xi',
    title: '送元二使安西',
    titlePinyin: 'sòng yuán èr shǐ ān xī',
    author: '王维',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '真挚情谊',
    themeColor: '#4f46e5',
    tags: ['劝君更尽一杯酒', '西出阳关无故人'],
    famousQuote: '劝君更尽一杯酒，西出阳关无故人。',
    lines: [
      makeLine('渭城朝雨浥轻尘，', 'wèi chéng zhāo yǔ yì qīng chén,', '渭城朝雨／浥轻尘，'),
      makeLine('客舍青青柳色新。', 'kè shè qīng qīng liǔ sè xīn.', '客舍青青／柳色新。'),
      makeLine('劝君更尽一杯酒，', 'quàn jūn gèng jìn yī bēi jiǔ,', '劝君更尽／一杯酒，'),
      makeLine('西出阳关无故人。', 'xī chū yáng guān wú gù rén.', '西出阳关／无故人。')
    ],
    spokenText: '送元二使安西，王维，唐代。渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。',
    translation: '渭城清晨的春雨湿润了路上的尘埃，客栈旁边的杨柳显得格外青翠清新。真诚劝请老朋友再多喝干这一杯离别的美酒，等西走出阳关之外就再也没有老朋友了！',
    appreciation: '唐代最著名的送别曲（阳关三叠），深沉感人，千古流传。',
    keywords: [{ word: '浥', explain: '湿润。' }, { word: '阳关', explain: '古代出西域的关隘。' }]
  },
  {
    id: 'sai-xia-qu-lu-lun-lin-an',
    title: '塞下曲',
    titlePinyin: 'sài xià qǔ',
    author: '卢纶',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '家国情怀',
    themeColor: '#b45309',
    tags: ['将军夜引弓', '没在石棱中'],
    famousQuote: '平明寻白羽，没在石棱中。',
    lines: [
      makeLine('林暗草惊风，', 'lín àn cǎo jīng fēng,', '林暗／草惊风，'),
      makeLine('将军夜引弓。', 'jiāng jūn yè yǐn gōng.', '将军／夜引弓。'),
      makeLine('平明寻白羽，', 'píng míng xún bái yǔ,', '平明／寻白羽，'),
      makeLine('没在石棱中。', 'mò zài shí líng zhōng.', '没在／石棱中。')
    ],
    spokenText: '塞下曲，卢纶，唐代。林暗草惊风，将军夜引弓。平明寻白羽，没在石棱中。',
    translation: '昏暗的树林中狂风吹草动引发警觉，将军在深夜拉开弯弓一箭射出。天亮之后去寻找那白色羽箭，发现箭簇早已深深没入了坚硬的石头裂缝中！',
    appreciation: '赞扬飞将军李广的神勇英武与非凡武艺。',
    keywords: [{ word: '引弓', explain: '拉开弓弦。' }, { word: '平明', explain: '天亮。' }, { word: '没', explain: '陷入，深入。' }]
  },
  {
    id: 'bie-dong-da-2',
    title: '别董大',
    titlePinyin: 'bié dǒng dà',
    author: '高适',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '真挚情谊',
    themeColor: '#d97706',
    tags: ['莫愁前路无知己', '天下谁人不识君'],
    famousQuote: '莫愁前路无知己，天下谁人不识君？',
    lines: [
      makeLine('千里黄云白日曛，', 'qiān lǐ huáng yún bái rì xūn,', '千里黄云／白日曛，'),
      makeLine('北风吹雁雪纷纷。', 'běi fēng chuī yàn xuě fēn fēn.', '北风吹雁／雪纷纷。'),
      makeLine('莫愁前路无知己，', 'mò chóu qián lù wú zhī jǐ,', '莫愁前路／无知己，'),
      makeLine('天下谁人不识君？', 'tiān xià shuí rén bù shí jūn?', '天下谁人／不识君？')
    ],
    spokenText: '别董大，高适，唐代。千里黄云白日曛，北风吹雁雪纷纷。莫愁前路无知己，天下谁人不识君？',
    translation: '千里黄云密布太阳变得昏黄暗淡，北风呼啸大雁掠过大雪纷飞。不要担心未来的道路上没有知心朋友，试问天下又有谁不知道您的大名呢？',
    appreciation: '慷慨悲壮中饱含深情厚谊与豪迈鼓励，送别诗中的豪迈绝唱。',
    keywords: [{ word: '曛', explain: '昏黄暗淡。' }, { word: '君', explain: '对董大的尊称。' }]
  },
  {
    id: 'pu-sa-man-jiang-xi',
    title: '菩萨蛮·书江西造口壁',
    titlePinyin: 'pú sà mán shū jiāng xī zào kǒu bì',
    author: '辛弃疾',
    dynasty: '宋代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '家国情怀',
    themeColor: '#dc2626',
    tags: ['青山遮不住', '毕竟东流去'],
    famousQuote: '青山遮不住，毕竟东流去。',
    lines: [
      makeLine('郁孤台下清江水，', 'yù gū tái xià qīng jiāng shuǐ,', '郁孤台下／清江水，'),
      makeLine('中间多少行人泪？', 'zhōng jiān duō shǎo xíng rén lèi?', '中间多少／行人泪？'),
      makeLine('西北望长安，', 'xī běi wàng cháng ān,', '西北望／长安，'),
      makeLine('可怜无数山。', 'kě lián wú shù shān.', '可怜／无数山。'),
      makeLine('青山遮不住，', 'qīng shān zhē bù zhù,', '青山／遮不住，'),
      makeLine('毕竟东流去。', 'bì jìng dōng liú qù.', '毕竟／东流去。'),
      makeLine('江晚正愁余，', 'jiāng wǎn zhèng chóu yú,', '江晚／正愁余，'),
      makeLine('山深闻鹧鸪。', 'shān shēn wén zhè gū.', '山深／闻鹧鸪。')
    ],
    spokenText: '菩萨蛮书江西造口壁，辛弃疾，宋代。郁孤台下清江水，中间多少行人泪？西北望长安，可怜无数山。青山遮不住，毕竟东流去。江晚正愁余，山深闻鹧鸪。',
    translation: '郁孤台下的滔滔清江水，江水中流淌着当年逃难百姓的多少血泪？向着西北方向眺望故都汴京长安，可惜被重重叠叠的无数青山遮挡。但崇山峻岭也遮挡不住江水，它终究要向东奔腾流入大海。傍晚江边更添我满怀愁绪，深山密林深处传来了鹧鸪鸟凄婉的啼鸣。',
    appreciation: '“青山遮不住，毕竟东流去”表达了历史大势不可阻挡的坚定信念。',
    keywords: [{ word: '长安', explain: '借指故都汴京。' }, { word: '鹧鸪', explain: '鸣叫声似“行不得也哥哥”。' }]
  },
  {
    id: 'jin-ling-jiu-si-liu-bie',
    title: '金陵酒肆留别',
    titlePinyin: 'jīn líng jiǔ sì liú bié',
    author: '李白',
    dynasty: '唐代',
    grade: '六下',
    gradeFull: '六年级下册',
    theme: '真挚情谊',
    themeColor: '#0891b2',
    tags: ['吴姬压酒劝客尝', '别意与之谁短长'],
    famousQuote: '请君试问东流水，别意与之谁短长？',
    lines: [
      makeLine('风吹柳花满店香，', 'fēng chuī liǔ huā mǎn diàn xiāng,', '风吹柳花／满店香，'),
      makeLine('吴姬压酒劝客尝。', 'wú jī yā jiǔ quàn kè cháng.', '吴姬压酒／劝客尝。'),
      makeLine('金陵子弟来相送，', 'jīn líng zǐ dì lái xiāng sòng,', '金陵子弟／来相送，'),
      makeLine('欲行不行各尽觞。', 'yù xíng bù xíng gè jìn shāng.', '欲行不行／各尽觞。'),
      makeLine('请君试问东流水，', 'qǐng jūn shì wèn dōng liú shuǐ,', '请君试问／东流水，'),
      makeLine('别意与之谁短长？', 'bié yì yǔ zhī shuí duǎn cháng?', '别意与之／谁短长？')
    ],
    spokenText: '金陵酒肆留别，李白，唐代。风吹柳花满店香，吴姬压酒劝客尝。金陵子弟来相送，欲行不行各尽觞。请君试问东流水，别意与之谁短长？',
    translation: '春风吹拂着柳絮飘进酒店满室生香，吴地江南侍女压榨新酒劝客人品尝。金陵城里的年轻朋友们都赶来为我饯行，临别之际欲行依恋各自干了一杯又一杯。请朋友们试问那一江向东奔流的江水，深厚的离别情意比这江水究竟哪个更长？',
    appreciation: '以滚滚东流的长江水比喻滔滔不绝的离情别绪，奔放豪迈。',
    keywords: [{ word: '压酒', explain: '用压榨法漉去酒糟。' }, { word: '觞', explain: '酒杯。' }]
  }
];
