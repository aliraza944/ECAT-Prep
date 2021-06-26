import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  demoAlert: {
    backgroundColor: "#F12D5E",
    color: "white",
    padding: "20px",
    alignText: "center",
  },
}));
const DemoAlert = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.demoAlert} variant="p" component="p">
        This is a demo account, so its features are limited.{" "}
        <span>You can sign up for a free account</span> to activate many more
        free features!
      </Typography>
    </div>
  );
};

export default DemoAlert;
