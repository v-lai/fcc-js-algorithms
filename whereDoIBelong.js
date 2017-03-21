function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b){
  	return a - b; // ascending order
  });
  if (arr[0] >= num || arr.length === 0) {
	return 0;
  }
  if (arr[arr.length - 1] <= num){
	return arr.length;
  }
  for (let i = 0; i < arr.length; i++){
	if (arr[i] < num && arr[i+1] >= num){
		return i+1;
    }
  }
}

getIndexToIns([40, 60], 50);
