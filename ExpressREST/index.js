const http = require('http');
// const https = require('https');
const app = require('./app');


const port = process.env.PORT || '8080';
const hostname = 'localhost';


const server = http.createServer(app);
// const server = https.createServer({},app);

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Erreur : Le port ${port} est déjà occupé`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
