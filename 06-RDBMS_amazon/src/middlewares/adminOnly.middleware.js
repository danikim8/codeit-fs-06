function adminOnly(req, res, next) {
  if (!req.isAdmin) return next(new Error("관리자 아닌데 요청함"));

  next();
}

module.exports = adminOnly;
