const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLEtters', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(countLetters('Marcel', ['l']), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(countLetters('Lighthouse Labs', ['L']), 2);
  });
});
