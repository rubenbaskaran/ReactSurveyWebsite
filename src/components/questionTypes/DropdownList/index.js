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
import { useDispatch } from "react-redux";
import store, {
  togglePreExtraSectionAction,
  togglePostExtraSectionAction,
} from "../../../globalVariables";

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

function DropdownList(props) {
  const [rating, setRating] = React.useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const HandleChange = (event) => {
    console.log(event.target.value);
    setRating(event.target.value);

    if (props.showExtraSection != "none") {
      if (props.showExtraSection == "first") {
        if (
          event.target.value == "Ja" ||
          event.target.value == "Nej, men har gjort det tidligere i livet"
        ) {
          dispatch(togglePreExtraSectionAction(true));
        } else {
          dispatch(togglePreExtraSectionAction(false));
        }
      } else if (props.showExtraSection == "second") {
        if (
          event.target.value == "Ja" ||
          event.target.value == "Nej, men har gjort det tidligere i livet"
        ) {
          dispatch(togglePostExtraSectionAction(true));
        } else {
          dispatch(togglePostExtraSectionAction(false));
        }
      }
    }
  };

  return (
    <Paper className={classes.paper}>
      <RadioGroup row>
        <FormLabel className={classes.question}>
          <b>{props.question}</b>
        </FormLabel>

        <div className={classes.ratingScale}>
          <FormControl className={classes.formControl}>
            <Select
              value={rating}
              onChange={HandleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                <em>{props.placeholder}</em>
              </MenuItem>
              {props.items.map((item) => (
                <MenuItem key={item} value={item}>
                  {item.toString()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </RadioGroup>
      {props.required == true && (
        <div className={classes.required}>
          <label>*svar mangler</label>
        </div>
      )}
    </Paper>
  );
}

export default DropdownList;
