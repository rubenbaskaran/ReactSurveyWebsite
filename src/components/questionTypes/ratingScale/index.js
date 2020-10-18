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
});

function RatingScale(props) {
  const [rating, setRating] = React.useState("");
  const [dirty, setDirty] = React.useState(false);
  const classes = useStyles();

  const handleChange = (event) => {
    setDirty(true);
    props.callback(props.id, props.question, event.target.value);
    setRating(Number(event.target.value));
  };

  return (
    <Paper className={classes.paper}>
      <RadioGroup name="questionOne" value={rating} onChange={handleChange} row>
        <FormLabel className={classes.question}>
          <b>{props.question}</b>
        </FormLabel>
        <div className={classes.ratingScale}>
          {(props.agreeDisagree == true && <label>Meget uenig</label>) ||
            (props.notAtAllVeryMuch == true && <label>Slet ikke</label>)}
          {props.answers.map((value) => (
            <FormControlLabel
              key={props.answers.indexOf(value)}
              value={props.answers.indexOf(value)}
              control={<Radio />}
              label={value}
              labelPlacement="top"
            />
          ))}
          {(props.agreeDisagree == true && <label>Meget enig</label>) ||
            (props.notAtAllVeryMuch == true && <label>I meget høj grad</label>)}
          <FormControlLabel
            key={10}
            value={10}
            control={<Radio />}
            label={"Vil ikke svare"}
            labelPlacement="top"
          />
        </div>
      </RadioGroup>
      {dirty == false && (
        <div className={classes.required}>
          <label>*svar mangler</label>
        </div>
      )}
    </Paper>
  );
}

export default RatingScale;
