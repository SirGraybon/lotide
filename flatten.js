
let flatten = function(arr) {
  let output = [];
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
  console.log(Array.isArray(output));
  return output;
};
  













console.log(flatten([1, 2, [3, 4], 5, [6]]));

