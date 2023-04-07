//Assertation Function
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`);
  }
};


let findKey = function(object, callBack) {
  for (let keys in object) {
    // console.log(object[keys])
    // console.log(keys.stars)
    // console.log(callBack(keys))

    if (callBack(object[keys])) {
      //console.log(object[keys]);
      console.log(keys);
      return keys;
    }
  }
};


//test cases
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
