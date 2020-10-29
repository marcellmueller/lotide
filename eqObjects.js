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

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };

const cd2 = { c: '1', d: ['2', 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(abc, ba), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
