import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    "margin-top": "20px",
    "margin-bottom": "40px",
    background: "#f3f3f3",
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
  progressBarFont: {
    color: "black",
    "font-size": "1.25rem",
  },
  colorPrimary: {
    backgroundColor: "#f3f3f3",
  },
  barColorPrimary: {
    backgroundColor: "green",
  },
  progressBarStyling: {
    height: "20px",
    "border-radius": "5px",
  },
});

export default useStyles;
