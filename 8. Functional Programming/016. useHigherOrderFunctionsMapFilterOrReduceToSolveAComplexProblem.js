const squareList = (arr) => {
  // Only change code below this line
  let newArr = arr
    .filter((num) => num > 0 && num % parseInt(num) === 0)
    .map((num) => Math.pow(num, 2));
  return newArr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
