const mongoose = require("mongoose");
mongoose.pluralize(null);
const mathSchema = new mongoose.Schema({
  questionstatement: {
    type: String,
    required: true,
    min: 50,
    max: 300,
  },
  option1: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  option2: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  option3: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  answer: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  chapter: {
    type: String,
    required: true,
    min: 4,
    max: 8,
  },
  chapterPart: {
    type: String,
    required: true,
    min: 4,
    max: 8,
  },
});
module.exports = mongoose.model("math", mathSchema);
