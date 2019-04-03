"use strict";

exports.__esModule = true;
exports.findMatch = findMatch;
exports.token = token;
exports.one = one;
exports.zeroOrOne = zeroOrOne;
exports.zeroOrMore = zeroOrMore;
exports.minToMax = minToMax;
var TOKEN = 'TOKEN';
var MIN_TO_MAX = 'MIN_TO_MAX';
var FULL_MATCH = 'FULL_MATCH';
var PARTIAL_MATCH = 'PARTIAL_MATCH';
var NO_MATCH = 'NO_MATCH';

function findMatch(state, token) {
  var candidates = state.candidates,
      match = state.match,
      tokens = state.tokens;
  return candidates.reduce(function (nextState, cand) {
    var result = isMatch(cand.match, nextState.tokens);

    if (result === FULL_MATCH) {
      nextState.match = nextState.match || cand;
    } else if (result === PARTIAL_MATCH) {
      nextState.candidates.push(cand);
    }

    return nextState;
  }, {
    candidates: [],
    match: match,
    tokens: [].concat(tokens, [token])
  });
}

function token(type, value) {
  return {
    rule: TOKEN,
    type: type,
    value: value
  };
}

function one(match) {
  return {
    rule: MIN_TO_MAX,
    min: 1,
    max: 1,
    match: match
  };
}

function zeroOrOne(match) {
  return {
    rule: MIN_TO_MAX,
    min: 0,
    max: 1,
    match: match
  };
}

function zeroOrMore(match) {
  return {
    rule: MIN_TO_MAX,
    min: 0,
    max: Infinity,
    match: match
  };
}

function minToMax(min, max, match) {
  return {
    rule: MIN_TO_MAX,
    min: min,
    max: max,
    match: match
  };
}

function isMatch(rules, tokens) {
  var i = 0;
  var j = 0;
  var multiMatchCount = 0;

  while (i < rules.length && j < tokens.length) {
    var rule = rules[i];
    var _token = tokens[j];
    var match = checkToken(rule, _token);

    if (match) {
      if (rule.rule === TOKEN || rule.rule === MIN_TO_MAX && multiMatchCount >= rule.max - 1) {
        i++;
        j++;
        multiMatchCount = 0;
      } else if (rule.rule === MIN_TO_MAX) {
        j++;
        multiMatchCount++;
      }
    } else if (rule.rule === MIN_TO_MAX && multiMatchCount >= rule.min) {
      multiMatchCount = 0;
      i++;
    } else {
      return NO_MATCH;
    }
  }

  if (i < rules.length) return PARTIAL_MATCH;
  return FULL_MATCH;
}

function checkToken(rule, token) {
  if (rule.rule === TOKEN) {
    return rule.type === token.type && (rule.value == null || rule.value === token.value);
  }

  if (Array.isArray(rule.match)) {
    return rule.match.some(function checkRuleMatch(match) {
      return checkToken(match, token);
    });
  }

  return false;
}