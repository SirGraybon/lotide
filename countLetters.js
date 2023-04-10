//Assertation Function
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`);
  }
};


// //countLetters Function
// let countLetters = function(word) {
//   let noSpace = word.split(" ").join("")
//   let output = {};
//   console.log(noSpace)
//   for (let letters of noSpace) {
//     if (letters in output) {
//       output[letters] += 1;

//     } else {
//       output[letters] = 1;
//     }
//   }
//   return output;
// };


//Gary solution
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

console.log(countLetters("the absolute absurdaty of it all"));
