'use strict'

module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/proposal-object-rest-spread', {loose: true}],
  ],
  overrides: [
    {
      test: ['apps/view'],
      presets: [
        [
          '@babel/preset-env',
          {modules: false, useBuiltIns: 'usage', corejs: 3, loose: true},
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        'react-hot-loader/babel',
      ],
    },
    {
      test: ['packages/parser'],
      presets: [
        [
          '@babel/preset-env',
          {modules: 'commonjs', useBuiltIns: false, loose: true},
        ],
      ],
    },
  ],
}
