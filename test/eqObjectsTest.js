const assert = require('chai').assert;
//const {eqObjects} = require("../index");
const eqObjects = require("../eqObjects")

describe("#eqObjects", () => {
  it("returns True", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("returns false", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
});
