//take in a string and then return a count of each of the letters in that string

const countLetters = (string, letter) => {
  const results = {};

  for (const letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results[letter];
};

module.exports = countLetters;
