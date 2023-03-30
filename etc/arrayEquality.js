/*arraysEqual takes two arrays and returns false when an element in one array doesn't equal the corresponding element in the other. Otherwise, it returns true. It returns false right away if the arrays have different lengths; taking care of this case first simplifies the rest of the function.*/

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  for (let index = 0; index < arr1.length; index += 1) {
    if(arr1[index] !== arr2[index]) return false;
  }
  return true;
}

arraysEqual([1, 2, 3], [1, 2, 3]);
arraysEqual([1, 2, 3], [1, 3, 3]);
arraysEqual([1, 'b', 3], [1, 'b', 3]);