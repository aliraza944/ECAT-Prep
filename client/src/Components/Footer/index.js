import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#323a45",
    paddingTop: "20px",
    paddingBottom: "10px",
    color: "rgba(255,255,255,.8)",
    textAlign: "center",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography>All Rights recieved. Registered in Pakistan</Typography>
    </div>
  );
};

export default Footer;
