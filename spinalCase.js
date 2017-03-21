function spinalCase(str) { /* REVIEW FOR A BETTER SOLUTION? */
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let newStr = str;
  newStr = newStr.replace(/\s|_/g, '-').split(''); // spaces and underscores to "-" placeholder
  for (let i = 0; i < newStr.length; i++){ // going through to find uppercase letters
	if (newStr[i] === newStr[i].toUpperCase()){
		newStr[i] = '-' + newStr[i].toLowerCase(); // uppercase -> -UpperCase
    }
  }
  let newerStr = newStr.join('');

  if (/-+/g.test(newerStr)){ // case where there are multiple hyphens (previously a space/_/single hyphen)
	newerStr = newerStr.replace(/-+/g, '-');
  }
  if (/^-/.test(newerStr)){ // case to remove leading hyphen due to uppercase to lowercase
 	newerStr = newerStr.replace(/^-/, '');
  }
  return newerStr;
}

spinalCase('This Is Spinal Tap');

spinalCase("thisIsSpinalTap");

spinalCase("The_Andy_Griffith_Show");

spinalCase("AllThe-small Things");

spinalCase("Teletubbies say Eh-oh");