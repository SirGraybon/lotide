


//Functions
// assesses the expected outcome of a function to the actual outcome
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(first, second) {
  let a = first.join("");
  let b = second.join("");
  let out = (a === b);
  return out;
  

};

//console.log(eqArrays(45,));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);