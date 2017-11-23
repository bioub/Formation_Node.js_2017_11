const express = require('express');

const app = express();

const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123,
}, {
  prenom: 'Eric',
  nom: 'Martin',
  id: 456,
}];

// Liste des contacts
app.get('/api/contacts', (req, res, next) => {
  res.json(contacts);
});

// Détail d'un contact
app.get('/api/contacts/:contactId', (req, res, next) => {
  const id = Number(req.params.contactId); // string

  if (Number.isNaN(id)) {
    res.statusCode = 400;
    return res.json({
      msg: 'id must be an number'
    });
  }

  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    res.statusCode = 404;
    return res.json({
      msg: 'contact not found'
    });
  }

  res.json(contact);
});

// Supprimer un contact
// DELETE /api/contacts/123 (pour supprimer le 123)
app.delete('/api/contacts/:contactId', (req, res, next) => {
  const id = Number(req.params.contactId); // string

  if (Number.isNaN(id)) {
    res.statusCode = 400;
    return res.json({
      msg: 'id must be an number'
    });
  }

  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    res.statusCode = 404;
    return res.json({
      msg: 'contact not found'
    });
  }

  const i = contacts.indexOf(contact);
  contacts.splice(i, 1);

  res.json(contact);
});

app.listen(8080, () => {
  console.log('Serveur http://localhost:8080/')
});
