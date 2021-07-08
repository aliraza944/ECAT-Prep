import React from "react";
import Navigation from "../../Components/Navigation";
import DemoAlert from "../../Components/demoAlert";
import { useParams, useHistory } from "react-router";
import SubjectDashBoardHeader from "../../Components/SubjectDashBoardHeader";
import SectionIntro from "../../Components/SectionIntro";
import { subjectDescription } from "./subjectDescription";
import useStyles from "./Styles";
import { Grid, Paper } from "@material-ui/core";
import ParacticeDojoCards from "../../Components/ParacticeDojoCards";
import TrainingTemplateCard from "../../Components/TrainingTemplateCard";
import Footer from "../../Components/Footer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
const mySubjects = ["physics", "chemistry", "math", "biology"];
const chapterTitle = [
  "Chapter 1 & 2",
  "Chapter 3 & 4",
  "Chapter 5 & 6",
  "Chapter 7 & 8",
  "Chapter 9 & 10",
  "Chapter 11 & 12",
  "Chapter 13 & 14",
  "Chapter 15 & 16",
  "Chapter 17 & 18",
  "Chapter 19 & 20",
  "Chapter 21 & 22",
];
const chapters = [
  "ch12",
  "ch34",
  "ch56",
  "ch78",
  "ch910",
  "ch1112",
  "ch1314",
  "ch1516",
  "ch1718",
  "ch1920",
  "ch2122",
];
const SubjectDashBoard = () => {
  const classes = useStyles();
  const { subject } = useParams();
  const history = useHistory();
  const { loading, response } = useFetch(`http://localhost:5000/progress`);
  response && console.log(response[subject]);

  if (!mySubjects.includes(subject)) {
    history.push("/");
  }
  return (
    <div>
      <Navigation demo dash />
      <DemoAlert />
      <SubjectDashBoardHeader subject={subject} />
      <div className={classes.subjectDashBoardContent}>
        <SectionIntro
          title={`welcome to ${subject} hub`}
          intro={subjectDescription[`${subject}`]}
        />
        <Grid container spacing={2} justify="center">
          <Grid item sm={6} xs={12}>
            <Paper
              className={classes.paper}
              style={{ textAlign: "left" }}
              elevation={0}
            >
              <h2 className={classes.title} style={{ textAlign: "center" }}>
                Training Template
              </h2>
              {chapterTitle.map((title, index) => {
                return (
                  <TrainingTemplateCard
                    subject={subject}
                    cardTitle={title}
                    chapter={chapters[index]}
                  />
                );
              })}
            </Paper>{" "}
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper} elevation={0}>
              {" "}
              <h2 className={classes.title}>Paractice Dojo</h2>
              <Grid container item spacing={2} justify="center">
                {" "}
                <Grid item xs={12} lg={6}>
                  <ParacticeDojoCards
                    completed={
                      response &&
                      (response[subject].answered / 100) *
                        response[subject].total
                    }
                    total={response && response[subject].total}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ParacticeDojoCards
                    avg
                    average={response && response[subject].correct}
                  />
                </Grid>
              </Grid>
              <Link to={`/paractice/${subject}`} className="link">
                <Button className={classes.dojoBtn}>Continue Paractice</Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default SubjectDashBoard;
