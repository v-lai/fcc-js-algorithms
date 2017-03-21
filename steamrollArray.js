function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = arr;
  const flatten = newArr => newArr.reduce( // straight from MDN reduce() documentation
    (acc, val) => acc.concat(
        Array.isArray(val) ? flatten(val) : val
    ), []
  );
  return flatten(newArr);
}

steamrollArray([1, [2], [3, [[4]]]]);
