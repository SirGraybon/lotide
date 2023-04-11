
//findKey Function
const findKeyByValue = function(object, value) {
  for (let keys in object) {
    if (object[keys] === value) {
      return keys;
    }
  }
};


module.exports = findKeyByValue;
