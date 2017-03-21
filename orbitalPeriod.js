function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
        
  let newArr = arr.map(function(el){
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + el.avgAlt), 3) / GM));
    let returnObj = {'name': el.name, 'orbitalPeriod': orbitalPeriod};
    return returnObj;
  });
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
