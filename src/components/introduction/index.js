import React from "react";
import { Container, Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RatingScale from "../ratingScale";

const useStyles = makeStyles({
  grid: {
    background: "teal",
  },
  childGrid: {
    background: "pink",
  },
  ratingScale: {
    padding: 20,
  },
  question: {
    color: "black",
  },
  button: {
    color: "yellow",
    width: "100%",
  },
});

function Introduction() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  return (
    <div>
      <Container fixed>
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>This is the introduction page</h1>
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
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={12}>
            <RatingScale question="Question 1: Write the question here..." />
          </Grid>
          <Grid item xs={12}>
            <RatingScale question="Question 2: Write the question here..." />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Introduction;
