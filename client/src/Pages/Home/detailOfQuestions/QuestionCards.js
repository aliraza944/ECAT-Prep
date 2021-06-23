import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    backgroundColor: "transparent",
    border: "4px solid #ffff",
    padding: "1px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.4em",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "500",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.8em",
    },
  },
  Qty: {
    fontSize: "1.8em",
    marginRight: "4px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2em",
    },
  },
}));

export default function QuestionCards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <Typography className={classes.title}>{props.title}</Typography>
        </div>
        <Typography className={classes.title}>
          <span className={classes.Qty}>{props.qty}</span> Questions
        </Typography>
      </CardContent>
    </Card>
  );
}
