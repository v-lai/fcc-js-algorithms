function fearNotLetter(str) {
  let newStr = str;
  let letter = '';
  for (let i = newStr.charCodeAt(0); i <= newStr.charCodeAt(newStr.length - 1); i++){
	if (String.fromCharCode(i) === newStr[i-newStr.charCodeAt(0)]){ // if equal, set letter to next character that might be false
    	letter = String.fromCharCode(i+1);
    }
  }
  if (/[^a-z]/g.test(letter)){ // if no letter missing in group
	letter = undefined;
  }
  return letter;
}

fearNotLetter("abce");