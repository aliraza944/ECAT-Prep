import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MUIButton from "../../../Components/Button";
import useStyles from "./Style";

export default function Section(props) {
  const { title, description, imageUrl } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={6} sm={12}>
          <Paper elevation={0} className={classes.paper}>
            <Typography
              variant="h2"
              className="subtitle"
              color="textprimary"
              component="h2"
            >
              {title}
            </Typography>

            <Typography variant="p" className="sectionText" component="p">
              {description}
            </Typography>
            <MUIButton text="Sign up for free" />
          </Paper>
        </Grid>
        <Grid item md={6} sm={12}>
          <Paper
            elevation={0}
            style={{ overflow: "hidden" }}
            className={classes.paper}
          >
            <img src={imageUrl} className="responsiveImage" alt="" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
