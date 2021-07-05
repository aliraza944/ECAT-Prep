import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  Input,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*": {
      overflowX: "unset",
    },
  },
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
    margin: "100px 0 100px 0 ",
    textAlign: "center",
    width: "100%",
  },
  formLabel: {
    overflowX: "unset",
    fontSize: "1.4em",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
const QuestionsForm = () => {
  const [spinner, setSpinner] = useState(false);
  const formik = useFormik({
    initialValues: {
      subject: "",
      chapter: "",
      part: "",
      statement: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    },
    validationSchema: Yup.object({
      subject: Yup.string().required("Required"),
      chapter: Yup.string().required("password must be provided"),
      part: Yup.string().required("must be selected"),
      statement: Yup.string().required("satement is missing"),
      option1: Yup.string().required(" missing"),
      option2: Yup.string().required(" missing"),
      option3: Yup.string().required(" missing"),
      option4: Yup.string().required(" missing"),
      answer: Yup.string().required(" missing"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      //   setSpinner(true);

      try {
        const res = await axios.post(
          "http://localhost:5000/postquestions",
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
          // setSpinner(false);
          // updateAdmin(res.data);
          console.log(res);
        }
      } catch (error) {
        if (error) throw error;
      }
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <form
        className={classes.root}
        onSubmit={formik.handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h2" component="h2">
          {" "}
          Please Add your Question
          <div className="spinner">
            {spinner && <CircularProgress size="2rem" color="primary" />}
          </div>
        </Typography>
        <FormControl component="fieldset">
          <FormLabel className={classes.formLabel} component="legend">
            Please select your subject
          </FormLabel>
          <RadioGroup
            aria-label="subjects"
            {...formik.getFieldProps("subject")}
            name="subject"
            row
          >
            <FormControlLabel
              value="physics"
              control={<Radio />}
              label="Physics"
              name="subject"
            />
            <FormControlLabel
              value="chemistry"
              control={<Radio />}
              label="Chemistry"
              name="subject"
            />
            <FormControlLabel
              value="math"
              control={<Radio />}
              label="Math"
              name="subject"
            />
            <FormControlLabel
              value="biology"
              control={<Radio />}
              label="Biology"
              name="subject"
            />
          </RadioGroup>
          {formik.touched.subject && formik.errors.subject ? (
            <div>Slect a subject</div>
          ) : null}
        </FormControl>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="chapters">Chapters</InputLabel>
            <Select
              native
              label="Chapters"
              {...formik.getFieldProps("chapter")}
              inputProps={{
                name: "chapter",
                id: "outlined-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value="ch12">Chapters 1 & 2</option>
              <option value="ch34">Chapters 3 & 4</option>
              <option value="ch56">Chapters 5 & 6</option>
              <option value="ch78">Chapters 7 & 8</option>
              <option value="ch910">Chapters 9 & 10</option>
              <option value="ch1112">Chapters 11 & 12</option>
              <option value="ch1314">Chapters 13 & 14</option>
              <option value="ch1516">Chapters 15 & 16</option>
              <option value="ch1718">Chapters 17 & 18</option>
              <option value="ch1920">Chapters 19 & 20</option>
              <option value="ch2122">Chapters 21 & 22</option>
            </Select>
            {formik.touched.chapter && formik.errors.chapter ? (
              <div>choose a chapter</div>
            ) : null}
          </FormControl>
        </div>

        <FormControl component="fieldset">
          <FormLabel className={classes.formLabel} component="legend">
            Please select Subject Part
          </FormLabel>
          <RadioGroup
            aria-label="subjects"
            name="part"
            {...formik.getFieldProps("part")}
            row
          >
            <FormControlLabel
              value="parta"
              control={<Radio />}
              label="Part A"
            />
            <FormControlLabel
              value="partb"
              control={<Radio />}
              label="Part B"
            />
            <FormControlLabel
              value="partc"
              control={<Radio />}
              label="Part C"
            />
          </RadioGroup>
          {formik.touched.part && formik.errors.part ? (
            <div>select a part</div>
          ) : null}
        </FormControl>

        <div>
          <FormControl
            style={{ overflow: "unset", width: "80%" }}
            variant="outlined"
          >
            <TextField
              id="outlined-basic"
              style={{ overflow: "unset" }}
              label="Statement"
              variant="outlined"
              type="search"
              {...formik.getFieldProps("statement")}
            />
            {formik.touched.statement && formik.errors.statement ? (
              <div>Enter valid email</div>
            ) : null}
          </FormControl>
        </div>
        <div>
          <FormControl
            style={{ overflow: "unset", width: "80%" }}
            variant="outlined"
          >
            <TextField
              id="outlined-basic"
              style={{ overflow: "unset" }}
              label="Option 1"
              variant="outlined"
              type="search"
              {...formik.getFieldProps("option1")}
            />
            {formik.touched.option1 && formik.errors.option1 ? (
              <div>Enter first option</div>
            ) : null}
          </FormControl>
        </div>
        <div>
          <FormControl
            style={{ overflow: "unset", width: "80%" }}
            variant="outlined"
          >
            <TextField
              id="outlined-basic"
              style={{ overflow: "unset" }}
              label="Option 2"
              variant="outlined"
              type="search"
              {...formik.getFieldProps("option2")}
            />
            {formik.touched.option2 && formik.errors.option2 ? (
              <div>Enter option</div>
            ) : null}
          </FormControl>
        </div>
        <div>
          <FormControl
            style={{ overflow: "unset", width: "80%" }}
            variant="outlined"
          >
            <TextField
              id="outlined-basic"
              style={{ overflow: "unset" }}
              label="Option 3"
              variant="outlined"
              type="search"
              {...formik.getFieldProps("option3")}
            />
            {formik.touched.option3 && formik.errors.option3 ? (
              <div>Enter option</div>
            ) : null}
          </FormControl>
        </div>
        <div>
          <FormControl
            style={{ overflow: "unset", width: "80%" }}
            variant="outlined"
          >
            <TextField
              id="outlined-basic"
              style={{ overflow: "unset" }}
              label="Option 4"
              variant="outlined"
              type="search"
              {...formik.getFieldProps("option4")}
            />
          </FormControl>
          {formik.touched.option4 && formik.errors.option4 ? (
            <div>Enter option</div>
          ) : null}
        </div>
        <div>
          <FormControl
            style={{ overflow: "unset", width: "80%" }}
            variant="outlined"
          >
            <TextField
              id="outlined-basic"
              label="Answer"
              variant="outlined"
              type="search"
              {...formik.getFieldProps("answer")}
            />
            {formik.touched.answer && formik.errors.answer ? (
              <div>enter answer</div>
            ) : null}
          </FormControl>
        </div>

        <div>
          <Button type="submit" variant="contained" color="secondary">
            Submit Question
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuestionsForm;
