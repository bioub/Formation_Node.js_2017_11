var contactService = require('../models/contact');

exports.list = (req, res, next) => {
  const contacts = contactService.getList();
  res.json(contacts);
};

exports.show = (req, res, next) => {
  const contact = contactService.getById(req.params.id);

  if (!contact) {
    return next();
  }

  res.json(contact);
};

exports.delete = (req, res, next) => {
  const contact = contactService.removeById(req.params.id);

  if (!contact) {
    return next();
  }

  res.json(contact);
};

exports.add = (req, res, next) => {
  const contact = req.body; // JSON.parse(body);

  contactService.create(contact);

  res.statusCode = 201;
  res.json(contact);
};
