const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('returns [[2, 3], [4]] === [[2, 3], [4]]', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), false);
  });

  it('returns false', () => {
    assert.strictEqual(
      eqArrays(
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
