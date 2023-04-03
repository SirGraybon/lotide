//Function
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`);
  }
};

// Test code
assertEqual("Lighthouse Labs", "bootcamp");
assertEqual(1,1);
assertEqual("Good boy","good boy");
