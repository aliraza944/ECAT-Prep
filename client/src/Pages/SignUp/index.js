import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Naviagtion from "../../Components/Navigation";

import {
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "600px",
    border: "2px solid #3f51b5",
    padding: "20px",
    "& > *": {
      margin: "20px 0 0 0px",
    },
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "100px 0 0 0 ",
    textAlign: "center",
    width: "100%",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <>
      <Naviagtion demo />
      <>
        <div className={classes.formContainer}>
          <form className={classes.root} noValidate autoComplete="off">
            <Typography variant="h2" component="h2">
              {" "}
              Please Sign Up
            </Typography>
            <FormControl
              style={{ overflowX: "unset", width: "80%" }}
              variant="outlined"
            >
              <InputLabel
                style={{ overflowX: "unset" }}
                htmlFor="component-outlined"
              >
                Email
              </InputLabel>
              <OutlinedInput
                style={{ overflowX: "unset" }}
                fullWidth
                id="component-outlined"
                label="Email"
              />
            </FormControl>
            <FormControl
              style={{ overflowX: "unset", width: "80%" }}
              variant="outlined"
            >
              <InputLabel
                style={{ overflowX: "unset" }}
                htmlFor="component-outlined"
              >
                Password
              </InputLabel>
              <OutlinedInput
                style={{ overflowX: "unset" }}
                fullWidth
                id="component-outlined"
                label="Password"
              />
            </FormControl>
            <FormControl
              style={{ overflowX: "unset", width: "80%" }}
              variant="outlined"
            >
              <InputLabel
                style={{ overflowX: "unset" }}
                htmlFor="component-outlined"
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="component-outlined"
                label="Confirm Password"
              />
            </FormControl>

            <div>
              <Button type="submit" variant="contained" color="secondary">
                Login
              </Button>
            </div>
          </form>
        </div>
      </>
    </>
  );
}
