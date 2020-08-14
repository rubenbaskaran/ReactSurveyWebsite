import React from "react";
import {
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
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
  },
  ratingScale: {
    "margin-left": "auto",
    "margin-right": "auto",
    "margin-top": "20px",
    "background-color": "pink",
    display: "inline-block",
  },
  required: {
    display: "block",
    "text-align": "right",
    color: "red",
    "padding-top": "15px",
  },
  goodBadText: {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "margin-top": "20px",
  },
});

function RatingScale(props) {
  const [rating, setRating] = React.useState(5);
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value);
    setRating(Number(event.target.value));
  };

  return (
    <Paper className={classes.paper}>
      <RadioGroup
        name="questionOne"
        value={rating.toString()}
        onChange={handleChange}
        row
      >
        <FormLabel className={classes.question}>{props.question}</FormLabel>
        <div className={classes.goodBadText}>Very bad</div>
        <div className={classes.ratingScale}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <FormControlLabel
              key={value}
              value={value.toString()}
              control={<Radio />}
              label={value.toString()}
            />
          ))}
        </div>
        <div className={classes.goodBadText}>Very good</div>
      </RadioGroup>
      <div className={classes.required}>
        <label>*required</label>
      </div>
    </Paper>
  );
}

export default RatingScale;
