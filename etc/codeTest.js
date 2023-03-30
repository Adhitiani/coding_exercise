function Parents(lastName, language) {
  this.lastName = lastName;
  this.language = language;
}

Parents.prototype.speak = function() {
  console.log('I speak ' + this.language);
}

let parents = new Parents('Smith', 'English')

console.log(parents.lastName); // Smith
parents.speak() // I speak English
console.log(Object.getOwnPropertyNames(parents)) // ['lastName', 'language']
console.log(parents instanceof Parents) // true

//subtyping
function Childs(lastName, language, name, hobby) {
  Parents.call(this, lastName, language);
  this.name = name;
  this.hobby = hobby;
}

Childs.prototype = Object.create(Parents.prototype);
Childs.prototype.constructor = Childs;
Childs.prototype.favourite = function() {
  console.log(`I like ${this.hobby}`)
}

let yamada = new Childs('Takeru', 'Japanese', 'Yamada', 'Anime');
yamada.speak() //
yamada.favourite()
console.log(yamada.lastName);
console.log(yamada instanceof Parents)
console.log(yamada.constructor === Childs)