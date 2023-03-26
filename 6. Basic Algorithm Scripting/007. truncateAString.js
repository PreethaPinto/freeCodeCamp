function truncateString(str, num) {
  let newStr = '';
  if (str.length > num) {
    newStr = str.slice(0, num) + '...';
  } else {
    newStr = str;
  }
  return newStr;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
