"use strict";

exports.__esModule = true;
var _exportNames = {
  grammar: true
};
exports.grammar = void 0;

var _gerber = _interopRequireWildcard(require("./gerber"));

Object.keys(_gerber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _gerber[key];
});

var _drill = _interopRequireWildcard(require("./drill"));

Object.keys(_drill).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _drill[key];
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var grammar = [].concat(_gerber.default, _drill.default);
exports.grammar = grammar;