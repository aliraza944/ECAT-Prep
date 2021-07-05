import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link, useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    color: "white",
    marginLeft: theme.spacing(3),
    textTransform: "capitalize",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { subject } = useParams();
  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "black" }} position="static">
        <Toolbar>
          <Link to="/" style={{ flexGrow: "1" }} className="link">
            <Typography variant="h6" className={classes.title}>
              ECAT Prep
            </Typography>
          </Link>

          <Typography variant="h6" className={classes.title}>
            {subject}
          </Typography>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
