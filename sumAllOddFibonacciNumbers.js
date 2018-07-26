// sumAllOddFibonacciNumbers.js

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
//i:num
//o:sum of odd fibos
//s: construct fib array
//filter even out
//reduce

function fib(num) {
  var fibs = [1, 1];

  if (num < 1) {
    return 0;
  } else if (num === 1) {
    return [1];
  }

  for (var i = 2; i <= num; i++) {
    var next = fibs[i - 1] + fibs[i - 2];
    if (next > num) {
      return fibs;
    }

    fibs.push(next);
  }
}

function sumFibs(num) {
  var fibs = fib(num);

  return fibs.filter(function(n) {
    return n % 2 !== 0;
  }).reduce(function(sum, cv) {
    return sum + cv;
  })
}

console.log(sumFibs(4));// 1 1 3 => 5
console.log(sumFibs(1));// should return a number.
console.log(sumFibs(1000));// should return 1785.
console.log(sumFibs(4000000));// should return 4613732.
console.log(sumFibs(4));// should return 5.
console.log(sumFibs(75024));// should return 60696.
console.log(sumFibs(75025));// should return 135721.










