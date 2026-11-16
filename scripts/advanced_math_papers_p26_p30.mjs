// 一年级上册数学进阶提优 · 第 26 ~ 30 套 (全量高品质图文可视化插图版)
export const papers26to30 = [
  {
    "id": 26,
    "unit": "第三单元：1~5的认识与加减",
    "title": "第 26 套：【进阶】不等式极值与逆向减法思维卷",
    "tag": "奥数思维",
    "tagColor": "bg-rose-100 text-rose-800",
    "desc": "不等式最大能填几、算式与未知数极值、逆向还原运算与思维进阶。",
    "timeLimit": 25,
    "sections": [
      {
        "num": "一",
        "title": "极值算式连连看：口算极限值，连一连。",
        "score": 12,
        "type": "matching",
        "tip": "方框只填0到10的整数；相同答案的卡片可互换。",
        "pairs": [
          {
            "target": "m26-1",
            "label": "① [ ] < 4 里最大填几 🔢",
            "emoji": "4️⃣",
            "answer": "ma26-1",
            "char": "3",
            "pinyin": "sān"
          },
          {
            "target": "m26-2",
            "label": "② [ ] + 1 < 5 里最大填几 ➕",
            "emoji": "5️⃣",
            "answer": "ma26-2",
            "char": "3",
            "pinyin": "sān"
          },
          {
            "target": "m26-3",
            "label": "③ 5 - [ ] > 3 里最大填几 ➖",
            "emoji": "3️⃣",
            "answer": "ma26-3",
            "char": "1",
            "pinyin": "yī"
          },
          {
            "target": "m26-4",
            "label": "④ [ ] > 2 (小于5)里最小填几 ⬆️",
            "emoji": "2️⃣",
            "answer": "ma26-4",
            "char": "3",
            "pinyin": "sān"
          },
          {
            "target": "m26-5",
            "label": "⑤ 2 + [ ] = 4 里填几 🤝",
            "emoji": "🤝",
            "answer": "ma26-5",
            "char": "2",
            "pinyin": "èr"
          },
          {
            "target": "m26-6",
            "label": "⑥ 5 - [ ] = 0 里填几 🎯",
            "emoji": "🎯",
            "answer": "ma26-6",
            "char": "5",
            "pinyin": "wǔ"
          }
        ],
        "shuffledAnswers": [
          "ma26-2",
          "ma26-4",
          "ma26-1",
          "ma26-6",
          "ma26-3",
          "ma26-5"
        ]
      },
      {
        "num": "二",
        "title": "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        "score": 8,
        "type": "choice",
        "items": [
          {
            "qid": "M26-2-1",
            "prompt": "5 - 1 ○ 2 + 2，○里填什么符号？",
            "title": "算式两边比大小",
            "tip": "5-1=4，2+2=4，两边相等填等于号（=）。",
            "options": [
              {
                "text": "=",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">5 - 1 ○ 2 + 2</span></div>"
          },
          {
            "qid": "M26-2-2",
            "prompt": "4 - 0 ○ 3 + 1，○里填什么符号？",
            "title": "0的算式比大小",
            "tip": "4-0=4，3+1=4，4 = 4。",
            "options": [
              {
                "text": "=",
                "correct": true
              },
              {
                "text": "<",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">4 - 0 ○ 3 + 1</span></div>"
          },
          {
            "qid": "M26-2-3",
            "prompt": "5 - 3 ○ 1 + 2，○里填什么符号？",
            "title": "加减混合比大小",
            "tip": "5-3=2，1+2=3，2 < 3，填小于号。",
            "options": [
              {
                "text": "<",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">5 - 3 ○ 1 + 2</span></div>"
          },
          {
            "qid": "M26-2-4",
            "prompt": "3 + 2 ○ 5 - 1，○里填什么符号？",
            "title": "算式结果比大小",
            "tip": "3+2=5，5-1=4，5 > 4，填大于号。",
            "options": [
              {
                "text": ">",
                "correct": true
              },
              {
                "text": "<",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">3 + 2 ○ 5 - 1</span></div>"
          }
        ]
      },
      {
        "num": "三",
        "title": "不等式最大能填几：做思维小能手。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M26-3-1",
            "prompt": "方框内只填0到20的整数。【极值陷阱】[ ] < 3，方框里最大能填几？",
            "title": "小于号最大能填",
            "tip": "比3小的自然数有0、1、2，其中最大的是 2！",
            "options": [
              {
                "text": "2",
                "correct": true
              },
              {
                "text": "3",
                "correct": false
              },
              {
                "text": "1",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">方框内只填0到20的整数</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">[ ] &lt; 3</span></div>"
          },
          {
            "qid": "M26-3-2",
            "prompt": "方框内只填0到20的整数。【算式极值】2 + [ ] < 5，方框里最大能填几？",
            "title": "加法不等式极值",
            "tip": "2+0=2<5, 2+1=3<5, 2+2=4<5, 2+3=5(不小于5)。所以最大填 2！",
            "options": [
              {
                "text": "2",
                "correct": true
              },
              {
                "text": "3",
                "correct": false
              },
              {
                "text": "1",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">方框内只填0到20的整数</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">2 + [ ] &lt; 5</span></div>"
          },
          {
            "qid": "M26-3-3",
            "prompt": "方框内只填0到20的整数。【减法极值】5 - [ ] > 2，方框里最大能填几？",
            "title": "减法不等式最大能填",
            "tip": "5-0=5>2, 5-1=4>2, 5-2=3>2, 5-3=2(不大于2)。所以最大填 2！",
            "options": [
              {
                "text": "2",
                "correct": true
              },
              {
                "text": "3",
                "correct": false
              },
              {
                "text": "1",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">方框内只填0到20的整数</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">5 - [ ] &gt; 2</span></div>"
          },
          {
            "qid": "M26-3-4",
            "prompt": "只填0到10的整数，在3>[ ]中，方框一共可以填几个不同的数？",
            "title": "小于3的自然数个数",
            "tip": "比3小的数有0、1、2，一共有 3 个数！千万别漏掉0！",
            "options": [
              {
                "text": "3 个",
                "correct": true
              },
              {
                "text": "2 个",
                "correct": false
              },
              {
                "text": "4 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">0、1、2、3、4、5、6、7、8、9、10</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">3 &gt; [ ]</span></div>"
          }
        ]
      },
      {
        "num": "四",
        "title": "逆向还原与代换思维：解开数字谜题。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M26-4-1",
            "prompt": "【逆向倒推】树上原来有一群小鸟，飞走了 2 只，还剩下 3 只。树上原来有几只小鸟？",
            "title": "求原来有多少",
            "tip": "求原来用加法：飞走的2只 + 剩下的3只 = 5 只！",
            "options": [
              {
                "text": "5 只",
                "correct": true
              },
              {
                "text": "1 只",
                "correct": false
              },
              {
                "text": "4 只",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">树上原来有一群小鸟</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">飞走了 2 只</span></div>"
          },
          {
            "qid": "M26-4-2",
            "prompt": "妈妈买回一袋苹果，乐乐吃了 2 个后，剩下的比吃掉的还多 1 个。妈妈原来买了几个苹果？",
            "title": "两步推断苹果总数",
            "tip": "乐乐吃了2个，剩下的比2个多1个即3个，原来有 2 + 3 = 5 个苹果！",
            "options": [
              {
                "text": "5 个",
                "correct": true
              },
              {
                "text": "4 个",
                "correct": false
              },
              {
                "text": "3 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">妈妈买回一袋苹果</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐吃了 2 个后</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">剩下的比吃掉的还多 1 个</span></div>"
          },
          {
            "qid": "M26-4-3",
            "prompt": "已知：○ + ○ = 4，那么 ○ 表示数字几？",
            "title": "相同数相加代换",
            "tip": "2 + 2 = 4，所以 ○ = 2！",
            "options": [
              {
                "text": "2",
                "correct": true
              },
              {
                "text": "4",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">○ + ○ = 4</span></div>"
          },
          {
            "qid": "M26-4-4",
            "prompt": "已知：○ + △ = 5，且 ○ = 2，那么 △ 表示数字几？",
            "title": "等量代换求另一数",
            "tip": "把○=2代入：2 + △ = 5，△ = 5 - 2 = 3！",
            "options": [
              {
                "text": "3",
                "correct": true
              },
              {
                "text": "2",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">○ + △ = 5</span></div>"
          }
        ]
      },
      {
        "num": "五",
        "title": "基数序数综合拓展：排队与摘果子。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M26-5-1",
            "prompt": "5只小猴摘桃子，从前往后数，第1只摘了1个，第2只摘了2个，第3只摘了0个。前3只小猴一共摘了几个桃子？",
            "title": "序数对应数量累加",
            "tip": "1 + 2 + 0 = 3 个桃子！",
            "options": [
              {
                "text": "3 个",
                "correct": true
              },
              {
                "text": "6 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">5只小猴摘桃子</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从前往后数</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">第1只摘了1个</span></div>"
          },
          {
            "qid": "M26-5-2",
            "prompt": "盘子里原来有 5 块蛋糕，小红吃了 1 块，小明吃了 2 块，还剩几块？",
            "title": "连减生活实际",
            "tip": "5 - 1 - 2 = 2 块蛋糕。",
            "options": [
              {
                "text": "2 块",
                "correct": true
              },
              {
                "text": "3 块",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">盘子里原来有 5 块蛋糕</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红吃了 1 块</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明吃了 2 块</span></div>"
          },
          {
            "qid": "M26-5-3",
            "prompt": "从右往左数，小明排第 2，小红排第 5。小明和小红之间隔了几个人？",
            "title": "逆序两数之间",
            "tip": "在第2和第5之间有第3、4，共 2 个人！（算式：5 - 2 - 1 = 2 人）",
            "options": [
              {
                "text": "2 人",
                "correct": true
              },
              {
                "text": "3 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从右往左数</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明排第 2</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红排第 5</span></div>"
          }
        ]
      },
      {
        "num": "六",
        "title": "移多补少与两边平衡思维题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M26-6-1",
            "prompt": "左边盘子里有 5 个草莓，右边盘子里有 1 个草莓。从左边拿几个草莓到右边，两盘草莓就同样多？",
            "title": "移多补少极高频奥数",
            "tip": "总数是 5+1=6 个，同样多时每盘 3 个。5 - 3 = 2 个，拿 2 个到右边！",
            "options": [
              {
                "text": "拿 2 个",
                "correct": true
              },
              {
                "text": "拿 4 个",
                "correct": false
              },
              {
                "text": "拿 1 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">左边盘子里有 5 个草莓</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">右边盘子里有 1 个草莓</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从左边拿几个草莓到右边</span></div>"
          },
          {
            "qid": "M26-6-2",
            "prompt": "哥哥有 4 张画片，给弟弟 1 张后，两人的画片同样多。弟弟原来有几张画片？",
            "title": "逆推弟弟原来数量",
            "tip": "哥哥给1张后剩 4-1=3 张，此时弟弟也是3张。说明弟弟原来有 3 - 1 = 2 张！",
            "options": [
              {
                "text": "2 张",
                "correct": true
              },
              {
                "text": "3 张",
                "correct": false
              },
              {
                "text": "1 张",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">哥哥有 4 张画片</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">给弟弟 1 张后</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两人的画片同样多</span></div>"
          },
          {
            "qid": "M26-6-3",
            "prompt": "两只小兔一共有 5 根胡萝卜，大兔比小兔多 1 根。大兔有几根？小兔有几根？",
            "title": "和差问题启蒙",
            "tip": "大兔3根，小兔2根，3+2=5，且3比2多1根！",
            "options": [
              {
                "text": "大兔 3 根，小兔 2 根",
                "correct": true
              },
              {
                "text": "大兔 4 根，小兔 1 根",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">大兔比小兔多 1 根</span></div>"
          },
          {
            "qid": "M26-6-4",
            "prompt": "不折叠、不叠放，每次只剪（锯）断一处。一根木料锯成 3 段，一共需要锯几次？",
            "title": "锯木头段数与次数",
            "tip": "锯的次数 = 段数 - 1，3 - 1 = 2 次！",
            "options": [
              {
                "text": "2 次",
                "correct": true
              },
              {
                "text": "3 次",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">不折叠、不叠放</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">每次只剪（锯）断一处</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一根木料锯成 3 段</span></div>"
          }
        ]
      },
      {
        "num": "七",
        "title": "生活实际情境与运算解决问题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M26-7-1",
            "prompt": "小红折了 3 只纸鹤，小刚折的和小红同样多。他们两人一共折了多少只纸鹤？",
            "title": "同样多加法",
            "tip": "小刚也是3只，3 + 3 = 6 只。",
            "options": [
              {
                "text": "6 只",
                "correct": true
              },
              {
                "text": "3 只",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红折了 3 只纸鹤</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小刚折的和小红同样多</span></div>"
          },
          {
            "qid": "M26-7-2",
            "prompt": "草地上有 5 只白兔，跑走 1 只，又跑来 1 只，现在草地上有几只白兔？",
            "title": "加减互抵思维",
            "tip": "5 - 1 + 1 = 5 只，数量不变！",
            "options": [
              {
                "text": "5 只",
                "correct": true
              },
              {
                "text": "4 只",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">草地上有 5 只白兔</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">跑走 1 只</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又跑来 1 只</span></div>"
          },
          {
            "qid": "M26-7-3",
            "prompt": "车上原来有 5 人，中途下车 3 人，车上还剩几人？",
            "title": "基础减法生活题",
            "tip": "5 - 3 = 2 人。",
            "options": [
              {
                "text": "2 人",
                "correct": true
              },
              {
                "text": "3 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">车上原来有 5 人</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">中途下车 3 人</span></div>"
          },
          {
            "qid": "M26-7-4",
            "prompt": "乐乐有 1 块橡皮，妈妈又给了他 3 块，乐乐现在有几块橡皮？",
            "title": "基础加法生活题",
            "tip": "1 + 3 = 4 块。",
            "options": [
              {
                "text": "4 块",
                "correct": true
              },
              {
                "text": "3 块",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐有 1 块橡皮</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">妈妈又给了他 3 块</span></div>"
          }
        ]
      },
      {
        "num": "八",
        "title": "综合小挑战：选择正确答案。",
        "score": 12,
        "type": "choice",
        "tip": "独立作答，交卷后统一判分。",
        "items": [
          {
            "qid": "M26-8-1",
            "title": "1. 综合小挑战",
            "prompt": "方框填0到10的整数，□<2，最大填几？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">方框填0到10的整数</span></div>",
            "options": [
              {
                "text": "1",
                "correct": true
              },
              {
                "text": "2",
                "correct": false
              }
            ],
            "tip": "1<2，而2不小于2。"
          },
          {
            "qid": "M26-8-2",
            "title": "2. 综合小挑战",
            "prompt": "3+□=5，方框填几？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">3+□=5</span></div>",
            "options": [
              {
                "text": "2",
                "correct": true
              },
              {
                "text": "3",
                "correct": false
              }
            ],
            "tip": "3+2=5。"
          },
          {
            "qid": "M26-8-3",
            "title": "3. 综合小挑战",
            "prompt": "两人原来各4块糖，从甲移1块给乙，乙比甲多几块？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两人原来各4块糖</span></div>",
            "options": [
              {
                "text": "2 块",
                "correct": true
              },
              {
                "text": "1 块",
                "correct": false
              }
            ],
            "tip": "甲3、乙5，相差2。"
          }
        ]
      }
    ]
  },
  {
    "id": 27,
    "unit": "第四单元：认识图形（一）",
    "title": "第 27 套：【进阶】数隐藏正方体与立体拼搭卷",
    "tag": "思维培优",
    "tagColor": "bg-indigo-100 text-indigo-800",
    "desc": "数遮挡隐藏小正方体（层级支撑原理）、拼成大正方体最少积木数、立体几何拼搭观察。",
    "timeLimit": 25,
    "sections": [
      {
        "num": "一",
        "title": "立体图形特征连连看：按几何性质连线。",
        "score": 12,
        "type": "matching",
        "tip": "正方体6个面一样大，圆柱上下两面是圆",
        "pairs": [
          {
            "target": "m27-1",
            "label": "① 用相同小块无空隙拼实心正方体，每条边至少2块，最少需要",
            "emoji": "🎲",
            "answer": "ma27-1",
            "char": "8个小正方体",
            "pinyin": "bā gè"
          },
          {
            "target": "m27-2",
            "label": "② 6个面都是完全一样的正方形 🧊",
            "emoji": "🧊",
            "answer": "ma27-2",
            "char": "正方体",
            "pinyin": "zhèng fāng tǐ"
          },
          {
            "target": "m27-3",
            "label": "③ 上下两个面是完全相同的圆 🥫",
            "emoji": "🥫",
            "answer": "ma27-3",
            "char": "圆柱",
            "pinyin": "yuán zhù"
          },
          {
            "target": "m27-4",
            "label": "④ 能向任意方向任意滚动的图形 ⚽",
            "emoji": "⚽",
            "answer": "ma27-4",
            "char": "球",
            "pinyin": "qiú"
          },
          {
            "target": "m27-5",
            "label": "⑤ 牙膏盒、文具盒属于 📦",
            "emoji": "📦",
            "answer": "ma27-5",
            "char": "长方体",
            "pinyin": "cháng fāng tǐ"
          },
          {
            "target": "m27-6",
            "label": "⑥ 乒乓球、弹珠属于 🏓",
            "emoji": "🏓",
            "answer": "ma27-6",
            "char": "球",
            "pinyin": "qiú"
          }
        ],
        "shuffledAnswers": [
          "ma27-2",
          "ma27-4",
          "ma27-1",
          "ma27-6",
          "ma27-3",
          "ma27-5"
        ]
      },
      {
        "num": "二",
        "title": "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        "score": 8,
        "type": "choice",
        "items": [
          {
            "qid": "M27-2-1",
            "prompt": "正方体的面数 ○ 长方体的面数，○里填什么符号？",
            "title": "正方体与长方体面数对比",
            "tip": "正方体和长方体都有 6 个面，面数相等，填等于号（=）！",
            "options": [
              {
                "text": "=",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">正方体的面数 ○ 长方体的面数</span></div>"
          },
          {
            "qid": "M27-2-2",
            "prompt": "用同样大小的小正方体无空隙拼成实心图形。每条边至少2块的大正方体最少块数 ○ 用至少2块拼成长方体的最少块数，○里填什么符号？",
            "title": "拼搭所需积木数对比",
            "tip": "8 > 2，大正方体需要8个，填 >。",
            "options": [
              {
                "text": ">",
                "correct": true
              },
              {
                "text": "<",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">用同样大小的小正方体无空隙拼成实心图形。每条边至少2块的大正方体最少块数 ○ 用至少2块拼成长方体的最少块数</span></div>"
          },
          {
            "qid": "M27-2-3",
            "prompt": "圆柱的平面数量 ○ 球的平面数量，○里填什么符号？",
            "title": "圆柱与球面特征",
            "tip": "2 > 0，填大于号。",
            "options": [
              {
                "text": ">",
                "correct": true
              },
              {
                "text": "<",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">圆柱的平面数量 ○ 球的平面数量</span></div>"
          },
          {
            "qid": "M27-2-4",
            "prompt": "6个小正方体积木 ○ 8个小正方体积木，○里填什么符号？",
            "title": "积木数量比大小",
            "tip": "6 < 8，填小于号。",
            "options": [
              {
                "text": "<",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">6个小正方体积木 ○ 8个小正方体积木</span></div>"
          }
        ]
      },
      {
        "num": "三",
        "title": "数隐藏正方体核心奥秘：不漏掉底层支撑。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M27-3-1",
            "prompt": "用同样大小的小正方体搭积木：底层有2排，每排2个，顶层放1个。一共用了几个小正方体？",
            "title": "数遮挡积木",
            "tip": "底层2+2=4个，再加顶层1个，一共5个。",
            "options": [
              {
                "text": "5 个",
                "correct": true
              },
              {
                "text": "4 个",
                "correct": false
              },
              {
                "text": "6 个",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 255\" role=\"img\" aria-label=\"上下层分开显示：上层一个，底层两排每排两个\" style=\"width:100%;max-width:420px\"><title>分层积木示意；上下层分开展示</title><path d=\"M235 10l35 15-35 15-35-15Z M200 25v30l35 15 35-15V25 M235 40v30\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"70\" y=\"55\" font-size=\"16\">上层</text><path d=\"M235 100l35 15-35 15-35-15Z M200 115v30l35 15 35-15V115 M235 130v30\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M270 115l35 15-35 15-35-15Z M235 130v30l35 15 35-15V130 M270 145v30\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M200 115l35 15-35 15-35-15Z M165 130v30l35 15 35-15V130 M200 145v30\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M235 130l35 15-35 15-35-15Z M200 145v30l35 15 35-15V145 M235 160v30\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"70\" y=\"150\" font-size=\"16\">底层</text><text x=\"210\" y=\"235\" text-anchor=\"middle\" font-size=\"14\">上下层分开展示，按题目条件合计</text></svg>"
          },
          {
            "qid": "M27-3-2",
            "prompt": "用同样大小的小正方体无空隙拼成实心大正方体，每条边至少2块。最少需要几个？",
            "title": "拼大正方体最少数量",
            "tip": "一层4个，两层共 4 + 4 = 8 个！用4个只能拼成扁的长方体，绝不是正方体！",
            "options": [
              {
                "text": "8 个",
                "correct": true
              },
              {
                "text": "4 个",
                "correct": false
              },
              {
                "text": "6 个",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"正方体示意，虚线表示隐藏的棱\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>正方体示意，虚线表示隐藏的棱</title><path d=\"M140,50l35,-35h95v95l-35,35H140Z M140,50h95l35,-35 M235,50v95\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M175,15v95h95 M175,110l-35,35\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg>"
          },
          {
            "qid": "M27-3-3",
            "prompt": "用同样大小的小正方体无空隙拼成实心大正方体，每条边至少2块。乐乐已有5个，最少还要添几个？",
            "title": "拼搭缺漏数量",
            "tip": "拼大正方体至少需要8个，8 - 5 = 3 个！至少还要添 3 个！",
            "options": [
              {
                "text": "3 个",
                "correct": true
              },
              {
                "text": "2 个",
                "correct": false
              },
              {
                "text": "4 个",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"正方体示意，虚线表示隐藏的棱\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>正方体示意，虚线表示隐藏的棱</title><path d=\"M140,50l35,-35h95v95l-35,35H140Z M140,50h95l35,-35 M235,50v95\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M175,15v95h95 M175,110l-35,35\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg>"
          },
          {
            "qid": "M27-3-4",
            "prompt": "小正方体面贴面拼接，没有空隙。小红用 2 个完全相同的小正方体拼在一起，拼成了一个什么图形？",
            "title": "2个小正方体拼搭",
            "tip": "2个小正方体拼起来变长了，拼成了一个【长方体】！",
            "options": [
              {
                "text": "长方体",
                "correct": true
              },
              {
                "text": "正方体",
                "correct": false
              },
              {
                "text": "圆柱",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"三种立体形状，分别标为甲乙丙\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>三种立体形状，分别标为甲乙丙</title><path d=\"M18,50l20,-20h55v55l-20,20H18Z M18,50h55l20,-20 M73,50v55\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M38,30v55h55 M38,85l-20,20\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M145 45v65c0 20 80 20 80 0V45\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"185\" cy=\"45\" rx=\"40\" ry=\"13\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><circle cx=\"330\" cy=\"77\" r=\"43\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"330\" cy=\"77\" rx=\"43\" ry=\"13\" fill=\"none\" stroke=\"#94a3b8\"/><text x=\"55\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">甲</text><text x=\"185\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">乙</text><text x=\"330\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">丙</text></svg>"
          }
        ]
      },
      {
        "num": "四",
        "title": "空间立体几何辨析：火眼金睛识特征。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M27-4-1",
            "prompt": "魔方有几个顶点（角）？有几条边（棱）？有几个面？",
            "title": "正方体基本构成",
            "tip": "正方体有 8 个顶点、12 条棱、6 个面！",
            "options": [
              {
                "text": "6 个面、8 个顶点、12 条棱",
                "correct": true
              },
              {
                "text": "4 个面、6 个顶点、8 条棱",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"正方体示意，虚线表示隐藏的棱\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>正方体示意，虚线表示隐藏的棱</title><path d=\"M140,50l35,-35h95v95l-35,35H140Z M140,50h95l35,-35 M235,50v95\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M175,15v95h95 M175,110l-35,35\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg>"
          },
          {
            "qid": "M27-4-2",
            "prompt": "在平整桌面上，圆柱横放时沿垂直于轴线的方向轻推，可以滚动吗？立放时是否容易直接滚动？",
            "title": "圆柱滚动与站立",
            "tip": "横放时曲面接触桌面，可以滚动；立放时平底面接触桌面，不易直接滚动。",
            "options": [
              {
                "text": "横放能滚动，立放不易直接滚动",
                "correct": true
              },
              {
                "text": "立放容易向各个方向滚动",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"三种立体形状，分别标为甲乙丙\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>三种立体形状，分别标为甲乙丙</title><path d=\"M18,50l20,-20h55v55l-20,20H18Z M18,50h55l20,-20 M73,50v55\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M38,30v55h55 M38,85l-20,20\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M145 45v65c0 20 80 20 80 0V45\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"185\" cy=\"45\" rx=\"40\" ry=\"13\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><circle cx=\"330\" cy=\"77\" r=\"43\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"330\" cy=\"77\" rx=\"43\" ry=\"13\" fill=\"none\" stroke=\"#94a3b8\"/><text x=\"55\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">甲</text><text x=\"185\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">乙</text><text x=\"330\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">丙</text></svg>"
          },
          {
            "qid": "M27-4-3",
            "prompt": "把正方体、圆柱和球直接放在平整桌面上，哪种最容易向不同方向滚动？",
            "title": "底座地基稳定性",
            "tip": "球的表面是曲面，可以向不同方向滚动。",
            "options": [
              {
                "text": "球",
                "correct": true
              },
              {
                "text": "正方体",
                "correct": false
              },
              {
                "text": "圆柱",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"三种立体形状，分别标为甲乙丙\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>三种立体形状，分别标为甲乙丙</title><path d=\"M18,50l20,-20h55v55l-20,20H18Z M18,50h55l20,-20 M73,50v55\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M38,30v55h55 M38,85l-20,20\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M145 45v65c0 20 80 20 80 0V45\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"185\" cy=\"45\" rx=\"40\" ry=\"13\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><circle cx=\"330\" cy=\"77\" r=\"43\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"330\" cy=\"77\" rx=\"43\" ry=\"13\" fill=\"none\" stroke=\"#94a3b8\"/><text x=\"55\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">甲</text><text x=\"185\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">乙</text><text x=\"330\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">丙</text></svg>"
          },
          {
            "qid": "M27-4-4",
            "prompt": "易拉罐上下两个底面的圆形，它们的大小关系是？",
            "title": "圆柱底面特征",
            "tip": "圆柱的上下两个底面是完全一模一样大小的圆！",
            "options": [
              {
                "text": "完全一样大",
                "correct": true
              },
              {
                "text": "上面大下面小",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"两个圆形端面与侧面示意\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>两个圆形端面与侧面示意</title><ellipse cx=\"210\" cy=\"33\" rx=\"70\" ry=\"20\" fill=\"white\" stroke=\"#475569\"/><path d=\"M140 33v77 M280 33v77\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"210\" cy=\"110\" rx=\"70\" ry=\"20\" fill=\"white\" stroke=\"#475569\"/></svg>"
          }
        ]
      },
      {
        "num": "五",
        "title": "立体图形计数与实物分类。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M27-5-1",
            "prompt": "下面哪一组物品的外形都近似圆柱？",
            "title": "圆柱生活实物辨识",
            "tip": "圆杆铅笔、电池、易拉罐的外形都可以近似看作圆柱。普通铅笔也可能是六棱柱。",
            "options": [
              {
                "text": "易拉罐、没削过的圆杆铅笔、电池",
                "correct": true
              },
              {
                "text": "足球、魔方、文具盒",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">圆杆铅笔：未削，两端平整</span></div><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"两个圆形端面与侧面示意\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>两个圆形端面与侧面示意</title><ellipse cx=\"210\" cy=\"33\" rx=\"70\" ry=\"20\" fill=\"white\" stroke=\"#475569\"/><path d=\"M140 33v77 M280 33v77\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"210\" cy=\"110\" rx=\"70\" ry=\"20\" fill=\"white\" stroke=\"#475569\"/></svg>"
          },
          {
            "qid": "M27-5-2",
            "prompt": "书包里有 1 个魔方、2 盒牙膏、1 支圆柱形口红和 2 个乒乓球。属于“球”的有几个？",
            "title": "实物分类筛选点数",
            "tip": "只有乒乓球属于球，一共有 2 个！",
            "options": [
              {
                "text": "2 个",
                "correct": true
              },
              {
                "text": "1 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">魔方×1</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">长方体牙膏盒×2</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">圆柱形口红×1</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乒乓球×2</span></div>"
          },
          {
            "qid": "M27-5-3",
            "prompt": "只切掉一个小角，切面不经过其他顶点。一个大正方体木块，锯掉 1 个角，剩下的木块可能剩下几个面？",
            "title": "切角空间思维探索",
            "tip": "切去一个角会多出一个新截面，原来6个面加上新切出的1个面，变成 7 个面！",
            "options": [
              {
                "text": "7 个面",
                "correct": true
              },
              {
                "text": "5 个面",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"正方体示意，虚线表示隐藏的棱\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>正方体示意，虚线表示隐藏的棱</title><path d=\"M140,50l35,-35h95v95l-35,35H140Z M140,50h95l35,-35 M235,50v95\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M175,15v95h95 M175,110l-35,35\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg>"
          }
        ]
      },
      {
        "num": "六",
        "title": "拼搭操作推理与算式综合。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M27-6-1",
            "prompt": "搭一个 3 层的积木宝塔：第1层放1个正方体，第2层放2个，第3层（最底下）放3个。一共用了几个正方体？",
            "title": "层级宝塔累加",
            "tip": "1 + 2 + 3 = 6 个正方体！",
            "options": [
              {
                "text": "6 个",
                "correct": true
              },
              {
                "text": "5 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">搭一个 3 层的积木宝塔：第1层放1个正方体</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">第2层放2个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">第3层（最底下）放3个</span></div>"
          },
          {
            "qid": "M27-6-2",
            "prompt": "所有小正方体大小相同。小刚手里有 6 个小正方体，小红手里有 2 个小正方体。两人合起来，能拼成一个大正方体吗？",
            "title": "拼大正方体达标判断",
            "tip": "6 + 2 = 8 个，正好等于8个，刚好能拼成一个大正方体！",
            "options": [
              {
                "text": "正好能拼成",
                "correct": true
              },
              {
                "text": "不能拼成",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">所有小正方体大小相同</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小刚手里有 6 个小正方体</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红手里有 2 个小正方体</span></div>"
          },
          {
            "qid": "M27-6-3",
            "prompt": "用同样长的小木棒搭一个正方形需要 4 根。如果搭 2 个独立的正方形，一共需要几根小木棒？",
            "title": "独立几何图形边数",
            "tip": "4 + 4 = 8 根木棒！",
            "options": [
              {
                "text": "8 根",
                "correct": true
              },
              {
                "text": "7 根",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"两个彼此分开的正方形，每条边需要一根小棒\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>两个彼此分开的正方形，每条边需要一根小棒</title><rect x=\"65\" y=\"25\" width=\"80\" height=\"80\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><rect x=\"270\" y=\"25\" width=\"80\" height=\"80\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/></svg>"
          },
          {
            "qid": "M27-6-4",
            "prompt": "用同样长的小木棒搭 2 个连在一起的正方形（共用中间一根边），最少需要几根小木棒？",
            "title": "共用边巧算木棒",
            "tip": "4 + 3 = 7 根小木棒！中间共用1根！",
            "options": [
              {
                "text": "7 根",
                "correct": true
              },
              {
                "text": "8 根",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"等长边的小正方形示意\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>等长边的小正方形示意</title><rect x=\"110\" y=\"25\" width=\"80\" height=\"80\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><rect x=\"190\" y=\"25\" width=\"80\" height=\"80\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/></svg>"
          }
        ]
      },
      {
        "num": "七",
        "title": "生活中的图形实际问题应用。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M27-7-1",
            "prompt": "3个粉笔盒都是长方体，每个盒子有6个面。把3个盒子的面分别统计，一共有多少个面？",
            "title": "面数乘倍生活题",
            "tip": "每个盒子6个面，3个盒子共有6+6+6=18个面。",
            "options": [
              {
                "text": "18 个",
                "correct": true
              },
              {
                "text": "12 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">3个粉笔盒都是长方体</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">每个盒子有6个面</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">把3个盒子的面分别统计</span></div>"
          },
          {
            "qid": "M27-7-2",
            "prompt": "乐乐买了4个乒乓球和3个羽毛球，装在同一个盒子里。这两种体育用品一共有几个？",
            "title": "球类总数加法",
            "tip": "4 + 3 = 7 个球。",
            "options": [
              {
                "text": "7 个",
                "correct": true
              },
              {
                "text": "8 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乒乓球：4个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">羽毛球：3个</span></div>"
          },
          {
            "qid": "M27-7-3",
            "prompt": "桌上有 5 块积木，小明拿走 2 块搭小桥，桌上还剩几块积木？",
            "title": "减法实际问题",
            "tip": "5 - 2 = 3 块。",
            "options": [
              {
                "text": "3 块",
                "correct": true
              },
              {
                "text": "2 块",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">桌上有 5 块积木</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明拿走 2 块搭小桥</span></div>"
          },
          {
            "qid": "M27-7-4",
            "prompt": "把4个同样大小的小正方体面贴面、无空隙排成一条直线。拼成的立体是什么形状？",
            "title": "连续排列长方体",
            "tip": "4个小正方体排成一排变成了一个细长的【长方体】！",
            "options": [
              {
                "text": "长方体",
                "correct": true
              },
              {
                "text": "大正方体",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 175\" role=\"img\" aria-label=\"四个同样大小的正方体面贴面沿直线排列\" style=\"width:100%;max-width:420px\"><title>同样大小的小正方体排成一条直线</title><path d=\"M110 20l35 15-35 15-35-15Z M75 35v30l35 15 35-15V35 M110 50v30\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M145 35l35 15-35 15-35-15Z M110 50v30l35 15 35-15V50 M145 65v30\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M180 50l35 15-35 15-35-15Z M145 65v30l35 15 35-15V65 M180 80v30\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M215 65l35 15-35 15-35-15Z M180 80v30l35 15 35-15V80 M215 95v30\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/></svg>"
          }
        ]
      },
      {
        "num": "八",
        "title": "综合小挑战：选择正确答案。",
        "score": 12,
        "type": "choice",
        "tip": "独立作答，交卷后统一判分。",
        "items": [
          {
            "qid": "M27-8-1",
            "title": "1. 综合小挑战",
            "prompt": "正方体的每个面是什么形状？",
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"正方体示意，虚线表示隐藏的棱\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>正方体示意，虚线表示隐藏的棱</title><path d=\"M140,50l35,-35h95v95l-35,35H140Z M140,50h95l35,-35 M235,50v95\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M175,15v95h95 M175,110l-35,35\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg>",
            "options": [
              {
                "text": "正方形",
                "correct": true
              },
              {
                "text": "三角形",
                "correct": false
              }
            ],
            "tip": "正方体的6个面都是正方形。"
          },
          {
            "qid": "M27-8-2",
            "title": "2. 综合小挑战",
            "prompt": "底层4块、上层2块积木，一共几块？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">底层4块、上层2块积木</span></div>",
            "options": [
              {
                "text": "6 块",
                "correct": true
              },
              {
                "text": "5 块",
                "correct": false
              }
            ],
            "tip": "4+2=6。"
          },
          {
            "qid": "M27-8-3",
            "title": "3. 综合小挑战",
            "prompt": "两个分开的正方形，每个用4根棒，一共用几根？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两个分开的正方形</span></div>",
            "options": [
              {
                "text": "8 根",
                "correct": true
              },
              {
                "text": "7 根",
                "correct": false
              }
            ],
            "tip": "4+4=8。"
          }
        ]
      }
    ]
  },
  {
    "id": 28,
    "unit": "第四单元：认识图形（一）",
    "title": "第 28 套：【进阶】滚动物体辨析与空间想象卷",
    "tag": "思维培优",
    "tagColor": "bg-sky-100 text-sky-800",
    "desc": "滚动与平移特征对比、斜坡滚滑物理感知、三视图初步认知与空间折叠想象。",
    "timeLimit": 25,
    "sections": [
      {
        "num": "一",
        "title": "形状辨识连连看：按几何特征连接形状。",
        "score": 12,
        "type": "matching",
        "tip": "同样的形状名称可以出现在多张卡片上，相同答案可互换。",
        "pairs": [
          {
            "target": "m28-1",
            "label": "① 足球、排球的外形近似什么？",
            "emoji": "⚽",
            "answer": "ma28-1",
            "char": "球",
            "pinyin": "qiú"
          },
          {
            "target": "m28-2",
            "label": "② 易拉罐的外形近似什么？",
            "emoji": "🥫",
            "answer": "ma28-2",
            "char": "圆柱",
            "pinyin": "yuán zhù"
          },
          {
            "target": "m28-3",
            "label": "③ 长方形字典、文具盒的外形近似什么？",
            "emoji": "📚",
            "answer": "ma28-3",
            "char": "长方体",
            "pinyin": "cháng fāng tǐ"
          },
          {
            "target": "m28-4",
            "label": "④ 有两个相同圆形底面和一个曲面的形状",
            "emoji": "🛢️",
            "answer": "ma28-4",
            "char": "圆柱",
            "pinyin": "yuán zhù"
          },
          {
            "target": "m28-5",
            "label": "⑤ 六个面都是同样大小正方形的形状",
            "emoji": "🎲",
            "answer": "ma28-5",
            "char": "正方体",
            "pinyin": "zhèng fāng tǐ"
          },
          {
            "target": "m28-6",
            "label": "⑥ 表面是曲面，没有平面的圆球形状",
            "emoji": "🪀",
            "answer": "ma28-6",
            "char": "球",
            "pinyin": "qiú"
          }
        ],
        "shuffledAnswers": [
          "ma28-2",
          "ma28-4",
          "ma28-1",
          "ma28-6",
          "ma28-3",
          "ma28-5"
        ]
      },
      {
        "num": "二",
        "title": "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        "score": 8,
        "type": "choice",
        "items": [
          {
            "qid": "M28-2-1",
            "prompt": "球的平面数量 ○ 长方体的平面数量，○里填什么符号？",
            "title": "立体图形平面数量比较",
            "tip": "球没有平面，长方体有6个平面，0<6。",
            "options": [
              {
                "text": "<",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">球的平面数量 ○ 长方体的平面数量</span></div>"
          },
          {
            "qid": "M28-2-2",
            "prompt": "圆柱的曲面个数 ○ 长方体的曲面个数，○里填什么符号？",
            "title": "曲面数量对比",
            "tip": "1 > 0，填大于号。",
            "options": [
              {
                "text": ">",
                "correct": true
              },
              {
                "text": "<",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">圆柱的曲面个数 ○ 长方体的曲面个数</span></div>"
          },
          {
            "qid": "M28-2-3",
            "prompt": "正方体的棱长全都一样长：左边棱长 ○ 右边棱长，○里填什么符号？",
            "title": "正方体棱长相等",
            "tip": "正方体的12条棱完全一样长，填 =。",
            "options": [
              {
                "text": "=",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">正方体的棱长全都一样长：左边棱长 ○ 右边棱长</span></div>"
          },
          {
            "qid": "M28-2-4",
            "prompt": "把3个同样的圆柱平底相叠。叠起来的总高度 ○ 1个圆柱的高度，○里填什么符号？",
            "title": "高度累加比大小",
            "tip": "3个叠起来肯定比1个高，填 >。",
            "options": [
              {
                "text": ">",
                "correct": true
              },
              {
                "text": "<",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">把3个同样的圆柱平底相叠。叠起来的总高度 ○ 1个圆柱的高度</span></div>"
          }
        ]
      },
      {
        "num": "三",
        "title": "斜坡滚动与物理空间常识。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M28-3-1",
            "prompt": "正方体、圆柱和球，哪一种可以在平整地面上向不同方向滚动？",
            "title": "滚动方向辨析",
            "tip": "球没有平面，可以向不同方向滚动；不能仅凭形状判断谁滚得最快。",
            "options": [
              {
                "text": "球",
                "correct": true
              },
              {
                "text": "圆柱",
                "correct": false
              },
              {
                "text": "正方体",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"三种立体形状，分别标为甲乙丙\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>三种立体形状，分别标为甲乙丙</title><path d=\"M18,50l20,-20h55v55l-20,20H18Z M18,50h55l20,-20 M73,50v55\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M38,30v55h55 M38,85l-20,20\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M145 45v65c0 20 80 20 80 0V45\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"185\" cy=\"45\" rx=\"40\" ry=\"13\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><circle cx=\"330\" cy=\"77\" r=\"43\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"330\" cy=\"77\" rx=\"43\" ry=\"13\" fill=\"none\" stroke=\"#94a3b8\"/><text x=\"55\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">甲</text><text x=\"185\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">乙</text><text x=\"330\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">丙</text></svg>"
          },
          {
            "qid": "M28-3-2",
            "prompt": "修路工人在压路面上铺沥青，压路机前面的大轮子是什么形状的？",
            "title": "圆柱生活工业应用",
            "tip": "压路机的大滚筒是【圆柱】形状，能滚动且接触面平整！",
            "options": [
              {
                "text": "圆柱",
                "correct": true
              },
              {
                "text": "球",
                "correct": false
              },
              {
                "text": "正方体",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"两个圆形端面与侧面示意\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>两个圆形端面与侧面示意</title><ellipse cx=\"210\" cy=\"33\" rx=\"70\" ry=\"20\" fill=\"white\" stroke=\"#475569\"/><path d=\"M140 33v77 M280 33v77\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"210\" cy=\"110\" rx=\"70\" ry=\"20\" fill=\"white\" stroke=\"#475569\"/></svg>"
          },
          {
            "qid": "M28-3-3",
            "prompt": "图中实心圆柱形滚轮的几何形状是什么？",
            "title": "滚轮形状辨识",
            "tip": "这个滚轮有两个同样大小的圆形底面，是圆柱。",
            "options": [
              {
                "text": "圆柱",
                "correct": true
              },
              {
                "text": "球",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"两个圆形端面与侧面示意\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>两个圆形端面与侧面示意</title><ellipse cx=\"210\" cy=\"33\" rx=\"70\" ry=\"20\" fill=\"white\" stroke=\"#475569\"/><path d=\"M140 33v77 M280 33v77\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"210\" cy=\"110\" rx=\"70\" ry=\"20\" fill=\"white\" stroke=\"#475569\"/></svg>"
          },
          {
            "qid": "M28-3-4",
            "prompt": "从一个固定位置直接观察，不借助镜子。把一个正方体放在桌面上，最多能同时看到它的几个面？",
            "title": "视点观察正方体",
            "tip": "从一个固定的斜上方角度看，最多只能同时看到它的 3 个面！",
            "options": [
              {
                "text": "3 个面",
                "correct": true
              },
              {
                "text": "4 个面",
                "correct": false
              },
              {
                "text": "6 个面",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"正方体示意，虚线表示隐藏的棱\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>正方体示意，虚线表示隐藏的棱</title><path d=\"M140,50l35,-35h95v95l-35,35H140Z M140,50h95l35,-35 M235,50v95\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M175,15v95h95 M175,110l-35,35\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg>"
          }
        ]
      },
      {
        "num": "四",
        "title": "图形折叠与组合变换思维。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M28-4-1",
            "prompt": "沿一组对边中线对折，或沿一条对角线对折。一张正方形的白纸，对折一次后，剪开，可以得到两个完全一样的什么图形？",
            "title": "正方形对折剪切",
            "tip": "对折可以得到2个完全一样的长方形，或者沿对角线折得到2个三角形！",
            "options": [
              {
                "text": "长方形或三角形",
                "correct": true
              },
              {
                "text": "圆形",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 150\" role=\"img\" aria-label=\"正方形的两种折线：对边中线与对角线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>正方形的两种折线：对边中线与对角线</title><rect x=\"30\" y=\"25\" width=\"100\" height=\"100\" fill=\"white\" stroke=\"#475569\"/><line x1=\"80\" y1=\"25\" x2=\"80\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><rect x=\"275\" y=\"25\" width=\"100\" height=\"100\" fill=\"white\" stroke=\"#475569\"/><line x1=\"275\" y1=\"25\" x2=\"375\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg>"
          },
          {
            "qid": "M28-4-2",
            "prompt": "3个小正方体面贴面排成一横排，从正对这一排的前面观察。用 3 个同样大小的正方体拼成一个长条，从正面看是什么图形？",
            "title": "正视三视图",
            "tip": "从正面看是由 3 个小正方形并排组成的一个长方形！",
            "options": [
              {
                "text": "长方形",
                "correct": true
              },
              {
                "text": "正方形",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"等长边的小正方形示意\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>等长边的小正方形示意</title><rect x=\"110\" y=\"25\" width=\"80\" height=\"80\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><rect x=\"190\" y=\"25\" width=\"80\" height=\"80\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><rect x=\"270\" y=\"25\" width=\"80\" height=\"80\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/></svg>"
          },
          {
            "qid": "M28-4-3",
            "prompt": "从正面看，球的轮廓是什么图形？",
            "title": "球的轮廓观察",
            "tip": "球从正面看，轮廓是圆形。",
            "options": [
              {
                "text": "圆形",
                "correct": true
              },
              {
                "text": "正方形",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"三种立体形状，分别标为甲乙丙\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>三种立体形状，分别标为甲乙丙</title><path d=\"M18,50l20,-20h55v55l-20,20H18Z M18,50h55l20,-20 M73,50v55\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M38,30v55h55 M38,85l-20,20\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M145 45v65c0 20 80 20 80 0V45\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"185\" cy=\"45\" rx=\"40\" ry=\"13\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><circle cx=\"330\" cy=\"77\" r=\"43\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"330\" cy=\"77\" rx=\"43\" ry=\"13\" fill=\"none\" stroke=\"#94a3b8\"/><text x=\"55\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">甲</text><text x=\"185\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">乙</text><text x=\"330\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">丙</text></svg>"
          },
          {
            "qid": "M28-4-4",
            "prompt": "长方形纸片绕着一条边快速旋转，转出来的是一个什么形体？",
            "title": "长方形旋转体",
            "tip": "长方形绕一边旋转得到【圆柱】！",
            "options": [
              {
                "text": "圆柱",
                "correct": true
              },
              {
                "text": "长方体",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 160\" role=\"img\" aria-label=\"长方形绕一条边所在直线旋转\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>长方形绕一条边所在直线旋转</title><rect x=\"145\" y=\"25\" width=\"110\" height=\"95\" fill=\"white\" stroke=\"#475569\"/><line x1=\"145\" y1=\"12\" x2=\"145\" y2=\"135\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"110\" y=\"77\" text-anchor=\"middle\" font-size=\"14\" fill=\"#334155\">旋转轴</text></svg>"
          }
        ]
      },
      {
        "num": "五",
        "title": "空间分类与观察辨识。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M28-5-1",
            "prompt": "在平整桌面上轻推，①皮球 ②魔方 ③长方体铅笔盒 ④横放的易拉罐，哪组较容易直接滚动？",
            "title": "滚动分类",
            "tip": "皮球和横放的易拉罐能沿曲面滚动；不能把正方体可以翻倒与轻推时直接滚动混为一谈。",
            "options": [
              {
                "text": "① 和 ④",
                "correct": true
              },
              {
                "text": "② 和 ③",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">①皮球</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">②魔方</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">③长方体铅笔盒</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">④横放易拉罐</span></div>"
          },
          {
            "qid": "M28-5-2",
            "prompt": "在平整地面上搭桥墩，下面哪组积木比球更适合作为支柱？",
            "title": "桥墩承重稳定性",
            "tip": "长方体或立放圆柱有平整的底面，比球更适合作支柱；稳固程度也与尺寸和摆放方式有关。",
            "options": [
              {
                "text": "长方体或立放圆柱",
                "correct": true
              },
              {
                "text": "球",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">长方体</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">立放圆柱</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">球</span></div>"
          },
          {
            "qid": "M28-5-3",
            "prompt": "从任何一个方向观察，看到的平面图形都是完全一样的圆形，这个立体图形一定是？",
            "title": "各方向视图全同性",
            "tip": "球从上下左右前后看，全都是一样大的圆！",
            "options": [
              {
                "text": "球",
                "correct": true
              },
              {
                "text": "圆柱",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从任何一个方向观察</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">看到的平面图形都是完全一样的圆形</span></div>"
          }
        ]
      },
      {
        "num": "六",
        "title": "图形拼搭趣味计算题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M28-6-1",
            "prompt": "小红用同样大小的正方体积木搭墙：2层，每层一排4个。这面墙一共用了几个？",
            "title": "行列矩形计数",
            "tip": "4 + 4 = 8 个正方体！",
            "options": [
              {
                "text": "8 个",
                "correct": true
              },
              {
                "text": "6 个",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"两层积木，每层四个，从正面看\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>两层积木，每层四个，从正面看</title><rect x=\"50\" y=\"25\" width=\"80\" height=\"50\" fill=\"white\" stroke=\"#475569\"/><rect x=\"130\" y=\"25\" width=\"80\" height=\"50\" fill=\"white\" stroke=\"#475569\"/><rect x=\"210\" y=\"25\" width=\"80\" height=\"50\" fill=\"white\" stroke=\"#475569\"/><rect x=\"290\" y=\"25\" width=\"80\" height=\"50\" fill=\"white\" stroke=\"#475569\"/><rect x=\"50\" y=\"75\" width=\"80\" height=\"50\" fill=\"white\" stroke=\"#475569\"/><rect x=\"130\" y=\"75\" width=\"80\" height=\"50\" fill=\"white\" stroke=\"#475569\"/><rect x=\"210\" y=\"75\" width=\"80\" height=\"50\" fill=\"white\" stroke=\"#475569\"/><rect x=\"290\" y=\"75\" width=\"80\" height=\"50\" fill=\"white\" stroke=\"#475569\"/></svg>"
          },
          {
            "qid": "M28-6-2",
            "prompt": "从 8 个正方体拼成的大正方体中拿走 1 个角上的小正方体，还剩下几个小正方体？",
            "title": "大正方体减角",
            "tip": "8 - 1 = 7 个小正方体。",
            "options": [
              {
                "text": "7 个",
                "correct": true
              },
              {
                "text": "6 个",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"正方体示意，虚线表示隐藏的棱\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>正方体示意，虚线表示隐藏的棱</title><path d=\"M140,50l35,-35h95v95l-35,35H140Z M140,50h95l35,-35 M235,50v95\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M175,15v95h95 M175,110l-35,35\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg><div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一个实心大正方体</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">每条边2个小块；每层2排，每排2个</span></div>"
          },
          {
            "qid": "M28-6-3",
            "prompt": "把 3 根火柴棒首尾相连，可以围成一个什么图形？",
            "title": "三根火柴拼图形",
            "tip": "3根首尾相接围成一个【三角形】！",
            "options": [
              {
                "text": "三角形",
                "correct": true
              },
              {
                "text": "正方形",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">把 3 根火柴棒首尾相连</span></div>"
          },
          {
            "qid": "M28-6-4",
            "prompt": "把 4 根一样长的小棒首尾相连，围成一个四个角都方方正正的图形，这个图形是？",
            "title": "四根火柴拼正方形",
            "tip": "4根等长小棒围成【正方形】！",
            "options": [
              {
                "text": "正方形",
                "correct": true
              },
              {
                "text": "三角形",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"等长边的小正方形示意\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>等长边的小正方形示意</title><rect x=\"110\" y=\"25\" width=\"80\" height=\"80\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/></svg>"
          }
        ]
      },
      {
        "num": "七",
        "title": "解决生活中的空间数学问题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M28-7-1",
            "prompt": "油桶的形状近似圆柱。把它横放在平整地面上，可以用哪种方式向前移动？",
            "title": "圆柱的移动方式",
            "tip": "圆柱横放后，可以沿地面向前滚动。",
            "options": [
              {
                "text": "滚动",
                "correct": true
              },
              {
                "text": "绕着桶底转圈",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">油桶的形状近似圆柱</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">把它横放在平整地面上</span></div>"
          },
          {
            "qid": "M28-7-2",
            "prompt": "有2排小正方体，每排3个。一共有多少个小正方体？",
            "title": "实物摆放数量加法",
            "tip": "每排3个，2排一共有3+3=6个小正方体。",
            "options": [
              {
                "text": "6 个",
                "correct": true
              },
              {
                "text": "5 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-5 p-3 border border-slate-300 rounded-xl\"><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"第1排\"><span>□</span><span>□</span><span>□</span></div><div class=\"mt-2 text-sm text-slate-700\">第1排</div></div><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"第2排\"><span>□</span><span>□</span><span>□</span></div><div class=\"mt-2 text-sm text-slate-700\">第2排</div></div></div>"
          },
          {
            "qid": "M28-7-3",
            "prompt": "箱子里装了 5 盒牙膏，又放进去 4 盒，箱子里现在有几盒牙膏？",
            "title": "长方体物品累加",
            "tip": "5 + 4 = 9 盒牙膏。",
            "options": [
              {
                "text": "9 盒",
                "correct": true
              },
              {
                "text": "8 盒",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">箱子里装了 5 盒牙膏</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又放进去 4 盒</span></div>"
          },
          {
            "qid": "M28-7-4",
            "prompt": "体育老师拿来 10 个足球，分给一班 4 个，分给二班 5 个，老师手里还剩几个足球？",
            "title": "球体连续分发减法",
            "tip": "10 - 4 - 5 = 1 个足球。",
            "options": [
              {
                "text": "1 个",
                "correct": true
              },
              {
                "text": "2 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">体育老师拿来 10 个足球</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">分给一班 4 个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">分给二班 5 个</span></div>"
          }
        ]
      },
      {
        "num": "八",
        "title": "综合小挑战：选择正确答案。",
        "score": 12,
        "type": "choice",
        "tip": "独立作答，交卷后统一判分。",
        "items": [
          {
            "qid": "M28-8-1",
            "title": "1. 综合小挑战",
            "prompt": "球的表面有几个平面？",
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"三种立体形状，分别标为甲乙丙\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>三种立体形状，分别标为甲乙丙</title><path d=\"M18,50l20,-20h55v55l-20,20H18Z M18,50h55l20,-20 M73,50v55\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M38,30v55h55 M38,85l-20,20\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M145 45v65c0 20 80 20 80 0V45\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"185\" cy=\"45\" rx=\"40\" ry=\"13\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><circle cx=\"330\" cy=\"77\" r=\"43\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"330\" cy=\"77\" rx=\"43\" ry=\"13\" fill=\"none\" stroke=\"#94a3b8\"/><text x=\"55\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">甲</text><text x=\"185\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">乙</text><text x=\"330\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">丙</text></svg>",
            "options": [
              {
                "text": "0 个",
                "correct": true
              },
              {
                "text": "1 个",
                "correct": false
              }
            ],
            "tip": "球的表面是曲面，没有平面。"
          },
          {
            "qid": "M28-8-2",
            "title": "2. 综合小挑战",
            "prompt": "圆柱的两个底面通常是什么图形？",
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"两个圆形端面与侧面示意\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>两个圆形端面与侧面示意</title><ellipse cx=\"210\" cy=\"33\" rx=\"70\" ry=\"20\" fill=\"white\" stroke=\"#475569\"/><path d=\"M140 33v77 M280 33v77\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"210\" cy=\"110\" rx=\"70\" ry=\"20\" fill=\"white\" stroke=\"#475569\"/></svg>",
            "options": [
              {
                "text": "圆形",
                "correct": true
              },
              {
                "text": "三角形",
                "correct": false
              }
            ],
            "tip": "直圆柱的两个底面是同样大小的圆。"
          },
          {
            "qid": "M28-8-3",
            "title": "3. 综合小挑战",
            "prompt": "2层积木，每层3个，一共几个？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">2层积木</span></div>",
            "options": [
              {
                "text": "6 个",
                "correct": true
              },
              {
                "text": "5 个",
                "correct": false
              }
            ],
            "tip": "3+3=6。"
          }
        ]
      }
    ]
  },
  {
    "id": 29,
    "unit": "第五单元：6~10的认识与加减",
    "title": "第 29 套：【进阶】看图列式大括号隐藏条件卷",
    "tag": "思维培优",
    "tagColor": "bg-purple-100 text-purple-800",
    "desc": "大括号与问号位置辨析、划斜线/虚线框减法含义、一图四式算理互逆与隐藏情境提取。",
    "timeLimit": 25,
    "sections": [
      {
        "num": "一",
        "title": "凑十好朋友连连看：口算凑成10，连一连。",
        "score": 12,
        "type": "matching",
        "tip": "一九一九好朋友，二八二八手拉手，三七四六正好凑成十",
        "pairs": [
          {
            "target": "m29-1",
            "label": "① 9 添上几是 10 🤝",
            "emoji": "9️⃣",
            "answer": "ma29-1",
            "char": "1",
            "pinyin": "yī"
          },
          {
            "target": "m29-2",
            "label": "② 8 添上几是 10 🤝",
            "emoji": "8️⃣",
            "answer": "ma29-2",
            "char": "2",
            "pinyin": "èr"
          },
          {
            "target": "m29-3",
            "label": "③ 7 添上几是 10 🤝",
            "emoji": "7️⃣",
            "answer": "ma29-3",
            "char": "3",
            "pinyin": "sān"
          },
          {
            "target": "m29-4",
            "label": "④ 6 添上几是 10 🤝",
            "emoji": "6️⃣",
            "answer": "ma29-4",
            "char": "4",
            "pinyin": "sì"
          },
          {
            "target": "m29-5",
            "label": "⑤ 5 添上几是 10 🤝",
            "emoji": "5️⃣",
            "answer": "ma29-5",
            "char": "5",
            "pinyin": "wǔ"
          },
          {
            "target": "m29-6",
            "label": "⑥ 10 减去几是 0 🤝",
            "emoji": "🔟",
            "answer": "ma29-6",
            "char": "10",
            "pinyin": "shí"
          }
        ],
        "shuffledAnswers": [
          "ma29-2",
          "ma29-4",
          "ma29-1",
          "ma29-6",
          "ma29-3",
          "ma29-5"
        ]
      },
      {
        "num": "二",
        "title": "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        "score": 8,
        "type": "choice",
        "items": [
          {
            "qid": "M29-2-1",
            "prompt": "6 + 4 ○ 7 + 3，○里填什么符号？",
            "title": "凑十算式比大小",
            "tip": "6+4=10，7+3=10，两边相等填 =。",
            "options": [
              {
                "text": "=",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">6 + 4 ○ 7 + 3</span></div>"
          },
          {
            "qid": "M29-2-2",
            "prompt": "10 - 3 ○ 10 - 4，○里填什么符号？",
            "title": "减数大小对差的影响",
            "tip": "减去越小的数剩下的差越大：7 > 6，填大于号（>）！",
            "options": [
              {
                "text": ">",
                "correct": true
              },
              {
                "text": "<",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">10 - 3 ○ 10 - 4</span></div>"
          },
          {
            "qid": "M29-2-3",
            "prompt": "8 - 2 ○ 5 + 2，○里填什么符号？",
            "title": "两边算式比大小",
            "tip": "8-2=6，5+2=7，6 < 7，填小于号。",
            "options": [
              {
                "text": "<",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">8 - 2 ○ 5 + 2</span></div>"
          },
          {
            "qid": "M29-2-4",
            "prompt": "9 - 0 ○ 9 + 0，○里填什么符号？",
            "title": "0的算式结果相等",
            "tip": "9-0=9，9+0=9，相等填 =。",
            "options": [
              {
                "text": "=",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">9 - 0 ○ 9 + 0</span></div>"
          }
        ]
      },
      {
        "num": "三",
        "title": "大括号与问号位置奥秘：看图列式不迷茫。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M29-3-1",
            "prompt": "【极高频考题】看图：左边有 4 朵花，右边有 5 朵花。大括号在下方，问号“？”在大括号正中央。用什么方法计算？",
            "title": "求总数大括号在下",
            "tip": "问号在大括号下方，表示求一共有多少，用【加法】：4 + 5 = 9！",
            "options": [
              {
                "text": "加法：4 + 5 = 9",
                "correct": true
              },
              {
                "text": "减法：9 - 4 = 5",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-5 p-3 border border-slate-300 rounded-xl\"><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"左边\"><span>🌸</span><span>🌸</span><span>🌸</span><span>🌸</span></div><div class=\"mt-2 text-sm text-slate-700\">左边</div></div><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"右边\"><span>🌸</span><span>🌸</span><span>🌸</span><span>🌸</span><span>🌸</span></div><div class=\"mt-2 text-sm text-slate-700\">右边</div></div></div><div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">合起来：？朵</span></div><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 55\" role=\"img\" aria-label=\"大括号合并左右两组，问总数\" style=\"width:100%;max-width:420px\"><path d=\"M25 5v10H195q15 0 15 10q0-10 15-10h170V5\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"20\">？朵</text></svg>"
          },
          {
            "qid": "M29-3-2",
            "prompt": "图中笔筒里外共有10支笔，外面有3支。求笔筒里的数量，应选哪一个减法算式？",
            "title": "求部分问号在上一侧",
            "tip": "已知总数10支，求盒子里藏了几支，用【减法】：10 - 3 = 7 支！",
            "options": [
              {
                "text": "10 - 3 = 7",
                "correct": true
              },
              {
                "text": "10 + 3 = 13",
                "correct": false
              },
              {
                "text": "7 + 3 = 10",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-5 p-3 border border-slate-300 rounded-xl\"><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"笔筒外\"><span>✏️</span><span>✏️</span><span>✏️</span></div><div class=\"mt-2 text-sm text-slate-700\">笔筒外</div></div></div><div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">笔筒内：？支</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">里外一共10支</span></div>"
          },
          {
            "qid": "M29-3-3",
            "prompt": "看图：荷叶上有 7 只青蛙，其中 3 只上面画了斜线“\\”，并有一个向外跳跃的箭头。应该列什么算式？",
            "title": "划线去掉表示减去",
            "tip": "划斜线、虚线圈、跳走飞走都表示去掉，用减法：7 - 3 = 4！",
            "options": [
              {
                "text": "7 - 3 = 4",
                "correct": true
              },
              {
                "text": "7 + 3 = 10",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 125\" role=\"img\" aria-label=\"七只青蛙中后三只划斜线，表示跳走\" style=\"width:100%;max-width:420px\"><title>箭头和斜线表示跳走</title><text x=\"30\" y=\"58\" text-anchor=\"middle\" font-size=\"28\">🐸</text><text x=\"90\" y=\"58\" text-anchor=\"middle\" font-size=\"28\">🐸</text><text x=\"150\" y=\"58\" text-anchor=\"middle\" font-size=\"28\">🐸</text><text x=\"210\" y=\"58\" text-anchor=\"middle\" font-size=\"28\">🐸</text><text x=\"270\" y=\"58\" text-anchor=\"middle\" font-size=\"28\">🐸</text><line x1=\"255\" y1=\"68\" x2=\"285\" y2=\"27\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"330\" y=\"58\" text-anchor=\"middle\" font-size=\"28\">🐸</text><line x1=\"315\" y1=\"68\" x2=\"345\" y2=\"27\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"390\" y=\"58\" text-anchor=\"middle\" font-size=\"28\">🐸</text><line x1=\"375\" y1=\"68\" x2=\"405\" y2=\"27\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M290 80h90l-12-10m12 10-12 10\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"210\" y=\"116\" text-anchor=\"middle\" font-size=\"15\">斜线和箭头表示跳走</text></svg>"
          },
          {
            "qid": "M29-3-4",
            "prompt": "图中左边有3条鱼，右边有4条鱼，共7条。只用3、4、7，每个算式中三个数各用一次，只列加法或减法等式。一共能列几个不同的算式？",
            "title": "看图列加减法算式",
            "tip": "可以写出：3+4=7, 4+3=7, 7-3=4, 7-4=3，一共 4 个算式！",
            "options": [
              {
                "text": "4 个算式",
                "correct": true
              },
              {
                "text": "2 个算式",
                "correct": false
              },
              {
                "text": "1 个算式",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-5 p-3 border border-slate-300 rounded-xl\"><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"左边\"><span>🐟</span><span>🐟</span><span>🐟</span></div><div class=\"mt-2 text-sm text-slate-700\">一部分</div></div><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"右边\"><span>🐟</span><span>🐟</span><span>🐟</span><span>🐟</span></div><div class=\"mt-2 text-sm text-slate-700\">另一部分</div></div></div><div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">合起来7个</span></div>"
          }
        ]
      },
      {
        "num": "四",
        "title": "隐藏条件与生活情境提炼。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M29-4-1",
            "prompt": "草地上摆着5双运动鞋，每位小朋友恰好脱下1双，没有其他人的鞋。对应这些鞋的小朋友一共有几人？",
            "title": "双数对应推断人数",
            "tip": "1人穿1双鞋（2只），5双鞋说明有 5 个人！",
            "options": [
              {
                "text": "5 人",
                "correct": true
              },
              {
                "text": "10 人",
                "correct": false
              },
              {
                "text": "2 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">草地上：5双鞋</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">每人：1双；没有其他人的鞋</span></div>"
          },
          {
            "qid": "M29-4-2",
            "prompt": "小红买来 10 块饼干，分给妹妹一些后，盒子里还剩下 4 块。小红分给妹妹多少块饼干？",
            "title": "求分走的数量减法",
            "tip": "原来10块减去剩下的4块：10 - 4 = 6 块！",
            "options": [
              {
                "text": "6 块",
                "correct": true
              },
              {
                "text": "14 块",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红买来 10 块饼干</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">分给妹妹一些后</span></div>"
          },
          {
            "qid": "M29-4-3",
            "prompt": "池塘里原来有 6 条金鱼，捞出了 2 条，又买来放进去 3 条。池塘里现在有几条鱼？",
            "title": "进出混合加减",
            "tip": "6 - 2 + 3 = 7 条鱼！",
            "options": [
              {
                "text": "7 条",
                "correct": true
              },
              {
                "text": "8 条",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">池塘里原来有 6 条金鱼</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">捞出了 2 条</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又买来放进去 3 条</span></div>"
          },
          {
            "qid": "M29-4-4",
            "prompt": "乐乐拿了 2 盘小蛋糕，每盘放 4 个。月亮拿了 1 盘，放了 5 个。谁拿的蛋糕多？多几个？",
            "title": "乘倍与单数综合对比",
            "tip": "乐乐有 4+4=8 个，月亮有 5 个。乐乐多，多 8-5=3 个！",
            "options": [
              {
                "text": "乐乐多，多 3 个",
                "correct": true
              },
              {
                "text": "月亮多，多 1 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐拿了 2 盘小蛋糕</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">每盘放 4 个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">月亮拿了 1 盘</span></div>"
          }
        ]
      },
      {
        "num": "五",
        "title": "数的分解与口算速度冲关。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M29-5-1",
            "prompt": "10 可以分成 3 和几？",
            "title": "10的分与合",
            "tip": "10可以分成3和7（3 + 7 = 10）。",
            "options": [
              {
                "text": "7",
                "correct": true
              },
              {
                "text": "6",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">0</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">7</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">8</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">9</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text></svg>"
          },
          {
            "qid": "M29-5-2",
            "prompt": "8 可以分成 2 和几？几和 4 可以合成 9？",
            "title": "8与9的分解合成",
            "tip": "8分成2和6；5和4合成9！",
            "options": [
              {
                "text": "6 和 5",
                "correct": true
              },
              {
                "text": "5 和 5",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">0</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">7</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">8</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">9</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text></svg>"
          },
          {
            "qid": "M29-5-3",
            "prompt": "在整数中，比8大且比10小的数是几？它比6大几？",
            "title": "数轴中间数与差",
            "tip": "8和10中间的数是9，9 - 6 = 3，比6大3！",
            "options": [
              {
                "text": "数是 9，大 3",
                "correct": true
              },
              {
                "text": "数是 9，大 2",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">0</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">7</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">8</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">9</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text></svg>"
          }
        ]
      },
      {
        "num": "六",
        "title": "逆向思考与未知数填空。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M29-6-1",
            "prompt": "10 - ( ) = 4，括号里应该填几？",
            "title": "10的减法未知数",
            "tip": "想：10减6等于4，括号里填 6！",
            "options": [
              {
                "text": "6",
                "correct": true
              },
              {
                "text": "14",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">10 - ( ) = 4</span></div>"
          },
          {
            "qid": "M29-6-2",
            "prompt": "( ) + 5 = 9，括号里应该填几？",
            "title": "加法未知数",
            "tip": "想：4加5等于9，括号里填 4！",
            "options": [
              {
                "text": "4",
                "correct": true
              },
              {
                "text": "5",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">( ) + 5 = 9</span></div>"
          },
          {
            "qid": "M29-6-3",
            "prompt": "括号只填0到10的整数。9−（ ）>5，括号里最大能填几？",
            "title": "减法不等式最大能填",
            "tip": "9-0=9>5, 9-1=8>5, 9-2=7>5, 9-3=6>5, 9-4=5(不大于5)。所以最大填 3！",
            "options": [
              {
                "text": "3",
                "correct": true
              },
              {
                "text": "4",
                "correct": false
              },
              {
                "text": "2",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">9−（ ）&gt;5</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">括号填0到10的整数</span></div>"
          },
          {
            "qid": "M29-6-4",
            "prompt": "在 7 ○ 3 ○ 2 = 8 中，两个圆圈里依次填什么符号？",
            "title": "双符号组合巧填",
            "tip": "7 + 3 - 2 = 10 - 2 = 8，依次填 + 和 -！",
            "options": [
              {
                "text": "+ 和 -",
                "correct": true
              },
              {
                "text": "- 和 +",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在 7 ○ 3 ○ 2 = 8 中</span></div>"
          }
        ]
      },
      {
        "num": "七",
        "title": "看图列式综合生活解决问题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M29-7-1",
            "prompt": "树上有 9 只松鼠，跳下来 3 只找松果，又跳下来 2 只，树上还剩几只松鼠？",
            "title": "连减生活实际应用",
            "tip": "9 - 3 - 2 = 4 只松鼠！",
            "options": [
              {
                "text": "4 只",
                "correct": true
              },
              {
                "text": "5 只",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">树上有 9 只松鼠</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">跳下来 3 只找松果</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又跳下来 2 只</span></div>"
          },
          {
            "qid": "M29-7-2",
            "prompt": "停车场停了 6 辆小轿车，开走了 2 辆，又开来了 4 辆。现在停车场有几辆轿车？",
            "title": "停车场进出加减混合",
            "tip": "6 - 2 + 4 = 8 辆！",
            "options": [
              {
                "text": "8 辆",
                "correct": true
              },
              {
                "text": "9 辆",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">停车场停了 6 辆小轿车</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">开走了 2 辆</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又开来了 4 辆</span></div>"
          },
          {
            "qid": "M29-7-3",
            "prompt": "妈妈买了 10 个包子，早上爸爸吃了 3 个，乐乐吃了 2 个，还剩下几个包子？",
            "title": "连减实际问题",
            "tip": "10 - 3 - 2 = 5 个包子。",
            "options": [
              {
                "text": "5 个",
                "correct": true
              },
              {
                "text": "6 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">妈妈买了 10 个包子</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">早上爸爸吃了 3 个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐吃了 2 个</span></div>"
          },
          {
            "qid": "M29-7-4",
            "prompt": "花园里有 3 朵红花、4 朵黄花和 2 朵紫花，花园里一共有多少朵花？",
            "title": "连加求总数",
            "tip": "3 + 4 + 2 = 9 朵花。",
            "options": [
              {
                "text": "9 朵",
                "correct": true
              },
              {
                "text": "8 朵",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">花园里有 3 朵红花、4 朵黄花和 2 朵紫花</span></div>"
          }
        ]
      },
      {
        "num": "八",
        "title": "综合小挑战：选择正确答案。",
        "score": 12,
        "type": "choice",
        "tip": "独立作答，交卷后统一判分。",
        "items": [
          {
            "qid": "M29-8-1",
            "title": "1. 综合小挑战",
            "prompt": "左边3朵花、右边2朵花，一共有几朵？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">左边3朵花、右边2朵花</span></div>",
            "options": [
              {
                "text": "5 朵",
                "correct": true
              },
              {
                "text": "4 朵",
                "correct": false
              }
            ],
            "tip": "3+2=5。"
          },
          {
            "qid": "M29-8-2",
            "title": "2. 综合小挑战",
            "prompt": "原有7支笔，拿走2支，还剩几支？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">原有7支笔</span></div>",
            "options": [
              {
                "text": "5 支",
                "correct": true
              },
              {
                "text": "4 支",
                "correct": false
              }
            ],
            "tip": "7−2=5。"
          },
          {
            "qid": "M29-8-3",
            "title": "3. 综合小挑战",
            "prompt": "6−□=4，方框填几？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">6−□=4</span></div>",
            "options": [
              {
                "text": "2",
                "correct": true
              },
              {
                "text": "3",
                "correct": false
              }
            ],
            "tip": "6−2=4。"
          }
        ]
      }
    ]
  },
  {
    "id": 30,
    "unit": "第五单元：6~10的认识与加减",
    "title": "第 30 套：【进阶】连加连减与加减混合运算卷",
    "tag": "思维培优",
    "tagColor": "bg-sky-100 text-sky-800",
    "desc": "连加连减运算顺序、公交车上下车情景加减混合、图形算式代换启蒙（△+△=8, △+○=7）。",
    "timeLimit": 25,
    "sections": [
      {
        "num": "一",
        "title": "步步为营口算连连看：口算连续算式连线。",
        "score": 12,
        "type": "matching",
        "tip": "连加连减从左往右算，一步一步口算",
        "pairs": [
          {
            "target": "m30-1",
            "label": "① 2 + 3 + 4 = ？ ➕",
            "emoji": "🧮",
            "answer": "ma30-1",
            "char": "9",
            "pinyin": "jiǔ"
          },
          {
            "target": "m30-2",
            "label": "② 10 - 2 - 3 = ？ ➖",
            "emoji": "🧮",
            "answer": "ma30-2",
            "char": "5",
            "pinyin": "wǔ"
          },
          {
            "target": "m30-3",
            "label": "③ 8 - 4 + 3 = ？ 🔀",
            "emoji": "🧮",
            "answer": "ma30-3",
            "char": "7",
            "pinyin": "qī"
          },
          {
            "target": "m30-4",
            "label": "④ 9 - 5 - 2 = ？ ➖",
            "emoji": "🧮",
            "answer": "ma30-4",
            "char": "2",
            "pinyin": "èr"
          },
          {
            "target": "m30-5",
            "label": "⑤ 3 + 4 - 1 = ？ 🔀",
            "emoji": "🧮",
            "answer": "ma30-5",
            "char": "6",
            "pinyin": "liù"
          },
          {
            "target": "m30-6",
            "label": "⑥ 1 + 5 + 4 = ？ ➕",
            "emoji": "🧮",
            "answer": "ma30-6",
            "char": "10",
            "pinyin": "shí"
          }
        ],
        "shuffledAnswers": [
          "ma30-2",
          "ma30-4",
          "ma30-1",
          "ma30-6",
          "ma30-3",
          "ma30-5"
        ]
      },
      {
        "num": "二",
        "title": "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        "score": 8,
        "type": "choice",
        "items": [
          {
            "qid": "M30-2-1",
            "prompt": "2 + 3 + 2 ○ 8 - 1，○里填什么符号？",
            "title": "连加与连减比大小",
            "tip": "2+3+2=7，8-1=7，7 = 7，填等于号。",
            "options": [
              {
                "text": "=",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">2 + 3 + 2 ○ 8 - 1</span></div>"
          },
          {
            "qid": "M30-2-2",
            "prompt": "10 - 4 - 2 ○ 10 - 6，○里填什么符号？",
            "title": "连续减与合并减比大小",
            "tip": "连续减4再减2等于减去6！4 = 4，填 =！",
            "options": [
              {
                "text": "=",
                "correct": true
              },
              {
                "text": "<",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">10 - 4 - 2 ○ 10 - 6</span></div>"
          },
          {
            "qid": "M30-2-3",
            "prompt": "9 - 3 + 2 ○ 9 - 1，○里填什么符号？",
            "title": "加减混合比大小",
            "tip": "9-3+2=8，9-1=8，两边相等填 =。",
            "options": [
              {
                "text": "=",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">9 - 3 + 2 ○ 9 - 1</span></div>"
          },
          {
            "qid": "M30-2-4",
            "prompt": "7 + 2 - 3 ○ 7 - 2 + 3，○里填什么符号？",
            "title": "符号交换比大小",
            "tip": "7+2-3=6，7-2+3=8，6 < 8，填小于号。",
            "options": [
              {
                "text": "<",
                "correct": true
              },
              {
                "text": ">",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">7 + 2 - 3 ○ 7 - 2 + 3</span></div>"
          }
        ]
      },
      {
        "num": "三",
        "title": "图形算式代换奥秘：破译神秘密码。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M30-3-1",
            "prompt": "【经典奥数代换】已知：△ + △ = 8，且 △ + ○ = 7。请问 △ 是几？○ 是几？",
            "title": "两步图形代换",
            "tip": "两个一样的数相加等于8，说明 △ = 4；代入第二式 4 + ○ = 7，所以 ○ = 3！",
            "options": [
              {
                "text": "△ = 4，○ = 3",
                "correct": true
              },
              {
                "text": "△ = 3，○ = 4",
                "correct": false
              },
              {
                "text": "△ = 5，○ = 2",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">△ + △ = 8</span></div>"
          },
          {
            "qid": "M30-3-2",
            "prompt": "已知：□ + □ + □ = 9，那么 □ 表示数字几？",
            "title": "三相同数相加",
            "tip": "3 + 3 + 3 = 9，所以 □ = 3！",
            "options": [
              {
                "text": "3",
                "correct": true
              },
              {
                "text": "2",
                "correct": false
              },
              {
                "text": "4",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">□ + □ + □ = 9</span></div>"
          },
          {
            "qid": "M30-3-3",
            "prompt": "已知：☆ - 2 = 6，那么 ☆ 表示数字几？",
            "title": "图形减法还原",
            "tip": "想：几减2等于6？6 + 2 = 8，☆ = 8！",
            "options": [
              {
                "text": "8",
                "correct": true
              },
              {
                "text": "4",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">已知：☆ - 2 = 6</span></div>"
          },
          {
            "qid": "M30-3-4",
            "prompt": "已知：10 - △ - △ = 4，那么 △ 表示几？",
            "title": "减去两个相同数",
            "tip": "10减去6等于4，说明2个△等于6，3 + 3 = 6，所以 △ = 3！",
            "options": [
              {
                "text": "3",
                "correct": true
              },
              {
                "text": "2",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">10 - △ - △ = 4</span></div>"
          }
        ]
      },
      {
        "num": "四",
        "title": "公交车情境与生活动态加减混合。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M30-4-1",
            "prompt": "一辆公交车上原来有 8 位乘客，到了第一站，下去 3 位，又上来 4 位。车上现在一共有多少位乘客？",
            "title": "公交车上下车标准题",
            "tip": "下去用减法，上来用加法：8 - 3 + 4 = 5 + 4 = 9 位！",
            "options": [
              {
                "text": "9 位",
                "correct": true
              },
              {
                "text": "8 位",
                "correct": false
              },
              {
                "text": "7 位",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一辆公交车上原来有 8 位乘客</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">到了第一站</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">下去 3 位</span></div>"
          },
          {
            "qid": "M30-4-2",
            "prompt": "公交车到站后，上车 5 人，下车 2 人，车上的乘客比原来？",
            "title": "净增加量判断",
            "tip": "上来的比下去的多（5 - 2 = 3人），所以车上乘客比原来多了 3 人！",
            "options": [
              {
                "text": "多了 3 人",
                "correct": true
              },
              {
                "text": "少了 3 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">公交车到站后</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">上车 5 人</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">下车 2 人</span></div>"
          },
          {
            "qid": "M30-4-3",
            "prompt": "鸟妈妈捉了 9 条小虫，喂给大宝 3 条，喂给二宝 2 条，喂给小宝 3 条，还剩几条虫？",
            "title": "三次连减运算",
            "tip": "9 - 3 - 2 - 3 = 1 条小虫！",
            "options": [
              {
                "text": "1 条",
                "correct": true
              },
              {
                "text": "2 条",
                "correct": false
              },
              {
                "text": "0 条",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">鸟妈妈捉了 9 条小虫</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">喂给大宝 3 条</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">喂给二宝 2 条</span></div>"
          },
          {
            "qid": "M30-4-4",
            "prompt": "书架上原来有 4 本书，上午放上去 3 本，下午借走 2 本，书架上现在有几本书？",
            "title": "借还存量动态计算",
            "tip": "4 + 3 - 2 = 5 本书。",
            "options": [
              {
                "text": "5 本",
                "correct": true
              },
              {
                "text": "6 本",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">书架上原来有 4 本书</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">上午放上去 3 本</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">下午借走 2 本</span></div>"
          }
        ]
      },
      {
        "num": "五",
        "title": "运算顺序与括号思维探索。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M30-5-1",
            "prompt": "按从左到右的顺序计算3+2+4，先算哪一步？",
            "title": "从左到右运算规则",
            "tip": "按题目指定的从左到右顺序，先算3+2。其他正确的结合方法也能得到相同结果。",
            "options": [
              {
                "text": "3+2",
                "correct": true
              },
              {
                "text": "2+4",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">3+2+4 = ？</span></div>"
          },
          {
            "qid": "M30-5-2",
            "prompt": "10 连续减去 2 次 3，还剩下多少？",
            "title": "连续减相同数",
            "tip": "10 - 3 - 3 = 4！",
            "options": [
              {
                "text": "4",
                "correct": true
              },
              {
                "text": "7",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">10 连续减去 2 次 3</span></div>"
          },
          {
            "qid": "M30-5-3",
            "prompt": "三个小朋友玩跳绳，乐乐跳了 3 下，小明跳了 4 下，月亮跳了 3 下。他们一共跳了多少下？",
            "title": "三个数连加求和",
            "tip": "3 + 4 + 3 = 10 下！正好凑成十！",
            "options": [
              {
                "text": "10 下",
                "correct": true
              },
              {
                "text": "9 下",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">三个小朋友玩跳绳</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐跳了 3 下</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明跳了 4 下</span></div>"
          }
        ]
      },
      {
        "num": "六",
        "title": "巧算与凑十法变形应用。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M30-6-1",
            "prompt": "用凑十法计算2+5+8，结果是多少？",
            "title": "连加凑十巧算",
            "tip": "2 和 8 凑成 10，10 + 5 = 15！",
            "options": [
              {
                "text": "15",
                "correct": true
              },
              {
                "text": "14",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">2+5+8 = ？</span></div>"
          },
          {
            "qid": "M30-6-2",
            "prompt": "用凑十法计算3+4+7，结果是多少？",
            "title": "1与9凑十",
            "tip": "3和7凑成10，再加4得14。",
            "options": [
              {
                "text": "14",
                "correct": true
              },
              {
                "text": "13",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">3+4+7 = ？</span></div>"
          },
          {
            "qid": "M30-6-3",
            "prompt": "不折叠、不叠放，每次只剪（锯）断一处。一根木料锯成 4 段，每锯一次需要 2 分钟，一共需要几分钟？",
            "title": "锯木头时间乘倍",
            "tip": "锯4段只需锯 4 - 1 = 3 次！3个2分钟相加：2 + 2 + 2 = 6 分钟！",
            "options": [
              {
                "text": "6 分钟",
                "correct": true
              },
              {
                "text": "8 分钟",
                "correct": false
              },
              {
                "text": "4 分钟",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">不折叠、不叠放</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">每次只剪（锯）断一处</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一根木料锯成 4 段</span></div>"
          },
          {
            "qid": "M30-6-4",
            "prompt": "在算式 10 - □ - 2 = 5 中，方框 □ 里应该填几？",
            "title": "连减未知数填空",
            "tip": "10-2=8，8减去几等于5？8 - 5 = 3，所以 □ 里填 3！",
            "options": [
              {
                "text": "3",
                "correct": true
              },
              {
                "text": "4",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在算式 10 - □ - 2 = 5 中</span></div>"
          }
        ]
      },
      {
        "num": "七",
        "title": "综合生活情境解决问题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M30-7-1",
            "prompt": "小猴采了 10 个桃子，第一天吃了 2 个，第二天吃了 3 个，还剩下几个桃子？",
            "title": "连续消耗生活问题",
            "tip": "10 - 2 - 3 = 5 个桃子。",
            "options": [
              {
                "text": "5 个",
                "correct": true
              },
              {
                "text": "6 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小猴采了 10 个桃子</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">第一天吃了 2 个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">第二天吃了 3 个</span></div>"
          },
          {
            "qid": "M30-7-2",
            "prompt": "小红有 3 支铅笔，妈妈又买了 4 支，小红送给好朋友 2 支，现在小红有几支铅笔？",
            "title": "加减混合铅笔应用",
            "tip": "3 + 4 - 2 = 5 支铅笔。",
            "options": [
              {
                "text": "5 支",
                "correct": true
              },
              {
                "text": "6 支",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红有 3 支铅笔</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">妈妈又买了 4 支</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红送给好朋友 2 支</span></div>"
          },
          {
            "qid": "M30-7-3",
            "prompt": "小兔子拔萝卜，拔了 2 个大萝卜，又拔了 3 个胡萝卜，还拔了 4 个白萝卜。一共拔了几个萝卜？",
            "title": "三数连加总数",
            "tip": "2 + 3 + 4 = 9 个萝卜。",
            "options": [
              {
                "text": "9 个",
                "correct": true
              },
              {
                "text": "8 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小兔子拔萝卜</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">拔了 2 个大萝卜</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又拔了 3 个胡萝卜</span></div>"
          },
          {
            "qid": "M30-7-4",
            "prompt": "一共有 8 只小鸡捉虫吃，跑走 3 只，又跑来 2 只，现在一共有几只小鸡？",
            "title": "小鸡进出加减混合",
            "tip": "8 - 3 + 2 = 7 只小鸡。",
            "options": [
              {
                "text": "7 只",
                "correct": true
              },
              {
                "text": "8 只",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">跑走 3 只</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又跑来 2 只</span></div>"
          }
        ]
      },
      {
        "num": "八",
        "title": "综合小挑战：选择正确答案。",
        "score": 12,
        "type": "choice",
        "tip": "独立作答，交卷后统一判分。",
        "items": [
          {
            "qid": "M30-8-1",
            "title": "1. 综合小挑战",
            "prompt": "计算2+3+4，结果是多少？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">计算2+3+4</span></div>",
            "options": [
              {
                "text": "9",
                "correct": true
              },
              {
                "text": "8",
                "correct": false
              }
            ],
            "tip": "2+3+4=9。"
          },
          {
            "qid": "M30-8-2",
            "title": "2. 综合小挑战",
            "prompt": "计算9−2−3，结果是多少？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">计算9−2−3</span></div>",
            "options": [
              {
                "text": "4",
                "correct": true
              },
              {
                "text": "5",
                "correct": false
              }
            ],
            "tip": "9−2=7，7−3=4。"
          },
          {
            "qid": "M30-8-3",
            "title": "3. 综合小挑战",
            "prompt": "3+7+2，先把哪两个数凑十？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">3+7+2</span></div>",
            "options": [
              {
                "text": "3和7",
                "correct": true
              },
              {
                "text": "7和2",
                "correct": false
              }
            ],
            "tip": "3+7=10。"
          }
        ]
      }
    ]
  }
];
