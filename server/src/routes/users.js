const { Router } = require("express");
const { registerUser, loginUser } = require("../controllers/user");
const app = Router();

app.post("/register", registerUser);

app.post("/login", loginUser);

module.exports = app;
