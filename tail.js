const tail = (arr) => {
  const newArr = [...arr];
  newArr.shift();
  return newArr;
};

module.exports = tail;
