const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = (array, callback) => {
  const results = [];
  for (const each of array) {
    results.push(callback(each));
  }
  return results;
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

const assertArraysEqual = (firstArray, secondArray) => {
  eqArrays(firstArray, secondArray)
    ? console.log(
        `✅✅✅ Assertion Passed: ${firstArray} and ${secondArray} are equal!`
      )
    : console.log(
        `🛑🛑🛑 Assertion Failed: ${firstArray} does not equal ${secondArray}`
      );
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(words, words);
assertArraysEqual(words, ['g', 'c', 't', 'm', 't']);
