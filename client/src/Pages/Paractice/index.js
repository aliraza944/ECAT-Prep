import React from "react";
import ParacticeNav from "./ParacticeNav";
import { Paper, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "./Styles";
const Paractice = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  return (
    <div>
      <ParacticeNav />
      <div className={classes.paracticeContent}>
        <Paper className={classes.paper} elevation={0}>
          <div className={classes.paperContent}>
            <p className={classes.qustionsAmount}>Question 1 of 1</p>
            <h2 className={classes.qeustionTitle}>Is hassan saleem a moron</h2>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="question"
                name="paraticeQuestion"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel
                  value="yes absolutely"
                  control={<Radio />}
                  label="Absulutely Yes"
                />
                <FormControlLabel
                  value="heck yeah"
                  control={<Radio />}
                  label="100% yes"
                />
                <FormControlLabel
                  value="ohhh yeah"
                  control={<Radio />}
                  label="Hell yeah"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Paper>
      </div>
      <div className={classes.questionBtn}>
        <Button style={{ background: "#e83030" }}>Previous</Button>
        <Button style={{ background: "#81dd1c" }}>Next</Button>
      </div>
    </div>
  );
};

export default Paractice;
