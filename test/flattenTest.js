const assert = require('chai').assert;
const {flatten} = require("../index");

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5 ] when fed [1, 2, [3, 4], 5]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5 ] );
  });

});
