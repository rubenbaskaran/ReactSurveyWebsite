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
  progressBarPlacement: {
    "margin-top": "40px",
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
  textField: {
    "margin-top": "20px",
    display: "inline-block",
    width: "100%",
    "& p": {
      color: "red",
    },
  },
});

export default useStyles;
