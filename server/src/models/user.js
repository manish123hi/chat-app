const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatScheme = new Schema({
  email: String,
  username: String,
  sendername: String,
  receivername: String,
  message: String,
  gender: {
    type: String,
    enum: ["Male", "Female", "other"],
    default: "Male",
  },
  role: {
    type: String,
    enum: ["sender", "receiver"],
    default: "sender",
  },
  password: String,
});

const User = mongoose.model("User", chatScheme);
module.exports = User;

//
