function sumAll(arr) {
  let newArr = [];
  arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    newArr.push(i);
  }
  let total = newArr.reduce((sum, num) => sum + num, 0);
  return total;
}
console.log(sumAll([4, 6]));
