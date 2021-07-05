const express = require("express");
const router = express.Router();
const adminVerify = require("../middleware/AdminVerify");
const physics = require("../models/Physics");
const chemistry = require("../models/Chemistry");
const math = require("../models/Math");
const biology = require("../models/Biology");
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

module.exports = router;
