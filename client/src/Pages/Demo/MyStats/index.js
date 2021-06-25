import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Grid, Paper } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  bar: {
    width: "100%",
    height: "15px",
    borderRadius: "8px",
  },
});

export default function Mystats(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={2}>
          <Paper>
            <h2>{props.subject}</h2>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper>
            <LinearProgress
              variant="determinate"
              className={classes.bar}
              value={props.value}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
