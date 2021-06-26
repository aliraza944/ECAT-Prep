import React from "react";
import Navigation from "../../Components/Navigation";
import useStyles from "./Style";
import Footer from "../../Components/Footer";
import SectionIntro from "../../Components/SectionIntro";
import DemoStats from "./DemoStats";
import DemoAlert from "../../Components/demoAlert";
const DemoPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation demo></Navigation>

      <DemoAlert />
      <div className={classes.demoContent}>
        <SectionIntro
          title=" HEY THERE, ROONIL WAZLIB. WELCOME TO UCAT (UKCAT) NINJA!"
          intro="UCAT (UKCAT) Ninja is an online UCAT (UKCAT) course and question
            bank rolled into one. It was made with ♥ by 6med, a small startup
            built and run exclusively by medical students. We really hope you
            enjoy using the website and find it useful - we remember how
            daunting the medical applications process was, and we're thrilled
            that you've allowed us to be a part of your journey. Good luck! Here
            is the link to our help center"
        />
        <DemoStats></DemoStats>
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;
