'use strict'

const path = require('path')
const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')

require('@babel/register')({
  configFile: path.join(__dirname, '../babel.config.js'),
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@tracespace/parser': path.join(
            __dirname,
            '../packages/parser/src/index.ts'
          ),
          '@tracespace/plotter': path.join(
            __dirname,
            '../packages/plotter/src/index.ts'
          ),
          '@tracespace/renderer': path.join(
            __dirname,
            '../packages/renderer/src/index.ts'
          ),
        },
      },
    ],
  ],
  extensions: ['.ts', '.tsx'],
  sourceMaps: 'inline',
})

Enzyme.configure({adapter: new EnzymeAdapter()})

const chai = require('chai')
const sinonChai = require('sinon-chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(sinonChai)
chai.use(chaiAsPromised)
