const topics = [
  {
    id: "computer-code",
    title: "Компьютер и код",
    description: "Что делает компьютер, как данные превращаются в команды и почему код нужно запускать.",
    decks: [
      {
        id: "computer-basics",
        title: "Колода 1: компьютер и данные",
        terms: [
          {
            term: "Компьютер",
            definition:
              "Устройство, которое получает данные, выполняет инструкции и возвращает результат. Для C# это машина, на которой пишут, запускают и проверяют программу."
          },
          {
            term: "Программа",
            definition:
              "Набор инструкций для компьютера. Когда вы пишете Hello World на C#, вы создаете маленькую программу."
          },
          {
            term: "Данные",
            definition:
              "Информация, с которой работает программа: текст, числа, файлы, настройки и результаты вычислений."
          },
          {
            term: "Бит",
            definition:
              "Минимальная единица информации. Может хранить одно из двух значений: 0 или 1."
          },
          {
            term: "Байт",
            definition:
              "Группа из 8 бит. Такой единицей обычно измеряют размер файлов, памяти и данных."
          },
          {
            term: "Двоичный код",
            definition:
              "Способ представления данных через 0 и 1. Компьютерная техника внизу работает именно с такими сигналами."
          },
          {
            term: "Файл",
            definition:
              "Именованный кусок данных на диске. Исходный код C# обычно хранится в элементах с расширением .cs."
          },
          {
            term: "Папка",
            definition:
              "Место для группировки файлов. Проект C# обычно состоит из папки с кодом, настройками и служебными файлами."
          },
          {
            term: "Путь",
            definition:
              "Адрес файла или папки на компьютере. Например, он помогает IDE найти проект или нужный файл."
          },
          {
            term: "Расширение файла",
            definition:
              "Часть имени после точки, которая часто показывает тип файла. Например, .cs - файл исходного кода C#."
          }
        ]
      },
      {
        id: "instructions",
        title: "Колода 2: инструкции и выполнение",
        terms: [
          {
            term: "Инструкция",
            definition:
              "Конкретное действие, которое должна выполнить программа. Например, вывести строку в консоль."
          },
          {
            term: "Алгоритм",
            definition:
              "Последовательность шагов для решения задачи. Язык программирования нужен, чтобы записать эти шаги понятно для инструментов."
          },
          {
            term: "Исходный код",
            definition:
              "Текст программы, который пишет человек. В C# это команды в файлах .cs."
          },
          {
            term: "Машинный код",
            definition:
              "Инструкции в форме, максимально близкой к процессору. Обычно человек напрямую его не пишет."
          },
          {
            term: "Компиляция",
            definition:
              "Процесс преобразования исходного кода в форму, которую можно запускать или передавать среде выполнения."
          },
          {
            term: "Компилятор",
            definition:
              "Инструмент, который проверяет код и преобразует его дальше. Для C# он создает промежуточный код сборки .NET."
          },
          {
            term: "Ошибка компиляции",
            definition:
              "Проблема, из-за которой код не удалось собрать. Например, пропущена скобка или команда написана не по правилам языка."
          },
          {
            term: "Запуск программы",
            definition:
              "Момент, когда программа начинает выполнять свои инструкции. В IDE это часто кнопка Run или Start."
          },
          {
            term: "Ввод",
            definition:
              "Данные, которые программа получает извне: с клавиатуры, из файла, сети или другого источника."
          },
          {
            term: "Вывод",
            definition:
              "Результат работы программы: текст в консоли, файл, сообщение, число или действие в интерфейсе."
          }
        ]
      }
    ]
  },
  {
    id: "csharp-environment",
    title: "C# и окружение",
    description: "Минимум терминов про .NET, запуск, консоль и инструменты, которые встретятся на первой практике.",
    decks: [
      {
        id: "dotnet-runtime",
        title: "Колода 3: .NET и запуск",
        terms: [
          {
            term: "C#",
            definition:
              "Язык программирования, на котором пишут приложения для платформы .NET."
          },
          {
            term: ".NET",
            definition:
              "Платформа для разработки и запуска программ. C# чаще всего изучают и используют именно вместе с этой экосистемой."
          },
          {
            term: "SDK",
            definition:
              "Набор инструментов разработчика. В него входят команды для создания проектов, сборки кода и запуска программ."
          },
          {
            term: "Runtime",
            definition:
              "Среда выполнения, которая нужна программе во время запуска. Для C# это часть .NET, которая исполняет собранную программу."
          },
          {
            term: "CLR",
            definition:
              "Common Language Runtime - среда выполнения .NET. Она запускает код, управляет памятью и следит за выполнением программы."
          },
          {
            term: "IL",
            definition:
              "Intermediate Language - промежуточный код .NET. Компилятор C# превращает исходный код не сразу в машинный код, а сначала в IL."
          },
          {
            term: "Байт-код",
            definition:
              "Промежуточная форма программы для виртуальной среды выполнения. В мире .NET близкий термин - IL."
          },
          {
            term: "Сборка",
            definition:
              "Результат компиляции в .NET: файл программы или библиотеки, который содержит код и служебную информацию."
          },
          {
            term: "Проект",
            definition:
              "Набор файлов и настроек одной программы или библиотеки. В C# такая структура обычно описывается файлом .csproj."
          },
          {
            term: "Solution",
            definition:
              "Файл и структура, которые объединяют один или несколько проектов. В Visual Studio это удобно для работы с большой задачей."
          },
          {
            term: "Консоль",
            definition:
              "Текстовое окно для ввода команд и просмотра вывода. Первые C# программы часто делают именно текстовыми."
          },
          {
            term: "Командная строка",
            definition:
              "Инструмент, где команды вводят текстом. Через нее можно создать и запустить C# проект командами dotnet."
          }
        ]
      },
      {
        id: "developer-tools",
        title: "Колода 4: инструменты разработчика",
        terms: [
          {
            term: "Программирование",
            definition:
              "Создание программ: постановка задачи, запись инструкций, запуск, проверка и исправление ошибок."
          },
          {
            term: "Программист",
            definition:
              "Человек, который понимает задачу и описывает решение в виде программы."
          },
          {
            term: "Среда разработки",
            definition:
              "Программа, в которой пишут, запускают и отлаживают код. Например, Visual Studio или Rider."
          },
          {
            term: "IDE",
            definition:
              "Integrated Development Environment - полноценная среда разработки с редактором кода, запуском, подсказками и отладкой."
          },
          {
            term: "Редактор кода",
            definition:
              "Программа для удобного написания кода. VS Code - редактор, который можно расширить до почти IDE."
          },
          {
            term: "Visual Studio",
            definition:
              "Популярная IDE для C# и .NET. В ней удобно создавать проекты, запускать программу и искать ошибки."
          },
          {
            term: "VS Code",
            definition:
              "Легкий редактор кода. Для C# ему нужны расширения и установленный .NET SDK."
          },
          {
            term: "Отладка",
            definition:
              "Поиск причин неправильной работы программы. Во время отладки код можно выполнять по шагам и смотреть значения."
          },
          {
            term: "Debugger",
            definition:
              "Инструмент отладки. Он помогает остановить программу в нужном месте и посмотреть, что происходит внутри."
          },
          {
            term: "Документация",
            definition:
              "Официальные или учебные материалы, которые объясняют, как работает язык, библиотека или инструмент."
          },
          {
            term: "Версия",
            definition:
              "Номер выпуска программы, языка, платформы или библиотеки. Он важен, потому что команды и возможности могут отличаться."
          },
          {
            term: "Пакет",
            definition:
              "Готовая часть кода или инструмент, который можно подключить к проекту. В .NET такие зависимости часто берут из NuGet."
          }
        ]
      },
      {
        id: "git-github",
        title: "Колода 5: Git и GitHub",
        terms: [
          {
            term: "Git",
            definition:
              "Система контроля версий. Она помогает сохранять историю изменений кода и возвращаться к прошлым состояниям."
          },
          {
            term: "Репозиторий",
            definition:
              "Папка проекта вместе с историей изменений Git. Ее можно хранить локально и на GitHub."
          },
          {
            term: "Commit",
            definition:
              "Сохраненная точка в истории проекта. Коммит фиксирует, какие файлы изменились и зачем."
          },
          {
            term: "Ветка",
            definition:
              "Отдельная линия изменений в Git. Ветки помогают работать над задачами, не ломая основную версию."
          },
          {
            term: "GitHub",
            definition:
              "Онлайн-сервис для хранения Git-репозиториев и совместной работы над кодом."
          },
          {
            term: "Push",
            definition:
              "Отправка локальных коммитов в удаленный репозиторий, например на GitHub."
          },
          {
            term: "Pull",
            definition:
              "Получение изменений из удаленного репозитория к себе на компьютер."
          },
          {
            term: "README",
            definition:
              "Файл с описанием проекта: что это, как запустить и что важно знать."
          },
          {
            term: "GitHub Pages",
            definition:
              "Возможность GitHub публиковать статичные сайты из репозитория. Для этого сервиса достаточно HTML, CSS и JS."
          },
          {
            term: "Локально",
            definition:
              "На своем компьютере. Например, локальный проект - это копия проекта, с которой вы работаете у себя."
          },
          {
            term: "Удаленный репозиторий",
            definition:
              "Копия репозитория на сервере, например на GitHub. Через него удобно обмениваться изменениями."
          }
        ]
      },
      {
        id: "csharp-under-hood",
        title: "Колода 6: как C# выполняется",
        terms: [
          {
            term: "JIT",
            definition:
              "Компонент среды выполнения, который во время запуска превращает промежуточный код в машинные инструкции для текущего процессора."
          },
          {
            term: "Метаданные",
            definition:
              "Служебные сведения внутри сборки: какие есть типы, методы, зависимости и другие элементы программы."
          },
          {
            term: "Управляемый код",
            definition:
              "Код, который выполняется под контролем среды .NET: она следит за запуском, памятью и некоторыми ошибками."
          },
          {
            term: "Garbage Collector / GC",
            definition:
              "Механизм автоматической очистки памяти от объектов, которые больше не используются программой."
          },
          {
            term: "Процессор / CPU",
            definition:
              "Главная вычислительная часть компьютера, которая выполняет машинные инструкции."
          },
          {
            term: "Синтаксис",
            definition:
              "Правила записи кода на языке программирования: где ставятся скобки, кавычки, точки с запятой и другие элементы."
          },
          {
            term: "Статическая типизация",
            definition:
              "Подход, при котором типы значений проверяются до запуска программы, во время сборки."
          },
          {
            term: "Строгая типизация",
            definition:
              "Подход, при котором язык не позволяет свободно смешивать несовместимые виды значений без явного преобразования."
          },
          {
            term: "Тип данных",
            definition:
              "Описание того, какие значения допустимы и какие операции с ними можно выполнять."
          },
          {
            term: "Библиотеки .NET",
            definition:
              "Готовые наборы типов и функций платформы, которые помогают решать типовые задачи без написания всего с нуля."
          }
        ]
      },
      {
        id: "project-build-files",
        title: "Колода 7: файлы и сборка проекта",
        terms: [
          {
            term: "dotnet CLI",
            definition:
              "Команды для работы с .NET из терминала: создание проекта, сборка, запуск и просмотр информации об установленной среде."
          },
          {
            term: "Program.cs",
            definition:
              "Файл исходного кода, с которого обычно начинается простое консольное приложение на C#."
          },
          {
            term: ".csproj",
            definition:
              "Файл настроек проекта C#: целевая версия .NET, подключенные пакеты и параметры сборки."
          },
          {
            term: "TargetFramework",
            definition:
              "Настройка проекта, которая указывает, под какую версию .NET собирается программа."
          },
          {
            term: "bin",
            definition:
              "Папка проекта, куда попадают файлы, созданные после успешной сборки."
          },
          {
            term: "Debug",
            definition:
              "Режим сборки для разработки, проверки и поиска ошибок."
          },
          {
            term: "Release",
            definition:
              "Режим сборки для готовой версии программы, которую планируют распространять или запускать вне разработки."
          },
          {
            term: ".dll",
            definition:
              "Расширение файла сборки .NET, который может содержать код программы или подключаемой библиотеки."
          },
          {
            term: ".exe",
            definition:
              "Расширение запускаемого файла приложения в Windows."
          }
        ]
      },
      {
        id: "oop-preview",
        title: "Колода 8: ООП коротко",
        terms: [
          {
            term: "ООП",
            definition:
              "Подход к разработке, где программа строится как система взаимодействующих сущностей с данными и поведением."
          },
          {
            term: "Класс",
            definition:
              "Описание будущих экземпляров: какие у них есть данные и какие действия они умеют выполнять."
          },
          {
            term: "Объект",
            definition:
              "Конкретный экземпляр, созданный по описанию типа во время работы программы."
          },
          {
            term: "Инкапсуляция",
            definition:
              "Идея объединять данные и поведение, а внутренние детали прятать за понятным внешним доступом."
          },
          {
            term: "Наследование",
            definition:
              "Способ создать новый тип на основе уже существующего, сохранив или изменив часть поведения."
          },
          {
            term: "Полиморфизм",
            definition:
              "Возможность работать с разными реализациями через общий тип или общий контракт."
          }
        ]
      }
    ]
  }
];

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

const state = {
  screen: "home",
  activeMode: null,
  pendingTarget: null,
  quizMode: "mixed",
  cardSession: null,
  quizSession: null,
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
  referenceTopicSelect: document.querySelector("#referenceTopicSelect"),
  referenceDeckSelect: document.querySelector("#referenceDeckSelect"),
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
      deckTitle: deck.title
    }))
  )
);

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
  localStorage.setItem("terms-theme", theme);
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("terms-theme");
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
  resetCardsUi();
  resetQuizUi();
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
  els.repeatCardBtn.disabled = true;
  els.knowCardBtn.disabled = true;
  els.cardSessionNote.textContent =
    "Результат тренировки не сохраняется. Это место для спокойного повторения перед практикой и защитой лабораторных работ.";
}

function startCards() {
  const topicId = els.cardTopicSelect.value;
  const deckId = els.cardDeckSelect.value;
  const sourceTerms = getTerms(topicId, deckId);
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
}

function finishCards() {
  const session = state.cardSession;
  els.cardProgress.textContent = "Тренировка завершена";
  els.cardProgressFill.style.width = "100%";
  els.flashcard.classList.remove("is-flipped");
  els.flashcardTitle.textContent = "Готово";
  els.flashcardText.textContent = `Понятно: ${session.known}. На повторение: ${session.repeated}. Результат не сохранен.`;
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
  els.quizProgress.textContent = "Выберите колоду";
  els.quizProgressFill.style.width = "0%";
  els.quizType.textContent = "Тест не начат";
  els.quizQuestion.textContent = "Нажмите «Начать тест», когда будете готовы.";
  els.answerGrid.innerHTML = "";
  els.quizFeedback.textContent = "";
}

function startQuiz() {
  const sourceTerms = getTerms(els.quizTopicSelect.value, els.quizDeckSelect.value);
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
          ${option}
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

  els.quizFeedback.textContent = isCorrect ? randomItem(positivePhrases) : randomItem(supportPhrases);

  window.setTimeout(() => {
    session.index += 1;
    renderQuestion();
  }, 1300);
}

function finishQuiz() {
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

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function getReferenceTerms() {
  const topicId = els.referenceTopicSelect.value;
  const deckId = els.referenceDeckSelect.value;
  const query = els.searchInput.value.trim().toLowerCase();
  let terms = allTerms;

  if (topicId !== "all") {
    terms = terms.filter((item) => item.topicId === topicId);
  }
  if (deckId !== "all") {
    terms = terms.filter((item) => item.deckId === deckId);
  }
  if (query) {
    terms = terms.filter((item) =>
      [item.term, item.definition, item.topicTitle, item.deckTitle].some((value) =>
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
              <div class="term-body">${item.definition}</div>
            </details>
          `
        )
        .join("")
    : '<p class="session-note">Ничего не найдено. Попробуйте другое слово или сбросьте фильтр.</p>';
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
  startQuoteRotation();
  fillTopicSelect(els.cardTopicSelect);
  fillDeckSelect(els.cardTopicSelect, els.cardDeckSelect);
  fillTopicSelect(els.quizTopicSelect);
  fillDeckSelect(els.quizTopicSelect, els.quizDeckSelect);
  fillTopicSelect(els.referenceTopicSelect, true);
  fillReferenceDeckSelect();
  renderReference();
  wireEvents();
}

init();
