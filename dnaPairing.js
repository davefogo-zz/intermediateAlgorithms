
// Intermediate Algorithm Scripting: DNA Pairing

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
//i: string
//o: 2d array
//s: each letter is the first letter of pair
//start empty array
//build obj to represent the pair options
//iterate string
  //for each letter look up in object the pair
    // push pair into empty array
//return array

var pairElement = function(str) {
  var dna = [];
  var pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }

  str.forEach(function(char) {
    dna.push([char, pairs[char]]);
  })

  return dna;
}

console.log(pairElement("ATCGA"))// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG"))// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA"))// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].



























