function translatePigLatin(str) {
  let newStr = str;
  let newerStr = '';
  if (/^[aeiou]/.test(newStr)){ // if begins with a vowel
      newerStr = newStr.concat('way');
  } else { // doesn't begin with a vowel
	  let findIndex = newStr.search(/[aeiou]/); /* HARDEST PART WAS KNOWING TO USE SEARCH */
      if (findIndex !== -1){ // vowel exists in string
      	newerStr = newStr.slice(findIndex).concat(newStr.slice(0, findIndex) + 'ay');
      }
	  else { // vowel doesn't exist in string
		newerStr = newStr + 'ay';
      }
  }
  return newerStr;
}

translatePigLatin("consonant");
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.
