import React from "react";
import Navigation from "../../Components/Navigation";
import DemoAlert from "../../Components/demoAlert";
import { useParams, useHistory } from "react-router";
const mySubjects = ["physics", "chemistry", "math", "biology"];
const SubjectDashBoard = () => {
  const { subject } = useParams();
  const history = useHistory();
  if (!mySubjects.includes(subject)) {
    history.push("/");
  }
  return (
    <div>
      <Navigation demo />
      <DemoAlert />
      <h1>the subject is {subject}</h1>
    </div>
  );
};

export default SubjectDashBoard;
