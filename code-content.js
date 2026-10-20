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
    "challengeCode": "int debts = 1;\nConsole.WriteLine(debts == 0);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "1",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "1 не равно 0, поэтому сравнение даёт false; Console.WriteLine выводит False.",
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
    "challengeCode": "int score = 60;\nint debts = 0;\nConsole.WriteLine(score < 60 || debts > 0);",
    "prompt": "Нужна ли консультация по этим правилам? Что выведет код?",
    "options": [
      "True",
      "False",
      "60",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Баллы не меньше 60 и задолженностей нет. Обе части || ложны.",
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
    "challengeCode": "int score = 59;\nConsole.WriteLine(score >= 60);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "59",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "59 меньше 60, поэтому условие ложно.",
    "challengeResult": "False",
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
    "exampleNote": "Если один из этих операндов строка, + соединяет текст. Получается строка 73, а не сумма 10.",
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
    "exampleNote": "Строковая интерполяция подставляет сначала текст word, затем символ mark.",
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
    "exampleNote": "Строка из одного пробела не пуста: пробел остаётся между квадратными скобками.",
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
    "exampleNote": "Без скобок сначала вычисляется &&, а затем ||. Это может отличаться от простого чтения слева направо.",
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
  }
];
