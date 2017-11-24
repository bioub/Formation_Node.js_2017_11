const mongoose = require('mongoose');
const Contact = mongoose.model('contacts', {
  prenom: {
    type: String,
    required: [true, 'Le prénom est obligatoire'],
  },
  nom: String,
});


exports.getList = () => Contact.find();
exports.getById = (id) => Contact.findById(id);
exports.removeById = (id) => Contact.findByIdAndRemove(id);
exports.update = (contact) => Contact.findByIdAndUpdate(contact.id, contact);
exports.create = (contact) => Contact.create(contact);
