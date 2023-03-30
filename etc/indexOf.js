//Create a file named search.js with the following code and run it in your browser or Node:
//Write a program that search a specific value in an array and log its index
let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOf = -1;

for (let index = 0; index < array.length; index++) {
  if (array[index] === 5) {
    indexOf = index;
    break;
  }
}
console.log(indexOf);