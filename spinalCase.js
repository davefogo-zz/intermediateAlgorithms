/*
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
  'Teletubies say Eh-oh' => 'teletubies-say-eh-oh'
  //check string for non letter chars -> - _ ' ' and replace them with '-' using match
    //Teletubies-say-Eh-oh -> lowercase -> teletubies-say-eh-oh
    //check for case changes
      //at change add '-' using match
*/

function spinalCase(str) {
  var newArr = [];
  var startArr = str.split('');

  startArr.forEach(function(char, i ) {
     if (char === char.toUpperCase() && i > 0){
      newArr.push('-' + char);
    } else {
      newArr.push(char);
    }
  })

  return newArr.join('').toLowerCase().match(/([a-z]{1,})/g).join('-');
}

console.log(spinalCase('This Is Spinal Tap'));
//=> "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap"));
//=> "this-is-spinal-tap". edge
console.log(spinalCase("The_Andy_Griffith_Show"));
//=> "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh"));
//=> "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things"));
//=> "all-the-small-things". edge
