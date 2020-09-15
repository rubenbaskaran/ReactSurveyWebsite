import React from "react";
import {
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
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
    "margin-left": "auto",
    "margin-right": "auto",
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
  evenly: {
    display: "inline-block",
    "margin-left": "20px",
  },
});

function Converter(value) {
  let output;
  switch (value) {
    case "Aldrig":
      output = 0;
      break;
    case "Sjældent":
      output = 1;
      break;
    case "Månedligt":
      output = 2;
      break;
    case "Ugentligt":
      output = 3;
      break;
    case "Dagligt eller næsten dagligt":
      output = 4;
      break;
    case "Vil ikke svare":
      output = 5;
      break;
  }

  return output;
}

function RatingScale(props) {
  const [rating, setRating] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value);
    setRating(event.target.value);
  };

  return (
    <Paper className={classes.paper}>
      <RadioGroup name="questionOne" value={rating} onChange={handleChange} row>
        <FormLabel className={classes.question}>
          <b>{props.question}</b>
        </FormLabel>
        <div className={classes.ratingScale}>
          {[
            ["0", "Aldrig"],
            ["1", "Sjældent"],
            ["2", "Månedligt"],
            ["3", "Ugentligt"],
            ["4", "Dagligt eller næsten dagligt"],
            ["5", "Vil ikke svare"],
          ].map((value) => (
            <FormControlLabel
              key={value[0]}
              value={value[0]}
              control={<Radio />}
              label={value[1]}
              className={classes.evenly}
            />
          ))}
        </div>
      </RadioGroup>
      {props.required == true && (
        <div className={classes.required}>
          <label>*required</label>
        </div>
      )}
    </Paper>
  );
}

export default RatingScale;
