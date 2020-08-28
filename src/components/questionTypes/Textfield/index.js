import React from "react";
import {
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    padding: 20,
  },
  question: {
    color: "black",
    background: "#bccfe8",
    display: "block",
    width: "100%",
    padding: "15px",
    "font-family": "Segoe UI",
    "letter-spacing": "0.5px",
    "line-height": "1.5",
  },
  textField: {
    "margin-left": "15px",
    "margin-top": "20px",
    display: "inline-block",
    width: "40%",
  },
  required: {
    display: "block",
    "text-align": "right",
    color: "red",
  },
  goodText: {
    display: "inline-block",
    "margin-top": "20px",
    "margin-left": "10px",
  },
  badText: {
    display: "inline-block",
    "margin-top": "20px",
    "margin-right": "20px",
  },
});

function Textfield(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Paper className={classes.paper}>
      <RadioGroup row>
        <FormLabel className={classes.question}>
          <b>{props.question}</b>
        </FormLabel>

        <TextField
          id="standard-full-width"
          className={classes.textField}
          placeholder="Enter email address..."
          fullWidth
        />
      </RadioGroup>
      {props.required == true && (
        <div className={classes.required}>
          <label>*required</label>
        </div>
      )}
    </Paper>
  );
}

export default Textfield;
