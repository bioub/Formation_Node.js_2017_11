// En vous inspirant de routes/index.js
// Créer 3 pages
// - lister des contacts
// - afficher le détail
// - supprimer (pas de DELETE)
// Pour supprimer GET /contacts/123/delete
// et rediriger vers la liste

// Pour les templates http://ejs.co/
const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123,
}, {
  prenom: 'Eric',
  nom: 'Martin',
  id: 456,
}];

var express = require('express');
var router = express.Router();

/* GET list */
router.get('/', function (req, res, next) {
  res.render('contacts/list', { contacts /* contacts: contacts */ });
});

/* GET show */
router.get('/:id', function (req, res, next) {
  const id = Number(req.params.id); // string

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

  res.render('contacts/show', { contact });
});

/* GET delete */
router.get('/:id/delete', function (req, res, next) {
  const id = Number(req.params.id); // string

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

  res.redirect('/contacts');
});

module.exports = router;
