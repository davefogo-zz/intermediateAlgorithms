// sumAllPrimes.js

// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.
//i: num
//o: sum of all prime numbers equal or smaller than num
//s:
//get an array of primes from 2 to num
//reduce the array to a total;

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i++) {
     if (num % i === 0) {
      return false;
     }
  }

  return true;
}

function getPrimes(num) {
  var primes = [];

  for (var i = 0; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

function sumPrimes(num) {
  var primes = getPrimes(num);

  return primes.reduce(function(sum, cv) {
    return sum + cv;
  })
}

console.log(sumPrimes(10));//[]
console.log(sumPrimes(10));// should return a number.
console.log(sumPrimes(10));// should return 17.
console.log(sumPrimes(977));// should return 73156