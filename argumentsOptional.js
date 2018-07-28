// argumentsOptional.js

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
//i: 1, 2 or no arguments : nums
//o: a sum, or another function with one argument
//s:
  //check for validity of arguments
  //if 1 is not a num return undefined
  //check for number of argumens
  // if 2 just return the sum
  //else return a function that takes another argument and sums it
function addTogether() {
  var arg = arguments[0];
  if (arguments.length === 1) {
   if (typeof arguments[0] === 'number') {
    return function(a) {
      if (typeof a === 'number') {
        return arg + a;
      } else {
        return undefined;
      }
    }
   } else {
    return undefined;
   }
  } else if (arguments.length === 2) {
    if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
      return arguments[0] + arguments[1];
    } else {
      return undefined;
    }
  }
}

console.log(addTogether(2, 3));// should return 5.
console.log(addTogether(2)(3));// should return 5.
console.log(addTogether("http://bit.ly/IqT6zt"));// should return undefined.
console.log(addTogether(2, "3"));// should return undefined.
console.log(addTogether(2)([3]));// should return undefined.












