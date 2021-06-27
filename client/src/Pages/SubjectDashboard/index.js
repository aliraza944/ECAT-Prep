import React from "react";
import Navigation from "../../Components/Navigation";
import DemoAlert from "../../Components/demoAlert";
import { useParams, useHistory } from "react-router";
import SubjectDashBoardHeader from "../../Components/SubjectDashBoardHeader";
import { makeStyles } from "@material-ui/core/styles";
import SectionIntro from "../../Components/SectionIntro";
import { subjectDescription } from "./subjectDescription";
const mySubjects = ["physics", "chemistry", "math", "biology"];
const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#ededed",
    },
  },
  subjectDashBoardContent: {
    padding: "0 0 0 0em",
  },
}));
const SubjectDashBoard = () => {
  const classes = useStyles();
  const { subject } = useParams();
  const history = useHistory();
  if (!mySubjects.includes(subject)) {
    history.push("/");
  }
  return (
    <div>
      <Navigation demo />
      <DemoAlert />
      <div className={classes.subjectDashBoardContent}>
        <SubjectDashBoardHeader subject={subject} />
        <SectionIntro
          title={`welcome to ${subject} hub`}
          intro={subjectDescription[`${subject}`]}
        />
        <h1>the subject is {subject}</h1>
      </div>
    </div>
  );
};

export default SubjectDashBoard;
