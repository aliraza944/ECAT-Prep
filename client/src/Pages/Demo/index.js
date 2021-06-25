import React from "react";
import Navigation from "../../Components/Navigation";
import useStyles from "./Style";
import { Typography } from "@material-ui/core";
import Footer from "../../Components/Footer";
import DemoIntro from "./DemoIntro";
import DemoStats from "./DemoStats";
const DemoPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation demo></Navigation>

      <Typography className={classes.demoAlert} variant="p" component="p">
        This is a demo account, so its features are limited.{" "}
        <span>You can sign up for a free account</span> to activate many more
        free features!
      </Typography>
      <div className={classes.demoContent}>
        <DemoIntro />
        <DemoStats></DemoStats>
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;
