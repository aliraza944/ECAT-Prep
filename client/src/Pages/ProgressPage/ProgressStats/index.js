import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import physicsIcon from "../../../Images/physicsIcon.svg";
import CurrentProgressCard from "../../../Components/currentProgressCards";
import chemistryIcon from "../../../Images/chemistryIcon.svg";
import biologyIcon from "../../../Images/biologyIcon.svg";
import mathIcon from "../../../Images/mathIcon.svg";
import MyStats from "../MyStats";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(2),
    mrgin: "auto",
    textAlign: "center",
    border: "none",
    borderRadius: "16px",
    flexGrow: 1,

    color: theme.palette.text.secondary,
  },
}));

export default function ProgressStats() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="top" justify="center" spacing={2}>
        <Grid item md={8} xs={12}>
          <Paper className={classes.paper}>
            <h2> Currently Working on</h2>
            <Grid
              container
              alignItems="center"
              justify="center"
              spacing={2}
              style={{ marginBottom: "16px" }}
            >
              <Grid item sm={6} xs={12}>
                <CurrentProgressCard
                  title="physics"
                  progress="8"
                  icon={physicsIcon}
                  link="/home/physics"
                ></CurrentProgressCard>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <CurrentProgressCard
                  title="chemistry"
                  progress="7"
                  icon={chemistryIcon}
                  link="/home/chemistry"
                ></CurrentProgressCard>
              </Grid>
            </Grid>

            <Grid container alignItems="center" justify="center" spacing={2}>
              <Grid item sm={6} xs={12}>
                <CurrentProgressCard
                  title="math"
                  progress="5"
                  icon={mathIcon}
                  link="/home/math"
                ></CurrentProgressCard>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <CurrentProgressCard
                  title="biology"
                  progress="7"
                  icon={biologyIcon}
                  link="/home/biology"
                ></CurrentProgressCard>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>
            <h2>My Stats</h2>
            <MyStats subject="Phy" value={50} />
            <MyStats subject="Che" value={25} />
            <MyStats subject="Math" value={10} />
            <MyStats subject="Bio" value={40} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
