// import
const assert = require('chai').assert;
const { eqArray } = require("../index");

describe("#eqArray", () => {
  it("returns True when fed matching arrays", () => {
    assert.strictEqual(eqArray(["1, 2, 3"], ["1, 2, 3"]), true);
  });
  it("returns false when fed arrays that do not match", () => {
    assert.strictEqual(eqArray(["1, 2, 3"], ["1, 3, 3"]), false);
  });
  it("works with nested arrays", () => {
    assert.strictEqual(eqArray(["1, 2, 3,[4, 5]"], ["1, 2, 3,[4, 5]"]), true);
  });

});





