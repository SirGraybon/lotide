//import
const tail = require('../tail');
const assert = require('chai').assert;


//test cases

describe("#tail", () => {
  it("should return ello, when given hello", () => {
    assert.strictEqual(tail("hello"), "ello");
  });
});