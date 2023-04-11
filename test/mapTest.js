const assert = require('chai').assert;
const { map } = require("../index");

describe("#map", () => {
  it("transforms a giver array - multiply by two", () => {
    const words = [1, 2, 3, 4, 5];
    assert.deepEqual(map(words, x => x * 2), [2, 4, 6, 8, 10]);
  });

});
