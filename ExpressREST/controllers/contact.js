var contactService = require('../models/contact');

exports.list = async (req, res, next) => {
  try {
    const contacts = await contactService.getList();
    res.json(contacts);
  }
  catch (err) {
    next(err);
  }
};

exports.show = async (req, res, next) => {
  try {
    const contact = await contactService.getById(req.params.id);

    if (!contact) {
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const contact = await contactService.removeById(req.params.id);

    if (!contact) {
      req.msg = 'Contact not found';
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};

exports.add = async (req, res, next) => {
  try {
    const contact =await contactService.create(req.body);

    res.statusCode = 201;
    res.json(contact);
  }
  catch (err) {
    res.statusCode = 400;
    next(err);
  }
};
