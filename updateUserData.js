const User = require("./models/User");
const physics = require("./models/Physics");
const chemistry = require("./models/Chemistry");
const math = require("./models/Math");
const biology = require("./models/Biology");
const upadateUserData = async (id, subject, chapter, part, answered) => {
  let correctAnswers = 0;
  switch (subject) {
    case "physics":
      try {
        questions = await physics.find(
          { chapter: chapter, chapterPart: part },
          {
            questionstatement: 0,
            option1: 0,
            option2: 0,
            option3: 0,
            chapter: 0,
            chapterPart: 0,
          }
        );
        answered.map((ans, index) => {
          if (
            answered[index].toString().trim() ===
            questions[index].answer.toString().trim()
          ) {
            correctAnswers = correctAnswers + 1;
          }
        });

        console.log(correctAnswers);

        const myuser = await User.findOne({
          _id: id,
          "physics.chapter": chapter,
          "physics.chapterPart": part,
        });

        if (!myuser) {
          await User.updateOne(
            { _id: id },
            {
              $push: {
                physics: {
                  $each: [
                    {
                      chapter,
                      chapterPart: part,
                      totalQuestion: questions.length,
                      isAnswered: answered.length,
                      isCorrect: correctAnswers,
                    },
                  ],
                },
              },
            }
          );
        } else {
          await User.updateOne(
            {
              _id: id,
              "physics.chapter": chapter,
              "physics.chapterPart": part,
            },
            {
              $set: {
                "physics.$.chapter": chapter,
                "physics.$.chapterPart": part,
                "physics.$.totalQuestion": questions.length,
                "physics.$.isAnswered": answered.length,
                "physics.$.isCorrect": correctAnswers,
              },
            }
          );
          console.log("physics updated");
        }
      } catch (error) {
        if (error) throw error;
      }
      break;
    case "chemistry":
      try {
        questions = await chemistry.find(
          { chapter: chapter, chapterPart: part },
          {
            questionstatement: 0,
            option1: 0,
            option2: 0,
            option3: 0,
            chapter: 0,
            chapterPart: 0,
          }
        );
        answered.map((ans, index) => {
          if (
            answered[index].toString().trim() ===
            questions[index].answer.toString().trim()
          ) {
            correctAnswers = correctAnswers + 1;
          }
        });

        console.log(correctAnswers);

        const myuser = await User.findOne({
          _id: id,
          "chemistry.chapter": chapter,
          "chemistry.chapterPart": part,
        });

        if (!myuser) {
          await User.updateOne(
            { _id: id },
            {
              $push: {
                chemistry: {
                  $each: [
                    {
                      chapter,
                      chapterPart: part,
                      totalQuestion: questions.length,
                      isAnswered: answered.length,
                      isCorrect: correctAnswers,
                    },
                  ],
                },
              },
            }
          );
        } else {
          await User.updateOne(
            {
              _id: id,
              "chemistry.chapter": chapter,
              "chemistry.chapterPart": part,
            },
            {
              $set: {
                "chemistry.$.chapter": chapter,
                "chemistry.$.chapterPart": part,
                "chemistry.$.totalQuestion": questions.length,
                "chemistry.$.isAnswered": answered.length,
                "chemistry.$.isCorrect": correctAnswers,
              },
            }
          );
          console.log("chemistry updated");
        }
      } catch (error) {
        if (error) throw error;
      }
      break;
    case "math":
      try {
        questions = await math.find(
          { chapter: chapter, chapterPart: part },
          {
            questionstatement: 0,
            option1: 0,
            option2: 0,
            option3: 0,
            chapter: 0,
            chapterPart: 0,
          }
        );
        answered.map((ans, index) => {
          if (
            answered[index].toString().trim() ===
            questions[index].answer.toString().trim()
          ) {
            correctAnswers = correctAnswers + 1;
          }
        });

        console.log(correctAnswers);

        const myuser = await User.findOne({
          _id: id,
          "math.chapter": chapter,
          "math.chapterPart": part,
        });

        if (!myuser) {
          await User.updateOne(
            { _id: id },
            {
              $push: {
                math: {
                  $each: [
                    {
                      chapter,
                      chapterPart: part,
                      totalQuestion: questions.length,
                      isAnswered: answered.length,
                      isCorrect: correctAnswers,
                    },
                  ],
                },
              },
            }
          );
        } else {
          await User.updateOne(
            {
              _id: id,
              "math.chapter": chapter,
              "math.chapterPart": part,
            },
            {
              $set: {
                "math.$.chapter": chapter,
                "math.$.chapterPart": part,
                "math.$.totalQuestion": questions.length,
                "math.$.isAnswered": answered.length,
                "math.$.isCorrect": correctAnswers,
              },
            }
          );
          console.log("math updated");
        }
      } catch (error) {
        if (error) throw error;
      }
      break;
    case "biology":
      try {
        questions = await biology.find(
          { chapter: chapter, chapterPart: part },
          {
            questionstatement: 0,
            option1: 0,
            option2: 0,
            option3: 0,
            chapter: 0,
            chapterPart: 0,
          }
        );
        answered.map((ans, index) => {
          if (
            answered[index].toString().trim() ===
            questions[index].answer.toString().trim()
          ) {
            correctAnswers = correctAnswers + 1;
          }
        });

        console.log(correctAnswers);

        const myuser = await User.findOne({
          _id: id,
          "biology.chapter": chapter,
          "biology.chapterPart": part,
        });

        if (!myuser) {
          await User.updateOne(
            { _id: id },
            {
              $push: {
                biology: {
                  $each: [
                    {
                      chapter,
                      chapterPart: part,
                      totalQuestion: questions.length,
                      isAnswered: answered.length,
                      isCorrect: correctAnswers,
                    },
                  ],
                },
              },
            }
          );
        } else {
          await User.updateOne(
            {
              _id: id,
              "biology.chapter": chapter,
              "biology.chapterPart": part,
            },
            {
              $set: {
                "biology.$.chapter": chapter,
                "biology.$.chapterPart": part,
                "biology.$.totalQuestion": questions.length,
                "biology.$.isAnswered": answered.length,
                "biology.$.isCorrect": correctAnswers,
              },
            }
          );
          console.log("biology updated");
        }
      } catch (error) {
        if (error) throw error;
      }
      break;
    default:
      break;
  }
};

module.exports = upadateUserData;
