import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MUIButton from "../../../Components/Button";
import detailOfQuestions from "../../../Images/detailOfQuestions.png";
import { Container } from "@material-ui/core";
import QuestionCards from "./QuestionCards";
import useStyles from "./Style";

const qustionCard = [
  {
    id: 1,
    subject: "physics",
    qty: "455",
  },
  {
    id: 2,
    subject: "Maths",
    qty: "585",
  },

  {
    id: 3,
    subject: "Chemistry",
    qty: "512",
  },

  {
    id: 4,
    subject: "Biology",
    qty: "480",
  },
];

const DetialOfQuestions = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sectionDescription}>
        <Typography className={`subtitle ${classes.sectionTitle}`} variant="h2">
          2,000+ PRACTICE QUESTIONS
        </Typography>
        <Typography
          variant="h2"
          className={classes.sectionText}
          component="subtitle1"
        >
          We've got a ton of practice questions for each of the main sections of
          the ECAT and MCAT. Our online practice interface mimics the format of
          the actual exam, so you'll get valuable experience with the
          computer-based exam, and when you've done a set of questions, you'll
          be able to see full explanations written by our team of medical
          students.
        </Typography>
        <div>
          <MUIButton text="sign up for free"></MUIButton>
        </div>
      </div>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item md={12} lg={8}>
          <Paper className={classes.paper} color="transparent">
            <div classname={classes.sectionImageContainer}>
              <img
                className={`responsiveImage ${classes.sectionImage}`}
                src={detailOfQuestions}
                alt=""
              />
            </div>
          </Paper>
        </Grid>
        <Grid item md={12} lg={4}>
          <Container style={{ height: "100%" }} className={classes.paper}>
            <div className={classes.detailButtons}>
              {qustionCard.map((question) => (
                <QuestionCards
                  key={question.id}
                  title={question.subject}
                  qty={question.qty}
                />
              ))}
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetialOfQuestions;
