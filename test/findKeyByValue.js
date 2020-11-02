const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
  thriller: 'Mr Robot',
  sciFiWestern: 'Firefly',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Mr Robot'), 'thriller');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Firefly'), 'sciFiWestern');
