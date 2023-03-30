//Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintObj = {};

flintstones.forEach((name, index) => {
 flintObj[name] = index;
})

flintObj

//Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let total = 0;
let values = Object.values(ages);
for(let index = 0; index < values.length; index++) {
  total += values[index];
}

//Pick out the minimum age from our current Munster family object:
let minAge = values[0];

for(let index = 0; index < values.length; index++) {
  let currentValue = values[index];
  if(minAge > values[index]) {
    minAge = currentValue;
  }
}

minAge

//Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";
let charFrequent = {};

let arr = statement.split('');

for (let index = 0; index < arr.length; arr++) {
  let currentChar = arr[index];
  if (currentChar === " ") continue;
  

  
  if(arr.includes(currentChar)) {
    charFrequent[currentChar] += 1;
  } else {
    charFrequent[currentChar] = 1;
  }
}

charFrequent











