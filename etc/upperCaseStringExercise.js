let str = 'launch school tech & talk';
let words = str.split(' ');
let upperCaseWords = [];

for( let i = 0; i < words.length; i += 1) {
  let word = words[i];
  
  upperCaseWords.push(word[0].toUpperCase() + word.slice(1));
}

console.log(upperCaseWords.join(' '));



