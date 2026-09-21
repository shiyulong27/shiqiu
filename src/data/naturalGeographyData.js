/**
 * src/data/naturalGeographyData.js
 * 华夏自然地理骨架与世界地理大全景数据库
 * 涵盖：
 * 1. 中国地形三级阶梯（海拔、范围、山脉界线与水能水汽影响）
 * 2. 七大主要走向山脉骨架（东西、东北-西南、弧形巨脉）
 * 3. 长江与黄河两大母亲河全流域水文生态长卷（全程节点、峡谷、平原与入海口）
 * 4. 两大核心分界线（秦岭-淮河十大维度差异、胡焕庸线人口自然密码）
 * 5. 五大奇异地质地貌成因与实景图鉴（喀斯特、丹霞、雅丹、黄土、冰川）
 * 6. 世界地理大版图（七大洲四大洋、地球极端地貌之最）
 */

export const naturalGeographyData = {
  meta: {
    title: "华夏山川与世界自然地理大画卷",
    subtitle: "从青藏高原三级阶梯到大江大河，从秦岭淮河分水岭到七大洲四大洋极值奥秘",
    heroImage: "/images/geography/qinghai-tibet-plateau.webp"
  },

  // 1. 中国地势三级阶梯
  terrainSteps: {
    intro: "中国地势呈现西高东低、呈三级阶梯状逐级下降的宏大格局。这种地势让海洋暖湿气流顺畅深入内陆带来丰沛降雨，使大江大河向东奔流沟通东西交通，并在阶梯交界处形成举世无双的巨大落差水能资源！",
    steps: [
      {
        step: 1,
        name: "第一级阶梯（世界屋脊）",
        altitude: "平均海拔 4000 米以上",
        terrainTypes: "高原、雪山冰川、高寒草甸与荒漠",
        coreRegions: "青藏高原（中国最大、世界最高高原）、柴达木盆地（“聚宝盆”）",
        mountains: ["昆仑山脉", "阿尔金山脉", "祁连山脉", "唐古拉山脉", "喜马拉雅山脉", "冈底斯山脉"],
        waterSignificance: "中华水塔、亚洲水塔！巨厚的雪山与高原现代冰川是长江、黄河、澜沧江、怒江、雅鲁藏布江、恒河与印度河的共同生命源头。",
        climate: "高原山地气候，日照极其强烈，空气稀薄缺氧，昼夜温差极大，‘一年无四季，一日有四季’。",
        image: "/images/geography/qinghai-tibet-plateau.webp",
        imageCaption: "巍峨的青藏高原雪峰与高山海子"
      },
      {
        step: 2,
        name: "第二级阶梯（高原盆地错落）",
        altitude: "海拔 1000 ~ 2000 米",
        terrainTypes: "三大高原、三大盆地广阔交织",
        coreRegions: "内蒙古高原（平坦草场）、黄土高原（千沟万壑水土流失）、云贵高原（喀斯特地貌崎岖）、塔里木盆地（中国最大沙漠盆地）、准噶尔盆地、四川盆地（紫色盆地·天府之国）",
        mountains: ["阴山山脉", "贺兰山", "秦岭", "大巴山", "巫山", "雪峰山"],
        waterSignificance: "阶梯内河流深切峡谷，如金沙江虎跳峡、黄河晋陕大峡谷与壶口瀑布，水流湍急水能激增。",
        climate: "温带大陆性气候与亚热带季风气候交替，垂直自然带分布明显。",
        image: "/images/geography/loess-plateau.webp",
        imageCaption: "千沟万壑又经水土治理焕发绿意的黄土高原"
      },
      {
        step: 3,
        name: "第三级阶梯（平原粮仓与丘陵水乡）",
        altitude: "海拔 500 米以下",
        terrainTypes: "三大平原、丘陵低山、河网密布与广袤海岸线",
        coreRegions: "东北平原（中国最大平原·肥沃黑土）、华北平原（黄淮海冲积平原·粮仓）、长江中下游平原（鱼米之乡）、东南丘陵（江南丘陵/浙闽丘陵/两广丘陵）",
        mountains: ["长白山脉", "山东丘陵", "武夷山脉", "台湾山脉（最高峰玉山3952米）"],
        waterSignificance: "江阔水深，泥沙沉积形成三角洲与沃土，内河航运通江达海，养育了中国绝大部分人口与现代都市群。",
        climate: "温带季风与亚热带季风气候，雨热同期，最适宜农业耕作。",
        image: "/images/geography/three-gorges.webp",
        imageCaption: "长江三峡出峡口向长江中下游平原的壮阔过渡"
      }
    ],
    boundaries: [
      {
        name: "第一与第二阶梯界线",
        line: "昆仑山脉 — 祁连山脉 — 横断山脉",
        desc: "自西北向东南横亘数千公里，从雪域冰峰断崖式切入中级高原与荒漠盆地。"
      },
      {
        name: "第二与第三阶梯界线",
        line: "大兴安岭 — 太行山脉 — 巫山 — 雪峰山",
        desc: "贯穿中国南北腹地的天然屏障，西侧为高峻台地与盆地，东侧为一马平川的丰饶平原。"
      }
    ]
  },

  // 2. 中国七大主要山脉骨架
  mountainFramework: [
    {
      direction: "东西走向山脉",
      color: "#ef4444",
      items: [
        { name: "天山 — 阴山", desc: "横贯新疆中部与内蒙古中部，天山将新疆划分为南疆（塔里木）与北疆（准噶尔）。" },
        { name: "昆仑山 — 秦岭", desc: "华夏中央造山带，秦岭被尊为‘中华父亲山’，阻挡冬季北风与夏季南湿，成为天然南北气候屏障。" },
        { name: "南岭", desc: "湖南、江西与广东、广西交界，长江水系与珠江水系的分水岭，五岭逶迤腾细浪。" }
      ]
    },
    {
      direction: "东北 — 西南走向山脉",
      color: "#0284c7",
      items: [
        { name: "大兴安岭 — 太行山 — 巫山 — 雪峰山", desc: "第二、三级阶梯分界骨架；太行山分割黄土高原与华北平原，巫山被长江切穿形成壮丽巫峡。" },
        { name: "长白山 — 武夷山", desc: "东部山系，长白山天池为中朝界湖与休眠火山；武夷山为丹霞与世界双重遗产名山。" },
        { name: "台湾山脉", desc: "环太平洋火山地震带隆起山脉，主峰玉山海拔 3952 米，为中国东部最高峰。" }
      ]
    },
    {
      direction: "弧形与西北走向巨脉",
      color: "#10b981",
      items: [
        { name: "喜马拉雅山脉", desc: "印度板块与欧亚板块剧烈碰撞挤压形成，主峰珠穆朗玛峰（8848.86米）每年仍在微小隆升。" },
        { name: "阿尔泰山脉", desc: "中国新疆北部与哈萨克斯坦、俄罗斯、蒙古交界，黄金与原始针叶林王国。" }
      ]
    }
  ],

  // 3. 长江与黄河两大母亲河全流域水文长卷
  rivers: {
    yangtze: {
      name: "长江",
      length: "6300 公里",
      basinArea: "约 180 万平方公里（占中国国土 18.8%）",
      role: "世界第三长河 · 亚洲第一大河 · 黄金水道",
      vitalFact: "长江年径流量达 9600 亿立方米，占全国河流总径流量三分之一以上！通航里程超过 2800 公里，是沟通东西水运的黄金动脉。",
      sections: [
        {
          name: "长江源（沱沱河）",
          range: "青藏高原唐古拉山各拉丹冬雪山",
          features: "海拔 6621 米，冰川融水汇聚成高寒辫状水系，清澈冰冽，为万水之源。"
        },
        {
          name: "上游峡谷（通天河与金沙江）",
          range: "青海玉树至四川宜宾",
          features: "切穿横断山脉峡谷，穿过落差巨大的虎跳峡（最窄处仅30米，高差3900米），水流湍急，蕴藏极度充沛水能。"
        },
        {
          name: "天府交汇与长江三峡",
          range: "四川盆地至重庆宜昌",
          features: "汇聚岷江、沱江、嘉陵江、乌江；切穿巫山形成瞿塘峡、巫峡、西陵峡三大险峻峡谷，建有举世瞩目的三峡水利枢纽。"
        },
        {
          name: "中游九曲与湖泊调节",
          range: "湖北宜昌至江西湖口",
          features: "出三峡进入平原，‘万里长江，险在荆江’，河道九曲回肠；洞庭湖与鄱阳湖两大淡水湖调蓄吞吐洪峰。"
        },
        {
          name: "下游江阔与黄金三角洲",
          range: "江西湖口至上海崇明岛入海口",
          features: "江面宽逾数公里，百舸争流；在崇明岛分为南北两支奔流入东海，冲积出中国经济引擎长江三角洲。"
        }
      ]
    },
    yellowRiver: {
      name: "黄河",
      length: "5464 公里",
      basinArea: "约 75 万平方公里",
      role: "世界第五长河 · 中华民族母亲河 · 华夏文明摇篮",
      vitalFact: "世界上泥沙含量最高的河流！历史多年平均输沙量达 16 亿吨，下游大量泥沙淤积形成举世罕见的‘地上悬河’。",
      sections: [
        {
          name: "黄河源（约古宗列）",
          range: "青海巴颜喀拉山北麓约古宗列盆地",
          features: "源头清流宛如珍珠，经扎陵湖与鄂陵湖‘两湖吐一水’，静谧圣洁，水质澄澈。"
        },
        {
          name: "上游峡谷与塞上江南",
          range: "青甘峡谷至宁夏平原/河套平原",
          features: "切穿龙羊峡、刘家峡；在宁夏与内蒙古冲积出宁夏平原与河套平原，水渠纵横，‘黄河百害，唯富一套’。"
        },
        {
          name: "几字形大拐弯（托克托）",
          range: "内蒙古托克托县河口镇",
          features: "黄河在此由向东急转南下，为上中游分界点，正式奔腾切入黄土高原深沟峡谷。"
        },
        {
          name: "中游泥沙与壶口瀑布",
          range: "晋陕大峡谷（山西陕西界河）",
          features: "两岸千沟万壑黄土倾泻入河；在壶口，数百米宽江面骤缩至50米跌入深潭龙槽，金涛雷鸣震撼天地！"
        },
        {
          name: "下游地上悬河与入海",
          range: "河南桃花峪至山东东营入海口",
          features: "出太行山进入华北平原，泥沙沉积使河床高出地面数米；在山东东营填海造陆形成广阔湿地三角洲汇入渤海。"
        }
      ]
    }
  },

  // 4. 两大核心地理分水岭与分界线
  coreDividingLines: {
    qinlingHuaihe: {
      id: "qinling-huaihe",
      name: "秦岭 — 淮河一线",
      significance: "中国南北方最核心的自然地理分界线，一山一水界定华夏气候与人文性格",
      dimensions: [
        { dimension: "1月平均气温", label: "1月平均气温", north: "0℃ 以下（冬季普遍寒冷结冰）", south: "0℃ 以上（冬季温暖不冻）" },
        { dimension: "年等降水量", label: "年等降水量", north: "800 毫米以下", south: "800 毫米以上" },
        { dimension: "干湿地区", label: "干湿地区", north: "半湿润区", south: "湿润区" },
        { dimension: "温度带", label: "温度带", north: "暖温带", south: "亚热带" },
        { dimension: "河流结冰期", label: "河流结冰期", north: "冬季河流普遍结冰", south: "冬季河流终年不冻" },
        { dimension: "植被类型", label: "植被类型", north: "温带落叶阔叶林与针阔混交林", south: "亚热带常绿阔叶林" },
        { dimension: "农业耕地类型", label: "农业耕地类型", north: "旱地为主", south: "水田为主" },
        { dimension: "主要粮食作物", label: "主要粮食作物", north: "小麦、玉米、杂粮", south: "水稻（大米）" },
        { dimension: "农作物熟制", label: "农作物熟制", north: "两年三熟或一年一熟/两熟", south: "一年两熟至一年三熟" },
        { dimension: "传统交通与民俗", label: "传统交通与民俗", north: "北马（旱路马车，以面食为主）", south: "南船（水网舟楫，以米饭为主）" }
      ]
    },
    huLine: {
      id: "huhuanyong-line",
      name: "胡焕庸线（黑河 — 腾冲线）",
      significance: "中国地理学家胡焕庸于 1935 年发现的惊人中国人口地理分界线",
      naturalCause: "这一线与中国 400 毫米年等降水量线、地势二三级阶梯向西过渡线、半干旱与半湿润气候区高度吻合，深刻揭示了水资源、地形地貌与现代人类定居发展的不可动摇的自然密码。"
    }
  },

  // 5. 五大奇异地质地貌成因与实景
  landformFeatures: [
    {
      id: "karst",
      name: "喀斯特地貌 (Karst)",
      representative: "广西桂林漓江 / 云南石林 / 重庆武隆",
      rockType: "可溶性碳酸盐岩（石灰岩、白云岩）",
      externalForce: "流水化学溶蚀与地下暗河冲刷沉淀",
      mechanics: "水流中溶解的二氧化碳与石灰岩发生化学反应，千百万年持续侵蚀，地上形成拔地而起的奇峰峰林，地下雕琢出深邃壮丽的钟乳石溶洞与天坑。",
      image: "/images/geography/karst-guilin.webp"
    },
    {
      id: "danxia",
      name: "丹霞地貌 (Danxia)",
      representative: "甘肃张掖七彩丹霞 / 广东丹霞山 / 福建武夷山",
      rockType: "陆相红色砂岩与砾岩",
      externalForce: "地壳隆升、流水深切侵蚀与风化剥落",
      mechanics: "红色砂砾岩层在漫长地质历史中，经地壳抬升断裂，受暴雨流水沿节理下切侵蚀，形成‘色如渥丹，灿若明霞’的赤壁丹崖、方山与石峰。",
      image: "/images/geography/danxia-rainbow.webp"
    },
    {
      id: "yardang",
      name: "雅丹地貌 (Yardang)",
      representative: "柴达木水上雅丹 / 新疆克拉玛依魔鬼城",
      rockType: "干涸湖相沉积泥岩与粉砂岩",
      externalForce: "暴雨洪流下切裂隙 + 常年强劲风力吹蚀",
      mechanics: "极端干旱少雨环境下，暴雨山洪先冲刷出干涸土层裂缝，随后常年极强劲的大风顺着裂隙持续吹蚀雕琢，形成平行垄脊、风蚀蘑菇与城堡残丘，风声如啸故称‘魔鬼城’。",
      image: "/images/geography/yardang-ghost-city.webp"
    },
    {
      id: "loess",
      name: "黄土地貌 (Loess)",
      representative: "黄土高原晋陕峡谷 / 延安与定西梁峁",
      rockType: "第四纪风力吹蚀堆积的深厚黄土层",
      externalForce: "冬季风搬运沉积 + 暴雨水土流失切割",
      mechanics: "数百万年来内亚荒漠沙尘被西北季风吹扬并阻挡沉积于太行山与秦岭前，形成数百米厚的黄土层；后经夏季暴雨无情冲刷侵蚀，形成塬、梁、峁、千沟万壑的独特景观。",
      image: "/images/geography/loess-plateau.webp"
    },
    {
      id: "glacier",
      name: "现代冰川地貌 (Glacier)",
      representative: "西藏喜马拉雅山脉绒布冰川 / 贡嘎山海螺沟",
      rockType: "高山坚硬变质岩与结晶花岗岩",
      externalForce: "重力下滑挤压刨蚀 + 冻融物理风化",
      mechanics: "高寒终年积雪经重压重结晶形成巨厚冰川冰，在重力驱动下沿山谷如巨型推土机缓慢下滑刨蚀，雕琢出如金字塔般陡峭尖锐的角峰、宽阔U形谷与巨大的冰塔林冰碛物。",
      image: "/images/geography/everest-peak.webp"
    }
  ],

  // 6. 世界地理大版图与地球极端之最
  worldGeography: {
    continents: [
      { name: "亚洲 (Asia)", area: "4458 万平方公里", feature: "世界第一大洲，地形中部高四周低，世界最高峰珠穆朗玛峰与陆地最低点死海均在此。" },
      { name: "非洲 (Africa)", area: "3037 万平方公里", feature: "热带大陆、高原大陆，拥有世界最大沙漠撒哈拉沙漠与最长河流尼罗河、东非大裂谷。" },
      { name: "北美洲 (North America)", area: "2471 万平方公里", feature: "三大地形纵列：西部落基山脉、中部大平原、东部阿巴拉契亚山，五大湖淡水汇聚。" },
      { name: "南美洲 (South America)", area: "1784 万平方公里", feature: "西部为世界最长山脉安第斯山脉，中部拥有世界流量最大、流域最广的亚马逊河与雨林。" },
      { name: "南极洲 (Antarctica)", area: "1424 万平方公里", feature: "世界第七大洲，冰雪高原，平均气温极低，地球 90% 冰雪淡水在此封存。" },
      { name: "欧洲 (Europe)", area: "1018 万平方公里", feature: "平均海拔最低大洲，平原辽阔，海岸线曲折，受北大西洋暖风滋润温和湿润。" },
      { name: "大洋洲 (Oceania)", area: "897 万平方公里", feature: "面积最小大洲，古老大陆与无数岛礁，拥有鸭嘴兽、袋鼠等独特远古有袋类与单孔类。" }
    ],
    oceans: [
      { name: "太平洋 (Pacific Ocean)", area: "约 1.8 亿平方公里", feature: "面积最大、最深大洋（占全球海洋近一半），马里亚纳海沟挑战者深渊达 11034 米。" },
      { name: "大西洋 (Atlantic Ocean)", area: "约 9166 万平方公里", feature: "呈 S 型轮廓，沟通南北极，航运最为繁忙，拥有壮丽的洋底大西洋大洋中脊。" },
      { name: "印度洋 (Indian Ocean)", area: "约 7056 万平方公里", feature: "世界第三大洋，季风洋流显著（冬逆夏顺），是波斯湾石油运输与海上丝路咽喉。" },
      { name: "北冰洋 (Arctic Ocean)", area: "约 1478 万平方公里", feature: "面积最小、最浅、最寒冷大洋，终年被白雪海冰覆盖，北极熊的家园。" }
    ],
    earthExtremes: [
      {
        title: "马里亚纳海沟 (Mariana Trench)",
        record: "地球表面最深点",
        location: "西太平洋底马里亚纳群岛东侧",
        description: "最深点挑战者深渊深达 11034 米！如果把珠穆朗玛峰放进马里亚纳海沟，峰顶距离海面还有 2000 多米深，底部压强超过 1100 个大气压！",
        image: "/images/geography/mariana-trench.webp"
      },
      {
        title: "贝加尔湖 (Lake Baikal)",
        record: "世界最深·蓄水最大淡水湖",
        location: "俄罗斯东西伯利亚南部裂谷盆地",
        description: "最大水深达 1642 米，蓄水量达 2.36 万立方千米，蕴藏了全球地表流动不结冰淡水总量的 20%！水质极度澄澈，透明度可达 40 米。",
        image: "/images/geography/baikal-lake.webp"
      },
      {
        title: "亚马逊热带雨林 (Amazon Rainforest)",
        record: "世界最大热带雨林·地球之肺",
        location: "南美洲北部亚马逊盆地",
        description: "面积达 550 万平方公里，横跨 9 个国家；生存着地球已知十分之一的物种，产生全球极其关键的氧气与降水调节循环。",
        image: "/images/geography/amazon-river.webp"
      },
      {
        title: "撒哈拉大沙漠 (Sahara Desert)",
        record: "世界最大热沙漠",
        location: "非洲北部横贯大西洋至红海",
        description: "面积约 920 万平方公里，几乎与中国国土相当！沙丘高耸，干旱酷热，昼夜地表温差可达 50℃！",
        image: "/images/geography/sahara-desert.webp"
      },
      {
        title: "珠穆朗玛峰 (Mount Everest)",
        record: "地球最高峰·世界之巅",
        location: "中国西藏与尼泊尔交界喜马拉雅山脉",
        description: "最新测定高程为 8848.86 米！终年积雪狂风呼啸，气压仅有海平面的三分之一，印度洋板块与欧亚板块碰撞使其仍在缓慢抬升。",
        image: "/images/geography/everest-peak.webp"
      }
    ]
  }
};

// 向后兼容别名
naturalGeographyData.greatRivers = naturalGeographyData.rivers;
naturalGeographyData.specialLandforms = naturalGeographyData.landformFeatures;
naturalGeographyData.worldGeography.sevenContinents = naturalGeographyData.worldGeography.continents;
naturalGeographyData.worldGeography.fourOceans = naturalGeographyData.worldGeography.oceans;
naturalGeographyData.worldGeography.worldExtremes = naturalGeographyData.worldGeography.earthExtremes;
