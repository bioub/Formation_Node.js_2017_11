module.exports = (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: req.msg || 'Not Found',
  });
};
