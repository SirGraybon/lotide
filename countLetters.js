const { count } = require("console");

//Assertation Function
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`);
  }
};



let countLetters = function(word) {
  const results = {};

  for (let letter of word) {

    if (letter === " ") {
      continue;
    }

    if (!results[letter]) {
      results[letter] = 0;
    }

    results[letter]++; //|| (results[letter] = 1)
  }
  return results;
};

module.exports = countLetters;

console.log(countLetters("the absolute absurdaty of it all"));
