function bouncer(arr) {
  const booleanArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === true) {
      booleanArr.push(arr[i]);
    }
  }

  return booleanArr;
}

console.log(bouncer([7, 'ate', '', false, 9]));
