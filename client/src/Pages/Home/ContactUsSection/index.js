import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MUIButton from "../../../Components/Button";
import useStyles from "./Style";
const ContactUsSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} color="transparent">
            <Typography variant="h2" component="h2">
              ECAT Prep
            </Typography>

            <Typography variant="p" className="sectionText" component="p">
              UCAT (UKCAT) Ninja is an online UCAT (UKCAT) preparation course
              and question bank rolled into one. We've got loads of tutorials
              that teach you the best techniques for each section, and our
              online interface has over 2,000 UCAT (UKCAT)-style questions for
              you to practice.
            </Typography>
            <MUIButton text="Sign up" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} color="transparent">
            <Typography variant="h2" className="subtitle" component="h2">
              CONTACT US
            </Typography>
            <Typography className="sectionText" variant="p" component="p">
              If you've got any questions, queries or concerns, we'd be
              delighted to chat with you: info@ecatprep.com.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUsSection;
