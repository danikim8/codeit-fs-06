function adminOnly(req, res, next) {
  if (req.headers.authorization === "admin") {
    next();
  } else {
    res.status(401).send("권한이 없습니다");
  }
}

module.exports = adminOnly;
