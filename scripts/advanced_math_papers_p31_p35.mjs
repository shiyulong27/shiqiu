// 一年级上册数学进阶提优 · 第 31 ~ 35 套 (全量高品质图文可视化插图版)
export const papers31to35 = [
  {
    "id": 31,
    "unit": "🌟 数学期中进阶大考",
    "title": "第 31 套：【进阶】期中思维培优与代换应用卷",
    "tag": "期中巅峰",
    "tagColor": "bg-amber-100 text-amber-800",
    "desc": "期中综合压轴：动物重量三级传递代换、两端排队中间剩余花盆、两数之间开闭区间深度辨析。",
    "timeLimit": 25,
    "sections": [
      {
        "num": "一",
        "title": "期中综合代换连连看：按数学关系连一连。",
        "score": 12,
        "type": "matching",
        "tip": "细心找准等量传递关系",
        "pairs": [
          {
            "target": "m31-1",
            "label": "① 1兔 = 2松鼠，1松鼠 = 3鸟，1兔 =",
            "emoji": "🐰",
            "answer": "ma31-1",
            "char": "6只鸟",
            "pinyin": "liù zhī"
          },
          {
            "target": "m31-2",
            "label": "② 10里面有几个一 🔟",
            "emoji": "🔟",
            "answer": "ma31-2",
            "char": "10个一",
            "pinyin": "shí gè"
          },
          {
            "target": "m31-3",
            "label": "③ 6和10之间有几个数 🔢",
            "emoji": "🔢",
            "answer": "ma31-3",
            "char": "3个数(7/8/9)",
            "pinyin": "sān gè"
          },
          {
            "target": "m31-4",
            "label": "④ 从0数到10一共数了几个数 📏",
            "emoji": "📏",
            "answer": "ma31-4",
            "char": "11个数",
            "pinyin": "shíyī gè"
          },
          {
            "target": "m31-5",
            "label": "⑤ 5辆小汽车一共有几个车轮 🚗",
            "emoji": "🚗",
            "answer": "ma31-5",
            "char": "20个轮",
            "pinyin": "èrshí lún"
          },
          {
            "target": "m31-6",
            "label": "⑥ 最小的两位数是几 👑",
            "emoji": "👑",
            "answer": "ma31-6",
            "char": "10",
            "pinyin": "shí"
          }
        ],
        "shuffledAnswers": [
          "ma31-2",
          "ma31-4",
          "ma31-1",
          "ma31-6",
          "ma31-3",
          "ma31-5"
        ]
      },
      {
        "num": "二",
        "title": "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        "score": 8,
        "type": "choice",
        "items": [
          {
            "qid": "M31-2-1",
            "prompt": "5 + 5 - 2 ○ 10 - 2，○里填什么符号？",
            "title": "算式两边等价",
            "tip": "5+5=10，两边都是10-2=8，填等于号（=）。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">5 + 5 - 2 ○ 10 - 2</span></div>"
          },
          {
            "qid": "M31-2-2",
            "prompt": "从0数到8的个数 ○ 从1数到8的个数，○里填什么符号？",
            "title": "含0数数个数比大小",
            "tip": "含0多一个数，9 > 8，填大于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从0数到8的个数 ○ 从1数到8的个数</span></div>"
          },
          {
            "qid": "M31-2-3",
            "prompt": "10 - 5 ○ 2 + 4，○里填什么符号？",
            "title": "减法与加法比大小",
            "tip": "10-5=5，2+4=6，5 < 6，填小于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">10 - 5 ○ 2 + 4</span></div>"
          },
          {
            "qid": "M31-2-4",
            "prompt": "4双袜子的只数 ○ 9只袜子，○里填什么符号？",
            "title": "双数与单只比大小",
            "tip": "4双是8只，8 < 9，填小于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">4双袜子的只数 ○ 9只袜子</span></div>"
          }
        ]
      },
      {
        "num": "三",
        "title": "两端排队与中间数量高阶思维。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M31-3-1",
            "prompt": "9 盆鲜花排成一排。从左数红花是第 3 盆，从右数黄花是第 2 盆。红花和黄花之间有几盆花？",
            "title": "两端已知求中间盆数",
            "tip": "9盆减去红花及其左边的3盆，再减去黄花及其右边的2盆：9 - 3 - 2 = 4 盆花！",
            "options": [
              {
                "text": "4 盆",
                "correct": true
              },
              {
                "text": "5 盆",
                "correct": false
              },
              {
                "text": "3 盆",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 140\" role=\"img\" aria-label=\"排列图：🌼、🌼、🌺、🌼、🌼、🌼、🌼、🌻、🌼；左边开始排，红花与黄花位置如图\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>排列图：🌼、🌼、🌺、🌼、🌼、🌼、🌼、🌻、🌼；左边开始排，红花与黄花位置如图</title><text x=\"30\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌼</text><text x=\"75\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌼</text><text x=\"120\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌺</text><text x=\"165\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌼</text><text x=\"210\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌼</text><text x=\"255\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌼</text><text x=\"300\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌼</text><text x=\"345\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌻</text><text x=\"390\" y=\"72\" text-anchor=\"middle\" font-size=\"26\" fill=\"#334155\">🌼</text><text x=\"210\" y=\"119\" text-anchor=\"middle\" font-size=\"14\" fill=\"#334155\">左边开始排，红花与黄花位置如图</text></svg>"
          },
          {
            "qid": "M31-3-2",
            "prompt": "在6和10之间，不包括两端，一共有几个整数？",
            "title": "两数之间不含两端",
            "tip": "6和10之间有：7、8、9，一共有 3 个数！（不包括6和10本身）",
            "options": [
              {
                "text": "3 个数",
                "correct": true
              },
              {
                "text": "4 个数",
                "correct": false
              },
              {
                "text": "5 个数",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在整数字 6 和 10 之间</span></div>"
          },
          {
            "qid": "M31-3-3",
            "prompt": "从 6 数到 10，一共数了几个数？",
            "title": "包含两端数数",
            "tip": "从6数到10包括两端：6、7、8、9、10，一共数了 5 个数！",
            "options": [
              {
                "text": "5 个数",
                "correct": true
              },
              {
                "text": "4 个数",
                "correct": false
              },
              {
                "text": "3 个数",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从 6 数到 10</span></div>"
          },
          {
            "qid": "M31-3-4",
            "prompt": "一排小动物共有 10 只。从前往后数小兔排第 4，小兔后面（不包括小兔）还有几只小动物？",
            "title": "扣除排号求剩余",
            "tip": "10 - 4 = 6 只小动物！",
            "options": [
              {
                "text": "6 只",
                "correct": true
              },
              {
                "text": "5 只",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一排小动物共有 10 只</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从前往后数小兔排第 4</span></div>"
          }
        ]
      },
      {
        "num": "四",
        "title": "等量代换与天平多层推理。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M31-4-1",
            "prompt": "【三级等量代换】1 只小白兔的重量 = 2 只松鼠，1 只松鼠的重量 = 3 只小鸟。那么 1 只小白兔的重量等于几只小鸟？",
            "title": "连环代换乘倍",
            "tip": "1只兔换2只松鼠，每只松鼠换3只鸟，3 + 3 = 6 只小鸟！",
            "options": [
              {
                "text": "6 只小鸟",
                "correct": true
              },
              {
                "text": "5 只小鸟",
                "correct": false
              },
              {
                "text": "8 只小鸟",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">1 只小白兔的重量 = 2 只松鼠</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">1 只松鼠的重量 = 3 只小鸟</span></div>"
          },
          {
            "qid": "M31-4-2",
            "prompt": "天平左边：1 个西瓜 = 右边 8 个苹果。从右边拿走 3 个苹果，左边西瓜切掉一部分，要使天平平衡，右边还剩几个苹果？",
            "title": "天平对应减少",
            "tip": "8 - 3 = 5 个苹果！",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">天平左边：1 个西瓜 = 右边 8 个苹果</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从右边拿走 3 个苹果</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">左边西瓜切掉一部分</span></div>"
          },
          {
            "qid": "M31-4-3",
            "prompt": "已知：△ + △ = 10，○ + △ = 8。那么 ○ 是几？△ 是几？",
            "title": "期中图形代换",
            "tip": "5 + 5 = 10，所以 △ = 5；代入第二式：○ + 5 = 8，○ = 3！",
            "options": [
              {
                "text": "△ = 5，○ = 3",
                "correct": true
              },
              {
                "text": "△ = 4，○ = 4",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">△ + △ = 10</span></div>"
          },
          {
            "qid": "M31-4-4",
            "prompt": "乐乐有 10 颗玻璃珠，给月亮 2 颗后，两人的玻璃珠同样多。月亮原来有几颗玻璃珠？",
            "title": "移多补少逆向求初值",
            "tip": "乐乐给2颗后剩 10 - 2 = 8 颗，月亮此时也是8颗。说明月亮原来有 8 - 2 = 6 颗！",
            "options": [
              {
                "text": "6 颗",
                "correct": true
              },
              {
                "text": "8 颗",
                "correct": false
              },
              {
                "text": "4 颗",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐有 10 颗玻璃珠</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">给月亮 2 颗后</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两人的玻璃珠同样多</span></div>"
          }
        ]
      },
      {
        "num": "五",
        "title": "空间立体几何综合复习与进阶。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M31-5-1",
            "prompt": "用8个同样大小的小正方体拼成一个大正方体，把大正方体的外表面全部涂红。一共涂了大正方体的几个外表面？",
            "title": "大正方体外表面",
            "tip": "拼成的大正方体依然是一个正方体，它有 6 个外表面！",
            "options": [
              {
                "text": "6 个面",
                "correct": true
              },
              {
                "text": "8 个面",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">大正方体的全部外表面涂红</span></div>"
          },
          {
            "qid": "M31-5-2",
            "prompt": "长方体（不包括正方体）最多可以有几个面是正方形？",
            "title": "长方体特殊面特征",
            "tip": "不包括正方体时，可以有两个相对的面是正方形；若六个面都是正方形，它就是正方体。",
            "options": [
              {
                "text": "2 个",
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
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 165\" role=\"img\" aria-label=\"长方体示意，虚线表示隐藏的棱\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>长方体示意，虚线表示隐藏的棱</title><path d=\"M95,50l35,-35h185v95l-35,35H95Z M95,50h185l35,-35 M280,50v95\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M130,15v95h185 M130,110l-35,35\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/></svg>"
          },
          {
            "qid": "M31-5-3",
            "prompt": "搭积木时，小明放了 2 个长方体、3 个正方体、1 个圆柱和 2 个球。他一共用了多少个积木？",
            "title": "多类积木总数",
            "tip": "2 + 3 + 1 + 2 = 8 个积木。",
            "options": [
              {
                "text": "8 个",
                "correct": true
              },
              {
                "text": "7 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">搭积木时</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明放了 2 个长方体、3 个正方体、1 个圆柱和 2 个球</span></div>"
          }
        ]
      },
      {
        "num": "六",
        "title": "综合数字规律与逆向思维。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M31-6-1",
            "prompt": "找规律填数：0、2、4、6、( )、10。括号里应该填几？",
            "title": "双数递增规律",
            "tip": "每次加2：6 + 2 = 8，括号里填 8！",
            "options": [
              {
                "text": "8",
                "correct": true
              },
              {
                "text": "7",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">找规律填数：0、2、4、6、( )、10。括号里应该填几</span></div>"
          },
          {
            "qid": "M31-6-2",
            "prompt": "找规律填数：10、8、6、( )、2、0。括号里应该填几？",
            "title": "双数倒数递减",
            "tip": "每次减2：6 - 2 = 4，括号里填 4！",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">找规律填数：10、8、6、( )、2、0。括号里应该填几</span></div>"
          },
          {
            "qid": "M31-6-3",
            "prompt": "方框内只填0到20的整数。在 10 - □ > 6 中，方框里最大能填几？",
            "title": "10的减法不等式极值",
            "tip": "10-0=10>6, 10-1=9>6, 10-2=8>6, 10-3=7>6, 10-4=6(不大于6)。所以最大填 3！",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在 10 - □ &gt; 6 中</span></div>"
          },
          {
            "qid": "M31-6-4",
            "prompt": "三个连续自然数的和是 6，这三个数分别是？",
            "title": "连续自然数和",
            "tip": "1 + 2 + 3 = 6，这三个数是 1、2、3！",
            "options": [
              {
                "text": "1、2、3",
                "correct": true
              },
              {
                "text": "0、2、4",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">三个连续自然数的和是 6</span></div>"
          }
        ]
      },
      {
        "num": "七",
        "title": "期中生活综合解决问题应用。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M31-7-1",
            "prompt": "班级图书角有 10 本故事书，借给小刚 3 本，借给小丽 4 本，图书角还剩下几本书？",
            "title": "连续借出减法",
            "tip": "10 - 3 - 4 = 3 本书！",
            "options": [
              {
                "text": "3 本",
                "correct": true
              },
              {
                "text": "4 本",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">班级图书角有 10 本故事书</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">借给小刚 3 本</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">借给小丽 4 本</span></div>"
          },
          {
            "qid": "M31-7-2",
            "prompt": "小红买来 2 双手套和 3 根棒棒糖。手套一共有几只？",
            "title": "提取有用条件双数换算",
            "tip": "棒棒糖是多余干扰条件！2双手套是 2 + 2 = 4 只！",
            "options": [
              {
                "text": "4 只",
                "correct": true
              },
              {
                "text": "7 只",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红买来 2 双手套和 3 根棒棒糖</span></div>"
          },
          {
            "qid": "M31-7-3",
            "prompt": "妈妈煮了 10 个饺子，乐乐吃了 4 个，爸爸吃了 5 个，盘子里还剩几个饺子？",
            "title": "连减实际问题",
            "tip": "10 - 4 - 5 = 1 个饺子。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">妈妈煮了 10 个饺子</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐吃了 4 个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">爸爸吃了 5 个</span></div>"
          },
          {
            "qid": "M31-7-4",
            "prompt": "合唱队排成一排，从左数小华排第 5，从右数小华排第 5。合唱队一共有多少人？",
            "title": "对称排队求总人数",
            "tip": "5 + 5 - 1 = 9 人！小华被数了两次要减1！",
            "options": [
              {
                "text": "9 人",
                "correct": true
              },
              {
                "text": "10 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">合唱队排成一排</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从左数小华排第 5</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从右数小华排第 5</span></div>"
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
            "qid": "M31-8-1",
            "title": "1. 综合小挑战",
            "prompt": "在6和9之间，不含两端，一共有几个整数？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在6和9之间</span></div>",
            "options": [
              {
                "text": "2 个",
                "correct": true
              },
              {
                "text": "3 个",
                "correct": false
              }
            ],
            "tip": "7、8共2个。"
          },
          {
            "qid": "M31-8-2",
            "title": "2. 综合小挑战",
            "prompt": "从6数到9，包含两端，一共数几个整数？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从6数到9</span></div>",
            "options": [
              {
                "text": "4 个",
                "correct": true
              },
              {
                "text": "3 个",
                "correct": false
              }
            ],
            "tip": "6、7、8、9共4个。"
          },
          {
            "qid": "M31-8-3",
            "title": "3. 综合小挑战",
            "prompt": "1兔重2只鸟，2兔重几只鸟？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">1兔重2只鸟</span></div>",
            "options": [
              {
                "text": "4 只",
                "correct": true
              },
              {
                "text": "3 只",
                "correct": false
              }
            ],
            "tip": "2+2=4。"
          }
        ]
      }
    ]
  },
  {
    "id": 32,
    "unit": "🌟 数学期中进阶大考",
    "title": "第 32 套：【进阶】两数之间有几个数与排队求总数冲刺卷",
    "tag": "奥数冲刺",
    "tagColor": "bg-rose-100 text-rose-800",
    "desc": "前面有几人后面有几人(+1自己)、从前数第几从后数第几(-1自己)、推迟延后几天日历推算。",
    "timeLimit": 25,
    "sections": [
      {
        "num": "一",
        "title": "排队模型连连看：按排队口诀连线。",
        "score": 12,
        "type": "matching",
        "tip": "前几后几加自己，两头报数减自己",
        "pairs": [
          {
            "target": "m32-1",
            "label": "① 前有3人，后有4人，共几人 🏃",
            "emoji": "🏃",
            "answer": "ma32-1",
            "char": "8人 (3+4+1)",
            "pinyin": "bā rén"
          },
          {
            "target": "m32-2",
            "label": "② 从前数第3，从后数第4，共几人 🧍",
            "emoji": "🧍",
            "answer": "ma32-2",
            "char": "6人 (3+4-1)",
            "pinyin": "liù rén"
          },
          {
            "target": "m32-3",
            "label": "③ 从左数第2，向右还有5人，共几人 🚶",
            "emoji": "🚶",
            "answer": "ma32-3",
            "char": "7人 (2+5)",
            "pinyin": "qī rén"
          },
          {
            "target": "m32-4",
            "label": "④ 星期二推迟3天举行是 📅",
            "emoji": "📅",
            "answer": "ma32-4",
            "char": "星期五",
            "pinyin": "xīng qī wǔ"
          },
          {
            "target": "m32-5",
            "label": "⑤ 第4页读到第8页共读了 📖",
            "emoji": "📖",
            "answer": "ma32-5",
            "char": "5页 (8-4+1)",
            "pinyin": "wǔ yè"
          },
          {
            "target": "m32-6",
            "label": "⑥ 4和8之间有几个数 🔢",
            "emoji": "🔢",
            "answer": "ma32-6",
            "char": "3个数 (5/6/7)",
            "pinyin": "sān gè"
          }
        ],
        "shuffledAnswers": [
          "ma32-2",
          "ma32-4",
          "ma32-1",
          "ma32-6",
          "ma32-3",
          "ma32-5"
        ]
      },
      {
        "num": "二",
        "title": "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        "score": 8,
        "type": "choice",
        "items": [
          {
            "qid": "M32-2-1",
            "prompt": "前有4人后有4人的总人数 ○ 从前数第4从后数第4的总人数，○里填什么符号？",
            "title": "两类排队总数对比",
            "tip": "前4后4加自己共9人，两头数4减自己共7人，9 > 7，填大于号！",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">前有4人后有4人的总人数 ○ 从前数第4从后数第4的总人数</span></div>"
          },
          {
            "qid": "M32-2-2",
            "prompt": "从5到9的个数 ○ 5和9之间的个数，○里填什么符号？",
            "title": "包含两端与两数之间比大小",
            "tip": "包含两端5个数，两数之间3个数，5 > 3，填 >。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从5到9的个数 ○ 5和9之间的个数</span></div>"
          },
          {
            "qid": "M32-2-3",
            "prompt": "两个活动原定同一周举行：甲在星期三推迟2天，乙在星期一推迟4天。甲举行的日期 ○ 乙举行的日期，○里填什么符号？",
            "title": "日历推迟比大小",
            "tip": "三加二和一加四都是星期五，相等填 =！",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两个活动原定同一周举行：甲在星期三推迟2天，乙在星期一推迟4天。甲举行的日期 ○ 乙举行的日期</span></div>"
          },
          {
            "qid": "M32-2-4",
            "prompt": "8 - 3 + 1 ○ 8 - 3 - 1，○里填什么符号？",
            "title": "加1与减1算式对比",
            "tip": "6 > 4，填大于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">8 - 3 + 1 ○ 8 - 3 - 1</span></div>"
          }
        ]
      },
      {
        "num": "三",
        "title": "排队问题深度辨析：不混淆加一与减一。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M32-3-1",
            "prompt": "【极易错混淆题】排队做操，小明的前面有 4 人，后面有 5 人。这一排一共有几人？",
            "title": "前有后有模型",
            "tip": "前面的人 + 后面的人 + 小明自己：4 + 5 + 1 = 10 人！一定要加自己！",
            "options": [
              {
                "text": "10 人",
                "correct": true
              },
              {
                "text": "9 人",
                "correct": false
              },
              {
                "text": "8 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">排队做操</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明的前面有 4 人</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">后面有 5 人</span></div>"
          },
          {
            "qid": "M32-3-2",
            "prompt": "【极易错混淆题】排队做操，从前往后数小明排第 4，从后往前数小明排第 5。这一排一共有几人？",
            "title": "两头排号模型",
            "tip": "小明从前数被算了一次，从后数又被算了一次：4 + 5 - 1 = 8 人！一定要减去重复算的1次！",
            "options": [
              {
                "text": "8 人",
                "correct": true
              },
              {
                "text": "9 人",
                "correct": false
              },
              {
                "text": "10 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">排队做操</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从前往后数小明排第 4</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从后往前数小明排第 5</span></div>"
          },
          {
            "qid": "M32-3-3",
            "prompt": "同学们排队，从左数乐乐排第 6，月亮排第 10。乐乐和月亮之间有几个人？",
            "title": "序号之间人数",
            "tip": "在第6和第10之间的是第7、8、9名，一共 3 人！（算式：10 - 6 - 1 = 3 人）",
            "options": [
              {
                "text": "3 人",
                "correct": true
              },
              {
                "text": "4 人",
                "correct": false
              },
              {
                "text": "2 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">同学们排队</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从左数乐乐排第 6</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">月亮排第 10</span></div>"
          },
          {
            "qid": "M32-3-4",
            "prompt": "队伍一共有 9 人，从左数小刚排第 5。从右数小刚排第几？",
            "title": "已知总数反求排号",
            "tip": "小刚右边有 9 - 5 = 4 人，从右数这4人排前4位，小刚紧接着排第 5！（算式：9 - 5 + 1 = 5）",
            "options": [
              {
                "text": "第 5",
                "correct": true
              },
              {
                "text": "第 4",
                "correct": false
              },
              {
                "text": "第 6",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从左数小刚排第 5</span></div>"
          }
        ]
      },
      {
        "num": "四",
        "title": "日历推迟与间隔周期奥数思维。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M32-4-1",
            "prompt": "【日历推迟题】学校原定于星期二开运动会，因为下雨推迟了 3 天举行。运动会改在星期几举行？",
            "title": "日历推迟计算",
            "tip": "推迟3天：星期二往后数3天：二添1是三、添2是四、添3是五，改在【星期五】举行！",
            "options": [
              {
                "text": "星期五",
                "correct": true
              },
              {
                "text": "星期四",
                "correct": false
              },
              {
                "text": "星期六",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">原定：星期二</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">推迟：3天</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">星期一　星期二　星期三　星期四　星期五　星期六　星期日</span></div>"
          },
          {
            "qid": "M32-4-2",
            "prompt": "今天是星期四，3 天前是星期几？",
            "title": "日历倒推计算",
            "tip": "倒数3天：四前是三、前2是二、前3是星期一！",
            "options": [
              {
                "text": "星期一",
                "correct": true
              },
              {
                "text": "星期二",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">今天：星期四</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">倒推：3天</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">星期一　星期二　星期三　星期四　星期五　星期六　星期日</span></div>"
          },
          {
            "qid": "M32-4-3",
            "prompt": "一星期有 7 天。从星期一到星期日一共有几天？",
            "title": "自然周天数常识",
            "tip": "一星期整整有 7 天。",
            "options": [
              {
                "text": "7 天",
                "correct": true
              },
              {
                "text": "6 天",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一星期有 7 天</span></div>"
          },
          {
            "qid": "M32-4-4",
            "prompt": "小猴过生日，今天收到 2 份礼物，明天收到 3 份礼物，后天收到 4 份礼物。三天一共收到几份？",
            "title": "连续三天连加",
            "tip": "2 + 3 + 4 = 9 份礼物！",
            "options": [
              {
                "text": "9 份",
                "correct": true
              },
              {
                "text": "8 份",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小猴过生日</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">今天收到 2 份礼物</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">明天收到 3 份礼物</span></div>"
          }
        ]
      },
      {
        "num": "五",
        "title": "数数两端包含与页码问题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M32-5-1",
            "prompt": "【页码包含题】小红看一本故事书，今天从第 4 页读到第 8 页。小红今天一共读了几页书？",
            "title": "页码包含两端算式",
            "tip": "第4、5、6、7、8页全都读了，一共有 5 页！（算式：8 - 4 + 1 = 5 页）",
            "options": [
              {
                "text": "5 页",
                "correct": true
              },
              {
                "text": "4 页",
                "correct": false
              },
              {
                "text": "6 页",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"66.11111111111111\" y1=\"62\" x2=\"66.11111111111111\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"66.11111111111111\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"107.22222222222223\" y1=\"62\" x2=\"107.22222222222223\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"107.22222222222223\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"148.33333333333331\" y1=\"62\" x2=\"148.33333333333331\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"148.33333333333331\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"189.44444444444446\" y1=\"62\" x2=\"189.44444444444446\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"189.44444444444446\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"230.55555555555554\" y1=\"62\" x2=\"230.55555555555554\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"230.55555555555554\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text><line x1=\"271.66666666666663\" y1=\"62\" x2=\"271.66666666666663\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"271.66666666666663\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">7</text><line x1=\"312.77777777777777\" y1=\"62\" x2=\"312.77777777777777\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"312.77777777777777\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">8</text><line x1=\"353.8888888888889\" y1=\"62\" x2=\"353.8888888888889\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"353.8888888888889\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">9</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text></svg>"
          },
          {
            "qid": "M32-5-2",
            "prompt": "小明把 1 到 10 的数字卡片排成一排，拿走了第 3 张和第 7 张，还剩下几张卡片？",
            "title": "点数拿走减法",
            "tip": "一共10张拿走2张：10 - 2 = 8 张！",
            "options": [
              {
                "text": "8 张",
                "correct": true
              },
              {
                "text": "7 张",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明把 1 到 10 的数字卡片排成一排</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">拿走了第 3 张和第 7 张</span></div>"
          },
          {
            "qid": "M32-5-3",
            "prompt": "8和10之间，不包括两端，一共有几个整数？",
            "title": "单个中间数",
            "tip": "8和10之间只有 9 这 1 个数！",
            "options": [
              {
                "text": "1 个数",
                "correct": true
              },
              {
                "text": "2 个数",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">0</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">7</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">8</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">9</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text></svg>"
          }
        ]
      },
      {
        "num": "六",
        "title": "排队变动与插队退队思维。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M32-6-1",
            "prompt": "原来有 7 个人排队，又来了 2 个人排在最后，接着最前面走了 1 个人。现在队伍有几人？",
            "title": "排队进出混合",
            "tip": "7 + 2 - 1 = 8 人！",
            "options": [
              {
                "text": "8 人",
                "correct": true
              },
              {
                "text": "9 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">原来有 7 个人排队</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又来了 2 个人排在最后</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">接着最前面走了 1 个人</span></div>"
          },
          {
            "qid": "M32-6-2",
            "prompt": "小芳排第3个，她前面有1个人买完票离开队伍。小芳现在排第几个？",
            "title": "离队后排号前进",
            "tip": "前面走掉1人，小芳往前挪一位，现在排第 2！",
            "options": [
              {
                "text": "第 2",
                "correct": true
              },
              {
                "text": "第 3",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小芳排第3个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">她前面有1个人买完票离开队伍</span></div>"
          },
          {
            "qid": "M32-6-3",
            "prompt": "两排小朋友做操，每排都是 5 人。从第一排调 1 人到第二排，第二排比第一排多几人？",
            "title": "移多补少变差",
            "tip": "第一排剩 5-1=4 人，第二排有 5+1=6 人，6 - 4 = 2 人！调1人多2人！",
            "options": [
              {
                "text": "多 2 人",
                "correct": true
              },
              {
                "text": "多 1 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两排小朋友做操</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">每排都是 5 人</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从第一排调 1 人到第二排</span></div>"
          },
          {
            "qid": "M32-6-4",
            "prompt": "6个小朋友排成一排，每相邻两人的位置相距1米。从第1人的位置到第6人的位置，一共多少米？",
            "title": "排队间隔求长度",
            "tip": "6个人之间有 6 - 1 = 5 个间隔，一共长 5 米！",
            "options": [
              {
                "text": "5 米",
                "correct": true
              },
              {
                "text": "6 米",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">6个小朋友排成一排</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">每相邻两人的位置相距1米</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从第1人的位置到第6人的位置</span></div>"
          }
        ]
      },
      {
        "num": "七",
        "title": "生活实际情境综合应用。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M32-7-1",
            "prompt": "小红前面有 3 个同学，后面有 6 个同学，这一排一共有几个同学？",
            "title": "前有后有基础应用",
            "tip": "3 + 6 + 1 = 10 个同学！",
            "options": [
              {
                "text": "10 个",
                "correct": true
              },
              {
                "text": "9 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红前面有 3 个同学</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">后面有 6 个同学</span></div>"
          },
          {
            "qid": "M32-7-2",
            "prompt": "校车上有 10 个座位，坐了 8 个小朋友，车上还有几个空座位？",
            "title": "空座减法",
            "tip": "10 - 8 = 2 个空座位。",
            "options": [
              {
                "text": "2 个",
                "correct": true
              },
              {
                "text": "3 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">校车上有 10 个座位</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">坐了 8 个小朋友</span></div>"
          },
          {
            "qid": "M32-7-3",
            "prompt": "小鸡和小鸭排队捉虫，小鸡排在第 2，小鸭排在第 5，它们之间有几只小动物？",
            "title": "动物排队中间数",
            "tip": "5 - 2 - 1 = 2 只小动物。",
            "options": [
              {
                "text": "2 只",
                "correct": true
              },
              {
                "text": "3 只",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小鸡和小鸭排队捉虫</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小鸡排在第 2</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小鸭排在第 5</span></div>"
          },
          {
            "qid": "M32-7-4",
            "prompt": "妈妈买了 8 个苹果，乐乐吃了 2 个，月亮吃了 3 个，还剩下几个苹果？",
            "title": "连减生活实际",
            "tip": "8 - 2 - 3 = 3 个苹果。",
            "options": [
              {
                "text": "3 个",
                "correct": true
              },
              {
                "text": "4 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">妈妈买了 8 个苹果</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐吃了 2 个</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">月亮吃了 3 个</span></div>"
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
            "qid": "M32-8-1",
            "title": "1. 综合小挑战",
            "prompt": "前面2人，后面3人，加上自己，一共有几人？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">前面2人</span></div>",
            "options": [
              {
                "text": "6 人",
                "correct": true
              },
              {
                "text": "5 人",
                "correct": false
              }
            ],
            "tip": "2+3+1=6。"
          },
          {
            "qid": "M32-8-2",
            "title": "2. 综合小挑战",
            "prompt": "从第2页读到第5页，包含两端，共几页？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从第2页读到第5页</span></div>",
            "options": [
              {
                "text": "4 页",
                "correct": true
              },
              {
                "text": "3 页",
                "correct": false
              }
            ],
            "tip": "2、3、4、5共4页。"
          },
          {
            "qid": "M32-8-3",
            "title": "3. 综合小挑战",
            "prompt": "星期一推迟2天，是星期几？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">星期一推迟2天</span></div>",
            "options": [
              {
                "text": "星期三",
                "correct": true
              },
              {
                "text": "星期二",
                "correct": false
              }
            ],
            "tip": "一天后星期二，两天后星期三。"
          }
        ]
      }
    ]
  },
  {
    "id": 33,
    "unit": "第六单元：11~20各数的认识",
    "title": "第 33 套：【进阶】计数器数位魔术与十进制思维卷",
    "tag": "思维培优",
    "tagColor": "bg-indigo-100 text-indigo-800",
    "desc": "计数器数位（个位十位）珠子魔术组合、1个十与几个一本质算理、最大一位数与最小两位数。",
    "timeLimit": 25,
    "sections": [
      {
        "num": "一",
        "title": "计数器数位连连看：按数位珠子连到对应数字。",
        "score": 12,
        "type": "matching",
        "tip": "十位一颗珠子代表10，个位一颗珠子代表1",
        "pairs": [
          {
            "target": "m33-1",
            "label": "① 十位1颗，个位5颗 🧮",
            "emoji": "🧮",
            "answer": "ma33-1",
            "char": "15",
            "pinyin": "shíwǔ"
          },
          {
            "target": "m33-2",
            "label": "② 十位2颗，个位0颗 🧮",
            "emoji": "🧮",
            "answer": "ma33-2",
            "char": "20",
            "pinyin": "èrshí"
          },
          {
            "target": "m33-3",
            "label": "③ 十位1颗，个位1颗 🧮",
            "emoji": "🧮",
            "answer": "ma33-3",
            "char": "11",
            "pinyin": "shíyī"
          },
          {
            "target": "m33-4",
            "label": "④ 1个十和8个一合起来 🔢",
            "emoji": "🔢",
            "answer": "ma33-4",
            "char": "18",
            "pinyin": "shíbā"
          },
          {
            "target": "m33-5",
            "label": "⑤ 最大的一位数是 👑",
            "emoji": "👑",
            "answer": "ma33-5",
            "char": "9",
            "pinyin": "jiǔ"
          },
          {
            "target": "m33-6",
            "label": "⑥ 最小的两位数是 🎯",
            "emoji": "🎯",
            "answer": "ma33-6",
            "char": "10",
            "pinyin": "shí"
          }
        ],
        "shuffledAnswers": [
          "ma33-2",
          "ma33-4",
          "ma33-1",
          "ma33-6",
          "ma33-3",
          "ma33-5"
        ]
      },
      {
        "num": "二",
        "title": "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        "score": 8,
        "type": "choice",
        "items": [
          {
            "qid": "M33-2-1",
            "prompt": "1个十和3个一 ○ 2个十，○里填什么符号？",
            "title": "数位组成比大小",
            "tip": "十位是1小于十位是2：13 < 20，填小于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">1个十和3个一 ○ 2个十</span></div>"
          },
          {
            "qid": "M33-2-2",
            "prompt": "19里面的十位数字 ○ 19里面的个位数字，○里填什么符号？",
            "title": "个位与十位数字比大小",
            "tip": "十位是1，个位是9，1 < 9，填小于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">19里面的十位数字 ○ 19里面的个位数字</span></div>"
          },
          {
            "qid": "M33-2-3",
            "prompt": "15 - 5 ○ 10 + 0，○里填什么符号？",
            "title": "十几减几比大小",
            "tip": "15-5=10，10+0=10，两边相等填 =。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">15 - 5 ○ 10 + 0</span></div>"
          },
          {
            "qid": "M33-2-4",
            "prompt": "最大的一位数 ○ 最小的两位数，○里填什么符号？",
            "title": "最大一位数与最小两位数",
            "tip": "9 < 10，填小于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">最大的一位数 ○ 最小的两位数</span></div>"
          }
        ]
      },
      {
        "num": "三",
        "title": "计数器珠子组合魔术：奥数思维进阶。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M33-3-1",
            "prompt": "计数器只有十位、个位两根杆，用2颗珠子全部摆到这两根杆上，可以摆出哪几个不同的数？",
            "title": "两颗珠子摆数奥数题",
            "tip": "珠子全放个位是2；十位1颗个位1颗是11；全放十位是20！可以摆出：2、11、20，共 3 个数！",
            "options": [
              {
                "text": "2、11、20（共3个）",
                "correct": true
              },
              {
                "text": "只有 2 和 20",
                "correct": false
              },
              {
                "text": "只有 11",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 175\" role=\"img\" aria-label=\"十位与个位计数器\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>十位与个位计数器</title><line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"90\" y1=\"125\" x2=\"330\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"140\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">十位</text><text x=\"280\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">个位</text></svg><div class=\"flex flex-wrap justify-center gap-5 p-3 border border-slate-300 rounded-xl\"><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"待摆的珠子\"><span>⚪</span><span>⚪</span></div><div class=\"mt-2 text-sm text-slate-700\">待摆的珠子</div></div></div>"
          },
          {
            "qid": "M33-3-2",
            "prompt": "计数器只有十位、个位两根杆，用3颗珠子全部摆数，允许某根杆没有珠子。最大的数是多少？",
            "title": "三颗珠子最大数",
            "tip": "把3颗珠子全部放在十位，个位没有珠子，表示3个十，就是30；它比21和12都大。",
            "options": [
              {
                "text": "30",
                "correct": true
              },
              {
                "text": "21",
                "correct": false
              },
              {
                "text": "12",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 175\" role=\"img\" aria-label=\"十位与个位计数器\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>十位与个位计数器</title><line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"90\" y1=\"125\" x2=\"330\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"140\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">十位</text><text x=\"280\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">个位</text></svg><div class=\"flex flex-wrap justify-center gap-5 p-3 border border-slate-300 rounded-xl\"><div class=\"text-center\"><div class=\"grid grid-cols-5 gap-1 text-xl\" aria-label=\"待摆的珠子\"><span>⚪</span><span>⚪</span><span>⚪</span></div><div class=\"mt-2 text-sm text-slate-700\">待摆的珠子</div></div></div>"
          },
          {
            "qid": "M33-3-3",
            "prompt": "计数器从右边起，第一根杆和第二根杆分别表示什么数位？",
            "title": "数位顺序常识",
            "tip": "从右往左：第一位是【个位】，第二位是【十位】！",
            "options": [
              {
                "text": "第一位是个位，第二位是十位",
                "correct": true
              },
              {
                "text": "第一位是十位，第二位是个位",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 175\" role=\"img\" aria-label=\"十位与个位计数器\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>十位与个位计数器</title><line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"90\" y1=\"125\" x2=\"330\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"140\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">第二根</text><text x=\"280\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">第一根</text></svg>"
          },
          {
            "qid": "M33-3-4",
            "prompt": "数字“14”中，十位上的“1”表示什么？个位上的“4”表示什么？",
            "title": "数位数值含义",
            "tip": "十位上的1表示 1 个十，个位上的4表示 4 个一！",
            "options": [
              {
                "text": "1个十和4个一",
                "correct": true
              },
              {
                "text": "1个一和4个十",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 175\" role=\"img\" aria-label=\"十位与个位计数器\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>十位与个位计数器</title><line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"90\" y1=\"125\" x2=\"330\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><circle cx=\"140\" cy=\"112\" r=\"6\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"112\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"102\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"92\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"82\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><text x=\"140\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">十位</text><text x=\"280\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">个位</text></svg>"
          }
        ]
      },
      {
        "num": "四",
        "title": "11~20数序与两数接近度辨析。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M33-4-1",
            "prompt": "13 和 18 这两个数中，哪一个数更接近 15？",
            "title": "十几两数接近度",
            "tip": "15-13=2，18-15=3，2比3小，13 离 15 更近！",
            "options": [
              {
                "text": "13 更接近 15",
                "correct": true
              },
              {
                "text": "18 更接近 15",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">11</text><line x1=\"66.11111111111111\" y1=\"62\" x2=\"66.11111111111111\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"66.11111111111111\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">12</text><line x1=\"107.22222222222223\" y1=\"62\" x2=\"107.22222222222223\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"107.22222222222223\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">13</text><line x1=\"148.33333333333331\" y1=\"62\" x2=\"148.33333333333331\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"148.33333333333331\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">14</text><line x1=\"189.44444444444446\" y1=\"62\" x2=\"189.44444444444446\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"189.44444444444446\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">15</text><line x1=\"230.55555555555554\" y1=\"62\" x2=\"230.55555555555554\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"230.55555555555554\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">16</text><line x1=\"271.66666666666663\" y1=\"62\" x2=\"271.66666666666663\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"271.66666666666663\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">17</text><line x1=\"312.77777777777777\" y1=\"62\" x2=\"312.77777777777777\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"312.77777777777777\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">18</text><line x1=\"353.8888888888889\" y1=\"62\" x2=\"353.8888888888889\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"353.8888888888889\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">19</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">20</text></svg>"
          },
          {
            "qid": "M33-4-2",
            "prompt": "与 16 相邻的两个数分别是多少？",
            "title": "十几相邻数",
            "tip": "16前面一个是15，后面一个是17，相邻的是 15 和 17！",
            "options": [
              {
                "text": "15 和 17",
                "correct": true
              },
              {
                "text": "14 和 15",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">11</text><line x1=\"66.11111111111111\" y1=\"62\" x2=\"66.11111111111111\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"66.11111111111111\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">12</text><line x1=\"107.22222222222223\" y1=\"62\" x2=\"107.22222222222223\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"107.22222222222223\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">13</text><line x1=\"148.33333333333331\" y1=\"62\" x2=\"148.33333333333331\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"148.33333333333331\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">14</text><line x1=\"189.44444444444446\" y1=\"62\" x2=\"189.44444444444446\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"189.44444444444446\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">15</text><line x1=\"230.55555555555554\" y1=\"62\" x2=\"230.55555555555554\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"230.55555555555554\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">16</text><line x1=\"271.66666666666663\" y1=\"62\" x2=\"271.66666666666663\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"271.66666666666663\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">17</text><line x1=\"312.77777777777777\" y1=\"62\" x2=\"312.77777777777777\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"312.77777777777777\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">18</text><line x1=\"353.8888888888889\" y1=\"62\" x2=\"353.8888888888889\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"353.8888888888889\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">19</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">20</text></svg>"
          },
          {
            "qid": "M33-4-3",
            "prompt": "从 11 开始数，第 5 个数是几？（包含11）",
            "title": "基数起点往后推算",
            "tip": "11(第1)、12(第2)、13(第3)、14(第4)、15(第5)，第5个数是 15！",
            "options": [
              {
                "text": "15",
                "correct": true
              },
              {
                "text": "16",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从 11 开始数</span></div>"
          },
          {
            "qid": "M33-4-4",
            "prompt": "比12大且比15小的整数有哪些？",
            "title": "十几开区间数",
            "tip": "12和15之间的数是：13 和 14！",
            "options": [
              {
                "text": "13 和 14",
                "correct": true
              },
              {
                "text": "13、14、15",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">0</text><line x1=\"43.5\" y1=\"62\" x2=\"43.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"43.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"80.5\" y1=\"62\" x2=\"80.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"80.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"117.5\" y1=\"62\" x2=\"117.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"117.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text><line x1=\"154.5\" y1=\"62\" x2=\"154.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"154.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">7</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">8</text><line x1=\"191.5\" y1=\"62\" x2=\"191.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"191.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">9</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text><line x1=\"228.5\" y1=\"62\" x2=\"228.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"228.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">11</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">12</text><line x1=\"265.5\" y1=\"62\" x2=\"265.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"265.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">13</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">14</text><line x1=\"302.5\" y1=\"62\" x2=\"302.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"302.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">15</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">16</text><line x1=\"339.5\" y1=\"62\" x2=\"339.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"339.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">17</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">18</text><line x1=\"376.5\" y1=\"62\" x2=\"376.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"376.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">19</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">20</text></svg>"
          }
        ]
      },
      {
        "num": "五",
        "title": "十几不进位加减法口算算理。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M33-5-1",
            "prompt": "口算 12 + 3 时，应该怎么想？",
            "title": "十几加几算理",
            "tip": "先算个位：2 + 3 = 5，再把1个十和5个一合起来得 15！",
            "options": [
              {
                "text": "先算 2 + 3 = 5，再算 10 + 5 = 15",
                "correct": true
              },
              {
                "text": "直接把数字连起来",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">12 + 3  = ？</span></div>"
          },
          {
            "qid": "M33-5-2",
            "prompt": "口算 17 - 4 = ？",
            "title": "十几减几不退位",
            "tip": "个位 7 - 4 = 3，十位是1，得数是 13！",
            "options": [
              {
                "text": "13",
                "correct": true
              },
              {
                "text": "14",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">17 - 4 = ？</span></div>"
          },
          {
            "qid": "M33-5-3",
            "prompt": "10 + 7 = 17，在这个加法算式中，10 和 7 都叫什么？17 叫什么？",
            "title": "加法各部分名称",
            "tip": "10和7叫做【加数】，17叫做【和】！",
            "options": [
              {
                "text": "10和7是加数，17是和",
                "correct": true
              },
              {
                "text": "10是被减数，17是差",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">10 + 7 = 17</span></div>"
          }
        ]
      },
      {
        "num": "六",
        "title": "减法各部分名称与未知数还原。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M33-6-1",
            "prompt": "在减法算式 18 - 8 = 10 中，18 叫什么？8 叫什么？10 叫什么？",
            "title": "减法各部分名称",
            "tip": "18是【被减数】，8是【减数】，10是【差】！",
            "options": [
              {
                "text": "18是被减数，8是减数，10是差",
                "correct": true
              },
              {
                "text": "18是和，8是加数",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">18 - 8 = 10</span></div>"
          },
          {
            "qid": "M33-6-2",
            "prompt": "被减数是 16，减数是 6，差是多少？",
            "title": "求差标准题",
            "tip": "16 - 6 = 10！",
            "options": [
              {
                "text": "10",
                "correct": true
              },
              {
                "text": "22",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">被减数是 16</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">减数是 6</span></div>"
          },
          {
            "qid": "M33-6-3",
            "prompt": "两个加数都是 10，和是多少？",
            "title": "两相同加数求和",
            "tip": "10 + 10 = 20！",
            "options": [
              {
                "text": "20",
                "correct": true
              },
              {
                "text": "10",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两个加数都是 10</span></div>"
          },
          {
            "qid": "M33-6-4",
            "prompt": "13 + ( ) = 17，括号里应该填几？",
            "title": "十几加法未知数",
            "tip": "17 - 13 = 4，括号里填 4！",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">13 + ( ) = 17</span></div>"
          }
        ]
      },
      {
        "num": "七",
        "title": "11~20生活情境实际问题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M33-7-1",
            "prompt": "小明有一盒铅笔共有 12 支，妈妈又奖励他 4 支，小明现在一共有多少支铅笔？",
            "title": "十几加几实际问题",
            "tip": "12 + 4 = 16 支铅笔！",
            "options": [
              {
                "text": "16 支",
                "correct": true
              },
              {
                "text": "15 支",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明有一盒铅笔共有 12 支</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">妈妈又奖励他 4 支</span></div>"
          },
          {
            "qid": "M33-7-2",
            "prompt": "超市货架上有 19 瓶牛奶，小朋友买走了 7 瓶，货架上还剩多少瓶牛奶？",
            "title": "十几减几实际问题",
            "tip": "19 - 7 = 12 瓶牛奶！",
            "options": [
              {
                "text": "12 瓶",
                "correct": true
              },
              {
                "text": "13 瓶",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">超市货架上有 19 瓶牛奶</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小朋友买走了 7 瓶</span></div>"
          },
          {
            "qid": "M33-7-3",
            "prompt": "乐乐摘了 10 个草莓，月亮摘了 8 个草莓，他们一共摘了多少个草莓？",
            "title": "整十加几应用题",
            "tip": "10 + 8 = 18 个草莓。",
            "options": [
              {
                "text": "18 个",
                "correct": true
              },
              {
                "text": "17 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐摘了 10 个草莓</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">月亮摘了 8 个草莓</span></div>"
          },
          {
            "qid": "M33-7-4",
            "prompt": "树上有 15 只鸟，飞走了 5 只，又飞走了 3 只，树上还剩几只鸟？",
            "title": "十几连减实际题",
            "tip": "15 - 5 - 3 = 7 只鸟。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">树上有 15 只鸟</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">飞走了 5 只</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又飞走了 3 只</span></div>"
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
            "qid": "M33-8-1",
            "title": "1. 综合小挑战",
            "prompt": "十位1颗珠子、个位6颗珠子，表示什么数？",
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 175\" role=\"img\" aria-label=\"十位与个位计数器\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>十位与个位计数器</title><line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"90\" y1=\"125\" x2=\"330\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><circle cx=\"140\" cy=\"112\" r=\"6\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"112\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"102\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"92\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"82\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"72\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"62\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><text x=\"140\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">十位</text><text x=\"280\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">个位</text></svg>",
            "options": [
              {
                "text": "16",
                "correct": true
              },
              {
                "text": "61",
                "correct": false
              }
            ],
            "tip": "1个十和6个一组成16。"
          },
          {
            "qid": "M33-8-2",
            "title": "2. 综合小挑战",
            "prompt": "计算14+3，结果是多少？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">计算14+3</span></div>",
            "options": [
              {
                "text": "17",
                "correct": true
              },
              {
                "text": "16",
                "correct": false
              }
            ],
            "tip": "14+3=17。"
          },
          {
            "qid": "M33-8-3",
            "title": "3. 综合小挑战",
            "prompt": "数字18中，十位的1表示什么？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">数字18中</span></div>",
            "options": [
              {
                "text": "1个十",
                "correct": true
              },
              {
                "text": "1个一",
                "correct": false
              }
            ],
            "tip": "十位上的1表示1个十。"
          }
        ]
      }
    ]
  },
  {
    "id": 34,
    "unit": "第六单元：11~20各数的认识",
    "title": "第 34 套：【进阶】十几加几与页码推算奥数卷",
    "tag": "思维培优",
    "tagColor": "bg-sky-100 text-sky-800",
    "desc": "页码两端包含真题实战、十几加减几逆推连续运算、整十与十几组合应用题。",
    "timeLimit": 25,
    "sections": [
      {
        "num": "一",
        "title": "加减算式对对碰连连看：口算连一连。",
        "score": 12,
        "type": "matching",
        "tip": "个位对齐相加减，十位1保持不变",
        "pairs": [
          {
            "target": "m34-1",
            "label": "① 11 + 5 = ？ ➕",
            "emoji": "🧮",
            "answer": "ma34-1",
            "char": "16",
            "pinyin": "shíliù"
          },
          {
            "target": "m34-2",
            "label": "② 18 - 6 = ？ ➖",
            "emoji": "🧮",
            "answer": "ma34-2",
            "char": "12",
            "pinyin": "shí'èr"
          },
          {
            "target": "m34-3",
            "label": "③ 13 + 4 = ？ ➕",
            "emoji": "🧮",
            "answer": "ma34-3",
            "char": "17",
            "pinyin": "shíqī"
          },
          {
            "target": "m34-4",
            "label": "④ 19 - 8 = ？ ➖",
            "emoji": "🧮",
            "answer": "ma34-4",
            "char": "11",
            "pinyin": "shíyī"
          },
          {
            "target": "m34-5",
            "label": "⑤ 14 + 5 = ？ ➕",
            "emoji": "🧮",
            "answer": "ma34-5",
            "char": "19",
            "pinyin": "shíjiǔ"
          },
          {
            "target": "m34-6",
            "label": "⑥ 20 - 10 = ？ ➖",
            "emoji": "🧮",
            "answer": "ma34-6",
            "char": "10",
            "pinyin": "shí"
          }
        ],
        "shuffledAnswers": [
          "ma34-2",
          "ma34-4",
          "ma34-1",
          "ma34-6",
          "ma34-3",
          "ma34-5"
        ]
      },
      {
        "num": "二",
        "title": "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        "score": 8,
        "type": "choice",
        "items": [
          {
            "qid": "M34-2-1",
            "prompt": "12 + 6 ○ 19 - 1，○里填什么符号？",
            "title": "十几加减比大小",
            "tip": "12+6=18，19-1=18，18 = 18，填等于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">12 + 6 ○ 19 - 1</span></div>"
          },
          {
            "qid": "M34-2-2",
            "prompt": "17 - 5 ○ 11 + 2，○里填什么符号？",
            "title": "算式结果对比",
            "tip": "17-5=12，11+2=13，12 < 13，填小于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">17 - 5 ○ 11 + 2</span></div>"
          },
          {
            "qid": "M34-2-3",
            "prompt": "10 + 4 ○ 16 - 2，○里填什么符号？",
            "title": "两边等式判断",
            "tip": "10+4=14，16-2=14，相等填 =。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">10 + 4 ○ 16 - 2</span></div>"
          },
          {
            "qid": "M34-2-4",
            "prompt": "20 - 5 ○ 14 + 2，○里填什么符号？",
            "title": "减与加比大小",
            "tip": "20-5=15，14+2=16，15 < 16，填小于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">20 - 5 ○ 14 + 2</span></div>"
          }
        ]
      },
      {
        "num": "三",
        "title": "页码与包含计数高难度实战。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M34-3-1",
            "prompt": "乐乐今天看一本科普画册，从第 10 页一口气读到了第 17 页。乐乐今天一共读了几页？",
            "title": "页码包含两端算式",
            "tip": "两端都读了：17 - 10 + 1 = 8 页！千万别直接算 17 - 10 = 7！",
            "options": [
              {
                "text": "8 页",
                "correct": true
              },
              {
                "text": "7 页",
                "correct": false
              },
              {
                "text": "9 页",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">11</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">12</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">13</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">14</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">15</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">16</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">17</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">18</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">19</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">20</text></svg>"
          },
          {
            "qid": "M34-3-2",
            "prompt": "月亮昨天读了第 11 页到第 15 页，今天读了第 16 页到第 19 页。两天一共读了多少页？",
            "title": "连续两天读页数",
            "tip": "昨天读了 15-11+1=5 页，今天读了 19-16+1=4 页，合起来 5 + 4 = 9 页！",
            "options": [
              {
                "text": "9 页",
                "correct": true
              },
              {
                "text": "8 页",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">昨天：11页至15页</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">今天：16页至19页</span></div>"
          },
          {
            "qid": "M34-3-3",
            "prompt": "一本书共有 20 页，小刚从第 1 页读到了第 16 页，还剩下多少页没读？",
            "title": "总页数减已读",
            "tip": "总数20页减去读过的16页：20 - 16 = 4 页没读！",
            "options": [
              {
                "text": "4 页",
                "correct": true
              },
              {
                "text": "5 页",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一本书共有 20 页</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小刚从第 1 页读到了第 16 页</span></div>"
          },
          {
            "qid": "M34-3-4",
            "prompt": "第 11 棵树和第 18 棵树之间，一共有多少棵树？",
            "title": "两树之间不含两端",
            "tip": "18 - 11 - 1 = 6 棵树！",
            "options": [
              {
                "text": "6 棵",
                "correct": true
              },
              {
                "text": "7 棵",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">11</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">12</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">13</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">14</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">15</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">16</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">17</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">18</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">19</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">20</text></svg>"
          }
        ]
      },
      {
        "num": "四",
        "title": "十几加减逆推未知数与连续口算。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M34-4-1",
            "prompt": "14 + ( ) = 19，括号里应该填几？",
            "title": "十几加法求加数",
            "tip": "19 - 14 = 5，括号里填 5！",
            "options": [
              {
                "text": "5",
                "correct": true
              },
              {
                "text": "6",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">14 + ( ) = 19</span></div>"
          },
          {
            "qid": "M34-4-2",
            "prompt": "18 - ( ) = 12，括号里应该填几？",
            "title": "十几减法求减数",
            "tip": "18 - 12 = 6，括号里填 6！",
            "options": [
              {
                "text": "6",
                "correct": true
              },
              {
                "text": "5",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">18 - ( ) = 12</span></div>"
          },
          {
            "qid": "M34-4-3",
            "prompt": "计算：12 + 3 + 4 = ？",
            "title": "十几连加计算",
            "tip": "12 + 3 = 15，15 + 4 = 19！",
            "options": [
              {
                "text": "19",
                "correct": true
              },
              {
                "text": "18",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">12 + 3 + 4 = ？</span></div>"
          },
          {
            "qid": "M34-4-4",
            "prompt": "计算：19 - 4 - 3 = ？",
            "title": "十几连减计算",
            "tip": "19 - 4 = 15，15 - 3 = 12！",
            "options": [
              {
                "text": "12",
                "correct": true
              },
              {
                "text": "13",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">19 - 4 - 3 = ？</span></div>"
          }
        ]
      },
      {
        "num": "五",
        "title": "综合数位与十进制结构辨析。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M34-5-1",
            "prompt": "20 是由几个十组成的？也可以说是由几个一组成的？",
            "title": "20的十进制组成",
            "tip": "20由 2 个十组成，也可以说由 20 个一组成！",
            "options": [
              {
                "text": "2 个十或 20 个一",
                "correct": true
              },
              {
                "text": "2 个一或 20 个十",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 120\" role=\"img\" aria-label=\"供数数比较使用的数线\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>供数数比较使用的数线</title><line x1=\"25\" y1=\"70\" x2=\"395\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"25\" y1=\"62\" x2=\"25\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"25\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">0</text><line x1=\"43.5\" y1=\"62\" x2=\"43.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"43.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">1</text><line x1=\"62\" y1=\"62\" x2=\"62\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"62\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">2</text><line x1=\"80.5\" y1=\"62\" x2=\"80.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"80.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">3</text><line x1=\"99\" y1=\"62\" x2=\"99\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"99\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">4</text><line x1=\"117.5\" y1=\"62\" x2=\"117.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"117.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">5</text><line x1=\"136\" y1=\"62\" x2=\"136\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"136\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">6</text><line x1=\"154.5\" y1=\"62\" x2=\"154.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"154.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">7</text><line x1=\"173\" y1=\"62\" x2=\"173\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"173\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">8</text><line x1=\"191.5\" y1=\"62\" x2=\"191.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"191.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">9</text><line x1=\"210\" y1=\"62\" x2=\"210\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">10</text><line x1=\"228.5\" y1=\"62\" x2=\"228.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"228.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">11</text><line x1=\"247\" y1=\"62\" x2=\"247\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"247\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">12</text><line x1=\"265.5\" y1=\"62\" x2=\"265.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"265.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">13</text><line x1=\"284\" y1=\"62\" x2=\"284\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"284\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">14</text><line x1=\"302.5\" y1=\"62\" x2=\"302.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"302.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">15</text><line x1=\"321\" y1=\"62\" x2=\"321\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"321\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">16</text><line x1=\"339.5\" y1=\"62\" x2=\"339.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"339.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">17</text><line x1=\"358\" y1=\"62\" x2=\"358\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"358\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">18</text><line x1=\"376.5\" y1=\"62\" x2=\"376.5\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"376.5\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">19</text><line x1=\"395\" y1=\"62\" x2=\"395\" y2=\"78\" stroke=\"#475569\" stroke-width=\"2\" /><text x=\"395\" y=\"101\" text-anchor=\"middle\" font-size=\"13\" fill=\"#334155\">20</text></svg>"
          },
          {
            "qid": "M34-5-2",
            "prompt": "一个两位数，个位上是 7，十位上是 1，这个数是多少？比它大 2 的数是几？",
            "title": "数位拼数与递增",
            "tip": "这个数是 17，比它大2的数是 17 + 2 = 19！",
            "options": [
              {
                "text": "数是 17，大 2 是 19",
                "correct": true
              },
              {
                "text": "数是 71，大 2 是 73",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 175\" role=\"img\" aria-label=\"十位与个位计数器\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>十位与个位计数器</title><line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"90\" y1=\"125\" x2=\"330\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\" /><circle cx=\"140\" cy=\"112\" r=\"6\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"112\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"102\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"92\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"82\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"72\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"62\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><circle cx=\"280\" cy=\"52\" r=\"4\" fill=\"white\" stroke=\"#475569\"/><text x=\"140\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">十位</text><text x=\"280\" y=\"153\" text-anchor=\"middle\" font-size=\"16\" fill=\"#334155\">个位</text></svg>"
          },
          {
            "qid": "M34-5-3",
            "prompt": "16 减去个位上的数字，还剩下多少？",
            "title": "减去个位数剩下整十",
            "tip": "个位是6，16 - 6 = 10！",
            "options": [
              {
                "text": "10",
                "correct": true
              },
              {
                "text": "1",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">16 减去个位上的数字</span></div>"
          }
        ]
      },
      {
        "num": "六",
        "title": "巧算与不等式极限拓展题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M34-6-1",
            "prompt": "方框内只填0到20的整数。在 12 + □ < 17 中，方框 □ 里最大能填几？",
            "title": "十几不等式最大值",
            "tip": "12+4=16<17, 12+5=17(不小于17)。所以最大填 4！",
            "options": [
              {
                "text": "4",
                "correct": true
              },
              {
                "text": "5",
                "correct": false
              },
              {
                "text": "3",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在 12 + □ &lt; 17 中</span></div>"
          },
          {
            "qid": "M34-6-2",
            "prompt": "方框内只填0到20的整数。在 18 - □ > 13 中，方框 □ 里最大能填几？",
            "title": "十几减法不等式最大值",
            "tip": "18-4=14>13, 18-5=13(不大于13)。所以最大填 4！",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在 18 - □ &gt; 13 中</span></div>"
          },
          {
            "qid": "M34-6-3",
            "prompt": "小红有 15 支彩笔，借给小刚 3 支后，两人的彩笔同样多。小刚原来有几支彩笔？",
            "title": "十几移多补少逆向题",
            "tip": "小红剩 15 - 3 = 12 支，此时小刚也是12支。小刚原来有 12 - 3 = 9 支！",
            "options": [
              {
                "text": "9 支",
                "correct": true
              },
              {
                "text": "12 支",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红有 15 支彩笔</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">借给小刚 3 支后</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">两人的彩笔同样多</span></div>"
          },
          {
            "qid": "M34-6-4",
            "prompt": "一排有 18 个小朋友，从前往后数小华排第 10，小华后面还有几个人？",
            "title": "十几排队求后面",
            "tip": "18 - 10 = 8 个人！",
            "options": [
              {
                "text": "8 人",
                "correct": true
              },
              {
                "text": "9 人",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">一排有 18 个小朋友</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从前往后数小华排第 10</span></div>"
          }
        ]
      },
      {
        "num": "七",
        "title": "生活实际情境综合应用题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M34-7-1",
            "prompt": "水果店运来 16 箱苹果，上午卖出 4 箱，下午卖出 2 箱，还剩下多少箱苹果？",
            "title": "十几连减水果箱数",
            "tip": "16 - 4 - 2 = 10 箱苹果！",
            "options": [
              {
                "text": "10 箱",
                "correct": true
              },
              {
                "text": "12 箱",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">水果店运来 16 箱苹果</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">上午卖出 4 箱</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">下午卖出 2 箱</span></div>"
          },
          {
            "qid": "M34-7-2",
            "prompt": "树上有 11 只松鼠，又跑来 5 只，过了一会儿跑走 2 只。现在树上有几只松鼠？",
            "title": "十几加减混合应用题",
            "tip": "11 + 5 - 2 = 14 只松鼠！",
            "options": [
              {
                "text": "14 只",
                "correct": true
              },
              {
                "text": "13 只",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">树上有 11 只松鼠</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又跑来 5 只</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">过了一会儿跑走 2 只</span></div>"
          },
          {
            "qid": "M34-7-3",
            "prompt": "妈妈买了 18 个鸡蛋，吃了 6 个后，又买了 4 个放进去。现在一共有几个鸡蛋？",
            "title": "鸡蛋存量动态变化",
            "tip": "18 - 6 + 4 = 16 个鸡蛋。",
            "options": [
              {
                "text": "16 个",
                "correct": true
              },
              {
                "text": "15 个",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">妈妈买了 18 个鸡蛋</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">吃了 6 个后</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">又买了 4 个放进去</span></div>"
          },
          {
            "qid": "M34-7-4",
            "prompt": "乐乐折了 12 只纸飞机，月亮折了 6 只纸飞机。乐乐比月亮多折了多少只？",
            "title": "十几减几求相差数",
            "tip": "12 - 6 = 6 只纸飞机。",
            "options": [
              {
                "text": "6 只",
                "correct": true
              },
              {
                "text": "5 只",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐折了 12 只纸飞机</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">月亮折了 6 只纸飞机</span></div>"
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
            "qid": "M34-8-1",
            "title": "1. 综合小挑战",
            "prompt": "从第12页读到第15页，包含两端，共几页？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">从第12页读到第15页</span></div>",
            "options": [
              {
                "text": "4 页",
                "correct": true
              },
              {
                "text": "3 页",
                "correct": false
              }
            ],
            "tip": "12、13、14、15共4页。"
          },
          {
            "qid": "M34-8-2",
            "title": "2. 综合小挑战",
            "prompt": "计算16−4，结果是多少？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">计算16−4</span></div>",
            "options": [
              {
                "text": "12",
                "correct": true
              },
              {
                "text": "13",
                "correct": false
              }
            ],
            "tip": "16−4=12。"
          },
          {
            "qid": "M34-8-3",
            "title": "3. 综合小挑战",
            "prompt": "11+□=15，方框填几？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">11+□=15</span></div>",
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
            "tip": "11+4=15。"
          }
        ]
      }
    ]
  },
  {
    "id": 35,
    "unit": "第七单元：认识钟表",
    "title": "第 35 套：【进阶】分针时针走动关系与快慢钟推理卷",
    "tag": "思维培优",
    "tagColor": "bg-purple-100 text-purple-800",
    "desc": "分针长跑得快、时针短跑得慢、分针转一圈时针走一大格、快慢钟生活时间校准推理。",
    "timeLimit": 25,
    "sections": [
      {
        "num": "一",
        "title": "钟表指针特征连连看：按钟面特征连一连。",
        "score": 12,
        "type": "matching",
        "tip": "长针分针走得快，短针时针走得慢",
        "pairs": [
          {
            "target": "m35-1",
            "label": "① 钟面上又细又长走得快的是 ⏰",
            "emoji": "⏰",
            "answer": "ma35-1",
            "char": "分针",
            "pinyin": "fēn zhēn"
          },
          {
            "target": "m35-2",
            "label": "② 钟面上又粗又短走得慢的是 🕰️",
            "emoji": "🕰️",
            "answer": "ma35-2",
            "char": "时针",
            "pinyin": "shí zhēn"
          },
          {
            "target": "m35-3",
            "label": "③ 分针走一圈（60小格），时针 🔄",
            "emoji": "🔄",
            "answer": "ma35-3",
            "char": "走一大格(1小时)",
            "pinyin": "yī dà gé"
          },
          {
            "target": "m35-4",
            "label": "④ 整时时刻分针永远指着 ⬆️",
            "emoji": "⬆️",
            "answer": "ma35-4",
            "char": "数字 12",
            "pinyin": "shí'èr"
          },
          {
            "target": "m35-5",
            "label": "⑤ 半时时刻分针永远指着 ⬇️",
            "emoji": "⬇️",
            "answer": "ma35-5",
            "char": "数字 6",
            "pinyin": "liù"
          },
          {
            "target": "m35-6",
            "label": "⑥ 12时整时针和分针 🤝",
            "emoji": "🤝",
            "answer": "ma35-6",
            "char": "正好重合在一起",
            "pinyin": "chóng hé"
          }
        ],
        "shuffledAnswers": [
          "ma35-2",
          "ma35-4",
          "ma35-1",
          "ma35-6",
          "ma35-3",
          "ma35-5"
        ]
      },
      {
        "num": "二",
        "title": "比大小与符号小法官：选择○里应填的 >、< 或 = 。",
        "score": 8,
        "type": "choice",
        "items": [
          {
            "qid": "M35-2-1",
            "prompt": "分针的长度 ○ 时针的长度，○里填什么符号？",
            "title": "指针长短对比",
            "tip": "分针长，时针短，填大于号（>）。",
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
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"141\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>"
          },
          {
            "qid": "M35-2-2",
            "prompt": "分针走1圈的时间 ○ 时针走1大格的时间，○里填什么符号？",
            "title": "等量时间单位换算",
            "tip": "分针走1圈是1小时，时针走1大格也是1小时，时间完全相等，填 =！",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">分针走1圈的时间 ○ 时针走1大格的时间</span></div>"
          },
          {
            "qid": "M35-2-3",
            "prompt": "上午 10 时 ○ 上午 8 时，○里填什么符号？",
            "title": "时刻先后与大小",
            "tip": "10时比8时晚2小时：10 > 8，填大于号。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">上午 10 时 ○ 上午 8 时</span></div>"
          },
          {
            "qid": "M35-2-4",
            "prompt": "同一天上午，9时过1小时后的时刻 ○ 上午9时，○里填什么符号？",
            "title": "未来时刻比大小",
            "tip": "9时过1小时是10时，10>9。跨过12时不能一概认为钟面数字增加。",
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
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">同一天上午，9时过1小时后的时刻 ○ 上午9时</span></div>"
          }
        ]
      },
      {
        "num": "三",
        "title": "快慢钟与标准时间校准推理。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M35-3-1",
            "prompt": "【极高频生活易错题】小明家的挂钟比北京时间慢了 1 小时。现在挂钟上显示是 4:00，标准北京时间应该是几点？",
            "title": "慢钟校准标准时间",
            "tip": "挂钟显示的时刻比标准时间落后1小时，标准时间是4时再加1小时，即5时。慢1小时表示时刻偏差，不一定是走动速度慢。",
            "options": [
              {
                "text": "5:00",
                "correct": true
              },
              {
                "text": "3:00",
                "correct": false
              },
              {
                "text": "4:00",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"247.23909236273087\" y2=\"119.49999999999999\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>"
          },
          {
            "qid": "M35-3-2",
            "prompt": "小红的手表比标准时间快了 1 小时。现在手表显示是 9:00，实际标准时间是几点？",
            "title": "快钟校准标准时间",
            "tip": "手表显示的时刻比标准时间提前1小时，所以标准时间是9时减1小时，即8时。",
            "options": [
              {
                "text": "8:00",
                "correct": true
              },
              {
                "text": "10:00",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"167\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>"
          },
          {
            "qid": "M35-3-3",
            "prompt": "闹钟现在显示 7 时整，过 2 小时后小明要去上足球课，足球课开始的时刻是几时？",
            "title": "过几小时计算",
            "tip": "7 + 2 = 9 时整！",
            "options": [
              {
                "text": "9 时",
                "correct": true
              },
              {
                "text": "8 时",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"188.5\" y2=\"135.23909236273087\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>"
          },
          {
            "qid": "M35-3-4",
            "prompt": "电影在 11:00 结束，放映了 2 小时。电影是几点开始放映的？",
            "title": "倒推开始时刻",
            "tip": "11 - 2 = 9:00（9时开始）！",
            "options": [
              {
                "text": "9:00",
                "correct": true
              },
              {
                "text": "10:00",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"188.49999999999997\" y2=\"60.76090763726915\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>"
          }
        ]
      },
      {
        "num": "四",
        "title": "特殊指针夹角与形态观察。",
        "score": 16,
        "type": "choice",
        "items": [
          {
            "qid": "M35-4-1",
            "prompt": "在 6 时整的时候，钟面上的时针和分针呈现出什么形状？",
            "title": "6时整指针成一条直线",
            "tip": "分针指着12正向上，时针指着6正向下，两针连成一条【笔直的直线】！",
            "options": [
              {
                "text": "成一条笔直的直线",
                "correct": true
              },
              {
                "text": "重合在一起",
                "correct": false
              },
              {
                "text": "成直角",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"141\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>"
          },
          {
            "qid": "M35-4-2",
            "prompt": "在 12 时整的时候，钟面上的时针和分针呈现出什么位置关系？",
            "title": "12时整指针重合",
            "tip": "时针和分针都指向12，完全【重合在一起】！",
            "options": [
              {
                "text": "完全重合在一起",
                "correct": true
              },
              {
                "text": "两针指向相反的方向",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"55\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>"
          },
          {
            "qid": "M35-4-3",
            "prompt": "在 3 时整和 9 时整的时候，时针和分针成什么角？",
            "title": "整时直角现象",
            "tip": "3时和9时，时针与分针互相垂直，形成标准的【直角】！",
            "options": [
              {
                "text": "成直角（方角）",
                "correct": true
              },
              {
                "text": "成平角（直线）",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"253\" y2=\"98\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"167\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>"
          },
          {
            "qid": "M35-4-4",
            "prompt": "时针从数字 1 走到数字 4，一共经过了几小时？",
            "title": "时针大格跨度",
            "tip": "4 - 1 = 3 大格，经过了 3 小时！",
            "options": [
              {
                "text": "3 小时",
                "correct": true
              },
              {
                "text": "4 小时",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"只有刻度和数字的钟面\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>只有刻度和数字的钟面</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /></svg>"
          }
        ]
      },
      {
        "num": "五",
        "title": "电子钟与大钟时刻对应。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M35-5-1",
            "prompt": "电子表上显示“08:00”，用汉字表示是几时？",
            "title": "电子钟读法",
            "tip": "表示 8 时整！",
            "options": [
              {
                "text": "8 时",
                "correct": true
              },
              {
                "text": "80 时",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">08:00</span></div>"
          },
          {
            "qid": "M35-5-2",
            "prompt": "分针指着 12，时针指着 11，现在是几时？过 1 小时是几时？",
            "title": "整时及其后一小时",
            "tip": "现在是 11 时，过 1 小时是 12 时！",
            "options": [
              {
                "text": "现在 11 时，过 1 小时是 12 时",
                "correct": true
              },
              {
                "text": "现在 12 时，过 1 小时是 1 时",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"188.49999999999997\" y2=\"60.76090763726915\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>"
          },
          {
            "qid": "M35-5-3",
            "prompt": "钟面上共有多少个大格？每个大格之间有小格。",
            "title": "钟面大格总数常识",
            "tip": "从数字1到12，钟面上共有 12 个大格！",
            "options": [
              {
                "text": "12 个大格",
                "correct": true
              },
              {
                "text": "10 个大格",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"只有刻度和数字的钟面\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>只有刻度和数字的钟面</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /></svg>"
          }
        ]
      },
      {
        "num": "六",
        "title": "生活作息先后顺序逻辑判断。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M35-6-1",
            "prompt": "小学生星期一的一天作息：A. 早上7:30起床 B. 中午12:00吃午饭 C. 晚上9:00睡觉 D. 下午4:30放学。先后顺序是？",
            "title": "一日作息时间排序",
            "tip": "按时间先后顺序：A -> B -> D -> C！",
            "options": [
              {
                "text": "A → B → D → C",
                "correct": true
              },
              {
                "text": "A → D → B → C",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">A：早上7:30起床</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">B：中午12:00午饭</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">C：晚上9:00睡觉</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">D：下午4:30放学</span></div>"
          },
          {
            "qid": "M35-6-2",
            "prompt": "小明的上学时间在早晨。下面哪个时刻符合这个条件？",
            "title": "早晨时刻辨识",
            "tip": "三个选项中，只有早上7时是早晨。日出时间随地点和季节变化。",
            "options": [
              {
                "text": "早上 7 时",
                "correct": true
              },
              {
                "text": "中午 12 时",
                "correct": false
              },
              {
                "text": "晚上 8 时",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小明在早晨上学</span></div>"
          },
          {
            "qid": "M35-6-3",
            "prompt": "电视节目表写着“晚上7:00开始”。换成24时计时法，是几点？",
            "title": "节目表的24时计时法",
            "tip": "晚上7时对应19时，即19:00。",
            "options": [
              {
                "text": "19:00",
                "correct": true
              },
              {
                "text": "21:00",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">节目表：晚上7:00开始</span></div>"
          },
          {
            "qid": "M35-6-4",
            "prompt": "分针从 12 走一圈又回到 12，时针从 2 走到了几？",
            "title": "时针走动1大格",
            "tip": "分针走一圈，时针走一大格：2 + 1 = 3！走到 3！",
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
                "text": "12",
                "correct": false
              }
            ],
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"247.23909236273084\" y2=\"76.5\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>"
          }
        ]
      },
      {
        "num": "七",
        "title": "综合时间计算实际应用题。",
        "score": 12,
        "type": "choice",
        "items": [
          {
            "qid": "M35-7-1",
            "prompt": "乐乐上午 8 时到校，在学校学习了 4 小时后吃午饭。乐乐吃午饭的时刻是几时？",
            "title": "在校时长推算",
            "tip": "8 + 4 = 12 时（中午12点）！",
            "options": [
              {
                "text": "12 时",
                "correct": true
              },
              {
                "text": "11 时",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">乐乐上午 8 时到校</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">在学校学习了 4 小时后吃午饭</span></div>"
          },
          {
            "qid": "M35-7-2",
            "prompt": "小红下午 2 时开始写作业，写了 1 小时，接着看动画片看 1 小时。小红看完动画片是几时？",
            "title": "连续两项活动累计时长",
            "tip": "2 + 1 + 1 = 4 时（下午4时）！",
            "options": [
              {
                "text": "4 时",
                "correct": true
              },
              {
                "text": "3 时",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">小红下午 2 时开始写作业</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">写了 1 小时</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">接着看动画片看 1 小时</span></div>"
          },
          {
            "qid": "M35-7-3",
            "prompt": "火车原本应该在上午 10 时到达，现在晚点了 1 小时。火车将在几时到达？",
            "title": "晚点加法计算",
            "tip": "晚点推迟：10 + 1 = 11 时到达！",
            "options": [
              {
                "text": "11 时",
                "correct": true
              },
              {
                "text": "9 时",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">现在晚点了 1 小时</span></div>"
          },
          {
            "qid": "M35-7-4",
            "prompt": "爸爸早上 7 时出门跑步，跑了 1 小时回家吃早饭。爸爸吃早饭是几时？",
            "title": "晨跑时间推算",
            "tip": "7 + 1 = 8 时。",
            "options": [
              {
                "text": "8 时",
                "correct": true
              },
              {
                "text": "9 时",
                "correct": false
              }
            ],
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">爸爸早上 7 时出门跑步</span><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">跑了 1 小时回家吃早饭</span></div>"
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
            "qid": "M35-8-1",
            "title": "1. 综合小挑战",
            "prompt": "分针走一圈，时针通常走几大格？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">分针走一圈</span></div>",
            "options": [
              {
                "text": "1 大格",
                "correct": true
              },
              {
                "text": "12 大格",
                "correct": false
              }
            ],
            "tip": "1小时内，分针1圈，时针1大格。"
          },
          {
            "qid": "M35-8-2",
            "title": "2. 综合小挑战",
            "prompt": "上午8时过2小时，是上午几时？",
            "visual": "<div class=\"flex flex-wrap justify-center gap-3 p-3 border border-slate-300 rounded-xl bg-white text-sm text-slate-800\"><span class=\"px-3 py-2 border border-slate-300 rounded-lg\">上午8时过2小时</span></div>",
            "options": [
              {
                "text": "10 时",
                "correct": true
              },
              {
                "text": "9 时",
                "correct": false
              }
            ],
            "tip": "8+2=10。"
          },
          {
            "qid": "M35-8-3",
            "title": "3. 综合小挑战",
            "prompt": "时针和分针都指12，读作几时整？",
            "visual": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 196\" role=\"img\" aria-label=\"钟面示意：长针表示分针，短针表示时针\" style=\"width:100%;max-width:420px;height:auto;color:#334155\"><title>钟面示意：长针表示分针，短针表示时针</title><circle cx=\"210\" cy=\"98\" r=\"83\" fill=\"white\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"242.5\" y=\"47.70834875401148\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">1</text><text x=\"266.29165124598853\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">2</text><text x=\"275\" y=\"104\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">3</text><text x=\"266.29165124598853\" y=\"136.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">4</text><text x=\"242.5\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">5</text><text x=\"210\" y=\"169\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">6</text><text x=\"177.50000000000003\" y=\"160.29165124598853\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">7</text><text x=\"153.7083487540115\" y=\"136.50000000000003\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">8</text><text x=\"145\" y=\"104.00000000000001\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">9</text><text x=\"153.7083487540115\" y=\"71.5\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">10</text><text x=\"177.49999999999997\" y=\"47.7083487540115\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">11</text><text x=\"209.99999999999997\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" fill=\"#334155\">12</text><line x1=\"210\" y1=\"19\" x2=\"210\" y2=\"26\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"19.432770265906413\" x2=\"217.94416320834165\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"20.72633954202935\" x2=\"225.8012885021497\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"22.866535212682876\" x2=\"233.485291572496\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"25.82990884623453\" x2=\"240.91198487376082\" y2=\"28.57054521916234\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"29.583993101029336\" x2=\"246\" y2=\"35.646170927520416\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"34.087657444379154\" x2=\"254.67167917422796\" y2=\"36.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"39.29155878728586\" x2=\"260.8539260832732\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"45.1386820976502\" x2=\"266.479006736282\" y2=\"47.14607391672678\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"51.56496506889462\" x2=\"271.485291572496\" y2=\"53.32832082577204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"58.49999999999999\" x2=\"272.3538290724796\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"65.86780519701176\" x2=\"279.42945478083766\" y2=\"67.08801512623917\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.1334647873171\" y1=\"73.58765744437915\" x2=\"282.2802952384317\" y2=\"74.51470842750399\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"81.57497642539703\" x2=\"284.33921765576923\" y2=\"82.1987114978503\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"89.74225140185538\" x2=\"285.5836640479888\" y2=\"90.05583679165834\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"289\" y1=\"97.99999999999997\" x2=\"282\" y2=\"97.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"288.5672297340936\" y1=\"106.25774859814462\" x2=\"285.5836640479888\" y2=\"105.94416320834165\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"287.27366045797066\" y1=\"114.42502357460299\" x2=\"284.33921765576923\" y2=\"113.8012885021497\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"285.13346478731717\" y1=\"122.41234255562084\" x2=\"282.2802952384317\" y2=\"121.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"282.1700911537655\" y1=\"130.1321948029882\" x2=\"279.42945478083766\" y2=\"128.91198487376082\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"278.41600689897064\" y1=\"137.5\" x2=\"272.3538290724796\" y2=\"134\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"273.91234255562085\" y1=\"144.43503493110538\" x2=\"271.485291572496\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"268.70844121271415\" y1=\"150.86131790234978\" x2=\"266.479006736282\" y2=\"148.8539260832732\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"262.8613179023498\" y1=\"156.70844121271415\" x2=\"260.8539260832732\" y2=\"154.47900673628195\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"256.4350349311054\" y1=\"161.91234255562085\" x2=\"254.67167917422796\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"249.5\" y1=\"166.41600689897066\" x2=\"246\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"242.1321948029882\" y1=\"170.1700911537655\" x2=\"240.91198487376082\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"234.41234255562085\" y1=\"173.1334647873171\" x2=\"233.485291572496\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"226.425023574603\" y1=\"175.27366045797066\" x2=\"225.8012885021497\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"218.25774859814462\" y1=\"176.5672297340936\" x2=\"217.94416320834165\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210.00000000000006\" y1=\"177\" x2=\"210.00000000000003\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.7422514018554\" y1=\"176.5672297340936\" x2=\"202.05583679165838\" y2=\"173.58366404798878\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"175.27366045797066\" x2=\"194.1987114978503\" y2=\"172.33921765576923\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437918\" y1=\"173.13346478731714\" x2=\"186.51470842750402\" y2=\"170.28029523843168\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"170.17009115376547\" x2=\"179.08801512623918\" y2=\"167.42945478083766\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"166.41600689897066\" x2=\"174.00000000000003\" y2=\"160.35382907247958\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.56496506889462\" y1=\"161.91234255562085\" x2=\"165.32832082577204\" y2=\"159.485291572496\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.1386820976502\" y1=\"156.70844121271415\" x2=\"159.14607391672678\" y2=\"154.47900673628197\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"150.8613179023498\" x2=\"153.52099326371805\" y2=\"148.85392608327325\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"144.43503493110538\" x2=\"148.514708427504\" y2=\"142.67167917422796\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"137.50000000000003\" x2=\"147.64617092752042\" y2=\"134.00000000000003\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.82990884623456\" y1=\"130.13219480298827\" x2=\"140.57054521916234\" y2=\"128.91198487376087\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.8665352126829\" y1=\"122.41234255562085\" x2=\"137.71970476156832\" y2=\"121.48529157249601\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"114.42502357460302\" x2=\"135.66078234423077\" y2=\"113.80128850214975\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"106.25774859814469\" x2=\"134.41633595201122\" y2=\"105.94416320834172\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131\" y1=\"98.00000000000001\" x2=\"138\" y2=\"98.00000000000001\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"131.4327702659064\" y1=\"89.74225140185541\" x2=\"134.41633595201122\" y2=\"90.05583679165838\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"132.72633954202936\" y1=\"81.57497642539701\" x2=\"135.66078234423077\" y2=\"82.19871149785028\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"134.86653521268286\" y1=\"73.58765744437918\" x2=\"137.71970476156832\" y2=\"74.51470842750402\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"137.8299088462345\" y1=\"65.86780519701182\" x2=\"140.5705452191623\" y2=\"67.08801512623921\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"141.58399310102936\" y1=\"58.49999999999999\" x2=\"147.64617092752042\" y2=\"61.99999999999999\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"146.08765744437915\" y1=\"51.56496506889464\" x2=\"148.514708427504\" y2=\"53.32832082577206\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"151.29155878728588\" y1=\"45.13868209765018\" x2=\"153.52099326371805\" y2=\"47.146073916726756\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"157.13868209765022\" y1=\"39.29155878728586\" x2=\"159.14607391672678\" y2=\"41.52099326371804\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"163.5649650688946\" y1=\"34.08765744437916\" x2=\"165.32832082577204\" y2=\"36.514708427504004\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"170.50000000000003\" y1=\"29.583993101029336\" x2=\"174.00000000000003\" y2=\"35.6461709275204\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"177.8678051970118\" y1=\"25.829908846234517\" x2=\"179.08801512623918\" y2=\"28.570545219162327\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"185.58765744437915\" y1=\"22.866535212682876\" x2=\"186.514708427504\" y2=\"25.719704761568337\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"193.57497642539704\" y1=\"20.72633954202935\" x2=\"194.19871149785033\" y2=\"23.660782344230768\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"201.74225140185538\" y1=\"19.432770265906413\" x2=\"202.05583679165835\" y2=\"22.416335952011224\" stroke=\"#475569\" stroke-width=\"2\" /><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"55\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"stroke-width:5\"/><line x1=\"210\" y1=\"98\" x2=\"210\" y2=\"32\" stroke=\"#475569\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"98\" r=\"4\" fill=\"#475569\"/></svg>",
            "options": [
              {
                "text": "12 时",
                "correct": true
              },
              {
                "text": "6 时",
                "correct": false
              }
            ],
            "tip": "两针都指12，是12时整。"
          }
        ]
      }
    ]
  }
];
