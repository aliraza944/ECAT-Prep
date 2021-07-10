import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  myButton: {
    margin: theme.spacing(1),
    textTransform: "upercase",
    border: "1px solid #0000",
    padding: "5px 30px",
    color: "#fff",
    borderRadius: "4px",
    minWidth: "64px",
    width: "280px",
    fontSize: "1.2rem",
    letterSpacing: "0.07rem",

    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
}));
const MUIButton = (props) => {
  const classes = useStyles();
  return (
    <Button variant="contained" color="secondary" className={classes.myButton}>
      {" "}
      {props.text}
    </Button>
  );
};

export default MUIButton;
