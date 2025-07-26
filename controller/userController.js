const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const registerForm = (req, res) => {
  try {
    res.render("register");
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashPass = await bcrypt.hash(password, 10);
    await userModel.create({ email, password: hashPass });
    res.redirect("/loginForm");
  } catch (error) {
    console.log(error);
  }
};

const loginForm = (req, res) => {
  res.render("login");
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.email = email;
    const users = await userModel.find();
    res.redirect("/dashboard");
  }
};

module.exports = { registerForm, register, login, loginForm };
