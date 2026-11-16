export function searchText(entry) {
  return [entry.id, entry.title, entry.question, entry.shortAnswer, ...(entry.aliases || []), ...(entry.keywords || [])].join(' ').toLocaleLowerCase();
}

export function matchesCultureEntry(entry, { query = '', chapter = 'all', scenario = 'all' } = {}) {
  return (chapter === 'all' || entry.chapterId === chapter)
    && (scenario === 'all' || entry.scenarioTags?.includes(scenario))
    && query.trim().toLocaleLowerCase().split(/\s+/).every(term => searchText(entry).includes(term));
}

export function gradeCultureQuiz(questions, answers) {
  const missing = questions.filter(q => !Number.isInteger(answers[q.id]) || answers[q.id] < 0 || answers[q.id] >= q.options.length);
  if (missing.length) return { complete: false, missing: missing.map(q => q.id), score: null };
  return { complete: true, missing: [], score: questions.filter(q => answers[q.id] === q.answerIndex).length };
}
