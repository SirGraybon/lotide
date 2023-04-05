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



let assertsArraysEqual = function(first, second) {
  
  if (eqArrays(first, second)) {
    console.log("✨ Assertation passed, these arrays match 🎉");
  } else {
    console.log(`❌ Assertation failed: these arrays do not match 🤦‍♀️`);
  }
};

assertsArraysEqual([1,2,3], [1,2,3]);