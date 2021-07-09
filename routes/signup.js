const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const Users = require("../models/User");

router.post("/", async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body.values;
  const userExists = await Users.findOne({ email: email });

  if (userExists) {
    res.send("User already exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const user = new Users({
      name: name,
      email: email,
      password: hashpassword,
    });
    try {
      await user.save();
    } catch (error) {
      res.status(400).send(error);
    }
    res.status(200).send("Sucssesfully Singup . Please Login now");
  }
  res.end();
});
module.exports = router;
