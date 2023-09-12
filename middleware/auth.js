module.exports.requireSignin = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(token);
  req.user = user;
  next();
};
