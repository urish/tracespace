"use strict";

exports.__esModule = true;
exports.Parser = void 0;

var _lexer = require("./lexer");

var Tree = _interopRequireWildcard(require("./tree"));

var Rules = _interopRequireWildcard(require("./rules"));

var _grammar = require("./grammar");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// parser class
var INITIAL_MATCH_STATE = {
  candidates: _grammar.grammar,
  tokens: [],
  match: null
};

var Parser =
/*#__PURE__*/
function () {
  function Parser() {
    this.lexer = void 0;
    this._header = void 0;
    this._image = void 0;
    this._root = void 0;
    this.lexer = (0, _lexer.createLexer)();
    this._header = {
      type: Tree.HEADER,
      children: []
    };
    this._image = {
      type: Tree.IMAGE,
      children: []
    };
    this._root = {
      type: Tree.ROOT,
      filetype: null,
      done: false,
      children: [this._header, this._image]
    };
  }

  var _proto = Parser.prototype;

  _proto.feed = function feed(chunk) {
    var next;
    var matchState = INITIAL_MATCH_STATE;
    this.lexer.reset(chunk);

    while (next = this.lexer.next()) {
      matchState = Rules.findMatch(matchState, next);
      var _matchState = matchState,
          match = _matchState.match,
          tokens = _matchState.tokens;

      if (match) {
        this._root = Tree.reducer(this._root, match.type, tokens);

        if (!this._root.filetype && match.filetype) {
          this._root.filetype = match.filetype;
        }
      }

      if (matchState.candidates.length === 0) matchState = INITIAL_MATCH_STATE;
    }
  };

  _proto.results = function results() {
    return this._root;
  };

  return Parser;
}();

exports.Parser = Parser;