const map = (array, callback) => {
  const results = [];
  for (const each of array) {
    results.push(callback(each));
  }
  return results;
};

module.exports = map;
