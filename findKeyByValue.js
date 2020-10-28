const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`)
    : console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

const findKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

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
