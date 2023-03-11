function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numberRange = rangeOfNumbers(startNum, endNum - 1);
    numberRange.push(endNum);
    return numberRange;
  }
}
