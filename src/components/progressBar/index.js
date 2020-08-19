import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "../styles";

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
            {...props}
            classes={{
              colorPrimary: classes.colorPrimary,
              barColorPrimary: classes.barColorPrimary,
            }}
            className={classes.progressBarStyling}
          />
        </Box>
        <Box minWidth={35}>
          <Typography
            variant="body2"
            className={classes.progressBarFont}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default withStyles(useStyles)(LinearProgressWithLabel);
