//'Flattens' nested array elements into a single array
const flatten = (array) => {
  array = array.toString();
  array = array.split(',');
  array = array.map(Number);
  return array;
};

module.exports = flatten;
