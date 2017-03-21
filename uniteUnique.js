function uniteUnique(arr) {
  let newArr = Array.prototype.slice.call(arguments); // new array from arguments
  var flattenedArr = newArr.reduce( // make multiple arrays into a single array
  	( acc, cur ) => acc.concat(cur),
  	[]
  );
  let uniqArr = [];
  flattenedArr.forEach(function(el){ 
    if (uniqArr.includes(el) === false){
      uniqArr.push(el);
    }
  });
  return uniqArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);