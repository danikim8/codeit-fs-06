function authentication(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) return next();

    const userId = token.slice(1, -1);
    req.userId = userId;

    next();
  } catch (e) {
    next(e);
  }
}

module.exports = authentication;
