

const eqArray = require("./eqArray");

const assertArraysEqual = function(first, second) {

  if (eqArray(first, second)) {
    return "✨ Assertation passed, these arrays match 🎉";
  } else {
    return `❌ Assertation failed: these arrays do not match 🤦‍♀️`;
  }
};



module.exports = assertArraysEqual;