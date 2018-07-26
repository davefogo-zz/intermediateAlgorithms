// convertHTMLEntities.js

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
//replace with values stored in an object
function convertHTML(str) {
  var htmlEntities = {
    '<':'&lt;',
    '>':'&gt;',
    '&':'&amp;',
    '\"':'&quot;',
    '\'':'&apos;',
    ':':'&colon;',
    ';':'&rpar'
  }

 return str.split('').map(function(char) {
    if (htmlEntities[char]) {
      return htmlEntities[char];
    } else {
      return char;
    }
  }).join('');
}

console.log(convertHTML("Dolce & Gabbana"));//
console.log(convertHTML("Dolce & Gabbana"));// should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos"));// should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve")// should return Sixty &​gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"'));// should return Stuff in &​quot;quotation marks&​quot;.
console.log(convertHTML("Schindler's List"));// should return Schindler&​apos;s List.
console.log(convertHTML("<>"));// should return &​lt;&​gt;.
console.log(convertHTML("abc"));// should return abc.