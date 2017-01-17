/**
 * Node.js и CommonJS
 *
 * Эти правила касаются кода, работающего в Node.js, или в браузерах с CommonJS
 */

module.exports = {
  "env": {

    // использовать окружение Node.js
    "node": true

  },
  "rules": {

    // обеспечить return после callback
    // http://eslint.org/docs/rules/callback-return
    "callback-return": "off",

    // требовать все подключения модулей в верху скрипта
    // http://eslint.org/docs/rules/global-require
    "global-require": "off",

    // обеспечить обработку ошибок в callback функции
    // http://eslint.org/docs/rules/handle-callback-err
    "handle-callback-err": "off",

    // запретить смешивание регулярных перменных и деклараций require
    // http://eslint.org/docs/rules/no-mixed-requires
    "no-mixed-requires": "off",

    // запретить использование оператора new для require
    // http://eslint.org/docs/rules/no-new-require
    "no-new-require": "error",

    // запретить конкатенацию строки с __dirname и __filename
    // http://eslint.org/docs/rules/no-path-concat
    "no-path-concat": "error",

    // запретить использование process.env
    // http://eslint.org/docs/rules/no-process-env
    "no-process-env": "off",

    // запретить использовать process.exit()
    // http://eslint.org/docs/rules/no-process-exit
    "no-process-exit": "off",

    // запретить использовать специфичный node модуль
    // http://eslint.org/docs/rules/no-restricted-modules
    "no-restricted-modules": "off",

    // запретить использовать сихнхронные методы
    // http://eslint.org/docs/rules/no-sync
    "no-sync": "off"

  }
};
