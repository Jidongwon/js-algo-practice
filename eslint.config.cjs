const vue = require('eslint-plugin-vue');
const globals = require('globals');
const parser = require('vue-eslint-parser');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  {
    ignores: ['dist/*'],
  },
  {
    files: ['**/*.js', '**/*.vue'],
    plugins: { vue, prettier: require('eslint-plugin-prettier') },
    extends: [
      ...vue.configs['vue3-essential'].extends || [],
      'standard',
      'prettier',
    ],
    languageOptions: {
      globals: Object.assign({}, globals.browser),
      parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
  ...compat.extends('standard', 'prettier'),
];
