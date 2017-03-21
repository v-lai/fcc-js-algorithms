function palindrome(str) {
  // Good luck!
  var newStr = str.toLowerCase().split(/\W|_+/).join('');
  var reverseStr = newStr.split('').reverse().join('');
  console.log(newStr);
  console.log(reverseStr);
  return newStr === reverseStr;
}



palindrome("eye");
palindrome("A man, a plan, a canal. Panama");
palindrome("0_0 (: /-\ :) 0-0");
