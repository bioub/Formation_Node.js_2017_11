const random = require('./random');
const readline = require('readline');
const chalk = require('chalk');

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
        console.log(chalk.red('Erreur : il faut saisir un nombre'));
        return this.jouer();
      }

      this._essais.push(entierSaisi); // Muable
      // essais = [...essais]; // Immuable

      if (entierSaisi < this._entierAlea) {
        console.log(chalk.yellow('Trop petit'));
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      }

      console.log(chalk.green('Gagné'));
      this._rl.close();
    });
  }
}

module.exports = Jeu;
