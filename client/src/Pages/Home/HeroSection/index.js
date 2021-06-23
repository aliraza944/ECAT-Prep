import React from "react";
import { Typography, Container, Box } from "@material-ui/core";

import Navigation from "../../../Components/Navigation";
import MUIButton from "../../../Components/Button";
import heroLanding from "../../../Images/heroLanding.jpg";

import useStyles from "./Style";
const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroSection}>
      <Navigation home />

      <Box className={classes.heroContnet}>
        <Typography variant="h2" className="subtitle" component="h2">
          your online Ecat preparaton course and question bank
        </Typography>
        <Box className={classes.heroButton}>
          <MUIButton text="Sign Up"></MUIButton>
          <MUIButton text="View Demo"></MUIButton>
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