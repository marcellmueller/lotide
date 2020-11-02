const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(without([1, 2, 3], [1]), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [4, 5, 6]), [1, 2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2', '3']);
assertArraysEqual(without(['1', '2', '3'], [1, 2, 3]), ['1', '2', '3']);
