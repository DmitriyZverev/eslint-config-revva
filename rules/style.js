/**
 * Стиль форматирования
 *
 * Правила описывающие стиль форматирования кода
 */

module.exports = {
  "rules": {

    // обеспечить перенос строки после открытия и перед закрытием скобок массива
    // http://eslint.org/docs/rules/array-bracket-newline
    "array-bracket-newline": "off",

    // обеспечить пробелы внутри скобок массива
    // http://eslint.org/docs/rules/array-bracket-spacing
    "array-bracket-spacing": [
      "error",
      "never" // никогда
    ],

    // обеспечить перенос строк после каждого элемента массива
    // http://eslint.org/docs/rules/array-element-newline
    "array-element-newline": "off",

    // обеспечить пробелы внутри скобок блока раположенного в одну строку
    // http://eslint.org/docs/rules/block-spacing
    "block-spacing": [
      "error",
      "never" // никогда
    ],

    // обеспечить единый стиль написания скобок
    // http://eslint.org/docs/rules/brace-style
    "brace-style": [
      "error",
      "1tbs", // стиль написания скобок
      {
        "allowSingleLine": true // поддержка написания в одну строку
      }
    ],

    // требовать использования стиля именования camelCase
    // http://eslint.org/docs/rules/camelcase
    "camelcase": [
      "error",
      {
        "properties": "always" // использовать для свойств объекта
      }
    ],

    // обеспечить написание комментариев с заглавной буквы
    // http://eslint.org/docs/rules/capitalized-comments
    "capitalized-comments": "off",

    // требовать или запретить завершающие запятые
    // http://eslint.org/docs/rules/comma-dangle
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline", // всегда, если элемент на отдеьной строке
        "objects": "always-multiline", // всегда, если элемент на отдеьной строке
        "imports": "always-multiline", // всегда, если элемент на отдеьной строке
        "exports": "always-multiline", // всегда, если элемент на отдеьной строке
        "functions": "never" // никогда
      }
    ],

    // обеспечить пробелы перед и после запятой
    // http://eslint.org/docs/rules/comma-spacing
    "comma-spacing": [
      "error",
      {
        "before": false, // перед
        "after": true // после
      }
    ],

    // обеспечить правильный стиль написания запятых
    // http://eslint.org/docs/rules/comma-style
    "comma-style": [
      "error",
      "last"
    ],

    // Запретить или обеспечить соблюдение пробелов внутри вычисляемых свойств
    // http://eslint.org/docs/rules/computed-property-spacing
    "computed-property-spacing": [
      "error",
      "never"
    ],

    // требовать последовательный this
    // http://eslint.org/docs/rules/consistent-this
    "consistent-this": "off",

    // обеспечить новую линию в конце файла
    // http://eslint.org/docs/rules/eol-last
    "eol-last": [
      "error",
      "always"
    ],

    // обеспечить пробел между функцией и её вызовом
    // http://eslint.org/docs/rules/func-call-spacing
    "func-call-spacing": [
      "error",
      "never"
    ],

    // требовать соответствие названия функции и имени переменной или свойства,
    // к которым они назначены
    // http://eslint.org/docs/rules/func-name-matching
    "func-name-matching": "off",

    // требовать указывать имя функции при её объявлении
    // http://eslint.org/docs/rules/func-names
    "func-names": "off",

    // обеспечить использование объявлений функций или выражений
    // http://eslint.org/docs/rules/func-style
    "func-style": "off",

    // черный список имен идентификаторов
    // http://eslint.org/docs/rules/id-blacklist
    "id-blacklist": "off",

    // обеспечить минимальную и максимальную длину идентификаторов
    // http://eslint.org/docs/rules/id-length
    "id-length": "off",

    // требовать соответствие имен идентификаторов регулярному выражению
    // http://eslint.org/docs/rules/id-match
    "id-match": "off",

    // обеспечить правильные отступы
    // http://eslint.org/docs/rules/indent
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1 // Отступ внутри блока switch
      }
    ],

    // указать, следует ли использовать двойные или одинарные кавычки в
    // атрибутах JSX
    // http://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],

    // обеспечить пробелы между ключами и значениями в объектах
    // http://eslint.org/docs/rules/key-spacing
    "key-spacing": [
      "error",
      {
        "beforeColon": false, // перед двоеточием
        "afterColon": true // после двоеточия
      }
    ],

    // требовать пробел перед и после определенных ключевых слов
    // http://eslint.org/docs/rules/keyword-spacing
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],

    // обеспечить позицию комменатриев (на отдельной строке или на той же)
    // http://eslint.org/docs/rules/line-comment-position
    "line-comment-position": "off",

    // запретить смешанные "LF" и "CRLF" при переносе строк
    // http://eslint.org/docs/rules/linebreak-style
    "linebreak-style": [
      "error",
      "unix"
    ],

    // обеспечить пустые строки вокруг комменатриев
    // http://eslint.org/docs/rules/lines-around-comment
    "lines-around-comment": "off",

    // требовать или запретить новые строки вокруг директивы 'use strict'
    // http://eslint.org/docs/rules/lines-around-directive
    "lines-around-directive": [
      "error",
      {
        "before": "always",
        "after": "always"
      }
    ],

    // обеспечить максимальную глубину вложенности блоков
    // http://eslint.org/docs/rules/max-depth
    "max-depth": "off",

    // определить максимальную длину строки
    // http://eslint.org/docs/rules/max-len
    "max-len": [
      "error",
      80, // макс. длина строки
      2,
      {
        "ignoreUrls": true, // игнорировать URL
        "ignoreComments": false, // игнорировать комментарии
        "ignoreTrailingComments": false, // игнорировать комментарии в конце
        "ignoreRegExpLiterals": true, // игнорировать регулярные выражения
        "ignoreStrings": true, // игнорировать строки
        "ignoreTemplateLiterals": true // игнорировать шаблоны
      }
    ],

    // определить максимальную длину файла
    // http://eslint.org/docs/rules/max-lines
    "max-lines": "off",

    // определить максимальную глубину вложенных коллбэков
    // http://eslint.org/docs/rules/max-nested-callbacks
    "max-nested-callbacks": "off",

    // определить лимит количества аргументов функции
    // http://eslint.org/docs/rules/max-params
    "max-params": "off",

    // обеспечить максимальное кол-во обявлений переменных внутри функции
    // http://eslint.org/docs/rules/max-statements
    "max-statements": "off",

    // ограничить число обявлений операторов в строке
    // http://eslint.org/docs/rules/max-statements-per-line
    "max-statements-per-line": "off",

    // требовать многострочные тернарные операторы
    // http://eslint.org/docs/rules/multiline-ternary
    "multiline-ternary": "off",

    // требовать что бы имя конструктора начиналось с заглавной буквы
    // http://eslint.org/docs/rules/new-cap
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "newIsCapExceptions": [],
        "capIsNew": false,
        "capIsNewExceptions": []
      }
    ],

    // требовать круглые скобки при вызове конструктора без аргументов
    // http://eslint.org/docs/rules/new-parens
    "new-parens": "error",

    // разрешить/запретить пустую строку после объявления переменной
    // http://eslint.org/docs/rules/newline-after-var
    "newline-after-var": "off",

    // требовать/запретить пустую строку перед оператором `return`
    // http://eslint.org/docs/rules/newline-before-return
    "newline-before-return": "off",

    // обеспечить новую линию после вызова каждого последующего метода в цепи
    // http://eslint.org/docs/rules/newline-per-chained-call
    "newline-per-chained-call": "off",

    // запретить использовать конструктор Array
    // http://eslint.org/docs/rules/no-array-constructor
    "no-array-constructor": "error",

    // запретить поразрядные операторы
    // http://eslint.org/docs/rules/no-bitwise
    "no-bitwise": "error",

    // запретить использвать оператор `continue` в цикле
    // http://eslint.org/docs/rules/no-continue
    "no-continue": "error",

    // запретить использование комментариев в конце строки
    // http://eslint.org/docs/rules/no-inline-comments
    "no-inline-comments": "off",

    // запретить одиночные if вложенные в блок else
    // http://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": "error",

    // запретить смешивание различных операторов
    // http://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": [
      "error",
      {
        "groups": [
          [
            "+",
            "-",
            "*",
            "/",
            "%",
            "**"
          ],
          [
            "&",
            "|",
            "^",
            "~",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!==",
            ">",
            ">=",
            "<",
            "<="
          ],
          [
            "&&",
            "||"
          ],
          [
            "in",
            "instanceof"
          ]
        ],
        "allowSamePrecedence": false
      }
    ],

    // запретить смешивать пробелы и табы
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-mixed-spaces-and-tabs": "error",

    // запретить множественные пустые строки
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxEOF": 1
      }
    ],

    // запретить условие отрицания
    // http://eslint.org/docs/rules/no-negated-condition
    "no-negated-condition": "off",

    // запретить вложенные тернарные операторы
    // http://eslint.org/docs/rules/no-nested-ternary
    "no-nested-ternary": "error",

    // запретить использование конструктора Object
    // http://eslint.org/docs/rules/no-new-object
    "no-new-object": "error",

    // запретить использование  операторов ++ и --
    // http://eslint.org/docs/rules/no-plusplus
    "no-plusplus": "error",

    // запретить уникальный синтаксис
    // http://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "ForOfStatement",
      "LabeledStatement",
      "WithStatement"
    ],

    // запретить пробел между именм функции и круглыми скобками
    // http://eslint.org/docs/rules/no-spaced-func
    "no-spaced-func": "error",

    // запретить использование табов
    // http://eslint.org/docs/rules/no-tabs
    "no-tabs": "error",

    // запретить использование тернарных операторов
    // http://eslint.org/docs/rules/no-ternary
    "no-ternary": "off",

    // запретить пробелы в конце строки
    // http://eslint.org/docs/rules/no-trailing-spaces
    "no-trailing-spaces": "error",

    // запретить нижнее подчеркивание в идентификаторах
    // http://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": "off",

    // запретить тройные операторы, когда существуют более простые альтернативы
    // http://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": [
      "error",
      {
        "defaultAssignment": false
      }
    ],

    // запретить пробелы перед свойствами объекта
    // http://eslint.org/docs/rules/no-whitespace-before-property
    "no-whitespace-before-property": "error",

    // обеспечивать последовательное расстояние между фигурными скобками
    // http://eslint.org/docs/rules/object-curly-spacing
    "object-curly-spacing": [
      "error",
      "never"
    ],

    // обеспечить соблюдение расположения однострочных операторов
    // http://eslint.org/docs/rules/nonblock-statement-body-position
    "nonblock-statement-body-position": "off",

    // обеспечить соблюдение согласованных разрывы строк внутри скобок
    // http://eslint.org/docs/rules/object-curly-newline
    "object-curly-newline": "off",

    // обеспечить размещение свойств объекта на отдельных строках
    // http://eslint.org/docs/rules/object-property-newline
    "object-property-newline": [
      "error",
      {
        "allowMultiplePropertiesPerLine": true
      }
    ],

    // обеспечить объявление переменных либо вместе,
    // либо по отдельности в функциях
    // http://eslint.org/docs/rules/one-var
    "one-var": [
      "error",
      "never"
    ],

    // требовать объявление переменной с новой строки
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var-declaration-per-line": [
      "error",
      "always"
    ],

    // требовать короткий синтаксис в математических операциях где это возможно
    // http://eslint.org/docs/rules/operator-assignment
    "operator-assignment": [
      "error",
      "always"
    ],

    // обеспечить последовательный стиль разрыва строки для
    // математических выражений
    // http://eslint.org/docs/rules/operator-linebreak
    "operator-linebreak": [
      "error",
      "before"
    ],

    // обеспечить отступы внутри блоков
    // http://eslint.org/docs/rules/padded-blocks
    "padded-blocks": [
      "error",
      "never"
    ],

    // Требовать или запрещать отступы между утверждениями
    // http://eslint.org/docs/rules/padding-line-between-statements
    "padding-line-between-statements ": "off",

    // требовать кавычки вокруг имен свойств объектов
    // http://eslint.org/docs/rules/quote-props
    "quote-props": [
      "error",
      "as-needed" // если необходимо
    ],

    // обеспечить последовательное использование одинарных или двойных кавычек
    // http://eslint.org/docs/rules/quotes
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true // исключая экранирование
      }
    ],

    // требовать jsdoc документацию
    // http://eslint.org/docs/rules/require-jsdoc
    "require-jsdoc": "off",

    // требовать или запретить использовать точку с запятой в конце строки
    // http://eslint.org/docs/rules/semi
    "semi": [
      "error",
      "always"
    ],

    // обеспечить пробелы перед и после точки с запятой
    // http://eslint.org/docs/rules/semi-spacing
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],

    // обеспечить расположение точек с запятой
    // http://eslint.org/docs/rules/semi-style
    "semi-style": [
      "error",
      "last" // в конце строки
    ],

    // требовать сортировки ключей объекта
    // http://eslint.org/docs/rules/sort-keys
    "sort-keys": "off",

    // требовать сортировку перменных
    // http://eslint.org/docs/rules/sort-vars
    "sort-vars": "off",

    // требовать или запретить пробел перед блоком
    // http://eslint.org/docs/rules/space-before-blocks
    "space-before-blocks": "error",

    // требовать пробел перед круглыми скобками функции
    // http://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],

    // требовать или запретить пробелы внутри скобок
    // http://eslint.org/docs/rules/space-in-parens
    "space-in-parens": [
      "error",
      "never"
    ],

    // требовать пробелы вокруг операторов
    // http://eslint.org/docs/rules/space-infix-ops
    "space-infix-ops": "error",

    // требовать или запретить пробелы перед/после унарных операторов
    // http://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": [
      "error",
      {
        "words": true, // new, delete, typeof, void, yield
        "nonwords": false, // -, +, --, ++, !, !!
        "overrides": {} // спецефичные операторы
      }
    ],

    // требовать или запретить пробел в начале комментария перед /* или //
    // http://eslint.org/docs/rules/spaced-comment
    "spaced-comment": [
      "error",
      "always"
    ],

    // Обеспечить интервал вокруг двоеточий операторов switch
    // http://eslint.org/docs/rules/switch-colon-spacing
    "switch-colon-spacing": [
      "error",
      {
        "after": true, // пробел после оператора
        "before": false // пробел перед оператором
      }
    ],

    // require or disallow spacing between template tags and their literals
    // требовать или запретить пробелы между тегами шаблона и их литералами
    // http://eslint.org/docs/rules/template-tag-spacing
    "template-tag-spacing": [
      "error",
      "always"
    ],

    // требовать или запретить юникод символы
    // http://eslint.org/docs/rules/unicode-bom
    "unicode-bom": [
      "error",
      "never"
    ],

    // требовать оборачивать регулярные выражения в круглые скобки
    // http://eslint.org/docs/rules/wrap-regex
    "wrap-regex": "off"

  }
};
