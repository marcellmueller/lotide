//without takes two arrays, a source array and a second with
//items to remove. It then filters through items to remove and returns a
//new array with the remaining items.
const without = (sourceArray, itemsToRemove) => {
  let newArray = [...sourceArray];
  newArray = newArray.filter((i) => itemsToRemove.indexOf(i) === -1);
  return newArray;
};

module.exports = without;
