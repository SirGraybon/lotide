
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (!itemsToCount[item]) {
      continue;
    }
    //filter
    if (!results[item]) {
      results[item] = 0;
    }

    //Happy Path
    results[item]++;

  }
  return results;
};

module.exports = countOnly;

