function diffArray(arr1, arr2) {
  const newArr = [];

  arr1.forEach((num) => {
    if (!arr2.include(num)) {
      newArr.push(num);
    }
  });

  arr2.forEach((num) => {
    if (!arr1.include(num)) {
      newArr.push(num);
    }
  });
  return newArr;
}

console.log(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
);
