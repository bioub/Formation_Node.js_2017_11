var contactFactory = function (prenom) {
  return {
    prenom: prenom,
    hello: function() {
      return 'Bonjour je m\'appelle ' + this.prenom;
    },
  };
};

// En ES6
// - const
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

