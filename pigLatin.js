// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  var newStr;
  var vowels = 'aeiou';
  var vowelLocation = str.match(/[aeiou]{1,}/g) || 'N/A';
  var firstVowelIndex = str.indexOf(vowelLocation[0]);
  var firstPart = str.slice(0, firstVowelIndex);
  var secondPart = str.slice(firstVowelIndex);

  //if the first letter is a vowel just add 'way' at the end
  if (vowels.indexOf(str[0]) > -1) {
    newStr = str + 'way';
  } else if (firstVowelIndex > -1) {
    newStr = secondPart + firstPart + 'ay';
  } else {
    newStr = str + 'ay';
  }
  return newStr;
}

console.log(translatePigLatin("consonant"));//=> onsonatcay
console.log(translatePigLatin("california"))// should return "aliforniacay".
console.log(translatePigLatin("paragraphs"))// should return "aragraphspay".
console.log(translatePigLatin("glove"))// should return "oveglay".
console.log(translatePigLatin("algorithm"))// should return "algorithmway".
console.log(translatePigLatin("eight"))// should return "eightway".
console.log(translatePigLatin("he"))// should return "eightway".
console.log(translatePigLatin("tht"))// should return "eightway".
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.