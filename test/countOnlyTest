const assert = require('chai').assert;
const { countOnly } = require("../index");

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const toCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };


  it("counts specified names", () => {
    assert.deepEqual(countOnly(firstNames, toCount), { Fang: 2, Jason: 1 });
  });

});
