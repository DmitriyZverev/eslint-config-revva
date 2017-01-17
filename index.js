/**
 * Правила для ESLint v3.12
 */
module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/node.js',
    './rules/strict.js',
    './rules/style.js',
    './rules/vars.js'
  ].map(require.resolve),
  globals: {
    browser: true
  }
};
