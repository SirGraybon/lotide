// import
const assertEqual = require('../assertEqual');
const eqArray = require('../eqArray');


// test cases
assertEqual(eqArray(["1, 2, 3"], ["1, 2, 3"]), true);
assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArray([1, [4, 5], 3], [1, [4, 5], 3]), true);
assertEqual(eqArray([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArray([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArray([3, [2, 5], 1], [3, [2, 4], 1]), false);