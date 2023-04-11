
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

// console.log(countLetters("the absolute absurdaty of it all"));
