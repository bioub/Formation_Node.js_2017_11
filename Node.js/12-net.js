const net = require('net');

const server = net.createServer((socket) => {
  socket.pipe(process.stdout);
});

server.on('close', () => {
  console.log('close');
});

/*
server.on('connection', () => {
  console.log('connection');
});
*/

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Erreur : Le port 1234 est déjà occupé');
  }
});

/*
server.on('listening', () => {
  console.log('listening');
});
*/

server.listen(1234, () => {
  console.log('listening');
});
