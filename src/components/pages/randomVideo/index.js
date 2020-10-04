import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";

function RandomVideo() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  let url = "";
  const urlConfigs = "?autoplay=1&modestbranding=1&fs=0&rel=0&cc_load_policy=1";

  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      url = "https://www.youtube.com/embed/ElIl2gXQUnw" + urlConfigs;
      console.log("video 1");
      break;
    case 2:
      url = "https://www.youtube.com/embed/A3kmaB_r_e0" + urlConfigs;
      console.log("video 2");
      break;
    case 3:
      url = "https://www.youtube.com/embed/HRCP0xfc7b8" + urlConfigs;
      console.log("video 3");
      break;
  }

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={60} />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12} container justify="center">
            <iframe
              width="760"
              height="515"
              src={url}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/videotext"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Tilbage
            </Button>
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/secondsurvey"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Næste
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default RandomVideo;
