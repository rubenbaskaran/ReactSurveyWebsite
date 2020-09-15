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

function RatingScale(props) {
  const [rating, setRating] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value);
    setRating(Number(event.target.value));
  };

  return (
    <Paper className={classes.paper}>
      <RadioGroup name="questionOne" value={rating} onChange={handleChange} row>
        <FormLabel className={classes.question}>
          <b>{props.question}</b>
        </FormLabel>
        <div className={classes.ratingScale}>
          {props.answers.map((value) => (
            <FormControlLabel
              key={props.answers.indexOf(value)}
              value={props.answers.indexOf(value)}
              control={<Radio />}
              label={value}
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
