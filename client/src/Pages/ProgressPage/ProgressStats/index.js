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
import { useFetch } from "../../../Hooks/useFetch";
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
  const { response } = useFetch(`/progress`);

  return (
    <div className={classes.root}>
      <Grid container alignItems="flex-start" justify="center" spacing={2}>
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
                  progress={response && response.physics.correct}
                  icon={physicsIcon}
                  link="/home/physics"
                ></CurrentProgressCard>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <CurrentProgressCard
                  title="chemistry"
                  progress={response && response.chemistry.correct}
                  icon={chemistryIcon}
                  link="/home/chemistry"
                ></CurrentProgressCard>
              </Grid>
            </Grid>

            <Grid container alignItems="center" justify="center" spacing={2}>
              <Grid item sm={6} xs={12}>
                <CurrentProgressCard
                  title="math"
                  progress={response && response.math.correct}
                  icon={mathIcon}
                  link="/home/math"
                ></CurrentProgressCard>
              </Grid>
              <Grid item sm={6} xs={12}>
                {" "}
                <CurrentProgressCard
                  title="biology"
                  progress={response && response.biology.correct}
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
            <MyStats
              subject="Phy"
              value={response && response.physics.answered}
            />
            <MyStats
              subject="Che"
              value={response && response.chemistry.answered}
            />
            <MyStats
              subject="Math"
              value={response && response.math.answered}
            />
            <MyStats
              subject="Bio"
              value={response && response.biology.answered}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
