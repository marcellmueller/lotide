const letterPositions = (string) => {
  const results = {};
  let index = 0;
  for (const letter of string) {
    if (results[letter] === undefined && letter !== ' ') {
      results[letter] = [];
    }
    if (letter !== ' ') {
      results[letter].push(index);
    }
    index++;
  }
  return results;
};

module.exports = letterPositions;
