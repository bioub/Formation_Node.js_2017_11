const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
      break;
    case '/redirect':
      res.statusCode = 302;
      res.setHeader('Location', 'https://www.google.fr/');
      res.end();
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
  }

});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Erreur : Le port 1234 est déjà occupé');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
