import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px 0 20px 0",
    padding: "0 0 0 2em",
    [theme.breakpoints.up("md")]: {
      padding: "0 0 0 4em",
    },
    backgroundImage:
      "linear-gradient(-135deg,#ffffff 0%,#ff8324 0%,#ffa415 100%)",
    width: "100%",
  },
  headerTextContainer: {
    backgroundColor: "transparent",
    padding: "15px 0 15px 0",
  },
  headerText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: "1.8em",
    letterSpacing: "0.05em",
  },
}));

export default function SubjectDashBoardHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} color="transparent">
      <Paper elevation={0} className={classes.headerTextContainer}>
        <h2 className={classes.headerText}>{props.subject}</h2>
      </Paper>
    </div>
  );
}
