// binaryAgents.js

// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.
//i:string of binary code// ones and zeros
//o:string
//s:
//from 1 byte binary to decimal parseInt()
// decimal to ascii String.fromCharCode()
//start new string
//split binary on space
  //iterate binary array
    //for each
      //parseInt binary to decimal
      //fromCharCode decimal to char
      // add to string
//return string

function binaryAgent(str) {
  var binaries = str.split(' ');

  return binaries.map(function(binary) {
    var decimal = parseInt(binary, 2);
    var char = String.fromCharCode(decimal);

    return char;
  }).join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));// should return "Aren't bonfires fun!?"
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));// should return "I love FreeCodeCamp!"











