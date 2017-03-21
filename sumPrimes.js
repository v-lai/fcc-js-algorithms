function sumPrimes(num) {
  let arr = [];
  for (let i = 2; i <= num; i++){ // ascending array of numbers to 2 (lowest prime)
    arr.push(i);
  }

  let notPrime = []; // array of non-prime numbers
  while (arr.length > 0){
    let testing = arr.pop();
    isNotPrime(testing);
  }

  function isNotPrime(testing) {
    arr.forEach(function (el){ 
        if (testing % el === 0){
            notPrime.push(testing);
        }
    });
  }

  let sum = 0;
  for (let i = 2; i <= num; i++){ // array of primes
    if (!notPrime.includes(i)){
        sum += i;
    }
  }
  return sum;
}
sumPrimes(10);

// function sumPrimes(num) {
//   let arr = [];
//   for (let i = num; i >= 2; i--){ // descending array of numbers to 2 (lowest prime)
//     arr.push(i);
//   }

//   let notPrime = []; // array of non-prime numbers
//   while (arr.length > 0){
//     let testing = arr.shift();
//     isNotPrime(testing);
//   }

//   function isNotPrime(testing) {
//     arr.forEach(function (el){ 
//         if (testing % el === 0){
//             notPrime.push(testing);
//         }
//     });
//   }

//   let sum = 0;
//   for (let i = num; i >= 2; i--){ // array of primes
//     if (!notPrime.includes(i)){
//         sum += i;
//     }
//   }
//   return sum;
// }

// sumPrimes(10);

