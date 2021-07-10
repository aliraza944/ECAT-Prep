const express = require("express");
const router = express.Router();
const adminVerify = require("../middleware/AdminVerify");
const physics = require("../models/Physics");
const chemistry = require("../models/Chemistry");
const math = require("../models/Math");
const biology = require("../models/Biology");
const userVerify = require("../middleware/UserVerification");
const updateUserData = require("../updateUserData");
router.post("/", adminVerify, async (req, res, next) => {
  const { values } = req.body;
  const { subject } = values;
  let questions;
  let sub = eval(subject);
  questions = new sub({
    questionstatement: values.statement,
    option1: values.option1,
    option2: values.option2,
    option3: values.option3,
    option4: values.option4,
    answer: values.answer,
    chapter: values.chapter,
    chapterPart: values.part,
  });

  try {
    await questions.save();
    res.send("question added sucessfully");
  } catch (error) {
    console.log(error);
  }

  res.end();
});
router.get("/", userVerify, async (req, res) => {
  const { subject, chapter, part } = req.query;
  let questions;
  if (req.user === "demo") {
    questions = await eval(subject)
      .find(
        { chapter: "ch12", chapterPart: "parta" },
        { chapter: 0, chapterPart: 0 }
      )
      .limit(4);
    res.json(questions);
  } else {
    questions = await eval(subject).find(
      { chapter: chapter, chapterPart: part },
      { chapter: 0, chapterPart: 0 }
    );
    questions.length > 0
      ? res.json(questions)
      : res.send({
          error:
            "No questions for this section added please try some other time",
        });
  }

  res.end();
});

router.post("/answers", userVerify, async (req, res) => {
  const { subject, chapter, part } = req.query;
  const { answer } = req.body;
  if (req.user === "demo") {
    res.send("progress updated");
  } else {
    await updateUserData(req.user._id, subject, chapter, part, answer);
    res.send("progress updated");
  }
  res.end();
});

module.exports = router;
