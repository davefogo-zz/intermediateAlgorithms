//  missingLetters.js

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

//i: str
//o: letter missing in the alphabet range
//s: create alphabet range

//create range
//grab first and last of str
//get both indices and slice
// iterate both to see which one is missing
  //if not found return undefined
function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var firstLetterIndex = alphabet.indexOf(str[0]);
  var lastLetterIndex = alphabet.indexOf(str[str.length - 1]);
  var section = alphabet.slice(firstLetterIndex, lastLetterIndex + 1);
  var letters = section.split('');
  var missing;

  letters.forEach(function(letter) {
    if (str.indexOf(letter) === -1) {
      missing = letter;
    }
  })

  return missing;
}

fearNotLetter("abce");// d

console.log(fearNotLetter("abce"))// should return "d".
console.log(fearNotLetter("abcdefghjklmno"))// should return "i".
console.log(fearNotLetter("stvwx"))// should return "u".
console.log(fearNotLetter("bcdf"))// should return "e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))// should return undefined.