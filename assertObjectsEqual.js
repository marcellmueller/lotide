const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  eqObjects(actual, expected)
    ? console.log(
        `✅✅✅ Assertion Passed: ${inspect(actual)} and ${inspect(
          expected
        )} are equal!`
      )
    : console.log(
        `🛑🛑🛑 Assertion Failed: ${inspect(actual)} does not equal ${inspect(
          expected
        )}`
      );
};

module.exports = assertObjectsEqual;
