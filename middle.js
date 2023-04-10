//assertation functions

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


let middle = function(arr) {
  let middle = Math.floor(arr.length/2)
  let midArr = [];
  let items = arr.length;
  if (items < 3) {
    return midArr;
  }
  if (!isEven(items)) {
    return [arr[middle]];
  }
  if (isEven(items)) {
    return [arr[middle - 1], arr[middle]];
  }
};
 


let isEven = function(x) {
  return (x % 2 === 0);
};


assertsArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
console.log(middle([1,2,3,4,5]));
assertsArraysEqual(middle([1,2,3,4,5]), [3]);



const myObject = {
  a: 6,
  b: "abc",
  c: true,
  d: null,
};

console.log(myObject["a"]);
console.log(myObject["e"]);
