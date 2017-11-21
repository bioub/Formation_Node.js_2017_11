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

// 1 - Mettre tous les fonctions aléatoires dans un objet
// avec la syntaxe object literal (ES6 method properties)
// const entierAlea = random.getIntInclusive(0, 100);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

const jouer = () => {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre entier ? ', answer => {
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      // PAS DE MOT CLE throw (car callback async)
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi); // Muable
    // essais = [...essais]; // Immuable

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné')
    rl.close();
  });
}

jouer();

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
