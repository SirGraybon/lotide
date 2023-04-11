//Assertation Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertation passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`;
  }
};


//Exports Function
module.exports = assertEqual;