import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Naviagtion from "../../Components/Navigation";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useUpdateLogin } from "../../Store";
import { useHistory } from "react-router";
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

export default function LogIn() {
  const [spinner, setSpinner] = useState(false);
  const updateUser = useUpdateLogin();
  const classes = useStyles();
  const history = useHistory();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email").required("Required"),
      password: Yup.string()
        .required("password must be provided")
        .min(8, "password must be 8 characters"),
    }),
    onSubmit: async (values) => {
      setSpinner(true);
      try {
        const res = await axios.post(
          "http://localhost:5000/login",
          {
            values,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        if (res) {
          setSpinner(false);
          updateUser(res.data);
          history.push("/home");
        }
      } catch (error) {
        if (error) throw error;
      }
    },
  });

  return (
    <>
      <Naviagtion demo />
      <>
        <div className={classes.formContainer}>
          <form
            className={classes.root}
            onSubmit={formik.handleSubmit}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h2" component="h2">
              {" "}
              Please Login
              <div className="spinner">
                {spinner && <CircularProgress size="2rem" color="primary" />}
              </div>
            </Typography>
            <FormControl
              style={{ overflowX: "unset", width: "80%" }}
              variant="outlined"
            >
              <InputLabel style={{ overflowX: "unset" }} htmlFor="email">
                Email
              </InputLabel>
              <OutlinedInput
                style={{ overflowX: "unset" }}
                fullWidth
                id="email"
                label="Email"
                type="email"
                name="email"
                {...formik.getFieldProps("email")}
              />
            </FormControl>
            {formik.touched.email && formik.errors.email ? (
              <div>Enter valid email</div>
            ) : null}
            <FormControl
              style={{ overflowX: "unset", width: "80%" }}
              variant="outlined"
            >
              <InputLabel style={{ overflowX: "unset" }} htmlFor="password">
                Password
              </InputLabel>
              <OutlinedInput
                style={{ overflowX: "unset" }}
                fullWidth
                id="email"
                label="Password"
                type="password"
                name="password"
                {...formik.getFieldProps("password")}
              />
            </FormControl>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
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
