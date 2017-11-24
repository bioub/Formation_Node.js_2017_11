const express = require('express');
const bodyParser = require('body-parser');
const contactCtrl = require('../controllers/contact')
const router = express.Router();


// Liste des contacts
router.get('/',
  contactCtrl.list,
);

// Ajouter un contact
router.post('/',
  bodyParser.json(),
  contactCtrl.add,
);

// Détail d'un contact
router.get('/:id',
  contactCtrl.show,
);

// Supprimer un contact
// DELETE /api/contacts/123 (pour supprimer le 123)
router.delete('/:id',
  contactCtrl.delete,
);

module.exports = router;
