function myReplace(str, before, after) {
  let newStr = str; 
  let newAfter = '';
  if (newStr.search(before) !== -1){ // 'before' term exists in string
      if (before[0] === before[0].toUpperCase()){ // check if uppercase
          newAfter = after[0].toUpperCase().concat(after.slice(1));
      } else {
          newAfter = after[0].toLowerCase().concat(after.slice(1));
      }
      newStr = newStr.replace(before, newAfter);
  }
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");