/**
 * Правила для ESLint
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
  env: {
    browser: true
  }
};
