//The map function will return a new array based on the results of the callback function.

const map = (array, callback) => {
  const results = [];
  for (const each of array) {
    results.push(callback(each));
  }
  return results;
};

module.exports = map;
