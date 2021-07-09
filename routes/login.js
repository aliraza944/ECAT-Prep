const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/User");

router.post("/", async (req, res) => {
  const { email, password } = req.body.values;

  const user = await Users.findOne({ email: email }).select("+password");
  if (!user) return res.send("wrong email");

  const validate = await bcrypt.compare(password, user.password);

  if (!validate) return res.status(400).send("wrong password");
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.cookie("token", token, { maxAge: 360000 }).send({ name: user.name });

  res.end();
});

// login status if the jwt cookie is there
router.get("/status", async (req, res) => {
  if (req.cookies.token) {
    const user = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);

    const newuser = await Users.findOne({ _id: user._id });

    res.send({ email: newuser.email, role: newuser.role });
  } else res.status(400);
});
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send({ name: "" });
  res.end();
});

// login the admin user to add new questions or delete them
const AdminEmail = "ali.raza944@hotmail.com";

router.post("/admin", async (req, res) => {
  const { email, password } = req.body.values;

  const user = await Users.findOne({ email: email }).select("+password");
  if (!user) return res.send("wrong email");
  if (!AdminEmail === user.email) {
    return res.send("you do not have permission to login here");
  }
  const validate = await bcrypt.compare(password, user.password);

  if (!validate) return res.status(400).send("wrong password");
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.cookie("admin", token).send({ name: user.name });

  res.end();
});

module.exports = router;
