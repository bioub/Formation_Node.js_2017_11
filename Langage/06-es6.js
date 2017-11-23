var contactFactory = function (prenom) {
  return {
    prenom: prenom,
    hello: function() {
      return 'Bonjour je m\'appelle ' + this.prenom + ' !';
    },
  };
};

// En ES6
// - const / let
// - Arrow functions =>
// - Shortand property prenom: prenom -> prenom
// - Method property : hello: function() {} -> hello()
// - template literal / template string '' -> ``
const contactFactoryES6 = prenom => ({
  prenom,
  hello() {
    return `Bonjour je m'appelle ${this.prenom} !`;
  },
});

const c1 = contactFactoryES6('Romain');
c1.hello();

const Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this._prenom;
};

// En ES6
class ContactES6 {
  constructor(prenom) {
    this._prenom = prenom;
  }
  hello() {
    return `Bonjour je m'appelle ${this.prenom} !`;
  }
}

console.log(typeof ContactES6); // function
console.log(typeof ContactES6.prototype.hello); // function

// REST Params
// for ... of
const sum = (a, b, ...nbs) => {
  let result = a + b;
  for (const n of nbs) {
    result += n;
  }
  return result;
};

console.log(sum(1, 2, 3, 4)); // 10

// Destructurer
const coords3d = {x: 10, y: 20};
const {x: varX, y: y, z = 0} = coords3d;
console.log(varX); // 10
console.log(y); // 20
console.log(z); // 0

const [un, , trois, quatre = 4] = [1, 2, 3];
const [one, ...rest] = [1, 2, 3, 4];

// SPREAD operator
const nbs = [2, 3, 4];
const autres = [1, ...nbs, 5];
const clone = [...nbs]; // Pas récursif
// (si récursif Lodash.cloneDeep)

// ESNext REST / SPREAD sur des objets
const cloneCoords = {...coords3d};
