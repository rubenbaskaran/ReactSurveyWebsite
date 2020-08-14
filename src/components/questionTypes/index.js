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
  ratingScale: {
    padding: 20,
  },
  question: {
    color: "black",
  },
});

const handleChange = (event) => {
  console.log(event.target.value);
};

function RatingScale() {
  const classes = useStyles();
  const [rating] = React.useState(7);

  return (
    <Paper className={classes.ratingScale}>
      <FormLabel className={classes.question}>
        Question 1: Write the question here...
      </FormLabel>
      <RadioGroup
        name="questionOne"
        value={rating.toString()}
        onChange={handleChange}
        row
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <FormControlLabel
            key={value}
            value={value.toString()}
            control={<Radio />}
            label={value.toString()}
          />
        ))}
      </RadioGroup>
    </Paper>
  );
}

export default RatingScale;
