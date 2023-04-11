const assert = require('chai').assert;
const { letterPositions } = require("../index");

describe("#letterPositions", () => {


  it("returns an object showing letters and the indexes where they appear", () => {
    assert.deepEqual(letterPositions("sheep"), { s: [0], h: [1], e: [2, 3], p: [4] });
  });

});
