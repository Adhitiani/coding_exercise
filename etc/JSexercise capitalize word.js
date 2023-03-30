let words = 'launch school tech & talk';

let arrayWords = words.split(' ');
console.log(arrayWords);
let upperCase = [];

for(let i = 0; i < arrayWords.length; i+=1) {
  let capital = arrayWords[i]
  
  let newCapital = capital[0].toUpperCase() + capital.slice(1); 
  console.log(newCapital)
  upperCase.push(newCapital)
}

console.log(upperCase.join(' '))
  
