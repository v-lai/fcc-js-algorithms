function sumAll(arr) {
  let newArr = arr.sort(function(a, b){ // sort by ascending
    return a - b;
  });  
  let sum = 0;
  for (let i = newArr[0]; i <= newArr[1]; i++){
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
