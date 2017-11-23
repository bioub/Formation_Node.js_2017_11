const { EventEmitter } = require('events');

const ee = new EventEmitter();

function createUser(prenom) {

  // TODO insert prenom in database


  ee.emit('user.created', prenom);
}

ee.on('user.created', (prenom) => {
  console.log('User created : ' + prenom)
});

ee.once('user.created', (prenom) => {
  console.log('Once, User created : ' + prenom)
});

createUser('Romain');
createUser('Jean');
