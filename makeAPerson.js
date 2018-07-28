// makeAPerson.js

// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  var firstAndLastSplit = firstAndLast.split(' ');
  var first = firstAndLastSplit[0];
  var last = firstAndLastSplit[1];

  this.setFullName = function(newFirstAndLast) {
    var newFirstAndLastSplit = newFirstAndLast.split(' ');
    first = newFirstAndLastSplit[0]
    last = newFirstAndLastSplit[1]
  };
  this.setFirstName = function(firstName) {
    first = firstName;
  };
  this.setLastName = function(lastName) {
    last = lastName;
  };
  this.getFullName = function() {
    return first + ' ' + last;
  };
  this.getFirstName = function() {
    return first;
  };
  this.getLastName = function() {
    return last;
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();

console.log(Object.keys(bob).length);// should return 6.
console.log(bob instanceof Person);// should return true.
console.log(bob.firstName);// should return undefined.
console.log(bob.lastName);// should return undefined.
console.log(bob.getFirstName());// should return "Bob".
console.log(bob.getLastName());// should return "Ross".
console.log(bob.getFullName(), 'Bob Ross');// should return "Bob Ross".
bob.setFirstName("Haskell");
console.log(bob.getFullName(), 'Haskell Ross');// should return "Haskell Ross" after .
bob.setLastName("Curry");
console.log(bob.getFullName(), 'Haskell Curry');// should return "Haskell Curry" after.
bob.setFullName("Haskell Curry");
console.log(bob.getFullName(), 'Haskell Curry');// should return "Haskell Curry" after
console.log(bob.getFirstName(), 'Haskell');// should return "Haskell" after bob.setFullName("Haskell Curry").
console.log(bob.getLastName(), 'Curry');// should return "Curry" after bob.setFullName("Haskell Curry")
