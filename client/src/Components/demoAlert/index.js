import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  demoAlert: {
    backgroundColor: "#F12D5E",
    color: "white",
    padding: "20px",
    alignText: "center",
    "& span": {
      textDecoration: "underline  dotted white",
    },
  },
}));
const DemoAlert = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.demoAlert} variant="p" component="p">
        This is a demo account, so its features are limited.{" "}
        <Link to="/signup" className="link">
          {" "}
          <span>You can sign up for a free account</span>
        </Link>{" "}
        to activate many more free features!
      </Typography>
    </div>
  );
};

export default DemoAlert;
