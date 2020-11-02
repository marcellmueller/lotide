const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello').l, [2, 3]);
console.log(letterPositions('Lighthouse Labs'));
assertArraysEqual(letterPositions('Lighthouse Labs').L, [0, 11]);
