/**
 * Правила для ESLint v3.12 для использования БЭМ
 */
module.exports = {
  extends: [
    './index.js',
    './rules/bem.js'
  ].map(require.resolve)
};
