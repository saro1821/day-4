/*1. Do the below programs in anonymous function & IIFE

a. Print odd numbers in an array*/
const printOddNumbers = function(arr) {
    for (let num of arr) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    }
  };
  
  // Using IIFE
  (function(arr) {
    for (let num of arr) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    }
  })([1, 2, 3, 4, 5]);
 // b. Convert all the strings to title caps in a string array:
  

  // Using an anonymous function
  const titleCaseStrings = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  
  // Using IIFE
  const inputArray = ["hello", "world", "javascript"];
  const titleCasedArray = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  })(inputArray);
  console.log(titleCasedArray);
 // c. Sum of all numbers in an array:

  // Using an anonymous function
  const sumArray = function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  };
  
  // Using IIFE
  const totalSum = (function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  })([1, 2, 3, 4, 5]);
  console.log(totalSum);
 
 // d. Return all the prime numbers in an array:
  
  
  // Using an anonymous function
  const isPrime = function(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };
  
  const getPrimeNumbers = function(arr) {
    return arr.filter(num => isPrime(num));
  };
  
  // Using IIFE
  const primes = (function(arr) {
    const isPrime = function(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    };
    return arr.filter(num => isPrime(num));
  })([2, 3, 5, 7, 9, 11]);
  console.log(primes);
 // 2. Do the below programs in arrow functions.
  
// a. Print odd numbers in an array using arrow functions:


 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 arr.forEach(num => {
   if (num % 2 !== 0) {
     console.log(num);
   }
 });

