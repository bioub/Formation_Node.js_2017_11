/*
function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
*/

// Mauvaise pratique (en JS moderne pas de Tree Shaking)

// random.js
const random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  },
};


// 1 - Mettre tous les fonctions aléatoires dans un objet
// avec la syntaxe object literal (ES6 method properties)
// const entierAlea = random.getIntInclusive(0, 100);

// jeu.js
const readline = require('readline');

class Jeu {
  constructor(options = {}) {
    /*
    options = options || {};
    const min = options.min || 0;
    const max = (options.max !== undefined) ? options.max : 100;
    */
    // Créé 2 variable autreMin et autreMax qui reçoivent les props min
    // et max respectivement
    // const {min: autreMin, max: autreMax} = options;

    // Avec des valeurs par défaut
    // const {min: autreMin = 0, max: autreMax = 100} = options;

    // Avec des variables qui ont le meme nom que les props
    // const {min: min = 0, max: max = 100} = options;

    // Avec shortand prop
    const {min = 0, max = 100} = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
  }
  jouer() {
    if (this._essais.length) {
      console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
    }

    this._rl.question('Quel est le nombre entier ? ', answer => {
      const entierSaisi = parseInt(answer);

      if (isNaN(entierSaisi)) {
        // PAS DE MOT CLE throw (car callback async)
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this._essais.push(entierSaisi); // Muable
      // essais = [...essais]; // Immuable

      if (entierSaisi < this._entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné')
      this._rl.close();
    });
  }
}

// main.js
const jeu = new Jeu();
jeu.jouer();


// 2 - Créer une fonction constructeur / class Jeu
// const jeu = new Jeu();
// jeu.jouer();

// 3 - Passer un objet au constructeur qui contiendra
// les options de la classe (min et max)
// const jeu = new Jeu({
//   min: 10,
//   max: 20,
// });
// jeu.jouer();

// 4 - Prévoir des valeurs par défaut pour min et max
