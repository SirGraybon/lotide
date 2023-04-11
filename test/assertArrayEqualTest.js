const { assertArraysEqual } = require("../index");
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns: ✨ Assertation passed, these arrays match 🎉", () => {
    let array1 = [1, 2, 3];
    let array2 = [1, 2, 3];
    assert.strictEqual(assertArraysEqual(array1, array2), "✨ Assertation passed, these arrays match 🎉");
  });

});
