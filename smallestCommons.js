function smallestCommons(arr) {
  let minVal = Math.min(arr[0], arr[1]);
  let maxVal = Math.max(arr[0], arr[1]);
  let range = [];

  for (let i = minVal; i <= maxVal; i++){ // array of values in range
    range.push(i);
  }

  let scm = range[0]; // current smallest common multiple
  
  for (let j = 1; j < range.length; j++){ // going through array starting with next element
    let curr = range[j]; // current number being evaluated
    let prevScm = scm; // holds previous smallest common multiple
    
    while (scm && curr){ // while neither is zero
      if (scm > curr){ 
        scm %= curr;
      }
      else {
        curr %= scm;
      }
    }
    scm = prevScm * range[j] / (scm + curr); // (largest value / least common value)
  }
  return scm;
}

smallestCommons([1,5]);
