const User = require("../models/user");

const registerUser = (req, res) => {
  User.create(req.body);
  res.send("created");
};

const loginUser = (req, res) => {
  res.send("login");
};

module.exports = { registerUser, loginUser };
