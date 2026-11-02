// 原卷填空与开放题适配；复用既有交卷、历史和错题本。
window.ORIGINAL_PAPER_UI = (() => {
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const image = (src, alt) => `<img src="${escape(src)}" alt="${escape(alt)}" loading="lazy" class="max-w-full h-auto mx-auto border border-slate-200 rounded-lg">`;
  const interaction = item => window.ORIGINAL_PAPER_INTERACTIONS?.[item.qid];

  function pictureAnswer(item, config) {
    const [x,y,w,h] = config.crop;
    const circle = config.mark === '○';
    return `<p class="text-xs text-slate-600 my-2 no-print">${config.multiple ? '点击图中各项圈选，可多选' : circle ? '直接点击图中答案圈选' : `直接点击图中方框，标记“${escape(config.mark)}”`}；再点一次可取消。</p><div data-picture-answer="${escape(item.qid)}" role="group" aria-label="${escape(item.prompt)}" style="position:relative;width:100%;max-width:560px;margin:12px auto"><svg viewBox="${x} ${y} ${w} ${h}" role="img" aria-label="${escape(item.prompt)}原图" style="display:block;width:100%;height:auto"><image href="${escape(config.image)}" width="${config.size[0]}" height="${config.size[1]}" /></svg>${config.targets.map(t => `<button type="button" data-picture-qid="${escape(item.qid)}" data-value="${escape(t.value)}" data-multiple="${config.multiple}" data-circle="${circle}" aria-label="${escape(item.prompt)}：${escape(t.value)}" aria-pressed="false" style="position:absolute;left:${t.x+t.w/2}%;top:${t.y+t.h/2}%;width:max(44px,${t.w}%);height:max(44px,${t.h}%);transform:translate(-50%,-50%);padding:0;border:3px solid transparent;border-radius:${circle?'50%':'6px'};background:transparent;color:#dc2626;font-size:clamp(24px,5vw,38px);font-weight:bold;cursor:pointer;touch-action:manipulation"><span aria-hidden="true" style="visibility:hidden">${circle?'':escape(config.mark)}</span></button>`).join('')}</div>`;
  }

  function render(section) {
    const page = section.originalPage ? `<details class="mb-4"><summary class="cursor-pointer font-bold text-sm">${escape(section.originalPageLabel)}</summary>${image(section.originalPage, section.originalPageLabel)}</details>` : '';
    const inlineImages = new Set(section.items.map(item => interaction(item)?.image).filter(Boolean));
    const figures = (section.figures || (section.visual ? [section.visual] : [])).filter(src => !inlineImages.has(src))
      .map((src, i) => `<figure class="my-3">${image(src, `${section.title} 原图${i + 1}`)}</figure>`).join('');
    const passage = section.passage ? `<div class="whitespace-pre-line bg-white border rounded-xl p-4 mb-4 text-sm leading-loose">${escape(section.passage)}</div>` : '';
    return page + figures + passage + section.items.map(item => {
      let control;
      const config = interaction(item);
      const drawingOnly = item.drawing && /^original-math-(41|42|43)-/.test(item.qid);
      if (config) {
        control = pictureAnswer(item, config);
      } else if (item.mode === 'choice') {
        control = `<div class="flex flex-wrap gap-2 mt-2">${item.options.map((option, index) => `<button type="button" data-response-choice="${escape(item.qid)}" data-index="${index}" aria-pressed="false" class="response-choice opt-btn px-3 py-2 bg-slate-100 rounded-lg text-sm">${String.fromCharCode(65 + index)}. ${escape(option)}</button>`).join('')}</div>`;
      } else if (item.mode === 'manual') {
        control = drawingOnly ? '' : `<textarea data-response-input="${escape(item.qid)}" aria-label="${escape(item.prompt)}" rows="3" class="w-full border border-slate-300 rounded-lg p-2 mt-2 text-base text-slate-900" placeholder="在这里作答；不会写的字可用拼音"></textarea>`;
        if (item.drawing) control += `<div class="mt-2"><p class="text-xs text-slate-500 no-print">可用鼠标或手指在画板上书写、圈画。</p><canvas data-drawing="${escape(item.qid)}" data-image="${escape(item.image || '')}" width="900" height="220" aria-label="${escape(item.prompt)}画板" class="w-full bg-white border border-slate-300 rounded-lg" style="touch-action:none"></canvas><button type="button" data-clear-drawing="${escape(item.qid)}" class="text-xs text-slate-600 border rounded px-2 py-1 mt-1 no-print">清空画板</button></div>`;
        control += '<p class="text-xs text-slate-500 mt-1 no-print">交卷时由家长参照答案复核计分。</p>';
      } else {
        control = `<input type="text" autocomplete="off" data-response-input="${escape(item.qid)}" aria-label="${escape(item.prompt)}" class="w-full border border-slate-300 rounded-lg p-2 mt-2 text-base text-slate-900" placeholder="多个空按顺序填写，用空格或分号隔开">`;
      }
      const prompt = config ? item.prompt.replace(/（在线填写[^）]*）/g,'').replace(/（填序号[^）]*）/g,'').replace('在线填写','点击选择') : item.prompt;
      return `<div class="response-group bg-white border border-slate-200 rounded-xl p-3 my-3" data-response-qid="${escape(item.qid)}"><label class="block text-sm font-medium">${escape(prompt)} <span class="text-xs text-slate-500">（${item.points}分）</span></label>${item.image && !item.drawing && !config ? image(item.image,item.prompt) : ''}${control}</div>`;
    }).join('');
  }

  function bind(container, answers, submitted) {
    container.querySelectorAll('[data-picture-qid]').forEach(button => button.addEventListener('click', () => {
      if (submitted()) return;
      const qid = button.dataset.pictureQid;
      const value = button.dataset.value;
      if (button.dataset.multiple === 'true') {
        const selected = new Set(String(answers[qid] || '').split(' ').filter(Boolean));
        if (selected.has(value)) selected.delete(value);else selected.add(value);
        if (selected.size) answers[qid] = [...selected].join(' ');else delete answers[qid];
      } else if (answers[qid] === value) delete answers[qid];
      else answers[qid] = value;
      container.querySelectorAll('[data-picture-qid]').forEach(other => {
        if (other.dataset.pictureQid !== qid) return;
        const selected = String(answers[qid] || '').split(' ').includes(other.dataset.value);
        other.setAttribute('aria-pressed', String(selected));
        other.style.borderColor = selected && other.dataset.circle === 'true' ? '#dc2626' : 'transparent';
        other.querySelector('span').style.visibility = selected ? 'visible' : 'hidden';
      });
    }));
    container.querySelectorAll('[data-response-input]').forEach(control => control.addEventListener('input', () => {
      if (!submitted()) {
        answers[control.dataset.responseInput] = control.value;
        if (control.tagName === 'TEXTAREA') { control.style.height = 'auto';control.style.height = control.scrollHeight + 'px'; }
      }
    }));
    container.querySelectorAll('[data-response-choice]').forEach(button => button.addEventListener('click', () => {
      if (submitted()) return;
      const qid = button.dataset.responseChoice;
      answers[qid] = Number(button.dataset.index);
      container.querySelectorAll('[data-response-choice]').forEach(other => {
        if (other.dataset.responseChoice !== qid) return;
        const selected = other === button;
        other.classList.toggle('answer-selected', selected);
        other.setAttribute('aria-pressed', String(selected));
      });
    }));
    container.querySelectorAll('[data-drawing]').forEach(canvas => {
      const ctx = canvas.getContext('2d');
      let background = null;
      let down = false;
      const paintBackground = () => {
        ctx.fillStyle = '#fff';ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (background) ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      };
      paintBackground();
      if (canvas.dataset.image) {
        const source = new Image();
        source.onload = () => {
          background = source;
          canvas.height = Math.round(canvas.width * source.naturalHeight / source.naturalWidth);
          paintBackground();
        };
        source.src = canvas.dataset.image;
      }
      const point = event => {
        const rect = canvas.getBoundingClientRect();
        return [(event.clientX - rect.left) * canvas.width / rect.width, (event.clientY - rect.top) * canvas.height / rect.height];
      };
      canvas.addEventListener('pointerdown', event => {
        if (submitted() || (canvas.dataset.image && !background)) return;
        down = true;canvas.setPointerCapture(event.pointerId);
        const [x,y] = point(event);
        ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+0.1,y+0.1);
        ctx.strokeStyle = '#dc2626';ctx.lineWidth = 4;ctx.lineCap = 'round';ctx.stroke();
      });
      canvas.addEventListener('pointermove', event => {
        if (!down || submitted()) return;
        ctx.lineTo(...point(event));ctx.stroke();
      });
      const finish = () => {
        if (!down) return;
        down = false;answers['drawing:' + canvas.dataset.drawing] = canvas.toDataURL('image/png');
      };
      canvas.addEventListener('pointerup', finish);
      canvas.addEventListener('pointercancel', finish);
      container.querySelector(`[data-clear-drawing="${canvas.dataset.drawing}"]`).addEventListener('click', () => {
        if (submitted()) return;
        paintBackground();delete answers['drawing:' + canvas.dataset.drawing];
      });
    });
  }

  function review(paper, answers, onConfirm) {
    if (!paper.source) return false;
    const items = paper.sections.filter(section => section.type === 'response').flatMap(section => section.items)
      .filter(item => item.mode === 'manual' && (String(answers[item.qid] || '').trim() || answers['drawing:' + item.qid])
        && !Number.isFinite(answers['review:' + item.qid]));
    if (!items.length) return false;
    document.getElementById('original-review-modal')?.remove();
    const overlay = document.createElement('div');
    overlay.id = 'original-review-modal';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');
    overlay.setAttribute('aria-label','家长复核开放题');
    overlay.className = 'fixed inset-0 z-50 bg-black/50 overflow-y-auto p-4 no-print';
    overlay.innerHTML = `<form class="max-w-3xl mx-auto bg-white rounded-2xl p-5 my-4 space-y-4"><h2 class="text-xl font-bold">请家长复核开放题</h2><p class="text-sm text-slate-600">客观题自动判分。请逐题查看作答与评分参考，填写得分后完成交卷；未作答题按0分计。</p>${items.map(item => `<div class="border rounded-xl p-3 space-y-2"><p class="font-bold text-sm">${escape(item.prompt)}</p><p class="whitespace-pre-wrap text-sm">孩子的作答：${escape(answers[item.qid] || '见画板')}</p>${answers['drawing:' + item.qid] ? image(answers['drawing:' + item.qid], '孩子的画板作答') : ''}<p class="text-sm bg-amber-50 p-2 rounded">评分参考：${escape(item.reference)}</p><label class="text-sm">得分（0—${item.points}）：<input type="number" min="0" max="${item.points}" step="0.5" required data-review="${escape(item.qid)}" class="border p-2 rounded w-24"></label></div>`).join('')}<div class="flex gap-3"><button type="submit" class="bg-amber-500 text-white rounded-lg px-4 py-2 font-bold">确认评分并交卷</button><button type="button" data-cancel-review class="border rounded-lg px-4 py-2">返回继续答题</button></div></form>`;
    document.body.appendChild(overlay);
    const form = overlay.querySelector('form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      overlay.querySelectorAll('[data-review]').forEach(control => { answers['review:' + control.dataset.review] = Number(control.value); });
      overlay.remove();onConfirm();
    });
    overlay.querySelector('[data-cancel-review]').addEventListener('click', () => overlay.remove());
    overlay.querySelector('input')?.focus();
    return true;
  }

  function showResults(grading) {
    document.querySelectorAll('.response-group').forEach(group => {
      const result = grading.results.find(r => r.qid === group.dataset.responseQid);
      if (!result) return;
      group.querySelectorAll('input,textarea,button').forEach(control => { control.disabled = true; });
      group.classList.add(result.isCorrect ? 'answer-correct' : 'answer-wrong');
      const explanation = document.createElement('p');
      explanation.className = 'text-xs text-slate-600 mt-2 no-print';
      explanation.textContent = `${result.unanswered ? '未作答。' : ''}得分：${result.awardedPoints}/${result.points}。${result.manual ? '家长复核；评分参考：' : '参考答案：'}${result.correctAnswer}`;
      group.appendChild(explanation);
    });
  }
  return {render,bind,review,showResults};
})();
