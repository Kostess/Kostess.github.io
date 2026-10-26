const positivePhrases = [
  "Отлично. Еще один термин перестал быть шумом.",
  "Так и строится база: маленькими понятными шагами.",
  "Хороший ответ. Теперь это слово уже не просто слово.",
  "Есть контакт. C# будет объясняться заметно легче.",
  "Красиво. Мозг только что получил полезную опору."
];

const supportPhrases = [
  "Не страшно. Ошибка здесь дешевле, чем путаница на практике.",
  "Спокойно. Термины цепляются не сразу, зато хорошо держатся после повторения.",
  "Промах - это не провал, а указатель, что повторить.",
  "Нормально. Сложное слово становится обычным после нескольких встреч.",
  "Еще круг, и станет яснее. Тут важна не скорость, а сцепление смысла."
];

const menuQuotes = [
  "Понимать термин - значит заранее убрать половину будущих вопросов.",
  "Hello World проще, когда слова вокруг него уже не пугают.",
  "Сильный старт в программировании часто начинается не с кода, а с ясных понятий.",
  "Если термин понятен, объяснение преподавателя перестает быть заклинанием.",
  "База не делает работу за тебя, зато делает каждую следующую минуту полезнее.",
  "Чем меньше тумана в словах, тем больше смысла в практике.",
  "Термин, который ты можешь объяснить сам, уже работает на тебя.",
  "На защите легче отвечать, когда понятия не приходится угадывать."
];

const QUOTE_ROTATION_MS = 60000;

const deckLabTags = {
  "sdlc-stakeholders-requirements": ["ЛБ 1"],
  "sdlc-stages": ["ЛБ 1"],
  "sdlc-models-release": ["ЛБ 1"],
  "visual-studio-first-run": ["ЛБ 2"],
  "dotnet-runtime": ["ЛБ 3"],
  "csharp-under-hood": ["ЛБ 3"],
  "project-build-files": ["ЛБ 3"],
  "oop-preview": ["ЛБ 3"],
  "variables-values": ["ЛБ 4"],
  "csharp-data-types": ["ЛБ 4"],
  "typing-and-output": ["ЛБ 4"],
  "input-operations-conversions": ["ЛБ 5"],
  "conditions-logic": ["ЛБ 6"],
  "branching-menu": ["ЛБ 6"],
  "loops-basics": ["ЛБ 7"],
  "loops-control": ["ЛБ 7"],
  "arrays-basics": ["ЛБ 8"],
  "arrays-traversal": ["ЛБ 8"],
  "arrays-analysis": ["ЛБ 8"],
  "methods-basics": ["ЛБ 9"],
  "methods-return-scope": ["ЛБ 9"],
  "methods-purchase": ["ЛБ 9"]
};

const CODE_ANSWER_TIME_MS = 90_000;

const state = {
  screen: "home",
  activeMode: null,
  pendingTarget: null,
  quizMode: "mixed",
  cardSession: null,
  quizSession: null,
  codeSession: null,
  codeTimerId: null,
  quoteIndex: 0,
  quoteIntervalId: null,
  quoteFadeTimeoutId: null
};

const els = {
  root: document.documentElement,
  navLinks: [...document.querySelectorAll("[data-screen-link]")],
  screens: [...document.querySelectorAll(".screen")],
  themeToggle: document.querySelector("#themeToggle"),
  dailyQuote: document.querySelector("#dailyQuote"),
  exitDialog: document.querySelector("#exitDialog"),
  cardTopicSelect: document.querySelector("#cardTopicSelect"),
  cardDeckSelect: document.querySelector("#cardDeckSelect"),
  shuffleCardsToggle: document.querySelector("#shuffleCardsToggle"),
  startCardsBtn: document.querySelector("#startCardsBtn"),
  cardProgress: document.querySelector("#cardProgress"),
  cardProgressFill: document.querySelector("#cardProgressFill"),
  flashcard: document.querySelector("#flashcard"),
  flashcardTitle: document.querySelector("#flashcardTitle"),
  flashcardText: document.querySelector("#flashcardText"),
  flashcardExample: document.querySelector("#flashcardExample"),
  repeatCardBtn: document.querySelector("#repeatCardBtn"),
  knowCardBtn: document.querySelector("#knowCardBtn"),
  cardSessionNote: document.querySelector("#cardSessionNote"),
  quizTopicSelect: document.querySelector("#quizTopicSelect"),
  quizDeckSelect: document.querySelector("#quizDeckSelect"),
  startQuizBtn: document.querySelector("#startQuizBtn"),
  quizModeButtons: [...document.querySelectorAll("[data-quiz-mode]")],
  quizProgress: document.querySelector("#quizProgress"),
  quizProgressFill: document.querySelector("#quizProgressFill"),
  quizType: document.querySelector("#quizType"),
  quizQuestion: document.querySelector("#quizQuestion"),
  answerGrid: document.querySelector("#answerGrid"),
  quizFeedback: document.querySelector("#quizFeedback"),
  codeLabSelect: document.querySelector("#codeLabSelect"),
  codeDeckSelect: document.querySelector("#codeDeckSelect"),
  startCodeBtn: document.querySelector("#startCodeBtn"),
  codeProgress: document.querySelector("#codeProgress"),
  codeTimer: document.querySelector("#codeTimer"),
  codeProgressFill: document.querySelector("#codeProgressFill"),
  codeType: document.querySelector("#codeType"),
  codeQuestion: document.querySelector("#codeQuestion"),
  codeSnippet: document.querySelector("#codeSnippet"),
  codeText: document.querySelector("#codeText"),
  codeInput: document.querySelector("#codeInput"),
  codeAnswerGrid: document.querySelector("#codeAnswerGrid"),
  codeFeedback: document.querySelector("#codeFeedback"),
  nextCodeBtn: document.querySelector("#nextCodeBtn"),
  nextQuizBtn: document.querySelector("#nextQuizBtn"),
  cardMistakesOnly: document.querySelector("#cardMistakesOnly"),
  quizMistakesOnly: document.querySelector("#quizMistakesOnly"),
  codeMistakesOnly: document.querySelector("#codeMistakesOnly"),
  learningSummary: document.querySelector("#learningSummary"),
  mistakeList: document.querySelector("#mistakeList"),
  storageStatus: document.querySelector("#storageStatus"),
  referenceTopicSelect: document.querySelector("#referenceTopicSelect"),
  referenceDeckSelect: document.querySelector("#referenceDeckSelect"),
  referenceTagSelect: document.querySelector("#referenceTagSelect"),
  searchInput: document.querySelector("#searchInput"),
  sortSelect: document.querySelector("#sortSelect"),
  referenceMeta: document.querySelector("#referenceMeta"),
  referenceList: document.querySelector("#referenceList")
};

const allTerms = topics.flatMap((topic) =>
  topic.decks.flatMap((deck) =>
    deck.terms.map((item) => ({
      ...item,
      topicId: topic.id,
      topicTitle: topic.title,
      deckId: deck.id,
      deckTitle: deck.title,
      chips: buildChips(topic, deck)
    }))
  )
);

const codeLessonsByTerm = new Map();
for (const lesson of codeLessons) {
  const key = `${lesson.deckId}:${lesson.term}`;
  if (!codeLessonsByTerm.has(key)) codeLessonsByTerm.set(key, []);
  codeLessonsByTerm.get(key).push(lesson);
}
const codeLessonByTerm = new Map([...codeLessonsByTerm].map(([key, lessons]) => [key, lessons[0]]));

const PROGRESS_KEY = "terms-progress-v1";
let learningProgress = {};

function progressKey(mode, item) {
  if (mode === "code" && item.id) return `code:${item.id}`;
  return `${mode}:${item.deckId}:${item.term}`;
}

function needsReview(mode, item) {
  if (mode === "code" && !item.id) {
    return (codeLessonsByTerm.get(`${item.deckId}:${item.term}`) || []).some(lesson => needsReview("code", lesson));
  }
  return learningProgress[progressKey(mode, item)]?.needsReview === true;
}

function loadLearningProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
      throw new Error("Invalid progress");
    }
    learningProgress = {};
    for (const mode of ["cards", "quiz", "code"]) {
      const items = mode === "code" ? codeLessons : allTerms;
      for (const item of items) {
        const key = progressKey(mode, item);
        const legacyKey = `${mode}:${item.deckId}:${item.term}`;
        const isOriginal = mode === "code" && codeLessonByTerm.get(`${item.deckId}:${item.term}`) === item;
        const record = saved[key] || (isOriginal ? saved[legacyKey] : undefined);
        if (record && Number.isSafeInteger(record.attempts) && record.attempts > 0 &&
            Number.isSafeInteger(record.correct) && record.correct >= 0 && record.correct <= record.attempts &&
            typeof record.needsReview === "boolean") {
          learningProgress[key] = { attempts: record.attempts, correct: record.correct, needsReview: record.needsReview };
        }
      }
    }
  } catch {
    learningProgress = {};
    els.storageStatus.textContent = "Не удалось загрузить прогресс. Новые ответы будут учитываться в этой вкладке.";
  }
  renderLearningProgress();
}

function recordLearningAnswer(mode, item, correct) {
  const key = progressKey(mode, item);
  const previous = learningProgress[key] || { attempts: 0, correct: 0 };
  learningProgress[key] = {
    attempts: previous.attempts + 1,
    correct: previous.correct + Number(correct),
    needsReview: !correct
  };
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(learningProgress));
    els.storageStatus.textContent = "Прогресс сохраняется в этом браузере.";
  } catch {
    els.storageStatus.textContent = "Хранилище недоступно: прогресс сохранится только до закрытия или обновления вкладки.";
  }
  renderLearningProgress();
}

function renderLearningProgress() {
  const studied = allTerms.filter(item => ["cards", "quiz"].some(mode =>
    learningProgress[progressKey(mode, item)]) ||
    (codeLessonsByTerm.get(`${item.deckId}:${item.term}`) || []).some(lesson => learningProgress[progressKey("code", lesson)]));
  const mistakes = [];
  for (const [mode, label] of [["cards", "Карточки"], ["quiz", "Тест"], ["code", "Понимаю код"]]) {
    for (const item of mode === "code" ? codeLessons : allTerms) {
      if (needsReview(mode, item)) mistakes.push({ item, label });
    }
  }
  const attempts = Object.values(learningProgress).reduce((total, record) => total + record.attempts, 0);
  els.learningSummary.textContent = `Пройдено терминов: ${studied.length} из ${allTerms.length}. Ответов: ${attempts}. На повторение: ${mistakes.length}.`;
  els.mistakeList.replaceChildren();
  if (!mistakes.length) {
    const li = document.createElement("li");
    li.textContent = "Ошибок для повторения пока нет.";
    els.mistakeList.append(li);
  }
  for (const { item, label } of mistakes) {
    const li = document.createElement("li");
    const term = allTerms.find(term => term.deckId === item.deckId && term.term === item.term);
    const deck = item.id ? codeDecks.find(deck => deck.id === item.codeDeckId) : undefined;
    li.textContent = `${label}${deck ? ` · ${deck.title}` : ""} · ${item.term}: ${term?.definition || ""}`;
    if (item.challengeCode) {
      const snippet = document.createElement("pre");
      snippet.textContent = `Пример задания:\n${item.challengeCode}`;
      li.append(snippet);
    }
    els.mistakeList.append(li);
  }
}

function buildChips(topic, deck) {
  const labChips = (deckLabTags[deck.id] || []).map((label) => ({
    kind: "lab",
    label,
    value: label
  }));
  return [
    { kind: "topic", label: topic.title, value: `Тема: ${topic.title}` },
    { kind: "deck", label: deck.title.replace("Колода ", ""), value: deck.title },
    ...labChips
  ];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getTopic(topicId) {
  return topics.find((topic) => topic.id === topicId) ?? topics[0];
}

function getDeck(topicId, deckId) {
  const topic = getTopic(topicId);
  if (deckId === "all") {
    return {
      id: "all",
      title: "Все колоды темы",
      terms: topic.decks.flatMap((deck) => deck.terms)
    };
  }
  return topic.decks.find((deck) => deck.id === deckId) ?? topic.decks[0];
}

function getTerms(topicId, deckId) {
  const topic = getTopic(topicId);
  if (deckId === "all") {
    return allTerms.filter((item) => item.topicId === topic.id);
  }
  return allTerms.filter((item) => item.topicId === topic.id && item.deckId === deckId);
}

function setTheme(theme) {
  els.root.dataset.theme = theme;
  try { localStorage.setItem("terms-theme", theme); } catch { /* Theme still works without storage. */ }
}

function applySavedTheme() {
  let savedTheme;
  try { savedTheme = localStorage.getItem("terms-theme"); } catch { /* Use system theme. */ }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));
}

function renderMenuQuote(animate = false) {
  if (!animate) {
    els.dailyQuote.textContent = menuQuotes[state.quoteIndex];
    return;
  }

  els.dailyQuote.classList.add("is-changing");
  window.clearTimeout(state.quoteFadeTimeoutId);
  state.quoteFadeTimeoutId = window.setTimeout(() => {
    els.dailyQuote.textContent = menuQuotes[state.quoteIndex];
    els.dailyQuote.classList.remove("is-changing");
    state.quoteFadeTimeoutId = null;
  }, 160);
}

function advanceMenuQuote(animate = true) {
  state.quoteIndex = (state.quoteIndex + 1) % menuQuotes.length;
  renderMenuQuote(animate);
}

function startQuoteRotation() {
  stopQuoteRotation();
  renderMenuQuote(false);
  state.quoteIntervalId = window.setInterval(() => {
    advanceMenuQuote(true);
  }, QUOTE_ROTATION_MS);
}

function stopQuoteRotation() {
  if (state.quoteIntervalId) {
    window.clearInterval(state.quoteIntervalId);
    state.quoteIntervalId = null;
  }
  if (state.quoteFadeTimeoutId) {
    window.clearTimeout(state.quoteFadeTimeoutId);
    state.quoteFadeTimeoutId = null;
  }
  els.dailyQuote.classList.remove("is-changing");
}

function fillTopicSelect(select, includeAll = false) {
  select.innerHTML = [
    includeAll ? '<option value="all">Все темы</option>' : "",
    ...topics.map((topic) => `<option value="${topic.id}">${topic.title}</option>`)
  ].join("");
}

function fillDeckSelect(topicSelect, deckSelect, includeAll = true) {
  const topicId = topicSelect.value === "all" ? topics[0].id : topicSelect.value;
  const topic = getTopic(topicId);
  deckSelect.innerHTML = [
    includeAll ? '<option value="all">Все колоды темы</option>' : "",
    ...topic.decks.map((deck) => `<option value="${deck.id}">${deck.title}</option>`)
  ].join("");
}

function fillReferenceDeckSelect() {
  const topicId = els.referenceTopicSelect.value;
  if (topicId === "all") {
    els.referenceDeckSelect.innerHTML = '<option value="all">Все колоды</option>';
    return;
  }
  const topic = getTopic(topicId);
  els.referenceDeckSelect.innerHTML = [
    '<option value="all">Все колоды темы</option>',
    ...topic.decks.map((deck) => `<option value="${deck.id}">${deck.title}</option>`)
  ].join("");
}

function fillReferenceTagSelect() {
  const groups = [
    {
      label: "Лабораторные",
      values: [...new Set(allTerms.flatMap((item) => item.chips.filter((chip) => chip.kind === "lab").map((chip) => chip.value)))]
        .sort((a, b) => Number(a.replace(/\D/g, "")) - Number(b.replace(/\D/g, "")))
    },
    {
      label: "Темы",
      values: topics.map((topic) => `Тема: ${topic.title}`)
    },
    {
      label: "Колоды",
      values: topics.flatMap((topic) => topic.decks.map((deck) => deck.title))
    }
  ];

  els.referenceTagSelect.innerHTML = [
    '<option value="all">Все метки</option>',
    ...groups
      .filter((group) => group.values.length)
      .map(
        (group) => `
          <optgroup label="${group.label}">
            ${group.values.map((value) => `<option value="${escapeAttribute(value)}">${value}</option>`).join("")}
          </optgroup>
        `
      )
  ].join("");
}

function updateNavigation(screen) {
  els.navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.screenLink === screen);
  });
  els.screens.forEach((screenEl) => {
    screenEl.classList.toggle("is-visible", screenEl.dataset.screen === screen);
  });
}

function resetMode() {
  state.activeMode = null;
  state.cardSession = null;
  state.quizSession = null;
  state.codeSession = null;
  resetCardsUi();
  resetQuizUi();
  resetCodeUi();
}

function goToScreen(screen, force = false) {
  if (!force && state.activeMode && screen !== state.screen) {
    state.pendingTarget = screen;
    els.exitDialog.showModal();
    return;
  }
  state.screen = screen;
  updateNavigation(screen);
  if (screen === "home") {
    startQuoteRotation();
  } else {
    stopQuoteRotation();
  }
  if (screen === "reference") {
    renderReference();
  }
}

function resetCardsUi() {
  els.cardProgress.textContent = "Выберите колоду";
  els.cardProgressFill.style.width = "0%";
  els.flashcard.classList.remove("is-flipped");
  els.flashcardTitle.textContent = "Карточки ждут";
  els.flashcardText.textContent = "Выберите тему и колоду, затем начните тренировку.";
  els.flashcardExample.hidden = true;
  els.flashcardExample.textContent = "";
  els.repeatCardBtn.disabled = true;
  els.knowCardBtn.disabled = true;
  els.cardSessionNote.textContent =
    "Ответы и термины для повторения сохраняются в этом браузере после каждой карточки.";
}

function startCards() {
  const topicId = els.cardTopicSelect.value;
  const deckId = els.cardDeckSelect.value;
  const sourceTerms = getTerms(topicId, deckId).filter(item => !els.cardMistakesOnly.checked ||
    ["cards", "quiz", "code"].some(mode => needsReview(mode, item)));
  if (!sourceTerms.length) {
    els.cardSessionNote.textContent = "В выбранной колоде нет терминов для повторения. Снимите фильтр или выберите другую колоду.";
    return;
  }
  const cards = els.shuffleCardsToggle.classList.contains("is-active") ? shuffle(sourceTerms) : [...sourceTerms];

  state.activeMode = "cards";
  state.cardSession = {
    cards,
    index: 0,
    known: 0,
    repeated: 0,
    flipped: false
  };
  els.repeatCardBtn.disabled = false;
  els.knowCardBtn.disabled = false;
  renderCurrentCard();
}

function renderCurrentCard() {
  const session = state.cardSession;
  if (!session) {
    resetCardsUi();
    return;
  }

  if (session.index >= session.cards.length) {
    finishCards();
    return;
  }

  const card = session.cards[session.index];
  const progress = session.index / session.cards.length;
  els.cardProgress.textContent = `Карточка ${session.index + 1} из ${session.cards.length}`;
  els.cardProgressFill.style.width = `${Math.round(progress * 100)}%`;
  els.flashcard.classList.toggle("is-flipped", session.flipped);
  els.flashcardTitle.textContent = session.flipped ? card.definition : card.term;
  els.flashcardText.textContent = session.flipped
    ? "Нажмите еще раз, чтобы вернуться к термину."
    : "Сначала попробуйте объяснить своими словами. Если не вышло, переверните и отправьте в повтор.";
  const lesson = codeLessonByTerm.get(`${card.deckId}:${card.term}`);
  els.flashcardExample.hidden = !session.flipped || !lesson;
  els.flashcardExample.textContent = lesson
    ? `Пример C#:\n${lesson.exampleCode}\nРезультат: ${lesson.exampleResult}`
    : "";
}

function finishCards() {
  const session = state.cardSession;
  els.cardProgress.textContent = "Тренировка завершена";
  els.cardProgressFill.style.width = "100%";
  els.flashcard.classList.remove("is-flipped");
  els.flashcardTitle.textContent = "Готово";
  els.flashcardText.textContent = `Понятно: ${session.known}. Отправлено на повторение: ${session.repeated}. Ответы учтены в прогрессе.`;
  els.flashcardExample.hidden = true;
  els.repeatCardBtn.disabled = true;
  els.knowCardBtn.disabled = true;
  els.cardSessionNote.textContent = randomItem(positivePhrases);
  state.activeMode = null;
  state.cardSession = null;
}

function markCard(result) {
  const session = state.cardSession;
  if (!session) {
    return;
  }
  recordLearningAnswer("cards", session.cards[session.index], result === "known");
  if (result === "known") {
    session.known += 1;
    session.index += 1;
  } else {
    const [card] = session.cards.splice(session.index, 1);
    session.cards.push(card);
    session.repeated += 1;
  }
  session.flipped = false;
  renderCurrentCard();
}

function resetQuizUi() {
  els.nextQuizBtn.hidden = true;
  els.quizProgress.textContent = "Выберите колоду";
  els.quizProgressFill.style.width = "0%";
  els.quizType.textContent = "Тест не начат";
  els.quizQuestion.textContent = "Нажмите «Начать тест», когда будете готовы.";
  els.answerGrid.innerHTML = "";
  els.quizFeedback.textContent = "";
}

function startQuiz() {
  const sourceTerms = getTerms(els.quizTopicSelect.value, els.quizDeckSelect.value)
    .filter(item => !els.quizMistakesOnly.checked || needsReview("quiz", item));
  if (!sourceTerms.length) {
    els.quizFeedback.textContent = "В выбранной колоде нет ошибок для повторения. Снимите фильтр или выберите другую колоду.";
    return;
  }
  const questions = shuffle(sourceTerms).map((term, index) => ({
    term,
    direction:
      state.quizMode === "mixed"
        ? index % 2 === 0
          ? "term"
          : "definition"
        : state.quizMode
  }));

  state.activeMode = "quiz";
  state.quizSession = {
    questions,
    index: 0,
    correct: 0,
    answered: false
  };
  renderQuestion();
}

function renderQuestion() {
  els.nextQuizBtn.hidden = true;
  const session = state.quizSession;
  if (!session) {
    resetQuizUi();
    return;
  }
  if (session.index >= session.questions.length) {
    finishQuiz();
    return;
  }

  const question = session.questions[session.index];
  const isTermToDefinition = question.direction === "term";
  const correctText = isTermToDefinition ? question.term.definition : question.term.term;
  const distractorPool = allTerms
    .filter((item) => item.term !== question.term.term)
    .map((item) => (isTermToDefinition ? item.definition : item.term));
  const options = shuffle([correctText, ...shuffle(distractorPool).slice(0, 3)]);

  session.answered = false;
  const progress = session.index / session.questions.length;
  els.quizProgress.textContent = `Вопрос ${session.index + 1} из ${session.questions.length}`;
  els.quizProgressFill.style.width = `${Math.round(progress * 100)}%`;
  els.quizType.textContent = isTermToDefinition ? "Выберите пояснение" : "Выберите термин";
  els.quizQuestion.textContent = isTermToDefinition ? question.term.term : question.term.definition;
  els.quizFeedback.textContent = "";
  els.answerGrid.innerHTML = options
    .map(
      (option) => `
        <button class="answer-option" type="button" data-answer="${escapeAttribute(option)}">
          ${escapeHtml(option)}
        </button>
      `
    )
    .join("");

  els.answerGrid.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => handleAnswer(button, correctText));
  });
}

function handleAnswer(button, correctText) {
  const session = state.quizSession;
  if (!session || session.answered) {
    return;
  }
  session.answered = true;
  const isCorrect = button.dataset.answer === correctText;
  if (isCorrect) {
    session.correct += 1;
  }

  els.answerGrid.querySelectorAll(".answer-option").forEach((option) => {
    option.disabled = true;
    if (option.dataset.answer === correctText) {
      option.classList.add("is-correct");
    }
  });
  if (!isCorrect) {
    button.classList.add("is-wrong");
  }

  const term = session.questions[session.index].term;
  recordLearningAnswer("quiz", term, isCorrect);
  els.quizFeedback.textContent = `${isCorrect ? "Верно." : "Правильный ответ:"} ${term.term} — ${term.definition}`;
  els.nextQuizBtn.textContent = session.index === session.questions.length - 1 ? "Показать итог" : "Далее";
  els.nextQuizBtn.hidden = false;
}

function nextQuizQuestion() {
  const session = state.quizSession;
  if (!session || !session.answered) return;
  session.index += 1;
  renderQuestion();
}

function finishQuiz() {
  els.nextQuizBtn.hidden = true;
  const session = state.quizSession;
  const percent = Math.round((session.correct / session.questions.length) * 100);
  els.quizProgress.textContent = "Тест завершен";
  els.quizProgressFill.style.width = "100%";
  els.quizType.textContent = "Итог";
  els.quizQuestion.textContent = `${session.correct} из ${session.questions.length} правильных ответов (${percent}%).`;
  els.answerGrid.innerHTML = "";
  els.quizFeedback.textContent =
    percent >= 80
      ? "Отличная база. Можно смело идти к практике и держать справочник рядом."
      : "Стоит повторить колоду еще раз. Это нормальная часть обучения, не штраф.";
  state.activeMode = null;
  state.quizSession = null;
}

function stopCodeTimer() {
  window.clearInterval(state.codeTimerId);
  state.codeTimerId = null;
}

function startCodeTimer() {
  stopCodeTimer();
  const session = state.codeSession;
  const questionIndex = session.index;
  session.deadline = Date.now() + CODE_ANSWER_TIME_MS;
  const update = () => {
    if (state.codeSession !== session || session.index !== questionIndex || session.answered) {
      return;
    }
    const seconds = Math.max(0, Math.ceil((session.deadline - Date.now()) / 1000));
    els.codeTimer.textContent = `Осталось: ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    els.codeTimer.classList.toggle("is-urgent", seconds <= 15);
    if (seconds === 0) {
      handleCodeAnswer(null, true);
    }
  };
  els.codeTimer.hidden = false;
  update();
  state.codeTimerId = window.setInterval(update, 250);
}

function resetCodeUi() {
  stopCodeTimer();
  els.codeTimer.hidden = true;
  els.codeProgress.textContent = "Выберите подборку";
  els.codeProgressFill.style.width = "0%";
  els.codeType.textContent = "Практика не начата";
  els.codeQuestion.textContent = "Нажмите «Начать практику», когда будете готовы.";
  els.codeSnippet.hidden = true;
  els.codeAnswerGrid.replaceChildren();
  els.codeFeedback.textContent = "";
  els.nextCodeBtn.hidden = true;
}

function fillCodeDeckSelect() {
  const lab = els.codeLabSelect.value;
  const decks = codeDecks.filter(deck => lab === "all" || deck.lab === lab);
  els.codeDeckSelect.innerHTML = decks.map(deck => {
    const count = codeLessons.filter(lesson => lesson.codeDeckId === deck.id).length;
    return `<option value="${escapeAttribute(deck.id)}">${escapeHtml(deck.lab)} · ${escapeHtml(deck.title)} (${count})</option>`;
  }).join("");
}

function createCodeQuestion(lesson) {
  const variant = randomItem([lesson, ...(lesson.variants || [])]);
  const options = shuffle(variant.options.map((text, index) => ({
    text,
    correct: index === variant.correctIndex
  })));
  return {
    ...lesson,
    ...variant,
    options: options.map(option => option.text),
    correctIndex: options.findIndex(option => option.correct)
  };
}

function startCode() {
  const lab = els.codeLabSelect.value;
  const questions = shuffle(codeLessons.filter((lesson) =>
    (lab === "all" || (deckLabTags[lesson.deckId] || []).includes(lab)) &&
    lesson.codeDeckId === els.codeDeckSelect.value &&
    (!els.codeMistakesOnly.checked || needsReview("code", lesson))
  ));
  if (!questions.length) {
    els.codeFeedback.textContent = "В выбранной подборке нет ошибок для повторения. Снимите фильтр или выберите другую подборку.";
    return;
  }
  state.activeMode = "code";
  state.codeSession = { questions: questions.map(createCodeQuestion), index: 0, correct: 0, answered: false };
  renderCodeQuestion();
}

function renderCodeQuestion() {
  stopCodeTimer();
  const session = state.codeSession;
  if (!session) {
    resetCodeUi();
    return;
  }
  if (session.index >= session.questions.length) {
    finishCode();
    return;
  }

  const question = session.questions[session.index];
  session.answered = false;
  els.codeProgress.textContent = `Задание ${session.index + 1} из ${session.questions.length}`;
  els.codeProgressFill.style.width = `${Math.round(session.index / session.questions.length * 100)}%`;
  const deck = codeDecks.find(deck => deck.id === question.codeDeckId);
  els.codeType.textContent = `${deck?.title || "Практика"} · ${question.kind} · ${question.term}`;
  els.codeQuestion.textContent = question.prompt;
  els.codeSnippet.hidden = false;
  els.codeText.textContent = question.challengeCode;
  els.codeInput.hidden = !question.challengeInput;
  els.codeInput.textContent = question.challengeInput ? `Ввод: ${question.challengeInput}` : "";
  els.codeFeedback.textContent = "";
  els.nextCodeBtn.hidden = true;
  els.codeAnswerGrid.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = option;
    button.addEventListener("click", () => handleCodeAnswer(index));
    els.codeAnswerGrid.append(button);
  });
  startCodeTimer();
}

function handleCodeAnswer(index, timedOut = false) {
  const session = state.codeSession;
  if (!session || session.answered) {
    return;
  }
  timedOut = timedOut || Date.now() >= session.deadline;
  stopCodeTimer();
  const question = session.questions[session.index];
  session.answered = true;
  const isCorrect = !timedOut && index === question.correctIndex;
  recordLearningAnswer("code", question, isCorrect);
  if (isCorrect) {
    session.correct += 1;
  }

  [...els.codeAnswerGrid.children].forEach((button, optionIndex) => {
    button.disabled = true;
    button.classList.toggle("is-correct", optionIndex === question.correctIndex);
    button.classList.toggle("is-wrong", !timedOut && optionIndex === index && !isCorrect);
  });
  els.codeTimer.textContent = timedOut ? "Время вышло: 0:00" : "Ответ принят";
  els.codeTimer.classList.toggle("is-urgent", timedOut);
  els.codeFeedback.textContent = `${timedOut ? "Время вышло. " : ""}${isCorrect ? "Верно." : `Правильный ответ: ${question.options[question.correctIndex]}.`} ${question.explanation}`;
  els.nextCodeBtn.textContent = session.index === session.questions.length - 1 ? "Показать итог" : "Следующее задание";
  els.nextCodeBtn.hidden = false;
}

function finishCode() {
  stopCodeTimer();
  els.codeTimer.hidden = true;
  const session = state.codeSession;
  const percent = Math.round(session.correct / session.questions.length * 100);
  els.codeProgress.textContent = "Практика завершена";
  els.codeProgressFill.style.width = "100%";
  els.codeType.textContent = "Итог";
  els.codeQuestion.textContent = `${session.correct} из ${session.questions.length} правильных ответов (${percent}%).`;
  els.codeSnippet.hidden = true;
  els.codeAnswerGrid.replaceChildren();
  els.codeFeedback.textContent = percent >= 80
    ? "Хорошо! Теперь попробуйте объяснить эти примеры своими словами."
    : "Откройте примеры в справочнике и пройдите подборку ещё раз.";
  els.nextCodeBtn.hidden = true;
  state.activeMode = null;
  state.codeSession = null;
}

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function getReferenceTerms() {
  const topicId = els.referenceTopicSelect.value;
  const deckId = els.referenceDeckSelect.value;
  const tag = els.referenceTagSelect.value;
  const query = els.searchInput.value.trim().toLowerCase();
  let terms = allTerms;

  if (topicId !== "all") {
    terms = terms.filter((item) => item.topicId === topicId);
  }
  if (deckId !== "all") {
    terms = terms.filter((item) => item.deckId === deckId);
  }
  if (tag !== "all") {
    terms = terms.filter((item) => item.chips.some((chip) => chip.value === tag));
  }
  if (query) {
    terms = terms.filter((item) =>
      [item.term, item.definition, item.topicTitle, item.deckTitle,
        ...(codeLessonsByTerm.get(`${item.deckId}:${item.term}`) || []).map(lesson => lesson.exampleCode),
        ...item.chips.map((chip) => chip.label)].some((value) =>
        value.toLowerCase().includes(query)
      )
    );
  }

  const sort = els.sortSelect.value;
  if (sort === "term-asc") {
    terms = [...terms].sort((a, b) => a.term.localeCompare(b.term, "ru"));
  } else if (sort === "term-desc") {
    terms = [...terms].sort((a, b) => b.term.localeCompare(a.term, "ru"));
  } else {
    terms = [...terms].sort(
      (a, b) =>
        a.topicTitle.localeCompare(b.topicTitle, "ru") ||
        a.deckTitle.localeCompare(b.deckTitle, "ru") ||
        a.term.localeCompare(b.term, "ru")
    );
  }
  return terms;
}

function renderReference() {
  const terms = getReferenceTerms();
  els.referenceMeta.textContent = `Найдено терминов: ${terms.length} из ${allTerms.length}`;
  els.referenceList.innerHTML = terms.length
    ? terms
        .map(
          (item) => `
            <details class="term-item">
              <summary>
                <strong>${item.term}</strong>
                <span>${item.topicTitle} · ${item.deckTitle.replace("Колода ", "")}</span>
              </summary>
              <div class="term-body">
                <div class="chip-row">
                  ${item.chips.map((chip) => `<span class="term-chip term-chip--${chip.kind}">${chip.label}</span>`).join("")}
                </div>
                <p>${item.definition}</p>
                ${renderReferenceExample(item)}
              </div>
            </details>
          `
        )
        .join("")
    : '<p class="session-note">Ничего не найдено. Попробуйте другое слово или сбросьте фильтр.</p>';
}

function renderReferenceExample(item) {
  const lessons = codeLessonsByTerm.get(`${item.deckId}:${item.term}`) || [];
  return lessons.map((lesson, index) => `
    <div class="reference-example">
      <strong>Пример C# ${index + 1} из ${lessons.length}</strong>
      <pre><code>${escapeHtml(lesson.exampleCode)}</code></pre>
      ${lesson.exampleInput ? `<p><strong>Ввод:</strong> ${escapeHtml(lesson.exampleInput)}</p>` : ""}
      <p><strong>Результат:</strong> <span class="example-result">${escapeHtml(lesson.exampleResult)}</span></p>
      <p>${escapeHtml(lesson.exampleNote)}</p>
    </div>
  `).join("");
}

function wireEvents() {
  els.navLinks.forEach((link) => {
    link.addEventListener("click", () => goToScreen(link.dataset.screenLink));
  });

  els.themeToggle.addEventListener("click", () => {
    setTheme(els.root.dataset.theme === "dark" ? "light" : "dark");
  });

  els.cardTopicSelect.addEventListener("change", () => {
    fillDeckSelect(els.cardTopicSelect, els.cardDeckSelect);
  });
  els.quizTopicSelect.addEventListener("change", () => {
    fillDeckSelect(els.quizTopicSelect, els.quizDeckSelect);
  });
  els.referenceTopicSelect.addEventListener("change", () => {
    fillReferenceDeckSelect();
    renderReference();
  });
  els.referenceDeckSelect.addEventListener("change", renderReference);
  els.referenceTagSelect.addEventListener("change", renderReference);
  els.searchInput.addEventListener("input", renderReference);
  els.sortSelect.addEventListener("change", renderReference);

  els.shuffleCardsToggle.addEventListener("click", () => {
    const isActive = els.shuffleCardsToggle.classList.toggle("is-active");
    els.shuffleCardsToggle.setAttribute("aria-pressed", String(isActive));
  });

  els.startCardsBtn.addEventListener("click", startCards);
  els.flashcard.addEventListener("click", () => {
    if (!state.cardSession) {
      return;
    }
    state.cardSession.flipped = !state.cardSession.flipped;
    renderCurrentCard();
  });
  els.repeatCardBtn.addEventListener("click", () => markCard("repeat"));
  els.knowCardBtn.addEventListener("click", () => markCard("known"));

  els.quizModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.quizMode = button.dataset.quizMode;
      els.quizModeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    });
  });
  els.startQuizBtn.addEventListener("click", startQuiz);
  els.nextQuizBtn.addEventListener("click", nextQuizQuestion);
  els.startCodeBtn.addEventListener("click", startCode);
  els.codeLabSelect.addEventListener("change", fillCodeDeckSelect);
  els.nextCodeBtn.addEventListener("click", () => {
    if (!state.codeSession || !state.codeSession.answered) {
      return;
    }
    state.codeSession.index += 1;
    renderCodeQuestion();
  });

  document.querySelectorAll("[data-exit-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.activeMode) {
        state.pendingTarget = "home";
        els.exitDialog.showModal();
      } else {
        goToScreen("home", true);
      }
    });
  });

  els.exitDialog.addEventListener("close", () => {
    if (els.exitDialog.returnValue === "confirm") {
      resetMode();
      goToScreen(state.pendingTarget || "home", true);
    }
    state.pendingTarget = null;
  });

  window.addEventListener("beforeunload", (event) => {
    stopQuoteRotation();
    if (!state.activeMode) {
      return;
    }
    event.preventDefault();
    event.returnValue = "";
  });

  window.addEventListener("pagehide", stopQuoteRotation);
}

function init() {
  applySavedTheme();
  loadLearningProgress();
  startQuoteRotation();
  fillTopicSelect(els.cardTopicSelect);
  fillDeckSelect(els.cardTopicSelect, els.cardDeckSelect);
  fillTopicSelect(els.quizTopicSelect);
  fillDeckSelect(els.quizTopicSelect, els.quizDeckSelect);
  fillTopicSelect(els.referenceTopicSelect, true);
  fillReferenceDeckSelect();
  fillReferenceTagSelect();
  fillCodeDeckSelect();
  renderReference();
  wireEvents();
}

init();
