
// const { eqObjects } = require("./index");
const eqObjects = require("./eqObjects")




const assertObjectEqual = function(actual, expected) {

  if (eqObjects(actual, expected)) {
    return `✨ Assertation passed, these arrays match 🎉`;
  } else {
    return `❌ Assertation failed: these arrays do not match 🤦‍♀️`;
  }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertObjectEqual(multiColorShirtObject, anotherMultiColorShirtObject));

module.exports = assertObjectEqual;
