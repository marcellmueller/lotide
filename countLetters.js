const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`)
    : console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

const countLetters = (string) => {
  const results = {};

  for (const letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};
assertEqual(countLetters('Marcel')['l'], 1);
assertEqual(countLetters('Lighthouse Labs')['L'], 2);

countLetters;
