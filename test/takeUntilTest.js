const assert = require('chai').assert;
const { takeUntil } = require("../index");

describe("#takeUntil", () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  it("returns an array up until a specified cut-off", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });

});
