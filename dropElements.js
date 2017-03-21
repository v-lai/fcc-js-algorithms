function dropElements(arr, func) {
  // Drop them elements.
  let newArr = arr;
  
  while (func(newArr[0]) === false && newArr.length >= 0){ // while first element is false & length is positive
      newArr.shift();
      if (newArr.length === 0){
          newArr = [];
          break;
      }
  }

  return newArr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
