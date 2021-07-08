import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";
export default function ParacticeDojoCards(props) {
  const classes = useStyles();
  const { avg } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        {avg ? (
          <div>
            <Typography variant="h5" component="h2">
              Avg. Paractice
            </Typography>
            <p className={classes.content}>
              <span className={classes.bold}>{props.average}%</span>
            </p>
          </div>
        ) : (
          <div>
            <Typography variant="h5" component="h2">
              Questions Completed
            </Typography>
            <p className={classes.content}>
              <span className={classes.bold}>{props.completed}</span>/
              {props.total}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
