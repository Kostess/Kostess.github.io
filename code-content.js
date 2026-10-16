// deckId + term links a glossary entry; codeDeckId selects the practice deck.
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
    "codeDeckId": "lab4-variables-values"
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
    "codeDeckId": "lab4-variables-values"
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
    "challengeCode": "bool isAdult = 17 >= 18;\nConsole.WriteLine(isAdult);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "17",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "17 не больше и не равно 18, поэтому сравнение даёт false; в консоли появится False.",
    "codeDeckId": "lab4-csharp-data-types"
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
    "exampleCode": "decimal price = 12.5m;\nConsole.WriteLine(price > 10m);",
    "exampleResult": "True",
    "exampleNote": "Суффикс m обозначает литерал decimal. Сравнение даёт логический результат.",
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
    "exampleCode": "string? name = Console.ReadLine();\nConsole.WriteLine($\"Привет, {name}!\");",
    "exampleInput": "Мира",
    "exampleResult": "Привет, Мира!",
    "exampleNote": "Console.ReadLine читает введённый текст как строку. Знак ? допускает отсутствие ввода.",
    "kind": "Что выведет код?",
    "challengeCode": "string? city = Console.ReadLine();\nConsole.WriteLine($\"Город: {city}\");",
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
    "codeDeckId": "lab5-operations-output"
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
    "codeDeckId": "lab5-operations-output"
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
    "term": "Некорректный ввод",
    "exampleCode": "string? text = Console.ReadLine();\nif (int.TryParse(text, out int number))\n    Console.WriteLine(number);\nelse\n    Console.WriteLine(\"Введите число\");",
    "exampleInput": "кот",
    "exampleResult": "Введите число",
    "exampleNote": "TryParse проверяет ввод без исключения. Слово «кот» нельзя преобразовать в int.",
    "kind": "Что выведет код?",
    "challengeCode": "string? text = Console.ReadLine();\nif (int.TryParse(text, out int number))\n    Console.WriteLine(number);\nelse\n    Console.WriteLine(\"Ошибка ввода\");",
    "challengeInput": "12кг",
    "prompt": "Что появится в консоли после ввода?",
    "options": [
      "12",
      "12кг",
      "Ошибка ввода",
      "Программа завершится с исключением"
    ],
    "correctIndex": 2,
    "explanation": "Строка «12кг» целиком не является целым числом. TryParse вернёт false, поэтому выполнится ветка else.",
    "codeDeckId": "lab5-input-conversion"
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
    "codeDeckId": "practice-branching-menu"
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
    "codeDeckId": "lab4-variables-values"
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
    "codeDeckId": "lab4-variables-values"
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
    "exampleCode": "float temperature = 12.5f;\nConsole.WriteLine(temperature > 12f);",
    "exampleResult": "True",
    "exampleNote": "Суффикс f задаёт литерал float. Сравнение выводит логический результат.",
    "kind": "Что выведет код?",
    "challengeCode": "float x = 1.5f;\nConsole.WriteLine(x * 2f == 3f);",
    "prompt": "Что появится в консоли?",
    "options": [
      "False",
      "3",
      "True",
      "Ошибка компиляции"
    ],
    "correctIndex": 2,
    "explanation": "1.5 × 2 равно 3; эти значения точно представимы в float.",
    "challengeResult": "True",
    "codeDeckId": "lab4-csharp-data-types"
  },
  {
    "id": "lab4-double",
    "deckId": "csharp-data-types",
    "term": "double",
    "exampleCode": "double half = 5.0 / 2;\nConsole.WriteLine(half == 2.5);",
    "exampleResult": "True",
    "exampleNote": "Литерал 5.0 имеет тип double: деление сохраняет дробную часть.",
    "kind": "Что выведет код?",
    "challengeCode": "double value = 9.0 / 2;\nConsole.WriteLine(value > 4);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "4",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "9.0 / 2 даёт 4.5, а 4.5 больше 4.",
    "challengeResult": "True",
    "codeDeckId": "lab4-csharp-data-types"
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
    "exampleCode": "var count = 3;\nConsole.WriteLine(count.GetType().Name);",
    "exampleResult": "Int32",
    "exampleNote": "var выводит тип int по начальному значению 3.",
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
    "challengeResult": "72",
    "codeDeckId": "lab4-typing-and-output"
  },
  {
    "id": "lab4-suffix",
    "deckId": "typing-and-output",
    "term": "Суффикс литерала",
    "exampleCode": "decimal price = 3m;\nConsole.WriteLine(price + 2m);",
    "exampleResult": "5",
    "exampleNote": "m задаёт тип decimal даже для литерала без дробной части.",
    "kind": "Что выведет код?",
    "challengeCode": "float speed = 2f;\nConsole.WriteLine(speed == 2f);",
    "prompt": "Что появится в консоли?",
    "options": [
      "2f",
      "False",
      "True",
      "Ошибка компиляции"
    ],
    "correctIndex": 2,
    "explanation": "Оба значения равны 2 и имеют тип float; сравнение истинно.",
    "challengeResult": "True",
    "codeDeckId": "lab4-typing-and-output"
  },
  {
    "id": "lab4-type-range",
    "deckId": "typing-and-output",
    "term": "Диапазон типа",
    "exampleCode": "Console.WriteLine(int.MaxValue);",
    "exampleResult": "2147483647",
    "exampleNote": "MaxValue показывает верхнюю границу типа int.",
    "kind": "Что выведет код?",
    "challengeCode": "Console.WriteLine(int.MaxValue > 1000);",
    "prompt": "Что появится в консоли?",
    "options": [
      "False",
      "True",
      "1000",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "explanation": "Максимальное значение int равно 2147483647, что больше 1000.",
    "challengeResult": "True",
    "codeDeckId": "lab4-typing-and-output"
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
    "exampleCode": "int count = 5;\ndouble value = count;\nConsole.WriteLine(value == 5.0);",
    "exampleResult": "True",
    "exampleNote": "Преобразование int в double разрешено без явного приведения.",
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
    "challengeResult": "10",
    "codeDeckId": "lab5-input-conversion"
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
    "codeDeckId": "lab5-operations-output"
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
    "codeDeckId": "lab5-operations-output"
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
    "term": "Форматирование вывода",
    "exampleCode": "int number = 7;\nConsole.WriteLine($\"{number:D3}\");",
    "exampleResult": "007",
    "exampleNote": "D3 выводит целое минимум с тремя цифрами, дополняя нулями слева.",
    "kind": "Что выведет код?",
    "challengeCode": "int number = 12;\nConsole.WriteLine($\"{number:D4}\");",
    "prompt": "Что появится в консоли?",
    "options": [
      "12",
      "1200",
      "0012",
      "D412"
    ],
    "correctIndex": 2,
    "explanation": "D4 требует минимум четыре цифры, поэтому слева добавляются два нуля.",
    "challengeResult": "0012",
    "codeDeckId": "lab5-operations-output"
  },
  {
    "id": "lab5-exception",
    "deckId": "input-operations-conversions",
    "term": "Исключение",
    "exampleCode": "try\n{\n    Console.WriteLine(int.Parse(\"кот\"));\n}\ncatch (FormatException)\n{\n    Console.WriteLine(\"Не число\");\n}",
    "exampleResult": "Не число",
    "exampleNote": "Неверный числовой формат вызывает FormatException; catch обрабатывает его.",
    "kind": "Что выведет код?",
    "challengeCode": "try\n{\n    Console.WriteLine(int.Parse(\"12кг\"));\n}\ncatch (FormatException)\n{\n    Console.WriteLine(\"Ошибка\");\n}",
    "prompt": "Что появится в консоли?",
    "options": [
      "12",
      "12кг",
      "Ошибка",
      "Ничего"
    ],
    "correctIndex": 2,
    "explanation": "Parse не может разобрать всю строку как int, поэтому выполняется catch.",
    "challengeResult": "Ошибка",
    "codeDeckId": "lab5-input-conversion"
  },
  {
    "id": "lab5-decimal-separator",
    "deckId": "input-operations-conversions",
    "term": "Десятичный разделитель",
    "exampleCode": "double value = double.Parse(\"2.5\", System.Globalization.CultureInfo.InvariantCulture);\nConsole.WriteLine(value > 2);",
    "exampleResult": "True",
    "exampleNote": "InvariantCulture явно задаёт точку как десятичный разделитель, независимо от настроек компьютера.",
    "kind": "Что выведет код?",
    "challengeCode": "double value = double.Parse(\"3.5\", System.Globalization.CultureInfo.InvariantCulture);\nConsole.WriteLine(value < 4);",
    "prompt": "Что появится в консоли?",
    "options": [
      "True",
      "False",
      "35",
      "Ошибка компиляции"
    ],
    "correctIndex": 0,
    "explanation": "При InvariantCulture строка 3.5 означает три с половиной; это меньше 4.",
    "challengeResult": "True",
    "codeDeckId": "lab5-operations-output"
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
    "codeDeckId": "practice-conditions-logic"
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
    "codeDeckId": "practice-conditions-logic"
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
    "codeDeckId": "practice-branching-menu"
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
    "codeDeckId": "practice-loops-basics"
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
    "codeDeckId": "practice-loops-basics"
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
    "codeDeckId": "practice-loops-basics"
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
    "codeDeckId": "practice-loops-control"
  },
  {
    "id": "lab7-repeat-input",
    "deckId": "loops-control",
    "term": "Повторный ввод",
    "exampleCode": "string? text = Console.ReadLine();\nwhile (text != null && text != \"стоп\")\n{\n    Console.WriteLine(text);\n    text = Console.ReadLine();\n}",
    "exampleResult": "да",
    "exampleNote": "На каждой итерации читается новая строка. Команда стоп и конец ввода завершают цикл.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nstring? text = Console.ReadLine();\nwhile (text != null && text != \"0\")\n{\n    count++;\n    text = Console.ReadLine();\n}\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "explanation": "Строки 5 и 7 увеличивают счётчик. Строка 0 завершает цикл и не учитывается.",
    "challengeResult": "2",
    "codeDeckId": "practice-loops-control",
    "exampleInput": "да\nстоп",
    "challengeInput": "5\n7\n0"
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
    "codeDeckId": "practice-loops-control"
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
    "codeDeckId": "practice-loops-control"
  },
  {
    "id": "lab7-nested",
    "deckId": "loops-control",
    "term": "Вложенный цикл",
    "exampleCode": "for (int row = 1; row <= 2; row++)\n{\n    for (int col = 1; col <= 3; col++)\n        Console.Write(\"*\");\n    Console.WriteLine();\n}",
    "exampleResult": "***\n***",
    "exampleNote": "Внутренний цикл выполняет три вывода для каждой из двух строк.",
    "kind": "Что выведет код?",
    "challengeCode": "int count = 0;\nfor (int row = 0; row < 3; row++)\n    for (int col = 0; col < 2; col++)\n        count++;\nConsole.WriteLine(count);",
    "prompt": "Что появится в консоли?",
    "options": [
      "2",
      "3",
      "5",
      "6"
    ],
    "correctIndex": 3,
    "explanation": "Три внешние итерации по две внутренние: 3 × 2 = 6.",
    "challengeResult": "6",
    "codeDeckId": "practice-loops-control"
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
    "codeDeckId": "practice-loops-control"
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
    "codeDeckId": "practice-loops-control"
  }
];
