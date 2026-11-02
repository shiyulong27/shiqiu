// 交卷统一判分；选择状态与判题结果分开，避免修改答案时重复加分。
window.QUIZ_GRADING = {
  normalizeResponse(value) {
    return String(value ?? '').normalize('NFKC').trim().toLowerCase()
      .replace(/[\s,，;；、。]/g, '').replace(/[−–—]/g, '-').replace(/×/g, 'x');
  },

  gradeResponse(item, answers) {
    const raw = answers[item.qid];
    const drawing = answers['drawing:' + item.qid];
    const unanswered = (raw === undefined || String(raw).trim() === '') && !drawing;
    const value = this.normalizeResponse(raw);
    let isCorrect = false;
    let awardedPoints = 0;
    let pendingReview = false;
    let reference = item.mode === 'choice' ? item.options[item.answer] : item.reference || (item.answers || []).join(' / ');
    if (item.mode === 'manual') {
      const mark = answers['review:' + item.qid];
      pendingReview = !unanswered && (typeof mark !== 'number' || !Number.isFinite(mark));
      awardedPoints = unanswered || pendingReview ? 0 : Math.max(0, Math.min(item.points, mark));
      isCorrect = !unanswered && awardedPoints === item.points;
    } else if (!unanswered) {
      if (item.mode === 'choice') {
        isCorrect = raw === item.answer;
        reference = item.options[item.answer];
      } else if (item.mode === 'set') {
        const tokens = text => {
          const normalized = String(text).normalize('NFKC');
          const pieces = /[;；、,，]/.test(normalized) ? normalized.split(/[;；、,，]+/) : normalized.trim().split(/\s+/);
          return pieces.filter(Boolean).map(v => this.normalizeResponse(v)).sort();
        };
        const actual = tokens(raw);
        isCorrect = (item.answers || []).some(answer => {
          const expected = tokens(answer);
          const candidates = /^\d+$/.test(value) && expected.every(token => /^\d$/.test(token)) ? value.split('').sort() : actual;
          return JSON.stringify(candidates) === JSON.stringify(expected);
        });
      } else if (item.mode === 'integer') {
        const number = Number(value);
        isCorrect = /^\d+$/.test(value) && Number.isInteger(number) && number >= (item.min ?? 0) && number <= (item.max ?? Infinity);
      } else if (item.mode === 'sequence') {
        const tokens = text => String(text).normalize('NFKC').trim().split(/[\s,，;；、]+/).map(v=>this.normalizeResponse(v));
        isCorrect = item.answers.some(answer=>JSON.stringify(tokens(raw))===JSON.stringify(tokens(answer)));
      } else if (item.mode === 'lessPair' || item.mode === 'equalSums' || item.mode === 'sumPair') {
        const numbers = String(raw).normalize('NFKC').trim().split(/[\s,，;；、]+/).map(v => /^\d+$/.test(v) ? Number(v) : NaN);
        isCorrect = item.mode === 'sumPair' ? numbers.length === 2 && numbers.every(n=>Number.isInteger(n)&&n>=0) && numbers[0]+numbers[1]===item.sum : item.mode === 'lessPair'
          ? numbers.length === 2 && numbers.every(Number.isFinite) && numbers[0] < numbers[1]
          : numbers.length === 6 && new Set(numbers).size === 6 && numbers.every(n => Number.isInteger(n) && n >= 0 && n <= 5)
            && numbers[0] + numbers[1] === numbers[2] + numbers[3] && numbers[2] + numbers[3] === numbers[4] + numbers[5];
      } else {
        isCorrect = (item.answers || []).some(answer => {
          const actual = String(answer).includes('=') ? value.replace(/(?:\((?:个|只|条|人|瓶|棵|幅)\)|个|只|条|人|瓶|棵|幅)$/,'') : value;
          return actual === this.normalizeResponse(answer);
        });
      }
      awardedPoints = isCorrect ? item.points : 0;
    }
    return { qid: item.qid, title: item.title, prompt: item.prompt,
      userAnswer: unanswered ? '未作答' : item.mode === 'choice' ? item.options[raw] : (String(raw || '') + (drawing ? '（已在画板作答）' : '')),
      correctAnswer: reference, tip: reference, points: item.points, awardedPoints,
      isCorrect, unanswered, pendingReview, manual: item.mode === 'manual' };
  },

  shuffle(items, random = Math.random) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  },

  grade(paper, answers, matches, acknowledgements = {}) {
    const results = [];
    paper.sections.forEach((section, sectionIndex) => {
      if (section.type === 'matching') {
        section.pairs.forEach(pair => {
          const selected = section.pairs.find(p => p.answer === matches[pair.target]);
          results.push({
            qid: 'match_' + pair.target,
            title: section.title,
            prompt: `【连线配对】${pair.label}`,
            userAnswer: selected ? selected.char : '未作答',
            correctAnswer: pair.char,
            tip: `${pair.label}对应${pair.char}。`,
            points: section.score / section.pairs.length,
            isCorrect: !!selected && selected.char === pair.char && selected.pinyin === pair.pinyin,
            unanswered: !selected
          });
        });
      } else if (section.type === 'choice') {
        section.items.forEach(item => {
          const selected = item.options[answers[item.qid]];
          results.push({
            qid: item.qid, title: item.title, prompt: item.prompt,
            userAnswer: selected ? selected.text : '未作答',
            correctAnswer: item.options.filter(o => o.correct).map(o => o.text).join(' / '),
            tip: item.tip, points: section.score / section.items.length,
            isCorrect: !!selected?.correct, unanswered: !selected
          });
        });
      } else if (section.type === 'response') {
        section.items.forEach(item => results.push(this.gradeResponse(item, answers)));
      } else if (section.type === 'poem') {
        // 兼容其他试卷已有的朗读自评题；第21套已改为客观题。
        section.buttons.forEach((button, i) => {
          const qid = `poem-${sectionIndex}-${i}`;
          results.push({
            qid, title: section.title, prompt: button.label,
            userAnswer: acknowledgements[qid] ? '已确认' : '未作答',
            correctAnswer: '完成对应朗读或练习', tip: section.text,
            points: button.pts, isCorrect: !!acknowledgements[qid],
            unanswered: !acknowledgements[qid]
          });
        });
      }
    });
    const rawScore = results.reduce((sum, r) => sum + (r.awardedPoints ?? (r.isCorrect ? r.points : 0)), 0);
    const maxScore = paper.maxScore || 100;
    return {
      score: Math.round(rawScore * 100 / maxScore), rawScore, maxScore,
      pendingReview: results.some(r => r.pendingReview),
      correct: results.filter(r => r.isCorrect).length,
      wrong: results.filter(r => !r.isCorrect && !r.unanswered).length,
      unanswered: results.filter(r => r.unanswered).length,
      results
    };
  }
};
