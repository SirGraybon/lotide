//functions
// checks if arrays are equal
let eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

let assertArraysEqual = function(first, second) {

  if (eqArrays(first, second)) {
    console.log("✨ Assertation passed, these arrays match 🎉");
  } else {
    console.log(`❌ Assertation failed: these arrays do not match 🤦‍♀️`);
  }
};

//Letter index function
const letterPositions1 = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }

    }
  }
  console.log(results);
  return results;
};


const letterPositions = function(str) {
  const results = {};

  for (const i in str) {
    //filter
    const letter = str[i]
    if (i === " ") {
      continue;
    }
    if (!results[i]) {
      results[i] = 0;
    }

    results[letter].push(letter)
  }
  console.log(results);
  return results;
};


letterPositions("my milkshakes bring all the boys to the yard");
letterPositions1("my milkshakes bring all the boys to the yard");