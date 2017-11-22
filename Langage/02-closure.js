function externe(msg) {
  // Portée de closure (sauvegardée)
  // 2 portées imbriquées (fonctions)
  // fonction interne soit appelée en dehors

  function interne() {
    console.log(msg);
  }

  return interne;
}

const helloFct1 = externe('Hello 1');
const helloFct2 = externe('Hello 2');
const helloFct3 = externe('Hello 3');
// externe ... helloFct
// module
helloFct1();
helloFct2();
helloFct3();

// Dans 1s : 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Dans 1s : 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1s : 0 1 2
for (let i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

/*
Autres exemples possibles :

function createButton(value) {

  const btn = document.createElement('button');
  btn.textContent = value;

  btn.addEventListener('click', () => {
    console.log(value); // value du btn cliqué
  });

}
*/
