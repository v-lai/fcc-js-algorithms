function addTogether() {
  let arg1 = arguments[0];
  let arg2 = arguments[1] || 0; // default to 0
  if (typeof arg1 !== "number" || typeof arg2 !== "number"){ // must be a number to return a sum
      return undefined;
  }
  
  let tempSum = addTogether(arg1); 

  if (arg2 === 0 && arguments[1] !== 0){ // returning a function if no 2nd argument
  	return tempSum;
  }

  return tempSum(arg2); // returning a number if there are 2 arguments
  
  function addTogether(x){
      return function(y){
		  if (typeof y === "number"){ // must be a number to return sum
          	return x + y;
          } else {
			return undefined;
          }
      };
  }
}

addTogether(2, 3);
addTogether(2)(3);