const express = require("express");
const router = express.Router();

const Users = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// router to add admin user
router.get("/admin", async (req, res) => {
  const password = "123456abc";
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);

  const user = new Users({
    email: "admin@admin.com",
    password: hashpassword,
    role: "admin",
  });
  try {
    const saveUser = await user.save();
  } catch (err) {
    console.log(err);
  }
  res.json("added");
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email: email }).select("+password");
  if (!user) return res.send("wrong email");

  const validate = await bcrypt.compare(password, user.password);

  if (!validate) return res.status(400).send("wrong password");
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.cookie("token", token).send({ email: user.email, role: user.role });

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
  res.send({ email: "", role: "" });
  res.end();
});
module.exports = router;
