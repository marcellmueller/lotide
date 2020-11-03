const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
const cd2 = { c: '1', d: ['2', 3, 4] };

describe('#eqObjects', () => {
  it(`returns true for { b: '2', a: '1' }, { a: '1', b: '2' }'`, () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it(`returns true for { d: ['2', 3], c: '1' } { d: ['2', 3], c: '1' }`, () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it(`returns false for { c: '1', d: ['2', 3, 4] }} { d: ['2', 3], c: '1' }`, () => {
    assert.strictEqual(eqObjects(cd2, dc), false);
  });
});
