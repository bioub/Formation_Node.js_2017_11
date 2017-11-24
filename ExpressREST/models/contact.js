const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123,
}, {
  prenom: 'Eric',
  nom: 'Martin',
  id: 456,
}];

exports.getList = () => contacts;
exports.getById = (id) => contacts.find(c => c.id === Number(id));
exports.removeById = (id) => {
  const contact = contacts.find(c => c.id === Number(id));

    if (!contact) {
      return null;
    }

    const i = contacts.indexOf(contact);
    contacts.splice(i, 1);

    return contact;
};
exports.create = (contact) => {
  contact.id = contacts[contacts.length-1].id + 1;
  contacts.push(contact);
};
