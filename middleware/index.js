const jwt = require("jsonwebtoken");
module.exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = user;
  } else {
    return res.status(400).json({ msg: "Authoriwation required" });
  }
  next();
};

module.exports.userMiddleware = (req, res, next) => {
  // console.log("Role de l'utilisateur : ", req.user.role);
  if (req.user.role !== "user") {
    return res.status(400).json({ msg: "User access denied" });
  }
  next();
};

module.exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(400).json({ msg: "Admin access denied" });
  }
  next();
};
