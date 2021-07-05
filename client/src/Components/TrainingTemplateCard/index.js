import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "500px",
    margin: "20px 0 20px 0",
  },
  MuiCardContent: {
    root: {
      padding: "0",
    },
  },
  cardTitle: {
    width: "100%",
    backgroundColor: "#ededed",
    color: "#3e3e3e",
    padding: "12px 0 12px 30px",
    fontSize: "1.2em",
    letterSpacing: "0.05em",
  },
}));

function getSteps() {
  return ["Part A", "Part B", "Part C"];
}
function getParts() {
  return ["parta", "partb", "partc"];
}

export default function TrainingTemplateCard(props) {
  const classes = useStyles();
  const steps = getSteps();
  const parts = getParts();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent style={{ padding: "0" }}>
        <div className={classes.cardTitle}>
          <h3>{props.cardTitle}</h3>
        </div>

        <Stepper activeStep={-1} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>
                  <Link
                    to={`/paractice/${props.subject}?chapter=${props.chapter}&part=${parts[index]}`}
                    className="link"
                    style={{ color: "inherit" }}
                  >
                    {label}
                  </Link>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </CardContent>
    </Card>
  );
}
