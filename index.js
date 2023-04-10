const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArray = require('./eqArray');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const map = require('./map');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectEqual,
  countLetters,
  countOnly,
  eqArray,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  map,
  letterPositions,
  takeUntil,
  without
};

// module.exports = {
//   head: head,
//   tail: tail,
//   middle: middle,
//   assertArraysEqual: assertArraysEqual,
//   assertEqual: assertEqual,
//   assertObjectEqual: assertObjectEqual,
//   countLetters: countLetters,
//   countOnly: countOnly,
//   eqArray: eqArray,
//   eqObjects: eqObjects,
//   findKey: findKey,
//   findKeyByValue: findKeyByValue,
//   flatten: flatten,
//   map: map,
//   letterPositions: letterPositions,
//   takeUntil: takeUntil,
//   without: without
// };