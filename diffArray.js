function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  arr1.forEach(function(el){
      if (arr2.indexOf(el) === -1){
          newArr.push(el);
      }
  });

  arr2.forEach(function(el){
      if (arr1.indexOf(el) === -1){
          newArr.push(el);
      }
  });

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // should return ["pink wool"]