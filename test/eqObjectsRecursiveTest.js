const assert = require('chai').assert;
const eqObjectsRecursive = require('../eqObjectsRecursive');

describe('#eqObjects', () => {
  it(`returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }`, () => {
    assert.strictEqual(
      eqObjectsRecursive({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      true
    );
  });
  it(`returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }`, () => {
    assert.strictEqual(
      eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      false
    );
  });
  it(`returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }`, () => {
    assert.strictEqual(
      eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),
      false
    );
  });
});
