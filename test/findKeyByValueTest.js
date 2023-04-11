const assert = require('chai').assert;
const { findKeyByValue } = require("../index");

describe("#findKeyByValue", () => {
  it("finds the key based on the value", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

});

