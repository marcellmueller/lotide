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

const assertArraysEqual = (firstArray, secondArray) => {
  eqArrays(firstArray, secondArray)
    ? console.log(
        `✅✅✅ Assertion Passed: ${firstArray} and ${secondArray} are equal!`
      )
    : console.log(
        `🛑🛑🛑 Assertion Failed: ${firstArray} does not equal ${secondArray}`
      );
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

const letterPositions = (string) => {
  const results = {};
  let index = 0;
  for (const letter of string) {
    if (results[letter] === undefined && letter !== ' ') {
      results[letter] = [];
    }
    if (letter !== ' ') {
      results[letter].push(index);
    }
    index++;
  }
  return results;
};

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello').l, [2, 3]);
console.log(letterPositions('Lighthouse Labs'));
assertArraysEqual(letterPositions('Lighthouse Labs').L, [0, 11]);
