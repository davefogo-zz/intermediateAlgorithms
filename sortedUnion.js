// sortedUnion.js

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// flatten array
// create new array
// iterate flat array
  //for each
    //check if present
      // add if not present

  // return newArr

//helper
//init new arr
//get the arguments
  // iterate args
    //for each
      //concat
function flatten(arr) {
  var newArr = [];

  arr.forEach(function(el) {
   newArr = newArr.concat(el);
  })

  return newArr;
}

function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var flat = flatten(args);
  var newArr = [];

  flat.forEach(function(el) {
    if (newArr.indexOf(el) === -1) {
      newArr.push(el);
    }
  })

  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))//;
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))// should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]))// should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1]))// should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))// should return [1, 2, 3, 5, 4, 6, 7, 8].