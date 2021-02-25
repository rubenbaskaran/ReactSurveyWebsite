import React from "react";
import { Box, LinearProgress, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
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
  progressBarPlacement: {
    "margin-top": "40px",
  },
});

function LinearProgressWithLabel(props) {
  const classes = useStyles();

  LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };

  return (
    <div className={classes.progressBarPlacement}>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress
            variant="determinate"
            style={{
              backgroundColor: "#f6f9fb",
              height: "20px",
              borderRadius: "5px",
            }}
            {...props}
          />
        </Box>
        <Box minWidth={35}>
          <Typography
            variant="body2"
            style={{ color: "black", fontSize: "1.25rem" }}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default LinearProgressWithLabel;
