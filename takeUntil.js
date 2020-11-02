const takeUntil = function (array, callback) {
  const results = [];
  for (const each of array) {
    if (callback(each) === false) {
      results.push(each);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;
