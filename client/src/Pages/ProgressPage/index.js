import React from "react";
import Navigation from "../../Components/Navigation";
import useStyles from "./Style";
import Footer from "../../Components/Footer";
import SectionIntro from "../../Components/SectionIntro";
import ProgressStats from "./ProgressStats";
import DemoAlert from "../../Components/demoAlert";
import { useLogin } from "../../Store";
const ProgressPage = () => {
  const user = useLogin();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation demo></Navigation>

      <DemoAlert />
      <div className={classes.demoContent}>
        <SectionIntro
          title={` HEY THERE, ${
            user.name ? user.name : "Stranger"
          }. WELCOME TO ECAT NINJA!`}
          intro="ECAT Ninja is an online ECAT preparations and question
            bank rolled into one. It was made with ♥ by colaborations of engineering and medical  students. We really hope you
            enjoy using the website and find it useful - we remember how
            daunting the engineering and medical applications process was, and we're thrilled
            that you've allowed us to be a part of your journey. Good luck! Here
            is the link to our help center"
        />
        <ProgressStats></ProgressStats>
      </div>
      <Footer />
    </div>
  );
};

export default ProgressPage;
