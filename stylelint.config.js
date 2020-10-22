/** @format */

module.exports = {
  ignoreFiles: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/fonts/**', 'coverage/**', '**/@components/**'],
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'selector-pseudo-class-no-unknown': null,
    'unit-case': null,
    'no-descending-specificity': null,
    'declaration-block-trailing-semicolon': null
  }
}
