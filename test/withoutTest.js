const assert = require('chai').assert;
const {without} = require("../index");

describe("#without", () => {
  it("compares two arrays and returns values not present in both", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), [ '1', '2' ]);
  });

});
