/**
 * Возможные ошибки
 *
 * Эти правила касаются возможных синтаксических или логических ошибок
 */

module.exports = {
  "rules": {

    // запретить использовать await внутри циклов
    // http://eslint.org/docs/rules/no-await-in-loop
    "no-await-in-loop": "error",

    // запретить сравнение с -0
    // http://eslint.org/docs/rules/no-compare-neg-zero
    "no-compare-neg-zero": "error",

    // запретить присвоения переменных в условных операторах
    // http://eslint.org/docs/rules/no-cond-assign
    "no-cond-assign": [
      "error",
      "always" // запрещать всегда
    ],

    // запретить использование console
    // http://eslint.org/docs/rules/no-console
    "no-console": "off",

    // запреить использование постоянных выражений в условиях
    // http://eslint.org/docs/rules/no-constant-condition
    "no-constant-condition": "error",

    // запретить управляющие символы в регулярных выражениях
    // http://eslint.org/docs/rules/no-control-regex
    "no-control-regex": "error",

    // запретить использование debugger
    // http://eslint.org/docs/rules/debugger
    "no-debugger": "error",

    // запретить дублирование аргументов функции
    // http://eslint.org/docs/rules/no-dupe-args
    "no-dupe-args": "error",

    // запретить дублирование ключей объекта
    // http://eslint.org/docs/rules/no-dupe-keys
    "no-dupe-keys": "error",

    // запретить дублирование значений для case
    // http://eslint.org/docs/rules/no-duplicate-case
    "no-duplicate-case": "error",

    // запретить пустые заявления
    // http://eslint.org/docs/rules/no-empty
    "no-empty": "error",

    // запретить использование пустых символьных классов в регулярных выражениях
    // http://eslint.org/docs/rules/no-empty-character-class
    "no-empty-character-class": "error",

    // запритить переназначение перменной в catch блоке
    // http://eslint.org/docs/rules/no-ex-assign
    "no-ex-assign": "error",

    // запретить двойное булево отрицание в логических выражениях
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-boolean-cast": "error",

    // запретить ненужные скобки
    // http://eslint.org/docs/rules/no-extra-parens
    "no-extra-parens": "off",

    // запретить ненужные точки с запятой
    // http://eslint.org/docs/rules/no-extra-semi
    "no-extra-semi": "error",

    // запретить переназначение имен функций
    // http://eslint.org/docs/rules/no-func-assign
    "no-func-assign": "error",

    // запретить декларацию функций или переменных во вложенных блоках
    // http://eslint.org/docs/rules/no-inner-declarations
    "no-inner-declarations": "error",

    // запретить неверные регулярные выражения в конструкторе RegExp
    // http://eslint.org/docs/rules/no-invalid-regexp
    "no-invalid-regexp": "error",

    // запретить пробелы за пределами строк и комментариев
    // http://eslint.org/docs/rules/no-irregular-whitespace
    "no-irregular-whitespace": "error",

    // запретить использование глобальных объектов как функций
    // http://eslint.org/docs/rules/no-obj-calls
    "no-obj-calls": "error",

    // запретить использовать Object.prototypes напрямую в объектах
    // http://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "error",

    // запретить множественные пробелы в регулярных выражениях
    // http://eslint.org/docs/rules/no-regex-spaces
    "no-regex-spaces": "error",

    // зарпетить разреженные массивы
    // http://eslint.org/docs/rules/no-sparse-arrays
    "no-sparse-arrays": "error",

    // Запретить использовать старые шаблоны в регулярных строках
    // http://eslint.org/docs/rules/no-template-curly-in-string
    "no-template-curly-in-string": "error",

    // Избегать кода, который выглядит как два выражения но на самом деле
    // является одним выражением
    // http://eslint.org/docs/rules/no-unexpected-multiline
    "no-unexpected-multiline": "error",

    // запретить невыполнимый код после: return, throw, continue, break
    // http://eslint.org/docs/rules/no-unreachable
    "no-unreachable": "error",

    // запретить операторы управления потоком в блоке finally
    // http://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-finally": "error",

    // запретить оператор отрицания слева от операторов сравнения
    // http://eslint.org/docs/rules/no-unsafe-negation
    "no-unsafe-negation": "error",

    // требовать вызова isNaN() при проверке на Nan
    // http://eslint.org/docs/rules/use-isnan
    "use-isnan": "error",

    // обеспечить правильные JSDoc комментарии
    // http://eslint.org/docs/rules/valid-jsdoc
    "valid-jsdoc": "off",

    // обеспечить сравнение результатов typeof с правильной строкой
    // http://eslint.org/docs/rules/valid-typeof
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": true // только верный строковый литерал
                                      // или иной typeof
      }
    ]

  }
};
