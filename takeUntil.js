const takeUntil = function(array, callBack) {
  const output = [];
  for (let items of array) {
    if (callBack(items)) {
      return output;
    }
    output.push(items);
  }
};

module.exports = takeUntil;


