const findKey = (object, callback) => {
  for (const each in object) {
    if (callback(object[each]) === true) {
      return each;
    }
  }
  return false;
};

module.exports = findKey;
