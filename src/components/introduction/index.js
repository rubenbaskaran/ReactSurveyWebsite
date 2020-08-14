import React from "react";
import { Container, Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RatingScale from "../ratingScale";

const useStyles = makeStyles({
  container: {
    "margin-top": "20px",
  },
  grid: {
    background: "#f3f3f3",
    padding: "20px",
  },
  childGrid: {
    background: "#f3f3f3",
  },
  button: {
    width: "100%",
    "margin-top": "15px",
  },
});

function Introduction() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  return (
    <div>
      <Container fixed className={classes.container}>
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>This is the introduction page</h1>
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
          <Grid item xs={12}>
            <RatingScale question="Question 1: Write the question here..." />
          </Grid>
          <Grid item xs={12}>
            <RatingScale question="Question 2: Write the question here..." />
          </Grid>
          <Grid container item sm={6} xs={12} className={classes.childGrid}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href="https://alkohologsamfund.dk/"
            >
              Back to alkohologsamfund
            </Button>
          </Grid>
          <Grid container item sm={6} xs={12} className={classes.childGrid}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href="/humancheck"
            >
              Go to human check
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Introduction;
