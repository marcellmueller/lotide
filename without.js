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

//prints a message to console depending on what
//eqArrays returns
const assertArraysEqual = (firstArray, secondArray) => {
  eqArrays(firstArray, secondArray)
    ? console.log(
        `✅✅✅ Assertion Passed: ${firstArray} and ${secondArray} are equal!`
      )
    : console.log(
        `🛑🛑🛑 Assertion Failed: ${firstArray} does not equal ${secondArray}`
      );
};

const without = (sourceArray, itemsToRemove) => {
  let newArray = [...sourceArray];
  newArray = newArray.filter((i) => itemsToRemove.indexOf(i) === -1);
  return newArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [4, 5, 6]), [1, 2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2', '3']);
assertArraysEqual(without(['1', '2', '3'], [1, 2, 3]), ['1', '2', '3']);
