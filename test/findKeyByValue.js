const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
  thriller: 'Mr Robot',
  sciFiWestern: 'Firefly',
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'Mr Robot'), 'thriller');
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'Firefly'), 'sciFiWestern');

describe('#eqArrays', () => {
  it(`returns 'drama' for 'The Wire'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it(`returns 'thriller' for 'Mr Robot'`, () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, 'Mr Robot'),
      'thriller'
    );
  });
});
