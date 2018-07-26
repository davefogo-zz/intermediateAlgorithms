// // Intermediate Algorithm Scripting: Wherefore art thou
// // Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// // For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.




// var inputCollection = [
//   { first: "Romeo", last: "Montague" },
//   { first: "Mercutio", last: null },
//   {first: "Tybalt", last: "Capulet" }
// ]
// var inputSource = { last: "Capulet"};

// //expected output ==> [{first: "Tybalt", last: "Capulet"}];

// //i: an array of objects
// //o: an array of objects
// //s:
//   //init new arr
//   //iterate arr of objs
//     //for each obj
//       //compare Json strigified version
//         //if match add obj to arr
//       // else check if hasOwnProperty of source
//         // if match push into arr the obj
//   //return arr
// //ts
// /* i | newarr |           cv                       |  trans               | newarr after
//    0 |[]      | {first: "Romeo", last: "Montague"} | Romeo === Capulet n  |
//                                                    | Capulet === Caputle y| [{first: Romeo, last: "Montague"}]
// */

// function whatIsInAName(collection, source) {
//   // What's in a name?
//   var arr = [];
//   var count = 0;
//   var sourceSize = Object.keys(source).length;
//   //2
//   //[
//   //{ "apple": 1, "bat": 2 },
//   // { "apple": 1 },
//   // { "apple": 1, "bat": 2, "cookie": 2 }
//   //]

//   // { "apple": 1, "bat": 2 }
//   // Only change code below this line
//   collection.forEach(function(obj) {
//   //i {'a': 1, 'b': 2}
//   //ii {'a': 1}
//   //iii {'a':1, 'b':2, 'c': 2};
//     for (var key in obj) {
//       if (source[key] === obj[key]) {
//         //i'a': 1 === 'a' : 1 y
//         //i'b': 2 === 'b' : 2 y
//         //ii 'a:1' === 'a' : 1 y
//         //iii 'a': 1 === 'a':1 y
//         //iii 'b': 2 === 'b': 2 y
//         //iii        === 'c': 3 n
//         count++;
//         //i 0 + 1 = 1
//         //ii 0 + 1 = 1
//         //iii 0 + 1 = 1
//         //iii 1 + 1 = 2

//       }
//     }
//     if (count === sourceSize) {
//       //i 2 = 2 y
//       //ii 1 = 2 n
//       /// 2 = 2 y

//       arr.push(obj);
//       //i [].push({'a': 1, 'b': 2}) => [{'a' : 1, 'b' : 2}]
//       //iii [{'a' : 1, 'b' : 2}].push({ "apple": 1, "bat": 2, "cookie": 2 }) => [{'a' : 1, 'b' : 2}, { "apple": 1, "bat": 2, "cookie": 2 }]
//     }
//       count = 0;
//   })

//   // Only change code above this line
//   return arr;
// }

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
// // ==> [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))
// // ==> [{ "apple": 1, "bat": 2, "cookie": 2 }]

/*5
Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
//for the ones that are split on something
// split on spaces
  // iterate array to make each word lowercase
    //join with a '-'
