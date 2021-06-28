import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    margin: "40px 0px 40px 0px",
  },
  demoHeading: {
    color: " #3e3e3e",
    fontSize: "1.6em",
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: "0.05em",
    paddingTop: "10px",
    lineHeight: "1.6em",

    [theme.breakpoints.up("md")]: {
      fontSize: "2em",
    },
  },
  content: {
    margin: "40px 40px",
  },
}));

export default function SectionIntro(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <div className={classes.content}>
          {" "}
          <Typography
            varient="h2"
            component="h2"
            className={classes.demoHeading}
          >
            {props.title}
          </Typography>
          <Typography className="sectionText">{props.intro}</Typography>
        </div>
      </Paper>
    </div>
  );
}
