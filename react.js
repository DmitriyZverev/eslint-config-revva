/**
 * Правила для ESLint с использованием React
 */
module.exports = {
  extends: [
    './index.js',
    './rules/react.js'
  ].map(require.resolve)
};
