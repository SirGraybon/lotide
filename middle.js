//import functions


const middle = function(arr) {
  const mid = Math.floor(arr.length / 2);
  const items = arr.length;
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



const isEven = function(x) {
  return (x % 2 === 0);
};

module.exports = middle;



