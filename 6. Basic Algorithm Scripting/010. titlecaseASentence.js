function titleCase(str) {
  const str1 = str.split(' ');
  const newStr = [];
  for (let i in str1) {
    newStr[i] = str1[i][0].toUpperCase() + str1[i].slice(1).toLowerCase();
  }
  return newStr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
