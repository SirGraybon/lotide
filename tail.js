
let tail = function(input) {
  // input.split("").shift;
  return input.split("").slice(1).join("");
};
module.exports = tail;

console.log(tail(""));