var contactService = require('../models/contact');

exports.list = (req, res, next) => {
  const contacts = contactService.getList();
  res.json(contacts);
};

exports.show = (req, res, next) => {
  const contact = contactService.getById(req.params.id);

  if (!contact) {
    res.statusCode = 404;
    return res.json({
      msg: 'contact not found'
    });
  }

  res.json(contact);
};

exports.delete = (req, res, next) => {
  const contact = contactService.removeById(req.params.id);

  if (!contact) {
    res.statusCode = 404;
    return res.json({
      msg: 'contact not found'
    });
  }

  res.json(contact);
};
