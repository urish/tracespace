// gerber file grammar
'use strict';

exports.__esModule = true;
exports.default = exports.GERBER_OPERATION = exports.GERBER_TOOL_CHANGE = exports.GERBER_TOOL_DEFINITION = exports.GERBER_FORMAT = exports.GERBER_UNITS = exports.GERBER_DONE = void 0;

var Lexer = _interopRequireWildcard(require("../lexer"));

var _rules = require("../rules");

var _tree = require("../tree");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var GERBER_DONE = 'GERBER_DONE';
exports.GERBER_DONE = GERBER_DONE;
var GERBER_UNITS = 'GERBER_UNITS';
exports.GERBER_UNITS = GERBER_UNITS;
var GERBER_FORMAT = 'GERBER_FORMAT';
exports.GERBER_FORMAT = GERBER_FORMAT;
var GERBER_TOOL_DEFINITION = 'GERBER_TOOL_DEFINITION';
exports.GERBER_TOOL_DEFINITION = GERBER_TOOL_DEFINITION;
var GERBER_TOOL_CHANGE = 'GERBER_TOOL_CHANGE';
exports.GERBER_TOOL_CHANGE = GERBER_TOOL_CHANGE;
var GERBER_OPERATION = 'GERBER_OPERATION';
exports.GERBER_OPERATION = GERBER_OPERATION;
var gerberDone = {
  type: GERBER_DONE,
  filetype: _tree.GERBER,
  match: [(0, _rules.one)([(0, _rules.token)(Lexer.M_CODE, '0'), (0, _rules.token)(Lexer.M_CODE, '2')]), (0, _rules.token)(Lexer.ASTERISK)]
};
var gerberFormat = {
  type: GERBER_FORMAT,
  filetype: _tree.GERBER,
  match: [(0, _rules.token)(Lexer.PERCENT), (0, _rules.token)(Lexer.GERBER_FORMAT), (0, _rules.zeroOrMore)([(0, _rules.token)(Lexer.CATCHALL), (0, _rules.token)(Lexer.NUMBER)]), (0, _rules.token)(Lexer.CHAR, 'X'), (0, _rules.token)(Lexer.NUMBER), (0, _rules.token)(Lexer.CHAR, 'Y'), (0, _rules.token)(Lexer.NUMBER), (0, _rules.zeroOrMore)([(0, _rules.token)(Lexer.CATCHALL), (0, _rules.token)(Lexer.NUMBER)]), (0, _rules.token)(Lexer.ASTERISK), (0, _rules.token)(Lexer.PERCENT)]
};
var gerberUnits = {
  type: GERBER_UNITS,
  filetype: _tree.GERBER,
  match: [(0, _rules.token)(Lexer.PERCENT), (0, _rules.token)(Lexer.GERBER_UNITS), (0, _rules.token)(Lexer.ASTERISK), (0, _rules.token)(Lexer.PERCENT)]
};
var gerberToolDef = {
  type: GERBER_TOOL_DEFINITION,
  filetype: _tree.GERBER,
  match: [(0, _rules.token)(Lexer.PERCENT), (0, _rules.token)(Lexer.GERBER_TOOL_DEF), (0, _rules.token)(Lexer.GERBER_TOOL_NAME), (0, _rules.token)(Lexer.NUMBER), (0, _rules.zeroOrMore)([(0, _rules.token)(Lexer.CHAR, 'X'), (0, _rules.token)(Lexer.NUMBER)]), (0, _rules.token)(Lexer.ASTERISK), (0, _rules.token)(Lexer.PERCENT)]
};
var gerberToolChange = {
  type: GERBER_TOOL_CHANGE,
  filetype: _tree.GERBER,
  match: [(0, _rules.zeroOrOne)([(0, _rules.token)(Lexer.G_CODE, '54')]), (0, _rules.token)(Lexer.D_CODE), (0, _rules.token)(Lexer.ASTERISK)]
};
var gerberOperation = {
  type: GERBER_OPERATION,
  filetype: _tree.GERBER,
  match: [(0, _rules.zeroOrOne)([(0, _rules.token)(Lexer.G_CODE)]), (0, _rules.minToMax)(2, 8, [(0, _rules.token)(Lexer.CHAR), (0, _rules.token)(Lexer.NUMBER)]), (0, _rules.zeroOrOne)([(0, _rules.token)(Lexer.D_CODE)]), (0, _rules.token)(Lexer.ASTERISK)]
};
var grammar = [gerberDone, gerberFormat, gerberUnits, gerberToolDef, gerberToolChange, gerberOperation];
var _default = grammar;
exports.default = _default;