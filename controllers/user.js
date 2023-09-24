const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports.signUp = async (req, res) => {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "User already registered!",
      });
    }
    const { firstName, lastName, password } = req.body;
    const userName = Math.random().toString();
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      userName: Math.random().toString(),
      role: "user",
    });
    const savedUser = await user.save();
    return res
      .status(201)
      .json({ message: "User created successfully ...", user: savedUser });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports.signIn = async (req, res) => {
  // console.log("bonjour");
  try {
    const { email, password } = req.body;
    // console.log(email, password);
    const user = await User.findOne({ email });
    // console.log(user);
    if (user) {
      if (user.authenticate(password)) {
        // console.log(password);
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        // console.log(token);
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
        // console.log(fullName);
      } else {
        return res.status(400).json({
          msg: "Invalid password",
        });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
