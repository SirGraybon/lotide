

const eqArray = require("./eqArray");

let assertArraysEqual = function(first, second) {

  if (eqArray(first, second)) {
    console.log("✨ Assertation passed, these arrays match 🎉");
  } else {
    console.log(`❌ Assertation failed: these arrays do not match 🤦‍♀️`);
  }
};



module.exports = assertArraysEqual;