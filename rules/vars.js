/**
 * Переменные
 *
 * Эти правила относятся к объявлениям переменных
 */

module.exports = {
  "rules": {

    // enforce or disallow variable initializations at definition
    // http://eslint.org/docs/rules/init-declarations
    "init-declarations": "off",

    // запретить использовать имя аргумента в catch такое же как и во
    // внешней области видимости
    // http://eslint.org/docs/rules/no-catch-shadow
    "no-catch-shadow": "off",

    // запретить удаление переменных
    // http://eslint.org/docs/rules/no-delete-var
    "no-delete-var": "error",

    // запретить лейблы которые имеют такое же имя как и переменная
    // http://eslint.org/docs/rules/no-label-var
    "no-label-var": "error",

    // запретить конкретные глобальные перменные
    // http://eslint.org/docs/rules/no-restricted-globals
    "no-restricted-globals": "off",

    // запретить объявление переменных уже объявленных во внешней
    // области видимости
    // http://eslint.org/docs/rules/no-shadow
    "no-shadow": "error",

    // запретить теневое копирование имен, таких как аргументы
    // http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow-restricted-names": "error",

    // запретить использование необъявленных переменных, если она не указана
    // в блоке /*global*/
    // http://eslint.org/docs/rules/no-undef
    "no-undef": "error",

    // запретить использовать undefined при объявлении переменных
    // http://eslint.org/docs/rules/no-undef-init
    "no-undef-init": "error",

    // запретить объявление переменных с именем undefined
    // http://eslint.org/docs/rules/no-undefined
    "no-undefined": "off",

    // запретить использование объявленных переменных, не используемых в коде
    // http://eslint.org/docs/rules/no-unused-vars
    "no-unused-vars": [
      "error",
      {
        "vars": "local", // проверка только локальных переменых
        "args": "none" // не проверять аргументы функции
      }
    ],

    // запретить использование переменной до её объявления
    // http://eslint.org/docs/rules/no-use-before-define
    "no-use-before-define": "error"

  }
};
