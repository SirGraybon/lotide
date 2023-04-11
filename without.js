
const without = function(source, toRemove) {
  const output = [];
  for (let i = 0; i < source.length; i++) {
    for (let y = 0; y < toRemove.length; y++) {

      if (source[i] === toRemove[y]) {

        break;
      }

      if (toRemove.length - 1 === y) {
        output.push(source[i]);
      }
    }
  }
  return output;
};


module.exports = without;
