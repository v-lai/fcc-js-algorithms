function sumFibs(num) {
  let fib = 1;
  let prev = 1;
  let temp;
  let fibArr = [prev, fib];
  while (fib < num){ // create a fibArray
      temp = fib;
	  fib += prev;
      fibArr.push(fib);
      prev = temp;
  }
  let sum = 0;
  for (let i = 0; fibArr[i] <= num; i++){ // going through fibArray values
  	if (fibArr[i] % 2 !== 0){ // if odd
		sum += fibArr[i];
  	}
  }
  return sum;
}

sumFibs(4);