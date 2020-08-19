import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../styles";

function ThankYou() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  return (
    <div>
      <Container fixed>
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Thank you for participating</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
              nunc id leo tristique blandit. Integer at dolor ornare, blandit
              nunc tristique, volutpat tortor. Phasellus quis magna posuere,
              faucibus lectus sit amet, venenatis nibh. Proin efficitur
              dignissim accumsan. Maecenas magna sem, suscipit nec odio ac,
              accumsan blandit felis. Suspendisse tincidunt massa sit amet
              consequat mattis. Curabitur interdum faucibus justo, et
              ullamcorper odio euismod ut. Nulla pellentesque feugiat nunc, ut
              luctus urna elementum a. Proin in cursus mauris. Donec tempor
              porttitor porttitor. Quisque at erat auctor, malesuada velit
              eleifend, malesuada urna. Donec in elit sit amet tellus consequat
              placerat. Mauris sit amet tempor elit. Mauris libero turpis,
              laoreet ac pretium non, condimentum vel ex.
            </p>
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Link to="/competitionparticipation">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Back to competition participation
              </Button>
            </Link>
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href="https://alkohologsamfund.dk/"
            >
              Go to alkohologsamfund
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ThankYou;
