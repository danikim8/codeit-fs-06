function logging(req, res, next) {
  const log = `[${Date.now()}] ${req.method}-${req.url}`;
  console.log(log);

  next();
}

module.exports = logging;
