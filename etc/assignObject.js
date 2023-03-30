// write a funciton that works similar to Object.entries

let person = { name: 'Bob', age: 30, height: '6ft' };
//console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]

// input: an Object
// output: an array of a nested array. The nested array has two element:
// - the first element is the key of the Object
// - the second element is the value of the Object

// example:
// { name: 'Bob', age: 30, height: '6ft' } => [['name', 'Bob], ['age', 30], ['height', '6ft]];

//we need a variable result and assign it an empty array
//extract the keys of the object and put it in an array => ['name', 'age', 'height']
// iterate over the array of keys and in each iteration:
// - create an empty array
// - push the key on the empty array
// - push the value on the empty array
// - push the array with key and value to the result variable
// When the iteration finish return the result variable

function objToArr(obj) {
  let arrayResult = [];
  let objKeys = Object.keys(obj);
  console.log(objKeys);
  
  objKeys.forEach(key => {
    let nestedArr = [];
    nestedArr.push(key);
    nestedArr.push(obj[key]);
    arrayResult.push(nestedArr);
  })
  return arrayResult;
}

console.log(objToArr(person))

// for / in method
function objToArr2(obj) {
  let arrayResult = [];

  for (let keys in obj) {
    let nestedArr = [];
    nestedArr.push(keys, obj[keys])
    arrayResult.push(nestedArr);
  }
 return arrayResult;
}

console.log(objToArr2(person))

// map method

function objToArr3(obj) {
  let keys = Object.keys(obj);

 return keys.map(key => {
   let nestedArr = [];
    nestedArr.push(key, obj[key]);
    return nestedArr;
 }) 


}

console.log(objToArr3(person))

