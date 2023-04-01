// The global variable
const bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
];

// Change code below this line
function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;

  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let newArr = [...arr];
  const bookIndex = newArr.indexOf(bookName);
  if (bookIndex >= 0) {
    newArr.splice(bookIndex, 1);
    return newArr;

    // Change code above this line
  }
}
