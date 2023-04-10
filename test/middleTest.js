const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [], when provided with [ 1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2], when provided with [ 1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2, 3], when provided with [ 1, 2, 3, 4]", () => {
    assert.deepEqual(middle(['1', '2', '3', '4']), ['2', '3']);
  });
});

