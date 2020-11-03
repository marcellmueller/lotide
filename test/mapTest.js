const map = require('../map');
const assert = require('chai').assert;

const words = ['ground', 'control', 'to', 'major', 'tom'];

const results1 = map(words, (word) => word[0]);

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });
});
