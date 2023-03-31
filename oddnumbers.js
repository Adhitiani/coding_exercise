//Odd Numbers

//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

function logOdd(min, max) {
  for (let idx = min; idx <= max; idx += 2) {
    console.log(idx)
  }
}

logOdd(1, 99);