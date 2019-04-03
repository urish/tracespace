// drill file grammar
'use strict';

exports.__esModule = true;
exports.default = exports.DRILL_DONE = exports.DRILL_HIT = exports.DRILL_TOOL_CHANGE = exports.DRILL_TOOL_DEFINITION = exports.DRILL_UNITS = void 0;

var Lexer = _interopRequireWildcard(require("../lexer"));

var _rules = require("../rules");

var _tree = require("../tree");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DRILL_UNITS = 'DRILL_UNITS';
exports.DRILL_UNITS = DRILL_UNITS;
var DRILL_TOOL_DEFINITION = 'DRILL_TOOL_DEFINITION';
exports.DRILL_TOOL_DEFINITION = DRILL_TOOL_DEFINITION;
var DRILL_TOOL_CHANGE = 'DRILL_TOOL_CHANGE';
exports.DRILL_TOOL_CHANGE = DRILL_TOOL_CHANGE;
var DRILL_HIT = 'DRILL_HIT';
exports.DRILL_HIT = DRILL_HIT;
var DRILL_DONE = 'DRILL_DONE';
exports.DRILL_DONE = DRILL_DONE;
var drillUnits = {
  type: DRILL_UNITS,
  filetype: _tree.DRILL,
  match: [(0, _rules.one)([(0, _rules.token)(Lexer.DRILL_UNITS), (0, _rules.token)(Lexer.M_CODE, '71'), (0, _rules.token)(Lexer.M_CODE, '72')]), (0, _rules.zeroOrMore)([(0, _rules.token)(Lexer.DRILL_ZERO_INCLUSION), (0, _rules.token)(Lexer.DRILL_COORD_FORMAT)]), (0, _rules.token)(Lexer.NEWLINE)]
};
var drillToolDefinition = {
  type: DRILL_TOOL_DEFINITION,
  filetype: _tree.DRILL,
  match: [(0, _rules.token)(Lexer.T_CODE), (0, _rules.token)(Lexer.DRILL_TOOL_PROPS), (0, _rules.token)(Lexer.NEWLINE)]
};
var drillToolChange = {
  type: DRILL_TOOL_CHANGE,
  filetype: _tree.DRILL,
  match: [(0, _rules.token)(Lexer.T_CODE), (0, _rules.token)(Lexer.NEWLINE)]
};
var drillHit = {
  type: DRILL_HIT,
  filetype: _tree.DRILL,
  match: [(0, _rules.zeroOrOne)([(0, _rules.token)(Lexer.T_CODE)]), (0, _rules.minToMax)(2, 4, [(0, _rules.token)(Lexer.CHAR), (0, _rules.token)(Lexer.NUMBER)]), (0, _rules.zeroOrOne)([(0, _rules.token)(Lexer.T_CODE)]), (0, _rules.token)(Lexer.NEWLINE)]
};
var drillDone = {
  type: DRILL_DONE,
  filetype: _tree.DRILL,
  match: [(0, _rules.one)([(0, _rules.token)(Lexer.M_CODE, '30'), (0, _rules.token)(Lexer.M_CODE, '0')]), (0, _rules.token)(Lexer.NEWLINE)]
};
var grammar = [drillUnits, drillToolDefinition, drillToolChange, drillHit, drillDone];
var _default = grammar;
exports.default = _default;