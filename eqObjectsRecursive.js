const eqArraysRecursive = require('./eqArraysRecursive');
const eqObjects = require('./eqObjects');

const eqObjectsRecursive = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (!(key in object2)) {
      return false;
    }
    if (!eqObjectsRecursive(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

console.log(eqObjectsRecursive({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
module.exports = eqObjectsRecursive;
