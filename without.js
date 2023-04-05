//Functions
//eqArrays
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
//assertArraysEqual
let assertsArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log("✨ Assertation passed, these arrays match 🎉");
  } else {
    console.log(`❌ Assertation failed: these arrays do not match 🤦‍♀️`);
  }
};

// let without = function(source, toRemove) {
//   let output = [];
//   for (let i = 0; i < source.length; i++) {
//     if (!(toRemove.includes(source[i]))) {
//       output.push(source[i]);
//     }
//   }
//   return output;
// };

let without = function(source, toRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    for (let y = 0; y < toRemove.length; y++) {

      if (source[i] === toRemove[y]) {
        console.log(source[i]);
        console.log(`match found: source ${source[i]} === toRemove ${toRemove[y]}`);
        break;
      }
      
      if (toRemove.length - 1 === y) {
        output.push(source[i]);
      }
    }
  }
  return output;
};
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1]));