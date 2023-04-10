
let eqArray = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (Array.isArray(first[i])) {
      if (!eqArray(first[i], second[i])) {
        return false;
      }
      continue;
    }
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;


};

module.exports = eqArray;