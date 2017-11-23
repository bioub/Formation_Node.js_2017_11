const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.all('/', (req, res) => {
  res.send('Hello World\n');
});

app.all('/redirect', (req, res) => {
  res.redirect('http://www.google.fr/');
});

/*
const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123,
}, {
  prenom: 'Eric',
  nom: 'Martin',
  id: 456,
}];

app.get('/contacts.html', (req, res) => {

  res.send(`
  <!doctype html>
  <html>
    <head></head>
    <body>

    </body>
  </html>
  `)
});
*/

const server = http.createServer(app);

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Erreur : Le port 1234 est déjà occupé');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
