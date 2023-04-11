const assert = require('chai').assert;
const { countLetters } = require("../index");

describe("countLetters", () => {
  it("returns an object counting the instances of each letters in an array", () => {
    const milkshake = "My milkshake brings all the boys to the yard";
    assert.deepEqual(countLetters(milkshake), {M: 1,
      y: 3,
      m: 1,
      i: 2,
      l: 3,
      k: 2,
      s: 3,
      h: 3,
      a: 3,
      e: 3,
      b: 2,
      r: 2,
      n: 1,
      g: 1,
      t: 3,
      o: 2,
      d: 1
    });
  });

});
