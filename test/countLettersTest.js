const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

assertEqual(countLetters('Marcel')['l'], 1);
assertEqual(countLetters('Lighthouse Labs')['L'], 2);
