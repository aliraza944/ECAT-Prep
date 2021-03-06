import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navigation from "../../../Components/Navigation";
import MUIButton from "../../../Components/Button";
import heroLanding from "../../../Images/heroLanding.png";

import useStyles from "./Style";
const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroSection}>
      <Navigation home landing />

      <Box className={classes.heroContnet}>
        <Typography variant="h2" className="subtitle" component="h2">
          your online Ecat preparaton course and question bank
        </Typography>
        <Box className={classes.heroButton}>
          <Link className="link" to="/signup">
            {" "}
            <MUIButton text="Sign Up for free"></MUIButton>
          </Link>
          <Link className="link" to="/home">
            <MUIButton text="try demo for free"></MUIButton>
          </Link>
        </Box>
        <div className={classes.heroContainer}>
          <img
            className={classes.heroImage}
            src={heroLanding}
            alt="heroLanding"
          />
        </div>
      </Box>
    </div>
  );
};

export default HeroSection;
