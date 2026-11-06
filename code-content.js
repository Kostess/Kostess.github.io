// deckId + term links glossary entries; codeDeckId selects a practice deck.
const codeDecks = [
  {
    "id": "lab4-variables-values",
    "lab": "ЛБ 4",
    "title": "Переменные и значения"
  },
  {
    "id": "lab4-csharp-data-types",
    "lab": "ЛБ 4",
    "title": "Типы данных"
  },
  {
    "id": "lab4-typing-and-output",
    "lab": "ЛБ 4",
    "title": "Типизация и вывод"
  },
  {
    "id": "lab5-input-conversion",
    "lab": "ЛБ 5",
    "title": "Ввод и преобразования"
  },
  {
    "id": "lab5-operations-output",
    "lab": "ЛБ 5",
    "title": "Операции и оформление вывода"
  },
  {
    "id": "practice-conditions-logic",
    "lab": "ЛБ 6",
    "title": "Условия и логика"
  },
  {
    "id": "practice-branching-menu",
    "lab": "ЛБ 6",
    "title": "Ветвление и меню"
  },
  {
    "id": "practice-loops-basics",
    "lab": "ЛБ 7",
    "title": "Основы циклов"
  },
  {
    "id": "practice-loops-control",
    "lab": "ЛБ 7",
    "title": "Управление циклами и повторный ввод"
  },
  {
    "id": "lab4-assignment-reading",
    "lab": "ЛБ 4",
    "title": "Читаем присваивания"
  },
  {
    "id": "lab4-text-output-reading",
    "lab": "ЛБ 4",
    "title": "Типы, строки и порядок вывода"
  },
  {
    "id": "lab5-division-and-casts",
    "lab": "ЛБ 5",
    "title": "Деление и преобразования"
  },
  {
    "id": "lab5-operation-order",
    "lab": "ЛБ 5",
    "title": "Порядок операций и изменение значений"
  },
  {
    "id": "lab5-input-and-text",
    "lab": "ЛБ 5",
    "title": "Числа и текст после ввода"
  },
  {
    "id": "lab6-combine-conditions",
    "lab": "ЛБ 6",
    "title": "Составные условия и границы"
  },
  {
    "id": "lab6-reading-branches",
    "lab": "ЛБ 6",
    "title": "Читаем ветвления"
  },
  {
    "id": "lab7-tracing-and-accumulation",
    "lab": "ЛБ 7",
    "title": "Трассировка и накопление результата"
  },
  {
    "id": "lab8-array-basics",
    "lab": "ЛБ 8",
    "title": "Массив, индекс и длина"
  },
  {
    "id": "lab8-traversal-update",
    "lab": "ЛБ 8",
    "title": "Обход и изменение элементов"
  },
  {
    "id": "lab8-search-summary",
    "lab": "ЛБ 8",
    "title": "Сумма, минимум, максимум и поиск"
  },
  {
    "id": "lab8-input-journal",
    "lab": "ЛБ 8",
    "title": "Проверка ввода и журнал группы"
  },
  {
    "id": "lab9-calls-parameters",
    "lab": "ЛБ 9",
    "title": "Объявление, вызов и аргументы"
  },
  {
    "id": "lab9-return-scope",
    "lab": "ЛБ 9",
    "title": "return, void и локальные переменные"
  },
  {
    "id": "lab9-small-methods",
    "lab": "ЛБ 9",
    "title": "Короткие методы для практики"
  },
  {
    "id": "lab9-purchase",
    "lab": "ЛБ 9",
    "title": "Стоимость покупки и скидка"
  },
  {
    "id": "lab10-method-overloads",
    "lab": "ЛБ 10",
    "title": "Сигнатуры, перегрузки и аргументы"
  },
  {
    "id": "lab10-array-operations",
    "lab": "ЛБ 10",
    "title": "Копирование, сортировка и поиск"
  },
  {
    "id": "lab10-method-refactoring",
    "lab": "ЛБ 10",
    "title": "Как разделить программу на методы"
  },
  {
    "id": "lab4-mixed-reading",
    "lab": "ЛБ 4",
    "title": "Разбираем порядок выполнения"
  },
  {
    "id": "lab5-mixed-reading",
    "lab": "ЛБ 5",
    "title": "Разбираем порядок выполнения"
  },
  {
    "id": "lab6-mixed-reading",
    "lab": "ЛБ 6",
    "title": "Разбираем порядок выполнения"
  },
  {
    "id": "lab7-mixed-reading",
    "lab": "ЛБ 7",
    "title": "Разбираем порядок выполнения"
  },
  {
    "id": "lab8-mixed-reading",
    "lab": "ЛБ 8",
    "title": "Разбираем порядок выполнения"
  },
  {
    "id": "lab9-mixed-reading",
    "lab": "ЛБ 9",
    "title": "Разбираем порядок выполнения"
  }
];

const codeLessons = [
  {
    "id": "variable",
    "deckId": "variables-values",
    "term": "Переменная",
    "exampleCode": "int score = 4;\nConsole.WriteLine(score);",
    "exampleResult": "4",
    "exampleNote": "Имя score позволяет обратиться к сохранённому числу позже.",
    "kind": "Что выведет код?",
    "challengeCode": "int lives = 3;\nConsole.WriteLine(lives);",
    "prompt": "Что появится в консоли?",
    "options": [
      "3",
      "lives",
      "int",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "В lives хранится число 3. Console.WriteLine выводит значение переменной, а не её имя.",
    "codeDeckId": "lab4-variables-values",
    "variants": [
      {
        "challengeCode": "int lives = 5;\nConsole.WriteLine(lives);",
        "options": [
          "5",
          "6",
          "4",
          "lives"
        ],
        "correctIndex": 0,
        "challengeResult": "5",
        "explanation": "Переменная lives хранит 5; это значение и выводится."
      },
      {
        "challengeCode": "int lives = 8;\nConsole.WriteLine(lives);",
        "options": [
          "8",
          "9",
          "7",
          "lives"
        ],
        "correctIndex": 0,
        "challengeResult": "8",
        "explanation": "Переменная lives хранит 8; это значение и выводится."
      },
      {
        "challengeCode": "int first = 4;\nint second = first;\nfirst = 10;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "4 4",
        "options": [
          "4 4",
          "5 5",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 5;\nint second = first;\nfirst = 11;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "5 11",
        "options": [
          "5 11",
          "6 12",
          "11 5",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 6;\nint second = first;\nfirst = 12;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "6 6",
        "options": [
          "6 6",
          "7 7",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 7;\nint second = first;\nfirst = 13;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "7 13",
        "options": [
          "7 13",
          "8 14",
          "31 7",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 8;\nint second = first;\nfirst = 14;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "8 8",
        "options": [
          "8 8",
          "9 9",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 9;\nint second = first;\nfirst = 15;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "9 15",
        "options": [
          "9 15",
          "10 16",
          "51 9",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "initialization",
    "deckId": "variables-values",
    "term": "Инициализация",
    "exampleCode": "string city = \"Казань\";\nConsole.WriteLine(city);",
    "exampleResult": "Казань",
    "exampleNote": "Первое значение задаётся сразу при объявлении переменной.",
    "kind": "Найдите строку",
    "challengeCode": "int level;\nlevel = 2;\nConsole.WriteLine(level);",
    "prompt": "В какой строке переменная level впервые получает значение?",
    "options": [
      "В первой",
      "Во второй",
      "В третьей",
      "Значение не задано"
    ],
    "correctIndex": 1,
    "explanation": "В первой строке переменная только объявлена. Первое присваивание происходит во второй строке.",
    "codeDeckId": "lab4-variables-values"
  },
  {
    "id": "assignment",
    "deckId": "variables-values",
    "term": "Присваивание",
    "exampleCode": "int points = 2;\npoints = 5;\nConsole.WriteLine(points);",
    "exampleResult": "5",
    "exampleNote": "Второе присваивание заменяет прежнее значение points.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 1;\ncount = count + 2;\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "1",
      "2",
      "3",
      "12"
    ],
    "correctIndex": 2,
    "explanation": "Сначала count равен 1. Выражение count + 2 даёт 3, и это значение сохраняется в count.",
    "codeDeckId": "lab4-variables-values",
    "variants": [
      {
        "challengeCode": "int count = 4;\ncount = count + 3;\nConsole.WriteLine(count);",
        "options": [
          "7",
          "4",
          "3",
          "12"
        ],
        "correctIndex": 0,
        "challengeResult": "7",
        "explanation": "К 4 прибавляется 3: получается 7."
      },
      {
        "challengeCode": "int count = 6;\ncount = count + 2;\nConsole.WriteLine(count);",
        "options": [
          "8",
          "6",
          "2",
          "12"
        ],
        "correctIndex": 0,
        "challengeResult": "8",
        "explanation": "К 6 прибавляется 2: получается 8."
      },
      {
        "challengeCode": "int first = 4;\nint second = first;\nfirst = 10;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "4 4",
        "options": [
          "4 4",
          "5 5",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 5;\nint second = first;\nfirst = 11;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "5 11",
        "options": [
          "5 11",
          "6 12",
          "11 5",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 6;\nint second = first;\nfirst = 12;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "6 6",
        "options": [
          "6 6",
          "7 7",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 7;\nint second = first;\nfirst = 13;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "7 13",
        "options": [
          "7 13",
          "8 14",
          "31 7",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 8;\nint second = first;\nfirst = 14;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "8 8",
        "options": [
          "8 8",
          "9 9",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 9;\nint second = first;\nfirst = 15;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "9 15",
        "options": [
          "9 15",
          "10 16",
          "51 9",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "int",
    "deckId": "csharp-data-types",
    "term": "int",
    "exampleCode": "int apples = 6;\nConsole.WriteLine(apples + 2);",
    "exampleResult": "8",
    "exampleNote": "int хранит целое число; здесь к нему прибавляется ещё 2.",
    "kind": "Где ошибка?",
    "challengeCode": "int apples = \"6\";\nConsole.WriteLine(apples);",
    "prompt": "Почему этот код не соберётся?",
    "options": [
      "int нельзя выводить",
      "Строку нельзя напрямую присвоить int",
      "Имя apples запрещено",
      "После 6 нужна точка"
    ],
    "correctIndex": 1,
    "explanation": "Кавычки делают «6» строкой. Для int нужно записать число без кавычек или явно преобразовать строку.",
    "codeDeckId": "lab4-csharp-data-types"
  },
  {
    "id": "bool",
    "deckId": "csharp-data-types",
    "term": "bool",
    "exampleCode": "bool isReady = true;\nConsole.WriteLine(isReady);",
    "exampleResult": "True",
    "exampleNote": "bool хранит логическое значение true или false. В консоли оно выводится с прописной буквы.",
    "kind": "Что выведет код?",
    "challengeCode": "bool isReady = false;\nConsole.WriteLine(isReady);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "false;",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "В переменной хранится false; Console.WriteLine выводит False.",
    "codeDeckId": "lab4-csharp-data-types",
    "challengeResult": "False"
  },
  {
    "id": "string",
    "deckId": "csharp-data-types",
    "term": "string",
    "exampleCode": "string word = \"код\";\nConsole.WriteLine(word + \"ер\");",
    "exampleResult": "кодер",
    "exampleNote": "Оператор + соединяет две строки в одну.",
    "kind": "Что выведет код?",
    "challengeCode": "string first = \"C\";\nstring second = \"#\";\nConsole.WriteLine(first + second);",
    "prompt": "Что появится в консоли?",
    "options": [
      "C#",
      "C #",
      "firstsecond",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Строки соединяются без пробела: «C» + «#» даёт «C#».",
    "codeDeckId": "lab4-csharp-data-types"
  },
  {
    "id": "decimal",
    "deckId": "csharp-data-types",
    "term": "decimal",
    "exampleCode": "decimal price = 3m;\nConsole.WriteLine(price + 2m);",
    "exampleResult": "5",
    "exampleNote": "Суффикс m задаёт тип decimal. Здесь складываются два значения этого типа.",
    "kind": "Где ошибка?",
    "challengeCode": "decimal price = 12.5;\nConsole.WriteLine(price);",
    "prompt": "Почему этот код не соберётся?",
    "options": [
      "Для decimal нужен суффикс m у литерала",
      "decimal нельзя выводить",
      "Дробные числа запрещены",
      "Имя price зарезервировано"
    ],
    "correctIndex": 0,
    "explanation": "Литерал 12.5 без суффикса имеет тип double. Запишите 12.5m для decimal.",
    "codeDeckId": "lab4-csharp-data-types"
  },
  {
    "id": "var",
    "deckId": "typing-and-output",
    "term": "var",
    "exampleCode": "var year = 2026;\nConsole.WriteLine(year);",
    "exampleResult": "2026",
    "exampleNote": "Компилятор определяет тип int по начальному значению. Тип переменной не меняется потом сам собой.",
    "kind": "Где ошибка?",
    "challengeCode": "var count = 5;\ncount = \"пять\";",
    "prompt": "Почему этот код не соберётся?",
    "options": [
      "var нельзя применять с числами",
      "count уже имеет тип int",
      "count нельзя изменить",
      "Нужен Console.WriteLine"
    ],
    "correctIndex": 1,
    "explanation": "По значению 5 компилятор определил тип int. Строку нельзя напрямую записать в int.",
    "codeDeckId": "lab4-typing-and-output"
  },
  {
    "id": "write-line",
    "deckId": "typing-and-output",
    "term": "Console.WriteLine",
    "exampleCode": "Console.WriteLine(\"Первая\");\nConsole.WriteLine(\"Вторая\");",
    "exampleResult": "Первая\nВторая",
    "exampleNote": "Каждый вызов выводит значение и переводит курсор на новую строку.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(\"A\");\nConsole.WriteLine(\"B\");",
    "prompt": "Как будут расположены буквы в консоли?",
    "options": [
      "A и B на одной строке",
      "A, затем B на новой строке",
      "Только B",
      "Ничего"
    ],
    "correctIndex": 1,
    "explanation": "После каждого Console.WriteLine курсор переходит на новую строку.",
    "codeDeckId": "lab4-typing-and-output"
  },
  {
    "id": "interpolation",
    "deckId": "typing-and-output",
    "term": "Строковая интерполяция",
    "exampleCode": "int age = 18;\nConsole.WriteLine($\"Возраст: {age}\");",
    "exampleResult": "Возраст: 18",
    "exampleNote": "Знак $ разрешает вставить значение age внутрь строки через фигурные скобки.",
    "kind": "Что выведет код?",
    "challengeCode": "string name = \"Ира\";\nConsole.WriteLine($\"Привет, {name}!\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "Привет, Ира!",
      "Привет, {name}!",
      "Привет, name!",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Знак $ включает интерполяцию: {name} заменяется значением переменной, то есть «Ира».",
    "codeDeckId": "lab4-typing-and-output"
  },
  {
    "id": "read-line",
    "deckId": "input-operations-conversions",
    "term": "Console.ReadLine",
    "exampleCode": "string name = Console.ReadLine();\nConsole.WriteLine($\"Привет, {name}!\");",
    "exampleInput": "Мира",
    "exampleResult": "Привет, Мира!",
    "exampleNote": "Console.ReadLine читает введённый текст как строку. Предполагается, что пользователь ввёл указанное имя.",
    "kind": "Что выведет код?",
    "challengeCode": "string city = Console.ReadLine();\nConsole.WriteLine($\"Город: {city}\");",
    "challengeInput": "Омск",
    "prompt": "Что появится в консоли после ввода?",
    "options": [
      "Город: Омск",
      "Город: city",
      "Омск: Город",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Console.ReadLine вернёт строку «Омск», а интерполяция подставит её вместо {city}.",
    "codeDeckId": "lab5-input-conversion"
  },
  {
    "id": "integer-division",
    "deckId": "input-operations-conversions",
    "term": "Целочисленное деление",
    "exampleCode": "Console.WriteLine(7 / 2);",
    "exampleResult": "3",
    "exampleNote": "Оба операнда целые, поэтому дробная часть результата отбрасывается.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(11 / 4);",
    "prompt": "Что появится в консоли?",
    "options": [
      "2",
      "2.75",
      "3",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "11 / 4 при целочисленном делении даёт 2. Дробная часть 0.75 отбрасывается.",
    "codeDeckId": "lab5-operations-output",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(17 / 5);",
        "options": [
          "3",
          "2",
          "17",
          "5"
        ],
        "correctIndex": 0,
        "challengeResult": "3",
        "explanation": "Целочисленное деление даёт 3; дробная часть отбрасывается."
      },
      {
        "challengeCode": "Console.WriteLine(19 / 4);",
        "options": [
          "4",
          "3",
          "19",
          "Ничего"
        ],
        "correctIndex": 0,
        "challengeResult": "4",
        "explanation": "Целочисленное деление даёт 4; дробная часть отбрасывается."
      },
      {
        "challengeCode": "int left = 1 * 17;\nint right = 4;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "4\n1",
        "options": [
          "4\n1",
          "1\n4",
          "5\n2",
          "41"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = -1 * 20;\nint right = 2;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "-10\n0",
        "options": [
          "-10\n0",
          "0\n-10",
          "-11\n1",
          "-100"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 1 * 23;\nint right = 3;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "7\n2",
        "options": [
          "7\n2",
          "2\n7",
          "8\n3",
          "72"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = -1 * 26;\nint right = 4;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "-6\n-2",
        "options": [
          "-6\n-2",
          "-2\n-6",
          "-7\n-3",
          "-6-2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 1 * 29;\nint right = 2;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "14\n1",
        "options": [
          "14\n1",
          "1\n14",
          "15\n2",
          "141"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = -1 * 32;\nint right = 3;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "-10\n-2",
        "options": [
          "-10\n-2",
          "-2\n-10",
          "-11\n-3",
          "-10-2"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "remainder",
    "deckId": "input-operations-conversions",
    "term": "Остаток от деления",
    "exampleCode": "Console.WriteLine(7 % 2);",
    "exampleResult": "1",
    "exampleNote": "7 = 2 × 3 + 1, поэтому остаток равен 1.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(14 % 5);",
    "prompt": "Что появится в консоли?",
    "options": [
      "2",
      "4",
      "5",
      "14"
    ],
    "correctIndex": 1,
    "explanation": "14 = 5 × 2 + 4. Оператор % возвращает остаток 4.",
    "codeDeckId": "lab5-operations-output",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(17 % 5);",
        "options": [
          "2",
          "3",
          "17",
          "5"
        ],
        "correctIndex": 0,
        "challengeResult": "2",
        "explanation": "17 = 5 × 3 + 2; остаток равен 2."
      },
      {
        "challengeCode": "Console.WriteLine(19 % 4);",
        "options": [
          "3",
          "4",
          "19",
          "Ничего"
        ],
        "correctIndex": 0,
        "challengeResult": "3",
        "explanation": "19 = 4 × 4 + 3; остаток равен 3."
      },
      {
        "challengeCode": "int value = 16;\nConsole.WriteLine(value + 3 % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "19",
        "options": [
          "19",
          "20",
          "18",
          "21"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 17;\nConsole.WriteLine((value + 3) % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 18;\nConsole.WriteLine(value + 3 % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 19;\nConsole.WriteLine((value + 3) % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 20;\nConsole.WriteLine(value + 3 % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "23",
        "options": [
          "23",
          "24",
          "22",
          "25"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 21;\nConsole.WriteLine((value + 3) % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "explicit-conversion",
    "deckId": "input-operations-conversions",
    "term": "Явное преобразование",
    "exampleCode": "double value = 4.8;\nint whole = (int)value;\nConsole.WriteLine(whole);",
    "exampleResult": "4",
    "exampleNote": "Приведение (int) отбрасывает дробную часть положительного числа.",
    "kind": "Что выведет код?",
    "challengeCode": "double value = 9.9;\nConsole.WriteLine((int)value);",
    "prompt": "Что появится в консоли?",
    "options": [
      "9",
      "10",
      "9.9",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "При приведении 9.9 к int дробная часть отбрасывается, получается 9.",
    "codeDeckId": "lab5-input-conversion"
  },
  {
    "id": "invalid-input",
    "deckId": "input-operations-conversions",
    "term": "Ввод целого числа",
    "exampleCode": "string text = Console.ReadLine();\nint number = int.Parse(text);\nConsole.WriteLine(number + 1);",
    "exampleInput": "7",
    "exampleResult": "8",
    "exampleNote": "Пользователь вводит корректную запись целого числа. Parse преобразует строку в int.",
    "kind": "Что выведет код?",
    "challengeCode": "string text = Console.ReadLine();\nint number = int.Parse(text);\nConsole.WriteLine(number * 2);",
    "challengeInput": "6",
    "prompt": "Что появится в консоли после ввода?",
    "options": [
      "6",
      "12",
      "62",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Ввод 6 преобразуется в число; затем 6 * 2 = 12.",
    "codeDeckId": "lab5-input-conversion",
    "challengeResult": "12"
  },
  {
    "id": "lab6-equality",
    "deckId": "conditions-logic",
    "term": "Равенство ==",
    "exampleCode": "int score = 60;\nConsole.WriteLine(score == 60);",
    "exampleResult": "True",
    "exampleNote": "Два знака == сравнивают значения. Один знак = присваивает значение переменной.",
    "kind": "Что выведет код?",
    "challengeCode": "int debts = 0;\nConsole.WriteLine(debts == 0);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "1",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "debts равно 0. Сравнение 0 == 0 истинно; Console.WriteLine выводит True.",
    "challengeResult": "True",
    "codeDeckId": "practice-conditions-logic"
  },
  {
    "id": "lab6-and",
    "deckId": "conditions-logic",
    "term": "Логическое И &&",
    "exampleCode": "int score = 95;\nint debts = 1;\nbool hasAdmission = score >= 60 && debts == 0;\nConsole.WriteLine(hasAdmission);",
    "exampleResult": "False",
    "exampleNote": "Баллов хватает, но есть задолженность. Для && оба условия должны быть верны.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 60;\nint debts = 0;\nConsole.WriteLine(score >= 60 && debts == 0);",
    "prompt": "Есть ли допуск при этих значениях? Что выведет код?",
    "options": [
      "True",
      "False",
      "60",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "60 достигает проходного балла, а задолженностей нет. Обе части && равны true.",
    "codeDeckId": "practice-conditions-logic"
  },
  {
    "id": "lab6-or",
    "deckId": "conditions-logic",
    "term": "Логическое ИЛИ ||",
    "exampleCode": "int score = 95;\nint debts = 1;\nbool needsConsultation = score < 60 || debts > 0;\nConsole.WriteLine(needsConsultation);",
    "exampleResult": "True",
    "exampleNote": "Консультация нужна из-за задолженности. Для || достаточно одного верного условия.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 59;\nint debts = 0;\nConsole.WriteLine(score < 60 || debts > 0);",
    "prompt": "Нужна ли консультация по этим правилам? Что выведет код?",
    "options": [
      "True",
      "False",
      "60",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "59 меньше 60, поэтому консультация нужна. Для || достаточно истинности первой проверки, даже когда задолженностей нет.",
    "challengeResult": "True",
    "codeDeckId": "practice-conditions-logic"
  },
  {
    "id": "lab6-not",
    "deckId": "conditions-logic",
    "term": "Логическое НЕ !",
    "exampleCode": "bool hasDebts = false;\nConsole.WriteLine(!hasDebts);",
    "exampleResult": "True",
    "exampleNote": "Оператор ! превращает false в true: задолженностей нет.",
    "kind": "Что выведет код?",
    "challengeCode": "bool hasDebts = true;\nConsole.WriteLine(!hasDebts);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "0",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "hasDebts равно true, а ! меняет значение на противоположное — false.",
    "codeDeckId": "practice-conditions-logic"
  },
  {
    "id": "lab6-range",
    "deckId": "conditions-logic",
    "term": "Проверка диапазона",
    "exampleCode": "int score = 100;\nbool isValid = score >= 0 && score <= 100;\nConsole.WriteLine(isValid);",
    "exampleResult": "True",
    "exampleNote": "Границы включены: 0 и 100 — допустимые баллы.",
    "kind": "Где ошибка?",
    "challengeCode": "int score = 75;\nbool isValid = 0 <= score <= 100;",
    "prompt": "Почему этот код не соберётся?",
    "options": [
      "Нужно записать две проверки и соединить их через &&",
      "75 выходит за диапазон",
      "bool нельзя присваивать результат",
      "Нужны круглые скобки вокруг 100"
    ],
    "correctIndex": 0,
    "explanation": "В C# нельзя записывать цепочку 0 <= score <= 100. Правильно: score >= 0 && score <= 100.",
    "codeDeckId": "practice-conditions-logic"
  },
  {
    "id": "lab6-constant",
    "deckId": "conditions-logic",
    "term": "Константа const",
    "exampleCode": "const int PassingScore = 60;\nConsole.WriteLine(59 >= PassingScore);",
    "exampleResult": "False",
    "exampleNote": "Проходной балл задан в одном месте и не меняется во время работы программы.",
    "kind": "Где ошибка?",
    "challengeCode": "const int PassingScore = 60;\nPassingScore = 70;",
    "prompt": "Почему этот код не соберётся?",
    "options": [
      "Константе нельзя присвоить новое значение",
      "const нельзя использовать с int",
      "Имя должно быть строчными буквами",
      "После 70 не нужна точка с запятой"
    ],
    "correctIndex": 0,
    "explanation": "Значение const задаётся при объявлении; строка PassingScore = 70 пытается изменить константу.",
    "codeDeckId": "practice-conditions-logic"
  },
  {
    "id": "lab6-validation",
    "deckId": "conditions-logic",
    "term": "Проверка допустимости данных",
    "exampleCode": "int score = 101;\nint debts = 0;\nbool isValid = score >= 0 && score <= 100 && debts >= 0;\nif (isValid)\n{\n    Console.WriteLine(\"Данные приняты\");\n}\nelse\n{\n    Console.WriteLine(\"Ошибка данных\");\n}",
    "exampleResult": "Ошибка данных",
    "exampleNote": "Баллы 101 вне диапазона. Расчёты должны выполняться только в ветке допустимых данных.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 75;\nint debts = -1;\nbool isValid = score >= 0 && score <= 100 && debts >= 0;\nConsole.WriteLine(isValid ? \"Данные приняты\" : \"Ошибка данных\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "Данные приняты",
      "Ошибка данных",
      "75",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Количество задолженностей отрицательно, поэтому isValid равно false.",
    "codeDeckId": "practice-conditions-logic"
  },
  {
    "id": "lab6-if",
    "deckId": "branching-menu",
    "term": "if",
    "exampleCode": "int score = 59;\nif (score < 60)\n{\n    Console.WriteLine(\"Недостаточно баллов\");\n}",
    "exampleResult": "Недостаточно баллов",
    "exampleNote": "Блок в фигурных скобках выполняется, потому что 59 < 60 равно true.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 60;\nif (score < 60)\n{\n    Console.WriteLine(\"Консультация\");\n}\nelse\n{\n    Console.WriteLine(\"Баллов достаточно\");\n}",
    "prompt": "Какую ветку выберет программа?",
    "options": [
      "Консультация",
      "Баллов достаточно",
      "Обе ветки",
      "Ни одну"
    ],
    "correctIndex": 1,
    "explanation": "Условие 60 < 60 ложно. Выполняется только блок else.",
    "codeDeckId": "practice-branching-menu"
  },
  {
    "id": "lab6-else-if",
    "deckId": "branching-menu",
    "term": "else if",
    "exampleCode": "int score = 75;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 75)\n{\n    Console.WriteLine(4);\n}\nelse\n{\n    Console.WriteLine(3);\n}",
    "exampleResult": "4",
    "exampleNote": "Первое условие ложно, второе верно. После него остальные ветки цепочки не проверяются.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 74;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 75)\n{\n    Console.WriteLine(4);\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(3);\n}",
    "prompt": "Какая оценка появится в консоли?",
    "options": [
      "5",
      "4",
      "3",
      "Ничего"
    ],
    "correctIndex": 2,
    "explanation": "74 меньше 90 и 75, но не меньше 60. Выполняется третья ветка.",
    "codeDeckId": "practice-branching-menu"
  },
  {
    "id": "lab6-independent-if",
    "deckId": "branching-menu",
    "term": "Независимые if",
    "exampleCode": "int score = 59;\nint debts = 1;\nif (score < 60)\n{\n    Console.WriteLine(\"Низкий балл\");\n}\nif (debts > 0)\n{\n    Console.WriteLine(\"Есть задолженность\");\n}",
    "exampleResult": "Низкий балл\nЕсть задолженность",
    "exampleNote": "Это две отдельные проверки, поэтому выполняются оба блока.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 60;\nint debts = 1;\nif (score < 60)\n{\n    Console.WriteLine(\"Низкий балл\");\n}\nif (debts > 0)\n{\n    Console.WriteLine(\"Есть задолженность\");\n}",
    "prompt": "Какие сообщения появятся?",
    "options": [
      "Только «Низкий балл»",
      "Только «Есть задолженность»",
      "Оба сообщения",
      "Ни одного"
    ],
    "correctIndex": 1,
    "explanation": "Первое условие ложно, второе истинно. Независимые if проверяются по отдельности.",
    "codeDeckId": "practice-branching-menu"
  },
  {
    "id": "lab6-condition-order",
    "deckId": "branching-menu",
    "term": "Порядок проверок",
    "exampleCode": "int score = 95;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 75)\n{\n    Console.WriteLine(4);\n}",
    "exampleResult": "5",
    "exampleNote": "Сначала проверяется высокий порог. Иначе 95 подошло бы и под более широкое условие >= 60.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 95;\nif (score >= 60)\n{\n    Console.WriteLine(3);\n}\nelse if (score >= 90)\n{\n    Console.WriteLine(5);\n}",
    "prompt": "Что выведет цепочка с неверным порядком условий?",
    "options": [
      "3",
      "5",
      "3 и 5",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "95 уже подходит под первое условие >= 60. До ветки с оценкой 5 программа не дойдёт.",
    "codeDeckId": "practice-branching-menu"
  },
  {
    "id": "lab6-ternary",
    "deckId": "branching-menu",
    "term": "Условный оператор ?:",
    "exampleCode": "bool hasDebts = true;\nstring debtStatus = hasDebts ? \"Есть задолженности\" : \"Задолженностей нет\";\nConsole.WriteLine(debtStatus);",
    "exampleResult": "Есть задолженности",
    "exampleNote": "При true выбирается значение до двоеточия, при false — после него.",
    "kind": "Что выведет код?",
    "challengeCode": "bool hasDebts = false;\nConsole.WriteLine(hasDebts ? \"Есть задолженности\" : \"Задолженностей нет\");",
    "prompt": "Какой статус появится в консоли?",
    "options": [
      "Есть задолженности",
      "Задолженностей нет",
      "False",
      "Оба статуса"
    ],
    "correctIndex": 1,
    "explanation": "Условие равно false, поэтому оператор ?: выбирает выражение после двоеточия.",
    "codeDeckId": "practice-branching-menu",
    "variants": [
      {
        "challengeCode": "int score = 59;\nConsole.WriteLine(score >= 60 ? \"Зачёт\" : \"Повторить\");",
        "options": [
          "Повторить",
          "Зачёт",
          "True",
          "False"
        ],
        "correctIndex": 0,
        "challengeResult": "Повторить",
        "explanation": "Условие 59 >= 60 — ложь; выбирается «Повторить»."
      },
      {
        "challengeCode": "int score = 75;\nConsole.WriteLine(score >= 60 ? \"Зачёт\" : \"Повторить\");",
        "options": [
          "Зачёт",
          "Повторить",
          "True",
          "False"
        ],
        "correctIndex": 0,
        "challengeResult": "Зачёт",
        "explanation": "Условие 75 >= 60 — истина; выбирается «Зачёт»."
      },
      {
        "challengeCode": "int first = 5;\nint second = 10;\nint result = first > second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 6;\nint second = 9;\nint result = first < second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 7;\nint second = 8;\nint result = first > second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 8;\nint second = 7;\nint result = first < second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 9;\nint second = 6;\nint result = first > second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 10;\nint second = 5;\nint result = first < second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab6-switch",
    "deckId": "branching-menu",
    "term": "switch",
    "exampleCode": "int action = 2;\nswitch (action)\n{\n    case 1:\n        Console.WriteLine(\"Данные\");\n        break;\n    case 2:\n        Console.WriteLine(\"Допуск\");\n        break;\n    default:\n        Console.WriteLine(\"Неизвестный пункт меню\");\n        break;\n}",
    "exampleResult": "Допуск",
    "exampleNote": "Значение 2 выбирает case 2. break завершает switch.",
    "kind": "Что выведет код?",
    "challengeCode": "int action = 3;\nswitch (action)\n{\n    case 1:\n        Console.WriteLine(\"Данные\");\n        break;\n    case 3:\n        Console.WriteLine(\"Оценка\");\n        break;\n    default:\n        Console.WriteLine(\"Неизвестный пункт меню\");\n        break;\n}",
    "prompt": "Какой пункт меню выполнится?",
    "options": [
      "Данные",
      "Оценка",
      "Неизвестный пункт меню",
      "Оба case"
    ],
    "correctIndex": 1,
    "explanation": "action равно 3, поэтому выполняется case 3 и затем break.",
    "codeDeckId": "practice-branching-menu"
  },
  {
    "id": "lab6-default",
    "deckId": "branching-menu",
    "term": "default",
    "exampleCode": "int action = 9;\nswitch (action)\n{\n    case 1:\n        Console.WriteLine(\"Данные\");\n        break;\n    default:\n        Console.WriteLine(\"Неизвестный пункт меню\");\n        break;\n}",
    "exampleResult": "Неизвестный пункт меню",
    "exampleNote": "Номер 9 не совпадает ни с одним case, поэтому выполняется default.",
    "kind": "Что выведет код?",
    "challengeCode": "int action = 4;\nswitch (action)\n{\n    case 1:\n        Console.WriteLine(\"Данные\");\n        break;\n    default:\n        Console.WriteLine(\"Неизвестный пункт меню\");\n        break;\n}",
    "prompt": "Что увидит пользователь?",
    "options": [
      "Данные",
      "Неизвестный пункт меню",
      "4",
      "Ничего"
    ],
    "correctIndex": 1,
    "explanation": "Для 4 нет подходящего case, поэтому выбирается ветка default.",
    "codeDeckId": "practice-branching-menu"
  },
  {
    "id": "lab6-break",
    "deckId": "branching-menu",
    "term": "break",
    "exampleCode": "int action = 1;\nswitch (action)\n{\n    case 1:\n        Console.WriteLine(\"Данные\");\n        break;\n    default:\n        Console.WriteLine(\"Неизвестно\");\n        break;\n}\nConsole.WriteLine(\"Готово\");",
    "exampleResult": "Данные\nГотово",
    "exampleNote": "break завершает switch; команда после него продолжает выполняться.",
    "kind": "Что выведет код?",
    "challengeCode": "int action = 1;\nswitch (action)\n{\n    case 1:\n        Console.WriteLine(\"Имя\");\n        break;\n    default:\n        Console.WriteLine(\"Неизвестно\");\n        break;\n}\nConsole.WriteLine(\"Конец\");",
    "prompt": "Какие строки появятся в консоли?",
    "options": [
      "Только «Имя»",
      "«Имя», затем «Конец»",
      "«Имя», затем «Неизвестно»",
      "Только «Конец»"
    ],
    "correctIndex": 1,
    "explanation": "break выходит из switch, но не завершает программу. После него выводится «Конец».",
    "codeDeckId": "practice-branching-menu"
  },
  {
    "id": "lab4-declaration",
    "deckId": "variables-values",
    "term": "Объявление переменной",
    "exampleCode": "int count;\ncount = 6;\nConsole.WriteLine(count);",
    "exampleResult": "6",
    "exampleNote": "Объявление создаёт переменную, а следующая строка задаёт значение.",
    "kind": "Что выведет код?",
    "challengeCode": "int level;\nlevel = 4;\nConsole.WriteLine(level);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "4",
      "level",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "После объявления level получает значение 4; оно и выводится.",
    "challengeResult": "4",
    "codeDeckId": "lab4-variables-values",
    "variants": [
      {
        "challengeCode": "int level = 5;\nConsole.WriteLine(level);",
        "options": [
          "5",
          "6",
          "4",
          "level"
        ],
        "correctIndex": 0,
        "challengeResult": "5",
        "explanation": "Переменная level хранит 5; это значение и выводится."
      },
      {
        "challengeCode": "int level = 8;\nConsole.WriteLine(level);",
        "options": [
          "8",
          "9",
          "7",
          "level"
        ],
        "correctIndex": 0,
        "challengeResult": "8",
        "explanation": "Переменная level хранит 8; это значение и выводится."
      },
      {
        "challengeCode": "int first = 4;\nint second = first;\nfirst = 10;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "4 4",
        "options": [
          "4 4",
          "5 5",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 5;\nint second = first;\nfirst = 11;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "5 11",
        "options": [
          "5 11",
          "6 12",
          "11 5",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 6;\nint second = first;\nfirst = 12;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "6 6",
        "options": [
          "6 6",
          "7 7",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 7;\nint second = first;\nfirst = 13;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "7 13",
        "options": [
          "7 13",
          "8 14",
          "31 7",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 8;\nint second = first;\nfirst = 14;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "8 8",
        "options": [
          "8 8",
          "9 9",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 9;\nint second = first;\nfirst = 15;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "9 15",
        "options": [
          "9 15",
          "10 16",
          "51 9",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab4-literal",
    "deckId": "variables-values",
    "term": "Литерал",
    "exampleCode": "Console.WriteLine(12);\nConsole.WriteLine(\"12\");",
    "exampleResult": "12\n12",
    "exampleNote": "Числовой и строковый литералы могут выглядеть одинаково при выводе, но операции с ними различаются.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(2 + 3);\nConsole.WriteLine(\"2\" + \"3\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "5\n5",
      "23\n23",
      "5\n23",
      "23\n5"
    ],
    "correctIndex": 2,
    "explanation": "С числами + складывает, со строками соединяет текст.",
    "challengeResult": "5\n23",
    "codeDeckId": "lab4-variables-values",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(4 + 2);\nConsole.WriteLine(\"4\" + \"2\");",
        "options": [
          "6\n42",
          "42\n6",
          "6\n6",
          "42\n42"
        ],
        "correctIndex": 0,
        "challengeResult": "6\n42",
        "explanation": "Числа складываются (6), строки соединяются (42)."
      },
      {
        "challengeCode": "Console.WriteLine(5 + 3);\nConsole.WriteLine(\"5\" + \"3\");",
        "options": [
          "8\n53",
          "53\n8",
          "8\n8",
          "53\n53"
        ],
        "correctIndex": 0,
        "challengeResult": "8\n53",
        "explanation": "Числа складываются (8), строки соединяются (53)."
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + 4 + 6);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 46",
        "options": [
          "Ответ: 46",
          "Ответ: 47",
          "64 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + (5 + 7));",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 12",
        "options": [
          "Ответ: 12",
          "Ответ: 13",
          "21 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + 6 + 8);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 68",
        "options": [
          "Ответ: 68",
          "Ответ: 69",
          "86 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + (7 + 9));",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 16",
        "options": [
          "Ответ: 16",
          "Ответ: 17",
          "61 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + 8 + 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 810",
        "options": [
          "Ответ: 810",
          "Ответ: 811",
          "018 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + (9 + 11));",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 20",
        "options": [
          "Ответ: 20",
          "Ответ: 21",
          "02 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab4-long",
    "deckId": "csharp-data-types",
    "term": "long",
    "exampleCode": "long population = 3_000_000_000L;\nConsole.WriteLine(population);",
    "exampleResult": "3000000000",
    "exampleNote": "long хранит целые числа за пределами int; L явно обозначает long.",
    "kind": "Что выведет код?",
    "challengeCode": "long total = 3_000_000_000L + 2;\nConsole.WriteLine(total);",
    "prompt": "Что появится в консоли?",
    "options": [
      "3000000000",
      "3000000002",
      "2",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Сложение выполняется в типе long; число увеличивается на 2.",
    "challengeResult": "3000000002",
    "codeDeckId": "lab4-csharp-data-types"
  },
  {
    "id": "lab4-float",
    "deckId": "csharp-data-types",
    "term": "float",
    "exampleCode": "float value = 1.5f;\nConsole.WriteLine(value * 2f);",
    "exampleResult": "3",
    "exampleNote": "Суффикс f задаёт float. Умножение 1.5 на 2 даёт 3.",
    "kind": "Что выведет код?",
    "challengeCode": "float value = 2.5f;\nConsole.WriteLine(value * 2f);",
    "prompt": "Что появится в консоли?",
    "options": [
      "2",
      "4",
      "5",
      "Ошибка компиляции"
    ],
    "correctIndex": 2,
    "explanation": "2.5 умножается на 2: результат 5.",
    "codeDeckId": "lab4-csharp-data-types",
    "challengeResult": "5"
  },
  {
    "id": "lab4-double",
    "deckId": "csharp-data-types",
    "term": "double",
    "exampleCode": "double value = 6.0 / 2;\nConsole.WriteLine(value);",
    "exampleResult": "3",
    "exampleNote": "Литерал 6.0 имеет тип double. Деление даёт 3.",
    "kind": "Что выведет код?",
    "challengeCode": "double value = 8.0 / 2;\nConsole.WriteLine(value);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4",
      "8",
      "2",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "8.0 / 2 равно 4.",
    "codeDeckId": "lab4-csharp-data-types",
    "challengeResult": "4"
  },
  {
    "id": "lab4-char",
    "deckId": "csharp-data-types",
    "term": "char",
    "exampleCode": "char letter = 'A';\nConsole.WriteLine(letter);",
    "exampleResult": "A",
    "exampleNote": "Литерал char записывают в одинарных кавычках.",
    "kind": "Что выведет код?",
    "challengeCode": "char mark = '!';\nConsole.WriteLine($\"Стоп{mark}\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "Стопmark",
      "Стоп!",
      "!Стоп",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Интерполяция подставляет символ ! после слова.",
    "challengeResult": "Стоп!",
    "codeDeckId": "lab4-csharp-data-types"
  },
  {
    "id": "lab4-explicit-type",
    "deckId": "typing-and-output",
    "term": "Явное указание типа",
    "exampleCode": "int age = 18;\nConsole.WriteLine(age + 1);",
    "exampleResult": "19",
    "exampleNote": "Тип int указан непосредственно перед именем переменной.",
    "kind": "Что выведет код?",
    "challengeCode": "string count = \"4\";\nConsole.WriteLine(count + 1);",
    "prompt": "Что появится в консоли?",
    "options": [
      "5",
      "41",
      "4",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "count — строка, поэтому + соединяет текст «4» и представление числа 1.",
    "challengeResult": "41",
    "codeDeckId": "lab4-typing-and-output"
  },
  {
    "id": "lab4-inferred-type",
    "deckId": "typing-and-output",
    "term": "Неявное указание типа",
    "exampleCode": "var count = 3;\nConsole.WriteLine(count);",
    "exampleResult": "3",
    "exampleNote": "По начальному значению 3 компилятор определяет тип int. Выводится значение переменной.",
    "kind": "Что выведет код?",
    "challengeCode": "var value = \"7\";\nConsole.WriteLine(value + 2);",
    "prompt": "Что появится в консоли?",
    "options": [
      "9",
      "72",
      "7",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Начальное значение в кавычках задаёт тип string; результат соединения — 72.",
    "codeDeckId": "lab4-typing-and-output",
    "challengeResult": "72"
  },
  {
    "id": "lab4-suffix",
    "deckId": "typing-and-output",
    "term": "Суффикс литерала",
    "exampleCode": "decimal price = 3m;\nConsole.WriteLine(price + 2m);",
    "exampleResult": "5",
    "exampleNote": "m задаёт тип decimal даже для литерала без дробной части.",
    "kind": "Что выведет код?",
    "challengeCode": "float speed = 2f;\nConsole.WriteLine(speed + 3f);",
    "prompt": "Что появится в консоли?",
    "options": [
      "2f",
      "5",
      "23",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Складываются числа 2 и 3 типа float; результат 5.",
    "codeDeckId": "lab4-typing-and-output",
    "challengeResult": "5"
  },
  {
    "id": "lab4-type-range",
    "deckId": "typing-and-output",
    "term": "Диапазон типа",
    "exampleCode": "Console.WriteLine(int.MaxValue);",
    "exampleResult": "2147483647",
    "exampleNote": "MaxValue показывает верхнюю границу типа int.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(int.MinValue);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "-2147483648",
      "2147483647",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "MinValue — минимальное значение int: -2147483648.",
    "codeDeckId": "lab4-typing-and-output",
    "challengeResult": "-2147483648"
  },
  {
    "id": "lab5-conversion",
    "deckId": "input-operations-conversions",
    "term": "Преобразование типов",
    "exampleCode": "string text = \"24\";\nint number = int.Parse(text);\nConsole.WriteLine(number + 1);",
    "exampleResult": "25",
    "exampleNote": "Parse получает число из строковой записи.",
    "kind": "Что выведет код?",
    "challengeCode": "string text = \"8\";\nConsole.WriteLine(int.Parse(text) + 2);",
    "prompt": "Что появится в консоли?",
    "options": [
      "82",
      "10",
      "8",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "После Parse выполняется числовое сложение 8 + 2.",
    "challengeResult": "10",
    "codeDeckId": "lab5-input-conversion"
  },
  {
    "id": "lab5-implicit",
    "deckId": "input-operations-conversions",
    "term": "Неявное преобразование",
    "exampleCode": "int count = 5;\ndouble value = count;\nConsole.WriteLine(value);",
    "exampleResult": "5",
    "exampleNote": "Значение int можно присвоить double без явного приведения.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 7;\nlong total = count;\nConsole.WriteLine(total + 3);",
    "prompt": "Что появится в консоли?",
    "options": [
      "73",
      "7",
      "10",
      "Ошибка компиляции"
    ],
    "correctIndex": 2,
    "explanation": "int неявно преобразуется в long, затем выполняется сложение.",
    "codeDeckId": "lab5-input-conversion",
    "challengeResult": "10"
  },
  {
    "id": "lab5-arithmetic",
    "deckId": "input-operations-conversions",
    "term": "Арифметический оператор",
    "exampleCode": "Console.WriteLine(2 + 3 * 4);",
    "exampleResult": "14",
    "exampleNote": "Умножение выполняется раньше сложения.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine((2 + 3) * 4);",
    "prompt": "Что появится в консоли?",
    "options": [
      "14",
      "20",
      "24",
      "9"
    ],
    "correctIndex": 1,
    "explanation": "Скобки заставляют сначала сложить 2 и 3; 5 × 4 = 20.",
    "challengeResult": "20",
    "codeDeckId": "lab5-operations-output",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(3 + 2 * 5);",
        "options": [
          "13",
          "25",
          "10",
          "30"
        ],
        "correctIndex": 0,
        "challengeResult": "13",
        "explanation": "Сначала 2 * 5, затем прибавление 3; ответ 13."
      },
      {
        "challengeCode": "Console.WriteLine(4 + 3 * 2);",
        "options": [
          "10",
          "14",
          "9",
          "24"
        ],
        "correctIndex": 0,
        "challengeResult": "10",
        "explanation": "Сначала 3 * 2, затем прибавление 4; ответ 10."
      },
      {
        "challengeCode": "int number = 35;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens + ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 42;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens * ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 49;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens + ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "13",
        "options": [
          "13",
          "14",
          "12",
          "15"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 56;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens * ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "30",
        "options": [
          "30",
          "31",
          "29",
          "32"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 63;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens + ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 70;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens * ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab5-operand",
    "deckId": "input-operations-conversions",
    "term": "Операнд",
    "exampleCode": "int a = 7;\nint b = 2;\nConsole.WriteLine(a - b);",
    "exampleResult": "5",
    "exampleNote": "У вычитания a - b два операнда: значения a и b.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = 9;\nint b = 4;\nConsole.WriteLine(b - a);",
    "prompt": "Что появится в консоли?",
    "options": [
      "5",
      "13",
      "-5",
      "-13"
    ],
    "correctIndex": 2,
    "explanation": "Порядок операндов важен: 4 - 9 = -5.",
    "challengeResult": "-5",
    "codeDeckId": "lab5-operations-output"
  },
  {
    "id": "lab5-expression",
    "deckId": "input-operations-conversions",
    "term": "Выражение",
    "exampleCode": "int result = (3 + 1) * 2;\nConsole.WriteLine(result);",
    "exampleResult": "8",
    "exampleNote": "Выражение справа вычисляется перед присваиванием.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 4;\nConsole.WriteLine(x * x - 1);",
    "prompt": "Что появится в консоли?",
    "options": [
      "15",
      "12",
      "16",
      "3"
    ],
    "correctIndex": 0,
    "explanation": "Сначала 4 × 4 = 16, затем 16 - 1 = 15.",
    "challengeResult": "15",
    "codeDeckId": "lab5-operations-output",
    "variants": [
      {
        "challengeCode": "int x = 3;\nConsole.WriteLine(x * x - 1);",
        "options": [
          "8",
          "9",
          "2",
          "6"
        ],
        "correctIndex": 0,
        "challengeResult": "8",
        "explanation": "3 * 3 - 1 = 8."
      },
      {
        "challengeCode": "int x = 5;\nConsole.WriteLine(x * x - 1);",
        "options": [
          "24",
          "25",
          "4",
          "20"
        ],
        "correctIndex": 0,
        "challengeResult": "24",
        "explanation": "5 * 5 - 1 = 24."
      },
      {
        "challengeCode": "int x = 4;\nint saved = x * 3;\nx *= 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "12\n8",
        "options": [
          "12\n8",
          "8\n12",
          "13\n9",
          "128"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 5;\nint saved = x * 3;\nx += 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "15\n7",
        "options": [
          "15\n7",
          "7\n15",
          "16\n8",
          "157"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 6;\nint saved = x * 3;\nx *= 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "18\n12",
        "options": [
          "18\n12",
          "12\n18",
          "19\n13",
          "1812"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 7;\nint saved = x * 3;\nx += 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "21\n9",
        "options": [
          "21\n9",
          "9\n21",
          "22\n10",
          "219"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 8;\nint saved = x * 3;\nx *= 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "24\n16",
        "options": [
          "24\n16",
          "16\n24",
          "25\n17",
          "2416"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 9;\nint saved = x * 3;\nx += 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "27\n11",
        "options": [
          "27\n11",
          "11\n27",
          "28\n12",
          "2711"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab5-data-loss",
    "deckId": "input-operations-conversions",
    "term": "Потеря данных",
    "exampleCode": "double value = -3.9;\nConsole.WriteLine((int)value);",
    "exampleResult": "-3",
    "exampleNote": "Приведение к int отбрасывает дробную часть в направлении нуля.",
    "kind": "Что выведет код?",
    "challengeCode": "double value = -7.8;\nConsole.WriteLine((int)value);",
    "prompt": "Что появится в консоли?",
    "options": [
      "-8",
      "-7",
      "7",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Дробная часть отбрасывается в направлении нуля: получается -7, а не -8.",
    "challengeResult": "-7",
    "codeDeckId": "lab5-input-conversion"
  },
  {
    "id": "lab5-format",
    "deckId": "input-operations-conversions",
    "term": "Составное присваивание",
    "exampleCode": "int score = 5;\nscore += 3;\nConsole.WriteLine(score);",
    "exampleResult": "8",
    "exampleNote": "Для int запись score += 3 означает score = score + 3.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 10;\nscore -= 4;\nConsole.WriteLine(score);",
    "prompt": "Что появится в консоли?",
    "options": [
      "14",
      "4",
      "6",
      "10"
    ],
    "correctIndex": 2,
    "explanation": "Прежнее значение 10 уменьшается на 4: результат 6.",
    "codeDeckId": "lab5-operations-output",
    "challengeResult": "6",
    "variants": [
      {
        "challengeCode": "int score = 7;\nscore += 2;\nConsole.WriteLine(score);",
        "options": [
          "9",
          "7",
          "2",
          "5"
        ],
        "correctIndex": 0,
        "challengeResult": "9",
        "explanation": "К 7 прибавляется 2; результат 9."
      },
      {
        "challengeCode": "int score = 12;\nscore += 5;\nConsole.WriteLine(score);",
        "options": [
          "17",
          "12",
          "5",
          "7"
        ],
        "correctIndex": 0,
        "challengeResult": "17",
        "explanation": "К 12 прибавляется 5; результат 17."
      },
      {
        "challengeCode": "int value = 5;\nvalue += 3;\nvalue *= 2;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 6;\nvalue *= 2;\nvalue += 3;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 7;\nvalue += 3;\nvalue *= 2;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "20",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 8;\nvalue *= 2;\nvalue += 3;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "19",
        "options": [
          "19",
          "20",
          "18",
          "21"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 9;\nvalue += 3;\nvalue *= 2;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "24",
        "options": [
          "24",
          "25",
          "23",
          "26"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 10;\nvalue *= 2;\nvalue += 3;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "23",
        "options": [
          "23",
          "24",
          "22",
          "25"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab5-exception",
    "deckId": "input-operations-conversions",
    "term": "Приоритет операций",
    "exampleCode": "Console.WriteLine(10 - 2 * 3);",
    "exampleResult": "4",
    "exampleNote": "Умножение выполняется раньше вычитания: сначала 2 * 3, затем 10 - 6.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(12 - 3 * 2);",
    "prompt": "Что появится в консоли?",
    "options": [
      "18",
      "6",
      "9",
      "24"
    ],
    "correctIndex": 1,
    "explanation": "Сначала 3 * 2 = 6, затем 12 - 6 = 6.",
    "codeDeckId": "lab5-input-conversion",
    "challengeResult": "6",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(15 - 4 * 2);",
        "options": [
          "7",
          "22",
          "9",
          "23"
        ],
        "correctIndex": 0,
        "challengeResult": "7",
        "explanation": "Сначала умножение, затем вычитание; ответ 7."
      },
      {
        "challengeCode": "Console.WriteLine(20 - 3 * 4);",
        "options": [
          "8",
          "68",
          "13",
          "32"
        ],
        "correctIndex": 0,
        "challengeResult": "8",
        "explanation": "Сначала умножение, затем вычитание; ответ 8."
      },
      {
        "challengeCode": "int a = 4;\nint b = 6;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "30\n10",
        "options": [
          "30\n10",
          "10\n30",
          "31\n11",
          "3010"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 5;\nint b = 7;\nConsole.WriteLine(a + b * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "26\n12",
        "options": [
          "26\n12",
          "12\n26",
          "27\n13",
          "2612"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 6;\nint b = 8;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "42\n14",
        "options": [
          "42\n14",
          "14\n42",
          "43\n15",
          "4214"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 7;\nint b = 9;\nConsole.WriteLine(a + b * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "34\n16",
        "options": [
          "34\n16",
          "16\n34",
          "35\n17",
          "3416"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 8;\nint b = 10;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "54\n18",
        "options": [
          "54\n18",
          "18\n54",
          "55\n19",
          "5418"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 9;\nint b = 11;\nConsole.WriteLine(a + b * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "42\n20",
        "options": [
          "42\n20",
          "20\n42",
          "43\n21",
          "4220"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab5-decimal-separator",
    "deckId": "input-operations-conversions",
    "term": "Скобки в выражении",
    "exampleCode": "Console.WriteLine((10 - 2) * 3);",
    "exampleResult": "24",
    "exampleNote": "Сначала вычисляется выражение в скобках: 10 - 2, затем умножение на 3.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine((12 - 3) * 2);",
    "prompt": "Что появится в консоли?",
    "options": [
      "6",
      "9",
      "18",
      "24"
    ],
    "correctIndex": 2,
    "explanation": "В скобках 12 - 3 = 9, затем 9 * 2 = 18.",
    "codeDeckId": "lab5-operations-output",
    "challengeResult": "18",
    "variants": [
      {
        "challengeCode": "Console.WriteLine((15 - 4) * 2);",
        "options": [
          "22",
          "7",
          "9",
          "23"
        ],
        "correctIndex": 0,
        "challengeResult": "22",
        "explanation": "Сначала скобки, затем умножение; ответ 22."
      },
      {
        "challengeCode": "Console.WriteLine((20 - 3) * 4);",
        "options": [
          "68",
          "8",
          "13",
          "32"
        ],
        "correctIndex": 0,
        "challengeResult": "68",
        "explanation": "Сначала скобки, затем умножение; ответ 68."
      },
      {
        "challengeCode": "int a = 4;\nint b = 6;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "30\n10",
        "options": [
          "30\n10",
          "10\n30",
          "31\n11",
          "3010"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 5;\nint b = 7;\nConsole.WriteLine(a + b * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "26\n12",
        "options": [
          "26\n12",
          "12\n26",
          "27\n13",
          "2612"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 6;\nint b = 8;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "42\n14",
        "options": [
          "42\n14",
          "14\n42",
          "43\n15",
          "4214"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 7;\nint b = 9;\nConsole.WriteLine(a + b * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "34\n16",
        "options": [
          "34\n16",
          "16\n34",
          "35\n17",
          "3416"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 8;\nint b = 10;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "54\n18",
        "options": [
          "54\n18",
          "18\n54",
          "55\n19",
          "5418"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 9;\nint b = 11;\nConsole.WriteLine(a + b * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "42\n20",
        "options": [
          "42\n20",
          "20\n42",
          "43\n21",
          "4220"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab6-condition",
    "deckId": "conditions-logic",
    "term": "Условие",
    "exampleCode": "int score = 60;\nbool passed = score >= 60;\nConsole.WriteLine(passed);",
    "exampleResult": "True",
    "exampleNote": "Условие вычисляется в true или false.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 60;\nConsole.WriteLine(score >= 60);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "59",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Оператор >= включает равенство. При score = 60 условие 60 >= 60 истинно; выводится True.",
    "challengeResult": "True",
    "codeDeckId": "practice-conditions-logic"
  },
  {
    "id": "lab6-comparison",
    "deckId": "conditions-logic",
    "term": "Оператор сравнения",
    "exampleCode": "Console.WriteLine(5 >= 5);",
    "exampleResult": "True",
    "exampleNote": "Оператор >= включает равенство.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(5 > 5);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "5",
      "False",
      "Ошибка компиляции"
    ],
    "correctIndex": 2,
    "explanation": "Строгое сравнение > не включает равенство: 5 не больше 5.",
    "challengeResult": "False",
    "codeDeckId": "practice-conditions-logic",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(7 >= 7);",
        "options": [
          "True",
          "False",
          "7",
          "Ошибка компиляции"
        ],
        "correctIndex": 0,
        "challengeResult": "True",
        "explanation": "Сравнение 7 >= 7 даёт True."
      },
      {
        "challengeCode": "Console.WriteLine(7 > 8);",
        "options": [
          "False",
          "True",
          "7",
          "Ошибка компиляции"
        ],
        "correctIndex": 0,
        "challengeResult": "False",
        "explanation": "Сравнение 7 > 8 даёт False."
      },
      {
        "challengeCode": "int score = 63;\nbool passed = score >= 62;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 62;\nbool passed = score > 63;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 64;\nbool passed = score >= 64;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 66;\nbool passed = score > 65;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 65;\nbool passed = score >= 66;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 67;\nbool passed = score > 67;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab6-inequality",
    "deckId": "conditions-logic",
    "term": "Неравенство !=",
    "exampleCode": "int debts = 2;\nConsole.WriteLine(debts != 0);",
    "exampleResult": "True",
    "exampleNote": "!= проверяет различие значений.",
    "kind": "Что выведет код?",
    "challengeCode": "int debts = 0;\nConsole.WriteLine(debts != 0);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "0",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Значения равны, поэтому проверка неравенства ложна.",
    "challengeResult": "False",
    "codeDeckId": "practice-conditions-logic",
    "variants": [
      {
        "challengeCode": "int debtCount = 2;\nConsole.WriteLine(debtCount != 0);",
        "options": [
          "True",
          "False",
          "2",
          "Ошибка компиляции"
        ],
        "correctIndex": 0,
        "challengeResult": "True",
        "explanation": "Проверяем отличие 2 от нуля; результат True."
      },
      {
        "challengeCode": "int debtCount = 0;\nConsole.WriteLine(debtCount != 0);",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0,
        "challengeResult": "False",
        "explanation": "Проверяем отличие 0 от нуля; результат False."
      },
      {
        "challengeCode": "int expected = 4;\nint actual = 4;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 5;\nint actual = 6;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 6;\nint actual = 6;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 7;\nint actual = 8;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 8;\nint actual = 8;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 9;\nint actual = 10;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab6-else",
    "deckId": "branching-menu",
    "term": "else",
    "exampleCode": "int score = 40;\nif (score >= 60)\n    Console.WriteLine(\"Зачёт\");\nelse\n    Console.WriteLine(\"Повторить\");",
    "exampleResult": "Повторить",
    "exampleNote": "else выполняется только при ложном условии связанного if.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 60;\nif (score >= 60)\n    Console.WriteLine(\"Да\");\nelse\n    Console.WriteLine(\"Нет\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "Нет",
      "Да\nНет",
      "Да",
      "Ничего"
    ],
    "correctIndex": 2,
    "explanation": "Условие истинно, поэтому выполняется if, а ветка else пропускается.",
    "challengeResult": "Да",
    "codeDeckId": "practice-branching-menu",
    "variants": [
      {
        "challengeCode": "int score = 45;\nif (score >= 60)\n{\n    Console.WriteLine(\"Да\");\n}\nelse\n{\n    Console.WriteLine(\"Нет\");\n}",
        "options": [
          "Нет",
          "Да",
          "Да\nНет",
          "Ничего"
        ],
        "correctIndex": 0,
        "challengeResult": "Нет",
        "explanation": "Условие 45 >= 60 — ложь; выводится «Нет»."
      },
      {
        "challengeCode": "int score = 80;\nif (score >= 60)\n{\n    Console.WriteLine(\"Да\");\n}\nelse\n{\n    Console.WriteLine(\"Нет\");\n}",
        "options": [
          "Да",
          "Нет",
          "Да\nНет",
          "Ничего"
        ],
        "correctIndex": 0,
        "challengeResult": "Да",
        "explanation": "Условие 80 >= 60 — истина; выводится «Да»."
      },
      {
        "challengeCode": "int score = 60;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 59;\nif (score >= 60)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 90)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 90;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 75;\nif (score >= 60)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 90)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 80;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 40;\nif (score >= 60)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 90)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab6-case",
    "deckId": "branching-menu",
    "term": "case",
    "exampleCode": "int menu = 2;\nswitch (menu)\n{\n    case 1: Console.WriteLine(\"Профиль\"); break;\n    case 2: Console.WriteLine(\"Баллы\"); break;\n}",
    "exampleResult": "Баллы",
    "exampleNote": "case 2 выбирается, когда значение menu равно 2.",
    "kind": "Что выведет код?",
    "challengeCode": "int menu = 1;\nswitch (menu)\n{\n    case 1: Console.WriteLine(\"Старт\"); break;\n    case 2: Console.WriteLine(\"Выход\"); break;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "Выход",
      "Старт",
      "Старт\nВыход",
      "Ничего"
    ],
    "correctIndex": 1,
    "explanation": "Значение 1 выбирает case 1; break завершает switch.",
    "challengeResult": "Старт",
    "codeDeckId": "practice-branching-menu"
  },
  {
    "id": "lab7-loop",
    "deckId": "loops-basics",
    "term": "Цикл",
    "exampleCode": "for (int i = 0; i < 3; i++)\n    Console.Write(\"A\");",
    "exampleResult": "AAA",
    "exampleNote": "Цикл повторяет вывод три раза. Write не добавляет перенос строки.",
    "kind": "Что выведет код?",
    "challengeCode": "for (int i = 0; i < 4; i++)\n    Console.Write(\"X\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "X",
      "XXX",
      "XXXX",
      "XXXXX"
    ],
    "correctIndex": 2,
    "explanation": "Счётчик принимает значения 0, 1, 2, 3: четыре повторения.",
    "challengeResult": "XXXX",
    "codeDeckId": "practice-loops-basics",
    "variants": [
      {
        "challengeCode": "for (int i = 0; i < 2; i++)\n{\n    Console.Write(\"X\");\n}",
        "options": [
          "XX",
          "X",
          "XXX",
          "Ничего"
        ],
        "correctIndex": 0,
        "challengeResult": "XX",
        "explanation": "От 0 до 1 — 2 итераций, выводится 2 букв X."
      },
      {
        "challengeCode": "for (int i = 0; i < 5; i++)\n{\n    Console.Write(\"X\");\n}",
        "options": [
          "XXXXX",
          "XXXX",
          "XXXXXX",
          "Ничего"
        ],
        "correctIndex": 0,
        "challengeResult": "XXXXX",
        "explanation": "От 0 до 4 — 5 итераций, выводится 5 букв X."
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 2; i < 8; i += 3)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 0; i <= 9; i += 1)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 1; i < 10; i += 2)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 2; i <= 11; i += 3)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 0; i < 12; i += 1)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 1; i <= 13; i += 2)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab7-iteration",
    "deckId": "loops-basics",
    "term": "Итерация",
    "exampleCode": "int count = 0;\nfor (int i = 1; i <= 3; i++)\n    count++;\nConsole.WriteLine(count);",
    "exampleResult": "3",
    "exampleNote": "Каждое выполнение тела увеличивает число итераций на один.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nfor (int i = 2; i <= 4; i++)\n    count++;\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 1,
    "explanation": "Тело выполняется при i = 2, 3, 4: три итерации.",
    "challengeResult": "3",
    "codeDeckId": "practice-loops-basics"
  },
  {
    "id": "lab7-body",
    "deckId": "loops-basics",
    "term": "Тело цикла",
    "exampleCode": "for (int i = 0; i < 2; i++)\n{\n    Console.Write(\"A\");\n    Console.Write(\"B\");\n}",
    "exampleResult": "ABAB",
    "exampleNote": "Обе команды в фигурных скобках повторяются на каждой итерации.",
    "kind": "Что выведет код?",
    "challengeCode": "for (int i = 0; i < 2; i++)\n{\n    Console.Write(\"X\");\n    Console.Write(\"Y\");\n}\nConsole.Write(\"Z\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "XYZXYZ",
      "XYXYZ",
      "XXYYZ",
      "XYZ"
    ],
    "correctIndex": 1,
    "explanation": "Тело выводит XY дважды, затем после цикла один раз выводится Z.",
    "challengeResult": "XYXYZ",
    "codeDeckId": "practice-loops-basics"
  },
  {
    "id": "lab7-condition",
    "deckId": "loops-basics",
    "term": "Условие продолжения",
    "exampleCode": "int i = 3;\nwhile (i < 3)\n    i++;\nConsole.WriteLine(i);",
    "exampleResult": "3",
    "exampleNote": "Если условие ложно с самого начала, тело while пропускается.",
    "kind": "Что выведет код?",
    "challengeCode": "int i = 5;\nwhile (i < 5)\n    i++;\nConsole.WriteLine(i);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "5 < 5 ложно, поэтому значение не изменяется.",
    "challengeResult": "5",
    "codeDeckId": "practice-loops-basics"
  },
  {
    "id": "lab7-for",
    "deckId": "loops-basics",
    "term": "for",
    "exampleCode": "for (int i = 1; i <= 3; i++)\n    Console.Write(i);",
    "exampleResult": "123",
    "exampleNote": "Сначала инициализация, затем проверка, тело, шаг и новая проверка.",
    "kind": "Что выведет код?",
    "challengeCode": "for (int i = 1; i < 3; i++)\n    Console.Write(i);",
    "prompt": "Что появится в консоли?",
    "options": [
      "123",
      "12",
      "012",
      "23"
    ],
    "correctIndex": 1,
    "explanation": "Граница строгая: тело выполняется только для 1 и 2.",
    "challengeResult": "12",
    "codeDeckId": "practice-loops-basics",
    "variants": [
      {
        "challengeCode": "for (int i = 2; i < 5; i++)\n{\n    Console.Write(i);\n}",
        "options": [
          "234",
          "2345",
          "34",
          "5"
        ],
        "correctIndex": 0,
        "challengeResult": "234",
        "explanation": "Выводятся числа от 2 до 4; граница 5 не включается."
      },
      {
        "challengeCode": "for (int i = 3; i < 6; i++)\n{\n    Console.Write(i);\n}",
        "options": [
          "345",
          "3456",
          "45",
          "6"
        ],
        "correctIndex": 0,
        "challengeResult": "345",
        "explanation": "Выводятся числа от 3 до 5; граница 6 не включается."
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 2; i < 8; i += 3)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 0; i <= 9; i += 1)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 1; i < 10; i += 2)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 2; i <= 11; i += 3)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 0; i < 12; i += 1)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 1; i <= 13; i += 2)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab7-while",
    "deckId": "loops-basics",
    "term": "while",
    "exampleCode": "int i = 1;\nwhile (i <= 3)\n{\n    Console.Write(i);\n    i++;\n}",
    "exampleResult": "123",
    "exampleNote": "В while изменение счётчика записывают в теле, если оно нужно для завершения.",
    "kind": "Что выведет код?",
    "challengeCode": "int i = 2;\nwhile (i <= 4)\n{\n    Console.Write(i);\n    i++;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "234",
      "23",
      "1234",
      "2345"
    ],
    "correctIndex": 0,
    "explanation": "Тело выводит 2, 3 и 4. Затем i = 5 и условие ложно.",
    "challengeResult": "234",
    "codeDeckId": "practice-loops-basics",
    "variants": [
      {
        "challengeCode": "int i = 3;\nwhile (i <= 5)\n{\n    Console.Write(i);\n    i++;\n}",
        "options": [
          "345",
          "34",
          "3456",
          "5"
        ],
        "correctIndex": 0,
        "challengeResult": "345",
        "explanation": "Выводятся числа от 3 до 5 включительно."
      },
      {
        "challengeCode": "int i = 4;\nwhile (i <= 6)\n{\n    Console.Write(i);\n    i++;\n}",
        "options": [
          "456",
          "45",
          "4567",
          "6"
        ],
        "correctIndex": 0,
        "challengeResult": "456",
        "explanation": "Выводятся числа от 4 до 6 включительно."
      },
      {
        "challengeCode": "int value = 3;\nint count = 0;\nwhile (value < 18)\n{\n    value += 3;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "5\n18",
        "options": [
          "5\n18",
          "18\n5",
          "6\n19",
          "518"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 1;\nint count = 0;\nwhile (value < 21)\n{\n    value *= 2;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "5\n32",
        "options": [
          "5\n32",
          "32\n5",
          "6\n33",
          "532"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 2;\nint count = 0;\nwhile (value < 24)\n{\n    value += 3;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "8\n26",
        "options": [
          "8\n26",
          "26\n8",
          "9\n27",
          "826"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 3;\nint count = 0;\nwhile (value < 27)\n{\n    value *= 2;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "4\n48",
        "options": [
          "4\n48",
          "48\n4",
          "5\n49",
          "448"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 1;\nint count = 0;\nwhile (value < 30)\n{\n    value += 3;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "10\n31",
        "options": [
          "10\n31",
          "31\n10",
          "11\n32",
          "1031"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 2;\nint count = 0;\nwhile (value < 33)\n{\n    value *= 2;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "5\n64",
        "options": [
          "5\n64",
          "64\n5",
          "6\n65",
          "564"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab7-do-while",
    "deckId": "loops-basics",
    "term": "do…while",
    "exampleCode": "int i = 5;\ndo\n{\n    Console.Write(i);\n    i++;\n} while (i < 3);",
    "exampleResult": "5",
    "exampleNote": "Тело выполняется один раз до первой проверки условия.",
    "kind": "Что выведет код?",
    "challengeCode": "int i = 7;\ndo\n{\n    Console.Write(i);\n    i++;\n} while (i < 2);",
    "prompt": "Что появится в консоли?",
    "options": [
      "Ничего",
      "2",
      "7",
      "78"
    ],
    "correctIndex": 2,
    "explanation": "Даже при ложной первой проверке тело уже успевает вывести 7.",
    "challengeResult": "7",
    "codeDeckId": "practice-loops-basics"
  },
  {
    "id": "lab7-counter",
    "deckId": "loops-basics",
    "term": "Счётчик цикла",
    "exampleCode": "int i;\nfor (i = 0; i < 3; i++)\n{\n}\nConsole.WriteLine(i);",
    "exampleResult": "3",
    "exampleNote": "После последнего шага счётчик равен 3, и следующая проверка завершает цикл.",
    "kind": "Что выведет код?",
    "challengeCode": "int i;\nfor (i = 1; i <= 3; i++)\n{\n}\nConsole.WriteLine(i);",
    "prompt": "Что появится в консоли?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "explanation": "Последняя итерация при i = 3, после шага i = 4; условие 4 <= 3 ложно.",
    "challengeResult": "4",
    "codeDeckId": "practice-loops-basics"
  },
  {
    "id": "lab7-step",
    "deckId": "loops-basics",
    "term": "Шаг цикла",
    "exampleCode": "for (int i = 0; i <= 6; i += 2)\n    Console.Write(i);",
    "exampleResult": "0246",
    "exampleNote": "Шаг +2 пропускает нечётные значения.",
    "kind": "Что выведет код?",
    "challengeCode": "for (int i = 5; i > 0; i -= 2)\n    Console.Write(i);",
    "prompt": "Что появится в консоли?",
    "options": [
      "54321",
      "531",
      "53",
      "135"
    ],
    "correctIndex": 1,
    "explanation": "Счётчик уменьшается на 2: 5, 3, 1. Следующее значение -1 не подходит.",
    "challengeResult": "531",
    "codeDeckId": "practice-loops-basics"
  },
  {
    "id": "lab7-init",
    "deckId": "loops-basics",
    "term": "Инициализация счётчика",
    "exampleCode": "for (int i = 3; i < 5; i++)\n    Console.Write(i);",
    "exampleResult": "34",
    "exampleNote": "Начальное значение 3 задаётся один раз перед циклом.",
    "kind": "Что выведет код?",
    "challengeCode": "for (int i = 4; i < 6; i++)\n    Console.Write(i);",
    "prompt": "Что появится в консоли?",
    "options": [
      "012345",
      "456",
      "45",
      "56"
    ],
    "correctIndex": 2,
    "explanation": "Цикл начинается с 4 и заканчивается перед 6: вывод 45.",
    "challengeResult": "45",
    "codeDeckId": "practice-loops-basics"
  },
  {
    "id": "lab7-descending",
    "deckId": "loops-control",
    "term": "Убывающий цикл",
    "exampleCode": "for (int i = 3; i > 0; i--)\n    Console.Write(i);",
    "exampleResult": "321",
    "exampleNote": "Счётчик уменьшается на один; при нуле условие i > 0 завершает цикл.",
    "kind": "Что выведет код?",
    "challengeCode": "for (int i = 4; i >= 2; i--)\n    Console.Write(i);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4321",
      "234",
      "432",
      "43"
    ],
    "correctIndex": 2,
    "explanation": "Счётчик принимает значения 4, 3, 2. Граница 2 включена, а 1 уже не подходит.",
    "challengeResult": "432",
    "codeDeckId": "practice-loops-control",
    "variants": [
      {
        "challengeCode": "for (int i = 5; i >= 3; i--)\n{\n    Console.Write(i);\n}",
        "options": [
          "543",
          "54",
          "345",
          "5"
        ],
        "correctIndex": 0,
        "challengeResult": "543",
        "explanation": "Счётчик уменьшается от 5 до 3 включительно."
      },
      {
        "challengeCode": "for (int i = 6; i >= 4; i--)\n{\n    Console.Write(i);\n}",
        "options": [
          "654",
          "65",
          "456",
          "6"
        ],
        "correctIndex": 0,
        "challengeResult": "654",
        "explanation": "Счётчик уменьшается от 6 до 4 включительно."
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 8; i > 2; i -= 1)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "33",
        "options": [
          "33",
          "34",
          "32",
          "35"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 9; i > 0; i -= 2)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "25",
        "options": [
          "25",
          "26",
          "24",
          "27"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 10; i > 1; i -= 1)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "54",
        "options": [
          "54",
          "55",
          "53",
          "56"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 11; i > 2; i -= 2)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "35",
        "options": [
          "35",
          "36",
          "34",
          "37"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 12; i > 0; i -= 1)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "78",
        "options": [
          "78",
          "79",
          "77",
          "80"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 13; i > 1; i -= 2)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "48",
        "options": [
          "48",
          "49",
          "47",
          "50"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab7-repeat-input",
    "deckId": "loops-control",
    "term": "Повторный ввод",
    "exampleCode": "string text = Console.ReadLine();\nwhile (text != \"стоп\")\n{\n    Console.WriteLine(text);\n    text = Console.ReadLine();\n}",
    "exampleResult": "да",
    "exampleNote": "В каждой итерации читается новая строка. Пользователь завершает ввод командой стоп.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nstring text = Console.ReadLine();\nwhile (text != \"0\")\n{\n    count++;\n    text = Console.ReadLine();\n}\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "explanation": "Строки 5 и 7 увеличивают счётчик. Строка 0 завершает цикл и не учитывается.",
    "codeDeckId": "practice-loops-control",
    "exampleInput": "да\nстоп",
    "challengeInput": "5\n7\n0",
    "challengeResult": "2"
  },
  {
    "id": "lab7-break",
    "deckId": "loops-control",
    "term": "break в цикле",
    "exampleCode": "for (int i = 1; i <= 5; i++)\n{\n    if (i == 3) break;\n    Console.Write(i);\n}",
    "exampleResult": "12",
    "exampleNote": "При i = 3 break завершает цикл до вывода этого значения.",
    "kind": "Что выведет код?",
    "challengeCode": "for (int i = 1; i <= 5; i++)\n{\n    if (i == 4) break;\n    Console.Write(i);\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "1234",
      "12345",
      "123",
      "4"
    ],
    "correctIndex": 2,
    "explanation": "Выводятся 1, 2, 3. При i = 4 цикл прекращается до Console.Write.",
    "challengeResult": "123",
    "codeDeckId": "practice-loops-control",
    "variants": [
      {
        "challengeCode": "for (int i = 1; i <= 6; i++)\n{\n    if (i == 2)\n    {\n        break;\n    }\n    Console.Write(i);\n}",
        "options": [
          "1",
          "12",
          "123456",
          "2"
        ],
        "correctIndex": 0,
        "challengeResult": "1",
        "explanation": "При i = 2 цикл завершается до вывода; успевают вывестись числа 1–1."
      },
      {
        "challengeCode": "for (int i = 1; i <= 6; i++)\n{\n    if (i == 5)\n    {\n        break;\n    }\n    Console.Write(i);\n}",
        "options": [
          "1234",
          "12345",
          "123456",
          "5"
        ],
        "correctIndex": 0,
        "challengeResult": "1234",
        "explanation": "При i = 5 цикл завершается до вывода; успевают вывестись числа 1–4."
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 8; i++)\n{\n    if (i == 5)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 9; i++)\n{\n    sum += i;\n    if (i == 6)\n    {\n        break;\n    }\n    \n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 10; i++)\n{\n    if (i == 7)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 11; i++)\n{\n    sum += i;\n    if (i == 8)\n    {\n        break;\n    }\n    \n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "36",
        "options": [
          "36",
          "37",
          "35",
          "38"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 12; i++)\n{\n    if (i == 9)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "36",
        "options": [
          "36",
          "37",
          "35",
          "38"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 13; i++)\n{\n    sum += i;\n    if (i == 10)\n    {\n        break;\n    }\n    \n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "55",
        "options": [
          "55",
          "56",
          "54",
          "57"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab7-continue",
    "deckId": "loops-control",
    "term": "continue",
    "exampleCode": "for (int i = 1; i <= 4; i++)\n{\n    if (i == 2) continue;\n    Console.Write(i);\n}",
    "exampleResult": "134",
    "exampleNote": "continue пропускает только остаток текущей итерации, затем for выполняет шаг i++.",
    "kind": "Что выведет код?",
    "challengeCode": "for (int i = 1; i <= 4; i++)\n{\n    if (i == 3) continue;\n    Console.Write(i);\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "12",
      "1234",
      "124",
      "34"
    ],
    "correctIndex": 2,
    "explanation": "Пропускается только вывод 3. Цикл продолжает работу и выводит 4.",
    "challengeResult": "124",
    "codeDeckId": "practice-loops-control",
    "variants": [
      {
        "challengeCode": "for (int i = 1; i <= 5; i++)\n{\n    if (i == 2)\n    {\n        continue;\n    }\n    Console.Write(i);\n}",
        "options": [
          "1345",
          "12345",
          "1",
          "2"
        ],
        "correctIndex": 0,
        "challengeResult": "1345",
        "explanation": "continue пропускает только вывод 2; остальные итерации выполняются."
      },
      {
        "challengeCode": "for (int i = 1; i <= 5; i++)\n{\n    if (i == 4)\n    {\n        continue;\n    }\n    Console.Write(i);\n}",
        "options": [
          "1235",
          "12345",
          "123",
          "4"
        ],
        "correctIndex": 0,
        "challengeResult": "1235",
        "explanation": "continue пропускает только вывод 4; остальные итерации выполняются."
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 6; i++)\n{\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 7; i++)\n{\n    sum += i;\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum++;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "32",
        "options": [
          "32",
          "33",
          "31",
          "34"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 8; i++)\n{\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 9; i++)\n{\n    sum += i;\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum++;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "50",
        "options": [
          "50",
          "51",
          "49",
          "52"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 10; i++)\n{\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "25",
        "options": [
          "25",
          "26",
          "24",
          "27"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 11; i++)\n{\n    sum += i;\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum++;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "72",
        "options": [
          "72",
          "73",
          "71",
          "74"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab7-nested",
    "deckId": "loops-control",
    "term": "Вложенный цикл",
    "exampleCode": "for (int row = 1; row <= 2; row++)\n{\n    for (int col = 1; col <= 3; col++)\n    {\n        Console.Write(\"*\");\n    }\n    Console.WriteLine();\n}",
    "exampleResult": "***\n***",
    "exampleNote": "Внутренний цикл выполняет три вывода для каждой из двух строк.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nfor (int row = 0; row < 3; row++)\n{\n    for (int col = 0; col < 2; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "2",
      "3",
      "5",
      "6"
    ],
    "correctIndex": 3,
    "explanation": "Три внешние итерации по две внутренние: 3 × 2 = 6.",
    "codeDeckId": "practice-loops-control",
    "challengeResult": "6",
    "variants": [
      {
        "challengeCode": "int count = 0;\nfor (int row = 0; row < 2; row++)\n{\n    for (int col = 0; col < 4; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "options": [
          "8",
          "6",
          "2",
          "4"
        ],
        "correctIndex": 0,
        "challengeResult": "8",
        "explanation": "2 внешние итерации по 4 внутренние: счётчик увеличится 8 раз."
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 0; row < 3; row++)\n{\n    for (int col = 0; col < 4; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "options": [
          "12",
          "7",
          "3",
          "4"
        ],
        "correctIndex": 0,
        "challengeResult": "12",
        "explanation": "3 внешние итерации по 4 внутренние: счётчик увеличится 12 раз."
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 4; row++)\n{\n    for (int col = 0; col < row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 5; row++)\n{\n    for (int col = 0; col <= row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "20",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 6; row++)\n{\n    for (int col = 0; col < row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 2; row++)\n{\n    for (int col = 0; col <= row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 3; row++)\n{\n    for (int col = 0; col < row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 4; row++)\n{\n    for (int col = 0; col <= row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "14",
        "options": [
          "14",
          "15",
          "13",
          "16"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab7-accumulator",
    "deckId": "loops-control",
    "term": "Накопитель",
    "exampleCode": "int sum = 0;\nfor (int i = 1; i <= 3; i++)\n    sum += i;\nConsole.WriteLine(sum);",
    "exampleResult": "6",
    "exampleNote": "sum объявлена до цикла, поэтому сохраняет сумму между итерациями.",
    "kind": "Что выведет код?",
    "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 4; i++)\n    sum += i;\nConsole.WriteLine(sum);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4",
      "6",
      "10",
      "1234"
    ],
    "correctIndex": 2,
    "explanation": "В накопителе складываются 1 + 2 + 3 + 4 = 10.",
    "challengeResult": "10",
    "codeDeckId": "practice-loops-control",
    "variants": [
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 3; i++)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "options": [
          "6",
          "3",
          "9",
          "Ничего"
        ],
        "correctIndex": 0,
        "challengeResult": "6",
        "explanation": "Сумма чисел от 1 до 3 равна 6."
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 5; i++)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "options": [
          "15",
          "5",
          "25",
          "10"
        ],
        "correctIndex": 0,
        "challengeResult": "15",
        "explanation": "Сумма чисел от 1 до 5 равна 15."
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 5; i++)\n{\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "30",
        "options": [
          "30",
          "31",
          "29",
          "32"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 6; i++)\n{\n    sum = 0;\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 7; i++)\n{\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "56",
        "options": [
          "56",
          "57",
          "55",
          "58"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 8; i++)\n{\n    sum = 0;\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 9; i++)\n{\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "90",
        "options": [
          "90",
          "91",
          "89",
          "92"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 10; i++)\n{\n    sum = 0;\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "20",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab7-precondition",
    "deckId": "loops-control",
    "term": "Цикл с предусловием",
    "exampleCode": "int count = 0;\nint limit = 0;\nwhile (count < limit)\n    count++;\nConsole.WriteLine(count);",
    "exampleResult": "0",
    "exampleNote": "Проверка перед телом может полностью исключить его выполнение.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nint limit = 0;\nwhile (count < limit)\n    count++;\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "1",
      "-1",
      "Бесконечный цикл"
    ],
    "correctIndex": 0,
    "explanation": "Начальная проверка 0 < 0 ложна: ноль итераций.",
    "challengeResult": "0",
    "codeDeckId": "practice-loops-control"
  },
  {
    "id": "lab7-postcondition",
    "deckId": "loops-control",
    "term": "Цикл с постусловием",
    "exampleCode": "int count = 0;\ndo\n{\n    count++;\n} while (false);\nConsole.WriteLine(count);",
    "exampleResult": "1",
    "exampleNote": "Проверка после тела гарантирует хотя бы одно выполнение.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\ndo\n{\n    count++;\n} while (count < 0);\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "1",
      "2",
      "Бесконечный цикл"
    ],
    "correctIndex": 1,
    "explanation": "count становится 1 до первой проверки; 1 < 0 ложно.",
    "challengeResult": "1",
    "codeDeckId": "practice-loops-control"
  },
  {
    "id": "lab7-infinite",
    "deckId": "loops-control",
    "term": "Бесконечный цикл",
    "exampleCode": "int count = 0;\nwhile (true)\n{\n    count++;\n    if (count == 3) break;\n}\nConsole.WriteLine(count);",
    "exampleResult": "3",
    "exampleNote": "Условие true само не завершит цикл; здесь выход явно задан через break.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nwhile (true)\n{\n    count++;\n    if (count == 2) break;\n}\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "1",
      "2",
      "Бесконечный цикл"
    ],
    "correctIndex": 2,
    "explanation": "При count = 2 срабатывает break, поэтому цикл всё-таки завершается.",
    "challengeResult": "2",
    "codeDeckId": "practice-loops-control"
  },
  {
    "id": "lab7-off-by-one",
    "deckId": "loops-control",
    "term": "Ошибка на единицу",
    "exampleCode": "int count = 0;\nfor (int i = 0; i <= 3; i++)\n    count++;\nConsole.WriteLine(count);",
    "exampleResult": "4",
    "exampleNote": "При старте с нуля включённая граница 3 даёт четыре итерации, а не три.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nfor (int i = 0; i <= 4; i++)\n    count++;\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "Значения 0, 1, 2, 3, 4 дают пять итераций. Для четырёх нужна граница i < 4.",
    "challengeResult": "5",
    "codeDeckId": "practice-loops-control",
    "variants": [
      {
        "challengeCode": "int count = 0;\nfor (int i = 0; i <= 2; i++)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "options": [
          "3",
          "2",
          "1",
          "4"
        ],
        "correctIndex": 0,
        "challengeResult": "3",
        "explanation": "От 0 до 2 включительно — 3 значений, поэтому 3 итераций."
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 0; i <= 5; i++)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "options": [
          "6",
          "5",
          "4",
          "7"
        ],
        "correctIndex": 0,
        "challengeResult": "6",
        "explanation": "От 0 до 5 включительно — 6 значений, поэтому 6 итераций."
      },
      {
        "challengeCode": "int i;\nfor (i = 0; i < 7; i += 3)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 1; i < 8; i += 1)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 0; i < 9; i += 2)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 1; i < 10; i += 3)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 0; i < 11; i += 1)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 1; i < 12; i += 2)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "13",
        "options": [
          "13",
          "14",
          "12",
          "15"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "more4-copy",
    "codeDeckId": "lab4-assignment-reading",
    "deckId": "variables-values",
    "term": "Присваивание",
    "exampleCode": "int a = 3;\nint b = a;\na = 8;\nConsole.WriteLine(b);",
    "exampleResult": "3",
    "exampleNote": "В b копируется текущее число из a. Позднее изменение a не меняет уже сохранённое b.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = 4;\nint b = a;\na = 9;\nConsole.WriteLine(b);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4",
      "9",
      "0",
      "13"
    ],
    "correctIndex": 0,
    "explanation": "В b копируется текущее число из a. Позднее изменение a не меняет уже сохранённое b.",
    "challengeResult": "4"
  },
  {
    "id": "more4-swap",
    "codeDeckId": "lab4-assignment-reading",
    "deckId": "variables-values",
    "term": "Значение",
    "exampleCode": "int a = 2;\nint b = 7;\nint temp = a;\na = b;\nb = temp;\nConsole.WriteLine($\"{a} {b}\");",
    "exampleResult": "7 2",
    "exampleNote": "Временная переменная сохраняет прежнее a. После двух присваиваний значения a и b меняются местами.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = 3;\nint b = 8;\nint temp = a;\na = b;\nb = temp;\nConsole.WriteLine($\"{a} {b}\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "8 3",
      "3 8",
      "8 8",
      "3 3"
    ],
    "correctIndex": 0,
    "explanation": "Временная переменная сохраняет прежнее a. После двух присваиваний значения a и b меняются местами.",
    "challengeResult": "8 3"
  },
  {
    "id": "more4-overwrite",
    "codeDeckId": "lab4-assignment-reading",
    "deckId": "variables-values",
    "term": "Переменная",
    "exampleCode": "int number = 2;\nnumber = 9;\nnumber = 4;\nConsole.WriteLine(number);",
    "exampleResult": "4",
    "exampleNote": "Каждое присваивание заменяет прежнее значение. Выводится число из последнего присваивания.",
    "kind": "Что выведет код?",
    "challengeCode": "int number = 1;\nnumber = 8;\nnumber = 6;\nConsole.WriteLine(number);",
    "prompt": "Что появится в консоли?",
    "options": [
      "6",
      "1",
      "8",
      "15"
    ],
    "correctIndex": 0,
    "explanation": "Каждое присваивание заменяет прежнее значение. Выводится число из последнего присваивания.",
    "challengeResult": "6"
  },
  {
    "id": "more4-case-sensitive",
    "codeDeckId": "lab4-assignment-reading",
    "deckId": "variables-values",
    "term": "Идентификатор",
    "exampleCode": "int value = 2;\nint Value = 5;\nConsole.WriteLine(value);",
    "exampleResult": "2",
    "exampleNote": "Имена с разным регистром обозначают разные переменные. При чтении Console.WriteLine важно проверить точное написание имени.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 3;\nint Score = 7;\nConsole.WriteLine(Score);",
    "prompt": "Что появится в консоли?",
    "options": [
      "7",
      "3",
      "10",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Регистр имеет значение: score и Score — два разных имени. Выводится именно указанная переменная.",
    "challengeResult": "7"
  },
  {
    "id": "more4-assignment-order",
    "codeDeckId": "lab4-assignment-reading",
    "deckId": "variables-values",
    "term": "Оператор присваивания",
    "exampleCode": "int a = 2;\nint b = 6;\na = b;\nb = a;\nConsole.WriteLine($\"{a} {b}\");",
    "exampleResult": "6 6",
    "exampleNote": "После a = b прежнее a потеряно. Следующее b = a копирует уже новое значение; обмена здесь нет.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = 4;\nint b = 9;\na = b;\nb = a;\nConsole.WriteLine($\"{a} {b}\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "9 9",
      "4 9",
      "9 4",
      "4 4"
    ],
    "correctIndex": 0,
    "explanation": "После a = b прежнее a потеряно. Следующее b = a копирует уже новое значение; обмена здесь нет.",
    "challengeResult": "9 9"
  },
  {
    "id": "more4-string-copy",
    "codeDeckId": "lab4-assignment-reading",
    "deckId": "csharp-data-types",
    "term": "string",
    "exampleCode": "string a = \"кот\";\nstring b = a;\na = \"пёс\";\nConsole.WriteLine(b);",
    "exampleResult": "кот",
    "exampleNote": "Переприсваивание a не переприсваивает b. В b остаётся первоначальная строка.",
    "kind": "Что выведет код?",
    "challengeCode": "string a = \"дом\";\nstring b = a;\na = \"лес\";\nConsole.WriteLine(b);",
    "prompt": "Что появится в консоли?",
    "options": [
      "дом",
      "лес",
      "домлес",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Переприсваивание a не переприсваивает b. В b остаётся первоначальная строка.",
    "challengeResult": "дом"
  },
  {
    "id": "more4-char-type",
    "codeDeckId": "lab4-assignment-reading",
    "deckId": "csharp-data-types",
    "term": "char",
    "exampleCode": "char letter = 'Q';\nConsole.WriteLine(letter);",
    "exampleResult": "Q",
    "exampleNote": "Символ в одинарных кавычках сохраняется в char и выводится без кавычек.",
    "kind": "Заполните пропуск",
    "challengeCode": "/* ??? */ letter = 'Z';\nConsole.WriteLine(letter);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: Z?",
    "options": [
      "char",
      "string",
      "bool",
      "int"
    ],
    "correctIndex": 0,
    "explanation": "Один символ в одинарных кавычках можно сохранить в char. Тип string требует строку в двойных кавычках.",
    "solutionResult": "Z"
  },
  {
    "id": "more4-var-initial",
    "codeDeckId": "lab4-assignment-reading",
    "deckId": "typing-and-output",
    "term": "var",
    "exampleCode": "var count = 6;\nConsole.WriteLine(count);",
    "exampleResult": "6",
    "exampleNote": "var выводит тип по начальному значению. При Console.WriteLine выводится само сохранённое значение.",
    "kind": "Заполните пропуск",
    "challengeCode": "var count = /* ??? */;\nConsole.WriteLine(count);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 9?",
    "options": [
      "9",
      "6",
      "0",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Начальное значение задаёт и тип, и содержимое переменной. Чтобы вывести 9, нужно присвоить 9.",
    "solutionResult": "9"
  },
  {
    "id": "more4-decimal-suffix",
    "codeDeckId": "lab4-assignment-reading",
    "deckId": "typing-and-output",
    "term": "Суффикс литерала",
    "exampleCode": "decimal price = 6m;\nConsole.WriteLine(price);",
    "exampleResult": "6",
    "exampleNote": "Суффикс m задаёт литерал decimal. При выводе суффикс не показывается.",
    "kind": "Заполните пропуск",
    "challengeCode": "decimal price = /* ??? */;\nConsole.WriteLine(price);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 8?",
    "options": [
      "8m",
      "6m",
      "0m",
      "1m"
    ],
    "correctIndex": 0,
    "explanation": "Литерал 8m задаёт значение 8 типа decimal; суффикс m сохраняется.",
    "solutionResult": "8"
  },
  {
    "id": "more4-long-literal",
    "codeDeckId": "lab4-assignment-reading",
    "deckId": "csharp-data-types",
    "term": "long",
    "exampleCode": "long total = 4_000_000_000L;\nConsole.WriteLine(total);",
    "exampleResult": "4000000000",
    "exampleNote": "Подчёркивания отделяют разряды только в записи кода. L обозначает long; при выводе ни подчёркивания, ни суффикс не показываются.",
    "kind": "Заполните пропуск",
    "challengeCode": "long total = /* ??? */;\nConsole.WriteLine(total);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 5000000000?",
    "options": [
      "5_000_000_000L",
      "4_000_000_000L",
      "5L",
      "500L"
    ],
    "correctIndex": 0,
    "explanation": "Подчёркивания разделяют разряды для чтения, L обозначает long. Нужна запись пяти миллиардов.",
    "solutionResult": "5000000000"
  },
  {
    "id": "more4-write-lines",
    "codeDeckId": "lab4-text-output-reading",
    "deckId": "typing-and-output",
    "term": "Console.WriteLine",
    "exampleCode": "Console.Write(\"A\");\nConsole.WriteLine(\"B\");\nConsole.Write(\"C\");",
    "exampleResult": "AB\nC",
    "exampleNote": "Write не добавляет перенос; WriteLine добавляет его после своего значения. Поэтому первые два значения стоят на одной строке.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.Write(\"1\");\nConsole.WriteLine(\"2\");\nConsole.Write(\"3\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "12\n3",
      "1\n2\n3",
      "123",
      "1\n23"
    ],
    "correctIndex": 0,
    "explanation": "Write не добавляет перенос; WriteLine добавляет его после своего значения. Поэтому первые два значения стоят на одной строке.",
    "challengeResult": "12\n3"
  },
  {
    "id": "more4-interpolation-current",
    "codeDeckId": "lab4-text-output-reading",
    "deckId": "typing-and-output",
    "term": "Строковая интерполяция",
    "exampleCode": "int count = 2;\nstring text = $\"Число: {count}\";\ncount = 5;\nConsole.WriteLine(text);",
    "exampleResult": "Число: 2",
    "exampleNote": "Интерполяция выполняется при создании строки. Уже готовый text не пересчитывается после изменения count.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 3;\nstring text = $\"Число: {count}\";\ncount = 7;\nConsole.WriteLine(text);",
    "prompt": "Что появится в консоли?",
    "options": [
      "Число: 3",
      "Число: 7",
      "Число: count",
      "Число: {count}"
    ],
    "correctIndex": 0,
    "explanation": "Интерполяция выполняется при создании строки. Уже готовый text не пересчитывается после изменения count.",
    "challengeResult": "Число: 3"
  },
  {
    "id": "more4-no-dollar",
    "codeDeckId": "lab4-text-output-reading",
    "deckId": "typing-and-output",
    "term": "Строковая интерполяция",
    "exampleCode": "int age = 16;\nConsole.WriteLine(\"Возраст: {age}\");",
    "exampleResult": "Возраст: {age}",
    "exampleNote": "Без знака $ фигурные скобки и имя остаются обычным текстом. Значение переменной не подставляется.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 8;\nConsole.WriteLine(\"Баллы: {score}\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "Баллы: {score}",
      "Баллы: 8",
      "Баллы: score",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Без знака $ фигурные скобки и имя остаются обычным текстом. Значение переменной не подставляется.",
    "challengeResult": "Баллы: {score}"
  },
  {
    "id": "more4-text-and-number",
    "codeDeckId": "lab4-text-output-reading",
    "deckId": "csharp-data-types",
    "term": "string",
    "exampleCode": "Console.WriteLine(\"4\" + 2);",
    "exampleResult": "42",
    "exampleNote": "Строковый операнд превращает + в соединение текста. В этом примере получается 42, а не сумма 6.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(\"7\" + 3);",
    "prompt": "Что появится в консоли?",
    "options": [
      "73",
      "10",
      "21",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Если один из этих операндов строка, + соединяет текст. Получается строка 73, а не сумма 10.",
    "challengeResult": "73"
  },
  {
    "id": "more4-bool-value",
    "codeDeckId": "lab4-text-output-reading",
    "deckId": "csharp-data-types",
    "term": "bool",
    "exampleCode": "bool ready = false;\nready = true;\nConsole.WriteLine(ready);",
    "exampleResult": "True",
    "exampleNote": "Выводится значение после последнего присваивания. Логические значения показываются как True и False.",
    "kind": "Что выведет код?",
    "challengeCode": "bool ready = true;\nready = false;\nConsole.WriteLine(ready);",
    "prompt": "Что появится в консоли?",
    "options": [
      "False",
      "True",
      "ready",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Последнее присваивание задаёт false. При выводе bool используется написание False.",
    "challengeResult": "False"
  },
  {
    "id": "more4-char-text",
    "codeDeckId": "lab4-text-output-reading",
    "deckId": "csharp-data-types",
    "term": "char",
    "exampleCode": "char mark = '?';\nConsole.WriteLine($\"Готов{mark}\");",
    "exampleResult": "Готов?",
    "exampleNote": "В строке Готов{mark} интерполяция заменяет mark символом ?, поэтому получается Готов?.",
    "kind": "Что выведет код?",
    "challengeCode": "char mark = '!';\nstring word = \"Да\";\nConsole.WriteLine($\"{word}{mark}\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "Да!",
      "!Да",
      "Даmark",
      "word!"
    ],
    "correctIndex": 0,
    "explanation": "Строковая интерполяция подставляет сначала текст word, затем символ mark.",
    "challengeResult": "Да!"
  },
  {
    "id": "more4-double-variable",
    "codeDeckId": "lab4-text-output-reading",
    "deckId": "csharp-data-types",
    "term": "double",
    "exampleCode": "double value = 4.0;\nConsole.WriteLine(value);",
    "exampleResult": "4",
    "exampleNote": "Переменная double может хранить дробное значение. В этом примере выводится сохранённое целое по величине число.",
    "kind": "Заполните пропуск",
    "challengeCode": "/* ??? */ value = 2.5;\nConsole.WriteLine(value * 2);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 5?",
    "options": [
      "double",
      "int",
      "bool",
      "char"
    ],
    "correctIndex": 0,
    "explanation": "2.5 — литерал double. int, bool и char не принимают его напрямую; после умножения на 2 получится 5.",
    "solutionResult": "5"
  },
  {
    "id": "more4-interpolation-name",
    "codeDeckId": "lab4-text-output-reading",
    "deckId": "typing-and-output",
    "term": "Строковая интерполяция",
    "exampleCode": "int width = 4;\nConsole.WriteLine($\"Ширина: {width}\");",
    "exampleResult": "Ширина: 4",
    "exampleNote": "В фигурных скобках интерполяции указывают нужную переменную; её текущее значение подставляется в строку.",
    "kind": "Заполните пропуск",
    "challengeCode": "int width = 6;\nint height = 9;\nConsole.WriteLine($\"Размер: {/* ??? */}\");",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: Размер: 9?",
    "options": [
      "height",
      "width",
      "0",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Нужно подставить переменную height, в которой хранится 9. width содержит 6.",
    "solutionResult": "Размер: 9"
  },
  {
    "id": "more4-empty-string",
    "codeDeckId": "lab4-text-output-reading",
    "deckId": "csharp-data-types",
    "term": "string",
    "exampleCode": "string text = \"\";\nConsole.WriteLine(\"[\" + text + \"]\");",
    "exampleResult": "[]",
    "exampleNote": "В text находится пустая строка: между квадратными скобками ничего нет, получается [].",
    "kind": "Что выведет код?",
    "challengeCode": "string text = \" \";\nConsole.WriteLine(\"[\" + text + \"]\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "[ ]",
      "[]",
      "[text]",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Строка из одного пробела не пуста: пробел остаётся между квадратными скобками.",
    "challengeResult": "[ ]"
  },
  {
    "id": "more4-reassign-name",
    "codeDeckId": "lab4-text-output-reading",
    "deckId": "variables-values",
    "term": "Присваивание",
    "exampleCode": "int first = 3;\nint second = 6;\nfirst = second;\nConsole.WriteLine(first);",
    "exampleResult": "6",
    "exampleNote": "Значение справа от = записывается в переменную слева. Другая переменная от этого присваивания не меняется.",
    "kind": "Заполните пропуск",
    "challengeCode": "int first = 4;\nint second = 8;\n/* ??? */ = second;\nConsole.WriteLine(first);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 8?",
    "options": [
      "first",
      "second",
      "third",
      "First"
    ],
    "correctIndex": 0,
    "explanation": "Чтобы first стало равно 8, присваивание должно записать значение second именно в first. Имена third и First здесь не объявлены.",
    "solutionResult": "8"
  },
  {
    "id": "more5-div-before-cast",
    "codeDeckId": "lab5-division-and-casts",
    "deckId": "input-operations-conversions",
    "term": "Явное преобразование",
    "exampleCode": "int a = 7;\nConsole.WriteLine((double)(a / 2) * 2);",
    "exampleResult": "6",
    "exampleNote": "Сначала выполняется целочисленное деление в скобках. Дробная часть уже потеряна; последующее приведение её не восстанавливает.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = 9;\nConsole.WriteLine((double)(a / 2) * 2);",
    "prompt": "Что появится в консоли?",
    "options": [
      "8",
      "9",
      "4",
      "18"
    ],
    "correctIndex": 0,
    "explanation": "Сначала выполняется целочисленное деление в скобках. Дробная часть уже потеряна; последующее приведение её не восстанавливает.",
    "challengeResult": "8"
  },
  {
    "id": "more5-cast-before-div",
    "codeDeckId": "lab5-division-and-casts",
    "deckId": "input-operations-conversions",
    "term": "Явное преобразование",
    "exampleCode": "int a = 7;\nConsole.WriteLine((double)a / 2 * 2);",
    "exampleResult": "7",
    "exampleNote": "Приведение происходит до деления. Деление double сохраняет половину, а умножение на 2 возвращает исходное число.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = 9;\nConsole.WriteLine((double)a / 2 * 2);",
    "prompt": "Что появится в консоли?",
    "options": [
      "9",
      "8",
      "4",
      "18"
    ],
    "correctIndex": 0,
    "explanation": "Приведение происходит до деления. Деление double сохраняет половину, а умножение на 2 возвращает исходное число.",
    "challengeResult": "9"
  },
  {
    "id": "more5-double-after-int",
    "codeDeckId": "lab5-division-and-casts",
    "deckId": "input-operations-conversions",
    "term": "Потеря данных",
    "exampleCode": "double result = 7 / 2;\nConsole.WriteLine(result);",
    "exampleResult": "3",
    "exampleNote": "Тип переменной слева не меняет деление справа. Оба операнда целые; в double записывается уже целый результат.",
    "kind": "Что выведет код?",
    "challengeCode": "double result = 9 / 2;\nConsole.WriteLine(result);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4",
      "9",
      "5",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Тип переменной слева не меняет деление справа. Оба операнда целые; в double записывается уже целый результат.",
    "challengeResult": "4"
  },
  {
    "id": "more5-negative-div",
    "codeDeckId": "lab5-division-and-casts",
    "deckId": "input-operations-conversions",
    "term": "Целочисленное деление",
    "exampleCode": "Console.WriteLine(-7 / 2);",
    "exampleResult": "-3",
    "exampleNote": "При делении целых чисел дробная часть отбрасывается в направлении нуля, в том числе у отрицательных результатов.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(-11 / 3);",
    "prompt": "Что появится в консоли?",
    "options": [
      "-3",
      "-4",
      "3",
      "-2"
    ],
    "correctIndex": 0,
    "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Получается -3, а не -4.",
    "challengeResult": "-3"
  },
  {
    "id": "more5-remainder-sign",
    "codeDeckId": "lab5-division-and-casts",
    "deckId": "input-operations-conversions",
    "term": "Остаток от деления",
    "exampleCode": "Console.WriteLine(-7 % 3);",
    "exampleResult": "-1",
    "exampleNote": "При целочисленном остатке знак ненулевого результата совпадает со знаком делимого.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(-11 % 4);",
    "prompt": "Что появится в консоли?",
    "options": [
      "-3",
      "3",
      "-2",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Для целых чисел знак ненулевого остатка совпадает со знаком делимого: -11 = 4 * (-2) + (-3).",
    "challengeResult": "-3"
  },
  {
    "id": "more5-cast-location",
    "codeDeckId": "lab5-division-and-casts",
    "deckId": "input-operations-conversions",
    "term": "Явное преобразование",
    "exampleCode": "int value = 7;\nConsole.WriteLine((double)value / 2 * 2);",
    "exampleResult": "7",
    "exampleNote": "Приведение к double перед делением позволяет сохранить дробную часть промежуточного результата.",
    "kind": "Заполните пропуск",
    "challengeCode": "int value = 5;\nConsole.WriteLine(/* ??? */ / 2 * 2);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 5?",
    "options": [
      "(double)value",
      "value",
      "(int)value",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Нужно перейти к double до деления. Целочисленное 5 / 2 * 2 даст 4, а не 5.",
    "solutionResult": "5"
  },
  {
    "id": "more5-truncate-before-add",
    "codeDeckId": "lab5-division-and-casts",
    "deckId": "input-operations-conversions",
    "term": "Потеря данных",
    "exampleCode": "double value = 4.8;\nint result = (int)value + 1;\nConsole.WriteLine(result);",
    "exampleResult": "5",
    "exampleNote": "Сначала приведение отбрасывает дробную часть, затем к целому результату прибавляется указанное число.",
    "kind": "Что выведет код?",
    "challengeCode": "double value = 6.9;\nint result = (int)value + 2;\nConsole.WriteLine(result);",
    "prompt": "Что появится в консоли?",
    "options": [
      "8",
      "9",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Сначала приведение отбрасывает дробную часть, затем к целому результату прибавляется указанное число.",
    "challengeResult": "8"
  },
  {
    "id": "more5-parse-then-add",
    "codeDeckId": "lab5-division-and-casts",
    "deckId": "input-operations-conversions",
    "term": "Преобразование типов",
    "exampleCode": "string text = \"6\";\nConsole.WriteLine(int.Parse(text) + 2);",
    "exampleResult": "8",
    "exampleNote": "После int.Parse строка становится числом. Следующий + выполняет числовое сложение.",
    "kind": "Заполните пропуск",
    "challengeCode": "string text = \"9\";\nConsole.WriteLine(/* ??? */ + 1);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 10?",
    "options": [
      "int.Parse(text)",
      "text",
      "9 / 2",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "int.Parse превращает строку в число. Без преобразования text + 1 соединит текст и даст 91.",
    "solutionResult": "10"
  },
  {
    "id": "more5-left-associative",
    "codeDeckId": "lab5-operation-order",
    "deckId": "input-operations-conversions",
    "term": "Арифметический оператор",
    "exampleCode": "Console.WriteLine(12 / 3 * 2);",
    "exampleResult": "8",
    "exampleNote": "Деление и умножение имеют одинаковый приоритет и здесь выполняются слева направо.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(18 / 3 * 2);",
    "prompt": "Что появится в консоли?",
    "options": [
      "12",
      "3",
      "6",
      "9"
    ],
    "correctIndex": 0,
    "explanation": "Деление и умножение имеют одинаковый приоритет и здесь выполняются слева направо.",
    "challengeResult": "12"
  },
  {
    "id": "more5-subtraction-order",
    "codeDeckId": "lab5-operation-order",
    "deckId": "input-operations-conversions",
    "term": "Выражение",
    "exampleCode": "Console.WriteLine(12 - 4 - 2);",
    "exampleResult": "6",
    "exampleNote": "Несколько вычитаний без скобок выполняются слева направо.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(20 - 6 - 3);",
    "prompt": "Что появится в консоли?",
    "options": [
      "11",
      "17",
      "23",
      "9"
    ],
    "correctIndex": 0,
    "explanation": "Вычитания выполняются слева направо: сначала вычитается 6, затем ещё 3.",
    "challengeResult": "11"
  },
  {
    "id": "more5-mod-priority",
    "codeDeckId": "lab5-operation-order",
    "deckId": "input-operations-conversions",
    "term": "Приоритет операций",
    "exampleCode": "Console.WriteLine(2 + 11 % 4);",
    "exampleResult": "5",
    "exampleNote": "Остаток от деления имеет более высокий приоритет, чем сложение.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(3 + 14 % 5);",
    "prompt": "Что появится в консоли?",
    "options": [
      "7",
      "2",
      "17",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "Остаток вычисляется раньше сложения: сначала 14 % 5 = 4, затем 3 + 4.",
    "challengeResult": "7"
  },
  {
    "id": "more5-compound-multiply",
    "codeDeckId": "lab5-operation-order",
    "deckId": "input-operations-conversions",
    "term": "Составное присваивание",
    "exampleCode": "int x = 4;\nx *= 3;\nConsole.WriteLine(x);",
    "exampleResult": "12",
    "exampleNote": "Для int запись x *= число заменяет x произведением его прежнего значения и этого числа.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 5;\nx *= 4;\nConsole.WriteLine(x);",
    "prompt": "Что появится в консоли?",
    "options": [
      "20",
      "9",
      "5",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Для int запись x *= 4 означает x = x * 4. Используется прежнее значение x.",
    "challengeResult": "20"
  },
  {
    "id": "more5-compound-divide",
    "codeDeckId": "lab5-operation-order",
    "deckId": "input-operations-conversions",
    "term": "Составное присваивание",
    "exampleCode": "int x = 9;\nx /= 2;\nConsole.WriteLine(x);",
    "exampleResult": "4",
    "exampleNote": "При составном делении переменной int дробная часть результата отбрасывается.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 13;\nx /= 3;\nConsole.WriteLine(x);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4",
      "5",
      "13",
      "3"
    ],
    "correctIndex": 0,
    "explanation": "x имеет тип int. Составное деление использует целочисленный результат: 13 / 3 = 4.",
    "challengeResult": "4"
  },
  {
    "id": "more5-compound-chain",
    "codeDeckId": "lab5-operation-order",
    "deckId": "input-operations-conversions",
    "term": "Составное присваивание",
    "exampleCode": "int x = 2;\nx += 3;\nx *= 2;\nConsole.WriteLine(x);",
    "exampleResult": "10",
    "exampleNote": "Команды выполняются последовательно: сначала значение увеличивается, затем новое значение умножается.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 3;\nx += 4;\nx *= 2;\nConsole.WriteLine(x);",
    "prompt": "Что появится в консоли?",
    "options": [
      "14",
      "11",
      "10",
      "24"
    ],
    "correctIndex": 0,
    "explanation": "Команды выполняются последовательно: сначала значение увеличивается, затем новое значение умножается.",
    "challengeResult": "14"
  },
  {
    "id": "more5-operator-choice",
    "codeDeckId": "lab5-operation-order",
    "deckId": "input-operations-conversions",
    "term": "Остаток от деления",
    "exampleCode": "Console.WriteLine(13 % 5);",
    "exampleResult": "3",
    "exampleNote": "Оператор % возвращает остаток от деления, а не частное.",
    "kind": "Заполните пропуск",
    "challengeCode": "Console.WriteLine(17 /* ??? */ 5);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 2?",
    "options": [
      "%",
      "+",
      "-",
      "*"
    ],
    "correctIndex": 0,
    "explanation": "17 % 5 даёт остаток 2. Другие предложенные операции дают 22, 12 и 85.",
    "solutionResult": "2"
  },
  {
    "id": "more5-parenthesis-choice",
    "codeDeckId": "lab5-operation-order",
    "deckId": "input-operations-conversions",
    "term": "Скобки в выражении",
    "exampleCode": "Console.WriteLine((3 + 4) * 2);",
    "exampleResult": "14",
    "exampleNote": "Сначала вычисляется сумма в скобках, затем вся сумма умножается на число после скобок.",
    "kind": "Заполните пропуск",
    "challengeCode": "Console.WriteLine(/* ??? */);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 18?",
    "options": [
      "(4 + 5) * 2",
      "4 + 5 * 2",
      "4 * 5 + 2",
      "4 + 5 + 2"
    ],
    "correctIndex": 0,
    "explanation": "Чтобы умножить всю сумму, её нужно заключить в скобки. (4 + 5) * 2 даёт 18.",
    "solutionResult": "18"
  },
  {
    "id": "more5-expression-reuse",
    "codeDeckId": "lab5-operation-order",
    "deckId": "input-operations-conversions",
    "term": "Выражение",
    "exampleCode": "int x = 3;\nint y = x * 2;\nx = 8;\nConsole.WriteLine(y);",
    "exampleResult": "6",
    "exampleNote": "Выражение вычисляется при присваивании y. Позднее изменение x не пересчитывает y автоматически.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 4;\nint y = x * 3;\nx = 9;\nConsole.WriteLine(y);",
    "prompt": "Что появится в консоли?",
    "options": [
      "12",
      "27",
      "9",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Выражение вычисляется при присваивании y. Позднее изменение x не пересчитывает y автоматически.",
    "challengeResult": "12"
  },
  {
    "id": "more5-two-inputs",
    "codeDeckId": "lab5-input-and-text",
    "deckId": "input-operations-conversions",
    "term": "Ввод целого числа",
    "exampleCode": "int a = int.Parse(Console.ReadLine());\nint b = int.Parse(Console.ReadLine());\nConsole.WriteLine(a + b);",
    "exampleResult": "9",
    "exampleNote": "Каждый ReadLine читает отдельную строку. После Parse складываются числа, а не текст.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = int.Parse(Console.ReadLine());\nint b = int.Parse(Console.ReadLine());\nConsole.WriteLine(a + b);",
    "prompt": "Что появится в консоли?",
    "options": [
      "13",
      "58",
      "3",
      "40"
    ],
    "correctIndex": 0,
    "explanation": "Каждый ReadLine читает отдельную строку. После Parse складываются числа, а не текст.",
    "challengeResult": "13",
    "challengeInput": "5\n8",
    "exampleInput": "2\n7"
  },
  {
    "id": "more5-text-inputs",
    "codeDeckId": "lab5-input-and-text",
    "deckId": "input-operations-conversions",
    "term": "Console.ReadLine",
    "exampleCode": "string a = Console.ReadLine();\nstring b = Console.ReadLine();\nConsole.WriteLine(a + b);",
    "exampleResult": "27",
    "exampleNote": "Без Parse введённые данные остаются строками. + соединяет их в порядке чтения.",
    "kind": "Что выведет код?",
    "challengeCode": "string a = Console.ReadLine();\nstring b = Console.ReadLine();\nConsole.WriteLine(a + b);",
    "prompt": "Что появится в консоли?",
    "options": [
      "58",
      "13",
      "3",
      "40"
    ],
    "correctIndex": 0,
    "explanation": "Без Parse введённые данные остаются строками. + соединяет их в порядке чтения.",
    "challengeResult": "58",
    "challengeInput": "5\n8",
    "exampleInput": "2\n7"
  },
  {
    "id": "more5-string-left",
    "codeDeckId": "lab5-input-and-text",
    "deckId": "input-operations-conversions",
    "term": "Операнд",
    "exampleCode": "Console.WriteLine(\"Сумма: \" + 2 + 3);",
    "exampleResult": "Сумма: 23",
    "exampleNote": "Слева уже есть строка. Сначала к ней присоединяется первое число, затем второе.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(\"Сумма: \" + 4 + 5);",
    "prompt": "Что появится в консоли?",
    "options": [
      "Сумма: 45",
      "Сумма: 9",
      "9",
      "Сумма: 20"
    ],
    "correctIndex": 0,
    "explanation": "Слева уже есть строка. Сначала к ней присоединяется первое число, затем второе.",
    "challengeResult": "Сумма: 45"
  },
  {
    "id": "more5-string-parenthesis",
    "codeDeckId": "lab5-input-and-text",
    "deckId": "input-operations-conversions",
    "term": "Скобки в выражении",
    "exampleCode": "Console.WriteLine(\"Сумма: \" + (2 + 3));",
    "exampleResult": "Сумма: 5",
    "exampleNote": "Скобки сначала вычисляют сумму чисел. Затем готовое число присоединяется к строке.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(\"Сумма: \" + (4 + 5));",
    "prompt": "Что появится в консоли?",
    "options": [
      "Сумма: 9",
      "Сумма: 45",
      "45",
      "Сумма: 20"
    ],
    "correctIndex": 0,
    "explanation": "Скобки сначала вычисляют сумму чисел. Затем готовое число присоединяется к строке.",
    "challengeResult": "Сумма: 9"
  },
  {
    "id": "more5-number-left",
    "codeDeckId": "lab5-input-and-text",
    "deckId": "input-operations-conversions",
    "term": "Операнд",
    "exampleCode": "Console.WriteLine(2 + 3 + \" шт.\");",
    "exampleResult": "5 шт.",
    "exampleNote": "Сначала складываются два числа слева, затем к результату присоединяется строка.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(4 + 5 + \" шт.\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "9 шт.",
      "45 шт.",
      "20 шт.",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Сначала складываются два числа слева, затем к результату присоединяется строка.",
    "challengeResult": "9 шт."
  },
  {
    "id": "more5-seconds",
    "codeDeckId": "lab5-input-and-text",
    "deckId": "input-operations-conversions",
    "term": "Целочисленное деление",
    "exampleCode": "int seconds = 125;\nConsole.WriteLine($\"{seconds / 60}:{seconds % 60}\");",
    "exampleResult": "2:5",
    "exampleNote": "Деление на 60 даёт полные минуты, остаток — оставшиеся секунды. Обычная интерполяция не добавляет ноль перед 5.",
    "kind": "Что выведет код?",
    "challengeCode": "int seconds = 185;\nConsole.WriteLine($\"{seconds / 60}:{seconds % 60}\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "3:5",
      "3:05",
      "2:65",
      "185:60"
    ],
    "correctIndex": 0,
    "explanation": "Деление на 60 даёт полные минуты, остаток — оставшиеся секунды. Обычная интерполяция не добавляет ноль перед 5.",
    "challengeResult": "3:5"
  },
  {
    "id": "more5-input-difference",
    "codeDeckId": "lab5-input-and-text",
    "deckId": "input-operations-conversions",
    "term": "Ввод целого числа",
    "exampleCode": "int number = int.Parse(Console.ReadLine());\nConsole.WriteLine(number - 2);",
    "exampleResult": "6",
    "exampleNote": "ReadLine получает строку ввода, Parse превращает её в число, затем выполняется вычитание.",
    "kind": "Заполните пропуск",
    "challengeCode": "int number = int.Parse(Console.ReadLine());\nConsole.WriteLine(number /* ??? */ 3);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 5?",
    "options": [
      "-",
      "+",
      "*",
      "%"
    ],
    "correctIndex": 0,
    "explanation": "При вводе 8 только вычитание 3 даёт 5. Остаток 8 % 3 равен 2.",
    "solutionResult": "5",
    "challengeInput": "8",
    "exampleInput": "8"
  },
  {
    "id": "more5-conversion-independent",
    "codeDeckId": "lab5-input-and-text",
    "deckId": "input-operations-conversions",
    "term": "Неявное преобразование",
    "exampleCode": "int a = 4;\nlong b = a;\na = 7;\nConsole.WriteLine(b);",
    "exampleResult": "4",
    "exampleNote": "Преобразованное значение копируется при присваивании. b не связано с последующими изменениями a.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = 6;\ndouble b = a;\na = 9;\nConsole.WriteLine(b);",
    "prompt": "Что появится в консоли?",
    "options": [
      "6",
      "9",
      "15",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Преобразованное значение копируется при присваивании. b не связано с последующими изменениями a.",
    "challengeResult": "6"
  },
  {
    "id": "more5-division-remainder",
    "codeDeckId": "lab5-input-and-text",
    "deckId": "input-operations-conversions",
    "term": "Арифметический оператор",
    "exampleCode": "int n = 17;\nConsole.WriteLine(n / 10 + n % 10);",
    "exampleResult": "8",
    "exampleNote": "Для положительного двузначного числа деление на 10 даёт десятки, остаток от деления на 10 — единицы.",
    "kind": "Заполните пропуск",
    "challengeCode": "int n = 24;\nConsole.WriteLine(/* ??? */);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 6?",
    "options": [
      "n / 10 + n % 10",
      "n / 10",
      "n % 10",
      "n + 10"
    ],
    "correctIndex": 0,
    "explanation": "Для двузначного 24 деление на 10 даёт 2, остаток 4. Сумма цифр — 6.",
    "solutionResult": "6"
  },
  {
    "id": "more6-boundary-exclusive",
    "codeDeckId": "lab6-combine-conditions",
    "deckId": "conditions-logic",
    "term": "Проверка диапазона",
    "exampleCode": "int x = 10;\nConsole.WriteLine(x > 0 && x < 10);",
    "exampleResult": "False",
    "exampleNote": "Строгий знак < исключает верхнюю границу. При x, равном границе, вторая проверка ложна.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 5;\nConsole.WriteLine(x > 0 && x < 5);",
    "prompt": "Что появится в консоли?",
    "options": [
      "False",
      "True",
      "5",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Строгий знак < исключает верхнюю границу. При x, равном границе, вторая проверка ложна.",
    "challengeResult": "False"
  },
  {
    "id": "more6-boundary-inclusive",
    "codeDeckId": "lab6-combine-conditions",
    "deckId": "conditions-logic",
    "term": "Проверка диапазона",
    "exampleCode": "int x = 10;\nConsole.WriteLine(x >= 0 && x <= 10);",
    "exampleResult": "True",
    "exampleNote": "Знаки >= и <= включают обе границы, поэтому граничное значение допустимо.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 5;\nConsole.WriteLine(x >= 0 && x <= 5);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "5",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Знаки >= и <= включают обе границы, поэтому граничное значение допустимо.",
    "challengeResult": "True"
  },
  {
    "id": "more6-outside-range",
    "codeDeckId": "lab6-combine-conditions",
    "deckId": "conditions-logic",
    "term": "Логическое ИЛИ ||",
    "exampleCode": "int x = -2;\nConsole.WriteLine(x < 0 || x > 10);",
    "exampleResult": "True",
    "exampleNote": "Для выхода за диапазон достаточно нарушить одну границу. Поэтому проверки соединены через ||.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 11;\nConsole.WriteLine(x < 0 || x > 10);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "11",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Для выхода за диапазон достаточно нарушить одну границу. Поэтому проверки соединены через ||.",
    "challengeResult": "True"
  },
  {
    "id": "more6-and-before-or",
    "codeDeckId": "lab6-combine-conditions",
    "deckId": "conditions-logic",
    "term": "Приоритет логических операторов",
    "exampleCode": "Console.WriteLine(true || false && false);",
    "exampleResult": "True",
    "exampleNote": "&& имеет больший приоритет, чем ||: выражение группируется как true || (false && false). Первая часть || уже true, поэтому правая часть не вычисляется.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(false && true || true);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "truefalse",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "&& выполняется раньше ||. В задании сначала false && true, затем false || true.",
    "challengeResult": "True"
  },
  {
    "id": "more6-logic-parentheses",
    "codeDeckId": "lab6-combine-conditions",
    "deckId": "conditions-logic",
    "term": "Приоритет логических операторов",
    "exampleCode": "Console.WriteLine((true || false) && false);",
    "exampleResult": "False",
    "exampleNote": "Скобки заставляют вычислить выражение с || раньше внешней операции &&.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine((false || true) && false);",
    "prompt": "Что появится в консоли?",
    "options": [
      "False",
      "True",
      "0",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Скобки заставляют сначала вычислить ||. Полученное true затем соединяется через && с false.",
    "challengeResult": "False"
  },
  {
    "id": "more6-negate-comparison",
    "codeDeckId": "lab6-combine-conditions",
    "deckId": "conditions-logic",
    "term": "Логическое НЕ !",
    "exampleCode": "int score = 40;\nConsole.WriteLine(!(score >= 60));",
    "exampleResult": "True",
    "exampleNote": "Сначала вычисляется сравнение в скобках, затем ! меняет его логическое значение на противоположное.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 75;\nConsole.WriteLine(!(score >= 60));",
    "prompt": "Что появится в консоли?",
    "options": [
      "False",
      "True",
      "75",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Сначала вычисляется сравнение в скобках, затем ! меняет его логическое значение на противоположное.",
    "challengeResult": "False"
  },
  {
    "id": "more6-double-negation",
    "codeDeckId": "lab6-combine-conditions",
    "deckId": "conditions-logic",
    "term": "Логическое НЕ !",
    "exampleCode": "bool ready = true;\nConsole.WriteLine(!!ready);",
    "exampleResult": "True",
    "exampleNote": "Два отрицания возвращают исходное логическое значение: !false — true, а !true — false.",
    "kind": "Что выведет код?",
    "challengeCode": "bool ready = false;\nConsole.WriteLine(!!ready);",
    "prompt": "Что появится в консоли?",
    "options": [
      "False",
      "True",
      "ready",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Два отрицания возвращают исходное логическое значение: !false — true, а !true — false.",
    "challengeResult": "False"
  },
  {
    "id": "more6-range-operator",
    "codeDeckId": "lab6-combine-conditions",
    "deckId": "conditions-logic",
    "term": "Проверка диапазона",
    "exampleCode": "int x = 4;\nConsole.WriteLine(x >= 0 && x <= 10);",
    "exampleResult": "True",
    "exampleNote": "Условие принадлежности диапазону требует одновременного выполнения обеих проверок и записывается с &&.",
    "kind": "Заполните пропуск",
    "challengeCode": "int x = -2;\nConsole.WriteLine(/* ??? */);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: False?",
    "options": [
      "x >= 0 && x <= 10",
      "x < 0 || x > 10",
      "x <= 10",
      "x < 0"
    ],
    "correctIndex": 0,
    "explanation": "Левая проверка ложна, правая истинна. && требует истинности обеих частей; для проверки диапазона нужен именно он.",
    "solutionResult": "False"
  },
  {
    "id": "more6-even-condition",
    "codeDeckId": "lab6-combine-conditions",
    "deckId": "conditions-logic",
    "term": "Условие",
    "exampleCode": "int number = 8;\nConsole.WriteLine(number % 2 == 0);",
    "exampleResult": "True",
    "exampleNote": "У чётного числа остаток от деления на 2 равен нулю; сравнение с нулём проверяет чётность.",
    "kind": "Что выведет код?",
    "challengeCode": "int number = 9;\nConsole.WriteLine(number % 2 == 0);",
    "prompt": "Что появится в консоли?",
    "options": [
      "False",
      "True",
      "1",
      "9"
    ],
    "correctIndex": 0,
    "explanation": "Остаток от деления чётного числа на 2 равен нулю. У 9 остаток 1, поэтому сравнение ложно.",
    "challengeResult": "False"
  },
  {
    "id": "more6-equality-assignment",
    "codeDeckId": "lab6-combine-conditions",
    "deckId": "conditions-logic",
    "term": "Равенство ==",
    "exampleCode": "int x = 4;\nConsole.WriteLine(x == 4);",
    "exampleResult": "True",
    "exampleNote": "Оператор == сравнивает значения и даёт True, если они равны.",
    "kind": "Заполните пропуск",
    "challengeCode": "int x = 6;\nConsole.WriteLine(x /* ??? */ 6);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: True?",
    "options": [
      "==",
      "!=",
      ">",
      "<"
    ],
    "correctIndex": 0,
    "explanation": "Нужен оператор равенства ==. При одинаковых значениях !=, > и < дают False.",
    "solutionResult": "True"
  },
  {
    "id": "more6-nested-if",
    "codeDeckId": "lab6-reading-branches",
    "deckId": "branching-menu",
    "term": "if",
    "exampleCode": "int score = 80;\nint debts = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        Console.WriteLine(\"Допуск\");\n    }\n    else\n    {\n        Console.WriteLine(\"Долги\");\n    }\n}",
    "exampleResult": "Допуск",
    "exampleNote": "Внутреннее ветвление выполняется только после прохода внешней проверки. Скобки показывают, к какому if относится else.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 80;\nint debts = 2;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        Console.WriteLine(\"Допуск\");\n    }\n    else\n    {\n        Console.WriteLine(\"Долги\");\n    }\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "Долги",
      "Допуск",
      "Ничего",
      "Допуск\nДолги"
    ],
    "correctIndex": 0,
    "explanation": "Внешняя проверка проходит, поэтому выполняется внутренняя. Здесь задолженности есть, и выбирается внутренний else.",
    "challengeResult": "Долги"
  },
  {
    "id": "more6-independent-update",
    "codeDeckId": "lab6-reading-branches",
    "deckId": "branching-menu",
    "term": "Независимые if",
    "exampleCode": "int x = 3;\nif (x < 5)\n{\n    x = 8;\n}\nif (x > 5)\n{\n    Console.WriteLine(\"Больше\");\n}",
    "exampleResult": "Больше",
    "exampleNote": "Вторая независимая проверка видит уже изменённое значение x, а не первоначальное.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 2;\nif (x < 4)\n{\n    x = 7;\n}\nif (x > 4)\n{\n    Console.WriteLine(x);\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "7",
      "2",
      "Ничего",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Вторая независимая проверка видит уже изменённое значение x, а не первоначальное.",
    "challengeResult": "7"
  },
  {
    "id": "more6-else-if-update",
    "codeDeckId": "lab6-reading-branches",
    "deckId": "branching-menu",
    "term": "else if",
    "exampleCode": "int x = 3;\nif (x < 5)\n{\n    x = 8;\n}\nelse if (x > 5)\n{\n    Console.WriteLine(\"Больше\");\n}\nConsole.WriteLine(x);",
    "exampleResult": "8",
    "exampleNote": "После выполненной первой ветки оставшиеся else if этой цепочки пропускаются. Команда после цепочки выполняется.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 2;\nif (x < 4)\n{\n    x = 7;\n}\nelse if (x > 4)\n{\n    Console.WriteLine(\"Больше\");\n}\nConsole.WriteLine(x);",
    "prompt": "Что появится в консоли?",
    "options": [
      "7",
      "Больше\n7",
      "2",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "Если первая ветка if выполнена, следующие else if этой цепочки пропускаются даже после изменения x.",
    "challengeResult": "7"
  },
  {
    "id": "more6-after-branch",
    "codeDeckId": "lab6-reading-branches",
    "deckId": "branching-menu",
    "term": "else",
    "exampleCode": "int x = 2;\nif (x > 5)\n{\n    Console.WriteLine(\"A\");\n}\nelse\n{\n    Console.WriteLine(\"B\");\n}\nConsole.WriteLine(\"C\");",
    "exampleResult": "B\nC",
    "exampleNote": "После выбранной ветки программа продолжает выполнять команды за пределами if / else.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 8;\nif (x > 5)\n{\n    Console.WriteLine(\"A\");\n}\nelse\n{\n    Console.WriteLine(\"B\");\n}\nConsole.WriteLine(\"C\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "A\nC",
      "A",
      "B\nC",
      "A\nB\nC"
    ],
    "correctIndex": 0,
    "explanation": "После выбранной ветки программа продолжает выполнять команды за пределами if / else.",
    "challengeResult": "A\nC"
  },
  {
    "id": "more6-ternary-number",
    "codeDeckId": "lab6-reading-branches",
    "deckId": "branching-menu",
    "term": "Условный оператор ?:",
    "exampleCode": "int a = 4;\nint b = 7;\nint max = a > b ? a : b;\nConsole.WriteLine(max);",
    "exampleResult": "7",
    "exampleNote": "Условный оператор выбирает одно из двух чисел: при true — до двоеточия, при false — после.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = 9;\nint b = 6;\nint max = a > b ? a : b;\nConsole.WriteLine(max);",
    "prompt": "Что появится в консоли?",
    "options": [
      "9",
      "6",
      "True",
      "15"
    ],
    "correctIndex": 0,
    "explanation": "При истинном a > b выбирается значение до двоеточия, то есть a. Иначе выбирается b.",
    "challengeResult": "9"
  },
  {
    "id": "more6-switch-continues",
    "codeDeckId": "lab6-reading-branches",
    "deckId": "branching-menu",
    "term": "break",
    "exampleCode": "int action = 2;\nswitch (action)\n{\n    case 1: Console.Write(\"A\"); break;\n    case 2: Console.Write(\"B\"); break;\n    default: Console.Write(\"X\"); break;\n}\nConsole.Write(\"Z\");",
    "exampleResult": "BZ",
    "exampleNote": "break завершает switch, но не всю программу. После выбранной ветки выводится Z.",
    "kind": "Что выведет код?",
    "challengeCode": "int action = 1;\nswitch (action)\n{\n    case 1: Console.Write(\"A\"); break;\n    case 2: Console.Write(\"B\"); break;\n    default: Console.Write(\"X\"); break;\n}\nConsole.Write(\"Z\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "AZ",
      "A",
      "ABZ",
      "XZ"
    ],
    "correctIndex": 0,
    "explanation": "break завершает switch, но не всю программу. После выбранной ветки выводится Z.",
    "challengeResult": "AZ"
  },
  {
    "id": "more6-switch-no-match",
    "codeDeckId": "lab6-reading-branches",
    "deckId": "branching-menu",
    "term": "switch",
    "exampleCode": "int action = 3;\nswitch (action)\n{\n    case 1: Console.Write(\"A\"); break;\n    case 2: Console.Write(\"B\"); break;\n}\nConsole.Write(\"Z\");",
    "exampleResult": "Z",
    "exampleNote": "Если совпадения нет и default отсутствует, switch не выполняет ни одной ветки. Код после него всё равно выполняется.",
    "kind": "Что выведет код?",
    "challengeCode": "int action = 4;\nswitch (action)\n{\n    case 1: Console.Write(\"A\"); break;\n    case 2: Console.Write(\"B\"); break;\n}\nConsole.Write(\"Z\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "Z",
      "AZ",
      "BZ",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Если совпадения нет и default отсутствует, switch не выполняет ни одной ветки. Код после него всё равно выполняется.",
    "challengeResult": "Z"
  },
  {
    "id": "more6-condition-direction",
    "codeDeckId": "lab6-reading-branches",
    "deckId": "branching-menu",
    "term": "if",
    "exampleCode": "int age = 20;\nif (age >= 18)\n{\n    Console.WriteLine(\"Взрослый\");\n}\nelse\n{\n    Console.WriteLine(\"Ребёнок\");\n}",
    "exampleResult": "Взрослый",
    "exampleNote": "При включённой границе используется >=. В примере совершеннолетний возраст выбирает первую ветку.",
    "kind": "Заполните пропуск",
    "challengeCode": "int age = 18;\nif (/* ??? */)\n{\n    Console.WriteLine(\"Взрослый\");\n}\nelse\n{\n    Console.WriteLine(\"Ребёнок\");\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: Взрослый?",
    "options": [
      "age >= 18",
      "age > 18",
      "age < 18",
      "age != 18"
    ],
    "correctIndex": 0,
    "explanation": "Граница 18 должна включаться: при age = 18 условие >= истинно, остальные предложенные условия ложны.",
    "solutionResult": "Взрослый"
  },
  {
    "id": "more6-negative-zero",
    "codeDeckId": "lab6-reading-branches",
    "deckId": "branching-menu",
    "term": "else if",
    "exampleCode": "int x = 0;\nif (x > 0)\n{\n    Console.WriteLine(\"Плюс\");\n}\nelse if (x < 0)\n{\n    Console.WriteLine(\"Минус\");\n}\nelse\n{\n    Console.WriteLine(\"Ноль\");\n}",
    "exampleResult": "Ноль",
    "exampleNote": "Последовательные проверки отличают положительное число, отрицательное и ноль. Выполняется одна ветка.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = -2;\nif (x > 0)\n{\n    Console.WriteLine(\"Плюс\");\n}\nelse if (x < 0)\n{\n    Console.WriteLine(\"Минус\");\n}\nelse\n{\n    Console.WriteLine(\"Ноль\");\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "Минус",
      "Ноль",
      "Плюс",
      "Плюс\nМинус"
    ],
    "correctIndex": 0,
    "explanation": "Отрицательное число не проходит первую проверку, но проходит вторую. Выполняется ровно одна ветка цепочки.",
    "challengeResult": "Минус"
  },
  {
    "id": "more6-ternary-branches",
    "codeDeckId": "lab6-reading-branches",
    "deckId": "branching-menu",
    "term": "Условный оператор ?:",
    "exampleCode": "bool ready = true;\nConsole.WriteLine(ready ? \"Да\" : \"Нет\");",
    "exampleResult": "Да",
    "exampleNote": "При истинном условии ?: выбирает первую строку, а при ложном — вторую.",
    "kind": "Заполните пропуск",
    "challengeCode": "bool ready = false;\nConsole.WriteLine(ready ? \"Да\" : /* ??? */);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: Нет?",
    "options": [
      "\"Нет\"",
      "\"Да\"",
      "\"ready\"",
      "\"False\""
    ],
    "correctIndex": 0,
    "explanation": "При false выбирается выражение после двоеточия. Чтобы получить Нет, там нужна строка \"Нет\".",
    "solutionResult": "Нет"
  },
  {
    "id": "more7-count-step",
    "codeDeckId": "lab7-tracing-and-accumulation",
    "deckId": "loops-basics",
    "term": "Итерация",
    "exampleCode": "int count = 0;\nfor (int i = 1; i < 8; i += 2)\n{\n    count++;\n}\nConsole.WriteLine(count);",
    "exampleResult": "4",
    "exampleNote": "Число итераций считают по подходящим значениям i; шаг больше единицы пропускает часть чисел.",
    "kind": "Сколько итераций?",
    "challengeCode": "int count = 0;\nfor (int i = 2; i < 10; i += 3)\n{\n    count++;\n}\nConsole.WriteLine(count);",
    "prompt": "Сколько раз выполнится тело цикла (и какое число выведется)?",
    "options": [
      "3",
      "2",
      "4",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "Счётчик i принимает значения 2, 5, 8. Это три итерации; значение i не равно числу повторений.",
    "challengeResult": "3"
  },
  {
    "id": "more7-product",
    "codeDeckId": "lab7-tracing-and-accumulation",
    "deckId": "loops-control",
    "term": "Накопитель",
    "exampleCode": "int product = 1;\nfor (int i = 1; i <= 3; i++)\n{\n    product *= i;\n}\nConsole.WriteLine(product);",
    "exampleResult": "6",
    "exampleNote": "Для накопления произведения начальное значение берут равным 1, затем умножают его на каждый очередной множитель.",
    "kind": "Что выведет код?",
    "challengeCode": "int product = 1;\nfor (int i = 1; i <= 4; i++)\n{\n    product *= i;\n}\nConsole.WriteLine(product);",
    "prompt": "Что появится в консоли?",
    "options": [
      "24",
      "10",
      "0",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Накопление произведения начинается с 1, затем умножаются 1, 2, 3, 4. При старте с 0 всё произведение осталось бы нулём.",
    "challengeResult": "24"
  },
  {
    "id": "more7-reset-accumulator",
    "codeDeckId": "lab7-tracing-and-accumulation",
    "deckId": "loops-control",
    "term": "Накопитель",
    "exampleCode": "int sum = 0;\nfor (int i = 1; i <= 3; i++)\n{\n    sum = 0;\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "exampleResult": "3",
    "exampleNote": "В теле sum каждый раз сбрасывается в 0. Поэтому сохраняется только последнее i, а не сумма всех значений.",
    "kind": "Что выведет код?",
    "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 4; i++)\n{\n    sum = 0;\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4",
      "10",
      "0",
      "6"
    ],
    "correctIndex": 0,
    "explanation": "В теле sum каждый раз сбрасывается в 0. Поэтому сохраняется только последнее i, а не сумма всех значений.",
    "challengeResult": "4"
  },
  {
    "id": "more7-continue-sum",
    "codeDeckId": "lab7-tracing-and-accumulation",
    "deckId": "loops-control",
    "term": "continue",
    "exampleCode": "int sum = 0;\nfor (int i = 1; i <= 4; i++)\n{\n    if (i == 2)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "exampleResult": "8",
    "exampleNote": "continue пропускает остаток текущей итерации, включая прибавление её i к сумме.",
    "kind": "Что выведет код?",
    "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 5; i++)\n{\n    if (i == 3)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "prompt": "Что появится в консоли?",
    "options": [
      "12",
      "15",
      "3",
      "10"
    ],
    "correctIndex": 0,
    "explanation": "continue пропускает прибавление 3. В сумму входят 1, 2, 4 и 5, всего 12.",
    "challengeResult": "12"
  },
  {
    "id": "more7-break-sum",
    "codeDeckId": "lab7-tracing-and-accumulation",
    "deckId": "loops-control",
    "term": "break в цикле",
    "exampleCode": "int sum = 0;\nfor (int i = 1; i <= 5; i++)\n{\n    if (i == 3)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "exampleResult": "3",
    "exampleNote": "break завершает цикл до прибавления текущего i. В сумму входят только предыдущие значения.",
    "kind": "Что выведет код?",
    "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 6; i++)\n{\n    if (i == 4)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "prompt": "Что появится в консоли?",
    "options": [
      "6",
      "10",
      "21",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "При i = 4 цикл прекращается до прибавления. В сумму входят только 1, 2, 3.",
    "challengeResult": "6"
  },
  {
    "id": "more7-while-step",
    "codeDeckId": "lab7-tracing-and-accumulation",
    "deckId": "loops-basics",
    "term": "while",
    "exampleCode": "int x = 1;\nint count = 0;\nwhile (x < 10)\n{\n    x *= 2;\n    count++;\n}\nConsole.WriteLine(count);",
    "exampleResult": "4",
    "exampleNote": "Удвоение постепенно приближает x к границе. Счётчик count хранит число выполненных итераций, а не значение x.",
    "kind": "Сколько итераций?",
    "challengeCode": "int x = 2;\nint count = 0;\nwhile (x < 20)\n{\n    x *= 2;\n    count++;\n}\nConsole.WriteLine(count);",
    "prompt": "Сколько итераций выполнится до завершения цикла?",
    "options": [
      "4",
      "3",
      "5",
      "32"
    ],
    "correctIndex": 0,
    "explanation": "Значение x после итераций: 4, 8, 16, 32. Четвёртая итерация делает следующую проверку ложной.",
    "challengeResult": "4"
  },
  {
    "id": "more7-nested-break",
    "codeDeckId": "lab7-tracing-and-accumulation",
    "deckId": "loops-control",
    "term": "Вложенный цикл",
    "exampleCode": "int count = 0;\nfor (int row = 0; row < 2; row++)\n{\n    for (int col = 0; col < 4; col++)\n    {\n        if (col == 2)\n        {\n            break;\n        }\n        count++;\n    }\n}\nConsole.WriteLine(count);",
    "exampleResult": "4",
    "exampleNote": "break завершает только внутренний цикл. Внешний цикл продолжает работу и заново запускает внутренний.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nfor (int row = 0; row < 3; row++)\n{\n    for (int col = 0; col < 5; col++)\n    {\n        if (col == 2)\n        {\n            break;\n        }\n        count++;\n    }\n}\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "6",
      "2",
      "3",
      "15"
    ],
    "correctIndex": 0,
    "explanation": "break завершает ближайший внутренний цикл. В каждой из трёх внешних итераций count увеличивается дважды.",
    "challengeResult": "6"
  },
  {
    "id": "more7-product-start",
    "codeDeckId": "lab7-tracing-and-accumulation",
    "deckId": "loops-control",
    "term": "Накопитель",
    "exampleCode": "int product = 1;\nfor (int i = 1; i <= 3; i++)\n{\n    product *= i;\n}\nConsole.WriteLine(product);",
    "exampleResult": "6",
    "exampleNote": "Нейтральное начальное значение для произведения равно 1: оно не меняет результат последующих умножений.",
    "kind": "Заполните пропуск",
    "challengeCode": "int product = /* ??? */;\nfor (int i = 1; i <= 4; i++)\n{\n    product *= i;\n}\nConsole.WriteLine(product);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 24?",
    "options": [
      "1",
      "0",
      "2",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Для произведения начальное значение 1 не меняет результат. Ноль обнулит произведение; 2 и 4 увеличат его в соответствующее число раз.",
    "solutionResult": "24"
  },
  {
    "id": "more7-boundary-fill",
    "codeDeckId": "lab7-tracing-and-accumulation",
    "deckId": "loops-control",
    "term": "Ошибка на единицу",
    "exampleCode": "int count = 0;\nfor (int i = 0; i < 3; i++)\n{\n    count++;\n}\nConsole.WriteLine(count);",
    "exampleResult": "3",
    "exampleNote": "При старте с нуля строгая верхняя граница исключается, поэтому количество итераций равно этой границе.",
    "kind": "Заполните пропуск",
    "challengeCode": "int count = 0;\nfor (int i = 0; i /* ??? */ 4; i++)\n{\n    count++;\n}\nConsole.WriteLine(count);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 4?",
    "options": [
      "<",
      "<=",
      ">",
      ">="
    ],
    "correctIndex": 0,
    "explanation": "Для четырёх итераций от нуля нужны значения 0, 1, 2, 3. Строгое < исключает 4; <= даст пять итераций.",
    "solutionResult": "4"
  },
  {
    "id": "more7-do-count",
    "codeDeckId": "lab7-tracing-and-accumulation",
    "deckId": "loops-basics",
    "term": "do…while",
    "exampleCode": "int count = 0;\nint x = 3;\ndo\n{\n    count++;\n    x--;\n} while (x > 0);\nConsole.WriteLine(count);",
    "exampleResult": "3",
    "exampleNote": "do…while проверяет условие после тела. Счётчик итераций увеличивается при каждом входе в тело.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nint x = 0;\ndo\n{\n    count++;\n    x--;\n} while (x > 0);\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "1",
      "0",
      "-1",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "do…while сначала выполняет тело, потом проверяет условие. Даже при начальном x = 0 происходит одна итерация.",
    "challengeResult": "1"
  },
  {
    "id": "lab8-array",
    "codeDeckId": "lab8-array-basics",
    "deckId": "arrays-basics",
    "term": "Массив",
    "exampleCode": "int[] scores = { 10, 20, 30 };\nConsole.WriteLine(scores[0]);",
    "exampleResult": "10",
    "exampleNote": "Массив объединяет числа; первый элемент имеет индекс 0.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 15, 25, 35 };\nConsole.WriteLine(scores[1]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "25",
      "15",
      "35",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Индекс 1 обозначает второй элемент массива, то есть 25.",
    "challengeResult": "25",
    "variants": [
      {
        "challengeCode": "int[] scores = { 11, 22, 33 };\nConsole.WriteLine(scores[2]);",
        "options": [
          "33",
          "11",
          "22",
          "2"
        ],
        "correctIndex": 0,
        "challengeResult": "33",
        "explanation": "Индекс 2 выбирает третий элемент, то есть 33."
      },
      {
        "challengeCode": "int[] scores = { 8, 16, 24 };\nConsole.WriteLine(scores[2]);",
        "options": [
          "24",
          "8",
          "16",
          "2"
        ],
        "correctIndex": 0,
        "challengeResult": "24",
        "explanation": "Индекс 2 выбирает третий элемент, то есть 24."
      },
      {
        "challengeCode": "int[] values = { 4, 7, 10 };\nint saved = values[2];\nvalues[2] = 22;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[2]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "10\n22",
        "options": [
          "10\n22",
          "22\n10",
          "11\n23",
          "1022"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 5, 8, 11 };\nint saved = values[0];\nvalues[0] = 23;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "5\n23",
        "options": [
          "5\n23",
          "23\n5",
          "6\n24",
          "523"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 6, 9, 12 };\nint saved = values[1];\nvalues[1] = 24;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "9\n24",
        "options": [
          "9\n24",
          "24\n9",
          "10\n25",
          "924"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 7, 10, 13 };\nint saved = values[2];\nvalues[2] = 25;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[2]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "13\n25",
        "options": [
          "13\n25",
          "25\n13",
          "14\n26",
          "1325"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 8, 11, 14 };\nint saved = values[0];\nvalues[0] = 26;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "8\n26",
        "options": [
          "8\n26",
          "26\n8",
          "9\n27",
          "826"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 9, 12, 15 };\nint saved = values[1];\nvalues[1] = 27;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "12\n27",
        "options": [
          "12\n27",
          "27\n12",
          "13\n28",
          "1227"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab8-one-dimensional",
    "codeDeckId": "lab8-array-basics",
    "deckId": "arrays-basics",
    "term": "Одномерный массив",
    "exampleCode": "int[] values = { 4, 8, 12 };\nint index = 2;\nConsole.WriteLine(values[index]);",
    "exampleResult": "12",
    "exampleNote": "Для выбора элемента одномерного массива достаточно одного индекса.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 3, 6, 9, 12 };\nint index = 2;\nConsole.WriteLine(values[index]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "9",
      "2",
      "6",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "В index хранится 2, поэтому выбирается третий элемент — 9.",
    "challengeResult": "9",
    "variants": [
      {
        "challengeCode": "int[] values = { 2, 5, 8 };\nint index = 1;\nConsole.WriteLine(values[index]);",
        "options": [
          "5",
          "2",
          "8",
          "1"
        ],
        "correctIndex": 0,
        "challengeResult": "5",
        "explanation": "В index хранится 1; это второй элемент со значением 5."
      },
      {
        "challengeCode": "int[] values = { 4, 7, 10 };\nint index = 1;\nConsole.WriteLine(values[index]);",
        "options": [
          "7",
          "4",
          "10",
          "1"
        ],
        "correctIndex": 0,
        "challengeResult": "7",
        "explanation": "В index хранится 1; это второй элемент со значением 7."
      },
      {
        "challengeCode": "int[] values = { 3, 5, 8 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[2];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "8 11",
        "options": [
          "8 11",
          "9 12",
          "11 8",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 4, 6, 9 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[1];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "13 13",
        "options": [
          "13 13",
          "14 14",
          "31 31",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 5, 7, 10 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[2];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "10 15",
        "options": [
          "10 15",
          "11 16",
          "51 01",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 6, 8, 11 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[1];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "17 17",
        "options": [
          "17 17",
          "18 18",
          "71 71",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 7, 9, 12 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[2];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "12 19",
        "options": [
          "12 19",
          "13 20",
          "91 21",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 8, 10, 13 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[1];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "21 21",
        "options": [
          "21 21",
          "22 22",
          "12 12",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab8-element",
    "codeDeckId": "lab8-array-basics",
    "deckId": "arrays-basics",
    "term": "Элемент массива",
    "exampleCode": "int[] values = { 4, 7 };\nConsole.WriteLine(values[0] + values[1]);",
    "exampleResult": "11",
    "exampleNote": "Каждая ячейка int[] содержит число; с выбранными значениями можно выполнять арифметику.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 5, 9 };\nConsole.WriteLine(values[1] - values[0]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4",
      "-4",
      "14",
      "9"
    ],
    "correctIndex": 0,
    "explanation": "Из второго элемента 9 вычитается первый 5; получается 4.",
    "challengeResult": "4"
  },
  {
    "id": "lab8-array-type",
    "codeDeckId": "lab8-array-basics",
    "deckId": "arrays-basics",
    "term": "int[]",
    "exampleCode": "int[] values = { 2, 4 };\nConsole.WriteLine(values[1]);",
    "exampleResult": "4",
    "exampleNote": "int[] обозначает массив целых чисел.",
    "kind": "Заполните пропуск",
    "challengeCode": "/* ??? */ values = { 3, 8 };\nConsole.WriteLine(values[0]);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 3?",
    "options": [
      "int[]",
      "int",
      "bool",
      "string"
    ],
    "correctIndex": 0,
    "explanation": "Нужен тип int[]: он позволяет инициализировать массив целых чисел списком значений.",
    "solutionResult": "3"
  },
  {
    "id": "lab8-create",
    "codeDeckId": "lab8-array-basics",
    "deckId": "arrays-basics",
    "term": "Создание массива",
    "exampleCode": "int[] values = new int[3];\nConsole.WriteLine(values.Length);",
    "exampleResult": "3",
    "exampleNote": "Число после new int задаёт количество ячеек.",
    "kind": "Что выведет код?",
    "challengeCode": "int size = 4;\nint[] values = new int[size];\nConsole.WriteLine(values.Length);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4",
      "0",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "При создании используется size = 4, значит длина массива равна 4.",
    "challengeResult": "4"
  },
  {
    "id": "lab8-initializer",
    "codeDeckId": "lab8-array-basics",
    "deckId": "arrays-basics",
    "term": "Инициализатор массива",
    "exampleCode": "int[] values = { 5, 10, 15 };\nConsole.WriteLine(values.Length);",
    "exampleResult": "3",
    "exampleNote": "Длина массива со списком значений равна количеству значений, а не их сумме.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 2, 4, 6, 8 };\nConsole.WriteLine(values.Length);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4",
      "8",
      "20",
      "3"
    ],
    "correctIndex": 0,
    "explanation": "В инициализаторе четыре числа, поэтому Length равно 4.",
    "challengeResult": "4"
  },
  {
    "id": "lab8-index",
    "codeDeckId": "lab8-array-basics",
    "deckId": "arrays-basics",
    "term": "Индекс массива",
    "exampleCode": "int[] values = { 5, 10, 15, 20 };\nvalues[1] = 99;\nConsole.WriteLine(values[1]);",
    "exampleResult": "99",
    "exampleNote": "Индекс 1 выбирает второй элемент; присваивание заменяет его значение.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 3, 8, 2 };\nvalues[0] = 7;\nConsole.WriteLine(values[1]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "8",
      "7",
      "3",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "Изменён элемент с индексом 0. Элемент с индексом 1 остался равен 8.",
    "challengeResult": "8"
  },
  {
    "id": "lab8-length",
    "codeDeckId": "lab8-array-basics",
    "deckId": "arrays-basics",
    "term": "Длина массива Length",
    "exampleCode": "int[] values = { 10, 20, 30 };\nvalues[0] = 100;\nConsole.WriteLine(values.Length);",
    "exampleResult": "3",
    "exampleNote": "Изменение значения элемента не меняет число элементов.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 1, 2, 3, 4 };\nvalues[2] = 90;\nConsole.WriteLine(values.Length);",
    "prompt": "Что появится в консоли?",
    "options": [
      "4",
      "90",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "Length остаётся 4: изменился балл, а не количество ячеек.",
    "challengeResult": "4"
  },
  {
    "id": "lab8-last-index",
    "codeDeckId": "lab8-array-basics",
    "deckId": "arrays-basics",
    "term": "Последний индекс",
    "exampleCode": "int[] values = { 5, 10, 15 };\nConsole.WriteLine(values[values.Length - 1]);",
    "exampleResult": "15",
    "exampleNote": "Последний допустимый индекс непустого массива равен Length - 1.",
    "kind": "Заполните пропуск",
    "challengeCode": "int[] values = { 4, 8, 12 };\nConsole.WriteLine(values[/* ??? */]);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 12?",
    "options": [
      "values.Length - 1",
      "0",
      "1",
      "values.Length"
    ],
    "correctIndex": 0,
    "explanation": "Length равно 3, поэтому последний индекс — 2. Индекс 3 уже выходит за границы.",
    "solutionResult": "12"
  },
  {
    "id": "lab8-default",
    "codeDeckId": "lab8-array-basics",
    "deckId": "arrays-basics",
    "term": "Значение по умолчанию",
    "exampleCode": "int[] values = new int[4];\nConsole.WriteLine(values[2]);",
    "exampleResult": "0",
    "exampleNote": "В новом int[] все элементы изначально нулевые.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = new int[3];\nvalues[0] = 8;\nConsole.WriteLine(values[1]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "8",
      "1",
      "3"
    ],
    "correctIndex": 0,
    "explanation": "Задан только первый элемент. Второй сохранил начальное значение 0.",
    "challengeResult": "0",
    "variants": [
      {
        "challengeCode": "int[] values = new int[4];\nvalues[0] = 12;\nConsole.WriteLine(values[3]);",
        "options": [
          "0",
          "12",
          "4",
          "3"
        ],
        "correctIndex": 0,
        "challengeResult": "0",
        "explanation": "Изменён только первый элемент; последний сохранил начальный ноль."
      },
      {
        "challengeCode": "int[] values = new int[5];\nvalues[0] = 15;\nConsole.WriteLine(values[4]);",
        "options": [
          "0",
          "15",
          "5",
          "4"
        ],
        "correctIndex": 0,
        "challengeResult": "0",
        "explanation": "Изменён только первый элемент; последний сохранил начальный ноль."
      },
      {
        "challengeCode": "int[] values = new int[5];\nvalues[0] = 6;\nvalues[1] += 4;\nConsole.WriteLine(values[2]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[3];\nvalues[0] = 7;\nvalues[2] += 5;\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[4];\nvalues[0] = 8;\nvalues[1] += 6;\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[5];\nvalues[0] = 9;\nvalues[2] += 7;\nConsole.WriteLine(values[2]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[3];\nvalues[0] = 10;\nvalues[1] += 8;\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[4];\nvalues[0] = 11;\nvalues[2] += 9;\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab8-for",
    "codeDeckId": "lab8-traversal-update",
    "deckId": "arrays-traversal",
    "term": "Перебор массива",
    "exampleCode": "int[] values = { 3, 6 };\nfor (int i = 0; i < values.Length; i++)\n{\n    Console.WriteLine(values[i]);\n}",
    "exampleResult": "3\n6",
    "exampleNote": "for перебирает индексы, по которым можно получить элементы.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 4, 7 };\nfor (int i = 0; i < values.Length; i++)\n{\n    Console.WriteLine(values[i]);\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "4\n7",
      "0\n1",
      "1\n2",
      "7\n4"
    ],
    "correctIndex": 0,
    "explanation": "В i последовательно 0 и 1; выводятся значения массива, а не индексы.",
    "challengeResult": "4\n7"
  },
  {
    "id": "lab8-foreach",
    "codeDeckId": "lab8-traversal-update",
    "deckId": "arrays-traversal",
    "term": "foreach",
    "exampleCode": "int[] values = { 4, 9 };\nforeach (int value in values)\n{\n    Console.WriteLine(value);\n}",
    "exampleResult": "4\n9",
    "exampleNote": "foreach получает очередное значение массива в порядке хранения.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 8, 3, 8 };\nforeach (int value in values)\n{\n    Console.Write(value);\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "838",
      "012",
      "123",
      "388"
    ],
    "correctIndex": 0,
    "explanation": "foreach выдаёт значения 8, 3, 8. Повторяющиеся элементы не пропускаются.",
    "challengeResult": "838",
    "variants": [
      {
        "challengeCode": "int[] values = { 1, 4, 1 };\nforeach (int value in values)\n{\n    Console.Write(value);\n}",
        "options": [
          "141",
          "114",
          "012",
          "123"
        ],
        "correctIndex": 0,
        "challengeResult": "141",
        "explanation": "foreach выводит значения в порядке хранения: 1, 4, 1."
      },
      {
        "challengeCode": "int[] values = { 6, 2, 6 };\nforeach (int value in values)\n{\n    Console.Write(value);\n}",
        "options": [
          "626",
          "662",
          "012",
          "123"
        ],
        "correctIndex": 0,
        "challengeResult": "626",
        "explanation": "foreach выводит значения в порядке хранения: 6, 2, 6."
      },
      {
        "challengeCode": "int[] values = { 2, 5, 2 };\nforeach (int value in values)\n{\n    Console.WriteLine(value + 1);\n}",
        "explanation": "foreach получает значения в порядке хранения. Арифметика при выводе не изменяет массив.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "3\n6\n3",
        "options": [
          "3\n6\n3",
          "4\n7\n4",
          "363",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 3, 6, 3 };\nforeach (int value in values)\n{\n    Console.WriteLine(value - 1);\n}",
        "explanation": "foreach получает значения в порядке хранения. Арифметика при выводе не изменяет массив.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "2\n5\n2",
        "options": [
          "2\n5\n2",
          "3\n6\n3",
          "252",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 4, 7, 4 };\nforeach (int value in values)\n{\n    Console.WriteLine(value + 1);\n}",
        "explanation": "foreach получает значения в порядке хранения. Арифметика при выводе не изменяет массив.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "5\n8\n5",
        "options": [
          "5\n8\n5",
          "6\n9\n6",
          "585",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 5, 8, 5 };\nforeach (int value in values)\n{\n    Console.WriteLine(value - 1);\n}",
        "explanation": "foreach получает значения в порядке хранения. Арифметика при выводе не изменяет массив.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "4\n7\n4",
        "options": [
          "4\n7\n4",
          "5\n8\n5",
          "474",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 6, 9, 6 };\nforeach (int value in values)\n{\n    Console.WriteLine(value + 1);\n}",
        "explanation": "foreach получает значения в порядке хранения. Арифметика при выводе не изменяет массив.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "7\n10\n7",
        "options": [
          "7\n10\n7",
          "8\n11\n8",
          "7107",
          "7\n01\n7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 7, 10, 7 };\nforeach (int value in values)\n{\n    Console.WriteLine(value - 1);\n}",
        "explanation": "foreach получает значения в порядке хранения. Арифметика при выводе не изменяет массив.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "6\n9\n6",
        "options": [
          "6\n9\n6",
          "7\n10\n7",
          "696",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab8-iteration-value",
    "codeDeckId": "lab8-traversal-update",
    "deckId": "arrays-traversal",
    "term": "Переменная перебора",
    "exampleCode": "int[] values = { 5, 10 };\nforeach (int value in values)\n{\n    Console.WriteLine(value + 1);\n}",
    "exampleResult": "6\n11",
    "exampleNote": "value — значение текущего элемента. Вычисление value + 1 само по себе массив не меняет.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 2, 5 };\nforeach (int value in values)\n{\n    Console.Write(value + 1);\n}\nConsole.WriteLine();\nConsole.WriteLine(values[0]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "36\n2",
      "36\n3",
      "25\n2",
      "01\n2"
    ],
    "correctIndex": 0,
    "explanation": "Цикл выводит 3 и 6. Присваивания ячейкам нет, поэтому первый элемент остаётся 2.",
    "challengeResult": "36\n2"
  },
  {
    "id": "lab8-replace",
    "codeDeckId": "lab8-traversal-update",
    "deckId": "arrays-traversal",
    "term": "Изменение элемента",
    "exampleCode": "int[] scores = { 59, 60, 95 };\nscores[0] = 100;\nConsole.WriteLine(scores[0]);",
    "exampleResult": "100",
    "exampleNote": "Изменение выбранной ячейки сохраняется в том же массиве.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 59, 60, 95 };\nint old = scores[1];\nscores[1] = 75;\nConsole.WriteLine($\"{old} {scores[1]}\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "60 75",
      "75 75",
      "60 60",
      "59 75"
    ],
    "correctIndex": 0,
    "explanation": "В old скопировано прежнее значение 60. После замены выбранный элемент равен 75.",
    "challengeResult": "60 75"
  },
  {
    "id": "lab8-fill-for",
    "codeDeckId": "lab8-traversal-update",
    "deckId": "arrays-traversal",
    "term": "Заполнение массива",
    "exampleCode": "int[] values = new int[3];\nfor (int i = 0; i < values.Length; i++)\n{\n    values[i] = i + 1;\n}\nConsole.WriteLine(values[2]);",
    "exampleResult": "3",
    "exampleNote": "Цикл записывает значение в каждую ячейку; выражение i + 1 начинает значения с 1.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = new int[4];\nfor (int i = 0; i < values.Length; i++)\n{\n    values[i] = (i + 1) * 10;\n}\nConsole.WriteLine(values[2]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "30",
      "20",
      "40",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "При i = 2 записывается (2 + 1) * 10 = 30.",
    "challengeResult": "30"
  },
  {
    "id": "lab8-number-index",
    "codeDeckId": "lab8-traversal-update",
    "deckId": "arrays-traversal",
    "term": "Номер и индекс",
    "exampleCode": "int[] scores = { 20, 40, 60 };\nint number = 2;\nConsole.WriteLine(scores[number - 1]);",
    "exampleResult": "40",
    "exampleNote": "Номер студента начинается с 1, индекс — с 0.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 15, 35, 55, 75 };\nint number = 3;\nConsole.WriteLine(scores[number - 1]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "55",
      "35",
      "75",
      "3"
    ],
    "correctIndex": 0,
    "explanation": "Номер 3 соответствует индексу 2; в нём хранится 55.",
    "challengeResult": "55",
    "variants": [
      {
        "challengeCode": "int[] scores = { 10, 30, 50 };\nint number = 2;\nConsole.WriteLine(scores[number - 1]);",
        "options": [
          "30",
          "2",
          "0",
          "99"
        ],
        "correctIndex": 0,
        "challengeResult": "30",
        "explanation": "Номер 2 превращается в индекс 1. Выбирается значение 30."
      },
      {
        "challengeCode": "int[] scores = { 12, 24, 36 };\nint number = 3;\nConsole.WriteLine(scores[number - 1]);",
        "options": [
          "36",
          "3",
          "0",
          "99"
        ],
        "correctIndex": 0,
        "challengeResult": "36",
        "explanation": "Номер 3 превращается в индекс 2. Выбирается значение 36."
      },
      {
        "challengeCode": "int[] scores = { 11, 22, 33 };\nint number = 1;\nConsole.WriteLine(scores[number - 1]);",
        "explanation": "Нумерация начинается с 1, индексы — с 0. Для выбора ячейки нужно вычесть 1 из номера.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] scores = { 12, 23, 34 };\nint number = 2;\nConsole.WriteLine(scores[number - 1]);",
        "explanation": "Нумерация начинается с 1, индексы — с 0. Для выбора ячейки нужно вычесть 1 из номера.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "23",
        "options": [
          "23",
          "24",
          "22",
          "25"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] scores = { 13, 24, 35 };\nint number = 3;\nConsole.WriteLine(scores[number - 1]);",
        "explanation": "Нумерация начинается с 1, индексы — с 0. Для выбора ячейки нужно вычесть 1 из номера.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "35",
        "options": [
          "35",
          "36",
          "34",
          "37"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] scores = { 14, 25, 36 };\nint number = 1;\nConsole.WriteLine(scores[number - 1]);",
        "explanation": "Нумерация начинается с 1, индексы — с 0. Для выбора ячейки нужно вычесть 1 из номера.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "14",
        "options": [
          "14",
          "15",
          "13",
          "16"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] scores = { 15, 26, 37 };\nint number = 2;\nConsole.WriteLine(scores[number - 1]);",
        "explanation": "Нумерация начинается с 1, индексы — с 0. Для выбора ячейки нужно вычесть 1 из номера.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "26",
        "options": [
          "26",
          "27",
          "25",
          "28"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] scores = { 16, 27, 38 };\nint number = 3;\nConsole.WriteLine(scores[number - 1]);",
        "explanation": "Нумерация начинается с 1, индексы — с 0. Для выбора ячейки нужно вычесть 1 из номера.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "38",
        "options": [
          "38",
          "39",
          "37",
          "40"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab8-validate-number",
    "codeDeckId": "lab8-traversal-update",
    "deckId": "arrays-traversal",
    "term": "Проверка номера",
    "exampleCode": "int[] scores = { 10, 20 };\nint number = 2;\nif (number >= 1 && number <= scores.Length)\n{\n    Console.WriteLine(scores[number - 1]);\n}",
    "exampleResult": "20",
    "exampleNote": "Сначала проверяют допустимость номера, затем обращаются по индексу number - 1.",
    "kind": "Заполните пропуск",
    "challengeCode": "int[] scores = { 10, 20, 30 };\nint number = 3;\nif (/* ??? */)\n{\n    Console.WriteLine(scores[number - 1]);\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 30?",
    "options": [
      "number >= 1 && number <= scores.Length",
      "number < scores.Length",
      "number > scores.Length",
      "number == 0"
    ],
    "correctIndex": 0,
    "explanation": "Последний номер допустим: нужен включённый верхний предел <= Length.",
    "solutionResult": "30"
  },
  {
    "id": "lab8-loop-boundary",
    "codeDeckId": "lab8-traversal-update",
    "deckId": "arrays-traversal",
    "term": "Граница обхода",
    "exampleCode": "int[] values = { 4, 7 };\nfor (int i = 0; i < values.Length; i++)\n{\n    Console.Write(values[i]);\n}",
    "exampleResult": "47",
    "exampleNote": "Условие i < Length включает все допустимые индексы и исключает Length.",
    "kind": "Заполните пропуск",
    "challengeCode": "int[] values = { 2, 6 };\nfor (int i = 0; i /* ??? */ values.Length; i++)\n{\n    Console.Write(values[i]);\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 26?",
    "options": [
      "<",
      "<=",
      ">",
      ">="
    ],
    "correctIndex": 0,
    "explanation": "Нужен строгий знак <. <= попытался бы обратиться к несуществующему элементу с индексом Length.",
    "solutionResult": "26"
  },
  {
    "id": "lab8-fixed-size",
    "codeDeckId": "lab8-traversal-update",
    "deckId": "arrays-traversal",
    "term": "Фиксированная длина",
    "exampleCode": "int[] values = new int[2];\nvalues[1] = 80;\nConsole.WriteLine(values.Length);",
    "exampleResult": "2",
    "exampleNote": "Замена значения не создаёт дополнительные ячейки.",
    "kind": "Что выведет код?",
    "challengeCode": "int size = 3;\nint[] values = new int[size];\nsize = 5;\nConsole.WriteLine(values.Length);",
    "prompt": "Что появится в консоли?",
    "options": [
      "3",
      "5",
      "0",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "Массив уже создан длиной 3. Изменение переменной size не меняет созданный массив.",
    "challengeResult": "3"
  },
  {
    "id": "lab8-preserve-array",
    "codeDeckId": "lab8-traversal-update",
    "deckId": "arrays-traversal",
    "term": "Сохранение данных массива",
    "exampleCode": "int[] scores = { 10, 20 };\nscores[0] = 75;\nConsole.WriteLine(scores[0]);",
    "exampleResult": "75",
    "exampleNote": "Пока не создан другой массив, изменение остаётся в той же ячейке.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 10, 20 };\nscores[0] = 75;\nscores = new int[2];\nConsole.WriteLine(scores[0]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "75",
      "10",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "Последнее new создаёт другой массив с нулями. Поэтому при повторе меню массив нельзя создавать заново.",
    "challengeResult": "0"
  },
  {
    "id": "lab8-sum",
    "codeDeckId": "lab8-search-summary",
    "deckId": "arrays-analysis",
    "term": "Сумма элементов",
    "exampleCode": "int[] values = { 4, -2, 7, 0 };\nint sum = 0;\nforeach (int value in values)\n{\n    sum += value;\n}\nConsole.WriteLine(sum);",
    "exampleResult": "9",
    "exampleNote": "Сумму начинают с 0 и прибавляют каждый элемент, включая отрицательные и нулевые.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 5, -3, 8 };\nint sum = 0;\nforeach (int value in values)\n{\n    sum += value;\n}\nConsole.WriteLine(sum);",
    "prompt": "Что появится в консоли?",
    "options": [
      "10",
      "16",
      "8",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "5 + (-3) + 8 = 10. Начальное значение суммы равно 0.",
    "challengeResult": "10",
    "variants": [
      {
        "challengeCode": "int[] values = { 2, -1, 6 };\nint sum = 0;\nforeach (int value in values)\n{\n    sum += value;\n}\nConsole.WriteLine(sum);",
        "options": [
          "7",
          "0",
          "6",
          "8"
        ],
        "correctIndex": 0,
        "challengeResult": "7",
        "explanation": "Все элементы прибавляются к нулевому накопителю; сумма равна 7."
      },
      {
        "challengeCode": "int[] values = { 5, 0, 4 };\nint sum = 0;\nforeach (int value in values)\n{\n    sum += value;\n}\nConsole.WriteLine(sum);",
        "options": [
          "9",
          "0",
          "8",
          "10"
        ],
        "correctIndex": 0,
        "challengeResult": "9",
        "explanation": "Все элементы прибавляются к нулевому накопителю; сумма равна 9."
      },
      {
        "challengeCode": "int[] values = { -2, 4, -3, 7 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] >= 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { -1, 5, -3, 8 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] < 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "-4",
        "options": [
          "-4",
          "-3",
          "-5",
          "-2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 0, 6, -3, 9 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] >= 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 1, 7, -3, 10 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] < 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "-3",
        "options": [
          "-3",
          "-2",
          "-4",
          "-1"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 2, 8, -3, 11 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] >= 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 3, 9, -3, 12 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] < 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "-3",
        "options": [
          "-3",
          "-2",
          "-4",
          "-1"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab8-min",
    "codeDeckId": "lab8-search-summary",
    "deckId": "arrays-analysis",
    "term": "Минимум массива",
    "exampleCode": "int[] values = { 9, 4, 7 };\nint min = values[0];\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] < min)\n    {\n        min = values[i];\n    }\n}\nConsole.WriteLine(min);",
    "exampleResult": "4",
    "exampleNote": "Минимум непустого массива начинают с первого элемента, затем заменяют меньшими найденными значениями.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 8, 3, 6, 4 };\nint min = values[0];\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] < min)\n    {\n        min = values[i];\n    }\n}\nConsole.WriteLine(min);",
    "prompt": "Что появится в консоли?",
    "options": [
      "3",
      "0",
      "4",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "Начальный минимум 8 заменяется на 3; меньших значений дальше нет.",
    "challengeResult": "3"
  },
  {
    "id": "lab8-max-negative",
    "codeDeckId": "lab8-search-summary",
    "deckId": "arrays-analysis",
    "term": "Максимум массива",
    "exampleCode": "int[] values = { -8, -3, -11 };\nint max = values[0];\nforeach (int value in values)\n{\n    if (value > max)\n    {\n        max = value;\n    }\n}\nConsole.WriteLine(max);",
    "exampleResult": "-3",
    "exampleNote": "При отрицательных числах максимум тоже отрицателен; старт с 0 дал бы неправильный ответ.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { -9, -4, -7 };\nint max = values[0];\nforeach (int value in values)\n{\n    if (value > max)\n    {\n        max = value;\n    }\n}\nConsole.WriteLine(max);",
    "prompt": "Что появится в консоли?",
    "options": [
      "-4",
      "0",
      "-9",
      "-7"
    ],
    "correctIndex": 0,
    "explanation": "Из -9, -4, -7 наибольшее число -4. Начальное значение взято из массива, а не равно 0.",
    "challengeResult": "-4",
    "variants": [
      {
        "challengeCode": "int[] values = { -6, -2, -9 };\nint max = values[0];\nforeach (int value in values)\n{\n    if (value > max)\n    {\n        max = value;\n    }\n}\nConsole.WriteLine(max);",
        "options": [
          "-2",
          "0",
          "-99",
          "-3"
        ],
        "correctIndex": 0,
        "challengeResult": "-2",
        "explanation": "Наибольшее из данных отрицательных чисел — -2. Максимум начинают с элемента массива."
      },
      {
        "challengeCode": "int[] values = { -12, -5, -8 };\nint max = values[0];\nforeach (int value in values)\n{\n    if (value > max)\n    {\n        max = value;\n    }\n}\nConsole.WriteLine(max);",
        "options": [
          "-5",
          "0",
          "-99",
          "-6"
        ],
        "correctIndex": 0,
        "challengeResult": "-5",
        "explanation": "Наибольшее из данных отрицательных чисел — -5. Максимум начинают с элемента массива."
      },
      {
        "challengeCode": "int[] values = { 4, 10, 5, 10 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 5, 11, 6, 11 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] >= values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 6, 12, 7, 12 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 7, 13, 8, 13 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] >= values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 8, 14, 9, 14 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 9, 15, 10, 15 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] >= values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab8-count",
    "codeDeckId": "lab8-search-summary",
    "deckId": "arrays-analysis",
    "term": "Подсчёт по условию",
    "exampleCode": "int[] scores = { 59, 60, 0, 100, 45 };\nint count = 0;\nforeach (int score in scores)\n{\n    if (score < 60)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
    "exampleResult": "3",
    "exampleNote": "Порог 60 включён в успешные результаты. Считаются только значения строго ниже 60.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 60, 59, 95, 0 };\nint count = 0;\nforeach (int score in scores)\n{\n    if (score < 60)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Ниже 60 только 59 и 0. Сам балл 60 не попадает в счётчик.",
    "challengeResult": "2",
    "variants": [
      {
        "challengeCode": "int[] scores = { 60, 60, 59 };\nint count = 0;\nforeach (int score in scores)\n{\n    if (score < 60)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "options": [
          "1",
          "0",
          "2",
          "5"
        ],
        "correctIndex": 0,
        "challengeResult": "1",
        "explanation": "Считаются только значения строго ниже 60; их 1. Значение 60 не учитывается."
      },
      {
        "challengeCode": "int[] scores = { 0, 58, 60, 45 };\nint count = 0;\nforeach (int score in scores)\n{\n    if (score < 60)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "options": [
          "3",
          "0",
          "4",
          "5"
        ],
        "correctIndex": 0,
        "challengeResult": "3",
        "explanation": "Считаются только значения строго ниже 60; их 3. Значение 60 не учитывается."
      },
      {
        "challengeCode": "int[] values = { 0, 4, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 1, 5, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    count = 0;\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 0, 6, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 1, 7, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    count = 0;\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 0, 8, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 1, 9, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    count = 0;\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab8-search-numbers",
    "codeDeckId": "lab8-search-summary",
    "deckId": "arrays-analysis",
    "term": "Поиск по условию",
    "exampleCode": "int[] scores = { 59, 60, 45 };\nfor (int i = 0; i < scores.Length; i++)\n{\n    if (scores[i] < 60)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
    "exampleResult": "1\n3",
    "exampleNote": "Для вывода номера используют индекс + 1, а не само значение балла.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 70, 40, 60, 50 };\nfor (int i = 0; i < scores.Length; i++)\n{\n    if (scores[i] < 60)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "2\n4",
      "1\n3",
      "40\n50",
      "2\n3\n4"
    ],
    "correctIndex": 0,
    "explanation": "Условие выполняется для индексов 1 и 3. Их номера — 2 и 4.",
    "challengeResult": "2\n4"
  },
  {
    "id": "lab8-all-matches",
    "codeDeckId": "lab8-search-summary",
    "deckId": "arrays-analysis",
    "term": "Все совпадения",
    "exampleCode": "int[] values = { 7, 3, 7, 9, 7 };\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 7)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
    "exampleResult": "1\n3\n5",
    "exampleNote": "Поиск всех совпадений продолжают до конца массива, без break после первого.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 5, 2, 5, 5 };\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 5)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "1\n3\n4",
      "1",
      "0\n2\n3",
      "5\n5\n5"
    ],
    "correctIndex": 0,
    "explanation": "Совпадения расположены на позициях 1, 3 и 4. Цикл выводит все номера.",
    "challengeResult": "1\n3\n4"
  },
  {
    "id": "lab8-two-passes",
    "codeDeckId": "lab8-search-summary",
    "deckId": "arrays-analysis",
    "term": "Два прохода",
    "exampleCode": "int[] scores = { 59, 60, 95, 95 };\nint max = scores[0];\nforeach (int score in scores)\n{\n    if (score > max)\n    {\n        max = score;\n    }\n}\nfor (int i = 0; i < scores.Length; i++)\n{\n    if (scores[i] == max)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
    "exampleResult": "3\n4",
    "exampleNote": "Первый проход определяет максимум, второй выводит все номера с этим результатом.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 80, 90, 90 };\nint max = scores[0];\nforeach (int score in scores)\n{\n    if (score > max)\n    {\n        max = score;\n    }\n}\nfor (int i = 0; i < scores.Length; i++)\n{\n    if (scores[i] == max)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "2\n3",
      "2",
      "90",
      "1\n2"
    ],
    "correctIndex": 0,
    "explanation": "Максимум равен 90. Во втором проходе подходят оба студента с номерами 2 и 3.",
    "challengeResult": "2\n3",
    "variants": [
      {
        "challengeCode": "int[] scores = { 60, 60, 60 };\nint max = scores[0];\nforeach (int score in scores)\n{\n    if (score > max)\n    {\n        max = score;\n    }\n}\nfor (int i = 0; i < scores.Length; i++)\n{\n    if (scores[i] == max)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
        "options": [
          "1\n2\n3",
          "1",
          "60",
          "0\n1\n2"
        ],
        "correctIndex": 0,
        "challengeResult": "1\n2\n3",
        "explanation": "Все три балла равны максимуму 60. Второй проход выводит всех студентов с номерами 1, 2, 3."
      },
      {
        "challengeCode": "int[] scores = { 0 };\nint max = scores[0];\nforeach (int score in scores)\n{\n    if (score > max)\n    {\n        max = score;\n    }\n}\nfor (int i = 0; i < scores.Length; i++)\n{\n    if (scores[i] == max)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
        "options": [
          "1",
          "0",
          "Ничего",
          "Ошибка выхода за границы"
        ],
        "correctIndex": 0,
        "challengeResult": "1",
        "explanation": "В массиве один элемент. Он одновременно минимум и максимум; его номер 1, хотя индекс равен 0."
      },
      {
        "challengeCode": "int[] values = { 8, 2, 8, 1 };\nint max = values[0];\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > max)\n    {\n        max = values[i];\n    }\n}\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == max)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
        "explanation": "Первый проход определяет максимум. Во втором проходе выводятся все совпадения; различайте индекс i и номер i + 1.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "1\n3",
        "options": [
          "1\n3",
          "3\n1",
          "2\n4",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 9, 3, 9, 2 };\nint max = values[0];\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > max)\n    {\n        max = values[i];\n    }\n}\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == max)\n    {\n        Console.WriteLine(i);\n    }\n}",
        "explanation": "Первый проход определяет максимум. Во втором проходе выводятся все совпадения; различайте индекс i и номер i + 1.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "0\n2",
        "options": [
          "0\n2",
          "2\n0",
          "1\n3",
          "02"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 10, 4, 10, 3 };\nint max = values[0];\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > max)\n    {\n        max = values[i];\n    }\n}\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == max)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
        "explanation": "Первый проход определяет максимум. Во втором проходе выводятся все совпадения; различайте индекс i и номер i + 1.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "1\n3",
        "options": [
          "1\n3",
          "3\n1",
          "2\n4",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 11, 5, 11, 4 };\nint max = values[0];\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > max)\n    {\n        max = values[i];\n    }\n}\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == max)\n    {\n        Console.WriteLine(i);\n    }\n}",
        "explanation": "Первый проход определяет максимум. Во втором проходе выводятся все совпадения; различайте индекс i и номер i + 1.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "0\n2",
        "options": [
          "0\n2",
          "2\n0",
          "1\n3",
          "02"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 12, 6, 12, 5 };\nint max = values[0];\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > max)\n    {\n        max = values[i];\n    }\n}\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == max)\n    {\n        Console.WriteLine(i + 1);\n    }\n}",
        "explanation": "Первый проход определяет максимум. Во втором проходе выводятся все совпадения; различайте индекс i и номер i + 1.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "1\n3",
        "options": [
          "1\n3",
          "3\n1",
          "2\n4",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 13, 7, 13, 6 };\nint max = values[0];\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > max)\n    {\n        max = values[i];\n    }\n}\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == max)\n    {\n        Console.WriteLine(i);\n    }\n}",
        "explanation": "Первый проход определяет максимум. Во втором проходе выводятся все совпадения; различайте индекс i и номер i + 1.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "0\n2",
        "options": [
          "0\n2",
          "2\n0",
          "1\n3",
          "02"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab8-recalculate",
    "codeDeckId": "lab8-search-summary",
    "deckId": "arrays-analysis",
    "term": "Пересчёт результатов",
    "exampleCode": "int[] scores = { 10, 20 };\nint sum = 0;\nforeach (int score in scores)\n{\n    sum += score;\n}\nscores[0] = 50;\nConsole.WriteLine(sum);",
    "exampleResult": "30",
    "exampleNote": "Переменная sum хранит результат предыдущего расчёта. Изменение массива само её не пересчитывает.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 20, 30 };\nint sum = 0;\nforeach (int score in scores)\n{\n    sum += score;\n}\nscores[1] = 80;\nConsole.WriteLine(sum);",
    "prompt": "Что появится в консоли?",
    "options": [
      "50",
      "100",
      "80",
      "20"
    ],
    "correctIndex": 0,
    "explanation": "sum уже вычислена как 20 + 30 = 50. После изменения балла нужен новый расчёт.",
    "challengeResult": "50"
  },
  {
    "id": "lab8-no-match",
    "codeDeckId": "lab8-search-summary",
    "deckId": "arrays-analysis",
    "term": "Все совпадения",
    "exampleCode": "int[] values = { 2, 4 };\nbool found = false;\nforeach (int value in values)\n{\n    if (value == 7)\n    {\n        found = true;\n    }\n}\nif (!found)\n{\n    Console.WriteLine(\"Не найдено\");\n}",
    "exampleResult": "Не найдено",
    "exampleNote": "Флаг found помогает сообщить об отсутствии совпадений после полного обхода.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 3, 6, 9 };\nbool found = false;\nforeach (int value in values)\n{\n    if (value == 7)\n    {\n        found = true;\n    }\n}\nif (!found)\n{\n    Console.WriteLine(\"Не найдено\");\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "Не найдено",
      "7",
      "True",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "В массиве нет 7; found остаётся false, поэтому !found истинно.",
    "challengeResult": "Не найдено"
  },
  {
    "id": "lab8-max-start",
    "codeDeckId": "lab8-search-summary",
    "deckId": "arrays-analysis",
    "term": "Максимум массива",
    "exampleCode": "int[] values = { -5, -2 };\nint max = values[0];\nforeach (int value in values)\n{\n    if (value > max)\n    {\n        max = value;\n    }\n}\nConsole.WriteLine(max);",
    "exampleResult": "-2",
    "exampleNote": "Начальное значение максимума берут из непустого массива, чтобы учитывать отрицательные числа.",
    "kind": "Заполните пропуск",
    "challengeCode": "int[] values = { -8, -3, -11 };\nint max = /* ??? */;\nforeach (int value in values)\n{\n    if (value > max)\n    {\n        max = value;\n    }\n}\nConsole.WriteLine(max);",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: -3?",
    "options": [
      "values[0]",
      "0",
      "1",
      "values.Length"
    ],
    "correctIndex": 0,
    "explanation": "Первый элемент — корректное начальное значение. Остальные варианты не меньше всех отрицательных элементов и дадут неправильный максимум.",
    "solutionResult": "-3"
  },
  {
    "id": "lab8-tryparse",
    "codeDeckId": "lab8-input-journal",
    "deckId": "arrays-analysis",
    "term": "int.TryParse",
    "exampleCode": "bool ok = int.TryParse(\"75\", out int score);\nConsole.WriteLine(ok);\nConsole.WriteLine(score);",
    "exampleResult": "True\n75",
    "exampleNote": "TryParse возвращает bool и отдельно записывает полученное число в out-переменную.",
    "kind": "Что выведет код?",
    "challengeCode": "bool ok = int.TryParse(\"60\", out int score);\nConsole.WriteLine(ok);\nConsole.WriteLine(score);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True\n60",
      "60\nTrue",
      "False\n0",
      "True\n0"
    ],
    "correctIndex": 0,
    "explanation": "Строка корректна: ok равно true, score получает число 60.",
    "challengeResult": "True\n60",
    "variants": [
      {
        "challengeCode": "bool ok = int.TryParse(\"42\", out int score);\nConsole.WriteLine(ok);\nConsole.WriteLine(score);",
        "options": [
          "True\n42",
          "False\n42",
          "True\n0",
          "False\n0"
        ],
        "correctIndex": 0,
        "challengeResult": "True\n42",
        "explanation": "Строка корректна; результат True, а в score записано 42."
      },
      {
        "challengeCode": "bool ok = int.TryParse(\"95\", out int score);\nConsole.WriteLine(ok);\nConsole.WriteLine(score);",
        "options": [
          "True\n95",
          "False\n95",
          "True\n0",
          "False\n0"
        ],
        "correctIndex": 0,
        "challengeResult": "True\n95",
        "explanation": "Строка корректна; результат True, а в score записано 95."
      },
      {
        "challengeCode": "bool ok = int.TryParse(\"13\", out int value);\nConsole.WriteLine(ok);\nConsole.WriteLine(value);",
        "explanation": "При успешном TryParse out получает число; при неудаче — ноль. Возвращаемый bool сообщает об успехе.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "True\n13",
        "options": [
          "True\n13",
          "13\nTrue",
          "True\n14",
          "True13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ok = int.TryParse(\"текст1\", out int value);\nConsole.WriteLine(ok);\nConsole.WriteLine(value);",
        "explanation": "При успешном TryParse out получает число; при неудаче — ноль. Возвращаемый bool сообщает об успехе.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "False\n0",
        "options": [
          "False\n0",
          "0\nFalse",
          "False\n1",
          "False0"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ok = int.TryParse(\"15\", out int value);\nConsole.WriteLine(ok);\nConsole.WriteLine(value);",
        "explanation": "При успешном TryParse out получает число; при неудаче — ноль. Возвращаемый bool сообщает об успехе.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "True\n15",
        "options": [
          "True\n15",
          "15\nTrue",
          "True\n16",
          "True15"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ok = int.TryParse(\"текст3\", out int value);\nConsole.WriteLine(ok);\nConsole.WriteLine(value);",
        "explanation": "При успешном TryParse out получает число; при неудаче — ноль. Возвращаемый bool сообщает об успехе.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "False\n0",
        "options": [
          "False\n0",
          "0\nFalse",
          "False\n1",
          "False0"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ok = int.TryParse(\"17\", out int value);\nConsole.WriteLine(ok);\nConsole.WriteLine(value);",
        "explanation": "При успешном TryParse out получает число; при неудаче — ноль. Возвращаемый bool сообщает об успехе.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "True\n17",
        "options": [
          "True\n17",
          "17\nTrue",
          "True\n18",
          "True17"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ok = int.TryParse(\"текст5\", out int value);\nConsole.WriteLine(ok);\nConsole.WriteLine(value);",
        "explanation": "При успешном TryParse out получает число; при неудаче — ноль. Возвращаемый bool сообщает об успехе.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "False\n0",
        "options": [
          "False\n0",
          "0\nFalse",
          "False\n1",
          "False0"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab8-out",
    "codeDeckId": "lab8-input-journal",
    "deckId": "arrays-analysis",
    "term": "Выходной параметр out",
    "exampleCode": "int number;\nbool ok = int.TryParse(\"42\", out number);\nConsole.WriteLine(number);",
    "exampleResult": "42",
    "exampleNote": "Через out TryParse записывает число в указанную переменную.",
    "kind": "Что выведет код?",
    "challengeCode": "int score;\nbool ok = int.TryParse(\"85\", out score);\nif (ok)\n{\n    Console.WriteLine(score);\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "85",
      "True",
      "0",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "Преобразование успешно, out записывает 85 в score, а if выполняет вывод.",
    "challengeResult": "85"
  },
  {
    "id": "lab8-invalid-text",
    "codeDeckId": "lab8-input-journal",
    "deckId": "arrays-analysis",
    "term": "int.TryParse",
    "exampleCode": "if (int.TryParse(\"кот\", out int score))\n{\n    Console.WriteLine(score);\n}\nelse\n{\n    Console.WriteLine(\"Ошибка ввода\");\n}",
    "exampleResult": "Ошибка ввода",
    "exampleNote": "При неподходящем тексте TryParse возвращает false. Программа может повторить запрос без обработки исключений.",
    "kind": "Что выведет код?",
    "challengeCode": "if (int.TryParse(\"12кг\", out int score))\n{\n    Console.WriteLine(score);\n}\nelse\n{\n    Console.WriteLine(\"Ошибка ввода\");\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "Ошибка ввода",
      "12",
      "12кг",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "Вся строка 12кг не является целым числом. Выполняется ветка else.",
    "challengeResult": "Ошибка ввода"
  },
  {
    "id": "lab8-range-after-parse",
    "codeDeckId": "lab8-input-journal",
    "deckId": "arrays-analysis",
    "term": "int.TryParse",
    "exampleCode": "bool ok = int.TryParse(\"101\", out int score);\nConsole.WriteLine(ok);\nConsole.WriteLine(score >= 0 && score <= 100);",
    "exampleResult": "True\nFalse",
    "exampleNote": "Успешное преобразование не означает допустимый балл. Диапазон проверяется отдельно.",
    "kind": "Что выведет код?",
    "challengeCode": "bool ok = int.TryParse(\"-1\", out int score);\nConsole.WriteLine(ok);\nConsole.WriteLine(score >= 0 && score <= 100);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True\nFalse",
      "False\nFalse",
      "True\nTrue",
      "False\nTrue"
    ],
    "correctIndex": 0,
    "explanation": "-1 — корректное целое число, но балл выходит за диапазон 0–100.",
    "challengeResult": "True\nFalse"
  },
  {
    "id": "lab8-retry-input",
    "codeDeckId": "lab8-input-journal",
    "deckId": "arrays-analysis",
    "term": "int.TryParse",
    "exampleCode": "int score;\nwhile (!int.TryParse(Console.ReadLine(), out score) || score < 0 || score > 100)\n{\n    Console.WriteLine(\"Повторите\");\n}\nConsole.WriteLine(score);",
    "exampleResult": "Повторите\nПовторите\n75",
    "exampleNote": "Повторный ввод продолжается, пока преобразование не удалось или число вне допустимого диапазона.",
    "kind": "Что выведет код?",
    "challengeCode": "int score;\nwhile (!int.TryParse(Console.ReadLine(), out score) || score < 0 || score > 100)\n{\n    Console.WriteLine(\"Повторите\");\n}\nConsole.WriteLine(score);",
    "prompt": "Что появится в консоли?",
    "options": [
      "Повторите\nПовторите\n59",
      "59",
      "Повторите\n59",
      "101"
    ],
    "correctIndex": 0,
    "explanation": "Текст не проходит преобразование, 101 не проходит диапазон. Ввод 59 завершает цикл.",
    "challengeResult": "Повторите\nПовторите\n59",
    "exampleInput": "текст\n-5\n75",
    "challengeInput": "текст\n101\n59"
  },
  {
    "id": "lab8-invalid-number",
    "codeDeckId": "lab8-input-journal",
    "deckId": "arrays-traversal",
    "term": "Проверка номера",
    "exampleCode": "int[] scores = { 10, 20 };\nint number = 0;\nif (number >= 1 && number <= scores.Length)\n{\n    scores[number - 1] = 0;\n}\nelse\n{\n    Console.WriteLine(\"Неверный номер\");\n}",
    "exampleResult": "Неверный номер",
    "exampleNote": "Неверный номер проверяют до вычисления и использования индекса, поэтому массив не затрагивается.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 10, 20, 30 };\nint number = 4;\nif (number >= 1 && number <= scores.Length)\n{\n    scores[number - 1] = 0;\n}\nelse\n{\n    Console.WriteLine(\"Неверный номер\");\n}\nConsole.WriteLine(scores[2]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "Неверный номер\n30",
      "Неверный номер\n0",
      "0",
      "Ошибка выхода за границы"
    ],
    "correctIndex": 0,
    "explanation": "Номер 4 больше длины 3. Запись пропускается, последний балл остаётся 30.",
    "challengeResult": "Неверный номер\n30"
  },
  {
    "id": "lab8-valid-update",
    "codeDeckId": "lab8-input-journal",
    "deckId": "arrays-traversal",
    "term": "Изменение элемента",
    "exampleCode": "int[] scores = { 20, 40, 60 };\nint number = 1;\nif (number >= 1 && number <= scores.Length)\n{\n    scores[number - 1] = 0;\n}\nConsole.WriteLine(scores[0]);",
    "exampleResult": "0",
    "exampleNote": "Для допустимого номера используется индекс number - 1.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 20, 40, 60 };\nint number = 3;\nif (number >= 1 && number <= scores.Length)\n{\n    scores[number - 1] = 0;\n}\nConsole.WriteLine(scores[2]);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "60",
      "40",
      "3"
    ],
    "correctIndex": 0,
    "explanation": "Последний номер 3 допустим. Он соответствует индексу 2; в эту ячейку записывается 0.",
    "challengeResult": "0"
  },
  {
    "id": "lab8-recompute-after-update",
    "codeDeckId": "lab8-input-journal",
    "deckId": "arrays-analysis",
    "term": "Пересчёт результатов",
    "exampleCode": "int[] scores = { 10, 20 };\nscores[0] = 50;\nint sum = 0;\nforeach (int score in scores)\n{\n    sum += score;\n}\nConsole.WriteLine(sum);",
    "exampleResult": "70",
    "exampleNote": "После изменения обходят актуальные значения массива, начиная накопление заново.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 59, 60, 95, 95 };\nscores[0] = 100;\nint sum = 0;\nforeach (int score in scores)\n{\n    sum += score;\n}\nConsole.WriteLine(sum);",
    "prompt": "Что появится в консоли?",
    "options": [
      "350",
      "309",
      "100",
      "349"
    ],
    "correctIndex": 0,
    "explanation": "Новая сумма равна 100 + 60 + 95 + 95 = 350.",
    "challengeResult": "350"
  },
  {
    "id": "lab8-reset-count",
    "codeDeckId": "lab8-input-journal",
    "deckId": "arrays-analysis",
    "term": "Подсчёт по условию",
    "exampleCode": "int[] scores = { 50, 70 };\nfor (int pass = 0; pass < 2; pass++)\n{\n    int count = 0;\n    foreach (int score in scores)\n    {\n        if (score < 60)\n        {\n            count++;\n        }\n    }\n    Console.WriteLine(count);\n}",
    "exampleResult": "1\n1",
    "exampleNote": "При каждом повторном расчёте счётчик обнуляют. Иначе поиск накопит результат предыдущего запуска.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] scores = { 59, 60, 40 };\nfor (int pass = 0; pass < 2; pass++)\n{\n    int count = 0;\n    foreach (int score in scores)\n    {\n        if (score < 60)\n        {\n            count++;\n        }\n    }\n    Console.WriteLine(count);\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "2\n2",
      "2\n4",
      "4\n4",
      "3\n3"
    ],
    "correctIndex": 0,
    "explanation": "Счётчик создаётся с нулём внутри каждого прохода. При неизменных баллах оба расчёта дают 2.",
    "challengeResult": "2\n2"
  },
  {
    "id": "lab8-student-number",
    "codeDeckId": "lab8-input-journal",
    "deckId": "arrays-traversal",
    "term": "Номер и индекс",
    "exampleCode": "int[] scores = { 20, 40 };\nfor (int i = 0; i < scores.Length; i++)\n{\n    Console.WriteLine($\"{i + 1}: {scores[i]}\");\n}",
    "exampleResult": "1: 20\n2: 40",
    "exampleNote": "Для журнала номер студента равен индексу плюс один.",
    "kind": "Заполните пропуск",
    "challengeCode": "int[] scores = { 50, 70 };\nfor (int i = 0; i < scores.Length; i++)\n{\n    Console.WriteLine($\"{/* ??? */}: {scores[i]}\");\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 1: 50\n2: 70?",
    "options": [
      "i + 1",
      "i",
      "i - 1",
      "scores[i]"
    ],
    "correctIndex": 0,
    "explanation": "При индексах 0 и 1 выражение i + 1 выводит номера 1 и 2; сами баллы используются отдельно.",
    "solutionResult": "1: 50\n2: 70"
  },
  {
    "id": "lab9-method",
    "codeDeckId": "lab9-calls-parameters",
    "deckId": "methods-basics",
    "term": "Метод",
    "exampleCode": "Console.WriteLine(Square(3));\nint Square(int number)\n{\n    return number * number;\n}",
    "exampleResult": "9",
    "exampleNote": "Метод получает число и возвращает его квадрат.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Square(5));\nint Square(int number)\n{\n    return number * number;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "25",
      "5",
      "10",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "Square умножает аргумент 5 на себя и возвращает 25; Console.WriteLine печатает результат.",
    "challengeResult": "25",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(Square(6));\nint Square(int number)\n{\n    return number * number;\n}",
        "options": [
          "36",
          "6",
          "12",
          "7"
        ],
        "correctIndex": 0,
        "challengeResult": "36",
        "explanation": "Square(6) возвращает 6 * 6 = 36."
      },
      {
        "challengeCode": "Console.WriteLine(Square(7));\nint Square(int number)\n{\n    return number * number;\n}",
        "options": [
          "49",
          "7",
          "14",
          "8"
        ],
        "correctIndex": 0,
        "challengeResult": "49",
        "explanation": "Square(7) возвращает 7 * 7 = 49."
      },
      {
        "challengeCode": "Console.WriteLine(Add(4, Double(3)));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(Double(5), 3));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "13",
        "options": [
          "13",
          "14",
          "12",
          "15"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(6, Double(3)));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(Double(7), 3));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "17",
        "options": [
          "17",
          "18",
          "16",
          "19"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(8, Double(3)));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "14",
        "options": [
          "14",
          "15",
          "13",
          "16"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(Double(9), 3));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab9-local-function",
    "codeDeckId": "lab9-calls-parameters",
    "deckId": "methods-basics",
    "term": "Локальная функция",
    "exampleCode": "int answer = Square(2);\nConsole.WriteLine(answer);\nint Square(int number)\n{\n    return number * number;\n}",
    "exampleResult": "4",
    "exampleNote": "В Program.cs функцию можно объявить ниже вызова.",
    "kind": "Что выведет код?",
    "challengeCode": "int answer = Square(4);\nConsole.WriteLine(answer);\nint Square(int number)\n{\n    return number * number;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "16",
      "4",
      "8",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Размещение объявления ниже вызова допустимо для локальной функции. Результат Square(4) равен 16.",
    "challengeResult": "16"
  },
  {
    "id": "lab9-declaration-not-call",
    "codeDeckId": "lab9-calls-parameters",
    "deckId": "methods-basics",
    "term": "Объявление метода",
    "exampleCode": "void ShowMessage()\n{\n    Console.WriteLine(\"Привет\");\n}\nShowMessage();",
    "exampleResult": "Привет",
    "exampleNote": "Для выполнения тела нужен вызов. Само объявление действий не выполняет.",
    "kind": "Что выведет код?",
    "challengeCode": "void ShowMessage()\n{\n    Console.WriteLine(\"Привет\");\n}\nConsole.WriteLine(\"Конец\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "Конец",
      "Привет",
      "Привет\nКонец",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "ShowMessage объявлена, но не вызвана. Выполняется только вывод Конец.",
    "challengeResult": "Конец"
  },
  {
    "id": "lab9-call-twice",
    "codeDeckId": "lab9-calls-parameters",
    "deckId": "methods-basics",
    "term": "Вызов метода",
    "exampleCode": "Console.WriteLine(Square(2));\nConsole.WriteLine(Square(3));\nint Square(int number)\n{\n    return number * number;\n}",
    "exampleResult": "4\n9",
    "exampleNote": "Каждый вызов выполняет расчёт с собственным аргументом.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Square(3));\nConsole.WriteLine(Square(4));\nint Square(int number)\n{\n    return number * number;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "9\n16",
      "3\n4",
      "9\n9",
      "25"
    ],
    "correctIndex": 0,
    "explanation": "Два вызова возвращают квадраты 3 и 4 независимо друг от друга.",
    "challengeResult": "9\n16"
  },
  {
    "id": "lab9-argument-expression",
    "codeDeckId": "lab9-calls-parameters",
    "deckId": "methods-basics",
    "term": "Аргумент метода",
    "exampleCode": "Console.WriteLine(Square(1 + 2));\nint Square(int number)\n{\n    return number * number;\n}",
    "exampleResult": "9",
    "exampleNote": "Выражение аргумента вычисляется до передачи значения параметру.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Square(2 + 3));\nint Square(int number)\n{\n    return number * number;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "25",
      "13",
      "10",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "Сначала вычисляется 2 + 3 = 5. В Square передаётся 5, а не два отдельных числа.",
    "challengeResult": "25"
  },
  {
    "id": "lab9-parameter-value",
    "codeDeckId": "lab9-calls-parameters",
    "deckId": "methods-basics",
    "term": "Параметр метода",
    "exampleCode": "int value = 4;\nConsole.WriteLine(Double(value));\nint Double(int number)\n{\n    return number * 2;\n}",
    "exampleResult": "8",
    "exampleNote": "Параметр number получает текущее значение аргумента value.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 6;\nConsole.WriteLine(Double(value));\nint Double(int number)\n{\n    return number * 2;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "12",
      "6",
      "2",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Параметр number получает 6. Метод возвращает 6 * 2 = 12.",
    "challengeResult": "12"
  },
  {
    "id": "lab9-argument-order",
    "codeDeckId": "lab9-calls-parameters",
    "deckId": "methods-basics",
    "term": "Порядок аргументов",
    "exampleCode": "Console.WriteLine(Subtract(8, 3));\nint Subtract(int first, int second)\n{\n    return first - second;\n}",
    "exampleResult": "5",
    "exampleNote": "Первый аргумент попадает в first, второй — в second.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Subtract(3, 8));\nint Subtract(int first, int second)\n{\n    return first - second;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "-5",
      "5",
      "11",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "first получает 3, second — 8. Результат 3 - 8 равен -5.",
    "challengeResult": "-5",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(Subtract(10, 4));\nint Subtract(int first, int second)\n{\n    return first - second;\n}",
        "options": [
          "6",
          "-6",
          "14",
          "40"
        ],
        "correctIndex": 0,
        "challengeResult": "6",
        "explanation": "first получает 10, second — 4; результат 6."
      },
      {
        "challengeCode": "Console.WriteLine(Subtract(2, 9));\nint Subtract(int first, int second)\n{\n    return first - second;\n}",
        "options": [
          "-7",
          "7",
          "11",
          "18"
        ],
        "correctIndex": 0,
        "challengeResult": "-7",
        "explanation": "first получает 2, second — 9; результат -7."
      },
      {
        "challengeCode": "int a = 10;\nint b = 4;\nConsole.WriteLine(Difference(a, b));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 11;\nint b = 5;\nConsole.WriteLine(Difference(b, a));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "-6",
        "options": [
          "-6",
          "-5",
          "-7",
          "-4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 12;\nint b = 6;\nConsole.WriteLine(Difference(a, b));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 13;\nint b = 7;\nConsole.WriteLine(Difference(b, a));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "-6",
        "options": [
          "-6",
          "-5",
          "-7",
          "-4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 14;\nint b = 8;\nConsole.WriteLine(Difference(a, b));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 15;\nint b = 9;\nConsole.WriteLine(Difference(b, a));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "-6",
        "options": [
          "-6",
          "-5",
          "-7",
          "-4"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab9-no-parameters",
    "codeDeckId": "lab9-calls-parameters",
    "deckId": "methods-return-scope",
    "term": "Метод без параметров",
    "exampleCode": "ShowMessage();\nvoid ShowMessage()\n{\n    Console.WriteLine(\"Готово\");\n}",
    "exampleResult": "Готово",
    "exampleNote": "Отсутствие параметров не отменяет круглые скобки при вызове.",
    "kind": "Что выведет код?",
    "challengeCode": "ShowMessage();\nShowMessage();\nvoid ShowMessage()\n{\n    Console.WriteLine(\"Да\");\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "Да\nДа",
      "Да",
      "Ничего",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Метод без параметров вызывается дважды, поэтому сообщение выводится два раза.",
    "challengeResult": "Да\nДа"
  },
  {
    "id": "lab9-call-fill",
    "codeDeckId": "lab9-calls-parameters",
    "deckId": "methods-basics",
    "term": "Имя метода",
    "exampleCode": "Console.WriteLine(Double(3));\nint Double(int number)\n{\n    return number * 2;\n}",
    "exampleResult": "6",
    "exampleNote": "Для вызова используют объявленное имя метода и скобки с аргументом.",
    "kind": "Заполните пропуск",
    "challengeCode": "Console.WriteLine(/* ??? */);\nint Double(int number)\n{\n    return number * 2;\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 10?",
    "options": [
      "Double(5)",
      "Double(3)",
      "5",
      "Double(1)"
    ],
    "correctIndex": 0,
    "explanation": "Double(5) передаёт 5 в метод и получает 10. Остальные варианты дают другие числа.",
    "solutionResult": "10"
  },
  {
    "id": "lab9-return-type",
    "codeDeckId": "lab9-calls-parameters",
    "deckId": "methods-return-scope",
    "term": "Тип возвращаемого значения",
    "exampleCode": "Console.WriteLine(Square(3));\nint Square(int number)\n{\n    return number * number;\n}",
    "exampleResult": "9",
    "exampleNote": "Тип int перед именем задаёт целочисленный результат.",
    "kind": "Заполните пропуск",
    "challengeCode": "Console.WriteLine(Square(4));\n/* ??? */ Square(int number)\n{\n    return number * number;\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 16?",
    "options": [
      "int",
      "void",
      "bool",
      "string"
    ],
    "correctIndex": 0,
    "explanation": "Выражение number * number имеет тип int. Метод должен возвращать int; void не возвращает значения.",
    "solutionResult": "16"
  },
  {
    "id": "lab9-return-not-print",
    "codeDeckId": "lab9-return-scope",
    "deckId": "methods-return-scope",
    "term": "return",
    "exampleCode": "int result = Double(3);\nConsole.WriteLine(result);\nint Double(int number)\n{\n    return number * 2;\n}",
    "exampleResult": "6",
    "exampleNote": "return передаёт результат, но сам не печатает его.",
    "kind": "Что выведет код?",
    "challengeCode": "Double(4);\nConsole.WriteLine(\"Конец\");\nint Double(int number)\n{\n    return number * 2;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "Конец",
      "8",
      "8\nКонец",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "Результат Double(4) не сохранён и не выведен. Метод не содержит печати, поэтому видно только Конец.",
    "challengeResult": "Конец"
  },
  {
    "id": "lab9-save-result",
    "codeDeckId": "lab9-return-scope",
    "deckId": "methods-return-scope",
    "term": "Возвращаемое значение",
    "exampleCode": "int answer = Square(3);\nConsole.WriteLine(answer + 1);\nint Square(int number)\n{\n    return number * number;\n}",
    "exampleResult": "10",
    "exampleNote": "Результат вызова можно сохранить, затем использовать в выражении.",
    "kind": "Что выведет код?",
    "challengeCode": "int answer = Square(4);\nConsole.WriteLine(answer + 2);\nint Square(int number)\n{\n    return number * number;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "18",
      "16",
      "6",
      "36"
    ],
    "correctIndex": 0,
    "explanation": "Square(4) возвращает 16, затем основной код прибавляет 2.",
    "challengeResult": "18"
  },
  {
    "id": "lab9-void-output",
    "codeDeckId": "lab9-return-scope",
    "deckId": "methods-return-scope",
    "term": "void",
    "exampleCode": "ShowResult(7);\nvoid ShowResult(int value)\n{\n    Console.WriteLine($\"Результат: {value}\");\n}",
    "exampleResult": "Результат: 7",
    "exampleNote": "void-метод выполняет вывод как действие; числового результата вызова у него нет.",
    "kind": "Что выведет код?",
    "challengeCode": "ShowResult(9);\nConsole.WriteLine(\"Готово\");\nvoid ShowResult(int value)\n{\n    Console.WriteLine($\"Результат: {value}\");\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "Результат: 9\nГотово",
      "9",
      "Готово",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Сначала void-метод выводит переданное значение, затем основной код печатает Готово.",
    "challengeResult": "Результат: 9\nГотово"
  },
  {
    "id": "lab9-local-reset",
    "codeDeckId": "lab9-return-scope",
    "deckId": "methods-return-scope",
    "term": "Локальная переменная метода",
    "exampleCode": "Console.WriteLine(AddOne(3));\nConsole.WriteLine(AddOne(3));\nint AddOne(int number)\n{\n    int result = 0;\n    result = number + 1;\n    return result;\n}",
    "exampleResult": "4\n4",
    "exampleNote": "Локальная result заново получает начальное значение при каждом вызове.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(AddOne(5));\nConsole.WriteLine(AddOne(5));\nint AddOne(int number)\n{\n    int result = 0;\n    result = number + 1;\n    return result;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "6\n6",
      "6\n7",
      "5\n5",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "Вызовы независимы. В обоих случаях result вычисляется как 5 + 1.",
    "challengeResult": "6\n6"
  },
  {
    "id": "lab9-copy-int",
    "codeDeckId": "lab9-return-scope",
    "deckId": "methods-return-scope",
    "term": "Передача по значению",
    "exampleCode": "int value = 3;\nChange(value);\nConsole.WriteLine(value);\nvoid Change(int number)\n{\n    number = 20;\n}",
    "exampleResult": "3",
    "exampleNote": "Изменяется копия int в параметре, а не переменная вызывающего кода.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 5;\nChange(value);\nConsole.WriteLine(value);\nvoid Change(int number)\n{\n    number = 30;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "5",
      "30",
      "0",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "Присваивание number = 30 не меняет value, переданное обычным способом.",
    "challengeResult": "5",
    "variants": [
      {
        "challengeCode": "int value = 8;\nChange(value);\nConsole.WriteLine(value);\nvoid Change(int number)\n{\n    number = 40;\n}",
        "options": [
          "8",
          "40",
          "0",
          "9"
        ],
        "correctIndex": 0,
        "challengeResult": "8",
        "explanation": "Изменение копии параметра не меняет исходный value."
      },
      {
        "challengeCode": "int value = 12;\nChange(value);\nConsole.WriteLine(value);\nvoid Change(int number)\n{\n    number = 40;\n}",
        "options": [
          "12",
          "40",
          "0",
          "13"
        ],
        "correctIndex": 0,
        "challengeResult": "12",
        "explanation": "Изменение копии параметра не меняет исходный value."
      },
      {
        "challengeCode": "int value = 6;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number += 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "6 9",
        "options": [
          "6 9",
          "7 10",
          "9 6",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 7;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number *= 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "7 21",
        "options": [
          "7 21",
          "8 22",
          "12 7",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 8;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number += 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "8 11",
        "options": [
          "8 11",
          "9 12",
          "11 8",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 9;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number *= 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "9 27",
        "options": [
          "9 27",
          "10 28",
          "72 9",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 10;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number += 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "10 13",
        "options": [
          "10 13",
          "11 14",
          "31 01",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 11;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number *= 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "11 33",
        "options": [
          "11 33",
          "12 34",
          "33 11",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab9-copy-with-return",
    "codeDeckId": "lab9-return-scope",
    "deckId": "methods-return-scope",
    "term": "Передача по значению",
    "exampleCode": "int value = 3;\nint result = Increase(value);\nConsole.WriteLine($\"{value} {result}\");\nint Increase(int number)\n{\n    number += 2;\n    return number;\n}",
    "exampleResult": "3 5",
    "exampleNote": "Исходное значение и возвращённый результат — разные значения.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 4;\nint result = Increase(value);\nConsole.WriteLine($\"{value} {result}\");\nint Increase(int number)\n{\n    number += 3;\n    return number;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "4 7",
      "7 7",
      "4 4",
      "7 4"
    ],
    "correctIndex": 0,
    "explanation": "Копия параметра увеличивается до 7 и возвращается. Исходный value остаётся равен 4.",
    "challengeResult": "4 7"
  },
  {
    "id": "lab9-result-reassignment",
    "codeDeckId": "lab9-return-scope",
    "deckId": "methods-return-scope",
    "term": "Возвращаемое значение",
    "exampleCode": "int value = 3;\nvalue = Double(value);\nConsole.WriteLine(value);\nint Double(int number)\n{\n    return number * 2;\n}",
    "exampleResult": "6",
    "exampleNote": "Чтобы изменить переменную снаружи, основной код присваивает ей результат вызова.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 5;\nvalue = Double(value);\nConsole.WriteLine(value);\nint Double(int number)\n{\n    return number * 2;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "10",
      "5",
      "2",
      "25"
    ],
    "correctIndex": 0,
    "explanation": "Здесь основной код явно записывает результат 10 обратно в value.",
    "challengeResult": "10"
  },
  {
    "id": "lab9-return-fill",
    "codeDeckId": "lab9-return-scope",
    "deckId": "methods-return-scope",
    "term": "return",
    "exampleCode": "Console.WriteLine(Double(2));\nint Double(int number)\n{\n    return number * 2;\n}",
    "exampleResult": "4",
    "exampleNote": "Расчётный метод передаёт результат вызывающему коду через return.",
    "kind": "Заполните пропуск",
    "challengeCode": "Console.WriteLine(Triple(3));\nint Triple(int number)\n{\n    /* ??? */ number * 3;\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 9?",
    "options": [
      "return",
      "Console.WriteLine",
      "int",
      "void"
    ],
    "correctIndex": 0,
    "explanation": "Перед выражением требуется return. Вывод на экран не заменяет возврат значения из int-метода.",
    "solutionResult": "9"
  },
  {
    "id": "lab9-return-exit",
    "codeDeckId": "lab9-return-scope",
    "deckId": "methods-return-scope",
    "term": "return",
    "exampleCode": "Console.WriteLine(Max(3, 7));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
    "exampleResult": "7",
    "exampleNote": "После return текущий вызов завершается и не выполняет следующие команды тела.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Max(9, 4));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "9",
      "4",
      "13",
      "9\n4"
    ],
    "correctIndex": 0,
    "explanation": "Условие истинно, return first возвращает 9 и завершает вызов до второго return.",
    "challengeResult": "9"
  },
  {
    "id": "lab9-scope",
    "codeDeckId": "lab9-return-scope",
    "deckId": "methods-return-scope",
    "term": "Область видимости метода",
    "exampleCode": "int result = GetValue();\nConsole.WriteLine(result);\nint GetValue()\n{\n    int local = 7;\n    return local;\n}",
    "exampleResult": "7",
    "exampleNote": "Основной код получает локальную переменную через возвращаемое значение.",
    "kind": "Что выведет код?",
    "challengeCode": "int local = 3;\nint result = GetValue();\nConsole.WriteLine($\"{local} {result}\");\nint GetValue()\n{\n    int inner = 8;\n    return inner;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "3 8",
      "8 8",
      "3 3",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "inner существует внутри функции. Она возвращает 8, не изменяя внешнюю переменную local.",
    "challengeResult": "3 8"
  },
  {
    "id": "lab9-square-expression",
    "codeDeckId": "lab9-small-methods",
    "deckId": "methods-purchase",
    "term": "Расчётный метод",
    "exampleCode": "Console.WriteLine(Square(2) + Square(3));\nint Square(int number)\n{\n    return number * number;\n}",
    "exampleResult": "13",
    "exampleNote": "Результаты нескольких вызовов могут участвовать в одном выражении.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Square(3) + Square(4));\nint Square(int number)\n{\n    return number * number;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "25",
      "49",
      "7",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "Вызовы возвращают 9 и 16; затем складываются эти два результата.",
    "challengeResult": "25"
  },
  {
    "id": "lab9-max",
    "codeDeckId": "lab9-small-methods",
    "deckId": "methods-purchase",
    "term": "Расчётный метод",
    "exampleCode": "Console.WriteLine(Max(4, 9));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
    "exampleResult": "9",
    "exampleNote": "Max выбирает и возвращает большее из двух переданных чисел.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Max(-3, -8));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "-3",
      "0",
      "-8",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "Среди -3 и -8 больше -3. Метод возвращает одно из переданных значений.",
    "challengeResult": "-3",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(Max(-4, -9));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
        "options": [
          "-4",
          "0",
          "-13",
          "36"
        ],
        "correctIndex": 0,
        "challengeResult": "-4",
        "explanation": "Из -4 и -9 больше -4. Метод возвращает первый аргумент."
      },
      {
        "challengeCode": "Console.WriteLine(Max(5, 5));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
        "options": [
          "5",
          "0",
          "10",
          "25"
        ],
        "correctIndex": 0,
        "challengeResult": "5",
        "explanation": "Max возвращает большее значение; при равенстве результат равен обоим аргументам: 5."
      },
      {
        "challengeCode": "Console.WriteLine(Max(-6, -8));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
        "explanation": "Метод сравнивает аргументы и возвращает большее число, включая отрицательные значения.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "-6",
        "options": [
          "-6",
          "-5",
          "-7",
          "-4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Max(-5, -1));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
        "explanation": "Метод сравнивает аргументы и возвращает большее число, включая отрицательные значения.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "-1",
        "options": [
          "-1",
          "0",
          "-2",
          "1"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Max(-4, -6));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
        "explanation": "Метод сравнивает аргументы и возвращает большее число, включая отрицательные значения.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "-4",
        "options": [
          "-4",
          "-3",
          "-5",
          "-2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Max(-3, 1));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
        "explanation": "Метод сравнивает аргументы и возвращает большее число, включая отрицательные значения.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Max(-2, -4));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
        "explanation": "Метод сравнивает аргументы и возвращает большее число, включая отрицательные значения.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "-2",
        "options": [
          "-2",
          "-1",
          "-3",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Max(-1, 3));\nint Max(int first, int second)\n{\n    if (first > second)\n    {\n        return first;\n    }\n    return second;\n}",
        "explanation": "Метод сравнивает аргументы и возвращает большее число, включая отрицательные значения.",
        "prompt": "Что появится в консоли?",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab9-is-even",
    "codeDeckId": "lab9-small-methods",
    "deckId": "methods-purchase",
    "term": "Расчётный метод",
    "exampleCode": "if (IsEven(6))\n{\n    Console.WriteLine(\"Чётное\");\n}\nelse\n{\n    Console.WriteLine(\"Нечётное\");\n}\nbool IsEven(int number)\n{\n    return number % 2 == 0;\n}",
    "exampleResult": "Чётное",
    "exampleNote": "bool-результат метода можно использовать как условие if.",
    "kind": "Что выведет код?",
    "challengeCode": "if (IsEven(7))\n{\n    Console.WriteLine(\"Чётное\");\n}\nelse\n{\n    Console.WriteLine(\"Нечётное\");\n}\nbool IsEven(int number)\n{\n    return number % 2 == 0;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "Нечётное",
      "Чётное",
      "False",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "7 % 2 не равно 0, метод возвращает false и выполняется else.",
    "challengeResult": "Нечётное",
    "variants": [
      {
        "challengeCode": "if (IsEven(8))\n{\n    Console.WriteLine(\"Чётное\");\n}\nelse\n{\n    Console.WriteLine(\"Нечётное\");\n}\nbool IsEven(int number)\n{\n    return number % 2 == 0;\n}",
        "options": [
          "Чётное",
          "Нечётное",
          "True",
          "False"
        ],
        "correctIndex": 0,
        "challengeResult": "Чётное",
        "explanation": "IsEven проверяет остаток 8 % 2. Выбирается сообщение «Чётное»."
      },
      {
        "challengeCode": "if (IsEven(9))\n{\n    Console.WriteLine(\"Чётное\");\n}\nelse\n{\n    Console.WriteLine(\"Нечётное\");\n}\nbool IsEven(int number)\n{\n    return number % 2 == 0;\n}",
        "options": [
          "Нечётное",
          "Чётное",
          "True",
          "False"
        ],
        "correctIndex": 0,
        "challengeResult": "Нечётное",
        "explanation": "IsEven проверяет остаток 9 % 2. Выбирается сообщение «Нечётное»."
      },
      {
        "challengeCode": "Console.WriteLine(Sum(6));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(7));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 1)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(8));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "20",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(9));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 1)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "25",
        "options": [
          "25",
          "26",
          "24",
          "27"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(10));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "30",
        "options": [
          "30",
          "31",
          "29",
          "32"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(11));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 1)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "36",
        "options": [
          "36",
          "37",
          "35",
          "38"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab9-print-line",
    "codeDeckId": "lab9-small-methods",
    "deckId": "methods-purchase",
    "term": "Метод вывода",
    "exampleCode": "PrintLine(\"Да\", 2);\nvoid PrintLine(string text, int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.WriteLine(text);\n    }\n}",
    "exampleResult": "Да\nДа",
    "exampleNote": "Метод получает отдельно текст и число повторений.",
    "kind": "Что выведет код?",
    "challengeCode": "PrintLine(\"Код\", 3);\nvoid PrintLine(string text, int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.WriteLine(text);\n    }\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "Код\nКод\nКод",
      "Код",
      "КодКодКод",
      "3"
    ],
    "correctIndex": 0,
    "explanation": "Цикл выполняется три раза; WriteLine каждый раз добавляет перевод строки.",
    "challengeResult": "Код\nКод\nКод"
  },
  {
    "id": "lab9-average",
    "codeDeckId": "lab9-small-methods",
    "deckId": "methods-purchase",
    "term": "Расчётный метод",
    "exampleCode": "Console.WriteLine(Average(2, 4));\ndouble Average(int first, int second)\n{\n    return (first + second) / 2.0;\n}",
    "exampleResult": "3",
    "exampleNote": "Делитель 2.0 задаёт вещественное деление и сохраняет дробную часть.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Average(3, 4));\ndouble Average(int first, int second)\n{\n    return (first + second) / 2.0;\n}",
    "prompt": "Какое число выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
    "options": [
      "3.5",
      "3",
      "7",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "(3 + 4) / 2.0 равно 3.5. В вопросе точка обозначает десятичный разделитель.",
    "challengeResult": "3.5"
  },
  {
    "id": "lab9-is-positive",
    "codeDeckId": "lab9-small-methods",
    "deckId": "methods-purchase",
    "term": "Расчётный метод",
    "exampleCode": "Console.WriteLine(IsPositive(5));\nbool IsPositive(int number)\n{\n    return number > 0;\n}",
    "exampleResult": "True",
    "exampleNote": "Положительные числа строго больше нуля. Ноль не считается положительным.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(IsPositive(0));\nbool IsPositive(int number)\n{\n    return number > 0;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "False",
      "True",
      "0",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "Метод проверяет 0 > 0; это ложное условие.",
    "challengeResult": "False"
  },
  {
    "id": "lab9-sum-to",
    "codeDeckId": "lab9-small-methods",
    "deckId": "methods-purchase",
    "term": "Расчётный метод",
    "exampleCode": "Console.WriteLine(SumTo(3));\nint SumTo(int n)\n{\n    int sum = 0;\n    for (int i = 1; i <= n; i++)\n    {\n        sum += i;\n    }\n    return sum;\n}",
    "exampleResult": "6",
    "exampleNote": "Локальный накопитель складывает числа от 1 до переданного n включительно.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(SumTo(5));\nint SumTo(int n)\n{\n    int sum = 0;\n    for (int i = 1; i <= n; i++)\n    {\n        sum += i;\n    }\n    return sum;\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "15",
      "5",
      "10",
      "25"
    ],
    "correctIndex": 0,
    "explanation": "Сумма равна 1 + 2 + 3 + 4 + 5 = 15.",
    "challengeResult": "15",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(SumTo(4));\nint SumTo(int n)\n{\n    int sum = 0;\n    for (int i = 1; i <= n; i++)\n    {\n        sum += i;\n    }\n    return sum;\n}",
        "options": [
          "10",
          "4",
          "16",
          "6"
        ],
        "correctIndex": 0,
        "challengeResult": "10",
        "explanation": "Сумма чисел от 1 до 4 включительно равна 10."
      },
      {
        "challengeCode": "Console.WriteLine(SumTo(6));\nint SumTo(int n)\n{\n    int sum = 0;\n    for (int i = 1; i <= n; i++)\n    {\n        sum += i;\n    }\n    return sum;\n}",
        "options": [
          "21",
          "6",
          "36",
          "15"
        ],
        "correctIndex": 0,
        "challengeResult": "21",
        "explanation": "Сумма чисел от 1 до 6 включительно равна 21."
      },
      {
        "challengeCode": "Console.WriteLine(Sum(6));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(7));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 1)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(8));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "20",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(9));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 1)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "25",
        "options": [
          "25",
          "26",
          "24",
          "27"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(10));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "30",
        "options": [
          "30",
          "31",
          "29",
          "32"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(11));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 1)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "36",
        "options": [
          "36",
          "37",
          "35",
          "38"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab9-print-range",
    "codeDeckId": "lab9-small-methods",
    "deckId": "methods-purchase",
    "term": "Метод вывода",
    "exampleCode": "PrintRange(2, 4);\nvoid PrintRange(int start, int end)\n{\n    for (int i = start; i <= end; i++)\n    {\n        Console.WriteLine(i);\n    }\n}",
    "exampleResult": "2\n3\n4",
    "exampleNote": "Два параметра задают включённые границы вывода.",
    "kind": "Что выведет код?",
    "challengeCode": "PrintRange(3, 5);\nvoid PrintRange(int start, int end)\n{\n    for (int i = start; i <= end; i++)\n    {\n        Console.WriteLine(i);\n    }\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "3\n4\n5",
      "3\n4",
      "0\n1\n2",
      "5\n4\n3"
    ],
    "correctIndex": 0,
    "explanation": "Цикл начинается с start = 3 и включает end = 5.",
    "challengeResult": "3\n4\n5"
  },
  {
    "id": "lab9-average-fill",
    "codeDeckId": "lab9-small-methods",
    "deckId": "methods-purchase",
    "term": "Расчётный метод",
    "exampleCode": "Console.WriteLine(Average(3, 4));\ndouble Average(int first, int second)\n{\n    return (first + second) / 2.0;\n}",
    "exampleResult": "3.5",
    "exampleNote": "Нужен вещественный делитель, чтобы не отбросить дробную часть.",
    "kind": "Заполните пропуск",
    "challengeCode": "Console.WriteLine(Average(4, 5));\ndouble Average(int first, int second)\n{\n    return (first + second) / /* ??? */;\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 4.5?",
    "options": [
      "2.0",
      "2",
      "3",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Делитель 2.0 даёт 4.5. Деление двух int на 2 сначала даст 4; последующее преобразование в double не вернёт потерянную половину.",
    "solutionResult": "4.5"
  },
  {
    "id": "lab9-positive-fill",
    "codeDeckId": "lab9-small-methods",
    "deckId": "methods-purchase",
    "term": "Расчётный метод",
    "exampleCode": "Console.WriteLine(IsPositive(1));\nbool IsPositive(int number)\n{\n    return number > 0;\n}",
    "exampleResult": "True",
    "exampleNote": "Расчётный bool-метод возвращает результат сравнения.",
    "kind": "Заполните пропуск",
    "challengeCode": "Console.WriteLine(IsPositive(0));\nbool IsPositive(int number)\n{\n    return /* ??? */;\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: False?",
    "options": [
      "number > 0",
      "number >= 0",
      "number == 0",
      "true"
    ],
    "correctIndex": 0,
    "explanation": "Для положительности нужно строгое > 0. При нуле остальные предложенные условия дают True.",
    "solutionResult": "False"
  },
  {
    "id": "lab9-cost",
    "codeDeckId": "lab9-purchase",
    "deckId": "methods-purchase",
    "term": "CalculateCost",
    "exampleCode": "decimal cost = CalculateCost(200m, 3);\nConsole.WriteLine($\"{cost:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}",
    "exampleResult": "600.00",
    "exampleNote": "Метод умножает цену на количество; F2 показывает два знака после разделителя.",
    "kind": "Что выведет код?",
    "challengeCode": "decimal cost = CalculateCost(150m, 2);\nConsole.WriteLine($\"{cost:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}",
    "prompt": "Что выведется? Для F2 точка обозначает десятичный разделитель; на компьютере возможна запятая.",
    "options": [
      "300.00",
      "150.00",
      "152.00",
      "75.00"
    ],
    "correctIndex": 0,
    "explanation": "150 * 2 = 300. Формат F2 показывает 300.00.",
    "challengeResult": "300.00",
    "variants": [
      {
        "challengeCode": "decimal cost = CalculateCost(80m, 5);\nConsole.WriteLine($\"{cost:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}",
        "options": [
          "400.00",
          "80.00",
          "85.00",
          "5.00"
        ],
        "correctIndex": 0,
        "challengeResult": "400.00",
        "explanation": "Цена 80 умножается на количество 5: стоимость 400. F2 выводит два знака."
      },
      {
        "challengeCode": "decimal cost = CalculateCost(120m, 3);\nConsole.WriteLine($\"{cost:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}",
        "options": [
          "360.00",
          "120.00",
          "123.00",
          "3.00"
        ],
        "correctIndex": 0,
        "challengeResult": "360.00",
        "explanation": "Цена 120 умножается на количество 3: стоимость 360. F2 выводит два знака."
      },
      {
        "challengeCode": "int quantity = 4;\ndecimal cost = Cost(12m, quantity);\nquantity += 1;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "48\n5",
        "options": [
          "48\n5",
          "5\n48",
          "49\n6",
          "485"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 2;\ndecimal cost = Cost(13m, quantity);\nquantity += 2;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "26\n4",
        "options": [
          "26\n4",
          "4\n26",
          "27\n5",
          "264"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 3;\ndecimal cost = Cost(14m, quantity);\nquantity += 1;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "42\n4",
        "options": [
          "42\n4",
          "4\n42",
          "43\n5",
          "424"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 4;\ndecimal cost = Cost(15m, quantity);\nquantity += 2;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "60\n6",
        "options": [
          "60\n6",
          "6\n60",
          "61\n7",
          "606"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 2;\ndecimal cost = Cost(16m, quantity);\nquantity += 1;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "32\n3",
        "options": [
          "32\n3",
          "3\n32",
          "33\n4",
          "323"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 3;\ndecimal cost = Cost(17m, quantity);\nquantity += 2;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "51\n5",
        "options": [
          "51\n5",
          "5\n51",
          "52\n6",
          "515"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab9-discount",
    "codeDeckId": "lab9-purchase",
    "deckId": "methods-purchase",
    "term": "CalculateDiscount",
    "exampleCode": "decimal discount = CalculateDiscount(600m, 10);\nConsole.WriteLine($\"{discount:F2}\");\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
    "exampleResult": "60.00",
    "exampleNote": "Скидка в деньгах равна стоимости, умноженной на процент и делённой на 100.",
    "kind": "Что выведет код?",
    "challengeCode": "decimal discount = CalculateDiscount(400m, 25);\nConsole.WriteLine($\"{discount:F2}\");\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
    "prompt": "Что выведется? Для F2 точка обозначает десятичный разделитель; на компьютере возможна запятая.",
    "options": [
      "100.00",
      "300.00",
      "25.00",
      "400.00"
    ],
    "correctIndex": 0,
    "explanation": "25% от 400 — это 100. Метод возвращает размер скидки, а не остаток к оплате.",
    "challengeResult": "100.00",
    "variants": [
      {
        "challengeCode": "decimal discount = CalculateDiscount(300m, 0);\nConsole.WriteLine($\"{discount:F2}\");\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
        "options": [
          "0.00",
          "300.00",
          "301.00",
          "1.00"
        ],
        "correctIndex": 0,
        "challengeResult": "0.00",
        "explanation": "Скидка в деньгах равна 300 * 0 / 100 = 0."
      },
      {
        "challengeCode": "decimal discount = CalculateDiscount(250m, 20);\nConsole.WriteLine($\"{discount:F2}\");\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
        "options": [
          "50.00",
          "250.00",
          "251.00",
          "51.00"
        ],
        "correctIndex": 0,
        "challengeResult": "50.00",
        "explanation": "Скидка в деньгах равна 250 * 20 / 100 = 50."
      },
      {
        "challengeCode": "decimal cost = 140m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "98",
        "options": [
          "98",
          "99",
          "97",
          "100"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 160m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost - first, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли? Точка обозначает десятичный разделитель; при запуске возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "115.2",
        "options": [
          "115.2",
          "116.3",
          "2.511",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 180m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "126",
        "options": [
          "126",
          "127",
          "125",
          "128"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 200m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost - first, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "144",
        "options": [
          "144",
          "145",
          "143",
          "146"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 220m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "154",
        "options": [
          "154",
          "155",
          "153",
          "156"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 240m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost - first, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли? Точка обозначает десятичный разделитель; при запуске возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "172.8",
        "options": [
          "172.8",
          "173.9",
          "8.271",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab9-total",
    "codeDeckId": "lab9-purchase",
    "deckId": "methods-purchase",
    "term": "Итоговая сумма",
    "exampleCode": "decimal cost = CalculateCost(12.50m, 4);\ndecimal discount = CalculateDiscount(cost, 10);\ndecimal totalCost = cost - discount;\nConsole.WriteLine($\"{totalCost:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
    "exampleResult": "45.00",
    "exampleNote": "Основная часть использует результаты двух расчётных методов и вычитает скидку.",
    "kind": "Что выведет код?",
    "challengeCode": "decimal cost = CalculateCost(200m, 3);\ndecimal discount = CalculateDiscount(cost, 10);\ndecimal totalCost = cost - discount;\nConsole.WriteLine($\"{totalCost:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
    "prompt": "Что выведется? Для F2 точка обозначает десятичный разделитель; на компьютере возможна запятая.",
    "options": [
      "540.00",
      "600.00",
      "60.00",
      "594.00"
    ],
    "correctIndex": 0,
    "explanation": "Стоимость 600, скидка 60, итоговая сумма 540.",
    "challengeResult": "540.00",
    "variants": [
      {
        "challengeCode": "decimal cost = CalculateCost(80m, 5);\ndecimal discount = CalculateDiscount(cost, 100);\ndecimal totalCost = cost - discount;\nConsole.WriteLine($\"{totalCost:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
        "options": [
          "0.00",
          "1.00",
          "2.00",
          "10.00"
        ],
        "correctIndex": 0,
        "challengeResult": "0.00",
        "explanation": "Сначала вычисляются стоимость и скидка; их разность равна 0."
      },
      {
        "challengeCode": "decimal cost = CalculateCost(12.5m, 4);\ndecimal discount = CalculateDiscount(cost, 10);\ndecimal totalCost = cost - discount;\nConsole.WriteLine($\"{totalCost:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
        "options": [
          "45.00",
          "46.00",
          "47.00",
          "55.00"
        ],
        "correctIndex": 0,
        "challengeResult": "45.00",
        "explanation": "Сначала вычисляются стоимость и скидка; их разность равна 45."
      },
      {
        "challengeCode": "decimal cost = 140m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "98",
        "options": [
          "98",
          "99",
          "97",
          "100"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 160m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost - first, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли? Точка обозначает десятичный разделитель; при запуске возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "115.2",
        "options": [
          "115.2",
          "116.3",
          "2.511",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 180m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "126",
        "options": [
          "126",
          "127",
          "125",
          "128"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 200m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost - first, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "144",
        "options": [
          "144",
          "145",
          "143",
          "146"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 220m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "154",
        "options": [
          "154",
          "155",
          "153",
          "156"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 240m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost - first, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли? Точка обозначает десятичный разделитель; при запуске возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "172.8",
        "options": [
          "172.8",
          "173.9",
          "8.271",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab9-print-result",
    "codeDeckId": "lab9-purchase",
    "deckId": "methods-purchase",
    "term": "PrintResult",
    "exampleCode": "PrintResult(100m, 10m, 90m);\nvoid PrintResult(decimal cost, decimal discount, decimal totalCost)\n{\n    Console.WriteLine($\"До скидки: {cost:F2}\");\n    Console.WriteLine($\"Скидка: {discount:F2}\");\n    Console.WriteLine($\"К оплате: {totalCost:F2}\");\n}",
    "exampleResult": "До скидки: 100.00\nСкидка: 10.00\nК оплате: 90.00",
    "exampleNote": "PrintResult получает готовые значения; он не спрашивает ввод и не пересчитывает их.",
    "kind": "Что выведет код?",
    "challengeCode": "PrintResult(300m, 0m, 300m);\nvoid PrintResult(decimal cost, decimal discount, decimal totalCost)\n{\n    Console.WriteLine($\"До скидки: {cost:F2}\");\n    Console.WriteLine($\"Скидка: {discount:F2}\");\n    Console.WriteLine($\"К оплате: {totalCost:F2}\");\n}",
    "prompt": "Что выведется? Для F2 точка обозначает десятичный разделитель; на компьютере возможна запятая.",
    "options": [
      "До скидки: 300.00\nСкидка: 0.00\nК оплате: 300.00",
      "До скидки: 300.00\nСкидка: 300.00\nК оплате: 0.00",
      "300.00",
      "Ничего"
    ],
    "correctIndex": 0,
    "explanation": "Аргументы передаются параметрам по порядку: стоимость 300, скидка 0, итог 300.",
    "challengeResult": "До скидки: 300.00\nСкидка: 0.00\nК оплате: 300.00"
  },
  {
    "id": "lab9-full-discount",
    "codeDeckId": "lab9-purchase",
    "deckId": "methods-purchase",
    "term": "Скидка в деньгах",
    "exampleCode": "decimal cost = CalculateCost(80m, 5);\ndecimal discount = CalculateDiscount(cost, 100);\nConsole.WriteLine($\"{cost - discount:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
    "exampleResult": "0.00",
    "exampleNote": "Скидка 100% равна всей стоимости; сумма к оплате нулевая.",
    "kind": "Что выведет код?",
    "challengeCode": "decimal cost = CalculateCost(50m, 2);\ndecimal discount = CalculateDiscount(cost, 100);\nConsole.WriteLine($\"{cost - discount:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
    "prompt": "Что выведется? Для F2 точка обозначает десятичный разделитель; на компьютере возможна запятая.",
    "options": [
      "0.00",
      "100.00",
      "50.00",
      "1.00"
    ],
    "correctIndex": 0,
    "explanation": "Стоимость 100 и скидка 100. После вычитания остаётся 0.",
    "challengeResult": "0.00"
  },
  {
    "id": "lab9-zero-price",
    "codeDeckId": "lab9-purchase",
    "deckId": "methods-purchase",
    "term": "Стоимость до скидки",
    "exampleCode": "decimal cost = CalculateCost(0m, 2);\nConsole.WriteLine($\"{cost:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}",
    "exampleResult": "0.00",
    "exampleNote": "Нулевая цена допустима по условию лабораторной; количество при этом положительное.",
    "kind": "Что выведет код?",
    "challengeCode": "decimal cost = CalculateCost(0m, 5);\nConsole.WriteLine($\"{cost:F2}\");\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}",
    "prompt": "Что выведется? Для F2 точка обозначает десятичный разделитель; на компьютере возможна запятая.",
    "options": [
      "0.00",
      "5.00",
      "1.00",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "0 * 5 = 0; нулевая цена не является ошибкой диапазона.",
    "challengeResult": "0.00"
  },
  {
    "id": "lab9-decimal-parse",
    "codeDeckId": "lab9-purchase",
    "deckId": "methods-purchase",
    "term": "decimal.TryParse",
    "exampleCode": "bool ok = decimal.TryParse(\"150\", out decimal price);\nConsole.WriteLine(ok);\nConsole.WriteLine(price >= 0m);",
    "exampleResult": "True\nTrue",
    "exampleNote": "Формат и диапазон цены проверяются отдельно. Отрицательная цена может успешно преобразоваться в число.",
    "kind": "Что выведет код?",
    "challengeCode": "bool ok = decimal.TryParse(\"-10\", out decimal price);\nConsole.WriteLine(ok);\nConsole.WriteLine(price >= 0m);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True\nFalse",
      "False\nFalse",
      "True\nTrue",
      "False\nTrue"
    ],
    "correctIndex": 0,
    "explanation": "-10 — корректная числовая запись, поэтому TryParse возвращает true. Но цена меньше нуля недопустима.",
    "challengeResult": "True\nFalse"
  },
  {
    "id": "lab9-f2",
    "codeDeckId": "lab9-purchase",
    "deckId": "methods-purchase",
    "term": "Формат F2",
    "exampleCode": "decimal totalCost = 45m;\nConsole.WriteLine($\"{totalCost:F2}\");",
    "exampleResult": "45.00",
    "exampleNote": "F2 показывает ровно два знака после десятичного разделителя.",
    "kind": "Что выведет код?",
    "challengeCode": "decimal totalCost = 12.5m;\nConsole.WriteLine($\"{totalCost:F2}\");",
    "prompt": "Что выведется? Для F2 точка обозначает десятичный разделитель; на компьютере возможна запятая.",
    "options": [
      "12.50",
      "12.5",
      "12.00",
      "1250.00"
    ],
    "correctIndex": 0,
    "explanation": "F2 дописывает недостающий ноль. Само значение totalCost от форматирования не меняется.",
    "challengeResult": "12.50",
    "variants": [
      {
        "challengeCode": "decimal totalCost = 7m;\nConsole.WriteLine($\"{totalCost:F2}\");",
        "options": [
          "7.00",
          "700",
          "7.000",
          "0.00"
        ],
        "correctIndex": 0,
        "challengeResult": "7.00",
        "explanation": "F2 показывает два знака после десятичного разделителя. В вопросе используется точка."
      },
      {
        "challengeCode": "decimal totalCost = 8.5m;\nConsole.WriteLine($\"{totalCost:F2}\");",
        "options": [
          "8.50",
          "850",
          "8.500",
          "0.00"
        ],
        "correctIndex": 0,
        "challengeResult": "8.50",
        "explanation": "F2 показывает два знака после десятичного разделителя. В вопросе используется точка."
      },
      {
        "challengeCode": "decimal value = 3.5m;\nConsole.WriteLine($\"{value * 2:F2}\");",
        "prompt": "Что выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Сначала вычисляется выражение, затем F2 показывает результат с двумя знаками после разделителя.",
        "challengeResult": "7.00",
        "options": [
          "7.00",
          "8.1",
          "00.7",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal value = 4.5m;\nConsole.WriteLine($\"{value + 2:F2}\");",
        "prompt": "Что выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Сначала вычисляется выражение, затем F2 показывает результат с двумя знаками после разделителя.",
        "challengeResult": "6.50",
        "options": [
          "6.50",
          "7.51",
          "05.6",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal value = 5.5m;\nConsole.WriteLine($\"{value * 2:F2}\");",
        "prompt": "Что выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Сначала вычисляется выражение, затем F2 показывает результат с двумя знаками после разделителя.",
        "challengeResult": "11.00",
        "options": [
          "11.00",
          "12.1",
          "00.11",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal value = 6.5m;\nConsole.WriteLine($\"{value + 2:F2}\");",
        "prompt": "Что выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Сначала вычисляется выражение, затем F2 показывает результат с двумя знаками после разделителя.",
        "challengeResult": "8.50",
        "options": [
          "8.50",
          "9.51",
          "05.8",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal value = 7.5m;\nConsole.WriteLine($\"{value * 2:F2}\");",
        "prompt": "Что выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Сначала вычисляется выражение, затем F2 показывает результат с двумя знаками после разделителя.",
        "challengeResult": "15.00",
        "options": [
          "15.00",
          "16.1",
          "00.51",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal value = 8.5m;\nConsole.WriteLine($\"{value + 2:F2}\");",
        "prompt": "Что выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Сначала вычисляется выражение, затем F2 показывает результат с двумя знаками после разделителя.",
        "challengeResult": "10.50",
        "options": [
          "10.50",
          "11.51",
          "05.01",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "lab9-cost-fill",
    "codeDeckId": "lab9-purchase",
    "deckId": "methods-purchase",
    "term": "CalculateCost",
    "exampleCode": "Console.WriteLine(CalculateCost(20m, 3));\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return unitPrice * quantity;\n}",
    "exampleResult": "60",
    "exampleNote": "Расчётный метод возвращает произведение цены и количества.",
    "kind": "Заполните пропуск",
    "challengeCode": "Console.WriteLine(CalculateCost(30m, 2));\ndecimal CalculateCost(decimal unitPrice, int quantity)\n{\n    return /* ??? */;\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 60?",
    "options": [
      "unitPrice * quantity",
      "unitPrice + quantity",
      "unitPrice / quantity",
      "quantity"
    ],
    "correctIndex": 0,
    "explanation": "Требуется умножить цену 30 на количество 2. Остальные варианты дают 32, 15 и 2.",
    "solutionResult": "60"
  },
  {
    "id": "lab9-discount-order",
    "codeDeckId": "lab9-purchase",
    "deckId": "methods-purchase",
    "term": "CalculateDiscount",
    "exampleCode": "Console.WriteLine(CalculateDiscount(200m, 10));\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return cost * discountPercent / 100;\n}",
    "exampleResult": "20",
    "exampleNote": "Умножение стоимости decimal на процент происходит до деления на 100.",
    "kind": "Заполните пропуск",
    "challengeCode": "Console.WriteLine(CalculateDiscount(150m, 10));\ndecimal CalculateDiscount(decimal cost, int discountPercent)\n{\n    return /* ??? */;\n}",
    "prompt": "Что поставить вместо /* ??? */, чтобы получить результат: 15?",
    "options": [
      "cost * discountPercent / 100",
      "cost * (discountPercent / 100)",
      "cost - discountPercent",
      "discountPercent"
    ],
    "correctIndex": 0,
    "explanation": "Правильная формула даёт 15. В discountPercent / 100 оба операнда int: 10 / 100 равно 0, что обнуляет скидку.",
    "solutionResult": "15"
  },
  {
    "id": "lab10-static",
    "deckId": "methods-overloads",
    "term": "Статический метод",
    "exampleCode": "Console.WriteLine(string.Concat(\"За\", \"мер\"));",
    "exampleResult": "Замер",
    "exampleNote": "Статический метод Concat вызывается через имя типа string.",
    "kind": "Разберите вызов",
    "challengeCode": "int[] times = { 320, 180 };\nArray.Sort(times);",
    "prompt": "Как здесь вызывается метод Sort?",
    "options": [
      "По имени массива times",
      "По имени класса Array",
      "Через создание нового объекта",
      "Через свойство массива"
    ],
    "correctIndex": 1,
    "explanation": "Sort — статический метод класса Array. Массив times передаётся как аргумент.",
    "codeDeckId": "lab10-method-overloads"
  },
  {
    "id": "lab10-signature",
    "deckId": "methods-overloads",
    "term": "Сигнатура метода",
    "exampleCode": "static int Scale(int value, int factor) => value * factor;\nConsole.WriteLine(Scale(3, 2));",
    "exampleResult": "6",
    "exampleNote": "У метода имя Scale и два параметра типа int. Тип результата не нужен для выбора перегрузки.",
    "kind": "Разберите вызов",
    "challengeCode": "static int Scale(int value, int factor) => value * factor;\nConsole.WriteLine(Scale(4, 2));",
    "prompt": "Какое изменение объявления Scale даст другую сигнатуру?",
    "options": [
      "Переименовать value в number",
      "Поменять только тип результата на double",
      "Изменить тип первого параметра на double",
      "Переставить имена двух параметров типа int"
    ],
    "correctIndex": 2,
    "explanation": "Сигнатура изменится с Scale(int, int) на Scale(double, int). Имена параметров и тип результата на неё не влияют.",
    "codeDeckId": "lab10-method-overloads"
  },
  {
    "id": "lab10-overload",
    "deckId": "methods-overloads",
    "term": "Перегрузка метода",
    "exampleCode": "Console.WriteLine(string.Concat(\"За\", \"мер\"));\nConsole.WriteLine(string.Concat(\"За\", \"мер\", \"ы\"));",
    "exampleResult": "Замер\nЗамеры",
    "exampleNote": "Один вызов выбирает перегрузку Concat с двумя строками, другой — с тремя.",
    "kind": "Разберите вызов",
    "challengeCode": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine(Describe(3.5));\n    }\n\n    static string Describe(int value) => \"int\";\n    static string Describe(double value) => \"double\";\n}",
    "prompt": "Какую перегрузку выберет компилятор?",
    "options": [
      "Describe(int)",
      "Describe(double)",
      "Обе перегрузки",
      "Вызов неоднозначен"
    ],
    "correctIndex": 1,
    "explanation": "Литерал 3.5 имеет тип double, поэтому подходит перегрузка Describe(double).",
    "codeDeckId": "lab10-method-overloads"
  },
  {
    "id": "lab10-argument",
    "deckId": "methods-overloads",
    "term": "Необязательный параметр",
    "exampleCode": "static int AddDelay(int time, int delay = 20) => time + delay;\nConsole.WriteLine(AddDelay(180));",
    "exampleResult": "200",
    "exampleNote": "Параметр delay необязательный: вызов без второго аргумента использует 20.",
    "kind": "Что выведет код?",
    "challengeCode": "static int AddDelay(int time, int delay = 20) => time + delay;\nConsole.WriteLine(AddDelay(250, 15));",
    "prompt": "Что появится в консоли, если передать второй аргумент явно?",
    "options": [
      "250",
      "270",
      "265",
      "Ошибка компиляции"
    ],
    "correctIndex": 2,
    "explanation": "Явно переданное значение 15 используется вместо 20. Результат равен 265.",
    "codeDeckId": "lab10-method-overloads",
    "challengeResult": "265"
  },
  {
    "id": "lab10-default-value",
    "deckId": "methods-overloads",
    "term": "Значение аргумента по умолчанию",
    "exampleCode": "static int Multiply(int value, int factor = 2) => value * factor;\nConsole.WriteLine(Multiply(3));",
    "exampleResult": "6",
    "exampleNote": "Второй аргумент пропущен, поэтому factor получает значение 2.",
    "kind": "Что выведет код?",
    "challengeCode": "static int Multiply(int value, int factor = 2) => value * factor;\nConsole.WriteLine(Multiply(5));",
    "prompt": "Что появится в консоли?",
    "options": [
      "5",
      "7",
      "10",
      "Ошибка компиляции"
    ],
    "correctIndex": 2,
    "explanation": "Аргумент для factor не передан. Используется значение 2, поэтому результат равен 10.",
    "codeDeckId": "lab10-method-overloads",
    "challengeResult": "10"
  },
  {
    "id": "lab10-named-argument",
    "deckId": "methods-overloads",
    "term": "Именованный аргумент",
    "exampleCode": "static int Multiply(int value, int factor = 2) => value * factor;\nConsole.WriteLine(Multiply(3, factor: 4));",
    "exampleResult": "12",
    "exampleNote": "Запись factor: 4 передаёт параметру factor значение 4.",
    "kind": "Что выведет код?",
    "challengeCode": "static int Subtract(int value, int amount) => value - amount;\nConsole.WriteLine(Subtract(amount: 3, value: 10));",
    "prompt": "Что появится в консоли?",
    "options": [
      "-7",
      "7",
      "13",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Имена связывают 10 с value, а 3 с amount. Метод вычисляет 10 - 3.",
    "codeDeckId": "lab10-method-overloads",
    "challengeResult": "7"
  },
  {
    "id": "lab10-zero-index",
    "deckId": "array-processing",
    "term": "Признак отсутствия совпадения",
    "exampleCode": "int[] times = { 320, 180, 250 };\nConsole.WriteLine(Array.IndexOf(times, 999));",
    "exampleResult": "-1",
    "exampleNote": "Замера 999 в массиве нет, поэтому поиск возвращает -1.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] times = { 320, 180, 250 };\nConsole.WriteLine(Array.IndexOf(times, 320));",
    "prompt": "Какой индекс вернёт поиск 320?",
    "options": [
      "-1",
      "0",
      "1",
      "320"
    ],
    "correctIndex": 1,
    "explanation": "Замер 320 находится на первой позиции с индексом 0. Результат -1 означал бы отсутствие совпадения.",
    "codeDeckId": "lab10-array-operations",
    "challengeResult": "0"
  },
  {
    "id": "lab10-copy",
    "deckId": "array-processing",
    "term": "Array.Copy",
    "exampleCode": "int[] times = { 320, 180, 250 };\nint[] copy = new int[times.Length];\nArray.Copy(times, copy, times.Length);\nConsole.WriteLine(string.Join(\" \", copy));",
    "exampleResult": "320 180 250",
    "exampleNote": "В новом массиве находятся те же числа в исходном порядке.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] times = { 320, 180, 250 };\nint[] copy = new int[times.Length];\nArray.Copy(times, copy, times.Length);\ncopy[0] = 999;\nConsole.WriteLine(times[0]);",
    "prompt": "Какое значение осталось в первом элементе times?",
    "options": [
      "999",
      "180",
      "0",
      "320"
    ],
    "correctIndex": 3,
    "explanation": "Для int[] копируются значения элементов. Запись в copy[0] не меняет times[0].",
    "codeDeckId": "lab10-array-operations",
    "challengeResult": "320"
  },
  {
    "id": "lab10-sort",
    "deckId": "array-processing",
    "term": "Array.Sort",
    "exampleCode": "int[] times = { 320, 180, 250 };\nArray.Sort(times);\nConsole.WriteLine(string.Join(\" \", times));",
    "exampleResult": "180 250 320",
    "exampleNote": "Array.Sort меняет порядок элементов в переданном массиве.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] times = { 320, 180, 250, 180 };\nArray.Sort(times);\nConsole.WriteLine(string.Join(\" \", times));",
    "prompt": "В каком порядке будут выведены элементы?",
    "options": [
      "180 250 320",
      "320 250 180 180",
      "180 180 250 320",
      "320 180 250 180"
    ],
    "correctIndex": 2,
    "explanation": "Числа сортируются по возрастанию. Оба элемента со значением 180 остаются в массиве.",
    "codeDeckId": "lab10-array-operations",
    "challengeResult": "180 180 250 320"
  },
  {
    "id": "lab10-reverse",
    "deckId": "array-processing",
    "term": "Array.Reverse",
    "exampleCode": "int[] times = { 180, 250, 320 };\nArray.Reverse(times);\nConsole.WriteLine(string.Join(\" \", times));",
    "exampleResult": "320 250 180",
    "exampleNote": "Массив был отсортирован по возрастанию. После разворота порядок стал убывающим.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] times = { 320, 180, 250 };\nArray.Reverse(times);\nConsole.WriteLine(string.Join(\" \", times));",
    "prompt": "В каком порядке будут выведены элементы?",
    "options": [
      "320 250 180",
      "180 250 320",
      "320 180 250",
      "250 180 320"
    ],
    "correctIndex": 3,
    "explanation": "Array.Reverse разворачивает текущий порядок. Чтобы получить убывающий порядок из произвольного массива, сначала нужна сортировка.",
    "codeDeckId": "lab10-array-operations",
    "challengeResult": "250 180 320"
  },
  {
    "id": "lab10-index-of",
    "deckId": "array-processing",
    "term": "Array.IndexOf",
    "exampleCode": "int[] times = { 320, 180, 250, 180 };\nConsole.WriteLine(Array.IndexOf(times, 180));",
    "exampleResult": "1",
    "exampleNote": "Число 180 встречается дважды. Array.IndexOf возвращает индекс первого совпадения.",
    "kind": "Разберите вызов",
    "challengeCode": "int[] times = { 320, 180, 250 };\nint index = Array.IndexOf(times, 320);\nif (index > 0)\n{\n    Console.WriteLine(index);\n}",
    "prompt": "Как исправить условие, чтобы найти и первый элемент?",
    "options": [
      "index >= 0",
      "index == -1",
      "index > 1",
      "index != 0"
    ],
    "correctIndex": 0,
    "explanation": "Для 320 метод возвращает индекс 0. Условие index >= 0 включает первый элемент и исключает -1.",
    "codeDeckId": "lab10-array-operations"
  },
  {
    "id": "lab10-sorted-copy",
    "deckId": "array-processing",
    "term": "Отсортированная копия",
    "exampleCode": "int[] times = { 320, 180, 250 };\nint[] copy = new int[times.Length];\nArray.Copy(times, copy, times.Length);\nArray.Sort(copy);\nConsole.WriteLine(string.Join(\" \", copy));\nConsole.WriteLine(string.Join(\" \", times));",
    "exampleResult": "180 250 320\n320 180 250",
    "exampleNote": "Сортируется отдельный массив. Порядок исходных замеров сохраняется.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] times = { 320, 180, 250 };\nint[] copy = times;\nArray.Sort(copy);\nConsole.WriteLine(string.Join(\" \", times));",
    "prompt": "Что выведет этот фрагмент?",
    "options": [
      "320 180 250",
      "180 250 320",
      "320 250 180",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Присваивание copy = times не создаёт новый массив. Обе переменные ссылаются на один массив, поэтому сортировка через copy меняет порядок в times.",
    "codeDeckId": "lab10-array-operations",
    "challengeResult": "180 250 320"
  },
  {
    "id": "lab10-extract-formatting",
    "deckId": "methods-refactoring",
    "term": "Извлечение метода",
    "exampleCode": "static string FormatCount(string label, int count)\n{\n    return $\"{label}: {count}\";\n}\nConsole.WriteLine(FormatCount(\"Утро\", 1));\nConsole.WriteLine(FormatCount(\"Вечер\", 2));",
    "exampleResult": "Утро: 1\nВечер: 2",
    "exampleNote": "Один метод отвечает за формат строки. Подпись и число приходят через параметры.",
    "kind": "Выберите границу метода",
    "challengeCode": "int[] times = { 320, 180, 250 };\nint[] sorted = { 180, 250, 320 };\nConsole.WriteLine(\"Исходные: \" + string.Join(\" \", times));\nConsole.WriteLine(\"По возрастанию: \" + string.Join(\" \", sorted));\nint index = Array.IndexOf(times, 180);\nConsole.WriteLine(index);",
    "prompt": "Какой блок полезнее выделить в первую очередь, чтобы убрать повторение?",
    "options": [
      "Форматирование и вывод массива с подписью в PrintMeasurements(string label, int[] values)",
      "Вызов Array.IndexOf в метод без параметров",
      "Объявление times в метод, который печатает индекс",
      "Каждую строку в отдельный метод без параметров"
    ],
    "correctIndex": 0,
    "explanation": "Две строки выводят массив одинаковым способом. Метод с подписью и массивом уберёт повторение, а одиночный вызов Array.IndexOf уже выражает своё действие.",
    "codeDeckId": "lab10-method-refactoring"
  },
  {
    "id": "lab10-refactor-boundary",
    "deckId": "methods-refactoring",
    "term": "Рефакторинг",
    "exampleCode": "int[] times = { 180, 250, 320 };\nint limit = 250;\nint count = 0;\nforeach (int time in times)\n{\n    if (time > limit)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
    "exampleResult": "1",
    "exampleNote": "Исходный цикл считает только значения строго выше порога. При переносе цикла в метод это условие нужно сохранить.",
    "kind": "Заполните пропуск",
    "challengeCode": "static int CountOverLimit(int[] times, int limit)\n{\n    int count = 0;\n    foreach (int time in times)\n    {\n        if (/* ??? */)\n        {\n            count++;\n        }\n    }\n    return count;\n}\n\nConsole.WriteLine(CountOverLimit(new int[] { 180, 250, 320, 410 }, 250));",
    "prompt": "После извлечения метода должен сохраниться результат 2. Какое условие сохраняет правило «строго выше порога»?",
    "options": [
      "time >= limit",
      "time > limit",
      "time == limit",
      "time < limit"
    ],
    "correctIndex": 1,
    "solutionResult": "2",
    "explanation": "Условие time > limit сохраняет исходное правило. 320 и 410 учитываются, а 250, равное порогу, пропускается.",
    "codeDeckId": "lab10-method-refactoring"
  },
  {
    "id": "lab10-pure-count",
    "deckId": "methods-refactoring",
    "term": "Чистая функция",
    "exampleCode": "static int CountOverLimit(int[] times, int limit)\n{\n    int count = 0;\n    foreach (int time in times)\n    {\n        if (time > limit)\n        {\n            count++;\n        }\n    }\n    return count;\n}\nConsole.WriteLine(CountOverLimit(new int[] { 180, 250, 320 }, 250));",
    "exampleResult": "1",
    "exampleNote": "Метод использует только параметры, меняет свой локальный счётчик и возвращает число. За вывод отвечает вызывающий код.",
    "kind": "Проверьте чистоту функции",
    "challengeCode": "static int CountOverLimit(int[] times, int limit)\n{\n    int count = 0;\n    foreach (int time in times)\n    {\n        if (time > limit)\n        {\n            count++;\n        }\n    }\n    return count;\n}\nint[] times = { 250, 320, 410 };\nConsole.WriteLine(CountOverLimit(times, 250));\nConsole.WriteLine(CountOverLimit(times, 250));",
    "prompt": "Почему CountOverLimit можно назвать чистой функцией?",
    "options": [
      "Внутри метода объявлен счётчик",
      "Метод объявлен с ключевым словом static",
      "Метод читает только входные данные, возвращает число и не меняет исходный массив",
      "Вызывающий код печатает оба результата"
    ],
    "correctIndex": 2,
    "explanation": "Оба вызова вернут 2. Метод меняет только свой локальный счётчик. Вывод делает вызывающий код, а не CountOverLimit.",
    "codeDeckId": "lab10-method-refactoring"
  },
  {
    "id": "lab10-mutates-input",
    "deckId": "methods-refactoring",
    "term": "Побочный эффект",
    "exampleCode": "static int FirstAfterSorting(int[] values)\n{\n    Array.Sort(values);\n    return values[0];\n}\nint[] times = { 320, 180, 250 };\nConsole.WriteLine(FirstAfterSorting(times));\nConsole.WriteLine(string.Join(\" \", times));",
    "exampleResult": "180\n180 250 320",
    "exampleNote": "Метод возвращает первое число после сортировки и при этом меняет порядок во входном массиве.",
    "kind": "Что выведет код?",
    "challengeCode": "static int LastAfterReversing(int[] values)\n{\n    Array.Reverse(values);\n    return values[values.Length - 1];\n}\nint[] times = { 320, 180, 250 };\nLastAfterReversing(times);\nConsole.WriteLine(string.Join(\" \", times));",
    "prompt": "Что останется в times после вызова, если возвращённое число нигде не используется?",
    "options": [
      "320 180 250",
      "180 250 320",
      "320",
      "250 180 320"
    ],
    "correctIndex": 3,
    "challengeResult": "250 180 320",
    "explanation": "Array.Reverse меняет переданный массив на месте. Игнорирование возвращённого числа не отменяет это изменение.",
    "codeDeckId": "lab10-method-refactoring"
  },
  {
    "id": "lab10-separate-output",
    "deckId": "methods-refactoring",
    "term": "Извлечение метода",
    "exampleCode": "static int CalculateTotal(int price, int quantity)\n{\n    return price * quantity;\n}\nstatic void PrintTotal(int total)\n{\n    Console.WriteLine($\"Итого: {total}\");\n}\nint total = CalculateTotal(50, 3);\nPrintTotal(total);\nConsole.WriteLine(total + 20);",
    "exampleResult": "Итого: 150\n170",
    "exampleNote": "Результат расчёта можно вывести и использовать дальше. PrintTotal отвечает только за вывод.",
    "kind": "Выберите границу метода",
    "challengeCode": "static int CalculateTotal(int price, int quantity)\n{\n    int total = price * quantity;\n    Console.WriteLine($\"Итого: {total}\");\n    return total;\n}\nint total = CalculateTotal(50, 3);\nConsole.WriteLine(total + 20);",
    "prompt": "Как выделить чистый расчёт и сохранить обе строки вывода?",
    "options": [
      "Удалить обе команды Console.WriteLine",
      "Перенести печать итога из CalculateTotal в вызывающий код и вывести возвращённое число перед total + 20",
      "Заменить return total на Console.WriteLine(total)",
      "Хранить total в общей переменной и менять её внутри CalculateTotal"
    ],
    "correctIndex": 1,
    "explanation": "Расчёт возвращает 150. Вызывающий код по-прежнему выводит «Итого: 150», а затем 170. Тот же расчёт можно вызвать там, где вывод вообще не нужен.",
    "codeDeckId": "lab10-method-refactoring"
  },
  {
    "id": "lab10-pure-sorted-copy",
    "deckId": "methods-refactoring",
    "term": "Чистая функция",
    "exampleCode": "static int[] CreateSortedCopy(int[] values)\n{\n    int[] copy = new int[values.Length];\n    Array.Copy(values, copy, values.Length);\n    Array.Sort(copy);\n    return copy;\n}\nint[] times = { 320, 180, 250 };\nConsole.WriteLine(string.Join(\" \", CreateSortedCopy(times)));\nConsole.WriteLine(string.Join(\" \", times));",
    "exampleResult": "180 250 320\n320 180 250",
    "exampleNote": "Array.Sort меняет только созданный внутри метода массив. Исходные данные остаются прежними.",
    "kind": "Проверьте чистоту функции",
    "challengeCode": "static int[] CreateSortedCopy(int[] values)\n{\n    int[] copy = new int[values.Length];\n    Array.Copy(values, copy, values.Length);\n    Array.Sort(copy);\n    return copy;\n}",
    "prompt": "Почему CreateSortedCopy остаётся чистой функцией, хотя Array.Sort меняет массив?",
    "options": [
      "Array.Sort никогда не меняет переданный массив",
      "Массивы в C# копируются автоматически при вызове метода",
      "В чистой функции нельзя менять даже локальные переменные",
      "Сортируется новая локальная копия, а переданный массив не меняется"
    ],
    "correctIndex": 3,
    "explanation": "Снаружи виден только возвращённый массив. Изменение новой локальной копии внутри метода не меняет исходный массив и не создаёт наблюдаемого побочного эффекта.",
    "codeDeckId": "lab10-method-refactoring"
  },
  {
    "id": "expand-4-copy-chain",
    "codeDeckId": "lab4-mixed-reading",
    "deckId": "variables-values",
    "term": "Присваивание",
    "exampleCode": "int first = 10;\nint second = first;\nfirst = 16;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
    "exampleNote": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
    "kind": "Что выведет код?",
    "challengeCode": "int first = 2;\nint second = first;\nfirst = 8;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
    "variants": [
      {
        "challengeCode": "int first = 3;\nint second = first;\nfirst = 9;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "3 9",
        "options": [
          "3 9",
          "4 10",
          "9 3",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 4;\nint second = first;\nfirst = 10;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "4 4",
        "options": [
          "4 4",
          "5 5",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 5;\nint second = first;\nfirst = 11;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "5 11",
        "options": [
          "5 11",
          "6 12",
          "11 5",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 6;\nint second = first;\nfirst = 12;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "6 6",
        "options": [
          "6 6",
          "7 7",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 7;\nint second = first;\nfirst = 13;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "7 13",
        "options": [
          "7 13",
          "8 14",
          "31 7",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 8;\nint second = first;\nfirst = 14;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "8 8",
        "options": [
          "8 8",
          "9 9",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 9;\nint second = first;\nfirst = 15;\nint third = first;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "9 15",
        "options": [
          "9 15",
          "10 16",
          "51 9",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 10;\nint second = first;\nfirst = 16;\nint third = second;\nConsole.WriteLine($\"{second} {third}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Присваивание копирует текущее значение. Последующие изменения исходной переменной не пересчитывают копию.",
        "challengeResult": "10 10",
        "options": [
          "10 10",
          "11 11",
          "01 01",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "2 2",
    "options": [
      "2 2",
      "3 3",
      "Ничего",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "exampleResult": "10 10"
  },
  {
    "id": "expand-4-swap-order",
    "codeDeckId": "lab4-mixed-reading",
    "deckId": "variables-values",
    "term": "Присваивание",
    "exampleCode": "int left = 9;\nint right = 14;\nint temp = left;\nleft = right;\nright = temp;\nConsole.WriteLine($\"{left} {right}\");",
    "exampleNote": "Проследите присваивания по порядку. В temp сохраняется значение на момент выполнения этой строки.",
    "kind": "Что выведет код?",
    "challengeCode": "int left = 1;\nint right = 6;\nint temp = left;\nleft = right;\nright = temp;\nConsole.WriteLine($\"{left} {right}\");",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Проследите присваивания по порядку. В temp сохраняется значение на момент выполнения этой строки.",
    "variants": [
      {
        "challengeCode": "int left = 2;\nint right = 7;\nint temp = right;\nleft = right;\nright = temp;\nConsole.WriteLine($\"{left} {right}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проследите присваивания по порядку. В temp сохраняется значение на момент выполнения этой строки.",
        "challengeResult": "7 7",
        "options": [
          "7 7",
          "8 8",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 3;\nint right = 8;\nint temp = left;\nleft = right;\nright = temp;\nConsole.WriteLine($\"{left} {right}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проследите присваивания по порядку. В temp сохраняется значение на момент выполнения этой строки.",
        "challengeResult": "8 3",
        "options": [
          "8 3",
          "9 4",
          "3 8",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 4;\nint right = 9;\nint temp = right;\nleft = right;\nright = temp;\nConsole.WriteLine($\"{left} {right}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проследите присваивания по порядку. В temp сохраняется значение на момент выполнения этой строки.",
        "challengeResult": "9 9",
        "options": [
          "9 9",
          "10 10",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 5;\nint right = 10;\nint temp = left;\nleft = right;\nright = temp;\nConsole.WriteLine($\"{left} {right}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проследите присваивания по порядку. В temp сохраняется значение на момент выполнения этой строки.",
        "challengeResult": "10 5",
        "options": [
          "10 5",
          "11 6",
          "5 01",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 6;\nint right = 11;\nint temp = right;\nleft = right;\nright = temp;\nConsole.WriteLine($\"{left} {right}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проследите присваивания по порядку. В temp сохраняется значение на момент выполнения этой строки.",
        "challengeResult": "11 11",
        "options": [
          "11 11",
          "12 12",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 7;\nint right = 12;\nint temp = left;\nleft = right;\nright = temp;\nConsole.WriteLine($\"{left} {right}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проследите присваивания по порядку. В temp сохраняется значение на момент выполнения этой строки.",
        "challengeResult": "12 7",
        "options": [
          "12 7",
          "13 8",
          "7 21",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 8;\nint right = 13;\nint temp = right;\nleft = right;\nright = temp;\nConsole.WriteLine($\"{left} {right}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проследите присваивания по порядку. В temp сохраняется значение на момент выполнения этой строки.",
        "challengeResult": "13 13",
        "options": [
          "13 13",
          "14 14",
          "31 31",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 9;\nint right = 14;\nint temp = left;\nleft = right;\nright = temp;\nConsole.WriteLine($\"{left} {right}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проследите присваивания по порядку. В temp сохраняется значение на момент выполнения этой строки.",
        "challengeResult": "14 9",
        "options": [
          "14 9",
          "15 10",
          "9 41",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "6 1",
    "options": [
      "6 1",
      "7 2",
      "1 6",
      "Ничего"
    ],
    "correctIndex": 0,
    "exampleResult": "14 9"
  },
  {
    "id": "expand-4-text-capture",
    "codeDeckId": "lab4-mixed-reading",
    "deckId": "typing-and-output",
    "term": "Строковая интерполяция",
    "exampleCode": "int count = 10;\nstring before = $\"Число: {count}\";\ncount = 17;\nstring after = $\"Число: {count}\";\nConsole.WriteLine(before);",
    "exampleNote": "Строка формируется при присваивании. Изменение переменной после этого не изменяет уже созданную строку.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 2;\nstring before = $\"Число: {count}\";\ncount = 9;\nstring after = $\"Число: {count}\";\nConsole.WriteLine(before);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Строка формируется при присваивании. Изменение переменной после этого не изменяет уже созданную строку.",
    "variants": [
      {
        "challengeCode": "int count = 3;\nstring before = $\"Число: {count}\";\ncount = 10;\nstring after = $\"Число: {count}\";\nConsole.WriteLine(after);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Строка формируется при присваивании. Изменение переменной после этого не изменяет уже созданную строку.",
        "challengeResult": "Число: 10",
        "options": [
          "Число: 10",
          "Число: 11",
          "01 :олсиЧ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 4;\nstring before = $\"Число: {count}\";\ncount = 11;\nstring after = $\"Число: {count}\";\nConsole.WriteLine(before);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Строка формируется при присваивании. Изменение переменной после этого не изменяет уже созданную строку.",
        "challengeResult": "Число: 4",
        "options": [
          "Число: 4",
          "Число: 5",
          "4 :олсиЧ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 5;\nstring before = $\"Число: {count}\";\ncount = 12;\nstring after = $\"Число: {count}\";\nConsole.WriteLine(after);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Строка формируется при присваивании. Изменение переменной после этого не изменяет уже созданную строку.",
        "challengeResult": "Число: 12",
        "options": [
          "Число: 12",
          "Число: 13",
          "21 :олсиЧ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 6;\nstring before = $\"Число: {count}\";\ncount = 13;\nstring after = $\"Число: {count}\";\nConsole.WriteLine(before);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Строка формируется при присваивании. Изменение переменной после этого не изменяет уже созданную строку.",
        "challengeResult": "Число: 6",
        "options": [
          "Число: 6",
          "Число: 7",
          "6 :олсиЧ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 7;\nstring before = $\"Число: {count}\";\ncount = 14;\nstring after = $\"Число: {count}\";\nConsole.WriteLine(after);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Строка формируется при присваивании. Изменение переменной после этого не изменяет уже созданную строку.",
        "challengeResult": "Число: 14",
        "options": [
          "Число: 14",
          "Число: 15",
          "41 :олсиЧ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 8;\nstring before = $\"Число: {count}\";\ncount = 15;\nstring after = $\"Число: {count}\";\nConsole.WriteLine(before);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Строка формируется при присваивании. Изменение переменной после этого не изменяет уже созданную строку.",
        "challengeResult": "Число: 8",
        "options": [
          "Число: 8",
          "Число: 9",
          "8 :олсиЧ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 9;\nstring before = $\"Число: {count}\";\ncount = 16;\nstring after = $\"Число: {count}\";\nConsole.WriteLine(after);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Строка формируется при присваивании. Изменение переменной после этого не изменяет уже созданную строку.",
        "challengeResult": "Число: 16",
        "options": [
          "Число: 16",
          "Число: 17",
          "61 :олсиЧ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 10;\nstring before = $\"Число: {count}\";\ncount = 17;\nstring after = $\"Число: {count}\";\nConsole.WriteLine(before);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Строка формируется при присваивании. Изменение переменной после этого не изменяет уже созданную строку.",
        "challengeResult": "Число: 10",
        "options": [
          "Число: 10",
          "Число: 11",
          "01 :олсиЧ",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "Число: 2",
    "options": [
      "Число: 2",
      "Число: 3",
      "2 :олсиЧ",
      "Ничего"
    ],
    "correctIndex": 0,
    "exampleResult": "Число: 10"
  },
  {
    "id": "expand-4-text-order",
    "codeDeckId": "lab4-mixed-reading",
    "deckId": "csharp-data-types",
    "term": "string",
    "exampleCode": "Console.WriteLine(10 + 11 + \"9\");",
    "exampleNote": "Числа до первого строкового операнда складываются. После появления строки оператор + соединяет текст.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(2 + 3 + \"1\");",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Числа до первого строкового операнда складываются. После появления строки оператор + соединяет текст.",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(\"3\" + 4 + 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Числа до первого строкового операнда складываются. После появления строки оператор + соединяет текст.",
        "challengeResult": "342",
        "options": [
          "342",
          "343",
          "341",
          "344"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(4 + 5 + \"3\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Числа до первого строкового операнда складываются. После появления строки оператор + соединяет текст.",
        "challengeResult": "93",
        "options": [
          "93",
          "94",
          "92",
          "95"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"5\" + 6 + 4);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Числа до первого строкового операнда складываются. После появления строки оператор + соединяет текст.",
        "challengeResult": "564",
        "options": [
          "564",
          "565",
          "563",
          "566"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(6 + 7 + \"5\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Числа до первого строкового операнда складываются. После появления строки оператор + соединяет текст.",
        "challengeResult": "135",
        "options": [
          "135",
          "136",
          "134",
          "137"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"7\" + 8 + 6);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Числа до первого строкового операнда складываются. После появления строки оператор + соединяет текст.",
        "challengeResult": "786",
        "options": [
          "786",
          "787",
          "785",
          "788"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(8 + 9 + \"7\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Числа до первого строкового операнда складываются. После появления строки оператор + соединяет текст.",
        "challengeResult": "177",
        "options": [
          "177",
          "178",
          "176",
          "179"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"9\" + 10 + 8);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Числа до первого строкового операнда складываются. После появления строки оператор + соединяет текст.",
        "challengeResult": "9108",
        "options": [
          "9108",
          "9109",
          "9107",
          "9110"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(10 + 11 + \"9\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Числа до первого строкового операнда складываются. После появления строки оператор + соединяет текст.",
        "challengeResult": "219",
        "options": [
          "219",
          "220",
          "218",
          "221"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "51",
    "options": [
      "51",
      "52",
      "50",
      "53"
    ],
    "correctIndex": 0,
    "exampleResult": "219"
  },
  {
    "id": "expand-4-name-case",
    "codeDeckId": "lab4-mixed-reading",
    "deckId": "variables-values",
    "term": "Идентификатор",
    "exampleCode": "int value = 10;\nint Value = 15;\nvalue = value;\nConsole.WriteLine($\"{value} {Value}\");",
    "exampleNote": "Регистр входит в имя переменной. Проверьте точное имя справа и слева каждого присваивания.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 2;\nint Value = 7;\nvalue = value;\nConsole.WriteLine($\"{value} {Value}\");",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Регистр входит в имя переменной. Проверьте точное имя справа и слева каждого присваивания.",
    "variants": [
      {
        "challengeCode": "int value = 3;\nint Value = 8;\nvalue = Value;\nConsole.WriteLine($\"{value} {Value}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Регистр входит в имя переменной. Проверьте точное имя справа и слева каждого присваивания.",
        "challengeResult": "8 8",
        "options": [
          "8 8",
          "9 9",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 4;\nint Value = 9;\nvalue = value;\nConsole.WriteLine($\"{value} {Value}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Регистр входит в имя переменной. Проверьте точное имя справа и слева каждого присваивания.",
        "challengeResult": "4 9",
        "options": [
          "4 9",
          "5 10",
          "9 4",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 5;\nint Value = 10;\nvalue = Value;\nConsole.WriteLine($\"{value} {Value}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Регистр входит в имя переменной. Проверьте точное имя справа и слева каждого присваивания.",
        "challengeResult": "10 10",
        "options": [
          "10 10",
          "11 11",
          "01 01",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 6;\nint Value = 11;\nvalue = value;\nConsole.WriteLine($\"{value} {Value}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Регистр входит в имя переменной. Проверьте точное имя справа и слева каждого присваивания.",
        "challengeResult": "6 11",
        "options": [
          "6 11",
          "7 12",
          "11 6",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 7;\nint Value = 12;\nvalue = Value;\nConsole.WriteLine($\"{value} {Value}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Регистр входит в имя переменной. Проверьте точное имя справа и слева каждого присваивания.",
        "challengeResult": "12 12",
        "options": [
          "12 12",
          "13 13",
          "21 21",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 8;\nint Value = 13;\nvalue = value;\nConsole.WriteLine($\"{value} {Value}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Регистр входит в имя переменной. Проверьте точное имя справа и слева каждого присваивания.",
        "challengeResult": "8 13",
        "options": [
          "8 13",
          "9 14",
          "31 8",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 9;\nint Value = 14;\nvalue = Value;\nConsole.WriteLine($\"{value} {Value}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Регистр входит в имя переменной. Проверьте точное имя справа и слева каждого присваивания.",
        "challengeResult": "14 14",
        "options": [
          "14 14",
          "15 15",
          "41 41",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 10;\nint Value = 15;\nvalue = value;\nConsole.WriteLine($\"{value} {Value}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Регистр входит в имя переменной. Проверьте точное имя справа и слева каждого присваивания.",
        "challengeResult": "10 15",
        "options": [
          "10 15",
          "11 16",
          "51 01",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "2 7",
    "options": [
      "2 7",
      "3 8",
      "7 2",
      "Ничего"
    ],
    "correctIndex": 0,
    "exampleResult": "10 15"
  },
  {
    "id": "expand-4-bool-copy",
    "codeDeckId": "lab4-mixed-reading",
    "deckId": "csharp-data-types",
    "term": "bool",
    "exampleCode": "bool ready = true;\nbool saved = ready;\nready = true;\nConsole.WriteLine(10);\nConsole.WriteLine(saved);\nConsole.WriteLine(ready);",
    "exampleNote": "Копия bool сохраняет значение на момент присваивания. Выводятся значения выбранных переменных, а не их имена.",
    "kind": "Что выведет код?",
    "challengeCode": "bool ready = true;\nbool saved = ready;\nready = false;\nConsole.WriteLine(2);\nConsole.WriteLine(saved);\nConsole.WriteLine(ready);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Копия bool сохраняет значение на момент присваивания. Выводятся значения выбранных переменных, а не их имена.",
    "variants": [
      {
        "challengeCode": "bool ready = false;\nbool saved = ready;\nready = true;\nConsole.WriteLine(3);\nConsole.WriteLine(ready);\nConsole.WriteLine(saved);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Копия bool сохраняет значение на момент присваивания. Выводятся значения выбранных переменных, а не их имена.",
        "challengeResult": "3\nTrue\nFalse",
        "options": [
          "3\nTrue\nFalse",
          "False\nTrue\n3",
          "4\nTrue\nFalse",
          "3TrueFalse"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ready = true;\nbool saved = ready;\nready = true;\nConsole.WriteLine(4);\nConsole.WriteLine(saved);\nConsole.WriteLine(ready);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Копия bool сохраняет значение на момент присваивания. Выводятся значения выбранных переменных, а не их имена.",
        "challengeResult": "4\nTrue\nTrue",
        "options": [
          "4\nTrue\nTrue",
          "True\nTrue\n4",
          "5\nTrue\nTrue",
          "4TrueTrue"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ready = false;\nbool saved = ready;\nready = false;\nConsole.WriteLine(5);\nConsole.WriteLine(ready);\nConsole.WriteLine(saved);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Копия bool сохраняет значение на момент присваивания. Выводятся значения выбранных переменных, а не их имена.",
        "challengeResult": "5\nFalse\nFalse",
        "options": [
          "5\nFalse\nFalse",
          "False\nFalse\n5",
          "6\nFalse\nFalse",
          "5FalseFalse"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ready = true;\nbool saved = ready;\nready = true;\nConsole.WriteLine(6);\nConsole.WriteLine(saved);\nConsole.WriteLine(ready);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Копия bool сохраняет значение на момент присваивания. Выводятся значения выбранных переменных, а не их имена.",
        "challengeResult": "6\nTrue\nTrue",
        "options": [
          "6\nTrue\nTrue",
          "True\nTrue\n6",
          "7\nTrue\nTrue",
          "6TrueTrue"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ready = false;\nbool saved = ready;\nready = true;\nConsole.WriteLine(7);\nConsole.WriteLine(ready);\nConsole.WriteLine(saved);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Копия bool сохраняет значение на момент присваивания. Выводятся значения выбранных переменных, а не их имена.",
        "challengeResult": "7\nTrue\nFalse",
        "options": [
          "7\nTrue\nFalse",
          "False\nTrue\n7",
          "8\nTrue\nFalse",
          "7TrueFalse"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ready = true;\nbool saved = ready;\nready = false;\nConsole.WriteLine(8);\nConsole.WriteLine(saved);\nConsole.WriteLine(ready);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Копия bool сохраняет значение на момент присваивания. Выводятся значения выбранных переменных, а не их имена.",
        "challengeResult": "8\nTrue\nFalse",
        "options": [
          "8\nTrue\nFalse",
          "False\nTrue\n8",
          "9\nTrue\nFalse",
          "8TrueFalse"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ready = false;\nbool saved = ready;\nready = true;\nConsole.WriteLine(9);\nConsole.WriteLine(ready);\nConsole.WriteLine(saved);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Копия bool сохраняет значение на момент присваивания. Выводятся значения выбранных переменных, а не их имена.",
        "challengeResult": "9\nTrue\nFalse",
        "options": [
          "9\nTrue\nFalse",
          "False\nTrue\n9",
          "10\nTrue\nFalse",
          "9TrueFalse"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "bool ready = true;\nbool saved = ready;\nready = true;\nConsole.WriteLine(10);\nConsole.WriteLine(saved);\nConsole.WriteLine(ready);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Копия bool сохраняет значение на момент присваивания. Выводятся значения выбранных переменных, а не их имена.",
        "challengeResult": "10\nTrue\nTrue",
        "options": [
          "10\nTrue\nTrue",
          "True\nTrue\n10",
          "11\nTrue\nTrue",
          "10TrueTrue"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "2\nTrue\nFalse",
    "options": [
      "2\nTrue\nFalse",
      "False\nTrue\n2",
      "3\nTrue\nFalse",
      "2TrueFalse"
    ],
    "correctIndex": 0,
    "exampleResult": "10\nTrue\nTrue"
  },
  {
    "id": "expand-4-char-position",
    "codeDeckId": "lab4-mixed-reading",
    "deckId": "csharp-data-types",
    "term": "char",
    "exampleCode": "char first = 'I';\nchar second = 'S';\nConsole.WriteLine($\"{first}:{second}\");",
    "exampleNote": "Символ подставляется в место интерполяции. Порядок символов задаётся порядком вставок в строке.",
    "kind": "Что выведет код?",
    "challengeCode": "char first = 'A';\nchar second = 'K';\nConsole.WriteLine($\"{first}:{second}\");",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Символ подставляется в место интерполяции. Порядок символов задаётся порядком вставок в строке.",
    "variants": [
      {
        "challengeCode": "char first = 'B';\nchar second = 'L';\nConsole.WriteLine($\"{second}:{first}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Символ подставляется в место интерполяции. Порядок символов задаётся порядком вставок в строке.",
        "challengeResult": "L:B",
        "options": [
          "L:B",
          "B:L",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "char first = 'C';\nchar second = 'M';\nConsole.WriteLine($\"{first}:{second}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Символ подставляется в место интерполяции. Порядок символов задаётся порядком вставок в строке.",
        "challengeResult": "C:M",
        "options": [
          "C:M",
          "M:C",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "char first = 'D';\nchar second = 'N';\nConsole.WriteLine($\"{second}:{first}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Символ подставляется в место интерполяции. Порядок символов задаётся порядком вставок в строке.",
        "challengeResult": "N:D",
        "options": [
          "N:D",
          "D:N",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "char first = 'E';\nchar second = 'O';\nConsole.WriteLine($\"{first}:{second}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Символ подставляется в место интерполяции. Порядок символов задаётся порядком вставок в строке.",
        "challengeResult": "E:O",
        "options": [
          "E:O",
          "O:E",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "char first = 'F';\nchar second = 'P';\nConsole.WriteLine($\"{second}:{first}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Символ подставляется в место интерполяции. Порядок символов задаётся порядком вставок в строке.",
        "challengeResult": "P:F",
        "options": [
          "P:F",
          "F:P",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "char first = 'G';\nchar second = 'Q';\nConsole.WriteLine($\"{first}:{second}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Символ подставляется в место интерполяции. Порядок символов задаётся порядком вставок в строке.",
        "challengeResult": "G:Q",
        "options": [
          "G:Q",
          "Q:G",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "char first = 'H';\nchar second = 'R';\nConsole.WriteLine($\"{second}:{first}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Символ подставляется в место интерполяции. Порядок символов задаётся порядком вставок в строке.",
        "challengeResult": "R:H",
        "options": [
          "R:H",
          "H:R",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "char first = 'I';\nchar second = 'S';\nConsole.WriteLine($\"{first}:{second}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Символ подставляется в место интерполяции. Порядок символов задаётся порядком вставок в строке.",
        "challengeResult": "I:S",
        "options": [
          "I:S",
          "S:I",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "A:K",
    "options": [
      "A:K",
      "K:A",
      "Ничего",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "exampleResult": "I:S"
  },
  {
    "id": "expand-4-inferred-copy",
    "codeDeckId": "lab4-mixed-reading",
    "deckId": "typing-and-output",
    "term": "var",
    "exampleCode": "var text = \"11\";\nvar saved = text;\ntext = \"16\";\nConsole.WriteLine(saved + 9);",
    "exampleNote": "var определяет тип по начальному значению. Копия получает значение до последующего переприсваивания.",
    "kind": "Что выведет код?",
    "challengeCode": "var text = \"3\";\nvar saved = text;\ntext = \"8\";\nConsole.WriteLine(saved + 1);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "var определяет тип по начальному значению. Копия получает значение до последующего переприсваивания.",
    "variants": [
      {
        "challengeCode": "var text = \"4\";\nvar saved = text;\ntext = \"9\";\nConsole.WriteLine(text + 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "var определяет тип по начальному значению. Копия получает значение до последующего переприсваивания.",
        "challengeResult": "92",
        "options": [
          "92",
          "93",
          "91",
          "94"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "var text = \"5\";\nvar saved = text;\ntext = \"10\";\nConsole.WriteLine(saved + 3);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "var определяет тип по начальному значению. Копия получает значение до последующего переприсваивания.",
        "challengeResult": "53",
        "options": [
          "53",
          "54",
          "52",
          "55"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "var text = \"6\";\nvar saved = text;\ntext = \"11\";\nConsole.WriteLine(text + 4);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "var определяет тип по начальному значению. Копия получает значение до последующего переприсваивания.",
        "challengeResult": "114",
        "options": [
          "114",
          "115",
          "113",
          "116"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "var text = \"7\";\nvar saved = text;\ntext = \"12\";\nConsole.WriteLine(saved + 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "var определяет тип по начальному значению. Копия получает значение до последующего переприсваивания.",
        "challengeResult": "75",
        "options": [
          "75",
          "76",
          "74",
          "77"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "var text = \"8\";\nvar saved = text;\ntext = \"13\";\nConsole.WriteLine(text + 6);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "var определяет тип по начальному значению. Копия получает значение до последующего переприсваивания.",
        "challengeResult": "136",
        "options": [
          "136",
          "137",
          "135",
          "138"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "var text = \"9\";\nvar saved = text;\ntext = \"14\";\nConsole.WriteLine(saved + 7);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "var определяет тип по начальному значению. Копия получает значение до последующего переприсваивания.",
        "challengeResult": "97",
        "options": [
          "97",
          "98",
          "96",
          "99"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "var text = \"10\";\nvar saved = text;\ntext = \"15\";\nConsole.WriteLine(text + 8);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "var определяет тип по начальному значению. Копия получает значение до последующего переприсваивания.",
        "challengeResult": "158",
        "options": [
          "158",
          "159",
          "157",
          "160"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "var text = \"11\";\nvar saved = text;\ntext = \"16\";\nConsole.WriteLine(saved + 9);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "var определяет тип по начальному значению. Копия получает значение до последующего переприсваивания.",
        "challengeResult": "119",
        "options": [
          "119",
          "120",
          "118",
          "121"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "31",
    "options": [
      "31",
      "32",
      "30",
      "33"
    ],
    "correctIndex": 0,
    "exampleResult": "119"
  },
  {
    "id": "expand-4-output-layout",
    "codeDeckId": "lab4-mixed-reading",
    "deckId": "typing-and-output",
    "term": "Console.WriteLine",
    "exampleCode": "Console.Write(\"9\");\nConsole.WriteLine(\"10\");\nConsole.WriteLine(\"11\");\nConsole.Write(\"12\");",
    "exampleNote": "Write оставляет курсор на строке. WriteLine переносит курсор после вывода своего значения.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.Write(\"1\");\nConsole.WriteLine(\"2\");\nConsole.WriteLine(\"3\");\nConsole.Write(\"4\");",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Write оставляет курсор на строке. WriteLine переносит курсор после вывода своего значения.",
    "variants": [
      {
        "challengeCode": "Console.Write(\"2\");\nConsole.Write(\"3\");\nConsole.WriteLine(\"4\");\nConsole.Write(\"5\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Write оставляет курсор на строке. WriteLine переносит курсор после вывода своего значения.",
        "challengeResult": "234\n5",
        "options": [
          "234\n5",
          "5\n234",
          "235\n6",
          "2345"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.Write(\"3\");\nConsole.WriteLine(\"4\");\nConsole.WriteLine(\"5\");\nConsole.Write(\"6\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Write оставляет курсор на строке. WriteLine переносит курсор после вывода своего значения.",
        "challengeResult": "34\n5\n6",
        "options": [
          "34\n5\n6",
          "6\n5\n34",
          "35\n6\n7",
          "3456"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.Write(\"4\");\nConsole.Write(\"5\");\nConsole.WriteLine(\"6\");\nConsole.Write(\"7\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Write оставляет курсор на строке. WriteLine переносит курсор после вывода своего значения.",
        "challengeResult": "456\n7",
        "options": [
          "456\n7",
          "7\n456",
          "457\n8",
          "4567"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.Write(\"5\");\nConsole.WriteLine(\"6\");\nConsole.WriteLine(\"7\");\nConsole.Write(\"8\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Write оставляет курсор на строке. WriteLine переносит курсор после вывода своего значения.",
        "challengeResult": "56\n7\n8",
        "options": [
          "56\n7\n8",
          "8\n7\n56",
          "57\n8\n9",
          "5678"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.Write(\"6\");\nConsole.Write(\"7\");\nConsole.WriteLine(\"8\");\nConsole.Write(\"9\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Write оставляет курсор на строке. WriteLine переносит курсор после вывода своего значения.",
        "challengeResult": "678\n9",
        "options": [
          "678\n9",
          "9\n678",
          "679\n10",
          "6789"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.Write(\"7\");\nConsole.WriteLine(\"8\");\nConsole.WriteLine(\"9\");\nConsole.Write(\"10\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Write оставляет курсор на строке. WriteLine переносит курсор после вывода своего значения.",
        "challengeResult": "78\n9\n10",
        "options": [
          "78\n9\n10",
          "10\n9\n78",
          "79\n10\n11",
          "78910"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.Write(\"8\");\nConsole.Write(\"9\");\nConsole.WriteLine(\"10\");\nConsole.Write(\"11\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Write оставляет курсор на строке. WriteLine переносит курсор после вывода своего значения.",
        "challengeResult": "8910\n11",
        "options": [
          "8910\n11",
          "11\n8910",
          "8911\n12",
          "891011"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.Write(\"9\");\nConsole.WriteLine(\"10\");\nConsole.WriteLine(\"11\");\nConsole.Write(\"12\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Write оставляет курсор на строке. WriteLine переносит курсор после вывода своего значения.",
        "challengeResult": "910\n11\n12",
        "options": [
          "910\n11\n12",
          "12\n11\n910",
          "911\n12\n13",
          "9101112"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "12\n3\n4",
    "options": [
      "12\n3\n4",
      "4\n3\n12",
      "13\n4\n5",
      "1234"
    ],
    "correctIndex": 0,
    "exampleResult": "910\n11\n12"
  },
  {
    "id": "expand-4-literal-parentheses",
    "codeDeckId": "lab4-mixed-reading",
    "deckId": "variables-values",
    "term": "Литерал",
    "exampleCode": "Console.WriteLine(\"Ответ: \" + 10 + 12);",
    "exampleNote": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(\"Ответ: \" + 2 + 4);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + (3 + 5));",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 8",
        "options": [
          "Ответ: 8",
          "Ответ: 9",
          "8 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + 4 + 6);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 46",
        "options": [
          "Ответ: 46",
          "Ответ: 47",
          "64 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + (5 + 7));",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 12",
        "options": [
          "Ответ: 12",
          "Ответ: 13",
          "21 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + 6 + 8);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 68",
        "options": [
          "Ответ: 68",
          "Ответ: 69",
          "86 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + (7 + 9));",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 16",
        "options": [
          "Ответ: 16",
          "Ответ: 17",
          "61 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + 8 + 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 810",
        "options": [
          "Ответ: 810",
          "Ответ: 811",
          "018 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + (9 + 11));",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 20",
        "options": [
          "Ответ: 20",
          "Ответ: 21",
          "02 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(\"Ответ: \" + 10 + 12);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Скобки определяют, сложатся ли числовые литералы до соединения со строкой.",
        "challengeResult": "Ответ: 1012",
        "options": [
          "Ответ: 1012",
          "Ответ: 1013",
          "2101 :тевтО",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "Ответ: 24",
    "options": [
      "Ответ: 24",
      "Ответ: 25",
      "42 :тевтО",
      "Ничего"
    ],
    "correctIndex": 0,
    "exampleResult": "Ответ: 1012"
  },
  {
    "id": "expand-5-cast-side",
    "codeDeckId": "lab5-mixed-reading",
    "deckId": "input-operations-conversions",
    "term": "Явное преобразование",
    "exampleCode": "int value = 23;\ndouble half = (double)value / 2;\nConsole.WriteLine(half * 2);",
    "exampleNote": "Если приведение находится после целочисленного деления, потерянная дробная часть не восстанавливается.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 7;\ndouble half = (double)value / 2;\nConsole.WriteLine(half * 2);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Если приведение находится после целочисленного деления, потерянная дробная часть не восстанавливается.",
    "variants": [
      {
        "challengeCode": "int value = 9;\ndouble half = (double)(value / 2);\nConsole.WriteLine(half * 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Если приведение находится после целочисленного деления, потерянная дробная часть не восстанавливается.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 11;\ndouble half = (double)value / 2;\nConsole.WriteLine(half * 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Если приведение находится после целочисленного деления, потерянная дробная часть не восстанавливается.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 13;\ndouble half = (double)(value / 2);\nConsole.WriteLine(half * 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Если приведение находится после целочисленного деления, потерянная дробная часть не восстанавливается.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 15;\ndouble half = (double)value / 2;\nConsole.WriteLine(half * 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Если приведение находится после целочисленного деления, потерянная дробная часть не восстанавливается.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 17;\ndouble half = (double)(value / 2);\nConsole.WriteLine(half * 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Если приведение находится после целочисленного деления, потерянная дробная часть не восстанавливается.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 19;\ndouble half = (double)value / 2;\nConsole.WriteLine(half * 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Если приведение находится после целочисленного деления, потерянная дробная часть не восстанавливается.",
        "challengeResult": "19",
        "options": [
          "19",
          "20",
          "18",
          "21"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 21;\ndouble half = (double)(value / 2);\nConsole.WriteLine(half * 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Если приведение находится после целочисленного деления, потерянная дробная часть не восстанавливается.",
        "challengeResult": "20",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 23;\ndouble half = (double)value / 2;\nConsole.WriteLine(half * 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Если приведение находится после целочисленного деления, потерянная дробная часть не восстанавливается.",
        "challengeResult": "23",
        "options": [
          "23",
          "24",
          "22",
          "25"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "7",
    "options": [
      "7",
      "8",
      "6",
      "9"
    ],
    "correctIndex": 0,
    "exampleResult": "23"
  },
  {
    "id": "expand-5-division-sign",
    "codeDeckId": "lab5-mixed-reading",
    "deckId": "input-operations-conversions",
    "term": "Целочисленное деление",
    "exampleCode": "int left = 1 * 35;\nint right = 4;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
    "exampleNote": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
    "kind": "Что выведет код?",
    "challengeCode": "int left = 1 * 11;\nint right = 2;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
    "variants": [
      {
        "challengeCode": "int left = -1 * 14;\nint right = 3;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "-4\n-2",
        "options": [
          "-4\n-2",
          "-2\n-4",
          "-5\n-3",
          "-4-2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 1 * 17;\nint right = 4;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "4\n1",
        "options": [
          "4\n1",
          "1\n4",
          "5\n2",
          "41"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = -1 * 20;\nint right = 2;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "-10\n0",
        "options": [
          "-10\n0",
          "0\n-10",
          "-11\n1",
          "-100"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 1 * 23;\nint right = 3;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "7\n2",
        "options": [
          "7\n2",
          "2\n7",
          "8\n3",
          "72"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = -1 * 26;\nint right = 4;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "-6\n-2",
        "options": [
          "-6\n-2",
          "-2\n-6",
          "-7\n-3",
          "-6-2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 1 * 29;\nint right = 2;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "14\n1",
        "options": [
          "14\n1",
          "1\n14",
          "15\n2",
          "141"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = -1 * 32;\nint right = 3;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "-10\n-2",
        "options": [
          "-10\n-2",
          "-2\n-10",
          "-11\n-3",
          "-10-2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int left = 1 * 35;\nint right = 4;\nConsole.WriteLine(left / right);\nConsole.WriteLine(left % right);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Целочисленное деление отбрасывает дробную часть в направлении нуля. Знак определяется знаками операндов.",
        "challengeResult": "8\n3",
        "options": [
          "8\n3",
          "3\n8",
          "9\n4",
          "83"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "5\n1",
    "options": [
      "5\n1",
      "1\n5",
      "6\n2",
      "51"
    ],
    "correctIndex": 0,
    "exampleResult": "8\n3"
  },
  {
    "id": "expand-5-compound-order",
    "codeDeckId": "lab5-mixed-reading",
    "deckId": "input-operations-conversions",
    "term": "Составное присваивание",
    "exampleCode": "int value = 11;\nvalue += 3;\nvalue *= 2;\nConsole.WriteLine(value);",
    "exampleNote": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 3;\nvalue += 3;\nvalue *= 2;\nConsole.WriteLine(value);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
    "variants": [
      {
        "challengeCode": "int value = 4;\nvalue *= 2;\nvalue += 3;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 5;\nvalue += 3;\nvalue *= 2;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 6;\nvalue *= 2;\nvalue += 3;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 7;\nvalue += 3;\nvalue *= 2;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "20",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 8;\nvalue *= 2;\nvalue += 3;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "19",
        "options": [
          "19",
          "20",
          "18",
          "21"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 9;\nvalue += 3;\nvalue *= 2;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "24",
        "options": [
          "24",
          "25",
          "23",
          "26"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 10;\nvalue *= 2;\nvalue += 3;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "23",
        "options": [
          "23",
          "24",
          "22",
          "25"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 11;\nvalue += 3;\nvalue *= 2;\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая операция использует результат предыдущей строки. Умножение до прибавления и после него даёт разные результаты.",
        "challengeResult": "28",
        "options": [
          "28",
          "29",
          "27",
          "30"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "12",
    "options": [
      "12",
      "13",
      "11",
      "14"
    ],
    "correctIndex": 0,
    "exampleResult": "28"
  },
  {
    "id": "expand-5-parse-location",
    "codeDeckId": "lab5-mixed-reading",
    "deckId": "input-operations-conversions",
    "term": "Преобразование типов",
    "exampleCode": "string text = \"13\";\nConsole.WriteLine(int.Parse(text) + 10);",
    "exampleNote": "После Parse получается число. Без преобразования строковый операнд заставляет + соединять текст.",
    "kind": "Что выведет код?",
    "challengeCode": "string text = \"5\";\nConsole.WriteLine(int.Parse(text) + 2);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "После Parse получается число. Без преобразования строковый операнд заставляет + соединять текст.",
    "variants": [
      {
        "challengeCode": "string text = \"6\";\nConsole.WriteLine(text + 3);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После Parse получается число. Без преобразования строковый операнд заставляет + соединять текст.",
        "challengeResult": "63",
        "options": [
          "63",
          "64",
          "62",
          "65"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "string text = \"7\";\nConsole.WriteLine(int.Parse(text) + 4);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После Parse получается число. Без преобразования строковый операнд заставляет + соединять текст.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "string text = \"8\";\nConsole.WriteLine(text + 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После Parse получается число. Без преобразования строковый операнд заставляет + соединять текст.",
        "challengeResult": "85",
        "options": [
          "85",
          "86",
          "84",
          "87"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "string text = \"9\";\nConsole.WriteLine(int.Parse(text) + 6);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После Parse получается число. Без преобразования строковый операнд заставляет + соединять текст.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "string text = \"10\";\nConsole.WriteLine(text + 7);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После Parse получается число. Без преобразования строковый операнд заставляет + соединять текст.",
        "challengeResult": "107",
        "options": [
          "107",
          "108",
          "106",
          "109"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "string text = \"11\";\nConsole.WriteLine(int.Parse(text) + 8);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После Parse получается число. Без преобразования строковый операнд заставляет + соединять текст.",
        "challengeResult": "19",
        "options": [
          "19",
          "20",
          "18",
          "21"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "string text = \"12\";\nConsole.WriteLine(text + 9);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После Parse получается число. Без преобразования строковый операнд заставляет + соединять текст.",
        "challengeResult": "129",
        "options": [
          "129",
          "130",
          "128",
          "131"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "string text = \"13\";\nConsole.WriteLine(int.Parse(text) + 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После Parse получается число. Без преобразования строковый операнд заставляет + соединять текст.",
        "challengeResult": "23",
        "options": [
          "23",
          "24",
          "22",
          "25"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "7",
    "options": [
      "7",
      "8",
      "6",
      "9"
    ],
    "correctIndex": 0,
    "exampleResult": "23"
  },
  {
    "id": "expand-5-group-operations",
    "codeDeckId": "lab5-mixed-reading",
    "deckId": "input-operations-conversions",
    "term": "Скобки в выражении",
    "exampleCode": "int a = 10;\nint b = 12;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
    "exampleNote": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = 2;\nint b = 4;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
    "variants": [
      {
        "challengeCode": "int a = 3;\nint b = 5;\nConsole.WriteLine(a + b * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "18\n8",
        "options": [
          "18\n8",
          "8\n18",
          "19\n9",
          "188"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 4;\nint b = 6;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "30\n10",
        "options": [
          "30\n10",
          "10\n30",
          "31\n11",
          "3010"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 5;\nint b = 7;\nConsole.WriteLine(a + b * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "26\n12",
        "options": [
          "26\n12",
          "12\n26",
          "27\n13",
          "2612"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 6;\nint b = 8;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "42\n14",
        "options": [
          "42\n14",
          "14\n42",
          "43\n15",
          "4214"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 7;\nint b = 9;\nConsole.WriteLine(a + b * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "34\n16",
        "options": [
          "34\n16",
          "16\n34",
          "35\n17",
          "3416"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 8;\nint b = 10;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "54\n18",
        "options": [
          "54\n18",
          "18\n54",
          "55\n19",
          "5418"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 9;\nint b = 11;\nConsole.WriteLine(a + b * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "42\n20",
        "options": [
          "42\n20",
          "20\n42",
          "43\n21",
          "4220"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 10;\nint b = 12;\nConsole.WriteLine((a + b) * 3);\nConsole.WriteLine(a + b);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляют скобки, затем умножение и деление. Операции одного приоритета выполняются слева направо.",
        "challengeResult": "66\n22",
        "options": [
          "66\n22",
          "22\n66",
          "67\n23",
          "6622"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "18\n6",
    "options": [
      "18\n6",
      "6\n18",
      "19\n7",
      "186"
    ],
    "correctIndex": 0,
    "exampleResult": "66\n22"
  },
  {
    "id": "expand-5-negative-cast",
    "codeDeckId": "lab5-mixed-reading",
    "deckId": "input-operations-conversions",
    "term": "Потеря данных",
    "exampleCode": "double value = -11.8;\nint whole = (int)value;\nConsole.WriteLine(whole + 2);",
    "exampleNote": "Приведение double к int отбрасывает дробную часть к нулю. Оно не округляет до ближайшего целого.",
    "kind": "Что выведет код?",
    "challengeCode": "double value = -3.8;\nint whole = (int)value;\nConsole.WriteLine(whole + 2);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Приведение double к int отбрасывает дробную часть к нулю. Оно не округляет до ближайшего целого.",
    "variants": [
      {
        "challengeCode": "double value = -4.8;\nint whole = (int)value;\nConsole.WriteLine(whole - 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Приведение double к int отбрасывает дробную часть к нулю. Оно не округляет до ближайшего целого.",
        "challengeResult": "-6",
        "options": [
          "-6",
          "-5",
          "-7",
          "-4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "double value = -5.8;\nint whole = (int)value;\nConsole.WriteLine(whole + 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Приведение double к int отбрасывает дробную часть к нулю. Оно не округляет до ближайшего целого.",
        "challengeResult": "-3",
        "options": [
          "-3",
          "-2",
          "-4",
          "-1"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "double value = -6.8;\nint whole = (int)value;\nConsole.WriteLine(whole - 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Приведение double к int отбрасывает дробную часть к нулю. Оно не округляет до ближайшего целого.",
        "challengeResult": "-8",
        "options": [
          "-8",
          "-7",
          "-9",
          "-6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "double value = -7.8;\nint whole = (int)value;\nConsole.WriteLine(whole + 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Приведение double к int отбрасывает дробную часть к нулю. Оно не округляет до ближайшего целого.",
        "challengeResult": "-5",
        "options": [
          "-5",
          "-4",
          "-6",
          "-3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "double value = -8.8;\nint whole = (int)value;\nConsole.WriteLine(whole - 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Приведение double к int отбрасывает дробную часть к нулю. Оно не округляет до ближайшего целого.",
        "challengeResult": "-10",
        "options": [
          "-10",
          "-9",
          "-11",
          "-8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "double value = -9.8;\nint whole = (int)value;\nConsole.WriteLine(whole + 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Приведение double к int отбрасывает дробную часть к нулю. Оно не округляет до ближайшего целого.",
        "challengeResult": "-7",
        "options": [
          "-7",
          "-6",
          "-8",
          "-5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "double value = -10.8;\nint whole = (int)value;\nConsole.WriteLine(whole - 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Приведение double к int отбрасывает дробную часть к нулю. Оно не округляет до ближайшего целого.",
        "challengeResult": "-12",
        "options": [
          "-12",
          "-11",
          "-13",
          "-10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "double value = -11.8;\nint whole = (int)value;\nConsole.WriteLine(whole + 2);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Приведение double к int отбрасывает дробную часть к нулю. Оно не округляет до ближайшего целого.",
        "challengeResult": "-9",
        "options": [
          "-9",
          "-8",
          "-10",
          "-7"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "-1",
    "options": [
      "-1",
      "0",
      "-2",
      "1"
    ],
    "correctIndex": 0,
    "exampleResult": "-9"
  },
  {
    "id": "expand-5-saved-expression",
    "codeDeckId": "lab5-mixed-reading",
    "deckId": "input-operations-conversions",
    "term": "Выражение",
    "exampleCode": "int x = 10;\nint saved = x * 3;\nx *= 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
    "exampleNote": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
    "kind": "Что выведет код?",
    "challengeCode": "int x = 2;\nint saved = x * 3;\nx *= 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
    "variants": [
      {
        "challengeCode": "int x = 3;\nint saved = x * 3;\nx += 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "9\n5",
        "options": [
          "9\n5",
          "5\n9",
          "10\n6",
          "95"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 4;\nint saved = x * 3;\nx *= 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "12\n8",
        "options": [
          "12\n8",
          "8\n12",
          "13\n9",
          "128"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 5;\nint saved = x * 3;\nx += 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "15\n7",
        "options": [
          "15\n7",
          "7\n15",
          "16\n8",
          "157"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 6;\nint saved = x * 3;\nx *= 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "18\n12",
        "options": [
          "18\n12",
          "12\n18",
          "19\n13",
          "1812"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 7;\nint saved = x * 3;\nx += 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "21\n9",
        "options": [
          "21\n9",
          "9\n21",
          "22\n10",
          "219"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 8;\nint saved = x * 3;\nx *= 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "24\n16",
        "options": [
          "24\n16",
          "16\n24",
          "25\n17",
          "2416"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 9;\nint saved = x * 3;\nx += 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "27\n11",
        "options": [
          "27\n11",
          "11\n27",
          "28\n12",
          "2711"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int x = 10;\nint saved = x * 3;\nx *= 2;\nConsole.WriteLine(saved);\nConsole.WriteLine(x);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Результат выражения сохраняется при присваивании и не пересчитывается автоматически.",
        "challengeResult": "30\n20",
        "options": [
          "30\n20",
          "20\n30",
          "31\n21",
          "3020"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "6\n4",
    "options": [
      "6\n4",
      "4\n6",
      "7\n5",
      "64"
    ],
    "correctIndex": 0,
    "exampleResult": "30\n20"
  },
  {
    "id": "expand-5-remainder-order",
    "codeDeckId": "lab5-mixed-reading",
    "deckId": "input-operations-conversions",
    "term": "Остаток от деления",
    "exampleCode": "int value = 22;\nConsole.WriteLine(value + 3 % 5);",
    "exampleNote": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 14;\nConsole.WriteLine(value + 3 % 5);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
    "variants": [
      {
        "challengeCode": "int value = 15;\nConsole.WriteLine((value + 3) % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 16;\nConsole.WriteLine(value + 3 % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "19",
        "options": [
          "19",
          "20",
          "18",
          "21"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 17;\nConsole.WriteLine((value + 3) % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 18;\nConsole.WriteLine(value + 3 % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 19;\nConsole.WriteLine((value + 3) % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 20;\nConsole.WriteLine(value + 3 % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "23",
        "options": [
          "23",
          "24",
          "22",
          "25"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 21;\nConsole.WriteLine((value + 3) % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 22;\nConsole.WriteLine(value + 3 % 5);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Остаток вычисляется раньше сложения. Скобки могут изменить делимое и итоговый результат.",
        "challengeResult": "25",
        "options": [
          "25",
          "26",
          "24",
          "27"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "17",
    "options": [
      "17",
      "18",
      "16",
      "19"
    ],
    "correctIndex": 0,
    "exampleResult": "25"
  },
  {
    "id": "expand-5-read-two",
    "codeDeckId": "lab5-mixed-reading",
    "deckId": "input-operations-conversions",
    "term": "Console.ReadLine",
    "exampleCode": "int first = int.Parse(Console.ReadLine());\nint second = int.Parse(Console.ReadLine());\nConsole.WriteLine(first - second);",
    "exampleNote": "Каждый ReadLine читает следующую строку. Первая переменная получает первую запись, вторая — вторую.",
    "exampleInput": "25\n10",
    "kind": "Что выведет код?",
    "challengeCode": "int first = int.Parse(Console.ReadLine());\nint second = int.Parse(Console.ReadLine());\nConsole.WriteLine(first - second);",
    "challengeInput": "9\n2",
    "prompt": "Что появится в консоли?",
    "explanation": "Каждый ReadLine читает следующую строку. Первая переменная получает первую запись, вторая — вторую.",
    "variants": [
      {
        "challengeCode": "int first = int.Parse(Console.ReadLine());\nint second = int.Parse(Console.ReadLine());\nConsole.WriteLine(second - first);",
        "challengeInput": "11\n3",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждый ReadLine читает следующую строку. Первая переменная получает первую запись, вторая — вторую.",
        "challengeResult": "-8",
        "options": [
          "-8",
          "-7",
          "-9",
          "-6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = int.Parse(Console.ReadLine());\nint second = int.Parse(Console.ReadLine());\nConsole.WriteLine(first - second);",
        "challengeInput": "13\n4",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждый ReadLine читает следующую строку. Первая переменная получает первую запись, вторая — вторую.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = int.Parse(Console.ReadLine());\nint second = int.Parse(Console.ReadLine());\nConsole.WriteLine(second - first);",
        "challengeInput": "15\n5",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждый ReadLine читает следующую строку. Первая переменная получает первую запись, вторая — вторую.",
        "challengeResult": "-10",
        "options": [
          "-10",
          "-9",
          "-11",
          "-8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = int.Parse(Console.ReadLine());\nint second = int.Parse(Console.ReadLine());\nConsole.WriteLine(first - second);",
        "challengeInput": "17\n6",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждый ReadLine читает следующую строку. Первая переменная получает первую запись, вторая — вторую.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = int.Parse(Console.ReadLine());\nint second = int.Parse(Console.ReadLine());\nConsole.WriteLine(second - first);",
        "challengeInput": "19\n7",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждый ReadLine читает следующую строку. Первая переменная получает первую запись, вторая — вторую.",
        "challengeResult": "-12",
        "options": [
          "-12",
          "-11",
          "-13",
          "-10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = int.Parse(Console.ReadLine());\nint second = int.Parse(Console.ReadLine());\nConsole.WriteLine(first - second);",
        "challengeInput": "21\n8",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждый ReadLine читает следующую строку. Первая переменная получает первую запись, вторая — вторую.",
        "challengeResult": "13",
        "options": [
          "13",
          "14",
          "12",
          "15"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = int.Parse(Console.ReadLine());\nint second = int.Parse(Console.ReadLine());\nConsole.WriteLine(second - first);",
        "challengeInput": "23\n9",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждый ReadLine читает следующую строку. Первая переменная получает первую запись, вторая — вторую.",
        "challengeResult": "-14",
        "options": [
          "-14",
          "-13",
          "-15",
          "-12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = int.Parse(Console.ReadLine());\nint second = int.Parse(Console.ReadLine());\nConsole.WriteLine(first - second);",
        "challengeInput": "25\n10",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждый ReadLine читает следующую строку. Первая переменная получает первую запись, вторая — вторую.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "7",
    "options": [
      "7",
      "8",
      "6",
      "9"
    ],
    "correctIndex": 0,
    "exampleResult": "15"
  },
  {
    "id": "expand-5-digits",
    "codeDeckId": "lab5-mixed-reading",
    "deckId": "input-operations-conversions",
    "term": "Арифметический оператор",
    "exampleCode": "int number = 77;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens + ones);",
    "exampleNote": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
    "kind": "Что выведет код?",
    "challengeCode": "int number = 21;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens + ones);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
    "variants": [
      {
        "challengeCode": "int number = 28;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens * ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 35;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens + ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 42;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens * ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 49;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens + ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "13",
        "options": [
          "13",
          "14",
          "12",
          "15"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 56;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens * ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "30",
        "options": [
          "30",
          "31",
          "29",
          "32"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 63;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens + ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 70;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens * ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int number = 77;\nint tens = number / 10;\nint ones = number % 10;\nConsole.WriteLine(tens + ones);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "У положительного двузначного числа деление на 10 даёт десятки, а остаток — единицы.",
        "challengeResult": "14",
        "options": [
          "14",
          "15",
          "13",
          "16"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "3",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "correctIndex": 0,
    "exampleResult": "14"
  },
  {
    "id": "expand-6-compare-boundary",
    "codeDeckId": "lab6-mixed-reading",
    "deckId": "conditions-logic",
    "term": "Оператор сравнения",
    "exampleCode": "int score = 69;\nbool passed = score >= 68;\nConsole.WriteLine(passed);",
    "exampleNote": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 59;\nbool passed = score >= 60;\nConsole.WriteLine(passed);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
    "variants": [
      {
        "challengeCode": "int score = 61;\nbool passed = score > 61;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 63;\nbool passed = score >= 62;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 62;\nbool passed = score > 63;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 64;\nbool passed = score >= 64;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 66;\nbool passed = score > 65;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 65;\nbool passed = score >= 66;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 67;\nbool passed = score > 67;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 69;\nbool passed = score >= 68;\nConsole.WriteLine(passed);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Проверьте строгость границы: >= включает равенство, а > его исключает.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "False",
    "options": [
      "False",
      "True",
      "0",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "exampleResult": "True"
  },
  {
    "id": "expand-6-range-combine",
    "codeDeckId": "lab6-mixed-reading",
    "deckId": "conditions-logic",
    "term": "Проверка диапазона",
    "exampleCode": "int value = -1;\nConsole.WriteLine(value >= 0 && value <= 10);",
    "exampleNote": "Внутри диапазона должны выполняться обе границы. При || достаточно одной истинной проверки.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = -2;\nConsole.WriteLine(value >= 0 && value <= 10);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Внутри диапазона должны выполняться обе границы. При || достаточно одной истинной проверки.",
    "variants": [
      {
        "challengeCode": "int value = 0;\nConsole.WriteLine(value >= 0 || value <= 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутри диапазона должны выполняться обе границы. При || достаточно одной истинной проверки.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 5;\nConsole.WriteLine(value >= 0 && value <= 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутри диапазона должны выполняться обе границы. При || достаточно одной истинной проверки.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 10;\nConsole.WriteLine(value >= 0 || value <= 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутри диапазона должны выполняться обе границы. При || достаточно одной истинной проверки.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 12;\nConsole.WriteLine(value >= 0 && value <= 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутри диапазона должны выполняться обе границы. При || достаточно одной истинной проверки.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 3;\nConsole.WriteLine(value >= 0 || value <= 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутри диапазона должны выполняться обе границы. При || достаточно одной истинной проверки.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 15;\nConsole.WriteLine(value >= 0 && value <= 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутри диапазона должны выполняться обе границы. При || достаточно одной истинной проверки.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 8;\nConsole.WriteLine(value >= 0 || value <= 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутри диапазона должны выполняться обе границы. При || достаточно одной истинной проверки.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = -1;\nConsole.WriteLine(value >= 0 && value <= 10);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутри диапазона должны выполняться обе границы. При || достаточно одной истинной проверки.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "False",
    "options": [
      "False",
      "True",
      "0",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "exampleResult": "False"
  },
  {
    "id": "expand-6-negation",
    "codeDeckId": "lab6-mixed-reading",
    "deckId": "conditions-logic",
    "term": "Логическое НЕ !",
    "exampleCode": "int debts = 8;\nbool clear = !!(debts == 2);\nConsole.WriteLine(clear);",
    "exampleNote": "Отрицание применяется ко всему выражению в скобках. Сначала определите истинность сравнения.",
    "kind": "Что выведет код?",
    "challengeCode": "int debts = 0;\nbool clear = !!(debts == 0);\nConsole.WriteLine(clear);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Отрицание применяется ко всему выражению в скобках. Сначала определите истинность сравнения.",
    "variants": [
      {
        "challengeCode": "int debts = 1;\nbool clear = !(debts == 1);\nConsole.WriteLine(clear);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отрицание применяется ко всему выражению в скобках. Сначала определите истинность сравнения.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int debts = 2;\nbool clear = !!(debts == 2);\nConsole.WriteLine(clear);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отрицание применяется ко всему выражению в скобках. Сначала определите истинность сравнения.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int debts = 3;\nbool clear = !(debts == 0);\nConsole.WriteLine(clear);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отрицание применяется ко всему выражению в скобках. Сначала определите истинность сравнения.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int debts = 4;\nbool clear = !!(debts == 1);\nConsole.WriteLine(clear);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отрицание применяется ко всему выражению в скобках. Сначала определите истинность сравнения.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int debts = 5;\nbool clear = !(debts == 2);\nConsole.WriteLine(clear);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отрицание применяется ко всему выражению в скобках. Сначала определите истинность сравнения.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int debts = 6;\nbool clear = !!(debts == 0);\nConsole.WriteLine(clear);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отрицание применяется ко всему выражению в скобках. Сначала определите истинность сравнения.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int debts = 7;\nbool clear = !(debts == 1);\nConsole.WriteLine(clear);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отрицание применяется ко всему выражению в скобках. Сначала определите истинность сравнения.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int debts = 8;\nbool clear = !!(debts == 2);\nConsole.WriteLine(clear);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отрицание применяется ко всему выражению в скобках. Сначала определите истинность сравнения.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "True",
    "options": [
      "True",
      "False",
      "0",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "exampleResult": "False"
  },
  {
    "id": "expand-6-independent-update",
    "codeDeckId": "lab6-mixed-reading",
    "deckId": "branching-menu",
    "term": "Независимые if",
    "exampleCode": "int value = 10;\nif (value < 13)\n{\n    value += 4;\n}\nif (value > 13)\n{\n    value += 3;\n}\nConsole.WriteLine(value);",
    "exampleNote": "Отдельные if проверяются последовательно. Вторая проверка видит значение, изменённое первой веткой.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 2;\nif (value < 5)\n{\n    value += 4;\n}\nif (value > 5)\n{\n    value += 3;\n}\nConsole.WriteLine(value);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Отдельные if проверяются последовательно. Вторая проверка видит значение, изменённое первой веткой.",
    "variants": [
      {
        "challengeCode": "int value = 3;\nif (value < 6)\n{\n    value += 4;\n}\nelse if (value > 6)\n{\n    value += 3;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отдельные if проверяются последовательно. Вторая проверка видит значение, изменённое первой веткой.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 4;\nif (value < 7)\n{\n    value += 4;\n}\nif (value > 7)\n{\n    value += 3;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отдельные if проверяются последовательно. Вторая проверка видит значение, изменённое первой веткой.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 5;\nif (value < 8)\n{\n    value += 4;\n}\nelse if (value > 8)\n{\n    value += 3;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отдельные if проверяются последовательно. Вторая проверка видит значение, изменённое первой веткой.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 6;\nif (value < 9)\n{\n    value += 4;\n}\nif (value > 9)\n{\n    value += 3;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отдельные if проверяются последовательно. Вторая проверка видит значение, изменённое первой веткой.",
        "challengeResult": "13",
        "options": [
          "13",
          "14",
          "12",
          "15"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 7;\nif (value < 10)\n{\n    value += 4;\n}\nelse if (value > 10)\n{\n    value += 3;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отдельные if проверяются последовательно. Вторая проверка видит значение, изменённое первой веткой.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 8;\nif (value < 11)\n{\n    value += 4;\n}\nif (value > 11)\n{\n    value += 3;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отдельные if проверяются последовательно. Вторая проверка видит значение, изменённое первой веткой.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 9;\nif (value < 12)\n{\n    value += 4;\n}\nelse if (value > 12)\n{\n    value += 3;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отдельные if проверяются последовательно. Вторая проверка видит значение, изменённое первой веткой.",
        "challengeResult": "13",
        "options": [
          "13",
          "14",
          "12",
          "15"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 10;\nif (value < 13)\n{\n    value += 4;\n}\nif (value > 13)\n{\n    value += 3;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Отдельные if проверяются последовательно. Вторая проверка видит значение, изменённое первой веткой.",
        "challengeResult": "17",
        "options": [
          "17",
          "18",
          "16",
          "19"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "9",
    "options": [
      "9",
      "10",
      "8",
      "11"
    ],
    "correctIndex": 0,
    "exampleResult": "17"
  },
  {
    "id": "expand-6-ternary-number",
    "codeDeckId": "lab6-mixed-reading",
    "deckId": "branching-menu",
    "term": "Условный оператор ?:",
    "exampleCode": "int first = 11;\nint second = 4;\nint result = first > second ? first : second;\nConsole.WriteLine(result);",
    "exampleNote": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
    "kind": "Что выведет код?",
    "challengeCode": "int first = 3;\nint second = 12;\nint result = first > second ? first : second;\nConsole.WriteLine(result);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
    "variants": [
      {
        "challengeCode": "int first = 4;\nint second = 11;\nint result = first < second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 5;\nint second = 10;\nint result = first > second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 6;\nint second = 9;\nint result = first < second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 7;\nint second = 8;\nint result = first > second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 8;\nint second = 7;\nint result = first < second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 9;\nint second = 6;\nint result = first > second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 10;\nint second = 5;\nint result = first < second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int first = 11;\nint second = 4;\nint result = first > second ? first : second;\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условный оператор выбирает значение до двоеточия при true, после — при false.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "12",
    "options": [
      "12",
      "13",
      "11",
      "14"
    ],
    "correctIndex": 0,
    "exampleResult": "11"
  },
  {
    "id": "expand-6-switch-follow",
    "codeDeckId": "lab6-mixed-reading",
    "deckId": "branching-menu",
    "term": "switch",
    "exampleCode": "int action = 0;\nint value = 10;\nswitch (action)\n{\n    case 1: value += 3; break;\n    case 2: value *= 2; break;\n    default: value -= 1; break;\n}\nConsole.WriteLine(value);",
    "exampleNote": "Выполняется подходящий case или default. break завершает switch, затем выполняется код после него.",
    "kind": "Что выведет код?",
    "challengeCode": "int action = 0;\nint value = 2;\nswitch (action)\n{\n    case 1: value += 3; break;\n    case 2: value *= 2; break;\n    default: value -= 1; break;\n}\nConsole.WriteLine(value);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Выполняется подходящий case или default. break завершает switch, затем выполняется код после него.",
    "variants": [
      {
        "challengeCode": "int action = 1;\nint value = 3;\nswitch (action)\n{\n    case 1: value += 3; break;\n    case 2: value *= 2; break;\n    default: value -= 1; break;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выполняется подходящий case или default. break завершает switch, затем выполняется код после него.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int action = 2;\nint value = 4;\nswitch (action)\n{\n    case 1: value += 3; break;\n    case 2: value *= 2; break;\n    default: value -= 1; break;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выполняется подходящий case или default. break завершает switch, затем выполняется код после него.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int action = 3;\nint value = 5;\nswitch (action)\n{\n    case 1: value += 3; break;\n    case 2: value *= 2; break;\n    default: value -= 1; break;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выполняется подходящий case или default. break завершает switch, затем выполняется код после него.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int action = 0;\nint value = 6;\nswitch (action)\n{\n    case 1: value += 3; break;\n    case 2: value *= 2; break;\n    default: value -= 1; break;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выполняется подходящий case или default. break завершает switch, затем выполняется код после него.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int action = 1;\nint value = 7;\nswitch (action)\n{\n    case 1: value += 3; break;\n    case 2: value *= 2; break;\n    default: value -= 1; break;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выполняется подходящий case или default. break завершает switch, затем выполняется код после него.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int action = 2;\nint value = 8;\nswitch (action)\n{\n    case 1: value += 3; break;\n    case 2: value *= 2; break;\n    default: value -= 1; break;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выполняется подходящий case или default. break завершает switch, затем выполняется код после него.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int action = 3;\nint value = 9;\nswitch (action)\n{\n    case 1: value += 3; break;\n    case 2: value *= 2; break;\n    default: value -= 1; break;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выполняется подходящий case или default. break завершает switch, затем выполняется код после него.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int action = 0;\nint value = 10;\nswitch (action)\n{\n    case 1: value += 3; break;\n    case 2: value *= 2; break;\n    default: value -= 1; break;\n}\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выполняется подходящий case или default. break завершает switch, затем выполняется код после него.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "1",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "correctIndex": 0,
    "exampleResult": "9"
  },
  {
    "id": "expand-6-nested-choice",
    "codeDeckId": "lab6-mixed-reading",
    "deckId": "branching-menu",
    "term": "if",
    "exampleCode": "int score = 78;\nint debts = 2;\nint result = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        result = 1;\n    }\n    else\n    {\n        result = 2;\n    }\n}\nConsole.WriteLine(result);",
    "exampleNote": "Внутренний if выполняется только внутри выбранной внешней ветки. Следите за фигурными скобками.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 70;\nint debts = 0;\nint result = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        result = 1;\n    }\n    else\n    {\n        result = 2;\n    }\n}\nConsole.WriteLine(result);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Внутренний if выполняется только внутри выбранной внешней ветки. Следите за фигурными скобками.",
    "variants": [
      {
        "challengeCode": "int score = 49;\nint debts = 1;\nint result = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        result = 1;\n    }\n    else\n    {\n        result = 2;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренний if выполняется только внутри выбранной внешней ветки. Следите за фигурными скобками.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 72;\nint debts = 2;\nint result = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        result = 1;\n    }\n    else\n    {\n        result = 2;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренний if выполняется только внутри выбранной внешней ветки. Следите за фигурными скобками.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 47;\nint debts = 0;\nint result = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        result = 1;\n    }\n    else\n    {\n        result = 2;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренний if выполняется только внутри выбранной внешней ветки. Следите за фигурными скобками.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 74;\nint debts = 1;\nint result = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        result = 1;\n    }\n    else\n    {\n        result = 2;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренний if выполняется только внутри выбранной внешней ветки. Следите за фигурными скобками.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 45;\nint debts = 2;\nint result = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        result = 1;\n    }\n    else\n    {\n        result = 2;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренний if выполняется только внутри выбранной внешней ветки. Следите за фигурными скобками.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 76;\nint debts = 0;\nint result = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        result = 1;\n    }\n    else\n    {\n        result = 2;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренний if выполняется только внутри выбранной внешней ветки. Следите за фигурными скобками.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 43;\nint debts = 1;\nint result = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        result = 1;\n    }\n    else\n    {\n        result = 2;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренний if выполняется только внутри выбранной внешней ветки. Следите за фигурными скобками.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 78;\nint debts = 2;\nint result = 0;\nif (score >= 60)\n{\n    if (debts == 0)\n    {\n        result = 1;\n    }\n    else\n    {\n        result = 2;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренний if выполняется только внутри выбранной внешней ветки. Следите за фигурными скобками.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "1",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "correctIndex": 0,
    "exampleResult": "2"
  },
  {
    "id": "expand-6-logical-precedence",
    "codeDeckId": "lab6-mixed-reading",
    "deckId": "conditions-logic",
    "term": "Приоритет логических операторов",
    "exampleCode": "int value = 10;\nbool first = value >= 5;\nbool second = value % 2 == 0;\nbool third = false;\nConsole.WriteLine(first || second && third);",
    "exampleNote": "&& имеет больший приоритет, чем ||. Скобки меняют группировку; сокращённое вычисление может пропускать правую часть.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 2;\nbool first = value >= 5;\nbool second = value % 2 == 0;\nbool third = true;\nConsole.WriteLine(first || second && third);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "&& имеет больший приоритет, чем ||. Скобки меняют группировку; сокращённое вычисление может пропускать правую часть.",
    "variants": [
      {
        "challengeCode": "int value = 3;\nbool first = value >= 5;\nbool second = value % 2 == 0;\nbool third = false;\nConsole.WriteLine((first || second) && third);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "&& имеет больший приоритет, чем ||. Скобки меняют группировку; сокращённое вычисление может пропускать правую часть.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 4;\nbool first = value >= 5;\nbool second = value % 2 == 0;\nbool third = false;\nConsole.WriteLine(first || second && third);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "&& имеет больший приоритет, чем ||. Скобки меняют группировку; сокращённое вычисление может пропускать правую часть.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 5;\nbool first = value >= 5;\nbool second = value % 2 == 0;\nbool third = true;\nConsole.WriteLine((first || second) && third);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "&& имеет больший приоритет, чем ||. Скобки меняют группировку; сокращённое вычисление может пропускать правую часть.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 6;\nbool first = value >= 5;\nbool second = value % 2 == 0;\nbool third = false;\nConsole.WriteLine(first || second && third);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "&& имеет больший приоритет, чем ||. Скобки меняют группировку; сокращённое вычисление может пропускать правую часть.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 7;\nbool first = value >= 5;\nbool second = value % 2 == 0;\nbool third = false;\nConsole.WriteLine((first || second) && third);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "&& имеет больший приоритет, чем ||. Скобки меняют группировку; сокращённое вычисление может пропускать правую часть.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 8;\nbool first = value >= 5;\nbool second = value % 2 == 0;\nbool third = true;\nConsole.WriteLine(first || second && third);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "&& имеет больший приоритет, чем ||. Скобки меняют группировку; сокращённое вычисление может пропускать правую часть.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 9;\nbool first = value >= 5;\nbool second = value % 2 == 0;\nbool third = false;\nConsole.WriteLine((first || second) && third);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "&& имеет больший приоритет, чем ||. Скобки меняют группировку; сокращённое вычисление может пропускать правую часть.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 10;\nbool first = value >= 5;\nbool second = value % 2 == 0;\nbool third = false;\nConsole.WriteLine(first || second && third);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "&& имеет больший приоритет, чем ||. Скобки меняют группировку; сокращённое вычисление может пропускать правую часть.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "True",
    "options": [
      "True",
      "False",
      "0",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "exampleResult": "True"
  },
  {
    "id": "expand-6-ordered-thresholds",
    "codeDeckId": "lab6-mixed-reading",
    "deckId": "branching-menu",
    "term": "else if",
    "exampleCode": "int score = 100;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
    "exampleNote": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
    "kind": "Что выведет код?",
    "challengeCode": "int score = 95;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
    "variants": [
      {
        "challengeCode": "int score = 74;\nif (score >= 60)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 90)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 60;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 59;\nif (score >= 60)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 90)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 90;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 75;\nif (score >= 60)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 90)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 80;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 40;\nif (score >= 60)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 90)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int score = 100;\nif (score >= 90)\n{\n    Console.WriteLine(5);\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(3);\n}\nelse\n{\n    Console.WriteLine(2);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В цепочке выбирается первая истинная ветка. Более широкий порог раньше узкого может изменить результат.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "5",
    "options": [
      "5",
      "6",
      "4",
      "7"
    ],
    "correctIndex": 0,
    "exampleResult": "5"
  },
  {
    "id": "expand-6-inequality",
    "codeDeckId": "lab6-mixed-reading",
    "deckId": "conditions-logic",
    "term": "Неравенство !=",
    "exampleCode": "int expected = 10;\nint actual = 10;\nConsole.WriteLine(actual != expected);",
    "exampleNote": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
    "kind": "Что выведет код?",
    "challengeCode": "int expected = 2;\nint actual = 2;\nConsole.WriteLine(actual != expected);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
    "variants": [
      {
        "challengeCode": "int expected = 3;\nint actual = 4;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 4;\nint actual = 4;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 5;\nint actual = 6;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 6;\nint actual = 6;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 7;\nint actual = 8;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 8;\nint actual = 8;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 9;\nint actual = 10;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "True",
        "options": [
          "True",
          "False",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int expected = 10;\nint actual = 10;\nConsole.WriteLine(actual != expected);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "!= проверяет различие значений. Сравните фактические значения после присваивания.",
        "challengeResult": "False",
        "options": [
          "False",
          "True",
          "0",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "False",
    "options": [
      "False",
      "True",
      "0",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "exampleResult": "False"
  },
  {
    "id": "expand-7-loop-stride",
    "codeDeckId": "lab7-mixed-reading",
    "deckId": "loops-basics",
    "term": "for",
    "exampleCode": "int count = 0;\nfor (int i = 2; i < 14; i += 3)\n{\n    count++;\n}\nConsole.WriteLine(count);",
    "exampleNote": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nfor (int i = 0; i < 6; i += 1)\n{\n    count++;\n}\nConsole.WriteLine(count);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
    "variants": [
      {
        "challengeCode": "int count = 0;\nfor (int i = 1; i <= 7; i += 2)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 2; i < 8; i += 3)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 0; i <= 9; i += 1)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 1; i < 10; i += 2)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 2; i <= 11; i += 3)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 0; i < 12; i += 1)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 1; i <= 13; i += 2)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int i = 2; i < 14; i += 3)\n{\n    count++;\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выпишите значения счётчика с заданным шагом до нарушения границы. Считается выполнение тела, а не последнее значение счётчика.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "6",
    "options": [
      "6",
      "7",
      "5",
      "8"
    ],
    "correctIndex": 0,
    "exampleResult": "4"
  },
  {
    "id": "expand-7-loop-descending",
    "codeDeckId": "lab7-mixed-reading",
    "deckId": "loops-control",
    "term": "Убывающий цикл",
    "exampleCode": "int sum = 0;\nfor (int i = 14; i > 2; i -= 1)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "exampleNote": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
    "kind": "Что выведет код?",
    "challengeCode": "int sum = 0;\nfor (int i = 6; i > 0; i -= 1)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
    "variants": [
      {
        "challengeCode": "int sum = 0;\nfor (int i = 7; i > 1; i -= 2)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 8; i > 2; i -= 1)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "33",
        "options": [
          "33",
          "34",
          "32",
          "35"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 9; i > 0; i -= 2)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "25",
        "options": [
          "25",
          "26",
          "24",
          "27"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 10; i > 1; i -= 1)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "54",
        "options": [
          "54",
          "55",
          "53",
          "56"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 11; i > 2; i -= 2)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "35",
        "options": [
          "35",
          "36",
          "34",
          "37"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 12; i > 0; i -= 1)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "78",
        "options": [
          "78",
          "79",
          "77",
          "80"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 13; i > 1; i -= 2)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "48",
        "options": [
          "48",
          "49",
          "47",
          "50"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 14; i > 2; i -= 1)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Убывающий счётчик проходит только значения, удовлетворяющие границе. Шаг может пропускать числа.",
        "challengeResult": "102",
        "options": [
          "102",
          "103",
          "101",
          "104"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "21",
    "options": [
      "21",
      "22",
      "20",
      "23"
    ],
    "correctIndex": 0,
    "exampleResult": "102"
  },
  {
    "id": "expand-7-continue-placement",
    "codeDeckId": "lab7-mixed-reading",
    "deckId": "loops-control",
    "term": "continue",
    "exampleCode": "int sum = 0;\nfor (int i = 1; i <= 12; i++)\n{\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "exampleNote": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
    "kind": "Что выведет код?",
    "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 4; i++)\n{\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
    "variants": [
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 5; i++)\n{\n    sum += i;\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum++;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "18",
        "options": [
          "18",
          "19",
          "17",
          "20"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 6; i++)\n{\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 7; i++)\n{\n    sum += i;\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum++;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "32",
        "options": [
          "32",
          "33",
          "31",
          "34"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 8; i++)\n{\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 9; i++)\n{\n    sum += i;\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum++;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "50",
        "options": [
          "50",
          "51",
          "49",
          "52"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 10; i++)\n{\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "25",
        "options": [
          "25",
          "26",
          "24",
          "27"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 11; i++)\n{\n    sum += i;\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum++;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "72",
        "options": [
          "72",
          "73",
          "71",
          "74"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 12; i++)\n{\n    if (i % 2 == 0)\n    {\n        continue;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Команды до continue уже выполнятся. После continue остаток текущей итерации пропускается.",
        "challengeResult": "36",
        "options": [
          "36",
          "37",
          "35",
          "38"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "4",
    "options": [
      "4",
      "5",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "exampleResult": "36"
  },
  {
    "id": "expand-7-break-placement",
    "codeDeckId": "lab7-mixed-reading",
    "deckId": "loops-control",
    "term": "break в цикле",
    "exampleCode": "int sum = 0;\nfor (int i = 1; i <= 14; i++)\n{\n    if (i == 11)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "exampleNote": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
    "kind": "Что выведет код?",
    "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 6; i++)\n{\n    if (i == 3)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
    "variants": [
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 7; i++)\n{\n    sum += i;\n    if (i == 4)\n    {\n        break;\n    }\n    \n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 8; i++)\n{\n    if (i == 5)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 9; i++)\n{\n    sum += i;\n    if (i == 6)\n    {\n        break;\n    }\n    \n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 10; i++)\n{\n    if (i == 7)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 11; i++)\n{\n    sum += i;\n    if (i == 8)\n    {\n        break;\n    }\n    \n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "36",
        "options": [
          "36",
          "37",
          "35",
          "38"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 12; i++)\n{\n    if (i == 9)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "36",
        "options": [
          "36",
          "37",
          "35",
          "38"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 13; i++)\n{\n    sum += i;\n    if (i == 10)\n    {\n        break;\n    }\n    \n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "55",
        "options": [
          "55",
          "56",
          "54",
          "57"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 14; i++)\n{\n    if (i == 11)\n    {\n        break;\n    }\n    sum += i;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Выход по break прекращает ближайший цикл. Прибавление до проверки включает граничное i, после проверки — исключает.",
        "challengeResult": "55",
        "options": [
          "55",
          "56",
          "54",
          "57"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "3",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "correctIndex": 0,
    "exampleResult": "55"
  },
  {
    "id": "expand-7-nested-dependent",
    "codeDeckId": "lab7-mixed-reading",
    "deckId": "loops-control",
    "term": "Вложенный цикл",
    "exampleCode": "int count = 0;\nfor (int row = 1; row <= 5; row++)\n{\n    for (int col = 0; col < row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
    "exampleNote": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nfor (int row = 1; row <= 2; row++)\n{\n    for (int col = 0; col < row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
    "variants": [
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 3; row++)\n{\n    for (int col = 0; col <= row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 4; row++)\n{\n    for (int col = 0; col < row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 5; row++)\n{\n    for (int col = 0; col <= row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "20",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 6; row++)\n{\n    for (int col = 0; col < row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 2; row++)\n{\n    for (int col = 0; col <= row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 3; row++)\n{\n    for (int col = 0; col < row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 4; row++)\n{\n    for (int col = 0; col <= row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "14",
        "options": [
          "14",
          "15",
          "13",
          "16"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int count = 0;\nfor (int row = 1; row <= 5; row++)\n{\n    for (int col = 0; col < row; col++)\n    {\n        count++;\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Внутренняя граница зависит от row. Для каждой внешней итерации число внутренних повторений нужно посчитать отдельно.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "3",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "correctIndex": 0,
    "exampleResult": "15"
  },
  {
    "id": "expand-7-while-growth",
    "codeDeckId": "lab7-mixed-reading",
    "deckId": "loops-basics",
    "term": "while",
    "exampleCode": "int value = 3;\nint count = 0;\nwhile (value < 36)\n{\n    value += 3;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
    "exampleNote": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 1;\nint count = 0;\nwhile (value < 12)\n{\n    value += 3;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
    "variants": [
      {
        "challengeCode": "int value = 2;\nint count = 0;\nwhile (value < 15)\n{\n    value *= 2;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "3\n16",
        "options": [
          "3\n16",
          "16\n3",
          "4\n17",
          "316"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 3;\nint count = 0;\nwhile (value < 18)\n{\n    value += 3;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "5\n18",
        "options": [
          "5\n18",
          "18\n5",
          "6\n19",
          "518"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 1;\nint count = 0;\nwhile (value < 21)\n{\n    value *= 2;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "5\n32",
        "options": [
          "5\n32",
          "32\n5",
          "6\n33",
          "532"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 2;\nint count = 0;\nwhile (value < 24)\n{\n    value += 3;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "8\n26",
        "options": [
          "8\n26",
          "26\n8",
          "9\n27",
          "826"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 3;\nint count = 0;\nwhile (value < 27)\n{\n    value *= 2;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "4\n48",
        "options": [
          "4\n48",
          "48\n4",
          "5\n49",
          "448"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 1;\nint count = 0;\nwhile (value < 30)\n{\n    value += 3;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "10\n31",
        "options": [
          "10\n31",
          "31\n10",
          "11\n32",
          "1031"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 2;\nint count = 0;\nwhile (value < 33)\n{\n    value *= 2;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "5\n64",
        "options": [
          "5\n64",
          "64\n5",
          "6\n65",
          "564"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 3;\nint count = 0;\nwhile (value < 36)\n{\n    value += 3;\n    count++;\n}\nConsole.WriteLine(count);\nConsole.WriteLine(value);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Условие проверяется перед телом. Сначала изменяется value, затем увеличивается счётчик выполненных итераций.",
        "challengeResult": "11\n36",
        "options": [
          "11\n36",
          "36\n11",
          "12\n37",
          "1136"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "4\n13",
    "options": [
      "4\n13",
      "13\n4",
      "5\n14",
      "413"
    ],
    "correctIndex": 0,
    "exampleResult": "11\n36"
  },
  {
    "id": "expand-7-do-boundary",
    "codeDeckId": "lab7-mixed-reading",
    "deckId": "loops-basics",
    "term": "do…while",
    "exampleCode": "int value = 10;\nint count = 0;\ndo\n{\n    count++;\n    value -= 2;\n} while (value > 2);\nConsole.WriteLine(count);",
    "exampleNote": "do…while выполняет тело перед первой проверкой. Учтите последнее изменение value перед выходом.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 2;\nint count = 0;\ndo\n{\n    count++;\n    value -= 2;\n} while (value > 0);\nConsole.WriteLine(count);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "do…while выполняет тело перед первой проверкой. Учтите последнее изменение value перед выходом.",
    "variants": [
      {
        "challengeCode": "int value = 3;\nint count = 0;\ndo\n{\n    count++;\n    value -= 2;\n} while (value >= 1);\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "do…while выполняет тело перед первой проверкой. Учтите последнее изменение value перед выходом.",
        "challengeResult": "2",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 4;\nint count = 0;\ndo\n{\n    count++;\n    value -= 2;\n} while (value > 2);\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "do…while выполняет тело перед первой проверкой. Учтите последнее изменение value перед выходом.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 5;\nint count = 0;\ndo\n{\n    count++;\n    value -= 2;\n} while (value >= 0);\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "do…while выполняет тело перед первой проверкой. Учтите последнее изменение value перед выходом.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 6;\nint count = 0;\ndo\n{\n    count++;\n    value -= 2;\n} while (value > 1);\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "do…while выполняет тело перед первой проверкой. Учтите последнее изменение value перед выходом.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 7;\nint count = 0;\ndo\n{\n    count++;\n    value -= 2;\n} while (value >= 2);\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "do…while выполняет тело перед первой проверкой. Учтите последнее изменение value перед выходом.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 8;\nint count = 0;\ndo\n{\n    count++;\n    value -= 2;\n} while (value > 0);\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "do…while выполняет тело перед первой проверкой. Учтите последнее изменение value перед выходом.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 9;\nint count = 0;\ndo\n{\n    count++;\n    value -= 2;\n} while (value >= 1);\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "do…while выполняет тело перед первой проверкой. Учтите последнее изменение value перед выходом.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 10;\nint count = 0;\ndo\n{\n    count++;\n    value -= 2;\n} while (value > 2);\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "do…while выполняет тело перед первой проверкой. Учтите последнее изменение value перед выходом.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "1",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "correctIndex": 0,
    "exampleResult": "4"
  },
  {
    "id": "expand-7-accumulator-reset",
    "codeDeckId": "lab7-mixed-reading",
    "deckId": "loops-control",
    "term": "Накопитель",
    "exampleCode": "int sum = 0;\nfor (int i = 1; i <= 11; i++)\n{\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
    "exampleNote": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
    "kind": "Что выведет код?",
    "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 3; i++)\n{\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
    "variants": [
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 4; i++)\n{\n    sum = 0;\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 5; i++)\n{\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "30",
        "options": [
          "30",
          "31",
          "29",
          "32"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 6; i++)\n{\n    sum = 0;\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 7; i++)\n{\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "56",
        "options": [
          "56",
          "57",
          "55",
          "58"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 8; i++)\n{\n    sum = 0;\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 9; i++)\n{\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "90",
        "options": [
          "90",
          "91",
          "89",
          "92"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 10; i++)\n{\n    sum = 0;\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "20",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nfor (int i = 1; i <= 11; i++)\n{\n    sum += i * 2;\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Обнуление внутри тела уничтожает результат предыдущих итераций. Без обнуления значения накапливаются.",
        "challengeResult": "132",
        "options": [
          "132",
          "133",
          "131",
          "134"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "12",
    "options": [
      "12",
      "13",
      "11",
      "14"
    ],
    "correctIndex": 0,
    "exampleResult": "132"
  },
  {
    "id": "expand-7-counter-after",
    "codeDeckId": "lab7-mixed-reading",
    "deckId": "loops-basics",
    "term": "Счётчик цикла",
    "exampleCode": "int i;\nfor (i = 0; i < 13; i += 3)\n{\n}\nConsole.WriteLine(i);",
    "exampleNote": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
    "kind": "Что выведет код?",
    "challengeCode": "int i;\nfor (i = 0; i < 5; i += 1)\n{\n}\nConsole.WriteLine(i);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
    "variants": [
      {
        "challengeCode": "int i;\nfor (i = 1; i < 6; i += 2)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 0; i < 7; i += 3)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 1; i < 8; i += 1)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 0; i < 9; i += 2)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 1; i < 10; i += 3)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 0; i < 11; i += 1)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 1; i < 12; i += 2)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "13",
        "options": [
          "13",
          "14",
          "12",
          "15"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int i;\nfor (i = 0; i < 13; i += 3)\n{\n}\nConsole.WriteLine(i);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "После последней итерации for выполняет шаг, затем ложная проверка завершает цикл. Переменная объявлена вне for.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "5",
    "options": [
      "5",
      "6",
      "4",
      "7"
    ],
    "correctIndex": 0,
    "exampleResult": "15"
  },
  {
    "id": "expand-7-two-accumulators",
    "codeDeckId": "lab7-mixed-reading",
    "deckId": "loops-control",
    "term": "Накопитель",
    "exampleCode": "int sum = 0;\nint count = 0;\nfor (int i = 0; i <= 12; i++)\n{\n    if (i % 2 == 0)\n    {\n        sum += i;\n        count++;\n    }\n}\nConsole.WriteLine($\"{sum} {count}\");",
    "exampleNote": "В каждой итерации sum и count меняются по разным правилам. Прибавляется текущее i, а не число итераций.",
    "kind": "Что выведет код?",
    "challengeCode": "int sum = 0;\nint count = 0;\nfor (int i = 0; i <= 4; i++)\n{\n    if (i % 2 == 0)\n    {\n        sum += i;\n        count++;\n    }\n}\nConsole.WriteLine($\"{sum} {count}\");",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "В каждой итерации sum и count меняются по разным правилам. Прибавляется текущее i, а не число итераций.",
    "variants": [
      {
        "challengeCode": "int sum = 0;\nint count = 0;\nfor (int i = 1; i <= 5; i++)\n{\n    if (i % 2 == 1)\n    {\n        sum += i;\n        count++;\n    }\n}\nConsole.WriteLine($\"{sum} {count}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В каждой итерации sum и count меняются по разным правилам. Прибавляется текущее i, а не число итераций.",
        "challengeResult": "9 3",
        "options": [
          "9 3",
          "10 4",
          "3 9",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nint count = 0;\nfor (int i = 0; i <= 6; i++)\n{\n    if (i % 2 == 0)\n    {\n        sum += i;\n        count++;\n    }\n}\nConsole.WriteLine($\"{sum} {count}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В каждой итерации sum и count меняются по разным правилам. Прибавляется текущее i, а не число итераций.",
        "challengeResult": "12 4",
        "options": [
          "12 4",
          "13 5",
          "4 21",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nint count = 0;\nfor (int i = 1; i <= 7; i++)\n{\n    if (i % 2 == 1)\n    {\n        sum += i;\n        count++;\n    }\n}\nConsole.WriteLine($\"{sum} {count}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В каждой итерации sum и count меняются по разным правилам. Прибавляется текущее i, а не число итераций.",
        "challengeResult": "16 4",
        "options": [
          "16 4",
          "17 5",
          "4 61",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nint count = 0;\nfor (int i = 0; i <= 8; i++)\n{\n    if (i % 2 == 0)\n    {\n        sum += i;\n        count++;\n    }\n}\nConsole.WriteLine($\"{sum} {count}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В каждой итерации sum и count меняются по разным правилам. Прибавляется текущее i, а не число итераций.",
        "challengeResult": "20 5",
        "options": [
          "20 5",
          "21 6",
          "5 02",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nint count = 0;\nfor (int i = 1; i <= 9; i++)\n{\n    if (i % 2 == 1)\n    {\n        sum += i;\n        count++;\n    }\n}\nConsole.WriteLine($\"{sum} {count}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В каждой итерации sum и count меняются по разным правилам. Прибавляется текущее i, а не число итераций.",
        "challengeResult": "25 5",
        "options": [
          "25 5",
          "26 6",
          "5 52",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nint count = 0;\nfor (int i = 0; i <= 10; i++)\n{\n    if (i % 2 == 0)\n    {\n        sum += i;\n        count++;\n    }\n}\nConsole.WriteLine($\"{sum} {count}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В каждой итерации sum и count меняются по разным правилам. Прибавляется текущее i, а не число итераций.",
        "challengeResult": "30 6",
        "options": [
          "30 6",
          "31 7",
          "6 03",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nint count = 0;\nfor (int i = 1; i <= 11; i++)\n{\n    if (i % 2 == 1)\n    {\n        sum += i;\n        count++;\n    }\n}\nConsole.WriteLine($\"{sum} {count}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В каждой итерации sum и count меняются по разным правилам. Прибавляется текущее i, а не число итераций.",
        "challengeResult": "36 6",
        "options": [
          "36 6",
          "37 7",
          "6 63",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int sum = 0;\nint count = 0;\nfor (int i = 0; i <= 12; i++)\n{\n    if (i % 2 == 0)\n    {\n        sum += i;\n        count++;\n    }\n}\nConsole.WriteLine($\"{sum} {count}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В каждой итерации sum и count меняются по разным правилам. Прибавляется текущее i, а не число итераций.",
        "challengeResult": "42 7",
        "options": [
          "42 7",
          "43 8",
          "7 24",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "6 3",
    "options": [
      "6 3",
      "7 4",
      "3 6",
      "Ничего"
    ],
    "correctIndex": 0,
    "exampleResult": "42 7"
  },
  {
    "id": "expand-8-array-copy",
    "codeDeckId": "lab8-mixed-reading",
    "deckId": "arrays-traversal",
    "term": "Изменение элемента",
    "exampleCode": "int[] values = { 10, 13, 16 };\nint saved = values[2];\nvalues[2] = 28;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[2]);",
    "exampleNote": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 2, 5, 8 };\nint saved = values[0];\nvalues[0] = 20;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[0]);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
    "variants": [
      {
        "challengeCode": "int[] values = { 3, 6, 9 };\nint saved = values[1];\nvalues[1] = 21;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "6\n21",
        "options": [
          "6\n21",
          "21\n6",
          "7\n22",
          "621"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 4, 7, 10 };\nint saved = values[2];\nvalues[2] = 22;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[2]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "10\n22",
        "options": [
          "10\n22",
          "22\n10",
          "11\n23",
          "1022"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 5, 8, 11 };\nint saved = values[0];\nvalues[0] = 23;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "5\n23",
        "options": [
          "5\n23",
          "23\n5",
          "6\n24",
          "523"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 6, 9, 12 };\nint saved = values[1];\nvalues[1] = 24;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "9\n24",
        "options": [
          "9\n24",
          "24\n9",
          "10\n25",
          "924"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 7, 10, 13 };\nint saved = values[2];\nvalues[2] = 25;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[2]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "13\n25",
        "options": [
          "13\n25",
          "25\n13",
          "14\n26",
          "1325"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 8, 11, 14 };\nint saved = values[0];\nvalues[0] = 26;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "8\n26",
        "options": [
          "8\n26",
          "26\n8",
          "9\n27",
          "826"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 9, 12, 15 };\nint saved = values[1];\nvalues[1] = 27;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "12\n27",
        "options": [
          "12\n27",
          "27\n12",
          "13\n28",
          "1227"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 10, 13, 16 };\nint saved = values[2];\nvalues[2] = 28;\nConsole.WriteLine(saved);\nConsole.WriteLine(values[2]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Переменная int хранит копию выбранного элемента. Последующая запись в массив не меняет эту копию.",
        "challengeResult": "16\n28",
        "options": [
          "16\n28",
          "28\n16",
          "17\n29",
          "1628"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "2\n20",
    "options": [
      "2\n20",
      "20\n2",
      "3\n21",
      "220"
    ],
    "correctIndex": 0,
    "exampleResult": "16\n28"
  },
  {
    "id": "expand-8-array-update-order",
    "codeDeckId": "lab8-mixed-reading",
    "deckId": "arrays-traversal",
    "term": "Изменение элемента",
    "exampleCode": "int[] values = { 9, 11, 14 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[2];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
    "exampleNote": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 1, 3, 6 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[2];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
    "variants": [
      {
        "challengeCode": "int[] values = { 2, 4, 7 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[1];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "9 9",
        "options": [
          "9 9",
          "10 10",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 3, 5, 8 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[2];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "8 11",
        "options": [
          "8 11",
          "9 12",
          "11 8",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 4, 6, 9 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[1];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "13 13",
        "options": [
          "13 13",
          "14 14",
          "31 31",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 5, 7, 10 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[2];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "10 15",
        "options": [
          "10 15",
          "11 16",
          "51 01",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 6, 8, 11 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[1];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "17 17",
        "options": [
          "17 17",
          "18 18",
          "71 71",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 7, 9, 12 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[2];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "12 19",
        "options": [
          "12 19",
          "13 20",
          "91 21",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 8, 10, 13 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[1];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "21 21",
        "options": [
          "21 21",
          "22 22",
          "12 12",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 9, 11, 14 };\nvalues[1] = values[0] + values[2];\nvalues[0] = values[2];\nConsole.WriteLine($\"{values[0]} {values[1]}\");",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Каждая следующая запись использует уже изменённые элементы массива. Порядок присваиваний влияет на результат.",
        "challengeResult": "14 23",
        "options": [
          "14 23",
          "15 24",
          "32 41",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "6 7",
    "options": [
      "6 7",
      "7 8",
      "7 6",
      "Ничего"
    ],
    "correctIndex": 0,
    "exampleResult": "14 23"
  },
  {
    "id": "expand-8-array-defaults",
    "codeDeckId": "lab8-mixed-reading",
    "deckId": "arrays-basics",
    "term": "Значение по умолчанию",
    "exampleCode": "int[] values = new int[5];\nvalues[0] = 12;\nvalues[1] += 10;\nConsole.WriteLine(values[2]);",
    "exampleNote": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = new int[3];\nvalues[0] = 4;\nvalues[1] += 2;\nConsole.WriteLine(values[0]);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
    "variants": [
      {
        "challengeCode": "int[] values = new int[4];\nvalues[0] = 5;\nvalues[2] += 3;\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[5];\nvalues[0] = 6;\nvalues[1] += 4;\nConsole.WriteLine(values[2]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[3];\nvalues[0] = 7;\nvalues[2] += 5;\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[4];\nvalues[0] = 8;\nvalues[1] += 6;\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[5];\nvalues[0] = 9;\nvalues[2] += 7;\nConsole.WriteLine(values[2]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[3];\nvalues[0] = 10;\nvalues[1] += 8;\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[4];\nvalues[0] = 11;\nvalues[2] += 9;\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[5];\nvalues[0] = 12;\nvalues[1] += 10;\nConsole.WriteLine(values[2]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Незаполненные элементы int[] равны нулю. Прибавление к ячейке сохраняет результат именно в ней.",
        "challengeResult": "0",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "4",
    "options": [
      "4",
      "5",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "exampleResult": "0"
  },
  {
    "id": "expand-8-array-reverse",
    "codeDeckId": "lab8-mixed-reading",
    "deckId": "arrays-traversal",
    "term": "Перебор массива",
    "exampleCode": "int[] values = { 9, 12, 15 };\nfor (int i = values.Length - 1; i >= 0; i--)\n{\n    Console.WriteLine(values[i]);\n}",
    "exampleNote": "Начало с Length - 1 даёт последний элемент. Убывающий индекс задаёт обратный порядок обхода.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 1, 4, 7 };\nfor (int i = values.Length - 1; i >= 0; i--)\n{\n    Console.WriteLine(values[i]);\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Начало с Length - 1 даёт последний элемент. Убывающий индекс задаёт обратный порядок обхода.",
    "variants": [
      {
        "challengeCode": "int[] values = { 2, 5, 8 };\nfor (int i = values.Length - 1; i > 0; i--)\n{\n    Console.WriteLine(values[i]);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Начало с Length - 1 даёт последний элемент. Убывающий индекс задаёт обратный порядок обхода.",
        "challengeResult": "8\n5",
        "options": [
          "8\n5",
          "5\n8",
          "9\n6",
          "85"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 3, 6, 9 };\nfor (int i = values.Length - 1; i >= 0; i--)\n{\n    Console.WriteLine(values[i]);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Начало с Length - 1 даёт последний элемент. Убывающий индекс задаёт обратный порядок обхода.",
        "challengeResult": "9\n6\n3",
        "options": [
          "9\n6\n3",
          "3\n6\n9",
          "10\n7\n4",
          "963"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 4, 7, 10 };\nfor (int i = values.Length - 1; i > 0; i--)\n{\n    Console.WriteLine(values[i]);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Начало с Length - 1 даёт последний элемент. Убывающий индекс задаёт обратный порядок обхода.",
        "challengeResult": "10\n7",
        "options": [
          "10\n7",
          "7\n10",
          "11\n8",
          "107"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 5, 8, 11 };\nfor (int i = values.Length - 1; i >= 0; i--)\n{\n    Console.WriteLine(values[i]);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Начало с Length - 1 даёт последний элемент. Убывающий индекс задаёт обратный порядок обхода.",
        "challengeResult": "11\n8\n5",
        "options": [
          "11\n8\n5",
          "5\n8\n11",
          "12\n9\n6",
          "1185"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 6, 9, 12 };\nfor (int i = values.Length - 1; i > 0; i--)\n{\n    Console.WriteLine(values[i]);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Начало с Length - 1 даёт последний элемент. Убывающий индекс задаёт обратный порядок обхода.",
        "challengeResult": "12\n9",
        "options": [
          "12\n9",
          "9\n12",
          "13\n10",
          "129"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 7, 10, 13 };\nfor (int i = values.Length - 1; i >= 0; i--)\n{\n    Console.WriteLine(values[i]);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Начало с Length - 1 даёт последний элемент. Убывающий индекс задаёт обратный порядок обхода.",
        "challengeResult": "13\n10\n7",
        "options": [
          "13\n10\n7",
          "7\n10\n13",
          "14\n11\n8",
          "13107"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 8, 11, 14 };\nfor (int i = values.Length - 1; i > 0; i--)\n{\n    Console.WriteLine(values[i]);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Начало с Length - 1 даёт последний элемент. Убывающий индекс задаёт обратный порядок обхода.",
        "challengeResult": "14\n11",
        "options": [
          "14\n11",
          "11\n14",
          "15\n12",
          "1411"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 9, 12, 15 };\nfor (int i = values.Length - 1; i >= 0; i--)\n{\n    Console.WriteLine(values[i]);\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Начало с Length - 1 даёт последний элемент. Убывающий индекс задаёт обратный порядок обхода.",
        "challengeResult": "15\n12\n9",
        "options": [
          "15\n12\n9",
          "9\n12\n15",
          "16\n13\n10",
          "15129"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "7\n4\n1",
    "options": [
      "7\n4\n1",
      "1\n4\n7",
      "8\n5\n2",
      "741"
    ],
    "correctIndex": 0,
    "exampleResult": "15\n12\n9"
  },
  {
    "id": "expand-8-array-filter-sum",
    "codeDeckId": "lab8-mixed-reading",
    "deckId": "arrays-analysis",
    "term": "Сумма элементов",
    "exampleCode": "int[] values = { 4, 10, -3, 13 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] >= 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
    "exampleNote": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { -4, 2, -3, 5 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] >= 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
    "variants": [
      {
        "challengeCode": "int[] values = { -3, 3, -3, 6 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] < 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "-6",
        "options": [
          "-6",
          "-5",
          "-7",
          "-4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { -2, 4, -3, 7 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] >= 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { -1, 5, -3, 8 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] < 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "-4",
        "options": [
          "-4",
          "-3",
          "-5",
          "-2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 0, 6, -3, 9 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] >= 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "15",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 1, 7, -3, 10 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] < 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "-3",
        "options": [
          "-3",
          "-2",
          "-4",
          "-1"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 2, 8, -3, 11 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] >= 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 3, 9, -3, 12 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] < 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "-3",
        "options": [
          "-3",
          "-2",
          "-4",
          "-1"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 4, 10, -3, 13 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] >= 0)\n    {\n        sum += values[i];\n    }\n}\nConsole.WriteLine(sum);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "В сумму входят только элементы, прошедшие проверку. Условие проверяет значение ячейки, а не её индекс.",
        "challengeResult": "27",
        "options": [
          "27",
          "28",
          "26",
          "29"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "7",
    "options": [
      "7",
      "8",
      "6",
      "9"
    ],
    "correctIndex": 0,
    "exampleResult": "27"
  },
  {
    "id": "expand-8-array-index-value",
    "codeDeckId": "lab8-mixed-reading",
    "deckId": "arrays-analysis",
    "term": "Поиск по условию",
    "exampleCode": "int[] values = { 10, 16, 10, 13 };\nint result = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 10)\n    {\n        result += i + 1;\n    }\n}\nConsole.WriteLine(result);",
    "exampleNote": "Различайте индекс найденного элемента и его значение. В счётчик записывается то выражение, которое указано в теле.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 2, 8, 2, 5 };\nint result = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 2)\n    {\n        result += i + 1;\n    }\n}\nConsole.WriteLine(result);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Различайте индекс найденного элемента и его значение. В счётчик записывается то выражение, которое указано в теле.",
    "variants": [
      {
        "challengeCode": "int[] values = { 3, 9, 3, 6 };\nint result = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 3)\n    {\n        result += values[i];\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Различайте индекс найденного элемента и его значение. В счётчик записывается то выражение, которое указано в теле.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 4, 10, 4, 7 };\nint result = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 4)\n    {\n        result += i + 1;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Различайте индекс найденного элемента и его значение. В счётчик записывается то выражение, которое указано в теле.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 5, 11, 5, 8 };\nint result = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 5)\n    {\n        result += values[i];\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Различайте индекс найденного элемента и его значение. В счётчик записывается то выражение, которое указано в теле.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 6, 12, 6, 9 };\nint result = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 6)\n    {\n        result += i + 1;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Различайте индекс найденного элемента и его значение. В счётчик записывается то выражение, которое указано в теле.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 7, 13, 7, 10 };\nint result = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 7)\n    {\n        result += values[i];\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Различайте индекс найденного элемента и его значение. В счётчик записывается то выражение, которое указано в теле.",
        "challengeResult": "14",
        "options": [
          "14",
          "15",
          "13",
          "16"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 8, 14, 8, 11 };\nint result = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 8)\n    {\n        result += i + 1;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Различайте индекс найденного элемента и его значение. В счётчик записывается то выражение, которое указано в теле.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 9, 15, 9, 12 };\nint result = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 9)\n    {\n        result += values[i];\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Различайте индекс найденного элемента и его значение. В счётчик записывается то выражение, которое указано в теле.",
        "challengeResult": "18",
        "options": [
          "18",
          "19",
          "17",
          "20"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 10, 16, 10, 13 };\nint result = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    if (values[i] == 10)\n    {\n        result += i + 1;\n    }\n}\nConsole.WriteLine(result);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Различайте индекс найденного элемента и его значение. В счётчик записывается то выражение, которое указано в теле.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "4",
    "options": [
      "4",
      "5",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "exampleResult": "4"
  },
  {
    "id": "expand-8-array-max-index",
    "codeDeckId": "lab8-mixed-reading",
    "deckId": "arrays-analysis",
    "term": "Максимум массива",
    "exampleCode": "int[] values = { 10, 16, 11, 16 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
    "exampleNote": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 2, 8, 3, 8 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
    "variants": [
      {
        "challengeCode": "int[] values = { 3, 9, 4, 9 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] >= values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 4, 10, 5, 10 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 5, 11, 6, 11 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] >= values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 6, 12, 7, 12 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 7, 13, 8, 13 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] >= values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 8, 14, 9, 14 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 9, 15, 10, 15 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] >= values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 10, 16, 11, 16 };\nint best = 0;\nfor (int i = 1; i < values.Length; i++)\n{\n    if (values[i] > values[best])\n    {\n        best = i;\n    }\n}\nConsole.WriteLine(best);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При строгом > сохраняется индекс первого максимума, при >= — последнего. Сам максимум при этом одинаков.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "1",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "correctIndex": 0,
    "exampleResult": "1"
  },
  {
    "id": "expand-8-array-repeat-count",
    "codeDeckId": "lab8-mixed-reading",
    "deckId": "arrays-analysis",
    "term": "Подсчёт по условию",
    "exampleCode": "int[] values = { 0, 10, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
    "exampleNote": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 0, 2, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
    "variants": [
      {
        "challengeCode": "int[] values = { 1, 3, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    count = 0;\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 0, 4, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 1, 5, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    count = 0;\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 0, 6, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 1, 7, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    count = 0;\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 0, 8, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 1, 9, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    count = 0;\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "1",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 0, 10, 0 };\nint count = 0;\nfor (int pass = 0; pass < 2; pass++)\n{\n    for (int i = 0; i < values.Length; i++)\n    {\n        if (values[i] == 0)\n        {\n            count++;\n        }\n    }\n}\nConsole.WriteLine(count);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Счётчик должен учитывать только подходящие значения. При повторном обходе учтите, обнуляется ли он.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "4",
    "options": [
      "4",
      "5",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "exampleResult": "4"
  },
  {
    "id": "expand-8-array-prefix",
    "codeDeckId": "lab8-mixed-reading",
    "deckId": "arrays-traversal",
    "term": "Заполнение массива",
    "exampleCode": "int[] values = new int[5];\nvalues[0] = 9;\nfor (int i = 1; i < values.Length; i++)\n{\n    values[i] = values[i - 1] * 2;\n}\nConsole.WriteLine(values[values.Length - 1]);",
    "exampleNote": "При заполнении слева направо предыдущая ячейка уже содержит рассчитанное значение.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = new int[3];\nvalues[0] = 1;\nfor (int i = 1; i < values.Length; i++)\n{\n    values[i] = values[i - 1] * 2;\n}\nConsole.WriteLine(values[values.Length - 1]);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "При заполнении слева направо предыдущая ячейка уже содержит рассчитанное значение.",
    "variants": [
      {
        "challengeCode": "int[] values = new int[4];\nvalues[0] = 2;\nfor (int i = 1; i < values.Length; i++)\n{\n    values[i] = values[i - 1] + 2;\n}\nConsole.WriteLine(values[values.Length - 1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При заполнении слева направо предыдущая ячейка уже содержит рассчитанное значение.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[5];\nvalues[0] = 3;\nfor (int i = 1; i < values.Length; i++)\n{\n    values[i] = values[i - 1] * 2;\n}\nConsole.WriteLine(values[values.Length - 1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При заполнении слева направо предыдущая ячейка уже содержит рассчитанное значение.",
        "challengeResult": "48",
        "options": [
          "48",
          "49",
          "47",
          "50"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[3];\nvalues[0] = 4;\nfor (int i = 1; i < values.Length; i++)\n{\n    values[i] = values[i - 1] + 2;\n}\nConsole.WriteLine(values[values.Length - 1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При заполнении слева направо предыдущая ячейка уже содержит рассчитанное значение.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[4];\nvalues[0] = 5;\nfor (int i = 1; i < values.Length; i++)\n{\n    values[i] = values[i - 1] * 2;\n}\nConsole.WriteLine(values[values.Length - 1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При заполнении слева направо предыдущая ячейка уже содержит рассчитанное значение.",
        "challengeResult": "40",
        "options": [
          "40",
          "41",
          "39",
          "42"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[5];\nvalues[0] = 6;\nfor (int i = 1; i < values.Length; i++)\n{\n    values[i] = values[i - 1] + 2;\n}\nConsole.WriteLine(values[values.Length - 1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При заполнении слева направо предыдущая ячейка уже содержит рассчитанное значение.",
        "challengeResult": "14",
        "options": [
          "14",
          "15",
          "13",
          "16"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[3];\nvalues[0] = 7;\nfor (int i = 1; i < values.Length; i++)\n{\n    values[i] = values[i - 1] * 2;\n}\nConsole.WriteLine(values[values.Length - 1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При заполнении слева направо предыдущая ячейка уже содержит рассчитанное значение.",
        "challengeResult": "28",
        "options": [
          "28",
          "29",
          "27",
          "30"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[4];\nvalues[0] = 8;\nfor (int i = 1; i < values.Length; i++)\n{\n    values[i] = values[i - 1] + 2;\n}\nConsole.WriteLine(values[values.Length - 1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При заполнении слева направо предыдущая ячейка уже содержит рассчитанное значение.",
        "challengeResult": "14",
        "options": [
          "14",
          "15",
          "13",
          "16"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = new int[5];\nvalues[0] = 9;\nfor (int i = 1; i < values.Length; i++)\n{\n    values[i] = values[i - 1] * 2;\n}\nConsole.WriteLine(values[values.Length - 1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "При заполнении слева направо предыдущая ячейка уже содержит рассчитанное значение.",
        "challengeResult": "144",
        "options": [
          "144",
          "145",
          "143",
          "146"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "4",
    "options": [
      "4",
      "5",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "exampleResult": "144"
  },
  {
    "id": "expand-8-array-saved-sum",
    "codeDeckId": "lab8-mixed-reading",
    "deckId": "arrays-analysis",
    "term": "Пересчёт результатов",
    "exampleCode": "int[] values = { 11, 14 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    sum += values[i];\n}\nvalues[0] = 28;\nConsole.WriteLine(sum);\nConsole.WriteLine(values[0]);",
    "exampleNote": "Сумма хранит результат выполненного обхода. Последующие изменения массива не пересчитывают её автоматически.",
    "kind": "Что выведет код?",
    "challengeCode": "int[] values = { 3, 6 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    sum += values[i];\n}\nvalues[0] = 20;\nConsole.WriteLine(sum);\nConsole.WriteLine(values[0]);",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Сумма хранит результат выполненного обхода. Последующие изменения массива не пересчитывают её автоматически.",
    "variants": [
      {
        "challengeCode": "int[] values = { 4, 7 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    sum += values[i];\n}\nvalues[1] = 21;\nConsole.WriteLine(sum);\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сумма хранит результат выполненного обхода. Последующие изменения массива не пересчитывают её автоматически.",
        "challengeResult": "11\n21",
        "options": [
          "11\n21",
          "21\n11",
          "12\n22",
          "1121"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 5, 8 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    sum += values[i];\n}\nvalues[0] = 22;\nConsole.WriteLine(sum);\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сумма хранит результат выполненного обхода. Последующие изменения массива не пересчитывают её автоматически.",
        "challengeResult": "13\n22",
        "options": [
          "13\n22",
          "22\n13",
          "14\n23",
          "1322"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 6, 9 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    sum += values[i];\n}\nvalues[1] = 23;\nConsole.WriteLine(sum);\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сумма хранит результат выполненного обхода. Последующие изменения массива не пересчитывают её автоматически.",
        "challengeResult": "15\n23",
        "options": [
          "15\n23",
          "23\n15",
          "16\n24",
          "1523"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 7, 10 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    sum += values[i];\n}\nvalues[0] = 24;\nConsole.WriteLine(sum);\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сумма хранит результат выполненного обхода. Последующие изменения массива не пересчитывают её автоматически.",
        "challengeResult": "17\n24",
        "options": [
          "17\n24",
          "24\n17",
          "18\n25",
          "1724"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 8, 11 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    sum += values[i];\n}\nvalues[1] = 25;\nConsole.WriteLine(sum);\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сумма хранит результат выполненного обхода. Последующие изменения массива не пересчитывают её автоматически.",
        "challengeResult": "19\n25",
        "options": [
          "19\n25",
          "25\n19",
          "20\n26",
          "1925"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 9, 12 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    sum += values[i];\n}\nvalues[0] = 26;\nConsole.WriteLine(sum);\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сумма хранит результат выполненного обхода. Последующие изменения массива не пересчитывают её автоматически.",
        "challengeResult": "21\n26",
        "options": [
          "21\n26",
          "26\n21",
          "22\n27",
          "2126"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 10, 13 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    sum += values[i];\n}\nvalues[1] = 27;\nConsole.WriteLine(sum);\nConsole.WriteLine(values[1]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сумма хранит результат выполненного обхода. Последующие изменения массива не пересчитывают её автоматически.",
        "challengeResult": "23\n27",
        "options": [
          "23\n27",
          "27\n23",
          "24\n28",
          "2327"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int[] values = { 11, 14 };\nint sum = 0;\nfor (int i = 0; i < values.Length; i++)\n{\n    sum += values[i];\n}\nvalues[0] = 28;\nConsole.WriteLine(sum);\nConsole.WriteLine(values[0]);",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сумма хранит результат выполненного обхода. Последующие изменения массива не пересчитывают её автоматически.",
        "challengeResult": "25\n28",
        "options": [
          "25\n28",
          "28\n25",
          "26\n29",
          "2528"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "9\n20",
    "options": [
      "9\n20",
      "20\n9",
      "10\n21",
      "920"
    ],
    "correctIndex": 0,
    "exampleResult": "25\n28"
  },
  {
    "id": "expand-9-method-composition",
    "codeDeckId": "lab9-mixed-reading",
    "deckId": "methods-basics",
    "term": "Вызов метода",
    "exampleCode": "Console.WriteLine(Add(10, Double(3)));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
    "exampleNote": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Add(2, Double(3)));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(Add(Double(3), 3));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(4, Double(3)));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "10",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(Double(5), 3));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "13",
        "options": [
          "13",
          "14",
          "12",
          "15"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(6, Double(3)));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(Double(7), 3));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "17",
        "options": [
          "17",
          "18",
          "16",
          "19"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(8, Double(3)));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "14",
        "options": [
          "14",
          "15",
          "13",
          "16"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(Double(9), 3));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "21",
        "options": [
          "21",
          "22",
          "20",
          "23"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Add(10, Double(3)));\nint Add(int first, int second)\n{\n    return first + second;\n}\nint Double(int number)\n{\n    return number * 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Сначала вычисляется внутренний вызов, его результат становится аргументом внешнего вызова.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "8",
    "options": [
      "8",
      "9",
      "7",
      "10"
    ],
    "correctIndex": 0,
    "exampleResult": "16"
  },
  {
    "id": "expand-9-method-argument-order",
    "codeDeckId": "lab9-mixed-reading",
    "deckId": "methods-basics",
    "term": "Порядок аргументов",
    "exampleCode": "int a = 16;\nint b = 10;\nConsole.WriteLine(Difference(a, b));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
    "exampleNote": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
    "kind": "Что выведет код?",
    "challengeCode": "int a = 8;\nint b = 2;\nConsole.WriteLine(Difference(a, b));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
    "variants": [
      {
        "challengeCode": "int a = 9;\nint b = 3;\nConsole.WriteLine(Difference(b, a));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "-6",
        "options": [
          "-6",
          "-5",
          "-7",
          "-4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 10;\nint b = 4;\nConsole.WriteLine(Difference(a, b));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 11;\nint b = 5;\nConsole.WriteLine(Difference(b, a));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "-6",
        "options": [
          "-6",
          "-5",
          "-7",
          "-4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 12;\nint b = 6;\nConsole.WriteLine(Difference(a, b));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 13;\nint b = 7;\nConsole.WriteLine(Difference(b, a));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "-6",
        "options": [
          "-6",
          "-5",
          "-7",
          "-4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 14;\nint b = 8;\nConsole.WriteLine(Difference(a, b));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 15;\nint b = 9;\nConsole.WriteLine(Difference(b, a));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "-6",
        "options": [
          "-6",
          "-5",
          "-7",
          "-4"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int a = 16;\nint b = 10;\nConsole.WriteLine(Difference(a, b));\nint Difference(int first, int second)\n{\n    return first - second;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Позиционные аргументы передаются по порядку. Перестановка аргументов у вычитания меняет результат.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "6",
    "options": [
      "6",
      "7",
      "5",
      "8"
    ],
    "correctIndex": 0,
    "exampleResult": "6"
  },
  {
    "id": "expand-9-method-ignored-return",
    "codeDeckId": "lab9-mixed-reading",
    "deckId": "methods-return-scope",
    "term": "Возвращаемое значение",
    "exampleCode": "int value = 11;\nIncrease(value);\nConsole.WriteLine(value);\nint Increase(int number)\n{\n    number += 4;\n    return number;\n}",
    "exampleNote": "Возвращаемое число меняет внешнюю переменную только при явном присваивании результата вызова.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 3;\nIncrease(value);\nConsole.WriteLine(value);\nint Increase(int number)\n{\n    number += 2;\n    return number;\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Возвращаемое число меняет внешнюю переменную только при явном присваивании результата вызова.",
    "variants": [
      {
        "challengeCode": "int value = 4;\nvalue = Increase(value);\nConsole.WriteLine(value);\nint Increase(int number)\n{\n    number += 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Возвращаемое число меняет внешнюю переменную только при явном присваивании результата вызова.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 5;\nIncrease(value);\nConsole.WriteLine(value);\nint Increase(int number)\n{\n    number += 4;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Возвращаемое число меняет внешнюю переменную только при явном присваивании результата вызова.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 6;\nvalue = Increase(value);\nConsole.WriteLine(value);\nint Increase(int number)\n{\n    number += 2;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Возвращаемое число меняет внешнюю переменную только при явном присваивании результата вызова.",
        "challengeResult": "8",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 7;\nIncrease(value);\nConsole.WriteLine(value);\nint Increase(int number)\n{\n    number += 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Возвращаемое число меняет внешнюю переменную только при явном присваивании результата вызова.",
        "challengeResult": "7",
        "options": [
          "7",
          "8",
          "6",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 8;\nvalue = Increase(value);\nConsole.WriteLine(value);\nint Increase(int number)\n{\n    number += 4;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Возвращаемое число меняет внешнюю переменную только при явном присваивании результата вызова.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 9;\nIncrease(value);\nConsole.WriteLine(value);\nint Increase(int number)\n{\n    number += 2;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Возвращаемое число меняет внешнюю переменную только при явном присваивании результата вызова.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 10;\nvalue = Increase(value);\nConsole.WriteLine(value);\nint Increase(int number)\n{\n    number += 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Возвращаемое число меняет внешнюю переменную только при явном присваивании результата вызова.",
        "challengeResult": "13",
        "options": [
          "13",
          "14",
          "12",
          "15"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 11;\nIncrease(value);\nConsole.WriteLine(value);\nint Increase(int number)\n{\n    number += 4;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Возвращаемое число меняет внешнюю переменную только при явном присваивании результата вызова.",
        "challengeResult": "11",
        "options": [
          "11",
          "12",
          "10",
          "13"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "3",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "correctIndex": 0,
    "exampleResult": "11"
  },
  {
    "id": "expand-9-method-return-exit",
    "codeDeckId": "lab9-mixed-reading",
    "deckId": "methods-return-scope",
    "term": "return",
    "exampleCode": "Console.WriteLine(Choose(4));\nint Choose(int number)\n{\n    if (number > 0)\n    {\n        return number + 2;\n    }\n    return number - 2;\n}",
    "exampleNote": "Первый выполненный return завершает текущий вызов. Следующие команды этого вызова пропускаются.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Choose(-4));\nint Choose(int number)\n{\n    if (number > 0)\n    {\n        return number + 2;\n    }\n    return number - 2;\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Первый выполненный return завершает текущий вызов. Следующие команды этого вызова пропускаются.",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(Choose(-3));\nint Choose(int number)\n{\n    if (number >= 0)\n    {\n        return number + 2;\n    }\n    return number - 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Первый выполненный return завершает текущий вызов. Следующие команды этого вызова пропускаются.",
        "challengeResult": "-5",
        "options": [
          "-5",
          "-4",
          "-6",
          "-3"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Choose(-2));\nint Choose(int number)\n{\n    if (number > 0)\n    {\n        return number + 2;\n    }\n    return number - 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Первый выполненный return завершает текущий вызов. Следующие команды этого вызова пропускаются.",
        "challengeResult": "-4",
        "options": [
          "-4",
          "-3",
          "-5",
          "-2"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Choose(-1));\nint Choose(int number)\n{\n    if (number >= 0)\n    {\n        return number + 2;\n    }\n    return number - 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Первый выполненный return завершает текущий вызов. Следующие команды этого вызова пропускаются.",
        "challengeResult": "-3",
        "options": [
          "-3",
          "-2",
          "-4",
          "-1"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Choose(0));\nint Choose(int number)\n{\n    if (number > 0)\n    {\n        return number + 2;\n    }\n    return number - 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Первый выполненный return завершает текущий вызов. Следующие команды этого вызова пропускаются.",
        "challengeResult": "-2",
        "options": [
          "-2",
          "-1",
          "-3",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Choose(1));\nint Choose(int number)\n{\n    if (number >= 0)\n    {\n        return number + 2;\n    }\n    return number - 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Первый выполненный return завершает текущий вызов. Следующие команды этого вызова пропускаются.",
        "challengeResult": "3",
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Choose(2));\nint Choose(int number)\n{\n    if (number > 0)\n    {\n        return number + 2;\n    }\n    return number - 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Первый выполненный return завершает текущий вызов. Следующие команды этого вызова пропускаются.",
        "challengeResult": "4",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Choose(3));\nint Choose(int number)\n{\n    if (number >= 0)\n    {\n        return number + 2;\n    }\n    return number - 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Первый выполненный return завершает текущий вызов. Следующие команды этого вызова пропускаются.",
        "challengeResult": "5",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Choose(4));\nint Choose(int number)\n{\n    if (number > 0)\n    {\n        return number + 2;\n    }\n    return number - 2;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Первый выполненный return завершает текущий вызов. Следующие команды этого вызова пропускаются.",
        "challengeResult": "6",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "-6",
    "options": [
      "-6",
      "-5",
      "-7",
      "-4"
    ],
    "correctIndex": 0,
    "exampleResult": "6"
  },
  {
    "id": "expand-9-method-local-count",
    "codeDeckId": "lab9-mixed-reading",
    "deckId": "methods-return-scope",
    "term": "Локальная переменная метода",
    "exampleCode": "Console.WriteLine(Count(10));\nConsole.WriteLine(Count(11));\nint Count(int limit)\n{\n    int count = 0;\n    for (int i = 0; i < limit; i++)\n    {\n        count++;\n    }\n    return count;\n}",
    "exampleNote": "Локальная переменная создаётся заново при каждом вызове. Результат предыдущего вызова не накапливается в ней.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Count(2));\nConsole.WriteLine(Count(3));\nint Count(int limit)\n{\n    int count = 0;\n    for (int i = 0; i < limit; i++)\n    {\n        count++;\n    }\n    return count;\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Локальная переменная создаётся заново при каждом вызове. Результат предыдущего вызова не накапливается в ней.",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(Count(3));\nConsole.WriteLine(Count(4));\nint Count(int limit)\n{\n    int count = 0;\n    for (int i = 0; i <= limit; i++)\n    {\n        count++;\n    }\n    return count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Локальная переменная создаётся заново при каждом вызове. Результат предыдущего вызова не накапливается в ней.",
        "challengeResult": "4\n5",
        "options": [
          "4\n5",
          "5\n4",
          "5\n6",
          "45"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Count(4));\nConsole.WriteLine(Count(5));\nint Count(int limit)\n{\n    int count = 0;\n    for (int i = 0; i < limit; i++)\n    {\n        count++;\n    }\n    return count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Локальная переменная создаётся заново при каждом вызове. Результат предыдущего вызова не накапливается в ней.",
        "challengeResult": "4\n5",
        "options": [
          "4\n5",
          "5\n4",
          "5\n6",
          "45"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Count(5));\nConsole.WriteLine(Count(6));\nint Count(int limit)\n{\n    int count = 0;\n    for (int i = 0; i <= limit; i++)\n    {\n        count++;\n    }\n    return count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Локальная переменная создаётся заново при каждом вызове. Результат предыдущего вызова не накапливается в ней.",
        "challengeResult": "6\n7",
        "options": [
          "6\n7",
          "7\n6",
          "7\n8",
          "67"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Count(6));\nConsole.WriteLine(Count(7));\nint Count(int limit)\n{\n    int count = 0;\n    for (int i = 0; i < limit; i++)\n    {\n        count++;\n    }\n    return count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Локальная переменная создаётся заново при каждом вызове. Результат предыдущего вызова не накапливается в ней.",
        "challengeResult": "6\n7",
        "options": [
          "6\n7",
          "7\n6",
          "7\n8",
          "67"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Count(7));\nConsole.WriteLine(Count(8));\nint Count(int limit)\n{\n    int count = 0;\n    for (int i = 0; i <= limit; i++)\n    {\n        count++;\n    }\n    return count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Локальная переменная создаётся заново при каждом вызове. Результат предыдущего вызова не накапливается в ней.",
        "challengeResult": "8\n9",
        "options": [
          "8\n9",
          "9\n8",
          "9\n10",
          "89"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Count(8));\nConsole.WriteLine(Count(9));\nint Count(int limit)\n{\n    int count = 0;\n    for (int i = 0; i < limit; i++)\n    {\n        count++;\n    }\n    return count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Локальная переменная создаётся заново при каждом вызове. Результат предыдущего вызова не накапливается в ней.",
        "challengeResult": "8\n9",
        "options": [
          "8\n9",
          "9\n8",
          "9\n10",
          "89"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Count(9));\nConsole.WriteLine(Count(10));\nint Count(int limit)\n{\n    int count = 0;\n    for (int i = 0; i <= limit; i++)\n    {\n        count++;\n    }\n    return count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Локальная переменная создаётся заново при каждом вызове. Результат предыдущего вызова не накапливается в ней.",
        "challengeResult": "10\n11",
        "options": [
          "10\n11",
          "11\n10",
          "11\n12",
          "1011"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Count(10));\nConsole.WriteLine(Count(11));\nint Count(int limit)\n{\n    int count = 0;\n    for (int i = 0; i < limit; i++)\n    {\n        count++;\n    }\n    return count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Локальная переменная создаётся заново при каждом вызове. Результат предыдущего вызова не накапливается в ней.",
        "challengeResult": "10\n11",
        "options": [
          "10\n11",
          "11\n10",
          "11\n12",
          "1011"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "2\n3",
    "options": [
      "2\n3",
      "3\n2",
      "3\n4",
      "23"
    ],
    "correctIndex": 0,
    "exampleResult": "10\n11"
  },
  {
    "id": "expand-9-method-copy",
    "codeDeckId": "lab9-mixed-reading",
    "deckId": "methods-return-scope",
    "term": "Передача по значению",
    "exampleCode": "int value = 12;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number += 3;\n    return number;\n}",
    "exampleNote": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
    "kind": "Что выведет код?",
    "challengeCode": "int value = 4;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number += 3;\n    return number;\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
    "variants": [
      {
        "challengeCode": "int value = 5;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number *= 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "5 15",
        "options": [
          "5 15",
          "6 16",
          "51 5",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 6;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number += 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "6 9",
        "options": [
          "6 9",
          "7 10",
          "9 6",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 7;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number *= 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "7 21",
        "options": [
          "7 21",
          "8 22",
          "12 7",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 8;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number += 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "8 11",
        "options": [
          "8 11",
          "9 12",
          "11 8",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 9;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number *= 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "9 27",
        "options": [
          "9 27",
          "10 28",
          "72 9",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 10;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number += 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "10 13",
        "options": [
          "10 13",
          "11 14",
          "31 01",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 11;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number *= 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "11 33",
        "options": [
          "11 33",
          "12 34",
          "33 11",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int value = 12;\nint result = Change(value);\nConsole.WriteLine($\"{value} {result}\");\nint Change(int number)\n{\n    number += 3;\n    return number;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Параметр int получает копию значения. Изменение параметра не переприсваивает аргумент снаружи.",
        "challengeResult": "12 15",
        "options": [
          "12 15",
          "13 16",
          "51 21",
          "Ничего"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "4 7",
    "options": [
      "4 7",
      "5 8",
      "7 4",
      "Ничего"
    ],
    "correctIndex": 0,
    "exampleResult": "12 15"
  },
  {
    "id": "expand-9-method-loop-return",
    "codeDeckId": "lab9-mixed-reading",
    "deckId": "methods-purchase",
    "term": "Расчётный метод",
    "exampleCode": "Console.WriteLine(Sum(12));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
    "exampleNote": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(Sum(4));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
    "variants": [
      {
        "challengeCode": "Console.WriteLine(Sum(5));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 1)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "9",
        "options": [
          "9",
          "10",
          "8",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(6));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "12",
        "options": [
          "12",
          "13",
          "11",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(7));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 1)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "16",
        "options": [
          "16",
          "17",
          "15",
          "18"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(8));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "20",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(9));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 1)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "25",
        "options": [
          "25",
          "26",
          "24",
          "27"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(10));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "30",
        "options": [
          "30",
          "31",
          "29",
          "32"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(11));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 1)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "36",
        "options": [
          "36",
          "37",
          "35",
          "38"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Console.WriteLine(Sum(12));\nint Sum(int limit)\n{\n    int sum = 0;\n    for (int i = 1; i <= limit; i++)\n    {\n        if (i % 2 == 0)\n        {\n            sum += i;\n        }\n    }\n    return sum;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод суммирует только значения, подходящие под условие. Начальное значение накопителя задаётся для каждого вызова.",
        "challengeResult": "42",
        "options": [
          "42",
          "43",
          "41",
          "44"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "6",
    "options": [
      "6",
      "7",
      "5",
      "8"
    ],
    "correctIndex": 0,
    "exampleResult": "42"
  },
  {
    "id": "expand-9-method-print-order",
    "codeDeckId": "lab9-mixed-reading",
    "deckId": "methods-purchase",
    "term": "Метод вывода",
    "exampleCode": "Show(10);\nConsole.Write(\"Z\");\nvoid Show(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.Write(\"A\");\n    }\n}",
    "exampleNote": "Вывод внутри метода происходит во время вызова, до следующей команды вызывающего кода.",
    "kind": "Что выведет код?",
    "challengeCode": "Show(2);\nConsole.Write(\"Z\");\nvoid Show(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.Write(\"A\");\n    }\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Вывод внутри метода происходит во время вызова, до следующей команды вызывающего кода.",
    "variants": [
      {
        "challengeCode": "Show(3);\nConsole.Write(\"Z\");\nvoid Show(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.WriteLine(\"A\");\n    }\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Вывод внутри метода происходит во время вызова, до следующей команды вызывающего кода.",
        "challengeResult": "A\nA\nA\nZ",
        "options": [
          "A\nA\nA\nZ",
          "Z\nA\nA\nA",
          "AAAZ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Show(4);\nConsole.Write(\"Z\");\nvoid Show(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.Write(\"A\");\n    }\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Вывод внутри метода происходит во время вызова, до следующей команды вызывающего кода.",
        "challengeResult": "AAAAZ",
        "options": [
          "AAAAZ",
          "ZAAAA",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Show(5);\nConsole.Write(\"Z\");\nvoid Show(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.WriteLine(\"A\");\n    }\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Вывод внутри метода происходит во время вызова, до следующей команды вызывающего кода.",
        "challengeResult": "A\nA\nA\nA\nA\nZ",
        "options": [
          "A\nA\nA\nA\nA\nZ",
          "Z\nA\nA\nA\nA\nA",
          "AAAAAZ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Show(6);\nConsole.Write(\"Z\");\nvoid Show(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.Write(\"A\");\n    }\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Вывод внутри метода происходит во время вызова, до следующей команды вызывающего кода.",
        "challengeResult": "AAAAAAZ",
        "options": [
          "AAAAAAZ",
          "ZAAAAAA",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Show(7);\nConsole.Write(\"Z\");\nvoid Show(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.WriteLine(\"A\");\n    }\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Вывод внутри метода происходит во время вызова, до следующей команды вызывающего кода.",
        "challengeResult": "A\nA\nA\nA\nA\nA\nA\nZ",
        "options": [
          "A\nA\nA\nA\nA\nA\nA\nZ",
          "Z\nA\nA\nA\nA\nA\nA\nA",
          "AAAAAAAZ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Show(8);\nConsole.Write(\"Z\");\nvoid Show(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.Write(\"A\");\n    }\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Вывод внутри метода происходит во время вызова, до следующей команды вызывающего кода.",
        "challengeResult": "AAAAAAAAZ",
        "options": [
          "AAAAAAAAZ",
          "ZAAAAAAAA",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Show(9);\nConsole.Write(\"Z\");\nvoid Show(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.WriteLine(\"A\");\n    }\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Вывод внутри метода происходит во время вызова, до следующей команды вызывающего кода.",
        "challengeResult": "A\nA\nA\nA\nA\nA\nA\nA\nA\nZ",
        "options": [
          "A\nA\nA\nA\nA\nA\nA\nA\nA\nZ",
          "Z\nA\nA\nA\nA\nA\nA\nA\nA\nA",
          "AAAAAAAAAZ",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "Show(10);\nConsole.Write(\"Z\");\nvoid Show(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        Console.Write(\"A\");\n    }\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Вывод внутри метода происходит во время вызова, до следующей команды вызывающего кода.",
        "challengeResult": "AAAAAAAAAAZ",
        "options": [
          "AAAAAAAAAAZ",
          "ZAAAAAAAAAA",
          "Ничего",
          "Ошибка компиляции"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "AAZ",
    "options": [
      "AAZ",
      "ZAA",
      "Ничего",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "exampleResult": "AAAAAAAAAAZ"
  },
  {
    "id": "expand-9-method-discount-two",
    "codeDeckId": "lab9-mixed-reading",
    "deckId": "methods-purchase",
    "term": "CalculateDiscount",
    "exampleCode": "decimal cost = 260m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
    "exampleNote": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
    "kind": "Что выведет код?",
    "challengeCode": "decimal cost = 100m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
    "challengeInput": "",
    "prompt": "Какое число выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
    "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
    "variants": [
      {
        "challengeCode": "decimal cost = 120m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost - first, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Какое число выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "86.4",
        "options": [
          "86.4",
          "87.5",
          "4.68",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 140m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Какое число выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "98",
        "options": [
          "98",
          "99",
          "97",
          "100"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 160m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost - first, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Какое число выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "115.2",
        "options": [
          "115.2",
          "116.3",
          "2.511",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 180m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Какое число выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "126",
        "options": [
          "126",
          "127",
          "125",
          "128"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 200m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost - first, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Какое число выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "144",
        "options": [
          "144",
          "145",
          "143",
          "146"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 220m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Какое число выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "154",
        "options": [
          "154",
          "155",
          "153",
          "156"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 240m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost - first, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Какое число выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "172.8",
        "options": [
          "172.8",
          "173.9",
          "8.271",
          "Ничего"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "decimal cost = 260m;\ndecimal first = Discount(cost, 10);\ndecimal second = Discount(cost, 20);\nConsole.WriteLine(cost - first - second);\ndecimal Discount(decimal cost, int percent)\n{\n    return cost * percent / 100;\n}",
        "challengeInput": "",
        "prompt": "Какое число выведется? Точка обозначает десятичный разделитель; на компьютере возможна запятая.",
        "explanation": "Метод возвращает размер скидки. Сравните, от какой суммы вычисляется каждый следующий процент.",
        "challengeResult": "182",
        "options": [
          "182",
          "183",
          "181",
          "184"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "70",
    "options": [
      "70",
      "71",
      "69",
      "72"
    ],
    "correctIndex": 0,
    "exampleResult": "182"
  },
  {
    "id": "expand-9-method-cost-values",
    "codeDeckId": "lab9-mixed-reading",
    "deckId": "methods-purchase",
    "term": "CalculateCost",
    "exampleCode": "int quantity = 4;\ndecimal cost = Cost(18m, quantity);\nquantity += 1;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
    "exampleNote": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
    "kind": "Что выведет код?",
    "challengeCode": "int quantity = 2;\ndecimal cost = Cost(10m, quantity);\nquantity += 1;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
    "challengeInput": "",
    "prompt": "Что появится в консоли?",
    "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
    "variants": [
      {
        "challengeCode": "int quantity = 3;\ndecimal cost = Cost(11m, quantity);\nquantity += 2;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "33\n5",
        "options": [
          "33\n5",
          "5\n33",
          "34\n6",
          "335"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 4;\ndecimal cost = Cost(12m, quantity);\nquantity += 1;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "48\n5",
        "options": [
          "48\n5",
          "5\n48",
          "49\n6",
          "485"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 2;\ndecimal cost = Cost(13m, quantity);\nquantity += 2;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "26\n4",
        "options": [
          "26\n4",
          "4\n26",
          "27\n5",
          "264"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 3;\ndecimal cost = Cost(14m, quantity);\nquantity += 1;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "42\n4",
        "options": [
          "42\n4",
          "4\n42",
          "43\n5",
          "424"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 4;\ndecimal cost = Cost(15m, quantity);\nquantity += 2;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "60\n6",
        "options": [
          "60\n6",
          "6\n60",
          "61\n7",
          "606"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 2;\ndecimal cost = Cost(16m, quantity);\nquantity += 1;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "32\n3",
        "options": [
          "32\n3",
          "3\n32",
          "33\n4",
          "323"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 3;\ndecimal cost = Cost(17m, quantity);\nquantity += 2;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "51\n5",
        "options": [
          "51\n5",
          "5\n51",
          "52\n6",
          "515"
        ],
        "correctIndex": 0
      },
      {
        "challengeCode": "int quantity = 4;\ndecimal cost = Cost(18m, quantity);\nquantity += 1;\nConsole.WriteLine(cost);\nConsole.WriteLine(quantity);\ndecimal Cost(decimal price, int count)\n{\n    return price * count;\n}",
        "challengeInput": "",
        "prompt": "Что появится в консоли?",
        "explanation": "Метод получает текущие значения аргументов при вызове. Изменение количества после расчёта не меняет сохранённую стоимость.",
        "challengeResult": "72\n5",
        "options": [
          "72\n5",
          "5\n72",
          "73\n6",
          "725"
        ],
        "correctIndex": 0
      }
    ],
    "challengeResult": "20\n3",
    "options": [
      "20\n3",
      "3\n20",
      "21\n4",
      "203"
    ],
    "correctIndex": 0,
    "exampleResult": "72\n5"
  }
];
