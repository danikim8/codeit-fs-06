function identify(req, res, next) {
  if (req.headers.authorization === "I'm admin") {
    req.isAdmin = true;
  }

  next();
}

module.exports = identify;
