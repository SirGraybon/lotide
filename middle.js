//import functions


let middle = function(arr) {
  let mid = Math.floor(arr.length / 2);
  let items = arr.length;
  if (items < 3) {
    return [];
  }
  if (!isEven(items)) {
    return [arr[mid]];
  }
  if (isEven(items)) {
    return [arr[mid - 1], arr[mid]];
  }
};



let isEven = function(x) {
  return (x % 2 === 0);
};

module.exports = middle;



