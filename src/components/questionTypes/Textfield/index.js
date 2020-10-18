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
  const [dirty, setDirty] = React.useState(true); // Change to false for future purposes
  const [emailInvalid, setEmailInvalid] = React.useState(false);

  const handleChange = (event) => {
    // setDirty(true); // Uncomment for future purposes
    if (
      (event.target.value.includes("@") && event.target.value.includes(".")) ||
      event.target.value.trim().length == 0
    ) {
      setEmailInvalid(false);
    } else {
      setEmailInvalid(true);
    }
    props.callback(props.id, props.question, event.target.value);
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
          placeholder="Angiv e-mail adresse..."
          fullWidth
          onChange={handleChange}
          helperText={emailInvalid ? "Ugyldig e-mail adresse" : ""}
        />
      </RadioGroup>
      {dirty == false && (
        <div className={classes.required}>
          <label>*svar mangler</label>
        </div>
      )}
    </Paper>
  );
}

export default Textfield;
