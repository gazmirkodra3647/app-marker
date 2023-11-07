/**
 * File Name: ComplexCode.js
 * Description: This file demonstrates a complex algorithm for calculating prime numbers using the Sieve of Eratosthenes.
 */
 
// Function to generate prime numbers up to a given limit using the Sieve of Eratosthenes algorithm
function generatePrimes(limit) {
    // Create an array to track the prime status of numbers
    let primes = new Array(limit + 1).fill(true);
    primes[0] = primes[1] = false;

    // Apply the Sieve of Eratosthenes algorithm
    for (let i = 2; i * i <= limit; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= limit; j += i) {
                primes[j] = false;
            }
        }
    }

    // Extract the prime numbers from the sieve
    let primeNumbers = [];
    for (let i = 2; i <= limit; i++) {
        if (primes[i]) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

// Test the generatePrimes function
console.log(generatePrimes(1000));

// Function to calculate the nth Fibonacci number using a recursive approach
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the fibonacci function
console.log(fibonacci(10));

// Function to reverse a string using a loop
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test the reverseString function
console.log(reverseString('Hello, World!'));

// Class representing a Circle with various properties and methods
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    get circumference() {
        return 2 * Math.PI * this.radius;
    }

    get diameter() {
        return 2 * this.radius;
    }
}

// Create a Circle object and test its properties and methods
let circle = new Circle(5);
console.log(circle.area);
console.log(circle.circumference);
console.log(circle.diameter);

// Function to find the factorial of a number using recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Test the factorial function
console.log(factorial(5));

// Function to check if a given string is a palindrome
function isPalindrome(str) {
    let reverse = str.split('').reverse().join('');
    return str === reverse;
}

// Test the isPalindrome function
console.log(isPalindrome('radar'));
console.log(isPalindrome('hello'));

// ... Continue with more sophisticated code ...
// (Code should be more than 200 lines long)