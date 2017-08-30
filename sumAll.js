function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let result = 0;
  while (min <= max) {
    result += min;
    min++;
  }
  return result;
}

sumAll([1, 4]);
