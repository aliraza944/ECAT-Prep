import React, { useState, useEffect } from "react";
import ParacticeNav from "./ParacticeNav";
import { Paper, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "./Styles";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "@material-ui/core/Modal";
import { useHistory } from "react-router-dom";
const Paractice = () => {
  const history = useHistory();
  const [questions, setQuestions] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [questionsCounter, setQuestionsCounter] = useState(0);
  const [answer, setAnswer] = useState([]);
  const location = useLocation();
  const [spinner, setSpinner] = useState(false);
  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const { chapter, part } = queryString.parse(location.search);
  const { subject } = useParams();

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setModalOpen(false);
  };
  const handleExploreSections = () => {
    history.goBack();
    submitAnswers();
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const nextQuestion = (e) => {
    e.preventDefault();
    if (questionsCounter == questions.length - 1) {
      setModalOpen(true);
      // setQuestionsCounter(0);
      console.log(answer);
    } else {
      setQuestionsCounter(questionsCounter + 1);
    }
  };

  const previousQuestion = (e) => {
    e.preventDefault();
    if (questionsCounter === 0) {
      setQuestionsCounter(0);
    } else {
      setQuestionsCounter(questionsCounter - 1);
    }
  };
  const getQuestions = async () => {
    setSpinner(true);

    try {
      const res = await axios.get(
        `http://localhost:5000/postquestions?subject=${subject}&chapter=${chapter}&part=${part}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log(res);
      setQuestions(res.data);
      console.log(questions);
      if (res) {
        setSpinner(false);

        // console.log(res);
      }
    } catch (error) {
      if (error) throw error;
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);

  const submitAnswers = async () => {
    if (modalOpen) {
      try {
        const res = await axios.post(
          `http://localhost:5000/postquestions/answers?subject=${subject}&chapter=${chapter}&part=${part}`,
          {
            answer,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        if (res) {
          console.log(res);
        }
      } catch (error) {
        if (error) throw error;
      }
    }
    return;
  };
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    const newVlaue = e.target.value;
    const newArray = [...answer];
    newArray.splice(questionsCounter, 1, newVlaue);
    setAnswer(newArray);
  };
  const classes = useStyles();
  return (
    <div>
      <ParacticeNav />
      <div className="spinner">
        {spinner && (
          <CircularProgress className="spinner" size="2rem" color="primary" />
        )}
      </div>
      {questions ? (
        <div className={classes.paracticeContent}>
          <Paper className={classes.paper} elevation={0}>
            {showAnswer && (
              <div>
                <h1 className="sectionText">
                  Answer: {questions[questionsCounter].answer}
                </h1>
              </div>
            )}
            <div className={classes.paperContent}>
              <p className={classes.qustionsAmount}>
                Question {questionsCounter + 1} of {questions.length}
              </p>
              <h2 className={classes.qeustionTitle}>
                {questions[questionsCounter].questionstatement}
              </h2>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="question"
                  name="paraticeQuestion"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={questions[questionsCounter].option1}
                    control={<Radio />}
                    label={questions[questionsCounter].option1}
                  />
                  <FormControlLabel
                    value={questions[questionsCounter].option2}
                    control={<Radio />}
                    label={questions[questionsCounter].option2}
                  />
                  <FormControlLabel
                    value={questions[questionsCounter].option3}
                    control={<Radio />}
                    label={questions[questionsCounter].option3}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Paper>
          <div className={classes.questionBtn}>
            <Button
              style={{ background: "#e83030" }}
              onClick={previousQuestion}
            >
              Previous
            </Button>
            <Button style={{ background: "#81dd1c" }} onClick={nextQuestion}>
              Next
            </Button>
          </div>
        </div>
      ) : null}
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <Paper className={classes.modalPaper}>
          <h1>Congradulations</h1>
          <p className={classes.modalText}>
            You have completed this section of questions for explore new
            sections please go back
          </p>
          <div className={classes.modalBtn}>
            <Button className="roundBtn" onClick={handleShowAnswer}>
              View Answers
            </Button>
            <Button className="roundBtn" onClick={handleExploreSections}>
              Explore sections
            </Button>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default Paractice;
