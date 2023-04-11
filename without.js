
let without = function(source, toRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    for (let y = 0; y < toRemove.length; y++) {

      if (source[i] === toRemove[y]) {
        console.log(source[i]);
        console.log(`match found: source ${source[i]} === toRemove ${toRemove[y]}`);
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
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(without([1, 2, 3], [1]));