const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello').l, [2, 3]);
console.log(letterPositions('Lighthouse Labs'));
assertArraysEqual(letterPositions('Lighthouse Labs').L, [0, 11]);

const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});
