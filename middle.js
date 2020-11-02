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

module.exports = middle;
