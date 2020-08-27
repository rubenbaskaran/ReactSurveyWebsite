import React from "react";
import {
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
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
  ratingScale: {
    "margin-left": "15px",
    "margin-top": "20px",
    display: "inline-block",
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

function AgeQuestion(props) {
  const [rating, setRating] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value);
    setRating(event.target.value);
  };

  const items = [];

  for (var i = 16; i < 100; i++) {
    items.push(
      <MenuItem key={i} value={i}>
        {i.toString()}
      </MenuItem>
    );
  }

  return (
    <Paper className={classes.paper}>
      <RadioGroup
        name="questionOne"
        value={rating.toString()}
        onChange={handleChange}
        row
      >
        <FormLabel className={classes.question}>
          <b>{props.question}</b>
        </FormLabel>

        <div className={classes.ratingScale}>
          <FormControl className={classes.formControl}>
            <Select
              value={rating}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                <em>Choose your age...</em>
              </MenuItem>
              {items}
            </Select>
          </FormControl>
        </div>
      </RadioGroup>
      <div className={classes.required}>
        <label>*required</label>
      </div>
    </Paper>
  );
}

export default AgeQuestion;
