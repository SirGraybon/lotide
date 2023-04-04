//Function
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`);
  }
};

let tail = function(input) {
  let output = [];
  for (let i = 1; i < input.length; i ++) {
    output.push(input[i]);
  }
  return output.join("");
};

console.log(tail("hello"));
assertEqual(tail("Hello"), "ello");
assertEqual(tail("Hello").length, 4);