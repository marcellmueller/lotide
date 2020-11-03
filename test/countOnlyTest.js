const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], undefined);
// assertEqual(result1['Fang'], 2);
// assertEqual(result1['Agouhanna'], undefined);

// assertEqual(result1['Agouhanna'], undefined);
describe('#ccountOnly', () => {
  it("returns 1 for 'Jason'", () => {
    assert.strictEqual(result1['Jason'], 1);
  });
  it("returns undefiened for 'Marcel'", () => {
    assert.strictEqual(result1['Marcel'], undefined);
  });
});

// describe('#countLEtters', () => {
//   it('returns 1 for [1, 2, 3]', () => {
//     assert.strictEqual(countLetters('Marcel', ['l']), 1);
//   });
//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(countLetters('Lighthouse Labs', ['L']), 2);
//   });
// });
