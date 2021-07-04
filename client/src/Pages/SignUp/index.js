import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Naviagtion from "../../Components/Navigation";

import {
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  const [spinner, setSpinner] = useState(false);
  const [response, setResponse] = useState("");
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .max(30)
        .required("required"),
      email: Yup.string().email("invalid email").required("Required"),
      password: Yup.string()
        .required("password must be provided")
        .min(8, "password must be 8 characters"),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: async (values) => {
      setSpinner(true);
      try {
        const res = await axios.post(
          "http://localhost:5000/signup",
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
        console.log(res);
        setResponse(res.data);
        if (res) {
          setSpinner(false);
          console.log(response);
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
          {response && <div>{response}</div>}
          <form
            className={classes.root}
            onSubmit={formik.handleSubmit}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h2" component="h2" mb={2}>
              {" "}
              Please Sign Up
            </Typography>
            <div className="spinner">
              {spinner && <CircularProgress size="2rem" color="primary" />}
            </div>
            <FormControl
              style={{ overflowX: "unset", width: "80%" }}
              variant="outlined"
            >
              <InputLabel
                style={{ overflowX: "unset" }}
                htmlFor="component-outlined"
              >
                Name
              </InputLabel>
              <OutlinedInput
                style={{ overflowX: "unset" }}
                fullWidth
                id="name"
                label="Name"
                {...formik.getFieldProps("name")}
              />
            </FormControl>
            {formik.touched.name && formik.errors.name ? (
              <div>provide valid name</div>
            ) : null}
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
                {...formik.getFieldProps("email")}
              />
            </FormControl>
            {formik.touched.email && formik.errors.email ? (
              <div>provide valid email</div>
            ) : null}
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
                {...formik.getFieldProps("password")}
              />
            </FormControl>
            {formik.touched.passwod && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

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
                style={{ overflowX: "unset" }}
                fullWidth
                id="passwordConfirmation"
                label="Confirm Password"
                name="passwordConfirmation"
                {...formik.getFieldProps("passwordConfirmation")}
              />
            </FormControl>
            {formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation ? (
              <div>the paswords must match</div>
            ) : null}
            <div className={classes.submitBtn}>
              <Button type="submit" variant="contained" color="secondary">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </>
    </>
  );
}
