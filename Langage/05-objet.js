// 1 - Objets existants
// Du langage
console.log(Math.random());
console.log(typeof Math); // object

// De Node.js
console.log(typeof process); // object

// Du Navigateur
console.log(typeof document); // undefined (dans Node)

// Dans Node + Navigateur
console.log(typeof console); // object

// 2 - Objets extensibles
console.log(Math.sum); // undefined
Math.sum = (a, b) => a + b; // Mauvaise pratique d'étendre les API standard
console.log(Math.sum(1, 2)); // 3

delete Math.sum;
console.log(Math.sum); // undefined

// 3 - Accéder au contenu
console.log(Math.PI); // 3.141592653589793
console['log'](Math['PI']); // 3.141592653589793

const prop = 'PI';
console['log'](Math[prop]); // 3.141592653589793

// 4 - Créer un objet directement (object literal)
const coords2d1 = {
  x: 10,
  y: 20,
};

const coords2d2 = {
  x: 10,
  y: 20,
};

const MyMath = {
  random: function() {},
};

// 5 - Boucler sur les clés d'un objet
for (let key in coords2d) {
  if (coords2d.hasOwnProperty(key)) {
    console.log('Clé : ' + key);
    console.log('Valeur : ' + coords2d[key]);
  }
}

// 6 - Si l'objet contient des méthodes et est instancié plusieurs
// utiliser les fonctions constructeurs

// Ici fabrique
const contactFactory = (prenom) => ({
  prenom: prenom,
  hello: function() {
    return 'Bonjour je m\'appelle ' + this.prenom;
  },
});

const c1 = contactFactory('Bob');
const c2 = contactFactory('Paul');

console.log(c1.prenom); // Bob
console.log(c2.hello()); // Bonjour je m'appelle Paul

const c3 = c1; // Passage par référence
c3.prenom = 'Eric';
console.log(c1.hello()); // Bonjour je m'appelle Eric

console.log(c1.hello === c2.hello); // false

// Ici fonction constructeur
const Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this._prenom;
};

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain._prenom);
console.log(romain.hello());
console.log(romain.hasOwnProperty('hello')); // false
console.log(romain.hasOwnProperty('_prenom')); // true
console.log(romain.nexistePas); // undefined

const eric = new Contact('Eric');

console.log(romain.hello === eric.hello); // true
