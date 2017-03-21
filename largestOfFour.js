function largestOfFour(arr) {
  // You can do this!
  var largest = [];
  arr.forEach(function(subarray){
	var large = subarray.reduce(function(a, b){
      return a > b ? a : b;
    });
    return largest.push(large);
  });
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);