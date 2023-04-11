

const assert = require('chai').assert;
const {assertEqual} = require("../index");

describe("assertEqual", () => {
  it("returns ✅✅✅ Assertation passed when there is a match", () => {
    assert.strictEqual(assertEqual("one", "one"), "✅✅✅ Assertation passed: one === one");
  });
  it("returns `🛑🛑🛑 Assertation failed` when there is no match", () => {
    assert.strictEqual(assertEqual("one", "two"), `🛑🛑🛑 Assertation failed: one !== two`);
  });
});





assertEqual("Lighthouse Labs", "bootcamp");
assertEqual(1,1);
assertEqual("Good boy","good boy");