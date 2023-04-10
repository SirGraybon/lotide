//import
const tail = require('../tail');
const assertEqual = require('../assertEqual');


//test cases

assertEqual(tail("Hello"), "ello");
assertEqual(tail("Hello").length, 4);