function findLongestWordLength(str) {
  let splitStr = str.split(' ');
  let longestWord = '';

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > longestWord.length) {
      longestWord = splitStr[i];
    }
  }

  return longestWord.length;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
