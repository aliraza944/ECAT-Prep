import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "500px",
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
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

export default function TrainingTemplateCard() {
  const classes = useStyles();
  const steps = getSteps();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent style={{ padding: "0" }}>
        <div className={classes.cardTitle}>
          <h3>CardTitle</h3>
        </div>

        <Stepper activeStep={-1} orientation="vertical">
          {steps.map((label) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </CardContent>
    </Card>
  );
}
