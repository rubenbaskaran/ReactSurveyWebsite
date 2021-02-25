import React from "react";
import { Paper, FormLabel, RadioGroup, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    "margin-top": "20px",
    "margin-bottom": "40px",
    background: "#f6f9fb",
    padding: "20px",
    "border-radius": "10px",
  },
  button: {
    "margin-top": "15px",
    width: "100%",
  },
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
    marginBottom: "20px",
  },
  questionWithoutMarginBottom: {
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
  ratingScale: {
    "margin-left": "15px",
    "margin-top": "20px",
    display: "inline-block",
  },
  required: {
    display: "block",
    "text-align": "right",
    color: "red",
    paddingRight: "15px",
  },
  textField: {
    "margin-top": "20px",
    display: "inline-block",
    width: "100%",
    "& p": {
      color: "red",
    },
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
        <FormLabel className={classes.questionWithoutMarginBottom}>
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
