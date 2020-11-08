const eqArraysRecursive = require('../eqArraysRecursive');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('returns [[2, 3], [4]] === [[2, 3], [4]]', () => {
    assert.strictEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('returns false', () => {
    assert.strictEqual(
      eqArraysRecursive(
        [[2, 3], [4]],
        [
          [2, 3],
          [4, 5],
        ]
      ),
      false
    );
  });
});
