/**
 * Лучшие практики
 *
 * Эти правила относятся к наиболее эффективным способам написания кода,
 * которые помогут избежать проблем
 */

module.exports = {
  rules: {

    // обеспечить соблюдение пар методов геттер/сеттер в объектах
    // http://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // обеспечить оператор return в коллбэк функциях методов массивов
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'error',

    // рассматривать объявление переменных, как если бы они были областью
    // видимости блока
    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // обеспечить использование "this" в методе класса
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [], // методы в которых допустимо не использовать "this"
      },
    ],

    // указать максимально допустимую цикломатическую сложность в программе
    // http://eslint.org/docs/rules/complexity
    complexity: 'off',

    // требовать объявления операторов возврата или всегда или никогда
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // указывать фигурные скобки для всех управляющих операторов
    // http://eslint.org/docs/rules/curly
    curly: [
      'error',
      'all', // для всех без исключения
    ],

    // требовать объявления default в switch
    // http://eslint.org/docs/rules/default-case
    'default-case': [
      'error',
      {
        commentPattern: '^no default$', // шаблон сообщения об ошибке
      },
    ],

    // обеспечить возможность переноса строки до или посли точки свойства
    // http://eslint.org/docs/rules/dot-location
    'dot-location': [
      'error',
      'property', // новая линия возможна перед точкой, но не после
    ],

    // обеспечить использование свойств объектов через точку когда это возможно
    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': [
      'error',
      {
        allowKeywords: true, // поддержка ключевых слов в имени свойства
      },
    ],

    // обеспечить использование операторов сравнения === и !==
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: [
      'error',
      'always', // использовать всегда
    ],

    // убедиться что в цикле for-in происходит проверка hasOwnProperty()
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // запретить использовать alert, confirm и prompt
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 'off',

    // запретить использовать arguments.caller или arguments.callee
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // запретить лексические декларации в case/default
    // (всегда указывать фигурные скобки)
    // http://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // запретить операторы деления в явном виде в начале регулярного выражения
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // запретить использовать else после if который использует оператор возврата
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'error',

    // запретить использвать пустые тела функций (необходим хотя бы комментарий
    // в теле)
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      'error',
      {
        allow: [ // допустить использовать пустые функции:
          'arrowFunctions', // стрелочные функции
          'functions', // обычные функции
          'methods', // методы классов
        ],
      },
    ],

    // запретить использование пустых шаблонов деструктуризации
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // запретить сравнение с null без оператора проверки типа
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'error',

    // запретить использование eval()
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // запретить расширение стандартных объектов
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // запретить ненужную функцию связывания
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // запретить ненужные лейблы
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // запретить пропуск break в не пустых case
    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // запретить использование точки в начале и конце числа с плавающей точкой
    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // запретить переназначение стандартных объектов
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': [
      'error',
      {
        exceptions: [], // список исключений
      },
    ],

    // запретить неявное преобразование типов
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [
      'off',
      {
        boolean: true, // булев тип
        number: true, // число
        string: true, // строка
        allow: [], // список исключений
      },
    ],

    // запретить объявление переменных в области глобальной видимости
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // запретить использование eval() подобных методов
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // запретить использование this вне классов или классо-подобных объектов
    // http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // запретить использование свойства __iterator__
    // http://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // запретить использование лейблов для всех циколов и switch
    // http://eslint.org/docs/rules/no-labels
    'no-labels': [
      'error',
      {
        allowLoop: false, // разрешить циклы
        allowSwitch: false, // разрешить switch
      },
    ],

    // запретить ненужные вложенные блоки
    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // запретить создание функций внутри циклов
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // запретить магические числа
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'off',

    // запретить использование множественных пробелов
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // запретить использование множественных строк
    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // запретить использование оператора new, когда он не является частью
    // объявления переменной или сравнения
    // http://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // запретить использование оператора new для объекта функции
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // запретить создание новых экземпляров String, Number, Boolean
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // запретить использование восьмиричных литералов по старому стилю
    // http://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // запретить восьмеричные последовательности в строковых литералах
    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // запретить переназначение аргументов функции
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'off',

    // запретить использование свойства __proto__
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // запретить объявление переменной более чем один раз
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // запретить использование определенных свойств объекта
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': 'off',

    // запретить использовать объявление переменной в операторе return
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // запретить излишний `return await`
    // http://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // запретить использование `javascript:` URL.
    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // запретить самоприсвоение
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // запретить самосравнение
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // запретить использование оператора запятая
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // ограничить значения которые могут быть брошены как исключения
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // запретить немодифицируемые условия циклов
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // отключить неиспользуемые выраженгия
    // http://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false, // поддержка замыканй
        allowTernary: false, // поддержка тройных операторов
      },
    ],

    // отключить неиспользуемые лейблы
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // запретить ненужные .call() и .apply()
    // http://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // запретить ненужную конкатекацию строк
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // запретить ненужное экранирование строк
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // запретить излишнее обявление оператора return;
    // http://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // запретить использование оператора void
    // http://eslint.org/docs/rules/no-void
    'no-void': 'off',

    // запретить использование предупреждающих сообщений таких как TODO
    // http://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'off',

    // запретить использование оператора with
    // http://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // требовать передачу экземпляра ошибки в функцию reject() Промиса
    // http://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'error',

    // требовать использование второго параметра для parseInt()
    // http://eslint.org/docs/rules/radix
    radix: 'error',

    // запретить использовать async для функции без использования внутри неё
    // оператора await
    // http://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // требовать декларацию всех переменных в начале области видимости
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // требовать оборачивать IIFE в круглые скобки, при немедленном
    // вызове функции
    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': [
      'error',
      'outside', // оборачивать вызов снаружи
      {
        functionPrototypeMethods: false,
      },
    ],

    // требовать или запретить неверную последовательность значений
    // при сравнении
    // http://eslint.org/docs/rules/yoda
    yoda: 'error',

  },
};
