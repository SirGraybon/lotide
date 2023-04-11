
const flatten = function(arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    //if (typeof arr[i] === "object") {
    if (Array.isArray(arr[i])) {
      for (let y = 0; y < arr[i].length; y++) {
        output.push(arr[i][y]);
      }
    } else {
      output.push(arr[i]);
    }
  }

  return output;
};

module.exports = flatten;













