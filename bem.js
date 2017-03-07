/**
 * Правила для ESLint при использовании БЭМ
 */
module.exports = {
  extends: [
    './index.js',
    './rules/bem.js'
  ].map(require.resolve)
};
