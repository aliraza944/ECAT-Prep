const express = require("express");
const router = express.Router();
const userVerify = require("../middleware/UserVerification");
const User = require("../models/User");
router.get("/", userVerify, async (req, res) => {
  let physics = {
    correct: 0,
    answered: 0,
    total: 0,
  };
  let chemistry = {
    correct: 0,
    answered: 0,
    total: 0,
  };
  let math = {
    correct: 0,
    answered: 0,
    total: 0,
  };
  let biology = {
    correct: 0,
    answered: 0,
    total: 0,
  };

  if (req.user === "demo") {
    physics.correct = 8;
    physics.answered = 13;
    physics.total = 518;
    chemistry.correct = 10;
    chemistry.answered = 20;
    chemistry.total = 518;
    math.correct = 15;
    math.answered = 17;
    math.total = 518;
    biology.correct = 12;
    biology.answered = 16;
    biology.total = 518;
  } else {
    const user = await User.findOne({ _id: req.user._id });

    let che = {
      total: 0,
      answered: 0,
      correct: 0,
    };
    let phy = {
      total: 0,
      answered: 0,
      correct: 0,
    };
    let mat = {
      total: 0,
      answered: 0,
      correct: 0,
    };

    let bio = {
      total: 0,
      answered: 0,
      correct: 0,
    };
    user.chemistry.map((chem) => {
      che.total += chem.totalQuestion;
      che.answered += chem.isAnswered;
      che.correct += chem.isCorrect;
    });
    user.physics.map((hy) => {
      phy.total += hy.totalQuestion;
      phy.answered += hy.isAnswered;
      phy.correct += hy.isCorrect;
    });
    user.math.map((phy) => {
      mat.total += phy.totalQuestion;
      mat.answered += phy.isAnswered;
      mat.correct += phy.isCorrect;
    });
    user.biology.map((phy) => {
      bio.total += phy.totalQuestion;
      bio.answered += phy.isAnswered;
      bio.correct += phy.isCorrect;
    });

    physics.correct = parseInt((phy.correct / phy.total) * 100);
    physics.answered = parseInt((phy.answered / phy.total) * 100);
    physics.total = phy.total;
    chemistry.correct = parseInt((che.correct / che.total) * 100);
    chemistry.answered = parseInt((che.answered / che.total) * 100);
    chemistry.total = che.total;
    math.correct = parseInt((mat.correct / mat.total) * 100);
    math.answered = parseInt((mat.answered / mat.total) * 100);
    math.total = mat.total;
    biology.correct = parseInt((bio.correct / bio.total) * 100);
    biology.answered = parseInt((bio.answered / bio.total) * 100);
    biology.total = bio.total;
  }
  res.send({ physics, chemistry, math, biology });

  res.end();
});

module.exports = router;
