function convertHTML(str) {
  // &colon;&rpar;
  let newStr = str;
  newStr = newStr.replace(/&/g, '&amp;');
  newStr = newStr.replace(/</g, '&lt;');
  newStr = newStr.replace(/>/g, '&gt;');
  newStr = newStr.replace(/\'/g, '&apos;');
  newStr = newStr.replace(/\"/g, '&quot;');
  return newStr;
}

convertHTML("Dolce & Gabbana");