import React from "react";
import { Paper, FormLabel, RadioGroup, TextField } from "@material-ui/core";

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
    "font-size": "18px",
  },
  textField: {
    "margin-top": "20px",
    display: "inline-block",
    width: "100%",
    "& p": {
      color: "red",
    },
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
  const [emailInvalid, setEmailInvalid] = React.useState(false);

  const handleChange = (event) => {
    if (
      (event.target.value.includes("@") && event.target.value.includes(".")) ||
      event.target.value.trim().length === 0
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
          placeholder="Angiv e-mailadresse..."
          fullWidth
          onChange={handleChange}
          helperText={emailInvalid ? "Ugyldig e-mailadresse" : ""}
        />
      </RadioGroup>
    </Paper>
  );
}

export default Textfield;
