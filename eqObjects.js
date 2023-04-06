//Assertation Function
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`);
  }
};

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

// eqObject function
let eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  console.log(keys1);
  let keys2 = Object.keys(object2);
  console.log(keys2);
  
  // tests number of keys are equal
  if (keys1.length !== keys2.length) {
    console.log(false);
    return false;
  }
  //check if keys are in the right order
  // if (!eqArrays(keys1, keys2)) {
  //   console.log(false);
  //   return false;
  // }


  //checks key value pairs exist and are the same in each object
  for (const keys in object1) {
    console.log(object1[keys]);
    if (Array.isArray(object1[keys])) {
      console.log(eqArrays(object1[keys], object2[keys]));
      if (!eqArrays(object1[keys], object2[keys])) {
        console.log(false);
        return false;
      }
    } else if (object1[keys] !== object2[keys]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};


//test cases
//objects
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

//function calls
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
//eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false