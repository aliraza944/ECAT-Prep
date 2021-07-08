const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    req.user = "demo";
    next();
  } else {
    try {
      const verify = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verify;
      next();
    } catch (err) {
      res.status(400).send("invalid token");
    }
  }
};
