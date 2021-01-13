import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import { useSelector, useDispatch } from "react-redux";
import {
  randomVideoNumberAction,
  setVideoWatchedAction,
} from "../../../globalVariables";

function RandomVideo(props) {
  const [spacing] = React.useState(1);
  const classes = useStyles();
  const dispatch = useDispatch();
  const urlConfigs =
    "?autoplay=1&modestbranding=1&fs=0&rel=0&cc_load_policy=1&enablejsapi=1";

  let randomVideoNumber = useSelector((state) => state.randomVideoNumber);
  if (randomVideoNumber == 0) {
    randomVideoNumber = Math.floor(Math.random() * 3) + 1;
    dispatch(randomVideoNumberAction(randomVideoNumber));
  }

  const [url, setUrl] = React.useState("");
  const [timeLeft, setTimeLeft] = React.useState(randomVideoNumber * 5);
  if (url == "") {
    switch (randomVideoNumber) {
      case 1:
        setUrl("https://www.youtube.com/embed/ElIl2gXQUnw" + urlConfigs);
        setTimeLeft(5);
        console.log("Showing video 1");
        break;
      case 2:
        setUrl("https://www.youtube.com/embed/A3kmaB_r_e0" + urlConfigs);
        setTimeLeft(10);
        console.log("Showing video 2");
        break;
      case 3:
        setUrl("https://www.youtube.com/embed/_wvkKixRIK0" + urlConfigs);
        setTimeLeft(15);
        console.log("Showing video 3");
        break;
    }
  }

  let videoWatched = useSelector((state) => state.setVideoWatched);
  const [btnDisabled, setBtnDisabled] = React.useState(true);

  useEffect(() => {
    if (videoWatched == false) {
      let myInterval = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          setBtnDisabled(false);
          dispatch(setVideoWatchedAction(true));
          clearInterval(myInterval);
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    } else {
      setBtnDisabled(false);
    }
  }, [timeLeft]);

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={50} />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12} container justify="center">
            <iframe
              id="existing-iframe-example"
              width="760"
              height="515"
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Grid>
          <Grid container item xs={12}>
            <Button
              // component={Link}
              // to="/secondsurvey"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={btnDisabled}
              onClick={() => props.setCurrentPage(6)}
            >
              {timeLeft != 0 && videoWatched != true ? timeLeft : "Næste"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default RandomVideo;
