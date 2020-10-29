const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`)
    : console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

//function to compare two equal length arrays
const compareArrays = (firstArray, secondArray) => {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

//first checks if arrays are the same length then
//calls compareArrays funtion if true
const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length === secondArray.length) {
    return compareArrays(firstArray, secondArray);
  } else {
    return false;
  }
};

const eqObjects = (object1, object2) => {
  const object1Keys = Object.keys(object1).sort();
  const object2Keys = Object.keys(object2).sort();
  if (object1Keys.length === object2Keys.length) {
    for (let i = 0; i < object1Keys.length; i++) {
      if (object1Keys[i] !== object2Keys[i]) {
        return false;
      } else if (
        Array.isArray(object1[object1Keys[i]]) &&
        Array.isArray(object2[object2Keys[i]])
      ) {
        return eqArrays(object1[object1Keys[i]], object2[object2Keys[i]]);
      }
    }
    return true;
  } else {
    return false;
  }
};
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

assertObjectsEqual({ a: '1', b: '2', c: '3' }, { a: '1', b: '2', c: '3' });
assertObjectsEqual({ a: '1', b: '2', c: '3' }, { b: '2', c: '3' });
