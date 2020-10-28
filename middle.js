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

const oddArray = (array) => {
  const index = Math.round(array.length / 2);
  return index;
};

const evenArray = (array) => {
  const index = Math.floor(array.length / 2) - 1;
  return index;
};

const middle = (array) => {
  const middleArray = [];
  switch (true) {
    //check if passed array has 2 or less elements
    case array.length <= 2:
      break;
    //check if array has an odd amount of elements
    case array.length % 2 !== 0:
      middleArray.push(oddArray(array));
      break;
    //check if array has even amount of elements
    case array.length % 2 === 0:
      middleArray.push(array[evenArray(array)], array[evenArray(array) + 1]);
      break;
  }

  return middleArray;
};

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
