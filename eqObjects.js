const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  const object1Keys = Object.keys(object1).sort();
  const object2Keys = Object.keys(object2).sort();
  if (object1Keys.length === object2Keys.length) {
    for (let i = 0; i < object1Keys.length; i++) {
      if (object1Keys[i] !== object2Keys[i]) {
        return false;
      } else if (
        Array.isArray(object1[object1Keys[i]]) &&
        Array.isArray(object2[object2Keys[i]])
      ) {
        return eqArrays(object1[object1Keys[i]], object2[object2Keys[i]]);
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;
