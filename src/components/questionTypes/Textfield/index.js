import React from "react";
import { Paper, FormLabel, RadioGroup, TextField } from "@material-ui/core";
import useStyles from "../../styles";

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
