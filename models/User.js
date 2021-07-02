const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  email: {
    type: String,
    required: true,

    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
    select: false,
  },
  physics: [
    {
      chapter: {
        type: String,

        min: 4,
        max: 8,
      },
      chapterPart: {
        type: String,

        min: 4,
        max: 6,
      },
      totalQuestion: {
        type: Number,
        max: 10,
      },
      isAnswered: {
        type: Number,
        max: 10,
      },
      isCorrect: {
        type: Number,
        max: 10,
      },
    },
  ],
  chemistry: [
    {
      chapter: {
        type: String,

        min: 4,
        max: 8,
      },
      chapterPart: {
        type: String,

        min: 4,
        max: 6,
      },
      totalQuestion: {
        type: Number,
        max: 10,
      },
      isAnswered: {
        type: Number,
        max: 10,
      },
      isCorrect: {
        type: Number,
        max: 10,
      },
    },
  ],
  math: [
    {
      chapter: {
        type: String,

        min: 4,
        max: 8,
      },
      chapterPart: {
        type: String,

        min: 4,
        max: 6,
      },
      totalQuestion: {
        type: Number,
        max: 10,
      },
      isAnswered: {
        type: Number,
        max: 10,
      },
      isCorrect: {
        type: Number,
        max: 10,
      },
    },
  ],
  biology: [
    {
      chapter: {
        type: String,

        min: 4,
        max: 8,
      },
      chapterPart: {
        type: String,

        min: 4,
        max: 6,
      },
      totalQuestion: {
        type: Number,
        max: 10,
      },
      isAnswered: {
        type: Number,
        max: 10,
      },
      isCorrect: {
        type: Number,
        max: 10,
      },
    },
  ],
});
module.exports = mongoose.model("User", userSchema);
