function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return (str = '');
  }

  let newStr = '';
  for (let i = 1; i <= num; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(repeatStringNumTimes('abc', 3));
