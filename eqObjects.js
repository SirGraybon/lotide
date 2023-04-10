// //Assertation Function
// let assertEqual = function(actual, expected) {
//   console.log(actual);
//   console.log(expected);
//   if (actual === expected) {
//     return (`✅✅✅ Assertation passed: ${actual} === ${expected}`);
//   } else {
//     return (`🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`);
//   }
// };

// let eqArrays = function(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }
//   for (let i = 0; i < first.length; i++) {
//     if (first[i] !== second[i]) {
//       return false;
//     }
//   }

//   return true;
// }




const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArray');


// eqObject function
let eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  // tests number of keys are equal
  if (keys1.length !== keys2.length) {
    return false;
  }
  //checks key value pairs exist and are the same in each object
  for (const keys in object1) {
    if ((!Array.isArray(object1[keys])) && typeof (object1[keys]) === "object") {
      if (!eqObjects(object1[keys], object2[keys])) {
        return false;
      }

      continue;
    }
    if (Array.isArray(object1[keys])) {
      if (!eqArrays(object1[keys], object2[keys])) {
        return false;

      }
    } else if (object1[keys] !== object2[keys]) {
      return false;
    }
  }

  //Happy case
  return true;
};



//test cases
//objects
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

//function calls

console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false));
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false));
console.log(assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true));
console.log(assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false));
console.log(assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true));

