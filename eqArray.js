
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (Array.isArray(first[i])) {
      if (!eqArrays(first[i], second[i])) {
        return false;
      }
      continue;
    }
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;


};


// assertEqual(eqArrays(["1, 2, 3"], ["1, 2, 3"]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, [4, 5], 3], [1, [4, 5], 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays([3, [2, 5], 1], [3, [2, 4], 1]), false);

module.exports = eqArrays;