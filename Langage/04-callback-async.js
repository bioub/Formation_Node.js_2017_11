setTimeout(() => {
  console.log('2s cb 1');
}, 2000);

setTimeout(() => {
  console.log('2s cb 2');
}, 2000);

setTimeout(() => {
  console.log('1s');
}, 1000);

try {
  setTimeout(() => {
    // throw new Error('Error dans 3s');
    console.log('3s');
  }, 3000);
}
catch (err) {
  console.log('Erreur');
}


console.log('Fin');

// Fin
// 1s
// 2s cb 1
// 2s cb 2
// 3s

// Boucle d'événements (côté C++ / V8)

// pile d'appel
// ^
// |
// |
// |
// |
// |                    cl     cl cl
// |st-st-st-cl ....... cb ... cb-cb
// +--------------------------------> temps
///                     1s     2s
//
// File d'attente : cb - cb - cb
