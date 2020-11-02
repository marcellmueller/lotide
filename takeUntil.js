//The function will return a "slice of the array with
// elements taken from the beginning." It will keep
//going until the callback/predicate returns a truthy value.

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
