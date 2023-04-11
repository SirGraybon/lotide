
//import functions
//const assertEqual = require('./assertEqual');
// const eqArray = require('./eqArray');
//const {eqArray } = require("./index");
const eqArray = require("./eqArray")


// eqObject function
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // tests number of keys are equal
  if (keys1.length !== keys2.length) {
    return false;
  }
  // checks key value pairs exist and are the same in each object
  for (const keys in object1) {
    if ((!Array.isArray(object1[keys])) && typeof (object1[keys]) === "object") {
      if (!eqObjects(object1[keys], object2[keys])) {
        return false;
      }
      continue;
    }
    if (Array.isArray(object1[keys])) {
      if (!eqArray(object1[keys], object2[keys])) {
        return false;
      }

    } else if (object1[keys] !== object2[keys]) {
      return false;
    }
  }

  //Happy case

  return true;
};

module.exports = eqObjects;

