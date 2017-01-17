/**
 * ECMAScript 6
 *
 * Правила специфичные для стандарта ES6 (ES2015)
 */

module.exports = {

  "env": {

    // использовать ES6
    "es6": true

  },

  "parserOptions": {

    // версия страндарта ECMAScript
    "ecmaVersion": 8,

    "sourceType": "module"

  },

  "rules": {

    // не использовать фигурные скобки в стрелочных функциях там, где они могут
    // быть пропущены
    // http://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": [
      "error",
      "as-needed", // если необходимо
      {
        "requireReturnForObjectLiteral": false // требовать указания return если
                                               // возвращается литерал объекта
      }
    ],

    // требовать скобки вокруг аргументов в стрелочных функциях
    // http://eslint.org/docs/rules/arrow-parens
    "arrow-parens": [
      "error",
      "as-needed", // если необходимо
      {
        "requireForBlockBody": true // требовать при пользовании фигурных скобок
      }
    ],

    // требовать пробелы перед и после стрелки в стрелочной функции
    // http://eslint.org/docs/rules/arrow-spacing
    "arrow-spacing": [
      "error",
      {
        "before": true, // перед
        "after": true // после
      }
    ],

    // проверять вызов super() в конструкторах
    // http://eslint.org/docs/rules/constructor-super
    "constructor-super": "error",

    // следить за пробелами вокруг * в функциях генераторов
    // http://eslint.org/docs/rules/generator-star-spacing
    "generator-star-spacing": [
      "error",
      {
        "before": false, // перед
        "after": true // после
      }
    ],

    // запретить изменение переменных деклараций класса
    // http://eslint.org/docs/rules/no-class-assign
    "no-class-assign": "error",

    // запретить использовать стрелочные функции без фигруных скобок там, где
    // стрелки могут быть перепутаны с операторами сравнения
    // http://eslint.org/docs/rules/no-confusing-arrow
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true // разрешить использовать круглые скобки
      }
    ],

    // запретить изменять переменную если она задикларирована как const
    // http://eslint.org/docs/rules/no-const-assign
    "no-const-assign": "error",

    // запретить дублировать имена членов класса
    // http://eslint.org/docs/rules/no-dupe-class-members
    "no-dupe-class-members": "error",

    // запретить иморт из одного и того же пути несколько раз
    // http://eslint.org/docs/rules/no-duplicate-imports
    "no-duplicate-imports": "error",

    // запретить использовать конструктор для Symbol
    // http://eslint.org/docs/rules/no-new-symbol
    "no-new-symbol": "error",

    // запретить специфичные импорты
    // http://eslint.org/docs/rules/no-restricted-imports
    "no-restricted-imports": "off",

    // запретить использовать this/super перед вызовом super() в конструкторе
    // http://eslint.org/docs/rules/no-this-before-super
    "no-this-before-super": "error",

    // запретить использовать ненужные ключи при определении свойст объекта
    // http://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-computed-key": "error",

    // запретить вызов излишних конструкторов
    // http://eslint.org/docs/rules/no-useless-constructor
    "no-useless-constructor": "error",

    // запретить переименовывать тем же именем импорты экспорты и
    // свойства объектов
    // http://eslint.org/docs/rules/no-useless-rename
    "no-useless-rename": [
      "error",
      {
        "ignoreDestructuring": false, // игнорировать свойства объектов
        "ignoreImport": false, // игнорировать импорты
        "ignoreExport": false // игноировать экспорты
      }
    ],

    // требовать использование let или const вместо var
    // http://eslint.org/docs/rules/no-var
    "no-var": "error",

    // требовать короткий синтаксис для свойств и методов лиералов объектов
    // http://eslint.org/docs/rules/object-shorthand
    "object-shorthand": [
      "error",
      "always", // всегда
      {
        "ignoreConstructors": false, // игнорировать конструкторы
        "avoidQuotes": true // избегать кавычек
      }
    ],

    // рекомендовать использовать стрелочные функции для обратного вызова
    // http://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-arrow-callback": [
      "error",
      {
        "allowNamedFunctions": false, // так же использовать именованные функции
        "allowUnboundThis": true // использовать this без ограничений
      }
    ],

    // рекомендовать использовать const для переменных которые никогда не будут
    // переопределены после декларации
    // http://eslint.org/docs/rules/prefer-const
    "prefer-const": [
      "error",
      {
        "destructuring": "any", // деструктуризация переменных
        "ignoreReadBeforeAssign": true // игнорировать чтение перед назначением
      }
    ],

    // запретить parseInt() в пользу двоичных восьмиричных и шестнадцатеричных
    // литералов
    // http://eslint.org/docs/rules/prefer-numeric-literals
    "prefer-numeric-literals": "error",

    // рекомендовать использовать rest-параметры вместо arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    "prefer-rest-params": "error",

    // рекомендовать использовать ... вместо .apply()
    // http://eslint.org/docs/rules/prefer-spread
    "prefer-spread": "error",

    // рекомендовать использовать форматируемые строки вместо конкатенации
    // http://eslint.org/docs/rules/prefer-template
    "prefer-template": "error",

    // запретить использовать функцию-генератор без yield
    // http://eslint.org/docs/rules/require-yield
    "require-yield": "error",

    // обеспечить интервал между ... и rest-параметрами
    // http://eslint.org/docs/rules/rest-spread-spacing
    "rest-spread-spacing": [
      "error",
      "never" // никогда
    ],

    // сортировка импортов
    // http://eslint.org/docs/rules/sort-imports
    "sort-imports": "off",

    // требовать описание для Symbol
    // http://eslint.org/docs/rules/symbol-description
    "symbol-description": "error",

    // обеспечить использование инетрвала внутри шаблонных строк
    // http://eslint.org/docs/rules/template-curly-spacing
    "template-curly-spacing": "off",

    // обеспечить пробелами вокруг * в выражении yield*
    // http://eslint.org/docs/rules/yield-star-spacing
    "yield-star-spacing": [
      "error",
      "after" // после *
    ]

  }
};
