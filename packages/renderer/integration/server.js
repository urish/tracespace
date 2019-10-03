// simple visual test server for @tracespace/renderer
'use strict'

const {getGerberSpecs, server} = require('@tracespace/fixtures')
const {name} = require('../package.json.js')
const getSuiteResults = require('./get-results')

const PORT = 8003

server(name, getGerberSpecs, getSuiteResults).listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
)
