const nbs = [2, 3, 4];

nbs.forEach((...args) => {
  console.log(args);
});

// Programmation fonctionnelle (ES5, IE9+)
nbs.filter(nb => nb % 2 === 0)
   .map(nb => nb * 2)
   .forEach(nb => console.log(nb));

Array.prototype.myForEach = function(cb) {
  /*
  if (typeof cb !== 'function') {
    throw new Error('cb must be a function');
  }
  */

  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
}

try {
  nbs.myForEach((nb) => {
    if (nb === 2) {
      throw new Error('nb ne doit pas etre 2');
    }
  });
}
catch (err) {
  console.log(err.message);
}

console.log('Fin');
