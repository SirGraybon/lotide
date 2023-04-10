//assertation function

let map = function(arr, cb) {
  const result = [];
  for (let item of arr) {
    result.push(cb(item));
  }

  return result;
};


module.exports = map;



//tast cases
const words = ["ground", "control"]; //, "to", "major", "tom"];

