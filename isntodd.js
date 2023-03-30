//Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

//Examples:

/*
input: an integer (positive, negative, zero)
output: boolean
        - true if the absolute value is odd
        - false otherwise

Question:
- what is an absolute number?
  the non-negative value of x without regard to its sign.
- what is an odd number?
  an integer that is NOT divisible by 2

Rule:
- the argument is a valid integer value

Example:
2 -- div by 2 false
5 --- not div by 2 true
- 17 -- 17 not div by 2 true

Data structure
number

Algorithm
- convert the input to absolute number
- chek if the number divisible by 2
  - return true if it is NOT
  - return false otherwise

*/

// solution 1
function isOdd(num) {
  if(num < 0) {
    num = num * -1
  };

  return num % 2 === 1
};

// solution 2

function isOdd2(num) {
  return Math.abs(number) === 1
};

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

console.log(isOdd2(2)); // => false
console.log(isOdd2(5)); // => true
console.log(isOdd2(-17)); // => true
console.log(isOdd2(-8)); // => false
console.log(isOdd2(0)); // => false
console.log(isOdd2(7)); // => true
