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
    textTransform: "inherit",
    fontWeight: "700",

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

export default function DemoIntro() {
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
            HEY THERE, ROONIL WAZLIB. WELCOME TO UCAT (UKCAT) NINJA!
          </Typography>
          <Typography className="sectionText" varient="p" component="p">
            UCAT (UKCAT) Ninja is an online UCAT (UKCAT) course and question
            bank rolled into one. It was made with ♥ by 6med, a small startup
            built and run exclusively by medical students. We really hope you
            enjoy using the website and find it useful - we remember how
            daunting the medical applications process was, and we're thrilled
            that you've allowed us to be a part of your journey. Good luck! Here
            is the link to our help center{" "}
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
