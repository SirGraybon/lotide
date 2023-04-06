//assertation function

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




let map = function(arr, cb) {
  console.log(arr)
  console.log(cb)
  const result = [];
  for (let item of arr) {
    result.push(cb(item));
  }

  return result;
}




//tast cases
const words = ["ground", "control"] //, "to", "major", "tom"];

assertsArraysEqual(map(words,  word => word[0]), ["g",'c']);