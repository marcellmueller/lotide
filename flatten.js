//function to 'flatten' an array with arrays in it.
const flatten = (array) => {
  array = array.toString();
  array = array.split(',');
  array = array.map(Number);
  return array;
};

module.exports = flatten;
