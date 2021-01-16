import React, { useEffect } from "react";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import { useSelector } from "react-redux";
import { UploadVideoId } from "../../CallsToBackend";

function RandomVideo(props) {
  const [spacing] = React.useState(1);
  const [randomVideoNumber, setRandomVideoNumber] = React.useState(0);
  const classes = useStyles();
  let recordId = useSelector((state) => state.recordId);
  const urlConfigs =
    "?autoplay=1&modestbranding=1&fs=0&rel=0&cc_load_policy=1&enablejsapi=1";

  if (randomVideoNumber === 0) {
    setRandomVideoNumber(Math.floor(Math.random() * 3) + 1);
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

  const [btnDisabled, setBtnDisabled] = React.useState(true);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setBtnDisabled(false);
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [timeLeft]);

  const UploadDataToRedcap = () => {
    props.setCurrentPage(6);

    let payload = {
      record_id: recordId,
      video_id: randomVideoNumber,
    };
    UploadVideoId(payload);
  };

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
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={btnDisabled}
              onClick={UploadDataToRedcap}
            >
              {timeLeft != 0 ? timeLeft : "Næste"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default RandomVideo;
