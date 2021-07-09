import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./Style";
const BriefIntro = () => {
  const classes = useStyles();
  return (
    <div className={classes.briefIntro}>
      <Typography className="subtitle" variant="h2" component="h2">
        UCAT NINJA MAKES PREPARING FOR THE ECAT AS PAINLESS AS IT CAN BE.
      </Typography>

      <Typography className={`sectionText ${classes.intro}`}>
        Crafted by a team of medical and engineering students, our online ECAT
        course teaches you all the best techniques for aceing the 4 subjects,
        and takes you through 2,000+ practice questions to maximise your score.
      </Typography>
    </div>
  );
};

export default BriefIntro;
