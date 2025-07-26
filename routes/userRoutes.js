const {
  registerForm,
  register,
  loginForm,
  login,
} = require("../controller/userController");
const express = require("express");
const productModel = require("../models/productModel");

const userRouter = express.Router();

userRouter.get("/", registerForm);
userRouter.post("/register", register);

userRouter.get("/loginForm", loginForm);

userRouter.post("/login", login);

userRouter.get("/dashboard", async (req, res) => {
  if (req.session.email) {
    const users = await productModel.find();
    res.render("dashboard", { email: req.session.email, users: users });
  } else {
    res.redirect("/loginForm");
  }
});

module.exports = userRouter;
