//Assertation Function
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation failed: ${actual} !== ${expected}`);
  }
};
//Graydon original solution

// let countOnly = function(allItems, itemsToCount) {
//   let attendance = {};
//   for (let item in itemsToCount) {
//     let count = 0;
//     //let count = [];
//     if (itemsToCount[item] === true) {
//       for (let i = 0; i < allItems.length; i++) {
//         if (item === allItems[i]) {
//           count++;
//           //count.push(item);
//           attendance[item] = count;
//         }
//       }
//     }
//   }
//   return attendance;
// };

//Gary J's solution
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (!itemsToCount[item]) {
      continue;
    }
    //filter
    if (!results[item]) {
      results[item] = 0;
    }

    //Happy Path
    results[item]++;

  }
  return results;
};


//test cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);