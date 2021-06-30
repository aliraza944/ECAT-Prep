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

const mySubjects = ["physics", "chemistry", "math", "biology"];

const SubjectDashBoard = () => {
  const classes = useStyles();
  const { subject } = useParams();
  const history = useHistory();
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
              <TrainingTemplateCard />
            </Paper>{" "}
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper} elevation={0}>
              {" "}
              <h2 className={classes.title}>Paractice Dojo</h2>
              <Grid container item spacing={2} justify="center">
                {" "}
                <Grid item xs={12} lg={6}>
                  <ParacticeDojoCards />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ParacticeDojoCards avg />
                </Grid>
              </Grid>
              <Button className={classes.dojoBtn}>Continue Paractice</Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default SubjectDashBoard;
