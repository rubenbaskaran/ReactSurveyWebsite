import React from "react";
import {
  Paper,
  FormLabel,
  RadioGroup,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  togglePreExtraSectionAction,
  togglePostExtraSectionAction,
} from "../../../globalVariables";
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

function DropdownList(props) {
  const [rating, setRating] = React.useState("");
  const [dirty, setDirty] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const HandleChange = (event) => {
    setDirty(true);
    props.callback(props.id, props.question, event.target.value);
    setRating(event.target.value);

    if (props.showExtraSection !== "none") {
      if (props.showExtraSection === "first") {
        if (
          event.target.value === "Ja" ||
          event.target.value === "Nej, men har gjort det tidligere i livet"
        ) {
          dispatch(togglePreExtraSectionAction(true));
        } else {
          dispatch(togglePreExtraSectionAction(false));
        }
      } else if (props.showExtraSection === "second") {
        if (
          event.target.value === "Ja" ||
          event.target.value === "Nej, men har gjort det tidligere i livet"
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
        <FormLabel className={classes.questionWithoutMarginBottom}>
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
              style={{ width: "150px" }}
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
      {dirty === false && (
        <div className={classes.required}>
          <label>*svar mangler</label>
        </div>
      )}
    </Paper>
  );
}

export default DropdownList;
