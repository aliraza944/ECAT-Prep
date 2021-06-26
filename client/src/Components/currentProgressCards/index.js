import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import useStyles from "./Styles";
export default function CurrentProgressCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.container}>
          <div className={classes.avatarSide}>
            <Avatar src={props.icon} className={classes.subjectAvatar}></Avatar>
          </div>
          <div className={classes.progressSide}>
            <div>
              <Typography className={classes.title} color="textSecondary">
                {props.title}
              </Typography>
            </div>
            <div>
              {" "}
              <Typography
                varient="p"
                className={classes.progress}
                color="textSecondary"
                gutterBottom
              >
                {`Progress:${props.progress}%`}
              </Typography>
            </div>
            <Link className="link" to={props.link}>
              <Button className={classes.cardButton}>Continue</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
