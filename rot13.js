function rot13(str) { // LBH QVQ VG!
  let newArr = str.split('').map(function (el){
      if (/\w/.test(el)){
		  if (String.fromCharCode(el.charCodeAt() + 13) <= 'Z'){
          	return String.fromCharCode(el.charCodeAt() + 13);
          } else {
			return String.fromCharCode(el.charCodeAt() - 13); // 26 letter alphabet
            // rotation by 13 means opposite letters, ex. E<->R
          }
      }
      return el;
  });
  return newArr.join('');
}
// Change the inputs below to test
rot13("SERR PBQR PNZC"); // FREE CODE CAMP
// rot13("SERR CVMMN!") // should decode to FREE PIZZA!
// rot13("SERR YBIR?") // should decode to FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") 
    // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.