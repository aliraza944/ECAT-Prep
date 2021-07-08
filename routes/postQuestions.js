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
  let questions;
  switch (values.subject) {
    case "physics":
      questions = new physics({
        questionstatement: values.statement,
        option1: values.option1,
        option2: values.option2,
        option3: values.option3,
        option4: values.option4,
        answer: values.answer,
        chapter: values.chapter,
        chapterPart: values.part,
      });

      break;
    case "chemistry":
      questions = new chemistry({
        questionstatement: values.statement,
        option1: values.option1,
        option2: values.option2,
        option3: values.option3,
        option4: values.option4,
        answer: values.answer,
        chapter: values.chapter,
        chapterPart: values.part,
      });

      break;
    case "math":
      questions = new math({
        questionstatement: values.statement,
        option1: values.option1,
        option2: values.option2,
        option3: values.option3,
        option4: values.option4,
        answer: values.answer,
        chapter: values.chapter,
        chapterPart: values.part,
      });

      break;
    case "biology":
      questions = new biology({
        questionstatement: values.statement,
        option1: values.option1,
        option2: values.option2,
        option3: values.option3,
        option4: values.option4,
        answer: values.answer,
        chapter: values.chapter,
        chapterPart: values.part,
      });

      break;
    default:
      break;
  }

  try {
    await questions.save();
    res.send("question added sucessfully");
  } catch (error) {
    console.log(error);
  }

  res.end();
});
router.get("/", async (req, res) => {
  const { subject, chapter, part } = req.query;
  let questions;

  switch (subject) {
    case "physics":
      questions = await physics.find(
        { chapter: chapter, chapterPart: part },
        { chapter: 0, chapterPart: 0 }
      );
      break;
    case "chemistry":
      questions = await chemistry.find(
        { chapter: chapter, chapterPart: part },
        { chapter: 0, chapterPart: 0 }
      );
      break;
    case "math":
      questions = await math.find(
        { chapter: chapter, chapterPart: part },
        { chapter: 0, chapterPart: 0 }
      );
      break;
    case "biology":
      questions = await biology.find(
        { chapter: chapter, chapterPart: part },
        { chapter: 0, chapterPart: 0 }
      );
      break;
    default:
      questions = await physics.find(
        { chapter: "ch12", chapterPart: "parta" },
        { chapter: 0, chapterPart: 0 }
      );
      break;
  }
  res.json(questions);
  res.end();
});

router.post("/answers", userVerify, async (req, res) => {
  const { subject, chapter, part } = req.query;
  const { answer } = req.body;
  await updateUserData(req.user._id, subject, chapter, part, answer);
  res.send("progress updated");
  res.end();
});

module.exports = router;
