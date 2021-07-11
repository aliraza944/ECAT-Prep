import React, { useState } from "react";
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
import { useFetch } from "../../Hooks/useFetch";
const Paractice = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [questionsCounter, setQuestionsCounter] = useState(0);
  const [answer, setAnswer] = useState([]);
  const location = useLocation();
  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const { chapter, part } = queryString.parse(location.search);
  const { subject } = useParams();
  const { loading, response } = useFetch(
    `http://localhost:5000/postquestions?subject=${subject}&chapter=${chapter}&part=${part}`
  );
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
    if (questionsCounter === response.length - 1) {
      setModalOpen(true);
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

  const submitAnswers = async () => {
    if (modalOpen) {
      try {
        await axios.post(
          `/postquestions/answers?subject=${subject}&chapter=${chapter}&part=${part}`,
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
        {loading && (
          <CircularProgress className="spinner" size="2rem" color="primary" />
        )}
      </div>

      {response && response.error && (
        <div className={classes.noQuestions}>
          <h2 className={classes.qeustionTitle}>{response.error}</h2>
        </div>
      )}

      {response && !response.error ? (
        <div className={classes.paracticeContent}>
          <Paper className={classes.paper} elevation={0}>
            {showAnswer && (
              <div>
                <h1 className="sectionText">
                  Answer: {response[questionsCounter].answer}
                </h1>
              </div>
            )}
            <div className={classes.paperContent}>
              <p className={classes.qustionsAmount}>
                Question {questionsCounter + 1} of {response.length}
              </p>
              <h2 className={classes.qeustionTitle}>
                {response[questionsCounter].questionstatement}?
              </h2>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="question"
                  name="paraticeQuestion"
                  value={value}
                  onChange={handleChange}
                  style={{ textTransform: "capitalize" }}
                >
                  <FormControlLabel
                    value={response[questionsCounter].option1}
                    control={<Radio />}
                    label={response[questionsCounter].option1}
                  />
                  <FormControlLabel
                    value={response[questionsCounter].option2}
                    control={<Radio />}
                    label={response[questionsCounter].option2}
                  />
                  <FormControlLabel
                    value={response[questionsCounter].option3}
                    control={<Radio />}
                    label={response[questionsCounter].option3}
                  />
                  <FormControlLabel
                    value={response[questionsCounter].option4}
                    control={<Radio />}
                    label={response[questionsCounter].option4}
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
