const assert = require('chai').assert;
const { assertObjectEqual } = require("../index");

describe("#AssertObjectEqual", () => {
  it("returns correct assertation message when true", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.strictEqual(assertObjectEqual(multiColorShirtObject, anotherMultiColorShirtObject), "✨ Assertation passed, these arrays match 🎉");
  });
  it("returns correct assertation message when false", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "mediu", colors: ["red", "blue"] };
    assert.strictEqual(assertObjectEqual(multiColorShirtObject, anotherMultiColorShirtObject), "❌ Assertation failed: these arrays do not match 🤦‍♀️");
  });


});
