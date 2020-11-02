//Returns an array with the first element removed

const tail = (arr) => {
  const newArr = [...arr];
  newArr.shift();
  return newArr;
};

module.exports = tail;
