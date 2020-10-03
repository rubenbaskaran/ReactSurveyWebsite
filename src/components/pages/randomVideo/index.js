import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";

// TODO: Add randomization

function RandomVideo() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value="60" />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>RESPEKT kampagne video</h1>
            <p>
              Nu vil du se en film, der varer ca. et halvt minut.
              <br />
              Husk at have lyden tændt, mens du ser filmen.
              <br />
              Når filmen er færdig, skal du besvare nogle af de sidste
              spørgsmål.
            </p>
          </Grid>
          <Grid item xs={12} container justify="center">
            <iframe
              width="760"
              height="515"
              src="https://www.youtube.com/embed/ElIl2gXQUnw?autoplay=1&modestbranding=1&fs=0&rel=0&cc_load_policy=1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/firstsurvey"
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
